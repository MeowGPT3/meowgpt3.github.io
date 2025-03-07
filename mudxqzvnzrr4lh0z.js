import {
    u as R,
    j as e,
    M as x,
    ax as I,
    e as W,
    c as B,
    av as S,
    r as G
} from "./mna1wiucqak6lqzp.js";
import {
    G as K
} from "./nmr5d79kmws977p2.js";
import {
    f as Q,
    gs as Y,
    gt as C,
    gu as q,
    gv as Z,
    gw as $,
    gx as z,
    U as J,
    gy as b,
    fQ as V,
    fP as X,
    e7 as ee,
    gz as te,
    gA as se,
    gB as ae,
    y as L,
    g4 as ne,
    g0 as ie,
    gC as re,
    gD as oe,
    gE as ce,
    gF as le,
    a1 as de,
    gG as j,
    d3 as M,
    gH as ue
} from "./lwme42j7zzyr3q7j.js";
import {
    bs as xe,
    ak as me,
    cp as he,
    bZ as F,
    aa as pe,
    z as ge,
    e8 as fe,
    B as _e,
    d as h,
    k as ve,
    Y as je,
    a0 as P,
    g5 as ye,
    av as be,
    bu as Se
} from "./bq4rrqi54riy5k2e.js";
import {
    a as we,
    b as Ne,
    t as ke
} from "./cxz91putlw7pmfk2.js";
import {
    P as Ce
} from "./m3b3wk7x0ejaq5a6.js";
const Me = xe.section `max-w-md flex flex-col gap-2 rounded-2xl border border-token-border-light p-4 shadow items-center`;

function Fe() {
    const {
        data: t,
        isLoading: i
    } = R({
        queryKey: ["user_connection_status"],
        queryFn: Q.user_connection_status,
        refetchInterval: s => {
            const d = s.state.status === "success" && s.state.data && !s.state.data.connection_statuses.some(l => l.user_connection_details.activation_status === "activating" || l.user_connection_details.activation_status === "partially_activated");
            return s.state.status === "success" && s.state.data && s.state.data.connection_statuses.some(l => (l.user_connection_details.auth_status === "user_connected" || l.user_connection_details.auth_status === "admin_connected") && !(l.user_connection_details.activation_status === "activating" || l.user_connection_details.activation_status === "partially_activated" || l.user_connection_details.activation_status === "activated")) ? 2e3 : d ? !1 : 3e4
        }
    }), n = me(), r = Y(n), o = t ? .connection_statuses.filter(s => s.user_connection_details.activation_status === "activated" || s.user_connection_details.activation_status === "partially_activated" || s.user_connection_details.activation_status === "activating") ? .sort(C) ? ? [], a = t ? .connection_statuses.filter(s => s.user_connection_details.activation_status === "inactive") ? .sort(C) ? ? [];
    return e.jsxs(Me, {
        className: "m-4 w-full text-center",
        children: [e.jsx("p", {
            className: "mb-1 text-lg font-bold text-token-text-primary",
            children: e.jsx(x, {
                id: "1NWyN0",
                defaultMessage: "Ask ChatGPT about work"
            })
        }), e.jsx("p", {
            className: "mb-1 text-sm text-token-text-secondary",
            children: e.jsx(x, {
                id: "rkdEvr",
                defaultMessage: "Connect your work accounts to ChatGPT."
            })
        }), i ? e.jsx("div", {
            className: "my-1 w-full",
            children: e.jsx(Ce, {
                lines: 4,
                size: "lg"
            })
        }) : e.jsx(I, {
            children: e.jsxs("div", {
                className: "my-1 w-full",
                children: [!!o ? .length && e.jsx("p", {
                    className: "text-sm font-medium text-token-text-secondary",
                    children: e.jsx(x, {
                        id: "UIeg+C",
                        defaultMessage: "Connected sources"
                    })
                }), o.map(s => e.jsx(T, {
                    connection: s
                }, s.user_connection_details.connection_instance_id)), !!a.length && e.jsx("p", {
                    className: "mt-4 text-sm font-medium text-token-text-secondary",
                    children: e.jsx(x, {
                        id: "m+xjka",
                        defaultMessage: "Available to connect"
                    })
                }), a.map(s => e.jsx(T, {
                    connection: s
                }, s.user_connection_details.connection_instance_id))]
            })
        }), r && e.jsx("p", {
            className: "max-w-64 text-xs text-token-text-tertiary",
            children: e.jsx(x, {
                id: "K/YIKe",
                defaultMessage: "{workspaceName} workspace chats and connections aren't used to train our models.",
                values: {
                    workspaceName: r
                }
            })
        })]
    })
}

