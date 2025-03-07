import {
    c as D,
    j as e,
    M as r,
    av as da,
    r as d,
    L as Q,
    b as ze,
    a as ht,
    u as Te,
    d as Ae,
    h as yt
} from "./mna1wiucqak6lqzp.js";
import {
    d as Le,
    r as ie,
    P as g,
    a as f,
    b_ as I,
    an as ma,
    am as M,
    ak as Re,
    n as xt,
    S as O,
    as as bt,
    Z as fe,
    b as Ge,
    N as Pe,
    h0 as pa,
    bi as oe,
    cp as Fe,
    c1 as _t,
    fQ as ga,
    bk as it,
    L as ne,
    h as ge,
    g as Mt,
    k as fa,
    h1 as ot,
    d2 as Pt,
    d0 as vt,
    d3 as Ct,
    c$ as St,
    c_ as jt,
    dC as Me,
    a6 as He,
    av as Et,
    ci as Ee,
    h2 as ha,
    R as wt,
    aB as ya,
    aa as xa,
    D as kt,
    d_ as lt,
    cI as ba,
    h3 as _a,
    ew as rt
} from "./bq4rrqi54riy5k2e.js";
import {
    R as Ma,
    I as Pa
} from "./hof9jjp8fzjywfd9.js";
import {
    o5 as U,
    cH as x,
    o6 as Ie,
    o7 as Tt,
    o8 as Nt,
    o9 as Ft,
    oa as Ze,
    bn as va,
    h3 as Ca,
    kh as At,
    ob as Se,
    oc as $e,
    od as Ye,
    oe as qe,
    kc as Sa,
    ka as ja,
    kl as It,
    of as Ot,
    og as Ea,
    oh as De,
    oi as Ve,
    oj as Ke,
    ok as wa,
    ol as te,
    om as ka,
    on as Ut,
    oo as Dt,
    op as Ta,
    oq as Na,
    or as Fa,
    os as Aa,
    U as Ia,
    cA as Oa,
    ot as Lt,
    ou as Ua,
    ov as Da,
    ow as La,
    ox as Ra,
    oy as Ba,
    oz as Wa,
    w as Va,
    oA as za,
    bX as Ga,
    oB as Ha,
    kU as $a,
    G as Ya,
    oC as qa,
    oD as Za,
    oE as Ka,
    oF as Xa,
    h4 as Qa
} from "./lwme42j7zzyr3q7j.js";
import {
    C as ct
} from "./eo35ety32p3uqfmp.js";
import {
    S as Ja
} from "./dvik6hl2h3xpsl43.js";

function es({
    ariaLabel: t,
    className: a,
    leftItem: s,
    onChange: n,
    rightItem: i,
    value: l
}) {
    const o = D(),
        u = l === s.value;
    return e.jsx(Ma, {
        type: "single",
        "aria-label": o.formatMessage(t),
        onClick: () => {
            n(u ? i.value : s.value)
        },
        value: l,
        className: Le("cursor-pointer select-none rounded-full border border-solid border-token-border-light bg-token-main-surface-tertiary p-0.5", a),
        children: e.jsxs("div", {
            className: "relative grid grid-cols-2",
            children: [e.jsx(ut, { ...s,
                isSelected: l === s.value
            }), e.jsx(ut, { ...i,
                isSelected: l === i.value
            })]
        })
    })
}

function ut({
    ariaLabel: t,
    isSelected: a,
    label: s,
    value: n
}) {
    const i = D();
    return e.jsxs("div", {
        className: "relative z-10 px-3 py-1.5 text-center text-sm font-semibold",
        children: [e.jsx(Pa, {
            "aria-label": i.formatMessage(t),
            className: Le({
                "text-token-text-primary": a,
                "text-token-text-tertiary": !a
            }),
            value: n,
            children: e.jsx(r, { ...s
            })
        }), a ? e.jsx(da.div, {
            transition: {
                duration: .05
            },
            layoutId: "SegmentedControlToggleItem-selectedBackground",
            className: "absolute inset-0 -z-10 rounded-full bg-token-main-surface-primary"
        }) : null]
    })
}

function ts({
    value: t,
    onChange: a
}) {
    return e.jsx(es, {
        value: t,
        onChange: a,
        ariaLabel: Ne.toggleArialabel,
        leftItem: {
            ariaLabel: Ne.togglePersonalArialabel,
            label: Ne.togglePersonalLabel,
            value: "personal"
        },
        rightItem: {
            ariaLabel: Ne.toggleBusinessArialabel,
            label: Ne.toggleBusinessLabel,
            value: "business"
        }
    })
}
const Ne = ie({
        toggleArialabel: {
            id: "U4v2Gf",
            defaultMessage: "Toggle for switching between Personal and Business plans"
        },
        togglePersonalArialabel: {
            id: "6Wikht",
            defaultMessage: "Toggle for switching to Personal plans"
        },
        toggleBusinessArialabel: {
            id: "uzlEV0",
            defaultMessage: "Toggle for switching to Business plans"
        },
        togglePersonalLabel: {
            id: "cGDsaD",
            defaultMessage: "Personal"
        },
        toggleBusinessLabel: {
            id: "sgisa2",
            defaultMessage: "Business"
        }
    }),
    Rt = t => d.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, d.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 19C6.44772 19 6 18.5523 6 18C6 16.3077 6.81186 15.0179 7.98298 14.1851C9.12436 13.3734 10.5892 13 12 13C13.4108 13 14.8756 13.3734 16.017 14.1851C17.1881 15.0178 18 16.3076 18 18C18 18.5523 17.5523 19 17 19C15.6012 19 8.39878 19 7 19Z",
        fill: "currentColor"
    }), d.createElement("path", {
        d: "M19.5 18C19.5 18 19.5 18 19.5 18C19.5 16.0565 18.6712 14.498 17.4529 13.4137C18.0999 13.1329 18.8086 13 19.5 13C20.5581 13 21.6567 13.3112 22.5128 13.9875C23.3911 14.6815 24 15.7564 24 17.1667C24 17.6269 23.6642 18 23.25 18H19.5Z",
        fill: "currentColor"
    }), d.createElement("path", {
        d: "M6.54712 13.4137C5.32885 14.498 4.5 16.0564 4.5 18C4.5 18 4.5 18 4.5 18L0.75 18C0.335786 18 0 17.6269 0 17.1667C0 15.7564 0.608892 14.6815 1.48723 13.9875C2.34327 13.3112 3.44193 13 4.5 13C5.19138 13 5.90009 13.1329 6.54712 13.4137Z",
        fill: "currentColor"
    }), d.createElement("path", {
        d: "M12 5C10.067 5 8.5 6.567 8.5 8.5C8.5 10.433 10.067 12 12 12C13.933 12 15.5 10.433 15.5 8.5C15.5 6.567 13.933 5 12 5Z",
        fill: "currentColor"
    }), d.createElement("path", {
        d: "M4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7Z",
        fill: "currentColor"
    }), d.createElement("path", {
        d: "M19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7Z",
        fill: "currentColor"
    })),
    Xe = () => {
        g.logEvent(f.clickAccountPaymentGetHelp)
    };

function as(t) {
    if (ma(t)) return "secondary";
    switch (t) {
        case M.FREE:
            return "green";
        case M.PLUS:
            return "green";
        case M.TEAM:
            return "primary";
        case M.PRO:
            return "primary";
        default:
            throw new Error(`Invalid plan type: ${t}`)
    }
}

function we({
    isCurrentPlan: t,
    planType: a,
    disabled: s,
    loading: n = !1,
    onClick: i,
    children: l,
    testId: o,
    activeColor: u,
    ...m
}) {
    return e.jsx(I, {
        fullWidth: !0,
        size: "large",
        color: t ? "secondary" : u || as(a),
        disabled: s,
        loading: n,
        onClick: i,
        "data-testid": o,
        className: s ? "border-none bg-token-sidebar-surface-tertiary font-semibold text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary" : "font-semibold",
        ...m,
        children: l
    })
}

function Qe(t, a) {
    const [s, n] = d.useState(!1);
    d.useEffect(() => {
        if (!s) {
            n(!0);
            return
        }
        t ? g.logEventWithStatsig(f.chatgpt_email_verify_popup_shown, "chatgpt_email_verify_popup_shown", a) : g.logEventWithStatsig(f.chatgpt_email_verify_popup_hidden, "chatgpt_email_verify_popup_hidden", a)
    }, [t])
}
const dt = M.ENTERPRISE,
    ss = {
        [U.Default]: x.enterprise,
        [U.Scallion]: x.enterprise,
        [U.Chive]: x.enterprise,
        [U.ProduceDesign]: x.enterpriseProduceExp
    },
    ns = ({
        enterprisePricingPlanProduce: t = null,
        billingDetails: a
    }) => {
        const n = Re() ? .isEnterprisey(),
            i = Nt(),
            l = t || xt(ss[i]);
        return e.jsx(Ie, {
            icon: e.jsx(Rt, {
                className: "icon-md text-brand-purple"
            }),
            planName: "enterprise",
            pricingPlan: l,
            showForLine: !0,
            callToActionButton: n ? e.jsx(I, {
                color: "secondary",
                disabled: !0,
                size: "large",
                className: "border-none bg-token-sidebar-surface-tertiary font-semibold text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary dark:text-token-text-primary dark:hover:bg-token-text-tertiary",
                children: e.jsx(r, { ...x.free.callToAction.inactive
                })
            }) : e.jsx(we, {
                planType: dt,
                as: "link",
                to: Tt,
                openNewTab: !0,
                onClick: () => {
                    g.logEvent(f.accountPayClickEnterpriseContactSalesButton), O.logEvent("chatgpt_account_payment_modal_enterprise_sales_button_clicked", dt)
                },
                isCurrentPlan: !1,
                testId: "select-plan-button-enterprise",
                children: e.jsx("div", {
                    className: "flex items-center gap-1",
                    children: e.jsx(r, { ...x.enterprise.callToAction.inactive
                    })
                })
            }),
            billingDetails: a
        })
    },
    is = t => d.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, d.createElement("path", {
        d: "M12.001 1.75C12.4972 1.75051 12.9141 2.12323 12.97 2.61632C13.2763 5.32075 14.096 7.2769 15.4108 8.61588C16.7197 9.9489 18.6326 10.7853 21.3602 11.0276C21.8643 11.0724 22.2506 11.495 22.25 12.0011C22.2494 12.5072 21.8622 12.9289 21.358 12.9726C18.6758 13.2047 16.7215 14.0404 15.381 15.381C14.0404 16.7215 13.2047 18.6758 12.9726 21.358C12.9289 21.8622 12.5072 22.2494 12.0011 22.25C11.495 22.2506 11.0724 21.8643 11.0276 21.3602C10.7853 18.6326 9.9489 16.7197 8.61588 15.4108C7.2769 14.096 5.32075 13.2763 2.61632 12.97C2.12323 12.9141 1.75051 12.4972 1.75 12.001C1.74949 11.5048 2.12137 11.0871 2.61434 11.0302C5.36466 10.713 7.27893 9.89303 8.58598 8.58598C9.89303 7.27893 10.713 5.36466 11.0302 2.61434C11.0871 2.12137 11.5048 1.74949 12.001 1.75Z",
        fill: "currentColor"
    })),
    os = {
        [U.Default]: x.freeDefault,
        [U.Scallion]: x.freeNeptune,
        [U.Chive]: x.freeChive,
        [U.ProduceDesign]: x.freeProduceExp
    },
    ls = ({
        freePricingPlanProduce: t = null,
        billingDetails: a
    }) => {
        const {
            data: s
        } = bt(), n = Ft(s), i = Nt(), l = t || xt(os[i]);
        return e.jsx(Ie, {
            planName: "free",
            pricingPlan: l,
            icon: e.jsx(is, {
                className: "icon-md"
            }),
            showForLine: !n,
            callToActionButton: e.jsx(I, {
                color: "secondary",
                disabled: !0,
                size: "large",
                className: "border-none bg-token-sidebar-surface-tertiary font-semibold text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary dark:text-token-text-primary dark:hover:bg-token-text-tertiary",
                children: e.jsx(r, { ...x.free.callToAction.inactive
                })
            }),
            additionalLinks: [e.jsx(r, { ...rs.haveExistingPlan,
                values: {
                    link: o => e.jsx(Q, {
                        target: "_blank",
                        to: Ze,
                        onClick: Xe,
                        className: "underline",
                        children: o
                    }, "row-plus-plan-help-link")
                }
            }, "existing-plan-help")],
            billingDetails: a
        })
    },
    rs = ie({
        haveExistingPlan: {
            id: "FreeColumn.haveExistingPlan",
            defaultMessage: "Have an existing plan? See <link>billing help</link>"
        }
    }),
    cs = t => d.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, d.createElement("path", {
        d: "M6.394 4.444c.188-.592 1.024-.592 1.212 0C8.4 8.9 9.1 9.6 13.556 10.394c.592.188.592 1.024 0 1.212C9.1 12.4 8.4 13.1 7.606 17.556c-.188.592-1.024.592-1.212 0C5.6 13.1 4.9 12.4.444 11.606c-.592-.188-.592-1.024 0-1.212C4.9 9.6 5.6 8.9 6.394 4.444Zm8.716 9.841a.41.41 0 0 1 .78 0c.51 2.865.96 3.315 3.825 3.826.38.12.38.658 0 .778-2.865.511-3.315.961-3.826 3.826a.408.408 0 0 1-.778 0c-.511-2.865-.961-3.315-3.826-3.826a.408.408 0 0 1 0-.778c2.865-.511 3.315-.961 3.826-3.826Zm2.457-12.968a.454.454 0 0 1 .866 0C19 4.5 19.5 5 22.683 5.567a.454.454 0 0 1 0 .866C19.5 7 19 7.5 18.433 10.683a.454.454 0 0 1-.866 0C17 7.5 16.5 7 13.317 6.433a.454.454 0 0 1 0-.866C16.5 5 17 4.5 17.567 1.317Z",
        fill: "currentColor"
    }));

