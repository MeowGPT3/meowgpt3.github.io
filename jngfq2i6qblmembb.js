import {
    g as ee,
    r as y,
    d as se,
    j as e,
    M as d,
    av as te,
    c as C,
    a as I,
    u as re,
    b as ae
} from "./mna1wiucqak6lqzp.js";
import {
    kR as D,
    kS as oe,
    kT as ne,
    hH as ie,
    kU as le,
    kV as T,
    kW as de,
    bl as me,
    kX as ce,
    kY as ue,
    kZ as ge,
    eX as M,
    k_ as z,
    d6 as fe,
    kp as xe,
    ao as he
} from "./lwme42j7zzyr3q7j.js";
import {
    ej as Me,
    de as ye,
    df as je,
    bS as be,
    gx as pe,
    gy as ve,
    i as Ce,
    eF as we,
    P as f,
    a as x,
    d as S,
    ci as P,
    N as A,
    b_ as W,
    bi as $,
    bk as U,
    Z as N,
    bs as ke,
    bY as v
} from "./bq4rrqi54riy5k2e.js";
import {
    G as Se
} from "./nmr5d79kmws977p2.js";
var _e = Me,
    Re = ye,
    Ne = "[object RegExp]";

function Ee(s) {
    return Re(s) && _e(s) == Ne
}
var Te = Ee,
    Ue = Te,
    Oe = be,
    O = je,
    F = O && O.isRegExp,
    Fe = F ? Oe(F) : Ue,
    Ge = Fe,
    Be = pe,
    Le = Be("length"),
    Ie = Le,
    q = "\\ud800-\\udfff",
    De = "\\u0300-\\u036f",
    ze = "\\ufe20-\\ufe2f",
    Pe = "\\u20d0-\\u20ff",
    Ae = De + ze + Pe,
    We = "\\ufe0e\\ufe0f",
    $e = "[" + q + "]",
    _ = "[" + Ae + "]",
    R = "\\ud83c[\\udffb-\\udfff]",
    qe = "(?:" + _ + "|" + R + ")",
    H = "[^" + q + "]",
    Y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Z = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    He = "\\u200d",
    Q = qe + "?",
    K = "[" + We + "]?",
    Ye = "(?:" + He + "(?:" + [H, Y, Z].join("|") + ")" + K + Q + ")*",
    Ze = K + Q + Ye,
    Qe = "(?:" + [H + _ + "?", _, Y, Z, $e].join("|") + ")",
    G = RegExp(R + "(?=" + R + ")|" + Qe + Ze, "g");

function Ke(s) {
    for (var t = G.lastIndex = 0; G.test(s);) ++t;
    return t
}
var Ve = Ke,
    Je = Ie,
    Xe = D,
    es = Ve;

function ss(s) {
    return Xe(s) ? es(s) : Je(s)
}
var ts = ss,
    B = ve,
    rs = oe,
    as = D,
    os = Ce,
    ns = Ge,
    is = ts,
    ls = ne,
    ds = ie,
    L = we,
    ms = 30,
    cs = "...",
    us = /\w*$/;

function gs(s, t) {
    var i = ms,
        o = cs;
    if (os(t)) {
        var r = "separator" in t ? t.separator : r;
        i = "length" in t ? ds(t.length) : i, o = "omission" in t ? B(t.omission) : o
    }
    s = L(s);
    var a = s.length;
    if (as(s)) {
        var n = ls(s);
        a = n.length
    }
    if (i >= a) return s;
    var m = i - is(o);
    if (m < 1) return o;
    var l = n ? rs(n, 0, m).join("") : s.slice(0, m);
    if (r === void 0) return l + o;
    if (n && (m += l.length - m), ns(r)) {
        if (s.slice(m).search(r)) {
            var u, g = l;
            for (r.global || (r = RegExp(r.source, L(us.exec(r)) + "g")), r.lastIndex = 0; u = r.exec(g);) var j = u.index;
            l = l.slice(0, j === void 0 ? m : j)
        }
    } else if (s.indexOf(B(r), m) != m) {
        var h = l.lastIndexOf(r);
        h > -1 && (l = l.slice(0, h))
    }
    return l + o
}
var fs = gs;
const xs = ee(fs),
    hs = s => y.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...s
    }, y.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1ZM6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75ZM6.75 6C6.75 5.58579 6.41421 5.25 6 5.25C5.58579 5.25 5.25 5.58579 5.25 6V8C5.25 8.41421 5.58579 8.75 6 8.75C6.41421 8.75 6.75 8.41421 6.75 8V6Z",
        fill: "currentColor"
    })),
    Ms = 91,
    E = 100;

function ys(s) {
    return s < E ? "bg-[#fcf6e0] text-yellow-500 dark:bg-yellow-600 dark:text-yellow-100" : "bg-[rgba(229,76,66,0.16)] text-[#DC2626] dark:bg-[rgba(202,58,49,0.16)] dark:text-[#DC2626]"
}

