(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
	new MutationObserver(l => {
		for (const o of l) if (o.type === 'childList') for (const u of o.addedNodes) u.tagName === 'LINK' && u.rel === 'modulepreload' && a(u);
	}).observe(document, { childList: !0, subtree: !0 });
	function r(l) {
		const o = {};
		return (
			l.integrity && (o.integrity = l.integrity),
			l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: l.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		);
	}
	function a(l) {
		if (l.ep) return;
		l.ep = !0;
		const o = r(l);
		fetch(l.href, o);
	}
})();
function Ue(e, t) {
	const r = Object.create(null),
		a = e.split(',');
	for (let l = 0; l < a.length; l++) r[a[l]] = !0;
	return t ? l => !!r[l.toLowerCase()] : l => !!r[l];
}
const Y = {},
	v0 = [],
	y2 = () => {},
	v4 = () => !1,
	f4 = /^on[^a-z]/,
	ae = e => f4.test(e),
	Ke = e => e.startsWith('onUpdate:'),
	l2 = Object.assign,
	je = (e, t) => {
		const r = e.indexOf(t);
		r > -1 && e.splice(r, 1);
	},
	p4 = Object.prototype.hasOwnProperty,
	D = (e, t) => p4.call(e, t),
	F = Array.isArray,
	f0 = e => le(e) === '[object Map]',
	rt = e => le(e) === '[object Set]',
	P = e => typeof e == 'function',
	r2 = e => typeof e == 'string',
	We = e => typeof e == 'symbol',
	j = e => e !== null && typeof e == 'object',
	at = e => j(e) && P(e.then) && P(e.catch),
	lt = Object.prototype.toString,
	le = e => lt.call(e),
	g4 = e => le(e).slice(8, -1),
	ot = e => le(e) === '[object Object]',
	Je = e => r2(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
	J0 = Ue(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'),
	oe = e => {
		const t = Object.create(null);
		return r => t[r] || (t[r] = e(r));
	},
	m4 = /-(\w)/g,
	E2 = oe(e => e.replace(m4, (t, r) => (r ? r.toUpperCase() : ''))),
	w4 = /\B([A-Z])/g,
	z0 = oe(e => e.replace(w4, '-$1').toLowerCase()),
	ne = oe(e => e.charAt(0).toUpperCase() + e.slice(1)),
	ge = oe(e => (e ? `on${ne(e)}` : '')),
	S0 = (e, t) => !Object.is(e, t),
	me = (e, t) => {
		for (let r = 0; r < e.length; r++) e[r](t);
	},
	G0 = (e, t, r) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r });
	},
	$4 = e => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	},
	z4 = e => {
		const t = r2(e) ? Number(e) : NaN;
		return isNaN(t) ? e : t;
	};
let p1;
const Ae = () => p1 || (p1 = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : typeof global < 'u' ? global : {});
function F0(e) {
	if (F(e)) {
		const t = {};
		for (let r = 0; r < e.length; r++) {
			const a = e[r],
				l = r2(a) ? M4(a) : F0(a);
			if (l) for (const o in l) t[o] = l[o];
		}
		return t;
	} else {
		if (r2(e)) return e;
		if (j(e)) return e;
	}
}
const x4 = /;(?![^(]*\))/g,
	C4 = /:([^]+)/,
	H4 = /\/\*[^]*?\*\//g;
function M4(e) {
	const t = {};
	return (
		e
			.replace(H4, '')
			.split(x4)
			.forEach(r => {
				if (r) {
					const a = r.split(C4);
					a.length > 1 && (t[a[0].trim()] = a[1].trim());
				}
			}),
		t
	);
}
function P2(e) {
	let t = '';
	if (r2(e)) t = e;
	else if (F(e))
		for (let r = 0; r < e.length; r++) {
			const a = P2(e[r]);
			a && (t += a + ' ');
		}
	else if (j(e)) for (const r in e) e[r] && (t += r + ' ');
	return t.trim();
}
const y4 = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
	A4 = Ue(y4);
function nt(e) {
	return !!e || e === '';
}
const g1 = e => (r2(e) ? e : e == null ? '' : F(e) || (j(e) && (e.toString === lt || !P(e.toString))) ? JSON.stringify(e, st, 2) : String(e)),
	st = (e, t) =>
		t && t.__v_isRef
			? st(e, t.value)
			: f0(t)
			? { [`Map(${t.size})`]: [...t.entries()].reduce((r, [a, l]) => ((r[`${a} =>`] = l), r), {}) }
			: rt(t)
			? { [`Set(${t.size})`]: [...t.values()] }
			: j(t) && !F(t) && !ot(t)
			? String(t)
			: t;