function Bt(t) {
    return e.jsxs("div", {
        className: "relative w-full",
        children: [e.jsx(va, { ...t,
            className: Le(t.className, t.error && "!border-red-500")
        }), e.jsx("p", {
            className: "mt-1 flex items-center text-xs text-red-500",
            children: t.error
        })]
    })
}
const H = ie({
    sendEmailFailure: {
        id: "emailVerify.sendEmailFailure",
        defaultMessage: "Could not send email verification code, please try again later."
    },
    sendEmailFailureInvalidEmail: {
        id: "emailVerify.invalidEmail",
        defaultMessage: 'The email address "{email}" is not formatted correctly.'
    },
    sendEmailFailureInvalidEmailEmpty: {
        id: "emailVerify.invalidEmailEmpty",
        defaultMessage: "Please enter a valid email address to continue."
    },
    sendEmailFailureRateLimited: {
        id: "emailVerify.sendEmailFailure.rateLimited",
        defaultMessage: "You've sent too many requests. Please try again later."
    },
    verifyOtpFailure: {
        id: "emailVerify.verifyOtpFailure",
        defaultMessage: "Something went wrong, please try again later."
    },
    verifyOtpFailureInvalidOtp: {
        id: "emailVerify.verifyOtpFailure.invalidOtp",
        defaultMessage: "The code you entered is invalid. Please try again."
    },
    verifyOtpFailureInvalidFormat: {
        id: "emailVerify.verifyOtpFailure.invalidFormat",
        defaultMessage: "The code you entered is formatted incorrectly."
    },
    verifyOtpFailureEmailAlreadyLinked: {
        id: "emailVerify.verifyOtpFailure.emailAlreadyLinked",
        defaultMessage: '{branch, select, email {"{emailValue}"} other {Your email}} is already linked to another account.'
    },
    verifyOtpFailureRateLimited: {
        id: "emailVerify.verifyOtpFailure.rateLimited",
        defaultMessage: "You've sent too many requests. Please try again later."
    },
    verifyOtpSuccess: {
        id: "emailVerify.verifyOtpSuccess",
        defaultMessage: "Email confirmed."
    }
});
class mt extends Error {
    constructor(a) {
        super(a), this.name = "EmailValidationError"
    }
}
const us = (t, a) => a.trim() === "" ? t.formatMessage(H.sendEmailFailureInvalidEmailEmpty) : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a) ? null : t.formatMessage(H.sendEmailFailureInvalidEmail, {
        email: a
    }),
    Wt = (t, a, s) => {
        switch (s.status) {
            case 429:
                throw new Error(t.formatMessage(H.sendEmailFailureRateLimited));
            case 403:
                throw new Error(t.formatMessage(H.verifyOtpFailureEmailAlreadyLinked, {
                    branch: a ? "email" : "other",
                    emailValue: a
                }));
            default:
                return
        }
    };

function ds(t) {
    const a = D(),
        [s, n] = d.useState(null),
        i = ze({
            mutationFn: async l => {
                try {
                    const o = us(a, l);
                    if (o) throw new mt(o);
                    return await fe.addEmailBegin(l)
                } catch (o) {
                    throw o instanceof mt ? o : (o instanceof Ge && Wt(a, l, o), new Error(a.formatMessage(H.sendEmailFailure)))
                }
            },
            onSuccess: () => {
                t.setStep("verifyOtp")
            },
            onError: l => {
                n(l.message), g.logEventWithStatsig(f.chatgpt_email_verify_enter_email_step_error, "chatgpt_email_verify_enter_email_step_error", {
                    error: l.message
                })
            }
        });
    return d.useEffect(() => {
        g.logEventWithStatsig(f.chatgpt_email_verify_enter_email_step_shown, "chatgpt_email_verify_enter_email_step_shown")
    }, []), e.jsx("form", {
        onSubmit: l => {
            l.preventDefault(), i.mutate(t.email), g.logEventWithStatsig(f.chatgpt_email_verify_enter_email_step_continue, "chatgpt_email_verify_enter_email_step_continue")
        },
        noValidate: !0,
        children: e.jsxs("div", {
            className: "flex w-full flex-col items-center gap-3",
            children: [e.jsx("p", {
                className: "text-3xl font-semibold",
                children: t.title ? t.title : e.jsx(r, {
                    id: "emailVerify.enterEmailTitle",
                    defaultMessage: "Add your email"
                })
            }), t.description && e.jsx("p", {
                className: "text-center text-base text-token-text-primary",
                children: t.description
            }), e.jsx(Bt, {
                ariaLabel: a.formatMessage({
                    id: "emailVerify.emailAddress",
                    defaultMessage: "Email Address"
                }),
                placeholder: a.formatMessage({
                    id: "emailVerify.emailAddressPlaceholder",
                    defaultMessage: "Email Address"
                }),
                name: "email",
                type: "email",
                className: "mt-6 w-full",
                value: t.email,
                onChange: l => {
                    n(null), t.onEmailChange(l.target.value), g.logEventWithStatsig(f.chatgpt_email_verify_enter_email_step_type, "chatgpt_email_verify_enter_email_step_type")
                },
                autoFocus: !0,
                autoComplete: "email",
                error: s ? ? void 0
            }), e.jsx(I, {
                className: "w-full rounded-md",
                color: "green",
                type: "submit",
                loading: i.isPending,
                disabled: i.isPending,
                children: e.jsx(r, {
                    id: "emailVerify.continue",
                    defaultMessage: "Continue"
                })
            }), t.cancelFlowButton]
        })
    })
}
class pt extends Error {
    constructor(a) {
        super(a), this.name = "OtpValidationError"
    }
}
const ms = (t, a) => {
        if (a.length !== 6) return t.formatMessage(H.verifyOtpFailureInvalidFormat);
        try {
            parseInt(a)
        } catch {
            return t.formatMessage(H.verifyOtpFailureInvalidFormat)
        }
        return null
    },
    ps = (t, a, s) => {
        switch (s.status) {
            case 403:
                throw new Error(t.formatMessage(H.verifyOtpFailureEmailAlreadyLinked, {
                    branch: a ? "email" : "other",
                    emailValue: a
                }));
            case 429:
                throw new Error(t.formatMessage(H.verifyOtpFailureRateLimited));
            case 422:
                throw new Error(t.formatMessage(H.verifyOtpFailureInvalidOtp));
            default:
                return
        }
    };

function gs(t) {
    const a = D(),
        s = Pe(),
        n = ht(),
        [i, l] = d.useState(null),
        o = d.useCallback(c => {
            const p = c.target.value.trim();
            if (typeof p == "string") {
                if (p.match(/\D/)) {
                    c.preventDefault();
                    return
                }
                t.onOtpChange(p.substring(0, 6))
            }
        }, [t]),
        u = ze({
            mutationFn: async c => {
                try {
                    return await fe.addEmailBegin(c)
                } catch (p) {
                    throw p instanceof Ge && Wt(a, c, p), new Error(a.formatMessage(H.sendEmailFailure))
                }
            },
            onSuccess: () => {
                t.setStep("verifyOtp")
            },
            onError: c => {
                l(c.message), g.logEventWithStatsig(f.chatgpt_email_verify_verify_otp_step_resend_error, "chatgpt_email_verify_verify_otp_step_resend_error", {
                    error: c.message
                })
            }
        }),
        m = ze({
            mutationFn: async c => {
                try {
                    const p = ms(a, c.code);
                    if (p) throw new pt(p);
                    await fe.addEmailVerify(c.email, c.code), await pa(n)
                } catch (p) {
                    throw p instanceof pt ? p : (p instanceof Ge && ps(a, t.email, p), new Error(a.formatMessage(H.verifyOtpFailure)))
                }
            },
            onSuccess: () => {
                s.success(a.formatMessage(H.verifyOtpSuccess)), t.onVerified ? .()
            },
            onError: c => {
                l(c.message), g.logEventWithStatsig(f.chatgpt_email_verify_verify_otp_step_error, "chatgpt_email_verify_verify_otp_step_error", {
                    error: c.message
                })
            }
        });
    return d.useEffect(() => {
        g.logEventWithStatsig(f.chatgpt_email_verify_verify_otp_step_shown, "chatgpt_email_verify_verify_otp_step_shown")
    }, []), e.jsxs("div", {
        className: "flex w-full flex-col items-center gap-3",
        children: [e.jsx("p", {
            className: "text-3xl font-semibold",
            children: e.jsx(r, {
                id: "verifyOtp.title",
                defaultMessage: "Check your email"
            })
        }), e.jsxs("p", {
            className: "text-center",
            children: [e.jsx("span", {
                className: "text-base text-token-text-primary",
                children: e.jsx(r, {
                    id: "verifyOtp.description",
                    defaultMessage: "Enter the verification code we just sent to"
                })
            }), t.email && e.jsx("br", {}), e.jsx("span", {
                className: `text-base leading-snug text-token-text-primary ${t.email&&"font-semibold"}`,
                children: e.jsx(r, {
                    id: "verifyOtp.email",
                    defaultMessage: "{branch, select, email {{emailValue}} other { your email.}}",
                    values: {
                        branch: t.email ? "email" : "other",
                        emailValue: t.email
                    }
                })
            })]
        }), e.jsxs("form", {
            onSubmit: c => {
                c.preventDefault(), m.mutate({
                    code: t.otp,
                    email: t.email ? ? ""
                }), g.logEventWithStatsig(f.chatgpt_email_verify_verify_otp_step_continue, "chatgpt_email_verify_verify_otp_step_continue")
            },
            className: "flex w-full flex-col items-center gap-3",
            children: [e.jsx(Bt, {
                error: i ? ? void 0,
                ariaLabel: a.formatMessage({
                    id: "emailVerify.otpAriaLabel",
                    defaultMessage: "OTP"
                }),
                value: t.otp,
                onChange: c => {
                    l(null), o(c), g.logEventWithStatsig(f.chatgpt_email_verify_verify_otp_step_type, "chatgpt_email_verify_verify_otp_step_type")
                },
                name: "otp",
                type: "text",
                placeholder: "XXXXXX",
                className: "mt-6 w-full",
                autoComplete: "off",
                autoFocus: !0
            }), e.jsx(I, {
                className: "w-full rounded-md",
                color: "green",
                type: "submit",
                loading: m.isPending,
                disabled: m.isPending,
                children: e.jsx(r, {
                    id: "verifyOtp.continue",
                    defaultMessage: "Continue"
                })
            }), t.cancelFlowButton]
        }), e.jsxs("div", {
            className: "mt-6 flex w-full flex-col items-center gap-3",
            children: [e.jsx("p", {
                className: "text-sm text-token-text-primary",
                children: e.jsx(r, {
                    id: "verifyOtp.resendMessage",
                    defaultMessage: "Didn’t receive the code?"
                })
            }), e.jsx(I, {
                className: "w-full rounded-md",
                color: "secondary",
                onClick: () => {
                    u.mutate(t.email ? ? ""), g.logEventWithStatsig(f.chatgpt_email_verify_verify_otp_step_resend, "chatgpt_email_verify_verify_otp_step_resend")
                },
                loading: u.isPending,
                disabled: u.isPending,
                children: e.jsx(r, {
                    id: "verifyOtp.resend",
                    defaultMessage: "Resend code"
                })
            }), e.jsx(I, {
                className: "w-full rounded-md",
                color: "secondary",
                onClick: () => {
                    t.setStep("enterEmail"), g.logEventWithStatsig(f.chatgpt_email_verify_verify_otp_step_change_email, "chatgpt_email_verify_verify_otp_step_change_email")
                },
                children: e.jsx(r, {
                    id: "verifyOtp.changeEmail",
                    defaultMessage: "Change email"
                })
            })]
        })]
    })
}

function Je(t) {
    const [a, s] = d.useState(t.initialStep ? ? "enterEmail"), [n, i] = d.useState(""), [l, o] = d.useState(""), u = t.email ? {
        email: t.email,
        onEmailChange: t.onEmailChange
    } : {
        email: n,
        onEmailChange: i
    }, m = t.otp ? {
        otp: t.otp,
        onOtpChange: t.onOtpChange
    } : {
        otp: l,
        onOtpChange: o
    };
    return a === "enterEmail" ? e.jsx(ds, {
        title: t.enterEmailTitle,
        description: t.enterEmailDescription,
        cancelFlowButton: t.cancelFlowButton,
        step: a,
        setStep: s,
        ...u
    }) : e.jsx(gs, {
        email: u.email,
        onVerified: t.onVerified,
        cancelFlowButton: t.cancelFlowButton,
        step: a,
        setStep: s,
        ...m
    })
}
const fs = M.PLUS;

