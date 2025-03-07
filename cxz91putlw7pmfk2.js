import {
    N as Be,
    ds as es,
    S as K,
    P as D,
    a as R,
    a6 as ss,
    av as ts,
    bi as ae,
    cp as ge,
    bk as A,
    b_ as Te,
    d as Q,
    fS as as,
    ci as xe,
    ak as os,
    ca as je,
    cb as te,
    aB as rs,
    aa as Y,
    T as w,
    r as fe,
    Z as re,
    a0 as he,
    U as is,
    ab as ls,
    bK as ns,
    cv as ve,
    B as ke,
    cE as ds,
    h as de,
    L as ce
} from "./bq4rrqi54riy5k2e.js";
import {
    c as ie,
    r as m,
    j as e,
    M as r,
    L as cs,
    ax as Ae,
    av as De,
    a as us,
    b as ms,
    u as pe,
    h as gs
} from "./mna1wiucqak6lqzp.js";
import {
    h5 as hs,
    U as xs,
    N as fs,
    h6 as ps,
    h7 as Ms,
    h8 as Ss,
    h9 as we,
    ha as ys,
    c5 as bs,
    gS as Cs,
    hb as Ts,
    M as js,
    hc as vs,
    hd as ks,
    he as ws,
    da as Ps,
    hf as _s,
    hg as Hs,
    bs as Re,
    fy as Pe,
    hh as Ns,
    hi as Is,
    d4 as Us,
    hj as Es,
    Q as Ls,
    b_ as Bs,
    hk as As,
    hl as Ds,
    hm as Rs,
    hn as Os,
    gy as M,
    ho as zs,
    hp as Fs,
    hq as Ws
} from "./lwme42j7zzyr3q7j.js";

function Gs({
    onSuccess: t,
    onError: s
}) {
    const a = us();
    return ms({
        mutationFn: ({
            userContext: i
        }) => re.createOrUpdateUserSystemMessage(i),
        onSettled: (i, c) => {
            const d = ["userContext"];
            i !== null && !c ? a.setQueryData(d, i) : a.invalidateQueries({
                queryKey: d
            })
        },
        onSuccess: t,
        onError: s
    })
}

function qs(t) {
    const s = ie(),
        a = Be();
    return pe({
        queryKey: ["userContext"],
        queryFn: () => re.getUserSystemMessage().catch(i => {
            throw a.danger(s.formatMessage({
                id: "userContextModal.getCustomInstructionsError",
                defaultMessage: "Failed to get your settings"
            })), i
        }),
        enabled: t,
        select: i => ({
            aboutUserMessage: i.about_user_message ? ? "",
            aboutModelMessage: i.about_model_message ? ? "",
            nameUserMessage: i.name_user_message ? ? "",
            roleUserMessage: i.role_user_message ? ? "",
            traitsModelMessage: i.traits_model_message ? ? "",
            otherUserMessage: i.other_user_message ? ? "",
            disabledTools: i.disabled_tools ? ? [],
            enabled: i.enabled ? ? !0
        })
    })
}

function Ks() {
    return pe({
        queryKey: ["userIsInSearchHoldoutWithWebDisabled"],
        queryFn: () => re.getUserIsInSearchHoldoutWithWebDisabled().catch(t => {
            throw t
        }),
        select: t => ({
            userIsInSearchHoldoutWithWebDisabled: t.user_is_in_search_holdout_with_web_disabled ? ? !1
        })
    })
}
const _e = {
    aboutUserMessage: void 0,
    aboutModelMessage: void 0,
    nameUserMessage: void 0,
    roleUserMessage: void 0,
    traitsModelMessage: void 0,
    otherUserMessage: void 0,
    disabledTools: void 0,
    enabled: void 0
};