let C2;
class V4 {
	constructor(t = !1) {
		(this.detached = t),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this.parent = C2),
			!t && C2 && (this.index = (C2.scopes || (C2.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	run(t) {
		if (this._active) {
			const r = C2;
			try {
				return (C2 = this), t();
			} finally {
				C2 = r;
			}
		}
	}
	on() {
		C2 = this;
	}
	off() {
		C2 = this.parent;
	}
	stop(t) {
		if (this._active) {
			let r, a;
			for (r = 0, a = this.effects.length; r < a; r++) this.effects[r].stop();
			for (r = 0, a = this.cleanups.length; r < a; r++) this.cleanups[r]();
			if (this.scopes) for (r = 0, a = this.scopes.length; r < a; r++) this.scopes[r].stop(!0);
			if (!this.detached && this.parent && !t) {
				const l = this.parent.scopes.pop();
				l && l !== this && ((this.parent.scopes[this.index] = l), (l.index = this.index));
			}
			(this.parent = void 0), (this._active = !1);
		}
	}
}
function B4(e, t = C2) {
	t && t.active && t.effects.push(e);
}
function b4() {
	return C2;
}
const Qe = e => {
		const t = new Set(e);
		return (t.w = 0), (t.n = 0), t;
	},
	_t = e => (e.w & J2) > 0,
	it = e => (e.n & J2) > 0,
	L4 = ({ deps: e }) => {
		if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= J2;
	},
	S4 = e => {
		const { deps: t } = e;
		if (t.length) {
			let r = 0;
			for (let a = 0; a < t.length; a++) {
				const l = t[a];
				_t(l) && !it(l) ? l.delete(e) : (t[r++] = l), (l.w &= ~J2), (l.n &= ~J2);
			}
			t.length = r;
		}
	},
	Ve = new WeakMap();
let A0 = 0,
	J2 = 1;
const Be = 30;
let H2;
const n0 = Symbol(''),
	be = Symbol('');
class Ye {
	constructor(t, r = null, a) {
		(this.fn = t), (this.scheduler = r), (this.active = !0), (this.deps = []), (this.parent = void 0), B4(this, a);
	}
	run() {
		if (!this.active) return this.fn();
		let t = H2,
			r = K2;
		for (; t; ) {
			if (t === this) return;
			t = t.parent;
		}
		try {
			return (this.parent = H2), (H2 = this), (K2 = !0), (J2 = 1 << ++A0), A0 <= Be ? L4(this) : m1(this), this.fn();
		} finally {
			A0 <= Be && S4(this), (J2 = 1 << --A0), (H2 = this.parent), (K2 = r), (this.parent = void 0), this.deferStop && this.stop();
		}
	}
	stop() {
		H2 === this ? (this.deferStop = !0) : this.active && (m1(this), this.onStop && this.onStop(), (this.active = !1));
	}
}
function m1(e) {
	const { deps: t } = e;
	if (t.length) {
		for (let r = 0; r < t.length; r++) t[r].delete(e);
		t.length = 0;
	}
}
let K2 = !0;
const ut = [];
function x0() {
	ut.push(K2), (K2 = !1);
}
function C0() {
	const e = ut.pop();
	K2 = e === void 0 ? !0 : e;
}
function f2(e, t, r) {
	if (K2 && H2) {
		let a = Ve.get(e);
		a || Ve.set(e, (a = new Map()));
		let l = a.get(r);
		l || a.set(r, (l = Qe())), ct(l);
	}
}
function ct(e, t) {
	let r = !1;
	A0 <= Be ? it(e) || ((e.n |= J2), (r = !_t(e))) : (r = !e.has(H2)), r && (e.add(H2), H2.deps.push(e));
}
function O2(e, t, r, a, l, o) {
	const u = Ve.get(e);
	if (!u) return;
	let c = [];
	if (t === 'clear') c = [...u.values()];
	else if (r === 'length' && F(e)) {
		const h = Number(a);
		u.forEach((f, g) => {
			(g === 'length' || g >= h) && c.push(f);
		});
	} else
		switch ((r !== void 0 && c.push(u.get(r)), t)) {
			case 'add':
				F(e) ? Je(r) && c.push(u.get('length')) : (c.push(u.get(n0)), f0(e) && c.push(u.get(be)));
				break;
			case 'delete':
				F(e) || (c.push(u.get(n0)), f0(e) && c.push(u.get(be)));
				break;
			case 'set':
				f0(e) && c.push(u.get(n0));
				break;
		}
	if (c.length === 1) c[0] && Le(c[0]);
	else {
		const h = [];
		for (const f of c) f && h.push(...f);
		Le(Qe(h));
	}
}
function Le(e, t) {
	const r = F(e) ? e : [...e];
	for (const a of r) a.computed && w1(a);
	for (const a of r) a.computed || w1(a);
}
function w1(e, t) {
	(e !== H2 || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const F4 = Ue('__proto__,__v_isRef,__isVue'),
	dt = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter(e => e !== 'arguments' && e !== 'caller')
			.map(e => Symbol[e])
			.filter(We),
	),
	E4 = Ge(),
	T4 = Ge(!1, !0),
	k4 = Ge(!0),
	$1 = P4();
function P4() {
	const e = {};
	return (
		['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
			e[t] = function (...r) {
				const a = N(this);
				for (let o = 0, u = this.length; o < u; o++) f2(a, 'get', o + '');
				const l = a[t](...r);
				return l === -1 || l === !1 ? a[t](...r.map(N)) : l;
			};
		}),
		['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
			e[t] = function (...r) {
				x0();
				const a = N(this)[t].apply(this, r);
				return C0(), a;
			};
		}),
		e
	);
}
function I4(e) {
	const t = N(this);
	return f2(t, 'has', e), t.hasOwnProperty(e);
}
function Ge(e = !1, t = !1) {
	return function (a, l, o) {
		if (l === '__v_isReactive') return !e;
		if (l === '__v_isReadonly') return e;
		if (l === '__v_isShallow') return t;
		if (l === '__v_raw' && o === (e ? (t ? e6 : gt) : t ? pt : ft).get(a)) return a;
		const u = F(a);
		if (!e) {
			if (u && D($1, l)) return Reflect.get($1, l, o);
			if (l === 'hasOwnProperty') return I4;
		}
		const c = Reflect.get(a, l, o);
		return (We(l) ? dt.has(l) : F4(l)) || (e || f2(a, 'get', l), t) ? c : c2(c) ? (u && Je(l) ? c : c.value) : j(c) ? (e ? mt(c) : e1(c)) : c;
	};
}
const O4 = ht(),
	R4 = ht(!0);
function ht(e = !1) {
	return function (r, a, l, o) {
		let u = r[a];
		if (w0(u) && c2(u) && !c2(l)) return !1;
		if (!e && (!Z0(l) && !w0(l) && ((u = N(u)), (l = N(l))), !F(r) && c2(u) && !c2(l))) return (u.value = l), !0;
		const c = F(r) && Je(a) ? Number(a) < r.length : D(r, a),
			h = Reflect.set(r, a, l, o);
		return r === N(o) && (c ? S0(l, u) && O2(r, 'set', a, l) : O2(r, 'add', a, l)), h;
	};
}
function D4(e, t) {
	const r = D(e, t);
	e[t];
	const a = Reflect.deleteProperty(e, t);
	return a && r && O2(e, 'delete', t, void 0), a;
}
function q4(e, t) {
	const r = Reflect.has(e, t);
	return (!We(t) || !dt.has(t)) && f2(e, 'has', t), r;
}
function N4(e) {
	return f2(e, 'iterate', F(e) ? 'length' : n0), Reflect.ownKeys(e);
}
const vt = { get: E4, set: O4, deleteProperty: D4, has: q4, ownKeys: N4 },
	U4 = {
		get: k4,
		set(e, t) {
			return !0;
		},
		deleteProperty(e, t) {
			return !0;
		},
	},
	K4 = l2({}, vt, { get: T4, set: R4 }),
	Ze = e => e,
	se = e => Reflect.getPrototypeOf(e);
function D0(e, t, r = !1, a = !1) {
	e = e.__v_raw;
	const l = N(e),
		o = N(t);
	r || (t !== o && f2(l, 'get', t), f2(l, 'get', o));
	const { has: u } = se(l),
		c = a ? Ze : r ? r1 : E0;
	if (u.call(l, t)) return c(e.get(t));
	if (u.call(l, o)) return c(e.get(o));
	e !== l && e.get(t);
}
function q0(e, t = !1) {
	const r = this.__v_raw,
		a = N(r),
		l = N(e);
	return t || (e !== l && f2(a, 'has', e), f2(a, 'has', l)), e === l ? r.has(e) : r.has(e) || r.has(l);
}
function N0(e, t = !1) {
	return (e = e.__v_raw), !t && f2(N(e), 'iterate', n0), Reflect.get(e, 'size', e);
}
function z1(e) {
	e = N(e);
	const t = N(this);
	return se(t).has.call(t, e) || (t.add(e), O2(t, 'add', e, e)), this;
}
function x1(e, t) {
	t = N(t);
	const r = N(this),
		{ has: a, get: l } = se(r);
	let o = a.call(r, e);
	o || ((e = N(e)), (o = a.call(r, e)));
	const u = l.call(r, e);
	return r.set(e, t), o ? S0(t, u) && O2(r, 'set', e, t) : O2(r, 'add', e, t), this;
}
function C1(e) {
	const t = N(this),
		{ has: r, get: a } = se(t);
	let l = r.call(t, e);
	l || ((e = N(e)), (l = r.call(t, e))), a && a.call(t, e);
	const o = t.delete(e);
	return l && O2(t, 'delete', e, void 0), o;
}
function H1() {
	const e = N(this),
		t = e.size !== 0,
		r = e.clear();
	return t && O2(e, 'clear', void 0, void 0), r;
}
function U0(e, t) {
	return function (a, l) {
		const o = this,
			u = o.__v_raw,
			c = N(u),
			h = t ? Ze : e ? r1 : E0;
		return !e && f2(c, 'iterate', n0), u.forEach((f, g) => a.call(l, h(f), h(g), o));
	};
}
function K0(e, t, r) {
	return function (...a) {
		const l = this.__v_raw,
			o = N(l),
			u = f0(o),
			c = e === 'entries' || (e === Symbol.iterator && u),
			h = e === 'keys' && u,
			f = l[e](...a),
			g = r ? Ze : t ? r1 : E0;
		return (
			!t && f2(o, 'iterate', h ? be : n0),
			{
				next() {
					const { value: $, done: x } = f.next();
					return x ? { value: $, done: x } : { value: c ? [g($[0]), g($[1])] : g($), done: x };
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function D2(e) {
	return function (...t) {
		return e === 'delete' ? !1 : this;
	};
}
function j4() {
	const e = {
			get(o) {
				return D0(this, o);
			},
			get size() {
				return N0(this);
			},
			has: q0,
			add: z1,
			set: x1,
			delete: C1,
			clear: H1,
			forEach: U0(!1, !1),
		},
		t = {
			get(o) {
				return D0(this, o, !1, !0);
			},
			get size() {
				return N0(this);
			},
			has: q0,
			add: z1,
			set: x1,
			delete: C1,
			clear: H1,
			forEach: U0(!1, !0),
		},
		r = {
			get(o) {
				return D0(this, o, !0);
			},
			get size() {
				return N0(this, !0);
			},
			has(o) {
				return q0.call(this, o, !0);
			},
			add: D2('add'),
			set: D2('set'),
			delete: D2('delete'),
			clear: D2('clear'),
			forEach: U0(!0, !1),
		},
		a = {
			get(o) {
				return D0(this, o, !0, !0);
			},
			get size() {
				return N0(this, !0);
			},
			has(o) {
				return q0.call(this, o, !0);
			},
			add: D2('add'),
			set: D2('set'),
			delete: D2('delete'),
			clear: D2('clear'),
			forEach: U0(!0, !0),
		};
	return (
		['keys', 'values', 'entries', Symbol.iterator].forEach(o => {
			(e[o] = K0(o, !1, !1)), (r[o] = K0(o, !0, !1)), (t[o] = K0(o, !1, !0)), (a[o] = K0(o, !0, !0));
		}),
		[e, r, t, a]
	);
}
const [W4, J4, Q4, Y4] = j4();
function Xe(e, t) {
	const r = t ? (e ? Y4 : Q4) : e ? J4 : W4;
	return (a, l, o) => (l === '__v_isReactive' ? !e : l === '__v_isReadonly' ? e : l === '__v_raw' ? a : Reflect.get(D(r, l) && l in a ? r : a, l, o));
}
const G4 = { get: Xe(!1, !1) },
	Z4 = { get: Xe(!1, !0) },
	X4 = { get: Xe(!0, !1) },
	ft = new WeakMap(),
	pt = new WeakMap(),
	gt = new WeakMap(),
	e6 = new WeakMap();
function t6(e) {
	switch (e) {
		case 'Object':
		case 'Array':
			return 1;
		case 'Map':
		case 'Set':
		case 'WeakMap':
		case 'WeakSet':
			return 2;
		default:
			return 0;
	}
}
function r6(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : t6(g4(e));
}
function e1(e) {
	return w0(e) ? e : t1(e, !1, vt, G4, ft);
}
function a6(e) {
	return t1(e, !1, K4, Z4, pt);
}
function mt(e) {
	return t1(e, !0, U4, X4, gt);
}
function t1(e, t, r, a, l) {
	if (!j(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
	const o = l.get(e);
	if (o) return o;
	const u = r6(e);
	if (u === 0) return e;
	const c = new Proxy(e, u === 2 ? a : r);
	return l.set(e, c), c;
}
function p0(e) {
	return w0(e) ? p0(e.__v_raw) : !!(e && e.__v_isReactive);
}
function w0(e) {
	return !!(e && e.__v_isReadonly);
}
function Z0(e) {
	return !!(e && e.__v_isShallow);
}
function wt(e) {
	return p0(e) || w0(e);
}
function N(e) {
	const t = e && e.__v_raw;
	return t ? N(t) : e;
}
function $t(e) {
	return G0(e, '__v_skip', !0), e;
}
const E0 = e => (j(e) ? e1(e) : e),
	r1 = e => (j(e) ? mt(e) : e);
function zt(e) {
	K2 && H2 && ((e = N(e)), ct(e.dep || (e.dep = Qe())));
}
function xt(e, t) {
	e = N(e);
	const r = e.dep;
	r && Le(r);
}
function c2(e) {
	return !!(e && e.__v_isRef === !0);
}
function Ct(e) {
	return l6(e, !1);
}
function l6(e, t) {
	return c2(e) ? e : new o6(e, t);
}
class o6 {
	constructor(t, r) {
		(this.__v_isShallow = r), (this.dep = void 0), (this.__v_isRef = !0), (this._rawValue = r ? t : N(t)), (this._value = r ? t : E0(t));
	}
	get value() {
		return zt(this), this._value;
	}
	set value(t) {
		const r = this.__v_isShallow || Z0(t) || w0(t);
		(t = r ? t : N(t)), S0(t, this._rawValue) && ((this._rawValue = t), (this._value = r ? t : E0(t)), xt(this));
	}
}
function s2(e) {
	return c2(e) ? e.value : e;
}
const n6 = {
	get: (e, t, r) => s2(Reflect.get(e, t, r)),
	set: (e, t, r, a) => {
		const l = e[t];
		return c2(l) && !c2(r) ? ((l.value = r), !0) : Reflect.set(e, t, r, a);
	},
};
function Ht(e) {
	return p0(e) ? e : new Proxy(e, n6);
}
class s6 {
	constructor(t, r, a, l) {
		(this._setter = r),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !1),
			(this._dirty = !0),
			(this.effect = new Ye(t, () => {
				this._dirty || ((this._dirty = !0), xt(this));
			})),
			(this.effect.computed = this),
			(this.effect.active = this._cacheable = !l),
			(this.__v_isReadonly = a);
	}
	get value() {
		const t = N(this);
		return zt(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value;
	}
	set value(t) {
		this._setter(t);
	}
}
function _6(e, t, r = !1) {
	let a, l;
	const o = P(e);
	return o ? ((a = e), (l = y2)) : ((a = e.get), (l = e.set)), new s6(a, l, o || !l, r);
}
function i6(e, ...t) {}
function j2(e, t, r, a) {
	let l;
	try {
		l = a ? e(...a) : e();
	} catch (o) {
		_e(o, t, r);
	}
	return l;
}
function $2(e, t, r, a) {
	if (P(e)) {
		const o = j2(e, t, r, a);
		return (
			o &&
				at(o) &&
				o.catch(u => {
					_e(u, t, r);
				}),
			o
		);
	}
	const l = [];
	for (let o = 0; o < e.length; o++) l.push($2(e[o], t, r, a));
	return l;
}
function _e(e, t, r, a = !0) {
	const l = t ? t.vnode : null;
	if (t) {
		let o = t.parent;
		const u = t.proxy,
			c = r;
		for (; o; ) {
			const f = o.ec;
			if (f) {
				for (let g = 0; g < f.length; g++) if (f[g](e, u, c) === !1) return;
			}
			o = o.parent;
		}
		const h = t.appContext.config.errorHandler;
		if (h) {
			j2(h, null, 10, [e, u, c]);
			return;
		}
	}
	u6(e, r, l, a);
}
function u6(e, t, r, a = !0) {
	console.error(e);
}
let T0 = !1,
	Se = !1;
const u2 = [];
let F2 = 0;
const g0 = [];
let k2 = null,
	a0 = 0;
const Mt = Promise.resolve();
let a1 = null;
function c6(e) {
	const t = a1 || Mt;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function d6(e) {
	let t = F2 + 1,
		r = u2.length;
	for (; t < r; ) {
		const a = (t + r) >>> 1;
		k0(u2[a]) < e ? (t = a + 1) : (r = a);
	}
	return t;
}
function l1(e) {
	(!u2.length || !u2.includes(e, T0 && e.allowRecurse ? F2 + 1 : F2)) && (e.id == null ? u2.push(e) : u2.splice(d6(e.id), 0, e), yt());
}
function yt() {
	!T0 && !Se && ((Se = !0), (a1 = Mt.then(Vt)));
}
function h6(e) {
	const t = u2.indexOf(e);
	t > F2 && u2.splice(t, 1);
}
function v6(e) {
	F(e) ? g0.push(...e) : (!k2 || !k2.includes(e, e.allowRecurse ? a0 + 1 : a0)) && g0.push(e), yt();
}
function M1(e, t = T0 ? F2 + 1 : 0) {
	for (; t < u2.length; t++) {
		const r = u2[t];
		r && r.pre && (u2.splice(t, 1), t--, r());
	}
}
function At(e) {
	if (g0.length) {
		const t = [...new Set(g0)];
		if (((g0.length = 0), k2)) {
			k2.push(...t);
			return;
		}
		for (k2 = t, k2.sort((r, a) => k0(r) - k0(a)), a0 = 0; a0 < k2.length; a0++) k2[a0]();
		(k2 = null), (a0 = 0);
	}
}
const k0 = e => (e.id == null ? 1 / 0 : e.id),
	f6 = (e, t) => {
		const r = k0(e) - k0(t);
		if (r === 0) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1;
		}
		return r;
	};
function Vt(e) {
	(Se = !1), (T0 = !0), u2.sort(f6);
	const t = y2;
	try {
		for (F2 = 0; F2 < u2.length; F2++) {
			const r = u2[F2];
			r && r.active !== !1 && j2(r, null, 14);
		}
	} finally {
		(F2 = 0), (u2.length = 0), At(), (T0 = !1), (a1 = null), (u2.length || g0.length) && Vt();
	}
}
function p6(e, t, ...r) {
	if (e.isUnmounted) return;
	const a = e.vnode.props || Y;
	let l = r;
	const o = t.startsWith('update:'),
		u = o && t.slice(7);
	if (u && u in a) {
		const g = `${u === 'modelValue' ? 'model' : u}Modifiers`,
			{ number: $, trim: x } = a[g] || Y;
		x && (l = r.map(B => (r2(B) ? B.trim() : B))), $ && (l = r.map($4));
	}
	let c,
		h = a[(c = ge(t))] || a[(c = ge(E2(t)))];
	!h && o && (h = a[(c = ge(z0(t)))]), h && $2(h, e, 6, l);
	const f = a[c + 'Once'];
	if (f) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		(e.emitted[c] = !0), $2(f, e, 6, l);
	}
}
function Bt(e, t, r = !1) {
	const a = t.emitsCache,
		l = a.get(e);
	if (l !== void 0) return l;
	const o = e.emits;
	let u = {},
		c = !1;
	if (!P(e)) {
		const h = f => {
			const g = Bt(f, t, !0);
			g && ((c = !0), l2(u, g));
		};
		!r && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
	}
	return !o && !c ? (j(e) && a.set(e, null), null) : (F(o) ? o.forEach(h => (u[h] = null)) : l2(u, o), j(e) && a.set(e, u), u);
}
function ie(e, t) {
	return !e || !ae(t) ? !1 : ((t = t.slice(2).replace(/Once$/, '')), D(e, t[0].toLowerCase() + t.slice(1)) || D(e, z0(t)) || D(e, t));
}
let d2 = null,
	bt = null;
function X0(e) {
	const t = d2;
	return (d2 = e), (bt = (e && e.type.__scopeId) || null), t;
}
function I2(e, t = d2, r) {
	if (!t || e._n) return e;
	const a = (...l) => {
		a._d && P1(-1);
		const o = X0(t);
		let u;
		try {
			u = e(...l);
		} finally {
			X0(o), a._d && P1(1);
		}
		return u;
	};
	return (a._n = !0), (a._c = !0), (a._d = !0), a;
}
function we(e) {
	const {
		type: t,
		vnode: r,
		proxy: a,
		withProxy: l,
		props: o,
		propsOptions: [u],
		slots: c,
		attrs: h,
		emit: f,
		render: g,
		renderCache: $,
		data: x,
		setupState: B,
		ctx: q,
		inheritAttrs: H,
	} = e;
	let E, O;
	const G = X0(e);
	try {
		if (r.shapeFlag & 4) {
			const T = l || a;
			(E = S2(g.call(T, T, $, o, B, x, q))), (O = h);
		} else {
			const T = t;
			(E = S2(T.length > 1 ? T(o, { attrs: h, slots: c, emit: f }) : T(o, null))), (O = t.props ? h : g6(h));
		}
	} catch (T) {
		(L0.length = 0), _e(T, e, 1), (E = U(z2));
	}
	let Z = E;
	if (O && H !== !1) {
		const T = Object.keys(O),
			{ shapeFlag: o2 } = Z;
		T.length && o2 & 7 && (u && T.some(Ke) && (O = m6(O, u)), (Z = Q2(Z, O)));
	}
	return r.dirs && ((Z = Q2(Z)), (Z.dirs = Z.dirs ? Z.dirs.concat(r.dirs) : r.dirs)), r.transition && (Z.transition = r.transition), (E = Z), X0(G), E;
}
const g6 = e => {
		let t;
		for (const r in e) (r === 'class' || r === 'style' || ae(r)) && ((t || (t = {}))[r] = e[r]);
		return t;
	},
	m6 = (e, t) => {
		const r = {};
		for (const a in e) (!Ke(a) || !(a.slice(9) in t)) && (r[a] = e[a]);
		return r;
	};
function w6(e, t, r) {
	const { props: a, children: l, component: o } = e,
		{ props: u, children: c, patchFlag: h } = t,
		f = o.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (r && h >= 0) {
		if (h & 1024) return !0;
		if (h & 16) return a ? y1(a, u, f) : !!u;
		if (h & 8) {
			const g = t.dynamicProps;
			for (let $ = 0; $ < g.length; $++) {
				const x = g[$];
				if (u[x] !== a[x] && !ie(f, x)) return !0;
			}
		}
	} else return (l || c) && (!c || !c.$stable) ? !0 : a === u ? !1 : a ? (u ? y1(a, u, f) : !0) : !!u;
	return !1;
}
function y1(e, t, r) {
	const a = Object.keys(t);
	if (a.length !== Object.keys(e).length) return !0;
	for (let l = 0; l < a.length; l++) {
		const o = a[l];
		if (t[o] !== e[o] && !ie(r, o)) return !0;
	}
	return !1;
}
function $6({ vnode: e, parent: t }, r) {
	for (; t && t.subTree === e; ) ((e = t.vnode).el = r), (t = t.parent);
}
const z6 = e => e.__isSuspense;
function x6(e, t) {
	t && t.pendingBranch ? (F(e) ? t.effects.push(...e) : t.effects.push(e)) : v6(e);
}
const j0 = {};
function $e(e, t, r) {
	return Lt(e, t, r);
}
function Lt(e, t, { immediate: r, deep: a, flush: l, onTrack: o, onTrigger: u } = Y) {
	var c;
	const h = b4() === ((c = _2) == null ? void 0 : c.scope) ? _2 : null;
	let f,
		g = !1,
		$ = !1;
	if (
		(c2(e)
			? ((f = () => e.value), (g = Z0(e)))
			: p0(e)
			? ((f = () => e), (a = !0))
			: F(e)
			? (($ = !0),
			  (g = e.some(T => p0(T) || Z0(T))),
			  (f = () =>
					e.map(T => {
						if (c2(T)) return T.value;
						if (p0(T)) return d0(T);
						if (P(T)) return j2(T, h, 2);
					})))
			: P(e)
			? t
				? (f = () => j2(e, h, 2))
				: (f = () => {
						if (!(h && h.isUnmounted)) return x && x(), $2(e, h, 3, [B]);
				  })
			: (f = y2),
		t && a)
	) {
		const T = f;
		f = () => d0(T());
	}
	let x,
		B = T => {
			x = G.onStop = () => {
				j2(T, h, 4);
			};
		},
		q;
	if (I0)
		if (((B = y2), t ? r && $2(t, h, 3, [f(), $ ? [] : void 0, B]) : f(), l === 'sync')) {
			const T = m3();
			q = T.__watcherHandles || (T.__watcherHandles = []);
		} else return y2;
	let H = $ ? new Array(e.length).fill(j0) : j0;
	const E = () => {
		if (G.active)
			if (t) {
				const T = G.run();
				(a || g || ($ ? T.some((o2, A2) => S0(o2, H[A2])) : S0(T, H))) &&
					(x && x(), $2(t, h, 3, [T, H === j0 ? void 0 : $ && H[0] === j0 ? [] : H, B]), (H = T));
			} else G.run();
	};
	E.allowRecurse = !!t;
	let O;
	l === 'sync' ? (O = E) : l === 'post' ? (O = () => v2(E, h && h.suspense)) : ((E.pre = !0), h && (E.id = h.uid), (O = () => l1(E)));
	const G = new Ye(f, O);
	t ? (r ? E() : (H = G.run())) : l === 'post' ? v2(G.run.bind(G), h && h.suspense) : G.run();
	const Z = () => {
		G.stop(), h && h.scope && je(h.scope.effects, G);
	};
	return q && q.push(Z), Z;
}
function C6(e, t, r) {
	const a = this.proxy,
		l = r2(e) ? (e.includes('.') ? St(a, e) : () => a[e]) : e.bind(a, a);
	let o;
	P(t) ? (o = t) : ((o = t.handler), (r = t));
	const u = _2;
	$0(this);
	const c = Lt(l, o.bind(a), r);
	return u ? $0(u) : s0(), c;
}
function St(e, t) {
	const r = t.split('.');
	return () => {
		let a = e;
		for (let l = 0; l < r.length && a; l++) a = a[r[l]];
		return a;
	};
}
function d0(e, t) {
	if (!j(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
	if ((t.add(e), c2(e))) d0(e.value, t);
	else if (F(e)) for (let r = 0; r < e.length; r++) d0(e[r], t);
	else if (rt(e) || f0(e))
		e.forEach(r => {
			d0(r, t);
		});
	else if (ot(e)) for (const r in e) d0(e[r], t);
	return e;
}
function Z2(e, t, r, a) {
	const l = e.dirs,
		o = t && t.dirs;
	for (let u = 0; u < l.length; u++) {
		const c = l[u];
		o && (c.oldValue = o[u].value);
		let h = c.dir[a];
		h && (x0(), $2(h, r, 8, [e.el, c, e, t]), C0());
	}
}
function H6() {
	const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
	return (
		Pt(() => {
			e.isMounted = !0;
		}),
		It(() => {
			e.isUnmounting = !0;
		}),
		e
	);
}
const w2 = [Function, Array],
	Ft = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: w2,
		onEnter: w2,
		onAfterEnter: w2,
		onEnterCancelled: w2,
		onBeforeLeave: w2,
		onLeave: w2,
		onAfterLeave: w2,
		onLeaveCancelled: w2,
		onBeforeAppear: w2,
		onAppear: w2,
		onAfterAppear: w2,
		onAppearCancelled: w2,
	},
	M6 = {
		name: 'BaseTransition',
		props: Ft,
		setup(e, { slots: t }) {
			const r = e4(),
				a = H6();
			let l;
			return () => {
				const o = t.default && Tt(t.default(), !0);
				if (!o || !o.length) return;
				let u = o[0];
				if (o.length > 1) {
					for (const H of o)
						if (H.type !== z2) {
							u = H;
							break;
						}
				}
				const c = N(e),
					{ mode: h } = c;
				if (a.isLeaving) return ze(u);
				const f = A1(u);
				if (!f) return ze(u);
				const g = Fe(f, c, a, r);
				Ee(f, g);
				const $ = r.subTree,
					x = $ && A1($);
				let B = !1;
				const { getTransitionKey: q } = f.type;
				if (q) {
					const H = q();
					l === void 0 ? (l = H) : H !== l && ((l = H), (B = !0));
				}
				if (x && x.type !== z2 && (!l0(f, x) || B)) {
					const H = Fe(x, c, a, r);
					if ((Ee(x, H), h === 'out-in'))
						return (
							(a.isLeaving = !0),
							(H.afterLeave = () => {
								(a.isLeaving = !1), r.update.active !== !1 && r.update();
							}),
							ze(u)
						);
					h === 'in-out' &&
						f.type !== z2 &&
						(H.delayLeave = (E, O, G) => {
							const Z = Et(a, x);
							(Z[String(x.key)] = x),
								(E._leaveCb = () => {
									O(), (E._leaveCb = void 0), delete g.delayedLeave;
								}),
								(g.delayedLeave = G);
						});
				}
				return u;
			};
		},
	},
	y6 = M6;
function Et(e, t) {
	const { leavingVNodes: r } = e;
	let a = r.get(t.type);
	return a || ((a = Object.create(null)), r.set(t.type, a)), a;
}
function Fe(e, t, r, a) {
	const {
			appear: l,
			mode: o,
			persisted: u = !1,
			onBeforeEnter: c,
			onEnter: h,
			onAfterEnter: f,
			onEnterCancelled: g,
			onBeforeLeave: $,
			onLeave: x,
			onAfterLeave: B,
			onLeaveCancelled: q,
			onBeforeAppear: H,
			onAppear: E,
			onAfterAppear: O,
			onAppearCancelled: G,
		} = t,
		Z = String(e.key),
		T = Et(r, e),
		o2 = (I, e2) => {
			I && $2(I, a, 9, e2);
		},
		A2 = (I, e2) => {
			const Q = e2[1];
			o2(I, e2), F(I) ? I.every(i2 => i2.length <= 1) && Q() : I.length <= 1 && Q();
		},
		V2 = {
			mode: o,
			persisted: u,
			beforeEnter(I) {
				let e2 = c;
				if (!r.isMounted)
					if (l) e2 = H || c;
					else return;
				I._leaveCb && I._leaveCb(!0);
				const Q = T[Z];
				Q && l0(e, Q) && Q.el._leaveCb && Q.el._leaveCb(), o2(e2, [I]);
			},
			enter(I) {
				let e2 = h,
					Q = f,
					i2 = g;
				if (!r.isMounted)
					if (l) (e2 = E || h), (Q = O || f), (i2 = G || g);
					else return;
				let b = !1;
				const X = (I._enterCb = p2 => {
					b || ((b = !0), p2 ? o2(i2, [I]) : o2(Q, [I]), V2.delayedLeave && V2.delayedLeave(), (I._enterCb = void 0));
				});
				e2 ? A2(e2, [I, X]) : X();
			},
			leave(I, e2) {
				const Q = String(e.key);
				if ((I._enterCb && I._enterCb(!0), r.isUnmounting)) return e2();
				o2($, [I]);
				let i2 = !1;
				const b = (I._leaveCb = X => {
					i2 || ((i2 = !0), e2(), X ? o2(q, [I]) : o2(B, [I]), (I._leaveCb = void 0), T[Q] === e && delete T[Q]);
				});
				(T[Q] = e), x ? A2(x, [I, b]) : b();
			},
			clone(I) {
				return Fe(I, t, r, a);
			},
		};
	return V2;
}
function ze(e) {
	if (ce(e)) return (e = Q2(e)), (e.children = null), e;
}
function A1(e) {
	return ce(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Ee(e, t) {
	e.shapeFlag & 6 && e.component
		? Ee(e.component.subTree, t)
		: e.shapeFlag & 128
		? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
		: (e.transition = t);
}
function Tt(e, t = !1, r) {
	let a = [],
		l = 0;
	for (let o = 0; o < e.length; o++) {
		let u = e[o];
		const c = r == null ? u.key : String(r) + String(u.key != null ? u.key : o);
		u.type === m2 ? (u.patchFlag & 128 && l++, (a = a.concat(Tt(u.children, t, c)))) : (t || u.type !== z2) && a.push(c != null ? Q2(u, { key: c }) : u);
	}
	if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
	return a;
}
function ue(e, t) {
	return P(e) ? (() => l2({ name: e.name }, t, { setup: e }))() : e;
}
const B0 = e => !!e.type.__asyncLoader,
	ce = e => e.type.__isKeepAlive;
function A6(e, t) {
	kt(e, 'a', t);
}
function V6(e, t) {
	kt(e, 'da', t);
}
function kt(e, t, r = _2) {
	const a =
		e.__wdc ||
		(e.__wdc = () => {
			let l = r;
			for (; l; ) {
				if (l.isDeactivated) return;
				l = l.parent;
			}
			return e();
		});
	if ((de(t, a, r), r)) {
		let l = r.parent;
		for (; l && l.parent; ) ce(l.parent.vnode) && B6(a, t, r, l), (l = l.parent);
	}
}
function B6(e, t, r, a) {
	const l = de(t, e, a, !0);
	Ot(() => {
		je(a[t], l);
	}, r);
}
function de(e, t, r = _2, a = !1) {
	if (r) {
		const l = r[e] || (r[e] = []),
			o =
				t.__weh ||
				(t.__weh = (...u) => {
					if (r.isUnmounted) return;
					x0(), $0(r);
					const c = $2(t, r, e, u);
					return s0(), C0(), c;
				});
		return a ? l.unshift(o) : l.push(o), o;
	}
}
const R2 =
		e =>
		(t, r = _2) =>
			(!I0 || e === 'sp') && de(e, (...a) => t(...a), r),
	b6 = R2('bm'),
	Pt = R2('m'),
	L6 = R2('bu'),
	S6 = R2('u'),
	It = R2('bum'),
	Ot = R2('um'),
	F6 = R2('sp'),
	E6 = R2('rtg'),
	T6 = R2('rtc');
function k6(e, t = _2) {
	de('ec', e, t);
}
const Rt = 'components';
function xe(e, t) {
	return I6(Rt, e, !0, t) || e;
}
const P6 = Symbol.for('v-ndc');
function I6(e, t, r = !0, a = !1) {
	const l = d2 || _2;
	if (l) {
		const o = l.type;
		if (e === Rt) {
			const c = v3(o, !1);
			if (c && (c === t || c === E2(t) || c === ne(E2(t)))) return o;
		}
		const u = V1(l[e] || o[e], t) || V1(l.appContext[e], t);
		return !u && a ? o : u;
	}
}
function V1(e, t) {
	return e && (e[t] || e[E2(t)] || e[ne(E2(t))]);
}
function O6(e, t, r, a) {
	let l;
	const o = r && r[a];
	if (F(e) || r2(e)) {
		l = new Array(e.length);
		for (let u = 0, c = e.length; u < c; u++) l[u] = t(e[u], u, void 0, o && o[u]);
	} else if (typeof e == 'number') {
		l = new Array(e);
		for (let u = 0; u < e; u++) l[u] = t(u + 1, u, void 0, o && o[u]);
	} else if (j(e))
		if (e[Symbol.iterator]) l = Array.from(e, (u, c) => t(u, c, void 0, o && o[c]));
		else {
			const u = Object.keys(e);
			l = new Array(u.length);
			for (let c = 0, h = u.length; c < h; c++) {
				const f = u[c];
				l[c] = t(e[f], f, c, o && o[c]);
			}
		}
	else l = [];
	return r && (r[a] = l), l;
}
function Te(e, t, r = {}, a, l) {
	if (d2.isCE || (d2.parent && B0(d2.parent) && d2.parent.isCE)) return t !== 'default' && (r.name = t), U('slot', r, a && a());
	let o = e[t];
	o && o._c && (o._d = !1), s();
	const u = o && Dt(o(r)),
		c = m0(m2, { key: r.key || (u && u.key) || `_${t}` }, u || (a ? a() : []), u && e._ === 1 ? 64 : -2);
	return !l && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']), o && o._c && (o._d = !0), c;
}
function Dt(e) {
	return e.some(t => (re(t) ? !(t.type === z2 || (t.type === m2 && !Dt(t.children))) : !0)) ? e : null;
}
const ke = e => (e ? (t4(e) ? i1(e) || e.proxy : ke(e.parent)) : null),
	b0 = l2(Object.create(null), {
		$: e => e,
		$el: e => e.vnode.el,
		$data: e => e.data,
		$props: e => e.props,
		$attrs: e => e.attrs,
		$slots: e => e.slots,
		$refs: e => e.refs,
		$parent: e => ke(e.parent),
		$root: e => ke(e.root),
		$emit: e => e.emit,
		$options: e => o1(e),
		$forceUpdate: e => e.f || (e.f = () => l1(e.update)),
		$nextTick: e => e.n || (e.n = c6.bind(e.proxy)),
		$watch: e => C6.bind(e),
	}),
	Ce = (e, t) => e !== Y && !e.__isScriptSetup && D(e, t),
	R6 = {
		get({ _: e }, t) {
			const { ctx: r, setupState: a, data: l, props: o, accessCache: u, type: c, appContext: h } = e;
			let f;
			if (t[0] !== '$') {
				const B = u[t];
				if (B !== void 0)
					switch (B) {
						case 1:
							return a[t];
						case 2:
							return l[t];
						case 4:
							return r[t];
						case 3:
							return o[t];
					}
				else {
					if (Ce(a, t)) return (u[t] = 1), a[t];
					if (l !== Y && D(l, t)) return (u[t] = 2), l[t];
					if ((f = e.propsOptions[0]) && D(f, t)) return (u[t] = 3), o[t];
					if (r !== Y && D(r, t)) return (u[t] = 4), r[t];
					Pe && (u[t] = 0);
				}
			}
			const g = b0[t];
			let $, x;
			if (g) return t === '$attrs' && f2(e, 'get', t), g(e);
			if (($ = c.__cssModules) && ($ = $[t])) return $;
			if (r !== Y && D(r, t)) return (u[t] = 4), r[t];
			if (((x = h.config.globalProperties), D(x, t))) return x[t];
		},
		set({ _: e }, t, r) {
			const { data: a, setupState: l, ctx: o } = e;
			return Ce(l, t) ? ((l[t] = r), !0) : a !== Y && D(a, t) ? ((a[t] = r), !0) : D(e.props, t) || (t[0] === '$' && t.slice(1) in e) ? !1 : ((o[t] = r), !0);
		},
		has({ _: { data: e, setupState: t, accessCache: r, ctx: a, appContext: l, propsOptions: o } }, u) {
			let c;
			return !!r[u] || (e !== Y && D(e, u)) || Ce(t, u) || ((c = o[0]) && D(c, u)) || D(a, u) || D(b0, u) || D(l.config.globalProperties, u);
		},
		defineProperty(e, t, r) {
			return r.get != null ? (e._.accessCache[t] = 0) : D(r, 'value') && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
		},
	};
function B1(e) {
	return F(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e;
}
let Pe = !0;
function D6(e) {
	const t = o1(e),
		r = e.proxy,
		a = e.ctx;
	(Pe = !1), t.beforeCreate && b1(t.beforeCreate, e, 'bc');
	const {
		data: l,
		computed: o,
		methods: u,
		watch: c,
		provide: h,
		inject: f,
		created: g,
		beforeMount: $,
		mounted: x,
		beforeUpdate: B,
		updated: q,
		activated: H,
		deactivated: E,
		beforeDestroy: O,
		beforeUnmount: G,
		destroyed: Z,
		unmounted: T,
		render: o2,
		renderTracked: A2,
		renderTriggered: V2,
		errorCaptured: I,
		serverPrefetch: e2,
		expose: Q,
		inheritAttrs: i2,
		components: b,
		directives: X,
		filters: p2,
	} = t;
	if ((f && q6(f, a, null), u))
		for (const t2 in u) {
			const W = u[t2];
			P(W) && (a[t2] = W.bind(r));
		}
	if (l) {
		const t2 = l.call(r, r);
		j(t2) && (e.data = e1(t2));
	}
	if (((Pe = !0), o))
		for (const t2 in o) {
			const W = o[t2],
				Y2 = P(W) ? W.bind(r, r) : P(W.get) ? W.get.bind(r, r) : y2,
				O0 = !P(W) && P(W.set) ? W.set.bind(r) : y2,
				G2 = _0({ get: Y2, set: O0 });
			Object.defineProperty(a, t2, { enumerable: !0, configurable: !0, get: () => G2.value, set: B2 => (G2.value = B2) });
		}
	if (c) for (const t2 in c) qt(c[t2], a, r, t2);
	if (h) {
		const t2 = P(h) ? h.call(r) : h;
		Reflect.ownKeys(t2).forEach(W => {
			J6(W, t2[W]);
		});
	}
	g && b1(g, e, 'c');
	function n2(t2, W) {
		F(W) ? W.forEach(Y2 => t2(Y2.bind(r))) : W && t2(W.bind(r));
	}
	if ((n2(b6, $), n2(Pt, x), n2(L6, B), n2(S6, q), n2(A6, H), n2(V6, E), n2(k6, I), n2(T6, A2), n2(E6, V2), n2(It, G), n2(Ot, T), n2(F6, e2), F(Q)))
		if (Q.length) {
			const t2 = e.exposed || (e.exposed = {});
			Q.forEach(W => {
				Object.defineProperty(t2, W, { get: () => r[W], set: Y2 => (r[W] = Y2) });
			});
		} else e.exposed || (e.exposed = {});
	o2 && e.render === y2 && (e.render = o2), i2 != null && (e.inheritAttrs = i2), b && (e.components = b), X && (e.directives = X);
}
function q6(e, t, r = y2) {
	F(e) && (e = Ie(e));
	for (const a in e) {
		const l = e[a];
		let o;
		j(l) ? ('default' in l ? (o = W2(l.from || a, l.default, !0)) : (o = W2(l.from || a))) : (o = W2(l)),
			c2(o) ? Object.defineProperty(t, a, { enumerable: !0, configurable: !0, get: () => o.value, set: u => (o.value = u) }) : (t[a] = o);
	}
}
function b1(e, t, r) {
	$2(F(e) ? e.map(a => a.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function qt(e, t, r, a) {
	const l = a.includes('.') ? St(r, a) : () => r[a];
	if (r2(e)) {
		const o = t[e];
		P(o) && $e(l, o);
	} else if (P(e)) $e(l, e.bind(r));
	else if (j(e))
		if (F(e)) e.forEach(o => qt(o, t, r, a));
		else {
			const o = P(e.handler) ? e.handler.bind(r) : t[e.handler];
			P(o) && $e(l, o, e);
		}
}
function o1(e) {
	const t = e.type,
		{ mixins: r, extends: a } = t,
		{
			mixins: l,
			optionsCache: o,
			config: { optionMergeStrategies: u },
		} = e.appContext,
		c = o.get(t);
	let h;
	return c ? (h = c) : !l.length && !r && !a ? (h = t) : ((h = {}), l.length && l.forEach(f => ee(h, f, u, !0)), ee(h, t, u)), j(t) && o.set(t, h), h;
}
function ee(e, t, r, a = !1) {
	const { mixins: l, extends: o } = t;
	o && ee(e, o, r, !0), l && l.forEach(u => ee(e, u, r, !0));
	for (const u in t)
		if (!(a && u === 'expose')) {
			const c = N6[u] || (r && r[u]);
			e[u] = c ? c(e[u], t[u]) : t[u];
		}
	return e;
}
const N6 = {
	data: L1,
	props: S1,
	emits: S1,
	methods: V0,
	computed: V0,
	beforeCreate: h2,
	created: h2,
	beforeMount: h2,
	mounted: h2,
	beforeUpdate: h2,
	updated: h2,
	beforeDestroy: h2,
	beforeUnmount: h2,
	destroyed: h2,
	unmounted: h2,
	activated: h2,
	deactivated: h2,
	errorCaptured: h2,
	serverPrefetch: h2,
	components: V0,
	directives: V0,
	watch: K6,
	provide: L1,
	inject: U6,
};
function L1(e, t) {
	return t
		? e
			? function () {
					return l2(P(e) ? e.call(this, this) : e, P(t) ? t.call(this, this) : t);
			  }
			: t
		: e;
}
function U6(e, t) {
	return V0(Ie(e), Ie(t));
}
function Ie(e) {
	if (F(e)) {
		const t = {};
		for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
		return t;
	}
	return e;
}
function h2(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function V0(e, t) {
	return e ? l2(Object.create(null), e, t) : t;
}
function S1(e, t) {
	return e ? (F(e) && F(t) ? [...new Set([...e, ...t])] : l2(Object.create(null), B1(e), B1(t ?? {}))) : t;
}
function K6(e, t) {
	if (!e) return t;
	if (!t) return e;
	const r = l2(Object.create(null), e);
	for (const a in t) r[a] = h2(e[a], t[a]);
	return r;
}
function Nt() {
	return {
		app: null,
		config: { isNativeTag: v4, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} },
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap(),
		propsCache: new WeakMap(),
		emitsCache: new WeakMap(),
	};
}
let j6 = 0;
function W6(e, t) {
	return function (a, l = null) {
		P(a) || (a = l2({}, a)), l != null && !j(l) && (l = null);
		const o = Nt(),
			u = new Set();
		let c = !1;
		const h = (o.app = {
			_uid: j6++,
			_component: a,
			_props: l,
			_container: null,
			_context: o,
			_instance: null,
			version: w3,
			get config() {
				return o.config;
			},
			set config(f) {},
			use(f, ...g) {
				return u.has(f) || (f && P(f.install) ? (u.add(f), f.install(h, ...g)) : P(f) && (u.add(f), f(h, ...g))), h;
			},
			mixin(f) {
				return o.mixins.includes(f) || o.mixins.push(f), h;
			},
			component(f, g) {
				return g ? ((o.components[f] = g), h) : o.components[f];
			},
			directive(f, g) {
				return g ? ((o.directives[f] = g), h) : o.directives[f];
			},
			mount(f, g, $) {
				if (!c) {
					const x = U(a, l);
					return (
						(x.appContext = o),
						g && t ? t(x, f) : e(x, f, $),
						(c = !0),
						(h._container = f),
						(f.__vue_app__ = h),
						i1(x.component) || x.component.proxy
					);
				}
			},
			unmount() {
				c && (e(null, h._container), delete h._container.__vue_app__);
			},
			provide(f, g) {
				return (o.provides[f] = g), h;
			},
			runWithContext(f) {
				te = h;
				try {
					return f();
				} finally {
					te = null;
				}
			},
		});
		return h;
	};
}
let te = null;
function J6(e, t) {
	if (_2) {
		let r = _2.provides;
		const a = _2.parent && _2.parent.provides;
		a === r && (r = _2.provides = Object.create(a)), (r[e] = t);
	}
}
function W2(e, t, r = !1) {
	const a = _2 || d2;
	if (a || te) {
		const l = a ? (a.parent == null ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides) : te._context.provides;
		if (l && e in l) return l[e];
		if (arguments.length > 1) return r && P(t) ? t.call(a && a.proxy) : t;
	}
}
function Q6(e, t, r, a = !1) {
	const l = {},
		o = {};
	G0(o, ve, 1), (e.propsDefaults = Object.create(null)), Ut(e, t, l, o);
	for (const u in e.propsOptions[0]) u in l || (l[u] = void 0);
	r ? (e.props = a ? l : a6(l)) : e.type.props ? (e.props = l) : (e.props = o), (e.attrs = o);
}
function Y6(e, t, r, a) {
	const {
			props: l,
			attrs: o,
			vnode: { patchFlag: u },
		} = e,
		c = N(l),
		[h] = e.propsOptions;
	let f = !1;
	if ((a || u > 0) && !(u & 16)) {
		if (u & 8) {
			const g = e.vnode.dynamicProps;
			for (let $ = 0; $ < g.length; $++) {
				let x = g[$];
				if (ie(e.emitsOptions, x)) continue;
				const B = t[x];
				if (h)
					if (D(o, x)) B !== o[x] && ((o[x] = B), (f = !0));
					else {
						const q = E2(x);
						l[q] = Oe(h, c, q, B, e, !1);
					}
				else B !== o[x] && ((o[x] = B), (f = !0));
			}
		}
	} else {
		Ut(e, t, l, o) && (f = !0);
		let g;
		for (const $ in c)
			(!t || (!D(t, $) && ((g = z0($)) === $ || !D(t, g)))) &&
				(h ? r && (r[$] !== void 0 || r[g] !== void 0) && (l[$] = Oe(h, c, $, void 0, e, !0)) : delete l[$]);
		if (o !== c) for (const $ in o) (!t || !D(t, $)) && (delete o[$], (f = !0));
	}
	f && O2(e, 'set', '$attrs');
}
function Ut(e, t, r, a) {
	const [l, o] = e.propsOptions;
	let u = !1,
		c;
	if (t)
		for (let h in t) {
			if (J0(h)) continue;
			const f = t[h];
			let g;
			l && D(l, (g = E2(h)))
				? !o || !o.includes(g)
					? (r[g] = f)
					: ((c || (c = {}))[g] = f)
				: ie(e.emitsOptions, h) || ((!(h in a) || f !== a[h]) && ((a[h] = f), (u = !0)));
		}
	if (o) {
		const h = N(r),
			f = c || Y;
		for (let g = 0; g < o.length; g++) {
			const $ = o[g];
			r[$] = Oe(l, h, $, f[$], e, !D(f, $));
		}
	}
	return u;
}
function Oe(e, t, r, a, l, o) {
	const u = e[r];
	if (u != null) {
		const c = D(u, 'default');
		if (c && a === void 0) {
			const h = u.default;
			if (u.type !== Function && !u.skipFactory && P(h)) {
				const { propsDefaults: f } = l;
				r in f ? (a = f[r]) : ($0(l), (a = f[r] = h.call(null, t)), s0());
			} else a = h;
		}
		u[0] && (o && !c ? (a = !1) : u[1] && (a === '' || a === z0(r)) && (a = !0));
	}
	return a;
}
function Kt(e, t, r = !1) {
	const a = t.propsCache,
		l = a.get(e);
	if (l) return l;
	const o = e.props,
		u = {},
		c = [];
	let h = !1;
	if (!P(e)) {
		const g = $ => {
			h = !0;
			const [x, B] = Kt($, t, !0);
			l2(u, x), B && c.push(...B);
		};
		!r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
	}
	if (!o && !h) return j(e) && a.set(e, v0), v0;
	if (F(o))
		for (let g = 0; g < o.length; g++) {
			const $ = E2(o[g]);
			F1($) && (u[$] = Y);
		}
	else if (o)
		for (const g in o) {
			const $ = E2(g);
			if (F1($)) {
				const x = o[g],
					B = (u[$] = F(x) || P(x) ? { type: x } : l2({}, x));
				if (B) {
					const q = k1(Boolean, B.type),
						H = k1(String, B.type);
					(B[0] = q > -1), (B[1] = H < 0 || q < H), (q > -1 || D(B, 'default')) && c.push($);
				}
			}
		}
	const f = [u, c];
	return j(e) && a.set(e, f), f;
}
function F1(e) {
	return e[0] !== '$';
}
function E1(e) {
	const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
	return t ? t[2] : e === null ? 'null' : '';
}
function T1(e, t) {
	return E1(e) === E1(t);
}
function k1(e, t) {
	return F(t) ? t.findIndex(r => T1(r, e)) : P(t) && T1(t, e) ? 0 : -1;
}
const jt = e => e[0] === '_' || e === '$stable',
	n1 = e => (F(e) ? e.map(S2) : [S2(e)]),
	G6 = (e, t, r) => {
		if (t._n) return t;
		const a = I2((...l) => n1(t(...l)), r);
		return (a._c = !1), a;
	},
	Wt = (e, t, r) => {
		const a = e._ctx;
		for (const l in e) {
			if (jt(l)) continue;
			const o = e[l];
			if (P(o)) t[l] = G6(l, o, a);
			else if (o != null) {
				const u = n1(o);
				t[l] = () => u;
			}
		}
	},
	Jt = (e, t) => {
		const r = n1(t);
		e.slots.default = () => r;
	},
	Z6 = (e, t) => {
		if (e.vnode.shapeFlag & 32) {
			const r = t._;
			r ? ((e.slots = N(t)), G0(t, '_', r)) : Wt(t, (e.slots = {}));
		} else (e.slots = {}), t && Jt(e, t);
		G0(e.slots, ve, 1);
	},
	X6 = (e, t, r) => {
		const { vnode: a, slots: l } = e;
		let o = !0,
			u = Y;
		if (a.shapeFlag & 32) {
			const c = t._;
			c ? (r && c === 1 ? (o = !1) : (l2(l, t), !r && c === 1 && delete l._)) : ((o = !t.$stable), Wt(t, l)), (u = t);
		} else t && (Jt(e, t), (u = { default: 1 }));
		if (o) for (const c in l) !jt(c) && !(c in u) && delete l[c];
	};
function Re(e, t, r, a, l = !1) {
	if (F(e)) {
		e.forEach((x, B) => Re(x, t && (F(t) ? t[B] : t), r, a, l));
		return;
	}
	if (B0(a) && !l) return;
	const o = a.shapeFlag & 4 ? i1(a.component) || a.component.proxy : a.el,
		u = l ? null : o,
		{ i: c, r: h } = e,
		f = t && t.r,
		g = c.refs === Y ? (c.refs = {}) : c.refs,
		$ = c.setupState;
	if ((f != null && f !== h && (r2(f) ? ((g[f] = null), D($, f) && ($[f] = null)) : c2(f) && (f.value = null)), P(h))) j2(h, c, 12, [u, g]);
	else {
		const x = r2(h),
			B = c2(h);
		if (x || B) {
			const q = () => {
				if (e.f) {
					const H = x ? (D($, h) ? $[h] : g[h]) : h.value;
					l
						? F(H) && je(H, o)
						: F(H)
						? H.includes(o) || H.push(o)
						: x
						? ((g[h] = [o]), D($, h) && ($[h] = g[h]))
						: ((h.value = [o]), e.k && (g[e.k] = h.value));
				} else x ? ((g[h] = u), D($, h) && ($[h] = u)) : B && ((h.value = u), e.k && (g[e.k] = u));
			};
			u ? ((q.id = -1), v2(q, r)) : q();
		}
	}
}
const v2 = x6;
function e3(e) {
	return t3(e);
}
function t3(e, t) {
	const r = Ae();
	r.__VUE__ = !0;
	const {
			insert: a,
			remove: l,
			patchProp: o,
			createElement: u,
			createText: c,
			createComment: h,
			setText: f,
			setElementText: g,
			parentNode: $,
			nextSibling: x,
			setScopeId: B = y2,
			insertStaticContent: q,
		} = e,
		H = (d, v, p, w = null, m = null, M = null, A = !1, C = null, y = !!v.dynamicChildren) => {
			if (d === v) return;
			d && !l0(d, v) && ((w = R0(d)), B2(d, m, M, !0), (d = null)), v.patchFlag === -2 && ((y = !1), (v.dynamicChildren = null));
			const { type: z, ref: L, shapeFlag: V } = v;
			switch (z) {
				case he:
					E(d, v, p, w);
					break;
				case z2:
					O(d, v, p, w);
					break;
				case Q0:
					d == null && G(v, p, w, A);
					break;
				case m2:
					b(d, v, p, w, m, M, A, C, y);
					break;
				default:
					V & 1
						? o2(d, v, p, w, m, M, A, C, y)
						: V & 6
						? X(d, v, p, w, m, M, A, C, y)
						: (V & 64 || V & 128) && z.process(d, v, p, w, m, M, A, C, y, i0);
			}
			L != null && m && Re(L, d && d.ref, M, v || d, !v);
		},
		E = (d, v, p, w) => {
			if (d == null) a((v.el = c(v.children)), p, w);
			else {
				const m = (v.el = d.el);
				v.children !== d.children && f(m, v.children);
			}
		},
		O = (d, v, p, w) => {
			d == null ? a((v.el = h(v.children || '')), p, w) : (v.el = d.el);
		},
		G = (d, v, p, w) => {
			[d.el, d.anchor] = q(d.children, v, p, w, d.el, d.anchor);
		},
		Z = ({ el: d, anchor: v }, p, w) => {
			let m;
			for (; d && d !== v; ) (m = x(d)), a(d, p, w), (d = m);
			a(v, p, w);
		},
		T = ({ el: d, anchor: v }) => {
			let p;
			for (; d && d !== v; ) (p = x(d)), l(d), (d = p);
			l(v);
		},
		o2 = (d, v, p, w, m, M, A, C, y) => {
			(A = A || v.type === 'svg'), d == null ? A2(v, p, w, m, M, A, C, y) : e2(d, v, m, M, A, C, y);
		},
		A2 = (d, v, p, w, m, M, A, C) => {
			let y, z;
			const { type: L, props: V, shapeFlag: S, transition: k, dirs: R } = d;
			if (
				((y = d.el = u(d.type, M, V && V.is, V)),
				S & 8 ? g(y, d.children) : S & 16 && I(d.children, y, null, w, m, M && L !== 'foreignObject', A, C),
				R && Z2(d, null, w, 'created'),
				V2(y, d, d.scopeId, A, w),
				V)
			) {
				for (const K in V) K !== 'value' && !J0(K) && o(y, K, null, V[K], M, d.children, w, m, T2);
				'value' in V && o(y, 'value', null, V.value), (z = V.onVnodeBeforeMount) && L2(z, w, d);
			}
			R && Z2(d, null, w, 'beforeMount');
			const J = (!m || (m && !m.pendingBranch)) && k && !k.persisted;
			J && k.beforeEnter(y),
				a(y, v, p),
				((z = V && V.onVnodeMounted) || J || R) &&
					v2(() => {
						z && L2(z, w, d), J && k.enter(y), R && Z2(d, null, w, 'mounted');
					}, m);
		},
		V2 = (d, v, p, w, m) => {
			if ((p && B(d, p), w)) for (let M = 0; M < w.length; M++) B(d, w[M]);
			if (m) {
				let M = m.subTree;
				if (v === M) {
					const A = m.vnode;
					V2(d, A, A.scopeId, A.slotScopeIds, m.parent);
				}
			}
		},
		I = (d, v, p, w, m, M, A, C, y = 0) => {
			for (let z = y; z < d.length; z++) {
				const L = (d[z] = C ? U2(d[z]) : S2(d[z]));
				H(null, L, v, p, w, m, M, A, C);
			}
		},
		e2 = (d, v, p, w, m, M, A) => {
			const C = (v.el = d.el);
			let { patchFlag: y, dynamicChildren: z, dirs: L } = v;
			y |= d.patchFlag & 16;
			const V = d.props || Y,
				S = v.props || Y;
			let k;
			p && X2(p, !1), (k = S.onVnodeBeforeUpdate) && L2(k, p, v, d), L && Z2(v, d, p, 'beforeUpdate'), p && X2(p, !0);
			const R = m && v.type !== 'foreignObject';
			if ((z ? Q(d.dynamicChildren, z, C, p, w, R, M) : A || W(d, v, C, null, p, w, R, M, !1), y > 0)) {
				if (y & 16) i2(C, v, V, S, p, w, m);
				else if ((y & 2 && V.class !== S.class && o(C, 'class', null, S.class, m), y & 4 && o(C, 'style', V.style, S.style, m), y & 8)) {
					const J = v.dynamicProps;
					for (let K = 0; K < J.length; K++) {
						const a2 = J[K],
							x2 = V[a2],
							u0 = S[a2];
						(u0 !== x2 || a2 === 'value') && o(C, a2, x2, u0, m, d.children, p, w, T2);
					}
				}
				y & 1 && d.children !== v.children && g(C, v.children);
			} else !A && z == null && i2(C, v, V, S, p, w, m);
			((k = S.onVnodeUpdated) || L) &&
				v2(() => {
					k && L2(k, p, v, d), L && Z2(v, d, p, 'updated');
				}, w);
		},
		Q = (d, v, p, w, m, M, A) => {
			for (let C = 0; C < v.length; C++) {
				const y = d[C],
					z = v[C],
					L = y.el && (y.type === m2 || !l0(y, z) || y.shapeFlag & 70) ? $(y.el) : p;
				H(y, z, L, null, w, m, M, A, !0);
			}
		},
		i2 = (d, v, p, w, m, M, A) => {
			if (p !== w) {
				if (p !== Y) for (const C in p) !J0(C) && !(C in w) && o(d, C, p[C], null, A, v.children, m, M, T2);
				for (const C in w) {
					if (J0(C)) continue;
					const y = w[C],
						z = p[C];
					y !== z && C !== 'value' && o(d, C, z, y, A, v.children, m, M, T2);
				}
				'value' in w && o(d, 'value', p.value, w.value);
			}
		},
		b = (d, v, p, w, m, M, A, C, y) => {
			const z = (v.el = d ? d.el : c('')),
				L = (v.anchor = d ? d.anchor : c(''));
			let { patchFlag: V, dynamicChildren: S, slotScopeIds: k } = v;
			k && (C = C ? C.concat(k) : k),
				d == null
					? (a(z, p, w), a(L, p, w), I(v.children, p, L, m, M, A, C, y))
					: V > 0 && V & 64 && S && d.dynamicChildren
					? (Q(d.dynamicChildren, S, p, m, M, A, C), (v.key != null || (m && v === m.subTree)) && Qt(d, v, !0))
					: W(d, v, p, L, m, M, A, C, y);
		},
		X = (d, v, p, w, m, M, A, C, y) => {
			(v.slotScopeIds = C), d == null ? (v.shapeFlag & 512 ? m.ctx.activate(v, p, w, A, y) : p2(v, p, w, m, M, A, y)) : H0(d, v, y);
		},
		p2 = (d, v, p, w, m, M, A) => {
			const C = (d.component = i3(d, w, m));
			if ((ce(d) && (C.ctx.renderer = i0), u3(C), C.asyncDep)) {
				if ((m && m.registerDep(C, n2), !d.el)) {
					const y = (C.subTree = U(z2));
					O(null, y, v, p);
				}
				return;
			}
			n2(C, d, v, p, m, M, A);
		},
		H0 = (d, v, p) => {
			const w = (v.component = d.component);
			if (w6(d, v, p))
				if (w.asyncDep && !w.asyncResolved) {
					t2(w, v, p);
					return;
				} else (w.next = v), h6(w.update), w.update();
			else (v.el = d.el), (w.vnode = v);
		},
		n2 = (d, v, p, w, m, M, A) => {
			const C = () => {
					if (d.isMounted) {
						let { next: L, bu: V, u: S, parent: k, vnode: R } = d,
							J = L,
							K;
						X2(d, !1),
							L ? ((L.el = R.el), t2(d, L, A)) : (L = R),
							V && me(V),
							(K = L.props && L.props.onVnodeBeforeUpdate) && L2(K, k, L, R),
							X2(d, !0);
						const a2 = we(d),
							x2 = d.subTree;
						(d.subTree = a2),
							H(x2, a2, $(x2.el), R0(x2), d, m, M),
							(L.el = a2.el),
							J === null && $6(d, a2.el),
							S && v2(S, m),
							(K = L.props && L.props.onVnodeUpdated) && v2(() => L2(K, k, L, R), m);
					} else {
						let L;
						const { el: V, props: S } = v,
							{ bm: k, m: R, parent: J } = d,
							K = B0(v);
						if ((X2(d, !1), k && me(k), !K && (L = S && S.onVnodeBeforeMount) && L2(L, J, v), X2(d, !0), V && pe)) {
							const a2 = () => {
								(d.subTree = we(d)), pe(V, d.subTree, d, m, null);
							};
							K ? v.type.__asyncLoader().then(() => !d.isUnmounted && a2()) : a2();
						} else {
							const a2 = (d.subTree = we(d));
							H(null, a2, p, w, d, m, M), (v.el = a2.el);
						}
						if ((R && v2(R, m), !K && (L = S && S.onVnodeMounted))) {
							const a2 = v;
							v2(() => L2(L, J, a2), m);
						}
						(v.shapeFlag & 256 || (J && B0(J.vnode) && J.vnode.shapeFlag & 256)) && d.a && v2(d.a, m), (d.isMounted = !0), (v = p = w = null);
					}
				},
				y = (d.effect = new Ye(C, () => l1(z), d.scope)),
				z = (d.update = () => y.run());
			(z.id = d.uid), X2(d, !0), z();
		},
		t2 = (d, v, p) => {
			v.component = d;
			const w = d.vnode.props;
			(d.vnode = v), (d.next = null), Y6(d, v.props, w, p), X6(d, v.children, p), x0(), M1(), C0();
		},
		W = (d, v, p, w, m, M, A, C, y = !1) => {
			const z = d && d.children,
				L = d ? d.shapeFlag : 0,
				V = v.children,
				{ patchFlag: S, shapeFlag: k } = v;
			if (S > 0) {
				if (S & 128) {
					O0(z, V, p, w, m, M, A, C, y);
					return;
				} else if (S & 256) {
					Y2(z, V, p, w, m, M, A, C, y);
					return;
				}
			}
			k & 8
				? (L & 16 && T2(z, m, M), V !== z && g(p, V))
				: L & 16
				? k & 16
					? O0(z, V, p, w, m, M, A, C, y)
					: T2(z, m, M, !0)
				: (L & 8 && g(p, ''), k & 16 && I(V, p, w, m, M, A, C, y));
		},
		Y2 = (d, v, p, w, m, M, A, C, y) => {
			(d = d || v0), (v = v || v0);
			const z = d.length,
				L = v.length,
				V = Math.min(z, L);
			let S;
			for (S = 0; S < V; S++) {
				const k = (v[S] = y ? U2(v[S]) : S2(v[S]));
				H(d[S], k, p, null, m, M, A, C, y);
			}
			z > L ? T2(d, m, M, !0, !1, V) : I(v, p, w, m, M, A, C, y, V);
		},
		O0 = (d, v, p, w, m, M, A, C, y) => {
			let z = 0;
			const L = v.length;
			let V = d.length - 1,
				S = L - 1;
			for (; z <= V && z <= S; ) {
				const k = d[z],
					R = (v[z] = y ? U2(v[z]) : S2(v[z]));
				if (l0(k, R)) H(k, R, p, null, m, M, A, C, y);
				else break;
				z++;
			}
			for (; z <= V && z <= S; ) {
				const k = d[V],
					R = (v[S] = y ? U2(v[S]) : S2(v[S]));
				if (l0(k, R)) H(k, R, p, null, m, M, A, C, y);
				else break;
				V--, S--;
			}
			if (z > V) {
				if (z <= S) {
					const k = S + 1,
						R = k < L ? v[k].el : w;
					for (; z <= S; ) H(null, (v[z] = y ? U2(v[z]) : S2(v[z])), p, R, m, M, A, C, y), z++;
				}
			} else if (z > S) for (; z <= V; ) B2(d[z], m, M, !0), z++;
			else {
				const k = z,
					R = z,
					J = new Map();
				for (z = R; z <= S; z++) {
					const g2 = (v[z] = y ? U2(v[z]) : S2(v[z]));
					g2.key != null && J.set(g2.key, z);
				}
				let K,
					a2 = 0;
				const x2 = S - R + 1;
				let u0 = !1,
					h1 = 0;
				const M0 = new Array(x2);
				for (z = 0; z < x2; z++) M0[z] = 0;
				for (z = k; z <= V; z++) {
					const g2 = d[z];
					if (a2 >= x2) {
						B2(g2, m, M, !0);
						continue;
					}
					let b2;
					if (g2.key != null) b2 = J.get(g2.key);
					else
						for (K = R; K <= S; K++)
							if (M0[K - R] === 0 && l0(g2, v[K])) {
								b2 = K;
								break;
							}
					b2 === void 0 ? B2(g2, m, M, !0) : ((M0[b2 - R] = z + 1), b2 >= h1 ? (h1 = b2) : (u0 = !0), H(g2, v[b2], p, null, m, M, A, C, y), a2++);
				}
				const v1 = u0 ? r3(M0) : v0;
				for (K = v1.length - 1, z = x2 - 1; z >= 0; z--) {
					const g2 = R + z,
						b2 = v[g2],
						f1 = g2 + 1 < L ? v[g2 + 1].el : w;
					M0[z] === 0 ? H(null, b2, p, f1, m, M, A, C, y) : u0 && (K < 0 || z !== v1[K] ? G2(b2, p, f1, 2) : K--);
				}
			}
		},
		G2 = (d, v, p, w, m = null) => {
			const { el: M, type: A, transition: C, children: y, shapeFlag: z } = d;
			if (z & 6) {
				G2(d.component.subTree, v, p, w);
				return;
			}
			if (z & 128) {
				d.suspense.move(v, p, w);
				return;
			}
			if (z & 64) {
				A.move(d, v, p, i0);
				return;
			}
			if (A === m2) {
				a(M, v, p);
				for (let V = 0; V < y.length; V++) G2(y[V], v, p, w);
				a(d.anchor, v, p);
				return;
			}
			if (A === Q0) {
				Z(d, v, p);
				return;
			}
			if (w !== 2 && z & 1 && C)
				if (w === 0) C.beforeEnter(M), a(M, v, p), v2(() => C.enter(M), m);
				else {
					const { leave: V, delayLeave: S, afterLeave: k } = C,
						R = () => a(M, v, p),
						J = () => {
							V(M, () => {
								R(), k && k();
							});
						};
					S ? S(M, R, J) : J();
				}
			else a(M, v, p);
		},
		B2 = (d, v, p, w = !1, m = !1) => {
			const { type: M, props: A, ref: C, children: y, dynamicChildren: z, shapeFlag: L, patchFlag: V, dirs: S } = d;
			if ((C != null && Re(C, null, p, d, !0), L & 256)) {
				v.ctx.deactivate(d);
				return;
			}
			const k = L & 1 && S,
				R = !B0(d);
			let J;
			if ((R && (J = A && A.onVnodeBeforeUnmount) && L2(J, v, d), L & 6)) h4(d.component, p, w);
			else {
				if (L & 128) {
					d.suspense.unmount(p, w);
					return;
				}
				k && Z2(d, null, v, 'beforeUnmount'),
					L & 64
						? d.type.remove(d, v, p, m, i0, w)
						: z && (M !== m2 || (V > 0 && V & 64))
						? T2(z, v, p, !1, !0)
						: ((M === m2 && V & 384) || (!m && L & 16)) && T2(y, v, p),
					w && c1(d);
			}
			((R && (J = A && A.onVnodeUnmounted)) || k) &&
				v2(() => {
					J && L2(J, v, d), k && Z2(d, null, v, 'unmounted');
				}, p);
		},
		c1 = d => {
			const { type: v, el: p, anchor: w, transition: m } = d;
			if (v === m2) {
				d4(p, w);
				return;
			}
			if (v === Q0) {
				T(d);
				return;
			}
			const M = () => {
				l(p), m && !m.persisted && m.afterLeave && m.afterLeave();
			};
			if (d.shapeFlag & 1 && m && !m.persisted) {
				const { leave: A, delayLeave: C } = m,
					y = () => A(p, M);
				C ? C(d.el, M, y) : y();
			} else M();
		},
		d4 = (d, v) => {
			let p;
			for (; d !== v; ) (p = x(d)), l(d), (d = p);
			l(v);
		},
		h4 = (d, v, p) => {
			const { bum: w, scope: m, update: M, subTree: A, um: C } = d;
			w && me(w),
				m.stop(),
				M && ((M.active = !1), B2(A, d, v, p)),
				C && v2(C, v),
				v2(() => {
					d.isUnmounted = !0;
				}, v),
				v &&
					v.pendingBranch &&
					!v.isUnmounted &&
					d.asyncDep &&
					!d.asyncResolved &&
					d.suspenseId === v.pendingId &&
					(v.deps--, v.deps === 0 && v.resolve());
		},
		T2 = (d, v, p, w = !1, m = !1, M = 0) => {
			for (let A = M; A < d.length; A++) B2(d[A], v, p, w, m);
		},
		R0 = d => (d.shapeFlag & 6 ? R0(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : x(d.anchor || d.el)),
		d1 = (d, v, p) => {
			d == null ? v._vnode && B2(v._vnode, null, null, !0) : H(v._vnode || null, d, v, null, null, null, p), M1(), At(), (v._vnode = d);
		},
		i0 = { p: H, um: B2, m: G2, r: c1, mt: p2, mc: I, pc: W, pbc: Q, n: R0, o: e };
	let fe, pe;
	return t && ([fe, pe] = t(i0)), { render: d1, hydrate: fe, createApp: W6(d1, fe) };
}
function X2({ effect: e, update: t }, r) {
	e.allowRecurse = t.allowRecurse = r;
}
function Qt(e, t, r = !1) {
	const a = e.children,
		l = t.children;
	if (F(a) && F(l))
		for (let o = 0; o < a.length; o++) {
			const u = a[o];
			let c = l[o];
			c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = l[o] = U2(l[o])), (c.el = u.el)), r || Qt(u, c)),
				c.type === he && (c.el = u.el);
		}
}
function r3(e) {
	const t = e.slice(),
		r = [0];
	let a, l, o, u, c;
	const h = e.length;
	for (a = 0; a < h; a++) {
		const f = e[a];
		if (f !== 0) {
			if (((l = r[r.length - 1]), e[l] < f)) {
				(t[a] = l), r.push(a);
				continue;
			}
			for (o = 0, u = r.length - 1; o < u; ) (c = (o + u) >> 1), e[r[c]] < f ? (o = c + 1) : (u = c);
			f < e[r[o]] && (o > 0 && (t[a] = r[o - 1]), (r[o] = a));
		}
	}
	for (o = r.length, u = r[o - 1]; o-- > 0; ) (r[o] = u), (u = t[u]);
	return r;
}
const a3 = e => e.__isTeleport,
	m2 = Symbol.for('v-fgt'),
	he = Symbol.for('v-txt'),
	z2 = Symbol.for('v-cmt'),
	Q0 = Symbol.for('v-stc'),
	L0 = [];
let M2 = null;
function s(e = !1) {
	L0.push((M2 = e ? null : []));
}
function l3() {
	L0.pop(), (M2 = L0[L0.length - 1] || null);
}
let P0 = 1;
function P1(e) {
	P0 += e;
}
function Yt(e) {
	return (e.dynamicChildren = P0 > 0 ? M2 || v0 : null), l3(), P0 > 0 && M2 && M2.push(e), e;
}
function _(e, t, r, a, l, o) {
	return Yt(n(e, t, r, a, l, o, !0));
}
function m0(e, t, r, a, l) {
	return Yt(U(e, t, r, a, l, !0));
}
function re(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function l0(e, t) {
	return e.type === t.type && e.key === t.key;
}
const ve = '__vInternal',
	Gt = ({ key: e }) => e ?? null,
	Y0 = ({ ref: e, ref_key: t, ref_for: r }) => (
		typeof e == 'number' && (e = '' + e), e != null ? (r2(e) || c2(e) || P(e) ? { i: d2, r: e, k: t, f: !!r } : e) : null
	);
function n(e, t = null, r = null, a = 0, l = null, o = e === m2 ? 0 : 1, u = !1, c = !1) {
	const h = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Gt(t),
		ref: t && Y0(t),
		scopeId: bt,
		slotScopeIds: null,
		children: r,
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
		shapeFlag: o,
		patchFlag: a,
		dynamicProps: l,
		dynamicChildren: null,
		appContext: null,
		ctx: d2,
	};
	return (
		c ? (s1(h, r), o & 128 && e.normalize(h)) : r && (h.shapeFlag |= r2(r) ? 8 : 16),
		P0 > 0 && !u && M2 && (h.patchFlag > 0 || o & 6) && h.patchFlag !== 32 && M2.push(h),
		h
	);
}
const U = o3;
function o3(e, t = null, r = null, a = 0, l = null, o = !1) {
	if (((!e || e === P6) && (e = z2), re(e))) {
		const c = Q2(e, t, !0);
		return r && s1(c, r), P0 > 0 && !o && M2 && (c.shapeFlag & 6 ? (M2[M2.indexOf(e)] = c) : M2.push(c)), (c.patchFlag |= -2), c;
	}
	if ((f3(e) && (e = e.__vccOpts), t)) {
		t = n3(t);
		let { class: c, style: h } = t;
		c && !r2(c) && (t.class = P2(c)), j(h) && (wt(h) && !F(h) && (h = l2({}, h)), (t.style = F0(h)));
	}
	const u = r2(e) ? 1 : z6(e) ? 128 : a3(e) ? 64 : j(e) ? 4 : P(e) ? 2 : 0;
	return n(e, t, r, a, l, u, o, !0);
}
function n3(e) {
	return e ? (wt(e) || ve in e ? l2({}, e) : e) : null;
}
function Q2(e, t, r = !1) {
	const { props: a, ref: l, patchFlag: o, children: u } = e,
		c = t ? Xt(a || {}, t) : a;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: c,
		key: c && Gt(c),
		ref: t && t.ref ? (r && l ? (F(l) ? l.concat(Y0(t)) : [l, Y0(t)]) : Y0(t)) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: u,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== m2 ? (o === -1 ? 16 : o | 16) : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: e.transition,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Q2(e.ssContent),
		ssFallback: e.ssFallback && Q2(e.ssFallback),
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
	};
}
function h0(e = ' ', t = 0) {
	return U(he, null, e, t);
}
function Zt(e, t) {
	const r = U(Q0, null, e);
	return (r.staticCount = t), r;
}
function I1(e = '', t = !1) {
	return t ? (s(), m0(z2, null, e)) : U(z2, null, e);
}
function S2(e) {
	return e == null || typeof e == 'boolean' ? U(z2) : F(e) ? U(m2, null, e.slice()) : typeof e == 'object' ? U2(e) : U(he, null, String(e));
}
function U2(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Q2(e);
}
function s1(e, t) {
	let r = 0;
	const { shapeFlag: a } = e;
	if (t == null) t = null;
	else if (F(t)) r = 16;
	else if (typeof t == 'object')
		if (a & 65) {
			const l = t.default;
			l && (l._c && (l._d = !1), s1(e, l()), l._c && (l._d = !0));
			return;
		} else {
			r = 32;
			const l = t._;
			!l && !(ve in t) ? (t._ctx = d2) : l === 3 && d2 && (d2.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
		}
	else P(t) ? ((t = { default: t, _ctx: d2 }), (r = 32)) : ((t = String(t)), a & 64 ? ((r = 16), (t = [h0(t)])) : (r = 8));
	(e.children = t), (e.shapeFlag |= r);
}
function Xt(...e) {
	const t = {};
	for (let r = 0; r < e.length; r++) {
		const a = e[r];
		for (const l in a)
			if (l === 'class') t.class !== a.class && (t.class = P2([t.class, a.class]));
			else if (l === 'style') t.style = F0([t.style, a.style]);
			else if (ae(l)) {
				const o = t[l],
					u = a[l];
				u && o !== u && !(F(o) && o.includes(u)) && (t[l] = o ? [].concat(o, u) : u);
			} else l !== '' && (t[l] = a[l]);
	}
	return t;
}
function L2(e, t, r, a = null) {
	$2(e, t, 7, [r, a]);
}
const s3 = Nt();
let _3 = 0;
function i3(e, t, r) {
	const a = e.type,
		l = (t ? t.appContext : e.appContext) || s3,
		o = {
			uid: _3++,
			vnode: e,
			type: a,
			parent: t,
			appContext: l,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new V4(!0),
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
			propsOptions: Kt(a, l),
			emitsOptions: Bt(a, l),
			emit: null,
			emitted: null,
			propsDefaults: Y,
			inheritAttrs: a.inheritAttrs,
			ctx: Y,
			data: Y,
			props: Y,
			attrs: Y,
			slots: Y,
			refs: Y,
			setupState: Y,
			setupContext: null,
			attrsProxy: null,
			slotsProxy: null,
			suspense: r,
			suspenseId: r ? r.pendingId : 0,
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
	return (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = p6.bind(null, o)), e.ce && e.ce(o), o;
}
let _2 = null;
const e4 = () => _2 || d2;
let _1,
	c0,
	O1 = '__VUE_INSTANCE_SETTERS__';
(c0 = Ae()[O1]) || (c0 = Ae()[O1] = []),
	c0.push(e => (_2 = e)),
	(_1 = e => {
		c0.length > 1 ? c0.forEach(t => t(e)) : c0[0](e);
	});
const $0 = e => {
		_1(e), e.scope.on();
	},
	s0 = () => {
		_2 && _2.scope.off(), _1(null);
	};
function t4(e) {
	return e.vnode.shapeFlag & 4;
}
let I0 = !1;
function u3(e, t = !1) {
	I0 = t;
	const { props: r, children: a } = e.vnode,
		l = t4(e);
	Q6(e, r, l, t), Z6(e, a);
	const o = l ? c3(e, t) : void 0;
	return (I0 = !1), o;
}
function c3(e, t) {
	const r = e.type;
	(e.accessCache = Object.create(null)), (e.proxy = $t(new Proxy(e.ctx, R6)));
	const { setup: a } = r;
	if (a) {
		const l = (e.setupContext = a.length > 1 ? h3(e) : null);
		$0(e), x0();
		const o = j2(a, e, 0, [e.props, l]);
		if ((C0(), s0(), at(o))) {
			if ((o.then(s0, s0), t))
				return o
					.then(u => {
						R1(e, u, t);
					})
					.catch(u => {
						_e(u, e, 0);
					});
			e.asyncDep = o;
		} else R1(e, o, t);
	} else r4(e, t);
}
function R1(e, t, r) {
	P(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : j(t) && (e.setupState = Ht(t)), r4(e, r);
}
let D1;
function r4(e, t, r) {
	const a = e.type;
	if (!e.render) {
		if (!t && D1 && !a.render) {
			const l = a.template || o1(e).template;
			if (l) {
				const { isCustomElement: o, compilerOptions: u } = e.appContext.config,
					{ delimiters: c, compilerOptions: h } = a,
					f = l2(l2({ isCustomElement: o, delimiters: c }, u), h);
				a.render = D1(l, f);
			}
		}
		e.render = a.render || y2;
	}
	$0(e), x0(), D6(e), C0(), s0();
}
function d3(e) {
	return (
		e.attrsProxy ||
		(e.attrsProxy = new Proxy(e.attrs, {
			get(t, r) {
				return f2(e, 'get', '$attrs'), t[r];
			},
		}))
	);
}
function h3(e) {
	const t = r => {
		e.exposed = r || {};
	};
	return {
		get attrs() {
			return d3(e);
		},
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function i1(e) {
	if (e.exposed)
		return (
			e.exposeProxy ||
			(e.exposeProxy = new Proxy(Ht($t(e.exposed)), {
				get(t, r) {
					if (r in t) return t[r];
					if (r in b0) return b0[r](e);
				},
				has(t, r) {
					return r in t || r in b0;
				},
			}))
		);
}
function v3(e, t = !0) {
	return P(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function f3(e) {
	return P(e) && '__vccOpts' in e;
}
const _0 = (e, t) => _6(e, t, I0);
function p3(e, t, r) {
	const a = arguments.length;
	return a === 2
		? j(t) && !F(t)
			? re(t)
				? U(e, null, [t])
				: U(e, t)
			: U(e, null, t)
		: (a > 3 ? (r = Array.prototype.slice.call(arguments, 2)) : a === 3 && re(r) && (r = [r]), U(e, t, r));
}
const g3 = Symbol.for('v-scx'),
	m3 = () => W2(g3),
	w3 = '3.3.4',
	$3 = 'http://www.w3.org/2000/svg',
	o0 = typeof document < 'u' ? document : null,
	q1 = o0 && o0.createElement('template'),
	z3 = {
		insert: (e, t, r) => {
			t.insertBefore(e, r || null);
		},
		remove: e => {
			const t = e.parentNode;
			t && t.removeChild(e);
		},
		createElement: (e, t, r, a) => {
			const l = t ? o0.createElementNS($3, e) : o0.createElement(e, r ? { is: r } : void 0);
			return e === 'select' && a && a.multiple != null && l.setAttribute('multiple', a.multiple), l;
		},
		createText: e => o0.createTextNode(e),
		createComment: e => o0.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: e => e.parentNode,
		nextSibling: e => e.nextSibling,
		querySelector: e => o0.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, '');
		},
		insertStaticContent(e, t, r, a, l, o) {
			const u = r ? r.previousSibling : t.lastChild;
			if (l && (l === o || l.nextSibling)) for (; t.insertBefore(l.cloneNode(!0), r), !(l === o || !(l = l.nextSibling)); );
			else {
				q1.innerHTML = a ? `<svg>${e}</svg>` : e;
				const c = q1.content;
				if (a) {
					const h = c.firstChild;
					for (; h.firstChild; ) c.appendChild(h.firstChild);
					c.removeChild(h);
				}
				t.insertBefore(c, r);
			}
			return [u ? u.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild];
		},
	};
function x3(e, t, r) {
	const a = e._vtc;
	a && (t = (t ? [t, ...a] : [...a]).join(' ')), t == null ? e.removeAttribute('class') : r ? e.setAttribute('class', t) : (e.className = t);
}
function C3(e, t, r) {
	const a = e.style,
		l = r2(r);
	if (r && !l) {
		if (t && !r2(t)) for (const o in t) r[o] == null && De(a, o, '');
		for (const o in r) De(a, o, r[o]);
	} else {
		const o = a.display;
		l ? t !== r && (a.cssText = r) : t && e.removeAttribute('style'), '_vod' in e && (a.display = o);
	}
}
const N1 = /\s*!important$/;
function De(e, t, r) {
	if (F(r)) r.forEach(a => De(e, t, a));
	else if ((r == null && (r = ''), t.startsWith('--'))) e.setProperty(t, r);
	else {
		const a = H3(e, t);
		N1.test(r) ? e.setProperty(z0(a), r.replace(N1, ''), 'important') : (e[a] = r);
	}
}
const U1 = ['Webkit', 'Moz', 'ms'],
	He = {};
function H3(e, t) {
	const r = He[t];
	if (r) return r;
	let a = E2(t);
	if (a !== 'filter' && a in e) return (He[t] = a);
	a = ne(a);
	for (let l = 0; l < U1.length; l++) {
		const o = U1[l] + a;
		if (o in e) return (He[t] = o);
	}
	return t;
}
const K1 = 'http://www.w3.org/1999/xlink';
function M3(e, t, r, a, l) {
	if (a && t.startsWith('xlink:')) r == null ? e.removeAttributeNS(K1, t.slice(6, t.length)) : e.setAttributeNS(K1, t, r);
	else {
		const o = A4(t);
		r == null || (o && !nt(r)) ? e.removeAttribute(t) : e.setAttribute(t, o ? '' : r);
	}
}
function y3(e, t, r, a, l, o, u) {
	if (t === 'innerHTML' || t === 'textContent') {
		a && u(a, l, o), (e[t] = r ?? '');
		return;
	}
	const c = e.tagName;
	if (t === 'value' && c !== 'PROGRESS' && !c.includes('-')) {
		e._value = r;
		const f = c === 'OPTION' ? e.getAttribute('value') : e.value,
			g = r ?? '';
		f !== g && (e.value = g), r == null && e.removeAttribute(t);
		return;
	}
	let h = !1;
	if (r === '' || r == null) {
		const f = typeof e[t];
		f === 'boolean' ? (r = nt(r)) : r == null && f === 'string' ? ((r = ''), (h = !0)) : f === 'number' && ((r = 0), (h = !0));
	}
	try {
		e[t] = r;
	} catch {}
	h && e.removeAttribute(t);
}
function A3(e, t, r, a) {
	e.addEventListener(t, r, a);
}
function V3(e, t, r, a) {
	e.removeEventListener(t, r, a);
}
function B3(e, t, r, a, l = null) {
	const o = e._vei || (e._vei = {}),
		u = o[t];
	if (a && u) u.value = a;
	else {
		const [c, h] = b3(t);
		if (a) {
			const f = (o[t] = F3(a, l));
			A3(e, c, f, h);
		} else u && (V3(e, c, u, h), (o[t] = void 0));
	}
}
const j1 = /(?:Once|Passive|Capture)$/;
function b3(e) {
	let t;
	if (j1.test(e)) {
		t = {};
		let a;
		for (; (a = e.match(j1)); ) (e = e.slice(0, e.length - a[0].length)), (t[a[0].toLowerCase()] = !0);
	}
	return [e[2] === ':' ? e.slice(3) : z0(e.slice(2)), t];
}
let Me = 0;
const L3 = Promise.resolve(),
	S3 = () => Me || (L3.then(() => (Me = 0)), (Me = Date.now()));
function F3(e, t) {
	const r = a => {
		if (!a._vts) a._vts = Date.now();
		else if (a._vts <= r.attached) return;
		$2(E3(a, r.value), t, 5, [a]);
	};
	return (r.value = e), (r.attached = S3()), r;
}
function E3(e, t) {
	if (F(t)) {
		const r = e.stopImmediatePropagation;
		return (
			(e.stopImmediatePropagation = () => {
				r.call(e), (e._stopped = !0);
			}),
			t.map(a => l => !l._stopped && a && a(l))
		);
	} else return t;
}
const W1 = /^on[a-z]/,
	T3 = (e, t, r, a, l = !1, o, u, c, h) => {
		t === 'class'
			? x3(e, a, l)
			: t === 'style'
			? C3(e, r, a)
			: ae(t)
			? Ke(t) || B3(e, t, r, a, u)
			: (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : k3(e, t, a, l))
			? y3(e, t, a, o, u, c, h)
			: (t === 'true-value' ? (e._trueValue = a) : t === 'false-value' && (e._falseValue = a), M3(e, t, a, l));
	};
function k3(e, t, r, a) {
	return a
		? !!(t === 'innerHTML' || t === 'textContent' || (t in e && W1.test(t) && P(r)))
		: t === 'spellcheck' ||
		  t === 'draggable' ||
		  t === 'translate' ||
		  t === 'form' ||
		  (t === 'list' && e.tagName === 'INPUT') ||
		  (t === 'type' && e.tagName === 'TEXTAREA') ||
		  (W1.test(t) && r2(r))
		? !1
		: t in e;
}
const q2 = 'transition',
	y0 = 'animation',
	u1 = (e, { slots: t }) => p3(y6, P3(e), t);
u1.displayName = 'Transition';
const a4 = {
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
};
u1.props = l2({}, Ft, a4);
const e0 = (e, t = []) => {
		F(e) ? e.forEach(r => r(...t)) : e && e(...t);
	},
	J1 = e => (e ? (F(e) ? e.some(t => t.length > 1) : e.length > 1) : !1);
function P3(e) {
	const t = {};
	for (const b in e) b in a4 || (t[b] = e[b]);
	if (e.css === !1) return t;
	const {
			name: r = 'v',
			type: a,
			duration: l,
			enterFromClass: o = `${r}-enter-from`,
			enterActiveClass: u = `${r}-enter-active`,
			enterToClass: c = `${r}-enter-to`,
			appearFromClass: h = o,
			appearActiveClass: f = u,
			appearToClass: g = c,
			leaveFromClass: $ = `${r}-leave-from`,
			leaveActiveClass: x = `${r}-leave-active`,
			leaveToClass: B = `${r}-leave-to`,
		} = e,
		q = I3(l),
		H = q && q[0],
		E = q && q[1],
		{
			onBeforeEnter: O,
			onEnter: G,
			onEnterCancelled: Z,
			onLeave: T,
			onLeaveCancelled: o2,
			onBeforeAppear: A2 = O,
			onAppear: V2 = G,
			onAppearCancelled: I = Z,
		} = t,
		e2 = (b, X, p2) => {
			t0(b, X ? g : c), t0(b, X ? f : u), p2 && p2();
		},
		Q = (b, X) => {
			(b._isLeaving = !1), t0(b, $), t0(b, B), t0(b, x), X && X();
		},
		i2 = b => (X, p2) => {
			const H0 = b ? V2 : G,
				n2 = () => e2(X, b, p2);
			e0(H0, [X, n2]),
				Q1(() => {
					t0(X, b ? h : o), N2(X, b ? g : c), J1(H0) || Y1(X, a, H, n2);
				});
		};
	return l2(t, {
		onBeforeEnter(b) {
			e0(O, [b]), N2(b, o), N2(b, u);
		},
		onBeforeAppear(b) {
			e0(A2, [b]), N2(b, h), N2(b, f);
		},
		onEnter: i2(!1),
		onAppear: i2(!0),
		onLeave(b, X) {
			b._isLeaving = !0;
			const p2 = () => Q(b, X);
			N2(b, $),
				D3(),
				N2(b, x),
				Q1(() => {
					b._isLeaving && (t0(b, $), N2(b, B), J1(T) || Y1(b, a, E, p2));
				}),
				e0(T, [b, p2]);
		},
		onEnterCancelled(b) {
			e2(b, !1), e0(Z, [b]);
		},
		onAppearCancelled(b) {
			e2(b, !0), e0(I, [b]);
		},
		onLeaveCancelled(b) {
			Q(b), e0(o2, [b]);
		},
	});
}
function I3(e) {
	if (e == null) return null;
	if (j(e)) return [ye(e.enter), ye(e.leave)];
	{
		const t = ye(e);
		return [t, t];
	}
}
function ye(e) {
	return z4(e);
}
function N2(e, t) {
	t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set())).add(t);
}
function t0(e, t) {
	t.split(/\s+/).forEach(a => a && e.classList.remove(a));
	const { _vtc: r } = e;
	r && (r.delete(t), r.size || (e._vtc = void 0));
}
function Q1(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
let O3 = 0;
function Y1(e, t, r, a) {
	const l = (e._endId = ++O3),
		o = () => {
			l === e._endId && a();
		};
	if (r) return setTimeout(o, r);
	const { type: u, timeout: c, propCount: h } = R3(e, t);
	if (!u) return a();
	const f = u + 'end';
	let g = 0;
	const $ = () => {
			e.removeEventListener(f, x), o();
		},
		x = B => {
			B.target === e && ++g >= h && $();
		};
	setTimeout(() => {
		g < h && $();
	}, c + 1),
		e.addEventListener(f, x);
}
function R3(e, t) {
	const r = window.getComputedStyle(e),
		a = q => (r[q] || '').split(', '),
		l = a(`${q2}Delay`),
		o = a(`${q2}Duration`),
		u = G1(l, o),
		c = a(`${y0}Delay`),
		h = a(`${y0}Duration`),
		f = G1(c, h);
	let g = null,
		$ = 0,
		x = 0;
	t === q2
		? u > 0 && ((g = q2), ($ = u), (x = o.length))
		: t === y0
		? f > 0 && ((g = y0), ($ = f), (x = h.length))
		: (($ = Math.max(u, f)), (g = $ > 0 ? (u > f ? q2 : y0) : null), (x = g ? (g === q2 ? o.length : h.length) : 0));
	const B = g === q2 && /\b(transform|all)(,|$)/.test(a(`${q2}Property`).toString());
	return { type: g, timeout: $, propCount: x, hasTransform: B };
}
function G1(e, t) {
	for (; e.length < t.length; ) e = e.concat(e);
	return Math.max(...t.map((r, a) => Z1(r) + Z1(e[a])));
}
function Z1(e) {
	return Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function D3() {
	return document.body.offsetHeight;
}
const q3 = ['ctrl', 'shift', 'alt', 'meta'],
	N3 = {
		stop: e => e.stopPropagation(),
		prevent: e => e.preventDefault(),
		self: e => e.target !== e.currentTarget,
		ctrl: e => !e.ctrlKey,
		shift: e => !e.shiftKey,
		alt: e => !e.altKey,
		meta: e => !e.metaKey,
		left: e => 'button' in e && e.button !== 0,
		middle: e => 'button' in e && e.button !== 1,
		right: e => 'button' in e && e.button !== 2,
		exact: (e, t) => q3.some(r => e[`${r}Key`] && !t.includes(r)),
	},
	X1 =
		(e, t) =>
		(r, ...a) => {
			for (let l = 0; l < t.length; l++) {
				const o = N3[t[l]];
				if (o && o(r, t)) return;
			}
			return e(r, ...a);
		},
	U3 = l2({ patchProp: T3 }, z3);
let et;
function K3() {
	return et || (et = e3(U3));
}
const j3 = (...e) => {
	const t = K3().createApp(...e),
		{ mount: r } = t;
	return (
		(t.mount = a => {
			const l = W3(a);
			if (!l) return;
			const o = t._component;
			!P(o) && !o.render && !o.template && (o.template = l.innerHTML), (l.innerHTML = '');
			const u = r(l, !1, l instanceof SVGElement);
			return l instanceof Element && (l.removeAttribute('v-cloak'), l.setAttribute('data-v-app', '')), u;
		}),
		t
	);
};
function W3(e) {
	return r2(e) ? document.querySelector(e) : e;
}
function J3(e) {
	for (var t = -1, r = e == null ? 0 : e.length, a = {}; ++t < r; ) {
		var l = e[t];
		a[l[0]] = l[1];
	}
	return a;
}
const Q3 = e => e === void 0,
	Y3 = e => typeof e == 'number',
	G3 = e => (r2(e) ? !Number.isNaN(Number(e)) : !1);
function Z3(e, t = 'px') {
	if (!e) return '';
	if (Y3(e) || G3(e)) return `${e}${t}`;
	if (r2(e)) return e;
}
/*! Element Plus Icons Vue v2.1.0 */ var X3 = { name: 'AddLocation' },
	i = (e, t) => {
		let r = e.__vccOpts || e;
		for (let [a, l] of t) r[a] = l;
		return r;
	},
	er = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	tr = n('path', { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' }, null, -1),
	rr = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z',
		},
		null,
		-1,
	),
	ar = n('path', { fill: 'currentColor', d: 'M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z' }, null, -1),
	lr = [tr, rr, ar];
function or(e, t, r, a, l, o) {
	return s(), _('svg', er, lr);
}
var nr = i(X3, [
		['render', or],
		['__file', 'add-location.vue'],
	]),
	sr = { name: 'Aim' },
	_r = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ir = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	ur = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z',
		},
		null,
		-1,
	),
	cr = [ir, ur];
function dr(e, t, r, a, l, o) {
	return s(), _('svg', _r, cr);
}
var hr = i(sr, [
		['render', dr],
		['__file', 'aim.vue'],
	]),
	vr = { name: 'AlarmClock' },
	fr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	pr = n('path', { fill: 'currentColor', d: 'M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z' }, null, -1),
	gr = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z',
		},
		null,
		-1,
	),
	mr = [pr, gr];
function wr(e, t, r, a, l, o) {
	return s(), _('svg', fr, mr);
}
var $r = i(vr, [
		['render', wr],
		['__file', 'alarm-clock.vue'],
	]),
	zr = { name: 'Apple' },
	xr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Cr = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z',
		},
		null,
		-1,
	),
	Hr = [Cr];
function Mr(e, t, r, a, l, o) {
	return s(), _('svg', xr, Hr);
}
var yr = i(zr, [
		['render', Mr],
		['__file', 'apple.vue'],
	]),
	Ar = { name: 'ArrowDownBold' },
	Vr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Br = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z',
		},
		null,
		-1,
	),
	br = [Br];
function Lr(e, t, r, a, l, o) {
	return s(), _('svg', Vr, br);
}
var Sr = i(Ar, [
		['render', Lr],
		['__file', 'arrow-down-bold.vue'],
	]),
	Fr = { name: 'ArrowDown' },
	Er = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Tr = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z',
		},
		null,
		-1,
	),
	kr = [Tr];
function Pr(e, t, r, a, l, o) {
	return s(), _('svg', Er, kr);
}
var Ir = i(Fr, [
		['render', Pr],
		['__file', 'arrow-down.vue'],
	]),
	Or = { name: 'ArrowLeftBold' },
	Rr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Dr = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z',
		},
		null,
		-1,
	),
	qr = [Dr];
function Nr(e, t, r, a, l, o) {
	return s(), _('svg', Rr, qr);
}
var Ur = i(Or, [
		['render', Nr],
		['__file', 'arrow-left-bold.vue'],
	]),
	Kr = { name: 'ArrowLeft' },
	jr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Wr = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z',
		},
		null,
		-1,
	),
	Jr = [Wr];
function Qr(e, t, r, a, l, o) {
	return s(), _('svg', jr, Jr);
}
var Yr = i(Kr, [
		['render', Qr],
		['__file', 'arrow-left.vue'],
	]),
	Gr = { name: 'ArrowRightBold' },
	Zr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Xr = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z',
		},
		null,
		-1,
	),
	e8 = [Xr];
function t8(e, t, r, a, l, o) {
	return s(), _('svg', Zr, e8);
}
var r8 = i(Gr, [
		['render', t8],
		['__file', 'arrow-right-bold.vue'],
	]),
	a8 = { name: 'ArrowRight' },
	l8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	o8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z',
		},
		null,
		-1,
	),
	n8 = [o8];
