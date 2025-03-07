const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/ihors7v1ehg5i95p.js", "assets/mna1wiucqak6lqzp.js", "assets/lwme42j7zzyr3q7j.js", "assets/bq4rrqi54riy5k2e.js", "assets/root-ey6kd8gf.css", "assets/conversation-small-fu0y35oi.css", "assets/nua4jcmpkdn1q3vx.js", "assets/bcieds2s0jraaq45.js", "assets/h2mbwvf3xs6tkgoi.js", "assets/mi93vnc3bxzyhv3q.js", "assets/incso7gaflms21pb.js", "assets/gy64pge8qevmvg7e.js", "assets/gq9abw1va9gio5vu.js", "assets/mvhqd4tvzpjcyc7r.js"]))) => i.map(i => d[i]);
import {
    r as m,
    a as Qe,
    j as e,
    M as C,
    c as ee,
    av as ye,
    R as We
} from "./mna1wiucqak6lqzp.js";
import {
    gx as Ye,
    hk as Ke,
    j7 as Ze,
    fQ as Je,
    bs as $e,
    ft as Xe,
    j8 as es,
    j9 as Ee,
    ja as ss,
    jb as ts,
    ee as as,
    hb as ns,
    jc as os,
    jd as rs,
    gy as is,
    je as ls,
    jf as cs,
    jg as ds,
    jh as Y,
    ji as we,
    ao as us,
    jj as ms,
    jk as Re,
    fZ as $,
    gI as gs,
    gJ as fs,
    gK as xs,
    gL as hs,
    jl as ps,
    U as vs,
    h0 as js,
    jm as Ms,
    jn as ys,
    v as bs,
    jo as Cs,
    eh as be,
    jp as Ts,
    cn as le,
    dI as _s,
    jq as Ss,
    jr as Es,
    js as ws,
    jt as Rs,
    ju as ks,
    jv as Ns,
    jw as Ds,
    jx as ne,
    jy as Ps,
    jz as As,
    jA as Ls,
    jB as ke,
    jC as Is,
    bN as Fs,
    jD as Bs,
    jE as Us,
    jF as Hs,
    jG as Gs,
    jH as Os,
    hz as oe,
    jI as qs,
    jJ as Vs
} from "./lwme42j7zzyr3q7j.js";
import {
    gk as zs,
    fd as Qs,
    B as de,
    z as X,
    fW as Ws,
    aI as Ys,
    e9 as Ce,
    bz as se,
    bA as ue,
    a6 as Ne,
    aK as Q,
    d as A,
    aL as K,
    a0 as me,
    ab as De,
    as as Pe,
    b_ as Ks,
    S as H,
    cv as G,
    e6 as Zs,
    cr as Js,
    cs as $s,
    bY as B,
    P as Ae,
    a as W,
    eB as Xs,
    ci as et,
    r as Le,
    bp as st,
    gl as tt,
    N as Ie,
    l as at,
    T as Fe,
    d1 as nt,
    eG as ot,
    gm as rt,
    bL as it,
    bj as lt,
    gn as ct,
    go as dt,
    D as ut,
    gp as mt,
    gq as gt,
    aB as ft,
    gr as xt,
    x as ht
} from "./bq4rrqi54riy5k2e.js";
import {
    a as pt,
    g as vt
} from "./cxz91putlw7pmfk2.js";