function T({
    connection: t
}) {
    let i;
    const n = W(),
        r = B();
    switch (t.user_connection_details.activation_status) {
        case "activated":
            {
                i = e.jsx("span", {
                    className: "text-green-500",
                    children: e.jsx(F, {
                        className: "icon-md"
                    })
                });
                break
            }
        case "partially_activated":
            {
                i = e.jsx("span", {
                    className: "text-yellow-500",
                    children: e.jsx(F, {
                        className: "icon-md"
                    })
                });
                break
            }
        case "activating":
            {
                i = e.jsx(he, {});
                break
            }
        case "inactive":
            {
                i = e.jsx("span", {
                    children: e.jsx(q, {
                        connection: t,
                        redirectTo: n.pathname + n.search + n.hash
                    })
                });
                break
            }
    }
    return e.jsxs(S.div, {
        className: "m-2 flex flex-col gap-2 rounded-xl border border-token-border-light px-6 py-4",
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
        children: [e.jsxs("div", {
            className: "flex flex-row items-center gap-4 text-start",
            children: [e.jsx("img", {
                src: t.connection_display_info.icon_url ? ? "",
                alt: "",
                className: "icon-lg"
            }), e.jsx("p", {
                className: "flex-1 text-sm font-semibold text-token-text-primary",
                children: t.connection_display_info.display_name
            }), i]
        }), t.user_connection_details.activation_status === "partially_activated" && e.jsx("p", {
            className: "text-xs text-token-text-secondary",
            children: e.jsx(x, {
                id: "hPtrmQ",
                defaultMessage: "Your {objectTypePlural} are ready to search, but we are still syncing data. Results may be incomplete until syncing is done.",
                values: {
                    objectTypePlural: Z(t.user_connection_details.knowledge_connector_type, r).objectTypePlural
                }
            })
        })]
    })
}

function E() {
    const {
        store: t
    } = $(), i = t.useSharedProps(), n = we(), {
        clearSystemHintModeTrigger: r,
        getSystemHintModeTrigger: o
    } = Ne(), {
        value: a
    } = pe("1988730211"), s = !z.useDisabledGlobally();
    return G.useCallback((d, c, l, u) => {
        if (!i) return;
        const {
            clientThreadId: p,
            onCreateNewCompletion: g,
            onResetState: f,
            conversationMode: y
        } = i;
        J.hideThreadHeader();
        const _ = n.has(b.Search),
            v = _ ? o(b.Search) : void 0,
            m = ge(p),
            {
                systemHints: H,
                extraStreamParams: w
            } = a ? V(Array.from(n)) : {
                systemHints: Array.from(n),
                extraStreamParams: {}
            };
        s && (w.enableMessageFollowups = !0);
        const N = X(),
            k = {
                is_starter_prompt: !0,
                suggestion_type: c.type,
                starter_prompt_id: "id" in c ? c.id : void 0
            };
        N && (k.__internal = {
            search_settings: N
        });
        const D = fe(ee(c), k);
        g({
            promptMessage: D,
            sourceEvent: d,
            extraStreamParams: w,
            completionMetadata: {
                suggestions: l,
                suggestion: c,
                suggestionIndex: u,
                conversationMode: y ? ? m ? .mode,
                systemHints: H,
                searchSource: v
            }
        });
        const O = _e.getMessageId(m);
        f(), te(c, u, p, O), se() || ke(), v && _ && r(b.Search)
    }, [i, n, o, a, r, s])
}

function We({
    clientThreadId: t
}) {
    const {
        isUnauthenticated: i
    } = ve(), n = !i, r = je(t), o = P(t, m => m ? .isLoading), a = ye(), s = L(), d = E(), c = P(t, m => m ? .modelId ? ? ne), l = ie(c), {
        promptStarters: u,
        isSuccess: p,
        isError: g
    } = re(r && !o, t, s ? 2 : 4, void 0, void 0, c ? ? void 0), f = u && u ? .length > 0, y = p && f && n && !l, {
        layer: _
    } = be("4031588851"), v = _.get("is_two_line", !1);
    return e.jsx(e.Fragment, {
        children: e.jsx(I, {
            children: (g || p) && e.jsxs(e.Fragment, {
                children: [e.jsx(Se, {
                    className: `h-12 w-12 ${n?"":"max-sm:hidden"}`
                }), y && e.jsx(Pe, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .3
                    },
                    promptStarters: u,
                    onSelectStarterPrompt: d,
                    isSendBlocked: a,
                    clientThreadId: t,
                    isTwoLine: v
                }), !f && n && !l && e.jsx(A, {}), l ? e.jsx(Fe, {}) : null, g && n && e.jsx(A, {})]
            })
        })
    })
}

function A() {
    return e.jsx("div", {
        className: "mt-7 text-3xl",
        children: e.jsx(x, {
            id: "24tuqq",
            defaultMessage: "Hi, how can I help?"
        })
    })
}

function Pe({
    promptStarters: t,
    onSelectStarterPrompt: i,
    isSendBlocked: n,
    clientThreadId: r,
    isTwoLine: o,
    ...a
}) {
    return G.useEffect(() => {
        oe(t, r)
    }, [r]), e.jsx(e.Fragment, {
        children: o ? e.jsx(S.div, { ...a,
            className: "absolute bottom-6 w-full px-4",
            children: e.jsx(ce, {
                children: e.jsx(Ae, {
                    starterPrompts: t,
                    onSelectStarterPrompt: i,
                    disabled: n
                })
            })
        }) : e.jsx(S.div, { ...a,
            children: e.jsx(U, {
                starterPrompts: t,
                onSelectStarterPrompt: i,
                disabled: n
            })
        })
    })
}
const Te = /\s/;

