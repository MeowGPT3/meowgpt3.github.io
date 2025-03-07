import {
    fH as U,
    N as L,
    fI as E,
    fJ as k,
    eE as S,
    fK as P,
    fL as B,
    r as O,
    bj as M,
    Z as F
} from "./bq4rrqi54riy5k2e.js";
import {
    cO as j
} from "./lwme42j7zzyr3q7j.js";
import {
    L as C
} from "./gy64pge8qevmvg7e.js";
import {
    r as p,
    c as Q,
    v as V
} from "./mna1wiucqak6lqzp.js";

function A() {
    if ("MediaSource" in window) {
        const e = s => U(s) && MediaSource.isTypeSupported(s);
        if (e("audio/aac")) return "aac";
        if (e("audio/mpeg")) return "mp3";
        if (e("audio/ogg")) return "ogg"
    }
}

function J({
    conversationId: e,
    messageId: s
}) {
    const {
        voiceName: n
    } = j(), u = () => F.synthesize({
        message_id: s,
        conversation_id: e,
        voice: n,
        format: A()
    }), t = `${e}.${s}.${n}`;
    return $(u, t)
}

function $(e, s) {
    const [n, u] = p.useState(!1), t = p.useRef({
        isMediaSourceAvailable: h(),
        mediaSourceFormat: A() ? ? "n/a",
        playPromise: null,
        shouldAbortQueuedPlayback: !1
    }).current, r = Q(), d = L(), f = E(), o = k(a => a.isPlaying && a.sourceUrl === i.get(s) ? .src), c = p.useCallback(async () => {
        if (!f) return;
        u(!0);
        const a = {
            isMediaSourceAvailable: t.isMediaSourceAvailable,
            format: t.mediaSourceFormat
        };
        try {
            const m = await x({
                key: s,
                onStreamingError: y => {
                    S.readAloud.error(y, a), u(!1), d.danger(r.formatMessage(w.playbackError, {
                        error: y.message
                    }))
                },
                onStreamingStart: () => {
                    u(!1)
                },
                fetchAudioDataResponse: e
            });
            if (t.shouldAbortQueuedPlayback) {
                t.shouldAbortQueuedPlayback = !1;
                return
            }
            f.changeSource(m), t.playPromise = f.play()
        } catch (m) {
            S.readAloud.error(m, a), u(!1), d.danger(r.formatMessage(w.playbackError, {
                error: m.message
            }))
        }
    }, [f, t, s, d, r, e]), b = p.useCallback(() => {
        const a = P();
        a && (t.playPromise ? t.playPromise.then(() => {
            a.stop(), t.playPromise = null
        }) : a.stop())
    }, [t]), l = p.useCallback(() => {
        const a = P();
        a && (a.state.isPlaying && a.state.sourceUrl === i.get(s) ? .src ? b() : (S.readAloud.click({
            isMediaSourceAvailable: t.isMediaSourceAvailable,
            format: t.mediaSourceFormat
        }), c()))
    }, [s, t, c, b]);
    p.useEffect(() => {
        n && o && u(!1)
    }, [n, o]);
    const g = p.useRef(s);
    return p.useEffect(() => {
        g.current = s
    }), p.useEffect(() => (t.shouldAbortQueuedPlayback = !1, () => {
        const a = B();
        a.isPlaying && a.sourceUrl === i.get(g.current) ? .src ? b() : t.shouldAbortQueuedPlayback = !0
    }), [t, b]), {
        togglePlayback: l,
        isPlaying: o,
        isLoading: n
    }
}
async function R(e) {
    const s = await e(),
        n = s.headers.get("content-type") ? ? "audio/aac";
    return {
        response: s,
        format: n
    }
}
async function x(e) {
    return h() ? T(e) : N(e)
}
async function N({
    key: e,
    fetchAudioDataResponse: s
}) {
    const n = i.get(e);
    if (n ? .blob) return n.src;
    const {
        response: u,
        format: t
    } = await R(s), r = await u.arrayBuffer(), d = new Blob([r], {
        type: t
    }), f = v({
        key: e,
        src: URL.createObjectURL(d),
        format: t,
        blob: d
    });
    return i.set(e, f), f.src
}
async function T({
    key: e,
    onStreamingError: s,
    onStreamingStart: n,
    fetchAudioDataResponse: u
}) {
    let t = i.get(e);
    t ? .streaming && (i.delete(e), t = null);
    let r, d;
    const f = q(),
        o = new f;
    if (t) r = t, r.src = URL.createObjectURL(o);
    else {
        const {
            format: l,
            response: g
        } = await R(u);
        d = g, r = v({
            key: e,
            src: URL.createObjectURL(o),
            format: l
        })
    }
    const c = _(r.id),
        b = {
            sourceopen: async () => {
                c("sourceopen");
                const l = o.addSourceBuffer(r.format),
                    g = async () => {
                        l.updating && await new Promise(a => l.addEventListener("updateend", a, {
                            once: !0
                        }))
                    };
                if (r.segments.length && !r.streaming) {
                    c("streaming from cache"), r.streaming = !0, n();
                    for (const a of r.segments) l.appendBuffer(a), await g();
                    o.readyState === "open" && o.endOfStream(), r.streaming = !1, c("done streaming from cache");
                    return
                }
                if (d) {
                    c("fetching audio");
                    try {
                        const a = d.body ? .getReader();
                        if (!a) return;
                        for (; i.get(e) ? .id === r.id;) {
                            const {
                                done: m,
                                value: y
                            } = await a.read();
                            if (m) {
                                c("done streaming"), r.streaming = !1, o.readyState === "open" && o.endOfStream();
                                break
                            }
                            if (!Array.from(o.sourceBuffers).includes(l)) {
                                c("stop streaming, source buffer removed"), r.streaming = !1;
                                break
                            }
                            r.streaming || (c("start streaming"), r.streaming = !0, n()), l.appendBuffer(y), r.segments.push(y), await g()
                        }
                    } catch (a) {
                        if (c("error while streaming", a), r.streaming = !1, o.readyState === "open") try {
                            o.endOfStream("network")
                        } catch (m) {
                            S.readAloud.error(m)
                        }
                        i.delete(e), s(a)
                    }
                }
            },
            sourceclose: () => {
                c("sourceclose"), r.streaming && (r.streaming = !1, i.get(e) ? .id === r.id && (c("sourceclosed while streaming, cleaning up cache"), i.delete(e)))
            },
            sourceended: M
        };
    for (const [l, g] of Object.entries(b)) o.addEventListener(l, () => {
        try {
            return g()
        } catch (a) {
            S.readAloud.error(a)
        }
    });
    return i.set(e, r), r.src
}
const w = O({
        playbackError: {
            id: "useVoiceReadAloudAudio.playbackError",
            defaultMessage: "Failed to play message"
        }
    }),
    _ = e => M;

function q() {
    return h() ? window.MediaSource : null
}

function h() {
    return !!A()
}
const v = e => ({
        id: V(),
        segments: [],
        streaming: !1,
        ...e
    }),
    i = new C({
        capacity: 50,
        dispose: e => {
            URL.revokeObjectURL(e.src)
        }
    });
export {
    $ as a, A as g, J as u
};
//# sourceMappingURL=incso7gaflms21pb.js.map