function s8(e, t, r, a, l, o) {
	return s(), _('svg', l8, n8);
}
var _8 = i(a8, [
		['render', s8],
		['__file', 'arrow-right.vue'],
	]),
	i8 = { name: 'ArrowUpBold' },
	u8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	c8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z',
		},
		null,
		-1,
	),
	d8 = [c8];
function h8(e, t, r, a, l, o) {
	return s(), _('svg', u8, d8);
}
var v8 = i(i8, [
		['render', h8],
		['__file', 'arrow-up-bold.vue'],
	]),
	f8 = { name: 'ArrowUp' },
	p8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	g8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z',
		},
		null,
		-1,
	),
	m8 = [g8];
function w8(e, t, r, a, l, o) {
	return s(), _('svg', p8, m8);
}
var $8 = i(f8, [
		['render', w8],
		['__file', 'arrow-up.vue'],
	]),
	z8 = { name: 'Avatar' },
	x8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	C8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z',
		},
		null,
		-1,
	),
	H8 = [C8];
function M8(e, t, r, a, l, o) {
	return s(), _('svg', x8, H8);
}
var y8 = i(z8, [
		['render', M8],
		['__file', 'avatar.vue'],
	]),
	A8 = { name: 'Back' },
	V8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	B8 = n('path', { fill: 'currentColor', d: 'M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z' }, null, -1),
	b8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z',
		},
		null,
		-1,
	),
	L8 = [B8, b8];