function Be({
    clientThreadId: s,
    conversationMode: t
}) {
    const r = m.useContext(zs),
        o = Qe(),
        n = Qs(),
        a = pt(),
        d = Ye.useIsEnabled(s),
        {
            data: c
        } = Ke();
    return ({
        nodeId: i,
        sourceEvent: g,
        requestedModelId: v,
        appendMessages: f,
        extraStreamParams: l
    }) => {
        const M = de.getTree(X(s)),
            b = M.getParentPromptNode(i),
            j = M.getConversationTurns(i, !1),
            u = j ? .[j ? .length - 1].variantIds ? .length === 1 && l ? .forceUseSearch === void 0,
            h = Ws(o, n);
        let y = [];
        if (v) {
            const _ = Ze(h ? .models, v),
                R = vt({
                    modelConfig: _,
                    systemHints: c ? ? []
                }).map(E => E.systemHint);
            y = Array.from(a).filter(E => R.includes(E))
        }
        d && (l = { ...l ? ? {},
            enableMessageFollowups : !0
        });
        const {
            systemHints: p,
            extraStreamParams: k
        } = Je(y, l);
        r({
            completionType: Ys.Variant,
            requestedModelId: v,
            sourceEvent: g,
            completionMetadata: {
                variantPurpose: u ? "comparison_implicit" : "none",
                conversationMode: t ? ? X(s) ? .mode,
                systemHints: p ? ? b.message.metadata ? .system_hints,
                searchSource: l ? .forceUseSearch === !0 ? Ce.CONVERSATION_REGENERATE_WITH_SEARCH : l ? .forceUseSearch === !1 ? Ce.CONVERSATION_REGENERATE_WITHOUT_SEARCH : void 0
            },
            parentMessageId: b.id,
            appendMessages: f,
            extraStreamParams: k
        })
    }
}
const jt = se(() => ue(() =>
        import ("./ihors7v1ehg5i95p.js").then(s => s.F), __vite__mapDeps([0, 1, 2, 3, 4, 5]))),
    Mt = ({
        errorState: s,
        nodeId: t,
        clientThreadId: r,
        isFeedbackEnabled: o,
        isUserTurn: n
    }) => {
        const {
            value: a
        } = Ne("3779321121"), d = de.isLastActorMessage(X(r), t), c = s.canRetry && d && (a || s.errCode === Q.ModelCapExceeded);
        if (n) {
            const i = s ? .flagSeverity;
            return e.jsxs("div", {
                className: "flex w-full flex-col items-end justify-between gap-2",
                children: [e.jsxs("div", {
                    className: A("flex max-w-[var(--user-chat-width,70%)] flex-row-reverse items-start gap-1 text-start text-sm", i === "danger" && "text-token-text-error", i === "warning" && "text-orange-600", (i === "info" || !i) && "text-token-text-secondary"),
                    children: [e.jsx($e, {
                        className: A("icon-md mt-[0.0625em] shrink-0")
                    }), e.jsx(Te, {
                        errorState: s,
                        clientThreadId: r,
                        isFeedbackEnabled: o
                    })]
                }), c && e.jsx(Se, {
                    clientThreadId: r,
                    nodeId: t,
                    errorState: s
                })]
            })
        }
        return e.jsx(Xe, {
            type: s ? .flagSeverity,
            className: "mb-2 w-fit self-start",
            primaryAction: c && e.jsx(Se, {
                clientThreadId: r,
                nodeId: t,
                errorState: s
            }),
            children: e.jsx("div", {
                className: "flex flex-row items-center justify-between gap-4",
                children: e.jsx(Te, {
                    errorState: s,
                    clientThreadId: r,
                    isFeedbackEnabled: o
                })
            })
        })
    },
    Te = ({
        errorState: s,
        clientThreadId: t,
        isFeedbackEnabled: r
    }) => {
        const {
            errCode: o,
            errMessage: n
        } = s;
        switch (o) {
            case K.ContentPolicy:
                return e.jsx(Tt, {
                    isFeedbackEnabled: r
                });
            case K.ModelIncompatibility:
                return e.jsx(C, {
                    id: "cyOWhN",
                    defaultMessage: "Your request was flagged as potentially violating our usage policy. Please try again with a different prompt."
                });
            case K.ContentOrTos:
                return e.jsx(bt, {
                    isFeedbackEnabled: r
                });
            case K.ContentRegurgitation:
                return e.jsx(Ct, {});
            case Q.ModelCapExceeded:
                return e.jsx(yt, {
                    clientThreadId: t
                });
            case Q.HistoryDisabledConversationNotFound:
                return e.jsx(C, {
                    id: "TextMessageDisplay.historyDisabledConversationMissing",
                    defaultMessage: "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT."
                });
            case Q.MissingLastCompletion:
                return e.jsx(C, {
                    id: "TextMessageDisplay.somethingWentWrong",
                    defaultMessage: "Something went wrong."
                });
            default:
                return n ? e.jsx(jt, {
                    rehypePlugins: [
                        [es, {
                            target: "_new",
                            rel: "noopener noreferrer"
                        }]
                    ],
                    className: "markdown break-words [&>:last-child]:mb-0",
                    children: n
                }) : null
        }
    };

function yt({
    clientThreadId: s
}) {
    const t = Ee(a => a.isoDate),
        r = ss(t),
        o = me(s, a => a ? .mode),
        n = o && o.kind !== De.PrimaryAssistant;
    return t ? e.jsx(C, {
        id: "TextMessageDisplay.gptUsageCapExceededExpired",
        defaultMessage: "You previously reached your usage cap for GPT-4, but you can now try sending your message again"
    }) : e.jsx("span", {
        children: n != null ? e.jsx(C, {
            id: "TextMessageDisplay.gptUsageCapExceededCustomFeature",
            defaultMessage: "You've reached the current usage cap for GPT-4, please try again {formattedTime}. <link>Learn more</link>",
            values: {
                link: _e,
                formattedTime: r
            }
        }) : e.jsx(C, {
            id: "TextMessageDisplay.gptUsageCapExceeded",
            defaultMessage: "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again {formattedTime}. <link>Learn more</link>",
            values: {
                link: _e,
                formattedTime: r
            }
        })
    })
}
const _e = s => e.jsx("a", {
    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
    target: "_blank",
    rel: "noreferrer",
    className: "underline hover:no-underline",
    children: s
});

function bt({
    isFeedbackEnabled: s
}) {
    return e.jsxs("div", {
        children: [e.jsx("div", {
            className: s ? "font-semibold" : "",
            children: e.jsx(C, {
                id: "TextMessageDisplay.contentOrTosViolationNoFeedback",
                defaultMessage: "This content may violate our <termsLink>Terms of Use</termsLink> or <contentPolicyLink>usage policies</contentPolicyLink>.",
                values: {
                    contentPolicyLink: Ue,
                    termsLink: _t
                }
            })
        }), e.jsx("div", {
            children: s && e.jsx(C, {
                id: "TextMessageDisplay.contentPolicyFeedback",
                defaultMessage: "Did we get it wrong? Please tell us by giving this response a thumbs down."
            })
        })]
    })
}

function Ct() {
    return e.jsxs("div", {
        children: [e.jsx("div", {
            className: "font-semibold",
            children: e.jsx(C, {
                id: "kAMQnd",
                defaultMessage: "ChatGPT isn't designed to provide this type of content."
            })
        }), e.jsx("div", {
            children: e.jsx(C, {
                id: "fQ0JYv",
                defaultMessage: "Read the <modelSpecLink>Model Spec</modelSpecLink> for more on how ChatGPT handles creators' content.",
                values: {
                    modelSpecLink: St
                }
            })
        })]
    })
}

