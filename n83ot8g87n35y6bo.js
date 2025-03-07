const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/gllm4jq1rm80cl70.js", "assets/bq4rrqi54riy5k2e.js", "assets/mna1wiucqak6lqzp.js", "assets/root-ey6kd8gf.css", "assets/lwme42j7zzyr3q7j.js", "assets/conversation-small-fu0y35oi.css", "assets/kt1n3cboecld9don.js", "assets/mvhqd4tvzpjcyc7r.js", "assets/mi93vnc3bxzyhv3q.js", "assets/ivmslo5piqpot98f.js", "assets/nc7lfqrltu2fqkst.js", "assets/m0wlwtibo8yb2c2h.js", "assets/cxz91putlw7pmfk2.js", "assets/h880urmi5g802uqa.js", "assets/klo929ei6t0ugfr6.js", "assets/niyc1j17i1iogjjg.js", "assets/hx3p6g5v1c632c0c.js", "assets/fl41y0is7h6g0gxe.js", "assets/jk32tpxhwr7rebuc.js", "assets/htcgfe1v0opekz8u.js", "assets/h88qamfv10wkp88v.js", "assets/nmr5d79kmws977p2.js", "assets/lizbu6fwxn81l4m4.js", "assets/g77ymanjjcustcw3.js", "assets/m44xlxtgozicne9l.js", "assets/mudxqzvnzrr4lh0z.js", "assets/m3b3wk7x0ejaq5a6.js", "assets/oqh7hur52tf42g0a.js", "assets/m1vqqb108216sh4q.js", "assets/ld626s1jynzsi9nc.js", "assets/hexf8t3k7mz2tojm.js", "assets/o1evwbg519x51iqn.js", "assets/g4gq1z8n1v7hj42m.js"]))) => i.map(i => d[i]);
import {
    dZ as G,
    S,
    P as A,
    a as F,
    d4 as U,
    E as K,
    g6 as H,
    bz as u,
    bA as g,
    U as W,
    g7 as q,
    dn as y,
    l as N,
    f_ as Q,
    fZ as Y,
    dK as B,
    fn as Z,
    z as J,
    ab as X,
    aM as $,
    fg as ee
} from "./bq4rrqi54riy5k2e.js";
import {
    r as d,
    j as e,
    ax as V,
    d as se,
    a as L,
    c as ae,
    av as f,
    e as M,
    h as ie
} from "./mna1wiucqak6lqzp.js";
import {
    g7 as te,
    g8 as R,
    g9 as re,
    ga as oe,
    gb as ne,
    gc as P,
    gd as de,
    ce as h,
    cf as m,
    ge as le,
    cF as ce,
    cG as ue,
    gf as ge,
    gg as me,
    gh as fe,
    gi as he,
    l as ve,
    ej as xe,
    gj as pe,
    dW as be,
    gk as je,
    gl as we,
    gm as Ee,
    gn as Ie,
    T as O,
    go as Te,
    gp as Ce,
    gq as _e,
    gr as ke
} from "./lwme42j7zzyr3q7j.js";
import {
    b as ye,
    u as Ne
} from "./nc7lfqrltu2fqkst.js";
import {
    C as Me
} from "./h880urmi5g802uqa.js";
import {
    M as Pe
} from "./lizbu6fwxn81l4m4.js";
import {
    K as Oe
} from "./hexf8t3k7mz2tojm.js";
import {
    a as Se
} from "./niyc1j17i1iogjjg.js";

function Ae() {
    const s = te(o => o.notifications),
        {
            activeThreadIds: a
        } = G(),
        t = d.useRef(new Set);
    return d.useEffect(() => {
        s.filter(i => i.clientThreadId === void 0 || a.has(i.clientThreadId)).map(i => i.id).filter(i => i !== void 0).forEach(i => R(i)), s.forEach(i => {
            i.id && !t.current.has(i.id) && (S.logEvent("chatgpt_notification_shown"), A.logEvent(F.notificationShown), t.current.add(i.id))
        })
    }, [a, s]), s.length === 0 || U ? null : e.jsx("div", {
        className: "fixed right-4 top-8 my-2 flex max-h-[90vh] flex-col-reverse space-y-2 space-y-reverse overflow-y-auto px-2 py-4",
        children: e.jsx(V, {
            children: s.map(o => e.jsx(Ve, { ...o
            }, o.id))
        })
    })
}