function U({
    starterPrompts: t,
    onSelectStarterPrompt: i,
    disabled: n,
    cssMobileDisplayLimit: r,
    marginOverride: o
}) {
    let a = t.map((s, d) => {
        let c = s.oneliner ? ? s.title;
        c === "" && (c = s.body);
        const l = Te.test(c);
        return e.jsxs("button", {
            className: h(r !== void 0 && d >= r && "max-sm:hidden", "relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed"),
            disabled: n,
            onClick: u => i(u, s, t, d),
            children: [e.jsx(ae, {
                category: s.category
            }), e.jsx("div", {
                className: h("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500", l ? "break-word" : "break-all"),
                children: c
            })]
        }, s.id ? ? d)
    });
    if (a.length > 2) {
        const s = Math.floor(a.length / 2);
        a = [a.slice(0, s), a.slice(s)].map((d, c) => e.jsx("div", {
            className: "flex max-w-3xl flex-wrap items-stretch justify-center gap-4",
            children: d
        }, c))
    }
    return e.jsx("div", {
        className: h("mx-3 flex max-w-3xl flex-wrap items-stretch justify-center gap-4", o ? ? "mt-12"),
        children: a
    })
}

function Ae({
    starterPrompts: t,
    onSelectStarterPrompt: i,
    disabled: n
}) {
    let r = t.map((a, s) => e.jsx("button", {
        className: "relative whitespace-nowrap rounded-2xl border border-token-border-light px-4 py-2 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",
        disabled: n,
        onClick: d => i(d, a, t, s),
        children: e.jsxs("div", {
            className: "flex flex-col overflow-hidden",
            children: [a.title && e.jsx("div", {
                className: "truncate font-semibold",
                children: a.title
            }), e.jsx("div", {
                className: h("truncate font-normal", a.title ? "opacity-50" : ""),
                children: a.body
            })]
        })
    }, a.id ? ? s));
    const o = Math.floor(r.length / 2);
    return r = [r.slice(0, o), r.slice(o)].map((a, s) => e.jsx("div", {
        className: "flex flex-col gap-2",
        children: a
    }, s)), e.jsx("div", {
        className: "grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2",
        children: r
    })
}

function Be({
    gizmo: t,
    hideOwner: i = !1,
    children: n,
    className: r,
    avatarClassName: o,
    showStarterPrompts: a = !1,
    disableStarterPrompts: s = !1
}) {
    return t == null ? null : e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: h("flex h-full flex-col items-center justify-center text-token-text-primary", "screen-arch:min-h-[calc(100dvh-var(--thread-leading-height)-var(--thread-trailing-height)-12px)]", r),
            children: [e.jsx(Ie, {
                gizmo: t,
                avatarClassName: o
            }), e.jsx(Le, {
                gizmo: t,
                hideOwner: i,
                showStarterPrompts: a,
                disableStarterPrompts: s
            }), n]
        })
    })
}

function Ie({
    gizmo: t,
    avatarClassName: i
}) {
    const n = !!(t != null && le(t) && t ? .gizmo.tags ? .includes(de.FirstParty));
    return e.jsx("div", {
        className: "relative",
        children: e.jsx(K, {
            isFirstParty: n || !t,
            src: t != null && j(t) ? t.profilePictureUrl : t ? .gizmo.display.profile_picture_url,
            className: h("mb-3 h-12 w-12", i)
        })
    })
}

function Ge({
    gizmo: t,
    disabled: i
}) {
    const n = ue(t),
        r = E(),
        o = L();
    if (n == null || n.length === 0) return null;
    const a = n.slice(0, o ? 2 : 4);
    return e.jsx(U, {
        starterPrompts: a,
        onSelectStarterPrompt: r,
        disabled: i
    })
}

function Le({
    gizmo: t,
    hideOwner: i,
    showStarterPrompts: n,
    disableStarterPrompts: r
}) {
    const o = t != null && j(t) ? t.name : t ? .gizmo.display.name,
        a = t != null && j(t) ? t.description : t ? .gizmo.display.description;
    return e.jsxs("div", {
        className: "flex flex-col items-center gap-2",
        children: [e.jsx("div", {
            className: "text-center text-2xl font-semibold",
            children: o
        }), !i && e.jsx("div", {
            className: "flex items-center gap-1 text-token-text-tertiary",
            children: e.jsx(e.Fragment, {
                children: t && j(t) ? e.jsx(M, {
                    gizmo: t
                }) : e.jsx(M, {
                    gizmo: t,
                    socials: t.gizmo.author.display_socials
                })
            })
        }), a && e.jsx("div", {
            className: "max-w-md text-center text-sm font-normal text-token-text-primary",
            children: a
        }), n && e.jsx(Ge, {
            gizmo: t,
            disabled: r
        })]
    })
}
export {
    Be as G, Ie as L, Ae as S, We as a, E as u
};
//# sourceMappingURL=mudxqzvnzrr4lh0z.js.map