function Tt({
    isFeedbackEnabled: s
}) {
    return e.jsxs("div", {
        children: [e.jsx("div", {
            className: s ? "font-semibold" : "",
            children: e.jsx(C, {
                id: "TextMessageDisplay.contentPolicyViolationNoFeedback",
                defaultMessage: "This content may violate our <contentPolicyLink>usage policies</contentPolicyLink>.",
                values: {
                    contentPolicyLink: Ue
                }
            })
        }), e.jsx("div", {
            children: s && e.jsx(C, {
                id: "TextMessageDisplay.contentPolicyFeedback",
                defaultMessage: "Did we get it wrong? Please tell us by giving this response a thumbs down."
            })
        })]
    })
}
const Ue = s => e.jsx(ge, {
        href: "https://openai.com/policies/usage-policies",
        children: s
    }),
    _t = s => e.jsx(ge, {
        href: "https://openai.com/policies/terms-of-use",
        children: s
    }),
    St = s => e.jsx(ge, {
        href: "https://model-spec.openai.com",
        children: s
    }),
    ge = ({
        href: s,
        children: t
    }) => e.jsx("a", {
        target: "_blank",
        rel: "noreferrer",
        href: s,
        className: "underline hover:no-underline",
        children: t
    }),
    Se = ({
        clientThreadId: s,
        nodeId: t,
        errorState: r
    }) => {
        const o = Be({
                clientThreadId: s
            }),
            n = r ? .errCode === Q.ModelCapExceeded,
            a = Ee(j => j.isoDate),
            d = n && !!a,
            c = me(s, j => j ? .mode),
            i = c && c.kind !== De.PrimaryAssistant,
            g = d && !i,
            v = d && i,
            f = ts(),
            {
                data: l
            } = Pe(),
            M = as(l) ? .id,
            b = j => {
                n ? H.logEvent("chatgpt_regenerate_due_to_rate_limit_button_clicked", void 0, { ...G({
                        clientThreadId: s
                    }),
                    useDefaultModel: g ? "true" : "false"
                }) : H.logEvent("chatgpt_regenerate_due_to_error_button_clicked", void 0, { ...G({
                        clientThreadId: s
                    }),
                    inlineButton: "true"
                }), g ? (f({
                    modelId: M,
                    location: "Model switcher menu item"
                }), o({
                    sourceEvent: j,
                    nodeId: t,
                    requestedModelId: M
                })) : o({
                    sourceEvent: j,
                    nodeId: t
                })
            };
        return e.jsx(Ks, {
            as: "button",
            color: "secondary",
            disabled: v,
            onClick: b,
            icon: ns,
            "data-testid": "regenerate-thread-error-button",
            children: g ? e.jsx(C, {
                id: "MessageError.buttonUseDefaultModel",
                defaultMessage: "Use default model"
            }) : e.jsx(C, {
                id: "MessageError.buttonRetryResponse",
                defaultMessage: "Retry"
            })
        })
    };

function Et({
    modelSlug: s,
    animateModelLabelOnRender: t,
    isDropdownOpen: r,
    isRegenerateEnabled: o,
    isHovered: n,
    animateShortLabel: a
}) {
    const {
        data: d
    } = Pe(), [c, i] = m.useState("initial");
    m.useEffect(() => {
        if (t) {
            const l = setTimeout(() => i("show"), 500),
                M = setTimeout(() => i("initial"), 2e3);
            return () => {
                clearTimeout(l), clearTimeout(M)
            }
        }
        i("initial")
    }, [t]);
    const {
        shorterLabel: g
    } = d ? .categories.find(({
        defaultModel: l
    }) => l === s) ? ? {}, v = {
        initial: {
            opacity: 0,
            paddingLeft: 0,
            width: "0"
        },
        show: {
            opacity: 1,
            paddingLeft: 2,
            width: "100%"
        },
        visible: {
            opacity: 1,
            paddingLeft: 2,
            width: "100%",
            transition: {
                delay: 0,
                duration: 0
            }
        }
    }, f = r ? "visible" : n ? "show" : c;
    return e.jsxs(ye.div, {
        initial: "initial",
        animate: f,
        className: "flex items-center pb-0",
        children: [e.jsx(we, {
            className: "icon-md"
        }), (o || a) && e.jsx(ye.span, {
            className: "overflow-hidden text-clip whitespace-nowrap text-sm",
            variants: v,
            transition: {
                type: "tween",
                duration: .18
            },
            children: g
        }), o && e.jsx(us, {
            className: "icon-sm"
        })]
    })
}

function ce(s, t) {
    const {
        modelSwitcherDeny: r,
        subscriptionLevel: o
    } = s;
    return !!r && r.reason === st.RATE_LIMIT && o === tt.PLUS && !t
}
const Z = "rounded-lg radix-disabled:pointer-events-auto radix-disabled:cursor-not-allowed";

