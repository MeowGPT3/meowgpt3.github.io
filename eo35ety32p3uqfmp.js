import {
    eP as l,
    fa as g,
    N as f,
    h as i,
    L as u,
    S as _,
    P as C,
    r as d,
    d$ as y
} from "./bq4rrqi54riy5k2e.js";
import {
    d as E,
    h as P,
    c as h,
    a as v,
    r as R
} from "./mna1wiucqak6lqzp.js";
import {
    og as S
} from "./lwme42j7zzyr3q7j.js";
var T = {};
const p = {
        oiw216z: `${T.VITE_OIW216Z_SERVICE_URL??"https://sora.com"}/subscription`,
        vza493q: y
    },
    F = l(function() {
        const t = g(),
            a = E(),
            [o] = P(),
            n = f(),
            c = h(),
            r = v(),
            s = i.getItem(u.CheckoutFrom);
        return R.useEffect(() => {
            if (t) {
                const e = o.get("plan_type") ? ? "plus",
                    m = S(e);
                e === "plus" && _.logEvent("chatgpt_plus_payment_success_page"), C.logPaymentSuccess({
                    plan_type: e
                }), r.invalidateQueries({
                    queryKey: ["account-status"]
                }), s && p[s] ? (i.removeItem(u.CheckoutFrom), window.location.href = p[s]) : a("/#pricing"), n.success(c.formatMessage(I.paymentConfirmationToastMessage, {
                    planName: m
                }), {
                    duration: 5
                })
            }
        }, [t, a, o, n, c, r, s]), null
    }),
    I = d({
        paymentConfirmationToastMessage: {
            id: "Payments.success.toast",
            defaultMessage: "You're now subscribed to ChatGPT {planName}"
        }
    });
export {
    p as C, F as p
};
//# sourceMappingURL=eo35ety32p3uqfmp.js.map