function dt({
    isModalOpen: t
}) {
    const s = ie(),
        a = Be(),
        i = hs(),
        [c, d] = m.useState(!1),
        {
            isLoading: n,
            data: f
        } = qs(t),
        {
            aboutUserMessage: h = "",
            aboutModelMessage: x = "",
            nameUserMessage: u = "",
            roleUserMessage: g = "",
            traitsModelMessage: b = "",
            otherUserMessage: S = "",
            disabledTools: k = [],
            enabled: P
        } = f ? ? {},
        [I, E] = m.useState(_e),
        {
            aboutUserMessage: C,
            aboutModelMessage: y,
            nameUserMessage: v,
            roleUserMessage: L,
            traitsModelMessage: U,
            otherUserMessage: O,
            disabledTools: z,
            enabled: p
        } = I,
        _ = p ? ? !!P,
        [W, le] = m.useState(null),
        H = o => {
            const T = (j, Je, $e) => j !== void 0 ? j : Je ? ? $e;
            E(j => ({ ...j,
                ...o,
                aboutUserMessage: T(o.aboutUserMessage, j.aboutUserMessage, h),
                aboutModelMessage: T(o.aboutModelMessage, j.aboutModelMessage, x),
                nameUserMessage: T(o.nameUserMessage, j.nameUserMessage, u),
                roleUserMessage: T(o.roleUserMessage, j.roleUserMessage, g),
                traitsModelMessage: T(o.traitsModelMessage, j.traitsModelMessage, b),
                otherUserMessage: T(o.otherUserMessage, j.otherUserMessage, S),
                enabled: T(o.enabled, j.enabled, _),
                disabledTools: T(o.disabledTools, j.disabledTools, k)
            }))
        },
        V = m.useCallback(() => {
            xs.closeModal(fs.UserContext), E(_e), le(null)
        }, []),
        {
            isPending: Z,
            mutate: Me
        } = Gs({
            onSuccess: () => {
                V()
            },
            onError: o => (o.response ? .reason === "content_policy" && o.response ? .field ? le(o.response ? .field) : a.danger(s.formatMessage({
                id: "userContextModal.saveError",
                defaultMessage: "Failed to update settings"
            })), o)
        }),
        [Se, ye] = m.useState(!1),
        [X, Ge] = m.useState(!1),
        [ne, qe] = m.useState([]),
        J = [C, y, v, L, U, O].some(o => oe(o ? ? "")),
        $ = [{
            local: y,
            server: x
        }, {
            local: C,
            server: h
        }, {
            local: v,
            server: u
        }, {
            local: L,
            server: g
        }, {
            local: U,
            server: b
        }, {
            local: O,
            server: S
        }].some(({
            local: o,
            server: T
        }) => o !== void 0 && o !== T) || z !== void 0 && !es(z, k) || p !== void 0 && p !== P,
        ee = m.useCallback(() => {
            K.logEvent("chatgpt_user_context_cancel_clicked"), D.logEvent(R.userContextCancelClicked), $ ? ye(!0) : V()
        }, [V, $]),
        be = m.useCallback(async () => {
            if (!Z) {
                le(null);
                const o = {
                        aboutUserMessage: C ? ? "",
                        aboutModelMessage: y ? ? "",
                        nameUserMessage: v ? ? "",
                        roleUserMessage: L ? ? "",
                        traitsModelMessage: U ? ? "",
                        otherUserMessage: O ? ? "",
                        disabledTools: z ? ? [],
                        enabled: !!p
                    },
                    T = {
                        name: u,
                        role: g,
                        traits: b,
                        other: S
                    },
                    j = {
                        name: o.nameUserMessage,
                        role: o.roleUserMessage,
                        traits: o.traitsModelMessage,
                        other: o.otherUserMessage,
                        traitPillsSelected: ne
                    };
                D.logEvent(R.userContextSaveCustomizeChatGPT, {
                    previousState: T,
                    newState: j
                }), K.logEvent("chatgpt_user_context_save_custom_instructions", void 0, {
                    previousState: JSON.stringify(T),
                    newState: JSON.stringify(j)
                }), Me({
                    userContext: o
                })
            }
        }, [Z, y, C, v, L, U, O, z, p, ne, u, g, b, S, Me]),
        B = m.useCallback(() => {
            if (J) {
                const o = oe(C ? ? ""),
                    T = oe(y ? ? "");
                o && (K.logEvent("chatgpt_user_context_modal__message_past_limit", void 0, {
                    type: "about_user_message",
                    limit: F.toString(),
                    character_length: C ? .length.toString() ? ? ""
                }), D.logEvent(R.userContextModelMessagePastLimit, {
                    type: "about_user_message",
                    limit: F.toString(),
                    character_length: C ? .length.toString() ? ? ""
                })), T && (K.logEvent("chatgpt_user_context_modal__message_past_limit", void 0, {
                    type: "about_model_message",
                    limit: F.toString(),
                    character_length: y ? .length.toString() ? ? ""
                }), D.logEvent(R.userContextModelMessagePastLimit, {
                    type: "about_model_message",
                    limit: F.toString(),
                    character_length: y ? .length.toString() ? ? ""
                })), a.danger(s.formatMessage(l.messageLimitError, {
                    limit: F
                }), {
                    duration: 4,
                    hasCloseButton: !0
                });
                return
            }
            be()
        }, [s, J, y, C, be, a]),
        {
            value: Ke
        } = ss("809056127"),
        {
            layer: Ye
        } = ts("3206655705"),
        Qe = Ke && Ye.get("enable_new_ux", !0),
        se = m.useRef(null),
        [Ce, Ve] = m.useState(0),
        [Ze, Xe] = m.useState(!0);
    if (m.useEffect(() => {
            const o = setTimeout(() => {
                    Xe(!1)
                }, 1e3),
                T = setInterval(() => {
                    Ve(j => (j + 1) % me.length)
                }, 5500);
            return () => {
                clearInterval(T), clearTimeout(o)
            }
        }, []), m.useEffect(() => {
            X && se.current && se.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }, [X, se]), t && !Se && Qe) return e.jsxs(ae, {
        isOpen: t,
        onClose: ee,
        type: "success",
        size: "custom",
        className: "max-w-xl",
        title: e.jsx(r, { ...l.profileTitle
        }),
        description: e.jsxs("div", {
            className: "flex flex-row items-center text-token-text-secondary",
            children: [e.jsx("div", {
                className: "mr-1",
                children: e.jsx(r, { ...l.profileSubtitle
                })
            }), e.jsx(ue, {
                primaryLabel: e.jsx("div", {
                    className: "text-muted mx-3 mb-2 mt-2 text-sm font-normal",
                    children: e.jsx(r, { ...l.profileSubtitleTooltip,
                        values: {
                            link: o => e.jsx(cs, {
                                className: "underline",
                                target: "_blank",
                                rel: "noreferrer",
                                to: l.profileSubtitleTooltip.link ? ? "",
                                children: o
                            })
                        }
                    })
                }),
                icon: e.jsx(ps, {
                    className: "h-4 w-4 text-token-text-tertiary"
                })
            })]
        }),
        children: [n ? e.jsx("div", {
            className: "flex h-14 items-center justify-center",
            children: e.jsx(ge, {})
        }) : e.jsxs("div", {
            className: "max-h-[60vh] overflow-y-auto md:max-h-[calc(100vh-300px)]",
            children: [e.jsx("p", {
                className: "text-muted py-2 text-sm font-medium",
                children: e.jsx(r, { ...l.customizeName
                })
            }), e.jsx(G, {
                className: "mb-3",
                onSubmit: B,
                disabled: !_,
                hasModError: W === "name_user_message",
                value: v ? ? u,
                placeholder: s.formatMessage(l.customizeNamePlaceholder),
                onChange: o => H({
                    nameUserMessage: o.target.value
                }),
                size: "sm",
                showCharacterCount: !1
            }), e.jsx("p", {
                className: "text-muted py-2 text-sm font-medium text-token-text-primary",
                children: e.jsx(r, { ...l.customizeRole
                })
            }), e.jsxs("div", {
                className: "relative mb-3 overflow-hidden",
                children: [!(L ? ? g) && e.jsx(Ae, {
                    mode: "wait",
                    children: e.jsx(De.span, {
                        variants: Js,
                        initial: Ze ? !1 : "initial",
                        animate: "animate",
                        exit: "exit",
                        className: "pointer-events-none absolute left-[0.81rem] top-[0.55rem] text-sm text-gray-400",
                        children: s.formatMessage(Xs[me[Ce]])
                    }, me[Ce])
                }), e.jsx(G, {
                    onSubmit: B,
                    disabled: !_,
                    hasModError: W === "role_user_message",
                    value: L ? ? g,
                    placeholder: "",
                    onChange: o => H({
                        roleUserMessage: o.target.value
                    }),
                    size: "sm",
                    showCharacterCount: !1
                })]
            }), e.jsxs("div", {
                className: "flex items-center",
                children: [e.jsx("p", {
                    className: "text-muted mr-1 py-2 text-sm font-medium text-token-text-primary",
                    children: e.jsx(r, { ...l.customizeTraits
                    })
                }), e.jsx(ue, {
                    primaryLabel: e.jsx("div", {
                        className: "text-muted mx-3 mb-[6px] mt-3 text-sm font-medium",
                        children: e.jsx(r, { ...l.traitsTooltipTitle
                        })
                    }),
                    secondaryLabel: e.jsxs("ul", {
                        className: "text-muted mx-2 mb-3 list-disc justify-start space-y-[6px] pl-5 text-sm text-token-text-primary",
                        children: [e.jsx("li", {
                            children: e.jsx(r, { ...l.traitsTooltipBodyItem1
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.traitsTooltipBodyItem2
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.traitsTooltipBodyItem3
                            })
                        })]
                    })
                })]
            }), e.jsx(G, {
                onSubmit: B,
                disabled: !_,
                hasModError: W === "traits_model_message",
                value: U ? ? b,
                placeholder: s.formatMessage(l.customizeTraitsPlaceholder),
                onChange: o => H({
                    traitsModelMessage: o.target.value
                }),
                size: "md",
                showCharacterCount: !1,
                isNewCustomInstructionsUIEnabled: !0
            }), e.jsx("div", {
                className: "mb-4",
                children: e.jsx(Qs, {
                    onSelect: o => {
                        H({
                            traitsModelMessage: `${U??b} ${o}`.trim()
                        })
                    },
                    selectedTraits: ne,
                    setSelectedTraits: qe
                })
            }), e.jsxs("div", {
                className: "flex items-center",
                children: [e.jsx("p", {
                    className: "text-muted mr-1 py-2 text-sm font-medium text-token-text-primary",
                    children: e.jsx(r, { ...l.customizeOther
                    })
                }), e.jsx(ue, {
                    primaryLabel: e.jsx("div", {
                        className: "text-muted mx-3 mb-2 mt-3 text-sm font-medium",
                        children: e.jsx(r, { ...l.otherTooltipTitle
                        })
                    }),
                    secondaryLabel: e.jsxs("ul", {
                        className: "text-muted mx-2 mb-3 list-disc justify-start space-y-[6px] pl-5 text-sm text-token-text-primary",
                        children: [e.jsx("li", {
                            children: e.jsx(r, { ...l.otherTooltipBodyItem1
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.otherTooltipBodyItem2
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.otherTooltipBodyItem3
                            })
                        })]
                    })
                })]
            }), e.jsx(G, {
                onSubmit: B,
                disabled: !_,
                hasModError: W === "other_user_message",
                value: O ? ? S,
                placeholder: s.formatMessage(l.customizeOtherPlaceholder),
                onChange: o => H({
                    otherUserMessage: o.target.value
                }),
                size: "md",
                showCharacterCount: !1,
                isNewCustomInstructionsUIEnabled: !0
            }), e.jsxs("div", {
                className: "mt-3 pb-8",
                ref: se,
                children: [e.jsxs("button", {
                    onClick: () => Ge(o => !o),
                    className: "text-muted flex items-center justify-between py-2 text-sm font-medium text-token-text-primary",
                    children: [e.jsx(r, { ...l.advanced
                    }), X ? e.jsx(Ms, {
                        className: "ml-1 h-5 w-5"
                    }) : e.jsx(Ss, {
                        className: "ml-1 h-5 w-5"
                    })]
                }), X && e.jsx("div", {
                    className: "mt-2",
                    children: e.jsx(Ne, {
                        disabledTools: I.disabledTools ? ? k ? ? [],
                        onDisabledToolsChanged: o => H({
                            disabledTools: o
                        }),
                        isNewCustomInstructionsUIEnabled: !0
                    })
                })]
            })]
        }), e.jsx("div", {
            className: "-ml-6 -mr-6 border-t",
            children: e.jsxs("div", {
                className: "ml-6 mr-6 flex flex-grow flex-col items-stretch justify-between gap-0 pb-1 pt-2 sm:flex-row sm:items-center sm:gap-3",
                children: [e.jsxs("label", {
                    className: "mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",
                    children: [e.jsx(we, {
                        enabled: _,
                        onChange: o => {
                            H({
                                enabled: o
                            })
                        },
                        label: _ ? s.formatMessage(l.disableToggleLabel) : s.formatMessage(l.enableToggleLabel)
                    }), e.jsx("div", {
                        className: "self-center text-sm text-token-text-primary",
                        children: e.jsx(r, { ...l.chatPreferencesEnable
                        })
                    })]
                }), e.jsx(A.Actions, {
                    secondaryButton: e.jsx(A.Button, {
                        onClick: ee,
                        children: e.jsx(r, { ...l.cancel
                        })
                    }),
                    primaryButton: e.jsx(A.Button, {
                        loading: Z,
                        onClick: B,
                        color: "primary",
                        visuallyDisabled: J,
                        disabled: !$,
                        children: e.jsx(r, { ...l.save
                        })
                    })
                })]
            })
        })]
    }, "user-context");
    if (t && i && !c) return e.jsx(ys, {
        onClose: () => {
            d(!0)
        }
    });
    if (t && Se) {
        const o = () => {
            ye(!1), K.logEvent("chatgpt_user_context_confirm_close_clicked"), D.logEvent(R.userContextConfirmCloseClicked)
        };
        return e.jsx(ae, {
            isOpen: !0,
            onClose: o,
            type: "success",
            title: s.formatMessage(l.confirmCloseTitle),
            primaryButton: e.jsx(A.Button, {
                title: s.formatMessage(l.confirmCloseOk),
                color: "danger",
                onClick: () => {
                    V(), o()
                }
            }),
            secondaryButton: e.jsx(A.Button, {
                title: s.formatMessage(l.confirmCloseCancel),
                color: "secondary",
                onClick: o
            }),
            children: e.jsx("div", {
                className: "text-sm",
                children: e.jsx(r, { ...l.confirmCloseBody
                })
            })
        }, "confirm-close")
    }
    return e.jsxs(ae, {
        isOpen: t,
        onClose: ee,
        type: "success",
        size: "custom",
        className: "max-w-lg xl:max-w-xl",
        title: e.jsx(r, { ...l.profileTitle
        }),
        children: [n ? e.jsx("div", {
            className: "flex h-14 items-center justify-center",
            children: e.jsx(ge, {})
        }) : e.jsxs("div", {
            className: "max-h-[60vh] overflow-y-auto md:max-h-[calc(100vh-300px)]",
            children: [e.jsxs("div", {
                className: "flex items-center gap-1",
                children: [e.jsx("div", {
                    className: "text-sm font-semibold",
                    children: e.jsx(r, { ...l.customInstructionsTitle
                    })
                }), e.jsx(Oe, {
                    label: e.jsx(r, { ...l.customInstructionsTooltip,
                        values: {
                            article: o => e.jsx("a", {
                                href: bs,
                                target: "_blank",
                                className: "underline",
                                rel: "noreferrer",
                                children: o
                            })
                        }
                    })
                })]
            }), e.jsx("p", {
                className: "text-muted pb-3 pt-2 text-sm text-token-text-primary",
                children: e.jsx(r, { ...l.aboutYouHelpText
                })
            }), e.jsx(G, {
                className: "mb-3",
                onSubmit: B,
                disabled: !_,
                tip: e.jsx(He, {
                    children: e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: e.jsx(r, { ...l.aboutUserTip1
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.aboutUserTip2
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.aboutUserTip3
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.aboutUserTip4
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.aboutUserTip5
                            })
                        })]
                    })
                }),
                hasModError: W === "about_user_message",
                value: C ? ? h,
                onChange: o => H({
                    aboutUserMessage: o.target.value
                })
            }), e.jsx("p", {
                className: "text-muted py-3 text-sm text-token-text-primary",
                children: e.jsx(r, { ...l.modelHelpText
                })
            }), e.jsx(G, {
                onSubmit: B,
                disabled: !_,
                tip: e.jsx(He, {
                    children: e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: e.jsx(r, { ...l.modelTip1
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.modelTip2
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.modelTip3
                            })
                        }), e.jsx("li", {
                            children: e.jsx(r, { ...l.modelTip4
                            })
                        })]
                    })
                }),
                hasModError: W === "about_model_message",
                value: y ? ? x,
                onChange: o => H({
                    aboutModelMessage: o.target.value
                })
            }), e.jsx("div", {
                className: "my-6 h-px bg-token-border-light"
            }), e.jsx(Ne, {
                disabledTools: I.disabledTools ? ? k ? ? [],
                onDisabledToolsChanged: o => H({
                    disabledTools: o
                })
            })]
        }), e.jsx("div", {
            className: "mt-4 md:mt-5",
            children: e.jsxs("div", {
                className: "flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3",
                children: [e.jsxs("label", {
                    className: "mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",
                    children: [e.jsx("div", {
                        className: "self-center text-sm text-token-text-primary",
                        children: e.jsx(r, { ...l.chatPreferencesEnable
                        })
                    }), e.jsx(we, {
                        enabled: _,
                        onChange: o => {
                            H({
                                enabled: o
                            })
                        },
                        label: _ ? s.formatMessage(l.disableToggleLabel) : s.formatMessage(l.enableToggleLabel)
                    })]
                }), e.jsx(A.Actions, {
                    secondaryButton: e.jsx(A.Button, {
                        onClick: ee,
                        children: e.jsx(r, { ...l.cancel
                        })
                    }),
                    primaryButton: e.jsx(A.Button, {
                        loading: Z,
                        onClick: B,
                        color: "primary",
                        visuallyDisabled: J,
                        disabled: !$,
                        children: e.jsx(r, { ...l.save
                        })
                    })
                })]
            })
        })]
    }, "user-context")
}