function wt({
    className: s,
    clientThreadId: t,
    message: r,
    onModelSelect: o,
    onDropdownChange: n,
    canRegenerateResponse: a
}) {
    const [d, c] = m.useState(null), [i, g] = m.useState(!1), [v, f] = m.useState(!1), l = Zs(t), M = os({
        clientThreadId: t,
        message: r
    }), b = r.message.metadata ? .model_slug, j = r.message.id, {
        modelOptions: x,
        modelSlug: u,
        animateModelLabelOnRender: h,
        messageModelEnabledTools: y
    } = M, p = rs(r.message), k = y.includes(is.Search), _ = m.useMemo(() => x.find(T => T.value === b), [x, b]), R = m.useRef(null), {
        data: E = null
    } = Js(), I = E && $s(E), w = T => {
        T || setTimeout(() => {
            R.current && R.current.blur()
        }, 10)
    };
    if (m.useEffect(() => {
            w(i)
        }, [i]), me(t, ms)) return null;
    const N = a && x.some(T => ce(T, I));
    return l ? null : e.jsxs(B.Root, {
        onOpenChange: T => {
            a && (g(T), n(T), w(T)), T && Ae.logEvent(W.conversationOpenMessageModelSelector, {
                has_get_plus_button: N,
                is_new_regen_dropdown: !0
            })
        },
        children: [a ? e.jsx(kt, {
            label: e.jsx(C, {
                id: "wDs5sz",
                defaultMessage: "Switch model"
            }),
            children: e.jsx(Xs, {
                ref: R,
                className: A("cursor-pointer", s),
                onMouseEnter: () => f(!0),
                onMouseLeave: () => f(!1),
                children: e.jsx(Et, {
                    modelSlug: u,
                    animateModelLabelOnRender: h,
                    isDropdownOpen: i,
                    isRegenerateEnabled: a,
                    isHovered: v
                })
            })
        }) : null, a && e.jsx(B.Portal, {
            children: e.jsxs(B.Content, {
                className: "z-30 min-w-fit origin-top-right text-token-text-primary",
                side: "bottom",
                align: "start",
                children: [e.jsx(B.Item, {
                    disabled: !0,
                    className: "pb-0 pt-2",
                    children: e.jsx("span", {
                        className: "text-token-text-secondary",
                        children: e.jsx(C, {
                            id: "bFLh5u",
                            defaultMessage: "Switch model"
                        })
                    })
                }), e.jsx(Rt, {
                    clientThreadId: t,
                    messageId: j,
                    onModelSelect: o,
                    messageModelSlug: b,
                    modelOptions: x,
                    setHoveredOption: c,
                    hoveredOption: d,
                    retryOption: _,
                    lastResponseUsedSearch: p,
                    modelSupportsSearch: k,
                    doesUserHaveAnyAccountsWithPlusFeatures: I
                })]
            })
        })]
    })
}

function Rt({
    clientThreadId: s,
    messageId: t,
    modelOptions: r,
    messageModelSlug: o,
    onModelSelect: n,
    setHoveredOption: a,
    hoveredOption: d,
    retryOption: c,
    lastResponseUsedSearch: i,
    modelSupportsSearch: g,
    doesUserHaveAnyAccountsWithPlusFeatures: v
}) {
    const f = ee(),
        [l, M] = m.useMemo(() => ls(r, u => u.subcategory), [r]),
        b = m.useMemo(() => {
            const u = new Map;
            return l.forEach(h => {
                const y = h.subcategory;
                y && (u.has(y) || u.set(y, []), u.get(y) ? .push(h))
            }), u
        }, [l]),
        j = A("icon-sm", "order-10 ml-auto text-token-text-tertiary icon-md"),
        x = [{
            key: "use-search",
            extraStreamParams: {
                forceUseSearch: !0
            },
            label: f.formatMessage(re.search),
            icon: e.jsx(cs, {
                className: j
            }),
            condition: g && !i,
            eventName: "chatgpt_regenerate_with_search_button_clicked"
        }, {
            key: "use-no-search",
            extraStreamParams: {
                forceUseSearch: !1
            },
            label: f.formatMessage(re.nosearch),
            icon: e.jsx(ds, {
                className: j
            }),
            condition: g && i,
            eventName: "chatgpt_regenerate_without_search_button_clicked"
        }];
    return e.jsxs(e.Fragment, {
        children: [M.map(u => {
            const {
                value: h,
                ...y
            } = u;
            return e.jsx(Y, {
                value: h,
                onSelect: p => {
                    H.logEvent("chatgpt_regenerate_switch_model_button_clicked", h, {
                        requestedModelId: h,
                        ...G({
                            clientThreadId: s,
                            messageId: t
                        })
                    }), n({
                        sourceEvent: p,
                        requestedModelId: h
                    })
                },
                includeRegenerate: !1,
                onMouseEnter: () => a(h),
                onMouseLeave: () => a(null),
                isHovered: d === h,
                messageModelSlug: o,
                includeCheck: !1,
                shouldShowUpsell: ce(u, v),
                className: Z,
                ...y,
                icon: e.jsx("span", {
                    className: j
                })
            }, h)
        }), [...b.entries()].map(([u, h]) => e.jsxs(B.Sub, {
            children: [e.jsx(B.SubMenuTrigger, {
                children: e.jsx("div", {
                    className: "flex grow justify-between gap-2 overflow-hidden",
                    children: u
                })
            }), e.jsx(B.Portal, {
                children: e.jsx(B.SubContent, {
                    className: "min-w-fit",
                    children: h.map(y => {
                        const {
                            value: p,
                            ...k
                        } = y;
                        return e.jsx(Y, {
                            value: p,
                            onSelect: _ => {
                                H.logEvent("chatgpt_regenerate_switch_model_button_clicked", p, {
                                    requestedModelId: p,
                                    ...G({
                                        clientThreadId: s,
                                        messageId: t
                                    })
                                }), n({
                                    sourceEvent: _,
                                    requestedModelId: p
                                })
                            },
                            includeRegenerate: !1,
                            onMouseEnter: () => a(p),
                            onMouseLeave: () => a(null),
                            isHovered: d === p,
                            messageModelSlug: o,
                            includeCheck: !1,
                            className: Z,
                            ...k,
                            icon: null,
                            shouldShowUpsell: ce(y, v)
                        }, u + "-" + p)
                    })
                })
            })]
        }, u)), !!c && e.jsxs(e.Fragment, {
            children: [e.jsx(B.Separator, {}), e.jsx(Y, {
                onSelect: u => {
                    H.logEvent("chatgpt_regenerate_try_again_button_clicked", c.value, {
                        requestedModelId: c.value,
                        ...G({
                            clientThreadId: s,
                            messageId: t
                        })
                    }), n({
                        sourceEvent: u,
                        requestedModelId: c.value
                    })
                },
                includeRegenerate: !0,
                onMouseEnter: () => a(c.value),
                onMouseLeave: () => a(null),
                messageModelSlug: o,
                includeCheck: !1,
                className: Z,
                ...c,
                label: f.formatMessage(re.tryAgain),
                subtitle: c.label,
                icon: e.jsx(we, {
                    className: j
                })
            }, c.value), x.filter(u => u.condition).map(u => e.jsx(Y, {
                onSelect: h => {
                    H.logEvent(u.eventName, c.value, {
                        requestedModelId: c.value,
                        ...G({
                            clientThreadId: s,
                            messageId: t
                        })
                    }), n({
                        sourceEvent: h,
                        requestedModelId: c.value,
                        extraStreamParams: u.extraStreamParams
                    })
                },
                includeRegenerate: !1,
                onMouseEnter: () => a(u.key),
                onMouseLeave: () => a(null),
                isHovered: d === u.key,
                messageModelSlug: o,
                includeCheck: !1,
                className: Z,
                ...c,
                label: u.label,
                subtitle: "",
                icon: u.icon
            }, u.key))]
        })]
    })
}

