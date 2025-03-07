import {
    r as B,
    j as K
} from "./mna1wiucqak6lqzp.js";
import {
    R as v,
    z as D,
    S as w,
    V as x,
    W as L,
    X as P,
    Y as z,
    U as k,
    N as C,
    Z as E
} from "./lwme42j7zzyr3q7j.js";
import {
    fh as R,
    P as T,
    a as F,
    D as O,
    N as Z,
    fi as N,
    bj as U,
    B as V,
    z as f,
    w as j,
    x as G,
    l as I,
    fj as _,
    fk as W,
    fl as H,
    fm as X,
    d4 as Y,
    r as $
} from "./bq4rrqi54riy5k2e.js";
import {
    t as q
} from "./cxz91putlw7pmfk2.js";
const J = /```.*?\n([\s\S]+?)\n?```[^`]*$/gms;

function h() {
    return /Mac|iPod|iPhone|iPad/.test(window.navigator.platform)
}
const o = {
        Mod: "mod",
        Comma: ",",
        Space: "Space",
        " ": "Space",
        " ": "Space",
        ...v.Key
    },
    Q = {
        [o.Mod]: h() ? "⌘" : "Ctrl",
        [o.Meta]: h() ? "⌘" : "Win",
        [o.Comma]: ",",
        [o.Enter]: "⏎",
        [o.Escape]: "Esc",
        [o.ArrowUp]: "↑",
        [o.ArrowDown]: "↓",
        [o.ArrowLeft]: "←",
        [o.ArrowRight]: "→",
        [o.Backspace]: "⌫",
        [o.Delete]: "⌦",
        [o.Tab]: "⇥",
        [o.Control]: "Ctrl",
        [o.Shift]: "Shift"
    },
    ro = t => t.map(e => Q[e] ? ? e),
    a = $({
        newChat: {
            id: "keyboardActions.newChat",
            defaultMessage: "Open new chat"
        },
        focusPromptTextarea: {
            id: "keyboardActions.focusPromptTextarea",
            defaultMessage: "Focus chat input"
        },
        copyLastCodeBlock: {
            id: "keyboardActions.copyLastCodeBlock",
            defaultMessage: "Copy last code block"
        },
        copyLastResponse: {
            id: "keyboardActions.copyLastResponse",
            defaultMessage: "Copy last response"
        },
        toggleCustomInstructions: {
            id: "keyboardActions.toggleCustomInstructions",
            defaultMessage: "Set custom instructions"
        },
        navigationToggle: {
            id: "keyboardActions.navigationToggle",
            defaultMessage: "Toggle sidebar"
        },
        deleteChat: {
            id: "keyboardActions.deleteChat",
            defaultMessage: "Delete chat"
        },
        zoomIn: {
            id: "keyboardActions.zoomIn",
            defaultMessage: "Zoom in"
        },
        zoomOut: {
            id: "keyboardActions.zoomOut",
            defaultMessage: "Zoom out"
        },
        resetZoom: {
            id: "keyboardActions.resetZoom",
            defaultMessage: "Reset zoom"
        },
        toggleKeyboardActions: {
            id: "keyboardActions.toggleKeyboardActions",
            defaultMessage: "Show shortcuts"
        }
    }),
    co = new R,
    oo = ({
        ctx: t,
        resetThreadAction: e,
        clientThreadId: s,
        focusPromptTextareaAction: n,
        toaster: i,
        isFannyPackEnabled: d,
        isZoomEnabled: r,
        isElectronClient: u
    }) => {
        const p = u ? [
            [o.Mod, "n"]
        ] : [];
        return [{
            key: "newChat",
            action: e || U,
            actionMessageDescriptor: a.newChat,
            group: "Core",
            keyboardBinding: [o.Mod, o.Shift, "o"],
            altKeyboardBindings: d ? [...p] : [...p, [o.Mod, "k"]]
        }, {
            key: "focusPromptTextarea",
            action: n ? ? q,
            actionMessageDescriptor: a.focusPromptTextarea,
            group: "Chat",
            keyboardBinding: [o.Shift, o.Escape]
        }, {
            key: "copyLastCodeBlock",
            action: c => {
                if (s != null) {
                    const g = V.getConversationTurns(f(s));
                    for (let l = g.length - 1; l >= 0; l--) {
                        const {
                            messages: S
                        } = g[l], b = [...S.reduce((m, y) => y.err == null && y.message.author.role === j.Assistant && y.message.recipient === "all" ? m + (m ? `

` : "") + G(y.message) : m, "").matchAll(J)], M = b.length ? b[b.length - 1][1] : null;
                        if (M != null) {
                            P(M, i, c).then(() => {
                                i.success("Copied code block to clipboard")
                            });
                            break
                        }
                    }
                }
            },
            actionMessageDescriptor: a.copyLastCodeBlock,
            group: "Chat",
            keyboardBinding: [o.Mod, o.Shift, ";"],
            altKeyboardBindings: [
                [o.Mod, o.Shift, ":"]
            ]
        }, {
            key: "copyLastResponse",
            action: c => {
                s != null && z(s, i, c, "keyboard").then(() => {
                    i.success("Last response copied to clipboard")
                })
            },
            actionMessageDescriptor: a.copyLastResponse,
            group: "Chat",
            keyboardBinding: [o.Mod, o.Shift, "c"]
        }, {
            key: "toggleCustomInstructions",
            action: () => k.toggleModal(C.UserContext),
            actionMessageDescriptor: a.toggleCustomInstructions,
            group: "Settings",
            keyboardBinding: [o.Mod, o.Shift, "i"]
        }, {
            key: "navigationToggle",
            action: () => {
                k.toggleNavCollapsed()
            },
            actionMessageDescriptor: a.navigationToggle,
            group: "Core",
            keyboardBinding: [o.Mod, o.Shift, "s"]
        }, {
            key: "deleteChat",
            action: () => {
                if (s) {
                    const c = f(s),
                        g = I(s);
                    c && g && _(t, ({
                        closeModal: l
                    }) => K.jsx(E, {
                        thread: c,
                        serverThreadId: g,
                        closeModal: l
                    }))
                }
            },
            actionMessageDescriptor: a.deleteChat,
            group: "Chat",
            keyboardBinding: [o.Mod, o.Shift, o.Backspace],
            altKeyboardBindings: [
                [o.Mod, o.Shift, o.Delete]
            ]
        }, {
            key: "zoomIn",
            enabled: r,
            action: () => W(),
            actionMessageDescriptor: a.zoomIn,
            group: "Chat",
            keyboardBinding: [o.Mod, "+"],
            altKeyboardBindings: [
                [o.Mod, "="]
            ]
        }, {
            key: "zoomOut",
            enabled: r,
            action: () => H(),
            actionMessageDescriptor: a.zoomOut,
            group: "Chat",
            keyboardBinding: [o.Mod, "-"]
        }, {
            key: "resetZoom",
            enabled: r,
            action: () => X(),
            actionMessageDescriptor: a.resetZoom,
            group: "Chat",
            keyboardBinding: [o.Mod, "0"]
        }, {
            key: "toggleKeyboardActions",
            action: () => k.toggleModal(C.KeyboardActions),
            actionMessageDescriptor: a.toggleKeyboardActions,
            group: "Settings",
            keyboardBinding: [o.Mod, "/"]
        }]
    },
    A = t => w(t, e => {
        T.logEvent(F.keyboardShortcut, {
            keyboardActionKey: e.key
        }), O.addAction("chatgpt_keyboard_shortcut", {
            keyboardActionKey: e.key
        })
    }, {
        enabled: !0
    }),
    eo = ({
        resetThreadAction: t,
        clientThreadId: e,
        focusPromptTextareaAction: s
    } = {}) => {
        const n = Z(),
            {
                isFannyPackEnabled: i
            } = x(),
            d = L(),
            r = Y,
            u = N();
        return B.useMemo(() => oo({
            ctx: u,
            resetThreadAction: t,
            clientThreadId: e,
            focusPromptTextareaAction: s,
            toaster: n,
            isElectronClient: d,
            isFannyPackEnabled: i,
            isZoomEnabled: r
        }).filter(({
            enabled: c = !0
        }) => c), [u, t, e, s, n, d, i, r])
    },
    go = ({
        resetThreadAction: t,
        clientThreadId: e,
        focusPromptTextareaAction: s
    }) => {
        const n = eo({
                resetThreadAction: t,
                clientThreadId: e,
                focusPromptTextareaAction: s
            }),
            d = D(r => r.isVoiceActive) ? [] : n;
        A(d)
    },
    lo = ({
        setSelectedVoiceIndex: t,
        prevVoiceIndex: e,
        nextVoiceIndex: s
    }) => {
        const n = [{
            key: "selectPrevVoice",
            action: () => {
                t(e)
            },
            actionMessageDescriptor: {
                defaultMessage: "Select previous voice"
            },
            group: "Chat",
            keyboardBinding: [o.ArrowLeft]
        }, {
            key: "selectNextVoice",
            action: () => {
                t(s)
            },
            actionMessageDescriptor: {
                defaultMessage: "Select next voice"
            },
            group: "Chat",
            keyboardBinding: [o.ArrowRight]
        }];
        A(n)
    };
export {
    co as G, o as K, eo as a, lo as b, ro as g, h as i, go as u
};
//# sourceMappingURL=fl41y0is7h6g0gxe.js.map