function V(s) {
    return de() && s != null && s >= Ms
}

function js({
    memoryFullPct: s,
    className: t,
    children: i,
    showInfoLabel: o
}) {
    return V(s) ? e.jsx("div", {
        className: S("rounded-lg border border-token-border-light p-1 text-sm", t),
        children: e.jsxs(te.div, {
            className: S("flex items-center overflow-hidden whitespace-nowrap rounded px-2 py-1.5", ys(s)),
            initial: {
                width: 0
            },
            animate: {
                width: `${s}%`
            },
            transition: {
                duration: .5
            },
            children: [e.jsx(d, {
                id: "6D2etG",
                defaultMessage: "{memoryFullPct}% full",
                values: {
                    memoryFullPct: s
                }
            }), i, o && e.jsx(P, {
                label: s < E ? e.jsx(d, {
                    id: "dlUy+j",
                    defaultMessage: "Memory is almost full. Once memory is full, new memories won't be created. You can forget existing memories to make space."
                }) : e.jsx(d, {
                    id: "yeQ/cM",
                    defaultMessage: "Memory is full. New memories won't be created. You can forget existing memories to make space."
                }),
                children: e.jsx(hs, {
                    className: "icon-sm ml-1 text-token-text-secondary"
                })
            })]
        })
    }) : null
}

function bs({
    memoryFullPct: s,
    className: t
}) {
    const i = V(s),
        o = le(),
        r = se();
    if (!i) return null;
    o && f.logEventWithStatsig(x.memoryFullWarningUpsellShown, "chatgpt_memory_full_warning_upsell_shown_memory_modal");
    const a = e.jsx("a", {
        href: "#",
        className: "cursor-pointer underline",
        onClick: n => {
            n.preventDefault(), f.logEventWithStatsig(x.memoryFullWarningUpsellClicked, "chatgpt_memory_full_warning_upsell_clicked_memory_modal"), me(r, "MemoryUsageWarning Memory Modal Upsell")
        },
        children: e.jsx(d, {
            id: "djYoOr",
            defaultMessage: "ChatGPT Plus"
        })
    });
    return e.jsxs("div", {
        className: S("flex flex-col gap-2", t),
        children: [e.jsx(js, {
            memoryFullPct: s
        }), e.jsx("div", {
            className: "pl-3 text-sm text-token-text-secondary",
            children: s < E ? o ? e.jsx(d, {
                id: "Nh1AJk",
                defaultMessage: "<strong>Memory almost full</strong>. Once memory is full, new memories won't be created. Forget existing memories to make space, or get 4x more space with {upsellLink}.",
                values: {
                    strong: n => e.jsx("strong", {
                        children: n
                    }),
                    upsellLink: a
                }
            }) : e.jsx(d, {
                id: "CLBbS6",
                defaultMessage: "<strong>Memory almost full</strong>. Once memory is full, new memories won't be created. You can forget existing memories to make space. <a>Learn more</a>.",
                values: {
                    strong: n => e.jsx("strong", {
                        children: n
                    }),
                    a: n => e.jsx("a", {
                        href: T,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "underline",
                        children: n
                    })
                }
            }) : o ? e.jsx(d, {
                id: "r0KIF1",
                defaultMessage: "<strong>Memory is full</strong>. New memories won't be created. Forget existing memories to make space, or get 4x more space with {upsellLink}.",
                values: {
                    strong: n => e.jsx("strong", {
                        children: n
                    }),
                    upsellLink: a
                }
            }) : e.jsx(d, {
                id: "zJUX0Z",
                defaultMessage: "<strong>Memory is full</strong>. New memories won't be created. You can forget existing memories to make space. <a>Learn more</a>.",
                values: {
                    strong: n => e.jsx("strong", {
                        children: n
                    }),
                    a: n => e.jsx("a", {
                        href: T,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "underline",
                        children: n
                    })
                }
            })
        })]
    })
}

function ps({
    description: s,
    onClose: t,
    onConfirm: i
}) {
    const o = C();
    return e.jsx($, {
        isOpen: !0,
        onClose: t,
        type: "success",
        title: o.formatMessage({
            id: "MemoriesModal.resetModalTitle",
            defaultMessage: "Are you sure?"
        }),
        description: s,
        primaryButton: e.jsx(U.Button, {
            title: o.formatMessage({
                id: "MemoriesModal.resetModalConfirm",
                defaultMessage: "Clear memory"
            }),
            color: "danger",
            onClick: i,
            "data-testid": "confirm-reset-memories-button"
        }),
        secondaryButton: e.jsx(U.Button, {
            title: o.formatMessage({
                id: "MemoriesModal.resetModalCancel",
                defaultMessage: "Cancel"
            }),
            color: "secondary",
            onClick: t
        })
    })
}