function Ys() {
    return pe({
        queryKey: ["traitPills"],
        queryFn: async () => {
            try {
                const t = await re.getTraitPills();
                return t ? Array.isArray(t) ? t : [] : []
            } catch {
                return [...Vs.map(s => ({
                    key: s,
                    label: s,
                    description: Ie[s].defaultMessage || ""
                })), ...Zs.map(s => ({
                    key: s,
                    label: s,
                    description: Ie[s].defaultMessage || ""
                }))]
            }
        },
        select: t => {
            const s = Math.ceil(t.length / 2 - 1);
            return {
                firstSet: t.slice(0, s),
                secondSet: t.slice(s)
            }
        }
    })
}
const Qs = ({
        onSelect: t,
        selectedTraits: s,
        setSelectedTraits: a
    }) => {
        const {
            data: i,
            isLoading: c
        } = Ys(), [d, n] = m.useState(!0);
        if (c) return e.jsx(ge, {});
        if (!i) return null;
        const f = d ? i.firstSet : i.secondSet,
            h = u => {
                s.includes(u.key) || (a(g => [...g, u.key]), t(u.description))
            },
            x = () => {
                a([]), n(u => !u)
            };
        return e.jsx("div", {
            children: e.jsxs("div", {
                className: "mt-2 flex flex-wrap gap-x-1 gap-y-2",
                children: [f.map(u => !s.includes(u.key) && e.jsxs(Te, {
                    size: "small",
                    color: "secondary",
                    className: "py-2 pl-2 pr-3 text-xs font-normal text-token-text-secondary",
                    onClick: () => h(u),
                    children: [e.jsx(Cs, {
                        className: "mr-[1px] h-4 w-4"
                    }), u.label]
                }, u.key)), e.jsx(Te, {
                    size: "small",
                    color: "secondary",
                    className: "text-token-text-secondary",
                    onClick: x,
                    children: e.jsx(Ts, {
                        className: "-mx-1 h-4 w-4"
                    })
                })]
            })
        })
    },
    He = ({
        children: t
    }) => e.jsx("div", {
        className: "whitespace-pre-line",
        children: t
    }),
    F = 1500,
    oe = t => t.length > F,
    G = ({
        disabled: t,
        onChange: s,
        onSubmit: a,
        placeholder: i,
        value: c,
        tip: d,
        hasModError: n,
        className: f,
        size: h = "md",
        showCharacterCount: x = !0,
        isNewCustomInstructionsUIEnabled: u = !1
    }) => {
        const g = ie(),
            b = m.useRef(null),
            S = js(),
            k = vs(),
            P = !S,
            [I, E] = m.useState(!1),
            [C, y] = m.useState(P),
            v = !P && I && !C,
            L = P && !C,
            U = oe(c),
            O = p => {
                p.nativeEvent.isComposing || !t && p.key === "Enter" && p.metaKey && !p.shiftKey && !p.nativeEvent.isComposing && (p.preventDefault(), a())
            },
            z = m.useRef(null);
        return e.jsxs(e.Fragment, {
            children: [d && e.jsx(ae, {
                isOpen: L,
                type: "success",
                size: "custom",
                className: "max-w-lg",
                title: g.formatMessage(l.tipsHeader),
                showCloseButton: !0,
                onClose: () => {
                    y(!0)
                },
                children: d
            }), e.jsxs(ks, {
                open: v,
                children: [e.jsxs("div", {
                    className: f,
                    ref: z,
                    children: [e.jsx(ws, {
                        asChild: !0,
                        children: e.jsx("textarea", {
                            ref: b,
                            className: Q("w-full resize-none bg-token-main-surface-primary", {
                                "rounded p-4": h !== "sm" && !u,
                                "rounded-lg border text-sm": h === "sm" || u,
                                "border-orange-400 focus:border-orange-400": n,
                                "border-red-500 focus:border-red-500": U && !n,
                                "focus-token-border-heavy border-token-border-light": !U && !n,
                                "opacity-30": t,
                                "placeholder:text-gray-400": h === "sm" || u,
                                "placeholder:text-gray-300": !u
                            }),
                            disabled: t,
                            placeholder: i,
                            onKeyDown: O,
                            rows: h === "sm" ? 1 : S && !k ? 6 : 5,
                            value: c,
                            onChange: s,
                            onBlur: () => {
                                E(!1)
                            },
                            onFocus: () => {
                                E(!0)
                            }
                        })
                    }), e.jsx("div", {
                        className: Q("flex items-center justify-between px-1 text-xs tabular-nums", U ? "text-red-600" : "text-token-text-tertiary"),
                        children: n ? e.jsx("div", {
                            className: "visible mt-2 text-left text-xs text-orange-400",
                            children: e.jsx(r, { ...l.modApiVoilation,
                                values: {
                                    policyLink: p => e.jsx("a", {
                                        href: "https://platform.openai.com/docs/usage-policies/content-policy",
                                        className: "underline",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: p
                                    }),
                                    feedbackLink: p => e.jsx("a", {
                                        href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                                        className: "underline",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: p
                                    })
                                }
                            })
                        }) : e.jsxs(e.Fragment, {
                            children: [x && e.jsx("div", {
                                children: `${c.length}/${F}`
                            }), d && e.jsx("button", {
                                className: "flex items-center gap-1",
                                onClick: () => {
                                    b.current ? .focus(), y(!C)
                                },
                                tabIndex: -1,
                                children: e.jsx(Ae, {
                                    initial: !1,
                                    children: I && e.jsx(De.div, {
                                        className: "flex items-center gap-1",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            transition: {
                                                duration: .2,
                                                ease: "easeIn"
                                            }
                                        },
                                        exit: {
                                            opacity: 0,
                                            transition: {
                                                duration: .2,
                                                ease: "easeIn"
                                            }
                                        },
                                        children: C ? e.jsxs(e.Fragment, {
                                            children: [e.jsx(r, { ...l.showTips
                                            }), e.jsx(Ps, {
                                                className: "icon-xs"
                                            })]
                                        }) : e.jsxs(e.Fragment, {
                                            children: [e.jsx(r, { ...l.hideTips
                                            }), e.jsx(as, {
                                                className: "icon-xs"
                                            })]
                                        })
                                    }, "show-hide")
                                })
                            })]
                        })
                    })]
                }), d && e.jsx(_s, {
                    container: z.current ? .ownerDocument.body,
                    children: e.jsx(Hs, {
                        side: "right",
                        align: "start",
                        sideOffset: 12,
                        className: "popover relative z-50 max-w-[220px] animate-slideLeftAndFade select-none rounded-xl border border-token-border-light bg-token-main-surface-primary p-4 text-sm text-token-text-primary shadow-[0px_4px_14px_rgba(0,0,0,0.06)] xl:max-w-xs",
                        onOpenAutoFocus: p => {
                            p.preventDefault()
                        },
                        onCloseAutoFocus: p => {
                            p.preventDefault()
                        },
                        children: e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx("strong", {
                                children: e.jsx(r, { ...l.tipsHeader
                                })
                            }), d]
                        })
                    })
                })]
            })]
        })
    };