function kt({
    children: s,
    label: t
}) {
    return e.jsx(et, {
        label: t,
        sideOffset: 0,
        children: s
    })
}
const re = Le({
        tryAgain: {
            id: "VbsBGW",
            defaultMessage: "Try again"
        },
        search: {
            id: "eTV6j1",
            defaultMessage: "Search the web"
        },
        nosearch: {
            id: "IvLzUk",
            defaultMessage: "Without web search"
        }
    }),
    Nt = m.memo(wt),
    Dt = se(() => ue(() =>
        import ("./nua4jcmpkdn1q3vx.js"), __vite__mapDeps([6, 1, 3, 4, 7, 8, 2, 5, 9, 10, 11])).then(s => s.VoicePlayButton)),
    Vt = se(async () => Promise.resolve(() => null)),
    zt = ({
        clientThreadId: s,
        conversationMode: t,
        messages: r,
        isUserTurn: o,
        lastMessage: n,
        turnIndex: a,
        showCopyButton: d,
        showDiscussButton: c,
        showPlayButton: i,
        showRatingButtons: g,
        showPagination: v,
        onRate: f,
        turn: l,
        numVariants: M,
        onChangeIndex: b,
        activeVariantIndex: j,
        showRegenerateButton: x,
        showShareButton: u,
        showCanvasButton: h,
        isHovered: y,
        showInline: p,
        alwaysShow: k
    }) => {
        const _ = ee(),
            R = Ie(),
            [E, I] = m.useState(!1),
            [w, F] = m.useState(!1),
            N = n ? .rating,
            T = y || w || E || k,
            O = T && e.jsxs("div", {
                className: "flex items-center",
                children: [d && e.jsx(He, {
                    onClick: D => {
                        Re(s, a, R, D)
                    }
                }), g && e.jsxs("div", {
                    className: "flex",
                    children: [N !== "thumbsDown" && e.jsx($, {
                        onClick: () => f("thumbsUp"),
                        disabled: N === "thumbsUp",
                        icon: N === "thumbsUp" ? gs : fs,
                        label: _.formatMessage({
                            id: "ConversationTurn.goodResponseTooltip",
                            defaultMessage: "Good response"
                        }),
                        testId: "good-response-turn-action-button"
                    }), N !== "thumbsUp" && e.jsx($, {
                        onClick: () => f("thumbsDown"),
                        disabled: N === "thumbsDown",
                        icon: N === "thumbsDown" ? xs : hs,
                        label: _.formatMessage({
                            id: "ConversationTurn.badResponseTooltip",
                            defaultMessage: "Bad response"
                        }),
                        testId: "bad-response-turn-action-button"
                    })]
                }), i && n && e.jsx(Dt, {
                    conversationId: s,
                    message: n,
                    iconClassName: "icon-md",
                    className: "gap-1.5 rounded-md p-1 text-xs text-token-text-tertiary hover:text-token-text-primary"
                }), h && e.jsx(ps, {
                    turn: l
                }), u && e.jsx($, {
                    onClick: () => {
                        const D = at(s);
                        D && vs.openSharingModal(D)
                    },
                    label: _.formatMessage({
                        id: "ConversationTurn.shareButtonTooltip",
                        defaultMessage: "Share conversation"
                    }),
                    className: "sm:hidden",
                    icon: js
                }), c && !1, x && n && e.jsx(Pt, {
                    clientThreadId: s,
                    conversationMode: t,
                    lastMessage: n,
                    messages: r,
                    onModelDropdownOpenChange: I
                })]
            });
        return e.jsx("div", {
            tabIndex: 0,
            onFocus: () => F(!0),
            onBlur: D => {
                D.currentTarget instanceof HTMLElement && D.relatedTarget instanceof HTMLElement && D.currentTarget.contains(D.relatedTarget) || F(!1)
            },
            className: A("mb-2 flex gap-3", o ? "mr-1 flex-row-reverse" : "-ml-2"),
            children: e.jsxs("div", {
                className: A("items-center justify-start rounded-xl p-1", p ? "flex" : "z-10 -mt-1 bg-token-main-surface-primary screen-arch:mt-1 md:absolute", p ? !1 : T ? "flex" : "md:sr-only"),
                children: [v && e.jsx(Ms, {
                    showInline: p,
                    currentPage: j,
                    onChangeIndex: b,
                    length: M,
                    className: A("self-center", M > 1 ? "visible" : "!invisible")
                }), O]
            })
        })
    },
    Pt = ({
        clientThreadId: s,
        conversationMode: t,
        messages: r,
        lastMessage: o,
        onModelDropdownOpenChange: n
    }) => {
        const a = r.some(({
                message: v
            }) => {
                const [f] = v.author.name ? .split(".") ? ? [];
                return f === Fe.T2UAY3K
            }),
            {
                value: d
            } = Ne("3058498100"),
            c = Be({
                clientThreadId: s,
                conversationMode: t
            }),
            i = ys(s, o),
            g = m.useCallback(({
                sourceEvent: v,
                requestedModelId: f,
                appendMessages: l,
                extraStreamParams: M
            }) => {
                o && c({
                    sourceEvent: v,
                    nodeId: o.nodeId,
                    requestedModelId: f,
                    appendMessages: l,
                    extraStreamParams: M
                })
            }, [o, c]);
        return e.jsx(Nt, {
            className: "h-[30px] rounded-md px-1 text-token-text-secondary hover:bg-token-main-surface-secondary",
            clientThreadId: s,
            message: o,
            onModelSelect: g,
            onDropdownChange: n,
            canRegenerateResponse: i
        })
    },
    He = ({
        onClick: s
    }) => {
        const [t, r] = m.useState(!1), o = bs(), n = ee(), a = m.useCallback(d => {
            d.stopPropagation(), Ae.logEvent(W.chatgptTurnActionCopyClicked), s(d), r(!0), setTimeout(() => {
                o() && r(!1)
            }, 2e3), H.logEvent("chatgpt_turn_action_copy")
        }, [o, s]);
        return e.jsx($, {
            icon: t ? nt : ot,
            onClick: a,
            label: n.formatMessage({
                id: "CopyButton.copyTooltip",
                defaultMessage: "Copy"
            }),
            testId: "copy-turn-action-button"
        })
    };

