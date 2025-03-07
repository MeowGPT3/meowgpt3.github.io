import {
    c as me,
    r as b,
    j as p,
    M as K,
    ax as Ge,
    av as $,
    v as ml,
    b6 as xl
} from "./mna1wiucqak6lqzp.js";
import {
    bs as yl,
    dz as wl,
    dA as bl,
    gP as vl,
    km as Sl,
    dG as Rt,
    dH as Tt,
    hU as cr,
    pB as Cl,
    pC as kl,
    t as Oi,
    hZ as Ml,
    pD as Vs,
    mQ as Al,
    dV as El,
    pE as Ol,
    g5 as Rl,
    n6 as Tl,
    pF as Nl,
    cM as St,
    pG as Dl,
    pH as wi,
    bA as fr,
    ks as Ll,
    kt as Pl,
    pI as Il,
    o3 as ur,
    pJ as Bl,
    g9 as jl,
    jx as Hl,
    hd as Vl,
    he as Fl,
    hf as Wl,
    hg as _l,
    pK as Qt,
    X as zl,
    hi as ql,
    d6 as Kl,
    jZ as Ul,
    pL as Gl,
    w as $l,
    x as en,
    fe as Yl
} from "./lwme42j7zzyr3q7j.js";
import {
    bi as Xl,
    ci as Ri,
    b_ as Zt,
    bk as sn,
    bZ as Jl,
    D as He,
    d as R,
    N as dr,
    h as pr,
    L as gr,
    R as mr,
    A as Zl,
    hh as Ql,
    c as xr,
    bv as ta,
    g as ea,
    c1 as ia,
    d1 as sa,
    cq as yr,
    r as Fs,
    y as Xi,
    n as Ve,
    P as na,
    a as ra,
    l as oa
} from "./bq4rrqi54riy5k2e.js";
import {
    T as Ti,
    g as wr,
    E as la,
    d as aa,
    e as ha
} from "./hu7ncopiydwaw46a.js";
import {
    a as ca,
    D as fa,
    H as ua,
    Z as ai,
    N as da
} from "./l4ce2zdnnawhaijx.js";
import {
    L as pa
} from "./gy64pge8qevmvg7e.js";
import {
    C as ga
} from "./ff3dg9pqimxn5e3g.js";
import {
    S as ma
} from "./bcieds2s0jraaq45.js";
const br = ({
        origin: n,
        url: t
    }) => p.jsxs("div", {
        "aria-label": t,
        className: "w-full min-w-0 whitespace-nowrap pr-4 text-start",
        children: [p.jsx("span", {
            "aria-hidden": !0,
            className: "text-token-text-primary",
            children: n
        }), p.jsx("span", {
            "aria-hidden": !0,
            className: "text-token-text-tertiary",
            children: t.replace(n, "")
        })]
    }),
    xa = ({
        request: n,
        isDenied: t = !1,
        onClick: e
    }) => {
        const [{
            width: i
        }, s] = vl();
        return p.jsxs("button", {
            ref: s,
            className: "group relative z-0 my-1 flex w-full items-center",
            onClick: e,
            children: [p.jsx("div", {
                className: "sticky left-0 z-[-1] w-0",
                children: p.jsx("div", {
                    className: "absolute top-0 hidden h-8 -translate-y-1/2 bg-gray-100 group-hover:block",
                    style: {
                        width: i
                    }
                })
            }), p.jsx("div", {
                className: "sticky left-0 z-10 flex h-8 flex-shrink-0 items-center bg-token-main-surface-primary px-2 text-token-text-secondary group-hover:bg-gray-100",
                children: t ? p.jsx(Sl, {
                    className: "icon-md text-red-500"
                }) : p.jsx(Jl, {
                    className: "icon-md text-green-500"
                })
            }), p.jsx(br, { ...n
            })]
        })
    },
    ya = ({
        title: n,
        requests: t
    }) => {
        const e = me(),
            [i, s] = b.useState(() => new Set),
            r = () => {
                for (const {
                        requestId: c,
                        approve: h,
                        deny: f
                    } of t) i.has(c) ? f() : h()
            },
            o = () => {
                for (const c of t) c.deny()
            },
            l = c => {
                s(h => {
                    const f = new Set(h);
                    return f.has(c) ? f.delete(c) : f.add(c), f
                })
            },
            a = t.length - i.size;
        return p.jsx(Xl, {
            isOpen: !0,
            shouldIgnoreClickOutside: !0,
            onClose: r,
            type: "success",
            title: p.jsxs("div", {
                className: "flex justify-between",
                children: [p.jsx("span", {
                    className: "text-xl",
                    children: p.jsx(K, {
                        id: "VmMpF1",
                        defaultMessage: "Allow network access?"
                    })
                }), p.jsx(Ri, {
                    side: "top",
                    contentClassName: "!max-w-2xs",
                    label: p.jsx(K, {
                        id: "WT7tgj",
                        defaultMessage: "Learn more about network requests in canvas"
                    }),
                    children: p.jsx(Zt, {
                        icon: yl,
                        openNewTab: !0,
                        onClick: () => wl.logButtonClick(bl.LEARN_MODE_ABOUT_NETWORK_REQUESTS),
                        as: "a",
                        color: "ghost",
                        size: "small",
                        className: "aspect-square !p-1 text-token-text-secondary",
                        to: "https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it#h_cd52fdbc16"
                    })
                })]
            }),
            description: p.jsxs("div", {
                className: "mt-3 flex flex-col gap-3",
                children: [p.jsx("span", {
                    className: "block text-token-text-primary",
                    children: p.jsx(K, {
                        id: "qk11AX",
                        defaultMessage: "{title} is trying to connect to the network. If you don’t recognize {numRequests, plural, one {this request} other {any of these requests}}, don’t allow this app access to the network.",
                        values: {
                            title: `"${n}"`,
                            numRequests: t.length
                        }
                    })
                }), p.jsx("div", {
                    className: "flex max-w-full flex-col",
                    children: t.length > 1 ? p.jsx("ul", {
                        className: "relative flex max-h-48 flex-col overflow-x-auto overflow-y-auto rounded-lg border border-token-border-light",
                        children: t.map(c => {
                            const {
                                requestId: h
                            } = c;
                            return p.jsx("li", {
                                children: p.jsx(xa, {
                                    request: c,
                                    isDenied: i.has(h),
                                    onClick: () => l(h)
                                })
                            }, h)
                        })
                    }) : p.jsx("div", {
                        className: "no-scrollbar overflow-x-auto rounded-lg bg-token-main-surface-secondary p-2",
                        children: p.jsx(br, { ...t[0]
                        })
                    })
                })]
            }),
            primaryButton: p.jsx(sn.Button, {
                disabled: a === 0,
                title: t.length > 1 ? e.formatMessage({
                    id: "xpKkWv",
                    defaultMessage: "Allow selected ({count})"
                }, {
                    count: a
                }) : e.formatMessage({
                    id: "ZeMrpd",
                    defaultMessage: "Allow"
                }),
                color: "primary",
                onClick: r
            }),
            secondaryButton: p.jsx(sn.Button, {
                title: e.formatMessage({
                    id: "TjJzqR",
                    defaultMessage: "{count, plural, one {Deny} other {Deny all}}"
                }, {
                    count: t.length
                }),
                color: "secondary",
                onClick: o
            })
        })
    },
    wa = ({
        instrument: n
    }) => {
        switch (n.type) {
            case "hist":
                return Rt.hist(Tt.WEB_SANDBOX, n.label, n.tags, n.value);
            case "count":
                return Rt.count(Tt.WEB_SANDBOX, n.label, n.tags, n.count);
            case "error":
                return He.addError(n.error)
        }
    },
    vr = ({
        size: n = 60,
        thickness: t = 1 / 16,
        checkpoints: e,
        activeCheckpointId: i,
        isComplete: s = !1,
        onTransitionComplete: r,
        color: o
    }) => {
        const [l, a] = b.useState(0), c = e.findIndex(d => d.id === i), h = b.useRef(null), f = e[c];
        b.useEffect(() => {
            if (!f || s) return;
            const d = e.length,
                g = c * 100 / d,
                x = (c + 1) * 100 / d;
            a(g);
            let m = null,
                y = null;
            const w = 5 / f.estimatedTime,
                S = v => {
                    y == null && (y = v);
                    const C = v - y;
                    if (C !== 0) {
                        const A = x - g,
                            O = g + A * (1 - Math.exp(-w * C));
                        a(Math.min(O, x - 1e-4))
                    }
                    m = window.setTimeout(() => {
                        h.current = requestAnimationFrame(S)
                    }, 16)
                };
            return h.current = requestAnimationFrame(S), () => {
                m != null && window.clearTimeout(m), h.current != null && cancelAnimationFrame(h.current)
            }
        }, [c, s]);
        const u = () => {
            s && r ? .()
        };
        return p.jsx(cr, {
            sizeOverride: n,
            className: R(o == null && "text-primary", o === "dark" && "text-back", o === "light" && "text-white"),
            thickness: t,
            backgroundStrokeClassName: R(o == null && "stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]", o === "dark" && "stroke-[rgba(0,0,0,0.32)]", o === "light" && "stroke-[rgba(0,0,0,0.1)] "),
            percentage: s ? 100 : l,
            onTransitionEnd: u,
            transitionDuration: "50ms",
            transitionTimingFunction: "cubic-bezier(0.55, 0, 1, 1)"
        })
    },
    ba = ({
        checkpoints: n,
        activeCheckpointId: t,
        isIndeterminate: e = !1,
        isComplete: i
    }) => {
        const [s, r] = b.useState(i);
        return b.useEffect(() => {
            r(i)
        }, [t]), p.jsx(Ge, {
            children: (t != null && !s || e) && p.jsxs($.div, {
                initial: {
                    opacity: 0
                },
                exit: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-token-main-surface-primary px-3 py-1.5 shadow-lg",
                children: [e ? p.jsx(cr, {
                    percentage: 30,
                    thickness: 1 / 12,
                    className: "text-primary animate-spin",
                    backgroundStrokeClassName: "dark:stroke-[rgba(255,255,255,0.4)] stroke-[rgba(0,0,0,0.1)]",
                    sizeOverride: 12
                }) : t && p.jsx(vr, {
                    size: 12,
                    thickness: 1 / 12,
                    checkpoints: n,
                    activeCheckpointId: t,
                    isComplete: i,
                    onTransitionComplete: () => r(!0)
                }), p.jsxs("span", {
                    className: "flex items-baseline text-sm text-token-text-secondary",
                    children: [p.jsx(K, {
                        id: "zfcWbe",
                        defaultMessage: "Updating"
                    }), p.jsx(Ti, {
                        gap: 1.5,
                        padding: 2,
                        size: 2
                    })]
                })]
            })
        })
    };
var P = (n => (n.READY = "ready", n.LOG = "log", n.RUN_START = "run_start", n.ENVIRONMENT_STATUS = "environment_status", n.ENVIRONMENT_ERROR = "environment_error", n.SET_BACKGROUND_COLOR = "set_background_color", n.INSTRUMENT = "instrument", n.OUTPUT = "output", n.ERROR = "error", n.RUN_COMPLETE = "run_complete", n))(P || {}),
    ne = (n => (n.SW_RECONNECT = "sw_reconnect", n.SW_NOT_SUPPORTED = "sw_not_supported", n))(ne || {});
const va = ["python", "javascript", "typescript", "html", "react"];

function Sa(n) {
    return va.includes(n)
}
var Ct = (n => (n[n.INITIALIZING = 0] = "INITIALIZING", n[n.INSTALLING_PACKAGES = 1] = "INSTALLING_PACKAGES", n[n.RUNNING_CODE = 2] = "RUNNING_CODE", n))(Ct || {}),
    Me = (n => (n.RUN_CODE = "run", n.STOP_CODE = "stop", n.PREPARE_ENVIRONMENT = "prepare_environment", n))(Me || {}),
    Sr = (n => (n.SW_RECONNECT_RESPONSE = "sw_reconnect_response", n))(Sr || {}),
    Ae = (n => (n.FLUSH = "flush", n.SW_RECONNECT_RESPONSE = "sw_reconnect_response", n.FETCH_RESPONSE = "fetch_response", n.INIT = "init", n.PING = "ping", n.DISCONNECT = "disconnect", n))(Ae || {});

function Ca(n) {
    let t = null;
    const e = [];
    let i = !1;
    return n.on("message", s => {
        t ? (t({
            value: s,
            done: i
        }), t = null) : e.push(s), s.type === P.RUN_COMPLETE && (i = !0)
    }), {
        [Symbol.asyncIterator]() {
            return this
        },
        next() {
            if (e.length > 0) {
                const s = e.shift();
                return Promise.resolve({
                    value: s,
                    done: i
                })
            }
            return i ? Promise.resolve({
                value: void 0,
                done: i
            }) : new Promise(s => {
                t = s
            })
        }
    }
}
const ka = "web-sandbox.oaiusercontent.com",
    Ji = `https://${ka}`,
    {
        origin: Ma
    } = new URL(Ji),
    Aa = [Ma, "https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"];

function nn() {
    let n = null;
    const t = new Promise(e => n = e);
    return {
        resolve: n,
        promise: t
    }
}
const Cr = () => {
        const [n, t] = b.useState(nn);
        return [n, b.useCallback(() => t(nn()), [])]
    },
    kr = () => Cl(pr.getItem(gr.CODE_EXECUTION_DOMAIN_ALLOW_LIST), t => kl(t, {
        origin: Oi,
        expiresAt: Ml
    }), []).filter(({
        expiresAt: t
    }) => t >= Date.now()).map(({
        origin: t
    }) => t),
    rn = (n, t) => {
        const {
            origin: e
        } = new URL(n);
        let i = [...Aa];
        const s = kr();
        return t && (i = i.concat(s)), i.includes(e)
    },
    Ea = ({
        sessionId: n,
        networkAccessDeniedMessage: t,
        disableNetworkRequests: e
    }) => {
        const i = dr(),
            s = me(),
            r = b.useRef(null),
            o = b.useRef(null),
            l = b.useRef(null),
            [a, c] = b.useState([]),
            h = b.useCallback(m => o.current ? .postMessage(m), []),
            f = b.useCallback(m => l.current ? .postMessage(m), []);
        b.useEffect(() => () => {
            f({
                type: Ae.DISCONNECT,
                sessionId: n
            })
        }, [n]);
        const u = b.useCallback(({
                url: m,
                requestId: y
            }) => {
                try {
                    if (rn(m, !e)) return f({
                        type: Ae.FETCH_RESPONSE,
                        isApproved: !0,
                        requestId: y
                    });
                    if (e) return i.danger(t ? ? s.formatMessage({
                        id: "Lp7cKY",
                        defaultMessage: "Network access is disabled."
                    }));
                    Rt.count(Tt.WEB_SANDBOX, "network_access_requested");
                    const {
                        origin: w
                    } = new URL(m), S = C => {
                        Rt.count(Tt.WEB_SANDBOX, `network_access_request.${C?"allow":"deny"}`), f({
                            type: Ae.FETCH_RESPONSE,
                            isApproved: C,
                            requestId: y
                        }), c(A => A.filter(O => !rn(O.url, !e) && O.requestId !== y))
                    }, v = () => {
                        pr.setItem(gr.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...kr(), {
                            origin: w,
                            expiresAt: Date.now() + 90 * 24 * 60 * 60 * 1e3
                        }]), S(!0)
                    };
                    c(C => [...C, {
                        url: m,
                        origin: w,
                        requestId: y,
                        approve: v,
                        deny: () => S(!1)
                    }])
                } catch (w) {
                    He.addError(w), f({
                        type: Ae.FETCH_RESPONSE,
                        isApproved: !1,
                        requestId: y
                    })
                }
            }, [e, f, i, t, s]),
            [d, g] = Cr(),
            x = b.useCallback(async (m, y) => {
                if (m.type === ne.SW_NOT_SUPPORTED) Rt.count(Tt.WEB_SANDBOX, "sw_not_supported"), d.resolve ? .();
                else {
                    o.current = y[0], l.current = y[1], l.current.onmessage = w => {
                        w.data.type === "ready" ? d.resolve ? .() : u(w.data)
                    };
                    try {
                        const {
                            token: w
                        } = await mr.safeGet("/public/code_execution_challenge", {
                            authOption: Zl.Anonymous,
                            parameters: {
                                query: {
                                    relay_client_id: m.clientId
                                }
                            }
                        });
                        h({
                            type: Sr.SW_RECONNECT_RESPONSE,
                            reconnectId: m.reconnectId,
                            sessionId: n,
                            token: w
                        })
                    } catch (w) {
                        He.addError(w)
                    }
                }
            }, [u, h, d, n]);
        return {
            relayRef: r,
            relayInitPromise: d,
            resetRelayInitPromise: g,
            handleMessageFromRelay: x,
            pendingFetchRequests: a
        }
    },
    Oa = "https://persistent.oaistatic.com/canvas/loop-swirl.mp4",
    Ra = "https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg",
    be = 90,
    Ta = ({
        title: n,
        checkpoints: t,
        activeCheckpointId: e,
        isComplete: i,
        onTransitionComplete: s
    }) => {
        const [r, o] = b.useState(!1), l = t.findIndex(h => h.id === e), a = t[l], c = () => {
            s ? .(), o(!0)
        };
        return p.jsx($.div, {
            className: "relative flex h-full w-full items-center justify-center",
            transition: {
                type: "spring",
                bounce: 0
            },
            children: p.jsxs($.div, {
                className: "flex -translate-y-12 flex-col items-center gap-3",
                style: {
                    minWidth: be,
                    height: be
                },
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    duration: .5,
                    bounce: 0
                },
                children: [p.jsxs($.div, {
                    className: "absolute overflow-hidden rounded-3xl bg-token-main-surface-primary shadow-2xl",
                    initial: !1,
                    animate: {
                        width: be,
                        height: be,
                        opacity: r ? 0 : 1
                    },
                    transition: {
                        type: "spring",
                        duration: .56,
                        bounce: 0
                    },
                    children: [p.jsx("video", {
                        muted: !0,
                        loop: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        src: Oa,
                        poster: Ra,
                        className: R("absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200")
                    }), p.jsx("div", {
                        className: R("relative z-10 flex h-full w-full items-center justify-center", r ? "opacity-0" : "opacity-100"),
                        children: p.jsx(vr, {
                            color: "light",
                            checkpoints: t,
                            activeCheckpointId: e,
                            isComplete: i,
                            onTransitionComplete: c,
                            thickness: 1 / 12
                        })
                    })]
                }), p.jsxs($.div, {
                    className: R("flex flex-col items-center transition-opacity duration-200", i ? "opacity-0" : "opacity-100"),
                    style: {
                        translateY: be + 20
                    },
                    children: [p.jsx("span", {
                        className: "font-semibold text-token-text-primary",
                        children: n
                    }), a && p.jsx($.span, {
                        className: "flex items-baseline text-token-text-secondary",
                        children: p.jsx("span", {
                            className: "loading-shimmer",
                            children: a.label
                        })
                    })]
                })]
            })
        })
    },
    on = ({
        sessionId: n
    }) => "?" + [`sessionId=${n}`, ""].filter(Boolean).join("&"),
    ln = [{
        id: Ct.INITIALIZING,
        label: "Initializing environment",
        estimatedTime: 1e3
    }, {
        id: Ct.INSTALLING_PACKAGES,
        label: "Installing packages",
        estimatedTime: 2e3
    }, {
        id: Ct.RUNNING_CODE,
        label: "Ready",
        estimatedTime: 1
    }],
    Na = () => Al() ? "ios" : El() ? "windows" : Ol() ? "android" : Rl() ? "safari" : Tl() || Nl() ? "chrome" : "unknown",
    Da = ({
        isShare: n = !1,
        disableNetworkRequests: t = !1,
        networkAccessDeniedMessage: e,
        visuallyHidden: i = !1,
        isCodeUpdating: s = !1,
        enableTransition: r = !1,
        title: o,
        onChangeBackgroundColor: l
    }, a) => {
        const [c, h] = b.useState(0), [f] = b.useState(() => crypto.randomUUID()), {
            pendingFetchRequests: u,
            handleMessageFromRelay: d,
            relayInitPromise: g,
            resetRelayInitPromise: x,
            relayRef: m
        } = Ea({
            sessionId: f,
            disableNetworkRequests: t,
            networkAccessDeniedMessage: e
        }), y = b.useRef(null), [w, S] = Cr(), v = b.useMemo(() => Promise.all([w.promise, g.promise]), [w, g]), [C, A] = b.useState(null), [O, N] = b.useState(!1), st = b.useRef(null), gt = b.useRef(new Map), ct = b.useRef(null), nt = b.useCallback(B => {
            st.current ? .postMessage(B)
        }, []), mt = b.useCallback(() => {
            const B = gt.current.keys();
            A(null), N(!1), l ? .(null);
            for (const D of B) nt({
                type: Me.STOP_CODE,
                runId: D
            });
            ct.current = null
        }, [nt, l]), Q = b.useCallback(() => {
            x(), S(), h(B => B + 1), A(null), N(!1), ct.current = null
        }, [x, S]), ft = b.useCallback(async function*({
            code: B,
            language: D
        }) {
            if (A(Ct.INITIALIZING), Rt.count(Tt.WEB_SANDBOX, `${D}.eval`), await v, gt.current.size !== 0) return mt();
            const j = ml(),
                q = new Ql;
            gt.current.set(j, q);
            const rt = {
                code: B,
                language: D,
                type: Me.RUN_CODE,
                runId: j
            };
            ct.current = {
                runId: j,
                language: D
            }, nt(rt);
            for await (const F of Ca(q)) F && F.type === P.ENVIRONMENT_STATUS && (A(F.status), r || N(F.status === Ct.RUNNING_CODE)), F ? .type === P.ERROR ? Rt.count(Tt.WEB_SANDBOX, `${D}.error`) : F ? .type === P.RUN_COMPLETE && F.wasFatalError && Rt.count(Tt.WEB_SANDBOX, `${D}.fatal_runtime_error`), F && !Vs([P.READY], F.type) && (yield F);
            A(null), N(!1), gt.current.delete(j)
        }, [v, r, nt, mt]), At = b.useCallback(async B => {
            await v, nt({
                type: Me.PREPARE_ENVIRONMENT,
                language: B
            })
        }, [v, nt]), bt = B => {
            ct.current && nt({
                type: Me.RUN_CODE,
                code: B,
                ...ct.current
            })
        };
        b.useImperativeHandle(a, () => ({
            stop: mt,
            evalAsync: ft,
            updateCode: bt,
            prepareEnvironment: At
        })), b.useEffect(() => xr(window, {
            message: B => {
                const {
                    data: D,
                    ports: j
                } = B, {
                    type: q
                } = D, rt = B.source === m.current ? .contentWindow, F = B.source === y.current ? .contentWindow;
                if (!rt && !F) return;
                if (q === P.ENVIRONMENT_ERROR) return He.addError("Code execution environment error", D.error), D.error.name === "ServiceWorker" && Rt.count(Tt.WEB_SANDBOX, "service_worker_connection_failure", [{
                    key: "agent",
                    value: Na()
                }, {
                    key: "is_share",
                    value: String(n)
                }]), D.runId != null && D.runId === ct.current ? .runId && Rt.count(Tt.WEB_SANDBOX, `${ct.current.language}.environment_error`), Q();
                if (rt && (D.type === ne.SW_NOT_SUPPORTED || D.type === ne.SW_RECONNECT)) return d(D, j);
                if (rt || !F || q === ne.SW_RECONNECT || q === ne.SW_NOT_SUPPORTED) return;
                if (st.current = j[0], q === P.READY) return w.resolve ? .();
                if (q === P.SET_BACKGROUND_COLOR) return l ? .(D.backgroundColor);
                if (q === P.INSTRUMENT) return wa(D);
                const {
                    runId: at
                } = D, $t = at && gt.current.get(at);
                $t ? $t.emit("message", D) : He.addError("Code execution error: missing event emitter", {
                    messageData: B.data
                })
            }
        }), [l, Q, d, g, m, w, f, n]);
        const vt = {
            type: "spring",
            duration: O && r ? .56 : 0,
            delay: O ? .12 : 0,
            bounce: 0
        };
        return p.jsxs(ta, {
            children: [p.jsx("iframe", {
                title: "relay",
                "aria-hidden": "true",
                className: "fixed h-0 w-0",
                ref: m,
                src: `${Ji}/relay.html${on({sessionId:f})}`
            }, `relay-${c}`), p.jsxs("div", {
                className: R("relative flex", i ? "fixed h-0 w-0" : "h-full w-full"),
                children: [!i && C != null && r && p.jsx(Ta, {
                    isComplete: C === Ct.RUNNING_CODE,
                    onTransitionComplete: () => N(!0),
                    activeCheckpointId: C,
                    title: o,
                    checkpoints: ln
                }), p.jsx($.div, {
                    className: R("absolute inset-0 m-auto origin-center overflow-hidden bg-token-main-surface-primary", O ? "pointer-events-auto" : "pointer-events-none"),
                    animate: {
                        opacity: O ? 1 : 0,
                        ...O ? {
                            scale: 1
                        } : {
                            scale: .95
                        }
                    },
                    transition: vt,
                    children: p.jsx($.iframe, {
                        title: o,
                        className: "h-full w-full overflow-hidden",
                        transition: vt,
                        "aria-hidden": i ? "true" : void 0,
                        src: `${Ji}/index.html${on({sessionId:f})}`,
                        sandbox: "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
                        ref: y,
                        tabIndex: -1
                    }, `sandbox-${c}`)
                }), O && p.jsx(ba, {
                    isIndeterminate: s,
                    isComplete: C === Ct.RUNNING_CODE,
                    activeCheckpointId: C,
                    checkpoints: ln
                })]
            }), u.length > 0 && p.jsx(ya, {
                title: o,
                requests: u
            })]
        })
    },
    ku = b.forwardRef(Da);

function Mr(n) {
    return n.includes("'react'") || n.includes('"react"')
}

function La(n, t) {
    switch (n) {
        case St.CODE_HTML:
        case St.CODE_REACT:
            return !0;
        case St.CODE_JAVASCRIPT:
        case St.CODE_TYPESCRIPT:
            return Mr(t);
        default:
            return !1
    }
}

function Pa(n) {
    return Vs([St.CODE_PYTHON], n)
}

function Ia(n, t) {
    let e = wr(n) ? ? null;
    return (Mr(t) || n === St.CODE_REACT) && (e = "react"), e && Sa(e) ? e : null
}

function Ba(n, t, e) {
    const i = new Map;
    return n.forEach((s, r) => {
        const o = Dl(s, t, e);
        o && i.set(r, o)
    }), i
}

function ja(n, t) {
    const e = Fa(n);
    if (e.length === 0) return t;
    let i = t;
    return e.forEach(s => {
        i = Ha(s, i)
    }), i
}

function Ha(n, t) {
    return Ba(t, {
        start: n.fromA,
        end: n.toA
    }, Va(n))
}

function Va(n) {
    const {
        fromA: t,
        toA: e,
        fromB: i,
        toB: s
    } = n;
    return s - i - (e - t)
}

function Fa(n) {
    const t = [],
        e = (i, s, r, o) => {
            t.push({
                fromA: i,
                toA: s,
                fromB: r,
                toB: o
            })
        };
    return n.changes.iterChangedRanges(e, !0), t
}

function Wa(n, t) {
    const e = Array.from(n.keys()),
        i = Array.from(t.keys());
    if (e.length !== i.length) return !1;
    e.sort(), i.sort();
    for (let s = 0; s < e.length; s++)
        if (e[s] !== i[s]) return !1;
    for (const s of e) {
        const r = n.get(s),
            o = t.get(s);
        if (!r || !o || r.start !== o.start || r.end !== o.end) return !1
    }
    return !0
}

function _a(n, t) {
    return {
        "bg-yellow-100 dark:bg-yellow-400": !0,
        "bg-opacity-40 bg-yellow-400 dark:bg-yellow-400 dark:bg-opacity-50": n && !t,
        "bg-opacity-60 bg-yellow-400 dark:bg-yellow-500 dark:bg-opacity-70": t,
        "bg-yellow-100 dark:bg-yellow-400 dark:bg-opacity-30": !n && !t
    }
}
const za = {
    "!bg-transparent": !0
};

function qa({
    isHovered: n,
    isFocused: t,
    isCode: e,
    diffStatus: i
}) {
    return R(e ? ca : fa, "cursor-text group is-comment transition-colors", { ...i === wi.REMOVED ? za : _a(n, t)
    }, "group-[.is-comment]:bg-opacity-40")
}

function Ka(n, t) {
    return n.map(e => {
        const i = t.get(e.id);
        return i ? { ...e,
            at: i
        } : null
    }).filter(fr)
}
var Ar = (n => (n.ASK = "ask", n.CREATE_TEXTDOC = "create_textdoc", n.COMMENT = "comment", n.EDIT = "edit", n))(Ar || {}),
    Ua = (n => (n.SELECTION = "selection", n.BLOCK = "block", n))(Ua || {});

function Mu(n) {
    return n ? .type === "selection"
}
const Ga = ea(() => ({
        commentingOn: null,
        hoveredCommentId: null,
        focusedCommentId: null,
        visibleBlockCommentLauncher_DEBUG_ONLY: null,
        hoveredBlockCommentLauncherPos: null
    })),
    {
        setState: Et,
        getInitialState: $a
    } = Ga,
    bi = {
        reset: () => Et($a()),
        startCommentingOn: n => Et(t => ({ ...t,
            commentingOn: n
        })),
        cancelCommentingOn: () => Et(n => ({ ...n,
            commentingOn: null
        })),
        focusComment: n => Et(t => ({ ...t,
            focusedCommentId: n
        })),
        blurComment: () => Et(n => ({ ...n,
            focusedCommentId: null
        })),
        mouseEnterComment: n => Et(t => ({ ...t,
            hoveredCommentId: n
        })),
        mouseLeaveComment: () => Et(n => ({ ...n,
            hoveredCommentId: null
        })),
        mouseEnterBlock: n => Et(t => ({ ...t,
            hoveredBlockCommentLauncherPos: n
        })),
        mouseLeaveBlock: () => Et(n => ({ ...n,
            hoveredBlockCommentLauncherPos: null
        })),
        setVisibleBlockComment_DEBUG_ONLY: n => Et(t => ({ ...t,
            visibleBlockCommentLauncher_DEBUG_ONLY: n
        }))
    };
class I {
    lineAt(t) {
        if (t < 0 || t > this.length) throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
        return this.lineInner(t, !1, 1, 0)
    }
    line(t) {
        if (t < 1 || t > this.lines) throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
        return this.lineInner(t, !0, 1, 0)
    }
    replace(t, e, i) {
        [t, e] = ce(this, t, e);
        let s = [];
        return this.decompose(0, t, s, 2), i.length && i.decompose(0, i.length, s, 3), this.decompose(e, this.length, s, 1), Nt.from(s, this.length - (e - t) + i.length)
    }
    append(t) {
        return this.replace(this.length, this.length, t)
    }
    slice(t, e = this.length) {
        [t, e] = ce(this, t, e);
        let i = [];
        return this.decompose(t, e, i, 0), Nt.from(i, e - t)
    }
    eq(t) {
        if (t == this) return !0;
        if (t.length != this.length || t.lines != this.lines) return !1;
        let e = this.scanIdentical(t, 1),
            i = this.length - this.scanIdentical(t, -1),
            s = new Ne(this),
            r = new Ne(t);
        for (let o = e, l = e;;) {
            if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value) return !1;
            if (l += s.value.length, s.done || l >= i) return !0
        }
    }
    iter(t = 1) {
        return new Ne(this, t)
    }
    iterRange(t, e = this.length) {
        return new Er(this, t, e)
    }
    iterLines(t, e) {
        let i;
        if (t == null) i = this.iter();
        else {
            e == null && (e = this.lines + 1);
            let s = this.line(t).from;
            i = this.iterRange(s, Math.max(s, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to))
        }
        return new Or(i)
    }
    toString() {
        return this.sliceString(0)
    }
    toJSON() {
        let t = [];
        return this.flatten(t), t
    }
    constructor() {}
    static of (t) {
        if (t.length == 0) throw new RangeError("A document must have at least one line");
        return t.length == 1 && !t[0] ? I.empty : t.length <= 32 ? new G(t) : Nt.from(G.split(t, []))
    }
}
class G extends I {
    constructor(t, e = Ya(t)) {
        super(), this.text = t, this.length = e
    }
    get lines() {
        return this.text.length
    }
    get children() {
        return null
    }
    lineInner(t, e, i, s) {
        for (let r = 0;; r++) {
            let o = this.text[r],
                l = s + o.length;
            if ((e ? i : l) >= t) return new Xa(s, l, i, o);
            s = l + 1, i++
        }
    }
    decompose(t, e, i, s) {
        let r = t <= 0 && e >= this.length ? this : new G(an(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
        if (s & 1) {
            let o = i.pop(),
                l = hi(r.text, o.text.slice(), 0, r.length);
            if (l.length <= 32) i.push(new G(l, o.length + r.length));
            else {
                let a = l.length >> 1;
                i.push(new G(l.slice(0, a)), new G(l.slice(a)))
            }
        } else i.push(r)
    }
    replace(t, e, i) {
        if (!(i instanceof G)) return super.replace(t, e, i);
        [t, e] = ce(this, t, e);
        let s = hi(this.text, hi(i.text, an(this.text, 0, t)), e),
            r = this.length + i.length - (e - t);
        return s.length <= 32 ? new G(s, r) : Nt.from(G.split(s, []), r)
    }
    sliceString(t, e = this.length, i = `
`) {
        [t, e] = ce(this, t, e);
        let s = "";
        for (let r = 0, o = 0; r <= e && o < this.text.length; o++) {
            let l = this.text[o],
                a = r + l.length;
            r > t && o && (s += i), t < a && e > r && (s += l.slice(Math.max(0, t - r), e - r)), r = a + 1
        }
        return s
    }
    flatten(t) {
        for (let e of this.text) t.push(e)
    }
    scanIdentical() {
        return 0
    }
    static split(t, e) {
        let i = [],
            s = -1;
        for (let r of t) i.push(r), s += r.length + 1, i.length == 32 && (e.push(new G(i, s)), i = [], s = -1);
        return s > -1 && e.push(new G(i, s)), e
    }
}
class Nt extends I {
    constructor(t, e) {
        super(), this.children = t, this.length = e, this.lines = 0;
        for (let i of t) this.lines += i.lines
    }
    lineInner(t, e, i, s) {
        for (let r = 0;; r++) {
            let o = this.children[r],
                l = s + o.length,
                a = i + o.lines - 1;
            if ((e ? a : l) >= t) return o.lineInner(t, e, i, s);
            s = l + 1, i = a + 1
        }
    }
    decompose(t, e, i, s) {
        for (let r = 0, o = 0; o <= e && r < this.children.length; r++) {
            let l = this.children[r],
                a = o + l.length;
            if (t <= a && e >= o) {
                let c = s & ((o <= t ? 1 : 0) | (a >= e ? 2 : 0));
                o >= t && a <= e && !c ? i.push(l) : l.decompose(t - o, e - o, i, c)
            }
            o = a + 1
        }
    }
    replace(t, e, i) {
        if ([t, e] = ce(this, t, e), i.lines < this.lines)
            for (let s = 0, r = 0; s < this.children.length; s++) {
                let o = this.children[s],
                    l = r + o.length;
                if (t >= r && e <= l) {
                    let a = o.replace(t - r, e - r, i),
                        c = this.lines - o.lines + a.lines;
                    if (a.lines < c >> 4 && a.lines > c >> 6) {
                        let h = this.children.slice();
                        return h[s] = a, new Nt(h, this.length - (e - t) + i.length)
                    }
                    return super.replace(r, l, a)
                }
                r = l + 1
            }
        return super.replace(t, e, i)
    }
    sliceString(t, e = this.length, i = `
`) {
        [t, e] = ce(this, t, e);
        let s = "";
        for (let r = 0, o = 0; r < this.children.length && o <= e; r++) {
            let l = this.children[r],
                a = o + l.length;
            o > t && r && (s += i), t < a && e > o && (s += l.sliceString(t - o, e - o, i)), o = a + 1
        }
        return s
    }
    flatten(t) {
        for (let e of this.children) e.flatten(t)
    }
    scanIdentical(t, e) {
        if (!(t instanceof Nt)) return 0;
        let i = 0,
            [s, r, o, l] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
        for (;; s += e, r += e) {
            if (s == o || r == l) return i;
            let a = this.children[s],
                c = t.children[r];
            if (a != c) return i + a.scanIdentical(c, e);
            i += a.length + 1
        }
    }
    static from(t, e = t.reduce((i, s) => i + s.length + 1, -1)) {
        let i = 0;
        for (let d of t) i += d.lines;
        if (i < 32) {
            let d = [];
            for (let g of t) g.flatten(d);
            return new G(d, e)
        }
        let s = Math.max(32, i >> 5),
            r = s << 1,
            o = s >> 1,
            l = [],
            a = 0,
            c = -1,
            h = [];

        function f(d) {
            let g;
            if (d.lines > r && d instanceof Nt)
                for (let x of d.children) f(x);
            else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof G && a && (g = h[h.length - 1]) instanceof G && d.lines + g.lines <= 32 ? (a += d.lines, c += d.length + 1, h[h.length - 1] = new G(g.text.concat(d.text), g.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, c += d.length + 1, h.push(d))
        }

        function u() {
            a != 0 && (l.push(h.length == 1 ? h[0] : Nt.from(h, c)), c = -1, a = h.length = 0)
        }
        for (let d of t) f(d);
        return u(), l.length == 1 ? l[0] : new Nt(l, e)
    }
}
I.empty = new G([""], 0);

function Ya(n) {
    let t = -1;
    for (let e of n) t += e.length + 1;
    return t
}

function hi(n, t, e = 0, i = 1e9) {
    for (let s = 0, r = 0, o = !0; r < n.length && s <= i; r++) {
        let l = n[r],
            a = s + l.length;
        a >= e && (a > i && (l = l.slice(0, i - s)), s < e && (l = l.slice(e - s)), o ? (t[t.length - 1] += l, o = !1) : t.push(l)), s = a + 1
    }
    return t
}

function an(n, t, e) {
    return hi(n, [""], t, e)
}
class Ne {
    constructor(t, e = 1) {
        this.dir = e, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof G ? t.text.length : t.children.length) << 1]
    }
    nextInner(t, e) {
        for (this.done = this.lineBreak = !1;;) {
            let i = this.nodes.length - 1,
                s = this.nodes[i],
                r = this.offsets[i],
                o = r >> 1,
                l = s instanceof G ? s.text.length : s.children.length;
            if (o == (e > 0 ? l : 0)) {
                if (i == 0) return this.done = !0, this.value = "", this;
                e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop()
            } else if ((r & 1) == (e > 0 ? 0 : 1)) {
                if (this.offsets[i] += e, t == 0) return this.lineBreak = !0, this.value = `
`, this;
                t--
            } else if (s instanceof G) {
                let a = s.text[o + (e < 0 ? -1 : 0)];
                if (this.offsets[i] += e, a.length > Math.max(0, t)) return this.value = t == 0 ? a : e > 0 ? a.slice(t) : a.slice(0, a.length - t), this;
                t -= a.length
            } else {
                let a = s.children[o + (e < 0 ? -1 : 0)];
                t > a.length ? (t -= a.length, this.offsets[i] += e) : (e < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(e > 0 ? 1 : (a instanceof G ? a.text.length : a.children.length) << 1))
            }
        }
    }
    next(t = 0) {
        return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir)
    }
}
class Er {
    constructor(t, e, i) {
        this.value = "", this.done = !1, this.cursor = new Ne(t, e > i ? -1 : 1), this.pos = e > i ? t.length : 0, this.from = Math.min(e, i), this.to = Math.max(e, i)
    }
    nextInner(t, e) {
        if (e < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
        let i = e < 0 ? this.pos - this.from : this.to - this.pos;
        t > i && (t = i), i -= t;
        let {
            value: s
        } = this.cursor.next(t);
        return this.pos += (s.length + t) * e, this.value = s.length <= i ? s : e < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this
    }
    next(t = 0) {
        return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir)
    }
    get lineBreak() {
        return this.cursor.lineBreak && this.value != ""
    }
}
class Or {
    constructor(t) {
        this.inner = t, this.afterBreak = !0, this.value = "", this.done = !1
    }
    next(t = 0) {
        let {
            done: e,
            lineBreak: i,
            value: s
        } = this.inner.next(t);
        return e && this.afterBreak ? (this.value = "", this.afterBreak = !1) : e ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this
    }
    get lineBreak() {
        return !1
    }
}
typeof Symbol < "u" && (I.prototype[Symbol.iterator] = function() {
    return this.iter()
}, Ne.prototype[Symbol.iterator] = Er.prototype[Symbol.iterator] = Or.prototype[Symbol.iterator] = function() {
    return this
});
class Xa {
    constructor(t, e, i, s) {
        this.from = t, this.to = e, this.number = i, this.text = s
    }
    get length() {
        return this.to - this.from
    }
}

function ce(n, t, e) {
    return t = Math.max(0, Math.min(n.length, t)), [t, Math.max(t, Math.min(n.length, e))]
}
let oe = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(n => n ? parseInt(n, 36) : 1);
for (let n = 1; n < oe.length; n++) oe[n] += oe[n - 1];

function Ja(n) {
    for (let t = 1; t < oe.length; t += 2)
        if (oe[t] > n) return oe[t - 1] <= n;
    return !1
}

function hn(n) {
    return n >= 127462 && n <= 127487
}
const cn = 8205;

function Lt(n, t, e = !0, i = !0) {
    return (e ? Rr : Za)(n, t, i)
}

function Rr(n, t, e) {
    if (t == n.length) return t;
    t && Tr(n.charCodeAt(t)) && Nr(n.charCodeAt(t - 1)) && t--;
    let i = De(n, t);
    for (t += Zi(i); t < n.length;) {
        let s = De(n, t);
        if (i == cn || s == cn || e && Ja(s)) t += Zi(s), i = s;
        else if (hn(s)) {
            let r = 0,
                o = t - 2;
            for (; o >= 0 && hn(De(n, o));) r++, o -= 2;
            if (r % 2 == 0) break;
            t += 2
        } else break
    }
    return t
}

function Za(n, t, e) {
    for (; t > 0;) {
        let i = Rr(n, t - 2, e);
        if (i < t) return i;
        t--
    }
    return 0
}

function Tr(n) {
    return n >= 56320 && n < 57344
}

function Nr(n) {
    return n >= 55296 && n < 56320
}

function De(n, t) {
    let e = n.charCodeAt(t);
    if (!Nr(e) || t + 1 == n.length) return e;
    let i = n.charCodeAt(t + 1);
    return Tr(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e
}

function Au(n) {
    return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320))
}

function Zi(n) {
    return n < 65536 ? 1 : 2
}
const Qi = /\r\n?|\n/;
var pt = function(n) {
    return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n
}(pt || (pt = {}));
class jt {
    constructor(t) {
        this.sections = t
    }
    get length() {
        let t = 0;
        for (let e = 0; e < this.sections.length; e += 2) t += this.sections[e];
        return t
    }
    get newLength() {
        let t = 0;
        for (let e = 0; e < this.sections.length; e += 2) {
            let i = this.sections[e + 1];
            t += i < 0 ? this.sections[e] : i
        }
        return t
    }
    get empty() {
        return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0
    }
    iterGaps(t) {
        for (let e = 0, i = 0, s = 0; e < this.sections.length;) {
            let r = this.sections[e++],
                o = this.sections[e++];
            o < 0 ? (t(i, s, r), s += r) : s += o, i += r
        }
    }
    iterChangedRanges(t, e = !1) {
        ts(this, t, e)
    }
    get invertedDesc() {
        let t = [];
        for (let e = 0; e < this.sections.length;) {
            let i = this.sections[e++],
                s = this.sections[e++];
            s < 0 ? t.push(i, s) : t.push(s, i)
        }
        return new jt(t)
    }
    composeDesc(t) {
        return this.empty ? t : t.empty ? this : Dr(this, t)
    }
    mapDesc(t, e = !1) {
        return t.empty ? this : es(this, t, e)
    }
    mapPos(t, e = -1, i = pt.Simple) {
        let s = 0,
            r = 0;
        for (let o = 0; o < this.sections.length;) {
            let l = this.sections[o++],
                a = this.sections[o++],
                c = s + l;
            if (a < 0) {
                if (c > t) return r + (t - s);
                r += l
            } else {
                if (i != pt.Simple && c >= t && (i == pt.TrackDel && s < t && c > t || i == pt.TrackBefore && s < t || i == pt.TrackAfter && c > t)) return null;
                if (c > t || c == t && e < 0 && !l) return t == s || e < 0 ? r : r + a;
                r += a
            }
            s = c
        }
        if (t > s) throw new RangeError(`Position ${t} is out of range for changeset of length ${s}`);
        return r
    }
    touchesRange(t, e = t) {
        for (let i = 0, s = 0; i < this.sections.length && s <= e;) {
            let r = this.sections[i++],
                o = this.sections[i++],
                l = s + r;
            if (o >= 0 && s <= e && l >= t) return s < t && l > e ? "cover" : !0;
            s = l
        }
        return !1
    }
    toString() {
        let t = "";
        for (let e = 0; e < this.sections.length;) {
            let i = this.sections[e++],
                s = this.sections[e++];
            t += (t ? " " : "") + i + (s >= 0 ? ":" + s : "")
        }
        return t
    }
    toJSON() {
        return this.sections
    }
    static fromJSON(t) {
        if (!Array.isArray(t) || t.length % 2 || t.some(e => typeof e != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new jt(t)
    }
    static create(t) {
        return new jt(t)
    }
}
class J extends jt {
    constructor(t, e) {
        super(t), this.inserted = e
    }
    apply(t) {
        if (this.length != t.length) throw new RangeError("Applying change set to a document with the wrong length");
        return ts(this, (e, i, s, r, o) => t = t.replace(s, s + (i - e), o), !1), t
    }
    mapDesc(t, e = !1) {
        return es(this, t, e, !0)
    }
    invert(t) {
        let e = this.sections.slice(),
            i = [];
        for (let s = 0, r = 0; s < e.length; s += 2) {
            let o = e[s],
                l = e[s + 1];
            if (l >= 0) {
                e[s] = l, e[s + 1] = o;
                let a = s >> 1;
                for (; i.length < a;) i.push(I.empty);
                i.push(o ? t.slice(r, r + o) : I.empty)
            }
            r += o
        }
        return new J(e, i)
    }
    compose(t) {
        return this.empty ? t : t.empty ? this : Dr(this, t, !0)
    }
    map(t, e = !1) {
        return t.empty ? this : es(this, t, e, !0)
    }
    iterChanges(t, e = !1) {
        ts(this, t, e)
    }
    get desc() {
        return jt.create(this.sections)
    }
    filter(t) {
        let e = [],
            i = [],
            s = [],
            r = new Fe(this);
        t: for (let o = 0, l = 0;;) {
            let a = o == t.length ? 1e9 : t[o++];
            for (; l < a || l == a && r.len == 0;) {
                if (r.done) break t;
                let h = Math.min(r.len, a - l);
                tt(s, h, -1);
                let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
                tt(e, h, f), f > 0 && qt(i, e, r.text), r.forward(h), l += h
            }
            let c = t[o++];
            for (; l < c;) {
                if (r.done) break t;
                let h = Math.min(r.len, c - l);
                tt(e, h, -1), tt(s, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), l += h
            }
        }
        return {
            changes: new J(e, i),
            filtered: jt.create(s)
        }
    }
    toJSON() {
        let t = [];
        for (let e = 0; e < this.sections.length; e += 2) {
            let i = this.sections[e],
                s = this.sections[e + 1];
            s < 0 ? t.push(i) : s == 0 ? t.push([i]) : t.push([i].concat(this.inserted[e >> 1].toJSON()))
        }
        return t
    }
    static of (t, e, i) {
        let s = [],
            r = [],
            o = 0,
            l = null;

        function a(h = !1) {
            if (!h && !s.length) return;
            o < e && tt(s, e - o, -1);
            let f = new J(s, r);
            l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0
        }

        function c(h) {
            if (Array.isArray(h))
                for (let f of h) c(f);
            else if (h instanceof J) {
                if (h.length != e) throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${e})`);
                a(), l = l ? l.compose(h.map(l)) : h
            } else {
                let {
                    from: f,
                    to: u = f,
                    insert: d
                } = h;
                if (f > u || f < 0 || u > e) throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${e})`);
                let g = d ? typeof d == "string" ? I.of(d.split(i || Qi)) : d : I.empty,
                    x = g.length;
                if (f == u && x == 0) return;
                f < o && a(), f > o && tt(s, f - o, -1), tt(s, u - f, x), qt(r, s, g), o = u
            }
        }
        return c(t), a(!l), l
    }
    static empty(t) {
        return new J(t ? [t, -1] : [], [])
    }
    static fromJSON(t) {
        if (!Array.isArray(t)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let e = [],
            i = [];
        for (let s = 0; s < t.length; s++) {
            let r = t[s];
            if (typeof r == "number") e.push(r, -1);
            else {
                if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
                if (r.length == 1) e.push(r[0], 0);
                else {
                    for (; i.length < s;) i.push(I.empty);
                    i[s] = I.of(r.slice(1)), e.push(r[0], i[s].length)
                }
            }
        }
        return new J(e, i)
    }
    static createSet(t, e) {
        return new J(t, e)
    }
}

function tt(n, t, e, i = !1) {
    if (t == 0 && e <= 0) return;
    let s = n.length - 2;
    s >= 0 && e <= 0 && e == n[s + 1] ? n[s] += t : t == 0 && n[s] == 0 ? n[s + 1] += e : i ? (n[s] += t, n[s + 1] += e) : n.push(t, e)
}

function qt(n, t, e) {
    if (e.length == 0) return;
    let i = t.length - 2 >> 1;
    if (i < n.length) n[n.length - 1] = n[n.length - 1].append(e);
    else {
        for (; n.length < i;) n.push(I.empty);
        n.push(e)
    }
}

function ts(n, t, e) {
    let i = n.inserted;
    for (let s = 0, r = 0, o = 0; o < n.sections.length;) {
        let l = n.sections[o++],
            a = n.sections[o++];
        if (a < 0) s += l, r += l;
        else {
            let c = s,
                h = r,
                f = I.empty;
            for (; c += l, h += a, a && i && (f = f.append(i[o - 2 >> 1])), !(e || o == n.sections.length || n.sections[o + 1] < 0);) l = n.sections[o++], a = n.sections[o++];
            t(s, c, r, h, f), s = c, r = h
        }
    }
}

function es(n, t, e, i = !1) {
    let s = [],
        r = i ? [] : null,
        o = new Fe(n),
        l = new Fe(t);
    for (let a = -1;;)
        if (o.ins == -1 && l.ins == -1) {
            let c = Math.min(o.len, l.len);
            tt(s, c, -1), o.forward(c), l.forward(c)
        } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !e))) {
        let c = l.len;
        for (tt(s, l.ins, -1); c;) {
            let h = Math.min(o.len, c);
            o.ins >= 0 && a < o.i && o.len <= h && (tt(s, 0, o.ins), r && qt(r, s, o.text), a = o.i), o.forward(h), c -= h
        }
        l.next()
    } else if (o.ins >= 0) {
        let c = 0,
            h = o.len;
        for (; h;)
            if (l.ins == -1) {
                let f = Math.min(h, l.len);
                c += f, h -= f, l.forward(f)
            } else if (l.ins == 0 && l.len < h) h -= l.len, l.next();
        else break;
        tt(s, c, a < o.i ? o.ins : 0), r && a < o.i && qt(r, s, o.text), a = o.i, o.forward(o.len - h)
    } else {
        if (o.done && l.done) return r ? J.createSet(s, r) : jt.create(s);
        throw new Error("Mismatched change set lengths")
    }
}

function Dr(n, t, e = !1) {
    let i = [],
        s = e ? [] : null,
        r = new Fe(n),
        o = new Fe(t);
    for (let l = !1;;) {
        if (r.done && o.done) return s ? J.createSet(i, s) : jt.create(i);
        if (r.ins == 0) tt(i, r.len, 0, l), r.next();
        else if (o.len == 0 && !o.done) tt(i, 0, o.ins, l), s && qt(s, i, o.text), o.next();
        else {
            if (r.done || o.done) throw new Error("Mismatched change set lengths"); {
                let a = Math.min(r.len2, o.len),
                    c = i.length;
                if (r.ins == -1) {
                    let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
                    tt(i, a, h, l), s && h && qt(s, i, o.text)
                } else o.ins == -1 ? (tt(i, r.off ? 0 : r.len, a, l), s && qt(s, i, r.textBit(a))) : (tt(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && qt(s, i, o.text));
                l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > c), r.forward2(a), o.forward(a)
            }
        }
    }
}
class Fe {
    constructor(t) {
        this.set = t, this.i = 0, this.next()
    }
    next() {
        let {
            sections: t
        } = this.set;
        this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
    }
    get done() {
        return this.ins == -2
    }
    get len2() {
        return this.ins < 0 ? this.len : this.ins
    }
    get text() {
        let {
            inserted: t
        } = this.set, e = this.i - 2 >> 1;
        return e >= t.length ? I.empty : t[e]
    }
    textBit(t) {
        let {
            inserted: e
        } = this.set, i = this.i - 2 >> 1;
        return i >= e.length && !t ? I.empty : e[i].slice(this.off, t == null ? void 0 : this.off + t)
    }
    forward(t) {
        t == this.len ? this.next() : (this.len -= t, this.off += t)
    }
    forward2(t) {
        this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t)
    }
}
class Xt {
    constructor(t, e, i) {
        this.from = t, this.to = e, this.flags = i
    }
    get anchor() {
        return this.flags & 32 ? this.to : this.from
    }
    get head() {
        return this.flags & 32 ? this.from : this.to
    }
    get empty() {
        return this.from == this.to
    }
    get assoc() {
        return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0
    }
    get bidiLevel() {
        let t = this.flags & 7;
        return t == 7 ? null : t
    }
    get goalColumn() {
        let t = this.flags >> 6;
        return t == 16777215 ? void 0 : t
    }
    map(t, e = -1) {
        let i, s;
        return this.empty ? i = s = t.mapPos(this.from, e) : (i = t.mapPos(this.from, 1), s = t.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Xt(i, s, this.flags)
    }
    extend(t, e = t) {
        if (t <= this.anchor && e >= this.anchor) return M.range(t, e);
        let i = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
        return M.range(this.anchor, i)
    }
    eq(t, e = !1) {
        return this.anchor == t.anchor && this.head == t.head && (!e || !this.empty || this.assoc == t.assoc)
    }
    toJSON() {
        return {
            anchor: this.anchor,
            head: this.head
        }
    }
    static fromJSON(t) {
        if (!t || typeof t.anchor != "number" || typeof t.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
        return M.range(t.anchor, t.head)
    }
    static create(t, e, i) {
        return new Xt(t, e, i)
    }
}
class M {
    constructor(t, e) {
        this.ranges = t, this.mainIndex = e
    }
    map(t, e = -1) {
        return t.empty ? this : M.create(this.ranges.map(i => i.map(t, e)), this.mainIndex)
    }
    eq(t, e = !1) {
        if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex) return !1;
        for (let i = 0; i < this.ranges.length; i++)
            if (!this.ranges[i].eq(t.ranges[i], e)) return !1;
        return !0
    }
    get main() {
        return this.ranges[this.mainIndex]
    }
    asSingle() {
        return this.ranges.length == 1 ? this : new M([this.main], 0)
    }
    addRange(t, e = !0) {
        return M.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1)
    }
    replaceRange(t, e = this.mainIndex) {
        let i = this.ranges.slice();
        return i[e] = t, M.create(i, this.mainIndex)
    }
    toJSON() {
        return {
            ranges: this.ranges.map(t => t.toJSON()),
            main: this.mainIndex
        }
    }
    static fromJSON(t) {
        if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new M(t.ranges.map(e => Xt.fromJSON(e)), t.main)
    }
    static single(t, e = t) {
        return new M([M.range(t, e)], 0)
    }
    static create(t, e = 0) {
        if (t.length == 0) throw new RangeError("A selection needs at least one range");
        for (let i = 0, s = 0; s < t.length; s++) {
            let r = t[s];
            if (r.empty ? r.from <= i : r.from < i) return M.normalized(t.slice(), e);
            i = r.to
        }
        return new M(t, e)
    }
    static cursor(t, e = 0, i, s) {
        return Xt.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ? ? 16777215) << 6)
    }
    static range(t, e, i, s) {
        let r = (i ? ? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
        return e < t ? Xt.create(e, t, 48 | r) : Xt.create(t, e, (e > t ? 8 : 0) | r)
    }
    static normalized(t, e = 0) {
        let i = t[e];
        t.sort((s, r) => s.from - r.from), e = t.indexOf(i);
        for (let s = 1; s < t.length; s++) {
            let r = t[s],
                o = t[s - 1];
            if (r.empty ? r.from <= o.to : r.from < o.to) {
                let l = o.from,
                    a = Math.max(r.to, o.to);
                s <= e && e--, t.splice(--s, 2, r.anchor > r.head ? M.range(a, l) : M.range(l, a))
            }
        }
        return new M(t, e)
    }
}

function Lr(n, t) {
    for (let e of n.ranges)
        if (e.to > t) throw new RangeError("Selection points outside of document")
}
let Ws = 0;
class E {
    constructor(t, e, i, s, r) {
        this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = s, this.id = Ws++, this.default = t([]), this.extensions = typeof r == "function" ? r(this) : r
    }
    get reader() {
        return this
    }
    static define(t = {}) {
        return new E(t.combine || (e => e), t.compareInput || ((e, i) => e === i), t.compare || (t.combine ? (e, i) => e === i : _s), !!t.static, t.enables)
    } of (t) {
        return new ci([], this, 0, t)
    }
    compute(t, e) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new ci(t, this, 1, e)
    }
    computeN(t, e) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new ci(t, this, 2, e)
    }
    from(t, e) {
        return e || (e = i => i), this.compute([t], i => e(i.field(t)))
    }
}

function _s(n, t) {
    return n == t || n.length == t.length && n.every((e, i) => e === t[i])
}
class ci {
    constructor(t, e, i, s) {
        this.dependencies = t, this.facet = e, this.type = i, this.value = s, this.id = Ws++
    }
    dynamicSlot(t) {
        var e;
        let i = this.value,
            s = this.facet.compareInput,
            r = this.id,
            o = t[r] >> 1,
            l = this.type == 2,
            a = !1,
            c = !1,
            h = [];
        for (let f of this.dependencies) f == "doc" ? a = !0 : f == "selection" ? c = !0 : ((e = t[f.id]) !== null && e !== void 0 ? e : 1) & 1 || h.push(t[f.id]);
        return {
            create(f) {
                return f.values[o] = i(f), 1
            },
            update(f, u) {
                if (a && u.docChanged || c && (u.docChanged || u.selection) || is(f, h)) {
                    let d = i(f);
                    if (l ? !fn(d, f.values[o], s) : !s(d, f.values[o])) return f.values[o] = d, 1
                }
                return 0
            },
            reconfigure: (f, u) => {
                let d, g = u.config.address[r];
                if (g != null) {
                    let x = Si(u, g);
                    if (this.dependencies.every(m => m instanceof E ? u.facet(m) === f.facet(m) : m instanceof wt ? u.field(m, !1) == f.field(m, !1) : !0) || (l ? fn(d = i(f), x, s) : s(d = i(f), x))) return f.values[o] = x, 0
                } else d = i(f);
                return f.values[o] = d, 1
            }
        }
    }
}

function fn(n, t, e) {
    if (n.length != t.length) return !1;
    for (let i = 0; i < n.length; i++)
        if (!e(n[i], t[i])) return !1;
    return !0
}

function is(n, t) {
    let e = !1;
    for (let i of t) Le(n, i) & 1 && (e = !0);
    return e
}

function Qa(n, t, e) {
    let i = e.map(a => n[a.id]),
        s = e.map(a => a.type),
        r = i.filter(a => !(a & 1)),
        o = n[t.id] >> 1;

    function l(a) {
        let c = [];
        for (let h = 0; h < i.length; h++) {
            let f = Si(a, i[h]);
            if (s[h] == 2)
                for (let u of f) c.push(u);
            else c.push(f)
        }
        return t.combine(c)
    }
    return {
        create(a) {
            for (let c of i) Le(a, c);
            return a.values[o] = l(a), 1
        },
        update(a, c) {
            if (!is(a, r)) return 0;
            let h = l(a);
            return t.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1)
        },
        reconfigure(a, c) {
            let h = is(a, i),
                f = c.config.facets[t.id],
                u = c.facet(t);
            if (f && !h && _s(e, f)) return a.values[o] = u, 0;
            let d = l(a);
            return t.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1)
        }
    }
}
const un = E.define({
    static: !0
});
class wt {
    constructor(t, e, i, s, r) {
        this.id = t, this.createF = e, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0
    }
    static define(t) {
        let e = new wt(Ws++, t.create, t.update, t.compare || ((i, s) => i === s), t);
        return t.provide && (e.provides = t.provide(e)), e
    }
    create(t) {
        let e = t.facet(un).find(i => i.field == this);
        return (e ? .create || this.createF)(t)
    }
    slot(t) {
        let e = t[this.id] >> 1;
        return {
            create: i => (i.values[e] = this.create(i), 1),
            update: (i, s) => {
                let r = i.values[e],
                    o = this.updateF(r, s);
                return this.compareF(r, o) ? 0 : (i.values[e] = o, 1)
            },
            reconfigure: (i, s) => s.config.address[this.id] != null ? (i.values[e] = s.field(this), 0) : (i.values[e] = this.create(i), 1)
        }
    }
    init(t) {
        return [this, un.of({
            field: this,
            create: t
        })]
    }
    get extension() {
        return this
    }
}
const Yt = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
};

function ve(n) {
    return t => new Pr(t, n)
}
const zs = {
    highest: ve(Yt.highest),
    high: ve(Yt.high),
    default: ve(Yt.default),
    low: ve(Yt.low),
    lowest: ve(Yt.lowest)
};
class Pr {
    constructor(t, e) {
        this.inner = t, this.prec = e
    }
}
class Ni { of (t) {
        return new ss(this, t)
    }
    reconfigure(t) {
        return Ni.reconfigure.of({
            compartment: this,
            extension: t
        })
    }
    get(t) {
        return t.config.compartments.get(this)
    }
}
class ss {
    constructor(t, e) {
        this.compartment = t, this.inner = e
    }
}
class vi {
    constructor(t, e, i, s, r, o) {
        for (this.base = t, this.compartments = e, this.dynamicSlots = i, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length;) this.statusTemplate.push(0)
    }
    staticFacet(t) {
        let e = this.address[t.id];
        return e == null ? t.default : this.staticValues[e >> 1]
    }
    static resolve(t, e, i) {
        let s = [],
            r = Object.create(null),
            o = new Map;
        for (let u of th(t, e, o)) u instanceof wt ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
        let l = Object.create(null),
            a = [],
            c = [];
        for (let u of s) l[u.id] = c.length << 1, c.push(d => u.slot(d));
        let h = i ? .config.facets;
        for (let u in r) {
            let d = r[u],
                g = d[0].facet,
                x = h && h[u] || [];
            if (d.every(m => m.type == 0))
                if (l[g.id] = a.length << 1 | 1, _s(x, d)) a.push(i.facet(g));
                else {
                    let m = g.combine(d.map(y => y.value));
                    a.push(i && g.compare(m, i.facet(g)) ? i.facet(g) : m)
                }
            else {
                for (let m of d) m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = c.length << 1, c.push(y => m.dynamicSlot(y)));
                l[g.id] = c.length << 1, c.push(m => Qa(m, g, d))
            }
        }
        let f = c.map(u => u(l));
        return new vi(t, o, f, l, a, r)
    }
}

function th(n, t, e) {
    let i = [
            [],
            [],
            [],
            [],
            []
        ],
        s = new Map;

    function r(o, l) {
        let a = s.get(o);
        if (a != null) {
            if (a <= l) return;
            let c = i[a].indexOf(o);
            c > -1 && i[a].splice(c, 1), o instanceof ss && e.delete(o.compartment)
        }
        if (s.set(o, l), Array.isArray(o))
            for (let c of o) r(c, l);
        else if (o instanceof ss) {
            if (e.has(o.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
            let c = t.get(o.compartment) || o.inner;
            e.set(o.compartment, c), r(c, l)
        } else if (o instanceof Pr) r(o.inner, o.prec);
        else if (o instanceof wt) i[l].push(o), o.provides && r(o.provides, l);
        else if (o instanceof ci) i[l].push(o), o.facet.extensions && r(o.facet.extensions, Yt.default);
        else {
            let c = o.extension;
            if (!c) throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
            r(c, l)
        }
    }
    return r(n, Yt.default), i.reduce((o, l) => o.concat(l))
}

function Le(n, t) {
    if (t & 1) return 2;
    let e = t >> 1,
        i = n.status[e];
    if (i == 4) throw new Error("Cyclic dependency between fields and/or facets");
    if (i & 2) return i;
    n.status[e] = 4;
    let s = n.computeSlot(n, n.config.dynamicSlots[e]);
    return n.status[e] = 2 | s
}

function Si(n, t) {
    return t & 1 ? n.config.staticValues[t >> 1] : n.values[t >> 1]
}
const Ir = E.define(),
    ns = E.define({
        combine: n => n.some(t => t),
        static: !0
    }),
    Br = E.define({
        combine: n => n.length ? n[0] : void 0,
        static: !0
    }),
    jr = E.define(),
    Hr = E.define(),
    Vr = E.define(),
    Fr = E.define({
        combine: n => n.length ? n[0] : !1
    });
class xe {
    constructor(t, e) {
        this.type = t, this.value = e
    }
    static define() {
        return new eh
    }
}
class eh { of (t) {
        return new xe(this, t)
    }
}
class ih {
    constructor(t) {
        this.map = t
    } of (t) {
        return new U(this, t)
    }
}
class U {
    constructor(t, e) {
        this.type = t, this.value = e
    }
    map(t) {
        let e = this.type.map(this.value, t);
        return e === void 0 ? void 0 : e == this.value ? this : new U(this.type, e)
    }
    is(t) {
        return this.type == t
    }
    static define(t = {}) {
        return new ih(t.map || (e => e))
    }
    static mapEffects(t, e) {
        if (!t.length) return t;
        let i = [];
        for (let s of t) {
            let r = s.map(e);
            r && i.push(r)
        }
        return i
    }
}
U.reconfigure = U.define();
U.appendConfig = U.define();
class it {
    constructor(t, e, i, s, r, o) {
        this.startState = t, this.changes = e, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Lr(i, e.newLength), r.some(l => l.type == it.time) || (this.annotations = r.concat(it.time.of(Date.now())))
    }
    static create(t, e, i, s, r, o) {
        return new it(t, e, i, s, r, o)
    }
    get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc))
    }
    get newSelection() {
        return this.selection || this.startState.selection.map(this.changes)
    }
    get state() {
        return this._state || this.startState.applyTransaction(this), this._state
    }
    annotation(t) {
        for (let e of this.annotations)
            if (e.type == t) return e.value
    }
    get docChanged() {
        return !this.changes.empty
    }
    get reconfigured() {
        return this.startState.config != this.state.config
    }
    isUserEvent(t) {
        let e = this.annotation(it.userEvent);
        return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."))
    }
}
it.time = xe.define();
it.userEvent = xe.define();
it.addToHistory = xe.define();
it.remote = xe.define();

function sh(n, t) {
    let e = [];
    for (let i = 0, s = 0;;) {
        let r, o;
        if (i < n.length && (s == t.length || t[s] >= n[i])) r = n[i++], o = n[i++];
        else if (s < t.length) r = t[s++], o = t[s++];
        else return e;
        !e.length || e[e.length - 1] < r ? e.push(r, o) : e[e.length - 1] < o && (e[e.length - 1] = o)
    }
}

function Wr(n, t, e) {
    var i;
    let s, r, o;
    return e ? (s = t.changes, r = J.empty(t.changes.length), o = n.changes.compose(t.changes)) : (s = t.changes.map(n.changes), r = n.changes.mapDesc(t.changes, !0), o = n.changes.compose(s)), {
        changes: o,
        selection: t.selection ? t.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s),
        effects: U.mapEffects(n.effects, s).concat(U.mapEffects(t.effects, r)),
        annotations: n.annotations.length ? n.annotations.concat(t.annotations) : t.annotations,
        scrollIntoView: n.scrollIntoView || t.scrollIntoView
    }
}

function rs(n, t, e) {
    let i = t.selection,
        s = le(t.annotations);
    return t.userEvent && (s = s.concat(it.userEvent.of(t.userEvent))), {
        changes: t.changes instanceof J ? t.changes : J.of(t.changes || [], e, n.facet(Br)),
        selection: i && (i instanceof M ? i : M.single(i.anchor, i.head)),
        effects: le(t.effects),
        annotations: s,
        scrollIntoView: !!t.scrollIntoView
    }
}

function _r(n, t, e) {
    let i = rs(n, t.length ? t[0] : {}, n.doc.length);
    t.length && t[0].filter === !1 && (e = !1);
    for (let r = 1; r < t.length; r++) {
        t[r].filter === !1 && (e = !1);
        let o = !!t[r].sequential;
        i = Wr(i, rs(n, t[r], o ? i.changes.newLength : n.doc.length), o)
    }
    let s = it.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
    return rh(e ? nh(s) : s)
}

function nh(n) {
    let t = n.startState,
        e = !0;
    for (let s of t.facet(jr)) {
        let r = s(n);
        if (r === !1) {
            e = !1;
            break
        }
        Array.isArray(r) && (e = e === !0 ? r : sh(e, r))
    }
    if (e !== !0) {
        let s, r;
        if (e === !1) r = n.changes.invertedDesc, s = J.empty(t.doc.length);
        else {
            let o = n.changes.filter(e);
            s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc
        }
        n = it.create(t, s, n.selection && n.selection.map(r), U.mapEffects(n.effects, r), n.annotations, n.scrollIntoView)
    }
    let i = t.facet(Hr);
    for (let s = i.length - 1; s >= 0; s--) {
        let r = i[s](n);
        r instanceof it ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof it ? n = r[0] : n = _r(t, le(r), !1)
    }
    return n
}

function rh(n) {
    let t = n.startState,
        e = t.facet(Vr),
        i = n;
    for (let s = e.length - 1; s >= 0; s--) {
        let r = e[s](n);
        r && Object.keys(r).length && (i = Wr(i, rs(t, r, n.changes.newLength), !0))
    }
    return i == n ? n : it.create(t, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView)
}
const oh = [];

function le(n) {
    return n == null ? oh : Array.isArray(n) ? n : [n]
}
var It = function(n) {
    return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n
}(It || (It = {}));
const lh = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let os;
try {
    os = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
} catch {}

function ah(n) {
    if (os) return os.test(n);
    for (let t = 0; t < n.length; t++) {
        let e = n[t];
        if (/\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || lh.test(e))) return !0
    }
    return !1
}

function hh(n) {
    return t => {
        if (!/\S/.test(t)) return It.Space;
        if (ah(t)) return It.Word;
        for (let e = 0; e < n.length; e++)
            if (t.indexOf(n[e]) > -1) return It.Word;
        return It.Other
    }
}
class z {
    constructor(t, e, i, s, r, o) {
        this.config = t, this.doc = e, this.selection = i, this.values = s, this.status = t.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
        for (let l = 0; l < this.config.dynamicSlots.length; l++) Le(this, l << 1);
        this.computeSlot = null
    }
    field(t, e = !0) {
        let i = this.config.address[t.id];
        if (i == null) {
            if (e) throw new RangeError("Field is not present in this state");
            return
        }
        return Le(this, i), Si(this, i)
    }
    update(...t) {
        return _r(this, t, !0)
    }
    applyTransaction(t) {
        let e = this.config,
            {
                base: i,
                compartments: s
            } = e;
        for (let l of t.effects) l.is(Ni.reconfigure) ? (e && (s = new Map, e.compartments.forEach((a, c) => s.set(c, a)), e = null), s.set(l.value.compartment, l.value.extension)) : l.is(U.reconfigure) ? (e = null, i = l.value) : l.is(U.appendConfig) && (e = null, i = le(i).concat(l.value));
        let r;
        e ? r = t.startState.values.slice() : (e = vi.resolve(i, s, this), r = new z(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (a, c) => c.reconfigure(a, this), null).values);
        let o = t.startState.facet(ns) ? t.newSelection : t.newSelection.asSingle();
        new z(e, t.newDoc, o, r, (l, a) => a.update(l, t), t)
    }
    replaceSelection(t) {
        return typeof t == "string" && (t = this.toText(t)), this.changeByRange(e => ({
            changes: {
                from: e.from,
                to: e.to,
                insert: t
            },
            range: M.cursor(e.from + t.length)
        }))
    }
    changeByRange(t) {
        let e = this.selection,
            i = t(e.ranges[0]),
            s = this.changes(i.changes),
            r = [i.range],
            o = le(i.effects);
        for (let l = 1; l < e.ranges.length; l++) {
            let a = t(e.ranges[l]),
                c = this.changes(a.changes),
                h = c.map(s);
            for (let u = 0; u < l; u++) r[u] = r[u].map(h);
            let f = s.mapDesc(c, !0);
            r.push(a.range.map(f)), s = s.compose(h), o = U.mapEffects(o, h).concat(U.mapEffects(le(a.effects), f))
        }
        return {
            changes: s,
            selection: M.create(r, e.mainIndex),
            effects: o
        }
    }
    changes(t = []) {
        return t instanceof J ? t : J.of(t, this.doc.length, this.facet(z.lineSeparator))
    }
    toText(t) {
        return I.of(t.split(this.facet(z.lineSeparator) || Qi))
    }
    sliceDoc(t = 0, e = this.doc.length) {
        return this.doc.sliceString(t, e, this.lineBreak)
    }
    facet(t) {
        let e = this.config.address[t.id];
        return e == null ? t.default : (Le(this, e), Si(this, e))
    }
    toJSON(t) {
        let e = {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON()
        };
        if (t)
            for (let i in t) {
                let s = t[i];
                s instanceof wt && this.config.address[s.id] != null && (e[i] = s.spec.toJSON(this.field(t[i]), this))
            }
        return e
    }
    static fromJSON(t, e = {}, i) {
        if (!t || typeof t.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
        let s = [];
        if (i) {
            for (let r in i)
                if (Object.prototype.hasOwnProperty.call(t, r)) {
                    let o = i[r],
                        l = t[r];
                    s.push(o.init(a => o.spec.fromJSON(l, a)))
                }
        }
        return z.create({
            doc: t.doc,
            selection: M.fromJSON(t.selection),
            extensions: e.extensions ? s.concat([e.extensions]) : s
        })
    }
    static create(t = {}) {
        let e = vi.resolve(t.extensions || [], new Map),
            i = t.doc instanceof I ? t.doc : I.of((t.doc || "").split(e.staticFacet(z.lineSeparator) || Qi)),
            s = t.selection ? t.selection instanceof M ? t.selection : M.single(t.selection.anchor, t.selection.head) : M.single(0);
        return Lr(s, i.length), e.staticFacet(ns) || (s = s.asSingle()), new z(e, i, s, e.dynamicSlots.map(() => null), (r, o) => o.create(r), null)
    }
    get tabSize() {
        return this.facet(z.tabSize)
    }
    get lineBreak() {
        return this.facet(z.lineSeparator) || `
`
    }
    get readOnly() {
        return this.facet(Fr)
    }
    phrase(t, ...e) {
        for (let i of this.facet(z.phrases))
            if (Object.prototype.hasOwnProperty.call(i, t)) {
                t = i[t];
                break
            }
        return e.length && (t = t.replace(/\$(\$|\d*)/g, (i, s) => {
            if (s == "$") return "$";
            let r = +(s || 1);
            return !r || r > e.length ? i : e[r - 1]
        })), t
    }
    languageDataAt(t, e, i = -1) {
        let s = [];
        for (let r of this.facet(Ir))
            for (let o of r(this, e, i)) Object.prototype.hasOwnProperty.call(o, t) && s.push(o[t]);
        return s
    }
    charCategorizer(t) {
        return hh(this.languageDataAt("wordChars", t).join(""))
    }
    wordAt(t) {
        let {
            text: e,
            from: i,
            length: s
        } = this.doc.lineAt(t), r = this.charCategorizer(t), o = t - i, l = t - i;
        for (; o > 0;) {
            let a = Lt(e, o, !1);
            if (r(e.slice(a, o)) != It.Word) break;
            o = a
        }
        for (; l < s;) {
            let a = Lt(e, l);
            if (r(e.slice(l, a)) != It.Word) break;
            l = a
        }
        return o == l ? null : M.range(o + i, l + i)
    }
}
z.allowMultipleSelections = ns;
z.tabSize = E.define({
    combine: n => n.length ? n[0] : 4
});
z.lineSeparator = Br;
z.readOnly = Fr;
z.phrases = E.define({
    compare(n, t) {
        let e = Object.keys(n),
            i = Object.keys(t);
        return e.length == i.length && e.every(s => n[s] == t[s])
    }
});
z.languageData = Ir;
z.changeFilter = jr;
z.transactionFilter = Hr;
z.transactionExtender = Vr;
Ni.reconfigure = U.define();

function qs(n, t, e = {}) {
    let i = {};
    for (let s of n)
        for (let r of Object.keys(s)) {
            let o = s[r],
                l = i[r];
            if (l === void 0) i[r] = o;
            else if (!(l === o || o === void 0))
                if (Object.hasOwnProperty.call(e, r)) i[r] = e[r](l, o);
                else throw new Error("Config merge conflict for field " + r)
        }
    for (let s in t) i[s] === void 0 && (i[s] = t[s]);
    return i
}
class fe {
    eq(t) {
        return this == t
    }
    range(t, e = t) {
        return We.create(t, e, this)
    }
}
fe.prototype.startSide = fe.prototype.endSide = 0;
fe.prototype.point = !1;
fe.prototype.mapMode = pt.TrackDel;
class We {
    constructor(t, e, i) {
        this.from = t, this.to = e, this.value = i
    }
    static create(t, e, i) {
        return new We(t, e, i)
    }
}

function ls(n, t) {
    return n.from - t.from || n.value.startSide - t.value.startSide
}
class Ks {
    constructor(t, e, i, s) {
        this.from = t, this.to = e, this.value = i, this.maxPoint = s
    }
    get length() {
        return this.to[this.to.length - 1]
    }
    findIndex(t, e, i, s = 0) {
        let r = i ? this.to : this.from;
        for (let o = s, l = r.length;;) {
            if (o == l) return o;
            let a = o + l >> 1,
                c = r[a] - t || (i ? this.value[a].endSide : this.value[a].startSide) - e;
            if (a == o) return c >= 0 ? o : l;
            c >= 0 ? l = a : o = a + 1
        }
    }
    between(t, e, i, s) {
        for (let r = this.findIndex(e, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
            if (s(this.from[r] + t, this.to[r] + t, this.value[r]) === !1) return !1
    }
    map(t, e) {
        let i = [],
            s = [],
            r = [],
            o = -1,
            l = -1;
        for (let a = 0; a < this.value.length; a++) {
            let c = this.value[a],
                h = this.from[a] + t,
                f = this.to[a] + t,
                u, d;
            if (h == f) {
                let g = e.mapPos(h, c.startSide, c.mapMode);
                if (g == null || (u = d = g, c.startSide != c.endSide && (d = e.mapPos(h, c.endSide), d < u))) continue
            } else if (u = e.mapPos(h, c.startSide), d = e.mapPos(f, c.endSide), u > d || u == d && c.startSide > 0 && c.endSide <= 0) continue;
            (d - u || c.endSide - c.startSide) < 0 || (o < 0 && (o = u), c.point && (l = Math.max(l, d - u)), i.push(c), s.push(u - o), r.push(d - o))
        }
        return {
            mapped: i.length ? new Ks(s, r, i, l) : null,
            pos: o
        }
    }
}
class L {
    constructor(t, e, i, s) {
        this.chunkPos = t, this.chunk = e, this.nextLayer = i, this.maxPoint = s
    }
    static create(t, e, i, s) {
        return new L(t, e, i, s)
    }
    get length() {
        let t = this.chunk.length - 1;
        return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length)
    }
    get size() {
        if (this.isEmpty) return 0;
        let t = this.nextLayer.size;
        for (let e of this.chunk) t += e.value.length;
        return t
    }
    chunkEnd(t) {
        return this.chunkPos[t] + this.chunk[t].length
    }
    update(t) {
        let {
            add: e = [],
            sort: i = !1,
            filterFrom: s = 0,
            filterTo: r = this.length
        } = t, o = t.filter;
        if (e.length == 0 && !o) return this;
        if (i && (e = e.slice().sort(ls)), this.isEmpty) return e.length ? L.of(e) : this;
        let l = new zr(this, null, -1).goto(0),
            a = 0,
            c = [],
            h = new _e;
        for (; l.value || a < e.length;)
            if (a < e.length && (l.from - e[a].from || l.startSide - e[a].value.startSide) >= 0) {
                let f = e[a++];
                h.addInner(f.from, f.to, f.value) || c.push(f)
            } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == e.length || this.chunkEnd(l.chunkIndex) < e[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || c.push(We.create(l.from, l.to, l.value))), l.next());
        return h.finishInner(this.nextLayer.isEmpty && !c.length ? L.empty : this.nextLayer.update({
            add: c,
            filter: o,
            filterFrom: s,
            filterTo: r
        }))
    }
    map(t) {
        if (t.empty || this.isEmpty) return this;
        let e = [],
            i = [],
            s = -1;
        for (let o = 0; o < this.chunk.length; o++) {
            let l = this.chunkPos[o],
                a = this.chunk[o],
                c = t.touchesRange(l, l + a.length);
            if (c === !1) s = Math.max(s, a.maxPoint), e.push(a), i.push(t.mapPos(l));
            else if (c === !0) {
                let {
                    mapped: h,
                    pos: f
                } = a.map(l, t);
                h && (s = Math.max(s, h.maxPoint), e.push(h), i.push(f))
            }
        }
        let r = this.nextLayer.map(t);
        return e.length == 0 ? r : new L(i, e, r || L.empty, s)
    }
    between(t, e, i) {
        if (!this.isEmpty) {
            for (let s = 0; s < this.chunk.length; s++) {
                let r = this.chunkPos[s],
                    o = this.chunk[s];
                if (e >= r && t <= r + o.length && o.between(r, t - r, e - r, i) === !1) return
            }
            this.nextLayer.between(t, e, i)
        }
    }
    iter(t = 0) {
        return ze.from([this]).goto(t)
    }
    get isEmpty() {
        return this.nextLayer == this
    }
    static iter(t, e = 0) {
        return ze.from(t).goto(e)
    }
    static compare(t, e, i, s, r = -1) {
        let o = t.filter(f => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r),
            l = e.filter(f => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r),
            a = dn(o, l, i),
            c = new Se(o, a, r),
            h = new Se(l, a, r);
        i.iterGaps((f, u, d) => pn(c, f, h, u, d, s)), i.empty && i.length == 0 && pn(c, 0, h, 0, 0, s)
    }
    static eq(t, e, i = 0, s) {
        s == null && (s = 999999999);
        let r = t.filter(h => !h.isEmpty && e.indexOf(h) < 0),
            o = e.filter(h => !h.isEmpty && t.indexOf(h) < 0);
        if (r.length != o.length) return !1;
        if (!r.length) return !0;
        let l = dn(r, o),
            a = new Se(r, l, 0).goto(i),
            c = new Se(o, l, 0).goto(i);
        for (;;) {
            if (a.to != c.to || !as(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point))) return !1;
            if (a.to > s) return !0;
            a.next(), c.next()
        }
    }
    static spans(t, e, i, s, r = -1) {
        let o = new Se(t, null, r).goto(e),
            l = e,
            a = o.openStart;
        for (;;) {
            let c = Math.min(o.to, i);
            if (o.point) {
                let h = o.activeForPoint(o.to),
                    f = o.pointFrom < e ? h.length + 1 : o.point.startSide < 0 ? h.length : Math.min(h.length, a);
                s.point(l, c, o.point, h, f, o.pointRank), a = Math.min(o.openEnd(c), h.length)
            } else c > l && (s.span(l, c, o.active, a), a = o.openEnd(c));
            if (o.to > i) return a + (o.point && o.to > i ? 1 : 0);
            l = o.to, o.next()
        }
    }
    static of (t, e = !1) {
        let i = new _e;
        for (let s of t instanceof We ? [t] : e ? ch(t) : t) i.add(s.from, s.to, s.value);
        return i.finish()
    }
    static join(t) {
        if (!t.length) return L.empty;
        let e = t[t.length - 1];
        for (let i = t.length - 2; i >= 0; i--)
            for (let s = t[i]; s != L.empty; s = s.nextLayer) e = new L(s.chunkPos, s.chunk, e, Math.max(s.maxPoint, e.maxPoint));
        return e
    }
}
L.empty = new L([], [], null, -1);

function ch(n) {
    if (n.length > 1)
        for (let t = n[0], e = 1; e < n.length; e++) {
            let i = n[e];
            if (ls(t, i) > 0) return n.slice().sort(ls);
            t = i
        }
    return n
}
L.empty.nextLayer = L.empty;
class _e {
    finishChunk(t) {
        this.chunks.push(new Ks(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = [])
    }
    constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null
    }
    add(t, e, i) {
        this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new _e)).add(t, e, i)
    }
    addInner(t, e, i) {
        let s = t - this.lastTo || i.startSide - this.last.endSide;
        if (s <= 0 && (t - this.lastFrom || i.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = i, this.lastFrom = t, this.lastTo = e, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), !0)
    }
    addChunk(t, e) {
        if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
        let i = e.value.length - 1;
        return this.last = e.value[i], this.lastFrom = e.from[i] + t, this.lastTo = e.to[i] + t, !0
    }
    finish() {
        return this.finishInner(L.empty)
    }
    finishInner(t) {
        if (this.from.length && this.finishChunk(!1), this.chunks.length == 0) return t;
        let e = L.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
        return this.from = null, e
    }
}

function dn(n, t, e) {
    let i = new Map;
    for (let r of n)
        for (let o = 0; o < r.chunk.length; o++) r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
    let s = new Set;
    for (let r of t)
        for (let o = 0; o < r.chunk.length; o++) {
            let l = i.get(r.chunk[o]);
            l != null && (e ? e.mapPos(l) : l) == r.chunkPos[o] && !e ? .touchesRange(l, l + r.chunk[o].length) && s.add(r.chunk[o])
        }
    return s
}
class zr {
    constructor(t, e, i, s = 0) {
        this.layer = t, this.skip = e, this.minPoint = i, this.rank = s
    }
    get startSide() {
        return this.value ? this.value.startSide : 0
    }
    get endSide() {
        return this.value ? this.value.endSide : 0
    }
    goto(t, e = -1e9) {
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, !1), this
    }
    gotoInner(t, e, i) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
            let s = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < t || s.maxPoint < this.minPoint)) break;
            this.chunkIndex++, i = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
            let s = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, !0);
            (!i || this.rangeIndex < s) && this.setRangeIndex(s)
        }
        this.next()
    }
    forward(t, e) {
        (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0)
    }
    next() {
        for (;;)
            if (this.chunkIndex == this.layer.chunk.length) {
                this.from = this.to = 1e9, this.value = null;
                break
            } else {
                let t = this.layer.chunkPos[this.chunkIndex],
                    e = this.layer.chunk[this.chunkIndex],
                    i = t + e.from[this.rangeIndex];
                if (this.from = i, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break
            }
    }
    setRangeIndex(t) {
        if (t == this.layer.chunk[this.chunkIndex].value.length) {
            if (this.chunkIndex++, this.skip)
                for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
            this.rangeIndex = 0
        } else this.rangeIndex = t
    }
    nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
    }
    compare(t) {
        return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide
    }
}
class ze {
    constructor(t) {
        this.heap = t
    }
    static from(t, e = null, i = -1) {
        let s = [];
        for (let r = 0; r < t.length; r++)
            for (let o = t[r]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && s.push(new zr(o, e, i, r));
        return s.length == 1 ? s[0] : new ze(s)
    }
    get startSide() {
        return this.value ? this.value.startSide : 0
    }
    goto(t, e = -1e9) {
        for (let i of this.heap) i.goto(t, e);
        for (let i = this.heap.length >> 1; i >= 0; i--) Hi(this.heap, i);
        return this.next(), this
    }
    forward(t, e) {
        for (let i of this.heap) i.forward(t, e);
        for (let i = this.heap.length >> 1; i >= 0; i--) Hi(this.heap, i);
        (this.to - t || this.value.endSide - e) < 0 && this.next()
    }
    next() {
        if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
            let t = this.heap[0];
            this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Hi(this.heap, 0)
        }
    }
}

function Hi(n, t) {
    for (let e = n[t];;) {
        let i = (t << 1) + 1;
        if (i >= n.length) break;
        let s = n[i];
        if (i + 1 < n.length && s.compare(n[i + 1]) >= 0 && (s = n[i + 1], i++), e.compare(s) < 0) break;
        n[i] = e, n[t] = s, t = i
    }
}
class Se {
    constructor(t, e, i) {
        this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ze.from(t, e, i)
    }
    goto(t, e = -1e9) {
        return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this
    }
    forward(t, e) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(t, e)
    }
    removeActive(t) {
        Je(this.active, t), Je(this.activeTo, t), Je(this.activeRank, t), this.minActive = gn(this.active, this.activeTo)
    }
    addActive(t) {
        let e = 0,
            {
                value: i,
                to: s,
                rank: r
            } = this.cursor;
        for (; e < this.activeRank.length && (r - this.activeRank[e] || s - this.activeTo[e]) > 0;) e++;
        Ze(this.active, e, i), Ze(this.activeTo, e, s), Ze(this.activeRank, e, r), t && Ze(t, e, this.cursor.from), this.minActive = gn(this.active, this.activeTo)
    }
    next() {
        let t = this.to,
            e = this.point;
        this.point = null;
        let i = this.openStart < 0 ? [] : null;
        for (;;) {
            let s = this.minActive;
            if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[s] > t) {
                    this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
                    break
                }
                this.removeActive(s), i && Je(i, s)
            } else if (this.cursor.value)
                if (this.cursor.from > t) {
                    this.to = this.cursor.from, this.endSide = this.cursor.startSide;
                    break
                } else {
                    let r = this.cursor.value;
                    if (!r.point) this.addActive(i), this.cursor.next();
                    else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
                    else {
                        this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                        break
                    }
                }
            else {
                this.to = this.endSide = 1e9;
                break
            }
        }
        if (i) {
            this.openStart = 0;
            for (let s = i.length - 1; s >= 0 && i[s] < t; s--) this.openStart++
        }
    }
    activeForPoint(t) {
        if (!this.active.length) return this.active;
        let e = [];
        for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)(this.activeTo[i] > t || this.activeTo[i] == t && this.active[i].endSide >= this.point.endSide) && e.push(this.active[i]);
        return e.reverse()
    }
    openEnd(t) {
        let e = 0;
        for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > t; i--) e++;
        return e
    }
}

function pn(n, t, e, i, s, r) {
    n.goto(t), e.goto(i);
    let o = i + s,
        l = i,
        a = i - t;
    for (;;) {
        let c = n.to + a - e.to || n.endSide - e.endSide,
            h = c < 0 ? n.to + a : e.to,
            f = Math.min(h, o);
        if (n.point || e.point ? n.point && e.point && (n.point == e.point || n.point.eq(e.point)) && as(n.activeForPoint(n.to), e.activeForPoint(e.to)) || r.comparePoint(l, f, n.point, e.point) : f > l && !as(n.active, e.active) && r.compareRange(l, f, n.active, e.active), h > o) break;
        l = h, c <= 0 && n.next(), c >= 0 && e.next()
    }
}

function as(n, t) {
    if (n.length != t.length) return !1;
    for (let e = 0; e < n.length; e++)
        if (n[e] != t[e] && !n[e].eq(t[e])) return !1;
    return !0
}

function Je(n, t) {
    for (let e = t, i = n.length - 1; e < i; e++) n[e] = n[e + 1];
    n.pop()
}

function Ze(n, t, e) {
    for (let i = n.length - 1; i >= t; i--) n[i + 1] = n[i];
    n[t] = e
}

function gn(n, t) {
    let e = -1,
        i = 1e9;
    for (let s = 0; s < t.length; s++)(t[s] - i || n[s].endSide - n[e].endSide) < 0 && (e = s, i = t[s]);
    return e
}

function fh(n, t, e = n.length) {
    let i = 0;
    for (let s = 0; s < e;) n.charCodeAt(s) == 9 ? (i += t - i % t, s++) : (i++, s = Lt(n, s));
    return i
}

function uh(n, t, e, i) {
    for (let s = 0, r = 0;;) {
        if (r >= t) return s;
        if (s == n.length) break;
        r += n.charCodeAt(s) == 9 ? e - r % e : 1, s = Lt(n, s)
    }
    return i === !0 ? -1 : n.length
}
const hs = "ͼ",
    mn = typeof Symbol > "u" ? "__" + hs : Symbol.for(hs),
    cs = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"),
    xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class ue {
    constructor(t, e) {
        this.rules = [];
        let {
            finish: i
        } = e || {};

        function s(o) {
            return /^@/.test(o) ? [o] : o.split(/,\s*/)
        }

        function r(o, l, a, c) {
            let h = [],
                f = /^@(\w+)\b/.exec(o[0]),
                u = f && f[1] == "keyframes";
            if (f && l == null) return a.push(o[0] + ";");
            for (let d in l) {
                let g = l[d];
                if (/&/.test(d)) r(d.split(/,\s*/).map(x => o.map(m => x.replace(/&/, m))).reduce((x, m) => x.concat(m)), g, a);
                else if (g && typeof g == "object") {
                    if (!f) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
                    r(s(d), g, h, u)
                } else g != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, x => "-" + x.toLowerCase()) + ": " + g + ";")
            }(h.length || u) && a.push((i && !f && !c ? o.map(i) : o).join(", ") + " {" + h.join(" ") + "}")
        }
        for (let o in t) r(s(o), t[o], this.rules)
    }
    getRules() {
        return this.rules.join(`
`)
    }
    static newName() {
        let t = xn[mn] || 1;
        return xn[mn] = t + 1, hs + t.toString(36)
    }
    static mount(t, e, i) {
        let s = t[cs],
            r = i && i.nonce;
        s ? r && s.setNonce(r) : s = new dh(t, r), s.mount(Array.isArray(e) ? e : [e], t)
    }
}
let yn = new Map;
class dh {
    constructor(t, e) {
        let i = t.ownerDocument || t,
            s = i.defaultView;
        if (!t.head && t.adoptedStyleSheets && s.CSSStyleSheet) {
            let r = yn.get(i);
            if (r) return t[cs] = r;
            this.sheet = new s.CSSStyleSheet, yn.set(i, this)
        } else this.styleTag = i.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
        this.modules = [], t[cs] = this
    }
    mount(t, e) {
        let i = this.sheet,
            s = 0,
            r = 0;
        for (let o = 0; o < t.length; o++) {
            let l = t[o],
                a = this.modules.indexOf(l);
            if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
                if (this.modules.splice(r++, 0, l), i)
                    for (let c = 0; c < l.rules.length; c++) i.insertRule(l.rules[c], s++)
            } else {
                for (; r < a;) s += this.modules[r++].rules.length;
                s += l.rules.length, r++
            }
        }
        if (i) e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets]);
        else {
            let o = "";
            for (let a = 0; a < this.modules.length; a++) o += this.modules[a].getRules() + `
`;
            this.styleTag.textContent = o;
            let l = e.head || e;
            this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild)
        }
    }
    setNonce(t) {
        this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t)
    }
}

function qe(n) {
    let t;
    return n.nodeType == 11 ? t = n.getSelection ? n : n.ownerDocument : t = n, t.getSelection()
}

function fs(n, t) {
    return t ? n == t || n.contains(t.nodeType != 1 ? t.parentNode : t) : !1
}

function ph(n) {
    let t = n.activeElement;
    for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
    return t
}

function fi(n, t) {
    if (!t.anchorNode) return !1;
    try {
        return fs(n, t.anchorNode)
    } catch {
        return !1
    }
}

function de(n) {
    return n.nodeType == 3 ? ee(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : []
}

function Pe(n, t, e, i) {
    return e ? wn(n, t, e, i, -1) || wn(n, t, e, i, 1) : !1
}

function te(n) {
    for (var t = 0;; t++)
        if (n = n.previousSibling, !n) return t
}

function Ci(n) {
    return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName)
}

function wn(n, t, e, i, s) {
    for (;;) {
        if (n == e && t == i) return !0;
        if (t == (s < 0 ? 0 : Ft(n))) {
            if (n.nodeName == "DIV") return !1;
            let r = n.parentNode;
            if (!r || r.nodeType != 1) return !1;
            t = te(n) + (s < 0 ? 0 : 1), n = r
        } else if (n.nodeType == 1) {
            if (n = n.childNodes[t + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false") return !1;
            t = s < 0 ? Ft(n) : 0
        } else return !1
    }
}

function Ft(n) {
    return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length
}

function Di(n, t) {
    let e = t ? n.left : n.right;
    return {
        left: e,
        right: e,
        top: n.top,
        bottom: n.bottom
    }
}

function gh(n) {
    let t = n.visualViewport;
    return t ? {
        left: 0,
        right: t.width,
        top: 0,
        bottom: t.height
    } : {
        left: 0,
        right: n.innerWidth,
        top: 0,
        bottom: n.innerHeight
    }
}

function qr(n, t) {
    let e = t.width / n.offsetWidth,
        i = t.height / n.offsetHeight;
    return (e > .995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - n.offsetWidth) < 1) && (e = 1), (i > .995 && i < 1.005 || !isFinite(i) || Math.abs(t.height - n.offsetHeight) < 1) && (i = 1), {
        scaleX: e,
        scaleY: i
    }
}

function mh(n, t, e, i, s, r, o, l) {
    let a = n.ownerDocument,
        c = a.defaultView || window;
    for (let h = n, f = !1; h && !f;)
        if (h.nodeType == 1) {
            let u, d = h == a.body,
                g = 1,
                x = 1;
            if (d) u = gh(c);
            else {
                if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (f = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
                    h = h.assignedSlot || h.parentNode;
                    continue
                }
                let w = h.getBoundingClientRect();
                ({
                    scaleX: g,
                    scaleY: x
                } = qr(h, w)), u = {
                    left: w.left,
                    right: w.left + h.clientWidth * g,
                    top: w.top,
                    bottom: w.top + h.clientHeight * x
                }
            }
            let m = 0,
                y = 0;
            if (s == "nearest") t.top < u.top ? (y = -(u.top - t.top + o), e > 0 && t.bottom > u.bottom + y && (y = t.bottom - u.bottom + y + o)) : t.bottom > u.bottom && (y = t.bottom - u.bottom + o, e < 0 && t.top - y < u.top && (y = -(u.top + y - t.top + o)));
            else {
                let w = t.bottom - t.top,
                    S = u.bottom - u.top;
                y = (s == "center" && w <= S ? t.top + w / 2 - S / 2 : s == "start" || s == "center" && e < 0 ? t.top - o : t.bottom - S + o) - u.top
            }
            if (i == "nearest" ? t.left < u.left ? (m = -(u.left - t.left + r), e > 0 && t.right > u.right + m && (m = t.right - u.right + m + r)) : t.right > u.right && (m = t.right - u.right + r, e < 0 && t.left < u.left + m && (m = -(u.left + m - t.left + r))) : m = (i == "center" ? t.left + (t.right - t.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? t.left - r : t.right - (u.right - u.left) + r) - u.left, m || y)
                if (d) c.scrollBy(m, y);
                else {
                    let w = 0,
                        S = 0;
                    if (y) {
                        let v = h.scrollTop;
                        h.scrollTop += y / x, S = (h.scrollTop - v) * x
                    }
                    if (m) {
                        let v = h.scrollLeft;
                        h.scrollLeft += m / g, w = (h.scrollLeft - v) * g
                    }
                    t = {
                        left: t.left - w,
                        top: t.top - S,
                        right: t.right - w,
                        bottom: t.bottom - S
                    }, w && Math.abs(w - m) < 1 && (i = "nearest"), S && Math.abs(S - y) < 1 && (s = "nearest")
                }
            if (d) break;
            h = h.assignedSlot || h.parentNode
        } else if (h.nodeType == 11) h = h.host;
    else break
}

function xh(n) {
    let t = n.ownerDocument,
        e, i;
    for (let s = n.parentNode; s && !(s == t.body || e && i);)
        if (s.nodeType == 1) !i && s.scrollHeight > s.clientHeight && (i = s), !e && s.scrollWidth > s.clientWidth && (e = s), s = s.assignedSlot || s.parentNode;
        else if (s.nodeType == 11) s = s.host;
    else break;
    return {
        x: e,
        y: i
    }
}
class yh {
    constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
    }
    eq(t) {
        return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset
    }
    setRange(t) {
        let {
            anchorNode: e,
            focusNode: i
        } = t;
        this.set(e, Math.min(t.anchorOffset, e ? Ft(e) : 0), i, Math.min(t.focusOffset, i ? Ft(i) : 0))
    }
    set(t, e, i, s) {
        this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s
    }
}
let se = null;

function Kr(n) {
    if (n.setActive) return n.setActive();
    if (se) return n.focus(se);
    let t = [];
    for (let e = n; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode);
    if (n.focus(se == null ? {
            get preventScroll() {
                return se = {
                    preventScroll: !0
                }, !0
            }
        } : void 0), !se) {
        se = !1;
        for (let e = 0; e < t.length;) {
            let i = t[e++],
                s = t[e++],
                r = t[e++];
            i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r)
        }
    }
}
let bn;

function ee(n, t, e = t) {
    let i = bn || (bn = document.createRange());
    return i.setEnd(n, e), i.setStart(n, t), i
}

function ae(n, t, e, i) {
    let s = {
        key: t,
        code: t,
        keyCode: e,
        which: e,
        cancelable: !0
    };
    i && ({
        altKey: s.altKey,
        ctrlKey: s.ctrlKey,
        shiftKey: s.shiftKey,
        metaKey: s.metaKey
    } = i);
    let r = new KeyboardEvent("keydown", s);
    r.synthetic = !0, n.dispatchEvent(r);
    let o = new KeyboardEvent("keyup", s);
    return o.synthetic = !0, n.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented
}

function wh(n) {
    for (; n;) {
        if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host)) return n;
        n = n.assignedSlot || n.parentNode
    }
    return null
}

function Ur(n) {
    for (; n.attributes.length;) n.removeAttributeNode(n.attributes[0])
}

function bh(n, t) {
    let e = t.focusNode,
        i = t.focusOffset;
    if (!e || t.anchorNode != e || t.anchorOffset != i) return !1;
    for (i = Math.min(i, Ft(e));;)
        if (i) {
            if (e.nodeType != 1) return !1;
            let s = e.childNodes[i - 1];
            s.contentEditable == "false" ? i-- : (e = s, i = Ft(e))
        } else {
            if (e == n) return !0;
            i = te(e), e = e.parentNode
        }
}

function Gr(n) {
    return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4)
}

function $r(n, t) {
    for (let e = n, i = t;;) {
        if (e.nodeType == 3 && i > 0) return {
            node: e,
            offset: i
        };
        if (e.nodeType == 1 && i > 0) {
            if (e.contentEditable == "false") return null;
            e = e.childNodes[i - 1], i = Ft(e)
        } else if (e.parentNode && !Ci(e)) i = te(e), e = e.parentNode;
        else return null
    }
}

function Yr(n, t) {
    for (let e = n, i = t;;) {
        if (e.nodeType == 3 && i < e.nodeValue.length) return {
            node: e,
            offset: i
        };
        if (e.nodeType == 1 && i < e.childNodes.length) {
            if (e.contentEditable == "false") return null;
            e = e.childNodes[i], i = 0
        } else if (e.parentNode && !Ci(e)) i = te(e) + 1, e = e.parentNode;
        else return null
    }
}
class et {
    constructor(t, e, i = !0) {
        this.node = t, this.offset = e, this.precise = i
    }
    static before(t, e) {
        return new et(t.parentNode, te(t), e)
    }
    static after(t, e) {
        return new et(t.parentNode, te(t) + 1, e)
    }
}
const Us = [];
class V {
    constructor() {
        this.parent = null, this.dom = null, this.flags = 2
    }
    get overrideDOMText() {
        return null
    }
    get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
    }
    get posAtEnd() {
        return this.posAtStart + this.length
    }
    posBefore(t) {
        let e = this.posAtStart;
        for (let i of this.children) {
            if (i == t) return e;
            e += i.length + i.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
    }
    posAfter(t) {
        return this.posBefore(t) + t.length
    }
    sync(t, e) {
        if (this.flags & 2) {
            let i = this.dom,
                s = null,
                r;
            for (let o of this.children) {
                if (o.flags & 7) {
                    if (!o.dom && (r = s ? s.nextSibling : i.firstChild)) {
                        let l = V.get(r);
                        (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r)
                    }
                    o.sync(t, e), o.flags &= -8
                }
                if (r = s ? s.nextSibling : i.firstChild, e && !e.written && e.node == i && r != o.dom && (e.written = !0), o.dom.parentNode == i)
                    for (; r && r != o.dom;) r = vn(r);
                else i.insertBefore(o.dom, r);
                s = o.dom
            }
            for (r = s ? s.nextSibling : i.firstChild, r && e && e.node == i && (e.written = !0); r;) r = vn(r)
        } else if (this.flags & 1)
            for (let i of this.children) i.flags & 7 && (i.sync(t, e), i.flags &= -8)
    }
    reuseDOM(t) {}
    localPosFromDOM(t, e) {
        let i;
        if (t == this.dom) i = this.dom.childNodes[e];
        else {
            let s = Ft(t) == 0 ? 0 : e == 0 ? -1 : 1;
            for (;;) {
                let r = t.parentNode;
                if (r == this.dom) break;
                s == 0 && r.firstChild != r.lastChild && (t == r.firstChild ? s = -1 : s = 1), t = r
            }
            s < 0 ? i = t : i = t.nextSibling
        }
        if (i == this.dom.firstChild) return 0;
        for (; i && !V.get(i);) i = i.nextSibling;
        if (!i) return this.length;
        for (let s = 0, r = 0;; s++) {
            let o = this.children[s];
            if (o.dom == i) return r;
            r += o.length + o.breakAfter
        }
    }
    domBoundsAround(t, e, i = 0) {
        let s = -1,
            r = -1,
            o = -1,
            l = -1;
        for (let a = 0, c = i, h = i; a < this.children.length; a++) {
            let f = this.children[a],
                u = c + f.length;
            if (c < t && u > e) return f.domBoundsAround(t, e, c);
            if (u >= t && s == -1 && (s = a, r = c), c > e && f.dom.parentNode == this.dom) {
                o = a, l = h;
                break
            }
            h = u, c = u + f.breakAfter
        }
        return {
            from: r,
            to: l < 0 ? i + this.length : l,
            startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
            endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
        }
    }
    markDirty(t = !1) {
        this.flags |= 2, this.markParentsDirty(t)
    }
    markParentsDirty(t) {
        for (let e = this.parent; e; e = e.parent) {
            if (t && (e.flags |= 2), e.flags & 1) return;
            e.flags |= 1, t = !1
        }
    }
    setParent(t) {
        this.parent != t && (this.parent = t, this.flags & 7 && this.markParentsDirty(!0))
    }
    setDOM(t) {
        this.dom != t && (this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this)
    }
    get rootView() {
        for (let t = this;;) {
            let e = t.parent;
            if (!e) return t;
            t = e
        }
    }
    replaceChildren(t, e, i = Us) {
        this.markDirty();
        for (let s = t; s < e; s++) {
            let r = this.children[s];
            r.parent == this && i.indexOf(r) < 0 && r.destroy()
        }
        this.children.splice(t, e - t, ...i);
        for (let s = 0; s < i.length; s++) i[s].setParent(this)
    }
    ignoreMutation(t) {
        return !1
    }
    ignoreEvent(t) {
        return !1
    }
    childCursor(t = this.length) {
        return new Xr(this.children, t, this.children.length)
    }
    childPos(t, e = 1) {
        return this.childCursor().findPos(t, e)
    }
    toString() {
        let t = this.constructor.name.replace("View", "");
        return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "")
    }
    static get(t) {
        return t.cmView
    }
    get isEditable() {
        return !0
    }
    get isWidget() {
        return !1
    }
    get isHidden() {
        return !1
    }
    merge(t, e, i, s, r, o) {
        return !1
    }
    become(t) {
        return !1
    }
    canReuseDOM(t) {
        return t.constructor == this.constructor && !((this.flags | t.flags) & 8)
    }
    getSide() {
        return 0
    }
    destroy() {
        for (let t of this.children) t.parent == this && t.destroy();
        this.parent = null
    }
}
V.prototype.breakAfter = 0;

function vn(n) {
    let t = n.nextSibling;
    return n.parentNode.removeChild(n), t
}
class Xr {
    constructor(t, e, i) {
        this.children = t, this.pos = e, this.i = i, this.off = 0
    }
    findPos(t, e = 1) {
        for (;;) {
            if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) return this.off = t - this.pos, this;
            let i = this.children[--this.i];
            this.pos -= i.length + i.breakAfter
        }
    }
}

function Jr(n, t, e, i, s, r, o, l, a) {
    let {
        children: c
    } = n, h = c.length ? c[t] : null, f = r.length ? r[r.length - 1] : null, u = f ? f.breakAfter : o;
    if (!(t == i && h && !o && !u && r.length < 2 && h.merge(e, s, r.length ? f : null, e == 0, l, a))) {
        if (i < c.length) {
            let d = c[i];
            d && (s < d.length || d.breakAfter && f ? .breakAfter) ? (t == i && (d = d.split(s), s = 0), !u && f && d.merge(0, s, f, !0, 0, a) ? r[r.length - 1] = d : ((s || d.children.length && !d.children[0].length) && d.merge(0, s, null, !1, 0, a), r.push(d))) : d ? .breakAfter && (f ? f.breakAfter = 1 : o = 1), i++
        }
        for (h && (h.breakAfter = o, e > 0 && (!o && r.length && h.merge(e, h.length, r[0], !1, l, 0) ? h.breakAfter = r.shift().breakAfter : (e < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(e, h.length, null, !1, l, 0), t++)); t < i && r.length;)
            if (c[i - 1].become(r[r.length - 1])) i--, r.pop(), a = r.length ? 0 : l;
            else if (c[t].become(r[0])) t++, r.shift(), l = r.length ? 0 : a;
        else break;
        !r.length && t && i < c.length && !c[t - 1].breakAfter && c[i].merge(0, 0, c[t - 1], !1, l, a) && t--, (t < i || r.length) && n.replaceChildren(t, i, r)
    }
}

function Zr(n, t, e, i, s, r) {
    let o = n.childCursor(),
        {
            i: l,
            off: a
        } = o.findPos(e, 1),
        {
            i: c,
            off: h
        } = o.findPos(t, -1),
        f = t - e;
    for (let u of i) f += u.length;
    n.length += f, Jr(n, c, h, l, a, i, 0, s, r)
}
let ht = typeof navigator < "u" ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
    },
    us = typeof document < "u" ? document : {
        documentElement: {
            style: {}
        }
    };
const ds = /Edge\/(\d+)/.exec(ht.userAgent),
    Qr = /MSIE \d/.test(ht.userAgent),
    ps = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ht.userAgent),
    Li = !!(Qr || ps || ds),
    Sn = !Li && /gecko\/(\d+)/i.test(ht.userAgent),
    Vi = !Li && /Chrome\/(\d+)/.exec(ht.userAgent),
    Cn = "webkitFontSmoothing" in us.documentElement.style,
    to = !Li && /Apple Computer/.test(ht.vendor),
    kn = to && (/Mobile\/\w+/.test(ht.userAgent) || ht.maxTouchPoints > 2);
var k = {
    mac: kn || /Mac/.test(ht.platform),
    windows: /Win/.test(ht.platform),
    linux: /Linux|X11/.test(ht.platform),
    ie: Li,
    ie_version: Qr ? us.documentMode || 6 : ps ? +ps[1] : ds ? +ds[1] : 0,
    gecko: Sn,
    gecko_version: Sn ? +(/Firefox\/(\d+)/.exec(ht.userAgent) || [0, 0])[1] : 0,
    chrome: !!Vi,
    chrome_version: Vi ? +Vi[1] : 0,
    ios: kn,
    android: /Android\b/.test(ht.userAgent),
    webkit: Cn,
    safari: to,
    webkit_version: Cn ? +(/\bAppleWebKit\/(\d+)/.exec(ht.userAgent) || [0, 0])[1] : 0,
    tabSize: us.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const vh = 256;
class kt extends V {
    constructor(t) {
        super(), this.text = t
    }
    get length() {
        return this.text.length
    }
    createDOM(t) {
        this.setDOM(t || document.createTextNode(this.text))
    }
    sync(t, e) {
        this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text)
    }
    reuseDOM(t) {
        t.nodeType == 3 && this.createDOM(t)
    }
    merge(t, e, i) {
        return this.flags & 8 || i && (!(i instanceof kt) || this.length - (e - t) + i.length > vh || i.flags & 8) ? !1 : (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), !0)
    }
    split(t) {
        let e = new kt(this.text.slice(t));
        return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= this.flags & 8, e
    }
    localPosFromDOM(t, e) {
        return t == this.dom ? e : e ? this.text.length : 0
    }
    domAtPos(t) {
        return new et(this.dom, t)
    }
    domBoundsAround(t, e, i) {
        return {
            from: i,
            to: i + this.length,
            startDOM: this.dom,
            endDOM: this.dom.nextSibling
        }
    }
    coordsAt(t, e) {
        return Sh(this.dom, t, e)
    }
}
class Wt extends V {
    constructor(t, e = [], i = 0) {
        super(), this.mark = t, this.children = e, this.length = i;
        for (let s of e) s.setParent(this)
    }
    setAttrs(t) {
        if (Ur(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
            for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
        return t
    }
    canReuseDOM(t) {
        return super.canReuseDOM(t) && !((this.flags | t.flags) & 8)
    }
    reuseDOM(t) {
        t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.flags |= 6)
    }
    sync(t, e) {
        this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e)
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof Wt && i.mark.eq(this.mark)) || t && r <= 0 || e < this.length && o <= 0) ? !1 : (Zr(this, t, e, i ? i.children.slice() : [], r - 1, o - 1), this.markDirty(), !0)
    }
    split(t) {
        let e = [],
            i = 0,
            s = -1,
            r = 0;
        for (let l of this.children) {
            let a = i + l.length;
            a > t && e.push(i < t ? l.split(t - i) : l), s < 0 && i >= t && (s = r), i = a, r++
        }
        let o = this.length - t;
        return this.length = t, s > -1 && (this.children.length = s, this.markDirty()), new Wt(this.mark, e, o)
    }
    domAtPos(t) {
        return eo(this, t)
    }
    coordsAt(t, e) {
        return so(this, t, e)
    }
}

function Sh(n, t, e) {
    let i = n.nodeValue.length;
    t > i && (t = i);
    let s = t,
        r = t,
        o = 0;
    t == 0 && e < 0 || t == i && e >= 0 ? k.chrome || k.gecko || (t ? (s--, o = 1) : r < i && (r++, o = -1)) : e < 0 ? s-- : r < i && r++;
    let l = ee(n, s, r).getClientRects();
    if (!l.length) return null;
    let a = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
    return k.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, c => c.width) || a), o ? Di(a, o < 0) : a || null
}
class Jt extends V {
    static create(t, e, i) {
        return new Jt(t, e, i)
    }
    constructor(t, e, i) {
        super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null
    }
    split(t) {
        let e = Jt.create(this.widget, this.length - t, this.side);
        return this.length -= t, e
    }
    sync(t) {
        (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"))
    }
    getSide() {
        return this.side
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof Jt) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0)
    }
    become(t) {
        return t instanceof Jt && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.compare(t.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, !0) : !1
    }
    ignoreMutation() {
        return !0
    }
    ignoreEvent(t) {
        return this.widget.ignoreEvent(t)
    }
    get overrideDOMText() {
        if (this.length == 0) return I.empty;
        let t = this;
        for (; t.parent;) t = t.parent;
        let {
            view: e
        } = t, i = e && e.state.doc, s = this.posAtStart;
        return i ? i.slice(s, s + this.length) : I.empty
    }
    domAtPos(t) {
        return (this.length ? t == 0 : this.side > 0) ? et.before(this.dom) : et.after(this.dom, t == this.length)
    }
    domBoundsAround() {
        return null
    }
    coordsAt(t, e) {
        let i = this.widget.coordsAt(this.dom, t, e);
        if (i) return i;
        let s = this.dom.getClientRects(),
            r = null;
        if (!s.length) return null;
        let o = this.side ? this.side < 0 : t > 0;
        for (let l = o ? s.length - 1 : 0; r = s[l], !(t > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom); l += o ? -1 : 1);
        return Di(r, !o)
    }
    get isEditable() {
        return !1
    }
    get isWidget() {
        return !0
    }
    get isHidden() {
        return this.widget.isHidden
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom)
    }
}
class pe extends V {
    constructor(t) {
        super(), this.side = t
    }
    get length() {
        return 0
    }
    merge() {
        return !1
    }
    become(t) {
        return t instanceof pe && t.side == this.side
    }
    split() {
        return new pe(this.side)
    }
    sync() {
        if (!this.dom) {
            let t = document.createElement("img");
            t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t)
        }
    }
    getSide() {
        return this.side
    }
    domAtPos(t) {
        return this.side > 0 ? et.before(this.dom) : et.after(this.dom)
    }
    localPosFromDOM() {
        return 0
    }
    domBoundsAround() {
        return null
    }
    coordsAt(t) {
        return this.dom.getBoundingClientRect()
    }
    get overrideDOMText() {
        return I.empty
    }
    get isHidden() {
        return !0
    }
}
kt.prototype.children = Jt.prototype.children = pe.prototype.children = Us;

function eo(n, t) {
    let e = n.dom,
        {
            children: i
        } = n,
        s = 0;
    for (let r = 0; s < i.length; s++) {
        let o = i[s],
            l = r + o.length;
        if (!(l == r && o.getSide() <= 0)) {
            if (t > r && t < l && o.dom.parentNode == e) return o.domAtPos(t - r);
            if (t <= r) break;
            r = l
        }
    }
    for (let r = s; r > 0; r--) {
        let o = i[r - 1];
        if (o.dom.parentNode == e) return o.domAtPos(o.length)
    }
    for (let r = s; r < i.length; r++) {
        let o = i[r];
        if (o.dom.parentNode == e) return o.domAtPos(0)
    }
    return new et(e, 0)
}

function io(n, t, e) {
    let i, {
        children: s
    } = n;
    e > 0 && t instanceof Wt && s.length && (i = s[s.length - 1]) instanceof Wt && i.mark.eq(t.mark) ? io(i, t.children[0], e - 1) : (s.push(t), t.setParent(n)), n.length += t.length
}

function so(n, t, e) {
    let i = null,
        s = -1,
        r = null,
        o = -1;

    function l(c, h) {
        for (let f = 0, u = 0; f < c.children.length && u <= h; f++) {
            let d = c.children[f],
                g = u + d.length;
            g >= h && (d.children.length ? l(d, h - u) : (!r || r.isHidden && e > 0) && (g > h || u == g && d.getSide() > 0) ? (r = d, o = h - u) : (u < h || u == g && d.getSide() < 0 && !d.isHidden) && (i = d, s = h - u)), u = g
        }
    }
    l(n, t);
    let a = (e < 0 ? i : r) || i || r;
    return a ? a.coordsAt(Math.max(0, a == i ? s : o), e) : Ch(n)
}

function Ch(n) {
    let t = n.dom.lastChild;
    if (!t) return n.dom.getBoundingClientRect();
    let e = de(t);
    return e[e.length - 1] || null
}

function gs(n, t) {
    for (let e in n) e == "class" && t.class ? t.class += " " + n.class : e == "style" && t.style ? t.style += ";" + n.style : t[e] = n[e];
    return t
}
const Mn = Object.create(null);

function ki(n, t, e) {
    if (n == t) return !0;
    n || (n = Mn), t || (t = Mn);
    let i = Object.keys(n),
        s = Object.keys(t);
    if (i.length - (e && i.indexOf(e) > -1 ? 1 : 0) != s.length - (e && s.indexOf(e) > -1 ? 1 : 0)) return !1;
    for (let r of i)
        if (r != e && (s.indexOf(r) == -1 || n[r] !== t[r])) return !1;
    return !0
}

function ms(n, t, e) {
    let i = !1;
    if (t)
        for (let s in t) e && s in e || (i = !0, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
    if (e)
        for (let s in e) t && t[s] == e[s] || (i = !0, s == "style" ? n.style.cssText = e[s] : n.setAttribute(s, e[s]));
    return i
}

function kh(n) {
    let t = Object.create(null);
    for (let e = 0; e < n.attributes.length; e++) {
        let i = n.attributes[e];
        t[i.name] = i.value
    }
    return t
}
class Y extends V {
    constructor() {
        super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0
    }
    merge(t, e, i, s, r, o) {
        if (i) {
            if (!(i instanceof Y)) return !1;
            this.dom || i.transferDOM(this)
        }
        return s && this.setDeco(i ? i.attrs : null), Zr(this, t, e, i ? i.children.slice() : [], r, o), !0
    }
    split(t) {
        let e = new Y;
        if (e.breakAfter = this.breakAfter, this.length == 0) return e;
        let {
            i,
            off: s
        } = this.childPos(t);
        s && (e.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
        for (let r = i; r < this.children.length; r++) e.append(this.children[r], 0);
        for (; i > 0 && this.children[i - 1].length == 0;) this.children[--i].destroy();
        return this.children.length = i, this.markDirty(), this.length = t, e
    }
    transferDOM(t) {
        this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null)
    }
    setDeco(t) {
        ki(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t)
    }
    append(t, e) {
        io(this, t, e)
    }
    addLineDeco(t) {
        let e = t.spec.attributes,
            i = t.spec.class;
        e && (this.attrs = gs(e, this.attrs || {})), i && (this.attrs = gs({
            class: i
        }, this.attrs || {}))
    }
    domAtPos(t) {
        return eo(this, t)
    }
    reuseDOM(t) {
        t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6)
    }
    sync(t, e) {
        var i;
        this.dom ? this.flags & 4 && (Ur(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (ms(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
        let s = this.dom.lastChild;
        for (; s && V.get(s) instanceof Wt;) s = s.lastChild;
        if (!s || !this.length || s.nodeName != "BR" && ((i = V.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!k.ios || !this.children.some(r => r instanceof kt))) {
            let r = document.createElement("BR");
            r.cmIgnore = !0, this.dom.appendChild(r)
        }
    }
    measureTextSize() {
        if (this.children.length == 0 || this.length > 20) return null;
        let t = 0,
            e;
        for (let i of this.children) {
            if (!(i instanceof kt) || /[^ -~]/.test(i.text)) return null;
            let s = de(i.dom);
            if (s.length != 1) return null;
            t += s[0].width, e = s[0].height
        }
        return t ? {
            lineHeight: this.dom.getBoundingClientRect().height,
            charWidth: t / this.length,
            textHeight: e
        } : null
    }
    coordsAt(t, e) {
        let i = so(this, t, e);
        if (!this.children.length && i && this.parent) {
            let {
                heightOracle: s
            } = this.parent.view.viewState, r = i.bottom - i.top;
            if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
                let o = (r - s.textHeight) / 2;
                return {
                    top: i.top + o,
                    bottom: i.bottom - o,
                    left: i.left,
                    right: i.left
                }
            }
        }
        return i
    }
    become(t) {
        return t instanceof Y && this.children.length == 0 && t.children.length == 0 && ki(this.attrs, t.attrs) && this.breakAfter == t.breakAfter
    }
    covers() {
        return !0
    }
    static find(t, e) {
        for (let i = 0, s = 0; i < t.children.length; i++) {
            let r = t.children[i],
                o = s + r.length;
            if (o >= e) {
                if (r instanceof Y) return r;
                if (o > e) break
            }
            s = o + r.breakAfter
        }
        return null
    }
}
class Ht extends V {
    constructor(t, e, i) {
        super(), this.widget = t, this.length = e, this.deco = i, this.breakAfter = 0, this.prevWidget = null
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof Ht) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0)
    }
    domAtPos(t) {
        return t == 0 ? et.before(this.dom) : et.after(this.dom, t == this.length)
    }
    split(t) {
        let e = this.length - t;
        this.length = t;
        let i = new Ht(this.widget, e, this.deco);
        return i.breakAfter = this.breakAfter, i
    }
    get children() {
        return Us
    }
    sync(t) {
        (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"))
    }
    get overrideDOMText() {
        return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : I.empty
    }
    domBoundsAround() {
        return null
    }
    become(t) {
        return t instanceof Ht && t.widget.constructor == this.widget.constructor ? (t.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, !0) : !1
    }
    ignoreMutation() {
        return !0
    }
    ignoreEvent(t) {
        return this.widget.ignoreEvent(t)
    }
    get isEditable() {
        return !1
    }
    get isWidget() {
        return !0
    }
    coordsAt(t, e) {
        return this.widget.coordsAt(this.dom, t, e)
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom)
    }
    covers(t) {
        let {
            startSide: e,
            endSide: i
        } = this.deco;
        return e == i ? !1 : t < 0 ? e < 0 : i > 0
    }
}
class ye {
    eq(t) {
        return !1
    }
    updateDOM(t, e) {
        return !1
    }
    compare(t) {
        return this == t || this.constructor == t.constructor && this.eq(t)
    }
    get estimatedHeight() {
        return -1
    }
    get lineBreaks() {
        return 0
    }
    ignoreEvent(t) {
        return !0
    }
    coordsAt(t, e, i) {
        return null
    }
    get isHidden() {
        return !1
    }
    get editable() {
        return !1
    }
    destroy(t) {}
}
var ot = function(n) {
    return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n
}(ot || (ot = {}));
class W extends fe {
    constructor(t, e, i, s) {
        super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = s
    }
    get heightRelevant() {
        return !1
    }
    static mark(t) {
        return new $e(t)
    }
    static widget(t) {
        let e = Math.max(-1e4, Math.min(1e4, t.side || 0)),
            i = !!t.block;
        return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new Ut(t, e, e, i, t.widget || null, !1)
    }
    static replace(t) {
        let e = !!t.block,
            i, s;
        if (t.isBlockGap) i = -5e8, s = 4e8;
        else {
            let {
                start: r,
                end: o
            } = no(t, e);
            i = (r ? e ? -3e8 : -1 : 5e8) - 1, s = (o ? e ? 2e8 : 1 : -6e8) + 1
        }
        return new Ut(t, i, s, e, t.widget || null, !0)
    }
    static line(t) {
        return new Ye(t)
    }
    static set(t, e = !1) {
        return L.of(t, e)
    }
    hasHeight() {
        return this.widget ? this.widget.estimatedHeight > -1 : !1
    }
}
W.none = L.empty;
class $e extends W {
    constructor(t) {
        let {
            start: e,
            end: i
        } = no(t);
        super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null
    }
    eq(t) {
        var e, i;
        return this == t || t instanceof $e && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((i = t.attrs) === null || i === void 0 ? void 0 : i.class)) && ki(this.attrs, t.attrs, "class")
    }
    range(t, e = t) {
        if (t >= e) throw new RangeError("Mark decorations may not be empty");
        return super.range(t, e)
    }
}
$e.prototype.point = !1;
class Ye extends W {
    constructor(t) {
        super(-2e8, -2e8, null, t)
    }
    eq(t) {
        return t instanceof Ye && this.spec.class == t.spec.class && ki(this.spec.attributes, t.spec.attributes)
    }
    range(t, e = t) {
        if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(t, e)
    }
}
Ye.prototype.mapMode = pt.TrackBefore;
Ye.prototype.point = !0;
class Ut extends W {
    constructor(t, e, i, s, r, o) {
        super(e, i, r, t), this.block = s, this.isReplace = o, this.mapMode = s ? e <= 0 ? pt.TrackBefore : pt.TrackAfter : pt.TrackDel
    }
    get type() {
        return this.startSide != this.endSide ? ot.WidgetRange : this.startSide <= 0 ? ot.WidgetBefore : ot.WidgetAfter
    }
    get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
    }
    eq(t) {
        return t instanceof Ut && Mh(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide
    }
    range(t, e = t) {
        if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(t, e)
    }
}
Ut.prototype.point = !0;

function no(n, t = !1) {
    let {
        inclusiveStart: e,
        inclusiveEnd: i
    } = n;
    return e == null && (e = n.inclusive), i == null && (i = n.inclusive), {
        start: e ? ? t,
        end: i ? ? t
    }
}

function Mh(n, t) {
    return n == t || !!(n && t && n.compare(t))
}

function xs(n, t, e, i = 0) {
    let s = e.length - 1;
    s >= 0 && e[s] + i >= n ? e[s] = Math.max(e[s], t) : e.push(n, t)
}
class Ie {
    constructor(t, e, i, s) {
        this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e
    }
    posCovered() {
        if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
        let t = this.content[this.content.length - 1];
        return !(t.breakAfter || t instanceof Ht && t.deco.endSide < 0)
    }
    getLine() {
        return this.curLine || (this.content.push(this.curLine = new Y), this.atCursorPos = !0), this.curLine
    }
    flushBuffer(t = this.bufferMarks) {
        this.pendingBuffer && (this.curLine.append(Qe(new pe(-1), t), t.length), this.pendingBuffer = 0)
    }
    addBlockWidget(t) {
        this.flushBuffer(), this.curLine = null, this.content.push(t)
    }
    finish(t) {
        this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(t && this.content.length && this.content[this.content.length - 1] instanceof Ht) && this.getLine()
    }
    buildText(t, e, i) {
        for (; t > 0;) {
            if (this.textOff == this.text.length) {
                let {
                    value: r,
                    lineBreak: o,
                    done: l
                } = this.cursor.next(this.skip);
                if (this.skip = 0, l) throw new Error("Ran out of text content when drawing inline views");
                if (o) {
                    this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, t--;
                    continue
                } else this.text = r, this.textOff = 0
            }
            let s = Math.min(this.text.length - this.textOff, t, 512);
            this.flushBuffer(e.slice(e.length - i)), this.getLine().append(Qe(new kt(this.text.slice(this.textOff, this.textOff + s)), e), i), this.atCursorPos = !0, this.textOff += s, t -= s, i = 0
        }
    }
    span(t, e, i, s) {
        this.buildText(e - t, i, s), this.pos = e, this.openStart < 0 && (this.openStart = s)
    }
    point(t, e, i, s, r, o) {
        if (this.disallowBlockEffectsFor[o] && i instanceof Ut) {
            if (i.block) throw new RangeError("Block decorations may not be specified via plugins");
            if (e > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
        }
        let l = e - t;
        if (i instanceof Ut)
            if (i.block) i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Ht(i.widget || ge.block, l, i));
            else {
                let a = Jt.create(i.widget || ge.inline, l, l ? 0 : i.startSide),
                    c = this.atCursorPos && !a.isEditable && r <= s.length && (t < e || i.startSide > 0),
                    h = !a.isEditable && (t < e || r > s.length || i.startSide <= 0),
                    f = this.getLine();
                this.pendingBuffer == 2 && !c && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), c && (f.append(Qe(new pe(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(Qe(a, s), r), this.atCursorPos = h, this.pendingBuffer = h ? t < e || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice())
            }
        else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
        l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r)
    }
    static build(t, e, i, s, r) {
        let o = new Ie(t, e, i, r);
        return o.openEnd = L.spans(s, e, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o
    }
}

function Qe(n, t) {
    for (let e of t) n = new Wt(e, [n], n.length);
    return n
}
class ge extends ye {
    constructor(t) {
        super(), this.tag = t
    }
    eq(t) {
        return t.tag == this.tag
    }
    toDOM() {
        return document.createElement(this.tag)
    }
    updateDOM(t) {
        return t.nodeName.toLowerCase() == this.tag
    }
    get isHidden() {
        return !0
    }
}
ge.inline = new ge("span");
ge.block = new ge("div");
var X = function(n) {
    return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n
}(X || (X = {}));
const ie = X.LTR,
    Gs = X.RTL;

function ro(n) {
    let t = [];
    for (let e = 0; e < n.length; e++) t.push(1 << +n[e]);
    return t
}
const Ah = ro("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
    Eh = ro("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
    ys = Object.create(null),
    Ot = [];
for (let n of ["()", "[]", "{}"]) {
    let t = n.charCodeAt(0),
        e = n.charCodeAt(1);
    ys[t] = e, ys[e] = -t
}

function oo(n) {
    return n <= 247 ? Ah[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? Eh[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1
}
const Oh = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Kt {
    get dir() {
        return this.level % 2 ? Gs : ie
    }
    constructor(t, e, i) {
        this.from = t, this.to = e, this.level = i
    }
    side(t, e) {
        return this.dir == e == t ? this.to : this.from
    }
    forward(t, e) {
        return t == (this.dir == e)
    }
    static find(t, e, i, s) {
        let r = -1;
        for (let o = 0; o < t.length; o++) {
            let l = t[o];
            if (l.from <= e && l.to >= e) {
                if (l.level == i) return o;
                (r < 0 || (s != 0 ? s < 0 ? l.from < e : l.to > e : t[r].level > l.level)) && (r = o)
            }
        }
        if (r < 0) throw new RangeError("Index out of range");
        return r
    }
}

function lo(n, t) {
    if (n.length != t.length) return !1;
    for (let e = 0; e < n.length; e++) {
        let i = n[e],
            s = t[e];
        if (i.from != s.from || i.to != s.to || i.direction != s.direction || !lo(i.inner, s.inner)) return !1
    }
    return !0
}
const H = [];

function Rh(n, t, e, i, s) {
    for (let r = 0; r <= i.length; r++) {
        let o = r ? i[r - 1].to : t,
            l = r < i.length ? i[r].from : e,
            a = r ? 256 : s;
        for (let c = o, h = a, f = a; c < l; c++) {
            let u = oo(n.charCodeAt(c));
            u == 512 ? u = h : u == 8 && f == 4 && (u = 16), H[c] = u == 4 ? 2 : u, u & 7 && (f = u), h = u
        }
        for (let c = o, h = a, f = a; c < l; c++) {
            let u = H[c];
            if (u == 128) c < l - 1 && h == H[c + 1] && h & 24 ? u = H[c] = h : H[c] = 256;
            else if (u == 64) {
                let d = c + 1;
                for (; d < l && H[d] == 64;) d++;
                let g = c && h == 8 || d < e && H[d] == 8 ? f == 1 ? 1 : 8 : 256;
                for (let x = c; x < d; x++) H[x] = g;
                c = d - 1
            } else u == 8 && f == 1 && (H[c] = 1);
            h = u, u & 7 && (f = u)
        }
    }
}

function Th(n, t, e, i, s) {
    let r = s == 1 ? 2 : 1;
    for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
        let c = o ? i[o - 1].to : t,
            h = o < i.length ? i[o].from : e;
        for (let f = c, u, d, g; f < h; f++)
            if (d = ys[u = n.charCodeAt(f)])
                if (d < 0) {
                    for (let x = l - 3; x >= 0; x -= 3)
                        if (Ot[x + 1] == -d) {
                            let m = Ot[x + 2],
                                y = m & 2 ? s : m & 4 ? m & 1 ? r : s : 0;
                            y && (H[f] = H[Ot[x]] = y), l = x;
                            break
                        }
                } else {
                    if (Ot.length == 189) break;
                    Ot[l++] = f, Ot[l++] = u, Ot[l++] = a
                }
        else if ((g = H[f]) == 2 || g == 1) {
            let x = g == s;
            a = x ? 0 : 1;
            for (let m = l - 3; m >= 0; m -= 3) {
                let y = Ot[m + 2];
                if (y & 2) break;
                if (x) Ot[m + 2] |= 2;
                else {
                    if (y & 4) break;
                    Ot[m + 2] |= 4
                }
            }
        }
    }
}

function Nh(n, t, e, i) {
    for (let s = 0, r = i; s <= e.length; s++) {
        let o = s ? e[s - 1].to : n,
            l = s < e.length ? e[s].from : t;
        for (let a = o; a < l;) {
            let c = H[a];
            if (c == 256) {
                let h = a + 1;
                for (;;)
                    if (h == l) {
                        if (s == e.length) break;
                        h = e[s++].to, l = s < e.length ? e[s].from : t
                    } else if (H[h] == 256) h++;
                else break;
                let f = r == 1,
                    u = (h < t ? H[h] : i) == 1,
                    d = f == u ? f ? 1 : 2 : i;
                for (let g = h, x = s, m = x ? e[x - 1].to : n; g > a;) g == m && (g = e[--x].from, m = x ? e[x - 1].to : n), H[--g] = d;
                a = h
            } else r = c, a++
        }
    }
}

function ws(n, t, e, i, s, r, o) {
    let l = i % 2 ? 2 : 1;
    if (i % 2 == s % 2)
        for (let a = t, c = 0; a < e;) {
            let h = !0,
                f = !1;
            if (c == r.length || a < r[c].from) {
                let x = H[a];
                x != l && (h = !1, f = x == 16)
            }
            let u = !h && l == 1 ? [] : null,
                d = h ? i : i + 1,
                g = a;
            t: for (;;)
                if (c < r.length && g == r[c].from) {
                    if (f) break t;
                    let x = r[c];
                    if (!h)
                        for (let m = x.to, y = c + 1;;) {
                            if (m == e) break t;
                            if (y < r.length && r[y].from == m) m = r[y++].to;
                            else {
                                if (H[m] == l) break t;
                                break
                            }
                        }
                    if (c++, u) u.push(x);
                    else {
                        x.from > a && o.push(new Kt(a, x.from, d));
                        let m = x.direction == ie != !(d % 2);
                        bs(n, m ? i + 1 : i, s, x.inner, x.from, x.to, o), a = x.to
                    }
                    g = x.to
                } else {
                    if (g == e || (h ? H[g] != l : H[g] == l)) break;
                    g++
                }
            u ? ws(n, a, g, i + 1, s, u, o) : a < g && o.push(new Kt(a, g, d)), a = g
        } else
            for (let a = e, c = r.length; a > t;) {
                let h = !0,
                    f = !1;
                if (!c || a > r[c - 1].to) {
                    let x = H[a - 1];
                    x != l && (h = !1, f = x == 16)
                }
                let u = !h && l == 1 ? [] : null,
                    d = h ? i : i + 1,
                    g = a;
                t: for (;;)
                    if (c && g == r[c - 1].to) {
                        if (f) break t;
                        let x = r[--c];
                        if (!h)
                            for (let m = x.from, y = c;;) {
                                if (m == t) break t;
                                if (y && r[y - 1].to == m) m = r[--y].from;
                                else {
                                    if (H[m - 1] == l) break t;
                                    break
                                }
                            }
                        if (u) u.push(x);
                        else {
                            x.to < a && o.push(new Kt(x.to, a, d));
                            let m = x.direction == ie != !(d % 2);
                            bs(n, m ? i + 1 : i, s, x.inner, x.from, x.to, o), a = x.from
                        }
                        g = x.from
                    } else {
                        if (g == t || (h ? H[g - 1] != l : H[g - 1] == l)) break;
                        g--
                    }
                u ? ws(n, g, a, i + 1, s, u, o) : g < a && o.push(new Kt(g, a, d)), a = g
            }
}

function bs(n, t, e, i, s, r, o) {
    let l = t % 2 ? 2 : 1;
    Rh(n, s, r, i, l), Th(n, s, r, i, l), Nh(s, r, i, l), ws(n, s, r, t, e, i, o)
}

function Dh(n, t, e) {
    if (!n) return [new Kt(0, 0, t == Gs ? 1 : 0)];
    if (t == ie && !e.length && !Oh.test(n)) return ao(n.length);
    if (e.length)
        for (; n.length > H.length;) H[H.length] = 256;
    let i = [],
        s = t == ie ? 0 : 1;
    return bs(n, s, s, e, 0, n.length, i), i
}

function ao(n) {
    return [new Kt(0, n, 0)]
}
let ho = "";

function Lh(n, t, e, i, s) {
    var r;
    let o = i.head - n.from,
        l = Kt.find(t, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc),
        a = t[l],
        c = a.side(s, e);
    if (o == c) {
        let u = l += s ? 1 : -1;
        if (u < 0 || u >= t.length) return null;
        a = t[l = u], o = a.side(!s, e), c = a.side(s, e)
    }
    let h = Lt(n.text, o, a.forward(s, e));
    (h < a.from || h > a.to) && (h = c), ho = n.text.slice(Math.min(o, h), Math.max(o, h));
    let f = l == (s ? t.length - 1 : 0) ? null : t[l + (s ? 1 : -1)];
    return f && h == c && f.level + (s ? 0 : 1) < a.level ? M.cursor(f.side(!s, e) + n.from, f.forward(s, e) ? 1 : -1, f.level) : M.cursor(h + n.from, a.forward(s, e) ? -1 : 1, a.level)
}

function Ph(n, t, e) {
    for (let i = t; i < e; i++) {
        let s = oo(n.charCodeAt(i));
        if (s == 1) return ie;
        if (s == 2 || s == 4) return Gs
    }
    return ie
}
const co = E.define(),
    fo = E.define(),
    uo = E.define(),
    po = E.define(),
    vs = E.define(),
    go = E.define(),
    mo = E.define(),
    xo = E.define({
        combine: n => n.some(t => t)
    }),
    yo = E.define({
        combine: n => n.some(t => t)
    }),
    wo = E.define();
class he {
    constructor(t, e = "nearest", i = "nearest", s = 5, r = 5, o = !1) {
        this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = r, this.isSnapshot = o
    }
    map(t) {
        return t.empty ? this : new he(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
    }
    clip(t) {
        return this.range.to <= t.doc.length ? this : new he(M.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
    }
}
const ti = U.define({
        map: (n, t) => n.map(t)
    }),
    bo = U.define();

function Bt(n, t, e) {
    let i = n.facet(po);
    i.length ? i[0](t) : window.onerror ? window.onerror(String(t), e, void 0, void 0, t) : e ? console.error(e + ":", t) : console.error(t)
}
const _t = E.define({
    combine: n => n.length ? n[0] : !0
});
let Ih = 0;
const Ee = E.define();
class Pt {
    constructor(t, e, i, s, r) {
        this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = s, this.extension = r(this)
    }
    static define(t, e) {
        const {
            eventHandlers: i,
            eventObservers: s,
            provide: r,
            decorations: o
        } = e || {};
        return new Pt(Ih++, t, i, s, l => {
            let a = [Ee.of(l)];
            return o && a.push(Ke.of(c => {
                let h = c.plugin(l);
                return h ? o(h) : W.none
            })), r && a.push(r(l)), a
        })
    }
    static fromClass(t, e) {
        return Pt.define(i => new t(i), e)
    }
}
class Fi {
    constructor(t) {
        this.spec = t, this.mustUpdate = null, this.value = null
    }
    update(t) {
        if (this.value) {
            if (this.mustUpdate) {
                let e = this.mustUpdate;
                if (this.mustUpdate = null, this.value.update) try {
                    this.value.update(e)
                } catch (i) {
                    if (Bt(e.state, i, "CodeMirror plugin crashed"), this.value.destroy) try {
                        this.value.destroy()
                    } catch {}
                    this.deactivate()
                }
            }
        } else if (this.spec) try {
            this.value = this.spec.create(t)
        } catch (e) {
            Bt(t.state, e, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
    }
    destroy(t) {
        var e;
        if (!((e = this.value) === null || e === void 0) && e.destroy) try {
            this.value.destroy()
        } catch (i) {
            Bt(t.state, i, "CodeMirror plugin crashed")
        }
    }
    deactivate() {
        this.spec = this.value = null
    }
}
const vo = E.define(),
    $s = E.define(),
    Ke = E.define(),
    So = E.define(),
    Ys = E.define(),
    Co = E.define();

function An(n, t) {
    let e = n.state.facet(Co);
    if (!e.length) return e;
    let i = e.map(r => r instanceof Function ? r(n) : r),
        s = [];
    return L.spans(i, t.from, t.to, {
        point() {},
        span(r, o, l, a) {
            let c = r - t.from,
                h = o - t.from,
                f = s;
            for (let u = l.length - 1; u >= 0; u--, a--) {
                let d = l[u].spec.bidiIsolate,
                    g;
                if (d == null && (d = Ph(t.text, c, h)), a > 0 && f.length && (g = f[f.length - 1]).to == c && g.direction == d) g.to = h, f = g.inner;
                else {
                    let x = {
                        from: c,
                        to: h,
                        direction: d,
                        inner: []
                    };
                    f.push(x), f = x.inner
                }
            }
        }
    }), s
}
const ko = E.define();

function Mo(n) {
    let t = 0,
        e = 0,
        i = 0,
        s = 0;
    for (let r of n.state.facet(ko)) {
        let o = r(n);
        o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (e = Math.max(e, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)))
    }
    return {
        left: t,
        right: e,
        top: i,
        bottom: s
    }
}
const Oe = E.define();
class xt {
    constructor(t, e, i, s) {
        this.fromA = t, this.toA = e, this.fromB = i, this.toB = s
    }
    join(t) {
        return new xt(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB))
    }
    addToSet(t) {
        let e = t.length,
            i = this;
        for (; e > 0; e--) {
            let s = t[e - 1];
            if (!(s.fromA > i.toA)) {
                if (s.toA < i.fromA) break;
                i = i.join(s), t.splice(e - 1, 1)
            }
        }
        return t.splice(e, 0, i), t
    }
    static extendWithRanges(t, e) {
        if (e.length == 0) return t;
        let i = [];
        for (let s = 0, r = 0, o = 0, l = 0;; s++) {
            let a = s == t.length ? null : t[s],
                c = o - l,
                h = a ? a.fromB : 1e9;
            for (; r < e.length && e[r] < h;) {
                let f = e[r],
                    u = e[r + 1],
                    d = Math.max(l, f),
                    g = Math.min(h, u);
                if (d <= g && new xt(d + c, g + c, d, g).addToSet(i), u > h) break;
                r += 2
            }
            if (!a) return i;
            new xt(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB
        }
    }
}
class Mi {
    constructor(t, e, i) {
        this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = J.empty(this.startState.doc.length);
        for (let r of i) this.changes = this.changes.compose(r.changes);
        let s = [];
        this.changes.iterChangedRanges((r, o, l, a) => s.push(new xt(r, o, l, a))), this.changedRanges = s
    }
    static create(t, e, i) {
        return new Mi(t, e, i)
    }
    get viewportChanged() {
        return (this.flags & 4) > 0
    }
    get heightChanged() {
        return (this.flags & 2) > 0
    }
    get geometryChanged() {
        return this.docChanged || (this.flags & 10) > 0
    }
    get focusChanged() {
        return (this.flags & 1) > 0
    }
    get docChanged() {
        return !this.changes.empty
    }
    get selectionSet() {
        return this.transactions.some(t => t.selection)
    }
    get empty() {
        return this.flags == 0 && this.transactions.length == 0
    }
}
class En extends V {
    get length() {
        return this.view.state.doc.length
    }
    constructor(t) {
        super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = new Set, this.editContextFormatting = W.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new Y], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new xt(0, 0, 0, t.state.doc.length)], 0, null)
    }
    update(t) {
        var e;
        let i = t.changedRanges;
        this.minWidth > 0 && i.length && (i.every(({
            fromA: c,
            toA: h
        }) => h < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
        let s = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? s = this.domChanged.newSel.head : !_h(t.changes, this.hasComposition) && !t.selectionSet && (s = t.state.selection.main.head));
        let r = s > -1 ? jh(this.view, t.changes, s) : null;
        if (this.domChanged = null, this.hasComposition) {
            this.markedForComposition.clear();
            let {
                from: c,
                to: h
            } = this.hasComposition;
            i = new xt(c, h, t.changes.mapPos(c, -1), t.changes.mapPos(h, 1)).addToSet(i.slice())
        }
        this.hasComposition = r ? {
            from: r.range.fromB,
            to: r.range.toB
        } : null, (k.ie || k.chrome) && !r && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
        let o = this.decorations,
            l = this.updateDeco(),
            a = Fh(o, l, t.changes);
        return i = xt.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, t.startState.doc.length, r), t.transactions.length && (this.lastUpdate = Date.now()), !0)
    }
    updateInner(t, e, i) {
        this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e, i);
        let {
            observer: s
        } = this.view;
        s.ignore(() => {
            this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
            let o = k.chrome || k.ios ? {
                node: s.selectionRange.focusNode,
                written: !1
            } : void 0;
            this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = ""
        }), this.markedForComposition.forEach(o => o.flags &= -9);
        let r = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
            for (let o of this.children) o instanceof Ht && o.widget instanceof On && r.push(o.dom);
        s.updateGaps(r)
    }
    updateChildren(t, e, i) {
        let s = i ? i.range.addToSet(t.slice()) : t,
            r = this.childCursor(e);
        for (let o = s.length - 1;; o--) {
            let l = o >= 0 ? s[o] : null;
            if (!l) break;
            let {
                fromA: a,
                toA: c,
                fromB: h,
                toB: f
            } = l, u, d, g, x;
            if (i && i.range.fromB < f && i.range.toB > h) {
                let v = Ie.build(this.view.state.doc, h, i.range.fromB, this.decorations, this.dynamicDecorationMap),
                    C = Ie.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
                d = v.breakAtStart, g = v.openStart, x = C.openEnd;
                let A = this.compositionView(i);
                C.breakAtStart ? A.breakAfter = 1 : C.content.length && A.merge(A.length, A.length, C.content[0], !1, C.openStart, 0) && (A.breakAfter = C.content[0].breakAfter, C.content.shift()), v.content.length && A.merge(0, 0, v.content[v.content.length - 1], !0, 0, v.openEnd) && v.content.pop(), u = v.content.concat(A).concat(C.content)
            } else({
                content: u,
                breakAtStart: d,
                openStart: g,
                openEnd: x
            } = Ie.build(this.view.state.doc, h, f, this.decorations, this.dynamicDecorationMap));
            let {
                i: m,
                off: y
            } = r.findPos(c, 1), {
                i: w,
                off: S
            } = r.findPos(a, -1);
            Jr(this, w, S, m, y, u, d, g, x)
        }
        i && this.fixCompositionDOM(i)
    }
    updateEditContextFormatting(t) {
        this.editContextFormatting = this.editContextFormatting.map(t.changes);
        for (let e of t.transactions)
            for (let i of e.effects) i.is(bo) && (this.editContextFormatting = i.value)
    }
    compositionView(t) {
        let e = new kt(t.text.nodeValue);
        e.flags |= 8;
        for (let {
                deco: s
            } of t.marks) e = new Wt(s, [e], e.length);
        let i = new Y;
        return i.append(e, 0), i
    }
    fixCompositionDOM(t) {
        let e = (r, o) => {
                o.flags |= 8 | (o.children.some(a => a.flags & 7) ? 1 : 0), this.markedForComposition.add(o);
                let l = V.get(r);
                l && l != o && (l.dom = null), o.setDOM(r)
            },
            i = this.childPos(t.range.fromB, 1),
            s = this.children[i.i];
        e(t.line, s);
        for (let r = t.marks.length - 1; r >= -1; r--) i = s.childPos(i.off, 1), s = s.children[i.i], e(r >= 0 ? t.marks[r].node : t.text, s)
    }
    updateSelection(t = !1, e = !1) {
        (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
        let i = this.view.root.activeElement,
            s = i == this.dom,
            r = !s && fi(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
        if (!(s || e || r)) return;
        let o = this.forceSelection;
        this.forceSelection = !1;
        let l = this.view.state.selection.main,
            a = this.moveToLine(this.domAtPos(l.anchor)),
            c = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
        if (k.gecko && l.empty && !this.hasComposition && Bh(a)) {
            let f = document.createTextNode("");
            this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = c = new et(f, 0), o = !0
        }
        let h = this.view.observer.selectionRange;
        (o || !h.focusNode || (!Pe(a.node, a.offset, h.anchorNode, h.anchorOffset) || !Pe(c.node, c.offset, h.focusNode, h.focusOffset)) && !this.suppressWidgetCursorChange(h, l)) && (this.view.observer.ignore(() => {
            k.android && k.chrome && this.dom.contains(h.focusNode) && Wh(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
                preventScroll: !0
            }));
            let f = qe(this.view.root);
            if (f)
                if (l.empty) {
                    if (k.gecko) {
                        let u = Hh(a.node, a.offset);
                        if (u && u != 3) {
                            let d = (u == 1 ? $r : Yr)(a.node, a.offset);
                            d && (a = new et(d.node, d.offset))
                        }
                    }
                    f.collapse(a.node, a.offset), l.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = l.bidiLevel)
                } else if (f.extend) {
                f.collapse(a.node, a.offset);
                try {
                    f.extend(c.node, c.offset)
                } catch {}
            } else {
                let u = document.createRange();
                l.anchor > l.head && ([a, c] = [c, a]), u.setEnd(c.node, c.offset), u.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(u)
            }
            r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus())
        }), this.view.observer.setSelectionRange(a, c)), this.impreciseAnchor = a.precise ? null : new et(h.anchorNode, h.anchorOffset), this.impreciseHead = c.precise ? null : new et(h.focusNode, h.focusOffset)
    }
    suppressWidgetCursorChange(t, e) {
        return this.hasComposition && e.empty && Pe(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head
    }
    enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
            view: t
        } = this, e = t.state.selection.main, i = qe(t.root), {
            anchorNode: s,
            anchorOffset: r
        } = t.observer.selectionRange;
        if (!i || !e.empty || !e.assoc || !i.modify) return;
        let o = Y.find(this, e.head);
        if (!o) return;
        let l = o.posAtStart;
        if (e.head == l || e.head == l + o.length) return;
        let a = this.coordsAt(e.head, -1),
            c = this.coordsAt(e.head, 1);
        if (!a || !c || a.bottom > c.top) return;
        let h = this.domAtPos(e.head + e.assoc);
        i.collapse(h.node, h.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
        let f = t.observer.selectionRange;
        t.docView.posFromDOM(f.anchorNode, f.anchorOffset) != e.from && i.collapse(s, r)
    }
    moveToLine(t) {
        let e = this.dom,
            i;
        if (t.node != e) return t;
        for (let s = t.offset; !i && s < e.childNodes.length; s++) {
            let r = V.get(e.childNodes[s]);
            r instanceof Y && (i = r.domAtPos(0))
        }
        for (let s = t.offset - 1; !i && s >= 0; s--) {
            let r = V.get(e.childNodes[s]);
            r instanceof Y && (i = r.domAtPos(r.length))
        }
        return i ? new et(i.node, i.offset, !0) : t
    }
    nearest(t) {
        for (let e = t; e;) {
            let i = V.get(e);
            if (i && i.rootView == this) return i;
            e = e.parentNode
        }
        return null
    }
    posFromDOM(t, e) {
        let i = this.nearest(t);
        if (!i) throw new RangeError("Trying to find position for a DOM position outside of the document");
        return i.localPosFromDOM(t, e) + i.posAtStart
    }
    domAtPos(t) {
        let {
            i: e,
            off: i
        } = this.childCursor().findPos(t, -1);
        for (; e < this.children.length - 1;) {
            let s = this.children[e];
            if (i < s.length || s instanceof Y) break;
            e++, i = 0
        }
        return this.children[e].domAtPos(i)
    }
    coordsAt(t, e) {
        let i = null,
            s = 0;
        for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
            let l = this.children[o],
                a = r - l.breakAfter,
                c = a - l.length;
            if (a < t) break;
            if (c <= t && (c < t || l.covers(-1)) && (a > t || l.covers(1)) && (!i || l instanceof Y && !(i instanceof Y && e >= 0))) i = l, s = c;
            else if (i && c == t && a == t && l instanceof Ht && Math.abs(e) < 2) {
                if (l.deco.startSide < 0) break;
                o && (i = null)
            }
            r = c
        }
        return i ? i.coordsAt(t - s, e) : null
    }
    coordsForChar(t) {
        let {
            i: e,
            off: i
        } = this.childPos(t, 1), s = this.children[e];
        if (!(s instanceof Y)) return null;
        for (; s.children.length;) {
            let {
                i: l,
                off: a
            } = s.childPos(i, 1);
            for (;; l++) {
                if (l == s.children.length) return null;
                if ((s = s.children[l]).length) break
            }
            i = a
        }
        if (!(s instanceof kt)) return null;
        let r = Lt(s.text, i);
        if (r == i) return null;
        let o = ee(s.dom, i, r).getClientRects();
        for (let l = 0; l < o.length; l++) {
            let a = o[l];
            if (l == o.length - 1 || a.top < a.bottom && a.left < a.right) return a
        }
        return null
    }
    measureVisibleLineHeights(t) {
        let e = [],
            {
                from: i,
                to: s
            } = t,
            r = this.view.contentDOM.clientWidth,
            o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
            l = -1,
            a = this.view.textDirection == X.LTR;
        for (let c = 0, h = 0; h < this.children.length; h++) {
            let f = this.children[h],
                u = c + f.length;
            if (u > s) break;
            if (c >= i) {
                let d = f.dom.getBoundingClientRect();
                if (e.push(d.height), o) {
                    let g = f.dom.lastChild,
                        x = g ? de(g) : [];
                    if (x.length) {
                        let m = x[x.length - 1],
                            y = a ? m.right - d.left : d.right - m.left;
                        y > l && (l = y, this.minWidth = r, this.minWidthFrom = c, this.minWidthTo = u)
                    }
                }
            }
            c = u + f.breakAfter
        }
        return e
    }
    textDirectionAt(t) {
        let {
            i: e
        } = this.childPos(t, 1);
        return getComputedStyle(this.children[e].dom).direction == "rtl" ? X.RTL : X.LTR
    }
    measureTextSize() {
        for (let r of this.children)
            if (r instanceof Y) {
                let o = r.measureTextSize();
                if (o) return o
            }
        let t = document.createElement("div"),
            e, i, s;
        return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
            this.dom.appendChild(t);
            let r = de(t.firstChild)[0];
            e = t.getBoundingClientRect().height, i = r ? r.width / 27 : 7, s = r ? r.height : e, t.remove()
        }), {
            lineHeight: e,
            charWidth: i,
            textHeight: s
        }
    }
    childCursor(t = this.length) {
        let e = this.children.length;
        return e && (t -= this.children[--e].length), new Xr(this.children, t, e)
    }
    computeBlockGapDeco() {
        let t = [],
            e = this.view.viewState;
        for (let i = 0, s = 0;; s++) {
            let r = s == e.viewports.length ? null : e.viewports[s],
                o = r ? r.from - 1 : this.length;
            if (o > i) {
                let l = (e.lineBlockAt(o).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
                t.push(W.replace({
                    widget: new On(l),
                    block: !0,
                    inclusive: !0,
                    isBlockGap: !0
                }).range(i, o))
            }
            if (!r) break;
            i = r.to + 1
        }
        return W.set(t)
    }
    updateDeco() {
        let t = 1,
            e = this.view.state.facet(Ke).map(r => (this.dynamicDecorationMap[t++] = typeof r == "function") ? r(this.view) : r),
            i = !1,
            s = this.view.state.facet(So).map((r, o) => {
                let l = typeof r == "function";
                return l && (i = !0), l ? r(this.view) : r
            });
        for (s.length && (this.dynamicDecorationMap[t++] = i, e.push(L.join(s))), this.decorations = [this.editContextFormatting, ...e, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t < this.decorations.length;) this.dynamicDecorationMap[t++] = !1;
        return this.decorations
    }
    scrollIntoView(t) {
        if (t.isSnapshot) {
            let c = this.view.viewState.lineBlockAt(t.range.head);
            this.view.scrollDOM.scrollTop = c.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
            return
        }
        for (let c of this.view.state.facet(wo)) try {
            if (c(this.view, t.range, t)) return !0
        } catch (h) {
            Bt(this.view.state, h, "scroll handler")
        }
        let {
            range: e
        } = t, i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), s;
        if (!i) return;
        !e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = {
            left: Math.min(i.left, s.left),
            top: Math.min(i.top, s.top),
            right: Math.max(i.right, s.right),
            bottom: Math.max(i.bottom, s.bottom)
        });
        let r = Mo(this.view),
            o = {
                left: i.left - r.left,
                top: i.top - r.top,
                right: i.right + r.right,
                bottom: i.bottom + r.bottom
            },
            {
                offsetWidth: l,
                offsetHeight: a
            } = this.view.scrollDOM;
        mh(this.view.scrollDOM, o, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, l), -l), Math.max(Math.min(t.yMargin, a), -a), this.view.textDirection == X.LTR)
    }
}

function Bh(n) {
    return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false")
}
class On extends ye {
    constructor(t) {
        super(), this.height = t
    }
    toDOM() {
        let t = document.createElement("div");
        return t.className = "cm-gap", this.updateDOM(t), t
    }
    eq(t) {
        return t.height == this.height
    }
    updateDOM(t) {
        return t.style.height = this.height + "px", !0
    }
    get editable() {
        return !0
    }
    get estimatedHeight() {
        return this.height
    }
    ignoreEvent() {
        return !1
    }
}

function Ao(n, t) {
    let e = n.observer.selectionRange;
    if (!e.focusNode) return null;
    let i = $r(e.focusNode, e.focusOffset),
        s = Yr(e.focusNode, e.focusOffset),
        r = i || s;
    if (s && i && s.node != i.node) {
        let l = V.get(s.node);
        if (!l || l instanceof kt && l.text != s.node.nodeValue) r = s;
        else if (n.docView.lastCompositionAfterCursor) {
            let a = V.get(i.node);
            !a || a instanceof kt && a.text != i.node.nodeValue || (r = s)
        }
    }
    if (n.docView.lastCompositionAfterCursor = r != i, !r) return null;
    let o = t - r.offset;
    return {
        from: o,
        to: o + r.node.nodeValue.length,
        node: r.node
    }
}

function jh(n, t, e) {
    let i = Ao(n, e);
    if (!i) return null;
    let {
        node: s,
        from: r,
        to: o
    } = i, l = s.nodeValue;
    if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l) return null;
    let a = t.invertedDesc,
        c = new xt(a.mapPos(r), a.mapPos(o), r, o),
        h = [];
    for (let f = s.parentNode;; f = f.parentNode) {
        let u = V.get(f);
        if (u instanceof Wt) h.push({
            node: f,
            deco: u.mark
        });
        else {
            if (u instanceof Y || f.nodeName == "DIV" && f.parentNode == n.contentDOM) return {
                range: c,
                text: s,
                marks: h,
                line: f
            };
            if (f != n.contentDOM) h.push({
                node: f,
                deco: new $e({
                    inclusive: !0,
                    attributes: kh(f),
                    tagName: f.tagName.toLowerCase()
                })
            });
            else return null
        }
    }
}

function Hh(n, t) {
    return n.nodeType != 1 ? 0 : (t && n.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < n.childNodes.length && n.childNodes[t].contentEditable == "false" ? 2 : 0)
}
let Vh = class {
    constructor() {
        this.changes = []
    }
    compareRange(t, e) {
        xs(t, e, this.changes)
    }
    comparePoint(t, e) {
        xs(t, e, this.changes)
    }
};

function Fh(n, t, e) {
    let i = new Vh;
    return L.compare(n, t, e, i), i.changes
}

function Wh(n, t) {
    for (let e = n; e && e != t; e = e.assignedSlot || e.parentNode)
        if (e.nodeType == 1 && e.contentEditable == "false") return !0;
    return !1
}

function _h(n, t) {
    let e = !1;
    return t && n.iterChangedRanges((i, s) => {
        i < t.to && s > t.from && (e = !0)
    }), e
}

function zh(n, t, e = 1) {
    let i = n.charCategorizer(t),
        s = n.doc.lineAt(t),
        r = t - s.from;
    if (s.length == 0) return M.cursor(t);
    r == 0 ? e = 1 : r == s.length && (e = -1);
    let o = r,
        l = r;
    e < 0 ? o = Lt(s.text, r, !1) : l = Lt(s.text, r);
    let a = i(s.text.slice(o, l));
    for (; o > 0;) {
        let c = Lt(s.text, o, !1);
        if (i(s.text.slice(c, o)) != a) break;
        o = c
    }
    for (; l < s.length;) {
        let c = Lt(s.text, l);
        if (i(s.text.slice(l, c)) != a) break;
        l = c
    }
    return M.range(o + s.from, l + s.from)
}

function qh(n, t) {
    return t.left > n ? t.left - n : Math.max(0, n - t.right)
}

function Kh(n, t) {
    return t.top > n ? t.top - n : Math.max(0, n - t.bottom)
}

function Wi(n, t) {
    return n.top < t.bottom - 1 && n.bottom > t.top + 1
}

function Rn(n, t) {
    return t < n.top ? {
        top: t,
        left: n.left,
        right: n.right,
        bottom: n.bottom
    } : n
}

function Tn(n, t) {
    return t > n.bottom ? {
        top: n.top,
        left: n.left,
        right: n.right,
        bottom: t
    } : n
}

function Ss(n, t, e) {
    let i, s, r, o, l = !1,
        a, c, h, f;
    for (let g = n.firstChild; g; g = g.nextSibling) {
        let x = de(g);
        for (let m = 0; m < x.length; m++) {
            let y = x[m];
            s && Wi(s, y) && (y = Rn(Tn(y, s.bottom), s.top));
            let w = qh(t, y),
                S = Kh(e, y);
            if (w == 0 && S == 0) return g.nodeType == 3 ? Nn(g, t, e) : Ss(g, t, e);
            if (!i || o > S || o == S && r > w) {
                i = g, s = y, r = w, o = S;
                let v = S ? e < y.top ? -1 : 1 : w ? t < y.left ? -1 : 1 : 0;
                l = !v || (v > 0 ? m < x.length - 1 : m > 0)
            }
            w == 0 ? e > y.bottom && (!h || h.bottom < y.bottom) ? (a = g, h = y) : e < y.top && (!f || f.top > y.top) && (c = g, f = y) : h && Wi(h, y) ? h = Tn(h, y.bottom) : f && Wi(f, y) && (f = Rn(f, y.top))
        }
    }
    if (h && h.bottom >= e ? (i = a, s = h) : f && f.top <= e && (i = c, s = f), !i) return {
        node: n,
        offset: 0
    };
    let u = Math.max(s.left, Math.min(s.right, t));
    if (i.nodeType == 3) return Nn(i, u, e);
    if (l && i.contentEditable != "false") return Ss(i, u, e);
    let d = Array.prototype.indexOf.call(n.childNodes, i) + (t >= (s.left + s.right) / 2 ? 1 : 0);
    return {
        node: n,
        offset: d
    }
}

function Nn(n, t, e) {
    let i = n.nodeValue.length,
        s = -1,
        r = 1e9,
        o = 0;
    for (let l = 0; l < i; l++) {
        let a = ee(n, l, l + 1).getClientRects();
        for (let c = 0; c < a.length; c++) {
            let h = a[c];
            if (h.top == h.bottom) continue;
            o || (o = t - h.left);
            let f = (h.top > e ? h.top - e : e - h.bottom) - 1;
            if (h.left - 1 <= t && h.right + 1 >= t && f < r) {
                let u = t >= (h.left + h.right) / 2,
                    d = u;
                if ((k.chrome || k.gecko) && ee(n, l).getBoundingClientRect().left == h.right && (d = !u), f <= 0) return {
                    node: n,
                    offset: l + (d ? 1 : 0)
                };
                s = l + (d ? 1 : 0), r = f
            }
        }
    }
    return {
        node: n,
        offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0
    }
}

function Eo(n, t, e, i = -1) {
    var s, r;
    let o = n.contentDOM.getBoundingClientRect(),
        l = o.top + n.viewState.paddingTop,
        a, {
            docHeight: c
        } = n.viewState,
        {
            x: h,
            y: f
        } = t,
        u = f - l;
    if (u < 0) return 0;
    if (u > c) return n.state.doc.length;
    for (let v = n.viewState.heightOracle.textHeight / 2, C = !1; a = n.elementAtHeight(u), a.type != ot.Text;)
        for (; u = i > 0 ? a.bottom + v : a.top - v, !(u >= 0 && u <= c);) {
            if (C) return e ? null : 0;
            C = !0, i = -i
        }
    f = l + u;
    let d = a.from;
    if (d < n.viewport.from) return n.viewport.from == 0 ? 0 : e ? null : Dn(n, o, a, h, f);
    if (d > n.viewport.to) return n.viewport.to == n.state.doc.length ? n.state.doc.length : e ? null : Dn(n, o, a, h, f);
    let g = n.dom.ownerDocument,
        x = n.root.elementFromPoint ? n.root : g,
        m = x.elementFromPoint(h, f);
    m && !n.contentDOM.contains(m) && (m = null), m || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), m = x.elementFromPoint(h, f), m && !n.contentDOM.contains(m) && (m = null));
    let y, w = -1;
    if (m && ((s = n.docView.nearest(m)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
        if (g.caretPositionFromPoint) {
            let v = g.caretPositionFromPoint(h, f);
            v && ({
                offsetNode: y,
                offset: w
            } = v)
        } else if (g.caretRangeFromPoint) {
            let v = g.caretRangeFromPoint(h, f);
            v && ({
                startContainer: y,
                startOffset: w
            } = v, (!n.contentDOM.contains(y) || k.safari && Uh(y, w, h) || k.chrome && Gh(y, w, h)) && (y = void 0))
        }
    }
    if (!y || !n.docView.dom.contains(y)) {
        let v = Y.find(n.docView, d);
        if (!v) return u > a.top + a.height / 2 ? a.to : a.from;
        ({
            node: y,
            offset: w
        } = Ss(v.dom, h, f))
    }
    let S = n.docView.nearest(y);
    if (!S) return null;
    if (S.isWidget && ((r = S.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
        let v = S.dom.getBoundingClientRect();
        return t.y < v.top || t.y <= v.bottom && t.x <= (v.left + v.right) / 2 ? S.posAtStart : S.posAtEnd
    } else return S.localPosFromDOM(y, w) + S.posAtStart
}

function Dn(n, t, e, i, s) {
    let r = Math.round((i - t.left) * n.defaultCharacterWidth);
    if (n.lineWrapping && e.height > n.defaultLineHeight * 1.5) {
        let l = n.viewState.heightOracle.textHeight,
            a = Math.floor((s - e.top - (n.defaultLineHeight - l) * .5) / l);
        r += a * n.viewState.heightOracle.lineLength
    }
    let o = n.state.sliceDoc(e.from, e.to);
    return e.from + uh(o, r, n.state.tabSize)
}

function Uh(n, t, e) {
    let i;
    if (n.nodeType != 3 || t != (i = n.nodeValue.length)) return !1;
    for (let s = n.nextSibling; s; s = s.nextSibling)
        if (s.nodeType != 1 || s.nodeName != "BR") return !1;
    return ee(n, i - 1, i).getBoundingClientRect().left > e
}

function Gh(n, t, e) {
    if (t != 0) return !1;
    for (let s = n;;) {
        let r = s.parentNode;
        if (!r || r.nodeType != 1 || r.firstChild != s) return !1;
        if (r.classList.contains("cm-line")) break;
        s = r
    }
    let i = n.nodeType == 1 ? n.getBoundingClientRect() : ee(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
    return e - i.left > 5
}

function Cs(n, t) {
    let e = n.lineBlockAt(t);
    if (Array.isArray(e.type)) {
        for (let i of e.type)
            if (i.to > t || i.to == t && (i.to == e.to || i.type == ot.Text)) return i
    }
    return e
}

function $h(n, t, e, i) {
    let s = Cs(n, t.head),
        r = !i || s.type != ot.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
    if (r) {
        let o = n.dom.getBoundingClientRect(),
            l = n.textDirectionAt(s.from),
            a = n.posAtCoords({
                x: e == (l == X.LTR) ? o.right - 1 : o.left + 1,
                y: (r.top + r.bottom) / 2
            });
        if (a != null) return M.cursor(a, e ? -1 : 1)
    }
    return M.cursor(e ? s.to : s.from, e ? -1 : 1)
}

function Ln(n, t, e, i) {
    let s = n.state.doc.lineAt(t.head),
        r = n.bidiSpans(s),
        o = n.textDirectionAt(s.from);
    for (let l = t, a = null;;) {
        let c = Lh(s, r, o, l, e),
            h = ho;
        if (!c) {
            if (s.number == (e ? n.state.doc.lines : 1)) return l;
            h = `
`, s = n.state.doc.line(s.number + (e ? 1 : -1)), r = n.bidiSpans(s), c = n.visualLineSide(s, !e)
        }
        if (a) {
            if (!a(h)) return l
        } else {
            if (!i) return c;
            a = i(h)
        }
        l = c
    }
}

function Yh(n, t, e) {
    let i = n.state.charCategorizer(t),
        s = i(e);
    return r => {
        let o = i(r);
        return s == It.Space && (s = o), s == o
    }
}

function Xh(n, t, e, i) {
    let s = t.head,
        r = e ? 1 : -1;
    if (s == (e ? n.state.doc.length : 0)) return M.cursor(s, t.assoc);
    let o = t.goalColumn,
        l, a = n.contentDOM.getBoundingClientRect(),
        c = n.coordsAtPos(s, t.assoc || -1),
        h = n.documentTop;
    if (c) o == null && (o = c.left - a.left), l = r < 0 ? c.top : c.bottom;
    else {
        let d = n.viewState.lineBlockAt(s);
        o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + h
    }
    let f = a.left + o,
        u = i ? ? n.viewState.heightOracle.textHeight >> 1;
    for (let d = 0;; d += 10) {
        let g = l + (u + d) * r,
            x = Eo(n, {
                x: f,
                y: g
            }, !1, r);
        if (g < a.top || g > a.bottom || (r < 0 ? x < s : x > s)) {
            let m = n.docView.coordsForChar(x),
                y = !m || g < m.top ? -1 : 1;
            return M.cursor(x, y, void 0, o)
        }
    }
}

function ui(n, t, e) {
    for (;;) {
        let i = 0;
        for (let s of n) s.between(t - 1, t + 1, (r, o, l) => {
            if (t > r && t < o) {
                let a = i || e || (t - r < o - t ? -1 : 1);
                t = a < 0 ? r : o, i = a
            }
        });
        if (!i) return t
    }
}

function _i(n, t, e) {
    let i = ui(n.state.facet(Ys).map(s => s(n)), e.from, t.head > e.from ? -1 : 1);
    return i == e.from ? e : M.cursor(i, i < e.from ? 1 : -1)
}
class Jh {
    setSelectionOrigin(t) {
        this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now()
    }
    constructor(t) {
        this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, k.safari && t.contentDOM.addEventListener("input", () => null), k.gecko && dc(t.contentDOM.ownerDocument)
    }
    handleEvent(t) {
        !rc(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || this.runHandlers(t.type, t)
    }
    runHandlers(t, e) {
        let i = this.handlers[t];
        if (i) {
            for (let s of i.observers) s(this.view, e);
            for (let s of i.handlers) {
                if (e.defaultPrevented) break;
                if (s(this.view, e)) {
                    e.preventDefault();
                    break
                }
            }
        }
    }
    ensureHandlers(t) {
        let e = Zh(t),
            i = this.handlers,
            s = this.view.contentDOM;
        for (let r in e)
            if (r != "scroll") {
                let o = !e[r].handlers.length,
                    l = i[r];
                l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, {
                    passive: o
                })
            }
        for (let r in i) r != "scroll" && !e[r] && s.removeEventListener(r, this.handleEvent);
        this.handlers = e
    }
    keydown(t) {
        if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && t.keyCode != 27 && Ro.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), k.android && k.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8)) return this.view.observer.delayAndroidKey(t.key, t.keyCode), !0;
        let e;
        return k.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = Oo.find(i => i.keyCode == t.keyCode)) && !t.ctrlKey || Qh.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), !0) : (t.keyCode != 229 && this.view.observer.forceFlush(), !1)
    }
    flushIOSKey(t) {
        let e = this.pendingIOSKey;
        return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, ae(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0))
    }
    ignoreDuringComposition(t) {
        return /^key/.test(t.type) ? this.composing > 0 ? !0 : k.safari && !k.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1
    }
    startMouseSelection(t) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t
    }
    update(t) {
        this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
    }
    destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
    }
}

function Pn(n, t) {
    return (e, i) => {
        try {
            return t.call(n, i, e)
        } catch (s) {
            Bt(e.state, s)
        }
    }
}

function Zh(n) {
    let t = Object.create(null);

    function e(i) {
        return t[i] || (t[i] = {
            observers: [],
            handlers: []
        })
    }
    for (let i of n) {
        let s = i.spec;
        if (s && s.domEventHandlers)
            for (let r in s.domEventHandlers) {
                let o = s.domEventHandlers[r];
                o && e(r).handlers.push(Pn(i.value, o))
            }
        if (s && s.domEventObservers)
            for (let r in s.domEventObservers) {
                let o = s.domEventObservers[r];
                o && e(r).observers.push(Pn(i.value, o))
            }
    }
    for (let i in Mt) e(i).handlers.push(Mt[i]);
    for (let i in yt) e(i).observers.push(yt[i]);
    return t
}
const Oo = [{
        key: "Backspace",
        keyCode: 8,
        inputType: "deleteContentBackward"
    }, {
        key: "Enter",
        keyCode: 13,
        inputType: "insertParagraph"
    }, {
        key: "Enter",
        keyCode: 13,
        inputType: "insertLineBreak"
    }, {
        key: "Delete",
        keyCode: 46,
        inputType: "deleteContentForward"
    }],
    Qh = "dthko",
    Ro = [16, 17, 18, 20, 91, 92, 224, 225],
    ei = 6;

function ii(n) {
    return Math.max(0, n) * .7 + 8
}

function tc(n, t) {
    return Math.max(Math.abs(n.clientX - t.clientX), Math.abs(n.clientY - t.clientY))
}
class ec {
    constructor(t, e, i, s) {
        this.view = t, this.startEvent = e, this.style = i, this.mustSelect = s, this.scrollSpeed = {
            x: 0,
            y: 0
        }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = xh(t.contentDOM), this.atoms = t.state.facet(Ys).map(o => o(t));
        let r = t.contentDOM.ownerDocument;
        r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(z.allowMultipleSelections) && ic(t, e), this.dragging = nc(t, e) && Lo(e) == 1 ? null : !1
    }
    start(t) {
        this.dragging === !1 && this.select(t)
    }
    move(t) {
        if (t.buttons == 0) return this.destroy();
        if (this.dragging || this.dragging == null && tc(this.startEvent, t) < 10) return;
        this.select(this.lastEvent = t);
        let e = 0,
            i = 0,
            s = 0,
            r = 0,
            o = this.view.win.innerWidth,
            l = this.view.win.innerHeight;
        this.scrollParents.x && ({
            left: s,
            right: o
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
            top: r,
            bottom: l
        } = this.scrollParents.y.getBoundingClientRect());
        let a = Mo(this.view);
        t.clientX - a.left <= s + ei ? e = -ii(s - t.clientX) : t.clientX + a.right >= o - ei && (e = ii(t.clientX - o)), t.clientY - a.top <= r + ei ? i = -ii(r - t.clientY) : t.clientY + a.bottom >= l - ei && (i = ii(t.clientY - l)), this.setScrollSpeed(e, i)
    }
    up(t) {
        this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy()
    }
    destroy() {
        this.setScrollSpeed(0, 0);
        let t = this.view.contentDOM.ownerDocument;
        t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
    }
    setScrollSpeed(t, e) {
        this.scrollSpeed = {
            x: t,
            y: e
        }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
    }
    scroll() {
        let {
            x: t,
            y: e
        } = this.scrollSpeed;
        t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === !1 && this.select(this.lastEvent)
    }
    skipAtoms(t) {
        let e = null;
        for (let i = 0; i < t.ranges.length; i++) {
            let s = t.ranges[i],
                r = null;
            if (s.empty) {
                let o = ui(this.atoms, s.from, 0);
                o != s.from && (r = M.cursor(o, -1))
            } else {
                let o = ui(this.atoms, s.from, -1),
                    l = ui(this.atoms, s.to, 1);
                (o != s.from || l != s.to) && (r = M.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l))
            }
            r && (e || (e = t.ranges.slice()), e[i] = r)
        }
        return e ? M.create(e, t.mainIndex) : t
    }
    select(t) {
        let {
            view: e
        } = this, i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
        (this.mustSelect || !i.eq(e.state.selection, this.dragging === !1)) && this.view.dispatch({
            selection: i,
            userEvent: "select.pointer"
        }), this.mustSelect = !1
    }
    update(t) {
        t.transactions.some(e => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20)
    }
}

function ic(n, t) {
    let e = n.state.facet(co);
    return e.length ? e[0](t) : k.mac ? t.metaKey : t.ctrlKey
}

function sc(n, t) {
    let e = n.state.facet(fo);
    return e.length ? e[0](t) : k.mac ? !t.altKey : !t.ctrlKey
}

function nc(n, t) {
    let {
        main: e
    } = n.state.selection;
    if (e.empty) return !1;
    let i = qe(n.root);
    if (!i || i.rangeCount == 0) return !0;
    let s = i.getRangeAt(0).getClientRects();
    for (let r = 0; r < s.length; r++) {
        let o = s[r];
        if (o.left <= t.clientX && o.right >= t.clientX && o.top <= t.clientY && o.bottom >= t.clientY) return !0
    }
    return !1
}

function rc(n, t) {
    if (!t.bubbles) return !0;
    if (t.defaultPrevented) return !1;
    for (let e = t.target, i; e != n.contentDOM; e = e.parentNode)
        if (!e || e.nodeType == 11 || (i = V.get(e)) && i.ignoreEvent(t)) return !1;
    return !0
}
const Mt = Object.create(null),
    yt = Object.create(null),
    To = k.ie && k.ie_version < 15 || k.ios && k.webkit_version < 604;

function oc(n) {
    let t = n.dom.parentNode;
    if (!t) return;
    let e = t.appendChild(document.createElement("textarea"));
    e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
        n.focus(), e.remove(), No(n, e.value)
    }, 50)
}

function No(n, t) {
    let {
        state: e
    } = n, i, s = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
    if (ks != null && e.selection.ranges.every(a => a.empty) && ks == r.toString()) {
        let a = -1;
        i = e.changeByRange(c => {
            let h = e.doc.lineAt(c.from);
            if (h.from == a) return {
                range: c
            };
            a = h.from;
            let f = e.toText((o ? r.line(s++).text : t) + e.lineBreak);
            return {
                changes: {
                    from: h.from,
                    insert: f
                },
                range: M.cursor(c.from + f.length)
            }
        })
    } else o ? i = e.changeByRange(a => {
        let c = r.line(s++);
        return {
            changes: {
                from: a.from,
                to: a.to,
                insert: c.text
            },
            range: M.cursor(a.from + c.length)
        }
    }) : i = e.replaceSelection(r);
    n.dispatch(i, {
        userEvent: "input.paste",
        scrollIntoView: !0
    })
}
yt.scroll = n => {
    n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft
};
Mt.keydown = (n, t) => (n.inputState.setSelectionOrigin("select"), t.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), !1);
yt.touchstart = (n, t) => {
    n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer")
};
yt.touchmove = n => {
    n.inputState.setSelectionOrigin("select.pointer")
};
Mt.mousedown = (n, t) => {
    if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3) return !1;
    let e = null;
    for (let i of n.state.facet(uo))
        if (e = i(n, t), e) break;
    if (!e && t.button == 0 && (e = hc(n, t)), e) {
        let i = !n.hasFocus;
        n.inputState.startMouseSelection(new ec(n, t, e, i)), i && n.observer.ignore(() => {
            Kr(n.contentDOM);
            let r = n.root.activeElement;
            r && !r.contains(n.contentDOM) && r.blur()
        });
        let s = n.inputState.mouseSelection;
        if (s) return s.start(t), s.dragging === !1
    }
    return !1
};

function In(n, t, e, i) {
    if (i == 1) return M.cursor(t, e);
    if (i == 2) return zh(n.state, t, e); {
        let s = Y.find(n.docView, t),
            r = n.state.doc.lineAt(s ? s.posAtEnd : t),
            o = s ? s.posAtStart : r.from,
            l = s ? s.posAtEnd : r.to;
        return l < n.state.doc.length && l == r.to && l++, M.range(o, l)
    }
}
let Do = (n, t) => n >= t.top && n <= t.bottom,
    Bn = (n, t, e) => Do(t, e) && n >= e.left && n <= e.right;

function lc(n, t, e, i) {
    let s = Y.find(n.docView, t);
    if (!s) return 1;
    let r = t - s.posAtStart;
    if (r == 0) return 1;
    if (r == s.length) return -1;
    let o = s.coordsAt(r, -1);
    if (o && Bn(e, i, o)) return -1;
    let l = s.coordsAt(r, 1);
    return l && Bn(e, i, l) ? 1 : o && Do(i, o) ? -1 : 1
}

function jn(n, t) {
    let e = n.posAtCoords({
        x: t.clientX,
        y: t.clientY
    }, !1);
    return {
        pos: e,
        bias: lc(n, e, t.clientX, t.clientY)
    }
}
const ac = k.ie && k.ie_version <= 11;
let Hn = null,
    Vn = 0,
    Fn = 0;

function Lo(n) {
    if (!ac) return n.detail;
    let t = Hn,
        e = Fn;
    return Hn = n, Fn = Date.now(), Vn = !t || e > Date.now() - 400 && Math.abs(t.clientX - n.clientX) < 2 && Math.abs(t.clientY - n.clientY) < 2 ? (Vn + 1) % 3 : 1
}

function hc(n, t) {
    let e = jn(n, t),
        i = Lo(t),
        s = n.state.selection;
    return {
        update(r) {
            r.docChanged && (e.pos = r.changes.mapPos(e.pos), s = s.map(r.changes))
        },
        get(r, o, l) {
            let a = jn(n, r),
                c, h = In(n, a.pos, a.bias, i);
            if (e.pos != a.pos && !o) {
                let f = In(n, e.pos, e.bias, i),
                    u = Math.min(f.from, h.from),
                    d = Math.max(f.to, h.to);
                h = u < h.from ? M.range(u, d) : M.range(d, u)
            }
            return o ? s.replaceRange(s.main.extend(h.from, h.to)) : l && i == 1 && s.ranges.length > 1 && (c = cc(s, a.pos)) ? c : l ? s.addRange(h) : M.create([h])
        }
    }
}

function cc(n, t) {
    for (let e = 0; e < n.ranges.length; e++) {
        let {
            from: i,
            to: s
        } = n.ranges[e];
        if (i <= t && s >= t) return M.create(n.ranges.slice(0, e).concat(n.ranges.slice(e + 1)), n.mainIndex == e ? 0 : n.mainIndex - (n.mainIndex > e ? 1 : 0))
    }
    return null
}
Mt.dragstart = (n, t) => {
    let {
        selection: {
            main: e
        }
    } = n.state;
    if (t.target.draggable) {
        let s = n.docView.nearest(t.target);
        if (s && s.isWidget) {
            let r = s.posAtStart,
                o = r + s.length;
            (r >= e.to || o <= e.from) && (e = M.range(r, o))
        }
    }
    let {
        inputState: i
    } = n;
    return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", n.state.sliceDoc(e.from, e.to)), t.dataTransfer.effectAllowed = "copyMove"), !1
};
Mt.dragend = n => (n.inputState.draggedContent = null, !1);

function Wn(n, t, e, i) {
    if (!e) return;
    let s = n.posAtCoords({
            x: t.clientX,
            y: t.clientY
        }, !1),
        {
            draggedContent: r
        } = n.inputState,
        o = i && r && sc(n, t) ? {
            from: r.from,
            to: r.to
        } : null,
        l = {
            from: s,
            insert: e
        },
        a = n.state.changes(o ? [o, l] : l);
    n.focus(), n.dispatch({
        changes: a,
        selection: {
            anchor: a.mapPos(s, -1),
            head: a.mapPos(s, 1)
        },
        userEvent: o ? "move.drop" : "input.drop"
    }), n.inputState.draggedContent = null
}
Mt.drop = (n, t) => {
    if (!t.dataTransfer) return !1;
    if (n.state.readOnly) return !0;
    let e = t.dataTransfer.files;
    if (e && e.length) {
        let i = Array(e.length),
            s = 0,
            r = () => {
                ++s == e.length && Wn(n, t, i.filter(o => o != null).join(n.state.lineBreak), !1)
            };
        for (let o = 0; o < e.length; o++) {
            let l = new FileReader;
            l.onerror = r, l.onload = () => {
                /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r()
            }, l.readAsText(e[o])
        }
        return !0
    } else {
        let i = t.dataTransfer.getData("Text");
        if (i) return Wn(n, t, i, !0), !0
    }
    return !1
};
Mt.paste = (n, t) => {
    if (n.state.readOnly) return !0;
    n.observer.flush();
    let e = To ? null : t.clipboardData;
    return e ? (No(n, e.getData("text/plain") || e.getData("text/uri-list")), !0) : (oc(n), !1)
};

function fc(n, t) {
    let e = n.dom.parentNode;
    if (!e) return;
    let i = e.appendChild(document.createElement("textarea"));
    i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
        i.remove(), n.focus()
    }, 50)
}

function uc(n) {
    let t = [],
        e = [],
        i = !1;
    for (let s of n.selection.ranges) s.empty || (t.push(n.sliceDoc(s.from, s.to)), e.push(s));
    if (!t.length) {
        let s = -1;
        for (let {
                from: r
            } of n.selection.ranges) {
            let o = n.doc.lineAt(r);
            o.number > s && (t.push(o.text), e.push({
                from: o.from,
                to: Math.min(n.doc.length, o.to + 1)
            })), s = o.number
        }
        i = !0
    }
    return {
        text: t.join(n.lineBreak),
        ranges: e,
        linewise: i
    }
}
let ks = null;
Mt.copy = Mt.cut = (n, t) => {
    let {
        text: e,
        ranges: i,
        linewise: s
    } = uc(n.state);
    if (!e && !s) return !1;
    ks = s ? e : null, t.type == "cut" && !n.state.readOnly && n.dispatch({
        changes: i,
        scrollIntoView: !0,
        userEvent: "delete.cut"
    });
    let r = To ? null : t.clipboardData;
    return r ? (r.clearData(), r.setData("text/plain", e), !0) : (fc(n, e), !1)
};
const Po = xe.define();

function Io(n, t) {
    let e = [];
    for (let i of n.facet(mo)) {
        let s = i(n, t);
        s && e.push(s)
    }
    return e ? n.update({
        effects: e,
        annotations: Po.of(!0)
    }) : null
}

function Bo(n) {
    setTimeout(() => {
        let t = n.hasFocus;
        if (t != n.inputState.notifiedFocused) {
            let e = Io(n.state, t);
            e ? n.dispatch(e) : n.update([])
        }
    }, 10)
}
yt.focus = n => {
    n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Bo(n)
};
yt.blur = n => {
    n.observer.clearSelectionRange(), Bo(n)
};
yt.compositionstart = yt.compositionupdate = n => {
    n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0))
};
yt.compositionend = n => {
    n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = !0, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, k.chrome && k.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
        n.inputState.composing < 0 && n.docView.hasComposition && n.update([])
    }, 50))
};
yt.contextmenu = n => {
    n.inputState.lastContextMenu = Date.now()
};
Mt.beforeinput = (n, t) => {
    var e;
    let i;
    if (k.chrome && k.android && (i = Oo.find(s => s.inputType == t.inputType)) && (n.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
        let s = ((e = window.visualViewport) === null || e === void 0 ? void 0 : e.height) || 0;
        setTimeout(() => {
            var r;
            (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > s + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus())
        }, 100)
    }
    return k.ios && t.inputType == "deleteContentForward" && n.observer.flushSoon(), k.safari && t.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => yt.compositionend(n, t), 20), !1
};
const _n = new Set;

function dc(n) {
    _n.has(n) || (_n.add(n), n.addEventListener("copy", () => {}), n.addEventListener("cut", () => {}))
}
const zn = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class pc {
    constructor(t) {
        this.lineWrapping = t, this.doc = I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1
    }
    heightForGap(t, e) {
        let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
        return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * .5) / this.lineLength))), this.lineHeight * i
    }
    heightForLine(t) {
        return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight
    }
    setDoc(t) {
        return this.doc = t, this
    }
    mustRefreshForWrapping(t) {
        return zn.indexOf(t) > -1 != this.lineWrapping
    }
    mustRefreshForHeights(t) {
        let e = !1;
        for (let i = 0; i < t.length; i++) {
            let s = t[i];
            s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (e = !0, this.heightSamples[Math.floor(s * 10)] = !0)
        }
        return e
    }
    refresh(t, e, i, s, r, o) {
        let l = zn.indexOf(t) > -1,
            a = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != l;
        if (this.lineWrapping = l, this.lineHeight = e, this.charWidth = i, this.textHeight = s, this.lineLength = r, a) {
            this.heightSamples = {};
            for (let c = 0; c < o.length; c++) {
                let h = o[c];
                h < 0 ? c++ : this.heightSamples[Math.floor(h * 10)] = !0
            }
        }
        return a
    }
}
class gc {
    constructor(t, e) {
        this.from = t, this.heights = e, this.index = 0
    }
    get more() {
        return this.index < this.heights.length
    }
}
class Dt {
    constructor(t, e, i, s, r) {
        this.from = t, this.length = e, this.top = i, this.height = s, this._content = r
    }
    get type() {
        return typeof this._content == "number" ? ot.Text : Array.isArray(this._content) ? this._content : this._content.type
    }
    get to() {
        return this.from + this.length
    }
    get bottom() {
        return this.top + this.height
    }
    get widget() {
        return this._content instanceof Ut ? this._content.widget : null
    }
    get widgetLineBreaks() {
        return typeof this._content == "number" ? this._content : 0
    }
    join(t) {
        let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
        return new Dt(this.from, this.length + t.length, this.top, this.height + t.height, e)
    }
}
var _ = function(n) {
    return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n
}(_ || (_ = {}));
const di = .001;
class lt {
    constructor(t, e, i = 2) {
        this.length = t, this.height = e, this.flags = i
    }
    get outdated() {
        return (this.flags & 2) > 0
    }
    set outdated(t) {
        this.flags = (t ? 2 : 0) | this.flags & -3
    }
    setHeight(t, e) {
        this.height != e && (Math.abs(this.height - e) > di && (t.heightChanged = !0), this.height = e)
    }
    replace(t, e, i) {
        return lt.of(i)
    }
    decomposeLeft(t, e) {
        e.push(this)
    }
    decomposeRight(t, e) {
        e.push(this)
    }
    applyChanges(t, e, i, s) {
        let r = this,
            o = i.doc;
        for (let l = s.length - 1; l >= 0; l--) {
            let {
                fromA: a,
                toA: c,
                fromB: h,
                toB: f
            } = s[l], u = r.lineAt(a, _.ByPosNoHeight, i.setDoc(e), 0, 0), d = u.to >= c ? u : r.lineAt(c, _.ByPosNoHeight, i, 0, 0);
            for (f += d.to - c, c = d.to; l > 0 && u.from <= s[l - 1].toA;) a = s[l - 1].fromA, h = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, _.ByPosNoHeight, i, 0, 0));
            h += u.from - a, a = u.from;
            let g = Xs.build(i.setDoc(o), t, h, f);
            r = r.replace(a, c, g)
        }
        return r.updateHeight(i, 0)
    }
    static empty() {
        return new dt(0, 0)
    }
    static of (t) {
        if (t.length == 1) return t[0];
        let e = 0,
            i = t.length,
            s = 0,
            r = 0;
        for (;;)
            if (e == i)
                if (s > r * 2) {
                    let l = t[e - 1];
                    l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), i += 1 + l.break, s -= l.size
                } else if (r > s * 2) {
            let l = t[i];
            l.break ? t.splice(i, 1, l.left, null, l.right) : t.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size
        } else break;
        else if (s < r) {
            let l = t[e++];
            l && (s += l.size)
        } else {
            let l = t[--i];
            l && (r += l.size)
        }
        let o = 0;
        return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, i++), new mc(lt.of(t.slice(0, e)), o, lt.of(t.slice(i)))
    }
}
lt.prototype.size = 1;
class jo extends lt {
    constructor(t, e, i) {
        super(t, e), this.deco = i
    }
    blockAt(t, e, i, s) {
        return new Dt(s, this.length, i, this.height, this.deco || 0)
    }
    lineAt(t, e, i, s, r) {
        return this.blockAt(0, i, s, r)
    }
    forEachLine(t, e, i, s, r, o) {
        t <= r + this.length && e >= r && o(this.blockAt(0, i, s, r))
    }
    updateHeight(t, e = 0, i = !1, s) {
        return s && s.from <= e && s.more && this.setHeight(t, s.heights[s.index++]), this.outdated = !1, this
    }
    toString() {
        return `block(${this.length})`
    }
}
class dt extends jo {
    constructor(t, e) {
        super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0
    }
    blockAt(t, e, i, s) {
        return new Dt(s, this.length, i, this.height, this.breaks)
    }
    replace(t, e, i) {
        let s = i[0];
        return i.length == 1 && (s instanceof dt || s instanceof Z && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof Z ? s = new dt(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : lt.of(i)
    }
    updateHeight(t, e = 0, i = !1, s) {
        return s && s.from <= e && s.more ? this.setHeight(t, s.heights[s.index++]) : (i || this.outdated) && this.setHeight(t, Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = !1, this
    }
    toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
    }
}
class Z extends lt {
    constructor(t) {
        super(t, 0)
    }
    heightMetrics(t, e) {
        let i = t.doc.lineAt(e).number,
            s = t.doc.lineAt(e + this.length).number,
            r = s - i + 1,
            o, l = 0;
        if (t.lineWrapping) {
            let a = Math.min(this.height, t.lineHeight * r);
            o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1))
        } else o = this.height / r;
        return {
            firstLine: i,
            lastLine: s,
            perLine: o,
            perChar: l
        }
    }
    blockAt(t, e, i, s) {
        let {
            firstLine: r,
            lastLine: o,
            perLine: l,
            perChar: a
        } = this.heightMetrics(e, s);
        if (e.lineWrapping) {
            let c = s + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)),
                h = e.doc.lineAt(c),
                f = l + h.length * a,
                u = Math.max(i, t - f / 2);
            return new Dt(h.from, h.length, u, f, 0)
        } else {
            let c = Math.max(0, Math.min(o - r, Math.floor((t - i) / l))),
                {
                    from: h,
                    length: f
                } = e.doc.line(r + c);
            return new Dt(h, f, i + l * c, l, 0)
        }
    }
    lineAt(t, e, i, s, r) {
        if (e == _.ByHeight) return this.blockAt(t, i, s, r);
        if (e == _.ByPosNoHeight) {
            let {
                from: d,
                to: g
            } = i.doc.lineAt(t);
            return new Dt(d, g - d, 0, 0, 0)
        }
        let {
            firstLine: o,
            perLine: l,
            perChar: a
        } = this.heightMetrics(i, r), c = i.doc.lineAt(t), h = l + c.length * a, f = c.number - o, u = s + l * f + a * (c.from - r - f);
        return new Dt(c.from, c.length, Math.max(s, Math.min(u, s + this.height - h)), h, 0)
    }
    forEachLine(t, e, i, s, r, o) {
        t = Math.max(t, r), e = Math.min(e, r + this.length);
        let {
            firstLine: l,
            perLine: a,
            perChar: c
        } = this.heightMetrics(i, r);
        for (let h = t, f = s; h <= e;) {
            let u = i.doc.lineAt(h);
            if (h == t) {
                let g = u.number - l;
                f += a * g + c * (t - r - g)
            }
            let d = a + c * u.length;
            o(new Dt(u.from, u.length, f, d, 0)), f += d, h = u.to + 1
        }
    }
    replace(t, e, i) {
        let s = this.length - e;
        if (s > 0) {
            let r = i[i.length - 1];
            r instanceof Z ? i[i.length - 1] = new Z(r.length + s) : i.push(null, new Z(s - 1))
        }
        if (t > 0) {
            let r = i[0];
            r instanceof Z ? i[0] = new Z(t + r.length) : i.unshift(new Z(t - 1), null)
        }
        return lt.of(i)
    }
    decomposeLeft(t, e) {
        e.push(new Z(t - 1), null)
    }
    decomposeRight(t, e) {
        e.push(null, new Z(this.length - t - 1))
    }
    updateHeight(t, e = 0, i = !1, s) {
        let r = e + this.length;
        if (s && s.from <= e + this.length && s.more) {
            let o = [],
                l = Math.max(e, s.from),
                a = -1;
            for (s.from > e && o.push(new Z(s.from - e - 1).updateHeight(t, e)); l <= r && s.more;) {
                let h = t.doc.lineAt(l).length;
                o.length && o.push(null);
                let f = s.heights[s.index++];
                a == -1 ? a = f : Math.abs(f - a) >= di && (a = -2);
                let u = new dt(h, f);
                u.outdated = !1, o.push(u), l += h + 1
            }
            l <= r && o.push(null, new Z(r - l).updateHeight(t, l));
            let c = lt.of(o);
            return (a < 0 || Math.abs(c.height - this.height) >= di || Math.abs(a - this.heightMetrics(t, e).perLine) >= di) && (t.heightChanged = !0), c
        } else(i || this.outdated) && (this.setHeight(t, t.heightForGap(e, e + this.length)), this.outdated = !1);
        return this
    }
    toString() {
        return `gap(${this.length})`
    }
}
class mc extends lt {
    constructor(t, e, i) {
        super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size
    }
    get break() {
        return this.flags & 1
    }
    blockAt(t, e, i, s) {
        let r = i + this.left.height;
        return t < r ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, r, s + this.left.length + this.break)
    }
    lineAt(t, e, i, s, r) {
        let o = s + this.left.height,
            l = r + this.left.length + this.break,
            a = e == _.ByHeight ? t < o : t < l,
            c = a ? this.left.lineAt(t, e, i, s, r) : this.right.lineAt(t, e, i, o, l);
        if (this.break || (a ? c.to < l : c.from > l)) return c;
        let h = e == _.ByPosNoHeight ? _.ByPosNoHeight : _.ByPos;
        return a ? c.join(this.right.lineAt(l, h, i, o, l)) : this.left.lineAt(l, h, i, s, r).join(c)
    }
    forEachLine(t, e, i, s, r, o) {
        let l = s + this.left.height,
            a = r + this.left.length + this.break;
        if (this.break) t < a && this.left.forEachLine(t, e, i, s, r, o), e >= a && this.right.forEachLine(t, e, i, l, a, o);
        else {
            let c = this.lineAt(a, _.ByPos, i, s, r);
            t < c.from && this.left.forEachLine(t, c.from - 1, i, s, r, o), c.to >= t && c.from <= e && o(c), e > c.to && this.right.forEachLine(c.to + 1, e, i, l, a, o)
        }
    }
    replace(t, e, i) {
        let s = this.left.length + this.break;
        if (e < s) return this.balanced(this.left.replace(t, e, i), this.right);
        if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - s, e - s, i));
        let r = [];
        t > 0 && this.decomposeLeft(t, r);
        let o = r.length;
        for (let l of i) r.push(l);
        if (t > 0 && qn(r, o - 1), e < this.length) {
            let l = r.length;
            this.decomposeRight(e, r), qn(r, l)
        }
        return lt.of(r)
    }
    decomposeLeft(t, e) {
        let i = this.left.length;
        if (t <= i) return this.left.decomposeLeft(t, e);
        e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e)
    }
    decomposeRight(t, e) {
        let i = this.left.length,
            s = i + this.break;
        if (t >= s) return this.right.decomposeRight(t - s, e);
        t < i && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right)
    }
    balanced(t, e) {
        return t.size > 2 * e.size || e.size > 2 * t.size ? lt.of(this.break ? [t, null, e] : [t, e]) : (this.left = t, this.right = e, this.height = t.height + e.height, this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break+e.length, this)
    }
    updateHeight(t, e = 0, i = !1, s) {
        let {
            left: r,
            right: o
        } = this, l = e + r.length + this.break, a = null;
        return s && s.from <= e + r.length && s.more ? a = r = r.updateHeight(t, e, i, s) : r.updateHeight(t, e, i), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(t, l, i, s) : o.updateHeight(t, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
    }
    toString() {
        return this.left + (this.break ? " " : "-") + this.right
    }
}

function qn(n, t) {
    let e, i;
    n[t] == null && (e = n[t - 1]) instanceof Z && (i = n[t + 1]) instanceof Z && n.splice(t - 1, 3, new Z(e.length + 1 + i.length))
}
const xc = 5;
class Xs {
    constructor(t, e) {
        this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t
    }
    get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
    }
    span(t, e) {
        if (this.lineStart > -1) {
            let i = Math.min(e, this.lineEnd),
                s = this.nodes[this.nodes.length - 1];
            s instanceof dt ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new dt(i - this.pos, -1)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = e
    }
    point(t, e, i) {
        if (t < e || i.heightRelevant) {
            let s = i.widget ? i.widget.estimatedHeight : 0,
                r = i.widget ? i.widget.lineBreaks : 0;
            s < 0 && (s = this.oracle.lineHeight);
            let o = e - t;
            i.block ? this.addBlock(new jo(o, s, i)) : (o || r || s >= xc) && this.addLineDeco(s, r, o)
        } else e > t && this.span(t, e);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
    }
    enterLine() {
        if (this.lineStart > -1) return;
        let {
            from: t,
            to: e
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new dt(this.pos - t, -1)), this.writtenTo = this.pos
    }
    blankContent(t, e) {
        let i = new Z(e - t);
        return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i
    }
    ensureLine() {
        this.enterLine();
        let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (t instanceof dt) return t;
        let e = new dt(0, -1);
        return this.nodes.push(e), e
    }
    addBlock(t) {
        this.enterLine();
        let e = t.deco;
        e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t)
    }
    addLineDeco(t, e, i) {
        let s = this.ensureLine();
        s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, t), s.breaks += e, this.writtenTo = this.pos = this.pos + i
    }
    finish(t) {
        let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
        this.lineStart > -1 && !(e instanceof dt) && !this.isCovered ? this.nodes.push(new dt(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
        let i = t;
        for (let s of this.nodes) s instanceof dt && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
        return this.nodes
    }
    static build(t, e, i, s) {
        let r = new Xs(i, t);
        return L.spans(e, i, s, r, 0), r.finish(i)
    }
}

function yc(n, t, e) {
    let i = new wc;
    return L.compare(n, t, e, i, 0), i.changes
}
class wc {
    constructor() {
        this.changes = []
    }
    compareRange() {}
    comparePoint(t, e, i, s) {
        (t < e || i && i.heightRelevant || s && s.heightRelevant) && xs(t, e, this.changes, 5)
    }
}

function bc(n, t) {
    let e = n.getBoundingClientRect(),
        i = n.ownerDocument,
        s = i.defaultView || window,
        r = Math.max(0, e.left),
        o = Math.min(s.innerWidth, e.right),
        l = Math.max(0, e.top),
        a = Math.min(s.innerHeight, e.bottom);
    for (let c = n.parentNode; c && c != i.body;)
        if (c.nodeType == 1) {
            let h = c,
                f = window.getComputedStyle(h);
            if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && f.overflow != "visible") {
                let u = h.getBoundingClientRect();
                r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = c == n.parentNode ? u.bottom : Math.min(a, u.bottom)
            }
            c = f.position == "absolute" || f.position == "fixed" ? h.offsetParent : h.parentNode
        } else if (c.nodeType == 11) c = c.host;
    else break;
    return {
        left: r - e.left,
        right: Math.max(r, o) - e.left,
        top: l - (e.top + t),
        bottom: Math.max(l, a) - (e.top + t)
    }
}

function vc(n, t) {
    let e = n.getBoundingClientRect();
    return {
        left: 0,
        right: e.right - e.left,
        top: t,
        bottom: e.bottom - (e.top + t)
    }
}
class zi {
    constructor(t, e, i) {
        this.from = t, this.to = e, this.size = i
    }
    static same(t, e) {
        if (t.length != e.length) return !1;
        for (let i = 0; i < t.length; i++) {
            let s = t[i],
                r = e[i];
            if (s.from != r.from || s.to != r.to || s.size != r.size) return !1
        }
        return !0
    }
    draw(t, e) {
        return W.replace({
            widget: new Sc(this.size * (e ? t.scaleY : t.scaleX), e)
        }).range(this.from, this.to)
    }
}
class Sc extends ye {
    constructor(t, e) {
        super(), this.size = t, this.vertical = e
    }
    eq(t) {
        return t.size == this.size && t.vertical == this.vertical
    }
    toDOM() {
        let t = document.createElement("div");
        return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t
    }
    get estimatedHeight() {
        return this.vertical ? this.size : -1
    }
}
class Kn {
    constructor(t) {
        this.state = t, this.pixelViewport = {
            left: 0,
            right: window.innerWidth,
            top: 0,
            bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Un, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = X.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
        let e = t.facet($s).some(i => typeof i != "function" && i.class == "cm-lineWrapping");
        this.heightOracle = new pc(e), this.stateDeco = t.facet(Ke).filter(i => typeof i != "function"), this.heightMap = lt.empty().applyChanges(this.stateDeco, I.empty, this.heightOracle.setDoc(t.doc), [new xt(0, 0, 0, t.doc.length)]);
        for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = W.set(this.lineGaps.map(i => i.draw(this, !1))), this.computeVisibleRanges()
    }
    updateForViewport() {
        let t = [this.viewport],
            {
                main: e
            } = this.state.selection;
        for (let i = 0; i <= 1; i++) {
            let s = i ? e.head : e.anchor;
            if (!t.some(({
                    from: r,
                    to: o
                }) => s >= r && s <= o)) {
                let {
                    from: r,
                    to: o
                } = this.lineBlockAt(s);
                t.push(new si(r, o))
            }
        }
        return this.viewports = t.sort((i, s) => i.from - s.from), this.updateScaler()
    }
    updateScaler() {
        let t = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Un : new Js(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2
    }
    updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, t => {
            this.viewportLines.push(Re(t, this.scaler))
        })
    }
    update(t, e = null) {
        this.state = t.state;
        let i = this.stateDeco;
        this.stateDeco = this.state.facet(Ke).filter(h => typeof h != "function");
        let s = t.changedRanges,
            r = xt.extendWithRanges(s, yc(i, this.stateDeco, t ? t.changes : J.empty(this.state.doc.length))),
            o = this.heightMap.height,
            l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
        this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), this.heightMap.height != o && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
        let a = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
        (e && (e.range.head < a.from || e.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, e));
        let c = a.from != this.viewport.from || a.to != this.viewport.to;
        this.viewport = a, t.flags |= this.updateForViewport(), (c || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(yo) && (this.mustEnforceCursorAssoc = !0)
    }
    measure(t) {
        let e = t.contentDOM,
            i = window.getComputedStyle(e),
            s = this.heightOracle,
            r = i.whiteSpace;
        this.defaultTextDirection = i.direction == "rtl" ? X.RTL : X.LTR;
        let o = this.heightOracle.mustRefreshForWrapping(r),
            l = e.getBoundingClientRect(),
            a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
        this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
        let c = 0,
            h = 0;
        if (l.width && l.height) {
            let {
                scaleX: v,
                scaleY: C
            } = qr(e, l);
            (v > .005 && Math.abs(this.scaleX - v) > .005 || C > .005 && Math.abs(this.scaleY - C) > .005) && (this.scaleX = v, this.scaleY = C, c |= 8, o = a = !0)
        }
        let f = (parseInt(i.paddingTop) || 0) * this.scaleY,
            u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
        (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, c |= 10), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = t.scrollDOM.clientWidth, c |= 8);
        let d = t.scrollDOM.scrollTop * this.scaleY;
        this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Gr(t.scrollDOM);
        let g = (this.printing ? vc : bc)(e, this.paddingTop),
            x = g.top - this.pixelViewport.top,
            m = g.bottom - this.pixelViewport.bottom;
        this.pixelViewport = g;
        let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (y != this.inView && (this.inView = y, y && (a = !0)), !this.inView && !this.scrollTarget) return 0;
        let w = l.width;
        if ((this.contentDOMWidth != w || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, c |= 8), a) {
            let v = t.docView.measureVisibleLineHeights(this.viewport);
            if (s.mustRefreshForHeights(v) && (o = !0), o || s.lineWrapping && Math.abs(w - this.contentDOMWidth) > s.charWidth) {
                let {
                    lineHeight: C,
                    charWidth: A,
                    textHeight: O
                } = t.docView.measureTextSize();
                o = C > 0 && s.refresh(r, C, A, O, w / A, v), o && (t.docView.minWidth = 0, c |= 8)
            }
            x > 0 && m > 0 ? h = Math.max(x, m) : x < 0 && m < 0 && (h = Math.min(x, m)), s.heightChanged = !1;
            for (let C of this.viewports) {
                let A = C.from == this.viewport.from ? v : t.docView.measureVisibleLineHeights(C);
                this.heightMap = (o ? lt.empty().applyChanges(this.stateDeco, I.empty, this.heightOracle, [new xt(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new gc(C.from, A))
            }
            s.heightChanged && (c |= 2)
        }
        let S = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return S && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || S) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, t)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), c
    }
    get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
    }
    get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
    }
    getViewport(t, e) {
        let i = .5 - Math.max(-.5, Math.min(.5, t / 1e3 / 2)),
            s = this.heightMap,
            r = this.heightOracle,
            {
                visibleTop: o,
                visibleBottom: l
            } = this,
            a = new si(s.lineAt(o - i * 1e3, _.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, _.ByHeight, r, 0, 0).to);
        if (e) {
            let {
                head: c
            } = e.range;
            if (c < a.from || c > a.to) {
                let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
                    f = s.lineAt(c, _.ByPos, r, 0, 0),
                    u;
                e.y == "center" ? u = (f.top + f.bottom) / 2 - h / 2 : e.y == "start" || e.y == "nearest" && c < a.from ? u = f.top : u = f.bottom - h, a = new si(s.lineAt(u - 1e3 / 2, _.ByHeight, r, 0, 0).from, s.lineAt(u + h + 1e3 / 2, _.ByHeight, r, 0, 0).to)
            }
        }
        return a
    }
    mapViewport(t, e) {
        let i = e.mapPos(t.from, -1),
            s = e.mapPos(t.to, 1);
        return new si(this.heightMap.lineAt(i, _.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, _.ByPos, this.heightOracle, 0, 0).to)
    }
    viewportIsAppropriate({
        from: t,
        to: e
    }, i = 0) {
        if (!this.inView) return !0;
        let {
            top: s
        } = this.heightMap.lineAt(t, _.ByPos, this.heightOracle, 0, 0), {
            bottom: r
        } = this.heightMap.lineAt(e, _.ByPos, this.heightOracle, 0, 0), {
            visibleTop: o,
            visibleBottom: l
        } = this;
        return (t == 0 || s <= o - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && s > o - 2 * 1e3 && r < l + 2 * 1e3
    }
    mapLineGaps(t, e) {
        if (!t.length || e.empty) return t;
        let i = [];
        for (let s of t) e.touchesRange(s.from, s.to) || i.push(new zi(e.mapPos(s.from), e.mapPos(s.to), s.size));
        return i
    }
    ensureLineGaps(t, e) {
        let i = this.heightOracle.lineWrapping,
            s = i ? 1e4 : 2e3,
            r = s >> 1,
            o = s << 1;
        if (this.defaultTextDirection != X.LTR && !i) return [];
        let l = [],
            a = (h, f, u, d) => {
                if (f - h < r) return;
                let g = this.state.selection.main,
                    x = [g.from];
                g.empty || x.push(g.to);
                for (let y of x)
                    if (y > h && y < f) {
                        a(h, y - 10, u, d), a(y + 10, f, u, d);
                        return
                    }
                let m = kc(t, y => y.from >= u.from && y.to <= u.to && Math.abs(y.from - h) < r && Math.abs(y.to - f) < r && !x.some(w => y.from < w && y.to > w));
                if (!m) {
                    if (f < u.to && e && i && e.visibleRanges.some(y => y.from <= f && y.to >= f)) {
                        let y = e.moveToLineBoundary(M.cursor(f), !1, !0).head;
                        y > h && (f = y)
                    }
                    m = new zi(h, f, this.gapSize(u, h, f, d))
                }
                l.push(m)
            },
            c = h => {
                if (h.length < o || h.type != ot.Text) return;
                let f = Cc(h.from, h.to, this.stateDeco);
                if (f.total < o) return;
                let u = this.scrollTarget ? this.scrollTarget.range.head : null,
                    d, g;
                if (i) {
                    let x = s / this.heightOracle.lineLength * this.heightOracle.lineHeight,
                        m, y;
                    if (u != null) {
                        let w = ri(f, u),
                            S = ((this.visibleBottom - this.visibleTop) / 2 + x) / h.height;
                        m = w - S, y = w + S
                    } else m = (this.visibleTop - h.top - x) / h.height, y = (this.visibleBottom - h.top + x) / h.height;
                    d = ni(f, m), g = ni(f, y)
                } else {
                    let x = f.total * this.heightOracle.charWidth,
                        m = s * this.heightOracle.charWidth,
                        y, w;
                    if (u != null) {
                        let S = ri(f, u),
                            v = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + m) / x;
                        y = S - v, w = S + v
                    } else y = (this.pixelViewport.left - m) / x, w = (this.pixelViewport.right + m) / x;
                    d = ni(f, y), g = ni(f, w)
                }
                d > h.from && a(h.from, d, h, f), g < h.to && a(g, h.to, h, f)
            };
        for (let h of this.viewportLines) Array.isArray(h.type) ? h.type.forEach(c) : c(h);
        return l
    }
    gapSize(t, e, i, s) {
        let r = ri(s, i) - ri(s, e);
        return this.heightOracle.lineWrapping ? t.height * r : s.total * this.heightOracle.charWidth * r
    }
    updateLineGaps(t) {
        zi.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = W.set(t.map(e => e.draw(this, this.heightOracle.lineWrapping))))
    }
    computeVisibleRanges() {
        let t = this.stateDeco;
        this.lineGaps.length && (t = t.concat(this.lineGapDeco));
        let e = [];
        L.spans(t, this.viewport.from, this.viewport.to, {
            span(s, r) {
                e.push({
                    from: s,
                    to: r
                })
            },
            point() {}
        }, 20);
        let i = e.length != this.visibleRanges.length || this.visibleRanges.some((s, r) => s.from != e[r].from || s.to != e[r].to);
        return this.visibleRanges = e, i ? 4 : 0
    }
    lineBlockAt(t) {
        return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find(e => e.from <= t && e.to >= t) || Re(this.heightMap.lineAt(t, _.ByPos, this.heightOracle, 0, 0), this.scaler)
    }
    lineBlockAtHeight(t) {
        return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find(e => e.top <= t && e.bottom >= t) || Re(this.heightMap.lineAt(this.scaler.fromDOM(t), _.ByHeight, this.heightOracle, 0, 0), this.scaler)
    }
    scrollAnchorAt(t) {
        let e = this.lineBlockAtHeight(t + 8);
        return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0]
    }
    elementAtHeight(t) {
        return Re(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler)
    }
    get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
    }
    get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
    }
}
class si {
    constructor(t, e) {
        this.from = t, this.to = e
    }
}

function Cc(n, t, e) {
    let i = [],
        s = n,
        r = 0;
    return L.spans(e, n, t, {
        span() {},
        point(o, l) {
            o > s && (i.push({
                from: s,
                to: o
            }), r += o - s), s = l
        }
    }, 20), s < t && (i.push({
        from: s,
        to: t
    }), r += t - s), {
        total: r,
        ranges: i
    }
}

function ni({
    total: n,
    ranges: t
}, e) {
    if (e <= 0) return t[0].from;
    if (e >= 1) return t[t.length - 1].to;
    let i = Math.floor(n * e);
    for (let s = 0;; s++) {
        let {
            from: r,
            to: o
        } = t[s], l = o - r;
        if (i <= l) return r + i;
        i -= l
    }
}

function ri(n, t) {
    let e = 0;
    for (let {
            from: i,
            to: s
        } of n.ranges) {
        if (t <= s) {
            e += t - i;
            break
        }
        e += s - i
    }
    return e / n.total
}

function kc(n, t) {
    for (let e of n)
        if (t(e)) return e
}
const Un = {
    toDOM(n) {
        return n
    },
    fromDOM(n) {
        return n
    },
    scale: 1,
    eq(n) {
        return n == this
    }
};
class Js {
    constructor(t, e, i) {
        let s = 0,
            r = 0,
            o = 0;
        this.viewports = i.map(({
            from: l,
            to: a
        }) => {
            let c = e.lineAt(l, _.ByPos, t, 0, 0).top,
                h = e.lineAt(a, _.ByPos, t, 0, 0).bottom;
            return s += h - c, {
                from: l,
                to: a,
                top: c,
                bottom: h,
                domTop: 0,
                domBottom: 0
            }
        }), this.scale = (7e6 - s) / (e.height - s);
        for (let l of this.viewports) l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom
    }
    toDOM(t) {
        for (let e = 0, i = 0, s = 0;; e++) {
            let r = e < this.viewports.length ? this.viewports[e] : null;
            if (!r || t < r.top) return s + (t - i) * this.scale;
            if (t <= r.bottom) return r.domTop + (t - r.top);
            i = r.bottom, s = r.domBottom
        }
    }
    fromDOM(t) {
        for (let e = 0, i = 0, s = 0;; e++) {
            let r = e < this.viewports.length ? this.viewports[e] : null;
            if (!r || t < r.domTop) return i + (t - s) / this.scale;
            if (t <= r.domBottom) return r.top + (t - r.domTop);
            i = r.bottom, s = r.domBottom
        }
    }
    eq(t) {
        return t instanceof Js ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to) : !1
    }
}

function Re(n, t) {
    if (t.scale == 1) return n;
    let e = t.toDOM(n.top),
        i = t.toDOM(n.bottom);
    return new Dt(n.from, n.length, e, i - e, Array.isArray(n._content) ? n._content.map(s => Re(s, t)) : n._content)
}
const oi = E.define({
        combine: n => n.join(" ")
    }),
    Ms = E.define({
        combine: n => n.indexOf(!0) > -1
    }),
    As = ue.newName(),
    Ho = ue.newName(),
    Vo = ue.newName(),
    Fo = {
        "&light": "." + Ho,
        "&dark": "." + Vo
    };

function Es(n, t, e) {
    return new ue(t, {
        finish(i) {
            return /&/.test(i) ? i.replace(/&\w*/, s => {
                if (s == "&") return n;
                if (!e || !e[s]) throw new RangeError(`Unsupported selector: ${s}`);
                return e[s]
            }) : n + " " + i
        }
    })
}
const Mc = Es("." + As, {
        "&": {
            position: "relative !important",
            boxSizing: "border-box",
            "&.cm-focused": {
                outline: "1px dotted #212121"
            },
            display: "flex !important",
            flexDirection: "column"
        },
        ".cm-scroller": {
            display: "flex !important",
            alignItems: "flex-start !important",
            fontFamily: "monospace",
            lineHeight: 1.4,
            height: "100%",
            overflowX: "auto",
            position: "relative",
            zIndex: 0
        },
        ".cm-content": {
            margin: 0,
            flexGrow: 2,
            flexShrink: 0,
            display: "block",
            whiteSpace: "pre",
            wordWrap: "normal",
            boxSizing: "border-box",
            minHeight: "100%",
            padding: "4px 0",
            outline: "none",
            "&[contenteditable=true]": {
                WebkitUserModify: "read-write-plaintext-only"
            }
        },
        ".cm-lineWrapping": {
            whiteSpace_fallback: "pre-wrap",
            whiteSpace: "break-spaces",
            wordBreak: "break-word",
            overflowWrap: "anywhere",
            flexShrink: 1
        },
        "&light .cm-content": {
            caretColor: "black"
        },
        "&dark .cm-content": {
            caretColor: "white"
        },
        ".cm-line": {
            display: "block",
            padding: "0 2px 0 6px"
        },
        ".cm-layer": {
            position: "absolute",
            left: 0,
            top: 0,
            contain: "size style",
            "& > *": {
                position: "absolute"
            }
        },
        "&light .cm-selectionBackground": {
            background: "#d9d9d9"
        },
        "&dark .cm-selectionBackground": {
            background: "#222"
        },
        "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
            background: "#d7d4f0"
        },
        "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
            background: "#233"
        },
        ".cm-cursorLayer": {
            pointerEvents: "none"
        },
        "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
            animation: "steps(1) cm-blink 1.2s infinite"
        },
        "@keyframes cm-blink": {
            "0%": {},
            "50%": {
                opacity: 0
            },
            "100%": {}
        },
        "@keyframes cm-blink2": {
            "0%": {},
            "50%": {
                opacity: 0
            },
            "100%": {}
        },
        ".cm-cursor, .cm-dropCursor": {
            borderLeft: "1.2px solid black",
            marginLeft: "-0.6px",
            pointerEvents: "none"
        },
        ".cm-cursor": {
            display: "none"
        },
        "&dark .cm-cursor": {
            borderLeftColor: "#444"
        },
        ".cm-dropCursor": {
            position: "absolute"
        },
        "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
            display: "block"
        },
        ".cm-iso": {
            unicodeBidi: "isolate"
        },
        ".cm-announced": {
            position: "fixed",
            top: "-10000px"
        },
        "@media print": {
            ".cm-announced": {
                display: "none"
            }
        },
        "&light .cm-activeLine": {
            backgroundColor: "#cceeff44"
        },
        "&dark .cm-activeLine": {
            backgroundColor: "#99eeff33"
        },
        "&light .cm-specialChar": {
            color: "red"
        },
        "&dark .cm-specialChar": {
            color: "#f78"
        },
        ".cm-gutters": {
            flexShrink: 0,
            display: "flex",
            height: "100%",
            boxSizing: "border-box",
            insetInlineStart: 0,
            zIndex: 200
        },
        "&light .cm-gutters": {
            backgroundColor: "#f5f5f5",
            color: "#6c6c6c",
            borderRight: "1px solid #ddd"
        },
        "&dark .cm-gutters": {
            backgroundColor: "#333338",
            color: "#ccc"
        },
        ".cm-gutter": {
            display: "flex !important",
            flexDirection: "column",
            flexShrink: 0,
            boxSizing: "border-box",
            minHeight: "100%",
            overflow: "hidden"
        },
        ".cm-gutterElement": {
            boxSizing: "border-box"
        },
        ".cm-lineNumbers .cm-gutterElement": {
            padding: "0 3px 0 5px",
            minWidth: "20px",
            textAlign: "right",
            whiteSpace: "nowrap"
        },
        "&light .cm-activeLineGutter": {
            backgroundColor: "#e2f2ff"
        },
        "&dark .cm-activeLineGutter": {
            backgroundColor: "#222227"
        },
        ".cm-panels": {
            boxSizing: "border-box",
            position: "sticky",
            left: 0,
            right: 0
        },
        "&light .cm-panels": {
            backgroundColor: "#f5f5f5",
            color: "black"
        },
        "&light .cm-panels-top": {
            borderBottom: "1px solid #ddd"
        },
        "&light .cm-panels-bottom": {
            borderTop: "1px solid #ddd"
        },
        "&dark .cm-panels": {
            backgroundColor: "#333338",
            color: "white"
        },
        ".cm-tab": {
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom"
        },
        ".cm-widgetBuffer": {
            verticalAlign: "text-top",
            height: "1em",
            width: 0,
            display: "inline"
        },
        ".cm-placeholder": {
            color: "#888",
            display: "inline-block",
            verticalAlign: "top"
        },
        ".cm-highlightSpace:before": {
            content: "attr(data-display)",
            position: "absolute",
            pointerEvents: "none",
            color: "#888"
        },
        ".cm-highlightTab": {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
            backgroundSize: "auto 100%",
            backgroundPosition: "right 90%",
            backgroundRepeat: "no-repeat"
        },
        ".cm-trailingSpace": {
            backgroundColor: "#ff332255"
        },
        ".cm-button": {
            verticalAlign: "middle",
            color: "inherit",
            fontSize: "70%",
            padding: ".2em 1em",
            borderRadius: "1px"
        },
        "&light .cm-button": {
            backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
            border: "1px solid #888",
            "&:active": {
                backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
            }
        },
        "&dark .cm-button": {
            backgroundImage: "linear-gradient(#393939, #111)",
            border: "1px solid #888",
            "&:active": {
                backgroundImage: "linear-gradient(#111, #333)"
            }
        },
        ".cm-textfield": {
            verticalAlign: "middle",
            color: "inherit",
            fontSize: "70%",
            border: "1px solid silver",
            padding: ".2em .5em"
        },
        "&light .cm-textfield": {
            backgroundColor: "white"
        },
        "&dark .cm-textfield": {
            border: "1px solid #555",
            backgroundColor: "inherit"
        }
    }, Fo),
    Te = "￿";
class Ac {
    constructor(t, e) {
        this.points = t, this.text = "", this.lineSeparator = e.facet(z.lineSeparator)
    }
    append(t) {
        this.text += t
    }
    lineBreak() {
        this.text += Te
    }
    readRange(t, e) {
        if (!t) return this;
        let i = t.parentNode;
        for (let s = t;;) {
            this.findPointBefore(i, s);
            let r = this.text.length;
            this.readNode(s);
            let o = s.nextSibling;
            if (o == e) break;
            let l = V.get(s),
                a = V.get(o);
            (l && a ? l.breakAfter : (l ? l.breakAfter : Ci(s)) || Ci(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o
        }
        return this.findPointBefore(i, e), this
    }
    readTextNode(t) {
        let e = t.nodeValue;
        for (let i of this.points) i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
        for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g;;) {
            let r = -1,
                o = 1,
                l;
            if (this.lineSeparator ? (r = e.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = s.exec(e)) && (r = l.index, o = l[0].length), this.append(e.slice(i, r < 0 ? e.length : r)), r < 0) break;
            if (this.lineBreak(), o > 1)
                for (let a of this.points) a.node == t && a.pos > this.text.length && (a.pos -= o - 1);
            i = r + o
        }
    }
    readNode(t) {
        if (t.cmIgnore) return;
        let e = V.get(t),
            i = e && e.overrideDOMText;
        if (i != null) {
            this.findPointInside(t, i.length);
            for (let s = i.iter(); !s.next().done;) s.lineBreak ? this.lineBreak() : this.append(s.value)
        } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null)
    }
    findPointBefore(t, e) {
        for (let i of this.points) i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length)
    }
    findPointInside(t, e) {
        for (let i of this.points)(t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (Ec(t, i.node, i.offset) ? e : 0))
    }
}

function Ec(n, t, e) {
    for (;;) {
        if (!t || e < Ft(t)) return !1;
        if (t == n) return !0;
        e = te(t) + 1, t = t.parentNode
    }
}
class Gn {
    constructor(t, e) {
        this.node = t, this.offset = e, this.pos = -1
    }
}
class Oc {
    constructor(t, e, i, s) {
        this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = e > -1;
        let {
            impreciseHead: r,
            impreciseAnchor: o
        } = t.docView;
        if (t.state.readOnly && e > -1) this.newSel = null;
        else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
            let l = r || o ? [] : Nc(t),
                a = new Ac(l, t.state);
            a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Dc(l, this.bounds.from)
        } else {
            let l = t.observer.selectionRange,
                a = r && r.node == l.focusNode && r.offset == l.focusOffset || !fs(t.contentDOM, l.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(l.focusNode, l.focusOffset),
                c = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !fs(t.contentDOM, l.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(l.anchorNode, l.anchorOffset),
                h = t.viewport;
            if ((k.ios || k.chrome) && t.state.selection.main.empty && a != c && (h.from > 0 || h.to < t.state.doc.length)) {
                let f = Math.min(a, c),
                    u = Math.max(a, c),
                    d = h.from - f,
                    g = h.to - u;
                (d == 0 || d == 1 || f == 0) && (g == 0 || g == -1 || u == t.state.doc.length) && (a = 0, c = t.state.doc.length)
            }
            this.newSel = M.single(c, a)
        }
    }
}

function Wo(n, t) {
    let e, {
            newSel: i
        } = t,
        s = n.state.selection.main,
        r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
    if (t.bounds) {
        let {
            from: o,
            to: l
        } = t.bounds, a = s.from, c = null;
        (r === 8 || k.android && t.text.length < l - o) && (a = s.to, c = "end");
        let h = Tc(n.state.doc.sliceString(o, l, Te), t.text, a - o, c);
        h && (k.chrome && r == 13 && h.toB == h.from + 2 && t.text.slice(h.from, h.toB) == Te + Te && h.toB--, e = {
            from: o + h.from,
            to: o + h.toA,
            insert: I.of(t.text.slice(h.from, h.toB).split(Te))
        })
    } else i && (!n.hasFocus && n.state.facet(_t) || i.main.eq(s)) && (i = null);
    if (!e && !i) return !1;
    if (!e && t.typeOver && !s.empty && i && i.main.empty ? e = {
            from: s.from,
            to: s.to,
            insert: n.state.doc.slice(s.from, s.to)
        } : e && e.from >= s.from && e.to <= s.to && (e.from != s.from || e.to != s.to) && s.to - s.from - (e.to - e.from) <= 4 ? e = {
            from: s.from,
            to: s.to,
            insert: n.state.doc.slice(s.from, e.from).append(e.insert).append(n.state.doc.slice(e.to, s.to))
        } : (k.mac || k.android) && e && e.from == e.to && e.from == s.head - 1 && /^\. ?$/.test(e.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = M.single(i.main.anchor - 1, i.main.head - 1)), e = {
            from: s.from,
            to: s.to,
            insert: I.of([" "])
        }) : k.chrome && e && e.from == e.to && e.from == s.head && e.insert.toString() == `
 ` && n.lineWrapping && (i && (i = M.single(i.main.anchor - 1, i.main.head - 1)), e = {
            from: s.from,
            to: s.to,
            insert: I.of([" "])
        }), e) return _o(n, e, i, r);
    if (i && !i.main.eq(s)) {
        let o = !1,
            l = "select";
        return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = !0), l = n.inputState.lastSelectionOrigin), n.dispatch({
            selection: i,
            scrollIntoView: o,
            userEvent: l
        }), !0
    } else return !1
}

function _o(n, t, e, i = -1) {
    if (k.ios && n.inputState.flushIOSKey(t)) return !0;
    let s = n.state.selection.main;
    if (k.android && (t.to == s.to && (t.from == s.from || t.from == s.from - 1 && n.state.sliceDoc(t.from, s.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && ae(n.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || i == 8 && t.insert.length < t.to - t.from && t.to > s.head) && ae(n.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && ae(n.contentDOM, "Delete", 46))) return !0;
    let r = t.insert.toString();
    n.inputState.composing >= 0 && n.inputState.composing++;
    let o, l = () => o || (o = Rc(n, t, e));
    return n.state.facet(go).some(a => a(n, t.from, t.to, r, l)) || n.dispatch(l()), !0
}

function Rc(n, t, e) {
    let i, s = n.state,
        r = s.selection.main;
    if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && n.inputState.composing < 0) {
        let l = r.from < t.from ? s.sliceDoc(r.from, t.from) : "",
            a = r.to > t.to ? s.sliceDoc(t.to, r.to) : "";
        i = s.replaceSelection(n.state.toText(l + t.insert.sliceString(0, void 0, n.state.lineBreak) + a))
    } else {
        let l = s.changes(t),
            a = e && e.main.to <= l.newLength ? e.main : void 0;
        if (s.selection.ranges.length > 1 && n.inputState.composing >= 0 && t.to <= r.to && t.to >= r.to - 10) {
            let c = n.state.sliceDoc(t.from, t.to),
                h, f = e && Ao(n, e.main.head);
            if (f) {
                let g = t.insert.length - (t.to - t.from);
                h = {
                    from: f.from,
                    to: f.to - g
                }
            } else h = n.state.doc.lineAt(r.head);
            let u = r.to - t.to,
                d = r.to - r.from;
            i = s.changeByRange(g => {
                if (g.from == r.from && g.to == r.to) return {
                    changes: l,
                    range: a || g.map(l)
                };
                let x = g.to - u,
                    m = x - c.length;
                if (g.to - g.from != d || n.state.sliceDoc(m, x) != c || g.to >= h.from && g.from <= h.to) return {
                    range: g
                };
                let y = s.changes({
                        from: m,
                        to: x,
                        insert: t.insert
                    }),
                    w = g.to - r.to;
                return {
                    changes: y,
                    range: a ? M.range(Math.max(0, a.anchor + w), Math.max(0, a.head + w)) : g.map(y)
                }
            })
        } else i = {
            changes: l,
            selection: a && s.selection.replaceRange(a)
        }
    }
    let o = "input.type";
    return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = !1, o += ".compose", n.inputState.compositionFirstChange && (o += ".start", n.inputState.compositionFirstChange = !1)), s.update(i, {
        userEvent: o,
        scrollIntoView: !0
    })
}

function Tc(n, t, e, i) {
    let s = Math.min(n.length, t.length),
        r = 0;
    for (; r < s && n.charCodeAt(r) == t.charCodeAt(r);) r++;
    if (r == s && n.length == t.length) return null;
    let o = n.length,
        l = t.length;
    for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == t.charCodeAt(l - 1);) o--, l--;
    if (i == "end") {
        let a = Math.max(0, r - Math.min(o, l));
        e -= o + a - r
    }
    if (o < r && n.length < t.length) {
        let a = e <= r && e >= o ? r - e : 0;
        r -= a, l = r + (l - o), o = r
    } else if (l < r) {
        let a = e <= r && e >= l ? r - e : 0;
        r -= a, o = r + (o - l), l = r
    }
    return {
        from: r,
        toA: o,
        toB: l
    }
}

function Nc(n) {
    let t = [];
    if (n.root.activeElement != n.contentDOM) return t;
    let {
        anchorNode: e,
        anchorOffset: i,
        focusNode: s,
        focusOffset: r
    } = n.observer.selectionRange;
    return e && (t.push(new Gn(e, i)), (s != e || r != i) && t.push(new Gn(s, r))), t
}

function Dc(n, t) {
    if (n.length == 0) return null;
    let e = n[0].pos,
        i = n.length == 2 ? n[1].pos : e;
    return e > -1 && i > -1 ? M.single(e + t, i + t) : null
}
const Lc = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
    },
    qi = k.ie && k.ie_version <= 11;
class Pc {
    constructor(t) {
        this.view = t, this.active = !1, this.editContext = null, this.selectionRange = new yh, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver(e => {
            for (let i of e) this.queue.push(i);
            (k.ie && k.ie_version <= 11 || k.ios && t.composing) && e.some(i => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush()
        }), window.EditContext && t.constructor.EDIT_CONTEXT !== !1 && !(k.chrome && k.chrome_version < 126) && (this.editContext = new Bc(t), t.state.facet(_t) && (t.contentDOM.editContext = this.editContext.editContext)), qi && (this.onCharData = e => {
            this.queue.push({
                target: e.target,
                type: "characterData",
                oldValue: e.prevValue
            }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
            var e;
            ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize()
        }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver(e => {
            this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }, {
            threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver(e => {
            e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }, {})), this.listenForScroll(), this.readSelectionRange()
    }
    onScrollChanged(t) {
        this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure()
    }
    onScroll(t) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t)
    }
    onResize() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
            this.resizeTimeout = -1, this.view.requestMeasure()
        }, 50))
    }
    onPrint(t) {
        t.type == "change" && !t.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
            this.view.viewState.printing = !1, this.view.requestMeasure()
        }, 500))
    }
    updateGaps(t) {
        if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
            this.gapIntersection.disconnect();
            for (let e of t) this.gapIntersection.observe(e);
            this.gaps = t
        }
    }
    onSelectionChange(t) {
        let e = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
            view: i
        } = this, s = this.selectionRange;
        if (i.state.facet(_t) ? i.root.activeElement != this.dom : !fi(i.dom, s)) return;
        let r = s.anchorNode && i.docView.nearest(s.anchorNode);
        if (r && r.ignoreEvent(t)) {
            e || (this.selectionChanged = !1);
            return
        }(k.ie && k.ie_version <= 11 || k.android && k.chrome) && !i.state.selection.main.empty && s.focusNode && Pe(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1)
    }
    readSelectionRange() {
        let {
            view: t
        } = this, e = qe(t.root);
        if (!e) return !1;
        let i = k.safari && t.root.nodeType == 11 && ph(this.dom.ownerDocument) == this.dom && Ic(this.view, e) || e;
        if (!i || this.selectionRange.eq(i)) return !1;
        let s = fi(this.dom, i);
        return s && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && bh(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0)
    }
    setSelectionRange(t, e) {
        this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1
    }
    clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
    }
    listenForScroll() {
        this.parentCheck = -1;
        let t = 0,
            e = null;
        for (let i = this.dom; i;)
            if (i.nodeType == 1) !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
            else if (i.nodeType == 11) i = i.host;
        else break;
        if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
            for (let i of this.scrollTargets) i.removeEventListener("scroll", this.onScroll);
            for (let i of this.scrollTargets = e) i.addEventListener("scroll", this.onScroll)
        }
    }
    ignore(t) {
        if (!this.active) return t();
        try {
            return this.stop(), t()
        } finally {
            this.start(), this.clear()
        }
    }
    start() {
        this.active || (this.observer.observe(this.dom, Lc), qi && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
    }
    stop() {
        this.active && (this.active = !1, this.observer.disconnect(), qi && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
    }
    clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
    }
    delayAndroidKey(t, e) {
        var i;
        if (!this.delayedAndroidKey) {
            let s = () => {
                let r = this.delayedAndroidKey;
                r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && ae(this.dom, r.key, r.keyCode))
            };
            this.flushingAndroidKey = this.view.win.requestAnimationFrame(s)
        }(!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
            key: t,
            keyCode: e,
            force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
        })
    }
    clearDelayedAndroidKey() {
        this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1
    }
    flushSoon() {
        this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
            this.delayedFlush = -1, this.flush()
        }))
    }
    forceFlush() {
        this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush()
    }
    pendingRecords() {
        for (let t of this.observer.takeRecords()) this.queue.push(t);
        return this.queue
    }
    processRecords() {
        let t = this.pendingRecords();
        t.length && (this.queue = []);
        let e = -1,
            i = -1,
            s = !1;
        for (let r of t) {
            let o = this.readMutation(r);
            o && (o.typeOver && (s = !0), e == -1 ? {
                from: e,
                to: i
            } = o : (e = Math.min(o.from, e), i = Math.max(o.to, i)))
        }
        return {
            from: e,
            to: i,
            typeOver: s
        }
    }
    readChange() {
        let {
            from: t,
            to: e,
            typeOver: i
        } = this.processRecords(), s = this.selectionChanged && fi(this.dom, this.selectionRange);
        if (t < 0 && !s) return null;
        t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let r = new Oc(this.view, t, e, i);
        return this.view.docView.domChanged = {
            newSel: r.newSel ? r.newSel.main : null
        }, r
    }
    flush(t = !0) {
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        t && this.readSelectionRange();
        let e = this.readChange();
        if (!e) return this.view.requestMeasure(), !1;
        let i = this.view.state,
            s = Wo(this.view, e);
        return this.view.state == i && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s
    }
    readMutation(t) {
        let e = this.view.docView.nearest(t.target);
        if (!e || e.ignoreMutation(t)) return null;
        if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
            let i = $n(e, t.previousSibling || t.target.previousSibling, -1),
                s = $n(e, t.nextSibling || t.target.nextSibling, 1);
            return {
                from: i ? e.posAfter(i) : e.posAtStart,
                to: s ? e.posBefore(s) : e.posAtEnd,
                typeOver: !1
            }
        } else return t.type == "characterData" ? {
            from: e.posAtStart,
            to: e.posAtEnd,
            typeOver: t.target.nodeValue == t.oldValue
        } : null
    }
    setWindow(t) {
        t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win))
    }
    addWindowListeners(t) {
        t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener("change", this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange)
    }
    removeWindowListeners(t) {
        t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener("change", this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange)
    }
    update(t) {
        this.editContext && (this.editContext.update(t), t.startState.facet(_t) != t.state.facet(_t) && (t.view.contentDOM.editContext = t.state.facet(_t) ? this.editContext.editContext : null))
    }
    destroy() {
        var t, e, i;
        this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
        for (let s of this.scrollTargets) s.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
    }
}

function $n(n, t, e) {
    for (; t;) {
        let i = V.get(t);
        if (i && i.parent == n) return i;
        let s = t.parentNode;
        t = s != n.dom ? s : e > 0 ? t.nextSibling : t.previousSibling
    }
    return null
}

function Yn(n, t) {
    let e = t.startContainer,
        i = t.startOffset,
        s = t.endContainer,
        r = t.endOffset,
        o = n.docView.domAtPos(n.state.selection.main.anchor);
    return Pe(o.node, o.offset, s, r) && ([e, i, s, r] = [s, r, e, i]), {
        anchorNode: e,
        anchorOffset: i,
        focusNode: s,
        focusOffset: r
    }
}

function Ic(n, t) {
    if (t.getComposedRanges) {
        let s = t.getComposedRanges(n.root)[0];
        if (s) return Yn(n, s)
    }
    let e = null;

    function i(s) {
        s.preventDefault(), s.stopImmediatePropagation(), e = s.getTargetRanges()[0]
    }
    return n.contentDOM.addEventListener("beforeinput", i, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, !0), e ? Yn(n, e) : null
}
class Bc {
    constructor(t) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.resetRange(t.state);
        let e = this.editContext = new window.EditContext({
            text: t.state.doc.sliceString(this.from, this.to),
            selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
            selectionEnd: this.toContextPos(t.state.selection.main.head)
        });
        this.handlers.textupdate = i => {
            let {
                anchor: s
            } = t.state.selection.main, r = {
                from: this.toEditorPos(i.updateRangeStart),
                to: this.toEditorPos(i.updateRangeEnd),
                insert: I.of(i.text.split(`
`))
            };
            r.from == this.from && s < this.from ? r.from = s : r.to == this.to && s > this.to && (r.to = s), !(r.from == r.to && !r.insert.length) && (this.pendingContextChange = r, _o(t, r, M.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd))), this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)))
        }, this.handlers.characterboundsupdate = i => {
            let s = [],
                r = null;
            for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
                let a = t.coordsForChar(o);
                r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect, s.push(r)
            }
            e.updateCharacterBounds(i.rangeStart, s)
        }, this.handlers.textformatupdate = i => {
            let s = [];
            for (let r of i.getTextFormats()) {
                let o = r.underlineStyle,
                    l = r.underlineThickness;
                if (o != "None" && l != "None") {
                    let a = `text-decoration: underline ${o=="Dashed"?"dashed ":o=="Squiggle"?"wavy ":""}${l=="Thin"?1:2}px`;
                    s.push(W.mark({
                        attributes: {
                            style: a
                        }
                    }).range(this.toEditorPos(r.rangeStart), this.toEditorPos(r.rangeEnd)))
                }
            }
            t.dispatch({
                effects: bo.of(W.set(s))
            })
        }, this.handlers.compositionstart = () => {
            t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
            t.inputState.composing = -1, t.inputState.compositionFirstChange = null
        };
        for (let i in this.handlers) e.addEventListener(i, this.handlers[i]);
        this.measureReq = {
            read: i => {
                this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
                let s = qe(i.root);
                s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect())
            }
        }
    }
    applyEdits(t) {
        let e = 0,
            i = !1,
            s = this.pendingContextChange;
        return t.changes.iterChanges((r, o, l, a, c) => {
            if (i) return;
            let h = c.length - (o - r);
            if (s && o >= s.to)
                if (s.from == r && s.to == o && s.insert.eq(c)) {
                    s = this.pendingContextChange = null, e += h, this.to += h;
                    return
                } else s = null, this.revertPending(t.state);
            if (r += e, o += e, o <= this.from) this.from += h, this.to += h;
            else if (r < this.to) {
                if (r < this.from || o > this.to || this.to - this.from + c.length > 3e4) {
                    i = !0;
                    return
                }
                this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), c.toString()), this.to += h
            }
            e += h
        }), s && !i && this.revertPending(t.state), !i
    }
    update(t) {
        let e = this.pendingContextChange;
        !this.applyEdits(t) || !this.rangeIsValid(t.state) ? (this.pendingContextChange = null, this.resetRange(t.state), this.editContext.updateText(0, this.editContext.text.length, t.state.doc.sliceString(this.from, this.to)), this.setSelection(t.state)) : (t.docChanged || t.selectionSet || e) && this.setSelection(t.state), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq)
    }
    resetRange(t) {
        let {
            head: e
        } = t.selection.main;
        this.from = Math.max(0, e - 1e4), this.to = Math.min(t.doc.length, e + 1e4)
    }
    revertPending(t) {
        let e = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to))
    }
    setSelection(t) {
        let {
            main: e
        } = t.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), s = this.toContextPos(e.head);
        (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s)
    }
    rangeIsValid(t) {
        let {
            head: e
        } = t.selection.main;
        return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 1e4 * 3)
    }
    toEditorPos(t) {
        return t + this.from
    }
    toContextPos(t) {
        return t - this.from
    }
    destroy() {
        for (let t in this.handlers) this.editContext.removeEventListener(t, this.handlers[t])
    }
}
class T {
    get state() {
        return this.viewState.state
    }
    get viewport() {
        return this.viewState.viewport
    }
    get visibleRanges() {
        return this.viewState.visibleRanges
    }
    get inView() {
        return this.viewState.inView
    }
    get composing() {
        return this.inputState.composing > 0
    }
    get compositionStarted() {
        return this.inputState.composing >= 0
    }
    get root() {
        return this._root
    }
    get win() {
        return this.dom.ownerDocument.defaultView || window
    }
    constructor(t = {}) {
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
        let {
            dispatch: e
        } = t;
        this.dispatchTransactions = t.dispatchTransactions || e && (i => i.forEach(s => e(s, this))) || (i => this.update(i)), this.dispatch = this.dispatch.bind(this), this._root = t.root || wh(t.parent) || document, this.viewState = new Kn(t.state || z.create(t)), t.scrollTo && t.scrollTo.is(ti) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ee).map(i => new Fi(i));
        for (let i of this.plugins) i.update(this);
        this.observer = new Pc(this), this.inputState = new Jh(this), this.inputState.ensureHandlers(this.plugins), this.docView = new En(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure()
    }
    dispatch(...t) {
        let e = t.length == 1 && t[0] instanceof it ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
        this.dispatchTransactions(e, this)
    }
    update(t) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let e = !1,
            i = !1,
            s, r = this.state;
        for (let u of t) {
            if (u.startState != r) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
            r = u.state
        }
        if (this.destroyed) {
            this.viewState.state = r;
            return
        }
        let o = this.hasFocus,
            l = 0,
            a = null;
        t.some(u => u.annotation(Po)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Io(r, o), a || (l = 1));
        let c = this.observer.delayedAndroidKey,
            h = null;
        if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(z.phrases) != this.state.facet(z.phrases)) return this.setState(r);
        s = Mi.create(this, r, t), s.flags |= l;
        let f = this.viewState.scrollTarget;
        try {
            this.updateState = 2;
            for (let u of t) {
                if (f && (f = f.map(u.changes)), u.scrollIntoView) {
                    let {
                        main: d
                    } = u.state.selection;
                    f = new he(d.empty ? d : M.cursor(d.head, d.head > d.anchor ? -1 : 1))
                }
                for (let d of u.effects) d.is(ti) && (f = d.value.clip(this.state))
            }
            this.viewState.update(s, f), this.bidiCache = Ai.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(Oe) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some(u => u.isUserEvent("select.pointer")))
        } finally {
            this.updateState = 0
        }
        if (s.startState.facet(oi) != s.state.facet(oi) && (this.viewState.mustMeasureContent = !0), (e || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !s.empty)
            for (let u of this.state.facet(vs)) try {
                u(s)
            } catch (d) {
                Bt(this.state, d, "update listener")
            }(a || h) && Promise.resolve().then(() => {
                a && this.state == a.startState && this.dispatch(a), h && !Wo(this, h) && c.force && ae(this.contentDOM, c.key, c.keyCode)
            })
    }
    setState(t) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) {
            this.viewState.state = t;
            return
        }
        this.updateState = 2;
        let e = this.hasFocus;
        try {
            for (let i of this.plugins) i.destroy(this);
            this.viewState = new Kn(t), this.plugins = t.facet(Ee).map(i => new Fi(i)), this.pluginMap.clear();
            for (let i of this.plugins) i.update(this);
            this.docView.destroy(), this.docView = new En(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
            this.updateState = 0
        }
        e && this.focus(), this.requestMeasure()
    }
    updatePlugins(t) {
        let e = t.startState.facet(Ee),
            i = t.state.facet(Ee);
        if (e != i) {
            let s = [];
            for (let r of i) {
                let o = e.indexOf(r);
                if (o < 0) s.push(new Fi(r));
                else {
                    let l = this.plugins[o];
                    l.mustUpdate = t, s.push(l)
                }
            }
            for (let r of this.plugins) r.mustUpdate != t && r.destroy(this);
            this.plugins = s, this.pluginMap.clear()
        } else
            for (let s of this.plugins) s.mustUpdate = t;
        for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
        e != i && this.inputState.ensureHandlers(this.plugins)
    }
    docViewUpdate() {
        for (let t of this.plugins) {
            let e = t.value;
            if (e && e.docViewUpdate) try {
                e.docViewUpdate(this)
            } catch (i) {
                Bt(this.state, i, "doc view update listener")
            }
        }
    }
    measure(t = !0) {
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
            this.measureScheduled = -1, this.requestMeasure();
            return
        }
        this.measureScheduled = 0, t && this.observer.forceFlush();
        let e = null,
            i = this.scrollDOM,
            s = i.scrollTop * this.scaleY,
            {
                scrollAnchorPos: r,
                scrollAnchorHeight: o
            } = this.viewState;
        Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
        try {
            for (let l = 0;; l++) {
                if (o < 0)
                    if (Gr(i)) r = -1, o = this.viewState.heightMap.height;
                    else {
                        let d = this.viewState.scrollAnchorAt(s);
                        r = d.from, o = d.top
                    }
                this.updateState = 1;
                let a = this.viewState.measure(this);
                if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
                if (l > 5) {
                    console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
                    break
                }
                let c = [];
                a & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
                let h = c.map(d => {
                        try {
                            return d.read(this)
                        } catch (g) {
                            return Bt(this.state, g), Xn
                        }
                    }),
                    f = Mi.create(this, this.state, []),
                    u = !1;
                f.flags |= a, e ? e.flags |= a : e = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
                for (let d = 0; d < c.length; d++)
                    if (h[d] != Xn) try {
                        let g = c[d];
                        g.write && g.write(h[d], this)
                    } catch (g) {
                        Bt(this.state, g)
                    }
                if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
                    if (this.viewState.editorHeight)
                        if (this.viewState.scrollTarget) {
                            this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
                            continue
                        } else {
                            let g = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
                            if (g > 1 || g < -1) {
                                s = s + g, i.scrollTop = s / this.scaleY, o = -1;
                                continue
                            }
                        }
                    break
                }
            }
        } finally {
            this.updateState = 0, this.measureScheduled = -1
        }
        if (e && !e.empty)
            for (let l of this.state.facet(vs)) l(e)
    }
    get themeClasses() {
        return As + " " + (this.state.facet(Ms) ? Vo : Ho) + " " + this.state.facet(oi)
    }
    updateAttrs() {
        let t = Jn(this, vo, {
                class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
            }),
            e = {
                spellcheck: "false",
                autocorrect: "off",
                autocapitalize: "off",
                translate: "no",
                contenteditable: this.state.facet(_t) ? "true" : "false",
                class: "cm-content",
                style: `${k.tabSize}: ${this.state.tabSize}`,
                role: "textbox",
                "aria-multiline": "true"
            };
        this.state.readOnly && (e["aria-readonly"] = "true"), Jn(this, $s, e);
        let i = this.observer.ignore(() => {
            let s = ms(this.contentDOM, this.contentAttrs, e),
                r = ms(this.dom, this.editorAttrs, t);
            return s || r
        });
        return this.editorAttrs = t, this.contentAttrs = e, i
    }
    showAnnouncements(t) {
        let e = !0;
        for (let i of t)
            for (let s of i.effects)
                if (s.is(T.announce)) {
                    e && (this.announceDOM.textContent = ""), e = !1;
                    let r = this.announceDOM.appendChild(document.createElement("div"));
                    r.textContent = s.value
                }
    }
    mountStyles() {
        this.styleModules = this.state.facet(Oe);
        let t = this.state.facet(T.cspNonce);
        ue.mount(this.root, this.styleModules.concat(Mc).reverse(), t ? {
            nonce: t
        } : void 0)
    }
    readMeasured() {
        if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
        this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1)
    }
    requestMeasure(t) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
            if (this.measureRequests.indexOf(t) > -1) return;
            if (t.key != null) {
                for (let e = 0; e < this.measureRequests.length; e++)
                    if (this.measureRequests[e].key === t.key) {
                        this.measureRequests[e] = t;
                        return
                    }
            }
            this.measureRequests.push(t)
        }
    }
    plugin(t) {
        let e = this.pluginMap.get(t);
        return (e === void 0 || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find(i => i.spec == t) || null), e && e.update(this).value
    }
    get documentTop() {
        return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
    }
    get documentPadding() {
        return {
            top: this.viewState.paddingTop,
            bottom: this.viewState.paddingBottom
        }
    }
    get scaleX() {
        return this.viewState.scaleX
    }
    get scaleY() {
        return this.viewState.scaleY
    }
    elementAtHeight(t) {
        return this.readMeasured(), this.viewState.elementAtHeight(t)
    }
    lineBlockAtHeight(t) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(t)
    }
    get viewportLineBlocks() {
        return this.viewState.viewportLines
    }
    lineBlockAt(t) {
        return this.viewState.lineBlockAt(t)
    }
    get contentHeight() {
        return this.viewState.contentHeight
    }
    moveByChar(t, e, i) {
        return _i(this, t, Ln(this, t, e, i))
    }
    moveByGroup(t, e) {
        return _i(this, t, Ln(this, t, e, i => Yh(this, t.head, i)))
    }
    visualLineSide(t, e) {
        let i = this.bidiSpans(t),
            s = this.textDirectionAt(t.from),
            r = i[e ? i.length - 1 : 0];
        return M.cursor(r.side(e, s) + t.from, r.forward(!e, s) ? 1 : -1)
    }
    moveToLineBoundary(t, e, i = !0) {
        return $h(this, t, e, i)
    }
    moveVertically(t, e, i) {
        return _i(this, t, Xh(this, t, e, i))
    }
    domAtPos(t) {
        return this.docView.domAtPos(t)
    }
    posAtDOM(t, e = 0) {
        return this.docView.posFromDOM(t, e)
    }
    posAtCoords(t, e = !0) {
        return this.readMeasured(), Eo(this, t, e)
    }
    coordsAtPos(t, e = 1) {
        this.readMeasured();
        let i = this.docView.coordsAt(t, e);
        if (!i || i.left == i.right) return i;
        let s = this.state.doc.lineAt(t),
            r = this.bidiSpans(s),
            o = r[Kt.find(r, t - s.from, -1, e)];
        return Di(i, o.dir == X.LTR == e > 0)
    }
    coordsForChar(t) {
        return this.readMeasured(), this.docView.coordsForChar(t)
    }
    get defaultCharacterWidth() {
        return this.viewState.heightOracle.charWidth
    }
    get defaultLineHeight() {
        return this.viewState.heightOracle.lineHeight
    }
    get textDirection() {
        return this.viewState.defaultTextDirection
    }
    textDirectionAt(t) {
        return !this.state.facet(xo) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t))
    }
    get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
    }
    bidiSpans(t) {
        if (t.length > jc) return ao(t.length);
        let e = this.textDirectionAt(t.from),
            i;
        for (let r of this.bidiCache)
            if (r.from == t.from && r.dir == e && (r.fresh || lo(r.isolates, i = An(this, t)))) return r.order;
        i || (i = An(this, t));
        let s = Dh(t.text, e, i);
        return this.bidiCache.push(new Ai(t.from, t.to, e, i, !0, s)), s
    }
    get hasFocus() {
        var t;
        return (this.dom.ownerDocument.hasFocus() || k.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
    }
    focus() {
        this.observer.ignore(() => {
            Kr(this.contentDOM), this.docView.updateSelection()
        })
    }
    setRoot(t) {
        this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles())
    }
    destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let t of this.plugins) t.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
    }
    static scrollIntoView(t, e = {}) {
        return ti.of(new he(typeof t == "number" ? M.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin))
    }
    scrollSnapshot() {
        let {
            scrollTop: t,
            scrollLeft: e
        } = this.scrollDOM, i = this.viewState.scrollAnchorAt(t);
        return ti.of(new he(M.cursor(i.from), "start", "start", i.top - t, e, !0))
    }
    setTabFocusMode(t) {
        t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t)
    }
    static domEventHandlers(t) {
        return Pt.define(() => ({}), {
            eventHandlers: t
        })
    }
    static domEventObservers(t) {
        return Pt.define(() => ({}), {
            eventObservers: t
        })
    }
    static theme(t, e) {
        let i = ue.newName(),
            s = [oi.of(i), Oe.of(Es(`.${i}`, t))];
        return e && e.dark && s.push(Ms.of(!0)), s
    }
    static baseTheme(t) {
        return zs.lowest(Oe.of(Es("." + As, t, Fo)))
    }
    static findFromDOM(t) {
        var e;
        let i = t.querySelector(".cm-content"),
            s = i && V.get(i) || V.get(t);
        return ((e = s ? .rootView) === null || e === void 0 ? void 0 : e.view) || null
    }
}
T.styleModule = Oe;
T.inputHandler = go;
T.scrollHandler = wo;
T.focusChangeEffect = mo;
T.perLineTextDirection = xo;
T.exceptionSink = po;
T.updateListener = vs;
T.editable = _t;
T.mouseSelectionStyle = uo;
T.dragMovesSelection = fo;
T.clickAddsSelectionRange = co;
T.decorations = Ke;
T.outerDecorations = So;
T.atomicRanges = Ys;
T.bidiIsolatedRanges = Co;
T.scrollMargins = ko;
T.darkTheme = Ms;
T.cspNonce = E.define({
    combine: n => n.length ? n[0] : ""
});
T.contentAttributes = $s;
T.editorAttributes = vo;
T.lineWrapping = T.contentAttributes.of({
    class: "cm-lineWrapping"
});
T.announce = U.define();
const jc = 4096,
    Xn = {};
class Ai {
    constructor(t, e, i, s, r, o) {
        this.from = t, this.to = e, this.dir = i, this.isolates = s, this.fresh = r, this.order = o
    }
    static update(t, e) {
        if (e.empty && !t.some(r => r.fresh)) return t;
        let i = [],
            s = t.length ? t[t.length - 1].dir : X.LTR;
        for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
            let o = t[r];
            o.dir == s && !e.touchesRange(o.from, o.to) && i.push(new Ai(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order))
        }
        return i
    }
}

function Jn(n, t, e) {
    for (let i = n.state.facet(t), s = i.length - 1; s >= 0; s--) {
        let r = i[s],
            o = typeof r == "function" ? r(n) : r;
        o && gs(o, e)
    }
    return e
}
const Hc = k.mac ? "mac" : k.windows ? "win" : k.linux ? "linux" : "key";

function Vc(n, t) {
    const e = n.split(/-(?!$)/);
    let i = e[e.length - 1];
    i == "Space" && (i = " ");
    let s, r, o, l;
    for (let a = 0; a < e.length - 1; ++a) {
        const c = e[a];
        if (/^(cmd|meta|m)$/i.test(c)) l = !0;
        else if (/^a(lt)?$/i.test(c)) s = !0;
        else if (/^(c|ctrl|control)$/i.test(c)) r = !0;
        else if (/^s(hift)?$/i.test(c)) o = !0;
        else if (/^mod$/i.test(c)) t == "mac" ? l = !0 : r = !0;
        else throw new Error("Unrecognized modifier name: " + c)
    }
    return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i
}

function li(n, t, e) {
    return t.altKey && (n = "Alt-" + n), t.ctrlKey && (n = "Ctrl-" + n), t.metaKey && (n = "Meta-" + n), e !== !1 && t.shiftKey && (n = "Shift-" + n), n
}
const Fc = zs.default(T.domEventHandlers({
        keydown(n, t) {
            return Kc(_c(t.state), n, t, "editor")
        }
    })),
    Wc = E.define({
        enables: Fc
    }),
    Zn = new WeakMap;

function _c(n) {
    let t = n.facet(Wc),
        e = Zn.get(t);
    return e || Zn.set(t, e = qc(t.reduce((i, s) => i.concat(s), []))), e
}
let zt = null;
const zc = 4e3;

function qc(n, t = Hc) {
    let e = Object.create(null),
        i = Object.create(null),
        s = (o, l) => {
            let a = i[o];
            if (a == null) i[o] = l;
            else if (a != l) throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix")
        },
        r = (o, l, a, c, h) => {
            var f, u;
            let d = e[o] || (e[o] = Object.create(null)),
                g = l.split(/ (?!$)/).map(y => Vc(y, t));
            for (let y = 1; y < g.length; y++) {
                let w = g.slice(0, y).join(" ");
                s(w, !0), d[w] || (d[w] = {
                    preventDefault: !0,
                    stopPropagation: !1,
                    run: [S => {
                        let v = zt = {
                            view: S,
                            prefix: w,
                            scope: o
                        };
                        return setTimeout(() => {
                            zt == v && (zt = null)
                        }, zc), !0
                    }]
                })
            }
            let x = g.join(" ");
            s(x, !1);
            let m = d[x] || (d[x] = {
                preventDefault: !1,
                stopPropagation: !1,
                run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
            });
            a && m.run.push(a), c && (m.preventDefault = !0), h && (m.stopPropagation = !0)
        };
    for (let o of n) {
        let l = o.scope ? o.scope.split(" ") : ["editor"];
        if (o.any)
            for (let c of l) {
                let h = e[c] || (e[c] = Object.create(null));
                h._any || (h._any = {
                    preventDefault: !1,
                    stopPropagation: !1,
                    run: []
                });
                let {
                    any: f
                } = o;
                for (let u in h) h[u].run.push(d => f(d, Os))
            }
        let a = o[t] || o.key;
        if (a)
            for (let c of l) r(c, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(c, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation)
    }
    return e
}
let Os = null;

function Kc(n, t, e, i) {
    Os = t;
    let s = Ll(t),
        r = De(s, 0),
        o = Zi(r) == s.length && s != " ",
        l = "",
        a = !1,
        c = !1,
        h = !1;
    zt && zt.view == e && zt.scope == i && (l = zt.prefix + " ", Ro.indexOf(t.keyCode) < 0 && (c = !0, zt = null));
    let f = new Set,
        u = m => {
            if (m) {
                for (let y of m.run)
                    if (!f.has(y) && (f.add(y), y(e))) return m.stopPropagation && (h = !0), !0;
                m.preventDefault && (m.stopPropagation && (h = !0), c = !0)
            }
            return !1
        },
        d = n[i],
        g, x;
    return d && (u(d[l + li(s, t, !o)]) ? a = !0 : o && (t.altKey || t.metaKey || t.ctrlKey) && !(k.windows && t.ctrlKey && t.altKey) && (g = Pl[t.keyCode]) && g != s ? (u(d[l + li(g, t, !0)]) || t.shiftKey && (x = Il[t.keyCode]) != s && x != g && u(d[l + li(x, t, !1)])) && (a = !0) : o && t.shiftKey && u(d[l + li(s, t, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), c && (a = !0), a && h && t.stopPropagation(), Os = null, a
}
class Xe {
    constructor(t, e, i, s, r) {
        this.className = t, this.left = e, this.top = i, this.width = s, this.height = r
    }
    draw() {
        let t = document.createElement("div");
        return t.className = this.className, this.adjust(t), t
    }
    update(t, e) {
        return e.className != this.className ? !1 : (this.adjust(t), !0)
    }
    adjust(t) {
        t.style.left = this.left + "px", t.style.top = this.top + "px", this.width != null && (t.style.width = this.width + "px"), t.style.height = this.height + "px"
    }
    eq(t) {
        return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className
    }
    static forRange(t, e, i) {
        if (i.empty) {
            let s = t.coordsAtPos(i.head, i.assoc || 1);
            if (!s) return [];
            let r = zo(t);
            return [new Xe(e, s.left - r.left, s.top - r.top, null, s.bottom - s.top)]
        } else return Uc(t, e, i)
    }
}

function zo(n) {
    let t = n.scrollDOM.getBoundingClientRect();
    return {
        left: (n.textDirection == X.LTR ? t.left : t.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX,
        top: t.top - n.scrollDOM.scrollTop * n.scaleY
    }
}

function Qn(n, t, e, i) {
    let s = n.coordsAtPos(t, e * 2);
    if (!s) return i;
    let r = n.dom.getBoundingClientRect(),
        o = (s.top + s.bottom) / 2,
        l = n.posAtCoords({
            x: r.left + 1,
            y: o
        }),
        a = n.posAtCoords({
            x: r.right - 1,
            y: o
        });
    return l == null || a == null ? i : {
        from: Math.max(i.from, Math.min(l, a)),
        to: Math.min(i.to, Math.max(l, a))
    }
}

function Uc(n, t, e) {
    if (e.to <= n.viewport.from || e.from >= n.viewport.to) return [];
    let i = Math.max(e.from, n.viewport.from),
        s = Math.min(e.to, n.viewport.to),
        r = n.textDirection == X.LTR,
        o = n.contentDOM,
        l = o.getBoundingClientRect(),
        a = zo(n),
        c = o.querySelector(".cm-line"),
        h = c && window.getComputedStyle(c),
        f = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0),
        u = l.right - (h ? parseInt(h.paddingRight) : 0),
        d = Cs(n, i),
        g = Cs(n, s),
        x = d.type == ot.Text ? d : null,
        m = g.type == ot.Text ? g : null;
    if (x && (n.lineWrapping || d.widgetLineBreaks) && (x = Qn(n, i, 1, x)), m && (n.lineWrapping || g.widgetLineBreaks) && (m = Qn(n, s, -1, m)), x && m && x.from == m.from && x.to == m.to) return w(S(e.from, e.to, x)); {
        let C = x ? S(e.from, null, x) : v(d, !1),
            A = m ? S(null, e.to, m) : v(g, !0),
            O = [];
        return (x || d).to < (m || g).from - (x && m ? 1 : 0) || d.widgetLineBreaks > 1 && C.bottom + n.defaultLineHeight / 2 < A.top ? O.push(y(f, C.bottom, u, A.top)) : C.bottom < A.top && n.elementAtHeight((C.bottom + A.top) / 2).type == ot.Text && (C.bottom = A.top = (C.bottom + A.top) / 2), w(C).concat(O).concat(w(A))
    }

    function y(C, A, O, N) {
        return new Xe(t, C - a.left, A - a.top - .01, O - C, N - A + .01)
    }

    function w({
        top: C,
        bottom: A,
        horizontal: O
    }) {
        let N = [];
        for (let st = 0; st < O.length; st += 2) N.push(y(O[st], C, O[st + 1], A));
        return N
    }

    function S(C, A, O) {
        let N = 1e9,
            st = -1e9,
            gt = [];

        function ct(Q, ft, At, bt, vt) {
            let B = n.coordsAtPos(Q, Q == O.to ? -2 : 2),
                D = n.coordsAtPos(At, At == O.from ? 2 : -2);
            !B || !D || (N = Math.min(B.top, D.top, N), st = Math.max(B.bottom, D.bottom, st), vt == X.LTR ? gt.push(r && ft ? f : B.left, r && bt ? u : D.right) : gt.push(!r && bt ? f : D.left, !r && ft ? u : B.right))
        }
        let nt = C ? ? O.from,
            mt = A ? ? O.to;
        for (let Q of n.visibleRanges)
            if (Q.to > nt && Q.from < mt)
                for (let ft = Math.max(Q.from, nt), At = Math.min(Q.to, mt);;) {
                    let bt = n.state.doc.lineAt(ft);
                    for (let vt of n.bidiSpans(bt)) {
                        let B = vt.from + bt.from,
                            D = vt.to + bt.from;
                        if (B >= At) break;
                        D > ft && ct(Math.max(B, ft), C == null && B <= nt, Math.min(D, At), A == null && D >= mt, vt.dir)
                    }
                    if (ft = bt.to + 1, ft >= At) break
                }
        return gt.length == 0 && ct(nt, C == null, mt, A == null, n.textDirection), {
            top: N,
            bottom: st,
            horizontal: gt
        }
    }

    function v(C, A) {
        let O = l.top + (A ? C.top : C.bottom);
        return {
            top: O,
            bottom: O,
            horizontal: []
        }
    }
}

function Gc(n, t) {
    return n.constructor == t.constructor && n.eq(t)
}
class $c {
    constructor(t, e) {
        this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
            read: this.measure.bind(this),
            write: this.draw.bind(this)
        }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t)
    }
    update(t) {
        t.startState.facet(pi) != t.state.facet(pi) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq))
    }
    docViewUpdate(t) {
        this.layer.updateOnDocViewUpdate !== !1 && t.requestMeasure(this.measureReq)
    }
    setOrder(t) {
        let e = 0,
            i = t.facet(pi);
        for (; e < i.length && i[e] != this.layer;) e++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e)
    }
    measure() {
        return this.layer.markers(this.view)
    }
    scale() {
        let {
            scaleX: t,
            scaleY: e
        } = this.view;
        (t != this.scaleX || e != this.scaleY) && (this.scaleX = t, this.scaleY = e, this.dom.style.transform = `scale(${1/t}, ${1/e})`)
    }
    draw(t) {
        if (t.length != this.drawn.length || t.some((e, i) => !Gc(e, this.drawn[i]))) {
            let e = this.dom.firstChild,
                i = 0;
            for (let s of t) s.update && e && s.constructor && this.drawn[i].constructor && s.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(s.draw(), e);
            for (; e;) {
                let s = e.nextSibling;
                e.remove(), e = s
            }
            this.drawn = t
        }
    }
    destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
    }
}
const pi = E.define();

function qo(n) {
    return [Pt.define(t => new $c(t, n)), pi.of(n)]
}
const Ko = !k.ios,
    Ue = E.define({
        combine(n) {
            return qs(n, {
                cursorBlinkRate: 1200,
                drawRangeCursor: !0
            }, {
                cursorBlinkRate: (t, e) => Math.min(t, e),
                drawRangeCursor: (t, e) => t || e
            })
        }
    });

function Ou(n = {}) {
    return [Ue.of(n), Yc, Xc, Jc, yo.of(!0)]
}

function Uo(n) {
    return n.startState.facet(Ue) != n.state.facet(Ue)
}
const Yc = qo({
    above: !0,
    markers(n) {
        let {
            state: t
        } = n, e = t.facet(Ue), i = [];
        for (let s of t.selection.ranges) {
            let r = s == t.selection.main;
            if (s.empty ? !r || Ko : e.drawRangeCursor) {
                let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
                    l = s.empty ? s : M.cursor(s.head, s.head > s.anchor ? -1 : 1);
                for (let a of Xe.forRange(n, o, l)) i.push(a)
            }
        }
        return i
    },
    update(n, t) {
        n.transactions.some(i => i.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
        let e = Uo(n);
        return e && tr(n.state, t), n.docChanged || n.selectionSet || e
    },
    mount(n, t) {
        tr(t.state, n)
    },
    class: "cm-cursorLayer"
});

function tr(n, t) {
    t.style.animationDuration = n.facet(Ue).cursorBlinkRate + "ms"
}
const Xc = qo({
        above: !1,
        markers(n) {
            return n.state.selection.ranges.map(t => t.empty ? [] : Xe.forRange(n, "cm-selectionBackground", t)).reduce((t, e) => t.concat(e))
        },
        update(n, t) {
            return n.docChanged || n.selectionSet || n.viewportChanged || Uo(n)
        },
        class: "cm-selectionLayer"
    }),
    Rs = {
        ".cm-line": {
            "& ::selection, &::selection": {
                backgroundColor: "transparent !important"
            }
        },
        ".cm-content": {
            "& :focus": {
                caretColor: "initial !important",
                "&::selection, & ::selection": {
                    backgroundColor: "Highlight !important"
                }
            }
        }
    };
Ko && (Rs[".cm-line"].caretColor = Rs[".cm-content"].caretColor = "transparent !important");
const Jc = zs.highest(T.theme(Rs));

function er(n, t, e, i, s) {
    t.lastIndex = 0;
    for (let r = n.iterRange(e, i), o = e, l; !r.next().done; o += r.value.length)
        if (!r.lineBreak)
            for (; l = t.exec(r.value);) s(o + l.index, l)
}

function Zc(n, t) {
    let e = n.visibleRanges;
    if (e.length == 1 && e[0].from == n.viewport.from && e[0].to == n.viewport.to) return e;
    let i = [];
    for (let {
            from: s,
            to: r
        } of e) s = Math.max(n.state.doc.lineAt(s).from, s - t), r = Math.min(n.state.doc.lineAt(r).to, r + t), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({
        from: s,
        to: r
    });
    return i
}
class Qc {
    constructor(t) {
        const {
            regexp: e,
            decoration: i,
            decorate: s,
            boundary: r,
            maxLength: o = 1e3
        } = t;
        if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = e, s) this.addMatch = (l, a, c, h) => s(h, c, c + l[0].length, l, a);
        else if (typeof i == "function") this.addMatch = (l, a, c, h) => {
            let f = i(l, a, c);
            f && h(c, c + l[0].length, f)
        };
        else if (i) this.addMatch = (l, a, c, h) => h(c, c + l[0].length, i);
        else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
        this.boundary = r, this.maxLength = o
    }
    createDeco(t) {
        let e = new _e,
            i = e.add.bind(e);
        for (let {
                from: s,
                to: r
            } of Zc(t, this.maxLength)) er(t.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, t, o, i));
        return e.finish()
    }
    updateDeco(t, e) {
        let i = 1e9,
            s = -1;
        return t.docChanged && t.changes.iterChanges((r, o, l, a) => {
            a > t.view.viewport.from && l < t.view.viewport.to && (i = Math.min(l, i), s = Math.max(a, s))
        }), t.viewportChanged || s - i > 1e3 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e
    }
    updateRange(t, e, i, s) {
        for (let r of t.visibleRanges) {
            let o = Math.max(r.from, i),
                l = Math.min(r.to, s);
            if (l > o) {
                let a = t.state.doc.lineAt(o),
                    c = a.to < l ? t.state.doc.lineAt(l) : a,
                    h = Math.max(r.from, a.from),
                    f = Math.min(r.to, c.to);
                if (this.boundary) {
                    for (; o > a.from; o--)
                        if (this.boundary.test(a.text[o - 1 - a.from])) {
                            h = o;
                            break
                        }
                    for (; l < c.to; l++)
                        if (this.boundary.test(c.text[l - c.from])) {
                            f = l;
                            break
                        }
                }
                let u = [],
                    d, g = (x, m, y) => u.push(y.range(x, m));
                if (a == c)
                    for (this.regexp.lastIndex = h - a.from;
                        (d = this.regexp.exec(a.text)) && d.index < f - a.from;) this.addMatch(d, t, d.index + a.from, g);
                else er(t.state.doc, this.regexp, h, f, (x, m) => this.addMatch(m, t, x, g));
                e = e.update({
                    filterFrom: h,
                    filterTo: f,
                    filter: (x, m) => x < h || m > f,
                    add: u
                })
            }
        }
        return e
    }
}
const Ts = /x/.unicode != null ? "gu" : "g",
    tf = new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Ts),
    ef = {
        0: "null",
        7: "bell",
        8: "backspace",
        10: "newline",
        11: "vertical tab",
        13: "carriage return",
        27: "escape",
        8203: "zero width space",
        8204: "zero width non-joiner",
        8205: "zero width joiner",
        8206: "left-to-right mark",
        8207: "right-to-left mark",
        8232: "line separator",
        8237: "left-to-right override",
        8238: "right-to-left override",
        8294: "left-to-right isolate",
        8295: "right-to-left isolate",
        8297: "pop directional isolate",
        8233: "paragraph separator",
        65279: "zero width no-break space",
        65532: "object replacement"
    };
let Ki = null;

function sf() {
    var n;
    if (Ki == null && typeof document < "u" && document.body) {
        let t = document.body.style;
        Ki = ((n = t.tabSize) !== null && n !== void 0 ? n : t.MozTabSize) != null
    }
    return Ki || !1
}
const gi = E.define({
    combine(n) {
        let t = qs(n, {
            render: null,
            specialChars: tf,
            addSpecialChars: null
        });
        return (t.replaceTabs = !sf()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, Ts)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, Ts)), t
    }
});

function Ru(n = {}) {
    return [gi.of(n), nf()]
}
let ir = null;

function nf() {
    return ir || (ir = Pt.fromClass(class {
        constructor(n) {
            this.view = n, this.decorations = W.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(n.state.facet(gi)), this.decorations = this.decorator.createDeco(n)
        }
        makeDecorator(n) {
            return new Qc({
                regexp: n.specialChars,
                decoration: (t, e, i) => {
                    let {
                        doc: s
                    } = e.state, r = De(t[0], 0);
                    if (r == 9) {
                        let o = s.lineAt(i),
                            l = e.state.tabSize,
                            a = fh(o.text, l, i - o.from);
                        return W.replace({
                            widget: new af((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
                        })
                    }
                    return this.decorationCache[r] || (this.decorationCache[r] = W.replace({
                        widget: new lf(n, r)
                    }))
                },
                boundary: n.replaceTabs ? void 0 : /[^]/
            })
        }
        update(n) {
            let t = n.state.facet(gi);
            n.startState.facet(gi) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations)
        }
    }, {
        decorations: n => n.decorations
    }))
}
const rf = "•";

function of (n) {
    return n >= 32 ? rf : n == 10 ? "␤" : String.fromCharCode(9216 + n)
}
class lf extends ye {
    constructor(t, e) {
        super(), this.options = t, this.code = e
    }
    eq(t) {
        return t.code == this.code
    }
    toDOM(t) {
        let e = of (this.code),
            i = t.state.phrase("Control character") + " " + (ef[this.code] || "0x" + this.code.toString(16)),
            s = this.options.render && this.options.render(this.code, i, e);
        if (s) return s;
        let r = document.createElement("span");
        return r.textContent = e, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r
    }
    ignoreEvent() {
        return !1
    }
}
class af extends ye {
    constructor(t) {
        super(), this.width = t
    }
    eq(t) {
        return t.width == this.width
    }
    toDOM() {
        let t = document.createElement("span");
        return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t
    }
    ignoreEvent() {
        return !1
    }
}
class hf extends ye {
    constructor(t) {
        super(), this.content = t
    }
    toDOM() {
        let t = document.createElement("span");
        return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content), typeof this.content == "string" ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t
    }
    coordsAt(t) {
        let e = t.firstChild ? de(t.firstChild) : [];
        if (!e.length) return null;
        let i = window.getComputedStyle(t.parentNode),
            s = Di(e[0], i.direction != "rtl"),
            r = parseInt(i.lineHeight);
        return s.bottom - s.top > r * 1.5 ? {
            left: s.left,
            right: s.right,
            top: s.top,
            bottom: s.top + r
        } : s
    }
    ignoreEvent() {
        return !1
    }
}

function Tu(n) {
    return Pt.fromClass(class {
        constructor(t) {
            this.view = t, this.placeholder = n ? W.set([W.widget({
                widget: new hf(n),
                side: 1
            }).range(0)]) : W.none
        }
        get decorations() {
            return this.view.state.doc.length ? W.none : this.placeholder
        }
    }, {
        decorations: t => t.decorations
    })
}
const Ce = "-10000px";
class cf {
    constructor(t, e, i, s) {
        this.facet = e, this.createTooltipView = i, this.removeTooltipView = s, this.input = t.state.facet(e), this.tooltips = this.input.filter(o => o);
        let r = null;
        this.tooltipViews = this.tooltips.map(o => r = i(o, r))
    }
    update(t, e) {
        var i;
        let s = t.state.facet(this.facet),
            r = s.filter(a => a);
        if (s === this.input) {
            for (let a of this.tooltipViews) a.update && a.update(t);
            return !1
        }
        let o = [],
            l = e ? [] : null;
        for (let a = 0; a < r.length; a++) {
            let c = r[a],
                h = -1;
            if (c) {
                for (let f = 0; f < this.tooltips.length; f++) {
                    let u = this.tooltips[f];
                    u && u.create == c.create && (h = f)
                }
                if (h < 0) o[a] = this.createTooltipView(c, a ? o[a - 1] : null), l && (l[a] = !!c.above);
                else {
                    let f = o[a] = this.tooltipViews[h];
                    l && (l[a] = e[h]), f.update && f.update(t)
                }
            }
        }
        for (let a of this.tooltipViews) o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
        return e && (l.forEach((a, c) => e[c] = a), e.length = l.length), this.input = s, this.tooltips = r, this.tooltipViews = o, !0
    }
}

function ff(n) {
    let {
        win: t
    } = n;
    return {
        top: 0,
        left: 0,
        bottom: t.innerHeight,
        right: t.innerWidth
    }
}
const Ui = E.define({
        combine: n => {
            var t, e, i;
            return {
                position: k.ios ? "absolute" : ((t = n.find(s => s.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
                parent: ((e = n.find(s => s.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
                tooltipSpace: ((i = n.find(s => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || ff
            }
        }
    }),
    sr = new WeakMap,
    Go = Pt.fromClass(class {
        constructor(n) {
            this.view = n, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
            let t = n.state.facet(Ui);
            this.position = t.position, this.parent = t.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = {
                read: this.readMeasure.bind(this),
                write: this.writeMeasure.bind(this),
                key: this
            }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new cf(n, pf, (e, i) => this.createTooltip(e, i), e => {
                this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove()
            }), this.above = this.manager.tooltips.map(e => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver(e => {
                Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon()
            }, {
                threshold: [1]
            }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
            this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
            if (this.intersectionObserver) {
                this.intersectionObserver.disconnect();
                for (let n of this.manager.tooltipViews) this.intersectionObserver.observe(n.dom)
            }
        }
        measureSoon() {
            this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
                this.measureTimeout = -1, this.maybeMeasure()
            }, 50))
        }
        update(n) {
            n.transactions.length && (this.lastTransaction = Date.now());
            let t = this.manager.update(n, this.above);
            t && this.observeIntersection();
            let e = t || n.geometryChanged,
                i = n.state.facet(Ui);
            if (i.position != this.position && !this.madeAbsolute) {
                this.position = i.position;
                for (let s of this.manager.tooltipViews) s.dom.style.position = this.position;
                e = !0
            }
            if (i.parent != this.parent) {
                this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
                for (let s of this.manager.tooltipViews) this.container.appendChild(s.dom);
                e = !0
            } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
            e && this.maybeMeasure()
        }
        createTooltip(n, t) {
            let e = n.create(this.view),
                i = t ? t.dom : null;
            if (e.dom.classList.add("cm-tooltip"), n.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
                let s = document.createElement("div");
                s.className = "cm-tooltip-arrow", e.dom.appendChild(s)
            }
            return e.dom.style.position = this.position, e.dom.style.top = Ce, e.dom.style.left = "0px", this.container.insertBefore(e.dom, i), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e
        }
        destroy() {
            var n, t, e;
            this.view.win.removeEventListener("resize", this.measureSoon);
            for (let i of this.manager.tooltipViews) i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
            this.parent && this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
            let n = this.view.dom.getBoundingClientRect(),
                t = 1,
                e = 1,
                i = !1;
            if (this.position == "fixed" && this.manager.tooltipViews.length) {
                let {
                    dom: s
                } = this.manager.tooltipViews[0];
                if (k.gecko) i = s.offsetParent != this.container.ownerDocument.body;
                else if (s.style.top == Ce && s.style.left == "0px") {
                    let r = s.getBoundingClientRect();
                    i = Math.abs(r.top + 1e4) > 1 || Math.abs(r.left) > 1
                }
            }
            if (i || this.position == "absolute")
                if (this.parent) {
                    let s = this.parent.getBoundingClientRect();
                    s.width && s.height && (t = s.width / this.parent.offsetWidth, e = s.height / this.parent.offsetHeight)
                } else({
                    scaleX: t,
                    scaleY: e
                } = this.view.viewState);
            return {
                editor: n,
                parent: this.parent ? this.container.getBoundingClientRect() : n,
                pos: this.manager.tooltips.map((s, r) => {
                    let o = this.manager.tooltipViews[r];
                    return o.getCoords ? o.getCoords(s.pos) : this.view.coordsAtPos(s.pos)
                }),
                size: this.manager.tooltipViews.map(({
                    dom: s
                }) => s.getBoundingClientRect()),
                space: this.view.state.facet(Ui).tooltipSpace(this.view),
                scaleX: t,
                scaleY: e,
                makeAbsolute: i
            }
        }
        writeMeasure(n) {
            var t;
            if (n.makeAbsolute) {
                this.madeAbsolute = !0, this.position = "absolute";
                for (let l of this.manager.tooltipViews) l.dom.style.position = "absolute"
            }
            let {
                editor: e,
                space: i,
                scaleX: s,
                scaleY: r
            } = n, o = [];
            for (let l = 0; l < this.manager.tooltips.length; l++) {
                let a = this.manager.tooltips[l],
                    c = this.manager.tooltipViews[l],
                    {
                        dom: h
                    } = c,
                    f = n.pos[l],
                    u = n.size[l];
                if (!f || f.bottom <= Math.max(e.top, i.top) || f.top >= Math.min(e.bottom, i.bottom) || f.right < Math.max(e.left, i.left) - .1 || f.left > Math.min(e.right, i.right) + .1) {
                    h.style.top = Ce;
                    continue
                }
                let d = a.arrow ? c.dom.querySelector(".cm-tooltip-arrow") : null,
                    g = d ? 7 : 0,
                    x = u.right - u.left,
                    m = (t = sr.get(c)) !== null && t !== void 0 ? t : u.bottom - u.top,
                    y = c.offset || df,
                    w = this.view.textDirection == X.LTR,
                    S = u.width > i.right - i.left ? w ? i.left : i.right - u.width : w ? Math.min(f.left - (d ? 14 : 0) + y.x, i.right - x) : Math.max(i.left, f.left - x + (d ? 14 : 0) - y.x),
                    v = this.above[l];
                !a.strictSide && (v ? f.top - (u.bottom - u.top) - y.y < i.top : f.bottom + (u.bottom - u.top) + y.y > i.bottom) && v == i.bottom - f.bottom > f.top - i.top && (v = this.above[l] = !v);
                let C = (v ? f.top - i.top : i.bottom - f.bottom) - g;
                if (C < m && c.resize !== !1) {
                    if (C < this.view.defaultLineHeight) {
                        h.style.top = Ce;
                        continue
                    }
                    sr.set(c, m), h.style.height = (m = C) / r + "px"
                } else h.style.height && (h.style.height = "");
                let A = v ? f.top - m - g - y.y : f.bottom + g + y.y,
                    O = S + x;
                if (c.overlap !== !0)
                    for (let N of o) N.left < O && N.right > S && N.top < A + m && N.bottom > A && (A = v ? N.top - m - 2 - g : N.bottom + g + 2);
                if (this.position == "absolute" ? (h.style.top = (A - n.parent.top) / r + "px", h.style.left = (S - n.parent.left) / s + "px") : (h.style.top = A / r + "px", h.style.left = S / s + "px"), d) {
                    let N = f.left + (w ? y.x : -y.x) - (S + 14 - 7);
                    d.style.left = N / s + "px"
                }
                c.overlap !== !0 && o.push({
                    left: S,
                    top: A,
                    right: O,
                    bottom: A + m
                }), h.classList.toggle("cm-tooltip-above", v), h.classList.toggle("cm-tooltip-below", !v), c.positioned && c.positioned(n.space)
            }
        }
        maybeMeasure() {
            if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
                for (let n of this.manager.tooltipViews) n.dom.style.top = Ce
        }
    }, {
        eventObservers: {
            scroll() {
                this.maybeMeasure()
            }
        }
    }),
    uf = T.baseTheme({
        ".cm-tooltip": {
            zIndex: 100,
            boxSizing: "border-box"
        },
        "&light .cm-tooltip": {
            border: "1px solid #bbb",
            backgroundColor: "#f5f5f5"
        },
        "&light .cm-tooltip-section:not(:first-child)": {
            borderTop: "1px solid #bbb"
        },
        "&dark .cm-tooltip": {
            backgroundColor: "#333338",
            color: "white"
        },
        ".cm-tooltip-arrow": {
            height: "7px",
            width: `${7*2}px`,
            position: "absolute",
            zIndex: -1,
            overflow: "hidden",
            "&:before, &:after": {
                content: "''",
                position: "absolute",
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent"
            },
            ".cm-tooltip-above &": {
                bottom: "-7px",
                "&:before": {
                    borderTop: "7px solid #bbb"
                },
                "&:after": {
                    borderTop: "7px solid #f5f5f5",
                    bottom: "1px"
                }
            },
            ".cm-tooltip-below &": {
                top: "-7px",
                "&:before": {
                    borderBottom: "7px solid #bbb"
                },
                "&:after": {
                    borderBottom: "7px solid #f5f5f5",
                    top: "1px"
                }
            }
        },
        "&dark .cm-tooltip .cm-tooltip-arrow": {
            "&:before": {
                borderTopColor: "#333338",
                borderBottomColor: "#333338"
            },
            "&:after": {
                borderTopColor: "transparent",
                borderBottomColor: "transparent"
            }
        }
    }),
    df = {
        x: 0,
        y: 0
    },
    pf = E.define({
        enables: [Go, uf]
    });

function Nu(n, t) {
    let e = n.plugin(Go);
    if (!e) return null;
    let i = e.manager.tooltips.indexOf(t);
    return i < 0 ? null : e.manager.tooltipViews[i]
}
class Gt extends fe {
    compare(t) {
        return this == t || this.constructor == t.constructor && this.eq(t)
    }
    eq(t) {
        return !1
    }
    destroy(t) {}
}
Gt.prototype.elementClass = "";
Gt.prototype.toDOM = void 0;
Gt.prototype.mapMode = pt.TrackBefore;
Gt.prototype.startSide = Gt.prototype.endSide = -1;
Gt.prototype.point = !0;
const mi = E.define(),
    gf = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => L.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {}
    },
    Be = E.define();

function Du(n) {
    return [$o(), Be.of(Object.assign(Object.assign({}, gf), n))]
}
const nr = E.define({
    combine: n => n.some(t => t)
});

function $o(n) {
    return [mf]
}
const mf = Pt.fromClass(class {
    constructor(n) {
        this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(Be).map(t => new or(n, t));
        for (let t of this.gutters) this.dom.appendChild(t.dom);
        this.fixed = !n.state.facet(nr), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM)
    }
    update(n) {
        if (this.updateGutters(n)) {
            let t = this.prevViewport,
                e = n.view.viewport,
                i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
            this.syncGutters(i < (e.to - e.from) * .8)
        }
        n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(nr) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport
    }
    syncGutters(n) {
        let t = this.dom.nextSibling;
        n && this.dom.remove();
        let e = L.iter(this.view.state.facet(mi), this.view.viewport.from),
            i = [],
            s = this.gutters.map(r => new xf(r, this.view.viewport, -this.view.documentPadding.top));
        for (let r of this.view.viewportLineBlocks)
            if (i.length && (i = []), Array.isArray(r.type)) {
                let o = !0;
                for (let l of r.type)
                    if (l.type == ot.Text && o) {
                        Ns(e, i, l.from);
                        for (let a of s) a.line(this.view, l, i);
                        o = !1
                    } else if (l.widget)
                    for (let a of s) a.widget(this.view, l)
            } else if (r.type == ot.Text) {
            Ns(e, i, r.from);
            for (let o of s) o.line(this.view, r, i)
        } else if (r.widget)
            for (let o of s) o.widget(this.view, r);
        for (let r of s) r.finish();
        n && this.view.scrollDOM.insertBefore(this.dom, t)
    }
    updateGutters(n) {
        let t = n.startState.facet(Be),
            e = n.state.facet(Be),
            i = n.docChanged || n.heightChanged || n.viewportChanged || !L.eq(n.startState.facet(mi), n.state.facet(mi), n.view.viewport.from, n.view.viewport.to);
        if (t == e)
            for (let s of this.gutters) s.update(n) && (i = !0);
        else {
            i = !0;
            let s = [];
            for (let r of e) {
                let o = t.indexOf(r);
                o < 0 ? s.push(new or(this.view, r)) : (this.gutters[o].update(n), s.push(this.gutters[o]))
            }
            for (let r of this.gutters) r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
            for (let r of s) this.dom.appendChild(r.dom);
            this.gutters = s
        }
        return i
    }
    destroy() {
        for (let n of this.gutters) n.destroy();
        this.dom.remove()
    }
}, {
    provide: n => T.scrollMargins.of(t => {
        let e = t.plugin(n);
        return !e || e.gutters.length == 0 || !e.fixed ? null : t.textDirection == X.LTR ? {
            left: e.dom.offsetWidth * t.scaleX
        } : {
            right: e.dom.offsetWidth * t.scaleX
        }
    })
});

function rr(n) {
    return Array.isArray(n) ? n : [n]
}

function Ns(n, t, e) {
    for (; n.value && n.from <= e;) n.from == e && t.push(n.value), n.next()
}
class xf {
    constructor(t, e, i) {
        this.gutter = t, this.height = i, this.i = 0, this.cursor = L.iter(t.markers, e.from)
    }
    addElement(t, e, i) {
        let {
            gutter: s
        } = this, r = (e.top - this.height) / t.scaleY, o = e.height / t.scaleY;
        if (this.i == s.elements.length) {
            let l = new Yo(t, o, r, i);
            s.elements.push(l), s.dom.appendChild(l.dom)
        } else s.elements[this.i].update(t, o, r, i);
        this.height = e.bottom, this.i++
    }
    line(t, e, i) {
        let s = [];
        Ns(this.cursor, s, e.from), i.length && (s = s.concat(i));
        let r = this.gutter.config.lineMarker(t, e, s);
        r && s.unshift(r);
        let o = this.gutter;
        s.length == 0 && !o.config.renderEmptyElements || this.addElement(t, e, s)
    }
    widget(t, e) {
        let i = this.gutter.config.widgetMarker(t, e.widget, e);
        i && this.addElement(t, e, [i])
    }
    finish() {
        let t = this.gutter;
        for (; t.elements.length > this.i;) {
            let e = t.elements.pop();
            t.dom.removeChild(e.dom), e.destroy()
        }
    }
}
class or {
    constructor(t, e) {
        this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let i in e.domEventHandlers) this.dom.addEventListener(i, s => {
            let r = s.target,
                o;
            if (r != this.dom && this.dom.contains(r)) {
                for (; r.parentNode != this.dom;) r = r.parentNode;
                let a = r.getBoundingClientRect();
                o = (a.top + a.bottom) / 2
            } else o = s.clientY;
            let l = t.lineBlockAtHeight(o - t.documentTop);
            e.domEventHandlers[i](t, l, s) && s.preventDefault()
        });
        this.markers = rr(e.markers(t)), e.initialSpacer && (this.spacer = new Yo(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
    }
    update(t) {
        let e = this.markers;
        if (this.markers = rr(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
            let s = this.config.updateSpacer(this.spacer.markers[0], t);
            s != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [s])
        }
        let i = t.view.viewport;
        return !L.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : !1)
    }
    destroy() {
        for (let t of this.elements) t.destroy()
    }
}
class Yo {
    constructor(t, e, i, s) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s)
    }
    update(t, e, i, s) {
        this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), yf(this.markers, s) || this.setMarkers(t, s)
    }
    setMarkers(t, e) {
        let i = "cm-gutterElement",
            s = this.dom.firstChild;
        for (let r = 0, o = 0;;) {
            let l = o,
                a = r < e.length ? e[r++] : null,
                c = !1;
            if (a) {
                let h = a.elementClass;
                h && (i += " " + h);
                for (let f = o; f < this.markers.length; f++)
                    if (this.markers[f].compare(a)) {
                        l = f, c = !0;
                        break
                    }
            } else l = this.markers.length;
            for (; o < l;) {
                let h = this.markers[o++];
                if (h.toDOM) {
                    h.destroy(s);
                    let f = s.nextSibling;
                    s.remove(), s = f
                }
            }
            if (!a) break;
            a.toDOM && (c ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(t), s)), c && o++
        }
        this.dom.className = i, this.markers = e
    }
    destroy() {
        this.setMarkers(null, [])
    }
}

function yf(n, t) {
    if (n.length != t.length) return !1;
    for (let e = 0; e < n.length; e++)
        if (!n[e].compare(t[e])) return !1;
    return !0
}
const wf = E.define(),
    re = E.define({
        combine(n) {
            return qs(n, {
                formatNumber: String,
                domEventHandlers: {}
            }, {
                domEventHandlers(t, e) {
                    let i = Object.assign({}, t);
                    for (let s in e) {
                        let r = i[s],
                            o = e[s];
                        i[s] = r ? (l, a, c) => r(l, a, c) || o(l, a, c) : o
                    }
                    return i
                }
            })
        }
    });
class Gi extends Gt {
    constructor(t) {
        super(), this.number = t
    }
    eq(t) {
        return this.number == t.number
    }
    toDOM() {
        return document.createTextNode(this.number)
    }
}

function $i(n, t) {
    return n.state.facet(re).formatNumber(t, n.state)
}
const bf = Be.compute([re], n => ({
    class: "cm-lineNumbers",
    renderEmptyElements: !1,
    markers(t) {
        return t.state.facet(wf)
    },
    lineMarker(t, e, i) {
        return i.some(s => s.toDOM) ? null : new Gi($i(t, t.state.doc.lineAt(e.from).number))
    },
    widgetMarker: () => null,
    lineMarkerChange: t => t.startState.facet(re) != t.state.facet(re),
    initialSpacer(t) {
        return new Gi($i(t, lr(t.state.doc.lines)))
    },
    updateSpacer(t, e) {
        let i = $i(e.view, lr(e.view.state.doc.lines));
        return i == t.number ? t : new Gi(i)
    },
    domEventHandlers: n.facet(re).domEventHandlers
}));

function Lu(n = {}) {
    return [re.of(n), $o(), bf]
}

function lr(n) {
    let t = 9;
    for (; t < n;) t = t * 10 + 9;
    return t
}
const vf = new class extends Gt {
        constructor() {
            super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
    },
    Sf = mi.compute(["selection"], n => {
        let t = [],
            e = -1;
        for (let i of n.selection.ranges) {
            let s = n.doc.lineAt(i.head).from;
            s > e && (e = s, t.push(vf.range(s)))
        }
        return L.of(t)
    });

function Pu() {
    return Sf
}
const Xo = U.define(),
    Cf = U.define(),
    kf = U.define(),
    Mf = U.define();

function Af(n) {
    return new Map(n.map(t => [t.id, t.at]))
}
const Ds = wt.define({
        create() {
            return null
        },
        update(n, t) {
            for (const e of t.effects)
                if (e.is(Xo)) return e.value;
            return n
        }
    }),
    Ls = wt.define({
        create() {
            return []
        },
        update(n, t) {
            for (const o of t.effects)
                if (o.is(Cf)) return o.value;
            const e = n,
                i = Af(e),
                s = ja(t, i);
            return Wa(i, s) ? e : Ka(e, s)
        }
    }),
    Ps = wt.define({
        create() {
            return null
        },
        update(n, t) {
            for (const e of t.effects)
                if (e.is(kf)) return e.value;
            return n
        }
    }),
    Is = wt.define({
        create() {
            return null
        },
        update(n, t) {
            for (const e of t.effects)
                if (e.is(Mf)) return e.value;
            return n
        }
    });

function ar(n) {
    if (!n || n.to - n.from === 0) return W.none;
    const t = W.mark({
        class: ua.code
    });
    return W.set([t.range(n.from, n.to)])
}

function hr(n, t, e) {
    if (n.length === 0) return W.none;
    const s = [...n].sort((r, o) => r.at.start - o.at.start).map(r => {
        if (r.at.end - r.at.start === 0) return null;
        const o = r.id === t,
            l = r.id === e,
            a = qa({
                isHovered: o,
                isFocused: l,
                isCode: !0,
                diffStatus: r.diffStatus
            });
        return W.mark({
            class: a,
            attributes: {
                "data-comment-id": r.id
            }
        }).range(r.at.start, r.at.end)
    }).filter(fr);
    return W.set(s)
}
const Ef = wt.define({
        create(n) {
            const t = n.field(Ds, !1);
            return ar(t ? ? null)
        },
        update(n, t) {
            const e = t.state.field(Ds, !1);
            return ar(e ? ? null)
        },
        provide: n => T.decorations.from(n)
    }),
    Of = wt.define({
        create(n) {
            const t = n.field(Ls, !1),
                e = n.field(Ps, !1),
                i = n.field(Is, !1);
            return hr(t ? ? [], e ? ? null, i ? ? null)
        },
        update(n, t) {
            const e = t.state.field(Ls, !1),
                i = t.state.field(Ps, !1),
                s = t.state.field(Is, !1);
            return hr(e ? ? [], i ? ? null, s ? ? null)
        },
        provide: n => T.decorations.from(n)
    });

function Rf(n) {
    n.state.selection.main.empty && n.dispatch({
        effects: Xo.of(null)
    })
}

function Jo(n) {
    let t = n.dataset.commentId;
    for (let e = 0; e < 10 && !t && n.parentElement; e++) n = n.parentElement, t = n.dataset.commentId;
    return t
}

function Tf(n) {
    const t = n.target,
        e = Jo(t);
    e && bi.focusComment(e)
}

function Nf(n) {
    const t = n.target,
        e = Jo(t);
    e ? bi.mouseEnterComment(e) : bi.mouseLeaveComment()
}

function Iu(n, t = null, e = null) {
    return [Ls.init(() => n), Ds, Ps.init(() => t), Is.init(() => e), Ef, Of, T.updateListener.of(i => {
        i.selectionSet && Rf(i.view)
    }), T.domEventHandlers({
        click: Tf,
        mouseover: Nf
    })]
}
const Df = ({
        onClose: n,
        title: t,
        actions: e,
        showBorder: i = !1
    }) => p.jsxs("div", {
        className: R("flex items-center justify-between border-b bg-token-main-surface-primary py-2 pl-2 pr-2.5", {
            "border-token-border-xlight": i,
            "border-transparent": !i
        }),
        children: [p.jsx("div", {
            className: "flex select-none items-center gap-2 pl-4 text-sm text-token-text-primary",
            children: t
        }), p.jsxs("div", {
            className: "flex items-center gap-2",
            children: [e.map(({
                tooltip: s,
                icon: r,
                onClick: o
            }, l) => {
                const a = p.jsx(Zt, {
                    size: "small",
                    color: "ghost",
                    as: "button",
                    className: "aspect-square !p-1 text-token-text-primary",
                    icon: r,
                    onClick: o
                }, l);
                return s ? p.jsx(Ri, {
                    label: s,
                    children: a
                }, l) : a
            }), p.jsx(Zt, {
                size: "small",
                color: "ghost",
                as: "button",
                className: "aspect-square !p-1 text-token-text-primary",
                onClick: n,
                icon: ur
            })]
        })]
    }),
    Lf = ({
        onDrag: n,
        onDragEnd: t,
        onDoubleClick: e
    }) => p.jsx($.div, {
        drag: "y",
        className: "absolute top-[-2px] z-10 h-[4px] w-full cursor-ns-resize bg-token-text-quaternary opacity-0",
        whileHover: {
            opacity: .5
        },
        whileDrag: {
            opacity: .75,
            height: "8px",
            top: "-4px"
        },
        transition: {
            type: "tween",
            duration: .1
        },
        style: {
            x: 0,
            y: 0,
            transform: "translateY(0px)"
        },
        dragMomentum: !1,
        dragSnapToOrigin: !1,
        dragElastic: !1,
        dragConstraints: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        onDrag: (i, s) => {
            n ? .(s)
        },
        onDragEnd: t,
        onDoubleClick: e
    }),
    Pf = ({
        textdocTitle: n,
        onClickViewConsole: t,
        onClickFix: e,
        onDismiss: i
    }) => p.jsxs($.div, {
        initial: {
            scale: .95,
            opacity: 0
        },
        exit: {
            scale: .95,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        transition: {
            type: "spring",
            bounce: .12,
            duration: .3
        },
        className: "absolute bottom-2 right-2 flex w-fit max-w-80 flex-col gap-4 rounded-xl border border-token-border-light bg-token-main-surface-primary px-4 py-4 shadow-xl",
        children: [p.jsxs("div", {
            className: "flex items-start",
            children: [p.jsxs("div", {
                className: "flex flex-col gap-1",
                children: [p.jsx("div", {
                    className: "text-sm font-semibold",
                    children: p.jsx(K, {
                        id: "ObCQBq",
                        defaultMessage: "Cannot preview your code"
                    })
                }), p.jsx("div", {
                    className: "text-sm",
                    children: p.jsx(K, {
                        id: "3ZeoP8",
                        defaultMessage: "An error occured while trying to run {name}",
                        values: {
                            name: n
                        }
                    })
                })]
            }), p.jsx(Zt, {
                size: "small",
                color: "ghost",
                as: "button",
                className: "!-m-1 aspect-square !p-0 text-token-text-tertiary",
                onClick: i,
                icon: ur
            })]
        }), p.jsxs("div", {
            className: "flex items-center justify-end gap-2",
            children: [p.jsx(Zt, {
                size: "small",
                color: "secondary",
                onClick: t,
                children: p.jsx(K, {
                    id: "Fch32I",
                    defaultMessage: "View console"
                })
            }), p.jsx(Zt, {
                size: "small",
                color: "primary",
                onClick: e,
                children: p.jsx(K, {
                    id: "HRfYX0",
                    defaultMessage: "Fix bug"
                })
            })]
        })]
    }),
    Zo = (n, {
        name: t,
        message: e,
        line: i,
        stack: s
    }) => {
        const r = i != null ? `

Error occured in:
${n.split(`
`).slice(i-1,i+1).join(`
`)}` : "";
        return `${t}: ${e}

Stack:
${s.join("")}${r}`
    },
    Yi = new pa({
        capacity: 5
    }),
    If = async (n, t, e) => {
        const i = Zo(t, e.error),
            s = Oi(Yi.get(i));
        if (Yi.get(i)) return s;
        const {
            hint: r
        } = await mr.safePost("/textdoc/{textdoc_id}/code/hint", {
            parameters: {
                path: {
                    textdoc_id: n
                }
            },
            requestBody: {
                error: i,
                line: e.error.line ? ? -1
            }
        });
        return Yi.set(i, r), r
    },
    Qo = n => Vs([P.ERROR, P.LOG, P.OUTPUT], n.type),
    tl = n => n.type === P.OUTPUT && el(n.output),
    el = n => typeof n == "string" && n.startsWith("data:image/png;"),
    je = ({
        as: n = "li",
        contentBefore: t,
        contentAfter: e,
        disableEntryAnimation: i = !1,
        hasHint: s = !1,
        bottomBorder: r = !1,
        isHintOpen: o = !1,
        isSticky: l = !1,
        onClick: a,
        children: c
    }) => {
        const h = !!a,
            f = n === "div" ? $.div : $.li;
        return p.jsxs(f, {
            initial: i ? !1 : {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .32
            },
            role: h ? "button" : void 0,
            className: R("flex items-start justify-between whitespace-pre bg-token-main-surface-primary py-1.5 pl-6 pr-4 font-mono text-sm", r && "border-b border-token-border-xlight", l && "sticky top-0 z-10", h && "cursor-pointer", h && s && "hover:bg-red-500/10", h && !s && "hover:bg-gray-50 dark:hover:bg-gray-700", s && o && "bg-red-500/10"),
            onClick: h ? a : void 0,
            children: [t && p.jsx("div", {
                className: "mr-3 flex h-6 w-5 items-start",
                children: t
            }), p.jsx("div", {
                className: "flex min-h-6 min-w-0 flex-1 items-start justify-start gap-2 leading-6",
                children: c
            }), e && p.jsx("div", {
                className: "ml-3 flex min-h-6 items-start leading-6",
                children: e
            })]
        })
    },
    Bf = n => b.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...n
    }, b.createElement("path", {
        d: "M12 9V15M9 12H15",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), b.createElement("path", {
        d: "M21.5 20.1217L21.9496 21.0149C22.2103 20.8837 22.4007 20.6451 22.4708 20.3617C22.5408 20.0783 22.4836 19.7784 22.314 19.5408L21.5 20.1217ZM16.8597 19.3052L17.456 18.5025C17.1456 18.2719 16.73 18.2409 16.3888 18.423L16.8597 19.3052ZM21.0504 19.2284C20.3627 19.5746 19.532 19.4736 18.7401 19.1758C18.36 19.0329 18.031 18.8597 17.7964 18.7212C17.6802 18.6525 17.5897 18.5939 17.5307 18.5542C17.5012 18.5344 17.4798 18.5194 17.467 18.5103C17.4607 18.5058 17.4565 18.5028 17.4547 18.5015C17.4537 18.5008 17.4534 18.5005 17.4536 18.5007C17.4537 18.5008 17.4539 18.501 17.4543 18.5013C17.4545 18.5014 17.4548 18.5016 17.4551 18.5018C17.4552 18.5019 17.4554 18.5021 17.4555 18.5021C17.4557 18.5023 17.456 18.5025 16.8597 19.3052C16.2633 20.1079 16.2636 20.1081 16.2639 20.1084C16.264 20.1084 16.2643 20.1087 16.2645 20.1088C16.2649 20.1091 16.2654 20.1095 16.2659 20.1099C16.2669 20.1106 16.2681 20.1115 16.2694 20.1125C16.2721 20.1144 16.2754 20.1168 16.2793 20.1197C16.2871 20.1254 16.2974 20.1328 16.3101 20.1418C16.3355 20.1597 16.3704 20.1841 16.4143 20.2136C16.5018 20.2725 16.6254 20.3523 16.7792 20.4432C17.0849 20.6237 17.5202 20.8539 18.0363 21.0479C19.0367 21.424 20.5262 21.7313 21.9496 21.0149L21.0504 19.2284ZM12 19.5C7.19808 19.5 3.5 16.0404 3.5 12H1.5C1.5 17.3484 6.30851 21.5 12 21.5V19.5ZM3.5 12C3.5 7.95956 7.19808 4.5 12 4.5V2.5C6.30851 2.5 1.5 6.6516 1.5 12H3.5ZM12 4.5C16.8019 4.5 20.5 7.95956 20.5 12H22.5C22.5 6.6516 17.6915 2.5 12 2.5V4.5ZM16.3888 18.423C15.112 19.1044 13.6117 19.5 12 19.5V21.5C13.9399 21.5 15.7637 21.0237 17.3305 20.1874L16.3888 18.423ZM20.5 12C20.5 12.6516 20.3865 13.2654 20.2276 13.8989C20.0836 14.4734 19.8514 15.2339 19.7154 15.8765C19.5674 16.5754 19.4787 17.3387 19.6043 18.1641C19.7311 18.9979 20.0672 19.8354 20.686 20.7025L22.314 19.5408C21.8577 18.9013 21.6563 18.3545 21.5815 17.8633C21.5055 17.3638 21.5512 16.8613 21.672 16.2907C21.8047 15.6638 21.9757 15.151 22.1676 14.3852C22.3448 13.6786 22.5 12.8853 22.5 12H20.5Z",
        fill: "currentColor"
    }));

function jf(n) {
    switch (n) {
        case "dark_gray":
            return {
                normal: "text-token-text-secondary dark:text-white-400",
                hover: "cursor-pointer hover:text-token-text-primary group-hover:text-token-text-primary"
            };
        case "light_gray":
            return {
                normal: "text-gray-400",
                hover: "cursor-pointer hover:text-token-text-secondary group-hover:text-token-text-secondary"
            };
        case "error":
            return {
                normal: "text-red-500",
                hover: "cursor-pointer hover:text-red-500 group-hover:text-red-500"
            }
    }
}

function Zs({
    children: n,
    className: t,
    onClick: e,
    isClickable: i = !1,
    theme: s = "dark_gray"
}) {
    const r = jf(s),
        o = (e != null || i) && r.hover;
    return p.jsxs("div", {
        className: R("relative inline-block h-[20px] w-[20px] shrink-0 transition-opacity", t, o, r.normal),
        onClick: e,
        children: [n ? p.jsx(Bl, {
            className: "h-[20px] w-[20px] shrink-0"
        }) : p.jsx(Bf, {
            className: "h-[20px] w-[20px] shrink-0"
        }), p.jsx("span", {
            className: R("absolute inset-0 flex items-center justify-center text-[8px] font-black", o, r.normal),
            children: n
        })]
    })
}

function Qs() {
    return p.jsx(Zs, {
        theme: "light_gray",
        children: p.jsx(Ti, {})
    })
}

function Hf({
    count: n,
    isLoading: t,
    onClick: e,
    isError: i = !1
}) {
    return t ? p.jsx(Qs, {}) : p.jsx(Zs, {
        onClick: e,
        theme: i ? "error" : "dark_gray",
        children: n
    })
}

function Bu({
    isLoading: n = !1,
    onClick: t
}) {
    return n ? p.jsx(Qs, {}) : p.jsx(Zs, {
        isClickable: !0,
        onClick: t,
        theme: "light_gray"
    })
}
const il = {
        type: "spring",
        bounce: .12,
        duration: .5
    },
    sl = "opacity-50",
    Vf = ({
        position: n = "absolute",
        count: t,
        offsetY: e,
        isLoading: i = !1,
        onClick: s,
        isError: r = !1
    }) => p.jsx($.div, {
        className: R("flex", n, ai.collapsedComment),
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        style: {
            translateY: e
        },
        transition: il,
        exit: {
            opacity: 0
        },
        children: p.jsx(Hf, {
            count: t,
            isLoading: i,
            onClick: s,
            isError: r
        })
    }),
    Ff = ({
        isFocused: n,
        isHovered: t
    }) => {
        const e = n || t ? "grow font-medium text-token-text-primary transition-colors" : "grow font-medium text-token-text-secondary transition-colors",
            i = n || t ? "opacity-100 transition" : "opacity-75 transition";
        return p.jsxs(p.Fragment, {
            children: [p.jsx("div", {
                className: i,
                children: p.jsx("div", {
                    className: "gizmo-bot-avatar rounded-full",
                    children: p.jsx(jl, {
                        size: "gizmoConversation",
                        iconName: "openai"
                    })
                })
            }), p.jsx("span", {
                className: e,
                children: "ChatGPT"
            })]
        })
    },
    Wf = ({
        comment: {
            diffStatus: n,
            content: t
        },
        isFocused: e,
        isSomeCommentFocused: i,
        isHovered: s
    }) => {
        const r = n === wi.REMOVED;
        return p.jsx("div", {
            className: R("mt-2 text-token-text-primary transition-all", {
                "opacity-80": !e && !i && !s && !r,
                "opacity-40": !e && i && !s && !r,
                [sl]: r
            }),
            children: p.jsx(Hl, {
                text: t
            })
        })
    },
    _f = ({
        acceptButtonLabel: n,
        position: t = "absolute",
        left: e,
        right: i,
        comment: s,
        disableAnimations: r = !1,
        onClick: o,
        onMouseEnter: l,
        onMouseLeave: a,
        onAccept: c,
        onDismiss: h,
        translateY: f,
        isFocused: u = !1,
        isSomeCommentFocused: d = !1,
        disableActions: g = !1,
        isHovered: x = !1
    }, m) => {
        const [y, w] = b.useState(!1), S = s.diffStatus === wi.ADDED, v = s.diffStatus === wi.REMOVED, C = s.diffStatus != null, A = () => {
            w(!0), l ? .()
        }, O = () => {
            w(!1), a ? .()
        }, N = me(), st = u || y && !d;
        return p.jsx($.div, {
            ref: m,
            className: R(t, ai.expandedComment, {
                "cursor-default": u,
                "cursor-pointer": !u,
                [ai.expandedCommentFocused]: u,
                [ai.expandedCommentHovered]: x
            }),
            style: {
                left: e,
                right: i
            },
            initial: r ? !1 : {
                translateY: f,
                scale: .85,
                opacity: 0
            },
            animate: r ? void 0 : {
                translateY: f,
                scale: u ? 1 : .97,
                opacity: 1
            },
            exit: r ? void 0 : {
                scale: .85,
                opacity: 0,
                filter: "blur(16px)"
            },
            transition: il,
            onClick: o,
            onMouseEnter: g ? void 0 : A,
            onMouseLeave: g ? void 0 : O,
            "data-comment-id": s.id,
            children: p.jsxs("div", {
                className: R("flex min-h-8 flex-col overflow-hidden rounded-2xl border p-4 pt-2 text-left text-sm transition-all", {
                    "border-transparent bg-gray-50 dark:bg-gray-800": !u && !x,
                    "border-token-border-light bg-token-main-surface-primary": x && !u,
                    "border-token-border-light bg-token-main-surface-primary shadow-xl": u || y && !d,
                    "relative after:absolute after:bottom-0 after:left-0 after:top-0 after:w-1": C,
                    "after:bg-green-500": S,
                    "after:bg-red-500": v
                }),
                style: {
                    width: la
                },
                children: [p.jsxs("div", {
                    className: R("flex h-8 flex-row items-center gap-2.5", {
                        [sl]: v
                    }),
                    children: [p.jsx(Ff, {
                        isFocused: u,
                        isHovered: x
                    }), p.jsx("button", {
                        className: R("-mr-1 rounded-full bg-transparent p-1 text-token-text-secondary", {
                            "cursor-pointer hover:bg-gray-100 hover:text-token-text-primary dark:hover:bg-gray-700": !g,
                            "cursor-not-allowed": g
                        }),
                        onClick: h,
                        disabled: g,
                        "aria-label": N.formatMessage({
                            id: "fYDa3C",
                            defaultMessage: "Dismiss comment"
                        }),
                        children: p.jsx(ia, {
                            className: "icon-sm"
                        })
                    })]
                }), p.jsx(Wf, {
                    comment: s,
                    isFocused: u,
                    isHovered: x,
                    isSomeCommentFocused: d
                }), p.jsx(Ge, {
                    initial: !1,
                    children: st && p.jsx($.div, {
                        initial: r ? !1 : {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto",
                            transition: {
                                opacity: {
                                    delay: .14,
                                    duration: .2
                                },
                                height: {
                                    bounce: 0,
                                    duration: .2
                                }
                            }
                        },
                        exit: r ? void 0 : {
                            opacity: 0,
                            height: 0,
                            transition: {
                                opacity: {
                                    duration: .08
                                },
                                height: {
                                    bounce: 0,
                                    duration: .2
                                }
                            }
                        },
                        className: "flex items-center justify-start",
                        children: p.jsx("div", {
                            className: "mt-2.5",
                            children: p.jsx(Zt, {
                                color: "secondary",
                                onClick: c,
                                disabled: g,
                                children: n ? ? N.formatMessage({
                                    id: "WIW5OL",
                                    defaultMessage: "Apply"
                                })
                            })
                        })
                    })
                })]
            })
        })
    },
    nl = b.forwardRef(_f),
    ju = ({
        offsetY: n,
        opensOverDocument: t = !1,
        disableActions: e = !1,
        isFocused: i = !1,
        isSomeCommentFocused: s = !1,
        onAccept: r,
        onClick: o,
        onDismiss: l,
        onMouseEnter: a,
        onMouseLeave: c,
        comment: h,
        isHovered: f = !1
    }) => {
        const u = b.useRef(null);
        return b.useEffect(() => xr(document, {
            mousedown: ({
                target: d
            }) => {
                d instanceof HTMLElement && !d.closest("[data-comment-id]") && !u.current ? .contains(d) && bi.blurComment()
            }
        })), p.jsx(nl, {
            ref: u,
            comment: h,
            disableActions: e,
            onAccept: r,
            onDismiss: l,
            onMouseEnter: a,
            onMouseLeave: c,
            isSomeCommentFocused: s,
            isHovered: f,
            onClick: o,
            translateY: n,
            isFocused: i,
            left: t ? void 0 : aa,
            right: t ? ha : void 0
        })
    };
var Vt = (n => (n.LOADING = "loading", n.READY = "ready", n.RESOLVED = "resolved", n))(Vt || {});
const rl = ({
        hint: n,
        onClickFix: t,
        isOpen: e,
        onOpenChange: i
    }) => {
        const s = b.useRef(null),
            r = me();
        return n ? p.jsx("div", {
            className: "relative flex items-center font-sans",
            onClick: o => o.stopPropagation(),
            children: p.jsxs(Vl, {
                open: e,
                onOpenChange: i,
                children: [p.jsx(Fl, {
                    asChild: !0,
                    ref: s,
                    children: n.status === "resolved" ? p.jsx("div", {
                        className: "flex h-5 w-5 items-center",
                        children: p.jsx(sa, {
                            className: "text-token-text-tertiary",
                            size: 16
                        })
                    }) : p.jsx("button", {
                        className: "h-5 w-5",
                        disabled: n.status === "loading",
                        children: n.status === "loading" ? p.jsx(Qs, {}) : p.jsx(Vf, {
                            position: "static",
                            isError: !0,
                            count: 1,
                            offsetY: 0
                        })
                    })
                }), p.jsx(Ge, {
                    children: e && p.jsx(Wl, {
                        forceMount: !0,
                        container: s.current ? .ownerDocument.body,
                        children: p.jsx(_l, {
                            side: "top",
                            align: "start",
                            alignOffset: -4,
                            sideOffset: 10,
                            children: p.jsx(nl, {
                                position: "static",
                                translateY: 0,
                                right: 0,
                                isFocused: !0,
                                onDismiss: () => i ? .(!1),
                                onAccept: o => {
                                    i ? .(!1), t ? .(o)
                                },
                                comment: n,
                                acceptButtonLabel: r.formatMessage({
                                    id: "Dl9vBh",
                                    defaultMessage: "Fix bug"
                                })
                            })
                        })
                    })
                })]
            })
        }) : p.jsx("div", {
            className: "w-5"
        })
    },
    zf = n => b.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...n
    }, b.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929L13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289C11.9024 6.68342 11.9024 7.31658 12.2929 7.70711L15.5858 11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H15.5858L12.2929 16.2929C11.9024 16.6834 11.9024 17.3166 12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071L18.7071 12.7071Z",
        fill: "currentColor"
    })),
    Pi = n => Array.isArray(n) || Qt(n) || n instanceof Map || n instanceof Set,
    Ii = n => n == null || typeof n == "string" || typeof n == "number" || typeof n == "boolean",
    ol = n => Qt(n) ? Object.entries(n) : Array.from(n.entries()),
    ll = n => `${typeof n}:${typeof n=="object"?JSON.stringify(n):n}`,
    qf = ({
        isPreview: n = !1,
        value: t
    }) => {
        const [e, i] = b.useState(!1);
        return Ii(t) ? p.jsx(Bi, {
            value: t,
            depth: 0
        }) : Pi(t) ? p.jsxs("span", {
            className: R("relative z-0 max-w-full font-mono text-sm leading-6", e && "w-full flex-auto"),
            children: [p.jsxs("span", {
                role: "button",
                className: "group/row flex flex-wrap items-center gap-x-1 italic",
                onClick: () => i(!e),
                children: [!n && p.jsx(ul, {
                    isExpanded: e
                }), p.jsx(hl, {
                    value: t,
                    depth: 0
                }), p.jsx(js, {
                    value: t
                })]
            }), e && !n && p.jsx("div", {
                className: "pl-6",
                children: p.jsx(cl, {
                    value: t,
                    depth: 0
                })
            })]
        }) : p.jsx("span", {
            className: "truncate",
            children: String(t)
        })
    },
    al = ({
        value: n,
        depth: t = 0
    }) => Pi(n) ? p.jsx(cl, {
        depth: t,
        value: n
    }) : Ii(n) ? p.jsx(Bi, {
        depth: t,
        value: n
    }) : p.jsx("span", {
        className: "truncate",
        children: String(n)
    }),
    hl = ({
        value: n,
        depth: t = 0
    }) => {
        const e = Array.isArray(n),
            i = ol(n);
        return p.jsxs("div", {
            className: "inline-flex min-w-0 max-w-fit flex-grow basis-0",
            children: [!Qt(n) && p.jsx(Bs, {
                isShort: !0,
                isSecondary: !0,
                collection: n
            }), e ? "[" : "{", p.jsx("span", {
                className: "inline-flex min-w-0 max-w-fit flex-shrink flex-grow basis-0 overflow-hidden",
                children: i.map(([s, r], o) => {
                    let l = null;
                    return Pi(r) ? l = p.jsx(Bs, {
                        collection: r
                    }) : Ii(r) ? l = p.jsx(Bi, {
                        truncate: !0,
                        depth: t + 1,
                        value: r
                    }) : l = p.jsx(al, {
                        depth: t + 1,
                        value: r
                    }), p.jsxs(b.Fragment, {
                        children: [(Qt(n) || n instanceof Map) && p.jsx("span", {
                            className: "min-w-[2em] flex-shrink truncate whitespace-pre text-token-text-secondary",
                            children: p.jsx(fl, {
                                value: n,
                                propertyKey: s
                            })
                        }), l, o < i.length - 1 && p.jsx("span", {
                            className: "whitespace-pre",
                            children: ", "
                        })]
                    }, ll(s))
                })
            }), e ? "]" : "}"]
        })
    },
    cl = ({
        value: n,
        depth: t = 0
    }) => {
        const [e, i] = b.useState(() => new Set), s = ol(n);
        return p.jsx("ol", {
            className: "flex flex-col pl-6 font-mono",
            children: s.map(([r, o]) => {
                const l = ll(r),
                    a = e.has(l),
                    c = Pi(o),
                    h = () => {
                        i(f => {
                            const u = new Set(f);
                            return u.has(l) ? u.delete(l) : u.add(l), u
                        })
                    };
                return p.jsxs("li", {
                    className: R("flex whitespace-nowrap pl-1", c && "flex-col", !c && "group/row flex-wrap"),
                    onClick: f => f.stopPropagation(),
                    children: [p.jsxs("span", {
                        onClick: c ? h : void 0,
                        role: c ? "button" : void 0,
                        className: R("group/row z-10 -ml-1 min-w-0 items-center gap-x-1", c ? "flex" : "inline-flex"),
                        children: [c && p.jsxs(p.Fragment, {
                            children: [p.jsx(Kf, {}), p.jsx(ul, {
                                shiftLeft: !0,
                                isExpanded: a
                            })]
                        }), p.jsx("span", {
                            className: R("font-bold", (Qt(n) || Array.isArray(n)) && "text-red-900 dark:text-blue-400"),
                            children: p.jsx(fl, {
                                value: n,
                                propertyKey: r
                            })
                        }), c && !a && p.jsx(hl, {
                            value: o,
                            depth: t + 1
                        }), c && a && p.jsx(Bs, {
                            isSecondary: !0,
                            collection: o
                        }), c && p.jsx(js, {
                            value: o
                        })]
                    }), (!c || a) && p.jsx(al, {
                        value: o,
                        depth: t + 1
                    }), (typeof o == "string" || typeof o == "number") && p.jsx(js, {
                        value: o
                    })]
                }, l)
            })
        })
    },
    Bi = ({
        value: n,
        truncate: t = !1
    }) => typeof n == "string" ? p.jsxs("span", {
        className: R("text-red-500 dark:text-blue-250", t && "min-w-[2em] max-w-fit flex-shrink-0 flex-grow basis-0 overflow-hidden text-ellipsis whitespace-nowrap", !t && "whitespace-normal break-words break-all"),
        children: ["'", n, "'"]
    }) : p.jsx("span", {
        className: R("whitespace-nowrap", n == null ? "text-token-text-secondary" : "text-blue-500 dark:text-brand-purple-600"),
        children: String(n)
    }),
    Kf = () => p.jsx("span", {
        className: "absolute left-0 right-0 z-[-1] h-6 rounded-md group-hover/row:bg-gray-50 group-hover/row:dark:bg-gray-700"
    }),
    Bs = ({
        collection: n,
        isSecondary: t = !1,
        isShort: e = !1
    }) => {
        let i = null;
        return Array.isArray(n) && n.length > 0 ? i = e ? `(${n.length})` : `Array(${n.length})` : n instanceof Set ? i = `Set(${n.size})` : n instanceof Map ? i = `Map(${n.size})` : Qt(n) && (i = "{…}"), i && p.jsx("span", {
            className: R(t && "text-token-text-secondary"),
            children: i
        })
    },
    fl = ({
        value: n,
        propertyKey: t
    }) => Qt(n) || Array.isArray(n) ? `${Oi(t)}: ` : n instanceof Map ? p.jsxs("span", {
        className: "inline-flex items-center gap-1",
        children: [Ii(t) ? p.jsx(Bi, {
            value: t,
            depth: 0
        }) : p.jsx("span", {
            className: "text-token-text-secondary",
            children: JSON.stringify(t)
        }), p.jsx(zf, {
            className: "icon-sm text-token-text-secondary"
        })]
    }) : null,
    ul = ({
        isExpanded: n,
        shiftLeft: t = !1
    }) => p.jsx("button", {
        className: R("flex h-5 flex-shrink-0 items-center overflow-hidden", t && "ml-[-16px]"),
        children: p.jsx(yr, {
            className: R("icon-sm text-token-text-secondary transition-transform", n && "rotate-90")
        })
    }),
    js = ({
        value: n
    }) => {
        const t = dr(),
            e = () => {
                zl(JSON.stringify(n), t)
            };
        return p.jsx("span", {
            className: R("relative inline-block h-4 self-center text-token-text-secondary opacity-0 transition-opacity", "group-hover/row:opacity-100 group-hover/row:delay-500", "after:pointer-events-none after:absolute after:inset-[-4px] after:z-0 after:rounded-lg after:content-[''] hover:after:bg-token-main-surface-tertiary"),
            children: p.jsx(ga, {
                iconClassName: "icon-sm z-10",
                iconOnly: !0,
                onCopy: e
            })
        })
    },
    Uf = "module:",
    Hs = ({
        log: n,
        isDisabled: t = !1,
        onClick: e
    }) => p.jsx("div", {
        className: "flex items-center",
        children: "line" in n && n.line != null && p.jsxs("button", {
            onClick: () => n.line != null && e ? .(n.line),
            className: "select-none text-token-text-tertiary enabled:hover:underline",
            disabled: t,
            children: [Uf, n.line]
        })
    }),
    Gf = ({
        isPreview: n = !1,
        log: t,
        level: e
    }) => p.jsxs("span", {
        className: R("flex min-w-0 flex-wrap gap-1 text-token-text-primary", n ? "flex-shrink truncate" : "whitespace-pre-wrap", e === "warn" && "text-yellow-600"),
        children: [e === "warn" && "[warn]: ", typeof t == "string" ? t : t.map((i, s) => p.jsx(qf, {
            isPreview: n,
            value: i
        }, s))]
    }),
    dl = ({
        error: n,
        isPreview: t = !1,
        isResolved: e = !1
    }) => {
        const i = n.name + ":";
        return p.jsxs("span", {
            className: R("whitespace-pre-wrap", e ? "text-token-text-primary" : "text-red-500"),
            children: [p.jsx("span", {
                className: "font-semibold",
                children: i
            }), " ", n.message, p.jsx("div", {
                children: n.stack.length > 0 && !t ? n.stack.join(`
`) : ""
            })]
        })
    },
    $f = ({
        output: n,
        isPreview: t = !1
    }) => {
        const e = me();
        return n == null ? null : el(n) ? p.jsx("img", {
            alt: e.formatMessage(Xf.imgAlt),
            className: R(t && "h-6 rounded-lg border border-token-border-xlight"),
            src: n
        }) : p.jsx("span", {
            className: "flex items-center gap-2",
            children: Oi(n)
        })
    },
    tn = ({
        log: n,
        isHintResolved: t,
        isPreview: e = !1
    }) => {
        switch (n.type) {
            case P.LOG:
                return p.jsx(Gf, {
                    isPreview: e,
                    ...n
                });
            case P.ERROR:
                return p.jsx(dl, {
                    isPreview: e,
                    isResolved: t,
                    ...n
                });
            case P.OUTPUT:
                return p.jsx($f, {
                    isPreview: e,
                    ...n
                });
            default:
                return null
        }
    },
    Yf = ({
        log: n,
        isStale: t = !1,
        onClickFix: e,
        onClickLineNumber: i,
        hint: s
    }) => {
        const [r, o] = b.useState(!1);
        if (n.type === P.RUN_COMPLETE) return null;
        const l = s ? .status === Vt.RESOLVED,
            a = n.type === P.ERROR && s ? .status === Vt.READY;
        return p.jsx(je, {
            hasHint: a,
            isHintOpen: r,
            bottomBorder: !0,
            onClick: s && !l && (() => o(!0)),
            contentBefore: p.jsx(rl, {
                hint: s,
                isOpen: r,
                onOpenChange: o,
                onClickFix: c => n.type === P.ERROR && s && e ? .(c, s.id, n.error)
            }),
            contentAfter: p.jsx(Hs, {
                log: n,
                isDisabled: t,
                onClick: i
            }),
            children: p.jsx(tn, {
                log: n,
                isHintResolved: l
            })
        })
    },
    Xf = Fs({
        imgAlt: {
            id: "L6t7Yb",
            defaultMessage: "Plot"
        },
        ranCode: {
            id: "ffa9Nt",
            defaultMessage: "Ran code"
        },
        askForHelp: {
            id: "wMZco9",
            defaultMessage: "Ask ChatGPT for help"
        },
        askForFix: {
            id: "A9pxgT",
            defaultMessage: "Fix it for me"
        }
    }),
    Jf = ({
        timestamp: n,
        duration: t
    }) => {
        const [, e] = b.useState(0);
        b.useEffect(() => {
            setInterval(() => {
                e(r => r + 1)
            }, 5e3)
        }, []);
        const i = Date.now(),
            s = Math.round((i - n) / 1e3);
        return p.jsx(Ri, {
            label: p.jsx(K, {
                id: "bFO21A",
                defaultMessage: "Code ran {count, plural, =0 {instantly} one {in # second} other {in # seconds}}",
                values: {
                    count: Math.floor(t / 1e3)
                }
            }),
            children: p.jsx("span", {
                className: "text-token-text-tertiary",
                children: s >= 60 ? p.jsx(xl, {
                    value: -s,
                    updateIntervalInSeconds: 60,
                    numeric: "auto"
                }) : p.jsx(K, {
                    id: "bRCEFN",
                    defaultMessage: "Just now"
                })
            })
        })
    },
    pl = ({
        isComplete: n,
        timestamp: t,
        duration: e
    }) => n && t != null && e != null ? p.jsx(Jf, {
        timestamp: t,
        duration: e
    }) : n && e == null ? p.jsx("span", {
        className: "text-token-text-tertiary",
        children: p.jsx(K, {
            id: "EMebM9",
            defaultMessage: "Stopped"
        })
    }) : p.jsx(Ti, {
        gap: 2
    }),
    Zf = n => {
        switch (n) {
            case Ct.INITIALIZING:
                return p.jsx(K, {
                    id: "J183Z0",
                    defaultMessage: "initializing environment"
                });
            case Ct.INSTALLING_PACKAGES:
                return p.jsx(K, {
                    id: "21sQ8o",
                    defaultMessage: "installing packages"
                });
            case Ct.RUNNING_CODE:
                return p.jsx(K, {
                    id: "nHITHk",
                    defaultMessage: "running code"
                })
        }
    },
    xi = ({
        message: n,
        isComplete: t,
        statusLogs: e
    }) => {
        const i = Xi(e);
        return p.jsxs("span", {
            className: "flex items-center",
            children: [p.jsx("span", {
                className: "font-semibold text-token-text-secondary",
                children: p.jsx(K, { ...n
                })
            }), !t && i && p.jsxs($.span, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    delay: .3,
                    duration: .1
                },
                className: "ml-2 flex items-baseline text-token-text-tertiary",
                children: [Zf(i.status), p.jsx(Ti, {
                    gap: 2,
                    size: 2
                })]
            })]
        })
    },
    Qf = ({
        children: n,
        firstLog: t,
        lastLog: e,
        isHintResolved: i,
        duration: s,
        isComplete: r = !1,
        isLast: o = !1,
        statusLogs: l
    }) => {
        const [a, c] = b.useState(!0), [h, f] = b.useState(!1), u = b.useRef(null), d = () => {
            c(!a)
        };
        return b.useEffect(() => {
            const {
                current: g
            } = u;
            if (!g) return;
            const x = new IntersectionObserver(m => {
                m[0].intersectionRatio === 0 ? f(!0) : f(!1)
            }, {
                threshold: 0
            });
            return x.observe(g), () => x.unobserve(g)
        }, []), p.jsxs("li", {
            className: "relative flex flex-col",
            children: [p.jsx("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute h-[1px] bg-transparent",
                ref: u
            }), p.jsxs(je, {
                as: "div",
                disableEntryAnimation: !0,
                isSticky: !0,
                bottomBorder: h || !o && !a,
                contentAfter: p.jsx(pl, {
                    isComplete: r,
                    duration: s,
                    timestamp: t ? .timestamp
                }),
                contentBefore: p.jsx("button", {
                    className: "text-token-text-tertiary",
                    onClick: () => d(),
                    children: p.jsx(yr, {
                        className: R("icon-md transition-transform", a && "rotate-90")
                    })
                }),
                onClick: () => d(),
                children: [p.jsx(xi, {
                    isComplete: r,
                    message: yi.run,
                    statusLogs: l
                }), !a && e && p.jsx(tn, {
                    isPreview: !0,
                    isHintResolved: i,
                    log: e
                })]
            }), a && n]
        })
    },
    tu = ({
        runMessages: n,
        onClickFix: t,
        onClickLineNumber: e,
        hints: i,
        isStale: s,
        isLast: r,
        includeContentBefore: o = !1
    }) => {
        const [l, a] = b.useState(!1), c = n.filter(w => w.type === P.ENVIRONMENT_STATUS), h = n.filter(Qo), f = Xi(n), u = f ? .type === P.RUN_COMPLETE, d = u ? f.duration : null, g = h[0];
        if (u) {
            if (h.length === 0) return p.jsx(je, {
                isHintOpen: l,
                bottomBorder: !0,
                contentBefore: o,
                contentAfter: p.jsx(pl, {
                    isComplete: u,
                    duration: d,
                    timestamp: g ? .timestamp
                }),
                children: p.jsx(xi, {
                    isComplete: u,
                    message: yi.success,
                    statusLogs: c
                })
            });
            if (h.length === 1 && g ? .type === P.ERROR) {
                const w = i.get(g.id);
                return p.jsxs(je, {
                    hasHint: !!w,
                    isHintOpen: l,
                    bottomBorder: !0,
                    contentBefore: (o || !!w) && p.jsx(rl, {
                        hint: w,
                        isOpen: l,
                        onOpenChange: a,
                        onClickFix: S => t ? .(S, g.id, g.error)
                    }),
                    contentAfter: p.jsx(Hs, {
                        log: g,
                        isDisabled: s,
                        onClick: e
                    }),
                    onClick: w && w.status !== Vt.RESOLVED && (() => a(!0)),
                    children: [p.jsx(xi, {
                        isComplete: u,
                        message: yi.run,
                        statusLogs: c
                    }), p.jsx(dl, {
                        isResolved: w ? .status === Vt.RESOLVED,
                        ...g
                    })]
                })
            } else if (h.length === 1 && g && !tl(h[0])) return p.jsxs(je, {
                bottomBorder: !0,
                contentBefore: o,
                contentAfter: p.jsx(Hs, {
                    log: g,
                    isDisabled: s,
                    onClick: e
                }),
                children: [p.jsx(xi, {
                    isComplete: u,
                    message: yi.run,
                    statusLogs: c
                }), p.jsx(tn, {
                    log: g
                })]
            })
        }
        const x = Xi(h.filter(w => w.type !== P.RUN_COMPLETE)),
            y = (x && i.get(x.id)) ? .status === Vt.RESOLVED;
        return p.jsx(Qf, {
            statusLogs: c,
            firstLog: g ? ? null,
            lastLog: x ? ? null,
            duration: d,
            isComplete: u,
            isHintResolved: y,
            isLast: r,
            children: p.jsx("ol", {
                children: h.map(w => p.jsx(Yf, {
                    log: w,
                    isStale: s,
                    onClickLineNumber: e,
                    onClickFix: t,
                    hint: i.get(w.id)
                }, w.id))
            })
        })
    },
    yi = Fs({
        success: {
            id: "laZI5H",
            defaultMessage: "Run successfully"
        },
        run: {
            id: "o7dgBT",
            defaultMessage: "Run"
        }
    }),
    eu = `You're a professional developer highly skilled in debugging. The user ran the textdoc's code, and an error was thrown.
Please think carefully about how to fix the error`,
    iu = (n, t, e) => {
        const i = Zo(n, e);
        return `
${eu}, and then rewrite the textdoc to fix it.

- NEVER change existing test cases unless they're clearly wrong.
- ALWAYS add more test cases if there aren't any yet.
- ALWAYS ask the user what the expected behavior is in the chat if the code is not clear.

${t?`# Hint

${t}

`:""}
# Error

${i}`.trim()
    },
    su = ({
        codeRunMessages: n,
        scrollRef: t,
        onClose: e,
        onClickLineNumber: i,
        onClickFix: s,
        title: r,
        headerActions: o,
        lastRunId: l,
        hints: a
    }) => {
        const c = a.size > 0,
            h = b.useMemo(() => Object.entries(Ul(n, "runId")), [n]),
            f = h.some(([, u]) => {
                const d = u.filter(Qo);
                return d.length > 1 || d.length === 1 && tl(d[0])
            });
        return p.jsxs(p.Fragment, {
            children: [p.jsx(Df, {
                title: r,
                actions: o,
                onClose: e,
                showBorder: n.length > 0
            }), p.jsx("div", {
                ref: t,
                className: "flex flex-1 flex-col-reverse overflow-auto bg-token-main-surface-primary",
                children: p.jsx("ol", {
                    className: "flex flex-1 flex-col justify-start pb-4",
                    children: p.jsx(Ge, {
                        children: h.map(([u, d], g) => p.jsx(tu, {
                            runMessages: d,
                            includeContentBefore: f || c,
                            onClickFix: s,
                            onClickLineNumber: i,
                            hints: a,
                            isStale: u !== l,
                            isLast: g === h.length - 1
                        }, u))
                    })
                })
            })]
        })
    },
    nu = ({
        sandboxRef: n,
        textdocContent: t,
        textdocTitle: e,
        textdocId: i,
        isOpen: s,
        isTextdocAttachedPending: r,
        headerActions: o = [],
        highlightLine: l,
        createTextdocTurn: a,
        onOpenChange: c
    }, h) => {
        const [f, u] = b.useState(!1), [d, g] = b.useState(!1), [x, m] = b.useState([]), [y, w] = b.useState(0), [S, v] = b.useState(null), [C, A] = b.useState(null), [O, N] = b.useState(() => new Map), [st, gt] = b.useState(320), ct = b.useRef(null), nt = me();
        b.useEffect(() => A(null), [t]);
        const mt = x.filter(j => [P.LOG, P.ERROR, P.OUTPUT].includes(j.type)).length;
        b.useEffect(() => {
            s && w(mt)
        }, [s]);
        const Q = b.useMemo(() => {
                for (let j = x.length - 1; j >= 0; j--) {
                    const q = x[j];
                    if (q.runId !== C) return null;
                    if (q.type === P.ERROR) return q
                }
                return null
            }, [x, C]),
            ft = (j, q, rt) => {
                const F = O.get(q);
                if (F) {
                    const {
                        id: at,
                        content: $t
                    } = F;
                    N(ji => {
                        const ut = new Map(ji);
                        return ut.set(at, {
                            id: at,
                            content: $t,
                            status: Vt.RESOLVED
                        }), ut
                    })
                }
                v(q), a({
                    sourceEvent: j,
                    action: Ar.EDIT,
                    userMessageType: Gl.CONSOLE,
                    content: iu(t, F ? .content ? ? null, rt)
                })
            },
            At = async (j, q) => {
                if (!r) {
                    N(rt => {
                        const F = new Map(rt);
                        return F.set(j, {
                            id: j,
                            status: Vt.LOADING,
                            content: ""
                        }), F
                    });
                    try {
                        const rt = await If(i, t, q);
                        N(F => {
                            const at = new Map(F);
                            return at.set(j, {
                                id: j,
                                status: Vt.READY,
                                content: rt
                            }), at
                        })
                    } catch {
                        N(F => {
                            const at = new Map(F);
                            return at.delete(j), at
                        })
                    }
                }
            },
            bt = async (j, q) => {
                const rt = Ia(j, q),
                    F = La(j, q),
                    at = Pa(j);
                if (!rt || !at && !F) return;
                at && c ? .(!0), g(!0), m(ut => ut.map(we => ({ ...we,
                    isStale: !0
                })));
                let $t = !1;
                const ji = Ve(n.current).evalAsync({
                    code: q,
                    language: rt
                });
                for await (const ut of ji) {
                    if (ut.type === P.RUN_START && requestAnimationFrame(() => {
                            ct.current ? .scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }), ut.type === P.ERROR) {
                        if (ut.line != null) {
                            const {
                                line: we
                            } = ut;
                            requestAnimationFrame(() => l(we))
                        }
                        $t = !0, At(ut.id, ut)
                    }
                    A(ut.runId), m(we => [...we, { ...ut,
                        isStale: !1
                    }])
                }
                $t && c ? .(!0), g(!1)
            };
        b.useImperativeHandle(h, () => ({
            runCode: bt,
            stopCode: () => n.current ? .stop()
        }));
        const vt = !s && d,
            B = vt && Q && Q.id !== S,
            D = !B && vt && mt > y;
        return p.jsxs(Ge, {
            children: [f && p.jsx("div", {
                className: "pointer-events-auto absolute inset-0 bg-transparent"
            }, "drag-overlay"), D && p.jsx($.button, {
                initial: {
                    scale: .95,
                    opacity: 0
                },
                exit: {
                    scale: .95,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    bounce: .12,
                    duration: .3
                },
                className: "absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-token-main-surface-primary px-3 py-1.5 shadow-lg hover:bg-token-main-surface-secondary",
                onClick: () => c ? .(!0),
                children: p.jsxs("span", {
                    className: "flex items-center gap-1 text-sm text-token-text-secondary",
                    children: [p.jsx(ql, {
                        className: "icon-sm"
                    }), p.jsx(K, {
                        id: "etzFTa",
                        defaultMessage: "{numLogs, plural, one {{numLogs} message} other {{numLogs} messages}}",
                        values: {
                            numLogs: mt
                        }
                    })]
                })
            }, "view-console"), B && p.jsx(Pf, {
                textdocTitle: e,
                onClickViewConsole: () => c ? .(!0),
                onDismiss: () => v(Q.id),
                onClickFix: j => {
                    ft(j, Q.id, Q.error)
                }
            }, "error-modal"), s && p.jsxs($.div, {
                initial: {
                    translateY: "100%",
                    opacity: 0
                },
                animate: {
                    translateY: "0%",
                    opacity: 1
                },
                exit: {
                    translateY: "100%",
                    opacity: 0
                },
                transition: {
                    type: "spring",
                    bounce: 0,
                    duration: .48
                },
                className: "relative z-10 w-full border-t border-token-border-light shadow-[0px_0px_32px_rgba(0,0,0,0.08)]",
                children: [p.jsx(Lf, {
                    onDragEnd: () => u(!1),
                    onDrag: ({
                        delta: {
                            y: j
                        }
                    }) => {
                        u(!0), gt(q => q - j)
                    }
                }), p.jsx("div", {
                    className: "flex flex-col",
                    style: {
                        height: st
                    },
                    children: p.jsx(su, {
                        scrollRef: ct,
                        codeRunMessages: x,
                        onClose: () => c ? .(!1),
                        onClickLineNumber: l,
                        onClickFix: ft,
                        title: nt.formatMessage({
                            id: "P9VJDk",
                            defaultMessage: "Console"
                        }),
                        headerActions: [...o, {
                            tooltip: nt.formatMessage({
                                id: "gAICYK",
                                defaultMessage: "Clear console"
                            }),
                            icon: Kl,
                            onClick: () => {
                                w(0), m([]), N(new Map)
                            }
                        }],
                        lastRunId: C,
                        hints: O
                    })
                })]
            }, "console")]
        })
    },
    Hu = b.forwardRef(nu);
class ru {
    dependencies() {
        return []
    }
    unifiedInitializationHook(t) {
        return t
    }
}
class gl extends ru {
    unistToProseMirrorTest(t) {
        return t.type === this.unistNodeName()
    }
    proseMirrorInputRules(t) {
        return []
    }
    proseMirrorKeymap(t) {
        return {}
    }
    postUnistToProseMirrorHook(t) {}
}
class Vu extends gl {
    proseMirrorToUnistTest(t) {
        return this.proseMirrorNodeName() === t.type.name
    }
    proseMirrorNodeView() {
        return null
    }
    proseMirrorNodeName() {
        return this.constructor.proseMirrorNodeName()
    }
    static proseMirrorNodeName() {
        throw new Error("Method not implemented.")
    }
}
class ou extends gl {
    proseMirrorMarkName() {
        return this.constructor.proseMirrorMarkName()
    }
    static proseMirrorMarkName() {
        throw new Error("Method not implemented.")
    }
}
class lu extends ou {
    unistNodeName() {
        return "startend"
    }
    static proseMirrorMarkName() {
        return "startend"
    }
    proseMirrorMarkSpec() {
        return {
            attrs: {
                start: {},
                end: {}
            },
            toDOM() {
                return ["span", 0]
            }
        }
    }
    unistNodeToProseMirrorNodes({
        schema: t,
        convertedChildren: e,
        attrs: i
    }) {
        return e.map(s => s.mark(s.marks.concat([t.marks[this.proseMirrorMarkName()].create(i)])))
    }
    processConvertedUnistNode(t) {
        return {
            type: this.unistNodeName(),
            children: [t]
        }
    }
}

function Ei(n) {
    if (n.type.name !== "text") {
        const {
            start: s,
            end: r
        } = n.attrs;
        return s == null || r == null ? null : {
            start: s,
            end: r
        }
    }
    const t = n.marks.find(s => s.type.name === lu.proseMirrorMarkName());
    if (!t) return null;
    const {
        start: e,
        end: i
    } = t.attrs;
    return e == null || i == null ? null : {
        start: e,
        end: i
    }
}

function au(n, t) {
    const {
        parent: e,
        textOffset: i
    } = t, s = n.nodeAt(t.pos);
    if (!s) return Ve(Ei(e)).end;
    const {
        start: r
    } = Ve(Ei(s));
    return r + i
}

function hu(n, t) {
    const e = n.nodeAt(t.pos);
    if (e) {
        const {
            start: i
        } = Ve(Ei(e));
        return i + t.textOffset
    }
    return Ve(Ei(t.parent)).end
}

function Fu(n, t) {
    const e = new Map;
    for (const [i, s] of t) {
        const r = au(n, n.resolve(s.start)),
            o = hu(n, n.resolve(s.end));
        e.set(i, {
            start: r,
            end: o
        })
    }
    return e
}
const cu = b.createContext(() => null),
    fu = b.createContext(null),
    uu = b.createContext(0),
    Wu = () => b.useContext(cu),
    _u = () => b.useContext(fu),
    zu = () => b.useContext(uu),
    du = b.createContext(() => null),
    pu = b.createContext(null),
    qu = b.createContext(0),
    Ku = () => b.useContext(du),
    Uu = () => b.useContext(pu),
    gu = n => b.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        ...n
    }, b.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM9 8.963v6.074c0 .9.996 1.444 1.754.957l4.723-3.037a1.138 1.138 0 0 0 0-1.914l-4.723-3.037A1.138 1.138 0 0 0 9 8.963Z",
        clipRule: "evenodd"
    }));

function Gu({
    isDisabled: n = !1,
    isCodePreviewable: t = !1,
    isCodeRunning: e,
    disabledTooltip: i,
    clientThreadId: s,
    textdocType: r,
    onClick: o
}) {
    const [l, a] = b.useState(e), c = $l(en.hasSeenCanvasCodeExecutionNux), [h, f] = b.useState(null), u = b.useRef(null);
    b.useEffect(() => {
        if (u.current) {
            const S = u.current.offsetWidth;
            f(S)
        }
    }, [l]), b.useEffect(() => {
        let S = null;
        return !e || t ? a(e) : (S = setTimeout(() => {
            a(e)
        }, 200), () => clearTimeout(S))
    }, [e, t]);
    const d = () => ({
            conversation_id: s ? oa(s) : void 0
        }),
        g = () => {
            na.logEventWithStatsig(ra.canvasRunCodeButtonClicked, "chatgpt_canvas_run_code_button_clicked", d()), setTimeout(() => o ? .())
        },
        x = p.jsx($.button, {
            disabled: n || e && !l,
            onClick: g,
            className: R("btn rounded-full border transition-colors", l ? R(da, "border-transparent") : "border-token-border-light bg-transparent hover:bg-token-surface-hover"),
            animate: {
                width: h ? ? 0
            },
            initial: {
                width: h ? ? 0
            },
            transition: {
                type: "spring",
                bounce: .24,
                duration: .4
            },
            children: p.jsx("div", {
                ref: u,
                children: l ? p.jsxs($.div, {
                    className: "flex items-center gap-2 px-4",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .3
                    },
                    children: [p.jsx(ma, {
                        className: "icon-md"
                    }), p.jsx(K, { ...ke.stopCode
                    })]
                }) : p.jsxs($.div, {
                    className: "flex items-center gap-2 px-4",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .3
                    },
                    children: [p.jsx(gu, {
                        className: "icon-md"
                    }), p.jsx(K, { ...t ? ke.previewCode : ke.runCode
                    })]
                })
            })
        }),
        m = !c.isLoading && c.eligible,
        y = n && i ? i : e ? null : p.jsx(K, { ...t ? ke.previewCodeTooltip : ke.runCodeTooltip
        }),
        w = b.useMemo(() => {
            if (!r) return "canvas";
            switch (r) {
                case St.CODE_JAVASCRIPT:
                    return "JavaScript";
                case St.CODE_TYPESCRIPT:
                    return "TypeScript";
                case St.CODE_HTML:
                    return "HTML";
                case St.CODE_PYTHON:
                    return "Python";
                case St.CODE_REACT:
                    return "React"
            }
            return wr(r) ? ? "canvas"
        }, [r]);
    return m ? p.jsx(Yl, {
        announcementKey: en.hasSeenCanvasCodeExecutionNux,
        show: !0,
        side: "bottom",
        align: "end",
        theme: "bright",
        dismissOnOutsideClick: !0,
        badge: "new",
        title: t ? p.jsx(K, {
            id: "O8VBVO",
            defaultMessage: "Preview your output"
        }) : p.jsx(K, {
            id: "2sN/zT",
            defaultMessage: "Run {language}",
            values: {
                language: w
            }
        }),
        description: t ? p.jsx(K, {
            id: "CMJOVI",
            defaultMessage: "Run your code to see how it looks and interact with the output."
        }) : p.jsx(K, {
            id: "ew1tTJ",
            defaultMessage: "See your output and get help debugging without leaving the canvas."
        }),
        onDismiss: c.markAsViewed,
        sideOffset: 0,
        children: x
    }) : y ? p.jsx(Ri, {
        label: y,
        children: x
    }) : x
}
const ke = Fs({
    previewCode: {
        id: "a08baM",
        defaultMessage: "Preview"
    },
    runCode: {
        id: "O/1aYA",
        defaultMessage: "Run"
    },
    stopCode: {
        id: "nCwG4+",
        defaultMessage: "Stop"
    },
    runCodeTooltip: {
        id: "UeNB/S",
        defaultMessage: "See output and debug"
    },
    previewCodeTooltip: {
        id: "XLZZHl",
        defaultMessage: "Preview your output"
    }
});
export {
    De as $, xe as A, Cf as B, ku as C, W as D, T as E, E as F, Gt as G, Mu as H, Xo as I, kf as J, Mf as K, cu as L, fu as M, uu as N, X as O, zs as P, Bt as Q, _e as R, U as S, Gu as T, qs as U, Pt as V, ye as W, fh as X, it as Y, fe as Z, Zi as _, M as a, It as a0, pf as a1, Nu as a2, pt as a3, Au as a4, jt as a5, Lt as a6, Vu as a7, Ba as a8, Ka as a9, bi as aa, Ua as ab, qa as ac, Bu as ad, Ar as ae, Vf as af, Qs as ag, ju as ah, nl as ai, au as aj, hu as ak, Ls as al, ou as am, Ou as an, lu as ao, ru as ap, Fu as aq, du as ar, pu as as, qu as at, _u as b, zu as c, Ga as d, Pa as e, Hu as f, Ia as g, Ku as h, La as i, Ei as j, Uu as k, wt as l, z as m, I as n, Du as o, L as p, ue as q, J as r, Lu as s, Tu as t, Wu as u, Ru as v, Pu as w, Wc as x, Iu as y, Ni as z
};
//# sourceMappingURL=npk39rv6apmoavn4.js.map