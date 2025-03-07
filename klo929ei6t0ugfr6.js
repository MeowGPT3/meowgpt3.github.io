const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dgty7ziunhhq6vyd.js", "assets/mna1wiucqak6lqzp.js", "assets/lwme42j7zzyr3q7j.js", "assets/bq4rrqi54riy5k2e.js", "assets/root-ey6kd8gf.css", "assets/conversation-small-fu0y35oi.css", "assets/n9hd7wgx8jqnonth.js", "assets/d3y72ugnrmac5z1v.js", "assets/sec85tgb7vkty17r.js", "assets/fzrn137102spawew.js", "assets/e9lafxuzyeh4418f.js", "assets/eqjyr70wex3y5gfz.js"]))) => i.map(i => d[i]);
import {
    j as e,
    M as u,
    e as Te,
    r as o,
    av as k,
    c as L,
    u as ke,
    d as oe,
    ax as G,
    R as z
} from "./mna1wiucqak6lqzp.js";
import {
    lS as le,
    lT as ce,
    lU as Pe,
    l as Q,
    ba as de,
    lV as ue,
    U as P,
    G as Ie,
    f_ as H,
    k0 as _e,
    k2 as Fe,
    lW as Ae,
    lX as W,
    lY as Ue,
    lZ as Be,
    l_ as te,
    N as me,
    l$ as Ee,
    m0 as Re,
    bl as Le,
    dR as fe,
    m1 as Oe,
    m2 as We,
    gR as ae,
    fU as De,
    jR as ze,
    m3 as He,
    aq as Ve,
    dT as qe,
    dS as Ge,
    m4 as U,
    m5 as $e,
    g3 as Xe,
    bE as Ye,
    jf as Ze,
    m6 as Ke,
    m7 as J,
    m8 as Qe,
    m9 as Je,
    ma as es,
    mb as ss,
    mc as ts,
    md as as,
    me as ne,
    mf as ns,
    mg as is,
    mh as rs,
    B as ge,
    bn as os,
    mi as ls,
    lj as cs,
    mj as ds,
    ln as us,
    lt as ms,
    mk as fs,
    ml as gs,
    mm as hs,
    mn as he,
    mo as ps,
    mp as xs,
    mq as js,
    z as bs,
    fv as ys,
    hy as vs,
    mr as Ss,
    ms as Cs,
    df as ws
} from "./lwme42j7zzyr3q7j.js";
import {
    k as O,
    P as j,
    e6 as Ms,
    a0 as Ns,
    B as Ts,
    f as ks,
    b_ as R,
    dl as Ps,
    d as w,
    cc as Is,
    ce as _s,
    cf as Fs,
    ch as As,
    r as $,
    bs as pe,
    Z as xe,
    S as V,
    a as q,
    gC as Us,
    c1 as Bs,
    bz as Es,
    bA as Rs,
    N as Ls,
    aB as Os,
    cr as Ws,
    aj as Ds,
    cs as zs,
    av as je,
    cp as Hs,
    U as Vs,
    gD as qs,
    bv as D,
    C as Gs,
    j as $s,
    fE as Xs,
    ak as Ys,
    dt as Zs,
    bY as Z,
    aa as Ks,
    bu as be,
    ca as Qs,
    bZ as Js,
    bL as et,
    e2 as x,
    e1 as st
} from "./bq4rrqi54riy5k2e.js";
import {
    N as ye,
    h as tt,
    U as ve,
    i as at
} from "./niyc1j17i1iogjjg.js";

function Lt({
    onClick: s,
    className: t,
    ...a
}) {
    return e.jsx(tt, {
        onClick: s,
        className: w(t, "flex-grow overflow-hidden"),
        ...a
    })
}

function Ot({
    onNewChatButtonClick: s
}) {
    const {
        isUnauthenticated: t,
        isLoading: a
    } = O();
    return a || !t ? null : e.jsx(ye, {
        className: "mr-3",
        onClick: () => {
            j.logNewChatButtonClicked({
                location: "Mobile header"
            }), s()
        }
    })
}

function Wt({
    onNewChatButtonClick: s,
    clientThreadId: t
}) {
    const {
        isUnauthenticated: a,
        isLoading: n
    } = O(), r = le(), i = Ms(t), l = ce(i), c = Ns(t, Ts.getIsNewConversation), g = ks(), m = c && g && l;
    if (n) return null;
    if (a) return r ? e.jsx(it, {}) : e.jsx(nt, {});
    const f = e.jsx(ye, {
        onClick: () => {
            j.logNewChatButtonClicked({
                location: "Mobile header"
            }), s()
        }
    });
    return m ? e.jsx(Pe, {
        layout: "compact",
        clientThreadId: t
    }) : f
}

function nt() {
    const s = Q(),
        t = de(Ce.signUpButtonText);
    return e.jsx(R, {
        as: "button",
        size: "small",
        color: "primary",
        onClick: () => {
            s({
                authType: "signup",
                callback: a => {
                    j.logSignUpButtonClicked({
                        location: "Mobile Chat Stage Header",
                        provider: a
                    })
                }
            })
        },
        children: e.jsx(u, { ...t
        })
    })
}

