import {
    r as u,
    j as a,
    av as p
} from "./mna1wiucqak6lqzp.js";
import {
    bs as f,
    d as h
} from "./bq4rrqi54riy5k2e.js";

function v({
    lines: t = 1,
    variance: l = 0,
    size: s = "base",
    width: i = 50,
    widthVariance: r = 50,
    className: n
}) {
    const [e] = u.useState(Array.from({
        length: t + Math.random() * (l ? ? 0)
    }, () => i + Math.random() * r));
    let o = "";
    switch (s) {
        case "sm":
            o = "h-3 mb-2 mt-0.5";
            break;
        case "base":
            o = "h-4 my-2";
            break;
        case "lg":
            o = "h-5 my-2";
            break
    }
    return a.jsx(a.Fragment, {
        children: e.map((c, d) => a.jsx("div", {
            className: h("relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary", o, n),
            style: {
                width: `${c}%`
            },
            children: a.jsx(p.div, {
                className: "absolute left-0 top-0 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-50 dark:via-white/5",
                animate: {
                    x: ["-100%", "100%"],
                    opacity: [1, 0, 1],
                    transition: {
                        repeat: 1 / 0,
                        repeatType: "loop",
                        duration: 1.5 + d
                    }
                }
            })
        }, d))
    })
}

function j({
    lines: t = 1,
    indexOffset: l = 0,
    variance: s = 0,
    width: i = 50,
    widthVariance: r = 50,
    gapFrequency: n = 0,
    scaleUpAnimation: e,
    className: o
}) {
    const c = u.useMemo(() => Array.from({
        length: t + Math.random() * (s ? ? 0)
    }, () => i + Math.random() * r), [t, s, i, r]);
    return a.jsx(x, {
        className: o,
        children: c.map((d, m) => a.jsx(b, {
            index: m + l,
            width: d,
            className: h(n > 0 && (m + 1) % n === 0 && "mb-snc-1"),
            customAnimation: e ? {
                initial: {
                    scaleX: e.initialScaleX
                },
                animate: {
                    scaleX: 1
                },
                transition: {
                    scaleX: {
                        duration: e.duration,
                        ease: "easeInOut",
                        delay: m * .07
                    }
                }
            } : void 0
        }, m))
    })
}
const x = f.div `flex flex-col items-start gap-2`;

function b({
    index: t,
    width: l,
    className: s,
    customAnimation: i
}) {
    const {
        initial: r,
        animate: n,
        transition: e
    } = i ? ? {
        initial: {},
        animate: {},
        transition: {}
    };
    return a.jsx(p.div, {
        className: h("h-5 origin-left rounded-md bg-token-border-light dark:bg-white/10", s),
        style: {
            width: `${l}%`
        },
        initial: {
            opacity: 1,
            ...r
        },
        animate: {
            opacity: [1, .4],
            ...n
        },
        transition: {
            opacity: {
                repeat: 1 / 0,
                repeatType: "reverse",
                duration: .85,
                ease: "easeInOut",
                delay: t * .07
            },
            ...e
        }
    })
}
export {
    v as P, j as a, b
};
//# sourceMappingURL=m3b3wk7x0ejaq5a6.js.map