function ie({
    containsImagesOrAttachments: s,
    isUserTurn: t,
    showEditButton: r,
    showCopyButton: o,
    onEnterEdit: n,
    children: a,
    handleCopyToClipboard: d
}) {
    return e.jsxs("div", {
        className: A("relative max-w-[var(--user-chat-width,70%)]", t && "rounded-3xl bg-token-message-surface px-5 py-2.5", t && s && "rounded-tr-lg"),
        children: [a, (o || r) && e.jsx("div", {
            className: "absolute bottom-0 right-full top-0 -mr-3.5 hidden pr-5 pt-2 [.group\\/conversation-turn:hover_&]:flex",
            children: e.jsxs("div", {
                className: "flex",
                children: [o && e.jsx(He, {
                    onClick: d
                }), r && e.jsx(Cs, {
                    onEnterEdit: n
                })]
            })
        })]
    })
}
const At = se(() => ue(() =>
    import ("./gq9abw1va9gio5vu.js"), __vite__mapDeps([12, 1, 3, 4, 2, 5, 13, 9])).then(s => s.TextMessageImageGroup));

function Ge({
    attachments: s,
    citations: t,
    contentReferences: r,
    className: o,
    clientThreadId: n,
    displayParts: a,
    isCompletionInProgress: d,
    id: c,
    isActivelyStreaming: i,
    isUserTurn: g,
    turnIndex: v,
    isFeedbackEnabled: f,
    messages: l,
    parts: M,
    prevGroupedMessageType: b,
    prevGroupedMessages: j,
    showEditButton: x,
    showCopyButton: u,
    onEnterEdit: h,
    size: y = "medium",
    errorState: p
}) {
    const k = l.length > 1,
        _ = M.some(w => w !== ""),
        R = !_ && l[0].message.metadata ? .content_references ? .length === 0,
        E = l[0].message.metadata ? .targeted_reply_label ? ? l[0].message.metadata ? .targeted_reply,
        I = l[0].message.metadata ? .targeted_reply_image;
    return m.useEffect(() => {
        const w = l[0].message;
        if (w.author.metadata ? .real_author === `tool:${Fe.SEARCHGPT}` && _) {
            const F = w.metadata ? .search_source;
            be.logEvent(W.searchToolRequestTimeToFirstTextToken, n, w.id, {
                search_source: F
            }, () => {
                F === rt.InstantQuery && Ts.logEvent(W.searchToolPageLoadTimeToFirstTextToken, {
                    message_id: w.id,
                    search_source: F
                })
            })
        }
    }, [n, _, l]), m.useEffect(() => {
        if (!R) switch (b) {
            case le.Browsing:
                be.logEvent(W.browsingTimeToFirstTextToken, n, l[0].message.id);
                break
        }
    }, [R, l, n, b]), e.jsxs("div", {
        "data-message-author-role": l[0].message.author.role,
        "data-message-id": l[0].message.id,
        dir: "auto",
        className: A(o, "text-message relative flex w-full flex-col items-end gap-2 whitespace-normal break-words text-start [.text-message+&]:mt-5"),
        "data-message-model-slug": l[0].message.metadata ? .model_slug,
        children: [E && e.jsxs("div", {
            className: "mb-1 ml-6 mt-1 flex items-center gap-1.5 text-sm font-normal text-token-text-tertiary sm:ml-7 lg:ml-8",
            children: [I ? e.jsx("img", {
                className: "h-6 rounded border border-token-border-light object-contain",
                src: I,
                alt: E
            }) : e.jsx(_s, {
                className: "icon-md shrink-0"
            }), e.jsx("p", {
                className: "mr-2 line-clamp-3",
                children: E
            })]
        }), g && e.jsx(Ss, {
            messages: l
        }), g && e.jsx(Es, {
            hint: l[0] ? .message.metadata ? .retrieval_hint_file_data
        }), e.jsx(ws, {
            messages: l
        }), e.jsx(Lt, {
            parts: M,
            attachments: s,
            isUserTurn: g,
            isCompletionInProgress: d,
            turnIndex: v,
            displayParts: a,
            isActivelyStreaming: i,
            shouldHideContent: !!p ? .shouldHideContent && !f,
            showEditButton: x,
            showCopyButton: u,
            onEnterEdit: h,
            clientThreadId: n,
            id: c,
            isEmpty: R,
            prevGroupedMessageType: b,
            prevGroupedMessages: j,
            flagSeverity: p ? .flagSeverity,
            messages: l,
            citations: t,
            contentReferences: r,
            size: y
        }), p && e.jsx(Mt, {
            errorState: p,
            nodeId: c,
            isFeedbackEnabled: f,
            clientThreadId: n,
            isUserTurn: g
        }), e.jsx(Rs, {
            message: k ? void 0 : l[0]
        }), !g && !i && j && b === le.SearchResult && e.jsx(ks, {
            messages: j
        })]
    })
}

