import {
    g as oe,
    k as ae
} from "./mna1wiucqak6lqzp.js";

function ie(A, _) {
    for (var F = 0; F < _.length; F++) {
        const y = _[F];
        if (typeof y != "string" && !Array.isArray(y)) {
            for (const p in y)
                if (p !== "default" && !(p in A)) {
                    const S = Object.getOwnPropertyDescriptor(y, p);
                    S && Object.defineProperty(A, p, S.get ? S : {
                        enumerable: !0,
                        get: () => y[p]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(A, Symbol.toStringTag, {
        value: "Module"
    }))
}
var Vt = {
    exports: {}
};
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.9.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2023
 * @license MIT
 */
(function(A) {
    (function() {
        var _ = "input is invalid type",
            F = "finalize already called",
            y = typeof window == "object",
            p = y ? window : {};
        p.JS_SHA3_NO_WINDOW && (y = !1);
        var S = !y && typeof self == "object",
            Lt = !p.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
        Lt ? p = ae : S && (p = self);
        for (var Xt = !p.JS_SHA3_NO_COMMON_JS && !0 && A.exports, It = !p.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", b = "0123456789abcdef".split(""), Zt = [31, 7936, 2031616, 520093696], Dt = [4, 1024, 262144, 67108864], qt = [1, 256, 65536, 16777216], Qt = [6, 1536, 393216, 100663296], v = [0, 8, 16, 24], zt = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], Ht = [224, 256, 384, 512], Et = [128, 256], jt = ["hex", "buffer", "arrayBuffer", "array", "digest"], Kt = {
                128: 168,
                256: 136
            }, st = p.JS_SHA3_NO_NODE_JS || !Array.isArray ? function(t) {
                return Object.prototype.toString.call(t) === "[object Array]"
            } : Array.isArray, te = It && (p.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) ? function(t) {
                return typeof t == "object" && t.buffer && t.buffer.constructor === ArrayBuffer
            } : ArrayBuffer.isView, gt = function(t) {
                var e = typeof t;
                if (e === "string") return [t, !0];
                if (e !== "object" || t === null) throw new Error(_);
                if (It && t.constructor === ArrayBuffer) return [new Uint8Array(t), !1];
                if (!st(t) && !te(t)) throw new Error(_);
                return [t, !1]
            }, Jt = function(t) {
                return gt(t)[0].length === 0
            }, Mt = function(t) {
                for (var e = [], r = 0; r < t.length; ++r) e[r] = t[r];
                return e
            }, Pt = function(t, e, r) {
                return function(n) {
                    return new h(t, e, t).update(n)[r]()
                }
            }, Tt = function(t, e, r) {
                return function(n, o) {
                    return new h(t, e, o).update(n)[r]()
                }
            }, Ut = function(t, e, r) {
                return function(n, o, a, f) {
                    return d["cshake" + t].update(n, o, a, f)[r]()
                }
            }, mt = function(t, e, r) {
                return function(n, o, a, f) {
                    return d["kmac" + t].update(n, o, a, f)[r]()
                }
            }, w = function(t, e, r, n) {
                for (var o = 0; o < jt.length; ++o) {
                    var a = jt[o];
                    t[a] = e(r, n, a)
                }
                return t
            }, Wt = function(t, e) {
                var r = Pt(t, e, "hex");
                return r.create = function() {
                    return new h(t, e, t)
                }, r.update = function(n) {
                    return r.create().update(n)
                }, w(r, Pt, t, e)
            }, ee = function(t, e) {
                var r = Tt(t, e, "hex");
                return r.create = function(n) {
                    return new h(t, e, n)
                }, r.update = function(n, o) {
                    return r.create(o).update(n)
                }, w(r, Tt, t, e)
            }, re = function(t, e) {
                var r = Kt[t],
                    n = Ut(t, e, "hex");
                return n.create = function(o, a, f) {
                    return Jt(a) && Jt(f) ? d["shake" + t].create(o) : new h(t, e, o).bytepad([a, f], r)
                }, n.update = function(o, a, f, i) {
                    return n.create(a, f, i).update(o)
                }, w(n, Ut, t, e)
            }, ne = function(t, e) {
                var r = Kt[t],
                    n = mt(t, e, "hex");
                return n.create = function(o, a, f) {
                    return new Nt(t, e, a).bytepad(["KMAC", f], r).bytepad([o], r)
                }, n.update = function(o, a, f, i) {
                    return n.create(o, f, i).update(a)
                }, w(n, mt, t, e)
            }, Gt = [{
                name: "keccak",
                padding: qt,
                bits: Ht,
                createMethod: Wt
            }, {
                name: "sha3",
                padding: Qt,
                bits: Ht,
                createMethod: Wt
            }, {
                name: "shake",
                padding: Zt,
                bits: Et,
                createMethod: ee
            }, {
                name: "cshake",
                padding: Dt,
                bits: Et,
                createMethod: re
            }, {
                name: "kmac",
                padding: Dt,
                bits: Et,
                createMethod: ne
            }], d = {}, B = [], x = 0; x < Gt.length; ++x)
            for (var k = Gt[x], E = k.bits, C = 0; C < E.length; ++C) {
                var Rt = k.name + "_" + E[C];
                if (B.push(Rt), d[Rt] = k.createMethod(E[C], k.padding), k.name !== "sha3") {
                    var Yt = k.name + E[C];
                    B.push(Yt), d[Yt] = d[Rt]
                }
            }

        function h(t, e, r) {
            this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (r & 31) >> 3;
            for (var n = 0; n < 50; ++n) this.s[n] = 0
        }
        h.prototype.update = function(t) {
            if (this.finalized) throw new Error(F);
            var e = gt(t);
            t = e[0];
            for (var r = e[1], n = this.blocks, o = this.byteCount, a = t.length, f = this.blockCount, i = 0, l = this.s, u, c; i < a;) {
                if (this.reset)
                    for (this.reset = !1, n[0] = this.block, u = 1; u < f + 1; ++u) n[u] = 0;
                if (r)
                    for (u = this.start; i < a && u < o; ++i) c = t.charCodeAt(i), c < 128 ? n[u >> 2] |= c << v[u++ & 3] : c < 2048 ? (n[u >> 2] |= (192 | c >> 6) << v[u++ & 3], n[u >> 2] |= (128 | c & 63) << v[u++ & 3]) : c < 55296 || c >= 57344 ? (n[u >> 2] |= (224 | c >> 12) << v[u++ & 3], n[u >> 2] |= (128 | c >> 6 & 63) << v[u++ & 3], n[u >> 2] |= (128 | c & 63) << v[u++ & 3]) : (c = 65536 + ((c & 1023) << 10 | t.charCodeAt(++i) & 1023), n[u >> 2] |= (240 | c >> 18) << v[u++ & 3], n[u >> 2] |= (128 | c >> 12 & 63) << v[u++ & 3], n[u >> 2] |= (128 | c >> 6 & 63) << v[u++ & 3], n[u >> 2] |= (128 | c & 63) << v[u++ & 3]);
                else
                    for (u = this.start; i < a && u < o; ++i) n[u >> 2] |= t[i] << v[u++ & 3];
                if (this.lastByteIndex = u, u >= o) {
                    for (this.start = u - o, this.block = n[f], u = 0; u < f; ++u) l[u] ^= n[u];
                    O(l), this.reset = !0
                } else this.start = u
            }
            return this
        }, h.prototype.encode = function(t, e) {
            var r = t & 255,
                n = 1,
                o = [r];
            for (t = t >> 8, r = t & 255; r > 0;) o.unshift(r), t = t >> 8, r = t & 255, ++n;
            return e ? o.push(n) : o.unshift(n), this.update(o), o.length
        }, h.prototype.encodeString = function(t) {
            var e = gt(t);
            t = e[0];
            var r = e[1],
                n = 0,
                o = t.length;
            if (r)
                for (var a = 0; a < t.length; ++a) {
                    var f = t.charCodeAt(a);
                    f < 128 ? n += 1 : f < 2048 ? n += 2 : f < 55296 || f >= 57344 ? n += 3 : (f = 65536 + ((f & 1023) << 10 | t.charCodeAt(++a) & 1023), n += 4)
                } else n = o;
            return n += this.encode(n * 8), this.update(t), n
        }, h.prototype.bytepad = function(t, e) {
            for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n]);
            var o = (e - r % e) % e,
                a = [];
            return a.length = o, this.update(a), this
        }, h.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                    e = this.lastByteIndex,
                    r = this.blockCount,
                    n = this.s;
                if (t[e >> 2] |= this.padding[e & 3], this.lastByteIndex === this.byteCount)
                    for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
                O(n)
            }
        }, h.prototype.toString = h.prototype.hex = function() {
            this.finalize();
            for (var t = this.blockCount, e = this.s, r = this.outputBlocks, n = this.extraBytes, o = 0, a = 0, f = "", i; a < r;) {
                for (o = 0; o < t && a < r; ++o, ++a) i = e[o], f += b[i >> 4 & 15] + b[i & 15] + b[i >> 12 & 15] + b[i >> 8 & 15] + b[i >> 20 & 15] + b[i >> 16 & 15] + b[i >> 28 & 15] + b[i >> 24 & 15];
                a % t === 0 && (e = Mt(e), O(e), o = 0)
            }
            return n && (i = e[o], f += b[i >> 4 & 15] + b[i & 15], n > 1 && (f += b[i >> 12 & 15] + b[i >> 8 & 15]), n > 2 && (f += b[i >> 20 & 15] + b[i >> 16 & 15])), f
        }, h.prototype.arrayBuffer = function() {
            this.finalize();
            var t = this.blockCount,
                e = this.s,
                r = this.outputBlocks,
                n = this.extraBytes,
                o = 0,
                a = 0,
                f = this.outputBits >> 3,
                i;
            n ? i = new ArrayBuffer(r + 1 << 2) : i = new ArrayBuffer(f);
            for (var l = new Uint32Array(i); a < r;) {
                for (o = 0; o < t && a < r; ++o, ++a) l[a] = e[o];
                a % t === 0 && (e = Mt(e), O(e))
            }
            return n && (l[a] = e[o], i = i.slice(0, f)), i
        }, h.prototype.buffer = h.prototype.arrayBuffer, h.prototype.digest = h.prototype.array = function() {
            this.finalize();
            for (var t = this.blockCount, e = this.s, r = this.outputBlocks, n = this.extraBytes, o = 0, a = 0, f = [], i, l; a < r;) {
                for (o = 0; o < t && a < r; ++o, ++a) i = a << 2, l = e[o], f[i] = l & 255, f[i + 1] = l >> 8 & 255, f[i + 2] = l >> 16 & 255, f[i + 3] = l >> 24 & 255;
                a % t === 0 && (e = Mt(e), O(e))
            }
            return n && (i = a << 2, l = e[o], f[i] = l & 255, n > 1 && (f[i + 1] = l >> 8 & 255), n > 2 && (f[i + 2] = l >> 16 & 255)), f
        };

        function Nt(t, e, r) {
            h.call(this, t, e, r)
        }
        Nt.prototype = new h, Nt.prototype.finalize = function() {
            return this.encode(this.outputBits, !0), h.prototype.finalize.call(this)
        };
        var O = function(t) {
            var e, r, n, o, a, f, i, l, u, c, g, M, R, N, I, D, z, H, j, K, J, P, T, U, m, W, G, Y, V, $, L, X, Z, q, Q, s, tt, et, rt, nt, ot, at, it, ft, ut, ct, ht, lt, pt, bt, vt, yt, dt, xt, At, kt, _t, Ft, St, Bt, Ct, Ot, wt;
            for (n = 0; n < 48; n += 2) o = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], a = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], f = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], i = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], l = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], g = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], M = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], R = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], e = M ^ (f << 1 | i >>> 31), r = R ^ (i << 1 | f >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = o ^ (l << 1 | u >>> 31), r = a ^ (u << 1 | l >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = f ^ (c << 1 | g >>> 31), r = i ^ (g << 1 | c >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = l ^ (M << 1 | R >>> 31), r = u ^ (R << 1 | M >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = c ^ (o << 1 | a >>> 31), r = g ^ (a << 1 | o >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, N = t[0], I = t[1], ct = t[11] << 4 | t[10] >>> 28, ht = t[10] << 4 | t[11] >>> 28, Y = t[20] << 3 | t[21] >>> 29, V = t[21] << 3 | t[20] >>> 29, Bt = t[31] << 9 | t[30] >>> 23, Ct = t[30] << 9 | t[31] >>> 23, at = t[40] << 18 | t[41] >>> 14, it = t[41] << 18 | t[40] >>> 14, q = t[2] << 1 | t[3] >>> 31, Q = t[3] << 1 | t[2] >>> 31, D = t[13] << 12 | t[12] >>> 20, z = t[12] << 12 | t[13] >>> 20, lt = t[22] << 10 | t[23] >>> 22, pt = t[23] << 10 | t[22] >>> 22, $ = t[33] << 13 | t[32] >>> 19, L = t[32] << 13 | t[33] >>> 19, Ot = t[42] << 2 | t[43] >>> 30, wt = t[43] << 2 | t[42] >>> 30, xt = t[5] << 30 | t[4] >>> 2, At = t[4] << 30 | t[5] >>> 2, s = t[14] << 6 | t[15] >>> 26, tt = t[15] << 6 | t[14] >>> 26, H = t[25] << 11 | t[24] >>> 21, j = t[24] << 11 | t[25] >>> 21, bt = t[34] << 15 | t[35] >>> 17, vt = t[35] << 15 | t[34] >>> 17, X = t[45] << 29 | t[44] >>> 3, Z = t[44] << 29 | t[45] >>> 3, U = t[6] << 28 | t[7] >>> 4, m = t[7] << 28 | t[6] >>> 4, kt = t[17] << 23 | t[16] >>> 9, _t = t[16] << 23 | t[17] >>> 9, et = t[26] << 25 | t[27] >>> 7, rt = t[27] << 25 | t[26] >>> 7, K = t[36] << 21 | t[37] >>> 11, J = t[37] << 21 | t[36] >>> 11, yt = t[47] << 24 | t[46] >>> 8, dt = t[46] << 24 | t[47] >>> 8, ft = t[8] << 27 | t[9] >>> 5, ut = t[9] << 27 | t[8] >>> 5, W = t[18] << 20 | t[19] >>> 12, G = t[19] << 20 | t[18] >>> 12, Ft = t[29] << 7 | t[28] >>> 25, St = t[28] << 7 | t[29] >>> 25, nt = t[38] << 8 | t[39] >>> 24, ot = t[39] << 8 | t[38] >>> 24, P = t[48] << 14 | t[49] >>> 18, T = t[49] << 14 | t[48] >>> 18, t[0] = N ^ ~D & H, t[1] = I ^ ~z & j, t[10] = U ^ ~W & Y, t[11] = m ^ ~G & V, t[20] = q ^ ~s & et, t[21] = Q ^ ~tt & rt, t[30] = ft ^ ~ct & lt, t[31] = ut ^ ~ht & pt, t[40] = xt ^ ~kt & Ft, t[41] = At ^ ~_t & St, t[2] = D ^ ~H & K, t[3] = z ^ ~j & J, t[12] = W ^ ~Y & $, t[13] = G ^ ~V & L, t[22] = s ^ ~et & nt, t[23] = tt ^ ~rt & ot, t[32] = ct ^ ~lt & bt, t[33] = ht ^ ~pt & vt, t[42] = kt ^ ~Ft & Bt, t[43] = _t ^ ~St & Ct, t[4] = H ^ ~K & P, t[5] = j ^ ~J & T, t[14] = Y ^ ~$ & X, t[15] = V ^ ~L & Z, t[24] = et ^ ~nt & at, t[25] = rt ^ ~ot & it, t[34] = lt ^ ~bt & yt, t[35] = pt ^ ~vt & dt, t[44] = Ft ^ ~Bt & Ot, t[45] = St ^ ~Ct & wt, t[6] = K ^ ~P & N, t[7] = J ^ ~T & I, t[16] = $ ^ ~X & U, t[17] = L ^ ~Z & m, t[26] = nt ^ ~at & q, t[27] = ot ^ ~it & Q, t[36] = bt ^ ~yt & ft, t[37] = vt ^ ~dt & ut, t[46] = Bt ^ ~Ot & xt, t[47] = Ct ^ ~wt & At, t[8] = P ^ ~N & D, t[9] = T ^ ~I & z, t[18] = X ^ ~U & W, t[19] = Z ^ ~m & G, t[28] = at ^ ~q & s, t[29] = it ^ ~Q & tt, t[38] = yt ^ ~ft & ct, t[39] = dt ^ ~ut & ht, t[48] = Ot ^ ~xt & kt, t[49] = wt ^ ~At & _t, t[0] ^= zt[n], t[1] ^= zt[n + 1]
        };
        if (Xt) A.exports = d;
        else
            for (x = 0; x < B.length; ++x) p[B[x]] = d[B[x]]
    })()
})(Vt);
var $t = Vt.exports;
const fe = oe($t),
    ce = ie({
        __proto__: null,
        default: fe
    }, [$t]);
export {
    ce as s
};
//# sourceMappingURL=fmcl2rn5zexg8ncx.js.map