function hs({
    isOpen: t,
    onClose: a,
    onCancelationComplete: s,
    analyticsParams: n
}) {
    const i = D(),
        l = Pe(),
        o = Re(),
        {
            data: u,
            isLoading: m
        } = Ca(),
        c = At(o ? .id),
        p = d.useMemo(() => ({ ...n,
            planType: fs
        }), [n]),
        h = d.useCallback(() => {
            a(), c.isSuccess || g.logEventWithStatsig(f.cancelPlusAbort, "cancel_plus_modal_abort", p)
        }, [a, c.isSuccess, p]),
        y = async () => {
            if (!o) throw new Error("No account!");
            g.logEventWithStatsig(f.cancelPlusConfirm, "cancel_plus_modal_confirm", p), await c.mutateAsync(o ? .id, {
                onError: () => {
                    l.danger(i.formatMessage(V.cancelFailure), {
                        duration: 2
                    }), g.logEventWithStatsig(f.cancelPlusError, "cancel_plus_modal_error", p)
                },
                onSuccess: () => {
                    g.logEventWithStatsig(f.cancelPlusSuccess, "cancel_plus_modal_success", p), s ? .(), l.info(i.formatMessage(V.cancelSuccess), {
                        duration: 2
                    }), a()
                }
            })
        };
    d.useEffect(() => {
        c.isSuccess
    }, [c.isSuccess, a]);
    const b = u ? .active_until;
    return e.jsx(oe, {
        type: "success",
        onClose: h,
        isOpen: t,
        className: "",
        title: e.jsx(r, { ...V.cancelPlan
        }),
        children: m || !o ? e.jsx(Fe, {}) : c.isSuccess ? e.jsx(r, { ...V.cancelSuccess
        }) : e.jsxs("div", {
            children: [e.jsxs("div", {
                className: "text-sm",
                children: [!!b && e.jsx("p", {
                    className: "mb-4",
                    children: e.jsx(r, { ...V.planActiveUntil,
                        values: {
                            expirationDate: new Date(b)
                        }
                    })
                }), e.jsx("p", {
                    className: "mb-2",
                    children: e.jsx(r, { ...V.cancelListHeader
                    })
                }), e.jsx("div", {
                    children: bs.map(S => e.jsxs("div", {
                        className: "text-l mb-2 flex justify-start gap-2",
                        children: [e.jsx(_t, {
                            className: "h-5 w-5 flex-shrink-0 align-top text-gray-500"
                        }), e.jsx("span", {
                            children: e.jsx(r, { ...S,
                                values: {
                                    learnMoreLink: ys,
                                    mainModel: xs
                                }
                            })
                        })]
                    }, S.id))
                })]
            }), e.jsxs("div", {
                className: "mt-8 flex justify-end gap-2",
                children: [e.jsx(I, {
                    onClick: h,
                    color: "secondary",
                    children: e.jsx(r, { ...V.closeModal
                    })
                }), e.jsx(I, {
                    color: "danger",
                    onClick: y,
                    disabled: c.isPending || c.isSuccess,
                    children: e.jsx(r, { ...c.isPending ? V.cancellingInProgress : V.cancelButton
                    })
                })]
            })]
        })
    })
}
const ys = t => e.jsx("a", {
        target: "_blank",
        href: "https://help.openai.com/en/articles/9280126-what-happens-to-my-gpts-if-i-cancel-my-subscription",
        rel: "noreferrer",
        className: "underline",
        children: t
    }),
    xs = "GPT-4",
    V = ie({
        cancelPlan: {
            id: "cancelPlusModal.cancelPlan",
            defaultMessage: "Cancel your Plus subscription?"
        },
        cancelListHeader: {
            id: "cancelPlusModal.cancelText",
            defaultMessage: "When your subscription ends, you'll no longer have:"
        },
        planActiveUntil: {
            id: "cancelPlusModal.planActiveUntil",
            defaultMessage: "If you cancel your subscription, you’ll be downgraded to the free plan on {expirationDate, date, long}."
        },
        cancelButton: {
            id: "cancelPlusModal.cancelButton",
            defaultMessage: "Cancel subscription"
        },
        cancellingInProgress: {
            id: "cancelPlusModal.cancellingInProgress",
            defaultMessage: "Cancelling..."
        },
        cancelSuccess: {
            id: "cancelPlusModal.cancelSuccess",
            defaultMessage: "Successfully cancelled your plan. Sorry to see you go!"
        },
        cancelFailure: {
            id: "cancelPlusModal.cancelFailure",
            defaultMessage: "Something went wrong while cancelling your plan. Please reach out to support"
        },
        lostFeatureGPTModels: {
            id: "0w7d5w",
            defaultMessage: "Access to {mainModel} and {liteModel}"
        },
        lostFeatureGPTModelSingular: {
            id: "cancelPlusModal.lostFeature.gptModelSingular",
            defaultMessage: "Access to {mainModel}"
        },
        lostFeatureNewModelUsageLimits: {
            id: "TjftEV",
            defaultMessage: "Higher usage limits for {limitedModel}"
        },
        lostFeatureDataAnalysisV2: {
            id: "cancelPlusModal.lostFeature.dataAnalysisV2",
            defaultMessage: "Access to advanced data analysis, file uploads, vision, and web browsing"
        },
        lostFeatureDataAnalysisLimits: {
            id: "dlGufV",
            defaultMessage: "Higher usage limits for advanced data analysis, file uploads, vision, and web browsing"
        },
        lostFeatureImageGeneration: {
            id: "cancelPlusModal.lostFeature.imageGeneration",
            defaultMessage: "DALL·E image generation"
        },
        lostFeatureCustomGPTs: {
            id: "cancelPlusModal.lostFeature.customGPTs",
            defaultMessage: "Custom GPT creation"
        },
        lostFeaturePersonalGPTs: {
            id: "cancelPlusModal.lostFeature.personalGPTs",
            defaultMessage: "GPTs you’ve created (<learnMoreLink>learn more</learnMoreLink>)"
        },
        closeModal: {
            id: "cancelPlusModal.close",
            defaultMessage: "Close"
        }
    }),
    bs = [V.lostFeatureGPTModelSingular, V.lostFeatureDataAnalysisV2, V.lostFeatureImageGeneration, V.lostFeatureCustomGPTs, V.lostFeaturePersonalGPTs];

function Vt({
    isOpen: t,
    onClose: a,
    onContinue: s,
    analyticsParams: n
}) {
    d.useEffect(() => {
        g.logEventWithStatsig(f.mobileSubscriptionWarningModalShown, "chatgpt_mobile_subscription_warning_modal_shown", n)
    }, [n]);
    const i = () => {
            g.logEventWithStatsig(f.mobileSubscriptionWarningModalContinueClicked, "chatgpt_mobile_subscription_warning_modal_continue_clicked", n), s()
        },
        l = () => {
            g.logEventWithStatsig(f.mobileSubscriptionWarningModalCloseClicked, "chatgpt_mobile_subscription_warning_modal_close_clicked", n), a()
        };
    return e.jsx(oe, {
        isOpen: t,
        onClose: l,
        type: "warning",
        icon: ga,
        title: e.jsx(r, { ...Oe.checkSubscriptionHeader
        }),
        primaryButton: e.jsx(it.Button, {
            title: Oe.dismissModal.defaultMessage,
            color: "primary",
            onClick: l
        }),
        secondaryButton: e.jsx(it.Button, {
            title: Oe.continueToNextStep.defaultMessage,
            color: "secondary",
            onClick: i
        }),
        children: e.jsx("span", {
            className: "gap-2 text-gray-600",
            children: Oe.checkSubscriptionBody.defaultMessage
        })
    })
}
const Oe = ie({
        checkSubscriptionHeader: {
            id: "mobileSubscriptionWarningModal.checkSubscriptionHeader",
            defaultMessage: "Check your App Store subscription"
        },
        checkSubscriptionBody: {
            id: "mobileSubscriptionWarningModal.checkSubscriptionBody",
            defaultMessage: "Your subscription through the Apple App Store is currently on pause due to a payment issue. Please resolve that issue to resume using ChatGPT Plus and avoid duplicate charges."
        },
        dismissModal: {
            id: "mobileSubscriptionWarningModal.dismissModal",
            defaultMessage: "Cancel"
        },
        continueToNextStep: {
            id: "mobileSubscriptionWarningModal.continueToNextStep",
            defaultMessage: "I understand, continue anyways"
        }
    }),
    _s = ne.HasDismissedUpgradeInviteModal,
    Ms = {
        hasDismissedUpgradeInviteModal: !!ge.getItem(_s)
    };
Mt()(() => ({ ...Ms
}));
const Ps = () => {
        const {
            isUnauthenticated: t,
            isLoading: a
        } = fa();
        return Te({
            queryKey: ["updateInvites", t],
            queryFn: async () => t ? {
                plus: null,
                team: null
            } : await fe.getUpgradeInvites(),
            enabled: !a
        })
    },
    gt = ie({
        plusWaitlistSignupSuccess: {
            id: "pricingPlanConstants.plusWaitlistSignupSuccess",
            defaultMessage: "You've been added to the waitlist to upgrade to Plus"
        },
        teamWaitlistSignupSuccess: {
            id: "pricingPlanConstants.teamWaitlistSignupSuccess",
            defaultMessage: "You've been added to the waitlist to upgrade to Team"
        }
    }),
    vs = {
        [M.PLUS]: {
            localStorageKeyByVersion: {
                V1: ne.HasSignedUpForPlusUpgradeWaitlistV1,
                V2: ne.HasSignedUpForPlusUpgradeWaitlistV2
            },
            onSuccessMessage: gt.plusWaitlistSignupSuccess
        },
        [M.TEAM]: {
            localStorageKeyByVersion: {
                V1: ne.HasSignedUpForTeamUpgradeWaitlistV1,
                V2: ne.HasSignedUpForTeamUpgradeWaitlistV2
            },
            onSuccessMessage: gt.teamWaitlistSignupSuccess
        }
    },
    zt = t => {
        const a = D(),
            s = Pe(),
            {
                localStorageKeyByVersion: n,
                onSuccessMessage: i
            } = vs[t],
            l = n.V1,
            o = n.V2,
            [u] = d.useState(!!ge.getItem(l)),
            [m, c] = d.useState(!!ge.getItem(o)),
            {
                data: p
            } = Ps(),
            h = () => {
                c(!0), ge.setItem(o, !0), s.success(a.formatMessage(i), {
                    hasCloseButton: !0,
                    duration: 5
                }), g.logEvent(f.upgradePlanWaitlistSignup, {
                    plan: t
                })
            };
        return {
            hasSignedUpForWaitlist: u || m,
            isEligibleToUpgrade: !!p ? .plus || u,
            signUpForWaitlist: h
        }
    };

function dn(t, a, s, n) {
    let i, l;
    n === Pt ? (i = Ye, l = vt) : n === Ct ? (i = qe, l = St) : (i = $e, l = jt);
    const o = i * a;
    let u;
    if ("percentage" in s) u = o * (1 - s.percentage / 100);
    else if ("value" in s) u = o - s.value;
    else throw new Error("Invalid discount type");
    return {
        formattedDiscountedCost: t.formatNumber(u, {
            style: "currency",
            currency: n,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }),
        currencySymbol: l
    }
}

function Gt(t, a, s, n) {
    let i = { ...a
        },
        l;
    if (n && (n.period === "year" ? n.num_periods === 1 ? l = t.formatMessage({
            id: "pricingPlanConstants.promoCostSubtitleForSingleYear",
            defaultMessage: "for the first year"
        }) : l = t.formatMessage({
            id: "pricingPlanConstants.promoCostSubtitleForPluralYears",
            defaultMessage: "for the first {num_years} years"
        }, {
            num_years: n.num_periods
        }) : n.num_periods === 1 ? l = t.formatMessage({
            id: "pricingPlanConstants.promoCostSubtitleForSingleMonth",
            defaultMessage: "for the first month"
        }) : l = t.formatMessage({
            id: "pricingPlanConstants.promoCostSubtitleForPluralMonths",
            defaultMessage: "for the first {num_months} months"
        }, {
            num_months: n.num_periods
        })), i.costDuration = {
            id: "promoCostDuration",
            defaultMessage: l,
            description: "Cost duration for promo plan"
        }, "percentage" in s || "discount_type" in s && s.discount_type === ot.PERCENTAGE) {
        const o = ("percentage" in s ? s.percentage : s.amount) / 100;
        i.costInDollars = {
            id: "discountedCost",
            defaultMessage: Se((1 - o) * $e).toString()
        }, i.costInEuros = {
            id: "discountedCostEuros",
            defaultMessage: Se((1 - o) * Ye).toString()
        }, i.costInPounds = {
            id: "discountedCostPounds",
            defaultMessage: Se((1 - o) * qe).toString()
        }
    } else if ("value" in s || s.discount_type === ot.FIXED) {
        const o = "value" in s ? s.value : s.amount;
        i.costInDollars = {
            id: "discountedCost",
            defaultMessage: Se($e - o).toString()
        }, i.costInEuros = {
            id: "discountedCostEuros",
            defaultMessage: Se(Ye - o).toString()
        }, i.costInPounds = {
            id: "discountedCostPounds",
            defaultMessage: Se(qe - o).toString()
        }
    }
    return i
}
const et = Mt(t => ({
    recentlyDowngraded: !1,
    recentlyUpgraded: !1,
    recentlyCanceled: !1,
    setRecentlyDowngraded: a => t({
        recentlyDowngraded: a
    }),
    setRecentlyUpgraded: a => t({
        recentlyUpgraded: a
    }),
    setRecentlyCanceled: a => t({
        recentlyCanceled: a
    })
}));

function Ht(t) {
    switch (t) {
        case M.FREE:
            return "chatgptfreeplan";
        case M.PLUS:
            return "chatgptplusplan";
        case M.PRO:
            return "chatgptpro";
        case M.TEAM:
            return "chatgptteamplan";
        default:
            throw new Error(`Invalid plan type: ${t}`)
    }
}

function $t({
    isOpen: t,
    onClose: a,
    accountId: s,
    initialPlanType: n,
    updatedPlanType: i,
    billingDetails: l
}) {
    const o = D(),
        u = Pe(),
        m = Re(),
        [c, p] = d.useState(!1),
        h = n === i,
        y = n === M.PLUS && i === M.PRO,
        b = Ht(i);
    d.useEffect(() => {
        g.logTogglePlanManagementModal({
            isOpen: !0
        })
    }, []);
    const S = () => {
            g.logTogglePlanManagementModal({
                isOpen: !1
            }), a()
        },
        W = Sa(s),
        Y = ja(s),
        q = At(s),
        {
            data: k,
            isError: L,
            isLoading: T
        } = It(s, void 0, b);
    !h && L && (m ? .planType === M.TEAM ? u.warning(o.formatMessage({
        id: "planManagement.errorUpgradingTeam",
        defaultMessage: "Updates to Pro aren't yet supported for users with Team subscriptions"
    }), {
        hasCloseButton: !0
    }) : u.warning(o.formatMessage({
        id: "planManagement.errorFetchingPreview",
        defaultMessage: "There was a problem updating your subscription"
    }), {
        hasCloseButton: !0
    }), a());
    const R = N => {
            const C = Ot(new Date, N);
            return new Intl.DateTimeFormat(o.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }).format(C)
        },
        P = m ? .getDaysUntilPlanExpires(),
        z = P ? R(P) : "N/A",
        {
            recentlyCanceled: J,
            setRecentlyUpgraded: w,
            setRecentlyDowngraded: he
        } = et(),
        j = m ? .willRenewSubscription() || J,
        [ae, le] = d.useState(!1),
        re = ht();
    if (!m) return null;
    const Z = async N => {
            p(!0);
            try {
                if (h) await Y.mutateAsync(s), u.success(o.formatMessage({
                    id: "planManagement.successfullyRenewedSubscription",
                    defaultMessage: "Your subscription has been renewed. Your subscription will auto-renew on {expirationDate}."
                }, {
                    expirationDate: z
                }), {
                    hasCloseButton: !0
                }), g.logEvent(f.renewPlanSuccess, {
                    planType: N
                }), O.logEvent("chatgpt_renew_plan_success", null, {
                    planType: N
                });
                else {
                    if (j || (await Y.mutateAsync(s), le(!0)), await W.mutateAsync({
                            accountId: s,
                            updatedPlan: b,
                            updatedPriceInterval: void 0,
                            updatedSeats: void 0
                        }), N !== i) {
                        const ue = y ? f.upgradePlanSuccess : f.downgradePlanSuccess,
                            K = y ? "chatgpt_upgrade_plan_success" : "chatgpt_downgrade_plan_success";
                        g.logEvent(ue, {
                            fromPlan: N,
                            toPlan: i
                        }), O.logEvent(K, null, {
                            fromPlan: N,
                            toPlan: i
                        }), y ? w(!0) : he(!0)
                    }
                    const ee = k ? .renewal_date ? new Date(k ? .renewal_date).toLocaleDateString(o.locale, {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        }) : "N/A",
                        F = y ? o.formatMessage({
                            id: "planManagement.successfullyUpdatedSubscription",
                            defaultMessage: "You're now subscribed to ChatGPT Pro"
                        }) : o.formatMessage({
                            id: "planManagement.updatedSubscriptionToPlus",
                            defaultMessage: "Your subscription has been updated. Your subscription will change to Plus on {renewalDateFormatted}."
                        }, {
                            renewalDateFormatted: ee
                        });
                    localStorage.setItem(`subscriptionUpdateMessage_${m.id}`, F)
                }
                re.invalidateQueries({
                    queryKey: ["account-status"]
                });
                const C = ge.getItem(ne.CheckoutFrom);
                C && ct[C] && (ge.removeItem(ne.CheckoutFrom), window.location.href = ct[C]), a()
            } catch (C) {
                C ? .detail ? .error_type === "card_declined" ? u.warning(o.formatMessage({
                    id: "planManagement.cardDeclinedError",
                    defaultMessage: "Payment error. Your card may be invalid or authentication may be needed."
                }), {
                    hasCloseButton: !0
                }) : u.warning(o.formatMessage({
                    id: "planManagement.errorUpdatingSubscription",
                    defaultMessage: "There was a problem updating your subscription"
                }), {
                    hasCloseButton: !0
                }), ae && await q.mutateAsync(s), a()
            } finally {
                p(!1)
            }
        },
        [se, ce, v] = Fs(l.currency);
    return e.jsx(oe, {
        type: "success",
        isOpen: t,
        onClose: S,
        size: "custom",
        noPadding: !0,
        className: "max-w-xl",
        showCloseButton: !0,
        title: o.formatMessage({
            id: "planManagementModal.title",
            defaultMessage: "Confirm changes"
        }),
        removePopoverStyling: !0,
        children: T ? e.jsx(Yt, {}) : h && m ? e.jsx(Ns, {
            account: m,
            expirationDate: z,
            handleUpdate: () => Z(n),
            isUpdating: c,
            onClose: S,
            plusCost: se,
            proCost: ce,
            currencySymbol: v
        }) : L || !k ? null : y ? e.jsx(Ss, {
            accountId: s,
            handleUpdate: () => Z(n),
            isUpdating: c,
            onClose: S,
            currencySymbol: v
        }) : e.jsx(Ts, {
            renewalDate: k.renewal_date,
            handleUpdate: () => Z(n),
            isUpdating: c,
            onClose: S,
            plusCost: se,
            currencySymbol: v
        })
    })
}