function ue({
    primaryLabel: t,
    secondaryLabel: s,
    side: a = "top",
    icon: i = e.jsx(Re, {
        className: "h-4 w-4 text-token-text-tertiary"
    })
}) {
    return e.jsx(xe, {
        sideOffset: 4,
        interactive: !0,
        label: e.jsx("div", {
            children: t
        }),
        secondaryLabel: e.jsx("div", {
            children: s
        }),
        side: a,
        delayDuration: 0,
        theme: "primary",
        customPrimaryLabelColorStyle: "primary",
        customPaddingClassName: "p-2",
        customBorderClassName: "border border-token-border-light",
        labelTextAlign: "left",
        children: i
    })
}

function Oe({
    label: t,
    side: s = "bottom"
}) {
    return e.jsx(xe, {
        sideOffset: 4,
        interactive: !0,
        label: e.jsx("div", {
            children: t
        }),
        side: s,
        children: e.jsx(Re, {
            className: "h-4 w-4 text-token-text-tertiary"
        })
    })
}

function Ne({
    disabledTools: t,
    onDisabledToolsChanged: s,
    isNewCustomInstructionsUIEnabled: a = !1
}) {
    m.useEffect(() => {
        D.logEvent(R.userContextGpt4CapabilitiesShown)
    }, []);
    const c = os() ? .isEnterprisey() ? ? !1,
        d = !je(te.BrowsingAvailable) && c,
        n = g => {
            const b = t.includes(g) ? t.filter(S => S !== g) : [...t, g];
            s(b)
        },
        f = rs(),
        {
            value: h
        } = Y("2044826081"),
        x = !je(te.Canvas) && c;
    var u;
    return f ? .includes(te.SearchTool) && !f.includes(te.SearchToolHoldout) ? u = e.jsx(q, {
        title: e.jsx(r, {
            id: "userContextModal.tools.web",
            defaultMessage: "Web Search"
        }),
        tooltipLabel: d ? e.jsx(r, {
            id: "Osf0vy",
            defaultMessage: "Web Search is disabled by your organization"
        }) : e.jsx(r, {
            id: "userContexModal.tools.webSearchTooltip",
            defaultMessage: "Automatically search the web to get answers"
        }),
        tool: w.BROWSER,
        onClick: n,
        Icon: Pe,
        checked: !t.includes(w.BROWSER) && !d,
        disabled: d,
        isNewCustomInstructionsUIEnabled: a
    }) : u = e.jsx(q, {
        title: e.jsx(r, {
            id: "userContextModal.tools.browse",
            defaultMessage: "Browsing"
        }),
        tooltipLabel: d ? e.jsx(r, {
            id: "5SuA2c",
            defaultMessage: "Browsing is disabled by your organization"
        }) : e.jsx(r, {
            id: "userContexModal.tools.browserTooltip",
            defaultMessage: "Browse the internet to find answers"
        }),
        tool: w.BROWSER,
        onClick: n,
        Icon: Pe,
        checked: !t.includes(w.BROWSER) && !d,
        disabled: d,
        isNewCustomInstructionsUIEnabled: a
    }), e.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [e.jsxs("div", {
            className: "flex items-center gap-1",
            children: [e.jsx("div", {
                className: Q("text-sm", {
                    "text-muted font-medium": a,
                    "font-semibold": !a
                }),
                children: e.jsx(r, {
                    id: "userContextModal.gpt4CapabilitiesTitle",
                    defaultMessage: "ChatGPT capabilities"
                })
            }), e.jsx(Oe, {
                label: e.jsx(r, {
                    id: "userContextModal.tools.capabilitiesInfo.1",
                    defaultMessage: "Choose which tools can be used with GPT-4"
                }),
                side: "top"
            })]
        }), e.jsxs("div", {
            className: "mt-2 flex flex-col flex-wrap gap-3 md:flex-row",
            children: [u, e.jsx(q, {
                title: e.jsx(r, {
                    id: "userContextModal.tools.dalle",
                    defaultMessage: "DALL·E"
                }),
                tooltipLabel: e.jsx(r, {
                    id: "userContextModal.tools.dalleTooltip",
                    defaultMessage: "Generate images using DALL·E"
                }),
                tool: w.DALLE,
                onClick: n,
                Icon: Ns,
                checked: !t.includes(w.DALLE),
                isNewCustomInstructionsUIEnabled: a
            }), e.jsx(q, {
                title: e.jsx(r, {
                    id: "userContextModal.tools.codeInterpreter.1",
                    defaultMessage: "Code"
                }),
                tooltipLabel: e.jsx(r, {
                    id: "userContextModal.tools.codeInterpreterTooltip",
                    defaultMessage: "Execute code using Code Interpreter"
                }),
                tool: w.PYTHON,
                onClick: n,
                Icon: Is,
                checked: !t.includes(w.PYTHON),
                isNewCustomInstructionsUIEnabled: a
            }), h && !x && e.jsx(q, {
                title: e.jsx(r, {
                    id: "FW2C7Y",
                    defaultMessage: "Canvas"
                }),
                tooltipLabel: e.jsx(r, {
                    id: "dP6U4B",
                    defaultMessage: "Collaborate with ChatGPT on text and code"
                }),
                tool: w.CANMORE,
                onClick: n,
                Icon: Us,
                checked: !t.includes(w.CANMORE),
                isNewCustomInstructionsUIEnabled: a
            }), e.jsx(q, {
                title: e.jsx(r, {
                    id: "yaclI7",
                    defaultMessage: "Advanced Voice"
                }),
                tooltipLabel: e.jsx(r, {
                    id: "Pd4tO1",
                    defaultMessage: "More natural conversations in voice mode"
                }),
                tool: w.ADVANCED_VOICE,
                onClick: n,
                Icon: Es,
                checked: !t.includes(w.ADVANCED_VOICE),
                isNewCustomInstructionsUIEnabled: a
            })]
        })]
    })
}