function Lt({
    clientThreadId: s,
    id: t,
    displayParts: r,
    turnIndex: o,
    isActivelyStreaming: n,
    shouldHideContent: a,
    showEditButton: d = !1,
    showCopyButton: c = !1,
    onEnterEdit: i,
    isEmpty: g,
    prevGroupedMessageType: v,
    prevGroupedMessages: f,
    messages: l,
    citations: M,
    contentReferences: b,
    size: j,
    isUserTurn: x,
    parts: u,
    attachments: h
}) {
    const y = ee(),
        p = Ie(),
        k = m.useRef(!1),
        _ = Ns(r),
        R = l[0].message.metadata ? .serialization_metadata,
        E = l[0].message.metadata ? .image_results ? .length ? ? 0,
        I = m.useMemo(() => ({
            clientThreadId: s,
            messageId: t,
            turnIndex: o
        }), [s, t, o]),
        {
            toggleThreadSidebar: w
        } = it(),
        F = m.useCallback((S, L) => {
            w({
                type: "searchSources",
                scrollToHeader: L,
                clientThreadId: s,
                turnIndex: o,
                messageId: t
            })
        }, [s, o, t, w]),
        N = m.useCallback(S => {
            Re(s, o, p, S)
        }, [s, o, p]),
        T = e.jsx(Ps, {
            parts: u,
            attachments: h,
            isUserTurn: x,
            clientThreadId: s
        }, "files-and-tables"),
        O = !!(h ? .length || r.some(S => S.type === "images")),
        D = Ds();

    function fe(S, L, P) {
        const V = v === le.CodeInterpreter ? f ? .map(U => U.message) : void 0,
            {
                text: he,
                contentReferences: pe
            } = As(L, M, b);
        let ve = pe;
        D && (ve = pe.filter(U => U.type !== "attribution"));
        let {
            processedText: z,
            displayedContentReferences: je
        } = ct(he, ve, n ? void 0 : V, !1, n);
        z.includes(dt) && !k.current && (k.current = !0, ut.addError(new Error("Failed replaceTextWithDirectives"), {
            text: z,
            displayedContentReferences: je
        }));
        const te = l[0].message,
            Me = te.metadata ? .message_locale,
            Oe = l.find(U => U.message.id === t),
            qe = Ls(Oe ? .message),
            Ve = ke() ? Is() ? "streaming-animation block-entry-animation" : "streaming-animation" : "result-streaming",
            ze = z ? Ve : "result-thinking";
        let ae = e.jsx(Fs, {
            clientThreadId: s,
            componentOverrides: qe ? Bs : null,
            messageId: t,
            size: j,
            isActivelyStreaming: n,
            className: A(n && ze),
            isDeepResearchResultMessage: te.metadata ? .is_async_task_result_message,
            children: z === "" ? "&#8203;" : z
        });
        if (Me != null) {
            const U = mt(Me);
            U != null && (ae = e.jsx(gt, {
                locale: U,
                children: ae
            }))
        }
        return e.jsx(Us.Provider, {
            value: {
                analyticsMetadata: I,
                message: te,
                contentReferences: je,
                onShowSearchResults: F,
                numImageResults: E,
                isActivelyStreaming: n,
                useSafeUrls: !0,
                clientThreadId: s
            },
            children: ae
        }, S)
    }
    const q = r.map((S, L) => {
            if (S.type === "transcription") {
                const P = a ? null : S.text;
                let V = null;
                if (x && a) V = e.jsx("span", {
                    className: "italic opacity-30",
                    children: e.jsx(C, { ...J.contentRemoved
                    })
                });
                else if (x && P != null) V = P.trim().length === 0 ? e.jsx("span", {
                    className: "italic opacity-30",
                    children: e.jsx(ne, {
                        text: y.formatMessage(J.transcriptUnavailable),
                        customSymbolOffsets: void 0
                    })
                }) : e.jsx("span", {
                    className: "italic opacity-65",
                    children: e.jsx(ne, {
                        text: `“${P.trim()}”`,
                        customSymbolOffsets: void 0
                    })
                });
                else if (!x && P != null) return fe(L, P);
                return e.jsx(ie, {
                    containsImagesOrAttachments: O,
                    isUserTurn: x,
                    showEditButton: d,
                    showCopyButton: c,
                    onEnterEdit: i,
                    handleCopyToClipboard: N,
                    children: V
                }, L)
            } else if (S.type === "text") {
                const P = a ? null : S.text;
                return !g && !a && !x ? fe(L, _) : g && n && !x ? e.jsx("div", {
                    className: "result-streaming",
                    children: e.jsx("span", {
                        children: e.jsx("pre", {})
                    })
                }, L) : e.jsx(ie, {
                    containsImagesOrAttachments: O,
                    isUserTurn: x,
                    showEditButton: d,
                    showCopyButton: c,
                    onEnterEdit: i,
                    handleCopyToClipboard: N,
                    children: x && a ? e.jsx("span", {
                        className: "italic opacity-30",
                        children: e.jsx(C, { ...J.contentRemoved
                        })
                    }) : P ? e.jsx(ne, {
                        text: P,
                        customSymbolOffsets: R ? .custom_symbol_offsets
                    }) : null
                }, L)
            } else if (S.type === "images") {
                const P = l[0].message.metadata ? .attachments ? ? [];
                return e.jsx(At, {
                    assets: S.imageAssets,
                    attachments: P
                }, L)
            } else return null
        }),
        xe = r.findIndex(S => S.type === "text");
    if (xe !== -1 ? q.splice(xe, 0, T) : q.push(T), a && x) q.length = 0, q.push(e.jsx(ie, {
        containsImagesOrAttachments: O,
        isUserTurn: x,
        showEditButton: !1,
        showCopyButton: !1,
        onEnterEdit: lt,
        handleCopyToClipboard: N,
        children: e.jsx("span", {
            className: "italic opacity-30",
            children: e.jsx(C, { ...J.contentRemoved
            })
        })
    }));
    else if (a && !x) return null;
    return e.jsx("div", {
        className: It(x),
        children: q
    })
}

