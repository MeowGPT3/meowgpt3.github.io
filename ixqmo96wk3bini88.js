import {
    j as e,
    M as d
} from "./mna1wiucqak6lqzp.js";
import {
    ao as m,
    ap as l,
    aq as c
} from "./lwme42j7zzyr3q7j.js";
import {
    bs as t,
    ci as u,
    d as x
} from "./bq4rrqi54riy5k2e.js";
const g = t.textarea `w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`,
    j = t.div `mb-6`,
    v = t.input `w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`;

function h({
    label: r,
    description: s,
    collapsed: o,
    onClick: a,
    htmlFor: n
}) {
    const i = e.jsx("label", {
        htmlFor: n,
        className: "block font-semibold text-token-text-primary",
        children: r
    });
    return e.jsxs("div", {
        className: "mb-1.5 flex items-center",
        onClick: a,
        children: [o !== void 0 && (o ? e.jsx(l, {
            className: "icon-sm"
        }) : e.jsx(m, {
            className: "icon-sm"
        })), s ? e.jsx(u, {
            label: s,
            sideOffset: 4,
            side: "top",
            delayDuration: 0,
            children: i
        }) : e.jsx(e.Fragment, {
            children: i
        })]
    })
}

function y({
    actionTool: r,
    onShowActionsEditor: s,
    isDisabled: o,
    className: a
}) {
    const n = "metadata" in r ? r.metadata ? .domain : void 0;
    return e.jsxs("div", {
        className: x("flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer", o ? "bg-token-main-surface-secondary" : "", a),
        onClick: s,
        children: [e.jsx("div", {
            className: "h-9 grow px-3 py-2",
            children: n ? ? e.jsx("span", {
                className: "text-red-500",
                children: e.jsx(d, {
                    id: "TJYXrY",
                    defaultMessage: "Invalid action"
                })
            })
        }), e.jsx("div", {
            className: "w-px bg-token-border-medium"
        }), e.jsx("button", {
            disabled: o,
            className: "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",
            children: e.jsx(c, {
                className: "icon-sm"
            })
        })]
    })
}
export {
    j as F, y as G, h as a, v as b, g as c
};
//# sourceMappingURL=ixqmo96wk3bini88.js.map