function it() {
    const s = Q();
    return e.jsx(R, {
        as: "button",
        size: "small",
        color: "primary",
        onClick: () => {
            s({
                authType: "login",
                callback: t => {
                    j.logLogInButtonClicked({
                        location: "Mobile Chat Stage Header",
                        provider: t
                    })
                }
            })
        },
        "data-testid": "mobile-login-button",
        children: e.jsx(u, { ...Ps.logInButtonText
        })
    })
}

function rt({
    onClick: s
}) {
    const t = _e(Ae, Fe, !0, !0);
    return e.jsxs("button", {
        type: "button",
        className: "inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",
        onClick: s,
        "data-testid": "open-sidebar-button",
        children: [e.jsx("span", {
            className: "sr-only",
            children: e.jsx(u, { ...Ce.openSidebar
            })
        }), e.jsx(t, {
            className: "icon-lg mx-2 text-token-text-secondary"
        })]
    })
}
const ot = ({
    onOpenSidebar: s,
    children: t,
    showNavSidebar: a,
    leftContent: n,
    rightContent: r,
    bottomContent: i
}) => {
    const l = Te(),
        c = l.pathname + l.search + l.hash;
    return o.useEffect(() => {
        ue(window) || P.toggleNavCollapsed(!0)
    }, [c]), e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",
            children: [(a || n) && e.jsxs("div", {
                className: "no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",
                children: [a && e.jsx(rt, {
                    onClick: s
                }), n]
            }), e.jsx("div", {
                className: "no-draggable",
                children: t
            }), r && e.jsx("div", {
                className: "no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",
                children: r
            })]
        }), i && e.jsx("div", {
            className: "no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",
            children: i
        })]
    })
};

function lt({
    isPopoverOnDesktop: s = !1,
    wasCollapsed: t = !1,
    children: a
}) {
    const n = Ie();
    H.markStart("StageNavigationSidebar"), H.markRendered("StageNavigationSidebar");
    const r = !n || s;
    return e.jsxs(e.Fragment, {
        children: [r ? e.jsx(dt, {
            children: a
        }) : null, n && !r && e.jsx(ct, {
            wasCollapsed: !s && t,
            children: a
        })]
    })
}
const Se = {
        type: "spring",
        bounce: .12,
        duration: .64
    },
    ie = { ...Se,
        duration: .4
    };

function ct({
    wasCollapsed: s,
    children: t
}) {
    const a = o.useRef(null),
        n = o.useRef(void 0);
    return n.current === void 0 && (n.current = ue(window)), n.current && H.trackNamespace(H.NS_SIDEBAR), e.jsx(k.div, {
        className: w("z-[21] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0"),
        ref: a,
        initial: s ? {
            width: 0
        } : !1,
        transition: Se,
        animate: {
            width: 260
        },
        exit: {
            width: 0
        },
        children: e.jsx("div", {
            className: "h-full w-[260px]",
            children: e.jsx("div", {
                className: "flex h-full min-h-0 flex-col",
                children: t
            })
        })
    })
}

function dt({
    children: s
}) {
    return e.jsx(Is, {
        open: !0,
        onOpenChange: t => {
            t || P.toggleNavCollapsed(!0)
        },
        children: e.jsxs(_s, {
            forceMount: !0,
            children: [e.jsx(Fs, {
                asChild: !0,
                className: "fixed inset-0 z-10 bg-gray-50/50 dark:bg-black/50",
                children: e.jsx(k.div, {
                    transition: ie,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    }
                })
            }), e.jsx(As, {
                asChild: !0,
                className: "fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none top-banner-visible:bottom-0 top-banner-visible:top-[--top-banner-height,0px] top-banner-visible:h-auto dark:border-gray-800",
                children: e.jsx(k.div, {
                    transition: ie,
                    initial: {
                        translateX: "-100%"
                    },
                    animate: {
                        translateX: "0"
                    },
                    exit: {
                        translateX: "-100%"
                    },
                    children: s
                })
            })]
        })
    })
}
const Ce = $({
    closeSidebar: {
        id: "navigation.closeSidebar",
        defaultMessage: "Close sidebar"
    },
    openSidebar: {
        id: "navigation.openSidebar",
        defaultMessage: "Open sidebar"
    },
    signUpButtonText: {
        id: "navigation.signUpButtonText",
        defaultMessage: "Sign up"
    }
});