function q({
    tool: t,
    title: s,
    tooltipLabel: a,
    Icon: i,
    onClick: c,
    checked: d,
    disabled: n,
    isNewCustomInstructionsUIEnabled: f = !1
}) {
    return e.jsx(xe, {
        className: "block",
        label: a,
        side: "top",
        sideOffset: 4,
        children: e.jsxs("button", {
            className: Q("flex w-full items-center justify-between gap-2 whitespace-nowrap rounded border border-token-border-medium p-2", {
                "cursor-not-allowed text-token-text-quaternary": n
            }),
            onClick: () => c(t),
            disabled: n,
            children: [e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [e.jsx(i, {
                    className: "h-4 w-4 text-token-text-tertiary"
                }), e.jsx("div", {
                    className: Q("text-sm", f ? "text-muted font-medium" : "font-semibold"),
                    children: s
                })]
            }), e.jsx(Ls, {
                id: t,
                checked: d && !n,
                disabled: n
            })]
        })
    })
}
const l = fe({
        tipsHeader: {
            id: "userContextModal.tipsHeader",
            defaultMessage: "Thought starters"
        },
        aboutUserTip1: {
            id: "userContextModal.aboutUserTip1",
            defaultMessage: "Where are you based?"
        },
        aboutUserTip2: {
            id: "userContextModal.aboutUserTip2",
            defaultMessage: "What do you do for work?"
        },
        aboutUserTip3: {
            id: "userContextModal.aboutUserTip3",
            defaultMessage: "What are your hobbies and interests?"
        },
        aboutUserTip4: {
            id: "userContextModal.aboutUserTip4",
            defaultMessage: "What subjects can you talk about for hours?"
        },
        aboutUserTip5: {
            id: "userContextModal.aboutUserTip5",
            defaultMessage: "What are some goals you have?"
        },
        modelTip1: {
            id: "userContextModal.modelTip1",
            defaultMessage: "How formal or casual should ChatGPT be?"
        },
        modelTip2: {
            id: "userContextModal.modelTip2",
            defaultMessage: "How long or short should responses generally be?"
        },
        modelTip3: {
            id: "userContextModal.modelTip3",
            defaultMessage: "How do you want to be addressed?"
        },
        modelTip4: {
            id: "userContextModal.modelTip4",
            defaultMessage: "Should ChatGPT have opinions on topics or remain neutral?"
        },
        save: {
            id: "userContextModal.save",
            defaultMessage: "Save"
        },
        chatPreferencesEnable: {
            id: "userContextModal.chatPreferencesEnable",
            defaultMessage: "Enable for new chats"
        },
        enableToggleLabel: {
            id: "userContextModal.enableToggleLabel",
            defaultMessage: "Enable chat preferences"
        },
        disableToggleLabel: {
            id: "userContextModal.disableToggleLabel",
            defaultMessage: "Disable chat preferences"
        },
        cancel: {
            id: "userContextModal.cancel",
            defaultMessage: "Cancel"
        },
        aboutYouHelpText: {
            id: "userContextModal.aboutYouHelpText",
            defaultMessage: "What would you like ChatGPT to know about you to provide better responses?"
        },
        modelHelpText: {
            id: "userContextModal.modelHelpText",
            defaultMessage: "How would you like ChatGPT to respond?"
        },
        profileTitle: {
            id: "userContextModal.title.1",
            defaultMessage: "Customize ChatGPT"
        },
        profileSubtitle: {
            id: "userContextModal.profileSubtitle",
            defaultMessage: "Introduce yourself to get better, more personalized responses"
        },
        profileSubtitleTooltip: {
            id: "userContextModal.profileSubtitleTooltip",
            defaultMessage: "ChatGPT will use the information you provide to tailor its responses to you. <link>Learn more</link> about how we use your data.",
            link: "https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt"
        },
        customizeName: {
            id: "userContextModal.customizeName",
            defaultMessage: "What should ChatGPT call you?"
        },
        customizeNamePlaceholder: {
            id: "userContextModal.customizeNamePlaceholder",
            defaultMessage: "Name"
        },
        customizeRole: {
            id: "userContextModal.customizeRole",
            defaultMessage: "What do you do?"
        },
        customizeRolePlaceholder: {
            id: "userContextModal.customizeRolePlaceholder",
            defaultMessage: "Engineer, student, etc."
        },
        customizeTraits: {
            id: "userContextModal.customizeTraits",
            defaultMessage: "What traits should ChatGPT have?"
        },
        customizeTraitsPlaceholder: {
            id: "userContextModal.customizeTraitsPlaceholder",
            defaultMessage: "Describe or select traits"
        },
        customizeOther: {
            id: "userContextModal.customizeOther",
            defaultMessage: "Anything else ChatGPT should know about you?"
        },
        customizeOtherPlaceholder: {
            id: "userContextModal.customizeOtherPlaceholder",
            defaultMessage: "Interests, values, or preferences to keep in mind"
        },
        customInstructionsTitle: {
            id: "userContextModal.customInstructionsTitle",
            defaultMessage: "Custom Instructions"
        },
        customInstructionsTooltip: {
            id: "userContextModal.customInstructionsTooltip",
            defaultMessage: "<article>Learn more</article> about Custom Instructions and how they're used to help ChatGPT provide better responses."
        },
        traitsTooltipTitle: {
            id: "userContextModal.traitsTooltipTitle",
            defaultMessage: "You can tell ChatGPT to do things like..."
        },
        traitsTooltipBodyItem1: {
            id: "userContextModal.traitsTooltipBodyItem1",
            defaultMessage: "Use a formal, professional tone."
        },
        traitsTooltipBodyItem2: {
            id: "userContextModal.traitsTooltipBodyItem2",
            defaultMessage: "Be casual and chatty."
        },
        traitsTooltipBodyItem3: {
            id: "userContextModal.traitsTooltipBodyItem3",
            defaultMessage: "Be opinionated. If a question could have multiple answers, try to give only the best one."
        },
        otherTooltipTitle: {
            id: "userContextModal.otherTooltipTitle",
            defaultMessage: "You can share things like..."
        },
        otherTooltipBodyItem1: {
            id: "userContextModal.otherTooltipBodyItem1",
            defaultMessage: "I love hiking and jazz."
        },
        otherTooltipBodyItem2: {
            id: "userContextModal.otherTooltipBodyItem2",
            defaultMessage: "I'm vegetarian."
        },
        otherTooltipBodyItem3: {
            id: "userContextModal.otherTooltipBodyItem3",
            defaultMessage: "I'm trying to learn French."
        },
        messageLimitError: {
            id: "userContextModal.messageLimitError",
            defaultMessage: "Please limit your responses to {limit} characters or less."
        },
        showTips: {
            id: "userContextModal.showTips",
            defaultMessage: "Show tips"
        },
        hideTips: {
            id: "userContextModal.hideTips",
            defaultMessage: "Hide tips"
        },
        confirmCloseTitle: {
            id: "userContextModal.confirmCloseTitle",
            defaultMessage: "You have unsaved changes."
        },
        confirmCloseBody: {
            id: "userContextModal.confirmCloseBody",
            defaultMessage: "Are you sure you want to exit? Any changes you made will be permanently lost."
        },
        confirmCloseCancel: {
            id: "userContextModal.confirmCloseCancel",
            defaultMessage: "Back"
        },
        confirmCloseOk: {
            id: "userContextModal.confirmCloseOk",
            defaultMessage: "Exit"
        },
        modApiVoilation: {
            id: "userContextModal.modApiVoilation",
            defaultMessage: "This content may violate our <policyLink>content policy</policyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area."
        },
        browser: {
            id: "userContexModal.tools.browserTooltip",
            defaultMessage: "Browse the internet to find answers"
        },
        dalle: {
            id: "userContexModal.tools.dalleTooltip",
            defaultMessage: "Generate images using DALL·E"
        },
        python: {
            id: "userContexModal.tools.codeInterpreterTooltip",
            defaultMessage: "Execute code using Code Interpreter"
        },
        advanced: {
            id: "userContextModal.advanced",
            defaultMessage: "Advanced"
        }
    }),
    Vs = ["Chatty", "Witty", "Opinionated", "StraightShooting", "GenZ", "Encouraging", "Skeptical", "ForwardThinking"],
    Zs = ["Poetic", "Respectful", "Humble", "Professional", "Corporate", "Direct", "Silly", "Pragmatic", "Chill", "OutsideTheBox"],
    Ie = fe({
        Chatty: {
            id: "userContextModal.chattySentence",
            defaultMessage: "Be talkative and conversational."
        },
        Witty: {
            id: "userContextModal.wittySentence",
            defaultMessage: "Use quick and clever humor when appropriate."
        },
        StraightShooting: {
            id: "userContextModal.straightShootingSentence",
            defaultMessage: "Tell it like it is; don't sugar-coat responses."
        },
        Encouraging: {
            id: "userContextModal.encouragingSentence",
            defaultMessage: "Use an encouraging tone."
        },
        GenZ: {
            id: "userContextModal.genZSentence",
            defaultMessage: "Talk like a member of Gen Z."
        },
        Skeptical: {
            id: "userContextModal.skepticalSentence",
            defaultMessage: "Adopt a skeptical, questioning approach."
        },
        ForwardThinking: {
            id: "userContextModal.forwardThinkingSentence",
            defaultMessage: "Take a forward-thinking view."
        },
        Poetic: {
            id: "userContextModal.poeticSentence",
            defaultMessage: "Use a poetic, lyrical tone."
        },
        Opinionated: {
            id: "userContextModal.opinionatedSentence",
            defaultMessage: "Readily share strong opinions."
        },
        Respectful: {
            id: "userContextModal.respectfulSentence",
            defaultMessage: "Always be respectful."
        },
        Humble: {
            id: "userContextModal.humbleSentence",
            defaultMessage: "Be humble when appropriate."
        },
        Professional: {
            id: "userContextModal.professionalSentence",
            defaultMessage: "Use a formal, professional tone."
        },
        Silly: {
            id: "userContextModal.sillySentence",
            defaultMessage: "Be playful and goofy."
        },
        Direct: {
            id: "userContextModal.directSentence",
            defaultMessage: "Get right to the point."
        },
        Pragmatic: {
            id: "userContextModal.pragmaticSentence",
            defaultMessage: "Be practical above all."
        },
        Corporate: {
            id: "userContextModal.corporateSentence",
            defaultMessage: "Respond with corporate jargon."
        },
        Chill: {
            id: "userContextModal.chillSentence",
            defaultMessage: "Keep it relaxed and easygoing."
        },
        OutsideTheBox: {
            id: "userContextModal.outsideTheBoxSentence",
            defaultMessage: "Be innovative and think outside the box."
        }
    }),
    Xs = fe({
        engineeringStudent: {
            id: "userContextModal.rolePlaceholder.engineeringStudent",
            defaultMessage: "Engineering student at University of Waterloo"
        },
        gastroenterologist: {
            id: "userContextModal.rolePlaceholder.gastroenterologist",
            defaultMessage: "Gastroenterologist"
        },
        sourdoughBaker: {
            id: "userContextModal.rolePlaceholder.sourdoughBaker",
            defaultMessage: "Small-batch home sourdough baker"
        },
        interiorDesigner: {
            id: "userContextModal.rolePlaceholder.interiorDesigner",
            defaultMessage: "Interior designer"
        },
        daycareManager: {
            id: "userContextModal.rolePlaceholder.daycareManager",
            defaultMessage: "Home daycare manager"
        },
        familyLawAttorney: {
            id: "userContextModal.rolePlaceholder.familyLawAttorney",
            defaultMessage: "Family law attorney"
        },
        excelWizard: {
            id: "userContextModal.rolePlaceholder.excelWizard",
            defaultMessage: "Excel wizard"
        },
        level10Mage: {
            id: "userContextModal.rolePlaceholder.level10Mage",
            defaultMessage: "Level 10 mage"
        },
        pharmaSales: {
            id: "userContextModal.rolePlaceholder.pharmaSales",
            defaultMessage: "Pharma sales"
        },
        freelanceCopywriter: {
            id: "userContextModal.rolePlaceholder.freelanceCopywriter",
            defaultMessage: "Freelance copywriter"
        },
        weddingPhotographer: {
            id: "userContextModal.rolePlaceholder.weddingPhotographer",
            defaultMessage: "Wedding photographer"
        },
        catHerder: {
            id: "userContextModal.rolePlaceholder.catHerder",
            defaultMessage: "Professional cat herder"
        },
        cdlDriver: {
            id: "userContextModal.rolePlaceholder.cdlDriver",
            defaultMessage: "CDL driver"
        },
        thirdGradeTeacher: {
            id: "userContextModal.rolePlaceholder.thirdGradeTeacher",
            defaultMessage: "Third-grade teacher"
        }
    }),
    Js = {
        initial: {
            opacity: 0,
            y: 8
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .2
            }
        },
        exit: {
            opacity: 0,
            y: -8,
            transition: {
                duration: .2
            }
        }
    },
    me = ["engineeringStudent", "gastroenterologist", "sourdoughBaker", "interiorDesigner", "daycareManager", "familyLawAttorney", "excelWizard", "level10Mage", "pharmaSales", "freelanceCopywriter", "weddingPhotographer", "catHerder", "cdlDriver", "thirdGradeTeacher"];

