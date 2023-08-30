const Np = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
  new MutationObserver((l) => {
    for (const r of l)
      if (r.type === "childList")
        for (const i of r.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && a(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const r = {};
    return (
      l.integrity && (r.integrity = l.integrity),
      l.referrerpolicy && (r.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function a(l) {
    if (l.ep) return;
    l.ep = !0;
    const r = n(l);
    fetch(l.href, r);
  }
};
Np();
function uu(e, t) {
  const n = Object.create(null),
    a = e.split(",");
  for (let l = 0; l < a.length; l++) n[a[l]] = !0;
  return t ? (l) => !!n[l.toLowerCase()] : (l) => !!n[l];
}
const Mp =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Fp = uu(Mp);
function sv(e) {
  return !!e || e === "";
}
function ul(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n],
        l = lt(a) ? jp(a) : ul(a);
      if (l) for (const r in l) t[r] = l[r];
    }
    return t;
  } else {
    if (lt(e)) return e;
    if (et(e)) return e;
  }
}
const Dp = /;(?![^(]*\))/g,
  zp = /:(.+)/;
function jp(e) {
  const t = {};
  return (
    e.split(Dp).forEach((n) => {
      if (n) {
        const a = n.split(zp);
        a.length > 1 && (t[a[0].trim()] = a[1].trim());
      }
    }),
    t
  );
}
function Hi(e) {
  let t = "";
  if (lt(e)) t = e;
  else if (he(e))
    for (let n = 0; n < e.length; n++) {
      const a = Hi(e[n]);
      a && (t += a + " ");
    }
  else if (et(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Hp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let a = 0; n && a < e.length; a++) n = Ui(e[a], t[a]);
  return n;
}
function Ui(e, t) {
  if (e === t) return !0;
  let n = Bc(e),
    a = Bc(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : !1;
  if (((n = rr(e)), (a = rr(t)), n || a)) return e === t;
  if (((n = he(e)), (a = he(t)), n || a)) return n && a ? Hp(e, t) : !1;
  if (((n = et(e)), (a = et(t)), n || a)) {
    if (!n || !a) return !1;
    const l = Object.keys(e).length,
      r = Object.keys(t).length;
    if (l !== r) return !1;
    for (const i in e) {
      const o = e.hasOwnProperty(i),
        s = t.hasOwnProperty(i);
      if ((o && !s) || (!o && s) || !Ui(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function Up(e, t) {
  return e.findIndex((n) => Ui(n, t));
}
const qe = (e) =>
    lt(e)
      ? e
      : e == null
      ? ""
      : he(e) || (et(e) && (e.toString === dv || !Ce(e.toString)))
      ? JSON.stringify(e, uv, 2)
      : String(e),
  uv = (e, t) =>
    t && t.__v_isRef
      ? uv(e, t.value)
      : rl(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [a, l]) => ((n[`${a} =>`] = l), n),
            {}
          ),
        }
      : Yi(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : et(t) && !he(t) && !fv(t)
      ? String(t)
      : t,
  ze = {},
  ll = [],
  an = () => {},
  Wp = () => !1,
  Yp = /^on[^a-z]/,
  Wi = (e) => Yp.test(e),
  cu = (e) => e.startsWith("onUpdate:"),
  ft = Object.assign,
  du = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Gp = Object.prototype.hasOwnProperty,
  Pe = (e, t) => Gp.call(e, t),
  he = Array.isArray,
  rl = (e) => Vr(e) === "[object Map]",
  Yi = (e) => Vr(e) === "[object Set]",
  Bc = (e) => Vr(e) === "[object Date]",
  Ce = (e) => typeof e == "function",
  lt = (e) => typeof e == "string",
  rr = (e) => typeof e == "symbol",
  et = (e) => e !== null && typeof e == "object",
  cv = (e) => et(e) && Ce(e.then) && Ce(e.catch),
  dv = Object.prototype.toString,
  Vr = (e) => dv.call(e),
  Kp = (e) => Vr(e).slice(8, -1),
  fv = (e) => Vr(e) === "[object Object]",
  fu = (e) =>
    lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  si = uu(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Gi = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  qp = /-(\w)/g,
  Wt = Gi((e) => e.replace(qp, (t, n) => (n ? n.toUpperCase() : ""))),
  Xp = /\B([A-Z])/g,
  bl = Gi((e) => e.replace(Xp, "-$1").toLowerCase()),
  Ln = Gi((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ui = Gi((e) => (e ? `on${Ln(e)}` : "")),
  ir = (e, t) => !Object.is(e, t),
  ci = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  _i = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  or = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Nc;
const Jp = () =>
  Nc ||
  (Nc =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let Dt;
class vv {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Dt &&
        ((this.parent = Dt),
        (this.index = (Dt.scopes || (Dt.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = Dt;
      try {
        return (Dt = this), t();
      } finally {
        Dt = n;
      }
    }
  }
  on() {
    Dt = this;
  }
  off() {
    Dt = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++) this.effects[n].stop();
      for (n = 0, a = this.cleanups.length; n < a; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, a = this.scopes.length; n < a; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const l = this.parent.scopes.pop();
        l &&
          l !== this &&
          ((this.parent.scopes[this.index] = l), (l.index = this.index));
      }
      this.active = !1;
    }
  }
}
function Ki(e) {
  return new vv(e);
}
function Zp(e, t = Dt) {
  t && t.active && t.effects.push(e);
}
function yn(e) {
  Dt && Dt.cleanups.push(e);
}
const vu = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  mv = (e) => (e.w & Qn) > 0,
  hv = (e) => (e.n & Qn) > 0,
  Qp = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Qn;
  },
  ey = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let a = 0; a < t.length; a++) {
        const l = t[a];
        mv(l) && !hv(l) ? l.delete(e) : (t[n++] = l),
          (l.w &= ~Qn),
          (l.n &= ~Qn);
      }
      t.length = n;
    }
  },
  ls = new WeakMap();
let jl = 0,
  Qn = 1;
const rs = 30;
let Zt;
const Sa = Symbol(""),
  is = Symbol("");
class mu {
  constructor(t, n = null, a) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Zp(this, a);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Zt,
      n = Zn;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Zt),
        (Zt = this),
        (Zn = !0),
        (Qn = 1 << ++jl),
        jl <= rs ? Qp(this) : Mc(this),
        this.fn()
      );
    } finally {
      jl <= rs && ey(this),
        (Qn = 1 << --jl),
        (Zt = this.parent),
        (Zn = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Zt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Mc(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Mc(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Zn = !0;
const gv = [];
function Ia() {
  gv.push(Zn), (Zn = !1);
}
function Pa() {
  const e = gv.pop();
  Zn = e === void 0 ? !0 : e;
}
function Tt(e, t, n) {
  if (Zn && Zt) {
    let a = ls.get(e);
    a || ls.set(e, (a = new Map()));
    let l = a.get(n);
    l || a.set(n, (l = vu())), pv(l);
  }
}
function pv(e, t) {
  let n = !1;
  jl <= rs ? hv(e) || ((e.n |= Qn), (n = !mv(e))) : (n = !e.has(Zt)),
    n && (e.add(Zt), Zt.deps.push(e));
}
function Vn(e, t, n, a, l, r) {
  const i = ls.get(e);
  if (!i) return;
  let o = [];
  if (t === "clear") o = [...i.values()];
  else if (n === "length" && he(e))
    i.forEach((s, c) => {
      (c === "length" || c >= a) && o.push(s);
    });
  else
    switch ((n !== void 0 && o.push(i.get(n)), t)) {
      case "add":
        he(e)
          ? fu(n) && o.push(i.get("length"))
          : (o.push(i.get(Sa)), rl(e) && o.push(i.get(is)));
        break;
      case "delete":
        he(e) || (o.push(i.get(Sa)), rl(e) && o.push(i.get(is)));
        break;
      case "set":
        rl(e) && o.push(i.get(Sa));
        break;
    }
  if (o.length === 1) o[0] && os(o[0]);
  else {
    const s = [];
    for (const c of o) c && s.push(...c);
    os(vu(s));
  }
}
function os(e, t) {
  const n = he(e) ? e : [...e];
  for (const a of n) a.computed && Fc(a);
  for (const a of n) a.computed || Fc(a);
}
function Fc(e, t) {
  (e !== Zt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ty = uu("__proto__,__v_isRef,__isVue"),
  yv = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(rr)
  ),
  ny = hu(),
  ay = hu(!1, !0),
  ly = hu(!0),
  Dc = ry();
function ry() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const a = Ve(this);
        for (let r = 0, i = this.length; r < i; r++) Tt(a, "get", r + "");
        const l = a[t](...n);
        return l === -1 || l === !1 ? a[t](...n.map(Ve)) : l;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Ia();
        const a = Ve(this)[t].apply(this, n);
        return Pa(), a;
      };
    }),
    e
  );
}
function hu(e = !1, t = !1) {
  return function (a, l, r) {
    if (l === "__v_isReactive") return !e;
    if (l === "__v_isReadonly") return e;
    if (l === "__v_isShallow") return t;
    if (l === "__v_raw" && r === (e ? (t ? xy : Sv) : t ? wv : xv).get(a))
      return a;
    const i = he(a);
    if (!e && i && Pe(Dc, l)) return Reflect.get(Dc, l, r);
    const o = Reflect.get(a, l, r);
    return (rr(l) ? yv.has(l) : ty(l)) || (e || Tt(a, "get", l), t)
      ? o
      : Ge(o)
      ? i && fu(l)
        ? o
        : o.value
      : et(o)
      ? e
        ? $r(o)
        : vt(o)
      : o;
  };
}
const iy = bv(),
  oy = bv(!0);
function bv(e = !1) {
  return function (n, a, l, r) {
    let i = n[a];
    if (sr(i) && Ge(i) && !Ge(l)) return !1;
    if (
      !e &&
      !sr(l) &&
      (ss(l) || ((l = Ve(l)), (i = Ve(i))), !he(n) && Ge(i) && !Ge(l))
    )
      return (i.value = l), !0;
    const o = he(n) && fu(a) ? Number(a) < n.length : Pe(n, a),
      s = Reflect.set(n, a, l, r);
    return (
      n === Ve(r) && (o ? ir(l, i) && Vn(n, "set", a, l) : Vn(n, "add", a, l)),
      s
    );
  };
}
function sy(e, t) {
  const n = Pe(e, t);
  e[t];
  const a = Reflect.deleteProperty(e, t);
  return a && n && Vn(e, "delete", t, void 0), a;
}
function uy(e, t) {
  const n = Reflect.has(e, t);
  return (!rr(t) || !yv.has(t)) && Tt(e, "has", t), n;
}
function cy(e) {
  return Tt(e, "iterate", he(e) ? "length" : Sa), Reflect.ownKeys(e);
}
const _v = { get: ny, set: iy, deleteProperty: sy, has: uy, ownKeys: cy },
  dy = {
    get: ly,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  fy = ft({}, _v, { get: ay, set: oy }),
  gu = (e) => e,
  qi = (e) => Reflect.getPrototypeOf(e);
function jr(e, t, n = !1, a = !1) {
  e = e.__v_raw;
  const l = Ve(e),
    r = Ve(t);
  n || (t !== r && Tt(l, "get", t), Tt(l, "get", r));
  const { has: i } = qi(l),
    o = a ? gu : n ? bu : ur;
  if (i.call(l, t)) return o(e.get(t));
  if (i.call(l, r)) return o(e.get(r));
  e !== l && e.get(t);
}
function Hr(e, t = !1) {
  const n = this.__v_raw,
    a = Ve(n),
    l = Ve(e);
  return (
    t || (e !== l && Tt(a, "has", e), Tt(a, "has", l)),
    e === l ? n.has(e) : n.has(e) || n.has(l)
  );
}
function Ur(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Tt(Ve(e), "iterate", Sa), Reflect.get(e, "size", e)
  );
}
function zc(e) {
  e = Ve(e);
  const t = Ve(this);
  return qi(t).has.call(t, e) || (t.add(e), Vn(t, "add", e, e)), this;
}
function jc(e, t) {
  t = Ve(t);
  const n = Ve(this),
    { has: a, get: l } = qi(n);
  let r = a.call(n, e);
  r || ((e = Ve(e)), (r = a.call(n, e)));
  const i = l.call(n, e);
  return (
    n.set(e, t), r ? ir(t, i) && Vn(n, "set", e, t) : Vn(n, "add", e, t), this
  );
}
function Hc(e) {
  const t = Ve(this),
    { has: n, get: a } = qi(t);
  let l = n.call(t, e);
  l || ((e = Ve(e)), (l = n.call(t, e))), a && a.call(t, e);
  const r = t.delete(e);
  return l && Vn(t, "delete", e, void 0), r;
}
function Uc() {
  const e = Ve(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Vn(e, "clear", void 0, void 0), n;
}
function Wr(e, t) {
  return function (a, l) {
    const r = this,
      i = r.__v_raw,
      o = Ve(i),
      s = t ? gu : e ? bu : ur;
    return (
      !e && Tt(o, "iterate", Sa), i.forEach((c, u) => a.call(l, s(c), s(u), r))
    );
  };
}
function Yr(e, t, n) {
  return function (...a) {
    const l = this.__v_raw,
      r = Ve(l),
      i = rl(r),
      o = e === "entries" || (e === Symbol.iterator && i),
      s = e === "keys" && i,
      c = l[e](...a),
      u = n ? gu : t ? bu : ur;
    return (
      !t && Tt(r, "iterate", s ? is : Sa),
      {
        next() {
          const { value: d, done: f } = c.next();
          return f
            ? { value: d, done: f }
            : { value: o ? [u(d[0]), u(d[1])] : u(d), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Hn(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function vy() {
  const e = {
      get(r) {
        return jr(this, r);
      },
      get size() {
        return Ur(this);
      },
      has: Hr,
      add: zc,
      set: jc,
      delete: Hc,
      clear: Uc,
      forEach: Wr(!1, !1),
    },
    t = {
      get(r) {
        return jr(this, r, !1, !0);
      },
      get size() {
        return Ur(this);
      },
      has: Hr,
      add: zc,
      set: jc,
      delete: Hc,
      clear: Uc,
      forEach: Wr(!1, !0),
    },
    n = {
      get(r) {
        return jr(this, r, !0);
      },
      get size() {
        return Ur(this, !0);
      },
      has(r) {
        return Hr.call(this, r, !0);
      },
      add: Hn("add"),
      set: Hn("set"),
      delete: Hn("delete"),
      clear: Hn("clear"),
      forEach: Wr(!0, !1),
    },
    a = {
      get(r) {
        return jr(this, r, !0, !0);
      },
      get size() {
        return Ur(this, !0);
      },
      has(r) {
        return Hr.call(this, r, !0);
      },
      add: Hn("add"),
      set: Hn("set"),
      delete: Hn("delete"),
      clear: Hn("clear"),
      forEach: Wr(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = Yr(r, !1, !1)),
        (n[r] = Yr(r, !0, !1)),
        (t[r] = Yr(r, !1, !0)),
        (a[r] = Yr(r, !0, !0));
    }),
    [e, n, t, a]
  );
}
const [my, hy, gy, py] = vy();
function pu(e, t) {
  const n = t ? (e ? py : gy) : e ? hy : my;
  return (a, l, r) =>
    l === "__v_isReactive"
      ? !e
      : l === "__v_isReadonly"
      ? e
      : l === "__v_raw"
      ? a
      : Reflect.get(Pe(n, l) && l in a ? n : a, l, r);
}
const yy = { get: pu(!1, !1) },
  by = { get: pu(!1, !0) },
  _y = { get: pu(!0, !1) },
  xv = new WeakMap(),
  wv = new WeakMap(),
  Sv = new WeakMap(),
  xy = new WeakMap();
function wy(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Sy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wy(Kp(e));
}
function vt(e) {
  return sr(e) ? e : yu(e, !1, _v, yy, xv);
}
function Cv(e) {
  return yu(e, !1, fy, by, wv);
}
function $r(e) {
  return yu(e, !0, dy, _y, Sv);
}
function yu(e, t, n, a, l) {
  if (!et(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = l.get(e);
  if (r) return r;
  const i = Sy(e);
  if (i === 0) return e;
  const o = new Proxy(e, i === 2 ? a : n);
  return l.set(e, o), o;
}
function il(e) {
  return sr(e) ? il(e.__v_raw) : !!(e && e.__v_isReactive);
}
function sr(e) {
  return !!(e && e.__v_isReadonly);
}
function ss(e) {
  return !!(e && e.__v_isShallow);
}
function kv(e) {
  return il(e) || sr(e);
}
function Ve(e) {
  const t = e && e.__v_raw;
  return t ? Ve(t) : e;
}
function Av(e) {
  return _i(e, "__v_skip", !0), e;
}
const ur = (e) => (et(e) ? vt(e) : e),
  bu = (e) => (et(e) ? $r(e) : e);
function Ev(e) {
  Zn && Zt && ((e = Ve(e)), pv(e.dep || (e.dep = vu())));
}
function Vv(e, t) {
  (e = Ve(e)), e.dep && os(e.dep);
}
function Ge(e) {
  return !!(e && e.__v_isRef === !0);
}
function B(e) {
  return Iv(e, !1);
}
function $v(e) {
  return Iv(e, !0);
}
function Iv(e, t) {
  return Ge(e) ? e : new Cy(e, t);
}
class Cy {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Ve(t)),
      (this._value = n ? t : ur(t));
  }
  get value() {
    return Ev(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : Ve(t)),
      ir(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : ur(t)),
        Vv(this));
  }
}
function Ot(e) {
  return Ge(e) ? e.value : e;
}
const ky = {
  get: (e, t, n) => Ot(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t];
    return Ge(l) && !Ge(n) ? ((l.value = n), !0) : Reflect.set(e, t, n, a);
  },
};
function Pv(e) {
  return il(e) ? e : new Proxy(e, ky);
}
function _u(e) {
  const t = he(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = j(e, n);
  return t;
}
class Ay {
  constructor(t, n, a) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = a),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function j(e, t, n) {
  const a = e[t];
  return Ge(a) ? a : new Ay(e, t, n);
}
class Ey {
  constructor(t, n, a, l) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new mu(t, () => {
        this._dirty || ((this._dirty = !0), Vv(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !l),
      (this.__v_isReadonly = a);
  }
  get value() {
    const t = Ve(this);
    return (
      Ev(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Vy(e, t, n = !1) {
  let a, l;
  const r = Ce(e);
  return (
    r ? ((a = e), (l = an)) : ((a = e.get), (l = e.set)),
    new Ey(a, l, r || !l, n)
  );
}
const Gl = [];
function $y(e, ...t) {
  Ia();
  const n = Gl.length ? Gl[Gl.length - 1].component : null,
    a = n && n.appContext.config.warnHandler,
    l = Iy();
  if (a)
    En(a, n, 11, [
      e + t.join(""),
      n && n.proxy,
      l.map(({ vnode: r }) => `at <${um(n, r.type)}>`).join(`
`),
      l,
    ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    l.length &&
      r.push(
        `
`,
        ...Py(l)
      ),
      console.warn(...r);
  }
  Pa();
}
function Iy() {
  let e = Gl[Gl.length - 1];
  if (!e) return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e
      ? n.recurseCount++
      : t.push({ vnode: e, recurseCount: 0 });
    const a = e.component && e.component.parent;
    e = a && a.vnode;
  }
  return t;
}
function Py(e) {
  const t = [];
  return (
    e.forEach((n, a) => {
      t.push(
        ...(a === 0
          ? []
          : [
              `
`,
            ]),
        ...Oy(n)
      );
    }),
    t
  );
}
function Oy({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "",
    a = e.component ? e.component.parent == null : !1,
    l = ` at <${um(e.component, e.type, a)}`,
    r = ">" + n;
  return e.props ? [l, ...Ty(e.props), r] : [l + r];
}
function Ty(e) {
  const t = [],
    n = Object.keys(e);
  return (
    n.slice(0, 3).forEach((a) => {
      t.push(...Ov(a, e[a]));
    }),
    n.length > 3 && t.push(" ..."),
    t
  );
}
function Ov(e, t, n) {
  return lt(t)
    ? ((t = JSON.stringify(t)), n ? t : [`${e}=${t}`])
    : typeof t == "number" || typeof t == "boolean" || t == null
    ? n
      ? t
      : [`${e}=${t}`]
    : Ge(t)
    ? ((t = Ov(e, Ve(t.value), !0)), n ? t : [`${e}=Ref<`, t, ">"])
    : Ce(t)
    ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`]
    : ((t = Ve(t)), n ? t : [`${e}=`, t]);
}
function En(e, t, n, a) {
  let l;
  try {
    l = a ? e(...a) : e();
  } catch (r) {
    Xi(r, t, n);
  }
  return l;
}
function Ht(e, t, n, a) {
  if (Ce(e)) {
    const r = En(e, t, n, a);
    return (
      r &&
        cv(r) &&
        r.catch((i) => {
          Xi(i, t, n);
        }),
      r
    );
  }
  const l = [];
  for (let r = 0; r < e.length; r++) l.push(Ht(e[r], t, n, a));
  return l;
}
function Xi(e, t, n, a = !0) {
  const l = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy,
      o = n;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, i, o) === !1) return;
      }
      r = r.parent;
    }
    const s = t.appContext.config.errorHandler;
    if (s) {
      En(s, null, 10, [e, i, o]);
      return;
    }
  }
  Ry(e, n, l, a);
}
function Ry(e, t, n, a = !0) {
  console.error(e);
}
let xi = !1,
  us = !1;
const $t = [];
let An = 0;
const Kl = [];
let Hl = null,
  Za = 0;
const ql = [];
let Gn = null,
  Qa = 0;
const Tv = Promise.resolve();
let xu = null,
  cs = null;
function Ke(e) {
  const t = xu || Tv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ly(e) {
  let t = An + 1,
    n = $t.length;
  for (; t < n; ) {
    const a = (t + n) >>> 1;
    cr($t[a]) < e ? (t = a + 1) : (n = a);
  }
  return t;
}
function Rv(e) {
  (!$t.length || !$t.includes(e, xi && e.allowRecurse ? An + 1 : An)) &&
    e !== cs &&
    (e.id == null ? $t.push(e) : $t.splice(Ly(e.id), 0, e), Lv());
}
function Lv() {
  !xi && !us && ((us = !0), (xu = Tv.then(Mv)));
}
function By(e) {
  const t = $t.indexOf(e);
  t > An && $t.splice(t, 1);
}
function Bv(e, t, n, a) {
  he(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? a + 1 : a)) && n.push(e),
    Lv();
}
function Ny(e) {
  Bv(e, Hl, Kl, Za);
}
function My(e) {
  Bv(e, Gn, ql, Qa);
}
function Ji(e, t = null) {
  if (Kl.length) {
    for (
      cs = t, Hl = [...new Set(Kl)], Kl.length = 0, Za = 0;
      Za < Hl.length;
      Za++
    )
      Hl[Za]();
    (Hl = null), (Za = 0), (cs = null), Ji(e, t);
  }
}
function Nv(e) {
  if ((Ji(), ql.length)) {
    const t = [...new Set(ql)];
    if (((ql.length = 0), Gn)) {
      Gn.push(...t);
      return;
    }
    for (Gn = t, Gn.sort((n, a) => cr(n) - cr(a)), Qa = 0; Qa < Gn.length; Qa++)
      Gn[Qa]();
    (Gn = null), (Qa = 0);
  }
}
const cr = (e) => (e.id == null ? 1 / 0 : e.id);
function Mv(e) {
  (us = !1), (xi = !0), Ji(e), $t.sort((n, a) => cr(n) - cr(a));
  const t = an;
  try {
    for (An = 0; An < $t.length; An++) {
      const n = $t[An];
      n && n.active !== !1 && En(n, null, 14);
    }
  } finally {
    (An = 0),
      ($t.length = 0),
      Nv(),
      (xi = !1),
      (xu = null),
      ($t.length || Kl.length || ql.length) && Mv(e);
  }
}
function Fy(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ze;
  let l = n;
  const r = t.startsWith("update:"),
    i = r && t.slice(7);
  if (i && i in a) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: d, trim: f } = a[u] || ze;
    f && (l = n.map((v) => v.trim())), d && (l = n.map(or));
  }
  let o,
    s = a[(o = ui(t))] || a[(o = ui(Wt(t)))];
  !s && r && (s = a[(o = ui(bl(t)))]), s && Ht(s, e, 6, l);
  const c = a[o + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[o]) return;
    (e.emitted[o] = !0), Ht(c, e, 6, l);
  }
}
function Fv(e, t, n = !1) {
  const a = t.emitsCache,
    l = a.get(e);
  if (l !== void 0) return l;
  const r = e.emits;
  let i = {},
    o = !1;
  if (!Ce(e)) {
    const s = (c) => {
      const u = Fv(c, t, !0);
      u && ((o = !0), ft(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s);
  }
  return !r && !o
    ? (a.set(e, null), null)
    : (he(r) ? r.forEach((s) => (i[s] = null)) : ft(i, r), a.set(e, i), i);
}
function Zi(e, t) {
  return !e || !Wi(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Pe(e, t[0].toLowerCase() + t.slice(1)) || Pe(e, bl(t)) || Pe(e, t));
}
let jt = null,
  Qi = null;
function wi(e) {
  const t = jt;
  return (jt = e), (Qi = (e && e.type.__scopeId) || null), t;
}
function wu(e) {
  Qi = e;
}
function Su() {
  Qi = null;
}
function en(e, t = jt, n) {
  if (!t || e._n) return e;
  const a = (...l) => {
    a._d && nd(-1);
    const r = wi(t),
      i = e(...l);
    return wi(r), a._d && nd(1), i;
  };
  return (a._n = !0), (a._c = !0), (a._d = !0), a;
}
function To(e) {
  const {
    type: t,
    vnode: n,
    proxy: a,
    withProxy: l,
    props: r,
    propsOptions: [i],
    slots: o,
    attrs: s,
    emit: c,
    render: u,
    renderCache: d,
    data: f,
    setupState: v,
    ctx: h,
    inheritAttrs: p,
  } = e;
  let w, g;
  const _ = wi(e);
  try {
    if (n.shapeFlag & 4) {
      const k = l || a;
      (w = vn(u.call(k, k, d, r, v, f, h))), (g = s);
    } else {
      const k = t;
      (w = vn(
        k.length > 1 ? k(r, { attrs: s, slots: o, emit: c }) : k(r, null)
      )),
        (g = t.props ? s : Dy(s));
    }
  } catch (k) {
    (Jl.length = 0), Xi(k, e, 1), (w = m(ln));
  }
  let y = w;
  if (g && p !== !1) {
    const k = Object.keys(g),
      { shapeFlag: S } = y;
    k.length && S & 7 && (i && k.some(cu) && (g = zy(g, i)), (y = $n(y, g)));
  }
  return (
    n.dirs && ((y = $n(y)), (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (y.transition = n.transition),
    (w = y),
    wi(_),
    w
  );
}
const Dy = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Wi(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  zy = (e, t) => {
    const n = {};
    for (const a in e) (!cu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
    return n;
  };
function jy(e, t, n) {
  const { props: a, children: l, component: r } = e,
    { props: i, children: o, patchFlag: s } = t,
    c = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && s >= 0) {
    if (s & 1024) return !0;
    if (s & 16) return a ? Wc(a, i, c) : !!i;
    if (s & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (i[f] !== a[f] && !Zi(c, f)) return !0;
      }
    }
  } else
    return (l || o) && (!o || !o.$stable)
      ? !0
      : a === i
      ? !1
      : a
      ? i
        ? Wc(a, i, c)
        : !0
      : !!i;
  return !1;
}
function Wc(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !Zi(n, r)) return !0;
  }
  return !1;
}
function Hy({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Uy = (e) => e.__isSuspense;
function Wy(e, t) {
  t && t.pendingBranch
    ? he(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : My(e);
}
function Qe(e, t) {
  if (dt) {
    let n = dt.provides;
    const a = dt.parent && dt.parent.provides;
    a === n && (n = dt.provides = Object.create(a)), (n[e] = t);
  }
}
function Oe(e, t, n = !1) {
  const a = dt || jt;
  if (a) {
    const l =
      a.parent == null
        ? a.vnode.appContext && a.vnode.appContext.provides
        : a.parent.provides;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && Ce(t) ? t.call(a.proxy) : t;
  }
}
function bn(e, t) {
  return eo(e, null, t);
}
function Yy(e, t) {
  return eo(e, null, { flush: "post" });
}
const Yc = {};
function ce(e, t, n) {
  return eo(e, t, n);
}
function eo(
  e,
  t,
  { immediate: n, deep: a, flush: l, onTrack: r, onTrigger: i } = ze
) {
  const o = dt;
  let s,
    c = !1,
    u = !1;
  if (
    (Ge(e)
      ? ((s = () => e.value), (c = ss(e)))
      : il(e)
      ? ((s = () => e), (a = !0))
      : he(e)
      ? ((u = !0),
        (c = e.some((g) => il(g) || ss(g))),
        (s = () =>
          e.map((g) => {
            if (Ge(g)) return g.value;
            if (il(g)) return ga(g);
            if (Ce(g)) return En(g, o, 2);
          })))
      : Ce(e)
      ? t
        ? (s = () => En(e, o, 2))
        : (s = () => {
            if (!(o && o.isUnmounted)) return d && d(), Ht(e, o, 3, [f]);
          })
      : (s = an),
    t && a)
  ) {
    const g = s;
    s = () => ga(g());
  }
  let d,
    f = (g) => {
      d = w.onStop = () => {
        En(g, o, 4);
      };
    };
  if (mr)
    return (f = an), t ? n && Ht(t, o, 3, [s(), u ? [] : void 0, f]) : s(), an;
  let v = u ? [] : Yc;
  const h = () => {
    if (w.active)
      if (t) {
        const g = w.run();
        (a || c || (u ? g.some((_, y) => ir(_, v[y])) : ir(g, v))) &&
          (d && d(), Ht(t, o, 3, [g, v === Yc ? void 0 : v, f]), (v = g));
      } else w.run();
  };
  h.allowRecurse = !!t;
  let p;
  l === "sync"
    ? (p = h)
    : l === "post"
    ? (p = () => wt(h, o && o.suspense))
    : (p = () => Ny(h));
  const w = new mu(s, p);
  return (
    t
      ? n
        ? h()
        : (v = w.run())
      : l === "post"
      ? wt(w.run.bind(w), o && o.suspense)
      : w.run(),
    () => {
      w.stop(), o && o.scope && du(o.scope.effects, w);
    }
  );
}
function Gy(e, t, n) {
  const a = this.proxy,
    l = lt(e) ? (e.includes(".") ? Dv(a, e) : () => a[e]) : e.bind(a, a);
  let r;
  Ce(t) ? (r = t) : ((r = t.handler), (n = t));
  const i = dt;
  cl(this);
  const o = eo(l, r.bind(a), n);
  return i ? cl(i) : Ca(), o;
}
function Dv(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
function ga(e, t) {
  if (!et(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Ge(e))) ga(e.value, t);
  else if (he(e)) for (let n = 0; n < e.length; n++) ga(e[n], t);
  else if (Yi(e) || rl(e))
    e.forEach((n) => {
      ga(n, t);
    });
  else if (fv(e)) for (const n in e) ga(e[n], t);
  return e;
}
function zv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    _t(() => {
      e.isMounted = !0;
    }),
    At(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ft = [Function, Array],
  Ky = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ft,
      onEnter: Ft,
      onAfterEnter: Ft,
      onEnterCancelled: Ft,
      onBeforeLeave: Ft,
      onLeave: Ft,
      onAfterLeave: Ft,
      onLeaveCancelled: Ft,
      onBeforeAppear: Ft,
      onAppear: Ft,
      onAfterAppear: Ft,
      onAppearCancelled: Ft,
    },
    setup(e, { slots: t }) {
      const n = Ir(),
        a = zv();
      let l;
      return () => {
        const r = t.default && Cu(t.default(), !0);
        if (!r || !r.length) return;
        let i = r[0];
        if (r.length > 1) {
          for (const p of r)
            if (p.type !== ln) {
              i = p;
              break;
            }
        }
        const o = Ve(e),
          { mode: s } = o;
        if (a.isLeaving) return Ro(i);
        const c = Gc(i);
        if (!c) return Ro(i);
        const u = dr(c, o, a, n);
        fr(c, u);
        const d = n.subTree,
          f = d && Gc(d);
        let v = !1;
        const { getTransitionKey: h } = c.type;
        if (h) {
          const p = h();
          l === void 0 ? (l = p) : p !== l && ((l = p), (v = !0));
        }
        if (f && f.type !== ln && (!fa(c, f) || v)) {
          const p = dr(f, o, a, n);
          if ((fr(f, p), s === "out-in"))
            return (
              (a.isLeaving = !0),
              (p.afterLeave = () => {
                (a.isLeaving = !1), n.update();
              }),
              Ro(i)
            );
          s === "in-out" &&
            c.type !== ln &&
            (p.delayLeave = (w, g, _) => {
              const y = Hv(a, f);
              (y[String(f.key)] = f),
                (w._leaveCb = () => {
                  g(), (w._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = _);
            });
        }
        return i;
      };
    },
  },
  jv = Ky;
function Hv(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || ((a = Object.create(null)), n.set(t.type, a)), a;
}
function dr(e, t, n, a) {
  const {
      appear: l,
      mode: r,
      persisted: i = !1,
      onBeforeEnter: o,
      onEnter: s,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: f,
      onAfterLeave: v,
      onLeaveCancelled: h,
      onBeforeAppear: p,
      onAppear: w,
      onAfterAppear: g,
      onAppearCancelled: _,
    } = t,
    y = String(e.key),
    k = Hv(n, e),
    S = (C, V) => {
      C && Ht(C, a, 9, V);
    },
    A = (C, V) => {
      const $ = V[1];
      S(C, V),
        he(C) ? C.every((R) => R.length <= 1) && $() : C.length <= 1 && $();
    },
    x = {
      mode: r,
      persisted: i,
      beforeEnter(C) {
        let V = o;
        if (!n.isMounted)
          if (l) V = p || o;
          else return;
        C._leaveCb && C._leaveCb(!0);
        const $ = k[y];
        $ && fa(e, $) && $.el._leaveCb && $.el._leaveCb(), S(V, [C]);
      },
      enter(C) {
        let V = s,
          $ = c,
          R = u;
        if (!n.isMounted)
          if (l) (V = w || s), ($ = g || c), (R = _ || u);
          else return;
        let I = !1;
        const L = (C._enterCb = (D) => {
          I ||
            ((I = !0),
            D ? S(R, [C]) : S($, [C]),
            x.delayedLeave && x.delayedLeave(),
            (C._enterCb = void 0));
        });
        V ? A(V, [C, L]) : L();
      },
      leave(C, V) {
        const $ = String(e.key);
        if ((C._enterCb && C._enterCb(!0), n.isUnmounting)) return V();
        S(d, [C]);
        let R = !1;
        const I = (C._leaveCb = (L) => {
          R ||
            ((R = !0),
            V(),
            L ? S(h, [C]) : S(v, [C]),
            (C._leaveCb = void 0),
            k[$] === e && delete k[$]);
        });
        (k[$] = e), f ? A(f, [C, I]) : I();
      },
      clone(C) {
        return dr(C, t, n, a);
      },
    };
  return x;
}
function Ro(e) {
  if (to(e)) return (e = $n(e)), (e.children = null), e;
}
function Gc(e) {
  return to(e) ? (e.children ? e.children[0] : void 0) : e;
}
function fr(e, t) {
  e.shapeFlag & 6 && e.component
    ? fr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Cu(e, t = !1, n) {
  let a = [],
    l = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const o = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === xe
      ? (i.patchFlag & 128 && l++, (a = a.concat(Cu(i.children, t, o))))
      : (t || i.type !== ln) && a.push(o != null ? $n(i, { key: o }) : i);
  }
  if (l > 1) for (let r = 0; r < a.length; r++) a[r].patchFlag = -2;
  return a;
}
function Oa(e) {
  return Ce(e) ? { setup: e, name: e.name } : e;
}
const di = (e) => !!e.type.__asyncLoader,
  to = (e) => e.type.__isKeepAlive;
function Uv(e, t) {
  Yv(e, "a", t);
}
function Wv(e, t) {
  Yv(e, "da", t);
}
function Yv(e, t, n = dt) {
  const a =
    e.__wdc ||
    (e.__wdc = () => {
      let l = n;
      for (; l; ) {
        if (l.isDeactivated) return;
        l = l.parent;
      }
      return e();
    });
  if ((no(t, a, n), n)) {
    let l = n.parent;
    for (; l && l.parent; )
      to(l.parent.vnode) && qy(a, t, n, l), (l = l.parent);
  }
}
function qy(e, t, n, a) {
  const l = no(t, e, a, !0);
  ku(() => {
    du(a[t], l);
  }, n);
}
function no(e, t, n = dt, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Ia(), cl(n);
          const o = Ht(t, n, e, i);
          return Ca(), Pa(), o;
        });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Bn =
    (e) =>
    (t, n = dt) =>
      (!mr || e === "sp") && no(e, t, n),
  ao = Bn("bm"),
  _t = Bn("m"),
  Gv = Bn("bu"),
  Kv = Bn("u"),
  At = Bn("bum"),
  ku = Bn("um"),
  Xy = Bn("sp"),
  Jy = Bn("rtg"),
  Zy = Bn("rtc");
function Qy(e, t = dt) {
  no("ec", e, t);
}
function Le(e, t) {
  const n = jt;
  if (n === null) return e;
  const a = ro(n) || n.proxy,
    l = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, s, c = ze] = t[r];
    Ce(i) && (i = { mounted: i, updated: i }),
      i.deep && ga(o),
      l.push({
        dir: i,
        instance: a,
        value: o,
        oldValue: void 0,
        arg: s,
        modifiers: c,
      });
  }
  return e;
}
function ia(e, t, n, a) {
  const l = e.dirs,
    r = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const o = l[i];
    r && (o.oldValue = r[i].value);
    let s = o.dir[a];
    s && (Ia(), Ht(s, n, 8, [e.el, o, e, t]), Pa());
  }
}
const Au = "components",
  eb = "directives";
function ct(e, t) {
  return Eu(Au, e, !0, t) || e;
}
const qv = Symbol();
function tb(e) {
  return lt(e) ? Eu(Au, e, !1) || e : e || qv;
}
function Rt(e) {
  return Eu(eb, e);
}
function Eu(e, t, n = !0, a = !1) {
  const l = jt || dt;
  if (l) {
    const r = l.type;
    if (e === Au) {
      const o = sm(r, !1);
      if (o && (o === t || o === Wt(t) || o === Ln(Wt(t)))) return r;
    }
    const i = Kc(l[e] || r[e], t) || Kc(l.appContext[e], t);
    return !i && a ? r : i;
  }
}
function Kc(e, t) {
  return e && (e[t] || e[Wt(t)] || e[Ln(Wt(t))]);
}
function Ul(e, t, n, a) {
  let l;
  const r = n && n[a];
  if (he(e) || lt(e)) {
    l = new Array(e.length);
    for (let i = 0, o = e.length; i < o; i++)
      l[i] = t(e[i], i, void 0, r && r[i]);
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let i = 0; i < e; i++) l[i] = t(i + 1, i, void 0, r && r[i]);
  } else if (et(e))
    if (e[Symbol.iterator])
      l = Array.from(e, (i, o) => t(i, o, void 0, r && r[o]));
    else {
      const i = Object.keys(e);
      l = new Array(i.length);
      for (let o = 0, s = i.length; o < s; o++) {
        const c = i[o];
        l[o] = t(e[c], c, o, r && r[o]);
      }
    }
  else l = [];
  return n && (n[a] = l), l;
}
function Lo(e) {
  const t = {};
  for (const n in e) t[ui(n)] = e[n];
  return t;
}
const ds = (e) => (e ? (im(e) ? ro(e) || e.proxy : ds(e.parent)) : null),
  Si = ft(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ds(e.parent),
    $root: (e) => ds(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Jv(e),
    $forceUpdate: (e) => e.f || (e.f = () => Rv(e.update)),
    $nextTick: (e) => e.n || (e.n = Ke.bind(e.proxy)),
    $watch: (e) => Gy.bind(e),
  }),
  nb = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: a,
        data: l,
        props: r,
        accessCache: i,
        type: o,
        appContext: s,
      } = e;
      let c;
      if (t[0] !== "$") {
        const v = i[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return a[t];
            case 2:
              return l[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (a !== ze && Pe(a, t)) return (i[t] = 1), a[t];
          if (l !== ze && Pe(l, t)) return (i[t] = 2), l[t];
          if ((c = e.propsOptions[0]) && Pe(c, t)) return (i[t] = 3), r[t];
          if (n !== ze && Pe(n, t)) return (i[t] = 4), n[t];
          fs && (i[t] = 0);
        }
      }
      const u = Si[t];
      let d, f;
      if (u) return t === "$attrs" && Tt(e, "get", t), u(e);
      if ((d = o.__cssModules) && (d = d[t])) return d;
      if (n !== ze && Pe(n, t)) return (i[t] = 4), n[t];
      if (((f = s.config.globalProperties), Pe(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: a, setupState: l, ctx: r } = e;
      return l !== ze && Pe(l, t)
        ? ((l[t] = n), !0)
        : a !== ze && Pe(a, t)
        ? ((a[t] = n), !0)
        : Pe(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: a,
          appContext: l,
          propsOptions: r,
        },
      },
      i
    ) {
      let o;
      return (
        !!n[i] ||
        (e !== ze && Pe(e, i)) ||
        (t !== ze && Pe(t, i)) ||
        ((o = r[0]) && Pe(o, i)) ||
        Pe(a, i) ||
        Pe(Si, i) ||
        Pe(l.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Pe(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let fs = !0;
function ab(e) {
  const t = Jv(e),
    n = e.proxy,
    a = e.ctx;
  (fs = !1), t.beforeCreate && qc(t.beforeCreate, e, "bc");
  const {
    data: l,
    computed: r,
    methods: i,
    watch: o,
    provide: s,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: v,
    updated: h,
    activated: p,
    deactivated: w,
    beforeDestroy: g,
    beforeUnmount: _,
    destroyed: y,
    unmounted: k,
    render: S,
    renderTracked: A,
    renderTriggered: x,
    errorCaptured: C,
    serverPrefetch: V,
    expose: $,
    inheritAttrs: R,
    components: I,
    directives: L,
    filters: D,
  } = t;
  if ((c && lb(c, a, null, e.appContext.config.unwrapInjectedRef), i))
    for (const T in i) {
      const F = i[T];
      Ce(F) && (a[T] = F.bind(n));
    }
  if (l) {
    const T = l.call(n, n);
    et(T) && (e.data = vt(T));
  }
  if (((fs = !0), r))
    for (const T in r) {
      const F = r[T],
        J = Ce(F) ? F.bind(n, n) : Ce(F.get) ? F.get.bind(n, n) : an,
        K = !Ce(F) && Ce(F.set) ? F.set.bind(n) : an,
        le = b({ get: J, set: K });
      Object.defineProperty(a, T, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (ie) => (le.value = ie),
      });
    }
  if (o) for (const T in o) Xv(o[T], a, n, T);
  if (s) {
    const T = Ce(s) ? s.call(n) : s;
    Reflect.ownKeys(T).forEach((F) => {
      Qe(F, T[F]);
    });
  }
  u && qc(u, e, "c");
  function z(T, F) {
    he(F) ? F.forEach((J) => T(J.bind(n))) : F && T(F.bind(n));
  }
  if (
    (z(ao, d),
    z(_t, f),
    z(Gv, v),
    z(Kv, h),
    z(Uv, p),
    z(Wv, w),
    z(Qy, C),
    z(Zy, A),
    z(Jy, x),
    z(At, _),
    z(ku, k),
    z(Xy, V),
    he($))
  )
    if ($.length) {
      const T = e.exposed || (e.exposed = {});
      $.forEach((F) => {
        Object.defineProperty(T, F, {
          get: () => n[F],
          set: (J) => (n[F] = J),
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === an && (e.render = S),
    R != null && (e.inheritAttrs = R),
    I && (e.components = I),
    L && (e.directives = L);
}
function lb(e, t, n = an, a = !1) {
  he(e) && (e = vs(e));
  for (const l in e) {
    const r = e[l];
    let i;
    et(r)
      ? "default" in r
        ? (i = Oe(r.from || l, r.default, !0))
        : (i = Oe(r.from || l))
      : (i = Oe(r)),
      Ge(i) && a
        ? Object.defineProperty(t, l, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[l] = i);
  }
}
function qc(e, t, n) {
  Ht(he(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Xv(e, t, n, a) {
  const l = a.includes(".") ? Dv(n, a) : () => n[a];
  if (lt(e)) {
    const r = t[e];
    Ce(r) && ce(l, r);
  } else if (Ce(e)) ce(l, e.bind(n));
  else if (et(e))
    if (he(e)) e.forEach((r) => Xv(r, t, n, a));
    else {
      const r = Ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ce(r) && ce(l, r, e);
    }
}
function Jv(e) {
  const t = e.type,
    { mixins: n, extends: a } = t,
    {
      mixins: l,
      optionsCache: r,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    o = r.get(t);
  let s;
  return (
    o
      ? (s = o)
      : !l.length && !n && !a
      ? (s = t)
      : ((s = {}), l.length && l.forEach((c) => Ci(s, c, i, !0)), Ci(s, t, i)),
    r.set(t, s),
    s
  );
}
function Ci(e, t, n, a = !1) {
  const { mixins: l, extends: r } = t;
  r && Ci(e, r, n, !0), l && l.forEach((i) => Ci(e, i, n, !0));
  for (const i in t)
    if (!(a && i === "expose")) {
      const o = rb[i] || (n && n[i]);
      e[i] = o ? o(e[i], t[i]) : t[i];
    }
  return e;
}
const rb = {
  data: Xc,
  props: da,
  emits: da,
  methods: da,
  computed: da,
  beforeCreate: bt,
  created: bt,
  beforeMount: bt,
  mounted: bt,
  beforeUpdate: bt,
  updated: bt,
  beforeDestroy: bt,
  beforeUnmount: bt,
  destroyed: bt,
  unmounted: bt,
  activated: bt,
  deactivated: bt,
  errorCaptured: bt,
  serverPrefetch: bt,
  components: da,
  directives: da,
  watch: ob,
  provide: Xc,
  inject: ib,
};
function Xc(e, t) {
  return t
    ? e
      ? function () {
          return ft(
            Ce(e) ? e.call(this, this) : e,
            Ce(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function ib(e, t) {
  return da(vs(e), vs(t));
}
function vs(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function bt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function da(e, t) {
  return e ? ft(ft(Object.create(null), e), t) : t;
}
function ob(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ft(Object.create(null), e);
  for (const a in t) n[a] = bt(e[a], t[a]);
  return n;
}
function sb(e, t, n, a = !1) {
  const l = {},
    r = {};
  _i(r, lo, 1), (e.propsDefaults = Object.create(null)), Zv(e, t, l, r);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? (e.props = a ? l : Cv(l)) : e.type.props ? (e.props = l) : (e.props = r),
    (e.attrs = r);
}
function ub(e, t, n, a) {
  const {
      props: l,
      attrs: r,
      vnode: { patchFlag: i },
    } = e,
    o = Ve(l),
    [s] = e.propsOptions;
  let c = !1;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (Zi(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s)
          if (Pe(r, f)) v !== r[f] && ((r[f] = v), (c = !0));
          else {
            const h = Wt(f);
            l[h] = ms(s, o, h, v, e, !1);
          }
        else v !== r[f] && ((r[f] = v), (c = !0));
      }
    }
  } else {
    Zv(e, t, l, r) && (c = !0);
    let u;
    for (const d in o)
      (!t || (!Pe(t, d) && ((u = bl(d)) === d || !Pe(t, u)))) &&
        (s
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (l[d] = ms(s, o, d, void 0, e, !0))
          : delete l[d]);
    if (r !== o)
      for (const d in r) (!t || (!Pe(t, d) && !0)) && (delete r[d], (c = !0));
  }
  c && Vn(e, "set", "$attrs");
}
function Zv(e, t, n, a) {
  const [l, r] = e.propsOptions;
  let i = !1,
    o;
  if (t)
    for (let s in t) {
      if (si(s)) continue;
      const c = t[s];
      let u;
      l && Pe(l, (u = Wt(s)))
        ? !r || !r.includes(u)
          ? (n[u] = c)
          : ((o || (o = {}))[u] = c)
        : Zi(e.emitsOptions, s) ||
          ((!(s in a) || c !== a[s]) && ((a[s] = c), (i = !0)));
    }
  if (r) {
    const s = Ve(n),
      c = o || ze;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = ms(l, s, d, c[d], e, !Pe(c, d));
    }
  }
  return i;
}
function ms(e, t, n, a, l, r) {
  const i = e[n];
  if (i != null) {
    const o = Pe(i, "default");
    if (o && a === void 0) {
      const s = i.default;
      if (i.type !== Function && Ce(s)) {
        const { propsDefaults: c } = l;
        n in c ? (a = c[n]) : (cl(l), (a = c[n] = s.call(null, t)), Ca());
      } else a = s;
    }
    i[0] &&
      (r && !o ? (a = !1) : i[1] && (a === "" || a === bl(n)) && (a = !0));
  }
  return a;
}
function Qv(e, t, n = !1) {
  const a = t.propsCache,
    l = a.get(e);
  if (l) return l;
  const r = e.props,
    i = {},
    o = [];
  let s = !1;
  if (!Ce(e)) {
    const u = (d) => {
      s = !0;
      const [f, v] = Qv(d, t, !0);
      ft(i, f), v && o.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!r && !s) return a.set(e, ll), ll;
  if (he(r))
    for (let u = 0; u < r.length; u++) {
      const d = Wt(r[u]);
      Jc(d) && (i[d] = ze);
    }
  else if (r)
    for (const u in r) {
      const d = Wt(u);
      if (Jc(d)) {
        const f = r[u],
          v = (i[d] = he(f) || Ce(f) ? { type: f } : f);
        if (v) {
          const h = ed(Boolean, v.type),
            p = ed(String, v.type);
          (v[0] = h > -1),
            (v[1] = p < 0 || h < p),
            (h > -1 || Pe(v, "default")) && o.push(d);
        }
      }
    }
  const c = [i, o];
  return a.set(e, c), c;
}
function Jc(e) {
  return e[0] !== "$";
}
function Zc(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Qc(e, t) {
  return Zc(e) === Zc(t);
}
function ed(e, t) {
  return he(t) ? t.findIndex((n) => Qc(n, e)) : Ce(t) && Qc(t, e) ? 0 : -1;
}
const em = (e) => e[0] === "_" || e === "$stable",
  Vu = (e) => (he(e) ? e.map(vn) : [vn(e)]),
  cb = (e, t, n) => {
    if (t._n) return t;
    const a = en((...l) => Vu(t(...l)), n);
    return (a._c = !1), a;
  },
  tm = (e, t, n) => {
    const a = e._ctx;
    for (const l in e) {
      if (em(l)) continue;
      const r = e[l];
      if (Ce(r)) t[l] = cb(l, r, a);
      else if (r != null) {
        const i = Vu(r);
        t[l] = () => i;
      }
    }
  },
  nm = (e, t) => {
    const n = Vu(t);
    e.slots.default = () => n;
  },
  db = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = Ve(t)), _i(t, "_", n)) : tm(t, (e.slots = {}));
    } else (e.slots = {}), t && nm(e, t);
    _i(e.slots, lo, 1);
  },
  fb = (e, t, n) => {
    const { vnode: a, slots: l } = e;
    let r = !0,
      i = ze;
    if (a.shapeFlag & 32) {
      const o = t._;
      o
        ? n && o === 1
          ? (r = !1)
          : (ft(l, t), !n && o === 1 && delete l._)
        : ((r = !t.$stable), tm(t, l)),
        (i = t);
    } else t && (nm(e, t), (i = { default: 1 }));
    if (r) for (const o in l) !em(o) && !(o in i) && delete l[o];
  };
function am() {
  return {
    app: null,
    config: {
      isNativeTag: Wp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let vb = 0;
function mb(e, t) {
  return function (a, l = null) {
    Ce(a) || (a = Object.assign({}, a)), l != null && !et(l) && (l = null);
    const r = am(),
      i = new Set();
    let o = !1;
    const s = (r.app = {
      _uid: vb++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Bb,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          i.has(c) ||
            (c && Ce(c.install)
              ? (i.add(c), c.install(s, ...u))
              : Ce(c) && (i.add(c), c(s, ...u))),
          s
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), s;
      },
      component(c, u) {
        return u ? ((r.components[c] = u), s) : r.components[c];
      },
      directive(c, u) {
        return u ? ((r.directives[c] = u), s) : r.directives[c];
      },
      mount(c, u, d) {
        if (!o) {
          const f = m(a, l);
          return (
            (f.appContext = r),
            u && t ? t(f, c) : e(f, c, d),
            (o = !0),
            (s._container = c),
            (c.__vue_app__ = s),
            ro(f.component) || f.component.proxy
          );
        }
      },
      unmount() {
        o && (e(null, s._container), delete s._container.__vue_app__);
      },
      provide(c, u) {
        return (r.provides[c] = u), s;
      },
    });
    return s;
  };
}
function hs(e, t, n, a, l = !1) {
  if (he(e)) {
    e.forEach((f, v) => hs(f, t && (he(t) ? t[v] : t), n, a, l));
    return;
  }
  if (di(a) && !l) return;
  const r = a.shapeFlag & 4 ? ro(a.component) || a.component.proxy : a.el,
    i = l ? null : r,
    { i: o, r: s } = e,
    c = t && t.r,
    u = o.refs === ze ? (o.refs = {}) : o.refs,
    d = o.setupState;
  if (
    (c != null &&
      c !== s &&
      (lt(c)
        ? ((u[c] = null), Pe(d, c) && (d[c] = null))
        : Ge(c) && (c.value = null)),
    Ce(s))
  )
    En(s, o, 12, [i, u]);
  else {
    const f = lt(s),
      v = Ge(s);
    if (f || v) {
      const h = () => {
        if (e.f) {
          const p = f ? u[s] : s.value;
          l
            ? he(p) && du(p, r)
            : he(p)
            ? p.includes(r) || p.push(r)
            : f
            ? ((u[s] = [r]), Pe(d, s) && (d[s] = u[s]))
            : ((s.value = [r]), e.k && (u[e.k] = s.value));
        } else
          f
            ? ((u[s] = i), Pe(d, s) && (d[s] = i))
            : v && ((s.value = i), e.k && (u[e.k] = i));
      };
      i ? ((h.id = -1), wt(h, n)) : h();
    }
  }
}
const wt = Wy;
function hb(e) {
  return gb(e);
}
function gb(e, t) {
  const n = Jp();
  n.__VUE__ = !0;
  const {
      insert: a,
      remove: l,
      patchProp: r,
      createElement: i,
      createText: o,
      createComment: s,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: f,
      setScopeId: v = an,
      cloneNode: h,
      insertStaticContent: p,
    } = e,
    w = (
      E,
      O,
      M,
      U = null,
      H = null,
      ee = null,
      re = !1,
      Q = null,
      ne = !!O.dynamicChildren
    ) => {
      if (E === O) return;
      E && !fa(E, O) && ((U = oe(E)), we(E, H, ee, !0), (E = null)),
        O.patchFlag === -2 && ((ne = !1), (O.dynamicChildren = null));
      const { type: G, ref: ve, shapeFlag: de } = O;
      switch (G) {
        case Iu:
          g(E, O, M, U);
          break;
        case ln:
          _(E, O, M, U);
          break;
        case fi:
          E == null && y(O, M, U, re);
          break;
        case xe:
          L(E, O, M, U, H, ee, re, Q, ne);
          break;
        default:
          de & 1
            ? A(E, O, M, U, H, ee, re, Q, ne)
            : de & 6
            ? D(E, O, M, U, H, ee, re, Q, ne)
            : (de & 64 || de & 128) &&
              G.process(E, O, M, U, H, ee, re, Q, ne, Te);
      }
      ve != null && H && hs(ve, E && E.ref, ee, O || E, !O);
    },
    g = (E, O, M, U) => {
      if (E == null) a((O.el = o(O.children)), M, U);
      else {
        const H = (O.el = E.el);
        O.children !== E.children && c(H, O.children);
      }
    },
    _ = (E, O, M, U) => {
      E == null ? a((O.el = s(O.children || "")), M, U) : (O.el = E.el);
    },
    y = (E, O, M, U) => {
      [E.el, E.anchor] = p(E.children, O, M, U, E.el, E.anchor);
    },
    k = ({ el: E, anchor: O }, M, U) => {
      let H;
      for (; E && E !== O; ) (H = f(E)), a(E, M, U), (E = H);
      a(O, M, U);
    },
    S = ({ el: E, anchor: O }) => {
      let M;
      for (; E && E !== O; ) (M = f(E)), l(E), (E = M);
      l(O);
    },
    A = (E, O, M, U, H, ee, re, Q, ne) => {
      (re = re || O.type === "svg"),
        E == null ? x(O, M, U, H, ee, re, Q, ne) : $(E, O, H, ee, re, Q, ne);
    },
    x = (E, O, M, U, H, ee, re, Q) => {
      let ne, G;
      const {
        type: ve,
        props: de,
        shapeFlag: me,
        transition: _e,
        patchFlag: Re,
        dirs: Me,
      } = E;
      if (E.el && h !== void 0 && Re === -1) ne = E.el = h(E.el);
      else {
        if (
          ((ne = E.el = i(E.type, ee, de && de.is, de)),
          me & 8
            ? u(ne, E.children)
            : me & 16 &&
              V(
                E.children,
                ne,
                null,
                U,
                H,
                ee && ve !== "foreignObject",
                re,
                Q
              ),
          Me && ia(E, null, U, "created"),
          de)
        ) {
          for (const He in de)
            He !== "value" &&
              !si(He) &&
              r(ne, He, null, de[He], ee, E.children, U, H, q);
          "value" in de && r(ne, "value", null, de.value),
            (G = de.onVnodeBeforeMount) && fn(G, U, E);
        }
        C(ne, E, E.scopeId, re, U);
      }
      Me && ia(E, null, U, "beforeMount");
      const Fe = (!H || (H && !H.pendingBranch)) && _e && !_e.persisted;
      Fe && _e.beforeEnter(ne),
        a(ne, O, M),
        ((G = de && de.onVnodeMounted) || Fe || Me) &&
          wt(() => {
            G && fn(G, U, E),
              Fe && _e.enter(ne),
              Me && ia(E, null, U, "mounted");
          }, H);
    },
    C = (E, O, M, U, H) => {
      if ((M && v(E, M), U)) for (let ee = 0; ee < U.length; ee++) v(E, U[ee]);
      if (H) {
        let ee = H.subTree;
        if (O === ee) {
          const re = H.vnode;
          C(E, re, re.scopeId, re.slotScopeIds, H.parent);
        }
      }
    },
    V = (E, O, M, U, H, ee, re, Q, ne = 0) => {
      for (let G = ne; G < E.length; G++) {
        const ve = (E[G] = Q ? qn(E[G]) : vn(E[G]));
        w(null, ve, O, M, U, H, ee, re, Q);
      }
    },
    $ = (E, O, M, U, H, ee, re) => {
      const Q = (O.el = E.el);
      let { patchFlag: ne, dynamicChildren: G, dirs: ve } = O;
      ne |= E.patchFlag & 16;
      const de = E.props || ze,
        me = O.props || ze;
      let _e;
      M && oa(M, !1),
        (_e = me.onVnodeBeforeUpdate) && fn(_e, M, O, E),
        ve && ia(O, E, M, "beforeUpdate"),
        M && oa(M, !0);
      const Re = H && O.type !== "foreignObject";
      if (
        (G
          ? R(E.dynamicChildren, G, Q, M, U, Re, ee)
          : re || J(E, O, Q, null, M, U, Re, ee, !1),
        ne > 0)
      ) {
        if (ne & 16) I(Q, O, de, me, M, U, H);
        else if (
          (ne & 2 && de.class !== me.class && r(Q, "class", null, me.class, H),
          ne & 4 && r(Q, "style", de.style, me.style, H),
          ne & 8)
        ) {
          const Me = O.dynamicProps;
          for (let Fe = 0; Fe < Me.length; Fe++) {
            const He = Me[Fe],
              Xt = de[He],
              Ua = me[He];
            (Ua !== Xt || He === "value") &&
              r(Q, He, Xt, Ua, H, E.children, M, U, q);
          }
        }
        ne & 1 && E.children !== O.children && u(Q, O.children);
      } else !re && G == null && I(Q, O, de, me, M, U, H);
      ((_e = me.onVnodeUpdated) || ve) &&
        wt(() => {
          _e && fn(_e, M, O, E), ve && ia(O, E, M, "updated");
        }, U);
    },
    R = (E, O, M, U, H, ee, re) => {
      for (let Q = 0; Q < O.length; Q++) {
        const ne = E[Q],
          G = O[Q],
          ve =
            ne.el && (ne.type === xe || !fa(ne, G) || ne.shapeFlag & 70)
              ? d(ne.el)
              : M;
        w(ne, G, ve, null, U, H, ee, re, !0);
      }
    },
    I = (E, O, M, U, H, ee, re) => {
      if (M !== U) {
        for (const Q in U) {
          if (si(Q)) continue;
          const ne = U[Q],
            G = M[Q];
          ne !== G && Q !== "value" && r(E, Q, G, ne, re, O.children, H, ee, q);
        }
        if (M !== ze)
          for (const Q in M)
            !si(Q) &&
              !(Q in U) &&
              r(E, Q, M[Q], null, re, O.children, H, ee, q);
        "value" in U && r(E, "value", M.value, U.value);
      }
    },
    L = (E, O, M, U, H, ee, re, Q, ne) => {
      const G = (O.el = E ? E.el : o("")),
        ve = (O.anchor = E ? E.anchor : o(""));
      let { patchFlag: de, dynamicChildren: me, slotScopeIds: _e } = O;
      _e && (Q = Q ? Q.concat(_e) : _e),
        E == null
          ? (a(G, M, U), a(ve, M, U), V(O.children, M, ve, H, ee, re, Q, ne))
          : de > 0 && de & 64 && me && E.dynamicChildren
          ? (R(E.dynamicChildren, me, M, H, ee, re, Q),
            (O.key != null || (H && O === H.subTree)) && $u(E, O, !0))
          : J(E, O, M, ve, H, ee, re, Q, ne);
    },
    D = (E, O, M, U, H, ee, re, Q, ne) => {
      (O.slotScopeIds = Q),
        E == null
          ? O.shapeFlag & 512
            ? H.ctx.activate(O, M, U, re, ne)
            : Y(O, M, U, H, ee, re, ne)
          : z(E, O, ne);
    },
    Y = (E, O, M, U, H, ee, re) => {
      const Q = (E.component = Vb(E, U, H));
      if ((to(E) && (Q.ctx.renderer = Te), $b(Q), Q.asyncDep)) {
        if ((H && H.registerDep(Q, T), !E.el)) {
          const ne = (Q.subTree = m(ln));
          _(null, ne, O, M);
        }
        return;
      }
      T(Q, E, O, M, H, ee, re);
    },
    z = (E, O, M) => {
      const U = (O.component = E.component);
      if (jy(E, O, M))
        if (U.asyncDep && !U.asyncResolved) {
          F(U, O, M);
          return;
        } else (U.next = O), By(U.update), U.update();
      else (O.el = E.el), (U.vnode = O);
    },
    T = (E, O, M, U, H, ee, re) => {
      const Q = () => {
          if (E.isMounted) {
            let { next: ve, bu: de, u: me, parent: _e, vnode: Re } = E,
              Me = ve,
              Fe;
            oa(E, !1),
              ve ? ((ve.el = Re.el), F(E, ve, re)) : (ve = Re),
              de && ci(de),
              (Fe = ve.props && ve.props.onVnodeBeforeUpdate) &&
                fn(Fe, _e, ve, Re),
              oa(E, !0);
            const He = To(E),
              Xt = E.subTree;
            (E.subTree = He),
              w(Xt, He, d(Xt.el), oe(Xt), E, H, ee),
              (ve.el = He.el),
              Me === null && Hy(E, He.el),
              me && wt(me, H),
              (Fe = ve.props && ve.props.onVnodeUpdated) &&
                wt(() => fn(Fe, _e, ve, Re), H);
          } else {
            let ve;
            const { el: de, props: me } = O,
              { bm: _e, m: Re, parent: Me } = E,
              Fe = di(O);
            if (
              (oa(E, !1),
              _e && ci(_e),
              !Fe && (ve = me && me.onVnodeBeforeMount) && fn(ve, Me, O),
              oa(E, !0),
              de && Se)
            ) {
              const He = () => {
                (E.subTree = To(E)), Se(de, E.subTree, E, H, null);
              };
              Fe
                ? O.type.__asyncLoader().then(() => !E.isUnmounted && He())
                : He();
            } else {
              const He = (E.subTree = To(E));
              w(null, He, M, U, E, H, ee), (O.el = He.el);
            }
            if ((Re && wt(Re, H), !Fe && (ve = me && me.onVnodeMounted))) {
              const He = O;
              wt(() => fn(ve, Me, He), H);
            }
            (O.shapeFlag & 256 ||
              (Me && di(Me.vnode) && Me.vnode.shapeFlag & 256)) &&
              E.a &&
              wt(E.a, H),
              (E.isMounted = !0),
              (O = M = U = null);
          }
        },
        ne = (E.effect = new mu(Q, () => Rv(G), E.scope)),
        G = (E.update = () => ne.run());
      (G.id = E.uid), oa(E, !0), G();
    },
    F = (E, O, M) => {
      O.component = E;
      const U = E.vnode.props;
      (E.vnode = O),
        (E.next = null),
        ub(E, O.props, U, M),
        fb(E, O.children, M),
        Ia(),
        Ji(void 0, E.update),
        Pa();
    },
    J = (E, O, M, U, H, ee, re, Q, ne = !1) => {
      const G = E && E.children,
        ve = E ? E.shapeFlag : 0,
        de = O.children,
        { patchFlag: me, shapeFlag: _e } = O;
      if (me > 0) {
        if (me & 128) {
          le(G, de, M, U, H, ee, re, Q, ne);
          return;
        } else if (me & 256) {
          K(G, de, M, U, H, ee, re, Q, ne);
          return;
        }
      }
      _e & 8
        ? (ve & 16 && q(G, H, ee), de !== G && u(M, de))
        : ve & 16
        ? _e & 16
          ? le(G, de, M, U, H, ee, re, Q, ne)
          : q(G, H, ee, !0)
        : (ve & 8 && u(M, ""), _e & 16 && V(de, M, U, H, ee, re, Q, ne));
    },
    K = (E, O, M, U, H, ee, re, Q, ne) => {
      (E = E || ll), (O = O || ll);
      const G = E.length,
        ve = O.length,
        de = Math.min(G, ve);
      let me;
      for (me = 0; me < de; me++) {
        const _e = (O[me] = ne ? qn(O[me]) : vn(O[me]));
        w(E[me], _e, M, null, H, ee, re, Q, ne);
      }
      G > ve ? q(E, H, ee, !0, !1, de) : V(O, M, U, H, ee, re, Q, ne, de);
    },
    le = (E, O, M, U, H, ee, re, Q, ne) => {
      let G = 0;
      const ve = O.length;
      let de = E.length - 1,
        me = ve - 1;
      for (; G <= de && G <= me; ) {
        const _e = E[G],
          Re = (O[G] = ne ? qn(O[G]) : vn(O[G]));
        if (fa(_e, Re)) w(_e, Re, M, null, H, ee, re, Q, ne);
        else break;
        G++;
      }
      for (; G <= de && G <= me; ) {
        const _e = E[de],
          Re = (O[me] = ne ? qn(O[me]) : vn(O[me]));
        if (fa(_e, Re)) w(_e, Re, M, null, H, ee, re, Q, ne);
        else break;
        de--, me--;
      }
      if (G > de) {
        if (G <= me) {
          const _e = me + 1,
            Re = _e < ve ? O[_e].el : U;
          for (; G <= me; )
            w(null, (O[G] = ne ? qn(O[G]) : vn(O[G])), M, Re, H, ee, re, Q, ne),
              G++;
        }
      } else if (G > me) for (; G <= de; ) we(E[G], H, ee, !0), G++;
      else {
        const _e = G,
          Re = G,
          Me = new Map();
        for (G = Re; G <= me; G++) {
          const Et = (O[G] = ne ? qn(O[G]) : vn(O[G]));
          Et.key != null && Me.set(Et.key, G);
        }
        let Fe,
          He = 0;
        const Xt = me - Re + 1;
        let Ua = !1,
          Tc = 0;
        const Rl = new Array(Xt);
        for (G = 0; G < Xt; G++) Rl[G] = 0;
        for (G = _e; G <= de; G++) {
          const Et = E[G];
          if (He >= Xt) {
            we(Et, H, ee, !0);
            continue;
          }
          let dn;
          if (Et.key != null) dn = Me.get(Et.key);
          else
            for (Fe = Re; Fe <= me; Fe++)
              if (Rl[Fe - Re] === 0 && fa(Et, O[Fe])) {
                dn = Fe;
                break;
              }
          dn === void 0
            ? we(Et, H, ee, !0)
            : ((Rl[dn - Re] = G + 1),
              dn >= Tc ? (Tc = dn) : (Ua = !0),
              w(Et, O[dn], M, null, H, ee, re, Q, ne),
              He++);
        }
        const Rc = Ua ? pb(Rl) : ll;
        for (Fe = Rc.length - 1, G = Xt - 1; G >= 0; G--) {
          const Et = Re + G,
            dn = O[Et],
            Lc = Et + 1 < ve ? O[Et + 1].el : U;
          Rl[G] === 0
            ? w(null, dn, M, Lc, H, ee, re, Q, ne)
            : Ua && (Fe < 0 || G !== Rc[Fe] ? ie(dn, M, Lc, 2) : Fe--);
        }
      }
    },
    ie = (E, O, M, U, H = null) => {
      const { el: ee, type: re, transition: Q, children: ne, shapeFlag: G } = E;
      if (G & 6) {
        ie(E.component.subTree, O, M, U);
        return;
      }
      if (G & 128) {
        E.suspense.move(O, M, U);
        return;
      }
      if (G & 64) {
        re.move(E, O, M, Te);
        return;
      }
      if (re === xe) {
        a(ee, O, M);
        for (let de = 0; de < ne.length; de++) ie(ne[de], O, M, U);
        a(E.anchor, O, M);
        return;
      }
      if (re === fi) {
        k(E, O, M);
        return;
      }
      if (U !== 2 && G & 1 && Q)
        if (U === 0) Q.beforeEnter(ee), a(ee, O, M), wt(() => Q.enter(ee), H);
        else {
          const { leave: de, delayLeave: me, afterLeave: _e } = Q,
            Re = () => a(ee, O, M),
            Me = () => {
              de(ee, () => {
                Re(), _e && _e();
              });
            };
          me ? me(ee, Re, Me) : Me();
        }
      else a(ee, O, M);
    },
    we = (E, O, M, U = !1, H = !1) => {
      const {
        type: ee,
        props: re,
        ref: Q,
        children: ne,
        dynamicChildren: G,
        shapeFlag: ve,
        patchFlag: de,
        dirs: me,
      } = E;
      if ((Q != null && hs(Q, null, M, E, !0), ve & 256)) {
        O.ctx.deactivate(E);
        return;
      }
      const _e = ve & 1 && me,
        Re = !di(E);
      let Me;
      if ((Re && (Me = re && re.onVnodeBeforeUnmount) && fn(Me, O, E), ve & 6))
        W(E.component, M, U);
      else {
        if (ve & 128) {
          E.suspense.unmount(M, U);
          return;
        }
        _e && ia(E, null, O, "beforeUnmount"),
          ve & 64
            ? E.type.remove(E, O, M, H, Te, U)
            : G && (ee !== xe || (de > 0 && de & 64))
            ? q(G, O, M, !1, !0)
            : ((ee === xe && de & 384) || (!H && ve & 16)) && q(ne, O, M),
          U && te(E);
      }
      ((Re && (Me = re && re.onVnodeUnmounted)) || _e) &&
        wt(() => {
          Me && fn(Me, O, E), _e && ia(E, null, O, "unmounted");
        }, M);
    },
    te = (E) => {
      const { type: O, el: M, anchor: U, transition: H } = E;
      if (O === xe) {
        N(M, U);
        return;
      }
      if (O === fi) {
        S(E);
        return;
      }
      const ee = () => {
        l(M), H && !H.persisted && H.afterLeave && H.afterLeave();
      };
      if (E.shapeFlag & 1 && H && !H.persisted) {
        const { leave: re, delayLeave: Q } = H,
          ne = () => re(M, ee);
        Q ? Q(E.el, ee, ne) : ne();
      } else ee();
    },
    N = (E, O) => {
      let M;
      for (; E !== O; ) (M = f(E)), l(E), (E = M);
      l(O);
    },
    W = (E, O, M) => {
      const { bum: U, scope: H, update: ee, subTree: re, um: Q } = E;
      U && ci(U),
        H.stop(),
        ee && ((ee.active = !1), we(re, E, O, M)),
        Q && wt(Q, O),
        wt(() => {
          E.isUnmounted = !0;
        }, O),
        O &&
          O.pendingBranch &&
          !O.isUnmounted &&
          E.asyncDep &&
          !E.asyncResolved &&
          E.suspenseId === O.pendingId &&
          (O.deps--, O.deps === 0 && O.resolve());
    },
    q = (E, O, M, U = !1, H = !1, ee = 0) => {
      for (let re = ee; re < E.length; re++) we(E[re], O, M, U, H);
    },
    oe = (E) =>
      E.shapeFlag & 6
        ? oe(E.component.subTree)
        : E.shapeFlag & 128
        ? E.suspense.next()
        : f(E.anchor || E.el),
    Ie = (E, O, M) => {
      E == null
        ? O._vnode && we(O._vnode, null, null, !0)
        : w(O._vnode || null, E, O, null, null, null, M),
        Nv(),
        (O._vnode = E);
    },
    Te = {
      p: w,
      um: we,
      m: ie,
      r: te,
      mt: Y,
      mc: V,
      pc: J,
      pbc: R,
      n: oe,
      o: e,
    };
  let ke, Se;
  return (
    t && ([ke, Se] = t(Te)), { render: Ie, hydrate: ke, createApp: mb(Ie, ke) }
  );
}
function oa({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function $u(e, t, n = !1) {
  const a = e.children,
    l = t.children;
  if (he(a) && he(l))
    for (let r = 0; r < a.length; r++) {
      const i = a[r];
      let o = l[r];
      o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = l[r] = qn(l[r])), (o.el = i.el)),
        n || $u(i, o));
    }
}
function pb(e) {
  const t = e.slice(),
    n = [0];
  let a, l, r, i, o;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const c = e[a];
    if (c !== 0) {
      if (((l = n[n.length - 1]), e[l] < c)) {
        (t[a] = l), n.push(a);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        (o = (r + i) >> 1), e[n[o]] < c ? (r = o + 1) : (i = o);
      c < e[n[r]] && (r > 0 && (t[a] = n[r - 1]), (n[r] = a));
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; ) (n[r] = i), (i = t[i]);
  return n;
}
const yb = (e) => e.__isTeleport,
  Xl = (e) => e && (e.disabled || e.disabled === ""),
  td = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
  gs = (e, t) => {
    const n = e && e.to;
    return lt(n) ? (t ? t(n) : null) : n;
  },
  bb = {
    __isTeleport: !0,
    process(e, t, n, a, l, r, i, o, s, c) {
      const {
          mc: u,
          pc: d,
          pbc: f,
          o: { insert: v, querySelector: h, createText: p, createComment: w },
        } = c,
        g = Xl(t.props);
      let { shapeFlag: _, children: y, dynamicChildren: k } = t;
      if (e == null) {
        const S = (t.el = p("")),
          A = (t.anchor = p(""));
        v(S, n, a), v(A, n, a);
        const x = (t.target = gs(t.props, h)),
          C = (t.targetAnchor = p(""));
        x && (v(C, x), (i = i || td(x)));
        const V = ($, R) => {
          _ & 16 && u(y, $, R, l, r, i, o, s);
        };
        g ? V(n, A) : x && V(x, C);
      } else {
        t.el = e.el;
        const S = (t.anchor = e.anchor),
          A = (t.target = e.target),
          x = (t.targetAnchor = e.targetAnchor),
          C = Xl(e.props),
          V = C ? n : A,
          $ = C ? S : x;
        if (
          ((i = i || td(A)),
          k
            ? (f(e.dynamicChildren, k, V, l, r, i, o), $u(e, t, !0))
            : s || d(e, t, V, $, l, r, i, o, !1),
          g)
        )
          C || Gr(t, n, S, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const R = (t.target = gs(t.props, h));
          R && Gr(t, R, null, c, 0);
        } else C && Gr(t, A, x, c, 1);
      }
    },
    remove(e, t, n, a, { um: l, o: { remove: r } }, i) {
      const {
        shapeFlag: o,
        children: s,
        anchor: c,
        targetAnchor: u,
        target: d,
        props: f,
      } = e;
      if ((d && r(u), (i || !Xl(f)) && (r(c), o & 16)))
        for (let v = 0; v < s.length; v++) {
          const h = s[v];
          l(h, t, n, !0, !!h.dynamicChildren);
        }
    },
    move: Gr,
    hydrate: _b,
  };
function Gr(e, t, n, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: o, shapeFlag: s, children: c, props: u } = e,
    d = r === 2;
  if ((d && a(i, t, n), (!d || Xl(u)) && s & 16))
    for (let f = 0; f < c.length; f++) l(c[f], t, n, 2);
  d && a(o, t, n);
}
function _b(
  e,
  t,
  n,
  a,
  l,
  r,
  { o: { nextSibling: i, parentNode: o, querySelector: s } },
  c
) {
  const u = (t.target = gs(t.props, s));
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Xl(t.props))
        (t.anchor = c(i(e), t, o(e), n, a, l, r)), (t.targetAnchor = d);
      else {
        t.anchor = i(e);
        let f = d;
        for (; f; )
          if (
            ((f = i(f)), f && f.nodeType === 8 && f.data === "teleport anchor")
          ) {
            (t.targetAnchor = f),
              (u._lpa = t.targetAnchor && i(t.targetAnchor));
            break;
          }
        c(d, t, u, n, a, l, r);
      }
  }
  return t.anchor && i(t.anchor);
}
const xb = bb,
  xe = Symbol(void 0),
  Iu = Symbol(void 0),
  ln = Symbol(void 0),
  fi = Symbol(void 0),
  Jl = [];
let tn = null;
function Ae(e = !1) {
  Jl.push((tn = e ? null : []));
}
function wb() {
  Jl.pop(), (tn = Jl[Jl.length - 1] || null);
}
let vr = 1;
function nd(e) {
  vr += e;
}
function lm(e) {
  return (
    (e.dynamicChildren = vr > 0 ? tn || ll : null),
    wb(),
    vr > 0 && tn && tn.push(e),
    e
  );
}
function Ee(e, t, n, a, l, r) {
  return lm(P(e, t, n, a, l, r, !0));
}
function Sb(e, t, n, a, l) {
  return lm(m(e, t, n, a, l, !0));
}
function ps(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function fa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const lo = "__vInternal",
  rm = ({ key: e }) => (e != null ? e : null),
  vi = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? lt(e) || Ge(e) || Ce(e)
        ? { i: jt, r: e, k: t, f: !!n }
        : e
      : null;
function P(
  e,
  t = null,
  n = null,
  a = 0,
  l = null,
  r = e === xe ? 0 : 1,
  i = !1,
  o = !1
) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && rm(t),
    ref: t && vi(t),
    scopeId: Qi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    o
      ? (Pu(s, n), r & 128 && e.normalize(s))
      : n && (s.shapeFlag |= lt(n) ? 8 : 16),
    vr > 0 &&
      !i &&
      tn &&
      (s.patchFlag > 0 || r & 6) &&
      s.patchFlag !== 32 &&
      tn.push(s),
    s
  );
}
const m = Cb;
function Cb(e, t = null, n = null, a = 0, l = null, r = !1) {
  if (((!e || e === qv) && (e = ln), ps(e))) {
    const o = $n(e, t, !0);
    return (
      n && Pu(o, n),
      vr > 0 &&
        !r &&
        tn &&
        (o.shapeFlag & 6 ? (tn[tn.indexOf(e)] = o) : tn.push(o)),
      (o.patchFlag |= -2),
      o
    );
  }
  if ((Lb(e) && (e = e.__vccOpts), t)) {
    t = kb(t);
    let { class: o, style: s } = t;
    o && !lt(o) && (t.class = Hi(o)),
      et(s) && (kv(s) && !he(s) && (s = ft({}, s)), (t.style = ul(s)));
  }
  const i = lt(e) ? 1 : Uy(e) ? 128 : yb(e) ? 64 : et(e) ? 4 : Ce(e) ? 2 : 0;
  return P(e, t, n, a, l, i, r, !0);
}
function kb(e) {
  return e ? (kv(e) || lo in e ? ft({}, e) : e) : null;
}
function $n(e, t, n = !1) {
  const { props: a, ref: l, patchFlag: r, children: i } = e,
    o = t ? ue(a || {}, t) : a;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: o,
    key: o && rm(o),
    ref:
      t && t.ref
        ? n && l
          ? he(l)
            ? l.concat(vi(t))
            : [l, vi(t)]
          : vi(t)
        : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== xe ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $n(e.ssContent),
    ssFallback: e.ssFallback && $n(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Je(e = " ", t = 0) {
  return m(Iu, null, e, t);
}
function zt(e = "", t = !1) {
  return t ? (Ae(), Sb(ln, null, e)) : m(ln, null, e);
}
function vn(e) {
  return e == null || typeof e == "boolean"
    ? m(ln)
    : he(e)
    ? m(xe, null, e.slice())
    : typeof e == "object"
    ? qn(e)
    : m(Iu, null, String(e));
}
function qn(e) {
  return e.el === null || e.memo ? e : $n(e);
}
function Pu(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (he(t)) n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Pu(e, l()), l._c && (l._d = !0));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !(lo in t)
        ? (t._ctx = jt)
        : l === 3 &&
          jt &&
          (jt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Ce(t)
      ? ((t = { default: t, _ctx: jt }), (n = 32))
      : ((t = String(t)), a & 64 ? ((n = 16), (t = [Je(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ue(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Hi([t.class, a.class]));
      else if (l === "style") t.style = ul([t.style, a.style]);
      else if (Wi(l)) {
        const r = t[l],
          i = a[l];
        i &&
          r !== i &&
          !(he(r) && r.includes(i)) &&
          (t[l] = r ? [].concat(r, i) : i);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function fn(e, t, n, a = null) {
  Ht(e, t, 7, [n, a]);
}
const Ab = am();
let Eb = 0;
function Vb(e, t, n) {
  const a = e.type,
    l = (t ? t.appContext : e.appContext) || Ab,
    r = {
      uid: Eb++,
      vnode: e,
      type: a,
      parent: t,
      appContext: l,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new vv(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(l.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Qv(a, l),
      emitsOptions: Fv(a, l),
      emit: null,
      emitted: null,
      propsDefaults: ze,
      inheritAttrs: a.inheritAttrs,
      ctx: ze,
      data: ze,
      props: ze,
      attrs: ze,
      slots: ze,
      refs: ze,
      setupState: ze,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Fy.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let dt = null;
const Ir = () => dt || jt,
  cl = (e) => {
    (dt = e), e.scope.on();
  },
  Ca = () => {
    dt && dt.scope.off(), (dt = null);
  };
function im(e) {
  return e.vnode.shapeFlag & 4;
}
let mr = !1;
function $b(e, t = !1) {
  mr = t;
  const { props: n, children: a } = e.vnode,
    l = im(e);
  sb(e, n, l, t), db(e, a);
  const r = l ? Ib(e, t) : void 0;
  return (mr = !1), r;
}
function Ib(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Av(new Proxy(e.ctx, nb)));
  const { setup: a } = n;
  if (a) {
    const l = (e.setupContext = a.length > 1 ? Ob(e) : null);
    cl(e), Ia();
    const r = En(a, e, 0, [e.props, l]);
    if ((Pa(), Ca(), cv(r))) {
      if ((r.then(Ca, Ca), t))
        return r
          .then((i) => {
            ad(e, i, t);
          })
          .catch((i) => {
            Xi(i, e, 0);
          });
      e.asyncDep = r;
    } else ad(e, r, t);
  } else om(e, t);
}
function ad(e, t, n) {
  Ce(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : et(t) && (e.setupState = Pv(t)),
    om(e, n);
}
let ld;
function om(e, t, n) {
  const a = e.type;
  if (!e.render) {
    if (!t && ld && !a.render) {
      const l = a.template;
      if (l) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config,
          { delimiters: o, compilerOptions: s } = a,
          c = ft(ft({ isCustomElement: r, delimiters: o }, i), s);
        a.render = ld(l, c);
      }
    }
    e.render = a.render || an;
  }
  cl(e), Ia(), ab(e), Pa(), Ca();
}
function Pb(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Tt(e, "get", "$attrs"), t[n];
    },
  });
}
function Ob(e) {
  const t = (a) => {
    e.exposed = a || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Pb(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ro(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Pv(Av(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Si) return Si[n](e);
        },
      }))
    );
}
const Tb = /(?:^|[-_])(\w)/g,
  Rb = (e) => e.replace(Tb, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function sm(e, t = !0) {
  return Ce(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function um(e, t, n = !1) {
  let a = sm(t);
  if (!a && t.__file) {
    const l = t.__file.match(/([^/\\]+)\.\w+$/);
    l && (a = l[1]);
  }
  if (!a && e && e.parent) {
    const l = (r) => {
      for (const i in r) if (r[i] === t) return i;
    };
    a =
      l(e.components || e.parent.type.components) || l(e.appContext.components);
  }
  return a ? Rb(a) : n ? "App" : "Anonymous";
}
function Lb(e) {
  return Ce(e) && "__vccOpts" in e;
}
const b = (e, t) => Vy(e, t, mr);
function Yt(e, t, n) {
  const a = arguments.length;
  return a === 2
    ? et(t) && !he(t)
      ? ps(t)
        ? m(e, null, [t])
        : m(e, t)
      : m(e, null, t)
    : (a > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : a === 3 && ps(n) && (n = [n]),
      m(e, t, n));
}
const Bb = "3.2.37",
  Nb = "http://www.w3.org/2000/svg",
  va = typeof document != "undefined" ? document : null,
  rd = va && va.createElement("template"),
  Mb = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, a) => {
      const l = t
        ? va.createElementNS(Nb, e)
        : va.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          a &&
          a.multiple != null &&
          l.setAttribute("multiple", a.multiple),
        l
      );
    },
    createText: (e) => va.createTextNode(e),
    createComment: (e) => va.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => va.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, a, l, r) {
      const i = n ? n.previousSibling : t.lastChild;
      if (l && (l === r || l.nextSibling))
        for (
          ;
          t.insertBefore(l.cloneNode(!0), n),
            !(l === r || !(l = l.nextSibling));

        );
      else {
        rd.innerHTML = a ? `<svg>${e}</svg>` : e;
        const o = rd.content;
        if (a) {
          const s = o.firstChild;
          for (; s.firstChild; ) o.appendChild(s.firstChild);
          o.removeChild(s);
        }
        t.insertBefore(o, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Fb(e, t, n) {
  const a = e._vtc;
  a && (t = (t ? [t, ...a] : [...a]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Db(e, t, n) {
  const a = e.style,
    l = lt(n);
  if (n && !l) {
    for (const r in n) ys(a, r, n[r]);
    if (t && !lt(t)) for (const r in t) n[r] == null && ys(a, r, "");
  } else {
    const r = a.display;
    l ? t !== n && (a.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (a.display = r);
  }
}
const id = /\s*!important$/;
function ys(e, t, n) {
  if (he(n)) n.forEach((a) => ys(e, t, a));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const a = zb(e, t);
    id.test(n)
      ? e.setProperty(bl(a), n.replace(id, ""), "important")
      : (e[a] = n);
  }
}
const od = ["Webkit", "Moz", "ms"],
  Bo = {};
function zb(e, t) {
  const n = Bo[t];
  if (n) return n;
  let a = Wt(t);
  if (a !== "filter" && a in e) return (Bo[t] = a);
  a = Ln(a);
  for (let l = 0; l < od.length; l++) {
    const r = od[l] + a;
    if (r in e) return (Bo[t] = r);
  }
  return t;
}
const sd = "http://www.w3.org/1999/xlink";
function jb(e, t, n, a, l) {
  if (a && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(sd, t.slice(6, t.length))
      : e.setAttributeNS(sd, t, n);
  else {
    const r = Fp(t);
    n == null || (r && !sv(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function Hb(e, t, n, a, l, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    a && i(a, l, r), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const s = n == null ? "" : n;
    (e.value !== s || e.tagName === "OPTION") && (e.value = s),
      n == null && e.removeAttribute(t);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean"
      ? (n = sv(n))
      : n == null && s === "string"
      ? ((n = ""), (o = !0))
      : s === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(t);
}
const [cm, Ub] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window != "undefined") {
    Date.now() > document.createEvent("Event").timeStamp &&
      (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let bs = 0;
const Wb = Promise.resolve(),
  Yb = () => {
    bs = 0;
  },
  Gb = () => bs || (Wb.then(Yb), (bs = cm()));
function ma(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function Kb(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
function qb(e, t, n, a, l = null) {
  const r = e._vei || (e._vei = {}),
    i = r[t];
  if (a && i) i.value = a;
  else {
    const [o, s] = Xb(t);
    if (a) {
      const c = (r[t] = Jb(a, l));
      ma(e, o, c, s);
    } else i && (Kb(e, o, i, s), (r[t] = void 0));
  }
}
const ud = /(?:Once|Passive|Capture)$/;
function Xb(e) {
  let t;
  if (ud.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(ud)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [bl(e.slice(2)), t];
}
function Jb(e, t) {
  const n = (a) => {
    const l = a.timeStamp || cm();
    (Ub || l >= n.attached - 1) && Ht(Zb(a, n.value), t, 5, [a]);
  };
  return (n.value = e), (n.attached = Gb()), n;
}
function Zb(e, t) {
  if (he(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((a) => (l) => !l._stopped && a && a(l))
    );
  } else return t;
}
const cd = /^on[a-z]/,
  Qb = (e, t, n, a, l = !1, r, i, o, s) => {
    t === "class"
      ? Fb(e, a, l)
      : t === "style"
      ? Db(e, n, a)
      : Wi(t)
      ? cu(t) || qb(e, t, n, a, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : e0(e, t, a, l)
        )
      ? Hb(e, t, a, r, i, o, s)
      : (t === "true-value"
          ? (e._trueValue = a)
          : t === "false-value" && (e._falseValue = a),
        jb(e, t, a, l));
  };
function e0(e, t, n, a) {
  return a
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && cd.test(t) && Ce(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (cd.test(t) && lt(n))
    ? !1
    : t in e;
}
function t0(e) {
  const t = Ir();
  if (!t) return;
  const n = () => _s(t.subTree, e(t.proxy));
  Yy(n),
    _t(() => {
      const a = new MutationObserver(n);
      a.observe(t.subTree.el.parentNode, { childList: !0 }),
        ku(() => a.disconnect());
    });
}
function _s(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          _s(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) dd(e.el, t);
  else if (e.type === xe) e.children.forEach((n) => _s(n, t));
  else if (e.type === fi) {
    let { el: n, anchor: a } = e;
    for (; n && (dd(n, t), n !== a); ) n = n.nextSibling;
  }
}
function dd(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const a in t) n.setProperty(`--${a}`, t[a]);
  }
}
const Un = "transition",
  Ll = "animation",
  pn = (e, { slots: t }) => Yt(jv, fm(e), t);
pn.displayName = "Transition";
const dm = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  n0 = (pn.props = ft({}, jv.props, dm)),
  sa = (e, t = []) => {
    he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  fd = (e) => (e ? (he(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function fm(e) {
  const t = {};
  for (const I in e) I in dm || (t[I] = e[I]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: a,
      duration: l,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: o = `${n}-enter-to`,
      appearFromClass: s = r,
      appearActiveClass: c = i,
      appearToClass: u = o,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    h = a0(l),
    p = h && h[0],
    w = h && h[1],
    {
      onBeforeEnter: g,
      onEnter: _,
      onEnterCancelled: y,
      onLeave: k,
      onLeaveCancelled: S,
      onBeforeAppear: A = g,
      onAppear: x = _,
      onAppearCancelled: C = y,
    } = t,
    V = (I, L, D) => {
      Kn(I, L ? u : o), Kn(I, L ? c : i), D && D();
    },
    $ = (I, L) => {
      (I._isLeaving = !1), Kn(I, d), Kn(I, v), Kn(I, f), L && L();
    },
    R = (I) => (L, D) => {
      const Y = I ? x : _,
        z = () => V(L, I, D);
      sa(Y, [L, z]),
        vd(() => {
          Kn(L, I ? s : r), kn(L, I ? u : o), fd(Y) || md(L, a, p, z);
        });
    };
  return ft(t, {
    onBeforeEnter(I) {
      sa(g, [I]), kn(I, r), kn(I, i);
    },
    onBeforeAppear(I) {
      sa(A, [I]), kn(I, s), kn(I, c);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(I, L) {
      I._isLeaving = !0;
      const D = () => $(I, L);
      kn(I, d),
        mm(),
        kn(I, f),
        vd(() => {
          !I._isLeaving || (Kn(I, d), kn(I, v), fd(k) || md(I, a, w, D));
        }),
        sa(k, [I, D]);
    },
    onEnterCancelled(I) {
      V(I, !1), sa(y, [I]);
    },
    onAppearCancelled(I) {
      V(I, !0), sa(C, [I]);
    },
    onLeaveCancelled(I) {
      $(I), sa(S, [I]);
    },
  });
}
function a0(e) {
  if (e == null) return null;
  if (et(e)) return [No(e.enter), No(e.leave)];
  {
    const t = No(e);
    return [t, t];
  }
}
function No(e) {
  return or(e);
}
function kn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Kn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function vd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let l0 = 0;
function md(e, t, n, a) {
  const l = (e._endId = ++l0),
    r = () => {
      l === e._endId && a();
    };
  if (n) return setTimeout(r, n);
  const { type: i, timeout: o, propCount: s } = vm(e, t);
  if (!i) return a();
  const c = i + "end";
  let u = 0;
  const d = () => {
      e.removeEventListener(c, f), r();
    },
    f = (v) => {
      v.target === e && ++u >= s && d();
    };
  setTimeout(() => {
    u < s && d();
  }, o + 1),
    e.addEventListener(c, f);
}
function vm(e, t) {
  const n = window.getComputedStyle(e),
    a = (h) => (n[h] || "").split(", "),
    l = a(Un + "Delay"),
    r = a(Un + "Duration"),
    i = hd(l, r),
    o = a(Ll + "Delay"),
    s = a(Ll + "Duration"),
    c = hd(o, s);
  let u = null,
    d = 0,
    f = 0;
  t === Un
    ? i > 0 && ((u = Un), (d = i), (f = r.length))
    : t === Ll
    ? c > 0 && ((u = Ll), (d = c), (f = s.length))
    : ((d = Math.max(i, c)),
      (u = d > 0 ? (i > c ? Un : Ll) : null),
      (f = u ? (u === Un ? r.length : s.length) : 0));
  const v = u === Un && /\b(transform|all)(,|$)/.test(n[Un + "Property"]);
  return { type: u, timeout: d, propCount: f, hasTransform: v };
}
function hd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => gd(n) + gd(e[a])));
}
function gd(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function mm() {
  return document.body.offsetHeight;
}
const hm = new WeakMap(),
  gm = new WeakMap(),
  r0 = {
    name: "TransitionGroup",
    props: ft({}, n0, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ir(),
        a = zv();
      let l, r;
      return (
        Kv(() => {
          if (!l.length) return;
          const i = e.moveClass || `${e.name || "v"}-move`;
          if (!c0(l[0].el, n.vnode.el, i)) return;
          l.forEach(o0), l.forEach(s0);
          const o = l.filter(u0);
          mm(),
            o.forEach((s) => {
              const c = s.el,
                u = c.style;
              kn(c, i),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const d = (c._moveCb = (f) => {
                (f && f.target !== c) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (c.removeEventListener("transitionend", d),
                    (c._moveCb = null),
                    Kn(c, i)));
              });
              c.addEventListener("transitionend", d);
            });
        }),
        () => {
          const i = Ve(e),
            o = fm(i);
          let s = i.tag || xe;
          (l = r), (r = t.default ? Cu(t.default()) : []);
          for (let c = 0; c < r.length; c++) {
            const u = r[c];
            u.key != null && fr(u, dr(u, o, a, n));
          }
          if (l)
            for (let c = 0; c < l.length; c++) {
              const u = l[c];
              fr(u, dr(u, o, a, n)), hm.set(u, u.el.getBoundingClientRect());
            }
          return m(s, null, r);
        }
      );
    },
  },
  i0 = r0;
function o0(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function s0(e) {
  gm.set(e, e.el.getBoundingClientRect());
}
function u0(e) {
  const t = hm.get(e),
    n = gm.get(e),
    a = t.left - n.left,
    l = t.top - n.top;
  if (a || l) {
    const r = e.el.style;
    return (
      (r.transform = r.webkitTransform = `translate(${a}px,${l}px)`),
      (r.transitionDuration = "0s"),
      e
    );
  }
}
function c0(e, t, n) {
  const a = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((i) => {
      i.split(/\s+/).forEach((o) => o && a.classList.remove(o));
    }),
    n.split(/\s+/).forEach((i) => i && a.classList.add(i)),
    (a.style.display = "none");
  const l = t.nodeType === 1 ? t : t.parentNode;
  l.appendChild(a);
  const { hasTransform: r } = vm(a);
  return l.removeChild(a), r;
}
const ki = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return he(t) ? (n) => ci(t, n) : t;
};
function d0(e) {
  e.target.composing = !0;
}
function pd(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const f0 = {
    created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
      e._assign = ki(l);
      const r = a || (l.props && l.props.type === "number");
      ma(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let o = e.value;
        n && (o = o.trim()), r && (o = or(o)), e._assign(o);
      }),
        n &&
          ma(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (ma(e, "compositionstart", d0),
          ma(e, "compositionend", pd),
          ma(e, "change", pd));
    },
    mounted(e, { value: t }) {
      e.value = t == null ? "" : t;
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: a, number: l } },
      r
    ) {
      if (
        ((e._assign = ki(r)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (a && e.value.trim() === t) ||
              ((l || e.type === "number") && or(e.value) === t))))
      )
        return;
      const i = t == null ? "" : t;
      e.value !== i && (e.value = i);
    },
  },
  ua = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, a) {
      const l = Yi(t);
      ma(e, "change", () => {
        const r = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? or(Ai(i)) : Ai(i)));
        e._assign(e.multiple ? (l ? new Set(r) : r) : r[0]);
      }),
        (e._assign = ki(a));
    },
    mounted(e, { value: t }) {
      yd(e, t);
    },
    beforeUpdate(e, t, n) {
      e._assign = ki(n);
    },
    updated(e, { value: t }) {
      yd(e, t);
    },
  };
function yd(e, t) {
  const n = e.multiple;
  if (!(n && !he(t) && !Yi(t))) {
    for (let a = 0, l = e.options.length; a < l; a++) {
      const r = e.options[a],
        i = Ai(r);
      if (n) he(t) ? (r.selected = Up(t, i) > -1) : (r.selected = t.has(i));
      else if (Ui(Ai(r), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ai(e) {
  return "_value" in e ? e._value : e.value;
}
const _n = {
  beforeMount(e, { value: t }, { transition: n }) {
    (e._vod = e.style.display === "none" ? "" : e.style.display),
      n && t ? n.beforeEnter(e) : Bl(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: a }) {
    !t != !n &&
      (a
        ? t
          ? (a.beforeEnter(e), Bl(e, !0), a.enter(e))
          : a.leave(e, () => {
              Bl(e, !1);
            })
        : Bl(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Bl(e, t);
  },
};
function Bl(e, t) {
  e.style.display = t ? e._vod : "none";
}
const v0 = ft({ patchProp: Qb }, Mb);
let bd;
function m0() {
  return bd || (bd = hb(v0));
}
const h0 = (...e) => {
  const t = m0().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (a) => {
      const l = g0(a);
      if (!l) return;
      const r = t._component;
      !Ce(r) && !r.render && !r.template && (r.template = l.innerHTML),
        (l.innerHTML = "");
      const i = n(l, !1, l instanceof SVGElement);
      return (
        l instanceof Element &&
          (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function g0(e) {
  return lt(e) ? document.querySelector(e) : e;
}
var Ou = { exports: {} },
  pm = function (t, n) {
    return function () {
      for (var l = new Array(arguments.length), r = 0; r < l.length; r++)
        l[r] = arguments[r];
      return t.apply(n, l);
    };
  },
  p0 = pm,
  Tu = Object.prototype.toString,
  Ru = (function (e) {
    return function (t) {
      var n = Tu.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function Ta(e) {
  return (
    (e = e.toLowerCase()),
    function (n) {
      return Ru(n) === e;
    }
  );
}
function Lu(e) {
  return Array.isArray(e);
}
function Ei(e) {
  return typeof e == "undefined";
}
function y0(e) {
  return (
    e !== null &&
    !Ei(e) &&
    e.constructor !== null &&
    !Ei(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
var ym = Ta("ArrayBuffer");
function b0(e) {
  var t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ym(e.buffer)),
    t
  );
}
function _0(e) {
  return typeof e == "string";
}
function x0(e) {
  return typeof e == "number";
}
function bm(e) {
  return e !== null && typeof e == "object";
}
function mi(e) {
  if (Ru(e) !== "object") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var w0 = Ta("Date"),
  S0 = Ta("File"),
  C0 = Ta("Blob"),
  k0 = Ta("FileList");
function Bu(e) {
  return Tu.call(e) === "[object Function]";
}
function A0(e) {
  return bm(e) && Bu(e.pipe);
}
function E0(e) {
  var t = "[object FormData]";
  return (
    e &&
    ((typeof FormData == "function" && e instanceof FormData) ||
      Tu.call(e) === t ||
      (Bu(e.toString) && e.toString() === t))
  );
}
var V0 = Ta("URLSearchParams");
function $0(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function I0() {
  return typeof navigator != "undefined" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window != "undefined" && typeof document != "undefined";
}
function Nu(e, t) {
  if (!(e === null || typeof e == "undefined"))
    if ((typeof e != "object" && (e = [e]), Lu(e)))
      for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
    else
      for (var l in e)
        Object.prototype.hasOwnProperty.call(e, l) && t.call(null, e[l], l, e);
}
function xs() {
  var e = {};
  function t(l, r) {
    mi(e[r]) && mi(l)
      ? (e[r] = xs(e[r], l))
      : mi(l)
      ? (e[r] = xs({}, l))
      : Lu(l)
      ? (e[r] = l.slice())
      : (e[r] = l);
  }
  for (var n = 0, a = arguments.length; n < a; n++) Nu(arguments[n], t);
  return e;
}
function P0(e, t, n) {
  return (
    Nu(t, function (l, r) {
      n && typeof l == "function" ? (e[r] = p0(l, n)) : (e[r] = l);
    }),
    e
  );
}
function O0(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function T0(e, t, n, a) {
  (e.prototype = Object.create(t.prototype, a)),
    (e.prototype.constructor = e),
    n && Object.assign(e.prototype, n);
}
function R0(e, t, n) {
  var a,
    l,
    r,
    i = {};
  t = t || {};
  do {
    for (a = Object.getOwnPropertyNames(e), l = a.length; l-- > 0; )
      (r = a[l]), i[r] || ((t[r] = e[r]), (i[r] = !0));
    e = Object.getPrototypeOf(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}
function L0(e, t, n) {
  (e = String(e)),
    (n === void 0 || n > e.length) && (n = e.length),
    (n -= t.length);
  var a = e.indexOf(t, n);
  return a !== -1 && a === n;
}
function B0(e) {
  if (!e) return null;
  var t = e.length;
  if (Ei(t)) return null;
  for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
  return n;
}
var N0 = (function (e) {
    return function (t) {
      return e && t instanceof e;
    };
  })(typeof Uint8Array != "undefined" && Object.getPrototypeOf(Uint8Array)),
  mt = {
    isArray: Lu,
    isArrayBuffer: ym,
    isBuffer: y0,
    isFormData: E0,
    isArrayBufferView: b0,
    isString: _0,
    isNumber: x0,
    isObject: bm,
    isPlainObject: mi,
    isUndefined: Ei,
    isDate: w0,
    isFile: S0,
    isBlob: C0,
    isFunction: Bu,
    isStream: A0,
    isURLSearchParams: V0,
    isStandardBrowserEnv: I0,
    forEach: Nu,
    merge: xs,
    extend: P0,
    trim: $0,
    stripBOM: O0,
    inherits: T0,
    toFlatObject: R0,
    kindOf: Ru,
    kindOfTest: Ta,
    endsWith: L0,
    toArray: B0,
    isTypedArray: N0,
    isFileList: k0,
  },
  Wa = mt;
function _d(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var _m = function (t, n, a) {
    if (!n) return t;
    var l;
    if (a) l = a(n);
    else if (Wa.isURLSearchParams(n)) l = n.toString();
    else {
      var r = [];
      Wa.forEach(n, function (s, c) {
        s === null ||
          typeof s == "undefined" ||
          (Wa.isArray(s) ? (c = c + "[]") : (s = [s]),
          Wa.forEach(s, function (d) {
            Wa.isDate(d)
              ? (d = d.toISOString())
              : Wa.isObject(d) && (d = JSON.stringify(d)),
              r.push(_d(c) + "=" + _d(d));
          }));
      }),
        (l = r.join("&"));
    }
    if (l) {
      var i = t.indexOf("#");
      i !== -1 && (t = t.slice(0, i)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + l);
    }
    return t;
  },
  M0 = mt;
function io() {
  this.handlers = [];
}
io.prototype.use = function (t, n, a) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
io.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
io.prototype.forEach = function (t) {
  M0.forEach(this.handlers, function (a) {
    a !== null && t(a);
  });
};
var F0 = io,
  D0 = mt,
  z0 = function (t, n) {
    D0.forEach(t, function (l, r) {
      r !== n &&
        r.toUpperCase() === n.toUpperCase() &&
        ((t[n] = l), delete t[r]);
    });
  },
  xm = mt;
function dl(e, t, n, a, l) {
  Error.call(this),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    a && (this.request = a),
    l && (this.response = l);
}
xm.inherits(dl, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
var wm = dl.prototype,
  Sm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
].forEach(function (e) {
  Sm[e] = { value: e };
});
Object.defineProperties(dl, Sm);
Object.defineProperty(wm, "isAxiosError", { value: !0 });
dl.from = function (e, t, n, a, l, r) {
  var i = Object.create(wm);
  return (
    xm.toFlatObject(e, i, function (s) {
      return s !== Error.prototype;
    }),
    dl.call(i, e.message, t, n, a, l),
    (i.name = e.name),
    r && Object.assign(i, r),
    i
  );
};
var _l = dl,
  Cm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Jt = mt;
function j0(e, t) {
  t = t || new FormData();
  var n = [];
  function a(r) {
    return r === null
      ? ""
      : Jt.isDate(r)
      ? r.toISOString()
      : Jt.isArrayBuffer(r) || Jt.isTypedArray(r)
      ? typeof Blob == "function"
        ? new Blob([r])
        : Buffer.from(r)
      : r;
  }
  function l(r, i) {
    if (Jt.isPlainObject(r) || Jt.isArray(r)) {
      if (n.indexOf(r) !== -1)
        throw Error("Circular reference detected in " + i);
      n.push(r),
        Jt.forEach(r, function (s, c) {
          if (!Jt.isUndefined(s)) {
            var u = i ? i + "." + c : c,
              d;
            if (s && !i && typeof s == "object") {
              if (Jt.endsWith(c, "{}")) s = JSON.stringify(s);
              else if (Jt.endsWith(c, "[]") && (d = Jt.toArray(s))) {
                d.forEach(function (f) {
                  !Jt.isUndefined(f) && t.append(u, a(f));
                });
                return;
              }
            }
            l(s, u);
          }
        }),
        n.pop();
    } else t.append(i, a(r));
  }
  return l(e), t;
}
var km = j0,
  Mo = _l,
  H0 = function (t, n, a) {
    var l = a.config.validateStatus;
    !a.status || !l || l(a.status)
      ? t(a)
      : n(
          new Mo(
            "Request failed with status code " + a.status,
            [Mo.ERR_BAD_REQUEST, Mo.ERR_BAD_RESPONSE][
              Math.floor(a.status / 100) - 4
            ],
            a.config,
            a.request,
            a
          )
        );
  },
  Kr = mt,
  U0 = Kr.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (n, a, l, r, i, o) {
            var s = [];
            s.push(n + "=" + encodeURIComponent(a)),
              Kr.isNumber(l) && s.push("expires=" + new Date(l).toGMTString()),
              Kr.isString(r) && s.push("path=" + r),
              Kr.isString(i) && s.push("domain=" + i),
              o === !0 && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (n) {
            var a = document.cookie.match(
              new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
            );
            return a ? decodeURIComponent(a[3]) : null;
          },
          remove: function (n) {
            this.write(n, "", Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })(),
  W0 = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  },
  Y0 = function (t, n) {
    return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
  },
  G0 = W0,
  K0 = Y0,
  Am = function (t, n) {
    return t && !G0(n) ? K0(t, n) : n;
  },
  Fo = mt,
  q0 = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ],
  X0 = function (t) {
    var n = {},
      a,
      l,
      r;
    return (
      t &&
        Fo.forEach(
          t.split(`
`),
          function (o) {
            if (
              ((r = o.indexOf(":")),
              (a = Fo.trim(o.substr(0, r)).toLowerCase()),
              (l = Fo.trim(o.substr(r + 1))),
              a)
            ) {
              if (n[a] && q0.indexOf(a) >= 0) return;
              a === "set-cookie"
                ? (n[a] = (n[a] ? n[a] : []).concat([l]))
                : (n[a] = n[a] ? n[a] + ", " + l : l);
            }
          }
        ),
      n
    );
  },
  xd = mt,
  J0 = xd.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a"),
          a;
        function l(r) {
          var i = r;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (a = l(window.location.href)),
          function (i) {
            var o = xd.isString(i) ? l(i) : i;
            return o.protocol === a.protocol && o.host === a.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  ws = _l,
  Z0 = mt;
function Em(e) {
  ws.call(this, e == null ? "canceled" : e, ws.ERR_CANCELED),
    (this.name = "CanceledError");
}
Z0.inherits(Em, ws, { __CANCEL__: !0 });
var oo = Em,
  Q0 = function (t) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return (n && n[1]) || "";
  },
  Nl = mt,
  e1 = H0,
  t1 = U0,
  n1 = _m,
  a1 = Am,
  l1 = X0,
  r1 = J0,
  i1 = Cm,
  Sn = _l,
  o1 = oo,
  s1 = Q0,
  wd = function (t) {
    return new Promise(function (a, l) {
      var r = t.data,
        i = t.headers,
        o = t.responseType,
        s;
      function c() {
        t.cancelToken && t.cancelToken.unsubscribe(s),
          t.signal && t.signal.removeEventListener("abort", s);
      }
      Nl.isFormData(r) && Nl.isStandardBrowserEnv() && delete i["Content-Type"];
      var u = new XMLHttpRequest();
      if (t.auth) {
        var d = t.auth.username || "",
          f = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : "";
        i.Authorization = "Basic " + btoa(d + ":" + f);
      }
      var v = a1(t.baseURL, t.url);
      u.open(t.method.toUpperCase(), n1(v, t.params, t.paramsSerializer), !0),
        (u.timeout = t.timeout);
      function h() {
        if (u) {
          var g =
              "getAllResponseHeaders" in u
                ? l1(u.getAllResponseHeaders())
                : null,
            _ =
              !o || o === "text" || o === "json" ? u.responseText : u.response,
            y = {
              data: _,
              status: u.status,
              statusText: u.statusText,
              headers: g,
              config: t,
              request: u,
            };
          e1(
            function (S) {
              a(S), c();
            },
            function (S) {
              l(S), c();
            },
            y
          ),
            (u = null);
        }
      }
      if (
        ("onloadend" in u
          ? (u.onloadend = h)
          : (u.onreadystatechange = function () {
              !u ||
                u.readyState !== 4 ||
                (u.status === 0 &&
                  !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                setTimeout(h);
            }),
        (u.onabort = function () {
          !u ||
            (l(new Sn("Request aborted", Sn.ECONNABORTED, t, u)), (u = null));
        }),
        (u.onerror = function () {
          l(new Sn("Network Error", Sn.ERR_NETWORK, t, u, u)), (u = null);
        }),
        (u.ontimeout = function () {
          var _ = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded",
            y = t.transitional || i1;
          t.timeoutErrorMessage && (_ = t.timeoutErrorMessage),
            l(
              new Sn(
                _,
                y.clarifyTimeoutError ? Sn.ETIMEDOUT : Sn.ECONNABORTED,
                t,
                u
              )
            ),
            (u = null);
        }),
        Nl.isStandardBrowserEnv())
      ) {
        var p =
          (t.withCredentials || r1(v)) && t.xsrfCookieName
            ? t1.read(t.xsrfCookieName)
            : void 0;
        p && (i[t.xsrfHeaderName] = p);
      }
      "setRequestHeader" in u &&
        Nl.forEach(i, function (_, y) {
          typeof r == "undefined" && y.toLowerCase() === "content-type"
            ? delete i[y]
            : u.setRequestHeader(y, _);
        }),
        Nl.isUndefined(t.withCredentials) ||
          (u.withCredentials = !!t.withCredentials),
        o && o !== "json" && (u.responseType = t.responseType),
        typeof t.onDownloadProgress == "function" &&
          u.addEventListener("progress", t.onDownloadProgress),
        typeof t.onUploadProgress == "function" &&
          u.upload &&
          u.upload.addEventListener("progress", t.onUploadProgress),
        (t.cancelToken || t.signal) &&
          ((s = function (g) {
            !u ||
              (l(!g || (g && g.type) ? new o1() : g), u.abort(), (u = null));
          }),
          t.cancelToken && t.cancelToken.subscribe(s),
          t.signal &&
            (t.signal.aborted ? s() : t.signal.addEventListener("abort", s))),
        r || (r = null);
      var w = s1(v);
      if (w && ["http", "https", "file"].indexOf(w) === -1) {
        l(new Sn("Unsupported protocol " + w + ":", Sn.ERR_BAD_REQUEST, t));
        return;
      }
      u.send(r);
    });
  },
  u1 = null,
  ut = mt,
  Sd = z0,
  Cd = _l,
  c1 = Cm,
  d1 = km,
  f1 = { "Content-Type": "application/x-www-form-urlencoded" };
function kd(e, t) {
  !ut.isUndefined(e) &&
    ut.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function v1() {
  var e;
  return (
    (typeof XMLHttpRequest != "undefined" ||
      (typeof process != "undefined" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = wd),
    e
  );
}
function m1(e, t, n) {
  if (ut.isString(e))
    try {
      return (t || JSON.parse)(e), ut.trim(e);
    } catch (a) {
      if (a.name !== "SyntaxError") throw a;
    }
  return (n || JSON.stringify)(e);
}
var so = {
  transitional: c1,
  adapter: v1(),
  transformRequest: [
    function (t, n) {
      if (
        (Sd(n, "Accept"),
        Sd(n, "Content-Type"),
        ut.isFormData(t) ||
          ut.isArrayBuffer(t) ||
          ut.isBuffer(t) ||
          ut.isStream(t) ||
          ut.isFile(t) ||
          ut.isBlob(t))
      )
        return t;
      if (ut.isArrayBufferView(t)) return t.buffer;
      if (ut.isURLSearchParams(t))
        return (
          kd(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()
        );
      var a = ut.isObject(t),
        l = n && n["Content-Type"],
        r;
      if ((r = ut.isFileList(t)) || (a && l === "multipart/form-data")) {
        var i = this.env && this.env.FormData;
        return d1(r ? { "files[]": t } : t, i && new i());
      } else if (a || l === "application/json")
        return kd(n, "application/json"), m1(t);
      return t;
    },
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional || so.transitional,
        a = n && n.silentJSONParsing,
        l = n && n.forcedJSONParsing,
        r = !a && this.responseType === "json";
      if (r || (l && ut.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (i) {
          if (r)
            throw i.name === "SyntaxError"
              ? Cd.from(i, Cd.ERR_BAD_RESPONSE, this, null, this.response)
              : i;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: u1 },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
ut.forEach(["delete", "get", "head"], function (t) {
  so.headers[t] = {};
});
ut.forEach(["post", "put", "patch"], function (t) {
  so.headers[t] = ut.merge(f1);
});
var Mu = so,
  h1 = mt,
  g1 = Mu,
  p1 = function (t, n, a) {
    var l = this || g1;
    return (
      h1.forEach(a, function (i) {
        t = i.call(l, t, n);
      }),
      t
    );
  },
  Vm = function (t) {
    return !!(t && t.__CANCEL__);
  },
  Ad = mt,
  Do = p1,
  y1 = Vm,
  b1 = Mu,
  _1 = oo;
function zo(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new _1();
}
var x1 = function (t) {
    zo(t),
      (t.headers = t.headers || {}),
      (t.data = Do.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = Ad.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      Ad.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (l) {
          delete t.headers[l];
        }
      );
    var n = t.adapter || b1.adapter;
    return n(t).then(
      function (l) {
        return (
          zo(t),
          (l.data = Do.call(t, l.data, l.headers, t.transformResponse)),
          l
        );
      },
      function (l) {
        return (
          y1(l) ||
            (zo(t),
            l &&
              l.response &&
              (l.response.data = Do.call(
                t,
                l.response.data,
                l.response.headers,
                t.transformResponse
              ))),
          Promise.reject(l)
        );
      }
    );
  },
  Vt = mt,
  $m = function (t, n) {
    n = n || {};
    var a = {};
    function l(u, d) {
      return Vt.isPlainObject(u) && Vt.isPlainObject(d)
        ? Vt.merge(u, d)
        : Vt.isPlainObject(d)
        ? Vt.merge({}, d)
        : Vt.isArray(d)
        ? d.slice()
        : d;
    }
    function r(u) {
      if (Vt.isUndefined(n[u])) {
        if (!Vt.isUndefined(t[u])) return l(void 0, t[u]);
      } else return l(t[u], n[u]);
    }
    function i(u) {
      if (!Vt.isUndefined(n[u])) return l(void 0, n[u]);
    }
    function o(u) {
      if (Vt.isUndefined(n[u])) {
        if (!Vt.isUndefined(t[u])) return l(void 0, t[u]);
      } else return l(void 0, n[u]);
    }
    function s(u) {
      if (u in n) return l(t[u], n[u]);
      if (u in t) return l(void 0, t[u]);
    }
    var c = {
      url: i,
      method: i,
      data: i,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: s,
    };
    return (
      Vt.forEach(Object.keys(t).concat(Object.keys(n)), function (d) {
        var f = c[d] || r,
          v = f(d);
        (Vt.isUndefined(v) && f !== s) || (a[d] = v);
      }),
      a
    );
  },
  Im = { version: "0.27.2" },
  w1 = Im.version,
  Xn = _l,
  Fu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    Fu[e] = function (a) {
      return typeof a === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var Ed = {};
Fu.transitional = function (t, n, a) {
  function l(r, i) {
    return (
      "[Axios v" +
      w1 +
      "] Transitional option '" +
      r +
      "'" +
      i +
      (a ? ". " + a : "")
    );
  }
  return function (r, i, o) {
    if (t === !1)
      throw new Xn(
        l(i, " has been removed" + (n ? " in " + n : "")),
        Xn.ERR_DEPRECATED
      );
    return (
      n &&
        !Ed[i] &&
        ((Ed[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(r, i, o) : !0
    );
  };
};
function S1(e, t, n) {
  if (typeof e != "object")
    throw new Xn("options must be an object", Xn.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(e), l = a.length; l-- > 0; ) {
    var r = a[l],
      i = t[r];
    if (i) {
      var o = e[r],
        s = o === void 0 || i(o, r, e);
      if (s !== !0)
        throw new Xn("option " + r + " must be " + s, Xn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Xn("Unknown option " + r, Xn.ERR_BAD_OPTION);
  }
}
var C1 = { assertOptions: S1, validators: Fu },
  Pm = mt,
  k1 = _m,
  Vd = F0,
  $d = x1,
  uo = $m,
  A1 = Am,
  Om = C1,
  Ya = Om.validators;
function fl(e) {
  (this.defaults = e),
    (this.interceptors = { request: new Vd(), response: new Vd() });
}
fl.prototype.request = function (t, n) {
  typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
    (n = uo(this.defaults, n)),
    n.method
      ? (n.method = n.method.toLowerCase())
      : this.defaults.method
      ? (n.method = this.defaults.method.toLowerCase())
      : (n.method = "get");
  var a = n.transitional;
  a !== void 0 &&
    Om.assertOptions(
      a,
      {
        silentJSONParsing: Ya.transitional(Ya.boolean),
        forcedJSONParsing: Ya.transitional(Ya.boolean),
        clarifyTimeoutError: Ya.transitional(Ya.boolean),
      },
      !1
    );
  var l = [],
    r = !0;
  this.interceptors.request.forEach(function (v) {
    (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
      ((r = r && v.synchronous), l.unshift(v.fulfilled, v.rejected));
  });
  var i = [];
  this.interceptors.response.forEach(function (v) {
    i.push(v.fulfilled, v.rejected);
  });
  var o;
  if (!r) {
    var s = [$d, void 0];
    for (
      Array.prototype.unshift.apply(s, l),
        s = s.concat(i),
        o = Promise.resolve(n);
      s.length;

    )
      o = o.then(s.shift(), s.shift());
    return o;
  }
  for (var c = n; l.length; ) {
    var u = l.shift(),
      d = l.shift();
    try {
      c = u(c);
    } catch (f) {
      d(f);
      break;
    }
  }
  try {
    o = $d(c);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; i.length; ) o = o.then(i.shift(), i.shift());
  return o;
};
fl.prototype.getUri = function (t) {
  t = uo(this.defaults, t);
  var n = A1(t.baseURL, t.url);
  return k1(n, t.params, t.paramsSerializer);
};
Pm.forEach(["delete", "get", "head", "options"], function (t) {
  fl.prototype[t] = function (n, a) {
    return this.request(
      uo(a || {}, { method: t, url: n, data: (a || {}).data })
    );
  };
});
Pm.forEach(["post", "put", "patch"], function (t) {
  function n(a) {
    return function (r, i, o) {
      return this.request(
        uo(o || {}, {
          method: t,
          headers: a ? { "Content-Type": "multipart/form-data" } : {},
          url: r,
          data: i,
        })
      );
    };
  }
  (fl.prototype[t] = n()), (fl.prototype[t + "Form"] = n(!0));
});
var E1 = fl,
  V1 = oo;
function vl(e) {
  if (typeof e != "function")
    throw new TypeError("executor must be a function.");
  var t;
  this.promise = new Promise(function (l) {
    t = l;
  });
  var n = this;
  this.promise.then(function (a) {
    if (n._listeners) {
      var l,
        r = n._listeners.length;
      for (l = 0; l < r; l++) n._listeners[l](a);
      n._listeners = null;
    }
  }),
    (this.promise.then = function (a) {
      var l,
        r = new Promise(function (i) {
          n.subscribe(i), (l = i);
        }).then(a);
      return (
        (r.cancel = function () {
          n.unsubscribe(l);
        }),
        r
      );
    }),
    e(function (l) {
      n.reason || ((n.reason = new V1(l)), t(n.reason));
    });
}
vl.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
};
vl.prototype.subscribe = function (t) {
  if (this.reason) {
    t(this.reason);
    return;
  }
  this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
};
vl.prototype.unsubscribe = function (t) {
  if (this._listeners) {
    var n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
};
vl.source = function () {
  var t,
    n = new vl(function (l) {
      t = l;
    });
  return { token: n, cancel: t };
};
var $1 = vl,
  I1 = function (t) {
    return function (a) {
      return t.apply(null, a);
    };
  },
  P1 = mt,
  O1 = function (t) {
    return P1.isObject(t) && t.isAxiosError === !0;
  },
  Id = mt,
  T1 = pm,
  hi = E1,
  R1 = $m,
  L1 = Mu;
function Tm(e) {
  var t = new hi(e),
    n = T1(hi.prototype.request, t);
  return (
    Id.extend(n, hi.prototype, t),
    Id.extend(n, t),
    (n.create = function (l) {
      return Tm(R1(e, l));
    }),
    n
  );
}
var Ct = Tm(L1);
Ct.Axios = hi;
Ct.CanceledError = oo;
Ct.CancelToken = $1;
Ct.isCancel = Vm;
Ct.VERSION = Im.version;
Ct.toFormData = km;
Ct.AxiosError = _l;
Ct.Cancel = Ct.CanceledError;
Ct.all = function (t) {
  return Promise.all(t);
};
Ct.spread = I1;
Ct.isAxiosError = O1;
Ou.exports = Ct;
Ou.exports.default = Ct;
var Ss = Ou.exports;
var Ra = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
};
const B1 = {
  data() {
    return { props: { level: String, grupa: String } };
  },
};
function N1(e, t, n, a, l, r) {
  const i = ct("router-view");
  return Ae(), Ee("div", null, [m(i)]);
}
var M1 = Ra(B1, [["render", N1]]);
/*!
 * vue-router v4.1.3
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const el = typeof window != "undefined";
function F1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const De = Object.assign;
function jo(e, t) {
  const n = {};
  for (const a in t) {
    const l = t[a];
    n[a] = rn(l) ? l.map(e) : e(l);
  }
  return n;
}
const Zl = () => {},
  rn = Array.isArray,
  D1 = /\/$/,
  z1 = (e) => e.replace(D1, "");
function Ho(e, t, n = "/") {
  let a,
    l = {},
    r = "",
    i = "";
  const o = t.indexOf("#");
  let s = t.indexOf("?");
  return (
    o < s && o >= 0 && (s = -1),
    s > -1 &&
      ((a = t.slice(0, s)),
      (r = t.slice(s + 1, o > -1 ? o : t.length)),
      (l = e(r))),
    o > -1 && ((a = a || t.slice(0, o)), (i = t.slice(o, t.length))),
    (a = W1(a != null ? a : t, n)),
    { fullPath: a + (r && "?") + r + i, path: a, query: l, hash: i }
  );
}
function j1(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Pd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function H1(e, t, n) {
  const a = t.matched.length - 1,
    l = n.matched.length - 1;
  return (
    a > -1 &&
    a === l &&
    ml(t.matched[a], n.matched[l]) &&
    Rm(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function ml(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Rm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!U1(e[n], t[n])) return !1;
  return !0;
}
function U1(e, t) {
  return rn(e) ? Od(e, t) : rn(t) ? Od(t, e) : e === t;
}
function Od(e, t) {
  return rn(t)
    ? e.length === t.length && e.every((n, a) => n === t[a])
    : e.length === 1 && e[0] === t;
}
function W1(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    a = e.split("/");
  let l = n.length - 1,
    r,
    i;
  for (r = 0; r < a.length; r++)
    if (((i = a[r]), i !== "."))
      if (i === "..") l > 1 && l--;
      else break;
  return (
    n.slice(0, l).join("/") +
    "/" +
    a.slice(r - (r === a.length ? 1 : 0)).join("/")
  );
}
var hr;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(hr || (hr = {}));
var Ql;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ql || (Ql = {}));
function Y1(e) {
  if (!e)
    if (el) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), z1(e);
}
const G1 = /^[^#]+#/;
function K1(e, t) {
  return e.replace(G1, "#") + t;
}
function q1(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    a = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: a.left - n.left - (t.left || 0),
    top: a.top - n.top - (t.top || 0),
  };
}
const co = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function X1(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      a = typeof n == "string" && n.startsWith("#"),
      l =
        typeof n == "string"
          ? a
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!l) return;
    t = q1(l, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Td(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Cs = new Map();
function J1(e, t) {
  Cs.set(e, t);
}
function Z1(e) {
  const t = Cs.get(e);
  return Cs.delete(e), t;
}
let Q1 = () => location.protocol + "//" + location.host;
function Lm(e, t) {
  const { pathname: n, search: a, hash: l } = t,
    r = e.indexOf("#");
  if (r > -1) {
    let o = l.includes(e.slice(r)) ? e.slice(r).length : 1,
      s = l.slice(o);
    return s[0] !== "/" && (s = "/" + s), Pd(s, "");
  }
  return Pd(n, e) + a + l;
}
function e_(e, t, n, a) {
  let l = [],
    r = [],
    i = null;
  const o = ({ state: f }) => {
    const v = Lm(e, location),
      h = n.value,
      p = t.value;
    let w = 0;
    if (f) {
      if (((n.value = v), (t.value = f), i && i === h)) {
        i = null;
        return;
      }
      w = p ? f.position - p.position : 0;
    } else a(v);
    l.forEach((g) => {
      g(n.value, h, {
        delta: w,
        type: hr.pop,
        direction: w ? (w > 0 ? Ql.forward : Ql.back) : Ql.unknown,
      });
    });
  };
  function s() {
    i = n.value;
  }
  function c(f) {
    l.push(f);
    const v = () => {
      const h = l.indexOf(f);
      h > -1 && l.splice(h, 1);
    };
    return r.push(v), v;
  }
  function u() {
    const { history: f } = window;
    !f.state || f.replaceState(De({}, f.state, { scroll: co() }), "");
  }
  function d() {
    for (const f of r) f();
    (r = []),
      window.removeEventListener("popstate", o),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", o),
    window.addEventListener("beforeunload", u),
    { pauseListeners: s, listen: c, destroy: d }
  );
}
function Rd(e, t, n, a = !1, l = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: a,
    position: window.history.length,
    scroll: l ? co() : null,
  };
}
function t_(e) {
  const { history: t, location: n } = window,
    a = { value: Lm(e, n) },
    l = { value: t.state };
  l.value ||
    r(
      a.value,
      {
        back: null,
        current: a.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function r(s, c, u) {
    const d = e.indexOf("#"),
      f =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + s
          : Q1() + e + s;
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), (l.value = c);
    } catch (v) {
      console.error(v), n[u ? "replace" : "assign"](f);
    }
  }
  function i(s, c) {
    const u = De({}, t.state, Rd(l.value.back, s, l.value.forward, !0), c, {
      position: l.value.position,
    });
    r(s, u, !0), (a.value = s);
  }
  function o(s, c) {
    const u = De({}, l.value, t.state, { forward: s, scroll: co() });
    r(u.current, u, !0);
    const d = De({}, Rd(a.value, s, null), { position: u.position + 1 }, c);
    r(s, d, !1), (a.value = s);
  }
  return { location: a, state: l, push: o, replace: i };
}
function n_(e) {
  e = Y1(e);
  const t = t_(e),
    n = e_(e, t.state, t.location, t.replace);
  function a(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const l = De(
    { location: "", base: e, go: a, createHref: K1.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(l, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(l, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    l
  );
}
function a_(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    n_(e)
  );
}
function l_(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Bm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Wn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Nm = Symbol("");
var Ld;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ld || (Ld = {}));
function hl(e, t) {
  return De(new Error(), { type: e, [Nm]: !0 }, t);
}
function Cn(e, t) {
  return e instanceof Error && Nm in e && (t == null || !!(e.type & t));
}
const Bd = "[^/]+?",
  r_ = { sensitive: !1, strict: !1, start: !0, end: !0 },
  i_ = /[.+*?^${}()[\]/\\]/g;
function o_(e, t) {
  const n = De({}, r_, t),
    a = [];
  let l = n.start ? "^" : "";
  const r = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (l += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let v = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (l += "/"), (l += f.value.replace(i_, "\\$&")), (v += 40);
      else if (f.type === 1) {
        const { value: h, repeatable: p, optional: w, regexp: g } = f;
        r.push({ name: h, repeatable: p, optional: w });
        const _ = g || Bd;
        if (_ !== Bd) {
          v += 10;
          try {
            new RegExp(`(${_})`);
          } catch (k) {
            throw new Error(
              `Invalid custom RegExp for param "${h}" (${_}): ` + k.message
            );
          }
        }
        let y = p ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        d || (y = w && c.length < 2 ? `(?:/${y})` : "/" + y),
          w && (y += "?"),
          (l += y),
          (v += 20),
          w && (v += -8),
          p && (v += -20),
          _ === ".*" && (v += -50);
      }
      u.push(v);
    }
    a.push(u);
  }
  if (n.strict && n.end) {
    const c = a.length - 1;
    a[c][a[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (l += "/?"), n.end ? (l += "$") : n.strict && (l += "(?:/|$)");
  const i = new RegExp(l, n.sensitive ? "" : "i");
  function o(c) {
    const u = c.match(i),
      d = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const v = u[f] || "",
        h = r[f - 1];
      d[h.name] = v && h.repeatable ? v.split("/") : v;
    }
    return d;
  }
  function s(c) {
    let u = "",
      d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const v of f)
        if (v.type === 0) u += v.value;
        else if (v.type === 1) {
          const { value: h, repeatable: p, optional: w } = v,
            g = h in c ? c[h] : "";
          if (rn(g) && !p)
            throw new Error(
              `Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`
            );
          const _ = rn(g) ? g.join("/") : g;
          if (!_)
            if (w)
              f.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${h}"`);
          u += _;
        }
    }
    return u || "/";
  }
  return { re: i, score: a, keys: r, parse: o, stringify: s };
}
function s_(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const a = t[n] - e[n];
    if (a) return a;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function u_(e, t) {
  let n = 0;
  const a = e.score,
    l = t.score;
  for (; n < a.length && n < l.length; ) {
    const r = s_(a[n], l[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(l.length - a.length) === 1) {
    if (Nd(a)) return 1;
    if (Nd(l)) return -1;
  }
  return l.length - a.length;
}
function Nd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const c_ = { type: 0, value: "" },
  d_ = /[a-zA-Z0-9_]/;
function f_(e) {
  if (!e) return [[]];
  if (e === "/") return [[c_]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(v) {
    throw new Error(`ERR (${n})/"${c}": ${v}`);
  }
  let n = 0,
    a = n;
  const l = [];
  let r;
  function i() {
    r && l.push(r), (r = []);
  }
  let o = 0,
    s,
    c = "",
    u = "";
  function d() {
    !c ||
      (n === 0
        ? r.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (r.length > 1 &&
            (s === "*" || s === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          r.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: s === "*" || s === "+",
            optional: s === "*" || s === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function f() {
    c += s;
  }
  for (; o < e.length; ) {
    if (((s = e[o++]), s === "\\" && n !== 2)) {
      (a = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        s === "/" ? (c && d(), i()) : s === ":" ? (d(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = a);
        break;
      case 1:
        s === "("
          ? (n = 2)
          : d_.test(s)
          ? f()
          : (d(), (n = 0), s !== "*" && s !== "?" && s !== "+" && o--);
        break;
      case 2:
        s === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + s)
            : (n = 3)
          : (u += s);
        break;
      case 3:
        d(), (n = 0), s !== "*" && s !== "?" && s !== "+" && o--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), i(), l;
}
function v_(e, t, n) {
  const a = o_(f_(e.path), n),
    l = De(a, { record: e, parent: t, children: [], alias: [] });
  return t && !l.record.aliasOf == !t.record.aliasOf && t.children.push(l), l;
}
function m_(e, t) {
  const n = [],
    a = new Map();
  t = Fd({ strict: !1, end: !0, sensitive: !1 }, t);
  function l(u) {
    return a.get(u);
  }
  function r(u, d, f) {
    const v = !f,
      h = g_(u);
    h.aliasOf = f && f.record;
    const p = Fd(t, u),
      w = [h];
    if ("alias" in u) {
      const y = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const k of y)
        w.push(
          De({}, h, {
            components: f ? f.record.components : h.components,
            path: k,
            aliasOf: f ? f.record : h,
          })
        );
    }
    let g, _;
    for (const y of w) {
      const { path: k } = y;
      if (d && k[0] !== "/") {
        const S = d.record.path,
          A = S[S.length - 1] === "/" ? "" : "/";
        y.path = d.record.path + (k && A + k);
      }
      if (
        ((g = v_(y, d, p)),
        f
          ? f.alias.push(g)
          : ((_ = _ || g),
            _ !== g && _.alias.push(g),
            v && u.name && !Md(g) && i(u.name)),
        h.children)
      ) {
        const S = h.children;
        for (let A = 0; A < S.length; A++) r(S[A], g, f && f.children[A]);
      }
      (f = f || g), s(g);
    }
    return _
      ? () => {
          i(_);
        }
      : Zl;
  }
  function i(u) {
    if (Bm(u)) {
      const d = a.get(u);
      d &&
        (a.delete(u),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(i),
        d.alias.forEach(i));
    } else {
      const d = n.indexOf(u);
      d > -1 &&
        (n.splice(d, 1),
        u.record.name && a.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function o() {
    return n;
  }
  function s(u) {
    let d = 0;
    for (
      ;
      d < n.length &&
      u_(u, n[d]) >= 0 &&
      (u.record.path !== n[d].record.path || !Mm(u, n[d]));

    )
      d++;
    n.splice(d, 0, u), u.record.name && !Md(u) && a.set(u.record.name, u);
  }
  function c(u, d) {
    let f,
      v = {},
      h,
      p;
    if ("name" in u && u.name) {
      if (((f = a.get(u.name)), !f)) throw hl(1, { location: u });
      (p = f.record.name),
        (v = De(
          h_(
            d.params,
            f.keys.filter((_) => !_.optional).map((_) => _.name)
          ),
          u.params
        )),
        (h = f.stringify(v));
    } else if ("path" in u)
      (h = u.path),
        (f = n.find((_) => _.re.test(h))),
        f && ((v = f.parse(h)), (p = f.record.name));
    else {
      if (((f = d.name ? a.get(d.name) : n.find((_) => _.re.test(d.path))), !f))
        throw hl(1, { location: u, currentLocation: d });
      (p = f.record.name),
        (v = De({}, d.params, u.params)),
        (h = f.stringify(v));
    }
    const w = [];
    let g = f;
    for (; g; ) w.unshift(g.record), (g = g.parent);
    return { name: p, path: h, params: v, matched: w, meta: y_(w) };
  }
  return (
    e.forEach((u) => r(u)),
    {
      addRoute: r,
      resolve: c,
      removeRoute: i,
      getRoutes: o,
      getRecordMatcher: l,
    }
  );
}
function h_(e, t) {
  const n = {};
  for (const a of t) a in e && (n[a] = e[a]);
  return n;
}
function g_(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: p_(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function p_(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const a in e.components) t[a] = typeof n == "boolean" ? n : n[a];
  return t;
}
function Md(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function y_(e) {
  return e.reduce((t, n) => De(t, n.meta), {});
}
function Fd(e, t) {
  const n = {};
  for (const a in e) n[a] = a in t ? t[a] : e[a];
  return n;
}
function Mm(e, t) {
  return t.children.some((n) => n === e || Mm(e, n));
}
const Fm = /#/g,
  b_ = /&/g,
  __ = /\//g,
  x_ = /=/g,
  w_ = /\?/g,
  Dm = /\+/g,
  S_ = /%5B/g,
  C_ = /%5D/g,
  zm = /%5E/g,
  k_ = /%60/g,
  jm = /%7B/g,
  A_ = /%7C/g,
  Hm = /%7D/g,
  E_ = /%20/g;
function Du(e) {
  return encodeURI("" + e)
    .replace(A_, "|")
    .replace(S_, "[")
    .replace(C_, "]");
}
function V_(e) {
  return Du(e).replace(jm, "{").replace(Hm, "}").replace(zm, "^");
}
function ks(e) {
  return Du(e)
    .replace(Dm, "%2B")
    .replace(E_, "+")
    .replace(Fm, "%23")
    .replace(b_, "%26")
    .replace(k_, "`")
    .replace(jm, "{")
    .replace(Hm, "}")
    .replace(zm, "^");
}
function $_(e) {
  return ks(e).replace(x_, "%3D");
}
function I_(e) {
  return Du(e).replace(Fm, "%23").replace(w_, "%3F");
}
function P_(e) {
  return e == null ? "" : I_(e).replace(__, "%2F");
}
function Vi(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function O_(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const a = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let l = 0; l < a.length; ++l) {
    const r = a[l].replace(Dm, " "),
      i = r.indexOf("="),
      o = Vi(i < 0 ? r : r.slice(0, i)),
      s = i < 0 ? null : Vi(r.slice(i + 1));
    if (o in t) {
      let c = t[o];
      rn(c) || (c = t[o] = [c]), c.push(s);
    } else t[o] = s;
  }
  return t;
}
function Dd(e) {
  let t = "";
  for (let n in e) {
    const a = e[n];
    if (((n = $_(n)), a == null)) {
      a !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (rn(a) ? a.map((r) => r && ks(r)) : [a && ks(a)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r));
    });
  }
  return t;
}
function T_(e) {
  const t = {};
  for (const n in e) {
    const a = e[n];
    a !== void 0 &&
      (t[n] = rn(a)
        ? a.map((l) => (l == null ? null : "" + l))
        : a == null
        ? a
        : "" + a);
  }
  return t;
}
const R_ = Symbol(""),
  zd = Symbol(""),
  zu = Symbol(""),
  Um = Symbol(""),
  As = Symbol("");
function Ml() {
  let e = [];
  function t(a) {
    return (
      e.push(a),
      () => {
        const l = e.indexOf(a);
        l > -1 && e.splice(l, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Jn(e, t, n, a, l) {
  const r = a && (a.enterCallbacks[l] = a.enterCallbacks[l] || []);
  return () =>
    new Promise((i, o) => {
      const s = (d) => {
          d === !1
            ? o(hl(4, { from: n, to: t }))
            : d instanceof Error
            ? o(d)
            : l_(d)
            ? o(hl(2, { from: t, to: d }))
            : (r &&
                a.enterCallbacks[l] === r &&
                typeof d == "function" &&
                r.push(d),
              i());
        },
        c = e.call(a && a.instances[l], t, n, s);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(s)), u.catch((d) => o(d));
    });
}
function Uo(e, t, n, a) {
  const l = [];
  for (const r of e)
    for (const i in r.components) {
      let o = r.components[i];
      if (!(t !== "beforeRouteEnter" && !r.instances[i]))
        if (L_(o)) {
          const c = (o.__vccOpts || o)[t];
          c && l.push(Jn(c, n, a, r, i));
        } else {
          let s = o();
          l.push(() =>
            s.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${r.path}"`)
                );
              const u = F1(c) ? c.default : c;
              r.components[i] = u;
              const f = (u.__vccOpts || u)[t];
              return f && Jn(f, n, a, r, i)();
            })
          );
        }
    }
  return l;
}
function L_(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function jd(e) {
  const t = Oe(zu),
    n = Oe(Um),
    a = b(() => t.resolve(Ot(e.to))),
    l = b(() => {
      const { matched: s } = a.value,
        { length: c } = s,
        u = s[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const f = d.findIndex(ml.bind(null, u));
      if (f > -1) return f;
      const v = Hd(s[c - 2]);
      return c > 1 && Hd(u) === v && d[d.length - 1].path !== v
        ? d.findIndex(ml.bind(null, s[c - 2]))
        : f;
    }),
    r = b(() => l.value > -1 && F_(n.params, a.value.params)),
    i = b(
      () =>
        l.value > -1 &&
        l.value === n.matched.length - 1 &&
        Rm(n.params, a.value.params)
    );
  function o(s = {}) {
    return M_(s)
      ? t[Ot(e.replace) ? "replace" : "push"](Ot(e.to)).catch(Zl)
      : Promise.resolve();
  }
  return {
    route: a,
    href: b(() => a.value.href),
    isActive: r,
    isExactActive: i,
    navigate: o,
  };
}
const B_ = Oa({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: jd,
    setup(e, { slots: t }) {
      const n = vt(jd(e)),
        { options: a } = Oe(zu),
        l = b(() => ({
          [Ud(e.activeClass, a.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Ud(
            e.exactActiveClass,
            a.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && t.default(n);
        return e.custom
          ? r
          : Yt(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: l.value,
              },
              r
            );
      };
    },
  }),
  N_ = B_;
function M_(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function F_(e, t) {
  for (const n in t) {
    const a = t[n],
      l = e[n];
    if (typeof a == "string") {
      if (a !== l) return !1;
    } else if (!rn(l) || l.length !== a.length || a.some((r, i) => r !== l[i]))
      return !1;
  }
  return !0;
}
function Hd(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Ud = (e, t, n) => (e != null ? e : t != null ? t : n),
  D_ = Oa({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const a = Oe(As),
        l = b(() => e.route || a.value),
        r = Oe(zd, 0),
        i = b(() => {
          let c = Ot(r);
          const { matched: u } = l.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        o = b(() => l.value.matched[i.value]);
      Qe(
        zd,
        b(() => i.value + 1)
      ),
        Qe(R_, o),
        Qe(As, l);
      const s = B();
      return (
        ce(
          () => [s.value, o.value, e.name],
          ([c, u, d], [f, v, h]) => {
            u &&
              ((u.instances[d] = c),
              v &&
                v !== u &&
                c &&
                c === f &&
                (u.leaveGuards.size || (u.leaveGuards = v.leaveGuards),
                u.updateGuards.size || (u.updateGuards = v.updateGuards))),
              c &&
                u &&
                (!v || !ml(u, v) || !f) &&
                (u.enterCallbacks[d] || []).forEach((p) => p(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = l.value,
            u = e.name,
            d = o.value,
            f = d && d.components[u];
          if (!f) return Wd(n.default, { Component: f, route: c });
          const v = d.props[u],
            h = v
              ? v === !0
                ? c.params
                : typeof v == "function"
                ? v(c)
                : v
              : null,
            w = Yt(
              f,
              De({}, h, t, {
                onVnodeUnmounted: (g) => {
                  g.component.isUnmounted && (d.instances[u] = null);
                },
                ref: s,
              })
            );
          return Wd(n.default, { Component: w, route: c }) || w;
        }
      );
    },
  });
function Wd(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const z_ = D_;
function j_(e) {
  const t = m_(e.routes, e),
    n = e.parseQuery || O_,
    a = e.stringifyQuery || Dd,
    l = e.history,
    r = Ml(),
    i = Ml(),
    o = Ml(),
    s = $v(Wn);
  let c = Wn;
  el &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = jo.bind(null, (N) => "" + N),
    d = jo.bind(null, P_),
    f = jo.bind(null, Vi);
  function v(N, W) {
    let q, oe;
    return (
      Bm(N) ? ((q = t.getRecordMatcher(N)), (oe = W)) : (oe = N),
      t.addRoute(oe, q)
    );
  }
  function h(N) {
    const W = t.getRecordMatcher(N);
    W && t.removeRoute(W);
  }
  function p() {
    return t.getRoutes().map((N) => N.record);
  }
  function w(N) {
    return !!t.getRecordMatcher(N);
  }
  function g(N, W) {
    if (((W = De({}, W || s.value)), typeof N == "string")) {
      const Se = Ho(n, N, W.path),
        E = t.resolve({ path: Se.path }, W),
        O = l.createHref(Se.fullPath);
      return De(Se, E, {
        params: f(E.params),
        hash: Vi(Se.hash),
        redirectedFrom: void 0,
        href: O,
      });
    }
    let q;
    if ("path" in N) q = De({}, N, { path: Ho(n, N.path, W.path).path });
    else {
      const Se = De({}, N.params);
      for (const E in Se) Se[E] == null && delete Se[E];
      (q = De({}, N, { params: d(N.params) })), (W.params = d(W.params));
    }
    const oe = t.resolve(q, W),
      Ie = N.hash || "";
    oe.params = u(f(oe.params));
    const Te = j1(a, De({}, N, { hash: V_(Ie), path: oe.path })),
      ke = l.createHref(Te);
    return De(
      { fullPath: Te, hash: Ie, query: a === Dd ? T_(N.query) : N.query || {} },
      oe,
      { redirectedFrom: void 0, href: ke }
    );
  }
  function _(N) {
    return typeof N == "string" ? Ho(n, N, s.value.path) : De({}, N);
  }
  function y(N, W) {
    if (c !== N) return hl(8, { from: W, to: N });
  }
  function k(N) {
    return x(N);
  }
  function S(N) {
    return k(De(_(N), { replace: !0 }));
  }
  function A(N) {
    const W = N.matched[N.matched.length - 1];
    if (W && W.redirect) {
      const { redirect: q } = W;
      let oe = typeof q == "function" ? q(N) : q;
      return (
        typeof oe == "string" &&
          ((oe =
            oe.includes("?") || oe.includes("#") ? (oe = _(oe)) : { path: oe }),
          (oe.params = {})),
        De(
          {
            query: N.query,
            hash: N.hash,
            params: "path" in oe ? {} : N.params,
          },
          oe
        )
      );
    }
  }
  function x(N, W) {
    const q = (c = g(N)),
      oe = s.value,
      Ie = N.state,
      Te = N.force,
      ke = N.replace === !0,
      Se = A(q);
    if (Se) return x(De(_(Se), { state: Ie, force: Te, replace: ke }), W || q);
    const E = q;
    E.redirectedFrom = W;
    let O;
    return (
      !Te &&
        H1(a, oe, q) &&
        ((O = hl(16, { to: E, from: oe })), K(oe, oe, !0, !1)),
      (O ? Promise.resolve(O) : V(E, oe))
        .catch((M) => (Cn(M) ? (Cn(M, 2) ? M : J(M)) : T(M, E, oe)))
        .then((M) => {
          if (M) {
            if (Cn(M, 2))
              return x(
                De({ replace: ke }, _(M.to), { state: Ie, force: Te }),
                W || E
              );
          } else M = R(E, oe, !0, ke, Ie);
          return $(E, oe, M), M;
        })
    );
  }
  function C(N, W) {
    const q = y(N, W);
    return q ? Promise.reject(q) : Promise.resolve();
  }
  function V(N, W) {
    let q;
    const [oe, Ie, Te] = H_(N, W);
    q = Uo(oe.reverse(), "beforeRouteLeave", N, W);
    for (const Se of oe)
      Se.leaveGuards.forEach((E) => {
        q.push(Jn(E, N, W));
      });
    const ke = C.bind(null, N, W);
    return (
      q.push(ke),
      Ga(q)
        .then(() => {
          q = [];
          for (const Se of r.list()) q.push(Jn(Se, N, W));
          return q.push(ke), Ga(q);
        })
        .then(() => {
          q = Uo(Ie, "beforeRouteUpdate", N, W);
          for (const Se of Ie)
            Se.updateGuards.forEach((E) => {
              q.push(Jn(E, N, W));
            });
          return q.push(ke), Ga(q);
        })
        .then(() => {
          q = [];
          for (const Se of N.matched)
            if (Se.beforeEnter && !W.matched.includes(Se))
              if (rn(Se.beforeEnter))
                for (const E of Se.beforeEnter) q.push(Jn(E, N, W));
              else q.push(Jn(Se.beforeEnter, N, W));
          return q.push(ke), Ga(q);
        })
        .then(
          () => (
            N.matched.forEach((Se) => (Se.enterCallbacks = {})),
            (q = Uo(Te, "beforeRouteEnter", N, W)),
            q.push(ke),
            Ga(q)
          )
        )
        .then(() => {
          q = [];
          for (const Se of i.list()) q.push(Jn(Se, N, W));
          return q.push(ke), Ga(q);
        })
        .catch((Se) => (Cn(Se, 8) ? Se : Promise.reject(Se)))
    );
  }
  function $(N, W, q) {
    for (const oe of o.list()) oe(N, W, q);
  }
  function R(N, W, q, oe, Ie) {
    const Te = y(N, W);
    if (Te) return Te;
    const ke = W === Wn,
      Se = el ? history.state : {};
    q &&
      (oe || ke
        ? l.replace(N.fullPath, De({ scroll: ke && Se && Se.scroll }, Ie))
        : l.push(N.fullPath, Ie)),
      (s.value = N),
      K(N, W, q, ke),
      J();
  }
  let I;
  function L() {
    I ||
      (I = l.listen((N, W, q) => {
        if (!te.listening) return;
        const oe = g(N),
          Ie = A(oe);
        if (Ie) {
          x(De(Ie, { replace: !0 }), oe).catch(Zl);
          return;
        }
        c = oe;
        const Te = s.value;
        el && J1(Td(Te.fullPath, q.delta), co()),
          V(oe, Te)
            .catch((ke) =>
              Cn(ke, 12)
                ? ke
                : Cn(ke, 2)
                ? (x(ke.to, oe)
                    .then((Se) => {
                      Cn(Se, 20) &&
                        !q.delta &&
                        q.type === hr.pop &&
                        l.go(-1, !1);
                    })
                    .catch(Zl),
                  Promise.reject())
                : (q.delta && l.go(-q.delta, !1), T(ke, oe, Te))
            )
            .then((ke) => {
              (ke = ke || R(oe, Te, !1)),
                ke &&
                  (q.delta && !Cn(ke, 8)
                    ? l.go(-q.delta, !1)
                    : q.type === hr.pop && Cn(ke, 20) && l.go(-1, !1)),
                $(oe, Te, ke);
            })
            .catch(Zl);
      }));
  }
  let D = Ml(),
    Y = Ml(),
    z;
  function T(N, W, q) {
    J(N);
    const oe = Y.list();
    return (
      oe.length ? oe.forEach((Ie) => Ie(N, W, q)) : console.error(N),
      Promise.reject(N)
    );
  }
  function F() {
    return z && s.value !== Wn
      ? Promise.resolve()
      : new Promise((N, W) => {
          D.add([N, W]);
        });
  }
  function J(N) {
    return (
      z ||
        ((z = !N),
        L(),
        D.list().forEach(([W, q]) => (N ? q(N) : W())),
        D.reset()),
      N
    );
  }
  function K(N, W, q, oe) {
    const { scrollBehavior: Ie } = e;
    if (!el || !Ie) return Promise.resolve();
    const Te =
      (!q && Z1(Td(N.fullPath, 0))) ||
      ((oe || !q) && history.state && history.state.scroll) ||
      null;
    return Ke()
      .then(() => Ie(N, W, Te))
      .then((ke) => ke && X1(ke))
      .catch((ke) => T(ke, N, W));
  }
  const le = (N) => l.go(N);
  let ie;
  const we = new Set(),
    te = {
      currentRoute: s,
      listening: !0,
      addRoute: v,
      removeRoute: h,
      hasRoute: w,
      getRoutes: p,
      resolve: g,
      options: e,
      push: k,
      replace: S,
      go: le,
      back: () => le(-1),
      forward: () => le(1),
      beforeEach: r.add,
      beforeResolve: i.add,
      afterEach: o.add,
      onError: Y.add,
      isReady: F,
      install(N) {
        const W = this;
        N.component("RouterLink", N_),
          N.component("RouterView", z_),
          (N.config.globalProperties.$router = W),
          Object.defineProperty(N.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ot(s),
          }),
          el &&
            !ie &&
            s.value === Wn &&
            ((ie = !0), k(l.location).catch((Ie) => {}));
        const q = {};
        for (const Ie in Wn) q[Ie] = b(() => s.value[Ie]);
        N.provide(zu, W), N.provide(Um, vt(q)), N.provide(As, s);
        const oe = N.unmount;
        we.add(N),
          (N.unmount = function () {
            we.delete(N),
              we.size < 1 &&
                ((c = Wn),
                I && I(),
                (I = null),
                (s.value = Wn),
                (ie = !1),
                (z = !1)),
              oe();
          });
      },
    };
  return te;
}
function Ga(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function H_(e, t) {
  const n = [],
    a = [],
    l = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const o = t.matched[i];
    o && (e.matched.find((c) => ml(c, o)) ? a.push(o) : n.push(o));
    const s = e.matched[i];
    s && (t.matched.find((c) => ml(c, s)) || l.push(s));
  }
  return [n, a, l];
}
const U_ = { props: { trening: Object } },
  W_ = { class: "tr-heading" },
  Y_ = { key: 0, class: "Kokartka-color" },
  G_ = { key: 1, class: "Mucha-color" },
  K_ = { key: 2, class: "Junior-color" },
  q_ = { key: 3, class: "pro-color" };
function X_(e, t, n, a, l, r) {
  return (
    Ae(),
    Ee("div", W_, [
      n.trening.brand == "kokartka"
        ? (Ae(),
          Ee("div", Y_, [P("p", null, qe(n.trening.brand.toUpperCase()), 1)]))
        : n.trening.brand == "mucha"
        ? (Ae(),
          Ee("div", G_, [P("p", null, qe(n.trening.brand.toUpperCase()), 1)]))
        : zt("", !0),
      n.trening.brand == "junior"
        ? (Ae(),
          Ee("div", K_, [P("p", null, qe(n.trening.brand.toUpperCase()), 1)]))
        : zt("", !0),
      n.trening.brand == "pro"
        ? (Ae(),
          Ee("div", q_, [P("p", null, qe(n.trening.brand.toUpperCase()), 1)]))
        : zt("", !0),
    ])
  );
}
var J_ = Ra(U_, [["render", X_]]);
const Z_ = {
    props: { trening: Object, treningsDesc: Object },
    components: { WorkoutHeader: J_ },
    data() {
      return {
        kokartka:
          this.trening.brand == "kokartka"
            ? "#D1519D"
            : this.trening.brand == "junior"
            ? "#F97C16"
            : this.trening.brand == "kadra"
            ? "#C800D6"
            : this.trening.brand == "mucha"
            ? "#2CA9E0"
            : "#fff",
      };
    },
  },
  Q_ = { class: "tr-main-container" },
  ex = { class: "tr-info-box-1" },
  tx = { class: "tr-info-1" },
  nx = { class: "tr-info-1-box" },
  ax = P("p", { class: "faded-title" }, "GRUPA", -1),
  lx = P("p", { class: "faded-title" }, "POZIOM", -1),
  rx = { key: 0 },
  ix = { key: 1 },
  ox = { key: 2 },
  sx = { class: "tr-info-box-2 tr-info-box-2-grid" },
  ux = { class: "tr-info-2" },
  cx = { class: "tr-info-2-box tr-border-left" },
  dx = P("p", { class: "faded-title" }, "Szko\u0142a", -1),
  fx = P("p", { class: "faded-title" }, "Wiek", -1),
  vx = { class: "tr-info-3 tr-border-left" },
  mx = { class: "tr-info-3-box" },
  hx = P("p", { class: "faded-title" }, "Dzie\u0144", -1),
  gx = { key: 0 },
  px = { key: 0 },
  yx = { key: 1 },
  bx = { key: 2 },
  _x = { class: "tr-btn-container" },
  xx = Je(" Wi\u0119cej informacji "),
  wx = { key: 0 },
  Sx = ["href"];
function Cx(e, t, n, a, l, r) {
  const i = ct("WorkoutHeader"),
    o = ct("router-link");
  return (
    Ae(),
    Ee("div", Q_, [
      m(i, { trening: n.trening }, null, 8, ["trening"]),
      P("div", ex, [
        P("div", tx, [
          P("div", nx, [
            P("div", null, [ax, P("p", null, qe(n.trening.group), 1)]),
            P("div", null, [
              lx,
              n.trening.level === "beginner"
                ? (Ae(), Ee("p", rx, "Podstawowy"))
                : n.trening.level === "beginner_older"
                ? (Ae(), Ee("p", ix, "pocz\u0105tkuj\u0105ca starsza"))
                : zt("", !0),
              n.trening.level === "advanced"
                ? (Ae(), Ee("p", ox, "zaawansowany"))
                : zt("", !0),
            ]),
          ]),
        ]),
      ]),
      P("div", sx, [
        P("div", ux, [
          P("div", cx, [
            P("div", null, [dx, P("p", null, qe(n.trening.location), 1)]),
            P("div", null, [fx, P("p", null, qe(n.trening.age) + " LAT", 1)]),
          ]),
        ]),
        P("div", vx, [
          P("div", mx, [
            P("div", null, [
              hx,
              n.trening.firstDay
                ? (Ae(),
                  Ee("div", gx, [
                    P("div", null, [
                      n.trening.firstDate
                        ? (Ae(),
                          Ee(
                            "p",
                            px,
                            qe(n.trening.firstDay) +
                              ": " +
                              qe(n.trening.firstDate),
                            1
                          ))
                        : zt("", !0),
                      n.trening.secondDate
                        ? (Ae(),
                          Ee(
                            "p",
                            yx,
                            qe(n.trening.secondDay) +
                              ": " +
                              qe(n.trening.secondDate),
                            1
                          ))
                        : zt("", !0),
                      n.trening.thirdDate
                        ? (Ae(),
                          Ee(
                            "p",
                            bx,
                            qe(n.trening.thirdDay) +
                              ": " +
                              qe(n.trening.thirdDate),
                            1
                          ))
                        : zt("", !0),
                    ]),
                  ]))
                : zt("", !0),
            ]),
          ]),
        ]),
      ]),
      P("div", _x, [
        m(
          o,
          { class: "tr-btn tr-btn-wi", to: { path: "/opis/" + n.trening.id } },
          { default: en(() => [xx]), _: 1 },
          8,
          ["to"]
        ),
        n.trening.signUp
          ? (Ae(),
            Ee("div", wx, [
              P(
                "a",
                {
                  class: "tr-btn tr-btn-zs",
                  style: ul({ background: l.kokartka }),
                  href: n.trening.signUp,
                  target: "_blank",
                },
                " Zapisz si\u0119",
                12,
                Sx
              ),
            ]))
          : zt("", !0),
      ]),
    ])
  );
}
var kx = Ra(Z_, [["render", Cx]]),
  Ax = {
    data() {
      return {
        trenings: [],
        filteredTrenings: [],
        treningsDesc: [],
        proxyTable: [],
      };
    },
    mounted() {
      this.fetchTrenings();
    },
    methods: {
      fetchTrenings() {
        const e = [];
        Ss.get("https://kokartka.info/zapisy/api/workouts")
          .then(function (t) {
            const n = t.data;
            for (let a = 0; a < t.data.length; a++)
              console.log(a),
                e.push({
                  id: n[a].id,
                  level: n[a].level,
                  firstHour: new Date(n[a].dates[0]).getHours(),
                  secondHour: new Date(n[a].dates[1]).getHours(),
                  firstDate: n[a].dates[0]
                    ? new Date(n[a].dates[0]).getHours() +
                      ":" +
                      String(new Date(n[a].dates[0]).getMinutes()).padStart(
                        2,
                        "0"
                      )
                    : "",
                  secondDate: n[a].dates[1]
                    ? new Date(n[a].dates[1]).getHours() +
                      ":" +
                      String(new Date(n[a].dates[1]).getMinutes()).padStart(
                        2,
                        "0"
                      )
                    : "",
                  thirdDate: n[a].dates[3]
                    ? new Date(n[a].dates[2]).getHours() +
                      ":" +
                      String(new Date(n[a].dates[2]).getMinutes()).padStart(
                        2,
                        "0"
                      )
                    : "",
                  age: String(n[a].age.min) + "-" + String(n[a].age.max),
                  filterAgeMin: n[a].age.min,
                  filterAgeMax: n[a].age.max,
                  firstDay: n[a].dates[0]
                    ? new Date(n[a].dates[0]).toLocaleDateString("pl-PL", {
                        weekday: "long",
                      })
                    : "",
                  secondDay: n[a].dates[1]
                    ? new Date(n[a].dates[1]).toLocaleDateString("pl-PL", {
                        weekday: "long",
                      })
                    : "",
                  thirdDay: n[a].dates[2]
                    ? new Date(n[a].dates[2]).toLocaleDateString("pl-PL", {
                        weekday: "long",
                      })
                    : "",
                  location: n[a].location,
                  city: n[a].location_address.city,
                  brand: n[a].brand,
                  group: n[a].group,
                  signUp: n[a].links.registration,
                });
          })
          .catch(function (t) {
            console.log(t);
          })
          .finally(() => {
            (this.trenings = e), (this.proxyTable = e), (this.isLoaded = !0);
          });
      },
    },
  };
const Ex = {
    mixins: [Ax],
    props: ["trening", "trening2"],
    data() {
      return {
        isLoaded: !1,
        fLevel: "Poziom",
        fAge: "Wiek",
        fGroup: "Grupa",
        fDay: "Dzie\u0144",
        fSzkola: "Szko\u0142a",
        fHour: "Godzina",
        fCity: "Miasto",
        avalibleGroups: [
          "Z\xD3\u0141TA",
          "POMARA\u0143CZOWA",
          "CZERWONA",
          "LAWENDOWA",
          "R\xD3\u017BOWA",
          "FIOLETOWA",
          "NIEBIESKA",
          "GRANATOWA",
          "ZIELONA",
          "KADRA",
        ],
        treningDays: [],
        isFiltered: !1,
        url: "https://kokartka.info/zapisy/api/workouts",
      };
    },
    computed: {
      filterWorkouts() {
        return this.trenings.filter(
          (e) =>
            (this.fLevel == "Poziom" || e.level.includes(this.fLevel)) &&
            (this.fDay == "Dzie\u0144" ||
              e.firstDay.includes(this.fDay) ||
              e.secondDay.includes(this.fDay) ||
              e.thirdDay.includes(this.fDay)) &&
            (this.fAge == "Wiek" ||
              (e.filterAgeMin <= parseInt(this.fAge) &&
                e.filterAgeMax >= parseInt(this.fAge))) &&
            (this.fSzkola == "Szko\u0142a" ||
              e.location.toLowerCase().includes(this.fSzkola.toLowerCase())) &&
            (this.fCity == "Miasto" ||
              e.city.toLowerCase().includes(this.fCity.toLowerCase())) &&
            (this.fGroup == "Grupa" ||
              e.group.toLowerCase().includes(this.fGroup.toLowerCase())) &&
            (this.fHour == "Godzina" ||
              e.firstHour == this.fHour ||
              e.secondHour == this.fHour)
        );
      },
      uniqueLocation() {
        return this.trenings
          .map((e) => e.location)
          .filter((e, t, n) => n.indexOf(e) === t)
          .sort();
      },
      uniqueCity() {
        return this.trenings
          .map((e) => e.city)
          .filter((e, t, n) => n.indexOf(e) === t)
          .sort();
      },
      uniqueGroup() {
        return this.trenings.reduce(
          (e, t) => Object.assign(e, { [t.group]: t }),
          {}
        );
      },
      uniqueLevel() {
        return this.trenings.reduce(
          (e, t) => Object.assign(e, { [t.level]: t }),
          {}
        );
      },
    },
    methods: {
      reset() {
        (this.trenings = this.proxyTable),
          (this.fLevel = "Poziom"),
          (this.fGroup = "Grupa"),
          (this.fCity = "Miasto"),
          (this.fAge = "Wiek"),
          (this.fDay = "Dzie\u0144"),
          (this.fSzkola = "Szko\u0142a"),
          (this.fHour = "Godzina");
      },
      log() {
        console.log(this.trenings.date);
      },
    },
    components: { Workout: kx },
  },
  Vx = P("div", null, null, -1),
  $x = Je("FILTRY"),
  Ix = { class: "app-tr-container" },
  Px = { class: "box-cont" },
  Ox = P("option", { value: "" }, "Grupa", -1),
  Tx = P(
    "option",
    { value: "Grupa", disabled: "", selected: "", hidden: "" },
    "Grupa",
    -1
  ),
  Rx = ["value"],
  Lx = P("option", { value: "DORO" }, "DORO\u015ALI", -1),
  Bx = { class: "box flex-label" },
  Nx = P("option", { value: "" }, "Poziom", -1),
  Mx = P(
    "option",
    { value: "Poziom", disabled: "", selected: "", hidden: "" },
    "Poziom",
    -1
  ),
  Fx = P("option", { value: "beginner" }, "Podstawowy", -1),
  Dx = P("option", { value: "advanced" }, "Zaawansowany", -1),
  zx = P("option", { value: "beginner_older" }, "Starsza podstawowa", -1),
  jx = [Nx, Mx, Fx, Dx, zx],
  Hx = { class: "box flex-label" },
  Ux = P("option", { value: "Wiek" }, "Wiek", -1),
  Wx = P(
    "option",
    { value: "Wiek", disabled: "", selected: "", hidden: "" },
    "Wiek",
    -1
  ),
  Yx = P("option", { value: "2" }, "2", -1),
  Gx = P("option", { value: "3" }, "3", -1),
  Kx = P("option", { value: "4" }, "4", -1),
  qx = P("option", { value: "5" }, "5", -1),
  Xx = P("option", { value: "6" }, "6", -1),
  Jx = P("option", { value: "7" }, "7", -1),
  Zx = P("option", { value: "8" }, "8", -1),
  Qx = P("option", { value: "9" }, "9", -1),
  ew = P("option", { value: "10" }, "10", -1),
  tw = P("option", { value: "11" }, "11", -1),
  nw = P("option", { value: "12" }, "12", -1),
  aw = P("option", { value: "13" }, "13", -1),
  lw = P("option", { value: "14" }, "14", -1),
  rw = P("option", { value: "15" }, "15", -1),
  iw = P("option", { value: "16" }, "16", -1),
  ow = P("option", { value: "17" }, "17+", -1),
  sw = [Ux, Wx, Yx, Gx, Kx, qx, Xx, Jx, Zx, Qx, ew, tw, nw, aw, lw, rw, iw, ow],
  uw = { class: "box flex-label" },
  cw = P("option", { value: "Miasto" }, "Miasto", -1),
  dw = P(
    "option",
    { value: "Miasto", disabled: "", selected: "", hidden: "" },
    "Miasto",
    -1
  ),
  fw = ["value"],
  vw = { class: "box flex-label" },
  mw = P("option", { value: "" }, "Szko\u0142a", -1),
  hw = P(
    "option",
    { value: "Szko\u0142a", disabled: "", selected: "", hidden: "" },
    "Szko\u0142a",
    -1
  ),
  gw = ["value"],
  pw = { class: "box flex-label" },
  yw = P("option", { value: "" }, "Dzie\u0144", -1),
  bw = P(
    "option",
    { value: "Dzie\u0144", disabled: "", selected: "", hidden: "" },
    "Dzie\u0144",
    -1
  ),
  _w = P("option", { value: "poniedzia\u0142ek" }, "Poniedzia\u0142ek", -1),
  xw = P("option", { value: "wtorek" }, "Wtorek", -1),
  ww = P("option", { value: "\u015Broda" }, "\u015Aroda", -1),
  Sw = P("option", { value: "czwartek" }, "Czwartek", -1),
  Cw = P("option", { value: "pi\u0105tek" }, "Pi\u0105tek", -1),
  kw = P("option", { value: "sobota" }, "Sobota", -1),
  Aw = P("option", { value: "niedziela" }, "Niedziela", -1),
  Ew = [yw, bw, _w, xw, ww, Sw, Cw, kw, Aw],
  Vw = { class: "box flex-label" },
  $w = P("option", { value: "Godzina" }, "Godzina", -1),
  Iw = P(
    "option",
    { value: "Godzina", disabled: "", selected: "", hidden: "" },
    "GODZINA",
    -1
  ),
  Pw = P("option", { value: "9" }, "9:00 - 10:00", -1),
  Ow = P("option", { value: "10" }, "10:00 - 11:00", -1),
  Tw = P("option", { value: "11" }, "11:00 - 12:00", -1),
  Rw = P("option", { value: "12" }, "12:00 - 13:00", -1),
  Lw = P("option", { value: "13" }, "13:00 - 14:00", -1),
  Bw = P("option", { value: "14" }, "14:00 - 15:00", -1),
  Nw = P("option", { value: "15" }, "15:00 - 16:00", -1),
  Mw = P("option", { value: "16" }, "16:00 - 17:00", -1),
  Fw = P("option", { value: "17" }, "17:00 - 18:00", -1),
  Dw = P("option", { value: "18" }, "18:00 - 19:00", -1),
  zw = P("option", { value: "19" }, "19:00 - 20:00", -1),
  jw = P("option", { value: "20" }, "20:00 - 21:00", -1),
  Hw = [$w, Iw, Pw, Ow, Tw, Rw, Lw, Bw, Nw, Mw, Fw, Dw, zw, jw],
  Uw = { class: "trenings-section", style: { "margin-top": "25px" } },
  Ww = { key: 0 },
  Yw = P(
    "div",
    { class: "lds-ring" },
    [P("div"), P("div"), P("div"), P("div")],
    -1
  ),
  Gw = [Yw],
  Kw = { key: 1 },
  qw = { key: 0 },
  Xw = { class: "trenings-collapse" },
  Jw = { key: 1, class: "no-results-card" },
  Zw = P(
    "div",
    { class: "no-results-card-container" },
    [P("p", null, "Niestety, nie prowadzimy aktualnie takich zaj\u0119\u0107")],
    -1
  ),
  Qw = [Zw];
function eS(e, t, n, a, l, r) {
  const i = ct("font-awesome-icon"),
    o = ct("v-expansion-panel-title"),
    s = ct("v-expansion-panel-text"),
    c = ct("v-expansion-panel"),
    u = ct("v-expansion-panels"),
    d = ct("Workout");
  return (
    Ae(),
    Ee("div", null, [
      P("div", null, [
        P("div", null, [
          m(
            u,
            {
              class: "panels-wrapper",
              "expand-icon": "$expand",
              theme: "dark",
            },
            {
              default: en(() => [
                m(c, null, {
                  default: en(() => [
                    m(
                      o,
                      { class: "panel-title" },
                      {
                        default: en(() => [
                          Vx,
                          P("div", null, [
                            $x,
                            m(i, {
                              icon: "fa-solid fa-filter",
                              class: "icon-left",
                            }),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                    m(s, null, {
                      default: en(() => [
                        P("div", Ix, [
                          P("div", Px, [
                            P("div", null, [
                              Le(
                                P(
                                  "select",
                                  {
                                    name: "grupa",
                                    id: "group",
                                    "onUpdate:modelValue":
                                      t[0] || (t[0] = (f) => (this.fGroup = f)),
                                  },
                                  [
                                    Ox,
                                    Tx,
                                    (Ae(!0),
                                    Ee(
                                      xe,
                                      null,
                                      Ul(
                                        l.avalibleGroups,
                                        (f) => (
                                          Ae(),
                                          Ee(
                                            "option",
                                            { value: f, key: f.id },
                                            qe(f),
                                            9,
                                            Rx
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                    Lx,
                                  ],
                                  512
                                ),
                                [[ua, this.fGroup]]
                              ),
                            ]),
                            P("div", Bx, [
                              Le(
                                P(
                                  "select",
                                  {
                                    name: "level",
                                    id: "level",
                                    "onUpdate:modelValue":
                                      t[1] || (t[1] = (f) => (this.fLevel = f)),
                                  },
                                  jx,
                                  512
                                ),
                                [[ua, this.fLevel]]
                              ),
                            ]),
                            P("div", Hx, [
                              Le(
                                P(
                                  "select",
                                  {
                                    name: "age",
                                    id: "age",
                                    "onUpdate:modelValue":
                                      t[2] || (t[2] = (f) => (this.fAge = f)),
                                  },
                                  sw,
                                  512
                                ),
                                [[ua, this.fAge]]
                              ),
                            ]),
                            P("div", uw, [
                              Le(
                                P(
                                  "select",
                                  {
                                    name: "city",
                                    id: "city",
                                    "onUpdate:modelValue":
                                      t[3] || (t[3] = (f) => (this.fCity = f)),
                                  },
                                  [
                                    cw,
                                    dw,
                                    (Ae(!0),
                                    Ee(
                                      xe,
                                      null,
                                      Ul(
                                        r.uniqueCity,
                                        (f) => (
                                          Ae(),
                                          Ee(
                                            "option",
                                            { value: f, key: f.id },
                                            qe(f),
                                            9,
                                            fw
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  512
                                ),
                                [[ua, this.fCity]]
                              ),
                            ]),
                            P("div", vw, [
                              Le(
                                P(
                                  "select",
                                  {
                                    name: "szkola",
                                    id: "szkola",
                                    "onUpdate:modelValue":
                                      t[4] ||
                                      (t[4] = (f) => (this.fSzkola = f)),
                                  },
                                  [
                                    mw,
                                    hw,
                                    (Ae(!0),
                                    Ee(
                                      xe,
                                      null,
                                      Ul(
                                        r.uniqueLocation,
                                        (f) => (
                                          Ae(),
                                          Ee(
                                            "option",
                                            { value: f, key: f.id },
                                            qe(f),
                                            9,
                                            gw
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  512
                                ),
                                [[ua, this.fSzkola]]
                              ),
                            ]),
                            P("div", pw, [
                              Le(
                                P(
                                  "select",
                                  {
                                    name: "day",
                                    id: "day",
                                    "onUpdate:modelValue":
                                      t[5] || (t[5] = (f) => (this.fDay = f)),
                                  },
                                  Ew,
                                  512
                                ),
                                [[ua, this.fDay]]
                              ),
                            ]),
                            P("div", Vw, [
                              Le(
                                P(
                                  "select",
                                  {
                                    name: "hour",
                                    id: "hour",
                                    "onUpdate:modelValue":
                                      t[6] || (t[6] = (f) => (this.fHour = f)),
                                  },
                                  Hw,
                                  512
                                ),
                                [[ua, this.fHour]]
                              ),
                            ]),
                            P(
                              "button",
                              {
                                class: "reset-btn",
                                onClick: t[7] || (t[7] = (f) => r.reset()),
                              },
                              "Wyczy\u015B\u0107"
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          ),
        ]),
      ]),
      P("div", Uw, [
        l.isLoaded
          ? (Ae(),
            Ee("div", Kw, [
              r.filterWorkouts.length > 0
                ? (Ae(),
                  Ee("div", qw, [
                    P("div", Xw, [
                      (Ae(!0),
                      Ee(
                        xe,
                        null,
                        Ul(
                          r.filterWorkouts,
                          (f, v) => (
                            Ae(),
                            Ee("div", { key: f.id }, [
                              m(
                                d,
                                {
                                  trening: f,
                                  treningsDesc: e.treningsDesc,
                                  class: Hi({
                                    trMainContainerSecondBgcolor0: v % 2 == 0,
                                  }),
                                },
                                null,
                                8,
                                ["trening", "treningsDesc", "class"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ]))
                : (Ae(), Ee("div", Jw, Qw)),
            ]))
          : (Ae(), Ee("div", Ww, Gw)),
      ]),
    ])
  );
}
var tS = Ra(Ex, [["render", eS]]);
const nS = {},
  aS = (e) => (wu("data-v-49b45111"), (e = e()), Su(), e),
  lS = { class: "main-container-header" },
  rS = aS(() => P("p", null, "WYSZUKAJ ZAJ\u0118CIA", -1)),
  iS = [rS];
function oS(e, t, n, a, l, r) {
  return Ae(), Ee("div", lS, iS);
}
var sS = Ra(nS, [
    ["render", oS],
    ["__scopeId", "data-v-49b45111"],
  ]),
  uS =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAsCAYAAABYMvmrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAINSURBVHgBXVTLcdRAEO03FgduSwY4BJMRGZAJIRACEAFEQMEFuLFVyxmzJ7tK0jz3d2a9U6uRtqc/r99rSUQX/8hrnvCFf+VfP4E8yccHtdkZ+EsfXuIbRQ5SiwJA7h8f+Gbhgvey4hB2QTrY79WLG/mA7ecN3WynsL3+6UY5L7JVEDNz+Da44bBwi1h4gMPyPF2oRlAzNJBSXuzEcNNnLH21omHs6cSu3Vm82h0Dqzm1jk4iQBauYDTeCsSzpSANHyQxkgRmjsig0XRAs4fYGQ6S0IKiwDC5ugQ54IWftU8MJiWYw2hXkCXKoehPLClqgFRalL9W6NyJ6WJaOJNdMmczBFHP7p6h2Mu6EFcnhB1dNM99MRkJPUG6Poj2JOonLwFSME6v9YgSo6TU3Ax9nGovXWVdLMYMOg9jJi8XxpYYZOqgkXSB4z7aHPoNPiuDMUn1b8ESi82gVkFuLRSa3EA2JhUtByaycVKevFoJrC4lKEVVtI0aub5lbkeJZ61axkVWBzycELRKT2k9Q41X8Hw19jmTqWIecjLjVFNmCvjoVhf2bq6X6X2o8j3AHBjKHCNeKRZqRg3ncxwz2BhqMj8NkzC4zXi4ty9agEBqMhM12dsPa9Uox6Y9GHEG3O4bPrdd9rfq8N8I88sOdQRkx7k/7u/a7ffjse/7nRo/WbQ6n/X62rf97vb38fgEEmthBr2K5YgAAAAASUVORK5CYII=",
  cS =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAsCAYAAABYMvmrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIqSURBVHgBVVQtc1RBEJy+t0Uh7yQuDgkVi8Hi4CfwD8AhI3FYXDQqFL8BEQXFP4hDJnGEe7ud+dp9e6+ubt/tzkz3dM8eRJ+ri79nC8olBS+EPEDke5X147uLZze4+qSHT8ovEe5lezQGt/X/el5KwRepdZ/bsIX0X4dlkcsilW+nNDtCrvb2sqC1OOVUQ8noo4XavuwqSUSWl0YWaoKdgEUa9ZCGqytonwS0KBTUFpxpeYwgPQgUEa3Qkroh+yuCTFQKDn13YspsyyoAgcjgHySjDETbZJZ3fGPfoTy+yNqSvkyF86G2CTZLzsOR6FVIb9O22+g76jB6VPpDahOWISEw9eJCoctnWHTJhl+hpEspbg/UAeZhQtAxs23drBoIJoKb5W+QHcML6asnJgfbrG5vZPZ5SbOYJEIAyvyUtdbZJEhC9MnRgDUCpkns82lIGnDs9E9s6IZmBWxnfXByLWurW/IYx+07Kpgwu2zP+O10aWFoOTqEsmgdHPChyRKlRkDazRycnPPooqa0vU+c8FGIYxo1TZq7GoOjEJWbm5CuNfMul2NbR6qhErNa2Wa4Gbcq/T4NkO2vQfIC99EbATHl4gAIAknSAji7sTFA6NBOheo+BSkwB8YbUwy7oLYO0RViXW818DDKjsEJYLP7j/5ZvUa/WxllIGrwD73dD+8rlt+6sc+xTa1w/8D6Ybn+9/Pu/Omrb431rLX6vJH3GnStjr/5evf55hE1JW7UfLsKIwAAAABJRU5ErkJggg==",
  dS =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAsCAYAAABYMvmrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIbSURBVHgBZZQ9jhRBDIX9mk7IZm8wGSESEofgGHsDuAcSKdnEZHAHAiIkbjA32BkJabVSVXvtZ7urZrc1NT9ll/382TUQf056lFVPovLeft3Z+in96Yvcvz1DTo9HyPpXRQ7uC1uqCix40Mf2YZWObyI9jQpViadbpFVOkO//zd2P2QtQOvEXn6tF6IyrPEoPNyO+6mGVrbsNHj81ZBql04reEafjlJYI+25hsUprVC4hAwgnZEESGlKjb2oaQooant41Q2ZyrcN8Nw0NEYFmlin7g0jhRnheJA7ZZVkKFwlgnBlGP+hlMv+c23I5XXg6BxUGjUyRRxnUmRiHvgd3MhWmmhER2B+RhVplAu8OJjJ3oJSIEatIzsqDZrXdqijUQZkI8jM2zaFJRmdkLJFfB+pNZIazjRq0NHAGEAMhNXwERg2N6Ip2CdYczRgYkF4in3pCkuzmsPlJRHPJnSShk0xNJRwNqV6Ed413Xi/uFyjoC5KlKaq4IUlBbBqCwxZ1MwWmOvdmNVRhZL3bKMQvTmeEnKXqi1Q6L3Ma0oFknyi7F4EVOad7m8LNb9Z0o2VMbsgRjn1e7r2aQTREVka8blZOdYxQTtUsl6hbu0F8e3mtm9r6g0W+q7BxowbKBVv/x4b5/4Qtu8zq/dHe1BD8Wmzv3gwXW+DylF76tl1N/+c3cvl90cPHH0vXo27bO0twNSh/OtonOX89PwNhi3dR45FejAAAAABJRU5ErkJggg==",
  fS =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAsCAYAAABYMvmrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgBVVS7cVtBDMTe4RJHZAfswJ/MHTh06NAtuBKXoNSZ7cyZQ2XSqAN1QGVvNEM+CL/78Mjh54DbXSxwD6Tr2/2XEwN3IvSeQEch+rOL/Pj1+d8zvmtQSnsQ0IFIQ5qhX/pB57LXT1z43U/dOZAvgBTGw0RHVLpjpvrVN+KwnoVBSBygD6wQEYHjIo+DoEmCA9fCGoO+DUOTBJ5hRCgi3NByQ1M8L5YdMDiupBQlRRhL6aWYYlBqiLDv9BpyuYYgzEqi3FEWs2pIWUYgkjgdRn3gsMfCFoA7BZkU1SJYmNdfYhRxdIhfDFc+bulkiAgBU7MohSIsuJ40mFSJUnA2OEvogtMdReCOl1VE47onrmGWuGAjeuMIeVKCIr9drFbhGvpmcX/SpGm1j8fg3yVSUph302UjJ6lqVOZYTA2zwz41QJTiGm7WbDuimz1hDARyMGNqVUNzz7MsWtqKSRHtxzJSXbh4Qi+Kbp0MH6q1W9JJitthfzqc3QuRLGycn733bgbYsGYWZcDmpPeBYjLjAi+GOUKvrDdt9e2mm36+rLd/OjlkuoNzzMmdpH5XPISVAmmUhISCUUi4lVbLzchNCW51zes/ng2SeiZFO2v0KDn6naYTFUZ9sqlqpUmrTcw4o1Xxok+fv9hkO5W9PMazEuNRoOvl+nr96GCWdNkvv3e57vo673L5v23byWJvsh4CEOoTZEAAAAAASUVORK5CYII=";
const vS = {
    data() {
      return {};
    },
    components: { Trening2: tS, MainHeader: sS },
  },
  Wm = (e) => (wu("data-v-17e8c858"), (e = e()), Su(), e),
  mS = Wm(() =>
    P("a", { href: "#", class: "btn-back" }, "Strona g\u0142\xF3wna", -1)
  ),
  hS = Je("Informacje o grupach"),
  gS = Je("Rozwi\u0144"),
  pS = Wm(() =>
    P(
      "div",
      { class: "panel-content__container" },
      [
        P("div", { class: "expansion-groups" }, [
          P("div", null, [P("img", { src: uS, alt: "", srcset: "" })]),
          P("div", { class: "expansion-content" }, [
            P("p", null, [
              P("b", null, "Z\xD3\u0141TA"),
              Je(" - JUNIOR - 2-3 LAT - 1x TYG"),
            ]),
            P("p", null, [
              P("b", null, "POMARA\u0143CZOWA"),
              Je(" - JUNIOR - 4-5 LAT - 1x TYG"),
            ]),
            P("p", null, [
              P("b", null, "CZERWONA"),
              Je(" - JUNIOR - 5-6 LAT - 1x TYG"),
            ]),
          ]),
        ]),
        P("div", { class: "expansion-groups" }, [
          P("div", null, [P("img", { src: cS, alt: "", srcset: "" })]),
          P("div", { class: "expansion-content" }, [
            P("p", null, [
              P("b", null, "LAWENDOWA"),
              Je(" - KOKARTKA - 7-10 LAT - 1x TYG"),
            ]),
            P("p", null, [
              P("b", null, "R\xD3\u017BOWA"),
              Je(" - KOKARTKA - 7-10 LAT - 2x TYG"),
            ]),
            P("p", null, [
              P("b", null, "FIOLETOWA"),
              Je(" - KOKARTKA - 10-14 LAT - 2x TYG"),
            ]),
          ]),
        ]),
        P("div", { class: "expansion-groups" }, [
          P("div", null, [P("img", { src: dS, alt: "", srcset: "" })]),
          P("div", { class: "expansion-content" }, [
            P("p", null, [
              P("b", null, "NIEBIESKA"),
              Je(" - MUCHA - 7-14 LAT - 1x TYG"),
            ]),
            P("p", null, [
              P("b", null, "GRANATOWA"),
              Je(" - MUCHA - 7-14 LAT - 2x TYG"),
            ]),
          ]),
        ]),
        P("div", { class: "expansion-groups" }, [
          P("div", null, [P("img", { src: fS, alt: "", srcset: "" })]),
          P("div", { class: "expansion-content" }, [
            P("p", null, [P("b", null, "ZIELONA"), Je(" - DORO\u015ALI")]),
            P("p", null, [
              P("b", null, "KADRA"),
              Je(" - KADRA - GRUPY ZAWODNICZE - 5-16 LAT - 3x TYG"),
            ]),
          ]),
        ]),
      ],
      -1
    )
  );
function yS(e, t, n, a, l, r) {
  const i = ct("MainHeader"),
    o = ct("font-awesome-icon"),
    s = ct("v-expansion-panel-title"),
    c = ct("v-expansion-panel-text"),
    u = ct("v-expansion-panel"),
    d = ct("v-expansion-panels"),
    f = ct("Trening2");
  return (
    Ae(),
    Ee("div", null, [
      mS,
      P("div", null, [m(i)]),
      m(
        d,
        { class: "panels-wrapper", "expand-icon": "$expand", theme: "dark" },
        {
          default: en(() => [
            m(u, null, {
              default: en(() => [
                m(
                  s,
                  { class: "panel-title" },
                  {
                    default: en(() => [
                      P("div", null, [
                        m(o, {
                          icon: "fa-solid fa-arrow-down",
                          class: "icon-right",
                        }),
                        hS,
                      ]),
                      P("div", null, [
                        gS,
                        m(o, {
                          icon: "fa-solid fa-arrow-down",
                          class: "icon-left",
                        }),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                m(c, null, { default: en(() => [pS]), _: 1 }),
              ]),
              _: 1,
            }),
          ]),
          _: 1,
        }
      ),
      m(f),
    ])
  );
}
var bS = Ra(vS, [
  ["render", yS],
  ["__scopeId", "data-v-17e8c858"],
]);
const ju = {
    data() {
      return {
        url:
          "https://kokartka.info/zapisy/api/workouts/" + this.$route.params.id,
        desc: {},
        payments: {},
        links: {},
        dates: {},
        daysArr: [],
        level: "",
        day: "",
        days: [
          "Niedziela",
          "Poniedzia\u0142ek",
          "Wtorek",
          "\u015Aroda",
          "Czwartek",
          "Pi\u0105tek",
          "Sobota",
        ],
        hour: "",
        address: "",
        duration: "",
        group: "",
        brand: "",
        participants: 0,
        participantsMax: 0,
        participantsCurrent: 0,
        height: "24px",
        width: 0,
        kokartaKolor: "#D1519D",
        muchaKolor: "#2CA9E0",
        kadraKolor: "#C800D6",
        juniorKolor: "#F97C16",
        chosenColor: "",
        moneyArr: [],
        moneyAmount: 0,
        pathToBgPhoto: "",
        imgSrc: "",
      };
    },
    mounted() {
      Ss.get(this.url).then((e) => {
        (this.desc = e.data),
          (this.payments = e.data.payments),
          (this.links = e.data.links),
          (this.date = e.data.dates[0]),
          (this.daysArr = e.data.dates),
          (this.day = this.date ? this.days[this.date.day] : ""),
          (this.hour = this.date.hour),
          (this.duration = this.date.duration / 60 / 60),
          (this.participants = e.data.participants),
          (this.participantsMax = this.participants.max),
          (this.participantsCurrent = this.participants.current),
          (this.width =
            (this.participantsCurrent / this.participantsMax) * 100),
          (this.moneyArr = e.data.payments.amount),
          (this.moneyAmount = e.data.payments.amount.amount);
      }),
        Ss.get("https://kokartka.info/zapisy/api/workoutss").then((e) => {
          const t = e.data;
          for (let n = 0; n < t.length; n++)
            t[n].id == this.$route.params.id &&
              ((this.group = t[n].group),
              (this.brand = t[n].brand),
              (this.address = t[n].location_address.street),
              (this.city = t[n].location_address.city),
              (this.pathToBgPhoto = `./assets/${t[n].brand}.png`),
              (this.imgSrc = `./assets/${t[n].brand}-img.png`),
              t[n].level == "beginner" && (this.level = "Podstawowy"),
              t[n].level == "advanced" && (this.level = "Zaawansowany"),
              t[n].level == "beginner_older" &&
                (this.level = "Starszy podstawowy"),
              t[n].brand.includes("kokartka")
                ? (this.chosenColor = this.kokartaKolor)
                : t[n].brand.includes("mucha")
                ? (this.chosenColor = this.muchaKolor)
                : t[n].brand.includes("pro")
                ? (this.chosenColor = this.kadraKolor)
                : t[n].brand.includes("junior") &&
                  (this.chosenColor = this.juniorKolor));
        });
    },
  },
  Yd = () => {
    t0((e) => ({ "12354e4e": e.chosenColor }));
  },
  Gd = ju.setup;
ju.setup = Gd ? (e, t) => (Yd(), Gd(e, t)) : Yd;
const _S = ju,
  xn = (e) => (wu("data-v-71830a40"), (e = e()), Su(), e),
  xS = { class: "main-cont-workdesc" },
  wS = xn(() => P("p", null, " Wr\xF3c do wyszukiwarki", -1)),
  SS = { class: "desc-main-container" },
  CS = { class: "workout-desc" },
  kS = { class: "box desc-html" },
  AS = xn(() => P("h2", { class: "title" }, "Opis Zaj\u0119\u0107:", -1)),
  ES = ["innerHTML"],
  VS = { class: "wokrout-schedule" },
  $S = { class: "box" },
  IS = xn(() => P("h2", { class: "title" }, "Termin zaj\u0119\u0107", -1)),
  PS = xn(() => P("div", { class: "group" }, null, -1)),
  OS = { class: "duration" },
  TS = { class: "box" },
  RS = xn(() => P("h2", null, "Poziom", -1)),
  LS = { class: "participants box" },
  BS = xn(() => P("h2", null, "Ilo\u015B\u0107 wolnych miejsc:", -1)),
  NS = { class: "participants-cont" },
  MS = xn(() => P("p", { class: "participants-cont-bg" }, null, -1)),
  FS = { class: "participants-ratio" },
  DS = { class: "participants-ratio-label" },
  zS = { class: "workout-payments" },
  jS = { class: "img-box" },
  HS = ["src"],
  US = { key: 0, class: "signup" },
  WS = { key: 0 },
  YS = ["href"],
  GS = Je(" Zapisz si\u0119 na zaj\u0119cia "),
  KS = { key: 1, class: "zapis-btn-desc" },
  qS = { key: 1 },
  XS = xn(() => P("div", { class: "workoutFull" }, "Brak wolnych miejsc", -1)),
  JS = [XS],
  ZS = { class: "btn-container" },
  QS = { href: "tel:794294259" },
  eC = xn(() =>
    P(
      "p",
      null,
      [Je("Zadzwo\u0144 ju\u017C teraz: "), P("b", null, "+48 794 294 259")],
      -1
    )
  ),
  tC = { href: "mailto:biuro@kokartka.info" },
  nC = xn(() =>
    P(
      "p",
      null,
      [Je("Napisz od nas: "), P("b", null, "biuro@kokartka.info")],
      -1
    )
  );
function aC(e, t, n, a, l, r) {
  const i = ct("font-awesome-icon"),
    o = ct("router-link");
  return (
    Ae(),
    Ee("div", xS, [
      P("div", null, [
        m(
          o,
          { class: "btn-back", to: "/" },
          {
            default: en(() => [
              m(i, {
                icon: "fa-solid fa-angle-left",
                style: { "padding-right": "5px" },
              }),
              wS,
            ]),
            _: 1,
          }
        ),
        P(
          "div",
          {
            class: "header",
            style: ul({ backgroundImage: "url(" + l.pathToBgPhoto + ")" }),
          },
          qe(l.brand),
          5
        ),
      ]),
      P("div", SS, [
        P("div", CS, [
          P("div", kS, [
            AS,
            P("div", { innerHTML: l.desc.description }, null, 8, ES),
          ]),
        ]),
        P("div", VS, [
          P("div", $S, [
            IS,
            PS,
            (Ae(!0),
            Ee(
              xe,
              null,
              Ul(
                l.daysArr,
                (s) => (
                  Ae(),
                  Ee("div", { key: s.hour }, [
                    P("div", null, qe(l.days[s.day]) + ": " + qe(s.hour), 1),
                  ])
                )
              ),
              128
            )),
            P("div", OS, "Czas trwania: " + qe(l.duration) + " Godzina", 1),
          ]),
          P("div", TS, [RS, P("p", null, qe(l.level), 1)]),
          P("div", LS, [
            BS,
            P("div", NS, [
              P(
                "div",
                {
                  class: "progress-bar",
                  style: ul({ width: l.width + "%", height: l.height }),
                },
                null,
                4
              ),
              MS,
              P("div", FS, [
                P(
                  "p",
                  DS,
                  qe(l.participantsCurrent) + " / " + qe(l.participantsMax),
                  1
                ),
              ]),
            ]),
          ]),
        ]),
        P("div", zS, [
          P("div", jS, [P("img", { src: l.imgSrc }, null, 8, HS)]),
          l.participantsCurrent < l.participantsMax
            ? (Ae(),
              Ee("div", US, [
                l.links.registration
                  ? (Ae(),
                    Ee("div", WS, [
                      P(
                        "a",
                        {
                          href: l.links.registration,
                          class: "zapis-btn-desc",
                          target: "_blank",
                        },
                        [
                          GS,
                          m(i, { icon: ["fas", "check"], class: "fa-icon" }),
                        ],
                        8,
                        YS
                      ),
                    ]))
                  : (Ae(), Ee("div", KS, " Zapisy ju\u017C wkr\xF3tce! ")),
              ]))
            : zt("", !0),
          l.participantsCurrent >= l.participantsMax
            ? (Ae(), Ee("div", qS, JS))
            : zt("", !0),
        ]),
      ]),
      P("div", ZS, [
        P("a", QS, [
          m(i, { icon: "fa-solid fa-phone", class: "icon-right" }),
          eC,
        ]),
        P("a", tC, [
          m(i, { icon: "fa-solid fa-envelope", class: "icon-right" }),
          nC,
        ]),
      ]),
    ])
  );
}
var lC = Ra(_S, [
  ["render", aC],
  ["__scopeId", "data-v-71830a40"],
]);
const rC = j_({
  history: a_("/"),
  routes: [
    { path: "/opis/:id", component: lC, props: !0 },
    { path: "/", component: bS },
  ],
});
function Kd(e, t, n) {
  iC(e, t), t.set(e, n);
}
function iC(e, t) {
  if (t.has(e))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function oC(e, t, n) {
  var a = Ym(e, t, "set");
  return sC(e, a, n), n;
}
function sC(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function ca(e, t) {
  var n = Ym(e, t, "get");
  return uC(e, n);
}
function Ym(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function uC(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Gm(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function Pr(e, t) {
  if (e === t) return !0;
  if (
    (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime()) ||
    e !== Object(e) ||
    t !== Object(t)
  )
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length
    ? !1
    : n.every((a) => Pr(e[a], t[a]));
}
function Es(e, t, n) {
  return e == null || !t || typeof t != "string"
    ? n
    : e[t] !== void 0
    ? e[t]
    : ((t = t.replace(/\[(\w+)\]/g, ".$1")),
      (t = t.replace(/^\./, "")),
      Gm(e, t.split("."), n));
}
function mn(e, t, n) {
  if (t == null) return e === void 0 ? n : e;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l == "undefined" ? n : l;
  }
  if (typeof t == "string") return Es(e, t, n);
  if (Array.isArray(t)) return Gm(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a == "undefined" ? n : a;
}
function pa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function ae(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Vs(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function cC(e) {
  return e == null ? void 0 : e.$el;
}
const qd = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16,
  }),
  $s = Object.freeze({
    enter: "Enter",
    tab: "Tab",
    delete: "Delete",
    esc: "Escape",
    space: "Space",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    end: "End",
    home: "Home",
    del: "Delete",
    backspace: "Backspace",
    insert: "Insert",
    pageup: "PageUp",
    pagedown: "PageDown",
    shift: "Shift",
  });
function Km(e) {
  return Object.keys(e);
}
function Lt(e, t) {
  const n = Object.create(null),
    a = Object.create(null);
  for (const l in e)
    t.some((r) => (r instanceof RegExp ? r.test(l) : r === l))
      ? (n[l] = e[l])
      : (a[l] = e[l]);
  return [n, a];
}
function La(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
function Ba(e) {
  return Lt(e, ["class", "style", "id", /^data-/]);
}
function Ut(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Pt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Wo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function dC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), (a += t);
  return n;
}
function Xd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t) return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; ) (e /= t), ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function In() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e) a[l] = e[l];
  for (const l in t) {
    const r = e[l],
      i = t[l];
    if (Vs(r) && Vs(i)) {
      a[l] = In(r, i, n);
      continue;
    }
    if (Array.isArray(r) && Array.isArray(i) && n) {
      a[l] = n(r, i);
      continue;
    }
    a[l] = i;
  }
  return a;
}
function qm(e) {
  return e.map((t) => (t.type === xe ? qm(t.children) : t)).flat();
}
function fo() {
  return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "")
    .replace(/[^a-z]/gi, "-")
    .replace(/\B([A-Z])/g, "-$1")
    .toLowerCase();
}
function er(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => er(e, n)).flat(1);
  if (Array.isArray(t.children)) return t.children.map((n) => er(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree) return er(e, t.component.subTree).flat(1);
  }
  return [];
}
var qr = new WeakMap(),
  Ka = new WeakMap();
class fC {
  constructor(t) {
    Kd(this, qr, { writable: !0, value: [] }),
      Kd(this, Ka, { writable: !0, value: 0 }),
      (this.size = t);
  }
  push(t) {
    (ca(this, qr)[ca(this, Ka)] = t),
      oC(this, Ka, (ca(this, Ka) + 1) % this.size);
  }
  values() {
    return ca(this, qr)
      .slice(ca(this, Ka))
      .concat(ca(this, qr).slice(0, ca(this, Ka)));
  }
}
function vC(e) {
  return "touches" in e
    ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }
    : { clientX: e.clientX, clientY: e.clientY };
}
function Hu(e) {
  const t = vt({}),
    n = b(e);
  return (
    bn(
      () => {
        for (const a in n.value) t[a] = n.value[a];
      },
      { flush: "sync" }
    ),
    _u(t)
  );
}
function $i(e, t) {
  return e.includes(t);
}
const mC = /^on[^a-z]/,
  Xm = (e) => mC.test(e),
  ka = [Function, Array];
function Jd(e, t) {
  return (
    (t = "on" + Ln(t)),
    !!(
      e[t] ||
      e[`${t}Once`] ||
      e[`${t}Capture`] ||
      e[`${t}OnceCapture`] ||
      e[`${t}CaptureOnce`]
    )
  );
}
function Ii(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
    a < t;
    a++
  )
    n[a - 1] = arguments[a];
  if (Array.isArray(e)) for (const l of e) l(...n);
  else typeof e == "function" && e(...n);
}
const Jm = ["top", "bottom"],
  hC = ["start", "end", "left", "right"];
function Is(e, t) {
  let [n, a] = e.split(" ");
  return (
    a || (a = $i(Jm, n) ? "start" : $i(hC, n) ? "top" : "center"),
    { side: Ps(n, t), align: Ps(a, t) }
  );
}
function Ps(e, t) {
  return e === "start"
    ? t
      ? "right"
      : "left"
    : e === "end"
    ? t
      ? "left"
      : "right"
    : e;
}
function Yo(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    }[e.side],
    align: e.align,
  };
}
function Go(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    }[e.align],
  };
}
function Zd(e) {
  return { side: e.align, align: e.side };
}
function Qd(e) {
  return $i(Jm, e.side) ? "y" : "x";
}
class ol {
  constructor(t) {
    let { x: n, y: a, width: l, height: r } = t;
    (this.x = n), (this.y = a), (this.width = l), (this.height = r);
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function ef(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right),
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom),
    },
  };
}
function Uu(e) {
  const t = e.getBoundingClientRect(),
    n = getComputedStyle(e),
    a = n.transform;
  if (a) {
    let l, r, i, o, s;
    if (a.startsWith("matrix3d("))
      (l = a.slice(9, -1).split(/, /)),
        (r = +l[0]),
        (i = +l[5]),
        (o = +l[12]),
        (s = +l[13]);
    else if (a.startsWith("matrix("))
      (l = a.slice(7, -1).split(/, /)),
        (r = +l[0]),
        (i = +l[3]),
        (o = +l[4]),
        (s = +l[5]);
    else return new ol(t);
    const c = n.transformOrigin,
      u = t.x - o - (1 - r) * parseFloat(c),
      d = t.y - s - (1 - i) * parseFloat(c.slice(c.indexOf(" ") + 1)),
      f = r ? t.width / r : e.offsetWidth + 1,
      v = i ? t.height / i : e.offsetHeight + 1;
    return new ol({ x: u, y: d, width: f, height: v });
  } else return new ol(t);
}
function ya(e, t, n) {
  if (typeof e.animate == "undefined") return { finished: Promise.resolve() };
  const a = e.animate(t, n);
  return (
    typeof a.finished == "undefined" &&
      (a.finished = new Promise((l) => {
        a.onfinish = () => {
          l(a);
        };
      })),
    a
  );
}
function Zm(e, t, n) {
  if ((n && (t = { _isVue: !0, $parent: n, $options: t }), t)) {
    if (
      ((t.$_alreadyWarned = t.$_alreadyWarned || []),
      t.$_alreadyWarned.includes(e))
    )
      return;
    t.$_alreadyWarned.push(e);
  }
  return `[Vuetify] ${e}` + (t ? yC(t) : "");
}
function Aa(e, t, n) {
  const a = Zm(e, t, n);
  a != null && console.warn(a);
}
function Os(e, t, n) {
  const a = Zm(e, t, n);
  a != null && console.error(a);
}
const gC = /(?:^|[-_])(\w)/g,
  pC = (e) => e.replace(gC, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ko(e, t) {
  if (e.$root === e) return "<Root>";
  const n =
    typeof e == "function" && e.cid != null
      ? e.options
      : e._isVue
      ? e.$options || e.constructor.options
      : e || {};
  let a = n.name || n._componentTag;
  const l = n.__file;
  if (!a && l) {
    const r = l.match(/([^/\\]+)\.vue$/);
    a = r == null ? void 0 : r[1];
  }
  return (a ? `<${pC(a)}>` : "<Anonymous>") + (l && t !== !1 ? ` at ${l}` : "");
}
function yC(e) {
  if (e._isVue && e.$parent) {
    const t = [];
    let n = 0;
    for (; e; ) {
      if (t.length > 0) {
        const a = t[t.length - 1];
        if (a.constructor === e.constructor) {
          n++, (e = e.$parent);
          continue;
        } else n > 0 && ((t[t.length - 1] = [a, n]), (n = 0));
      }
      t.push(e), (e = e.$parent);
    }
    return (
      `

found in

` +
      t.map(
        (a, l) =>
          `${l === 0 ? "---> " : " ".repeat(5 + l * 2)}${
            Array.isArray(a)
              ? `${Ko(a[0])}... (${a[1]} recursive calls)`
              : Ko(a)
          }`
      ).join(`
`)
    );
  } else
    return `

(found in ${Ko(e)})`;
}
const bC = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.204, 1.057],
  ],
  _C = (e) => (e <= 0.0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055),
  xC = [
    [0.4124, 0.3576, 0.1805],
    [0.2126, 0.7152, 0.0722],
    [0.0193, 0.1192, 0.9505],
  ],
  wC = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
function Qm(e) {
  const t = Array(3),
    n = _C,
    a = bC;
  for (let l = 0; l < 3; ++l)
    t[l] = Math.round(
      Pt(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255
    );
  return { r: t[0], g: t[1], b: t[2] };
}
function Wu(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0],
    r = wC,
    i = xC;
  (t = r(t / 255)), (n = r(n / 255)), (a = r(a / 255));
  for (let o = 0; o < 3; ++o) l[o] = i[o][0] * t + i[o][1] * n + i[o][2] * a;
  return l;
}
const Pi = 0.20689655172413793,
  SC = (e) => (e > Pi ** 3 ? Math.cbrt(e) : e / (3 * Pi ** 2) + 4 / 29),
  CC = (e) => (e > Pi ? e ** 3 : 3 * Pi ** 2 * (e - 4 / 29));
function eh(e) {
  const t = SC,
    n = t(e[1]);
  return [
    116 * n - 16,
    500 * (t(e[0] / 0.95047) - n),
    200 * (n - t(e[2] / 1.08883)),
  ];
}
function th(e) {
  const t = CC,
    n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
function tf(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function ha(e) {
  if (typeof e == "number")
    return (
      (isNaN(e) || e < 0 || e > 16777215) &&
        Aa(`'${e}' is not a valid hex color`),
      { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 }
    );
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length)
      ? (t = t
          .split("")
          .map((a) => a + a)
          .join(""))
      : [6, 8].includes(t.length) || Aa(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (
      (isNaN(n) || n < 0 || n > 4294967295) &&
        Aa(`'${e}' is not a valid hex(a) color`),
      ih(t)
    );
  } else
    throw new TypeError(
      `Colors can only be numbers or strings, recieved ${
        e == null ? e : e.constructor.name
      } instead`
    );
}
function vo(e) {
  const { h: t, s: n, v: a, a: l } = e,
    r = (o) => {
      const s = (o + t / 60) % 6;
      return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
    },
    i = [r(5), r(3), r(1)].map((o) => Math.round(o * 255));
  return { r: i[0], g: i[1], b: i[2], a: l };
}
function Yu(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255,
    n = e.g / 255,
    a = e.b / 255,
    l = Math.max(t, n, a),
    r = Math.min(t, n, a);
  let i = 0;
  l !== r &&
    (l === t
      ? (i = 60 * (0 + (n - a) / (l - r)))
      : l === n
      ? (i = 60 * (2 + (a - t) / (l - r)))
      : l === a && (i = 60 * (4 + (t - n) / (l - r)))),
    i < 0 && (i = i + 360);
  const o = l === 0 ? 0 : (l - r) / l,
    s = [i, o, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function nh(e) {
  const { h: t, s: n, v: a, a: l } = e,
    r = a - (a * n) / 2,
    i = r === 1 || r === 0 ? 0 : (a - r) / Math.min(r, 1 - r);
  return { h: t, s: i, l: r, a: l };
}
function ah(e) {
  const { h: t, s: n, l: a, a: l } = e,
    r = a + n * Math.min(a, 1 - a),
    i = r === 0 ? 0 : 2 - (2 * a) / r;
  return { h: t, s: i, v: r, a: l };
}
function kC(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0
    ? `rgb(${t}, ${n}, ${a})`
    : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function lh(e) {
  return kC(vo(e));
}
function Xr(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function rh(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[
    Xr(t),
    Xr(n),
    Xr(a),
    l !== void 0 ? Xr(Math.round(l * 255)) : "FF",
  ].join("")}`;
}
function ih(e) {
  let [t, n, a, l] = dC(e, 2).map((r) => parseInt(r, 16));
  return (
    (l = l === void 0 ? l : Math.round((l / 255) * 100) / 100),
    { r: t, g: n, b: a, a: l }
  );
}
function oh(e) {
  const t = ih(e);
  return Yu(t);
}
function sh(e) {
  return rh(vo(e));
}
function AC(e) {
  return (
    e.startsWith("#") && (e = e.slice(1)),
    (e = e.replace(/([^0-9a-f])/gi, "F")),
    (e.length === 3 || e.length === 4) &&
      (e = e
        .split("")
        .map((t) => t + t)
        .join("")),
    e.length === 6 ? (e = Wo(e, 8, "F")) : (e = Wo(Wo(e, 6), 8, "F")),
    e
  );
}
function EC(e, t) {
  const n = eh(Wu(e));
  return (n[0] = n[0] + t * 10), Qm(th(n));
}
function VC(e, t) {
  const n = eh(Wu(e));
  return (n[0] = n[0] - t * 10), Qm(th(n));
}
function Ts(e) {
  const t = ha(e);
  return Wu(t)[1];
}
function $C(e, t) {
  const n = Ts(e),
    a = Ts(t),
    l = Math.max(n, a),
    r = Math.min(n, a);
  return (l + 0.05) / (r + 0.05);
}
function ht(e, t) {
  const n = Ir();
  if (!n)
    throw new Error(
      `[Vuetify] ${e} ${t || "must be called from inside a setup function"}`
    );
  return n;
}
function Nn() {
  let e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : "composables";
  const t = ht(e).type;
  return fo(
    (t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name)
  );
}
let uh = 0,
  gi = new WeakMap();
function pt() {
  const e = ht("getUid");
  if (gi.has(e)) return gi.get(e);
  {
    const t = uh++;
    return gi.set(e, t), t;
  }
}
pt.reset = () => {
  (uh = 0), (gi = new WeakMap());
};
function IC(e) {
  const { provides: t } = ht("injectSelf");
  if (t && e in t) return t[e];
}
function gl(e, t) {
  let n;
  ce(
    e,
    (a) => {
      if (a && !n) (n = Ki()), n.run(t);
      else if (!a) {
        var l;
        (l = n) == null || l.stop(), (n = void 0);
      }
    },
    { immediate: !0 }
  ),
    yn(() => {
      var a;
      (a = n) == null || a.stop();
    });
}
function ye(e, t) {
  return (n) =>
    Object.keys(e).reduce((a, l) => {
      const i =
        typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l])
          ? e[l]
          : { type: e[l] };
      return (
        n && l in n ? (a[l] = { ...i, default: n[l] }) : (a[l] = i),
        t && !a[l].source && (a[l].source = t),
        a
      );
    }, {});
}
function PC(e, t) {
  var n, a;
  return (
    ((n = e.props) == null ? void 0 : n.hasOwnProperty(t)) ||
    ((a = e.props) == null ? void 0 : a.hasOwnProperty(fo(t)))
  );
}
const Z = function (t) {
  var n, a;
  return (
    (t._setup = (n = t._setup) != null ? n : t.setup),
    t.name
      ? (t._setup &&
          ((t.props = (a = t.props) != null ? a : {}),
          (t.props = ye(t.props, fo(t.name))()),
          (t.props._as = String),
          (t.setup = function (r, i) {
            const o = Ir(),
              s = fh(),
              c = $v(),
              u = Cv({ ...Ve(r) });
            bn(() => {
              var h, p, w;
              const f = s.value.global,
                v = s.value[(h = r._as) != null ? h : t.name];
              if (v) {
                const g = Object.entries(v).filter((_) => {
                  let [y] = _;
                  return y.startsWith(y[0].toUpperCase());
                });
                g.length && (c.value = Object.fromEntries(g));
              }
              for (const g of Object.keys(r)) {
                let _ = r[g];
                PC(o.vnode, g) ||
                  (_ =
                    (w =
                      (p = v == null ? void 0 : v[g]) != null
                        ? p
                        : f == null
                        ? void 0
                        : f[g]) != null
                      ? w
                      : r[g]),
                  u[g] !== _ && (u[g] = _);
              }
            });
            const d = t._setup(u, i);
            return (
              gl(c, () => {
                var v;
                var f;
                it(
                  In(
                    (v = (f = IC(pr)) == null ? void 0 : f.value) != null
                      ? v
                      : {},
                    c.value
                  )
                );
              }),
              d
            );
          })),
        t)
      : (Aa(
          "The component is missing an explicit name, unable to generate default prop value"
        ),
        t)
  );
};
function je() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? Z : Oa)(t);
}
function Gt(e) {
  let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div",
    n = arguments.length > 2 ? arguments[2] : void 0;
  return Z({
    name: n != null ? n : Ln(Wt(e.replace(/__/g, "-"))),
    props: { tag: { type: String, default: t } },
    setup(a, l) {
      let { slots: r } = l;
      return () => {
        var i;
        return Yt(
          a.tag,
          { class: e },
          (i = r.default) == null ? void 0 : i.call(r)
        );
      };
    },
  });
}
function ch(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: !0 }) !== document
    ? null
    : t;
}
const gr = "cubic-bezier(0.4, 0, 0.2, 1)",
  OC = "cubic-bezier(0.0, 0, 0.2, 1)",
  TC = "cubic-bezier(0.4, 0, 1, 1)";
function dh(e) {
  for (; e; ) {
    if (Gu(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Oi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Gu(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function Gu(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return (
    t.overflowY === "scroll" ||
    (t.overflowY === "auto" && e.scrollHeight > e.clientHeight)
  );
}
const Xe = typeof window != "undefined",
  Ku = Xe && "IntersectionObserver" in window,
  RC = Xe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0),
  Rs =
    Xe && typeof CSS != "undefined" && CSS.supports("selector(:focus-visible)");
function LC(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return !0;
    e = e.offsetParent;
  }
  return !1;
}
function X(e) {
  const t = ht("useRender");
  t.render = e;
}
const pr = Symbol.for("vuetify:defaults");
function BC(e) {
  return B(e != null ? e : {});
}
function fh() {
  const e = Oe(pr);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function it(e, t) {
  const n = fh(),
    a = B(e),
    l = b(() => {
      const r = Ot(t == null ? void 0 : t.scoped),
        i = Ot(t == null ? void 0 : t.reset),
        o = Ot(t == null ? void 0 : t.root);
      let s = In(a.value, { prev: n.value });
      if (r) return s;
      if (i || o) {
        const c = Number(i || 1 / 0);
        for (let u = 0; u <= c && s.prev; u++) s = s.prev;
        return s;
      }
      return In(s.prev, s);
    });
  return Qe(pr, l), l;
}
const Ls = Symbol.for("vuetify:display"),
  nf = {
    mobileBreakpoint: "lg",
    thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 },
  },
  NC = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nf;
    return In(nf, e);
  };
function af(e) {
  return Xe && !e ? window.innerWidth : 0;
}
function lf(e) {
  return Xe && !e ? window.innerHeight : 0;
}
function MC() {
  const e = Xe ? window.navigator.userAgent : "ssr";
  function t(h) {
    return Boolean(e.match(h));
  }
  const n = t(/android/i),
    a = t(/iphone|ipad|ipod/i),
    l = t(/cordova/i),
    r = t(/electron/i),
    i = t(/chrome/i),
    o = t(/edge/i),
    s = t(/firefox/i),
    c = t(/opera/i),
    u = t(/win/i),
    d = t(/mac/i),
    f = t(/linux/i),
    v = t(/ssr/i);
  return {
    android: n,
    ios: a,
    cordova: l,
    electron: r,
    chrome: i,
    edge: o,
    firefox: s,
    opera: c,
    win: u,
    mac: d,
    linux: f,
    touch: RC,
    ssr: v,
  };
}
function FC(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = NC(e),
    l = B(lf(t)),
    r = MC(),
    i = vt({}),
    o = B(af(t));
  function s() {
    (l.value = lf()), (o.value = af());
  }
  return (
    bn(() => {
      const c = o.value < n.sm,
        u = o.value < n.md && !c,
        d = o.value < n.lg && !(u || c),
        f = o.value < n.xl && !(d || u || c),
        v = o.value < n.xxl && !(f || d || u || c),
        h = o.value >= n.xxl,
        p = c ? "xs" : u ? "sm" : d ? "md" : f ? "lg" : v ? "xl" : "xxl",
        w = typeof a == "number" ? a : n[a],
        g = r.ssr ? r.android || r.ios || r.opera : o.value < w;
      (i.xs = c),
        (i.sm = u),
        (i.md = d),
        (i.lg = f),
        (i.xl = v),
        (i.xxl = h),
        (i.smAndUp = !c),
        (i.mdAndUp = !(c || u)),
        (i.lgAndUp = !(c || u || d)),
        (i.xlAndUp = !(c || u || d || f)),
        (i.smAndDown = !(d || f || v || h)),
        (i.mdAndDown = !(f || v || h)),
        (i.lgAndDown = !(v || h)),
        (i.xlAndDown = !h),
        (i.name = p),
        (i.height = l.value),
        (i.width = o.value),
        (i.mobile = g),
        (i.mobileBreakpoint = a),
        (i.platform = r),
        (i.thresholds = n);
    }),
    Xe && window.addEventListener("resize", s, { passive: !0 }),
    { ..._u(i), update: s }
  );
}
function mo() {
  const e = Oe(Ls);
  if (!e) throw new Error("Could not find Vuetify display injection");
  return e;
}
const DC = {
    collapse: "mdi-chevron-up",
    complete: "mdi-check",
    cancel: "mdi-close-circle",
    close: "mdi-close",
    delete: "mdi-close-circle",
    clear: "mdi-close-circle",
    success: "mdi-check-circle",
    info: "mdi-information",
    warning: "mdi-alert-circle",
    error: "mdi-close-circle",
    prev: "mdi-chevron-left",
    next: "mdi-chevron-right",
    checkboxOn: "mdi-checkbox-marked",
    checkboxOff: "mdi-checkbox-blank-outline",
    checkboxIndeterminate: "mdi-minus-box",
    delimiter: "mdi-circle",
    sort: "mdi-arrow-up",
    expand: "mdi-chevron-down",
    menu: "mdi-menu",
    subgroup: "mdi-menu-down",
    dropdown: "mdi-menu-down",
    radioOn: "mdi-radiobox-marked",
    radioOff: "mdi-radiobox-blank",
    edit: "mdi-pencil",
    ratingEmpty: "mdi-star-outline",
    ratingFull: "mdi-star",
    ratingHalf: "mdi-star-half-full",
    loading: "mdi-cached",
    first: "mdi-page-first",
    last: "mdi-page-last",
    unfold: "mdi-unfold-more-horizontal",
    file: "mdi-paperclip",
    plus: "mdi-plus",
    minus: "mdi-minus",
  },
  zC = { component: (e) => Yt(qu, { ...e, class: "mdi" }) },
  ge = [String, Function, Object],
  Bs = Symbol.for("vuetify:icons"),
  ho = ye(
    { icon: { type: ge, required: !0 }, tag: { type: String, required: !0 } },
    "icon"
  ),
  vh = Z({
    name: "VComponentIcon",
    props: ho(),
    setup(e) {
      return () => m(e.tag, null, { default: () => [m(e.icon, null, null)] });
    },
  }),
  mh = Z({
    name: "VSvgIcon",
    inheritAttrs: !1,
    props: ho(),
    setup(e, t) {
      let { attrs: n } = t;
      return () =>
        m(e.tag, ue(n, { style: null }), {
          default: () => [
            m(
              "svg",
              {
                class: "v-icon__svg",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                role: "img",
                "aria-hidden": "true",
              },
              [m("path", { d: e.icon }, null)]
            ),
          ],
        });
    },
  }),
  jC = Z({
    name: "VLigatureIcon",
    props: ho(),
    setup(e) {
      return () => m(e.tag, null, { default: () => [e.icon] });
    },
  }),
  qu = Z({
    name: "VClassIcon",
    props: ho(),
    setup(e) {
      return () => m(e.tag, { class: e.icon }, null);
    },
  }),
  HC = { svg: { component: mh }, class: { component: qu } };
function UC(e) {
  return In({ defaultSet: "mdi", sets: { ...HC, mdi: zC }, aliases: DC }, e);
}
const WC = (e) => {
  const t = Oe(Bs);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: b(() => {
      const a = Ge(e) ? e.value : e.icon;
      if (!a) throw new Error("Icon value is undefined or null");
      let l = a;
      if (typeof l == "string" && ((l = l.trim()), l.startsWith("$"))) {
        var r;
        l = (r = t.aliases) == null ? void 0 : r[l.slice(1)];
      }
      if (!l) throw new Error(`Could not find aliased icon "${a}"`);
      if (typeof l != "string") return { component: vh, icon: l };
      const i = Object.keys(t.sets).find(
          (c) => typeof l == "string" && l.startsWith(`${c}:`)
        ),
        o = i ? l.slice(i.length + 1) : l;
      return {
        component: t.sets[i != null ? i : t.defaultSet].component,
        icon: o,
      };
    }),
  };
};
function pe(e, t, n) {
  let a =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d,
    l =
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const r = ht("useProxiedModel"),
    i = B(e[t] !== void 0 ? e[t] : n),
    o = fo(t),
    c = b(
      o !== t
        ? () => {
            var d, f, v, h;
            return (
              e[t],
              !!(
                (((d = r.vnode.props) != null && d.hasOwnProperty(t)) ||
                  ((f = r.vnode.props) != null && f.hasOwnProperty(o))) &&
                (((v = r.vnode.props) != null &&
                  v.hasOwnProperty(`onUpdate:${t}`)) ||
                  ((h = r.vnode.props) != null &&
                    h.hasOwnProperty(`onUpdate:${o}`)))
              )
            );
          }
        : () => {
            var d, f;
            return (
              e[t],
              !!(
                (d = r.vnode.props) != null &&
                d.hasOwnProperty(t) &&
                (f = r.vnode.props) != null &&
                f.hasOwnProperty(`onUpdate:${t}`)
              )
            );
          }
    );
  gl(
    () => !c.value,
    () => {
      ce(
        () => e[t],
        (d) => {
          i.value = d;
        }
      );
    }
  );
  const u = b({
    get() {
      return a(c.value ? e[t] : i.value);
    },
    set(d) {
      const f = l(d);
      (c.value ? e[t] : i.value) === f ||
        a(c.value ? e[t] : i.value) === d ||
        ((i.value = f), r == null || r.emit(`update:${t}`, f));
    },
  });
  return (
    Object.defineProperty(u, "externalValue", {
      get: () => (c.value ? e[t] : i.value),
    }),
    u
  );
}
var YC = {
  badge: "Badge",
  close: "Close",
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items...",
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending.",
    },
    sortBy: "Sort by",
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}",
  },
  datePicker: {
    itemsSelected: "{0} selected",
    nextMonthAriaLabel: "Next month",
    nextYearAriaLabel: "Next year",
    prevMonthAriaLabel: "Previous month",
    prevYearAriaLabel: "Previous year",
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: { delimiter: "Carousel slide {0} of {1}" },
  },
  calendar: { moreEvents: "{0} more" },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
  },
  fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" },
  timePicker: { am: "AM", pm: "PM" },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Goto Page {0}",
      currentPage: "Page {0}, Current Page",
      first: "First page",
      last: "Last page",
    },
  },
  rating: { ariaLabel: { item: "Rating {0} of {1}" } },
};
const rf = "$vuetify.",
  of = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[+a])),
  hh = (e, t, n) =>
    function (a) {
      for (
        var l = arguments.length, r = new Array(l > 1 ? l - 1 : 0), i = 1;
        i < l;
        i++
      )
        r[i - 1] = arguments[i];
      if (!a.startsWith(rf)) return of(a, r);
      const o = a.replace(rf, ""),
        s = e.value && n.value[e.value],
        c = t.value && n.value[t.value];
      let u = Es(s, o, null);
      return (
        u ||
          (Aa(
            `Translation key "${a}" not found in "${e.value}", trying fallback locale`
          ),
          (u = Es(c, o, null))),
        u || (Os(`Translation key "${a}" not found in fallback`), (u = a)),
        typeof u != "string" &&
          (Os(`Translation key "${a}" has a non-string value`), (u = a)),
        of(u, r)
      );
    };
function gh(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function qo(e, t, n) {
  var l, r;
  const a = pe(e, t, (l = e[t]) != null ? l : n.value);
  return (
    (a.value = (r = e[t]) != null ? r : n.value),
    ce(n, (i) => {
      e[t] == null && (a.value = n.value);
    }),
    a
  );
}
function ph(e) {
  return (t) => {
    const n = qo(t, "locale", e.current),
      a = qo(t, "fallback", e.fallback),
      l = qo(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: a,
      messages: l,
      t: hh(n, a, l),
      n: gh(n, a),
      provide: ph({ current: n, fallback: a, messages: l }),
    };
  };
}
function GC(e) {
  var l, r;
  const t = B((l = e == null ? void 0 : e.locale) != null ? l : "en"),
    n = B((r = e == null ? void 0 : e.fallback) != null ? r : "en"),
    a = B({ en: YC, ...(e == null ? void 0 : e.messages) });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: a,
    t: hh(t, n, a),
    n: gh(t, n),
    provide: ph({ current: t, fallback: n, messages: a }),
  };
}
const KC = {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !1,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1,
  },
  pl = Symbol.for("vuetify:locale");
function qC(e) {
  return e.name != null;
}
function XC(e) {
  const t =
      e != null && e.adapter && qC(e == null ? void 0 : e.adapter)
        ? e == null
          ? void 0
          : e.adapter
        : GC(e),
    n = ZC(t, e);
  return { ...t, ...n };
}
function on() {
  const e = Oe(pl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function JC(e) {
  const t = Oe(pl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e),
    a = QC(n, t.rtl, e),
    l = { ...n, ...a };
  return Qe(pl, l), l;
}
function ZC(e, t) {
  var l;
  const n = B((l = t == null ? void 0 : t.rtl) != null ? l : KC),
    a = b(() => {
      var r;
      return (r = n.value[e.current.value]) != null ? r : !1;
    });
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`),
  };
}
function QC(e, t, n) {
  const a = b(() => {
    var l, r;
    return (r = (l = n.rtl) != null ? l : t.value[e.current.value]) != null
      ? r
      : !1;
  });
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`),
  };
}
function Mn() {
  const e = Oe(pl);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const qa = 2.4,
  sf = 0.2126729,
  uf = 0.7151522,
  cf = 0.072175,
  ek = 0.55,
  tk = 0.58,
  nk = 0.57,
  ak = 0.62,
  Jr = 0.03,
  df = 1.45,
  lk = 5e-4,
  rk = 1.25,
  ik = 1.25,
  ff = 0.078,
  vf = 12.82051282051282,
  Zr = 0.06,
  mf = 0.001;
function hf(e, t) {
  const n = (e.r / 255) ** qa,
    a = (e.g / 255) ** qa,
    l = (e.b / 255) ** qa,
    r = (t.r / 255) ** qa,
    i = (t.g / 255) ** qa,
    o = (t.b / 255) ** qa;
  let s = n * sf + a * uf + l * cf,
    c = r * sf + i * uf + o * cf;
  if (
    (s <= Jr && (s += (Jr - s) ** df),
    c <= Jr && (c += (Jr - c) ** df),
    Math.abs(c - s) < lk)
  )
    return 0;
  let u;
  if (c > s) {
    const d = (c ** ek - s ** tk) * rk;
    u = d < mf ? 0 : d < ff ? d - d * vf * Zr : d - Zr;
  } else {
    const d = (c ** ak - s ** nk) * ik;
    u = d > -mf ? 0 : d > -ff ? d - d * vf * Zr : d + Zr;
  }
  return u * 100;
}
const yr = Symbol.for("vuetify:theme"),
  $e = ye({ theme: String }, "theme"),
  Fl = {
    defaultTheme: "light",
    variations: { colors: [], lighten: 0, darken: 0 },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#6200EE",
          "primary-darken-1": "#3700B3",
          secondary: "#03DAC6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000",
        },
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-variant": "#BDBDBD",
          "on-surface-variant": "#424242",
          primary: "#BB86FC",
          "primary-darken-1": "#3700B3",
          secondary: "#03DAC5",
          "secondary-darken-1": "#03DAC5",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC",
        },
      },
    },
  };
function ok() {
  var l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fl;
  if (!e) return { ...Fl, isDisabled: !0 };
  const t = {};
  for (const [r, i] of Object.entries((l = e.themes) != null ? l : {})) {
    var n, a;
    const o =
      i.dark || r === "dark"
        ? (n = Fl.themes) == null
          ? void 0
          : n.dark
        : (a = Fl.themes) == null
        ? void 0
        : a.light;
    t[r] = In(o, i);
  }
  return In(Fl, { ...e, themes: t });
}
function sk(e) {
  const t = vt(ok(e)),
    n = B(t.defaultTheme),
    a = B(t.themes),
    l = b(() => {
      const c = {};
      for (const [u, d] of Object.entries(a.value)) {
        const f = (c[u] = { ...d, colors: { ...d.colors } });
        if (t.variations)
          for (const v of t.variations.colors) {
            const h = f.colors[v];
            if (h)
              for (const p of ["lighten", "darken"]) {
                const w = p === "lighten" ? EC : VC;
                for (const g of pa(t.variations[p], 1))
                  f.colors[`${v}-${p}-${g}`] = rh(w(ha(h), g));
              }
          }
        for (const v of Object.keys(f.colors)) {
          if (/^on-[a-z]/.test(v) || f.colors[`on-${v}`]) continue;
          const h = `on-${v}`,
            p = ha(f.colors[v]),
            w = Math.abs(hf(ha(0), p)),
            g = Math.abs(hf(ha(16777215), p));
          f.colors[h] = g > Math.min(w, 50) ? "#fff" : "#000";
        }
      }
      return c;
    }),
    r = b(() => l.value[n.value]),
    i = b(() => {
      const c = [];
      r.value.dark && Xa(c, ":root", ["color-scheme: dark"]);
      for (const [v, h] of Object.entries(l.value)) {
        const { variables: p, dark: w } = h;
        Xa(c, `.v-theme--${v}`, [
          `color-scheme: ${w ? "dark" : "normal"}`,
          ...uk(h),
          ...Object.keys(p).map((g) => {
            const _ = p[g],
              y = typeof _ == "string" && _.startsWith("#") ? ha(_) : void 0,
              k = y ? `${y.r}, ${y.g}, ${y.b}` : void 0;
            return `--v-${g}: ${k != null ? k : _}`;
          }),
        ]);
      }
      const u = [],
        d = [],
        f = new Set(
          Object.values(l.value).flatMap((v) => Object.keys(v.colors))
        );
      for (const v of f)
        /^on-[a-z]/.test(v)
          ? Xa(d, `.${v}`, [`color: rgb(var(--v-theme-${v})) !important`])
          : (Xa(u, `.bg-${v}`, [
              `--v-theme-overlay-multiplier: var(--v-theme-${v}-overlay-multiplier)`,
              `background: rgb(var(--v-theme-${v})) !important`,
              `color: rgb(var(--v-theme-on-${v})) !important`,
            ]),
            Xa(d, `.text-${v}`, [`color: rgb(var(--v-theme-${v})) !important`]),
            Xa(d, `.border-${v}`, [`--v-border-color: var(--v-theme-${v})`]));
      return (
        c.push(...u, ...d), c.map((v, h) => (h === 0 ? v : `    ${v}`)).join("")
      );
    });
  function o(c) {
    const u = c._context.provides.usehead;
    if (u)
      u.addHeadObjs(
        b(() => {
          const f = {
            children: i.value,
            type: "text/css",
            id: "vuetify-theme-stylesheet",
          };
          return t.cspNonce && (f.nonce = t.cspNonce), { style: [f] };
        })
      ),
        Xe && bn(() => u.updateDOM());
    else {
      let v = function () {
        if (!t.isDisabled) {
          if (typeof document != "undefined" && !f) {
            const h = document.createElement("style");
            (h.type = "text/css"),
              (h.id = "vuetify-theme-stylesheet"),
              t.cspNonce && h.setAttribute("nonce", t.cspNonce),
              (f = h),
              document.head.appendChild(f);
          }
          f && (f.innerHTML = i.value);
        }
      };
      var d = v;
      let f = Xe ? document.getElementById("vuetify-theme-stylesheet") : null;
      ce(i, v, { immediate: !0 });
    }
  }
  const s = b(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`));
  return {
    install: o,
    isDisabled: t.isDisabled,
    name: n,
    themes: a,
    current: r,
    computedThemes: l,
    themeClasses: s,
    styles: i,
    global: { name: n, current: r },
  };
}
function Be(e) {
  ht("provideTheme");
  const t = Oe(yr, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = b(() => {
      var r;
      return (r = e.theme) != null ? r : t == null ? void 0 : t.name.value;
    }),
    a = b(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`)),
    l = { ...t, name: n, themeClasses: a };
  return Qe(yr, l), l;
}
function yh() {
  ht("useTheme");
  const e = Oe(yr, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Xa(e, t, n) {
  e.push(
    `${t} {
`,
    ...n.map(
      (a) => `  ${a};
`
    ),
    `}
`
  );
}
function uk(e) {
  const t = e.dark ? 2 : 1,
    n = e.dark ? 1 : 2,
    a = [];
  for (const [l, r] of Object.entries(e.colors)) {
    const i = ha(r);
    a.push(`--v-theme-${l}: ${i.r},${i.g},${i.b}`),
      l.startsWith("on-") ||
        a.push(`--v-theme-${l}-overlay-multiplier: ${Ts(r) > 0.18 ? t : n}`);
  }
  return a;
}
function Ea(e) {
  const t = B(),
    n = B();
  if (Xe) {
    const a = new ResizeObserver((l) => {
      e == null || e(l, a), l.length && (n.value = l[0].contentRect);
    });
    At(() => {
      a.disconnect();
    }),
      ce(
        t,
        (l, r) => {
          r && (a.unobserve(r), (n.value = void 0)), l && a.observe(l);
        },
        { flush: "post" }
      );
  }
  return { resizeRef: t, contentRect: $r(n) };
}
const Ti = Symbol.for("vuetify:layout"),
  bh = Symbol.for("vuetify:layout-item"),
  gf = 1e3,
  _h = ye(
    { overlaps: { type: Array, default: () => [] }, fullHeight: Boolean },
    "layout"
  ),
  xl = ye(
    {
      name: { type: String },
      order: { type: [Number, String], default: 0 },
      absolute: Boolean,
    },
    "layout-item"
  );
function ck() {
  const e = Oe(Ti);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles,
  };
}
function wl(e) {
  var o;
  const t = Oe(Ti);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = (o = e.id) != null ? o : `layout-item-${pt()}`,
    a = ht("useLayoutItem");
  Qe(bh, { id: n });
  const l = B(!1);
  Wv(() => (l.value = !0)), Uv(() => (l.value = !1));
  const { layoutItemStyles: r, layoutItemScrimStyles: i } = t.register(a, {
    ...e,
    active: b(() => (l.value ? !1 : e.active.value)),
    id: n,
  });
  return (
    At(() => t.unregister(n)),
    { layoutItemStyles: r, layoutRect: t.layoutRect, layoutItemScrimStyles: i }
  );
}
const dk = (e, t, n, a) => {
  let l = { top: 0, left: 0, right: 0, bottom: 0 };
  const r = [{ id: "", layer: { ...l } }];
  for (const i of e) {
    const o = t.get(i),
      s = n.get(i),
      c = a.get(i);
    if (!o || !s || !c) continue;
    const u = {
      ...l,
      [o.value]:
        parseInt(l[o.value], 10) + (c.value ? parseInt(s.value, 10) : 0),
    };
    r.push({ id: i, layer: u }), (l = u);
  }
  return r;
};
function xh(e) {
  const t = Oe(Ti, null),
    n = b(() => (t ? t.rootZIndex.value - 100 : gf)),
    a = B([]),
    l = vt(new Map()),
    r = vt(new Map()),
    i = vt(new Map()),
    o = vt(new Map()),
    s = vt(new Map()),
    { resizeRef: c, contentRect: u } = Ea(),
    d = b(() => {
      var C;
      const A = new Map(),
        x = (C = e.overlaps) != null ? C : [];
      for (const V of x.filter(($) => $.includes(":"))) {
        const [$, R] = V.split(":");
        if (!a.value.includes($) || !a.value.includes(R)) continue;
        const I = l.get($),
          L = l.get(R),
          D = r.get($),
          Y = r.get(R);
        !I ||
          !L ||
          !D ||
          !Y ||
          (A.set(R, { position: I.value, amount: parseInt(D.value, 10) }),
          A.set($, { position: L.value, amount: -parseInt(Y.value, 10) }));
      }
      return A;
    }),
    f = b(() => {
      const A = [...new Set([...i.values()].map((C) => C.value))].sort(
          (C, V) => C - V
        ),
        x = [];
      for (const C of A) {
        const V = a.value.filter(($) => {
          var R;
          return ((R = i.get($)) == null ? void 0 : R.value) === C;
        });
        x.push(...V);
      }
      return dk(x, l, r, o);
    }),
    v = b(() => !Array.from(s.values()).some((A) => A.value)),
    h = b(() => f.value[f.value.length - 1].layer),
    p = b(() => ({
      "--v-layout-left": ae(h.value.left),
      "--v-layout-right": ae(h.value.right),
      "--v-layout-top": ae(h.value.top),
      "--v-layout-bottom": ae(h.value.bottom),
      ...(v.value ? void 0 : { transition: "none" }),
    })),
    w = b(() =>
      f.value.slice(1).map((A, x) => {
        let { id: C } = A;
        const { layer: V } = f.value[x],
          $ = r.get(C),
          R = l.get(C);
        return { id: C, ...V, size: Number($.value), position: R.value };
      })
    ),
    g = (A) => w.value.find((x) => x.id === A),
    _ = ht("createLayout"),
    y = B(!1);
  _t(() => {
    y.value = !0;
  }),
    Qe(Ti, {
      register: (A, x) => {
        let {
          id: C,
          order: V,
          position: $,
          layoutSize: R,
          elementSize: I,
          active: L,
          disableTransitions: D,
          absolute: Y,
        } = x;
        i.set(C, V), l.set(C, $), r.set(C, R), o.set(C, L), D && s.set(C, D);
        const T = er(bh, _ == null ? void 0 : _.vnode).indexOf(A);
        T > -1 ? a.value.splice(T, 0, C) : a.value.push(C);
        const F = b(() => w.value.findIndex((ie) => ie.id === C)),
          J = b(() => n.value + f.value.length * 2 - F.value * 2),
          K = b(() => {
            const ie = $.value === "left" || $.value === "right",
              we = $.value === "right",
              te = $.value === "bottom",
              N = {
                [$.value]: 0,
                zIndex: J.value,
                transform: `translate${ie ? "X" : "Y"}(${
                  (L.value ? 0 : -110) * (we || te ? -1 : 1)
                }%)`,
                position: Y.value || n.value !== gf ? "absolute" : "fixed",
                ...(v.value ? void 0 : { transition: "none" }),
              };
            if (!y.value) return N;
            const W = w.value[F.value];
            if (!W)
              throw new Error(`[Vuetify] Could not find layout item "${C}"`);
            const q = d.value.get(C);
            return (
              q && (W[q.position] += q.amount),
              {
                ...N,
                height: ie
                  ? `calc(100% - ${W.top}px - ${W.bottom}px)`
                  : I.value
                  ? `${I.value}px`
                  : void 0,
                left: we ? void 0 : `${W.left}px`,
                right: we ? `${W.right}px` : void 0,
                top: $.value !== "bottom" ? `${W.top}px` : void 0,
                bottom: $.value !== "top" ? `${W.bottom}px` : void 0,
                width: ie
                  ? I.value
                    ? `${I.value}px`
                    : void 0
                  : `calc(100% - ${W.left}px - ${W.right}px)`,
              }
            );
          }),
          le = b(() => ({ zIndex: J.value - 1 }));
        return { layoutItemStyles: K, layoutItemScrimStyles: le, zIndex: J };
      },
      unregister: (A) => {
        i.delete(A),
          l.delete(A),
          r.delete(A),
          o.delete(A),
          s.delete(A),
          (a.value = a.value.filter((x) => x !== A));
      },
      mainRect: h,
      mainStyles: p,
      getLayoutItem: g,
      items: w,
      layoutRect: u,
      rootZIndex: n,
    });
  const k = b(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]),
    S = b(() => ({
      zIndex: n.value,
      position: t ? "relative" : void 0,
      overflow: t ? "hidden" : void 0,
    }));
  return {
    layoutClasses: k,
    layoutStyles: S,
    getLayoutItem: g,
    items: w,
    layoutRect: u,
    layoutRef: c,
  };
}
function wh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e,
    a = In(t, n),
    { aliases: l = {}, components: r = {}, directives: i = {} } = a,
    o = BC(a.defaults),
    s = FC(a.display, a.ssr),
    c = sk(a.theme),
    u = UC(a.icons),
    d = XC(a.locale);
  return {
    install: (v) => {
      for (const h in i) v.directive(h, i[h]);
      for (const h in r) v.component(h, r[h]);
      for (const h in l)
        v.component(h, Z({ ...l[h], name: h, aliasName: l[h].name }));
      if (
        (c.install(v),
        v.provide(pr, o),
        v.provide(Ls, s),
        v.provide(yr, c),
        v.provide(Bs, u),
        v.provide(pl, d),
        Xe && a.ssr)
      )
        if (v.$nuxt)
          v.$nuxt.hook("app:suspense:resolve", () => {
            s.update();
          });
        else {
          const { mount: h } = v;
          v.mount = function () {
            const p = h(...arguments);
            return Ke(() => s.update()), (v.mount = h), p;
          };
        }
      pt.reset(),
        v.mixin({
          computed: {
            $vuetify() {
              return vt({
                defaults: Dl.call(this, pr),
                display: Dl.call(this, Ls),
                theme: Dl.call(this, yr),
                icons: Dl.call(this, Bs),
                locale: Dl.call(this, pl),
              });
            },
          },
        });
    },
    defaults: o,
    display: s,
    theme: c,
    icons: u,
    locale: d,
  };
}
const fk = "3.0.4";
wh.version = fk;
function Dl(e) {
  var r;
  var t, n;
  const a = this.$,
    l =
      (r = (t = a.parent) == null ? void 0 : t.provides) != null
        ? r
        : (n = a.vnode.appContext) == null
        ? void 0
        : n.provides;
  if (l && e in l) return l[e];
}
const vk = Z({
  name: "VApp",
  props: { ..._h({ fullHeight: !0 }), ...$e() },
  setup(e, t) {
    let { slots: n } = t;
    const a = Be(e),
      {
        layoutClasses: l,
        layoutStyles: r,
        getLayoutItem: i,
        items: o,
        layoutRef: s,
      } = xh(e),
      { rtlClasses: c } = Mn();
    return (
      X(() => {
        var u;
        return m(
          "div",
          {
            ref: s,
            class: ["v-application", a.themeClasses.value, l.value, c.value],
            style: r.value,
          },
          [
            m("div", { class: "v-application__wrap" }, [
              (u = n.default) == null ? void 0 : u.call(n),
            ]),
          ]
        );
      }),
      { getLayoutItem: i, items: o, theme: a }
    );
  },
});
const Ne = Oa({
  name: "VDefaultsProvider",
  props: {
    defaults: Object,
    reset: [Number, String],
    root: Boolean,
    scoped: Boolean,
  },
  setup(e, t) {
    let { slots: n } = t;
    const { defaults: a, reset: l, root: r, scoped: i } = _u(e);
    return (
      it(a, { reset: l, root: r, scoped: i }),
      () => {
        var o;
        return (o = n.default) == null ? void 0 : o.call(n);
      }
    );
  },
});
function Bt(e) {
  let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : "top center 0",
    n = arguments.length > 2 ? arguments[2] : void 0;
  return Z({
    name: e,
    props: {
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: { type: String, default: n },
      origin: { type: String, default: t },
    },
    setup(a, l) {
      let { slots: r } = l;
      return () => {
        const i = a.group ? i0 : pn;
        return Yt(
          i,
          {
            name: e,
            mode: a.mode,
            onBeforeEnter(o) {
              o.style.transformOrigin = a.origin;
            },
            onLeave(o) {
              if (a.leaveAbsolute) {
                const {
                  offsetTop: s,
                  offsetLeft: c,
                  offsetWidth: u,
                  offsetHeight: d,
                } = o;
                (o._transitionInitialStyles = {
                  position: o.style.position,
                  top: o.style.top,
                  left: o.style.left,
                  width: o.style.width,
                  height: o.style.height,
                }),
                  (o.style.position = "absolute"),
                  (o.style.top = `${s}px`),
                  (o.style.left = `${c}px`),
                  (o.style.width = `${u}px`),
                  (o.style.height = `${d}px`);
              }
              a.hideOnLeave &&
                o.style.setProperty("display", "none", "important");
            },
            onAfterLeave(o) {
              if (a.leaveAbsolute && o != null && o._transitionInitialStyles) {
                const {
                  position: s,
                  top: c,
                  left: u,
                  width: d,
                  height: f,
                } = o._transitionInitialStyles;
                delete o._transitionInitialStyles,
                  (o.style.position = s || ""),
                  (o.style.top = c || ""),
                  (o.style.left = u || ""),
                  (o.style.width = d || ""),
                  (o.style.height = f || "");
              }
            },
          },
          r.default
        );
      };
    },
  });
}
function Sh(e, t) {
  let n =
    arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Z({
    name: e,
    props: { mode: { type: String, default: n } },
    setup(a, l) {
      let { slots: r } = l;
      return () => Yt(pn, { name: e, ...t }, r.default);
    },
  });
}
function Ch() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    )
      ? "width"
      : "height",
    a = Wt(`offset-${n}`);
  return {
    onBeforeEnter(i) {
      (i._parent = i.parentNode),
        (i._initialStyle = {
          transition: i.style.transition,
          overflow: i.style.overflow,
          [n]: i.style[n],
        });
    },
    onEnter(i) {
      const o = i._initialStyle;
      i.style.setProperty("transition", "none", "important"),
        (i.style.overflow = "hidden");
      const s = `${i[a]}px`;
      (i.style[n] = "0"),
        i.offsetHeight,
        (i.style.transition = o.transition),
        e && i._parent && i._parent.classList.add(e),
        requestAnimationFrame(() => {
          i.style[n] = s;
        });
    },
    onAfterEnter: r,
    onEnterCancelled: r,
    onLeave(i) {
      (i._initialStyle = {
        transition: "",
        overflow: i.style.overflow,
        [n]: i.style[n],
      }),
        (i.style.overflow = "hidden"),
        (i.style[n] = `${i[a]}px`),
        i.offsetHeight,
        requestAnimationFrame(() => (i.style[n] = "0"));
    },
    onAfterLeave: l,
    onLeaveCancelled: l,
  };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), r(i);
  }
  function r(i) {
    const o = i._initialStyle[n];
    (i.style.overflow = i._initialStyle.overflow),
      o != null && (i.style[n] = o),
      delete i._initialStyle;
  }
}
const go = Z({
  name: "VDialogTransition",
  props: { target: Object },
  setup(e, t) {
    let { slots: n } = t;
    const a = {
      onBeforeEnter(l) {
        (l.style.pointerEvents = "none"), (l.style.visibility = "hidden");
      },
      async onEnter(l, r) {
        var i;
        await new Promise((v) => requestAnimationFrame(v)),
          await new Promise((v) => requestAnimationFrame(v)),
          (l.style.visibility = "");
        const { x: o, y: s, sx: c, sy: u, speed: d } = yf(e.target, l),
          f = ya(
            l,
            [
              {
                transform: `translate(${o}px, ${s}px) scale(${c}, ${u})`,
                opacity: 0,
              },
              { transform: "" },
            ],
            { duration: 225 * d, easing: OC }
          );
        (i = pf(l)) == null ||
          i.forEach((v) => {
            ya(
              v,
              [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, { opacity: 1 }],
              { duration: 225 * 2 * d, easing: gr }
            );
          }),
          f.finished.then(() => r());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, r) {
        var i;
        await new Promise((v) => requestAnimationFrame(v));
        const { x: o, y: s, sx: c, sy: u, speed: d } = yf(e.target, l);
        ya(
          l,
          [
            { transform: "" },
            {
              transform: `translate(${o}px, ${s}px) scale(${c}, ${u})`,
              opacity: 0,
            },
          ],
          { duration: 125 * d, easing: TC }
        ).finished.then(() => r()),
          (i = pf(l)) == null ||
            i.forEach((v) => {
              ya(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], {
                duration: 125 * 2 * d,
                easing: gr,
              });
            });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      },
    };
    return () =>
      e.target
        ? m(pn, ue({ name: "dialog-transition" }, a, { css: !1 }), n)
        : m(pn, { name: "dialog-transition" }, n);
  },
});
function pf(e) {
  var t;
  const n =
    (t = e.querySelector(
      ":scope > .v-card, :scope > .v-sheet, :scope > .v-list"
    )) == null
      ? void 0
      : t.children;
  return n && [...n];
}
function yf(e, t) {
  const n = e.getBoundingClientRect(),
    a = Uu(t),
    [l, r] = getComputedStyle(t)
      .transformOrigin.split(" ")
      .map((g) => parseFloat(g)),
    [i, o] = getComputedStyle(t)
      .getPropertyValue("--v-overlay-anchor-origin")
      .split(" ");
  let s = n.left + n.width / 2;
  i === "left" || o === "left"
    ? (s -= n.width / 2)
    : (i === "right" || o === "right") && (s += n.width / 2);
  let c = n.top + n.height / 2;
  i === "top" || o === "top"
    ? (c -= n.height / 2)
    : (i === "bottom" || o === "bottom") && (c += n.height / 2);
  const u = n.width / a.width,
    d = n.height / a.height,
    f = Math.max(1, u, d),
    v = u / f || 0,
    h = d / f || 0,
    p = (a.width * a.height) / (window.innerWidth * window.innerHeight),
    w = p > 0.12 ? Math.min(1.5, (p - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: c - (r + a.top), sx: v, sy: h, speed: w };
}
const mk = Bt("fab-transition", "center center", "out-in"),
  hk = Bt("dialog-bottom-transition"),
  gk = Bt("dialog-top-transition"),
  Ns = Bt("fade-transition"),
  kh = Bt("scale-transition"),
  pk = Bt("scroll-x-transition"),
  yk = Bt("scroll-x-reverse-transition"),
  bk = Bt("scroll-y-transition"),
  _k = Bt("scroll-y-reverse-transition"),
  xk = Bt("slide-x-transition"),
  wk = Bt("slide-x-reverse-transition"),
  Xu = Bt("slide-y-transition"),
  Sk = Bt("slide-y-reverse-transition"),
  po = Sh("expand-transition", Ch()),
  Ju = Sh("expand-x-transition", Ch("", !0));
const sn = ye(
  {
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String],
  },
  "dimension"
);
function un(e) {
  return {
    dimensionStyles: b(() => ({
      height: ae(e.height),
      maxHeight: ae(e.maxHeight),
      maxWidth: ae(e.maxWidth),
      minHeight: ae(e.minHeight),
      minWidth: ae(e.minWidth),
      width: ae(e.width),
    })),
  };
}
function Ck(e) {
  return {
    aspectStyles: b(() => {
      const t = Number(e.aspectRatio);
      return t ? { paddingBottom: String((1 / t) * 100) + "%" } : void 0;
    }),
  };
}
const Ah = Z({
  name: "VResponsive",
  props: { aspectRatio: [String, Number], contentClass: String, ...sn() },
  setup(e, t) {
    let { slots: n } = t;
    const { aspectStyles: a } = Ck(e),
      { dimensionStyles: l } = un(e);
    return (
      X(() => {
        var r;
        return m("div", { class: "v-responsive", style: l.value }, [
          m("div", { class: "v-responsive__sizer", style: a.value }, null),
          (r = n.additional) == null ? void 0 : r.call(n),
          n.default &&
            m("div", { class: ["v-responsive__content", e.contentClass] }, [
              n.default(),
            ]),
        ]);
      }),
      {}
    );
  },
});
function kk(e, t) {
  if (!Ku) return;
  const n = t.modifiers || {},
    a = t.value,
    { handler: l, options: r } =
      typeof a == "object" ? a : { handler: a, options: {} },
    i = new IntersectionObserver(function () {
      var o;
      let s =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        c = arguments.length > 1 ? arguments[1] : void 0;
      const u = (o = e._observe) == null ? void 0 : o[t.instance.$.uid];
      if (!u) return;
      const d = s.some((f) => f.isIntersecting);
      l && (!n.quiet || u.init) && (!n.once || d || u.init) && l(d, s, c),
        d && n.once ? Eh(e, t) : (u.init = !0);
    }, r);
  (e._observe = Object(e._observe)),
    (e._observe[t.instance.$.uid] = { init: !1, observer: i }),
    i.observe(e);
}
function Eh(e, t) {
  var n;
  const a = (n = e._observe) == null ? void 0 : n[t.instance.$.uid];
  !a || (a.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Or = { mounted: kk, unmounted: Eh },
  Fn = ye(
    {
      transition: {
        type: [Boolean, String, Object],
        default: "fade-transition",
        validator: (e) => e !== !0,
      },
    },
    "transition"
  ),
  hn = (e, t) => {
    let { slots: n } = t;
    const { transition: a, ...l } = e,
      { component: r = pn, ...i } = typeof a == "object" ? a : {};
    return Yt(r, ue(typeof a == "string" ? { name: a } : i, l), n);
  },
  Sl = Z({
    name: "VImg",
    directives: { intersect: Or },
    props: {
      aspectRatio: [String, Number],
      alt: String,
      cover: Boolean,
      eager: Boolean,
      gradient: String,
      lazySrc: String,
      options: {
        type: Object,
        default: () => ({
          root: void 0,
          rootMargin: void 0,
          threshold: void 0,
        }),
      },
      sizes: String,
      src: { type: [String, Object], default: "" },
      srcset: String,
      width: [String, Number],
      ...Fn(),
    },
    emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t;
      const l = B(""),
        r = B(),
        i = B(e.eager ? "loading" : "idle"),
        o = B(),
        s = B(),
        c = b(() =>
          e.src && typeof e.src == "object"
            ? {
                src: e.src.src,
                srcset: e.srcset || e.src.srcset,
                lazySrc: e.lazySrc || e.src.lazySrc,
                aspect: Number(e.aspectRatio || e.src.aspect),
              }
            : {
                src: e.src,
                srcset: e.srcset,
                lazySrc: e.lazySrc,
                aspect: Number(e.aspectRatio || 0),
              }
        ),
        u = b(() => c.value.aspect || o.value / s.value || 0);
      ce(
        () => e.src,
        () => {
          d(i.value !== "idle");
        }
      ),
        ao(() => d());
      function d(x) {
        if (!(e.eager && x) && !(Ku && !x && !e.eager)) {
          if (((i.value = "loading"), c.value.lazySrc)) {
            const C = new Image();
            (C.src = c.value.lazySrc), p(C, null);
          }
          !c.value.src ||
            Ke(() => {
              var C, V;
              if (
                (n(
                  "loadstart",
                  ((C = r.value) == null ? void 0 : C.currentSrc) || c.value.src
                ),
                (V = r.value) != null && V.complete)
              ) {
                if ((r.value.naturalWidth || v(), i.value === "error")) return;
                u.value || p(r.value, null), f();
              } else u.value || p(r.value), h();
            });
        }
      }
      function f() {
        var x;
        h(),
          (i.value = "loaded"),
          n(
            "load",
            ((x = r.value) == null ? void 0 : x.currentSrc) || c.value.src
          );
      }
      function v() {
        var x;
        (i.value = "error"),
          n(
            "error",
            ((x = r.value) == null ? void 0 : x.currentSrc) || c.value.src
          );
      }
      function h() {
        const x = r.value;
        x && (l.value = x.currentSrc || x.src);
      }
      function p(x) {
        let C =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
        const V = () => {
          const { naturalHeight: $, naturalWidth: R } = x;
          $ || R
            ? ((o.value = R), (s.value = $))
            : !x.complete && i.value === "loading" && C != null
            ? setTimeout(V, C)
            : (x.currentSrc.endsWith(".svg") ||
                x.currentSrc.startsWith("data:image/svg+xml")) &&
              ((o.value = 1), (s.value = 1));
        };
        V();
      }
      const w = b(() => ({
          "v-img__img--cover": e.cover,
          "v-img__img--contain": !e.cover,
        })),
        g = () => {
          var x;
          if (!c.value.src || i.value === "idle") return null;
          const C = m(
              "img",
              {
                class: ["v-img__img", w.value],
                src: c.value.src,
                srcset: c.value.srcset,
                alt: "",
                sizes: e.sizes,
                ref: r,
                onLoad: f,
                onError: v,
              },
              null
            ),
            V = (x = a.sources) == null ? void 0 : x.call(a);
          return m(
            hn,
            { transition: e.transition, appear: !0 },
            {
              default: () => [
                Le(V ? m("picture", { class: "v-img__picture" }, [V, C]) : C, [
                  [_n, i.value === "loaded"],
                ]),
              ],
            }
          );
        },
        _ = () =>
          m(
            hn,
            { transition: e.transition },
            {
              default: () => [
                c.value.lazySrc &&
                  i.value !== "loaded" &&
                  m(
                    "img",
                    {
                      class: ["v-img__img", "v-img__img--preload", w.value],
                      src: c.value.lazySrc,
                      alt: "",
                    },
                    null
                  ),
              ],
            }
          ),
        y = () =>
          a.placeholder
            ? m(
                hn,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    (i.value === "loading" ||
                      (i.value === "error" && !a.error)) &&
                      m("div", { class: "v-img__placeholder" }, [
                        a.placeholder(),
                      ]),
                  ],
                }
              )
            : null,
        k = () =>
          a.error
            ? m(
                hn,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    i.value === "error" &&
                      m("div", { class: "v-img__error" }, [a.error()]),
                  ],
                }
              )
            : null,
        S = () =>
          e.gradient
            ? m(
                "div",
                {
                  class: "v-img__gradient",
                  style: { backgroundImage: `linear-gradient(${e.gradient})` },
                },
                null
              )
            : null,
        A = B(!1);
      {
        const x = ce(u, (C) => {
          C &&
            (requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                A.value = !0;
              });
            }),
            x());
        });
      }
      return (
        X(() =>
          Le(
            m(
              Ah,
              {
                class: ["v-img", { "v-img--booting": !A.value }],
                style: { width: ae(e.width === "auto" ? o.value : e.width) },
                aspectRatio: u.value,
                "aria-label": e.alt,
                role: e.alt ? "img" : void 0,
              },
              {
                additional: () =>
                  m(xe, null, [
                    m(g, null, null),
                    m(_, null, null),
                    m(S, null, null),
                    m(y, null, null),
                    m(k, null, null),
                  ]),
                default: a.default,
              }
            ),
            [
              [
                Rt("intersect"),
                { handler: d, options: e.options },
                null,
                { once: !0 },
              ],
            ]
          )
        ),
        { currentSrc: l, image: r, state: i, naturalWidth: o, naturalHeight: s }
      );
    },
  }),
  be = ye({ tag: { type: String, default: "div" } }, "tag"),
  Ri = je()({
    name: "VToolbarTitle",
    props: { text: String, ...be() },
    setup(e, t) {
      let { slots: n } = t;
      return (
        X(() => {
          var a;
          const l = !!(n.default || n.text || e.text);
          return m(
            e.tag,
            { class: "v-toolbar-title" },
            {
              default: () => [
                l &&
                  m("div", { class: "v-toolbar-title__placeholder" }, [
                    n.text ? n.text() : e.text,
                    (a = n.default) == null ? void 0 : a.call(n),
                  ]),
              ],
            }
          );
        }),
        {}
      );
    },
  }),
  Nt = ye({ border: [Boolean, Number, String] }, "border");
function Kt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn();
  return {
    borderClasses: b(() => {
      const a = Ge(e) ? e.value : e.border,
        l = [];
      if (a === !0 || a === "") l.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const r of String(a).split(" ")) l.push(`border-${r}`);
      return l;
    }),
  };
}
const rt = ye(
  {
    elevation: {
      type: [Number, String],
      validator(e) {
        const t = parseInt(e);
        return !isNaN(t) && t >= 0 && t <= 24;
      },
    },
  },
  "elevation"
);
function gt(e) {
  return {
    elevationClasses: b(() => {
      const n = Ge(e) ? e.value : e.elevation,
        a = [];
      return n == null || a.push(`elevation-${n}`), a;
    }),
  };
}
const Ye = ye(
  { rounded: { type: [Boolean, Number, String], default: void 0 } },
  "rounded"
);
function nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn();
  return {
    roundedClasses: b(() => {
      const a = Ge(e) ? e.value : e.rounded,
        l = [];
      if (a === !0 || a === "") l.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const r of String(a).split(" ")) l.push(`rounded-${r}`);
      return l;
    }),
  };
}
function Zu(e) {
  return Hu(() => {
    const t = [],
      n = {};
    return (
      e.value.background &&
        (tf(e.value.background)
          ? (n.backgroundColor = e.value.background)
          : t.push(`bg-${e.value.background}`)),
      e.value.text &&
        (tf(e.value.text)
          ? ((n.color = e.value.text), (n.caretColor = e.value.text))
          : t.push(`text-${e.value.text}`)),
      { colorClasses: t, colorStyles: n }
    );
  });
}
function kt(e, t) {
  const n = b(() => ({ text: Ge(e) ? e.value : t ? e[t] : null })),
    { colorClasses: a, colorStyles: l } = Zu(n);
  return { textColorClasses: a, textColorStyles: l };
}
function tt(e, t) {
  const n = b(() => ({ background: Ge(e) ? e.value : t ? e[t] : null })),
    { colorClasses: a, colorStyles: l } = Zu(n);
  return { backgroundColorClasses: a, backgroundColorStyles: l };
}
const Ak = [null, "prominent", "default", "comfortable", "compact"],
  Vh = ye(
    {
      absolute: Boolean,
      collapse: Boolean,
      color: String,
      density: {
        type: String,
        default: "default",
        validator: (e) => Ak.includes(e),
      },
      extended: Boolean,
      extensionHeight: { type: [Number, String], default: 48 },
      flat: Boolean,
      floating: Boolean,
      height: { type: [Number, String], default: 64 },
      image: String,
      title: String,
      ...Nt(),
      ...rt(),
      ...Ye(),
      ...be({ tag: "header" }),
      ...$e(),
    },
    "v-toolbar"
  ),
  Li = je()({
    name: "VToolbar",
    props: Vh(),
    setup(e, t) {
      var n;
      let { slots: a } = t;
      const { backgroundColorClasses: l, backgroundColorStyles: r } = tt(
          j(e, "color")
        ),
        { borderClasses: i } = Kt(e),
        { elevationClasses: o } = gt(e),
        { roundedClasses: s } = nt(e),
        { themeClasses: c } = Be(e),
        u = B(!!(e.extended || ((n = a.extension) != null && n.call(a)))),
        d = b(() =>
          parseInt(
            Number(e.height) +
              (e.density === "prominent" ? Number(e.height) : 0) -
              (e.density === "comfortable" ? 8 : 0) -
              (e.density === "compact" ? 16 : 0),
            10
          )
        ),
        f = b(() =>
          u.value
            ? parseInt(
                Number(e.extensionHeight) +
                  (e.density === "prominent" ? Number(e.extensionHeight) : 0) -
                  (e.density === "comfortable" ? 4 : 0) -
                  (e.density === "compact" ? 8 : 0),
                10
              )
            : 0
        );
      return (
        X(() => {
          var v, h, p, w, g;
          const _ = !!(e.title || a.title),
            y = !!(a.image || e.image),
            k = (v = a.extension) == null ? void 0 : v.call(a);
          return (
            (u.value = !!(e.extended || k)),
            m(
              e.tag,
              {
                class: [
                  "v-toolbar",
                  {
                    "v-toolbar--absolute": e.absolute,
                    "v-toolbar--collapse": e.collapse,
                    "v-toolbar--flat": e.flat,
                    "v-toolbar--floating": e.floating,
                    [`v-toolbar--density-${e.density}`]: !0,
                  },
                  l.value,
                  i.value,
                  o.value,
                  s.value,
                  c.value,
                ],
                style: [r.value],
              },
              {
                default: () => [
                  y &&
                    m("div", { key: "image", class: "v-toolbar__image" }, [
                      m(
                        Ne,
                        { defaults: { VImg: { cover: !0, src: e.image } } },
                        {
                          default: () => [
                            a.image
                              ? (h = a.image) == null
                                ? void 0
                                : h.call(a)
                              : m(Sl, null, null),
                          ],
                        }
                      ),
                    ]),
                  m(
                    Ne,
                    { defaults: { VTabs: { height: ae(d.value) } } },
                    {
                      default: () => [
                        m(
                          "div",
                          {
                            class: "v-toolbar__content",
                            style: { height: ae(d.value) },
                          },
                          [
                            a.prepend &&
                              m("div", { class: "v-toolbar__prepend" }, [
                                (p = a.prepend) == null ? void 0 : p.call(a),
                              ]),
                            _ &&
                              m(
                                Ri,
                                { key: "title", text: e.title },
                                { text: a.title }
                              ),
                            (w = a.default) == null ? void 0 : w.call(a),
                            a.append &&
                              m("div", { class: "v-toolbar__append" }, [
                                (g = a.append) == null ? void 0 : g.call(a),
                              ]),
                          ]
                        ),
                      ],
                    }
                  ),
                  m(
                    Ne,
                    { defaults: { VTabs: { height: ae(f.value) } } },
                    {
                      default: () => [
                        m(po, null, {
                          default: () => [
                            u.value &&
                              m(
                                "div",
                                {
                                  class: "v-toolbar__extension",
                                  style: { height: ae(f.value) },
                                },
                                [k]
                              ),
                          ],
                        }),
                      ],
                    }
                  ),
                ],
              }
            )
          );
        }),
        { contentHeight: d, extensionHeight: f }
      );
    },
  });
function Ek(e) {
  var t;
  return Lt(
    e,
    Object.keys((t = Li == null ? void 0 : Li.props) != null ? t : {})
  );
}
const Vk = je()({
  name: "VAppBar",
  props: {
    modelValue: { type: Boolean, default: !0 },
    location: {
      type: String,
      default: "top",
      validator: (e) => ["top", "bottom"].includes(e),
    },
    ...Vh(),
    ...xl(),
    height: { type: [Number, String], default: 64 },
  },
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const a = B(),
      l = pe(e, "modelValue"),
      r = b(() => {
        var d, f;
        var o, s;
        const c =
            (d = (o = a.value) == null ? void 0 : o.contentHeight) != null
              ? d
              : 0,
          u =
            (f = (s = a.value) == null ? void 0 : s.extensionHeight) != null
              ? f
              : 0;
        return c + u;
      }),
      { layoutItemStyles: i } = wl({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: j(e, "location"),
        layoutSize: r,
        elementSize: r,
        active: l,
        absolute: j(e, "absolute"),
      });
    return (
      X(() => {
        const [o] = Ek(e);
        return m(
          Li,
          ue(
            {
              ref: a,
              class: [
                "v-app-bar",
                { "v-app-bar--bottom": e.location === "bottom" },
              ],
              style: { ...i.value, height: void 0 },
            },
            o
          ),
          n
        );
      }),
      {}
    );
  },
});
const $k = [null, "default", "comfortable", "compact"],
  st = ye(
    {
      density: {
        type: String,
        default: "default",
        validator: (e) => $k.includes(e),
      },
    },
    "density"
  );
function yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn();
  return { densityClasses: b(() => `${t}--density-${e.density}`) };
}
const Ik = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Na(e, t) {
  return m(xe, null, [
    e && m("span", { key: "overlay", class: `${t}__overlay` }, null),
    m("span", { key: "underlay", class: `${t}__underlay` }, null),
  ]);
}
const qt = ye(
  {
    color: String,
    variant: {
      type: String,
      default: "elevated",
      validator: (e) => Ik.includes(e),
    },
  },
  "variant"
);
function Ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn();
  const n = b(() => {
      const { variant: r } = Ot(e);
      return `${t}--variant-${r}`;
    }),
    { colorClasses: a, colorStyles: l } = Zu(
      b(() => {
        const { variant: r, color: i } = Ot(e);
        return {
          [["elevated", "flat"].includes(r) ? "background" : "text"]: i,
        };
      })
    );
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const $h = Z({
    name: "VBtnGroup",
    props: {
      divided: Boolean,
      ...Nt(),
      ...st(),
      ...rt(),
      ...Ye(),
      ...be(),
      ...$e(),
      ...qt(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Be(e),
        { densityClasses: l } = yt(e),
        { borderClasses: r } = Kt(e),
        { elevationClasses: i } = gt(e),
        { roundedClasses: o } = nt(e);
      it({
        VBtn: {
          height: "auto",
          color: j(e, "color"),
          density: j(e, "density"),
          flat: !0,
          variant: j(e, "variant"),
        },
      }),
        X(() =>
          m(
            e.tag,
            {
              class: [
                "v-btn-group",
                { "v-btn-group--divided": e.divided },
                a.value,
                r.value,
                l.value,
                i.value,
                o.value,
              ],
            },
            n
          )
        );
    },
  }),
  Cl = ye(
    {
      modelValue: { type: null, default: void 0 },
      multiple: Boolean,
      mandatory: [Boolean, String],
      max: Number,
      selectedClass: String,
      disabled: Boolean,
    },
    "group"
  ),
  Fa = ye(
    { value: null, disabled: Boolean, selectedClass: String },
    "group-item"
  );
function kl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = ht("useGroupItem");
  if (!a)
    throw new Error(
      "[Vuetify] useGroupItem composable must be used inside a component setup function"
    );
  const l = pt();
  Qe(Symbol.for(`${t.description}:id`), l);
  const r = Oe(t, null);
  if (!r) {
    if (!n) return r;
    throw new Error(
      `[Vuetify] Could not find useGroup injection with symbol ${t.description}`
    );
  }
  const i = j(e, "value"),
    o = b(() => r.disabled.value || e.disabled);
  r.register({ id: l, value: i, disabled: o }, a),
    At(() => {
      r.unregister(l);
    });
  const s = b(() => r.isSelected(l)),
    c = b(() => s.value && [r.selectedClass.value, e.selectedClass]);
  return (
    ce(s, (u) => {
      a.emit("group:selected", { value: u });
    }),
    {
      id: l,
      isSelected: s,
      toggle: () => r.select(l, !s.value),
      select: (u) => r.select(l, u),
      selectedClass: c,
      value: i,
      disabled: o,
      group: r,
    }
  );
}
function Da(e, t) {
  let n = !1;
  const a = vt([]),
    l = pe(
      e,
      "modelValue",
      [],
      (f) => (f == null ? [] : Ih(a, Ut(f))),
      (f) => {
        const v = Ok(a, f);
        return e.multiple ? v : v[0];
      }
    ),
    r = ht("useGroup");
  function i(f, v) {
    const h = f,
      p = Symbol.for(`${t.description}:id`),
      g = er(p, r == null ? void 0 : r.vnode).indexOf(v);
    g > -1 ? a.splice(g, 0, h) : a.push(h);
  }
  function o(f) {
    if (n) return;
    s();
    const v = a.findIndex((h) => h.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  _t(() => {
    s();
  }),
    At(() => {
      n = !0;
    });
  function c(f, v) {
    const h = a.find((p) => p.id === f);
    if (!(v && h != null && h.disabled))
      if (e.multiple) {
        const p = l.value.slice(),
          w = p.findIndex((_) => _ === f),
          g = ~w;
        if (
          ((v = v != null ? v : !g),
          (g && e.mandatory && p.length <= 1) ||
            (!g && e.max != null && p.length + 1 > e.max))
        )
          return;
        w < 0 && v ? p.push(f) : w >= 0 && !v && p.splice(w, 1), (l.value = p);
      } else {
        const p = l.value.includes(f);
        if (e.mandatory && p) return;
        l.value = (v != null ? v : !p) ? [f] : [];
      }
  }
  function u(f) {
    if (
      (e.multiple &&
        Aa('This method is not supported when using "multiple" prop'),
      l.value.length)
    ) {
      const v = l.value[0],
        h = a.findIndex((g) => g.id === v);
      let p = (h + f) % a.length,
        w = a[p];
      for (; w.disabled && p !== h; ) (p = (p + f) % a.length), (w = a[p]);
      if (w.disabled) return;
      l.value = [a[p].id];
    } else {
      const v = a.find((h) => !h.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = {
    register: i,
    unregister: o,
    selected: l,
    select: c,
    disabled: j(e, "disabled"),
    prev: () => u(a.length - 1),
    next: () => u(1),
    isSelected: (f) => l.value.includes(f),
    selectedClass: b(() => e.selectedClass),
    items: b(() => a),
    getItemIndex: (f) => Pk(a, f),
  };
  return Qe(t, d), d;
}
function Pk(e, t) {
  const n = Ih(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function Ih(e, t) {
  const n = [];
  for (let a = 0; a < e.length; a++) {
    const l = e[a];
    l.value != null
      ? t.find((r) => Pr(r, l.value)) != null && n.push(l.id)
      : t.includes(a) && n.push(l.id);
  }
  return n;
}
function Ok(e, t) {
  const n = [];
  for (let a = 0; a < e.length; a++) {
    const l = e[a];
    t.includes(l.id) && n.push(l.value != null ? l.value : a);
  }
  return n;
}
const Qu = Symbol.for("vuetify:v-btn-toggle"),
  Tk = je()({
    name: "VBtnToggle",
    props: Cl(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const {
        isSelected: a,
        next: l,
        prev: r,
        select: i,
        selected: o,
      } = Da(e, Qu);
      return (
        X(() => {
          var s;
          return m(
            $h,
            { class: "v-btn-toggle" },
            {
              default: () => [
                (s = n.default) == null
                  ? void 0
                  : s.call(n, {
                      isSelected: a,
                      next: l,
                      prev: r,
                      select: i,
                      selected: o,
                    }),
              ],
            }
          );
        }),
        { next: l, prev: r, select: i }
      );
    },
  });
const Rk = ["x-small", "small", "default", "large", "x-large"],
  Dn = ye({ size: { type: [String, Number], default: "default" } }, "size");
function Al(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn();
  return Hu(() => {
    let n, a;
    return (
      $i(Rk, e.size)
        ? (n = `${t}--size-${e.size}`)
        : e.size && (a = { width: ae(e.size), height: ae(e.size) }),
      { sizeClasses: n, sizeStyles: a }
    );
  });
}
const Lk = ye(
    {
      color: String,
      start: Boolean,
      end: Boolean,
      icon: ge,
      ...Dn(),
      ...be({ tag: "i" }),
      ...$e(),
    },
    "v-icon"
  ),
  at = Z({
    name: "VIcon",
    props: Lk(),
    setup(e, t) {
      let { attrs: n, slots: a } = t,
        l;
      a.default &&
        (l = b(() => {
          var u, d;
          const f = (u = a.default) == null ? void 0 : u.call(a);
          if (f)
            return (d = qm(f).filter(
              (v) => v.children && typeof v.children == "string"
            )[0]) == null
              ? void 0
              : d.children;
        }));
      const { themeClasses: r } = Be(e),
        { iconData: i } = WC(l || e),
        { sizeClasses: o } = Al(e),
        { textColorClasses: s, textColorStyles: c } = kt(j(e, "color"));
      return (
        X(() =>
          m(
            i.value.component,
            {
              tag: e.tag,
              icon: i.value.icon,
              class: [
                "v-icon",
                "notranslate",
                r.value,
                o.value,
                s.value,
                {
                  "v-icon--clickable": !!n.onClick,
                  "v-icon--start": e.start,
                  "v-icon--end": e.end,
                },
              ],
              style: [
                o.value
                  ? void 0
                  : {
                      fontSize: ae(e.size),
                      height: ae(e.size),
                      width: ae(e.size),
                    },
                c.value,
              ],
              role: n.onClick ? "button" : void 0,
              "aria-hidden": !n.onClick,
            },
            null
          )
        ),
        {}
      );
    },
  });
function ec(e) {
  const t = B(),
    n = B(!1);
  if (Ku) {
    const a = new IntersectionObserver((l) => {
      e == null || e(l, a), (n.value = !!l.find((r) => r.isIntersecting));
    });
    At(() => {
      a.disconnect();
    }),
      ce(
        t,
        (l, r) => {
          r && (a.unobserve(r), (n.value = !1)), l && a.observe(l);
        },
        { flush: "post" }
      );
  }
  return { intersectionRef: t, isIntersecting: n };
}
const tc = Z({
  name: "VProgressCircular",
  props: {
    bgColor: String,
    color: String,
    indeterminate: [Boolean, String],
    modelValue: { type: [Number, String], default: 0 },
    rotate: { type: [Number, String], default: 0 },
    width: { type: [Number, String], default: 4 },
    ...Dn(),
    ...be({ tag: "div" }),
    ...$e(),
  },
  setup(e, t) {
    let { slots: n } = t;
    const a = 20,
      l = 2 * Math.PI * a,
      r = B(),
      { themeClasses: i } = Be(e),
      { sizeClasses: o, sizeStyles: s } = Al(e),
      { textColorClasses: c, textColorStyles: u } = kt(j(e, "color")),
      { textColorClasses: d, textColorStyles: f } = kt(j(e, "bgColor")),
      { intersectionRef: v, isIntersecting: h } = ec(),
      { resizeRef: p, contentRect: w } = Ea(),
      g = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))),
      _ = b(() => Number(e.width)),
      y = b(() =>
        s.value
          ? Number(e.size)
          : w.value
          ? w.value.width
          : Math.max(_.value, 32)
      ),
      k = b(() => (a / (1 - _.value / y.value)) * 2),
      S = b(() => (_.value / y.value) * k.value),
      A = b(() => ae(((100 - g.value) / 100) * l));
    return (
      bn(() => {
        (v.value = r.value), (p.value = r.value);
      }),
      X(() =>
        m(
          e.tag,
          {
            ref: r,
            class: [
              "v-progress-circular",
              {
                "v-progress-circular--indeterminate": !!e.indeterminate,
                "v-progress-circular--visible": h.value,
                "v-progress-circular--disable-shrink":
                  e.indeterminate === "disable-shrink",
              },
              i.value,
              o.value,
              c.value,
            ],
            style: [s.value, u.value],
            role: "progressbar",
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            "aria-valuenow": e.indeterminate ? void 0 : g.value,
          },
          {
            default: () => [
              m(
                "svg",
                {
                  style: {
                    transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`,
                  },
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: `0 0 ${k.value} ${k.value}`,
                },
                [
                  m(
                    "circle",
                    {
                      class: ["v-progress-circular__underlay", d.value],
                      style: f.value,
                      fill: "transparent",
                      cx: "50%",
                      cy: "50%",
                      r: a,
                      "stroke-width": S.value,
                      "stroke-dasharray": l,
                      "stroke-dashoffset": 0,
                    },
                    null
                  ),
                  m(
                    "circle",
                    {
                      class: "v-progress-circular__overlay",
                      fill: "transparent",
                      cx: "50%",
                      cy: "50%",
                      r: a,
                      "stroke-width": S.value,
                      "stroke-dasharray": l,
                      "stroke-dashoffset": A.value,
                    },
                    null
                  ),
                ]
              ),
              n.default &&
                m("div", { class: "v-progress-circular__content" }, [
                  n.default({ value: g.value }),
                ]),
            ],
          }
        )
      ),
      {}
    );
  },
});
const Ms = Symbol("rippleStop"),
  Bk = 80;
function bf(e, t) {
  (e.style.transform = t), (e.style.webkitTransform = t);
}
function Xo(e, t) {
  e.style.opacity = `calc(${t} * var(--v-theme-overlay-multiplier))`;
}
function Fs(e) {
  return e.constructor.name === "TouchEvent";
}
function Ph(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Nk = function (e, t) {
    var n;
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l = 0,
      r = 0;
    if (!Ph(e)) {
      const f = t.getBoundingClientRect(),
        v = Fs(e) ? e.touches[e.touches.length - 1] : e;
      (l = v.clientX - f.left), (r = v.clientY - f.top);
    }
    let i = 0,
      o = 0.3;
    (n = t._ripple) != null && n.circle
      ? ((o = 0.15),
        (i = t.clientWidth / 2),
        (i = a.center ? i : i + Math.sqrt((l - i) ** 2 + (r - i) ** 2) / 4))
      : (i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2);
    const s = `${(t.clientWidth - i * 2) / 2}px`,
      c = `${(t.clientHeight - i * 2) / 2}px`,
      u = a.center ? s : `${l - i}px`,
      d = a.center ? c : `${r - i}px`;
    return { radius: i, scale: o, x: u, y: d, centerX: s, centerY: c };
  },
  Bi = {
    show(e, t) {
      var n;
      let a =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!(t != null && (n = t._ripple) != null && n.enabled)) return;
      const l = document.createElement("span"),
        r = document.createElement("span");
      l.appendChild(r),
        (l.className = "v-ripple__container"),
        a.class && (l.className += ` ${a.class}`);
      const {
          radius: i,
          scale: o,
          x: s,
          y: c,
          centerX: u,
          centerY: d,
        } = Nk(e, t, a),
        f = `${i * 2}px`;
      (r.className = "v-ripple__animation"),
        (r.style.width = f),
        (r.style.height = f),
        t.appendChild(l);
      const v = window.getComputedStyle(t);
      v &&
        v.position === "static" &&
        ((t.style.position = "relative"),
        (t.dataset.previousPosition = "static")),
        r.classList.add("v-ripple__animation--enter"),
        r.classList.add("v-ripple__animation--visible"),
        bf(r, `translate(${s}, ${c}) scale3d(${o},${o},${o})`),
        Xo(r, 0),
        (r.dataset.activated = String(performance.now())),
        setTimeout(() => {
          r.classList.remove("v-ripple__animation--enter"),
            r.classList.add("v-ripple__animation--in"),
            bf(r, `translate(${u}, ${d}) scale3d(1,1,1)`),
            Xo(r, 0.08);
        }, 0);
    },
    hide(e) {
      var t;
      if (!(e != null && (t = e._ripple) != null && t.enabled)) return;
      const n = e.getElementsByClassName("v-ripple__animation");
      if (n.length === 0) return;
      const a = n[n.length - 1];
      if (a.dataset.isHiding) return;
      a.dataset.isHiding = "true";
      const l = performance.now() - Number(a.dataset.activated),
        r = Math.max(250 - l, 0);
      setTimeout(() => {
        a.classList.remove("v-ripple__animation--in"),
          a.classList.add("v-ripple__animation--out"),
          Xo(a, 0),
          setTimeout(() => {
            e.getElementsByClassName("v-ripple__animation").length === 1 &&
              e.dataset.previousPosition &&
              ((e.style.position = e.dataset.previousPosition),
              delete e.dataset.previousPosition),
              a.parentNode && e.removeChild(a.parentNode);
          }, 300);
      }, r);
    },
  };
function Oh(e) {
  return typeof e == "undefined" || !!e;
}
function br(e) {
  const t = {},
    n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Ms])) {
    if (((e[Ms] = !0), Fs(e)))
      (n._ripple.touched = !0), (n._ripple.isTouch = !0);
    else if (n._ripple.isTouch) return;
    if (
      ((t.center = n._ripple.centered || Ph(e)),
      n._ripple.class && (t.class = n._ripple.class),
      Fs(e))
    ) {
      if (n._ripple.showTimerCommit) return;
      (n._ripple.showTimerCommit = () => {
        Bi.show(e, n, t);
      }),
        (n._ripple.showTimer = window.setTimeout(() => {
          var a;
          n != null &&
            (a = n._ripple) != null &&
            a.showTimerCommit &&
            (n._ripple.showTimerCommit(), (n._ripple.showTimerCommit = null));
        }, Bk));
    } else Bi.show(e, n, t);
  }
}
function _f(e) {
  e[Ms] = !0;
}
function It(e) {
  const t = e.currentTarget;
  if (!(!t || !t._ripple)) {
    if (
      (window.clearTimeout(t._ripple.showTimer),
      e.type === "touchend" && t._ripple.showTimerCommit)
    ) {
      t._ripple.showTimerCommit(),
        (t._ripple.showTimerCommit = null),
        (t._ripple.showTimer = window.setTimeout(() => {
          It(e);
        }));
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }),
      Bi.hide(t);
  }
}
function Th(e) {
  const t = e.currentTarget;
  !t ||
    !t._ripple ||
    (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
    window.clearTimeout(t._ripple.showTimer));
}
let _r = !1;
function Rh(e) {
  !_r &&
    (e.keyCode === qd.enter || e.keyCode === qd.space) &&
    ((_r = !0), br(e));
}
function Lh(e) {
  (_r = !1), It(e);
}
function Bh(e) {
  _r && ((_r = !1), It(e));
}
function Nh(e, t, n) {
  var i;
  const { value: a, modifiers: l } = t,
    r = Oh(a);
  if (
    (r || Bi.hide(e),
    (e._ripple = (i = e._ripple) != null ? i : {}),
    (e._ripple.enabled = r),
    (e._ripple.centered = l.center),
    (e._ripple.circle = l.circle),
    Vs(a) && a.class && (e._ripple.class = a.class),
    r && !n)
  ) {
    if (l.stop) {
      e.addEventListener("touchstart", _f, { passive: !0 }),
        e.addEventListener("mousedown", _f);
      return;
    }
    e.addEventListener("touchstart", br, { passive: !0 }),
      e.addEventListener("touchend", It, { passive: !0 }),
      e.addEventListener("touchmove", Th, { passive: !0 }),
      e.addEventListener("touchcancel", It),
      e.addEventListener("mousedown", br),
      e.addEventListener("mouseup", It),
      e.addEventListener("mouseleave", It),
      e.addEventListener("keydown", Rh),
      e.addEventListener("keyup", Lh),
      e.addEventListener("blur", Bh),
      e.addEventListener("dragstart", It, { passive: !0 });
  } else !r && n && Mh(e);
}
function Mh(e) {
  e.removeEventListener("mousedown", br),
    e.removeEventListener("touchstart", br),
    e.removeEventListener("touchend", It),
    e.removeEventListener("touchmove", Th),
    e.removeEventListener("touchcancel", It),
    e.removeEventListener("mouseup", It),
    e.removeEventListener("mouseleave", It),
    e.removeEventListener("keydown", Rh),
    e.removeEventListener("keyup", Lh),
    e.removeEventListener("dragstart", It),
    e.removeEventListener("blur", Bh);
}
function Mk(e, t) {
  Nh(e, t, !1);
}
function Fk(e) {
  delete e._ripple, Mh(e);
}
function Dk(e, t) {
  if (t.value === t.oldValue) return;
  const n = Oh(t.oldValue);
  Nh(e, t, n);
}
const la = { mounted: Mk, unmounted: Fk, updated: Dk };
const nc = Z({
    name: "VProgressLinear",
    props: {
      active: { type: Boolean, default: !0 },
      bgColor: String,
      bgOpacity: [Number, String],
      bufferValue: { type: [Number, String], default: 0 },
      clickable: Boolean,
      color: String,
      height: { type: [Number, String], default: 4 },
      indeterminate: Boolean,
      max: { type: [Number, String], default: 100 },
      modelValue: { type: [Number, String], default: 0 },
      reverse: Boolean,
      stream: Boolean,
      striped: Boolean,
      roundedBar: Boolean,
      ...Ye(),
      ...be(),
      ...$e(),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = pe(e, "modelValue"),
        { isRtl: l } = Mn(),
        { themeClasses: r } = Be(e),
        { textColorClasses: i, textColorStyles: o } = kt(e, "color"),
        { backgroundColorClasses: s, backgroundColorStyles: c } = tt(
          b(() => e.bgColor || e.color)
        ),
        { backgroundColorClasses: u, backgroundColorStyles: d } = tt(
          e,
          "color"
        ),
        { roundedClasses: f } = nt(e),
        { intersectionRef: v, isIntersecting: h } = ec(),
        p = b(() => parseInt(e.max, 10)),
        w = b(() => parseInt(e.height, 10)),
        g = b(() => (parseFloat(e.bufferValue) / p.value) * 100),
        _ = b(() => (parseFloat(a.value) / p.value) * 100),
        y = b(() => l.value !== e.reverse),
        k = b(() =>
          e.indeterminate ? "fade-transition" : "slide-x-transition"
        ),
        S = b(() =>
          e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity)
        );
      function A(x) {
        if (!v.value) return;
        const { left: C, right: V, width: $ } = v.value.getBoundingClientRect(),
          R = y.value ? $ - x.clientX + (V - $) : x.clientX - C;
        a.value = Math.round((R / $) * p.value);
      }
      return (
        X(() =>
          m(
            e.tag,
            {
              ref: v,
              class: [
                "v-progress-linear",
                {
                  "v-progress-linear--active": e.active && h.value,
                  "v-progress-linear--reverse": y.value,
                  "v-progress-linear--rounded": e.rounded,
                  "v-progress-linear--rounded-bar": e.roundedBar,
                  "v-progress-linear--striped": e.striped,
                },
                f.value,
                r.value,
              ],
              style: {
                height: e.active ? ae(w.value) : 0,
                "--v-progress-linear-height": ae(w.value),
              },
              role: "progressbar",
              "aria-hidden": e.active ? "false" : "true",
              "aria-valuemin": "0",
              "aria-valuemax": e.max,
              "aria-valuenow": e.indeterminate ? void 0 : _.value,
              onClick: e.clickable && A,
            },
            {
              default: () => [
                e.stream &&
                  m(
                    "div",
                    {
                      key: "stream",
                      class: ["v-progress-linear__stream", i.value],
                      style: {
                        ...o.value,
                        [y.value ? "left" : "right"]: ae(-w.value),
                        borderTop: `${ae(w.value / 2)} dotted`,
                        opacity: S.value,
                        top: `calc(50% - ${ae(w.value / 4)})`,
                        width: ae(100 - g.value, "%"),
                        "--v-progress-linear-stream-to": ae(
                          w.value * (y.value ? 1 : -1)
                        ),
                      },
                    },
                    null
                  ),
                m(
                  "div",
                  {
                    class: ["v-progress-linear__background", s.value],
                    style: [
                      c.value,
                      {
                        opacity: S.value,
                        width: ae(e.stream ? g.value : 100, "%"),
                      },
                    ],
                  },
                  null
                ),
                m(
                  pn,
                  { name: k.value },
                  {
                    default: () => [
                      e.indeterminate
                        ? m(
                            "div",
                            { class: "v-progress-linear__indeterminate" },
                            [
                              ["long", "short"].map((x) =>
                                m(
                                  "div",
                                  {
                                    key: x,
                                    class: [
                                      "v-progress-linear__indeterminate",
                                      x,
                                      u.value,
                                    ],
                                    style: d.value,
                                  },
                                  null
                                )
                              ),
                            ]
                          )
                        : m(
                            "div",
                            {
                              class: [
                                "v-progress-linear__determinate",
                                u.value,
                              ],
                              style: [d.value, { width: ae(_.value, "%") }],
                            },
                            null
                          ),
                    ],
                  }
                ),
                n.default &&
                  m("div", { class: "v-progress-linear__content" }, [
                    n.default({ value: _.value, buffer: g.value }),
                  ]),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  ac = ye({ loading: Boolean }, "loader");
function yo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn();
  return { loaderClasses: b(() => ({ [`${t}--loading`]: e.loading })) };
}
function lc(e, t) {
  var n;
  let { slots: a } = t;
  return m("div", { class: `${e.name}__loader` }, [
    ((n = a.default) == null
      ? void 0
      : n.call(a, { color: e.color, isActive: e.active })) ||
      m(
        nc,
        { active: e.active, color: e.color, height: "2", indeterminate: !0 },
        null
      ),
  ]);
}
const xf = {
    center: "center",
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
  },
  za = ye({ location: String }, "location");
function ja(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = Mn();
  return {
    locationStyles: b(() => {
      if (!e.location) return {};
      const { side: r, align: i } = Is(
        e.location.split(" ").length > 1 ? e.location : `${e.location} center`,
        a.value
      );
      function o(c) {
        return n ? n(c) : 0;
      }
      const s = {};
      return (
        r !== "center" &&
          (t ? (s[xf[r]] = `calc(100% - ${o(r)}px)`) : (s[r] = 0)),
        i !== "center"
          ? t
            ? (s[xf[i]] = `calc(100% - ${o(i)}px)`)
            : (s[i] = 0)
          : (r === "center"
              ? (s.top = s.left = "50%")
              : (s[
                  { top: "left", bottom: "left", left: "top", right: "top" }[r]
                ] = "50%"),
            (s.transform = {
              top: "translateX(-50%)",
              bottom: "translateX(-50%)",
              left: "translateY(-50%)",
              right: "translateY(-50%)",
              center: "translate(-50%, -50%)",
            }[r])),
        s
      );
    }),
  };
}
const zk = ["static", "relative", "fixed", "absolute", "sticky"],
  El = ye(
    { position: { type: String, validator: (e) => zk.includes(e) } },
    "position"
  );
function Vl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn();
  return {
    positionClasses: b(() => (e.position ? `${t}--${e.position}` : void 0)),
  };
}
function Fh() {
  var e, t;
  return (e = ht("useRouter")) == null || (t = e.proxy) == null
    ? void 0
    : t.$router;
}
function Tr(e, t) {
  const n = tb("RouterLink"),
    a = b(() => !!(e.href || e.to)),
    l = b(
      () => (a == null ? void 0 : a.value) || Jd(t, "click") || Jd(e, "click")
    );
  if (typeof n == "string")
    return { isLink: a, isClickable: l, href: j(e, "href") };
  const r = e.to ? n.useLink(e) : void 0;
  return {
    isLink: a,
    isClickable: l,
    route: r == null ? void 0 : r.route,
    navigate: r == null ? void 0 : r.navigate,
    isActive:
      r &&
      b(() => {
        var i, o;
        return e.exact
          ? (i = r.isExactActive) == null
            ? void 0
            : i.value
          : (o = r.isActive) == null
          ? void 0
          : o.value;
      }),
    href: b(() => (e.to ? (r == null ? void 0 : r.route.value.href) : e.href)),
  };
}
const $l = ye(
  { href: String, replace: Boolean, to: [String, Object], exact: Boolean },
  "router"
);
let Jo = !1;
function jk(e, t) {
  let n = !1,
    a,
    l;
  Xe &&
    (Ke(() => {
      window.addEventListener("popstate", r),
        (a =
          e == null
            ? void 0
            : e.beforeEach((i, o, s) => {
                Jo ? (n ? t(s) : s()) : setTimeout(() => (n ? t(s) : s())),
                  (Jo = !0);
              })),
        (l =
          e == null
            ? void 0
            : e.afterEach(() => {
                Jo = !1;
              }));
    }),
    yn(() => {
      var i, o;
      window.removeEventListener("popstate", r),
        (i = a) == null || i(),
        (o = l) == null || o();
    }));
  function r(i) {
    var o;
    ((o = i.state) != null && o.replaced) ||
      ((n = !0), setTimeout(() => (n = !1)));
  }
}
function Hk(e, t) {
  ce(
    () => {
      var n;
      return (n = e.isActive) == null ? void 0 : n.value;
    },
    (n) => {
      e.isLink.value &&
        n &&
        t &&
        Ke(() => {
          t(!0);
        });
    },
    { immediate: !0 }
  );
}
const St = Z({
    name: "VBtn",
    directives: { Ripple: la },
    props: {
      active: { type: Boolean, default: void 0 },
      symbol: { type: null, default: Qu },
      flat: Boolean,
      icon: [Boolean, String, Function, Object],
      prependIcon: ge,
      appendIcon: ge,
      block: Boolean,
      stacked: Boolean,
      ripple: { type: Boolean, default: !0 },
      ...Nt(),
      ...Ye(),
      ...st(),
      ...sn(),
      ...rt(),
      ...Fa(),
      ...ac(),
      ...za(),
      ...El(),
      ...$l(),
      ...Dn(),
      ...be({ tag: "button" }),
      ...$e(),
      ...qt({ variant: "elevated" }),
    },
    emits: { "group:selected": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { themeClasses: l } = Be(e),
        { borderClasses: r } = Kt(e),
        { colorClasses: i, colorStyles: o, variantClasses: s } = Ma(e),
        { densityClasses: c } = yt(e),
        { dimensionStyles: u } = un(e),
        { elevationClasses: d } = gt(e),
        { loaderClasses: f } = yo(e),
        { locationStyles: v } = ja(e),
        { positionClasses: h } = Vl(e),
        { roundedClasses: p } = nt(e),
        { sizeClasses: w, sizeStyles: g } = Al(e),
        _ = kl(e, e.symbol, !1),
        y = Tr(e, n),
        k = b(() => {
          var x;
          return (
            e.active !== !1 &&
            (e.active ||
              ((x = y.isActive) == null ? void 0 : x.value) ||
              (_ == null ? void 0 : _.isSelected.value))
          );
        }),
        S = b(() => (_ == null ? void 0 : _.disabled.value) || e.disabled),
        A = b(
          () => e.variant === "elevated" && !(e.disabled || e.flat || e.border)
        );
      return (
        Hk(y, _ == null ? void 0 : _.select),
        X(() => {
          var x, C, V, $;
          const R = y.isLink.value ? "a" : e.tag,
            I = !_ || _.isSelected.value,
            L = !!(e.prependIcon || a.prepend),
            D = !!(e.appendIcon || a.append),
            Y = !!(e.icon && e.icon !== !0);
          return Le(
            m(
              R,
              {
                type: R === "a" ? void 0 : "button",
                class: [
                  "v-btn",
                  _ == null ? void 0 : _.selectedClass.value,
                  {
                    "v-btn--active": k.value,
                    "v-btn--block": e.block,
                    "v-btn--disabled": S.value,
                    "v-btn--elevated": A.value,
                    "v-btn--flat": e.flat,
                    "v-btn--icon": !!e.icon,
                    "v-btn--loading": e.loading,
                    "v-btn--stacked": e.stacked,
                  },
                  l.value,
                  r.value,
                  I ? i.value : void 0,
                  c.value,
                  d.value,
                  f.value,
                  h.value,
                  p.value,
                  w.value,
                  s.value,
                ],
                style: [I ? o.value : void 0, u.value, v.value, g.value],
                disabled: S.value || void 0,
                href: y.href.value,
                onClick: (z) => {
                  var T;
                  S.value ||
                    ((T = y.navigate) == null || T.call(y, z),
                    _ == null || _.toggle());
                },
              },
              {
                default: () => {
                  var z;
                  return [
                    Na(!0, "v-btn"),
                    !e.icon &&
                      L &&
                      m(
                        Ne,
                        {
                          key: "prepend",
                          defaults: { VIcon: { icon: e.prependIcon } },
                        },
                        {
                          default: () => {
                            var T;
                            return [
                              m("span", { class: "v-btn__prepend" }, [
                                (T =
                                  (x = a.prepend) == null
                                    ? void 0
                                    : x.call(a)) != null
                                  ? T
                                  : m(at, null, null),
                              ]),
                            ];
                          },
                        }
                      ),
                    m(
                      "span",
                      { class: "v-btn__content", "data-no-activator": "" },
                      [
                        m(
                          Ne,
                          {
                            key: "content",
                            defaults: { VIcon: { icon: Y ? e.icon : void 0 } },
                          },
                          {
                            default: () => {
                              var T;
                              return [
                                (T =
                                  (C = a.default) == null
                                    ? void 0
                                    : C.call(a)) != null
                                  ? T
                                  : Y && m(at, { key: "icon" }, null),
                              ];
                            },
                          }
                        ),
                      ]
                    ),
                    !e.icon &&
                      D &&
                      m(
                        Ne,
                        {
                          key: "append",
                          defaults: { VIcon: { icon: e.appendIcon } },
                        },
                        {
                          default: () => {
                            var T;
                            return [
                              m("span", { class: "v-btn__append" }, [
                                (T =
                                  (V = a.append) == null
                                    ? void 0
                                    : V.call(a)) != null
                                  ? T
                                  : m(at, null, null),
                              ]),
                            ];
                          },
                        }
                      ),
                    !!e.loading &&
                      m("span", { key: "loader", class: "v-btn__loader" }, [
                        (z = ($ = a.loader) == null ? void 0 : $.call(a)) !=
                        null
                          ? z
                          : m(
                              tc,
                              {
                                color:
                                  typeof e.loading == "boolean"
                                    ? void 0
                                    : e.loading,
                                indeterminate: !0,
                                size: "23",
                                width: "2",
                              },
                              null
                            ),
                      ]),
                  ];
                },
              }
            ),
            [[Rt("ripple"), !S.value && e.ripple, null]]
          );
        }),
        {}
      );
    },
  }),
  Uk = Z({
    name: "VAppBarNavIcon",
    props: { icon: { type: ge, default: "$menu" } },
    setup(e, t) {
      let { slots: n } = t;
      return (
        X(() => m(St, { class: "v-app-bar-nav-icon", icon: e.icon }, n)), {}
      );
    },
  }),
  Wk = Z({
    name: "VToolbarItems",
    props: qt({ variant: "text" }),
    setup(e, t) {
      let { slots: n } = t;
      return (
        it({
          VBtn: {
            color: j(e, "color"),
            height: "inherit",
            variant: j(e, "variant"),
          },
        }),
        X(() => {
          var a;
          return m("div", { class: "v-toolbar-items" }, [
            (a = n.default) == null ? void 0 : a.call(n),
          ]);
        }),
        {}
      );
    },
  }),
  Yk = Z({
    name: "VAppBarTitle",
    props: { ...Ri.props },
    setup(e, t) {
      let { slots: n } = t;
      return X(() => m(Ri, { class: "v-app-bar-title" }, n)), {};
    },
  });
const Dh = Gt("v-alert-title"),
  Gk = ["success", "info", "warning", "error"],
  Kk = Z({
    name: "VAlert",
    props: {
      border: {
        type: [Boolean, String],
        validator: (e) =>
          typeof e == "boolean" ||
          ["top", "end", "bottom", "start"].includes(e),
      },
      borderColor: String,
      closable: Boolean,
      closeIcon: { type: ge, default: "$close" },
      closeLabel: { type: String, default: "$vuetify.close" },
      icon: { type: [Boolean, String, Function, Object], default: null },
      modelValue: { type: Boolean, default: !0 },
      prominent: Boolean,
      title: String,
      text: String,
      type: { type: String, validator: (e) => Gk.includes(e) },
      ...st(),
      ...sn(),
      ...rt(),
      ...za(),
      ...El(),
      ...Ye(),
      ...be(),
      ...$e(),
      ...qt({ variant: "flat" }),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = pe(e, "modelValue"),
        l = b(() => {
          var k;
          if (e.icon !== !1)
            return e.type ? ((k = e.icon) != null ? k : `$${e.type}`) : e.icon;
        }),
        r = b(() => {
          var k;
          return {
            color: (k = e.color) != null ? k : e.type,
            variant: e.variant,
          };
        }),
        { themeClasses: i } = Be(e),
        { colorClasses: o, colorStyles: s, variantClasses: c } = Ma(r),
        { densityClasses: u } = yt(e),
        { dimensionStyles: d } = un(e),
        { elevationClasses: f } = gt(e),
        { locationStyles: v } = ja(e),
        { positionClasses: h } = Vl(e),
        { roundedClasses: p } = nt(e),
        { textColorClasses: w, textColorStyles: g } = kt(j(e, "borderColor")),
        { t: _ } = on(),
        y = b(() => ({
          "aria-label": _(e.closeLabel),
          onClick(k) {
            a.value = !1;
          },
        }));
      return () => {
        var k, S;
        const A = !!(n.prepend || l.value),
          x = !!(n.title || e.title),
          C = !!(e.text || n.text),
          V = !!(n.close || e.closable);
        return (
          a.value &&
          m(
            e.tag,
            {
              class: [
                "v-alert",
                e.border && {
                  "v-alert--border": !!e.border,
                  [`v-alert--border-${e.border === !0 ? "start" : e.border}`]:
                    !0,
                },
                { "v-alert--prominent": e.prominent },
                i.value,
                o.value,
                u.value,
                f.value,
                h.value,
                p.value,
                c.value,
              ],
              style: [s.value, d.value, v.value],
              role: "alert",
            },
            {
              default: () => [
                Na(!1, "v-alert"),
                e.border &&
                  m(
                    "div",
                    {
                      key: "border",
                      class: ["v-alert__border", w.value],
                      style: g.value,
                    },
                    null
                  ),
                A &&
                  m(
                    Ne,
                    {
                      key: "prepend",
                      defaults: {
                        VIcon: {
                          density: e.density,
                          icon: l.value,
                          size: e.prominent ? 44 : 28,
                        },
                      },
                    },
                    {
                      default: () => [
                        m("div", { class: "v-alert__prepend" }, [
                          n.prepend
                            ? n.prepend()
                            : l.value && m(at, null, null),
                        ]),
                      ],
                    }
                  ),
                m("div", { class: "v-alert__content" }, [
                  x &&
                    m(
                      Dh,
                      { key: "title" },
                      { default: () => [n.title ? n.title() : e.title] }
                    ),
                  C && (n.text ? n.text() : e.text),
                  (k = n.default) == null ? void 0 : k.call(n),
                ]),
                n.append &&
                  m("div", { key: "append", class: "v-alert__append" }, [
                    n.append(),
                  ]),
                V &&
                  m(
                    Ne,
                    {
                      key: "close",
                      defaults: {
                        VBtn: {
                          icon: e.closeIcon,
                          size: "x-small",
                          variant: "text",
                        },
                      },
                    },
                    {
                      default: () => {
                        var $;
                        return [
                          m("div", { class: "v-alert__close" }, [
                            ($ =
                              (S = n.close) == null
                                ? void 0
                                : S.call(n, { props: y.value })) != null
                              ? $
                              : m(St, y.value, null),
                          ]),
                        ];
                      },
                    }
                  ),
              ],
            }
          )
        );
      };
    },
  });
function zh(e) {
  const { t } = on();
  function n(a) {
    var s;
    let { name: l } = a;
    const r = {
        prepend: "prependAction",
        prependInner: "prependAction",
        append: "appendAction",
        appendInner: "appendAction",
        clear: "clear",
      }[l],
      i = e[`onClick:${l}`],
      o =
        i && r
          ? t(`$vuetify.input.${r}`, (s = e.label) != null ? s : "")
          : void 0;
    return m(at, { icon: e[`${l}Icon`], "aria-label": o, onClick: i }, null);
  }
  return { InputIcon: n };
}
const Il = Z({
    name: "VLabel",
    props: { text: String, clickable: Boolean, ...$e() },
    setup(e, t) {
      let { slots: n } = t;
      return (
        X(() => {
          var a;
          return m(
            "label",
            { class: ["v-label", { "v-label--clickable": e.clickable }] },
            [e.text, (a = n.default) == null ? void 0 : a.call(n)]
          );
        }),
        {}
      );
    },
  }),
  Wl = Z({
    name: "VFieldLabel",
    props: { floating: Boolean },
    setup(e, t) {
      let { slots: n } = t;
      return (
        X(() =>
          m(
            Il,
            {
              class: [
                "v-field-label",
                { "v-field-label--floating": e.floating },
              ],
              "aria-hidden": e.floating || void 0,
            },
            n
          )
        ),
        {}
      );
    },
  }),
  bo = ye({ focused: Boolean }, "focus");
function Ha(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn();
  const n = pe(e, "focused"),
    a = b(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = !0;
  }
  function r() {
    n.value = !1;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: r };
}
const qk = ["underlined", "outlined", "filled", "solo", "plain"],
  _o = ye(
    {
      appendInnerIcon: ge,
      bgColor: String,
      clearable: Boolean,
      clearIcon: { type: ge, default: "$clear" },
      active: Boolean,
      color: String,
      dirty: Boolean,
      disabled: Boolean,
      error: Boolean,
      label: String,
      persistentClear: Boolean,
      prependInnerIcon: ge,
      reverse: Boolean,
      singleLine: Boolean,
      variant: {
        type: String,
        default: "filled",
        validator: (e) => qk.includes(e),
      },
      "onClick:clear": ka,
      "onClick:appendInner": ka,
      "onClick:prependInner": ka,
      ...$e(),
      ...ac(),
    },
    "v-field"
  ),
  Rr = je()({
    name: "VField",
    inheritAttrs: !1,
    props: { id: String, ...bo(), ..._o() },
    emits: {
      "click:control": (e) => !0,
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t;
      const { themeClasses: r } = Be(e),
        { loaderClasses: i } = yo(e),
        { focusClasses: o, isFocused: s, focus: c, blur: u } = Ha(e),
        { InputIcon: d } = zh(e),
        f = b(() => e.dirty || e.active),
        v = b(() => !e.singleLine && !!(e.label || l.label)),
        h = pt(),
        p = b(() => e.id || `input-${h}`),
        w = B(),
        g = B(),
        _ = B(),
        { backgroundColorClasses: y, backgroundColorStyles: k } = tt(
          j(e, "bgColor")
        ),
        { textColorClasses: S, textColorStyles: A } = kt(
          b(() =>
            f.value && s.value && !e.error && !e.disabled ? e.color : void 0
          )
        );
      ce(
        f,
        (V) => {
          if (v.value) {
            const $ = w.value.$el,
              R = g.value.$el,
              I = Uu($),
              L = R.getBoundingClientRect(),
              D = L.x - I.x,
              Y = L.y - I.y - (I.height / 2 - L.height / 2),
              z = L.width / 0.75,
              T = Math.abs(z - I.width) > 1 ? { maxWidth: ae(z) } : void 0,
              F = getComputedStyle($),
              J = getComputedStyle(R),
              K = parseFloat(F.transitionDuration) * 1e3 || 150,
              le = parseFloat(J.getPropertyValue("--v-field-label-scale")),
              ie = J.getPropertyValue("color");
            ($.style.visibility = "visible"),
              (R.style.visibility = "hidden"),
              ya(
                $,
                {
                  transform: `translate(${D}px, ${Y}px) scale(${le})`,
                  color: ie,
                  ...T,
                },
                { duration: K, easing: gr, direction: V ? "normal" : "reverse" }
              ).finished.then(() => {
                $.style.removeProperty("visibility"),
                  R.style.removeProperty("visibility");
              });
          }
        },
        { flush: "post" }
      );
      const x = b(() => ({
        isActive: f,
        isFocused: s,
        controlRef: _,
        blur: u,
        focus: c,
      }));
      function C(V) {
        V.target !== document.activeElement && V.preventDefault(),
          a("click:control", V);
      }
      return (
        X(() => {
          var V, $, R;
          const I = e.variant === "outlined",
            L = l["prepend-inner"] || e.prependInnerIcon,
            D = !!(e.clearable || l.clear),
            Y = !!(l["append-inner"] || e.appendInnerIcon || D),
            z = l.label
              ? l.label({ label: e.label, props: { for: p.value } })
              : e.label;
          return m(
            "div",
            ue(
              {
                class: [
                  "v-field",
                  {
                    "v-field--active": f.value,
                    "v-field--appended": Y,
                    "v-field--disabled": e.disabled,
                    "v-field--dirty": e.dirty,
                    "v-field--error": e.error,
                    "v-field--has-background": !!e.bgColor,
                    "v-field--persistent-clear": e.persistentClear,
                    "v-field--prepended": L,
                    "v-field--reverse": e.reverse,
                    "v-field--single-line": e.singleLine,
                    "v-field--no-label": !z,
                    [`v-field--variant-${e.variant}`]: !0,
                  },
                  r.value,
                  y.value,
                  o.value,
                  i.value,
                ],
                style: [k.value, A.value],
                onClick: C,
              },
              n
            ),
            [
              m("div", { class: "v-field__overlay" }, null),
              m(
                lc,
                {
                  name: "v-field",
                  active: e.loading,
                  color: e.error ? "error" : e.color,
                },
                { default: l.loader }
              ),
              L &&
                m("div", { key: "prepend", class: "v-field__prepend-inner" }, [
                  e.prependInnerIcon &&
                    m(d, { key: "prepend-icon", name: "prependInner" }, null),
                  (V = l["prepend-inner"]) == null
                    ? void 0
                    : V.call(l, x.value),
                ]),
              m("div", { class: "v-field__field", "data-no-activator": "" }, [
                ["solo", "filled"].includes(e.variant) &&
                  v.value &&
                  m(
                    Wl,
                    {
                      key: "floating-label",
                      ref: g,
                      class: [S.value],
                      floating: !0,
                      for: p.value,
                    },
                    { default: () => [z] }
                  ),
                m(Wl, { ref: w, for: p.value }, { default: () => [z] }),
                ($ = l.default) == null
                  ? void 0
                  : $.call(l, {
                      ...x.value,
                      props: { id: p.value, class: "v-field__input" },
                      focus: c,
                      blur: u,
                    }),
              ]),
              D &&
                m(
                  Ju,
                  { key: "clear" },
                  {
                    default: () => [
                      Le(
                        m("div", { class: "v-field__clearable" }, [
                          l.clear ? l.clear() : m(d, { name: "clear" }, null),
                        ]),
                        [[_n, e.dirty]]
                      ),
                    ],
                  }
                ),
              Y &&
                m("div", { key: "append", class: "v-field__append-inner" }, [
                  (R = l["append-inner"]) == null ? void 0 : R.call(l, x.value),
                  e.appendInnerIcon &&
                    m(d, { key: "append-icon", name: "appendInner" }, null),
                ]),
              m("div", { class: ["v-field__outline", S.value] }, [
                I &&
                  m(xe, null, [
                    m("div", { class: "v-field__outline__start" }, null),
                    v.value &&
                      m("div", { class: "v-field__outline__notch" }, [
                        m(
                          Wl,
                          { ref: g, floating: !0, for: p.value },
                          { default: () => [z] }
                        ),
                      ]),
                    m("div", { class: "v-field__outline__end" }, null),
                  ]),
                ["plain", "underlined"].includes(e.variant) &&
                  v.value &&
                  m(
                    Wl,
                    { ref: g, floating: !0, for: p.value },
                    { default: () => [z] }
                  ),
              ]),
            ]
          );
        }),
        { controlRef: _ }
      );
    },
  });
function rc(e) {
  const t = Object.keys(Rr.props).filter((n) => !Xm(n));
  return Lt(e, t);
}
const jh = Z({
    name: "VMessages",
    props: {
      active: Boolean,
      color: String,
      messages: { type: [Array, String], default: () => [] },
      ...Fn({ transition: { component: Xu, leaveAbsolute: !0, group: !0 } }),
    },
    setup(e, t) {
      let { slots: n } = t;
      const a = b(() => Ut(e.messages)),
        { textColorClasses: l, textColorStyles: r } = kt(b(() => e.color));
      return (
        X(() =>
          m(
            hn,
            {
              transition: e.transition,
              tag: "div",
              class: ["v-messages", l.value],
              style: r.value,
            },
            {
              default: () => [
                e.active &&
                  a.value.map((i, o) =>
                    m(
                      "div",
                      { class: "v-messages__message", key: `${o}-${a.value}` },
                      [n.message ? n.message({ message: i }) : i]
                    )
                  ),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  Hh = Symbol.for("vuetify:form"),
  Xk = ye(
    {
      disabled: Boolean,
      fastFail: Boolean,
      lazyValidation: Boolean,
      readonly: Boolean,
      modelValue: { type: Boolean, default: null },
      validateOn: { type: String, default: "input" },
    },
    "form"
  );
function Jk(e) {
  const t = pe(e, "modelValue"),
    n = b(() => e.disabled),
    a = b(() => e.readonly),
    l = B(!1),
    r = B([]),
    i = B([]);
  async function o() {
    const u = [];
    let d = !0;
    (i.value = []), (l.value = !0);
    for (const f of r.value) {
      const v = await f.validate();
      if (
        (v.length > 0 && ((d = !1), u.push({ id: f.id, errorMessages: v })),
        !d && e.fastFail)
      )
        break;
    }
    return (i.value = u), (l.value = !1), { valid: d, errors: i.value };
  }
  function s() {
    r.value.forEach((u) => u.reset()), (t.value = null);
  }
  function c() {
    r.value.forEach((u) => u.resetValidation()),
      (i.value = []),
      (t.value = null);
  }
  return (
    ce(
      r,
      () => {
        let u = 0,
          d = 0;
        const f = [];
        for (const v of r.value)
          v.isValid === !1
            ? (d++, f.push({ id: v.id, errorMessages: v.errorMessages }))
            : v.isValid === !0 && u++;
        (i.value = f),
          (t.value = d > 0 ? !1 : u === r.value.length ? !0 : null);
      },
      { deep: !0 }
    ),
    Qe(Hh, {
      register: (u) => {
        let { id: d, validate: f, reset: v, resetValidation: h } = u;
        r.value.some((p) => p.id === d) && Aa(`Duplicate input name "${d}"`),
          r.value.push({
            id: d,
            validate: f,
            reset: v,
            resetValidation: h,
            isValid: null,
            errorMessages: [],
          });
      },
      unregister: (u) => {
        r.value = r.value.filter((d) => d.id !== u);
      },
      update: (u, d, f) => {
        const v = r.value.find((h) => h.id === u);
        !v || ((v.isValid = d), (v.errorMessages = f));
      },
      isDisabled: n,
      isReadonly: a,
      isValidating: l,
      items: r,
      validateOn: j(e, "validateOn"),
    }),
    {
      errors: i,
      isDisabled: n,
      isReadonly: a,
      isValidating: l,
      items: r,
      validate: o,
      reset: s,
      resetValidation: c,
    }
  );
}
function Zk() {
  return Oe(Hh, null);
}
const Uh = ye(
  {
    disabled: Boolean,
    error: Boolean,
    errorMessages: { type: [Array, String], default: () => [] },
    maxErrors: { type: [Number, String], default: 1 },
    name: String,
    label: String,
    readonly: Boolean,
    rules: { type: Array, default: () => [] },
    modelValue: null,
    validateOn: String,
    validationValue: null,
    ...bo(),
  },
  "validation"
);
function Wh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn(),
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pt();
  const a = pe(e, "modelValue"),
    l = b(() => (e.validationValue === void 0 ? a.value : e.validationValue)),
    r = Zk(),
    i = B([]),
    o = B(!0),
    s = b(
      () =>
        !!(
          Ut(a.value === "" ? null : a.value).length ||
          Ut(l.value === "" ? null : l.value).length
        )
    ),
    c = b(() => !!(e.disabled || (r != null && r.isDisabled.value))),
    u = b(() => !!(e.readonly || (r != null && r.isReadonly.value))),
    d = b(() =>
      e.errorMessages.length
        ? Ut(e.errorMessages.slice(0, Math.max(0, +e.maxErrors)))
        : i.value
    ),
    f = b(() =>
      e.error || d.value.length ? !1 : e.rules.length && o.value ? null : !0
    ),
    v = B(!1),
    h = b(() => ({
      [`${t}--error`]: f.value === !1,
      [`${t}--dirty`]: s.value,
      [`${t}--disabled`]: c.value,
      [`${t}--readonly`]: u.value,
    })),
    p = b(() => {
      var k;
      return (k = e.name) != null ? k : Ot(n);
    });
  ao(() => {
    r == null ||
      r.register({ id: p.value, validate: y, reset: g, resetValidation: _ });
  }),
    At(() => {
      r == null || r.unregister(p.value);
    });
  const w = b(
    () => e.validateOn || (r == null ? void 0 : r.validateOn.value) || "input"
  );
  _t(() => (r == null ? void 0 : r.update(p.value, f.value, d.value))),
    gl(
      () => w.value === "input",
      () => {
        ce(l, () => {
          if (l.value != null) y();
          else if (e.focused) {
            const k = ce(
              () => e.focused,
              (S) => {
                S || y(), k();
              }
            );
          }
        });
      }
    ),
    gl(
      () => w.value === "blur",
      () => {
        ce(
          () => e.focused,
          (k) => {
            k || y();
          }
        );
      }
    ),
    ce(f, () => {
      r == null || r.update(p.value, f.value, d.value);
    });
  function g() {
    _(), (a.value = null);
  }
  function _() {
    (o.value = !0), (i.value = []);
  }
  async function y() {
    const k = [];
    v.value = !0;
    for (const S of e.rules) {
      if (k.length >= (e.maxErrors || 1)) break;
      const x = await (typeof S == "function" ? S : () => S)(l.value);
      if (x !== !0) {
        if (typeof x != "string") {
          console.warn(
            `${x} is not a valid value. Rule functions must return boolean true or a string.`
          );
          continue;
        }
        k.push(x);
      }
    }
    return (i.value = k), (v.value = !1), (o.value = !1), i.value;
  }
  return {
    errorMessages: d,
    isDirty: s,
    isDisabled: c,
    isReadonly: u,
    isPristine: o,
    isValid: f,
    isValidating: v,
    reset: g,
    resetValidation: _,
    validate: y,
    validationClasses: h,
  };
}
const zn = ye(
    {
      id: String,
      appendIcon: ge,
      prependIcon: ge,
      hideDetails: [Boolean, String],
      messages: { type: [Array, String], default: () => [] },
      direction: {
        type: String,
        default: "horizontal",
        validator: (e) => ["horizontal", "vertical"].includes(e),
      },
      "onClick:prepend": ka,
      "onClick:append": ka,
      ...st(),
      ...Uh(),
    },
    "v-input"
  ),
  wn = je()({
    name: "VInput",
    props: { ...zn() },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a, emit: l } = t;
      const { densityClasses: r } = yt(e),
        { InputIcon: i } = zh(e),
        o = pt(),
        s = b(() => e.id || `input-${o}`),
        {
          errorMessages: c,
          isDirty: u,
          isDisabled: d,
          isReadonly: f,
          isPristine: v,
          isValid: h,
          isValidating: p,
          reset: w,
          resetValidation: g,
          validate: _,
          validationClasses: y,
        } = Wh(e, "v-input", s),
        k = b(() => ({
          id: s,
          isDirty: u,
          isDisabled: d,
          isReadonly: f,
          isPristine: v,
          isValid: h,
          isValidating: p,
          reset: w,
          resetValidation: g,
          validate: _,
        }));
      return (
        X(() => {
          var S, A, x, C, V;
          const $ = !!(a.prepend || e.prependIcon),
            R = !!(a.append || e.appendIcon),
            I = !!(((S = e.messages) != null && S.length) || c.value.length),
            L =
              !e.hideDetails ||
              (e.hideDetails === "auto" && (I || !!a.details));
          return m(
            "div",
            { class: ["v-input", `v-input--${e.direction}`, r.value, y.value] },
            [
              $ &&
                m("div", { key: "prepend", class: "v-input__prepend" }, [
                  (A = a.prepend) == null ? void 0 : A.call(a, k.value),
                  e.prependIcon &&
                    m(i, { key: "prepend-icon", name: "prepend" }, null),
                ]),
              a.default &&
                m("div", { class: "v-input__control" }, [
                  (x = a.default) == null ? void 0 : x.call(a, k.value),
                ]),
              R &&
                m("div", { key: "append", class: "v-input__append" }, [
                  e.appendIcon &&
                    m(i, { key: "append-icon", name: "append" }, null),
                  (C = a.append) == null ? void 0 : C.call(a, k.value),
                ]),
              L &&
                m("div", { class: "v-input__details" }, [
                  m(
                    jh,
                    {
                      active: I,
                      messages: c.value.length > 0 ? c.value : e.messages,
                    },
                    { message: a.message }
                  ),
                  (V = a.details) == null ? void 0 : V.call(a, k.value),
                ]),
            ]
          );
        }),
        { reset: w, resetValidation: g, validate: _ }
      );
    },
  });
function ra(e) {
  const t = Object.keys(wn.props).filter((n) => !Xm(n));
  return Lt(e, t);
}
const xo = Z({
    name: "VCounter",
    functional: !0,
    props: {
      active: Boolean,
      max: [Number, String],
      value: { type: [Number, String], default: 0 },
      ...Fn({ transition: { component: Xu } }),
    },
    setup(e, t) {
      let { slots: n } = t;
      const a = b(() => (e.max ? `${e.value} / ${e.max}` : String(e.value)));
      return (
        X(() =>
          m(
            hn,
            { transition: e.transition },
            {
              default: () => [
                Le(
                  m("div", { class: "v-counter" }, [
                    n.default
                      ? n.default({
                          counter: a.value,
                          max: e.max,
                          value: e.value,
                        })
                      : a.value,
                  ]),
                  [[_n, e.active]]
                ),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  Zo = Symbol("Forwarded refs");
function cn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
    a < t;
    a++
  )
    n[a - 1] = arguments[a];
  return (
    (e[Zo] = n),
    new Proxy(e, {
      get(l, r) {
        if (Reflect.has(l, r)) return Reflect.get(l, r);
        for (const i of n)
          if (i.value && Reflect.has(i.value, r)) {
            const o = Reflect.get(i.value, r);
            return typeof o == "function" ? o.bind(i.value) : o;
          }
      },
      getOwnPropertyDescriptor(l, r) {
        const i = Reflect.getOwnPropertyDescriptor(l, r);
        if (i) return i;
        if (!(typeof r == "symbol" || r.startsWith("__"))) {
          for (const o of n) {
            if (!o.value) continue;
            const s = Reflect.getOwnPropertyDescriptor(o.value, r);
            if (s) return s;
            if ("_" in o.value && "setupState" in o.value._) {
              const c = Reflect.getOwnPropertyDescriptor(
                o.value._.setupState,
                r
              );
              if (c) return c;
            }
          }
          for (const o of n) {
            let s = o.value && Object.getPrototypeOf(o.value);
            for (; s; ) {
              const c = Reflect.getOwnPropertyDescriptor(s, r);
              if (c) return c;
              s = Object.getPrototypeOf(s);
            }
          }
          for (const o of n) {
            const s = o.value && o.value[Zo];
            if (!s) continue;
            const c = s.slice();
            for (; c.length; ) {
              const u = c.shift(),
                d = Reflect.getOwnPropertyDescriptor(u.value, r);
              if (d) return d;
              const f = u.value && u.value[Zo];
              f && c.push(...f);
            }
          }
        }
      },
    })
  );
}
const Qk = ["color", "file", "time", "date", "datetime-local", "week", "month"],
  wo = ye(
    {
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: Function,
      hint: String,
      persistentHint: Boolean,
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      suffix: String,
      type: { type: String, default: "text" },
      ...zn(),
      ..._o(),
    },
    "v-text-field"
  ),
  Lr = je()({
    name: "VTextField",
    directives: { Intersect: Or },
    inheritAttrs: !1,
    props: wo(),
    emits: {
      "click:control": (e) => !0,
      "click:input": (e) => !0,
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t;
      const r = pe(e, "modelValue"),
        { isFocused: i, focus: o, blur: s } = Ha(e),
        c = b(() => {
          var S;
          return typeof e.counterValue == "function"
            ? e.counterValue(r.value)
            : ((S = r.value) != null ? S : "").toString().length;
        }),
        u = b(() => {
          if (n.maxlength) return n.maxlength;
          if (
            !(
              !e.counter ||
              (typeof e.counter != "number" && typeof e.counter != "string")
            )
          )
            return e.counter;
        });
      function d(S, A) {
        var x, C;
        !e.autofocus ||
          !S ||
          (x = A[0].target) == null ||
          (C = x.focus) == null ||
          C.call(x);
      }
      const f = B(),
        v = B(),
        h = B(),
        p = b(() => Qk.includes(e.type) || e.persistentPlaceholder || i.value),
        w = b(() =>
          e.messages.length
            ? e.messages
            : i.value || e.persistentHint
            ? e.hint
            : ""
        );
      function g() {
        if (h.value !== document.activeElement) {
          var S;
          (S = h.value) == null || S.focus();
        }
        i.value || o();
      }
      function _(S) {
        g(), a("click:control", S);
      }
      function y(S) {
        S.stopPropagation(),
          g(),
          Ke(() => {
            (r.value = null), Ii(e["onClick:clear"], S);
          });
      }
      function k(S) {
        r.value = S.target.value;
      }
      return (
        X(() => {
          const S = !!(l.counter || e.counter || e.counterValue),
            A = !!(S || l.details),
            [x, C] = Ba(n),
            [{ modelValue: V, ...$ }] = ra(e),
            [R] = rc(e);
          return m(
            wn,
            ue(
              {
                ref: f,
                modelValue: r.value,
                "onUpdate:modelValue": (I) => (r.value = I),
                class: [
                  "v-text-field",
                  {
                    "v-text-field--prefixed": e.prefix,
                    "v-text-field--suffixed": e.suffix,
                    "v-text-field--flush-details": [
                      "plain",
                      "underlined",
                    ].includes(e.variant),
                  },
                ],
                "onClick:prepend": e["onClick:prepend"],
                "onClick:append": e["onClick:append"],
              },
              x,
              $,
              { focused: i.value, messages: w.value }
            ),
            {
              ...l,
              default: (I) => {
                let {
                  id: L,
                  isDisabled: D,
                  isDirty: Y,
                  isReadonly: z,
                  isValid: T,
                } = I;
                return m(
                  Rr,
                  ue(
                    {
                      ref: v,
                      onMousedown: (F) => {
                        F.target !== h.value && F.preventDefault();
                      },
                      "onClick:control": _,
                      "onClick:clear": y,
                      "onClick:prependInner": e["onClick:prependInner"],
                      "onClick:appendInner": e["onClick:appendInner"],
                      role: "textbox",
                    },
                    R,
                    {
                      id: L.value,
                      active: p.value || Y.value,
                      dirty: Y.value || e.dirty,
                      focused: i.value,
                      error: T.value === !1,
                    }
                  ),
                  {
                    ...l,
                    default: (F) => {
                      let {
                        props: { class: J, ...K },
                      } = F;
                      const le = Le(
                        m(
                          "input",
                          ue(
                            {
                              ref: h,
                              value: r.value,
                              onInput: k,
                              autofocus: e.autofocus,
                              readonly: z.value,
                              disabled: D.value,
                              name: e.name,
                              placeholder: e.placeholder,
                              size: 1,
                              type: e.type,
                              onFocus: g,
                              onBlur: s,
                            },
                            K,
                            C
                          ),
                          null
                        ),
                        [[Rt("intersect"), { handler: d }, null, { once: !0 }]]
                      );
                      return m(xe, null, [
                        e.prefix &&
                          m("span", { class: "v-text-field__prefix" }, [
                            e.prefix,
                          ]),
                        l.default
                          ? m(
                              "div",
                              {
                                class: J,
                                onClick: (ie) => a("click:input", ie),
                                "data-no-activator": "",
                              },
                              [l.default(), le]
                            )
                          : $n(le, { class: J }),
                        e.suffix &&
                          m("span", { class: "v-text-field__suffix" }, [
                            e.suffix,
                          ]),
                      ]);
                    },
                  }
                );
              },
              details: A
                ? (I) => {
                    var L;
                    return m(xe, null, [
                      (L = l.details) == null ? void 0 : L.call(l, I),
                      S &&
                        m(xe, null, [
                          m("span", null, null),
                          m(
                            xo,
                            {
                              active: e.persistentCounter || i.value,
                              value: c.value,
                              max: u.value,
                            },
                            l.counter
                          ),
                        ]),
                    ]);
                  }
                : void 0,
            }
          );
        }),
        cn({}, f, v, h)
      );
    },
  });
function ic(e) {
  return Lt(e, Object.keys(Lr.props));
}
const Yh = Symbol.for("vuetify:selection-control-group"),
  oc = ye(
    {
      color: String,
      disabled: Boolean,
      error: Boolean,
      id: String,
      inline: Boolean,
      falseIcon: ge,
      trueIcon: ge,
      ripple: { type: Boolean, default: !0 },
      multiple: { type: Boolean, default: null },
      name: String,
      readonly: Boolean,
      modelValue: null,
      type: String,
      valueComparator: { type: Function, default: Pr },
      ...$e(),
      ...st(),
    },
    "v-selection-control-group"
  ),
  Gh = Z({
    name: "VSelectionControlGroup",
    props: {
      defaultsTarget: { type: String, default: "VSelectionControl" },
      ...oc(),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = pe(e, "modelValue"),
        l = pt(),
        r = b(() => e.id || `v-selection-control-group-${l}`),
        i = b(() => e.name || r.value);
      return (
        Qe(Yh, { modelValue: a }),
        it({
          [e.defaultsTarget]: {
            color: j(e, "color"),
            disabled: j(e, "disabled"),
            density: j(e, "density"),
            error: j(e, "error"),
            inline: j(e, "inline"),
            modelValue: a,
            multiple: b(
              () =>
                !!e.multiple || (e.multiple == null && Array.isArray(a.value))
            ),
            name: i,
            falseIcon: j(e, "falseIcon"),
            trueIcon: j(e, "trueIcon"),
            readonly: j(e, "readonly"),
            ripple: j(e, "ripple"),
            type: j(e, "type"),
            valueComparator: j(e, "valueComparator"),
          },
        }),
        X(() => {
          var o;
          return m(
            "div",
            {
              class: [
                "v-selection-control-group",
                { "v-selection-control-group--inline": e.inline },
              ],
              "aria-labelled-by": e.type === "radio" ? r.value : void 0,
              role: e.type === "radio" ? "radiogroup" : void 0,
            },
            [(o = n.default) == null ? void 0 : o.call(n)]
          );
        }),
        {}
      );
    },
  }),
  So = ye(
    { label: String, trueValue: null, falseValue: null, value: null, ...oc() },
    "v-selection-control"
  );
function eA(e) {
  const t = Oe(Yh, void 0),
    { densityClasses: n } = yt(e),
    a = pe(e, "modelValue"),
    l = b(() =>
      e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0
    ),
    r = b(() => (e.falseValue !== void 0 ? e.falseValue : !1)),
    i = b(() => !!e.multiple || (e.multiple == null && Array.isArray(a.value))),
    o = b({
      get() {
        const d = t ? t.modelValue.value : a.value;
        return i.value
          ? d.some((f) => e.valueComparator(f, l.value))
          : e.valueComparator(d, l.value);
      },
      set(d) {
        if (e.readonly) return;
        const f = d ? l.value : r.value;
        let v = f;
        i.value &&
          (v = d
            ? [...Ut(a.value), f]
            : Ut(a.value).filter((h) => !e.valueComparator(h, l.value))),
          t ? (t.modelValue.value = v) : (a.value = v);
      },
    }),
    { textColorClasses: s, textColorStyles: c } = kt(
      b(() => (o.value && !e.error && !e.disabled ? e.color : void 0))
    ),
    u = b(() => (o.value ? e.trueIcon : e.falseIcon));
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: r,
    model: o,
    textColorClasses: s,
    textColorStyles: c,
    icon: u,
  };
}
const Br = je()({
  name: "VSelectionControl",
  directives: { Ripple: la },
  inheritAttrs: !1,
  props: So(),
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { attrs: n, slots: a } = t;
    const {
        densityClasses: l,
        icon: r,
        model: i,
        textColorClasses: o,
        textColorStyles: s,
        trueValue: c,
      } = eA(e),
      u = pt(),
      d = b(() => e.id || `input-${u}`),
      f = B(!1),
      v = B(!1),
      h = B();
    function p(_) {
      (f.value = !0),
        (!Rs || (Rs && _.target.matches(":focus-visible"))) && (v.value = !0);
    }
    function w() {
      (f.value = !1), (v.value = !1);
    }
    function g(_) {
      i.value = _.target.checked;
    }
    return (
      X(() => {
        var _, y;
        const k = a.label
            ? a.label({ label: e.label, props: { for: d.value } })
            : e.label,
          [S, A] = Ba(n);
        return m(
          "div",
          ue(
            {
              class: [
                "v-selection-control",
                {
                  "v-selection-control--dirty": i.value,
                  "v-selection-control--disabled": e.disabled,
                  "v-selection-control--error": e.error,
                  "v-selection-control--focused": f.value,
                  "v-selection-control--focus-visible": v.value,
                  "v-selection-control--inline": e.inline,
                },
                l.value,
              ],
            },
            S
          ),
          [
            m(
              "div",
              {
                class: ["v-selection-control__wrapper", o.value],
                style: s.value,
              },
              [
                (_ = a.default) == null ? void 0 : _.call(a),
                Le(
                  m("div", { class: ["v-selection-control__input"] }, [
                    r.value && m(at, { key: "icon", icon: r.value }, null),
                    m(
                      "input",
                      ue(
                        {
                          ref: h,
                          checked: i.value,
                          disabled: e.disabled,
                          id: d.value,
                          onBlur: w,
                          onFocus: p,
                          onInput: g,
                          "aria-readonly": e.readonly,
                          type: e.type,
                          value: c.value,
                          name: e.name,
                          "aria-checked":
                            e.type === "checkbox" ? i.value : void 0,
                        },
                        A
                      ),
                      null
                    ),
                    (y = a.input) == null
                      ? void 0
                      : y.call(a, {
                          model: i,
                          textColorClasses: o,
                          textColorStyles: s,
                          props: { onFocus: p, onBlur: w, id: d.value },
                        }),
                  ]),
                  [
                    [
                      Rt("ripple"),
                      e.ripple && [
                        !e.disabled && !e.readonly,
                        null,
                        ["center", "circle"],
                      ],
                    ],
                  ]
                ),
              ]
            ),
            k && m(Il, { for: d.value, clickable: !0 }, { default: () => [k] }),
          ]
        );
      }),
      { isFocused: f, input: h }
    );
  },
});
function Kh(e) {
  return Lt(e, Object.keys(Br.props));
}
const qh = ye(
    {
      indeterminate: Boolean,
      indeterminateIcon: { type: ge, default: "$checkboxIndeterminate" },
      ...So({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }),
    },
    "v-checkbox-btn"
  ),
  Pl = Z({
    name: "VCheckboxBtn",
    props: qh(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:indeterminate": (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t;
      const a = pe(e, "indeterminate"),
        l = pe(e, "modelValue");
      function r(s) {
        a.value && (a.value = !1);
      }
      const i = b(() => (e.indeterminate ? e.indeterminateIcon : e.falseIcon)),
        o = b(() => (e.indeterminate ? e.indeterminateIcon : e.trueIcon));
      return (
        X(() =>
          m(
            Br,
            ue(e, {
              modelValue: l.value,
              "onUpdate:modelValue": [(s) => (l.value = s), r],
              class: "v-checkbox-btn",
              type: "checkbox",
              inline: !0,
              falseIcon: i.value,
              trueIcon: o.value,
              "aria-checked": e.indeterminate ? "mixed" : void 0,
            }),
            n
          )
        ),
        {}
      );
    },
  });
function tA(e) {
  return Lt(e, Object.keys(Pl.props));
}
const nA = Z({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: { ...zn(), ...qh() },
  emits: { "update:focused": (e) => !0 },
  setup(e, t) {
    let { attrs: n, slots: a } = t;
    const { isFocused: l, focus: r, blur: i } = Ha(e),
      o = pt(),
      s = b(() => e.id || `checkbox-${o}`);
    return (
      X(() => {
        const [c, u] = Ba(n),
          [d, f] = ra(e),
          [v, h] = tA(e);
        return m(
          wn,
          ue({ class: "v-checkbox" }, c, d, { id: s.value, focused: l.value }),
          {
            ...a,
            default: (p) => {
              let { id: w, isDisabled: g, isReadonly: _ } = p;
              return m(
                Pl,
                ue(
                  v,
                  { id: w.value, disabled: g.value, readonly: _.value },
                  u,
                  { onFocus: r, onBlur: i }
                ),
                a
              );
            },
          }
        );
      }),
      {}
    );
  },
});
const aA = ye(
    {
      start: Boolean,
      end: Boolean,
      icon: ge,
      image: String,
      ...st(),
      ...Ye(),
      ...Dn(),
      ...be(),
      ...qt({ variant: "flat" }),
    },
    "v-avatar"
  ),
  ea = Z({
    name: "VAvatar",
    props: aA(),
    setup(e, t) {
      let { slots: n } = t;
      const { colorClasses: a, colorStyles: l, variantClasses: r } = Ma(e),
        { densityClasses: i } = yt(e),
        { roundedClasses: o } = nt(e),
        { sizeClasses: s, sizeStyles: c } = Al(e);
      return (
        X(() => {
          var u;
          return m(
            e.tag,
            {
              class: [
                "v-avatar",
                { "v-avatar--start": e.start, "v-avatar--end": e.end },
                a.value,
                i.value,
                o.value,
                s.value,
                r.value,
              ],
              style: [l.value, c.value],
            },
            {
              default: () => [
                e.image
                  ? m(Sl, { key: "image", src: e.image, alt: "" }, null)
                  : e.icon
                  ? m(at, { key: "icon", icon: e.icon }, null)
                  : (u = n.default) == null
                  ? void 0
                  : u.call(n),
                Na(!1, "v-avatar"),
              ],
            }
          );
        }),
        {}
      );
    },
  });
const Xh = Symbol.for("vuetify:v-chip-group"),
  lA = Z({
    name: "VChipGroup",
    props: {
      column: Boolean,
      filter: Boolean,
      valueComparator: { type: Function, default: Pr },
      ...Cl({ selectedClass: "v-chip--selected" }),
      ...be(),
      ...$e(),
      ...qt({ variant: "tonal" }),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Be(e),
        { isSelected: l, select: r, next: i, prev: o, selected: s } = Da(e, Xh);
      return (
        it({
          VChip: {
            color: j(e, "color"),
            filter: j(e, "filter"),
            variant: j(e, "variant"),
          },
        }),
        X(() => {
          var c;
          return m(
            e.tag,
            {
              class: [
                "v-chip-group",
                { "v-chip-group--column": e.column },
                a.value,
              ],
            },
            {
              default: () => [
                (c = n.default) == null
                  ? void 0
                  : c.call(n, {
                      isSelected: l,
                      select: r,
                      next: i,
                      prev: o,
                      selected: s.value,
                    }),
              ],
            }
          );
        }),
        {}
      );
    },
  }),
  Nr = Z({
    name: "VChip",
    directives: { Ripple: la },
    props: {
      activeClass: String,
      appendAvatar: String,
      appendIcon: ge,
      closable: Boolean,
      closeIcon: { type: ge, default: "$delete" },
      closeLabel: { type: String, default: "$vuetify.close" },
      draggable: Boolean,
      filter: Boolean,
      filterIcon: { type: String, default: "$complete" },
      label: Boolean,
      link: Boolean,
      pill: Boolean,
      prependAvatar: String,
      prependIcon: ge,
      ripple: { type: Boolean, default: !0 },
      text: String,
      modelValue: { type: Boolean, default: !0 },
      ...Nt(),
      ...st(),
      ...rt(),
      ...Fa(),
      ...Ye(),
      ...$l(),
      ...Dn(),
      ...be({ tag: "span" }),
      ...$e(),
      ...qt({ variant: "tonal" }),
    },
    emits: {
      "click:close": (e) => !0,
      "update:modelValue": (e) => !0,
      "group:selected": (e) => !0,
      click: (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t;
      const { borderClasses: r } = Kt(e),
        { colorClasses: i, colorStyles: o, variantClasses: s } = Ma(e),
        { densityClasses: c } = yt(e),
        { elevationClasses: u } = gt(e),
        { roundedClasses: d } = nt(e),
        { sizeClasses: f } = Al(e),
        { themeClasses: v } = Be(e),
        h = pe(e, "modelValue"),
        p = kl(e, Xh, !1),
        w = Tr(e, n),
        g = b(() => !e.disabled && (!!p || w.isClickable.value || e.link));
      function _(k) {
        (h.value = !1), a("click:close", k);
      }
      function y(k) {
        var S;
        a("click", k),
          g.value &&
            ((S = w.navigate) == null || S.call(w, k), p == null || p.toggle());
      }
      return () => {
        var k;
        const S = w.isLink.value ? "a" : e.tag,
          A = !!(l.append || e.appendIcon || e.appendAvatar),
          x = !!(l.close || e.closable),
          C = !!(l.filter || e.filter) && p,
          V = !!(l.prepend || e.prependIcon || e.prependAvatar),
          $ = !p || p.isSelected.value;
        return (
          h.value &&
          Le(
            m(
              S,
              {
                class: [
                  "v-chip",
                  {
                    "v-chip--disabled": e.disabled,
                    "v-chip--label": e.label,
                    "v-chip--link": g,
                    "v-chip--filter": C,
                    "v-chip--pill": e.pill,
                  },
                  v.value,
                  r.value,
                  $ ? i.value : void 0,
                  c.value,
                  u.value,
                  d.value,
                  f.value,
                  s.value,
                  p == null ? void 0 : p.selectedClass.value,
                ],
                style: [$ ? o.value : void 0],
                disabled: e.disabled || void 0,
                draggable: e.draggable,
                href: w.href.value,
                onClick: y,
              },
              {
                default: () => {
                  var R;
                  return [
                    Na(g.value, "v-chip"),
                    C &&
                      m(
                        Ne,
                        {
                          key: "filter",
                          defaults: { VIcon: { icon: e.filterIcon } },
                        },
                        {
                          default: () => [
                            m(Ju, null, {
                              default: () => [
                                Le(
                                  m("div", { class: "v-chip__filter" }, [
                                    l.filter ? l.filter() : m(at, null, null),
                                  ]),
                                  [[_n, p.isSelected.value]]
                                ),
                              ],
                            }),
                          ],
                        }
                      ),
                    V &&
                      m(
                        Ne,
                        {
                          key: "prepend",
                          defaults: {
                            VAvatar: { image: e.prependAvatar },
                            VIcon: { icon: e.prependIcon },
                          },
                        },
                        {
                          default: () => [
                            l.prepend
                              ? m("div", { class: "v-chip__prepend" }, [
                                  l.prepend(),
                                ])
                              : e.prependAvatar
                              ? m(ea, { start: !0 }, null)
                              : e.prependIcon
                              ? m(at, { start: !0 }, null)
                              : void 0,
                          ],
                        }
                      ),
                    (R =
                      (k = l.default) == null
                        ? void 0
                        : k.call(l, {
                            isSelected: p == null ? void 0 : p.isSelected.value,
                            selectedClass:
                              p == null ? void 0 : p.selectedClass.value,
                            select: p == null ? void 0 : p.select,
                            toggle: p == null ? void 0 : p.toggle,
                            value: p == null ? void 0 : p.value.value,
                            disabled: e.disabled,
                          })) != null
                      ? R
                      : e.text,
                    A &&
                      m(
                        Ne,
                        {
                          key: "append",
                          defaults: {
                            VAvatar: { image: e.appendAvatar },
                            VIcon: { icon: e.appendIcon },
                          },
                        },
                        {
                          default: () => [
                            l.append
                              ? m("div", { class: "v-chip__append" }, [
                                  l.append(),
                                ])
                              : e.appendAvatar
                              ? m(ea, { end: !0 }, null)
                              : e.appendIcon
                              ? m(at, { end: !0 }, null)
                              : void 0,
                          ],
                        }
                      ),
                    x &&
                      m(
                        Ne,
                        {
                          key: "close",
                          defaults: {
                            VIcon: { icon: e.closeIcon, size: "x-small" },
                          },
                        },
                        {
                          default: () => [
                            m("div", { class: "v-chip__close", onClick: _ }, [
                              l.close ? l.close() : m(at, null, null),
                            ]),
                          ],
                        }
                      ),
                  ];
                },
              }
            ),
            [[Rt("ripple"), g.value && e.ripple, null]]
          )
        );
      };
    },
  });
const Jh = Z({
    name: "VDivider",
    props: {
      color: String,
      inset: Boolean,
      length: [Number, String],
      thickness: [Number, String],
      vertical: Boolean,
      ...$e(),
    },
    setup(e, t) {
      let { attrs: n } = t;
      const { themeClasses: a } = Be(e),
        { backgroundColorClasses: l, backgroundColorStyles: r } = tt(
          j(e, "color")
        ),
        i = b(() => {
          const o = {};
          return (
            e.length &&
              (o[e.vertical ? "maxHeight" : "maxWidth"] = ae(e.length)),
            e.thickness &&
              (o[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ae(
                e.thickness
              )),
            o
          );
        });
      return (
        X(() =>
          m(
            "hr",
            {
              class: [
                {
                  "v-divider": !0,
                  "v-divider--inset": e.inset,
                  "v-divider--vertical": e.vertical,
                },
                a.value,
                l.value,
              ],
              style: [i.value, r.value],
              "aria-orientation":
                !n.role || n.role === "separator"
                  ? e.vertical
                    ? "vertical"
                    : "horizontal"
                  : void 0,
              role: `${n.role || "separator"}`,
            },
            null
          )
        ),
        {}
      );
    },
  }),
  Ds = Symbol.for("vuetify:list");
function Zh() {
  const e = Oe(Ds, { hasPrepend: B(!1), updateHasPrepend: () => null }),
    t = {
      hasPrepend: B(!1),
      updateHasPrepend: (n) => {
        n && (t.hasPrepend.value = n);
      },
    };
  return Qe(Ds, t), e;
}
function Qh() {
  return Oe(Ds, null);
}
const rA = {
    open: (e) => {
      let { id: t, value: n, opened: a, parents: l } = e;
      if (n) {
        const r = new Set();
        r.add(t);
        let i = l.get(t);
        for (; i != null; ) r.add(i), (i = l.get(i));
        return r;
      } else return a.delete(t), a;
    },
    select: () => null,
  },
  eg = {
    open: (e) => {
      let { id: t, value: n, opened: a, parents: l } = e;
      if (n) {
        let r = l.get(t);
        for (a.add(t); r != null && r !== t; ) a.add(r), (r = l.get(r));
        return a;
      } else a.delete(t);
      return a;
    },
    select: () => null,
  },
  iA = {
    open: eg.open,
    select: (e) => {
      let { id: t, value: n, opened: a, parents: l } = e;
      if (!n) return a;
      const r = [];
      let i = l.get(t);
      for (; i != null; ) r.push(i), (i = l.get(i));
      return new Set(r);
    },
  },
  sc = (e) => {
    const t = {
      select: (n) => {
        let { id: a, value: l, selected: r } = n;
        if (e && !l) {
          const i = Array.from(r.entries()).reduce((o, s) => {
            let [c, u] = s;
            return u === "on" ? [...o, c] : o;
          }, []);
          if (i.length === 1 && i[0] === a) return r;
        }
        return r.set(a, l ? "on" : "off"), r;
      },
      in: (n, a, l) => {
        let r = new Map();
        for (const i of n || [])
          r = t.select({
            id: i,
            value: !0,
            selected: new Map(r),
            children: a,
            parents: l,
          });
        return r;
      },
      out: (n) => {
        const a = [];
        for (const [l, r] of n.entries()) r === "on" && a.push(l);
        return a;
      },
    };
    return t;
  },
  tg = (e) => {
    const t = sc(e);
    return {
      select: (a) => {
        let { selected: l, id: r, ...i } = a;
        const o = l.has(r) ? new Map([[r, l.get(r)]]) : new Map();
        return t.select({ ...i, id: r, selected: o });
      },
      in: (a, l, r) => {
        let i = new Map();
        return a != null && a.length && (i = t.in(a.slice(0, 1), l, r)), i;
      },
      out: (a, l, r) => t.out(a, l, r),
    };
  },
  oA = (e) => {
    const t = sc(e);
    return {
      select: (a) => {
        let { id: l, selected: r, children: i, ...o } = a;
        return i.has(l)
          ? r
          : t.select({ id: l, selected: r, children: i, ...o });
      },
      in: t.in,
      out: t.out,
    };
  },
  sA = (e) => {
    const t = tg(e);
    return {
      select: (a) => {
        let { id: l, selected: r, children: i, ...o } = a;
        return i.has(l)
          ? r
          : t.select({ id: l, selected: r, children: i, ...o });
      },
      in: t.in,
      out: t.out,
    };
  },
  uA = (e) => {
    const t = {
      select: (n) => {
        let { id: a, value: l, selected: r, children: i, parents: o } = n;
        const s = new Map(r),
          c = [a];
        for (; c.length; ) {
          const d = c.shift();
          r.set(d, l ? "on" : "off"), i.has(d) && c.push(...i.get(d));
        }
        let u = o.get(a);
        for (; u; ) {
          const d = i.get(u),
            f = d.every((h) => r.get(h) === "on"),
            v = d.every((h) => !r.has(h) || r.get(h) === "off");
          r.set(u, f ? "on" : v ? "off" : "indeterminate"), (u = o.get(u));
        }
        return e &&
          !l &&
          Array.from(r.entries()).reduce((f, v) => {
            let [h, p] = v;
            return p === "on" ? [...f, h] : f;
          }, []).length === 0
          ? s
          : r;
      },
      in: (n, a, l) => {
        let r = new Map();
        for (const i of n || [])
          r = t.select({
            id: i,
            value: !0,
            selected: new Map(r),
            children: a,
            parents: l,
          });
        return r;
      },
      out: (n, a) => {
        const l = [];
        for (const [r, i] of n.entries()) i === "on" && !a.has(r) && l.push(r);
        return l;
      },
    };
    return t;
  },
  xr = Symbol.for("vuetify:nested"),
  ng = {
    id: B(),
    root: {
      register: () => null,
      unregister: () => null,
      parents: B(new Map()),
      children: B(new Map()),
      open: () => null,
      openOnSelect: () => null,
      select: () => null,
      opened: B(new Set()),
      selected: B(new Map()),
      selectedValues: B([]),
    },
  },
  cA = ye(
    {
      selectStrategy: [String, Function],
      openStrategy: [String, Object],
      opened: Array,
      selected: Array,
      mandatory: Boolean,
    },
    "nested"
  ),
  dA = (e) => {
    let t = !1;
    const n = B(new Map()),
      a = B(new Map()),
      l = pe(
        e,
        "opened",
        e.opened,
        (d) => new Set(d),
        (d) => [...d.values()]
      ),
      r = b(() => {
        if (typeof e.selectStrategy == "object") return e.selectStrategy;
        switch (e.selectStrategy) {
          case "single-leaf":
            return sA(e.mandatory);
          case "leaf":
            return oA(e.mandatory);
          case "independent":
            return sc(e.mandatory);
          case "single-independent":
            return tg(e.mandatory);
          case "classic":
          default:
            return uA(e.mandatory);
        }
      }),
      i = b(() => {
        if (typeof e.openStrategy == "object") return e.openStrategy;
        switch (e.openStrategy) {
          case "list":
            return iA;
          case "single":
            return rA;
          case "multiple":
          default:
            return eg;
        }
      }),
      o = pe(
        e,
        "selected",
        e.selected,
        (d) => r.value.in(d, n.value, a.value),
        (d) => r.value.out(d, n.value, a.value)
      );
    At(() => {
      t = !0;
    });
    function s(d) {
      const f = [];
      let v = d;
      for (; v != null; ) f.unshift(v), (v = a.value.get(v));
      return f;
    }
    const c = ht("nested"),
      u = {
        id: B(),
        root: {
          opened: l,
          selected: o,
          selectedValues: b(() => {
            const d = [];
            for (const [f, v] of o.value.entries()) v === "on" && d.push(f);
            return d;
          }),
          register: (d, f, v) => {
            f && d !== f && a.value.set(d, f),
              v && n.value.set(d, []),
              f != null && n.value.set(f, [...(n.value.get(f) || []), d]);
          },
          unregister: (d) => {
            var v;
            if (t) return;
            n.value.delete(d);
            const f = a.value.get(d);
            if (f) {
              const h = (v = n.value.get(f)) != null ? v : [];
              n.value.set(
                f,
                h.filter((p) => p !== d)
              );
            }
            a.value.delete(d), l.value.delete(d);
          },
          open: (d, f, v) => {
            c.emit("click:open", { id: d, value: f, path: s(d), event: v });
            const h = i.value.open({
              id: d,
              value: f,
              opened: new Set(l.value),
              children: n.value,
              parents: a.value,
              event: v,
            });
            h && (l.value = h);
          },
          openOnSelect: (d, f, v) => {
            const h = i.value.select({
              id: d,
              value: f,
              selected: new Map(o.value),
              opened: new Set(l.value),
              children: n.value,
              parents: a.value,
              event: v,
            });
            h && (l.value = h);
          },
          select: (d, f, v) => {
            c.emit("click:select", { id: d, value: f, path: s(d), event: v });
            const h = r.value.select({
              id: d,
              value: f,
              selected: new Map(o.value),
              children: n.value,
              parents: a.value,
              event: v,
            });
            h && (o.value = h), u.root.openOnSelect(d, f, v);
          },
          children: n,
          parents: a,
        },
      };
    return Qe(xr, u), u.root;
  },
  ag = (e, t) => {
    const n = Oe(xr, ng),
      a = b(() => {
        var r;
        return (r = e.value) != null ? r : Symbol(pt());
      }),
      l = {
        ...n,
        id: a,
        open: (r, i) => n.root.open(a.value, r, i),
        openOnSelect: (r, i) => n.root.openOnSelect(a.value, r, i),
        isOpen: b(() => n.root.opened.value.has(a.value)),
        parent: b(() => n.root.parents.value.get(a.value)),
        select: (r, i) => n.root.select(a.value, r, i),
        isSelected: b(() => n.root.selected.value.get(a.value) === "on"),
        isIndeterminate: b(
          () => n.root.selected.value.get(a.value) === "indeterminate"
        ),
        isLeaf: b(() => !n.root.children.value.get(a.value)),
        isGroupActivator: n.isGroupActivator,
      };
    return (
      !n.isGroupActivator && n.root.register(a.value, n.id.value, t),
      At(() => {
        !n.isGroupActivator && n.root.unregister(a.value);
      }),
      t && Qe(xr, l),
      l
    );
  },
  fA = () => {
    const e = Oe(xr, ng);
    Qe(xr, { ...e, isGroupActivator: !0 });
  },
  vA = Z({
    name: "VListGroupActivator",
    setup(e, t) {
      let { slots: n } = t;
      return (
        fA(),
        () => {
          var a;
          return (a = n.default) == null ? void 0 : a.call(n);
        }
      );
    },
  }),
  mA = ye(
    {
      activeColor: String,
      color: String,
      collapseIcon: { type: ge, default: "$collapse" },
      expandIcon: { type: ge, default: "$expand" },
      prependIcon: ge,
      appendIcon: ge,
      fluid: Boolean,
      subgroup: Boolean,
      value: null,
      ...be(),
    },
    "v-list-group"
  ),
  uc = je()({
    name: "VListGroup",
    props: { title: String, ...mA() },
    setup(e, t) {
      let { slots: n } = t;
      const { isOpen: a, open: l, id: r } = ag(j(e, "value"), !0),
        i = b(() => `v-list-group--id-${String(r.value)}`),
        o = Qh();
      function s(d) {
        l(!a.value, d);
      }
      const c = b(() => ({
          onClick: s,
          class: "v-list-group__header",
          id: i.value,
        })),
        u = b(() => (a.value ? e.collapseIcon : e.expandIcon));
      return (
        X(() => {
          var d;
          return m(
            e.tag,
            {
              class: [
                "v-list-group",
                {
                  "v-list-group--prepend":
                    o == null ? void 0 : o.hasPrepend.value,
                  "v-list-group--fluid": e.fluid,
                  "v-list-group--subgroup": e.subgroup,
                },
              ],
            },
            {
              default: () => [
                n.activator &&
                  m(
                    Ne,
                    {
                      defaults: {
                        VListItem: {
                          active: a.value,
                          activeColor: e.activeColor,
                          color: e.color,
                          prependIcon: e.prependIcon || (e.subgroup && u.value),
                          appendIcon: e.appendIcon || (!e.subgroup && u.value),
                          title: e.title,
                          value: e.value,
                        },
                      },
                    },
                    {
                      default: () => [
                        m(vA, null, {
                          default: () => [
                            n.activator({ props: c.value, isOpen: a }),
                          ],
                        }),
                      ],
                    }
                  ),
                m(po, null, {
                  default: () => [
                    Le(
                      m(
                        "div",
                        {
                          class: "v-list-group__items",
                          role: "group",
                          "aria-labelledby": i.value,
                        },
                        [(d = n.default) == null ? void 0 : d.call(n)]
                      ),
                      [[_n, a.value]]
                    ),
                  ],
                }),
              ],
            }
          );
        }),
        {}
      );
    },
  });
function hA(e) {
  return Lt(e, Object.keys(uc.props));
}
const lg = Gt("v-list-item-subtitle"),
  rg = Gt("v-list-item-title"),
  Pn = je()({
    name: "VListItem",
    directives: { Ripple: la },
    props: {
      active: { type: Boolean, default: void 0 },
      activeClass: String,
      activeColor: String,
      appendAvatar: String,
      appendIcon: ge,
      disabled: Boolean,
      lines: String,
      link: { type: Boolean, default: void 0 },
      nav: Boolean,
      prependAvatar: String,
      prependIcon: ge,
      subtitle: [String, Number, Boolean],
      title: [String, Number, Boolean],
      value: null,
      onClick: ka,
      onClickOnce: ka,
      ...Nt(),
      ...st(),
      ...sn(),
      ...rt(),
      ...Ye(),
      ...$l(),
      ...be(),
      ...$e(),
      ...qt({ variant: "text" }),
    },
    emits: { click: (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a, emit: l } = t;
      const r = Tr(e, n),
        i = b(() => {
          var T;
          return (T = e.value) != null ? T : r.href.value;
        }),
        {
          select: o,
          isSelected: s,
          isIndeterminate: c,
          isGroupActivator: u,
          root: d,
          parent: f,
          openOnSelect: v,
        } = ag(i, !1),
        h = Qh(),
        p = b(() => {
          var T;
          return (
            e.active !== !1 &&
            (e.active ||
              ((T = r.isActive) == null ? void 0 : T.value) ||
              s.value)
          );
        }),
        w = b(() => e.link !== !1 && r.isLink.value),
        g = b(
          () =>
            !e.disabled &&
            e.link !== !1 &&
            (e.link || r.isClickable.value || (e.value != null && !!h))
        ),
        _ = b(() => e.rounded || e.nav),
        y = b(() => {
          var T;
          return {
            color: p.value && (T = e.activeColor) != null ? T : e.color,
            variant: e.variant,
          };
        });
      ce(
        () => {
          var T;
          return (T = r.isActive) == null ? void 0 : T.value;
        },
        (T) => {
          T && f.value != null && d.open(f.value, !0), T && v(T);
        },
        { immediate: !0 }
      );
      const { themeClasses: k } = Be(e),
        { borderClasses: S } = Kt(e),
        { colorClasses: A, colorStyles: x, variantClasses: C } = Ma(y),
        { densityClasses: V } = yt(e),
        { dimensionStyles: $ } = un(e),
        { elevationClasses: R } = gt(e),
        { roundedClasses: I } = nt(_),
        L = b(() => (e.lines ? `v-list-item--${e.lines}-line` : void 0)),
        D = b(() => ({
          isActive: p.value,
          select: o,
          isSelected: s.value,
          isIndeterminate: c.value,
        }));
      function Y(T) {
        var F;
        l("click", T),
          !(u || !g.value) &&
            ((F = r.navigate) == null || F.call(r, T),
            e.value != null && o(!s.value, T));
      }
      function z(T) {
        (T.key === "Enter" || T.key === " ") && (T.preventDefault(), Y(T));
      }
      return (
        X(() => {
          var T, F, J, K, le;
          const ie = w.value ? "a" : e.tag,
            we = !h || s.value || p.value,
            te = a.title || e.title,
            N = a.subtitle || e.subtitle,
            W = !!(a.append || e.appendAvatar || e.appendIcon),
            q = !!(a.prepend || e.prependAvatar || e.prependIcon);
          return (
            h == null || h.updateHasPrepend(q),
            Le(
              m(
                ie,
                {
                  class: [
                    "v-list-item",
                    {
                      "v-list-item--active": p.value,
                      "v-list-item--disabled": e.disabled,
                      "v-list-item--link": g.value,
                      "v-list-item--nav": e.nav,
                      "v-list-item--prepend":
                        !q && (h == null ? void 0 : h.hasPrepend.value),
                      [`${e.activeClass}`]: e.activeClass && p.value,
                    },
                    k.value,
                    S.value,
                    we ? A.value : void 0,
                    V.value,
                    R.value,
                    L.value,
                    I.value,
                    C.value,
                  ],
                  style: [we ? x.value : void 0, $.value],
                  href: r.href.value,
                  tabindex: g.value ? 0 : void 0,
                  onClick: Y,
                  onKeydown: g.value && !w.value && z,
                },
                {
                  default: () => [
                    Na(g.value || p.value, "v-list-item"),
                    q &&
                      m(
                        Ne,
                        {
                          key: "prepend",
                          defaults: {
                            VAvatar: {
                              density: e.density,
                              image: e.prependAvatar,
                            },
                            VIcon: { density: e.density, icon: e.prependIcon },
                            VListItemAction: { start: !0 },
                          },
                        },
                        {
                          default: () => [
                            m("div", { class: "v-list-item__prepend" }, [
                              e.prependAvatar &&
                                m(ea, { key: "prepend-avatar" }, null),
                              e.prependIcon &&
                                m(at, { key: "prepend-icon" }, null),
                              (T = a.prepend) == null
                                ? void 0
                                : T.call(a, D.value),
                            ]),
                          ],
                        }
                      ),
                    m(
                      "div",
                      {
                        class: "v-list-item__content",
                        "data-no-activator": "",
                      },
                      [
                        te &&
                          m(
                            rg,
                            { key: "title" },
                            {
                              default: () => {
                                var oe;
                                return [
                                  (oe =
                                    (F = a.title) == null
                                      ? void 0
                                      : F.call(a, { title: e.title })) != null
                                    ? oe
                                    : e.title,
                                ];
                              },
                            }
                          ),
                        N &&
                          m(
                            lg,
                            { key: "subtitle" },
                            {
                              default: () => {
                                var oe;
                                return [
                                  (oe =
                                    (J = a.subtitle) == null
                                      ? void 0
                                      : J.call(a, { subtitle: e.subtitle })) !=
                                  null
                                    ? oe
                                    : e.subtitle,
                                ];
                              },
                            }
                          ),
                        (K = a.default) == null ? void 0 : K.call(a, D.value),
                      ]
                    ),
                    W &&
                      m(
                        Ne,
                        {
                          key: "append",
                          defaults: {
                            VAvatar: {
                              density: e.density,
                              image: e.appendAvatar,
                            },
                            VIcon: { density: e.density, icon: e.appendIcon },
                            VListItemAction: { end: !0 },
                          },
                        },
                        {
                          default: () => [
                            m("div", { class: "v-list-item__append" }, [
                              (le = a.append) == null
                                ? void 0
                                : le.call(a, D.value),
                              e.appendIcon &&
                                m(at, { key: "append-icon" }, null),
                              e.appendAvatar &&
                                m(ea, { key: "append-avatar" }, null),
                            ]),
                          ],
                        }
                      ),
                  ],
                }
              ),
              [[Rt("ripple"), g.value]]
            )
          );
        }),
        {}
      );
    },
  }),
  ig = Z({
    name: "VListSubheader",
    props: {
      color: String,
      inset: Boolean,
      sticky: Boolean,
      title: String,
      ...be(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { textColorClasses: a, textColorStyles: l } = kt(j(e, "color"));
      return (
        X(() => {
          var r;
          const i = !!(n.default || e.title);
          return m(
            e.tag,
            {
              class: [
                "v-list-subheader",
                {
                  "v-list-subheader--inset": e.inset,
                  "v-list-subheader--sticky": e.sticky,
                },
                a.value,
              ],
              style: { textColorStyles: l },
            },
            {
              default: () => {
                var o;
                return [
                  i &&
                    m("div", { class: "v-list-subheader__text" }, [
                      (o = (r = n.default) == null ? void 0 : r.call(n)) != null
                        ? o
                        : e.title,
                    ]),
                ];
              },
            }
          );
        }),
        {}
      );
    },
  }),
  og = je()({
    name: "VListChildren",
    props: { items: Array },
    setup(e, t) {
      let { slots: n } = t;
      return (
        Zh(),
        () => {
          var r;
          var a, l;
          return (r = (a = n.default) == null ? void 0 : a.call(n)) != null
            ? r
            : (l = e.items) == null
            ? void 0
            : l.map((i) => {
                var w, g;
                let { children: o, props: s, type: c, raw: u } = i;
                if (c === "divider") {
                  var d;
                  return (w =
                    (d = n.divider) == null
                      ? void 0
                      : d.call(n, { props: s })) != null
                    ? w
                    : m(Jh, s, null);
                }
                if (c === "subheader") {
                  var f;
                  return (g =
                    (f = n.subheader) == null
                      ? void 0
                      : f.call(n, { props: s })) != null
                    ? g
                    : m(ig, s, { default: n.subheader });
                }
                const v = {
                    subtitle: n.subtitle
                      ? (_) => {
                          var y;
                          return (y = n.subtitle) == null
                            ? void 0
                            : y.call(n, { ..._, item: u });
                        }
                      : void 0,
                    prepend: n.prepend
                      ? (_) => {
                          var y;
                          return (y = n.prepend) == null
                            ? void 0
                            : y.call(n, { ..._, item: u });
                        }
                      : void 0,
                    append: n.append
                      ? (_) => {
                          var y;
                          return (y = n.append) == null
                            ? void 0
                            : y.call(n, { ..._, item: u });
                        }
                      : void 0,
                    default: n.default
                      ? (_) => {
                          var y;
                          return (y = n.default) == null
                            ? void 0
                            : y.call(n, { ..._, item: u });
                        }
                      : void 0,
                    title: n.title
                      ? (_) => {
                          var y;
                          return (y = n.title) == null
                            ? void 0
                            : y.call(n, { ..._, item: u });
                        }
                      : void 0,
                  },
                  [h, p] = hA(s);
                return o
                  ? m(uc, ue({ value: s == null ? void 0 : s.value }, h), {
                      activator: (_) => {
                        let { props: y } = _;
                        return n.header
                          ? n.header({ ...s, ...y })
                          : m(Pn, ue(s, y), v);
                      },
                      default: () => m(og, { items: o }, n),
                    })
                  : n.item
                  ? n.item(s)
                  : m(Pn, s, v);
              });
        }
      );
    },
  }),
  sg = ye(
    {
      items: { type: Array, default: () => [] },
      itemTitle: { type: [String, Array, Function], default: "title" },
      itemValue: { type: [String, Array, Function], default: "value" },
      itemChildren: {
        type: [Boolean, String, Array, Function],
        default: "children",
      },
      itemProps: { type: [Boolean, String, Array, Function], default: "props" },
      returnObject: Boolean,
    },
    "item"
  );
function tl(e, t) {
  var o;
  const n = mn(t, e.itemTitle, t),
    a = e.returnObject ? t : mn(t, e.itemValue, n),
    l = mn(t, e.itemChildren),
    r =
      e.itemProps === !0
        ? typeof t == "object" && t != null && !Array.isArray(t)
          ? "children" in t
            ? Lt(t, ["children"])[1]
            : t
          : void 0
        : mn(t, e.itemProps),
    i = { title: n, value: a, ...r };
  return {
    title: String((o = i.title) != null ? o : ""),
    value: i.value,
    props: i,
    children: Array.isArray(l) ? ug(e, l) : void 0,
    raw: t,
  };
}
function ug(e, t) {
  const n = [];
  for (const a of t) n.push(tl(e, a));
  return n;
}
function cc(e) {
  const t = b(() => ug(e, e.items));
  function n(l) {
    return l.map((r) => tl(e, r));
  }
  function a(l) {
    return l.map((r) => {
      let { props: i } = r;
      return i.value;
    });
  }
  return { items: t, transformIn: n, transformOut: a };
}
function gA(e, t) {
  const n = mn(t, e.itemType, "item"),
    a = typeof t == "string" ? t : mn(t, e.itemTitle),
    l = mn(t, e.itemValue, void 0),
    r = mn(t, e.itemChildren),
    i = e.itemProps === !0 ? Lt(t, ["children"])[1] : mn(t, e.itemProps),
    o = { title: a, value: l, ...i };
  return {
    type: n,
    title: o.title,
    value: o.value,
    props: o,
    children: n === "item" && r ? cg(e, r) : void 0,
    raw: t,
  };
}
function cg(e, t) {
  const n = [];
  for (const a of t) n.push(gA(e, a));
  return n;
}
function pA(e) {
  return { items: b(() => cg(e, e.items)) };
}
const Co = je()({
    name: "VList",
    props: {
      activeColor: String,
      activeClass: String,
      bgColor: String,
      disabled: Boolean,
      lines: { type: [Boolean, String], default: "one" },
      nav: Boolean,
      ...cA({ selectStrategy: "single-leaf", openStrategy: "list" }),
      ...Nt(),
      ...st(),
      ...sn(),
      ...rt(),
      itemType: { type: String, default: "type" },
      ...sg(),
      ...Ye(),
      ...be(),
      ...$e(),
      ...qt({ variant: "text" }),
    },
    emits: {
      "update:selected": (e) => !0,
      "update:opened": (e) => !0,
      "click:open": (e) => !0,
      "click:select": (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t;
      const { items: a } = pA(e),
        { themeClasses: l } = Be(e),
        { backgroundColorClasses: r, backgroundColorStyles: i } = tt(
          j(e, "bgColor")
        ),
        { borderClasses: o } = Kt(e),
        { densityClasses: s } = yt(e),
        { dimensionStyles: c } = un(e),
        { elevationClasses: u } = gt(e),
        { roundedClasses: d } = nt(e),
        { open: f, select: v } = dA(e),
        h = b(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
        p = j(e, "activeColor"),
        w = j(e, "color");
      Zh(),
        it({
          VListGroup: { activeColor: p, color: w },
          VListItem: {
            activeClass: j(e, "activeClass"),
            activeColor: p,
            color: w,
            density: j(e, "density"),
            disabled: j(e, "disabled"),
            lines: j(e, "lines"),
            nav: j(e, "nav"),
            variant: j(e, "variant"),
          },
        });
      const g = B(!1),
        _ = B();
      function y(C) {
        g.value = !0;
      }
      function k(C) {
        g.value = !1;
      }
      function S(C) {
        var V;
        !g.value &&
          !(
            C.relatedTarget &&
            (V = _.value) != null &&
            V.contains(C.relatedTarget)
          ) &&
          x();
      }
      function A(C) {
        if (_.value) {
          if (C.key === "ArrowDown") x("next");
          else if (C.key === "ArrowUp") x("prev");
          else if (C.key === "Home") x("first");
          else if (C.key === "End") x("last");
          else return;
          C.preventDefault();
        }
      }
      function x(C) {
        if (!_.value) return;
        const V = [
            ..._.value.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ),
          ].filter((D) => !D.hasAttribute("disabled")),
          $ = V.indexOf(document.activeElement);
        if (C)
          if (C === "first") {
            var I;
            (I = V[0]) == null || I.focus();
          } else if (C === "last") {
            var L;
            (L = V.at(-1)) == null || L.focus();
          } else {
            let D,
              Y = $;
            const z = C === "next" ? 1 : -1;
            do (Y += z), (D = V[Y]);
            while ((!D || D.offsetParent == null) && Y < V.length && Y >= 0);
            D ? D.focus() : x(C === "next" ? "first" : "last");
          }
        else {
          var R;
          (R = V[0]) == null || R.focus();
        }
      }
      return (
        X(() =>
          m(
            e.tag,
            {
              ref: _,
              class: [
                "v-list",
                { "v-list--disabled": e.disabled, "v-list--nav": e.nav },
                l.value,
                r.value,
                o.value,
                s.value,
                u.value,
                h.value,
                d.value,
              ],
              style: [i.value, c.value],
              role: "listbox",
              "aria-activedescendant": void 0,
              onFocusin: y,
              onFocusout: k,
              onFocus: S,
              onKeydown: A,
            },
            { default: () => [m(og, { items: a.value }, n)] }
          )
        ),
        { open: f, select: v, focus: x }
      );
    },
  }),
  yA = Gt("v-list-img"),
  bA = Z({
    name: "VListItemAction",
    props: { start: Boolean, end: Boolean, ...be() },
    setup(e, t) {
      let { slots: n } = t;
      return (
        X(() =>
          m(
            e.tag,
            {
              class: [
                "v-list-item-action",
                {
                  "v-list-item-action--start": e.start,
                  "v-list-item-action--end": e.end,
                },
              ],
            },
            n
          )
        ),
        {}
      );
    },
  }),
  _A = Z({
    name: "VListItemMedia",
    props: { start: Boolean, end: Boolean, ...be() },
    setup(e, t) {
      let { slots: n } = t;
      return (
        X(() =>
          m(
            e.tag,
            {
              class: [
                "v-list-item-media",
                {
                  "v-list-item-media--start": e.start,
                  "v-list-item-media--end": e.end,
                },
              ],
            },
            n
          )
        ),
        {}
      );
    },
  });
const dg = ye(
  { closeDelay: [Number, String], openDelay: [Number, String] },
  "delay"
);
function fg(e, t) {
  const n = {},
    a = (l) => () => {
      if (!Xe) return Promise.resolve(!0);
      const r = l === "openDelay";
      return (
        n.closeDelay && window.clearTimeout(n.closeDelay),
        delete n.closeDelay,
        n.openDelay && window.clearTimeout(n.openDelay),
        delete n.openDelay,
        new Promise((i) => {
          var s;
          const o = parseInt((s = e[l]) != null ? s : 0, 10);
          n[l] = window.setTimeout(() => {
            t == null || t(r), i(r);
          }, o);
        })
      );
    };
  return { runCloseDelay: a("closeDelay"), runOpenDelay: a("openDelay") };
}
const zs = Symbol.for("vuetify:v-menu"),
  xA = ye(
    {
      activator: [String, Object],
      activatorProps: { type: Object, default: () => ({}) },
      openOnClick: { type: Boolean, default: void 0 },
      openOnHover: Boolean,
      openOnFocus: { type: Boolean, default: void 0 },
      closeOnContentClick: Boolean,
      ...dg(),
    },
    "v-overlay-activator"
  );
function wA(e, t) {
  let { isActive: n, isTop: a } = t;
  const l = B();
  let r = !1,
    i = !1,
    o = !0;
  const s = b(() => e.openOnFocus || (e.openOnFocus == null && e.openOnHover)),
    c = b(
      () =>
        e.openOnClick || (e.openOnClick == null && !e.openOnHover && !s.value)
    ),
    { runOpenDelay: u, runCloseDelay: d } = fg(e, (y) => {
      y === ((e.openOnHover && r) || (s.value && i)) &&
        !(e.openOnHover && n.value && !a.value) &&
        (n.value !== y && (o = !0), (n.value = y));
    }),
    f = {
      click: (y) => {
        y.stopPropagation(),
          (l.value = y.currentTarget || y.target),
          (n.value = !n.value);
      },
      mouseenter: (y) => {
        (r = !0), (l.value = y.currentTarget || y.target), u();
      },
      mouseleave: (y) => {
        (r = !1), d();
      },
      focus: (y) => {
        (Rs && !y.target.matches(":focus-visible")) ||
          ((i = !0),
          y.stopPropagation(),
          (l.value = y.currentTarget || y.target),
          u());
      },
      blur: (y) => {
        (i = !1), y.stopPropagation(), d();
      },
    },
    v = b(() => {
      const y = {};
      return (
        c.value && (y.click = f.click),
        e.openOnHover &&
          ((y.mouseenter = f.mouseenter), (y.mouseleave = f.mouseleave)),
        s.value && ((y.focus = f.focus), (y.blur = f.blur)),
        y
      );
    }),
    h = b(() => {
      const y = {};
      if (
        (e.openOnHover &&
          ((y.mouseenter = () => {
            (r = !0), u();
          }),
          (y.mouseleave = () => {
            (r = !1), d();
          })),
        e.closeOnContentClick)
      ) {
        const k = Oe(zs, null);
        y.click = () => {
          (n.value = !1), k == null || k.closeParents();
        };
      }
      return y;
    }),
    p = b(() => {
      const y = {};
      return (
        e.openOnHover &&
          ((y.mouseenter = () => {
            o && ((r = !0), (o = !1), u());
          }),
          (y.mouseleave = () => {
            (r = !1), d();
          })),
        y
      );
    });
  ce(a, (y) => {
    y &&
      ((e.openOnHover && !r && (!s.value || !i)) ||
        (s.value && !i && (!e.openOnHover || !r))) &&
      (n.value = !1);
  });
  const w = B();
  bn(() => {
    !w.value ||
      Ke(() => {
        const y = w.value;
        l.value = cC(y) ? y.$el : y;
      });
  });
  const g = ht("useActivator");
  let _;
  return (
    ce(
      () => !!e.activator,
      (y) => {
        y && Xe
          ? ((_ = Ki()),
            _.run(() => {
              SA(e, g, { activatorEl: l, activatorEvents: v });
            }))
          : _ && _.stop();
      },
      { flush: "post", immediate: !0 }
    ),
    yn(() => {
      var y;
      (y = _) == null || y.stop();
    }),
    {
      activatorEl: l,
      activatorRef: w,
      activatorEvents: v,
      contentEvents: h,
      scrimEvents: p,
    }
  );
}
function SA(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  ce(
    () => e.activator,
    (s, c) => {
      if (c && s !== c) {
        const u = o(c);
        u && i(u);
      }
      s && Ke(() => r());
    },
    { immediate: !0 }
  ),
    ce(
      () => e.activatorProps,
      () => {
        r();
      }
    ),
    yn(() => {
      i();
    });
  function r() {
    let s =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o(),
      c =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : e.activatorProps;
    !s ||
      (Object.entries(l.value).forEach((u) => {
        let [d, f] = u;
        s.addEventListener(d, f);
      }),
      Object.keys(c).forEach((u) => {
        c[u] == null ? s.removeAttribute(u) : s.setAttribute(u, c[u]);
      }));
  }
  function i() {
    let s =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o(),
      c =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : e.activatorProps;
    !s ||
      (Object.entries(l.value).forEach((u) => {
        let [d, f] = u;
        s.removeEventListener(d, f);
      }),
      Object.keys(c).forEach((u) => {
        s.removeAttribute(u);
      }));
  }
  function o() {
    var s;
    let c =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : e.activator,
      u;
    if (c)
      if (c === "parent") {
        var d, f;
        let v =
          t == null || (d = t.proxy) == null || (f = d.$el) == null
            ? void 0
            : f.parentNode;
        for (; v.hasAttribute("data-no-activator"); ) v = v.parentNode;
        u = v;
      } else
        typeof c == "string"
          ? (u = document.querySelector(c))
          : "$el" in c
          ? (u = c.$el)
          : (u = c);
    return (
      (a.value =
        ((s = u) == null ? void 0 : s.nodeType) === Node.ELEMENT_NODE
          ? u
          : null),
      a.value
    );
  }
}
const ko = ye({ eager: Boolean }, "lazy");
function dc(e, t) {
  const n = B(!1),
    a = b(() => n.value || e.eager || t.value);
  ce(t, () => (n.value = !0));
  function l() {
    e.eager || (n.value = !1);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function Qo(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function CA(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function wf(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e,
      l =
        a === "left"
          ? 0
          : a === "center"
          ? t.width / 2
          : a === "right"
          ? t.width
          : a,
      r = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Qo({ x: l, y: r }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e,
      l = n === "left" ? 0 : n === "right" ? t.width : n,
      r =
        a === "top"
          ? 0
          : a === "center"
          ? t.height / 2
          : a === "bottom"
          ? t.height
          : a;
    return Qo({ x: l, y: r }, t);
  }
  return Qo({ x: t.width / 2, y: t.height / 2 }, t);
}
const vg = { static: EA, connected: $A },
  kA = ye(
    {
      locationStrategy: {
        type: [String, Function],
        default: "static",
        validator: (e) => typeof e == "function" || e in vg,
      },
      location: { type: String, default: "bottom" },
      origin: { type: String, default: "auto" },
      offset: [Number, String, Array],
    },
    "v-overlay-location-strategies"
  );
function AA(e, t) {
  const n = B({}),
    a = B();
  let l;
  bn(async () => {
    var i;
    (i = l) == null || i.stop(),
      (a.value = void 0),
      Xe &&
        t.isActive.value &&
        e.locationStrategy &&
        ((l = Ki()),
        e.locationStrategy !== "connected" && (await Ke()),
        l.run(() => {
          if (typeof e.locationStrategy == "function") {
            var o;
            a.value =
              (o = e.locationStrategy(t, e, n)) == null
                ? void 0
                : o.updateLocation;
          } else {
            var s;
            a.value =
              (s = vg[e.locationStrategy](t, e, n)) == null
                ? void 0
                : s.updateLocation;
          }
        }));
  }),
    Xe && window.addEventListener("resize", r, { passive: !0 }),
    yn(() => {
      var i;
      Xe && window.removeEventListener("resize", r),
        (a.value = void 0),
        (i = l) == null || i.stop();
    });
  function r(i) {
    var o;
    (o = a.value) == null || o.call(a, i);
  }
  return { contentStyles: n, updateLocation: a };
}
function EA() {}
function VA(e) {
  const t = Uu(e);
  return (
    (t.x -= parseFloat(e.style.left || 0)),
    (t.y -= parseFloat(e.style.top || 0)),
    t
  );
}
function $A(e, t, n) {
  const a = LC(e.activatorEl.value);
  a && Object.assign(n.value, { position: "fixed" });
  const { preferredAnchor: l, preferredOrigin: r } = Hu(() => {
      const h = Is(t.location, e.isRtl.value),
        p =
          t.origin === "overlap"
            ? h
            : t.origin === "auto"
            ? Yo(h)
            : Is(t.origin, e.isRtl.value);
      return h.side === p.side && h.align === Go(p).align
        ? { preferredAnchor: Zd(h), preferredOrigin: Zd(p) }
        : { preferredAnchor: h, preferredOrigin: p };
    }),
    [i, o, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) =>
      b(() => {
        const p = parseFloat(t[h]);
        return isNaN(p) ? 1 / 0 : p;
      })
    ),
    u = b(() => {
      if (Array.isArray(t.offset)) return t.offset;
      if (typeof t.offset == "string") {
        const h = t.offset.split(" ").map(parseFloat);
        return h.length < 2 && h.push(0), h;
      }
      return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
    });
  let d = !1;
  const f = new ResizeObserver(() => {
    d && v();
  });
  ce(
    [e.activatorEl, e.contentEl],
    (h, p) => {
      let [w, g] = h,
        [_, y] = p;
      _ && f.unobserve(_),
        w && f.observe(w),
        y && f.unobserve(y),
        g && f.observe(g);
    },
    { immediate: !0 }
  ),
    yn(() => {
      f.disconnect();
    });
  function v() {
    if (
      ((d = !1),
      requestAnimationFrame(() => {
        requestAnimationFrame(() => (d = !0));
      }),
      !e.activatorEl.value || !e.contentEl.value)
    )
      return;
    const h = e.activatorEl.value.getBoundingClientRect(),
      p = VA(e.contentEl.value),
      w = Oi(e.contentEl.value),
      g = 12;
    w.length ||
      (w.push(document.documentElement),
      (e.contentEl.value.style.top && e.contentEl.value.style.left) ||
        ((p.x += parseFloat(
          document.documentElement.style.getPropertyValue(
            "--v-body-scroll-x"
          ) || 0
        )),
        (p.y += parseFloat(
          document.documentElement.style.getPropertyValue(
            "--v-body-scroll-y"
          ) || 0
        ))));
    const _ = w.reduce((R, I) => {
      const L = I.getBoundingClientRect(),
        D = new ol({
          x: I === document.documentElement ? 0 : L.x,
          y: I === document.documentElement ? 0 : L.y,
          width: I.clientWidth,
          height: I.clientHeight,
        });
      return R
        ? new ol({
            x: Math.max(R.left, D.left),
            y: Math.max(R.top, D.top),
            width: Math.min(R.right, D.right) - Math.max(R.left, D.left),
            height: Math.min(R.bottom, D.bottom) - Math.max(R.top, D.top),
          })
        : D;
    }, void 0);
    (_.x += g), (_.y += g), (_.width -= g * 2), (_.height -= g * 2);
    let y = { anchor: l.value, origin: r.value };
    function k(R) {
      const I = new ol(p),
        L = wf(R.anchor, h),
        D = wf(R.origin, I);
      let { x: Y, y: z } = CA(L, D);
      switch (R.anchor.side) {
        case "top":
          z -= u.value[0];
          break;
        case "bottom":
          z += u.value[0];
          break;
        case "left":
          Y -= u.value[0];
          break;
        case "right":
          Y += u.value[0];
          break;
      }
      switch (R.anchor.align) {
        case "top":
          z -= u.value[1];
          break;
        case "bottom":
          z += u.value[1];
          break;
        case "left":
          Y -= u.value[1];
          break;
        case "right":
          Y += u.value[1];
          break;
      }
      return (
        (I.x += Y),
        (I.y += z),
        (I.width = Math.min(I.width, s.value)),
        (I.height = Math.min(I.height, c.value)),
        { overflows: ef(I, _), x: Y, y: z }
      );
    }
    let S = 0,
      A = 0;
    const x = { x: 0, y: 0 },
      C = { x: !1, y: !1 };
    let V = -1;
    for (;;) {
      if (V++ > 10) {
        Os("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: R, y: I, overflows: L } = k(y);
      (S += R), (A += I), (p.x += R), (p.y += I);
      {
        const D = Qd(y.anchor),
          Y = L.x.before || L.x.after,
          z = L.y.before || L.y.after;
        let T = !1;
        if (
          (["x", "y"].forEach((F) => {
            if ((F === "x" && Y && !C.x) || (F === "y" && z && !C.y)) {
              const J = { anchor: { ...y.anchor }, origin: { ...y.origin } },
                K = F === "x" ? (D === "y" ? Go : Yo) : D === "y" ? Yo : Go;
              (J.anchor = K(J.anchor)), (J.origin = K(J.origin));
              const { overflows: le } = k(J);
              ((le[F].before <= L[F].before && le[F].after <= L[F].after) ||
                le[F].before + le[F].after < (L[F].before + L[F].after) / 2) &&
                ((y = J), (T = C[F] = !0));
            }
          }),
          T)
        )
          continue;
      }
      L.x.before && ((S += L.x.before), (p.x += L.x.before)),
        L.x.after && ((S -= L.x.after), (p.x -= L.x.after)),
        L.y.before && ((A += L.y.before), (p.y += L.y.before)),
        L.y.after && ((A -= L.y.after), (p.y -= L.y.after));
      {
        const D = ef(p, _);
        (x.x = _.width - D.x.before - D.x.after),
          (x.y = _.height - D.y.before - D.y.after),
          (S += D.x.before),
          (p.x += D.x.before),
          (A += D.y.before),
          (p.y += D.y.before);
      }
      break;
    }
    const $ = Qd(y.anchor);
    Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${y.anchor.side} ${y.anchor.align}`,
      transformOrigin: `${y.origin.side} ${y.origin.align}`,
      top: ae(Sf(A)),
      left: ae(Sf(S)),
      minWidth: ae($ === "y" ? Math.min(i.value, h.width) : i.value),
      maxWidth: ae(Cf(Pt(x.x, i.value === 1 / 0 ? 0 : i.value, s.value))),
      maxHeight: ae(Cf(Pt(x.y, o.value === 1 / 0 ? 0 : o.value, c.value))),
    });
  }
  return (
    ce(
      () => [
        l.value,
        r.value,
        t.offset,
        t.minWidth,
        t.minHeight,
        t.maxWidth,
        t.maxHeight,
      ],
      () => v(),
      { immediate: !a }
    ),
    a && Ke(() => v()),
    requestAnimationFrame(() => {
      n.value.maxHeight && v();
    }),
    { updateLocation: v }
  );
}
function Sf(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Cf(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let js = !0;
const Ni = [];
function IA(e) {
  !js || Ni.length ? (Ni.push(e), Hs()) : ((js = !1), e(), Hs());
}
let kf = -1;
function Hs() {
  cancelAnimationFrame(kf),
    (kf = requestAnimationFrame(() => {
      const e = Ni.shift();
      e && e(), Ni.length ? Hs() : (js = !0);
    }));
}
const Us = { none: null, close: TA, block: RA, reposition: LA },
  PA = ye(
    {
      scrollStrategy: {
        type: [String, Function],
        default: "block",
        validator: (e) => typeof e == "function" || e in Us,
      },
    },
    "v-overlay-scroll-strategies"
  );
function OA(e, t) {
  if (!Xe) return;
  let n;
  bn(async () => {
    var a;
    (a = n) == null || a.stop(),
      t.isActive.value &&
        e.scrollStrategy &&
        ((n = Ki()),
        await Ke(),
        n.run(() => {
          if (typeof e.scrollStrategy == "function") e.scrollStrategy(t, e);
          else {
            var l;
            (l = Us[e.scrollStrategy]) == null || l.call(Us, t, e);
          }
        }));
  }),
    yn(() => {
      var a;
      (a = n) == null || a.stop();
    });
}
function TA(e) {
  var n;
  function t(a) {
    e.isActive.value = !1;
  }
  mg((n = e.activatorEl.value) != null ? n : e.contentEl.value, t);
}
function RA(e, t) {
  var n;
  const a = (n = e.root.value) == null ? void 0 : n.offsetParent,
    l = [
      ...new Set([
        ...Oi(e.activatorEl.value, t.contained ? a : void 0),
        ...Oi(e.contentEl.value, t.contained ? a : void 0),
      ]),
    ].filter((o) => !o.classList.contains("v-overlay-scroll-blocked")),
    r = window.innerWidth - document.documentElement.offsetWidth,
    i = ((o) => Gu(o) && o)(a || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"),
    l.forEach((o, s) => {
      o.style.setProperty("--v-body-scroll-x", ae(-o.scrollLeft)),
        o.style.setProperty("--v-body-scroll-y", ae(-o.scrollTop)),
        o.style.setProperty("--v-scrollbar-offset", ae(r)),
        o.classList.add("v-overlay-scroll-blocked");
    }),
    yn(() => {
      l.forEach((o, s) => {
        const c = parseFloat(o.style.getPropertyValue("--v-body-scroll-x")),
          u = parseFloat(o.style.getPropertyValue("--v-body-scroll-y"));
        o.style.removeProperty("--v-body-scroll-x"),
          o.style.removeProperty("--v-body-scroll-y"),
          o.style.removeProperty("--v-scrollbar-offset"),
          o.classList.remove("v-overlay-scroll-blocked"),
          (o.scrollLeft = -c),
          (o.scrollTop = -u);
      }),
        i && e.root.value.classList.remove("v-overlay--scroll-blocked");
    });
}
function LA(e) {
  var l;
  let t = !1,
    n = -1;
  function a(r) {
    IA(() => {
      var i, o;
      const s = performance.now();
      (i = (o = e.updateLocation).value) == null || i.call(o, r),
        (t = (performance.now() - s) / (1e3 / 60) > 2);
    });
  }
  mg((l = e.activatorEl.value) != null ? l : e.contentEl.value, (r) => {
    t
      ? (cancelAnimationFrame(n),
        (n = requestAnimationFrame(() => {
          n = requestAnimationFrame(() => {
            a(r);
          });
        })))
      : a(r);
  });
}
function mg(e, t) {
  const n = [document, ...Oi(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: !0 });
  }),
    yn(() => {
      n.forEach((a) => {
        a.removeEventListener("scroll", t);
      });
    });
}
function hg() {
  var e, t, n;
  if (!Xe) return B(!1);
  const a = ht("useHydration"),
    l =
      a == null ||
      (e = a.root) == null ||
      (t = e.appContext) == null ||
      (n = t.app) == null
        ? void 0
        : n._container,
    r = B(!!(l != null && l.__vue_app__));
  return r.value || _t(() => (r.value = !0)), r;
}
const Af = Symbol.for("vuetify:stack"),
  zl = vt([]);
function BA(e, t) {
  const n = ht("useStack"),
    a = Oe(Af, void 0),
    l = vt({ activeChildren: new Set() });
  Qe(Af, l);
  const r = B(+t.value);
  gl(e, () => {
    var s;
    const c = (s = zl.at(-1)) == null ? void 0 : s[1];
    (r.value = c ? c + 10 : +t.value),
      zl.push([n.uid, r.value]),
      a == null || a.activeChildren.add(n.uid),
      yn(() => {
        const u = zl.findIndex((d) => d[0] === n.uid);
        zl.splice(u, 1), a == null || a.activeChildren.delete(n.uid);
      });
  });
  const i = B(!0);
  bn(() => {
    var s;
    const c = ((s = zl.at(-1)) == null ? void 0 : s[0]) === n.uid;
    setTimeout(() => (i.value = c));
  });
  const o = b(() => !l.activeChildren.size);
  return {
    globalTop: $r(i),
    localTop: o,
    stackStyles: b(() => ({ zIndex: r.value })),
  };
}
function tr(e) {
  return {
    teleportTarget: b(() => {
      const n = e.value;
      if (n === !0 || !Xe) return;
      const a =
        n === !1
          ? document.body
          : typeof n == "string"
          ? document.querySelector(n)
          : n;
      if (a == null) {
        $y(`Unable to locate target ${n}`);
        return;
      }
      if (!tr.cache.has(a)) {
        const l = document.createElement("div");
        (l.className = "v-overlay-container"),
          a.appendChild(l),
          tr.cache.set(a, l);
      }
      return tr.cache.get(a);
    }),
  };
}
tr.cache = new WeakMap();
function NA() {
  return !0;
}
function gg(e, t, n) {
  if (!e || pg(e, n) === !1) return !1;
  const a = ch(t);
  if (
    typeof ShadowRoot != "undefined" &&
    a instanceof ShadowRoot &&
    a.host === e.target
  )
    return !1;
  const l = ((typeof n.value == "object" && n.value.include) || (() => []))();
  return l.push(t), !l.some((r) => (r == null ? void 0 : r.contains(e.target)));
}
function pg(e, t) {
  return ((typeof t.value == "object" && t.value.closeConditional) || NA)(e);
}
function MA(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  t._clickOutside.lastMousedownWasOutside &&
    gg(e, t, n) &&
    setTimeout(() => {
      pg(e, n) && a && a(e);
    }, 0);
}
function Ef(e, t) {
  const n = ch(e);
  t(document),
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && t(n);
}
const yg = {
  mounted(e, t) {
    const n = (l) => MA(l, e, t),
      a = (l) => {
        e._clickOutside.lastMousedownWasOutside = gg(l, e, t);
      };
    Ef(e, (l) => {
      l.addEventListener("click", n, !0),
        l.addEventListener("mousedown", a, !0);
    }),
      e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !0 }),
      (e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a });
  },
  unmounted(e, t) {
    !e._clickOutside ||
      (Ef(e, (n) => {
        var a;
        if (!n || !((a = e._clickOutside) != null && a[t.instance.$.uid]))
          return;
        const { onClick: l, onMousedown: r } =
          e._clickOutside[t.instance.$.uid];
        n.removeEventListener("click", l, !0),
          n.removeEventListener("mousedown", r, !0);
      }),
      delete e._clickOutside[t.instance.$.uid]);
  },
};
function FA(e) {
  const { modelValue: t, color: n, ...a } = e;
  return m(
    pn,
    { name: "fade-transition", appear: !0 },
    {
      default: () => [
        e.modelValue &&
          m(
            "div",
            ue(
              {
                class: [
                  "v-overlay__scrim",
                  e.color.backgroundColorClasses.value,
                ],
                style: e.color.backgroundColorStyles.value,
              },
              a
            ),
            null
          ),
      ],
    }
  );
}
const Mr = ye(
    {
      absolute: Boolean,
      attach: [Boolean, String, Object],
      closeOnBack: { type: Boolean, default: !0 },
      contained: Boolean,
      contentClass: null,
      contentProps: null,
      disabled: Boolean,
      noClickAnimation: Boolean,
      modelValue: Boolean,
      persistent: Boolean,
      scrim: { type: [String, Boolean], default: !0 },
      zIndex: { type: [Number, String], default: 2e3 },
      ...xA(),
      ...sn(),
      ...ko(),
      ...kA(),
      ...PA(),
      ...$e(),
      ...Fn(),
    },
    "v-overlay"
  ),
  Ol = je()({
    name: "VOverlay",
    directives: { ClickOutside: yg },
    inheritAttrs: !1,
    props: Mr(),
    emits: {
      "click:outside": (e) => !0,
      "update:modelValue": (e) => !0,
      afterLeave: () => !0,
    },
    setup(e, t) {
      let { slots: n, attrs: a, emit: l } = t;
      const r = pe(e, "modelValue"),
        i = b({
          get: () => r.value,
          set: (F) => {
            (F && e.disabled) || (r.value = F);
          },
        }),
        { teleportTarget: o } = tr(b(() => e.attach || e.contained)),
        { themeClasses: s } = Be(e),
        { rtlClasses: c, isRtl: u } = Mn(),
        { hasContent: d, onAfterLeave: f } = dc(e, i),
        v = tt(b(() => (typeof e.scrim == "string" ? e.scrim : null))),
        { globalTop: h, localTop: p, stackStyles: w } = BA(i, j(e, "zIndex")),
        {
          activatorEl: g,
          activatorRef: _,
          activatorEvents: y,
          contentEvents: k,
          scrimEvents: S,
        } = wA(e, { isActive: i, isTop: p }),
        { dimensionStyles: A } = un(e),
        x = hg();
      ce(
        () => e.disabled,
        (F) => {
          F && (i.value = !1);
        }
      );
      const C = B(),
        V = B(),
        { contentStyles: $, updateLocation: R } = AA(e, {
          isRtl: u,
          contentEl: V,
          activatorEl: g,
          isActive: i,
        });
      OA(e, {
        root: C,
        contentEl: V,
        activatorEl: g,
        isActive: i,
        updateLocation: R,
      });
      function I(F) {
        l("click:outside", F), e.persistent ? T() : (i.value = !1);
      }
      function L() {
        return i.value && h.value;
      }
      Xe &&
        ce(
          i,
          (F) => {
            F
              ? window.addEventListener("keydown", D)
              : window.removeEventListener("keydown", D);
          },
          { immediate: !0 }
        );
      function D(F) {
        F.key === "Escape" && h.value && (e.persistent ? T() : (i.value = !1));
      }
      const Y = Fh();
      gl(
        () => e.closeOnBack,
        () => {
          jk(Y, (F) => {
            h.value && i.value
              ? (F(!1), e.persistent ? T() : (i.value = !1))
              : F();
          });
        }
      );
      const z = B();
      ce(
        () => i.value && (e.absolute || e.contained) && o.value == null,
        (F) => {
          if (F) {
            const J = dh(C.value);
            J && J !== document.scrollingElement && (z.value = J.scrollTop);
          }
        }
      );
      function T() {
        e.noClickAnimation ||
          (V.value &&
            ya(
              V.value,
              [
                { transformOrigin: "center" },
                { transform: "scale(1.03)" },
                { transformOrigin: "center" },
              ],
              { duration: 150, easing: gr }
            ));
      }
      return (
        X(() => {
          var F, J;
          return m(xe, null, [
            (F = n.activator) == null
              ? void 0
              : F.call(n, {
                  isActive: i.value,
                  props: ue({ ref: _ }, Lo(y.value), e.activatorProps),
                }),
            x.value &&
              m(
                xb,
                { disabled: !o.value, to: o.value },
                {
                  default: () => [
                    d.value &&
                      m(
                        "div",
                        ue(
                          {
                            class: [
                              "v-overlay",
                              {
                                "v-overlay--absolute":
                                  e.absolute || e.contained,
                                "v-overlay--active": i.value,
                                "v-overlay--contained": e.contained,
                              },
                              s.value,
                              c.value,
                            ],
                            style: [w.value, { top: ae(z.value) }],
                            ref: C,
                          },
                          a
                        ),
                        [
                          m(
                            FA,
                            ue(
                              { color: v, modelValue: i.value && !!e.scrim },
                              Lo(S.value)
                            ),
                            null
                          ),
                          m(
                            hn,
                            {
                              appear: !0,
                              persisted: !0,
                              transition: e.transition,
                              target: g.value,
                              onAfterLeave: () => {
                                f(), l("afterLeave");
                              },
                            },
                            {
                              default: () => [
                                Le(
                                  m(
                                    "div",
                                    ue(
                                      {
                                        ref: V,
                                        class: [
                                          "v-overlay__content",
                                          e.contentClass,
                                        ],
                                        style: [A.value, $.value],
                                      },
                                      Lo(k.value),
                                      e.contentProps
                                    ),
                                    [
                                      (J = n.default) == null
                                        ? void 0
                                        : J.call(n, { isActive: i }),
                                    ]
                                  ),
                                  [
                                    [_n, i.value],
                                    [
                                      Rt("click-outside"),
                                      {
                                        handler: I,
                                        closeConditional: L,
                                        include: () => [g.value],
                                      },
                                    ],
                                  ]
                                ),
                              ],
                            }
                          ),
                        ]
                      ),
                  ],
                }
              ),
          ]);
        }),
        {
          activatorEl: g,
          animateClick: T,
          contentEl: V,
          globalTop: h,
          localTop: p,
          updateLocation: R,
        }
      );
    },
  });
function Ao(e) {
  return Lt(e, Object.keys(Ol.props));
}
function Eo() {
  const t = ht("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Vo = je()({
    name: "VMenu",
    props: {
      id: String,
      ...La(
        Mr({
          closeDelay: 250,
          closeOnContentClick: !0,
          locationStrategy: "connected",
          openDelay: 300,
          scrim: !1,
          scrollStrategy: "reposition",
          transition: { component: go },
        }),
        ["absolute"]
      ),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = pe(e, "modelValue"),
        { scopeId: l } = Eo(),
        r = pt(),
        i = b(() => e.id || `v-menu-${r}`),
        o = B(),
        s = Oe(zs, null);
      let c = 0;
      Qe(zs, {
        register() {
          ++c;
        },
        unregister() {
          --c;
        },
        closeParents() {
          setTimeout(() => {
            c || ((a.value = !1), s == null || s.closeParents());
          }, 40);
        },
      }),
        ce(a, (d) => {
          d ? s == null || s.register() : s == null || s.unregister();
        });
      function u() {
        s == null || s.closeParents();
      }
      return (
        X(() => {
          const [d] = Ao(e);
          return m(
            Ol,
            ue(
              { ref: o, class: ["v-menu"] },
              d,
              {
                modelValue: a.value,
                "onUpdate:modelValue": (f) => (a.value = f),
                absolute: !0,
                activatorProps: ue(
                  {
                    "aria-haspopup": "menu",
                    "aria-expanded": String(a.value),
                    "aria-owns": i.value,
                  },
                  e.activatorProps
                ),
                "onClick:outside": u,
              },
              l
            ),
            {
              activator: n.activator,
              default: function () {
                for (
                  var f, v = arguments.length, h = new Array(v), p = 0;
                  p < v;
                  p++
                )
                  h[p] = arguments[p];
                return m(
                  Ne,
                  { root: !0 },
                  {
                    default: () => [
                      (f = n.default) == null ? void 0 : f.call(n, ...h),
                    ],
                  }
                );
              },
            }
          );
        }),
        cn({ id: i }, o)
      );
    },
  }),
  fc = ye(
    {
      chips: Boolean,
      closableChips: Boolean,
      eager: Boolean,
      hideNoData: Boolean,
      hideSelected: Boolean,
      menu: Boolean,
      menuIcon: { type: ge, default: "$dropdown" },
      menuProps: { type: Object },
      multiple: Boolean,
      noDataText: { type: String, default: "$vuetify.noDataText" },
      openOnClear: Boolean,
      ...sg({ itemChildren: !1 }),
    },
    "v-select"
  ),
  DA = je()({
    name: "VSelect",
    props: {
      ...fc(),
      ...La(wo({ modelValue: null }), [
        "validationValue",
        "dirty",
        "appendInnerIcon",
      ]),
      ...Fn({ transition: { component: go } }),
    },
    emits: { "update:modelValue": (e) => !0, "update:menu": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { t: a } = on(),
        l = B(),
        r = pe(e, "menu"),
        { items: i, transformIn: o, transformOut: s } = cc(e),
        c = pe(
          e,
          "modelValue",
          [],
          (y) => o(Ut(y)),
          (y) => {
            var S;
            const k = s(y);
            return e.multiple ? k : (S = k[0]) != null ? S : null;
          }
        ),
        u = b(() =>
          c.value.map((y) => i.value.find((k) => k.value === y.value) || y)
        ),
        d = b(() => u.value.map((y) => y.props.value)),
        f = B();
      function v(y) {
        (c.value = []), e.openOnClear && (r.value = !0);
      }
      function h() {
        (e.hideNoData && !i.value.length) || e.readonly || (r.value = !r.value);
      }
      function p(y) {
        if (!e.readonly) {
          if (
            (["Enter", "ArrowDown", " "].includes(y.key) &&
              (y.preventDefault(), (r.value = !0)),
            ["Escape", "Tab"].includes(y.key) && (r.value = !1),
            y.key === "ArrowDown")
          ) {
            var k;
            (k = f.value) == null || k.focus("next");
          } else if (y.key === "ArrowUp") {
            var S;
            y.preventDefault(), (S = f.value) == null || S.focus("prev");
          } else if (y.key === "Home") {
            var A;
            y.preventDefault(), (A = f.value) == null || A.focus("first");
          } else if (y.key === "End") {
            var x;
            y.preventDefault(), (x = f.value) == null || x.focus("last");
          }
        }
      }
      function w(y) {
        if (e.multiple) {
          const k = d.value.findIndex((S) => S === y.value);
          if (k === -1) c.value = [...c.value, y];
          else {
            const S = [...c.value];
            S.splice(k, 1), (c.value = S);
          }
        } else (c.value = [y]), (r.value = !1);
      }
      function g(y) {
        var k;
        ((k = f.value) != null && k.$el.contains(y.relatedTarget)) ||
          (r.value = !1);
      }
      function _(y) {
        if (y.relatedTarget == null) {
          var k;
          (k = l.value) == null || k.focus();
        }
      }
      return (
        X(() => {
          const y = !!(e.chips || n.chip),
            [k] = ic(e);
          return m(
            Lr,
            ue({ ref: l }, k, {
              modelValue: c.value.map((S) => S.props.value).join(", "),
              "onUpdate:modelValue": (S) => {
                S == null && (c.value = []);
              },
              validationValue: c.externalValue,
              dirty: c.value.length > 0,
              class: [
                "v-select",
                {
                  "v-select--active-menu": r.value,
                  "v-select--chips": !!e.chips,
                  [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
                  "v-select--selected": c.value.length,
                },
              ],
              appendInnerIcon: e.menuIcon,
              readonly: !0,
              "onClick:clear": v,
              "onClick:control": h,
              onBlur: g,
              onKeydown: p,
            }),
            {
              ...n,
              default: () => {
                var S, A, x;
                return m(xe, null, [
                  m(
                    Vo,
                    ue(
                      {
                        modelValue: r.value,
                        "onUpdate:modelValue": (C) => (r.value = C),
                        activator: "parent",
                        contentClass: "v-select__content",
                        eager: e.eager,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                      },
                      e.menuProps
                    ),
                    {
                      default: () => [
                        m(
                          Co,
                          {
                            ref: f,
                            selected: d.value,
                            selectStrategy: e.multiple
                              ? "independent"
                              : "single-independent",
                            onMousedown: (C) => C.preventDefault(),
                            onFocusout: _,
                          },
                          {
                            default: () => {
                              var C;
                              return [
                                !i.value.length &&
                                  !e.hideNoData &&
                                  ((C =
                                    (S = n["no-data"]) == null
                                      ? void 0
                                      : S.call(n)) != null
                                    ? C
                                    : m(Pn, { title: a(e.noDataText) }, null)),
                                (A = n["prepend-item"]) == null
                                  ? void 0
                                  : A.call(n),
                                i.value.map((V, $) => {
                                  var I;
                                  var R;
                                  return (I =
                                    (R = n.item) == null
                                      ? void 0
                                      : R.call(n, {
                                          item: V,
                                          index: $,
                                          props: ue(V.props, {
                                            onClick: () => w(V),
                                          }),
                                        })) != null
                                    ? I
                                    : m(
                                        Pn,
                                        ue({ key: $ }, V.props, {
                                          onClick: () => w(V),
                                        }),
                                        {
                                          prepend: (L) => {
                                            let { isSelected: D } = L;
                                            return e.multiple && !e.hideSelected
                                              ? m(
                                                  Pl,
                                                  { modelValue: D, ripple: !1 },
                                                  null
                                                )
                                              : void 0;
                                          },
                                        }
                                      );
                                }),
                                (x = n["append-item"]) == null
                                  ? void 0
                                  : x.call(n),
                              ];
                            },
                          }
                        ),
                      ],
                    }
                  ),
                  u.value.map((C, V) => {
                    function $(I) {
                      I.stopPropagation(), I.preventDefault(), w(C);
                    }
                    const R = {
                      "onClick:close": $,
                      modelValue: !0,
                      "onUpdate:modelValue": void 0,
                    };
                    return m(
                      "div",
                      { key: C.value, class: "v-select__selection" },
                      [
                        y
                          ? m(
                              Ne,
                              {
                                defaults: {
                                  VChip: {
                                    closable: e.closableChips,
                                    size: "small",
                                    text: C.title,
                                  },
                                },
                              },
                              {
                                default: () => [
                                  n.chip
                                    ? n.chip({ item: C, index: V, props: R })
                                    : m(Nr, R, null),
                                ],
                              }
                            )
                          : n.selection
                          ? n.selection({ item: C, index: V })
                          : m("span", { class: "v-select__selection-text" }, [
                              C.title,
                              e.multiple &&
                                V < u.value.length - 1 &&
                                m(
                                  "span",
                                  { class: "v-select__selection-comma" },
                                  [Je(",")]
                                ),
                            ]),
                      ]
                    );
                  }),
                ]);
              },
            }
          );
        }),
        cn({ menu: r, select: w }, l)
      );
    },
  }),
  zA = (e, t, n) =>
    e == null || t == null
      ? -1
      : e
          .toString()
          .toLocaleLowerCase()
          .indexOf(t.toString().toLocaleLowerCase()),
  bg = ye(
    {
      customFilter: Function,
      customKeyFilter: Object,
      filterKeys: [Array, String],
      filterMode: { type: String, default: "intersection" },
      noFilter: Boolean,
    },
    "filter"
  );
function jA(e, t, n) {
  var s, c;
  const a = [],
    l = (s = n == null ? void 0 : n.default) != null ? s : zA,
    r = n != null && n.filterKeys ? Ut(n.filterKeys) : !1,
    i = Object.keys(
      (c = n == null ? void 0 : n.customKeyFilter) != null ? c : {}
    ).length;
  if (!(e != null && e.length)) return a;
  e: for (let u = 0; u < e.length; u++) {
    const d = e[u],
      f = {},
      v = {};
    let h = -1;
    if (t && !(n != null && n.noFilter)) {
      if (typeof d == "object") {
        const g = r || Object.keys(d);
        for (const _ of g) {
          var o;
          const y = mn(d, _, d),
            k = n == null || (o = n.customKeyFilter) == null ? void 0 : o[_];
          if (((h = k ? k(y, t, d) : l(y, t, d)), h !== -1 && h !== !1))
            k ? (f[_] = h) : (v[_] = h);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else (h = l(d, t, d)), h !== -1 && h !== !1 && (v.title = h);
      const p = Object.keys(v).length,
        w = Object.keys(f).length;
      if (
        (!p && !w) ||
        ((n == null ? void 0 : n.filterMode) === "union" && w !== i && !p) ||
        ((n == null ? void 0 : n.filterMode) === "intersection" &&
          (w !== i || !p))
      )
        continue;
    }
    a.push({ index: u, matches: { ...v, ...f } });
  }
  return a;
}
function _g(e, t, n) {
  const a = b(() =>
    typeof (n == null ? void 0 : n.value) != "string" &&
    typeof (n == null ? void 0 : n.value) != "number"
      ? ""
      : String(n.value)
  );
  return {
    filteredItems: b(() => {
      const r = Ot(t);
      return jA(r, a.value, {
        customKeyFilter: e.customKeyFilter,
        default: e.customFilter,
        filterKeys: e.filterKeys,
        filterMode: e.filterMode,
        noFilter: e.noFilter,
      }).map((o) => {
        let { index: s, matches: c } = o;
        return { item: r[s], matches: c };
      });
    }),
  };
}
function HA(e, t, n) {
  if (Array.isArray(t)) throw new Error("Multiple matches is not implemented");
  return typeof t == "number" && ~t
    ? m(xe, null, [
        m("span", { class: "v-autocomplete__unmask" }, [e.substr(0, t)]),
        m("span", { class: "v-autocomplete__mask" }, [e.substr(t, n)]),
        m("span", { class: "v-autocomplete__unmask" }, [e.substr(t + n)]),
      ])
    : e;
}
const UA = je()({
  name: "VAutocomplete",
  props: {
    search: String,
    ...bg({ filterKeys: ["title"] }),
    ...fc(),
    ...La(wo({ modelValue: null }), [
      "validationValue",
      "dirty",
      "appendInnerIcon",
    ]),
    ...Fn({ transition: !1 }),
  },
  emits: {
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0,
  },
  setup(e, t) {
    let { slots: n } = t;
    const { t: a } = on(),
      l = B(),
      r = B(!1),
      i = B(!0),
      o = pe(e, "menu"),
      { items: s, transformIn: c, transformOut: u } = cc(e),
      d = pe(e, "search", ""),
      f = pe(
        e,
        "modelValue",
        [],
        ($) => c(Ut($)),
        ($) => {
          var I;
          const R = u($);
          return e.multiple ? R : (I = R[0]) != null ? I : null;
        }
      ),
      { filteredItems: v } = _g(
        e,
        s,
        b(() => (i.value ? void 0 : d.value))
      ),
      h = b(() =>
        f.value.map(($) => s.value.find((R) => R.value === $.value) || $)
      ),
      p = b(() => h.value.map(($) => $.props.value)),
      w = B();
    function g($) {
      (f.value = []), e.openOnClear && (o.value = !0), (d.value = "");
    }
    function _() {
      (e.hideNoData && !s.value.length) || e.readonly || (o.value = !0);
    }
    function y($) {
      if (!e.readonly) {
        if (
          (["Enter", "ArrowDown"].includes($.key) && (o.value = !0),
          ["Escape"].includes($.key) && (o.value = !1),
          ["Enter", "Escape", "Tab"].includes($.key) && (i.value = !0),
          $.key === "ArrowDown")
        ) {
          var R;
          $.preventDefault(), (R = w.value) == null || R.focus("next");
        } else if ($.key === "ArrowUp") {
          var I;
          $.preventDefault(), (I = w.value) == null || I.focus("prev");
        }
      }
    }
    function k($) {
      d.value = $.target.value;
    }
    function S() {
      r.value && (i.value = !0);
    }
    function A($) {
      r.value = !0;
    }
    function x($) {
      if ($.relatedTarget == null) {
        var R;
        (R = l.value) == null || R.focus();
      }
    }
    const C = B(!1);
    function V($) {
      if (e.multiple) {
        const R = p.value.findIndex((I) => I === $.value);
        if (R === -1) (f.value = [...f.value, $]), (d.value = "");
        else {
          const I = [...f.value];
          I.splice(R, 1), (f.value = I);
        }
      } else
        (f.value = [$]),
          (C.value = !0),
          n.selection || (d.value = $.title),
          (o.value = !1),
          (i.value = !0),
          Ke(() => (C.value = !1));
    }
    return (
      ce(r, ($) => {
        var I;
        if ($) {
          var R;
          (C.value = !0),
            (d.value =
              e.multiple || !!n.selection
                ? ""
                : String(
                    (I =
                      (R = h.value.at(-1)) == null ? void 0 : R.props.title) !=
                      null
                      ? I
                      : ""
                  )),
            (i.value = !0),
            Ke(() => (C.value = !1));
        } else (o.value = !1), (d.value = "");
      }),
      ce(d, ($) => {
        !r.value || C.value || ($ && (o.value = !0), (i.value = !$));
      }),
      X(() => {
        const $ = !!(e.chips || n.chip),
          [R] = ic(e);
        return m(
          Lr,
          ue({ ref: l }, R, {
            modelValue: d.value,
            "onUpdate:modelValue": (I) => {
              I == null && (f.value = []);
            },
            validationValue: f.externalValue,
            dirty: f.value.length > 0,
            onInput: k,
            class: [
              "v-autocomplete",
              {
                "v-autocomplete--active-menu": o.value,
                "v-autocomplete--chips": !!e.chips,
                [`v-autocomplete--${e.multiple ? "multiple" : "single"}`]: !0,
                "v-autocomplete--selection-slot": !!n.selection,
              },
            ],
            appendInnerIcon: e.menuIcon,
            readonly: e.readonly,
            "onClick:clear": g,
            "onClick:control": _,
            "onClick:input": _,
            onFocus: () => (r.value = !0),
            onBlur: () => (r.value = !1),
            onKeydown: y,
          }),
          {
            ...n,
            default: () => {
              var I, L, D;
              return m(xe, null, [
                m(
                  Vo,
                  ue(
                    {
                      modelValue: o.value,
                      "onUpdate:modelValue": (Y) => (o.value = Y),
                      activator: "parent",
                      contentClass: "v-autocomplete__content",
                      eager: e.eager,
                      openOnClick: !1,
                      closeOnContentClick: !1,
                      transition: e.transition,
                      onAfterLeave: S,
                    },
                    e.menuProps
                  ),
                  {
                    default: () => [
                      m(
                        Co,
                        {
                          ref: w,
                          selected: p.value,
                          selectStrategy: e.multiple
                            ? "independent"
                            : "single-independent",
                          onMousedown: (Y) => Y.preventDefault(),
                          onFocusin: A,
                          onFocusout: x,
                        },
                        {
                          default: () => {
                            var Y;
                            return [
                              !v.value.length &&
                                !e.hideNoData &&
                                ((Y =
                                  (I = n["no-data"]) == null
                                    ? void 0
                                    : I.call(n)) != null
                                  ? Y
                                  : m(Pn, { title: a(e.noDataText) }, null)),
                              (L = n["prepend-item"]) == null
                                ? void 0
                                : L.call(n),
                              v.value.map((z, T) => {
                                var le;
                                var F;
                                let { item: J, matches: K } = z;
                                return (le =
                                  (F = n.item) == null
                                    ? void 0
                                    : F.call(n, {
                                        item: J,
                                        index: T,
                                        props: ue(J.props, {
                                          onClick: () => V(J),
                                        }),
                                      })) != null
                                  ? le
                                  : m(
                                      Pn,
                                      ue({ key: T }, J.props, {
                                        onClick: () => V(J),
                                      }),
                                      {
                                        prepend: (ie) => {
                                          let { isSelected: we } = ie;
                                          return e.multiple && !e.hideSelected
                                            ? m(
                                                Pl,
                                                { modelValue: we, ripple: !1 },
                                                null
                                              )
                                            : void 0;
                                        },
                                        title: () => {
                                          var we;
                                          var ie;
                                          return i.value
                                            ? J.title
                                            : HA(
                                                J.title,
                                                K.title,
                                                (we =
                                                  (ie = d.value) == null
                                                    ? void 0
                                                    : ie.length) != null
                                                  ? we
                                                  : 0
                                              );
                                        },
                                      }
                                    );
                              }),
                              (D = n["append-item"]) == null
                                ? void 0
                                : D.call(n),
                            ];
                          },
                        }
                      ),
                    ],
                  }
                ),
                h.value.map((Y, z) => {
                  function T(J) {
                    J.stopPropagation(), J.preventDefault(), V(Y);
                  }
                  const F = {
                    "onClick:close": T,
                    modelValue: !0,
                    "onUpdate:modelValue": void 0,
                  };
                  return m(
                    "div",
                    { key: Y.value, class: "v-autocomplete__selection" },
                    [
                      $
                        ? m(
                            Ne,
                            {
                              defaults: {
                                VChip: {
                                  closable: e.closableChips,
                                  size: "small",
                                  text: Y.title,
                                },
                              },
                            },
                            {
                              default: () => [
                                n.chip
                                  ? n.chip({ item: Y, index: z, props: F })
                                  : m(Nr, F, null),
                              ],
                            }
                          )
                        : n.selection
                        ? n.selection({ item: Y, index: z })
                        : m(
                            "span",
                            { class: "v-autocomplete__selection-text" },
                            [
                              Y.title,
                              e.multiple &&
                                z < h.value.length - 1 &&
                                m(
                                  "span",
                                  { class: "v-autocomplete__selection-comma" },
                                  [Je(",")]
                                ),
                            ]
                          ),
                    ]
                  );
                }),
              ]);
            },
          }
        );
      }),
      cn(
        {
          isFocused: r,
          isPristine: i,
          menu: o,
          search: d,
          filteredItems: v,
          select: V,
        },
        l
      )
    );
  },
});
const WA = Z({
  name: "VBadge",
  inheritAttrs: !1,
  props: {
    bordered: Boolean,
    color: String,
    content: [Number, String],
    dot: Boolean,
    floating: Boolean,
    icon: ge,
    inline: Boolean,
    label: { type: String, default: "$vuetify.badge" },
    max: [Number, String],
    modelValue: { type: Boolean, default: !0 },
    offsetX: [Number, String],
    offsetY: [Number, String],
    textColor: String,
    ...za({ location: "top end" }),
    ...Ye(),
    ...be(),
    ...$e(),
    ...Fn({ transition: "scale-rotate-transition" }),
  },
  setup(e, t) {
    const { backgroundColorClasses: n, backgroundColorStyles: a } = tt(
        j(e, "color")
      ),
      { roundedClasses: l } = nt(e),
      { t: r } = on(),
      { textColorClasses: i, textColorStyles: o } = kt(j(e, "textColor")),
      { themeClasses: s } = yh(),
      { locationStyles: c } = ja(e, !0, (u) => {
        var f, v;
        return (
          (e.floating ? (e.dot ? 2 : 4) : e.dot ? 8 : 12) +
          (["top", "bottom"].includes(u)
            ? +((f = e.offsetY) != null ? f : 0)
            : ["left", "right"].includes(u)
            ? +((v = e.offsetX) != null ? v : 0)
            : 0)
        );
      });
    return (
      X(() => {
        var u, d, f, v;
        const h = Number(e.content),
          p = !e.max || isNaN(h) ? e.content : h <= e.max ? h : `${e.max}+`,
          [w, g] = Lt(t.attrs, [
            "aria-atomic",
            "aria-label",
            "aria-live",
            "role",
            "title",
          ]);
        return m(
          e.tag,
          ue(
            {
              class: [
                "v-badge",
                {
                  "v-badge--bordered": e.bordered,
                  "v-badge--dot": e.dot,
                  "v-badge--floating": e.floating,
                  "v-badge--inline": e.inline,
                },
              ],
            },
            g
          ),
          {
            default: () => [
              m("div", { class: "v-badge__wrapper" }, [
                (u = (d = t.slots).default) == null ? void 0 : u.call(d),
                m(
                  hn,
                  { transition: e.transition },
                  {
                    default: () => [
                      Le(
                        m(
                          "span",
                          ue(
                            {
                              class: [
                                "v-badge__badge",
                                s.value,
                                n.value,
                                l.value,
                                i.value,
                              ],
                              style: [
                                a.value,
                                o.value,
                                e.inline ? {} : c.value,
                              ],
                              "aria-atomic": "true",
                              "aria-label": r(e.label, h),
                              "aria-live": "polite",
                              role: "status",
                            },
                            w
                          ),
                          [
                            e.dot
                              ? void 0
                              : t.slots.badge
                              ? (f = (v = t.slots).badge) == null
                                ? void 0
                                : f.call(v)
                              : e.icon
                              ? m(at, { icon: e.icon }, null)
                              : p,
                          ]
                        ),
                        [[_n, e.modelValue]]
                      ),
                    ],
                  }
                ),
              ]),
            ],
          }
        );
      }),
      {}
    );
  },
});
const xg = Z({
    name: "VBannerActions",
    props: { color: String, density: String },
    setup(e, t) {
      let { slots: n } = t;
      return (
        it({ VBtn: { color: e.color, density: e.density, variant: "text" } }),
        X(() => {
          var a;
          return m("div", { class: "v-banner-actions" }, [
            (a = n.default) == null ? void 0 : a.call(n),
          ]);
        }),
        {}
      );
    },
  }),
  wg = Gt("v-banner-text"),
  YA = Z({
    name: "VBanner",
    props: {
      avatar: String,
      color: String,
      icon: ge,
      lines: String,
      stacked: Boolean,
      sticky: Boolean,
      text: String,
      ...Nt(),
      ...st(),
      ...sn(),
      ...rt(),
      ...za(),
      ...El(),
      ...Ye(),
      ...be(),
      ...$e(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { borderClasses: a } = Kt(e),
        { densityClasses: l } = yt(e),
        { mobile: r } = mo(),
        { dimensionStyles: i } = un(e),
        { elevationClasses: o } = gt(e),
        { locationStyles: s } = ja(e),
        { positionClasses: c } = Vl(e),
        { roundedClasses: u } = nt(e),
        { themeClasses: d } = Be(e),
        f = j(e, "color"),
        v = j(e, "density");
      it({ VBannerActions: { color: f, density: v } }),
        X(() => {
          var h;
          const p = !!(e.text || n.text),
            w = !!(n.prepend || e.avatar || e.icon);
          return m(
            e.tag,
            {
              class: [
                "v-banner",
                {
                  "v-banner--stacked": e.stacked || r.value,
                  "v-banner--sticky": e.sticky,
                  [`v-banner--${e.lines}-line`]: !!e.lines,
                },
                a.value,
                l.value,
                o.value,
                c.value,
                u.value,
                d.value,
              ],
              style: [i.value, s.value],
              role: "banner",
            },
            {
              default: () => [
                w &&
                  m(
                    Ne,
                    {
                      key: "prepend",
                      defaults: {
                        VAvatar: {
                          color: f.value,
                          density: v.value,
                          icon: e.icon,
                          image: e.avatar,
                        },
                      },
                    },
                    {
                      default: () => [
                        m("div", { class: "v-banner__prepend" }, [
                          n.prepend
                            ? n.prepend()
                            : (e.avatar || e.icon) && m(ea, null, null),
                        ]),
                      ],
                    }
                  ),
                m("div", { class: "v-banner__content" }, [
                  p &&
                    m(
                      wg,
                      { key: "text" },
                      { default: () => [n.text ? n.text() : e.text] }
                    ),
                  (h = n.default) == null ? void 0 : h.call(n),
                ]),
                n.actions && m(xg, null, { default: () => [n.actions()] }),
              ],
            }
          );
        });
    },
  });
const GA = Z({
  name: "VBottomNavigation",
  props: {
    bgColor: String,
    color: String,
    grow: Boolean,
    mode: {
      type: String,
      validator: (e) => !e || ["horizontal", "shift"].includes(e),
    },
    height: { type: [Number, String], default: 56 },
    ...Nt(),
    ...st(),
    ...rt(),
    ...Ye(),
    ...xl({ name: "bottom-navigation" }),
    ...be({ tag: "header" }),
    ...Cl({ modelValue: !0, selectedClass: "v-btn--selected" }),
    ...$e(),
  },
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const { themeClasses: a } = yh(),
      { borderClasses: l } = Kt(e),
      { backgroundColorClasses: r, backgroundColorStyles: i } = tt(
        j(e, "bgColor")
      ),
      { densityClasses: o } = yt(e),
      { elevationClasses: s } = gt(e),
      { roundedClasses: c } = nt(e),
      u = b(
        () =>
          Number(e.height) -
          (e.density === "comfortable" ? 8 : 0) -
          (e.density === "compact" ? 16 : 0)
      ),
      d = pe(e, "modelValue"),
      { layoutItemStyles: f } = wl({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: b(() => "bottom"),
        layoutSize: b(() => (d.value ? u.value : 0)),
        elementSize: u,
        active: d,
        absolute: j(e, "absolute"),
      });
    return (
      Da(e, Qu),
      it(
        {
          VBtn: {
            color: j(e, "color"),
            density: j(e, "density"),
            stacked: b(() => e.mode !== "horizontal"),
            variant: "text",
          },
        },
        { scoped: !0 }
      ),
      X(() =>
        m(
          e.tag,
          {
            class: [
              "v-bottom-navigation",
              {
                "v-bottom-navigation--active": d.value,
                "v-bottom-navigation--grow": e.grow,
                "v-bottom-navigation--shift": e.mode === "shift",
              },
              a.value,
              r.value,
              l.value,
              o.value,
              s.value,
              c.value,
            ],
            style: [
              i.value,
              f.value,
              {
                height: ae(u.value),
                transform: `translateY(${ae(d.value ? 0 : 100, "%")})`,
              },
            ],
          },
          {
            default: () => [
              n.default &&
                m("div", { class: "v-bottom-navigation__content" }, [
                  n.default(),
                ]),
            ],
          }
        )
      ),
      {}
    );
  },
});
const Sg = Gt("v-breadcrumbs-divider", "li"),
  Cg = Z({
    name: "VBreadcrumbsItem",
    props: {
      active: Boolean,
      activeClass: String,
      activeColor: String,
      color: String,
      disabled: Boolean,
      title: String,
      ...$l(),
      ...be({ tag: "li" }),
    },
    setup(e, t) {
      let { slots: n, attrs: a } = t;
      const l = Tr(e, a),
        r = b(() => {
          var c;
          return e.active || ((c = l.isActive) == null ? void 0 : c.value);
        }),
        i = b(() => (r.value ? e.activeColor : e.color)),
        { textColorClasses: o, textColorStyles: s } = kt(i);
      return (
        X(() => {
          var c;
          const u = l.isLink.value ? "a" : e.tag;
          return m(
            u,
            {
              class: [
                "v-breadcrumbs-item",
                {
                  "v-breadcrumbs-item--active": r.value,
                  "v-breadcrumbs-item--disabled": e.disabled,
                  "v-breadcrumbs-item--link": l.isLink.value,
                  [`${e.activeClass}`]: r.value && e.activeClass,
                },
                o.value,
              ],
              style: [s.value],
              href: l.href.value,
              "aria-current": r.value ? "page" : void 0,
              onClick: l.navigate,
            },
            {
              default: () => {
                var d;
                return [
                  (d = (c = n.default) == null ? void 0 : c.call(n)) != null
                    ? d
                    : e.title,
                ];
              },
            }
          );
        }),
        {}
      );
    },
  }),
  KA = je()({
    name: "VBreadcrumbs",
    props: {
      activeClass: String,
      activeColor: String,
      bgColor: String,
      color: String,
      disabled: Boolean,
      divider: { type: String, default: "/" },
      icon: ge,
      items: { type: Array, default: () => [] },
      ...st(),
      ...Ye(),
      ...be({ tag: "ul" }),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { backgroundColorClasses: a, backgroundColorStyles: l } = tt(
          j(e, "bgColor")
        ),
        { densityClasses: r } = yt(e),
        { roundedClasses: i } = nt(e);
      return (
        it({
          VBreadcrumbsItem: {
            activeClass: j(e, "activeClass"),
            activeColor: j(e, "activeColor"),
            color: j(e, "color"),
            disabled: j(e, "disabled"),
          },
        }),
        X(() => {
          var o;
          const s = !!(n.prepend || e.icon);
          return m(
            e.tag,
            {
              class: ["v-breadcrumbs", a.value, r.value, i.value],
              style: l.value,
            },
            {
              default: () => [
                s &&
                  m(
                    Ne,
                    {
                      key: "prepend",
                      defaults: { VIcon: { icon: e.icon, start: !0 } },
                    },
                    {
                      default: () => [
                        m("div", { class: "v-breadcrumbs__prepend" }, [
                          n.prepend ? n.prepend() : e.icon && m(at, null, null),
                        ]),
                      ],
                    }
                  ),
                e.items.map((c, u, d) => {
                  var f;
                  return m(xe, null, [
                    m(
                      Cg,
                      ue(
                        { key: u, disabled: u >= d.length - 1 },
                        typeof c == "string" ? { title: c } : c
                      ),
                      {
                        default: n.title
                          ? () => {
                              var v;
                              return (v = n.title) == null
                                ? void 0
                                : v.call(n, { item: c, index: u });
                            }
                          : void 0,
                      }
                    ),
                    u < d.length - 1 &&
                      m(Sg, null, {
                        default: () => {
                          var v;
                          return [
                            (v =
                              (f = n.divider) == null
                                ? void 0
                                : f.call(n, { item: c, index: u })) != null
                              ? v
                              : e.divider,
                          ];
                        },
                      }),
                  ]);
                }),
                (o = n.default) == null ? void 0 : o.call(n),
              ],
            }
          );
        }),
        {}
      );
    },
  });
const kg = Z({
    name: "VCardActions",
    setup(e, t) {
      let { slots: n } = t;
      return (
        it({ VBtn: { variant: "text" } }),
        X(() => {
          var a;
          return m("div", { class: "v-card-actions" }, [
            (a = n.default) == null ? void 0 : a.call(n),
          ]);
        }),
        {}
      );
    },
  }),
  Ag = Gt("v-card-subtitle"),
  Eg = Gt("v-card-title"),
  Vg = Z({
    name: "VCardItem",
    props: {
      appendAvatar: String,
      appendIcon: ge,
      prependAvatar: String,
      prependIcon: ge,
      subtitle: String,
      title: String,
      ...st(),
    },
    setup(e, t) {
      let { slots: n } = t;
      return (
        X(() => {
          var a, l, r, i, o;
          const s = !!(e.prependAvatar || e.prependIcon || n.prepend),
            c = !!(e.appendAvatar || e.appendIcon || n.append),
            u = !!(e.title || n.title),
            d = !!(e.subtitle || n.subtitle);
          return m("div", { class: "v-card-item" }, [
            s &&
              m(
                Ne,
                {
                  key: "prepend",
                  defaults: {
                    VAvatar: {
                      density: e.density,
                      icon: e.prependIcon,
                      image: e.prependAvatar,
                    },
                    VIcon: { density: e.density, icon: e.prependIcon },
                  },
                },
                {
                  default: () => {
                    var f;
                    return [
                      m("div", { class: "v-card-item__prepend" }, [
                        (f = (a = n.prepend) == null ? void 0 : a.call(n)) !=
                        null
                          ? f
                          : m(ea, null, null),
                      ]),
                    ];
                  },
                }
              ),
            m("div", { class: "v-card-item__content" }, [
              u &&
                m(
                  Eg,
                  { key: "title" },
                  {
                    default: () => {
                      var f;
                      return [
                        (f = (l = n.title) == null ? void 0 : l.call(n)) != null
                          ? f
                          : e.title,
                      ];
                    },
                  }
                ),
              d &&
                m(
                  Ag,
                  { key: "subtitle" },
                  {
                    default: () => {
                      var f;
                      return [
                        (f = (r = n.subtitle) == null ? void 0 : r.call(n)) !=
                        null
                          ? f
                          : e.subtitle,
                      ];
                    },
                  }
                ),
              (i = n.default) == null ? void 0 : i.call(n),
            ]),
            c &&
              m(
                Ne,
                {
                  key: "append",
                  defaults: {
                    VAvatar: {
                      density: e.density,
                      icon: e.appendIcon,
                      image: e.appendAvatar,
                    },
                    VIcon: { density: e.density, icon: e.appendIcon },
                  },
                },
                {
                  default: () => {
                    var f;
                    return [
                      m("div", { class: "v-card-item__append" }, [
                        (f = (o = n.append) == null ? void 0 : o.call(n)) !=
                        null
                          ? f
                          : m(ea, null, null),
                      ]),
                    ];
                  },
                }
              ),
          ]);
        }),
        {}
      );
    },
  }),
  $g = Gt("v-card-text"),
  qA = Z({
    name: "VCard",
    directives: { Ripple: la },
    props: {
      appendAvatar: String,
      appendIcon: ge,
      disabled: Boolean,
      flat: Boolean,
      hover: Boolean,
      image: String,
      link: { type: Boolean, default: void 0 },
      prependAvatar: String,
      prependIcon: ge,
      ripple: Boolean,
      subtitle: String,
      text: String,
      title: String,
      ...$e(),
      ...Nt(),
      ...st(),
      ...sn(),
      ...rt(),
      ...ac(),
      ...za(),
      ...El(),
      ...Ye(),
      ...$l(),
      ...be(),
      ...qt({ variant: "elevated" }),
    },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { themeClasses: l } = Be(e),
        { borderClasses: r } = Kt(e),
        { colorClasses: i, colorStyles: o, variantClasses: s } = Ma(e),
        { densityClasses: c } = yt(e),
        { dimensionStyles: u } = un(e),
        { elevationClasses: d } = gt(e),
        { loaderClasses: f } = yo(e),
        { locationStyles: v } = ja(e),
        { positionClasses: h } = Vl(e),
        { roundedClasses: p } = nt(e),
        w = Tr(e, n),
        g = b(() => e.link !== !1 && w.isLink.value),
        _ = b(
          () => !e.disabled && e.link !== !1 && (e.link || w.isClickable.value)
        );
      return (
        X(() => {
          var y, k, S;
          const A = g.value ? "a" : e.tag,
            x = !!(a.title || e.title),
            C = !!(a.subtitle || e.subtitle),
            V = x || C,
            $ = !!(a.append || e.appendAvatar || e.appendIcon),
            R = !!(a.prepend || e.prependAvatar || e.prependIcon),
            I = !!(a.image || e.image),
            L = V || R || $,
            D = !!(a.text || e.text);
          return Le(
            m(
              A,
              {
                class: [
                  "v-card",
                  {
                    "v-card--disabled": e.disabled,
                    "v-card--flat": e.flat,
                    "v-card--hover": e.hover && !(e.disabled || e.flat),
                    "v-card--link": _.value,
                  },
                  l.value,
                  r.value,
                  i.value,
                  c.value,
                  d.value,
                  f.value,
                  h.value,
                  p.value,
                  s.value,
                ],
                style: [o.value, u.value, v.value],
                href: w.href.value,
                onClick: _.value && w.navigate,
                tabindex: e.disabled ? -1 : void 0,
              },
              {
                default: () => [
                  I &&
                    m(
                      Ne,
                      {
                        key: "image",
                        defaults: { VImg: { cover: !0, src: e.image } },
                      },
                      {
                        default: () => {
                          var Y;
                          return [
                            m("div", { class: "v-card__image" }, [
                              (Y =
                                (y = a.image) == null ? void 0 : y.call(a)) !=
                              null
                                ? Y
                                : m(Sl, null, null),
                            ]),
                          ];
                        },
                      }
                    ),
                  m(
                    lc,
                    {
                      name: "v-card",
                      active: !!e.loading,
                      color: typeof e.loading == "boolean" ? void 0 : e.loading,
                    },
                    { default: a.loader }
                  ),
                  L &&
                    m(
                      Vg,
                      {
                        key: "item",
                        prependAvatar: e.prependAvatar,
                        prependIcon: e.prependIcon,
                        title: e.title,
                        subtitle: e.subtitle,
                        appendAvatar: e.appendAvatar,
                        appendIcon: e.appendIcon,
                      },
                      {
                        default: a.item,
                        prepend: a.prepend,
                        title: a.title,
                        subtitle: a.subtitle,
                        append: a.append,
                      }
                    ),
                  D &&
                    m(
                      $g,
                      { key: "text" },
                      {
                        default: () => {
                          var Y;
                          return [
                            (Y = (k = a.text) == null ? void 0 : k.call(a)) !=
                            null
                              ? Y
                              : e.text,
                          ];
                        },
                      }
                    ),
                  (S = a.default) == null ? void 0 : S.call(a),
                  a.actions && m(kg, null, { default: a.actions }),
                  Na(_.value, "v-card"),
                ],
              }
            ),
            [[Rt("ripple"), _.value]]
          );
        }),
        {}
      );
    },
  });
const XA = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e,
    r = 0.5,
    i = 16;
  (e.offsetX = n - t),
    (e.offsetY = l - a),
    Math.abs(e.offsetY) < r * Math.abs(e.offsetX) &&
      (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)),
    Math.abs(e.offsetX) < r * Math.abs(e.offsetY) &&
      (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function JA(e, t) {
  var n;
  const a = e.changedTouches[0];
  (t.touchstartX = a.clientX),
    (t.touchstartY = a.clientY),
    (n = t.start) == null || n.call(t, { originalEvent: e, ...t });
}
function ZA(e, t) {
  var n;
  const a = e.changedTouches[0];
  (t.touchendX = a.clientX),
    (t.touchendY = a.clientY),
    (n = t.end) == null || n.call(t, { originalEvent: e, ...t }),
    XA(t);
}
function QA(e, t) {
  var n;
  const a = e.changedTouches[0];
  (t.touchmoveX = a.clientX),
    (t.touchmoveY = a.clientY),
    (n = t.move) == null || n.call(t, { originalEvent: e, ...t });
}
function e2() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end,
  };
  return {
    touchstart: (n) => JA(n, t),
    touchend: (n) => ZA(n, t),
    touchmove: (n) => QA(n, t),
  };
}
function t2(e, t) {
  var s, c;
  var n;
  const a = t.value,
    l = a != null && a.parent ? e.parentElement : e,
    r = (s = a == null ? void 0 : a.options) != null ? s : { passive: !0 },
    i = (n = t.instance) == null ? void 0 : n.$.uid;
  if (!l || !i) return;
  const o = e2(t.value);
  (l._touchHandlers = (c = l._touchHandlers) != null ? c : Object.create(null)),
    (l._touchHandlers[i] = o),
    Km(o).forEach((u) => {
      l.addEventListener(u, o[u], r);
    });
}
function n2(e, t) {
  var n, a;
  const l = (n = t.value) != null && n.parent ? e.parentElement : e,
    r = (a = t.instance) == null ? void 0 : a.$.uid;
  if (!(l != null && l._touchHandlers) || !r) return;
  const i = l._touchHandlers[r];
  Km(i).forEach((o) => {
    l.removeEventListener(o, i[o]);
  }),
    delete l._touchHandlers[r];
}
const vc = { mounted: t2, unmounted: n2 },
  Ig = Symbol.for("vuetify:v-window"),
  Pg = Symbol.for("vuetify:v-window-group"),
  Og = je()({
    name: "VWindow",
    directives: { Touch: vc },
    props: {
      continuous: Boolean,
      nextIcon: { type: [Boolean, String, Function, Object], default: "$next" },
      prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" },
      reverse: Boolean,
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == "boolean" || e === "hover",
      },
      touch: { type: [Object, Boolean], default: void 0 },
      direction: { type: String, default: "horizontal" },
      modelValue: null,
      disabled: Boolean,
      selectedClass: { type: String, default: "v-window-item--active" },
      mandatory: { default: "force" },
      ...be(),
      ...$e(),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Be(e),
        { isRtl: l } = Mn(),
        { t: r } = on(),
        i = Da(e, Pg),
        o = B(),
        s = b(() => (l.value ? !e.reverse : e.reverse)),
        c = B(!1),
        u = b(() => {
          const k = e.direction === "vertical" ? "y" : "x",
            A = (s.value ? !c.value : c.value) ? "-reverse" : "";
          return `v-window-${k}${A}-transition`;
        }),
        d = B(0),
        f = B(void 0),
        v = b(() =>
          i.items.value.findIndex((k) => i.selected.value.includes(k.id))
        );
      ce(v, (k, S) => {
        const A = i.items.value.length,
          x = A - 1;
        A <= 2
          ? (c.value = k < S)
          : k === x && S === 0
          ? (c.value = !0)
          : k === 0 && S === x
          ? (c.value = !1)
          : (c.value = k < S);
      }),
        Qe(Ig, {
          transition: u,
          isReversed: c,
          transitionCount: d,
          transitionHeight: f,
          rootRef: o,
        });
      const h = b(() => e.continuous || v.value !== 0),
        p = b(() => e.continuous || v.value !== i.items.value.length - 1);
      function w() {
        h.value && i.prev();
      }
      function g() {
        p.value && i.next();
      }
      const _ = b(() => {
          const k = [],
            S = {
              icon: l.value ? e.nextIcon : e.prevIcon,
              class: `v-window__${s.value ? "right" : "left"}`,
              onClick: i.prev,
              ariaLabel: r("$vuetify.carousel.prev"),
            };
          k.push(
            h.value
              ? n.prev
                ? n.prev({ props: S })
                : m(St, S, null)
              : m("div", null, null)
          );
          const A = {
            icon: l.value ? e.prevIcon : e.nextIcon,
            class: `v-window__${s.value ? "left" : "right"}`,
            onClick: i.next,
            ariaLabel: r("$vuetify.carousel.next"),
          };
          return (
            k.push(
              p.value
                ? n.next
                  ? n.next({ props: A })
                  : m(St, A, null)
                : m("div", null, null)
            ),
            k
          );
        }),
        y = b(() =>
          e.touch === !1
            ? e.touch
            : {
                ...{
                  left: () => {
                    s.value ? w() : g();
                  },
                  right: () => {
                    s.value ? g() : w();
                  },
                  start: (S) => {
                    let { originalEvent: A } = S;
                    A.stopPropagation();
                  },
                },
                ...(e.touch === !0 ? {} : e.touch),
              }
        );
      return (
        X(() => {
          var k, S;
          return Le(
            m(
              e.tag,
              {
                ref: o,
                class: [
                  "v-window",
                  {
                    "v-window--show-arrows-on-hover": e.showArrows === "hover",
                  },
                  a.value,
                ],
              },
              {
                default: () => [
                  m(
                    "div",
                    {
                      class: "v-window__container",
                      style: { height: f.value },
                    },
                    [
                      (k = n.default) == null
                        ? void 0
                        : k.call(n, { group: i }),
                      e.showArrows !== !1 &&
                        m("div", { class: "v-window__controls" }, [_.value]),
                    ]
                  ),
                  (S = n.additional) == null ? void 0 : S.call(n, { group: i }),
                ],
              }
            ),
            [[Rt("touch"), y.value]]
          );
        }),
        { group: i }
      );
    },
  });
function mc() {
  const e = B(!1);
  return (
    _t(() => {
      window.requestAnimationFrame(() => {
        e.value = !0;
      });
    }),
    {
      ssrBootStyles: b(() =>
        e.value ? void 0 : { transition: "none !important" }
      ),
      isBooted: $r(e),
    }
  );
}
const Tg = Z({
    name: "VWindowItem",
    directives: { Touch: vc },
    props: {
      reverseTransition: { type: [Boolean, String], default: void 0 },
      transition: { type: [Boolean, String], default: void 0 },
      ...Fa(),
      ...ko(),
    },
    emits: { "group:selected": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = Oe(Ig),
        l = kl(e, Pg),
        { isBooted: r } = mc();
      if (!a || !l)
        throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
      const i = B(!1),
        o = b(() =>
          a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1
        );
      function s() {
        !i.value ||
          !a ||
          ((i.value = !1),
          a.transitionCount.value > 0 &&
            ((a.transitionCount.value -= 1),
            a.transitionCount.value === 0 &&
              (a.transitionHeight.value = void 0)));
      }
      function c() {
        if (!(i.value || !a)) {
          if (((i.value = !0), a.transitionCount.value === 0)) {
            var h;
            a.transitionHeight.value = ae(
              (h = a.rootRef.value) == null ? void 0 : h.clientHeight
            );
          }
          a.transitionCount.value += 1;
        }
      }
      function u() {
        s();
      }
      function d(h) {
        !i.value ||
          Ke(() => {
            !o.value ||
              !i.value ||
              !a ||
              (a.transitionHeight.value = ae(h.clientHeight));
          });
      }
      const f = b(() => {
          const h = a.isReversed.value ? e.reverseTransition : e.transition;
          return o.value
            ? {
                name: typeof h != "string" ? a.transition.value : h,
                onBeforeEnter: c,
                onAfterEnter: s,
                onEnterCancelled: u,
                onBeforeLeave: c,
                onAfterLeave: s,
                onLeaveCancelled: u,
                onEnter: d,
              }
            : !1;
        }),
        { hasContent: v } = dc(e, l.isSelected);
      return (
        X(() => {
          var h;
          return m(
            hn,
            { transition: r.value && f.value },
            {
              default: () => [
                Le(
                  m(
                    "div",
                    { class: ["v-window-item", l.selectedClass.value] },
                    [v.value && ((h = n.default) == null ? void 0 : h.call(n))]
                  ),
                  [[_n, l.isSelected.value]]
                ),
              ],
            }
          );
        }),
        {}
      );
    },
  }),
  a2 = Z({
    name: "VCarousel",
    props: {
      color: String,
      cycle: Boolean,
      delimiterIcon: { type: ge, default: "$delimiter" },
      height: { type: [Number, String], default: 500 },
      hideDelimiters: Boolean,
      hideDelimiterBackground: Boolean,
      interval: {
        type: [Number, String],
        default: 6e3,
        validator: (e) => e > 0,
      },
      modelValue: null,
      progress: [Boolean, String],
      showArrows: {
        type: [Boolean, String],
        default: !0,
        validator: (e) => typeof e == "boolean" || e === "hover",
      },
      verticalDelimiters: [Boolean, String],
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = pe(e, "modelValue"),
        { t: l } = on(),
        r = B();
      let i = -1;
      ce(a, s),
        ce(() => e.interval, s),
        ce(
          () => e.cycle,
          (c) => {
            c ? s() : window.clearTimeout(i);
          }
        ),
        _t(o);
      function o() {
        !e.cycle ||
          !r.value ||
          (i = window.setTimeout(
            r.value.group.next,
            +e.interval > 0 ? +e.interval : 6e3
          ));
      }
      function s() {
        window.clearTimeout(i), window.requestAnimationFrame(o);
      }
      return (
        X(() =>
          m(
            Og,
            {
              ref: r,
              modelValue: a.value,
              "onUpdate:modelValue": (c) => (a.value = c),
              class: [
                "v-carousel",
                {
                  "v-carousel--hide-delimiter-background":
                    e.hideDelimiterBackground,
                  "v-carousel--vertical-delimiters": e.verticalDelimiters,
                },
              ],
              style: { height: ae(e.height) },
              continuous: !0,
              mandatory: "force",
              showArrows: e.showArrows,
            },
            {
              default: n.default,
              additional: (c) => {
                let { group: u } = c;
                return m(xe, null, [
                  !e.hideDelimiters &&
                    m(
                      "div",
                      {
                        class: "v-carousel__controls",
                        style: {
                          left:
                            e.verticalDelimiters === "left" &&
                            e.verticalDelimiters
                              ? 0
                              : "auto",
                          right: e.verticalDelimiters === "right" ? 0 : "auto",
                        },
                      },
                      [
                        u.items.value.length > 0 &&
                          m(
                            Ne,
                            {
                              defaults: {
                                VBtn: {
                                  color: e.color,
                                  icon: e.delimiterIcon,
                                  size: "x-small",
                                  variant: "text",
                                },
                              },
                              scoped: !0,
                            },
                            {
                              default: () => [
                                u.items.value.map((d, f) => {
                                  const v = {
                                    "aria-label": l(
                                      "$vuetify.carousel.ariaLabel.delimiter",
                                      f + 1,
                                      u.items.value.length
                                    ),
                                    class: [
                                      u.isSelected(d.id) && "v-btn--active",
                                    ],
                                    onClick: () => u.select(d.id, !0),
                                  };
                                  return n.item
                                    ? n.item({ props: v, item: d })
                                    : m(St, ue(d, v), null);
                                }),
                              ],
                            }
                          ),
                      ]
                    ),
                  e.progress &&
                    m(
                      nc,
                      {
                        class: "v-carousel__progress",
                        color:
                          typeof e.progress == "string" ? e.progress : void 0,
                        modelValue:
                          ((u.getItemIndex(a.value) + 1) /
                            u.items.value.length) *
                          100,
                      },
                      null
                    ),
                ]);
              },
              prev: n.prev,
              next: n.next,
            }
          )
        ),
        {}
      );
    },
  }),
  l2 = Z({
    name: "VCarouselItem",
    inheritAttrs: !1,
    props: { value: null },
    setup(e, t) {
      let { slots: n, attrs: a } = t;
      X(() =>
        m(
          Tg,
          { class: "v-carousel-item", value: e.value },
          { default: () => [m(Sl, a, n)] }
        )
      );
    },
  });
const r2 = Gt("v-code");
const i2 = Z({
  name: "VColorPickerCanvas",
  props: {
    color: { type: Object },
    disabled: Boolean,
    dotSize: { type: [Number, String], default: 10 },
    height: { type: [Number, String], default: 150 },
    width: { type: [Number, String], default: 300 },
  },
  emits: { "update:color": (e) => !0, "update:position": (e) => !0 },
  setup(e, t) {
    let { emit: n } = t;
    const a = B(!1),
      l = B(!1),
      r = B({ x: 0, y: 0 }),
      i = b(() => {
        const { x: h, y: p } = r.value,
          w = parseInt(e.dotSize, 10) / 2;
        return {
          width: ae(e.dotSize),
          height: ae(e.dotSize),
          transform: `translate(${ae(h - w)}, ${ae(p - w)})`,
        };
      }),
      o = B();
    function s(h, p, w) {
      const { left: g, top: _, width: y, height: k } = w;
      r.value = { x: Pt(h - g, 0, y), y: Pt(p - _, 0, k) };
    }
    function c(h) {
      e.disabled ||
        !o.value ||
        s(h.clientX, h.clientY, o.value.getBoundingClientRect());
    }
    function u(h) {
      h.preventDefault(),
        !e.disabled &&
          ((a.value = !0),
          window.addEventListener("mousemove", d),
          window.addEventListener("mouseup", f),
          window.addEventListener("touchmove", d),
          window.addEventListener("touchend", f));
    }
    function d(h) {
      if (e.disabled || !o.value) return;
      a.value = !0;
      const p = vC(h);
      s(p.clientX, p.clientY, o.value.getBoundingClientRect());
    }
    function f() {
      window.removeEventListener("mousemove", d),
        window.removeEventListener("mouseup", f),
        window.removeEventListener("touchmove", d),
        window.removeEventListener("touchend", f);
    }
    ce(r, () => {
      var k, S;
      var h, p;
      if (l.value) {
        l.value = !1;
        return;
      }
      if (!o.value) return;
      const { width: w, height: g } = o.value.getBoundingClientRect(),
        { x: _, y } = r.value;
      n("update:color", {
        h: (k = (h = e.color) == null ? void 0 : h.h) != null ? k : 0,
        s: Pt(_, 0, w) / w,
        v: 1 - Pt(y, 0, g) / g,
        a: (S = (p = e.color) == null ? void 0 : p.a) != null ? S : 1,
      });
    });
    function v() {
      var y;
      var h;
      if (!o.value) return;
      const p = o.value,
        w = p.getContext("2d");
      if (!w) return;
      const g = w.createLinearGradient(0, 0, p.width, 0);
      g.addColorStop(0, "hsla(0, 0%, 100%, 1)"),
        g.addColorStop(
          1,
          `hsla(${
            (y = (h = e.color) == null ? void 0 : h.h) != null ? y : 0
          }, 100%, 50%, 1)`
        ),
        (w.fillStyle = g),
        w.fillRect(0, 0, p.width, p.height);
      const _ = w.createLinearGradient(0, 0, 0, p.height);
      _.addColorStop(0, "hsla(0, 0%, 100%, 0)"),
        _.addColorStop(1, "hsla(0, 0%, 0%, 1)"),
        (w.fillStyle = _),
        w.fillRect(0, 0, p.width, p.height);
    }
    return (
      ce(
        () => {
          var h;
          return (h = e.color) == null ? void 0 : h.h;
        },
        v,
        { immediate: !0 }
      ),
      ce(
        () => e.color,
        () => {
          if (a.value) {
            a.value = !1;
            return;
          }
          !e.color ||
            ((l.value = !0),
            (r.value = {
              x: e.color.s * parseInt(e.width, 10),
              y: (1 - e.color.v) * parseInt(e.height, 10),
            }));
        },
        { deep: !0, immediate: !0 }
      ),
      _t(() => v()),
      X(() =>
        m(
          "div",
          {
            class: "v-color-picker-canvas",
            style: { width: ae(e.width), height: ae(e.height) },
            onClick: c,
            onMousedown: u,
            onTouchstart: u,
          },
          [
            m("canvas", { ref: o, width: e.width, height: e.height }, null),
            m(
              "div",
              {
                class: [
                  "v-color-picker-canvas__dot",
                  { "v-color-picker-canvas__dot--disabled": e.disabled },
                ],
                style: i.value,
              },
              null
            ),
          ]
        )
      ),
      {}
    );
  },
});
var Vf;
function ba(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Rg(e) {
  var n;
  if (!e) return null;
  let t = null;
  if (typeof e == "string") {
    const a = AC(e);
    t = oh(a);
  }
  return (
    typeof e == "object" &&
      (ba(e, ["r", "g", "b"])
        ? (t = Yu(e))
        : ba(e, ["h", "s", "l"])
        ? (t = ah(e))
        : ba(e, ["h", "s", "v"]) && (t = e)),
    t != null ? { ...t, a: (n = t.a) != null ? n : 1 } : null
  );
}
function o2(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function s2(e, t) {
  if (t == null || typeof t == "string") {
    const n = sh(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof t == "object") {
    let n;
    return (
      ba(t, ["r", "g", "b"])
        ? (n = vo(e))
        : ba(t, ["h", "s", "l"])
        ? (n = nh(e))
        : ba(t, ["h", "s", "v"]) && (n = e),
      o2(n, !ba(t, ["a"]))
    );
  }
  return e;
}
const pi = { h: 0, s: 0, v: 1, a: 1 },
  Ws = {
    inputProps: { type: "number", min: 0 },
    inputs: [
      {
        label: "R",
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.r),
        getColor: (e, t) => ({ ...e, r: Number(t) }),
      },
      {
        label: "G",
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.g),
        getColor: (e, t) => ({ ...e, g: Number(t) }),
      },
      {
        label: "B",
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.b),
        getColor: (e, t) => ({ ...e, b: Number(t) }),
      },
      {
        label: "A",
        max: 1,
        step: 0.01,
        getValue: (e) => {
          let { a: t } = e;
          return t ? Math.round(t * 100) / 100 : 1;
        },
        getColor: (e, t) => ({ ...e, a: Number(t) }),
      },
    ],
    to: vo,
    from: Yu,
  },
  u2 = { ...Ws, inputs: (Vf = Ws.inputs) == null ? void 0 : Vf.slice(0, 3) },
  Ys = {
    inputProps: { type: "number", min: 0 },
    inputs: [
      {
        label: "H",
        max: 360,
        step: 1,
        getValue: (e) => Math.round(e.h),
        getColor: (e, t) => ({ ...e, h: Number(t) }),
      },
      {
        label: "S",
        max: 1,
        step: 0.01,
        getValue: (e) => Math.round(e.s * 100) / 100,
        getColor: (e, t) => ({ ...e, s: Number(t) }),
      },
      {
        label: "L",
        max: 1,
        step: 0.01,
        getValue: (e) => Math.round(e.l * 100) / 100,
        getColor: (e, t) => ({ ...e, l: Number(t) }),
      },
      {
        label: "A",
        max: 1,
        step: 0.01,
        getValue: (e) => {
          let { a: t } = e;
          return t ? Math.round(t * 100) / 100 : 1;
        },
        getColor: (e, t) => ({ ...e, a: Number(t) }),
      },
    ],
    to: nh,
    from: ah,
  },
  c2 = { ...Ys, inputs: Ys.inputs.slice(0, 3) },
  Lg = {
    inputProps: { type: "text" },
    inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t }],
    to: sh,
    from: oh,
  },
  d2 = {
    ...Lg,
    inputs: [
      { label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t },
    ],
  },
  _a = { rgb: u2, rgba: Ws, hsl: c2, hsla: Ys, hex: d2, hexa: Lg },
  f2 = (e) => {
    let { label: t, ...n } = e;
    return m("div", { class: "v-color-picker-edit__input" }, [
      m("input", n, null),
      m("span", null, [t]),
    ]);
  },
  v2 = Z({
    name: "VColorPickerEdit",
    props: {
      color: Object,
      disabled: Boolean,
      mode: {
        type: String,
        default: "rgba",
        validator: (e) => Object.keys(_a).includes(e),
      },
      modes: {
        type: Array,
        default: () => Object.keys(_a),
        validator: (e) =>
          Array.isArray(e) && e.every((t) => Object.keys(_a).includes(t)),
      },
    },
    emits: { "update:color": (e) => !0, "update:mode": (e) => !0 },
    setup(e, t) {
      let { emit: n } = t;
      const a = b(() => e.modes.map((r) => ({ ..._a[r], name: r }))),
        l = b(() => {
          var r;
          const i = a.value.find((s) => s.name === e.mode);
          if (!i) return [];
          const o = e.color ? i.to(e.color) : {};
          return (r = i.inputs) == null
            ? void 0
            : r.map((s) => {
                let { getValue: c, getColor: u, ...d } = s;
                return {
                  ...i.inputProps,
                  ...d,
                  disabled: e.disabled,
                  value: c(o),
                  onChange: (f) => {
                    const v = f.target;
                    !v || n("update:color", i.from(u(o, v.value)));
                  },
                };
              });
        });
      return (
        X(() => {
          var r;
          return m("div", { class: "v-color-picker-edit" }, [
            (r = l.value) == null ? void 0 : r.map((i) => m(f2, i, null)),
            a.value.length > 1 &&
              m(
                St,
                {
                  icon: "$unfold",
                  size: "x-small",
                  variant: "plain",
                  onClick: () => {
                    const i = a.value.findIndex((o) => o.name === e.mode);
                    n("update:mode", a.value[(i + 1) % a.value.length].name);
                  },
                },
                null
              ),
          ]);
        }),
        {}
      );
    },
  });
const hc = Symbol.for("vuetify:v-slider");
function Gs(e, t, n) {
  const a = n === "vertical",
    l = t.getBoundingClientRect(),
    r = "touches" in e ? e.touches[0] : e;
  return a
    ? r.clientY - (l.top + l.height / 2)
    : r.clientX - (l.left + l.width / 2);
}
function m2(e, t) {
  return "touches" in e && e.touches.length
    ? e.touches[0][t]
    : "changedTouches" in e && e.changedTouches.length
    ? e.changedTouches[0][t]
    : e[t];
}
const Bg = ye(
    {
      disabled: Boolean,
      error: Boolean,
      readonly: Boolean,
      max: { type: [Number, String], default: 100 },
      min: { type: [Number, String], default: 0 },
      step: { type: [Number, String], default: 0 },
      thumbColor: String,
      thumbLabel: {
        type: [Boolean, String],
        default: void 0,
        validator: (e) => typeof e == "boolean" || e === "always",
      },
      thumbSize: { type: [Number, String], default: 20 },
      showTicks: {
        type: [Boolean, String],
        default: !1,
        validator: (e) => typeof e == "boolean" || e === "always",
      },
      ticks: { type: [Array, Object] },
      tickSize: { type: [Number, String], default: 2 },
      color: String,
      trackColor: String,
      trackFillColor: String,
      trackSize: { type: [Number, String], default: 4 },
      direction: {
        type: String,
        default: "horizontal",
        validator: (e) => ["vertical", "horizontal"].includes(e),
      },
      reverse: Boolean,
      ...Ye(),
      ...rt({ elevation: 2 }),
    },
    "slider"
  ),
  Ng = (e) => {
    let {
      props: t,
      handleSliderMouseUp: n,
      handleMouseMove: a,
      getActiveThumb: l,
    } = e;
    const { isRtl: r } = Mn(),
      i = b(() => r.value !== t.reverse),
      o = b(() => {
        let te = r.value ? "rtl" : "ltr";
        return t.reverse && (te = te === "rtl" ? "ltr" : "rtl"), te;
      }),
      s = b(() => parseFloat(t.min)),
      c = b(() => parseFloat(t.max)),
      u = b(() => (t.step > 0 ? parseFloat(t.step) : 0)),
      d = b(() => {
        const te = u.value.toString().trim();
        return te.includes(".") ? te.length - te.indexOf(".") - 1 : 0;
      }),
      f = b(() => parseInt(t.thumbSize, 10)),
      v = b(() => parseInt(t.tickSize, 10)),
      h = b(() => parseInt(t.trackSize, 10)),
      p = b(() => (c.value - s.value) / u.value),
      w = j(t, "disabled"),
      g = b(() => t.direction === "vertical"),
      _ = b(() => {
        var te;
        return t.error || t.disabled
          ? void 0
          : (te = t.thumbColor) != null
          ? te
          : t.color;
      }),
      y = b(() => {
        var te;
        return t.error || t.disabled
          ? void 0
          : (te = t.trackColor) != null
          ? te
          : t.color;
      }),
      k = b(() => {
        var te;
        return t.error || t.disabled
          ? void 0
          : (te = t.trackFillColor) != null
          ? te
          : t.color;
      }),
      S = B(!1),
      A = B(0),
      x = B(),
      C = B();
    function V(te) {
      if (u.value <= 0) return te;
      const N = Pt(te, s.value, c.value),
        W = s.value % u.value,
        q = Math.round((N - W) / u.value) * u.value + W;
      return parseFloat(Math.min(q, c.value).toFixed(d.value));
    }
    function $(te) {
      var N;
      const W = t.direction === "vertical",
        q = W ? "top" : "left",
        oe = W ? "height" : "width",
        Ie = W ? "clientY" : "clientX",
        { [q]: Te, [oe]: ke } =
          (N = x.value) == null ? void 0 : N.$el.getBoundingClientRect(),
        Se = m2(te, Ie);
      let E = Math.min(Math.max((Se - Te - A.value) / ke, 0), 1) || 0;
      return (
        (W || i.value) && (E = 1 - E), V(s.value + E * (c.value - s.value))
      );
    }
    let R = !1;
    const I = (te) => {
        R || ((A.value = 0), n($(te))), (S.value = !1), (R = !1), (A.value = 0);
      },
      L = (te) => {
        (C.value = l(te)),
          C.value &&
            (C.value.focus(),
            (S.value = !0),
            C.value.contains(te.target)
              ? ((R = !0), (A.value = Gs(te, C.value, t.direction)))
              : ((A.value = 0), a($(te))));
      },
      D = { passive: !0, capture: !0 };
    function Y(te) {
      (R = !0), a($(te));
    }
    function z(te) {
      te.stopPropagation(),
        te.preventDefault(),
        I(te),
        window.removeEventListener("mousemove", Y, D),
        window.removeEventListener("mouseup", z);
    }
    function T(te) {
      var N;
      I(te),
        window.removeEventListener("touchmove", Y, D),
        (N = te.target) == null || N.removeEventListener("touchend", T);
    }
    function F(te) {
      var N;
      L(te),
        window.addEventListener("touchmove", Y, D),
        (N = te.target) == null ||
          N.addEventListener("touchend", T, { passive: !1 });
    }
    function J(te) {
      te.preventDefault(),
        L(te),
        window.addEventListener("mousemove", Y, D),
        window.addEventListener("mouseup", z, { passive: !1 });
    }
    const K = (te) => {
        const N = ((te - s.value) / (c.value - s.value)) * 100;
        return Pt(isNaN(N) ? 0 : N, 0, 100);
      },
      le = b(() =>
        t.ticks
          ? Array.isArray(t.ticks)
            ? t.ticks.map((te) => ({
                value: te,
                position: K(te),
                label: te.toString(),
              }))
            : Object.keys(t.ticks).map((te) => ({
                value: parseFloat(te),
                position: K(parseFloat(te)),
                label: t.ticks[te],
              }))
          : p.value !== 1 / 0
          ? pa(p.value + 1).map((te) => {
              const N = s.value + te * u.value;
              return { value: N, position: K(N) };
            })
          : []
      ),
      ie = b(() =>
        le.value.some((te) => {
          let { label: N } = te;
          return !!N;
        })
      ),
      we = {
        activeThumbRef: C,
        color: j(t, "color"),
        decimals: d,
        disabled: w,
        direction: j(t, "direction"),
        elevation: j(t, "elevation"),
        hasLabels: ie,
        horizontalDirection: o,
        isReversed: i,
        min: s,
        max: c,
        mousePressed: S,
        numTicks: p,
        onSliderMousedown: J,
        onSliderTouchstart: F,
        parsedTicks: le,
        parseMouseMove: $,
        position: K,
        readonly: j(t, "readonly"),
        rounded: j(t, "rounded"),
        roundValue: V,
        showTicks: j(t, "showTicks"),
        startOffset: A,
        step: u,
        thumbSize: f,
        thumbColor: _,
        thumbLabel: j(t, "thumbLabel"),
        ticks: j(t, "ticks"),
        tickSize: v,
        trackColor: y,
        trackContainerRef: x,
        trackFillColor: k,
        trackSize: h,
        vertical: g,
      };
    return Qe(hc, we), we;
  },
  Ks = Z({
    name: "VSliderThumb",
    directives: { Ripple: la },
    props: {
      focused: Boolean,
      max: { type: Number, required: !0 },
      min: { type: Number, required: !0 },
      modelValue: { type: Number, required: !0 },
      position: { type: Number, required: !0 },
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n, emit: a } = t;
      const l = Oe(hc);
      if (!l)
        throw new Error(
          "[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider"
        );
      const {
          thumbColor: r,
          step: i,
          vertical: o,
          disabled: s,
          thumbSize: c,
          thumbLabel: u,
          direction: d,
          readonly: f,
          elevation: v,
          isReversed: h,
          horizontalDirection: p,
          mousePressed: w,
          decimals: g,
        } = l,
        { textColorClasses: _, textColorStyles: y } = kt(r),
        {
          pageup: k,
          pagedown: S,
          end: A,
          home: x,
          left: C,
          right: V,
          down: $,
          up: R,
        } = $s,
        I = [k, S, A, x, C, V, $, R],
        L = b(() => (i.value ? [1, 2, 3] : [1, 5, 10]));
      function D(z, T) {
        if (!I.includes(z.key)) return;
        z.preventDefault();
        const F = i.value || 0.1,
          J = (e.max - e.min) / F;
        if ([C, V, $, R].includes(z.key)) {
          const le = (h.value ? [C, R] : [V, R]).includes(z.key) ? 1 : -1,
            ie = z.shiftKey ? 2 : z.ctrlKey ? 1 : 0;
          T = T + le * F * L.value[ie];
        } else if (z.key === x) T = e.min;
        else if (z.key === A) T = e.max;
        else {
          const K = z.key === S ? 1 : -1;
          T = T - K * F * (J > 100 ? J / 10 : 10);
        }
        return Math.max(e.min, Math.min(e.max, T));
      }
      function Y(z) {
        const T = D(z, e.modelValue);
        T != null && a("update:modelValue", T);
      }
      return (
        X(() => {
          var z;
          const T = ae(o.value ? 100 - e.position : e.position, "%"),
            F = o.value ? "block" : "inline",
            { elevationClasses: J } = gt(b(() => (s.value ? void 0 : v.value)));
          return m(
            "div",
            {
              class: [
                "v-slider-thumb",
                {
                  "v-slider-thumb--focused": e.focused,
                  "v-slider-thumb--pressed": e.focused && w.value,
                },
              ],
              style: {
                [`inset-${F}-start`]: `calc(${T} - var(--v-slider-thumb-size) / 2)`,
                "--v-slider-thumb-size": ae(c.value),
                direction: o.value ? void 0 : p.value,
              },
              role: "slider",
              tabindex: s.value ? -1 : 0,
              "aria-valuemin": e.min,
              "aria-valuemax": e.max,
              "aria-valuenow": e.modelValue,
              "aria-readonly": f.value,
              "aria-orientation": d.value,
              onKeydown: f.value ? void 0 : Y,
            },
            [
              m(
                "div",
                {
                  class: ["v-slider-thumb__surface", _.value, J.value],
                  style: { ...y.value },
                },
                null
              ),
              Le(
                m(
                  "div",
                  {
                    class: ["v-slider-thumb__ripple", _.value],
                    style: y.value,
                  },
                  null
                ),
                [[Rt("ripple"), !0, null, { circle: !0, center: !0 }]]
              ),
              m(
                kh,
                { origin: "bottom center" },
                {
                  default: () => {
                    var K;
                    return [
                      Le(
                        m("div", { class: "v-slider-thumb__label-container" }, [
                          m("div", { class: ["v-slider-thumb__label"] }, [
                            m("div", null, [
                              (K =
                                (z = n["thumb-label"]) == null
                                  ? void 0
                                  : z.call(n, { modelValue: e.modelValue })) !=
                              null
                                ? K
                                : e.modelValue.toFixed(i.value ? g.value : 1),
                            ]),
                          ]),
                        ]),
                        [[_n, (u.value && e.focused) || u.value === "always"]]
                      ),
                    ];
                  },
                }
              ),
            ]
          );
        }),
        {}
      );
    },
  });
const Mg = Z({
    name: "VSliderTrack",
    props: {
      start: { type: Number, required: !0 },
      stop: { type: Number, required: !0 },
    },
    emits: {},
    setup(e, t) {
      let { slots: n } = t;
      const a = Oe(hc);
      if (!a)
        throw new Error(
          "[Vuetify] v-slider-track must be inside v-slider or v-range-slider"
        );
      const {
          color: l,
          horizontalDirection: r,
          parsedTicks: i,
          rounded: o,
          showTicks: s,
          tickSize: c,
          trackColor: u,
          trackFillColor: d,
          trackSize: f,
          vertical: v,
          min: h,
          max: p,
        } = a,
        { roundedClasses: w } = nt(o),
        { backgroundColorClasses: g, backgroundColorStyles: _ } = tt(d),
        { backgroundColorClasses: y, backgroundColorStyles: k } = tt(u),
        S = b(() => `inset-${v.value ? "block-end" : "inline-start"}`),
        A = b(() => (v.value ? "height" : "width")),
        x = b(() => ({ [S.value]: "0%", [A.value]: "100%" })),
        C = b(() => e.stop - e.start),
        V = b(() => ({
          [S.value]: ae(e.start, "%"),
          [A.value]: ae(C.value, "%"),
        })),
        $ = b(() =>
          (v.value ? i.value.slice().reverse() : i.value).map((I, L) => {
            var T;
            var D;
            const Y = v.value ? "bottom" : "margin-inline-start",
              z =
                I.value !== h.value && I.value !== p.value
                  ? ae(I.position, "%")
                  : void 0;
            return m(
              "div",
              {
                key: I.value,
                class: [
                  "v-slider-track__tick",
                  {
                    "v-slider-track__tick--filled":
                      I.position >= e.start && I.position <= e.stop,
                    "v-slider-track__tick--first": I.value === h.value,
                    "v-slider-track__tick--last": I.value === p.value,
                  },
                ],
                style: { [Y]: z },
              },
              [
                (I.label || n["tick-label"]) &&
                  m("div", { class: "v-slider-track__tick-label" }, [
                    (T =
                      (D = n["tick-label"]) == null
                        ? void 0
                        : D.call(n, { tick: I, index: L })) != null
                      ? T
                      : I.label,
                  ]),
              ]
            );
          })
        );
      return (
        X(() =>
          m(
            "div",
            {
              class: ["v-slider-track", w.value],
              style: {
                "--v-slider-track-size": ae(f.value),
                "--v-slider-tick-size": ae(c.value),
                direction: v.value ? void 0 : r.value,
              },
            },
            [
              m(
                "div",
                {
                  class: [
                    "v-slider-track__background",
                    y.value,
                    {
                      "v-slider-track__background--opacity":
                        !!l.value || !d.value,
                    },
                  ],
                  style: { ...x.value, ...k.value },
                },
                null
              ),
              m(
                "div",
                {
                  class: ["v-slider-track__fill", g.value],
                  style: { ...V.value, ..._.value },
                },
                null
              ),
              s.value &&
                m(
                  "div",
                  {
                    class: [
                      "v-slider-track__ticks",
                      {
                        "v-slider-track__ticks--always-show":
                          s.value === "always",
                      },
                    ],
                  },
                  [$.value]
                ),
            ]
          )
        ),
        {}
      );
    },
  }),
  qs = Z({
    name: "VSlider",
    props: {
      ...bo(),
      ...Bg(),
      ...zn(),
      modelValue: { type: [Number, String], default: 0 },
    },
    emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = B(),
        {
          min: l,
          max: r,
          mousePressed: i,
          roundValue: o,
          onSliderMousedown: s,
          onSliderTouchstart: c,
          trackContainerRef: u,
          position: d,
          hasLabels: f,
          readonly: v,
        } = Ng({
          props: e,
          handleSliderMouseUp: (y) => (h.value = o(y)),
          handleMouseMove: (y) => (h.value = o(y)),
          getActiveThumb: () => {
            var y;
            return (y = a.value) == null ? void 0 : y.$el;
          },
        }),
        h = pe(e, "modelValue", void 0, (y) => {
          const k =
            typeof y == "string" ? parseFloat(y) : y == null ? l.value : y;
          return o(k);
        }),
        { isFocused: p, focus: w, blur: g } = Ha(e),
        _ = b(() => d(h.value));
      return (
        X(() => {
          const [y, k] = ra(e),
            S = !!(e.label || n.label || n.prepend);
          return m(
            wn,
            ue(
              {
                class: [
                  "v-slider",
                  {
                    "v-slider--has-labels": !!n["tick-label"] || f.value,
                    "v-slider--focused": p.value,
                    "v-slider--pressed": i.value,
                    "v-slider--disabled": e.disabled,
                  },
                ],
              },
              y,
              { focused: p.value }
            ),
            {
              ...n,
              prepend: S
                ? (A) => {
                    var V;
                    var x, C;
                    return m(xe, null, [
                      (
                        (V = (x = n.label) == null ? void 0 : x.call(n, A)) !=
                        null
                          ? V
                          : e.label
                      )
                        ? m(
                            Il,
                            { class: "v-slider__label", text: e.label },
                            null
                          )
                        : void 0,
                      (C = n.prepend) == null ? void 0 : C.call(n, A),
                    ]);
                  }
                : void 0,
              default: (A) => {
                let { id: x } = A;
                return m(
                  "div",
                  {
                    class: "v-slider__container",
                    onMousedown: v.value ? void 0 : s,
                    onTouchstartPassive: v.value ? void 0 : c,
                  },
                  [
                    m(
                      "input",
                      {
                        id: x.value,
                        name: e.name || x.value,
                        disabled: e.disabled,
                        readonly: e.readonly,
                        tabindex: "-1",
                        value: h.value,
                      },
                      null
                    ),
                    m(
                      Mg,
                      { ref: u, start: 0, stop: _.value },
                      { "tick-label": n["tick-label"] }
                    ),
                    m(
                      Ks,
                      {
                        ref: a,
                        focused: p.value,
                        min: l.value,
                        max: r.value,
                        modelValue: h.value,
                        "onUpdate:modelValue": (C) => (h.value = C),
                        position: _.value,
                        elevation: e.elevation,
                        onFocus: w,
                        onBlur: g,
                      },
                      { "thumb-label": n["thumb-label"] }
                    ),
                  ]
                );
              },
            }
          );
        }),
        {}
      );
    },
  }),
  h2 = Z({
    name: "VColorPickerPreview",
    props: { color: { type: Object }, disabled: Boolean, hideAlpha: Boolean },
    emits: { "update:color": (e) => !0 },
    setup(e, t) {
      let { emit: n } = t;
      return (
        X(() => {
          var r;
          var a, l;
          return m(
            "div",
            {
              class: [
                "v-color-picker-preview",
                { "v-color-picker-preview--hide-alpha": e.hideAlpha },
              ],
            },
            [
              m("div", { class: "v-color-picker-preview__dot" }, [
                m(
                  "div",
                  { style: { background: lh((r = e.color) != null ? r : pi) } },
                  null
                ),
              ]),
              m("div", { class: "v-color-picker-preview__sliders" }, [
                m(
                  qs,
                  {
                    class:
                      "v-color-picker-preview__track v-color-picker-preview__hue",
                    modelValue: (a = e.color) == null ? void 0 : a.h,
                    "onUpdate:modelValue": (i) => {
                      var o;
                      return n("update:color", {
                        ...((o = e.color) != null ? o : pi),
                        h: i,
                      });
                    },
                    step: 0,
                    min: 0,
                    max: 360,
                    disabled: e.disabled,
                    thumbSize: 14,
                    trackSize: 8,
                    trackFillColor: "white",
                    hideDetails: !0,
                  },
                  null
                ),
                !e.hideAlpha &&
                  m(
                    qs,
                    {
                      class:
                        "v-color-picker-preview__track v-color-picker-preview__alpha",
                      modelValue: (l = e.color) == null ? void 0 : l.a,
                      "onUpdate:modelValue": (i) => {
                        var o;
                        return n("update:color", {
                          ...((o = e.color) != null ? o : pi),
                          a: i,
                        });
                      },
                      step: 0,
                      min: 0,
                      max: 1,
                      disabled: e.disabled,
                      thumbSize: 14,
                      trackSize: 8,
                      trackFillColor: "white",
                      hideDetails: !0,
                    },
                    null
                  ),
              ]),
            ]
          );
        }),
        {}
      );
    },
  });
const g2 = Object.freeze({
    base: "#f44336",
    lighten5: "#ffebee",
    lighten4: "#ffcdd2",
    lighten3: "#ef9a9a",
    lighten2: "#e57373",
    lighten1: "#ef5350",
    darken1: "#e53935",
    darken2: "#d32f2f",
    darken3: "#c62828",
    darken4: "#b71c1c",
    accent1: "#ff8a80",
    accent2: "#ff5252",
    accent3: "#ff1744",
    accent4: "#d50000",
  }),
  p2 = Object.freeze({
    base: "#e91e63",
    lighten5: "#fce4ec",
    lighten4: "#f8bbd0",
    lighten3: "#f48fb1",
    lighten2: "#f06292",
    lighten1: "#ec407a",
    darken1: "#d81b60",
    darken2: "#c2185b",
    darken3: "#ad1457",
    darken4: "#880e4f",
    accent1: "#ff80ab",
    accent2: "#ff4081",
    accent3: "#f50057",
    accent4: "#c51162",
  }),
  y2 = Object.freeze({
    base: "#9c27b0",
    lighten5: "#f3e5f5",
    lighten4: "#e1bee7",
    lighten3: "#ce93d8",
    lighten2: "#ba68c8",
    lighten1: "#ab47bc",
    darken1: "#8e24aa",
    darken2: "#7b1fa2",
    darken3: "#6a1b9a",
    darken4: "#4a148c",
    accent1: "#ea80fc",
    accent2: "#e040fb",
    accent3: "#d500f9",
    accent4: "#aa00ff",
  }),
  b2 = Object.freeze({
    base: "#673ab7",
    lighten5: "#ede7f6",
    lighten4: "#d1c4e9",
    lighten3: "#b39ddb",
    lighten2: "#9575cd",
    lighten1: "#7e57c2",
    darken1: "#5e35b1",
    darken2: "#512da8",
    darken3: "#4527a0",
    darken4: "#311b92",
    accent1: "#b388ff",
    accent2: "#7c4dff",
    accent3: "#651fff",
    accent4: "#6200ea",
  }),
  _2 = Object.freeze({
    base: "#3f51b5",
    lighten5: "#e8eaf6",
    lighten4: "#c5cae9",
    lighten3: "#9fa8da",
    lighten2: "#7986cb",
    lighten1: "#5c6bc0",
    darken1: "#3949ab",
    darken2: "#303f9f",
    darken3: "#283593",
    darken4: "#1a237e",
    accent1: "#8c9eff",
    accent2: "#536dfe",
    accent3: "#3d5afe",
    accent4: "#304ffe",
  }),
  x2 = Object.freeze({
    base: "#2196f3",
    lighten5: "#e3f2fd",
    lighten4: "#bbdefb",
    lighten3: "#90caf9",
    lighten2: "#64b5f6",
    lighten1: "#42a5f5",
    darken1: "#1e88e5",
    darken2: "#1976d2",
    darken3: "#1565c0",
    darken4: "#0d47a1",
    accent1: "#82b1ff",
    accent2: "#448aff",
    accent3: "#2979ff",
    accent4: "#2962ff",
  }),
  w2 = Object.freeze({
    base: "#03a9f4",
    lighten5: "#e1f5fe",
    lighten4: "#b3e5fc",
    lighten3: "#81d4fa",
    lighten2: "#4fc3f7",
    lighten1: "#29b6f6",
    darken1: "#039be5",
    darken2: "#0288d1",
    darken3: "#0277bd",
    darken4: "#01579b",
    accent1: "#80d8ff",
    accent2: "#40c4ff",
    accent3: "#00b0ff",
    accent4: "#0091ea",
  }),
  S2 = Object.freeze({
    base: "#00bcd4",
    lighten5: "#e0f7fa",
    lighten4: "#b2ebf2",
    lighten3: "#80deea",
    lighten2: "#4dd0e1",
    lighten1: "#26c6da",
    darken1: "#00acc1",
    darken2: "#0097a7",
    darken3: "#00838f",
    darken4: "#006064",
    accent1: "#84ffff",
    accent2: "#18ffff",
    accent3: "#00e5ff",
    accent4: "#00b8d4",
  }),
  C2 = Object.freeze({
    base: "#009688",
    lighten5: "#e0f2f1",
    lighten4: "#b2dfdb",
    lighten3: "#80cbc4",
    lighten2: "#4db6ac",
    lighten1: "#26a69a",
    darken1: "#00897b",
    darken2: "#00796b",
    darken3: "#00695c",
    darken4: "#004d40",
    accent1: "#a7ffeb",
    accent2: "#64ffda",
    accent3: "#1de9b6",
    accent4: "#00bfa5",
  }),
  k2 = Object.freeze({
    base: "#4caf50",
    lighten5: "#e8f5e9",
    lighten4: "#c8e6c9",
    lighten3: "#a5d6a7",
    lighten2: "#81c784",
    lighten1: "#66bb6a",
    darken1: "#43a047",
    darken2: "#388e3c",
    darken3: "#2e7d32",
    darken4: "#1b5e20",
    accent1: "#b9f6ca",
    accent2: "#69f0ae",
    accent3: "#00e676",
    accent4: "#00c853",
  }),
  A2 = Object.freeze({
    base: "#8bc34a",
    lighten5: "#f1f8e9",
    lighten4: "#dcedc8",
    lighten3: "#c5e1a5",
    lighten2: "#aed581",
    lighten1: "#9ccc65",
    darken1: "#7cb342",
    darken2: "#689f38",
    darken3: "#558b2f",
    darken4: "#33691e",
    accent1: "#ccff90",
    accent2: "#b2ff59",
    accent3: "#76ff03",
    accent4: "#64dd17",
  }),
  E2 = Object.freeze({
    base: "#cddc39",
    lighten5: "#f9fbe7",
    lighten4: "#f0f4c3",
    lighten3: "#e6ee9c",
    lighten2: "#dce775",
    lighten1: "#d4e157",
    darken1: "#c0ca33",
    darken2: "#afb42b",
    darken3: "#9e9d24",
    darken4: "#827717",
    accent1: "#f4ff81",
    accent2: "#eeff41",
    accent3: "#c6ff00",
    accent4: "#aeea00",
  }),
  V2 = Object.freeze({
    base: "#ffeb3b",
    lighten5: "#fffde7",
    lighten4: "#fff9c4",
    lighten3: "#fff59d",
    lighten2: "#fff176",
    lighten1: "#ffee58",
    darken1: "#fdd835",
    darken2: "#fbc02d",
    darken3: "#f9a825",
    darken4: "#f57f17",
    accent1: "#ffff8d",
    accent2: "#ffff00",
    accent3: "#ffea00",
    accent4: "#ffd600",
  }),
  $2 = Object.freeze({
    base: "#ffc107",
    lighten5: "#fff8e1",
    lighten4: "#ffecb3",
    lighten3: "#ffe082",
    lighten2: "#ffd54f",
    lighten1: "#ffca28",
    darken1: "#ffb300",
    darken2: "#ffa000",
    darken3: "#ff8f00",
    darken4: "#ff6f00",
    accent1: "#ffe57f",
    accent2: "#ffd740",
    accent3: "#ffc400",
    accent4: "#ffab00",
  }),
  I2 = Object.freeze({
    base: "#ff9800",
    lighten5: "#fff3e0",
    lighten4: "#ffe0b2",
    lighten3: "#ffcc80",
    lighten2: "#ffb74d",
    lighten1: "#ffa726",
    darken1: "#fb8c00",
    darken2: "#f57c00",
    darken3: "#ef6c00",
    darken4: "#e65100",
    accent1: "#ffd180",
    accent2: "#ffab40",
    accent3: "#ff9100",
    accent4: "#ff6d00",
  }),
  P2 = Object.freeze({
    base: "#ff5722",
    lighten5: "#fbe9e7",
    lighten4: "#ffccbc",
    lighten3: "#ffab91",
    lighten2: "#ff8a65",
    lighten1: "#ff7043",
    darken1: "#f4511e",
    darken2: "#e64a19",
    darken3: "#d84315",
    darken4: "#bf360c",
    accent1: "#ff9e80",
    accent2: "#ff6e40",
    accent3: "#ff3d00",
    accent4: "#dd2c00",
  }),
  O2 = Object.freeze({
    base: "#795548",
    lighten5: "#efebe9",
    lighten4: "#d7ccc8",
    lighten3: "#bcaaa4",
    lighten2: "#a1887f",
    lighten1: "#8d6e63",
    darken1: "#6d4c41",
    darken2: "#5d4037",
    darken3: "#4e342e",
    darken4: "#3e2723",
  }),
  T2 = Object.freeze({
    base: "#607d8b",
    lighten5: "#eceff1",
    lighten4: "#cfd8dc",
    lighten3: "#b0bec5",
    lighten2: "#90a4ae",
    lighten1: "#78909c",
    darken1: "#546e7a",
    darken2: "#455a64",
    darken3: "#37474f",
    darken4: "#263238",
  }),
  R2 = Object.freeze({
    base: "#9e9e9e",
    lighten5: "#fafafa",
    lighten4: "#f5f5f5",
    lighten3: "#eeeeee",
    lighten2: "#e0e0e0",
    lighten1: "#bdbdbd",
    darken1: "#757575",
    darken2: "#616161",
    darken3: "#424242",
    darken4: "#212121",
  }),
  L2 = Object.freeze({
    black: "#000000",
    white: "#ffffff",
    transparent: "#ffffff00",
  });
var B2 = Object.freeze({
  red: g2,
  pink: p2,
  purple: y2,
  deepPurple: b2,
  indigo: _2,
  blue: x2,
  lightBlue: w2,
  cyan: S2,
  teal: C2,
  green: k2,
  lightGreen: A2,
  lime: E2,
  yellow: V2,
  amber: $2,
  orange: I2,
  deepOrange: P2,
  brown: O2,
  blueGrey: T2,
  grey: R2,
  shades: L2,
});
function N2(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base
      ? [
          n.base,
          n.darken4,
          n.darken3,
          n.darken2,
          n.darken1,
          n.lighten1,
          n.lighten2,
          n.lighten3,
          n.lighten4,
          n.lighten5,
        ]
      : [n.black, n.white, n.transparent];
  });
}
const M2 = Z({
  name: "VColorPickerSwatches",
  props: {
    swatches: { type: Array, default: () => N2(B2) },
    disabled: Boolean,
    color: Object,
    maxHeight: [Number, String],
  },
  emits: { "update:color": (e) => !0 },
  setup(e, t) {
    let { emit: n } = t;
    return (
      X(() =>
        m(
          "div",
          {
            class: "v-color-picker-swatches",
            style: { maxHeight: ae(e.maxHeight) },
          },
          [
            m("div", null, [
              e.swatches.map((a) =>
                m("div", { class: "v-color-picker-swatches__swatch" }, [
                  a.map((l) => {
                    const r = Rg(l);
                    return m(
                      "div",
                      {
                        class: "v-color-picker-swatches__color",
                        onClick: () => r && n("update:color", r),
                      },
                      [
                        m("div", { style: { background: l } }, [
                          e.color && Pr(e.color, r)
                            ? m(
                                at,
                                {
                                  size: "x-small",
                                  icon: "$success",
                                  color:
                                    $C(l, "#FFFFFF") > 2 ? "white" : "black",
                                },
                                null
                              )
                            : void 0,
                        ]),
                      ]
                    );
                  }),
                ])
              ),
            ]),
          ]
        )
      ),
      {}
    );
  },
});
const Fg = Z({
    name: "VSheet",
    props: {
      color: String,
      ...Nt(),
      ...sn(),
      ...rt(),
      ...za(),
      ...El(),
      ...Ye(),
      ...be(),
      ...$e(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Be(e),
        { backgroundColorClasses: l, backgroundColorStyles: r } = tt(
          j(e, "color")
        ),
        { borderClasses: i } = Kt(e),
        { dimensionStyles: o } = un(e),
        { elevationClasses: s } = gt(e),
        { locationStyles: c } = ja(e),
        { positionClasses: u } = Vl(e),
        { roundedClasses: d } = nt(e);
      return () =>
        m(
          e.tag,
          {
            class: [
              "v-sheet",
              a.value,
              l.value,
              i.value,
              s.value,
              u.value,
              d.value,
            ],
            style: [r.value, o.value, c.value],
          },
          n
        );
    },
  }),
  F2 = Z({
    name: "VColorPicker",
    inheritAttrs: !1,
    props: {
      canvasHeight: { type: [String, Number], default: 150 },
      disabled: Boolean,
      dotSize: { type: [Number, String], default: 10 },
      hideCanvas: Boolean,
      hideSliders: Boolean,
      hideInputs: Boolean,
      mode: {
        type: String,
        default: "rgba",
        validator: (e) => Object.keys(_a).includes(e),
      },
      modes: {
        type: Array,
        default: () => Object.keys(_a),
        validator: (e) =>
          Array.isArray(e) && e.every((t) => Object.keys(_a).includes(t)),
      },
      showSwatches: Boolean,
      swatches: Array,
      swatchesMaxHeight: { type: [Number, String], default: 150 },
      modelValue: { type: [Object, String] },
      width: { type: [Number, String], default: 300 },
      ...rt(),
      ...Ye(),
      ...$e(),
    },
    emits: { "update:modelValue": (e) => !0, "update:mode": (e) => !0 },
    setup(e) {
      const t = pe(e, "mode"),
        n = B(null),
        a = pe(
          e,
          "modelValue",
          void 0,
          (r) => {
            let i = Rg(r);
            return i
              ? (n.value && ((i = { ...i, h: n.value.h }), (n.value = null)), i)
              : null;
          },
          (r) => (r ? s2(r, e.modelValue) : null)
        ),
        l = (r) => {
          (a.value = r), (n.value = r);
        };
      return (
        _t(() => {
          e.modes.includes(t.value) || (t.value = e.modes[0]);
        }),
        X(() => {
          var r;
          return m(
            Fg,
            {
              rounded: e.rounded,
              elevation: e.elevation,
              theme: e.theme,
              class: ["v-color-picker"],
              style: {
                "--v-color-picker-color-hsv": lh({
                  ...((r = a.value) != null ? r : pi),
                  a: 1,
                }),
              },
              maxWidth: e.width,
            },
            {
              default: () => [
                !e.hideCanvas &&
                  m(
                    i2,
                    {
                      key: "canvas",
                      color: a.value,
                      "onUpdate:color": l,
                      disabled: e.disabled,
                      dotSize: e.dotSize,
                      width: e.width,
                      height: e.canvasHeight,
                    },
                    null
                  ),
                (!e.hideSliders || !e.hideInputs) &&
                  m(
                    "div",
                    { key: "controls", class: "v-color-picker__controls" },
                    [
                      !e.hideSliders &&
                        m(
                          h2,
                          {
                            key: "preview",
                            color: a.value,
                            "onUpdate:color": l,
                            hideAlpha: !t.value.endsWith("a"),
                            disabled: e.disabled,
                          },
                          null
                        ),
                      !e.hideInputs &&
                        m(
                          v2,
                          {
                            key: "edit",
                            modes: e.modes,
                            mode: t.value,
                            "onUpdate:mode": (i) => (t.value = i),
                            color: a.value,
                            "onUpdate:color": l,
                            disabled: e.disabled,
                          },
                          null
                        ),
                    ]
                  ),
                e.showSwatches &&
                  m(
                    M2,
                    {
                      key: "swatches",
                      color: a.value,
                      "onUpdate:color": l,
                      maxHeight: e.swatchesMaxHeight,
                      swatches: e.swatches,
                      disabled: e.disabled,
                    },
                    null
                  ),
              ],
            }
          );
        }),
        {}
      );
    },
  });
function D2(e, t, n) {
  if (Array.isArray(t)) throw new Error("Multiple matches is not implemented");
  return typeof t == "number" && ~t
    ? m(xe, null, [
        m("span", { class: "v-combobox__unmask" }, [e.substr(0, t)]),
        m("span", { class: "v-combobox__mask" }, [e.substr(t, n)]),
        m("span", { class: "v-combobox__unmask" }, [e.substr(t + n)]),
      ])
    : e;
}
const z2 = je()({
  name: "VCombobox",
  props: {
    delimiters: Array,
    ...bg({ filterKeys: ["title"] }),
    ...fc({ hideNoData: !0, returnObject: !0 }),
    ...La(wo({ modelValue: null }), [
      "validationValue",
      "dirty",
      "appendInnerIcon",
    ]),
    ...Fn({ transition: !1 }),
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0,
  },
  setup(e, t) {
    var z;
    var n;
    let { emit: a, slots: l } = t;
    const { t: r } = on(),
      i = B(),
      o = B(!1),
      s = B(!0),
      c = pe(e, "menu"),
      u = B(-1),
      d = b(() => {
        var T;
        return (T = i.value) == null ? void 0 : T.color;
      }),
      { items: f, transformIn: v, transformOut: h } = cc(e),
      { textColorClasses: p, textColorStyles: w } = kt(d),
      g = pe(
        e,
        "modelValue",
        [],
        (T) => v(Ut(T || [])),
        (T) => {
          var J;
          const F = h(T);
          return e.multiple ? F : (J = F[0]) != null ? J : null;
        }
      ),
      _ = B(
        e.multiple
          ? ""
          : (z = (n = g.value[0]) == null ? void 0 : n.title) != null
          ? z
          : ""
      ),
      y = b({
        get: () => _.value,
        set: (T) => {
          var F;
          if (
            ((_.value = T),
            e.multiple || (g.value = [tl(e, T)]),
            T && e.multiple && (F = e.delimiters) != null && F.length)
          ) {
            const J = T.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
            J.length > 1 &&
              (J.forEach((K) => {
                (K = K.trim()), K && L(tl(e, K));
              }),
              (_.value = ""));
          }
          T || (u.value = -1), o.value && (c.value = !0), (s.value = !T);
        },
      });
    ce(_, (T) => {
      a("update:search", T);
    }),
      ce(g, (T) => {
        var J;
        if (!e.multiple) {
          var F;
          _.value =
            (J = (F = T[0]) == null ? void 0 : F.title) != null ? J : "";
        }
      });
    const { filteredItems: k } = _g(
        e,
        f,
        b(() => (s.value ? void 0 : y.value))
      ),
      S = b(() =>
        g.value.map((T) => f.value.find((F) => F.value === T.value) || T)
      ),
      A = b(() => S.value.map((T) => T.props.value)),
      x = b(() => S.value[u.value]),
      C = B();
    function V(T) {
      (g.value = []), e.openOnClear && (c.value = !0);
    }
    function $() {
      (e.hideNoData && !f.value.length) || e.readonly || (c.value = !0);
    }
    function R(T) {
      if (e.readonly) return;
      const F = i.value.selectionStart,
        J = A.value.length;
      if (
        (u.value > -1 && T.preventDefault(),
        ["Enter", "ArrowDown"].includes(T.key) && (c.value = !0),
        ["Escape"].includes(T.key) && (c.value = !1),
        ["Enter", "Escape", "Tab"].includes(T.key) && (s.value = !0),
        T.key === "ArrowDown")
      ) {
        var K;
        T.preventDefault(), (K = C.value) == null || K.focus("next");
      } else if (T.key === "ArrowUp") {
        var le;
        T.preventDefault(), (le = C.value) == null || le.focus("prev");
      }
      if (e.multiple) {
        if (["Backspace", "Delete"].includes(T.key)) {
          if (u.value < 0) {
            T.key === "Backspace" && !y.value && (u.value = J - 1);
            return;
          }
          L(x.value), Ke(() => !x.value && (u.value = J - 2));
        }
        if (T.key === "ArrowLeft") {
          if (u.value < 0 && F > 0) return;
          const ie = u.value > -1 ? u.value - 1 : J - 1;
          S.value[ie]
            ? (u.value = ie)
            : ((u.value = -1),
              i.value.setSelectionRange(y.value.length, y.value.length));
        }
        if (T.key === "ArrowRight") {
          if (u.value < 0) return;
          const ie = u.value + 1;
          S.value[ie]
            ? (u.value = ie)
            : ((u.value = -1), i.value.setSelectionRange(0, 0));
        }
        T.key === "Enter" && (L(tl(e, y.value)), (y.value = ""));
      }
    }
    function I() {
      o.value && (s.value = !0);
    }
    function L(T) {
      if (e.multiple) {
        const F = A.value.findIndex((J) => J === T.value);
        if (F === -1) g.value = [...g.value, T];
        else {
          const J = [...g.value];
          J.splice(F, 1), (g.value = J);
        }
        y.value = "";
      } else
        (g.value = [T]),
          (_.value = T.title),
          Ke(() => {
            (c.value = !1), (s.value = !0);
          });
    }
    function D(T) {
      o.value = !0;
    }
    function Y(T) {
      if (T.relatedTarget == null) {
        var F;
        (F = i.value) == null || F.focus();
      }
    }
    return (
      ce(k, (T) => {
        !T.length && e.hideNoData && (c.value = !1);
      }),
      ce(o, (T) => {
        if (T) u.value = -1;
        else {
          if (((c.value = !1), !e.multiple || !y.value)) return;
          (g.value = [...g.value, tl(e, y.value)]), (y.value = "");
        }
      }),
      X(() => {
        const T = !!(e.chips || l.chip),
          [F] = ic(e);
        return m(
          Lr,
          ue({ ref: i }, F, {
            modelValue: y.value,
            "onUpdate:modelValue": [
              (J) => (y.value = J),
              (J) => {
                J == null && (g.value = []);
              },
            ],
            validationValue: g.externalValue,
            dirty: g.value.length > 0,
            class: [
              "v-combobox",
              {
                "v-combobox--active-menu": c.value,
                "v-combobox--chips": !!e.chips,
                "v-combobox--selecting-index": u.value > -1,
                [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0,
              },
            ],
            appendInnerIcon: e.items.length ? e.menuIcon : void 0,
            readonly: e.readonly,
            "onClick:clear": V,
            "onClick:control": $,
            "onClick:input": $,
            onFocus: () => (o.value = !0),
            onBlur: () => (o.value = !1),
            onKeydown: R,
          }),
          {
            ...l,
            default: () => {
              var J, K, le;
              return m(xe, null, [
                m(
                  Vo,
                  ue(
                    {
                      modelValue: c.value,
                      "onUpdate:modelValue": (ie) => (c.value = ie),
                      activator: "parent",
                      contentClass: "v-combobox__content",
                      eager: e.eager,
                      openOnClick: !1,
                      closeOnContentClick: !1,
                      transition: e.transition,
                      onAfterLeave: I,
                    },
                    e.menuProps
                  ),
                  {
                    default: () => [
                      m(
                        Co,
                        {
                          ref: C,
                          selected: A.value,
                          selectStrategy: e.multiple
                            ? "independent"
                            : "single-independent",
                          onMousedown: (ie) => ie.preventDefault(),
                          onFocusin: D,
                          onFocusout: Y,
                        },
                        {
                          default: () => {
                            var ie;
                            return [
                              !k.value.length &&
                                !e.hideNoData &&
                                ((ie =
                                  (J = l["no-data"]) == null
                                    ? void 0
                                    : J.call(l)) != null
                                  ? ie
                                  : m(Pn, { title: r(e.noDataText) }, null)),
                              (K = l["prepend-item"]) == null
                                ? void 0
                                : K.call(l),
                              k.value.map((we, te) => {
                                var oe;
                                var N;
                                let { item: W, matches: q } = we;
                                return (oe =
                                  (N = l.item) == null
                                    ? void 0
                                    : N.call(l, {
                                        item: W,
                                        index: te,
                                        props: ue(W.props, {
                                          onClick: () => L(W),
                                        }),
                                      })) != null
                                  ? oe
                                  : m(
                                      Pn,
                                      ue({ key: te }, W.props, {
                                        onClick: () => L(W),
                                      }),
                                      {
                                        prepend: (Ie) => {
                                          let { isSelected: Te } = Ie;
                                          return e.multiple && !e.hideSelected
                                            ? m(
                                                Pl,
                                                { modelValue: Te, ripple: !1 },
                                                null
                                              )
                                            : void 0;
                                        },
                                        title: () => {
                                          var Te;
                                          var Ie;
                                          return s.value
                                            ? W.title
                                            : D2(
                                                W.title,
                                                q.title,
                                                (Te =
                                                  (Ie = y.value) == null
                                                    ? void 0
                                                    : Ie.length) != null
                                                  ? Te
                                                  : 0
                                              );
                                        },
                                      }
                                    );
                              }),
                              (le = l["append-item"]) == null
                                ? void 0
                                : le.call(l),
                            ];
                          },
                        }
                      ),
                    ],
                  }
                ),
                S.value.map((ie, we) => {
                  function te(W) {
                    W.stopPropagation(), W.preventDefault(), L(ie);
                  }
                  const N = {
                    "onClick:close": te,
                    modelValue: !0,
                    "onUpdate:modelValue": void 0,
                  };
                  return m(
                    "div",
                    {
                      key: ie.value,
                      class: [
                        "v-combobox__selection",
                        we === u.value && [
                          "v-combobox__selection--selected",
                          p.value,
                        ],
                      ],
                      style: we === u.value ? w.value : {},
                    },
                    [
                      T
                        ? m(
                            Ne,
                            {
                              defaults: {
                                VChip: {
                                  closable: e.closableChips,
                                  size: "small",
                                  text: ie.title,
                                },
                              },
                            },
                            {
                              default: () => [
                                l.chip
                                  ? l.chip({ item: ie, index: we, props: N })
                                  : m(Nr, N, null),
                              ],
                            }
                          )
                        : l.selection
                        ? l.selection({ item: ie, index: we })
                        : m("span", { class: "v-combobox__selection-text" }, [
                            ie.title,
                            e.multiple &&
                              we < S.value.length - 1 &&
                              m(
                                "span",
                                { class: "v-combobox__selection-comma" },
                                [Je(",")]
                              ),
                          ]),
                    ]
                  );
                }),
              ]);
            },
          }
        );
      }),
      cn(
        {
          isFocused: o,
          isPristine: s,
          menu: c,
          search: y,
          selectionIndex: u,
          filteredItems: k,
          select: L,
        },
        i
      )
    );
  },
});
const j2 = je()({
  name: "VDialog",
  props: {
    fullscreen: Boolean,
    retainFocus: { type: Boolean, default: !0 },
    scrollable: Boolean,
    ...Mr({
      origin: "center center",
      scrollStrategy: "block",
      transition: { component: go },
      zIndex: 2400,
    }),
  },
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const a = pe(e, "modelValue"),
      { scopeId: l } = Eo(),
      r = B();
    function i(o) {
      var s, c;
      const u = o.relatedTarget,
        d = o.target;
      if (
        u !== d &&
        (s = r.value) != null &&
        s.contentEl &&
        (c = r.value) != null &&
        c.globalTop &&
        ![document, r.value.contentEl].includes(d) &&
        !r.value.contentEl.contains(d)
      ) {
        const f = [
          ...r.value.contentEl.querySelectorAll(
            'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
          ),
        ].filter(
          (p) => !p.hasAttribute("disabled") && !p.matches('[tabindex="-1"]')
        );
        if (!f.length) return;
        const v = f[0],
          h = f[f.length - 1];
        u === v ? h.focus() : v.focus();
      }
    }
    return (
      Xe &&
        ce(
          () => a.value && e.retainFocus,
          (o) => {
            o
              ? document.addEventListener("focusin", i)
              : document.removeEventListener("focusin", i);
          },
          { immediate: !0 }
        ),
      ce(a, async (o) => {
        if ((await Ke(), o)) {
          var s;
          (s = r.value.contentEl) == null || s.focus({ preventScroll: !0 });
        } else {
          var c;
          (c = r.value.activatorEl) == null || c.focus({ preventScroll: !0 });
        }
      }),
      X(() => {
        const [o] = Ao(e);
        return m(
          Ol,
          ue(
            {
              ref: r,
              class: [
                "v-dialog",
                {
                  "v-dialog--fullscreen": e.fullscreen,
                  "v-dialog--scrollable": e.scrollable,
                },
              ],
            },
            o,
            {
              modelValue: a.value,
              "onUpdate:modelValue": (s) => (a.value = s),
              "aria-role": "dialog",
              "aria-modal": "true",
              activatorProps: ue(
                { "aria-haspopup": "dialog", "aria-expanded": String(a.value) },
                e.activatorProps
              ),
            },
            l
          ),
          {
            activator: n.activator,
            default: function () {
              for (
                var s, c = arguments.length, u = new Array(c), d = 0;
                d < c;
                d++
              )
                u[d] = arguments[d];
              return m(
                Ne,
                { root: !0 },
                {
                  default: () => [
                    (s = n.default) == null ? void 0 : s.call(n, ...u),
                  ],
                }
              );
            },
          }
        );
      }),
      cn({}, r)
    );
  },
});
const wr = Symbol.for("vuetify:v-expansion-panel"),
  H2 = ["default", "accordion", "inset", "popout"],
  U2 = Z({
    name: "VExpansionPanels",
    props: {
      color: String,
      variant: {
        type: String,
        default: "default",
        validator: (e) => H2.includes(e),
      },
      readonly: Boolean,
      ...Cl(),
      ...be(),
      ...$e(),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      Da(e, wr);
      const { themeClasses: a } = Be(e),
        l = b(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
      return (
        it({
          VExpansionPanel: { color: j(e, "color") },
          VExpansionPanelTitle: { readonly: j(e, "readonly") },
        }),
        X(() =>
          m(e.tag, { class: ["v-expansion-panels", a.value, l.value] }, n)
        ),
        {}
      );
    },
  }),
  Dg = ye(
    {
      color: String,
      expandIcon: { type: ge, default: "$expand" },
      collapseIcon: { type: ge, default: "$collapse" },
      hideActions: Boolean,
      ripple: { type: [Boolean, Object], default: !1 },
      readonly: Boolean,
    },
    "v-expansion-panel-title"
  ),
  zg = Z({
    name: "VExpansionPanelTitle",
    directives: { Ripple: la },
    props: { ...Dg() },
    setup(e, t) {
      let { slots: n } = t;
      const a = Oe(wr);
      if (!a)
        throw new Error(
          "[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel"
        );
      const { backgroundColorClasses: l, backgroundColorStyles: r } = tt(
          e,
          "color"
        ),
        i = b(() => ({
          collapseIcon: e.collapseIcon,
          disabled: a.disabled.value,
          expanded: a.isSelected.value,
          expandIcon: e.expandIcon,
          readonly: e.readonly,
        }));
      return (
        X(() => {
          var o;
          return Le(
            m(
              "button",
              {
                class: [
                  "v-expansion-panel-title",
                  { "v-expansion-panel-title--active": a.isSelected.value },
                  l.value,
                ],
                style: r.value,
                type: "button",
                tabindex: a.disabled.value ? -1 : void 0,
                disabled: a.disabled.value,
                "aria-expanded": a.isSelected.value,
                onClick: e.readonly ? void 0 : a.toggle,
              },
              [
                m("span", { class: "v-expansion-panel-title__overlay" }, null),
                (o = n.default) == null ? void 0 : o.call(n, i.value),
                !e.hideActions &&
                  m("span", { class: "v-expansion-panel-title__icon" }, [
                    n.actions
                      ? n.actions(i.value)
                      : m(
                          at,
                          {
                            icon: a.isSelected.value
                              ? e.collapseIcon
                              : e.expandIcon,
                          },
                          null
                        ),
                  ]),
              ]
            ),
            [[Rt("ripple"), e.ripple]]
          );
        }),
        {}
      );
    },
  }),
  jg = Z({
    name: "VExpansionPanelText",
    props: { ...ko() },
    setup(e, t) {
      let { slots: n } = t;
      const a = Oe(wr);
      if (!a)
        throw new Error(
          "[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel"
        );
      const { hasContent: l, onAfterLeave: r } = dc(e, a.isSelected);
      return (
        X(() => {
          var i;
          return m(
            po,
            { onAfterLeave: r },
            {
              default: () => [
                Le(
                  m("div", { class: "v-expansion-panel-text" }, [
                    n.default &&
                      l.value &&
                      m("div", { class: "v-expansion-panel-text__wrapper" }, [
                        (i = n.default) == null ? void 0 : i.call(n),
                      ]),
                  ]),
                  [[_n, a.isSelected.value]]
                ),
              ],
            }
          );
        }),
        {}
      );
    },
  }),
  W2 = Z({
    name: "VExpansionPanel",
    props: {
      title: String,
      text: String,
      bgColor: String,
      ...rt(),
      ...Fa(),
      ...ko(),
      ...Ye(),
      ...be(),
      ...Dg(),
    },
    emits: { "group:selected": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = kl(e, wr),
        { backgroundColorClasses: l, backgroundColorStyles: r } = tt(
          e,
          "bgColor"
        ),
        { elevationClasses: i } = gt(e),
        { roundedClasses: o } = nt(e),
        s = b(() => (a == null ? void 0 : a.disabled.value) || e.disabled),
        c = b(() =>
          a.group.items.value.reduce(
            (f, v, h) => (
              a.group.selected.value.includes(v.id) && f.push(h), f
            ),
            []
          )
        ),
        u = b(() => {
          const f = a.group.items.value.findIndex((v) => v.id === a.id);
          return !a.isSelected.value && c.value.some((v) => v - f === 1);
        }),
        d = b(() => {
          const f = a.group.items.value.findIndex((v) => v.id === a.id);
          return !a.isSelected.value && c.value.some((v) => v - f === -1);
        });
      return (
        Qe(wr, a),
        X(() => {
          var f;
          const v = !!(n.text || e.text),
            h = !!(n.title || e.title);
          return m(
            e.tag,
            {
              class: [
                "v-expansion-panel",
                {
                  "v-expansion-panel--active": a.isSelected.value,
                  "v-expansion-panel--before-active": u.value,
                  "v-expansion-panel--after-active": d.value,
                  "v-expansion-panel--disabled": s.value,
                },
                o.value,
                l.value,
              ],
              style: r.value,
              "aria-expanded": a.isSelected.value,
            },
            {
              default: () => [
                m(
                  "div",
                  { class: ["v-expansion-panel__shadow", ...i.value] },
                  null
                ),
                h &&
                  m(
                    zg,
                    {
                      key: "title",
                      collapseIcon: e.collapseIcon,
                      color: e.color,
                      expandIcon: e.expandIcon,
                      hideActions: e.hideActions,
                      ripple: e.ripple,
                    },
                    { default: () => [n.title ? n.title() : e.title] }
                  ),
                v &&
                  m(
                    jg,
                    { key: "text", eager: e.eager },
                    { default: () => [n.text ? n.text() : e.text] }
                  ),
                (f = n.default) == null ? void 0 : f.call(n),
              ],
            }
          );
        }),
        {}
      );
    },
  });
const Y2 = Z({
  name: "VFileInput",
  inheritAttrs: !1,
  props: {
    chips: Boolean,
    counter: Boolean,
    counterSizeString: {
      type: String,
      default: "$vuetify.fileInput.counterSize",
    },
    counterString: { type: String, default: "$vuetify.fileInput.counter" },
    multiple: Boolean,
    hint: String,
    persistentHint: Boolean,
    placeholder: String,
    showSize: {
      type: [Boolean, Number],
      default: !1,
      validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(e),
    },
    ...zn({ prependIcon: "$file" }),
    modelValue: {
      type: Array,
      default: () => [],
      validator: (e) => Ut(e).every((t) => t != null && typeof t == "object"),
    },
    ..._o({ clearable: !0 }),
  },
  emits: { "click:control": (e) => !0, "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { attrs: n, emit: a, slots: l } = t;
    const { t: r } = on(),
      i = pe(e, "modelValue"),
      o = b(() => (typeof e.showSize != "boolean" ? e.showSize : void 0)),
      s = b(() => {
        var S;
        return ((S = i.value) != null ? S : []).reduce((A, x) => {
          let { size: C = 0 } = x;
          return A + C;
        }, 0);
      }),
      c = b(() => Xd(s.value, o.value)),
      u = b(() => {
        var S;
        return ((S = i.value) != null ? S : []).map((A) => {
          const { name: x = "", size: C = 0 } = A;
          return e.showSize ? `${x} (${Xd(C, o.value)})` : x;
        });
      }),
      d = b(() => {
        var x;
        var S;
        const A =
          (x = (S = i.value) == null ? void 0 : S.length) != null ? x : 0;
        return e.showSize
          ? r(e.counterSizeString, A, c.value)
          : r(e.counterString, A);
      }),
      f = B(),
      v = B(),
      h = B(!1),
      p = B(),
      w = b(() =>
        e.messages.length ? e.messages : e.persistentHint ? e.hint : ""
      );
    function g() {
      if (p.value !== document.activeElement) {
        var S;
        (S = p.value) == null || S.focus();
      }
      h.value || (h.value = !0);
    }
    function _(S) {
      Ii(e["onClick:prepend"], S), y(S);
    }
    function y(S) {
      var A;
      (A = p.value) == null || A.click(), a("click:control", S);
    }
    function k(S) {
      S.stopPropagation(),
        g(),
        Ke(() => {
          (i.value = []),
            p != null && p.value && (p.value.value = ""),
            Ii(e["onClick:clear"], S);
        });
    }
    return (
      X(() => {
        const S = !!(l.counter || e.counter),
          A = !!(S || l.details),
          [x, C] = Ba(n),
          [{ modelValue: V, ...$ }] = ra(e),
          [R] = rc(e);
        return m(
          wn,
          ue(
            {
              ref: f,
              modelValue: i.value,
              "onUpdate:modelValue": (I) => (i.value = I),
              class: "v-file-input",
              "onClick:prepend": _,
              "onClick:append": e["onClick:append"],
            },
            x,
            $,
            { focused: h.value, messages: w.value }
          ),
          {
            ...l,
            default: (I) => {
              let { isDisabled: L, isDirty: D, isReadonly: Y, isValid: z } = I;
              return m(
                Rr,
                ue(
                  {
                    ref: v,
                    "prepend-icon": e.prependIcon,
                    "onClick:control": y,
                    "onClick:clear": k,
                    "onClick:prependInner": e["onClick:prependInner"],
                    "onClick:appendInner": e["onClick:appendInner"],
                  },
                  R,
                  {
                    active: D.value || h.value,
                    dirty: D.value,
                    focused: h.value,
                    error: z.value === !1,
                  }
                ),
                {
                  ...l,
                  default: (T) => {
                    let {
                      props: { class: F, ...J },
                    } = T;
                    return m(xe, null, [
                      m(
                        "input",
                        ue(
                          {
                            ref: p,
                            type: "file",
                            readonly: Y.value,
                            disabled: L.value,
                            multiple: e.multiple,
                            name: e.name,
                            onClick: (K) => {
                              K.stopPropagation(), g();
                            },
                            onChange: (K) => {
                              var ie;
                              if (!K.target) return;
                              const le = K.target;
                              i.value = [
                                ...((ie = le.files) != null ? ie : []),
                              ];
                            },
                            onFocus: g,
                            onBlur: () => (h.value = !1),
                          },
                          J,
                          C
                        ),
                        null
                      ),
                      m("div", { class: F }, [
                        i.value.length > 0 &&
                          (l.selection
                            ? l.selection({
                                fileNames: u.value,
                                totalBytes: s.value,
                                totalBytesReadable: c.value,
                              })
                            : e.chips
                            ? u.value.map((K) =>
                                m(
                                  Nr,
                                  { key: K, size: "small", color: e.color },
                                  { default: () => [K] }
                                )
                              )
                            : u.value.join(", ")),
                      ]),
                    ]);
                  },
                }
              );
            },
            details: A
              ? (I) => {
                  var L;
                  return m(xe, null, [
                    (L = l.details) == null ? void 0 : L.call(l, I),
                    S &&
                      m(xe, null, [
                        m("span", null, null),
                        m(
                          xo,
                          { active: !!i.value.length, value: d.value },
                          l.counter
                        ),
                      ]),
                  ]);
                }
              : void 0,
          }
        );
      }),
      cn({}, f, v, p)
    );
  },
});
const G2 = Z({
    name: "VFooter",
    props: {
      app: Boolean,
      color: String,
      height: { type: [Number, String], default: "auto" },
      ...Nt(),
      ...rt(),
      ...xl(),
      ...Ye(),
      ...be({ tag: "footer" }),
      ...$e(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Be(e),
        { backgroundColorClasses: l, backgroundColorStyles: r } = tt(
          j(e, "color")
        ),
        { borderClasses: i } = Kt(e),
        { elevationClasses: o } = gt(e),
        { roundedClasses: s } = nt(e),
        c = B(32),
        { resizeRef: u } = Ea((v) => {
          !v.length || (c.value = v[0].target.clientHeight);
        }),
        d = b(() => (e.height === "auto" ? c.value : parseInt(e.height, 10))),
        { layoutItemStyles: f } = wl({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: b(() => "bottom"),
          layoutSize: d,
          elementSize: b(() => (e.height === "auto" ? void 0 : d.value)),
          active: b(() => e.app),
          absolute: j(e, "absolute"),
        });
      return (
        X(() =>
          m(
            e.tag,
            {
              ref: u,
              class: ["v-footer", a.value, l.value, i.value, o.value, s.value],
              style: [r.value, e.app ? f.value : void 0],
            },
            n
          )
        ),
        {}
      );
    },
  }),
  K2 = Z({
    name: "VForm",
    props: { ...Xk() },
    emits: { "update:modelValue": (e) => !0, submit: (e) => !0 },
    setup(e, t) {
      let { slots: n, emit: a } = t;
      const l = Jk(e),
        r = B();
      function i(s) {
        s.preventDefault(), l.reset();
      }
      function o(s) {
        const c = s,
          u = l.validate();
        (c.then = u.then.bind(u)),
          (c.catch = u.catch.bind(u)),
          (c.finally = u.finally.bind(u)),
          a("submit", c),
          c.defaultPrevented ||
            u.then((d) => {
              let { valid: f } = d;
              if (f) {
                var v;
                (v = r.value) == null || v.submit();
              }
            }),
          c.preventDefault();
      }
      return (
        X(() => {
          var s;
          return m(
            "form",
            {
              ref: r,
              class: "v-form",
              novalidate: !0,
              onReset: i,
              onSubmit: o,
            },
            [(s = n.default) == null ? void 0 : s.call(n, l)]
          );
        }),
        cn(l, r)
      );
    },
  });
const q2 = Z({
    name: "VContainer",
    props: { fluid: { type: Boolean, default: !1 }, ...be() },
    setup(e, t) {
      let { slots: n } = t;
      return (
        X(() =>
          m(
            e.tag,
            { class: ["v-container", { "v-container--fluid": e.fluid }] },
            n
          )
        ),
        {}
      );
    },
  }),
  gc = ["sm", "md", "lg", "xl", "xxl"],
  Hg = (() =>
    gc.reduce(
      (e, t) => ((e[t] = { type: [Boolean, String, Number], default: !1 }), e),
      {}
    ))(),
  Ug = (() =>
    gc.reduce(
      (e, t) => (
        (e["offset" + Ln(t)] = { type: [String, Number], default: null }), e
      ),
      {}
    ))(),
  Wg = (() =>
    gc.reduce(
      (e, t) => (
        (e["order" + Ln(t)] = { type: [String, Number], default: null }), e
      ),
      {}
    ))(),
  $f = {
    col: Object.keys(Hg),
    offset: Object.keys(Ug),
    order: Object.keys(Wg),
  };
function X2(e, t, n) {
  let a = e;
  if (!(n == null || n === !1))
    return (
      t && (a += `-${t.replace(e, "")}`),
      e === "col" && (a = "v-" + a),
      (e === "col" && (n === "" || n === !0)) || (a += `-${n}`),
      a.toLowerCase()
    );
}
const J2 = ["auto", "start", "end", "center", "baseline", "stretch"],
  Z2 = Z({
    name: "VCol",
    props: {
      cols: { type: [Boolean, String, Number], default: !1 },
      ...Hg,
      offset: { type: [String, Number], default: null },
      ...Ug,
      order: { type: [String, Number], default: null },
      ...Wg,
      alignSelf: {
        type: String,
        default: null,
        validator: (e) => J2.includes(e),
      },
      ...be(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const a = b(() => {
        const l = [];
        let r;
        for (r in $f)
          $f[r].forEach((o) => {
            const s = e[o],
              c = X2(r, o, s);
            c && l.push(c);
          });
        const i = l.some((o) => o.startsWith("v-col-"));
        return (
          l.push({
            "v-col": !i || !e.cols,
            [`v-col-${e.cols}`]: e.cols,
            [`offset-${e.offset}`]: e.offset,
            [`order-${e.order}`]: e.order,
            [`align-self-${e.alignSelf}`]: e.alignSelf,
          }),
          l
        );
      });
      return () => {
        var l;
        return Yt(
          e.tag,
          { class: a.value },
          (l = n.default) == null ? void 0 : l.call(n)
        );
      };
    },
  }),
  Q2 = ["sm", "md", "lg", "xl", "xxl"],
  pc = ["start", "end", "center"],
  Yg = ["space-between", "space-around", "space-evenly"];
function yc(e, t) {
  return Q2.reduce((n, a) => ((n[e + Ln(a)] = t()), n), {});
}
const eE = [...pc, "baseline", "stretch"],
  Gg = (e) => eE.includes(e),
  Kg = yc("align", () => ({ type: String, default: null, validator: Gg })),
  tE = [...pc, ...Yg],
  qg = (e) => tE.includes(e),
  Xg = yc("justify", () => ({ type: String, default: null, validator: qg })),
  nE = [...pc, ...Yg, "stretch"],
  Jg = (e) => nE.includes(e),
  Zg = yc("alignContent", () => ({
    type: String,
    default: null,
    validator: Jg,
  })),
  If = {
    align: Object.keys(Kg),
    justify: Object.keys(Xg),
    alignContent: Object.keys(Zg),
  },
  aE = { align: "align", justify: "justify", alignContent: "align-content" };
function lE(e, t, n) {
  let a = aE[e];
  if (n != null)
    return t && (a += `-${t.replace(e, "")}`), (a += `-${n}`), a.toLowerCase();
}
const rE = Z({
    name: "VRow",
    props: {
      dense: Boolean,
      noGutters: Boolean,
      align: { type: String, default: null, validator: Gg },
      ...Kg,
      justify: { type: String, default: null, validator: qg },
      ...Xg,
      alignContent: { type: String, default: null, validator: Jg },
      ...Zg,
      ...be(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const a = b(() => {
        const l = [];
        let r;
        for (r in If)
          If[r].forEach((i) => {
            const o = e[i],
              s = lE(r, i, o);
            s && l.push(s);
          });
        return (
          l.push({
            "v-row--no-gutters": e.noGutters,
            "v-row--dense": e.dense,
            [`align-${e.align}`]: e.align,
            [`justify-${e.justify}`]: e.justify,
            [`align-content-${e.alignContent}`]: e.alignContent,
          }),
          l
        );
      });
      return () => {
        var l;
        return Yt(
          e.tag,
          { class: ["v-row", a.value] },
          (l = n.default) == null ? void 0 : l.call(n)
        );
      };
    },
  }),
  iE = Gt("flex-grow-1", "div", "VSpacer"),
  oE = Z({
    name: "VHover",
    props: {
      disabled: Boolean,
      modelValue: { type: Boolean, default: void 0 },
      ...dg(),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = pe(e, "modelValue"),
        { runOpenDelay: l, runCloseDelay: r } = fg(
          e,
          (i) => !e.disabled && (a.value = i)
        );
      return () => {
        var i;
        return (i = n.default) == null
          ? void 0
          : i.call(n, {
              isHovering: a.value,
              props: { onMouseenter: l, onMouseleave: r },
            });
      };
    },
  });
const Qg = Symbol.for("vuetify:v-item-group"),
  sE = Z({
    name: "VItemGroup",
    props: { ...Cl({ selectedClass: "v-item--selected" }), ...be(), ...$e() },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Be(e),
        { isSelected: l, select: r, next: i, prev: o, selected: s } = Da(e, Qg);
      return () => {
        var c;
        return m(
          e.tag,
          { class: ["v-item-group", a.value] },
          {
            default: () => [
              (c = n.default) == null
                ? void 0
                : c.call(n, {
                    isSelected: l,
                    select: r,
                    next: i,
                    prev: o,
                    selected: s.value,
                  }),
            ],
          }
        );
      };
    },
  }),
  uE = je()({
    name: "VItem",
    props: Fa(),
    emits: { "group:selected": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const {
        isSelected: a,
        select: l,
        toggle: r,
        selectedClass: i,
        value: o,
        disabled: s,
      } = kl(e, Qg);
      return () => {
        var c;
        return (c = n.default) == null
          ? void 0
          : c.call(n, {
              isSelected: a.value,
              selectedClass: i.value,
              select: l,
              toggle: r,
              value: o.value,
              disabled: s.value,
            });
      };
    },
  });
const cE = Gt("v-kbd");
const dE = Z({
  name: "VLayout",
  props: _h(),
  setup(e, t) {
    let { slots: n } = t;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: r,
      items: i,
      layoutRef: o,
    } = xh(e);
    return (
      X(() => {
        var s;
        return m("div", { ref: o, class: a.value, style: l.value }, [
          (s = n.default) == null ? void 0 : s.call(n),
        ]);
      }),
      { getLayoutItem: r, items: i }
    );
  },
});
const fE = Z({
    name: "VLayoutItem",
    props: {
      position: { type: String, required: !0 },
      size: { type: [Number, String], default: 300 },
      modelValue: Boolean,
      ...xl(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { layoutItemStyles: a } = wl({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: j(e, "position"),
        elementSize: j(e, "size"),
        layoutSize: j(e, "size"),
        active: j(e, "modelValue"),
        absolute: j(e, "absolute"),
      });
      return () => {
        var l;
        return m("div", { class: ["v-layout-item"], style: a.value }, [
          (l = n.default) == null ? void 0 : l.call(n),
        ]);
      };
    },
  }),
  vE = Z({
    name: "VLazy",
    directives: { intersect: Or },
    props: {
      modelValue: Boolean,
      options: {
        type: Object,
        default: () => ({
          root: void 0,
          rootMargin: void 0,
          threshold: void 0,
        }),
      },
      ...sn(),
      ...be(),
      ...Fn({ transition: "fade-transition" }),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { dimensionStyles: a } = un(e),
        l = pe(e, "modelValue");
      function r(i) {
        l.value || (l.value = i);
      }
      return (
        X(() => {
          var i;
          return Le(
            m(
              e.tag,
              { class: "v-lazy", style: a.value },
              {
                default: () => [
                  l.value &&
                    m(
                      hn,
                      { transition: e.transition, appear: !0 },
                      {
                        default: () => [
                          (i = n.default) == null ? void 0 : i.call(n),
                        ],
                      }
                    ),
                ],
              }
            ),
            [[Rt("intersect"), r, e.options]]
          );
        }),
        {}
      );
    },
  });
const mE = Z({
  name: "VLocaleProvider",
  props: {
    locale: String,
    fallbackLocale: String,
    messages: Object,
    rtl: { type: Boolean, default: void 0 },
  },
  setup(e, t) {
    let { slots: n } = t;
    const { rtlClasses: a } = JC(e);
    return (
      X(() => {
        var l;
        return m("div", { class: ["v-locale-provider", a.value] }, [
          (l = n.default) == null ? void 0 : l.call(n),
        ]);
      }),
      {}
    );
  },
});
const hE = Z({
  name: "VMain",
  props: { scrollable: Boolean, ...be({ tag: "main" }) },
  setup(e, t) {
    let { slots: n } = t;
    const { mainStyles: a } = ck(),
      { ssrBootStyles: l } = mc();
    return (
      X(() => {
        var r, i;
        return m(
          e.tag,
          {
            class: ["v-main", { "v-main--scrollable": e.scrollable }],
            style: [a.value, l.value],
          },
          {
            default: () => [
              e.scrollable
                ? m("div", { class: "v-main__scroller" }, [
                    (r = n.default) == null ? void 0 : r.call(n),
                  ])
                : (i = n.default) == null
                ? void 0
                : i.call(n),
            ],
          }
        );
      }),
      {}
    );
  },
});
function gE(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = B(!1),
    r = B(0),
    i = b(() => {
      const c = typeof l.value == "boolean" ? "top" : l.value;
      return [
        n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0,
        l.value ? { [c]: ae(r.value) } : { top: a.value.top },
      ];
    });
  _t(() => {
    ce(
      n,
      (c) => {
        c
          ? window.addEventListener("scroll", s, { passive: !0 })
          : window.removeEventListener("scroll", s);
      },
      { immediate: !0 }
    );
  }),
    At(() => {
      document.removeEventListener("scroll", s);
    });
  let o = 0;
  function s() {
    var h;
    const c = o > window.scrollY ? "up" : "down",
      u = t.value.getBoundingClientRect(),
      d = parseFloat((h = a.value.top) != null ? h : 0),
      f = window.scrollY - Math.max(0, r.value - d),
      v = u.height + Math.max(r.value, d) - window.scrollY - window.innerHeight;
    u.height < window.innerHeight - d
      ? ((l.value = "top"), (r.value = d))
      : (c === "up" && l.value === "bottom") ||
        (c === "down" && l.value === "top")
      ? ((r.value = window.scrollY + u.top), (l.value = !0))
      : c === "down" && v <= 0
      ? ((r.value = 0), (l.value = "bottom"))
      : c === "up" && f <= 0 && ((r.value = u.top + f), (l.value = "top")),
      (o = window.scrollY);
  }
  return { isStuck: l, stickyStyles: i };
}
const pE = 100,
  yE = 20;
function Pf(e) {
  const t = 1.41421356237;
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * t;
}
function Of(e) {
  if (e.length < 2) return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = Pf(t),
      l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    (t += (l - a) * Math.abs(l)), n === e.length - 1 && (t *= 0.5);
  }
  return Pf(t) * 1e3;
}
function bE() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((r) => {
      var o;
      ((o = e[r.identifier]) != null ? o : (e[r.identifier] = new fC(yE))).push(
        [l.timeStamp, r]
      );
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((r) => {
      delete e[r.identifier];
    });
  }
  function a(l) {
    var r;
    const i = (r = e[l]) == null ? void 0 : r.values().reverse();
    if (!i) throw new Error(`No samples for touch id ${l}`);
    const o = i[0],
      s = [],
      c = [];
    for (const u of i) {
      if (o[0] - u[0] > pE) break;
      s.push({ t: u[0], d: u[1].clientX }),
        c.push({ t: u[0], d: u[1].clientY });
    }
    return {
      x: Of(s),
      y: Of(c),
      get direction() {
        const { x: u, y: d } = this,
          [f, v] = [Math.abs(u), Math.abs(d)];
        return f > v && u >= 0
          ? "right"
          : f > v && u <= 0
          ? "left"
          : v > f && d >= 0
          ? "down"
          : v > f && d <= 0
          ? "up"
          : _E();
      },
    };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function _E() {
  throw new Error();
}
function xE(e) {
  let { isActive: t, isTemporary: n, width: a, touchless: l, position: r } = e;
  _t(() => {
    window.addEventListener("touchstart", g, { passive: !0 }),
      window.addEventListener("touchmove", _, { passive: !1 }),
      window.addEventListener("touchend", y, { passive: !0 });
  }),
    At(() => {
      window.removeEventListener("touchstart", g),
        window.removeEventListener("touchmove", _),
        window.removeEventListener("touchend", y);
    });
  const i = b(() => r.value !== "bottom"),
    { addMovement: o, endTouch: s, getVelocity: c } = bE();
  let u = !1;
  const d = B(!1),
    f = B(0),
    v = B(0);
  let h;
  function p(S, A) {
    return (
      (r.value === "left"
        ? S
        : r.value === "right"
        ? document.documentElement.clientWidth - S
        : r.value === "bottom"
        ? document.documentElement.clientHeight - S
        : Ja()) - (A ? a.value : 0)
    );
  }
  function w(S) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const x =
      r.value === "left"
        ? (S - v.value) / a.value
        : r.value === "right"
        ? (document.documentElement.clientWidth - S - v.value) / a.value
        : r.value === "bottom"
        ? (document.documentElement.clientHeight - S - v.value) / a.value
        : Ja();
    return A ? Math.max(0, Math.min(1, x)) : x;
  }
  function g(S) {
    if (l.value) return;
    const A = S.changedTouches[0].clientX,
      x = S.changedTouches[0].clientY,
      C = 25,
      V =
        r.value === "left"
          ? A < C
          : r.value === "right"
          ? A > document.documentElement.clientWidth - C
          : r.value === "bottom"
          ? x > document.documentElement.clientHeight - C
          : Ja(),
      $ =
        t.value &&
        (r.value === "left"
          ? A < a.value
          : r.value === "right"
          ? A > document.documentElement.clientWidth - a.value
          : r.value === "bottom"
          ? x > document.documentElement.clientHeight - a.value
          : Ja());
    (V || $ || (t.value && n.value)) &&
      ((u = !0),
      (h = [A, x]),
      (v.value = p(i.value ? A : x, t.value)),
      (f.value = w(i.value ? A : x)),
      s(S),
      o(S));
  }
  function _(S) {
    const A = S.changedTouches[0].clientX,
      x = S.changedTouches[0].clientY;
    if (u) {
      if (!S.cancelable) {
        u = !1;
        return;
      }
      const V = Math.abs(A - h[0]),
        $ = Math.abs(x - h[1]);
      (i.value ? V > $ && V > 3 : $ > V && $ > 3)
        ? ((d.value = !0), (u = !1))
        : (i.value ? $ : V) > 3 && (u = !1);
    }
    if (!d.value) return;
    S.preventDefault(), o(S);
    const C = w(i.value ? A : x, !1);
    (f.value = Math.max(0, Math.min(1, C))),
      C > 1
        ? (v.value = p(i.value ? A : x, !0))
        : C < 0 && (v.value = p(i.value ? A : x, !1));
  }
  function y(S) {
    if (((u = !1), !d.value)) return;
    o(S), (d.value = !1);
    const A = c(S.changedTouches[0].identifier),
      x = Math.abs(A.x),
      C = Math.abs(A.y);
    (i.value ? x > C && x > 400 : C > x && C > 3)
      ? (t.value =
          A.direction ===
          ({ left: "right", right: "left", bottom: "up" }[r.value] || Ja()))
      : (t.value = f.value > 0.5);
  }
  const k = b(() =>
    d.value
      ? {
          transform:
            r.value === "left"
              ? `translateX(calc(-100% + ${f.value * a.value}px))`
              : r.value === "right"
              ? `translateX(calc(100% - ${f.value * a.value}px))`
              : r.value === "bottom"
              ? `translateY(calc(100% - ${f.value * a.value}px))`
              : Ja(),
          transition: "none",
        }
      : void 0
  );
  return { isDragging: d, dragProgress: f, dragStyles: k };
}
function Ja() {
  throw new Error();
}
const wE = ["start", "end", "left", "right", "bottom"],
  SE = Z({
    name: "VNavigationDrawer",
    props: {
      color: String,
      disableResizeWatcher: Boolean,
      disableRouteWatcher: Boolean,
      expandOnHover: Boolean,
      floating: Boolean,
      modelValue: { type: Boolean, default: null },
      permanent: Boolean,
      rail: Boolean,
      railWidth: { type: [Number, String], default: 56 },
      scrim: { type: [String, Boolean], default: !0 },
      image: String,
      temporary: Boolean,
      touchless: Boolean,
      width: { type: [Number, String], default: 256 },
      location: {
        type: String,
        default: "start",
        validator: (e) => wE.includes(e),
      },
      sticky: Boolean,
      ...Nt(),
      ...rt(),
      ...xl(),
      ...Ye(),
      ...be({ tag: "nav" }),
      ...$e(),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { isRtl: l } = Mn(),
        { themeClasses: r } = Be(e),
        { borderClasses: i } = Kt(e),
        { backgroundColorClasses: o, backgroundColorStyles: s } = tt(
          j(e, "color")
        ),
        { elevationClasses: c } = gt(e),
        { mobile: u } = mo(),
        { roundedClasses: d } = nt(e),
        f = Fh(),
        v = pe(e, "modelValue", null, (z) => !!z),
        { ssrBootStyles: h } = mc(),
        p = B(),
        w = B(!1),
        g = b(() =>
          e.rail && e.expandOnHover && w.value
            ? Number(e.width)
            : Number(e.rail ? e.railWidth : e.width)
        ),
        _ = b(() => Ps(e.location, l.value)),
        y = b(() => !e.permanent && (u.value || e.temporary)),
        k = b(() => e.sticky && !y.value && _.value !== "bottom");
      e.disableResizeWatcher ||
        ce(y, (z) => !e.permanent && Ke(() => (v.value = !z))),
        !e.disableRouteWatcher &&
          f &&
          ce(f.currentRoute, () => y.value && (v.value = !1)),
        ce(
          () => e.permanent,
          (z) => {
            z && (v.value = !0);
          }
        ),
        ao(() => {
          e.modelValue != null ||
            y.value ||
            (v.value = e.permanent || !u.value);
        });
      const {
          isDragging: S,
          dragProgress: A,
          dragStyles: x,
        } = xE({
          isActive: v,
          isTemporary: y,
          width: g,
          touchless: j(e, "touchless"),
          position: _,
        }),
        C = b(() => {
          const z = y.value
            ? 0
            : e.rail && e.expandOnHover
            ? Number(e.railWidth)
            : g.value;
          return S.value ? z * A.value : z;
        }),
        {
          layoutItemStyles: V,
          layoutRect: $,
          layoutItemScrimStyles: R,
        } = wl({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: _,
          layoutSize: C,
          elementSize: g,
          active: b(() => v.value || S.value),
          disableTransitions: b(() => S.value),
          absolute: b(
            () => e.absolute || (k.value && typeof I.value != "string")
          ),
        }),
        { isStuck: I, stickyStyles: L } = gE({
          rootEl: p,
          isSticky: k,
          layoutItemStyles: V,
        }),
        D = tt(b(() => (typeof e.scrim == "string" ? e.scrim : null))),
        Y = b(() => ({
          ...(S.value
            ? { opacity: A.value * 0.2, transition: "none" }
            : void 0),
          ...($.value
            ? {
                left: ae($.value.left),
                right: ae($.value.right),
                top: ae($.value.top),
                bottom: ae($.value.bottom),
              }
            : void 0),
          ...R.value,
        }));
      return (
        it({ VList: { bgColor: "transparent" } }),
        X(() => {
          var z, T, F, J;
          const K = a.image || e.image;
          return m(xe, null, [
            m(
              e.tag,
              ue(
                {
                  ref: p,
                  onMouseenter: () => (w.value = !0),
                  onMouseleave: () => (w.value = !1),
                  class: [
                    "v-navigation-drawer",
                    `v-navigation-drawer--${_.value}`,
                    {
                      "v-navigation-drawer--expand-on-hover": e.expandOnHover,
                      "v-navigation-drawer--floating": e.floating,
                      "v-navigation-drawer--is-hovering": w.value,
                      "v-navigation-drawer--rail": e.rail,
                      "v-navigation-drawer--temporary": y.value,
                      "v-navigation-drawer--active": v.value,
                      "v-navigation-drawer--sticky": k.value,
                    },
                    r.value,
                    o.value,
                    i.value,
                    c.value,
                    d.value,
                  ],
                  style: [s.value, V.value, x.value, h.value, L.value],
                },
                n
              ),
              {
                default: () => [
                  K &&
                    m(
                      "div",
                      { key: "image", class: "v-navigation-drawer__img" },
                      [
                        a.image
                          ? (z = a.image) == null
                            ? void 0
                            : z.call(a, { image: e.image })
                          : m("img", { src: e.image, alt: "" }, null),
                      ]
                    ),
                  a.prepend &&
                    m("div", { class: "v-navigation-drawer__prepend" }, [
                      (T = a.prepend) == null ? void 0 : T.call(a),
                    ]),
                  m("div", { class: "v-navigation-drawer__content" }, [
                    (F = a.default) == null ? void 0 : F.call(a),
                  ]),
                  a.append &&
                    m("div", { class: "v-navigation-drawer__append" }, [
                      (J = a.append) == null ? void 0 : J.call(a),
                    ]),
                ],
              }
            ),
            m(
              pn,
              { name: "fade-transition" },
              {
                default: () => [
                  y.value &&
                    (S.value || v.value) &&
                    !!e.scrim &&
                    m(
                      "div",
                      {
                        class: [
                          "v-navigation-drawer__scrim",
                          D.backgroundColorClasses.value,
                        ],
                        style: [Y.value, D.backgroundColorStyles.value],
                        onClick: () => (v.value = !1),
                      },
                      null
                    ),
                ],
              }
            ),
          ]);
        }),
        { isStuck: I }
      );
    },
  }),
  CE = Z({
    name: "VNoSsr",
    setup(e, t) {
      let { slots: n } = t;
      const a = hg();
      return () => {
        var l;
        return a.value && ((l = n.default) == null ? void 0 : l.call(n));
      };
    },
  });
function kE() {
  const e = B([]);
  Gv(() => (e.value = []));
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const AE = Z({
  name: "VPagination",
  props: {
    activeColor: String,
    start: { type: [Number, String], default: 1 },
    modelValue: { type: Number, default: (e) => e.start },
    disabled: Boolean,
    length: {
      type: [Number, String],
      default: 1,
      validator: (e) => e % 1 === 0,
    },
    totalVisible: [Number, String],
    firstIcon: { type: ge, default: "$first" },
    prevIcon: { type: ge, default: "$prev" },
    nextIcon: { type: ge, default: "$next" },
    lastIcon: { type: ge, default: "$last" },
    ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" },
    pageAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.page",
    },
    currentPageAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.currentPage",
    },
    firstAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.first",
    },
    previousAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.previous",
    },
    nextAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.next",
    },
    lastAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.last",
    },
    ellipsis: { type: String, default: "..." },
    showFirstLastPage: Boolean,
    ...Nt(),
    ...st(),
    ...rt(),
    ...Ye(),
    ...Dn(),
    ...be({ tag: "nav" }),
    ...$e(),
    ...qt({ variant: "text" }),
  },
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0,
  },
  setup(e, t) {
    let { slots: n, emit: a } = t;
    const l = pe(e, "modelValue"),
      { t: r, n: i } = on(),
      { isRtl: o } = Mn(),
      { themeClasses: s } = Be(e),
      c = B(-1);
    it(void 0, { scoped: !0 });
    const { resizeRef: u } = Ea((A) => {
        if (!A.length) return;
        const { target: x, contentRect: C } = A[0],
          V = x.querySelector(".v-pagination__list > *");
        if (!V) return;
        const $ = C.width,
          R = V.offsetWidth + parseFloat(getComputedStyle(V).marginRight) * 2,
          I = e.showFirstLastPage ? 5 : 3;
        c.value = Math.max(0, Math.floor(+(($ - R * I) / R).toFixed(2)));
      }),
      d = b(() => parseInt(e.length, 10)),
      f = b(() => parseInt(e.start, 10)),
      v = b(() =>
        e.totalVisible
          ? parseInt(e.totalVisible, 10)
          : c.value >= 0
          ? c.value
          : d.value
      ),
      h = b(() => {
        if (d.value <= 0 || isNaN(d.value) || d.value > Number.MAX_SAFE_INTEGER)
          return [];
        if (v.value <= 1) return [l.value];
        if (d.value <= v.value) return pa(d.value, f.value);
        const A = v.value % 2 === 0,
          x = A ? v.value / 2 : Math.floor(v.value / 2),
          C = A ? x : x + 1,
          V = d.value - x;
        if (C - l.value >= 0)
          return [
            ...pa(Math.max(1, v.value - 1), f.value),
            e.ellipsis,
            d.value,
          ];
        if (l.value - V >= (A ? 1 : 0)) {
          const $ = v.value - 1,
            R = d.value - $ + f.value;
          return [f.value, e.ellipsis, ...pa($, R)];
        } else {
          const $ = Math.max(1, v.value - 3),
            R = $ === 1 ? l.value : l.value - Math.ceil($ / 2) + f.value;
          return [f.value, e.ellipsis, ...pa($, R), e.ellipsis, d.value];
        }
      });
    function p(A, x, C) {
      A.preventDefault(), (l.value = x), C && a(C, x);
    }
    const { refs: w, updateRef: g } = kE();
    it({
      VPaginationBtn: {
        color: j(e, "color"),
        border: j(e, "border"),
        density: j(e, "density"),
        size: j(e, "size"),
        variant: j(e, "variant"),
        rounded: j(e, "rounded"),
        elevation: j(e, "elevation"),
      },
    });
    const _ = b(() =>
        h.value.map((A, x) => {
          const C = (V) => g(V, x);
          if (typeof A == "string")
            return {
              isActive: !1,
              key: `ellipsis-${x}`,
              page: A,
              props: { ref: C, ellipsis: !0, icon: !0, disabled: !0 },
            };
          {
            const V = A === l.value;
            return {
              isActive: V,
              key: A,
              page: i(A),
              props: {
                ref: C,
                ellipsis: !1,
                icon: !0,
                disabled: !!e.disabled || e.length < 2,
                color: V ? e.activeColor : e.color,
                ariaCurrent: V,
                ariaLabel: r(
                  V ? e.currentPageAriaLabel : e.pageAriaLabel,
                  x + 1
                ),
                onClick: ($) => p($, A),
              },
            };
          }
        })
      ),
      y = b(() => {
        const A = !!e.disabled || l.value <= f.value,
          x = !!e.disabled || l.value >= f.value + d.value - 1;
        return {
          first: e.showFirstLastPage
            ? {
                icon: o.value ? e.lastIcon : e.firstIcon,
                onClick: (C) => p(C, f.value, "first"),
                disabled: A,
                ariaLabel: r(e.firstAriaLabel),
                ariaDisabled: A,
              }
            : void 0,
          prev: {
            icon: o.value ? e.nextIcon : e.prevIcon,
            onClick: (C) => p(C, l.value - 1, "prev"),
            disabled: A,
            ariaLabel: r(e.previousAriaLabel),
            ariaDisabled: A,
          },
          next: {
            icon: o.value ? e.prevIcon : e.nextIcon,
            onClick: (C) => p(C, l.value + 1, "next"),
            disabled: x,
            ariaLabel: r(e.nextAriaLabel),
            ariaDisabled: x,
          },
          last: e.showFirstLastPage
            ? {
                icon: o.value ? e.firstIcon : e.lastIcon,
                onClick: (C) => p(C, f.value + d.value - 1, "last"),
                disabled: x,
                ariaLabel: r(e.lastAriaLabel),
                ariaDisabled: x,
              }
            : void 0,
        };
      });
    function k() {
      var A;
      const x = l.value - f.value;
      (A = w.value[x]) == null || A.$el.focus();
    }
    function S(A) {
      A.key === $s.left && !e.disabled && l.value > e.start
        ? ((l.value = l.value - 1), Ke(k))
        : A.key === $s.right &&
          !e.disabled &&
          l.value < f.value + d.value - 1 &&
          ((l.value = l.value + 1), Ke(k));
    }
    return (
      X(() =>
        m(
          e.tag,
          {
            ref: u,
            class: ["v-pagination", s.value],
            role: "navigation",
            "aria-label": r(e.ariaLabel),
            onKeydown: S,
            "data-test": "v-pagination-root",
          },
          {
            default: () => [
              m("ul", { class: "v-pagination__list" }, [
                e.showFirstLastPage &&
                  m(
                    "li",
                    {
                      key: "first",
                      class: "v-pagination__first",
                      "data-test": "v-pagination-first",
                    },
                    [
                      n.first
                        ? n.first(y.value.first)
                        : m(
                            St,
                            ue({ _as: "VPaginationBtn" }, y.value.first),
                            null
                          ),
                    ]
                  ),
                m(
                  "li",
                  {
                    key: "prev",
                    class: "v-pagination__prev",
                    "data-test": "v-pagination-prev",
                  },
                  [
                    n.prev
                      ? n.prev(y.value.prev)
                      : m(
                          St,
                          ue({ _as: "VPaginationBtn" }, y.value.prev),
                          null
                        ),
                  ]
                ),
                _.value.map((A, x) =>
                  m(
                    "li",
                    {
                      key: A.key,
                      class: [
                        "v-pagination__item",
                        { "v-pagination__item--is-active": A.isActive },
                      ],
                      "data-test": "v-pagination-item",
                    },
                    [
                      n.item
                        ? n.item(A)
                        : m(St, ue({ _as: "VPaginationBtn" }, A.props), {
                            default: () => [A.page],
                          }),
                    ]
                  )
                ),
                m(
                  "li",
                  {
                    key: "next",
                    class: "v-pagination__next",
                    "data-test": "v-pagination-next",
                  },
                  [
                    n.next
                      ? n.next(y.value.next)
                      : m(
                          St,
                          ue({ _as: "VPaginationBtn" }, y.value.next),
                          null
                        ),
                  ]
                ),
                e.showFirstLastPage &&
                  m(
                    "li",
                    {
                      key: "last",
                      class: "v-pagination__last",
                      "data-test": "v-pagination-last",
                    },
                    [
                      n.last
                        ? n.last(y.value.last)
                        : m(
                            St,
                            ue({ _as: "VPaginationBtn" }, y.value.last),
                            null
                          ),
                    ]
                  ),
              ]),
            ],
          }
        )
      ),
      {}
    );
  },
});
function EE(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const VE = Z({
    name: "VParallax",
    props: { scale: { type: [Number, String], default: 0.5 } },
    setup(e, t) {
      let { slots: n } = t;
      const { intersectionRef: a, isIntersecting: l } = ec(),
        { resizeRef: r, contentRect: i } = Ea(),
        { height: o } = mo(),
        s = B();
      bn(() => {
        var v;
        a.value = r.value = (v = s.value) == null ? void 0 : v.$el;
      });
      let c;
      ce(l, (v) => {
        v
          ? ((c = dh(a.value)),
            (c = c === document.scrollingElement ? document : c),
            c.addEventListener("scroll", f, { passive: !0 }),
            f())
          : c.removeEventListener("scroll", f);
      }),
        At(() => {
          var v;
          (v = c) == null || v.removeEventListener("scroll", f);
        }),
        ce(o, f),
        ce(() => {
          var v;
          return (v = i.value) == null ? void 0 : v.height;
        }, f);
      const u = b(() => 1 - Pt(+e.scale));
      let d = -1;
      function f() {
        !l.value ||
          (cancelAnimationFrame(d),
          (d = requestAnimationFrame(() => {
            var A, x;
            var v;
            const h = ((v = s.value) == null ? void 0 : v.$el).querySelector(
              ".v-img__img"
            );
            if (!h) return;
            const p =
                (A = c.clientHeight) != null
                  ? A
                  : document.documentElement.clientHeight,
              w = (x = c.scrollTop) != null ? x : window.scrollY,
              g = a.value.offsetTop,
              _ = i.value.height,
              y = g + (_ - p) / 2,
              k = EE((w - y) * u.value),
              S = Math.max(1, (u.value * (p - _) + _) / _);
            h.style.setProperty("transform", `translateY(${k}px) scale(${S})`);
          })));
      }
      return (
        X(() =>
          m(
            Sl,
            {
              class: ["v-parallax", { "v-parallax--active": l.value }],
              ref: s,
              cover: !0,
              onLoadstart: f,
              onLoad: f,
            },
            n
          )
        ),
        {}
      );
    },
  }),
  $E = Z({
    name: "VRadio",
    props: { ...So({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) },
    setup(e, t) {
      let { slots: n } = t;
      return X(() => m(Br, ue(e, { class: "v-radio", type: "radio" }), n)), {};
    },
  });
const IE = Z({
    name: "VRadioGroup",
    inheritAttrs: !1,
    props: {
      height: { type: [Number, String], default: "auto" },
      ...zn(),
      ...La(oc(), ["multiple"]),
      trueIcon: { type: ge, default: "$radioOn" },
      falseIcon: { type: ge, default: "$radioOff" },
      type: { type: String, default: "radio" },
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const l = pt(),
        r = b(() => e.id || `radio-group-${l}`),
        i = pe(e, "modelValue");
      return (
        X(() => {
          const [o, s] = Ba(n),
            [c, u] = ra(e),
            [d, f] = Kh({ ...e, multiple: !1 }),
            v = a.label
              ? a.label({ label: e.label, props: { for: r.value } })
              : e.label;
          return m(
            wn,
            ue({ class: "v-radio-group" }, o, c, {
              modelValue: i.value,
              "onUpdate:modelValue": (h) => (i.value = h),
              id: r.value,
            }),
            {
              ...a,
              default: (h) => {
                let { id: p, isDisabled: w, isReadonly: g } = h;
                return m(xe, null, [
                  v && m(Il, { for: p.value }, { default: () => [v] }),
                  m(
                    Gh,
                    ue(
                      d,
                      {
                        id: p.value,
                        defaultsTarget: "VRadio",
                        trueIcon: e.trueIcon,
                        falseIcon: e.falseIcon,
                        type: e.type,
                        disabled: w.value,
                        readonly: g.value,
                      },
                      s,
                      {
                        modelValue: i.value,
                        "onUpdate:modelValue": (_) => (i.value = _),
                      }
                    ),
                    a
                  ),
                ]);
              },
            }
          );
        }),
        {}
      );
    },
  }),
  PE = Z({
    name: "VRangeSlider",
    props: {
      ...bo(),
      ...zn(),
      ...Bg(),
      strict: Boolean,
      modelValue: { type: Array, default: () => [0, 0] },
    },
    emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = B(),
        l = B(),
        r = B();
      function i(x) {
        if (!a.value || !l.value) return;
        const C = Gs(x, a.value.$el, e.direction),
          V = Gs(x, l.value.$el, e.direction),
          $ = Math.abs(C),
          R = Math.abs(V);
        return $ < R || ($ === R && C < 0) ? a.value.$el : l.value.$el;
      }
      const {
          activeThumbRef: o,
          hasLabels: s,
          max: c,
          min: u,
          mousePressed: d,
          onSliderMousedown: f,
          onSliderTouchstart: v,
          position: h,
          roundValue: p,
          trackContainerRef: w,
        } = Ng({
          props: e,
          handleSliderMouseUp: (x) => {
            var C;
            g.value =
              o.value === ((C = a.value) == null ? void 0 : C.$el)
                ? [x, g.value[1]]
                : [g.value[0], x];
          },
          handleMouseMove: (x) => {
            var C;
            const [V, $] = g.value;
            if (!e.strict && V === $ && V !== u.value) {
              var R, I, L;
              (o.value =
                x > V
                  ? (R = l.value) == null
                    ? void 0
                    : R.$el
                  : (I = a.value) == null
                  ? void 0
                  : I.$el),
                (L = o.value) == null || L.focus();
            }
            o.value === ((C = a.value) == null ? void 0 : C.$el)
              ? (g.value = [Math.min(x, $), $])
              : (g.value = [V, Math.max(V, x)]);
          },
          getActiveThumb: i,
        }),
        g = pe(e, "modelValue", void 0, (x) =>
          !x || !x.length ? [0, 0] : x.map((C) => p(C))
        ),
        { isFocused: _, focus: y, blur: k } = Ha(e),
        S = b(() => h(g.value[0])),
        A = b(() => h(g.value[1]));
      return (
        X(() => {
          const [x, C] = ra(e),
            V = !!(e.label || n.label || n.prepend);
          return m(
            wn,
            ue(
              {
                class: [
                  "v-slider",
                  "v-range-slider",
                  {
                    "v-slider--has-labels": !!n["tick-label"] || s.value,
                    "v-slider--focused": _.value,
                    "v-slider--pressed": d.value,
                    "v-slider--disabled": e.disabled,
                  },
                ],
                ref: r,
              },
              x,
              { focused: _.value }
            ),
            {
              ...n,
              prepend: V
                ? ($) => {
                    var L;
                    var R, I;
                    return m(xe, null, [
                      (
                        (L = (R = n.label) == null ? void 0 : R.call(n, $)) !=
                        null
                          ? L
                          : e.label
                      )
                        ? m(
                            Il,
                            { class: "v-slider__label", text: e.label },
                            null
                          )
                        : void 0,
                      (I = n.prepend) == null ? void 0 : I.call(n, $),
                    ]);
                  }
                : void 0,
              default: ($) => {
                var R, I;
                let { id: L } = $;
                return m(
                  "div",
                  {
                    class: "v-slider__container",
                    onMousedown: f,
                    onTouchstartPassive: v,
                  },
                  [
                    m(
                      "input",
                      {
                        id: `${L.value}_start`,
                        name: e.name || L.value,
                        disabled: e.disabled,
                        readonly: e.readonly,
                        tabindex: "-1",
                        value: g.value[0],
                      },
                      null
                    ),
                    m(
                      "input",
                      {
                        id: `${L.value}_stop`,
                        name: e.name || L.value,
                        disabled: e.disabled,
                        readonly: e.readonly,
                        tabindex: "-1",
                        value: g.value[1],
                      },
                      null
                    ),
                    m(
                      Mg,
                      { ref: w, start: S.value, stop: A.value },
                      { "tick-label": n["tick-label"] }
                    ),
                    m(
                      Ks,
                      {
                        ref: a,
                        focused:
                          _ &&
                          o.value === ((R = a.value) == null ? void 0 : R.$el),
                        modelValue: g.value[0],
                        "onUpdate:modelValue": (D) =>
                          (g.value = [D, g.value[1]]),
                        onFocus: (D) => {
                          var Y, z;
                          if (
                            (y(),
                            (o.value = (Y = a.value) == null ? void 0 : Y.$el),
                            g.value[0] === g.value[1] &&
                              g.value[1] === u.value &&
                              D.relatedTarget !==
                                ((z = l.value) == null ? void 0 : z.$el))
                          ) {
                            var T, F;
                            (T = a.value) == null || T.$el.blur(),
                              (F = l.value) == null || F.$el.focus();
                          }
                        },
                        onBlur: () => {
                          k(), (o.value = void 0);
                        },
                        min: u.value,
                        max: g.value[1],
                        position: S.value,
                      },
                      { "thumb-label": n["thumb-label"] }
                    ),
                    m(
                      Ks,
                      {
                        ref: l,
                        focused:
                          _ &&
                          o.value === ((I = l.value) == null ? void 0 : I.$el),
                        modelValue: g.value[1],
                        "onUpdate:modelValue": (D) =>
                          (g.value = [g.value[0], D]),
                        onFocus: (D) => {
                          var Y, z;
                          if (
                            (y(),
                            (o.value = (Y = l.value) == null ? void 0 : Y.$el),
                            g.value[0] === g.value[1] &&
                              g.value[0] === c.value &&
                              D.relatedTarget !==
                                ((z = a.value) == null ? void 0 : z.$el))
                          ) {
                            var T, F;
                            (T = l.value) == null || T.$el.blur(),
                              (F = a.value) == null || F.$el.focus();
                          }
                        },
                        onBlur: () => {
                          k(), (o.value = void 0);
                        },
                        min: g.value[0],
                        max: c.value,
                        position: A.value,
                      },
                      { "thumb-label": n["thumb-label"] }
                    ),
                  ]
                );
              },
            }
          );
        }),
        {}
      );
    },
  });
const OE = je()({
  name: "VRating",
  props: {
    name: String,
    itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" },
    activeColor: String,
    color: String,
    clearable: Boolean,
    disabled: Boolean,
    emptyIcon: { type: ge, default: "$ratingEmpty" },
    fullIcon: { type: ge, default: "$ratingFull" },
    halfIncrements: Boolean,
    hover: Boolean,
    length: { type: [Number, String], default: 5 },
    readonly: Boolean,
    modelValue: { type: [Number, String], default: 0 },
    itemLabels: Array,
    itemLabelPosition: {
      type: String,
      default: "top",
      validator: (e) => ["top", "bottom"].includes(e),
    },
    ripple: Boolean,
    ...st(),
    ...Dn(),
    ...be(),
    ...$e(),
  },
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const { t: a } = on(),
      { themeClasses: l } = Be(e),
      r = pe(e, "modelValue"),
      i = b(() => Pt(parseFloat(r.value), 0, +e.length)),
      o = b(() => pa(Number(e.length), 1)),
      s = b(() =>
        o.value.flatMap((k) => (e.halfIncrements ? [k - 0.5, k] : [k]))
      ),
      c = B(-1),
      u = B(-1),
      d = B();
    let f = !1;
    const v = b(() =>
        s.value.map((k) => {
          var I;
          const S = e.hover && c.value > -1,
            A = i.value >= k,
            x = c.value >= k,
            V = (S ? x : A) ? e.fullIcon : e.emptyIcon,
            $ = (I = e.activeColor) != null ? I : e.color,
            R = A || x ? $ : e.color;
          return { isFilled: A, isHovered: x, icon: V, color: R };
        })
      ),
      h = b(() =>
        [0, ...s.value].map((k) => {
          function S() {
            c.value = k;
          }
          function A() {
            c.value = -1;
          }
          function x() {
            if (k === 0 && i.value === 0) {
              var $;
              ($ = d.value) == null || $.focus();
            } else u.value = k;
          }
          function C() {
            f || (u.value = -1);
          }
          function V() {
            e.disabled ||
              e.readonly ||
              (r.value = i.value === k && e.clearable ? 0 : k);
          }
          return {
            onMouseenter: e.hover ? S : void 0,
            onMouseleave: e.hover ? A : void 0,
            onFocus: x,
            onBlur: C,
            onClick: V,
          };
        })
      );
    function p() {
      f = !0;
    }
    function w() {
      f = !1;
    }
    const g = b(() => {
      var k;
      return (k = e.name) != null ? k : `v-rating-${pt()}`;
    });
    function _(k) {
      var S, A;
      let { value: x, index: C, showStar: V = !0 } = k;
      const {
          onMouseenter: $,
          onMouseleave: R,
          onFocus: I,
          onBlur: L,
          onClick: D,
        } = h.value[C + 1],
        Y = `${g.value}-${String(x).replace(".", "-")}`,
        z = {
          color: (S = v.value[C]) == null ? void 0 : S.color,
          density: e.density,
          disabled: e.disabled,
          icon: (A = v.value[C]) == null ? void 0 : A.icon,
          ripple: e.ripple,
          size: e.size,
          tag: "span",
          variant: "plain",
        };
      return m(xe, null, [
        m(
          "label",
          {
            for: Y,
            class: {
              "v-rating__item--half": e.halfIncrements && x % 1 > 0,
              "v-rating__item--full": e.halfIncrements && x % 1 === 0,
            },
            onMousedown: p,
            onMouseup: w,
            onMouseenter: $,
            onMouseleave: R,
          },
          [
            m("span", { class: "v-rating__hidden" }, [
              a(e.itemAriaLabel, x, e.length),
            ]),
            V
              ? n.item
                ? n.item({ ...v.value[C], props: z, value: x, index: C })
                : m(St, z, null)
              : void 0,
          ]
        ),
        m(
          "input",
          {
            class: "v-rating__hidden",
            name: g.value,
            id: Y,
            type: "radio",
            value: x,
            checked: i.value === x,
            onClick: D,
            onFocus: I,
            onBlur: L,
            ref: C === 0 ? d : void 0,
            readonly: e.readonly,
            disabled: e.disabled,
          },
          null
        ),
      ]);
    }
    function y(k) {
      return n["item-label"]
        ? n["item-label"](k)
        : k.label
        ? m("span", null, [k.label])
        : m("span", null, [Je("\xA0")]);
    }
    return (
      X(() => {
        var k;
        const S = !!((k = e.itemLabels) != null && k.length) || n["item-label"];
        return m(
          e.tag,
          {
            class: [
              "v-rating",
              { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly },
              l.value,
            ],
          },
          {
            default: () => [
              m(_, { value: 0, index: -1, showStar: !1 }, null),
              o.value.map((A, x) => {
                var C, V;
                return m("div", { class: "v-rating__wrapper" }, [
                  S && e.itemLabelPosition === "top"
                    ? y({
                        value: A,
                        index: x,
                        label: (C = e.itemLabels) == null ? void 0 : C[x],
                      })
                    : void 0,
                  m(
                    "div",
                    {
                      class: [
                        "v-rating__item",
                        { "v-rating__item--focused": Math.ceil(u.value) === A },
                      ],
                    },
                    [
                      e.halfIncrements
                        ? m(xe, null, [
                            m(_, { value: A - 0.5, index: x * 2 }, null),
                            m(_, { value: A, index: x * 2 + 1 }, null),
                          ])
                        : m(_, { value: A, index: x }, null),
                    ]
                  ),
                  S && e.itemLabelPosition === "bottom"
                    ? y({
                        value: A,
                        index: x,
                        label: (V = e.itemLabels) == null ? void 0 : V[x],
                      })
                    : void 0,
                ]);
              }),
            ],
          }
        );
      }),
      {}
    );
  },
});
function Tf(e) {
  const n = Math.abs(e);
  return Math.sign(e) * (n / ((1 / 0.501 - 2) * (1 - n) + 1));
}
function Rf(e) {
  let {
    selectedElement: t,
    containerSize: n,
    contentSize: a,
    isRtl: l,
    currentScrollOffset: r,
    isHorizontal: i,
  } = e;
  const o = i ? t.clientWidth : t.clientHeight,
    s = i ? t.offsetLeft : t.offsetTop,
    c = l && i ? a - s - o : s,
    u = n + r,
    d = o + c,
    f = o * 0.4;
  return (
    c <= r
      ? (r = Math.max(c - f, 0))
      : u <= d && (r = Math.min(r - (u - d - f), a - n)),
    r
  );
}
function TE(e) {
  let {
    selectedElement: t,
    containerSize: n,
    contentSize: a,
    isRtl: l,
    isHorizontal: r,
  } = e;
  const i = r ? t.clientWidth : t.clientHeight,
    o = r ? t.offsetLeft : t.offsetTop,
    s = l && r ? a - o - i / 2 - n / 2 : o + i / 2 - n / 2;
  return Math.min(a - n, Math.max(0, s));
}
const ep = Symbol.for("vuetify:v-slide-group"),
  tp = je()({
    name: "VSlideGroup",
    props: {
      centerActive: Boolean,
      direction: { type: String, default: "horizontal" },
      symbol: { type: null, default: ep },
      nextIcon: { type: ge, default: "$next" },
      prevIcon: { type: ge, default: "$prev" },
      showArrows: {
        type: [Boolean, String],
        validator: (e) =>
          typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e),
      },
      ...be(),
      ...Cl({ selectedClass: "v-slide-group-item--active" }),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { isRtl: a } = Mn(),
        { mobile: l } = mo(),
        r = Da(e, e.symbol),
        i = B(!1),
        o = B(0),
        s = B(0),
        c = B(0),
        u = b(() => e.direction === "horizontal"),
        { resizeRef: d, contentRect: f } = Ea(),
        { resizeRef: v, contentRect: h } = Ea(),
        p = b(() =>
          r.selected.value.length
            ? r.items.value.findIndex((K) => K.id === r.selected.value[0])
            : -1
        ),
        w = b(() =>
          r.selected.value.length
            ? r.items.value.findIndex(
                (K) => K.id === r.selected.value[r.selected.value.length - 1]
              )
            : -1
        );
      if (Xe) {
        let K = -1;
        ce(
          () => [r.selected.value, f.value, h.value, u.value],
          () => {
            cancelAnimationFrame(K),
              (K = requestAnimationFrame(() => {
                if (f.value && h.value) {
                  const le = u.value ? "width" : "height";
                  (s.value = f.value[le]),
                    (c.value = h.value[le]),
                    (i.value = s.value + 1 < c.value);
                }
                if (p.value >= 0 && v.value) {
                  const le = v.value.children[w.value];
                  p.value === 0 || !i.value
                    ? (o.value = 0)
                    : e.centerActive
                    ? (o.value = TE({
                        selectedElement: le,
                        containerSize: s.value,
                        contentSize: c.value,
                        isRtl: a.value,
                        isHorizontal: u.value,
                      }))
                    : i.value &&
                      (o.value = Rf({
                        selectedElement: le,
                        containerSize: s.value,
                        contentSize: c.value,
                        isRtl: a.value,
                        currentScrollOffset: o.value,
                        isHorizontal: u.value,
                      }));
                }
              }));
          }
        );
      }
      const g = B(!1);
      let _ = 0,
        y = 0;
      function k(K) {
        const le = u.value ? "clientX" : "clientY";
        (y = (a.value && u.value ? -1 : 1) * o.value),
          (_ = K.touches[0][le]),
          (g.value = !0);
      }
      function S(K) {
        if (!i.value) return;
        const le = u.value ? "clientX" : "clientY",
          ie = a.value && u.value ? -1 : 1;
        o.value = ie * (y + _ - K.touches[0][le]);
      }
      function A(K) {
        const le = c.value - s.value;
        o.value < 0 || !i.value
          ? (o.value = 0)
          : o.value >= le && (o.value = le),
          (g.value = !1);
      }
      function x() {
        !d.value || (d.value[u.value ? "scrollLeft" : "scrollTop"] = 0);
      }
      const C = B(!1);
      function V(K) {
        if (((C.value = !0), !(!i.value || !v.value))) {
          for (const le of K.composedPath())
            for (const ie of v.value.children)
              if (ie === le) {
                o.value = Rf({
                  selectedElement: ie,
                  containerSize: s.value,
                  contentSize: c.value,
                  isRtl: a.value,
                  currentScrollOffset: o.value,
                  isHorizontal: u.value,
                });
                return;
              }
        }
      }
      function $(K) {
        C.value = !1;
      }
      function R(K) {
        var le;
        !C.value &&
          !(
            K.relatedTarget &&
            (le = v.value) != null &&
            le.contains(K.relatedTarget)
          ) &&
          L();
      }
      function I(K) {
        !v.value ||
          (u.value
            ? K.key === "ArrowRight"
              ? L(a.value ? "prev" : "next")
              : K.key === "ArrowLeft" && L(a.value ? "next" : "prev")
            : K.key === "ArrowDown"
            ? L("next")
            : K.key === "ArrowUp" && L("prev"),
          K.key === "Home" ? L("first") : K.key === "End" && L("last"));
      }
      function L(K) {
        if (v.value)
          if (K) {
            if (K === "next") {
              var ie;
              const W =
                (ie = v.value.querySelector(":focus")) == null
                  ? void 0
                  : ie.nextElementSibling;
              W ? W.focus() : L("first");
            } else if (K === "prev") {
              var we;
              const W =
                (we = v.value.querySelector(":focus")) == null
                  ? void 0
                  : we.previousElementSibling;
              W ? W.focus() : L("last");
            } else if (K === "first") {
              var te;
              (te = v.value.firstElementChild) == null || te.focus();
            } else if (K === "last") {
              var N;
              (N = v.value.lastElementChild) == null || N.focus();
            }
          } else {
            var le;
            (le = [
              ...v.value.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
              ),
            ].filter((q) => !q.hasAttribute("disabled"))[0]) == null ||
              le.focus();
          }
      }
      function D(K) {
        const le = o.value + (K === "prev" ? -1 : 1) * s.value;
        o.value = Pt(le, 0, c.value - s.value);
      }
      const Y = b(() => {
          let K =
            o.value > c.value - s.value
              ? -(c.value - s.value) + Tf(c.value - s.value - o.value)
              : -o.value;
          o.value <= 0 && (K = Tf(-o.value));
          const le = a.value && u.value ? -1 : 1;
          return {
            transform: `translate${u.value ? "X" : "Y"}(${le * K}px)`,
            transition: g.value ? "none" : "",
            willChange: g.value ? "transform" : "",
          };
        }),
        z = b(() => ({
          next: r.next,
          prev: r.prev,
          select: r.select,
          isSelected: r.isSelected,
        })),
        T = b(() => {
          switch (e.showArrows) {
            case "always":
              return !0;
            case "desktop":
              return !l.value;
            case !0:
              return i.value || Math.abs(o.value) > 0;
            case "mobile":
              return l.value || i.value || Math.abs(o.value) > 0;
            default:
              return !l.value && (i.value || Math.abs(o.value) > 0);
          }
        }),
        F = b(() => Math.abs(o.value) > 0),
        J = b(() => c.value > Math.abs(o.value) + s.value);
      return (
        X(() => {
          var K, le, ie;
          return m(
            e.tag,
            {
              class: [
                "v-slide-group",
                {
                  "v-slide-group--vertical": !u.value,
                  "v-slide-group--has-affixes": T.value,
                  "v-slide-group--is-overflowing": i.value,
                },
              ],
              tabindex: C.value || r.selected.value.length ? -1 : 0,
              onFocus: R,
            },
            {
              default: () => {
                var we, te;
                return [
                  T.value &&
                    m(
                      "div",
                      {
                        key: "prev",
                        class: [
                          "v-slide-group__prev",
                          { "v-slide-group__prev--disabled": !F.value },
                        ],
                        onClick: () => D("prev"),
                      },
                      [
                        (we =
                          (K = n.prev) == null ? void 0 : K.call(n, z.value)) !=
                        null
                          ? we
                          : m(Ns, null, {
                              default: () => [
                                m(
                                  at,
                                  { icon: a.value ? e.nextIcon : e.prevIcon },
                                  null
                                ),
                              ],
                            }),
                      ]
                    ),
                  m(
                    "div",
                    {
                      key: "container",
                      ref: d,
                      class: "v-slide-group__container",
                      onScroll: x,
                    },
                    [
                      m(
                        "div",
                        {
                          ref: v,
                          class: "v-slide-group__content",
                          style: Y.value,
                          onTouchstartPassive: k,
                          onTouchmovePassive: S,
                          onTouchendPassive: A,
                          onFocusin: V,
                          onFocusout: $,
                          onKeydown: I,
                        },
                        [
                          (le = n.default) == null
                            ? void 0
                            : le.call(n, z.value),
                        ]
                      ),
                    ]
                  ),
                  T.value &&
                    m(
                      "div",
                      {
                        key: "next",
                        class: [
                          "v-slide-group__next",
                          { "v-slide-group__next--disabled": !J.value },
                        ],
                        onClick: () => D("next"),
                      },
                      [
                        (te =
                          (ie = n.next) == null
                            ? void 0
                            : ie.call(n, z.value)) != null
                          ? te
                          : m(Ns, null, {
                              default: () => [
                                m(
                                  at,
                                  { icon: a.value ? e.prevIcon : e.nextIcon },
                                  null
                                ),
                              ],
                            }),
                      ]
                    ),
                ];
              },
            }
          );
        }),
        { selected: r.selected, scrollTo: D, scrollOffset: o, focus: L }
      );
    },
  }),
  RE = je()({
    name: "VSlideGroupItem",
    props: { ...Fa() },
    emits: { "group:selected": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = kl(e, ep);
      return () => {
        var l;
        return (l = n.default) == null
          ? void 0
          : l.call(n, {
              isSelected: a.isSelected.value,
              select: a.select,
              toggle: a.toggle,
              selectedClass: a.selectedClass.value,
            });
      };
    },
  });
const LE = je()({
  name: "VSnackbar",
  props: {
    multiLine: Boolean,
    timeout: { type: [Number, String], default: 5e3 },
    vertical: Boolean,
    ...za({ location: "bottom" }),
    ...El(),
    ...Ye(),
    ...qt(),
    ...La(Mr({ transition: "v-snackbar-transition" }), [
      "persistent",
      "noClickAnimation",
      "scrim",
      "scrollStrategy",
    ]),
  },
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const a = pe(e, "modelValue"),
      { locationStyles: l } = ja(e),
      { positionClasses: r } = Vl(e),
      { scopeId: i } = Eo(),
      { colorClasses: o, colorStyles: s, variantClasses: c } = Ma(e),
      { roundedClasses: u } = nt(e),
      d = B();
    ce(a, v),
      ce(() => e.timeout, v),
      _t(() => {
        a.value && v();
      });
    let f = -1;
    function v() {
      window.clearTimeout(f);
      const p = Number(e.timeout);
      !a.value ||
        p === -1 ||
        (f = window.setTimeout(() => {
          a.value = !1;
        }, p));
    }
    function h() {
      window.clearTimeout(f);
    }
    return (
      X(() => {
        const [p] = Ao(e);
        return m(
          Ol,
          ue(
            {
              ref: d,
              class: [
                "v-snackbar",
                {
                  "v-snackbar--active": a.value,
                  "v-snackbar--multi-line": e.multiLine && !e.vertical,
                  "v-snackbar--vertical": e.vertical,
                },
                r.value,
              ],
            },
            p,
            {
              modelValue: a.value,
              "onUpdate:modelValue": (w) => (a.value = w),
              contentProps: ue({ style: l.value }, p.contentProps),
              persistent: !0,
              noClickAnimation: !0,
              scrim: !1,
              scrollStrategy: "none",
            },
            i
          ),
          {
            default: () => [
              m(
                "div",
                {
                  class: ["v-snackbar__wrapper", o.value, u.value, c.value],
                  style: [s.value],
                  onPointerenter: h,
                  onPointerleave: v,
                },
                [
                  Na(!1, "v-snackbar"),
                  n.default &&
                    m(
                      "div",
                      {
                        class: "v-snackbar__content",
                        role: "status",
                        "aria-live": "polite",
                      },
                      [n.default()]
                    ),
                  n.actions &&
                    m(
                      Ne,
                      { defaults: { VBtn: { variant: "text", ripple: !1 } } },
                      {
                        default: () => [
                          m("div", { class: "v-snackbar__actions" }, [
                            n.actions(),
                          ]),
                        ],
                      }
                    ),
                ]
              ),
            ],
            activator: n.activator,
          }
        );
      }),
      cn({}, d)
    );
  },
});
const BE = Z({
  name: "VSwitch",
  inheritAttrs: !1,
  props: {
    indeterminate: Boolean,
    inset: Boolean,
    flat: Boolean,
    loading: { type: [Boolean, String], default: !1 },
    ...zn(),
    ...So(),
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": () => !0,
    "update:indeterminate": (e) => !0,
  },
  setup(e, t) {
    let { attrs: n, slots: a } = t;
    const l = pe(e, "indeterminate"),
      r = pe(e, "modelValue"),
      { loaderClasses: i } = yo(e),
      { isFocused: o, focus: s, blur: c } = Ha(e),
      u = b(() =>
        typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color
      ),
      d = pt(),
      f = b(() => e.id || `switch-${d}`);
    function v() {
      l.value && (l.value = !1);
    }
    return (
      X(() => {
        const [h, p] = Ba(n),
          [w, g] = ra(e),
          [_, y] = Kh(e),
          k = B();
        function S() {
          var A, x;
          (A = k.value) == null || (x = A.input) == null || x.click();
        }
        return m(
          wn,
          ue(
            {
              class: [
                "v-switch",
                { "v-switch--inset": e.inset },
                { "v-switch--indeterminate": l.value },
                i.value,
              ],
            },
            h,
            w,
            { id: f.value, focused: o.value }
          ),
          {
            ...a,
            default: (A) => {
              let { id: x, isDisabled: C, isReadonly: V, isValid: $ } = A;
              return m(
                Br,
                ue(
                  { ref: k },
                  _,
                  {
                    modelValue: r.value,
                    "onUpdate:modelValue": [(R) => (r.value = R), v],
                    id: x.value,
                    type: "checkbox",
                    "aria-checked": l.value ? "mixed" : void 0,
                    disabled: C.value,
                    readonly: V.value,
                    onFocus: s,
                    onBlur: c,
                  },
                  p
                ),
                {
                  ...a,
                  default: () =>
                    m("div", { class: "v-switch__track", onClick: S }, null),
                  input: (R) => {
                    let { textColorClasses: I, textColorStyles: L } = R;
                    return m(
                      "div",
                      { class: ["v-switch__thumb", I.value], style: L.value },
                      [
                        e.loading &&
                          m(
                            lc,
                            {
                              name: "v-switch",
                              active: !0,
                              color: $.value === !1 ? void 0 : u.value,
                            },
                            {
                              default: (D) =>
                                a.loader
                                  ? a.loader(D)
                                  : m(
                                      tc,
                                      {
                                        active: D.isActive,
                                        color: D.color,
                                        indeterminate: !0,
                                        size: "16",
                                        width: "2",
                                      },
                                      null
                                    ),
                            }
                          ),
                      ]
                    );
                  },
                }
              );
            },
          }
        );
      }),
      {}
    );
  },
});
const NE = Z({
  name: "VSystemBar",
  props: {
    color: String,
    height: [Number, String],
    window: Boolean,
    ...rt(),
    ...xl(),
    ...Ye(),
    ...be(),
    ...$e(),
  },
  setup(e, t) {
    let { slots: n } = t;
    const { themeClasses: a } = Be(e),
      { backgroundColorClasses: l, backgroundColorStyles: r } = tt(
        j(e, "color")
      ),
      { elevationClasses: i } = gt(e),
      { roundedClasses: o } = nt(e),
      s = b(() => {
        var u;
        return (u = e.height) != null ? u : e.window ? 32 : 24;
      }),
      { layoutItemStyles: c } = wl({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: B("top"),
        layoutSize: s,
        elementSize: s,
        active: b(() => !0),
        absolute: j(e, "absolute"),
      });
    return (
      X(() =>
        m(
          e.tag,
          {
            class: [
              "v-system-bar",
              { "v-system-bar--window": e.window },
              a.value,
              l.value,
              i.value,
              o.value,
            ],
            style: [r.value, c.value],
          },
          n
        )
      ),
      {}
    );
  },
});
const np = Symbol.for("vuetify:v-tabs"),
  ap = Z({
    name: "VTab",
    props: {
      fixed: Boolean,
      icon: [Boolean, String, Function, Object],
      prependIcon: ge,
      appendIcon: ge,
      stacked: Boolean,
      title: String,
      ripple: { type: Boolean, default: !0 },
      color: String,
      sliderColor: String,
      hideSlider: Boolean,
      direction: { type: String, default: "horizontal" },
      ...be(),
      ...$l(),
      ...Fa({ selectedClass: "v-tab--selected" }),
      ...$e(),
    },
    setup(e, t) {
      let { slots: n, attrs: a } = t;
      const { textColorClasses: l, textColorStyles: r } = kt(e, "sliderColor"),
        i = b(() => e.direction === "horizontal"),
        o = B(!1),
        s = B(),
        c = B();
      function u(d) {
        let { value: f } = d;
        if (((o.value = f), f)) {
          var v, h;
          const p =
              (v = s.value) == null || (h = v.$el.parentElement) == null
                ? void 0
                : h.querySelector(".v-tab--selected .v-tab__slider"),
            w = c.value;
          if (!p || !w) return;
          const g = getComputedStyle(p).color,
            _ = p.getBoundingClientRect(),
            y = w.getBoundingClientRect(),
            k = i.value ? "x" : "y",
            S = i.value ? "X" : "Y",
            A = i.value ? "right" : "bottom",
            x = i.value ? "width" : "height",
            C = _[k],
            V = y[k],
            $ = C > V ? _[A] - y[A] : _[k] - y[k],
            R =
              Math.sign($) > 0
                ? i.value
                  ? "right"
                  : "bottom"
                : Math.sign($) < 0
                ? i.value
                  ? "left"
                  : "top"
                : "center",
            L =
              (Math.abs($) + (Math.sign($) < 0 ? _[x] : y[x])) /
              Math.max(_[x], y[x]),
            D = _[x] / y[x],
            Y = 1.5;
          ya(
            w,
            {
              backgroundColor: [g, ""],
              transform: [
                `translate${S}(${$}px) scale${S}(${D})`,
                `translate${S}(${$ / Y}px) scale${S}(${(L - 1) / Y + 1})`,
                "",
              ],
              transformOrigin: Array(3).fill(R),
            },
            { duration: 225, easing: gr }
          );
        }
      }
      return (
        X(() => {
          const [d] = Lt(e, [
            "href",
            "to",
            "replace",
            "icon",
            "stacked",
            "prependIcon",
            "appendIcon",
            "ripple",
            "theme",
            "disabled",
            "selectedClass",
            "value",
            "color",
          ]);
          return m(
            St,
            ue(
              {
                _as: "VTab",
                symbol: np,
                ref: s,
                class: ["v-tab"],
                tabindex: o.value ? 0 : -1,
                role: "tab",
                "aria-selected": String(o.value),
                active: !1,
                block: e.fixed,
                maxWidth: e.fixed ? 300 : void 0,
                variant: "text",
                rounded: 0,
              },
              d,
              a,
              { "onGroup:selected": u }
            ),
            {
              default: () => [
                n.default ? n.default() : e.title,
                !e.hideSlider &&
                  m(
                    "div",
                    {
                      ref: c,
                      class: ["v-tab__slider", l.value],
                      style: r.value,
                    },
                    null
                  ),
              ],
            }
          );
        }),
        {}
      );
    },
  });
function ME(e) {
  return e
    ? e.map((t) => (typeof t == "string" ? { title: t, value: t } : t))
    : [];
}
const FE = Z({
  name: "VTabs",
  props: {
    alignTabs: { type: String, default: "start" },
    color: String,
    direction: { type: String, default: "horizontal" },
    fixedTabs: Boolean,
    items: { type: Array, default: () => [] },
    stacked: Boolean,
    bgColor: String,
    grow: Boolean,
    height: { type: [Number, String], default: void 0 },
    hideSlider: Boolean,
    sliderColor: String,
    modelValue: null,
    mandatory: { type: [Boolean, String], default: "force" },
    ...st(),
    ...be(),
  },
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const a = pe(e, "modelValue"),
      l = b(() => ME(e.items)),
      { densityClasses: r } = yt(e),
      { backgroundColorClasses: i, backgroundColorStyles: o } = tt(
        j(e, "bgColor")
      );
    return (
      it({
        VTab: {
          color: j(e, "color"),
          direction: j(e, "direction"),
          stacked: j(e, "stacked"),
          fixed: j(e, "fixedTabs"),
          sliderColor: j(e, "sliderColor"),
          hideSlider: j(e, "hideSlider"),
        },
      }),
      X(() =>
        m(
          tp,
          {
            modelValue: a.value,
            "onUpdate:modelValue": (s) => (a.value = s),
            class: [
              "v-tabs",
              `v-tabs--${e.direction}`,
              `v-tabs--align-tabs-${e.alignTabs}`,
              {
                "v-tabs--fixed-tabs": e.fixedTabs,
                "v-tabs--grow": e.grow,
                "v-tabs--stacked": e.stacked,
              },
              r.value,
              i.value,
            ],
            style: [{ "--v-tabs-height": ae(e.height) }, o.value],
            role: "tablist",
            symbol: np,
            mandatory: e.mandatory,
            direction: e.direction,
          },
          {
            default: () => [
              n.default
                ? n.default()
                : l.value.map((s) => m(ap, ue(s, { key: s.title }), null)),
            ],
          }
        )
      ),
      {}
    );
  },
});
const DE = Z({
  name: "VTable",
  props: {
    fixedHeader: Boolean,
    fixedFooter: Boolean,
    height: [Number, String],
    hover: Boolean,
    ...st(),
    ...be(),
    ...$e(),
  },
  setup(e, t) {
    let { slots: n } = t;
    const { themeClasses: a } = Be(e),
      { densityClasses: l } = yt(e);
    return (
      X(() => {
        var r, i;
        return m(
          e.tag,
          {
            class: [
              "v-table",
              {
                "v-table--fixed-height": !!e.height,
                "v-table--fixed-header": e.fixedHeader,
                "v-table--fixed-footer": e.fixedFooter,
                "v-table--has-top": !!n.top,
                "v-table--has-bottom": !!n.bottom,
                "v-table--hover": e.hover,
              },
              a.value,
              l.value,
            ],
          },
          {
            default: () => [
              (r = n.top) == null ? void 0 : r.call(n),
              n.default &&
                m(
                  "div",
                  {
                    class: "v-table__wrapper",
                    style: { height: ae(e.height) },
                  },
                  [m("table", null, [n.default()])]
                ),
              (i = n.bottom) == null ? void 0 : i.call(n),
            ],
          }
        );
      }),
      {}
    );
  },
});
const zE = Z({
  name: "VTextarea",
  directives: { Intersect: Or },
  inheritAttrs: !1,
  props: {
    autoGrow: Boolean,
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: Function,
    hint: String,
    persistentHint: Boolean,
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    noResize: Boolean,
    rows: {
      type: [Number, String],
      default: 5,
      validator: (e) => !isNaN(parseFloat(e)),
    },
    maxRows: {
      type: [Number, String],
      validator: (e) => !isNaN(parseFloat(e)),
    },
    suffix: String,
    ...zn(),
    ..._o(),
  },
  emits: {
    "click:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
  },
  setup(e, t) {
    let { attrs: n, emit: a, slots: l } = t;
    const r = pe(e, "modelValue"),
      { isFocused: i, focus: o, blur: s } = Ha(e),
      c = b(() =>
        typeof e.counterValue == "function"
          ? e.counterValue(r.value)
          : (r.value || "").toString().length
      ),
      u = b(() => {
        if (n.maxlength) return n.maxlength;
        if (
          !(
            !e.counter ||
            (typeof e.counter != "number" && typeof e.counter != "string")
          )
        )
          return e.counter;
      });
    function d(V, $) {
      var R, I;
      !e.autofocus ||
        !V ||
        (R = $[0].target) == null ||
        (I = R.focus) == null ||
        I.call(R);
    }
    const f = B(),
      v = B(),
      h = B(""),
      p = B(),
      w = b(() => i.value || e.persistentPlaceholder),
      g = b(() =>
        e.messages.length
          ? e.messages
          : w.value || e.persistentHint
          ? e.hint
          : ""
      );
    function _() {
      if (p.value !== document.activeElement) {
        var V;
        (V = p.value) == null || V.focus();
      }
      i.value || o();
    }
    function y(V) {
      _(), a("click:control", V);
    }
    function k(V) {
      V.stopPropagation(),
        _(),
        Ke(() => {
          (r.value = ""), Ii(e["onClick:clear"], V);
        });
    }
    function S(V) {
      r.value = V.target.value;
    }
    const A = B();
    function x() {
      !e.autoGrow ||
        Ke(() => {
          if (!A.value || !v.value) return;
          const V = getComputedStyle(A.value),
            $ = getComputedStyle(v.value.$el),
            R =
              parseFloat(V.getPropertyValue("--v-field-padding-top")) +
              parseFloat(V.getPropertyValue("--v-input-padding-top")) +
              parseFloat(V.getPropertyValue("--v-field-padding-bottom")),
            I = A.value.scrollHeight,
            L = parseFloat(V.lineHeight),
            D = Math.max(
              parseFloat(e.rows) * L + R,
              parseFloat($.getPropertyValue("--v-input-control-height"))
            ),
            Y = parseFloat(e.maxRows) * L + R || 1 / 0;
          h.value = ae(Pt(I != null ? I : 0, D, Y));
        });
    }
    _t(x),
      ce(r, x),
      ce(() => e.rows, x),
      ce(() => e.maxRows, x),
      ce(() => e.density, x);
    let C;
    return (
      ce(A, (V) => {
        if (V) (C = new ResizeObserver(x)), C.observe(A.value);
        else {
          var $;
          ($ = C) == null || $.disconnect();
        }
      }),
      At(() => {
        var V;
        (V = C) == null || V.disconnect();
      }),
      X(() => {
        const V = !!(l.counter || e.counter || e.counterValue),
          $ = !!(V || l.details),
          [R, I] = Ba(n),
          [{ modelValue: L, ...D }] = ra(e),
          [Y] = rc(e);
        return m(
          wn,
          ue(
            {
              ref: f,
              modelValue: r.value,
              "onUpdate:modelValue": (z) => (r.value = z),
              class: [
                "v-textarea v-text-field",
                {
                  "v-textarea--prefixed": e.prefix,
                  "v-textarea--suffixed": e.suffix,
                  "v-text-field--prefixed": e.prefix,
                  "v-text-field--suffixed": e.suffix,
                  "v-textarea--auto-grow": e.autoGrow,
                  "v-textarea--no-resize": e.noResize || e.autoGrow,
                  "v-text-field--flush-details": [
                    "plain",
                    "underlined",
                  ].includes(e.variant),
                },
              ],
              "onClick:prepend": e["onClick:prepend"],
              "onClick:append": e["onClick:append"],
            },
            R,
            D,
            { focused: i.value, messages: g.value }
          ),
          {
            ...l,
            default: (z) => {
              let { isDisabled: T, isDirty: F, isReadonly: J, isValid: K } = z;
              return m(
                Rr,
                ue(
                  {
                    ref: v,
                    style: { "--v-textarea-control-height": h.value },
                    "onClick:control": y,
                    "onClick:clear": k,
                    "onClick:prependInner": e["onClick:prependInner"],
                    "onClick:appendInner": e["onClick:appendInner"],
                    role: "textbox",
                  },
                  Y,
                  {
                    active: w.value || F.value,
                    dirty: F.value || e.dirty,
                    focused: i.value,
                    error: K.value === !1,
                  }
                ),
                {
                  ...l,
                  default: (le) => {
                    let {
                      props: { class: ie, ...we },
                    } = le;
                    return m(xe, null, [
                      e.prefix &&
                        m("span", { class: "v-text-field__prefix" }, [
                          e.prefix,
                        ]),
                      Le(
                        m(
                          "textarea",
                          ue(
                            {
                              ref: p,
                              class: ie,
                              value: r.value,
                              onInput: S,
                              autofocus: e.autofocus,
                              readonly: J.value,
                              disabled: T.value,
                              placeholder: e.placeholder,
                              rows: e.rows,
                              name: e.name,
                              onFocus: _,
                              onBlur: s,
                            },
                            we,
                            I
                          ),
                          null
                        ),
                        [[Rt("intersect"), { handler: d }, null, { once: !0 }]]
                      ),
                      e.autoGrow &&
                        Le(
                          m(
                            "textarea",
                            {
                              class: [ie, "v-textarea__sizer"],
                              "onUpdate:modelValue": (te) => (r.value = te),
                              ref: A,
                              readonly: !0,
                              "aria-hidden": "true",
                            },
                            null
                          ),
                          [[f0, r.value]]
                        ),
                      e.suffix &&
                        m("span", { class: "v-text-field__suffix" }, [
                          e.suffix,
                        ]),
                    ]);
                  },
                }
              );
            },
            details: $
              ? (z) => {
                  var T;
                  return m(xe, null, [
                    (T = l.details) == null ? void 0 : T.call(l, z),
                    V &&
                      m(xe, null, [
                        m("span", null, null),
                        m(
                          xo,
                          {
                            active: e.persistentCounter || i.value,
                            value: c.value,
                            max: u.value,
                          },
                          l.counter
                        ),
                      ]),
                  ]);
                }
              : void 0,
          }
        );
      }),
      cn({}, f, v, p)
    );
  },
});
const jE = Z({
  name: "VThemeProvider",
  props: { withBackground: Boolean, ...$e(), ...be() },
  setup(e, t) {
    let { slots: n } = t;
    const { themeClasses: a } = Be(e);
    return () => {
      var l, r;
      return e.withBackground
        ? m(
            e.tag,
            { class: ["v-theme-provider", a.value] },
            { default: () => [(r = n.default) == null ? void 0 : r.call(n)] }
          )
        : (l = n.default) == null
        ? void 0
        : l.call(n);
    };
  },
});
const HE = Z({
    name: "VTimeline",
    props: {
      align: {
        type: String,
        default: "center",
        validator: (e) => ["center", "start"].includes(e),
      },
      direction: {
        type: String,
        default: "vertical",
        validator: (e) => ["vertical", "horizontal"].includes(e),
      },
      justify: {
        type: String,
        default: "auto",
        validator: (e) => ["auto", "center"].includes(e),
      },
      side: {
        type: String,
        validator: (e) => e == null || ["start", "end"].includes(e),
      },
      lineInset: { type: [String, Number], default: 0 },
      lineThickness: { type: [String, Number], default: 2 },
      lineColor: String,
      truncateLine: {
        type: String,
        validator: (e) => ["start", "end", "both"].includes(e),
      },
      ...st(),
      ...be(),
      ...$e(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Be(e),
        { densityClasses: l } = yt(e);
      it({
        VTimelineDivider: { lineColor: j(e, "lineColor") },
        VTimelineItem: {
          density: j(e, "density"),
          lineInset: j(e, "lineInset"),
        },
      });
      const r = b(() => {
          const o = e.side ? e.side : e.density !== "default" ? "end" : null;
          return o && `v-timeline--side-${o}`;
        }),
        i = b(() => {
          const o = [
            "v-timeline--truncate-line-start",
            "v-timeline--truncate-line-end",
          ];
          switch (e.truncateLine) {
            case "both":
              return o;
            case "start":
              return o[0];
            case "end":
              return o[1];
            default:
              return null;
          }
        });
      return (
        X(() =>
          m(
            e.tag,
            {
              class: [
                "v-timeline",
                `v-timeline--${e.direction}`,
                `v-timeline--align-${e.align}`,
                `v-timeline--justify-${e.justify}`,
                i.value,
                { "v-timeline--inset-line": !!e.lineInset },
                a.value,
                l.value,
                r.value,
              ],
              style: { "--v-timeline-line-thickness": ae(e.lineThickness) },
            },
            n
          )
        ),
        {}
      );
    },
  }),
  UE = Z({
    name: "VTimelineDivider",
    props: {
      dotColor: String,
      fillDot: Boolean,
      hideDot: Boolean,
      icon: ge,
      iconColor: String,
      lineColor: String,
      ...Ye(),
      ...Dn(),
      ...rt(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { sizeClasses: a, sizeStyles: l } = Al(
          e,
          "v-timeline-divider__dot"
        ),
        { backgroundColorStyles: r, backgroundColorClasses: i } = tt(
          j(e, "dotColor")
        ),
        { roundedClasses: o } = nt(e, "v-timeline-divider__dot"),
        { elevationClasses: s } = gt(e),
        { backgroundColorClasses: c, backgroundColorStyles: u } = tt(
          j(e, "lineColor")
        );
      return (
        it({
          VIcon: {
            color: j(e, "iconColor"),
            icon: j(e, "icon"),
            size: j(e, "size"),
          },
        }),
        X(() => {
          var f;
          var d;
          return m(
            "div",
            {
              class: [
                "v-timeline-divider",
                { "v-timeline-divider--fill-dot": e.fillDot },
              ],
            },
            [
              m(
                "div",
                {
                  class: ["v-timeline-divider__before", c.value],
                  style: u.value,
                },
                null
              ),
              !e.hideDot &&
                m(
                  "div",
                  {
                    key: "dot",
                    class: [
                      "v-timeline-divider__dot",
                      s.value,
                      o.value,
                      a.value,
                    ],
                    style: l.value,
                  },
                  [
                    m(
                      "div",
                      {
                        class: [
                          "v-timeline-divider__inner-dot",
                          i.value,
                          o.value,
                        ],
                        style: r.value,
                      },
                      [
                        (f = (d = n.default) == null ? void 0 : d.call(n)) !=
                        null
                          ? f
                          : e.icon
                          ? m(at, null, null)
                          : void 0,
                      ]
                    ),
                  ]
                ),
              m(
                "div",
                {
                  class: ["v-timeline-divider__after", c.value],
                  style: u.value,
                },
                null
              ),
            ]
          );
        }),
        {}
      );
    },
  }),
  WE = Z({
    name: "VTimelineItem",
    props: {
      density: String,
      dotColor: String,
      fillDot: Boolean,
      hideDot: Boolean,
      hideOpposite: { type: Boolean, default: void 0 },
      icon: ge,
      iconColor: String,
      lineInset: [Number, String],
      ...Ye(),
      ...rt(),
      ...Dn(),
      ...be(),
      ...sn(),
    },
    setup(e, t) {
      let { slots: n } = t;
      const { dimensionStyles: a } = un(e),
        l = B(0),
        r = B();
      return (
        ce(
          r,
          (i) => {
            var s;
            var o;
            !i ||
              (l.value =
                (s =
                  (o = i.$el.querySelector(".v-timeline-divider__dot")) == null
                    ? void 0
                    : o.getBoundingClientRect().width) != null
                  ? s
                  : 0);
          },
          { flush: "post" }
        ),
        X(() => {
          var i, o;
          return m(
            "div",
            {
              class: [
                "v-timeline-item",
                { "v-timeline-item--fill-dot": e.fillDot },
              ],
              style: {
                "--v-timeline-dot-size": ae(l.value),
                "--v-timeline-line-inset": e.lineInset
                  ? `calc(var(--v-timeline-dot-size) / 2 + ${ae(e.lineInset)})`
                  : ae(0),
              },
            },
            [
              m("div", { class: "v-timeline-item__body", style: a.value }, [
                (i = n.default) == null ? void 0 : i.call(n),
              ]),
              m(
                UE,
                {
                  ref: r,
                  hideDot: e.hideDot,
                  icon: e.icon,
                  iconColor: e.iconColor,
                  size: e.size,
                  elevation: e.elevation,
                  dotColor: e.dotColor,
                  fillDot: e.fillDot,
                  rounded: e.rounded,
                },
                { default: n.icon }
              ),
              e.density !== "compact" &&
                m("div", { class: "v-timeline-item__opposite" }, [
                  !e.hideOpposite &&
                    ((o = n.opposite) == null ? void 0 : o.call(n)),
                ]),
            ]
          );
        }),
        {}
      );
    },
  });
const YE = je()({
    name: "VTooltip",
    props: {
      id: String,
      text: String,
      ...La(
        Mr({
          closeOnBack: !1,
          location: "end",
          locationStrategy: "connected",
          minWidth: 0,
          offset: 10,
          openOnClick: !1,
          openOnHover: !0,
          origin: "auto",
          scrim: !1,
          scrollStrategy: "reposition",
          transition: !1,
        }),
        ["absolute", "persistent", "eager"]
      ),
    },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = pe(e, "modelValue"),
        { scopeId: l } = Eo(),
        r = pt(),
        i = b(() => e.id || `v-tooltip-${r}`),
        o = B(),
        s = b(() =>
          e.location.split(" ").length > 1 ? e.location : e.location + " center"
        ),
        c = b(() =>
          e.origin === "auto" ||
          e.origin === "overlap" ||
          e.origin.split(" ").length > 1 ||
          e.location.split(" ").length > 1
            ? e.origin
            : e.origin + " center"
        ),
        u = b(() =>
          e.transition
            ? e.transition
            : a.value
            ? "scale-transition"
            : "fade-transition"
        );
      return (
        X(() => {
          const [d] = Ao(e);
          return m(
            Ol,
            ue(
              { ref: o, class: ["v-tooltip"], id: i.value },
              d,
              {
                modelValue: a.value,
                "onUpdate:modelValue": (f) => (a.value = f),
                transition: u.value,
                absolute: !0,
                location: s.value,
                origin: c.value,
                persistent: !0,
                role: "tooltip",
                eager: !0,
                activatorProps: ue(
                  { "aria-describedby": i.value },
                  e.activatorProps
                ),
              },
              l
            ),
            {
              activator: n.activator,
              default: function () {
                var w;
                for (
                  var f, v = arguments.length, h = new Array(v), p = 0;
                  p < v;
                  p++
                )
                  h[p] = arguments[p];
                return (w =
                  (f = n.default) == null ? void 0 : f.call(n, ...h)) != null
                  ? w
                  : e.text;
              },
            }
          );
        }),
        cn({}, o)
      );
    },
  }),
  GE = Z({
    name: "VValidation",
    props: { ...Uh() },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = Wh(e, "validation");
      return () => {
        var l;
        return (l = n.default) == null ? void 0 : l.call(n, a);
      };
    },
  });
var KE = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      VApp: vk,
      VAppBar: Vk,
      VAppBarNavIcon: Uk,
      VAppBarTitle: Yk,
      VAlert: Kk,
      VAlertTitle: Dh,
      VAutocomplete: UA,
      VAvatar: ea,
      VBadge: WA,
      VBanner: YA,
      VBannerActions: xg,
      VBannerText: wg,
      VBottomNavigation: GA,
      VBreadcrumbs: KA,
      VBreadcrumbsItem: Cg,
      VBreadcrumbsDivider: Sg,
      VBtn: St,
      VBtnGroup: $h,
      VBtnToggle: Tk,
      VCard: qA,
      VCardActions: kg,
      VCardItem: Vg,
      VCardSubtitle: Ag,
      VCardText: $g,
      VCardTitle: Eg,
      VCarousel: a2,
      VCarouselItem: l2,
      VCheckbox: nA,
      VCheckboxBtn: Pl,
      VChip: Nr,
      VChipGroup: lA,
      VCode: r2,
      VColorPicker: F2,
      VCombobox: z2,
      VCounter: xo,
      VDefaultsProvider: Ne,
      VDialog: j2,
      VDivider: Jh,
      VExpansionPanels: U2,
      VExpansionPanel: W2,
      VExpansionPanelText: jg,
      VExpansionPanelTitle: zg,
      VField: Rr,
      VFieldLabel: Wl,
      VFileInput: Y2,
      VFooter: G2,
      VForm: K2,
      VContainer: q2,
      VCol: Z2,
      VRow: rE,
      VSpacer: iE,
      VHover: oE,
      VIcon: at,
      VComponentIcon: vh,
      VSvgIcon: mh,
      VLigatureIcon: jC,
      VClassIcon: qu,
      VImg: Sl,
      VInput: wn,
      VItemGroup: sE,
      VItem: uE,
      VKbd: cE,
      VLabel: Il,
      VLayout: dE,
      VLayoutItem: fE,
      VLazy: vE,
      VList: Co,
      VListGroup: uc,
      VListImg: yA,
      VListItem: Pn,
      VListItemAction: bA,
      VListItemMedia: _A,
      VListItemSubtitle: lg,
      VListItemTitle: rg,
      VListSubheader: ig,
      VLocaleProvider: mE,
      VMain: hE,
      VMenu: Vo,
      VMessages: jh,
      VNavigationDrawer: SE,
      VNoSsr: CE,
      VOverlay: Ol,
      VPagination: AE,
      VParallax: VE,
      VProgressCircular: tc,
      VProgressLinear: nc,
      VRadio: $E,
      VRadioGroup: IE,
      VRangeSlider: PE,
      VRating: OE,
      VResponsive: Ah,
      VSelect: DA,
      VSelectionControl: Br,
      VSelectionControlGroup: Gh,
      VSheet: Fg,
      VSlideGroup: tp,
      VSlideGroupItem: RE,
      VSlider: qs,
      VSnackbar: LE,
      VSwitch: BE,
      VSystemBar: NE,
      VTabs: FE,
      VTab: ap,
      VTable: DE,
      VTextarea: zE,
      VTextField: Lr,
      VThemeProvider: jE,
      VTimeline: HE,
      VTimelineItem: WE,
      VToolbar: Li,
      VToolbarTitle: Ri,
      VToolbarItems: Wk,
      VTooltip: YE,
      VValidation: GE,
      VWindow: Og,
      VWindowItem: Tg,
      VDialogTransition: go,
      VFabTransition: mk,
      VDialogBottomTransition: hk,
      VDialogTopTransition: gk,
      VFadeTransition: Ns,
      VScaleTransition: kh,
      VScrollXTransition: pk,
      VScrollXReverseTransition: yk,
      VScrollYTransition: bk,
      VScrollYReverseTransition: _k,
      VSlideXTransition: xk,
      VSlideXReverseTransition: wk,
      VSlideYTransition: Xu,
      VSlideYReverseTransition: Sk,
      VExpandTransition: po,
      VExpandXTransition: Ju,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function qE(e, t) {
  var d, f, v, h;
  const n = t.modifiers || {},
    a = t.value,
    { once: l, immediate: r, ...i } = n,
    o = !Object.keys(i).length,
    { handler: s, options: c } =
      typeof a == "object"
        ? a
        : {
            handler: a,
            options: {
              attributes: (d = i == null ? void 0 : i.attr) != null ? d : o,
              characterData: (f = i == null ? void 0 : i.char) != null ? f : o,
              childList: (v = i == null ? void 0 : i.child) != null ? v : o,
              subtree: (h = i == null ? void 0 : i.sub) != null ? h : o,
            },
          },
    u = new MutationObserver(function () {
      let p =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        w = arguments.length > 1 ? arguments[1] : void 0;
      s == null || s(p, w), l && lp(e, t);
    });
  r && (s == null || s([], u)),
    (e._mutate = Object(e._mutate)),
    (e._mutate[t.instance.$.uid] = { observer: u }),
    u.observe(e, c);
}
function lp(e, t) {
  var n;
  !((n = e._mutate) != null && n[t.instance.$.uid]) ||
    (e._mutate[t.instance.$.uid].observer.disconnect(),
    delete e._mutate[t.instance.$.uid]);
}
const XE = { mounted: qE, unmounted: lp };
function JE(e, t) {
  var n, a;
  const l = t.value,
    r = { passive: !((n = t.modifiers) != null && n.active) };
  window.addEventListener("resize", l, r),
    (e._onResize = Object(e._onResize)),
    (e._onResize[t.instance.$.uid] = { handler: l, options: r }),
    ((a = t.modifiers) != null && a.quiet) || l();
}
function ZE(e, t) {
  var n;
  if (!((n = e._onResize) != null && n[t.instance.$.uid])) return;
  const { handler: a, options: l } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", a, l),
    delete e._onResize[t.instance.$.uid];
}
const QE = { mounted: JE, unmounted: ZE };
function rp(e, t) {
  var o;
  const { self: n = !1 } = (o = t.modifiers) != null ? o : {},
    a = t.value,
    l = (typeof a == "object" && a.options) || { passive: !0 },
    r = typeof a == "function" || "handleEvent" in a ? a : a.handler,
    i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  !i ||
    (i.addEventListener("scroll", r, l),
    (e._onScroll = Object(e._onScroll)),
    (e._onScroll[t.instance.$.uid] = {
      handler: r,
      options: l,
      target: n ? void 0 : i,
    }));
}
function ip(e, t) {
  var n;
  if (!((n = e._onScroll) != null && n[t.instance.$.uid])) return;
  const {
    handler: a,
    options: l,
    target: r = e,
  } = e._onScroll[t.instance.$.uid];
  r.removeEventListener("scroll", a, l), delete e._onScroll[t.instance.$.uid];
}
function eV(e, t) {
  t.value !== t.oldValue && (ip(e, t), rp(e, t));
}
const tV = { mounted: rp, unmounted: ip, updated: eV };
var nV = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      ClickOutside: yg,
      Intersect: Or,
      Mutate: XE,
      Resize: QE,
      Ripple: la,
      Scroll: tV,
      Touch: vc,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Lf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lf(Object(n), !0).forEach(function (a) {
          ot(e, a, n[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Lf(Object(n)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
        });
  }
  return e;
}
function Mi(e) {
  return (
    (Mi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mi(e)
  );
}
function aV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function lV(e, t, n) {
  return (
    t && Bf(e.prototype, t),
    n && Bf(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ot(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function bc(e, t) {
  return iV(e) || sV(e, t) || op(e, t) || cV();
}
function Fr(e) {
  return rV(e) || oV(e) || op(e) || uV();
}
function rV(e) {
  if (Array.isArray(e)) return Xs(e);
}
function iV(e) {
  if (Array.isArray(e)) return e;
}
function oV(e) {
  if (
    (typeof Symbol != "undefined" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function sV(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol != "undefined" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var a = [],
      l = !0,
      r = !1,
      i,
      o;
    try {
      for (
        n = n.call(e);
        !(l = (i = n.next()).done) && (a.push(i.value), !(t && a.length === t));
        l = !0
      );
    } catch (s) {
      (r = !0), (o = s);
    } finally {
      try {
        !l && n.return != null && n.return();
      } finally {
        if (r) throw o;
      }
    }
    return a;
  }
}
function op(e, t) {
  if (e) {
    if (typeof e == "string") return Xs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xs(e, t);
  }
}
function Xs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function uV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Nf = function () {},
  _c = {},
  sp = {},
  up = null,
  cp = { mark: Nf, measure: Nf };
try {
  typeof window != "undefined" && (_c = window),
    typeof document != "undefined" && (sp = document),
    typeof MutationObserver != "undefined" && (up = MutationObserver),
    typeof performance != "undefined" && (cp = performance);
} catch {}
var dV = _c.navigator || {},
  Mf = dV.userAgent,
  Ff = Mf === void 0 ? "" : Mf,
  ta = _c,
  We = sp,
  Df = up,
  Qr = cp;
ta.document;
var jn =
    !!We.documentElement &&
    !!We.head &&
    typeof We.addEventListener == "function" &&
    typeof We.createElement == "function",
  dp = ~Ff.indexOf("MSIE") || ~Ff.indexOf("Trident/"),
  ei,
  ti,
  ni,
  ai,
  li,
  On = "___FONT_AWESOME___",
  Js = 16,
  fp = "fa",
  vp = "svg-inline--fa",
  Va = "data-fa-i2svg",
  Zs = "data-fa-pseudo-element",
  fV = "data-fa-pseudo-element-pending",
  xc = "data-prefix",
  wc = "data-icon",
  zf = "fontawesome-i2svg",
  vV = "async",
  mV = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  mp = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  Ue = "classic",
  Ze = "sharp",
  Sc = [Ue, Ze];
function Dr(e) {
  return new Proxy(e, {
    get: function (n, a) {
      return a in n ? n[a] : n[Ue];
    },
  });
}
var Sr = Dr(
    ((ei = {}),
    ot(ei, Ue, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
    }),
    ot(ei, Ze, { fa: "solid", fass: "solid", "fa-solid": "solid" }),
    ei)
  ),
  Cr = Dr(
    ((ti = {}),
    ot(ti, Ue, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    ot(ti, Ze, { solid: "fass" }),
    ti)
  ),
  kr = Dr(
    ((ni = {}),
    ot(ni, Ue, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    ot(ni, Ze, { fass: "fa-solid" }),
    ni)
  ),
  hV = Dr(
    ((ai = {}),
    ot(ai, Ue, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    ot(ai, Ze, { "fa-solid": "fass" }),
    ai)
  ),
  gV = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,
  hp = "fa-layers-text",
  pV =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  yV = Dr(
    ((li = {}),
    ot(li, Ue, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    ot(li, Ze, { 900: "fass" }),
    li)
  ),
  gp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  bV = gp.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  _V = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  xa = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Ar = new Set();
Object.keys(Cr[Ue]).map(Ar.add.bind(Ar));
Object.keys(Cr[Ze]).map(Ar.add.bind(Ar));
var xV = []
    .concat(Sc, Fr(Ar), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      xa.GROUP,
      xa.SWAP_OPACITY,
      xa.PRIMARY,
      xa.SECONDARY,
    ])
    .concat(
      gp.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      bV.map(function (e) {
        return "w-".concat(e);
      })
    ),
  nr = ta.FontAwesomeConfig || {};
function wV(e) {
  var t = We.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function SV(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (We && typeof We.querySelector == "function") {
  var CV = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  CV.forEach(function (e) {
    var t = bc(e, 2),
      n = t[0],
      a = t[1],
      l = SV(wV(n));
    l != null && (nr[a] = l);
  });
}
var pp = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: fp,
  replacementClass: vp,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
nr.familyPrefix && (nr.cssPrefix = nr.familyPrefix);
var yl = se(se({}, pp), nr);
yl.autoReplaceSvg || (yl.observeMutations = !1);
var fe = {};
Object.keys(pp).forEach(function (e) {
  Object.defineProperty(fe, e, {
    enumerable: !0,
    set: function (n) {
      (yl[e] = n),
        ar.forEach(function (a) {
          return a(fe);
        });
    },
    get: function () {
      return yl[e];
    },
  });
});
Object.defineProperty(fe, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (yl.cssPrefix = t),
      ar.forEach(function (n) {
        return n(fe);
      });
  },
  get: function () {
    return yl.cssPrefix;
  },
});
ta.FontAwesomeConfig = fe;
var ar = [];
function kV(e) {
  return (
    ar.push(e),
    function () {
      ar.splice(ar.indexOf(e), 1);
    }
  );
}
var Yn = Js,
  gn = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function AV(e) {
  if (!(!e || !jn)) {
    var t = We.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = We.head.childNodes, a = null, l = n.length - 1; l > -1; l--) {
      var r = n[l],
        i = (r.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (a = r);
    }
    return We.head.insertBefore(t, a), e;
  }
}
var EV = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Er() {
  for (var e = 12, t = ""; e-- > 0; ) t += EV[(Math.random() * 62) | 0];
  return t;
}
function Tl(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Cc(e) {
  return e.classList
    ? Tl(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function yp(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function VV(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(yp(e[n]), '" ');
    }, "")
    .trim();
}
function $o(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function kc(e) {
  return (
    e.size !== gn.size ||
    e.x !== gn.x ||
    e.y !== gn.y ||
    e.rotate !== gn.rotate ||
    e.flipX ||
    e.flipY
  );
}
function $V(e) {
  var t = e.transform,
    n = e.containerWidth,
    a = e.iconWidth,
    l = { transform: "translate(".concat(n / 2, " 256)") },
    r = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    i = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    o = "rotate(".concat(t.rotate, " 0 0)"),
    s = { transform: "".concat(r, " ").concat(i, " ").concat(o) },
    c = { transform: "translate(".concat((a / 2) * -1, " -256)") };
  return { outer: l, inner: s, path: c };
}
function IV(e) {
  var t = e.transform,
    n = e.width,
    a = n === void 0 ? Js : n,
    l = e.height,
    r = l === void 0 ? Js : l,
    i = e.startCentered,
    o = i === void 0 ? !1 : i,
    s = "";
  return (
    o && dp
      ? (s += "translate("
          .concat(t.x / Yn - a / 2, "em, ")
          .concat(t.y / Yn - r / 2, "em) "))
      : o
      ? (s += "translate(calc(-50% + "
          .concat(t.x / Yn, "em), calc(-50% + ")
          .concat(t.y / Yn, "em)) "))
      : (s += "translate(".concat(t.x / Yn, "em, ").concat(t.y / Yn, "em) ")),
    (s += "scale("
      .concat((t.size / Yn) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Yn) * (t.flipY ? -1 : 1), ") ")),
    (s += "rotate(".concat(t.rotate, "deg) ")),
    s
  );
}
var PV = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function bp() {
  var e = fp,
    t = vp,
    n = fe.cssPrefix,
    a = fe.replacementClass,
    l = PV;
  if (n !== e || a !== t) {
    var r = new RegExp("\\.".concat(e, "\\-"), "g"),
      i = new RegExp("\\--".concat(e, "\\-"), "g"),
      o = new RegExp("\\.".concat(t), "g");
    l = l
      .replace(r, ".".concat(n, "-"))
      .replace(i, "--".concat(n, "-"))
      .replace(o, ".".concat(a));
  }
  return l;
}
var jf = !1;
function es() {
  fe.autoAddCss && !jf && (AV(bp()), (jf = !0));
}
var OV = {
    mixout: function () {
      return { dom: { css: bp, insertCss: es } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          es();
        },
        beforeI2svg: function () {
          es();
        },
      };
    },
  },
  Tn = ta || {};
Tn[On] || (Tn[On] = {});
Tn[On].styles || (Tn[On].styles = {});
Tn[On].hooks || (Tn[On].hooks = {});
Tn[On].shims || (Tn[On].shims = []);
var nn = Tn[On],
  _p = [],
  TV = function e() {
    We.removeEventListener("DOMContentLoaded", e),
      (Fi = 1),
      _p.map(function (t) {
        return t();
      });
  },
  Fi = !1;
jn &&
  ((Fi = (We.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    We.readyState
  )),
  Fi || We.addEventListener("DOMContentLoaded", TV));
function RV(e) {
  !jn || (Fi ? setTimeout(e, 0) : _p.push(e));
}
function zr(e) {
  var t = e.tag,
    n = e.attributes,
    a = n === void 0 ? {} : n,
    l = e.children,
    r = l === void 0 ? [] : l;
  return typeof e == "string"
    ? yp(e)
    : "<"
        .concat(t, " ")
        .concat(VV(a), ">")
        .concat(r.map(zr).join(""), "</")
        .concat(t, ">");
}
function Hf(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var LV = function (t, n) {
    return function (a, l, r, i) {
      return t.call(n, a, l, r, i);
    };
  },
  ts = function (t, n, a, l) {
    var r = Object.keys(t),
      i = r.length,
      o = l !== void 0 ? LV(n, l) : n,
      s,
      c,
      u;
    for (
      a === void 0 ? ((s = 1), (u = t[r[0]])) : ((s = 0), (u = a));
      s < i;
      s++
    )
      (c = r[s]), (u = o(u, t[c], c, t));
    return u;
  };
function BV(e) {
  for (var t = [], n = 0, a = e.length; n < a; ) {
    var l = e.charCodeAt(n++);
    if (l >= 55296 && l <= 56319 && n < a) {
      var r = e.charCodeAt(n++);
      (r & 64512) == 56320
        ? t.push(((l & 1023) << 10) + (r & 1023) + 65536)
        : (t.push(l), n--);
    } else t.push(l);
  }
  return t;
}
function Qs(e) {
  var t = BV(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function NV(e, t) {
  var n = e.length,
    a = e.charCodeAt(t),
    l;
  return a >= 55296 &&
    a <= 56319 &&
    n > t + 1 &&
    ((l = e.charCodeAt(t + 1)), l >= 56320 && l <= 57343)
    ? (a - 55296) * 1024 + l - 56320 + 65536
    : a;
}
function Uf(e) {
  return Object.keys(e).reduce(function (t, n) {
    var a = e[n],
      l = !!a.icon;
    return l ? (t[a.iconName] = a.icon) : (t[n] = a), t;
  }, {});
}
function eu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    a = n.skipHooks,
    l = a === void 0 ? !1 : a,
    r = Uf(t);
  typeof nn.hooks.addPack == "function" && !l
    ? nn.hooks.addPack(e, Uf(t))
    : (nn.styles[e] = se(se({}, nn.styles[e] || {}), r)),
    e === "fas" && eu("fa", t);
}
var ri,
  ii,
  oi,
  nl = nn.styles,
  MV = nn.shims,
  FV =
    ((ri = {}),
    ot(ri, Ue, Object.values(kr[Ue])),
    ot(ri, Ze, Object.values(kr[Ze])),
    ri),
  Ac = null,
  xp = {},
  wp = {},
  Sp = {},
  Cp = {},
  kp = {},
  DV =
    ((ii = {}),
    ot(ii, Ue, Object.keys(Sr[Ue])),
    ot(ii, Ze, Object.keys(Sr[Ze])),
    ii);
function zV(e) {
  return ~xV.indexOf(e);
}
function jV(e, t) {
  var n = t.split("-"),
    a = n[0],
    l = n.slice(1).join("-");
  return a === e && l !== "" && !zV(l) ? l : null;
}
var Ap = function () {
  var t = function (r) {
    return ts(
      nl,
      function (i, o, s) {
        return (i[s] = ts(o, r, {})), i;
      },
      {}
    );
  };
  (xp = t(function (l, r, i) {
    if ((r[3] && (l[r[3]] = i), r[2])) {
      var o = r[2].filter(function (s) {
        return typeof s == "number";
      });
      o.forEach(function (s) {
        l[s.toString(16)] = i;
      });
    }
    return l;
  })),
    (wp = t(function (l, r, i) {
      if (((l[i] = i), r[2])) {
        var o = r[2].filter(function (s) {
          return typeof s == "string";
        });
        o.forEach(function (s) {
          l[s] = i;
        });
      }
      return l;
    })),
    (kp = t(function (l, r, i) {
      var o = r[2];
      return (
        (l[i] = i),
        o.forEach(function (s) {
          l[s] = i;
        }),
        l
      );
    }));
  var n = "far" in nl || fe.autoFetchSvg,
    a = ts(
      MV,
      function (l, r) {
        var i = r[0],
          o = r[1],
          s = r[2];
        return (
          o === "far" && !n && (o = "fas"),
          typeof i == "string" && (l.names[i] = { prefix: o, iconName: s }),
          typeof i == "number" &&
            (l.unicodes[i.toString(16)] = { prefix: o, iconName: s }),
          l
        );
      },
      { names: {}, unicodes: {} }
    );
  (Sp = a.names),
    (Cp = a.unicodes),
    (Ac = Io(fe.styleDefault, { family: fe.familyDefault }));
};
kV(function (e) {
  Ac = Io(e.styleDefault, { family: fe.familyDefault });
});
Ap();
function Ec(e, t) {
  return (xp[e] || {})[t];
}
function HV(e, t) {
  return (wp[e] || {})[t];
}
function wa(e, t) {
  return (kp[e] || {})[t];
}
function Ep(e) {
  return Sp[e] || { prefix: null, iconName: null };
}
function UV(e) {
  var t = Cp[e],
    n = Ec("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function na() {
  return Ac;
}
var Vc = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function Io(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    a = n === void 0 ? Ue : n,
    l = Sr[a][e],
    r = Cr[a][e] || Cr[a][l],
    i = e in nn.styles ? e : null;
  return r || i || null;
}
var Wf =
  ((oi = {}),
  ot(oi, Ue, Object.keys(kr[Ue])),
  ot(oi, Ze, Object.keys(kr[Ze])),
  oi);
function Po(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    a = n.skipLookups,
    l = a === void 0 ? !1 : a,
    r =
      ((t = {}),
      ot(t, Ue, "".concat(fe.cssPrefix, "-").concat(Ue)),
      ot(t, Ze, "".concat(fe.cssPrefix, "-").concat(Ze)),
      t),
    i = null,
    o = Ue;
  (e.includes(r[Ue]) ||
    e.some(function (c) {
      return Wf[Ue].includes(c);
    })) &&
    (o = Ue),
    (e.includes(r[Ze]) ||
      e.some(function (c) {
        return Wf[Ze].includes(c);
      })) &&
      (o = Ze);
  var s = e.reduce(function (c, u) {
    var d = jV(fe.cssPrefix, u);
    if (
      (nl[u]
        ? ((u = FV[o].includes(u) ? hV[o][u] : u), (i = u), (c.prefix = u))
        : DV[o].indexOf(u) > -1
        ? ((i = u), (c.prefix = Io(u, { family: o })))
        : d
        ? (c.iconName = d)
        : u !== fe.replacementClass &&
          u !== r[Ue] &&
          u !== r[Ze] &&
          c.rest.push(u),
      !l && c.prefix && c.iconName)
    ) {
      var f = i === "fa" ? Ep(c.iconName) : {},
        v = wa(c.prefix, c.iconName);
      f.prefix && (i = null),
        (c.iconName = f.iconName || v || c.iconName),
        (c.prefix = f.prefix || c.prefix),
        c.prefix === "far" &&
          !nl.far &&
          nl.fas &&
          !fe.autoFetchSvg &&
          (c.prefix = "fas");
    }
    return c;
  }, Vc());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
    !s.prefix &&
      o === Ze &&
      (nl.fass || fe.autoFetchSvg) &&
      ((s.prefix = "fass"),
      (s.iconName = wa(s.prefix, s.iconName) || s.iconName)),
    (s.prefix === "fa" || i === "fa") && (s.prefix = na() || "fas"),
    s
  );
}
var WV = (function () {
    function e() {
      aV(this, e), (this.definitions = {});
    }
    return (
      lV(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, a = arguments.length, l = new Array(a), r = 0;
              r < a;
              r++
            )
              l[r] = arguments[r];
            var i = l.reduce(this._pullDefinitions, {});
            Object.keys(i).forEach(function (o) {
              (n.definitions[o] = se(se({}, n.definitions[o] || {}), i[o])),
                eu(o, i[o]);
              var s = kr[Ue][o];
              s && eu(s, i[o]), Ap();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, a) {
            var l = a.prefix && a.iconName && a.icon ? { 0: a } : a;
            return (
              Object.keys(l).map(function (r) {
                var i = l[r],
                  o = i.prefix,
                  s = i.iconName,
                  c = i.icon,
                  u = c[2];
                n[o] || (n[o] = {}),
                  u.length > 0 &&
                    u.forEach(function (d) {
                      typeof d == "string" && (n[o][d] = c);
                    }),
                  (n[o][s] = c);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Yf = [],
  al = {},
  sl = {},
  YV = Object.keys(sl);
function GV(e, t) {
  var n = t.mixoutsTo;
  return (
    (Yf = e),
    (al = {}),
    Object.keys(sl).forEach(function (a) {
      YV.indexOf(a) === -1 && delete sl[a];
    }),
    Yf.forEach(function (a) {
      var l = a.mixout ? a.mixout() : {};
      if (
        (Object.keys(l).forEach(function (i) {
          typeof l[i] == "function" && (n[i] = l[i]),
            Mi(l[i]) === "object" &&
              Object.keys(l[i]).forEach(function (o) {
                n[i] || (n[i] = {}), (n[i][o] = l[i][o]);
              });
        }),
        a.hooks)
      ) {
        var r = a.hooks();
        Object.keys(r).forEach(function (i) {
          al[i] || (al[i] = []), al[i].push(r[i]);
        });
      }
      a.provides && a.provides(sl);
    }),
    n
  );
}
function tu(e, t) {
  for (
    var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), l = 2;
    l < n;
    l++
  )
    a[l - 2] = arguments[l];
  var r = al[e] || [];
  return (
    r.forEach(function (i) {
      t = i.apply(null, [t].concat(a));
    }),
    t
  );
}
function $a(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
    a < t;
    a++
  )
    n[a - 1] = arguments[a];
  var l = al[e] || [];
  l.forEach(function (r) {
    r.apply(null, n);
  });
}
function Rn() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return sl[e] ? sl[e].apply(null, t) : void 0;
}
function nu(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || na();
  if (t)
    return (t = wa(n, t) || t), Hf(Vp.definitions, n, t) || Hf(nn.styles, n, t);
}
var Vp = new WV(),
  KV = function () {
    (fe.autoReplaceSvg = !1), (fe.observeMutations = !1), $a("noAuto");
  },
  qV = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return jn
        ? ($a("beforeI2svg", t), Rn("pseudoElements2svg", t), Rn("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      fe.autoReplaceSvg === !1 && (fe.autoReplaceSvg = !0),
        (fe.observeMutations = !0),
        RV(function () {
          JV({ autoReplaceSvgRoot: n }), $a("watch", t);
        });
    },
  },
  XV = {
    icon: function (t) {
      if (t === null) return null;
      if (Mi(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: wa(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          a = Io(t[0]);
        return { prefix: a, iconName: wa(a, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(fe.cssPrefix, "-")) > -1 || t.match(gV))
      ) {
        var l = Po(t.split(" "), { skipLookups: !0 });
        return {
          prefix: l.prefix || na(),
          iconName: wa(l.prefix, l.iconName) || l.iconName,
        };
      }
      if (typeof t == "string") {
        var r = na();
        return { prefix: r, iconName: wa(r, t) || t };
      }
    },
  },
  Mt = {
    noAuto: KV,
    config: fe,
    dom: qV,
    parse: XV,
    library: Vp,
    findIconDefinition: nu,
    toHtml: zr,
  },
  JV = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      a = n === void 0 ? We : n;
    (Object.keys(nn.styles).length > 0 || fe.autoFetchSvg) &&
      jn &&
      fe.autoReplaceSvg &&
      Mt.dom.i2svg({ node: a });
  };
function Oo(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (a) {
          return zr(a);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (jn) {
          var a = We.createElement("div");
          return (a.innerHTML = e.html), a.children;
        }
      },
    }),
    e
  );
}
function ZV(e) {
  var t = e.children,
    n = e.main,
    a = e.mask,
    l = e.attributes,
    r = e.styles,
    i = e.transform;
  if (kc(i) && n.found && !a.found) {
    var o = n.width,
      s = n.height,
      c = { x: o / s / 2, y: 0.5 };
    l.style = $o(
      se(
        se({}, r),
        {},
        {
          "transform-origin": ""
            .concat(c.x + i.x / 16, "em ")
            .concat(c.y + i.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: l, children: t }];
}
function QV(e) {
  var t = e.prefix,
    n = e.iconName,
    a = e.children,
    l = e.attributes,
    r = e.symbol,
    i = r === !0 ? "".concat(t, "-").concat(fe.cssPrefix, "-").concat(n) : r;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        {
          tag: "symbol",
          attributes: se(se({}, l), {}, { id: i }),
          children: a,
        },
      ],
    },
  ];
}
function $c(e) {
  var t = e.icons,
    n = t.main,
    a = t.mask,
    l = e.prefix,
    r = e.iconName,
    i = e.transform,
    o = e.symbol,
    s = e.title,
    c = e.maskId,
    u = e.titleId,
    d = e.extra,
    f = e.watchable,
    v = f === void 0 ? !1 : f,
    h = a.found ? a : n,
    p = h.width,
    w = h.height,
    g = l === "fak",
    _ = [fe.replacementClass, r ? "".concat(fe.cssPrefix, "-").concat(r) : ""]
      .filter(function (V) {
        return d.classes.indexOf(V) === -1;
      })
      .filter(function (V) {
        return V !== "" || !!V;
      })
      .concat(d.classes)
      .join(" "),
    y = {
      children: [],
      attributes: se(
        se({}, d.attributes),
        {},
        {
          "data-prefix": l,
          "data-icon": r,
          class: _,
          role: d.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(p, " ").concat(w),
        }
      ),
    },
    k =
      g && !~d.classes.indexOf("fa-fw")
        ? { width: "".concat((p / w) * 16 * 0.0625, "em") }
        : {};
  v && (y.attributes[Va] = ""),
    s &&
      (y.children.push({
        tag: "title",
        attributes: {
          id: y.attributes["aria-labelledby"] || "title-".concat(u || Er()),
        },
        children: [s],
      }),
      delete y.attributes.title);
  var S = se(
      se({}, y),
      {},
      {
        prefix: l,
        iconName: r,
        main: n,
        mask: a,
        maskId: c,
        transform: i,
        symbol: o,
        styles: se(se({}, k), d.styles),
      }
    ),
    A =
      a.found && n.found
        ? Rn("generateAbstractMask", S) || { children: [], attributes: {} }
        : Rn("generateAbstractIcon", S) || { children: [], attributes: {} },
    x = A.children,
    C = A.attributes;
  return (S.children = x), (S.attributes = C), o ? QV(S) : ZV(S);
}
function Gf(e) {
  var t = e.content,
    n = e.width,
    a = e.height,
    l = e.transform,
    r = e.title,
    i = e.extra,
    o = e.watchable,
    s = o === void 0 ? !1 : o,
    c = se(
      se(se({}, i.attributes), r ? { title: r } : {}),
      {},
      { class: i.classes.join(" ") }
    );
  s && (c[Va] = "");
  var u = se({}, i.styles);
  kc(l) &&
    ((u.transform = IV({
      transform: l,
      startCentered: !0,
      width: n,
      height: a,
    })),
    (u["-webkit-transform"] = u.transform));
  var d = $o(u);
  d.length > 0 && (c.style = d);
  var f = [];
  return (
    f.push({ tag: "span", attributes: c, children: [t] }),
    r &&
      f.push({ tag: "span", attributes: { class: "sr-only" }, children: [r] }),
    f
  );
}
function e$(e) {
  var t = e.content,
    n = e.title,
    a = e.extra,
    l = se(
      se(se({}, a.attributes), n ? { title: n } : {}),
      {},
      { class: a.classes.join(" ") }
    ),
    r = $o(a.styles);
  r.length > 0 && (l.style = r);
  var i = [];
  return (
    i.push({ tag: "span", attributes: l, children: [t] }),
    n &&
      i.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    i
  );
}
var ns = nn.styles;
function au(e) {
  var t = e[0],
    n = e[1],
    a = e.slice(4),
    l = bc(a, 1),
    r = l[0],
    i = null;
  return (
    Array.isArray(r)
      ? (i = {
          tag: "g",
          attributes: { class: "".concat(fe.cssPrefix, "-").concat(xa.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(fe.cssPrefix, "-").concat(xa.SECONDARY),
                fill: "currentColor",
                d: r[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(fe.cssPrefix, "-").concat(xa.PRIMARY),
                fill: "currentColor",
                d: r[1],
              },
            },
          ],
        })
      : (i = { tag: "path", attributes: { fill: "currentColor", d: r } }),
    { found: !0, width: t, height: n, icon: i }
  );
}
var t$ = { found: !1, width: 512, height: 512 };
function n$(e, t) {
  !mp &&
    !fe.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function lu(e, t) {
  var n = t;
  return (
    t === "fa" && fe.styleDefault !== null && (t = na()),
    new Promise(function (a, l) {
      if ((Rn("missingIconAbstract"), n === "fa")) {
        var r = Ep(e) || {};
        (e = r.iconName || e), (t = r.prefix || t);
      }
      if (e && t && ns[t] && ns[t][e]) {
        var i = ns[t][e];
        return a(au(i));
      }
      n$(e, t),
        a(
          se(
            se({}, t$),
            {},
            {
              icon:
                fe.showMissingIcons && e ? Rn("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Kf = function () {},
  ru =
    fe.measurePerformance && Qr && Qr.mark && Qr.measure
      ? Qr
      : { mark: Kf, measure: Kf },
  Yl = 'FA "6.2.0"',
  a$ = function (t) {
    return (
      ru.mark("".concat(Yl, " ").concat(t, " begins")),
      function () {
        return $p(t);
      }
    );
  },
  $p = function (t) {
    ru.mark("".concat(Yl, " ").concat(t, " ends")),
      ru.measure(
        "".concat(Yl, " ").concat(t),
        "".concat(Yl, " ").concat(t, " begins"),
        "".concat(Yl, " ").concat(t, " ends")
      );
  },
  Ic = { begin: a$, end: $p },
  yi = function () {};
function qf(e) {
  var t = e.getAttribute ? e.getAttribute(Va) : null;
  return typeof t == "string";
}
function l$(e) {
  var t = e.getAttribute ? e.getAttribute(xc) : null,
    n = e.getAttribute ? e.getAttribute(wc) : null;
  return t && n;
}
function r$(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(fe.replacementClass)
  );
}
function i$() {
  if (fe.autoReplaceSvg === !0) return bi.replace;
  var e = bi[fe.autoReplaceSvg];
  return e || bi.replace;
}
function o$(e) {
  return We.createElementNS("http://www.w3.org/2000/svg", e);
}
function s$(e) {
  return We.createElement(e);
}
function Ip(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    a = n === void 0 ? (e.tag === "svg" ? o$ : s$) : n;
  if (typeof e == "string") return We.createTextNode(e);
  var l = a(e.tag);
  Object.keys(e.attributes || []).forEach(function (i) {
    l.setAttribute(i, e.attributes[i]);
  });
  var r = e.children || [];
  return (
    r.forEach(function (i) {
      l.appendChild(Ip(i, { ceFn: a }));
    }),
    l
  );
}
function u$(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var bi = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (l) {
          n.parentNode.insertBefore(Ip(l), n);
        }),
        n.getAttribute(Va) === null && fe.keepOriginalSource)
      ) {
        var a = We.createComment(u$(n));
        n.parentNode.replaceChild(a, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      a = t[1];
    if (~Cc(n).indexOf(fe.replacementClass)) return bi.replace(t);
    var l = new RegExp("".concat(fe.cssPrefix, "-.*"));
    if ((delete a[0].attributes.id, a[0].attributes.class)) {
      var r = a[0].attributes.class.split(" ").reduce(
        function (o, s) {
          return (
            s === fe.replacementClass || s.match(l)
              ? o.toSvg.push(s)
              : o.toNode.push(s),
            o
          );
        },
        { toNode: [], toSvg: [] }
      );
      (a[0].attributes.class = r.toSvg.join(" ")),
        r.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", r.toNode.join(" "));
    }
    var i = a.map(function (o) {
      return zr(o);
    }).join(`
`);
    n.setAttribute(Va, ""), (n.innerHTML = i);
  },
};
function Xf(e) {
  e();
}
function Pp(e, t) {
  var n = typeof t == "function" ? t : yi;
  if (e.length === 0) n();
  else {
    var a = Xf;
    fe.mutateApproach === vV && (a = ta.requestAnimationFrame || Xf),
      a(function () {
        var l = i$(),
          r = Ic.begin("mutate");
        e.map(l), r(), n();
      });
  }
}
var Pc = !1;
function Op() {
  Pc = !0;
}
function iu() {
  Pc = !1;
}
var Di = null;
function Jf(e) {
  if (!!Df && !!fe.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? yi : t,
      a = e.nodeCallback,
      l = a === void 0 ? yi : a,
      r = e.pseudoElementsCallback,
      i = r === void 0 ? yi : r,
      o = e.observeMutationsRoot,
      s = o === void 0 ? We : o;
    (Di = new Df(function (c) {
      if (!Pc) {
        var u = na();
        Tl(c).forEach(function (d) {
          if (
            (d.type === "childList" &&
              d.addedNodes.length > 0 &&
              !qf(d.addedNodes[0]) &&
              (fe.searchPseudoElements && i(d.target), n(d.target)),
            d.type === "attributes" &&
              d.target.parentNode &&
              fe.searchPseudoElements &&
              i(d.target.parentNode),
            d.type === "attributes" &&
              qf(d.target) &&
              ~_V.indexOf(d.attributeName))
          )
            if (d.attributeName === "class" && l$(d.target)) {
              var f = Po(Cc(d.target)),
                v = f.prefix,
                h = f.iconName;
              d.target.setAttribute(xc, v || u),
                h && d.target.setAttribute(wc, h);
            } else r$(d.target) && l(d.target);
        });
      }
    })),
      jn &&
        Di.observe(s, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function c$() {
  !Di || Di.disconnect();
}
function d$(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (a, l) {
        var r = l.split(":"),
          i = r[0],
          o = r.slice(1);
        return i && o.length > 0 && (a[i] = o.join(":").trim()), a;
      }, {})),
    n
  );
}
function f$(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    a = e.innerText !== void 0 ? e.innerText.trim() : "",
    l = Po(Cc(e));
  return (
    l.prefix || (l.prefix = na()),
    t && n && ((l.prefix = t), (l.iconName = n)),
    (l.iconName && l.prefix) ||
      (l.prefix &&
        a.length > 0 &&
        (l.iconName =
          HV(l.prefix, e.innerText) || Ec(l.prefix, Qs(e.innerText))),
      !l.iconName &&
        fe.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (l.iconName = e.firstChild.data)),
    l
  );
}
function v$(e) {
  var t = Tl(e.attributes).reduce(function (l, r) {
      return (
        l.name !== "class" && l.name !== "style" && (l[r.name] = r.value), l
      );
    }, {}),
    n = e.getAttribute("title"),
    a = e.getAttribute("data-fa-title-id");
  return (
    fe.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(fe.replacementClass, "-title-")
            .concat(a || Er()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function m$() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: gn,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Zf(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = f$(e),
    a = n.iconName,
    l = n.prefix,
    r = n.rest,
    i = v$(e),
    o = tu("parseNodeAttributes", {}, e),
    s = t.styleParser ? d$(e) : [];
  return se(
    {
      iconName: a,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: l,
      transform: gn,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: r, styles: s, attributes: i },
    },
    o
  );
}
var h$ = nn.styles;
function Tp(e) {
  var t = fe.autoReplaceSvg === "nest" ? Zf(e, { styleParser: !1 }) : Zf(e);
  return ~t.extra.classes.indexOf(hp)
    ? Rn("generateLayersText", e, t)
    : Rn("generateSvgReplacementMutation", e, t);
}
var aa = new Set();
Sc.map(function (e) {
  aa.add("fa-".concat(e));
});
Object.keys(Sr[Ue]).map(aa.add.bind(aa));
Object.keys(Sr[Ze]).map(aa.add.bind(aa));
aa = Fr(aa);
function Qf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jn) return Promise.resolve();
  var n = We.documentElement.classList,
    a = function (d) {
      return n.add("".concat(zf, "-").concat(d));
    },
    l = function (d) {
      return n.remove("".concat(zf, "-").concat(d));
    },
    r = fe.autoFetchSvg
      ? aa
      : Sc.map(function (u) {
          return "fa-".concat(u);
        }).concat(Object.keys(h$));
  r.includes("fa") || r.push("fa");
  var i = [".".concat(hp, ":not([").concat(Va, "])")]
    .concat(
      r.map(function (u) {
        return ".".concat(u, ":not([").concat(Va, "])");
      })
    )
    .join(", ");
  if (i.length === 0) return Promise.resolve();
  var o = [];
  try {
    o = Tl(e.querySelectorAll(i));
  } catch {}
  if (o.length > 0) a("pending"), l("complete");
  else return Promise.resolve();
  var s = Ic.begin("onTree"),
    c = o.reduce(function (u, d) {
      try {
        var f = Tp(d);
        f && u.push(f);
      } catch (v) {
        mp || (v.name === "MissingIcon" && console.error(v));
      }
      return u;
    }, []);
  return new Promise(function (u, d) {
    Promise.all(c)
      .then(function (f) {
        Pp(f, function () {
          a("active"),
            a("complete"),
            l("pending"),
            typeof t == "function" && t(),
            s(),
            u();
        });
      })
      .catch(function (f) {
        s(), d(f);
      });
  });
}
function g$(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Tp(e).then(function (n) {
    n && Pp([n], t);
  });
}
function p$(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = (t || {}).icon ? t : nu(t || {}),
      l = n.mask;
    return (
      l && (l = (l || {}).icon ? l : nu(l || {})),
      e(a, se(se({}, n), {}, { mask: l }))
    );
  };
}
var y$ = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = n.transform,
      l = a === void 0 ? gn : a,
      r = n.symbol,
      i = r === void 0 ? !1 : r,
      o = n.mask,
      s = o === void 0 ? null : o,
      c = n.maskId,
      u = c === void 0 ? null : c,
      d = n.title,
      f = d === void 0 ? null : d,
      v = n.titleId,
      h = v === void 0 ? null : v,
      p = n.classes,
      w = p === void 0 ? [] : p,
      g = n.attributes,
      _ = g === void 0 ? {} : g,
      y = n.styles,
      k = y === void 0 ? {} : y;
    if (t) {
      var S = t.prefix,
        A = t.iconName,
        x = t.icon;
      return Oo(se({ type: "icon" }, t), function () {
        return (
          $a("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          fe.autoA11y &&
            (f
              ? (_["aria-labelledby"] = ""
                  .concat(fe.replacementClass, "-title-")
                  .concat(h || Er()))
              : ((_["aria-hidden"] = "true"), (_.focusable = "false"))),
          $c({
            icons: {
              main: au(x),
              mask: s
                ? au(s.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: S,
            iconName: A,
            transform: se(se({}, gn), l),
            symbol: i,
            title: f,
            maskId: u,
            titleId: h,
            extra: { attributes: _, styles: k, classes: w },
          })
        );
      });
    }
  },
  b$ = {
    mixout: function () {
      return { icon: p$(y$) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Qf), (n.nodeCallback = g$), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var a = n.node,
          l = a === void 0 ? We : a,
          r = n.callback,
          i = r === void 0 ? function () {} : r;
        return Qf(l, i);
      }),
        (t.generateSvgReplacementMutation = function (n, a) {
          var l = a.iconName,
            r = a.title,
            i = a.titleId,
            o = a.prefix,
            s = a.transform,
            c = a.symbol,
            u = a.mask,
            d = a.maskId,
            f = a.extra;
          return new Promise(function (v, h) {
            Promise.all([
              lu(l, o),
              u.iconName
                ? lu(u.iconName, u.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (p) {
                var w = bc(p, 2),
                  g = w[0],
                  _ = w[1];
                v([
                  n,
                  $c({
                    icons: { main: g, mask: _ },
                    prefix: o,
                    iconName: l,
                    transform: s,
                    symbol: c,
                    maskId: d,
                    title: r,
                    titleId: i,
                    extra: f,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(h);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var a = n.children,
            l = n.attributes,
            r = n.main,
            i = n.transform,
            o = n.styles,
            s = $o(o);
          s.length > 0 && (l.style = s);
          var c;
          return (
            kc(i) &&
              (c = Rn("generateAbstractTransformGrouping", {
                main: r,
                transform: i,
                containerWidth: r.width,
                iconWidth: r.width,
              })),
            a.push(c || r.icon),
            { children: a, attributes: l }
          );
        });
    },
  },
  _$ = {
    mixout: function () {
      return {
        layer: function (n) {
          var a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            l = a.classes,
            r = l === void 0 ? [] : l;
          return Oo({ type: "layer" }, function () {
            $a("beforeDOMElementCreation", { assembler: n, params: a });
            var i = [];
            return (
              n(function (o) {
                Array.isArray(o)
                  ? o.map(function (s) {
                      i = i.concat(s.abstract);
                    })
                  : (i = i.concat(o.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(fe.cssPrefix, "-layers")]
                      .concat(Fr(r))
                      .join(" "),
                  },
                  children: i,
                },
              ]
            );
          });
        },
      };
    },
  },
  x$ = {
    mixout: function () {
      return {
        counter: function (n) {
          var a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            l = a.title,
            r = l === void 0 ? null : l,
            i = a.classes,
            o = i === void 0 ? [] : i,
            s = a.attributes,
            c = s === void 0 ? {} : s,
            u = a.styles,
            d = u === void 0 ? {} : u;
          return Oo({ type: "counter", content: n }, function () {
            return (
              $a("beforeDOMElementCreation", { content: n, params: a }),
              e$({
                content: n.toString(),
                title: r,
                extra: {
                  attributes: c,
                  styles: d,
                  classes: ["".concat(fe.cssPrefix, "-layers-counter")].concat(
                    Fr(o)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  w$ = {
    mixout: function () {
      return {
        text: function (n) {
          var a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            l = a.transform,
            r = l === void 0 ? gn : l,
            i = a.title,
            o = i === void 0 ? null : i,
            s = a.classes,
            c = s === void 0 ? [] : s,
            u = a.attributes,
            d = u === void 0 ? {} : u,
            f = a.styles,
            v = f === void 0 ? {} : f;
          return Oo({ type: "text", content: n }, function () {
            return (
              $a("beforeDOMElementCreation", { content: n, params: a }),
              Gf({
                content: n,
                transform: se(se({}, gn), r),
                title: o,
                extra: {
                  attributes: d,
                  styles: v,
                  classes: ["".concat(fe.cssPrefix, "-layers-text")].concat(
                    Fr(c)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, a) {
        var l = a.title,
          r = a.transform,
          i = a.extra,
          o = null,
          s = null;
        if (dp) {
          var c = parseInt(getComputedStyle(n).fontSize, 10),
            u = n.getBoundingClientRect();
          (o = u.width / c), (s = u.height / c);
        }
        return (
          fe.autoA11y && !l && (i.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            Gf({
              content: n.innerHTML,
              width: o,
              height: s,
              transform: r,
              title: l,
              extra: i,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  S$ = new RegExp('"', "ug"),
  ev = [1105920, 1112319];
function C$(e) {
  var t = e.replace(S$, ""),
    n = NV(t, 0),
    a = n >= ev[0] && n <= ev[1],
    l = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Qs(l ? t[0] : t), isSecondary: a || l };
}
function tv(e, t) {
  var n = "".concat(fV).concat(t.replace(":", "-"));
  return new Promise(function (a, l) {
    if (e.getAttribute(n) !== null) return a();
    var r = Tl(e.children),
      i = r.filter(function (x) {
        return x.getAttribute(Zs) === t;
      })[0],
      o = ta.getComputedStyle(e, t),
      s = o.getPropertyValue("font-family").match(pV),
      c = o.getPropertyValue("font-weight"),
      u = o.getPropertyValue("content");
    if (i && !s) return e.removeChild(i), a();
    if (s && u !== "none" && u !== "") {
      var d = o.getPropertyValue("content"),
        f = ~["Sharp"].indexOf(s[2]) ? Ze : Ue,
        v = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(s[2])
          ? Cr[f][s[2].toLowerCase()]
          : yV[f][c],
        h = C$(d),
        p = h.value,
        w = h.isSecondary,
        g = s[0].startsWith("FontAwesome"),
        _ = Ec(v, p),
        y = _;
      if (g) {
        var k = UV(p);
        k.iconName && k.prefix && ((_ = k.iconName), (v = k.prefix));
      }
      if (
        _ &&
        !w &&
        (!i || i.getAttribute(xc) !== v || i.getAttribute(wc) !== y)
      ) {
        e.setAttribute(n, y), i && e.removeChild(i);
        var S = m$(),
          A = S.extra;
        (A.attributes[Zs] = t),
          lu(_, v)
            .then(function (x) {
              var C = $c(
                  se(
                    se({}, S),
                    {},
                    {
                      icons: { main: x, mask: Vc() },
                      prefix: v,
                      iconName: y,
                      extra: A,
                      watchable: !0,
                    }
                  )
                ),
                V = We.createElement("svg");
              t === "::before"
                ? e.insertBefore(V, e.firstChild)
                : e.appendChild(V),
                (V.outerHTML = C.map(function ($) {
                  return zr($);
                }).join(`
`)),
                e.removeAttribute(n),
                a();
            })
            .catch(l);
      } else a();
    } else a();
  });
}
function k$(e) {
  return Promise.all([tv(e, "::before"), tv(e, "::after")]);
}
function A$(e) {
  return (
    e.parentNode !== document.head &&
    !~mV.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Zs) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function nv(e) {
  if (jn)
    return new Promise(function (t, n) {
      var a = Tl(e.querySelectorAll("*")).filter(A$).map(k$),
        l = Ic.begin("searchPseudoElements");
      Op(),
        Promise.all(a)
          .then(function () {
            l(), iu(), t();
          })
          .catch(function () {
            l(), iu(), n();
          });
    });
}
var E$ = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = nv), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var a = n.node,
          l = a === void 0 ? We : a;
        fe.searchPseudoElements && nv(l);
      };
    },
  },
  av = !1,
  V$ = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Op(), (av = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Jf(tu("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          c$();
        },
        watch: function (n) {
          var a = n.observeMutationsRoot;
          av
            ? iu()
            : Jf(tu("mutationObserverCallbacks", { observeMutationsRoot: a }));
        },
      };
    },
  },
  lv = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (a, l) {
        var r = l.toLowerCase().split("-"),
          i = r[0],
          o = r.slice(1).join("-");
        if (i && o === "h") return (a.flipX = !0), a;
        if (i && o === "v") return (a.flipY = !0), a;
        if (((o = parseFloat(o)), isNaN(o))) return a;
        switch (i) {
          case "grow":
            a.size = a.size + o;
            break;
          case "shrink":
            a.size = a.size - o;
            break;
          case "left":
            a.x = a.x - o;
            break;
          case "right":
            a.x = a.x + o;
            break;
          case "up":
            a.y = a.y - o;
            break;
          case "down":
            a.y = a.y + o;
            break;
          case "rotate":
            a.rotate = a.rotate + o;
            break;
        }
        return a;
      }, n);
  },
  $$ = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return lv(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, a) {
          var l = a.getAttribute("data-fa-transform");
          return l && (n.transform = lv(l)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var a = n.main,
          l = n.transform,
          r = n.containerWidth,
          i = n.iconWidth,
          o = { transform: "translate(".concat(r / 2, " 256)") },
          s = "translate(".concat(l.x * 32, ", ").concat(l.y * 32, ") "),
          c = "scale("
            .concat((l.size / 16) * (l.flipX ? -1 : 1), ", ")
            .concat((l.size / 16) * (l.flipY ? -1 : 1), ") "),
          u = "rotate(".concat(l.rotate, " 0 0)"),
          d = { transform: "".concat(s, " ").concat(c, " ").concat(u) },
          f = { transform: "translate(".concat((i / 2) * -1, " -256)") },
          v = { outer: o, inner: d, path: f };
        return {
          tag: "g",
          attributes: se({}, v.outer),
          children: [
            {
              tag: "g",
              attributes: se({}, v.inner),
              children: [
                {
                  tag: a.icon.tag,
                  children: a.icon.children,
                  attributes: se(se({}, a.icon.attributes), v.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  as = { x: 0, y: 0, width: "100%", height: "100%" };
function rv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function I$(e) {
  return e.tag === "g" ? e.children : [e];
}
var P$ = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, a) {
          var l = a.getAttribute("data-fa-mask"),
            r = l
              ? Po(
                  l.split(" ").map(function (i) {
                    return i.trim();
                  })
                )
              : Vc();
          return (
            r.prefix || (r.prefix = na()),
            (n.mask = r),
            (n.maskId = a.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var a = n.children,
          l = n.attributes,
          r = n.main,
          i = n.mask,
          o = n.maskId,
          s = n.transform,
          c = r.width,
          u = r.icon,
          d = i.width,
          f = i.icon,
          v = $V({ transform: s, containerWidth: d, iconWidth: c }),
          h = {
            tag: "rect",
            attributes: se(se({}, as), {}, { fill: "white" }),
          },
          p = u.children ? { children: u.children.map(rv) } : {},
          w = {
            tag: "g",
            attributes: se({}, v.inner),
            children: [
              rv(
                se(
                  { tag: u.tag, attributes: se(se({}, u.attributes), v.path) },
                  p
                )
              ),
            ],
          },
          g = { tag: "g", attributes: se({}, v.outer), children: [w] },
          _ = "mask-".concat(o || Er()),
          y = "clip-".concat(o || Er()),
          k = {
            tag: "mask",
            attributes: se(
              se({}, as),
              {},
              {
                id: _,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [h, g],
          },
          S = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: y }, children: I$(f) },
              k,
            ],
          };
        return (
          a.push(S, {
            tag: "rect",
            attributes: se(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(y, ")"),
                mask: "url(#".concat(_, ")"),
              },
              as
            ),
          }),
          { children: a, attributes: l }
        );
      };
    },
  },
  O$ = {
    provides: function (t) {
      var n = !1;
      ta.matchMedia &&
        (n = ta.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var a = [],
            l = { fill: "currentColor" },
            r = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          a.push({
            tag: "path",
            attributes: se(
              se({}, l),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var i = se(se({}, r), {}, { attributeName: "opacity" }),
            o = {
              tag: "circle",
              attributes: se(se({}, l), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              o.children.push(
                {
                  tag: "animate",
                  attributes: se(
                    se({}, r),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: se(se({}, i), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            a.push(o),
            a.push({
              tag: "path",
              attributes: se(
                se({}, l),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: se(se({}, i), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              a.push({
                tag: "path",
                attributes: se(
                  se({}, l),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: se(se({}, i), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: a }
          );
        });
    },
  },
  T$ = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, a) {
          var l = a.getAttribute("data-fa-symbol"),
            r = l === null ? !1 : l === "" ? !0 : l;
          return (n.symbol = r), n;
        },
      };
    },
  },
  R$ = [OV, b$, _$, x$, w$, E$, V$, $$, P$, O$, T$];
GV(R$, { mixoutsTo: Mt });
Mt.noAuto;
var Rp = Mt.config,
  L$ = Mt.library;
Mt.dom;
var zi = Mt.parse;
Mt.findIconDefinition;
Mt.toHtml;
var B$ = Mt.icon;
Mt.layer;
var N$ = Mt.text;
Mt.counter;
function iv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function Qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? iv(Object(n), !0).forEach(function (a) {
          xt(e, a, n[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : iv(Object(n)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
        });
  }
  return e;
}
function ji(e) {
  return (
    (ji =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ji(e)
  );
}
function xt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function M$(e, t) {
  if (e == null) return {};
  var n = {},
    a = Object.keys(e),
    l,
    r;
  for (r = 0; r < a.length; r++)
    (l = a[r]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function F$(e, t) {
  if (e == null) return {};
  var n = M$(e, t),
    a,
    l;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (l = 0; l < r.length; l++)
      (a = r[l]),
        !(t.indexOf(a) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, a) || (n[a] = e[a]));
  }
  return n;
}
function ou(e) {
  return D$(e) || z$(e) || j$(e) || H$();
}
function D$(e) {
  if (Array.isArray(e)) return su(e);
}
function z$(e) {
  if (
    (typeof Symbol != "undefined" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function j$(e, t) {
  if (e) {
    if (typeof e == "string") return su(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return su(e, t);
  }
}
function su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function H$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var U$ =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  Lp = { exports: {} };
(function (e) {
  (function (t) {
    var n = function (g, _, y) {
        if (!c(_) || d(_) || f(_) || v(_) || s(_)) return _;
        var k,
          S = 0,
          A = 0;
        if (u(_)) for (k = [], A = _.length; S < A; S++) k.push(n(g, _[S], y));
        else {
          k = {};
          for (var x in _)
            Object.prototype.hasOwnProperty.call(_, x) &&
              (k[g(x, y)] = n(g, _[x], y));
        }
        return k;
      },
      a = function (g, _) {
        _ = _ || {};
        var y = _.separator || "_",
          k = _.split || /(?=[A-Z])/;
        return g.split(k).join(y);
      },
      l = function (g) {
        return h(g)
          ? g
          : ((g = g.replace(/[\-_\s]+(.)?/g, function (_, y) {
              return y ? y.toUpperCase() : "";
            })),
            g.substr(0, 1).toLowerCase() + g.substr(1));
      },
      r = function (g) {
        var _ = l(g);
        return _.substr(0, 1).toUpperCase() + _.substr(1);
      },
      i = function (g, _) {
        return a(g, _).toLowerCase();
      },
      o = Object.prototype.toString,
      s = function (g) {
        return typeof g == "function";
      },
      c = function (g) {
        return g === Object(g);
      },
      u = function (g) {
        return o.call(g) == "[object Array]";
      },
      d = function (g) {
        return o.call(g) == "[object Date]";
      },
      f = function (g) {
        return o.call(g) == "[object RegExp]";
      },
      v = function (g) {
        return o.call(g) == "[object Boolean]";
      },
      h = function (g) {
        return (g = g - 0), g === g;
      },
      p = function (g, _) {
        var y = _ && "process" in _ ? _.process : _;
        return typeof y != "function"
          ? g
          : function (k, S) {
              return y(k, g, S);
            };
      },
      w = {
        camelize: l,
        decamelize: i,
        pascalize: r,
        depascalize: i,
        camelizeKeys: function (g, _) {
          return n(p(l, _), g);
        },
        decamelizeKeys: function (g, _) {
          return n(p(i, _), g, _);
        },
        pascalizeKeys: function (g, _) {
          return n(p(r, _), g);
        },
        depascalizeKeys: function () {
          return this.decamelizeKeys.apply(this, arguments);
        },
      };
    e.exports ? (e.exports = w) : (t.humps = w);
  })(U$);
})(Lp);
var W$ = Lp.exports,
  Y$ = ["class", "style"];
function G$(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var a = n.indexOf(":"),
        l = W$.camelize(n.slice(0, a)),
        r = n.slice(a + 1).trim();
      return (t[l] = r), t;
    }, {});
}
function K$(e) {
  return e.split(/\s+/).reduce(function (t, n) {
    return (t[n] = !0), t;
  }, {});
}
function Oc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string") return e;
  var a = (e.children || []).map(function (s) {
      return Oc(s);
    }),
    l = Object.keys(e.attributes || {}).reduce(
      function (s, c) {
        var u = e.attributes[c];
        switch (c) {
          case "class":
            s.class = K$(u);
            break;
          case "style":
            s.style = G$(u);
            break;
          default:
            s.attrs[c] = u;
        }
        return s;
      },
      { attrs: {}, class: {}, style: {} }
    );
  n.class;
  var r = n.style,
    i = r === void 0 ? {} : r,
    o = F$(n, Y$);
  return Yt(
    e.tag,
    Qt(
      Qt(
        Qt({}, t),
        {},
        { class: l.class, style: Qt(Qt({}, l.style), i) },
        l.attrs
      ),
      o
    ),
    a
  );
}
var Bp = !1;
try {
  Bp = !0;
} catch {}
function q$() {
  if (!Bp && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function lr(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? xt({}, e, t)
    : {};
}
function X$(e) {
  var t,
    n =
      ((t = {
        "fa-spin": e.spin,
        "fa-pulse": e.pulse,
        "fa-fw": e.fixedWidth,
        "fa-border": e.border,
        "fa-li": e.listItem,
        "fa-inverse": e.inverse,
        "fa-flip": e.flip === !0,
        "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
        "fa-flip-vertical": e.flip === "vertical" || e.flip === "both",
      }),
      xt(t, "fa-".concat(e.size), e.size !== null),
      xt(t, "fa-rotate-".concat(e.rotation), e.rotation !== null),
      xt(t, "fa-pull-".concat(e.pull), e.pull !== null),
      xt(t, "fa-swap-opacity", e.swapOpacity),
      xt(t, "fa-bounce", e.bounce),
      xt(t, "fa-shake", e.shake),
      xt(t, "fa-beat", e.beat),
      xt(t, "fa-fade", e.fade),
      xt(t, "fa-beat-fade", e.beatFade),
      xt(t, "fa-flash", e.flash),
      xt(t, "fa-spin-pulse", e.spinPulse),
      xt(t, "fa-spin-reverse", e.spinReverse),
      t);
  return Object.keys(n)
    .map(function (a) {
      return n[a] ? a : null;
    })
    .filter(function (a) {
      return a;
    });
}
function ov(e) {
  if (e && ji(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (zi.icon) return zi.icon(e);
  if (e === null) return null;
  if (ji(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
var J$ = Oa({
  name: "FontAwesomeIcon",
  props: {
    border: { type: Boolean, default: !1 },
    fixedWidth: { type: Boolean, default: !1 },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function (t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      },
    },
    icon: { type: [Object, Array, String], required: !0 },
    mask: { type: [Object, Array, String], default: null },
    listItem: { type: Boolean, default: !1 },
    pull: {
      type: String,
      default: null,
      validator: function (t) {
        return ["right", "left"].indexOf(t) > -1;
      },
    },
    pulse: { type: Boolean, default: !1 },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function (t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      },
    },
    swapOpacity: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: null,
      validator: function (t) {
        return (
          [
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ].indexOf(t) > -1
        );
      },
    },
    spin: { type: Boolean, default: !1 },
    transform: { type: [String, Object], default: null },
    symbol: { type: [Boolean, String], default: !1 },
    title: { type: String, default: null },
    inverse: { type: Boolean, default: !1 },
    bounce: { type: Boolean, default: !1 },
    shake: { type: Boolean, default: !1 },
    beat: { type: Boolean, default: !1 },
    fade: { type: Boolean, default: !1 },
    beatFade: { type: Boolean, default: !1 },
    flash: { type: Boolean, default: !1 },
    spinPulse: { type: Boolean, default: !1 },
    spinReverse: { type: Boolean, default: !1 },
  },
  setup: function (t, n) {
    var a = n.attrs,
      l = b(function () {
        return ov(t.icon);
      }),
      r = b(function () {
        return lr("classes", X$(t));
      }),
      i = b(function () {
        return lr(
          "transform",
          typeof t.transform == "string"
            ? zi.transform(t.transform)
            : t.transform
        );
      }),
      o = b(function () {
        return lr("mask", ov(t.mask));
      }),
      s = b(function () {
        return B$(
          l.value,
          Qt(
            Qt(Qt(Qt({}, r.value), i.value), o.value),
            {},
            { symbol: t.symbol, title: t.title }
          )
        );
      });
    ce(
      s,
      function (u) {
        if (!u)
          return q$("Could not find one or more icon(s)", l.value, o.value);
      },
      { immediate: !0 }
    );
    var c = b(function () {
      return s.value ? Oc(s.value.abstract[0], {}, a) : null;
    });
    return function () {
      return c.value;
    };
  },
});
Oa({
  name: "FontAwesomeLayers",
  props: { fixedWidth: { type: Boolean, default: !1 } },
  setup: function (t, n) {
    var a = n.slots,
      l = Rp.familyPrefix,
      r = b(function () {
        return ["".concat(l, "-layers")].concat(
          ou(t.fixedWidth ? ["".concat(l, "-fw")] : [])
        );
      });
    return function () {
      return Yt("div", { class: r.value }, a.default ? a.default() : []);
    };
  },
});
Oa({
  name: "FontAwesomeLayersText",
  props: {
    value: { type: [String, Number], default: "" },
    transform: { type: [String, Object], default: null },
    counter: { type: Boolean, default: !1 },
    position: {
      type: String,
      default: null,
      validator: function (t) {
        return (
          ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) >
          -1
        );
      },
    },
  },
  setup: function (t, n) {
    var a = n.attrs,
      l = Rp.familyPrefix,
      r = b(function () {
        return lr(
          "classes",
          [].concat(
            ou(t.counter ? ["".concat(l, "-layers-counter")] : []),
            ou(t.position ? ["".concat(l, "-layers-").concat(t.position)] : [])
          )
        );
      }),
      i = b(function () {
        return lr(
          "transform",
          typeof t.transform == "string"
            ? zi.transform(t.transform)
            : t.transform
        );
      }),
      o = b(function () {
        var c = N$(t.value.toString(), Qt(Qt({}, i.value), r.value)),
          u = c.abstract;
        return (
          t.counter &&
            (u[0].attributes.class = u[0].attributes.class.replace(
              "fa-layers-text",
              ""
            )),
          u[0]
        );
      }),
      s = b(function () {
        return Oc(o.value, {}, a);
      });
    return function () {
      return s.value;
    };
  },
});
var Z$ = {
    prefix: "fas",
    iconName: "filter",
    icon: [
      512,
      512,
      [],
      "f0b0",
      "M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z",
    ],
  },
  Q$ = {
    prefix: "fas",
    iconName: "phone",
    icon: [
      512,
      512,
      [128222, 128379],
      "f095",
      "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z",
    ],
  },
  eI = {
    prefix: "fas",
    iconName: "user-secret",
    icon: [
      448,
      512,
      [128373],
      "f21b",
      "M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z",
    ],
  },
  tI = {
    prefix: "fas",
    iconName: "envelope",
    icon: [
      512,
      512,
      [128386, 9993, 61443],
      "f0e0",
      "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
    ],
  },
  nI = {
    prefix: "fas",
    iconName: "arrow-down",
    icon: [
      384,
      512,
      [8595],
      "f063",
      "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z",
    ],
  },
  aI = {
    prefix: "fas",
    iconName: "check",
    icon: [
      512,
      512,
      [10003, 10004],
      "f00c",
      "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",
    ],
  },
  lI = {
    prefix: "fas",
    iconName: "angle-left",
    icon: [
      320,
      512,
      [8249],
      "f104",
      "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
    ],
  },
  rI = {
    prefix: "fas",
    iconName: "x",
    icon: [
      384,
      512,
      [120],
      "58",
      "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z",
    ],
  };
const iI = wh({ components: KE, directives: nV });
L$.add(eI, rI, aI, lI, Q$, tI, nI, Z$);
const oI = h0(M1).use(iI).component("font-awesome-icon", J$).use(rC);
oI.mount("#app");