function ut({
    showFreeTrialLoadingPayment: s,
    handleGetPaymentLink: t
}) {
    const a = L(),
        n = () => {
            s || (W(!0), t())
        },
        r = p => {
            p.stopPropagation(), Ue(!0), Be(!0)
        },
        {
            data: i,
            isLoading: l,
            isSuccess: c
        } = ke({
            queryKey: ["claimedReferralInvite"],
            queryFn: () => xe.getClaimedReferralInvite(),
            refetchOnMount: !1,
            refetchOnWindowFocus: !1,
            refetchInterval: !1,
            refetchOnReconnect: !1
        }),
        g = i ? .invite_code,
        [m, f] = o.useState(!1);
    if (o.useEffect(() => {
            g && !m && c && (f(!0), V.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"), j.logEvent(q.chatgptReferralShowClaimedSidebartMenuPromo))
        }, [g, f, m, c]), !g || l || !c) return null;
    const d = g.invite_metadata.invite_data,
        h = d ? .referral_trial_duration_months ? d ? .referral_trial_duration_months > 1 ? a.formatMessage(K.monthsOfBenefit, {
            referralTrialDurationMonths: d ? .referral_trial_duration_months
        }) : a.formatMessage(K.daysOfBenefit, {
            referralTrialDurationDays: d ? .referral_trial_duration_days
        }) : null;
    return e.jsx(k.div, {
        className: w("relative", {
            "cursor-progress opacity-50": s
        }),
        layout: "position",
        initial: {
            y: -10,
            opacity: 1
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .1,
                ease: "easeIn"
            }
        },
        children: e.jsxs(mt, {
            className: w(s && "opacity-75"),
            onClick: n,
            children: [e.jsxs("div", {
                className: "flex w-full flex-row items-center justify-start gap-3",
                children: [e.jsx(Us, {
                    className: "icon-sm shrink-0"
                }), e.jsx(u, { ...K.freeTrialCta,
                    values: {
                        duration: h
                    }
                })]
            }), !s && e.jsx(Bs, {
                onClick: r,
                className: "icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"
            }), e.jsx("span", {
                className: "absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"
            })]
        })
    })
}
const mt = pe.a `group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,
    K = $({
        freeTrialCta: {
            id: "PaymentMenuItems.freeTrialCta",
            defaultMessage: "Get {duration}!"
        },
        monthsOfBenefit: {
            id: "FreeTrialMenuItem.monthsOfBenefit",
            defaultMessage: "{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"
        },
        daysOfBenefit: {
            id: "FreeTrialMenuItem.daysOfBenefit",
            defaultMessage: "{referralTrialDurationDays, plural, one {one day free} other {# days free}}"
        }
    }),
    ft = Es(() => Rs(() =>
        import ("./dgty7ziunhhq6vyd.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])));

function gt() {
    const s = L(),
        t = Ls(),
        a = Os(),
        {
            isLoading: n,
            data: r
        } = Ws(),
        i = Ds(r),
        l = i ? .hasPaidSubscription() ? ? !1,
        c = i ? .hasClaimedFreeTrial() ? ? !1,
        g = o.useMemo(() => i ? .subscriptionAnalyticsParams, [i]),
        m = async () => {
            W(!0), j.logEvent(q.accountPayPaymentCheckoutClicked, g);
            try {
                const S = await xe.getCheckoutLink(a, "PaymentMenuItems");
                window.location.href = S.url
            } catch {
                t.warning(s.formatMessage(C.paymentErrorWarning), {
                    hasCloseButton: !0
                }), W(!1)
            } finally {}
        },
        f = () => {
            h || (W(!0), m())
        },
        d = te(S => S.didCloseFreeTrial),
        h = te(S => S.showFreeTrialLoadingPayment),
        p = !d && c,
        M = i ? .wasPaidCustomer() ? ? !1;
    let b = i ? .isWorkspaceAccount() ? ? !1;
    const v = i ? .hasPaidSubscription() ? ? !1,
        y = i ? .isPlus() ? ? !1,
        N = r && zs(r),
        {
            layer: I
        } = je("2670443078");
    let F = y;
    !b && !y && N && I.get("is_gating_fix_enabled", !1) && (F = N, b = !0);
    const A = !n && !b,
        X = oe(),
        ee = () => {
            j.logEvent(q.accountPayClickSidebarAccountPay, g), Le(X, "Sidebar account payment menu item")
        };
    var Y = i ? .isTeam() ? ? !1;
    return e.jsxs(e.Fragment, {
        children: [!l && p && e.jsx(ut, {
            showFreeTrialLoadingPayment: h,
            handleGetPaymentLink: m
        }), Y ? e.jsx(ht, {
            currentWorkspace: i
        }) : null, A && e.jsx(ve, {
            onClick: p ? f : ee,
            className: "m-0 rounded-lg px-2",
            children: e.jsx("span", {
                className: "flex w-full flex-row flex-wrap-reverse justify-between",
                children: e.jsx("div", {
                    className: "flex items-center gap-2",
                    children: e.jsx(pt, {
                        wasPaidCustomer: M,
                        showFreeTrialLoadingPayment: h,
                        hasPlusSubscription: F,
                        hasPaidSubscription: v
                    })
                })
            })
        })]
    })
}
const ht = ({
        currentWorkspace: s
    }) => e.jsxs(e.Fragment, {
        children: [e.jsx(ve, {
            onClick: () => {
                P.openModal(me.InviteUsersToWorkspace), j.logEvent(q.accountMemberInviteButton, {
                    location: "payment-menu-click"
                }), V.logEvent("chatgpt_invite_users_to_workspace", 0, {
                    action: "OpenAdminInviteModal",
                    location: "payment-menu-click",
                    text: "AddTeammatesWithInfo",
                    step: "OpenModal"
                })
            },
            className: "m-0 rounded-lg px-2",
            children: e.jsx("span", {
                className: "flex w-full flex-row flex-wrap-reverse justify-between",
                children: e.jsx("div", {
                    className: "flex items-center gap-2",
                    children: e.jsxs(e.Fragment, {
                        children: [e.jsx("span", {
                            className: "flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",
                            children: e.jsx(Ee, {
                                className: "icon-sm shrink-0"
                            })
                        }), e.jsx("div", {
                            className: "flex flex-col",
                            children: e.jsxs(e.Fragment, {
                                children: [e.jsx("span", {
                                    children: e.jsx(u, { ...C.addTeammates
                                    })
                                }), e.jsx("span", {
                                    className: "line-clamp-1 text-xs text-token-text-tertiary",
                                    children: e.jsx(u, { ...C.addTeammatesUpsell
                                    })
                                })]
                            })
                        })]
                    })
                })
            })
        }), s != null ? e.jsx(ft, {
            workspace: s
        }) : null]
    }),
    pt = ({
        wasPaidCustomer: s,
        showFreeTrialLoadingPayment: t,
        hasPlusSubscription: a,
        hasPaidSubscription: n
    }) => t ? e.jsx(Hs, {
        className: "icon-sm shrink-0"
    }) : n && !a ? null : e.jsxs(e.Fragment, {
        children: [e.jsx("span", {
            className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-token-border-light",
            children: e.jsx(Re, {
                className: "icon-sm"
            })
        }), e.jsx("div", {
            className: "flex flex-col",
            children: s ? e.jsx(u, { ...C.renewPlus
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx("span", {
                    children: a ? e.jsx(u, { ...C.viewPlans
                    }) : !n && e.jsx(u, { ...C.upgradePlan
                    })
                }), e.jsx("span", {
                    className: "line-clamp-1 text-xs text-token-text-tertiary",
                    children: a ? e.jsx(u, { ...C.upgradeToProOrTeamUpsell
                    }) : !n && e.jsx(u, { ...C.upgradeToPlusUpsell
                    })
                })]
            })
        })]
    }),
    C = $({
        upgradePlan: {
            id: "PaymentMenuItems.upgradePlan",
            defaultMessage: "Upgrade plan"
        },
        createATeamWorkspace: {
            id: "PaymentMenuItems.createATeamWorkspace",
            defaultMessage: "Add Team workspace"
        },
        viewPlans: {
            id: "PaymentMenuItems.viewPlans",
            defaultMessage: "View plans"
        },
        upgradeToTeamUpsell: {
            id: "PaymentMenuItems.upgradeToTeamUpsell",
            defaultMessage: "Collaborate on a Team plan"
        },
        upgradeToProOrTeamUpsell: {
            id: "PaymentMenuItems.upgradeToProOrTeamUpsell",
            defaultMessage: "Unlimited access, team features, and more"
        },
        upgradeToPlusUpsell: {
            id: "PaymentMenuItems.upgradeToPlusUpsell.0",
            defaultMessage: "More access to the best models"
        },
        renewPlus: {
            id: "PaymentMenuItems.renewPlus",
            defaultMessage: "Renew Plus"
        },
        inviteReferral: {
            id: "PaymentMenuItems.inviteReferral",
            defaultMessage: "Refer a friend"
        },
        addTeammates: {
            id: "PaymentMenuItems.addTeammates.0",
            defaultMessage: "Add teammates"
        },
        addTeammatesUpsell: {
            id: "PaymentMenuItems.addTeammatesUpsell.0",
            defaultMessage: "Invite coworkers to ChatGPT"
        },
        inviteMembers: {
            id: "PaymentMenuItems.inviteMembers.0",
            defaultMessage: "Invite members"
        },
        paymentErrorWarning: {
            id: "PaymentMenuItems.paymentErrorWarning",
            defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
        }
    });

function Dt({
    navHeader: s,
    children: t,
    className: a
}) {
    const n = L(),
        r = o.useRef(null),
        i = Vs(),
        l = ce(),
        c = i && !l,
        {
            isUnauthenticated: g
        } = O(),
        {
            layer: m
        } = je("1578749296"),
        f = m.get("is_sticky_toggle_off", !1);
    return o.useEffect(() => {
        f && P.toggleNavCollapsed()
    }, [f]), e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: "draggable relative h-full w-full flex-1 items-start border-white/20",
            children: [e.jsx(qs, {
                asChild: !0,
                children: e.jsx("h2", {
                    children: e.jsx(u, { ..._.chatHistoryLabel
                    })
                })
            }), e.jsxs("nav", {
                className: w("flex h-full w-full flex-col pl-3", a),
                "aria-label": n.formatMessage(_.chatHistoryLabel),
                children: [s, e.jsx(jt, {
                    ref: r,
                    $disableScroll: c && !g,
                    children: t
                }), e.jsx(D, {
                    children: e.jsx(xt, {})
                })]
            })]
        })
    })
}

function xt() {
    const [s] = o.useState(() => {
        const l = Gs.getCookie($s.Workspace);
        return typeof l == "string" && l !== Xs
    }), t = Ys(), a = t ? .data == null, {
        isUnauthenticated: n
    } = O(), {
        openSettings: r
    } = fe(), i = Oe();
    return s && a || !t ? null : n ? e.jsx(we, {}) : e.jsxs("div", {
        className: w("flex flex-col py-2 empty:hidden dark:border-white/20"),
        children: [e.jsx(We, {}), e.jsx(gt, {}), i && e.jsx("div", {
            className: "flex w-full items-center md:hidden",
            children: e.jsx("div", {
                className: "max-w-[100%] grow",
                children: e.jsx(at, {
                    onClickSettings: () => r()
                })
            })
        })]
    })
}
const we = () => {
        const s = le(),
            t = Q(),
            a = de(_.unauthSignupCta),
            n = () => {
                t({
                    authType: "login",
                    callback: c => {
                        j.logLogInButtonClicked({
                            location: "Sidebar bottom unit",
                            provider: c
                        }), V.logEvent("chatgpt_sidebar_login_button_clicked")
                    }
                })
            },
            r = () => {
                t({
                    authType: "signup",
                    callback: c => {
                        j.logSignUpButtonClicked({
                            location: "Sidebar bottom unit",
                            provider: c
                        }), V.logEvent("chatgpt_sidebar_signup_button_clicked")
                    }
                })
            },
            i = e.jsx(R, {
                as: "button",
                size: "medium",
                color: s ? "secondary" : "primary",
                "data-testid": "signup-button",
                onClick: r,
                children: e.jsx(u, { ...a
                })
            }, "signup-button"),
            l = e.jsx(R, {
                as: "button",
                size: "medium",
                color: s ? "primary" : "secondary",
                "data-testid": "login-button",
                onClick: n,
                children: e.jsx(u, { ..._.unauthLoginCta
                })
            }, "login-button");
        return e.jsxs("div", {
            className: "p-2",
            children: [e.jsxs("div", {
                className: "mb-4 mt-2",
                children: [e.jsx("p", {
                    className: "mb-1 text-sm font-semibold text-token-text-primary",
                    children: e.jsx(u, { ...s ? _.logInOrSignUp : _.signUpOrLogIn
                    })
                }), e.jsx("p", {
                    className: "text-sm text-token-text-secondary",
                    children: e.jsx(u, {
                        id: "4qlPtW",
                        defaultMessage: "Get smarter responses, upload files and images, and more."
                    })
                })]
            }), e.jsx("div", {
                className: "flex flex-row items-start gap-2",
                children: s ? [l, i] : [i, l]
            })]
        })
    },
    jt = pe.div `flex-col flex-1 transition-opacity duration-500 relative pr-3
  ${({$disableScroll:s})=>s?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,
    _ = $({
        chatHistoryLabel: {
            id: "NavigationContent.chatHistoryLabel",
            defaultMessage: "Chat history"
        },
        closeSidebar: {
            id: "NavigationContent.closeSidebar",
            defaultMessage: "Close sidebar"
        },
        signInToChat: {
            id: "NavigationContent.signInToChat",
            defaultMessage: "Sign in to ChatGPT"
        },
        signUpOrLogIn: {
            id: "NavigationContent.signUpOrLogIn",
            defaultMessage: "Sign up or log in"
        },
        logInOrSignUp: {
            id: "NavigationContent.logInOrSignUp",
            defaultMessage: "Log in or sign up"
        },
        unauthSignupCta: {
            id: "NavigationContent.unauthSignupCta",
            defaultMessage: "Sign up"
        },
        unauthLoginCta: {
            id: "NavigationContent.unauthLoginCta",
            defaultMessage: "Log in"
        }
    }),
    bt = () => {
        const {
            openSettings: s
        } = fe(), t = Ks("3376455464") ? .value, a = oe();
        return e.jsxs("div", {
            className: "flex h-full flex-col gap-2 p-3",
            children: [e.jsx(ae, {
                icon: De,
                onClick: () => {
                    ze(a), P.closeActiveSidebar()
                },
                children: e.jsx(u, {
                    id: "0FupYP",
                    defaultMessage: "New chat"
                })
            }), e.jsx("div", {
                className: "flex grow items-center justify-center",
                children: e.jsx(we, {})
            }), e.jsxs(Zs, {
                contentClassName: "w-[298px]",
                triggerButton: e.jsx(ae, {
                    icon: He,
                    children: e.jsx(u, {
                        id: "y4Lkp7",
                        defaultMessage: "Settings and more"
                    })
                }),
                children: [e.jsx(Z.Item, {
                    onClick: () => s(),
                    icon: Ve,
                    children: e.jsx(u, {
                        id: "HrRLkZ",
                        defaultMessage: "Settings"
                    })
                }), t && e.jsx(Z.Item, {
                    icon: qe,
                    onClick: () => {
                        P.openModal(me.ReportConversation)
                    },
                    children: e.jsx(u, {
                        id: "thread.report.0",
                        defaultMessage: "Report illegal content"
                    })
                }), e.jsx(Z.Separator, {}), e.jsx(Ge, {})]
            })]
        })
    };

function yt({
    children: s
}) {
    return e.jsx("div", {
        className: "h-full w-full bg-token-main-surface-primary px-[22px] py-4",
        children: s
    })
}

function vt() {
    return e.jsxs("div", {
        className: "flex w-full gap-2",
        children: [e.jsx("div", {
            className: "h-6 w-6",
            children: e.jsx(U, {
                className: "h-full w-full !rounded-full"
            })
        }), e.jsxs("div", {
            className: "flex w-full flex-col gap-2",
            children: [e.jsx(U, {}), e.jsx(U, {}), e.jsx(U, {}), e.jsx(U, {})]
        })]
    })
}

function B({
    icon: s,
    message: t,
    iconClassName: a
}) {
    return e.jsx("div", {
        className: "loading-shimmer-pure-text flex h-8 gap-1 overflow-hidden",
        children: e.jsx(J, {
            fillIcon: !1,
            icon: s,
            className: a,
            children: e.jsx("div", {
                className: "mt-[.5px] flex h-10",
                children: t
            })
        })
    })
}
const St = ({
    finalRow: s
}) => {
    const t = L(),
        a = s.type === "fileOpen" ? $e[s.iconType] ? ? Xe : null;
    return e.jsx(G, {
        children: e.jsx(k.div, {
            layout: !0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            },
            className: "flex flex-col items-start justify-start gap-4",
            children: s.type === "search" ? e.jsx(B, {
                icon: e.jsx(Ye, {
                    className: "relative h-5 w-5 text-token-text-primary opacity-50"
                }),
                message: t.formatMessage({
                    id: "f9wsyE",
                    defaultMessage: "Searching…"
                })
            }) : s.type === "websiteOpen" ? e.jsx(B, {
                icon: e.jsx(Ze, {
                    className: "inline-flex h-5 w-5 items-center justify-center opacity-50"
                }),
                message: t.formatMessage({
                    id: "8L6BBp",
                    defaultMessage: "Reading…"
                })
            }) : s.type === "fileOpen" ? e.jsx(B, {
                icon: e.jsx(a, {
                    className: "inline-flex h-5 w-5 items-center justify-center opacity-50"
                }),
                message: t.formatMessage({
                    id: "h5M4/O",
                    defaultMessage: "Reading file…"
                })
            }) : s.type === "pythonAnalysis" ? e.jsx(B, {
                icon: e.jsx(Ke, {
                    className: "inline-flex h-5 w-5 items-center justify-center opacity-50"
                }),
                message: t.formatMessage({
                    id: "jZ7gNw",
                    defaultMessage: "Analyzing…"
                })
            }) : e.jsx(B, {
                icon: e.jsx(be, {
                    className: "inline-flex h-5 w-5 items-center justify-center opacity-50"
                }),
                message: t.formatMessage({
                    id: "bSPYmC",
                    defaultMessage: "Thinking…"
                })
            })
        })
    })
};