function $s() {
    const t = Ks();
    return {
        userIsInSearchHoldoutWithWebDisabled: t.isLoading ? !0 : t.data ? .userIsInSearchHoldoutWithWebDisabled
    }
}

function et(t) {
    const s = Bs(t);
    let a = he(t, g => g ? .mode);
    const i = As(),
        c = ie(),
        {
            getShowUpsellReason: d
        } = Ds(),
        n = m.useMemo(() => {
            let g = i.isSuccess && i.data ? i.data : void 0;
            if (d()) {
                const b = Rs(c);
                if (!g) return b;
                const S = g;
                g = [...S, ...b.filter(k => !S.some(P => P.systemHint === k.systemHint))]
            }
            return g ? ? []
        }, [d, c, i.data, i.isSuccess]),
        f = Os({
            clientThreadId: t
        }),
        {
            userIsInSearchHoldoutWithWebDisabled: h
        } = $s(),
        x = is();
    return m.useMemo(() => st({
        modelConfig: s,
        userIsInSearchHoldoutWithWebDisabled: h,
        isTemporaryChatEnabled: x,
        conversationMode: a,
        systemHints: n,
        modelSwitcherDenials: f
    }), [n, s, f, a, h, x])
}

function st({
    modelConfig: t,
    userIsInSearchHoldoutWithWebDisabled: s,
    isTemporaryChatEnabled: a,
    conversationMode: i,
    systemHints: c,
    modelSwitcherDenials: d
}) {
    return tt({
        modelConfig: t,
        systemHints: c
    }).filter(n => n.systemHint === M.Search && s || n.systemHint === M.Canvas && a || !(n.requiredModels.length === 0 || n.requiredModels.some(x => !d[x])) || !(n.requiredConversationModes.length === 0 || n.requiredConversationModes.some(x => x === i ? .kind)) ? !1 : n.systemHint === M.Research ? !a && i ? .kind === ls.PrimaryAssistant : !0)
}