function Yt() {
    return e.jsx("div", {
        className: "flex items-center justify-center p-6",
        children: e.jsx(Fe, {})
    })
}

function Cs({
    adjustmentMessage: t,
    proratedCreditMessage: a,
    proratedCreditInfoMessage: s
}) {
    return e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "mt-4 flex justify-between",
            children: [e.jsx("span", {
                className: "font-semibold",
                children: t
            }), e.jsx("span", {
                className: "font-semibold text-green-600",
                children: a
            })]
        }), e.jsx("span", {
            className: "text-sm text-token-text-secondary",
            children: s
        })]
    })
}

function Ss({
    accountId: t,
    handleUpdate: a,
    isUpdating: s,
    onClose: n,
    currencySymbol: i
}) {
    const l = D(),
        {
            data: o,
            isError: u,
            isLoading: m
        } = It(t, void 0, Ht(M.PRO));
    if (m) return e.jsx(Yt, {});
    if (u || !o) return null;
    const c = js(o, l, i);
    return e.jsxs("div", {
        className: "p-6",
        children: [e.jsx(Es, {
            data: o,
            currencySymbol: i
        }), c.filter(p => p.value !== 0).map((p, h) => e.jsx(Cs, {
            adjustmentMessage: p.adjustmentMessage,
            proratedCreditMessage: p.proratedCreditMessage,
            proratedCreditInfoMessage: p.proratedCreditInfoMessage
        }, h)), e.jsx("hr", {
            className: "mb-4 mt-4"
        }), e.jsx(ws, {
            data: o,
            currencySymbol: i
        }), o.default_payment_method && e.jsxs(e.Fragment, {
            children: [e.jsx("hr", {
                className: "mb-4 mt-4"
            }), e.jsx(ks, {
                defaultPaymentMethod: o.default_payment_method
            })]
        }), e.jsxs("div", {
            className: "mt-8 flex justify-end gap-2",
            children: [e.jsx(Me, {
                title: l.formatMessage({
                    id: "planUpgradeModal.cancel",
                    defaultMessage: "Cancel"
                }),
                color: "secondary",
                onClick: n
            }), e.jsx(Me, {
                title: l.formatMessage({
                    id: "planUpgradeModal.payNow",
                    defaultMessage: "Pay now"
                }),
                color: "primary",
                onClick: a,
                loading: s
            })]
        })]
    })
}

function js(t, a, s) {
    return [{
        adjustmentMessage: e.jsx(r, {
            id: "planUpgradeModal.adjustment",
            defaultMessage: "Adjustment"
        }),
        proratedCreditMessage: e.jsx(r, {
            id: "planUpgradeModal.proratedCredit",
            defaultMessage: "-{currencySign}{adjustment}",
            values: {
                currencySign: a.formatMessage(s.sign),
                adjustment: (-t.negative_line_item_total / 100).toFixed(2)
            }
        }),
        proratedCreditInfoMessage: e.jsx(r, {
            id: "planUpgradeModal.proratedCreditInfo",
            defaultMessage: "Prorated credit for the remainder of your Plus subscription"
        }),
        value: t.negative_line_item_total
    }, {
        adjustmentMessage: e.jsx(r, {
            id: "planUpgradeModal.discount",
            defaultMessage: "Adjustment"
        }),
        proratedCreditMessage: e.jsx(r, {
            id: "planUpgradeModal.discountAmount",
            defaultMessage: "-{currencySign}{discount}",
            values: {
                currencySign: a.formatMessage(s.sign),
                discount: (t.discount_amount / 100).toFixed(2)
            }
        }),
        proratedCreditInfoMessage: e.jsx(r, {
            id: "planUpgradeModal.discountInfo",
            defaultMessage: "Account discount applied"
        }),
        value: t.discount_amount
    }, {
        adjustmentMessage: e.jsx(r, {
            id: "planUpgradeModal.credits",
            defaultMessage: "Adjustments"
        }),
        proratedCreditMessage: e.jsx(r, {
            id: "planUpgradeModal.creditsAmount",
            defaultMessage: "-{currencySign}{credits}",
            values: {
                currencySign: a.formatMessage(s.sign),
                credits: (t.applied_balance / 100).toFixed(2)
            }
        }),
        proratedCreditInfoMessage: e.jsx(r, {
            id: "planUpgradeModal.creditsInfo",
            defaultMessage: "Credits applied"
        }),
        value: t.applied_balance
    }]
}

function Es({
    data: t,
    currencySymbol: a
}) {
    const s = D();
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "flex justify-between",
            children: [e.jsx("span", {
                className: "font-semibold",
                children: e.jsx(r, {
                    id: "planUpgradeModal.subscription",
                    defaultMessage: "ChatGPT Pro subscription"
                })
            }), e.jsx("span", {
                className: "font-semibold",
                children: e.jsx(r, {
                    id: "planUpgradeModal.subscriptionCost",
                    defaultMessage: "{currencySign}{totalCost}",
                    values: {
                        currencySign: s.formatMessage(a.sign),
                        totalCost: (t.positive_line_item_total / 100).toFixed(2)
                    }
                })
            })]
        }), e.jsx("span", {
            className: "text-sm text-token-text-secondary",
            children: e.jsx(r, {
                id: "planUpgradeModal.billingCycle",
                defaultMessage: "Billed monthly, starting today"
            })
        })]
    })
}

function ws({
    data: t,
    currencySymbol: a
}) {
    const s = D();
    return e.jsxs(e.Fragment, {
        children: [t.amount_due.tax_amount > 0 && e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "mt-4 flex justify-between",
                children: [e.jsx("span", {
                    className: "font-semibold",
                    children: e.jsx(r, {
                        id: "planUpgradeModal.subTotal",
                        defaultMessage: "Subtotal"
                    })
                }), e.jsx("span", {
                    children: e.jsx(r, {
                        id: "planUpgradeModal.subtotalPrice",
                        defaultMessage: "{currencySign}{totalCost}",
                        values: {
                            currencySign: s.formatMessage(a.sign),
                            totalCost: (t.amount_due.amount_excluding_tax / 100).toFixed(2)
                        }
                    })
                })]
            }), e.jsxs("div", {
                className: "mt-2 flex justify-between",
                children: [e.jsxs("span", {
                    className: "font-semibold",
                    children: [e.jsx(r, {
                        id: "planUpgradeModal.tax",
                        defaultMessage: "Tax"
                    }), e.jsx("span", {
                        className: "font-normal text-token-text-secondary",
                        children: e.jsx(r, {
                            id: "planUpgradeModal.taxPercent",
                            defaultMessage: " {taxPercent}%",
                            values: {
                                taxPercent: (t.amount_due.tax_amount / t.amount_due.amount_excluding_tax * 100).toFixed(0)
                            }
                        })
                    })]
                }), e.jsx("span", {
                    children: e.jsx(r, {
                        id: "planUpgradeModal.taxAmount",
                        defaultMessage: "{currencySign}{tax}",
                        values: {
                            currencySign: s.formatMessage(a.sign),
                            tax: (t.amount_due.tax_amount / 100).toFixed(2)
                        }
                    })
                })]
            })]
        }), e.jsxs("div", {
            className: "mt-2 flex justify-between",
            children: [e.jsx("span", {
                className: "font-semibold",
                children: e.jsx(r, {
                    id: "planUpgradeModal.totalDueToday",
                    defaultMessage: "Total due today"
                })
            }), e.jsx("span", {
                className: "font-semibold",
                children: e.jsx(r, {
                    id: "planUpgradeModal.totalDueTodayAmount",
                    defaultMessage: "{currencySign}{totalCost}",
                    values: {
                        currencySign: s.formatMessage(a.sign),
                        totalCost: (t.amount_due.amount / 100).toFixed(2)
                    }
                })
            })]
        })]
    })
}

function ks({
    defaultPaymentMethod: t
}) {
    return e.jsxs("div", {
        className: "flex justify-between",
        children: [e.jsx("span", {
            className: "font-semibold",
            children: e.jsx(r, {
                id: "planUpgradeModal.paymentMethod",
                defaultMessage: "Payment Method"
            })
        }), e.jsxs("span", {
            className: "text-token-text-secondary",
            children: [t.card_brand ? .toUpperCase(), " *", t.card_last4]
        })]
    })
}

function Ts({
    renewalDate: t,
    handleUpdate: a,
    isUpdating: s,
    onClose: n,
    plusCost: i,
    currencySymbol: l
}) {
    const o = D(),
        u = t ? new Date(t).toLocaleDateString(o.locale, {
            year: "numeric",
            month: "long",
            day: "numeric"
        }) : "N/A";
    return e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: "p-6",
            children: [e.jsx("p", {
                className: "text-token-text-secondary",
                children: e.jsx(r, {
                    id: "planDowngradeModal.currentSubscription",
                    defaultMessage: "Your current Pro subscription will remain active until {renewalDateFormatted}, when it will change to Plus.",
                    values: {
                        renewalDateFormatted: u
                    }
                })
            }), e.jsxs("div", {
                className: "mt-4 rounded-md bg-token-main-surface-secondary p-4",
                children: [e.jsxs("div", {
                    className: "flex justify-between",
                    children: [e.jsx("span", {
                        className: "font-semibold",
                        children: e.jsx(r, {
                            id: "planDowngradeModal.newPlan",
                            defaultMessage: "ChatGPT Plus"
                        })
                    }), e.jsx("span", {
                        className: "text-token-text-secondary",
                        children: e.jsx(r, {
                            id: "planDowngradeModal.newPlanCost",
                            defaultMessage: "{currencyCode} {currencySign}{plusCost}/month",
                            values: {
                                currencyCode: o.formatMessage(l.code),
                                currencySign: o.formatMessage(l.sign),
                                plusCost: o.formatMessage(i)
                            }
                        })
                    })]
                }), e.jsx("span", {
                    className: "text-token-text-secondary",
                    children: e.jsx(r, {
                        id: "planDowngradeModal.billingStart",
                        defaultMessage: "Billing will start on {renewalDateFormatted}",
                        values: {
                            renewalDateFormatted: u
                        }
                    })
                })]
            }), e.jsxs("div", {
                className: "mt-8 flex justify-end gap-2",
                children: [e.jsx(Me, {
                    title: o.formatMessage({
                        id: "planDowngradeModal.cancel",
                        defaultMessage: "Cancel"
                    }),
                    color: "secondary",
                    onClick: n
                }), e.jsx(Me, {
                    title: o.formatMessage({
                        id: "planDowngradeModal.confirm",
                        defaultMessage: "Confirm"
                    }),
                    color: "primary",
                    onClick: a,
                    loading: s
                })]
            })]
        })
    })
}

