import {
    r as i,
    j as e,
    av as x
} from "./mna1wiucqak6lqzp.js";
import {
    $ as p,
    a0 as h,
    p as g,
    a1 as y
} from "./lwme42j7zzyr3q7j.js";
import {
    bu as j,
    d as v
} from "./bq4rrqi54riy5k2e.js";

function z({
    isFirstParty: s,
    gizmoId: t,
    src: a,
    alt: o,
    className: r,
    showLoading: n
}) {
    const l = p(t),
        [d, c] = i.useState(!1),
        [u, m] = i.useState(!0);
    if (d || !a) {
        const f = s || l;
        return e.jsx("div", {
            className: r,
            children: e.jsx("div", {
                className: "gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-token-main-surface-primary text-token-text-primary",
                children: e.jsx(x.div, {
                    className: "flex h-full w-full items-center justify-center",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            duration: .1
                        }
                    },
                    exit: {
                        opacity: 0
                    },
                    children: f ? e.jsx(j, {
                        className: "h-2/3 w-2/3"
                    }) : e.jsx(h, {
                        className: "h-2/3 w-2/3 text-gray-400"
                    })
                })
            })
        })
    }
    return e.jsx("div", {
        className: r,
        children: e.jsx("div", {
            className: v("gizmo-shadow-stroke overflow-hidden rounded-full", n && u && "animate-pulse"),
            children: e.jsx("img", {
                src: a,
                className: "h-full w-full bg-token-main-surface-secondary",
                alt: o ? ? "GPT Icon",
                width: 80,
                height: 80,
                onError: () => c(!0),
                onLoad: () => m(!1)
            })
        })
    })
}

function b({
    gizmoId: s,
    className: t
}) {
    const {
        data: a
    } = g(s);
    return e.jsx(z, {
        src: a ? .gizmo.display.profile_picture_url,
        gizmoId: s,
        isFirstParty: a ? .gizmo.tags ? .includes(y.FirstParty) ? ? !1,
        className: t
    })
}
export {
    z as G, b as a
};
//# sourceMappingURL=nmr5d79kmws977p2.js.map