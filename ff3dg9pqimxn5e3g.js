import {
    c as M,
    r as f,
    j as e,
    M as o
} from "./mna1wiucqak6lqzp.js";
import {
    bs as y,
    ci as j,
    eG as b,
    d1 as h,
    r as B
} from "./bq4rrqi54riy5k2e.js";
import {
    v as I
} from "./lwme42j7zzyr3q7j.js";
const m = B({
    copy: {
        id: "CopyButton.copy",
        defaultMessage: "Copy"
    },
    copied: {
        id: "CopyButton.copied",
        defaultMessage: "Copied"
    }
});

function F({
    buttonText: a,
    shouldChangeText: C = !0,
    iconClassName: i = "icon-sm",
    onCopy: d,
    className: l,
    iconOnly: p = !1
}) {
    const r = M(),
        [t, c] = f.useState(!1),
        n = I(),
        x = f.useCallback(u => {
            u.stopPropagation(), d(u), c(!0), setTimeout(() => {
                n() && c(!1)
            }, 2e3)
        }, [n, d]);
    let s = a;
    return C && t ? s = e.jsx(o, { ...m.copied
    }) : a === !0 && (s = e.jsx(o, { ...m.copy
    })), e.jsxs(e.Fragment, {
        children: [!t && e.jsx(j, {
            label: e.jsx(o, {
                id: "CopyButton.copyTooltip",
                defaultMessage: "Copy"
            }),
            sideOffset: 0,
            children: e.jsxs(g, {
                onClick: x,
                className: l,
                "aria-label": r.formatMessage({
                    id: "ywKsIl",
                    defaultMessage: "Copy"
                }),
                children: [e.jsx(b, {
                    className: i
                }), !p && s]
            })
        }), t && e.jsxs(g, {
            className: l,
            "aria-label": r.formatMessage({
                id: "I3L53c",
                defaultMessage: "Copied"
            }),
            children: [e.jsx(h, {
                className: i
            }), !p && s]
        })]
    })
}
const g = y.button `flex gap-1 items-center select-none`;
export {
    F as C
};
//# sourceMappingURL=ff3dg9pqimxn5e3g.js.map