function S8(e, t, r, a, l, o) {
	return s(), _('svg', V8, L8);
}
var F8 = i(A8, [
		['render', S8],
		['__file', 'back.vue'],
	]),
	E8 = { name: 'Baseball' },
	T8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	k8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z',
		},
		null,
		-1,
	),
	P8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z',
		},
		null,
		-1,
	),
	I8 = [k8, P8];
function O8(e, t, r, a, l, o) {
	return s(), _('svg', T8, I8);
}
var R8 = i(E8, [
		['render', O8],
		['__file', 'baseball.vue'],
	]),
	D8 = { name: 'Basketball' },
	q8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	N8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z',
		},
		null,
		-1,
	),
	U8 = [N8];
function K8(e, t, r, a, l, o) {
	return s(), _('svg', q8, U8);
}
var j8 = i(D8, [
		['render', K8],
		['__file', 'basketball.vue'],
	]),
	W8 = { name: 'BellFilled' },
	J8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Q8 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z',
		},
		null,
		-1,
	),
	Y8 = [Q8];
function G8(e, t, r, a, l, o) {
	return s(), _('svg', J8, Y8);
}
var Z8 = i(W8, [
		['render', G8],
		['__file', 'bell-filled.vue'],
	]),
	X8 = { name: 'Bell' },
	ea = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ta = n('path', { fill: 'currentColor', d: 'M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z' }, null, -1),
	ra = n('path', { fill: 'currentColor', d: 'M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z' }, null, -1),
	aa = n('path', { fill: 'currentColor', d: 'M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z' }, null, -1),
	la = [ta, ra, aa];
function oa(e, t, r, a, l, o) {
	return s(), _('svg', ea, la);
}
var na = i(X8, [
		['render', oa],
		['__file', 'bell.vue'],
	]),
	sa = { name: 'Bicycle' },
	_a = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ia = Zt(
		'<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>',
		5,
	),
	ua = [ia];
function ca(e, t, r, a, l, o) {
	return s(), _('svg', _a, ua);
}
var da = i(sa, [
		['render', ca],
		['__file', 'bicycle.vue'],
	]),
	ha = { name: 'BottomLeft' },
	va = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	fa = n('path', { fill: 'currentColor', d: 'M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z' }, null, -1),
	pa = n('path', { fill: 'currentColor', d: 'M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z' }, null, -1),
	ga = [fa, pa];
function ma(e, t, r, a, l, o) {
	return s(), _('svg', va, ga);
}
var wa = i(ha, [
		['render', ma],
		['__file', 'bottom-left.vue'],
	]),
	$a = { name: 'BottomRight' },
	za = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	xa = n('path', { fill: 'currentColor', d: 'M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z' }, null, -1),
	Ca = n('path', { fill: 'currentColor', d: 'M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z' }, null, -1),
	Ha = [xa, Ca];
function Ma(e, t, r, a, l, o) {
	return s(), _('svg', za, Ha);
}
var ya = i($a, [
		['render', Ma],
		['__file', 'bottom-right.vue'],
	]),
	Aa = { name: 'Bottom' },
	Va = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ba = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z',
		},
		null,
		-1,
	),
	ba = [Ba];
function La(e, t, r, a, l, o) {
	return s(), _('svg', Va, ba);
}
var Sa = i(Aa, [
		['render', La],
		['__file', 'bottom.vue'],
	]),
	Fa = { name: 'Bowl' },
	Ea = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ta = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z',
		},
		null,
		-1,
	),
	ka = [Ta];
function Pa(e, t, r, a, l, o) {
	return s(), _('svg', Ea, ka);
}
var Ia = i(Fa, [
		['render', Pa],
		['__file', 'bowl.vue'],
	]),
	Oa = { name: 'Box' },
	Ra = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Da = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z',
		},
		null,
		-1,
	),
	qa = n('path', { fill: 'currentColor', d: 'M64 320h896v64H64z' }, null, -1),
	Na = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z',
		},
		null,
		-1,
	),
	Ua = [Da, qa, Na];
function Ka(e, t, r, a, l, o) {
	return s(), _('svg', Ra, Ua);
}
var ja = i(Oa, [
		['render', Ka],
		['__file', 'box.vue'],
	]),
	Wa = { name: 'Briefcase' },
	Ja = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Qa = n('path', { fill: 'currentColor', d: 'M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z' }, null, -1),
	Ya = [Qa];
function Ga(e, t, r, a, l, o) {
	return s(), _('svg', Ja, Ya);
}
var Za = i(Wa, [
		['render', Ga],
		['__file', 'briefcase.vue'],
	]),
	Xa = { name: 'BrushFilled' },
	el = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	tl = n(
		'path',
		{ fill: 'currentColor', d: 'M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z' },
		null,
		-1,
	),
	rl = [tl];
function al(e, t, r, a, l, o) {
	return s(), _('svg', el, rl);
}
var ll = i(Xa, [
		['render', al],
		['__file', 'brush-filled.vue'],
	]),
	ol = { name: 'Brush' },
	nl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	sl = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z',
		},
		null,
		-1,
	),
	_l = [sl];
function il(e, t, r, a, l, o) {
	return s(), _('svg', nl, _l);
}
var ul = i(ol, [
		['render', il],
		['__file', 'brush.vue'],
	]),
	cl = { name: 'Burger' },
	dl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	hl = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z',
		},
		null,
		-1,
	),
	vl = [hl];
function fl(e, t, r, a, l, o) {
	return s(), _('svg', dl, vl);
}
var pl = i(cl, [
		['render', fl],
		['__file', 'burger.vue'],
	]),
	gl = { name: 'Calendar' },
	ml = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	wl = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z',
		},
		null,
		-1,
	),
	$l = [wl];
function zl(e, t, r, a, l, o) {
	return s(), _('svg', ml, $l);
}
var xl = i(gl, [
		['render', zl],
		['__file', 'calendar.vue'],
	]),
	Cl = { name: 'CameraFilled' },
	Hl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ml = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z',
		},
		null,
		-1,
	),
	yl = [Ml];
function Al(e, t, r, a, l, o) {
	return s(), _('svg', Hl, yl);
}
var Vl = i(Cl, [
		['render', Al],
		['__file', 'camera-filled.vue'],
	]),
	Bl = { name: 'Camera' },
	bl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ll = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z',
		},
		null,
		-1,
	),
	Sl = [Ll];
function Fl(e, t, r, a, l, o) {
	return s(), _('svg', bl, Sl);
}
var El = i(Bl, [
		['render', Fl],
		['__file', 'camera.vue'],
	]),
	Tl = { name: 'CaretBottom' },
	kl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Pl = n('path', { fill: 'currentColor', d: 'm192 384 320 384 320-384z' }, null, -1),
	Il = [Pl];
function Ol(e, t, r, a, l, o) {
	return s(), _('svg', kl, Il);
}
var Rl = i(Tl, [
		['render', Ol],
		['__file', 'caret-bottom.vue'],
	]),
	Dl = { name: 'CaretLeft' },
	ql = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Nl = n('path', { fill: 'currentColor', d: 'M672 192 288 511.936 672 832z' }, null, -1),
	Ul = [Nl];
function Kl(e, t, r, a, l, o) {
	return s(), _('svg', ql, Ul);
}
var jl = i(Dl, [
		['render', Kl],
		['__file', 'caret-left.vue'],
	]),
	Wl = { name: 'CaretRight' },
	Jl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ql = n('path', { fill: 'currentColor', d: 'M384 192v640l384-320.064z' }, null, -1),
	Yl = [Ql];
function Gl(e, t, r, a, l, o) {
	return s(), _('svg', Jl, Yl);
}
var Zl = i(Wl, [
		['render', Gl],
		['__file', 'caret-right.vue'],
	]),
	Xl = { name: 'CaretTop' },
	eo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	to = n('path', { fill: 'currentColor', d: 'M512 320 192 704h639.936z' }, null, -1),
	ro = [to];
function ao(e, t, r, a, l, o) {
	return s(), _('svg', eo, ro);
}
var lo = i(Xl, [
		['render', ao],
		['__file', 'caret-top.vue'],
	]),
	oo = { name: 'Cellphone' },
	no = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	so = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z',
		},
		null,
		-1,
	),
	_o = [so];
function io(e, t, r, a, l, o) {
	return s(), _('svg', no, _o);
}
var uo = i(oo, [
		['render', io],
		['__file', 'cellphone.vue'],
	]),
	co = { name: 'ChatDotRound' },
	ho = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	vo = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z',
		},
		null,
		-1,
	),
	fo = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z',
		},
		null,
		-1,
	),
	po = [vo, fo];
function go(e, t, r, a, l, o) {
	return s(), _('svg', ho, po);
}
var mo = i(co, [
		['render', go],
		['__file', 'chat-dot-round.vue'],
	]),
	wo = { name: 'ChatDotSquare' },
	$o = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	zo = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z',
		},
		null,
		-1,
	),
	xo = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z',
		},
		null,
		-1,
	),
	Co = [zo, xo];
function Ho(e, t, r, a, l, o) {
	return s(), _('svg', $o, Co);
}
var Mo = i(wo, [
		['render', Ho],
		['__file', 'chat-dot-square.vue'],
	]),
	yo = { name: 'ChatLineRound' },
	Ao = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Vo = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z',
		},
		null,
		-1,
	),
	Bo = n('path', { fill: 'currentColor', d: 'M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z' }, null, -1),
	bo = [Vo, Bo];
function Lo(e, t, r, a, l, o) {
	return s(), _('svg', Ao, bo);
}
var So = i(yo, [
		['render', Lo],
		['__file', 'chat-line-round.vue'],
	]),
	Fo = { name: 'ChatLineSquare' },
	Eo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	To = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z',
		},
		null,
		-1,
	),
	ko = n('path', { fill: 'currentColor', d: 'M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z' }, null, -1),
	Po = [To, ko];
function Io(e, t, r, a, l, o) {
	return s(), _('svg', Eo, Po);
}
var Oo = i(Fo, [
		['render', Io],
		['__file', 'chat-line-square.vue'],
	]),
	Ro = { name: 'ChatRound' },
	Do = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	qo = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z',
		},
		null,
		-1,
	),
	No = [qo];
function Uo(e, t, r, a, l, o) {
	return s(), _('svg', Do, No);
}
var Ko = i(Ro, [
		['render', Uo],
		['__file', 'chat-round.vue'],
	]),
	jo = { name: 'ChatSquare' },
	Wo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Jo = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z',
		},
		null,
		-1,
	),
	Qo = [Jo];
function Yo(e, t, r, a, l, o) {
	return s(), _('svg', Wo, Qo);
}
var Go = i(jo, [
		['render', Yo],
		['__file', 'chat-square.vue'],
	]),
	Zo = { name: 'Check' },
	Xo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	en = n(
		'path',
		{ fill: 'currentColor', d: 'M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z' },
		null,
		-1,
	),
	tn = [en];
function rn(e, t, r, a, l, o) {
	return s(), _('svg', Xo, tn);
}
var an = i(Zo, [
		['render', rn],
		['__file', 'check.vue'],
	]),
	ln = { name: 'Checked' },
	on = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	nn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z',
		},
		null,
		-1,
	),
	sn = [nn];
function _n(e, t, r, a, l, o) {
	return s(), _('svg', on, sn);
}
var un = i(ln, [
		['render', _n],
		['__file', 'checked.vue'],
	]),
	cn = { name: 'Cherry' },
	dn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	hn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z',
		},
		null,
		-1,
	),
	vn = [hn];
function fn(e, t, r, a, l, o) {
	return s(), _('svg', dn, vn);
}
var pn = i(cn, [
		['render', fn],
		['__file', 'cherry.vue'],
	]),
	gn = { name: 'Chicken' },
	mn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	wn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z',
		},
		null,
		-1,
	),
	$n = [wn];
function zn(e, t, r, a, l, o) {
	return s(), _('svg', mn, $n);
}
var xn = i(gn, [
		['render', zn],
		['__file', 'chicken.vue'],
	]),
	Cn = { name: 'ChromeFilled' },
	Hn = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	Mn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z',
		},
		null,
		-1,
	),
	yn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z',
		},
		null,
		-1,
	),
	An = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z',
		},
		null,
		-1,
	),
	Vn = [Mn, yn, An];
function Bn(e, t, r, a, l, o) {
	return s(), _('svg', Hn, Vn);
}
var bn = i(Cn, [
		['render', Bn],
		['__file', 'chrome-filled.vue'],
	]),
	Ln = { name: 'CircleCheckFilled' },
	Sn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Fn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z',
		},
		null,
		-1,
	),
	En = [Fn];
function Tn(e, t, r, a, l, o) {
	return s(), _('svg', Sn, En);
}
var kn = i(Ln, [
		['render', Tn],
		['__file', 'circle-check-filled.vue'],
	]),
	Pn = { name: 'CircleCheck' },
	In = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	On = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	Rn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z',
		},
		null,
		-1,
	),
	Dn = [On, Rn];
function qn(e, t, r, a, l, o) {
	return s(), _('svg', In, Dn);
}
var Nn = i(Pn, [
		['render', qn],
		['__file', 'circle-check.vue'],
	]),
	Un = { name: 'CircleCloseFilled' },
	Kn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	jn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z',
		},
		null,
		-1,
	),
	Wn = [jn];