function It(s) {
    return A("flex w-full flex-col gap-1 empty:hidden", s && "items-end rtl:items-start", !s && "first:pt-[3px]")
}
const J = Le({
    contentRemoved: {
        id: "textMessage.contentRemoved",
        defaultMessage: "Content removed"
    },
    transcriptUnavailable: {
        id: "textMessage.transcriptUnavailable",
        defaultMessage: "Transcript Unavailable"
    }
});

function Ft(s) {
    const {
        isActivelyStreaming: t,
        ...r
    } = s, o = ft(), n = o ? .includes("debug") ? ? !1, a = s.messages[s.messages.length - 1].message.id, [d, c] = m.useState(Hs(s.parts)), i = m.useRef(void 0);
    return i.current === void 0 && (i.current = o ? .includes(xt) ? ? !1 ? new Gs(s.parts, c, t, void 0, {
        debug: n
    }) : new Os(s.parts, c, t)), m.useEffect(() => {
        i.current != null && (i.current.onMessagePartsUpdated(s.parts, t), i.current.isBuffering() && oe.addDelayedRenderingMessage(a))
    }, [s.parts, a, t]), m.useEffect(() => {
        i.current != null && !i.current.isBuffering() && oe.removeDelayedRenderingMessage(a)
    }, [d, a]), m.useEffect(() => () => oe.removeDelayedRenderingMessage(a), [a]), m.useEffect(() => () => {
        i.current != null && (i.current.destroy(), i.current = void 0)
    }, []), e.jsx(Ge, { ...r,
        displayParts: d,
        isActivelyStreaming: t || i.current ? .isBuffering()
    })
}

function Bt({
    message: s,
    isCompletionInProgress: t,
    hasActiveRequest: r,
    clientThreadId: o,
    className: n,
    isUserTurn: a,
    turnIndex: d,
    isFeedbackEnabled: c,
    prevGroupedMessageType: i,
    prevGroupedMessages: g,
    showEditButton: v,
    showCopyButton: f,
    onEnterEdit: l
}) {
    const M = m.useMemo(() => "parts" in s.message.content ? s.message.content.parts : [ht(s.message)], [s]);
    return e.jsx(Ut, {
        parts: M,
        messages: [s],
        hasActiveRequest: r,
        isCompletionInProgress: t,
        className: n,
        citations: s.message.metadata ? .citations,
        contentReferences: s.message.metadata ? .content_references,
        attachments: s.message.metadata ? .attachments,
        isUserTurn: a,
        turnIndex: d,
        id: s.nodeId,
        isFeedbackEnabled: c,
        clientThreadId: o,
        showEditButton: v,
        showCopyButton: f,
        onEnterEdit: l,
        prevGroupedMessageType: i,
        prevGroupedMessages: g
    })
}
const Qt = We.memo(Bt);

function Ut(s) {
    const r = s.messages.length > 1,
        o = de.isLastActorMessage(X(s.clientThreadId), s.messages[0].nodeId),
        n = r ? void 0 : qs(s.messages[0], o, !1, s.isCompletionInProgress || s.hasActiveRequest),
        a = n ? .flagSeverity !== "danger" && s.isCompletionInProgress,
        d = !s.parts.some(i => i !== ""),
        [c] = m.useState(() => !s.isUserTurn && (s.isCompletionInProgress || d) && !ke());
    return c ? e.jsx(Ft, { ...s,
        isActivelyStreaming: a,
        errorState: n
    }) : e.jsx(Ge, { ...s,
        displayParts: Vs({
            isUserTurn: s.isUserTurn,
            parts: s.parts
        }),
        isActivelyStreaming: a,
        errorState: n
    })
}
export {
    Ut as T, Qt as a, Ge as b, zt as c, ie as d, It as g, Be as u
};
//# sourceMappingURL=g77ymanjjcustcw3.js.map