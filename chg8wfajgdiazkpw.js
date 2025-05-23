const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/g665zdx0ev5b8gwk.js", "assets/mna1wiucqak6lqzp.js", "assets/bq4rrqi54riy5k2e.js", "assets/root-ey6kd8gf.css", "assets/lizbu6fwxn81l4m4.js", "assets/m0wlwtibo8yb2c2h.js", "assets/lwme42j7zzyr3q7j.js", "assets/conversation-small-fu0y35oi.css", "assets/cxz91putlw7pmfk2.js", "assets/niyc1j17i1iogjjg.js", "assets/hx3p6g5v1c632c0c.js", "assets/nc7lfqrltu2fqkst.js", "assets/g77ymanjjcustcw3.js", "assets/nmr5d79kmws977p2.js", "assets/m44xlxtgozicne9l.js", "assets/mudxqzvnzrr4lh0z.js", "assets/m3b3wk7x0ejaq5a6.js", "assets/oqh7hur52tf42g0a.js", "assets/m1vqqb108216sh4q.js", "assets/ld626s1jynzsi9nc.js", "assets/w2bxeacglxs5nzbr.js", "assets/g01zogj1vrh90isg.js", "assets/h2mbwvf3xs6tkgoi.js", "assets/bcieds2s0jraaq45.js", "assets/hhrilqm27fbjs70g.js", "assets/fl41y0is7h6g0gxe.js", "assets/ihors7v1ehg5i95p.js", "assets/hxae11fvkt7vlxfl.js", "assets/o4p876snsofpury4.js"]))) => i.map(i => d[i]);
import {
    eE as Z,
    E as bA,
    k as ce,
    d4 as le,
    g_ as ue,
    B as iA,
    z as gA,
    dn as de,
    bk as me,
    bi as ge,
    b_ as fe,
    d as aA,
    cp as kA,
    ci as he,
    cz as pe,
    bA as FA,
    a6 as Ce,
    bz as Ee,
    g$ as be
} from "./bq4rrqi54riy5k2e.js";
import {
    r as o,
    g as ke,
    h as ve,
    d as GA,
    c as F,
    j as c,
    av as R,
    ax as _
} from "./mna1wiucqak6lqzp.js";
import {
    o1 as wA,
    z as Be,
    l as Se,
    o2 as Ie,
    dV as Me,
    bs as JA,
    bl as yA,
    q as we,
    cO as XA,
    hD as ye,
    o3 as xe,
    hC as Qe,
    o4 as Ve,
    lR as Re,
    f$ as Te,
    hi as je
} from "./lwme42j7zzyr3q7j.js";
import {
    u as vA,
    e as De,
    r as rA,
    $ as Ze,
    C as Oe,
    _ as V,
    y as Ye,
    W as z,
    O as LA,
    N as Ne,
    S as tA,
    I as WA,
    R as Fe,
    Y as Ge,
    F as Je,
    x as Xe,
    f as BA,
    h as PA,
    a as w,
    b as UA,
    g as fA,
    c as Le,
    i as We,
    j as SA,
    k as IA,
    l as Pe,
    s as Ue,
    B as qA,
    m as Y,
    n as qe,
    o as He,
    p as Ke,
    G as _e,
    q as ze,
    t as $e,
    v as At,
    w as et,
    X as xA,
    V as tt,
    z as ot,
    A as nt
} from "./w2bxeacglxs5nzbr.js";
import {
    V as cA,
    R as st,
    a as N,
    M as it,
    C as QA,
    T as G,
    b as hA,
    c as pA,
    d as HA,
    L as CA,
    E as at
} from "./hhrilqm27fbjs70g.js";
import {
    S as rt
} from "./hxae11fvkt7vlxfl.js";
import {
    u as ct
} from "./o4p876snsofpury4.js";
import {
    M as lt
} from "./ihors7v1ehg5i95p.js";

function ut() {
    const A = vA(),
        e = De(),
        t = o.useCallback(() => {
            cA.debug("disconnected from room"), rA(A)
        }, [A]),
        n = o.useCallback(r => {
            e.danger("Something went wrong"), cA.error("an error occurred within the room", r);
            const a = wA(A.getState());
            Z.voiceMode.error({ ...a,
                error: r.message
            }), rA(A)
        }, [e, A]),
        s = o.useCallback(r => {
            e.danger("Something went wrong"), cA.error("an encryption error occurred within the room", r);
            const a = wA(A.getState());
            Z.voiceMode.error({
                encryptionError: r.message,
                eventSource: "voice-session",
                ...a
            }), rA(A)
        }, [e, A]);
    return {
        onDisconnected: t,
        onError: n,
        onEncryptionError: s
    }
}

function KA(A) {
    var e, t, n = "";
    if (typeof A == "string" || typeof A == "number") n += A;
    else if (typeof A == "object")
        if (Array.isArray(A)) {
            var s = A.length;
            for (e = 0; e < s; e++) A[e] && (t = KA(A[e])) && (n && (n += " "), n += t)
        } else
            for (t in A) A[t] && (n && (n += " "), n += t);
    return n
}

function dt() {
    for (var A, e, t = 0, n = "", s = arguments.length; t < s; t++)(A = arguments[t]) && (e = KA(A)) && (n && (n += " "), n += e);
    return n
}

function mt(...A) {
    return (...e) => {
        for (const t of A)
            if (typeof t == "function") try {
                t(...e)
            } catch (n) {
                console.error(n)
            }
    }
}

function _A(...A) {
    const e = { ...A[0]
    };
    for (let t = 1; t < A.length; t++) {
        const n = A[t];
        for (const s in n) {
            const r = e[s],
                a = n[s];
            typeof r == "function" && typeof a == "function" && s[0] === "o" && s[1] === "n" && s.charCodeAt(2) >= 65 && s.charCodeAt(2) <= 90 ? e[s] = mt(r, a) : (s === "className" || s === "UNSAFE_className") && typeof r == "string" && typeof a == "string" ? e[s] = dt(r, a) : e[s] = a !== void 0 ? a : r
        }
    }
    return e
}
const gt = {
    connect: !0,
    audio: !1,
    video: !1
};

function ft(A) {
    const {
        token: e,
        serverUrl: t,
        options: n,
        room: s,
        connectOptions: r,
        connect: a,
        audio: i,
        video: l,
        screen: d,
        onConnected: u,
        onDisconnected: m,
        onError: g,
        onMediaDeviceFailure: f,
        onEncryptionError: p,
        simulateParticipants: h,
        ...E
    } = { ...gt,
        ...A
    };
    n && s && V.warn("when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead.");
    const [C, y] = o.useState();
    o.useEffect(() => {
        y(s ? ? new st(n))
    }, [s]);
    const I = o.useMemo(() => {
        const {
            className: v
        } = Ye();
        return _A(E, {
            className: v
        })
    }, [E]);
    return o.useEffect(() => {
        if (!C) return;
        const v = () => {
                const B = C.localParticipant;
                V.debug("trying to publish local tracks"), Promise.all([B.setMicrophoneEnabled(!!i, typeof i != "boolean" ? i : void 0), B.setCameraEnabled(!!l, typeof l != "boolean" ? l : void 0), B.setScreenShareEnabled(!!d, typeof d != "boolean" ? d : void 0)]).catch(S => {
                    V.warn(S), g ? .(S)
                })
            },
            M = B => {
                const S = it.getFailure(B);
                f ? .(S)
            },
            k = B => {
                p ? .(B)
            };
        return C.on(N.SignalConnected, v).on(N.MediaDevicesError, M).on(N.EncryptionError, k), () => {
            C.off(N.SignalConnected, v).off(N.MediaDevicesError, M).off(N.EncryptionError, k)
        }
    }, [C, i, l, d, g, p, f]), o.useEffect(() => {
        if (C) {
            if (h) {
                C.simulateParticipants({
                    participants: {
                        count: h
                    },
                    publish: {
                        audio: !0,
                        useRealTracks: !0
                    }
                });
                return
            }
            if (!e) {
                V.debug("no token yet");
                return
            }
            if (!t) {
                V.warn("no livekit url provided"), g ? .(Error("no livekit url provided"));
                return
            }
            a ? (V.debug("connecting"), C.connect(t, e, r).catch(v => {
                V.warn(v), g ? .(v)
            })) : (V.debug("disconnecting because connect is false"), C.disconnect())
        }
    }, [a, e, JSON.stringify(r), C, g, t, h]), o.useEffect(() => {
        if (!C) return;
        const v = M => {
            switch (M) {
                case QA.Disconnected:
                    m && m();
                    break;
                case QA.Connected:
                    u && u();
                    break
            }
        };
        return C.on(N.ConnectionStateChanged, v), () => {
            C.off(N.ConnectionStateChanged, v)
        }
    }, [e, u, m, C]), o.useEffect(() => {
        if (C) return () => {
            V.info("disconnecting on onmount"), C.disconnect()
        }
    }, [C]), {
        room: C,
        htmlProps: I
    }
}
const ht = o.forwardRef(function(A, e) {
    const {
        room: t,
        htmlProps: n
    } = ft(A);
    return o.createElement("div", {
        ref: e,
        ...n
    }, t && o.createElement(Ze.Provider, {
        value: t
    }, o.createElement(Oe.Provider, {
        value: A.featureFlags
    }, A.children)))
});