function E({
    children: s
}) {
    return e.jsx(k.div, {
        className: "w-full",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 1
        },
        children: s
    })
}
const Ct = ({
        previousRow: s,
        currentRow: t
    }) => e.jsx("div", {
        className: "flex flex-col items-start justify-start gap-4",
        children: t.type === "search" ? e.jsx(E, {
            children: e.jsx(Qe, {
                row: t,
                showIcon: !s || s.type !== "search"
            })
        }, `search_${t.id}`) : t.type === "summary" ? e.jsx(E, {
            children: e.jsx(Je, {
                row: t,
                showIcon: !s || s.type !== "summary"
            })
        }, `summary_${t.id}`) : t.type === "websiteOpen" ? e.jsx(E, {
            children: e.jsx(es, {
                website: t
            })
        }, `website_${t.id}`) : t.type === "fileOpen" ? e.jsx(E, {
            children: e.jsx(ss, {
                row: t
            })
        }, `file_${t.id}`) : t.type === "pythonAnalysis" ? e.jsx(E, {
            children: e.jsx(ts, {
                row: t
            })
        }, `python_${t.id}`) : null
    }),
    wt = 120,
    Mt = 1e3 * 60 * 2;

function re(s) {
    s ? .scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
}

function Nt({
    caterpillarStatusMessageTexts: s
}) {
    return e.jsx("div", {
        className: "p-4",
        children: e.jsx(ge, {
            type: "error",
            title: s.failureMessage,
            content: s.failureBannerContentMessage
        })
    })
}