function vs({
    onReset: s,
    gizmoId: t,
    memoryName: i
}) {
    const [o, r] = y.useState(!1), a = C(), n = A(), m = async () => {
        f.logEvent(x.memorySettingsResetButtonConfirmed);
        try {
            await N.clearUserMemory(t), n.success(a.formatMessage({
                id: "ResetMemoriesButton.resetSuccess",
                defaultMessage: "Memory cleared."
            })), s ? .(), r(!1)
        } catch {
            n.danger(a.formatMessage({
                id: "ResetMemoriesButton.resetFailed",
                defaultMessage: "Failed to clear memory."
            }))
        }
    };
    return e.jsxs(e.Fragment, {
        children: [e.jsx(W, {
            color: "danger-outline",
            onClick: () => {
                f.logEvent(x.memorySettingsResetButtonClicked), r(!0)
            },
            "data-testid": "reset-memories-button",
            children: t ? e.jsx(d, {
                id: "ResetMemoriesButton.resetGizmo",
                defaultMessage: "Clear this GPT's memory"
            }) : e.jsx(d, {
                id: "ResetMemoriesButton.resetChatGPT",
                defaultMessage: "Clear ChatGPT's memory"
            })
        }), o && e.jsx(ps, {
            description: a.formatMessage({
                id: "MemoriesModal.resetGizmoModalDescription",
                defaultMessage: "{name} will forget everything it has remembered from your chats. This cannot be undone."
            }, {
                name: i
            }),
            onClose: () => r(!1),
            onConfirm: m
        })]
    })
}

function Cs({
    gizmo: s,
    memory: t
}) {
    const i = C(),
        o = A(),
        r = I(),
        {
            mutate: a,
            isPending: n
        } = ae({
            mutationFn: g => N.deleteMemory(g, s ? .id),
            onSettled: () => {
                r.invalidateQueries({
                    queryKey: z(s ? .id)
                })
            },
            onError: () => {
                o.danger(i.formatMessage({
                    id: "MemoriesModal.deleteFailed",
                    defaultMessage: "Failed to forget memory"
                }), {
                    id: "memoryDeleteFailed"
                })
            }
        }),
        [m, l] = y.useState(!1),
        u = i.formatMessage({
            id: "z2CNgB",
            defaultMessage: "Forget"
        });
    return e.jsxs(e.Fragment, {
        children: [e.jsxs(M.Row, {
            disabled: n,
            children: [e.jsx(M.Cell, {
                children: e.jsx("div", {
                    className: "whitespace-pre-wrap py-2",
                    children: t.content
                })
            }), e.jsx(M.Cell, {
                textAlign: "right",
                children: e.jsx(M.Actions, {
                    children: e.jsx("button", {
                        onClick: () => {
                            f.logEvent(x.memoryModalMemoryDeleteClicked), l(!0)
                        },
                        "aria-label": u,
                        className: "text-token-text-tertiary hover:text-token-text-secondary",
                        children: e.jsx(P, {
                            className: "leading-none",
                            label: u,
                            sideOffset: 4,
                            side: "top",
                            children: e.jsx(fe, {
                                className: "icon-sm"
                            })
                        })
                    })
                })
            })]
        }), m && e.jsx(xe, {
            isOpen: !0,
            primaryButtonColor: "danger",
            title: u,
            confirmText: i.formatMessage({
                id: "fCn0ar",
                defaultMessage: "Forget"
            }),
            onConfirm: () => {
                f.logEvent(x.memoryModalMemoryDeleteConfirmed), a(t.id), l(!1)
            },
            onClose: () => {
                l(!1)
            },
            children: e.jsx(d, {
                id: "pZ/TCe",
                defaultMessage: '{name} will forget "{title}". This cannot be undone. <link>Learn more</link>',
                values: {
                    name: s ? .name ? ? "ChatGPT",
                    title: e.jsx("strong", {
                        children: xs(t.content, {
                            length: 130,
                            omission: "..."
                        })
                    }),
                    link: g => e.jsx("a", {
                        href: "https://help.openai.com/en/articles/8590148-memory-faq#h_41527f643d",
                        target: "_blank",
                        className: "underline",
                        rel: "noreferrer",
                        children: g
                    })
                }
            })
        })]
    })
}

