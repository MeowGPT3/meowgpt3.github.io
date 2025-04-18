import {
    g as go,
    aM as Gn,
    D as ae,
    S as bo,
    l as wo,
    z as _o,
    B as Qn,
    cB as xo,
    cA as ko,
    x as Po,
    ak as Oo
} from "./bq4rrqi54riy5k2e.js";
import {
    k as Er,
    g as Eo,
    R as mn,
    r as Ar
} from "./mna1wiucqak6lqzp.js";
var Sr = {
    exports: {}
};
(function(D, Y) {
    (function(V, I) {
        D.exports = I()
    })(Er, function() {
        var V = function(e, n) {
                return (V = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, r) {
                        t.__proto__ = r
                    } || function(t, r) {
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
                    })(e, n)
            },
            I = function() {
                return (I = Object.assign || function(e) {
                    for (var n, t = 1, r = arguments.length; t < r; t++)
                        for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    return e
                }).apply(this, arguments)
            };

        function ee(e, n, t) {
            for (var r, o = 0, i = n.length; o < i; o++) !r && o in n || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
            return e.concat(r || Array.prototype.slice.call(n))
        }
        var B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Er,
            U = Object.keys,
            K = Array.isArray;

        function z(e, n) {
            return typeof n != "object" || U(n).forEach(function(t) {
                e[t] = n[t]
            }), e
        }
        typeof Promise > "u" || B.Promise || (B.Promise = Promise);
        var $ = Object.getPrototypeOf,
            ne = {}.hasOwnProperty;

        function W(e, n) {
            return ne.call(e, n)
        }

        function Se(e, n) {
            typeof n == "function" && (n = n($(e))), (typeof Reflect > "u" ? U : Reflect.ownKeys)(n).forEach(function(t) {
                xe(e, t, n[t])
            })
        }
        var Mt = Object.defineProperty;

        function xe(e, n, t, r) {
            Mt(e, n, z(t && W(t, "get") && typeof t.get == "function" ? {
                get: t.get,
                set: t.set,
                configurable: !0
            } : {
                value: t,
                configurable: !0,
                writable: !0
            }, r))
        }

        function Le(e) {
            return {
                from: function(n) {
                    return e.prototype = Object.create(n.prototype), xe(e.prototype, "constructor", e), {
                        extend: Se.bind(null, e.prototype)
                    }
                }
            }
        }
        var jr = Object.getOwnPropertyDescriptor,
            Rr = [].slice;

        function bn(e, n, t) {
            return Rr.call(e, n, t)
        }

        function Nt(e, n) {
            return n(e)
        }

        function Ze(e) {
            if (!e) throw new Error("Assertion Failed")
        }

        function Ut(e) {
            B.setImmediate ? setImmediate(e) : setTimeout(e, 0)
        }

        function ye(e, n) {
            if (typeof n == "string" && W(e, n)) return e[n];
            if (!n) return e;
            if (typeof n != "string") {
                for (var t = [], r = 0, o = n.length; r < o; ++r) {
                    var i = ye(e, n[r]);
                    t.push(i)
                }
                return t
            }
            var a = n.indexOf(".");
            if (a !== -1) {
                var u = e[n.substr(0, a)];
                return u == null ? void 0 : ye(u, n.substr(a + 1))
            }
        }

        function ue(e, n, t) {
            if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e)))
                if (typeof n != "string" && "length" in n) {
                    Ze(typeof t != "string" && "length" in t);
                    for (var r = 0, o = n.length; r < o; ++r) ue(e, n[r], t[r])
                } else {
                    var i, a, u = n.indexOf(".");
                    u !== -1 ? (i = n.substr(0, u), (a = n.substr(u + 1)) === "" ? t === void 0 ? K(e) && !isNaN(parseInt(i)) ? e.splice(i, 1) : delete e[i] : e[i] = t : ue(u = !(u = e[i]) || !W(e, i) ? e[i] = {} : u, a, t)) : t === void 0 ? K(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = t
                }
        }

        function Lt(e) {
            var n, t = {};
            for (n in e) W(e, n) && (t[n] = e[n]);
            return t
        }
        var qr = [].concat;

        function Vt(e) {
            return qr.apply([], e)
        }
        var ge = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Vt([8, 16, 32, 64].map(function(e) {
                return ["Int", "Uint", "Float"].map(function(n) {
                    return n + e + "Array"
                })
            }))).filter(function(e) {
                return B[e]
            }),
            zt = new Set(ge.map(function(e) {
                return B[e]
            })),
            en = null;

        function Ke(e) {
            return en = new WeakMap, e = function n(t) {
                if (!t || typeof t != "object") return t;
                var r = en.get(t);
                if (r) return r;
                if (K(t)) {
                    r = [], en.set(t, r);
                    for (var o = 0, i = t.length; o < i; ++o) r.push(n(t[o]))
                } else if (zt.has(t.constructor)) r = t;
                else {
                    var a, u = $(t);
                    for (a in r = u === Object.prototype ? {} : Object.create(u), en.set(t, r), t) W(t, a) && (r[a] = n(t[a]))
                }
                return r
            }(e), en = null, e
        }
        var Br = {}.toString;

        function Xn(e) {
            return Br.call(e).slice(8, -1)
        }
        var Jn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator",
            Fr = typeof Jn == "symbol" ? function(e) {
                var n;
                return e != null && (n = e[Jn]) && n.apply(e)
            } : function() {
                return null
            };

        function De(e, n) {
            return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n
        }
        var Ve = {};

        function ve(e) {
            var n, t, r, o;
            if (arguments.length === 1) {
                if (K(e)) return e.slice();
                if (this === Ve && typeof e == "string") return [e];
                if (o = Fr(e)) {
                    for (t = []; !(r = o.next()).done;) t.push(r.value);
                    return t
                }
                if (e == null) return [e];
                if (typeof(n = e.length) != "number") return [e];
                for (t = new Array(n); n--;) t[n] = e[n];
                return t
            }
            for (n = arguments.length, t = new Array(n); n--;) t[n] = arguments[n];
            return t
        }
        var Zn = typeof Symbol < "u" ? function(e) {
                return e[Symbol.toStringTag] === "AsyncFunction"
            } : function() {
                return !1
            },
            rn = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
            ce = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(rn),
            Mr = {
                VersionChanged: "Database version changed by other database connection",
                DatabaseClosed: "Database has been closed",
                Abort: "Transaction aborted",
                TransactionInactive: "Transaction has already completed or failed",
                MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
            };

        function ze(e, n) {
            this.name = e, this.message = n
        }

        function $t(e, n) {
            return e + ". Errors: " + Object.keys(n).map(function(t) {
                return n[t].toString()
            }).filter(function(t, r, o) {
                return o.indexOf(t) === r
            }).join(`
`)
        }

        function wn(e, n, t, r) {
            this.failures = n, this.failedKeys = r, this.successCount = t, this.message = $t(e, n)
        }

        function $e(e, n) {
            this.name = "BulkError", this.failures = Object.keys(n).map(function(t) {
                return n[t]
            }), this.failuresByPos = n, this.message = $t(e, this.failures)
        }
        Le(ze).from(Error).extend({
            toString: function() {
                return this.name + ": " + this.message
            }
        }), Le(wn).from(ze), Le($e).from(ze);
        var et = ce.reduce(function(e, n) {
                return e[n] = n + "Error", e
            }, {}),
            Nr = ze,
            S = ce.reduce(function(e, n) {
                var t = n + "Error";

                function r(o, i) {
                    this.name = t, o ? typeof o == "string" ? (this.message = "".concat(o).concat(i ? `
 ` + i : ""), this.inner = i || null) : typeof o == "object" && (this.message = "".concat(o.name, " ").concat(o.message), this.inner = o) : (this.message = Mr[n] || t, this.inner = null)
                }
                return Le(r).from(Nr), e[n] = r, e
            }, {});
        S.Syntax = SyntaxError, S.Type = TypeError, S.Range = RangeError;
        var Wt = rn.reduce(function(e, n) {
                return e[n + "Error"] = S[n], e
            }, {}),
            _n = ce.reduce(function(e, n) {
                return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = S[n]), e
            }, {});

        function L() {}

        function nn(e) {
            return e
        }

        function Ur(e, n) {
            return e == null || e === nn ? n : function(t) {
                return n(e(t))
            }
        }

        function Te(e, n) {
            return function() {
                e.apply(this, arguments), n.apply(this, arguments)
            }
        }

        function Lr(e, n) {
            return e === L ? n : function() {
                var t = e.apply(this, arguments);
                t !== void 0 && (arguments[0] = t);
                var r = this.onsuccess,
                    o = this.onerror;
                this.onsuccess = null, this.onerror = null;
                var i = n.apply(this, arguments);
                return r && (this.onsuccess = this.onsuccess ? Te(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Te(o, this.onerror) : o), i !== void 0 ? i : t
            }
        }

        function Vr(e, n) {
            return e === L ? n : function() {
                e.apply(this, arguments);
                var t = this.onsuccess,
                    r = this.onerror;
                this.onsuccess = this.onerror = null, n.apply(this, arguments), t && (this.onsuccess = this.onsuccess ? Te(t, this.onsuccess) : t), r && (this.onerror = this.onerror ? Te(r, this.onerror) : r)
            }
        }

        function zr(e, n) {
            return e === L ? n : function(t) {
                var r = e.apply(this, arguments);
                z(t, r);
                var o = this.onsuccess,
                    i = this.onerror;
                return this.onsuccess = null, this.onerror = null, t = n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? Te(o, this.onsuccess) : o), i && (this.onerror = this.onerror ? Te(i, this.onerror) : i), r === void 0 ? t === void 0 ? void 0 : t : z(r, t)
            }
        }

        function $r(e, n) {
            return e === L ? n : function() {
                return n.apply(this, arguments) !== !1 && e.apply(this, arguments)
            }
        }

        function nt(e, n) {
            return e === L ? n : function() {
                var t = e.apply(this, arguments);
                if (t && typeof t.then == "function") {
                    for (var r = this, o = arguments.length, i = new Array(o); o--;) i[o] = arguments[o];
                    return t.then(function() {
                        return n.apply(r, i)
                    })
                }
                return n.apply(this, arguments)
            }
        }
        _n.ModifyError = wn, _n.DexieError = ze, _n.BulkError = $e;
        var fe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

        function Yt(e) {
            fe = e
        }
        var tn = {},
            Gt = 100,
            ge = typeof Promise > "u" ? [] : function() {
                var e = Promise.resolve();
                if (typeof crypto > "u" || !crypto.subtle) return [e, $(e), e];
                var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
                return [n, $(n), e]
            }(),
            rn = ge[0],
            ce = ge[1],
            ge = ge[2],
            ce = ce && ce.then,
            on = rn && rn.constructor,
            tt = !!ge,
            an = function(e, n) {
                un.push([e, n]), xn && (queueMicrotask(Yr), xn = !1)
            },
            rt = !0,
            xn = !0,
            je = [],
            kn = [],
            ot = nn,
            ke = {
                id: "global",
                global: !0,
                ref: 0,
                unhandleds: [],
                onunhandled: L,
                pgp: !1,
                env: {},
                finalize: L
            },
            C = ke,
            un = [],
            Re = 0,
            Pn = [];

        function A(e) {
            if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
            this._listeners = [], this._lib = !1;
            var n = this._PSD = C;
            if (typeof e != "function") {
                if (e !== tn) throw new TypeError("Not a function");
                return this._state = arguments[1], this._value = arguments[2], void(this._state === !1 && at(this, this._value))
            }
            this._state = null, this._value = null, ++n.ref,
                function t(r, o) {
                    try {
                        o(function(i) {
                            if (r._state === null) {
                                if (i === r) throw new TypeError("A promise cannot be resolved with itself.");
                                var a = r._lib && We();
                                i && typeof i.then == "function" ? t(r, function(u, f) {
                                    i instanceof A ? i._then(u, f) : i.then(u, f)
                                }) : (r._state = !0, r._value = i, Ht(r)), a && Ye()
                            }
                        }, at.bind(null, r))
                    } catch (i) {
                        at(r, i)
                    }
                }(this, e)
        }
        var it = {
            get: function() {
                var e = C,
                    n = In;

                function t(r, o) {
                    var i = this,
                        a = !e.global && (e !== C || n !== In),
                        u = a && !Oe(),
                        f = new A(function(c, p) {
                            ut(i, new Qt(Jt(r, e, a, u), Jt(o, e, a, u), c, p, e))
                        });
                    return this._consoleTask && (f._consoleTask = this._consoleTask), f
                }
                return t.prototype = tn, t
            },
            set: function(e) {
                xe(this, "then", e && e.prototype === tn ? it : {
                    get: function() {
                        return e
                    },
                    set: it.set
                })
            }
        };

        function Qt(e, n, t, r, o) {
            this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = t, this.reject = r, this.psd = o
        }

        function at(e, n) {
            var t, r;
            kn.push(n), e._state === null && (t = e._lib && We(), n = ot(n), e._state = !1, e._value = n, r = e, je.some(function(o) {
                return o._value === r._value
            }) || je.push(r), Ht(e), t && Ye())
        }

        function Ht(e) {
            var n = e._listeners;
            e._listeners = [];
            for (var t = 0, r = n.length; t < r; ++t) ut(e, n[t]);
            var o = e._PSD;
            --o.ref || o.finalize(), Re === 0 && (++Re, an(function() {
                --Re == 0 && st()
            }, []))
        }

        function ut(e, n) {
            if (e._state !== null) {
                var t = e._state ? n.onFulfilled : n.onRejected;
                if (t === null) return (e._state ? n.resolve : n.reject)(e._value);
                ++n.psd.ref, ++Re, an(Wr, [t, e, n])
            } else e._listeners.push(n)
        }

        function Wr(e, n, t) {
            try {
                var r, o = n._value;
                !n._state && kn.length && (kn = []), r = fe && n._consoleTask ? n._consoleTask.run(function() {
                    return e(o)
                }) : e(o), n._state || kn.indexOf(o) !== -1 || function(i) {
                    for (var a = je.length; a;)
                        if (je[--a]._value === i._value) return je.splice(a, 1)
                }(n), t.resolve(r)
            } catch (i) {
                t.reject(i)
            } finally {
                --Re == 0 && st(), --t.psd.ref || t.psd.finalize()
            }
        }

        function Yr() {
            qe(ke, function() {
                We() && Ye()
            })
        }

        function We() {
            var e = rt;
            return xn = rt = !1, e
        }

        function Ye() {
            var e, n, t;
            do
                for (; 0 < un.length;)
                    for (e = un, un = [], t = e.length, n = 0; n < t; ++n) {
                        var r = e[n];
                        r[0].apply(null, r[1])
                    }
            while (0 < un.length);
            xn = rt = !0
        }

        function st() {
            var e = je;
            je = [], e.forEach(function(r) {
                r._PSD.onunhandled.call(null, r._value, r)
            });
            for (var n = Pn.slice(0), t = n.length; t;) n[--t]()
        }

        function On(e) {
            return new A(tn, !1, e)
        }

        function Q(e, n) {
            var t = C;
            return function() {
                var r = We(),
                    o = C;
                try {
                    return Ee(t, !0), e.apply(this, arguments)
                } catch (i) {
                    n && n(i)
                } finally {
                    Ee(o, !1), r && Ye()
                }
            }
        }
        Se(A.prototype, {
            then: it,
            _then: function(e, n) {
                ut(this, new Qt(null, null, e, n, C))
            },
            catch: function(e) {
                if (arguments.length === 1) return this.then(null, e);
                var n = e,
                    t = arguments[1];
                return typeof n == "function" ? this.then(null, function(r) {
                    return (r instanceof n ? t : On)(r)
                }) : this.then(null, function(r) {
                    return (r && r.name === n ? t : On)(r)
                })
            },
            finally: function(e) {
                return this.then(function(n) {
                    return A.resolve(e()).then(function() {
                        return n
                    })
                }, function(n) {
                    return A.resolve(e()).then(function() {
                        return On(n)
                    })
                })
            },
            timeout: function(e, n) {
                var t = this;
                return e < 1 / 0 ? new A(function(r, o) {
                    var i = setTimeout(function() {
                        return o(new S.Timeout(n))
                    }, e);
                    t.then(r, o).finally(clearTimeout.bind(null, i))
                }) : this
            }
        }), typeof Symbol < "u" && Symbol.toStringTag && xe(A.prototype, Symbol.toStringTag, "Dexie.Promise"), ke.env = Xt(), Se(A, {
            all: function() {
                var e = ve.apply(null, arguments).map(Cn);
                return new A(function(n, t) {
                    e.length === 0 && n([]);
                    var r = e.length;
                    e.forEach(function(o, i) {
                        return A.resolve(o).then(function(a) {
                            e[i] = a, --r || n(e)
                        }, t)
                    })
                })
            },
            resolve: function(e) {
                return e instanceof A ? e : e && typeof e.then == "function" ? new A(function(n, t) {
                    e.then(n, t)
                }) : new A(tn, !0, e)
            },
            reject: On,
            race: function() {
                var e = ve.apply(null, arguments).map(Cn);
                return new A(function(n, t) {
                    e.map(function(r) {
                        return A.resolve(r).then(n, t)
                    })
                })
            },
            PSD: {
                get: function() {
                    return C
                },
                set: function(e) {
                    return C = e
                }
            },
            totalEchoes: {
                get: function() {
                    return In
                }
            },
            newPSD: Pe,
            usePSD: qe,
            scheduler: {
                get: function() {
                    return an
                },
                set: function(e) {
                    an = e
                }
            },
            rejectionMapper: {
                get: function() {
                    return ot
                },
                set: function(e) {
                    ot = e
                }
            },
            follow: function(e, n) {
                return new A(function(t, r) {
                    return Pe(function(o, i) {
                        var a = C;
                        a.unhandleds = [], a.onunhandled = i, a.finalize = Te(function() {
                            var u, f = this;
                            u = function() {
                                f.unhandleds.length === 0 ? o() : i(f.unhandleds[0])
                            }, Pn.push(function c() {
                                u(), Pn.splice(Pn.indexOf(c), 1)
                            }), ++Re, an(function() {
                                --Re == 0 && st()
                            }, [])
                        }, a.finalize), e()
                    }, n, t, r)
                })
            }
        }), on && (on.allSettled && xe(A, "allSettled", function() {
            var e = ve.apply(null, arguments).map(Cn);
            return new A(function(n) {
                e.length === 0 && n([]);
                var t = e.length,
                    r = new Array(t);
                e.forEach(function(o, i) {
                    return A.resolve(o).then(function(a) {
                        return r[i] = {
                            status: "fulfilled",
                            value: a
                        }
                    }, function(a) {
                        return r[i] = {
                            status: "rejected",
                            reason: a
                        }
                    }).then(function() {
                        return --t || n(r)
                    })
                })
            })
        }), on.any && typeof AggregateError < "u" && xe(A, "any", function() {
            var e = ve.apply(null, arguments).map(Cn);
            return new A(function(n, t) {
                e.length === 0 && t(new AggregateError([]));
                var r = e.length,
                    o = new Array(r);
                e.forEach(function(i, a) {
                    return A.resolve(i).then(function(u) {
                        return n(u)
                    }, function(u) {
                        o[a] = u, --r || t(new AggregateError(o))
                    })
                })
            })
        }));
        var J = {
                awaits: 0,
                echoes: 0,
                id: 0
            },
            Gr = 0,
            En = [],
            An = 0,
            In = 0,
            Qr = 0;

        function Pe(e, n, t, r) {
            var o = C,
                i = Object.create(o);
            return i.parent = o, i.ref = 0, i.global = !1, i.id = ++Qr, ke.env, i.env = tt ? {
                Promise: A,
                PromiseProp: {
                    value: A,
                    configurable: !0,
                    writable: !0
                },
                all: A.all,
                race: A.race,
                allSettled: A.allSettled,
                any: A.any,
                resolve: A.resolve,
                reject: A.reject
            } : {}, n && z(i, n), ++o.ref, i.finalize = function() {
                --this.parent.ref || this.parent.finalize()
            }, r = qe(i, e, t, r), i.ref === 0 && i.finalize(), r
        }

        function Ge() {
            return J.id || (J.id = ++Gr), ++J.awaits, J.echoes += Gt, J.id
        }

        function Oe() {
            return !!J.awaits && (--J.awaits == 0 && (J.id = 0), J.echoes = J.awaits * Gt, !0)
        }

        function Cn(e) {
            return J.echoes && e && e.constructor === on ? (Ge(), e.then(function(n) {
                return Oe(), n
            }, function(n) {
                return Oe(), H(n)
            })) : e
        }

        function Hr() {
            var e = En[En.length - 1];
            En.pop(), Ee(e, !1)
        }

        function Ee(e, n) {
            var t, r = C;
            (n ? !J.echoes || An++ && e === C : !An || --An && e === C) || queueMicrotask(n ? (function(o) {
                ++In, J.echoes && --J.echoes != 0 || (J.echoes = J.awaits = J.id = 0), En.push(C), Ee(o, !0)
            }).bind(null, e) : Hr), e !== C && (C = e, r === ke && (ke.env = Xt()), tt && (t = ke.env.Promise, n = e.env, (r.global || e.global) && (Object.defineProperty(B, "Promise", n.PromiseProp), t.all = n.all, t.race = n.race, t.resolve = n.resolve, t.reject = n.reject, n.allSettled && (t.allSettled = n.allSettled), n.any && (t.any = n.any))))
        }

        function Xt() {
            var e = B.Promise;
            return tt ? {
                Promise: e,
                PromiseProp: Object.getOwnPropertyDescriptor(B, "Promise"),
                all: e.all,
                race: e.race,
                allSettled: e.allSettled,
                any: e.any,
                resolve: e.resolve,
                reject: e.reject
            } : {}
        }

        function qe(e, n, t, r, o) {
            var i = C;
            try {
                return Ee(e, !0), n(t, r, o)
            } finally {
                Ee(i, !1)
            }
        }

        function Jt(e, n, t, r) {
            return typeof e != "function" ? e : function() {
                var o = C;
                t && Ge(), Ee(n, !0);
                try {
                    return e.apply(this, arguments)
                } finally {
                    Ee(o, !1), r && queueMicrotask(Oe)
                }
            }
        }

        function ct(e) {
            Promise === on && J.echoes === 0 ? An === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0)
        }("" + ce).indexOf("[native code]") === -1 && (Ge = Oe = L);
        var H = A.reject,
            Be = "￿",
            me = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
            Zt = "String expected.",
            Qe = [],
            Sn = "__dbnames",
            lt = "readonly",
            ft = "readwrite";

        function Fe(e, n) {
            return e ? n ? function() {
                return e.apply(this, arguments) && n.apply(this, arguments)
            } : e : n
        }
        var er = {
            type: 3,
            lower: -1 / 0,
            lowerOpen: !1,
            upper: [
                []
            ],
            upperOpen: !1
        };

        function Kn(e) {
            return typeof e != "string" || /\./.test(e) ? function(n) {
                return n
            } : function(n) {
                return n[e] === void 0 && e in n && delete(n = Ke(n))[e], n
            }
        }

        function nr() {
            throw S.Type()
        }

        function M(e, n) {
            try {
                var t = tr(e),
                    r = tr(n);
                if (t !== r) return t === "Array" ? 1 : r === "Array" ? -1 : t === "binary" ? 1 : r === "binary" ? -1 : t === "string" ? 1 : r === "string" ? -1 : t === "Date" ? 1 : r !== "Date" ? NaN : -1;
                switch (t) {
                    case "number":
                    case "Date":
                    case "string":
                        return n < e ? 1 : e < n ? -1 : 0;
                    case "binary":
                        return function(o, i) {
                            for (var a = o.length, u = i.length, f = a < u ? a : u, c = 0; c < f; ++c)
                                if (o[c] !== i[c]) return o[c] < i[c] ? -1 : 1;
                            return a === u ? 0 : a < u ? -1 : 1
                        }(rr(e), rr(n));
                    case "Array":
                        return function(o, i) {
                            for (var a = o.length, u = i.length, f = a < u ? a : u, c = 0; c < f; ++c) {
                                var p = M(o[c], i[c]);
                                if (p !== 0) return p
                            }
                            return a === u ? 0 : a < u ? -1 : 1
                        }(e, n)
                }
            } catch {}
            return NaN
        }

        function tr(e) {
            var n = typeof e;
            return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = Xn(e), e === "ArrayBuffer" ? "binary" : e)
        }

        function rr(e) {
            return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e)
        }
        var or = (G.prototype._trans = function(e, n, t) {
            var r = this._tx || C.trans,
                o = this.name,
                i = fe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));

            function a(c, p, s) {
                if (!s.schema[o]) throw new S.NotFound("Table " + o + " not part of transaction");
                return n(s.idbtrans, s)
            }
            var u = We();
            try {
                var f = r && r.db._novip === this.db._novip ? r === C.trans ? r._promise(e, a, t) : Pe(function() {
                    return r._promise(e, a, t)
                }, {
                    trans: r,
                    transless: C.transless || C
                }) : function c(p, s, y, l) {
                    if (p.idbdb && (p._state.openComplete || C.letThrough || p._vip)) {
                        var d = p._createTransaction(s, y, p._dbSchema);
                        try {
                            d.create(), p._state.PR1398_maxLoop = 3
                        } catch (v) {
                            return v.name === et.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({
                                disableAutoOpen: !1
                            }), p.open().then(function() {
                                return c(p, s, y, l)
                            })) : H(v)
                        }
                        return d._promise(s, function(v, h) {
                            return Pe(function() {
                                return C.trans = d, l(v, h, d)
                            })
                        }).then(function(v) {
                            if (s === "readwrite") try {
                                d.idbtrans.commit()
                            } catch {}
                            return s === "readonly" ? v : d._completion.then(function() {
                                return v
                            })
                        })
                    }
                    if (p._state.openComplete) return H(new S.DatabaseClosed(p._state.dbOpenError));
                    if (!p._state.isBeingOpened) {
                        if (!p._state.autoOpen) return H(new S.DatabaseClosed);
                        p.open().catch(L)
                    }
                    return p._state.dbReadyPromise.then(function() {
                        return c(p, s, y, l)
                    })
                }(this.db, e, [this.name], a);
                return i && (f._consoleTask = i, f = f.catch(function(c) {
                    return console.trace(c), H(c)
                })), f
            } finally {
                u && Ye()
            }
        }, G.prototype.get = function(e, n) {
            var t = this;
            return e && e.constructor === Object ? this.where(e).first(n) : e == null ? H(new S.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
                return t.core.get({
                    trans: r,
                    key: e
                }).then(function(o) {
                    return t.hook.reading.fire(o)
                })
            }).then(n)
        }, G.prototype.where = function(e) {
            if (typeof e == "string") return new this.db.WhereClause(this, e);
            if (K(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
            var n = U(e);
            if (n.length === 1) return this.where(n[0]).equals(e[n[0]]);
            var t = this.schema.indexes.concat(this.schema.primKey).filter(function(f) {
                if (f.compound && n.every(function(p) {
                        return 0 <= f.keyPath.indexOf(p)
                    })) {
                    for (var c = 0; c < n.length; ++c)
                        if (n.indexOf(f.keyPath[c]) === -1) return !1;
                    return !0
                }
                return !1
            }).sort(function(f, c) {
                return f.keyPath.length - c.keyPath.length
            })[0];
            if (t && this.db._maxKey !== Be) {
                var a = t.keyPath.slice(0, n.length);
                return this.where(a).equals(a.map(function(c) {
                    return e[c]
                }))
            }!t && fe && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
            var r = this.schema.idxByName,
                o = this.db._deps.indexedDB;

            function i(f, c) {
                return o.cmp(f, c) === 0
            }
            var u = n.reduce(function(y, c) {
                    var p = y[0],
                        s = y[1],
                        y = r[c],
                        l = e[c];
                    return [p || y, p || !y ? Fe(s, y && y.multi ? function(d) {
                        return d = ye(d, c), K(d) && d.some(function(v) {
                            return i(l, v)
                        })
                    } : function(d) {
                        return i(l, ye(d, c))
                    }) : s]
                }, [null, null]),
                a = u[0],
                u = u[1];
            return a ? this.where(a.name).equals(e[a.keyPath]).filter(u) : t ? this.filter(u) : this.where(n).equals("")
        }, G.prototype.filter = function(e) {
            return this.toCollection().and(e)
        }, G.prototype.count = function(e) {
            return this.toCollection().count(e)
        }, G.prototype.offset = function(e) {
            return this.toCollection().offset(e)
        }, G.prototype.limit = function(e) {
            return this.toCollection().limit(e)
        }, G.prototype.each = function(e) {
            return this.toCollection().each(e)
        }, G.prototype.toArray = function(e) {
            return this.toCollection().toArray(e)
        }, G.prototype.toCollection = function() {
            return new this.db.Collection(new this.db.WhereClause(this))
        }, G.prototype.orderBy = function(e) {
            return new this.db.Collection(new this.db.WhereClause(this, K(e) ? "[".concat(e.join("+"), "]") : e))
        }, G.prototype.reverse = function() {
            return this.toCollection().reverse()
        }, G.prototype.mapToClass = function(e) {
            var n, t = this.db,
                r = this.name;

            function o() {
                return n !== null && n.apply(this, arguments) || this
            }(this.schema.mappedClass = e).prototype instanceof nr && (function(f, c) {
                if (typeof c != "function" && c !== null) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");

                function p() {
                    this.constructor = f
                }
                V(f, c), f.prototype = c === null ? Object.create(c) : (p.prototype = c.prototype, new p)
            }(o, n = e), Object.defineProperty(o.prototype, "db", {
                get: function() {
                    return t
                },
                enumerable: !1,
                configurable: !0
            }), o.prototype.table = function() {
                return r
            }, e = o);
            for (var i = new Set, a = e.prototype; a; a = $(a)) Object.getOwnPropertyNames(a).forEach(function(f) {
                return i.add(f)
            });

            function u(f) {
                if (!f) return f;
                var c, p = Object.create(e.prototype);
                for (c in f)
                    if (!i.has(c)) try {
                        p[c] = f[c]
                    } catch {}
                return p
            }
            return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e
        }, G.prototype.defineClass = function() {
            return this.mapToClass(function(e) {
                z(this, e)
            })
        }, G.prototype.add = function(e, n) {
            var t = this,
                r = this.schema.primKey,
                o = r.auto,
                i = r.keyPath,
                a = e;
            return i && o && (a = Kn(i)(e)), this._trans("readwrite", function(u) {
                return t.core.mutate({
                    trans: u,
                    type: "add",
                    keys: n != null ? [n] : null,
                    values: [a]
                })
            }).then(function(u) {
                return u.numFailures ? A.reject(u.failures[0]) : u.lastResult
            }).then(function(u) {
                if (i) try {
                    ue(e, i, u)
                } catch {}
                return u
            })
        }, G.prototype.update = function(e, n) {
            return typeof e != "object" || K(e) ? this.where(":id").equals(e).modify(n) : (e = ye(e, this.schema.primKey.keyPath), e === void 0 ? H(new S.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n))
        }, G.prototype.put = function(e, n) {
            var t = this,
                r = this.schema.primKey,
                o = r.auto,
                i = r.keyPath,
                a = e;
            return i && o && (a = Kn(i)(e)), this._trans("readwrite", function(u) {
                return t.core.mutate({
                    trans: u,
                    type: "put",
                    values: [a],
                    keys: n != null ? [n] : null
                })
            }).then(function(u) {
                return u.numFailures ? A.reject(u.failures[0]) : u.lastResult
            }).then(function(u) {
                if (i) try {
                    ue(e, i, u)
                } catch {}
                return u
            })
        }, G.prototype.delete = function(e) {
            var n = this;
            return this._trans("readwrite", function(t) {
                return n.core.mutate({
                    trans: t,
                    type: "delete",
                    keys: [e]
                })
            }).then(function(t) {
                return t.numFailures ? A.reject(t.failures[0]) : void 0
            })
        }, G.prototype.clear = function() {
            var e = this;
            return this._trans("readwrite", function(n) {
                return e.core.mutate({
                    trans: n,
                    type: "deleteRange",
                    range: er
                })
            }).then(function(n) {
                return n.numFailures ? A.reject(n.failures[0]) : void 0
            })
        }, G.prototype.bulkGet = function(e) {
            var n = this;
            return this._trans("readonly", function(t) {
                return n.core.getMany({
                    keys: e,
                    trans: t
                }).then(function(r) {
                    return r.map(function(o) {
                        return n.hook.reading.fire(o)
                    })
                })
            })
        }, G.prototype.bulkAdd = function(e, n, t) {
            var r = this,
                o = Array.isArray(n) ? n : void 0,
                i = (t = t || (o ? void 0 : n)) ? t.allKeys : void 0;
            return this._trans("readwrite", function(a) {
                var c = r.schema.primKey,
                    u = c.auto,
                    c = c.keyPath;
                if (c && o) throw new S.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (o && o.length !== e.length) throw new S.InvalidArgument("Arguments objects and keys must have the same length");
                var f = e.length,
                    c = c && u ? e.map(Kn(c)) : e;
                return r.core.mutate({
                    trans: a,
                    type: "add",
                    keys: o,
                    values: c,
                    wantResults: i
                }).then(function(d) {
                    var s = d.numFailures,
                        y = d.results,
                        l = d.lastResult,
                        d = d.failures;
                    if (s === 0) return i ? y : l;
                    throw new $e("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(f, " operations failed"), d)
                })
            })
        }, G.prototype.bulkPut = function(e, n, t) {
            var r = this,
                o = Array.isArray(n) ? n : void 0,
                i = (t = t || (o ? void 0 : n)) ? t.allKeys : void 0;
            return this._trans("readwrite", function(a) {
                var c = r.schema.primKey,
                    u = c.auto,
                    c = c.keyPath;
                if (c && o) throw new S.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (o && o.length !== e.length) throw new S.InvalidArgument("Arguments objects and keys must have the same length");
                var f = e.length,
                    c = c && u ? e.map(Kn(c)) : e;
                return r.core.mutate({
                    trans: a,
                    type: "put",
                    keys: o,
                    values: c,
                    wantResults: i
                }).then(function(d) {
                    var s = d.numFailures,
                        y = d.results,
                        l = d.lastResult,
                        d = d.failures;
                    if (s === 0) return i ? y : l;
                    throw new $e("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(f, " operations failed"), d)
                })
            })
        }, G.prototype.bulkUpdate = function(e) {
            var n = this,
                t = this.core,
                r = e.map(function(a) {
                    return a.key
                }),
                o = e.map(function(a) {
                    return a.changes
                }),
                i = [];
            return this._trans("readwrite", function(a) {
                return t.getMany({
                    trans: a,
                    keys: r,
                    cache: "clone"
                }).then(function(u) {
                    var f = [],
                        c = [];
                    e.forEach(function(s, y) {
                        var l = s.key,
                            d = s.changes,
                            v = u[y];
                        if (v) {
                            for (var h = 0, m = Object.keys(d); h < m.length; h++) {
                                var g = m[h],
                                    b = d[g];
                                if (g === n.schema.primKey.keyPath) {
                                    if (M(b, l) !== 0) throw new S.Constraint("Cannot update primary key in bulkUpdate()")
                                } else ue(v, g, b)
                            }
                            i.push(y), f.push(l), c.push(v)
                        }
                    });
                    var p = f.length;
                    return t.mutate({
                        trans: a,
                        type: "put",
                        keys: f,
                        values: c,
                        updates: {
                            keys: r,
                            changeSpecs: o
                        }
                    }).then(function(s) {
                        var y = s.numFailures,
                            l = s.failures;
                        if (y === 0) return p;
                        for (var d = 0, v = Object.keys(l); d < v.length; d++) {
                            var h, m = v[d],
                                g = i[Number(m)];
                            g != null && (h = l[m], delete l[m], l[g] = h)
                        }
                        throw new $e("".concat(n.name, ".bulkUpdate(): ").concat(y, " of ").concat(p, " operations failed"), l)
                    })
                })
            })
        }, G.prototype.bulkDelete = function(e) {
            var n = this,
                t = e.length;
            return this._trans("readwrite", function(r) {
                return n.core.mutate({
                    trans: r,
                    type: "delete",
                    keys: e
                })
            }).then(function(a) {
                var o = a.numFailures,
                    i = a.lastResult,
                    a = a.failures;
                if (o === 0) return i;
                throw new $e("".concat(n.name, ".bulkDelete(): ").concat(o, " of ").concat(t, " operations failed"), a)
            })
        }, G);

        function G() {}

        function sn(e) {
            function n(a, u) {
                if (u) {
                    for (var f = arguments.length, c = new Array(f - 1); --f;) c[f - 1] = arguments[f];
                    return t[a].subscribe.apply(null, c), e
                }
                if (typeof a == "string") return t[a]
            }
            var t = {};
            n.addEventType = i;
            for (var r = 1, o = arguments.length; r < o; ++r) i(arguments[r]);
            return n;

            function i(a, u, f) {
                if (typeof a != "object") {
                    var c;
                    u = u || $r;
                    var p = {
                        subscribers: [],
                        fire: f = f || L,
                        subscribe: function(s) {
                            p.subscribers.indexOf(s) === -1 && (p.subscribers.push(s), p.fire = u(p.fire, s))
                        },
                        unsubscribe: function(s) {
                            p.subscribers = p.subscribers.filter(function(y) {
                                return y !== s
                            }), p.fire = p.subscribers.reduce(u, f)
                        }
                    };
                    return t[a] = n[a] = p
                }
                U(c = a).forEach(function(s) {
                    var y = c[s];
                    if (K(y)) i(s, c[s][0], c[s][1]);
                    else {
                        if (y !== "asap") throw new S.InvalidArgument("Invalid event config");
                        var l = i(s, nn, function() {
                            for (var d = arguments.length, v = new Array(d); d--;) v[d] = arguments[d];
                            l.subscribers.forEach(function(h) {
                                Ut(function() {
                                    h.apply(null, v)
                                })
                            })
                        })
                    }
                })
            }
        }

        function cn(e, n) {
            return Le(n).from({
                prototype: e
            }), n
        }

        function He(e, n) {
            return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter)
        }

        function ht(e, n) {
            e.filter = Fe(e.filter, n)
        }

        function dt(e, n, t) {
            var r = e.replayFilter;
            e.replayFilter = r ? function() {
                return Fe(r(), n())
            } : n, e.justLimit = t && !r
        }

        function Dn(e, n) {
            if (e.isPrimKey) return n.primaryKey;
            var t = n.getIndexByKeyPath(e.index);
            if (!t) throw new S.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
            return t
        }

        function ir(e, n, t) {
            var r = Dn(e, n.schema);
            return n.openCursor({
                trans: t,
                values: !e.keysOnly,
                reverse: e.dir === "prev",
                unique: !!e.unique,
                query: {
                    index: r,
                    range: e.range
                }
            })
        }

        function Tn(e, n, t, r) {
            var o = e.replayFilter ? Fe(e.filter, e.replayFilter()) : e.filter;
            if (e.or) {
                var i = {},
                    a = function(u, f, c) {
                        var p, s;
                        o && !o(f, c, function(y) {
                            return f.stop(y)
                        }, function(y) {
                            return f.fail(y)
                        }) || ((s = "" + (p = f.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(p)), W(i, s) || (i[s] = !0, n(u, f, c)))
                    };
                return Promise.all([e.or._iterate(a, t), ar(ir(e, r, t), e.algorithm, a, !e.keysOnly && e.valueMapper)])
            }
            return ar(ir(e, r, t), Fe(e.algorithm, o), n, !e.keysOnly && e.valueMapper)
        }

        function ar(e, n, t, r) {
            var o = Q(r ? function(i, a, u) {
                return t(r(i), a, u)
            } : t);
            return e.then(function(i) {
                if (i) return i.start(function() {
                    var a = function() {
                        return i.continue()
                    };
                    n && !n(i, function(u) {
                        return a = u
                    }, function(u) {
                        i.stop(u), a = L
                    }, function(u) {
                        i.fail(u), a = L
                    }) || o(i.value, i, function(u) {
                        return a = u
                    }), a()
                })
            })
        }
        var ge = Symbol(),
            ln = (ur.prototype.execute = function(e) {
                if (this.add !== void 0) {
                    var n = this.add;
                    if (K(n)) return ee(ee([], K(e) ? e : [], !0), n).sort();
                    if (typeof n == "number") return (Number(e) || 0) + n;
                    if (typeof n == "bigint") try {
                        return BigInt(e) + n
                    } catch {
                        return BigInt(0) + n
                    }
                    throw new TypeError("Invalid term ".concat(n))
                }
                if (this.remove !== void 0) {
                    var t = this.remove;
                    if (K(t)) return K(e) ? e.filter(function(r) {
                        return !t.includes(r)
                    }).sort() : [];
                    if (typeof t == "number") return Number(e) - t;
                    if (typeof t == "bigint") try {
                        return BigInt(e) - t
                    } catch {
                        return BigInt(0) - t
                    }
                    throw new TypeError("Invalid subtrahend ".concat(t))
                }
                return n = (n = this.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? this.replacePrefix[1] + e.substring(n.length) : e
            }, ur);

        function ur(e) {
            Object.assign(this, e)
        }
        var Xr = (N.prototype._read = function(e, n) {
            var t = this._ctx;
            return t.error ? t.table._trans(null, H.bind(null, t.error)) : t.table._trans("readonly", e).then(n)
        }, N.prototype._write = function(e) {
            var n = this._ctx;
            return n.error ? n.table._trans(null, H.bind(null, n.error)) : n.table._trans("readwrite", e, "locked")
        }, N.prototype._addAlgorithm = function(e) {
            var n = this._ctx;
            n.algorithm = Fe(n.algorithm, e)
        }, N.prototype._iterate = function(e, n) {
            return Tn(this._ctx, e, n, this._ctx.table.core)
        }, N.prototype.clone = function(e) {
            var n = Object.create(this.constructor.prototype),
                t = Object.create(this._ctx);
            return e && z(t, e), n._ctx = t, n
        }, N.prototype.raw = function() {
            return this._ctx.valueMapper = null, this
        }, N.prototype.each = function(e) {
            var n = this._ctx;
            return this._read(function(t) {
                return Tn(n, e, t, n.table.core)
            })
        }, N.prototype.count = function(e) {
            var n = this;
            return this._read(function(t) {
                var r = n._ctx,
                    o = r.table.core;
                if (He(r, !0)) return o.count({
                    trans: t,
                    query: {
                        index: Dn(r, o.schema),
                        range: r.range
                    }
                }).then(function(a) {
                    return Math.min(a, r.limit)
                });
                var i = 0;
                return Tn(r, function() {
                    return ++i, !1
                }, t, o).then(function() {
                    return i
                })
            }).then(e)
        }, N.prototype.sortBy = function(e, n) {
            var t = e.split(".").reverse(),
                r = t[0],
                o = t.length - 1;

            function i(f, c) {
                return c ? i(f[t[c]], c - 1) : f[r]
            }
            var a = this._ctx.dir === "next" ? 1 : -1;

            function u(f, c) {
                return f = i(f, o), c = i(c, o), f < c ? -a : c < f ? a : 0
            }
            return this.toArray(function(f) {
                return f.sort(u)
            }).then(n)
        }, N.prototype.toArray = function(e) {
            var n = this;
            return this._read(function(t) {
                var r = n._ctx;
                if (r.dir === "next" && He(r, !0) && 0 < r.limit) {
                    var o = r.valueMapper,
                        i = Dn(r, r.table.core.schema);
                    return r.table.core.query({
                        trans: t,
                        limit: r.limit,
                        values: !0,
                        query: {
                            index: i,
                            range: r.range
                        }
                    }).then(function(u) {
                        return u = u.result, o ? u.map(o) : u
                    })
                }
                var a = [];
                return Tn(r, function(u) {
                    return a.push(u)
                }, t, r.table.core).then(function() {
                    return a
                })
            }, e)
        }, N.prototype.offset = function(e) {
            var n = this._ctx;
            return e <= 0 || (n.offset += e, He(n) ? dt(n, function() {
                var t = e;
                return function(r, o) {
                    return t === 0 || (t === 1 ? --t : o(function() {
                        r.advance(t), t = 0
                    }), !1)
                }
            }) : dt(n, function() {
                var t = e;
                return function() {
                    return --t < 0
                }
            })), this
        }, N.prototype.limit = function(e) {
            return this._ctx.limit = Math.min(this._ctx.limit, e), dt(this._ctx, function() {
                var n = e;
                return function(t, r, o) {
                    return --n <= 0 && r(o), 0 <= n
                }
            }, !0), this
        }, N.prototype.until = function(e, n) {
            return ht(this._ctx, function(t, r, o) {
                return !e(t.value) || (r(o), n)
            }), this
        }, N.prototype.first = function(e) {
            return this.limit(1).toArray(function(n) {
                return n[0]
            }).then(e)
        }, N.prototype.last = function(e) {
            return this.reverse().first(e)
        }, N.prototype.filter = function(e) {
            var n;
            return ht(this._ctx, function(t) {
                return e(t.value)
            }), (n = this._ctx).isMatch = Fe(n.isMatch, e), this
        }, N.prototype.and = function(e) {
            return this.filter(e)
        }, N.prototype.or = function(e) {
            return new this.db.WhereClause(this._ctx.table, e, this)
        }, N.prototype.reverse = function() {
            return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
        }, N.prototype.desc = function() {
            return this.reverse()
        }, N.prototype.eachKey = function(e) {
            var n = this._ctx;
            return n.keysOnly = !n.isMatch, this.each(function(t, r) {
                e(r.key, r)
            })
        }, N.prototype.eachUniqueKey = function(e) {
            return this._ctx.unique = "unique", this.eachKey(e)
        }, N.prototype.eachPrimaryKey = function(e) {
            var n = this._ctx;
            return n.keysOnly = !n.isMatch, this.each(function(t, r) {
                e(r.primaryKey, r)
            })
        }, N.prototype.keys = function(e) {
            var n = this._ctx;
            n.keysOnly = !n.isMatch;
            var t = [];
            return this.each(function(r, o) {
                t.push(o.key)
            }).then(function() {
                return t
            }).then(e)
        }, N.prototype.primaryKeys = function(e) {
            var n = this._ctx;
            if (n.dir === "next" && He(n, !0) && 0 < n.limit) return this._read(function(r) {
                var o = Dn(n, n.table.core.schema);
                return n.table.core.query({
                    trans: r,
                    values: !1,
                    limit: n.limit,
                    query: {
                        index: o,
                        range: n.range
                    }
                })
            }).then(function(r) {
                return r.result
            }).then(e);
            n.keysOnly = !n.isMatch;
            var t = [];
            return this.each(function(r, o) {
                t.push(o.primaryKey)
            }).then(function() {
                return t
            }).then(e)
        }, N.prototype.uniqueKeys = function(e) {
            return this._ctx.unique = "unique", this.keys(e)
        }, N.prototype.firstKey = function(e) {
            return this.limit(1).keys(function(n) {
                return n[0]
            }).then(e)
        }, N.prototype.lastKey = function(e) {
            return this.reverse().firstKey(e)
        }, N.prototype.distinct = function() {
            var e = this._ctx,
                e = e.index && e.table.schema.idxByName[e.index];
            if (!e || !e.multi) return this;
            var n = {};
            return ht(this._ctx, function(o) {
                var r = o.primaryKey.toString(),
                    o = W(n, r);
                return n[r] = !0, !o
            }), this
        }, N.prototype.modify = function(e) {
            var n = this,
                t = this._ctx;
            return this._write(function(r) {
                var o, i, a;
                a = typeof e == "function" ? e : (o = U(e), i = o.length, function(h) {
                    for (var m = !1, g = 0; g < i; ++g) {
                        var b = o[g],
                            w = e[b],
                            x = ye(h, b);
                        w instanceof ln ? (ue(h, b, w.execute(x)), m = !0) : x !== w && (ue(h, b, w), m = !0)
                    }
                    return m
                });

                function u(h, b) {
                    var g = b.failures,
                        b = b.numFailures;
                    d += h - b;
                    for (var w = 0, x = U(g); w < x.length; w++) {
                        var O = x[w];
                        l.push(g[O])
                    }
                }
                var f = t.table.core,
                    c = f.schema.primaryKey,
                    p = c.outbound,
                    s = c.extractKey,
                    y = n.db._options.modifyChunkSize || 200,
                    l = [],
                    d = 0,
                    v = [];
                return n.clone().primaryKeys().then(function(h) {
                    function m(b) {
                        var w = Math.min(y, h.length - b);
                        return f.getMany({
                            trans: r,
                            keys: h.slice(b, b + w),
                            cache: "immutable"
                        }).then(function(x) {
                            for (var O = [], k = [], P = p ? [] : null, E = [], _ = 0; _ < w; ++_) {
                                var T = x[_],
                                    j = {
                                        value: Ke(T),
                                        primKey: h[b + _]
                                    };
                                a.call(j, j.value, j) !== !1 && (j.value == null ? E.push(h[b + _]) : p || M(s(T), s(j.value)) === 0 ? (k.push(j.value), p && P.push(h[b + _])) : (E.push(h[b + _]), O.push(j.value)))
                            }
                            return Promise.resolve(0 < O.length && f.mutate({
                                trans: r,
                                type: "add",
                                values: O
                            }).then(function(F) {
                                for (var R in F.failures) E.splice(parseInt(R), 1);
                                u(O.length, F)
                            })).then(function() {
                                return (0 < k.length || g && typeof e == "object") && f.mutate({
                                    trans: r,
                                    type: "put",
                                    keys: P,
                                    values: k,
                                    criteria: g,
                                    changeSpec: typeof e != "function" && e,
                                    isAdditionalChunk: 0 < b
                                }).then(function(F) {
                                    return u(k.length, F)
                                })
                            }).then(function() {
                                return (0 < E.length || g && e === pt) && f.mutate({
                                    trans: r,
                                    type: "delete",
                                    keys: E,
                                    criteria: g,
                                    isAdditionalChunk: 0 < b
                                }).then(function(F) {
                                    return u(E.length, F)
                                })
                            }).then(function() {
                                return h.length > b + w && m(b + y)
                            })
                        })
                    }
                    var g = He(t) && t.limit === 1 / 0 && (typeof e != "function" || e === pt) && {
                        index: t.index,
                        range: t.range
                    };
                    return m(0).then(function() {
                        if (0 < l.length) throw new wn("Error modifying one or more objects", l, d, v);
                        return h.length
                    })
                })
            })
        }, N.prototype.delete = function() {
            var e = this._ctx,
                n = e.range;
            return He(e) && (e.isPrimKey || n.type === 3) ? this._write(function(t) {
                var r = e.table.core.schema.primaryKey,
                    o = n;
                return e.table.core.count({
                    trans: t,
                    query: {
                        index: r,
                        range: o
                    }
                }).then(function(i) {
                    return e.table.core.mutate({
                        trans: t,
                        type: "deleteRange",
                        range: o
                    }).then(function(a) {
                        var u = a.failures;
                        if (a.lastResult, a.results, a = a.numFailures, a) throw new wn("Could not delete some values", Object.keys(u).map(function(f) {
                            return u[f]
                        }), i - a);
                        return i - a
                    })
                })
            }) : this.modify(pt)
        }, N);

        function N() {}
        var pt = function(e, n) {
            return n.value = null
        };

        function Jr(e, n) {
            return e < n ? -1 : e === n ? 0 : 1
        }

        function Zr(e, n) {
            return n < e ? -1 : e === n ? 0 : 1
        }

        function se(e, n, t) {
            return e = e instanceof cr ? new e.Collection(e) : e, e._ctx.error = new(t || TypeError)(n), e
        }

        function Xe(e) {
            return new e.Collection(e, function() {
                return sr("")
            }).limit(0)
        }

        function jn(e, n, t, r) {
            var o, i, a, u, f, c, p, s = t.length;
            if (!t.every(function(d) {
                    return typeof d == "string"
                })) return se(e, Zt);

            function y(d) {
                o = d === "next" ? function(h) {
                    return h.toUpperCase()
                } : function(h) {
                    return h.toLowerCase()
                }, i = d === "next" ? function(h) {
                    return h.toLowerCase()
                } : function(h) {
                    return h.toUpperCase()
                }, a = d === "next" ? Jr : Zr;
                var v = t.map(function(h) {
                    return {
                        lower: i(h),
                        upper: o(h)
                    }
                }).sort(function(h, m) {
                    return a(h.lower, m.lower)
                });
                u = v.map(function(h) {
                    return h.upper
                }), f = v.map(function(h) {
                    return h.lower
                }), p = (c = d) === "next" ? "" : r
            }
            y("next"), e = new e.Collection(e, function() {
                return Ae(u[0], f[s - 1] + r)
            }), e._ondirectionchange = function(d) {
                y(d)
            };
            var l = 0;
            return e._addAlgorithm(function(d, v, h) {
                var m = d.key;
                if (typeof m != "string") return !1;
                var g = i(m);
                if (n(g, f, l)) return !0;
                for (var b = null, w = l; w < s; ++w) {
                    var x = function(O, k, P, E, _, T) {
                        for (var j = Math.min(O.length, E.length), F = -1, R = 0; R < j; ++R) {
                            var le = k[R];
                            if (le !== E[R]) return _(O[R], P[R]) < 0 ? O.substr(0, R) + P[R] + P.substr(R + 1) : _(O[R], E[R]) < 0 ? O.substr(0, R) + E[R] + P.substr(R + 1) : 0 <= F ? O.substr(0, F) + k[F] + P.substr(F + 1) : null;
                            _(O[R], le) < 0 && (F = R)
                        }
                        return j < E.length && T === "next" ? O + P.substr(O.length) : j < O.length && T === "prev" ? O.substr(0, P.length) : F < 0 ? null : O.substr(0, F) + E[F] + P.substr(F + 1)
                    }(m, g, u[w], f[w], a, c);
                    x === null && b === null ? l = w + 1 : (b === null || 0 < a(b, x)) && (b = x)
                }
                return v(b !== null ? function() {
                    d.continue(b + p)
                } : h), !1
            }), e
        }

        function Ae(e, n, t, r) {
            return {
                type: 2,
                lower: e,
                upper: n,
                lowerOpen: t,
                upperOpen: r
            }
        }

        function sr(e) {
            return {
                type: 1,
                lower: e,
                upper: e
            }
        }
        var cr = (Object.defineProperty(Z.prototype, "Collection", {
            get: function() {
                return this._ctx.table.db.Collection
            },
            enumerable: !1,
            configurable: !0
        }), Z.prototype.between = function(e, n, t, r) {
            t = t !== !1, r = r === !0;
            try {
                return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (t || r) && (!t || !r) ? Xe(this) : new this.Collection(this, function() {
                    return Ae(e, n, !t, !r)
                })
            } catch {
                return se(this, me)
            }
        }, Z.prototype.equals = function(e) {
            return e == null ? se(this, me) : new this.Collection(this, function() {
                return sr(e)
            })
        }, Z.prototype.above = function(e) {
            return e == null ? se(this, me) : new this.Collection(this, function() {
                return Ae(e, void 0, !0)
            })
        }, Z.prototype.aboveOrEqual = function(e) {
            return e == null ? se(this, me) : new this.Collection(this, function() {
                return Ae(e, void 0, !1)
            })
        }, Z.prototype.below = function(e) {
            return e == null ? se(this, me) : new this.Collection(this, function() {
                return Ae(void 0, e, !1, !0)
            })
        }, Z.prototype.belowOrEqual = function(e) {
            return e == null ? se(this, me) : new this.Collection(this, function() {
                return Ae(void 0, e)
            })
        }, Z.prototype.startsWith = function(e) {
            return typeof e != "string" ? se(this, Zt) : this.between(e, e + Be, !0, !0)
        }, Z.prototype.startsWithIgnoreCase = function(e) {
            return e === "" ? this.startsWith(e) : jn(this, function(n, t) {
                return n.indexOf(t[0]) === 0
            }, [e], Be)
        }, Z.prototype.equalsIgnoreCase = function(e) {
            return jn(this, function(n, t) {
                return n === t[0]
            }, [e], "")
        }, Z.prototype.anyOfIgnoreCase = function() {
            var e = ve.apply(Ve, arguments);
            return e.length === 0 ? Xe(this) : jn(this, function(n, t) {
                return t.indexOf(n) !== -1
            }, e, "")
        }, Z.prototype.startsWithAnyOfIgnoreCase = function() {
            var e = ve.apply(Ve, arguments);
            return e.length === 0 ? Xe(this) : jn(this, function(n, t) {
                return t.some(function(r) {
                    return n.indexOf(r) === 0
                })
            }, e, Be)
        }, Z.prototype.anyOf = function() {
            var e = this,
                n = ve.apply(Ve, arguments),
                t = this._cmp;
            try {
                n.sort(t)
            } catch {
                return se(this, me)
            }
            if (n.length === 0) return Xe(this);
            var r = new this.Collection(this, function() {
                return Ae(n[0], n[n.length - 1])
            });
            r._ondirectionchange = function(i) {
                t = i === "next" ? e._ascending : e._descending, n.sort(t)
            };
            var o = 0;
            return r._addAlgorithm(function(i, a, u) {
                for (var f = i.key; 0 < t(f, n[o]);)
                    if (++o === n.length) return a(u), !1;
                return t(f, n[o]) === 0 || (a(function() {
                    i.continue(n[o])
                }), !1)
            }), r
        }, Z.prototype.notEqual = function(e) {
            return this.inAnyRange([
                [-1 / 0, e],
                [e, this.db._maxKey]
            ], {
                includeLowers: !1,
                includeUppers: !1
            })
        }, Z.prototype.noneOf = function() {
            var e = ve.apply(Ve, arguments);
            if (e.length === 0) return new this.Collection(this);
            try {
                e.sort(this._ascending)
            } catch {
                return se(this, me)
            }
            var n = e.reduce(function(t, r) {
                return t ? t.concat([
                    [t[t.length - 1][1], r]
                ]) : [
                    [-1 / 0, r]
                ]
            }, null);
            return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, {
                includeLowers: !1,
                includeUppers: !1
            })
        }, Z.prototype.inAnyRange = function(m, n) {
            var t = this,
                r = this._cmp,
                o = this._ascending,
                i = this._descending,
                a = this._min,
                u = this._max;
            if (m.length === 0) return Xe(this);
            if (!m.every(function(g) {
                    return g[0] !== void 0 && g[1] !== void 0 && o(g[0], g[1]) <= 0
                })) return se(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", S.InvalidArgument);
            var f = !n || n.includeLowers !== !1,
                c = n && n.includeUppers === !0,
                p, s = o;

            function y(g, b) {
                return s(g[0], b[0])
            }
            try {
                (p = m.reduce(function(g, b) {
                    for (var w = 0, x = g.length; w < x; ++w) {
                        var O = g[w];
                        if (r(b[0], O[1]) < 0 && 0 < r(b[1], O[0])) {
                            O[0] = a(O[0], b[0]), O[1] = u(O[1], b[1]);
                            break
                        }
                    }
                    return w === x && g.push(b), g
                }, [])).sort(y)
            } catch {
                return se(this, me)
            }
            var l = 0,
                d = c ? function(g) {
                    return 0 < o(g, p[l][1])
                } : function(g) {
                    return 0 <= o(g, p[l][1])
                },
                v = f ? function(g) {
                    return 0 < i(g, p[l][0])
                } : function(g) {
                    return 0 <= i(g, p[l][0])
                },
                h = d,
                m = new this.Collection(this, function() {
                    return Ae(p[0][0], p[p.length - 1][1], !f, !c)
                });
            return m._ondirectionchange = function(g) {
                s = g === "next" ? (h = d, o) : (h = v, i), p.sort(y)
            }, m._addAlgorithm(function(g, b, w) {
                for (var x, O = g.key; h(O);)
                    if (++l === p.length) return b(w), !1;
                return !d(x = O) && !v(x) || (t._cmp(O, p[l][1]) === 0 || t._cmp(O, p[l][0]) === 0 || b(function() {
                    s === o ? g.continue(p[l][0]) : g.continue(p[l][1])
                }), !1)
            }), m
        }, Z.prototype.startsWithAnyOf = function() {
            var e = ve.apply(Ve, arguments);
            return e.every(function(n) {
                return typeof n == "string"
            }) ? e.length === 0 ? Xe(this) : this.inAnyRange(e.map(function(n) {
                return [n, n + Be]
            })) : se(this, "startsWithAnyOf() only works with strings")
        }, Z);

        function Z() {}

        function he(e) {
            return Q(function(n) {
                return fn(n), e(n.target.error), !1
            })
        }

        function fn(e) {
            e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
        }
        var hn = "storagemutated",
            yt = "x-storagemutated-1",
            Ie = sn(null, hn),
            eo = (de.prototype._lock = function() {
                return Ze(!C.global), ++this._reculock, this._reculock !== 1 || C.global || (C.lockOwnerFor = this), this
            }, de.prototype._unlock = function() {
                if (Ze(!C.global), --this._reculock == 0)
                    for (C.global || (C.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
                        var e = this._blockedFuncs.shift();
                        try {
                            qe(e[1], e[0])
                        } catch {}
                    }
                return this
            }, de.prototype._locked = function() {
                return this._reculock && C.lockOwnerFor !== this
            }, de.prototype.create = function(e) {
                var n = this;
                if (!this.mode) return this;
                var t = this.db.idbdb,
                    r = this.db._state.dbOpenError;
                if (Ze(!this.idbtrans), !e && !t) switch (r && r.name) {
                    case "DatabaseClosedError":
                        throw new S.DatabaseClosed(r);
                    case "MissingAPIError":
                        throw new S.MissingAPI(r.message, r);
                    default:
                        throw new S.OpenFailed(r)
                }
                if (!this.active) throw new S.TransactionInactive;
                return Ze(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || t).transaction(this.storeNames, this.mode, {
                    durability: this.chromeTransactionDurability
                })).onerror = Q(function(o) {
                    fn(o), n._reject(e.error)
                }), e.onabort = Q(function(o) {
                    fn(o), n.active && n._reject(new S.Abort(e.error)), n.active = !1, n.on("abort").fire(o)
                }), e.oncomplete = Q(function() {
                    n.active = !1, n._resolve(), "mutatedParts" in e && Ie.storagemutated.fire(e.mutatedParts)
                }), this
            }, de.prototype._promise = function(e, n, t) {
                var r = this;
                if (e === "readwrite" && this.mode !== "readwrite") return H(new S.ReadOnly("Transaction is readonly"));
                if (!this.active) return H(new S.TransactionInactive);
                if (this._locked()) return new A(function(i, a) {
                    r._blockedFuncs.push([function() {
                        r._promise(e, n, t).then(i, a)
                    }, C])
                });
                if (t) return Pe(function() {
                    var i = new A(function(a, u) {
                        r._lock();
                        var f = n(a, u, r);
                        f && f.then && f.then(a, u)
                    });
                    return i.finally(function() {
                        return r._unlock()
                    }), i._lib = !0, i
                });
                var o = new A(function(i, a) {
                    var u = n(i, a, r);
                    u && u.then && u.then(i, a)
                });
                return o._lib = !0, o
            }, de.prototype._root = function() {
                return this.parent ? this.parent._root() : this
            }, de.prototype.waitFor = function(e) {
                var n, t = this._root(),
                    r = A.resolve(e);
                t._waitingFor ? t._waitingFor = t._waitingFor.then(function() {
                    return r
                }) : (t._waitingFor = r, t._waitingQueue = [], n = t.idbtrans.objectStore(t.storeNames[0]), function i() {
                    for (++t._spinCount; t._waitingQueue.length;) t._waitingQueue.shift()();
                    t._waitingFor && (n.get(-1 / 0).onsuccess = i)
                }());
                var o = t._waitingFor;
                return new A(function(i, a) {
                    r.then(function(u) {
                        return t._waitingQueue.push(Q(i.bind(null, u)))
                    }, function(u) {
                        return t._waitingQueue.push(Q(a.bind(null, u)))
                    }).finally(function() {
                        t._waitingFor === o && (t._waitingFor = null)
                    })
                })
            }, de.prototype.abort = function() {
                this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new S.Abort))
            }, de.prototype.table = function(e) {
                var n = this._memoizedTables || (this._memoizedTables = {});
                if (W(n, e)) return n[e];
                var t = this.schema[e];
                if (!t) throw new S.NotFound("Table " + e + " not part of transaction");
                return t = new this.db.Table(e, t, this), t.core = this.db.core.table(e), n[e] = t
            }, de);

        function de() {}

        function vt(e, n, t, r, o, i, a) {
            return {
                name: e,
                keyPath: n,
                unique: t,
                multi: r,
                auto: o,
                compound: i,
                src: (t && !a ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + lr(n)
            }
        }

        function lr(e) {
            return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : ""
        }

        function mt(e, n, t) {
            return {
                name: e,
                primKey: n,
                indexes: t,
                mappedClass: null,
                idxByName: (r = function(o) {
                    return [o.name, o]
                }, t.reduce(function(o, i, a) {
                    return a = r(i, a), a && (o[a[0]] = a[1]), o
                }, {}))
            };
            var r
        }
        var dn = function(e) {
            try {
                return e.only([
                    []
                ]), dn = function() {
                    return [
                        []
                    ]
                }, [
                    []
                ]
            } catch {
                return dn = function() {
                    return Be
                }, Be
            }
        };

        function gt(e) {
            return e == null ? function() {} : typeof e == "string" ? (n = e).split(".").length === 1 ? function(t) {
                return t[n]
            } : function(t) {
                return ye(t, n)
            } : function(t) {
                return ye(t, e)
            };
            var n
        }

        function fr(e) {
            return [].slice.call(e)
        }
        var no = 0;

        function pn(e) {
            return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]")
        }

        function to(e, n, f) {
            function r(h) {
                if (h.type === 3) return null;
                if (h.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
                var l = h.lower,
                    d = h.upper,
                    v = h.lowerOpen,
                    h = h.upperOpen;
                return l === void 0 ? d === void 0 ? null : n.upperBound(d, !!h) : d === void 0 ? n.lowerBound(l, !!v) : n.bound(l, d, !!v, !!h)
            }

            function o(y) {
                var l, d = y.name;
                return {
                    name: d,
                    schema: y,
                    mutate: function(v) {
                        var h = v.trans,
                            m = v.type,
                            g = v.keys,
                            b = v.values,
                            w = v.range;
                        return new Promise(function(x, O) {
                            x = Q(x);
                            var k = h.objectStore(d),
                                P = k.keyPath == null,
                                E = m === "put" || m === "add";
                            if (!E && m !== "delete" && m !== "deleteRange") throw new Error("Invalid operation type: " + m);
                            var _, T = (g || b || {
                                length: 1
                            }).length;
                            if (g && b && g.length !== b.length) throw new Error("Given keys array must have same length as given values array.");
                            if (T === 0) return x({
                                numFailures: 0,
                                failures: {},
                                results: [],
                                lastResult: void 0
                            });

                            function j(ie) {
                                ++le, fn(ie)
                            }
                            var F = [],
                                R = [],
                                le = 0;
                            if (m === "deleteRange") {
                                if (w.type === 4) return x({
                                    numFailures: le,
                                    failures: R,
                                    results: [],
                                    lastResult: void 0
                                });
                                w.type === 3 ? F.push(_ = k.clear()) : F.push(_ = k.delete(r(w)))
                            } else {
                                var P = E ? P ? [b, g] : [b, null] : [g, null],
                                    q = P[0],
                                    te = P[1];
                                if (E)
                                    for (var re = 0; re < T; ++re) F.push(_ = te && te[re] !== void 0 ? k[m](q[re], te[re]) : k[m](q[re])), _.onerror = j;
                                else
                                    for (re = 0; re < T; ++re) F.push(_ = k[m](q[re])), _.onerror = j
                            }

                            function Yn(ie) {
                                ie = ie.target.result, F.forEach(function(Ue, qt) {
                                    return Ue.error != null && (R[qt] = Ue.error)
                                }), x({
                                    numFailures: le,
                                    failures: R,
                                    results: m === "delete" ? g : F.map(function(Ue) {
                                        return Ue.result
                                    }),
                                    lastResult: ie
                                })
                            }
                            _.onerror = function(ie) {
                                j(ie), Yn(ie)
                            }, _.onsuccess = Yn
                        })
                    },
                    getMany: function(v) {
                        var h = v.trans,
                            m = v.keys;
                        return new Promise(function(g, b) {
                            g = Q(g);
                            for (var w, x = h.objectStore(d), O = m.length, k = new Array(O), P = 0, E = 0, _ = function(F) {
                                    F = F.target, k[F._pos] = F.result, ++E === P && g(k)
                                }, T = he(b), j = 0; j < O; ++j) m[j] != null && ((w = x.get(m[j]))._pos = j, w.onsuccess = _, w.onerror = T, ++P);
                            P === 0 && g(k)
                        })
                    },
                    get: function(v) {
                        var h = v.trans,
                            m = v.key;
                        return new Promise(function(g, b) {
                            g = Q(g);
                            var w = h.objectStore(d).get(m);
                            w.onsuccess = function(x) {
                                return g(x.target.result)
                            }, w.onerror = he(b)
                        })
                    },
                    query: (l = c, function(v) {
                        return new Promise(function(h, m) {
                            h = Q(h);
                            var g, b, w, P = v.trans,
                                x = v.values,
                                O = v.limit,
                                _ = v.query,
                                k = O === 1 / 0 ? void 0 : O,
                                E = _.index,
                                _ = _.range,
                                P = P.objectStore(d),
                                E = E.isPrimaryKey ? P : P.index(E.name),
                                _ = r(_);
                            if (O === 0) return h({
                                result: []
                            });
                            l ? ((k = x ? E.getAll(_, k) : E.getAllKeys(_, k)).onsuccess = function(T) {
                                return h({
                                    result: T.target.result
                                })
                            }, k.onerror = he(m)) : (g = 0, b = !x && "openKeyCursor" in E ? E.openKeyCursor(_) : E.openCursor(_), w = [], b.onsuccess = function(T) {
                                var j = b.result;
                                return j ? (w.push(x ? j.value : j.primaryKey), ++g === O ? h({
                                    result: w
                                }) : void j.continue()) : h({
                                    result: w
                                })
                            }, b.onerror = he(m))
                        })
                    }),
                    openCursor: function(v) {
                        var h = v.trans,
                            m = v.values,
                            g = v.query,
                            b = v.reverse,
                            w = v.unique;
                        return new Promise(function(x, O) {
                            x = Q(x);
                            var E = g.index,
                                k = g.range,
                                P = h.objectStore(d),
                                P = E.isPrimaryKey ? P : P.index(E.name),
                                E = b ? w ? "prevunique" : "prev" : w ? "nextunique" : "next",
                                _ = !m && "openKeyCursor" in P ? P.openKeyCursor(r(k), E) : P.openCursor(r(k), E);
                            _.onerror = he(O), _.onsuccess = Q(function(T) {
                                var j, F, R, le, q = _.result;
                                q ? (q.___id = ++no, q.done = !1, j = q.continue.bind(q), F = (F = q.continuePrimaryKey) && F.bind(q), R = q.advance.bind(q), le = function() {
                                    throw new Error("Cursor not stopped")
                                }, q.trans = h, q.stop = q.continue = q.continuePrimaryKey = q.advance = function() {
                                    throw new Error("Cursor not started")
                                }, q.fail = Q(O), q.next = function() {
                                    var te = this,
                                        re = 1;
                                    return this.start(function() {
                                        return re-- ? te.continue() : te.stop()
                                    }).then(function() {
                                        return te
                                    })
                                }, q.start = function(te) {
                                    function re() {
                                        if (_.result) try {
                                            te()
                                        } catch (ie) {
                                            q.fail(ie)
                                        } else q.done = !0, q.start = function() {
                                            throw new Error("Cursor behind last entry")
                                        }, q.stop()
                                    }
                                    var Yn = new Promise(function(ie, Ue) {
                                        ie = Q(ie), _.onerror = he(Ue), q.fail = Ue, q.stop = function(qt) {
                                            q.stop = q.continue = q.continuePrimaryKey = q.advance = le, ie(qt)
                                        }
                                    });
                                    return _.onsuccess = Q(function(ie) {
                                        _.onsuccess = re, re()
                                    }), q.continue = j, q.continuePrimaryKey = F, q.advance = R, re(), Yn
                                }, x(q)) : x(null)
                            }, O)
                        })
                    },
                    count: function(v) {
                        var h = v.query,
                            m = v.trans,
                            g = h.index,
                            b = h.range;
                        return new Promise(function(w, x) {
                            var O = m.objectStore(d),
                                k = g.isPrimaryKey ? O : O.index(g.name),
                                O = r(b),
                                k = O ? k.count(O) : k.count();
                            k.onsuccess = Q(function(P) {
                                return w(P.target.result)
                            }), k.onerror = he(x)
                        })
                    }
                }
            }
            var i, a, u, p = (a = f, u = fr((i = e).objectStoreNames), {
                    schema: {
                        name: i.name,
                        tables: u.map(function(y) {
                            return a.objectStore(y)
                        }).map(function(y) {
                            var l = y.keyPath,
                                h = y.autoIncrement,
                                d = K(l),
                                v = {},
                                h = {
                                    name: y.name,
                                    primaryKey: {
                                        name: null,
                                        isPrimaryKey: !0,
                                        outbound: l == null,
                                        compound: d,
                                        keyPath: l,
                                        autoIncrement: h,
                                        unique: !0,
                                        extractKey: gt(l)
                                    },
                                    indexes: fr(y.indexNames).map(function(m) {
                                        return y.index(m)
                                    }).map(function(w) {
                                        var g = w.name,
                                            b = w.unique,
                                            x = w.multiEntry,
                                            w = w.keyPath,
                                            x = {
                                                name: g,
                                                compound: K(w),
                                                keyPath: w,
                                                unique: b,
                                                multiEntry: x,
                                                extractKey: gt(w)
                                            };
                                        return v[pn(w)] = x
                                    }),
                                    getIndexByKeyPath: function(m) {
                                        return v[pn(m)]
                                    }
                                };
                            return v[":id"] = h.primaryKey, l != null && (v[pn(l)] = h.primaryKey), h
                        })
                    },
                    hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
                }),
                f = p.schema,
                c = p.hasGetAll,
                p = f.tables.map(o),
                s = {};
            return p.forEach(function(y) {
                return s[y.name] = y
            }), {
                stack: "dbcore",
                transaction: e.transaction.bind(e),
                table: function(y) {
                    if (!s[y]) throw new Error("Table '".concat(y, "' not found"));
                    return s[y]
                },
                MIN_KEY: -1 / 0,
                MAX_KEY: dn(n),
                schema: f
            }
        }

        function ro(e, n, t, r) {
            var o = t.IDBKeyRange;
            return t.indexedDB, {
                dbcore: (r = to(n, o, r), e.dbcore.reduce(function(i, a) {
                    return a = a.create, I(I({}, i), a(i))
                }, r))
            }
        }

        function Rn(e, r) {
            var t = r.db,
                r = ro(e._middlewares, t, e._deps, r);
            e.core = r.dbcore, e.tables.forEach(function(o) {
                var i = o.name;
                e.core.schema.tables.some(function(a) {
                    return a.name === i
                }) && (o.core = e.core.table(i), e[i] instanceof e.Table && (e[i].core = o.core))
            })
        }

        function qn(e, n, t, r) {
            t.forEach(function(o) {
                var i = r[o];
                n.forEach(function(a) {
                    var u = function f(c, p) {
                        return jr(c, p) || (c = $(c)) && f(c, p)
                    }(a, o);
                    (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? xe(a, o, {
                        get: function() {
                            return this.table(o)
                        },
                        set: function(f) {
                            Mt(this, o, {
                                value: f,
                                writable: !0,
                                configurable: !0,
                                enumerable: !0
                            })
                        }
                    }) : a[o] = new e.Table(o, i))
                })
            })
        }

        function bt(e, n) {
            n.forEach(function(t) {
                for (var r in t) t[r] instanceof e.Table && delete t[r]
            })
        }

        function oo(e, n) {
            return e._cfg.version - n._cfg.version
        }

        function io(e, n, t, r) {
            var o = e._dbSchema;
            t.objectStoreNames.contains("$meta") && !o.$meta && (o.$meta = mt("$meta", dr("")[0], []), e._storeNames.push("$meta"));
            var i = e._createTransaction("readwrite", e._storeNames, o);
            i.create(t), i._completion.catch(r);
            var a = i._reject.bind(i),
                u = C.transless || C;
            Pe(function() {
                return C.trans = i, C.transless = u, n !== 0 ? (Rn(e, t), c = n, ((f = i).storeNames.includes("$meta") ? f.table("$meta").get("version").then(function(p) {
                    return p ? ? c
                }) : A.resolve(c)).then(function(p) {
                    return y = p, l = i, d = t, v = [], p = (s = e)._versions, h = s._dbSchema = Fn(0, s.idbdb, d), (p = p.filter(function(m) {
                        return m._cfg.version >= y
                    })).length !== 0 ? (p.forEach(function(m) {
                        v.push(function() {
                            var g = h,
                                b = m._cfg.dbschema;
                            Mn(s, g, d), Mn(s, b, d), h = s._dbSchema = b;
                            var w = wt(g, b);
                            w.add.forEach(function(E) {
                                _t(d, E[0], E[1].primKey, E[1].indexes)
                            }), w.change.forEach(function(E) {
                                if (E.recreate) throw new S.Upgrade("Not yet support for changing primary key");
                                var _ = d.objectStore(E.name);
                                E.add.forEach(function(T) {
                                    return Bn(_, T)
                                }), E.change.forEach(function(T) {
                                    _.deleteIndex(T.name), Bn(_, T)
                                }), E.del.forEach(function(T) {
                                    return _.deleteIndex(T)
                                })
                            });
                            var x = m._cfg.contentUpgrade;
                            if (x && m._cfg.version > y) {
                                Rn(s, d), l._memoizedTables = {};
                                var O = Lt(b);
                                w.del.forEach(function(E) {
                                    O[E] = g[E]
                                }), bt(s, [s.Transaction.prototype]), qn(s, [s.Transaction.prototype], U(O), O), l.schema = O;
                                var k, P = Zn(x);
                                return P && Ge(), w = A.follow(function() {
                                    var E;
                                    (k = x(l)) && P && (E = Oe.bind(null, null), k.then(E, E))
                                }), k && typeof k.then == "function" ? A.resolve(k) : w.then(function() {
                                    return k
                                })
                            }
                        }), v.push(function(g) {
                            var b, w, x = m._cfg.dbschema;
                            b = x, w = g, [].slice.call(w.db.objectStoreNames).forEach(function(O) {
                                return b[O] == null && w.db.deleteObjectStore(O)
                            }), bt(s, [s.Transaction.prototype]), qn(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema
                        }), v.push(function(g) {
                            s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === m._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(b) {
                                return b !== "$meta"
                            })) : g.objectStore("$meta").put(m._cfg.version, "version"))
                        })
                    }), function m() {
                        return v.length ? A.resolve(v.shift()(l.idbtrans)).then(m) : A.resolve()
                    }().then(function() {
                        hr(h, d)
                    })) : A.resolve();
                    var s, y, l, d, v, h
                }).catch(a)) : (U(o).forEach(function(p) {
                    _t(t, p, o[p].primKey, o[p].indexes)
                }), Rn(e, t), void A.follow(function() {
                    return e.on.populate.fire(i)
                }).catch(a));
                var f, c
            })
        }

        function ao(e, n) {
            hr(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
            var t = Fn(0, e.idbdb, n);
            Mn(e, e._dbSchema, n);
            for (var r = 0, o = wt(t, e._dbSchema).change; r < o.length; r++) {
                var i = function(a) {
                    if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), {
                        value: void 0
                    };
                    var u = n.objectStore(a.name);
                    a.add.forEach(function(f) {
                        fe && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(f.src)), Bn(u, f)
                    })
                }(o[r]);
                if (typeof i == "object") return i.value
            }
        }

        function wt(e, n) {
            var t, r = {
                del: [],
                add: [],
                change: []
            };
            for (t in e) n[t] || r.del.push(t);
            for (t in n) {
                var o = e[t],
                    i = n[t];
                if (o) {
                    var a = {
                        name: t,
                        def: i,
                        recreate: !1,
                        del: [],
                        add: [],
                        change: []
                    };
                    if ("" + (o.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || o.primKey.auto !== i.primKey.auto) a.recreate = !0, r.change.push(a);
                    else {
                        var u = o.idxByName,
                            f = i.idxByName,
                            c = void 0;
                        for (c in u) f[c] || a.del.push(c);
                        for (c in f) {
                            var p = u[c],
                                s = f[c];
                            p ? p.src !== s.src && a.change.push(s) : a.add.push(s)
                        }(0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a)
                    }
                } else r.add.push([t, i])
            }
            return r
        }

        function _t(e, n, t, r) {
            var o = e.db.createObjectStore(n, t.keyPath ? {
                keyPath: t.keyPath,
                autoIncrement: t.auto
            } : {
                autoIncrement: t.auto
            });
            return r.forEach(function(i) {
                return Bn(o, i)
            }), o
        }

        function hr(e, n) {
            U(e).forEach(function(t) {
                n.db.objectStoreNames.contains(t) || (fe && console.debug("Dexie: Creating missing table", t), _t(n, t, e[t].primKey, e[t].indexes))
            })
        }

        function Bn(e, n) {
            e.createIndex(n.name, n.keyPath, {
                unique: n.unique,
                multiEntry: n.multi
            })
        }

        function Fn(e, n, t) {
            var r = {};
            return bn(n.objectStoreNames, 0).forEach(function(o) {
                for (var i = t.objectStore(o), a = vt(lr(c = i.keyPath), c || "", !0, !1, !!i.autoIncrement, c && typeof c != "string", !0), u = [], f = 0; f < i.indexNames.length; ++f) {
                    var p = i.index(i.indexNames[f]),
                        c = p.keyPath,
                        p = vt(p.name, c, !!p.unique, !!p.multiEntry, !1, c && typeof c != "string", !1);
                    u.push(p)
                }
                r[o] = mt(o, a, u)
            }), r
        }

        function Mn(e, n, t) {
            for (var r = t.db.objectStoreNames, o = 0; o < r.length; ++o) {
                var i = r[o],
                    a = t.objectStore(i);
                e._hasGetAll = "getAll" in a;
                for (var u = 0; u < a.indexNames.length; ++u) {
                    var f = a.indexNames[u],
                        c = a.index(f).keyPath,
                        p = typeof c == "string" ? c : "[" + bn(c).join("+") + "]";
                    !n[i] || (c = n[i].idxByName[p]) && (c.name = f, delete n[i].idxByName[p], n[i].idxByName[f] = c)
                }
            }
            typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && B.WorkerGlobalScope && B instanceof B.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1)
        }

        function dr(e) {
            return e.split(",").map(function(n, t) {
                var r = (n = n.trim()).replace(/([&*]|\+\+)/g, ""),
                    o = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
                return vt(r, o || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), K(o), t === 0)
            })
        }
        var uo = (Nn.prototype._parseStoresSpec = function(e, n) {
            U(e).forEach(function(t) {
                if (e[t] !== null) {
                    var r = dr(e[t]),
                        o = r.shift();
                    if (o.unique = !0, o.multi) throw new S.Schema("Primary key cannot be multi-valued");
                    r.forEach(function(i) {
                        if (i.auto) throw new S.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!i.keyPath) throw new S.Schema("Index must have a name and cannot be an empty string")
                    }), n[t] = mt(t, o, r)
                }
            })
        }, Nn.prototype.stores = function(t) {
            var n = this.db;
            this._cfg.storesSource = this._cfg.storesSource ? z(this._cfg.storesSource, t) : t;
            var t = n._versions,
                r = {},
                o = {};
            return t.forEach(function(i) {
                z(r, i._cfg.storesSource), o = i._cfg.dbschema = {}, i._parseStoresSpec(r, o)
            }), n._dbSchema = o, bt(n, [n._allTables, n, n.Transaction.prototype]), qn(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], U(o), o), n._storeNames = U(o), this
        }, Nn.prototype.upgrade = function(e) {
            return this._cfg.contentUpgrade = nt(this._cfg.contentUpgrade || L, e), this
        }, Nn);

        function Nn() {}

        function xt(e, n) {
            var t = e._dbNamesDB;
            return t || (t = e._dbNamesDB = new be(Sn, {
                addons: [],
                indexedDB: e,
                IDBKeyRange: n
            })).version(1).stores({
                dbnames: "name"
            }), t.table("dbnames")
        }

        function kt(e) {
            return e && typeof e.databases == "function"
        }

        function Pt(e) {
            return Pe(function() {
                return C.letThrough = !0, e()
            })
        }

        function Ot(e) {
            return !("from" in e)
        }
        var oe = function(e, n) {
            if (!this) {
                var t = new oe;
                return e && "d" in e && z(t, e), t
            }
            z(this, arguments.length ? {
                d: 1,
                from: e,
                to: 1 < arguments.length ? n : e
            } : {
                d: 0
            })
        };

        function yn(e, n, t) {
            var r = M(n, t);
            if (!isNaN(r)) {
                if (0 < r) throw RangeError();
                if (Ot(e)) return z(e, {
                    from: n,
                    to: t,
                    d: 1
                });
                var o = e.l,
                    r = e.r;
                if (M(t, e.from) < 0) return o ? yn(o, n, t) : e.l = {
                    from: n,
                    to: t,
                    d: 1,
                    l: null,
                    r: null
                }, yr(e);
                if (0 < M(n, e.to)) return r ? yn(r, n, t) : e.r = {
                    from: n,
                    to: t,
                    d: 1,
                    l: null,
                    r: null
                }, yr(e);
                M(n, e.from) < 0 && (e.from = n, e.l = null, e.d = r ? r.d + 1 : 1), 0 < M(t, e.to) && (e.to = t, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, o && !e.l && vn(e, o), r && t && vn(e, r)
            }
        }

        function vn(e, n) {
            Ot(n) || function t(r, f) {
                var i = f.from,
                    a = f.to,
                    u = f.l,
                    f = f.r;
                yn(r, i, a), u && t(r, u), f && t(r, f)
            }(e, n)
        }

        function pr(e, n) {
            var t = Un(n),
                r = t.next();
            if (r.done) return !1;
            for (var o = r.value, i = Un(e), a = i.next(o.from), u = a.value; !r.done && !a.done;) {
                if (M(u.from, o.to) <= 0 && 0 <= M(u.to, o.from)) return !0;
                M(o.from, u.from) < 0 ? o = (r = t.next(u.from)).value : u = (a = i.next(o.from)).value
            }
            return !1
        }

        function Un(e) {
            var n = Ot(e) ? null : {
                s: 0,
                n: e
            };
            return {
                next: function(t) {
                    for (var r = 0 < arguments.length; n;) switch (n.s) {
                        case 0:
                            if (n.s = 1, r)
                                for (; n.n.l && M(t, n.n.from) < 0;) n = {
                                    up: n,
                                    n: n.n.l,
                                    s: 1
                                };
                            else
                                for (; n.n.l;) n = {
                                    up: n,
                                    n: n.n.l,
                                    s: 1
                                };
                        case 1:
                            if (n.s = 2, !r || M(t, n.n.to) <= 0) return {
                                value: n.n,
                                done: !1
                            };
                        case 2:
                            if (n.n.r) {
                                n.s = 3, n = {
                                    up: n,
                                    n: n.n.r,
                                    s: 0
                                };
                                continue
                            }
                        case 3:
                            n = n.up
                    }
                    return {
                        done: !0
                    }
                }
            }
        }

        function yr(e) {
            var n, t, r = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((t = e.l) === null || t === void 0 ? void 0 : t.d) || 0),
                o = 1 < r ? "r" : r < -1 ? "l" : "";
            o && (n = o == "r" ? "l" : "r", t = I({}, e), r = e[o], e.from = r.from, e.to = r.to, e[o] = r[o], t[o] = r[n], (e[n] = t).d = vr(t)), e.d = vr(e)
        }

        function vr(t) {
            var n = t.r,
                t = t.l;
            return (n ? t ? Math.max(n.d, t.d) : n.d : t ? t.d : 0) + 1
        }

        function Ln(e, n) {
            return U(n).forEach(function(t) {
                e[t] ? vn(e[t], n[t]) : e[t] = function r(o) {
                    var i, a, u = {};
                    for (i in o) W(o, i) && (a = o[i], u[i] = !a || typeof a != "object" || zt.has(a.constructor) ? a : r(a));
                    return u
                }(n[t])
            }), e
        }

        function Et(e, n) {
            return e.all || n.all || Object.keys(e).some(function(t) {
                return n[t] && pr(n[t], e[t])
            })
        }
        Se(oe.prototype, ((ce = {
            add: function(e) {
                return vn(this, e), this
            },
            addKey: function(e) {
                return yn(this, e, e), this
            },
            addKeys: function(e) {
                var n = this;
                return e.forEach(function(t) {
                    return yn(n, t, t)
                }), this
            },
            hasKey: function(e) {
                var n = Un(this).next(e).value;
                return n && M(n.from, e) <= 0 && 0 <= M(n.to, e)
            }
        })[Jn] = function() {
            return Un(this)
        }, ce));
        var Me = {},
            At = {},
            It = !1;

        function Vn(e) {
            Ln(At, e), It || (It = !0, setTimeout(function() {
                It = !1, Ct(At, !(At = {}))
            }, 0))
        }

        function Ct(e, n) {
            n === void 0 && (n = !1);
            var t = new Set;
            if (e.all)
                for (var r = 0, o = Object.values(Me); r < o.length; r++) mr(a = o[r], e, t, n);
            else
                for (var i in e) {
                    var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(i);
                    u && (i = u[1], u = u[2], (a = Me["idb://".concat(i, "/").concat(u)]) && mr(a, e, t, n))
                }
            t.forEach(function(f) {
                return f()
            })
        }

        function mr(e, n, t, r) {
            for (var o = [], i = 0, a = Object.entries(e.queries.query); i < a.length; i++) {
                for (var u = a[i], f = u[0], c = [], p = 0, s = u[1]; p < s.length; p++) {
                    var y = s[p];
                    Et(n, y.obsSet) ? y.subscribers.forEach(function(h) {
                        return t.add(h)
                    }) : r && c.push(y)
                }
                r && o.push([f, c])
            }
            if (r)
                for (var l = 0, d = o; l < d.length; l++) {
                    var v = d[l],
                        f = v[0],
                        c = v[1];
                    e.queries.query[f] = c
                }
        }

        function so(e) {
            var n = e._state,
                t = e._deps.indexedDB;
            if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
                return n.dbOpenError ? H(n.dbOpenError) : e
            });
            n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
            var r = n.openCanceller,
                o = Math.round(10 * e.verno),
                i = !1;

            function a() {
                if (n.openCanceller !== r) throw new S.DatabaseClosed("db.open() was cancelled")
            }

            function u() {
                return new A(function(y, l) {
                    if (a(), !t) throw new S.MissingAPI;
                    var d = e.name,
                        v = n.autoSchema || !o ? t.open(d) : t.open(d, o);
                    if (!v) throw new S.MissingAPI;
                    v.onerror = he(l), v.onblocked = Q(e._fireOnBlocked), v.onupgradeneeded = Q(function(h) {
                        var m;
                        p = v.transaction, n.autoSchema && !e._options.allowEmptyDB ? (v.onerror = fn, p.abort(), v.result.close(), (m = t.deleteDatabase(d)).onsuccess = m.onerror = Q(function() {
                            l(new S.NoSuchDatabase("Database ".concat(d, " doesnt exist")))
                        })) : (p.onerror = he(l), h = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion, s = h < 1, e.idbdb = v.result, i && ao(e, p), io(e, h / 10, p, l))
                    }, l), v.onsuccess = Q(function() {
                        p = null;
                        var h, m, g, b, w, x = e.idbdb = v.result,
                            O = bn(x.objectStoreNames);
                        if (0 < O.length) try {
                            var k = x.transaction((b = O).length === 1 ? b[0] : b, "readonly");
                            if (n.autoSchema) m = x, g = k, (h = e).verno = m.version / 10, g = h._dbSchema = Fn(0, m, g), h._storeNames = bn(m.objectStoreNames, 0), qn(h, [h._allTables], U(g), g);
                            else if (Mn(e, e._dbSchema, k), ((w = wt(Fn(0, (w = e).idbdb, k), w._dbSchema)).add.length || w.change.some(function(P) {
                                    return P.add.length || P.change.length
                                })) && !i) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), x.close(), o = x.version + 1, i = !0, y(u());
                            Rn(e, k)
                        } catch {}
                        Qe.push(e), x.onversionchange = Q(function(P) {
                            n.vcFired = !0, e.on("versionchange").fire(P)
                        }), x.onclose = Q(function(P) {
                            e.on("close").fire(P)
                        }), s && (w = e._deps, k = d, x = w.indexedDB, w = w.IDBKeyRange, kt(x) || k === Sn || xt(x, w).put({
                            name: k
                        }).catch(L)), y()
                    }, l)
                }).catch(function(y) {
                    switch (y ? .name) {
                        case "UnknownError":
                            if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), u();
                            break;
                        case "VersionError":
                            if (0 < o) return o = 0, u()
                    }
                    return A.reject(y)
                })
            }
            var f, c = n.dbReadyResolve,
                p = null,
                s = !1;
            return A.race([r, (typeof navigator > "u" ? A.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(y) {
                function l() {
                    return indexedDB.databases().finally(y)
                }
                f = setInterval(l, 100), l()
            }).finally(function() {
                return clearInterval(f)
            }) : Promise.resolve()).then(u)]).then(function() {
                return a(), n.onReadyBeingFired = [], A.resolve(Pt(function() {
                    return e.on.ready.fire(e.vip)
                })).then(function y() {
                    if (0 < n.onReadyBeingFired.length) {
                        var l = n.onReadyBeingFired.reduce(nt, L);
                        return n.onReadyBeingFired = [], A.resolve(Pt(function() {
                            return l(e.vip)
                        })).then(y)
                    }
                })
            }).finally(function() {
                n.openCanceller === r && (n.onReadyBeingFired = null, n.isBeingOpened = !1)
            }).catch(function(y) {
                n.dbOpenError = y;
                try {
                    p && p.abort()
                } catch {}
                return r === n.openCanceller && e._close(), H(y)
            }).finally(function() {
                n.openComplete = !0, c()
            }).then(function() {
                var y;
                return s && (y = {}, e.tables.forEach(function(l) {
                    l.schema.indexes.forEach(function(d) {
                        d.name && (y["idb://".concat(e.name, "/").concat(l.name, "/").concat(d.name)] = new oe(-1 / 0, [
                            [
                                []
                            ]
                        ]))
                    }), y["idb://".concat(e.name, "/").concat(l.name, "/")] = y["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new oe(-1 / 0, [
                        [
                            []
                        ]
                    ])
                }), Ie(hn).fire(y), Ct(y, !0)), e
            })
        }

        function St(e) {
            function n(i) {
                return e.next(i)
            }
            var t = o(n),
                r = o(function(i) {
                    return e.throw(i)
                });

            function o(i) {
                return function(f) {
                    var u = i(f),
                        f = u.value;
                    return u.done ? f : f && typeof f.then == "function" ? f.then(t, r) : K(f) ? Promise.all(f).then(t, r) : t(f)
                }
            }
            return o(n)()
        }

        function zn(e, n, t) {
            for (var r = K(e) ? e.slice() : [e], o = 0; o < t; ++o) r.push(n);
            return r
        }
        var co = {
            stack: "dbcore",
            name: "VirtualIndexMiddleware",
            level: 1,
            create: function(e) {
                return I(I({}, e), {
                    table: function(n) {
                        var t = e.table(n),
                            r = t.schema,
                            o = {},
                            i = [];

                        function a(s, y, l) {
                            var d = pn(s),
                                v = o[d] = o[d] || [],
                                h = s == null ? 0 : typeof s == "string" ? 1 : s.length,
                                m = 0 < y,
                                m = I(I({}, l), {
                                    name: m ? "".concat(d, "(virtual-from:").concat(l.name, ")") : l.name,
                                    lowLevelIndex: l,
                                    isVirtual: m,
                                    keyTail: y,
                                    keyLength: h,
                                    extractKey: gt(s),
                                    unique: !m && l.unique
                                });
                            return v.push(m), m.isPrimaryKey || i.push(m), 1 < h && a(h === 2 ? s[0] : s.slice(0, h - 1), y + 1, l), v.sort(function(g, b) {
                                return g.keyTail - b.keyTail
                            }), m
                        }
                        n = a(r.primaryKey.keyPath, 0, r.primaryKey), o[":id"] = [n];
                        for (var u = 0, f = r.indexes; u < f.length; u++) {
                            var c = f[u];
                            a(c.keyPath, 0, c)
                        }

                        function p(s) {
                            var y, l = s.query.index;
                            return l.isVirtual ? I(I({}, s), {
                                query: {
                                    index: l.lowLevelIndex,
                                    range: (y = s.query.range, l = l.keyTail, {
                                        type: y.type === 1 ? 2 : y.type,
                                        lower: zn(y.lower, y.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l),
                                        lowerOpen: !0,
                                        upper: zn(y.upper, y.upperOpen ? e.MIN_KEY : e.MAX_KEY, l),
                                        upperOpen: !0
                                    })
                                }
                            }) : s
                        }
                        return I(I({}, t), {
                            schema: I(I({}, r), {
                                primaryKey: n,
                                indexes: i,
                                getIndexByKeyPath: function(s) {
                                    return (s = o[pn(s)]) && s[0]
                                }
                            }),
                            count: function(s) {
                                return t.count(p(s))
                            },
                            query: function(s) {
                                return t.query(p(s))
                            },
                            openCursor: function(s) {
                                var y = s.query.index,
                                    l = y.keyTail,
                                    d = y.isVirtual,
                                    v = y.keyLength;
                                return d ? t.openCursor(p(s)).then(function(m) {
                                    return m && h(m)
                                }) : t.openCursor(s);

                                function h(m) {
                                    return Object.create(m, {
                                        continue: {
                                            value: function(g) {
                                                g != null ? m.continue(zn(g, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? m.continue(m.key.slice(0, v).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : m.continue()
                                            }
                                        },
                                        continuePrimaryKey: {
                                            value: function(g, b) {
                                                m.continuePrimaryKey(zn(g, e.MAX_KEY, l), b)
                                            }
                                        },
                                        primaryKey: {
                                            get: function() {
                                                return m.primaryKey
                                            }
                                        },
                                        key: {
                                            get: function() {
                                                var g = m.key;
                                                return v === 1 ? g[0] : g.slice(0, v)
                                            }
                                        },
                                        value: {
                                            get: function() {
                                                return m.value
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                })
            }
        };

        function Kt(e, n, t, r) {
            return t = t || {}, r = r || "", U(e).forEach(function(o) {
                var i, a, u;
                W(n, o) ? (i = e[o], a = n[o], typeof i == "object" && typeof a == "object" && i && a ? (u = Xn(i)) !== Xn(a) ? t[r + o] = n[o] : u === "Object" ? Kt(i, a, t, r + o + ".") : i !== a && (t[r + o] = n[o]) : i !== a && (t[r + o] = n[o])) : t[r + o] = void 0
            }), U(n).forEach(function(o) {
                W(e, o) || (t[r + o] = n[o])
            }), t
        }

        function Dt(e, n) {
            return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey)
        }
        var lo = {
            stack: "dbcore",
            name: "HooksMiddleware",
            level: 2,
            create: function(e) {
                return I(I({}, e), {
                    table: function(n) {
                        var t = e.table(n),
                            r = t.schema.primaryKey;
                        return I(I({}, t), {
                            mutate: function(o) {
                                var i = C.trans,
                                    a = i.table(n).hook,
                                    u = a.deleting,
                                    f = a.creating,
                                    c = a.updating;
                                switch (o.type) {
                                    case "add":
                                        if (f.fire === L) break;
                                        return i._promise("readwrite", function() {
                                            return p(o)
                                        }, !0);
                                    case "put":
                                        if (f.fire === L && c.fire === L) break;
                                        return i._promise("readwrite", function() {
                                            return p(o)
                                        }, !0);
                                    case "delete":
                                        if (u.fire === L) break;
                                        return i._promise("readwrite", function() {
                                            return p(o)
                                        }, !0);
                                    case "deleteRange":
                                        if (u.fire === L) break;
                                        return i._promise("readwrite", function() {
                                            return function s(y, l, d) {
                                                return t.query({
                                                    trans: y,
                                                    values: !1,
                                                    query: {
                                                        index: r,
                                                        range: l
                                                    },
                                                    limit: d
                                                }).then(function(v) {
                                                    var h = v.result;
                                                    return p({
                                                        type: "delete",
                                                        keys: h,
                                                        trans: y
                                                    }).then(function(m) {
                                                        return 0 < m.numFailures ? Promise.reject(m.failures[0]) : h.length < d ? {
                                                            failures: [],
                                                            numFailures: 0,
                                                            lastResult: void 0
                                                        } : s(y, I(I({}, l), {
                                                            lower: h[h.length - 1],
                                                            lowerOpen: !0
                                                        }), d)
                                                    })
                                                })
                                            }(o.trans, o.range, 1e4)
                                        }, !0)
                                }
                                return t.mutate(o);

                                function p(s) {
                                    var y, l, d, v = C.trans,
                                        h = s.keys || Dt(r, s);
                                    if (!h) throw new Error("Keys missing");
                                    return (s = s.type === "add" || s.type === "put" ? I(I({}, s), {
                                        keys: h
                                    }) : I({}, s)).type !== "delete" && (s.values = ee([], s.values)), s.keys && (s.keys = ee([], s.keys)), y = t, d = h, ((l = s).type === "add" ? Promise.resolve([]) : y.getMany({
                                        trans: l.trans,
                                        keys: d,
                                        cache: "immutable"
                                    })).then(function(m) {
                                        var g = h.map(function(b, w) {
                                            var x, O, k, P = m[w],
                                                E = {
                                                    onerror: null,
                                                    onsuccess: null
                                                };
                                            return s.type === "delete" ? u.fire.call(E, b, P, v) : s.type === "add" || P === void 0 ? (x = f.fire.call(E, b, s.values[w], v), b == null && x != null && (s.keys[w] = b = x, r.outbound || ue(s.values[w], r.keyPath, b))) : (x = Kt(P, s.values[w]), (O = c.fire.call(E, x, b, P, v)) && (k = s.values[w], Object.keys(O).forEach(function(_) {
                                                W(k, _) ? k[_] = O[_] : ue(k, _, O[_])
                                            }))), E
                                        });
                                        return t.mutate(s).then(function(b) {
                                            for (var w = b.failures, x = b.results, O = b.numFailures, b = b.lastResult, k = 0; k < h.length; ++k) {
                                                var P = (x || h)[k],
                                                    E = g[k];
                                                P == null ? E.onerror && E.onerror(w[k]) : E.onsuccess && E.onsuccess(s.type === "put" && m[k] ? s.values[k] : P)
                                            }
                                            return {
                                                failures: w,
                                                results: x,
                                                numFailures: O,
                                                lastResult: b
                                            }
                                        }).catch(function(b) {
                                            return g.forEach(function(w) {
                                                return w.onerror && w.onerror(b)
                                            }), Promise.reject(b)
                                        })
                                    })
                                }
                            }
                        })
                    }
                })
            }
        };

        function gr(e, n, t) {
            try {
                if (!n || n.keys.length < e.length) return null;
                for (var r = [], o = 0, i = 0; o < n.keys.length && i < e.length; ++o) M(n.keys[o], e[i]) === 0 && (r.push(t ? Ke(n.values[o]) : n.values[o]), ++i);
                return r.length === e.length ? r : null
            } catch {
                return null
            }
        }
        var fo = {
            stack: "dbcore",
            level: -1,
            create: function(e) {
                return {
                    table: function(n) {
                        var t = e.table(n);
                        return I(I({}, t), {
                            getMany: function(r) {
                                if (!r.cache) return t.getMany(r);
                                var o = gr(r.keys, r.trans._cache, r.cache === "clone");
                                return o ? A.resolve(o) : t.getMany(r).then(function(i) {
                                    return r.trans._cache = {
                                        keys: r.keys,
                                        values: r.cache === "clone" ? Ke(i) : i
                                    }, i
                                })
                            },
                            mutate: function(r) {
                                return r.type !== "add" && (r.trans._cache = null), t.mutate(r)
                            }
                        })
                    }
                }
            }
        };

        function br(e, n) {
            return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound
        }

        function wr(e, n) {
            switch (e) {
                case "query":
                    return n.values && !n.unique;
                case "get":
                case "getMany":
                case "count":
                case "openCursor":
                    return !1
            }
        }
        var ho = {
            stack: "dbcore",
            level: 0,
            name: "Observability",
            create: function(e) {
                var n = e.schema.name,
                    t = new oe(e.MIN_KEY, e.MAX_KEY);
                return I(I({}, e), {
                    transaction: function(r, o, i) {
                        if (C.subscr && o !== "readonly") throw new S.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(C.querier));
                        return e.transaction(r, o, i)
                    },
                    table: function(r) {
                        var o = e.table(r),
                            i = o.schema,
                            a = i.primaryKey,
                            s = i.indexes,
                            u = a.extractKey,
                            f = a.outbound,
                            c = a.autoIncrement && s.filter(function(l) {
                                return l.compound && l.keyPath.includes(a.keyPath)
                            }),
                            p = I(I({}, o), {
                                mutate: function(l) {
                                    function d(_) {
                                        return _ = "idb://".concat(n, "/").concat(r, "/").concat(_), b[_] || (b[_] = new oe)
                                    }
                                    var v, h, m, g = l.trans,
                                        b = l.mutatedParts || (l.mutatedParts = {}),
                                        w = d(""),
                                        x = d(":dels"),
                                        O = l.type,
                                        E = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [Dt(a, l).filter(function(_) {
                                            return _
                                        }), l.values] : [],
                                        k = E[0],
                                        P = E[1],
                                        E = l.trans._cache;
                                    return K(k) ? (w.addKeys(k), (E = O === "delete" || k.length === P.length ? gr(k, E) : null) || x.addKeys(k), (E || P) && (v = d, h = E, m = P, i.indexes.forEach(function(_) {
                                        var T = v(_.name || "");

                                        function j(R) {
                                            return R != null ? _.extractKey(R) : null
                                        }

                                        function F(R) {
                                            return _.multiEntry && K(R) ? R.forEach(function(le) {
                                                return T.addKey(le)
                                            }) : T.addKey(R)
                                        }(h || m).forEach(function(R, te) {
                                            var q = h && j(h[te]),
                                                te = m && j(m[te]);
                                            M(q, te) !== 0 && (q != null && F(q), te != null && F(te))
                                        })
                                    }))) : k ? (P = {
                                        from: k.lower,
                                        to: k.upper
                                    }, x.add(P), w.add(P)) : (w.add(t), x.add(t), i.indexes.forEach(function(_) {
                                        return d(_.name).add(t)
                                    })), o.mutate(l).then(function(_) {
                                        return !k || l.type !== "add" && l.type !== "put" || (w.addKeys(_.results), c && c.forEach(function(T) {
                                            var j = l.values.map(function(R) {
                                                    return T.extractKey(R)
                                                }),
                                                F = T.keyPath.findIndex(function(R) {
                                                    return R === a.keyPath
                                                });
                                            _.results.forEach(function(R) {
                                                return j[F] = R
                                            }), d(T.name).addKeys(j)
                                        })), g.mutatedParts = Ln(g.mutatedParts || {}, b), _
                                    })
                                }
                            }),
                            s = function(d) {
                                var v = d.query,
                                    d = v.index,
                                    v = v.range;
                                return [d, new oe((d = v.lower) !== null && d !== void 0 ? d : e.MIN_KEY, (v = v.upper) !== null && v !== void 0 ? v : e.MAX_KEY)]
                            },
                            y = {
                                get: function(l) {
                                    return [a, new oe(l.key)]
                                },
                                getMany: function(l) {
                                    return [a, new oe().addKeys(l.keys)]
                                },
                                count: s,
                                query: s,
                                openCursor: s
                            };
                        return U(y).forEach(function(l) {
                            p[l] = function(d) {
                                var v = C.subscr,
                                    h = !!v,
                                    m = br(C, o) && wr(l, d) ? d.obsSet = {} : v;
                                if (h) {
                                    var g = function(P) {
                                            return P = "idb://".concat(n, "/").concat(r, "/").concat(P), m[P] || (m[P] = new oe)
                                        },
                                        b = g(""),
                                        w = g(":dels"),
                                        v = y[l](d),
                                        h = v[0],
                                        v = v[1];
                                    if ((l === "query" && h.isPrimaryKey && !d.values ? w : g(h.name || "")).add(v), !h.isPrimaryKey) {
                                        if (l !== "count") {
                                            var x = l === "query" && f && d.values && o.query(I(I({}, d), {
                                                values: !1
                                            }));
                                            return o[l].apply(this, arguments).then(function(P) {
                                                if (l === "query") {
                                                    if (f && d.values) return x.then(function(j) {
                                                        return j = j.result, b.addKeys(j), P
                                                    });
                                                    var E = d.values ? P.result.map(u) : P.result;
                                                    (d.values ? b : w).addKeys(E)
                                                } else if (l === "openCursor") {
                                                    var _ = P,
                                                        T = d.values;
                                                    return _ && Object.create(_, {
                                                        key: {
                                                            get: function() {
                                                                return w.addKey(_.primaryKey), _.key
                                                            }
                                                        },
                                                        primaryKey: {
                                                            get: function() {
                                                                var j = _.primaryKey;
                                                                return w.addKey(j), j
                                                            }
                                                        },
                                                        value: {
                                                            get: function() {
                                                                return T && b.addKey(_.primaryKey), _.value
                                                            }
                                                        }
                                                    })
                                                }
                                                return P
                                            })
                                        }
                                        w.add(t)
                                    }
                                }
                                return o[l].apply(this, arguments)
                            }
                        }), p
                    }
                })
            }
        };

        function _r(e, n, t) {
            if (t.numFailures === 0) return n;
            if (n.type === "deleteRange") return null;
            var r = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
            return t.numFailures === r ? null : (n = I({}, n), K(n.keys) && (n.keys = n.keys.filter(function(o, i) {
                return !(i in t.failures)
            })), "values" in n && K(n.values) && (n.values = n.values.filter(function(o, i) {
                return !(i in t.failures)
            })), n)
        }

        function Tt(e, n) {
            return t = e, ((r = n).lower === void 0 || (r.lowerOpen ? 0 < M(t, r.lower) : 0 <= M(t, r.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? M(e, n.upper) < 0 : M(e, n.upper) <= 0));
            var t, r
        }

        function xr(e, n, y, r, o, i) {
            if (!y || y.length === 0) return e;
            var a = n.query.index,
                u = a.multiEntry,
                f = n.query.range,
                c = r.schema.primaryKey.extractKey,
                p = a.extractKey,
                s = (a.lowLevelIndex || a).extractKey,
                y = y.reduce(function(l, d) {
                    var v = l,
                        h = [];
                    if (d.type === "add" || d.type === "put")
                        for (var m = new oe, g = d.values.length - 1; 0 <= g; --g) {
                            var b, w = d.values[g],
                                x = c(w);
                            m.hasKey(x) || (b = p(w), (u && K(b) ? b.some(function(E) {
                                return Tt(E, f)
                            }) : Tt(b, f)) && (m.addKey(x), h.push(w)))
                        }
                    switch (d.type) {
                        case "add":
                            v = l.concat(n.values ? h : h.map(function(_) {
                                return c(_)
                            }));
                            break;
                        case "put":
                            var O = new oe().addKeys(d.values.map(function(_) {
                                    return c(_)
                                })),
                                v = l.filter(function(_) {
                                    return !O.hasKey(n.values ? c(_) : _)
                                }).concat(n.values ? h : h.map(function(_) {
                                    return c(_)
                                }));
                            break;
                        case "delete":
                            var k = new oe().addKeys(d.keys);
                            v = l.filter(function(_) {
                                return !k.hasKey(n.values ? c(_) : _)
                            });
                            break;
                        case "deleteRange":
                            var P = d.range;
                            v = l.filter(function(_) {
                                return !Tt(c(_), P)
                            })
                    }
                    return v
                }, e);
            return y === e ? e : (y.sort(function(l, d) {
                return M(s(l), s(d)) || M(c(l), c(d))
            }), n.limit && n.limit < 1 / 0 && (y.length > n.limit ? y.length = n.limit : e.length === n.limit && y.length < n.limit && (o.dirty = !0)), i ? Object.freeze(y) : y)
        }

        function kr(e, n) {
            return M(e.lower, n.lower) === 0 && M(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen
        }

        function po(e, n) {
            return function(t, r, o, i) {
                if (t === void 0) return r !== void 0 ? -1 : 0;
                if (r === void 0) return 1;
                if ((r = M(t, r)) === 0) {
                    if (o && i) return 0;
                    if (o) return 1;
                    if (i) return -1
                }
                return r
            }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(t, r, o, i) {
                if (t === void 0) return r !== void 0 ? 1 : 0;
                if (r === void 0) return -1;
                if ((r = M(t, r)) === 0) {
                    if (o && i) return 0;
                    if (o) return -1;
                    if (i) return 1
                }
                return r
            }(e.upper, n.upper, e.upperOpen, n.upperOpen)
        }

        function yo(e, n, t, r) {
            e.subscribers.add(t), r.addEventListener("abort", function() {
                var o, i;
                e.subscribers.delete(t), e.subscribers.size === 0 && (o = e, i = n, setTimeout(function() {
                    o.subscribers.size === 0 && De(i, o)
                }, 3e3))
            })
        }
        var vo = {
            stack: "dbcore",
            level: 0,
            name: "Cache",
            create: function(e) {
                var n = e.schema.name;
                return I(I({}, e), {
                    transaction: function(t, r, o) {
                        var i, a, u = e.transaction(t, r, o);
                        return r === "readwrite" && (a = (i = new AbortController).signal, o = function(f) {
                            return function() {
                                if (i.abort(), r === "readwrite") {
                                    for (var c = new Set, p = 0, s = t; p < s.length; p++) {
                                        var y = s[p],
                                            l = Me["idb://".concat(n, "/").concat(y)];
                                        if (l) {
                                            var d = e.table(y),
                                                v = l.optimisticOps.filter(function(T) {
                                                    return T.trans === u
                                                });
                                            if (u._explicit && f && u.mutatedParts)
                                                for (var h = 0, m = Object.values(l.queries.query); h < m.length; h++)
                                                    for (var g = 0, b = (O = m[h]).slice(); g < b.length; g++) Et((k = b[g]).obsSet, u.mutatedParts) && (De(O, k), k.subscribers.forEach(function(T) {
                                                        return c.add(T)
                                                    }));
                                            else if (0 < v.length) {
                                                l.optimisticOps = l.optimisticOps.filter(function(T) {
                                                    return T.trans !== u
                                                });
                                                for (var w = 0, x = Object.values(l.queries.query); w < x.length; w++)
                                                    for (var O, k, P, E = 0, _ = (O = x[w]).slice(); E < _.length; E++)(k = _[E]).res != null && u.mutatedParts && (f && !k.dirty ? (P = Object.isFrozen(k.res), P = xr(k.res, k.req, v, d, k, P), k.dirty ? (De(O, k), k.subscribers.forEach(function(T) {
                                                        return c.add(T)
                                                    })) : P !== k.res && (k.res = P, k.promise = A.resolve({
                                                        result: P
                                                    }))) : (k.dirty && De(O, k), k.subscribers.forEach(function(T) {
                                                        return c.add(T)
                                                    })))
                                            }
                                        }
                                    }
                                    c.forEach(function(T) {
                                        return T()
                                    })
                                }
                            }
                        }, u.addEventListener("abort", o(!1), {
                            signal: a
                        }), u.addEventListener("error", o(!1), {
                            signal: a
                        }), u.addEventListener("complete", o(!0), {
                            signal: a
                        })), u
                    },
                    table: function(t) {
                        var r = e.table(t),
                            o = r.schema.primaryKey;
                        return I(I({}, r), {
                            mutate: function(i) {
                                var a = C.trans;
                                if (o.outbound || a.db._options.cache === "disabled" || a.explicit) return r.mutate(i);
                                var u = Me["idb://".concat(n, "/").concat(t)];
                                return u ? (a = r.mutate(i), i.type !== "add" && i.type !== "put" || !(50 <= i.values.length || Dt(o, i).some(function(f) {
                                    return f == null
                                })) ? (u.optimisticOps.push(i), i.mutatedParts && Vn(i.mutatedParts), a.then(function(f) {
                                    0 < f.numFailures && (De(u.optimisticOps, i), (f = _r(0, i, f)) && u.optimisticOps.push(f), i.mutatedParts && Vn(i.mutatedParts))
                                }), a.catch(function() {
                                    De(u.optimisticOps, i), i.mutatedParts && Vn(i.mutatedParts)
                                })) : a.then(function(f) {
                                    var c = _r(0, I(I({}, i), {
                                        values: i.values.map(function(l, s) {
                                            var y, l = (y = o.keyPath) !== null && y !== void 0 && y.includes(".") ? Ke(l) : I({}, l);
                                            return ue(l, o.keyPath, f.results[s]), l
                                        })
                                    }), f);
                                    u.optimisticOps.push(c), queueMicrotask(function() {
                                        return i.mutatedParts && Vn(i.mutatedParts)
                                    })
                                }), a) : r.mutate(i)
                            },
                            query: function(i) {
                                if (!br(C, r) || !wr("query", i)) return r.query(i);
                                var a = ((c = C.trans) === null || c === void 0 ? void 0 : c.db._options.cache) === "immutable",
                                    s = C,
                                    u = s.requery,
                                    f = s.signal,
                                    c = function(d, v, h, m) {
                                        var g = Me["idb://".concat(d, "/").concat(v)];
                                        if (!g) return [];
                                        if (!(v = g.queries[h])) return [null, !1, g, null];
                                        var b = v[(m.query ? m.query.index.name : null) || ""];
                                        if (!b) return [null, !1, g, null];
                                        switch (h) {
                                            case "query":
                                                var w = b.find(function(x) {
                                                    return x.req.limit === m.limit && x.req.values === m.values && kr(x.req.query.range, m.query.range)
                                                });
                                                return w ? [w, !0, g, b] : [b.find(function(x) {
                                                    return ("limit" in x.req ? x.req.limit : 1 / 0) >= m.limit && (!m.values || x.req.values) && po(x.req.query.range, m.query.range)
                                                }), !1, g, b];
                                            case "count":
                                                return w = b.find(function(x) {
                                                    return kr(x.req.query.range, m.query.range)
                                                }), [w, !!w, g, b]
                                        }
                                    }(n, t, "query", i),
                                    p = c[0],
                                    s = c[1],
                                    y = c[2],
                                    l = c[3];
                                return p && s ? p.obsSet = i.obsSet : (s = r.query(i).then(function(d) {
                                    var v = d.result;
                                    if (p && (p.res = v), a) {
                                        for (var h = 0, m = v.length; h < m; ++h) Object.freeze(v[h]);
                                        Object.freeze(v)
                                    } else d.result = Ke(v);
                                    return d
                                }).catch(function(d) {
                                    return l && p && De(l, p), Promise.reject(d)
                                }), p = {
                                    obsSet: i.obsSet,
                                    promise: s,
                                    subscribers: new Set,
                                    type: "query",
                                    req: i,
                                    dirty: !1
                                }, l ? l.push(p) : (l = [p], (y = y || (Me["idb://".concat(n, "/").concat(t)] = {
                                    queries: {
                                        query: {},
                                        count: {}
                                    },
                                    objs: new Map,
                                    optimisticOps: [],
                                    unsignaledParts: {}
                                })).queries.query[i.query.index.name || ""] = l)), yo(p, l, u, f), p.promise.then(function(d) {
                                    return {
                                        result: xr(d.result, i, y ? .optimisticOps, r, p, a)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        };

        function $n(e, n) {
            return new Proxy(e, {
                get: function(t, r, o) {
                    return r === "db" ? n : Reflect.get(t, r, o)
                }
            })
        }
        var be = (X.prototype.version = function(e) {
            if (isNaN(e) || e < .1) throw new S.Type("Given version is not a positive number");
            if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new S.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, e);
            var n = this._versions,
                t = n.filter(function(r) {
                    return r._cfg.version === e
                })[0];
            return t || (t = new this.Version(e), n.push(t), n.sort(oo), t.stores({}), this._state.autoSchema = !1, t)
        }, X.prototype._whenReady = function(e) {
            var n = this;
            return this.idbdb && (this._state.openComplete || C.letThrough || this._vip) ? e() : new A(function(t, r) {
                if (n._state.openComplete) return r(new S.DatabaseClosed(n._state.dbOpenError));
                if (!n._state.isBeingOpened) {
                    if (!n._state.autoOpen) return void r(new S.DatabaseClosed);
                    n.open().catch(L)
                }
                n._state.dbReadyPromise.then(t, r)
            }).then(e)
        }, X.prototype.use = function(e) {
            var n = e.stack,
                t = e.create,
                r = e.level,
                o = e.name;
            return o && this.unuse({
                stack: n,
                name: o
            }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({
                stack: n,
                create: t,
                level: r ? ? 10,
                name: o
            }), e.sort(function(i, a) {
                return i.level - a.level
            }), this
        }, X.prototype.unuse = function(e) {
            var n = e.stack,
                t = e.name,
                r = e.create;
            return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(o) {
                return r ? o.create !== r : !!t && o.name !== t
            })), this
        }, X.prototype.open = function() {
            var e = this;
            return qe(ke, function() {
                return so(e)
            })
        }, X.prototype._close = function() {
            var e = this._state,
                n = Qe.indexOf(this);
            if (0 <= n && Qe.splice(n, 1), this.idbdb) {
                try {
                    this.idbdb.close()
                } catch {}
                this.idbdb = null
            }
            e.isBeingOpened || (e.dbReadyPromise = new A(function(t) {
                e.dbReadyResolve = t
            }), e.openCanceller = new A(function(t, r) {
                e.cancelOpen = r
            }))
        }, X.prototype.close = function(t) {
            var n = (t === void 0 ? {
                    disableAutoOpen: !0
                } : t).disableAutoOpen,
                t = this._state;
            n ? (t.isBeingOpened && t.cancelOpen(new S.DatabaseClosed), this._close(), t.autoOpen = !1, t.dbOpenError = new S.DatabaseClosed) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null)
        }, X.prototype.delete = function(e) {
            var n = this;
            e === void 0 && (e = {
                disableAutoOpen: !0
            });
            var t = 0 < arguments.length && typeof arguments[0] != "object",
                r = this._state;
            return new A(function(o, i) {
                function a() {
                    n.close(e);
                    var u = n._deps.indexedDB.deleteDatabase(n.name);
                    u.onsuccess = Q(function() {
                        var f, c, p;
                        f = n._deps, c = n.name, p = f.indexedDB, f = f.IDBKeyRange, kt(p) || c === Sn || xt(p, f).delete(c).catch(L), o()
                    }), u.onerror = he(i), u.onblocked = n._fireOnBlocked
                }
                if (t) throw new S.InvalidArgument("Invalid closeOptions argument to db.delete()");
                r.isBeingOpened ? r.dbReadyPromise.then(a) : a()
            })
        }, X.prototype.backendDB = function() {
            return this.idbdb
        }, X.prototype.isOpen = function() {
            return this.idbdb !== null
        }, X.prototype.hasBeenClosed = function() {
            var e = this._state.dbOpenError;
            return e && e.name === "DatabaseClosed"
        }, X.prototype.hasFailed = function() {
            return this._state.dbOpenError !== null
        }, X.prototype.dynamicallyOpened = function() {
            return this._state.autoSchema
        }, Object.defineProperty(X.prototype, "tables", {
            get: function() {
                var e = this;
                return U(this._allTables).map(function(n) {
                    return e._allTables[n]
                })
            },
            enumerable: !1,
            configurable: !0
        }), X.prototype.transaction = function() {
            var e = (function(n, t, r) {
                var o = arguments.length;
                if (o < 2) throw new S.InvalidArgument("Too few arguments");
                for (var i = new Array(o - 1); --o;) i[o - 1] = arguments[o];
                return r = i.pop(), [n, Vt(i), r]
            }).apply(this, arguments);
            return this._transaction.apply(this, e)
        }, X.prototype._transaction = function(e, n, t) {
            var r = this,
                o = C.trans;
            o && o.db === this && e.indexOf("!") === -1 || (o = null);
            var i, a, u = e.indexOf("?") !== -1;
            e = e.replace("!", "").replace("?", "");
            try {
                if (a = n.map(function(c) {
                        if (c = c instanceof r.Table ? c.name : c, typeof c != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                        return c
                    }), e == "r" || e === lt) i = lt;
                else {
                    if (e != "rw" && e != ft) throw new S.InvalidArgument("Invalid transaction mode: " + e);
                    i = ft
                }
                if (o) {
                    if (o.mode === lt && i === ft) {
                        if (!u) throw new S.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                        o = null
                    }
                    o && a.forEach(function(c) {
                        if (o && o.storeNames.indexOf(c) === -1) {
                            if (!u) throw new S.SubTransaction("Table " + c + " not included in parent transaction.");
                            o = null
                        }
                    }), u && o && !o.active && (o = null)
                }
            } catch (c) {
                return o ? o._promise(null, function(p, s) {
                    s(c)
                }) : H(c)
            }
            var f = (function c(p, s, y, l, d) {
                return A.resolve().then(function() {
                    var v = C.transless || C,
                        h = p._createTransaction(s, y, p._dbSchema, l);
                    if (h.explicit = !0, v = {
                            trans: h,
                            transless: v
                        }, l) h.idbtrans = l.idbtrans;
                    else try {
                        h.create(), h.idbtrans._explicit = !0, p._state.PR1398_maxLoop = 3
                    } catch (b) {
                        return b.name === et.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({
                            disableAutoOpen: !1
                        }), p.open().then(function() {
                            return c(p, s, y, null, d)
                        })) : H(b)
                    }
                    var m, g = Zn(d);
                    return g && Ge(), v = A.follow(function() {
                        var b;
                        (m = d.call(h, h)) && (g ? (b = Oe.bind(null, null), m.then(b, b)) : typeof m.next == "function" && typeof m.throw == "function" && (m = St(m)))
                    }, v), (m && typeof m.then == "function" ? A.resolve(m).then(function(b) {
                        return h.active ? b : H(new S.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
                    }) : v.then(function() {
                        return m
                    })).then(function(b) {
                        return l && h._resolve(), h._completion.then(function() {
                            return b
                        })
                    }).catch(function(b) {
                        return h._reject(b), H(b)
                    })
                })
            }).bind(null, this, i, a, o, t);
            return o ? o._promise(i, f, "lock") : C.trans ? qe(C.transless, function() {
                return r._whenReady(f)
            }) : this._whenReady(f)
        }, X.prototype.table = function(e) {
            if (!W(this._allTables, e)) throw new S.InvalidTable("Table ".concat(e, " does not exist"));
            return this._allTables[e]
        }, X);

        function X(e, n) {
            var t = this;
            this._middlewares = {}, this.verno = 0;
            var r = X.dependencies;
            this._options = n = I({
                addons: X.addons,
                autoOpen: !0,
                indexedDB: r.indexedDB,
                IDBKeyRange: r.IDBKeyRange,
                cache: "cloned"
            }, n), this._deps = {
                indexedDB: n.indexedDB,
                IDBKeyRange: n.IDBKeyRange
            }, r = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
            var o, i, a, u, f, c = {
                dbOpenError: null,
                isBeingOpened: !1,
                onReadyBeingFired: null,
                openComplete: !1,
                dbReadyResolve: L,
                dbReadyPromise: null,
                cancelOpen: L,
                openCanceller: null,
                autoSchema: !0,
                PR1398_maxLoop: 3,
                autoOpen: n.autoOpen
            };
            c.dbReadyPromise = new A(function(s) {
                c.dbReadyResolve = s
            }), c.openCanceller = new A(function(s, y) {
                c.cancelOpen = y
            }), this._state = c, this.name = e, this.on = sn(this, "populate", "blocked", "versionchange", "close", {
                ready: [nt, L]
            }), this.on.ready.subscribe = Nt(this.on.ready.subscribe, function(s) {
                return function(y, l) {
                    X.vip(function() {
                        var d, v = t._state;
                        v.openComplete ? (v.dbOpenError || A.resolve().then(y), l && s(y)) : v.onReadyBeingFired ? (v.onReadyBeingFired.push(y), l && s(y)) : (s(y), d = t, l || s(function h() {
                            d.on.ready.unsubscribe(y), d.on.ready.unsubscribe(h)
                        }))
                    })
                }
            }), this.Collection = (o = this, cn(Xr.prototype, function(m, h) {
                this.db = o;
                var l = er,
                    d = null;
                if (h) try {
                    l = h()
                } catch (g) {
                    d = g
                }
                var v = m._ctx,
                    h = v.table,
                    m = h.hook.reading.fire;
                this._ctx = {
                    table: h,
                    index: v.index,
                    isPrimKey: !v.index || h.schema.primKey.keyPath && v.index === h.schema.primKey.name,
                    range: l,
                    keysOnly: !1,
                    dir: "next",
                    unique: "",
                    algorithm: null,
                    filter: null,
                    replayFilter: null,
                    justLimit: !0,
                    isMatch: null,
                    offset: 0,
                    limit: 1 / 0,
                    error: d,
                    or: v.or,
                    valueMapper: m !== nn ? m : null
                }
            })), this.Table = (i = this, cn(or.prototype, function(s, y, l) {
                this.db = i, this._tx = l, this.name = s, this.schema = y, this.hook = i._allTables[s] ? i._allTables[s].hook : sn(null, {
                    creating: [Lr, L],
                    reading: [Ur, nn],
                    updating: [zr, L],
                    deleting: [Vr, L]
                })
            })), this.Transaction = (a = this, cn(eo.prototype, function(s, y, l, d, v) {
                var h = this;
                this.db = a, this.mode = s, this.storeNames = y, this.schema = l, this.chromeTransactionDurability = d, this.idbtrans = null, this.on = sn(this, "complete", "error", "abort"), this.parent = v || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new A(function(m, g) {
                    h._resolve = m, h._reject = g
                }), this._completion.then(function() {
                    h.active = !1, h.on.complete.fire()
                }, function(m) {
                    var g = h.active;
                    return h.active = !1, h.on.error.fire(m), h.parent ? h.parent._reject(m) : g && h.idbtrans && h.idbtrans.abort(), H(m)
                })
            })), this.Version = (u = this, cn(uo.prototype, function(s) {
                this.db = u, this._cfg = {
                    version: s,
                    storesSource: null,
                    dbschema: {},
                    tables: {},
                    contentUpgrade: null
                }
            })), this.WhereClause = (f = this, cn(cr.prototype, function(s, y, l) {
                if (this.db = f, this._ctx = {
                        table: s,
                        index: y === ":id" ? null : y,
                        or: l
                    }, this._cmp = this._ascending = M, this._descending = function(d, v) {
                        return M(v, d)
                    }, this._max = function(d, v) {
                        return 0 < M(d, v) ? d : v
                    }, this._min = function(d, v) {
                        return M(d, v) < 0 ? d : v
                    }, this._IDBKeyRange = f._deps.IDBKeyRange, !this._IDBKeyRange) throw new S.MissingAPI
            })), this.on("versionchange", function(s) {
                0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(t.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(t.name, "'. Closing db now to resume the delete request.")), t.close({
                    disableAutoOpen: !1
                })
            }), this.on("blocked", function(s) {
                !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(t.name, "') was blocked")) : console.warn("Upgrade '".concat(t.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10))
            }), this._maxKey = dn(n.IDBKeyRange), this._createTransaction = function(s, y, l, d) {
                return new t.Transaction(s, y, l, t._options.chromeTransactionDurability, d)
            }, this._fireOnBlocked = function(s) {
                t.on("blocked").fire(s), Qe.filter(function(y) {
                    return y.name === t.name && y !== t && !y._state.vcFired
                }).map(function(y) {
                    return y.on("versionchange").fire(s)
                })
            }, this.use(fo), this.use(vo), this.use(ho), this.use(co), this.use(lo);
            var p = new Proxy(this, {
                get: function(s, y, l) {
                    if (y === "_vip") return !0;
                    if (y === "table") return function(v) {
                        return $n(t.table(v), p)
                    };
                    var d = Reflect.get(s, y, l);
                    return d instanceof or ? $n(d, p) : y === "tables" ? d.map(function(v) {
                        return $n(v, p)
                    }) : y === "_createTransaction" ? function() {
                        return $n(d.apply(this, arguments), p)
                    } : d
                }
            });
            this.vip = p, r.forEach(function(s) {
                return s(t)
            })
        }
        var Wn, ce = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable",
            mo = (jt.prototype.subscribe = function(e, n, t) {
                return this._subscribe(e && typeof e != "function" ? e : {
                    next: e,
                    error: n,
                    complete: t
                })
            }, jt.prototype[ce] = function() {
                return this
            }, jt);

        function jt(e) {
            this._subscribe = e
        }
        try {
            Wn = {
                indexedDB: B.indexedDB || B.mozIndexedDB || B.webkitIndexedDB || B.msIndexedDB,
                IDBKeyRange: B.IDBKeyRange || B.webkitIDBKeyRange
            }
        } catch {
            Wn = {
                indexedDB: null,
                IDBKeyRange: null
            }
        }

        function Pr(e) {
            var n, t = !1,
                r = new mo(function(o) {
                    var i = Zn(e),
                        a, u = !1,
                        f = {},
                        c = {},
                        p = {
                            get closed() {
                                return u
                            },
                            unsubscribe: function() {
                                u || (u = !0, a && a.abort(), s && Ie.storagemutated.unsubscribe(l))
                            }
                        };
                    o.start && o.start(p);
                    var s = !1,
                        y = function() {
                            return ct(d)
                        },
                        l = function(v) {
                            Ln(f, v), Et(c, f) && y()
                        },
                        d = function() {
                            var v, h, m;
                            !u && Wn.indexedDB && (f = {}, v = {}, a && a.abort(), a = new AbortController, m = function(g) {
                                var b = We();
                                try {
                                    i && Ge();
                                    var w = Pe(e, g);
                                    return w = i ? w.finally(Oe) : w
                                } finally {
                                    b && Ye()
                                }
                            }(h = {
                                subscr: v,
                                signal: a.signal,
                                requery: y,
                                querier: e,
                                trans: null
                            }), Promise.resolve(m).then(function(g) {
                                t = !0, n = g, u || h.signal.aborted || (f = {}, function(b) {
                                    for (var w in b)
                                        if (W(b, w)) return;
                                    return 1
                                }(c = v) || s || (Ie(hn, l), s = !0), ct(function() {
                                    return !u && o.next && o.next(g)
                                }))
                            }, function(g) {
                                t = !1, ["DatabaseClosedError", "AbortError"].includes(g ? .name) || u || ct(function() {
                                    u || o.error && o.error(g)
                                })
                            }))
                        };
                    return setTimeout(y, 0), p
                });
            return r.hasValue = function() {
                return t
            }, r.getValue = function() {
                return n
            }, r
        }
        var Ne = be;

        function Rt(e) {
            var n = Ce;
            try {
                Ce = !0, Ie.storagemutated.fire(e), Ct(e, !0)
            } finally {
                Ce = n
            }
        }
        Se(Ne, I(I({}, _n), {
            delete: function(e) {
                return new Ne(e, {
                    addons: []
                }).delete()
            },
            exists: function(e) {
                return new Ne(e, {
                    addons: []
                }).open().then(function(n) {
                    return n.close(), !0
                }).catch("NoSuchDatabaseError", function() {
                    return !1
                })
            },
            getDatabaseNames: function(e) {
                try {
                    return n = Ne.dependencies, t = n.indexedDB, n = n.IDBKeyRange, (kt(t) ? Promise.resolve(t.databases()).then(function(r) {
                        return r.map(function(o) {
                            return o.name
                        }).filter(function(o) {
                            return o !== Sn
                        })
                    }) : xt(t, n).toCollection().primaryKeys()).then(e)
                } catch {
                    return H(new S.MissingAPI)
                }
                var n, t
            },
            defineClass: function() {
                return function(e) {
                    z(this, e)
                }
            },
            ignoreTransaction: function(e) {
                return C.trans ? qe(C.transless, e) : e()
            },
            vip: Pt,
            async: function(e) {
                return function() {
                    try {
                        var n = St(e.apply(this, arguments));
                        return n && typeof n.then == "function" ? n : A.resolve(n)
                    } catch (t) {
                        return H(t)
                    }
                }
            },
            spawn: function(e, n, t) {
                try {
                    var r = St(e.apply(t, n || []));
                    return r && typeof r.then == "function" ? r : A.resolve(r)
                } catch (o) {
                    return H(o)
                }
            },
            currentTransaction: {
                get: function() {
                    return C.trans || null
                }
            },
            waitFor: function(e, n) {
                return n = A.resolve(typeof e == "function" ? Ne.ignoreTransaction(e) : e).timeout(n || 6e4), C.trans ? C.trans.waitFor(n) : n
            },
            Promise: A,
            debug: {
                get: function() {
                    return fe
                },
                set: function(e) {
                    Yt(e)
                }
            },
            derive: Le,
            extend: z,
            props: Se,
            override: Nt,
            Events: sn,
            on: Ie,
            liveQuery: Pr,
            extendObservabilitySet: Ln,
            getByKeyPath: ye,
            setByKeyPath: ue,
            delByKeyPath: function(e, n) {
                typeof n == "string" ? ue(e, n, void 0) : "length" in n && [].map.call(n, function(t) {
                    ue(e, t, void 0)
                })
            },
            shallowClone: Lt,
            deepClone: Ke,
            getObjectDiff: Kt,
            cmp: M,
            asap: Ut,
            minKey: -1 / 0,
            addons: [],
            connections: Qe,
            errnames: et,
            dependencies: Wn,
            cache: Me,
            semVer: "4.0.8",
            version: "4.0.8".split(".").map(function(e) {
                return parseInt(e)
            }).reduce(function(e, n, t) {
                return e + n / Math.pow(10, 2 * t)
            })
        })), Ne.maxKey = dn(Ne.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ie(hn, function(e) {
            Ce || (e = new CustomEvent(yt, {
                detail: e
            }), Ce = !0, dispatchEvent(e), Ce = !1)
        }), addEventListener(yt, function(e) {
            e = e.detail, Ce || Rt(e)
        }));
        var Je, Ce = !1,
            Or = function() {};
        return typeof BroadcastChannel < "u" && ((Or = function() {
            (Je = new BroadcastChannel(yt)).onmessage = function(e) {
                return e.data && Rt(e.data)
            }
        })(), typeof Je.unref == "function" && Je.unref(), Ie(hn, function(e) {
            Ce || Je.postMessage(e)
        })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
            if (!be.disableBfCache && e.persisted) {
                fe && console.debug("Dexie: handling persisted pagehide"), Je ? .close();
                for (var n = 0, t = Qe; n < t.length; n++) t[n].close({
                    disableAutoOpen: !1
                })
            }
        }), addEventListener("pageshow", function(e) {
            !be.disableBfCache && e.persisted && (fe && console.debug("Dexie: handling persisted pageshow"), Or(), Rt({
                all: new oe(-1 / 0, [
                    []
                ])
            }))
        })), A.rejectionMapper = function(e, n) {
            return !e || e instanceof ze || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Wt[e.name] ? e : (n = new Wt[e.name](n || e.message, e), "stack" in e && xe(n, "stack", {
                get: function() {
                    return this.inner.stack
                }
            }), n)
        }, Yt(fe), I(be, Object.freeze({
            __proto__: null,
            Dexie: be,
            liveQuery: Pr,
            Entity: nr,
            cmp: M,
            PropModSymbol: ge,
            PropModification: ln,
            replacePrefix: function(e, n) {
                return new ln({
                    replacePrefix: [e, n]
                })
            },
            add: function(e) {
                return new ln({
                    add: e
                })
            },
            remove: function(e) {
                return new ln({
                    remove: e
                })
            },
            default: be,
            RangeSet: oe,
            mergeRanges: vn,
            rangesOverlap: pr
        }), {
            default: be
        }), be
    })
})(Sr);
var Ao = Sr.exports;
const Bt = Eo(Ao),
    Ir = Symbol.for("Dexie"),
    Hn = globalThis[Ir] || (globalThis[Ir] = Bt);
if (Bt.semVer !== Hn.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${Bt.semVer} and ${Hn.semVer}`);
const {
    liveQuery: Io,
    mergeRanges: Ro,
    rangesOverlap: qo,
    RangeSet: Bo,
    cmp: Fo,
    Entity: Mo,
    PropModSymbol: No,
    PropModification: Uo,
    replacePrefix: Lo,
    add: Vo,
    remove: zo
} = Hn;

function Co(D, Y, V) {
    var I, ee;
    typeof D == "function" ? (I = Y || [], ee = V) : (I = [], ee = Y);
    var B = mn.useRef({
            hasResult: !1,
            result: ee,
            error: null
        }),
        U = mn.useReducer(function($) {
            return $ + 1
        }, 0);
    U[0];
    var K = U[1],
        z = mn.useMemo(function() {
            var $ = typeof D == "function" ? D() : D;
            if (!$ || typeof $.subscribe != "function") throw D === $ ? new TypeError("Given argument to useObservable() was neither a valid observable nor a function.") : new TypeError("Observable factory given to useObservable() did not return a valid observable.");
            if (!B.current.hasResult && typeof window < "u" && (typeof $.hasValue != "function" || $.hasValue()))
                if (typeof $.getValue == "function") B.current.result = $.getValue(), B.current.hasResult = !0;
                else {
                    var ne = $.subscribe(function(W) {
                        B.current.result = W, B.current.hasResult = !0
                    });
                    typeof ne == "function" ? ne() : ne.unsubscribe()
                }
            return $
        }, I);
    if (mn.useDebugValue(B.current.result), mn.useEffect(function() {
            var $ = z.subscribe(function(ne) {
                var W = B.current;
                (W.error !== null || W.result !== ne) && (W.error = null, W.result = ne, W.hasResult = !0, K())
            }, function(ne) {
                var W = B.current;
                W.error !== ne && (W.error = ne, K())
            });
            return typeof $ == "function" ? $ : $.unsubscribe.bind($)
        }, I), B.current.error) throw B.current.error;
    return B.current.result
}

function So(D, Y, V) {
    return Co(function() {
        return Io(D)
    }, Y || [], V)
}

function Kr(D) {
    D.version(1).stores({
        conversations: "id, accountUserId, authUserId"
    })
}
const Ft = new Hn("ConversationsDatabase");
Kr(Ft);
const Dr = {
        db: Ft,
        currentAccountData: void 0,
        conversationIds: [],
        initialized: !1
    },
    Tr = go()(() => ({ ...Dr
    })),
    pe = Tr.getState,
    we = Tr.setState,
    gn = {
        init: (D = pe()) => {
            D.initialized || (we({
                initialized: !0
            }), Gn.on("createConversation", Y => {
                Cr(Y.clientThreadId)
            }), Gn.on("deleteConversation", Y => {
                Ko(Y.serverThreadId)
            }), Gn.on("refreshHistory", Y => {
                gn.setCurrentConversationIds(Y.conversations.map(V => V.id))
            }), Gn.on("updateThreadTitle", Y => {
                Cr(Y.conversationId)
            }))
        },
        reset: () => we(Dr),
        getDatabase: () => pe().db,
        setDatabase: D => {
            Kr(D), we({
                db: D
            })
        },
        getCurrentAccountData: () => {
            const D = pe().currentAccountData;
            return D || ae.addError("FannyPack: Unavailable current account data"), D
        },
        setCurrentAccountV2: async D => {
            if (!D.accountUserId || !D.authUserId) {
                try {
                    await pe().db.conversations.clear(), ae.addError("FannyPack: Invalid user. Cleared conversations")
                } catch {
                    ae.addError("FannyPack: Invalid user. Failed to clear conversations")
                }
                we({
                    currentAccountData: void 0
                });
                return
            }
            const Y = pe().currentAccountData,
                V = {
                    accountUserId: _e(D.accountUserId),
                    authUserId: _e(D.authUserId)
                };
            if (Y && Y.authUserId !== V.authUserId) try {
                await pe().db.conversations.where("accountUserId").notEqual(_e(V ? .accountUserId)).delete(), we({
                    currentAccountData: V
                }), ae.addAction("fannypack.web.swap_user")
            } catch (I) {
                ae.addError(`FannyPack: Failed to delete conversations for new user: ${I}`)
            }
            we({
                currentAccountData: V
            })
        },
        setCurrentAccount: D => {
            if (!D.accountUserId || !D.authUserId) {
                pe().db.conversations.clear().then(() => {
                    ae.addError("FannyPack: Invalid user. Cleared conversations")
                }).catch(I => {
                    ae.addError(`FannyPack: Invalid user. Failed to clear conversations: ${I}`)
                }), we({
                    currentAccountData: void 0
                });
                return
            }
            const Y = pe().currentAccountData,
                V = {
                    accountUserId: _e(D.accountUserId),
                    authUserId: _e(D.authUserId)
                };
            Y && Y.authUserId !== V.authUserId && pe().db.conversations.where("accountUserId").notEqual(_e(V ? .accountUserId)).delete().then(() => {
                ae.addAction("fannypack.web.swap_user")
            }).catch(I => {
                ae.addError(`FannyPack: Failed to delete conversations for new user: ${I}`)
            }), we({
                currentAccountData: V
            })
        },
        setCurrentConversationIds: D => {
            we({
                conversationIds: D
            })
        }
    };

function _e(D) {
    return D ? ? ""
}

function Cr(D) {
    if (!bo.getLayerValue({
            layerName: "3436367576",
            key: "enable_local_indexing",
            defaultValue: !1,
            shouldLogExposure: !1
        })) return;
    const I = gn.getCurrentAccountData();
    if (!I) return;
    const ee = wo(D);
    if (!ee) return;
    const B = _o(ee),
        U = Qn.getTree(B),
        K = Qn.getCurrentLeafId(B),
        $ = U.getBranchFromLeaf(K).flatMap(ne => {
            const W = ne.message;
            return xo(W) === ko.Text ? {
                id: ne.id,
                text: Po(ne.message, {
                    shouldGetTextFromContentReferences: !0,
                    shouldGetVisibleText: !1
                })
            } : []
        });
    gn.getDatabase().conversations.put({
        id: ee,
        accountUserId: _e(I.accountUserId),
        authUserId: _e(I.authUserId),
        title: _e(B ? .title),
        isArchived: Qn.isArchived(B),
        updateTime: Qn.getUpdateTime(B),
        messages: $
    }).then(() => {
        ae.addAction("fannypack.web.add_conversation")
    }).catch(ne => {
        ae.addError(`FannyPack: Failed to add conversations: ${ne}`)
    })
}

function Ko(D) {
    gn.getCurrentAccountData() && Ft.conversations.where({
        id: D
    }).delete().then(() => {
        ae.addAction("fannypack.web.delete_conversation")
    }).catch(V => {
        ae.addError(`FannyPack: Failed to delete a conversation: ${V}`)
    })
}

function Do(D, Y, V = 0) {
    const I = D.toLowerCase(),
        ee = pe().conversationIds,
        B = Y.sort((K, z) => K.updateTime === z.updateTime ? z.id.localeCompare(K.id) : (z.updateTime ? ? 0) - (K.updateTime ? ? 0)).filter(K => ee.includes(K.id)),
        U = [];
    for (const K of B) {
        if (U.length >= V) break;
        const z = K.messages.toReversed().find($ => $.text.toLowerCase().includes(I));
        (z || K.title.toLowerCase().includes(I)) && U.push({
            conversationId: K.id,
            nodeId: z ? .id,
            title: K.title,
            isArchived: K.isArchived,
            updateTime: K.updateTime,
            snippet: z ? .text,
            source: "local"
        })
    }
    return U.reduce((K, z) => (K.set(z.conversationId, z), K), new Map)
}

function $o(D, Y = 0) {
    const V = Oo(),
        I = Ar.useRef([]),
        ee = So(() => V ? gn.getDatabase().conversations.where({
            accountUserId: V.accountUserId
        }).toArray().catch(U => (ae.addError(`FannyPack: Failed to fetch conversations: ${U}`), [])) : [], [D, V ? .accountUserId]) ? ? I.current;
    return Ar.useMemo(() => Do(D, ee, Y), [D, ee, Y])
}
export {
    gn as F, $o as u
};
//# sourceMappingURL=m01asv1bmfnb610p.js.map