function Tt({
    caterpillarStatusMessageTexts: s
}) {
    return e.jsx("div", {
        className: "p-4",
        children: e.jsx(ge, {
            title: s.cancelledMessage,
            content: ""
        })
    })
}

function kt({
    interruptPrompt: s,
    setInterruptPrompt: t,
    handleInterruptCaterpillar: a
}) {
    const n = L();
    return e.jsxs("div", {
        className: "flex w-full flex-col justify-center gap-4 p-4",
        children: [e.jsx(os, {
            ariaLabel: n.formatMessage({
                id: "aYWRtV",
                defaultMessage: "Press enter to interrupt task"
            }),
            name: "interrupt-caterpillar-prompt",
            value: s,
            onChange: r => t(r.target.value),
            color: "search",
            onPressEnter: a
        }), e.jsx(R, {
            onClick: a,
            children: e.jsx(u, {
                id: "h73FdF",
                defaultMessage: "Interrupt task"
            })
        })]
    })
}

function Pt({
    sourcesCount: s,
    taskInfo: t
}) {
    const n = ls(t.originalConversationId).find(i => i.message.metadata ? .b1de6e2_s && i.message.metadata ? .async_task_id === t.taskId) ? .message,
        r = o.useMemo(() => n ? .metadata ? .async_task_status_messages ? .completed_no_time ? e.jsxs(e.Fragment, {
            children: [n.metadata ? .async_task_status_messages ? .completed_with_time ? ? n ? .metadata ? .async_task_status_messages ? .completed_no_time, e.jsx(u, {
                id: "zxfmo/",
                defaultMessage: " · {sourcesCount} sources",
                values: {
                    sourcesCount: s
                }
            })]
        }) : e.jsx(u, {
            id: "YG7a0T",
            defaultMessage: "Completed · {sourcesCount} sources",
            values: {
                sourcesCount: s
            }
        }), [s, n]);
    return !t.updatedAt && !n ? .metadata ? .async_task_status_messages ? .completed ? null : e.jsx(J, {
        icon: e.jsx(Js, {
            className: "text-token-text-secondary"
        }),
        fillIcon: !1,
        children: e.jsx("div", {
            className: "text-token-text-tertiary",
            children: r
        })
    })
}

