(function() {
    "use strict";

    function L(e, t, n, r) {
        function a(i) {
            return i instanceof n ? i : new n(function(l) {
                l(i)
            })
        }
        return new(n || (n = Promise))(function(i, l) {
            function w(I) {
                try {
                    k(r.next(I))
                } catch (C) {
                    l(C)
                }
            }

            function m(I) {
                try {
                    k(r.throw(I))
                } catch (C) {
                    l(C)
                }
            }

            function k(I) {
                I.done ? i(I.value) : a(I.value).then(w, m)
            }
            k((r = r.apply(e, t || [])).next())
        })
    }
    typeof SuppressedError == "function" && SuppressedError;
    var N = {
            exports: {}
        },
        we = N.exports,
        ee;

    function me() {
        return ee || (ee = 1, function(e) {
            (function(t, n) {
                e.exports ? e.exports = n() : t.log = n()
            })(we, function() {
                var t = function() {},
                    n = "undefined",
                    r = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent),
                    a = ["trace", "debug", "info", "warn", "error"],
                    i = {},
                    l = null;

                function w(v, _) {
                    var f = v[_];
                    if (typeof f.bind == "function") return f.bind(v);
                    try {
                        return Function.prototype.bind.call(f, v)
                    } catch {
                        return function() {
                            return Function.prototype.apply.apply(f, [v, arguments])
                        }
                    }
                }

                function m() {
                    console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
                }

                function k(v) {
                    return v === "debug" && (v = "log"), typeof console === n ? !1 : v === "trace" && r ? m : console[v] !== void 0 ? w(console, v) : console.log !== void 0 ? w(console, "log") : t
                }

                function I() {
                    for (var v = this.getLevel(), _ = 0; _ < a.length; _++) {
                        var f = a[_];
                        this[f] = _ < v ? t : this.methodFactory(f, v, this.name)
                    }
                    if (this.log = this.debug, typeof console === n && v < this.levels.SILENT) return "No console available for logging"
                }

                function C(v) {
                    return function() {
                        typeof console !== n && (I.call(this), this[v].apply(this, arguments))
                    }
                }

                function b(v, _, f) {
                    return k(v) || C.apply(this, arguments)
                }

                function E(v, _) {
                    var f = this,
                        R, P, o, s = "loglevel";
                    typeof v == "string" ? s += ":" + v : typeof v == "symbol" && (s = void 0);

                    function c(y) {
                        var S = (a[y] || "silent").toUpperCase();
                        if (!(typeof window === n || !s)) {
                            try {
                                window.localStorage[s] = S;
                                return
                            } catch {}
                            try {
                                window.document.cookie = encodeURIComponent(s) + "=" + S + ";"
                            } catch {}
                        }
                    }

                    function u() {
                        var y;
                        if (!(typeof window === n || !s)) {
                            try {
                                y = window.localStorage[s]
                            } catch {}
                            if (typeof y === n) try {
                                var S = window.document.cookie,
                                    A = encodeURIComponent(s),
                                    X = S.indexOf(A + "=");
                                X !== -1 && (y = /^([^;]+)/.exec(S.slice(X + A.length + 1))[1])
                            } catch {}
                            return f.levels[y] === void 0 && (y = void 0), y
                        }
                    }

                    function d() {
                        if (!(typeof window === n || !s)) {
                            try {
                                window.localStorage.removeItem(s)
                            } catch {}
                            try {
                                window.document.cookie = encodeURIComponent(s) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                            } catch {}
                        }
                    }

                    function g(y) {
                        var S = y;
                        if (typeof S == "string" && f.levels[S.toUpperCase()] !== void 0 && (S = f.levels[S.toUpperCase()]), typeof S == "number" && S >= 0 && S <= f.levels.SILENT) return S;
                        throw new TypeError("log.setLevel() called with invalid level: " + y)
                    }
                    f.name = v, f.levels = {
                        TRACE: 0,
                        DEBUG: 1,
                        INFO: 2,
                        WARN: 3,
                        ERROR: 4,
                        SILENT: 5
                    }, f.methodFactory = _ || b, f.getLevel = function() {
                        return o ? ? P ? ? R
                    }, f.setLevel = function(y, S) {
                        return o = g(y), S !== !1 && c(o), I.call(f)
                    }, f.setDefaultLevel = function(y) {
                        P = g(y), u() || f.setLevel(y, !1)
                    }, f.resetLevel = function() {
                        o = null, d(), I.call(f)
                    }, f.enableAll = function(y) {
                        f.setLevel(f.levels.TRACE, y)
                    }, f.disableAll = function(y) {
                        f.setLevel(f.levels.SILENT, y)
                    }, f.rebuild = function() {
                        if (l !== f && (R = g(l.getLevel())), I.call(f), l === f)
                            for (var y in i) i[y].rebuild()
                    }, R = g(l ? l.getLevel() : "WARN");
                    var h = u();
                    h != null && (o = g(h)), I.call(f)
                }
                l = new E, l.getLogger = function(_) {
                    if (typeof _ != "symbol" && typeof _ != "string" || _ === "") throw new TypeError("You must supply a name when creating a logger.");
                    var f = i[_];
                    return f || (f = i[_] = new E(_, l.methodFactory)), f
                };
                var K = typeof window !== n ? window.log : void 0;
                return l.noConflict = function() {
                    return typeof window !== n && window.log === l && (window.log = K), l
                }, l.getLoggers = function() {
                    return i
                }, l.default = l, l
            })
        }(N)), N.exports
    }
    var z = me(),
        Y;
    (function(e) {
        e[e.trace = 0] = "trace", e[e.debug = 1] = "debug", e[e.info = 2] = "info", e[e.warn = 3] = "warn", e[e.error = 4] = "error", e[e.silent = 5] = "silent"
    })(Y || (Y = {}));
    var Z;
    (function(e) {
        e.Default = "livekit", e.Room = "livekit-room", e.Participant = "livekit-participant", e.Track = "livekit-track", e.Publication = "livekit-track-publication", e.Engine = "livekit-engine", e.Signal = "livekit-signal", e.PCManager = "livekit-pc-manager", e.PCTransport = "livekit-pc-transport", e.E2EE = "lk-e2ee"
    })(Z || (Z = {}));
    let Ie = z.getLogger("livekit");
    Object.values(Z).map(e => z.getLogger(e)), Ie.setDefaultLevel(Y.info);
    const p = z.getLogger("lk-e2ee");
    var be = Object.defineProperty,
        Ee = (e, t, n) => t in e ? be(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        te = (e, t, n) => Ee(e, typeof t != "symbol" ? t + "" : t, n);
    class Se {
        constructor() {
            te(this, "_locking"), te(this, "_locks"), this._locking = Promise.resolve(), this._locks = 0
        }
        isLocked() {
            return this._locks > 0
        }
        lock() {
            this._locks += 1;
            let t;
            const n = new Promise(a => t = () => {
                    this._locks -= 1, a()
                }),
                r = this._locking.then(() => t);
            return this._locking = this._locking.then(() => n), r
        }
    }
    var D;
    (function(e) {
        e[e.WAITING = 0] = "WAITING", e[e.RUNNING = 1] = "RUNNING", e[e.COMPLETED = 2] = "COMPLETED"
    })(D || (D = {}));
    class ke {
        constructor() {
            this.pendingTasks = new Map, this.taskMutex = new Se, this.nextTaskIndex = 0
        }
        run(t) {
            return L(this, void 0, void 0, function*() {
                const n = {
                    id: this.nextTaskIndex++,
                    enqueuedAt: Date.now(),
                    status: D.WAITING
                };
                this.pendingTasks.set(n.id, n);
                const r = yield this.taskMutex.lock();
                try {
                    return n.executedAt = Date.now(), n.status = D.RUNNING, yield t()
                } finally {
                    n.status = D.COMPLETED, this.pendingTasks.delete(n.id), r()
                }
            })
        }
        flush() {
            return L(this, void 0, void 0, function*() {
                return this.run(() => L(this, void 0, void 0, function*() {}))
            })
        }
        snapshot() {
            return Array.from(this.pendingTasks.values())
        }
    }
    const q = "AES-GCM",
        _e = 10,
        J = {
            key: 10,
            delta: 3,
            audio: 1,
            empty: 0
        },
        ne = 12,
        Ce = {
            sharedKey: !1,
            ratchetSalt: "LKFrameEncryptionKey",
            ratchetWindowSize: 8,
            failureTolerance: _e,
            keyringSize: 16
        },
        Le = 100,
        re = 2e3;
    class Ke extends Error {
        constructor(t, n) {
            super(n || "an error has occured"), this.code = t
        }
    }
    var ie;
    (function(e) {
        e[e.NotAllowed = 0] = "NotAllowed", e[e.ServerUnreachable = 1] = "ServerUnreachable", e[e.InternalError = 2] = "InternalError", e[e.Cancelled = 3] = "Cancelled", e[e.LeaveRequest = 4] = "LeaveRequest"
    })(ie || (ie = {}));
    var j;
    (function(e) {
        e.PermissionDenied = "PermissionDenied", e.NotFound = "NotFound", e.DeviceInUse = "DeviceInUse", e.Other = "Other"
    })(j || (j = {})),
    function(e) {
        function t(n) {
            if (n && "name" in n) return n.name === "NotFoundError" || n.name === "DevicesNotFoundError" ? e.NotFound : n.name === "NotAllowedError" || n.name === "PermissionDeniedError" ? e.PermissionDenied : n.name === "NotReadableError" || n.name === "TrackStartError" ? e.DeviceInUse : e.Other
        }
        e.getFailure = t
    }(j || (j = {}));
    var x;
    (function(e) {
        e[e.InvalidKey = 0] = "InvalidKey", e[e.MissingKey = 1] = "MissingKey", e[e.InternalError = 2] = "InternalError"
    })(x || (x = {}));
    class T extends Ke {
        constructor(t) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x.InternalError,
                r = arguments.length > 2 ? arguments[2] : void 0;
            super(40, t), this.reason = n, this.participantIdentity = r
        }
    }
    var se;
    (function(e) {
        e.SetKey = "setKey", e.RatchetRequest = "ratchetRequest", e.KeyRatcheted = "keyRatcheted"
    })(se || (se = {}));
    var F;
    (function(e) {
        e.KeyRatcheted = "keyRatcheted"
    })(F || (F = {}));
    var oe;
    (function(e) {
        e.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", e.EncryptionError = "encryptionError"
    })(oe || (oe = {}));
    var O;
    (function(e) {
        e.Error = "cryptorError"
    })(O || (O = {}));
    var H = {
            exports: {}
        },
        ae;

    function xe() {
        if (ae) return H.exports;
        ae = 1;
        var e = typeof Reflect == "object" ? Reflect : null,
            t = e && typeof e.apply == "function" ? e.apply : function(s, c, u) {
                return Function.prototype.apply.call(s, c, u)
            },
            n;
        e && typeof e.ownKeys == "function" ? n = e.ownKeys : Object.getOwnPropertySymbols ? n = function(s) {
            return Object.getOwnPropertyNames(s).concat(Object.getOwnPropertySymbols(s))
        } : n = function(s) {
            return Object.getOwnPropertyNames(s)
        };

        function r(o) {
            console && console.warn && console.warn(o)
        }
        var a = Number.isNaN || function(s) {
            return s !== s
        };

        function i() {
            i.init.call(this)
        }
        H.exports = i, H.exports.once = f, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
        var l = 10;

        function w(o) {
            if (typeof o != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o)
        }
        Object.defineProperty(i, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return l
            },
            set: function(o) {
                if (typeof o != "number" || o < 0 || a(o)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + o + ".");
                l = o
            }
        }), i.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, i.prototype.setMaxListeners = function(s) {
            if (typeof s != "number" || s < 0 || a(s)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + s + ".");
            return this._maxListeners = s, this
        };

        function m(o) {
            return o._maxListeners === void 0 ? i.defaultMaxListeners : o._maxListeners
        }
        i.prototype.getMaxListeners = function() {
            return m(this)
        }, i.prototype.emit = function(s) {
            for (var c = [], u = 1; u < arguments.length; u++) c.push(arguments[u]);
            var d = s === "error",
                g = this._events;
            if (g !== void 0) d = d && g.error === void 0;
            else if (!d) return !1;
            if (d) {
                var h;
                if (c.length > 0 && (h = c[0]), h instanceof Error) throw h;
                var y = new Error("Unhandled error." + (h ? " (" + h.message + ")" : ""));
                throw y.context = h, y
            }
            var S = g[s];
            if (S === void 0) return !1;
            if (typeof S == "function") t(S, this, c);
            else
                for (var A = S.length, X = K(S, A), u = 0; u < A; ++u) t(X[u], this, c);
            return !0
        };

        function k(o, s, c, u) {
            var d, g, h;
            if (w(c), g = o._events, g === void 0 ? (g = o._events = Object.create(null), o._eventsCount = 0) : (g.newListener !== void 0 && (o.emit("newListener", s, c.listener ? c.listener : c), g = o._events), h = g[s]), h === void 0) h = g[s] = c, ++o._eventsCount;
            else if (typeof h == "function" ? h = g[s] = u ? [c, h] : [h, c] : u ? h.unshift(c) : h.push(c), d = m(o), d > 0 && h.length > d && !h.warned) {
                h.warned = !0;
                var y = new Error("Possible EventEmitter memory leak detected. " + h.length + " " + String(s) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                y.name = "MaxListenersExceededWarning", y.emitter = o, y.type = s, y.count = h.length, r(y)
            }
            return o
        }
        i.prototype.addListener = function(s, c) {
            return k(this, s, c, !1)
        }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(s, c) {
            return k(this, s, c, !0)
        };

        function I() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function C(o, s, c) {
            var u = {
                    fired: !1,
                    wrapFn: void 0,
                    target: o,
                    type: s,
                    listener: c
                },
                d = I.bind(u);
            return d.listener = c, u.wrapFn = d, d
        }
        i.prototype.once = function(s, c) {
            return w(c), this.on(s, C(this, s, c)), this
        }, i.prototype.prependOnceListener = function(s, c) {
            return w(c), this.prependListener(s, C(this, s, c)), this
        }, i.prototype.removeListener = function(s, c) {
            var u, d, g, h, y;
            if (w(c), d = this._events, d === void 0) return this;
            if (u = d[s], u === void 0) return this;
            if (u === c || u.listener === c) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete d[s], d.removeListener && this.emit("removeListener", s, u.listener || c));
            else if (typeof u != "function") {
                for (g = -1, h = u.length - 1; h >= 0; h--)
                    if (u[h] === c || u[h].listener === c) {
                        y = u[h].listener, g = h;
                        break
                    }
                if (g < 0) return this;
                g === 0 ? u.shift() : v(u, g), u.length === 1 && (d[s] = u[0]), d.removeListener !== void 0 && this.emit("removeListener", s, y || c)
            }
            return this
        }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(s) {
            var c, u, d;
            if (u = this._events, u === void 0) return this;
            if (u.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : u[s] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete u[s]), this;
            if (arguments.length === 0) {
                var g = Object.keys(u),
                    h;
                for (d = 0; d < g.length; ++d) h = g[d], h !== "removeListener" && this.removeAllListeners(h);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if (c = u[s], typeof c == "function") this.removeListener(s, c);
            else if (c !== void 0)
                for (d = c.length - 1; d >= 0; d--) this.removeListener(s, c[d]);
            return this
        };

        function b(o, s, c) {
            var u = o._events;
            if (u === void 0) return [];
            var d = u[s];
            return d === void 0 ? [] : typeof d == "function" ? c ? [d.listener || d] : [d] : c ? _(d) : K(d, d.length)
        }
        i.prototype.listeners = function(s) {
            return b(this, s, !0)
        }, i.prototype.rawListeners = function(s) {
            return b(this, s, !1)
        }, i.listenerCount = function(o, s) {
            return typeof o.listenerCount == "function" ? o.listenerCount(s) : E.call(o, s)
        }, i.prototype.listenerCount = E;

        function E(o) {
            var s = this._events;
            if (s !== void 0) {
                var c = s[o];
                if (typeof c == "function") return 1;
                if (c !== void 0) return c.length
            }
            return 0
        }
        i.prototype.eventNames = function() {
            return this._eventsCount > 0 ? n(this._events) : []
        };

        function K(o, s) {
            for (var c = new Array(s), u = 0; u < s; ++u) c[u] = o[u];
            return c
        }

        function v(o, s) {
            for (; s + 1 < o.length; s++) o[s] = o[s + 1];
            o.pop()
        }

        function _(o) {
            for (var s = new Array(o.length), c = 0; c < s.length; ++c) s[c] = o[c].listener || o[c];
            return s
        }

        function f(o, s) {
            return new Promise(function(c, u) {
                function d(h) {
                    o.removeListener(s, g), u(h)
                }

                function g() {
                    typeof o.removeListener == "function" && o.removeListener("error", d), c([].slice.call(arguments))
                }
                P(o, s, g, {
                    once: !0
                }), s !== "error" && R(o, d, {
                    once: !0
                })
            })
        }

        function R(o, s, c) {
            typeof o.on == "function" && P(o, "error", s, c)
        }

        function P(o, s, c, u) {
            if (typeof o.on == "function") u.once ? o.once(s, c) : o.on(s, c);
            else if (typeof o.addEventListener == "function") o.addEventListener(s, function d(g) {
                u.once && o.removeEventListener(s, d), c(g)
            });
            else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof o)
        }
        return H.exports
    }
    var ce = xe();

    function Re(e) {
        return "type" in e
    }

    function Pe(e) {
        return L(this, arguments, void 0, function(t) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    name: q
                },
                r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "encrypt";
            return function*() {
                return crypto.subtle.importKey("raw", t, n, !1, r === "derive" ? ["deriveBits", "deriveKey"] : ["encrypt", "decrypt"])
            }()
        })
    }

    function ue(e, t) {
        const r = new TextEncoder().encode(t);
        switch (e) {
            case "HKDF":
                return {
                    name: "HKDF",
                    salt: r,
                    hash: "SHA-256",
                    info: new ArrayBuffer(128)
                };
            case "PBKDF2":
                return {
                    name: "PBKDF2",
                    salt: r,
                    hash: "SHA-256",
                    iterations: 1e5
                };
            default:
                throw new Error("algorithm ".concat(e, " is currently unsupported"))
        }
    }

    function le(e, t) {
        return L(this, void 0, void 0, function*() {
            const n = ue(e.algorithm.name, t),
                r = yield crypto.subtle.deriveKey(n, e, {
                    name: q,
                    length: 128
                }, !1, ["encrypt", "decrypt"]);
            return {
                material: e,
                encryptionKey: r
            }
        })
    }

    function Te(e, t) {
        return L(this, void 0, void 0, function*() {
            const n = ue(e.algorithm.name, t);
            return crypto.subtle.deriveBits(n, e, 256)
        })
    }

    function Oe(e) {
        for (var t = 0; t < e.length - 3; t++)
            if (e[t] == 0 && e[t + 1] == 0 && e[t + 2] == 3) return !0;
        return !1
    }

    function Ae(e) {
        const t = [];
        for (var n = e.length, r = 0; r < e.length;) n - r >= 3 && !e[r] && !e[r + 1] && e[r + 2] == 3 ? (t.push(e[r++]), t.push(e[r++]), r++) : t.push(e[r++]);
        return new Uint8Array(t)
    }
    const Me = 2,
        de = 3;

    function De(e) {
        const t = [];
        for (var n = 0, r = 0; r < e.length; ++r) {
            var a = e[r];
            a <= de && n >= Me && (t.push(de), n = 0), t.push(a), a == 0 ? ++n : n = 0
        }
        return new Uint8Array(t)
    }
    class Fe {
        constructor() {
            this.consecutiveSifCount = 0, this.lastSifReceivedAt = 0, this.userFramesSinceSif = 0
        }
        recordSif() {
            var t;
            this.consecutiveSifCount += 1, (t = this.sifSequenceStartedAt) !== null && t !== void 0 || (this.sifSequenceStartedAt = Date.now()), this.lastSifReceivedAt = Date.now()
        }
        recordUserFrame() {
            this.sifSequenceStartedAt !== void 0 && (this.userFramesSinceSif += 1, (this.userFramesSinceSif > this.consecutiveSifCount || Date.now() - this.lastSifReceivedAt > re) && this.reset())
        }
        isSifAllowed() {
            return this.consecutiveSifCount < Le && (this.sifSequenceStartedAt === void 0 || Date.now() - this.sifSequenceStartedAt < re)
        }
        reset() {
            this.userFramesSinceSif = 0, this.consecutiveSifCount = 0, this.sifSequenceStartedAt = void 0
        }
    }
    const fe = new Map;
    class Ue extends ce.EventEmitter {
        encodeFunction(t, n) {
            throw Error("not implemented for subclass")
        }
        decodeFunction(t, n) {
            throw Error("not implemented for subclass")
        }
    }
    class Be extends Ue {
        constructor(t) {
            var n;
            super(), this.sendCounts = new Map, this.keys = t.keys, this.participantIdentity = t.participantIdentity, this.rtpMap = new Map, this.keyProviderOptions = t.keyProviderOptions, this.sifTrailer = (n = t.sifTrailer) !== null && n !== void 0 ? n : Uint8Array.from([]), this.sifGuard = new Fe
        }
        get logContext() {
            return {
                participant: this.participantIdentity,
                mediaTrackId: this.trackId,
                fallbackCodec: this.videoCodec
            }
        }
        setParticipant(t, n) {
            p.debug("setting new participant on cryptor", Object.assign(Object.assign({}, this.logContext), {
                participant: t
            })), this.participantIdentity && p.error("cryptor has already a participant set, participant should have been unset before", Object.assign({}, this.logContext)), this.participantIdentity = t, this.keys = n, this.sifGuard.reset()
        }
        unsetParticipant() {
            p.debug("unsetting participant", this.logContext), this.participantIdentity = void 0
        }
        isEnabled() {
            if (this.participantIdentity) return fe.get(this.participantIdentity)
        }
        getParticipantIdentity() {
            return this.participantIdentity
        }
        getTrackId() {
            return this.trackId
        }
        setVideoCodec(t) {
            this.videoCodec = t
        }
        setRtpMap(t) {
            this.rtpMap = t
        }
        setupTransform(t, n, r, a, i) {
            i && (p.info("setting codec on cryptor to", {
                codec: i
            }), this.videoCodec = i), p.debug("Setting up frame cryptor transform", Object.assign({
                operation: t,
                passedTrackId: a,
                codec: i
            }, this.logContext));
            const l = t === "encode" ? this.encodeFunction : this.decodeFunction,
                w = new TransformStream({
                    transform: l.bind(this)
                });
            n.pipeThrough(w).pipeTo(r).catch(m => {
                p.warn(m), this.emit(O.Error, m instanceof T ? m : new T(m.message, void 0, this.participantIdentity))
            }), this.trackId = a
        }
        setSifTrailer(t) {
            p.debug("setting SIF trailer", Object.assign(Object.assign({}, this.logContext), {
                trailer: t
            })), this.sifTrailer = t
        }
        encodeFunction(t, n) {
            return L(this, void 0, void 0, function*() {
                var r;
                if (!this.isEnabled() || t.data.byteLength === 0) return n.enqueue(t);
                const a = this.keys.getKeySet();
                if (!a) {
                    this.emit(O.Error, new T("key set not found for ".concat(this.participantIdentity, " at index ").concat(this.keys.getCurrentKeyIndex()), x.MissingKey, this.participantIdentity));
                    return
                }
                const {
                    encryptionKey: i
                } = a, l = this.keys.getCurrentKeyIndex();
                if (i) {
                    const m = this.makeIV((r = t.getMetadata().synchronizationSource) !== null && r !== void 0 ? r : -1, t.timestamp);
                    let k = this.getUnencryptedBytes(t);
                    const I = new Uint8Array(t.data, 0, k.unencryptedBytes),
                        C = new Uint8Array(2);
                    C[0] = ne, C[1] = l;
                    try {
                        const b = yield crypto.subtle.encrypt({
                            name: q,
                            iv: m,
                            additionalData: new Uint8Array(t.data, 0, I.byteLength)
                        }, i, new Uint8Array(t.data, k.unencryptedBytes));
                        let E = new Uint8Array(b.byteLength + m.byteLength + C.byteLength);
                        E.set(new Uint8Array(b)), E.set(new Uint8Array(m), b.byteLength), E.set(C, b.byteLength + m.byteLength), k.isH264 && (E = De(E));
                        var w = new Uint8Array(I.byteLength + E.byteLength);
                        return w.set(I), w.set(E, I.byteLength), t.data = w.buffer, n.enqueue(t)
                    } catch (b) {
                        p.error(b)
                    }
                } else p.debug("failed to encrypt, emitting error", this.logContext), this.emit(O.Error, new T("encryption key missing for encoding", x.MissingKey, this.participantIdentity))
            })
        }
        decodeFunction(t, n) {
            return L(this, void 0, void 0, function*() {
                if (!this.isEnabled() || t.data.byteLength === 0) return p.debug("skipping empty frame", this.logContext), this.sifGuard.recordUserFrame(), n.enqueue(t);
                if (je(t.data, this.sifTrailer)) {
                    if (p.debug("enqueue SIF", this.logContext), this.sifGuard.recordSif(), this.sifGuard.isSifAllowed()) return t.data = t.data.slice(0, t.data.byteLength - this.sifTrailer.byteLength), n.enqueue(t);
                    p.warn("SIF limit reached, dropping frame");
                    return
                } else this.sifGuard.recordUserFrame();
                const a = new Uint8Array(t.data)[t.data.byteLength - 1];
                if (!this.keys.hasInvalidKeyAtIndex(a))
                    if (this.keys.getKeySet(a)) try {
                        const i = yield this.decryptFrame(t, a);
                        if (this.keys.decryptionSuccess(a), i) return n.enqueue(i)
                    } catch (i) {
                        i instanceof T && i.reason === x.InvalidKey ? this.keys.hasValidKey && (this.emit(O.Error, i), this.keys.decryptionFailure(a)) : p.warn("decoding frame failed", {
                            error: i
                        })
                    } else p.warn("skipping decryption due to missing key at index ".concat(a)), this.emit(O.Error, new T("missing key at index ".concat(a, " for participant ").concat(this.participantIdentity), x.MissingKey, this.participantIdentity)), this.keys.decryptionFailure(a)
            })
        }
        decryptFrame(t, n) {
            return L(this, arguments, void 0, function(r, a) {
                var i = this;
                let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
                    w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
                        ratchetCount: 0
                    };
                return function*() {
                    var m;
                    const k = i.keys.getKeySet(a);
                    if (!w.encryptionKey && !k) throw new TypeError("no encryption key found for decryption of ".concat(i.participantIdentity));
                    let I = i.getUnencryptedBytes(r);
                    try {
                        const b = new Uint8Array(r.data, 0, I.unencryptedBytes);
                        var C = new Uint8Array(r.data, b.length, r.data.byteLength - b.length);
                        if (I.isH264 && Oe(C)) {
                            C = Ae(C);
                            const s = new Uint8Array(b.byteLength + C.byteLength);
                            s.set(b), s.set(C, b.byteLength), r.data = s.buffer
                        }
                        const E = new Uint8Array(r.data, r.data.byteLength - 2, 2),
                            K = E[0],
                            v = new Uint8Array(r.data, r.data.byteLength - K - E.byteLength, K),
                            _ = b.byteLength,
                            f = r.data.byteLength - (b.byteLength + K + E.byteLength),
                            R = yield crypto.subtle.decrypt({
                                name: q,
                                iv: v,
                                additionalData: new Uint8Array(r.data, 0, b.byteLength)
                            }, (m = w.encryptionKey) !== null && m !== void 0 ? m : k.encryptionKey, new Uint8Array(r.data, _, f)), P = new ArrayBuffer(b.byteLength + R.byteLength), o = new Uint8Array(P);
                        return o.set(new Uint8Array(r.data, 0, b.byteLength)), o.set(new Uint8Array(R), b.byteLength), r.data = P, r
                    } catch (b) {
                        if (i.keyProviderOptions.ratchetWindowSize > 0)
                            if (w.ratchetCount < i.keyProviderOptions.ratchetWindowSize) {
                                p.debug("ratcheting key attempt ".concat(w.ratchetCount, " of ").concat(i.keyProviderOptions.ratchetWindowSize, ", for kind ").concat(r instanceof RTCEncodedAudioFrame ? "audio" : "video"));
                                let E;
                                if ((l ? ? k) === i.keys.getKeySet(a)) {
                                    const v = yield i.keys.ratchetKey(a, !1);
                                    E = yield le(v, i.keyProviderOptions.ratchetSalt)
                                }
                                const K = yield i.decryptFrame(r, a, l || k, {
                                    ratchetCount: w.ratchetCount + 1,
                                    encryptionKey: E ? .encryptionKey
                                });
                                return K && E && (l ? ? k) === i.keys.getKeySet(a) && (i.keys.setKeySet(E, a, !0), i.keys.setCurrentKeyIndex(a)), K
                            } else throw p.warn("maximum ratchet attempts exceeded"), new T("valid key missing for participant ".concat(i.participantIdentity), x.InvalidKey, i.participantIdentity);
                        else throw new T("Decryption failed: ".concat(b.message), x.InvalidKey, i.participantIdentity)
                    }
                }()
            })
        }
        makeIV(t, n) {
            var r;
            const a = new ArrayBuffer(ne),
                i = new DataView(a);
            this.sendCounts.has(t) || this.sendCounts.set(t, Math.floor(Math.random() * 65535));
            const l = (r = this.sendCounts.get(t)) !== null && r !== void 0 ? r : 0;
            return i.setUint32(0, t), i.setUint32(4, n), i.setUint32(8, n - l % 65535), this.sendCounts.set(t, l + 1), a
        }
        getUnencryptedBytes(t) {
            var n, r = {
                unencryptedBytes: 0,
                isH264: !1
            };
            if (Re(t)) {
                let a = (n = this.getVideoCodec(t)) !== null && n !== void 0 ? n : this.videoCodec;
                if (a !== this.detectedCodec && (p.debug("detected different codec", Object.assign({
                        detectedCodec: a,
                        oldCodec: this.detectedCodec
                    }, this.logContext)), this.detectedCodec = a), a === "av1") throw new Error("".concat(a, " is not yet supported for end to end encryption"));
                if (a === "vp8") r.unencryptedBytes = J[t.type];
                else if (a === "vp9") return r.unencryptedBytes = 0, r;
                const i = new Uint8Array(t.data);
                try {
                    const l = Ne(i);
                    if (r.isH264 = a === "h264" || l.some(w => [M.SLICE_IDR, M.SLICE_NON_IDR].includes(he(i[w]))), r.isH264) {
                        for (const w of l) switch (he(i[w])) {
                            case M.SLICE_IDR:
                            case M.SLICE_NON_IDR:
                                return r.unencryptedBytes = w + 2, r;
                            default:
                                break
                        }
                        throw new TypeError("Could not find NALU")
                    }
                } catch {}
                return r.unencryptedBytes = J[t.type], r
            } else return r.unencryptedBytes = J.audio, r
        }
        getVideoCodec(t) {
            if (this.rtpMap.size === 0) return;
            const n = t.getMetadata().payloadType;
            return n ? this.rtpMap.get(n) : void 0
        }
    }

    function Ne(e) {
        const t = [];
        let n = 0,
            r = 0,
            a = e.length - 2;
        for (; r < a;) {
            for (; r < a && !(e[r] === 0 && e[r + 1] === 0 && e[r + 2] === 1);) r++;
            r >= a && (r = e.length);
            let i = r;
            for (; i > n && e[i - 1] === 0;) i--;
            if (n === 0) {
                if (i !== n) throw TypeError("byte stream contains leading data")
            } else t.push(n);
            n = r = r + 3
        }
        return t
    }

    function he(e) {
        return e & qe
    }
    const qe = 31;
    var M;
    (function(e) {
        e[e.SLICE_NON_IDR = 1] = "SLICE_NON_IDR", e[e.SLICE_PARTITION_A = 2] = "SLICE_PARTITION_A", e[e.SLICE_PARTITION_B = 3] = "SLICE_PARTITION_B", e[e.SLICE_PARTITION_C = 4] = "SLICE_PARTITION_C", e[e.SLICE_IDR = 5] = "SLICE_IDR", e[e.SEI = 6] = "SEI", e[e.SPS = 7] = "SPS", e[e.PPS = 8] = "PPS", e[e.AUD = 9] = "AUD", e[e.END_SEQ = 10] = "END_SEQ", e[e.END_STREAM = 11] = "END_STREAM", e[e.FILLER_DATA = 12] = "FILLER_DATA", e[e.SPS_EXT = 13] = "SPS_EXT", e[e.PREFIX_NALU = 14] = "PREFIX_NALU", e[e.SUBSET_SPS = 15] = "SUBSET_SPS", e[e.DPS = 16] = "DPS", e[e.SLICE_AUX = 19] = "SLICE_AUX", e[e.SLICE_EXT = 20] = "SLICE_EXT", e[e.SLICE_LAYER_EXT = 21] = "SLICE_LAYER_EXT"
    })(M || (M = {}));

    function je(e, t) {
        if (t.byteLength === 0) return !1;
        const n = new Uint8Array(e.slice(e.byteLength - t.byteLength));
        return t.every((r, a) => r === n[a])
    }
    class pe extends ce.EventEmitter {
        get hasValidKey() {
            return !this.hasInvalidKeyAtIndex(this.currentKeyIndex)
        }
        constructor(t, n) {
            if (super(), this.currentKeyIndex = 0, n.keyringSize < 1 || n.keyringSize > 256) throw new TypeError("Keyring size needs to be between 1 and 256");
            this.cryptoKeyRing = new Array(n.keyringSize).fill(void 0), this.decryptionFailureCounts = new Array(n.keyringSize).fill(0), this.keyProviderOptions = n, this.ratchetPromiseMap = new Map, this.participantIdentity = t
        }
        hasInvalidKeyAtIndex(t) {
            return this.keyProviderOptions.failureTolerance >= 0 && this.decryptionFailureCounts[t] > this.keyProviderOptions.failureTolerance
        }
        decryptionFailure() {
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.currentKeyIndex;
            this.keyProviderOptions.failureTolerance < 0 || (this.decryptionFailureCounts[t] += 1, this.decryptionFailureCounts[t] > this.keyProviderOptions.failureTolerance && p.warn("key for ".concat(this.participantIdentity, " at index ").concat(t, " is being marked as invalid")))
        }
        decryptionSuccess() {
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.currentKeyIndex;
            this.resetKeyStatus(t)
        }
        resetKeyStatus(t) {
            t === void 0 ? this.decryptionFailureCounts.fill(0) : this.decryptionFailureCounts[t] = 0
        }
        ratchetKey(t) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            const r = t ? ? this.getCurrentKeyIndex(),
                a = this.ratchetPromiseMap.get(r);
            if (typeof a < "u") return a;
            const i = new Promise((l, w) => L(this, void 0, void 0, function*() {
                try {
                    const m = this.getKeySet(r);
                    if (!m) throw new TypeError("Cannot ratchet key without a valid keyset of participant ".concat(this.participantIdentity));
                    const k = m.material,
                        I = yield Pe(yield Te(k, this.keyProviderOptions.ratchetSalt), k.algorithm.name, "derive");
                    n && (yield this.setKeyFromMaterial(I, r, !0), this.emit(F.KeyRatcheted, I, this.participantIdentity, r)), l(I)
                } catch (m) {
                    w(m)
                } finally {
                    this.ratchetPromiseMap.delete(r)
                }
            }));
            return this.ratchetPromiseMap.set(r, i), i
        }
        setKey(t) {
            return L(this, arguments, void 0, function(n) {
                var r = this;
                let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                return function*() {
                    yield r.setKeyFromMaterial(n, a), r.resetKeyStatus(a)
                }()
            })
        }
        setKeyFromMaterial(t, n) {
            return L(this, arguments, void 0, function(r, a) {
                var i = this;
                let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                return function*() {
                    const w = yield le(r, i.keyProviderOptions.ratchetSalt), m = a >= 0 ? a % i.cryptoKeyRing.length : i.currentKeyIndex;
                    p.debug("setting new key with index ".concat(a), {
                        usage: r.usages,
                        algorithm: r.algorithm,
                        ratchetSalt: i.keyProviderOptions.ratchetSalt
                    }), i.setKeySet(w, m, l), m >= 0 && (i.currentKeyIndex = m)
                }()
            })
        }
        setKeySet(t, n) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            this.cryptoKeyRing[n % this.cryptoKeyRing.length] = t, r && this.emit(F.KeyRatcheted, t.material, this.participantIdentity, n)
        }
        setCurrentKeyIndex(t) {
            return L(this, void 0, void 0, function*() {
                this.currentKeyIndex = t % this.cryptoKeyRing.length, this.resetKeyStatus(t)
            })
        }
        getCurrentKeyIndex() {
            return this.currentKeyIndex
        }
        getKeySet(t) {
            return this.cryptoKeyRing[t ? ? this.currentKeyIndex]
        }
    }
    const U = [],
        ye = new Map;
    let $, He = new ke,
        Ge = !1,
        G = !1,
        ge, B = Ce,
        ve = new Map;
    p.setDefaultLevel("info"), onmessage = e => {
        He.run(() => L(void 0, void 0, void 0, function*() {
            const {
                kind: t,
                data: n
            } = e.data;
            switch (t) {
                case "init":
                    p.setLevel(n.loglevel), p.info("worker initialized"), B = n.keyProviderOptions, G = !!n.keyProviderOptions.sharedKey, postMessage({
                        kind: "initAck",
                        data: {
                            enabled: Ge
                        }
                    });
                    break;
                case "enable":
                    Xe(n.enabled, n.participantIdentity), p.info("updated e2ee enabled status for ".concat(n.participantIdentity, " to ").concat(n.enabled)), postMessage(e.data);
                    break;
                case "decode":
                    W(n.participantIdentity, n.trackId).setupTransform(t, n.readableStream, n.writableStream, n.trackId, n.codec);
                    break;
                case "encode":
                    W(n.participantIdentity, n.trackId).setupTransform(t, n.readableStream, n.writableStream, n.trackId, n.codec);
                    break;
                case "setKey":
                    G ? yield ze(n.key, n.keyIndex): n.participantIdentity ? (p.info("set participant sender key ".concat(n.participantIdentity, " index ").concat(n.keyIndex)), yield V(n.participantIdentity).setKey(n.key, n.keyIndex)) : p.error("no participant Id was provided and shared key usage is disabled");
                    break;
                case "removeTransform":
                    Ve(n.trackId, n.participantIdentity);
                    break;
                case "updateCodec":
                    W(n.participantIdentity, n.trackId).setVideoCodec(n.codec);
                    break;
                case "setRTPMap":
                    ve = n.map, U.forEach(l => {
                        l.getParticipantIdentity() === n.participantIdentity && l.setRtpMap(n.map)
                    });
                    break;
                case "ratchetRequest":
                    We(n);
                    break;
                case "setSifTrailer":
                    Je(n.trailer);
                    break
            }
        }))
    };

    function We(e) {
        return L(this, void 0, void 0, function*() {
            if (G) {
                const t = Q();
                yield t.ratchetKey(e.keyIndex), t.resetKeyStatus()
            } else if (e.participantIdentity) {
                const t = V(e.participantIdentity);
                yield t.ratchetKey(e.keyIndex), t.resetKeyStatus()
            } else p.error("no participant Id was provided for ratchet request and shared key usage is disabled")
        })
    }

    function W(e, t) {
        let n = U.filter(a => a.getTrackId() === t);
        if (n.length > 1) {
            const a = n.map(i => ({
                participant: i.getParticipantIdentity()
            })).join(",");
            p.error("Found multiple cryptors for the same trackID ".concat(t, ". target participant: ").concat(e, " "), {
                participants: a
            })
        }
        let r = n[0];
        if (r) e !== r.getParticipantIdentity() && r.setParticipant(e, V(e));
        else {
            if (p.info("creating new cryptor for", {
                    participantIdentity: e
                }), !B) throw Error("Missing keyProvider options");
            r = new Be({
                participantIdentity: e,
                keys: V(e),
                keyProviderOptions: B,
                sifTrailer: ge
            }), r.setRtpMap(ve), Ye(r), U.push(r)
        }
        return r
    }

    function V(e) {
        if (G) return Q();
        let t = ye.get(e);
        return t || (t = new pe(e, B), t.on(F.KeyRatcheted, Ze), ye.set(e, t)), t
    }

    function Q() {
        return $ || (p.debug("creating new shared key handler"), $ = new pe("shared-key", B)), $
    }

    function Ve(e, t) {
        const n = U.filter(a => a.getParticipantIdentity() === t && a.getTrackId() === e);
        n.length > 1 && p.error("Found multiple cryptors for the same participant and trackID combination", {
            trackId: e,
            participantIdentity: t
        });
        const r = n[0];
        r ? r.unsetParticipant() : p.warn("Could not unset participant on cryptor", {
            trackId: e,
            participantIdentity: t
        })
    }

    function Xe(e, t) {
        p.debug("setting encryption enabled for all tracks of ".concat(t), {
            enable: e
        }), fe.set(t, e)
    }

    function ze(e, t) {
        return L(this, void 0, void 0, function*() {
            p.info("set shared key", {
                index: t
            }), yield Q().setKey(e, t)
        })
    }

    function Ye(e) {
        e.on(O.Error, t => {
            const n = {
                kind: "error",
                data: {
                    error: new Error("".concat(x[t.reason], ": ").concat(t.message))
                }
            };
            postMessage(n)
        })
    }

    function Ze(e, t, n) {
        postMessage({
            kind: "ratchetKey",
            data: {
                participantIdentity: t,
                keyIndex: n,
                material: e
            }
        })
    }

    function Je(e) {
        ge = e, U.forEach(t => {
            t.setSifTrailer(e)
        })
    }
    self.RTCTransformEvent && (p.debug("setup transform event"), self.onrtctransform = e => {
        const t = e.transformer;
        p.debug("transformer", t), t.handled = !0;
        const {
            kind: n,
            participantIdentity: r,
            trackId: a,
            codec: i
        } = t.options, l = W(r, a);
        p.debug("transform", {
            codec: i
        }), l.setupTransform(n, t.readable, t.writable, a, i)
    })
})();
//# sourceMappingURL=livekit-client.e2ee.worker-DK0iMXIf.js.map