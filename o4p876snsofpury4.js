import {
    u as f,
    g as m
} from "./hhrilqm27fbjs70g.js";
import {
    d4 as h,
    D as l
} from "./bq4rrqi54riy5k2e.js";
import {
    r
} from "./mna1wiucqak6lqzp.js";
import {
    dV as d
} from "./lwme42j7zzyr3q7j.js";
const g = d() && h;

function D(e) {
    const n = r.useRef(void 0);
    r.useEffect(() => {
        if (!(g || !navigator.permissions)) return navigator.permissions.query({
            name: "microphone"
        }).then(o => {
            n.current = o, o.onchange = () => {
                e(o.state === "granted")
            }
        }), () => {
            n.current && (n.current.onchange = null)
        }
    }, [e])
}
const C = () => {
        const [e, n] = r.useState(!1), [o, t] = r.useState(!1), [c, a] = r.useState(), u = r.useCallback(s => {
            n(s)
        }, []);
        D(u);
        const i = f(),
            p = r.useCallback(async () => o ? e : i().then(s => (n(s), s)).finally(() => {
                t(!0)
            }), [i, o, e]);
        return r.useEffect(() => {
            e && v().then(s => {
                a(s)
            })
        }, [e]), {
            requestMicrophonePermissions: p,
            userDeclinedMicrophonePermissions: o && !e,
            microphoneAvailable: e,
            microphoneLabel: c
        }
    },
    v = async () => {
        try {
            return (await m("audioinput")) ? .label ? ? ""
        } catch (e) {
            return l.addError("Failed to fetch default media device", {
                error: e
            }), "Error accessing microphone devices"
        }
    };
export {
    C as u
};
//# sourceMappingURL=o4p876snsofpury4.js.map