function It({
    taskInfo: s,
    caterpillarStatusMessageTexts: t,
    sourcesCount: a,
    caterpillarHeaderRef: n
}) {
    const [r, i] = o.useState(""), [l, c] = o.useState(!1), g = Qs("caterpillar-interrupts"), m = o.useRef(!1), f = o.useRef(null), d = o.useMemo(() => (m.current = !!f.current && as(f.current, wt), s.rows ? ? []), [s.rows]);
    o.useEffect(() => {
        if (d.length === 0) {
            const v = new Date(s.createdAt).getTime(),
                y = Date.now() - v,
                N = Mt - y;
            if (N > 0) {
                const I = setTimeout(() => {
                    c(!0)
                }, N);
                return () => clearTimeout(I)
            } else c(!0)
        } else c(!1)
    }, [d, s.createdAt]), o.useEffect(() => {
        m.current && re(f.current)
    }, [d]), o.useEffect(() => {
        ne(s) || setTimeout(() => {
            f.current && re(f.current)
        }, 100)
    }, []);
    const h = ns({
            taskId: s.taskId,
            prompt: r
        }),
        p = ne(s) || is(s),
        M = o.useCallback(async () => {
            await h.mutateAsync(), i("")
        }, [h, i]),
        b = o.useMemo(() => d.length ? p ? d : d.slice(0, d.length - 1) : d, [d, p]);
    return e.jsxs("div", {
        className: "flex flex-col",
        children: [e.jsx("div", {
            ref: n
        }, "task-header"), e.jsxs("div", {
            className: "flex w-full flex-col gap-4",
            children: [e.jsx("div", {
                className: "text-base font-medium",
                children: s.title
            }), d.length ? e.jsxs(G, {
                initial: !1,
                children: [b.map((v, y) => e.jsx(Ct, {
                    previousRow: y > 0 ? d[y - 1] : null,
                    currentRow: v
                }, v.id)), !p && e.jsx(St, {
                    finalRow: d[d.length - 1]
                })]
            }) : l ? e.jsx(J, {
                fillIcon: !1,
                icon: e.jsx(be, {
                    className: "inline-flex h-5 w-5 items-center justify-center text-token-text-primary"
                }),
                children: t.waitingInQueueMessage
            }) : e.jsx(vt, {}), rs(s) && g && e.jsx(kt, {
                interruptPrompt: r,
                setInterruptPrompt: i,
                handleInterruptCaterpillar: M
            }), s.status === "failed" ? e.jsx(Nt, {
                caterpillarStatusMessageTexts: t
            }) : s.status === "cancelled" ? e.jsx(Tt, {
                caterpillarStatusMessageTexts: t
            }) : s.status === "completed" ? e.jsx(Pt, {
                caterpillarStatusMessageTexts: t,
                taskInfo: s,
                sourcesCount: a
            }) : null]
        }), e.jsx("div", {
            ref: f
        }, "task-footer")]
    })
}