function pt(A) {
    return A !== void 0
}

function Ct(...A) {
    return _A(...A.filter(pt))
}

function zA(A, e = {}) {
    const [t, n] = o.useState(Fe(A)), [s, r] = o.useState(t ? .isMuted), [a, i] = o.useState(t ? .isSubscribed), [l, d] = o.useState(t ? .track), [u, m] = o.useState("landscape"), g = o.useRef(), {
        className: f,
        trackObserver: p
    } = o.useMemo(() => Ge(A), [A.participant.sid ? ? A.participant.identity, A.source, Je(A) && A.publication.trackSid]);
    return o.useEffect(() => {
        const h = p.subscribe(E => {
            V.debug("update track", E), n(E), r(E ? .isMuted), i(E ? .isSubscribed), d(E ? .track)
        });
        return () => h ? .unsubscribe()
    }, [p]), o.useEffect(() => {
        var h, E;
        return l && (g.current && l.detach(g.current), (h = e.element) != null && h.current && !(LA(A.participant) && l ? .kind === "audio") && l.attach(e.element.current)), g.current = (E = e.element) == null ? void 0 : E.current, () => {
            g.current && l ? .detach(g.current)
        }
    }, [l, e.element]), o.useEffect(() => {
        var h, E;
        if (typeof((h = t ? .dimensions) == null ? void 0 : h.width) == "number" && typeof((E = t ? .dimensions) == null ? void 0 : E.height) == "number") {
            const C = t.dimensions.width > t.dimensions.height ? "landscape" : "portrait";
            m(C)
        }
    }, [t]), {
        publication: t,
        isMuted: s,
        isSubscribed: a,
        track: l,
        elementProps: Ct(e.props, {
            className: f,
            "data-lk-local-participant": A.participant.isLocal,
            "data-lk-source": t ? .source,
            ...t ? .kind === "video" && {
                "data-lk-orientation": u
            }
        })
    }
}
var Et = "Expected a function",
    VA = NaN,
    bt = "[object Symbol]",
    kt = /^\s+|\s+$/g,
    vt = /^[-+]0x[0-9a-f]+$/i,
    Bt = /^0b[01]+$/i,
    St = /^0o[0-7]+$/i,
    It = parseInt,
    Mt = typeof tA == "object" && tA && tA.Object === Object && tA,
    wt = typeof self == "object" && self && self.Object === Object && self,
    yt = Mt || wt || Function("return this")(),
    xt = Object.prototype,
    Qt = xt.toString,
    Vt = Math.max,
    Rt = Math.min,
    lA = function() {
        return yt.Date.now()
    };

function Tt(A, e, t) {
    var n, s, r, a, i, l, d = 0,
        u = !1,
        m = !1,
        g = !0;
    if (typeof A != "function") throw new TypeError(Et);
    e = RA(e) || 0, EA(t) && (u = !!t.leading, m = "maxWait" in t, r = m ? Vt(RA(t.maxWait) || 0, e) : r, g = "trailing" in t ? !!t.trailing : g);

    function f(k) {
        var B = n,
            S = s;
        return n = s = void 0, d = k, a = A.apply(S, B), a
    }

    function p(k) {
        return d = k, i = setTimeout(C, e), u ? f(k) : a
    }

    function h(k) {
        var B = k - l,
            S = k - d,
            O = e - B;
        return m ? Rt(O, r - S) : O
    }

    function E(k) {
        var B = k - l,
            S = k - d;
        return l === void 0 || B >= e || B < 0 || m && S >= r
    }

    function C() {
        var k = lA();
        if (E(k)) return y(k);
        i = setTimeout(C, h(k))
    }

    function y(k) {
        return i = void 0, g && n ? f(k) : (n = s = void 0, a)
    }

    function I() {
        i !== void 0 && clearTimeout(i), d = 0, n = l = s = i = void 0
    }

    function v() {
        return i === void 0 ? a : y(lA())
    }

    function M() {
        var k = lA(),
            B = E(k);
        if (n = arguments, s = this, l = k, B) {
            if (i === void 0) return p(l);
            if (m) return i = setTimeout(C, e), f(l)
        }
        return i === void 0 && (i = setTimeout(C, e)), a
    }
    return M.cancel = I, M.flush = v, M
}

function EA(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function")
}

function jt(A) {
    return !!A && typeof A == "object"
}

function Dt(A) {
    return typeof A == "symbol" || jt(A) && Qt.call(A) == bt
}

