const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/b6el71ol8d7qj0zo.js", "assets/mna1wiucqak6lqzp.js", "assets/lwme42j7zzyr3q7j.js", "assets/bq4rrqi54riy5k2e.js", "assets/root-ey6kd8gf.css", "assets/conversation-small-fu0y35oi.css", "assets/lgmptc5r8j0usf7s.js", "assets/l4ce2zdnnawhaijx.js", "assets/oqh7hur52tf42g0a.js", "assets/m3b3wk7x0ejaq5a6.js", "assets/hu7ncopiydwaw46a.js", "assets/hmkqz2412ql0ayou.js", "assets/npk39rv6apmoavn4.js", "assets/gy64pge8qevmvg7e.js", "assets/ff3dg9pqimxn5e3g.js", "assets/bcieds2s0jraaq45.js", "assets/m0wlwtibo8yb2c2h.js", "assets/cxz91putlw7pmfk2.js", "assets/dezjogalgkr4n852.js", "assets/l8hbmbuftwr3v440.js", "assets/hx3p6g5v1c632c0c.js", "assets/fr83hp2kuh3q1zfr.js", "assets/fzrn137102spawew.js", "assets/eqjyr70wex3y5gfz.js", "assets/m1vqqb108216sh4q.js", "assets/g77ymanjjcustcw3.js", "assets/ld626s1jynzsi9nc.js", "assets/niyc1j17i1iogjjg.js", "assets/incso7gaflms21pb.js", "assets/izpd64p6gs4nsaky.js", "assets/bk8slwxjkdlmxjxm.js", "assets/bnmzmikiaefr3trh.js", "assets/ny6tpsdxtp9tp9uu.js", "assets/n4gvsdnw0wjo4fci.js", "assets/btagl6w1gub4aw61.js", "assets/ebx47upunapb0n22.js", "assets/kc62n481nbmd0hs7.js", "assets/mxia2pxl0en2rnk3.js"]))) => i.map(i => d[i]);
import {
    bz as c,
    bA as x,
    V as C,
    aB as d,
    cb as i,
    e1 as h
} from "./bq4rrqi54riy5k2e.js";
import {
    r as l,
    j as s
} from "./mna1wiucqak6lqzp.js";
import {
    S as u,
    a as j,
    b,
    N as f,
    F as g
} from "./klo929ei6t0ugfr6.js";
import {
    C as v
} from "./niyc1j17i1iogjjg.js";
import {
    D as H,
    E as M,
    F as N,
    G as _,
    H as E,
    I as F,
    J as w,
    K as R,
    L as y,
    M as L
} from "./lwme42j7zzyr3q7j.js";
import {
    u as P
} from "./fl41y0is7h6g0gxe.js";
import {
    S as A,
    C as B
} from "./jk32tpxhwr7rebuc.js";
import {
    T as m,
    M as D
} from "./lizbu6fwxn81l4m4.js";
const O = c(() => x(() =>
        import ("./b6el71ol8d7qj0zo.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34])).then(e => e.CanvasFocusedViewManager)),
    V = c(() => x(() =>
        import ("./ebx47upunapb0n22.js"), __vite__mapDeps([35, 1, 3, 4, 36, 2, 5, 37])).then(e => e.SearchResultsModal));

function X({
    clientThreadId: e,
    setClientThreadId: a,
    urlThreadId: o,
    threadContent: r
}) {
    const n = C(),
        {
            createNewThread: S,
            resetThread: t
        } = N({
            clientThreadId: e,
            setClientThreadId: a
        }),
        p = _();
    return s.jsxs(s.Fragment, {
        children: [s.jsx(k, {
            clientThreadId: e,
            resetThread: t
        }), s.jsx(E, {
            clientThreadId: e,
            urlThreadId: o
        }), s.jsx(v, {
            clientThreadId: e,
            children: s.jsxs(u, {
                hideNavigation: n,
                mobileHeaderContent: p ? s.jsx(m, {
                    clientThreadId: e,
                    inMobileHeader: !0
                }) : s.jsx(F, {
                    children: s.jsx(m, {
                        clientThreadId: e,
                        inMobileHeader: !0
                    })
                }),
                mobileHeaderBottomContent: s.jsx(w, {
                    clientThreadId: e
                }),
                mobileHeaderLeftContent: s.jsx(j, {
                    onNewChatButtonClick: t
                }),
                mobileHeaderRightContent: s.jsx(b, {
                    clientThreadId: e,
                    onNewChatButtonClick: t
                }),
                renderNavSidebar: () => s.jsx(f, {
                    navHeader: e ? s.jsx(A, {
                        className: "flex h-[60px] items-center xs:pr-3 md:h-header-height",
                        onNewThread: S
                    }) : null,
                    children: s.jsx(B, {
                        clientThreadId: e
                    })
                }),
                threadFlyout: s.jsx(g, {
                    clientThreadId: e
                }),
                children: [s.jsx(R, {}), r ? ? s.jsx(D, {
                    clientThreadId: e
                }, e), s.jsxs(u.Sidebars, {
                    children: [s.jsx(O, {
                        clientThreadId: e
                    }), !1, s.jsx(y, {
                        clientThreadId: e
                    })]
                })]
            })
        }), s.jsx(W, {
            clientThreadId: e
        })]
    })
}
const k = l.memo(function({
    clientThreadId: a,
    resetThread: o
}) {
    return H({
        clientThreadId: a
    }), M(a), P({
        resetThreadAction: o,
        clientThreadId: a
    }), null
});

function W({
    clientThreadId: e
}) {
    const a = d(),
        o = a ? .includes(i.SearchTool) && !a.includes(i.SearchToolHoldout),
        r = L();
    return h() && (!r || !o) && s.jsx(V, {
        clientThreadId: e
    })
}
export {
    X as C
};
//# sourceMappingURL=h880urmi5g802uqa.js.map