function Jn(e, t, r, a, l, o) {
	return s(), _('svg', Kn, Wn);
}
var Qn = i(Un, [
		['render', Jn],
		['__file', 'circle-close-filled.vue'],
	]),
	Yn = { name: 'CircleClose' },
	Gn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Zn = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z',
		},
		null,
		-1,
	),
	Xn = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	es = [Zn, Xn];
function ts(e, t, r, a, l, o) {
	return s(), _('svg', Gn, es);
}
var rs = i(Yn, [
		['render', ts],
		['__file', 'circle-close.vue'],
	]),
	as = { name: 'CirclePlusFilled' },
	ls = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	os = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z',
		},
		null,
		-1,
	),
	ns = [os];
function ss(e, t, r, a, l, o) {
	return s(), _('svg', ls, ns);
}
var _s = i(as, [
		['render', ss],
		['__file', 'circle-plus-filled.vue'],
	]),
	is = { name: 'CirclePlus' },
	us = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	cs = n('path', { fill: 'currentColor', d: 'M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z' }, null, -1),
	ds = n('path', { fill: 'currentColor', d: 'M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z' }, null, -1),
	hs = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	vs = [cs, ds, hs];
function fs(e, t, r, a, l, o) {
	return s(), _('svg', us, vs);
}
var ps = i(is, [
		['render', fs],
		['__file', 'circle-plus.vue'],
	]),
	gs = { name: 'Clock' },
	ms = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ws = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	$s = n('path', { fill: 'currentColor', d: 'M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z' }, null, -1),
	zs = n('path', { fill: 'currentColor', d: 'M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z' }, null, -1),
	xs = [ws, $s, zs];
function Cs(e, t, r, a, l, o) {
	return s(), _('svg', ms, xs);
}
var Hs = i(gs, [
		['render', Cs],
		['__file', 'clock.vue'],
	]),
	Ms = { name: 'CloseBold' },
	ys = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	As = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z',
		},
		null,
		-1,
	),
	Vs = [As];
function Bs(e, t, r, a, l, o) {
	return s(), _('svg', ys, Vs);
}
var bs = i(Ms, [
		['render', Bs],
		['__file', 'close-bold.vue'],
	]),
	Ls = { name: 'Close' },
	Ss = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Fs = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z',
		},
		null,
		-1,
	),
	Es = [Fs];
function Ts(e, t, r, a, l, o) {
	return s(), _('svg', Ss, Es);
}
var qe = i(Ls, [
		['render', Ts],
		['__file', 'close.vue'],
	]),
	ks = { name: 'Cloudy' },
	Ps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Is = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z',
		},
		null,
		-1,
	),
	Os = [Is];
function Rs(e, t, r, a, l, o) {
	return s(), _('svg', Ps, Os);
}
var Ds = i(ks, [
		['render', Rs],
		['__file', 'cloudy.vue'],
	]),
	qs = { name: 'CoffeeCup' },
	Ns = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Us = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z',
		},
		null,
		-1,
	),
	Ks = [Us];
function js(e, t, r, a, l, o) {
	return s(), _('svg', Ns, Ks);
}
var Ws = i(qs, [
		['render', js],
		['__file', 'coffee-cup.vue'],
	]),
	Js = { name: 'Coffee' },
	Qs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ys = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z',
		},
		null,
		-1,
	),
	Gs = [Ys];
function Zs(e, t, r, a, l, o) {
	return s(), _('svg', Qs, Gs);
}
var Xs = i(Js, [
		['render', Zs],
		['__file', 'coffee.vue'],
	]),
	e_ = { name: 'Coin' },
	t_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	r_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z',
		},
		null,
		-1,
	),
	a_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z',
		},
		null,
		-1,
	),
	l_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z',
		},
		null,
		-1,
	),
	o_ = [r_, a_, l_];
function n_(e, t, r, a, l, o) {
	return s(), _('svg', t_, o_);
}
var s_ = i(e_, [
		['render', n_],
		['__file', 'coin.vue'],
	]),
	__ = { name: 'ColdDrink' },
	i_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	u_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z',
		},
		null,
		-1,
	),
	c_ = [u_];
function d_(e, t, r, a, l, o) {
	return s(), _('svg', i_, c_);
}
var h_ = i(__, [
		['render', d_],
		['__file', 'cold-drink.vue'],
	]),
	v_ = { name: 'CollectionTag' },
	f_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	p_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z',
		},
		null,
		-1,
	),
	g_ = [p_];
function m_(e, t, r, a, l, o) {
	return s(), _('svg', f_, g_);
}
var w_ = i(v_, [
		['render', m_],
		['__file', 'collection-tag.vue'],
	]),
	$_ = { name: 'Collection' },
	z_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	x_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z',
		},
		null,
		-1,
	),
	C_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z',
		},
		null,
		-1,
	),
	H_ = [x_, C_];
function M_(e, t, r, a, l, o) {
	return s(), _('svg', z_, H_);
}
var y_ = i($_, [
		['render', M_],
		['__file', 'collection.vue'],
	]),
	A_ = { name: 'Comment' },
	V_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	B_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z',
		},
		null,
		-1,
	),
	b_ = [B_];
function L_(e, t, r, a, l, o) {
	return s(), _('svg', V_, b_);
}
var S_ = i(A_, [
		['render', L_],
		['__file', 'comment.vue'],
	]),
	F_ = { name: 'Compass' },
	E_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	T_ = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	k_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z',
		},
		null,
		-1,
	),
	P_ = [T_, k_];
function I_(e, t, r, a, l, o) {
	return s(), _('svg', E_, P_);
}
var O_ = i(F_, [
		['render', I_],
		['__file', 'compass.vue'],
	]),
	R_ = { name: 'Connection' },
	D_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	q_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z',
		},
		null,
		-1,
	),
	N_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z',
		},
		null,
		-1,
	),
	U_ = [q_, N_];
function K_(e, t, r, a, l, o) {
	return s(), _('svg', D_, U_);
}
var j_ = i(R_, [
		['render', K_],
		['__file', 'connection.vue'],
	]),
	W_ = { name: 'Coordinate' },
	J_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Q_ = n('path', { fill: 'currentColor', d: 'M480 512h64v320h-64z' }, null, -1),
	Y_ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z',
		},
		null,
		-1,
	),
	G_ = [Q_, Y_];
function Z_(e, t, r, a, l, o) {
	return s(), _('svg', J_, G_);
}
var X_ = i(W_, [
		['render', Z_],
		['__file', 'coordinate.vue'],
	]),
	ei = { name: 'CopyDocument' },
	ti = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ri = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z',
		},
		null,
		-1,
	),
	ai = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z',
		},
		null,
		-1,
	),
	li = [ri, ai];
function oi(e, t, r, a, l, o) {
	return s(), _('svg', ti, li);
}
var ni = i(ei, [
		['render', oi],
		['__file', 'copy-document.vue'],
	]),
	si = { name: 'Cpu' },
	_i = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ii = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z',
		},
		null,
		-1,
	),
	ui = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z',
		},
		null,
		-1,
	),
	ci = [ii, ui];
function di(e, t, r, a, l, o) {
	return s(), _('svg', _i, ci);
}
var hi = i(si, [
		['render', di],
		['__file', 'cpu.vue'],
	]),
	vi = { name: 'CreditCard' },
	fi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	pi = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z',
		},
		null,
		-1,
	),
	gi = n('path', { fill: 'currentColor', d: 'M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z' }, null, -1),
	mi = [pi, gi];
function wi(e, t, r, a, l, o) {
	return s(), _('svg', fi, mi);
}
var $i = i(vi, [
		['render', wi],
		['__file', 'credit-card.vue'],
	]),
	zi = { name: 'Crop' },
	xi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ci = n('path', { fill: 'currentColor', d: 'M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z' }, null, -1),
	Hi = n('path', { fill: 'currentColor', d: 'M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z' }, null, -1),
	Mi = [Ci, Hi];
function yi(e, t, r, a, l, o) {
	return s(), _('svg', xi, Mi);
}
var Ai = i(zi, [
		['render', yi],
		['__file', 'crop.vue'],
	]),
	Vi = { name: 'DArrowLeft' },
	Bi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	bi = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z',
		},
		null,
		-1,
	),
	Li = [bi];
function Si(e, t, r, a, l, o) {
	return s(), _('svg', Bi, Li);
}
var Fi = i(Vi, [
		['render', Si],
		['__file', 'd-arrow-left.vue'],
	]),
	Ei = { name: 'DArrowRight' },
	Ti = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ki = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z',
		},
		null,
		-1,
	),
	Pi = [ki];
function Ii(e, t, r, a, l, o) {
	return s(), _('svg', Ti, Pi);
}
var Oi = i(Ei, [
		['render', Ii],
		['__file', 'd-arrow-right.vue'],
	]),
	Ri = { name: 'DCaret' },
	Di = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	qi = n('path', { fill: 'currentColor', d: 'm512 128 288 320H224l288-320zM224 576h576L512 896 224 576z' }, null, -1),
	Ni = [qi];
function Ui(e, t, r, a, l, o) {
	return s(), _('svg', Di, Ni);
}
var Ki = i(Ri, [
		['render', Ui],
		['__file', 'd-caret.vue'],
	]),
	ji = { name: 'DataAnalysis' },
	Wi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ji = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z',
		},
		null,
		-1,
	),
	Qi = [Ji];
function Yi(e, t, r, a, l, o) {
	return s(), _('svg', Wi, Qi);
}
var Gi = i(ji, [
		['render', Yi],
		['__file', 'data-analysis.vue'],
	]),
	Zi = { name: 'DataBoard' },
	Xi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	eu = n('path', { fill: 'currentColor', d: 'M32 128h960v64H32z' }, null, -1),
	tu = n('path', { fill: 'currentColor', d: 'M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z' }, null, -1),
	ru = n(
		'path',
		{ fill: 'currentColor', d: 'M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z' },
		null,
		-1,
	),
	au = [eu, tu, ru];
function lu(e, t, r, a, l, o) {
	return s(), _('svg', Xi, au);
}
var ou = i(Zi, [
		['render', lu],
		['__file', 'data-board.vue'],
	]),
	nu = { name: 'DataLine' },
	su = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	_u = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z',
		},
		null,
		-1,
	),
	iu = [_u];
function uu(e, t, r, a, l, o) {
	return s(), _('svg', su, iu);
}
var cu = i(nu, [
		['render', uu],
		['__file', 'data-line.vue'],
	]),
	du = { name: 'DeleteFilled' },
	hu = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	vu = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z',
		},
		null,
		-1,
	),
	fu = [vu];
function pu(e, t, r, a, l, o) {
	return s(), _('svg', hu, fu);
}
var gu = i(du, [
		['render', pu],
		['__file', 'delete-filled.vue'],
	]),
	mu = { name: 'DeleteLocation' },
	wu = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	$u = n('path', { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' }, null, -1),
	zu = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z',
		},
		null,
		-1,
	),
	xu = n('path', { fill: 'currentColor', d: 'M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z' }, null, -1),
	Cu = [$u, zu, xu];
function Hu(e, t, r, a, l, o) {
	return s(), _('svg', wu, Cu);
}
var Mu = i(mu, [
		['render', Hu],
		['__file', 'delete-location.vue'],
	]),
	yu = { name: 'Delete' },
	Au = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Vu = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z',
		},
		null,
		-1,
	),
	Bu = [Vu];
function bu(e, t, r, a, l, o) {
	return s(), _('svg', Au, Bu);
}
var Lu = i(yu, [
		['render', bu],
		['__file', 'delete.vue'],
	]),
	Su = { name: 'Dessert' },
	Fu = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Eu = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z',
		},
		null,
		-1,
	),
	Tu = [Eu];
function ku(e, t, r, a, l, o) {
	return s(), _('svg', Fu, Tu);
}
var Pu = i(Su, [
		['render', ku],
		['__file', 'dessert.vue'],
	]),
	Iu = { name: 'Discount' },
	Ou = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ru = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z',
		},
		null,
		-1,
	),
	Du = n('path', { fill: 'currentColor', d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z' }, null, -1),
	qu = [Ru, Du];
function Nu(e, t, r, a, l, o) {
	return s(), _('svg', Ou, qu);
}
var Uu = i(Iu, [
		['render', Nu],
		['__file', 'discount.vue'],
	]),
	Ku = { name: 'DishDot' },
	ju = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Wu = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z',
		},
		null,
		-1,
	),
	Ju = [Wu];
function Qu(e, t, r, a, l, o) {
	return s(), _('svg', ju, Ju);
}
var Yu = i(Ku, [
		['render', Qu],
		['__file', 'dish-dot.vue'],
	]),
	Gu = { name: 'Dish' },
	Zu = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Xu = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z',
		},
		null,
		-1,
	),
	e5 = [Xu];
function t5(e, t, r, a, l, o) {
	return s(), _('svg', Zu, e5);
}
var r5 = i(Gu, [
		['render', t5],
		['__file', 'dish.vue'],
	]),
	a5 = { name: 'DocumentAdd' },
	l5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	o5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z',
		},
		null,
		-1,
	),
	n5 = [o5];
function s5(e, t, r, a, l, o) {
	return s(), _('svg', l5, n5);
}
var _5 = i(a5, [
		['render', s5],
		['__file', 'document-add.vue'],
	]),
	i5 = { name: 'DocumentChecked' },
	u5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	c5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z',
		},
		null,
		-1,
	),
	d5 = [c5];
function h5(e, t, r, a, l, o) {
	return s(), _('svg', u5, d5);
}
var v5 = i(i5, [
		['render', h5],
		['__file', 'document-checked.vue'],
	]),
	f5 = { name: 'DocumentCopy' },
	p5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	g5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z',
		},
		null,
		-1,
	),
	m5 = [g5];
function w5(e, t, r, a, l, o) {
	return s(), _('svg', p5, m5);
}
var $5 = i(f5, [
		['render', w5],
		['__file', 'document-copy.vue'],
	]),
	z5 = { name: 'DocumentDelete' },
	x5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	C5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z',
		},
		null,
		-1,
	),
	H5 = [C5];
function M5(e, t, r, a, l, o) {
	return s(), _('svg', x5, H5);
}
var y5 = i(z5, [
		['render', M5],
		['__file', 'document-delete.vue'],
	]),
	A5 = { name: 'DocumentRemove' },
	V5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	B5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z',
		},
		null,
		-1,
	),
	b5 = [B5];
function L5(e, t, r, a, l, o) {
	return s(), _('svg', V5, b5);
}
var S5 = i(A5, [
		['render', L5],
		['__file', 'document-remove.vue'],
	]),
	F5 = { name: 'Document' },
	E5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	T5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z',
		},
		null,
		-1,
	),
	k5 = [T5];
function P5(e, t, r, a, l, o) {
	return s(), _('svg', E5, k5);
}
var I5 = i(F5, [
		['render', P5],
		['__file', 'document.vue'],
	]),
	O5 = { name: 'Download' },
	R5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	D5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z',
		},
		null,
		-1,
	),
	q5 = [D5];
function N5(e, t, r, a, l, o) {
	return s(), _('svg', R5, q5);
}
var U5 = i(O5, [
		['render', N5],
		['__file', 'download.vue'],
	]),
	K5 = { name: 'Drizzling' },
	j5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	W5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z',
		},
		null,
		-1,
	),
	J5 = [W5];
function Q5(e, t, r, a, l, o) {
	return s(), _('svg', j5, J5);
}
var Y5 = i(K5, [
		['render', Q5],
		['__file', 'drizzling.vue'],
	]),
	G5 = { name: 'EditPen' },
	Z5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	X5 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z',
		},
		null,
		-1,
	),
	ec = [X5];
function tc(e, t, r, a, l, o) {
	return s(), _('svg', Z5, ec);
}
var rc = i(G5, [
		['render', tc],
		['__file', 'edit-pen.vue'],
	]),
	ac = { name: 'Edit' },
	lc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	oc = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z',
		},
		null,
		-1,
	),
	nc = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z',
		},
		null,
		-1,
	),
	sc = [oc, nc];
function _c(e, t, r, a, l, o) {
	return s(), _('svg', lc, sc);
}
var ic = i(ac, [
		['render', _c],
		['__file', 'edit.vue'],
	]),
	uc = { name: 'ElemeFilled' },
	cc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	dc = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z',
		},
		null,
		-1,
	),
	hc = [dc];
function vc(e, t, r, a, l, o) {
	return s(), _('svg', cc, hc);
}
var fc = i(uc, [
		['render', vc],
		['__file', 'eleme-filled.vue'],
	]),
	pc = { name: 'Eleme' },
	gc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	mc = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z',
		},
		null,
		-1,
	),
	wc = [mc];
function $c(e, t, r, a, l, o) {
	return s(), _('svg', gc, wc);
}
var zc = i(pc, [
		['render', $c],
		['__file', 'eleme.vue'],
	]),
	xc = { name: 'ElementPlus' },
	Cc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Hc = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z',
		},
		null,
		-1,
	),
	Mc = [Hc];
function yc(e, t, r, a, l, o) {
	return s(), _('svg', Cc, Mc);
}
var Ac = i(xc, [
		['render', yc],
		['__file', 'element-plus.vue'],
	]),
	Vc = { name: 'Expand' },
	Bc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	bc = n('path', { fill: 'currentColor', d: 'M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z' }, null, -1),
	Lc = [bc];
function Sc(e, t, r, a, l, o) {
	return s(), _('svg', Bc, Lc);
}
var Fc = i(Vc, [
		['render', Sc],
		['__file', 'expand.vue'],
	]),
	Ec = { name: 'Failed' },
	Tc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	kc = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z',
		},
		null,
		-1,
	),
	Pc = [kc];
function Ic(e, t, r, a, l, o) {
	return s(), _('svg', Tc, Pc);
}
var Oc = i(Ec, [
		['render', Ic],
		['__file', 'failed.vue'],
	]),
	Rc = { name: 'Female' },
	Dc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	qc = n('path', { fill: 'currentColor', d: 'M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z' }, null, -1),
	Nc = n('path', { fill: 'currentColor', d: 'M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z' }, null, -1),
	Uc = n('path', { fill: 'currentColor', d: 'M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z' }, null, -1),
	Kc = [qc, Nc, Uc];
function jc(e, t, r, a, l, o) {
	return s(), _('svg', Dc, Kc);
}
var Wc = i(Rc, [
		['render', jc],
		['__file', 'female.vue'],
	]),
	Jc = { name: 'Files' },
	Qc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Yc = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z',
		},
		null,
		-1,
	),
	Gc = [Yc];
function Zc(e, t, r, a, l, o) {
	return s(), _('svg', Qc, Gc);
}
var Xc = i(Jc, [
		['render', Zc],
		['__file', 'files.vue'],
	]),
	e9 = { name: 'Film' },
	t9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	r9 = n(
		'path',
		{ fill: 'currentColor', d: 'M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z' },
		null,
		-1,
	),
	a9 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z',
		},
		null,
		-1,
	),
	l9 = [r9, a9];
function o9(e, t, r, a, l, o) {
	return s(), _('svg', t9, l9);
}
var n9 = i(e9, [
		['render', o9],
		['__file', 'film.vue'],
	]),
	s9 = { name: 'Filter' },
	_9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	i9 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z',
		},
		null,
		-1,
	),
	u9 = [i9];
function c9(e, t, r, a, l, o) {
	return s(), _('svg', _9, u9);
}
var d9 = i(s9, [
		['render', c9],
		['__file', 'filter.vue'],
	]),
	h9 = { name: 'Finished' },
	v9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	f9 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z',
		},
		null,
		-1,
	),
	p9 = [f9];
function g9(e, t, r, a, l, o) {
	return s(), _('svg', v9, p9);
}
var m9 = i(h9, [
		['render', g9],
		['__file', 'finished.vue'],
	]),
	w9 = { name: 'FirstAidKit' },
	$9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	z9 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z',
		},
		null,
		-1,
	),
	x9 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z',
		},
		null,
		-1,
	),
	C9 = [z9, x9];
function H9(e, t, r, a, l, o) {
	return s(), _('svg', $9, C9);
}
var M9 = i(w9, [
		['render', H9],
		['__file', 'first-aid-kit.vue'],
	]),
	y9 = { name: 'Flag' },
	A9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	V9 = n('path', { fill: 'currentColor', d: 'M288 128h608L736 384l160 256H288v320h-96V64h96v64z' }, null, -1),
	B9 = [V9];
function b9(e, t, r, a, l, o) {
	return s(), _('svg', A9, B9);
}
var L9 = i(y9, [
		['render', b9],
		['__file', 'flag.vue'],
	]),
	S9 = { name: 'Fold' },
	F9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	E9 = n('path', { fill: 'currentColor', d: 'M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z' }, null, -1),
	T9 = [E9];
function k9(e, t, r, a, l, o) {
	return s(), _('svg', F9, T9);
}
var P9 = i(S9, [
		['render', k9],
		['__file', 'fold.vue'],
	]),
	I9 = { name: 'FolderAdd' },
	O9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	R9 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z',
		},
		null,
		-1,
	),
	D9 = [R9];
function q9(e, t, r, a, l, o) {
	return s(), _('svg', O9, D9);
}
var N9 = i(I9, [
		['render', q9],
		['__file', 'folder-add.vue'],
	]),
	U9 = { name: 'FolderChecked' },
	K9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	j9 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z',
		},
		null,
		-1,
	),
	W9 = [j9];
function J9(e, t, r, a, l, o) {
	return s(), _('svg', K9, W9);
}
var Q9 = i(U9, [
		['render', J9],
		['__file', 'folder-checked.vue'],
	]),
	Y9 = { name: 'FolderDelete' },
	G9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Z9 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z',
		},
		null,
		-1,
	),
	X9 = [Z9];
function ed(e, t, r, a, l, o) {
	return s(), _('svg', G9, X9);
}
var td = i(Y9, [
		['render', ed],
		['__file', 'folder-delete.vue'],
	]),
	rd = { name: 'FolderOpened' },
	ad = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ld = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z',
		},
		null,
		-1,
	),
	od = [ld];
function nd(e, t, r, a, l, o) {
	return s(), _('svg', ad, od);
}
var sd = i(rd, [
		['render', nd],
		['__file', 'folder-opened.vue'],
	]),
	_d = { name: 'FolderRemove' },
	id = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ud = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z',
		},
		null,
		-1,
	),
	cd = [ud];
function dd(e, t, r, a, l, o) {
	return s(), _('svg', id, cd);
}
var hd = i(_d, [
		['render', dd],
		['__file', 'folder-remove.vue'],
	]),
	vd = { name: 'Folder' },
	fd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	pd = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z',
		},
		null,
		-1,
	),
	gd = [pd];
function md(e, t, r, a, l, o) {
	return s(), _('svg', fd, gd);
}
var wd = i(vd, [
		['render', md],
		['__file', 'folder.vue'],
	]),
	$d = { name: 'Food' },
	zd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	xd = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z',
		},
		null,
		-1,
	),
	Cd = [xd];
function Hd(e, t, r, a, l, o) {
	return s(), _('svg', zd, Cd);
}
var Md = i($d, [
		['render', Hd],
		['__file', 'food.vue'],
	]),
	yd = { name: 'Football' },
	Ad = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Vd = n('path', { fill: 'currentColor', d: 'M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z' }, null, -1),
	Bd = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z',
		},
		null,
		-1,
	),
	bd = [Vd, Bd];
function Ld(e, t, r, a, l, o) {
	return s(), _('svg', Ad, bd);
}
var Sd = i(yd, [
		['render', Ld],
		['__file', 'football.vue'],
	]),
	Fd = { name: 'ForkSpoon' },
	Ed = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Td = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z',
		},
		null,
		-1,
	),
	kd = [Td];
function Pd(e, t, r, a, l, o) {
	return s(), _('svg', Ed, kd);
}
var Id = i(Fd, [
		['render', Pd],
		['__file', 'fork-spoon.vue'],
	]),
	Od = { name: 'Fries' },
	Rd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Dd = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z',
		},
		null,
		-1,
	),
	qd = [Dd];
function Nd(e, t, r, a, l, o) {
	return s(), _('svg', Rd, qd);
}
var Ud = i(Od, [
		['render', Nd],
		['__file', 'fries.vue'],
	]),
	Kd = { name: 'FullScreen' },
	jd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Wd = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z',
		},
		null,
		-1,
	),
	Jd = [Wd];
function Qd(e, t, r, a, l, o) {
	return s(), _('svg', jd, Jd);
}
var Yd = i(Kd, [
		['render', Qd],
		['__file', 'full-screen.vue'],
	]),
	Gd = { name: 'GobletFull' },
	Zd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Xd = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z',
		},
		null,
		-1,
	),
	eh = [Xd];
function th(e, t, r, a, l, o) {
	return s(), _('svg', Zd, eh);
}
var rh = i(Gd, [
		['render', th],
		['__file', 'goblet-full.vue'],
	]),
	ah = { name: 'GobletSquareFull' },
	lh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	oh = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z',
		},
		null,
		-1,
	),
	nh = [oh];
function sh(e, t, r, a, l, o) {
	return s(), _('svg', lh, nh);
}
var _h = i(ah, [
		['render', sh],
		['__file', 'goblet-square-full.vue'],
	]),
	ih = { name: 'GobletSquare' },
	uh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ch = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z',
		},
		null,
		-1,
	),
	dh = [ch];
function hh(e, t, r, a, l, o) {
	return s(), _('svg', uh, dh);
}
var vh = i(ih, [
		['render', hh],
		['__file', 'goblet-square.vue'],
	]),
	fh = { name: 'Goblet' },
	ph = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	gh = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z',
		},
		null,
		-1,
	),
	mh = [gh];
function wh(e, t, r, a, l, o) {
	return s(), _('svg', ph, mh);
}
var $h = i(fh, [
		['render', wh],
		['__file', 'goblet.vue'],
	]),
	zh = { name: 'GoldMedal' },
	xh = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	Ch = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128h128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128H384zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z',
		},
		null,
		-1,
	),
	Hh = n('path', { fill: 'currentColor', d: 'M544 480H416v64h64v192h-64v64h192v-64h-64z' }, null, -1),
	Mh = [Ch, Hh];
function yh(e, t, r, a, l, o) {
	return s(), _('svg', xh, Mh);
}
var Ah = i(zh, [
		['render', yh],
		['__file', 'gold-medal.vue'],
	]),
	Vh = { name: 'GoodsFilled' },
	Bh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	bh = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z',
		},
		null,
		-1,
	),
	Lh = [bh];
function Sh(e, t, r, a, l, o) {
	return s(), _('svg', Bh, Lh);
}
var Fh = i(Vh, [
		['render', Sh],
		['__file', 'goods-filled.vue'],
	]),
	Eh = { name: 'Goods' },
	Th = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	kh = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z',
		},
		null,
		-1,
	),
	Ph = [kh];
function Ih(e, t, r, a, l, o) {
	return s(), _('svg', Th, Ph);
}
var Oh = i(Eh, [
		['render', Ih],
		['__file', 'goods.vue'],
	]),
	Rh = { name: 'Grape' },
	Dh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	qh = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z',
		},
		null,
		-1,
	),
	Nh = [qh];
function Uh(e, t, r, a, l, o) {
	return s(), _('svg', Dh, Nh);
}
var Kh = i(Rh, [
		['render', Uh],
		['__file', 'grape.vue'],
	]),
	jh = { name: 'Grid' },
	Wh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Jh = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z',
		},
		null,
		-1,
	),
	Qh = [Jh];
function Yh(e, t, r, a, l, o) {
	return s(), _('svg', Wh, Qh);
}
var Gh = i(jh, [
		['render', Yh],
		['__file', 'grid.vue'],
	]),
	Zh = { name: 'Guide' },
	Xh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ev = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z',
		},
		null,
		-1,
	),
	tv = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z',
		},
		null,
		-1,
	),
	rv = [ev, tv];
function av(e, t, r, a, l, o) {
	return s(), _('svg', Xh, rv);
}
var lv = i(Zh, [
		['render', av],
		['__file', 'guide.vue'],
	]),
	ov = { name: 'Handbag' },
	nv = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	sv = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01zM421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5zM832 896H192V320h128v128h64V320h256v128h64V320h128v576z',
		},
		null,
		-1,
	),
	_v = [sv];
function iv(e, t, r, a, l, o) {
	return s(), _('svg', nv, _v);
}
var uv = i(ov, [
		['render', iv],
		['__file', 'handbag.vue'],
	]),
	cv = { name: 'Headset' },
	dv = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	hv = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z',
		},
		null,
		-1,
	),
	vv = [hv];
function fv(e, t, r, a, l, o) {
	return s(), _('svg', dv, vv);
}
var pv = i(cv, [
		['render', fv],
		['__file', 'headset.vue'],
	]),
	gv = { name: 'HelpFilled' },
	mv = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	wv = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z',
		},
		null,
		-1,
	),
	$v = [wv];
function zv(e, t, r, a, l, o) {
	return s(), _('svg', mv, $v);
}
var xv = i(gv, [
		['render', zv],
		['__file', 'help-filled.vue'],
	]),
	Cv = { name: 'Help' },
	Hv = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Mv = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z',
		},
		null,
		-1,
	),
	yv = [Mv];
function Av(e, t, r, a, l, o) {
	return s(), _('svg', Hv, yv);
}
var Vv = i(Cv, [
		['render', Av],
		['__file', 'help.vue'],
	]),
	Bv = { name: 'Hide' },
	bv = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Lv = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z',
		},
		null,
		-1,
	),
	Sv = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z',
		},
		null,
		-1,
	),
	Fv = [Lv, Sv];
function Ev(e, t, r, a, l, o) {
	return s(), _('svg', bv, Fv);
}
var Tv = i(Bv, [
		['render', Ev],
		['__file', 'hide.vue'],
	]),
	kv = { name: 'Histogram' },
	Pv = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Iv = n('path', { fill: 'currentColor', d: 'M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z' }, null, -1),
	Ov = [Iv];
function Rv(e, t, r, a, l, o) {
	return s(), _('svg', Pv, Ov);
}
var Dv = i(kv, [
		['render', Rv],
		['__file', 'histogram.vue'],
	]),
	qv = { name: 'HomeFilled' },
	Nv = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Uv = n('path', { fill: 'currentColor', d: 'M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z' }, null, -1),
	Kv = [Uv];
function jv(e, t, r, a, l, o) {
	return s(), _('svg', Nv, Kv);
}
var Wv = i(qv, [
		['render', jv],
		['__file', 'home-filled.vue'],
	]),
	Jv = { name: 'HotWater' },
	Qv = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Yv = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z',
		},
		null,
		-1,
	),
	Gv = [Yv];