function RA(A) {
    if (typeof A == "number") return A;
    if (Dt(A)) return VA;
    if (EA(A)) {
        var e = typeof A.valueOf == "function" ? A.valueOf() : A;
        A = EA(e) ? e + "" : e
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(kt, "");
    var t = Bt.test(A);
    return t || St.test(A) ? It(A.slice(2), t ? 2 : 8) : vt.test(A) ? VA : +A
}
var Zt = Tt;
const TA = Xe(Zt);

function Ot(A) {
    const e = o.useRef(A);
    e.current = A, o.useEffect(() => () => {
        e.current()
    }, [])
}

function Yt(A, e = 500, t) {
    const n = o.useRef();
    Ot(() => {
        n.current && n.current.cancel()
    });
    const s = o.useMemo(() => {
        const r = TA(A, e, t),
            a = (...i) => r(...i);
        return a.cancel = () => {
            r.cancel()
        }, a.isPending = () => !!n.current, a.flush = () => r.flush(), a
    }, [A, e, t]);
    return o.useEffect(() => {
        n.current = TA(A, e, t)
    }, [A, e, t]), s
}

function Nt(A, e, t) {
    const n = (d, u) => d === u,
        s = A instanceof Function ? A() : A,
        [r, a] = o.useState(s),
        i = o.useRef(s),
        l = Yt(a, e, t);
    return n(i.current, s) || (l(s), i.current = s), [r, l]
}

function Ft({
    threshold: A = 0,
    root: e = null,
    rootMargin: t = "0%",
    freezeOnceVisible: n = !1,
    initialIsIntersecting: s = !1,
    onChange: r
} = {}) {
    var a;
    const [i, l] = o.useState(null), [d, u] = o.useState(() => ({
        isIntersecting: s,
        entry: void 0
    })), m = o.useRef();
    m.current = r;
    const g = ((a = d.entry) == null ? void 0 : a.isIntersecting) && n;
    o.useEffect(() => {
        if (!i || !("IntersectionObserver" in window) || g) return;
        let h;
        const E = new IntersectionObserver(C => {
            const y = Array.isArray(E.thresholds) ? E.thresholds : [E.thresholds];
            C.forEach(I => {
                const v = I.isIntersecting && y.some(M => I.intersectionRatio >= M);
                u({
                    isIntersecting: v,
                    entry: I
                }), m.current && m.current(v, I), v && n && h && (h(), h = void 0)
            })
        }, {
            threshold: A,
            root: e,
            rootMargin: t
        });
        return E.observe(i), () => {
            E.disconnect()
        }
    }, [i, JSON.stringify(A), e, t, g, n]);
    const f = o.useRef(null);
    o.useEffect(() => {
        var h;
        !i && (h = d.entry) != null && h.target && !n && !g && f.current !== d.entry.target && (f.current = d.entry.target, u({
            isIntersecting: s,
            entry: void 0
        }))
    }, [i, d.entry, n, g, s]);
    const p = [l, !!d.isIntersecting, d.entry];
    return p.ref = p[0], p.isIntersecting = p[1], p.entry = p[2], p
}
const $A = o.forwardRef(function({
        onTrackClick: A,
        onClick: e,
        onSubscriptionStatusChanged: t,
        trackRef: n,
        manageSubscription: s,
        ...r
    }, a) {
        const i = WA(n),
            l = o.useRef(null);
        o.useImperativeHandle(a, () => l.current);
        const d = Ft({
                root: l.current
            }),
            [u] = Nt(d, 3e3);
        o.useEffect(() => {
            s && i.publication instanceof hA && u ? .isIntersecting === !1 && d ? .isIntersecting === !1 && i.publication.setSubscribed(!1)
        }, [u, i, s]), o.useEffect(() => {
            s && i.publication instanceof hA && d ? .isIntersecting === !0 && i.publication.setSubscribed(!0)
        }, [d, i, s]);
        const {
            elementProps: m,
            publication: g,
            isSubscribed: f
        } = zA(i, {
            element: l,
            props: r
        });
        o.useEffect(() => {
            t ? .(!!f)
        }, [f, t]);
        const p = h => {
            e ? .(h), A ? .({
                participant: i ? .participant,
                track: g
            })
        };
        return o.createElement("video", {
            ref: l,
            ...m,
            muted: !0,
            onClick: p
        })
    }),
    Gt = o.forwardRef(function({
        trackRef: A,
        onSubscriptionStatusChanged: e,
        volume: t,
        muted: n,
        ...s
    }, r) {
        const a = WA(A),
            i = o.useRef(null);
        o.useImperativeHandle(r, () => i.current);
        const {
            elementProps: l,
            isSubscribed: d,
            track: u,
            publication: m
        } = zA(a, {
            element: i,
            props: s
        });
        return o.useEffect(() => {
            e ? .(!!d)
        }, [d, e]), o.useEffect(() => {
            u === void 0 || t === void 0 || (u instanceof pA ? u.setVolume(t) : V.warn("Volume can only be set on remote audio tracks."))
        }, [t, u]), o.useEffect(() => {
            m === void 0 || n === void 0 || (m instanceof hA ? m.setEnabled(!n) : V.warn("Can only call setEnabled on remote track publications."))
        }, [n, m, u]), o.createElement("audio", {
            ref: i,
            ...l
        })
    });

function Jt({
    volume: A,
    muted: e
}) {
    const t = z([G.Source.Microphone, G.Source.ScreenShareAudio, G.Source.Unknown], {
        updateOnlyOn: [],
        onlySubscribed: !0
    }).filter(n => !LA(n.participant) && n.publication.kind === G.Kind.Audio);
    return o.createElement("div", {
        style: {
            display: "none"
        }
    }, t.map(n => o.createElement(Gt, {
        key: Ne(n),
        trackRef: n,
        volume: A,
        muted: e
    })))
}

function Ae({
    conversationId: A
}) {
    const {
        shouldDelayDisconnect: e,
        delayDisconnect: t,
        immediateDisconnect: n
    } = BA({
        refetchLater: !0
    }), {
        toggleMute: s
    } = PA(), r = bA(A);
    return o.useCallback(async () => {
        Z.voiceSessionEndedByUser.click(), Be.setState({
            voiceFeedbackThread: r,
            lastVoiceSessionEndTime: new Date
        }), e ? (await s(), t()) : n()
    }, [t, n, r, e, s])
}
var Xt = {
    webm: "data:video/webm;base64,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",
    mp4: "data:video/mp4;base64,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"
};
const {
    webm: Lt,
    mp4: Wt
} = Xt, uA = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, dA = () => "wakeLock" in navigator;
class Pt {
    constructor() {
        if (this.enabled = !1, dA()) {
            this._wakeLock = null;
            const e = () => {
                this._wakeLock !== null && document.visibilityState === "visible" && this.enable()
            };
            document.addEventListener("visibilitychange", e), document.addEventListener("fullscreenchange", e)
        } else uA() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", Lt), this._addSourceToVideo(this.noSleepVideo, "mp4", Wt), this.noSleepVideo.addEventListener("loadedmetadata", () => {
            this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
                this.noSleepVideo.currentTime > .5 && (this.noSleepVideo.currentTime = Math.random())
            })
        }))
    }
    _addSourceToVideo(e, t, n) {
        var s = document.createElement("source");
        s.src = n, s.type = `video/${t}`, e.appendChild(s)
    }
    get isEnabled() {
        return this.enabled
    }
    enable() {
        return dA() ? navigator.wakeLock.request("screen").then(e => {
            this._wakeLock = e, this.enabled = !0, console.log("Wake Lock active."), this._wakeLock.addEventListener("release", () => {
                console.log("Wake Lock released.")
            })
        }).catch(e => {
            throw this.enabled = !1, console.error(`${e.name}, ${e.message}`), e
        }) : uA() ? (this.disable(), console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `), this.noSleepTimer = window.setInterval(() => {
            document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0))
        }, 15e3), this.enabled = !0, Promise.resolve()) : this.noSleepVideo.play().then(t => (this.enabled = !0, t)).catch(t => {
            throw this.enabled = !1, t
        })
    }
    disable() {
        dA() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : uA() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = !1
    }
}
var Ut = Pt;
const qt = ke(Ut),
    jA = "mode",
    Ht = "voice",
    Kt = () => {
        const [A, e] = ve(), t = A.get(jA), n = vA(), s = w(u => u.isVoiceModeActive), {
            isUnauthenticated: r
        } = ce(), a = Se(), i = Ie(), l = !r, d = GA();
        o.useEffect(() => {
            t === Ht && !s && (e(u => (u.delete(jA), u)), i ? d("/update-app") : l ? n.setState({
                isVoiceModeActive: !0
            }) : a({
                authType: "login",
                callbackUrl: window.location.href
            }))
        }, [l, i, t, d, a, e, s, n])
    },
    _t = A => o.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...A
    }, o.createElement("path", {
        d: "M7.5 8.91422V10.5C7.5 12.9853 9.51472 15 12 15C12.4787 15 12.9399 14.9253 13.3726 14.7868L14.5285 15.9427C13.7599 16.3004 12.9031 16.5 11.9999 16.5C9.28338 16.5 6.98608 14.6939 6.24825 12.2148C6.09071 11.6854 5.53389 11.384 5.00455 11.5415C4.47521 11.6991 4.17381 12.2559 4.33134 12.7852C5.22277 15.7805 7.82091 18.0418 11 18.4381V19.5H9.5C8.94772 19.5 8.5 19.9477 8.5 20.5C8.5 21.0523 8.94772 21.5 9.5 21.5H14.5C15.0523 21.5 15.5 21.0523 15.5 20.5C15.5 19.9477 15.0523 19.5 14.5 19.5H13V18.4381C14.086 18.3027 15.1043 17.9496 16.0098 17.424L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L7.5 8.91422Z",
        fill: "currentColor"
    }), o.createElement("path", {
        d: "M17.3874 13.1448L18.8601 14.6174C19.202 14.0488 19.4753 13.4343 19.6685 12.7852C19.826 12.2559 19.5246 11.6991 18.9953 11.5415C18.466 11.384 17.9091 11.6854 17.7516 12.2148C17.6557 12.537 17.5335 12.8478 17.3874 13.1448Z",
        fill: "currentColor"
    }), o.createElement("path", {
        d: "M8.46182 4.21918L16.2436 12.001C16.4096 11.5315 16.5 11.0263 16.5 10.5V7C16.5 4.51472 14.4853 2.5 12 2.5C10.5644 2.5 9.28577 3.17227 8.46182 4.21918Z",
        fill: "currentColor"
    })),
    zt = A => o.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...A
    }, o.createElement("path", {
        d: "M7.50002 7C7.50002 4.51472 9.51474 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7V10.5C16.5 12.9853 14.4853 15 12 15C9.51474 15 7.50002 12.9853 7.50002 10.5V7Z",
        fill: "currentColor"
    }), o.createElement("path", {
        d: "M18.9953 11.5415C19.5246 11.6991 19.826 12.2559 19.6685 12.7852C18.7771 15.7804 16.179 18.0417 13 18.4381V19.5H14.5C15.0523 19.5 15.5 19.9477 15.5 20.5C15.5 21.0523 15.0523 21.5 14.5 21.5H9.50002C8.94773 21.5 8.50002 21.0523 8.50002 20.5C8.50002 19.9477 8.94773 19.5 9.50002 19.5H11V18.4381C7.82093 18.0418 5.22279 15.7805 4.33136 12.7852C4.17382 12.2559 4.47522 11.6991 5.00456 11.5415C5.5339 11.384 6.09073 11.6854 6.24827 12.2148C6.98609 14.6939 9.28339 16.5 11.9999 16.5C14.7165 16.5 17.0138 14.6939 17.7516 12.2148C17.9091 11.6854 18.466 11.384 18.9953 11.5415Z",
        fill: "currentColor"
    })),
    $t = A => o.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...A
    }, o.createElement("path", {
        d: "M16.2413 3H7.7587C6.95374 2.99999 6.28937 2.99998 5.74818 3.04419C5.18608 3.09012 4.66937 3.18868 4.18404 3.43598C3.43139 3.81947 2.81947 4.43139 2.43598 5.18404C2.18868 5.66937 2.09012 6.18608 2.04419 6.74818C1.99998 7.28937 1.99999 7.95372 2 8.75869V15.2413C1.99999 16.0463 1.99998 16.7106 2.04419 17.2518C2.09012 17.8139 2.18868 18.3306 2.43598 18.816C2.81947 19.5686 3.43139 20.1805 4.18404 20.564C4.66937 20.8113 5.18608 20.9099 5.74818 20.9558C6.28936 21 6.95372 21 7.75868 21H16.2413C17.0463 21 17.7106 21 18.2518 20.9558C18.8139 20.9099 19.3306 20.8113 19.816 20.564C20.5686 20.1805 21.1805 19.5686 21.564 18.816C21.8113 18.3306 21.9099 17.8139 21.9558 17.2518C22 16.7106 22 16.0463 22 15.2413V8.75868C22 7.95372 22 7.28936 21.9558 6.74818C21.9099 6.18608 21.8113 5.66937 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43598C19.3306 3.18868 18.8139 3.09012 18.2518 3.04419C17.7106 2.99998 17.0463 2.99999 16.2413 3ZM6.5 9.5C10.366 9.5 13.5 12.634 13.5 16.5C13.5 17.0523 13.0523 17.5 12.5 17.5C11.9477 17.5 11.5 17.0523 11.5 16.5C11.5 13.7386 9.26142 11.5 6.5 11.5C5.94772 11.5 5.5 11.0523 5.5 10.5C5.5 9.94772 5.94772 9.5 6.5 9.5ZM6.5 13.5C8.15685 13.5 9.5 14.8431 9.5 16.5C9.5 17.0523 9.05229 17.5 8.5 17.5C7.94772 17.5 7.5 17.0523 7.5 16.5C7.5 15.9477 7.05229 15.5 6.5 15.5C5.94772 15.5 5.5 15.0523 5.5 14.5C5.5 13.9477 5.94772 13.5 6.5 13.5Z",
        fill: "currentColor"
    })),
    Ao = A => o.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...A
    }, o.createElement("path", {
        d: "M7.7587 4.5C6.95374 4.49999 6.28937 4.49998 5.74818 4.54419C5.18608 4.59012 4.66937 4.68868 4.18404 4.93598C3.43139 5.31947 2.81947 5.93139 2.43598 6.68404C2.18868 7.16937 2.09012 7.68608 2.04419 8.24818C1.99998 8.78937 1.99999 9.45372 2 10.2587V13.7413C1.99999 14.5463 1.99998 15.2106 2.04419 15.7518C2.09012 16.3139 2.18868 16.8306 2.43598 17.316C2.81947 18.0686 3.43139 18.6805 4.18404 19.064C4.66937 19.3113 5.18608 19.4099 5.74818 19.4558C6.28938 19.5 6.95375 19.5 7.75873 19.5H10.7413C11.5463 19.5 12.2106 19.5 12.7518 19.4558C13.3139 19.4099 13.8306 19.3113 14.316 19.064C15.0686 18.6805 15.6805 18.0686 16.064 17.316C16.3113 16.8306 16.4099 16.3139 16.4558 15.7518C16.5 15.2106 16.5 14.5463 16.5 13.7413V10.2587C16.5 9.45375 16.5 8.78938 16.4558 8.24818C16.4099 7.68608 16.3113 7.16937 16.064 6.68404C15.6805 5.93139 15.0686 5.31947 14.316 4.93598C13.8306 4.68868 13.3139 4.59012 12.7518 4.54419C12.2106 4.49998 11.5463 4.49999 10.7413 4.5H7.7587Z",
        fill: "currentColor"
    }), o.createElement("path", {
        d: "M23 7.8312C23 6.55258 21.5028 5.86019 20.5285 6.68829L18.5285 8.38829C18.1932 8.67329 18 9.09115 18 9.5312V14.4688C18 14.9088 18.1932 15.3267 18.5285 15.6117L20.5285 17.3117C21.5028 18.1398 23 17.4474 23 16.1688V7.8312Z",
        fill: "currentColor"
    })),
    ee = "inline-flex items-center bg-transparent text-token-text-secondary hover:text-token-text-primary",
    eo = ({
        message: A,
        onClick: e,
        type: t
    }) => {
        const n = F(),
            s = Me() && le;
        if (!A) return null;
        switch (t) {
            case "microphone_denied":
                return s ? c.jsxs("a", {
                    href: "ms-settings:privacy-microphone",
                    className: ee,
                    children: [A, c.jsx(JA, {
                        className: "icon-sm ml-1"
                    })]
                }) : c.jsx(DA, {
                    onClick: e,
                    message: A
                });
            case "connection_quality":
                return c.jsxs("div", {
                    className: "inline-flex items-center",
                    children: [A, c.jsx("button", {
                        onClick: e,
                        className: "ml-1",
                        children: c.jsx("strong", {
                            children: n.formatMessage(te.retry)
                        })
                    })]
                });
            case "normal":
                return c.jsx(DA, {
                    onClick: e,
                    message: A
                })
        }
    },
    DA = ({
        message: A,
        onClick: e
    }) => {
        const t = F();
        return c.jsxs("button", {
            onClick: e,
            className: ee,
            "aria-label": t.formatMessage(te.openInfoModal),
            children: [A, c.jsx(JA, {
                className: "icon-sm ml-1"
            })]
        })
    },
    te = {
        openInfoModal: {
            id: "hintMessage.openInfoModal",
            defaultMessage: "Open info modal",
            description: "Open info modal about voice mode usage"
        },
        retry: {
            id: "hintMessage.retry",
            defaultMessage: "Retry",
            description: "Retry text next to lost connection message"
        }
    };

function to(A) {
    const {
        button: e,
        conversationId: t,
        onClick: n
    } = A, s = bA(t), {
        startVoiceMode: r
    } = UA(), a = GA(), i = o.useCallback(() => {
        switch (e.action) {
            case "new_chat":
                {
                    we("/"),
                    r(fA({
                        serverThreadId: void 0,
                        isAdvancedMode: !0,
                        eventSource: `modal_${e.action}`,
                        parentMessageId: void 0,
                        clientThreadId: de(),
                        gizmoId: void 0
                    }));
                    break
                }
            case "switch_to_standard":
                s && r(fA({
                    serverThreadId: s,
                    isAdvancedMode: !1,
                    eventSource: `modal_${e.action}`,
                    parentMessageId: void 0,
                    clientThreadId: s,
                    gizmoId: iA.getGizmoId(gA(t))
                }));
                break;
            case "upgrade_to_plus":
                yA(a, "Voice Mode Upgrade To Plus Modal");
                break;
            case "upgrade_to_pro":
                yA(a, "Voice Mode Upgrade To Pro Modal");
                break
        }
        n ? .()
    }, [e.action, t, a, n, s, r]);
    return c.jsx(me.Button, {
        onClick: i,
        title: e.title,
        color: A.color
    })
}
const oo = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "ghost"
};

function no({
    buttons: A,
    conversationId: e,
    onClick: t
}) {
    let n, s, r;
    const a = o.useCallback(i => () => {
        i === "upgrade_to_plus" ? Z.upsell.upgradeToPlus() : i === "upgrade_to_pro" && Z.upsell.upgradeToPro(), t()
    }, [t]);
    return !A || A.length === 0 ? {
        primary: void 0,
        secondary: void 0,
        tertiary: void 0
    } : (A.forEach(i => {
        if (!ue.includes(i.action)) return;
        const d = c.jsx(to, {
            button: i,
            conversationId: e,
            onClick: a(i.action),
            color: oo[i.style]
        });
        switch (i.style) {
            case "primary":
                n = d;
                break;
            case "secondary":
                s = d;
                break;
            case "tertiary":
                r = d;
                break
        }
    }), {
        primary: n,
        secondary: s,
        tertiary: r
    })
}

function so({
    conversationId: A,
    isOpen: e,
    onClose: t,
    buttons: n,
    title: s,
    description_markdown: r
}) {
    const a = no({
            buttons: n,
            conversationId: A,
            onClick: t
        }),
        i = c.jsx(lt, {
            className: "markdown mb-6 text-token-text-secondary",
            urlTransform: l => l,
            children: r
        });
    return c.jsx(ge, {
        title: s,
        isOpen: e,
        onClose: t,
        size: "custom",
        className: "max-w-[550px]",
        type: "warning",
        showCloseButton: !0,
        children: c.jsxs("div", {
            className: "w-full",
            children: [i, c.jsxs("div", {
                className: "flex flex-row justify-end gap-6",
                children: [a.primary, a.secondary, a.tertiary]
            })]
        })
    })
}

function io({
    conversationId: A
}) {
    const e = F(),
        t = vA(),
        n = Ae({
            conversationId: A
        }),
        s = w(b => b.server.usage),
        r = w(b => b.server.voiceConnectionQuality),
        a = b => b === HA.Lost,
        i = Le(),
        {
            voiceName: l
        } = XA(),
        [d, u] = o.useState(!1),
        m = w(b => b.server.toolUpdate),
        [g, f] = o.useState(!1),
        [p, h] = o.useState(!0),
        [E, C] = o.useState(null),
        [y, I] = o.useState(null),
        [v, M] = o.useState(null),
        k = o.useRef(!1),
        {
            prospectiveModelId: B
        } = ye(A),
        S = bA(A),
        {
            startVoiceMode: O,
            stopVoiceMode: j,
            isVoiceModeActive: J
        } = UA(),
        L = w(b => b.server.connectionState),
        {
            requestMicrophonePermissions: W,
            userDeclinedMicrophonePermissions: x,
            microphoneAvailable: P,
            microphoneLabel: AA
        } = ct();
    o.useEffect(() => {
        W()
    }, [W]), o.useEffect(() => {
        J && x && (u(!1), M(null), C(e.formatMessage(mA.hint)), I({
            title: e.formatMessage(mA.title),
            description_markdown: e.formatMessage(mA.description_markdown),
            buttons: []
        }))
    }, [e, J, x]), o.useEffect(() => {
        if (P && !L && !k.current) {
            k.current = !0, C(null), I(null);
            const b = gA(A),
                D = fA({
                    serverThreadId: S,
                    parentMessageId: iA.getCurrentNode(b) ? .id,
                    isAdvancedMode: !0,
                    eventSource: "composer_speech_button",
                    clientThreadId: A,
                    gizmoId: iA.getGizmoId(b)
                });
            Z.voiceSessionStarted.click({
                voice: l
            }), D.requested_default_model = B ? ? void 0, O(D)
        }
    }, [A, L, P, S, O, l, B]);
    const {
        reaching_limit_disclosure: U,
        exceed_limit_message: T
    } = s ? .rate_limit_message ? ? {}, Q = i ? .modes.find(b => b.mode === i ? .default_voice_mode), q = Q ? .disclosure_message, H = a(r) ? "Lost connection." : U ? .hint ? ? T ? .title ? ? q ? .hint ? ? null;
    o.useEffect(() => {
        Q && !x && C(Q.disclosure_message ? .hint ? ? null)
    }, [Q, x]), o.useEffect(() => {
        const b = m ? .text;
        let D, eA, X;
        return b && (h(!1), D = setTimeout(() => {
            f(!0), eA = setTimeout(() => {
                f(!1), X = setTimeout(() => {
                    h(!0), t.setState(re => {
                        re.server.toolUpdate = null
                    })
                }, 750)
            }, 3e3)
        }, 750)), () => {
            clearTimeout(D), clearTimeout(eA), clearTimeout(X)
        }
    }, [m, t]), o.useEffect(() => {
        if (!x) {
            if (H && C(H), T && J) {
                j();
                const b = {
                    title: T.title,
                    description_markdown: T.description_markdown,
                    buttons: T.buttons
                };
                d ? M(b) : (I(b), u(!0));
                const D = T.buttons.some(X => X.action === "upgrade_to_plus"),
                    eA = T.buttons.some(X => X.action === "upgrade_to_pro");
                Z.rateLimitReached.success({
                    upgrade_to_plus: D,
                    upgrade_to_pro: eA
                })
            } else if (!y) {
                const b = U ? ? q;
                b && I({
                    title: b.title,
                    description_markdown: b.message_markdown,
                    buttons: b.buttons
                })
            }
        }
    }, [q, T, H, d, J, y, U, j, x]);
    const ne = o.useCallback(() => {
            v && (I(v), M(null)), u(!0)
        }, [v]),
        se = o.useCallback(() => {
            u(!1)
        }, []),
        ie = w(b => b.voiceMode),
        ae = async () => {
            try {
                C(null), await O({
                    conversation_id: S,
                    eventSource: "lost_connection_hint_message",
                    voice_mode: ie,
                    voice: l,
                    clientThreadId: A,
                    gizmo_id: iA.getGizmoId(gA(A))
                })
            } catch (b) {
                const D = b instanceof Error ? b.message : String(b);
                Z.voiceMode.error({
                    error: D,
                    eventSource: "lost_connection_hint_message"
                })
            }
        };
    let K;
    return x ? K = "microphone_denied" : a(r) ? K = "connection_quality" : K = "normal", c.jsxs("div", {
        className: "flex w-full flex-col items-center",
        children: [c.jsxs("div", {
            className: "relative mb-6 flex min-h-5 w-full items-center justify-center text-xs text-token-text-secondary",
            children: [m ? .text && c.jsx(R.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: g ? 1 : 0
                },
                transition: {
                    duration: .5
                },
                style: {
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center"
                },
                children: c.jsxs("div", {
                    className: "flex items-center",
                    children: [m ? .text && c.jsx(rt, {
                        className: "icon-sm mr-1"
                    }), m ? .text]
                })
            }), c.jsx(R.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: p ? 1 : 0
                },
                transition: {
                    duration: .5
                },
                style: {
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    pointerEvents: m ? .text ? "none" : "auto",
                    cursor: m ? .text ? "default" : "pointer"
                },
                children: c.jsx("div", {
                    className: "flex items-center",
                    children: c.jsx(eo, {
                        type: K,
                        message: E,
                        onClick: K === "connection_quality" ? ae : ne
                    })
                })
            })]
        }), c.jsxs("div", {
            className: aA("flex flex-row items-center gap-6", "rounded-full px-3 py-1", "transition-width duration-200 ease-in-out"),
            children: [c.jsx(ZA, {
                capability: "video",
                children: c.jsx(ao, {})
            }), c.jsx(ro, {
                hideTooltip: x,
                microphoneLabel: AA,
                isMicrophoneEnabled: P
            }), c.jsx(ZA, {
                capability: "screenshare",
                children: c.jsx(co, {})
            }), c.jsx(MA, {
                onClick: n
            })]
        }), c.jsx(so, {
            conversationId: A,
            isOpen: d,
            onClose: se,
            title: y ? .title,
            description_markdown: y ? .description_markdown,
            buttons: y ? .buttons ? ? []
        })]
    })
}

function ZA({
    children: A,
    capability: e
}) {
    return We()[e] ? A : null
}

function ao() {
    const {
        isVideoEnabled: A,
        isStartingVideo: e,
        toggleVideo: t
    } = SA(), n = F();
    let s = null;
    e ? s = kA : s = Ao;
    const r = A ? "bg-gray-900 hover:bg-gray-800 active:bg-gray-700" : "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10",
        a = A ? "text-token-main-surface-primary" : "text-token-main-surface-primary-inverse",
        i = n.formatMessage({
            id: "SRVwhB",
            defaultMessage: "Toggle video"
        });
    return c.jsx($, {
        "aria-label": i,
        onClick: () => t("ControlButton"),
        disabled: e,
        icon: s,
        className: r,
        iconColor: a
    })
}

function ro({
    hideTooltip: A,
    microphoneLabel: e,
    isMicrophoneEnabled: t
}) {
    const {
        isMuting: n,
        toggleMute: s
    } = PA(), r = F(), {
        disconnectPending: a
    } = BA(), i = !!w(f => f.dev.room ? .localParticipant.isMicrophoneEnabled), l = t && i, d = l ? zt : _t, u = l ? "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10" : "bg-red-500/10 hover:bg-red-500/15 active:bg-red-500/20 dark:bg-red-500/10 dark:hover:bg-red-500/15 dark:active:bg-red-500/20", m = l ? "text-token-main-surface-primary-inverse" : "text-danger", g = l ? r.formatMessage({
        id: "PJzixV",
        defaultMessage: "Turn off microphone"
    }) : r.formatMessage({
        id: "nbbUMb",
        defaultMessage: "Turn on microphone"
    });
    return c.jsx($, {
        "aria-label": g,
        onClick: s,
        icon: d,
        disabled: n || a,
        className: u,
        iconColor: m,
        tooltipPrimaryLabel: !A && e ? g : "",
        tooltipSecondaryLabel: e
    })
}

function co() {
    const {
        isScreenshareEnabled: A,
        isScreenshareStarting: e,
        toggleScreenShare: t
    } = IA(), n = F();
    let s = null;
    e ? s = kA : s = $t;
    const r = A ? "bg-gray-900 hover:bg-gray-800 active:bg-gray-700" : "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10",
        a = A ? "text-token-main-surface-primary" : "text-token-main-surface-primary-inverse",
        i = n.formatMessage({
            id: "ShdqyW",
            defaultMessage: "Toggle screenshare"
        });
    return c.jsx($, {
        "aria-label": i,
        onClick: () => t("ControlButton"),
        disabled: e,
        icon: s,
        className: r,
        iconColor: a
    })
}

function MA({
    className: A,
    onClick: e
}) {
    const t = F(),
        {
            disconnectPending: n
        } = BA(),
        s = "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10",
        r = t.formatMessage({
            id: "9Mto0a",
            defaultMessage: "End"
        });
    return c.jsx($, {
        disabled: n,
        onClick: e,
        icon: n ? kA : xe,
        iconColor: "text-token-main-surface-primary-inverse",
        className: A ? ? s,
        "aria-label": t.formatMessage({
            id: "7/8k4Y",
            defaultMessage: "End voice mode"
        }),
        tooltipPrimaryLabel: r
    })
}

function $(A) {
    const {
        icon: e,
        disabled: t,
        className: n,
        iconColor: s = "text-current",
        iconSize: r = "icon-xl",
        buttonSize: a = "h-16 w-16",
        tooltipPrimaryLabel: i,
        tooltipSecondaryLabel: l,
        ...d
    } = A, [u, m] = o.useState(!1), g = o.useRef(void 0), f = o.useCallback(() => {
        const E = window.setTimeout(() => {
            m(!0)
        }, Qe);
        g.current = E
    }, []), p = o.useCallback(() => {
        clearTimeout(g.current), m(!1)
    }, []), h = c.jsx(uo, {
        className: aA(n, a, "overflow-hidden rounded-full border-none p-0.5 text-token-text-primary transition-colors duration-200 ease-in-out hover:text-token-text-secondary"),
        disabled: t,
        ...d,
        children: c.jsx(e, {
            className: aA(r, s)
        })
    });
    return i ? c.jsx(he, {
        sideOffset: 14,
        label: i,
        secondaryLabel: l,
        contentClassName: "flex flex-col items-center justify-center",
        className: "flex",
        open: u,
        side: "top",
        children: c.jsx("span", {
            onPointerEnter: f,
            onPointerLeave: p,
            children: h
        })
    }) : h
}
const lo = o.forwardRef(function(e, t) {
        return c.jsx(fe, { ...e,
            ref: t
        })
    }),
    uo = R.create(lo),
    mA = {
        hint: {
            id: "micMessages.hint",
            defaultMessage: "Enable microphone access in Settings",
            description: "Hint to the user to manually enable microphone access for voice mode"
        },
        title: {
            id: "micMessages.title",
            defaultMessage: "Microphone access required",
            description: "Title for modal that informs the user that microphone access is required for voice mode"
        },
        description_markdown: {
            id: "micMessages.description_markdown",
            defaultMessage: "To use voice mode, you'll need to enable your microphone and try again.",
            description: "Description for modal that informs the user that microphone access is required for voice mode"
        }
    };

function mo({
    children: A
}) {
    const {
        isVideoEnabled: e
    } = SA(), {
        isScreenshareEnabled: t
    } = IA(), n = e || t;
    return c.jsx(_, {
        mode: "wait",
        children: n ? c.jsx("div", {
            className: "flex h-full w-full flex-nowrap items-center",
            children: e ? c.jsx(go, {}) : c.jsx(fo, {})
        }) : c.jsx(R.div, {
            className: "flex h-full w-full items-center justify-center",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: A
        }, "children")
    })
}

function go() {
    const {
        isVideoEnabled: A,
        isStartingVideo: e,
        toggleVideo: t
    } = SA(), s = z([G.Source.Camera]).find(a => a.participant.isLocal), r = A && !e && s;
    return o.useEffect(() => {
        const a = s ? .publication ? .track;
        if (a) {
            const i = () => {
                t("Browser Video Controls")
            };
            return a.on("ended", i), () => {
                a.off("ended", i)
            }
        }
    }, [s, t]), c.jsx(_, {
        children: r && c.jsx(oe, {
            children: c.jsxs("div", {
                className: "aspect-w-16 aspect-h-9 group relative max-h-[95%] w-fit max-w-[60%] overflow-hidden rounded-3xl shadow-md",
                children: [c.jsx("div", {
                    className: "absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-90",
                    children: c.jsx(MA, {
                        onClick: () => t("StopButton"),
                        className: "bg-gray-900 bg-opacity-20 backdrop-blur-lg hover:bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-20 dark:backdrop-blur-lg dark:hover:bg-opacity-30"
                    })
                }), c.jsx($A, {
                    className: "h-full w-full object-contain",
                    trackRef: s
                })]
            })
        }, "camera-renderer")
    })
}

function fo() {
    const {
        isScreenshareEnabled: A,
        isScreenshareStarting: e,
        toggleScreenShare: t
    } = IA(), s = z([G.Source.ScreenShare]).find(a => a.participant.isLocal), r = A && !e && s;
    return o.useEffect(() => {
        const a = s ? .publication ? .track;
        if (a) {
            const i = () => {
                t("Browser ScreenShare Controls")
            };
            return a.on("ended", i), () => {
                a.off("ended", i)
            }
        }
    }, [s, t]), c.jsx(_, {
        children: r && c.jsx(oe, {
            children: c.jsxs("div", {
                className: "aspect-w-16 aspect-h-9 group relative max-h-[95%] w-fit max-w-[60%] overflow-hidden rounded-3xl shadow-md",
                children: [c.jsx("div", {
                    className: "absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-90",
                    children: c.jsx(MA, {
                        onClick: () => t("StopButton"),
                        className: "bg-gray-900 bg-opacity-20 backdrop-blur-lg hover:bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-20 dark:backdrop-blur-lg dark:hover:bg-opacity-30"
                    })
                }), c.jsx($A, {
                    className: "h-full w-full object-contain",
                    trackRef: s
                })]
            })
        }, "screenshare-renderer")
    })
}

function oe({
    children: A,
    key: e
}) {
    return c.jsx(R.div, {
        className: "flex h-full w-full flex-col items-center justify-center gap-2 bg-token-main-surface-primary",
        initial: {
            opacity: 0,
            transform: "blur(12px)",
            scale: .75
        },
        animate: {
            opacity: 1,
            transform: "blur(0px)",
            scale: 1
        },
        exit: {
            opacity: 0,
            transform: "blur(12px)",
            scale: .75
        },
        transition: {
            duration: .2
        },
        children: A
    }, e)
}
const oA = (A, e) => {
        const [t, n] = o.useState(A === e ? performance.now() : 0), s = o.useRef(e);
        o.useEffect(() => {
            s.current !== e && A === e && n(performance.now()), s.current = e
        }, [e, A]);
        const r = o.useCallback(() => {
            n(0)
        }, []);
        return [A === e ? 1 : 0, t, r]
    },
    nA = ([A, e, t], n = 500) => {
        const [s, r] = o.useState(A), a = o.useRef(A), i = o.useRef(void 0), l = o.useCallback((d, u, m) => {
            const g = f => {
                const p = Math.min((f - d) / n, 1),
                    h = u + p * (m - u);
                r(h), p < 1 && (i.current = requestAnimationFrame(g))
            };
            i.current = requestAnimationFrame(g)
        }, [n]);
        return o.useEffect(() => {
            if (a.current !== A) {
                a.current = A, i.current && cancelAnimationFrame(i.current);
                const d = s,
                    u = A;
                l(performance.now(), d, u)
            }
        }, [l, s, A]), [s, e / 1e3, t]
    },
    OA = A => {
        const [e, t] = o.useState({
            audioData: [0, 0, 0, 0],
            cumulativeAudioData: [0, 0, 0, 0]
        }), n = o.useRef([0, 0, 0, 0]), s = o.useRef(void 0), r = o.useRef(performance.now()), {
            bandMagnitudes: a,
            cumulativeMagnitude: i
        } = Pe(A, {
            bands: 3,
            bins: 1,
            gainMultipliers: [10, 1, 1]
        });
        n.current = [...a, i].flat();
        const l = o.useCallback(() => {
            const d = performance.now(),
                u = (d - r.current) / 1e3;
            r.current = d;
            const m = n.current,
                {
                    audioData: g,
                    cumulativeAudioData: f
                } = e,
                p = Ue({
                    deltaTimeS: u,
                    audioDataRaw: m,
                    prevAudioData: g,
                    prevCumulativeAudioData: f
                });
            t(p)
        }, [e]);
        return o.useEffect(() => (s.current || (s.current = window.setInterval(l, qA)), () => {
            clearInterval(s.current), s.current = void 0
        }), [l]), e
    };

function YA({
    className: A
}) {
    return c.jsx(Bo, {
        className: A
    })
}
const ho = 1.55,
    po = 1.4,
    Co = "voice-wav",
    Eo = "shout",
    bo = "User",
    ko = {
        bands: 4,
        loPass: 0,
        hiPass: 400
    },
    NA = [300, 300];

function vo() {
    const A = pe(),
        e = w(f => f.voiceMode === "advanced"),
        t = z([G.Source.Microphone]),
        n = t.find(f => f.publication.trackName === Co),
        s = t.find(f => f.publication.trackName === Eo);
    let r = xA(s ? .publication.audioTrack, ko);
    r.length === 0 && (r = [0, 0, 0, 0]), r.map(f => f * po);
    let a = OA(s ? .publication.audioTrack),
        i = OA(n ? .publication.audioTrack);
    const l = a.audioData.map((f, p) => {
            const h = i.audioData[p];
            return f > 0 && h > 0 ? (f + h) / 2 : f > 0 ? f : h
        }),
        d = a.cumulativeAudioData.map((f, p) => {
            const h = i.cumulativeAudioData[p];
            return f > 0 && h > 0 ? (f + h) / 2 : f > 0 ? f : h
        }),
        u = w(f => f.server.remoteState),
        m = t.find(f => f.participant.identity === bo),
        g = (xA(m, {
            bands: 1,
            loPass: 0,
            hiPass: 400
        })[0] ? ? 0) * ho;
    return {
        remoteState: u,
        userVolume: g,
        isAdvanced: e,
        avgMag: l,
        cumulativeAudio: d,
        isDarkMode: A,
        standardBloopVolumes: r
    }
}

function Bo({
    className: A
}) {
    const {
        remoteState: e,
        userVolume: t,
        isAdvanced: n,
        avgMag: s,
        cumulativeAudio: r,
        isDarkMode: a,
        standardBloopVolumes: i
    } = vo(), [l, d] = o.useState(NA), {
        canvasSizeRef: u,
        handleCanvasSizeUpdate: m
    } = Ve(NA), g = o.useRef(void 0), f = o.useCallback(Q => {
        d([Q.width, Q.height])
    }, []), p = o.useRef([0, 0, 0, 0]);
    o.useEffect(() => {
        e === Y.Connecting && (p.current = [0, 0, 0, 0])
    }, [e]);
    const h = o.useRef(performance.now());
    o.useEffect(() => {
        const Q = performance.now();
        e === Y.Speaking && Q - h.current > 50 && (h.current = Q, p.current = p.current.map((q, H) => q + s[H]))
    }, [e, s]);
    const [E, C] = nA(oA(Y.Listening, e)), [y, I] = nA(oA(Y.Speaking, e)), [v, M] = nA(oA(Y.Thinking, e)), [k, B] = nA(oA(Y.Halted, e)), [S, O] = o.useState(performance.now() / 1e3);
    o.useEffect(() => {
        const Q = setInterval(() => {
            O(performance.now() / 1e3)
        }, qA);
        return () => clearInterval(Q)
    }, []);
    const j = o.useMemo(() => performance.now() / 1e3, []),
        [J, L] = o.useState(1e5),
        W = o.useRef(e);
    o.useEffect(() => {
        e === Y.Connecting ? L(1e5) : W.current === Y.Connecting && L(S), W.current = e
    }, [e, S]);
    const x = qe(n),
        P = n ? s : i,
        AA = E === 1 || y === 1,
        U = He({
            viewport: l,
            canvasSize: u.current,
            shouldMeasurePerf: AA,
            source: "VoiceMode"
        }),
        T = Ke({
            shouldCalibrate: AA,
            viewport: l,
            initialScale: 1
        });
    return g.current = {
        time: S - j,
        micLevel: t,
        stateListen: E,
        listenTimestamp: Math.max(C - j, 0),
        stateThink: v,
        thinkTimestamp: Math.max(M - j, 0),
        stateSpeak: y,
        speakTimestamp: Math.max(I - j, 0),
        readyTimestamp: J - j,
        stateHalt: k,
        haltTimestamp: Math.max(B - j, 0),
        touchDownTimestamp: 0,
        touchUpTimestamp: 0,
        stateFailedToConnect: 0,
        failedToConnectTimestamp: 0,
        avgMag: P,
        cumulativeAudio: r ? ? p.current,
        isNewBloop: !0,
        isAdvancedBloop: n,
        bloopColorMain: Array.from(x.bloopColorMain),
        bloopColorLow: Array.from(x.bloopColorLow),
        bloopColorMid: Array.from(x.bloopColorMid),
        bloopColorHigh: Array.from(x.bloopColorHigh),
        isDarkMode: a,
        screenScaleFactor: window.devicePixelRatio,
        viewport: l,
        silenceAmount: 0,
        silenceTimestamp: 0,
        fadeBloopWhileListening: !1
    }, c.jsx(_e, {
        className: aA("flex items-center justify-center", A),
        variablesRef: g,
        onViewportUpdate: f,
        textureImage: ze,
        textureName: "uTextureNoise",
        onGlAvailable: U,
        onCanvasSizeUpdate: m,
        scale: T,
        GLUniformsSetter: $e,
        vert: At,
        frag: et
    })
}
const So = A => o.createElement("svg", {
        width: 22,
        height: 22,
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...A
    }, o.createElement("path", {
        d: "M13.9167 2.83333C12.628 2.83333 11.5833 3.878 11.5833 5.16667C11.5833 6.45533 12.628 7.5 13.9167 7.5C15.2053 7.5 16.25 6.45533 16.25 5.16667C16.25 3.878 15.2053 2.83333 13.9167 2.83333ZM9.39702 4C9.91507 1.98723 11.7422 0.5 13.9167 0.5C16.0911 0.5 17.9183 1.98723 18.4363 4H20.3333C20.9777 4 21.5 4.52233 21.5 5.16667C21.5 5.811 20.9777 6.33333 20.3333 6.33333H18.4363C17.9183 8.3461 16.0911 9.83333 13.9167 9.83333C11.7422 9.83333 9.91507 8.3461 9.39702 6.33333H1.66667C1.02233 6.33333 0.5 5.811 0.5 5.16667C0.5 4.52233 1.02233 4 1.66667 4H9.39702ZM8.08333 14.5C6.79467 14.5 5.75 15.5447 5.75 16.8333C5.75 18.122 6.79467 19.1667 8.08333 19.1667C9.372 19.1667 10.4167 18.122 10.4167 16.8333C10.4167 15.5447 9.372 14.5 8.08333 14.5ZM3.56369 15.6667C4.08174 13.6539 5.90885 12.1667 8.08333 12.1667C10.2578 12.1667 12.0849 13.6539 12.603 15.6667H20.3333C20.9777 15.6667 21.5 16.189 21.5 16.8333C21.5 17.4777 20.9777 18 20.3333 18H12.603C12.0849 20.0128 10.2578 21.5 8.08333 21.5C5.90885 21.5 4.08174 20.0128 3.56369 18H1.66667C1.02233 18 0.5 17.4777 0.5 16.8333C0.5 16.189 1.02233 15.6667 1.66667 15.6667H3.56369Z",
        fill: "currentColor"
    })),
    Io = ({
        conversationId: A
    }) => {
        const e = z(),
            [t, n] = o.useState(!1),
            [s, r] = o.useState(!1),
            {
                voiceName: a
            } = XA(),
            i = o.useCallback(() => {
                e && e.length > 0 && e.forEach(m => {
                    const {
                        publication: g
                    } = m;
                    g.audioTrack instanceof CA ? (r(g.audioTrack.isMuted), g.audioTrack.mute()) : g.audioTrack instanceof pA && g.audioTrack.setMuted(!0)
                })
            }, [e]),
            l = o.useCallback(() => {
                e && e.length > 0 && e.forEach(m => {
                    const {
                        publication: g
                    } = m;
                    g.audioTrack instanceof CA ? s || g.audioTrack.unmute() : g.audioTrack instanceof pA && g.audioTrack.setMuted(!1)
                })
            }, [e, s]),
            d = () => {
                Z.voiceSelectionShown.click({
                    voice: a
                }), i(), n(!0)
            },
            u = () => {
                l(), n(!1)
            };
        return c.jsxs("div", {
            className: "relative h-[40px] w-[40px]",
            children: [c.jsx($, {
                onClick: d,
                icon: So,
                iconColor: "text-token-text-secondary",
                className: "h-[40px] w-[40px] bg-transparent hover:bg-black/10 active:bg-black/20 dark:bg-transparent dark:hover:bg-white/5 dark:active:bg-white/10",
                iconSize: "icon-md"
            }), t && c.jsx(tt, {
                conversationId: A,
                onClose: u
            })]
        })
    };
class Mo extends Worker {
    constructor(e, t) {
        const n = String(e);
        super(n.includes("://") && !n.startsWith(location.origin) ? URL.createObjectURL(new Blob([`import("${n}")`], {
            type: "text/javascript"
        })) : e, t)
    }
}

function wo(A = {}) {
    const [e, t] = o.useState(!1), [n, s] = o.useState(!1), [r, a] = o.useState(!1);
    let i = ot().microphoneTrack;
    const [l, d] = o.useState();
    A.trackRef && (i = A.trackRef.publication);
    const u = o.useCallback(async m => {
        if (m) {
            const {
                KrispNoiseFilter: g,
                isKrispNoiseFilterSupported: f
            } = await FA(async () => {
                const {
                    KrispNoiseFilter: p,
                    isKrispNoiseFilterSupported: h
                } = await
                import ("./gzssobpk1wy3vqrp.js");
                return {
                    KrispNoiseFilter: p,
                    isKrispNoiseFilterSupported: h
                }
            }, []);
            if (!f()) {
                console.warn("Krisp noise filter is not supported in this browser");
                return
            }
            l || d(g(A.filterOptions))
        }
        t(g => (g !== m && s(!0), m))
    }, []);
    return o.useEffect(() => {
        var m;
        if (i && i.track instanceof CA && l) {
            const g = i.track.getProcessor();
            g && g.name === "livekit-noise-filter" ? (s(!0), g.setEnabled(e).finally(() => {
                s(!1), a(e)
            })) : !g && e && (s(!0), (m = i ? .track) == null || m.setProcessor(l).then(() => l.setEnabled(e)).then(() => {
                a(!0)
            }).catch(f => {
                a(!1), console.error(f)
            }).finally(() => {
                s(!1)
            }))
        }
    }, [e, i, l]), {
        setNoiseFilterEnabled: u,
        isNoiseFilterEnabled: r,
        isNoiseFilterPending: n,
        processor: l
    }
}
const yo = o.memo(function() {
        const e = Ce("989226566").value,
            {
                setNoiseFilterEnabled: t
            } = wo();
        return o.useEffect(() => {
            t(e)
        }, [e, t]), null
    }),
    xo = new Mo(new URL("https://cdn.oaistatic.com/assets/livekit-client.e2ee.worker-DK0iMXIf.js",
        import.meta.url), {
        type: "module"
    }),
    Qo = o.memo(function({
        children: e
    }) {
        const t = o.useRef({
                keyProvider: new at
            }).current,
            [n, s] = o.useState(!1),
            {
                token: r,
                url: a,
                e2eeKey: i
            } = w(m => m.credentials),
            l = ut(),
            d = w(m => m.isVoiceModeActive),
            u = w(m => m.audioInputDevice ? .deviceId);
        return o.useEffect(() => {
            const m = r && a && i;
            !n && m ? t.keyProvider.setKey(i).then(() => {
                s(!0)
            }) : n && !m && s(!1)
        }, [r, a, i, n, t]), d ? c.jsxs(ht, { ...l,
            connect: !0,
            token: r ? ? void 0,
            serverUrl: a ? ? void 0,
            audio: {
                deviceId: {
                    ideal: u,
                    exact: u
                },
                noiseSuppression: !0,
                echoCancellation: !0
            },
            options: {
                e2ee: {
                    keyProvider: t.keyProvider,
                    worker: xo
                }
            },
            children: [e, n && r && a && c.jsx(nt, {}), n && r && a && c.jsx(Jt, {}), n && r && a && c.jsx(yo, {})]
        }) : null
    }),
    Vo = Ee(() => FA(() =>
        import ("./g665zdx0ev5b8gwk.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28])).then(A => A.VoiceModeDevPanel));

function Ro({
    conversationId: A
}) {
    const [e, t] = o.useState(!1), n = w(u => u.isVoiceModeActive), s = w(u => u.server.voiceConnectionQuality), r = Re(), a = w(u => u.screenshare != null), i = w(u => u.video != null), l = F();
    Kt();
    const d = Ae({
        conversationId: A
    });
    return be(() => {
        n && d()
    }), o.useEffect(() => {
        const u = new qt;
        return n ? u.enable() : u.disable(), () => {
            u.disable()
        }
    }, [n]), c.jsxs(Qo, {
        children: [c.jsx(_, {
            children: n ? c.jsx(R.div, {
                className: "fixed left-0 top-0 z-50 flex h-full w-full flex-col bg-token-main-surface-primary",
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                variants: sA,
                children: c.jsxs(R.div, {
                    className: "relative h-full w-full",
                    variants: sA,
                    children: [c.jsxs(R.div, {
                        variants: sA,
                        className: "flex h-full w-full flex-col justify-between gap-6",
                        children: [c.jsxs(R.div, {
                            className: "relative mt-6 flex w-full justify-center",
                            children: [c.jsx("div", {
                                className: "flex w-full items-center justify-center",
                                children: (a || i) && c.jsx(YA, {
                                    className: "h-16 w-16"
                                })
                            }), c.jsx("div", {
                                className: "mr-4",
                                children: c.jsx(Io, {
                                    conversationId: A
                                })
                            })]
                        }), c.jsxs("div", {
                            className: "flex h-full min-h-0 items-center justify-center",
                            children: [c.jsx(mo, {
                                children: c.jsx(YA, {
                                    className: "h-max min-h-bloop w-max min-w-bloop"
                                })
                            }), c.jsx(_, {
                                children: e ? c.jsx(Vo, {
                                    conversationId: A
                                }) : null
                            })]
                        }), c.jsx(R.div, {
                            className: "mb-6 flex justify-center",
                            children: c.jsx(io, {
                                conversationId: A
                            })
                        })]
                    }), c.jsx(R.div, {
                        className: "absolute bottom-0 right-0 flex w-auto items-center justify-end p-4",
                        variants: sA,
                        children: r ? c.jsx(Te, {
                            onClick: () => t(u => !u),
                            icon: je
                        }) : null
                    })]
                })
            }) : null
        }), s === HA.Poor && c.jsx("div", {
            className: "absolute left-1/2 top-6 z-50 -translate-x-1/2 transform",
            children: c.jsx("div", {
                className: "inline-flex flex-col items-center rounded-full border border-token-border-light bg-token-main-surface-primary px-6 py-3",
                children: c.jsx("span", {
                    className: "text-token-text-secondary",
                    children: l.formatMessage({
                        id: "YE2Eng",
                        defaultMessage: "Poor connection"
                    })
                })
            })
        })]
    })
}
const sA = {
        hidden: {
            opacity: 0,
            transform: "blur(4px)"
        },
        visible: {
            transform: "blur(0px)",
            opacity: 1
        },
        exit: {
            opacity: 0,
            transform: "blur(4px)"
        }
    },
    Go = Object.freeze(Object.defineProperty({
        __proto__: null,
        VoiceModeLayout: Ro
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    no as u, Go as v
};
//# sourceMappingURL=chg8wfajgdiazkpw.js.map