function _t({
    taskId: s,
    setWidth: t = void 0,
    initialTab: a
}) {
    const n = cs(h => ds.getTask(s, h)),
        {
            closeThreadSidebar: r
        } = et(),
        [i, l] = o.useState(a),
        c = us(),
        g = o.useRef(null),
        m = !1;
    o.useEffect(() => {
        l(a)
    }, [a]), o.useEffect(() => {}, [n ? .taskId, n ? .status, m]), o.useEffect(() => {}, [n ? .taskId, n ? .status, i]), o.useEffect(() => {}, [t, n, m]);
    const {
        uniqueSources: f,
        totalSources: d
    } = o.useMemo(() => {
        if (!n ? .rows) return {
            uniqueSources: [],
            totalSources: 0
        };
        const h = ms(n.rows),
            p = h.reduce((M, b) => M + b.count, 0);
        return {
            uniqueSources: h,
            totalSources: p
        }
    }, [n ? .rows]);
    return e.jsx(fs, {
        handleClose: () => r({}),
        leading: e.jsx("div", {
            className: "flex w-full justify-center",
            children: e.jsx(gs, {
                activeTab: i,
                setActiveTab: l,
                showAuxTab: m,
                sourcesCount: d,
                caterpillarHeaderRef: g
            })
        }),
        children: n && e.jsxs(yt, {
            children: [!1, i === "activity" && e.jsx(It, {
                taskInfo: n,
                caterpillarStatusMessageTexts: c,
                sourcesCount: d,
                caterpillarHeaderRef: g
            }), i === "sources" && e.jsx(hs, {
                taskInfo: n,
                sources: f,
                caterpillarHeaderRef: g
            })]
        })
    })
}

