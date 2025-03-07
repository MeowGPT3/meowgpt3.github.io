import {
    r as o,
    j as e,
    M as n
} from "./mna1wiucqak6lqzp.js";
import {
    N as p,
    k as g,
    dt as h,
    bY as s,
    eG as C,
    aa as m
} from "./bq4rrqi54riy5k2e.js";
import {
    bX as x,
    dR as M,
    X as f,
    dS as S,
    U as i,
    N as l,
    dT as j,
    dU as v
} from "./lwme42j7zzyr3q7j.js";
const L = t => o.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.5 4.91421L4.29289 6.12132C4.10536 6.30886 4 6.56321 4 6.82843V16.9472L5.5 14.6972V4.91421ZM7.03518 16L5.03518 19H18.9648L16.9648 16H7.03518ZM18.5 14.6972L20 16.9472V6.43675C20 6.13997 19.8682 5.85852 19.6402 5.66853L18.5 4.71838V14.6972ZM16.5 14V4H7.5V14H16.5ZM4.70711 2.87868C5.26972 2.31607 6.03278 2 6.82843 2H17.2759C17.9777 2 18.6573 2.24605 19.1965 2.69534L20.9206 4.13209C21.6045 4.70207 22 5.54641 22 6.43675V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6.82843C2 6.03278 2.31607 5.26972 2.87868 4.70711L4.70711 2.87868Z",
        fill: "currentColor"
    }), o.createElement("path", {
        d: "M12.6297 5.93615C12.6974 5.57624 12.3408 5.34363 12.1528 5.62504L9.56654 9.49667C9.41387 9.72521 9.54081 10.0776 9.7758 10.0776H11.7435L11.3703 12.0639C11.3026 12.4238 11.6592 12.6564 11.8472 12.375L14.4335 8.50333C14.5861 8.27479 14.4592 7.92238 14.2242 7.92238H12.2565L12.6297 5.93615Z",
        fill: "currentColor"
    })),
    b = L;

function y() {
    const t = x(),
        r = p(),
        {
            isUnauthenticated: a
        } = g(),
        d = m("3376455464") ? .value,
        {
            openSettings: c
        } = M();
    return e.jsx(e.Fragment, {
        children: e.jsxs(h, {
            triggerButton: e.jsx("button", {
                className: "flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",
                children: "?"
            }),
            children: [t && !a && t.email && e.jsx(s.Item, {
                onClick: u => {
                    f(t.id, r, u).then(() => {
                        r.success("Copied your User ID to clipboard")
                    })
                },
                icon: C,
                children: t.email
            }), e.jsx(S, {}), e.jsx(s.Item, {
                icon: b,
                onClick: () => {
                    i.openModal(l.KeyboardActions)
                },
                children: e.jsx(n, {
                    id: "thread.keyboardShortcutsMenu",
                    defaultMessage: "Keyboard shortcuts"
                })
            }), d && e.jsx(s.Item, {
                icon: j,
                onClick: () => {
                    i.openModal(l.ReportConversation)
                },
                children: e.jsx(n, {
                    id: "thread.report",
                    defaultMessage: "Report Illegal Content"
                })
            }), a && e.jsx(s.Item, {
                onClick: () => c(),
                icon: v,
                children: e.jsx(n, {
                    id: "helpMenu.items.settings",
                    defaultMessage: "Settings"
                })
            })]
        })
    })
}
export {
    y as
    default
};
//# sourceMappingURL=etush0ni5l4oh0km.js.map