function Fe({
    notification: s
}) {
    return e.jsx(re, {
        iconName: "openai",
        size: "medium",
        className: "border-token-secondary rounded-full border bg-token-main-surface-primary text-token-text-primary"
    })
}

function Ve({ ...s
}) {
    const a = se(),
        t = L(),
        o = ae(),
        i = K(s.clientThreadId),
        l = () => {
            S.logEvent("chatgpt_notification_clicked"), A.logEvent(F.notificationClicked), s.onClick != null ? s.onClick() : i && oe(a, t, i), s.id && R(s.id)
        };
    return e.jsxs(f.div, {
        onClick: l,
        className: "inline-flex w-80 cursor-pointer items-center justify-start gap-2.5 rounded-2xl border border-token-border-light bg-token-main-surface-primary px-3 py-3 align-middle shadow-lg",
        initial: {
            opacity: 0,
            x: 320
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: 320
        },
        transition: {
            duration: .5
        },
        children: [e.jsx(Fe, {
            notification: s
        }), e.jsxs("div", {
            className: "inline-flex w-full shrink grow basis-0 flex-col items-start justify-start overflow-hidden",
            children: [e.jsx("div", {
                className: "w-full truncate text-sm font-medium text-token-text-primary",
                children: s.title ? ? o.formatMessage({
                    id: "mpXAeu",
                    defaultMessage: "New chat"
                })
            }), e.jsx("div", {
                className: "w-full truncate text-sm text-token-text-tertiary",
                children: s.subtitle ? ? o.formatMessage({
                    id: "qMEc8J",
                    defaultMessage: "New Message"
                })
            })]
        })]
    })
}
const Le = 450;