function Ft({
    isExpanded: s,
    children: t
}) {
    const a = o.useRef(null),
        [n, r] = o.useState("400px"),
        i = z.isValidElement(t) ? z.cloneElement(t, {
            setWidth: r
        }) : t;
    return e.jsx(G, {
        children: e.jsx(k.div, {
            className: "relative z-[1] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-lg:!w-0",
            ref: a,
            initial: !1,
            animate: {
                width: s ? n : 0,
                transition: {
                    type: "spring",
                    bounce: .12,
                    duration: .3
                }
            },
            onAnimationStart: () => {
                a.current && (a.current.style.visibility = "visible")
            },
            onAnimationComplete: () => {
                a.current && (s || (a.current.style.visibility = "hidden"))
            },
            children: e.jsx("div", {
                className: w("absolute h-full", !s && "pointer-events-none"),
                style: {
                    width: n
                },
                children: e.jsx("div", {
                    className: "flex h-full flex-col",
                    children: i
                })
            })
        })
    })
}
const zt = ({
    setWidth: s,
    clientThreadId: t
}) => {
    const a = x("caterpillar"),
        n = x("searchSources"),
        r = x("summarizer"),
        i = x("retrievalResults"),
        l = x("product"),
        c = he();
    return e.jsxs(e.Fragment, {
        children: [n && e.jsx(ps, {
            clientThreadId: t
        }), i && e.jsx(xs, {
            clientThreadId: t
        }), c && r && e.jsx(js, {
            clientThreadId: t
        }), a && e.jsx(_t, {
            taskId: a.caterpillarId,
            initialTab: a.initialTab,
            setWidth: s
        }), l && !1]
    })
};

function Me({
    children: s,
    hideNavigation: t = !1,
    mobileHeaderContent: a,
    mobileHeaderLeftContent: n,
    mobileHeaderRightContent: r,
    mobileHeaderBottomContent: i,
    renderNavSidebar: l,
    threadFlyout: c,
    forceOpenDesktopSidebar: g = !1
}) {
    const {
        isUnauthenticated: m
    } = O(), [f, d] = bs(T => [T.activeStageSidebar, T.activeSidebar]), h = st(), p = x("searchSources"), M = x("summarizer"), b = x("retrievalResults"), v = x("caterpillar"), y = x("product"), N = ys(), I = [];
    let F = null;
    z.Children.forEach(s, T => {
        z.isValidElement(T) && (T.type === Me.Sidebars ? F = T : I.push(T))
    });
    const A = !m && !t && l != null,
        X = !t && (A || m),
        Y = he() && !!M,
        S = h && (!!p || Y || !!b || !!v || !!y),
        se = A && (g || !N),
        Ne = vs(se) != null;
    return e.jsxs("div", {
        className: "flex h-full w-full flex-col",
        children: [e.jsx(D, {
            children: e.jsx(Ss, {})
        }), e.jsxs("div", {
            className: w("relative flex h-full w-full flex-1 overflow-hidden transition-colors", d !== "popover-nav" && "z-0"),
            children: [e.jsxs("div", {
                className: "relative flex h-full w-full flex-row overflow-hidden",
                children: [e.jsx(G, {
                    children: se && e.jsx(lt, {
                        wasCollapsed: Ne,
                        isPopoverOnDesktop: f,
                        children: m ? e.jsx(bt, {}) : l()
                    })
                }), e.jsxs("div", {
                    className: "relative flex h-full max-w-full flex-1 flex-col overflow-hidden",
                    children: [X && e.jsxs(D, {
                        children: [e.jsx(Cs, {}), e.jsx(ot, {
                            onOpenSidebar: () => P.toggleNavCollapsed(),
                            showNavSidebar: A,
                            leftContent: n,
                            rightContent: r,
                            bottomContent: i,
                            children: a
                        })]
                    }), e.jsx("main", {
                        className: "relative h-full w-full flex-1 overflow-auto transition-width",
                        children: I
                    })]
                })]
            }), e.jsx(D, {
                children: e.jsx(Ft, {
                    isExpanded: S,
                    children: c
                })
            }), F]
        }), e.jsx(ws, {})]
    })
}

function At({
    children: s
}) {
    return e.jsx(e.Fragment, {
        children: s
    })
}
Me.Sidebars = At;
export {
    zt as F, Dt as N, Me as S, Ot as a, Wt as b, Lt as c
};
//# sourceMappingURL=klo929ei6t0ugfr6.js.map