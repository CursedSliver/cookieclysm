
(function (a)
{
	"function" == typeof define && define.amd ? define(a) : a()
})(function ()
{
	'use strict';

	function a(a, b, c, d)
	{
		return new(c || (c = Promise))(function (e, f)
		{
			function g(a)
			{
				try
				{
					i(d.next(a))
				}
				catch (a)
				{
					f(a)
				}
			}

			function h(a)
			{
				try
				{
					i(d["throw"](a))
				}
				catch (a)
				{
					f(a)
				}
			}

			function i(a)
			{
				a.done ? e(a.value) : new c(function (b)
				{
					b(a.value)
				}).then(g, h)
			}
			i((d = d.apply(a, b || [])).next())
		})
	}

	function b(a, b)
	{
		function c(a)
		{
			return function (b)
			{
				return d([a, b])
			}
		}

		function d(c)
		{
			if (e) throw new TypeError("Generator is already executing.");
			for (; k;) try
			{
				if (e = 1, h && (i = 2 & c[0] ? h["return"] : c[0] ? h["throw"] || ((i = h["return"]) && i.call(h), 0) : h.next) && !(i = i.call(h, c[1])).done) return i;
				switch ((h = 0, i) && (c = [2 & c[0], i.value]), c[0])
				{
				case 0:
				case 1:
					i = c;
					break;
				case 4:
					return k.label++,
					{
						value: c[1],
						done: !1
					};
				case 5:
					k.label++, h = c[1], c = [0];
					continue;
				case 7:
					c = k.ops.pop(), k.trys.pop();
					continue;
				default:
					if ((i = k.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === c[0] || 2 === c[0]))
					{
						k = 0;
						continue
					}
					if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3]))
					{
						k.label = c[1];
						break
					}
					if (6 === c[0] && k.label < i[1])
					{
						k.label = i[1], i = c;
						break
					}
					if (i && k.label < i[2])
					{
						k.label = i[2], k.ops.push(c);
						break
					}
					i[2] && k.ops.pop(), k.trys.pop();
					continue;
				}
				c = b.call(a, k)
			}
			catch (a)
			{
				c = [6, a], h = 0
			}
			finally
			{
				e = i = 0
			}
			if (5 & c[0]) throw c[1];
			return {
				value: c[0] ? c[1] : void 0,
				done: !0
			}
		}
		var e, h, i, j, k = {
			label: 0,
			sent: function ()
			{
				if (1 & i[0]) throw i[1];
				return i[1]
			},
			trys: [],
			ops: []
		};
		return j = {
			next: c(0),
			throw: c(1),
			return: c(2)
		}, "function" == typeof Symbol && (j[Symbol.iterator] = function ()
		{
			return this
		}), j
	}
	var c = "undefined" == typeof globalThis ? "undefined" == typeof window ? "undefined" == typeof global ? "undefined" == typeof self ?
		{} : self : global : window : globalThis,
		d = function (a, b)
		{
			return b = {
				exports:
				{}
			}, a(b, b.exports), b.exports
		}(function (a)
		{
			(function (b, c)
			{
				a.exports = c()
			})(c, function ()
			{
				function aa(a, b)
				{
					function c()
					{
						this.constructor = a
					}
					D(a, b), a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
				}

				function ba(b, c, d, f)
				{
					return new(d || (d = Promise))(function (g, a)
					{
						function h(b)
						{
							try
							{
								j(f.next(b))
							}
							catch (b)
							{
								a(b)
							}
						}

						function i(b)
						{
							try
							{
								j(f["throw"](b))
							}
							catch (b)
							{
								a(b)
							}
						}

						function j(a)
						{
							a.done ? g(a.value) : new d(function (b)
							{
								b(a.value)
							}).then(h, i)
						}
						j((f = f.apply(b, c || [])).next())
					})
				}

				function ca(b, e)
				{
					function f(a)
					{
						return function (b)
						{
							return g([a, b])
						}
					}

					function g(a)
					{
						if (h) throw new TypeError("Generator is already executing.");
						for (; m;) try
						{
							if (h = 1, j && (k = 2 & a[0] ? j["return"] : a[0] ? j["throw"] || ((k = j["return"]) && k.call(j), 0) : j.next) && !(k = k.call(j, a[1])).done) return k;
							switch ((j = 0, k) && (a = [2 & a[0], k.value]), a[0])
							{
							case 0:
							case 1:
								k = a;
								break;
							case 4:
								return m.label++,
								{
									value: a[1],
									done: !1
								};
							case 5:
								m.label++, j = a[1], a = [0];
								continue;
							case 7:
								a = m.ops.pop(), m.trys.pop();
								continue;
							default:
								if ((k = m.trys, !(k = 0 < k.length && k[k.length - 1])) && (6 === a[0] || 2 === a[0]))
								{
									m = 0;
									continue
								}
								if (3 === a[0] && (!k || a[1] > k[0] && a[1] < k[3]))
								{
									m.label = a[1];
									break
								}
								if (6 === a[0] && m.label < k[1])
								{
									m.label = k[1], k = a;
									break
								}
								if (k && m.label < k[2])
								{
									m.label = k[2], m.ops.push(a);
									break
								}
								k[2] && m.ops.pop(), m.trys.pop();
								continue;
							}
							a = e.call(b, m)
						}
						catch (b)
						{
							a = [6, b], j = 0
						}
						finally
						{
							h = k = 0
						}
						if (5 & a[0]) throw a[1];
						return {
							value: a[0] ? a[1] : void 0,
							done: !0
						}
					}
					var h, j, k, i, m = {
						label: 0,
						sent: function ()
						{
							if (1 & k[0]) throw k[1];
							return k[1]
						},
						trys: [],
						ops: []
					};
					return i = {
						next: f(0),
						throw: f(1),
						return: f(2)
					}, "function" == typeof Symbol && (i[Symbol.iterator] = function ()
					{
						return this
					}), i
				}

				function da()
				{
					for (var b = 0, f = 0, g = arguments.length; f < g; f++) b += arguments[f].length;
					for (var h = Array(b), i = 0, f = 0; f < g; f++)
						for (var j = arguments[f], d = 0, k = j.length; d < k; d++, i++) h[i] = j[d];
					return h
				}

				function a(a)
				{
					return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
				}

				function ea(b, e, f, h, i)
				{
					void 0 === i && (i = {});
					var j = b.toString(),
						k = null === e,
						d = /(?:)/;
					null !== e && (d = "string" == typeof e ? new RegExp(a(e), "g") : e, !d.test(j) && console.warn("Nothing to inject."));
					var m = /(\)[^{]*{)/,
						n = /(}?)$/;
					switch (h)
					{
					case "before":
						j = k ? j.replace(m, "$1" + f) : j.replace(d, "" + f + e);
						break;
					case "replace":
						j = k ? f : j.replace(d, f);
						break;
					case "after":
						j = k ? j.replace(n, f + "$1") : j.replace(d, "" + e + f);
						break;
					default:
						throw new Error("where Parameter must be \"before\", \"replace\" or \"after\"");
					}
					var o = Function.apply(void 0, da(Object.keys(i), ["return (" + j + ")"])).apply(void 0, Object.values(i));
					return o.prototype = b.prototype, o
				}

				function o(b, c, d)
				{
					for (var f, g = 0, h = c; g < h.length; g++) f = h[g], b = ea(b, f[0], f[1], f[2], d);
					return b
				}

				function fa(a, b)
				{
					for (var c in b) a[c] = b[c]
				}

				function ga(a)
				{
					return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
				}

				function c(a, b)
				{
					return a.hasOwnProperty(b)
				}

				function d(b)
				{
					for (var c, d = [
							[1e3, "M"],
							[900, "CM"],
							[500, "D"],
							[400, "CD"],
							[100, "C"],
							[90, "XC"],
							[50, "L"],
							[40, "XL"],
							[10, "X"],
							[9, "IX"],
							[5, "V"],
							[4, "IV"],
							[1, "I"]
						], f = "", g = 0, h = d; g < h.length; g++)
						for (c = h[g]; b >= c[0];) f += c[1], b -= c[0];
					return f
				}

				function p(a)
				{
					switch (a)
					{
					case "mod":
						return {
							achievements:
							{}, buildings:
							{}, upgrades:
							{}
						};
					case "dragon":
						return {
							level: "sync", auras: ["sync", "sync"]
						};
					case "achievement":
						return {
							won: !1
						};
					case "upgrade":
						return {
							bought: !1, unlocked: !1
						};
					case "building":
						return {
							amount: 0, bought: 0, free: 0, totalCookies: 0, level: 0, muted: 0, minigameSave: ""
						};
					default:
						throw new Error("Invalid fragment name!");
					}
				}

				function g()
				{
					return {
						mods:
						{},
						foreign: p("mod"),
						saveVer: 1,
						dragon: p("dragon")
					}
				}

				function i()
				{
					Ja.save = R = g()
				}

				function ha(a)
				{
					return R.foreign.buildings[a.name] || p("building")
				}

				function h(b)
				{
					var c = b.amount,
						e = b.bought,
						f = b.free,
						g = b.totalCookies,
						a = b.level,
						h = b.muted,
						i = b.minigameSave,
						j = b.name;
					R.foreign.buildings[j] = {
						amount: c,
						bought: e,
						free: f,
						totalCookies: g,
						level: a,
						muted: h,
						minigameSave: i
					}
				}

				function b(a)
				{
					return R.foreign.upgrades[a.name] || p("upgrade")
				}

				function e(a)
				{
					R.foreign.upgrades[a.name] = {
						unlocked: !!a.unlocked,
						bought: !!a.bought
					}
				}

				function f(a)
				{
					return R.foreign.achievements[a.name] || p("achievement")
				}

				function k(a)
				{
					R.foreign.achievements[a.name] = {
						won: !!a.won
					}
				}

				function m()
				{
					"sync" !== R.dragon.level && R.dragon.level <= Game.dragonLevels.length - 1 && (Game.dragonLevel = R.dragon.level), "sync" !== R.dragon.auras[0] && R.dragon.auras[0] <= Object.keys(Game.dragonAuras).length - 1 && (Game.dragonAura = R.dragon.auras[0]), "sync" !== R.dragon.auras[1] && R.dragon.auras[1] <= Object.keys(Game.dragonAuras).length - 1 && (Game.dragonAura2 = R.dragon.auras[1])
				}

				function r()
				{
					for (var d, g = 0, h = Ja.customBuildings; g < h.length; g++) d = h[g], fa(d, ha(d));
					for (var i, j = 0, k = Ja.customUpgrades; j < k.length; j++) i = k[j], fa(i, b(i)), i.bought && Game.CountsAsUpgradeOwned(i.pool) && Game.UpgradesOwned++;
					for (var p, q = 0, r = Ja.customAchievements; q < r.length; q++) p = r[q], fa(p, f(p)), p.won && Game.CountsAsAchievementOwned(p.pool) && Game.AchievementsOwned++;
					m()
				}

				function n()
				{
					for (var b, c = 0, f = Ja.customBuildings; c < f.length; c++) b = f[c], h(b);
					for (var g, i = 0, j = Ja.customUpgrades; i < j.length; i++) g = j[i], e(g);
					for (var m, p = 0, q = Ja.customAchievements; p < q.length; p++) m = q[p], k(m)
				}

				function s(a)
				{
					var b = g();
					if ("object" != typeof a || null === a) return b;
					if (!c(a, "saveVer") || "number" != typeof a.saveVer || 1 < a.saveVer) return b;
					if (b.foreign = c(a, "foreign") ? function (b)
						{
							var e = p("mod");
							if ("object" != typeof b || null === b) return e;
							if (c(b, "buildings") && "object" == typeof b.buildings && null !== b.buildings)
								for (var f in b.buildings)
								{
									var g = b.buildings[f];
									if ("object" == typeof g && null !== g)
										for (var h in e.buildings[f] = p("building"), g) typeof e.buildings[f][h] == typeof g[h] && (e.buildings[f][h] = g[h])
								}
							if (c(b, "upgrades") && "object" == typeof b.upgrades && null !== b.upgrades)
								for (var i in b.upgrades)
								{
									var j = b.upgrades[i];
									if ("object" == typeof j && null !== j)
										for (var h in e.upgrades[i] = p("upgrade"), e.upgrades[i]) typeof e.upgrades[i][h] == typeof j[h] && (e.upgrades[i][h] = j[h])
								}
							if (c(b, "achievements") && "object" == typeof b.achievements && null !== b.achievements)
								for (var k in b.achievements)
								{
									var m = b.achievements[k];
									if ("object" == typeof m && null !== m)
										for (var h in e.achievements[k] = p("achievement"), e.achievements[k]) typeof e.achievements[k][h] == typeof m[h] && (e.achievements[k][h] = m[h])
								}
							return e
						}(a.foreign) : p("mod"), c(a, "dragon") && "object" == typeof a.dragon && null !== a.dragon && (c(a.dragon, "level") && ("number" == typeof a.dragon.level || "sync" === a.dragon.level) && (b.dragon.level = a.dragon.level), c(a.dragon, "auras") && a.dragon.auras instanceof Array))
						for (var d in a.dragon.auras)
						{
							var e = a.dragon.auras[d];
							("number" == typeof e || "sync" === e) && (b.dragon.auras[d] = e)
						}
					return b
				}

				function t(a)
				{
					var b;
					try
					{
						b = JSON.parse(a)
					}
					catch (b)
					{
						"" !== a && console.warn("CPPKIES: Found invalid save, creating new one..."), i()
					}
					R = Ja.save = s(b), r()
				}

				function j()
				{
					return n(), JSON.stringify(R)
				}

				function w(a, b)
				{
					S[a] = b
				}

				function y(a)
				{
					if (Q.includes(a)) throw new Error("Recursive alias");
					return (Q.push(a), a in S) ? y(S[a]) : (Q = [], a)
				}

				function A(a)
				{
					return new Promise(function (b)
					{
						var c = new Image;
						c.addEventListener("load", function ()
						{
							b(c)
						}), c.crossOrigin = "Anonymous", c.src = a
					})
				}

				function L(a)
				{
					return new Promise(function (b)
					{
						a.canvas.toBlob(function (a)
						{
							b(URL.createObjectURL(a))
						})
					})
				}

				function u(b, f, e, c, d, a)
				{
					return new Promise(function (g)
					{
						e[0] instanceof Array || (e = [e]), e = e;
						var h = {};
						for (var i in e)
							for (var j in e[i])
								if (e[i][j])
								{
									if (e[i][j] = e[i][j].toString().toLowerCase(), !(e[i][j] in f)) throw new Error("Invalid icon name");
									h[e[i][j]] = [parseInt(j), parseInt(i)]
								} var k = document.createElement("canvas").getContext("2d"),
							m = new Image;
						m.addEventListener("load", function ()
						{
							for (var b in k.canvas.width = d[0], k.canvas.height = d[1], h) k.drawImage(m, h[b][0] * c[0], h[b][1] * c[1], c[0], c[1], f[b][0] * c[0], f[b][1] * c[1], c[0], c[1]);
							var e, j = function ()
							{
								L(k).then(g)
							};
							a && (e = a(k)), e instanceof Promise ? e.then(j) : j()
						}), m.crossOrigin = "Anonymous", m.src = b
					})
				}

				function v(a)
				{
					return a = da(a), (void 0 === a[2] || null === a[2]) && (a[2] = Ja.iconLink), a[2] = y(a[2]), a
				}

				function G(a)
				{
					var b = new O,
						c = [new K("tooltip", function ()
						{
							a.tooltip = ea(ea(a.tooltip, "return", "let tempRet = ", "replace"), null, "\n//Cppkies injection\n\t\t\t\treturn Cppkies.buildingHooks[this.name].emit(\"tooltip\", tempRet)", "after")
						}), new K("buy", function ()
						{
							a.buy = ea(a.buy, null, "\n//Cppkies injection\n\t\t\t\tif(success) {\n\t\t\t\t\tCppkies.buildingHooks[this.name].emit(\"buy\")\n\t\t\t\t}", "after")
						}), new K("levelUp", function ()
						{
							a.levelUp = ea(a.levelUp, "me.level+=1;", "\n// Cppkies injection\nCppkies.buildingHooks[me.name].emit(\"levelUp\")", "after",
							{
								me: a
							})
						})];
					c.forEach(function (a)
					{
						var b;
						null === (b = a.func) || void 0 === b ? void 0 : b.call(a)
					}), Ja.hooks.on("buildingCps", function (c)
					{
						return {
							building: c.building,
							cps: Game.Objects[c.building] === a ? b.emit("cps", c.cps) : c.cps
						}
					}), V[a.name] = b
				}

				function C()
				{
					for (var a, b = 0, c = Game.ObjectsById; b < c.length; b++) a = c[b], V[a.name] || G(a)
				}

				function B(a)
				{
					return "fortune" === a.tier
				}

				function I(b)
				{
					for (var c, d = 1, e = 1; e <= b; e++) d += null !== (c = qa[e]) && void 0 !== c ? c : qa["default"];
					return 9 * F(10, d)
				}

				function q()
				{
					Ja.on("getIcon", function (a)
					{
						var b = a.icon,
							c = a.type,
							d = a.tier;
						return Ja.customTiers.forEach(function (a)
						{
							a.keyName === d.toString() && a.iconLink && (b[2] = a.iconLink)
						}),
						{
							icon: b,
							type: c,
							tier: d
						}
					}), Ja.on("getIcon", function (a)
					{
						var b = a.icon,
							c = a.type,
							d = a.tier;
						return Ja.customBuildings.forEach(function (a)
						{
							a.name === c && a.iconLink && (b[2] = a.iconLink)
						}),
						{
							icon: b,
							tier: d,
							type: c
						}
					}), Ja.on("getIcon", function (a)
					{
						var b = a.icon,
							d = a.type,
							e = a.tier;
						return void 0 !== b[2] && null !== b[2] || c(Game.Tiers[e.toString()], "iconLink") || (b[2] = ""),
						{
							icon: b,
							tier: e,
							type: d
						}
					}), Ja.on("preSave", function ()
					{
						if (0 !== Game.dragonAura && (R.dragon.auras[0] = "sync"), 0 !== Game.dragonAura2 && (R.dragon.auras[1] = "sync"), Game.dragonAuras[Game.dragonAura] instanceof Fa && (R.dragon.auras[0] = Game.dragonAura, Game.dragonAura = 0), Game.dragonAuras[Game.dragonAura2] instanceof Fa && (R.dragon.auras[1] = Game.dragonAura2, Game.dragonAura2 = 0), Game.dragonLevels[Game.dragonLevel] instanceof Ga || Game.dragonLevel >= P)
							for (R.dragon.level = Game.dragonLevel; Game.dragonLevels[Game.dragonLevel] instanceof Ga || Game.dragonLevel >= P;) Game.dragonLevel--
					}), Ja.on("postSave", function ()
					{
						"sync" !== R.dragon.auras[0] && Game.dragonAuras[R.dragon.auras[0]] && (Game.dragonAura = R.dragon.auras[0]), "sync" !== R.dragon.auras[1] && Game.dragonAuras[R.dragon.auras[1]] && (Game.dragonAura2 = R.dragon.auras[1]), "sync" !== R.dragon.level && Game.dragonLevels[R.dragon.level] && (Game.dragonLevel = R.dragon.level)
					}), Ja.on("reset", function ()
					{
						R.dragon.auras = ["sync", "sync"], R.dragon.level = "sync"
					}), Ja.on("specialPic", function (a)
					{
						var b, c = Game.dragonLevels[Game.dragonLevel];
						return "dragon" === a.tab && c instanceof Ga && (a.pic = null !== (b = c.picLink) && void 0 !== b ? b : a.pic), a
					})
				}
				var E, M = Math.abs,
					x = Math.floor,
					N = Math.min,
					F = Math.pow,
					H = Math.max,
					D = function (a, b)
					{
						return D = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (a, b)
						{
							a.__proto__ = b
						} || function (a, b)
						{
							for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
						}, D(a, b)
					},
					O = function ()
					{
						function a()
						{
							this._events = {}
						}
						return a.prototype.on = function (a, b)
						{
							this._events[a] ? this._events[a].push(b) : this._events[a] = [b]
						}, a.prototype.once = function (a, b)
						{
							var c = this;
							this.on(a, function (d)
							{
								return c.off(a, b), b(d)
							})
						}, a.prototype.off = function (a, b)
						{
							this._events[a].splice(this._events[a].indexOf(b), 1)
						}, a.prototype.emit = function (b)
						{
							for (var c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
							var e = c[0];
							this._events[b] || (this._events[b] = []);
							for (var f, g = 0, h = this._events[b]; g < h.length; g++) f = h[g], e = f(e);
							return e
						}, a.prototype.constEmit = function (b)
						{
							for (var c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
							this._events[b] || (this._events[b] = []);
							for (var e, f = 0, g = this._events[b]; f < g.length; f++) e = g[f], e(c[0])
						}, a
					}(),
					K = function ()
					{
						return function (a, b)
						{
							this.value = a, this.func = b
						}
					}(),
					P = Game.dragonLevels.length + 0,
					R = g(),
					S = {},
					Q = [],
					T = {},
					J = {
						"3d": [0, 21],
						milestone1: [0, 22],
						milestone2: [0, 23],
						milestone3: [0, 24],
						krumblor: [0, 25],
						level1: [0, 26],
						level2: [0, 27]
					},
					z = {},
					U = {
						research: [9, 0],
						cookie: [10, 0],
						mouse: [11, 0],
						multicursor: [12, 0],
						kitten: [18, 0]
					},
					V = {},
					X = [],
					_ = function (h)
					{
						function a(i, e, j, a, n, o, q, d, c, r)
						{
							var p, s, t = this;
							if (Game.Objects[i]) throw new Error("Can't create building, \"" + i + "\" is already used as a building name");
							0 !== a[1] && console.warn("All icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=relink-column"), 0 !== n[0] && console.warn("All big icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=big-icons"), t = h.call(this, i, e, j, n[1], a[0], o, 0, q, d) || this, X.push(t), V[i] || G(t);
							var u = function (a)
							{
								if (0 >= parseInt(a)) return "continue";
								var b = Game.ObjectsById[a];
								if (b.canvas = l("rowCanvas" + a), !b.canvas) return "continue";
								if (b.ctx = b.canvas.getContext("2d"), b.canvas.addEventListener("mouseover", function ()
									{
										b.mouseOn = !0
									}), b.canvas.addEventListener("mouseout", function ()
									{
										b.mouseOn = !1
									}), b.canvas.addEventListener("mousemove", function (a)
									{
										var c = b.canvas.getBoundingClientRect();
										b.mousePos[0] = a.pageX - c.left, b.mousePos[1] = a.pageY - c.top
									}), b.minigame && b.minigameLoaded)
								{
									var c = b.minigame.save();
									b.minigame.launch(), b.minigame.load(c)
								}
							};
							for (var b in Game.ObjectsById) u(b);
							t.buildingLink = null !== (p = n[2]) && void 0 !== p ? p : Ja.buildingLink, t.iconLink = y(null !== (s = a[2]) && void 0 !== s ? s : Ja.iconLink), c && (Game.foolObjects[i] = c), r && (Game.goldenCookieBuildingBuffs[i] = r), t.iconLink && V[t.name].on("tooltip", function (a)
							{
								return t.locked ? a : a.replace("background-position", "background-image:url(" + t.iconLink + ");background-position")
							}), Game.BuildStore(), t.buildingLink && Ja.hooks.on("buildStore", function ()
							{
								l("productIcon" + t.id).style.backgroundImage = "url(" + t.buildingLink + ")", l("productIconOff" + t.id).style.backgroundImage = "url(" + t.buildingLink + ")"
							}), Game.BuildStore(), t.canvas = l("rowCanvas" + t.id), t.ctx = t.canvas.getContext("2d"), t.pics = [];
							var w = document.createElement("div");
							w.className = "tinyProductIcon", w.id = "mutedProduct" + t.id, w.style.display = "none", t.buildingLink && (w.style.backgroundImage = "url(" + t.buildingLink + ")"), w.style.backgroundPositionX = "-" + a[0] + "px", w.style.backgroundPositionY = "-" + a[1] + "px", w.addEventListener("click", function ()
							{
								t.mute(0), window.PlaySound(t.muted ? "snd/clickOff.mp3" : "snd/clickOn.mp3")
							}), window.AddEvent(t.canvas, "mouseover", function ()
							{
								t.mouseOn = !0
							}), window.AddEvent(t.canvas, "mouseout", function ()
							{
								t.mouseOn = !1
							}), t.canvas.addEventListener("mousemove", function (a)
							{
								var b = t.canvas.getBoundingClientRect();
								t.mousePos[0] = a.pageX - b.left, t.mousePos[1] = a.pageY - b.top
							}), l("buildingsMute").appendChild(w);
							var f = ha(t);
							for (var b in f) t[b] = f[b];
							return Game.recalculateGains = 1, t
						}
						return aa(a, h), a
					}(Game.Object),
					ia = [],
					ja = function (f)
					{
						function a(g, e, h, a, i)
						{
							void 0 === i && (i = function () {});
							var j = f.call(this, g, "function" == typeof e ? "" : e, "function" == typeof h ? 0 : h, "function" == typeof a ? [0, 0] : v(a), i) || this;
							"function" == typeof e && (j.descFunc = e), "function" == typeof h && (j.priceFunc = h), "function" == typeof a && (j.iconFunction = function ()
							{
								return v(a())
							}), ia.push(j);
							var k = b(j);
							for (var d in k) j[d] = k[d];
							return Game.upgradesToRebuild = 1, j.bought && Game.CountsAsUpgradeOwned(j.pool) && Game.UpgradesOwned++, j
						}
						return aa(a, f), a
					}(Game.Upgrade),
					ka = function (b)
					{
						function a(c, e, f, g, a, h, i)
						{
							void 0 === h && (h = ["Legacy"]), void 0 === i && (i = function () {});
							var j = b.call(this, c, e, f, g, i) || this;
							return j.pool = "prestige", j.posX = a[0], j.posY = a[1], j.parents = h.map(function (a)
							{
								return Game.Upgrades[a] || Game.UpgradesById[a]
							}), Game.PrestigeUpgrades.push(j), Game.UpgradePositions[j.id] = a, j
						}
						return aa(a, b), a
					}(ja),
					la = function (b)
					{
						function a(c, d, e, f)
						{
							var g = this;
							return "string" == typeof e && (e = Game.Objects[e]), g = b.call(this, c, ga(e.plural) + " are <b>twice</b> as efficient.<q>" + d + "</q>", e.basePrice * Game.Tiers[f].price, Game.GetIcon(e.name, f)) || this, Game.SetTier(e.name, f), g.buildingTie1 = e, B(g) && (g.order = 19e3, e.fortune = g), isNaN(parseInt(f.toString())) || (f = parseInt(f.toString())), "number" == typeof f && (g.order = 100 * (e.id + 1) + g.id / 1e3, g.order -= 75 * H(0, N(e.id - 4, 3)), 8 <= e.id && (g.order -= 75)), "fortune" === f && Game.Tiers[f].upgrades.push(g), e.buyFunction.apply(e), g
						}
						return aa(a, b), a
					}(ja),
					ma = function (a)
					{
						function b(b, c, d, f)
						{
							var g = this;
							if (f)
							{
								if (!f.endsWith(".png")) throw new Error("Can't use the grandma picture URL \"" + f + "\", URL must end with .png");
								f = f.substring(0, f.length - 4)
							}
							"string" == typeof d && (d = Game.Objects[d]);
							var e = d.id - 1;
							return 1 === e ? e = "grandma" : e += " grandmas", g = a.call(this, b, "Grandmas are <b>twice</b> as efficient. " + ga(d.plural) + " gain <b>+1% CpS</b> per " + e + ".<q>" + c + "</q>", d.basePrice * Game.Tiers[2].price, [10, 9, ""], Game.Objects.Grandma.redraw) || this, d.grandma = g, g.buildingTie = d, g.order = 250 + g.id / 1e3, 12 <= d.id && (g.order += 5), Game.GrandmaSynergies.push(g.name), f && Ja.hooks.on("grandmaPic", function (a)
							{
								return g.bought ? da(a, [f]) : a
							}), Game.Objects.Grandma.redraw(), d.buyFunction.apply(d), g
						}
						return aa(b, a), b
					}(ja),
					na = function (b)
					{
						function a(c, e, f, g, h)
						{
							var i = this;
							"string" == typeof f && (f = Game.Objects[f]), "string" == typeof g && (g = Game.Objects[g]);
							var j = Game.GetIcon(f.name, h);
							if (f.basePrice > g.basePrice)
							{
								var k = f;
								f = g, g = k
							}
							return i = b.call(this, c, ga(f.plural) + " gain <b>+5% CpS</b> per " + g.name.toLowerCase() + ".<br>" + ga(g.plural) + " gain <b>+0.1% CpS</b> per \n\t\t\t" + f.name.toLowerCase() + ".<q>" + e + "</q>", (10 * f.basePrice + 1 * g.basePrice) * Game.Tiers[h].price, j) || this, i.tier = h, i.buildingTie1 = f, i.buildingTie2 = g, i.order = 5e3 + i.id / 1e3, f.synergies.push(i), g.synergies.push(i), Game.Tiers[h].upgrades.push(i), Game.RebuildUpgrades(), f.buyFunction.apply(f), i
						}
						return aa(a, b), a
					}(ja),
					oa = [5, 7, 8, 9, 10],
					pa = function (b)
					{
						function a(c, d, e, f)
						{
							void 0 === f && (f = 20);
							var g = this,
								h = Game.Objects.Cursor,
								i = parseInt(e.toString());
							return g = b.call(this, c, "Multiplies the gain from Thousand fingers by <b>" + f + "</b>.<q>" + d + "</q>", Game.Tiers[e].special || isNaN(i) ? h.basePrice * Game.Tiers[e].price : F(10, oa[N(i - 4, oa.length - 1)] + 3 * H(i - 8, 0)), Game.GetIcon(h.name, e)) || this, g.tier = e, g.pool = "", g.order = 100 + g.id / 1e3, Ja.on("cursorFingerMult", function (a)
							{
								return g.bought ? a * f : a
							}), Game.Tiers[e].special || isNaN(i) || Ja.buildingHooks.Cursor.on("buy", function ()
							{
								h.amount >= (4 === i ? 25 : 50 * (i - 4)) && Game.Unlock(g.name)
							}), "fortune" === e && Game.Tiers[e].upgrades.push(g), Game.Objects.Cursor.buyFunction.apply(Game.Objects.Cursor), g
						}
						return aa(a, b), a
					}(ja),
					qa = {
						1: 5,
						2: 4,
						4: 4,
						default: 3
					},
					ra = [.1, .125, .15, .175, .2, .2, .2, .2, .2, .175, .15, .125, .115],
					sa = function (b)
					{
						function a(c, d, e, f, g, h)
						{
							void 0 === f && (f = Game.Tiers[e].special || isNaN(parseInt(e.toString())) ? null : ra[(parseInt(e.toString()) - 1) % (ra.length - 1)]), void 0 === h && (h = Game.Tiers[e].special || isNaN(parseInt(e.toString())) ? null : 1 === e ? .5 : e - 1);
							var i = b.call(this, c, "You gain <b>more CpS</b> the more milk you have.<q>" + d + "</q>", Game.Tiers[e].special || isNaN(parseInt(e.toString())) ? null !== g && void 0 !== g ? g : 0 : I(e), Game.GetIcon("Kitten", e)) || this;
							return i.tier = e, i.kitten = !0, i.pool = "", null === f && console.warn("Please make sure to specify the power if the kitten tier is special"), (Game.Tiers[e].special || isNaN(parseInt(e.toString()))) && void 0 === g && console.warn("Please make sure to specify the cost if the kitten tier is special"), null !== h && Ja.on("logic", function ()
							{
								Game.milkProgress >= h && Game.Unlock(i.name)
							}), i.order = 2e4 + i.id / 1e3, null !== f && Ja.on("rawCpsMult", function (a)
							{
								var b = i.bought ? 1 + Game.milkProgress * f * Ja.hiddenMilkMult : 1;
								return Game.cookiesMultByType.kittens *= b, a * b
							}), Game.UpgradesByPool.kitten.push(i), "fortune" === e && Game.Tiers[e].upgrades.push(i), i
						}
						return aa(a, b), a
					}(ja),
					ta = function (b)
					{
						function a(c, d, e, f)
						{
							void 0 === f && (f = 1);
							var g = b.call(this, c, "Clicking gains <b>+" + f + "% of your CpS</b>.<q>" + d + "</q>", F(10, 3 + 2 * parseInt(e.toString())), Game.GetIcon("Mouse", e)) || this;
							g.tier = e, g.pool = "";
							var h = parseInt(e.toString());
							return g.order = 150 + g.id / 1e3, Ja.on("cpcAdd", function (a)
							{
								return g.bought ? a + Game.cookiesPs * f / 100 : a
							}), Game.Tiers[e].special || isNaN(h) || Ja.on("check", function ()
							{
								Game.handmadeCookies >= F(10, 1 + 2 * h) && Game.Unlock(g.name)
							}), "fortune" === e && Game.Tiers[e].upgrades.push(g), g
						}
						return aa(a, b), a
					}(ja),
					ua = function (b)
					{
						function a(f, e, g, h, a, i, j)
						{
							var k, m = b.call(this, f, "Cookie production multiplier <b>+" + Beautify("function" == typeof a ? a() : a, 1) + "%</b>.<q>" + e + "</q>", g, h) || this;
							return m.power = a, m.pool = "cookie", m.order = (null !== (k = null !== j && void 0 !== j ? j : Ja.cookieOrder) && void 0 !== k ? k : 10020) + m.id / 1e3, m.unlockAt = {
								name: f,
								cookies: ("function" == typeof g ? g() : g) / 20,
								require: null === i || void 0 === i ? void 0 : i.require,
								season: null === i || void 0 === i ? void 0 : i.season
							}, Game.UnlockAt.push(m.unlockAt), Game.UpgradesByPool.cookie.push(m), Game.cookieUpgrades.push(m), m
						}
						return aa(a, b), a
					}(ja),
					va = [],
					wa = function ()
					{
						return function (b, e, f, g, h, i, j, k, m)
						{
							void 0 === g && (g = !1), void 0 === h && (h = "auto"), void 0 === i && (i = null), void 0 === j && (j = null), void 0 === k && (k = null), void 0 === m && (m = "auto");
							var n;
							this.name = b, this.color = f, this.upgrades = [], this.special = g, this.keyName = "auto" === m ? g ? b : (Object.keys(Game.Tiers).filter(function (a)
							{
								return !isNaN(parseInt(a))
							}).length + 1).toString() : m, null === i && (this.unlock = -1), "number" == typeof i && (this.unlock = i), (!1 === g && null === i || "auto" === i) && (this.unlock = Game.Tiers[parseInt(this.keyName) - 1].unlock + 50), "number" == typeof j && (this.achievUnlock = j), (!1 === g && null === j || "auto" === j) && (this.achievUnlock = Game.Tiers[parseInt(this.keyName) - 1].achievUnlock + 50), k && (this.req = k), this.price = "auto" === h ? 1e8 * Game.Tiers[Object.keys(Game.Tiers).filter(function (a)
							{
								return !isNaN(parseInt(a))
							}).length.toString()].price : h, this.iconRow = e[1], this.iconLink = y(null !== (n = e[2]) && void 0 !== n ? n : Ja.iconLink), Game.Tiers[this.keyName] = this, va.push(this)
						}
					}(),
					xa = [],
					ya = function (b)
					{
						function a(c, d, e)
						{
							var g = b.call(this, c, d, v(e)) || this;
							return fa(g, f(g)), xa.push(g), g.won && Game.CountsAsAchievementOwned(g.pool) && Game.AchievementsOwned++, g
						}
						return aa(a, b), a
					}(Game.Achievement),
					za = function (b)
					{
						function a(c, d, e, f)
						{
							void 0 === f && (f = F(10, x(1.5 * Game.BankAchievements.length + 2)));
							var g = b.call(this, c, "Bake <b>" + toFixed(f) + "</b> cookie" + (1 === M(f) ? "" : "s") + " in one ascension." + (e ? "<q>" + e + "</q>" : ""), d) || this;
							return g.treshold = f, g.order = 100 + .01 * Game.BankAchievements.length, Game.BankAchievements.push(g), g
						}
						return aa(a, b), a
					}(ya),
					Aa = function (b)
					{
						function a(c, d, e, f)
						{
							void 0 === f && (f = F(10, x(1.2 * Game.BankAchievements.length)));
							var g = b.call(this, c, "Bake <b>" + toFixed(f) + "</b> cookie" + (1 === M(f) ? "" : "s") + " per second." + (e ? "<q>" + e + "</q>" : ""), d) || this;
							return g.treshold = f, g.order = 200 + .01 * Game.CpsAchievements.length, Game.CpsAchievements.push(g), g
						}
						return aa(a, b), a
					}(ya),
					Ba = function (b)
					{
						function a(c, e, f, g)
						{
							var a = this,
								h = "object" == typeof f ? f : Game.Objects[f],
								i = null,
								j = -1;
							if (0 === h.id)
							{
								switch (g)
								{
								case "cursor2":
									i = [0, 6], j = 2;
									break;
								case "cursor50":
									i = [1, 6], j = 50;
									break;
								default:
									if (0 >= Game.Tiers[g].achievUnlock)
									{
										console.warn("Tier has invalid unlock amount");
										break
									}
									j = 1 === g ? 1 : 2 * Game.Tiers[g].achievUnlock;
								}
								Ja.buildingHooks.Cursor.on("buy", function ()
								{
									Game.Objects.Cursor.amount >= j && Game.Win(a.name)
								})
							}
							else j = Game.Tiers[g].achievUnlock;
							return a = b.call(this, c, "Have <b>" + j + "</b> " + (1 === M(j) ? h.single : h.plural) + "." + (e ? "<q>" + e + "</q>" : ""), null !== i && void 0 !== i ? i : Game.GetIcon(h.name, g)) || this, Game.SetTier(h.name, "cursor2" === g || "cursor50" === g ? 1 : g), h.tieredAchievs[g] = a, a.buildingTie = h, a.order = 1e3 + 100 * h.id + a.id / 1e3, a.order -= 75 * H(0, N(h.id - 4, 3)), 8 <= h.id && (a.order -= 75), 0 === h.id && (a.order += 50), a
						}
						return aa(a, b), a
					}(ya),
					Ca = function (b)
					{
						function a(c, e, f, g, a)
						{
							var h = this;
							"string" == typeof e && (e = Game.Objects[e]);
							var j = [e.iconColumn, 21 + f, e instanceof _ ? e.iconLink : void 0],
								k = F(10, 12 + e.id + (null !== a && void 0 !== a ? a : 0) + 7 * (f - 1));
							return h = b.call(this, c, "Make <b>" + toFixed(k) + "</b> cookies just from " + e.plural + "." + (g ? "<q>" + g + "</q>" : ""), j) || this, h.order = 1020 + 100 * e.id + h.id / 1e3, h.order -= 75 * H(0, N(e.id - 4, 3)), 8 <= e.id && (h.order -= 75), 0 === e.id && (h.order += 50), e.productionAchievs.push(
							{
								pow: k,
								achiev: h
							}), h
						}
						return aa(a, b), a
					}(ya),
					Da = function (b)
					{
						function a(c, d, e)
						{
							var f = this;
							"string" == typeof d && (d = Game.Objects[d]);
							var g = [d.iconColumn, 26, d instanceof _ ? d.iconLink : void 0];
							return f = b.call(this, c, "Reach level <b>10</b> " + d.plural + "." + (e ? "<q>" + e + "</q>" : ""), g) || this, f.order = 1020 + 100 * d.id + f.id / 1e3, f.order -= 75 * H(0, N(d.id - 4, 3)), 8 <= d.id && (f.order -= 75), 0 === d.id && (f.order += 50), d.levelAchiev10 = f, f
						}
						return aa(a, b), a
					}(ya),
					Ea = function (b)
					{
						function a(c, d, e)
						{
							var f = this,
								g = parseInt(d.toString());
							return f = b.call(this, c, "Make <b>" + toFixed(F(10, 1 + 2 * g)) + "</b> cookies from clicking." + (e ? "<q>" + e + "</q>" : ""), Game.GetIcon("Mouse", d)) || this, f.pool = "normal", f.tier = d, f.order = 1e3 + f.id / 1e3, Game.Tiers[d].special || isNaN(g) || Ja.on("check", function ()
							{
								Game.handmadeCookies >= F(10, 1 + 2 * g) && Game.Win(f.name)
							}), f
						}
						return aa(a, b), a
					}(ya),
					Fa = function ()
					{
						function a(a, b, c)
						{
							this.name = a, this.desc = b, "string" == typeof c && (c = Game.Objects[c]), this.pic = c instanceof Game.Object ? v([c.iconColumn, 25, c instanceof _ ? c.iconLink : void 0]) : c, Game.dragonAuras[Object.keys(Game.dragonAuras).length] = this, "sync" !== R.dragon.auras[0] && Object.keys(Game.dragonAuras).length >= R.dragon.auras[0] && (Game.dragonAura = R.dragon.auras[0]), "sync" !== R.dragon.auras[1] && Object.keys(Game.dragonAuras).length >= R.dragon.auras[1] && (Game.dragonAura2 = R.dragon.auras[1])
						}
						return a
					}(),
					Ga = function ()
					{
						function b(c, e, f, g, a, h, i)
						{
							void 0 === i && (i = Game.dragonLevels.length - 3), this.buy = a, this.picY = 0;
							var j = Game.dragonLevels[i - 1];
							this.name = null !== c && void 0 !== c ? c : j.name, this.action = e, this.costStr = "string" == typeof f ? function ()
							{
								return f
							} : f, this.cost = g, h ? (this.pic = h[0], this.picY = h[1], 0 !== this.picY && console.warn("For now, all dragon levels must not use pic Y, sorry."), this.picLink = h[2]) : (this.pic = j.pic, j instanceof b && (this.picY = j.picY, this.picLink = j.picLink)), Game.dragonLevels.splice(i, 0, this), "sync" !== R.dragon.level && Game.dragonLevels.length >= R.dragon.level && (Game.dragonLevel = R.dragon.level)
						}
						return b
					}(),
					Ha = function (b)
					{
						function a(c, d, e)
						{
							var f = this;
							return "string" == typeof e && (e = Game.Objects[e]), f = b.call(this, null, "Train " + c + "<br/><small>Aura : " + d + "</small>", "100 " + e.plural, function ()
							{
								return 100 <= e.amount
							}, function ()
							{
								return e.sacrifice(100)
							}) || this, f
						}
						return aa(a, b), a
					}(Ga),
					Ia = function ()
					{
						return function (a, b, c, e)
						{
							if (void 0 === e && (e = !1), this.name = a, this.pic = c, this.special = e, !c.endsWith(".png")) throw new Error("Can't create milk with the milk URL \"" + c + "\", the URL must end with .png!");
							e || (this.name = "Rank " + d(Game.Milks.length + 1) + " - " + a), this.pic = c.substr(0, c.length - 4), v(b), this.icon = [b[0], b[1]], this.iconLink = b[2], e ? Game.MilksByChoice[Object.keys(Game.MilksByChoice).length] = this : Game.Milks.push(this)
						}
					}(),
					Ja = {
						hooks: null,
						on: null,
						hiddenMilkMult: 1,
						iconLink: "",
						buildingLink: "",
						cookieOrder: 10020,
						buildingHooks: V,
						buildingHooksById: [],
						hookAllBuildings: C,
						customBuildings: X,
						customUpgrades: ia,
						customTiers: va,
						save: R,
						onLoad: [],
						Building: _,
						Upgrade: ja,
						TieredUpgrade: la,
						Tier: wa,
						HeavenlyUpgrade: ka,
						GrandmaSynergy: ma,
						SynergyUpgrade: na,
						CursorUpgrade: pa,
						KittenUpgrade: sa,
						MouseUpgrade: ta,
						CookieUpgrade: ua,
						Achievement: ya,
						CpsAchievement: Aa,
						BankAchievement: za,
						TieredAchievement: Ba,
						ProductionAchievement: Ca,
						Level10Achievement: Da,
						MouseAchievement: Ea,
						customAchievements: xa,
						DragonAura: Fa,
						DragonLevel: Ga,
						DragonAuraLevel: Ha,
						Milk: Ia,
						injectCode: ea,
						injectCodes: o,
						DEFAULT_ONBUY: function ()
						{
							Game.UnlockTiered(this), this.amount >= Game.SpecialGrandmaUnlock && 0 < Game.Objects.Grandma.amount && this.grandma && Game.Unlock(this.grandma.name)
						},
						DEFAULT_CPS: function (a)
						{
							return Game.GetTieredCpsMult(a) * Game.magicCpS(a.name) * a.baseCps
						},
						icons:
						{
							relinkColumn: function (b, e, a, f)
							{
								return void 0 === f && (f = !1), ba(this, void 0, void 0, function ()
								{
									var g, h, h, j, k;
									return ca(this, function (c)
									{
										switch (c.label)
										{
										case 0:
											for (h in void 0 === a && (!T[b] && (T[b] = 0), a = T[b]++), g = {}, J) g[h] = [a, J[h][1]];
											for (h in Game.Tiers) g[Game.Tiers[h].name.toLowerCase()] = g[h.toString()] = [a, Game.Tiers[h].iconRow];
											return j = w, k = [b], [4, u(f ? y(b) : b, g, e, [48, 48], [48 * (a + 1), 48 * (Object.values(g).reduce(function (a, b)
											{
												return H(a, b[1])
											}, -Infinity) + 1)], function (a)
											{
												return new Promise(function (c)
												{
													if (y(b) !== b)
													{
														var d = new Image;
														d.addEventListener("load", function ()
														{
															a.drawImage(d, 0, 0), c()
														}), d.src = y(b), d.crossOrigin = "Anonymous"
													}
													else c()
												})
											})];
										case 1:
											return j.apply(void 0, k.concat([c.sent()])), [2];
										}
									})
								})
							},
							relinkRow: function (b, e, a, f)
							{
								return void 0 === f && (f = !1), ba(this, void 0, void 0, function ()
								{
									var g, h, h, j, k;
									return ca(this, function (c)
									{
										switch (c.label)
										{
										case 0:
											for (h in void 0 === a && (!z[b] && (z[b] = 0), a = z[b]++), g = {}, U) g[h] = [U[h][0], a];
											for (h in Game.ObjectsById) g[Game.ObjectsById[h].single.toLowerCase()] = g[h] = [Game.ObjectsById[h].iconColumn, a];
											return j = w, k = [b], [4, u(f ? y(b) : b, g, e, [48, 48], [48 * (Object.values(g).reduce(function (a, b)
											{
												return H(a, b[0])
											}, -Infinity) + 1), 48 * (a + 1)], function (a)
											{
												return new Promise(function (c)
												{
													if (y(b) !== b)
													{
														var d = new Image;
														d.addEventListener("load", function ()
														{
															a.drawImage(d, 0, 0), c()
														}), d.src = y(b), d.crossOrigin = "Anonymous"
													}
													else c()
												})
											})];
										case 1:
											return j.apply(void 0, k.concat([c.sent()])), [2];
										}
									})
								})
							},
							patchIconsheet: function (j, e, i)
							{
								var q;
								return void 0 === i && (i = !0), ba(this, void 0, void 0, function ()
								{
									var a, r, x, z, B, D, E, F, G, H, I, J, K, M, N;
									return ca(this, function (b)
									{
										switch (b.label)
										{
										case 0:
											return a = document.createElement("canvas").getContext("2d"), [4, A(i ? y(j) : j)];
										case 1:
											for (r = b.sent(), x = [r.width, r.height], z = 0, B = e; z < B.length; z++) D = B[z], 48 * D[0][0] > x[0] && (x[0] = 48 * D[0][0]), 48 * D[0][1] > x[1] && (x[1] = 48 * D[0][1]);
											a.canvas.width = x[0], a.canvas.height = x[1], a.drawImage(r, 0, 0), E = {}, F = 0, G = e, b.label = 2;
										case 2:
											return F < G.length ? (H = G[F], I = y((null !== (q = H[1][2]) && void 0 !== q ? q : Ja.iconLink) || "img/icons.png"), !!E[I]) ? [3, 4] : (J = E, K = I, [4, A(I)]) : [3, 6];
										case 3:
											J[K] = b.sent(), b.label = 4;
										case 4:
											a.clearRect(48 * H[0][0], 48 * H[0][1], 48, 48), a.drawImage(E[I], 48 * H[1][0], 48 * H[1][1], 48, 48, 48 * H[0][0], 48 * H[0][1], 48, 48), b.label = 5;
										case 5:
											return F++, [3, 2];
										case 6:
											return M = w, N = [j], [4, L(a)];
										case 7:
											return M.apply(void 0, N.concat([b.sent()])), [2];
										}
									})
								})
							},
							extraColumnIcons: J,
							extraRowIcons: U,
							alias: w,
							aliases: S
						}
					};
				window.Cppkies ? E = window.Cppkies : (E = Ja, window.Cppkies = E, function ()
				{
					return new Promise(function (a)
					{
						var b = new O,
							c = [new K("customMenu", function ()
							{
								Game.UpdateMenu = ea(Game.UpdateMenu, null, "\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tswitch (Game.onMenu) {\n\t\t\t\t\t\tcase \"prefs\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"optionsMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t\tcase \"stats\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"statsMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t\tcase \"log\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"logMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t}\n\t\t\t\t\tCppkies.hooks.emit(\"menu\")\n\t\t\t\t\t", "after")
							}), new K("preSave", function ()
							{
								Game.WriteSave = ea(Game.WriteSave, null, "\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tCppkies.hooks.emit(\"preSave\")\n\t\t\t\t\t", "before")
							}), new K("postSave", function ()
							{
								Game.WriteSave = ea(Game.WriteSave, "if (type==2 || type==3)", "\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tCppkies.hooks.emit(\"postSave\")\n\t\t\t\t\t", "before")
							}),new K("getIcon", function ()
							{
								Game.GetIcon = o(Game.GetIcon, [
									["return [col,Game.Tiers[tier].iconRow];", "// Cppkies Injection\n\t\t\t\t\treturn Cppkies.hooks.emit(\"getIcon\", { icon: [col, Game.Tiers[tier].iconRow], tier: tier, type: type }).icon", "replace"],
									["col=18;", "else if (type === \"Mouse\") col = 11;", "after"]
								])
							}), new K("buildStore", function ()
							{
								Game.BuildStore = ea(Game.BuildStore, null, ";\nCppkies.hooks.emit(\"buildStore\")", "after")
							}), new K("grandmaPic", function ()
							{
								Game.Objects.Grandma.art.pic = ea(Game.Objects.Grandma.art.pic, "return choose(list)+'.png'", "// Cppkies injection\n\t\t\t\t\tlist = Cppkies.hooks.emit(\"grandmaPic\", list)\n\t\t\t\t\t", "before")
							}), new K("cps", function ()
							{
								Game.CalculateGains = o(Game.CalculateGains, [
									["var rawCookiesPs=Game.cookiesPs*mult;", "// Cppkies injection\n\t\t\t\t\tGame.cookiesPs = Cppkies.hooks.emit(\"rawCps\", Game.cookiesPs);\n\t\t\t\t\tmult = Cppkies.hooks.emit(\"rawCpsMult\", mult);\n", "before"],
									["Game.cookiesPs=Game.runModHookOnValue('cps',Game.cookiesPs);", "// Cppkies injection\n\t\t\t\t\t\tmult = Cppkies.hooks.emit(\"cpsMult\", mult);\n", "before"]
								]), Game.registerHook("cps", function (a)
								{
									return b.emit("cps", a)
								})
							}), new K("cursorFingerMult", function ()
							{
								Game.Objects.Cursor.cps = ea(Game.Objects.Cursor.cps, "var mult=1;", "// Cppkies injection\nadd = Cppkies.hooks.emit(\"cursorFingerMult\", add);\n", "before")
							}), new K("cpc", function ()
							{
								Game.mouseCps = o(Game.mouseCps, [
									["var num=0;", "// Cppkies injection\n\t\t\t\t\t\tadd = Cppkies.hooks.emit(\"cursorFingerMult\", add);\n", "before"],
									["var out", "// Cppkies injection\n\t\t\t\t\t\tadd = Cppkies.hooks.emit(\"cpcAdd\", add);\n", "before"]
								]), Game.registerHook("cookiesPerClick", function (a)
								{
									return b.emit("cpc", a)
								})
							}), new K("buildingCps", function ()
							{
								Game.CalculateGains = ea(Game.CalculateGains, "me.storedTotalCps=me.amount*me.storedCps;", "// Cppkies injection (internal, do not use)\nme.storedCps = Cppkies.hooks.emit(\"buildingCps\", { building: i, cps: me.storedCps }).cps;\n", "before")
							}), new K("logic", function ()
							{
								Game.registerHook("logic", function ()
								{
									return b.emit("logic")
								})
							}), new K("draw", function ()
							{
								Game.registerHook("draw", function ()
								{
									return b.emit("draw")
								})
							}), new K("check", function ()
							{
								Game.registerHook("check", function ()
								{
									return b.emit("check")
								})
							}), new K("ticker", function ()
							{
								Game.getNewTicker = ea(Game.getNewTicker, "Game.TickerAge=Game.fps*10;", "// Cppkies injection\nlist = Cppkies.hooks.emit(\"ticker\", list);\n", "before")
							}), new K("specialPic", function ()
							{
								Game.DrawSpecial = ea(Game.DrawSpecial, "if (hovered || selected)", "// Cppkies injection\nconst override = Cppkies.hooks.emit(\"specialPic\", {tab: Game.specialTabs[i], frame: frame, pic: pic})\npic = override.pic\nframe = override.frame;\n", "before"), Game.ToggleSpecialMenu = ea(Game.ToggleSpecialMenu, "else {pic='dragon.png?v='+Game.version;frame=4;}", "// Cppkies injection\nconst override = Cppkies.hooks.emit(\"specialPic\", {tab: Game.specialTab, frame: frame, pic: pic})\npic = override.pic\nframe = override.frame;\n", "after")
							})];
						c.forEach(function (a)
						{
							var b;
							null === (b = a.func) || void 0 === b ? void 0 : b.call(a)
						}), Game.Loader.Load = ea(Game.Loader.Load, "img.src=this.domain", "\n\t\t\t// Cppkies injection\n\t\t\timg.src = (assets[i].indexOf('http') !== -1 ? \"\" : this.domain)\n", "replace"), Game.UpdateMenu = o(Game.UpdateMenu, [
							["url(img/'+milk.pic+'.png)", "url(' + (milk.pic.indexOf('http') >= 0 ? milk.pic : 'img/'+milk.pic) + '.png)", "replace"],
							["img/icons.png?v='+Game.version+'", "' + (Game.Milks[i].iconLink ? Game.Milks[i].iconLink : 'img/icons.png?v='+Game.version) + '", "replace"]
						]), Game.ToggleSpecialMenu = o(Game.ToggleSpecialMenu, [
							[">=5", ">=Game.dragonLevels.findIndex(val => val.name === \"Krumblor, cookie hatchling\")", "replace"],
							[">=25", ">=Game.dragonLevels.findIndex(val => val.action === \"Train secondary aura<br><small>Lets you use two dragon auras simultaneously</small>\") + 1", "replace"]
						]), Game.Objects.Cursor.buyFunction = ea(Game.Objects.Cursor.buyFunction, "Game.Unlock('Octillion fingers');", "\n \t\t\t// Cppkies injection\n\t\t\tfor(const i in this.tieredUpgrades) {\n\t\t\t\tif (isNaN(parseInt(i))) continue\n\t\t\t\tif (this.amount >= Game.Tiers[this.tieredUpgrades[i].tier].unlock - 50) this.tieredUpgrades[i].unlock()\n\t\t\t}\n", "after"), Game.Object = ea(Game.Object, "Game.ObjectsN++", "\n// Cppkies injection\nCppkies.hookAllBuildings();\n", "after"), Game.CalculateGains = ea(Game.CalculateGains, "var catMult=1;", "// Cppkies injection\n\t\t\tCppkies.hiddenMilkMult = milkMult;\n", "before"), a(b)
					})
				}().then(function (a)
				{
					E.hooks = a, E.on = a.on.bind(a), Game.Notify("Cookieclysm loaded", "", [23, 30], 4);
					var b = document.createElement("div");
					b.textContent = "Cppkies!", document.querySelector("#topBar").insertBefore(b, document.querySelector("#topBar").children[1]), Game.modSaveData.cppkies || (Game.modSaveData.cppkies = "{}"), Game.registerMod("Cookieclysm",
					{
						save: j,
						load: t
					}), Game.Win("Third-party"), C(), Ja.onLoad.forEach(function (a)
					{
						return a()
					}), Ja.onLoad = new Proxy(Ja.onLoad,
					{
						set: function (a, b, c)
						{
							return "length" !== b && c(), !0
						}
					}), window.CPPKIES_ONLOAD || (window.CPPKIES_ONLOAD = []), window.CPPKIES_ONLOAD.forEach(function (a)
					{
						return a()
					}), window.CPPKIES_ONLOAD = new Proxy(Ja.onLoad,
					{
						set: function (a, b, c)
						{
							return "length" !== b && c(), !0
						}
					}), q()
				}));
				var Ka = E;
				return Ka
			})
		}),
		e = "https://raw.githubusercontent.com/yeetdragon24/cookieclysm/master/img";
	d.onLoad.push(function ()
	{
		return a(void 0, void 0, void 0, function ()
		{
			var a, c, f, c;
			return b(this, function (b)
			{
				switch (b.label)
				{
				case 0:
					return [4, d.icons.relinkColumn("https://raw.githubusercontent.com/Cppkies-Team/examples/master/static/buildingIcons.png", [
						["1", "2", "3", "4", "5", "6", "7", "8"],
						["9", "10", "11", "12", "13", "fortune", "synergy2", "synergy1"],
						["3d", "krumblor", "milestone1", "milestone2", "milestone3", "level1", "level2"]
					])];
				case 1:
					for (c in b.sent(), d.buildingLink = "data:image/jpeg;base64,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", d.iconLink = "file:///C:/Users/mehta_pl1yxs0/Downloads/cookieclysm%20assets/convertericon.png", new d.Building("Converter", "converter|converters|converted|[X] more efficient mass converter|[X] more efficient mass converters", "Now you can convert living mass into cookies by harvesting the energy from the very bonds that connect the atoms", [0, 33], [0, 0],
						{
							bg: "https://apps.read-a-thon.com/signup/resources/images/signup-logo.png",
							pic: "https://raw.githubusercontent.com/yeetdragon24/files/main/other/img/stonks.png",
							yV: 0,
							xV: 20
						}, d.DEFAULT_CPS, d.DEFAULT_ONBUY,
						{
							name: "Volunteer jobs",
							desc: "Now volunteers can help with the production. Everyone wants to be a part of your cookie empire!",
							icon: [0, 0]
						}, ["Brainstorm", "Brain fart"]), new d.GrandmaSynergy("Elder brains", "A skinless grandma to envision more cookies.", "Converter", e + "/buildingGrandma.png"), a = [
						{
							name: "Alien volunteers",
							desc: "I hope they know what they're volunteering for."
						},
						{
							name: "Memory wipe",
							desc: "A highly efficient method of removing memories of past lives, leaving more room in there for cookies!"
						},
						{
							name: "Grain matter",
							desc: "This simple pun becomes a lot more horrifying when you consider the implications of planting seeds in the little brain folds."
						},
						{
							name: "Confidence",
							desc: "Your scientists have managed to completely replace a person’s nervous system with a confident one instead!"
						},
						{
							name: "Psychedelic brine",
							desc: "Introducing psychedelic substances to the tanks often results in terrifying yet delicious outcomes."
						},
						{
							name: "School funding",
							desc: "Pumping money into the education system seems to result in more efficient brains by the time you get around to borrowing them. Who knew!"
						},
						{
							name: "Occhipital lobe",
							desc: "A whole new lobe made out of leftover grey matter, flour, and chocolate chips."
						},
						{
							name: "Brains that won't die",
							desc: "This handy-dandy new advancement lets you handwave the certain pesky inconveniences of physiological upkeep."
						},
						{
							name: "Philoophical discourse",
							desc: "I bake, therefore I am."
						},
						{
							name: "Subconsciousness",
							desc: "Turns out they’ve been fully conscious all this time! ...whoops..."
						},
						{
							name: "The grand simulation",
							desc: "A giant simulated multiverse inside of which your Converters believe themselves to live, work, and bake."
						}], a) new d.TieredUpgrade(a[c].name, a[c].desc, "Converter", parseInt(c) + 1);
					for (c in new d.SynergyUpgrade("Boltzmann generators", "With a few simple modifications, Chancemakers can go from creating humble cookies, to mighty brains!", "Converter", "Chancemaker", "synergy1"), new d.SynergyUpgrade("Neural network", "A marvellous form of machine learning, in which an actual human brain is slapped on a keyboard until something interesting happens.", "Converter", "Javascript console", "synergy2"), f = [
						{
							name: "Mind over matter"
						},
						{
							name: "Right brain? Wrong brain."
						},
						{
							name: "Ethics are a scam"
						},
						{
							name: "Brainiac!",
							desc: "She’s a brainiac, brainiac on the floor! And she’s thinking like she’s never thunk before."
						},
						{
							name: "Hyperfocus"
						},
						{
							name: "Keeping In Mind"
						},
						{
							name: "Sugar Lobes"
						},
						{
							name: "I am Very Smart",
							desc: "I have a 100% IQ, thank you very much"
						},
						{
							name: "The Deepest Recesses"
						},
						{
							name: "Outside In"
						},
						{
							name: "Braindeath"
						}], f) new d.TieredAchievement(f[c].name, f[c].desc, "Converter", parseInt(c) + 1);
					return new d.ProductionAchievement("Passing Thought", "Converter", 1), new d.ProductionAchievement("Transhumanism", "Converter", 2), new d.ProductionAchievement("A World of Pure Imagination", "Converter", 3), new d.Level10Achievement("It’s Big Brain Time", "Converter"), new d.DragonAura("Dragon intelligence", "Research is <b>2</b> times faster.", "Converter"), new d.DragonAuraLevel("Dragon intelligence", "Research is 2 times faster.", "Converter"), Game.SetResearch = d.injectCode(Game.SetResearch, "Game.nextResearch=Game.Upgrades[what].id;", "Game.researchT /= Game.auraMult(\"Dragon intelligence\") + 1;\n", "before"), [2];
				}
			})
		})
	})
});
Game.registerHook('cookiesPerClick', function ()
{
	return (Game.cookieClicks / 1000) * (Game.Has('Reinforced index finger') + 1) * (Game.Has('Carpal tunnel prevention cream') + 1) * (Game.Has('Ambidextrous') + 1)
});
Game.registerHook('cps', function (cps)
{
	return cps / ((Game.cookieClicks + 1) / 100)
});