function Re({
    children: s,
    clientThreadId: a,
    isOpen: t,
    onClose: o
}) {
    return e.jsx(V, {
        children: t && e.jsx(H, {
            children: e.jsx(ne.Provider, {
                value: {
                    isEmbeddedInFocusedView: !0
                },
                children: e.jsxs("div", {
                    className: "absolute inset-0 flex flex-col",
                    children: [e.jsx(f.div, {
                        className: "h-full w-full bg-token-main-surface-secondary",
                        ...P
                    }), e.jsxs("div", {
                        className: "absolute inset-0 flex",
                        children: [e.jsx("div", {
                            className: "flex-grow overflow-auto",
                            children: s
                        }), e.jsx(f.div, {
                            className: "relative shrink-0 border-l border-token-border-medium bg-token-main-surface-primary",
                            style: {
                                width: Le
                            },
                            ...P,
                            children: e.jsx("div", {
                                className: "h-[100vh] pb-4",
                                children: e.jsx(Pe, {
                                    clientThreadId: a,
                                    hideHeader: !0,
                                    hideFooter: !0,
                                    hideToolsOverlay: !0,
                                    messagesVerticalAlign: "bottom"
                                }, a)
                            })
                        })]
                    })]
                })
            })
        })
    })
}
const ze = u(() => g(() =>
        import ("./gllm4jq1rm80cl70.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))),
    De = u(() => g(() =>
        import ("./kt1n3cboecld9don.js"), __vite__mapDeps([6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])).then(s => s.ImageEditor)),
    Ge = u(async () => Promise.resolve(() => null));

function Ue({
    clientThreadId: s
}) {
    const a = de();
    d.useEffect(() => {
        h.close()
    }, [s]);
    let t;
    return a ? .type === m.ADAVisualization ? t = e.jsx(ze, {
        clientThreadId: s,
        visualization: a.visualization
    }) : a ? .type === m.Image ? t = e.jsx(De, {
        clientThreadId: s,
        messageId: a.messageId,
        image: a.image,
        allImages: a.allImages
    }, a.image.asset_pointer) : a ? .type === m.ImageGen && (t = e.jsx(Ge, {
        clientThreadId: s,
        messageId: a.messageId,
        image: a.image,
        allImages: a.allImages
    }, a.image.asset_pointer)), e.jsx(Re, {
        clientThreadId: s,
        isOpen: a != null,
        onClose: h.close,
        children: t
    })
}
var Ke = {};
const He = u(() => g(() =>
        import ("./o1evwbg519x51iqn.js"), __vite__mapDeps([31, 2, 1, 3, 4, 5, 10, 11, 12, 15, 16, 22, 23, 21, 24, 25, 26, 27, 28, 29]))),
    We = u(() => g(() =>
        import ("./g4gq1z8n1v7hj42m.js"), __vite__mapDeps([32, 2, 1, 3, 4, 5, 15, 12, 11, 16])).then(s => s.MadlibsModal));

function as(s) {
    const {
        urlThreadId: a,
        clientThreadId: t,
        prefetchSearch: o
    } = s, i = W(), l = M(), [v] = ie(), [r, c] = d.useState(() => {
        if (a !== void 0) {
            const n = a;
            return q(n) ? ? n
        }
        return t !== void 0 ? t : y()
    });
    a !== void 0 && r !== a && (N(r) === a || c(a));
    const z = le(M());
    d.useEffect(() => {
        a === void 0 && N(r) !== void 0 && c(y())
    }, [a, r, z]);
    const D = ce(ue.workspaceId),
        {
            eligible: x,
            isLoading: p,
            markAsViewed: b
        } = ge(),
        j = me(),
        {
            eligible: w,
            isLoading: E,
            markAsViewed: I
        } = fe(),
        T = he(),
        C = ve();
    d.useEffect(() => {
        Q(!0).then(n => {
            n.force_login && C({
                authType: "login"
            }), xe.initializeAndGatherData(n), Y.initializeAndGatherData(n)
        })
    }, [C]), d.useEffect(() => {
        const n = v.get(pe) === "true";
        i !== n && B.setIsTemporaryChatEnabled(n)
    }, [i, v]), d.useEffect(() => {
        l.state ? .focusObject && h.setFocusedObject(l.state.focusObject)
    }, [l.state ? .focusObject]), d.useEffect(() => {
        !p && x && (b(), j())
    }, [x, p, b, j]), d.useEffect(() => {
        !E && w && (I(), T())
    }, [w, E, I, T]), ye(r);
    const _ = L();
    return d.useEffect(() => Z($, {
        completionFinished: n => {
            if (n.serverThreadId != null && !i) {
                const k = J(n.serverThreadId) ? .mode;
                k ? .kind === X.GizmoInteraction && be.handleGizmoInteracted(_, k.gizmo_id)
            }
        }
    }), [i, _]), e.jsx(ee.Provider, {
        value: null,
        children: e.jsx(je, {
            children: e.jsxs(we, {
                clientThreadId: r,
                children: [e.jsx(Ee, {
                    clientThreadId: r
                }, D), e.jsx(qe, {
                    clientThreadId: r,
                    setClientThreadId: c
                }), e.jsx(Oe, {}), e.jsx(Ie, {}), e.jsx(Se, {
                    clientThreadId: r,
                    setClientThreadId: c,
                    prefetchSearchPromises: o,
                    children: e.jsxs(O, {
                        clientThreadId: r,
                        children: [e.jsx(Me, {
                            urlThreadId: a,
                            clientThreadId: r,
                            setClientThreadId: c
                        }), e.jsx(Qe, {})]
                    })
                }), e.jsx(O, {
                    clientThreadId: r,
                    children: e.jsx(Ue, {
                        clientThreadId: r
                    })
                }), e.jsx(Te, {
                    clientThreadId: r
                }), e.jsx(Ce, {}), e.jsx(Ae, {}), e.jsx(_e, {}), null]
            })
        })
    })
}

function qe({
    clientThreadId: s,
    setClientThreadId: a
}) {
    const {
        isOpen: t,
        isLoading: o
    } = Ne();
    return !o && t ? e.jsx(He, {
        clientThreadId: s,
        setClientThreadId: a
    }) : null
}

function Qe() {
    const {
        isOpen: s
    } = ke();
    return s ? e.jsx(We, {}) : null
}
typeof window < "u" && (window._g = Ke.GOKU_SERVICE);
export {
    as as C, Le as F
};
//# sourceMappingURL=n83ot8g87n35y6bo.js.map