function Zv(e, t, r, a, l, o) {
	return s(), _('svg', Qv, Gv);
}
var Xv = i(Jv, [
		['render', Zv],
		['__file', 'hot-water.vue'],
	]),
	ef = { name: 'House' },
	tf = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	rf = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z',
		},
		null,
		-1,
	),
	af = [rf];
function lf(e, t, r, a, l, o) {
	return s(), _('svg', tf, af);
}
var of = i(ef, [
		['render', lf],
		['__file', 'house.vue'],
	]),
	nf = { name: 'IceCreamRound' },
	sf = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	_f = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z',
		},
		null,
		-1,
	),
	uf = [_f];
function cf(e, t, r, a, l, o) {
	return s(), _('svg', sf, uf);
}
var df = i(nf, [
		['render', cf],
		['__file', 'ice-cream-round.vue'],
	]),
	hf = { name: 'IceCreamSquare' },
	vf = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ff = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z',
		},
		null,
		-1,
	),
	pf = [ff];
function gf(e, t, r, a, l, o) {
	return s(), _('svg', vf, pf);
}
var mf = i(hf, [
		['render', gf],
		['__file', 'ice-cream-square.vue'],
	]),
	wf = { name: 'IceCream' },
	$f = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	zf = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z',
		},
		null,
		-1,
	),
	xf = [zf];
function Cf(e, t, r, a, l, o) {
	return s(), _('svg', $f, xf);
}
var Hf = i(wf, [
		['render', Cf],
		['__file', 'ice-cream.vue'],
	]),
	Mf = { name: 'IceDrink' },
	yf = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Af = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z',
		},
		null,
		-1,
	),
	Vf = [Af];
function Bf(e, t, r, a, l, o) {
	return s(), _('svg', yf, Vf);
}
var bf = i(Mf, [
		['render', Bf],
		['__file', 'ice-drink.vue'],
	]),
	Lf = { name: 'IceTea' },
	Sf = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ff = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z',
		},
		null,
		-1,
	),
	Ef = [Ff];
function Tf(e, t, r, a, l, o) {
	return s(), _('svg', Sf, Ef);
}
var kf = i(Lf, [
		['render', Tf],
		['__file', 'ice-tea.vue'],
	]),
	Pf = { name: 'InfoFilled' },
	If = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Of = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z',
		},
		null,
		-1,
	),
	Rf = [Of];
function Df(e, t, r, a, l, o) {
	return s(), _('svg', If, Rf);
}
var qf = i(Pf, [
		['render', Df],
		['__file', 'info-filled.vue'],
	]),
	Nf = { name: 'Iphone' },
	Uf = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Kf = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z',
		},
		null,
		-1,
	),
	jf = [Kf];
function Wf(e, t, r, a, l, o) {
	return s(), _('svg', Uf, jf);
}
var Jf = i(Nf, [
		['render', Wf],
		['__file', 'iphone.vue'],
	]),
	Qf = { name: 'Key' },
	Yf = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Gf = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z',
		},
		null,
		-1,
	),
	Zf = [Gf];
function Xf(e, t, r, a, l, o) {
	return s(), _('svg', Yf, Zf);
}
var ep = i(Qf, [
		['render', Xf],
		['__file', 'key.vue'],
	]),
	tp = { name: 'KnifeFork' },
	rp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ap = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z',
		},
		null,
		-1,
	),
	lp = [ap];
function op(e, t, r, a, l, o) {
	return s(), _('svg', rp, lp);
}
var np = i(tp, [
		['render', op],
		['__file', 'knife-fork.vue'],
	]),
	sp = { name: 'Lightning' },
	_p = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ip = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z',
		},
		null,
		-1,
	),
	up = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z',
		},
		null,
		-1,
	),
	cp = [ip, up];
function dp(e, t, r, a, l, o) {
	return s(), _('svg', _p, cp);
}
var hp = i(sp, [
		['render', dp],
		['__file', 'lightning.vue'],
	]),
	vp = { name: 'Link' },
	fp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	pp = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z',
		},
		null,
		-1,
	),
	gp = [pp];
function mp(e, t, r, a, l, o) {
	return s(), _('svg', fp, gp);
}
var wp = i(vp, [
		['render', mp],
		['__file', 'link.vue'],
	]),
	$p = { name: 'List' },
	zp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	xp = n(
		'path',
		{ fill: 'currentColor', d: 'M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z' },
		null,
		-1,
	),
	Cp = [xp];
function Hp(e, t, r, a, l, o) {
	return s(), _('svg', zp, Cp);
}
var Mp = i($p, [
		['render', Hp],
		['__file', 'list.vue'],
	]),
	yp = { name: 'Loading' },
	Ap = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Vp = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z',
		},
		null,
		-1,
	),
	Bp = [Vp];
function bp(e, t, r, a, l, o) {
	return s(), _('svg', Ap, Bp);
}
var Lp = i(yp, [
		['render', bp],
		['__file', 'loading.vue'],
	]),
	Sp = { name: 'LocationFilled' },
	Fp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ep = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z',
		},
		null,
		-1,
	),
	Tp = [Ep];
function kp(e, t, r, a, l, o) {
	return s(), _('svg', Fp, Tp);
}
var Pp = i(Sp, [
		['render', kp],
		['__file', 'location-filled.vue'],
	]),
	Ip = { name: 'LocationInformation' },
	Op = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Rp = n('path', { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' }, null, -1),
	Dp = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z',
		},
		null,
		-1,
	),
	qp = n('path', { fill: 'currentColor', d: 'M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z' }, null, -1),
	Np = [Rp, Dp, qp];
function Up(e, t, r, a, l, o) {
	return s(), _('svg', Op, Np);
}
var Kp = i(Ip, [
		['render', Up],
		['__file', 'location-information.vue'],
	]),
	jp = { name: 'Location' },
	Wp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Jp = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z',
		},
		null,
		-1,
	),
	Qp = n('path', { fill: 'currentColor', d: 'M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z' }, null, -1),
	Yp = [Jp, Qp];
function Gp(e, t, r, a, l, o) {
	return s(), _('svg', Wp, Yp);
}
var Zp = i(jp, [
		['render', Gp],
		['__file', 'location.vue'],
	]),
	Xp = { name: 'Lock' },
	e7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	t7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z',
		},
		null,
		-1,
	),
	r7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z',
		},
		null,
		-1,
	),
	a7 = [t7, r7];
function l7(e, t, r, a, l, o) {
	return s(), _('svg', e7, a7);
}
var o7 = i(Xp, [
		['render', l7],
		['__file', 'lock.vue'],
	]),
	n7 = { name: 'Lollipop' },
	s7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	_7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z',
		},
		null,
		-1,
	),
	i7 = [_7];
function u7(e, t, r, a, l, o) {
	return s(), _('svg', s7, i7);
}
var c7 = i(n7, [
		['render', u7],
		['__file', 'lollipop.vue'],
	]),
	d7 = { name: 'MagicStick' },
	h7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	v7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z',
		},
		null,
		-1,
	),
	f7 = [v7];
function p7(e, t, r, a, l, o) {
	return s(), _('svg', h7, f7);
}
var g7 = i(d7, [
		['render', p7],
		['__file', 'magic-stick.vue'],
	]),
	m7 = { name: 'Magnet' },
	w7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	$7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z',
		},
		null,
		-1,
	),
	z7 = [$7];
function x7(e, t, r, a, l, o) {
	return s(), _('svg', w7, z7);
}
var C7 = i(m7, [
		['render', x7],
		['__file', 'magnet.vue'],
	]),
	H7 = { name: 'Male' },
	M7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	y7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z',
		},
		null,
		-1,
	),
	A7 = n(
		'path',
		{ fill: 'currentColor', d: 'M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z' },
		null,
		-1,
	),
	V7 = n('path', { fill: 'currentColor', d: 'M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z' }, null, -1),
	B7 = [y7, A7, V7];
function b7(e, t, r, a, l, o) {
	return s(), _('svg', M7, B7);
}
var L7 = i(H7, [
		['render', b7],
		['__file', 'male.vue'],
	]),
	S7 = { name: 'Management' },
	F7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	E7 = n('path', { fill: 'currentColor', d: 'M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z' }, null, -1),
	T7 = [E7];
function k7(e, t, r, a, l, o) {
	return s(), _('svg', F7, T7);
}
var P7 = i(S7, [
		['render', k7],
		['__file', 'management.vue'],
	]),
	I7 = { name: 'MapLocation' },
	O7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	R7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z',
		},
		null,
		-1,
	),
	D7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z',
		},
		null,
		-1,
	),
	q7 = [R7, D7];
function N7(e, t, r, a, l, o) {
	return s(), _('svg', O7, q7);
}
var U7 = i(I7, [
		['render', N7],
		['__file', 'map-location.vue'],
	]),
	K7 = { name: 'Medal' },
	j7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	W7 = n('path', { fill: 'currentColor', d: 'M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z' }, null, -1),
	J7 = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z',
		},
		null,
		-1,
	),
	Q7 = [W7, J7];
function Y7(e, t, r, a, l, o) {
	return s(), _('svg', j7, Q7);
}
var G7 = i(K7, [
		['render', Y7],
		['__file', 'medal.vue'],
	]),
	Z7 = { name: 'Memo' },
	X7 = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	eg = n('path', { fill: 'currentColor', d: 'M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z' }, null, -1),
	tg = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z',
		},
		null,
		-1,
	),
	rg = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zm0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z',
		},
		null,
		-1,
	),
	ag = [eg, tg, rg];
function lg(e, t, r, a, l, o) {
	return s(), _('svg', X7, ag);
}
var og = i(Z7, [
		['render', lg],
		['__file', 'memo.vue'],
	]),
	ng = { name: 'Menu' },
	sg = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	_g = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z',
		},
		null,
		-1,
	),
	ig = [_g];
function ug(e, t, r, a, l, o) {
	return s(), _('svg', sg, ig);
}
var cg = i(ng, [
		['render', ug],
		['__file', 'menu.vue'],
	]),
	dg = { name: 'MessageBox' },
	hg = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	vg = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z',
		},
		null,
		-1,
	),
	fg = [vg];
function pg(e, t, r, a, l, o) {
	return s(), _('svg', hg, fg);
}
var gg = i(dg, [
		['render', pg],
		['__file', 'message-box.vue'],
	]),
	mg = { name: 'Message' },
	wg = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	$g = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z',
		},
		null,
		-1,
	),
	zg = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z',
		},
		null,
		-1,
	),
	xg = [$g, zg];
function Cg(e, t, r, a, l, o) {
	return s(), _('svg', wg, xg);
}
var Hg = i(mg, [
		['render', Cg],
		['__file', 'message.vue'],
	]),
	Mg = { name: 'Mic' },
	yg = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ag = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z',
		},
		null,
		-1,
	),
	Vg = [Ag];
function Bg(e, t, r, a, l, o) {
	return s(), _('svg', yg, Vg);
}
var bg = i(Mg, [
		['render', Bg],
		['__file', 'mic.vue'],
	]),
	Lg = { name: 'Microphone' },
	Sg = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Fg = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z',
		},
		null,
		-1,
	),
	Eg = [Fg];
function Tg(e, t, r, a, l, o) {
	return s(), _('svg', Sg, Eg);
}
var kg = i(Lg, [
		['render', Tg],
		['__file', 'microphone.vue'],
	]),
	Pg = { name: 'MilkTea' },
	Ig = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Og = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z',
		},
		null,
		-1,
	),
	Rg = [Og];
function Dg(e, t, r, a, l, o) {
	return s(), _('svg', Ig, Rg);
}
var qg = i(Pg, [
		['render', Dg],
		['__file', 'milk-tea.vue'],
	]),
	Ng = { name: 'Minus' },
	Ug = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Kg = n('path', { fill: 'currentColor', d: 'M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z' }, null, -1),
	jg = [Kg];
function Wg(e, t, r, a, l, o) {
	return s(), _('svg', Ug, jg);
}
var Jg = i(Ng, [
		['render', Wg],
		['__file', 'minus.vue'],
	]),
	Qg = { name: 'Money' },
	Yg = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Gg = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z',
		},
		null,
		-1,
	),
	Zg = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z',
		},
		null,
		-1,
	),
	Xg = n('path', { fill: 'currentColor', d: 'M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z' }, null, -1),
	em = [Gg, Zg, Xg];
function tm(e, t, r, a, l, o) {
	return s(), _('svg', Yg, em);
}
var rm = i(Qg, [
		['render', tm],
		['__file', 'money.vue'],
	]),
	am = { name: 'Monitor' },
	lm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	om = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z',
		},
		null,
		-1,
	),
	nm = [om];
function sm(e, t, r, a, l, o) {
	return s(), _('svg', lm, nm);
}
var _m = i(am, [
		['render', sm],
		['__file', 'monitor.vue'],
	]),
	im = { name: 'MoonNight' },
	um = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	cm = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z',
		},
		null,
		-1,
	),
	dm = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z',
		},
		null,
		-1,
	),
	hm = [cm, dm];
function vm(e, t, r, a, l, o) {
	return s(), _('svg', um, hm);
}
var fm = i(im, [
		['render', vm],
		['__file', 'moon-night.vue'],
	]),
	pm = { name: 'Moon' },
	gm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	mm = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z',
		},
		null,
		-1,
	),
	wm = [mm];
function $m(e, t, r, a, l, o) {
	return s(), _('svg', gm, wm);
}
var zm = i(pm, [
		['render', $m],
		['__file', 'moon.vue'],
	]),
	xm = { name: 'MoreFilled' },
	Cm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Hm = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z',
		},
		null,
		-1,
	),
	Mm = [Hm];
function ym(e, t, r, a, l, o) {
	return s(), _('svg', Cm, Mm);
}
var Am = i(xm, [
		['render', ym],
		['__file', 'more-filled.vue'],
	]),
	Vm = { name: 'More' },
	Bm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	bm = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z',
		},
		null,
		-1,
	),
	Lm = [bm];
function Sm(e, t, r, a, l, o) {
	return s(), _('svg', Bm, Lm);
}
var Fm = i(Vm, [
		['render', Sm],
		['__file', 'more.vue'],
	]),
	Em = { name: 'MostlyCloudy' },
	Tm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	km = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z',
		},
		null,
		-1,
	),
	Pm = [km];
function Im(e, t, r, a, l, o) {
	return s(), _('svg', Tm, Pm);
}
var Om = i(Em, [
		['render', Im],
		['__file', 'mostly-cloudy.vue'],
	]),
	Rm = { name: 'Mouse' },
	Dm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	qm = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z',
		},
		null,
		-1,
	),
	Nm = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z',
		},
		null,
		-1,
	),
	Um = [qm, Nm];
function Km(e, t, r, a, l, o) {
	return s(), _('svg', Dm, Um);
}
var jm = i(Rm, [
		['render', Km],
		['__file', 'mouse.vue'],
	]),
	Wm = { name: 'Mug' },
	Jm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Qm = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z',
		},
		null,
		-1,
	),
	Ym = [Qm];
function Gm(e, t, r, a, l, o) {
	return s(), _('svg', Jm, Ym);
}
var Zm = i(Wm, [
		['render', Gm],
		['__file', 'mug.vue'],
	]),
	Xm = { name: 'MuteNotification' },
	ew = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	tw = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z',
		},
		null,
		-1,
	),
	rw = n('path', { fill: 'currentColor', d: 'M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z' }, null, -1),
	aw = [tw, rw];
function lw(e, t, r, a, l, o) {
	return s(), _('svg', ew, aw);
}
var ow = i(Xm, [
		['render', lw],
		['__file', 'mute-notification.vue'],
	]),
	nw = { name: 'Mute' },
	sw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	_w = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z',
		},
		null,
		-1,
	),
	iw = n('path', { fill: 'currentColor', d: 'M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z' }, null, -1),
	uw = [_w, iw];
function cw(e, t, r, a, l, o) {
	return s(), _('svg', sw, uw);
}
var dw = i(nw, [
		['render', cw],
		['__file', 'mute.vue'],
	]),
	hw = { name: 'NoSmoking' },
	vw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	fw = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z',
		},
		null,
		-1,
	),
	pw = [fw];
function gw(e, t, r, a, l, o) {
	return s(), _('svg', vw, pw);
}
var mw = i(hw, [
		['render', gw],
		['__file', 'no-smoking.vue'],
	]),
	ww = { name: 'Notebook' },
	$w = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	zw = n(
		'path',
		{ fill: 'currentColor', d: 'M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z' },
		null,
		-1,
	),
	xw = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z',
		},
		null,
		-1,
	),
	Cw = [zw, xw];
function Hw(e, t, r, a, l, o) {
	return s(), _('svg', $w, Cw);
}
var Mw = i(ww, [
		['render', Hw],
		['__file', 'notebook.vue'],
	]),
	yw = { name: 'Notification' },
	Aw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Vw = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z',
		},
		null,
		-1,
	),
	Bw = n('path', { fill: 'currentColor', d: 'M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z' }, null, -1),
	bw = [Vw, Bw];
function Lw(e, t, r, a, l, o) {
	return s(), _('svg', Aw, bw);
}
var Sw = i(yw, [
		['render', Lw],
		['__file', 'notification.vue'],
	]),
	Fw = { name: 'Odometer' },
	Ew = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Tw = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	kw = n('path', { fill: 'currentColor', d: 'M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z' }, null, -1),
	Pw = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z',
		},
		null,
		-1,
	),
	Iw = [Tw, kw, Pw];
function Ow(e, t, r, a, l, o) {
	return s(), _('svg', Ew, Iw);
}
var Rw = i(Fw, [
		['render', Ow],
		['__file', 'odometer.vue'],
	]),
	Dw = { name: 'OfficeBuilding' },
	qw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Nw = n(
		'path',
		{ fill: 'currentColor', d: 'M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z' },
		null,
		-1,
	),
	Uw = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z',
		},
		null,
		-1,
	),
	Kw = n(
		'path',
		{ fill: 'currentColor', d: 'M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z' },
		null,
		-1,
	),
	jw = [Nw, Uw, Kw];
function Ww(e, t, r, a, l, o) {
	return s(), _('svg', qw, jw);
}
var Jw = i(Dw, [
		['render', Ww],
		['__file', 'office-building.vue'],
	]),
	Qw = { name: 'Open' },
	Yw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Gw = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z',
		},
		null,
		-1,
	),
	Zw = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z',
		},
		null,
		-1,
	),
	Xw = [Gw, Zw];
function e$(e, t, r, a, l, o) {
	return s(), _('svg', Yw, Xw);
}
var t$ = i(Qw, [
		['render', e$],
		['__file', 'open.vue'],
	]),
	r$ = { name: 'Operation' },
	a$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	l$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z',
		},
		null,
		-1,
	),
	o$ = [l$];
function n$(e, t, r, a, l, o) {
	return s(), _('svg', a$, o$);
}
var s$ = i(r$, [
		['render', n$],
		['__file', 'operation.vue'],
	]),
	_$ = { name: 'Opportunity' },
	i$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	u$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z',
		},
		null,
		-1,
	),
	c$ = [u$];
function d$(e, t, r, a, l, o) {
	return s(), _('svg', i$, c$);
}
var h$ = i(_$, [
		['render', d$],
		['__file', 'opportunity.vue'],
	]),
	v$ = { name: 'Orange' },
	f$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	p$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z',
		},
		null,
		-1,
	),
	g$ = [p$];
function m$(e, t, r, a, l, o) {
	return s(), _('svg', f$, g$);
}
var w$ = i(v$, [
		['render', m$],
		['__file', 'orange.vue'],
	]),
	$$ = { name: 'Paperclip' },
	z$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	x$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z',
		},
		null,
		-1,
	),
	C$ = [x$];
function H$(e, t, r, a, l, o) {
	return s(), _('svg', z$, C$);
}
var M$ = i($$, [
		['render', H$],
		['__file', 'paperclip.vue'],
	]),
	y$ = { name: 'PartlyCloudy' },
	A$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	V$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z',
		},
		null,
		-1,
	),
	B$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z',
		},
		null,
		-1,
	),
	b$ = [V$, B$];
function L$(e, t, r, a, l, o) {
	return s(), _('svg', A$, b$);
}
var S$ = i(y$, [
		['render', L$],
		['__file', 'partly-cloudy.vue'],
	]),
	F$ = { name: 'Pear' },
	E$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	T$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z',
		},
		null,
		-1,
	),
	k$ = [T$];
function P$(e, t, r, a, l, o) {
	return s(), _('svg', E$, k$);
}
var I$ = i(F$, [
		['render', P$],
		['__file', 'pear.vue'],
	]),
	O$ = { name: 'PhoneFilled' },
	R$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	D$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z',
		},
		null,
		-1,
	),
	q$ = [D$];
function N$(e, t, r, a, l, o) {
	return s(), _('svg', R$, q$);
}
var U$ = i(O$, [
		['render', N$],
		['__file', 'phone-filled.vue'],
	]),
	K$ = { name: 'Phone' },
	j$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	W$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z',
		},
		null,
		-1,
	),
	J$ = [W$];
function Q$(e, t, r, a, l, o) {
	return s(), _('svg', j$, J$);
}
var Y$ = i(K$, [
		['render', Q$],
		['__file', 'phone.vue'],
	]),
	G$ = { name: 'PictureFilled' },
	Z$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	X$ = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z',
		},
		null,
		-1,
	),
	ez = [X$];
function tz(e, t, r, a, l, o) {
	return s(), _('svg', Z$, ez);
}
var rz = i(G$, [
		['render', tz],
		['__file', 'picture-filled.vue'],
	]),
	az = { name: 'PictureRounded' },
	lz = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	oz = n('path', { fill: 'currentColor', d: 'M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z' }, null, -1),
	nz = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z',
		},
		null,
		-1,
	),
	sz = [oz, nz];
function _z(e, t, r, a, l, o) {
	return s(), _('svg', lz, sz);
}
var iz = i(az, [
		['render', _z],
		['__file', 'picture-rounded.vue'],
	]),
	uz = { name: 'Picture' },
	cz = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	dz = n(
		'path',
		{ fill: 'currentColor', d: 'M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z' },
		null,
		-1,
	),
	hz = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z',
		},
		null,
		-1,
	),
	vz = [dz, hz];
function fz(e, t, r, a, l, o) {
	return s(), _('svg', cz, vz);
}
var pz = i(uz, [
		['render', fz],
		['__file', 'picture.vue'],
	]),
	gz = { name: 'PieChart' },
	mz = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	wz = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z',
		},
		null,
		-1,
	),
	$z = n('path', { fill: 'currentColor', d: 'M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z' }, null, -1),
	zz = [wz, $z];
function xz(e, t, r, a, l, o) {
	return s(), _('svg', mz, zz);
}
var Cz = i(gz, [
		['render', xz],
		['__file', 'pie-chart.vue'],
	]),
	Hz = { name: 'Place' },
	Mz = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	yz = n('path', { fill: 'currentColor', d: 'M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z' }, null, -1),
	Az = n('path', { fill: 'currentColor', d: 'M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z' }, null, -1),
	Vz = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z',
		},
		null,
		-1,
	),
	Bz = [yz, Az, Vz];
function bz(e, t, r, a, l, o) {
	return s(), _('svg', Mz, Bz);
}
var Lz = i(Hz, [
		['render', bz],
		['__file', 'place.vue'],
	]),
	Sz = { name: 'Platform' },
	Fz = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ez = n('path', { fill: 'currentColor', d: 'M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z' }, null, -1),
	Tz = [Ez];
function kz(e, t, r, a, l, o) {
	return s(), _('svg', Fz, Tz);
}
var Pz = i(Sz, [
		['render', kz],
		['__file', 'platform.vue'],
	]),
	Iz = { name: 'Plus' },
	Oz = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Rz = n(
		'path',
		{ fill: 'currentColor', d: 'M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z' },
		null,
		-1,
	),
	Dz = [Rz];
function qz(e, t, r, a, l, o) {
	return s(), _('svg', Oz, Dz);
}
var Nz = i(Iz, [
		['render', qz],
		['__file', 'plus.vue'],
	]),
	Uz = { name: 'Pointer' },
	Kz = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	jz = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z',
		},
		null,
		-1,
	),
	Wz = [jz];
function Jz(e, t, r, a, l, o) {
	return s(), _('svg', Kz, Wz);
}
var Qz = i(Uz, [
		['render', Jz],
		['__file', 'pointer.vue'],
	]),
	Yz = { name: 'Position' },
	Gz = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Zz = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z',
		},
		null,
		-1,
	),
	Xz = [Zz];
function ex(e, t, r, a, l, o) {
	return s(), _('svg', Gz, Xz);
}
var tx = i(Yz, [
		['render', ex],
		['__file', 'position.vue'],
	]),
	rx = { name: 'Postcard' },
	ax = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	lx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z',
		},
		null,
		-1,
	),
	ox = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z',
		},
		null,
		-1,
	),
	nx = [lx, ox];
function sx(e, t, r, a, l, o) {
	return s(), _('svg', ax, nx);
}
var _x = i(rx, [
		['render', sx],
		['__file', 'postcard.vue'],
	]),
	ix = { name: 'Pouring' },
	ux = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	cx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z',
		},
		null,
		-1,
	),
	dx = [cx];
function hx(e, t, r, a, l, o) {
	return s(), _('svg', ux, dx);
}
var vx = i(ix, [
		['render', hx],
		['__file', 'pouring.vue'],
	]),
	fx = { name: 'Present' },
	px = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	gx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z',
		},
		null,
		-1,
	),
	mx = n('path', { fill: 'currentColor', d: 'M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z' }, null, -1),
	wx = n('path', { fill: 'currentColor', d: 'M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z' }, null, -1),
	$x = n('path', { fill: 'currentColor', d: 'M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z' }, null, -1),
	zx = [gx, mx, wx, $x];
function xx(e, t, r, a, l, o) {
	return s(), _('svg', px, zx);
}
var Cx = i(fx, [
		['render', xx],
		['__file', 'present.vue'],
	]),
	Hx = { name: 'PriceTag' },
	Mx = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	yx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z',
		},
		null,
		-1,
	),
	Ax = n('path', { fill: 'currentColor', d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z' }, null, -1),
	Vx = [yx, Ax];
function Bx(e, t, r, a, l, o) {
	return s(), _('svg', Mx, Vx);
}
var bx = i(Hx, [
		['render', Bx],
		['__file', 'price-tag.vue'],
	]),
	Lx = { name: 'Printer' },
	Sx = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Fx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z',
		},
		null,
		-1,
	),
	Ex = [Fx];
function Tx(e, t, r, a, l, o) {
	return s(), _('svg', Sx, Ex);
}
var kx = i(Lx, [
		['render', Tx],
		['__file', 'printer.vue'],
	]),
	Px = { name: 'Promotion' },
	Ix = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ox = n('path', { fill: 'currentColor', d: 'm64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z' }, null, -1),
	Rx = [Ox];
function Dx(e, t, r, a, l, o) {
	return s(), _('svg', Ix, Rx);
}
var qx = i(Px, [
		['render', Dx],
		['__file', 'promotion.vue'],
	]),
	Nx = { name: 'QuartzWatch' },
	Ux = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	Kx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M422.02 602.01v-.03c-6.68-5.99-14.35-8.83-23.01-8.51-8.67.32-16.17 3.66-22.5 10.02-6.33 6.36-9.5 13.7-9.5 22.02s3 15.82 8.99 22.5c8.68 8.68 19.02 11.35 31.01 8s19.49-10.85 22.5-22.5c3.01-11.65.51-22.15-7.49-31.49v-.01zM384 512c0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.67 8.99-23.01zm6.53-82.49c11.65 3.01 22.15.51 31.49-7.49h.04c5.99-6.68 8.83-14.34 8.51-23.01-.32-8.67-3.66-16.16-10.02-22.5-6.36-6.33-13.7-9.5-22.02-9.5s-15.82 3-22.5 8.99c-8.68 8.69-11.35 19.02-8 31.01 3.35 11.99 10.85 19.49 22.5 22.5zm242.94 0c11.67-3.03 19.01-10.37 22.02-22.02 3.01-11.65.51-22.15-7.49-31.49h.01c-6.68-5.99-14.18-8.99-22.5-8.99s-15.66 3.16-22.02 9.5c-6.36 6.34-9.7 13.84-10.02 22.5-.32 8.66 2.52 16.33 8.51 23.01 9.32 8.02 19.82 10.52 31.49 7.49zM512 640c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01s-3-17.02-8.99-23.01c-6-5.99-13.66-8.99-23.01-8.99zm183.01-151.01c-6-5.99-13.66-8.99-23.01-8.99s-17.02 3-23.01 8.99c-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99s17.02-3 23.01-8.99c5.99-6 8.99-13.67 8.99-23.01 0-9.35-3-17.02-8.99-23.01z',
		},
		null,
		-1,
	),
	jx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M832 512c-2-90.67-33.17-166.17-93.5-226.5-20.43-20.42-42.6-37.49-66.5-51.23V64H352v170.26c-23.9 13.74-46.07 30.81-66.5 51.24-60.33 60.33-91.49 135.83-93.5 226.5 2 90.67 33.17 166.17 93.5 226.5 20.43 20.43 42.6 37.5 66.5 51.24V960h320V789.74c23.9-13.74 46.07-30.81 66.5-51.24 60.33-60.34 91.49-135.83 93.5-226.5zM416 128h192v78.69c-29.85-9.03-61.85-13.93-96-14.69-34.15.75-66.15 5.65-96 14.68V128zm192 768H416v-78.68c29.85 9.03 61.85 13.93 96 14.68 34.15-.75 66.15-5.65 96-14.68V896zm-96-128c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 584.66 256 512c2.01-72.66 27.01-132.99 75.01-180.99S439.34 258.01 512 256c72.66 2.01 132.99 27.01 180.99 75.01S765.99 439.34 768 512c-2.01 72.66-27.01 132.99-75.01 180.99S584.66 765.99 512 768z',
		},
		null,
		-1,
	),
	Wx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 320c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01 0 9.35 3 17.02 8.99 23.01 6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01 0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99zm112.99 273.5c-8.66-.32-16.33 2.52-23.01 8.51-7.98 9.32-10.48 19.82-7.49 31.49s10.49 19.17 22.5 22.5 22.35.66 31.01-8v.04c5.99-6.68 8.99-14.18 8.99-22.5s-3.16-15.66-9.5-22.02-13.84-9.7-22.5-10.02z',
		},
		null,
		-1,
	),
	Jx = [Kx, jx, Wx];