function tt({
    modelConfig: t,
    systemHints: s
}) {
    const a = new Set(t ? .enabledTools || []);
    return s.filter(i => i.requiredFeatures.length === 0 || i.requiredFeatures.every(d => a.has(d)) ? i.systemHint === "contextual_answers" && t ? i.requiredModels ? .includes(t.id) : !0 : !1)
}
const ze = "persistedSystemHintsSessionState",
    Ue = [M.Search, M.Think];

function Fe() {
    const t = sessionStorage.getItem(ze);
    return t ? JSON.parse(t) : null
}

function We(t) {
    sessionStorage.setItem(ze, JSON.stringify(t))
}

function Ee(t, s) {
    const a = Fe() ? ? {};
    a[t] = s, We(a)
}

function at() {
    We({})
}
class N extends ns()(s => ({
    persistedSystemHints: new Set(s),
    persistedSystemHintTriggers: {}
})) {
    static getPersistedSystemHints = ({
        persistedSystemHints: s
    }) => s;
    addPersistedSystemHint = (s, a, i, c) => {
        s === M.Search && D.logEventWithStatsig(R.searchModeEngaged, "search_mode_engaged", { ...ve(a),
            triggerSource: c
        }), this.setState(({
            persistedSystemHints: d,
            persistedSystemHintTriggers: n
        }) => ({
            persistedSystemHints: new Set(d).add(s),
            persistedSystemHintTriggers: { ...n,
                [s]: c
            }
        })), i && Ue.includes(s) && Ee(s, !0)
    };
    removePersistedSystemHint = (s, a, i) => {
        s === M.Search && D.logEventWithStatsig(R.searchModeDisabled, "search_mode_disabled", ve(a)), this.setState(({
            persistedSystemHints: c,
            persistedSystemHintTriggers: d
        }) => {
            const n = new Set(c);
            n.delete(s);
            const f = { ...d
            };
            return delete f[s], {
                persistedSystemHints: n,
                persistedSystemHintTriggers: f
            }
        }), i && Ue.includes(s) && Ee(s, !1)
    };
    getPersistedSystemHintTrigger = s => {
        if (this.getState().persistedSystemHints.has(s)) return this.getState().persistedSystemHintTriggers[s]
    };
    clearPersistedSystemHintTrigger = s => {
        this.setState(({
            persistedSystemHints: a,
            persistedSystemHintTriggers: i
        }) => {
            const c = { ...i
            };
            delete c[s];
            const d = new Set(a);
            return d.delete(s), {
                persistedSystemHints: d,
                persistedSystemHintTriggers: c
            }
        })
    };
    clearAllPersistedSystemHintTriggers = s => {
        this.setState(() => ({
            persistedSystemHints: new Set,
            persistedSystemHintTriggers: {}
        })), s && at()
    }
}
const ct = () => N.useState(N.getPersistedSystemHints);