function Ns({
    account: t,
    expirationDate: a,
    handleUpdate: s,
    isUpdating: n,
    onClose: i,
    plusCost: l,
    proCost: o,
    currencySymbol: u
}) {
    const m = D(),
        c = t.data.subscriptionStatus.planType,
        p = Ea(c.toLowerCase()),
        h = p === "Pro" ? o : l;
    return e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: "p-6",
            children: [e.jsx("p", {
                className: "text-token-text-secondary",
                children: e.jsx(r, {
                    id: "planRenewalModal.currentSubscription",
                    defaultMessage: "Your current {planName} subscription will auto-renew on {expirationDate}.",
                    values: {
                        planName: p,
                        expirationDate: a
                    }
                })
            }), e.jsxs("div", {
                className: "mt-4 rounded-md bg-token-main-surface-secondary p-4",
                children: [e.jsxs("div", {
                    className: "flex justify-between",
                    children: [e.jsx("span", {
                        className: "font-semibold",
                        children: e.jsx(r, {
                            id: "planRenewalModal.newPlan",
                            defaultMessage: "ChatGPT {planName}",
                            values: {
                                planName: p
                            }
                        })
                    }), e.jsx("span", {
                        className: "text-token-text-secondary",
                        children: e.jsx(r, {
                            id: "planRenewalModal.newPlanCost",
                            defaultMessage: "{currencyCode} {currencySign}{planCost}/month",
                            values: {
                                currencyCode: m.formatMessage(u.code),
                                currencySign: m.formatMessage(u.sign),
                                planCost: m.formatMessage(h)
                            }
                        })
                    })]
                }), e.jsx("span", {
                    className: "text-token-text-secondary",
                    children: e.jsx(r, {
                        id: "planRenewalModal.billingStart",
                        defaultMessage: "Billing will auto-renew on {expirationDate}",
                        values: {
                            expirationDate: a
                        }
                    })
                })]
            }), e.jsxs("div", {
                className: "mt-8 flex justify-end gap-2",
                children: [e.jsx(Me, {
                    title: m.formatMessage({
                        id: "planRenewalModal.cancel",
                        defaultMessage: "Cancel"
                    }),
                    color: "secondary",
                    onClick: i
                }), e.jsx(Me, {
                    title: m.formatMessage({
                        id: "planRenewalModal.confirm",
                        defaultMessage: "Confirm"
                    }),
                    color: "primary",
                    onClick: s,
                    loading: n
                })]
            })]
        })
    })
}

function Fs(t) {
    return t == Pt ? [De.plusCostInEurosProduce, Ve.proCostInEuros, vt] : t == Ct ? [De.plusCostInPoundsProduce, Ve.proCostInPounds, St] : [De.plusCostProduce, Ve.proCost, jt]
}
const _e = M.PLUS,
    As = {
        [U.Default]: x.plusDefaultForFreeUsers,
        [U.Scallion]: x.plusNeptuneForFreeUsers,
        [U.Chive]: x.plusChiveForFreeUsers,
        [U.ProduceDesign]: x.plusProduceForFreeUsersExp
    },
    Is = {
        [U.Default]: x.plusDefaultForPlusUsers,
        [U.Scallion]: x.plusNeptuneForPlusUsers,
        [U.Chive]: x.plusChiveForPlusUsers,
        [U.ProduceDesign]: x.plusProduceForPlusUsersExp
    },
    mn = ({
        currentAccount: t,
        pricingType: a
    }) => {
        const {
            data: {
                subscriptionStatus: s
            }
        } = t;
        return s.hasPaidSubscription && s.subscriptionPlan === ha.PLUS ? s.billingPeriod === "yearly" ? x.plusYearly : Is[a] : As[a]
    },
    Os = () => Te({
        queryKey: ["has-app-store-subscription-in-billing-retry"],
        queryFn: async () => await wt.safeGet("/subscriptions/has_app_store_subscription_in_billing_retry")
    });

function qt(t, a) {
    const s = t.data.subscriptionStatus.planType,
        n = t.getNextPlanType();
    let i = t.getDaysUntilPlanChanges(),
        l = n === M.PLUS && s === M.PRO;
    return a && !l && (i = t.getDaysUntilPlanExpires(), l = !0), {
        daysUntilPlanChanges: i,
        isDowngradeScheduled: l
    }
}

