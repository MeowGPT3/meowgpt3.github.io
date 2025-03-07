import {
    h2 as ts,
    dV as Br
} from "./lwme42j7zzyr3q7j.js";
import {
    d4 as Vr,
    g8 as qr
} from "./bq4rrqi54riy5k2e.js";
var $i = {};

function Kr(n, e) {
    return e.forEach(function(t) {
        t && typeof t != "string" && !Array.isArray(t) && Object.keys(t).forEach(function(i) {
            if (i !== "default" && !(i in n)) {
                var s = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(n, i, s.get ? s : {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                })
            }
        })
    }), Object.freeze(n)
}
var Gr = Object.defineProperty,
    Wr = (n, e, t) => e in n ? Gr(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t,
    Zi = (n, e, t) => Wr(n, typeof e != "symbol" ? e + "" : e, t);
class ne {
    constructor() {
        Zi(this, "_locking"), Zi(this, "_locks"), this._locking = Promise.resolve(), this._locks = 0
    }
    isLocked() {
        return this._locks > 0
    }
    lock() {
        this._locks += 1;
        let e;
        const t = new Promise(s => e = () => {
                this._locks -= 1, s()
            }),
            i = this._locking.then(() => e);
        return this._locking = this._locking.then(() => t), i
    }
}

function z(n, e) {
    if (!n) throw new Error(e)
}
const Hr = 34028234663852886e22,
    zr = -34028234663852886e22,
    Jr = 4294967295,
    Qr = 2147483647,
    Yr = -2147483648;

function kt(n) {
    if (typeof n != "number") throw new Error("invalid int 32: " + typeof n);
    if (!Number.isInteger(n) || n > Qr || n < Yr) throw new Error("invalid int 32: " + n)
}

function di(n) {
    if (typeof n != "number") throw new Error("invalid uint 32: " + typeof n);
    if (!Number.isInteger(n) || n > Jr || n < 0) throw new Error("invalid uint 32: " + n)
}

function is(n) {
    if (typeof n != "number") throw new Error("invalid float 32: " + typeof n);
    if (Number.isFinite(n) && (n > Hr || n < zr)) throw new Error("invalid float 32: " + n)
}
const ns = Symbol("@bufbuild/protobuf/enum-type");

function Xr(n) {
    const e = n[ns];
    return z(e, "missing enum type on enum object"), e
}

function ss(n, e, t, i) {
    n[ns] = rs(e, t.map(s => ({
        no: s.no,
        name: s.name,
        localName: n[s.no]
    })))
}

function rs(n, e, t) {
    const i = Object.create(null),
        s = Object.create(null),
        r = [];
    for (const a of e) {
        const o = as(a);
        r.push(o), i[a.name] = o, s[a.no] = o
    }
    return {
        typeName: n,
        values: r,
        findName(a) {
            return i[a]
        },
        findNumber(a) {
            return s[a]
        }
    }
}

function $r(n, e, t) {
    const i = {};
    for (const s of e) {
        const r = as(s);
        i[r.localName] = r.no, i[r.no] = r.localName
    }
    return ss(i, n, e), i
}

function as(n) {
    return "localName" in n ? n : Object.assign(Object.assign({}, n), {
        localName: n.name
    })
}
class Ai {
    equals(e) {
        return this.getType().runtime.util.equals(this.getType(), this, e)
    }
    clone() {
        return this.getType().runtime.util.clone(this)
    }
    fromBinary(e, t) {
        const i = this.getType(),
            s = i.runtime.bin,
            r = s.makeReadOptions(t);
        return s.readMessage(this, r.readerFactory(e), e.byteLength, r), this
    }
    fromJson(e, t) {
        const i = this.getType(),
            s = i.runtime.json,
            r = s.makeReadOptions(t);
        return s.readMessage(i, e, r, this), this
    }
    fromJsonString(e, t) {
        let i;
        try {
            i = JSON.parse(e)
        } catch (s) {
            throw new Error("cannot decode ".concat(this.getType().typeName, " from JSON: ").concat(s instanceof Error ? s.message : String(s)))
        }
        return this.fromJson(i, t)
    }
    toBinary(e) {
        const t = this.getType(),
            i = t.runtime.bin,
            s = i.makeWriteOptions(e),
            r = s.writerFactory();
        return i.writeMessage(this, r, s), r.finish()
    }
    toJson(e) {
        const t = this.getType(),
            i = t.runtime.json,
            s = i.makeWriteOptions(e);
        return i.writeMessage(this, s)
    }
    toJsonString(e) {
        var t;
        const i = this.toJson(e);
        return JSON.stringify(i, null, (t = e ? .prettySpaces) !== null && t !== void 0 ? t : 0)
    }
    toJSON() {
        return this.toJson({
            emitDefaultValues: !0
        })
    }
    getType() {
        return Object.getPrototypeOf(this).constructor
    }
}

function Zr(n, e, t, i) {
    var s;
    const r = (s = i ? .localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1),
        a = {
            [r]: function(o) {
                n.util.initFields(this), n.util.initPartial(o, this)
            }
        }[r];
    return Object.setPrototypeOf(a.prototype, new Ai), Object.assign(a, {
        runtime: n,
        typeName: e,
        fields: n.util.newFieldList(t),
        fromBinary(o, c) {
            return new a().fromBinary(o, c)
        },
        fromJson(o, c) {
            return new a().fromJson(o, c)
        },
        fromJsonString(o, c) {
            return new a().fromJsonString(o, c)
        },
        equals(o, c) {
            return n.util.equals(a, o, c)
        }
    }), a
}

function ea() {
    let n = 0,
        e = 0;
    for (let i = 0; i < 28; i += 7) {
        let s = this.buf[this.pos++];
        if (n |= (s & 127) << i, !(s & 128)) return this.assertBounds(), [n, e]
    }
    let t = this.buf[this.pos++];
    if (n |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128)) return this.assertBounds(), [n, e];
    for (let i = 3; i <= 31; i += 7) {
        let s = this.buf[this.pos++];
        if (e |= (s & 127) << i, !(s & 128)) return this.assertBounds(), [n, e]
    }
    throw new Error("invalid varint")
}

function zt(n, e, t) {
    for (let r = 0; r < 28; r = r + 7) {
        const a = n >>> r,
            o = !(!(a >>> 7) && e == 0),
            c = (o ? a | 128 : a) & 255;
        if (t.push(c), !o) return
    }
    const i = n >>> 28 & 15 | (e & 7) << 4,
        s = !!(e >> 3);
    if (t.push((s ? i | 128 : i) & 255), !!s) {
        for (let r = 3; r < 31; r = r + 7) {
            const a = e >>> r,
                o = !!(a >>> 7),
                c = (o ? a | 128 : a) & 255;
            if (t.push(c), !o) return
        }
        t.push(e >>> 31 & 1)
    }
}
const yt = 4294967296;

function en(n) {
    const e = n[0] === "-";
    e && (n = n.slice(1));
    const t = 1e6;
    let i = 0,
        s = 0;

    function r(a, o) {
        const c = Number(n.slice(a, o));
        s *= t, i = i * t + c, i >= yt && (s = s + (i / yt | 0), i = i % yt)
    }
    return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), e ? cs(i, s) : Li(i, s)
}

function ta(n, e) {
    let t = Li(n, e);
    const i = t.hi & 2147483648;
    i && (t = cs(t.lo, t.hi));
    const s = os(t.lo, t.hi);
    return i ? "-" + s : s
}

function os(n, e) {
    if ({
            lo: n,
            hi: e
        } = ia(n, e), e <= 2097151) return String(yt * e + n);
    const t = n & 16777215,
        i = (n >>> 24 | e << 8) & 16777215,
        s = e >> 16 & 65535;
    let r = t + i * 6777216 + s * 6710656,
        a = i + s * 8147497,
        o = s * 2;
    const c = 1e7;
    return r >= c && (a += Math.floor(r / c), r %= c), a >= c && (o += Math.floor(a / c), a %= c), o.toString() + tn(a) + tn(r)
}

function ia(n, e) {
    return {
        lo: n >>> 0,
        hi: e >>> 0
    }
}

function Li(n, e) {
    return {
        lo: n | 0,
        hi: e | 0
    }
}

function cs(n, e) {
    return e = ~e, n ? n = ~n + 1 : e += 1, Li(n, e)
}
const tn = n => {
    const e = String(n);
    return "0000000".slice(e.length) + e
};

function nn(n, e) {
    if (n >= 0) {
        for (; n > 127;) e.push(n & 127 | 128), n = n >>> 7;
        e.push(n)
    } else {
        for (let t = 0; t < 9; t++) e.push(n & 127 | 128), n = n >> 7;
        e.push(1)
    }
}

function na() {
    let n = this.buf[this.pos++],
        e = n & 127;
    if (!(n & 128)) return this.assertBounds(), e;
    if (n = this.buf[this.pos++], e |= (n & 127) << 7, !(n & 128)) return this.assertBounds(), e;
    if (n = this.buf[this.pos++], e |= (n & 127) << 14, !(n & 128)) return this.assertBounds(), e;
    if (n = this.buf[this.pos++], e |= (n & 127) << 21, !(n & 128)) return this.assertBounds(), e;
    n = this.buf[this.pos++], e |= (n & 15) << 28;
    for (let t = 5; n & 128 && t < 10; t++) n = this.buf[this.pos++];
    if (n & 128) throw new Error("invalid varint");
    return this.assertBounds(), e >>> 0
}

function sa() {
    const n = new DataView(new ArrayBuffer(8));
    if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof $i != "object" || $i.BUF_BIGINT_DISABLE !== "1")) {
        const s = BigInt("-9223372036854775808"),
            r = BigInt("9223372036854775807"),
            a = BigInt("0"),
            o = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse(c) {
                const d = typeof c == "bigint" ? c : BigInt(c);
                if (d > r || d < s) throw new Error("int64 invalid: ".concat(c));
                return d
            },
            uParse(c) {
                const d = typeof c == "bigint" ? c : BigInt(c);
                if (d > o || d < a) throw new Error("uint64 invalid: ".concat(c));
                return d
            },
            enc(c) {
                return n.setBigInt64(0, this.parse(c), !0), {
                    lo: n.getInt32(0, !0),
                    hi: n.getInt32(4, !0)
                }
            },
            uEnc(c) {
                return n.setBigInt64(0, this.uParse(c), !0), {
                    lo: n.getInt32(0, !0),
                    hi: n.getInt32(4, !0)
                }
            },
            dec(c, d) {
                return n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigInt64(0, !0)
            },
            uDec(c, d) {
                return n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigUint64(0, !0)
            }
        }
    }
    const t = s => z(/^-?[0-9]+$/.test(s), "int64 invalid: ".concat(s)),
        i = s => z(/^[0-9]+$/.test(s), "uint64 invalid: ".concat(s));
    return {
        zero: "0",
        supported: !1,
        parse(s) {
            return typeof s != "string" && (s = s.toString()), t(s), s
        },
        uParse(s) {
            return typeof s != "string" && (s = s.toString()), i(s), s
        },
        enc(s) {
            return typeof s != "string" && (s = s.toString()), t(s), en(s)
        },
        uEnc(s) {
            return typeof s != "string" && (s = s.toString()), i(s), en(s)
        },
        dec(s, r) {
            return ta(s, r)
        },
        uDec(s, r) {
            return os(s, r)
        }
    }
}
const K = sa();
var b;
(function(n) {
    n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64"
})(b || (b = {}));
var De;
(function(n) {
    n[n.BIGINT = 0] = "BIGINT", n[n.STRING = 1] = "STRING"
})(De || (De = {}));

function Ee(n, e, t) {
    if (e === t) return !0;
    if (n == b.BYTES) {
        if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || e.length !== t.length) return !1;
        for (let i = 0; i < e.length; i++)
            if (e[i] !== t[i]) return !1;
        return !0
    }
    switch (n) {
        case b.UINT64:
        case b.FIXED64:
        case b.INT64:
        case b.SFIXED64:
        case b.SINT64:
            return e == t
    }
    return !1
}

function Xe(n, e) {
    switch (n) {
        case b.BOOL:
            return !1;
        case b.UINT64:
        case b.FIXED64:
        case b.INT64:
        case b.SFIXED64:
        case b.SINT64:
            return e == 0 ? K.zero : "0";
        case b.DOUBLE:
        case b.FLOAT:
            return 0;
        case b.BYTES:
            return new Uint8Array(0);
        case b.STRING:
            return "";
        default:
            return 0
    }
}

function ds(n, e) {
    switch (n) {
        case b.BOOL:
            return e === !1;
        case b.STRING:
            return e === "";
        case b.BYTES:
            return e instanceof Uint8Array && !e.byteLength;
        default:
            return e == 0
    }
}
var J;
(function(n) {
    n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32"
})(J || (J = {}));
class ra {
    constructor(e) {
        this.stack = [], this.textEncoder = e ? ? new TextEncoder, this.chunks = [], this.buf = []
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let s = 0; s < this.chunks.length; s++) e += this.chunks[s].length;
        let t = new Uint8Array(e),
            i = 0;
        for (let s = 0; s < this.chunks.length; s++) t.set(this.chunks[s], i), i += this.chunks[s].length;
        return this.chunks = [], t
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }), this.chunks = [], this.buf = [], this
    }
    join() {
        let e = this.finish(),
            t = this.stack.pop();
        if (!t) throw new Error("invalid state, fork stack empty");
        return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
    }
    tag(e, t) {
        return this.uint32((e << 3 | t) >>> 0)
    }
    raw(e) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
    }
    uint32(e) {
        for (di(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
        return this.buf.push(e), this
    }
    int32(e) {
        return kt(e), nn(e, this.buf), this
    }
    bool(e) {
        return this.buf.push(e ? 1 : 0), this
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e)
    }
    string(e) {
        let t = this.textEncoder.encode(e);
        return this.uint32(t.byteLength), this.raw(t)
    }
    float(e) {
        is(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
    }
    double(e) {
        let t = new Uint8Array(8);
        return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
    }
    fixed32(e) {
        di(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
    }
    sfixed32(e) {
        kt(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
    }
    sint32(e) {
        return kt(e), e = (e << 1 ^ e >> 31) >>> 0, nn(e, this.buf), this
    }
    sfixed64(e) {
        let t = new Uint8Array(8),
            i = new DataView(t.buffer),
            s = K.enc(e);
        return i.setInt32(0, s.lo, !0), i.setInt32(4, s.hi, !0), this.raw(t)
    }
    fixed64(e) {
        let t = new Uint8Array(8),
            i = new DataView(t.buffer),
            s = K.uEnc(e);
        return i.setInt32(0, s.lo, !0), i.setInt32(4, s.hi, !0), this.raw(t)
    }
    int64(e) {
        let t = K.enc(e);
        return zt(t.lo, t.hi, this.buf), this
    }
    sint64(e) {
        let t = K.enc(e),
            i = t.hi >> 31,
            s = t.lo << 1 ^ i,
            r = (t.hi << 1 | t.lo >>> 31) ^ i;
        return zt(s, r, this.buf), this
    }
    uint64(e) {
        let t = K.uEnc(e);
        return zt(t.lo, t.hi, this.buf), this
    }
}
class aa {
    constructor(e, t) {
        this.varint64 = ea, this.uint32 = na, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ? ? new TextDecoder
    }
    tag() {
        let e = this.uint32(),
            t = e >>> 3,
            i = e & 7;
        if (t <= 0 || i < 0 || i > 5) throw new Error("illegal tag: field no " + t + " wire type " + i);
        return [t, i]
    }
    skip(e, t) {
        let i = this.pos;
        switch (e) {
            case J.Varint:
                for (; this.buf[this.pos++] & 128;);
                break;
            case J.Bit64:
                this.pos += 4;
            case J.Bit32:
                this.pos += 4;
                break;
            case J.LengthDelimited:
                let s = this.uint32();
                this.pos += s;
                break;
            case J.StartGroup:
                for (;;) {
                    const [r, a] = this.tag();
                    if (a === J.EndGroup) {
                        if (t !== void 0 && r !== t) throw new Error("invalid end group tag");
                        break
                    }
                    this.skip(a, r)
                }
                break;
            default:
                throw new Error("cant skip wire type " + e)
        }
        return this.assertBounds(), this.buf.subarray(i, this.pos)
    }
    assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF")
    }
    int32() {
        return this.uint32() | 0
    }
    sint32() {
        let e = this.uint32();
        return e >>> 1 ^ -(e & 1)
    }
    int64() {
        return K.dec(...this.varint64())
    }
    uint64() {
        return K.uDec(...this.varint64())
    }
    sint64() {
        let [e, t] = this.varint64(), i = -(e & 1);
        return e = (e >>> 1 | (t & 1) << 31) ^ i, t = t >>> 1 ^ i, K.dec(e, t)
    }
    bool() {
        let [e, t] = this.varint64();
        return e !== 0 || t !== 0
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0)
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0)
    }
    fixed64() {
        return K.uDec(this.sfixed32(), this.sfixed32())
    }
    sfixed64() {
        return K.dec(this.sfixed32(), this.sfixed32())
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0)
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0)
    }
    bytes() {
        let e = this.uint32(),
            t = this.pos;
        return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
    }
    string() {
        return this.textDecoder.decode(this.bytes())
    }
}

function oa(n, e, t, i) {
    let s;
    return {
        typeName: e,
        extendee: t,
        get field() {
            if (!s) {
                const r = typeof i == "function" ? i() : i;
                r.name = e.split(".").pop(), r.jsonName = "[".concat(e, "]"), s = n.util.newFieldList([r]).list()[0]
            }
            return s
        },
        runtime: n
    }
}

function ls(n) {
    const e = n.field.localName,
        t = Object.create(null);
    return t[e] = ca(n), [t, () => t[e]]
}

function ca(n) {
    const e = n.field;
    if (e.repeated) return [];
    if (e.default !== void 0) return e.default;
    switch (e.kind) {
        case "enum":
            return e.T.values[0].no;
        case "scalar":
            return Xe(e.T, e.L);
        case "message":
            const t = e.T,
                i = new t;
            return t.fieldWrapper ? t.fieldWrapper.unwrapField(i) : i;
        case "map":
            throw "map fields are not allowed to be extensions"
    }
}

function da(n, e) {
    if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
        for (let t = n.length - 1; t >= 0; --t)
            if (n[t].no == e.no) return [n[t]];
        return []
    }
    return n.filter(t => t.no === e.no)
}
let ye = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    Vt = [];
for (let n = 0; n < ye.length; n++) Vt[ye[n].charCodeAt(0)] = n;
Vt[45] = ye.indexOf("+");
Vt[95] = ye.indexOf("/");
const us = {
    dec(n) {
        let e = n.length * 3 / 4;
        n[n.length - 2] == "=" ? e -= 2 : n[n.length - 1] == "=" && (e -= 1);
        let t = new Uint8Array(e),
            i = 0,
            s = 0,
            r, a = 0;
        for (let o = 0; o < n.length; o++) {
            if (r = Vt[n.charCodeAt(o)], r === void 0) switch (n[o]) {
                case "=":
                    s = 0;
                case `
`:
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.")
            }
            switch (s) {
                case 0:
                    a = r, s = 1;
                    break;
                case 1:
                    t[i++] = a << 2 | (r & 48) >> 4, a = r, s = 2;
                    break;
                case 2:
                    t[i++] = (a & 15) << 4 | (r & 60) >> 2, a = r, s = 3;
                    break;
                case 3:
                    t[i++] = (a & 3) << 6 | r, s = 0;
                    break
            }
        }
        if (s == 1) throw Error("invalid base64 string.");
        return t.subarray(0, i)
    },
    enc(n) {
        let e = "",
            t = 0,
            i, s = 0;
        for (let r = 0; r < n.length; r++) switch (i = n[r], t) {
            case 0:
                e += ye[i >> 2], s = (i & 3) << 4, t = 1;
                break;
            case 1:
                e += ye[s | i >> 4], s = (i & 15) << 2, t = 2;
                break;
            case 2:
                e += ye[s | i >> 6], e += ye[i & 63], t = 0;
                break
        }
        return t && (e += ye[s], e += "=", t == 1 && (e += "=")), e
    }
};

function la(n, e, t) {
    ps(e, n);
    const i = e.runtime.bin.makeReadOptions(t),
        s = da(n.getType().runtime.bin.listUnknownFields(n), e.field),
        [r, a] = ls(e);
    for (const o of s) e.runtime.bin.readField(r, i.readerFactory(o.data), e.field, o.wireType, i);
    return a()
}

function ua(n, e, t, i) {
    ps(e, n);
    const s = e.runtime.bin.makeReadOptions(i),
        r = e.runtime.bin.makeWriteOptions(i);
    if (hs(n, e)) {
        const d = n.getType().runtime.bin.listUnknownFields(n).filter(l => l.no != e.field.no);
        n.getType().runtime.bin.discardUnknownFields(n);
        for (const l of d) n.getType().runtime.bin.onUnknownField(n, l.no, l.wireType, l.data)
    }
    const a = r.writerFactory();
    let o = e.field;
    !o.opt && !o.repeated && (o.kind == "enum" || o.kind == "scalar") && (o = Object.assign(Object.assign({}, e.field), {
        opt: !0
    })), e.runtime.bin.writeField(o, t, a, r);
    const c = s.readerFactory(a.finish());
    for (; c.pos < c.len;) {
        const [d, l] = c.tag(), u = c.skip(l, d);
        n.getType().runtime.bin.onUnknownField(n, d, l, u)
    }
}

function hs(n, e) {
    const t = n.getType();
    return e.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(n).find(i => i.no == e.field.no)
}

function ps(n, e) {
    z(n.extendee.typeName == e.getType().typeName, "extension ".concat(n.typeName, " can only be applied to message ").concat(n.extendee.typeName))
}

function ms(n, e) {
    const t = n.localName;
    if (n.repeated) return e[t].length > 0;
    if (n.oneof) return e[n.oneof.localName].case === t;
    switch (n.kind) {
        case "enum":
        case "scalar":
            return n.opt || n.req ? e[t] !== void 0 : n.kind == "enum" ? e[t] !== n.T.values[0].no : !ds(n.T, e[t]);
        case "message":
            return e[t] !== void 0;
        case "map":
            return Object.keys(e[t]).length > 0
    }
}

function sn(n, e) {
    const t = n.localName,
        i = !n.opt && !n.req;
    if (n.repeated) e[t] = [];
    else if (n.oneof) e[n.oneof.localName] = {
        case: void 0
    };
    else switch (n.kind) {
        case "map":
            e[t] = {};
            break;
        case "enum":
            e[t] = i ? n.T.values[0].no : void 0;
            break;
        case "scalar":
            e[t] = i ? Xe(n.T, n.L) : void 0;
            break;
        case "message":
            e[t] = void 0;
            break
    }
}

function xe(n, e) {
    if (n === null || typeof n != "object" || !Object.getOwnPropertyNames(Ai.prototype).every(i => i in n && typeof n[i] == "function")) return !1;
    const t = n.getType();
    return t === null || typeof t != "function" || !("typeName" in t) || typeof t.typeName != "string" ? !1 : e === void 0 ? !0 : t.typeName == e.typeName
}

function fs(n, e) {
    return xe(e) || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e)
}
b.DOUBLE, b.FLOAT, b.INT64, b.UINT64, b.INT32, b.UINT32, b.BOOL, b.STRING, b.BYTES;
const rn = {
        ignoreUnknownFields: !1
    },
    an = {
        emitDefaultValues: !1,
        enumAsInteger: !1,
        useProtoFieldName: !1,
        prettySpaces: 0
    };

function ha(n) {
    return n ? Object.assign(Object.assign({}, rn), n) : rn
}

function pa(n) {
    return n ? Object.assign(Object.assign({}, an), n) : an
}
const xt = Symbol(),
    Tt = Symbol();

function ma() {
    return {
        makeReadOptions: ha,
        makeWriteOptions: pa,
        readMessage(n, e, t, i) {
            if (e == null || Array.isArray(e) || typeof e != "object") throw new Error("cannot decode message ".concat(n.typeName, " from JSON: ").concat(me(e)));
            i = i ? ? new n;
            const s = new Map,
                r = t.typeRegistry;
            for (const [a, o] of Object.entries(e)) {
                const c = n.fields.findJsonName(a);
                if (c) {
                    if (c.oneof) {
                        if (o === null && c.kind == "scalar") continue;
                        const d = s.get(c.oneof);
                        if (d !== void 0) throw new Error("cannot decode message ".concat(n.typeName, ' from JSON: multiple keys for oneof "').concat(c.oneof.name, '" present: "').concat(d, '", "').concat(a, '"'));
                        s.set(c.oneof, a)
                    }
                    on(i, o, c, t, n)
                } else {
                    let d = !1;
                    if (r ? .findExtension && a.startsWith("[") && a.endsWith("]")) {
                        const l = r.findExtension(a.substring(1, a.length - 1));
                        if (l && l.extendee.typeName == n.typeName) {
                            d = !0;
                            const [u, h] = ls(l);
                            on(u, o, l.field, t, l), ua(i, l, h(), t)
                        }
                    }
                    if (!d && !t.ignoreUnknownFields) throw new Error("cannot decode message ".concat(n.typeName, ' from JSON: key "').concat(a, '" is unknown'))
                }
            }
            return i
        },
        writeMessage(n, e) {
            const t = n.getType(),
                i = {};
            let s;
            try {
                for (s of t.fields.byNumber()) {
                    if (!ms(s, n)) {
                        if (s.req) throw "required field not set";
                        if (!e.emitDefaultValues || !ga(s)) continue
                    }
                    const a = s.oneof ? n[s.oneof.localName].value : n[s.localName],
                        o = cn(s, a, e);
                    o !== void 0 && (i[e.useProtoFieldName ? s.name : s.jsonName] = o)
                }
                const r = e.typeRegistry;
                if (r ? .findExtensionFor)
                    for (const a of t.runtime.bin.listUnknownFields(n)) {
                        const o = r.findExtensionFor(t.typeName, a.no);
                        if (o && hs(n, o)) {
                            const c = la(n, o, e),
                                d = cn(o.field, c, e);
                            d !== void 0 && (i[o.field.jsonName] = d)
                        }
                    }
            } catch (r) {
                const a = s ? "cannot encode field ".concat(t.typeName, ".").concat(s.name, " to JSON") : "cannot encode message ".concat(t.typeName, " to JSON"),
                    o = r instanceof Error ? r.message : String(r);
                throw new Error(a + (o.length > 0 ? ": ".concat(o) : ""))
            }
            return i
        },
        readScalar(n, e, t) {
            return at(n, e, t ? ? De.BIGINT, !0)
        },
        writeScalar(n, e, t) {
            if (e !== void 0 && (t || ds(n, e))) return Ct(n, e)
        },
        debug: me
    }
}

function me(n) {
    if (n === null) return "null";
    switch (typeof n) {
        case "object":
            return Array.isArray(n) ? "array" : "object";
        case "string":
            return n.length > 100 ? "string" : '"'.concat(n.split('"').join('\\"'), '"');
        default:
            return String(n)
    }
}

function on(n, e, t, i, s) {
    let r = t.localName;
    if (t.repeated) {
        if (z(t.kind != "map"), e === null) return;
        if (!Array.isArray(e)) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(me(e)));
        const a = n[r];
        for (const o of e) {
            if (o === null) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(me(o)));
            switch (t.kind) {
                case "message":
                    a.push(t.T.fromJson(o, i));
                    break;
                case "enum":
                    const c = Jt(t.T, o, i.ignoreUnknownFields, !0);
                    c !== Tt && a.push(c);
                    break;
                case "scalar":
                    try {
                        a.push(at(t.T, o, t.L, !0))
                    } catch (d) {
                        let l = "cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(me(o));
                        throw d instanceof Error && d.message.length > 0 && (l += ": ".concat(d.message)), new Error(l)
                    }
                    break
            }
        }
    } else if (t.kind == "map") {
        if (e === null) return;
        if (typeof e != "object" || Array.isArray(e)) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(me(e)));
        const a = n[r];
        for (const [o, c] of Object.entries(e)) {
            if (c === null) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: map value null"));
            let d;
            try {
                d = fa(t.K, o)
            } catch (l) {
                let u = "cannot decode map key for field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(me(e));
                throw l instanceof Error && l.message.length > 0 && (u += ": ".concat(l.message)), new Error(u)
            }
            switch (t.V.kind) {
                case "message":
                    a[d] = t.V.T.fromJson(c, i);
                    break;
                case "enum":
                    const l = Jt(t.V.T, c, i.ignoreUnknownFields, !0);
                    l !== Tt && (a[d] = l);
                    break;
                case "scalar":
                    try {
                        a[d] = at(t.V.T, c, De.BIGINT, !0)
                    } catch (u) {
                        let h = "cannot decode map value for field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(me(e));
                        throw u instanceof Error && u.message.length > 0 && (h += ": ".concat(u.message)), new Error(h)
                    }
                    break
            }
        }
    } else switch (t.oneof && (n = n[t.oneof.localName] = {
        case: r
    }, r = "value"), t.kind) {
        case "message":
            const a = t.T;
            if (e === null && a.typeName != "google.protobuf.Value") return;
            let o = n[r];
            xe(o) ? o.fromJson(e, i) : (n[r] = o = a.fromJson(e, i), a.fieldWrapper && !t.oneof && (n[r] = a.fieldWrapper.unwrapField(o)));
            break;
        case "enum":
            const c = Jt(t.T, e, i.ignoreUnknownFields, !1);
            switch (c) {
                case xt:
                    sn(t, n);
                    break;
                case Tt:
                    break;
                default:
                    n[r] = c;
                    break
            }
            break;
        case "scalar":
            try {
                const d = at(t.T, e, t.L, !1);
                switch (d) {
                    case xt:
                        sn(t, n);
                        break;
                    default:
                        n[r] = d;
                        break
                }
            } catch (d) {
                let l = "cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(me(e));
                throw d instanceof Error && d.message.length > 0 && (l += ": ".concat(d.message)), new Error(l)
            }
            break
    }
}

function fa(n, e) {
    if (n === b.BOOL) switch (e) {
        case "true":
            e = !0;
            break;
        case "false":
            e = !1;
            break
    }
    return at(n, e, De.BIGINT, !0).toString()
}

function at(n, e, t, i) {
    if (e === null) return i ? Xe(n, t) : xt;
    switch (n) {
        case b.DOUBLE:
        case b.FLOAT:
            if (e === "NaN") return Number.NaN;
            if (e === "Infinity") return Number.POSITIVE_INFINITY;
            if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") break;
            const s = Number(e);
            if (Number.isNaN(s) || !Number.isFinite(s)) break;
            return n == b.FLOAT && is(s), s;
        case b.INT32:
        case b.FIXED32:
        case b.SFIXED32:
        case b.SINT32:
        case b.UINT32:
            let r;
            if (typeof e == "number" ? r = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (r = Number(e)), r === void 0) break;
            return n == b.UINT32 || n == b.FIXED32 ? di(r) : kt(r), r;
        case b.INT64:
        case b.SFIXED64:
        case b.SINT64:
            if (typeof e != "number" && typeof e != "string") break;
            const a = K.parse(e);
            return t ? a.toString() : a;
        case b.FIXED64:
        case b.UINT64:
            if (typeof e != "number" && typeof e != "string") break;
            const o = K.uParse(e);
            return t ? o.toString() : o;
        case b.BOOL:
            if (typeof e != "boolean") break;
            return e;
        case b.STRING:
            if (typeof e != "string") break;
            try {
                encodeURIComponent(e)
            } catch {
                throw new Error("invalid UTF8")
            }
            return e;
        case b.BYTES:
            if (e === "") return new Uint8Array(0);
            if (typeof e != "string") break;
            return us.dec(e)
    }
    throw new Error
}

function Jt(n, e, t, i) {
    if (e === null) return n.typeName == "google.protobuf.NullValue" ? 0 : i ? n.values[0].no : xt;
    switch (typeof e) {
        case "number":
            if (Number.isInteger(e)) return e;
            break;
        case "string":
            const s = n.findName(e);
            if (s !== void 0) return s.no;
            if (t) return Tt;
            break
    }
    throw new Error("cannot decode enum ".concat(n.typeName, " from JSON: ").concat(me(e)))
}

function ga(n) {
    return n.repeated || n.kind == "map" ? !0 : !(n.oneof || n.kind == "message" || n.opt || n.req)
}

function cn(n, e, t) {
    if (n.kind == "map") {
        z(typeof e == "object" && e != null);
        const i = {},
            s = Object.entries(e);
        switch (n.V.kind) {
            case "scalar":
                for (const [a, o] of s) i[a.toString()] = Ct(n.V.T, o);
                break;
            case "message":
                for (const [a, o] of s) i[a.toString()] = o.toJson(t);
                break;
            case "enum":
                const r = n.V.T;
                for (const [a, o] of s) i[a.toString()] = Qt(r, o, t.enumAsInteger);
                break
        }
        return t.emitDefaultValues || s.length > 0 ? i : void 0
    }
    if (n.repeated) {
        z(Array.isArray(e));
        const i = [];
        switch (n.kind) {
            case "scalar":
                for (let s = 0; s < e.length; s++) i.push(Ct(n.T, e[s]));
                break;
            case "enum":
                for (let s = 0; s < e.length; s++) i.push(Qt(n.T, e[s], t.enumAsInteger));
                break;
            case "message":
                for (let s = 0; s < e.length; s++) i.push(e[s].toJson(t));
                break
        }
        return t.emitDefaultValues || i.length > 0 ? i : void 0
    }
    switch (n.kind) {
        case "scalar":
            return Ct(n.T, e);
        case "enum":
            return Qt(n.T, e, t.enumAsInteger);
        case "message":
            return fs(n.T, e).toJson(t)
    }
}

function Qt(n, e, t) {
    var i;
    if (z(typeof e == "number"), n.typeName == "google.protobuf.NullValue") return null;
    if (t) return e;
    const s = n.findNumber(e);
    return (i = s ? .name) !== null && i !== void 0 ? i : e
}

function Ct(n, e) {
    switch (n) {
        case b.INT32:
        case b.SFIXED32:
        case b.SINT32:
        case b.FIXED32:
        case b.UINT32:
            return z(typeof e == "number"), e;
        case b.FLOAT:
        case b.DOUBLE:
            return z(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e;
        case b.STRING:
            return z(typeof e == "string"), e;
        case b.BOOL:
            return z(typeof e == "boolean"), e;
        case b.UINT64:
        case b.FIXED64:
        case b.INT64:
        case b.SFIXED64:
        case b.SINT64:
            return z(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), e.toString();
        case b.BYTES:
            return z(e instanceof Uint8Array), us.enc(e)
    }
}
const je = Symbol("@bufbuild/protobuf/unknown-fields"),
    dn = {
        readUnknownFields: !0,
        readerFactory: n => new aa(n)
    },
    ln = {
        writeUnknownFields: !0,
        writerFactory: () => new ra
    };

function va(n) {
    return n ? Object.assign(Object.assign({}, dn), n) : dn
}

function ba(n) {
    return n ? Object.assign(Object.assign({}, ln), n) : ln
}

function ka() {
    return {
        makeReadOptions: va,
        makeWriteOptions: ba,
        listUnknownFields(n) {
            var e;
            return (e = n[je]) !== null && e !== void 0 ? e : []
        },
        discardUnknownFields(n) {
            delete n[je]
        },
        writeUnknownFields(n, e) {
            const i = n[je];
            if (i)
                for (const s of i) e.tag(s.no, s.wireType).raw(s.data)
        },
        onUnknownField(n, e, t, i) {
            const s = n;
            Array.isArray(s[je]) || (s[je] = []), s[je].push({
                no: e,
                wireType: t,
                data: i
            })
        },
        readMessage(n, e, t, i, s) {
            const r = n.getType(),
                a = s ? e.len : e.pos + t;
            let o, c;
            for (; e.pos < a && ([o, c] = e.tag(), !(s === !0 && c == J.EndGroup));) {
                const d = r.fields.find(o);
                if (!d) {
                    const l = e.skip(c, o);
                    i.readUnknownFields && this.onUnknownField(n, o, c, l);
                    continue
                }
                un(n, e, d, c, i)
            }
            if (s && (c != J.EndGroup || o !== t)) throw new Error("invalid end group tag")
        },
        readField: un,
        writeMessage(n, e, t) {
            const i = n.getType();
            for (const s of i.fields.byNumber()) {
                if (!ms(s, n)) {
                    if (s.req) throw new Error("cannot encode field ".concat(i.typeName, ".").concat(s.name, " to binary: required field not set"));
                    continue
                }
                const r = s.oneof ? n[s.oneof.localName].value : n[s.localName];
                hn(s, r, e, t)
            }
            return t.writeUnknownFields && this.writeUnknownFields(n, e), e
        },
        writeField(n, e, t, i) {
            e !== void 0 && hn(n, e, t, i)
        }
    }
}

function un(n, e, t, i, s) {
    let {
        repeated: r,
        localName: a
    } = t;
    switch (t.oneof && (n = n[t.oneof.localName], n.case != a && delete n.value, n.case = a, a = "value"), t.kind) {
        case "scalar":
        case "enum":
            const o = t.kind == "enum" ? b.INT32 : t.T;
            let c = Nt;
            if (t.kind == "scalar" && t.L > 0 && (c = Ta), r) {
                let h = n[a];
                if (i == J.LengthDelimited && o != b.STRING && o != b.BYTES) {
                    let k = e.uint32() + e.pos;
                    for (; e.pos < k;) h.push(c(e, o))
                } else h.push(c(e, o))
            } else n[a] = c(e, o);
            break;
        case "message":
            const d = t.T;
            r ? n[a].push(St(e, new d, s, t)) : xe(n[a]) ? St(e, n[a], s, t) : (n[a] = St(e, new d, s, t), d.fieldWrapper && !t.oneof && !t.repeated && (n[a] = d.fieldWrapper.unwrapField(n[a])));
            break;
        case "map":
            let [l, u] = ya(t, e, s);
            n[a][l] = u;
            break
    }
}

function St(n, e, t, i) {
    const s = e.getType().runtime.bin,
        r = i ? .delimited;
    return s.readMessage(e, n, r ? i.no : n.uint32(), t, r), e
}

function ya(n, e, t) {
    const i = e.uint32(),
        s = e.pos + i;
    let r, a;
    for (; e.pos < s;) {
        const [o] = e.tag();
        switch (o) {
            case 1:
                r = Nt(e, n.K);
                break;
            case 2:
                switch (n.V.kind) {
                    case "scalar":
                        a = Nt(e, n.V.T);
                        break;
                    case "enum":
                        a = e.int32();
                        break;
                    case "message":
                        a = St(e, new n.V.T, t, void 0);
                        break
                }
                break
        }
    }
    if (r === void 0 && (r = Xe(n.K, De.BIGINT)), typeof r != "string" && typeof r != "number" && (r = r.toString()), a === void 0) switch (n.V.kind) {
        case "scalar":
            a = Xe(n.V.T, De.BIGINT);
            break;
        case "enum":
            a = n.V.T.values[0].no;
            break;
        case "message":
            a = new n.V.T;
            break
    }
    return [r, a]
}

function Ta(n, e) {
    const t = Nt(n, e);
    return typeof t == "bigint" ? t.toString() : t
}

function Nt(n, e) {
    switch (e) {
        case b.STRING:
            return n.string();
        case b.BOOL:
            return n.bool();
        case b.DOUBLE:
            return n.double();
        case b.FLOAT:
            return n.float();
        case b.INT32:
            return n.int32();
        case b.INT64:
            return n.int64();
        case b.UINT64:
            return n.uint64();
        case b.FIXED64:
            return n.fixed64();
        case b.BYTES:
            return n.bytes();
        case b.FIXED32:
            return n.fixed32();
        case b.SFIXED32:
            return n.sfixed32();
        case b.SFIXED64:
            return n.sfixed64();
        case b.SINT64:
            return n.sint64();
        case b.UINT32:
            return n.uint32();
        case b.SINT32:
            return n.sint32()
    }
}

function hn(n, e, t, i) {
    z(e !== void 0);
    const s = n.repeated;
    switch (n.kind) {
        case "scalar":
        case "enum":
            let r = n.kind == "enum" ? b.INT32 : n.T;
            if (s)
                if (z(Array.isArray(e)), n.packed) Sa(t, r, n.no, e);
                else
                    for (const a of e) ot(t, r, n.no, a);
            else ot(t, r, n.no, e);
            break;
        case "message":
            if (s) {
                z(Array.isArray(e));
                for (const a of e) pn(t, i, n, a)
            } else pn(t, i, n, e);
            break;
        case "map":
            z(typeof e == "object" && e != null);
            for (const [a, o] of Object.entries(e)) Ca(t, i, n, a, o);
            break
    }
}

function Ca(n, e, t, i, s) {
    n.tag(t.no, J.LengthDelimited), n.fork();
    let r = i;
    switch (t.K) {
        case b.INT32:
        case b.FIXED32:
        case b.UINT32:
        case b.SFIXED32:
        case b.SINT32:
            r = Number.parseInt(i);
            break;
        case b.BOOL:
            z(i == "true" || i == "false"), r = i == "true";
            break
    }
    switch (ot(n, t.K, 1, r), t.V.kind) {
        case "scalar":
            ot(n, t.V.T, 2, s);
            break;
        case "enum":
            ot(n, b.INT32, 2, s);
            break;
        case "message":
            z(s !== void 0), n.tag(2, J.LengthDelimited).bytes(s.toBinary(e));
            break
    }
    n.join()
}

function pn(n, e, t, i) {
    const s = fs(t.T, i);
    t.delimited ? n.tag(t.no, J.StartGroup).raw(s.toBinary(e)).tag(t.no, J.EndGroup) : n.tag(t.no, J.LengthDelimited).bytes(s.toBinary(e))
}

function ot(n, e, t, i) {
    z(i !== void 0);
    let [s, r] = gs(e);
    n.tag(t, s)[r](i)
}

function Sa(n, e, t, i) {
    if (!i.length) return;
    n.tag(t, J.LengthDelimited).fork();
    let [, s] = gs(e);
    for (let r = 0; r < i.length; r++) n[s](i[r]);
    n.join()
}

function gs(n) {
    let e = J.Varint;
    switch (n) {
        case b.BYTES:
        case b.STRING:
            e = J.LengthDelimited;
            break;
        case b.DOUBLE:
        case b.FIXED64:
        case b.SFIXED64:
            e = J.Bit64;
            break;
        case b.FIXED32:
        case b.SFIXED32:
        case b.FLOAT:
            e = J.Bit32;
            break
    }
    const t = b[n].toLowerCase();
    return [e, t]
}

function Pa() {
    return {
        setEnumType: ss,
        initPartial(n, e) {
            if (n === void 0) return;
            const t = e.getType();
            for (const i of t.fields.byMember()) {
                const s = i.localName,
                    r = e,
                    a = n;
                if (a[s] != null) switch (i.kind) {
                    case "oneof":
                        const o = a[s].case;
                        if (o === void 0) continue;
                        const c = i.findField(o);
                        let d = a[s].value;
                        c && c.kind == "message" && !xe(d, c.T) ? d = new c.T(d) : c && c.kind === "scalar" && c.T === b.BYTES && (d = tt(d)), r[s] = {
                            case: o,
                            value: d
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let l = a[s];
                        i.T === b.BYTES && (l = i.repeated ? l.map(tt) : tt(l)), r[s] = l;
                        break;
                    case "map":
                        switch (i.V.kind) {
                            case "scalar":
                            case "enum":
                                if (i.V.T === b.BYTES)
                                    for (const [m, k] of Object.entries(a[s])) r[s][m] = tt(k);
                                else Object.assign(r[s], a[s]);
                                break;
                            case "message":
                                const h = i.V.T;
                                for (const m of Object.keys(a[s])) {
                                    let k = a[s][m];
                                    h.fieldWrapper || (k = new h(k)), r[s][m] = k
                                }
                                break
                        }
                        break;
                    case "message":
                        const u = i.T;
                        if (i.repeated) r[s] = a[s].map(h => xe(h, u) ? h : new u(h));
                        else {
                            const h = a[s];
                            u.fieldWrapper ? u.typeName === "google.protobuf.BytesValue" ? r[s] = tt(h) : r[s] = h : r[s] = xe(h, u) ? h : new u(h)
                        }
                        break
                }
            }
        },
        equals(n, e, t) {
            return e === t ? !0 : !e || !t ? !1 : n.fields.byMember().every(i => {
                const s = e[i.localName],
                    r = t[i.localName];
                if (i.repeated) {
                    if (s.length !== r.length) return !1;
                    switch (i.kind) {
                        case "message":
                            return s.every((a, o) => i.T.equals(a, r[o]));
                        case "scalar":
                            return s.every((a, o) => Ee(i.T, a, r[o]));
                        case "enum":
                            return s.every((a, o) => Ee(b.INT32, a, r[o]))
                    }
                    throw new Error("repeated cannot contain ".concat(i.kind))
                }
                switch (i.kind) {
                    case "message":
                        return i.T.equals(s, r);
                    case "enum":
                        return Ee(b.INT32, s, r);
                    case "scalar":
                        return Ee(i.T, s, r);
                    case "oneof":
                        if (s.case !== r.case) return !1;
                        const a = i.findField(s.case);
                        if (a === void 0) return !0;
                        switch (a.kind) {
                            case "message":
                                return a.T.equals(s.value, r.value);
                            case "enum":
                                return Ee(b.INT32, s.value, r.value);
                            case "scalar":
                                return Ee(a.T, s.value, r.value)
                        }
                        throw new Error("oneof cannot contain ".concat(a.kind));
                    case "map":
                        const o = Object.keys(s).concat(Object.keys(r));
                        switch (i.V.kind) {
                            case "message":
                                const c = i.V.T;
                                return o.every(l => c.equals(s[l], r[l]));
                            case "enum":
                                return o.every(l => Ee(b.INT32, s[l], r[l]));
                            case "scalar":
                                const d = i.V.T;
                                return o.every(l => Ee(d, s[l], r[l]))
                        }
                        break
                }
            })
        },
        clone(n) {
            const e = n.getType(),
                t = new e,
                i = t;
            for (const s of e.fields.byMember()) {
                const r = n[s.localName];
                let a;
                if (s.repeated) a = r.map(gt);
                else if (s.kind == "map") {
                    a = i[s.localName];
                    for (const [o, c] of Object.entries(r)) a[o] = gt(c)
                } else s.kind == "oneof" ? a = s.findField(r.case) ? {
                    case: r.case,
                    value: gt(r.value)
                } : {
                    case: void 0
                } : a = gt(r);
                i[s.localName] = a
            }
            for (const s of e.runtime.bin.listUnknownFields(n)) e.runtime.bin.onUnknownField(i, s.no, s.wireType, s.data);
            return t
        }
    }
}

function gt(n) {
    if (n === void 0) return n;
    if (xe(n)) return n.clone();
    if (n instanceof Uint8Array) {
        const e = new Uint8Array(n.byteLength);
        return e.set(n), e
    }
    return n
}

function tt(n) {
    return n instanceof Uint8Array ? n : new Uint8Array(n)
}

function Ea(n, e, t) {
    return {
        syntax: n,
        json: ma(),
        bin: ka(),
        util: Object.assign(Object.assign({}, Pa()), {
            newFieldList: e,
            initFields: t
        }),
        makeMessageType(i, s, r) {
            return Zr(this, i, s, r)
        },
        makeEnum: $r,
        makeEnumType: rs,
        getEnumType: Xr,
        makeExtension(i, s, r) {
            return oa(this, i, s, r)
        }
    }
}
class Ra {
    constructor(e, t) {
        this._fields = e, this._normalizer = t
    }
    findJsonName(e) {
        if (!this.jsonNames) {
            const t = {};
            for (const i of this.list()) t[i.jsonName] = t[i.name] = i;
            this.jsonNames = t
        }
        return this.jsonNames[e]
    }
    find(e) {
        if (!this.numbers) {
            const t = {};
            for (const i of this.list()) t[i.no] = i;
            this.numbers = t
        }
        return this.numbers[e]
    }
    list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all
    }
    byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t) => e.no - t.no)), this.numbersAsc
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const e = this.members;
            let t;
            for (const i of this.list()) i.oneof ? i.oneof !== t && (t = i.oneof, e.push(t)) : e.push(i)
        }
        return this.members
    }
}

function vs(n, e) {
    const t = bs(n);
    return e ? t : Ma(Da(t))
}

function _a(n) {
    return vs(n, !1)
}
const wa = bs;

function bs(n) {
    let e = !1;
    const t = [];
    for (let i = 0; i < n.length; i++) {
        let s = n.charAt(i);
        switch (s) {
            case "_":
                e = !0;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                t.push(s), e = !1;
                break;
            default:
                e && (e = !1, s = s.toUpperCase()), t.push(s);
                break
        }
    }
    return t.join("")
}
const Ia = new Set(["constructor", "toString", "toJSON", "valueOf"]),
    Oa = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
    ks = n => "".concat(n, "$"),
    Da = n => Oa.has(n) ? ks(n) : n,
    Ma = n => Ia.has(n) ? ks(n) : n;
class xa {
    constructor(e) {
        this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = _a(e)
    }
    addField(e) {
        z(e.oneof === this, "field ".concat(e.name, " not one of ").concat(this.name)), this.fields.push(e)
    }
    findField(e) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for (let t = 0; t < this.fields.length; t++) this._lookup[this.fields[t].localName] = this.fields[t]
        }
        return this._lookup[e]
    }
}

function Na(n, e) {
    var t, i, s, r, a, o;
    const c = [];
    let d;
    for (const l of typeof n == "function" ? n() : n) {
        const u = l;
        if (u.localName = vs(l.name, l.oneof !== void 0), u.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : wa(l.name), u.repeated = (i = l.repeated) !== null && i !== void 0 ? i : !1, l.kind == "scalar" && (u.L = (s = l.L) !== null && s !== void 0 ? s : De.BIGINT), u.delimited = (r = l.delimited) !== null && r !== void 0 ? r : !1, u.req = (a = l.req) !== null && a !== void 0 ? a : !1, u.opt = (o = l.opt) !== null && o !== void 0 ? o : !1, l.packed === void 0 && (u.packed = l.kind == "enum" || l.kind == "scalar" && l.T != b.BYTES && l.T != b.STRING), l.oneof !== void 0) {
            const h = typeof l.oneof == "string" ? l.oneof : l.oneof.name;
            (!d || d.name != h) && (d = new xa(h)), u.oneof = d, d.addField(u)
        }
        c.push(u)
    }
    return c
}
const f = Ea("proto3", n => new Ra(n, e => Na(e)), n => {
    for (const e of n.getType().fields.byMember()) {
        if (e.opt) continue;
        const t = e.localName,
            i = n;
        if (e.repeated) {
            i[t] = [];
            continue
        }
        switch (e.kind) {
            case "oneof":
                i[t] = {
                    case: void 0
                };
                break;
            case "enum":
                i[t] = 0;
                break;
            case "map":
                i[t] = {};
                break;
            case "scalar":
                i[t] = Xe(e.T, e.L);
                break
        }
    }
});
class ie extends Ai {
    constructor(e) {
        super(), this.seconds = K.zero, this.nanos = 0, f.util.initPartial(e, this)
    }
    fromJson(e, t) {
        if (typeof e != "string") throw new Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(f.json.debug(e)));
        const i = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!i) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const s = Date.parse(i[1] + "-" + i[2] + "-" + i[3] + "T" + i[4] + ":" + i[5] + ":" + i[6] + (i[8] ? i[8] : "Z"));
        if (Number.isNaN(s)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = K.parse(s / 1e3), this.nanos = 0, i[7] && (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9), this
    }
    toJson(e) {
        const t = Number(this.seconds) * 1e3;
        if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let i = "Z";
        if (this.nanos > 0) {
            const s = (this.nanos + 1e9).toString().substring(1);
            s.substring(3) === "000000" ? i = "." + s.substring(0, 3) + "Z" : s.substring(6) === "000" ? i = "." + s.substring(0, 6) + "Z" : i = "." + s + "Z"
        }
        return new Date(t).toISOString().replace(".000Z", i)
    }
    toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6))
    }
    static now() {
        return ie.fromDate(new Date)
    }
    static fromDate(e) {
        const t = e.getTime();
        return new ie({
            seconds: K.parse(Math.floor(t / 1e3)),
            nanos: t % 1e3 * 1e6
        })
    }
    static fromBinary(e, t) {
        return new ie().fromBinary(e, t)
    }
    static fromJson(e, t) {
        return new ie().fromJson(e, t)
    }
    static fromJsonString(e, t) {
        return new ie().fromJsonString(e, t)
    }
    static equals(e, t) {
        return f.util.equals(ie, e, t)
    }
}
ie.runtime = f;
ie.typeName = "google.protobuf.Timestamp";
ie.fields = f.util.newFieldList(() => [{
    no: 1,
    name: "seconds",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "nanos",
    kind: "scalar",
    T: 5
}]);
const Aa = f.makeMessageType("livekit.MetricsBatch", () => [{
        no: 1,
        name: "timestamp_ms",
        kind: "scalar",
        T: 3
    }, {
        no: 2,
        name: "normalized_timestamp",
        kind: "message",
        T: ie
    }, {
        no: 3,
        name: "str_data",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 4,
        name: "time_series",
        kind: "message",
        T: La,
        repeated: !0
    }, {
        no: 5,
        name: "events",
        kind: "message",
        T: Fa,
        repeated: !0
    }]),
    La = f.makeMessageType("livekit.TimeSeriesMetric", () => [{
        no: 1,
        name: "label",
        kind: "scalar",
        T: 13
    }, {
        no: 2,
        name: "participant_identity",
        kind: "scalar",
        T: 13
    }, {
        no: 3,
        name: "track_sid",
        kind: "scalar",
        T: 13
    }, {
        no: 4,
        name: "samples",
        kind: "message",
        T: Ua,
        repeated: !0
    }, {
        no: 5,
        name: "rid",
        kind: "scalar",
        T: 13
    }]),
    Ua = f.makeMessageType("livekit.MetricSample", () => [{
        no: 1,
        name: "timestamp_ms",
        kind: "scalar",
        T: 3
    }, {
        no: 2,
        name: "normalized_timestamp",
        kind: "message",
        T: ie
    }, {
        no: 3,
        name: "value",
        kind: "scalar",
        T: 2
    }]),
    Fa = f.makeMessageType("livekit.EventMetric", () => [{
        no: 1,
        name: "label",
        kind: "scalar",
        T: 13
    }, {
        no: 2,
        name: "participant_identity",
        kind: "scalar",
        T: 13
    }, {
        no: 3,
        name: "track_sid",
        kind: "scalar",
        T: 13
    }, {
        no: 4,
        name: "start_timestamp_ms",
        kind: "scalar",
        T: 3
    }, {
        no: 5,
        name: "end_timestamp_ms",
        kind: "scalar",
        T: 3,
        opt: !0
    }, {
        no: 6,
        name: "normalized_start_timestamp",
        kind: "message",
        T: ie
    }, {
        no: 7,
        name: "normalized_end_timestamp",
        kind: "message",
        T: ie,
        opt: !0
    }, {
        no: 8,
        name: "metadata",
        kind: "scalar",
        T: 9
    }, {
        no: 9,
        name: "rid",
        kind: "scalar",
        T: 13
    }]),
    de = f.makeEnum("livekit.TrackType", [{
        no: 0,
        name: "AUDIO"
    }, {
        no: 1,
        name: "VIDEO"
    }, {
        no: 2,
        name: "DATA"
    }]),
    ee = f.makeEnum("livekit.TrackSource", [{
        no: 0,
        name: "UNKNOWN"
    }, {
        no: 1,
        name: "CAMERA"
    }, {
        no: 2,
        name: "MICROPHONE"
    }, {
        no: 3,
        name: "SCREEN_SHARE"
    }, {
        no: 4,
        name: "SCREEN_SHARE_AUDIO"
    }]),
    Ui = f.makeEnum("livekit.VideoQuality", [{
        no: 0,
        name: "LOW"
    }, {
        no: 1,
        name: "MEDIUM"
    }, {
        no: 2,
        name: "HIGH"
    }, {
        no: 3,
        name: "OFF"
    }]),
    rt = f.makeEnum("livekit.ConnectionQuality", [{
        no: 0,
        name: "POOR"
    }, {
        no: 1,
        name: "GOOD"
    }, {
        no: 2,
        name: "EXCELLENT"
    }, {
        no: 3,
        name: "LOST"
    }]),
    ht = f.makeEnum("livekit.ClientConfigSetting", [{
        no: 0,
        name: "UNSET"
    }, {
        no: 1,
        name: "DISABLED"
    }, {
        no: 2,
        name: "ENABLED"
    }]),
    We = f.makeEnum("livekit.DisconnectReason", [{
        no: 0,
        name: "UNKNOWN_REASON"
    }, {
        no: 1,
        name: "CLIENT_INITIATED"
    }, {
        no: 2,
        name: "DUPLICATE_IDENTITY"
    }, {
        no: 3,
        name: "SERVER_SHUTDOWN"
    }, {
        no: 4,
        name: "PARTICIPANT_REMOVED"
    }, {
        no: 5,
        name: "ROOM_DELETED"
    }, {
        no: 6,
        name: "STATE_MISMATCH"
    }, {
        no: 7,
        name: "JOIN_FAILURE"
    }, {
        no: 8,
        name: "MIGRATION"
    }, {
        no: 9,
        name: "SIGNAL_CLOSE"
    }, {
        no: 10,
        name: "ROOM_CLOSED"
    }, {
        no: 11,
        name: "USER_UNAVAILABLE"
    }, {
        no: 12,
        name: "USER_REJECTED"
    }]),
    Be = f.makeEnum("livekit.ReconnectReason", [{
        no: 0,
        name: "RR_UNKNOWN"
    }, {
        no: 1,
        name: "RR_SIGNAL_DISCONNECTED"
    }, {
        no: 2,
        name: "RR_PUBLISHER_FAILED"
    }, {
        no: 3,
        name: "RR_SUBSCRIBER_FAILED"
    }, {
        no: 4,
        name: "RR_SWITCH_CANDIDATE"
    }]),
    ja = f.makeEnum("livekit.SubscriptionError", [{
        no: 0,
        name: "SE_UNKNOWN"
    }, {
        no: 1,
        name: "SE_CODEC_UNSUPPORTED"
    }, {
        no: 2,
        name: "SE_TRACK_NOTFOUND"
    }]),
    fe = f.makeEnum("livekit.AudioTrackFeature", [{
        no: 0,
        name: "TF_STEREO"
    }, {
        no: 1,
        name: "TF_NO_DTX"
    }, {
        no: 2,
        name: "TF_AUTO_GAIN_CONTROL"
    }, {
        no: 3,
        name: "TF_ECHO_CANCELLATION"
    }, {
        no: 4,
        name: "TF_NOISE_SUPPRESSION"
    }, {
        no: 5,
        name: "TF_ENHANCED_NOISE_CANCELLATION"
    }]),
    Fi = f.makeMessageType("livekit.Room", () => [{
        no: 1,
        name: "sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "empty_timeout",
        kind: "scalar",
        T: 13
    }, {
        no: 14,
        name: "departure_timeout",
        kind: "scalar",
        T: 13
    }, {
        no: 4,
        name: "max_participants",
        kind: "scalar",
        T: 13
    }, {
        no: 5,
        name: "creation_time",
        kind: "scalar",
        T: 3
    }, {
        no: 6,
        name: "turn_password",
        kind: "scalar",
        T: 9
    }, {
        no: 7,
        name: "enabled_codecs",
        kind: "message",
        T: At,
        repeated: !0
    }, {
        no: 8,
        name: "metadata",
        kind: "scalar",
        T: 9
    }, {
        no: 9,
        name: "num_participants",
        kind: "scalar",
        T: 13
    }, {
        no: 11,
        name: "num_publishers",
        kind: "scalar",
        T: 13
    }, {
        no: 10,
        name: "active_recording",
        kind: "scalar",
        T: 8
    }, {
        no: 13,
        name: "version",
        kind: "message",
        T: Ds
    }]),
    At = f.makeMessageType("livekit.Codec", () => [{
        no: 1,
        name: "mime",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "fmtp_line",
        kind: "scalar",
        T: 9
    }]),
    Ba = f.makeMessageType("livekit.ParticipantPermission", () => [{
        no: 1,
        name: "can_subscribe",
        kind: "scalar",
        T: 8
    }, {
        no: 2,
        name: "can_publish",
        kind: "scalar",
        T: 8
    }, {
        no: 3,
        name: "can_publish_data",
        kind: "scalar",
        T: 8
    }, {
        no: 9,
        name: "can_publish_sources",
        kind: "enum",
        T: f.getEnumType(ee),
        repeated: !0
    }, {
        no: 7,
        name: "hidden",
        kind: "scalar",
        T: 8
    }, {
        no: 8,
        name: "recorder",
        kind: "scalar",
        T: 8
    }, {
        no: 10,
        name: "can_update_metadata",
        kind: "scalar",
        T: 8
    }, {
        no: 11,
        name: "agent",
        kind: "scalar",
        T: 8
    }, {
        no: 12,
        name: "can_subscribe_metrics",
        kind: "scalar",
        T: 8
    }]),
    pt = f.makeMessageType("livekit.ParticipantInfo", () => [{
        no: 1,
        name: "sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "identity",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "state",
        kind: "enum",
        T: f.getEnumType(li)
    }, {
        no: 4,
        name: "tracks",
        kind: "message",
        T: Ke,
        repeated: !0
    }, {
        no: 5,
        name: "metadata",
        kind: "scalar",
        T: 9
    }, {
        no: 6,
        name: "joined_at",
        kind: "scalar",
        T: 3
    }, {
        no: 9,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 10,
        name: "version",
        kind: "scalar",
        T: 13
    }, {
        no: 11,
        name: "permission",
        kind: "message",
        T: Ba
    }, {
        no: 12,
        name: "region",
        kind: "scalar",
        T: 9
    }, {
        no: 13,
        name: "is_publisher",
        kind: "scalar",
        T: 8
    }, {
        no: 14,
        name: "kind",
        kind: "enum",
        T: f.getEnumType(Lt)
    }, {
        no: 15,
        name: "attributes",
        kind: "map",
        K: 9,
        V: {
            kind: "scalar",
            T: 9
        }
    }, {
        no: 16,
        name: "disconnect_reason",
        kind: "enum",
        T: f.getEnumType(We)
    }]),
    li = f.makeEnum("livekit.ParticipantInfo.State", [{
        no: 0,
        name: "JOINING"
    }, {
        no: 1,
        name: "JOINED"
    }, {
        no: 2,
        name: "ACTIVE"
    }, {
        no: 3,
        name: "DISCONNECTED"
    }]),
    Lt = f.makeEnum("livekit.ParticipantInfo.Kind", [{
        no: 0,
        name: "STANDARD"
    }, {
        no: 1,
        name: "INGRESS"
    }, {
        no: 2,
        name: "EGRESS"
    }, {
        no: 3,
        name: "SIP"
    }, {
        no: 4,
        name: "AGENT"
    }]),
    re = f.makeEnum("livekit.Encryption.Type", [{
        no: 0,
        name: "NONE"
    }, {
        no: 1,
        name: "GCM"
    }, {
        no: 2,
        name: "CUSTOM"
    }]),
    Va = f.makeMessageType("livekit.SimulcastCodecInfo", () => [{
        no: 1,
        name: "mime_type",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "mid",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "cid",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "layers",
        kind: "message",
        T: Ne,
        repeated: !0
    }]),
    Ke = f.makeMessageType("livekit.TrackInfo", () => [{
        no: 1,
        name: "sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "type",
        kind: "enum",
        T: f.getEnumType(de)
    }, {
        no: 3,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "muted",
        kind: "scalar",
        T: 8
    }, {
        no: 5,
        name: "width",
        kind: "scalar",
        T: 13
    }, {
        no: 6,
        name: "height",
        kind: "scalar",
        T: 13
    }, {
        no: 7,
        name: "simulcast",
        kind: "scalar",
        T: 8
    }, {
        no: 8,
        name: "disable_dtx",
        kind: "scalar",
        T: 8
    }, {
        no: 9,
        name: "source",
        kind: "enum",
        T: f.getEnumType(ee)
    }, {
        no: 10,
        name: "layers",
        kind: "message",
        T: Ne,
        repeated: !0
    }, {
        no: 11,
        name: "mime_type",
        kind: "scalar",
        T: 9
    }, {
        no: 12,
        name: "mid",
        kind: "scalar",
        T: 9
    }, {
        no: 13,
        name: "codecs",
        kind: "message",
        T: Va,
        repeated: !0
    }, {
        no: 14,
        name: "stereo",
        kind: "scalar",
        T: 8
    }, {
        no: 15,
        name: "disable_red",
        kind: "scalar",
        T: 8
    }, {
        no: 16,
        name: "encryption",
        kind: "enum",
        T: f.getEnumType(re)
    }, {
        no: 17,
        name: "stream",
        kind: "scalar",
        T: 9
    }, {
        no: 18,
        name: "version",
        kind: "message",
        T: Ds
    }, {
        no: 19,
        name: "audio_features",
        kind: "enum",
        T: f.getEnumType(fe),
        repeated: !0
    }]),
    Ne = f.makeMessageType("livekit.VideoLayer", () => [{
        no: 1,
        name: "quality",
        kind: "enum",
        T: f.getEnumType(Ui)
    }, {
        no: 2,
        name: "width",
        kind: "scalar",
        T: 13
    }, {
        no: 3,
        name: "height",
        kind: "scalar",
        T: 13
    }, {
        no: 4,
        name: "bitrate",
        kind: "scalar",
        T: 13
    }, {
        no: 5,
        name: "ssrc",
        kind: "scalar",
        T: 13
    }]),
    Re = f.makeMessageType("livekit.DataPacket", () => [{
        no: 1,
        name: "kind",
        kind: "enum",
        T: f.getEnumType(V)
    }, {
        no: 4,
        name: "participant_identity",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "destination_identities",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 2,
        name: "user",
        kind: "message",
        T: Ts,
        oneof: "value"
    }, {
        no: 3,
        name: "speaker",
        kind: "message",
        T: qa,
        oneof: "value"
    }, {
        no: 6,
        name: "sip_dtmf",
        kind: "message",
        T: Cs,
        oneof: "value"
    }, {
        no: 7,
        name: "transcription",
        kind: "message",
        T: Ka,
        oneof: "value"
    }, {
        no: 8,
        name: "metrics",
        kind: "message",
        T: Aa,
        oneof: "value"
    }, {
        no: 9,
        name: "chat_message",
        kind: "message",
        T: ui,
        oneof: "value"
    }, {
        no: 10,
        name: "rpc_request",
        kind: "message",
        T: Ss,
        oneof: "value"
    }, {
        no: 11,
        name: "rpc_ack",
        kind: "message",
        T: Ps,
        oneof: "value"
    }, {
        no: 12,
        name: "rpc_response",
        kind: "message",
        T: Es,
        oneof: "value"
    }]),
    V = f.makeEnum("livekit.DataPacket.Kind", [{
        no: 0,
        name: "RELIABLE"
    }, {
        no: 1,
        name: "LOSSY"
    }]),
    qa = f.makeMessageType("livekit.ActiveSpeakerUpdate", () => [{
        no: 1,
        name: "speakers",
        kind: "message",
        T: ys,
        repeated: !0
    }]),
    ys = f.makeMessageType("livekit.SpeakerInfo", () => [{
        no: 1,
        name: "sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "level",
        kind: "scalar",
        T: 2
    }, {
        no: 3,
        name: "active",
        kind: "scalar",
        T: 8
    }]),
    Ts = f.makeMessageType("livekit.UserPacket", () => [{
        no: 1,
        name: "participant_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "participant_identity",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "payload",
        kind: "scalar",
        T: 12
    }, {
        no: 3,
        name: "destination_sids",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 6,
        name: "destination_identities",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 4,
        name: "topic",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 8,
        name: "id",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 9,
        name: "start_time",
        kind: "scalar",
        T: 4,
        opt: !0
    }, {
        no: 10,
        name: "end_time",
        kind: "scalar",
        T: 4,
        opt: !0
    }]),
    Cs = f.makeMessageType("livekit.SipDTMF", () => [{
        no: 3,
        name: "code",
        kind: "scalar",
        T: 13
    }, {
        no: 4,
        name: "digit",
        kind: "scalar",
        T: 9
    }]),
    Ka = f.makeMessageType("livekit.Transcription", () => [{
        no: 2,
        name: "transcribed_participant_identity",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "track_id",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "segments",
        kind: "message",
        T: Ga,
        repeated: !0
    }]),
    Ga = f.makeMessageType("livekit.TranscriptionSegment", () => [{
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "text",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "start_time",
        kind: "scalar",
        T: 4
    }, {
        no: 4,
        name: "end_time",
        kind: "scalar",
        T: 4
    }, {
        no: 5,
        name: "final",
        kind: "scalar",
        T: 8
    }, {
        no: 6,
        name: "language",
        kind: "scalar",
        T: 9
    }]),
    ui = f.makeMessageType("livekit.ChatMessage", () => [{
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "timestamp",
        kind: "scalar",
        T: 3
    }, {
        no: 3,
        name: "edit_timestamp",
        kind: "scalar",
        T: 3,
        opt: !0
    }, {
        no: 4,
        name: "message",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "deleted",
        kind: "scalar",
        T: 8
    }, {
        no: 6,
        name: "generated",
        kind: "scalar",
        T: 8
    }]),
    Ss = f.makeMessageType("livekit.RpcRequest", () => [{
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "method",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "payload",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "response_timeout_ms",
        kind: "scalar",
        T: 13
    }, {
        no: 5,
        name: "version",
        kind: "scalar",
        T: 13
    }]),
    Ps = f.makeMessageType("livekit.RpcAck", () => [{
        no: 1,
        name: "request_id",
        kind: "scalar",
        T: 9
    }]),
    Es = f.makeMessageType("livekit.RpcResponse", () => [{
        no: 1,
        name: "request_id",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "payload",
        kind: "scalar",
        T: 9,
        oneof: "value"
    }, {
        no: 3,
        name: "error",
        kind: "message",
        T: Rs,
        oneof: "value"
    }]),
    Rs = f.makeMessageType("livekit.RpcError", () => [{
        no: 1,
        name: "code",
        kind: "scalar",
        T: 13
    }, {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "data",
        kind: "scalar",
        T: 9
    }]),
    _s = f.makeMessageType("livekit.ParticipantTracks", () => [{
        no: 1,
        name: "participant_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "track_sids",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]),
    Wa = f.makeMessageType("livekit.ServerInfo", () => [{
        no: 1,
        name: "edition",
        kind: "enum",
        T: f.getEnumType(ws)
    }, {
        no: 2,
        name: "version",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "protocol",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "region",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "node_id",
        kind: "scalar",
        T: 9
    }, {
        no: 6,
        name: "debug_info",
        kind: "scalar",
        T: 9
    }, {
        no: 7,
        name: "agent_protocol",
        kind: "scalar",
        T: 5
    }]),
    ws = f.makeEnum("livekit.ServerInfo.Edition", [{
        no: 0,
        name: "Standard"
    }, {
        no: 1,
        name: "Cloud"
    }]),
    Ha = f.makeMessageType("livekit.ClientInfo", () => [{
        no: 1,
        name: "sdk",
        kind: "enum",
        T: f.getEnumType(Is)
    }, {
        no: 2,
        name: "version",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "protocol",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "os",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "os_version",
        kind: "scalar",
        T: 9
    }, {
        no: 6,
        name: "device_model",
        kind: "scalar",
        T: 9
    }, {
        no: 7,
        name: "browser",
        kind: "scalar",
        T: 9
    }, {
        no: 8,
        name: "browser_version",
        kind: "scalar",
        T: 9
    }, {
        no: 9,
        name: "address",
        kind: "scalar",
        T: 9
    }, {
        no: 10,
        name: "network",
        kind: "scalar",
        T: 9
    }, {
        no: 11,
        name: "other_sdks",
        kind: "scalar",
        T: 9
    }]),
    Is = f.makeEnum("livekit.ClientInfo.SDK", [{
        no: 0,
        name: "UNKNOWN"
    }, {
        no: 1,
        name: "JS"
    }, {
        no: 2,
        name: "SWIFT"
    }, {
        no: 3,
        name: "ANDROID"
    }, {
        no: 4,
        name: "FLUTTER"
    }, {
        no: 5,
        name: "GO"
    }, {
        no: 6,
        name: "UNITY"
    }, {
        no: 7,
        name: "REACT_NATIVE"
    }, {
        no: 8,
        name: "RUST"
    }, {
        no: 9,
        name: "PYTHON"
    }, {
        no: 10,
        name: "CPP"
    }, {
        no: 11,
        name: "UNITY_WEB"
    }, {
        no: 12,
        name: "NODE"
    }]),
    Os = f.makeMessageType("livekit.ClientConfiguration", () => [{
        no: 1,
        name: "video",
        kind: "message",
        T: mn
    }, {
        no: 2,
        name: "screen",
        kind: "message",
        T: mn
    }, {
        no: 3,
        name: "resume_connection",
        kind: "enum",
        T: f.getEnumType(ht)
    }, {
        no: 4,
        name: "disabled_codecs",
        kind: "message",
        T: za
    }, {
        no: 5,
        name: "force_relay",
        kind: "enum",
        T: f.getEnumType(ht)
    }]),
    mn = f.makeMessageType("livekit.VideoConfiguration", () => [{
        no: 1,
        name: "hardware_encoder",
        kind: "enum",
        T: f.getEnumType(ht)
    }]),
    za = f.makeMessageType("livekit.DisabledCodecs", () => [{
        no: 1,
        name: "codecs",
        kind: "message",
        T: At,
        repeated: !0
    }, {
        no: 2,
        name: "publish",
        kind: "message",
        T: At,
        repeated: !0
    }]),
    Ds = f.makeMessageType("livekit.TimedVersion", () => [{
        no: 1,
        name: "unix_micro",
        kind: "scalar",
        T: 3
    }, {
        no: 2,
        name: "ticks",
        kind: "scalar",
        T: 5
    }]),
    le = f.makeEnum("livekit.SignalTarget", [{
        no: 0,
        name: "PUBLISHER"
    }, {
        no: 1,
        name: "SUBSCRIBER"
    }]),
    hi = f.makeEnum("livekit.StreamState", [{
        no: 0,
        name: "ACTIVE"
    }, {
        no: 1,
        name: "PAUSED"
    }]),
    Ja = f.makeEnum("livekit.CandidateProtocol", [{
        no: 0,
        name: "UDP"
    }, {
        no: 1,
        name: "TCP"
    }, {
        no: 2,
        name: "TLS"
    }]),
    Qa = f.makeMessageType("livekit.SignalRequest", () => [{
        no: 1,
        name: "offer",
        kind: "message",
        T: Ae,
        oneof: "message"
    }, {
        no: 2,
        name: "answer",
        kind: "message",
        T: Ae,
        oneof: "message"
    }, {
        no: 3,
        name: "trickle",
        kind: "message",
        T: ji,
        oneof: "message"
    }, {
        no: 4,
        name: "add_track",
        kind: "message",
        T: mi,
        oneof: "message"
    }, {
        no: 5,
        name: "mute",
        kind: "message",
        T: Bi,
        oneof: "message"
    }, {
        no: 6,
        name: "subscription",
        kind: "message",
        T: qt,
        oneof: "message"
    }, {
        no: 7,
        name: "track_setting",
        kind: "message",
        T: Ms,
        oneof: "message"
    }, {
        no: 8,
        name: "leave",
        kind: "message",
        T: Kt,
        oneof: "message"
    }, {
        no: 10,
        name: "update_layers",
        kind: "message",
        T: Ns,
        oneof: "message"
    }, {
        no: 11,
        name: "subscription_permission",
        kind: "message",
        T: Fs,
        oneof: "message"
    }, {
        no: 12,
        name: "sync_state",
        kind: "message",
        T: js,
        oneof: "message"
    }, {
        no: 13,
        name: "simulate",
        kind: "message",
        T: pe,
        oneof: "message"
    }, {
        no: 14,
        name: "ping",
        kind: "scalar",
        T: 3,
        oneof: "message"
    }, {
        no: 15,
        name: "update_metadata",
        kind: "message",
        T: As,
        oneof: "message"
    }, {
        no: 16,
        name: "ping_req",
        kind: "message",
        T: Vs,
        oneof: "message"
    }, {
        no: 17,
        name: "update_audio_track",
        kind: "message",
        T: xs,
        oneof: "message"
    }, {
        no: 18,
        name: "update_video_track",
        kind: "message",
        T: eo,
        oneof: "message"
    }]),
    fn = f.makeMessageType("livekit.SignalResponse", () => [{
        no: 1,
        name: "join",
        kind: "message",
        T: Ya,
        oneof: "message"
    }, {
        no: 2,
        name: "answer",
        kind: "message",
        T: Ae,
        oneof: "message"
    }, {
        no: 3,
        name: "offer",
        kind: "message",
        T: Ae,
        oneof: "message"
    }, {
        no: 4,
        name: "trickle",
        kind: "message",
        T: ji,
        oneof: "message"
    }, {
        no: 5,
        name: "update",
        kind: "message",
        T: Za,
        oneof: "message"
    }, {
        no: 6,
        name: "track_published",
        kind: "message",
        T: Vi,
        oneof: "message"
    }, {
        no: 8,
        name: "leave",
        kind: "message",
        T: Kt,
        oneof: "message"
    }, {
        no: 9,
        name: "mute",
        kind: "message",
        T: Bi,
        oneof: "message"
    }, {
        no: 10,
        name: "speakers_changed",
        kind: "message",
        T: to,
        oneof: "message"
    }, {
        no: 11,
        name: "room_update",
        kind: "message",
        T: io,
        oneof: "message"
    }, {
        no: 12,
        name: "connection_quality",
        kind: "message",
        T: so,
        oneof: "message"
    }, {
        no: 13,
        name: "stream_state_update",
        kind: "message",
        T: ao,
        oneof: "message"
    }, {
        no: 14,
        name: "subscribed_quality_update",
        kind: "message",
        T: co,
        oneof: "message"
    }, {
        no: 15,
        name: "subscription_permission_update",
        kind: "message",
        T: lo,
        oneof: "message"
    }, {
        no: 16,
        name: "refresh_token",
        kind: "scalar",
        T: 9,
        oneof: "message"
    }, {
        no: 17,
        name: "track_unpublished",
        kind: "message",
        T: $a,
        oneof: "message"
    }, {
        no: 18,
        name: "pong",
        kind: "scalar",
        T: 3,
        oneof: "message"
    }, {
        no: 19,
        name: "reconnect",
        kind: "message",
        T: Xa,
        oneof: "message"
    }, {
        no: 20,
        name: "pong_resp",
        kind: "message",
        T: uo,
        oneof: "message"
    }, {
        no: 21,
        name: "subscription_response",
        kind: "message",
        T: mo,
        oneof: "message"
    }, {
        no: 22,
        name: "request_response",
        kind: "message",
        T: fo,
        oneof: "message"
    }, {
        no: 23,
        name: "track_subscribed",
        kind: "message",
        T: go,
        oneof: "message"
    }]),
    pi = f.makeMessageType("livekit.SimulcastCodec", () => [{
        no: 1,
        name: "codec",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "cid",
        kind: "scalar",
        T: 9
    }]),
    mi = f.makeMessageType("livekit.AddTrackRequest", () => [{
        no: 1,
        name: "cid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "type",
        kind: "enum",
        T: f.getEnumType(de)
    }, {
        no: 4,
        name: "width",
        kind: "scalar",
        T: 13
    }, {
        no: 5,
        name: "height",
        kind: "scalar",
        T: 13
    }, {
        no: 6,
        name: "muted",
        kind: "scalar",
        T: 8
    }, {
        no: 7,
        name: "disable_dtx",
        kind: "scalar",
        T: 8
    }, {
        no: 8,
        name: "source",
        kind: "enum",
        T: f.getEnumType(ee)
    }, {
        no: 9,
        name: "layers",
        kind: "message",
        T: Ne,
        repeated: !0
    }, {
        no: 10,
        name: "simulcast_codecs",
        kind: "message",
        T: pi,
        repeated: !0
    }, {
        no: 11,
        name: "sid",
        kind: "scalar",
        T: 9
    }, {
        no: 12,
        name: "stereo",
        kind: "scalar",
        T: 8
    }, {
        no: 13,
        name: "disable_red",
        kind: "scalar",
        T: 8
    }, {
        no: 14,
        name: "encryption",
        kind: "enum",
        T: f.getEnumType(re)
    }, {
        no: 15,
        name: "stream",
        kind: "scalar",
        T: 9
    }]),
    ji = f.makeMessageType("livekit.TrickleRequest", () => [{
        no: 1,
        name: "candidateInit",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "target",
        kind: "enum",
        T: f.getEnumType(le)
    }, {
        no: 3,
        name: "final",
        kind: "scalar",
        T: 8
    }]),
    Bi = f.makeMessageType("livekit.MuteTrackRequest", () => [{
        no: 1,
        name: "sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "muted",
        kind: "scalar",
        T: 8
    }]),
    Ya = f.makeMessageType("livekit.JoinResponse", () => [{
        no: 1,
        name: "room",
        kind: "message",
        T: Fi
    }, {
        no: 2,
        name: "participant",
        kind: "message",
        T: pt
    }, {
        no: 3,
        name: "other_participants",
        kind: "message",
        T: pt,
        repeated: !0
    }, {
        no: 4,
        name: "server_version",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "ice_servers",
        kind: "message",
        T: Ls,
        repeated: !0
    }, {
        no: 6,
        name: "subscriber_primary",
        kind: "scalar",
        T: 8
    }, {
        no: 7,
        name: "alternative_url",
        kind: "scalar",
        T: 9
    }, {
        no: 8,
        name: "client_configuration",
        kind: "message",
        T: Os
    }, {
        no: 9,
        name: "server_region",
        kind: "scalar",
        T: 9
    }, {
        no: 10,
        name: "ping_timeout",
        kind: "scalar",
        T: 5
    }, {
        no: 11,
        name: "ping_interval",
        kind: "scalar",
        T: 5
    }, {
        no: 12,
        name: "server_info",
        kind: "message",
        T: Wa
    }, {
        no: 13,
        name: "sif_trailer",
        kind: "scalar",
        T: 12
    }, {
        no: 14,
        name: "enabled_publish_codecs",
        kind: "message",
        T: At,
        repeated: !0
    }, {
        no: 15,
        name: "fast_publish",
        kind: "scalar",
        T: 8
    }]),
    Xa = f.makeMessageType("livekit.ReconnectResponse", () => [{
        no: 1,
        name: "ice_servers",
        kind: "message",
        T: Ls,
        repeated: !0
    }, {
        no: 2,
        name: "client_configuration",
        kind: "message",
        T: Os
    }]),
    Vi = f.makeMessageType("livekit.TrackPublishedResponse", () => [{
        no: 1,
        name: "cid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "track",
        kind: "message",
        T: Ke
    }]),
    $a = f.makeMessageType("livekit.TrackUnpublishedResponse", () => [{
        no: 1,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }]),
    Ae = f.makeMessageType("livekit.SessionDescription", () => [{
        no: 1,
        name: "type",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "sdp",
        kind: "scalar",
        T: 9
    }]),
    Za = f.makeMessageType("livekit.ParticipantUpdate", () => [{
        no: 1,
        name: "participants",
        kind: "message",
        T: pt,
        repeated: !0
    }]),
    qt = f.makeMessageType("livekit.UpdateSubscription", () => [{
        no: 1,
        name: "track_sids",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 2,
        name: "subscribe",
        kind: "scalar",
        T: 8
    }, {
        no: 3,
        name: "participant_tracks",
        kind: "message",
        T: _s,
        repeated: !0
    }]),
    Ms = f.makeMessageType("livekit.UpdateTrackSettings", () => [{
        no: 1,
        name: "track_sids",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 3,
        name: "disabled",
        kind: "scalar",
        T: 8
    }, {
        no: 4,
        name: "quality",
        kind: "enum",
        T: f.getEnumType(Ui)
    }, {
        no: 5,
        name: "width",
        kind: "scalar",
        T: 13
    }, {
        no: 6,
        name: "height",
        kind: "scalar",
        T: 13
    }, {
        no: 7,
        name: "fps",
        kind: "scalar",
        T: 13
    }, {
        no: 8,
        name: "priority",
        kind: "scalar",
        T: 13
    }]),
    xs = f.makeMessageType("livekit.UpdateLocalAudioTrack", () => [{
        no: 1,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "features",
        kind: "enum",
        T: f.getEnumType(fe),
        repeated: !0
    }]),
    eo = f.makeMessageType("livekit.UpdateLocalVideoTrack", () => [{
        no: 1,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "width",
        kind: "scalar",
        T: 13
    }, {
        no: 3,
        name: "height",
        kind: "scalar",
        T: 13
    }]),
    Kt = f.makeMessageType("livekit.LeaveRequest", () => [{
        no: 1,
        name: "can_reconnect",
        kind: "scalar",
        T: 8
    }, {
        no: 2,
        name: "reason",
        kind: "enum",
        T: f.getEnumType(We)
    }, {
        no: 3,
        name: "action",
        kind: "enum",
        T: f.getEnumType(He)
    }, {
        no: 4,
        name: "regions",
        kind: "message",
        T: ho
    }]),
    He = f.makeEnum("livekit.LeaveRequest.Action", [{
        no: 0,
        name: "DISCONNECT"
    }, {
        no: 1,
        name: "RESUME"
    }, {
        no: 2,
        name: "RECONNECT"
    }]),
    Ns = f.makeMessageType("livekit.UpdateVideoLayers", () => [{
        no: 1,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "layers",
        kind: "message",
        T: Ne,
        repeated: !0
    }]),
    As = f.makeMessageType("livekit.UpdateParticipantMetadata", () => [{
        no: 1,
        name: "metadata",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "attributes",
        kind: "map",
        K: 9,
        V: {
            kind: "scalar",
            T: 9
        }
    }, {
        no: 4,
        name: "request_id",
        kind: "scalar",
        T: 13
    }]),
    Ls = f.makeMessageType("livekit.ICEServer", () => [{
        no: 1,
        name: "urls",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 2,
        name: "username",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "credential",
        kind: "scalar",
        T: 9
    }]),
    to = f.makeMessageType("livekit.SpeakersChanged", () => [{
        no: 1,
        name: "speakers",
        kind: "message",
        T: ys,
        repeated: !0
    }]),
    io = f.makeMessageType("livekit.RoomUpdate", () => [{
        no: 1,
        name: "room",
        kind: "message",
        T: Fi
    }]),
    no = f.makeMessageType("livekit.ConnectionQualityInfo", () => [{
        no: 1,
        name: "participant_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "quality",
        kind: "enum",
        T: f.getEnumType(rt)
    }, {
        no: 3,
        name: "score",
        kind: "scalar",
        T: 2
    }]),
    so = f.makeMessageType("livekit.ConnectionQualityUpdate", () => [{
        no: 1,
        name: "updates",
        kind: "message",
        T: no,
        repeated: !0
    }]),
    ro = f.makeMessageType("livekit.StreamStateInfo", () => [{
        no: 1,
        name: "participant_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "state",
        kind: "enum",
        T: f.getEnumType(hi)
    }]),
    ao = f.makeMessageType("livekit.StreamStateUpdate", () => [{
        no: 1,
        name: "stream_states",
        kind: "message",
        T: ro,
        repeated: !0
    }]),
    qi = f.makeMessageType("livekit.SubscribedQuality", () => [{
        no: 1,
        name: "quality",
        kind: "enum",
        T: f.getEnumType(Ui)
    }, {
        no: 2,
        name: "enabled",
        kind: "scalar",
        T: 8
    }]),
    oo = f.makeMessageType("livekit.SubscribedCodec", () => [{
        no: 1,
        name: "codec",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "qualities",
        kind: "message",
        T: qi,
        repeated: !0
    }]),
    co = f.makeMessageType("livekit.SubscribedQualityUpdate", () => [{
        no: 1,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "subscribed_qualities",
        kind: "message",
        T: qi,
        repeated: !0
    }, {
        no: 3,
        name: "subscribed_codecs",
        kind: "message",
        T: oo,
        repeated: !0
    }]),
    Us = f.makeMessageType("livekit.TrackPermission", () => [{
        no: 1,
        name: "participant_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "all_tracks",
        kind: "scalar",
        T: 8
    }, {
        no: 3,
        name: "track_sids",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 4,
        name: "participant_identity",
        kind: "scalar",
        T: 9
    }]),
    Fs = f.makeMessageType("livekit.SubscriptionPermission", () => [{
        no: 1,
        name: "all_participants",
        kind: "scalar",
        T: 8
    }, {
        no: 2,
        name: "track_permissions",
        kind: "message",
        T: Us,
        repeated: !0
    }]),
    lo = f.makeMessageType("livekit.SubscriptionPermissionUpdate", () => [{
        no: 1,
        name: "participant_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "allowed",
        kind: "scalar",
        T: 8
    }]),
    js = f.makeMessageType("livekit.SyncState", () => [{
        no: 1,
        name: "answer",
        kind: "message",
        T: Ae
    }, {
        no: 2,
        name: "subscription",
        kind: "message",
        T: qt
    }, {
        no: 3,
        name: "publish_tracks",
        kind: "message",
        T: Vi,
        repeated: !0
    }, {
        no: 4,
        name: "data_channels",
        kind: "message",
        T: Bs,
        repeated: !0
    }, {
        no: 5,
        name: "offer",
        kind: "message",
        T: Ae
    }, {
        no: 6,
        name: "track_sids_disabled",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]),
    Bs = f.makeMessageType("livekit.DataChannelInfo", () => [{
        no: 1,
        name: "label",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "id",
        kind: "scalar",
        T: 13
    }, {
        no: 3,
        name: "target",
        kind: "enum",
        T: f.getEnumType(le)
    }]),
    pe = f.makeMessageType("livekit.SimulateScenario", () => [{
        no: 1,
        name: "speaker_update",
        kind: "scalar",
        T: 5,
        oneof: "scenario"
    }, {
        no: 2,
        name: "node_failure",
        kind: "scalar",
        T: 8,
        oneof: "scenario"
    }, {
        no: 3,
        name: "migration",
        kind: "scalar",
        T: 8,
        oneof: "scenario"
    }, {
        no: 4,
        name: "server_leave",
        kind: "scalar",
        T: 8,
        oneof: "scenario"
    }, {
        no: 5,
        name: "switch_candidate_protocol",
        kind: "enum",
        T: f.getEnumType(Ja),
        oneof: "scenario"
    }, {
        no: 6,
        name: "subscriber_bandwidth",
        kind: "scalar",
        T: 3,
        oneof: "scenario"
    }, {
        no: 7,
        name: "disconnect_signal_on_resume",
        kind: "scalar",
        T: 8,
        oneof: "scenario"
    }, {
        no: 8,
        name: "disconnect_signal_on_resume_no_messages",
        kind: "scalar",
        T: 8,
        oneof: "scenario"
    }, {
        no: 9,
        name: "leave_request_full_reconnect",
        kind: "scalar",
        T: 8,
        oneof: "scenario"
    }]),
    Vs = f.makeMessageType("livekit.Ping", () => [{
        no: 1,
        name: "timestamp",
        kind: "scalar",
        T: 3
    }, {
        no: 2,
        name: "rtt",
        kind: "scalar",
        T: 3
    }]),
    uo = f.makeMessageType("livekit.Pong", () => [{
        no: 1,
        name: "last_ping_timestamp",
        kind: "scalar",
        T: 3
    }, {
        no: 2,
        name: "timestamp",
        kind: "scalar",
        T: 3
    }]),
    ho = f.makeMessageType("livekit.RegionSettings", () => [{
        no: 1,
        name: "regions",
        kind: "message",
        T: po,
        repeated: !0
    }]),
    po = f.makeMessageType("livekit.RegionInfo", () => [{
        no: 1,
        name: "region",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "url",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "distance",
        kind: "scalar",
        T: 3
    }]),
    mo = f.makeMessageType("livekit.SubscriptionResponse", () => [{
        no: 1,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "err",
        kind: "enum",
        T: f.getEnumType(ja)
    }]),
    fo = f.makeMessageType("livekit.RequestResponse", () => [{
        no: 1,
        name: "request_id",
        kind: "scalar",
        T: 13
    }, {
        no: 2,
        name: "reason",
        kind: "enum",
        T: f.getEnumType(qs)
    }, {
        no: 3,
        name: "message",
        kind: "scalar",
        T: 9
    }]),
    qs = f.makeEnum("livekit.RequestResponse.Reason", [{
        no: 0,
        name: "OK"
    }, {
        no: 1,
        name: "NOT_FOUND"
    }, {
        no: 2,
        name: "NOT_ALLOWED"
    }, {
        no: 3,
        name: "LIMIT_EXCEEDED"
    }]),
    go = f.makeMessageType("livekit.TrackSubscribed", () => [{
        no: 1,
        name: "track_sid",
        kind: "scalar",
        T: 9
    }]);

function vo(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var Pt = {
        exports: {}
    },
    bo = Pt.exports,
    gn;

function ko() {
    return gn || (gn = 1, function(n) {
        (function(e, t) {
            n.exports ? n.exports = t() : e.log = t()
        })(bo, function() {
            var e = function() {},
                t = "undefined",
                i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                s = ["trace", "debug", "info", "warn", "error"],
                r = {},
                a = null;

            function o(v, E) {
                var T = v[E];
                if (typeof T.bind == "function") return T.bind(v);
                try {
                    return Function.prototype.bind.call(T, v)
                } catch {
                    return function() {
                        return Function.prototype.apply.apply(T, [v, arguments])
                    }
                }
            }

            function c() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
            }

            function d(v) {
                return v === "debug" && (v = "log"), typeof console === t ? !1 : v === "trace" && i ? c : console[v] !== void 0 ? o(console, v) : console.log !== void 0 ? o(console, "log") : e
            }

            function l() {
                for (var v = this.getLevel(), E = 0; E < s.length; E++) {
                    var T = s[E];
                    this[T] = E < v ? e : this.methodFactory(T, v, this.name)
                }
                if (this.log = this.debug, typeof console === t && v < this.levels.SILENT) return "No console available for logging"
            }

            function u(v) {
                return function() {
                    typeof console !== t && (l.call(this), this[v].apply(this, arguments))
                }
            }

            function h(v, E, T) {
                return d(v) || u.apply(this, arguments)
            }

            function m(v, E) {
                var T = this,
                    L, D, y, g = "loglevel";
                typeof v == "string" ? g += ":" + v : typeof v == "symbol" && (g = void 0);

                function R(x) {
                    var G = (s[x] || "silent").toUpperCase();
                    if (!(typeof window === t || !g)) {
                        try {
                            window.localStorage[g] = G;
                            return
                        } catch {}
                        try {
                            window.document.cookie = encodeURIComponent(g) + "=" + G + ";"
                        } catch {}
                    }
                }

                function I() {
                    var x;
                    if (!(typeof window === t || !g)) {
                        try {
                            x = window.localStorage[g]
                        } catch {}
                        if (typeof x === t) try {
                            var G = window.document.cookie,
                                Me = encodeURIComponent(g),
                                ft = G.indexOf(Me + "=");
                            ft !== -1 && (x = /^([^;]+)/.exec(G.slice(ft + Me.length + 1))[1])
                        } catch {}
                        return T.levels[x] === void 0 && (x = void 0), x
                    }
                }

                function O() {
                    if (!(typeof window === t || !g)) {
                        try {
                            window.localStorage.removeItem(g)
                        } catch {}
                        try {
                            window.document.cookie = encodeURIComponent(g) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                        } catch {}
                    }
                }

                function N(x) {
                    var G = x;
                    if (typeof G == "string" && T.levels[G.toUpperCase()] !== void 0 && (G = T.levels[G.toUpperCase()]), typeof G == "number" && G >= 0 && G <= T.levels.SILENT) return G;
                    throw new TypeError("log.setLevel() called with invalid level: " + x)
                }
                T.name = v, T.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5
                }, T.methodFactory = E || h, T.getLevel = function() {
                    return y ? ? D ? ? L
                }, T.setLevel = function(x, G) {
                    return y = N(x), G !== !1 && R(y), l.call(T)
                }, T.setDefaultLevel = function(x) {
                    D = N(x), I() || T.setLevel(x, !1)
                }, T.resetLevel = function() {
                    y = null, O(), l.call(T)
                }, T.enableAll = function(x) {
                    T.setLevel(T.levels.TRACE, x)
                }, T.disableAll = function(x) {
                    T.setLevel(T.levels.SILENT, x)
                }, T.rebuild = function() {
                    if (a !== T && (L = N(a.getLevel())), l.call(T), a === T)
                        for (var x in r) r[x].rebuild()
                }, L = N(a ? a.getLevel() : "WARN");
                var M = I();
                M != null && (y = N(M)), l.call(T)
            }
            a = new m, a.getLogger = function(E) {
                if (typeof E != "symbol" && typeof E != "string" || E === "") throw new TypeError("You must supply a name when creating a logger.");
                var T = r[E];
                return T || (T = r[E] = new m(E, a.methodFactory)), T
            };
            var k = typeof window !== t ? window.log : void 0;
            return a.noConflict = function() {
                return typeof window !== t && window.log === a && (window.log = k), a
            }, a.getLoggers = function() {
                return r
            }, a.default = a, a
        })
    }(Pt)), Pt.exports
}
var Gt = ko(),
    fi;
(function(n) {
    n[n.trace = 0] = "trace", n[n.debug = 1] = "debug", n[n.info = 2] = "info", n[n.warn = 3] = "warn", n[n.error = 4] = "error", n[n.silent = 5] = "silent"
})(fi || (fi = {}));
var ue;
(function(n) {
    n.Default = "livekit", n.Room = "livekit-room", n.Participant = "livekit-participant", n.Track = "livekit-track", n.Publication = "livekit-track-publication", n.Engine = "livekit-engine", n.Signal = "livekit-signal", n.PCManager = "livekit-pc-manager", n.PCTransport = "livekit-pc-transport", n.E2EE = "lk-e2ee"
})(ue || (ue = {}));
let A = Gt.getLogger("livekit");
Object.values(ue).map(n => Gt.getLogger(n));
A.setDefaultLevel(fi.info);

function Ce(n) {
    const e = Gt.getLogger(n);
    return e.setDefaultLevel(A.getLevel()), e
}
const yo = Gt.getLogger("lk-e2ee"),
    it = 7e3,
    To = [0, 300, 2 * 2 * 300, 3 * 3 * 300, 4 * 4 * 300, it, it, it, it, it];
class Co {
    constructor(e) {
        this._retryDelays = e !== void 0 ? [...e] : To
    }
    nextRetryDelayInMs(e) {
        if (e.retryCount >= this._retryDelays.length) return null;
        const t = this._retryDelays[e.retryCount];
        return e.retryCount <= 1 ? t : t + Math.random() * 1e3
    }
}

function p(n, e, t, i) {
    function s(r) {
        return r instanceof t ? r : new t(function(a) {
            a(r)
        })
    }
    return new(t || (t = Promise))(function(r, a) {
        function o(l) {
            try {
                d(i.next(l))
            } catch (u) {
                a(u)
            }
        }

        function c(l) {
            try {
                d(i.throw(l))
            } catch (u) {
                a(u)
            }
        }

        function d(l) {
            l.done ? r(l.value) : s(l.value).then(o, c)
        }
        d((i = i.apply(n, e || [])).next())
    })
}

function vn(n) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        t = e && n[e],
        i = 0;
    if (t) return t.call(n);
    if (n && typeof n.length == "number") return {
        next: function() {
            return n && i >= n.length && (n = void 0), {
                value: n && n[i++],
                done: !n
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function qe(n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = n[Symbol.asyncIterator],
        t;
    return e ? e.call(n) : (n = typeof vn == "function" ? vn(n) : n[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
        return this
    }, t);

    function i(r) {
        t[r] = n[r] && function(a) {
            return new Promise(function(o, c) {
                a = n[r](a), s(o, c, a.done, a.value)
            })
        }
    }

    function s(r, a, o, c) {
        Promise.resolve(c).then(function(d) {
            r({
                value: d,
                done: o
            })
        }, a)
    }
}
var vt = {
        exports: {}
    },
    bn;

function So() {
    if (bn) return vt.exports;
    bn = 1;
    var n = typeof Reflect == "object" ? Reflect : null,
        e = n && typeof n.apply == "function" ? n.apply : function(g, R, I) {
            return Function.prototype.apply.call(g, R, I)
        },
        t;
    n && typeof n.ownKeys == "function" ? t = n.ownKeys : Object.getOwnPropertySymbols ? t = function(g) {
        return Object.getOwnPropertyNames(g).concat(Object.getOwnPropertySymbols(g))
    } : t = function(g) {
        return Object.getOwnPropertyNames(g)
    };

    function i(y) {
        console && console.warn && console.warn(y)
    }
    var s = Number.isNaN || function(g) {
        return g !== g
    };

    function r() {
        r.init.call(this)
    }
    vt.exports = r, vt.exports.once = T, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
    var a = 10;

    function o(y) {
        if (typeof y != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof y)
    }
    Object.defineProperty(r, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return a
        },
        set: function(y) {
            if (typeof y != "number" || y < 0 || s(y)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + y + ".");
            a = y
        }
    }), r.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, r.prototype.setMaxListeners = function(g) {
        if (typeof g != "number" || g < 0 || s(g)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + g + ".");
        return this._maxListeners = g, this
    };

    function c(y) {
        return y._maxListeners === void 0 ? r.defaultMaxListeners : y._maxListeners
    }
    r.prototype.getMaxListeners = function() {
        return c(this)
    }, r.prototype.emit = function(g) {
        for (var R = [], I = 1; I < arguments.length; I++) R.push(arguments[I]);
        var O = g === "error",
            N = this._events;
        if (N !== void 0) O = O && N.error === void 0;
        else if (!O) return !1;
        if (O) {
            var M;
            if (R.length > 0 && (M = R[0]), M instanceof Error) throw M;
            var x = new Error("Unhandled error." + (M ? " (" + M.message + ")" : ""));
            throw x.context = M, x
        }
        var G = N[g];
        if (G === void 0) return !1;
        if (typeof G == "function") e(G, this, R);
        else
            for (var Me = G.length, ft = k(G, Me), I = 0; I < Me; ++I) e(ft[I], this, R);
        return !0
    };

    function d(y, g, R, I) {
        var O, N, M;
        if (o(R), N = y._events, N === void 0 ? (N = y._events = Object.create(null), y._eventsCount = 0) : (N.newListener !== void 0 && (y.emit("newListener", g, R.listener ? R.listener : R), N = y._events), M = N[g]), M === void 0) M = N[g] = R, ++y._eventsCount;
        else if (typeof M == "function" ? M = N[g] = I ? [R, M] : [M, R] : I ? M.unshift(R) : M.push(R), O = c(y), O > 0 && M.length > O && !M.warned) {
            M.warned = !0;
            var x = new Error("Possible EventEmitter memory leak detected. " + M.length + " " + String(g) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            x.name = "MaxListenersExceededWarning", x.emitter = y, x.type = g, x.count = M.length, i(x)
        }
        return y
    }
    r.prototype.addListener = function(g, R) {
        return d(this, g, R, !1)
    }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function(g, R) {
        return d(this, g, R, !0)
    };

    function l() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function u(y, g, R) {
        var I = {
                fired: !1,
                wrapFn: void 0,
                target: y,
                type: g,
                listener: R
            },
            O = l.bind(I);
        return O.listener = R, I.wrapFn = O, O
    }
    r.prototype.once = function(g, R) {
        return o(R), this.on(g, u(this, g, R)), this
    }, r.prototype.prependOnceListener = function(g, R) {
        return o(R), this.prependListener(g, u(this, g, R)), this
    }, r.prototype.removeListener = function(g, R) {
        var I, O, N, M, x;
        if (o(R), O = this._events, O === void 0) return this;
        if (I = O[g], I === void 0) return this;
        if (I === R || I.listener === R) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete O[g], O.removeListener && this.emit("removeListener", g, I.listener || R));
        else if (typeof I != "function") {
            for (N = -1, M = I.length - 1; M >= 0; M--)
                if (I[M] === R || I[M].listener === R) {
                    x = I[M].listener, N = M;
                    break
                }
            if (N < 0) return this;
            N === 0 ? I.shift() : v(I, N), I.length === 1 && (O[g] = I[0]), O.removeListener !== void 0 && this.emit("removeListener", g, x || R)
        }
        return this
    }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function(g) {
        var R, I, O;
        if (I = this._events, I === void 0) return this;
        if (I.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : I[g] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete I[g]), this;
        if (arguments.length === 0) {
            var N = Object.keys(I),
                M;
            for (O = 0; O < N.length; ++O) M = N[O], M !== "removeListener" && this.removeAllListeners(M);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (R = I[g], typeof R == "function") this.removeListener(g, R);
        else if (R !== void 0)
            for (O = R.length - 1; O >= 0; O--) this.removeListener(g, R[O]);
        return this
    };

    function h(y, g, R) {
        var I = y._events;
        if (I === void 0) return [];
        var O = I[g];
        return O === void 0 ? [] : typeof O == "function" ? R ? [O.listener || O] : [O] : R ? E(O) : k(O, O.length)
    }
    r.prototype.listeners = function(g) {
        return h(this, g, !0)
    }, r.prototype.rawListeners = function(g) {
        return h(this, g, !1)
    }, r.listenerCount = function(y, g) {
        return typeof y.listenerCount == "function" ? y.listenerCount(g) : m.call(y, g)
    }, r.prototype.listenerCount = m;

    function m(y) {
        var g = this._events;
        if (g !== void 0) {
            var R = g[y];
            if (typeof R == "function") return 1;
            if (R !== void 0) return R.length
        }
        return 0
    }
    r.prototype.eventNames = function() {
        return this._eventsCount > 0 ? t(this._events) : []
    };

    function k(y, g) {
        for (var R = new Array(g), I = 0; I < g; ++I) R[I] = y[I];
        return R
    }

    function v(y, g) {
        for (; g + 1 < y.length; g++) y[g] = y[g + 1];
        y.pop()
    }

    function E(y) {
        for (var g = new Array(y.length), R = 0; R < g.length; ++R) g[R] = y[R].listener || y[R];
        return g
    }

    function T(y, g) {
        return new Promise(function(R, I) {
            function O(M) {
                y.removeListener(g, N), I(M)
            }

            function N() {
                typeof y.removeListener == "function" && y.removeListener("error", O), R([].slice.call(arguments))
            }
            D(y, g, N, {
                once: !0
            }), g !== "error" && L(y, O, {
                once: !0
            })
        })
    }

    function L(y, g, R) {
        typeof y.on == "function" && D(y, "error", g, R)
    }

    function D(y, g, R, I) {
        if (typeof y.on == "function") I.once ? y.once(g, R) : y.on(g, R);
        else if (typeof y.addEventListener == "function") y.addEventListener(g, function O(N) {
            I.once && y.removeEventListener(g, O), R(N)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof y)
    }
    return vt.exports
}
var be = So();
let Ks = !0,
    Gs = !0;

function Et(n, e, t) {
    const i = n.match(e);
    return i && i.length >= t && parseInt(i[t], 10)
}

function Ue(n, e, t) {
    if (!n.RTCPeerConnection) return;
    const i = n.RTCPeerConnection.prototype,
        s = i.addEventListener;
    i.addEventListener = function(a, o) {
        if (a !== e) return s.apply(this, arguments);
        const c = d => {
            const l = t(d);
            l && (o.handleEvent ? o.handleEvent(l) : o(l))
        };
        return this._eventMap = this._eventMap || {}, this._eventMap[e] || (this._eventMap[e] = new Map), this._eventMap[e].set(o, c), s.apply(this, [a, c])
    };
    const r = i.removeEventListener;
    i.removeEventListener = function(a, o) {
        if (a !== e || !this._eventMap || !this._eventMap[e]) return r.apply(this, arguments);
        if (!this._eventMap[e].has(o)) return r.apply(this, arguments);
        const c = this._eventMap[e].get(o);
        return this._eventMap[e].delete(o), this._eventMap[e].size === 0 && delete this._eventMap[e], Object.keys(this._eventMap).length === 0 && delete this._eventMap, r.apply(this, [a, c])
    }, Object.defineProperty(i, "on" + e, {
        get() {
            return this["_on" + e]
        },
        set(a) {
            this["_on" + e] && (this.removeEventListener(e, this["_on" + e]), delete this["_on" + e]), a && this.addEventListener(e, this["_on" + e] = a)
        },
        enumerable: !0,
        configurable: !0
    })
}

function Po(n) {
    return typeof n != "boolean" ? new Error("Argument type: " + typeof n + ". Please use a boolean.") : (Ks = n, n ? "adapter.js logging disabled" : "adapter.js logging enabled")
}

function Eo(n) {
    return typeof n != "boolean" ? new Error("Argument type: " + typeof n + ". Please use a boolean.") : (Gs = !n, "adapter.js deprecation warnings " + (n ? "disabled" : "enabled"))
}

function Ws() {
    if (typeof window == "object") {
        if (Ks) return;
        typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments)
    }
}

function Ki(n, e) {
    Gs && console.warn(n + " is deprecated, please use " + e + " instead.")
}

function Ro(n) {
    const e = {
        browser: null,
        version: null
    };
    if (typeof n > "u" || !n.navigator || !n.navigator.userAgent) return e.browser = "Not a browser.", e;
    const {
        navigator: t
    } = n;
    if (t.userAgentData && t.userAgentData.brands) {
        const i = t.userAgentData.brands.find(s => s.brand === "Chromium");
        if (i) return {
            browser: "chrome",
            version: parseInt(i.version, 10)
        }
    }
    if (t.mozGetUserMedia) e.browser = "firefox", e.version = Et(t.userAgent, /Firefox\/(\d+)\./, 1);
    else if (t.webkitGetUserMedia || n.isSecureContext === !1 && n.webkitRTCPeerConnection) e.browser = "chrome", e.version = Et(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    else if (n.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./)) e.browser = "safari", e.version = Et(t.userAgent, /AppleWebKit\/(\d+)\./, 1), e.supportsUnifiedPlan = n.RTCRtpTransceiver && "currentDirection" in n.RTCRtpTransceiver.prototype;
    else return e.browser = "Not a supported browser.", e;
    return e
}

function kn(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}

function Hs(n) {
    return kn(n) ? Object.keys(n).reduce(function(e, t) {
        const i = kn(n[t]),
            s = i ? Hs(n[t]) : n[t],
            r = i && !Object.keys(s).length;
        return s === void 0 || r ? e : Object.assign(e, {
            [t]: s
        })
    }, {}) : n
}

function gi(n, e, t) {
    !e || t.has(e.id) || (t.set(e.id, e), Object.keys(e).forEach(i => {
        i.endsWith("Id") ? gi(n, n.get(e[i]), t) : i.endsWith("Ids") && e[i].forEach(s => {
            gi(n, n.get(s), t)
        })
    }))
}

function yn(n, e, t) {
    const i = t ? "outbound-rtp" : "inbound-rtp",
        s = new Map;
    if (e === null) return s;
    const r = [];
    return n.forEach(a => {
        a.type === "track" && a.trackIdentifier === e.id && r.push(a)
    }), r.forEach(a => {
        n.forEach(o => {
            o.type === i && o.trackId === a.id && gi(n, o, s)
        })
    }), s
}
const Tn = Ws;

function zs(n, e) {
    const t = n && n.navigator;
    if (!t.mediaDevices) return;
    const i = function(o) {
            if (typeof o != "object" || o.mandatory || o.optional) return o;
            const c = {};
            return Object.keys(o).forEach(d => {
                if (d === "require" || d === "advanced" || d === "mediaSource") return;
                const l = typeof o[d] == "object" ? o[d] : {
                    ideal: o[d]
                };
                l.exact !== void 0 && typeof l.exact == "number" && (l.min = l.max = l.exact);
                const u = function(h, m) {
                    return h ? h + m.charAt(0).toUpperCase() + m.slice(1) : m === "deviceId" ? "sourceId" : m
                };
                if (l.ideal !== void 0) {
                    c.optional = c.optional || [];
                    let h = {};
                    typeof l.ideal == "number" ? (h[u("min", d)] = l.ideal, c.optional.push(h), h = {}, h[u("max", d)] = l.ideal, c.optional.push(h)) : (h[u("", d)] = l.ideal, c.optional.push(h))
                }
                l.exact !== void 0 && typeof l.exact != "number" ? (c.mandatory = c.mandatory || {}, c.mandatory[u("", d)] = l.exact) : ["min", "max"].forEach(h => {
                    l[h] !== void 0 && (c.mandatory = c.mandatory || {}, c.mandatory[u(h, d)] = l[h])
                })
            }), o.advanced && (c.optional = (c.optional || []).concat(o.advanced)), c
        },
        s = function(o, c) {
            if (e.version >= 61) return c(o);
            if (o = JSON.parse(JSON.stringify(o)), o && typeof o.audio == "object") {
                const d = function(l, u, h) {
                    u in l && !(h in l) && (l[h] = l[u], delete l[u])
                };
                o = JSON.parse(JSON.stringify(o)), d(o.audio, "autoGainControl", "googAutoGainControl"), d(o.audio, "noiseSuppression", "googNoiseSuppression"), o.audio = i(o.audio)
            }
            if (o && typeof o.video == "object") {
                let d = o.video.facingMode;
                d = d && (typeof d == "object" ? d : {
                    ideal: d
                });
                const l = e.version < 66;
                if (d && (d.exact === "user" || d.exact === "environment" || d.ideal === "user" || d.ideal === "environment") && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !l)) {
                    delete o.video.facingMode;
                    let u;
                    if (d.exact === "environment" || d.ideal === "environment" ? u = ["back", "rear"] : (d.exact === "user" || d.ideal === "user") && (u = ["front"]), u) return t.mediaDevices.enumerateDevices().then(h => {
                        h = h.filter(k => k.kind === "videoinput");
                        let m = h.find(k => u.some(v => k.label.toLowerCase().includes(v)));
                        return !m && h.length && u.includes("back") && (m = h[h.length - 1]), m && (o.video.deviceId = d.exact ? {
                            exact: m.deviceId
                        } : {
                            ideal: m.deviceId
                        }), o.video = i(o.video), Tn("chrome: " + JSON.stringify(o)), c(o)
                    })
                }
                o.video = i(o.video)
            }
            return Tn("chrome: " + JSON.stringify(o)), c(o)
        },
        r = function(o) {
            return e.version >= 64 ? o : {
                name: {
                    PermissionDeniedError: "NotAllowedError",
                    PermissionDismissedError: "NotAllowedError",
                    InvalidStateError: "NotAllowedError",
                    DevicesNotFoundError: "NotFoundError",
                    ConstraintNotSatisfiedError: "OverconstrainedError",
                    TrackStartError: "NotReadableError",
                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                    MediaDeviceKillSwitchOn: "NotAllowedError",
                    TabCaptureError: "AbortError",
                    ScreenCaptureError: "AbortError",
                    DeviceCaptureError: "AbortError"
                }[o.name] || o.name,
                message: o.message,
                constraint: o.constraint || o.constraintName,
                toString() {
                    return this.name + (this.message && ": ") + this.message
                }
            }
        },
        a = function(o, c, d) {
            s(o, l => {
                t.webkitGetUserMedia(l, c, u => {
                    d && d(r(u))
                })
            })
        };
    if (t.getUserMedia = a.bind(t), t.mediaDevices.getUserMedia) {
        const o = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        t.mediaDevices.getUserMedia = function(c) {
            return s(c, d => o(d).then(l => {
                if (d.audio && !l.getAudioTracks().length || d.video && !l.getVideoTracks().length) throw l.getTracks().forEach(u => {
                    u.stop()
                }), new DOMException("", "NotFoundError");
                return l
            }, l => Promise.reject(r(l))))
        }
    }
}

function Js(n) {
    n.MediaStream = n.MediaStream || n.webkitMediaStream
}

function Qs(n) {
    if (typeof n == "object" && n.RTCPeerConnection && !("ontrack" in n.RTCPeerConnection.prototype)) {
        Object.defineProperty(n.RTCPeerConnection.prototype, "ontrack", {
            get() {
                return this._ontrack
            },
            set(t) {
                this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = t)
            },
            enumerable: !0,
            configurable: !0
        });
        const e = n.RTCPeerConnection.prototype.setRemoteDescription;
        n.RTCPeerConnection.prototype.setRemoteDescription = function() {
            return this._ontrackpoly || (this._ontrackpoly = i => {
                i.stream.addEventListener("addtrack", s => {
                    let r;
                    n.RTCPeerConnection.prototype.getReceivers ? r = this.getReceivers().find(o => o.track && o.track.id === s.track.id) : r = {
                        track: s.track
                    };
                    const a = new Event("track");
                    a.track = s.track, a.receiver = r, a.transceiver = {
                        receiver: r
                    }, a.streams = [i.stream], this.dispatchEvent(a)
                }), i.stream.getTracks().forEach(s => {
                    let r;
                    n.RTCPeerConnection.prototype.getReceivers ? r = this.getReceivers().find(o => o.track && o.track.id === s.id) : r = {
                        track: s
                    };
                    const a = new Event("track");
                    a.track = s, a.receiver = r, a.transceiver = {
                        receiver: r
                    }, a.streams = [i.stream], this.dispatchEvent(a)
                })
            }, this.addEventListener("addstream", this._ontrackpoly)), e.apply(this, arguments)
        }
    } else Ue(n, "track", e => (e.transceiver || Object.defineProperty(e, "transceiver", {
        value: {
            receiver: e.receiver
        }
    }), e))
}

function Ys(n) {
    if (typeof n == "object" && n.RTCPeerConnection && !("getSenders" in n.RTCPeerConnection.prototype) && "createDTMFSender" in n.RTCPeerConnection.prototype) {
        const e = function(s, r) {
            return {
                track: r,
                get dtmf() {
                    return this._dtmf === void 0 && (r.kind === "audio" ? this._dtmf = s.createDTMFSender(r) : this._dtmf = null), this._dtmf
                },
                _pc: s
            }
        };
        if (!n.RTCPeerConnection.prototype.getSenders) {
            n.RTCPeerConnection.prototype.getSenders = function() {
                return this._senders = this._senders || [], this._senders.slice()
            };
            const s = n.RTCPeerConnection.prototype.addTrack;
            n.RTCPeerConnection.prototype.addTrack = function(o, c) {
                let d = s.apply(this, arguments);
                return d || (d = e(this, o), this._senders.push(d)), d
            };
            const r = n.RTCPeerConnection.prototype.removeTrack;
            n.RTCPeerConnection.prototype.removeTrack = function(o) {
                r.apply(this, arguments);
                const c = this._senders.indexOf(o);
                c !== -1 && this._senders.splice(c, 1)
            }
        }
        const t = n.RTCPeerConnection.prototype.addStream;
        n.RTCPeerConnection.prototype.addStream = function(r) {
            this._senders = this._senders || [], t.apply(this, [r]), r.getTracks().forEach(a => {
                this._senders.push(e(this, a))
            })
        };
        const i = n.RTCPeerConnection.prototype.removeStream;
        n.RTCPeerConnection.prototype.removeStream = function(r) {
            this._senders = this._senders || [], i.apply(this, [r]), r.getTracks().forEach(a => {
                const o = this._senders.find(c => c.track === a);
                o && this._senders.splice(this._senders.indexOf(o), 1)
            })
        }
    } else if (typeof n == "object" && n.RTCPeerConnection && "getSenders" in n.RTCPeerConnection.prototype && "createDTMFSender" in n.RTCPeerConnection.prototype && n.RTCRtpSender && !("dtmf" in n.RTCRtpSender.prototype)) {
        const e = n.RTCPeerConnection.prototype.getSenders;
        n.RTCPeerConnection.prototype.getSenders = function() {
            const i = e.apply(this, []);
            return i.forEach(s => s._pc = this), i
        }, Object.defineProperty(n.RTCRtpSender.prototype, "dtmf", {
            get() {
                return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
            }
        })
    }
}

function Xs(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender && n.RTCRtpReceiver)) return;
    if (!("getStats" in n.RTCRtpSender.prototype)) {
        const t = n.RTCPeerConnection.prototype.getSenders;
        t && (n.RTCPeerConnection.prototype.getSenders = function() {
            const r = t.apply(this, []);
            return r.forEach(a => a._pc = this), r
        });
        const i = n.RTCPeerConnection.prototype.addTrack;
        i && (n.RTCPeerConnection.prototype.addTrack = function() {
            const r = i.apply(this, arguments);
            return r._pc = this, r
        }), n.RTCRtpSender.prototype.getStats = function() {
            const r = this;
            return this._pc.getStats().then(a => yn(a, r.track, !0))
        }
    }
    if (!("getStats" in n.RTCRtpReceiver.prototype)) {
        const t = n.RTCPeerConnection.prototype.getReceivers;
        t && (n.RTCPeerConnection.prototype.getReceivers = function() {
            const s = t.apply(this, []);
            return s.forEach(r => r._pc = this), s
        }), Ue(n, "track", i => (i.receiver._pc = i.srcElement, i)), n.RTCRtpReceiver.prototype.getStats = function() {
            const s = this;
            return this._pc.getStats().then(r => yn(r, s.track, !1))
        }
    }
    if (!("getStats" in n.RTCRtpSender.prototype && "getStats" in n.RTCRtpReceiver.prototype)) return;
    const e = n.RTCPeerConnection.prototype.getStats;
    n.RTCPeerConnection.prototype.getStats = function() {
        if (arguments.length > 0 && arguments[0] instanceof n.MediaStreamTrack) {
            const i = arguments[0];
            let s, r, a;
            return this.getSenders().forEach(o => {
                o.track === i && (s ? a = !0 : s = o)
            }), this.getReceivers().forEach(o => (o.track === i && (r ? a = !0 : r = o), o.track === i)), a || s && r ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : s ? s.getStats() : r ? r.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
        }
        return e.apply(this, arguments)
    }
}

function $s(n) {
    n.RTCPeerConnection.prototype.getLocalStreams = function() {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(a => this._shimmedLocalStreams[a][0])
    };
    const e = n.RTCPeerConnection.prototype.addTrack;
    n.RTCPeerConnection.prototype.addTrack = function(a, o) {
        if (!o) return e.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const c = e.apply(this, arguments);
        return this._shimmedLocalStreams[o.id] ? this._shimmedLocalStreams[o.id].indexOf(c) === -1 && this._shimmedLocalStreams[o.id].push(c) : this._shimmedLocalStreams[o.id] = [o, c], c
    };
    const t = n.RTCPeerConnection.prototype.addStream;
    n.RTCPeerConnection.prototype.addStream = function(a) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a.getTracks().forEach(d => {
            if (this.getSenders().find(u => u.track === d)) throw new DOMException("Track already exists.", "InvalidAccessError")
        });
        const o = this.getSenders();
        t.apply(this, arguments);
        const c = this.getSenders().filter(d => o.indexOf(d) === -1);
        this._shimmedLocalStreams[a.id] = [a].concat(c)
    };
    const i = n.RTCPeerConnection.prototype.removeStream;
    n.RTCPeerConnection.prototype.removeStream = function(a) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[a.id], i.apply(this, arguments)
    };
    const s = n.RTCPeerConnection.prototype.removeTrack;
    n.RTCPeerConnection.prototype.removeTrack = function(a) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a && Object.keys(this._shimmedLocalStreams).forEach(o => {
            const c = this._shimmedLocalStreams[o].indexOf(a);
            c !== -1 && this._shimmedLocalStreams[o].splice(c, 1), this._shimmedLocalStreams[o].length === 1 && delete this._shimmedLocalStreams[o]
        }), s.apply(this, arguments)
    }
}

function Zs(n, e) {
    if (!n.RTCPeerConnection) return;
    if (n.RTCPeerConnection.prototype.addTrack && e.version >= 65) return $s(n);
    const t = n.RTCPeerConnection.prototype.getLocalStreams;
    n.RTCPeerConnection.prototype.getLocalStreams = function() {
        const l = t.apply(this);
        return this._reverseStreams = this._reverseStreams || {}, l.map(u => this._reverseStreams[u.id])
    };
    const i = n.RTCPeerConnection.prototype.addStream;
    n.RTCPeerConnection.prototype.addStream = function(l) {
        if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, l.getTracks().forEach(u => {
                if (this.getSenders().find(m => m.track === u)) throw new DOMException("Track already exists.", "InvalidAccessError")
            }), !this._reverseStreams[l.id]) {
            const u = new n.MediaStream(l.getTracks());
            this._streams[l.id] = u, this._reverseStreams[u.id] = l, l = u
        }
        i.apply(this, [l])
    };
    const s = n.RTCPeerConnection.prototype.removeStream;
    n.RTCPeerConnection.prototype.removeStream = function(l) {
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, s.apply(this, [this._streams[l.id] || l]), delete this._reverseStreams[this._streams[l.id] ? this._streams[l.id].id : l.id], delete this._streams[l.id]
    }, n.RTCPeerConnection.prototype.addTrack = function(l, u) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        const h = [].slice.call(arguments, 1);
        if (h.length !== 1 || !h[0].getTracks().find(v => v === l)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
        if (this.getSenders().find(v => v.track === l)) throw new DOMException("Track already exists.", "InvalidAccessError");
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
        const k = this._streams[u.id];
        if (k) k.addTrack(l), Promise.resolve().then(() => {
            this.dispatchEvent(new Event("negotiationneeded"))
        });
        else {
            const v = new n.MediaStream([l]);
            this._streams[u.id] = v, this._reverseStreams[v.id] = u, this.addStream(v)
        }
        return this.getSenders().find(v => v.track === l)
    };

    function r(d, l) {
        let u = l.sdp;
        return Object.keys(d._reverseStreams || []).forEach(h => {
            const m = d._reverseStreams[h],
                k = d._streams[m.id];
            u = u.replace(new RegExp(k.id, "g"), m.id)
        }), new RTCSessionDescription({
            type: l.type,
            sdp: u
        })
    }

    function a(d, l) {
        let u = l.sdp;
        return Object.keys(d._reverseStreams || []).forEach(h => {
            const m = d._reverseStreams[h],
                k = d._streams[m.id];
            u = u.replace(new RegExp(m.id, "g"), k.id)
        }), new RTCSessionDescription({
            type: l.type,
            sdp: u
        })
    }["createOffer", "createAnswer"].forEach(function(d) {
        const l = n.RTCPeerConnection.prototype[d],
            u = {
                [d]() {
                    const h = arguments;
                    return arguments.length && typeof arguments[0] == "function" ? l.apply(this, [k => {
                        const v = r(this, k);
                        h[0].apply(null, [v])
                    }, k => {
                        h[1] && h[1].apply(null, k)
                    }, arguments[2]]) : l.apply(this, arguments).then(k => r(this, k))
                }
            };
        n.RTCPeerConnection.prototype[d] = u[d]
    });
    const o = n.RTCPeerConnection.prototype.setLocalDescription;
    n.RTCPeerConnection.prototype.setLocalDescription = function() {
        return !arguments.length || !arguments[0].type ? o.apply(this, arguments) : (arguments[0] = a(this, arguments[0]), o.apply(this, arguments))
    };
    const c = Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(n.RTCPeerConnection.prototype, "localDescription", {
        get() {
            const d = c.get.apply(this);
            return d.type === "" ? d : r(this, d)
        }
    }), n.RTCPeerConnection.prototype.removeTrack = function(l) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        if (!l._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
        if (!(l._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
        this._streams = this._streams || {};
        let h;
        Object.keys(this._streams).forEach(m => {
            this._streams[m].getTracks().find(v => l.track === v) && (h = this._streams[m])
        }), h && (h.getTracks().length === 1 ? this.removeStream(this._reverseStreams[h.id]) : h.removeTrack(l.track), this.dispatchEvent(new Event("negotiationneeded")))
    }
}

function vi(n, e) {
    !n.RTCPeerConnection && n.webkitRTCPeerConnection && (n.RTCPeerConnection = n.webkitRTCPeerConnection), n.RTCPeerConnection && e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
        const i = n.RTCPeerConnection.prototype[t],
            s = {
                [t]() {
                    return arguments[0] = new(t === "addIceCandidate" ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]), i.apply(this, arguments)
                }
            };
        n.RTCPeerConnection.prototype[t] = s[t]
    })
}

function er(n, e) {
    Ue(n, "negotiationneeded", t => {
        const i = t.target;
        if (!((e.version < 72 || i.getConfiguration && i.getConfiguration().sdpSemantics === "plan-b") && i.signalingState !== "stable")) return t
    })
}
var Cn = Object.freeze({
    __proto__: null,
    fixNegotiationNeeded: er,
    shimAddTrackRemoveTrack: Zs,
    shimAddTrackRemoveTrackWithNative: $s,
    shimGetSendersWithDtmf: Ys,
    shimGetUserMedia: zs,
    shimMediaStream: Js,
    shimOnTrack: Qs,
    shimPeerConnection: vi,
    shimSenderReceiverGetStats: Xs
});

function tr(n, e) {
    const t = n && n.navigator,
        i = n && n.MediaStreamTrack;
    if (t.getUserMedia = function(s, r, a) {
            Ki("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), t.mediaDevices.getUserMedia(s).then(r, a)
        }, !(e.version > 55 && "autoGainControl" in t.mediaDevices.getSupportedConstraints())) {
        const s = function(a, o, c) {
                o in a && !(c in a) && (a[c] = a[o], delete a[o])
            },
            r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        if (t.mediaDevices.getUserMedia = function(a) {
                return typeof a == "object" && typeof a.audio == "object" && (a = JSON.parse(JSON.stringify(a)), s(a.audio, "autoGainControl", "mozAutoGainControl"), s(a.audio, "noiseSuppression", "mozNoiseSuppression")), r(a)
            }, i && i.prototype.getSettings) {
            const a = i.prototype.getSettings;
            i.prototype.getSettings = function() {
                const o = a.apply(this, arguments);
                return s(o, "mozAutoGainControl", "autoGainControl"), s(o, "mozNoiseSuppression", "noiseSuppression"), o
            }
        }
        if (i && i.prototype.applyConstraints) {
            const a = i.prototype.applyConstraints;
            i.prototype.applyConstraints = function(o) {
                return this.kind === "audio" && typeof o == "object" && (o = JSON.parse(JSON.stringify(o)), s(o, "autoGainControl", "mozAutoGainControl"), s(o, "noiseSuppression", "mozNoiseSuppression")), a.apply(this, [o])
            }
        }
    }
}

function _o(n, e) {
    n.navigator.mediaDevices && "getDisplayMedia" in n.navigator.mediaDevices || n.navigator.mediaDevices && (n.navigator.mediaDevices.getDisplayMedia = function(i) {
        if (!(i && i.video)) {
            const s = new DOMException("getDisplayMedia without video constraints is undefined");
            return s.name = "NotFoundError", s.code = 8, Promise.reject(s)
        }
        return i.video === !0 ? i.video = {
            mediaSource: e
        } : i.video.mediaSource = e, n.navigator.mediaDevices.getUserMedia(i)
    })
}

function ir(n) {
    typeof n == "object" && n.RTCTrackEvent && "receiver" in n.RTCTrackEvent.prototype && !("transceiver" in n.RTCTrackEvent.prototype) && Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
        get() {
            return {
                receiver: this.receiver
            }
        }
    })
}

function bi(n, e) {
    if (typeof n != "object" || !(n.RTCPeerConnection || n.mozRTCPeerConnection)) return;
    !n.RTCPeerConnection && n.mozRTCPeerConnection && (n.RTCPeerConnection = n.mozRTCPeerConnection), e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(s) {
        const r = n.RTCPeerConnection.prototype[s],
            a = {
                [s]() {
                    return arguments[0] = new(s === "addIceCandidate" ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                }
            };
        n.RTCPeerConnection.prototype[s] = a[s]
    });
    const t = {
            inboundrtp: "inbound-rtp",
            outboundrtp: "outbound-rtp",
            candidatepair: "candidate-pair",
            localcandidate: "local-candidate",
            remotecandidate: "remote-candidate"
        },
        i = n.RTCPeerConnection.prototype.getStats;
    n.RTCPeerConnection.prototype.getStats = function() {
        const [r, a, o] = arguments;
        return i.apply(this, [r || null]).then(c => {
            if (e.version < 53 && !a) try {
                c.forEach(d => {
                    d.type = t[d.type] || d.type
                })
            } catch (d) {
                if (d.name !== "TypeError") throw d;
                c.forEach((l, u) => {
                    c.set(u, Object.assign({}, l, {
                        type: t[l.type] || l.type
                    }))
                })
            }
            return c
        }).then(a, o)
    }
}

function nr(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) || n.RTCRtpSender && "getStats" in n.RTCRtpSender.prototype) return;
    const e = n.RTCPeerConnection.prototype.getSenders;
    e && (n.RTCPeerConnection.prototype.getSenders = function() {
        const s = e.apply(this, []);
        return s.forEach(r => r._pc = this), s
    });
    const t = n.RTCPeerConnection.prototype.addTrack;
    t && (n.RTCPeerConnection.prototype.addTrack = function() {
        const s = t.apply(this, arguments);
        return s._pc = this, s
    }), n.RTCRtpSender.prototype.getStats = function() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
    }
}

function sr(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) || n.RTCRtpSender && "getStats" in n.RTCRtpReceiver.prototype) return;
    const e = n.RTCPeerConnection.prototype.getReceivers;
    e && (n.RTCPeerConnection.prototype.getReceivers = function() {
        const i = e.apply(this, []);
        return i.forEach(s => s._pc = this), i
    }), Ue(n, "track", t => (t.receiver._pc = t.srcElement, t)), n.RTCRtpReceiver.prototype.getStats = function() {
        return this._pc.getStats(this.track)
    }
}

function rr(n) {
    !n.RTCPeerConnection || "removeStream" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.removeStream = function(t) {
        Ki("removeStream", "removeTrack"), this.getSenders().forEach(i => {
            i.track && t.getTracks().includes(i.track) && this.removeTrack(i)
        })
    })
}

function ar(n) {
    n.DataChannel && !n.RTCDataChannel && (n.RTCDataChannel = n.DataChannel)
}

function or(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection)) return;
    const e = n.RTCPeerConnection.prototype.addTransceiver;
    e && (n.RTCPeerConnection.prototype.addTransceiver = function() {
        this.setParametersPromises = [];
        let i = arguments[1] && arguments[1].sendEncodings;
        i === void 0 && (i = []), i = [...i];
        const s = i.length > 0;
        s && i.forEach(a => {
            if ("rid" in a && !/^[a-z0-9]{0,16}$/i.test(a.rid)) throw new TypeError("Invalid RID value provided.");
            if ("scaleResolutionDownBy" in a && !(parseFloat(a.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate" in a && !(parseFloat(a.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0")
        });
        const r = e.apply(this, arguments);
        if (s) {
            const {
                sender: a
            } = r, o = a.getParameters();
            (!("encodings" in o) || o.encodings.length === 1 && Object.keys(o.encodings[0]).length === 0) && (o.encodings = i, a.sendEncodings = i, this.setParametersPromises.push(a.setParameters(o).then(() => {
                delete a.sendEncodings
            }).catch(() => {
                delete a.sendEncodings
            })))
        }
        return r
    })
}

function cr(n) {
    if (!(typeof n == "object" && n.RTCRtpSender)) return;
    const e = n.RTCRtpSender.prototype.getParameters;
    e && (n.RTCRtpSender.prototype.getParameters = function() {
        const i = e.apply(this, arguments);
        return "encodings" in i || (i.encodings = [].concat(this.sendEncodings || [{}])), i
    })
}

function dr(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection)) return;
    const e = n.RTCPeerConnection.prototype.createOffer;
    n.RTCPeerConnection.prototype.createOffer = function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
            this.setParametersPromises = []
        }) : e.apply(this, arguments)
    }
}

function lr(n) {
    if (!(typeof n == "object" && n.RTCPeerConnection)) return;
    const e = n.RTCPeerConnection.prototype.createAnswer;
    n.RTCPeerConnection.prototype.createAnswer = function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
            this.setParametersPromises = []
        }) : e.apply(this, arguments)
    }
}
var Sn = Object.freeze({
    __proto__: null,
    shimAddTransceiver: or,
    shimCreateAnswer: lr,
    shimCreateOffer: dr,
    shimGetDisplayMedia: _o,
    shimGetParameters: cr,
    shimGetUserMedia: tr,
    shimOnTrack: ir,
    shimPeerConnection: bi,
    shimRTCDataChannel: ar,
    shimReceiverGetStats: sr,
    shimRemoveStream: rr,
    shimSenderGetStats: nr
});

function ur(n) {
    if (!(typeof n != "object" || !n.RTCPeerConnection)) {
        if ("getLocalStreams" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.getLocalStreams = function() {
                return this._localStreams || (this._localStreams = []), this._localStreams
            }), !("addStream" in n.RTCPeerConnection.prototype)) {
            const e = n.RTCPeerConnection.prototype.addTrack;
            n.RTCPeerConnection.prototype.addStream = function(i) {
                this._localStreams || (this._localStreams = []), this._localStreams.includes(i) || this._localStreams.push(i), i.getAudioTracks().forEach(s => e.call(this, s, i)), i.getVideoTracks().forEach(s => e.call(this, s, i))
            }, n.RTCPeerConnection.prototype.addTrack = function(i) {
                for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++) r[a - 1] = arguments[a];
                return r && r.forEach(o => {
                    this._localStreams ? this._localStreams.includes(o) || this._localStreams.push(o) : this._localStreams = [o]
                }), e.apply(this, arguments)
            }
        }
        "removeStream" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.removeStream = function(t) {
            this._localStreams || (this._localStreams = []);
            const i = this._localStreams.indexOf(t);
            if (i === -1) return;
            this._localStreams.splice(i, 1);
            const s = t.getTracks();
            this.getSenders().forEach(r => {
                s.includes(r.track) && this.removeTrack(r)
            })
        })
    }
}

function hr(n) {
    if (!(typeof n != "object" || !n.RTCPeerConnection) && ("getRemoteStreams" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.getRemoteStreams = function() {
            return this._remoteStreams ? this._remoteStreams : []
        }), !("onaddstream" in n.RTCPeerConnection.prototype))) {
        Object.defineProperty(n.RTCPeerConnection.prototype, "onaddstream", {
            get() {
                return this._onaddstream
            },
            set(t) {
                this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = t), this.addEventListener("track", this._onaddstreampoly = i => {
                    i.streams.forEach(s => {
                        if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(s)) return;
                        this._remoteStreams.push(s);
                        const r = new Event("addstream");
                        r.stream = s, this.dispatchEvent(r)
                    })
                })
            }
        });
        const e = n.RTCPeerConnection.prototype.setRemoteDescription;
        n.RTCPeerConnection.prototype.setRemoteDescription = function() {
            const i = this;
            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(s) {
                s.streams.forEach(r => {
                    if (i._remoteStreams || (i._remoteStreams = []), i._remoteStreams.indexOf(r) >= 0) return;
                    i._remoteStreams.push(r);
                    const a = new Event("addstream");
                    a.stream = r, i.dispatchEvent(a)
                })
            }), e.apply(i, arguments)
        }
    }
}

function pr(n) {
    if (typeof n != "object" || !n.RTCPeerConnection) return;
    const e = n.RTCPeerConnection.prototype,
        t = e.createOffer,
        i = e.createAnswer,
        s = e.setLocalDescription,
        r = e.setRemoteDescription,
        a = e.addIceCandidate;
    e.createOffer = function(d, l) {
        const u = arguments.length >= 2 ? arguments[2] : arguments[0],
            h = t.apply(this, [u]);
        return l ? (h.then(d, l), Promise.resolve()) : h
    }, e.createAnswer = function(d, l) {
        const u = arguments.length >= 2 ? arguments[2] : arguments[0],
            h = i.apply(this, [u]);
        return l ? (h.then(d, l), Promise.resolve()) : h
    };
    let o = function(c, d, l) {
        const u = s.apply(this, [c]);
        return l ? (u.then(d, l), Promise.resolve()) : u
    };
    e.setLocalDescription = o, o = function(c, d, l) {
        const u = r.apply(this, [c]);
        return l ? (u.then(d, l), Promise.resolve()) : u
    }, e.setRemoteDescription = o, o = function(c, d, l) {
        const u = a.apply(this, [c]);
        return l ? (u.then(d, l), Promise.resolve()) : u
    }, e.addIceCandidate = o
}

function mr(n) {
    const e = n && n.navigator;
    if (e.mediaDevices && e.mediaDevices.getUserMedia) {
        const t = e.mediaDevices,
            i = t.getUserMedia.bind(t);
        e.mediaDevices.getUserMedia = s => i(fr(s))
    }!e.getUserMedia && e.mediaDevices && e.mediaDevices.getUserMedia && (e.getUserMedia = (function(i, s, r) {
        e.mediaDevices.getUserMedia(i).then(s, r)
    }).bind(e))
}

function fr(n) {
    return n && n.video !== void 0 ? Object.assign({}, n, {
        video: Hs(n.video)
    }) : n
}

function gr(n) {
    if (!n.RTCPeerConnection) return;
    const e = n.RTCPeerConnection;
    n.RTCPeerConnection = function(i, s) {
        if (i && i.iceServers) {
            const r = [];
            for (let a = 0; a < i.iceServers.length; a++) {
                let o = i.iceServers[a];
                o.urls === void 0 && o.url ? (Ki("RTCIceServer.url", "RTCIceServer.urls"), o = JSON.parse(JSON.stringify(o)), o.urls = o.url, delete o.url, r.push(o)) : r.push(i.iceServers[a])
            }
            i.iceServers = r
        }
        return new e(i, s)
    }, n.RTCPeerConnection.prototype = e.prototype, "generateCertificate" in e && Object.defineProperty(n.RTCPeerConnection, "generateCertificate", {
        get() {
            return e.generateCertificate
        }
    })
}

function vr(n) {
    typeof n == "object" && n.RTCTrackEvent && "receiver" in n.RTCTrackEvent.prototype && !("transceiver" in n.RTCTrackEvent.prototype) && Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
        get() {
            return {
                receiver: this.receiver
            }
        }
    })
}

function br(n) {
    const e = n.RTCPeerConnection.prototype.createOffer;
    n.RTCPeerConnection.prototype.createOffer = function(i) {
        if (i) {
            typeof i.offerToReceiveAudio < "u" && (i.offerToReceiveAudio = !!i.offerToReceiveAudio);
            const s = this.getTransceivers().find(a => a.receiver.track.kind === "audio");
            i.offerToReceiveAudio === !1 && s ? s.direction === "sendrecv" ? s.setDirection ? s.setDirection("sendonly") : s.direction = "sendonly" : s.direction === "recvonly" && (s.setDirection ? s.setDirection("inactive") : s.direction = "inactive") : i.offerToReceiveAudio === !0 && !s && this.addTransceiver("audio", {
                direction: "recvonly"
            }), typeof i.offerToReceiveVideo < "u" && (i.offerToReceiveVideo = !!i.offerToReceiveVideo);
            const r = this.getTransceivers().find(a => a.receiver.track.kind === "video");
            i.offerToReceiveVideo === !1 && r ? r.direction === "sendrecv" ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : r.direction === "recvonly" && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : i.offerToReceiveVideo === !0 && !r && this.addTransceiver("video", {
                direction: "recvonly"
            })
        }
        return e.apply(this, arguments)
    }
}

function kr(n) {
    typeof n != "object" || n.AudioContext || (n.AudioContext = n.webkitAudioContext)
}
var Pn = Object.freeze({
        __proto__: null,
        shimAudioContext: kr,
        shimCallbacksAPI: pr,
        shimConstraints: fr,
        shimCreateOfferLegacy: br,
        shimGetUserMedia: mr,
        shimLocalStreamsAPI: ur,
        shimRTCIceServerUrls: gr,
        shimRemoteStreamsAPI: hr,
        shimTrackEventTransceiver: vr
    }),
    Yt = {
        exports: {}
    },
    En;

function wo() {
    return En || (En = 1, function(n) {
        const e = {};
        e.generateIdentifier = function() {
            return Math.random().toString(36).substring(2, 12)
        }, e.localCName = e.generateIdentifier(), e.splitLines = function(t) {
            return t.trim().split(`
`).map(i => i.trim())
        }, e.splitSections = function(t) {
            return t.split(`
m=`).map((s, r) => (r > 0 ? "m=" + s : s).trim() + `\r
`)
        }, e.getDescription = function(t) {
            const i = e.splitSections(t);
            return i && i[0]
        }, e.getMediaSections = function(t) {
            const i = e.splitSections(t);
            return i.shift(), i
        }, e.matchPrefix = function(t, i) {
            return e.splitLines(t).filter(s => s.indexOf(i) === 0)
        }, e.parseCandidate = function(t) {
            let i;
            t.indexOf("a=candidate:") === 0 ? i = t.substring(12).split(" ") : i = t.substring(10).split(" ");
            const s = {
                foundation: i[0],
                component: {
                    1: "rtp",
                    2: "rtcp"
                }[i[1]] || i[1],
                protocol: i[2].toLowerCase(),
                priority: parseInt(i[3], 10),
                ip: i[4],
                address: i[4],
                port: parseInt(i[5], 10),
                type: i[7]
            };
            for (let r = 8; r < i.length; r += 2) switch (i[r]) {
                case "raddr":
                    s.relatedAddress = i[r + 1];
                    break;
                case "rport":
                    s.relatedPort = parseInt(i[r + 1], 10);
                    break;
                case "tcptype":
                    s.tcpType = i[r + 1];
                    break;
                case "ufrag":
                    s.ufrag = i[r + 1], s.usernameFragment = i[r + 1];
                    break;
                default:
                    s[i[r]] === void 0 && (s[i[r]] = i[r + 1]);
                    break
            }
            return s
        }, e.writeCandidate = function(t) {
            const i = [];
            i.push(t.foundation);
            const s = t.component;
            s === "rtp" ? i.push(1) : s === "rtcp" ? i.push(2) : i.push(s), i.push(t.protocol.toUpperCase()), i.push(t.priority), i.push(t.address || t.ip), i.push(t.port);
            const r = t.type;
            return i.push("typ"), i.push(r), r !== "host" && t.relatedAddress && t.relatedPort && (i.push("raddr"), i.push(t.relatedAddress), i.push("rport"), i.push(t.relatedPort)), t.tcpType && t.protocol.toLowerCase() === "tcp" && (i.push("tcptype"), i.push(t.tcpType)), (t.usernameFragment || t.ufrag) && (i.push("ufrag"), i.push(t.usernameFragment || t.ufrag)), "candidate:" + i.join(" ")
        }, e.parseIceOptions = function(t) {
            return t.substring(14).split(" ")
        }, e.parseRtpMap = function(t) {
            let i = t.substring(9).split(" ");
            const s = {
                payloadType: parseInt(i.shift(), 10)
            };
            return i = i[0].split("/"), s.name = i[0], s.clockRate = parseInt(i[1], 10), s.channels = i.length === 3 ? parseInt(i[2], 10) : 1, s.numChannels = s.channels, s
        }, e.writeRtpMap = function(t) {
            let i = t.payloadType;
            t.preferredPayloadType !== void 0 && (i = t.preferredPayloadType);
            const s = t.channels || t.numChannels || 1;
            return "a=rtpmap:" + i + " " + t.name + "/" + t.clockRate + (s !== 1 ? "/" + s : "") + `\r
`
        }, e.parseExtmap = function(t) {
            const i = t.substring(9).split(" ");
            return {
                id: parseInt(i[0], 10),
                direction: i[0].indexOf("/") > 0 ? i[0].split("/")[1] : "sendrecv",
                uri: i[1],
                attributes: i.slice(2).join(" ")
            }
        }, e.writeExtmap = function(t) {
            return "a=extmap:" + (t.id || t.preferredId) + (t.direction && t.direction !== "sendrecv" ? "/" + t.direction : "") + " " + t.uri + (t.attributes ? " " + t.attributes : "") + `\r
`
        }, e.parseFmtp = function(t) {
            const i = {};
            let s;
            const r = t.substring(t.indexOf(" ") + 1).split(";");
            for (let a = 0; a < r.length; a++) s = r[a].trim().split("="), i[s[0].trim()] = s[1];
            return i
        }, e.writeFmtp = function(t) {
            let i = "",
                s = t.payloadType;
            if (t.preferredPayloadType !== void 0 && (s = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
                const r = [];
                Object.keys(t.parameters).forEach(a => {
                    t.parameters[a] !== void 0 ? r.push(a + "=" + t.parameters[a]) : r.push(a)
                }), i += "a=fmtp:" + s + " " + r.join(";") + `\r
`
            }
            return i
        }, e.parseRtcpFb = function(t) {
            const i = t.substring(t.indexOf(" ") + 1).split(" ");
            return {
                type: i.shift(),
                parameter: i.join(" ")
            }
        }, e.writeRtcpFb = function(t) {
            let i = "",
                s = t.payloadType;
            return t.preferredPayloadType !== void 0 && (s = t.preferredPayloadType), t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach(r => {
                i += "a=rtcp-fb:" + s + " " + r.type + (r.parameter && r.parameter.length ? " " + r.parameter : "") + `\r
`
            }), i
        }, e.parseSsrcMedia = function(t) {
            const i = t.indexOf(" "),
                s = {
                    ssrc: parseInt(t.substring(7, i), 10)
                },
                r = t.indexOf(":", i);
            return r > -1 ? (s.attribute = t.substring(i + 1, r), s.value = t.substring(r + 1)) : s.attribute = t.substring(i + 1), s
        }, e.parseSsrcGroup = function(t) {
            const i = t.substring(13).split(" ");
            return {
                semantics: i.shift(),
                ssrcs: i.map(s => parseInt(s, 10))
            }
        }, e.getMid = function(t) {
            const i = e.matchPrefix(t, "a=mid:")[0];
            if (i) return i.substring(6)
        }, e.parseFingerprint = function(t) {
            const i = t.substring(14).split(" ");
            return {
                algorithm: i[0].toLowerCase(),
                value: i[1].toUpperCase()
            }
        }, e.getDtlsParameters = function(t, i) {
            return {
                role: "auto",
                fingerprints: e.matchPrefix(t + i, "a=fingerprint:").map(e.parseFingerprint)
            }
        }, e.writeDtlsParameters = function(t, i) {
            let s = "a=setup:" + i + `\r
`;
            return t.fingerprints.forEach(r => {
                s += "a=fingerprint:" + r.algorithm + " " + r.value + `\r
`
            }), s
        }, e.parseCryptoLine = function(t) {
            const i = t.substring(9).split(" ");
            return {
                tag: parseInt(i[0], 10),
                cryptoSuite: i[1],
                keyParams: i[2],
                sessionParams: i.slice(3)
            }
        }, e.writeCryptoLine = function(t) {
            return "a=crypto:" + t.tag + " " + t.cryptoSuite + " " + (typeof t.keyParams == "object" ? e.writeCryptoKeyParams(t.keyParams) : t.keyParams) + (t.sessionParams ? " " + t.sessionParams.join(" ") : "") + `\r
`
        }, e.parseCryptoKeyParams = function(t) {
            if (t.indexOf("inline:") !== 0) return null;
            const i = t.substring(7).split("|");
            return {
                keyMethod: "inline",
                keySalt: i[0],
                lifeTime: i[1],
                mkiValue: i[2] ? i[2].split(":")[0] : void 0,
                mkiLength: i[2] ? i[2].split(":")[1] : void 0
            }
        }, e.writeCryptoKeyParams = function(t) {
            return t.keyMethod + ":" + t.keySalt + (t.lifeTime ? "|" + t.lifeTime : "") + (t.mkiValue && t.mkiLength ? "|" + t.mkiValue + ":" + t.mkiLength : "")
        }, e.getCryptoParameters = function(t, i) {
            return e.matchPrefix(t + i, "a=crypto:").map(e.parseCryptoLine)
        }, e.getIceParameters = function(t, i) {
            const s = e.matchPrefix(t + i, "a=ice-ufrag:")[0],
                r = e.matchPrefix(t + i, "a=ice-pwd:")[0];
            return s && r ? {
                usernameFragment: s.substring(12),
                password: r.substring(10)
            } : null
        }, e.writeIceParameters = function(t) {
            let i = "a=ice-ufrag:" + t.usernameFragment + `\r
a=ice-pwd:` + t.password + `\r
`;
            return t.iceLite && (i += `a=ice-lite\r
`), i
        }, e.parseRtpParameters = function(t) {
            const i = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: [],
                    rtcp: []
                },
                r = e.splitLines(t)[0].split(" ");
            i.profile = r[2];
            for (let o = 3; o < r.length; o++) {
                const c = r[o],
                    d = e.matchPrefix(t, "a=rtpmap:" + c + " ")[0];
                if (d) {
                    const l = e.parseRtpMap(d),
                        u = e.matchPrefix(t, "a=fmtp:" + c + " ");
                    switch (l.parameters = u.length ? e.parseFmtp(u[0]) : {}, l.rtcpFeedback = e.matchPrefix(t, "a=rtcp-fb:" + c + " ").map(e.parseRtcpFb), i.codecs.push(l), l.name.toUpperCase()) {
                        case "RED":
                        case "ULPFEC":
                            i.fecMechanisms.push(l.name.toUpperCase());
                            break
                    }
                }
            }
            e.matchPrefix(t, "a=extmap:").forEach(o => {
                i.headerExtensions.push(e.parseExtmap(o))
            });
            const a = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
            return i.codecs.forEach(o => {
                a.forEach(c => {
                    o.rtcpFeedback.find(l => l.type === c.type && l.parameter === c.parameter) || o.rtcpFeedback.push(c)
                })
            }), i
        }, e.writeRtpDescription = function(t, i) {
            let s = "";
            s += "m=" + t + " ", s += i.codecs.length > 0 ? "9" : "0", s += " " + (i.profile || "UDP/TLS/RTP/SAVPF") + " ", s += i.codecs.map(a => a.preferredPayloadType !== void 0 ? a.preferredPayloadType : a.payloadType).join(" ") + `\r
`, s += `c=IN IP4 0.0.0.0\r
`, s += `a=rtcp:9 IN IP4 0.0.0.0\r
`, i.codecs.forEach(a => {
                s += e.writeRtpMap(a), s += e.writeFmtp(a), s += e.writeRtcpFb(a)
            });
            let r = 0;
            return i.codecs.forEach(a => {
                a.maxptime > r && (r = a.maxptime)
            }), r > 0 && (s += "a=maxptime:" + r + `\r
`), i.headerExtensions && i.headerExtensions.forEach(a => {
                s += e.writeExtmap(a)
            }), s
        }, e.parseRtpEncodingParameters = function(t) {
            const i = [],
                s = e.parseRtpParameters(t),
                r = s.fecMechanisms.indexOf("RED") !== -1,
                a = s.fecMechanisms.indexOf("ULPFEC") !== -1,
                o = e.matchPrefix(t, "a=ssrc:").map(h => e.parseSsrcMedia(h)).filter(h => h.attribute === "cname"),
                c = o.length > 0 && o[0].ssrc;
            let d;
            const l = e.matchPrefix(t, "a=ssrc-group:FID").map(h => h.substring(17).split(" ").map(k => parseInt(k, 10)));
            l.length > 0 && l[0].length > 1 && l[0][0] === c && (d = l[0][1]), s.codecs.forEach(h => {
                if (h.name.toUpperCase() === "RTX" && h.parameters.apt) {
                    let m = {
                        ssrc: c,
                        codecPayloadType: parseInt(h.parameters.apt, 10)
                    };
                    c && d && (m.rtx = {
                        ssrc: d
                    }), i.push(m), r && (m = JSON.parse(JSON.stringify(m)), m.fec = {
                        ssrc: c,
                        mechanism: a ? "red+ulpfec" : "red"
                    }, i.push(m))
                }
            }), i.length === 0 && c && i.push({
                ssrc: c
            });
            let u = e.matchPrefix(t, "b=");
            return u.length && (u[0].indexOf("b=TIAS:") === 0 ? u = parseInt(u[0].substring(7), 10) : u[0].indexOf("b=AS:") === 0 ? u = parseInt(u[0].substring(5), 10) * 1e3 * .95 - 50 * 40 * 8 : u = void 0, i.forEach(h => {
                h.maxBitrate = u
            })), i
        }, e.parseRtcpParameters = function(t) {
            const i = {},
                s = e.matchPrefix(t, "a=ssrc:").map(o => e.parseSsrcMedia(o)).filter(o => o.attribute === "cname")[0];
            s && (i.cname = s.value, i.ssrc = s.ssrc);
            const r = e.matchPrefix(t, "a=rtcp-rsize");
            i.reducedSize = r.length > 0, i.compound = r.length === 0;
            const a = e.matchPrefix(t, "a=rtcp-mux");
            return i.mux = a.length > 0, i
        }, e.writeRtcpParameters = function(t) {
            let i = "";
            return t.reducedSize && (i += `a=rtcp-rsize\r
`), t.mux && (i += `a=rtcp-mux\r
`), t.ssrc !== void 0 && t.cname && (i += "a=ssrc:" + t.ssrc + " cname:" + t.cname + `\r
`), i
        }, e.parseMsid = function(t) {
            let i;
            const s = e.matchPrefix(t, "a=msid:");
            if (s.length === 1) return i = s[0].substring(7).split(" "), {
                stream: i[0],
                track: i[1]
            };
            const r = e.matchPrefix(t, "a=ssrc:").map(a => e.parseSsrcMedia(a)).filter(a => a.attribute === "msid");
            if (r.length > 0) return i = r[0].value.split(" "), {
                stream: i[0],
                track: i[1]
            }
        }, e.parseSctpDescription = function(t) {
            const i = e.parseMLine(t),
                s = e.matchPrefix(t, "a=max-message-size:");
            let r;
            s.length > 0 && (r = parseInt(s[0].substring(19), 10)), isNaN(r) && (r = 65536);
            const a = e.matchPrefix(t, "a=sctp-port:");
            if (a.length > 0) return {
                port: parseInt(a[0].substring(12), 10),
                protocol: i.fmt,
                maxMessageSize: r
            };
            const o = e.matchPrefix(t, "a=sctpmap:");
            if (o.length > 0) {
                const c = o[0].substring(10).split(" ");
                return {
                    port: parseInt(c[0], 10),
                    protocol: c[1],
                    maxMessageSize: r
                }
            }
        }, e.writeSctpDescription = function(t, i) {
            let s = [];
            return t.protocol !== "DTLS/SCTP" ? s = ["m=" + t.kind + " 9 " + t.protocol + " " + i.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + i.port + `\r
`] : s = ["m=" + t.kind + " 9 " + t.protocol + " " + i.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + i.port + " " + i.protocol + ` 65535\r
`], i.maxMessageSize !== void 0 && s.push("a=max-message-size:" + i.maxMessageSize + `\r
`), s.join("")
        }, e.generateSessionId = function() {
            return Math.random().toString().substr(2, 22)
        }, e.writeSessionBoilerplate = function(t, i, s) {
            let r;
            const a = i !== void 0 ? i : 2;
            return t ? r = t : r = e.generateSessionId(), `v=0\r
o=` + (s || "thisisadapterortc") + " " + r + " " + a + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
        }, e.getDirection = function(t, i) {
            const s = e.splitLines(t);
            for (let r = 0; r < s.length; r++) switch (s[r]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                    return s[r].substring(2)
            }
            return i ? e.getDirection(i) : "sendrecv"
        }, e.getKind = function(t) {
            return e.splitLines(t)[0].split(" ")[0].substring(2)
        }, e.isRejected = function(t) {
            return t.split(" ", 2)[1] === "0"
        }, e.parseMLine = function(t) {
            const s = e.splitLines(t)[0].substring(2).split(" ");
            return {
                kind: s[0],
                port: parseInt(s[1], 10),
                protocol: s[2],
                fmt: s.slice(3).join(" ")
            }
        }, e.parseOLine = function(t) {
            const s = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
            return {
                username: s[0],
                sessionId: s[1],
                sessionVersion: parseInt(s[2], 10),
                netType: s[3],
                addressType: s[4],
                address: s[5]
            }
        }, e.isValidSDP = function(t) {
            if (typeof t != "string" || t.length === 0) return !1;
            const i = e.splitLines(t);
            for (let s = 0; s < i.length; s++)
                if (i[s].length < 2 || i[s].charAt(1) !== "=") return !1;
            return !0
        }, n.exports = e
    }(Yt)), Yt.exports
}
var yr = wo(),
    ze = vo(yr),
    Io = Kr({
        __proto__: null,
        default: ze
    }, [yr]);

function Rt(n) {
    if (!n.RTCIceCandidate || n.RTCIceCandidate && "foundation" in n.RTCIceCandidate.prototype) return;
    const e = n.RTCIceCandidate;
    n.RTCIceCandidate = function(i) {
        if (typeof i == "object" && i.candidate && i.candidate.indexOf("a=") === 0 && (i = JSON.parse(JSON.stringify(i)), i.candidate = i.candidate.substring(2)), i.candidate && i.candidate.length) {
            const s = new e(i),
                r = ze.parseCandidate(i.candidate);
            for (const a in r) a in s || Object.defineProperty(s, a, {
                value: r[a]
            });
            return s.toJSON = function() {
                return {
                    candidate: s.candidate,
                    sdpMid: s.sdpMid,
                    sdpMLineIndex: s.sdpMLineIndex,
                    usernameFragment: s.usernameFragment
                }
            }, s
        }
        return new e(i)
    }, n.RTCIceCandidate.prototype = e.prototype, Ue(n, "icecandidate", t => (t.candidate && Object.defineProperty(t, "candidate", {
        value: new n.RTCIceCandidate(t.candidate),
        writable: "false"
    }), t))
}

function ki(n) {
    !n.RTCIceCandidate || n.RTCIceCandidate && "relayProtocol" in n.RTCIceCandidate.prototype || Ue(n, "icecandidate", e => {
        if (e.candidate) {
            const t = ze.parseCandidate(e.candidate.candidate);
            t.type === "relay" && (e.candidate.relayProtocol = {
                0: "tls",
                1: "tcp",
                2: "udp"
            }[t.priority >> 24])
        }
        return e
    })
}

function _t(n, e) {
    if (!n.RTCPeerConnection) return;
    "sctp" in n.RTCPeerConnection.prototype || Object.defineProperty(n.RTCPeerConnection.prototype, "sctp", {
        get() {
            return typeof this._sctp > "u" ? null : this._sctp
        }
    });
    const t = function(o) {
            if (!o || !o.sdp) return !1;
            const c = ze.splitSections(o.sdp);
            return c.shift(), c.some(d => {
                const l = ze.parseMLine(d);
                return l && l.kind === "application" && l.protocol.indexOf("SCTP") !== -1
            })
        },
        i = function(o) {
            const c = o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (c === null || c.length < 2) return -1;
            const d = parseInt(c[1], 10);
            return d !== d ? -1 : d
        },
        s = function(o) {
            let c = 65536;
            return e.browser === "firefox" && (e.version < 57 ? o === -1 ? c = 16384 : c = 2147483637 : e.version < 60 ? c = e.version === 57 ? 65535 : 65536 : c = 2147483637), c
        },
        r = function(o, c) {
            let d = 65536;
            e.browser === "firefox" && e.version === 57 && (d = 65535);
            const l = ze.matchPrefix(o.sdp, "a=max-message-size:");
            return l.length > 0 ? d = parseInt(l[0].substring(19), 10) : e.browser === "firefox" && c !== -1 && (d = 2147483637), d
        },
        a = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function() {
        if (this._sctp = null, e.browser === "chrome" && e.version >= 76) {
            const {
                sdpSemantics: c
            } = this.getConfiguration();
            c === "plan-b" && Object.defineProperty(this, "sctp", {
                get() {
                    return typeof this._sctp > "u" ? null : this._sctp
                },
                enumerable: !0,
                configurable: !0
            })
        }
        if (t(arguments[0])) {
            const c = i(arguments[0]),
                d = s(c),
                l = r(arguments[0], c);
            let u;
            d === 0 && l === 0 ? u = Number.POSITIVE_INFINITY : d === 0 || l === 0 ? u = Math.max(d, l) : u = Math.min(d, l);
            const h = {};
            Object.defineProperty(h, "maxMessageSize", {
                get() {
                    return u
                }
            }), this._sctp = h
        }
        return a.apply(this, arguments)
    }
}

function wt(n) {
    if (!(n.RTCPeerConnection && "createDataChannel" in n.RTCPeerConnection.prototype)) return;

    function e(i, s) {
        const r = i.send;
        i.send = function() {
            const o = arguments[0],
                c = o.length || o.size || o.byteLength;
            if (i.readyState === "open" && s.sctp && c > s.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + s.sctp.maxMessageSize + " bytes)");
            return r.apply(i, arguments)
        }
    }
    const t = n.RTCPeerConnection.prototype.createDataChannel;
    n.RTCPeerConnection.prototype.createDataChannel = function() {
        const s = t.apply(this, arguments);
        return e(s, this), s
    }, Ue(n, "datachannel", i => (e(i.channel, i.target), i))
}

function yi(n) {
    if (!n.RTCPeerConnection || "connectionState" in n.RTCPeerConnection.prototype) return;
    const e = n.RTCPeerConnection.prototype;
    Object.defineProperty(e, "connectionState", {
        get() {
            return {
                completed: "connected",
                checking: "connecting"
            }[this.iceConnectionState] || this.iceConnectionState
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "onconnectionstatechange", {
        get() {
            return this._onconnectionstatechange || null
        },
        set(t) {
            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), t && this.addEventListener("connectionstatechange", this._onconnectionstatechange = t)
        },
        enumerable: !0,
        configurable: !0
    }), ["setLocalDescription", "setRemoteDescription"].forEach(t => {
        const i = e[t];
        e[t] = function() {
            return this._connectionstatechangepoly || (this._connectionstatechangepoly = s => {
                const r = s.target;
                if (r._lastConnectionState !== r.connectionState) {
                    r._lastConnectionState = r.connectionState;
                    const a = new Event("connectionstatechange", s);
                    r.dispatchEvent(a)
                }
                return s
            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), i.apply(this, arguments)
        }
    })
}

function Ti(n, e) {
    if (!n.RTCPeerConnection || e.browser === "chrome" && e.version >= 71 || e.browser === "safari" && e.version >= 605) return;
    const t = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function(s) {
        if (s && s.sdp && s.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
            const r = s.sdp.split(`
`).filter(a => a.trim() !== "a=extmap-allow-mixed").join(`
`);
            n.RTCSessionDescription && s instanceof n.RTCSessionDescription ? arguments[0] = new n.RTCSessionDescription({
                type: s.type,
                sdp: r
            }) : s.sdp = r
        }
        return t.apply(this, arguments)
    }
}

function It(n, e) {
    if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
    const t = n.RTCPeerConnection.prototype.addIceCandidate;
    !t || t.length === 0 || (n.RTCPeerConnection.prototype.addIceCandidate = function() {
        return arguments[0] ? (e.browser === "chrome" && e.version < 78 || e.browser === "firefox" && e.version < 68 || e.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
    })
}

function Ot(n, e) {
    if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
    const t = n.RTCPeerConnection.prototype.setLocalDescription;
    !t || t.length === 0 || (n.RTCPeerConnection.prototype.setLocalDescription = function() {
        let s = arguments[0] || {};
        if (typeof s != "object" || s.type && s.sdp) return t.apply(this, arguments);
        if (s = {
                type: s.type,
                sdp: s.sdp
            }, !s.type) switch (this.signalingState) {
            case "stable":
            case "have-local-offer":
            case "have-remote-pranswer":
                s.type = "offer";
                break;
            default:
                s.type = "answer";
                break
        }
        return s.sdp || s.type !== "offer" && s.type !== "answer" ? t.apply(this, [s]) : (s.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then(a => t.apply(this, [a]))
    })
}
var Oo = Object.freeze({
    __proto__: null,
    removeExtmapAllowMixed: Ti,
    shimAddIceCandidateNullOrEmpty: It,
    shimConnectionState: yi,
    shimMaxMessageSize: _t,
    shimParameterlessSetLocalDescription: Ot,
    shimRTCIceCandidate: Rt,
    shimRTCIceCandidateRelayProtocol: ki,
    shimSendThrowTypeError: wt
});

function Do() {
    let {
        window: n
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shimChrome: !0,
        shimFirefox: !0,
        shimSafari: !0
    };
    const t = Ws,
        i = Ro(n),
        s = {
            browserDetails: i,
            commonShim: Oo,
            extractVersion: Et,
            disableLog: Po,
            disableWarnings: Eo,
            sdp: Io
        };
    switch (i.browser) {
        case "chrome":
            if (!Cn || !vi || !e.shimChrome) return t("Chrome shim is not included in this adapter release."), s;
            if (i.version === null) return t("Chrome shim can not determine version, not shimming."), s;
            t("adapter.js shimming chrome."), s.browserShim = Cn, It(n, i), Ot(n), zs(n, i), Js(n), vi(n, i), Qs(n), Zs(n, i), Ys(n), Xs(n), er(n, i), Rt(n), ki(n), yi(n), _t(n, i), wt(n), Ti(n, i);
            break;
        case "firefox":
            if (!Sn || !bi || !e.shimFirefox) return t("Firefox shim is not included in this adapter release."), s;
            t("adapter.js shimming firefox."), s.browserShim = Sn, It(n, i), Ot(n), tr(n, i), bi(n, i), ir(n), rr(n), nr(n), sr(n), ar(n), or(n), cr(n), dr(n), lr(n), Rt(n), yi(n), _t(n, i), wt(n);
            break;
        case "safari":
            if (!Pn || !e.shimSafari) return t("Safari shim is not included in this adapter release."), s;
            t("adapter.js shimming safari."), s.browserShim = Pn, It(n, i), Ot(n), gr(n), br(n), pr(n), ur(n), hr(n), vr(n), mr(n), kr(n), Rt(n), ki(n), _t(n, i), wt(n), Ti(n, i);
            break;
        default:
            t("Unsupported browser!");
            break
    }
    return s
}
Do({
    window: typeof window > "u" ? void 0 : window
});
const Mo = 10,
    bt = "lk_e2ee",
    xo = "LKFrameEncryptionKey",
    No = {
        sharedKey: !1,
        ratchetSalt: xo,
        ratchetWindowSize: 8,
        failureTolerance: Mo,
        keyringSize: 16
    };
var Oe;
(function(n) {
    n.SetKey = "setKey", n.RatchetRequest = "ratchetRequest", n.KeyRatcheted = "keyRatcheted"
})(Oe || (Oe = {}));
var Rn;
(function(n) {
    n.KeyRatcheted = "keyRatcheted"
})(Rn || (Rn = {}));
var Ie;
(function(n) {
    n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", n.EncryptionError = "encryptionError"
})(Ie || (Ie = {}));
var _n;
(function(n) {
    n.Error = "cryptorError"
})(_n || (_n = {}));

function Ao() {
    return Lo() || Ci()
}

function Ci() {
    return typeof window.RTCRtpScriptTransform < "u"
}

function Lo() {
    return typeof window.RTCRtpSender < "u" && typeof window.RTCRtpSender.prototype.createEncodedStreams < "u"
}

function Uo(n) {
    return p(this, void 0, void 0, function*() {
        let e = new TextEncoder;
        return yield crypto.subtle.importKey("raw", e.encode(n), {
            name: "PBKDF2"
        }, !1, ["deriveBits", "deriveKey"])
    })
}

function Fo(n) {
    return p(this, void 0, void 0, function*() {
        return yield crypto.subtle.importKey("raw", n, "HKDF", !1, ["deriveBits", "deriveKey"])
    })
}
class jo extends be.EventEmitter {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        super(), this.onKeyRatcheted = (t, i) => {
            A.debug("key ratcheted event received", {
                material: t,
                keyIndex: i
            })
        }, this.keyInfoMap = new Map, this.options = Object.assign(Object.assign({}, No), e), this.on(Oe.KeyRatcheted, this.onKeyRatcheted)
    }
    onSetEncryptionKey(e, t, i) {
        const s = {
            key: e,
            participantIdentity: t,
            keyIndex: i
        };
        if (!this.options.sharedKey && !t) throw new Error("participant identity needs to be passed for encryption key if sharedKey option is false");
        this.keyInfoMap.set("".concat(t ? ? "shared", "-").concat(i ? ? 0), s), this.emit(Oe.SetKey, s)
    }
    getKeys() {
        return Array.from(this.keyInfoMap.values())
    }
    getOptions() {
        return this.options
    }
    ratchetKey(e, t) {
        this.emit(Oe.RatchetRequest, e, t)
    }
}
class dd extends jo {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const t = Object.assign(Object.assign({}, e), {
            sharedKey: !0,
            ratchetWindowSize: 0,
            failureTolerance: -1
        });
        super(t)
    }
    setKey(e) {
        return p(this, void 0, void 0, function*() {
            const t = typeof e == "string" ? yield Uo(e): yield Fo(e);
            this.onSetEncryptionKey(t)
        })
    }
}
class Fe extends Error {
    constructor(e, t) {
        super(t || "an error has occured"), this.code = e
    }
}
var te;
(function(n) {
    n[n.NotAllowed = 0] = "NotAllowed", n[n.ServerUnreachable = 1] = "ServerUnreachable", n[n.InternalError = 2] = "InternalError", n[n.Cancelled = 3] = "Cancelled", n[n.LeaveRequest = 4] = "LeaveRequest"
})(te || (te = {}));
class B extends Fe {
    constructor(e, t, i) {
        super(1, e), this.status = i, this.reason = t
    }
}
class Gi extends Fe {
    constructor(e) {
        super(21, e ? ? "device is unsupported")
    }
}
class ge extends Fe {
    constructor(e) {
        super(20, e ? ? "track is invalid")
    }
}
class Bo extends Fe {
    constructor(e) {
        super(10, e ? ? "unsupported server")
    }
}
class Q extends Fe {
    constructor(e) {
        super(12, e ? ? "unexpected connection state")
    }
}
class Si extends Fe {
    constructor(e) {
        super(13, e ? ? "unable to negotiate")
    }
}
class wn extends Fe {
    constructor(e, t) {
        super(15, e), this.reason = t
    }
}
var Ut;
(function(n) {
    n.PermissionDenied = "PermissionDenied", n.NotFound = "NotFound", n.DeviceInUse = "DeviceInUse", n.Other = "Other"
})(Ut || (Ut = {}));
(function(n) {
    function e(t) {
        if (t && "name" in t) return t.name === "NotFoundError" || t.name === "DevicesNotFoundError" ? n.NotFound : t.name === "NotAllowedError" || t.name === "PermissionDeniedError" ? n.PermissionDenied : t.name === "NotReadableError" || t.name === "TrackStartError" ? n.DeviceInUse : n.Other
    }
    n.getFailure = e
})(Ut || (Ut = {}));
var In;
(function(n) {
    n[n.InvalidKey = 0] = "InvalidKey", n[n.MissingKey = 1] = "MissingKey", n[n.InternalError = 2] = "InternalError"
})(In || (In = {}));
var P;
(function(n) {
    n.Connected = "connected", n.Reconnecting = "reconnecting", n.SignalReconnecting = "signalReconnecting", n.Reconnected = "reconnected", n.Disconnected = "disconnected", n.ConnectionStateChanged = "connectionStateChanged", n.MediaDevicesChanged = "mediaDevicesChanged", n.ParticipantConnected = "participantConnected", n.ParticipantDisconnected = "participantDisconnected", n.TrackPublished = "trackPublished", n.TrackSubscribed = "trackSubscribed", n.TrackSubscriptionFailed = "trackSubscriptionFailed", n.TrackUnpublished = "trackUnpublished", n.TrackUnsubscribed = "trackUnsubscribed", n.TrackMuted = "trackMuted", n.TrackUnmuted = "trackUnmuted", n.LocalTrackPublished = "localTrackPublished", n.LocalTrackUnpublished = "localTrackUnpublished", n.LocalAudioSilenceDetected = "localAudioSilenceDetected", n.ActiveSpeakersChanged = "activeSpeakersChanged", n.ParticipantMetadataChanged = "participantMetadataChanged", n.ParticipantNameChanged = "participantNameChanged", n.ParticipantAttributesChanged = "participantAttributesChanged", n.RoomMetadataChanged = "roomMetadataChanged", n.DataReceived = "dataReceived", n.SipDTMFReceived = "sipDTMFReceived", n.TranscriptionReceived = "transcriptionReceived", n.ConnectionQualityChanged = "connectionQualityChanged", n.TrackStreamStateChanged = "trackStreamStateChanged", n.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", n.AudioPlaybackStatusChanged = "audioPlaybackChanged", n.VideoPlaybackStatusChanged = "videoPlaybackChanged", n.MediaDevicesError = "mediaDevicesError", n.ParticipantPermissionsChanged = "participantPermissionsChanged", n.SignalConnected = "signalConnected", n.RecordingStatusChanged = "recordingStatusChanged", n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", n.EncryptionError = "encryptionError", n.DCBufferStatusChanged = "dcBufferStatusChanged", n.ActiveDeviceChanged = "activeDeviceChanged", n.ChatMessage = "chatMessage", n.LocalTrackSubscribed = "localTrackSubscribed", n.MetricsReceived = "metricsReceived"
})(P || (P = {}));
var _;
(function(n) {
    n.TrackPublished = "trackPublished", n.TrackSubscribed = "trackSubscribed", n.TrackSubscriptionFailed = "trackSubscriptionFailed", n.TrackUnpublished = "trackUnpublished", n.TrackUnsubscribed = "trackUnsubscribed", n.TrackMuted = "trackMuted", n.TrackUnmuted = "trackUnmuted", n.LocalTrackPublished = "localTrackPublished", n.LocalTrackUnpublished = "localTrackUnpublished", n.ParticipantMetadataChanged = "participantMetadataChanged", n.ParticipantNameChanged = "participantNameChanged", n.DataReceived = "dataReceived", n.SipDTMFReceived = "sipDTMFReceived", n.TranscriptionReceived = "transcriptionReceived", n.IsSpeakingChanged = "isSpeakingChanged", n.ConnectionQualityChanged = "connectionQualityChanged", n.TrackStreamStateChanged = "trackStreamStateChanged", n.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", n.MediaDevicesError = "mediaDevicesError", n.AudioStreamAcquired = "audioStreamAcquired", n.ParticipantPermissionsChanged = "participantPermissionsChanged", n.PCTrackAdded = "pcTrackAdded", n.AttributesChanged = "attributesChanged", n.LocalTrackSubscribed = "localTrackSubscribed", n.ChatMessage = "chatMessage"
})(_ || (_ = {}));
var w;
(function(n) {
    n.TransportsCreated = "transportsCreated", n.Connected = "connected", n.Disconnected = "disconnected", n.Resuming = "resuming", n.Resumed = "resumed", n.Restarting = "restarting", n.Restarted = "restarted", n.SignalResumed = "signalResumed", n.SignalRestarted = "signalRestarted", n.Closing = "closing", n.MediaTrackAdded = "mediaTrackAdded", n.ActiveSpeakersUpdate = "activeSpeakersUpdate", n.DataPacketReceived = "dataPacketReceived", n.RTPVideoMapUpdate = "rtpVideoMapUpdate", n.DCBufferStatusChanged = "dcBufferStatusChanged", n.ParticipantUpdate = "participantUpdate", n.RoomUpdate = "roomUpdate", n.SpeakersChanged = "speakersChanged", n.StreamStateChanged = "streamStateChanged", n.ConnectionQualityUpdate = "connectionQualityUpdate", n.SubscriptionError = "subscriptionError", n.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate", n.RemoteMute = "remoteMute", n.SubscribedQualityUpdate = "subscribedQualityUpdate", n.LocalTrackUnpublished = "localTrackUnpublished", n.LocalTrackSubscribed = "localTrackSubscribed", n.Offline = "offline", n.SignalRequestResponse = "signalRequestResponse"
})(w || (w = {}));
var S;
(function(n) {
    n.Message = "message", n.Muted = "muted", n.Unmuted = "unmuted", n.Restarted = "restarted", n.Ended = "ended", n.Subscribed = "subscribed", n.Unsubscribed = "unsubscribed", n.UpdateSettings = "updateSettings", n.UpdateSubscription = "updateSubscription", n.AudioPlaybackStarted = "audioPlaybackStarted", n.AudioPlaybackFailed = "audioPlaybackFailed", n.AudioSilenceDetected = "audioSilenceDetected", n.VisibilityChanged = "visibilityChanged", n.VideoDimensionsChanged = "videoDimensionsChanged", n.VideoPlaybackStarted = "videoPlaybackStarted", n.VideoPlaybackFailed = "videoPlaybackFailed", n.ElementAttached = "elementAttached", n.ElementDetached = "elementDetached", n.UpstreamPaused = "upstreamPaused", n.UpstreamResumed = "upstreamResumed", n.SubscriptionPermissionChanged = "subscriptionPermissionChanged", n.SubscriptionStatusChanged = "subscriptionStatusChanged", n.SubscriptionFailed = "subscriptionFailed", n.TrackProcessorUpdate = "trackProcessorUpdate", n.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate", n.TranscriptionReceived = "transcriptionReceived", n.TimeSyncUpdate = "timeSyncUpdate"
})(S || (S = {}));

function Wi(n, e, t) {
    var i, s, r;
    e === void 0 && (e = 50), t === void 0 && (t = {});
    var a = (i = t.isImmediate) != null && i,
        o = (s = t.callback) != null && s,
        c = t.maxWait,
        d = Date.now(),
        l = [];

    function u() {
        if (c !== void 0) {
            var m = Date.now() - d;
            if (m + e >= c) return c - m
        }
        return e
    }
    var h = function() {
        var m = [].slice.call(arguments),
            k = this;
        return new Promise(function(v, E) {
            var T = a && r === void 0;
            if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
                    if (r = void 0, d = Date.now(), !a) {
                        var D = n.apply(k, m);
                        o && o(D), l.forEach(function(y) {
                            return (0, y.resolve)(D)
                        }), l = []
                    }
                }, u()), T) {
                var L = n.apply(k, m);
                return o && o(L), v(L)
            }
            l.push({
                resolve: v,
                reject: E
            })
        })
    };
    return h.cancel = function(m) {
        r !== void 0 && clearTimeout(r), l.forEach(function(k) {
            return (0, k.reject)(m)
        }), l = []
    }, h
}
const Vo = /version\/(\d+(\.?_?\d+)+)/i;
let Xt;

function Se(n) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (typeof navigator > "u") return;
    const t = navigator.userAgent.toLowerCase();
    if (Xt === void 0 || e) {
        const i = qo.find(s => {
            let {
                test: r
            } = s;
            return r.test(t)
        });
        Xt = i ? .describe(t)
    }
    return Xt
}
const qo = [{
    test: /firefox|iceweasel|fxios/i,
    describe(n) {
        return {
            name: "Firefox",
            version: Dt(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n),
            os: n.toLowerCase().includes("fxios") ? "iOS" : void 0,
            osVersion: $t(n)
        }
    }
}, {
    test: /chrom|crios|crmo/i,
    describe(n) {
        return {
            name: "Chrome",
            version: Dt(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n),
            os: n.toLowerCase().includes("crios") ? "iOS" : void 0,
            osVersion: $t(n)
        }
    }
}, {
    test: /safari|applewebkit/i,
    describe(n) {
        return {
            name: "Safari",
            version: Dt(Vo, n),
            os: n.includes("mobile/") ? "iOS" : "macOS",
            osVersion: $t(n)
        }
    }
}];

function Dt(n, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    const i = e.match(n);
    return i && i.length >= t && i[t] || ""
}

function $t(n) {
    return n.includes("mac os") ? Dt(/\(.+?(\d+_\d+(:?_\d+)?)/, n, 1).replace(/_/g, ".") : void 0
}
var Ko = "2.6.0";
const Go = Ko,
    Wo = 15;
class $ {}
$.setTimeout = function() {
    return setTimeout(...arguments)
};
$.setInterval = function() {
    return setInterval(...arguments)
};
$.clearTimeout = function() {
    return clearTimeout(...arguments)
};
$.clearInterval = function() {
    return clearInterval(...arguments)
};
class F {
    constructor(e, t, i, s, r) {
        if (typeof e == "object") this.width = e.width, this.height = e.height, this.aspectRatio = e.aspectRatio, this.encoding = {
            maxBitrate: e.maxBitrate,
            maxFramerate: e.maxFramerate,
            priority: e.priority
        };
        else if (t !== void 0 && i !== void 0) this.width = e, this.height = t, this.aspectRatio = e / t, this.encoding = {
            maxBitrate: i,
            maxFramerate: s,
            priority: r
        };
        else throw new TypeError("Unsupported options: provide at least width, height and maxBitrate")
    }
    get resolution() {
        return {
            width: this.width,
            height: this.height,
            frameRate: this.encoding.maxFramerate,
            aspectRatio: this.aspectRatio
        }
    }
}
const Ho = ["vp8", "h264"],
    zo = ["vp8", "h264", "vp9", "av1"];

function Jo(n) {
    return !!Ho.find(e => e === n)
}
var Pi;
(function(n) {
    n.telephone = {
        maxBitrate: 12e3
    }, n.speech = {
        maxBitrate: 24e3
    }, n.music = {
        maxBitrate: 48e3
    }, n.musicStereo = {
        maxBitrate: 64e3
    }, n.musicHighQuality = {
        maxBitrate: 96e3
    }, n.musicHighQualityStereo = {
        maxBitrate: 128e3
    }
})(Pi || (Pi = {}));
const mt = {
        h90: new F(160, 90, 9e4, 20),
        h180: new F(320, 180, 16e4, 20),
        h216: new F(384, 216, 18e4, 20),
        h360: new F(640, 360, 45e4, 20),
        h540: new F(960, 540, 8e5, 25),
        h720: new F(1280, 720, 17e5, 30),
        h1080: new F(1920, 1080, 3e6, 30),
        h1440: new F(2560, 1440, 5e6, 30),
        h2160: new F(3840, 2160, 8e6, 30)
    },
    Ei = {
        h120: new F(160, 120, 7e4, 20),
        h180: new F(240, 180, 125e3, 20),
        h240: new F(320, 240, 14e4, 20),
        h360: new F(480, 360, 33e4, 20),
        h480: new F(640, 480, 5e5, 20),
        h540: new F(720, 540, 6e5, 25),
        h720: new F(960, 720, 13e5, 30),
        h1080: new F(1440, 1080, 23e5, 30),
        h1440: new F(1920, 1440, 38e5, 30)
    },
    Hi = {
        h360fps3: new F(640, 360, 2e5, 3, "medium"),
        h360fps15: new F(640, 360, 4e5, 15, "medium"),
        h720fps5: new F(1280, 720, 8e5, 5, "medium"),
        h720fps15: new F(1280, 720, 15e5, 15, "medium"),
        h720fps30: new F(1280, 720, 2e6, 30, "medium"),
        h1080fps15: new F(1920, 1080, 25e5, 15, "medium"),
        h1080fps30: new F(1920, 1080, 5e6, 30, "medium"),
        original: new F(0, 0, 7e6, 30, "medium")
    };

function Qo(n) {
    if (!(typeof n > "u")) return typeof structuredClone == "function" ? structuredClone(n) : JSON.parse(JSON.stringify(n))
}
const Yo = 5e3,
    nt = [];
var ae;
(function(n) {
    n[n.LOW = 0] = "LOW", n[n.MEDIUM = 1] = "MEDIUM", n[n.HIGH = 2] = "HIGH"
})(ae || (ae = {}));
class C extends be.EventEmitter {
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var s;
        super(), this.attachedElements = [], this.isMuted = !1, this.streamState = C.StreamState.Active, this.isInBackground = !1, this._currentBitrate = 0, this.log = A, this.appVisibilityChangedListener = () => {
            this.backgroundTimeout && clearTimeout(this.backgroundTimeout), document.visibilityState === "hidden" ? this.backgroundTimeout = setTimeout(() => this.handleAppVisibilityChanged(), Yo) : this.handleAppVisibilityChanged()
        }, this.log = Ce((s = i.loggerName) !== null && s !== void 0 ? s : ue.Track), this.loggerContextCb = i.loggerContextCb, this.setMaxListeners(100), this.kind = t, this._mediaStreamTrack = e, this._mediaStreamID = e.id, this.source = C.Source.Unknown
    }
    get logContext() {
        var e;
        return Object.assign(Object.assign({}, (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)), j(this))
    }
    get currentBitrate() {
        return this._currentBitrate
    }
    get mediaStreamTrack() {
        return this._mediaStreamTrack
    }
    get mediaStreamID() {
        return this._mediaStreamID
    }
    attach(e) {
        let t = "audio";
        this.kind === C.Kind.Video && (t = "video"), this.attachedElements.length === 0 && this.kind === C.Kind.Video && this.addAppVisibilityListener(), e || (t === "audio" && (nt.forEach(r => {
            r.parentElement === null && !e && (e = r)
        }), e && nt.splice(nt.indexOf(e), 1)), e || (e = document.createElement(t))), this.attachedElements.includes(e) || this.attachedElements.push(e), Ge(this.mediaStreamTrack, e);
        const i = e.srcObject.getTracks(),
            s = i.some(r => r.kind === "audio");
        return e.play().then(() => {
            this.emit(s ? S.AudioPlaybackStarted : S.VideoPlaybackStarted)
        }).catch(r => {
            r.name === "NotAllowedError" ? this.emit(s ? S.AudioPlaybackFailed : S.VideoPlaybackFailed, r) : r.name === "AbortError" ? A.debug("".concat(s ? "audio" : "video", " playback aborted, likely due to new play request")) : A.warn("could not playback ".concat(s ? "audio" : "video"), r), s && e && i.some(a => a.kind === "video") && r.name === "NotAllowedError" && (e.muted = !0, e.play().catch(() => {}))
        }), this.emit(S.ElementAttached, e), e
    }
    detach(e) {
        try {
            if (e) {
                Je(this.mediaStreamTrack, e);
                const i = this.attachedElements.indexOf(e);
                return i >= 0 && (this.attachedElements.splice(i, 1), this.recycleElement(e), this.emit(S.ElementDetached, e)), e
            }
            const t = [];
            return this.attachedElements.forEach(i => {
                Je(this.mediaStreamTrack, i), t.push(i), this.recycleElement(i), this.emit(S.ElementDetached, i)
            }), this.attachedElements = [], t
        } finally {
            this.attachedElements.length === 0 && this.removeAppVisibilityListener()
        }
    }
    stop() {
        this.stopMonitor(), this._mediaStreamTrack.stop()
    }
    enable() {
        this._mediaStreamTrack.enabled = !0
    }
    disable() {
        this._mediaStreamTrack.enabled = !1
    }
    stopMonitor() {
        this.monitorInterval && clearInterval(this.monitorInterval), this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle)
    }
    updateLoggerOptions(e) {
        e.loggerName && (this.log = Ce(e.loggerName)), e.loggerContextCb && (this.loggerContextCb = e.loggerContextCb)
    }
    recycleElement(e) {
        if (e instanceof HTMLAudioElement) {
            let t = !0;
            e.pause(), nt.forEach(i => {
                i.parentElement || (t = !1)
            }), t && nt.push(e)
        }
    }
    handleAppVisibilityChanged() {
        return p(this, void 0, void 0, function*() {
            this.isInBackground = document.visibilityState === "hidden", !this.isInBackground && this.kind === C.Kind.Video && setTimeout(() => this.attachedElements.forEach(e => e.play().catch(() => {})), 0)
        })
    }
    addAppVisibilityListener() {
        se() ? (this.isInBackground = document.visibilityState === "hidden", document.addEventListener("visibilitychange", this.appVisibilityChangedListener)) : this.isInBackground = !1
    }
    removeAppVisibilityListener() {
        se() && document.removeEventListener("visibilitychange", this.appVisibilityChangedListener)
    }
}

function Ge(n, e) {
    let t;
    e.srcObject instanceof MediaStream ? t = e.srcObject : t = new MediaStream;
    let i;
    n.kind === "audio" ? i = t.getAudioTracks() : i = t.getVideoTracks(), i.includes(n) || (i.forEach(s => {
        t.removeTrack(s)
    }), t.addTrack(n)), (!Le() || !(e instanceof HTMLVideoElement)) && (e.autoplay = !0), e.muted = t.getAudioTracks().length === 0, e instanceof HTMLVideoElement && (e.playsInline = !0), e.srcObject !== t && (e.srcObject = t, (Le() || $e()) && e instanceof HTMLVideoElement && setTimeout(() => {
        e.srcObject = t, e.play().catch(() => {})
    }, 0))
}

function Je(n, e) {
    if (e.srcObject instanceof MediaStream) {
        const t = e.srcObject;
        t.removeTrack(n), t.getTracks().length > 0 ? e.srcObject = t : e.srcObject = null
    }
}(function(n) {
    let e;
    (function(d) {
        d.Audio = "audio", d.Video = "video", d.Unknown = "unknown"
    })(e = n.Kind || (n.Kind = {}));
    let t;
    (function(d) {
        d.Camera = "camera", d.Microphone = "microphone", d.ScreenShare = "screen_share", d.ScreenShareAudio = "screen_share_audio", d.Unknown = "unknown"
    })(t = n.Source || (n.Source = {}));
    let i;
    (function(d) {
        d.Active = "active", d.Paused = "paused", d.Unknown = "unknown"
    })(i = n.StreamState || (n.StreamState = {}));

    function s(d) {
        switch (d) {
            case e.Audio:
                return de.AUDIO;
            case e.Video:
                return de.VIDEO;
            default:
                return de.DATA
        }
    }
    n.kindToProto = s;

    function r(d) {
        switch (d) {
            case de.AUDIO:
                return e.Audio;
            case de.VIDEO:
                return e.Video;
            default:
                return e.Unknown
        }
    }
    n.kindFromProto = r;

    function a(d) {
        switch (d) {
            case t.Camera:
                return ee.CAMERA;
            case t.Microphone:
                return ee.MICROPHONE;
            case t.ScreenShare:
                return ee.SCREEN_SHARE;
            case t.ScreenShareAudio:
                return ee.SCREEN_SHARE_AUDIO;
            default:
                return ee.UNKNOWN
        }
    }
    n.sourceToProto = a;

    function o(d) {
        switch (d) {
            case ee.CAMERA:
                return t.Camera;
            case ee.MICROPHONE:
                return t.Microphone;
            case ee.SCREEN_SHARE:
                return t.ScreenShare;
            case ee.SCREEN_SHARE_AUDIO:
                return t.ScreenShareAudio;
            default:
                return t.Unknown
        }
    }
    n.sourceFromProto = o;

    function c(d) {
        switch (d) {
            case hi.ACTIVE:
                return i.Active;
            case hi.PAUSED:
                return i.Paused;
            default:
                return i.Unknown
        }
    }
    n.streamStateFromProto = c
})(C || (C = {}));

function Tr(n, e, t) {
    var i;
    const s = (i = Qo(n)) !== null && i !== void 0 ? i : {};
    return s.audio === !0 && (s.audio = {}), s.video === !0 && (s.video = {}), s.audio && Ri(s.audio, e), s.video && Ri(s.video, t), s
}

function Ri(n, e) {
    return Object.keys(e).forEach(t => {
        n[t] === void 0 && (n[t] = e[t])
    }), n
}

function Wt(n) {
    const e = {};
    if (n.video)
        if (typeof n.video == "object") {
            const t = {},
                i = t,
                s = n.video;
            Object.keys(s).forEach(r => {
                switch (r) {
                    case "resolution":
                        Ri(i, s.resolution);
                        break;
                    default:
                        i[r] = s[r]
                }
            }), e.video = t
        } else e.video = n.video;
    else e.video = !1;
    return n.audio ? typeof n.audio == "object" ? e.audio = n.audio : e.audio = !0 : e.audio = !1, e
}

function Xo(n) {
    return p(this, arguments, void 0, function(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200;
        return function*() {
            const i = zi();
            if (i) {
                const s = i.createAnalyser();
                s.fftSize = 2048;
                const r = s.frequencyBinCount,
                    a = new Uint8Array(r);
                i.createMediaStreamSource(new MediaStream([e.mediaStreamTrack])).connect(s), yield ve(t), s.getByteTimeDomainData(a);
                const c = a.some(d => d !== 128 && d !== 0);
                return i.close(), !c
            }
            return !1
        }()
    })
}

function zi() {
    const n = typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
    if (n) return new n({
        latencyHint: "interactive"
    })
}

function On(n) {
    return n === C.Source.Microphone ? "audioinput" : n === C.Source.Camera ? "videoinput" : void 0
}

function $o(n) {
    var e, t;
    let i = (e = n.video) !== null && e !== void 0 ? e : !0;
    return n.resolution && n.resolution.width > 0 && n.resolution.height > 0 && (i = typeof i == "boolean" ? {} : i, Le() ? i = Object.assign(Object.assign({}, i), {
        width: {
            max: n.resolution.width
        },
        height: {
            max: n.resolution.height
        },
        frameRate: n.resolution.frameRate
    }) : i = Object.assign(Object.assign({}, i), {
        width: {
            ideal: n.resolution.width
        },
        height: {
            ideal: n.resolution.height
        },
        frameRate: n.resolution.frameRate
    })), {
        audio: (t = n.audio) !== null && t !== void 0 ? t : !1,
        video: i,
        controller: n.controller,
        selfBrowserSurface: n.selfBrowserSurface,
        surfaceSwitching: n.surfaceSwitching,
        systemAudio: n.systemAudio,
        preferCurrentTab: n.preferCurrentTab
    }
}

function Mt(n) {
    return n.split("/")[1].toLowerCase()
}

function Zo(n) {
    const e = [];
    return n.forEach(t => {
        t.track !== void 0 && e.push(new Vi({
            cid: t.track.mediaStreamID,
            track: t.trackInfo
        }))
    }), e
}

function j(n) {
    return n instanceof C ? {
        trackID: n.sid,
        source: n.source,
        muted: n.isMuted,
        enabled: n.mediaStreamTrack.enabled,
        kind: n.kind,
        streamID: n.mediaStreamID,
        streamTrackID: n.mediaStreamTrack.id
    } : {
        trackID: n.trackSid,
        enabled: n.isEnabled,
        muted: n.isMuted,
        trackInfo: Object.assign({
            mimeType: n.mimeType,
            name: n.trackName,
            encrypted: n.isEncrypted,
            kind: n.kind,
            source: n.source
        }, n.track ? j(n.track) : {})
    }
}

function ec() {
    return typeof RTCRtpReceiver < "u" && "getSynchronizationSources" in RTCRtpReceiver
}

function tc(n, e) {
    var t;
    n === void 0 && (n = {}), e === void 0 && (e = {});
    const i = [...Object.keys(e), ...Object.keys(n)],
        s = {};
    for (const r of i) n[r] !== e[r] && (s[r] = (t = e[r]) !== null && t !== void 0 ? t : "");
    return s
}
const ic = "|",
    Dn = "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";

function nc(n) {
    const e = n.split(ic);
    return e.length > 1 ? [e[0], n.substr(e[0].length + 1)] : [n, ""]
}

function ve(n) {
    return p(this, void 0, void 0, function*() {
        return new Promise(e => $.setTimeout(e, n))
    })
}

function _i() {
    return "addTransceiver" in RTCPeerConnection.prototype
}

function wi() {
    return "addTrack" in RTCPeerConnection.prototype
}

function sc() {
    if (!("getCapabilities" in RTCRtpSender) || Le()) return !1;
    const n = RTCRtpSender.getCapabilities("video");
    let e = !1;
    if (n) {
        for (const t of n.codecs)
            if (t.mimeType === "video/AV1") {
                e = !0;
                break
            }
    }
    return e
}

function rc() {
    if (!("getCapabilities" in RTCRtpSender) || $e()) return !1;
    if (Le()) {
        const t = Se();
        if (t ? .version && Ze(t.version, "16") < 0) return !1
    }
    const n = RTCRtpSender.getCapabilities("video");
    let e = !1;
    if (n) {
        for (const t of n.codecs)
            if (t.mimeType === "video/VP9") {
                e = !0;
                break
            }
    }
    return e
}

function ct(n) {
    return n === "av1" || n === "vp9"
}

function Ii(n) {
    return document ? (n || (n = document.createElement("audio")), "setSinkId" in n) : !1
}

function ac() {
    return typeof RTCPeerConnection > "u" ? !1 : _i() || wi()
}

function $e() {
    var n;
    return ((n = Se()) === null || n === void 0 ? void 0 : n.name) === "Firefox"
}

function Le() {
    var n;
    return ((n = Se()) === null || n === void 0 ? void 0 : n.name) === "Safari"
}

function oc() {
    const n = Se();
    return n ? .name === "Safari" && n.version.startsWith("17.")
}

function Cr() {
    var n, e;
    return se() ? (e = (n = navigator.userAgentData) === null || n === void 0 ? void 0 : n.mobile) !== null && e !== void 0 ? e : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent) : !1
}

function cc() {
    const n = Se(),
        e = "17.2";
    if (n) return n.name !== "Safari" && n.os !== "iOS" || n.os === "iOS" && n.osVersion && Ze(e, n.osVersion) >= 0 ? !0 : n.name === "Safari" && Ze(e, n.version) >= 0
}

function se() {
    return typeof document < "u"
}

function Pe() {
    return navigator.product == "ReactNative"
}

function Oi(n) {
    return n.hostname.endsWith(".livekit.cloud") || n.hostname.endsWith(".livekit.run")
}

function Sr() {
    if (global && global.LiveKitReactNativeGlobal) return global.LiveKitReactNativeGlobal
}

function Pr() {
    if (!Pe()) return;
    let n = Sr();
    if (n) return n.platform
}

function Mn() {
    if (se()) return window.devicePixelRatio;
    if (Pe()) {
        let n = Sr();
        if (n) return n.devicePixelRatio
    }
    return 1
}

function Ze(n, e) {
    const t = n.split("."),
        i = e.split("."),
        s = Math.min(t.length, i.length);
    for (let r = 0; r < s; ++r) {
        const a = parseInt(t[r], 10),
            o = parseInt(i[r], 10);
        if (a > o) return 1;
        if (a < o) return -1;
        if (r === s - 1 && a === o) return 0
    }
    return n === "" && e !== "" ? -1 : e === "" ? 1 : t.length == i.length ? 0 : t.length < i.length ? -1 : 1
}

function dc(n) {
    for (const e of n) e.target.handleResize(e)
}

function lc(n) {
    for (const e of n) e.target.handleVisibilityChanged(e)
}
let Zt = null;
const xn = () => (Zt || (Zt = new ResizeObserver(dc)), Zt);
let ei = null;
const Nn = () => (ei || (ei = new IntersectionObserver(lc, {
    root: null,
    rootMargin: "0px"
})), ei);

function uc() {
    var n;
    const e = new Ha({
        sdk: Is.JS,
        protocol: Wo,
        version: Go
    });
    return Pe() && (e.os = (n = Pr()) !== null && n !== void 0 ? n : ""), e
}

function An() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16,
        e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16,
        t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    const s = document.createElement("canvas");
    s.width = n, s.height = e;
    const r = s.getContext("2d");
    r ? .fillRect(0, 0, s.width, s.height), i && r && (r.beginPath(), r.arc(n / 2, e / 2, 50, 0, Math.PI * 2, !0), r.closePath(), r.fillStyle = "grey", r.fill());
    const a = s.captureStream(),
        [o] = a.getTracks();
    if (!o) throw Error("Could not get empty media stream video track");
    return o.enabled = t, o
}
let st;

function ti() {
    if (!st) {
        const n = new AudioContext,
            e = n.createOscillator(),
            t = n.createGain();
        t.gain.setValueAtTime(0, 0);
        const i = n.createMediaStreamDestination();
        if (e.connect(t), t.connect(i), e.start(), [st] = i.stream.getAudioTracks(), !st) throw Error("Could not get empty media stream audio track");
        st.enabled = !1
    }
    return st.clone()
}
class Er {
    constructor(e, t) {
        this.onFinally = t, this.promise = new Promise((i, s) => p(this, void 0, void 0, function*() {
            this.resolve = i, this.reject = s, e && (yield e(i, s))
        })).finally(() => {
            var i;
            return (i = this.onFinally) === null || i === void 0 ? void 0 : i.call(this)
        })
    }
}

function ld(n, e) {
    const t = Object.assign({
            cloneTrack: !1,
            fftSize: 2048,
            smoothingTimeConstant: .8,
            minDecibels: -100,
            maxDecibels: -80
        }, e),
        i = zi();
    if (!i) throw new Error("Audio Context not supported on this browser");
    const s = t.cloneTrack ? n.mediaStreamTrack.clone() : n.mediaStreamTrack,
        r = i.createMediaStreamSource(new MediaStream([s])),
        a = i.createAnalyser();
    a.minDecibels = t.minDecibels, a.maxDecibels = t.maxDecibels, a.fftSize = t.fftSize, a.smoothingTimeConstant = t.smoothingTimeConstant, r.connect(a);
    const o = new Uint8Array(a.frequencyBinCount);
    return {
        calculateVolume: () => {
            a.getByteFrequencyData(o);
            let l = 0;
            for (const h of o) l += Math.pow(h / 255, 2);
            return Math.sqrt(l / o.length)
        },
        analyser: a,
        cleanup: () => p(this, void 0, void 0, function*() {
            yield i.close(), t.cloneTrack && s.stop()
        })
    }
}

function hc(n) {
    return zo.includes(n)
}

function Te(n) {
    if (typeof n == "string" || typeof n == "number") return n;
    if (Array.isArray(n)) return n[0];
    if (n.exact) return Array.isArray(n.exact) ? n.exact[0] : n.exact;
    if (n.ideal) return Array.isArray(n.ideal) ? n.ideal[0] : n.ideal;
    throw Error("could not unwrap constraint")
}

function pc(n) {
    return n.startsWith("http") ? n.replace(/^(http)/, "ws") : n
}

function Ln(n) {
    return n.startsWith("ws") ? n.replace(/^(ws)/, "http") : n
}

function mc(n, e) {
    return n.segments.map(t => {
        let {
            id: i,
            text: s,
            language: r,
            startTime: a,
            endTime: o,
            final: c
        } = t;
        var d;
        const l = (d = e.get(i)) !== null && d !== void 0 ? d : Date.now(),
            u = Date.now();
        return c ? e.delete(i) : e.set(i, l), {
            id: i,
            text: s,
            startTime: Number.parseInt(a.toString()),
            endTime: Number.parseInt(o.toString()),
            final: c,
            language: r,
            firstReceivedTime: l,
            lastReceivedTime: u
        }
    })
}

function fc(n) {
    const {
        id: e,
        timestamp: t,
        message: i,
        editTimestamp: s
    } = n;
    return {
        id: e,
        timestamp: Number.parseInt(t.toString()),
        editTimestamp: s ? Number.parseInt(s.toString()) : void 0,
        message: i
    }
}
const ii = "default";
class X {
    static getInstance() {
        return this.instance === void 0 && (this.instance = new X), this.instance
    }
    getDevices(e) {
        return p(this, arguments, void 0, function(t) {
            var i = this;
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return function*() {
                var r;
                if (((r = X.userMediaPromiseMap) === null || r === void 0 ? void 0 : r.size) > 0) {
                    A.debug("awaiting getUserMedia promise");
                    try {
                        t ? yield X.userMediaPromiseMap.get(t): yield Promise.all(X.userMediaPromiseMap.values())
                    } catch {
                        A.warn("error waiting for media permissons")
                    }
                }
                let a = yield navigator.mediaDevices.enumerateDevices();
                if (s && !(Le() && i.hasDeviceInUse(t)) && (a.filter(c => c.kind === t).length === 0 || a.some(c => {
                        const d = c.label === "",
                            l = t ? c.kind === t : !0;
                        return d && l
                    }))) {
                    const c = {
                            video: t !== "audioinput" && t !== "audiooutput",
                            audio: t !== "videoinput"
                        },
                        d = yield navigator.mediaDevices.getUserMedia(c);
                    a = yield navigator.mediaDevices.enumerateDevices(), d.getTracks().forEach(l => {
                        l.stop()
                    })
                }
                return t && (a = a.filter(o => o.kind === t)), a
            }()
        })
    }
    normalizeDeviceId(e, t, i) {
        return p(this, void 0, void 0, function*() {
            if (t !== ii) return t;
            const s = yield this.getDevices(e), r = s.find(o => o.deviceId === ii);
            if (!r) {
                A.warn("could not reliably determine default device");
                return
            }
            const a = s.find(o => o.deviceId !== ii && o.groupId === (i ? ? r.groupId));
            if (!a) {
                A.warn("could not reliably determine default device");
                return
            }
            return a ? .deviceId
        })
    }
    hasDeviceInUse(e) {
        return e ? X.userMediaPromiseMap.has(e) : X.userMediaPromiseMap.size > 0
    }
}
X.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"];
X.userMediaPromiseMap = new Map;
const gc = 1e3;
class Qe extends C {
    get sender() {
        return this._sender
    }
    set sender(e) {
        this._sender = e
    }
    get constraints() {
        return this._constraints
    }
    constructor(e, t, i) {
        let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
            r = arguments.length > 4 ? arguments[4] : void 0;
        super(e, t, r), this.manuallyStopped = !1, this._isUpstreamPaused = !1, this.handleTrackMuteEvent = () => this.debouncedTrackMuteHandler().catch(() => this.log.debug("track mute bounce got cancelled by an unmute event", this.logContext)), this.debouncedTrackMuteHandler = Wi(() => p(this, void 0, void 0, function*() {
            yield this.pauseUpstream()
        }), 5e3), this.handleTrackUnmuteEvent = () => p(this, void 0, void 0, function*() {
            this.debouncedTrackMuteHandler.cancel("unmute"), yield this.resumeUpstream()
        }), this.handleEnded = () => {
            this.isInBackground && (this.reacquireTrack = !0), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), this.emit(S.Ended, this)
        }, this.reacquireTrack = !1, this.providedByUser = s, this.muteLock = new ne, this.pauseUpstreamLock = new ne, this.processorLock = new ne, this.restartLock = new ne, this.setMediaStreamTrack(e, !0), this._constraints = e.getConstraints(), i && (this._constraints = i)
    }
    get id() {
        return this._mediaStreamTrack.id
    }
    get dimensions() {
        if (this.kind !== C.Kind.Video) return;
        const {
            width: e,
            height: t
        } = this._mediaStreamTrack.getSettings();
        if (e && t) return {
            width: e,
            height: t
        }
    }
    get isUpstreamPaused() {
        return this._isUpstreamPaused
    }
    get isUserProvided() {
        return this.providedByUser
    }
    get mediaStreamTrack() {
        var e, t;
        return (t = (e = this.processor) === null || e === void 0 ? void 0 : e.processedTrack) !== null && t !== void 0 ? t : this._mediaStreamTrack
    }
    setMediaStreamTrack(e, t) {
        return p(this, void 0, void 0, function*() {
            if (e === this._mediaStreamTrack && !t) return;
            this._mediaStreamTrack && (this.attachedElements.forEach(s => {
                Je(this._mediaStreamTrack, s)
            }), this.debouncedTrackMuteHandler.cancel("new-track"), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent)), this.mediaStream = new MediaStream([e]), e && (e.addEventListener("ended", this.handleEnded), e.addEventListener("mute", this.handleTrackMuteEvent), e.addEventListener("unmute", this.handleTrackUnmuteEvent), this._constraints = e.getConstraints());
            let i;
            if (this.processor && e) {
                const s = yield this.processorLock.lock();
                try {
                    if (this.log.debug("restarting processor", this.logContext), this.kind === "unknown") throw TypeError("cannot set processor on track of unknown kind");
                    this.processorElement && (Ge(e, this.processorElement), this.processorElement.muted = !0), yield this.processor.restart({
                        track: e,
                        kind: this.kind,
                        element: this.processorElement
                    }), i = this.processor.processedTrack
                } finally {
                    s()
                }
            }
            this.sender && (yield this.sender.replaceTrack(i ? ? e)), !this.providedByUser && this._mediaStreamTrack !== e && this._mediaStreamTrack.stop(), this._mediaStreamTrack = e, e && (this._mediaStreamTrack.enabled = !this.isMuted, yield this.resumeUpstream(), this.attachedElements.forEach(s => {
                Ge(i ? ? e, s)
            }))
        })
    }
    waitForDimensions() {
        return p(this, arguments, void 0, function() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gc;
            return function*() {
                var i;
                if (e.kind === C.Kind.Audio) throw new Error("cannot get dimensions for audio tracks");
                ((i = Se()) === null || i === void 0 ? void 0 : i.os) === "iOS" && (yield ve(10));
                const s = Date.now();
                for (; Date.now() - s < t;) {
                    const r = e.dimensions;
                    if (r) return r;
                    yield ve(50)
                }
                throw new ge("unable to get track dimensions after timeout")
            }()
        })
    }
    getDeviceId() {
        return p(this, arguments, void 0, function() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return function*() {
                if (e.source === C.Source.ScreenShare) return;
                const {
                    deviceId: i,
                    groupId: s
                } = e._mediaStreamTrack.getSettings(), r = e.kind === C.Kind.Audio ? "audioinput" : "videoinput";
                return t ? X.getInstance().normalizeDeviceId(r, i, s) : i
            }()
        })
    }
    mute() {
        return p(this, void 0, void 0, function*() {
            return this.setTrackMuted(!0), this
        })
    }
    unmute() {
        return p(this, void 0, void 0, function*() {
            return this.setTrackMuted(!1), this
        })
    }
    replaceTrack(e, t) {
        return p(this, void 0, void 0, function*() {
            if (!this.sender) throw new ge("unable to replace an unpublished track");
            let i, s;
            return typeof t == "boolean" ? i = t : t !== void 0 && (i = t.userProvidedTrack, s = t.stopProcessor), this.providedByUser = i ? ? !0, this.log.debug("replace MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(e), s && this.processor && (yield this.stopProcessor()), this
        })
    }
    restart(e) {
        return p(this, void 0, void 0, function*() {
            this.manuallyStopped = !1;
            const t = yield this.restartLock.lock();
            try {
                e || (e = this._constraints), this.log.debug("restarting track with constraints", Object.assign(Object.assign({}, this.logContext), {
                    constraints: e
                }));
                const i = {
                    audio: !1,
                    video: !1
                };
                this.kind === C.Kind.Video ? i.video = e : i.audio = e, this.attachedElements.forEach(a => {
                    Je(this.mediaStreamTrack, a)
                }), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.stop();
                const r = (yield navigator.mediaDevices.getUserMedia(i)).getTracks()[0];
                return r.addEventListener("ended", this.handleEnded), this.log.debug("re-acquired MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(r), this._constraints = e, this.emit(S.Restarted, this), this.manuallyStopped && (this.log.warn("track was stopped during a restart, stopping restarted track", this.logContext), this.stop()), this
            } finally {
                t()
            }
        })
    }
    setTrackMuted(e) {
        this.log.debug("setting ".concat(this.kind, " track ").concat(e ? "muted" : "unmuted"), this.logContext), !(this.isMuted === e && this._mediaStreamTrack.enabled !== e) && (this.isMuted = e, this._mediaStreamTrack.enabled = !e, this.emit(e ? S.Muted : S.Unmuted, this))
    }
    get needsReAcquisition() {
        return this._mediaStreamTrack.readyState !== "live" || this._mediaStreamTrack.muted || !this._mediaStreamTrack.enabled || this.reacquireTrack
    }
    handleAppVisibilityChanged() {
        const e = Object.create(null, {
            handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged
            }
        });
        return p(this, void 0, void 0, function*() {
            yield e.handleAppVisibilityChanged.call(this), Cr() && (this.log.debug("visibility changed, is in Background: ".concat(this.isInBackground), this.logContext), !this.isInBackground && this.needsReAcquisition && !this.isUserProvided && !this.isMuted && (this.log.debug("track needs to be reacquired, restarting ".concat(this.source), this.logContext), yield this.restart(), this.reacquireTrack = !1))
        })
    }
    stop() {
        var e;
        this.manuallyStopped = !0, super.stop(), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), (e = this.processor) === null || e === void 0 || e.destroy(), this.processor = void 0
    }
    pauseUpstream() {
        return p(this, void 0, void 0, function*() {
            const e = yield this.pauseUpstreamLock.lock();
            try {
                if (this._isUpstreamPaused === !0) return;
                if (!this.sender) {
                    this.log.warn("unable to pause upstream for an unpublished track", this.logContext);
                    return
                }
                this._isUpstreamPaused = !0, this.emit(S.UpstreamPaused, this);
                const t = Se();
                if (t ? .name === "Safari" && Ze(t.version, "12.0") < 0) throw new Gi("pauseUpstream is not supported on Safari < 12.");
                yield this.sender.replaceTrack(null)
            } finally {
                e()
            }
        })
    }
    resumeUpstream() {
        return p(this, void 0, void 0, function*() {
            const e = yield this.pauseUpstreamLock.lock();
            try {
                if (this._isUpstreamPaused === !1) return;
                if (!this.sender) {
                    this.log.warn("unable to resume upstream for an unpublished track", this.logContext);
                    return
                }
                this._isUpstreamPaused = !1, this.emit(S.UpstreamResumed, this), yield this.sender.replaceTrack(this.mediaStreamTrack)
            } finally {
                e()
            }
        })
    }
    getRTCStatsReport() {
        return p(this, void 0, void 0, function*() {
            var e;
            return !((e = this.sender) === null || e === void 0) && e.getStats ? yield this.sender.getStats(): void 0
        })
    }
    setProcessor(e) {
        return p(this, arguments, void 0, function(t) {
            var i = this;
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return function*() {
                var r;
                const a = yield i.processorLock.lock();
                try {
                    i.log.debug("setting up processor", i.logContext);
                    const o = document.createElement(i.kind),
                        c = {
                            kind: i.kind,
                            track: i._mediaStreamTrack,
                            element: o,
                            audioContext: i.audioContext
                        };
                    if (yield t.init(c), i.log.debug("processor initialized", i.logContext), i.processor && (yield i.stopProcessor()), i.kind === "unknown") throw TypeError("cannot set processor on track of unknown kind");
                    if (Ge(i._mediaStreamTrack, o), o.muted = !0, o.play().catch(d => i.log.error("failed to play processor element", Object.assign(Object.assign({}, i.logContext), {
                            error: d
                        }))), i.processor = t, i.processorElement = o, i.processor.processedTrack) {
                        for (const d of i.attachedElements) d !== i.processorElement && s && (Je(i._mediaStreamTrack, d), Ge(i.processor.processedTrack, d));
                        yield(r = i.sender) === null || r === void 0 ? void 0 : r.replaceTrack(i.processor.processedTrack)
                    }
                    i.emit(S.TrackProcessorUpdate, i.processor)
                } finally {
                    a()
                }
            }()
        })
    }
    getProcessor() {
        return this.processor
    }
    stopProcessor() {
        return p(this, arguments, void 0, function() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return function*() {
                var i, s;
                e.processor && (e.log.debug("stopping processor", e.logContext), (i = e.processor.processedTrack) === null || i === void 0 || i.stop(), yield e.processor.destroy(), e.processor = void 0, t || ((s = e.processorElement) === null || s === void 0 || s.remove(), e.processorElement = void 0), yield e._mediaStreamTrack.applyConstraints(e._constraints), yield e.setMediaStreamTrack(e._mediaStreamTrack, !0), e.emit(S.TrackProcessorUpdate))
            }()
        })
    }
}
class vc extends be.EventEmitter {
    constructor(e) {
        super(), this.onWorkerMessage = t => {
            var i, s;
            const {
                kind: r,
                data: a
            } = t.data;
            switch (r) {
                case "error":
                    A.error(a.error.message), this.emit(Ie.EncryptionError, a.error);
                    break;
                case "initAck":
                    a.enabled && this.keyProvider.getKeys().forEach(o => {
                        this.postKey(o)
                    });
                    break;
                case "enable":
                    if (a.enabled && this.keyProvider.getKeys().forEach(o => {
                            this.postKey(o)
                        }), this.encryptionEnabled !== a.enabled && a.participantIdentity === ((i = this.room) === null || i === void 0 ? void 0 : i.localParticipant.identity)) this.emit(Ie.ParticipantEncryptionStatusChanged, a.enabled, this.room.localParticipant), this.encryptionEnabled = a.enabled;
                    else if (a.participantIdentity) {
                        const o = (s = this.room) === null || s === void 0 ? void 0 : s.getParticipantByIdentity(a.participantIdentity);
                        if (!o) throw TypeError("couldn't set encryption status, participant not found".concat(a.participantIdentity));
                        this.emit(Ie.ParticipantEncryptionStatusChanged, a.enabled, o)
                    }
                    break;
                case "ratchetKey":
                    this.keyProvider.emit(Oe.KeyRatcheted, a.material, a.keyIndex);
                    break
            }
        }, this.onWorkerError = t => {
            A.error("e2ee worker encountered an error:", {
                error: t.error
            }), this.emit(Ie.EncryptionError, t.error)
        }, this.keyProvider = e.keyProvider, this.worker = e.worker, this.encryptionEnabled = !1
    }
    setup(e) {
        if (!Ao()) throw new Gi("tried to setup end-to-end encryption on an unsupported browser");
        if (A.info("setting up e2ee"), e !== this.room) {
            this.room = e, this.setupEventListeners(e, this.keyProvider);
            const t = {
                kind: "init",
                data: {
                    keyProviderOptions: this.keyProvider.getOptions(),
                    loglevel: yo.getLevel()
                }
            };
            this.worker && (A.info("initializing worker", {
                worker: this.worker
            }), this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage(t))
        }
    }
    setParticipantCryptorEnabled(e, t) {
        A.debug("set e2ee to ".concat(e, " for participant ").concat(t)), this.postEnable(e, t)
    }
    setSifTrailer(e) {
        !e || e.length === 0 ? A.warn("ignoring server sent trailer as it's empty") : this.postSifTrailer(e)
    }
    setupEngine(e) {
        e.on(w.RTPVideoMapUpdate, t => {
            this.postRTPMap(t)
        })
    }
    setupEventListeners(e, t) {
        e.on(P.TrackPublished, (i, s) => this.setParticipantCryptorEnabled(i.trackInfo.encryption !== re.NONE, s.identity)), e.on(P.ConnectionStateChanged, i => {
            i === U.Connected && e.remoteParticipants.forEach(s => {
                s.trackPublications.forEach(r => {
                    this.setParticipantCryptorEnabled(r.trackInfo.encryption !== re.NONE, s.identity)
                })
            })
        }).on(P.TrackUnsubscribed, (i, s, r) => {
            var a;
            const o = {
                kind: "removeTransform",
                data: {
                    participantIdentity: r.identity,
                    trackId: i.mediaStreamID
                }
            };
            (a = this.worker) === null || a === void 0 || a.postMessage(o)
        }).on(P.TrackSubscribed, (i, s, r) => {
            this.setupE2EEReceiver(i, r.identity, s.trackInfo)
        }).on(P.SignalConnected, () => {
            if (!this.room) throw new TypeError("expected room to be present on signal connect");
            t.getKeys().forEach(i => {
                this.postKey(i)
            }), this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled, this.room.localParticipant.identity)
        }), e.localParticipant.on(_.LocalTrackPublished, i => p(this, void 0, void 0, function*() {
            this.setupE2EESender(i.track, i.track.sender)
        })), t.on(Oe.SetKey, i => this.postKey(i)).on(Oe.RatchetRequest, (i, s) => this.postRatchetRequest(i, s))
    }
    postRatchetRequest(e, t) {
        if (!this.worker) throw Error("could not ratchet key, worker is missing");
        const i = {
            kind: "ratchetRequest",
            data: {
                participantIdentity: e,
                keyIndex: t
            }
        };
        this.worker.postMessage(i)
    }
    postKey(e) {
        let {
            key: t,
            participantIdentity: i,
            keyIndex: s
        } = e;
        var r;
        if (!this.worker) throw Error("could not set key, worker is missing");
        const a = {
            kind: "setKey",
            data: {
                participantIdentity: i,
                isPublisher: i === ((r = this.room) === null || r === void 0 ? void 0 : r.localParticipant.identity),
                key: t,
                keyIndex: s
            }
        };
        this.worker.postMessage(a)
    }
    postEnable(e, t) {
        if (this.worker) {
            const i = {
                kind: "enable",
                data: {
                    enabled: e,
                    participantIdentity: t
                }
            };
            this.worker.postMessage(i)
        } else throw new ReferenceError("failed to enable e2ee, worker is not ready")
    }
    postRTPMap(e) {
        var t;
        if (!this.worker) throw TypeError("could not post rtp map, worker is missing");
        if (!(!((t = this.room) === null || t === void 0) && t.localParticipant.identity)) throw TypeError("could not post rtp map, local participant identity is missing");
        const i = {
            kind: "setRTPMap",
            data: {
                map: e,
                participantIdentity: this.room.localParticipant.identity
            }
        };
        this.worker.postMessage(i)
    }
    postSifTrailer(e) {
        if (!this.worker) throw Error("could not post SIF trailer, worker is missing");
        const t = {
            kind: "setSifTrailer",
            data: {
                trailer: e
            }
        };
        this.worker.postMessage(t)
    }
    setupE2EEReceiver(e, t, i) {
        if (e.receiver) {
            if (!i ? .mimeType || i.mimeType === "") throw new TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");
            this.handleReceiver(e.receiver, e.mediaStreamID, t, e.kind === "video" ? Mt(i.mimeType) : void 0)
        }
    }
    setupE2EESender(e, t) {
        if (!(e instanceof Qe) || !t) {
            t || A.warn("early return because sender is not ready");
            return
        }
        this.handleSender(t, e.mediaStreamID, void 0)
    }
    handleReceiver(e, t, i, s) {
        return p(this, void 0, void 0, function*() {
            if (this.worker) {
                if (Ci()) {
                    const r = {
                        kind: "decode",
                        participantIdentity: i,
                        trackId: t,
                        codec: s
                    };
                    e.transform = new RTCRtpScriptTransform(this.worker, r)
                } else {
                    if (bt in e && s) {
                        const c = {
                            kind: "updateCodec",
                            data: {
                                trackId: t,
                                codec: s,
                                participantIdentity: i
                            }
                        };
                        this.worker.postMessage(c);
                        return
                    }
                    let r = e.writableStream,
                        a = e.readableStream;
                    if (!r || !a) {
                        const c = e.createEncodedStreams();
                        e.writableStream = c.writable, r = c.writable, e.readableStream = c.readable, a = c.readable
                    }
                    const o = {
                        kind: "decode",
                        data: {
                            readableStream: a,
                            writableStream: r,
                            trackId: t,
                            codec: s,
                            participantIdentity: i
                        }
                    };
                    this.worker.postMessage(o, [a, r])
                }
                e[bt] = !0
            }
        })
    }
    handleSender(e, t, i) {
        var s;
        if (!(bt in e || !this.worker)) {
            if (!(!((s = this.room) === null || s === void 0) && s.localParticipant.identity) || this.room.localParticipant.identity === "") throw TypeError("local identity needs to be known in order to set up encrypted sender");
            if (Ci()) {
                A.info("initialize script transform");
                const r = {
                    kind: "encode",
                    participantIdentity: this.room.localParticipant.identity,
                    trackId: t,
                    codec: i
                };
                e.transform = new RTCRtpScriptTransform(this.worker, r)
            } else {
                A.info("initialize encoded streams");
                const r = e.createEncodedStreams(),
                    a = {
                        kind: "encode",
                        data: {
                            readableStream: r.readable,
                            writableStream: r.writable,
                            codec: i,
                            trackId: t,
                            participantIdentity: this.room.localParticipant.identity
                        }
                    };
                this.worker.postMessage(a, [r.readable, r.writable])
            }
            e[bt] = !0
        }
    }
}
var dt;
(function(n) {
    n[n.WAITING = 0] = "WAITING", n[n.RUNNING = 1] = "RUNNING", n[n.COMPLETED = 2] = "COMPLETED"
})(dt || (dt = {}));
class bc {
    constructor() {
        this.pendingTasks = new Map, this.taskMutex = new ne, this.nextTaskIndex = 0
    }
    run(e) {
        return p(this, void 0, void 0, function*() {
            const t = {
                id: this.nextTaskIndex++,
                enqueuedAt: Date.now(),
                status: dt.WAITING
            };
            this.pendingTasks.set(t.id, t);
            const i = yield this.taskMutex.lock();
            try {
                return t.executedAt = Date.now(), t.status = dt.RUNNING, yield e()
            } finally {
                t.status = dt.COMPLETED, this.pendingTasks.delete(t.id), i()
            }
        })
    }
    flush() {
        return p(this, void 0, void 0, function*() {
            return this.run(() => p(this, void 0, void 0, function*() {}))
        })
    }
    snapshot() {
        return Array.from(this.pendingTasks.values())
    }
}
const kc = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];

function yc(n) {
    const e = kc.indexOf(n.case) >= 0;
    return A.trace("request allowed to bypass queue:", {
        canPass: e,
        req: n
    }), e
}
var q;
(function(n) {
    n[n.CONNECTING = 0] = "CONNECTING", n[n.CONNECTED = 1] = "CONNECTED", n[n.RECONNECTING = 2] = "RECONNECTING", n[n.DISCONNECTING = 3] = "DISCONNECTING", n[n.DISCONNECTED = 4] = "DISCONNECTED"
})(q || (q = {}));
class Ji {
    get currentState() {
        return this.state
    }
    get isDisconnected() {
        return this.state === q.DISCONNECTING || this.state === q.DISCONNECTED
    }
    get isEstablishingConnection() {
        return this.state === q.CONNECTING || this.state === q.RECONNECTING
    }
    getNextRequestId() {
        return this._requestId += 1, this._requestId
    }
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
            t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var i;
        this.rtt = 0, this.state = q.DISCONNECTED, this.log = A, this._requestId = 0, this.resetCallbacks = () => {
            this.onAnswer = void 0, this.onLeave = void 0, this.onLocalTrackPublished = void 0, this.onLocalTrackUnpublished = void 0, this.onNegotiateRequested = void 0, this.onOffer = void 0, this.onRemoteMuteChanged = void 0, this.onSubscribedQualityUpdate = void 0, this.onTokenRefresh = void 0, this.onTrickle = void 0, this.onClose = void 0
        }, this.log = Ce((i = t.loggerName) !== null && i !== void 0 ? i : ue.Signal), this.loggerContextCb = t.loggerContextCb, this.useJSON = e, this.requestQueue = new bc, this.queuedRequests = [], this.closingLock = new ne, this.connectionLock = new ne, this.state = q.DISCONNECTED
    }
    get logContext() {
        var e, t;
        return (t = (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)) !== null && t !== void 0 ? t : {}
    }
    join(e, t, i, s) {
        return p(this, void 0, void 0, function*() {
            return this.state = q.CONNECTING, this.options = i, yield this.connect(e, t, i, s)
        })
    }
    reconnect(e, t, i, s) {
        return p(this, void 0, void 0, function*() {
            if (!this.options) {
                this.log.warn("attempted to reconnect without signal options being set, ignoring", this.logContext);
                return
            }
            return this.state = q.RECONNECTING, this.clearPingInterval(), yield this.connect(e, t, Object.assign(Object.assign({}, this.options), {
                reconnect: !0,
                sid: i,
                reconnectReason: s
            }))
        })
    }
    connect(e, t, i, s) {
        this.connectOptions = i, e = pc(e), e = e.replace(/\/$/, ""), e += "/rtc";
        const r = uc(),
            a = Tc(t, r, i);
        return new Promise((o, c) => p(this, void 0, void 0, function*() {
            const d = yield this.connectionLock.lock();
            try {
                const l = () => p(this, void 0, void 0, function*() {
                        this.close(), clearTimeout(u), c(new B("room connection has been cancelled (signal)"))
                    }),
                    u = setTimeout(() => {
                        this.close(), c(new B("room connection has timed out (signal)"))
                    }, i.websocketTimeout);
                s ? .aborted && l(), s ? .addEventListener("abort", l), this.log.debug("connecting to ".concat(e + a), this.logContext), this.ws && (yield this.close(!1)), this.ws = new WebSocket(e + a), this.ws.binaryType = "arraybuffer", this.ws.onopen = () => {
                    clearTimeout(u)
                }, this.ws.onerror = h => p(this, void 0, void 0, function*() {
                    if (this.state !== q.CONNECTED) {
                        this.state = q.DISCONNECTED, clearTimeout(u);
                        try {
                            const m = yield fetch("http".concat(e.substring(2), "/validate").concat(a));
                            if (m.status.toFixed(0).startsWith("4")) {
                                const k = yield m.text();
                                c(new B(k, te.NotAllowed, m.status))
                            } else c(new B("Internal error", te.InternalError, m.status))
                        } catch {
                            c(new B("server was not reachable", te.ServerUnreachable))
                        }
                        return
                    }
                    this.handleWSError(h)
                }), this.ws.onmessage = h => p(this, void 0, void 0, function*() {
                    var m, k, v;
                    let E;
                    if (typeof h.data == "string") {
                        const T = JSON.parse(h.data);
                        E = fn.fromJson(T, {
                            ignoreUnknownFields: !0
                        })
                    } else if (h.data instanceof ArrayBuffer) E = fn.fromBinary(new Uint8Array(h.data));
                    else {
                        this.log.error("could not decode websocket message: ".concat(typeof h.data), this.logContext);
                        return
                    }
                    if (this.state !== q.CONNECTED) {
                        let T = !1;
                        if (((m = E.message) === null || m === void 0 ? void 0 : m.case) === "join" ? (this.state = q.CONNECTED, s ? .removeEventListener("abort", l), this.pingTimeoutDuration = E.message.value.pingTimeout, this.pingIntervalDuration = E.message.value.pingInterval, this.pingTimeoutDuration && this.pingTimeoutDuration > 0 && (this.log.debug("ping config", Object.assign(Object.assign({}, this.logContext), {
                                timeout: this.pingTimeoutDuration,
                                interval: this.pingIntervalDuration
                            })), this.startPingInterval()), o(E.message.value)) : this.state === q.RECONNECTING && E.message.case !== "leave" ? (this.state = q.CONNECTED, s ? .removeEventListener("abort", l), this.startPingInterval(), ((k = E.message) === null || k === void 0 ? void 0 : k.case) === "reconnect" ? o(E.message.value) : (this.log.debug("declaring signal reconnected without reconnect response received", this.logContext), o(void 0), T = !0)) : this.isEstablishingConnection && E.message.case === "leave" ? c(new B("Received leave request while trying to (re)connect", te.LeaveRequest)) : i.reconnect || c(new B("did not receive join response, got ".concat((v = E.message) === null || v === void 0 ? void 0 : v.case, " instead"))), !T) return
                    }
                    this.signalLatency && (yield ve(this.signalLatency)), this.handleSignalResponse(E)
                }), this.ws.onclose = h => {
                    this.isEstablishingConnection && c(new B("Websocket got closed during a (re)connection attempt")), this.log.warn("websocket closed", Object.assign(Object.assign({}, this.logContext), {
                        reason: h.reason,
                        code: h.code,
                        wasClean: h.wasClean,
                        state: this.state
                    })), this.handleOnClose(h.reason)
                }
            } finally {
                d()
            }
        }))
    }
    close() {
        return p(this, arguments, void 0, function() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return function*() {
                const i = yield e.closingLock.lock();
                try {
                    if (e.clearPingInterval(), t && (e.state = q.DISCONNECTING), e.ws) {
                        e.ws.onmessage = null, e.ws.onopen = null, e.ws.onclose = null;
                        const s = new Promise(r => {
                            e.ws ? e.ws.onclose = () => {
                                r()
                            } : r()
                        });
                        e.ws.readyState < e.ws.CLOSING && (e.ws.close(), yield Promise.race([s, ve(250)])), e.ws = void 0
                    }
                } finally {
                    t && (e.state = q.DISCONNECTED), i()
                }
            }()
        })
    }
    sendOffer(e) {
        this.log.debug("sending offer", Object.assign(Object.assign({}, this.logContext), {
            offerSdp: e.sdp
        })), this.sendRequest({
            case: "offer",
            value: Ft(e)
        })
    }
    sendAnswer(e) {
        return this.log.debug("sending answer", Object.assign(Object.assign({}, this.logContext), {
            answerSdp: e.sdp
        })), this.sendRequest({
            case: "answer",
            value: Ft(e)
        })
    }
    sendIceCandidate(e, t) {
        return this.log.trace("sending ice candidate", Object.assign(Object.assign({}, this.logContext), {
            candidate: e
        })), this.sendRequest({
            case: "trickle",
            value: new ji({
                candidateInit: JSON.stringify(e),
                target: t
            })
        })
    }
    sendMuteTrack(e, t) {
        return this.sendRequest({
            case: "mute",
            value: new Bi({
                sid: e,
                muted: t
            })
        })
    }
    sendAddTrack(e) {
        return this.sendRequest({
            case: "addTrack",
            value: e
        })
    }
    sendUpdateLocalMetadata(e, t) {
        return p(this, arguments, void 0, function(i, s) {
            var r = this;
            let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return function*() {
                const o = r.getNextRequestId();
                return yield r.sendRequest({
                    case: "updateMetadata",
                    value: new As({
                        requestId: o,
                        metadata: i,
                        name: s,
                        attributes: a
                    })
                }), o
            }()
        })
    }
    sendUpdateTrackSettings(e) {
        this.sendRequest({
            case: "trackSetting",
            value: e
        })
    }
    sendUpdateSubscription(e) {
        return this.sendRequest({
            case: "subscription",
            value: e
        })
    }
    sendSyncState(e) {
        return this.sendRequest({
            case: "syncState",
            value: e
        })
    }
    sendUpdateVideoLayers(e, t) {
        return this.sendRequest({
            case: "updateLayers",
            value: new Ns({
                trackSid: e,
                layers: t
            })
        })
    }
    sendUpdateSubscriptionPermissions(e, t) {
        return this.sendRequest({
            case: "subscriptionPermission",
            value: new Fs({
                allParticipants: e,
                trackPermissions: t
            })
        })
    }
    sendSimulateScenario(e) {
        return this.sendRequest({
            case: "simulate",
            value: e
        })
    }
    sendPing() {
        return Promise.all([this.sendRequest({
            case: "ping",
            value: K.parse(Date.now())
        }), this.sendRequest({
            case: "pingReq",
            value: new Vs({
                timestamp: K.parse(Date.now()),
                rtt: K.parse(this.rtt)
            })
        })])
    }
    sendUpdateLocalAudioTrack(e, t) {
        return this.sendRequest({
            case: "updateAudioTrack",
            value: new xs({
                trackSid: e,
                features: t
            })
        })
    }
    sendLeave() {
        return this.sendRequest({
            case: "leave",
            value: new Kt({
                reason: We.CLIENT_INITIATED,
                action: He.DISCONNECT
            })
        })
    }
    sendRequest(e) {
        return p(this, arguments, void 0, function(t) {
            var i = this;
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            return function*() {
                if (!s && !yc(t) && i.state === q.RECONNECTING) {
                    i.queuedRequests.push(() => p(i, void 0, void 0, function*() {
                        yield this.sendRequest(t, !0)
                    }));
                    return
                }
                if (s || (yield i.requestQueue.flush()), i.signalLatency && (yield ve(i.signalLatency)), !i.ws || i.ws.readyState !== i.ws.OPEN) {
                    i.log.error("cannot send signal request before connected, type: ".concat(t ? .case), i.logContext);
                    return
                }
                const a = new Qa({
                    message: t
                });
                try {
                    i.useJSON ? i.ws.send(a.toJsonString()) : i.ws.send(a.toBinary())
                } catch (o) {
                    i.log.error("error sending signal message", Object.assign(Object.assign({}, i.logContext), {
                        error: o
                    }))
                }
            }()
        })
    }
    handleSignalResponse(e) {
        var t, i;
        const s = e.message;
        if (s == null) {
            this.log.debug("received unsupported message", this.logContext);
            return
        }
        let r = !1;
        if (s.case === "answer") {
            const a = Un(s.value);
            this.onAnswer && this.onAnswer(a)
        } else if (s.case === "offer") {
            const a = Un(s.value);
            this.onOffer && this.onOffer(a)
        } else if (s.case === "trickle") {
            const a = JSON.parse(s.value.candidateInit);
            this.onTrickle && this.onTrickle(a, s.value.target)
        } else s.case === "update" ? this.onParticipantUpdate && this.onParticipantUpdate((t = s.value.participants) !== null && t !== void 0 ? t : []) : s.case === "trackPublished" ? this.onLocalTrackPublished && this.onLocalTrackPublished(s.value) : s.case === "speakersChanged" ? this.onSpeakersChanged && this.onSpeakersChanged((i = s.value.speakers) !== null && i !== void 0 ? i : []) : s.case === "leave" ? this.onLeave && this.onLeave(s.value) : s.case === "mute" ? this.onRemoteMuteChanged && this.onRemoteMuteChanged(s.value.sid, s.value.muted) : s.case === "roomUpdate" ? this.onRoomUpdate && s.value.room && this.onRoomUpdate(s.value.room) : s.case === "connectionQuality" ? this.onConnectionQuality && this.onConnectionQuality(s.value) : s.case === "streamStateUpdate" ? this.onStreamStateUpdate && this.onStreamStateUpdate(s.value) : s.case === "subscribedQualityUpdate" ? this.onSubscribedQualityUpdate && this.onSubscribedQualityUpdate(s.value) : s.case === "subscriptionPermissionUpdate" ? this.onSubscriptionPermissionUpdate && this.onSubscriptionPermissionUpdate(s.value) : s.case === "refreshToken" ? this.onTokenRefresh && this.onTokenRefresh(s.value) : s.case === "trackUnpublished" ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(s.value) : s.case === "subscriptionResponse" ? this.onSubscriptionError && this.onSubscriptionError(s.value) : s.case === "pong" || (s.case === "pongResp" ? (this.rtt = Date.now() - Number.parseInt(s.value.lastPingTimestamp.toString()), this.resetPingTimeout(), r = !0) : s.case === "requestResponse" ? this.onRequestResponse && this.onRequestResponse(s.value) : s.case === "trackSubscribed" ? this.onLocalTrackSubscribed && this.onLocalTrackSubscribed(s.value.trackSid) : this.log.debug("unsupported message", Object.assign(Object.assign({}, this.logContext), {
            msgCase: s.case
        })));
        r || this.resetPingTimeout()
    }
    setReconnected() {
        for (; this.queuedRequests.length > 0;) {
            const e = this.queuedRequests.shift();
            e && this.requestQueue.run(e)
        }
    }
    handleOnClose(e) {
        return p(this, void 0, void 0, function*() {
            if (this.state === q.DISCONNECTED) return;
            const t = this.onClose;
            yield this.close(), this.log.debug("websocket connection closed: ".concat(e), Object.assign(Object.assign({}, this.logContext), {
                reason: e
            })), t && t(e)
        })
    }
    handleWSError(e) {
        this.log.error("websocket error", Object.assign(Object.assign({}, this.logContext), {
            error: e
        }))
    }
    resetPingTimeout() {
        if (this.clearPingTimeout(), !this.pingTimeoutDuration) {
            this.log.warn("ping timeout duration not set", this.logContext);
            return
        }
        this.pingTimeout = $.setTimeout(() => {
            this.log.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now() - this.pingTimeoutDuration * 1e3).toUTCString()), this.logContext), this.handleOnClose("ping timeout")
        }, this.pingTimeoutDuration * 1e3)
    }
    clearPingTimeout() {
        this.pingTimeout && $.clearTimeout(this.pingTimeout)
    }
    startPingInterval() {
        if (this.clearPingInterval(), this.resetPingTimeout(), !this.pingIntervalDuration) {
            this.log.warn("ping interval duration not set", this.logContext);
            return
        }
        this.log.debug("start ping interval", this.logContext), this.pingInterval = $.setInterval(() => {
            this.sendPing()
        }, this.pingIntervalDuration * 1e3)
    }
    clearPingInterval() {
        this.log.debug("clearing ping interval", this.logContext), this.clearPingTimeout(), this.pingInterval && $.clearInterval(this.pingInterval)
    }
}

function Un(n) {
    const e = {
        type: "offer",
        sdp: n.sdp
    };
    switch (n.type) {
        case "answer":
        case "offer":
        case "pranswer":
        case "rollback":
            e.type = n.type;
            break
    }
    return e
}

function Ft(n) {
    return new Ae({
        sdp: n.sdp,
        type: n.type
    })
}

function Tc(n, e, t) {
    var i;
    const s = new URLSearchParams;
    return s.set("access_token", n), t.reconnect && (s.set("reconnect", "1"), t.sid && s.set("sid", t.sid)), s.set("auto_subscribe", t.autoSubscribe ? "1" : "0"), s.set("sdk", Pe() ? "reactnative" : "js"), s.set("version", e.version), s.set("protocol", e.protocol.toString()), e.deviceModel && s.set("device_model", e.deviceModel), e.os && s.set("os", e.os), e.osVersion && s.set("os_version", e.osVersion), e.browser && s.set("browser", e.browser), e.browserVersion && s.set("browser_version", e.browserVersion), t.adaptiveStream && s.set("adaptive_stream", "1"), t.reconnectReason && s.set("reconnect_reason", t.reconnectReason.toString()), !((i = navigator.connection) === null || i === void 0) && i.type && s.set("network", navigator.connection.type), "?".concat(s.toString())
}
var he = {},
    ni = {},
    si = {
        exports: {}
    },
    Fn;

function Rr() {
    if (Fn) return si.exports;
    Fn = 1;
    var n = si.exports = {
        v: [{
            name: "version",
            reg: /^(\d*)$/
        }],
        o: [{
            name: "origin",
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
            format: "%s %s %d %s IP%d %s"
        }],
        s: [{
            name: "name"
        }],
        i: [{
            name: "description"
        }],
        u: [{
            name: "uri"
        }],
        e: [{
            name: "email"
        }],
        p: [{
            name: "phone"
        }],
        z: [{
            name: "timezones"
        }],
        r: [{
            name: "repeats"
        }],
        t: [{
            name: "timing",
            reg: /^(\d*) (\d*)/,
            names: ["start", "stop"],
            format: "%d %d"
        }],
        c: [{
            name: "connection",
            reg: /^IN IP(\d) (\S*)/,
            names: ["version", "ip"],
            format: "IN IP%d %s"
        }],
        b: [{
            push: "bandwidth",
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: ["type", "limit"],
            format: "%s:%s"
        }],
        m: [{
            reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
            names: ["type", "port", "protocol", "payloads"],
            format: "%s %d %s %s"
        }],
        a: [{
            push: "rtp",
            reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: ["payload", "codec", "rate", "encoding"],
            format: function(e) {
                return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s"
            }
        }, {
            push: "fmtp",
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: ["payload", "config"],
            format: "fmtp:%d %s"
        }, {
            name: "control",
            reg: /^control:(.*)/,
            format: "control:%s"
        }, {
            name: "rtcp",
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: ["port", "netType", "ipVer", "address"],
            format: function(e) {
                return e.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d"
            }
        }, {
            push: "rtcpFbTrrInt",
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: ["payload", "value"],
            format: "rtcp-fb:%s trr-int %d"
        }, {
            push: "rtcpFb",
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: ["payload", "type", "subtype"],
            format: function(e) {
                return e.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s"
            }
        }, {
            push: "ext",
            reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
            names: ["value", "direction", "encrypt-uri", "uri", "config"],
            format: function(e) {
                return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "")
            }
        }, {
            name: "extmapAllowMixed",
            reg: /^(extmap-allow-mixed)/
        }, {
            push: "crypto",
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: ["id", "suite", "config", "sessionConfig"],
            format: function(e) {
                return e.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s"
            }
        }, {
            name: "setup",
            reg: /^setup:(\w*)/,
            format: "setup:%s"
        }, {
            name: "connectionType",
            reg: /^connection:(new|existing)/,
            format: "connection:%s"
        }, {
            name: "mid",
            reg: /^mid:([^\s]*)/,
            format: "mid:%s"
        }, {
            name: "msid",
            reg: /^msid:(.*)/,
            format: "msid:%s"
        }, {
            name: "ptime",
            reg: /^ptime:(\d*(?:\.\d*)*)/,
            format: "ptime:%d"
        }, {
            name: "maxptime",
            reg: /^maxptime:(\d*(?:\.\d*)*)/,
            format: "maxptime:%d"
        }, {
            name: "direction",
            reg: /^(sendrecv|recvonly|sendonly|inactive)/
        }, {
            name: "icelite",
            reg: /^(ice-lite)/
        }, {
            name: "iceUfrag",
            reg: /^ice-ufrag:(\S*)/,
            format: "ice-ufrag:%s"
        }, {
            name: "icePwd",
            reg: /^ice-pwd:(\S*)/,
            format: "ice-pwd:%s"
        }, {
            name: "fingerprint",
            reg: /^fingerprint:(\S*) (\S*)/,
            names: ["type", "hash"],
            format: "fingerprint:%s %s"
        }, {
            push: "candidates",
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
            format: function(e) {
                var t = "candidate:%s %d %s %d %s %d typ %s";
                return t += e.raddr != null ? " raddr %s rport %d" : "%v%v", t += e.tcptype != null ? " tcptype %s" : "%v", e.generation != null && (t += " generation %d"), t += e["network-id"] != null ? " network-id %d" : "%v", t += e["network-cost"] != null ? " network-cost %d" : "%v", t
            }
        }, {
            name: "endOfCandidates",
            reg: /^(end-of-candidates)/
        }, {
            name: "remoteCandidates",
            reg: /^remote-candidates:(.*)/,
            format: "remote-candidates:%s"
        }, {
            name: "iceOptions",
            reg: /^ice-options:(\S*)/,
            format: "ice-options:%s"
        }, {
            push: "ssrcs",
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: ["id", "attribute", "value"],
            format: function(e) {
                var t = "ssrc:%d";
                return e.attribute != null && (t += " %s", e.value != null && (t += ":%s")), t
            }
        }, {
            push: "ssrcGroups",
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: ["semantics", "ssrcs"],
            format: "ssrc-group:%s %s"
        }, {
            name: "msidSemantic",
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: ["semantic", "token"],
            format: "msid-semantic: %s %s"
        }, {
            push: "groups",
            reg: /^group:(\w*) (.*)/,
            names: ["type", "mids"],
            format: "group:%s %s"
        }, {
            name: "rtcpMux",
            reg: /^(rtcp-mux)/
        }, {
            name: "rtcpRsize",
            reg: /^(rtcp-rsize)/
        }, {
            name: "sctpmap",
            reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
            names: ["sctpmapNumber", "app", "maxMessageSize"],
            format: function(e) {
                return e.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s"
            }
        }, {
            name: "xGoogleFlag",
            reg: /^x-google-flag:([^\s]*)/,
            format: "x-google-flag:%s"
        }, {
            push: "rids",
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: ["id", "direction", "params"],
            format: function(e) {
                return e.params ? "rid:%s %s %s" : "rid:%s %s"
            }
        }, {
            push: "imageattrs",
            reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
            names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
            format: function(e) {
                return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "")
            }
        }, {
            name: "simulcast",
            reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
            names: ["dir1", "list1", "dir2", "list2"],
            format: function(e) {
                return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "")
            }
        }, {
            name: "simulcast_03",
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: ["value"],
            format: "simulcast: %s"
        }, {
            name: "framerate",
            reg: /^framerate:(\d+(?:$|\.\d+))/,
            format: "framerate:%s"
        }, {
            name: "sourceFilter",
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"],
            format: "source-filter: %s %s %s %s %s"
        }, {
            name: "bundleOnly",
            reg: /^(bundle-only)/
        }, {
            name: "label",
            reg: /^label:(.+)/,
            format: "label:%s"
        }, {
            name: "sctpPort",
            reg: /^sctp-port:(\d+)$/,
            format: "sctp-port:%s"
        }, {
            name: "maxMessageSize",
            reg: /^max-message-size:(\d+)$/,
            format: "max-message-size:%s"
        }, {
            push: "tsRefClocks",
            reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
            names: ["clksrc", "clksrcExt"],
            format: function(e) {
                return "ts-refclk:%s" + (e.clksrcExt != null ? "=%s" : "")
            }
        }, {
            name: "mediaClk",
            reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
            names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
            format: function(e) {
                var t = "mediaclk:";
                return t += e.id != null ? "id=%s %s" : "%v%s", t += e.mediaClockValue != null ? "=%s" : "", t += e.rateNumerator != null ? " rate=%s" : "", t += e.rateDenominator != null ? "/%s" : "", t
            }
        }, {
            name: "keywords",
            reg: /^keywds:(.+)$/,
            format: "keywds:%s"
        }, {
            name: "content",
            reg: /^content:(.+)/,
            format: "content:%s"
        }, {
            name: "bfcpFloorCtrl",
            reg: /^floorctrl:(c-only|s-only|c-s)/,
            format: "floorctrl:%s"
        }, {
            name: "bfcpConfId",
            reg: /^confid:(\d+)/,
            format: "confid:%s"
        }, {
            name: "bfcpUserId",
            reg: /^userid:(\d+)/,
            format: "userid:%s"
        }, {
            name: "bfcpFloorId",
            reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
            names: ["id", "mStream"],
            format: "floorid:%s mstrm:%s"
        }, {
            push: "invalid",
            names: ["value"]
        }]
    };
    return Object.keys(n).forEach(function(e) {
        var t = n[e];
        t.forEach(function(i) {
            i.reg || (i.reg = /(.*)/), i.format || (i.format = "%s")
        })
    }), si.exports
}
var jn;

function Cc() {
    return jn || (jn = 1, function(n) {
        var e = function(o) {
                return String(Number(o)) === o ? Number(o) : o
            },
            t = function(o, c, d, l) {
                if (l && !d) c[l] = e(o[1]);
                else
                    for (var u = 0; u < d.length; u += 1) o[u + 1] != null && (c[d[u]] = e(o[u + 1]))
            },
            i = function(o, c, d) {
                var l = o.name && o.names;
                o.push && !c[o.push] ? c[o.push] = [] : l && !c[o.name] && (c[o.name] = {});
                var u = o.push ? {} : l ? c[o.name] : c;
                t(d.match(o.reg), u, o.names, o.name), o.push && c[o.push].push(u)
            },
            s = Rr(),
            r = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
        n.parse = function(o) {
            var c = {},
                d = [],
                l = c;
            return o.split(/(\r\n|\r|\n)/).filter(r).forEach(function(u) {
                var h = u[0],
                    m = u.slice(2);
                h === "m" && (d.push({
                    rtp: [],
                    fmtp: []
                }), l = d[d.length - 1]);
                for (var k = 0; k < (s[h] || []).length; k += 1) {
                    var v = s[h][k];
                    if (v.reg.test(m)) return i(v, l, m)
                }
            }), c.media = d, c
        };
        var a = function(o, c) {
            var d = c.split(/=(.+)/, 2);
            return d.length === 2 ? o[d[0]] = e(d[1]) : d.length === 1 && c.length > 1 && (o[d[0]] = void 0), o
        };
        n.parseParams = function(o) {
            return o.split(/;\s?/).reduce(a, {})
        }, n.parseFmtpConfig = n.parseParams, n.parsePayloads = function(o) {
            return o.toString().split(" ").map(Number)
        }, n.parseRemoteCandidates = function(o) {
            for (var c = [], d = o.split(" ").map(e), l = 0; l < d.length; l += 3) c.push({
                component: d[l],
                ip: d[l + 1],
                port: d[l + 2]
            });
            return c
        }, n.parseImageAttributes = function(o) {
            return o.split(" ").map(function(c) {
                return c.substring(1, c.length - 1).split(",").reduce(a, {})
            })
        }, n.parseSimulcastStreamList = function(o) {
            return o.split(";").map(function(c) {
                return c.split(",").map(function(d) {
                    var l, u = !1;
                    return d[0] !== "~" ? l = e(d) : (l = e(d.substring(1, d.length)), u = !0), {
                        scid: l,
                        paused: u
                    }
                })
            })
        }
    }(ni)), ni
}
var ri, Bn;

function Sc() {
    if (Bn) return ri;
    Bn = 1;
    var n = Rr(),
        e = /%[sdv%]/g,
        t = function(a) {
            var o = 1,
                c = arguments,
                d = c.length;
            return a.replace(e, function(l) {
                if (o >= d) return l;
                var u = c[o];
                switch (o += 1, l) {
                    case "%%":
                        return "%";
                    case "%s":
                        return String(u);
                    case "%d":
                        return Number(u);
                    case "%v":
                        return ""
                }
            })
        },
        i = function(a, o, c) {
            var d = o.format instanceof Function ? o.format(o.push ? c : c[o.name]) : o.format,
                l = [a + "=" + d];
            if (o.names)
                for (var u = 0; u < o.names.length; u += 1) {
                    var h = o.names[u];
                    o.name ? l.push(c[o.name][h]) : l.push(c[o.names[u]])
                } else l.push(c[o.name]);
            return t.apply(null, l)
        },
        s = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
        r = ["i", "c", "b", "a"];
    return ri = function(a, o) {
        o = o || {}, a.version == null && (a.version = 0), a.name == null && (a.name = " "), a.media.forEach(function(u) {
            u.payloads == null && (u.payloads = "")
        });
        var c = o.outerOrder || s,
            d = o.innerOrder || r,
            l = [];
        return c.forEach(function(u) {
            n[u].forEach(function(h) {
                h.name in a && a[h.name] != null ? l.push(i(u, h, a)) : h.push in a && a[h.push] != null && a[h.push].forEach(function(m) {
                    l.push(i(u, h, m))
                })
            })
        }), a.media.forEach(function(u) {
            l.push(i("m", n.m[0], u)), d.forEach(function(h) {
                n[h].forEach(function(m) {
                    m.name in u && u[m.name] != null ? l.push(i(h, m, u)) : m.push in u && u[m.push] != null && u[m.push].forEach(function(k) {
                        l.push(i(h, m, k))
                    })
                })
            })
        }), l.join(`\r
`) + `\r
`
    }, ri
}
var Vn;

function Pc() {
    if (Vn) return he;
    Vn = 1;
    var n = Cc(),
        e = Sc();
    return he.write = e, he.parse = n.parse, he.parseParams = n.parseParams, he.parseFmtpConfig = n.parseFmtpConfig, he.parsePayloads = n.parsePayloads, he.parseRemoteCandidates = n.parseRemoteCandidates, he.parseImageAttributes = n.parseImageAttributes, he.parseSimulcastStreamList = n.parseSimulcastStreamList, he
}
var _e = Pc();
const Ec = .7,
    Rc = 20,
    Ye = {
        NegotiationStarted: "negotiationStarted",
        NegotiationComplete: "negotiationComplete",
        RTPVideoPayloadTypes: "rtpVideoPayloadTypes"
    };
class qn extends be.EventEmitter {
    get pc() {
        return this._pc || (this._pc = this.createPC()), this._pc
    }
    constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var i;
        super(), this.log = A, this.ddExtID = 0, this.pendingCandidates = [], this.restartingIce = !1, this.renegotiate = !1, this.trackBitrates = [], this.remoteStereoMids = [], this.remoteNackMids = [], this.negotiate = Wi(s => p(this, void 0, void 0, function*() {
            this.emit(Ye.NegotiationStarted);
            try {
                yield this.createAndSendOffer()
            } catch (r) {
                if (s) s(r);
                else throw r
            }
        }), Rc), this.close = () => {
            this._pc && (this._pc.close(), this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.ondatachannel = null, this._pc.onnegotiationneeded = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ondatachannel = null, this._pc.ontrack = null, this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc = null)
        }, this.log = Ce((i = t.loggerName) !== null && i !== void 0 ? i : ue.PCTransport), this.loggerOptions = t, this.config = e, this._pc = this.createPC()
    }
    createPC() {
        const e = new RTCPeerConnection(this.config);
        return e.onicecandidate = t => {
            var i;
            t.candidate && ((i = this.onIceCandidate) === null || i === void 0 || i.call(this, t.candidate))
        }, e.onicecandidateerror = t => {
            var i;
            (i = this.onIceCandidateError) === null || i === void 0 || i.call(this, t)
        }, e.oniceconnectionstatechange = () => {
            var t;
            (t = this.onIceConnectionStateChange) === null || t === void 0 || t.call(this, e.iceConnectionState)
        }, e.onsignalingstatechange = () => {
            var t;
            (t = this.onSignalingStatechange) === null || t === void 0 || t.call(this, e.signalingState)
        }, e.onconnectionstatechange = () => {
            var t;
            (t = this.onConnectionStateChange) === null || t === void 0 || t.call(this, e.connectionState)
        }, e.ondatachannel = t => {
            var i;
            (i = this.onDataChannel) === null || i === void 0 || i.call(this, t)
        }, e.ontrack = t => {
            var i;
            (i = this.onTrack) === null || i === void 0 || i.call(this, t)
        }, e
    }
    get logContext() {
        var e, t;
        return Object.assign({}, (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0 ? void 0 : t.call(e))
    }
    get isICEConnected() {
        return this._pc !== null && (this.pc.iceConnectionState === "connected" || this.pc.iceConnectionState === "completed")
    }
    addIceCandidate(e) {
        return p(this, void 0, void 0, function*() {
            if (this.pc.remoteDescription && !this.restartingIce) return this.pc.addIceCandidate(e);
            this.pendingCandidates.push(e)
        })
    }
    setRemoteDescription(e) {
        return p(this, void 0, void 0, function*() {
            var t;
            let i;
            if (e.type === "offer") {
                let {
                    stereoMids: s,
                    nackMids: r
                } = _c(e);
                this.remoteStereoMids = s, this.remoteNackMids = r
            } else if (e.type === "answer") {
                const s = _e.parse((t = e.sdp) !== null && t !== void 0 ? t : "");
                s.media.forEach(r => {
                    r.type === "audio" && this.trackBitrates.some(a => {
                        if (!a.transceiver || r.mid != a.transceiver.mid) return !1;
                        let o = 0;
                        if (r.rtp.some(d => d.codec.toUpperCase() === a.codec.toUpperCase() ? (o = d.payload, !0) : !1), o === 0) return !0;
                        let c = !1;
                        for (const d of r.fmtp)
                            if (d.payload === o) {
                                d.config = d.config.split(";").filter(l => !l.includes("maxaveragebitrate")).join(";"), a.maxbr > 0 && (d.config += ";maxaveragebitrate=".concat(a.maxbr * 1e3)), c = !0;
                                break
                            }
                        return c || a.maxbr > 0 && r.fmtp.push({
                            payload: o,
                            config: "maxaveragebitrate=".concat(a.maxbr * 1e3)
                        }), !0
                    })
                }), i = _e.write(s)
            }
            yield this.setMungedSDP(e, i, !0), this.pendingCandidates.forEach(s => {
                this.pc.addIceCandidate(s)
            }), this.pendingCandidates = [], this.restartingIce = !1, this.renegotiate ? (this.renegotiate = !1, yield this.createAndSendOffer()) : e.type === "answer" && (this.emit(Ye.NegotiationComplete), e.sdp && _e.parse(e.sdp).media.forEach(r => {
                r.type === "video" && this.emit(Ye.RTPVideoPayloadTypes, r.rtp)
            }))
        })
    }
    createAndSendOffer(e) {
        return p(this, void 0, void 0, function*() {
            var t;
            if (this.onOffer === void 0) return;
            if (e ? .iceRestart && (this.log.debug("restarting ICE", this.logContext), this.restartingIce = !0), this._pc && this._pc.signalingState === "have-local-offer") {
                const r = this._pc.remoteDescription;
                if (e ? .iceRestart && r) yield this._pc.setRemoteDescription(r);
                else {
                    this.renegotiate = !0;
                    return
                }
            } else if (!this._pc || this._pc.signalingState === "closed") {
                this.log.warn("could not createOffer with closed peer connection", this.logContext);
                return
            }
            this.log.debug("starting to negotiate", this.logContext);
            const i = yield this.pc.createOffer(e);
            this.log.debug("original offer", Object.assign({
                sdp: i.sdp
            }, this.logContext));
            const s = _e.parse((t = i.sdp) !== null && t !== void 0 ? t : "");
            s.media.forEach(r => {
                r.type === "audio" ? Kn(r, [], []) : r.type === "video" && this.trackBitrates.some(a => {
                    if (!r.msid || !a.cid || !r.msid.includes(a.cid)) return !1;
                    let o = 0;
                    if (r.rtp.some(d => d.codec.toUpperCase() === a.codec.toUpperCase() ? (o = d.payload, !0) : !1), o === 0 || (ct(a.codec) && this.ensureVideoDDExtensionForSVC(r, s), a.codec !== "av1")) return !0;
                    const c = Math.round(a.maxbr * Ec);
                    for (const d of r.fmtp)
                        if (d.payload === o) {
                            d.config.includes("x-google-start-bitrate") || (d.config += ";x-google-start-bitrate=".concat(c));
                            break
                        }
                    return !0
                })
            }), yield this.setMungedSDP(i, _e.write(s)), this.onOffer(i)
        })
    }
    createAndSetAnswer() {
        return p(this, void 0, void 0, function*() {
            var e;
            const t = yield this.pc.createAnswer(), i = _e.parse((e = t.sdp) !== null && e !== void 0 ? e : "");
            return i.media.forEach(s => {
                s.type === "audio" && Kn(s, this.remoteStereoMids, this.remoteNackMids)
            }), yield this.setMungedSDP(t, _e.write(i)), t
        })
    }
    createDataChannel(e, t) {
        return this.pc.createDataChannel(e, t)
    }
    addTransceiver(e, t) {
        return this.pc.addTransceiver(e, t)
    }
    addTrack(e) {
        if (!this._pc) throw new Q("PC closed, cannot add track");
        return this._pc.addTrack(e)
    }
    setTrackCodecBitrate(e) {
        this.trackBitrates.push(e)
    }
    setConfiguration(e) {
        var t;
        if (!this._pc) throw new Q("PC closed, cannot configure");
        return (t = this._pc) === null || t === void 0 ? void 0 : t.setConfiguration(e)
    }
    canRemoveTrack() {
        var e;
        return !!(!((e = this._pc) === null || e === void 0) && e.removeTrack)
    }
    removeTrack(e) {
        var t;
        return (t = this._pc) === null || t === void 0 ? void 0 : t.removeTrack(e)
    }
    getConnectionState() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.connectionState) !== null && t !== void 0 ? t : "closed"
    }
    getICEConnectionState() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.iceConnectionState) !== null && t !== void 0 ? t : "closed"
    }
    getSignallingState() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.signalingState) !== null && t !== void 0 ? t : "closed"
    }
    getTransceivers() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.getTransceivers()) !== null && t !== void 0 ? t : []
    }
    getSenders() {
        var e, t;
        return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.getSenders()) !== null && t !== void 0 ? t : []
    }
    getLocalDescription() {
        var e;
        return (e = this._pc) === null || e === void 0 ? void 0 : e.localDescription
    }
    getRemoteDescription() {
        var e;
        return (e = this.pc) === null || e === void 0 ? void 0 : e.remoteDescription
    }
    getStats() {
        return this.pc.getStats()
    }
    getConnectedAddress() {
        return p(this, void 0, void 0, function*() {
            var e;
            if (!this._pc) return;
            let t = "";
            const i = new Map,
                s = new Map;
            if ((yield this._pc.getStats()).forEach(o => {
                    switch (o.type) {
                        case "transport":
                            t = o.selectedCandidatePairId;
                            break;
                        case "candidate-pair":
                            t === "" && o.selected && (t = o.id), i.set(o.id, o);
                            break;
                        case "remote-candidate":
                            s.set(o.id, "".concat(o.address, ":").concat(o.port));
                            break
                    }
                }), t === "") return;
            const a = (e = i.get(t)) === null || e === void 0 ? void 0 : e.remoteCandidateId;
            if (a !== void 0) return s.get(a)
        })
    }
    setMungedSDP(e, t, i) {
        return p(this, void 0, void 0, function*() {
            if (t) {
                const s = e.sdp;
                e.sdp = t;
                try {
                    this.log.debug("setting munged ".concat(i ? "remote" : "local", " description"), this.logContext), i ? yield this.pc.setRemoteDescription(e): yield this.pc.setLocalDescription(e);
                    return
                } catch (r) {
                    this.log.warn("not able to set ".concat(e.type, ", falling back to unmodified sdp"), Object.assign(Object.assign({}, this.logContext), {
                        error: r,
                        sdp: t
                    })), e.sdp = s
                }
            }
            try {
                i ? yield this.pc.setRemoteDescription(e): yield this.pc.setLocalDescription(e)
            } catch (s) {
                let r = "unknown error";
                s instanceof Error ? r = s.message : typeof s == "string" && (r = s);
                const a = {
                    error: r,
                    sdp: e.sdp
                };
                throw !i && this.pc.remoteDescription && (a.remoteSdp = this.pc.remoteDescription), this.log.error("unable to set ".concat(e.type), Object.assign(Object.assign({}, this.logContext), {
                    fields: a
                })), new Si(r)
            }
        })
    }
    ensureVideoDDExtensionForSVC(e, t) {
        var i, s;
        if (!((i = e.ext) === null || i === void 0 ? void 0 : i.some(a => a.uri === Dn))) {
            if (this.ddExtID === 0) {
                let a = 0;
                t.media.forEach(o => {
                    var c;
                    o.type === "video" && ((c = o.ext) === null || c === void 0 || c.forEach(d => {
                        d.value > a && (a = d.value)
                    }))
                }), this.ddExtID = a + 1
            }(s = e.ext) === null || s === void 0 || s.push({
                value: this.ddExtID,
                uri: Dn
            })
        }
    }
}

function Kn(n, e, t) {
    let i = 0;
    n.rtp.some(s => s.codec === "opus" ? (i = s.payload, !0) : !1), i > 0 && (n.rtcpFb || (n.rtcpFb = []), t.includes(n.mid) && !n.rtcpFb.some(s => s.payload === i && s.type === "nack") && n.rtcpFb.push({
        payload: i,
        type: "nack"
    }), e.includes(n.mid) && n.fmtp.some(s => s.payload === i ? (s.config.includes("stereo=1") || (s.config += ";stereo=1"), !0) : !1))
}

function _c(n) {
    var e;
    const t = [],
        i = [],
        s = _e.parse((e = n.sdp) !== null && e !== void 0 ? e : "");
    let r = 0;
    return s.media.forEach(a => {
        var o;
        a.type === "audio" && (a.rtp.some(c => c.codec === "opus" ? (r = c.payload, !0) : !1), !((o = a.rtcpFb) === null || o === void 0) && o.some(c => c.payload === r && c.type === "nack") && i.push(a.mid), a.fmtp.some(c => c.payload === r ? (c.config.includes("sprop-stereo=1") && t.push(a.mid), !0) : !1))
    }), {
        stereoMids: t,
        nackMids: i
    }
}
const Di = "vp8",
    wc = {
        audioPreset: Pi.music,
        dtx: !0,
        red: !0,
        forceStereo: !1,
        simulcast: !0,
        screenShareEncoding: Hi.h1080fps15.encoding,
        stopMicTrackOnMute: !1,
        videoCodec: Di,
        backupCodec: !0
    },
    _r = {
        autoGainControl: !0,
        echoCancellation: !0,
        noiseSuppression: !0
    },
    wr = {
        resolution: mt.h720.resolution
    },
    Ic = {
        adaptiveStream: !1,
        dynacast: !1,
        stopLocalTrackOnUnpublish: !0,
        reconnectPolicy: new Co,
        disconnectOnPageLeave: !0,
        webAudioMix: !1
    },
    Qi = {
        autoSubscribe: !0,
        maxRetries: 1,
        peerConnectionTimeout: 15e3,
        websocketTimeout: 15e3
    };
var H;
(function(n) {
    n[n.NEW = 0] = "NEW", n[n.CONNECTING = 1] = "CONNECTING", n[n.CONNECTED = 2] = "CONNECTED", n[n.FAILED = 3] = "FAILED", n[n.CLOSING = 4] = "CLOSING", n[n.CLOSED = 5] = "CLOSED"
})(H || (H = {}));
class Oc {
    get needsPublisher() {
        return this.isPublisherConnectionRequired
    }
    get needsSubscriber() {
        return this.isSubscriberConnectionRequired
    }
    get currentState() {
        return this.state
    }
    constructor(e, t, i) {
        var s;
        this.peerConnectionTimeout = Qi.peerConnectionTimeout, this.log = A, this.updateState = () => {
            var r;
            const a = this.state,
                o = this.requiredTransports.map(c => c.getConnectionState());
            o.every(c => c === "connected") ? this.state = H.CONNECTED : o.some(c => c === "failed") ? this.state = H.FAILED : o.some(c => c === "connecting") ? this.state = H.CONNECTING : o.every(c => c === "closed") ? this.state = H.CLOSED : o.some(c => c === "closed") ? this.state = H.CLOSING : o.every(c => c === "new") && (this.state = H.NEW), a !== this.state && (this.log.debug("pc state change: from ".concat(H[a], " to ").concat(H[this.state]), this.logContext), (r = this.onStateChange) === null || r === void 0 || r.call(this, this.state, this.publisher.getConnectionState(), this.subscriber.getConnectionState()))
        }, this.log = Ce((s = i.loggerName) !== null && s !== void 0 ? s : ue.PCManager), this.loggerOptions = i, this.isPublisherConnectionRequired = !t, this.isSubscriberConnectionRequired = t, this.publisher = new qn(e, i), this.subscriber = new qn(e, i), this.publisher.onConnectionStateChange = this.updateState, this.subscriber.onConnectionStateChange = this.updateState, this.publisher.onIceConnectionStateChange = this.updateState, this.subscriber.onIceConnectionStateChange = this.updateState, this.publisher.onSignalingStatechange = this.updateState, this.subscriber.onSignalingStatechange = this.updateState, this.publisher.onIceCandidate = r => {
            var a;
            (a = this.onIceCandidate) === null || a === void 0 || a.call(this, r, le.PUBLISHER)
        }, this.subscriber.onIceCandidate = r => {
            var a;
            (a = this.onIceCandidate) === null || a === void 0 || a.call(this, r, le.SUBSCRIBER)
        }, this.subscriber.onDataChannel = r => {
            var a;
            (a = this.onDataChannel) === null || a === void 0 || a.call(this, r)
        }, this.subscriber.onTrack = r => {
            var a;
            (a = this.onTrack) === null || a === void 0 || a.call(this, r)
        }, this.publisher.onOffer = r => {
            var a;
            (a = this.onPublisherOffer) === null || a === void 0 || a.call(this, r)
        }, this.state = H.NEW, this.connectionLock = new ne, this.remoteOfferLock = new ne
    }
    get logContext() {
        var e, t;
        return Object.assign({}, (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0 ? void 0 : t.call(e))
    }
    requirePublisher() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        this.isPublisherConnectionRequired = e, this.updateState()
    }
    requireSubscriber() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        this.isSubscriberConnectionRequired = e, this.updateState()
    }
    createAndSendPublisherOffer(e) {
        return this.publisher.createAndSendOffer(e)
    }
    setPublisherAnswer(e) {
        return this.publisher.setRemoteDescription(e)
    }
    removeTrack(e) {
        return this.publisher.removeTrack(e)
    }
    close() {
        return p(this, void 0, void 0, function*() {
            if (this.publisher && this.publisher.getSignallingState() !== "closed") {
                const e = this.publisher;
                for (const t of e.getSenders()) try {
                    e.canRemoveTrack() && e.removeTrack(t)
                } catch (i) {
                    this.log.warn("could not removeTrack", Object.assign(Object.assign({}, this.logContext), {
                        error: i
                    }))
                }
            }
            yield Promise.all([this.publisher.close(), this.subscriber.close()]), this.updateState()
        })
    }
    triggerIceRestart() {
        return p(this, void 0, void 0, function*() {
            this.subscriber.restartingIce = !0, this.needsPublisher && (yield this.createAndSendPublisherOffer({
                iceRestart: !0
            }))
        })
    }
    addIceCandidate(e, t) {
        return p(this, void 0, void 0, function*() {
            t === le.PUBLISHER ? yield this.publisher.addIceCandidate(e): yield this.subscriber.addIceCandidate(e)
        })
    }
    createSubscriberAnswerFromOffer(e) {
        return p(this, void 0, void 0, function*() {
            this.log.debug("received server offer", Object.assign(Object.assign({}, this.logContext), {
                RTCSdpType: e.type,
                sdp: e.sdp,
                signalingState: this.subscriber.getSignallingState().toString()
            }));
            const t = yield this.remoteOfferLock.lock();
            try {
                return yield this.subscriber.setRemoteDescription(e), yield this.subscriber.createAndSetAnswer()
            } finally {
                t()
            }
        })
    }
    updateConfiguration(e, t) {
        this.publisher.setConfiguration(e), this.subscriber.setConfiguration(e), t && this.triggerIceRestart()
    }
    ensurePCTransportConnection(e, t) {
        return p(this, void 0, void 0, function*() {
            var i;
            const s = yield this.connectionLock.lock();
            try {
                this.isPublisherConnectionRequired && this.publisher.getConnectionState() !== "connected" && this.publisher.getConnectionState() !== "connecting" && (this.log.debug("negotiation required, start negotiating", this.logContext), this.publisher.negotiate()), yield Promise.all((i = this.requiredTransports) === null || i === void 0 ? void 0 : i.map(r => this.ensureTransportConnected(r, e, t)))
            } finally {
                s()
            }
        })
    }
    negotiate(e) {
        return p(this, void 0, void 0, function*() {
            return new Promise((t, i) => p(this, void 0, void 0, function*() {
                const s = setTimeout(() => {
                        i("negotiation timed out")
                    }, this.peerConnectionTimeout),
                    r = () => {
                        clearTimeout(s), i("negotiation aborted")
                    };
                e.signal.addEventListener("abort", r), this.publisher.once(Ye.NegotiationStarted, () => {
                    e.signal.aborted || this.publisher.once(Ye.NegotiationComplete, () => {
                        clearTimeout(s), t()
                    })
                }), yield this.publisher.negotiate(a => {
                    clearTimeout(s), i(a)
                })
            }))
        })
    }
    addPublisherTransceiver(e, t) {
        return this.publisher.addTransceiver(e, t)
    }
    addPublisherTrack(e) {
        return this.publisher.addTrack(e)
    }
    createPublisherDataChannel(e, t) {
        return this.publisher.createDataChannel(e, t)
    }
    getConnectedAddress(e) {
        return e === le.PUBLISHER ? this.publisher.getConnectedAddress() : e === le.SUBSCRIBER ? this.publisher.getConnectedAddress() : this.requiredTransports[0].getConnectedAddress()
    }
    get requiredTransports() {
        const e = [];
        return this.isPublisherConnectionRequired && e.push(this.publisher), this.isSubscriberConnectionRequired && e.push(this.subscriber), e
    }
    ensureTransportConnected(e, t) {
        return p(this, arguments, void 0, function(i, s) {
            var r = this;
            let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.peerConnectionTimeout;
            return function*() {
                if (i.getConnectionState() !== "connected") return new Promise((c, d) => p(r, void 0, void 0, function*() {
                    const l = () => {
                        this.log.warn("abort transport connection", this.logContext), $.clearTimeout(u), d(new B("room connection has been cancelled", te.Cancelled))
                    };
                    s ? .signal.aborted && l(), s ? .signal.addEventListener("abort", l);
                    const u = $.setTimeout(() => {
                        s ? .signal.removeEventListener("abort", l), d(new B("could not establish pc connection"))
                    }, a);
                    for (; this.state !== H.CONNECTED;)
                        if (yield ve(50), s ? .signal.aborted) {
                            d(new B("room connection has been cancelled", te.Cancelled));
                            return
                        }
                    $.clearTimeout(u), s ? .signal.removeEventListener("abort", l), c()
                }))
            }()
        })
    }
}
const Yi = 2e3;

function Ht(n, e) {
    if (!e) return 0;
    let t, i;
    return "bytesReceived" in n ? (t = n.bytesReceived, i = e.bytesReceived) : "bytesSent" in n && (t = n.bytesSent, i = e.bytesSent), t === void 0 || i === void 0 || n.timestamp === void 0 || e.timestamp === void 0 ? 0 : (t - i) * 8 * 1e3 / (n.timestamp - e.timestamp)
}
class Y extends Qe {
    get enhancedNoiseCancellation() {
        return this.isKrispNoiseFilterEnabled
    }
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
            s = arguments.length > 3 ? arguments[3] : void 0,
            r = arguments.length > 4 ? arguments[4] : void 0;
        super(e, C.Kind.Audio, t, i, r), this.stopOnMute = !1, this.isKrispNoiseFilterEnabled = !1, this.monitorSender = () => p(this, void 0, void 0, function*() {
            if (!this.sender) {
                this._currentBitrate = 0;
                return
            }
            let a;
            try {
                a = yield this.getSenderStats()
            } catch (o) {
                this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), {
                    error: o
                }));
                return
            }
            a && this.prevStats && (this._currentBitrate = Ht(a, this.prevStats)), this.prevStats = a
        }), this.handleKrispNoiseFilterEnable = () => {
            this.isKrispNoiseFilterEnabled = !0, this.log.debug("Krisp noise filter enabled", this.logContext), this.emit(S.AudioTrackFeatureUpdate, this, fe.TF_ENHANCED_NOISE_CANCELLATION, !0)
        }, this.handleKrispNoiseFilterDisable = () => {
            this.isKrispNoiseFilterEnabled = !1, this.log.debug("Krisp noise filter disabled", this.logContext), this.emit(S.AudioTrackFeatureUpdate, this, fe.TF_ENHANCED_NOISE_CANCELLATION, !1)
        }, this.audioContext = s, this.checkForSilence()
    }
    setDeviceId(e) {
        return p(this, void 0, void 0, function*() {
            return this._constraints.deviceId === e && this._mediaStreamTrack.getSettings().deviceId === Te(e) ? !0 : (this._constraints.deviceId = e, this.isMuted || (yield this.restartTrack()), this.isMuted || Te(e) === this._mediaStreamTrack.getSettings().deviceId)
        })
    }
    mute() {
        const e = Object.create(null, {
            mute: {
                get: () => super.mute
            }
        });
        return p(this, void 0, void 0, function*() {
            const t = yield this.muteLock.lock();
            try {
                return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === C.Source.Microphone && this.stopOnMute && !this.isUserProvided && (this.log.debug("stopping mic track", this.logContext), this._mediaStreamTrack.stop()), yield e.mute.call(this), this)
            } finally {
                t()
            }
        })
    }
    unmute() {
        const e = Object.create(null, {
            unmute: {
                get: () => super.unmute
            }
        });
        return p(this, void 0, void 0, function*() {
            const t = yield this.muteLock.lock();
            try {
                if (!this.isMuted) return this.log.debug("Track already unmuted", this.logContext), this;
                const i = this._constraints.deviceId && this._mediaStreamTrack.getSettings().deviceId !== Te(this._constraints.deviceId);
                return this.source === C.Source.Microphone && (this.stopOnMute || this._mediaStreamTrack.readyState === "ended" || i) && !this.isUserProvided && (this.log.debug("reacquiring mic track", this.logContext), yield this.restartTrack()), yield e.unmute.call(this), this
            } finally {
                t()
            }
        })
    }
    restartTrack(e) {
        return p(this, void 0, void 0, function*() {
            let t;
            if (e) {
                const i = Wt({
                    audio: e
                });
                typeof i.audio != "boolean" && (t = i.audio)
            }
            yield this.restart(t)
        })
    }
    restart(e) {
        const t = Object.create(null, {
            restart: {
                get: () => super.restart
            }
        });
        return p(this, void 0, void 0, function*() {
            const i = yield t.restart.call(this, e);
            return this.checkForSilence(), i
        })
    }
    startMonitor() {
        se() && (this.monitorInterval || (this.monitorInterval = setInterval(() => {
            this.monitorSender()
        }, Yi)))
    }
    setProcessor(e) {
        return p(this, void 0, void 0, function*() {
            var t;
            const i = yield this.processorLock.lock();
            try {
                if (!this.audioContext) throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");
                this.processor && (yield this.stopProcessor());
                const s = {
                    kind: this.kind,
                    track: this._mediaStreamTrack,
                    audioContext: this.audioContext
                };
                this.log.debug("setting up audio processor ".concat(e.name), this.logContext), yield e.init(s), this.processor = e, this.processor.processedTrack && (yield(t = this.sender) === null || t === void 0 ? void 0 : t.replaceTrack(this.processor.processedTrack), this.processor.processedTrack.addEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable), this.processor.processedTrack.addEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable)), this.emit(S.TrackProcessorUpdate, this.processor)
            } finally {
                i()
            }
        })
    }
    setAudioContext(e) {
        this.audioContext = e
    }
    getSenderStats() {
        return p(this, void 0, void 0, function*() {
            var e;
            if (!(!((e = this.sender) === null || e === void 0) && e.getStats)) return;
            const t = yield this.sender.getStats();
            let i;
            return t.forEach(s => {
                s.type === "outbound-rtp" && (i = {
                    type: "audio",
                    streamId: s.id,
                    packetsSent: s.packetsSent,
                    packetsLost: s.packetsLost,
                    bytesSent: s.bytesSent,
                    timestamp: s.timestamp,
                    roundTripTime: s.roundTripTime,
                    jitter: s.jitter
                })
            }), i
        })
    }
    checkForSilence() {
        return p(this, void 0, void 0, function*() {
            const e = yield Xo(this);
            return e && (this.isMuted || this.log.warn("silence detected on local audio track", this.logContext), this.emit(S.AudioSilenceDetected)), e
        })
    }
}

function Ir(n, e, t) {
    switch (n.kind) {
        case "audio":
            return new Y(n, e, !1, void 0, t);
        case "video":
            return new Z(n, e, !1, t);
        default:
            throw new ge("unsupported track type: ".concat(n.kind))
    }
}
const Dc = Object.values(mt),
    Mc = Object.values(Ei),
    xc = Object.values(Hi),
    Nc = [mt.h180, mt.h360],
    Ac = [Ei.h180, Ei.h360],
    Lc = n => [{
        scaleResolutionDownBy: 2,
        fps: n.encoding.maxFramerate
    }].map(t => {
        var i, s;
        return new F(Math.floor(n.width / t.scaleResolutionDownBy), Math.floor(n.height / t.scaleResolutionDownBy), Math.max(15e4, Math.floor(n.encoding.maxBitrate / (Math.pow(t.scaleResolutionDownBy, 2) * (((i = n.encoding.maxFramerate) !== null && i !== void 0 ? i : 30) / ((s = t.fps) !== null && s !== void 0 ? s : 30))))), t.fps, n.encoding.priority)
    }),
    Mi = ["q", "h", "f"];

function xi(n, e, t, i) {
    var s, r;
    let a = i ? .videoEncoding;
    n && (a = i ? .screenShareEncoding);
    const o = i ? .simulcast,
        c = i ? .scalabilityMode,
        d = i ? .videoCodec;
    if (!a && !o && !c || !e || !t) return [{}];
    a || (a = Fc(n, e, t, d), A.debug("using video encoding", a));
    const l = new F(e, t, a.maxBitrate, a.maxFramerate, a.priority);
    if (c && ct(d)) {
        const m = new Or(c),
            k = [];
        if (m.spatial > 3) throw new Error("unsupported scalabilityMode: ".concat(c));
        const v = Se();
        if (Le() || Pe() || v ? .name === "Chrome" && Ze(v ? .version, "113") < 0) {
            const E = m.suffix == "h" ? 2 : 3;
            for (let T = 0; T < m.spatial; T += 1) k.push({
                rid: Mi[2 - T],
                maxBitrate: a.maxBitrate / Math.pow(E, T),
                maxFramerate: l.encoding.maxFramerate
            });
            k[0].scalabilityMode = c
        } else k.push({
            maxBitrate: a.maxBitrate,
            maxFramerate: l.encoding.maxFramerate,
            scalabilityMode: c
        });
        return l.encoding.priority && (k[0].priority = l.encoding.priority, k[0].networkPriority = l.encoding.priority), A.debug("using svc encoding", {
            encodings: k
        }), k
    }
    if (!o) return [a];
    let u = [];
    n ? u = (s = Wn(i ? .screenShareSimulcastLayers)) !== null && s !== void 0 ? s : Gn(n, l) : u = (r = Wn(i ? .videoSimulcastLayers)) !== null && r !== void 0 ? r : Gn(n, l);
    let h;
    if (u.length > 0) {
        const m = u[0];
        u.length > 1 && ([, h] = u);
        const k = Math.max(e, t);
        if (k >= 960 && h) return ai(e, t, [m, h, l]);
        if (k >= 480) return ai(e, t, [m, l])
    }
    return ai(e, t, [l])
}

function Uc(n, e, t) {
    var i, s, r, a;
    if (!t.backupCodec || t.backupCodec === !0 || t.backupCodec.codec === t.videoCodec) return;
    e !== t.backupCodec.codec && A.warn("requested a different codec than specified as backup", {
        serverRequested: e,
        backup: t.backupCodec.codec
    }), t.videoCodec = e, t.videoEncoding = t.backupCodec.encoding;
    const o = n.mediaStreamTrack.getSettings(),
        c = (i = o.width) !== null && i !== void 0 ? i : (s = n.dimensions) === null || s === void 0 ? void 0 : s.width,
        d = (r = o.height) !== null && r !== void 0 ? r : (a = n.dimensions) === null || a === void 0 ? void 0 : a.height;
    return xi(n.source === C.Source.ScreenShare, c, d, t)
}

function Fc(n, e, t, i) {
    const s = jc(n, e, t);
    let {
        encoding: r
    } = s[0];
    const a = Math.max(e, t);
    for (let o = 0; o < s.length; o += 1) {
        const c = s[o];
        if (r = c.encoding, c.width >= a) break
    }
    if (i) switch (i) {
        case "av1":
            r = Object.assign({}, r), r.maxBitrate = r.maxBitrate * .7;
            break;
        case "vp9":
            r = Object.assign({}, r), r.maxBitrate = r.maxBitrate * .85;
            break
    }
    return r
}

function jc(n, e, t) {
    if (n) return xc;
    const i = e > t ? e / t : t / e;
    return Math.abs(i - 16 / 9) < Math.abs(i - 4 / 3) ? Dc : Mc
}

function Gn(n, e) {
    if (n) return Lc(e);
    const {
        width: t,
        height: i
    } = e, s = t > i ? t / i : i / t;
    return Math.abs(s - 16 / 9) < Math.abs(s - 4 / 3) ? Nc : Ac
}

function ai(n, e, t) {
    const i = [];
    if (t.forEach((s, r) => {
            if (r >= Mi.length) return;
            const a = Math.min(n, e),
                c = {
                    rid: Mi[r],
                    scaleResolutionDownBy: Math.max(1, a / Math.min(s.width, s.height)),
                    maxBitrate: s.encoding.maxBitrate
                };
            s.encoding.maxFramerate && (c.maxFramerate = s.encoding.maxFramerate);
            const d = $e() || r === 0;
            s.encoding.priority && d && (c.priority = s.encoding.priority, c.networkPriority = s.encoding.priority), i.push(c)
        }), Pe() && Pr() === "ios") {
        let s;
        i.forEach(a => {
            s ? a.maxFramerate && a.maxFramerate > s && (s = a.maxFramerate) : s = a.maxFramerate
        });
        let r = !0;
        i.forEach(a => {
            var o;
            a.maxFramerate != s && (r && (r = !1, A.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")), A.info('Setting framerate of encoding "'.concat((o = a.rid) !== null && o !== void 0 ? o : "", '" to ').concat(s)), a.maxFramerate = s)
        })
    }
    return i
}

function Wn(n) {
    if (n) return n.sort((e, t) => {
        const {
            encoding: i
        } = e, {
            encoding: s
        } = t;
        return i.maxBitrate > s.maxBitrate ? 1 : i.maxBitrate < s.maxBitrate ? -1 : i.maxBitrate === s.maxBitrate && i.maxFramerate && s.maxFramerate ? i.maxFramerate > s.maxFramerate ? 1 : -1 : 0
    })
}
class Or {
    constructor(e) {
        const t = e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
        if (!t) throw new Error("invalid scalability mode");
        if (this.spatial = parseInt(t[1]), this.temporal = parseInt(t[2]), t.length > 3) switch (t[3]) {
            case "h":
            case "_KEY":
            case "_KEY_SHIFT":
                this.suffix = t[3]
        }
    }
    toString() {
        var e;
        return "L".concat(this.spatial, "T").concat(this.temporal).concat((e = this.suffix) !== null && e !== void 0 ? e : "")
    }
}

function Bc(n) {
    return n.source === C.Source.ScreenShare || n.constraints.height && Te(n.constraints.height) >= 1080 ? "maintain-resolution" : "balanced"
}
const Vc = 5e3;
class Z extends Qe {
    get sender() {
        return this._sender
    }
    set sender(e) {
        this._sender = e, this.degradationPreference && this.setDegradationPreference(this.degradationPreference)
    }
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
            s = arguments.length > 3 ? arguments[3] : void 0;
        super(e, C.Kind.Video, t, i, s), this.simulcastCodecs = new Map, this.degradationPreference = "balanced", this.monitorSender = () => p(this, void 0, void 0, function*() {
            if (!this.sender) {
                this._currentBitrate = 0;
                return
            }
            let r;
            try {
                r = yield this.getSenderStats()
            } catch (o) {
                this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), {
                    error: o
                }));
                return
            }
            const a = new Map(r.map(o => [o.rid, o]));
            if (this.prevStats) {
                let o = 0;
                a.forEach((c, d) => {
                    var l;
                    const u = (l = this.prevStats) === null || l === void 0 ? void 0 : l.get(d);
                    o += Ht(c, u)
                }), this._currentBitrate = o
            }
            this.prevStats = a
        }), this.senderLock = new ne
    }
    get isSimulcast() {
        return !!(this.sender && this.sender.getParameters().encodings.length > 1)
    }
    startMonitor(e) {
        var t;
        if (this.signalClient = e, !se()) return;
        const i = (t = this.sender) === null || t === void 0 ? void 0 : t.getParameters();
        i && (this.encodings = i.encodings), !this.monitorInterval && (this.monitorInterval = setInterval(() => {
            this.monitorSender()
        }, Yi))
    }
    stop() {
        this._mediaStreamTrack.getConstraints(), this.simulcastCodecs.forEach(e => {
            e.mediaStreamTrack.stop()
        }), super.stop()
    }
    pauseUpstream() {
        const e = Object.create(null, {
            pauseUpstream: {
                get: () => super.pauseUpstream
            }
        });
        return p(this, void 0, void 0, function*() {
            var t, i, s, r, a;
            yield e.pauseUpstream.call(this);
            try {
                for (var o = !0, c = qe(this.simulcastCodecs.values()), d; d = yield c.next(), t = d.done, !t; o = !0) r = d.value, o = !1, yield(a = r.sender) === null || a === void 0 ? void 0 : a.replaceTrack(null)
            } catch (l) {
                i = {
                    error: l
                }
            } finally {
                try {
                    !o && !t && (s = c.return) && (yield s.call(c))
                } finally {
                    if (i) throw i.error
                }
            }
        })
    }
    resumeUpstream() {
        const e = Object.create(null, {
            resumeUpstream: {
                get: () => super.resumeUpstream
            }
        });
        return p(this, void 0, void 0, function*() {
            var t, i, s, r, a;
            yield e.resumeUpstream.call(this);
            try {
                for (var o = !0, c = qe(this.simulcastCodecs.values()), d; d = yield c.next(), t = d.done, !t; o = !0) {
                    r = d.value, o = !1;
                    const l = r;
                    yield(a = l.sender) === null || a === void 0 ? void 0 : a.replaceTrack(l.mediaStreamTrack)
                }
            } catch (l) {
                i = {
                    error: l
                }
            } finally {
                try {
                    !o && !t && (s = c.return) && (yield s.call(c))
                } finally {
                    if (i) throw i.error
                }
            }
        })
    }
    mute() {
        const e = Object.create(null, {
            mute: {
                get: () => super.mute
            }
        });
        return p(this, void 0, void 0, function*() {
            const t = yield this.muteLock.lock();
            try {
                return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === C.Source.Camera && !this.isUserProvided && (this.log.debug("stopping camera track", this.logContext), this._mediaStreamTrack.stop()), yield e.mute.call(this), this)
            } finally {
                t()
            }
        })
    }
    unmute() {
        const e = Object.create(null, {
            unmute: {
                get: () => super.unmute
            }
        });
        return p(this, void 0, void 0, function*() {
            const t = yield this.muteLock.lock();
            try {
                return this.isMuted ? (this.source === C.Source.Camera && !this.isUserProvided && (this.log.debug("reacquiring camera track", this.logContext), yield this.restartTrack()), yield e.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this)
            } finally {
                t()
            }
        })
    }
    setTrackMuted(e) {
        super.setTrackMuted(e);
        for (const t of this.simulcastCodecs.values()) t.mediaStreamTrack.enabled = !e
    }
    getSenderStats() {
        return p(this, void 0, void 0, function*() {
            var e;
            if (!(!((e = this.sender) === null || e === void 0) && e.getStats)) return [];
            const t = [],
                i = yield this.sender.getStats();
            return i.forEach(s => {
                var r;
                if (s.type === "outbound-rtp") {
                    const a = {
                            type: "video",
                            streamId: s.id,
                            frameHeight: s.frameHeight,
                            frameWidth: s.frameWidth,
                            framesPerSecond: s.framesPerSecond,
                            framesSent: s.framesSent,
                            firCount: s.firCount,
                            pliCount: s.pliCount,
                            nackCount: s.nackCount,
                            packetsSent: s.packetsSent,
                            bytesSent: s.bytesSent,
                            qualityLimitationReason: s.qualityLimitationReason,
                            qualityLimitationDurations: s.qualityLimitationDurations,
                            qualityLimitationResolutionChanges: s.qualityLimitationResolutionChanges,
                            rid: (r = s.rid) !== null && r !== void 0 ? r : s.id,
                            retransmittedPacketsSent: s.retransmittedPacketsSent,
                            targetBitrate: s.targetBitrate,
                            timestamp: s.timestamp
                        },
                        o = i.get(s.remoteId);
                    o && (a.jitter = o.jitter, a.packetsLost = o.packetsLost, a.roundTripTime = o.roundTripTime), t.push(a)
                }
            }), t.sort((s, r) => {
                var a, o;
                return ((a = r.frameWidth) !== null && a !== void 0 ? a : 0) - ((o = s.frameWidth) !== null && o !== void 0 ? o : 0)
            }), t
        })
    }
    setPublishingQuality(e) {
        const t = [];
        for (let i = ae.LOW; i <= ae.HIGH; i += 1) t.push(new qi({
            quality: i,
            enabled: i <= e
        }));
        this.log.debug("setting publishing quality. max quality ".concat(e), this.logContext), this.setPublishingLayers(t)
    }
    setDeviceId(e) {
        return p(this, void 0, void 0, function*() {
            return this._constraints.deviceId === e && this._mediaStreamTrack.getSettings().deviceId === Te(e) ? !0 : (this._constraints.deviceId = e, this.isMuted || (yield this.restartTrack()), this.isMuted || Te(e) === this._mediaStreamTrack.getSettings().deviceId)
        })
    }
    restartTrack(e) {
        return p(this, void 0, void 0, function*() {
            var t, i, s, r;
            let a;
            if (e) {
                const l = Wt({
                    video: e
                });
                typeof l.video != "boolean" && (a = l.video)
            }
            yield this.restart(a);
            try {
                for (var o = !0, c = qe(this.simulcastCodecs.values()), d; d = yield c.next(), t = d.done, !t; o = !0) {
                    r = d.value, o = !1;
                    const l = r;
                    l.sender && (l.mediaStreamTrack = this.mediaStreamTrack.clone(), yield l.sender.replaceTrack(l.mediaStreamTrack))
                }
            } catch (l) {
                i = {
                    error: l
                }
            } finally {
                try {
                    !o && !t && (s = c.return) && (yield s.call(c))
                } finally {
                    if (i) throw i.error
                }
            }
        })
    }
    setProcessor(e) {
        const t = Object.create(null, {
            setProcessor: {
                get: () => super.setProcessor
            }
        });
        return p(this, arguments, void 0, function(i) {
            var s = this;
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return function*() {
                var a, o, c, d, l, u;
                if (yield t.setProcessor.call(s, i, r), !((l = s.processor) === null || l === void 0) && l.processedTrack) try {
                    for (var h = !0, m = qe(s.simulcastCodecs.values()), k; k = yield m.next(), a = k.done, !a; h = !0) d = k.value, h = !1, yield(u = d.sender) === null || u === void 0 ? void 0 : u.replaceTrack(s.processor.processedTrack)
                } catch (v) {
                    o = {
                        error: v
                    }
                } finally {
                    try {
                        !h && !a && (c = m.return) && (yield c.call(m))
                    } finally {
                        if (o) throw o.error
                    }
                }
            }()
        })
    }
    setDegradationPreference(e) {
        return p(this, void 0, void 0, function*() {
            if (this.degradationPreference = e, this.sender) try {
                this.log.debug("setting degradationPreference to ".concat(e), this.logContext);
                const t = this.sender.getParameters();
                t.degradationPreference = e, this.sender.setParameters(t)
            } catch (t) {
                this.log.warn("failed to set degradationPreference", Object.assign({
                    error: t
                }, this.logContext))
            }
        })
    }
    addSimulcastTrack(e, t) {
        if (this.simulcastCodecs.has(e)) {
            this.log.error("".concat(e, " already added, skipping adding simulcast codec"), this.logContext);
            return
        }
        const i = {
            codec: e,
            mediaStreamTrack: this.mediaStreamTrack.clone(),
            sender: void 0,
            encodings: t
        };
        return this.simulcastCodecs.set(e, i), i
    }
    setSimulcastTrackSender(e, t) {
        const i = this.simulcastCodecs.get(e);
        i && (i.sender = t, setTimeout(() => {
            this.subscribedCodecs && this.setPublishingCodecs(this.subscribedCodecs)
        }, Vc))
    }
    setPublishingCodecs(e) {
        return p(this, void 0, void 0, function*() {
            var t, i, s, r, a, o, c;
            if (this.log.debug("setting publishing codecs", Object.assign(Object.assign({}, this.logContext), {
                    codecs: e,
                    currentCodec: this.codec
                })), !this.codec && e.length > 0) return yield this.setPublishingLayers(e[0].qualities), [];
            this.subscribedCodecs = e;
            const d = [];
            try {
                for (t = !0, i = qe(e); s = yield i.next(), r = s.done, !r; t = !0) {
                    c = s.value, t = !1;
                    const l = c;
                    if (!this.codec || this.codec === l.codec) yield this.setPublishingLayers(l.qualities);
                    else {
                        const u = this.simulcastCodecs.get(l.codec);
                        if (this.log.debug("try setPublishingCodec for ".concat(l.codec), Object.assign(Object.assign({}, this.logContext), {
                                simulcastCodecInfo: u
                            })), !u || !u.sender) {
                            for (const h of l.qualities)
                                if (h.enabled) {
                                    d.push(l.codec);
                                    break
                                }
                        } else u.encodings && (this.log.debug("try setPublishingLayersForSender ".concat(l.codec), this.logContext), yield Hn(u.sender, u.encodings, l.qualities, this.senderLock, this.log, this.logContext))
                    }
                }
            } catch (l) {
                a = {
                    error: l
                }
            } finally {
                try {
                    !t && !r && (o = i.return) && (yield o.call(i))
                } finally {
                    if (a) throw a.error
                }
            }
            return d
        })
    }
    setPublishingLayers(e) {
        return p(this, void 0, void 0, function*() {
            this.log.debug("setting publishing layers", Object.assign(Object.assign({}, this.logContext), {
                qualities: e
            })), !(!this.sender || !this.encodings) && (yield Hn(this.sender, this.encodings, e, this.senderLock, this.log, this.logContext))
        })
    }
    handleAppVisibilityChanged() {
        const e = Object.create(null, {
            handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged
            }
        });
        return p(this, void 0, void 0, function*() {
            yield e.handleAppVisibilityChanged.call(this), Cr() && this.isInBackground && this.source === C.Source.Camera && (this._mediaStreamTrack.enabled = !1)
        })
    }
}

function Hn(n, e, t, i, s, r) {
    return p(this, void 0, void 0, function*() {
        const a = yield i.lock();
        s.debug("setPublishingLayersForSender", Object.assign(Object.assign({}, r), {
            sender: n,
            qualities: t,
            senderEncodings: e
        }));
        try {
            const o = n.getParameters(),
                {
                    encodings: c
                } = o;
            if (!c) return;
            if (c.length !== e.length) {
                s.warn("cannot set publishing layers, encodings mismatch", Object.assign(Object.assign({}, r), {
                    encodings: c,
                    senderEncodings: e
                }));
                return
            }
            let d = !1;
            !1 && c[0].scalabilityMode || c.forEach((u, h) => {
                var m;
                let k = (m = u.rid) !== null && m !== void 0 ? m : "";
                k === "" && (k = "q");
                const v = Dr(k),
                    E = t.find(T => T.quality === v);
                E && u.active !== E.enabled && (d = !0, u.active = E.enabled, s.debug("setting layer ".concat(E.quality, " to ").concat(u.active ? "enabled" : "disabled"), r), $e() && (E.enabled ? (u.scaleResolutionDownBy = e[h].scaleResolutionDownBy, u.maxBitrate = e[h].maxBitrate, u.maxFrameRate = e[h].maxFrameRate) : (u.scaleResolutionDownBy = 4, u.maxBitrate = 10, u.maxFrameRate = 2)))
            }), d && (o.encodings = c, s.debug("setting encodings", Object.assign(Object.assign({}, r), {
                encodings: o.encodings
            })), yield n.setParameters(o))
        } finally {
            a()
        }
    })
}

function Dr(n) {
    switch (n) {
        case "f":
            return ae.HIGH;
        case "h":
            return ae.MEDIUM;
        case "q":
            return ae.LOW;
        default:
            return ae.HIGH
    }
}

function zn(n, e, t, i) {
    if (!t) return [new Ne({
        quality: ae.HIGH,
        width: n,
        height: e,
        bitrate: 0,
        ssrc: 0
    })];
    if (i) {
        const s = t[0].scalabilityMode,
            r = new Or(s),
            a = [],
            o = r.suffix == "h" ? 1.5 : 2,
            c = r.suffix == "h" ? 2 : 3;
        for (let d = 0; d < r.spatial; d += 1) a.push(new Ne({
            quality: Math.min(ae.HIGH, r.spatial - 1) - d,
            width: Math.ceil(n / Math.pow(o, d)),
            height: Math.ceil(e / Math.pow(o, d)),
            bitrate: t[0].maxBitrate ? Math.ceil(t[0].maxBitrate / Math.pow(c, d)) : 0,
            ssrc: 0
        }));
        return a
    }
    return t.map(s => {
        var r, a, o;
        const c = (r = s.scaleResolutionDownBy) !== null && r !== void 0 ? r : 1;
        let d = Dr((a = s.rid) !== null && a !== void 0 ? a : "");
        return new Ne({
            quality: d,
            width: Math.ceil(n / c),
            height: Math.ceil(e / c),
            bitrate: (o = s.maxBitrate) !== null && o !== void 0 ? o : 0,
            ssrc: 0
        })
    })
}
const Jn = "_lossy",
    Qn = "_reliable",
    qc = 2 * 1e3,
    oi = "leave-reconnect";
var oe;
(function(n) {
    n[n.New = 0] = "New", n[n.Connected = 1] = "Connected", n[n.Disconnected = 2] = "Disconnected", n[n.Reconnecting = 3] = "Reconnecting", n[n.Closed = 4] = "Closed"
})(oe || (oe = {}));
class Kc extends be.EventEmitter {
    get isClosed() {
        return this._isClosed
    }
    get pendingReconnect() {
        return !!this.reconnectTimeout
    }
    constructor(e) {
        var t;
        super(), this.options = e, this.rtcConfig = {}, this.peerConnectionTimeout = Qi.peerConnectionTimeout, this.fullReconnectOnNext = !1, this.subscriberPrimary = !1, this.pcState = oe.New, this._isClosed = !0, this.pendingTrackResolvers = {}, this.reconnectAttempts = 0, this.reconnectStart = 0, this.attemptingReconnect = !1, this.joinAttempts = 0, this.maxJoinAttempts = 1, this.shouldFailNext = !1, this.log = A, this.handleDataChannel = i => p(this, [i], void 0, function(s) {
            var r = this;
            let {
                channel: a
            } = s;
            return function*() {
                if (a) {
                    if (a.label === Qn) r.reliableDCSub = a;
                    else if (a.label === Jn) r.lossyDCSub = a;
                    else return;
                    r.log.debug("on data channel ".concat(a.id, ", ").concat(a.label), r.logContext), a.onmessage = r.handleDataMessage
                }
            }()
        }), this.handleDataMessage = i => p(this, void 0, void 0, function*() {
            var s, r;
            const a = yield this.dataProcessLock.lock();
            try {
                let o;
                if (i.data instanceof ArrayBuffer) o = i.data;
                else if (i.data instanceof Blob) o = yield i.data.arrayBuffer();
                else {
                    this.log.error("unsupported data type", Object.assign(Object.assign({}, this.logContext), {
                        data: i.data
                    }));
                    return
                }
                const c = Re.fromBinary(new Uint8Array(o));
                ((s = c.value) === null || s === void 0 ? void 0 : s.case) === "speaker" ? this.emit(w.ActiveSpeakersUpdate, c.value.value.speakers): (((r = c.value) === null || r === void 0 ? void 0 : r.case) === "user" && Wc(c, c.value.value), this.emit(w.DataPacketReceived, c))
            } finally {
                a()
            }
        }), this.handleDataError = i => {
            const r = i.currentTarget.maxRetransmits === 0 ? "lossy" : "reliable";
            if (i instanceof ErrorEvent && i.error) {
                const {
                    error: a
                } = i.error;
                this.log.error("DataChannel error on ".concat(r, ": ").concat(i.message), Object.assign(Object.assign({}, this.logContext), {
                    error: a
                }))
            } else this.log.error("Unknown DataChannel error on ".concat(r), Object.assign(Object.assign({}, this.logContext), {
                event: i
            }))
        }, this.handleBufferedAmountLow = i => {
            const r = i.currentTarget.maxRetransmits === 0 ? V.LOSSY : V.RELIABLE;
            this.updateAndEmitDCBufferStatus(r)
        }, this.handleDisconnect = (i, s) => {
            if (this._isClosed) return;
            this.log.warn("".concat(i, " disconnected"), this.logContext), this.reconnectAttempts === 0 && (this.reconnectStart = Date.now());
            const r = c => {
                    this.log.warn("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(c, "ms. giving up"), this.logContext), this.emit(w.Disconnected), this.close()
                },
                a = Date.now() - this.reconnectStart;
            let o = this.getNextRetryDelay({
                elapsedMs: a,
                retryCount: this.reconnectAttempts
            });
            if (o === null) {
                r(a);
                return
            }
            i === oi && (o = 0), this.log.debug("reconnecting in ".concat(o, "ms"), this.logContext), this.clearReconnectTimeout(), this.token && this.regionUrlProvider && this.regionUrlProvider.updateToken(this.token), this.reconnectTimeout = $.setTimeout(() => this.attemptReconnect(s).finally(() => this.reconnectTimeout = void 0), o)
        }, this.waitForRestarted = () => new Promise((i, s) => {
            this.pcState === oe.Connected && i();
            const r = () => {
                    this.off(w.Disconnected, a), i()
                },
                a = () => {
                    this.off(w.Restarted, r), s()
                };
            this.once(w.Restarted, r), this.once(w.Disconnected, a)
        }), this.updateAndEmitDCBufferStatus = i => {
            const s = this.isBufferStatusLow(i);
            typeof s < "u" && s !== this.dcBufferStatus.get(i) && (this.dcBufferStatus.set(i, s), this.emit(w.DCBufferStatusChanged, s, i))
        }, this.isBufferStatusLow = i => {
            const s = this.dataChannelForKind(i);
            if (s) return s.bufferedAmount <= s.bufferedAmountLowThreshold
        }, this.handleBrowserOnLine = () => {
            this.client.currentState === q.RECONNECTING && (this.clearReconnectTimeout(), this.attemptReconnect(Be.RR_SIGNAL_DISCONNECTED))
        }, this.log = Ce((t = e.loggerName) !== null && t !== void 0 ? t : ue.Engine), this.loggerOptions = {
            loggerName: e.loggerName,
            loggerContextCb: () => this.logContext
        }, this.client = new Ji(void 0, this.loggerOptions), this.client.signalLatency = this.options.expSignalLatency, this.reconnectPolicy = this.options.reconnectPolicy, this.registerOnLineListener(), this.closingLock = new ne, this.dataProcessLock = new ne, this.dcBufferStatus = new Map([
            [V.LOSSY, !0],
            [V.RELIABLE, !0]
        ]), this.client.onParticipantUpdate = i => this.emit(w.ParticipantUpdate, i), this.client.onConnectionQuality = i => this.emit(w.ConnectionQualityUpdate, i), this.client.onRoomUpdate = i => this.emit(w.RoomUpdate, i), this.client.onSubscriptionError = i => this.emit(w.SubscriptionError, i), this.client.onSubscriptionPermissionUpdate = i => this.emit(w.SubscriptionPermissionUpdate, i), this.client.onSpeakersChanged = i => this.emit(w.SpeakersChanged, i), this.client.onStreamStateUpdate = i => this.emit(w.StreamStateChanged, i), this.client.onRequestResponse = i => this.emit(w.SignalRequestResponse, i)
    }
    get logContext() {
        var e, t, i, s, r, a, o, c;
        return {
            room: (t = (e = this.latestJoinResponse) === null || e === void 0 ? void 0 : e.room) === null || t === void 0 ? void 0 : t.name,
            roomID: (s = (i = this.latestJoinResponse) === null || i === void 0 ? void 0 : i.room) === null || s === void 0 ? void 0 : s.sid,
            participant: (a = (r = this.latestJoinResponse) === null || r === void 0 ? void 0 : r.participant) === null || a === void 0 ? void 0 : a.identity,
            pID: (c = (o = this.latestJoinResponse) === null || o === void 0 ? void 0 : o.participant) === null || c === void 0 ? void 0 : c.sid
        }
    }
    join(e, t, i, s) {
        return p(this, void 0, void 0, function*() {
            this.url = e, this.token = t, this.signalOpts = i, this.maxJoinAttempts = i.maxRetries;
            try {
                this.joinAttempts += 1, this.setupSignalClientCallbacks();
                const r = yield this.client.join(e, t, i, s);
                return this._isClosed = !1, this.latestJoinResponse = r, this.subscriberPrimary = r.subscriberPrimary, this.pcManager || (yield this.configure(r)), (!this.subscriberPrimary || r.fastPublish) && this.negotiate(), this.clientConfiguration = r.clientConfiguration, r
            } catch (r) {
                if (r instanceof B && r.reason === te.ServerUnreachable && (this.log.warn("Couldn't connect to server, attempt ".concat(this.joinAttempts, " of ").concat(this.maxJoinAttempts), this.logContext), this.joinAttempts < this.maxJoinAttempts)) return this.join(e, t, i, s);
                throw r
            }
        })
    }
    close() {
        return p(this, void 0, void 0, function*() {
            const e = yield this.closingLock.lock();
            if (this.isClosed) {
                e();
                return
            }
            try {
                this._isClosed = !0, this.joinAttempts = 0, this.emit(w.Closing), this.removeAllListeners(), this.deregisterOnLineListener(), this.clearPendingReconnect(), yield this.cleanupPeerConnections(), yield this.cleanupClient()
            } finally {
                e()
            }
        })
    }
    cleanupPeerConnections() {
        return p(this, void 0, void 0, function*() {
            var e;
            yield(e = this.pcManager) === null || e === void 0 ? void 0 : e.close(), this.pcManager = void 0;
            const t = i => {
                i && (i.close(), i.onbufferedamountlow = null, i.onclose = null, i.onclosing = null, i.onerror = null, i.onmessage = null, i.onopen = null)
            };
            t(this.lossyDC), t(this.lossyDCSub), t(this.reliableDC), t(this.reliableDCSub), this.lossyDC = void 0, this.lossyDCSub = void 0, this.reliableDC = void 0, this.reliableDCSub = void 0
        })
    }
    cleanupClient() {
        return p(this, void 0, void 0, function*() {
            yield this.client.close(), this.client.resetCallbacks()
        })
    }
    addTrack(e) {
        if (this.pendingTrackResolvers[e.cid]) throw new ge("a track with the same ID has already been published");
        return new Promise((t, i) => {
            const s = setTimeout(() => {
                delete this.pendingTrackResolvers[e.cid], i(new B("publication of local track timed out, no response from server"))
            }, 1e4);
            this.pendingTrackResolvers[e.cid] = {
                resolve: r => {
                    clearTimeout(s), t(r)
                },
                reject: () => {
                    clearTimeout(s), i(new Error("Cancelled publication by calling unpublish"))
                }
            }, this.client.sendAddTrack(e)
        })
    }
    removeTrack(e) {
        if (e.track && this.pendingTrackResolvers[e.track.id]) {
            const {
                reject: t
            } = this.pendingTrackResolvers[e.track.id];
            t && t(), delete this.pendingTrackResolvers[e.track.id]
        }
        try {
            return this.pcManager.removeTrack(e), !0
        } catch (t) {
            this.log.warn("failed to remove track", Object.assign(Object.assign({}, this.logContext), {
                error: t
            }))
        }
        return !1
    }
    updateMuteStatus(e, t) {
        this.client.sendMuteTrack(e, t)
    }
    get dataSubscriberReadyState() {
        var e;
        return (e = this.reliableDCSub) === null || e === void 0 ? void 0 : e.readyState
    }
    getConnectedServerAddress() {
        return p(this, void 0, void 0, function*() {
            var e;
            return (e = this.pcManager) === null || e === void 0 ? void 0 : e.getConnectedAddress()
        })
    }
    setRegionUrlProvider(e) {
        this.regionUrlProvider = e
    }
    configure(e) {
        return p(this, void 0, void 0, function*() {
            var t, i;
            if (this.pcManager && this.pcManager.currentState !== H.NEW) return;
            this.participantSid = (t = e.participant) === null || t === void 0 ? void 0 : t.sid;
            const s = this.makeRTCConfiguration(e);
            this.pcManager = new Oc(s, e.subscriberPrimary, this.loggerOptions), this.emit(w.TransportsCreated, this.pcManager.publisher, this.pcManager.subscriber), this.pcManager.onIceCandidate = (r, a) => {
                this.client.sendIceCandidate(r, a)
            }, this.pcManager.onPublisherOffer = r => {
                this.client.sendOffer(r)
            }, this.pcManager.onDataChannel = this.handleDataChannel, this.pcManager.onStateChange = (r, a, o) => p(this, void 0, void 0, function*() {
                if (this.log.debug("primary PC state changed ".concat(r), this.logContext), ["closed", "disconnected", "failed"].includes(a) && (this.publisherConnectionPromise = void 0), r === H.CONNECTED) {
                    const l = this.pcState === oe.New;
                    this.pcState = oe.Connected, l && this.emit(w.Connected, e)
                } else r === H.FAILED && this.pcState === oe.Connected && (this.pcState = oe.Disconnected, this.handleDisconnect("peerconnection failed", o === "failed" ? Be.RR_SUBSCRIBER_FAILED : Be.RR_PUBLISHER_FAILED));
                const c = this.client.isDisconnected || this.client.currentState === q.RECONNECTING,
                    d = [H.FAILED, H.CLOSING, H.CLOSED].includes(r);
                c && d && !this._isClosed && this.emit(w.Offline)
            }), this.pcManager.onTrack = r => {
                this.emit(w.MediaTrackAdded, r.track, r.streams[0], r.receiver)
            }, Gc((i = e.serverInfo) === null || i === void 0 ? void 0 : i.protocol) || this.createDataChannels()
        })
    }
    setupSignalClientCallbacks() {
        this.client.onAnswer = e => p(this, void 0, void 0, function*() {
            this.pcManager && (this.log.debug("received server answer", Object.assign(Object.assign({}, this.logContext), {
                RTCSdpType: e.type
            })), yield this.pcManager.setPublisherAnswer(e))
        }), this.client.onTrickle = (e, t) => {
            this.pcManager && (this.log.trace("got ICE candidate from peer", Object.assign(Object.assign({}, this.logContext), {
                candidate: e,
                target: t
            })), this.pcManager.addIceCandidate(e, t))
        }, this.client.onOffer = e => p(this, void 0, void 0, function*() {
            if (!this.pcManager) return;
            const t = yield this.pcManager.createSubscriberAnswerFromOffer(e);
            this.client.sendAnswer(t)
        }), this.client.onLocalTrackPublished = e => {
            var t;
            if (this.log.debug("received trackPublishedResponse", Object.assign(Object.assign({}, this.logContext), {
                    cid: e.cid,
                    track: (t = e.track) === null || t === void 0 ? void 0 : t.sid
                })), !this.pendingTrackResolvers[e.cid]) {
                this.log.error("missing track resolver for ".concat(e.cid), Object.assign(Object.assign({}, this.logContext), {
                    cid: e.cid
                }));
                return
            }
            const {
                resolve: i
            } = this.pendingTrackResolvers[e.cid];
            delete this.pendingTrackResolvers[e.cid], i(e.track)
        }, this.client.onLocalTrackUnpublished = e => {
            this.emit(w.LocalTrackUnpublished, e)
        }, this.client.onLocalTrackSubscribed = e => {
            this.emit(w.LocalTrackSubscribed, e)
        }, this.client.onTokenRefresh = e => {
            this.token = e
        }, this.client.onRemoteMuteChanged = (e, t) => {
            this.emit(w.RemoteMute, e, t)
        }, this.client.onSubscribedQualityUpdate = e => {
            this.emit(w.SubscribedQualityUpdate, e)
        }, this.client.onClose = () => {
            this.handleDisconnect("signal", Be.RR_SIGNAL_DISCONNECTED)
        }, this.client.onLeave = e => {
            switch (this.log.debug("client leave request", Object.assign(Object.assign({}, this.logContext), {
                reason: e ? .reason
            })), e.regions && this.regionUrlProvider && (this.log.debug("updating regions", this.logContext), this.regionUrlProvider.setServerReportedRegions(e.regions)), e.action) {
                case He.DISCONNECT:
                    this.emit(w.Disconnected, e ? .reason), this.close();
                    break;
                case He.RECONNECT:
                    this.fullReconnectOnNext = !0, this.handleDisconnect(oi);
                    break;
                case He.RESUME:
                    this.handleDisconnect(oi)
            }
        }
    }
    makeRTCConfiguration(e) {
        var t;
        const i = Object.assign({}, this.rtcConfig);
        if (!((t = this.signalOpts) === null || t === void 0) && t.e2eeEnabled && (this.log.debug("E2EE - setting up transports with insertable streams", this.logContext), i.encodedInsertableStreams = !0), e.iceServers && !i.iceServers) {
            const s = [];
            e.iceServers.forEach(r => {
                const a = {
                    urls: r.urls
                };
                r.username && (a.username = r.username), r.credential && (a.credential = r.credential), s.push(a)
            }), i.iceServers = s
        }
        return e.clientConfiguration && e.clientConfiguration.forceRelay === ht.ENABLED && (i.iceTransportPolicy = "relay"), i.sdpSemantics = "unified-plan", i.continualGatheringPolicy = "gather_continually", i
    }
    createDataChannels() {
        this.pcManager && (this.lossyDC && (this.lossyDC.onmessage = null, this.lossyDC.onerror = null), this.reliableDC && (this.reliableDC.onmessage = null, this.reliableDC.onerror = null), this.lossyDC = this.pcManager.createPublisherDataChannel(Jn, {
            ordered: !0,
            maxRetransmits: 0
        }), this.reliableDC = this.pcManager.createPublisherDataChannel(Qn, {
            ordered: !0
        }), this.lossyDC.onmessage = this.handleDataMessage, this.reliableDC.onmessage = this.handleDataMessage, this.lossyDC.onerror = this.handleDataError, this.reliableDC.onerror = this.handleDataError, this.lossyDC.bufferedAmountLowThreshold = 65535, this.reliableDC.bufferedAmountLowThreshold = 65535, this.lossyDC.onbufferedamountlow = this.handleBufferedAmountLow, this.reliableDC.onbufferedamountlow = this.handleBufferedAmountLow)
    }
    createSender(e, t, i) {
        return p(this, void 0, void 0, function*() {
            if (_i()) return yield this.createTransceiverRTCRtpSender(e, t, i);
            if (wi()) return this.log.warn("using add-track fallback", this.logContext), yield this.createRTCRtpSender(e.mediaStreamTrack);
            throw new Q("Required webRTC APIs not supported on this device")
        })
    }
    createSimulcastSender(e, t, i, s) {
        return p(this, void 0, void 0, function*() {
            if (_i()) return this.createSimulcastTransceiverSender(e, t, i, s);
            if (wi()) return this.log.debug("using add-track fallback", this.logContext), this.createRTCRtpSender(e.mediaStreamTrack);
            throw new Q("Cannot stream on this device")
        })
    }
    createTransceiverRTCRtpSender(e, t, i) {
        return p(this, void 0, void 0, function*() {
            if (!this.pcManager) throw new Q("publisher is closed");
            const s = [];
            e.mediaStream && s.push(e.mediaStream), e instanceof Z && (e.codec = t.videoCodec);
            const r = {
                direction: "sendonly",
                streams: s
            };
            return i && (r.sendEncodings = i), (yield this.pcManager.addPublisherTransceiver(e.mediaStreamTrack, r)).sender
        })
    }
    createSimulcastTransceiverSender(e, t, i, s) {
        return p(this, void 0, void 0, function*() {
            if (!this.pcManager) throw new Q("publisher is closed");
            const r = {
                direction: "sendonly"
            };
            s && (r.sendEncodings = s);
            const a = yield this.pcManager.addPublisherTransceiver(t.mediaStreamTrack, r);
            if (i.videoCodec) return e.setSimulcastTrackSender(i.videoCodec, a.sender), a.sender
        })
    }
    createRTCRtpSender(e) {
        return p(this, void 0, void 0, function*() {
            if (!this.pcManager) throw new Q("publisher is closed");
            return this.pcManager.addPublisherTrack(e)
        })
    }
    attemptReconnect(e) {
        return p(this, void 0, void 0, function*() {
            var t, i, s;
            if (!this._isClosed) {
                if (this.attemptingReconnect) {
                    A.warn("already attempting reconnect, returning early", this.logContext);
                    return
                }(((t = this.clientConfiguration) === null || t === void 0 ? void 0 : t.resumeConnection) === ht.DISABLED || ((s = (i = this.pcManager) === null || i === void 0 ? void 0 : i.currentState) !== null && s !== void 0 ? s : H.NEW) === H.NEW) && (this.fullReconnectOnNext = !0);
                try {
                    this.attemptingReconnect = !0, this.fullReconnectOnNext ? yield this.restartConnection(): yield this.resumeConnection(e), this.clearPendingReconnect(), this.fullReconnectOnNext = !1
                } catch (r) {
                    this.reconnectAttempts += 1;
                    let a = !0;
                    r instanceof Q ? (this.log.debug("received unrecoverable error", Object.assign(Object.assign({}, this.logContext), {
                        error: r
                    })), a = !1) : r instanceof Ve || (this.fullReconnectOnNext = !0), a ? this.handleDisconnect("reconnect", Be.RR_UNKNOWN) : (this.log.info("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms. giving up"), this.logContext), this.emit(w.Disconnected), yield this.close())
                } finally {
                    this.attemptingReconnect = !1
                }
            }
        })
    }
    getNextRetryDelay(e) {
        try {
            return this.reconnectPolicy.nextRetryDelayInMs(e)
        } catch (t) {
            this.log.warn("encountered error in reconnect policy", Object.assign(Object.assign({}, this.logContext), {
                error: t
            }))
        }
        return null
    }
    restartConnection(e) {
        return p(this, void 0, void 0, function*() {
            var t, i, s;
            try {
                if (!this.url || !this.token) throw new Q("could not reconnect, url or token not saved");
                this.log.info("reconnecting, attempt: ".concat(this.reconnectAttempts), this.logContext), this.emit(w.Restarting), this.client.isDisconnected || (yield this.client.sendLeave()), yield this.cleanupPeerConnections(), yield this.cleanupClient();
                let r;
                try {
                    if (!this.signalOpts) throw this.log.warn("attempted connection restart, without signal options present", this.logContext), new Ve;
                    r = yield this.join(e ? ? this.url, this.token, this.signalOpts)
                } catch (a) {
                    throw a instanceof B && a.reason === te.NotAllowed ? new Q("could not reconnect, token might be expired") : new Ve
                }
                if (this.shouldFailNext) throw this.shouldFailNext = !1, new Error("simulated failure");
                if (this.client.setReconnected(), this.emit(w.SignalRestarted, r), yield this.waitForPCReconnected(), this.client.currentState !== q.CONNECTED) throw new Ve("Signal connection got severed during reconnect");
                (t = this.regionUrlProvider) === null || t === void 0 || t.resetAttempts(), this.emit(w.Restarted)
            } catch (r) {
                const a = yield(i = this.regionUrlProvider) === null || i === void 0 ? void 0 : i.getNextBestRegionUrl();
                if (a) {
                    yield this.restartConnection(a);
                    return
                } else throw (s = this.regionUrlProvider) === null || s === void 0 || s.resetAttempts(), r
            }
        })
    }
    resumeConnection(e) {
        return p(this, void 0, void 0, function*() {
            var t;
            if (!this.url || !this.token) throw new Q("could not reconnect, url or token not saved");
            if (!this.pcManager) throw new Q("publisher and subscriber connections unset");
            this.log.info("resuming signal connection, attempt ".concat(this.reconnectAttempts), this.logContext), this.emit(w.Resuming);
            let i;
            try {
                this.setupSignalClientCallbacks(), i = yield this.client.reconnect(this.url, this.token, this.participantSid, e)
            } catch (s) {
                let r = "";
                throw s instanceof Error && (r = s.message, this.log.error(s.message, Object.assign(Object.assign({}, this.logContext), {
                    error: s
                }))), s instanceof B && s.reason === te.NotAllowed ? new Q("could not reconnect, token might be expired") : s instanceof B && s.reason === te.LeaveRequest ? s : new Ve(r)
            }
            if (this.emit(w.SignalResumed), i) {
                const s = this.makeRTCConfiguration(i);
                this.pcManager.updateConfiguration(s)
            } else this.log.warn("Did not receive reconnect response", this.logContext);
            if (this.shouldFailNext) throw this.shouldFailNext = !1, new Error("simulated failure");
            if (yield this.pcManager.triggerIceRestart(), yield this.waitForPCReconnected(), this.client.currentState !== q.CONNECTED) throw new Ve("Signal connection got severed during reconnect");
            this.client.setReconnected(), ((t = this.reliableDC) === null || t === void 0 ? void 0 : t.readyState) === "open" && this.reliableDC.id === null && this.createDataChannels(), this.emit(w.Resumed)
        })
    }
    waitForPCInitialConnection(e, t) {
        return p(this, void 0, void 0, function*() {
            if (!this.pcManager) throw new Q("PC manager is closed");
            yield this.pcManager.ensurePCTransportConnection(t, e)
        })
    }
    waitForPCReconnected() {
        return p(this, void 0, void 0, function*() {
            this.pcState = oe.Reconnecting, this.log.debug("waiting for peer connection to reconnect", this.logContext);
            try {
                if (yield ve(qc), !this.pcManager) throw new Q("PC manager is closed");
                yield this.pcManager.ensurePCTransportConnection(void 0, this.peerConnectionTimeout), this.pcState = oe.Connected
            } catch (e) {
                throw this.pcState = oe.Disconnected, new B("could not establish PC connection, ".concat(e.message))
            }
        })
    }
    sendDataPacket(e, t) {
        return p(this, void 0, void 0, function*() {
            const i = e.toBinary();
            yield this.ensurePublisherConnected(t);
            const s = this.dataChannelForKind(t);
            s && s.send(i), this.updateAndEmitDCBufferStatus(t)
        })
    }
    ensureDataTransportConnected(e) {
        return p(this, arguments, void 0, function(t) {
            var i = this;
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.subscriberPrimary;
            return function*() {
                var r;
                if (!i.pcManager) throw new Q("PC manager is closed");
                const a = s ? i.pcManager.subscriber : i.pcManager.publisher,
                    o = s ? "Subscriber" : "Publisher";
                if (!a) throw new B("".concat(o, " connection not set"));
                let c = !1;
                !s && !i.dataChannelForKind(t, s) && (i.createDataChannels(), c = !0), !c && !s && !i.pcManager.publisher.isICEConnected && i.pcManager.publisher.getICEConnectionState() !== "checking" && (c = !0), c && i.negotiate();
                const d = i.dataChannelForKind(t, s);
                if (d ? .readyState === "open") return;
                const l = new Date().getTime() + i.peerConnectionTimeout;
                for (; new Date().getTime() < l;) {
                    if (a.isICEConnected && ((r = i.dataChannelForKind(t, s)) === null || r === void 0 ? void 0 : r.readyState) === "open") return;
                    yield ve(50)
                }
                throw new B("could not establish ".concat(o, " connection, state: ").concat(a.getICEConnectionState()))
            }()
        })
    }
    ensurePublisherConnected(e) {
        return p(this, void 0, void 0, function*() {
            this.publisherConnectionPromise || (this.publisherConnectionPromise = this.ensureDataTransportConnected(e, !1)), yield this.publisherConnectionPromise
        })
    }
    verifyTransport() {
        return !(!this.pcManager || this.pcManager.currentState !== H.CONNECTED || !this.client.ws || this.client.ws.readyState === WebSocket.CLOSED)
    }
    negotiate() {
        return p(this, void 0, void 0, function*() {
            return new Promise((e, t) => p(this, void 0, void 0, function*() {
                if (!this.pcManager) {
                    t(new Si("PC manager is closed"));
                    return
                }
                this.pcManager.requirePublisher(), this.pcManager.publisher.getTransceivers().length == 0 && !this.lossyDC && !this.reliableDC && this.createDataChannels();
                const i = new AbortController,
                    s = () => {
                        i.abort(), this.log.debug("engine disconnected while negotiation was ongoing", this.logContext), e()
                    };
                this.isClosed && t("cannot negotiate on closed engine"), this.on(w.Closing, s), this.pcManager.publisher.once(Ye.RTPVideoPayloadTypes, r => {
                    const a = new Map;
                    r.forEach(o => {
                        const c = o.codec.toLowerCase();
                        hc(c) && a.set(o.payload, c)
                    }), this.emit(w.RTPVideoMapUpdate, a)
                });
                try {
                    yield this.pcManager.negotiate(i), e()
                } catch (r) {
                    r instanceof Si && (this.fullReconnectOnNext = !0), this.handleDisconnect("negotiation", Be.RR_UNKNOWN), t(r)
                } finally {
                    this.off(w.Closing, s)
                }
            }))
        })
    }
    dataChannelForKind(e, t) {
        if (t) {
            if (e === V.LOSSY) return this.lossyDCSub;
            if (e === V.RELIABLE) return this.reliableDCSub
        } else {
            if (e === V.LOSSY) return this.lossyDC;
            if (e === V.RELIABLE) return this.reliableDC
        }
    }
    sendSyncState(e, t) {
        var i, s;
        if (!this.pcManager) {
            this.log.warn("sync state cannot be sent without peer connection setup", this.logContext);
            return
        }
        const r = this.pcManager.subscriber.getLocalDescription(),
            a = this.pcManager.subscriber.getRemoteDescription(),
            o = (s = (i = this.signalOpts) === null || i === void 0 ? void 0 : i.autoSubscribe) !== null && s !== void 0 ? s : !0,
            c = new Array,
            d = new Array;
        e.forEach(l => {
            l.isDesired !== o && c.push(l.trackSid), l.isEnabled || d.push(l.trackSid)
        }), this.client.sendSyncState(new js({
            answer: r ? Ft({
                sdp: r.sdp,
                type: r.type
            }) : void 0,
            offer: a ? Ft({
                sdp: a.sdp,
                type: a.type
            }) : void 0,
            subscription: new qt({
                trackSids: c,
                subscribe: !o,
                participantTracks: []
            }),
            publishTracks: Zo(t),
            dataChannels: this.dataChannelsInfo(),
            trackSidsDisabled: d
        }))
    }
    failNext() {
        this.shouldFailNext = !0
    }
    dataChannelsInfo() {
        const e = [],
            t = (i, s) => {
                i ? .id !== void 0 && i.id !== null && e.push(new Bs({
                    label: i.label,
                    id: i.id,
                    target: s
                }))
            };
        return t(this.dataChannelForKind(V.LOSSY), le.PUBLISHER), t(this.dataChannelForKind(V.RELIABLE), le.PUBLISHER), t(this.dataChannelForKind(V.LOSSY, !0), le.SUBSCRIBER), t(this.dataChannelForKind(V.RELIABLE, !0), le.SUBSCRIBER), e
    }
    clearReconnectTimeout() {
        this.reconnectTimeout && $.clearTimeout(this.reconnectTimeout)
    }
    clearPendingReconnect() {
        this.clearReconnectTimeout(), this.reconnectAttempts = 0
    }
    registerOnLineListener() {
        se() && window.addEventListener("online", this.handleBrowserOnLine)
    }
    deregisterOnLineListener() {
        se() && window.removeEventListener("online", this.handleBrowserOnLine)
    }
}
class Ve extends Error {}

function Gc(n) {
    return n !== void 0 && n > 13
}

function Wc(n, e) {
    const t = n.participantIdentity ? n.participantIdentity : e.participantIdentity;
    n.participantIdentity = t, e.participantIdentity = t;
    const i = n.destinationIdentities.length !== 0 ? n.destinationIdentities : e.destinationIdentities;
    n.destinationIdentities = i, e.destinationIdentities = i
}
class Yn {
    constructor(e, t) {
        this.lastUpdateAt = 0, this.settingsCacheTime = 3e3, this.attemptedRegions = [], this.serverUrl = new URL(e), this.token = t
    }
    updateToken(e) {
        this.token = e
    }
    isCloud() {
        return Oi(this.serverUrl)
    }
    getServerUrl() {
        return this.serverUrl
    }
    getNextBestRegionUrl(e) {
        return p(this, void 0, void 0, function*() {
            if (!this.isCloud()) throw Error("region availability is only supported for LiveKit Cloud domains");
            (!this.regionSettings || Date.now() - this.lastUpdateAt > this.settingsCacheTime) && (this.regionSettings = yield this.fetchRegionSettings(e));
            const t = this.regionSettings.regions.filter(i => !this.attemptedRegions.find(s => s.url === i.url));
            if (t.length > 0) {
                const i = t[0];
                return this.attemptedRegions.push(i), A.debug("next region: ".concat(i.region)), i.url
            } else return null
        })
    }
    resetAttempts() {
        this.attemptedRegions = []
    }
    fetchRegionSettings(e) {
        return p(this, void 0, void 0, function*() {
            const t = yield fetch("".concat(Hc(this.serverUrl), "/regions"), {
                headers: {
                    authorization: "Bearer ".concat(this.token)
                },
                signal: e
            });
            if (t.ok) {
                const i = yield t.json();
                return this.lastUpdateAt = Date.now(), i
            } else throw new B("Could not fetch region settings: ".concat(t.statusText), t.status === 401 ? te.NotAllowed : void 0, t.status)
        })
    }
    setServerReportedRegions(e) {
        this.regionSettings = e, this.lastUpdateAt = Date.now()
    }
}

function Hc(n) {
    return "".concat(n.protocol.replace("ws", "http"), "//").concat(n.host, "/settings")
}
class W extends Error {
    constructor(e, t, i) {
        super(t), this.code = e, this.message = $n(t, W.MAX_MESSAGE_BYTES), this.data = i ? $n(i, W.MAX_DATA_BYTES) : void 0
    }
    static fromProto(e) {
        return new W(e.code, e.message, e.data)
    }
    toProto() {
        return new Rs({
            code: this.code,
            message: this.message,
            data: this.data
        })
    }
    static builtIn(e, t) {
        return new W(W.ErrorCode[e], W.ErrorMessage[e], t)
    }
}
W.MAX_MESSAGE_BYTES = 256;
W.MAX_DATA_BYTES = 15360;
W.ErrorCode = {
    APPLICATION_ERROR: 1500,
    CONNECTION_TIMEOUT: 1501,
    RESPONSE_TIMEOUT: 1502,
    RECIPIENT_DISCONNECTED: 1503,
    RESPONSE_PAYLOAD_TOO_LARGE: 1504,
    SEND_FAILED: 1505,
    UNSUPPORTED_METHOD: 1400,
    RECIPIENT_NOT_FOUND: 1401,
    REQUEST_PAYLOAD_TOO_LARGE: 1402,
    UNSUPPORTED_SERVER: 1403,
    UNSUPPORTED_VERSION: 1404
};
W.ErrorMessage = {
    APPLICATION_ERROR: "Application error in method handler",
    CONNECTION_TIMEOUT: "Connection timeout",
    RESPONSE_TIMEOUT: "Response timeout",
    RECIPIENT_DISCONNECTED: "Recipient disconnected",
    RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large",
    SEND_FAILED: "Failed to send",
    UNSUPPORTED_METHOD: "Method not supported at destination",
    RECIPIENT_NOT_FOUND: "Recipient not found",
    REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large",
    UNSUPPORTED_SERVER: "RPC not supported by server",
    UNSUPPORTED_VERSION: "Unsupported RPC version"
};
const Xn = 15360;

function Ni(n) {
    return new TextEncoder().encode(n).length
}

function $n(n, e) {
    if (Ni(n) <= e) return n;
    let t = 0,
        i = n.length;
    const s = new TextEncoder;
    for (; t < i;) {
        const r = Math.floor((t + i + 1) / 2);
        s.encode(n.slice(0, r)).length <= e ? t = r : i = r - 1
    }
    return n.slice(0, t)
}
class Mr extends C {
    constructor(e, t, i, s, r) {
        super(e, i, r), this.sid = t, this.receiver = s
    }
    setMuted(e) {
        this.isMuted !== e && (this.isMuted = e, this._mediaStreamTrack.enabled = !e, this.emit(e ? S.Muted : S.Unmuted, this))
    }
    setMediaStream(e) {
        this.mediaStream = e;
        const t = i => {
            i.track === this._mediaStreamTrack && (e.removeEventListener("removetrack", t), this.receiver && "playoutDelayHint" in this.receiver && (this.receiver.playoutDelayHint = void 0), this.receiver = void 0, this._currentBitrate = 0, this.emit(S.Ended, this))
        };
        e.addEventListener("removetrack", t)
    }
    start() {
        this.startMonitor(), super.enable()
    }
    stop() {
        this.stopMonitor(), super.disable()
    }
    getRTCStatsReport() {
        return p(this, void 0, void 0, function*() {
            var e;
            return !((e = this.receiver) === null || e === void 0) && e.getStats ? yield this.receiver.getStats(): void 0
        })
    }
    setPlayoutDelay(e) {
        this.receiver ? "playoutDelayHint" in this.receiver ? this.receiver.playoutDelayHint = e : this.log.warn("Playout delay not supported in this browser") : this.log.warn("Cannot set playout delay, track already ended")
    }
    getPlayoutDelay() {
        if (this.receiver) {
            if ("playoutDelayHint" in this.receiver) return this.receiver.playoutDelayHint;
            this.log.warn("Playout delay not supported in this browser")
        } else this.log.warn("Cannot get playout delay, track already ended");
        return 0
    }
    startMonitor() {
        this.monitorInterval || (this.monitorInterval = setInterval(() => this.monitorReceiver(), Yi)), ec() && this.registerTimeSyncUpdate()
    }
    registerTimeSyncUpdate() {
        const e = () => {
            var t;
            this.timeSyncHandle = requestAnimationFrame(() => e());
            const i = (t = this.receiver) === null || t === void 0 ? void 0 : t.getSynchronizationSources()[0];
            if (i) {
                const {
                    timestamp: s,
                    rtpTimestamp: r
                } = i;
                r && this.rtpTimestamp !== r && (this.emit(S.TimeSyncUpdate, {
                    timestamp: s,
                    rtpTimestamp: r
                }), this.rtpTimestamp = r)
            }
        };
        e()
    }
}
class lt extends Mr {
    constructor(e, t, i, s, r, a) {
        super(e, t, C.Kind.Audio, i, a), this.monitorReceiver = () => p(this, void 0, void 0, function*() {
            if (!this.receiver) {
                this._currentBitrate = 0;
                return
            }
            const o = yield this.getReceiverStats();
            o && this.prevStats && this.receiver && (this._currentBitrate = Ht(o, this.prevStats)), this.prevStats = o
        }), this.audioContext = s, this.webAudioPluginNodes = [], r && (this.sinkId = r.deviceId)
    }
    setVolume(e) {
        var t;
        for (const i of this.attachedElements) this.audioContext ? (t = this.gainNode) === null || t === void 0 || t.gain.setTargetAtTime(e, 0, .1) : i.volume = e;
        Pe() && this._mediaStreamTrack._setVolume(e), this.elementVolume = e
    }
    getVolume() {
        if (this.elementVolume) return this.elementVolume;
        if (Pe()) return 1;
        let e = 0;
        return this.attachedElements.forEach(t => {
            t.volume > e && (e = t.volume)
        }), e
    }
    setSinkId(e) {
        return p(this, void 0, void 0, function*() {
            this.sinkId = e, yield Promise.all(this.attachedElements.map(t => {
                if (Ii(t)) return t.setSinkId(e)
            }))
        })
    }
    attach(e) {
        const t = this.attachedElements.length === 0;
        return e ? super.attach(e) : e = super.attach(), this.sinkId && Ii(e) && e.setSinkId(this.sinkId), this.audioContext && t && (this.log.debug("using audio context mapping", this.logContext), this.connectWebAudio(this.audioContext, e), e.volume = 0, e.muted = !0), this.elementVolume && this.setVolume(this.elementVolume), e
    }
    detach(e) {
        let t;
        return e ? (t = super.detach(e), this.audioContext && (this.attachedElements.length > 0 ? this.connectWebAudio(this.audioContext, this.attachedElements[0]) : this.disconnectWebAudio())) : (t = super.detach(), this.disconnectWebAudio()), t
    }
    setAudioContext(e) {
        this.audioContext = e, e && this.attachedElements.length > 0 ? this.connectWebAudio(e, this.attachedElements[0]) : e || this.disconnectWebAudio()
    }
    setWebAudioPlugins(e) {
        this.webAudioPluginNodes = e, this.attachedElements.length > 0 && this.audioContext && this.connectWebAudio(this.audioContext, this.attachedElements[0])
    }
    connectWebAudio(e, t) {
        this.disconnectWebAudio(), this.sourceNode = e.createMediaStreamSource(t.srcObject);
        let i = this.sourceNode;
        this.webAudioPluginNodes.forEach(s => {
            i.connect(s), i = s
        }), this.gainNode = e.createGain(), i.connect(this.gainNode), this.gainNode.connect(e.destination), this.elementVolume && this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, .1), e.state !== "running" && e.resume().then(() => {
            e.state !== "running" && this.emit(S.AudioPlaybackFailed, new Error("Audio Context couldn't be started automatically"))
        }).catch(s => {
            this.emit(S.AudioPlaybackFailed, s)
        })
    }
    disconnectWebAudio() {
        var e, t;
        (e = this.gainNode) === null || e === void 0 || e.disconnect(), (t = this.sourceNode) === null || t === void 0 || t.disconnect(), this.gainNode = void 0, this.sourceNode = void 0
    }
    getReceiverStats() {
        return p(this, void 0, void 0, function*() {
            if (!this.receiver || !this.receiver.getStats) return;
            const e = yield this.receiver.getStats();
            let t;
            return e.forEach(i => {
                i.type === "inbound-rtp" && (t = {
                    type: "audio",
                    timestamp: i.timestamp,
                    jitter: i.jitter,
                    bytesReceived: i.bytesReceived,
                    concealedSamples: i.concealedSamples,
                    concealmentEvents: i.concealmentEvents,
                    silentConcealedSamples: i.silentConcealedSamples,
                    silentConcealmentEvents: i.silentConcealmentEvents,
                    totalAudioEnergy: i.totalAudioEnergy,
                    totalSamplesDuration: i.totalSamplesDuration
                })
            }), t
        })
    }
}
const ci = 100;
class ut extends Mr {
    constructor(e, t, i, s, r) {
        super(e, t, C.Kind.Video, i, r), this.elementInfos = [], this.monitorReceiver = () => p(this, void 0, void 0, function*() {
            if (!this.receiver) {
                this._currentBitrate = 0;
                return
            }
            const a = yield this.getReceiverStats();
            a && this.prevStats && this.receiver && (this._currentBitrate = Ht(a, this.prevStats)), this.prevStats = a
        }), this.debouncedHandleResize = Wi(() => {
            this.updateDimensions()
        }, ci), this.adaptiveStreamSettings = s
    }
    get isAdaptiveStream() {
        return this.adaptiveStreamSettings !== void 0
    }
    get mediaStreamTrack() {
        return this._mediaStreamTrack
    }
    setMuted(e) {
        super.setMuted(e), this.attachedElements.forEach(t => {
            e ? Je(this._mediaStreamTrack, t) : Ge(this._mediaStreamTrack, t)
        })
    }
    attach(e) {
        if (e ? super.attach(e) : e = super.attach(), this.adaptiveStreamSettings && this.elementInfos.find(t => t.element === e) === void 0) {
            const t = new zc(e);
            this.observeElementInfo(t)
        }
        return e
    }
    observeElementInfo(e) {
        this.adaptiveStreamSettings && this.elementInfos.find(t => t === e) === void 0 ? (e.handleResize = () => {
            this.debouncedHandleResize()
        }, e.handleVisibilityChanged = () => {
            this.updateVisibility()
        }, this.elementInfos.push(e), e.observe(), this.debouncedHandleResize(), this.updateVisibility()) : this.log.warn("visibility resize observer not triggered", this.logContext)
    }
    stopObservingElementInfo(e) {
        if (!this.isAdaptiveStream) {
            this.log.warn("stopObservingElementInfo ignored", this.logContext);
            return
        }
        const t = this.elementInfos.filter(i => i === e);
        for (const i of t) i.stopObserving();
        this.elementInfos = this.elementInfos.filter(i => i !== e), this.updateVisibility(), this.debouncedHandleResize()
    }
    detach(e) {
        let t = [];
        if (e) return this.stopObservingElement(e), super.detach(e);
        t = super.detach();
        for (const i of t) this.stopObservingElement(i);
        return t
    }
    getDecoderImplementation() {
        var e;
        return (e = this.prevStats) === null || e === void 0 ? void 0 : e.decoderImplementation
    }
    getReceiverStats() {
        return p(this, void 0, void 0, function*() {
            if (!this.receiver || !this.receiver.getStats) return;
            const e = yield this.receiver.getStats();
            let t, i = "",
                s = new Map;
            return e.forEach(r => {
                r.type === "inbound-rtp" ? (i = r.codecId, t = {
                    type: "video",
                    framesDecoded: r.framesDecoded,
                    framesDropped: r.framesDropped,
                    framesReceived: r.framesReceived,
                    packetsReceived: r.packetsReceived,
                    packetsLost: r.packetsLost,
                    frameWidth: r.frameWidth,
                    frameHeight: r.frameHeight,
                    pliCount: r.pliCount,
                    firCount: r.firCount,
                    nackCount: r.nackCount,
                    jitter: r.jitter,
                    timestamp: r.timestamp,
                    bytesReceived: r.bytesReceived,
                    decoderImplementation: r.decoderImplementation
                }) : r.type === "codec" && s.set(r.id, r)
            }), t && i !== "" && s.get(i) && (t.mimeType = s.get(i).mimeType), t
        })
    }
    stopObservingElement(e) {
        const t = this.elementInfos.filter(i => i.element === e);
        for (const i of t) this.stopObservingElementInfo(i)
    }
    handleAppVisibilityChanged() {
        const e = Object.create(null, {
            handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged
            }
        });
        return p(this, void 0, void 0, function*() {
            yield e.handleAppVisibilityChanged.call(this), this.isAdaptiveStream && this.updateVisibility()
        })
    }
    updateVisibility() {
        var e, t;
        const i = this.elementInfos.reduce((o, c) => Math.max(o, c.visibilityChangedAt || 0), 0),
            s = !((t = (e = this.adaptiveStreamSettings) === null || e === void 0 ? void 0 : e.pauseVideoInBackground) !== null && t !== void 0) || t ? this.isInBackground : !1,
            r = this.elementInfos.some(o => o.pictureInPicture),
            a = this.elementInfos.some(o => o.visible) && !s || r;
        if (this.lastVisible !== a) {
            if (!a && Date.now() - i < ci) {
                $.setTimeout(() => {
                    this.updateVisibility()
                }, ci);
                return
            }
            this.lastVisible = a, this.emit(S.VisibilityChanged, a, this)
        }
    }
    updateDimensions() {
        var e, t;
        let i = 0,
            s = 0;
        const r = this.getPixelDensity();
        for (const a of this.elementInfos) {
            const o = a.width() * r,
                c = a.height() * r;
            o + c > i + s && (i = o, s = c)
        }((e = this.lastDimensions) === null || e === void 0 ? void 0 : e.width) === i && ((t = this.lastDimensions) === null || t === void 0 ? void 0 : t.height) === s || (this.lastDimensions = {
            width: i,
            height: s
        }, this.emit(S.VideoDimensionsChanged, this.lastDimensions, this))
    }
    getPixelDensity() {
        var e;
        const t = (e = this.adaptiveStreamSettings) === null || e === void 0 ? void 0 : e.pixelDensity;
        return t === "screen" ? Mn() : t || (Mn() > 2 ? 2 : 1)
    }
}
class zc {
    get visible() {
        return this.isPiP || this.isIntersecting
    }
    get pictureInPicture() {
        return this.isPiP
    }
    constructor(e, t) {
        this.onVisibilityChanged = i => {
            var s;
            const {
                target: r,
                isIntersecting: a
            } = i;
            r === this.element && (this.isIntersecting = a, this.visibilityChangedAt = Date.now(), (s = this.handleVisibilityChanged) === null || s === void 0 || s.call(this))
        }, this.onEnterPiP = () => {
            var i;
            this.isPiP = !0, (i = this.handleVisibilityChanged) === null || i === void 0 || i.call(this)
        }, this.onLeavePiP = () => {
            var i;
            this.isPiP = !1, (i = this.handleVisibilityChanged) === null || i === void 0 || i.call(this)
        }, this.element = e, this.isIntersecting = t ? ? Zn(e), this.isPiP = se() && document.pictureInPictureElement === e, this.visibilityChangedAt = 0
    }
    width() {
        return this.element.clientWidth
    }
    height() {
        return this.element.clientHeight
    }
    observe() {
        this.isIntersecting = Zn(this.element), this.isPiP = document.pictureInPictureElement === this.element, this.element.handleResize = () => {
            var e;
            (e = this.handleResize) === null || e === void 0 || e.call(this)
        }, this.element.handleVisibilityChanged = this.onVisibilityChanged, Nn().observe(this.element), xn().observe(this.element), this.element.addEventListener("enterpictureinpicture", this.onEnterPiP), this.element.addEventListener("leavepictureinpicture", this.onLeavePiP)
    }
    stopObserving() {
        var e, t;
        (e = Nn()) === null || e === void 0 || e.unobserve(this.element), (t = xn()) === null || t === void 0 || t.unobserve(this.element), this.element.removeEventListener("enterpictureinpicture", this.onEnterPiP), this.element.removeEventListener("leavepictureinpicture", this.onLeavePiP)
    }
}

function Zn(n) {
    let e = n.offsetTop,
        t = n.offsetLeft;
    const i = n.offsetWidth,
        s = n.offsetHeight,
        {
            hidden: r
        } = n,
        {
            opacity: a,
            display: o
        } = getComputedStyle(n);
    for (; n.offsetParent;) n = n.offsetParent, e += n.offsetTop, t += n.offsetLeft;
    return e < window.pageYOffset + window.innerHeight && t < window.pageXOffset + window.innerWidth && e + s > window.pageYOffset && t + i > window.pageXOffset && !r && (a !== "" ? parseFloat(a) > 0 : !0) && o !== "none"
}
class ke extends be.EventEmitter {
    constructor(e, t, i, s) {
        var r;
        super(), this.metadataMuted = !1, this.encryption = re.NONE, this.log = A, this.handleMuted = () => {
            this.emit(S.Muted)
        }, this.handleUnmuted = () => {
            this.emit(S.Unmuted)
        }, this.log = Ce((r = s ? .loggerName) !== null && r !== void 0 ? r : ue.Publication), this.loggerContextCb = this.loggerContextCb, this.setMaxListeners(100), this.kind = e, this.trackSid = t, this.trackName = i, this.source = C.Source.Unknown
    }
    setTrack(e) {
        this.track && (this.track.off(S.Muted, this.handleMuted), this.track.off(S.Unmuted, this.handleUnmuted)), this.track = e, e && (e.on(S.Muted, this.handleMuted), e.on(S.Unmuted, this.handleUnmuted))
    }
    get logContext() {
        var e;
        return Object.assign(Object.assign({}, (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)), j(this))
    }
    get isMuted() {
        return this.metadataMuted
    }
    get isEnabled() {
        return !0
    }
    get isSubscribed() {
        return this.track !== void 0
    }
    get isEncrypted() {
        return this.encryption !== re.NONE
    }
    get audioTrack() {
        if (this.track instanceof Y || this.track instanceof lt) return this.track
    }
    get videoTrack() {
        if (this.track instanceof Z || this.track instanceof ut) return this.track
    }
    updateInfo(e) {
        this.trackSid = e.sid, this.trackName = e.name, this.source = C.sourceFromProto(e.source), this.mimeType = e.mimeType, this.kind === C.Kind.Video && e.width > 0 && (this.dimensions = {
            width: e.width,
            height: e.height
        }, this.simulcasted = e.simulcast), this.encryption = e.encryption, this.trackInfo = e, this.log.debug("update publication info", Object.assign(Object.assign({}, this.logContext), {
            info: e
        }))
    }
}(function(n) {
    (function(e) {
        e.Desired = "desired", e.Subscribed = "subscribed", e.Unsubscribed = "unsubscribed"
    })(n.SubscriptionStatus || (n.SubscriptionStatus = {})),
    function(e) {
        e.Allowed = "allowed", e.NotAllowed = "not_allowed"
    }(n.PermissionStatus || (n.PermissionStatus = {}))
})(ke || (ke = {}));
class jt extends ke {
    get isUpstreamPaused() {
        var e;
        return (e = this.track) === null || e === void 0 ? void 0 : e.isUpstreamPaused
    }
    constructor(e, t, i, s) {
        super(e, t.sid, t.name, s), this.track = void 0, this.handleTrackEnded = () => {
            this.emit(S.Ended)
        }, this.updateInfo(t), this.setTrack(i)
    }
    setTrack(e) {
        this.track && this.track.off(S.Ended, this.handleTrackEnded), super.setTrack(e), e && e.on(S.Ended, this.handleTrackEnded)
    }
    get isMuted() {
        return this.track ? this.track.isMuted : super.isMuted
    }
    get audioTrack() {
        return super.audioTrack
    }
    get videoTrack() {
        return super.videoTrack
    }
    mute() {
        return p(this, void 0, void 0, function*() {
            var e;
            return (e = this.track) === null || e === void 0 ? void 0 : e.mute()
        })
    }
    unmute() {
        return p(this, void 0, void 0, function*() {
            var e;
            return (e = this.track) === null || e === void 0 ? void 0 : e.unmute()
        })
    }
    pauseUpstream() {
        return p(this, void 0, void 0, function*() {
            var e;
            yield(e = this.track) === null || e === void 0 ? void 0 : e.pauseUpstream()
        })
    }
    resumeUpstream() {
        return p(this, void 0, void 0, function*() {
            var e;
            yield(e = this.track) === null || e === void 0 ? void 0 : e.resumeUpstream()
        })
    }
    getTrackFeatures() {
        var e;
        if (this.track instanceof Y) {
            const t = this.track.mediaStreamTrack.getSettings(),
                i = new Set;
            return t.autoGainControl && i.add(fe.TF_AUTO_GAIN_CONTROL), t.echoCancellation && i.add(fe.TF_ECHO_CANCELLATION), t.noiseSuppression && i.add(fe.TF_NOISE_SUPPRESSION), t.channelCount && t.channelCount > 1 && i.add(fe.TF_STEREO), !((e = this.options) === null || e === void 0) && e.dtx || i.add(fe.TF_NO_DTX), this.track.enhancedNoiseCancellation && i.add(fe.TF_ENHANCED_NOISE_CANCELLATION), Array.from(i.values())
        } else return []
    }
}

function xr(n) {
    let e, t;
    return typeof n.audio == "object" && n.audio.processor && (e = n.audio.processor), typeof n.video == "object" && n.video.processor && (t = n.video.processor), {
        audioProcessor: e,
        videoProcessor: t
    }
}

function Nr(n) {
    return p(this, void 0, void 0, function*() {
        var e, t;
        n ? ? (n = {}), (e = n.audio) !== null && e !== void 0 || (n.audio = !0), (t = n.video) !== null && t !== void 0 || (n.video = !0);
        const {
            audioProcessor: i,
            videoProcessor: s
        } = xr(n), r = Tr(n, _r, wr), a = Wt(r), o = navigator.mediaDevices.getUserMedia(a);
        n.audio && (X.userMediaPromiseMap.set("audioinput", o), o.catch(() => X.userMediaPromiseMap.delete("audioinput"))), n.video && (X.userMediaPromiseMap.set("videoinput", o), o.catch(() => X.userMediaPromiseMap.delete("videoinput")));
        const c = yield o;
        return Promise.all(c.getTracks().map(d => p(this, void 0, void 0, function*() {
            const l = d.kind === "audio";
            l ? r.audio : r.video;
            let u;
            const h = l ? a.audio : a.video;
            typeof h != "boolean" && (u = h), u ? u.deviceId = d.getSettings().deviceId : u = {
                deviceId: d.getSettings().deviceId
            };
            const m = Ir(d, u);
            return m.kind === C.Kind.Video ? m.source = C.Source.Camera : m.kind === C.Kind.Audio && (m.source = C.Source.Microphone), m.mediaStream = c, m instanceof Y && i ? yield m.setProcessor(i): m instanceof Z && s && (yield m.setProcessor(s)), m
        })))
    })
}

function Jc(n) {
    return p(this, void 0, void 0, function*() {
        return (yield Nr({
            audio: !1,
            video: n
        }))[0]
    })
}

function Qc(n) {
    return p(this, void 0, void 0, function*() {
        return (yield Nr({
            audio: n,
            video: !1
        }))[0]
    })
}
var we;
(function(n) {
    n.Excellent = "excellent", n.Good = "good", n.Poor = "poor", n.Lost = "lost", n.Unknown = "unknown"
})(we || (we = {}));

function Yc(n) {
    switch (n) {
        case rt.EXCELLENT:
            return we.Excellent;
        case rt.GOOD:
            return we.Good;
        case rt.POOR:
            return we.Poor;
        case rt.LOST:
            return we.Lost;
        default:
            return we.Unknown
    }
}
class Ar extends be.EventEmitter {
    get logContext() {
        var e, t;
        return Object.assign({}, (t = (e = this.loggerOptions) === null || e === void 0 ? void 0 : e.loggerContextCb) === null || t === void 0 ? void 0 : t.call(e))
    }
    get isEncrypted() {
        return this.trackPublications.size > 0 && Array.from(this.trackPublications.values()).every(e => e.isEncrypted)
    }
    get isAgent() {
        var e;
        return ((e = this.permissions) === null || e === void 0 ? void 0 : e.agent) || this.kind === Lt.AGENT
    }
    get kind() {
        return this._kind
    }
    get attributes() {
        return Object.freeze(Object.assign({}, this._attributes))
    }
    constructor(e, t, i, s, r) {
        let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Lt.STANDARD;
        var o;
        super(), this.audioLevel = 0, this.isSpeaking = !1, this._connectionQuality = we.Unknown, this.log = A, this.log = Ce((o = r ? .loggerName) !== null && o !== void 0 ? o : ue.Participant), this.loggerOptions = r, this.setMaxListeners(100), this.sid = e, this.identity = t, this.name = i, this.metadata = s, this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.trackPublications = new Map, this._kind = a, this._attributes = {}
    }
    getTrackPublications() {
        return Array.from(this.trackPublications.values())
    }
    getTrackPublication(e) {
        for (const [, t] of this.trackPublications)
            if (t.source === e) return t
    }
    getTrackPublicationByName(e) {
        for (const [, t] of this.trackPublications)
            if (t.trackName === e) return t
    }
    get connectionQuality() {
        return this._connectionQuality
    }
    get isCameraEnabled() {
        var e;
        const t = this.getTrackPublication(C.Source.Camera);
        return !(!((e = t ? .isMuted) !== null && e !== void 0) || e)
    }
    get isMicrophoneEnabled() {
        var e;
        const t = this.getTrackPublication(C.Source.Microphone);
        return !(!((e = t ? .isMuted) !== null && e !== void 0) || e)
    }
    get isScreenShareEnabled() {
        return !!this.getTrackPublication(C.Source.ScreenShare)
    }
    get isLocal() {
        return !1
    }
    get joinedAt() {
        return this.participantInfo ? new Date(Number.parseInt(this.participantInfo.joinedAt.toString()) * 1e3) : new Date
    }
    updateInfo(e) {
        return this.participantInfo && this.participantInfo.sid === e.sid && this.participantInfo.version > e.version ? !1 : (this.identity = e.identity, this.sid = e.sid, this._setName(e.name), this._setMetadata(e.metadata), this._setAttributes(e.attributes), e.permission && this.setPermissions(e.permission), this.participantInfo = e, this.log.trace("update participant info", Object.assign(Object.assign({}, this.logContext), {
            info: e
        })), !0)
    }
    _setMetadata(e) {
        const t = this.metadata !== e,
            i = this.metadata;
        this.metadata = e, t && this.emit(_.ParticipantMetadataChanged, i)
    }
    _setName(e) {
        const t = this.name !== e;
        this.name = e, t && this.emit(_.ParticipantNameChanged, e)
    }
    _setAttributes(e) {
        const t = tc(this.attributes, e);
        this._attributes = e, Object.keys(t).length > 0 && this.emit(_.AttributesChanged, t)
    }
    setPermissions(e) {
        var t, i, s, r, a, o;
        const c = this.permissions,
            d = e.canPublish !== ((t = this.permissions) === null || t === void 0 ? void 0 : t.canPublish) || e.canSubscribe !== ((i = this.permissions) === null || i === void 0 ? void 0 : i.canSubscribe) || e.canPublishData !== ((s = this.permissions) === null || s === void 0 ? void 0 : s.canPublishData) || e.hidden !== ((r = this.permissions) === null || r === void 0 ? void 0 : r.hidden) || e.recorder !== ((a = this.permissions) === null || a === void 0 ? void 0 : a.recorder) || e.canPublishSources.length !== this.permissions.canPublishSources.length || e.canPublishSources.some((l, u) => {
                var h;
                return l !== ((h = this.permissions) === null || h === void 0 ? void 0 : h.canPublishSources[u])
            }) || e.canSubscribeMetrics !== ((o = this.permissions) === null || o === void 0 ? void 0 : o.canSubscribeMetrics);
        return this.permissions = e, d && this.emit(_.ParticipantPermissionsChanged, c), d
    }
    setIsSpeaking(e) {
        e !== this.isSpeaking && (this.isSpeaking = e, e && (this.lastSpokeAt = new Date), this.emit(_.IsSpeakingChanged, e))
    }
    setConnectionQuality(e) {
        const t = this._connectionQuality;
        this._connectionQuality = Yc(e), t !== this._connectionQuality && this.emit(_.ConnectionQualityChanged, this._connectionQuality)
    }
    setAudioContext(e) {
        this.audioContext = e, this.audioTrackPublications.forEach(t => (t.track instanceof lt || t.track instanceof Y) && t.track.setAudioContext(e))
    }
    addTrackPublication(e) {
        e.on(S.Muted, () => {
            this.emit(_.TrackMuted, e)
        }), e.on(S.Unmuted, () => {
            this.emit(_.TrackUnmuted, e)
        });
        const t = e;
        switch (t.track && (t.track.sid = e.trackSid), this.trackPublications.set(e.trackSid, e), e.kind) {
            case C.Kind.Audio:
                this.audioTrackPublications.set(e.trackSid, e);
                break;
            case C.Kind.Video:
                this.videoTrackPublications.set(e.trackSid, e);
                break
        }
    }
}

function Xc(n) {
    var e, t, i;
    if (!n.participantSid && !n.participantIdentity) throw new Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");
    return new Us({
        participantIdentity: (e = n.participantIdentity) !== null && e !== void 0 ? e : "",
        participantSid: (t = n.participantSid) !== null && t !== void 0 ? t : "",
        allTracks: (i = n.allowAll) !== null && i !== void 0 ? i : !1,
        trackSids: n.allowedTrackSids || []
    })
}
class es extends Ar {
    constructor(e, t, i, s) {
        super(e, t, void 0, void 0, {
            loggerName: s.loggerName,
            loggerContextCb: () => this.engine.logContext
        }), this.pendingPublishing = new Set, this.pendingPublishPromises = new Map, this.participantTrackPermissions = [], this.allParticipantsAllowedToSubscribe = !0, this.encryptionType = re.NONE, this.enabledPublishVideoCodecs = [], this.rpcHandlers = new Map, this.pendingAcks = new Map, this.pendingResponses = new Map, this.handleReconnecting = () => {
            this.reconnectFuture || (this.reconnectFuture = new Er)
        }, this.handleReconnected = () => {
            var r, a;
            (a = (r = this.reconnectFuture) === null || r === void 0 ? void 0 : r.resolve) === null || a === void 0 || a.call(r), this.reconnectFuture = void 0, this.updateTrackSubscriptionPermissions()
        }, this.handleDisconnected = () => {
            var r, a;
            this.reconnectFuture && (this.reconnectFuture.promise.catch(o => this.log.warn(o.message, this.logContext)), (a = (r = this.reconnectFuture) === null || r === void 0 ? void 0 : r.reject) === null || a === void 0 || a.call(r, "Got disconnected during reconnection attempt"), this.reconnectFuture = void 0)
        }, this.handleSignalRequestResponse = r => {
            const {
                requestId: a,
                reason: o,
                message: c
            } = r, d = this.pendingSignalRequests.get(a);
            d && (o !== qs.OK && d.reject(new wn(c, o)), this.pendingSignalRequests.delete(a))
        }, this.handleDataPacket = r => {
            switch (r.value.case) {
                case "rpcRequest":
                    let a = r.value.value;
                    this.handleIncomingRpcRequest(r.participantIdentity, a.id, a.method, a.payload, a.responseTimeoutMs, a.version);
                    break;
                case "rpcResponse":
                    let o = r.value.value,
                        c = null,
                        d = null;
                    o.value.case === "payload" ? c = o.value.value : o.value.case === "error" && (d = W.fromProto(o.value.value)), this.handleIncomingRpcResponse(o.requestId, c, d);
                    break;
                case "rpcAck":
                    let l = r.value.value;
                    this.handleIncomingRpcAck(l.requestId);
                    break
            }
        }, this.updateTrackSubscriptionPermissions = () => {
            this.log.debug("updating track subscription permissions", Object.assign(Object.assign({}, this.logContext), {
                allParticipantsAllowed: this.allParticipantsAllowedToSubscribe,
                participantTrackPermissions: this.participantTrackPermissions
            })), this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe, this.participantTrackPermissions.map(r => Xc(r)))
        }, this.onTrackUnmuted = r => {
            this.onTrackMuted(r, r.isUpstreamPaused)
        }, this.onTrackMuted = (r, a) => {
            if (a === void 0 && (a = !0), !r.sid) {
                this.log.error("could not update mute status for unpublished track", Object.assign(Object.assign({}, this.logContext), j(r)));
                return
            }
            this.engine.updateMuteStatus(r.sid, a)
        }, this.onTrackUpstreamPaused = r => {
            this.log.debug("upstream paused", Object.assign(Object.assign({}, this.logContext), j(r))), this.onTrackMuted(r, !0)
        }, this.onTrackUpstreamResumed = r => {
            this.log.debug("upstream resumed", Object.assign(Object.assign({}, this.logContext), j(r))), this.onTrackMuted(r, r.isMuted)
        }, this.onTrackFeatureUpdate = r => {
            const a = this.audioTrackPublications.get(r.sid);
            if (!a) {
                this.log.warn("Could not update local audio track settings, missing publication for track ".concat(r.sid), this.logContext);
                return
            }
            this.engine.client.sendUpdateLocalAudioTrack(a.trackSid, a.getTrackFeatures())
        }, this.handleSubscribedQualityUpdate = r => p(this, void 0, void 0, function*() {
            var a, o, c, d, l, u;
            if (!(!((l = this.roomOptions) === null || l === void 0) && l.dynacast)) return;
            const h = this.videoTrackPublications.get(r.trackSid);
            if (!h) {
                this.log.warn("received subscribed quality update for unknown track", Object.assign(Object.assign({}, this.logContext), {
                    trackSid: r.trackSid
                }));
                return
            }
            if (r.subscribedCodecs.length > 0) {
                if (!h.videoTrack) return;
                const E = yield h.videoTrack.setPublishingCodecs(r.subscribedCodecs);
                try {
                    for (var m = !0, k = qe(E), v; v = yield k.next(), a = v.done, !a; m = !0) {
                        d = v.value, m = !1;
                        const T = d;
                        Jo(T) && (this.log.debug("publish ".concat(T, " for ").concat(h.videoTrack.sid), Object.assign(Object.assign({}, this.logContext), j(h))), yield this.publishAdditionalCodecForTrack(h.videoTrack, T, h.options))
                    }
                } catch (T) {
                    o = {
                        error: T
                    }
                } finally {
                    try {
                        !m && !a && (c = k.return) && (yield c.call(k))
                    } finally {
                        if (o) throw o.error
                    }
                }
            } else r.subscribedQualities.length > 0 && (yield(u = h.videoTrack) === null || u === void 0 ? void 0 : u.setPublishingLayers(r.subscribedQualities))
        }), this.handleLocalTrackUnpublished = r => {
            const a = this.trackPublications.get(r.trackSid);
            if (!a) {
                this.log.warn("received unpublished event for unknown track", Object.assign(Object.assign({}, this.logContext), {
                    trackSid: r.trackSid
                }));
                return
            }
            this.unpublishTrack(a.track)
        }, this.handleTrackEnded = r => p(this, void 0, void 0, function*() {
            if (r.source === C.Source.ScreenShare || r.source === C.Source.ScreenShareAudio) this.log.debug("unpublishing local track due to TrackEnded", Object.assign(Object.assign({}, this.logContext), j(r))), this.unpublishTrack(r);
            else if (r.isUserProvided) yield r.mute();
            else if (r instanceof Y || r instanceof Z) try {
                if (se()) try {
                    const a = yield navigator ? .permissions.query({
                        name: r.source === C.Source.Camera ? "camera" : "microphone"
                    });
                    if (a && a.state === "denied") throw this.log.warn("user has revoked access to ".concat(r.source), Object.assign(Object.assign({}, this.logContext), j(r))), a.onchange = () => {
                        a.state !== "denied" && (r.isMuted || r.restartTrack(), a.onchange = null)
                    }, new Error("GetUserMedia Permission denied")
                } catch {}
                r.isMuted || (this.log.debug("track ended, attempting to use a different device", Object.assign(Object.assign({}, this.logContext), j(r))), r instanceof Y ? yield r.restartTrack({
                    deviceId: "default"
                }): yield r.restartTrack())
            } catch {
                this.log.warn("could not restart track, muting instead", Object.assign(Object.assign({}, this.logContext), j(r))), yield r.mute()
            }
        }), this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.trackPublications = new Map, this.engine = i, this.roomOptions = s, this.setupEngine(i), this.activeDeviceMap = new Map, this.pendingSignalRequests = new Map
    }
    get lastCameraError() {
        return this.cameraError
    }
    get lastMicrophoneError() {
        return this.microphoneError
    }
    get isE2EEEnabled() {
        return this.encryptionType !== re.NONE
    }
    getTrackPublication(e) {
        const t = super.getTrackPublication(e);
        if (t) return t
    }
    getTrackPublicationByName(e) {
        const t = super.getTrackPublicationByName(e);
        if (t) return t
    }
    setupEngine(e) {
        this.engine = e, this.engine.on(w.RemoteMute, (t, i) => {
            const s = this.trackPublications.get(t);
            !s || !s.track || (i ? s.mute() : s.unmute())
        }), this.engine.on(w.Connected, this.handleReconnected).on(w.SignalRestarted, this.handleReconnected).on(w.SignalResumed, this.handleReconnected).on(w.Restarting, this.handleReconnecting).on(w.Resuming, this.handleReconnecting).on(w.LocalTrackUnpublished, this.handleLocalTrackUnpublished).on(w.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate).on(w.Disconnected, this.handleDisconnected).on(w.SignalRequestResponse, this.handleSignalRequestResponse).on(w.DataPacketReceived, this.handleDataPacket)
    }
    setMetadata(e) {
        return p(this, void 0, void 0, function*() {
            yield this.requestMetadataUpdate({
                metadata: e
            })
        })
    }
    setName(e) {
        return p(this, void 0, void 0, function*() {
            yield this.requestMetadataUpdate({
                name: e
            })
        })
    }
    setAttributes(e) {
        return p(this, void 0, void 0, function*() {
            yield this.requestMetadataUpdate({
                attributes: e
            })
        })
    }
    requestMetadataUpdate(e) {
        return p(this, arguments, void 0, function(t) {
            var i = this;
            let {
                metadata: s,
                name: r,
                attributes: a
            } = t;
            return function*() {
                return new Promise((o, c) => p(i, void 0, void 0, function*() {
                    var d, l;
                    try {
                        let u = !1;
                        const h = yield this.engine.client.sendUpdateLocalMetadata((d = s ? ? this.metadata) !== null && d !== void 0 ? d : "", (l = r ? ? this.name) !== null && l !== void 0 ? l : "", a), m = performance.now();
                        for (this.pendingSignalRequests.set(h, {
                                resolve: o,
                                reject: k => {
                                    c(k), u = !0
                                },
                                values: {
                                    name: r,
                                    metadata: s,
                                    attributes: a
                                }
                            }); performance.now() - m < 5e3 && !u;) {
                            if ((!r || this.name === r) && (!s || this.metadata === s) && (!a || Object.entries(a).every(k => {
                                    let [v, E] = k;
                                    return this.attributes[v] === E || E === "" && !this.attributes[v]
                                }))) {
                                this.pendingSignalRequests.delete(h), o();
                                return
                            }
                            yield ve(50)
                        }
                        c(new wn("Request to update local metadata timed out", "TimeoutError"))
                    } catch (u) {
                        u instanceof Error && c(u)
                    }
                }))
            }()
        })
    }
    setCameraEnabled(e, t, i) {
        return this.setTrackEnabled(C.Source.Camera, e, t, i)
    }
    setMicrophoneEnabled(e, t, i) {
        return this.setTrackEnabled(C.Source.Microphone, e, t, i)
    }
    setScreenShareEnabled(e, t, i) {
        return this.setTrackEnabled(C.Source.ScreenShare, e, t, i)
    }
    setPermissions(e) {
        const t = this.permissions,
            i = super.setPermissions(e);
        return i && t && this.emit(_.ParticipantPermissionsChanged, t), i
    }
    setE2EEEnabled(e) {
        return p(this, void 0, void 0, function*() {
            this.encryptionType = e ? re.GCM : re.NONE, yield this.republishAllTracks(void 0, !1)
        })
    }
    setTrackEnabled(e, t, i, s) {
        return p(this, void 0, void 0, function*() {
            var r, a;
            this.log.debug("setTrackEnabled", Object.assign(Object.assign({}, this.logContext), {
                source: e,
                enabled: t
            })), this.republishPromise && (yield this.republishPromise);
            let o = this.getTrackPublication(e);
            if (t)
                if (o) yield o.unmute();
                else {
                    let c;
                    if (this.pendingPublishing.has(e)) {
                        const d = yield this.waitForPendingPublicationOfSource(e);
                        return d || this.log.info("skipping duplicate published source", Object.assign(Object.assign({}, this.logContext), {
                            source: e
                        })), yield d ? .unmute(), d
                    }
                    this.pendingPublishing.add(e);
                    try {
                        switch (e) {
                            case C.Source.Camera:
                                c = yield this.createTracks({
                                    video: (r = i) !== null && r !== void 0 ? r : !0
                                });
                                break;
                            case C.Source.Microphone:
                                c = yield this.createTracks({
                                    audio: (a = i) !== null && a !== void 0 ? a : !0
                                });
                                break;
                            case C.Source.ScreenShare:
                                c = yield this.createScreenTracks(Object.assign({}, i));
                                break;
                            default:
                                throw new ge(e)
                        }
                        const d = [];
                        for (const u of c) this.log.info("publishing track", Object.assign(Object.assign({}, this.logContext), j(u))), d.push(this.publishTrack(u, s));
                        [o] = yield Promise.all(d)
                    } catch (d) {
                        throw c ? .forEach(l => {
                            l.stop()
                        }), d instanceof Error && !(d instanceof ge) && this.emit(_.MediaDevicesError, d), d
                    } finally {
                        this.pendingPublishing.delete(e)
                    }
                }
            else if (o ? .track || (o = yield this.waitForPendingPublicationOfSource(e)), o && o.track)
                if (e === C.Source.ScreenShare) {
                    o = yield this.unpublishTrack(o.track);
                    const c = this.getTrackPublication(C.Source.ScreenShareAudio);
                    c && c.track && this.unpublishTrack(c.track)
                } else yield o.mute();
            return o
        })
    }
    enableCameraAndMicrophone() {
        return p(this, void 0, void 0, function*() {
            if (!(this.pendingPublishing.has(C.Source.Camera) || this.pendingPublishing.has(C.Source.Microphone))) {
                this.pendingPublishing.add(C.Source.Camera), this.pendingPublishing.add(C.Source.Microphone);
                try {
                    const e = yield this.createTracks({
                        audio: !0,
                        video: !0
                    });
                    yield Promise.all(e.map(t => this.publishTrack(t)))
                } finally {
                    this.pendingPublishing.delete(C.Source.Camera), this.pendingPublishing.delete(C.Source.Microphone)
                }
            }
        })
    }
    createTracks(e) {
        return p(this, void 0, void 0, function*() {
            var t, i;
            e ? ? (e = {});
            const {
                audioProcessor: s,
                videoProcessor: r
            } = xr(e), a = Tr(e, (t = this.roomOptions) === null || t === void 0 ? void 0 : t.audioCaptureDefaults, (i = this.roomOptions) === null || i === void 0 ? void 0 : i.videoCaptureDefaults), o = Wt(a);
            let c;
            try {
                c = yield navigator.mediaDevices.getUserMedia(o)
            } catch (d) {
                throw d instanceof Error && (o.audio && (this.microphoneError = d), o.video && (this.cameraError = d)), d
            }
            return o.audio && (this.microphoneError = void 0, this.emit(_.AudioStreamAcquired)), o.video && (this.cameraError = void 0), Promise.all(c.getTracks().map(d => p(this, void 0, void 0, function*() {
                const l = d.kind === "audio";
                l ? a.audio : a.video;
                let u;
                const h = l ? o.audio : o.video;
                typeof h != "boolean" && (u = h);
                const m = Ir(d, u, {
                    loggerName: this.roomOptions.loggerName,
                    loggerContextCb: () => this.logContext
                });
                return m.kind === C.Kind.Video ? m.source = C.Source.Camera : m.kind === C.Kind.Audio && (m.source = C.Source.Microphone, m.setAudioContext(this.audioContext)), m.mediaStream = c, m instanceof Y && s ? yield m.setProcessor(s): m instanceof Z && r && (yield m.setProcessor(r)), m
            })))
        })
    }
    createScreenTracks(e) {
        return p(this, void 0, void 0, function*() {
            if (e === void 0 && (e = {}), navigator.mediaDevices.getDisplayMedia === void 0) throw new Gi("getDisplayMedia not supported");
            e.resolution === void 0 && !oc() && (e.resolution = Hi.h1080fps30.resolution);
            const t = $o(e),
                i = yield navigator.mediaDevices.getDisplayMedia(t), s = i.getVideoTracks();
            if (s.length === 0) throw new ge("no video track found");
            const r = new Z(s[0], void 0, !1, {
                loggerName: this.roomOptions.loggerName,
                loggerContextCb: () => this.logContext
            });
            r.source = C.Source.ScreenShare, e.contentHint && (r.mediaStreamTrack.contentHint = e.contentHint);
            const a = [r];
            if (i.getAudioTracks().length > 0) {
                this.emit(_.AudioStreamAcquired);
                const o = new Y(i.getAudioTracks()[0], void 0, !1, this.audioContext, {
                    loggerName: this.roomOptions.loggerName,
                    loggerContextCb: () => this.logContext
                });
                o.source = C.Source.ScreenShareAudio, a.push(o)
            }
            return a
        })
    }
    publishTrack(e, t) {
        return p(this, void 0, void 0, function*() {
            return this.publishOrRepublishTrack(e, t)
        })
    }
    publishOrRepublishTrack(e, t) {
        return p(this, arguments, void 0, function(i, s) {
            var r = this;
            let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return function*() {
                var o, c, d, l;
                i instanceof Y && i.setAudioContext(r.audioContext), yield(o = r.reconnectFuture) === null || o === void 0 ? void 0 : o.promise, r.republishPromise && !a && (yield r.republishPromise), i instanceof Qe && r.pendingPublishPromises.has(i) && (yield r.pendingPublishPromises.get(i));
                let u;
                if (i instanceof MediaStreamTrack) u = i.getConstraints();
                else {
                    u = i.constraints;
                    let T;
                    switch (i.source) {
                        case C.Source.Microphone:
                            T = "audioinput";
                            break;
                        case C.Source.Camera:
                            T = "videoinput"
                    }
                    T && r.activeDeviceMap.has(T) && (u = Object.assign(Object.assign({}, u), {
                        deviceId: r.activeDeviceMap.get(T)
                    }))
                }
                if (i instanceof MediaStreamTrack) switch (i.kind) {
                    case "audio":
                        i = new Y(i, u, !0, r.audioContext, {
                            loggerName: r.roomOptions.loggerName,
                            loggerContextCb: () => r.logContext
                        });
                        break;
                    case "video":
                        i = new Z(i, u, !0, {
                            loggerName: r.roomOptions.loggerName,
                            loggerContextCb: () => r.logContext
                        });
                        break;
                    default:
                        throw new ge("unsupported MediaStreamTrack kind ".concat(i.kind))
                } else i.updateLoggerOptions({
                    loggerName: r.roomOptions.loggerName,
                    loggerContextCb: () => r.logContext
                });
                let h;
                if (r.trackPublications.forEach(T => {
                        T.track && T.track === i && (h = T)
                    }), h) return r.log.warn("track has already been published, skipping", Object.assign(Object.assign({}, r.logContext), j(h))), h;
                const m = "channelCount" in i.mediaStreamTrack.getSettings() && i.mediaStreamTrack.getSettings().channelCount === 2 || i.mediaStreamTrack.getConstraints().channelCount === 2,
                    k = (c = s ? .forceStereo) !== null && c !== void 0 ? c : m;
                k && (s || (s = {}), s.dtx === void 0 && r.log.info("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.", Object.assign(Object.assign({}, r.logContext), j(i))), s.red === void 0 && r.log.info("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."), (d = s.dtx) !== null && d !== void 0 || (s.dtx = !1), (l = s.red) !== null && l !== void 0 || (s.red = !1));
                const v = Object.assign(Object.assign({}, r.roomOptions.publishDefaults), s);
                !cc() && r.roomOptions.e2ee && (r.log.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2", Object.assign({}, r.logContext)), v.simulcast = !1), v.source && (i.source = v.source);
                const E = r.publish(i, v, k);
                r.pendingPublishPromises.set(i, E);
                try {
                    return yield E
                } catch (T) {
                    throw T
                } finally {
                    r.pendingPublishPromises.delete(i)
                }
            }()
        })
    }
    publish(e, t, i) {
        return p(this, void 0, void 0, function*() {
            var s, r, a, o, c, d, l, u, h, m;
            Array.from(this.trackPublications.values()).find(g => e instanceof Qe && g.source === e.source) && e.source !== C.Source.Unknown && this.log.info("publishing a second track with the same source: ".concat(e.source), Object.assign(Object.assign({}, this.logContext), j(e))), t.stopMicTrackOnMute && e instanceof Y && (e.stopOnMute = !0), e.source === C.Source.ScreenShare && $e() && (t.simulcast = !1), t.videoCodec === "av1" && !sc() && (t.videoCodec = void 0), t.videoCodec === "vp9" && !rc() && (t.videoCodec = void 0), t.videoCodec === void 0 && (t.videoCodec = Di), this.enabledPublishVideoCodecs.length > 0 && (this.enabledPublishVideoCodecs.some(g => t.videoCodec === Mt(g.mime)) || (t.videoCodec = Mt(this.enabledPublishVideoCodecs[0].mime)));
            const v = t.videoCodec;
            e.on(S.Muted, this.onTrackMuted), e.on(S.Unmuted, this.onTrackUnmuted), e.on(S.Ended, this.handleTrackEnded), e.on(S.UpstreamPaused, this.onTrackUpstreamPaused), e.on(S.UpstreamResumed, this.onTrackUpstreamResumed), e.on(S.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
            const E = new mi({
                cid: e.mediaStreamTrack.id,
                name: t.name,
                type: C.kindToProto(e.kind),
                muted: e.isMuted,
                source: C.sourceToProto(e.source),
                disableDtx: !(!((s = t.dtx) !== null && s !== void 0) || s),
                encryption: this.encryptionType,
                stereo: i,
                disableRed: this.isE2EEEnabled || !(!((r = t.red) !== null && r !== void 0) || r),
                stream: t ? .stream
            });
            let T;
            if (e.kind === C.Kind.Video) {
                let g = {
                    width: 0,
                    height: 0
                };
                try {
                    g = yield e.waitForDimensions()
                } catch {
                    const I = (o = (a = this.roomOptions.videoCaptureDefaults) === null || a === void 0 ? void 0 : a.resolution) !== null && o !== void 0 ? o : mt.h720.resolution;
                    g = {
                        width: I.width,
                        height: I.height
                    }, this.log.error("could not determine track dimensions, using defaults", Object.assign(Object.assign(Object.assign({}, this.logContext), j(e)), {
                        dims: g
                    }))
                }
                E.width = g.width, E.height = g.height, e instanceof Z && (ct(v) && (e.source === C.Source.ScreenShare && (t.scalabilityMode = "L1T3", "contentHint" in e.mediaStreamTrack && (e.mediaStreamTrack.contentHint = "motion", this.log.info("forcing contentHint to motion for screenshare with SVC codecs", Object.assign(Object.assign({}, this.logContext), j(e))))), t.scalabilityMode = (c = t.scalabilityMode) !== null && c !== void 0 ? c : "L3T3_KEY"), E.simulcastCodecs = [new pi({
                    codec: v,
                    cid: e.mediaStreamTrack.id
                })], t.backupCodec === !0 && (t.backupCodec = {
                    codec: Di
                }), t.backupCodec && v !== t.backupCodec.codec && E.encryption === re.NONE && (this.roomOptions.dynacast || (this.roomOptions.dynacast = !0), E.simulcastCodecs.push(new pi({
                    codec: t.backupCodec.codec,
                    cid: ""
                })))), T = xi(e.source === C.Source.ScreenShare, E.width, E.height, t), E.layers = zn(E.width, E.height, T, ct(t.videoCodec))
            } else e.kind === C.Kind.Audio && (T = [{
                maxBitrate: (d = t.audioPreset) === null || d === void 0 ? void 0 : d.maxBitrate,
                priority: (u = (l = t.audioPreset) === null || l === void 0 ? void 0 : l.priority) !== null && u !== void 0 ? u : "high",
                networkPriority: (m = (h = t.audioPreset) === null || h === void 0 ? void 0 : h.priority) !== null && m !== void 0 ? m : "high"
            }]);
            if (!this.engine || this.engine.isClosed) throw new Q("cannot publish track when not connected");
            const L = () => p(this, void 0, void 0, function*() {
                var g, R, I;
                if (!this.engine.pcManager) throw new Q("pcManager is not ready");
                if (e.sender = yield this.engine.createSender(e, t, T), e instanceof Z && ((g = t.degradationPreference) !== null && g !== void 0 || (t.degradationPreference = Bc(e)), e.setDegradationPreference(t.degradationPreference)), T)
                    if ($e() && e.kind === C.Kind.Audio) {
                        let O;
                        for (const N of this.engine.pcManager.publisher.getTransceivers())
                            if (N.sender === e.sender) {
                                O = N;
                                break
                            }
                        O && this.engine.pcManager.publisher.setTrackCodecBitrate({
                            transceiver: O,
                            codec: "opus",
                            maxbr: !((R = T[0]) === null || R === void 0) && R.maxBitrate ? T[0].maxBitrate / 1e3 : 0
                        })
                    } else e.codec && ct(e.codec) && (!((I = T[0]) === null || I === void 0) && I.maxBitrate) && this.engine.pcManager.publisher.setTrackCodecBitrate({
                        cid: E.cid,
                        codec: e.codec,
                        maxbr: T[0].maxBitrate / 1e3
                    });
                yield this.engine.negotiate()
            });
            let D;
            if (this.enabledPublishVideoCodecs.length > 0) D = (yield Promise.all([this.engine.addTrack(E), L()]))[0];
            else {
                D = yield this.engine.addTrack(E);
                let g;
                if (D.codecs.forEach(R => {
                        g === void 0 && (g = R.mimeType)
                    }), g && e.kind === C.Kind.Video) {
                    const R = Mt(g);
                    R !== v && (this.log.debug("falling back to server selected codec", Object.assign(Object.assign(Object.assign({}, this.logContext), j(e)), {
                        codec: R
                    })), t.videoCodec = R, T = xi(e.source === C.Source.ScreenShare, E.width, E.height, t))
                }
                yield L()
            }
            const y = new jt(e.kind, D, e, {
                loggerName: this.roomOptions.loggerName,
                loggerContextCb: () => this.logContext
            });
            return y.options = t, e.sid = D.sid, this.log.debug("publishing ".concat(e.kind, " with encodings"), Object.assign(Object.assign({}, this.logContext), {
                encodings: T,
                trackInfo: D
            })), e instanceof Z ? e.startMonitor(this.engine.client) : e instanceof Y && e.startMonitor(), this.addTrackPublication(y), this.emit(_.LocalTrackPublished, y), y
        })
    }
    get isLocal() {
        return !0
    }
    publishAdditionalCodecForTrack(e, t, i) {
        return p(this, void 0, void 0, function*() {
            var s;
            if (this.encryptionType !== re.NONE) return;
            let r;
            if (this.trackPublications.forEach(m => {
                    m.track && m.track === e && (r = m)
                }), !r) throw new ge("track is not published");
            if (!(e instanceof Z)) throw new ge("track is not a video track");
            const a = Object.assign(Object.assign({}, (s = this.roomOptions) === null || s === void 0 ? void 0 : s.publishDefaults), i),
                o = Uc(e, t, a);
            if (!o) {
                this.log.info("backup codec has been disabled, ignoring request to add additional codec for track", Object.assign(Object.assign({}, this.logContext), j(e)));
                return
            }
            const c = e.addSimulcastTrack(t, o);
            if (!c) return;
            const d = new mi({
                cid: c.mediaStreamTrack.id,
                type: C.kindToProto(e.kind),
                muted: e.isMuted,
                source: C.sourceToProto(e.source),
                sid: e.sid,
                simulcastCodecs: [{
                    codec: a.videoCodec,
                    cid: c.mediaStreamTrack.id
                }]
            });
            if (d.layers = zn(d.width, d.height, o), !this.engine || this.engine.isClosed) throw new Q("cannot publish track when not connected");
            const l = () => p(this, void 0, void 0, function*() {
                    yield this.engine.createSimulcastSender(e, c, a, o), yield this.engine.negotiate()
                }),
                h = (yield Promise.all([this.engine.addTrack(d), l()]))[0];
            this.log.debug("published ".concat(t, " for track ").concat(e.sid), Object.assign(Object.assign({}, this.logContext), {
                encodings: o,
                trackInfo: h
            }))
        })
    }
    unpublishTrack(e, t) {
        return p(this, void 0, void 0, function*() {
            var i, s;
            if (e instanceof Qe) {
                const d = this.pendingPublishPromises.get(e);
                d && (this.log.info("awaiting publish promise before attempting to unpublish", Object.assign(Object.assign({}, this.logContext), j(e))), yield d)
            }
            const r = this.getPublicationForTrack(e),
                a = r ? j(r) : void 0;
            if (this.log.debug("unpublishing track", Object.assign(Object.assign({}, this.logContext), a)), !r || !r.track) {
                this.log.warn("track was not unpublished because no publication was found", Object.assign(Object.assign({}, this.logContext), a));
                return
            }
            e = r.track, e.off(S.Muted, this.onTrackMuted), e.off(S.Unmuted, this.onTrackUnmuted), e.off(S.Ended, this.handleTrackEnded), e.off(S.UpstreamPaused, this.onTrackUpstreamPaused), e.off(S.UpstreamResumed, this.onTrackUpstreamResumed), e.off(S.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate), t === void 0 && (t = (s = (i = this.roomOptions) === null || i === void 0 ? void 0 : i.stopLocalTrackOnUnpublish) !== null && s !== void 0 ? s : !0), t && e.stop();
            let o = !1;
            const c = e.sender;
            if (e.sender = void 0, this.engine.pcManager && this.engine.pcManager.currentState < H.FAILED && c) try {
                for (const d of this.engine.pcManager.publisher.getTransceivers()) d.sender === c && (d.direction = "inactive", o = !0);
                if (this.engine.removeTrack(c) && (o = !0), e instanceof Z) {
                    for (const [, d] of e.simulcastCodecs) d.sender && (this.engine.removeTrack(d.sender) && (o = !0), d.sender = void 0);
                    e.simulcastCodecs.clear()
                }
            } catch (d) {
                this.log.warn("failed to unpublish track", Object.assign(Object.assign(Object.assign({}, this.logContext), a), {
                    error: d
                }))
            }
            switch (this.trackPublications.delete(r.trackSid), r.kind) {
                case C.Kind.Audio:
                    this.audioTrackPublications.delete(r.trackSid);
                    break;
                case C.Kind.Video:
                    this.videoTrackPublications.delete(r.trackSid);
                    break
            }
            return this.emit(_.LocalTrackUnpublished, r), r.setTrack(void 0), o && (yield this.engine.negotiate()), r
        })
    }
    unpublishTracks(e) {
        return p(this, void 0, void 0, function*() {
            return (yield Promise.all(e.map(i => this.unpublishTrack(i)))).filter(i => i instanceof jt)
        })
    }
    republishAllTracks(e) {
        return p(this, arguments, void 0, function(t) {
            var i = this;
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return function*() {
                i.republishPromise && (yield i.republishPromise), i.republishPromise = new Promise((r, a) => p(i, void 0, void 0, function*() {
                    try {
                        const o = [];
                        this.trackPublications.forEach(c => {
                            c.track && (t && (c.options = Object.assign(Object.assign({}, c.options), t)), o.push(c))
                        }), yield Promise.all(o.map(c => p(this, void 0, void 0, function*() {
                            const d = c.track;
                            yield this.unpublishTrack(d, !1), s && !d.isMuted && d.source !== C.Source.ScreenShare && d.source !== C.Source.ScreenShareAudio && (d instanceof Y || d instanceof Z) && !d.isUserProvided && (this.log.debug("restarting existing track", Object.assign(Object.assign({}, this.logContext), {
                                track: c.trackSid
                            })), yield d.restartTrack()), yield this.publishOrRepublishTrack(d, c.options, !0)
                        }))), r()
                    } catch (o) {
                        a(o)
                    } finally {
                        this.republishPromise = void 0
                    }
                })), yield i.republishPromise
            }()
        })
    }
    publishData(e) {
        return p(this, arguments, void 0, function(t) {
            var i = this;
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return function*() {
                const r = s.reliable ? V.RELIABLE : V.LOSSY,
                    a = s.destinationIdentities,
                    o = s.topic,
                    c = new Re({
                        kind: r,
                        value: {
                            case: "user",
                            value: new Ts({
                                participantIdentity: i.identity,
                                payload: t,
                                destinationIdentities: a,
                                topic: o
                            })
                        }
                    });
                yield i.engine.sendDataPacket(c, r)
            }()
        })
    }
    publishDtmf(e, t) {
        return p(this, void 0, void 0, function*() {
            const i = new Re({
                kind: V.RELIABLE,
                value: {
                    case: "sipDtmf",
                    value: new Cs({
                        code: e,
                        digit: t
                    })
                }
            });
            yield this.engine.sendDataPacket(i, V.RELIABLE)
        })
    }
    sendChatMessage(e) {
        return p(this, void 0, void 0, function*() {
            const t = {
                    id: crypto.randomUUID(),
                    message: e,
                    timestamp: Date.now()
                },
                i = new Re({
                    value: {
                        case: "chatMessage",
                        value: new ui(Object.assign(Object.assign({}, t), {
                            timestamp: K.parse(t.timestamp)
                        }))
                    }
                });
            return yield this.engine.sendDataPacket(i, V.RELIABLE), this.emit(_.ChatMessage, t), t
        })
    }
    editChatMessage(e, t) {
        return p(this, void 0, void 0, function*() {
            const i = Object.assign(Object.assign({}, t), {
                    message: e,
                    editTimestamp: Date.now()
                }),
                s = new Re({
                    value: {
                        case: "chatMessage",
                        value: new ui(Object.assign(Object.assign({}, i), {
                            timestamp: K.parse(i.timestamp),
                            editTimestamp: K.parse(i.editTimestamp)
                        }))
                    }
                });
            return yield this.engine.sendDataPacket(s, V.RELIABLE), this.emit(_.ChatMessage, i), i
        })
    }
    performRpc(e) {
        return p(this, arguments, void 0, function(t) {
            var i = this;
            let {
                destinationIdentity: s,
                method: r,
                payload: a,
                responseTimeout: o = 1e4
            } = t;
            return function*() {
                return new Promise((d, l) => p(i, void 0, void 0, function*() {
                    var u, h, m, k;
                    if (Ni(a) > Xn) {
                        l(W.builtIn("REQUEST_PAYLOAD_TOO_LARGE"));
                        return
                    }
                    if (!((h = (u = this.engine.latestJoinResponse) === null || u === void 0 ? void 0 : u.serverInfo) === null || h === void 0) && h.version && Ze((k = (m = this.engine.latestJoinResponse) === null || m === void 0 ? void 0 : m.serverInfo) === null || k === void 0 ? void 0 : k.version, "1.8.0") < 0) {
                        l(W.builtIn("UNSUPPORTED_SERVER"));
                        return
                    }
                    const v = crypto.randomUUID();
                    yield this.publishRpcRequest(s, v, r, a, o - 2e3);
                    const E = setTimeout(() => {
                        this.pendingAcks.delete(v), l(W.builtIn("CONNECTION_TIMEOUT")), this.pendingResponses.delete(v), clearTimeout(T)
                    }, 2e3);
                    this.pendingAcks.set(v, {
                        resolve: () => {
                            clearTimeout(E)
                        },
                        participantIdentity: s
                    });
                    const T = setTimeout(() => {
                        this.pendingResponses.delete(v), l(W.builtIn("RESPONSE_TIMEOUT"))
                    }, o);
                    this.pendingResponses.set(v, {
                        resolve: (L, D) => {
                            clearTimeout(T), this.pendingAcks.has(v) && (console.warn("RPC response received before ack", v), this.pendingAcks.delete(v), clearTimeout(E)), D ? l(D) : d(L ? ? "")
                        },
                        participantIdentity: s
                    })
                }))
            }()
        })
    }
    registerRpcMethod(e, t) {
        this.rpcHandlers.set(e, t)
    }
    unregisterRpcMethod(e) {
        this.rpcHandlers.delete(e)
    }
    setTrackSubscriptionPermissions(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        this.participantTrackPermissions = t, this.allParticipantsAllowedToSubscribe = e, this.engine.client.isDisconnected || this.updateTrackSubscriptionPermissions()
    }
    handleIncomingRpcAck(e) {
        const t = this.pendingAcks.get(e);
        t ? (t.resolve(), this.pendingAcks.delete(e)) : console.error("Ack received for unexpected RPC request", e)
    }
    handleIncomingRpcResponse(e, t, i) {
        const s = this.pendingResponses.get(e);
        s ? (s.resolve(t, i), this.pendingResponses.delete(e)) : console.error("Response received for unexpected RPC request", e)
    }
    handleIncomingRpcRequest(e, t, i, s, r, a) {
        return p(this, void 0, void 0, function*() {
            if (yield this.publishRpcAck(e, t), a !== 1) {
                yield this.publishRpcResponse(e, t, null, W.builtIn("UNSUPPORTED_VERSION"));
                return
            }
            const o = this.rpcHandlers.get(i);
            if (!o) {
                yield this.publishRpcResponse(e, t, null, W.builtIn("UNSUPPORTED_METHOD"));
                return
            }
            let c = null,
                d = null;
            try {
                const l = yield o({
                    requestId: t,
                    callerIdentity: e,
                    payload: s,
                    responseTimeout: r
                });
                Ni(l) > Xn ? (c = W.builtIn("RESPONSE_PAYLOAD_TOO_LARGE"), console.warn("RPC Response payload too large for ".concat(i))) : d = l
            } catch (l) {
                l instanceof W ? c = l : (console.warn("Uncaught error returned by RPC handler for ".concat(i, ". Returning APPLICATION_ERROR instead."), l), c = W.builtIn("APPLICATION_ERROR"))
            }
            yield this.publishRpcResponse(e, t, d, c)
        })
    }
    publishRpcRequest(e, t, i, s, r) {
        return p(this, void 0, void 0, function*() {
            const a = new Re({
                destinationIdentities: [e],
                kind: V.RELIABLE,
                value: {
                    case: "rpcRequest",
                    value: new Ss({
                        id: t,
                        method: i,
                        payload: s,
                        responseTimeoutMs: r,
                        version: 1
                    })
                }
            });
            yield this.engine.sendDataPacket(a, V.RELIABLE)
        })
    }
    publishRpcResponse(e, t, i, s) {
        return p(this, void 0, void 0, function*() {
            const r = new Re({
                destinationIdentities: [e],
                kind: V.RELIABLE,
                value: {
                    case: "rpcResponse",
                    value: new Es({
                        requestId: t,
                        value: s ? {
                            case: "error",
                            value: s.toProto()
                        } : {
                            case: "payload",
                            value: i ? ? ""
                        }
                    })
                }
            });
            yield this.engine.sendDataPacket(r, V.RELIABLE)
        })
    }
    publishRpcAck(e, t) {
        return p(this, void 0, void 0, function*() {
            const i = new Re({
                destinationIdentities: [e],
                kind: V.RELIABLE,
                value: {
                    case: "rpcAck",
                    value: new Ps({
                        requestId: t
                    })
                }
            });
            yield this.engine.sendDataPacket(i, V.RELIABLE)
        })
    }
    handleParticipantDisconnected(e) {
        for (const [t, {
                participantIdentity: i
            }] of this.pendingAcks) i === e && this.pendingAcks.delete(t);
        for (const [t, {
                participantIdentity: i,
                resolve: s
            }] of this.pendingResponses) i === e && (s(null, W.builtIn("RECIPIENT_DISCONNECTED")), this.pendingResponses.delete(t))
    }
    setEnabledPublishCodecs(e) {
        this.enabledPublishVideoCodecs = e.filter(t => t.mime.split("/")[0].toLowerCase() === "video")
    }
    updateInfo(e) {
        return e.sid !== this.sid || !super.updateInfo(e) ? !1 : (e.tracks.forEach(t => {
            var i, s;
            const r = this.trackPublications.get(t.sid);
            if (r) {
                const a = r.isMuted || ((s = (i = r.track) === null || i === void 0 ? void 0 : i.isUpstreamPaused) !== null && s !== void 0 ? s : !1);
                a !== t.muted && (this.log.debug("updating server mute state after reconcile", Object.assign(Object.assign(Object.assign({}, this.logContext), j(r)), {
                    mutedOnServer: a
                })), this.engine.client.sendMuteTrack(t.sid, a))
            }
        }), !0)
    }
    getPublicationForTrack(e) {
        let t;
        return this.trackPublications.forEach(i => {
            const s = i.track;
            s && (e instanceof MediaStreamTrack ? (s instanceof Y || s instanceof Z) && s.mediaStreamTrack === e && (t = i) : e === s && (t = i))
        }), t
    }
    waitForPendingPublicationOfSource(e) {
        return p(this, void 0, void 0, function*() {
            const t = Array.from(this.pendingPublishPromises.entries()).find(i => {
                let [s] = i;
                return s.source === e
            });
            if (t) return t[1]
        })
    }
}
class Lr extends ke {
    constructor(e, t, i, s) {
        super(e, t.sid, t.name, s), this.track = void 0, this.allowed = !0, this.disabled = !1, this.currentVideoQuality = ae.HIGH, this.handleEnded = r => {
            this.setTrack(void 0), this.emit(S.Ended, r)
        }, this.handleVisibilityChange = r => {
            this.log.debug("adaptivestream video visibility ".concat(this.trackSid, ", visible=").concat(r), this.logContext), this.disabled = !r, this.emitTrackUpdate()
        }, this.handleVideoDimensionsChange = r => {
            this.log.debug("adaptivestream video dimensions ".concat(r.width, "x").concat(r.height), this.logContext), this.videoDimensions = r, this.emitTrackUpdate()
        }, this.subscribed = i, this.updateInfo(t)
    }
    setSubscribed(e) {
        const t = this.subscriptionStatus,
            i = this.permissionStatus;
        this.subscribed = e, e && (this.allowed = !0);
        const s = new qt({
            trackSids: [this.trackSid],
            subscribe: this.subscribed,
            participantTracks: [new _s({
                participantSid: "",
                trackSids: [this.trackSid]
            })]
        });
        this.emit(S.UpdateSubscription, s), this.emitSubscriptionUpdateIfChanged(t), this.emitPermissionUpdateIfChanged(i)
    }
    get subscriptionStatus() {
        return this.subscribed === !1 ? ke.SubscriptionStatus.Unsubscribed : super.isSubscribed ? ke.SubscriptionStatus.Subscribed : ke.SubscriptionStatus.Desired
    }
    get permissionStatus() {
        return this.allowed ? ke.PermissionStatus.Allowed : ke.PermissionStatus.NotAllowed
    }
    get isSubscribed() {
        return this.subscribed === !1 ? !1 : super.isSubscribed
    }
    get isDesired() {
        return this.subscribed !== !1
    }
    get isEnabled() {
        return !this.disabled
    }
    setEnabled(e) {
        !this.isManualOperationAllowed() || this.disabled === !e || (this.disabled = !e, this.emitTrackUpdate())
    }
    setVideoQuality(e) {
        !this.isManualOperationAllowed() || this.currentVideoQuality === e || (this.currentVideoQuality = e, this.videoDimensions = void 0, this.emitTrackUpdate())
    }
    setVideoDimensions(e) {
        var t, i;
        this.isManualOperationAllowed() && (((t = this.videoDimensions) === null || t === void 0 ? void 0 : t.width) === e.width && ((i = this.videoDimensions) === null || i === void 0 ? void 0 : i.height) === e.height || (this.track instanceof ut && (this.videoDimensions = e), this.currentVideoQuality = void 0, this.emitTrackUpdate()))
    }
    setVideoFPS(e) {
        this.isManualOperationAllowed() && this.track instanceof ut && this.fps !== e && (this.fps = e, this.emitTrackUpdate())
    }
    get videoQuality() {
        return this.currentVideoQuality
    }
    setTrack(e) {
        const t = this.subscriptionStatus,
            i = this.permissionStatus,
            s = this.track;
        s !== e && (s && (s.off(S.VideoDimensionsChanged, this.handleVideoDimensionsChange), s.off(S.VisibilityChanged, this.handleVisibilityChange), s.off(S.Ended, this.handleEnded), s.detach(), s.stopMonitor(), this.emit(S.Unsubscribed, s)), super.setTrack(e), e && (e.sid = this.trackSid, e.on(S.VideoDimensionsChanged, this.handleVideoDimensionsChange), e.on(S.VisibilityChanged, this.handleVisibilityChange), e.on(S.Ended, this.handleEnded), this.emit(S.Subscribed, e)), this.emitPermissionUpdateIfChanged(i), this.emitSubscriptionUpdateIfChanged(t))
    }
    setAllowed(e) {
        const t = this.subscriptionStatus,
            i = this.permissionStatus;
        this.allowed = e, this.emitPermissionUpdateIfChanged(i), this.emitSubscriptionUpdateIfChanged(t)
    }
    setSubscriptionError(e) {
        this.emit(S.SubscriptionFailed, e)
    }
    updateInfo(e) {
        super.updateInfo(e);
        const t = this.metadataMuted;
        this.metadataMuted = e.muted, this.track ? this.track.setMuted(e.muted) : t !== e.muted && this.emit(e.muted ? S.Muted : S.Unmuted)
    }
    emitSubscriptionUpdateIfChanged(e) {
        const t = this.subscriptionStatus;
        e !== t && this.emit(S.SubscriptionStatusChanged, t, e)
    }
    emitPermissionUpdateIfChanged(e) {
        this.permissionStatus !== e && this.emit(S.SubscriptionPermissionChanged, this.permissionStatus, e)
    }
    isManualOperationAllowed() {
        return this.kind === C.Kind.Video && this.isAdaptiveStream ? (this.log.warn("adaptive stream is enabled, cannot change video track settings", this.logContext), !1) : this.isDesired ? !0 : (this.log.warn("cannot update track settings when not subscribed", this.logContext), !1)
    }
    get isAdaptiveStream() {
        return this.track instanceof ut && this.track.isAdaptiveStream
    }
    emitTrackUpdate() {
        const e = new Ms({
            trackSids: [this.trackSid],
            disabled: this.disabled,
            fps: this.fps
        });
        this.videoDimensions ? (e.width = Math.ceil(this.videoDimensions.width), e.height = Math.ceil(this.videoDimensions.height)) : this.currentVideoQuality !== void 0 ? e.quality = this.currentVideoQuality : e.quality = ae.HIGH, this.emit(S.UpdateSettings, e)
    }
}
class Bt extends Ar {
    static fromParticipantInfo(e, t, i) {
        return new Bt(e, t.sid, t.identity, t.name, t.metadata, i, t.kind)
    }
    get logContext() {
        return Object.assign(Object.assign({}, super.logContext), {
            rpID: this.sid,
            remoteParticipant: this.identity
        })
    }
    constructor(e, t, i, s, r, a) {
        let o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : Lt.STANDARD;
        super(t, i || "", s, r, a, o), this.signalClient = e, this.trackPublications = new Map, this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.volumeMap = new Map
    }
    addTrackPublication(e) {
        super.addTrackPublication(e), e.on(S.UpdateSettings, t => {
            this.log.debug("send update settings", Object.assign(Object.assign({}, this.logContext), j(e))), this.signalClient.sendUpdateTrackSettings(t)
        }), e.on(S.UpdateSubscription, t => {
            t.participantTracks.forEach(i => {
                i.participantSid = this.sid
            }), this.signalClient.sendUpdateSubscription(t)
        }), e.on(S.SubscriptionPermissionChanged, t => {
            this.emit(_.TrackSubscriptionPermissionChanged, e, t)
        }), e.on(S.SubscriptionStatusChanged, t => {
            this.emit(_.TrackSubscriptionStatusChanged, e, t)
        }), e.on(S.Subscribed, t => {
            this.emit(_.TrackSubscribed, t, e)
        }), e.on(S.Unsubscribed, t => {
            this.emit(_.TrackUnsubscribed, t, e)
        }), e.on(S.SubscriptionFailed, t => {
            this.emit(_.TrackSubscriptionFailed, e.trackSid, t)
        })
    }
    getTrackPublication(e) {
        const t = super.getTrackPublication(e);
        if (t) return t
    }
    getTrackPublicationByName(e) {
        const t = super.getTrackPublicationByName(e);
        if (t) return t
    }
    setVolume(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C.Source.Microphone;
        this.volumeMap.set(t, e);
        const i = this.getTrackPublication(t);
        i && i.track && i.track.setVolume(e)
    }
    getVolume() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : C.Source.Microphone;
        const t = this.getTrackPublication(e);
        return t && t.track ? t.track.getVolume() : this.volumeMap.get(e)
    }
    addSubscribedMediaTrack(e, t, i, s, r, a) {
        let o = this.getTrackPublicationBySid(t);
        if (o || t.startsWith("TR") || this.trackPublications.forEach(l => {
                !o && e.kind === l.kind.toString() && (o = l)
            }), !o) {
            if (a === 0) {
                this.log.error("could not find published track", Object.assign(Object.assign({}, this.logContext), {
                    trackSid: t
                })), this.emit(_.TrackSubscriptionFailed, t);
                return
            }
            a === void 0 && (a = 20), setTimeout(() => {
                this.addSubscribedMediaTrack(e, t, i, s, r, a - 1)
            }, 150);
            return
        }
        if (e.readyState === "ended") {
            this.log.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()", Object.assign(Object.assign({}, this.logContext), j(o))), this.emit(_.TrackSubscriptionFailed, t);
            return
        }
        const c = e.kind === "video";
        let d;
        return c ? d = new ut(e, t, s, r) : d = new lt(e, t, s, this.audioContext, this.audioOutput), d.source = o.source, d.isMuted = o.isMuted, d.setMediaStream(i), d.start(), o.setTrack(d), this.volumeMap.has(o.source) && d instanceof lt && d.setVolume(this.volumeMap.get(o.source)), o
    }
    get hasMetadata() {
        return !!this.participantInfo
    }
    getTrackPublicationBySid(e) {
        return this.trackPublications.get(e)
    }
    updateInfo(e) {
        if (!super.updateInfo(e)) return !1;
        const t = new Map,
            i = new Map;
        return e.tracks.forEach(s => {
            var r, a;
            let o = this.getTrackPublicationBySid(s.sid);
            if (o) o.updateInfo(s);
            else {
                const c = C.kindFromProto(s.type);
                if (!c) return;
                o = new Lr(c, s, (r = this.signalClient.connectOptions) === null || r === void 0 ? void 0 : r.autoSubscribe, {
                    loggerContextCb: () => this.logContext,
                    loggerName: (a = this.loggerOptions) === null || a === void 0 ? void 0 : a.loggerName
                }), o.updateInfo(s), i.set(s.sid, o);
                const d = Array.from(this.trackPublications.values()).find(l => l.source === o ? .source);
                d && o.source !== C.Source.Unknown && this.log.debug("received a second track publication for ".concat(this.identity, " with the same source: ").concat(o.source), Object.assign(Object.assign({}, this.logContext), {
                    oldTrack: j(d),
                    newTrack: j(o)
                })), this.addTrackPublication(o)
            }
            t.set(s.sid, o)
        }), this.trackPublications.forEach(s => {
            t.has(s.trackSid) || (this.log.trace("detected removed track on remote participant, unpublishing", Object.assign(Object.assign({}, this.logContext), j(s))), this.unpublishTrack(s.trackSid, !0))
        }), i.forEach(s => {
            this.emit(_.TrackPublished, s)
        }), !0
    }
    unpublishTrack(e, t) {
        const i = this.trackPublications.get(e);
        if (!i) return;
        const {
            track: s
        } = i;
        switch (s && (s.stop(), i.setTrack(void 0)), this.trackPublications.delete(e), i.kind) {
            case C.Kind.Audio:
                this.audioTrackPublications.delete(e);
                break;
            case C.Kind.Video:
                this.videoTrackPublications.delete(e);
                break
        }
        t && this.emit(_.TrackUnpublished, i)
    }
    setAudioOutput(e) {
        return p(this, void 0, void 0, function*() {
            this.audioOutput = e;
            const t = [];
            this.audioTrackPublications.forEach(i => {
                var s;
                i.track instanceof lt && t.push(i.track.setSinkId((s = e.deviceId) !== null && s !== void 0 ? s : "default"))
            }), yield Promise.all(t)
        })
    }
    emit(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
        return this.log.trace("participant event", Object.assign(Object.assign({}, this.logContext), {
            event: e,
            args: i
        })), super.emit(e, ...i)
    }
}
var U;
(function(n) {
    n.Disconnected = "disconnected", n.Connecting = "connecting", n.Connected = "connected", n.Reconnecting = "reconnecting", n.SignalReconnecting = "signalReconnecting"
})(U || (U = {}));
const $c = 4 * 1e3;
class Ur extends be.EventEmitter {
    constructor(e) {
        var t, i, s;
        super(), t = this, this.state = U.Disconnected, this.activeSpeakers = [], this.isE2EEEnabled = !1, this.audioEnabled = !0, this.isVideoPlaybackBlocked = !1, this.log = A, this.bufferedEvents = [], this.isResuming = !1, this.connect = (r, a, o) => p(this, void 0, void 0, function*() {
            var c;
            if (!ac()) throw Pe() ? Error("WebRTC isn't detected, have you called registerGlobals?") : Error("LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.");
            const d = yield this.disconnectLock.lock();
            if (this.state === U.Connected) return this.log.info("already connected to room ".concat(this.name), this.logContext), d(), Promise.resolve();
            if (this.connectFuture) return d(), this.connectFuture.promise;
            this.setAndEmitConnectionState(U.Connecting), ((c = this.regionUrlProvider) === null || c === void 0 ? void 0 : c.getServerUrl().toString()) !== r && (this.regionUrl = void 0, this.regionUrlProvider = void 0), Oi(new URL(r)) && (this.regionUrlProvider === void 0 ? this.regionUrlProvider = new Yn(r, a) : this.regionUrlProvider.updateToken(a), this.regionUrlProvider.fetchRegionSettings().then(h => {
                var m;
                (m = this.regionUrlProvider) === null || m === void 0 || m.setServerReportedRegions(h)
            }).catch(h => {
                this.log.warn("could not fetch region settings", Object.assign(Object.assign({}, this.logContext), {
                    error: h
                }))
            }));
            const l = (h, m, k) => p(this, void 0, void 0, function*() {
                    var v, E;
                    this.abortController && this.abortController.abort();
                    const T = new AbortController;
                    this.abortController = T, d ? .();
                    try {
                        yield this.attemptConnection(k ? ? r, a, o, T), this.abortController = void 0, h()
                    } catch (L) {
                        if (this.regionUrlProvider && L instanceof B && L.reason !== te.Cancelled && L.reason !== te.NotAllowed) {
                            let D = null;
                            try {
                                D = yield this.regionUrlProvider.getNextBestRegionUrl((v = this.abortController) === null || v === void 0 ? void 0 : v.signal)
                            } catch (y) {
                                if (y instanceof B && (y.status === 401 || y.reason === te.Cancelled)) {
                                    this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), m(y);
                                    return
                                }
                            }
                            D && !(!((E = this.abortController) === null || E === void 0) && E.signal.aborted) ? (this.log.info("Initial connection failed with ConnectionError: ".concat(L.message, ". Retrying with another region: ").concat(D), this.logContext), this.recreateEngine(), yield l(h, m, D)) : (this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), m(L))
                        } else this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), m(L)
                    }
                }),
                u = this.regionUrl;
            return this.regionUrl = void 0, this.connectFuture = new Er((h, m) => {
                l(h, m, u)
            }, () => {
                this.clearConnectionFutures()
            }), this.connectFuture.promise
        }), this.connectSignal = (r, a, o, c, d, l) => p(this, void 0, void 0, function*() {
            var u, h, m;
            const k = yield o.join(r, a, {
                autoSubscribe: c.autoSubscribe,
                adaptiveStream: typeof d.adaptiveStream == "object" ? !0 : d.adaptiveStream,
                maxRetries: c.maxRetries,
                e2eeEnabled: !!this.e2eeManager,
                websocketTimeout: c.websocketTimeout
            }, l.signal);
            let v = k.serverInfo;
            if (v || (v = {
                    version: k.serverVersion,
                    region: k.serverRegion
                }), this.serverInfo = v, this.log.debug("connected to Livekit Server ".concat(Object.entries(v).map(E => {
                    let [T, L] = E;
                    return "".concat(T, ": ").concat(L)
                }).join(", ")), {
                    room: (u = k.room) === null || u === void 0 ? void 0 : u.name,
                    roomSid: (h = k.room) === null || h === void 0 ? void 0 : h.sid,
                    identity: (m = k.participant) === null || m === void 0 ? void 0 : m.identity
                }), !v.version) throw new Bo("unknown server version");
            return v.version === "0.15.1" && this.options.dynacast && (this.log.debug("disabling dynacast due to server version", this.logContext), d.dynacast = !1), k
        }), this.applyJoinResponse = r => {
            const a = r.participant;
            if (this.localParticipant.sid = a.sid, this.localParticipant.identity = a.identity, this.localParticipant.setEnabledPublishCodecs(r.enabledPublishCodecs), this.options.e2ee && this.e2eeManager) try {
                this.e2eeManager.setSifTrailer(r.sifTrailer)
            } catch (o) {
                this.log.error(o instanceof Error ? o.message : "Could not set SifTrailer", Object.assign(Object.assign({}, this.logContext), {
                    error: o
                }))
            }
            this.handleParticipantUpdates([a, ...r.otherParticipants]), r.room && this.handleRoomUpdate(r.room)
        }, this.attemptConnection = (r, a, o, c) => p(this, void 0, void 0, function*() {
            var d, l, u;
            this.state === U.Reconnecting || this.isResuming || !((d = this.engine) === null || d === void 0) && d.pendingReconnect ? (this.log.info("Reconnection attempt replaced by new connection attempt", this.logContext), this.recreateEngine()) : this.maybeCreateEngine(), !((l = this.regionUrlProvider) === null || l === void 0) && l.isCloud() && this.engine.setRegionUrlProvider(this.regionUrlProvider), this.acquireAudioContext(), this.connOptions = Object.assign(Object.assign({}, Qi), o), this.connOptions.rtcConfig && (this.engine.rtcConfig = this.connOptions.rtcConfig), this.connOptions.peerConnectionTimeout && (this.engine.peerConnectionTimeout = this.connOptions.peerConnectionTimeout);
            try {
                const h = yield this.connectSignal(r, a, this.engine, this.connOptions, this.options, c);
                this.applyJoinResponse(h), this.setupLocalParticipantEvents(), this.emit(P.SignalConnected)
            } catch (h) {
                yield this.engine.close(), this.recreateEngine();
                const m = new B("could not establish signal connection");
                throw h instanceof Error && (m.message = "".concat(m.message, ": ").concat(h.message)), h instanceof B && (m.reason = h.reason, m.status = h.status), this.log.debug("error trying to establish signal connection", Object.assign(Object.assign({}, this.logContext), {
                    error: h
                })), m
            }
            if (c.signal.aborted) throw yield this.engine.close(), this.recreateEngine(), new B("Connection attempt aborted");
            try {
                yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout, c)
            } catch (h) {
                throw yield this.engine.close(), this.recreateEngine(), h
            }
            se() && this.options.disconnectOnPageLeave && (window.addEventListener("pagehide", this.onPageLeave), window.addEventListener("beforeunload", this.onPageLeave)), se() && (document.addEventListener("freeze", this.onPageLeave), (u = navigator.mediaDevices) === null || u === void 0 || u.addEventListener("devicechange", this.handleDeviceChange)), this.setAndEmitConnectionState(U.Connected), this.emit(P.Connected), this.registerConnectionReconcile()
        }), this.disconnect = function() {
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            return p(t, [...a], void 0, function() {
                var c = this;
                let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                return function*() {
                    var l, u, h, m;
                    const k = yield c.disconnectLock.lock();
                    try {
                        if (c.state === U.Disconnected) {
                            c.log.debug("already disconnected", c.logContext);
                            return
                        }
                        c.log.info("disconnect from room", Object.assign({}, c.logContext)), (c.state === U.Connecting || c.state === U.Reconnecting || c.isResuming) && (c.log.warn("abort connection attempt", c.logContext), (l = c.abortController) === null || l === void 0 || l.abort(), (h = (u = c.connectFuture) === null || u === void 0 ? void 0 : u.reject) === null || h === void 0 || h.call(u, new B("Client initiated disconnect")), c.connectFuture = void 0), !((m = c.engine) === null || m === void 0) && m.client.isDisconnected || (yield c.engine.client.sendLeave()), c.engine && (yield c.engine.close()), c.handleDisconnect(d, We.CLIENT_INITIATED), c.engine = void 0
                    } finally {
                        k()
                    }
                }()
            })
        }, this.onPageLeave = () => p(this, void 0, void 0, function*() {
            this.log.info("Page leave detected, disconnecting", this.logContext), yield this.disconnect()
        }), this.startAudio = () => p(this, void 0, void 0, function*() {
            const r = [],
                a = Se();
            if (a && a.os === "iOS") {
                const o = "livekit-dummy-audio-el";
                let c = document.getElementById(o);
                if (!c) {
                    c = document.createElement("audio"), c.id = o, c.autoplay = !0, c.hidden = !0;
                    const d = ti();
                    d.enabled = !0;
                    const l = new MediaStream([d]);
                    c.srcObject = l, document.addEventListener("visibilitychange", () => {
                        c && (c.srcObject = document.hidden ? null : l, document.hidden || (this.log.debug("page visible again, triggering startAudio to resume playback and update playback status", this.logContext), this.startAudio()))
                    }), document.body.append(c), this.once(P.Disconnected, () => {
                        c ? .remove(), c = null
                    })
                }
                r.push(c)
            }
            this.remoteParticipants.forEach(o => {
                o.audioTrackPublications.forEach(c => {
                    c.track && c.track.attachedElements.forEach(d => {
                        r.push(d)
                    })
                })
            });
            try {
                yield Promise.all([this.acquireAudioContext(), ...r.map(o => (o.muted = !1, o.play()))]), this.handleAudioPlaybackStarted()
            } catch (o) {
                throw this.handleAudioPlaybackFailed(o), o
            }
        }), this.startVideo = () => p(this, void 0, void 0, function*() {
            const r = [];
            for (const a of this.remoteParticipants.values()) a.videoTrackPublications.forEach(o => {
                var c;
                (c = o.track) === null || c === void 0 || c.attachedElements.forEach(d => {
                    r.includes(d) || r.push(d)
                })
            });
            yield Promise.all(r.map(a => a.play())).then(() => {
                this.handleVideoPlaybackStarted()
            }).catch(a => {
                a.name === "NotAllowedError" ? this.handleVideoPlaybackFailed() : this.log.warn("Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler", this.logContext)
            })
        }), this.handleRestarting = () => {
            this.clearConnectionReconcile(), this.isResuming = !1;
            for (const r of this.remoteParticipants.values()) this.handleParticipantDisconnected(r.identity, r);
            this.setAndEmitConnectionState(U.Reconnecting) && this.emit(P.Reconnecting)
        }, this.handleSignalRestarted = r => p(this, void 0, void 0, function*() {
            this.log.debug("signal reconnected to server, region ".concat(r.serverRegion), Object.assign(Object.assign({}, this.logContext), {
                region: r.serverRegion
            })), this.bufferedEvents = [], this.applyJoinResponse(r);
            try {
                yield this.localParticipant.republishAllTracks(void 0, !0)
            } catch (a) {
                this.log.error("error trying to re-publish tracks after reconnection", Object.assign(Object.assign({}, this.logContext), {
                    error: a
                }))
            }
            try {
                yield this.engine.waitForRestarted(), this.log.debug("fully reconnected to server", Object.assign(Object.assign({}, this.logContext), {
                    region: r.serverRegion
                }))
            } catch {
                return
            }
            this.setAndEmitConnectionState(U.Connected), this.emit(P.Reconnected), this.registerConnectionReconcile(), this.emitBufferedEvents()
        }), this.handleParticipantUpdates = r => {
            r.forEach(a => {
                var o;
                if (a.identity === this.localParticipant.identity) {
                    this.localParticipant.updateInfo(a);
                    return
                }
                a.identity === "" && (a.identity = (o = this.sidToIdentity.get(a.sid)) !== null && o !== void 0 ? o : "");
                let c = this.remoteParticipants.get(a.identity);
                a.state === li.DISCONNECTED ? this.handleParticipantDisconnected(a.identity, c) : c = this.getOrCreateParticipant(a.identity, a)
            })
        }, this.handleActiveSpeakersUpdate = r => {
            const a = [],
                o = {};
            r.forEach(c => {
                if (o[c.sid] = !0, c.sid === this.localParticipant.sid) this.localParticipant.audioLevel = c.level, this.localParticipant.setIsSpeaking(!0), a.push(this.localParticipant);
                else {
                    const d = this.getRemoteParticipantBySid(c.sid);
                    d && (d.audioLevel = c.level, d.setIsSpeaking(!0), a.push(d))
                }
            }), o[this.localParticipant.sid] || (this.localParticipant.audioLevel = 0, this.localParticipant.setIsSpeaking(!1)), this.remoteParticipants.forEach(c => {
                o[c.sid] || (c.audioLevel = 0, c.setIsSpeaking(!1))
            }), this.activeSpeakers = a, this.emitWhenConnected(P.ActiveSpeakersChanged, a)
        }, this.handleSpeakersChanged = r => {
            const a = new Map;
            this.activeSpeakers.forEach(c => {
                const d = this.remoteParticipants.get(c.identity);
                d && d.sid !== c.sid || a.set(c.sid, c)
            }), r.forEach(c => {
                let d = this.getRemoteParticipantBySid(c.sid);
                c.sid === this.localParticipant.sid && (d = this.localParticipant), d && (d.audioLevel = c.level, d.setIsSpeaking(c.active), c.active ? a.set(c.sid, d) : a.delete(c.sid))
            });
            const o = Array.from(a.values());
            o.sort((c, d) => d.audioLevel - c.audioLevel), this.activeSpeakers = o, this.emitWhenConnected(P.ActiveSpeakersChanged, o)
        }, this.handleStreamStateUpdate = r => {
            r.streamStates.forEach(a => {
                const o = this.getRemoteParticipantBySid(a.participantSid);
                if (!o) return;
                const c = o.getTrackPublicationBySid(a.trackSid);
                if (!c || !c.track) return;
                const d = C.streamStateFromProto(a.state);
                d !== c.track.streamState && (c.track.streamState = d, o.emit(_.TrackStreamStateChanged, c, c.track.streamState), this.emitWhenConnected(P.TrackStreamStateChanged, c, c.track.streamState, o))
            })
        }, this.handleSubscriptionPermissionUpdate = r => {
            const a = this.getRemoteParticipantBySid(r.participantSid);
            if (!a) return;
            const o = a.getTrackPublicationBySid(r.trackSid);
            o && o.setAllowed(r.allowed)
        }, this.handleSubscriptionError = r => {
            const a = Array.from(this.remoteParticipants.values()).find(c => c.trackPublications.has(r.trackSid));
            if (!a) return;
            const o = a.getTrackPublicationBySid(r.trackSid);
            o && o.setSubscriptionError(r.err)
        }, this.handleDataPacket = r => {
            const a = this.remoteParticipants.get(r.participantIdentity);
            r.value.case === "user" ? this.handleUserPacket(a, r.value.value, r.kind) : r.value.case === "transcription" ? this.handleTranscription(a, r.value.value) : r.value.case === "sipDtmf" ? this.handleSipDtmf(a, r.value.value) : r.value.case === "chatMessage" ? this.handleChatMessage(a, r.value.value) : r.value.case === "metrics" && this.handleMetrics(r.value.value, a)
        }, this.handleUserPacket = (r, a, o) => {
            this.emit(P.DataReceived, a.payload, r, o, a.topic), r ? .emit(_.DataReceived, a.payload, o)
        }, this.handleSipDtmf = (r, a) => {
            this.emit(P.SipDTMFReceived, a, r), r ? .emit(_.SipDTMFReceived, a)
        }, this.bufferedSegments = new Map, this.handleTranscription = (r, a) => {
            const o = a.transcribedParticipantIdentity === this.localParticipant.identity ? this.localParticipant : this.getParticipantByIdentity(a.transcribedParticipantIdentity),
                c = o ? .trackPublications.get(a.trackId),
                d = mc(a, this.transcriptionReceivedTimes);
            c ? .emit(S.TranscriptionReceived, d), o ? .emit(_.TranscriptionReceived, d, c), this.emit(P.TranscriptionReceived, d, o, c)
        }, this.handleChatMessage = (r, a) => {
            const o = fc(a);
            this.emit(P.ChatMessage, o, r)
        }, this.handleMetrics = (r, a) => {
            this.emit(P.MetricsReceived, r, a)
        }, this.handleAudioPlaybackStarted = () => {
            this.canPlaybackAudio || (this.audioEnabled = !0, this.emit(P.AudioPlaybackStatusChanged, !0))
        }, this.handleAudioPlaybackFailed = r => {
            this.log.warn("could not playback audio", Object.assign(Object.assign({}, this.logContext), {
                error: r
            })), this.canPlaybackAudio && (this.audioEnabled = !1, this.emit(P.AudioPlaybackStatusChanged, !1))
        }, this.handleVideoPlaybackStarted = () => {
            this.isVideoPlaybackBlocked && (this.isVideoPlaybackBlocked = !1, this.emit(P.VideoPlaybackStatusChanged, !0))
        }, this.handleVideoPlaybackFailed = () => {
            this.isVideoPlaybackBlocked || (this.isVideoPlaybackBlocked = !0, this.emit(P.VideoPlaybackStatusChanged, !1))
        }, this.handleDeviceChange = () => p(this, void 0, void 0, function*() {
            const r = yield X.getInstance().getDevices(void 0, !1), a = ["audiooutput"];
            for (let o of a) {
                const c = r.filter(d => d.kind === o);
                c.length > 0 && !c.find(d => d.deviceId === this.getActiveDevice(o)) && (yield this.switchActiveDevice(o, c[0].deviceId))
            }
            this.emit(P.MediaDevicesChanged)
        }), this.handleRoomUpdate = r => {
            const a = this.roomInfo;
            this.roomInfo = r, a && a.metadata !== r.metadata && this.emitWhenConnected(P.RoomMetadataChanged, r.metadata), a ? .activeRecording !== r.activeRecording && this.emitWhenConnected(P.RecordingStatusChanged, r.activeRecording)
        }, this.handleConnectionQualityUpdate = r => {
            r.updates.forEach(a => {
                if (a.participantSid === this.localParticipant.sid) {
                    this.localParticipant.setConnectionQuality(a.quality);
                    return
                }
                const o = this.getRemoteParticipantBySid(a.participantSid);
                o && o.setConnectionQuality(a.quality)
            })
        }, this.onLocalParticipantMetadataChanged = r => {
            this.emit(P.ParticipantMetadataChanged, r, this.localParticipant)
        }, this.onLocalParticipantNameChanged = r => {
            this.emit(P.ParticipantNameChanged, r, this.localParticipant)
        }, this.onLocalAttributesChanged = r => {
            this.emit(P.ParticipantAttributesChanged, r, this.localParticipant)
        }, this.onLocalTrackMuted = r => {
            this.emit(P.TrackMuted, r, this.localParticipant)
        }, this.onLocalTrackUnmuted = r => {
            this.emit(P.TrackUnmuted, r, this.localParticipant)
        }, this.onTrackProcessorUpdate = r => {
            var a;
            (a = r ? .onPublish) === null || a === void 0 || a.call(r, this)
        }, this.onLocalTrackPublished = r => p(this, void 0, void 0, function*() {
            var a, o, c, d, l, u;
            (a = r.track) === null || a === void 0 || a.on(S.TrackProcessorUpdate, this.onTrackProcessorUpdate), (o = r.track) === null || o === void 0 || o.on(S.Restarted, this.onLocalTrackRestarted), (l = (d = (c = r.track) === null || c === void 0 ? void 0 : c.getProcessor()) === null || d === void 0 ? void 0 : d.onPublish) === null || l === void 0 || l.call(d, this), this.emit(P.LocalTrackPublished, r, this.localParticipant), r.track instanceof Y && (yield r.track.checkForSilence()) && this.emit(P.LocalAudioSilenceDetected, r);
            const h = yield(u = r.track) === null || u === void 0 ? void 0 : u.getDeviceId(), m = On(r.source);
            m && h && h !== this.localParticipant.activeDeviceMap.get(m) && (this.localParticipant.activeDeviceMap.set(m, h), this.emit(P.ActiveDeviceChanged, m, h))
        }), this.onLocalTrackUnpublished = r => {
            var a, o;
            (a = r.track) === null || a === void 0 || a.off(S.TrackProcessorUpdate, this.onTrackProcessorUpdate), (o = r.track) === null || o === void 0 || o.off(S.Restarted, this.onLocalTrackRestarted), this.emit(P.LocalTrackUnpublished, r, this.localParticipant)
        }, this.onLocalTrackRestarted = r => p(this, void 0, void 0, function*() {
            const a = yield r.getDeviceId(!1), o = On(r.source);
            o && a && a !== this.localParticipant.activeDeviceMap.get(o) && (this.log.debug("local track restarted, setting ".concat(o, " ").concat(a, " active"), this.logContext), this.localParticipant.activeDeviceMap.set(o, a), this.emit(P.ActiveDeviceChanged, o, a))
        }), this.onLocalConnectionQualityChanged = r => {
            this.emit(P.ConnectionQualityChanged, r, this.localParticipant)
        }, this.onMediaDevicesError = r => {
            this.emit(P.MediaDevicesError, r)
        }, this.onLocalParticipantPermissionsChanged = r => {
            this.emit(P.ParticipantPermissionsChanged, r, this.localParticipant)
        }, this.onLocalChatMessageSent = r => {
            this.emit(P.ChatMessage, r, this.localParticipant)
        }, this.setMaxListeners(100), this.remoteParticipants = new Map, this.sidToIdentity = new Map, this.options = Object.assign(Object.assign({}, Ic), e), this.log = Ce((i = this.options.loggerName) !== null && i !== void 0 ? i : ue.Room), this.transcriptionReceivedTimes = new Map, this.options.audioCaptureDefaults = Object.assign(Object.assign({}, _r), e ? .audioCaptureDefaults), this.options.videoCaptureDefaults = Object.assign(Object.assign({}, wr), e ? .videoCaptureDefaults), this.options.publishDefaults = Object.assign(Object.assign({}, wc), e ? .publishDefaults), this.maybeCreateEngine(), this.disconnectLock = new ne, this.localParticipant = new es("", "", this.engine, this.options), this.options.videoCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("videoinput", Te(this.options.videoCaptureDefaults.deviceId)), this.options.audioCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("audioinput", Te(this.options.audioCaptureDefaults.deviceId)), !((s = this.options.audioOutput) === null || s === void 0) && s.deviceId && this.switchActiveDevice("audiooutput", Te(this.options.audioOutput.deviceId)).catch(r => this.log.warn("Could not set audio output: ".concat(r.message), this.logContext)), this.options.e2ee && this.setupE2EE()
    }
    setE2EEEnabled(e) {
        return p(this, void 0, void 0, function*() {
            if (this.e2eeManager) yield Promise.all([this.localParticipant.setE2EEEnabled(e)]), this.localParticipant.identity !== "" && this.e2eeManager.setParticipantCryptorEnabled(e, this.localParticipant.identity);
            else throw Error("e2ee not configured, please set e2ee settings within the room options")
        })
    }
    setupE2EE() {
        var e;
        this.options.e2ee && (this.e2eeManager = new vc(this.options.e2ee), this.e2eeManager.on(Ie.ParticipantEncryptionStatusChanged, (t, i) => {
            i instanceof es && (this.isE2EEEnabled = t), this.emit(P.ParticipantEncryptionStatusChanged, t, i)
        }), this.e2eeManager.on(Ie.EncryptionError, t => this.emit(P.EncryptionError, t)), (e = this.e2eeManager) === null || e === void 0 || e.setup(this))
    }
    get logContext() {
        var e;
        return {
            room: this.name,
            roomID: (e = this.roomInfo) === null || e === void 0 ? void 0 : e.sid,
            participant: this.localParticipant.identity,
            pID: this.localParticipant.sid
        }
    }
    get isRecording() {
        var e, t;
        return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.activeRecording) !== null && t !== void 0 ? t : !1
    }
    getSid() {
        return p(this, void 0, void 0, function*() {
            return this.state === U.Disconnected ? "" : this.roomInfo && this.roomInfo.sid !== "" ? this.roomInfo.sid : new Promise((e, t) => {
                const i = s => {
                    s.sid !== "" && (this.engine.off(w.RoomUpdate, i), e(s.sid))
                };
                this.engine.on(w.RoomUpdate, i), this.once(P.Disconnected, () => {
                    this.engine.off(w.RoomUpdate, i), t("Room disconnected before room server id was available")
                })
            })
        })
    }
    get name() {
        var e, t;
        return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : ""
    }
    get metadata() {
        var e;
        return (e = this.roomInfo) === null || e === void 0 ? void 0 : e.metadata
    }
    get numParticipants() {
        var e, t;
        return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.numParticipants) !== null && t !== void 0 ? t : 0
    }
    get numPublishers() {
        var e, t;
        return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.numPublishers) !== null && t !== void 0 ? t : 0
    }
    maybeCreateEngine() {
        this.engine && !this.engine.isClosed || (this.engine = new Kc(this.options), this.engine.on(w.ParticipantUpdate, this.handleParticipantUpdates).on(w.RoomUpdate, this.handleRoomUpdate).on(w.SpeakersChanged, this.handleSpeakersChanged).on(w.StreamStateChanged, this.handleStreamStateUpdate).on(w.ConnectionQualityUpdate, this.handleConnectionQualityUpdate).on(w.SubscriptionError, this.handleSubscriptionError).on(w.SubscriptionPermissionUpdate, this.handleSubscriptionPermissionUpdate).on(w.MediaTrackAdded, (e, t, i) => {
            this.onTrackAdded(e, t, i)
        }).on(w.Disconnected, e => {
            this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e)
        }).on(w.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate).on(w.DataPacketReceived, this.handleDataPacket).on(w.Resuming, () => {
            this.clearConnectionReconcile(), this.isResuming = !0, this.log.info("Resuming signal connection", this.logContext), this.setAndEmitConnectionState(U.SignalReconnecting) && this.emit(P.SignalReconnecting)
        }).on(w.Resumed, () => {
            this.registerConnectionReconcile(), this.isResuming = !1, this.log.info("Resumed signal connection", this.logContext), this.updateSubscriptions(), this.emitBufferedEvents(), this.setAndEmitConnectionState(U.Connected) && this.emit(P.Reconnected)
        }).on(w.SignalResumed, () => {
            this.bufferedEvents = [], (this.state === U.Reconnecting || this.isResuming) && this.sendSyncState()
        }).on(w.Restarting, this.handleRestarting).on(w.SignalRestarted, this.handleSignalRestarted).on(w.Offline, () => {
            this.setAndEmitConnectionState(U.Reconnecting) && this.emit(P.Reconnecting)
        }).on(w.DCBufferStatusChanged, (e, t) => {
            this.emit(P.DCBufferStatusChanged, e, t)
        }).on(w.LocalTrackSubscribed, e => {
            const t = this.localParticipant.getTrackPublications().find(i => {
                let {
                    trackSid: s
                } = i;
                return s === e
            });
            if (!t) {
                this.log.warn("could not find local track subscription for subscribed event", this.logContext);
                return
            }
            this.localParticipant.emit(_.LocalTrackSubscribed, t), this.emitWhenConnected(P.LocalTrackSubscribed, t, this.localParticipant)
        }), this.localParticipant && this.localParticipant.setupEngine(this.engine), this.e2eeManager && this.e2eeManager.setupEngine(this.engine))
    }
    static getLocalDevices(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return X.getInstance().getDevices(e, t)
    }
    prepareConnection(e, t) {
        return p(this, void 0, void 0, function*() {
            if (this.state === U.Disconnected) {
                this.log.debug("prepareConnection to ".concat(e), this.logContext);
                try {
                    if (Oi(new URL(e)) && t) {
                        this.regionUrlProvider = new Yn(e, t);
                        const i = yield this.regionUrlProvider.getNextBestRegionUrl();
                        i && this.state === U.Disconnected && (this.regionUrl = i, yield fetch(Ln(i), {
                            method: "HEAD"
                        }), this.log.debug("prepared connection to ".concat(i), this.logContext))
                    } else yield fetch(Ln(e), {
                        method: "HEAD"
                    })
                } catch (i) {
                    this.log.warn("could not prepare connection", Object.assign(Object.assign({}, this.logContext), {
                        error: i
                    }))
                }
            }
        })
    }
    getParticipantByIdentity(e) {
        return this.localParticipant.identity === e ? this.localParticipant : this.remoteParticipants.get(e)
    }
    clearConnectionFutures() {
        this.connectFuture = void 0
    }
    simulateScenario(e, t) {
        return p(this, void 0, void 0, function*() {
            let i = () => {},
                s;
            switch (e) {
                case "signal-reconnect":
                    yield this.engine.client.handleOnClose("simulate disconnect");
                    break;
                case "speaker":
                    s = new pe({
                        scenario: {
                            case: "speakerUpdate",
                            value: 3
                        }
                    });
                    break;
                case "node-failure":
                    s = new pe({
                        scenario: {
                            case: "nodeFailure",
                            value: !0
                        }
                    });
                    break;
                case "server-leave":
                    s = new pe({
                        scenario: {
                            case: "serverLeave",
                            value: !0
                        }
                    });
                    break;
                case "migration":
                    s = new pe({
                        scenario: {
                            case: "migration",
                            value: !0
                        }
                    });
                    break;
                case "resume-reconnect":
                    this.engine.failNext(), yield this.engine.client.handleOnClose("simulate resume-disconnect");
                    break;
                case "disconnect-signal-on-resume":
                    i = () => p(this, void 0, void 0, function*() {
                        yield this.engine.client.handleOnClose("simulate resume-disconnect")
                    }), s = new pe({
                        scenario: {
                            case: "disconnectSignalOnResume",
                            value: !0
                        }
                    });
                    break;
                case "disconnect-signal-on-resume-no-messages":
                    i = () => p(this, void 0, void 0, function*() {
                        yield this.engine.client.handleOnClose("simulate resume-disconnect")
                    }), s = new pe({
                        scenario: {
                            case: "disconnectSignalOnResumeNoMessages",
                            value: !0
                        }
                    });
                    break;
                case "full-reconnect":
                    this.engine.fullReconnectOnNext = !0, yield this.engine.client.handleOnClose("simulate full-reconnect");
                    break;
                case "force-tcp":
                case "force-tls":
                    s = new pe({
                        scenario: {
                            case: "switchCandidateProtocol",
                            value: e === "force-tls" ? 2 : 1
                        }
                    }), i = () => p(this, void 0, void 0, function*() {
                        const r = this.engine.client.onLeave;
                        r && r(new Kt({
                            reason: We.CLIENT_INITIATED,
                            action: He.RECONNECT
                        }))
                    });
                    break;
                case "subscriber-bandwidth":
                    if (t === void 0 || typeof t != "number") throw new Error("subscriber-bandwidth requires a number as argument");
                    s = new pe({
                        scenario: {
                            case: "subscriberBandwidth",
                            value: BigInt(t)
                        }
                    });
                    break;
                case "leave-full-reconnect":
                    s = new pe({
                        scenario: {
                            case: "leaveRequestFullReconnect",
                            value: !0
                        }
                    })
            }
            s && (yield this.engine.client.sendSimulateScenario(s), yield i())
        })
    }
    get canPlaybackAudio() {
        return this.audioEnabled
    }
    get canPlaybackVideo() {
        return !this.isVideoPlaybackBlocked
    }
    getActiveDevice(e) {
        return this.localParticipant.activeDeviceMap.get(e)
    }
    switchActiveDevice(e, t) {
        return p(this, arguments, void 0, function(i, s) {
            var r = this;
            let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return function*() {
                var o, c, d, l, u, h, m;
                let k = !1,
                    v = !0;
                const E = a ? {
                    exact: s
                } : s;
                if (i === "audioinput") {
                    const T = (o = r.getActiveDevice(i)) !== null && o !== void 0 ? o : r.options.audioCaptureDefaults.deviceId;
                    r.options.audioCaptureDefaults.deviceId = E, k = T !== E;
                    const L = Array.from(r.localParticipant.audioTrackPublications.values()).filter(D => D.source === C.Source.Microphone);
                    try {
                        v = (yield Promise.all(L.map(D => {
                            var y;
                            return (y = D.audioTrack) === null || y === void 0 ? void 0 : y.setDeviceId(E)
                        }))).every(D => D === !0)
                    } catch (D) {
                        throw r.options.audioCaptureDefaults.deviceId = T, D
                    }
                } else if (i === "videoinput") {
                    const T = (c = r.getActiveDevice(i)) !== null && c !== void 0 ? c : r.options.videoCaptureDefaults.deviceId;
                    r.options.videoCaptureDefaults.deviceId = E, k = T !== E;
                    const L = Array.from(r.localParticipant.videoTrackPublications.values()).filter(D => D.source === C.Source.Camera);
                    try {
                        v = (yield Promise.all(L.map(D => {
                            var y;
                            return (y = D.videoTrack) === null || y === void 0 ? void 0 : y.setDeviceId(E)
                        }))).every(D => D === !0)
                    } catch (D) {
                        throw r.options.videoCaptureDefaults.deviceId = T, D
                    }
                } else if (i === "audiooutput") {
                    if (!Ii() && !r.options.webAudioMix || r.options.webAudioMix && r.audioContext && !("setSinkId" in r.audioContext)) throw new Error("cannot switch audio output, setSinkId not supported");
                    r.options.webAudioMix && (s = (d = yield X.getInstance().normalizeDeviceId("audiooutput", s)) !== null && d !== void 0 ? d : ""), (l = (m = r.options).audioOutput) !== null && l !== void 0 || (m.audioOutput = {});
                    const T = (u = r.getActiveDevice(i)) !== null && u !== void 0 ? u : r.options.audioOutput.deviceId;
                    r.options.audioOutput.deviceId = s, k = T !== E;
                    try {
                        r.options.webAudioMix && ((h = r.audioContext) === null || h === void 0 || h.setSinkId(s)), yield Promise.all(Array.from(r.remoteParticipants.values()).map(L => L.setAudioOutput({
                            deviceId: s
                        })))
                    } catch (L) {
                        throw r.options.audioOutput.deviceId = T, L
                    }
                }
                return k && v && (r.localParticipant.activeDeviceMap.set(i, s), r.emit(P.ActiveDeviceChanged, i, s)), v
            }()
        })
    }
    setupLocalParticipantEvents() {
        this.localParticipant.on(_.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).on(_.ParticipantNameChanged, this.onLocalParticipantNameChanged).on(_.AttributesChanged, this.onLocalAttributesChanged).on(_.TrackMuted, this.onLocalTrackMuted).on(_.TrackUnmuted, this.onLocalTrackUnmuted).on(_.LocalTrackPublished, this.onLocalTrackPublished).on(_.LocalTrackUnpublished, this.onLocalTrackUnpublished).on(_.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).on(_.MediaDevicesError, this.onMediaDevicesError).on(_.AudioStreamAcquired, this.startAudio).on(_.ChatMessage, this.onLocalChatMessageSent).on(_.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged)
    }
    recreateEngine() {
        var e;
        (e = this.engine) === null || e === void 0 || e.close(), this.engine = void 0, this.isResuming = !1, this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.bufferedEvents = [], this.maybeCreateEngine()
    }
    onTrackAdded(e, t, i) {
        if (this.state === U.Connecting || this.state === U.Reconnecting) {
            const l = () => {
                    this.onTrackAdded(e, t, i), u()
                },
                u = () => {
                    this.off(P.Reconnected, l), this.off(P.Connected, l), this.off(P.Disconnected, u)
                };
            this.once(P.Reconnected, l), this.once(P.Connected, l), this.once(P.Disconnected, u);
            return
        }
        if (this.state === U.Disconnected) {
            this.log.warn("skipping incoming track after Room disconnected", this.logContext);
            return
        }
        const s = nc(t.id),
            r = s[0];
        let a = s[1],
            o = e.id;
        if (a && a.startsWith("TR") && (o = a), r === this.localParticipant.sid) {
            this.log.warn("tried to create RemoteParticipant for local participant", this.logContext);
            return
        }
        const c = Array.from(this.remoteParticipants.values()).find(l => l.sid === r);
        if (!c) {
            this.log.error("Tried to add a track for a participant, that's not present. Sid: ".concat(r), this.logContext);
            return
        }
        let d;
        this.options.adaptiveStream && (typeof this.options.adaptiveStream == "object" ? d = this.options.adaptiveStream : d = {}), c.addSubscribedMediaTrack(e, o, t, i, d)
    }
    handleDisconnect() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
            t = arguments.length > 1 ? arguments[1] : void 0;
        var i;
        if (this.clearConnectionReconcile(), this.isResuming = !1, this.bufferedEvents = [], this.transcriptionReceivedTimes.clear(), this.state !== U.Disconnected) {
            this.regionUrl = void 0;
            try {
                this.remoteParticipants.forEach(s => {
                    s.trackPublications.forEach(r => {
                        s.unpublishTrack(r.trackSid)
                    })
                }), this.localParticipant.trackPublications.forEach(s => {
                    var r, a;
                    s.track && this.localParticipant.unpublishTrack(s.track, e), e && ((r = s.track) === null || r === void 0 || r.detach(), (a = s.track) === null || a === void 0 || a.stop())
                }), this.localParticipant.off(_.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).off(_.ParticipantNameChanged, this.onLocalParticipantNameChanged).off(_.AttributesChanged, this.onLocalAttributesChanged).off(_.TrackMuted, this.onLocalTrackMuted).off(_.TrackUnmuted, this.onLocalTrackUnmuted).off(_.LocalTrackPublished, this.onLocalTrackPublished).off(_.LocalTrackUnpublished, this.onLocalTrackUnpublished).off(_.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).off(_.MediaDevicesError, this.onMediaDevicesError).off(_.AudioStreamAcquired, this.startAudio).off(_.ChatMessage, this.onLocalChatMessageSent).off(_.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged), this.localParticipant.trackPublications.clear(), this.localParticipant.videoTrackPublications.clear(), this.localParticipant.audioTrackPublications.clear(), this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.activeSpeakers = [], this.audioContext && typeof this.options.webAudioMix == "boolean" && (this.audioContext.close(), this.audioContext = void 0), se() && (window.removeEventListener("beforeunload", this.onPageLeave), window.removeEventListener("pagehide", this.onPageLeave), window.removeEventListener("freeze", this.onPageLeave), (i = navigator.mediaDevices) === null || i === void 0 || i.removeEventListener("devicechange", this.handleDeviceChange))
            } finally {
                this.setAndEmitConnectionState(U.Disconnected), this.emit(P.Disconnected, t)
            }
        }
    }
    handleParticipantDisconnected(e, t) {
        var i;
        this.remoteParticipants.delete(e), t && (t.trackPublications.forEach(s => {
            t.unpublishTrack(s.trackSid, !0)
        }), this.emit(P.ParticipantDisconnected, t), (i = this.localParticipant) === null || i === void 0 || i.handleParticipantDisconnected(t.identity))
    }
    acquireAudioContext() {
        return p(this, void 0, void 0, function*() {
            var e, t;
            if (typeof this.options.webAudioMix != "boolean" && this.options.webAudioMix.audioContext ? this.audioContext = this.options.webAudioMix.audioContext : (!this.audioContext || this.audioContext.state === "closed") && (this.audioContext = (e = zi()) !== null && e !== void 0 ? e : void 0), this.audioContext && this.audioContext.state === "suspended") try {
                yield this.audioContext.resume()
            } catch (s) {
                this.log.warn("Could not resume audio context", Object.assign(Object.assign({}, this.logContext), {
                    error: s
                }))
            }
            this.options.webAudioMix && this.remoteParticipants.forEach(s => s.setAudioContext(this.audioContext)), this.localParticipant.setAudioContext(this.audioContext);
            const i = ((t = this.audioContext) === null || t === void 0 ? void 0 : t.state) === "running";
            i !== this.canPlaybackAudio && (this.audioEnabled = i, this.emit(P.AudioPlaybackStatusChanged, i))
        })
    }
    createParticipant(e, t) {
        var i;
        let s;
        return t ? s = Bt.fromParticipantInfo(this.engine.client, t, {
            loggerContextCb: () => this.logContext,
            loggerName: this.options.loggerName
        }) : s = new Bt(this.engine.client, "", e, void 0, void 0, {
            loggerContextCb: () => this.logContext,
            loggerName: this.options.loggerName
        }), this.options.webAudioMix && s.setAudioContext(this.audioContext), !((i = this.options.audioOutput) === null || i === void 0) && i.deviceId && s.setAudioOutput(this.options.audioOutput).catch(r => this.log.warn("Could not set audio output: ".concat(r.message), this.logContext)), s
    }
    getOrCreateParticipant(e, t) {
        if (this.remoteParticipants.has(e)) {
            const s = this.remoteParticipants.get(e);
            return t && s.updateInfo(t) && this.sidToIdentity.set(t.sid, t.identity), s
        }
        const i = this.createParticipant(e, t);
        return this.remoteParticipants.set(e, i), this.sidToIdentity.set(t.sid, t.identity), this.emitWhenConnected(P.ParticipantConnected, i), i.on(_.TrackPublished, s => {
            this.emitWhenConnected(P.TrackPublished, s, i)
        }).on(_.TrackSubscribed, (s, r) => {
            s.kind === C.Kind.Audio ? (s.on(S.AudioPlaybackStarted, this.handleAudioPlaybackStarted), s.on(S.AudioPlaybackFailed, this.handleAudioPlaybackFailed)) : s.kind === C.Kind.Video && (s.on(S.VideoPlaybackFailed, this.handleVideoPlaybackFailed), s.on(S.VideoPlaybackStarted, this.handleVideoPlaybackStarted)), this.emit(P.TrackSubscribed, s, r, i)
        }).on(_.TrackUnpublished, s => {
            this.emit(P.TrackUnpublished, s, i)
        }).on(_.TrackUnsubscribed, (s, r) => {
            this.emit(P.TrackUnsubscribed, s, r, i)
        }).on(_.TrackSubscriptionFailed, s => {
            this.emit(P.TrackSubscriptionFailed, s, i)
        }).on(_.TrackMuted, s => {
            this.emitWhenConnected(P.TrackMuted, s, i)
        }).on(_.TrackUnmuted, s => {
            this.emitWhenConnected(P.TrackUnmuted, s, i)
        }).on(_.ParticipantMetadataChanged, s => {
            this.emitWhenConnected(P.ParticipantMetadataChanged, s, i)
        }).on(_.ParticipantNameChanged, s => {
            this.emitWhenConnected(P.ParticipantNameChanged, s, i)
        }).on(_.AttributesChanged, s => {
            this.emitWhenConnected(P.ParticipantAttributesChanged, s, i)
        }).on(_.ConnectionQualityChanged, s => {
            this.emitWhenConnected(P.ConnectionQualityChanged, s, i)
        }).on(_.ParticipantPermissionsChanged, s => {
            this.emitWhenConnected(P.ParticipantPermissionsChanged, s, i)
        }).on(_.TrackSubscriptionStatusChanged, (s, r) => {
            this.emitWhenConnected(P.TrackSubscriptionStatusChanged, s, r, i)
        }).on(_.TrackSubscriptionFailed, (s, r) => {
            this.emit(P.TrackSubscriptionFailed, s, i, r)
        }).on(_.TrackSubscriptionPermissionChanged, (s, r) => {
            this.emitWhenConnected(P.TrackSubscriptionPermissionChanged, s, r, i)
        }), t && i.updateInfo(t), i
    }
    sendSyncState() {
        const e = Array.from(this.remoteParticipants.values()).reduce((i, s) => (i.push(...s.getTrackPublications()), i), []),
            t = this.localParticipant.getTrackPublications();
        this.engine.sendSyncState(e, t)
    }
    updateSubscriptions() {
        for (const e of this.remoteParticipants.values())
            for (const t of e.videoTrackPublications.values()) t.isSubscribed && t instanceof Lr && t.emitTrackUpdate()
    }
    getRemoteParticipantBySid(e) {
        const t = this.sidToIdentity.get(e);
        if (t) return this.remoteParticipants.get(t)
    }
    registerConnectionReconcile() {
        this.clearConnectionReconcile();
        let e = 0;
        this.connectionReconcileInterval = $.setInterval(() => {
            !this.engine || this.engine.isClosed || !this.engine.verifyTransport() ? (e++, this.log.warn("detected connection state mismatch", Object.assign(Object.assign({}, this.logContext), {
                numFailures: e,
                engine: {
                    closed: this.engine.isClosed,
                    transportsConnected: this.engine.verifyTransport()
                }
            })), e >= 3 && (this.recreateEngine(), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, We.STATE_MISMATCH))) : e = 0
        }, $c)
    }
    clearConnectionReconcile() {
        this.connectionReconcileInterval && $.clearInterval(this.connectionReconcileInterval)
    }
    setAndEmitConnectionState(e) {
        return e === this.state ? !1 : (this.state = e, this.emit(P.ConnectionStateChanged, this.state), !0)
    }
    emitBufferedEvents() {
        this.bufferedEvents.forEach(e => {
            let [t, i] = e;
            this.emit(t, ...i)
        }), this.bufferedEvents = []
    }
    emitWhenConnected(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
        if (this.state === U.Reconnecting || this.isResuming || !this.engine || this.engine.pendingReconnect) this.bufferedEvents.push([e, i]);
        else if (this.state === U.Connected) return this.emit(e, ...i);
        return !1
    }
    simulateParticipants(e) {
        return p(this, void 0, void 0, function*() {
            var t, i;
            const s = Object.assign({
                    audio: !0,
                    video: !0,
                    useRealTracks: !1
                }, e.publish),
                r = Object.assign({
                    count: 9,
                    audio: !1,
                    video: !0,
                    aspectRatios: [1.66, 1.7, 1.3]
                }, e.participants);
            if (this.handleDisconnect(), this.roomInfo = new Fi({
                    sid: "RM_SIMULATED",
                    name: "simulated-room",
                    emptyTimeout: 0,
                    maxParticipants: 0,
                    creationTime: K.parse(new Date().getTime()),
                    metadata: "",
                    numParticipants: 1,
                    numPublishers: 1,
                    turnPassword: "",
                    enabledCodecs: [],
                    activeRecording: !1
                }), this.localParticipant.updateInfo(new pt({
                    identity: "simulated-local",
                    name: "local-name"
                })), this.setupLocalParticipantEvents(), this.emit(P.SignalConnected), this.emit(P.Connected), this.setAndEmitConnectionState(U.Connected), s.video) {
                const a = new jt(C.Kind.Video, new Ke({
                    source: ee.CAMERA,
                    sid: Math.floor(Math.random() * 1e4).toString(),
                    type: de.AUDIO,
                    name: "video-dummy"
                }), new Z(s.useRealTracks ? (yield window.navigator.mediaDevices.getUserMedia({
                    video: !0
                })).getVideoTracks()[0] : An(160 * ((t = r.aspectRatios[0]) !== null && t !== void 0 ? t : 1), 160, !0, !0), void 0, !1, {
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext
                }), {
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext
                });
                this.localParticipant.addTrackPublication(a), this.localParticipant.emit(_.LocalTrackPublished, a)
            }
            if (s.audio) {
                const a = new jt(C.Kind.Audio, new Ke({
                    source: ee.MICROPHONE,
                    sid: Math.floor(Math.random() * 1e4).toString(),
                    type: de.AUDIO
                }), new Y(s.useRealTracks ? (yield navigator.mediaDevices.getUserMedia({
                    audio: !0
                })).getAudioTracks()[0] : ti(), void 0, !1, this.audioContext, {
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext
                }), {
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext
                });
                this.localParticipant.addTrackPublication(a), this.localParticipant.emit(_.LocalTrackPublished, a)
            }
            for (let a = 0; a < r.count - 1; a += 1) {
                let o = new pt({
                    sid: Math.floor(Math.random() * 1e4).toString(),
                    identity: "simulated-".concat(a),
                    state: li.ACTIVE,
                    tracks: [],
                    joinedAt: K.parse(Date.now())
                });
                const c = this.getOrCreateParticipant(o.identity, o);
                if (r.video) {
                    const d = An(160 * ((i = r.aspectRatios[a % r.aspectRatios.length]) !== null && i !== void 0 ? i : 1), 160, !1, !0),
                        l = new Ke({
                            source: ee.CAMERA,
                            sid: Math.floor(Math.random() * 1e4).toString(),
                            type: de.AUDIO
                        });
                    c.addSubscribedMediaTrack(d, l.sid, new MediaStream([d]), new RTCRtpReceiver), o.tracks = [...o.tracks, l]
                }
                if (r.audio) {
                    const d = ti(),
                        l = new Ke({
                            source: ee.MICROPHONE,
                            sid: Math.floor(Math.random() * 1e4).toString(),
                            type: de.AUDIO
                        });
                    c.addSubscribedMediaTrack(d, l.sid, new MediaStream([d]), new RTCRtpReceiver), o.tracks = [...o.tracks, l]
                }
                c.updateInfo(o)
            }
        })
    }
    emit(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
        if (e !== P.ActiveSpeakersChanged) {
            const r = Fr(i).filter(a => a !== void 0);
            this.log.debug("room event ".concat(e), Object.assign(Object.assign({}, this.logContext), {
                event: e,
                args: r
            }))
        }
        return super.emit(e, ...i)
    }
}

function Fr(n) {
    return n.map(e => {
        if (e) return Array.isArray(e) ? Fr(e) : typeof e == "object" ? "logContext" in e && e.logContext : e
    })
}
var ce;
(function(n) {
    n[n.IDLE = 0] = "IDLE", n[n.RUNNING = 1] = "RUNNING", n[n.SKIPPED = 2] = "SKIPPED", n[n.SUCCESS = 3] = "SUCCESS", n[n.FAILED = 4] = "FAILED"
})(ce || (ce = {}));
class et extends be.EventEmitter {
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        super(), this.status = ce.IDLE, this.logs = [], this.errorsAsWarnings = !1, this.url = e, this.token = t, this.name = this.constructor.name, this.room = new Ur(i.roomOptions), this.connectOptions = i.connectOptions, i.errorsAsWarnings && (this.errorsAsWarnings = i.errorsAsWarnings)
    }
    run(e) {
        return p(this, void 0, void 0, function*() {
            if (this.status !== ce.IDLE) throw Error("check is running already");
            this.setStatus(ce.RUNNING);
            try {
                yield this.perform()
            } catch (t) {
                t instanceof Error && (this.errorsAsWarnings ? this.appendWarning(t.message) : this.appendError(t.message))
            }
            return yield this.disconnect(), yield new Promise(t => setTimeout(t, 500)), this.status !== ce.SKIPPED && this.setStatus(this.isSuccess() ? ce.SUCCESS : ce.FAILED), e && e(), this.getInfo()
        })
    }
    isSuccess() {
        return !this.logs.some(e => e.level === "error")
    }
    connect() {
        return p(this, void 0, void 0, function*() {
            return this.room.state === U.Connected ? this.room : (yield this.room.connect(this.url, this.token, this.connectOptions), this.room)
        })
    }
    disconnect() {
        return p(this, void 0, void 0, function*() {
            this.room && this.room.state !== U.Disconnected && (yield this.room.disconnect(), yield new Promise(e => setTimeout(e, 500)))
        })
    }
    skip() {
        this.setStatus(ce.SKIPPED)
    }
    appendMessage(e) {
        this.logs.push({
            level: "info",
            message: e
        }), this.emit("update", this.getInfo())
    }
    appendWarning(e) {
        this.logs.push({
            level: "warning",
            message: e
        }), this.emit("update", this.getInfo())
    }
    appendError(e) {
        this.logs.push({
            level: "error",
            message: e
        }), this.emit("update", this.getInfo())
    }
    setStatus(e) {
        this.status = e, this.emit("update", this.getInfo())
    }
    get engine() {
        var e;
        return (e = this.room) === null || e === void 0 ? void 0 : e.engine
    }
    getInfo() {
        return {
            logs: this.logs,
            name: this.name,
            status: this.status,
            description: this.description
        }
    }
}
class Zc extends et {
    get description() {
        return "Can publish audio"
    }
    perform() {
        return p(this, void 0, void 0, function*() {
            var e;
            const t = yield this.connect(), i = yield Qc();
            t.localParticipant.publishTrack(i), yield new Promise(a => setTimeout(a, 3e3));
            const s = yield(e = i.sender) === null || e === void 0 ? void 0 : e.getStats();
            if (!s) throw new Error("Could not get RTCStats");
            let r = 0;
            if (s.forEach(a => {
                    a.type === "outbound-rtp" && (a.kind === "audio" || !a.kind && a.mediaType === "audio") && (r = a.packetsSent)
                }), r === 0) throw new Error("Could not determine packets are sent");
            this.appendMessage("published ".concat(r, " audio packets"))
        })
    }
}
class ed extends et {
    get description() {
        return "Can publish video"
    }
    perform() {
        return p(this, void 0, void 0, function*() {
            var e;
            const t = yield this.connect(), i = yield Jc();
            t.localParticipant.publishTrack(i), yield new Promise(a => setTimeout(a, 5e3));
            const s = yield(e = i.sender) === null || e === void 0 ? void 0 : e.getStats();
            if (!s) throw new Error("Could not get RTCStats");
            let r = 0;
            if (s.forEach(a => {
                    a.type === "outbound-rtp" && (a.kind === "video" || !a.kind && a.mediaType === "video") && (r += a.packetsSent)
                }), r === 0) throw new Error("Could not determine packets are sent");
            this.appendMessage("published ".concat(r, " video packets"))
        })
    }
}
class td extends et {
    get description() {
        return "Resuming connection after interruption"
    }
    perform() {
        return p(this, void 0, void 0, function*() {
            var e;
            const t = yield this.connect();
            let i = !1,
                s = !1,
                r;
            const a = new Promise(d => {
                    setTimeout(d, 5e3), r = d
                }),
                o = () => {
                    i = !0
                };
            t.on(P.SignalReconnecting, o).on(P.Reconnecting, o).on(P.Reconnected, () => {
                s = !0, r(!0)
            }), (e = t.engine.client.ws) === null || e === void 0 || e.close();
            const c = t.engine.client.onClose;
            if (c && c(""), yield a, i) {
                if (!s || t.state !== U.Connected) throw this.appendWarning("reconnection is only possible in Redis-based configurations"), new Error("Not able to reconnect")
            } else throw new Error("Did not attempt to reconnect")
        })
    }
}
class id extends et {
    get description() {
        return "Can connect via TURN"
    }
    perform() {
        return p(this, void 0, void 0, function*() {
            var e, t;
            const i = new Ji,
                s = yield i.join(this.url, this.token, {
                    autoSubscribe: !0,
                    maxRetries: 0,
                    e2eeEnabled: !1,
                    websocketTimeout: 15e3
                });
            let r = !1,
                a = !1,
                o = !1;
            for (let c of s.iceServers)
                for (let d of c.urls) d.startsWith("turn:") ? (a = !0, o = !0) : d.startsWith("turns:") && (a = !0, o = !0, r = !0), d.startsWith("stun:") && (o = !0);
            o ? a && !r && this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable.") : this.appendWarning("No STUN servers configured on server side."), yield i.close(), !((t = (e = this.connectOptions) === null || e === void 0 ? void 0 : e.rtcConfig) === null || t === void 0) && t.iceServers || a ? yield this.room.connect(this.url, this.token, {
                rtcConfig: {
                    iceTransportPolicy: "relay"
                }
            }): (this.appendWarning("No TURN servers configured."), this.skip(), yield new Promise(c => setTimeout(c, 0)))
        })
    }
}
class nd extends et {
    get description() {
        return "Establishing WebRTC connection"
    }
    perform() {
        return p(this, void 0, void 0, function*() {
            let e = !1,
                t = !1;
            this.room.on(P.SignalConnected, () => {
                const i = this.room.engine.client.onTrickle;
                this.room.engine.client.onTrickle = (s, r) => {
                    if (s.candidate) {
                        const a = new RTCIceCandidate(s);
                        let o = "".concat(a.protocol, " ").concat(a.address, ":").concat(a.port, " ").concat(a.type);
                        a.address && (sd(a.address) ? o += " (private)" : a.protocol === "tcp" && a.tcpType === "passive" ? (e = !0, o += " (passive)") : a.protocol === "udp" && (t = !0)), this.appendMessage(o)
                    }
                    i && i(s, r)
                }, this.room.engine.pcManager && (this.room.engine.pcManager.subscriber.onIceCandidateError = s => {
                    s instanceof RTCPeerConnectionIceErrorEvent && this.appendWarning("error with ICE candidate: ".concat(s.errorCode, " ").concat(s.errorText, " ").concat(s.url))
                })
            });
            try {
                yield this.connect(), A.info("now the room is connected")
            } catch (i) {
                throw this.appendWarning("ports need to be open on firewall in order to connect."), i
            }
            e || this.appendWarning("Server is not configured for ICE/TCP"), t || this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly")
        })
    }
}

function sd(n) {
    const e = n.split(".");
    if (e.length === 4) {
        if (e[0] === "10") return !0;
        if (e[0] === "192" && e[1] === "168") return !0;
        if (e[0] === "172") {
            const t = parseInt(e[1], 10);
            if (t >= 16 && t <= 31) return !0
        }
    }
    return !1
}
class rd extends et {
    get description() {
        return "Connecting to signal connection via WebSocket"
    }
    perform() {
        return p(this, void 0, void 0, function*() {
            var e, t, i;
            (this.url.startsWith("ws:") || this.url.startsWith("http:")) && this.appendWarning("Server is insecure, clients may block connections to it");
            let s = new Ji;
            const r = yield s.join(this.url, this.token, {
                autoSubscribe: !0,
                maxRetries: 0,
                e2eeEnabled: !1,
                websocketTimeout: 15e3
            });
            this.appendMessage("Connected to server, version ".concat(r.serverVersion, ".")), ((e = r.serverInfo) === null || e === void 0 ? void 0 : e.edition) === ws.Cloud && (!((t = r.serverInfo) === null || t === void 0) && t.region) && this.appendMessage("LiveKit Cloud: ".concat((i = r.serverInfo) === null || i === void 0 ? void 0 : i.region)), yield s.close()
        })
    }
}
class ud extends be.EventEmitter {
    constructor(e, t) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        super(), this.options = {}, this.checkResults = new Map, this.url = e, this.token = t, this.options = i
    }
    getNextCheckId() {
        const e = this.checkResults.size;
        return this.checkResults.set(e, {
            logs: [],
            status: ce.IDLE,
            name: "",
            description: ""
        }), e
    }
    updateCheck(e, t) {
        this.checkResults.set(e, t), this.emit("checkUpdate", e, t)
    }
    isSuccess() {
        return Array.from(this.checkResults.values()).every(e => e.status !== ce.FAILED)
    }
    getResults() {
        return Array.from(this.checkResults.values())
    }
    createAndRunCheck(e) {
        return p(this, void 0, void 0, function*() {
            const t = this.getNextCheckId(),
                i = new e(this.url, this.token, this.options),
                s = a => {
                    this.updateCheck(t, a)
                };
            i.on("update", s);
            const r = yield i.run();
            return i.off("update", s), r
        })
    }
    checkWebsocket() {
        return p(this, void 0, void 0, function*() {
            return this.createAndRunCheck(rd)
        })
    }
    checkWebRTC() {
        return p(this, void 0, void 0, function*() {
            return this.createAndRunCheck(nd)
        })
    }
    checkTURN() {
        return p(this, void 0, void 0, function*() {
            return this.createAndRunCheck(id)
        })
    }
    checkReconnect() {
        return p(this, void 0, void 0, function*() {
            return this.createAndRunCheck(td)
        })
    }
    checkPublishAudio() {
        return p(this, void 0, void 0, function*() {
            return this.createAndRunCheck(Zc)
        })
    }
    checkPublishVideo() {
        return p(this, void 0, void 0, function*() {
            return this.createAndRunCheck(ed)
        })
    }
}
class Xi {
    namespace = "Voice";
    constructor(e) {
        e && (this.namespace = e.namespace)
    }
    log(e, ...t) {}
    info(...e) {
        this.log("log", ...e)
    }
    debug(...e) {
        this.log("debug", ...e)
    }
    error(...e) {
        this.log("error", ...e)
    }
    createChild(e) {
        return new Xi({
            namespace: `${this.namespace}:${e}`
        })
    }
}
const ad = new Xi;
async function hd(n) {
    let e;
    try {
        e = await Ur.getLocalDevices(n)
    } catch (s) {
        ts(s), ad.debug("Error fetching local devices", s);
        return
    }
    let t = {};
    for (const s of e) s.kind === n && (t[s.groupId] || (t[s.groupId] = []), t[s.groupId].push(s));
    for (const s in t) {
        const r = t[s];
        if (r.length > 1 && r.find(o => o.deviceId === "default")) {
            const o = r.find(c => c.deviceId !== "default");
            if (o) return o
        }
    }
    let i;
    for (const s of e)
        if (s.kind === n) {
            if (s.deviceId === "default") return s;
            i || (i = s)
        }
    return i
}
const pd = () => {
    const n = Br() && Vr;
    return async () => {
        if (n) return await qr();
        try {
            const e = await navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !1
                }),
                t = await navigator.mediaDevices.enumerateDevices();
            return e.getTracks().forEach(s => s.stop()), t.some(s => s.kind === "audioinput" && s.label !== "")
        } catch (e) {
            if (!ts(e)) throw e;
            return !1
        }
    }
};
export {
    U as C, dd as E, Y as L, Ut as M, _ as P, Ur as R, C as T, ad as V, P as a, Lr as b, lt as c, we as d, es as e, ld as f, hd as g, pd as u
};
//# sourceMappingURL=hhrilqm27fbjs70g.js.map