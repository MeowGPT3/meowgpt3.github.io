import {
    c as x,
    r as m,
    j as e,
    M as h
} from "./mna1wiucqak6lqzp.js";
import {
    z as p,
    N as l,
    U as f
} from "./lwme42j7zzyr3q7j.js";
import {
    a as u,
    g
} from "./fl41y0is7h6g0gxe.js";
import {
    bi as j,
    d as r,
    r as b
} from "./bq4rrqi54riy5k2e.js";
const k = () => {
        const s = x(),
            t = p(a => a.activeModals.has(l.KeyboardActions)),
            i = () => {
                f.closeModal(l.KeyboardActions)
            },
            o = u(),
            c = m.useMemo(() => {
                const a = Math.ceil(o.length / 2);
                return [o.slice(0, a), o.slice(a)]
            }, [o]);
        return e.jsx(j, {
            isOpen: t,
            onClose: i,
            type: "success",
            size: "custom",
            className: "md:max-w-[672px] lg:max-w-[796px] xl:max-w-4xl",
            showCloseButton: !0,
            title: s.formatMessage(v.keyboardActionsModalTitle),
            children: e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: "grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-9",
                    children: c.map((a, d) => e.jsx("div", {
                        className: "flex flex-col overflow-hidden",
                        children: a.map(n => e.jsx(y, {
                            action: n
                        }, n.key))
                    }, `col-${d}`))
                })
            })
        })
    },
    y = ({
        action: s
    }) => e.jsxs("div", {
        className: "flex items-center justify-between overflow-hidden text-token-text-primary",
        children: [e.jsx("div", {
            className: "flex flex-shrink items-center overflow-hidden text-sm",
            children: e.jsx("div", {
                className: "truncate",
                children: e.jsx(h, { ...s.actionMessageDescriptor
                })
            })
        }), e.jsx("div", {
            className: "ml-3 flex flex-row gap-2",
            children: g(s.keyboardBinding).map((t, i) => e.jsx(M, {
                keyName: t
            }, `${s.key}-${i}`))
        })]
    }),
    M = ({
        keyName: s
    }) => {
        const t = r("my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary");
        return s.length > 1 ? s.length > 3 ? e.jsx("div", {
            className: r(t, "min-w-[50px]"),
            children: e.jsx("span", {
                className: "text-xs",
                children: s
            })
        }) : e.jsx("div", {
            className: r(t, "min-w-[32px]"),
            children: e.jsx("span", {
                className: "text-xs",
                children: s
            })
        }) : e.jsx("div", {
            className: r(t, "min-w-[32px]"),
            children: e.jsx("span", {
                className: "text-sm",
                children: s
            })
        })
    },
    v = b({
        keyboardActionsModalTitle: {
            id: "KeyboardActionsModal.keyboardActionsModalTitle",
            defaultMessage: "Keyboard shortcuts"
        }
    });
export {
    k as K
};
//# sourceMappingURL=hexf8t3k7mz2tojm.js.map