function Zt(t, a) {
    const s = Ot(new Date, t);
    return new Intl.DateTimeFormat(a, {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(s)
}

function Us(t, a, s) {
    let n;
    switch (t) {
        case "month":
            n = Aa(new Date, a);
            break;
        case "year":
            n = Fa(new Date, a);
            break
    }
    return new Intl.DateTimeFormat(s, {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(n)
}
const Kt = ({
    analyticsParams: t,
    currentAccount: a,
    planLoading: s,
    isPromoLoading: n,
    onSubmit: i,
    setPlanLoading: l,
    plusPricingPlanProduce: o = null,
    shouldShowAdditionalLinks: u = !0,
    billingDetails: m,
    promoCode: c = null,
    promoMetadata: p = null,
    onCustomUpgradeClick: h = null,
    onUpgradeLoading: y = !1,
    handlePromoModalClose: b = () => {},
    disableForMobile: S = !1,
    shouldShowMemoryUpsell: W = !1
}) => {
    const {
        data: Y
    } = bt(), {
        data: q,
        refetch: k
    } = Te(Ke), {
        data: L,
        isError: T
    } = Os(), R = a.features, P = D(), z = Pe(), [J, w] = d.useState(!1), {
        value: he
    } = He("2735225651");
    let j = o || wa({
        isGpt4_5Enabled_Plus: he
    });
    const ae = d.useRef(!1),
        [le, re] = d.useState(!1),
        [Z, se] = d.useState(!1),
        [ce, v] = d.useState(!1),
        {
            recentlyDowngraded: N,
            recentlyCanceled: C,
            setRecentlyCanceled: ee
        } = et();
    let F = [];
    const ue = a.isOrWasPaidCustomer(),
        K = a.hasPaidSubscription(),
        A = K && a.isPlus(),
        ye = K && a.isPro(),
        X = a.getLastActiveSubscription(),
        {
            hasSignedUpForWaitlist: xe,
            signUpForWaitlist: ve
        } = zt(_e),
        {
            layer: _
        } = Et("468168202"),
        be = Ae(),
        Ce = Ft(Y),
        B = R.includes("disable_plus_upgrade_ui") && !ue,
        de = R.includes("show_cancel_plus_ui"),
        {
            daysUntilPlanChanges: tt,
            isDowngradeScheduled: Qt
        } = qt(a, N),
        $ = { ...t,
            promoCode: c,
            planType: _e,
            isUpgradeUiDisabled: B
        },
        Jt = !!q ? .email,
        Be = async G => {
            if (!Jt && !G) {
                v(!0);
                return
            }
            l(M.PLUS), g.logEvent(f.accountPayPaymentCheckoutClicked, $), O.logEvent("chatgpt_account_payment_modal_upgrade_button_click", _e);
            try {
                const pe = await fe.getCheckoutLink(R, "ProducePlus", {
                    plan_name: "chatgptplusplan",
                    billing_details: m,
                    promo_code: c
                });
                i ? .(), g.logEvent(f.accountPayNavigatingToPaymentCheckout, { ...$,
                    url: pe.url
                }), O.logEvent("chatgpt_account_payment_modal_navigating_to_checkout", _e, {
                    url: pe.url
                }), window.location.href = pe.url
            } catch {
                z.warning(P.formatMessage(E.paymentErrorWarning), {
                    hasCloseButton: !0
                })
            }
            l(null)
        },
        ea = () => {
            w(!0), g.logEventWithStatsig(f.cancelPlusStart, "cancel_plus_start", { ...$,
                cancel_start_source: "manage plan"
            })
        },
        ta = async () => {
            l(M.PLUS);
            try {
                const G = await fe.fetchCustomerPortalUrl();
                g.logEvent(f.navigatingToAccountCustomerPortal, $), location.href = G.url
            } catch {
                z.warning(P.formatMessage(E.accountErrorWarning), {
                    hasCloseButton: !0
                })
            }
            l(null)
        },
        aa = () => {
            g.logEvent(f.clickAccountManageIos, $)
        },
        sa = () => {
            g.logEvent(f.clickAccountManageAndroid, $)
        },
        na = A && X.purchase_origin_platform === te.MOBILE_IOS,
        ia = A && X.purchase_origin_platform === te.MOBILE_ANDROID,
        at = A && (X.purchase_origin_platform === te.WEBAPP || X.purchase_origin_platform === te.GRANTED) && a.hasCustomerObject(),
        oa = at && !C && A && a.willRenewSubscription();
    if (W) {
        const G = j.advertisedFeatures ? ? [];
        j = { ...j,
            advertisedFeatures: [...G.slice(0, 4), De.memoryUpsell, ...G.slice(4)]
        }
    }
    if (Ce && !A && F.push(e.jsx(Q, {
            to: ka,
            target: "_blank",
            className: "px-2 underline",
            children: e.jsx(r, { ...E.limitsApply
            })
        }, "row-plus-plan-usage-limits")), na && F.push(e.jsx(Q, {
            to: Ut,
            target: "_blank",
            onClick: aa,
            className: "px-2 underline",
            children: P.formatMessage(x.manageSubscriptionIos.callToAction)
        }, "row-plus-plan-manage-ios")), ia && F.push(e.jsx(Q, {
            to: Dt,
            target: "_blank",
            onClick: sa,
            children: P.formatMessage(x.manageSubscriptionAndroid.callToAction)
        }, "row-plus-plan-manage-android")), at && _.get("is_stripe_manage_subscription_link_enabled", !0)) {
        const G = _.get("does_manage_my_subscription_link_take_user_to_subscription_settings", !1);
        F.push(e.jsx(Q, {
            to: "#",
            className: "px-2 underline",
            onClick: pe => {
                pe.preventDefault(), g.logEvent(f.clickAccountCustomerPortal, $), G ? be("/#settings/Subscription") : ta()
            },
            children: e.jsx(r, { ...x.manageSubscriptionWeb.callToAction
            })
        }, "row-manage-subscription-link")), oa && de && F.push(e.jsxs("button", {
            children: [e.jsx("span", {
                onClick: ea,
                className: "cursor-pointer px-2 underline",
                children: e.jsx(r, { ...x.cancelSubscriptionWeb.callToAction
                })
            }), e.jsx(hs, {
                isOpen: J,
                onClose: () => w(!1),
                onCancelationComplete: () => ee(!0),
                analyticsParams: $
            })]
        }, "row-cancel-subscription-link"))
    }
    A && ue && F.push(e.jsx(Q, {
        target: "_blank",
        to: Ze,
        onClick: Xe,
        className: "px-2 underline",
        children: e.jsx(r, { ...E.billingHelp
        })
    }, "row-plus-plan-help-link"));
    const st = function() {
            re(!le)
        },
        la = () => {
            ye ? (g.logEvent(f.accountPayPaymentCheckoutClicked, $), O.logEvent("chatgpt_account_payment_modal_upgrade_button_click", _e), se(!0)) : Be()
        },
        ra = () => {
            T || !L || !L.value ? h ? (h(m, $), i ? .()) : la() : st()
        },
        We = (G, pe) => e.jsx(we, {
            planType: _e,
            isCurrentPlan: A && !me,
            disabled: G,
            onClick: pe,
            testId: "select-plan-button-plus-upgrade",
            activeColor: ye ? "secondary" : ca ? "primary" : void 0,
            loading: y,
            children: s === M.PLUS && !Z ? e.jsx(Fe, {}) : me && A && j.callToAction.promo ? P.formatMessage(j.callToAction.promo) : A ? P.formatMessage(j.callToAction.active) : P.formatMessage(j.callToAction.inactive)
        });
    Qe(ce, {
        plan: $
    });
    const me = p != null,
        ca = p ? .promotion_type === "student_discount",
        nt = (!A || me) && s == null;
    if (F = me ? [] : F, me ? j = Ds(P, j, p, m.currency) : a.data.subscriptionStatus.discount && (j.cost = Gt(P, j.cost, a.data.subscriptionStatus.discount)), n != null && n) return null;
    const ua = Ls(a);
    return e.jsxs(e.Fragment, {
        children: [e.jsx(Ie, {
            planName: "plus",
            pricingPlan: j,
            icon: e.jsx(cs, {
                className: "icon-md text-green-600"
            }),
            showForLine: !A && !Ce,
            callToActionButton: B ? e.jsx("div", {
                className: "relative w-full",
                children: e.jsx(Ee, {
                    side: "bottom",
                    sideOffset: 20,
                    label: P.formatMessage(x.disabledHighDemand.hoverText),
                    children: e.jsx(we, {
                        planType: _e,
                        disabled: xe,
                        onClick: ve,
                        isCurrentPlan: A,
                        testId: "select-plan-button-plus-waitlist",
                        activeColor: ye ? "secondary" : void 0,
                        children: e.jsx(r, { ...xe ? x.signUpForWaitlist.inactive : x.signUpForWaitlist.active
                        })
                    })
                })
            }) : S && ua ? e.jsx("div", {
                children: e.jsx(Ee, {
                    side: "top",
                    sideOffset: 20,
                    label: P.formatMessage({
                        id: "I2JCGZ",
                        defaultMessage: "Mobile subscriptions are currently not eligible for this promotion."
                    }),
                    onOpenChange: G => {
                        G && !ae.current && (Ta.logMobileSubscriptionTooltipOpen(), ae.current = !0)
                    },
                    children: e.jsx("div", {
                        children: We(!0, () => {})
                    })
                })
            }) : e.jsxs("div", {
                children: [tt && Qt ? e.jsx(Ee, {
                    side: "top",
                    sideOffset: 20,
                    label: e.jsx(r, {
                        id: "8/N1rV",
                        defaultMessage: "Your subscription will change to Plus on {date}.",
                        values: {
                            date: Zt(tt, P.locale)
                        }
                    }),
                    children: We(!0, () => {})
                }) : e.jsx("div", {
                    className: nt ? "bg-green-600 bg-opacity-5" : "",
                    children: We(!nt, ra)
                }), e.jsx(Vt, {
                    isOpen: le,
                    onClose: st,
                    onContinue: Be,
                    analyticsParams: $
                }), Z && e.jsx($t, {
                    isOpen: Z,
                    onClose: () => se(!1),
                    accountId: a.id,
                    initialPlanType: M.PRO,
                    updatedPlanType: M.PLUS,
                    billingDetails: m
                })]
            }),
            secondaryCallToActionButton: me ? e.jsx(I, {
                size: "large",
                color: "secondary",
                onClick: () => b(),
                children: e.jsx(r, { ...E.notNow
                })
            }) : null,
            additionalLinks: u ? F : [],
            plusInactive: !K && !me,
            promoMetadata: p,
            billingDetails: m,
            className: me ? "bg-token-main-surface-primary" : ""
        }), e.jsx(oe, {
            isOpen: ce,
            onClose: () => v(!1),
            type: "success",
            className: "max-w-sm",
            children: e.jsx(Je, {
                enterEmailTitle: P.formatMessage(E.addEmailTitle),
                enterEmailDescription: P.formatMessage(E.addEmailDescription),
                onVerified: () => {
                    k(), v(!1), Be(!0)
                },
                cancelFlowButton: e.jsx(I, {
                    className: "w-full rounded-md",
                    color: "secondary",
                    onClick: () => v(!1),
                    children: e.jsx(r, { ...E.cancelAddEmail
                    })
                })
            })
        })]
    })
};

function Ds(t, a, s, n) {
    const {
        costTitle: i,
        currencySymbol: l
    } = Na(a, n), o = i ? .defaultMessage ? .toString() ? ? "20", u = s.duration ? .period ? ? "month", m = s.duration ? .num_periods ? ? 1, c = Us(u, m, t.locale), p = Gt(t, a.cost, s.discount, s.duration ? ? {
        num_periods: 1,
        period: "month"
    }), h = l.code.defaultMessage ? .toString() ? ? "USD", y = t.formatNumber(parseFloat(o) || 0, {
        style: "currency",
        currency: h,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    let b;
    switch (u) {
        case "month":
            m === 1 ? b = t.formatMessage(E.promoPlanDisclaimerForSingleMonth, {
                date: c,
                cost: y
            }) : b = t.formatMessage(E.promoPlanDisclaimerForPluralMonths, {
                num_months: m,
                date: c,
                cost: y
            });
            break;
        case "year":
            m === 1 ? b = t.formatMessage(E.promoPlanDisclaimerForSingleYear, {
                date: c,
                cost: y
            }) : b = t.formatMessage(E.promoPlanDisclaimerForPluralYears, {
                num_years: m,
                date: c,
                cost: y
            });
            break
    }
    const S = "<article>" + t.formatMessage(E.termsApply) + "</article> " + b;
    return a = { ...a,
        summary: {
            id: "promoSummary",
            defaultMessage: s.summary
        },
        disclaimer: {
            id: "promoDisclaimer",
            defaultMessage: S,
            article: "https://help.openai.com/en/articles/10492689-chatgpt-plus-promotions-referrals"
        },
        cost: p,
        callToAction: { ...a.callToAction,
            promo: {
                id: "pricingPlanConstants.promo.callToAction",
                defaultMessage: "Apply to My Subscription",
                description: "Payment call to action for existing subscribers adding a discount to their plan"
            }
        }
    }, a
}

function Ls(t) {
    const a = t.hasPaidSubscription(),
        s = t.getLastActiveSubscription(),
        n = a && s.purchase_origin_platform === te.MOBILE_IOS,
        i = a && s.purchase_origin_platform === te.MOBILE_ANDROID;
    return n || i
}
const E = ie({
        promoPlanDisclaimerForPluralMonths: {
            id: "pricingPlanConstants.promoPlanDisclaimerForPluralMonths",
            defaultMessage: "Promo pricing applies for {num_months} months. Starting {date}, ChatGPT Plus will continue at {cost}/month. Cancel anytime."
        },
        promoPlanDisclaimerForSingleMonth: {
            id: "pricingPlanConstants.promoPlanDisclaimerForSingleMonth",
            defaultMessage: "Promo pricing applies for 1 month. Starting {date}, ChatGPT Plus will continue at {cost}/month. Cancel anytime."
        },
        promoPlanDisclaimerForPluralYears: {
            id: "pricingPlanConstants.promoPlanDisclaimerForPluralYears",
            defaultMessage: "Promo pricing applies for {num_years} years. Starting {date}, ChatGPT Plus will continue at {cost}/year. Cancel anytime."
        },
        promoPlanDisclaimerForSingleYear: {
            id: "pricingPlanConstants.promoPlanDisclaimerForSingleYear",
            defaultMessage: "Promo pricing applies for 1 year. Starting {date}, ChatGPT Plus will continue at {cost}/year. Cancel anytime."
        },
        termsApply: {
            id: "pricingPlanConstants.termsApply",
            defaultMessage: "Terms apply."
        },
        addEmailTitle: {
            id: "AccountPaymentModal.addEmailTitle",
            defaultMessage: "Email required"
        },
        addEmailDescription: {
            id: "AccountPaymentModal.addEmailDescription",
            defaultMessage: "You’ll be able to login with this email. It will also be used for account updates (like password resets) and information about OpenAI services."
        },
        cancelAddEmail: {
            id: "AccountPaymentModal.cancelAddEmail",
            defaultMessage: "Cancel"
        },
        haveExistingPlan: {
            id: "AccountPaymentModal.haveExistingPlan",
            defaultMessage: "Have an existing plan?"
        },
        billingHelp: {
            id: "AccountPaymentModel.billingHelp",
            defaultMessage: "I need help with a billing issue"
        },
        paymentErrorWarning: {
            id: "AccountPaymentModal.paymentErrorWarning",
            defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
        },
        accountErrorWarning: {
            id: "AccountPaymentModal.accountErrorWarning",
            defaultMessage: "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
        },
        limitsApply: {
            id: "xda4i3",
            defaultMessage: "Limits apply"
        },
        notNow: {
            id: "AccountPaymentModal.notNow",
            defaultMessage: "Not Now"
        }
    }),
    Rs = t => d.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, d.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.22222 20C1.54721 20 1 19.4563 1 18.7857C1 16.7307 1.99227 15.1645 3.42364 14.1533C4.81866 13.1677 6.60907 12.7143 8.33333 12.7143C10.0576 12.7143 11.848 13.1677 13.243 14.1533C14.6744 15.1645 15.6667 16.7307 15.6667 18.7857C15.6667 19.4563 15.1195 20 14.4444 20C12.7348 20 3.93184 20 2.22222 20Z",
        fill: "currentColor"
    }), d.createElement("path", {
        d: "M17.5 18.7857C17.5 16.4257 16.487 14.5332 14.998 13.2166C15.7888 12.8756 16.655 12.7143 17.5 12.7143C18.7932 12.7143 20.136 13.0921 21.1823 13.9134C22.2558 14.7561 23 16.0613 23 17.7738C23 18.3327 22.5896 18.7857 22.0833 18.7857H17.5Z",
        fill: "currentColor"
    }), d.createElement("path", {
        d: "M8.33333 2.99998C5.97078 2.99998 4.05556 4.90277 4.05556 7.24998C4.05556 9.5972 5.97078 11.5 8.33333 11.5C10.6959 11.5 12.6111 9.5972 12.6111 7.24998C12.6111 4.90277 10.6959 2.99998 8.33333 2.99998Z",
        fill: "currentColor"
    }), d.createElement("path", {
        d: "M17.5 5.42856C15.8125 5.42856 14.4444 6.78769 14.4444 8.46427C14.4444 10.1408 15.8125 11.5 17.5 11.5C19.1875 11.5 20.5556 10.1408 20.5556 8.46427C20.5556 6.78769 19.1875 5.42856 17.5 5.42856Z",
        fill: "currentColor"
    })),
    je = M.TEAM,
    Bs = ({
        analyticsParams: t,
        planLoading: a,
        teamPricingPlanProduce: s = null,
        billingDetails: n
    }) => {
        const {
            data: i,
            refetch: l
        } = Te(Ke), u = ya() ? .includes("disable_team_upgrade_ui"), m = D(), c = Re(), p = Ae(), [h, y] = d.useState(!1), {
            hasSignedUpForWaitlist: b,
            signUpForWaitlist: S
        } = zt(je), W = c && c.isTeam(), Y = c && c.isPlus(), q = { ...t,
            planType: je,
            isUpgradeUiDisabled: u
        }, k = !!i ? .email, L = s || x.teamsProduceExp, T = R => {
            if (!k && !R) {
                y(!0);
                return
            }
            g.logEvent(f.accountPayPaymentCheckoutClicked, q), O.logEvent("chatgpt_account_payment_modal_upgrade_button_click", je), Ia.setPurchaseWorkspaceData({
                minimumSeats: Oa,
                billingDetails: n
            }), Lt(p)
        };
        return Qe(h, {
            plan: q
        }), e.jsxs(e.Fragment, {
            children: [e.jsx(Ie, {
                planName: "team",
                pricingPlan: L,
                icon: e.jsx(Rs, {
                    className: "icon-md text-brand-blue-800"
                }),
                callToActionButton: e.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [W && e.jsx(we, {
                        planType: je,
                        isCurrentPlan: !0,
                        disabled: a != null || W,
                        onClick: () => T(),
                        testId: "select-plan-button-teams-upgrade",
                        children: m.formatMessage(x.teams.callToAction.active)
                    }), u ? e.jsx("div", {
                        className: "relative w-full",
                        children: e.jsx(Ee, {
                            side: "bottom",
                            sideOffset: 20,
                            label: m.formatMessage(x.disabledHighDemand.hoverText),
                            children: e.jsx(we, {
                                planType: je,
                                isCurrentPlan: !1,
                                disabled: b,
                                onClick: S,
                                testId: "select-plan-button-teams-waitlist",
                                children: e.jsx(r, { ...b ? x.signUpForWaitlist.inactive : x.signUpForWaitlist.active
                                })
                            })
                        })
                    }) : e.jsx("div", {
                        className: "w-full",
                        children: e.jsx(we, {
                            planType: je,
                            isCurrentPlan: !1,
                            disabled: a != null,
                            onClick: () => T(),
                            testId: "select-plan-button-teams-create",
                            children: W || Y ? m.formatMessage(L.callToAction.create) : m.formatMessage(L.callToAction.inactive)
                        })
                    })]
                }),
                billingDetails: n
            }), e.jsx(oe, {
                isOpen: h,
                onClose: () => y(!1),
                type: "success",
                className: "max-w-sm",
                children: e.jsx(Je, {
                    enterEmailTitle: m.formatMessage(E.addEmailTitle),
                    enterEmailDescription: m.formatMessage(E.addEmailDescription),
                    onVerified: () => {
                        y(!1), l(), T(!0)
                    }
                })
            })]
        })
    },
    Ws = () => Te({
        queryKey: ["has-app-store-subscription-in-billing-retry"],
        queryFn: async () => await wt.safeGet("/subscriptions/has_app_store_subscription_in_billing_retry")
    }),
    Ue = "pro",
    Vs = ({
        analyticsParams: t,
        currentAccount: a,
        planLoading: s,
        onSubmit: n,
        setPlanLoading: i,
        billingDetails: l,
        variant: o
    }) => {
        const {
            data: u,
            isError: m
        } = Ws(), c = a.features, {
            data: p,
            refetch: h
        } = Te(Ke), y = D(), b = Pe(), [S] = yt(), W = S.get("checkout_from"), [Y, q] = d.useState(!1), [k, L] = d.useState(!1), [T, R] = d.useState(!1), P = a.getLastActiveSubscription(), z = a.isOrWasPaidCustomer(), J = a.hasPaidSubscription(), w = J && a.isPro(), he = !!p ? .email, {
            layer: j
        } = Et("468168202"), ae = Ae(), {
            recentlyDowngraded: le
        } = et(), {
            daysUntilPlanChanges: re,
            isDowngradeScheduled: Z
        } = qt(a, le), {
            value: se
        } = xa("1719651090"), {
            value: ce
        } = He("925172880"), v = Ua({
            isOperatorEnabled: se,
            isGpt4_5Enabled: ce
        }), N = [], C = { ...t,
            planType: Ue
        }, ee = J && P.purchase_origin_platform === te.MOBILE_IOS, F = J && P.purchase_origin_platform === te.MOBILE_ANDROID, ue = J && (P.purchase_origin_platform === te.WEBAPP || P.purchase_origin_platform === te.GRANTED) && a.hasCustomerObject(), K = async B => {
            if (!he && !B) {
                R(!0);
                return
            }
            i(M.PRO), g.logEvent(f.accountPayPaymentCheckoutClicked, C), O.logEvent("chatgpt_account_payment_modal_upgrade_button_click", Ue);
            try {
                const de = await fe.getCheckoutLink(c, "ProducePro", {
                    plan_name: "chatgptpro",
                    billing_details: l
                });
                n ? .(), g.logEvent(f.accountPayNavigatingToPaymentCheckout, { ...C,
                    url: de.url
                }), O.logEvent("chatgpt_account_payment_modal_navigating_to_checkout", Ue, {
                    url: de.url
                }), W === "vza493q" && ge.setItem(ne.CheckoutFrom, W), window.location.href = de.url
            } catch {
                b.warning(y.formatMessage(E.paymentErrorWarning), {
                    hasCloseButton: !0
                })
            }
            i(null)
        }, A = async () => {
            i(M.PRO);
            try {
                const B = await fe.fetchCustomerPortalUrl();
                g.logEvent(f.navigatingToAccountCustomerPortal, C), location.href = B.url
            } catch {
                b.warning(y.formatMessage(E.accountErrorWarning), {
                    hasCloseButton: !0
                })
            }
            i(null)
        }, ye = () => {
            g.logEvent(f.clickAccountManageIos, C)
        }, X = () => {
            g.logEvent(f.clickAccountManageAndroid, C)
        };
        if (w && ee && N.push(e.jsx(Q, {
                to: Ut,
                target: "_blank",
                onClick: ye,
                className: "px-2 underline",
                children: y.formatMessage(x.manageSubscriptionIos.callToAction)
            }, "row-plus-plan-manage-ios")), w && F && N.push(e.jsx(Q, {
                to: Dt,
                target: "_blank",
                onClick: X,
                children: y.formatMessage(x.manageSubscriptionAndroid.callToAction)
            }, "row-plus-plan-manage-android")), w && ue && j.get("is_stripe_manage_subscription_link_enabled", !0)) {
            const B = j.get("does_manage_my_subscription_link_take_user_to_subscription_settings", !1);
            N.push(e.jsx(Q, {
                to: "#",
                className: "px-2 underline",
                onClick: de => {
                    de.preventDefault(), g.logEvent(f.clickAccountCustomerPortal, C), B ? ae("/#settings/Subscription") : A()
                },
                children: e.jsx(r, { ...x.manageSubscriptionWeb.callToAction
                })
            }, "row-manage-subscription-link"))
        }
        z && N.push(e.jsx(Q, {
            target: "_blank",
            to: Ze,
            onClick: Xe,
            className: "px-2 underline",
            children: e.jsx(r, { ...E.billingHelp
            })
        }, "row-plus-plan-help-link"));
        const xe = function() {
                q(!Y)
            },
            ve = function() {
                L(!k)
            },
            {
                value: _
            } = He("1382475798"),
            be = async () => {
                let B = a.hasPaidSubscription() && a.isPlus();
                _ && (B = B && !a.isActiveSubscriptionGratis()), B ? (g.logEvent(f.accountPayPaymentCheckoutClicked, C), O.logEvent("chatgpt_account_payment_modal_upgrade_button_click", Ue), L(!0)) : await K()
            },
            Ce = m || !u || !u.value ? be : () => {
                xe()
            };
        return Qe(T, {
            plan: C
        }), e.jsxs(e.Fragment, {
            children: [e.jsx(Ie, {
                planName: "pro",
                pricingPlan: v,
                icon: e.jsx(Ja, {
                    className: "icon-md primary"
                }),
                showForLine: !1,
                callToActionButton: e.jsxs("div", {
                    children: [a.isWorkspacePlan() && o === "operator" ? e.jsx(I, {
                        fullWidth: !0,
                        size: "large",
                        color: "primary",
                        disabled: !0,
                        "data-testid": "select-plan-button-pro-upgrade",
                        children: y.formatMessage(ft.switchToPersonalAccount)
                    }) : ee || F ? e.jsx(Ee, {
                        side: "top",
                        sideOffset: 20,
                        label: y.formatMessage(ft.switchToMobile),
                        children: e.jsx(I, {
                            fullWidth: !0,
                            size: "large",
                            color: "primary",
                            disabled: !0,
                            "data-testid": "select-plan-button-pro-upgrade",
                            children: y.formatMessage(v.callToAction.inactive)
                        })
                    }) : Z && re ? e.jsx(Ee, {
                        side: "top",
                        sideOffset: 20,
                        label: e.jsx(r, {
                            id: "jgTAPh",
                            defaultMessage: "Your subscription will remain active until {date}, when it will change to Plus.",
                            values: {
                                date: Zt(re, y.locale)
                            }
                        }),
                        children: e.jsx(I, {
                            fullWidth: !0,
                            size: "large",
                            color: "primary",
                            disabled: w || s != null,
                            "data-testid": "select-plan-button-pro-upgrade",
                            className: w || s != null ? "border-none bg-token-sidebar-surface-tertiary font-semibold text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary dark:text-token-text-primary dark:hover:bg-token-text-tertiary" : "",
                            children: s === M.PRO && !k ? e.jsx(Fe, {}) : w ? y.formatMessage(v.callToAction.active) : y.formatMessage(v.callToAction.inactive)
                        })
                    }) : e.jsx(I, {
                        fullWidth: !0,
                        size: "large",
                        color: "primary",
                        disabled: w || s != null,
                        onClick: Ce,
                        "data-testid": "select-plan-button-pro-upgrade",
                        className: w || s != null ? "border-none bg-token-sidebar-surface-tertiary font-semibold text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary dark:text-token-text-primary dark:hover:bg-token-text-tertiary" : "",
                        children: s === M.PRO && !k ? e.jsx(Fe, {}) : w ? y.formatMessage(v.callToAction.active) : y.formatMessage(v.callToAction.inactive)
                    }), e.jsx(Vt, {
                        isOpen: Y,
                        onClose: xe,
                        onContinue: K,
                        analyticsParams: C
                    }), k && e.jsx($t, {
                        isOpen: k,
                        onClose: ve,
                        accountId: a.id,
                        initialPlanType: M.PLUS,
                        updatedPlanType: M.PRO,
                        billingDetails: l
                    })]
                }),
                additionalLinks: N,
                className: "bg-token-main-surface-primary",
                billingDetails: l
            }), e.jsx(oe, {
                isOpen: T,
                onClose: () => R(!1),
                type: "success",
                className: "max-w-sm",
                children: e.jsx(Je, {
                    enterEmailTitle: y.formatMessage(E.addEmailTitle),
                    enterEmailDescription: y.formatMessage(E.addEmailDescription),
                    onVerified: () => {
                        h(), R(!1), K(!0)
                    },
                    cancelFlowButton: e.jsx(I, {
                        className: "w-full rounded-md",
                        color: "secondary",
                        onClick: () => R(!1),
                        children: e.jsx(r, { ...E.cancelAddEmail
                        })
                    })
                })
            })]
        })
    },
    ft = ie({
        switchToPersonalAccount: {
            id: "y5FjSF",
            defaultMessage: "Switch to a personal account to upgrade"
        },
        switchToMobile: {
            id: "gbjsg6",
            defaultMessage: "It looks like you already have an active mobile subscription. Switch to your mobile app to upgrade"
        }
    });

function zs(t) {
    switch (t) {
        case "security":
            return Wa;
        case "value":
            return Ba;
        default:
            return Ra
    }
}

function Gs({
    analyticsParams: t,
    currentAccount: a,
    planLoading: s,
    selectedTab: n,
    setPlanLoading: i,
    shouldSplitBetweenPersonalAndBusiness: l,
    isEnterpriseEnabled: o,
    billingDetails: u,
    variant: m,
    shouldShowMemoryUpsell: c,
    teamPlanVariant: p
}) {
    const h = [],
        y = a.hasPaidSubscription();
    return m === "operator" ? (y && a.isPlus() && h.push("plus"), h.push("pro")) : l ? n === "personal" ? (y || h.push("free"), h.push("plus"), h.push("pro")) : (h.push("team"), o && h.push("enterprise")) : (y || h.push("free"), (!a.isTeam() || !a.isEnterprisey() && o) && (h.push("plus"), h.push("pro")), h.push("team"), o && h.push("enterprise")), h.length === 0 && kt.addError(new Error("Account payment modal missing columns")), h.map(b => {
        switch (b) {
            case "free":
                return e.jsx(ls, {
                    freePricingPlanProduce: La,
                    billingDetails: u
                }, b);
            case "plus":
                return e.jsx(Kt, {
                    analyticsParams: t,
                    currentAccount: a,
                    setPlanLoading: i,
                    planLoading: s,
                    billingDetails: u,
                    shouldShowMemoryUpsell: c
                }, b);
            case "team":
                return e.jsx(Bs, {
                    analyticsParams: t,
                    planLoading: s,
                    teamPricingPlanProduce: zs(p),
                    billingDetails: u
                }, b);
            case "enterprise":
                return e.jsx(ns, {
                    enterprisePricingPlanProduce: Da,
                    billingDetails: u
                }, b);
            case "pro":
                return e.jsx(Vs, {
                    analyticsParams: t,
                    currentAccount: a,
                    setPlanLoading: i,
                    planLoading: s,
                    billingDetails: u,
                    variant: m
                }, b)
        }
    })
}
const Hs = ["^yahoo(?:\\.[a-z]{2,}){1,2}$", "^hotmail(?:\\.[a-z]{2,}){1,2}$", "^outlook(?:\\.[a-z]{2,}){1,2}$", "^live(?:\\.[a-z]{2,}){1,2}$", "^email(?:\\.[a-z]{2,}){1,2}$", "^online(?:\\.[a-z]{2,}){1,2}$", "^mail(?:\\.[a-z]{2,}){1,2}$", "^posteo(?:\\.[a-z]{2,}){1,2}$", "^gmx(?:\\.[a-z]{2,}){1,2}$", "^aol(?:\\.[a-z]{2,}){1,2}$"],
    $s = ["\\b(?:[a-zA-Z0-9-]+\\.)+(?:edu(\\.[a-zA-Z]{2,})?|ac\\.[a-zA-Z]{2,})\\b", "^[a-z]+\\.(k12)\\.[a-z]{2}\\.us$", "\\.(ac|ed)\\.jp$"];

function Ys(t) {
    return Xt(t, Hs, Zs)
}

function qs(t) {
    return Xt(t, $s, Ks)
}

function Xt(t, a, s) {
    for (const n of a)
        if (new RegExp(n, "i").test(t)) return !0;
    return s.includes(t.toLowerCase())
}
const Zs = ["gmail.com", "privaterelay.appleid.com", "icloud.com", "naver.com", "web.de", "qq.com", "googlemail.com", "me.com", "wp.pl", "proton.me", "seznam.cz", "libero.it", "protonmail.com", "msn.com", "t-online.de", "orange.fr", "163.com", "comcast.net", "ymail.com", "hanmail.net", "o2.pl", "ukr.net", "16888mail.com", "bluewin.ch", "abv.bg", "docomo.ne.jp", "usa.com", "ezztt.com", "txcct.com", "interia.pl", "free.fr", "soscandia.org", "mac.com", "ezweb.ne.jp", "i.softbank.jp", "vjuum.com", "laposte.net", "btinternet.com", "wanadoo.fr", "yandex.ru", "freenet.de", "laafd.com", "op.pl", "telenet.be", "baipiao.io", "mail10year.com", "duck.com", "sbcglobal.net", "nate.com", "mailbox.org", "126.com", "att.net", "ddmail365.com", "inbox.lv", "myself.com", "daum.net", "rocketmail.com", "virgilio.it", "onet.pl", "sfr.fr", "bigpond.com", "bk.ru", "rediffmail.com", "tiscali.it", "verizon.net", "inbox.ru", "sky.com", "dogmail.college", "windowslive.com", "alice.it", "foxmail.com", "rambler.ru", "qwqmail.online", "pm.me", "cczemail.com", "yandex.com", "uol.com.br", "arcor.de", "lanrengu.email", "shaw.ca", "cox.net", "ziggo.nl", "rogers.com", "sina.com", "centrum.cz", "bellsouth.net", "vp.pl", "nifty.com", "skynet.be", "sapo.pt", "mozmail.com", "freemail.hu", "emailawb.pro", "tlen.pl", "139.com", "kkumail.com", "terra.com.br", "myyahoo.com", "neuf.fr", "bol.com.br", "onet.eu", "kakao.com", "kpnmail.nl", "telus.net", "poczta.onet.pl", "poczta.fm", "home.nl", "post.cz", "optonline.net", "tutanota.com", "videotron.ca", "i.ua", "charter.net", "aim.com", "xtra.co.nz", "simplelogin.com", "interia.eu", "ntlworld.com", "88.com", "optusnet.com.au", "tutamail.com", "xs4all.nl", "iinet.net.au", "maillsk.com", "ybb.ne.jp", "walla.com", "passmail.net", "hispeed.ch", "sunrise.ch", "earthlink.net", "planet.nl", "sympatico.ca", "bigpond.net.au", "fastmail.com", "protonmail.ch", "list.ru", "virginmedia.com", "ymail.ne.jp", "vip.qq.com", "upcmail.nl", "y7mail.com", "passinbox.com", "tuta.io", "gazeta.pl", "tin.it", "volny.cz", "kabelmail.de", "yeah.net", "blueyonder.co.uk", "chello.at", "mein.gmx", "ya.ru", "emailhubpro.com", "bell.net", "hetnet.nl", "walla.co.il", "msa.hinet.net", "zoho.com", "yandex.kz", "hey.com", "btopenworld.com", "club-internet.fr", "mweb.co.za", "casema.nl", "bluemail.ch", "mailfence.com", "chello.nl", "juno.com", "netscape.net", "atlas.cz", "emailggg.cloud", "pacbell.net", "slmail.me", "internode.on.net", "onlinehome.de", "mailnuo.com", "livemail.tw", "tiscali.co.uk", "sluz.ch", "nifty.ne.jp", "ik.me", "mindspring.com", "riseup.net", "emailaoa.pro", "emailpop.icu", "siol.net", "windstream.net", "usa.net", "onlinecmail.com", "invisible.email", "emailkom.live", "pobox.com", "aliceadsl.fr", "empal.com", "prodigy.net", "emailbbox.pro", "fastmail.fm", "psn-wallet.com", "mailsprint.shop", "mailwhisper.site", "mailmaster.space", "emailninja.site", "emailguru.site", "emailwizard.site", "emailninja.space", "mailarray.shop", "mailsprint.cloud", "ig.com.br", "gmx-topmail.de", "mailerbox.online", "mailcentral.online", "emailnow.tech", "mailnow.tech", "mailbase.online", "mailhub.online", "mailconnect.online", "maildispatch.online", "mailtime.tech", "mailzone.tech", "emailhub.tech", "mailflow.tech", "maildrop.tech", "mailcenter.tech", "maildirect.tech", "mailcentral.tech", "mailerbox.tech", "mailpros.tech", "maildispatch.tech", "mailconnect.tech", "mailsender.tech", "mailbase.tech", "mailstream.tech", "runbox.com"],
    Ks = ["guru.sd.belajar.id", "sma.belajar.id", "smp.belajar.id", "alumnos.udg.mx", "guru.smp.belajar.id", "tec.mx", "ku.th", "usp.br", "xtec.cat", "nv.ccsd.net", "ucm.es", "ualberta.ca", "studenti.uniroma1.it", "unesp.br", "id.uff.br", "ucol.mx", "uc.cl", "studenti.unipd.it", "tcd.ie", "usach.cl", "ug.uchile.cl", "uach.mx", "ufpe.br", "torontomu.ca", "umich.mx", "usal.es", "cherrycreekschools.org", "apsk12.org", "unizar.es", "keio.jp", "uni.pe", "uagro.mx", "ucdconnect.ie", "unach.mx", "sciencespo.fr", "lausd.net", "ufv.br", "uji.es", "ufms.br", "edu.escp.eu", "ciencias.unam.mx", "uel.br", "sausdlearns.net", "miuandes.cl", "mtroyal.ca", "uem.br", "azc.uam.mx", "studio.unibo.it", "sempreceub.com", "ucs.br", "ufromail.cl", "pucp.pe", "uacam.mx", "unifg.it", "mun.ca", "saveetha.com", "parisnanterre.fr", "upe.br", "ugent.be", "ontariotechu.net", "ufba.br", "utem.cl", "studenti.unipi.it", "lakeheadu.ca", "fen.uchile.cl", "epfl.ch", "uwo.ca", "uottawa.ca", "ceti.mx", "uwaterloo.ca", "uni-plovdiv.bg", "uma.es", "campus.fct.unl.pt", "nure.ua", "uic.es", "hva.nl", "ulbsibiu.ro", "tum.de", "cic-cairo.com", "uniroma1.it", "hr.nl", "rwth-aachen.de", "anahuac.mx", "queensu.ca", "trentu.ca", "edhec.com", "alumni.usp.br", "uepg.br", "dal.ca", "student.karazin.ua", "uesc.br", "userena.cl", "ucalgary.ca", "tecnico.ulisboa.pt", "rug.nl", "unito.it", "upaep.mx", "mcmaster.ca", "ua.pt", "usherbrooke.ca", "kth.se", "rub.de", "uoi.gr", "umontreal.ca", "knu.ua", "ufrpe.br", "ulaval.ca", "metropolia.fi", "oecu.jp", "vutbr.cz", "helsinki.fi", "ulb.be", "tecmilenio.mx", "unifi.it", "tu-dortmund.de", "aalto.fi", "unicap.br", "laurentian.ca", "uoguelph.ca", "kuleuven.be", "wur.nl", "vub.be", "lamar.org.mx", "hec.ca", "urca.br", "unicamp.br", "ufrrj.br", "uzh.ch", "umce.cl", "umag.cl", "utoronto.ca", "sfu.ca", "unipd.it", "utm.my", "utu.fi", "kleinisd.net", "stuba.sk", "ethz.ch", "ieseg.fr", "garnetvalley.org", "ugto.mx", "univale.br", "fau.de", "lagh-univ.dz", "upsa.es", "tlu.ee", "uchile.cl", "tudelft.nl", "usask.ca", "um6p.ma", "zuyd.nl", "mylaurier.ca", "ru.nl", "auca.kg", "dtu.dk", "ehl.ch", "uni-muenster.de", "um.es", "uwindsor.ca", "iteso.mx", "brocku.ca", "unil.ch", "ucd.ie", "eur.nl", "campus.ul.pt", "upei.ca", "edu.aua.am"];

function Xs({
    title: t,
    message: a,
    buttonTitle: s,
    isOpen: n,
    onClose: i
}) {
    return e.jsx(oe, {
        type: "success",
        isOpen: n,
        onClose: i,
        showCloseButton: !0,
        title: t,
        children: e.jsxs("div", {
            className: "",
            children: [e.jsx("p", {
                children: a
            }), e.jsx("div", {
                className: "mt-4 flex justify-end",
                children: e.jsx(Me, {
                    title: s,
                    color: "secondary",
                    onClick: i,
                    size: "large"
                })
            })]
        })
    })
}
const Qs = ({
        isOpen: t,
        onClose: a,
        promoError: s,
        promoCode: n
    }) => {
        const i = D();
        return d.useEffect(() => {
            g.logEvent(f.promoIneligibleModalShown, {
                promoCode: n,
                ineligibleReason: s.code
            }), O.logEvent("chatgpt_promo_ineligible_modal_shown")
        }, [n, s.code]), e.jsx(Xs, {
            title: s.title,
            message: s.message,
            buttonTitle: i.formatMessage({
                id: "promoIneligibleModal.close",
                defaultMessage: "Close"
            }),
            isOpen: t,
            onClose: a
        })
    },
    Js = ({
        handleClose: t,
        analyticsParams: a,
        currentAccount: s,
        setPlanLoading: n,
        planLoading: i,
        billingDetails: l,
        promoMetadata: o,
        promoCode: u,
        nonFooterContentRef: m,
        isEligible: c,
        isPromoLoading: p,
        promoError: h
    }) => {
        const y = Ae(),
            {
                eligible: b,
                isLoading: S
            } = Va(za);
        if (d.useEffect(() => {
                b && !S && o && (ge.setItem(ne.PromoCode, u), t(), y("/"))
            }, [b, S, u, t, y, o]), !c && h) return e.jsx(Qs, {
            isOpen: !0,
            onClose: t,
            promoError: h,
            promoCode: u
        });
        if (b || S) return null;
        if (c && o != null) return e.jsx(en, {
            handleClose: t,
            analyticsParams: a,
            currentAccount: s,
            setPlanLoading: n,
            planLoading: p ? M.PLUS : i,
            isPromoLoading: p,
            billingDetails: l,
            promoCode: u,
            promoMetadata: o,
            nonFooterContentRef: m
        })
    },
    en = ({
        handleClose: t,
        analyticsParams: a,
        currentAccount: s,
        setPlanLoading: n,
        planLoading: i,
        isPromoLoading: l,
        billingDetails: o,
        promoCode: u,
        promoMetadata: m,
        nonFooterContentRef: c
    }) => (d.useEffect(() => {
        g.logEvent(f.promoEligibleModalShown, {
            promoCode: u
        }), O.logEvent("chatgpt_promo_eligible_modal_shown")
    }, [u]), e.jsx(oe, {
        size: "fullscreen",
        isOpen: !0,
        onClose: t,
        type: "success",
        className: "flex h-full flex-col items-center justify-center bg-white/70 dark:bg-gray-800/70",
        removePopoverStyling: !0,
        showOverlayBackground: !1,
        children: e.jsx("div", {
            ref: c,
            className: "flex h-full items-center justify-center",
            children: e.jsx("div", {
                className: "flex flex-col justify-center gap-4 px-3 py-6 md:min-h-[30rem] md:flex-row md:gap-0 md:py-0",
                children: e.jsx(Kt, {
                    analyticsParams: a,
                    currentAccount: s,
                    setPlanLoading: n,
                    planLoading: i,
                    isPromoLoading: l,
                    billingDetails: o,
                    promoCode: u,
                    promoMetadata: m,
                    handlePromoModalClose: t
                })
            })
        })
    }));

function pn(t) {
    return t.split("#")[1] === Ka
}

function gn(t) {
    return t.split("#")[1] === Xa
}

function fn({
    currentAccount: t,
    defaultTab: a,
    onClose: s,
    variant: n = "default"
}) {
    const [i, l] = d.useState(null), o = t.hasPaidSubscription() && !(t.isPlus() || t.isWorkspacePlan()), m = lt("2043237793").config.get("bucket", "default"), c = Ga(), p = d.useMemo(() => {
        const _ = c ? .email ? .split("@")[1];
        return _ ? !Ys(_) && !qs(_) : !1
    }, [c]), h = lt("1535013773", p), y = p && !!h.config.get("enabled", !1), b = a ? ? (t.isPersonalAccount() && !y ? "personal" : "business"), [S] = yt(), W = S.get("promoCode"), {
        isEligible: Y,
        promoMetadata: q,
        isPromoLoading: k,
        promoError: L
    } = Ha(W ? ? ""), T = d.useMemo(() => ({ ...t.subscriptionAnalyticsParams,
        referrer: document.referrer
    }), [t]), R = Ae(), P = Pe(), z = d.useCallback(() => {
        g.logEvent(f.accountPayCloseAccountPaymentModal, T), s ? s() : Lt(R)
    }, [T, R, s]), J = $a();
    d.useEffect(() => {
        const _ = Qa();
        g.logEvent(f.accountPayAccountPaymentModalShow, { ...T,
            location: _,
            initialTab: b
        }), O.logEvent("chatgpt_account_payment_modal_show", null, {
            location: _ ? ? ""
        })
    }, [T, b]), d.useEffect(() => {
        const _ = localStorage.getItem(`subscriptionUpdateMessage_${t.id}`);
        if (_) {
            localStorage.removeItem(`subscriptionUpdateMessage_${t.id}`), P.success(_, {
                hasCloseButton: !0
            });
            const be = setTimeout(() => {
                z()
            }, 5e3);
            return () => {
                clearTimeout(be)
            }
        }
    }, [t.id, P, z]);
    const [w, he] = d.useState(b), j = Ya(), ae = j && n !== "operator", {
        isCountrySelectorEnabled: le,
        countryWithFallback: re,
        initialBillingDetails: Z
    } = qa(t, w == "personal"), se = ba().locale, ce = _a(se), [v, N] = d.useState(re), [C, ee] = d.useState(Z), F = _ => {
        kt.addAction("chatgpt_selected_country_changed_in_pricing_modal", {
            old_selected_country: v,
            new_selected_country: _
        }), g.logEvent(f.selectedCountryChangedInPricingModal, {
            old_selected_country: v,
            new_selected_country: _
        }), O.logEvent("chatgpt_selected_country_changed_in_pricing_modal", _, {
            old_selected_country: v,
            new_selected_country: _
        }), N(_), ee({
            country: _,
            currency: rt(_)
        })
    }, ue = _ => {
        he(_), _ == "personal" && t.hasPaidSubscription() ? ee({
            currency: t.mustGetSubscriptionBillingCurrency("AccountPaymentModal")
        }) : ee({
            country: v,
            currency: rt(v)
        }), g.logEvent(f.accountPayAccountPaymentModalToggleClicked, {
            selectedTab: _
        }), O.logEvent("chatgpt_account_payment_modal_toggle_clicked", null, {
            selectedTab: _
        })
    }, K = 136, [A, ye] = d.useState(), X = d.useRef(null);
    d.useEffect(() => {
        const _ = () => {
            if (X.current) {
                const be = document.documentElement.clientHeight,
                    Ce = X.current.getBoundingClientRect().height,
                    B = be - Ce;
                ye(Math.max(B, K))
            }
        };
        return _(), window.addEventListener("resize", _), () => window.removeEventListener("resize", _)
    }, [w]);
    const xe = Gs({
            analyticsParams: T,
            currentAccount: t,
            planLoading: i,
            selectedTab: w,
            setPlanLoading: l,
            shouldSplitBetweenPersonalAndBusiness: ae,
            isEnterpriseEnabled: !1,
            billingDetails: C,
            variant: n,
            shouldShowMemoryUpsell: J,
            teamPlanVariant: m
        }),
        ve = sn({
            variant: n
        });
    return W && (q || k || L) ? e.jsx(Js, {
        handleClose: z,
        analyticsParams: T,
        currentAccount: t,
        setPlanLoading: l,
        planLoading: k ? M.PLUS : i,
        billingDetails: C,
        promoCode: W,
        promoMetadata: q,
        nonFooterContentRef: X,
        isEligible: Y,
        isPromoLoading: k,
        promoError: L
    }) : e.jsxs(oe, {
        size: "fullscreen",
        isOpen: !0,
        onClose: z,
        type: "success",
        className: "flex flex-col",
        removePopoverStyling: !0,
        children: [e.jsxs("div", {
            ref: X,
            children: [e.jsxs("div", {
                className: "relative grid grid-cols-[1fr_auto_1fr] px-6 py-4 md:pb-10 md:pt-[4.5rem]",
                children: [e.jsx("div", {}), e.jsxs("div", {
                    className: "my-1 flex flex-col items-center justify-center md:mb-0 md:mt-0",
                    children: [e.jsx("div", {
                        className: "text-2xl font-semibold md:text-3xl",
                        children: e.jsx(r, { ...an({
                                variant: n,
                                hasProSubscription: o
                            })
                        })
                    }), ve ? e.jsx("div", {
                        className: "mb-1 mt-3 text-token-text-secondary",
                        children: e.jsx(r, { ...ve
                        })
                    }) : null]
                }), e.jsx("button", {
                    className: "justify-self-end text-token-text-primary opacity-50 transition hover:opacity-75 md:absolute md:right-6 md:top-6",
                    onClick: () => {
                        z()
                    },
                    children: e.jsx(_t, {
                        className: Le({
                            "h-5 w-5": !j,
                            "icon-lg": j
                        })
                    })
                })]
            }), t.isPersonalAccount() && ae ? e.jsx("div", {
                className: "mb-3 flex justify-center md:mb-10",
                children: e.jsx("div", {
                    className: "w-[fit-content]",
                    children: e.jsx(ts, {
                        value: w,
                        onChange: ue
                    })
                })
            }) : null, e.jsx("div", {
                className: "flex flex-col justify-center gap-4 px-3 py-3 md:min-h-[30rem] md:flex-row md:gap-0 md:py-0",
                children: xe
            })]
        }), n !== "operator" ? e.jsxs("div", {
            className: "relative grid grid-cols-[1fr_auto_1fr]",
            style: {
                height: `${A}px`
            },
            children: [e.jsx("div", {}), e.jsxs("span", {
                className: "mb-12 mt-8 flex flex-col items-center justify-start gap-2 text-sm text-token-text-secondary md:mb-8 md:mt-8",
                children: [e.jsx(Rt, {}), e.jsxs("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [e.jsx(r, { ...ke.needMoreCapabilities
                    }), e.jsx("div", {
                        children: e.jsx(r, { ...ke.seeChatGptEnterprise,
                            values: {
                                link: _ => e.jsx(Q, {
                                    target: "_blank",
                                    to: Tt,
                                    onClick: () => {
                                        g.logEvent(f.accountPayClickSeeEnterpriseLinkFromModal), O.logEvent("chatgpt_account_payment_modal_enterprise_link_clicked")
                                    },
                                    className: "mx-1 underline",
                                    children: _
                                })
                            }
                        })
                    })]
                })]
            }), e.jsx("span", {
                className: "justify-self-end text-token-text-primary opacity-50 transition hover:opacity-75 md:absolute md:bottom-4 md:right-4",
                children: tn({
                    isCountrySelectorEnabled: le,
                    currentAccount: t,
                    selectedTab: w
                }) ? e.jsx(Za, {
                    value: v,
                    onValueChange: F,
                    displayNameFormatterFn: ce,
                    testId: "country-selector-in-pricing-modal"
                }) : null
            })]
        }) : null]
    })
}