function ws({
    selectedGizmoId: s,
    onSelect: t,
    items: i
}) {
    const o = i.find(a => a.id === s);

    function r(a) {
        return e.jsx(Se, {
            isFirstParty: a.id === void 0,
            src: a.iconUrl ? ? null,
            className: "icon-md"
        })
    }
    return e.jsx("div", {
        className: "mb-2 inline-flex rounded-md border border-token-border-medium",
        children: e.jsxs(v.Root, {
            children: [e.jsx(v.Trigger, {
                children: e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [o ? e.jsxs(e.Fragment, {
                        children: [r(o), e.jsx("span", {
                            className: "text-token-text-primary",
                            children: o.name
                        })]
                    }) : e.jsx(d, {
                        id: "MemoriesModal.unknownGizmo",
                        defaultMessage: "Unknown GPT"
                    }), e.jsx(he, {
                        className: "icon-sm text-token-text-tertiary"
                    })]
                })
            }), e.jsx(v.Portal, {
                children: e.jsx(v.Content, {
                    children: i.map(a => e.jsxs(v.Item, {
                        className: "flex items-center gap-3",
                        onClick: () => {
                            t(a.id)
                        },
                        children: [r(a), a.name]
                    }, a.id))
                })
            })]
        })
    })
}
const k = ke.div `flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-light`;

function ks({
    onClose: s,
    initialGizmoId: t
}) {
    const i = C(),
        o = I(),
        r = ce(),
        [a, n] = y.useState(t),
        m = ue();
    y.useEffect(() => {
        f.logEvent(x.memoryModalShown)
    }, []);
    const {
        data: l,
        isLoading: u,
        isError: g,
        refetch: j
    } = ge(a, !0, r), h = l ? .memories, {
        data: J,
        refetch: X
    } = re({
        queryKey: ["memory_gizmos"],
        queryFn: () => N.getGizmosWithMemory(),
        refetchOnMount: "always"
    }), w = [{
        id: void 0,
        name: "ChatGPT",
        iconUrl: null
    }, ...J ? .items.map(({
        gizmo: c
    }) => ({
        id: c.id,
        name: c.display.name,
        iconUrl: c.display.profile_picture_url
    })) ? ? []], b = w.find(c => c.id === a);
    let p;
    return u ? p = e.jsx(k, {
        children: e.jsx(d, {
            id: "MemoriesModal.loading",
            defaultMessage: "Loading..."
        })
    }) : g ? p = e.jsx(k, {
        children: e.jsxs("div", {
            className: "max-w-sm text-center",
            children: [e.jsx("div", {
                className: "mb-4 text-red-500",
                children: e.jsx(d, {
                    id: "MemoriesModal.somethingWentWrong",
                    defaultMessage: "Something went wrong..."
                })
            }), e.jsx("div", {
                children: e.jsx(W, {
                    color: "secondary",
                    onClick: () => {
                        j()
                    },
                    children: e.jsx(d, {
                        id: "MemoriesModal.retry",
                        defaultMessage: "Retry"
                    })
                })
            })]
        })
    }) : !h || h.length === 0 ? p = e.jsx(k, {
        children: e.jsx("div", {
            className: "max-w-sm text-center",
            children: r ? e.jsx(d, {
                id: "MemoriesModal.noMemories.1",
                defaultMessage: "As you chat with {name}, the details and preferences it remembers will be shown here.",
                values: {
                    name: b ? .name ? ? "ChatGPT"
                }
            }) : e.jsx(d, {
                id: "MemoriesModal.noMemoriesAndDisabled",
                defaultMessage: "Memory is disabled. ChatGPT won't use or create memories."
            })
        })
    }) : p = e.jsx(M.Root, {
        className: "h-full",
        size: "compact",
        bordered: !0,
        children: e.jsx(M.Body, {
            children: h.map(c => e.jsx(Cs, {
                gizmo: b ? {
                    id: b.id,
                    name: b.name
                } : void 0,
                memory: c
            }, c.id))
        })
    }), e.jsxs($, {
        isOpen: !0,
        onClose: s,
        size: "custom",
        className: "max-w-5xl",
        type: "success",
        title: i.formatMessage({
            id: "MemoriesModal.title",
            defaultMessage: "Memory"
        }),
        showCloseButton: !0,
        children: [m && w.length > 1 && e.jsx("div", {
            className: "mb-4",
            children: e.jsx(ws, {
                selectedGizmoId: a,
                items: w,
                onSelect: c => {
                    o.invalidateQueries({
                        queryKey: z(c)
                    }), n(c)
                }
            })
        }), e.jsx(bs, {
            memoryFullPct: l ? .memoryFullPct,
            className: "mb-5"
        }), e.jsx("div", {
            className: "h-[24rem]",
            children: p
        }), e.jsx("div", {
            className: "mt-5 flex justify-end",
            children: e.jsx(vs, {
                onReset: () => {
                    j(), X(), a && n(void 0)
                },
                gizmoId: a,
                memoryName: b ? .name ? ? "ChatGPT"
            })
        })]
    })
}
const Es = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ks
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    js as M, ks as a, Es as b, V as u
};
//# sourceMappingURL=jngfq2i6qblmembb.js.map