function Le(t, s) {
    const a = [];
    return t && a.push(M.Search), s && a.push(M.Think), a
}

function ut({
    children: t,
    clientThreadId: s
}) {
    const [a] = gs(), i = a.get(zs) === M.Search, c = he(s, v => ke.getGizmoId(v)), d = Fs(s), n = Ws(d, ds.Search), h = et(s).find(v => v.systemHint === M.Think), {
        value: x
    } = Y("3780975974"), {
        value: u
    } = Y("759329447"), {
        value: g
    } = Y("2800342425"), b = he(s, ke.getLastMessageSystemHints), S = (b.includes(M.Search) || i) && n, k = !!(u && h && b.includes(M.Think));
    let P = Fe() ? ? {};
    const I = !!(n && P[M.Search]),
        E = !!(u && h && P[M.Think]);
    let C = Le(S, k);
    g && (C = Le(S || I, k || E));
    const [y] = m.useState(() => new N(C));
    return m.useEffect(() => {
        const v = y.getState().persistedSystemHints;
        (S || g && I && !c) && !v.has(M.Search) && y ? .addPersistedSystemHint(M.Search, {
            clientThreadId: s,
            turnIndex: 0
        }), (k || g && E && !c) && !v.has(M.Think) && x && y ? .addPersistedSystemHint(M.Think, {
            clientThreadId: s,
            turnIndex: 0
        })
    }, [S, k, x, y, s, g, I, E, c]), e.jsx(N.Provider, {
        store: y,
        children: t
    })
}
const ot = "prompt-textarea";

function mt() {
    document.getElementById(ot) ? .focus()
}
const gt = {
        getAndReset: (t, s) => {
            const a = de.getItem(ce.RestoreMessageAfterOauthRedirect);
            return de.removeItem(ce.RestoreMessageAfterOauthRedirect), !a || a.userId !== t || s !== a.serverThreadId || Date.now() > a.expiresAt ? null : a
        },
        set: (t, s, a) => {
            const i = {
                userId: t,
                serverThreadId: s,
                inputText: a,
                expiresAt: Date.now() + 6e4
            };
            de.setItem(ce.RestoreMessageAfterOauthRedirect, i)
        }
    },
    ht = () => N.useState(N.getPersistedSystemHints).has(M.Search),
    xt = () => N.useState(N.getPersistedSystemHints),
    ft = t => N.useState(N.getPersistedSystemHints).has(t),
    pt = () => {
        const t = N.useStore(),
            {
                value: s
            } = Y("2800342425"),
            a = m.useCallback(n => t.getPersistedSystemHintTrigger(n), [t]),
            i = m.useCallback(n => t.clearPersistedSystemHintTrigger(n), [t]),
            c = m.useCallback(() => t.clearAllPersistedSystemHintTriggers(s), [t, s]),
            d = m.useCallback((n, f, h, x) => {
                (f ? t.addPersistedSystemHint : t.removePersistedSystemHint)(n, h, s, x)
            }, [t, s]);
        return {
            getSystemHintModeTrigger: a,
            clearSystemHintModeTrigger: i,
            setThreadSystemHintMode: d,
            clearAllSystemHintModeTriggers: c
        }
    },
    Mt = (t, s, a, i) => t ? "file_upload_pending" : i ? "async_task_pending" : s ? a ? "text_content_too_long" : void 0 : "empty_text_content",
    rt = t => t.replace(/[\u{E0000}-\u{E007F}]+/gu, ""),
    St = t => {
        const s = rt(t.getContentToSend().content);
        return Math.ceil(s.length / 4)
    };

function yt(t, s) {
    return t ? s === void 0 ? !0 : s.includes(t) : !1
}
export {
    ut as P, ot as T, dt as U, ct as a, pt as b, $s as c, qs as d, ft as e, N as f, tt as g, ht as h, et as i, St as j, gt as k, yt as l, Mt as m, rt as s, mt as t, xt as u
};
//# sourceMappingURL=cxz91putlw7pmfk2.js.map