function tn({
    isCountrySelectorEnabled: t,
    currentAccount: a,
    selectedTab: s
}) {
    return t ? !!(!a.hasPaidSubscription() || (a.isPlus() || a.isPro()) && s === "business" || a.isTeam()) : !1
}

function an({
    hasProSubscription: t,
    variant: a
}) {
    return a === "operator" ? ke.operatorModalTitle : t ? ke.proModalTitle : ke.modalTitle
}

function sn({
    variant: t
}) {
    return t === "operator" ? ke.operatorModalSubtitle : null
}
const ke = ie({
    modalTitle: {
        id: "AccountPaymentModal.modalTitle",
        defaultMessage: "Upgrade your plan"
    },
    proModalTitle: {
        id: "AccountPaymentModal.proModalTitle",
        defaultMessage: "Choose your plan"
    },
    operatorModalTitle: {
        id: "AccountPaymentModal.operatorModalTitle",
        defaultMessage: "Upgrade to ChatGPT Pro to try Operator"
    },
    operatorModalSubtitle: {
        id: "AccountPaymentModal.operatorModalSubtitle",
        defaultMessage: "Operator is currently only available to Pro users as an early research preview"
    },
    modalFooterCapabilities: {
        id: "AccountPaymentModal.modalFooterCapabilities",
        defaultMessage: "Need more capabilities? See <link> ChatGPT Enterprise </link>"
    },
    needMoreCapabilities: {
        id: "SdJWr7",
        defaultMessage: "Need more capabilities for your business?"
    },
    seeChatGptEnterprise: {
        id: "7C5fuF",
        defaultMessage: "See<link>ChatGPT Enterprise</link>"
    },
    promoNotEligibleMessage: {
        id: "AccountPaymentModal.promoNotEligibleMessage",
        defaultMessage: "Thanks for being a susbcriber. Since you already use ChatGPT Plus, you're not eligible for this offer."
    }
});
export {
    fn as A, Xs as G, Kt as P, gn as a, dn as b, $t as c, mn as g, Xe as h, pn as i
};
//# sourceMappingURL=bkoo24lt18b0xvbg.js.map