function Qx(e, t, r, a, l, o) {
	return s(), _('svg', Ux, Jx);
}
var Yx = i(Nx, [
		['render', Qx],
		['__file', 'quartz-watch.vue'],
	]),
	Gx = { name: 'QuestionFilled' },
	Zx = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Xx = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z',
		},
		null,
		-1,
	),
	eC = [Xx];
function tC(e, t, r, a, l, o) {
	return s(), _('svg', Zx, eC);
}
var rC = i(Gx, [
		['render', tC],
		['__file', 'question-filled.vue'],
	]),
	aC = { name: 'Rank' },
	lC = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	oC = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z',
		},
		null,
		-1,
	),
	nC = [oC];
function sC(e, t, r, a, l, o) {
	return s(), _('svg', lC, nC);
}
var _C = i(aC, [
		['render', sC],
		['__file', 'rank.vue'],
	]),
	iC = { name: 'ReadingLamp' },
	uC = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	cC = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z',
		},
		null,
		-1,
	),
	dC = n('path', { fill: 'currentColor', d: 'M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z' }, null, -1),
	hC = [cC, dC];
function vC(e, t, r, a, l, o) {
	return s(), _('svg', uC, hC);
}
var fC = i(iC, [
		['render', vC],
		['__file', 'reading-lamp.vue'],
	]),
	pC = { name: 'Reading' },
	gC = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	mC = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z',
		},
		null,
		-1,
	),
	wC = n('path', { fill: 'currentColor', d: 'M480 192h64v704h-64z' }, null, -1),
	$C = [mC, wC];
function zC(e, t, r, a, l, o) {
	return s(), _('svg', gC, $C);
}
var xC = i(pC, [
		['render', zC],
		['__file', 'reading.vue'],
	]),
	CC = { name: 'RefreshLeft' },
	HC = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	MC = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z',
		},
		null,
		-1,
	),
	yC = [MC];
function AC(e, t, r, a, l, o) {
	return s(), _('svg', HC, yC);
}
var VC = i(CC, [
		['render', AC],
		['__file', 'refresh-left.vue'],
	]),
	BC = { name: 'RefreshRight' },
	bC = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	LC = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z',
		},
		null,
		-1,
	),
	SC = [LC];
function FC(e, t, r, a, l, o) {
	return s(), _('svg', bC, SC);
}
var EC = i(BC, [
		['render', FC],
		['__file', 'refresh-right.vue'],
	]),
	TC = { name: 'Refresh' },
	kC = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	PC = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z',
		},
		null,
		-1,
	),
	IC = [PC];
function OC(e, t, r, a, l, o) {
	return s(), _('svg', kC, IC);
}
var RC = i(TC, [
		['render', OC],
		['__file', 'refresh.vue'],
	]),
	DC = { name: 'Refrigerator' },
	qC = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	NC = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z',
		},
		null,
		-1,
	),
	UC = [NC];
function KC(e, t, r, a, l, o) {
	return s(), _('svg', qC, UC);
}
var jC = i(DC, [
		['render', KC],
		['__file', 'refrigerator.vue'],
	]),
	WC = { name: 'RemoveFilled' },
	JC = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	QC = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z',
		},
		null,
		-1,
	),
	YC = [QC];
function GC(e, t, r, a, l, o) {
	return s(), _('svg', JC, YC);
}
var ZC = i(WC, [
		['render', GC],
		['__file', 'remove-filled.vue'],
	]),
	XC = { name: 'Remove' },
	eH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	tH = n('path', { fill: 'currentColor', d: 'M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z' }, null, -1),
	rH = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	aH = [tH, rH];
function lH(e, t, r, a, l, o) {
	return s(), _('svg', eH, aH);
}
var oH = i(XC, [
		['render', lH],
		['__file', 'remove.vue'],
	]),
	nH = { name: 'Right' },
	sH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	_H = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z',
		},
		null,
		-1,
	),
	iH = [_H];
function uH(e, t, r, a, l, o) {
	return s(), _('svg', sH, iH);
}
var cH = i(nH, [
		['render', uH],
		['__file', 'right.vue'],
	]),
	dH = { name: 'ScaleToOriginal' },
	hH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	vH = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z',
		},
		null,
		-1,
	),
	fH = [vH];
function pH(e, t, r, a, l, o) {
	return s(), _('svg', hH, fH);
}
var gH = i(dH, [
		['render', pH],
		['__file', 'scale-to-original.vue'],
	]),
	mH = { name: 'School' },
	wH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	$H = n(
		'path',
		{ fill: 'currentColor', d: 'M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z' },
		null,
		-1,
	),
	zH = n('path', { fill: 'currentColor', d: 'M64 832h896v64H64zm256-640h128v96H320z' }, null, -1),
	xH = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z',
		},
		null,
		-1,
	),
	CH = [$H, zH, xH];
function HH(e, t, r, a, l, o) {
	return s(), _('svg', wH, CH);
}
var MH = i(mH, [
		['render', HH],
		['__file', 'school.vue'],
	]),
	yH = { name: 'Scissor' },
	AH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	VH = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z',
		},
		null,
		-1,
	),
	BH = [VH];
function bH(e, t, r, a, l, o) {
	return s(), _('svg', AH, BH);
}
var LH = i(yH, [
		['render', bH],
		['__file', 'scissor.vue'],
	]),
	SH = { name: 'Search' },
	FH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	EH = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z',
		},
		null,
		-1,
	),
	TH = [EH];
function kH(e, t, r, a, l, o) {
	return s(), _('svg', FH, TH);
}
var PH = i(SH, [
		['render', kH],
		['__file', 'search.vue'],
	]),
	IH = { name: 'Select' },
	OH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	RH = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z',
		},
		null,
		-1,
	),
	DH = [RH];
function qH(e, t, r, a, l, o) {
	return s(), _('svg', OH, DH);
}
var NH = i(IH, [
		['render', qH],
		['__file', 'select.vue'],
	]),
	UH = { name: 'Sell' },
	KH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	jH = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z',
		},
		null,
		-1,
	),
	WH = [jH];
function JH(e, t, r, a, l, o) {
	return s(), _('svg', KH, WH);
}
var QH = i(UH, [
		['render', JH],
		['__file', 'sell.vue'],
	]),
	YH = { name: 'SemiSelect' },
	GH = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ZH = n('path', { fill: 'currentColor', d: 'M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z' }, null, -1),
	XH = [ZH];
function eM(e, t, r, a, l, o) {
	return s(), _('svg', GH, XH);
}
var tM = i(YH, [
		['render', eM],
		['__file', 'semi-select.vue'],
	]),
	rM = { name: 'Service' },
	aM = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	lM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z',
		},
		null,
		-1,
	),
	oM = [lM];
function nM(e, t, r, a, l, o) {
	return s(), _('svg', aM, oM);
}
var sM = i(rM, [
		['render', nM],
		['__file', 'service.vue'],
	]),
	_M = { name: 'SetUp' },
	iM = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	uM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z',
		},
		null,
		-1,
	),
	cM = n('path', { fill: 'currentColor', d: 'M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z' }, null, -1),
	dM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z',
		},
		null,
		-1,
	),
	hM = n('path', { fill: 'currentColor', d: 'M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' }, null, -1),
	vM = [uM, cM, dM, hM];
function fM(e, t, r, a, l, o) {
	return s(), _('svg', iM, vM);
}
var pM = i(_M, [
		['render', fM],
		['__file', 'set-up.vue'],
	]),
	gM = { name: 'Setting' },
	mM = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	wM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z',
		},
		null,
		-1,
	),
	$M = [wM];
function zM(e, t, r, a, l, o) {
	return s(), _('svg', mM, $M);
}
var xM = i(gM, [
		['render', zM],
		['__file', 'setting.vue'],
	]),
	CM = { name: 'Share' },
	HM = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	MM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z',
		},
		null,
		-1,
	),
	yM = [MM];
function AM(e, t, r, a, l, o) {
	return s(), _('svg', HM, yM);
}
var VM = i(CM, [
		['render', AM],
		['__file', 'share.vue'],
	]),
	BM = { name: 'Ship' },
	bM = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	LM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z',
		},
		null,
		-1,
	),
	SM = [LM];
function FM(e, t, r, a, l, o) {
	return s(), _('svg', bM, SM);
}
var EM = i(BM, [
		['render', FM],
		['__file', 'ship.vue'],
	]),
	TM = { name: 'Shop' },
	kM = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	PM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z',
		},
		null,
		-1,
	),
	IM = [PM];
function OM(e, t, r, a, l, o) {
	return s(), _('svg', kM, IM);
}
var RM = i(TM, [
		['render', OM],
		['__file', 'shop.vue'],
	]),
	DM = { name: 'ShoppingBag' },
	qM = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	NM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z',
		},
		null,
		-1,
	),
	UM = n('path', { fill: 'currentColor', d: 'M192 704h640v64H192z' }, null, -1),
	KM = [NM, UM];
function jM(e, t, r, a, l, o) {
	return s(), _('svg', qM, KM);
}
var WM = i(DM, [
		['render', jM],
		['__file', 'shopping-bag.vue'],
	]),
	JM = { name: 'ShoppingCartFull' },
	QM = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	YM = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z',
		},
		null,
		-1,
	),
	GM = n(
		'path',
		{ fill: 'currentColor', d: 'M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z' },
		null,
		-1,
	),
	ZM = [YM, GM];
function XM(e, t, r, a, l, o) {
	return s(), _('svg', QM, ZM);
}
var ey = i(JM, [
		['render', XM],
		['__file', 'shopping-cart-full.vue'],
	]),
	ty = { name: 'ShoppingCart' },
	ry = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	ay = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z',
		},
		null,
		-1,
	),
	ly = [ay];
function oy(e, t, r, a, l, o) {
	return s(), _('svg', ry, ly);
}
var ny = i(ty, [
		['render', oy],
		['__file', 'shopping-cart.vue'],
	]),
	sy = { name: 'ShoppingTrolley' },
	_y = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	iy = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833zm439-193c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64h551zM256 192h622l-96 384H256V192zm432 641c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833z',
		},
		null,
		-1,
	),
	uy = [iy];
function cy(e, t, r, a, l, o) {
	return s(), _('svg', _y, uy);
}
var dy = i(sy, [
		['render', cy],
		['__file', 'shopping-trolley.vue'],
	]),
	hy = { name: 'Smoking' },
	vy = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	fy = n(
		'path',
		{ fill: 'currentColor', d: 'M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z' },
		null,
		-1,
	),
	py = n('path', { fill: 'currentColor', d: 'M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z' }, null, -1),
	gy = [fy, py];
function my(e, t, r, a, l, o) {
	return s(), _('svg', vy, gy);
}
var wy = i(hy, [
		['render', my],
		['__file', 'smoking.vue'],
	]),
	$y = { name: 'Soccer' },
	zy = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	xy = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z',
		},
		null,
		-1,
	),
	Cy = [xy];
function Hy(e, t, r, a, l, o) {
	return s(), _('svg', zy, Cy);
}
var My = i($y, [
		['render', Hy],
		['__file', 'soccer.vue'],
	]),
	yy = { name: 'SoldOut' },
	Ay = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Vy = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z',
		},
		null,
		-1,
	),
	By = [Vy];
function by(e, t, r, a, l, o) {
	return s(), _('svg', Ay, By);
}
var Ly = i(yy, [
		['render', by],
		['__file', 'sold-out.vue'],
	]),
	Sy = { name: 'SortDown' },
	Fy = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ey = n(
		'path',
		{ fill: 'currentColor', d: 'M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z' },
		null,
		-1,
	),
	Ty = [Ey];
function ky(e, t, r, a, l, o) {
	return s(), _('svg', Fy, Ty);
}
var Py = i(Sy, [
		['render', ky],
		['__file', 'sort-down.vue'],
	]),
	Iy = { name: 'SortUp' },
	Oy = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ry = n(
		'path',
		{ fill: 'currentColor', d: 'M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z' },
		null,
		-1,
	),
	Dy = [Ry];
function qy(e, t, r, a, l, o) {
	return s(), _('svg', Oy, Dy);
}
var Ny = i(Iy, [
		['render', qy],
		['__file', 'sort-up.vue'],
	]),
	Uy = { name: 'Sort' },
	Ky = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	jy = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z',
		},
		null,
		-1,
	),
	Wy = [jy];
function Jy(e, t, r, a, l, o) {
	return s(), _('svg', Ky, Wy);
}
var Qy = i(Uy, [
		['render', Jy],
		['__file', 'sort.vue'],
	]),
	Yy = { name: 'Stamp' },
	Gy = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Zy = n(
		'path',
		{ fill: 'currentColor', d: 'M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z' },
		null,
		-1,
	),
	Xy = [Zy];
function eA(e, t, r, a, l, o) {
	return s(), _('svg', Gy, Xy);
}
var tA = i(Yy, [
		['render', eA],
		['__file', 'stamp.vue'],
	]),
	rA = { name: 'StarFilled' },
	aA = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	lA = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z',
		},
		null,
		-1,
	),
	oA = [lA];
function nA(e, t, r, a, l, o) {
	return s(), _('svg', aA, oA);
}
var sA = i(rA, [
		['render', nA],
		['__file', 'star-filled.vue'],
	]),
	_A = { name: 'Star' },
	iA = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	uA = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z',
		},
		null,
		-1,
	),
	cA = [uA];
function dA(e, t, r, a, l, o) {
	return s(), _('svg', iA, cA);
}
var hA = i(_A, [
		['render', dA],
		['__file', 'star.vue'],
	]),
	vA = { name: 'Stopwatch' },
	fA = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	pA = n('path', { fill: 'currentColor', d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z' }, null, -1),
	gA = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z',
		},
		null,
		-1,
	),
	mA = [pA, gA];
function wA(e, t, r, a, l, o) {
	return s(), _('svg', fA, mA);
}
var $A = i(vA, [
		['render', wA],
		['__file', 'stopwatch.vue'],
	]),
	zA = { name: 'SuccessFilled' },
	xA = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	CA = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z',
		},
		null,
		-1,
	),
	HA = [CA];
function MA(e, t, r, a, l, o) {
	return s(), _('svg', xA, HA);
}
var yA = i(zA, [
		['render', MA],
		['__file', 'success-filled.vue'],
	]),
	AA = { name: 'Sugar' },
	VA = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	BA = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z',
		},
		null,
		-1,
	),
	bA = [BA];
function LA(e, t, r, a, l, o) {
	return s(), _('svg', VA, bA);
}
var SA = i(AA, [
		['render', LA],
		['__file', 'sugar.vue'],
	]),
	FA = { name: 'SuitcaseLine' },
	EA = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	TA = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5zM384 128h256v64H384v-64zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128v384zm448 0H320V448h384v384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128v320zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320v64z',
		},
		null,
		-1,
	),
	kA = [TA];
function PA(e, t, r, a, l, o) {
	return s(), _('svg', EA, kA);
}
var IA = i(FA, [
		['render', PA],
		['__file', 'suitcase-line.vue'],
	]),
	OA = { name: 'Suitcase' },
	RA = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	DA = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z',
		},
		null,
		-1,
	),
	qA = n(
		'path',
		{ fill: 'currentColor', d: 'M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z' },
		null,
		-1,
	),
	NA = [DA, qA];
function UA(e, t, r, a, l, o) {
	return s(), _('svg', RA, NA);
}
var KA = i(OA, [
		['render', UA],
		['__file', 'suitcase.vue'],
	]),
	jA = { name: 'Sunny' },
	WA = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	JA = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z',
		},
		null,
		-1,
	),
	QA = [JA];
function YA(e, t, r, a, l, o) {
	return s(), _('svg', WA, QA);
}
var GA = i(jA, [
		['render', YA],
		['__file', 'sunny.vue'],
	]),
	ZA = { name: 'Sunrise' },
	XA = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	eV = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z',
		},
		null,
		-1,
	),
	tV = [eV];
function rV(e, t, r, a, l, o) {
	return s(), _('svg', XA, tV);
}
var aV = i(ZA, [
		['render', rV],
		['__file', 'sunrise.vue'],
	]),
	lV = { name: 'Sunset' },
	oV = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	nV = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z',
		},
		null,
		-1,
	),
	sV = [nV];
function _V(e, t, r, a, l, o) {
	return s(), _('svg', oV, sV);
}
var iV = i(lV, [
		['render', _V],
		['__file', 'sunset.vue'],
	]),
	uV = { name: 'SwitchButton' },
	cV = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	dV = n('path', { fill: 'currentColor', d: 'M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z' }, null, -1),
	hV = n('path', { fill: 'currentColor', d: 'M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z' }, null, -1),
	vV = [dV, hV];
function fV(e, t, r, a, l, o) {
	return s(), _('svg', cV, vV);
}
var pV = i(uV, [
		['render', fV],
		['__file', 'switch-button.vue'],
	]),
	gV = { name: 'SwitchFilled' },
	mV = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	wV = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z',
		},
		null,
		-1,
	),
	$V = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57v644.36zm402.12-647.67a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z',
		},
		null,
		-1,
	),
	zV = [wV, $V];
function xV(e, t, r, a, l, o) {
	return s(), _('svg', mV, zV);
}
var CV = i(gV, [
		['render', xV],
		['__file', 'switch-filled.vue'],
	]),
	HV = { name: 'Switch' },
	MV = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	yV = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z',
		},
		null,
		-1,
	),
	AV = [yV];
function VV(e, t, r, a, l, o) {
	return s(), _('svg', MV, AV);
}
var BV = i(HV, [
		['render', VV],
		['__file', 'switch.vue'],
	]),
	bV = { name: 'TakeawayBox' },
	LV = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	SV = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z',
		},
		null,
		-1,
	),
	FV = [SV];
function EV(e, t, r, a, l, o) {
	return s(), _('svg', LV, FV);
}
var TV = i(bV, [
		['render', EV],
		['__file', 'takeaway-box.vue'],
	]),
	kV = { name: 'Ticket' },
	PV = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	IV = n(
		'path',
		{ fill: 'currentColor', d: 'M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z' },
		null,
		-1,
	),
	OV = [IV];
function RV(e, t, r, a, l, o) {
	return s(), _('svg', PV, OV);
}
var DV = i(kV, [
		['render', RV],
		['__file', 'ticket.vue'],
	]),
	qV = { name: 'Tickets' },
	NV = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	UV = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z',
		},
		null,
		-1,
	),
	KV = [UV];
function jV(e, t, r, a, l, o) {
	return s(), _('svg', NV, KV);
}
var WV = i(qV, [
		['render', jV],
		['__file', 'tickets.vue'],
	]),
	JV = { name: 'Timer' },
	QV = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	YV = n('path', { fill: 'currentColor', d: 'M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z' }, null, -1),
	GV = n('path', { fill: 'currentColor', d: 'M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z' }, null, -1),
	ZV = n(
		'path',
		{ fill: 'currentColor', d: 'M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z' },
		null,
		-1,
	),
	XV = [YV, GV, ZV];
function eB(e, t, r, a, l, o) {
	return s(), _('svg', QV, XV);
}
var tB = i(JV, [
		['render', eB],
		['__file', 'timer.vue'],
	]),
	rB = { name: 'ToiletPaper' },
	aB = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	lB = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z',
		},
		null,
		-1,
	),
	oB = n('path', { fill: 'currentColor', d: 'M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z' }, null, -1),
	nB = [lB, oB];
function sB(e, t, r, a, l, o) {
	return s(), _('svg', aB, nB);
}
var _B = i(rB, [
		['render', sB],
		['__file', 'toilet-paper.vue'],
	]),
	iB = { name: 'Tools' },
	uB = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	cB = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z',
		},
		null,
		-1,
	),
	dB = [cB];
function hB(e, t, r, a, l, o) {
	return s(), _('svg', uB, dB);
}
var vB = i(iB, [
		['render', hB],
		['__file', 'tools.vue'],
	]),
	fB = { name: 'TopLeft' },
	pB = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	gB = n('path', { fill: 'currentColor', d: 'M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z' }, null, -1),
	mB = n('path', { fill: 'currentColor', d: 'M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z' }, null, -1),
	wB = [gB, mB];
function $B(e, t, r, a, l, o) {
	return s(), _('svg', pB, wB);
}
var zB = i(fB, [
		['render', $B],
		['__file', 'top-left.vue'],
	]),
	xB = { name: 'TopRight' },
	CB = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	HB = n('path', { fill: 'currentColor', d: 'M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z' }, null, -1),
	MB = n('path', { fill: 'currentColor', d: 'M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z' }, null, -1),
	yB = [HB, MB];
function AB(e, t, r, a, l, o) {
	return s(), _('svg', CB, yB);
}
var VB = i(xB, [
		['render', AB],
		['__file', 'top-right.vue'],
	]),
	BB = { name: 'Top' },
	bB = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	LB = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z',
		},
		null,
		-1,
	),
	SB = [LB];
function FB(e, t, r, a, l, o) {
	return s(), _('svg', bB, SB);
}
var EB = i(BB, [
		['render', FB],
		['__file', 'top.vue'],
	]),
	TB = { name: 'TrendCharts' },
	kB = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	PB = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z',
		},
		null,
		-1,
	),
	IB = [PB];
function OB(e, t, r, a, l, o) {
	return s(), _('svg', kB, IB);
}
var RB = i(TB, [
		['render', OB],
		['__file', 'trend-charts.vue'],
	]),
	DB = { name: 'TrophyBase' },
	qB = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	NB = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256v182.4zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4zm172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6z',
		},
		null,
		-1,
	),
	UB = [NB];
function KB(e, t, r, a, l, o) {
	return s(), _('svg', qB, UB);
}
var jB = i(DB, [
		['render', KB],
		['__file', 'trophy-base.vue'],
	]),
	WB = { name: 'Trophy' },
	JB = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	QB = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z',
		},
		null,
		-1,
	),
	YB = [QB];
function GB(e, t, r, a, l, o) {
	return s(), _('svg', JB, YB);
}
var ZB = i(WB, [
		['render', GB],
		['__file', 'trophy.vue'],
	]),
	XB = { name: 'TurnOff' },
	eb = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	tb = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z',
		},
		null,
		-1,
	),
	rb = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z',
		},
		null,
		-1,
	),
	ab = [tb, rb];
function lb(e, t, r, a, l, o) {
	return s(), _('svg', eb, ab);
}
var ob = i(XB, [
		['render', lb],
		['__file', 'turn-off.vue'],
	]),
	nb = { name: 'Umbrella' },
	sb = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	_b = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z',
		},
		null,
		-1,
	),
	ib = [_b];
function ub(e, t, r, a, l, o) {
	return s(), _('svg', sb, ib);
}
var cb = i(nb, [
		['render', ub],
		['__file', 'umbrella.vue'],
	]),
	db = { name: 'Unlock' },
	hb = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	vb = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z',
		},
		null,
		-1,
	),
	fb = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z',
		},
		null,
		-1,
	),
	pb = [vb, fb];
function gb(e, t, r, a, l, o) {
	return s(), _('svg', hb, pb);
}
var mb = i(db, [
		['render', gb],
		['__file', 'unlock.vue'],
	]),
	wb = { name: 'UploadFilled' },
	$b = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	zb = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z',
		},
		null,
		-1,
	),
	xb = [zb];
function Cb(e, t, r, a, l, o) {
	return s(), _('svg', $b, xb);
}
var Hb = i(wb, [
		['render', Cb],
		['__file', 'upload-filled.vue'],
	]),
	Mb = { name: 'Upload' },
	yb = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ab = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z',
		},
		null,
		-1,
	),
	Vb = [Ab];
function Bb(e, t, r, a, l, o) {
	return s(), _('svg', yb, Vb);
}
var bb = i(Mb, [
		['render', Bb],
		['__file', 'upload.vue'],
	]),
	Lb = { name: 'UserFilled' },
	Sb = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Fb = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z',
		},
		null,
		-1,
	),
	Eb = [Fb];
function Tb(e, t, r, a, l, o) {
	return s(), _('svg', Sb, Eb);
}
var kb = i(Lb, [
		['render', Tb],
		['__file', 'user-filled.vue'],
	]),
	Pb = { name: 'User' },
	Ib = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Ob = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z',
		},
		null,
		-1,
	),
	Rb = [Ob];
function Db(e, t, r, a, l, o) {
	return s(), _('svg', Ib, Rb);
}
var qb = i(Pb, [
		['render', Db],
		['__file', 'user.vue'],
	]),
	Nb = { name: 'Van' },
	Ub = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Kb = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z',
		},
		null,
		-1,
	),
	jb = [Kb];
function Wb(e, t, r, a, l, o) {
	return s(), _('svg', Ub, jb);
}
var Jb = i(Nb, [
		['render', Wb],
		['__file', 'van.vue'],
	]),
	Qb = { name: 'VideoCameraFilled' },
	Yb = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	Gb = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z',
		},
		null,
		-1,
	),
	Zb = [Gb];
function Xb(e, t, r, a, l, o) {
	return s(), _('svg', Yb, Zb);
}
var eL = i(Qb, [
		['render', Xb],
		['__file', 'video-camera-filled.vue'],
	]),
	tL = { name: 'VideoCamera' },
	rL = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	aL = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z',
		},
		null,
		-1,
	),
	lL = [aL];
function oL(e, t, r, a, l, o) {
	return s(), _('svg', rL, lL);
}
var nL = i(tL, [
		['render', oL],
		['__file', 'video-camera.vue'],
	]),
	sL = { name: 'VideoPause' },
	_L = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	iL = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z',
		},
		null,
		-1,
	),
	uL = [iL];
function cL(e, t, r, a, l, o) {
	return s(), _('svg', _L, uL);
}
var dL = i(sL, [
		['render', cL],
		['__file', 'video-pause.vue'],
	]),
	hL = { name: 'VideoPlay' },
	vL = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	fL = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z',
		},
		null,
		-1,
	),
	pL = [fL];
function gL(e, t, r, a, l, o) {
	return s(), _('svg', vL, pL);
}
var mL = i(hL, [
		['render', gL],
		['__file', 'video-play.vue'],
	]),
	wL = { name: 'View' },
	$L = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	zL = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z',
		},
		null,
		-1,
	),
	xL = [zL];
function CL(e, t, r, a, l, o) {
	return s(), _('svg', $L, xL);
}
var HL = i(wL, [
		['render', CL],
		['__file', 'view.vue'],
	]),
	ML = { name: 'WalletFilled' },
	yL = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	AL = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z',
		},
		null,
		-1,
	),
	VL = [AL];
function BL(e, t, r, a, l, o) {
	return s(), _('svg', yL, VL);
}
var bL = i(ML, [
		['render', BL],
		['__file', 'wallet-filled.vue'],
	]),
	LL = { name: 'Wallet' },
	SL = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	FL = n(
		'path',
		{ fill: 'currentColor', d: 'M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z' },
		null,
		-1,
	),
	EL = n(
		'path',
		{ fill: 'currentColor', d: 'M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z' },
		null,
		-1,
	),
	TL = n('path', { fill: 'currentColor', d: 'M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z' }, null, -1),
	kL = [FL, EL, TL];
function PL(e, t, r, a, l, o) {
	return s(), _('svg', SL, kL);
}
var IL = i(LL, [
		['render', PL],
		['__file', 'wallet.vue'],
	]),
	OL = { name: 'WarnTriangleFilled' },
	RL = { xmlns: 'http://www.w3.org/2000/svg', 'xml:space': 'preserve', style: { 'enable-background': 'new 0 0 1024 1024' }, viewBox: '0 0 1024 1024' },
	DL = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z',
		},
		null,
		-1,
	),
	qL = [DL];
function NL(e, t, r, a, l, o) {
	return s(), _('svg', RL, qL);
}
var UL = i(OL, [
		['render', NL],
		['__file', 'warn-triangle-filled.vue'],
	]),
	KL = { name: 'WarningFilled' },
	jL = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	WL = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z',
		},
		null,
		-1,
	),
	JL = [WL];
function QL(e, t, r, a, l, o) {
	return s(), _('svg', jL, JL);
}
var YL = i(KL, [
		['render', QL],
		['__file', 'warning-filled.vue'],
	]),
	GL = { name: 'Warning' },
	ZL = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	XL = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z',
		},
		null,
		-1,
	),
	eS = [XL];
function tS(e, t, r, a, l, o) {
	return s(), _('svg', ZL, eS);
}
var rS = i(GL, [
		['render', tS],
		['__file', 'warning.vue'],
	]),
	aS = { name: 'Watch' },
	lS = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	oS = n('path', { fill: 'currentColor', d: 'M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z' }, null, -1),
	nS = n('path', { fill: 'currentColor', d: 'M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z' }, null, -1),
	sS = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z',
		},
		null,
		-1,
	),
	_S = [oS, nS, sS];
function iS(e, t, r, a, l, o) {
	return s(), _('svg', lS, _S);
}
var uS = i(aS, [
		['render', iS],
		['__file', 'watch.vue'],
	]),
	cS = { name: 'Watermelon' },
	dS = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	hS = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z',
		},
		null,
		-1,
	),
	vS = [hS];
function fS(e, t, r, a, l, o) {
	return s(), _('svg', dS, vS);
}
var pS = i(cS, [
		['render', fS],
		['__file', 'watermelon.vue'],
	]),
	gS = { name: 'WindPower' },
	mS = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	wS = n(
		'path',
		{
			fill: 'currentColor',
			d: 'M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z',
		},
		null,
		-1,
	),
	$S = [wS];
function zS(e, t, r, a, l, o) {
	return s(), _('svg', mS, $S);
}
var xS = i(gS, [
		['render', zS],
		['__file', 'wind-power.vue'],
	]),
	CS = { name: 'ZoomIn' },
	HS = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	MS = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z',
		},
		null,
		-1,
	),
	yS = [MS];
function AS(e, t, r, a, l, o) {
	return s(), _('svg', HS, yS);
}
var VS = i(CS, [
		['render', AS],
		['__file', 'zoom-in.vue'],
	]),
	BS = { name: 'ZoomOut' },
	bS = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
	LS = n(
		'path',
		{
			fill: 'currentColor',
			d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z',
		},
		null,
		-1,
	),
	SS = [LS];
function FS(e, t, r, a, l, o) {
	return s(), _('svg', bS, SS);
}
var ES = i(BS, [
	['render', FS],
	['__file', 'zoom-out.vue'],
]);
const TS = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				AddLocation: nr,
				Aim: hr,
				AlarmClock: $r,
				Apple: yr,
				ArrowDown: Ir,
				ArrowDownBold: Sr,
				ArrowLeft: Yr,
				ArrowLeftBold: Ur,
				ArrowRight: _8,
				ArrowRightBold: r8,
				ArrowUp: $8,
				ArrowUpBold: v8,
				Avatar: y8,
				Back: F8,
				Baseball: R8,
				Basketball: j8,
				Bell: na,
				BellFilled: Z8,
				Bicycle: da,
				Bottom: Sa,
				BottomLeft: wa,
				BottomRight: ya,
				Bowl: Ia,
				Box: ja,
				Briefcase: Za,
				Brush: ul,
				BrushFilled: ll,
				Burger: pl,
				Calendar: xl,
				Camera: El,
				CameraFilled: Vl,
				CaretBottom: Rl,
				CaretLeft: jl,
				CaretRight: Zl,
				CaretTop: lo,
				Cellphone: uo,
				ChatDotRound: mo,
				ChatDotSquare: Mo,
				ChatLineRound: So,
				ChatLineSquare: Oo,
				ChatRound: Ko,
				ChatSquare: Go,
				Check: an,
				Checked: un,
				Cherry: pn,
				Chicken: xn,
				ChromeFilled: bn,
				CircleCheck: Nn,
				CircleCheckFilled: kn,
				CircleClose: rs,
				CircleCloseFilled: Qn,
				CirclePlus: ps,
				CirclePlusFilled: _s,
				Clock: Hs,
				Close: qe,
				CloseBold: bs,
				Cloudy: Ds,
				Coffee: Xs,
				CoffeeCup: Ws,
				Coin: s_,
				ColdDrink: h_,
				Collection: y_,
				CollectionTag: w_,
				Comment: S_,
				Compass: O_,
				Connection: j_,
				Coordinate: X_,
				CopyDocument: ni,
				Cpu: hi,
				CreditCard: $i,
				Crop: Ai,
				DArrowLeft: Fi,
				DArrowRight: Oi,
				DCaret: Ki,
				DataAnalysis: Gi,
				DataBoard: ou,
				DataLine: cu,
				Delete: Lu,
				DeleteFilled: gu,
				DeleteLocation: Mu,
				Dessert: Pu,
				Discount: Uu,
				Dish: r5,
				DishDot: Yu,
				Document: I5,
				DocumentAdd: _5,
				DocumentChecked: v5,
				DocumentCopy: $5,
				DocumentDelete: y5,
				DocumentRemove: S5,
				Download: U5,
				Drizzling: Y5,
				Edit: ic,
				EditPen: rc,
				Eleme: zc,
				ElemeFilled: fc,
				ElementPlus: Ac,
				Expand: Fc,
				Failed: Oc,
				Female: Wc,
				Files: Xc,
				Film: n9,
				Filter: d9,
				Finished: m9,
				FirstAidKit: M9,
				Flag: L9,
				Fold: P9,
				Folder: wd,
				FolderAdd: N9,
				FolderChecked: Q9,
				FolderDelete: td,
				FolderOpened: sd,
				FolderRemove: hd,
				Food: Md,
				Football: Sd,
				ForkSpoon: Id,
				Fries: Ud,
				FullScreen: Yd,
				Goblet: $h,
				GobletFull: rh,
				GobletSquare: vh,
				GobletSquareFull: _h,
				GoldMedal: Ah,
				Goods: Oh,
				GoodsFilled: Fh,
				Grape: Kh,
				Grid: Gh,
				Guide: lv,
				Handbag: uv,
				Headset: pv,
				Help: Vv,
				HelpFilled: xv,
				Hide: Tv,
				Histogram: Dv,
				HomeFilled: Wv,
				HotWater: Xv,
				House: of,
				IceCream: Hf,
				IceCreamRound: df,
				IceCreamSquare: mf,
				IceDrink: bf,
				IceTea: kf,
				InfoFilled: qf,
				Iphone: Jf,
				Key: ep,
				KnifeFork: np,
				Lightning: hp,
				Link: wp,
				List: Mp,
				Loading: Lp,
				Location: Zp,
				LocationFilled: Pp,
				LocationInformation: Kp,
				Lock: o7,
				Lollipop: c7,
				MagicStick: g7,
				Magnet: C7,
				Male: L7,
				Management: P7,
				MapLocation: U7,
				Medal: G7,
				Memo: og,
				Menu: cg,
				Message: Hg,
				MessageBox: gg,
				Mic: bg,
				Microphone: kg,
				MilkTea: qg,
				Minus: Jg,
				Money: rm,
				Monitor: _m,
				Moon: zm,
				MoonNight: fm,
				More: Fm,
				MoreFilled: Am,
				MostlyCloudy: Om,
				Mouse: jm,
				Mug: Zm,
				Mute: dw,
				MuteNotification: ow,
				NoSmoking: mw,
				Notebook: Mw,
				Notification: Sw,
				Odometer: Rw,
				OfficeBuilding: Jw,
				Open: t$,
				Operation: s$,
				Opportunity: h$,
				Orange: w$,
				Paperclip: M$,
				PartlyCloudy: S$,
				Pear: I$,
				Phone: Y$,
				PhoneFilled: U$,
				Picture: pz,
				PictureFilled: rz,
				PictureRounded: iz,
				PieChart: Cz,
				Place: Lz,
				Platform: Pz,
				Plus: Nz,
				Pointer: Qz,
				Position: tx,
				Postcard: _x,
				Pouring: vx,
				Present: Cx,
				PriceTag: bx,
				Printer: kx,
				Promotion: qx,
				QuartzWatch: Yx,
				QuestionFilled: rC,
				Rank: _C,
				Reading: xC,
				ReadingLamp: fC,
				Refresh: RC,
				RefreshLeft: VC,
				RefreshRight: EC,
				Refrigerator: jC,
				Remove: oH,
				RemoveFilled: ZC,
				Right: cH,
				ScaleToOriginal: gH,
				School: MH,
				Scissor: LH,
				Search: PH,
				Select: NH,
				Sell: QH,
				SemiSelect: tM,
				Service: sM,
				SetUp: pM,
				Setting: xM,
				Share: VM,
				Ship: EM,
				Shop: RM,
				ShoppingBag: WM,
				ShoppingCart: ny,
				ShoppingCartFull: ey,
				ShoppingTrolley: dy,
				Smoking: wy,
				Soccer: My,
				SoldOut: Ly,
				Sort: Qy,
				SortDown: Py,
				SortUp: Ny,
				Stamp: tA,
				Star: hA,
				StarFilled: sA,
				Stopwatch: $A,
				SuccessFilled: yA,
				Sugar: SA,
				Suitcase: KA,
				SuitcaseLine: IA,
				Sunny: GA,
				Sunrise: aV,
				Sunset: iV,
				Switch: BV,
				SwitchButton: pV,
				SwitchFilled: CV,
				TakeawayBox: TV,
				Ticket: DV,
				Tickets: WV,
				Timer: tB,
				ToiletPaper: _B,
				Tools: vB,
				Top: EB,
				TopLeft: zB,
				TopRight: VB,
				TrendCharts: RB,
				Trophy: ZB,
				TrophyBase: jB,
				TurnOff: ob,
				Umbrella: cb,
				Unlock: mb,
				Upload: bb,
				UploadFilled: Hb,
				User: qb,
				UserFilled: kb,
				Van: Jb,
				VideoCamera: nL,
				VideoCameraFilled: eL,
				VideoPause: dL,
				VideoPlay: mL,
				View: HL,
				Wallet: IL,
				WalletFilled: bL,
				WarnTriangleFilled: UL,
				Warning: rS,
				WarningFilled: YL,
				Watch: uS,
				Watermelon: pS,
				WindPower: xS,
				ZoomIn: VS,
				ZoomOut: ES,
			},
			Symbol.toStringTag,
			{ value: 'Module' },
		),
	),
	l4 = '__epPropKey',
	kS = e => e,
	PS = e => j(e) && !!e[l4],
	o4 = (e, t) => {
		if (!j(e) || PS(e)) return e;
		const { values: r, required: a, default: l, type: o, validator: u } = e,
			h = {
				type: o,
				required: !!a,
				validator:
					r || u
						? f => {
								let g = !1,
									$ = [];
								if (
									(r && (($ = Array.from(r)), D(e, 'default') && $.push(l), g || (g = $.includes(f))),
									u && (g || (g = u(f))),
									!g && $.length > 0)
								) {
									const x = [...new Set($)].map(B => JSON.stringify(B)).join(', ');
									i6(
										`Invalid prop: validation failed${
											t ? ` for prop "${t}"` : ''
										}. Expected one of [${x}], got value ${JSON.stringify(f)}.`,
									);
								}
								return g;
						  }
						: void 0,
				[l4]: !0,
			};
		return D(e, 'default') && (h.default = l), h;
	},
	n4 = e => J3(Object.entries(e).map(([t, r]) => [t, o4(r, t)])),
	s4 = (e, t) => {
		if (
			((e.install = r => {
				for (const a of [e, ...Object.values(t ?? {})]) r.component(a.name, a);
			}),
			t)
		)
			for (const [r, a] of Object.entries(t)) e[r] = a;
		return e;
	},
	_4 = ['', 'default', 'small', 'large'],
	tt = 'el',
	IS = 'is-',
	r0 = (e, t, r, a, l) => {
		let o = `${e}-${t}`;
		return r && (o += `-${r}`), a && (o += `__${a}`), l && (o += `--${l}`), o;
	},
	OS = Symbol('namespaceContextKey'),
	RS = e => {
		const t = e || W2(OS, Ct(tt));
		return _0(() => s2(t) || tt);
	},
	i4 = (e, t) => {
		const r = RS(t);
		return {
			namespace: r,
			b: (H = '') => r0(r.value, e, H, '', ''),
			e: H => (H ? r0(r.value, e, '', H, '') : ''),
			m: H => (H ? r0(r.value, e, '', '', H) : ''),
			be: (H, E) => (H && E ? r0(r.value, e, H, E, '') : ''),
			em: (H, E) => (H && E ? r0(r.value, e, '', H, E) : ''),
			bm: (H, E) => (H && E ? r0(r.value, e, H, '', E) : ''),
			bem: (H, E, O) => (H && E && O ? r0(r.value, e, H, E, O) : ''),
			is: (H, ...E) => {
				const O = E.length >= 1 ? E[0] : !0;
				return H && O ? `${IS}${H}` : '';
			},
			cssVar: H => {
				const E = {};
				for (const O in H) H[O] && (E[`--${r.value}-${O}`] = H[O]);
				return E;
			},
			cssVarName: H => `--${r.value}-${H}`,
			cssVarBlock: H => {
				const E = {};
				for (const O in H) H[O] && (E[`--${r.value}-${e}-${O}`] = H[O]);
				return E;
			},
			cssVarBlockName: H => `--${r.value}-${e}-${H}`,
		};
	},
	DS = e => {
		const t = e4();
		return _0(() => {
			var r, a;
			return (a = (r = t == null ? void 0 : t.proxy) == null ? void 0 : r.$props) == null ? void 0 : a[e];
		});
	};
o4({ type: String, values: _4, required: !1 });
const qS = Symbol('size'),
	NS = () => {
		const e = W2(qS, {});
		return _0(() => s2(e.size) || '');
	};
var u4 = (e, t) => {
	const r = e.__vccOpts || e;
	for (const [a, l] of t) r[a] = l;
	return r;
};
const US = n4({ size: { type: kS([Number, String]) }, color: { type: String } }),
	KS = ue({ name: 'ElIcon', inheritAttrs: !1 }),
	jS = ue({
		...KS,
		props: US,
		setup(e) {
			const t = e,
				r = i4('icon'),
				a = _0(() => {
					const { size: l, color: o } = t;
					return !l && !o ? {} : { fontSize: Q3(l) ? void 0 : Z3(l), '--color': o };
				});
			return (l, o) => (s(), _('i', Xt({ class: s2(r).b(), style: s2(a) }, l.$attrs), [Te(l.$slots, 'default')], 16));
		},
	});
var WS = u4(jS, [['__file', '/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue']]);
const Ne = s4(WS),
	JS = Symbol('formContextKey'),
	QS = Symbol('formItemContextKey'),
	YS = (e, t = {}) => {
		const r = Ct(void 0),
			a = t.prop ? r : DS('size'),
			l = t.global ? r : NS(),
			o = t.form ? { size: void 0 } : W2(JS, void 0),
			u = t.formItem ? { size: void 0 } : W2(QS, void 0);
		return _0(() => a.value || s2(e) || (u == null ? void 0 : u.size) || (o == null ? void 0 : o.size) || l.value || '');
	},
	GS = n4({
		type: { type: String, values: ['success', 'info', 'warning', 'danger', ''], default: '' },
		closable: Boolean,
		disableTransitions: Boolean,
		hit: Boolean,
		color: { type: String, default: '' },
		size: { type: String, values: _4, default: '' },
		effect: { type: String, values: ['dark', 'light', 'plain'], default: 'light' },
		round: Boolean,
	}),
	ZS = { close: e => e instanceof MouseEvent, click: e => e instanceof MouseEvent },
	XS = ue({ name: 'ElTag' }),
	eF = ue({
		...XS,
		props: GS,
		emits: ZS,
		setup(e, { emit: t }) {
			const r = e,
				a = YS(),
				l = i4('tag'),
				o = _0(() => {
					const { type: h, hit: f, effect: g, closable: $, round: x } = r;
					return [l.b(), l.is('closable', $), l.m(h), l.m(a.value), l.m(g), l.is('hit', f), l.is('round', x)];
				}),
				u = h => {
					t('close', h);
				},
				c = h => {
					t('click', h);
				};
			return (h, f) =>
				h.disableTransitions
					? (s(),
					  _(
							'span',
							{ key: 0, class: P2(s2(o)), style: F0({ backgroundColor: h.color }), onClick: c },
							[
								n('span', { class: P2(s2(l).e('content')) }, [Te(h.$slots, 'default')], 2),
								h.closable
									? (s(),
									  m0(
											s2(Ne),
											{ key: 0, class: P2(s2(l).e('close')), onClick: X1(u, ['stop']) },
											{ default: I2(() => [U(s2(qe))]), _: 1 },
											8,
											['class', 'onClick'],
									  ))
									: I1('v-if', !0),
							],
							6,
					  ))
					: (s(),
					  m0(
							u1,
							{ key: 1, name: `${s2(l).namespace.value}-zoom-in-center`, appear: '' },
							{
								default: I2(() => [
									n(
										'span',
										{ class: P2(s2(o)), style: F0({ backgroundColor: h.color }), onClick: c },
										[
											n('span', { class: P2(s2(l).e('content')) }, [Te(h.$slots, 'default')], 2),
											h.closable
												? (s(),
												  m0(
														s2(Ne),
														{ key: 0, class: P2(s2(l).e('close')), onClick: X1(u, ['stop']) },
														{ default: I2(() => [U(s2(qe))]), _: 1 },
														8,
														['class', 'onClick'],
												  ))
												: I1('v-if', !0),
										],
										6,
									),
								]),
								_: 3,
							},
							8,
							['name'],
					  ));
		},
	});
var tF = u4(eF, [['__file', '/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue']]);
const rF = s4(tF);
const aF =
		'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABSCAYAAAChWr2JAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAdgSURBVHhe7Z3fT9tWFMf333ZP+wPWlz3wur7wtAdUiWnqw6iGhlQ0hkTHog23AhWlLeGX2gYFQ60kRGnInBCd+cQ2Scwl+Nx7feLU5yN9pUJsx8f9xvfcc67DNyAIjIjhBFbEcAIrYjiBFTGcwIoYTmBFDCewIoYTWBHDCayI4QRWxHACK2I4gRUxnMCKGE5gZWaGu766APeoBEf//AJv1n8E59fvofTzd/DX02+Hwn/j7/A13Aa3xX3mnaLGHcNqOLxwH/Z+h9e//RBc3Edawn3xGPP0n1DUuFWwGK51eQLvtn5SXkgT4THx2HmlqHFPI1PD/felAZW/nyovmk1Vtp8O3ysvFDXuNGRmOMw9wtxEfbFsC98L33PWFDXutGRiOEx2VReHQ/jes6KocVOwarjBTQ/Kfy4qLwin8BzwXLgoatw6WDMcBopTedWFmIXwXDguflHj1sWa4fLwCU8Kzylrihq3LlYMN8vc5SFlmdsUNW4TjA2HMyRVwHlSFrO4osZtipHhsAZkswTgrC/Dp0MH3P1l2H+u3kZHeI4261XW4l57BrUTBy4Vct8sgaPahyDbcdvAyHDWipvPl+Ds3INBdNwhNx403y/Drmp7DeG52sJK3Jsl6NxEB7yH/sULY9PZjNsG2obD1ooqQJoW4PjEhf640waJGZbvwuXOgmJfumy0g+zE/QhOzzvD43U/rsLB9lJCL6DZHb4b1LfV+1OUpzaYtuHMeoSP4eBtGTp+dDBk0IHO2QYcBEOps74Cl43wPyRm0K7A2cvHimOlF56zKbZ6o+4VHs2Dy3tSh9CQHWi+Ur9OkY24baFlOFyxoAosjXZLW9BsT97F+g0HjtcU2+440L4e37YH3YuSctu0MlltYRJ3UqHhXHAVr6FsGg6Vl1UmWobDZTKqoKYqSJD17lp4N6xAdzzfwbvhyTOt/A7PXRetuO9RzesF2UMVaorXUMfVIKfteVDfUb9OlUncNtEyHGldVzwhGM/TtPIyRb6HE4u3tNkcnrsu5PVsa6tQb09+yKwQfeC44rYJ2XCUYcV5XZ68MwUGaR3q3ZlutbYMtcSMdtAuwymhjKIzvNCH0ydw2Yp2zoQetN/Scto8DKtkw6UveC5B/TraKbg4fi2cEKi3pct5uQHNL6P8zq8uKbdTSacgSi70bpdhfE6UCQ3aOeWhEEw2HKWdcxbkKbcMh4EVOwXdO/kg7dOu0/Yht7FeVaAf7ZsZVzTD5aHdRTYcbWWEnbzrVqoCsUY+iDFQIa8IyaHhdOK2Ddlw+ESRKpipUuVd11WCUdC4VfAT+WDz/QrUPndg4FfB/UO1n1oYAxVy3ATDYVnodB3v0AtQ3t2bzHunQTScTty2IRvOpIcY1p4mGV1s1T6PYf+1M1kgjugc4esr0IxeC39OJ4yBCjnunWDC1MPSxwO6cuAAJ1dRHH1vC8qlwHSqbZMKtlW+9z3Sids2ZMOFz0+qA3pIseH6jUrCRD3onk9OKoaTgjsF4tF+JobDGKiQ437+BN7daVndVXltfHIV0j1dhP0t9fYT2qSWluhx22Y2hjtfCX6+p6B75kBdUSCulfDiJg2WY8OlHFK7wUQq7JuO8Kurd0yohDikzqXhbAypoeGi3wcTgU8fExOLmGBCUJ+YYNgxHMuQmjaHazlwfOSO8lv/FM7+DYbU6MepEA03l0Oq1qQhktJwsbDU4bWgj7mJ34K2snVlx3C5mzR83oLDzUU42FqE8j05q5IiTBrI5YExTTVcKtkxnJRFZgfZcOQC6JjyYjgp/M4OsuHILZ4x5cVwLK2tHBpuLltb9Cb2SLHhBt6GZqdhA+JKiYnhWJr3OTTcXDbvEfIynUiH1dHyiX5jDz4NSx3qbSe1AIf7e2PJdAvqJfz9E3AbgQMHLfCGPz8stuVJOTPc3C5PQvQXIi6GBhnnpgP+VRWaH+4+ueSdV6HzpTO5lg56wd1M/+FjtgWYO/ky3FwvwDQZVm8LvgnfpWHQPgXX8IEak2GFFvdouM8K/2P6JVl5GE4RLcMhNh4m2d1chdpJGVoNF3w/0SdEdT3oeBXw3q9C2eA5hljcD9E4WMBN24gnMuy5Kt5Tpbl/iAax9bgcp2bzmOAClFV9UBMRe6hfxWOCCMe3PNoSflukLYoatw2MDGf7qx6yEp5jLr/qIWPZjtsGRoZDTArBXMqi4FnUuE0xNhxi0u7KWlm2c4oatwlWDIfIFxLmR1/9FxIi8pWr6vPgFlfculgzHIKB5uETj+fAedGLGrcOVg0XM8vcZpa5S1HjppCJ4RCcIXGWDvC98jArK2rcacnMcAjWgDiKpPKnj+aHTA0Xg60VG73XpPCYeWrbJClq3NNgMVwMrljAZTK66+lQuC8eIy+rH9JQ1LhVsBpuHLxwmHtgsotTeXyiKMx9vu4/VFvUuGNmZjihmIjhBFbEcAIrYjiBFTGcwIoYTmBFDCewIoYTWBHDCayI4QRWxHACK2I4gRUxnMCKGE5gRQwnsCKGE1gRwwmsiOEERgD+B3c3H0Gkn1y4AAAAAElFTkSuQmCC',
	lF =
		'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAAeCAYAAACyjmx7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAFvSURBVHhe7d3BCcJAEIZRK7QNL57ECjzZhTctwIvetAJbsJOIwYBIhERBnJn3washy8+SncyX60aSJEmSJOXOACBJkiRJUoHaAWC6WAEA8Me2h9Pj+CZJ0mcZAAAAgjACSJK+yQAAABCIEUCS9GkGAACAYHbH8+MoJ0nS8AwAAAABGQEkSWMzAAAABGUEkCSNyQAAABCYEUCSNDQDAABAcEYASdKQDAAAAAn0vQ5wveyb82YGAC0DAABAEn03AYwAAHQMAAAAiRgBAHjHAAAAkIwRAIA+BgAAgISMAAC8MgAAACRlBADgmQEAACAxIwAAHQMAAEBynggE4M4AAABQgBEAAAMAAEARRgCA2gwAAACF+CcAQF0GAACAYowAADUZAAAACjICANRjAAAAKMoIAFCLAQAAIIBfZgQAyKkdALL064+jJEmSJElRMgBIkiRJklQgA4AkSZIkSQUyAEiSJEmSVCADgCRJkiRJ6WuaG31g0Y157btwAAAAAElFTkSuQmCC',
	oF = 'https://huangnan20030709.github.io/public/avatar.jpg';
const nF = { class: 'box' },
	sF = { class: 'title' },
	_F = { class: 'titletext' },
	iF = { key: 0, class: 'content' },
	uF = { key: 1, class: 'message' },
	cF = ['innerHTML'],
	W0 = {
		__name: 'Item',
		props: { title: String, tags: Array, message: String },
		setup(e) {
			return (t, r) => {
				const a = rF;
				return (
					s(),
					_('div', nF, [
						n('div', sF, [n('div', _F, g1(e.title), 1)]),
						e.tags
							? (s(),
							  _('div', iF, [
									(s(!0),
									_(
										m2,
										null,
										O6(
											e.tags,
											l => (
												s(),
												m0(
													a,
													{ type: 'success', key: l, style: { margin: '7px 6px' } },
													{ default: I2(() => [h0(g1(l), 1)]), _: 2 },
													1024,
												)
											),
										),
										128,
									)),
							  ]))
							: (s(), _('div', uF, [n('span', { class: 'text', innerHTML: e.message }, null, 8, cF)])),
					])
				);
			};
		},
	};
const dF = { class: 'container' },
	hF = Zt(
		'<div class="header"><div class="left"><div class="header-title">个人简历</div><div class="header-message"><div class="top">细心从每一个细节开始</div><div class="bottom">Personal resume</div></div></div><div class="right"><img src="' +
			aF +
			'" alt="" style="width:90px;"></div></div><img src="' +
			lF +
			'" alt="" style="width:100%;">',
		2,
	),
	vF = { class: 'footer' },
	fF = { class: 'basic' },
	pF = { class: 'message' },
	gF = n('div', { class: 'line' }, [n('div', null, '姓名：黄楠'), n('div', null, '项目经历：10+')], -1),
	mF = { class: 'line' },
	wF = { class: 'line' },
	$F = n('div', { class: 'avatar' }, [n('img', { src: oF, style: { width: '80px', 'border-radius': '10px' } })], -1),
	zF = { class: 'list' },
	xF = {
		__name: 'App',
		setup(e) {
			const t = [
					'Less/Sass',
					'Vue2',
					'Vuex/VueRouter/pinia',
					'Vue3',
					'React16',
					'ReactRouter/RTK',
					'React18',
					'elementUI',
					'AntDesign',
					'Vant',
					'Typescript',
					'原生微信小程序',
					'Uniapp',
					'Echarts',
					'NuxtJS',
					'ThreeJS',
					'服务端: Express',
					'服务端: NestJS',
				],
				r = [
					`
      <h2>项目一</h2>
      <h3>技术选型：Vue2+Vuex+VueRouter+Less</h3>
      <h4>项目描述：该项目为前台项目，共有12个一级路由页面包括但不限于如
      首页，购物车页，支付页，登录页</h4><p>主要负责项目的静态搭建，路由表搭建，api接口函数的封装与vuex的全局状态连接，及数据展示和用户交互效果的打磨，后期完善了用户的路由鉴权，提高了应用的逻辑性。改进了用户界面和交互方式，提升了用户对应用的使用体验。</p>
  `,
					`
      <h2>项目二</h2>
      <h3>技术选型：Vue2+Vuex+VueRouter+ElementUI+Echarts</h3>
      <h4>项目描述：该项目为后台管理项目，主要功能为SKU,SPU的增删改查，以及不同账号的权限管理</h4><p>项目为标准工程化项目，有团队标准的代码校验eslint和代码格式化prettierrc工具来要求代码质量，使用了github上的后台管理系统的vue2模版进行二次开发，完成了管理员能在此系统上进行商品管理，权限管理，角色管理，用户访问数据统计等功能，该项目难点在于，数据都放在store,而且同一数据有多组件引用修改，需要弄清各组件数据依托关系，很多解耦合</p>
  `,
					`
      <h2>项目三</h2>
      <h3>技术选型：Vue2+Uniapp+Vant+Less</h3>
      <h4>项目描述：该项目为某商贸城，用与展示家具类商品的小程序项目</h4><p>该小程序项目使用uniapp框架进行开发，共有tabbar页面四个，六个路由页面，主要业务在商品的展示，及搜索业务和商品的收藏，以及简单的store数据管理，在用户登录后，需要把用户信息存储于store，多组件共享数据</p>
  `,
					`
      <h2>项目四</h2>
      <h3>技术选型：Vue3+TS+Pinia+ElementPlus+Sass+Echarts</h3>
      <h4>项目描述：该项目前期封装后台管理项目模板，后期使用vue3复刻项目二</h4><p>该项目内容包括layout组件，敏捷的响应式布局，还有随新添加路由，新增左侧路由切换项，后期复刻了把项目二的功能重构到vue3项目中，且比项目二有更清晰的文件结构，包括但不限于store相关，api相关，vueUse函数，补充了项目二中缺少的表单验证。</p>
  `,
					`
      <h2>项目五</h2>
      <h3>技术选型：React16 + AntD + React-Reduce+ Echarts</h3>
      <h4>项目描述：该项目是仿照Gmail设计，供内网使用的邮箱系统，负责后台管理模块的开发</h4><p>该项目AntD在此项目中举足轻重，整合了全局路由/数据请求/状态管理等一系列实用的功能。由于这个项目的重点还是在页面的展示效果上，所以也没遇到其他react相关问题，不过在经历完这个项目后，倒是对Echarts/Bizcharts的使用更加熟练了</p>
  `,
				];
			let a = '';
			return (
				r.forEach(l => {
					a = a + l;
				}),
				(l, o) => {
					const u = xe('Avatar'),
						c = Ne,
						h = xe('phone'),
						f = xe('School');
					return (
						s(),
						_('div', dF, [
							hF,
							n('div', vF, [
								n('div', fF, [
									n('div', pF, [
										gF,
										n('div', mF, [
											n('div', null, [U(c, null, { default: I2(() => [U(u)]), _: 1 }), h0('邮箱：2864957564@qq.com ')]),
											n('div', null, [U(c, null, { default: I2(() => [U(h)]), _: 1 }), h0('电话：18179495311 ')]),
										]),
										n('div', wF, [
											n('div', null, [U(c, null, { default: I2(() => [U(f)]), _: 1 }), h0('工作年限/职位：3年/前端开发 ')]),
											n('div', null, [U(c, null, { default: I2(() => [U(u)]), _: 1 }), h0('学历：大专 ')]),
										]),
									]),
									$F,
								]),
								n('div', zF, [
									U(W0, {
										title: '自我介绍',
										message: '在前端技术变更快速的今天，作为开发人员，懂得各式工具的api设计习惯，能快速学习新技术，希望有机会成为贵公司的一员。<h3>个人主要职责有：</h3><p>参与网站UI设计并规范协同开发流程</p><p>分析需求，协调后端，编写基本开发文档</p><p>独立完成前端开发任务</p><p>持续维护、优化、按照要求完成项目</p>',
									}),
									U(W0, { title: '技术栈', tags: t }),
									U(W0, { title: '项目经历', message: s2(a) }, null, 8, ['message']),
									U(W0, {
										title: '个人对前端开发的理解',
										message: '<h3>回顾</h3>回顾一下传统开发的弊端：大型项目难以维护，大部分代码缺乏分割，容易造成依赖混乱。<h3>工程化解决了开发层面遇到的问题</h3>引入了模块化和包的概念按需导出和导入机制,自动化的代码检测流程,编译打包机制可以让使用开发效率更高的编码方式，比如 Vue 组件、 CSS 的各种预处理器，引入了 Tree Shaking 机制，清理没有用到的代码，还有非常多的体验提升，列举不完。<h3>团队协作的优势</h3>以前的项目结构比较看写代码的人的喜好，虽然一般在研发部门里都有 “团队规范” 这种东西，但靠自觉性去配合的事情，还是比较难做到统一，特别是项目很赶的时候,统一的代码风格,可复用的模块和组件,代码健壮性有保障',
									}),
								]),
							]),
						])
					);
				}
			);
		},
	},
	c4 = j3(xF);
for (const [e, t] of Object.entries(TS)) c4.component(e, t);
c4.mount('#app');
