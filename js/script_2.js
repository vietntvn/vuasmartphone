/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
	var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.1", m = function (a, b) { return new m.fn.init(a, b) }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) { return b.toUpperCase() }; m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return m.each(this, a, b) }, map: function (a) { return this.pushStack(m.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === m.type(a) }, isArray: Array.isArray || function (a) { return "array" === m.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { return !m.isArray(a) && a - parseFloat(a) >= 0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function (a) { var b; if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1; try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (k.ownLast) for (b in a) return j.call(a, b); for (b in a); return void 0 === b || j.call(a, b) }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (b) { b && m.trim(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(o, "ms-").replace(p, q) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = r(a); if (c) { if (g) { for (; f > e; e++)if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(n, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { var d; if (b) { if (g) return g.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a) return c } return -1 }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = r(a), i = []; if (h) for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || m.guid++, e) : void 0 }, now: function () { return +new Date }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function r(a) { var b = a.length, c = m.type(a); return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var s = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) { return a === b && (l = !0), 0 }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++)if (this[b] === a) return b; return -1 }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = { ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }; try { I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType } catch (eb) { I = { apply: F.length ? function (a, b) { H.apply(a, J.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function fb(a, b, d, e) { var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d; if (1 !== (k = b.nodeType) && 9 !== k) return []; if (p && !e) { if (f = _.exec(a)) if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d } if (c.qsa && (!q || !q.test(a))) { if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) { o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; while (l--) o[l] = s + qb(o[l]); w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",") } if (x) try { return I.apply(d, w.querySelectorAll(x)), d } catch (y) { } finally { r || b.removeAttribute("id") } } } return i(a.replace(R, "$1"), b, d, e) } function gb() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function hb(a) { return a[u] = !0, a } function ib(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function jb(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function kb(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function lb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function mb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function nb(a) { return hb(function (b) { return b = +b, hb(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function ob(a) { return a && typeof a.getElementsByTagName !== C && a } c = fb.support = {}, f = fb.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fb.setDocument = function (a) { var b, e = a ? a.ownerDocument || a : v, g = e.defaultView; return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () { m() }, !1) : g.attachEvent && g.attachEvent("onunload", function () { m() })), c.attributes = ib(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ib(function (a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = ib(function (a) { return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if (typeof b.getElementById !== C && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(cb, db); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(cb, db); return function (a) { var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) { a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked") }), ib(function (a) { var b = e.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b]; if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0; if (f === g) return kb(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) i.unshift(c); while (h[d] === i[d]) d++; return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0 }, e) : n }, fb.matches = function (a, b) { return fb(a, null, null, b) }, fb.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return fb(b, n, null, [a]).length > 0 }, fb.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fb.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fb.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fb.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fb.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = fb.selectors = { cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(cb, db).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = fb.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break } } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: hb(function (a) { var b = [], c = [], d = h(a.replace(R, "$1")); return d[u] ? hb(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() } }), has: hb(function (a) { return function (b) { return fb(a, b).length > 0 } }), contains: hb(function (a) { return function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: hb(function (a) { return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return Z.test(a.nodeName) }, input: function (a) { return Y.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: nb(function () { return [0] }), last: nb(function (a, b) { return [b - 1] }), eq: nb(function (a, b, c) { return [0 > c ? c + b : c] }), even: nb(function (a, b) { for (var c = 0; b > c; c += 2)a.push(c); return a }), odd: nb(function (a, b) { for (var c = 1; b > c; c += 2)a.push(c); return a }), lt: nb(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d); return a }), gt: nb(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = lb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = mb(b); function pb() { } pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fb.error(a) : z(a, i).slice(0) }; function qb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value; return d } function rb(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [w, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function sb(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function tb(a, b, c) { for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c); return c } function ub(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function vb(a, b, c, d, e, f) { return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ub(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r) }) } function wb(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) { return a === b }, h, !0), l = rb(function (a) { return K.call(b, a) > -1 }, h, !0), m = [function (a, c, d) { return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > i; i++)if (c = d.relative[a[i].type]) m = [rb(sb(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++)if (d.relative[a[e].type]) break; return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a)) } m.push(c) } return sb(m) } function xb(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length; for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) { if (e && l) { m = 0; while (o = a[m++]) if (o(l, g, h)) { i.push(l); break } k && (w = v) } c && ((l = !o && l) && p--, f && r.push(l)) } if (p += q, c && q !== p) { m = 0; while (o = b[m++]) o(r, s, g, h); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = G.call(i)); s = ub(s) } I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i) } return k && (w = v, j = t), r }; return c ? hb(f) : f } return h = fb.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, xb(e, d)), f.selector = a } return f }, i = fb.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) } i = X.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ib(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || jb("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ib(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || jb("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ib(function (a) { return null == a.getAttribute("disabled") }) || jb(L, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fb }(a); m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains; var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/; function w(a, b, c) { if (m.isFunction(b)) return m.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return m.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (v.test(b)) return m.filter(b, a, c); b = m.filter(b, a) } return m.grep(a, function (a) { return m.inArray(a, b) >= 0 !== c }) } m.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) { return 1 === a.nodeType })) }, m.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(m(a).filter(function () { for (b = 0; e > b; b++)if (m.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++)m.find(a, d[b], c); return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function (a) { return this.pushStack(w(this, a || [], !1)) }, not: function (a) { return this.pushStack(w(this, a || [], !0)) }, is: function (a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length } }); var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } if (d = y.getElementById(c[2]), d && d.parentNode) { if (d.id !== c[2]) return x.find(a); this.length = 1, this[0] = d } return this.context = y, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this)) }; A.prototype = m.fn, x = m(y); var B = /^(?:parents|prev(?:Until|All))/, C = { children: !0, contents: !0, next: !0, prev: !0 }; m.extend({ dir: function (a, b, c) { var d = [], e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c } }), m.fn.extend({ has: function (a) { var b, c = m(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++)if (m.contains(this, c[b])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? m.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function D(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } m.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return m.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return m.dir(a, "parentNode", c) }, next: function (a) { return D(a, "nextSibling") }, prev: function (a) { return D(a, "previousSibling") }, nextAll: function (a) { return m.dir(a, "nextSibling") }, prevAll: function (a) { return m.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return m.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return m.dir(a, "previousSibling", c) }, siblings: function (a) { return m.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return m.sibling(a.firstChild) }, contents: function (a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes) } }, function (a, b) { m.fn[a] = function (c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e) } }); var E = /\S+/g, F = {}; function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function (a, c) { b[c] = !0 }), b } m.Callbacks = function (a) { a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) }, k = { add: function () { if (h) { var d = h.length; !function f(b) { m.each(b, function (b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function () { return h && m.each(arguments, function (a, c) { var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function (a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], e = 0, this }, disable: function () { return h = i = c = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, c || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!d } }; return k }, m.extend({ Deferred: function (a) { var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return m.Deferred(function (c) { m.each(b, function (b, f) { var g = m.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? m.extend(a, d) : d } }, e = {}; return d.pipe = d.then, m.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var H; m.fn.ready = function (a) { return m.ready.promise().done(a), this }, m.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? m.readyWait++ : m.ready(!0) }, ready: function (a) { if (a === !0 ? !--m.readyWait : !m.isReady) { if (!y.body) return setTimeout(m.ready); m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready"))) } } }); function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) } function J() { (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready()) } m.ready.promise = function (b) { if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else { y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J); var c = !1; try { c = null == a.frameElement && y.documentElement } catch (d) { } c && c.doScroll && !function e() { if (!m.isReady) { try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) } I(), m.ready() } }() } return H.promise(b) }; var K = "undefined", L; for (L in m(k)) break; k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () { var a, b, c, d; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d)) }), function () { var a = y.createElement("div"); if (null == k.deleteExpando) { k.deleteExpando = !0; try { delete a.test } catch (b) { k.deleteExpando = !1 } } a = null }(), m.acceptData = function (a) { var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b }; var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g; function O(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(N, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c } catch (e) { } m.data(a, b, c) } else c = void 0 } return c } function P(a) { var b; for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1; return !0 } function Q(a, b, d, e) {
		if (m.acceptData(a)) {
			var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
		}
	} function R(a, b, c) { if (m.acceptData(a)) { var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !m.isEmptyObject(d)) return } (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } } m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a) }, data: function (a, b, c) { return Q(a, b, c) }, removeData: function (a, b) { return R(a, b) }, _data: function (a, b, c) { return Q(a, b, c, !0) }, _removeData: function (a, b) { return R(a, b, !0) } }), m.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d]))); m._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { m.data(this, a) }) : arguments.length > 1 ? this.each(function () { m.data(this, a, b) }) : f ? O(f, a, m.data(f, a)) : void 0 }, removeData: function (a) { return this.each(function () { m.removeData(this, a) }) } }), m.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () { m.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () { m._removeData(a, b + "queue"), m._removeData(a, c) }) }) } }), m.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = m.queue(this, a, b); m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { m.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a) }, V = m.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === m.type(c)) { e = !0; for (h in c) m.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(m(a), c) })), b)) for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, W = /^(?:checkbox|radio)$/i; !function () { var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment(); if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () { k.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == k.deleteExpando) { k.deleteExpando = !0; try { delete b.test } catch (d) { k.deleteExpando = !1 } } }(), function () { var b, c, d = y.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1); d = null }(); var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/; function ab() { return !0 } function bb() { return !1 } function cb() { try { return y.activeElement } catch (a) { } } m.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(E) || [""], h = b.length; while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0); a = null } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a); if (r && (k = r.events)) { b = (b || "").match(E) || [""], j = b.length; while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length; while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g)); i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]) } else for (o in k) m.event.remove(a, o + b[j], c, d, !0); m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) { if (!e && !k.noBubble && !m.isWindow(d)) { for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h; l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a) } n = 0; while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault()); if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) { l = d[g], l && (d[g] = null), m.event.triggered = p; try { d[p]() } catch (r) { } m.event.triggered = void 0, l && (d[g] = l) } return b.result } }, dispatch: function (a) { a = m.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d); e.length && g.push({ elem: i, handlers: e }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function (a) { if (a[m.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== cb() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === cb() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (a) { return m.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, m.removeEvent = y.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { var d = "on" + b; a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c)) }, m.Event = function (a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b) }, m.Event.prototype = { isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { m.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), k.submitBubbles || (m.event.special.submit = { setup: function () { return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0; c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) { a._submit_bubble = !0 }), m._data(c, "submitBubbles", !0)) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit") } }), k.changeBubbles || (m.event.special.change = { setup: function () { return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0) })), !1) : void m.event.add(this, "beforeactivate._change", function (a) { var b = a.target; X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0) }), m._data(b, "changeBubbles", !0)) }) }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return m.event.remove(this, "._change"), !X.test(this.nodeName) } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { m.event.simulate(b, a.target, m.event.fix(a), !0) }; m.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = m._data(d, b); e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = m._data(d, b) - 1; e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b)) } } }), m.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb; else if (!d) return this; return 1 === e && (g = d, d = function (a) { return m().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () { m.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () { m.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { m.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0 } }); function db(a) { var b = eb.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, sb = db(y), tb = sb.appendChild(y.createElement("div")); rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td; function ub(a, b) { var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0; if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b)); return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f } function vb(a) { W.test(a.type) && (a.defaultChecked = a.checked) } function wb(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function xb(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a } function yb(a) { var b = pb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function zb(a, b) { for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval")) } function Ab(a, b) { if (1 === b.nodeType && m.hasData(a)) { var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h) for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d]) } g.data && (g.data = m.extend({}, g.data)) } } function Bb(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) { e = m._data(b); for (d in e.events) m.removeEvent(b, d, e.handle); b.removeAttribute(m.expando) } "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } } m.extend({ clone: function (a, b, c) { var d, e, f, g, h, i = m.contains(a.ownerDocument, a); if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)d[g] && Bb(e, d[g]); if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)Ab(e, d[g]); else Ab(a, f); return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f); else if (lb.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0]; while (e--) h = h.lastChild; if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) { f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) } m.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild); h = o.lastChild } else p.push(b.createTextNode(f)); h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0; while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) { e = 0; while (f = h[e++]) ob.test(f.type || "") && c.push(f) } return h = null, o }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) { if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle); j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), m.fn.extend({ text: function (a) { return V(this, function (a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wb(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wb(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && m.cleanData(ub(a, !1)); while (a.firstChild) a.removeChild(a.firstChild); a.options && m.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return m.clone(this, a, b) }) }, html: function (a) { return V(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0; if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(ib, "<$1></$2>"); try { for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p); if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) { var d = n.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) { for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j); if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, ""))); i = c = null } return this } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { m.fn[a] = function (a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } }); var Cb, Db = {}; function Eb(b, c) { var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display"); return e.detach(), f } function Fb(a) { var b = y, c = Db[a]; return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c } !function () { var a; k.shrinkWrapBlocks = function () { if (null != a) return a; a = !1; var b, c, d; return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0 } }(); var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Ib = function (a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Jb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : y.documentElement.currentStyle && (Ib = function (a) { return a.currentStyle }, Jb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }); function Lb(a, b) { return { get: function () { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d, e, f, g, h; if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) { c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function () { return null == g && i(), g }, boxSizingReliable: function () { return null == f && i(), f }, pixelPosition: function () { return null == e && i(), e }, reliableMarginRight: function () { return null == h && i(), h } }); function i() { var b, c, d, i; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d)) } } }(), m.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = { position: "absolute", visibility: "hidden", display: "block" }, Sb = { letterSpacing: "0", fontWeight: "400" }, Tb = ["Webkit", "O", "Moz", "ms"]; function Ub(a, b) { if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length; while (e--) if (b = Tb[e] + c, b in a) return b; return d } function Vb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } function Wb(a, b, c) { var d = Pb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Xb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g } function Yb(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e; d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px" } m.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Jb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = m.camelCase(b), i = a.style; if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) { } } }, css: function (a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f } }), m.each(["height", "width"], function (a, b) { m.cssHooks[b] = { get: function (a, c, d) { return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () { return Yb(a, b, d) }) : Yb(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && Ib(a); return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0) } } }), k.opacity || (m.cssHooks.opacity = { get: function (a, b) { return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e) } }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) { return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) { m.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb) }), m.fn.extend({ css: function (a, b) { return V(this, function (a, b, c) { var d, e, f = {}, g = 0; if (m.isArray(b)) { for (d = Ib(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d); return f } return void 0 !== c ? m.style(a, b, c) : m.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return Vb(this, !0) }, hide: function () { return Vb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { U(this) ? m(this).show() : m(this).hide() }) } }); function Zb(a, b, c, d, e) { return new Zb.prototype.init(a, b, c, d, e) } m.Tween = Zb, Zb.prototype = {
		constructor: Zb, init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
		}, cur: function () { var a = Zb.propHooks[this.prop]; return a && a.get ? a.get(this) : Zb.propHooks._default.get(this) }, run: function (a) { var b, c = Zb.propHooks[this.prop]; return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this }
	}, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, m.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, m.fx = Zb.prototype.init, m.fx.step = {}; var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function fc() { return setTimeout(function () { $b = void 0 }), $b = m.now() } function gc(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d } function hc(a, b, c) { for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a)) return d } function ic(a, b, c) { var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow"); c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, n.always(function () { n.always(function () { h.unqueued--, m.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], ac.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue; q = !0 } o[d] = r && r[d] || m.style(a, d) } else j = void 0; if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j); else { r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () { m(a).hide() }), n.done(function () { var b; m._removeData(a, "fxshow"); for (b in o) m.style(a, b, o[b]) }); for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function jc(a, b) { var c, d, e, f, g; for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function kc(a, b, c) { var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++)j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (jc(k, j.opts.specialEasing); g > f; f++)if (d = dc[f].call(j, a, k, j.opts)) return d; return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } m.Animation = m.extend(kc, { tweener: function (a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++)c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b) }, prefilter: function (a, b) { b ? dc.unshift(a) : dc.push(a) } }), m.speed = function (a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue) }, d }, m.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () { var b = kc(this, m.extend({}, a), f); (e || m._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && m.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0; for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), m.each(["toggle", "show", "hide"], function (a, b) { var c = m.fn[b]; m.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e) } }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { m.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), m.timers = [], m.fx.tick = function () { var a, b = m.timers, c = 0; for ($b = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || m.fx.stop(), $b = void 0 }, m.fx.timer = function (a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function () { _b || (_b = setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function () { clearInterval(_b), _b = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) { return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a, b, c, d, e; b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value }(); var lc = /\r/g; m.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = m.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) { return null == a ? "" : a + "" })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c) } } }), m.extend({ valHooks: { option: { get: function (a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)) } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) { if (b = m(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = m.makeArray(b), g = e.length; while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1; return c || (a.selectedIndex = -1), e } } } }), m.each(["radio", "checkbox"], function () { m.valHooks[this] = { set: function (a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0 } }, k.checkOn || (m.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input; m.fn.extend({ attr: function (a, b) { return V(this, m.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { m.removeAttr(this, a) }) } }), m.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(E); if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d) }, attrHooks: { type: { set: function (a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), nc = { set: function (a, b, c) { return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = oc[b] || m.find.attr; oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) { var e, f; return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e } : function (a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null } }), rc && qc || (m.attrHooks.value = { set: function (a, b, c) { return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c) } }), qc || (mc = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, oc.id = oc.name = oc.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, m.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: mc.set }, m.attrHooks.contenteditable = { set: function (a, b, c) { mc.set(a, "" === b ? !1 : b, c) } }, m.each(["width", "height"], function (a, b) { m.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), k.style || (m.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i; m.fn.extend({ prop: function (a, b) { return V(this, m.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return a = m.propFix[a] || a, this.each(function () { try { this[a] = void 0, delete this[a] } catch (b) { } }) } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1 } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) { m.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }), k.optSelected || (m.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { m.propFix[this.toLowerCase()] = this }), k.enctype || (m.propFix.enctype = "encoding"); var uc = /[\t\r\n\f]/g; m.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) { m(this).addClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = m.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) { m(this).removeClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? m.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) { m(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = m(this), f = a.match(E) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0; return !1 } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { m.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), m.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; m.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null, e = m.trim(b + ""); return e && !m.trim(e.replace(xc, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : m.error("Invalid JSON: " + b) }, m.parseXML = function (b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c }; var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*"); try { zc = location.href } catch (Kc) { zc = y.createElement("a"), zc.href = "", zc = zc.href } yc = Gc.exec(zc.toLowerCase()) || []; function Lc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(E) || []; if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Mc(a, b, c, d) { var e = {}, f = a === Ic; function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Nc(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a } function Oc(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e) for (g in h) if (h[g] && h[g].test(e)) { i.unshift(g); break } if (i[0] in c) f = i[0]; else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break } d || (d = g) } f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Pc(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a) }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!j) { j = {}; while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2] } b = j[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? f : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return i && i.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v; h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers) v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]); if (i = Mc(Ic, k, b, v)) { v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, i.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, c, d) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return m.get(a, b, c, "json") }, getScript: function (a, b) { return m.get(a, void 0, b, "script") } }), m.each(["get", "post"], function (a, b) { m[b] = function (a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { m.fn[b] = function (a) { return this.on(b, a) } }), m._evalUrl = function (a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, m.fn.extend({ wrapAll: function (a) { if (m.isFunction(a)) return this.each(function (b) { m(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = m(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { return this.each(m.isFunction(a) ? function (b) { m(this).wrapInner(a.call(this, b)) } : function () { var b = m(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = m.isFunction(a); return this.each(function (c) { m(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() } }), m.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")) }, m.expr.filters.visible = function (a) { return !m.expr.filters.hidden(a) }; var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i; function Vc(a, b, c, d) { var e; if (m.isArray(b)) m.each(b, function (b, e) { c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vc(a + "[" + e + "]", b[e], c, d) } m.param = function (a, b) { var c, d = [], e = function (a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () { e(this.name, this.value) }); else for (c in a) Vc(c, a[c], b, e); return d.join("&").replace(Qc, "+") }, m.fn.extend({ serialize: function () { return m.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a)) }).map(function (a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function (a) { return { name: b.name, value: a.replace(Sc, "\r\n") } }) : { name: b.name, value: c.replace(Sc, "\r\n") } }).get() } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c() } : Zc; var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr(); a.ActiveXObject && m(a).on("unload", function () { for (var a in Xc) Xc[a](void 0, !0) }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) { if (!a.crossDomain || k.cors) { var b; return { send: function (c, d) { var e, f = a.xhr(), g = ++Wc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + ""); f.send(a.hasContent && a.data || null), b = function (c, e) { var h, i, j; if (b && (e || 4 === f.readyState)) if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort(); else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText); try { i = f.statusText } catch (k) { i = "" } h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 } j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b() }, abort: function () { b && b(void 0, !0) } } } }); function Zc() { try { return new a.XMLHttpRequest } catch (b) { } } function $c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return m.globalEval(a), a } } }), m.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), m.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c = y.head || m("head")[0] || y.documentElement; return { send: function (d, e) { b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function () { b && b.onload(void 0, !0) } } } }); var _c = [], ad = /(=)\?(?=&|$)|\?\?/; m.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = _c.pop() || m.expando + "_" + vc++; return this[a] = !0, a } }), m.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || m.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), m.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || y; var d = u.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes)) }; var bd = m.fn.load; m.fn.load = function (a, b, c) { if ("string" != typeof a && bd) return bd.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, m.expr.filters.animated = function (a) { return m.grep(m.timers, function (b) { return a === b.elem }).length }; var cd = a.document.documentElement; function dd(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } m.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n) } }, m.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { m.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function () { if (this[0]) { var a, b, c = { top: 0, left: 0 }, d = this[0]; return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || cd; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cd }) } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); m.fn[a] = function (d) { return V(this, function (a, d, e) { var f = dd(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), m.each(["top", "left"], function (a, b) { m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) { return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function (a, b) { m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { m.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return V(this, function (b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), m.fn.size = function () { return this.length }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return m }); var ed = a.jQuery, fd = a.$; return m.noConflict = function (b) { return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m }, typeof b === K && (a.jQuery = a.$ = m), m
});;/*! jQuery & Zepto Lazy v1.7.5 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function (t, e) { "use strict"; function r(r, a, i, l, u) { function f() { L = t.devicePixelRatio > 1, c(i), a.delay >= 0 && setTimeout(function () { s(!0) }, a.delay), (a.delay < 0 || a.combined) && (l.e = v(a.throttle, function (t) { "resize" === t.type && (w = B = -1), s(t.all) }), l.a = function (t) { c(t), i.push.apply(i, t) }, l.g = function () { return i = n(i).filter(function () { return !n(this).data(a.loadedName) }) }, l.f = function (t) { for (var e = 0; e < t.length; e++) { var r = i.filter(function () { return this === t[e] }); r.length && s(!1, r) } }, s(), n(a.appendScroll).on("scroll." + u + " resize." + u, l.e)) } function c(t) { var i = a.defaultImage, o = a.placeholder, l = a.imageBase, u = a.srcsetAttribute, f = a.loaderAttribute, c = a._f || {}; t = n(t).filter(function () { var t = n(this), r = m(this); return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(u) || t.attr(f) || c[r] !== e) }).data("plugin_" + a.name, r); for (var s = 0, d = t.length; s < d; s++) { var A = n(t[s]), g = m(t[s]), h = A.attr(a.imageBaseAttribute) || l; g === N && h && A.attr(u) && A.attr(u, b(A.attr(u), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')") } } function s(t, e) { if (!i.length) return void (a.autoDestroy && r.destroy()); for (var o = e || i, l = !1, u = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)if (t || e || A(o[s])) { var g = n(o[s]), h = m(o[s]), b = g.attr(a.attribute), v = g.attr(a.imageBaseAttribute) || u, p = g.attr(a.loaderAttribute); g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (l = !0, g.data(c, !0), d(g, h, v, p)) } l && (i = n(i).filter(function () { return !n(this).data(c) })) } function d(t, e, r, i) { ++z; var o = function () { y("onError", t), p(), o = n.noop }; y("beforeLoad", t); var l = a.attribute, u = a.srcsetAttribute, f = a.sizesAttribute, c = a.retinaAttribute, s = a.removeAttribute, d = a.loadedName, A = t.attr(c); if (i) { var g = function () { s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop }; t.off(I).one(I, o).one(D, g), y(i, t, function (e) { e ? (t.off(D), g()) : (t.off(I), o()) }) || t.trigger(I) } else { var h = n(new Image); h.one(I, o).one(D, function () { t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(l + " " + u + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p() }); var m = (L && A ? A : t.attr(l)) || ""; h.attr(C, t.attr(f)).attr(F, t.attr(u)).attr(E, m ? r + m : null), h.complete && h.trigger(D) } } function A(t) { var e = t.getBoundingClientRect(), r = a.scrollDirection, n = a.threshold, i = h() + n > e.top && -n < e.bottom, o = g() + n > e.left && -n < e.right; return "vertical" === r ? i : "horizontal" === r ? o : i && o } function g() { return w >= 0 ? w : w = n(t).width() } function h() { return B >= 0 ? B : B = n(t).height() } function m(t) { return t.tagName.toLowerCase() } function b(t, e) { if (e) { var r = t.split(","); t = ""; for (var a = 0, n = r.length; a < n; a++)t += e + r[a].trim() + (a !== n - 1 ? "," : "") } return t } function v(t, e) { var n, i = 0; return function (o, l) { function u() { i = +new Date, e.call(r, o) } var f = +new Date - i; n && clearTimeout(n), f > t || !a.enableThrottle || l ? u() : n = setTimeout(u, t - f) } } function p() { --z, i.length || z || y("onFinishedAll") } function y(t, e, n) { return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0) } var z = 0, w = -1, B = -1, L = !1, T = "afterLoad", D = "load", I = "error", N = "img", E = "src", F = "srcset", C = "sizes", O = "background-image"; "event" === a.bind || o ? f() : n(t).on(D + "." + u, f) } function a(a, o) { var l = this, u = n.extend({}, l.config, o), f = {}, c = u.name + "-" + ++i; return l.config = function (t, r) { return r === e ? u[t] : (u[t] = r, l) }, l.addItems = function (t) { return f.a && f.a("string" === n.type(t) ? n(t) : t), l }, l.getItems = function () { return f.g ? f.g() : {} }, l.update = function (t) { return f.e && f.e({}, !t), l }, l.force = function (t) { return f.f && f.f("string" === n.type(t) ? n(t) : t), l }, l.loadAll = function () { return f.e && f.e({ all: !0 }, !0), l }, l.destroy = function () { return n(u.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e }, r(l, u, a, f, c), u.chainable ? a : l } var n = t.jQuery || t.Zepto, i = 0, o = !1; n.fn.Lazy = n.fn.lazy = function (t) { return new a(this, t) }, n.Lazy = n.lazy = function (t, r, i) { if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) { t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r]; for (var o = a.prototype.config, l = o._f || (o._f = {}), u = 0, f = t.length; u < f; u++)(o[t[u]] === e || n.isFunction(o[t[u]])) && (o[t[u]] = i); for (var c = 0, s = r.length; c < s; c++)l[r[c]] = t[0] } }, a.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, n(t).on("load", function () { o = !0 }) }(window);;
setTimeout(
	function () {

		loadJsAsync("https://sp.zalo.me/plugins/sdk.js", function () {
		});
	}, 3000);

function loadJsAsync(t, e) {
	var n = document.createElement("script");
	n.type = "text/javascript", n.src = t, n.addEventListener("load", function (t) {
		e(null, t)
	}, !1);
	var a = document.getElementsByTagName("head")[0];
	a.appendChild(n);
	n.setAttribute('id', '');
}
var root = "/"; function call_lazy() { $("img.lazy").lazy({ effect: "fadeIn", data_attribute: "src", afterLoad: function (e) { e.addClass("after-lazy") } }) } function change_region() { $("#regions_footer").change(function () { var e = $(this).val(); 0 == e ? $(".address_regions .regions").show() : ($(".address_regions .regions").hide(), $(".regions_" + e).show()) }) } function fb_support_online() { jQuery(".chat_fb").click(function () { jQuery(".fchat").toggle("slow", function (e) { "none" == $(".fchat").css("display") ? ($(".chat_fb").addClass("chat_fb_closed").removeClass("chat_fb_openned"), $("#cfacebook").css("width", "auto")) : ($(".chat_fb").removeClass("chat_fb_closed").addClass("chat_fb_openned"), $("#cfacebook").css("width", "310px")) }) }) } $(document).ready(function () { call_lazy(), change_region(), fb_support_online() }), $(function () { var e = $(window).width(); $(window).resize(function () { e = $(window).width() }); var s = 0; $(window).scroll(function () { st = $(this).scrollTop(), Itid = $("#Itid").val(), e > 950 ? st > 100 ? st < s ? $(".header_wrapper").removeClass("slide-down").addClass("slide-up").css({ position: "fixed", top: "0px" }) : $(".header_wrapper").removeClass("slide-up").addClass("slide-down").css({ position: "fixed", top: "0px" }) : $(".header_wrapper").css({ position: "initial" }).removeClass("slide-up").removeClass("slide-down") : st > 150 ? st < s ? ($("#header_inner").removeClass("m-slide-down").addClass("m-slide-up").css({ position: "fixed", top: "0px" }), $("#menu-fixed-bar").addClass("m-menu-fix")) : ($("#header_inner").removeClass("m-slide-up").addClass("m-slide-down").css({ position: "fixed", top: "0px" }), $("#menu-fixed-bar").removeClass("m-menu-fix")) : ($("#header_inner").css({ position: "initial" }).removeClass("m-slide-up").removeClass("m-slide-down"), $("#menu-fixed-bar").addClass("m-menu-fix")), s = st }), $(".go-top").click(function () { return $("html,body").animate({ scrollTop: 0 }, 1e3), !1 }), $("#buy_now_bt").click(function () { $("#buy-now").trigger("click") }) });; function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();; var root = '/';
$(document).ready(function () {
	call_lazy();
	change_region();
	fb_support_online();

});

setTimeout(
	function () {

		loadJsAsync("https://sp.zalo.me/plugins/sdk.js", function () {
		});
	}, 3000);

function loadJsAsync(t, e) {
	var n = document.createElement("script");
	n.type = "text/javascript", n.src = t, n.addEventListener("load", function (t) {
		e(null, t)
	}, !1);
	var a = document.getElementsByTagName("head")[0];
	a.appendChild(n);
	n.setAttribute('id', '');
}
function fb_support_online() {

	jQuery(".chat_fb").click(function () {
		jQuery('.fchat').toggle("slow", function (display) {
			if ($('.fchat').css('display') == 'none') {
				$('.chat_fb').addClass('chat_fb_closed').removeClass('chat_fb_openned');
				$('#cfacebook').css('width', 'auto');
			} else {

				// $('#cfacebook').css('top','0%');
				$('.chat_fb').removeClass('chat_fb_closed').addClass('chat_fb_openned');
				$('#cfacebook').css('width', '310px');
			}
		});
	});

}


function call_lazy() {

	$("img.lazy").lazy({

		effect: "fadeIn",
		data_attribute: "src",
		afterLoad: function (element) {
			element.addClass('after-lazy');
		}
	});
}



function change_region() {
	$('#regions_footer').change(function () {
		var id = $(this).val();
		if (id == 0) {
			$('.address_regions .regions').show();
		} else {
			$('.address_regions .regions').hide();
			$('.regions_' + id).show();
		}

	})
}
$(function () {
	var width = $(window).width();
	$(window).resize(function () {
		width = $(window).width();
	});




	var lastScrollTop = 0;
	$(window).scroll(function () {

		st = $(this).scrollTop();
		Itid = $('#Itid').val();
		if (width > 950) { // pc
			if (st > 100) {

				if (st < lastScrollTop) {
					$(".header_wrapper").removeClass("slide-down").addClass("slide-up").css({ position: 'fixed', top: '0px' });

				}
				else {
					$(".header_wrapper").removeClass("slide-up").addClass("slide-down").css({ position: 'fixed', top: '0px' });

				}

			} else {
				// $('#menu-fixed-bar').fadeOut(200);
				$(".header_wrapper").css({ position: 'initial' }).removeClass("slide-up").removeClass("slide-down");

			}
		} else { // mobile
			if (st > 150) {

				if (st < lastScrollTop) {
					$("#header_inner").removeClass("m-slide-down").addClass("m-slide-up").css({ position: 'fixed', top: '0px' });
					$('#menu-fixed-bar').addClass('m-menu-fix');

				}
				else {
					$("#header_inner").removeClass("m-slide-up").addClass("m-slide-down").css({ position: 'fixed', top: '0px' });
					$('#menu-fixed-bar').removeClass('m-menu-fix');

				}

			} else {
				// $('#menu-fixed-bar').fadeOut(200);
				$("#header_inner").css({ position: 'initial' }).removeClass("m-slide-up").removeClass("m-slide-down");
				$('#menu-fixed-bar').addClass('m-menu-fix');

			}
		}
		lastScrollTop = st;
	});




	// $("#fixed-bar")
	// .css({position:'fixed',bottom:'0px'})
	// .hide();
	// $(window).scroll(function () {
	//  if ($(this).scrollTop() > 400) {
	//    $('#fixed-bar').fadeIn(200);
	//  } else {
	//    $('#fixed-bar').fadeOut(200);
	//  }
	// });
	$('.go-top').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	// trigger buy now
	$('#buy_now_bt').click(function () {
		$("#buy-now").trigger("click");
	});
});

;/*************** CHECK FORM ***************/
//If the length of the element's string is 0 then display helper message
function notEmpty(elemid, helperMsg) {
	elem = $('#' + elemid);
	if (elem.val().length == 0) {
		invalid(elemid, helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else {
		valid(elemid);
		return true;
	}
}

function notEmpty4(elemid, helperMsg) {
	elem = $('.' + elemid);
	if (elem.val().length == 0) {
		invalid(elemid, helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else {
		valid(elemid);
		return true;
	}
}

function notEmpty3(elemid, helperMsg) {
	elem = $(elemid);
	if (elem.val().length == 0) {
		invalid(elemid, helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else {
		valid(elemid);
		return true;
	}
}

function notEmpty2(elemid, txt_default, helperMsg) {
	elem = $('#' + elemid);
	if (elem.val().length == 0) {
		invalid(elemid, helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	} else if (elem.val() == txt_default) {
		invalid(elemid, helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else {
		valid(elemid);
		return true;
	}
}
//For texarea
function notEmptyTextarea(elemid, helperMsg) {
	elem = $('#' + elemid);
	if (elem.val().length == 0) {
		invalid(elemid, helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else {
		valid(elemid);
		return true;
	}
}
function isPhone(elemid, helperMsg) {
	elem = $('#' + elemid);
	var numericExpression = /^[0-9 .]+$/;
	if (elem.val().match(numericExpression)) {
		valid(elemid);
		return true;
	} else {
		invalid(elemid, helperMsg);
		return false;
	}
}
function notValue(elemid, helperMsg) {
	elem = $('#' + elemid);
	if (elem.val() == '0') {
		invalid(elemid, helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else {
		valid(elemid);
		return true;
	}
}
function isUsername(elemid, helperMsg) {
	elem = $('#' + elemid);
	var strExp = /^[0-9a-zA-Z_-]+$/;
	if (elem.val().match(strExp)) {
		valid(elemid);
		return true;
	} else {
		invalid(elemid, helperMsg);
		return false;
	}
}

//If the element's string matches the regular expression it is all numbers

function isNumeric(elemid, helperMsg) {
	elem = $('#' + elemid);
	var numericExpression = /^[0-9]+$/;
	if (elem.val().match(numericExpression)) {
		valid(elemid);
		return true;
	} else {
		invalid(elemid, helperMsg);
		elem.focus();
		return false;
	}
}

/*
 * check number list follow: 048082354;09238549; 
 */
function isNumericList(elemid, helperMsg) {
	elem = $('#' + elemid);
	var numericExpression = /^[0-9; ]+$/;
	if (elem.val().match(numericExpression)) {
		valid(elemid);
		return true;
	} else {
		invalid(elemid, helperMsg);
		elem.focus();
		return false;
	}
}

//If the element's string matches the regular expression it is all letters
function isAlphabet(elemid, helperMsg) {
	elem = $('#' + elemid);
	var alphaExp = /^[a-zA-Z]+$/;
	if (elem.val().match(alphaExp)) {
		return true;
	} else {
		invalid(elemid, helperMsg);
		elem.focus();
		return false;
	}
}

//If the element's string matches the regular expression it is numbers and letters
function isAlphanumeric(elemid, helperMsg) {

	elem = $('#' + elemid);
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if (elem.val().match(alphaExp)) {
		return true;
	} else {
		invalid(elemid, helperMsg);
		elem.focus();
		return false;
	}
}


// Limit length
function lengthRestriction(elemid, min, max) {
	elem = $('#' + elemid);
	var uInput = elem.val();
	if (uInput.length >= min && uInput.length <= max) {
		valid(elemid);
		return true;
	} else {
		invalid(elemid, 'Please enter between ' + min + ' and ' + max + ' characters');
		elem.focus();
		return false;
	}
}

// Min length
function lengthMin(elemid, min, helperMsg) {
	elem = $('#' + elemid);
	var uInput = elem.val();
	if (uInput.length >= min) {
		valid(elemid);
		return true;
	} else {
		invalid(elemid, helperMsg);
		return false;
	}
}


// Select box ( multi select)
function madeSelection(elemid, helperMsg) {
	elem = $('#' + elemid);
	var i;
	for (i = 0; i < elem.options.length; i++) {
		if (elem.options[i].selected && (elem.options[i].value != "")) {
			return true;
		}
	}
	invalid(elemid, helperMsg);
	return false;
}

// Select checkbox
function madeCheckbox(elemid, helperMsg) {
	elem = $('#' + elemid);
	if (elem.is(':checked') == false) {
		alert(helperMsg);
		return false;
		invalid(elemid);
	}
	else {
		return true;
	}
}

/*
 *  For checkbox multi.
 *  Min 1 item is checked
 */
function checkMultiCheckbox(containerid, helperMsg) {
	fields = $('#' + containerid).find('input:checked');
	length_checked = fields.length;
	if (!length_checked) {
		invalid(elemid, helperMsg);
		return false; // The form will *not* submit
	}
	return true;
}


// Email
function emailValidator(elemid, helperMsg) {
	elem = $('#' + elemid);
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (elem.val().match(emailExp)) {
		valid(elemid);
		return true;
	} else {
		invalid(elemid, helperMsg);
		return false;
	}
}

// Password and repassword
function checkMatchPass(helperMsg) {
	elem_value = $('#password').val();
	elem2_value = $('#re-password').val();

	if (elem_value != elem2_value) {
		invalid('re-password', helperMsg);
		return false;
	} else {
		valid('re-password');
		return true;
	}
}
function checkMatchPass_2(pass, repass, helperMsg) {
	elem_value = $('#' + pass).val();
	elem2_value = $('#' + repass).val();
	if (elem_value != elem2_value) {
		invalid(repass, helperMsg);
		return false;
	}
	else {
		valid(repass);
		return true;
	}
}

// Email and re-email

function checkMatchEmail(helperMsg) {
	elem_value = $('#email').val();
	elem2_value = $('#re-email').val();

	if (elem_value != elem2_value) {
		invalid('re-email', helperMsg);
		return false;
	}
	else {
		valid('re-email');
		return true;
	}
}

/*
 * Change border color where valid
 */
function valid(element) {
	$("#" + element).removeClass("redborder");
	$("#" + element).parent().find('.label_error').prev().remove();
	$("#" + element).parent().find('.label_error').remove();
	$("#" + element).parent().find('.label_success').prev().remove();
	$("#" + element).parent().find('.label_success').remove();
}
/*
 * Change border color where invalid
 */
function invalid(element, helperMsg) {
	$("#" + element).parent().find('.label_error').prev().remove();
	$("#" + element).parent().find('.label_error').remove();
	$("#" + element).parent().find('.label_success').prev().remove();
	$("#" + element).parent().find('.label_success').remove();
	$('<br/><div class=\'label_error\'>' + helperMsg + '</div>').insertAfter($('#' + element).parent().children(':last'));
	$("#" + element).addClass("redborder");
	$("#" + element).focus();
}

/************* NEW FUNTION : CHECK ALL, SUBMIT FORM ***********/
function checkAll(n, fldName, c) {

	if (!fldName) {
		fldName = 'cb';
	}
	var f = document.fontForm;

	var n2 = 0;
	for (i = 0; i < n; i++) {
		cb = eval('f.' + fldName + '' + i);
		if (cb) {

			cb.checked = c;
			n2++;
		}
	}
	if (c) {
		document.fontForm.boxchecked.value = n2;
	} else {
		document.fontForm.boxchecked.value = 0;
	}
}
function isChecked(isitchecked) {
	if (isitchecked == true) {
		document.fontForm.boxchecked.value++;
	}
	else {
		document.fontForm.boxchecked.value--;
	}
}
function checkSubmit(msg) {
	if (document.fontForm.boxchecked.value == 0) {
		alert(msg);
		return false;
	}
	else {
		return true;
	}

}
function submitform(pressbutton) {
	if (pressbutton) {
		document.fontForm.task.value = pressbutton;
	}
	if (typeof document.fontForm.onsubmit == "function") {
		document.fontForm.onsubmit();
	}
	document.fontForm.submit();
}
function submitform(pressbutton, msg) {
	if (msg) {
		if (confirm(msg)) {
			if (pressbutton) {
				document.fontForm.task.value = pressbutton;
			}
			if (typeof document.fontForm.onsubmit == "function") {
				document.fontForm.onsubmit();
			}
			document.fontForm.submit();
		}
	}
}

; !function (a, b, c, d) { function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function (a, b) { this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Pipe, a.proxy(function (b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() } function f(a) { if (a.touches !== d) return { x: a.touches[0].pageX, y: a.touches[0].pageY }; if (a.touches === d) { if (a.pageX !== d) return { x: a.pageX, y: a.pageY }; if (a.pageX === d) return { x: a.clientX, y: a.clientY } } } function g(a) { var b, d, e = c.createElement("div"), f = a; for (b in f) if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b]; return [!1] } function h() { return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] } function i() { return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] } function j() { return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] } function k() { return "ontouchstart" in b || !!navigator.msMaxTouchPoints } function l() { return b.navigator.msPointerEnabled } var m, n, o; m = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, n = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, o = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Plugins = {}, e.Pipe = [{ filter: ["width", "items", "settings"], run: function (a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function () { var a = this._clones, b = this.$stage.children(".cloned"); (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []) } }, { filter: ["items", "settings"], run: function () { var a, b, c = this._clones, d = this._items, e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0; for (a = 0, b = Math.abs(e / 2); b > a; a++)e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned"))) } }, { filter: ["width", "items", "settings"], run: function () { var a, b, c, d = this.settings.rtl ? 1 : -1, e = (this.width() / this.settings.items).toFixed(3), f = 0; for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++)a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f) } }, { filter: ["width", "items", "settings"], run: function () { var b, c, d = (this.width() / this.settings.items).toFixed(3), e = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" }; if (this.$stage.css(e), e = { width: this.settings.autoWidth ? "auto" : d - this.settings.margin }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function (a) { return a > 1 }).length > 0) for (b = 0, c = this._coordinates.length; c > b; b++)e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e); else this.$stage.children().css(e) } }, { filter: ["width", "items", "settings"], run: function (a) { a.current && this.reset(this.$stage.children().index(a.current)) } }, { filter: ["position"], run: function () { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function () { var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = []; for (c = 0, d = this._coordinates.length; d > c; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c); this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)) } }], e.prototype.initialize = function () { if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var b, c, e; if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1 } this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized") }, e.prototype.setup = function () { var b = this.viewport(), c = this.options.responsive, d = -1, e = null; c ? (a.each(c, function (a) { b >= a && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function (a, b) { return b.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })) }, e.prototype.optionsLogic = function () { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function (b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function () { for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) { return this[a] }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++; this._invalidated = {} }, e.prototype.width = function (a) { switch (a = a || e.Width.Default) { case e.Width.Inner: case e.Width.Outer: return this._width; default: return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function () { if (0 === this._items.length) return !1; (new Date).getTime(); this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed") }, e.prototype.eventsCall = function () { this.e._onDragStart = a.proxy(function (a) { this.onDragStart(a) }, this), this.e._onDragMove = a.proxy(function (a) { this.onDragMove(a) }, this), this.e._onDragEnd = a.proxy(function (a) { this.onDragEnd(a) }, this), this.e._onResize = a.proxy(function (a) { this.onResize(a) }, this), this.e._transitionEnd = a.proxy(function (a) { this.transitionEnd(a) }, this), this.e._preventClick = a.proxy(function (a) { this.preventClick(a) }, this) }, e.prototype.onThrottledResize = function () { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function () { return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1 }, e.prototype.eventsRouter = function (a) { var b = a.type; "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a) }, e.prototype.internalEvents = function () { var c = (k(), l()); this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function (a) { this.eventsRouter(a) }, this)), this.$stage.on("dragstart", function () { return !1 }), this.$stage.get(0).onselectstart = function () { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function (a) { this.eventsRouter(a) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this)) }, e.prototype.onDragStart = function (d) { var e, g, h, i; if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1; if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1; this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) { this.eventsRouter(a) }, this)) }, e.prototype.onDragMove = function (a) { var c, e, g, h, i, j; this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))) }, e.prototype.onDragEnd = function (b) { var d, e, f; if (this.state.isTouch) { if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1; this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents") } }, e.prototype.removeClick = function (c) { this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () { a(c).off("click.preventClick") }, 300) }, e.prototype.preventClick = function (b) { b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick") }, e.prototype.getTransformProperty = function () { var a, c; return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12] }, e.prototype.closest = function (b) { var c = -1, d = 30, e = this.width(), f = this.coordinates(); return this.settings.freeDrag || a.each(f, a.proxy(function (a, g) { return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c }, e.prototype.animate = function (b) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: b + "px" }) : this.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () { this.state.inMotion && this.transitionEnd() }, this)) }, e.prototype.current = function (a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } }); b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function (a) { this._invalidated[a] = !0 }, e.prototype.reset = function (a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function (b, c) { var e = c ? this._items.length : this._items.length + this._clones.length; return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b)) }, e.prototype.relative = function (a) { return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function (a) { var b, c, d, e = 0, f = this.settings; if (a) return this._items.length - 1; if (!f.loop && f.center) b = this._items.length - 1; else if (f.loop || f.center) if (f.loop || f.center) b = this._items.length + f.items; else { if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position."; for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c);)b = ++e } else b = this._items.length - f.items; return b }, e.prototype.minimum = function (a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function (a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function (a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function (b) { var c = this._clones.length / 2, e = c + this._items.length, f = function (a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function (a, b) { return f(b) }) : a.map(this._clones, function (a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function (a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function (b) { var c = null; return b === d ? a.map(this._coordinates, a.proxy(function (a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c) }, e.prototype.duration = function (a, b, c) { return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function (c, d) { if (this.settings.loop) { var e = c - this.relative(this.current()), f = this.current(), g = this.current(), h = this.current() + e, i = 0 > g - h ? !0 : !1, j = this._clones.length + this._items.length; h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () { this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update() }, this), 30) } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update() }, e.prototype.next = function (a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function (a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.transitionEnd = function (a) { return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated")) }, e.prototype.viewport = function () { var d; if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width(); else if (b.innerWidth) d = b.innerWidth; else { if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width."; d = c.documentElement.clientWidth } return d }, e.prototype.replace = function (b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () { return 1 === this.nodeType }).each(a.proxy(function (a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function (a, b) { b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", { content: a, position: b }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: a, position: b }) }, e.prototype.remove = function (a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.addTriggerableEvents = function () { var b = a.proxy(function (b, c) { return a.proxy(function (a) { a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c])) }, this) }, this); a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, a.proxy(function (a, c) { this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel")) }, this)) }, e.prototype.watchVisibility = function () { function c(a) { return a.offsetWidth > 0 && a.offsetHeight > 0 } function d() { c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile)) } c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)) }, e.prototype.preloadAutoWidthImages = function (b) { var c, d, e, f; c = 0, d = this, b.each(function (g, h) { e = a(h), f = new Image, f.onload = function () { c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize()) }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina") }) }, e.prototype.destroy = function () { this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd); for (var d in this._plugins) this._plugins[d].destroy(); (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () { }, this.$stage.off("dragstart", function () { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap() }, e.prototype.op = function (a, b, c) { var d = this.settings.rtl; switch (b) { case "<": return d ? a > c : c > a; case ">": return d ? c > a : a > c; case ">=": return d ? c >= a : a >= c; case "<=": return d ? a >= c : c >= a } }, e.prototype.on = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function (a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function (b, c, d) { var e = { item: { count: this._items.length, index: this.current() } }, f = a.camelCase(a.grep(["on", b, d], function (a) { return a }).join("-").toLowerCase()), g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c)); return this._supress[b] || (a.each(this._plugins, function (a, b) { b.onTrigger && b.onTrigger(g) }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g }, e.prototype.suppress = function (b) { a.each(b, a.proxy(function (a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function (b) { a.each(b, a.proxy(function (a, b) { delete this._supress[b] }, this)) }, e.prototype.browserSupport = function () { if (this.support3d = j(), this.support3d) { this.transformVendor = i(); var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"]; this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "" } this.state.orientation = b.orientation }, a.fn.owlCarousel = function (b) { return this.each(function () { a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b)) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document), function (a, b) { var c = function (b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) { this.load(b) }, this); e++ < d;)this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h) }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers) }; c.Defaults = { lazyLoad: !1 }, c.prototype.load = function (c) { var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy"); !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) { var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src"); this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () { f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, c.prototype.destroy = function () { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c }(window.Zepto || window.jQuery, window, document), function (a) { var b = function (c) { this._core = c, this._handlers = { "initialized.owl.carousel": a.proxy(function () { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function (a) { this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function (a) { this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers) }; b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, b.prototype.update = function () { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, b.prototype.destroy = function () { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b }(window.Zepto || window.jQuery, window, document), function (a, b, c) { var d = function (b) { this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": a.proxy(function (a) { this._core.settings.video && !this.isInFullScreen() && a.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function () { this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function (b) { var c = a(b.content).find(".owl-video"); c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) }, this) }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) { this.play(a) }, this)) }; d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, d.prototype.fetch = function (a, b) { var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube", d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else { if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported."); c = "vimeo" } d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, d.prototype.thumbnail = function (b, c) { var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) }; return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void ("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) { f = a[0].thumbnail_large, l(f) } })) }, d.prototype.stop = function () { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, d.prototype.play = function (b) { this._core.trigger("play", null, "video"), this._playing && this.stop(); var c, d, e = a(b.target || b.srcElement), f = e.closest("." + this._core.settings.itemClass), g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height(); "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d) }, d.prototype.isInFullScreen = function () { var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0 }, d.prototype.destroy = function () { var a, b; this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = d }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) { "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) { this.swapping = "translated" == a.type }, this), "translate.owl.carousel": a.proxy(function () { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) }; e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function () { if (1 === this.core.settings.items && this.core.support3d) { this.core.speed(0); var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut; this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)) } }, e.prototype.clear = function (b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, e.prototype.destroy = function () { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e }(window.Zepto || window.jQuery, window, document), function (a, b, c) {
	var d = function (b) {
		this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
			"translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
				this.autoplay()
			}, this), "play.owl.autoplay": a.proxy(function (a, b, c) { this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function () { this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function () { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function () { this.core.settings.autoplayHoverPause && this.autoplay() }, this)
		}, this.core.$element.on(this.handlers)
	}; d.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, d.prototype.autoplay = function () { this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () { this.play() }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval) }, d.prototype.play = function () { return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, d.prototype.stop = function () { b.clearInterval(this.interval) }, d.prototype.pause = function () { b.clearInterval(this.interval) }, d.prototype.destroy = function () { var a, c; b.clearInterval(this.interval); for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document), function (a) { "use strict"; var b = function (c) { this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) { this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "add.owl.carousel": a.proxy(function (b) { this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) { this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "change.owl.carousel": a.proxy(function (a) { if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) { var b = this._core.current(), c = this._core.maximum(), d = this._core.minimum(); a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value } }, this), "changed.owl.carousel": a.proxy(function (a) { "position" == a.property.name && this.draw() }, this), "refreshed.owl.carousel": a.proxy(function () { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers) }; b.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function () { var b, c, d = this._core.settings; d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function (b) { var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index(); b.preventDefault(), this.to(c, d.dotsSpeed) }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function () { this.prev(d.navSpeed) }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function () { this.next(d.navSpeed) }, this)); for (c in this._overrides) this._core[c] = a.proxy(this[c], this) }, b.prototype.destroy = function () { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, b.prototype.update = function () { var a, b, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items; if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy) for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this._core.mergers(this._core.relative(a)) }, b.prototype.draw = function () { var b, c, d = "", e = this._core.settings, f = (this._core.$stage.children(), this._core.relative(this._core.current())); if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) { if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) { for (c = 0; c < this._controls.$indicators.children().length; c++)d += this._templates[this._core.relative(c)]; this._controls.$indicators.html(d) } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove(); this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active") } this._controls.$indicators.toggle(e.dots) }, b.prototype.onTrigger = function (b) { var c = this._core.settings; b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items) } }, b.prototype.current = function () { var b = this._core.relative(this._core.current()); return a.grep(this._pages, function (a) { return a.start <= b && a.end >= b }).pop() }, b.prototype.getPosition = function (b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, b.prototype.next = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, b.prototype.prev = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, b.prototype.to = function (b, c, d) { var e; d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b }(window.Zepto || window.jQuery, window, document), function (a, b) { "use strict"; var c = function (d) { this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function () { "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function (b) { var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash"); this._hashes[c] = b.content }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () { var a = b.location.hash.substring(1), c = this._core.$stage.children(), d = this._hashes[a] && c.index(this._hashes[a]) || 0; return a ? void this._core.to(d, !1, !0) : !1 }, this)) }; c.Defaults = { URLhashListener: !1 }, c.prototype.destroy = function () { var c, d; a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = c }(window.Zepto || window.jQuery, window, document);;/*


   Magic Zoom Plus v5.1.1 for MagicToolbox.com
   Copyright 2015 Magic Toolbox
   Buy a license: https://www.magictoolbox.com/magiczoomplus/
   License agreement: https://www.magictoolbox.com/license/


*/
eval(function (m, a, g, i, c, k) { c = function (e) { return (e < a ? '' : c(parseInt(e / a))) + ((e = e % a) > 35 ? String.fromCharCode(e + 29) : e.toString(36)) }; if (!''.replace(/^/, String)) { while (g--) { k[c(g)] = i[g] || c(g) } i = [function (e) { return k[e] }]; c = function () { return '\\w+' }; g = 1 }; while (g--) { if (i[g]) { m = m.replace(new RegExp('\\b' + c(g) + '\\b', 'g'), i[g]) } } return m }('1k.8I=(17(){1c w,y;w=y=(17(){1c S={4D:"fF.3-b3-9-fo",d9:0,80:{},$az:17(W){1a(W.$5P||(W.$5P=++M.d9))},9f:17(W){1a(M.80[W]||(M.80[W]={}))},$F:17(){},$1n:17(){1a 1n},$1r:17(){1a 1r},dB:"en-"+1p.6j(1p.6V()*1t aP().dT()),3n:17(W){1a(2G!=W)},bl:17(X,W){1a(2G!=X)?X:W},9e:17(W){1a!!(W)},1P:17(W){if(!M.3n(W)){1a 1n}if(W.$4C){1a W.$4C}if(!!W.5X){if(1==W.5X){1a"62"}if(3==W.5X){1a"dq"}}if(W.1I&&W.cW){1a"g9"}if(W.1I&&W.9p){1a"29"}if((W 5k 1k.cQ||W 5k 1k.bs)&&W.5h===M.3G){1a"3Q"}if(W 5k 1k.5Y){1a"4g"}if(W 5k 1k.bs){1a"17"}if(W 5k 1k.63){1a"1O"}if(M.1e.4K){if(M.3n(W.ci)){1a"1z"}}1j{if(W===1k.1z||W.5h==1k.1u||W.5h==1k.cM||W.5h==1k.ej||W.5h==1k.gk||W.5h==1k.gj){1a"1z"}}if(W 5k 1k.aP){1a"dm"}if(W 5k 1k.ea){1a"gg"}if(W===1k){1a"1k"}if(W===1m){1a"1m"}1a 9N(W)},1Y:17(ab,aa){if(!(ab 5k 1k.5Y)){ab=[ab]}if(!aa){1a ab[0]}1T(1c Z=0,X=ab.1I;Z<X;Z++){if(!M.3n(ab)){7N}1T(1c Y in aa){if(!cQ.2A.4c.2b(aa,Y)){7N}3v{ab[Z][Y]=aa[Y]}3X(W){}}}1a ab[0]},9L:17(aa,Z){if(!(aa 5k 1k.5Y)){aa=[aa]}1T(1c Y=0,W=aa.1I;Y<W;Y++){if(!M.3n(aa[Y])){7N}if(!aa[Y].2A){7N}1T(1c X in(Z||{})){if(!aa[Y].2A[X]){aa[Y].2A[X]=Z[X]}}}1a aa[0]},dF:17(Y,X){if(!M.3n(Y)){1a Y}1T(1c W in(X||{})){if(!Y[W]){Y[W]=X[W]}}1a Y},$3v:17(){1T(1c X=0,W=29.1I;X<W;X++){3v{1a 29[X]()}3X(Y){}}1a 1h},$A:17(Y){if(!M.3n(Y)){1a M.$([])}if(Y.cR){1a M.$(Y.cR())}if(Y.cW){1c X=Y.1I||0,W=1t 5Y(X);5J(X--){W[X]=Y[X]}1a M.$(W)}1a M.$(5Y.2A.bn.2b(Y))},6K:17(){1a 1t aP().dT()},49:17(aa){1c Y;4y(M.1P(aa)){1B"9w":Y={};1T(1c Z in aa){Y[Z]=M.49(aa[Z])}1G;1B"4g":Y=[];1T(1c X=0,W=aa.1I;X<W;X++){Y[X]=M.49(aa[X])}1G;1R:1a aa}1a M.$(Y)},$:17(Y){1c W=1r;if(!M.3n(Y)){1a 1h}if(Y.$aD){1a Y}4y(M.1P(Y)){1B"4g":Y=M.dF(Y,M.1Y(M.5Y,{$aD:M.$F}));Y.3b=Y.eh;1a Y;1G;1B"1O":1c X=1m.c9(Y);if(M.3n(X)){1a M.$(X)}1a 1h;1G;1B"1k":1B"1m":M.$az(Y);Y=M.1Y(Y,M.3u);1G;1B"62":M.$az(Y);Y=M.1Y(Y,M.3S);1G;1B"1z":Y=M.1Y(Y,M.1u);1G;1B"dq":1B"17":1B"4g":1B"dm":1R:W=1n;1G}if(W){1a M.1Y(Y,{$aD:M.$F})}1j{1a Y}},$1t:17(W,Y,X){1a M.$(M.dj.8y(W)).b0(Y||{}).1x(X||{})},7p:17(X,Z,ad){1c aa,Y,ab,ac=[],W=-1;ad||(ad=M.dB);aa=M.$(ad)||M.$1t("2m",{id:ad,1y:"9Y/6x"}).1Z((1m.hF||1m.3A),"1H");Y=aa.cK||aa.ct;if("1O"!=M.1P(Z)){1T(1c ab in Z){ac.36(ab+":"+Z[ab])}Z=ac.7d(";")}if(Y.ck){W=Y.ck(X+" {"+Z+"}",Y.hN.1I)}1j{W=Y.gG(X,Z)}1a W},gF:17(Z,W){1c Y,X;Y=M.$(Z);if("62"!==M.1P(Y)){1a}X=Y.cK||Y.ct;if(X.cv){X.cv(W)}1j{if(X.cy){X.cy(W)}}},gv:17(){1a"h5-h8-h9-hd-hc".4w(/[gY]/g,17(Y){1c X=1p.6V()*16|0,W=Y=="x"?X:(X&3|8);1a W.8E(16)}).9Z()},6l:(17(){1c W;1a 17(X){if(!W){W=1m.8y("a")}W.3Y("6W",X);1a("!!"+W.6W).4w("!!","")}})(),h7:17(Y){1c Z=0,W=Y.1I;1T(1c X=0;X<W;++X){Z=31*Z+Y.eL(X);Z%=gN}1a Z}};1c M=S;1c N=S.$;if(!1k.eO){1k.eO=S;1k.$en=S.$}M.5Y={$4C:"4g",4h:17(Z,aa){1c W=13.1I;1T(1c X=13.1I,Y=(aa<0)?1p.1W(0,X+aa):aa||0;Y<X;Y++){if(13[Y]===Z){1a Y}}1a-1},5p:17(W,X){1a 13.4h(W,X)!=-1},eh:17(W,Z){1T(1c Y=0,X=13.1I;Y<X;Y++){if(Y in 13){W.2b(Z,13[Y],Y,13)}}},2W:17(W,ab){1c aa=[];1T(1c Z=0,X=13.1I;Z<X;Z++){if(Z in 13){1c Y=13[Z];if(W.2b(ab,13[Z],Z,13)){aa.36(Y)}}}1a aa},g2:17(W,aa){1c Z=[];1T(1c Y=0,X=13.1I;Y<X;Y++){if(Y in 13){Z[Y]=W.2b(aa,13[Y],Y,13)}}1a Z}};M.9L(63,{$4C:"1O",4Y:17(){1a 13.4w(/^\\s+|\\s+$/g,"")},eq:17(W,X){1a(X||1n)?(13.8E()===W.8E()):(13.5B().8E()===W.5B().8E())},5F:17(){1a 13.4w(/-\\D/g,17(W){1a W.93(1).9Z()})},8Q:17(){1a 13.4w(/[A-Z]/g,17(W){1a("-"+W.93(0).5B())})},ge:17(W){1a 5t(13,W||10)},gB:17(){1a 2u(13)},cx:17(){1a!13.4w(/1r/i,"").4Y()},4F:17(X,W){W=W||"";1a(W+13+W).4h(W+X+W)>-1}});S.9L(bs,{$4C:"17",1E:17(){1c X=M.$A(29),W=13,Y=X.6I();1a 17(){1a W.6c(Y||1h,X.5D(M.$A(29)))}},2D:17(){1c X=M.$A(29),W=13,Y=X.6I();1a 17(Z){1a W.6c(Y||1h,M.$([Z||(M.1e.2q?1k.1z:1h)]).5D(X))}},2C:17(){1c X=M.$A(29),W=13,Y=X.6I();1a 1k.4H(17(){1a W.6c(W,X)},Y||0)},df:17(){1c X=M.$A(29),W=13;1a 17(){1a W.2C.6c(W,X)}},dJ:17(){1c X=M.$A(29),W=13,Y=X.6I();1a 1k.fc(17(){1a W.6c(W,X)},Y||0)}});1c T={},L=2J.gH.5B(),K=L.3t(/(3V|6f|4K|as)\\/(\\d+\\.?\\d*)/i),P=L.3t(/(gE|a8)\\/(\\d+\\.?\\d*)/i)||L.3t(/(ff|4r|9U|dS|6o|a8)\\/(\\d+\\.?\\d*)/i),R=L.3t(/4D\\/(\\d+\\.?\\d*)/i),G=1m.6b.2m;17 H(X){1c W=X.93(0).9Z()+X.bn(1);1a X in G||("e4"+W)in G||("dY"+W)in G||("6n"+W)in G||("O"+W)in G}M.1e={2K:{gx:!!(1m.gw),gz:!!(1k.ei),bQ:!!(1m.f8),4Z:!!(1m.gK||1m.gJ||1m.92||1m.ex||1m.gD||1m.he||1m.i2||1m.hh||1m.hA),cX:!!(1k.hz)&&!!(1k.i4)&&(1k.9G&&"fp"in 1t 9G),1X:H("1X"),2f:H("2f"),8X:H("8X"),dt:H("dt"),4N:1n,f0:1n,8g:1n,7i:(17(){1a 1m.fA.fE("aY://aX.aV.aW/fL/fu/gd#fX","1.1")})()},cq:17(){1a"gm"in 1k||(1k.dd&&1m 5k dd)}(),3a:L.3t(/(6J|bb\\d+|fT).+|fW|g0\\/|g7|fV|fQ|fR|g4|g5|gi|ip(e0|ef|ad)|gh|gl|gf |gn|fx|fm|3a.+dS|fj|6o m(fh|in)i|fK( fD)?|cA|p(fz|fy)\\/|fJ|fr|ht|hC(4|6)0|hR|gM|gC\\.(1e|4a)|gt|gs|gr (ce|cA)|gq|h4/)?1r:1n,7t:(K&&K[1])?K[1].5B():(1k.6o)?"as":!!(1k.h2)?"4K":(2G!==1m.gR||1h!=1k.gT)?"6f":(1h!==1k.hb||!2J.h6)?"3V":"gp",4D:(K&&K[2])?2u(K[2]):0,3F:(P&&P[1])?P[1].5B():"",7z:(P&&P[2])?2u(P[2]):0,8A:"",an:"",4U:"",2q:0,4M:L.3t(/ip(?:ad|ef|e0)/)?"9X":(L.3t(/(?:hH|6J)/)||2J.4M.3t(/9b|9v|hI/i)||["hS"])[0].5B(),ep:1m.8L&&"eK"==1m.8L.5B(),eP:0,41:17(){1a(1m.8L&&"eK"==1m.8L.5B())?1m.3A:1m.6b},4N:1k.4N||1k.go||1k.hg||1k.hr||1k.fP||2G,9l:1k.9l||1k.eJ||1k.eJ||1k.g3||1k.g1||1k.fN||2G,2l:1n,75:17(){if(M.1e.2l){1a}1c Z,Y;M.1e.2l=1r;M.3A=M.$(1m.3A);M.9v=M.$(1k);3v{1c X=M.$1t("2Z").1x({1f:2F,1g:2F,5n:"6d",2e:"5z",1H:-gb}).1Z(1m.3A);M.1e.eP=X.f7-X.cF;X.2R()}3X(W){}3v{Z=M.$1t("2Z");Y=Z.2m;Y.f5="eZ:26(a6://),26(a6://),gc 26(a6://)";M.1e.2K.f0=(/(26\\s*\\(.*?){3}/).3d(Y.eZ);Y=1h;Z=1h}3X(W){}if(!M.1e.7b){M.1e.7b=M.8M("2f").8Q()}3v{Z=M.$1t("2Z");Z.2m.f5=M.8M("2W").8Q()+":5j(g6);";M.1e.2K.8g=!!Z.2m.1I&&(!M.1e.2q||M.1e.2q>9);Z=1h}3X(W){}if(!M.1e.2K.8g){M.$(1m.6b).1A("6O-g8-3z")}if(2G===1k.fU&&2G!==1k.fS){T.2V="fO"}M.3u.2X.2b(M.$(1m),"9q")}};(17(){1c aa=[],Z,Y,X;17 W(){1a!!(29.9p.aE)}4y(M.1e.7t){1B"4K":if(!M.1e.4D){M.1e.4D=!!(1k.9G)?3:2}1G;1B"6f":M.1e.4D=(P&&P[2])?2u(P[2]):0;1G}M.1e[M.1e.7t]=1r;if(P&&"ff"===P[1]){M.1e.3F="4r"}if(!!1k.4r){M.1e.4r=1r}if(P&&"a8"===P[1]){M.1e.3F="6o";M.1e.6o=1r}if("9U"===M.1e.3F&&(R&&R[1])){M.1e.7z=2u(R[1])}if("6J"==M.1e.4M&&M.1e.3V&&(R&&R[1])){M.1e.6T=1r}Z=({6f:["-dW-","dY","dW"],3V:["-3V-","e4","3V"],4K:["-6n-","6n","6n"],as:["-o-","O","o"]})[M.1e.7t]||["","",""];M.1e.8A=Z[0];M.1e.an=Z[1];M.1e.4U=Z[2];M.1e.2q=(!M.1e.4K)?2G:(1m.es)?1m.es:17(){1c ab=0;if(M.1e.ep){1a 5}4y(M.1e.4D){1B 2:ab=6;1G;1B 3:ab=7;1G}1a ab}();aa.36(M.1e.4M+"-3z");if(M.1e.3a){aa.36("3a-3z")}if(M.1e.6T){aa.36("6J-1e-3z")}if(M.1e.2q){M.1e.3F="ie";M.1e.7z=M.1e.2q;aa.36("ie"+M.1e.2q+"-3z");1T(Y=11;Y>M.1e.2q;Y--){aa.36("fs-ie"+Y+"-3z")}}if(M.1e.3V&&M.1e.4D<fl){M.1e.2K.4Z=1n}if(M.1e.4N){M.1e.4N.2b(1k,17(){M.1e.2K.4N=1r})}if(M.1e.2K.7i){aa.36("7i-3z")}1j{aa.36("6O-7i-3z")}X=(1m.6b.64||"").3t(/\\S+/g)||[];1m.6b.64=M.$(X).5D(aa).7d(" ");if(M.1e.2q&&M.1e.2q<9){1m.8y("89");1m.8y("eE")}})();(17(){M.1e.4Z={9k:M.1e.2K.4Z,5b:17(){1a!!(1m.fq||1m[M.1e.4U+"fM"]||1m.4Z||1m.fG||1m[M.1e.4U+"fw"])},bw:17(W,X){X||(X={});if(13.9k){M.$(1m).1D(13.a9,13.ez=17(Y){if(13.5b()){X.bX&&X.bX()}1j{M.$(1m).1M(13.a9,13.ez);X.bR&&X.bR()}}.2D(13));M.$(1m).1D(13.bo,13.5S=17(Y){X.8o&&X.8o();M.$(1m).1M(13.bo,13.5S)}.2D(13));(W[M.1e.4U+"fB"]||W[M.1e.4U+"fH"]||W.fv||17(){}).2b(W)}1j{if(X.8o){X.8o()}}},dI:(1m.92||1m.ex||1m[M.1e.4U+"ft"]||1m[M.1e.4U+"fg"]||17(){}).1E(1m),a9:1m.ey?"hx":(1m.92?"":M.1e.4U)+"hw",bo:1m.ey?"hs":(1m.92?"":M.1e.4U)+"hk",hi:M.1e.4U,hq:1h}})();1c V=/\\S+/g,J=/^(3E(eo|et|eA|eB)hE)|((73|7R)(eo|et|eA|eB))$/,O={"hZ":("2G"===9N(G.eI))?"i3":"eI"},Q={ew:1r,i1:1r,2r:1r,eF:1r,1l:1r},I=(1k.eD)?17(Y,W){1c X=1k.eD(Y,1h);1a X?X.i0(W)||X[W]:1h}:17(Z,X){1c Y=Z.hK,W=1h;W=Y?Y[X]:1h;if(1h==W&&Z.2m&&Z.2m[X]){W=Z.2m[X]}1a W};17 U(Y){1c W,X;X=(M.1e.3V&&"2W"==Y)?1n:(Y in G);if(!X){W=M.1e.an+Y.93(0).9Z()+Y.bn(1);if(W in G){1a W}}1a Y}M.8M=U;M.3S={e1:17(W){1a!(W||"").4F(" ")&&(13.64||"").4F(W," ")},1A:17(aa){1c X=(13.64||"").3t(V)||[],Z=(aa||"").3t(V)||[],W=Z.1I,Y=0;1T(;Y<W;Y++){if(!M.$(X).5p(Z[Y])){X.36(Z[Y])}}13.64=X.7d(" ");1a 13},1S:17(ab){1c X=(13.64||"").3t(V)||[],aa=(ab||"").3t(V)||[],W=aa.1I,Z=0,Y;1T(;Z<W;Z++){if((Y=M.$(X).4h(aa[Z]))>-1){X.9S(Y,1)}}13.64=ab?X.7d(" "):"";1a 13},hP:17(W){1a 13.e1(W)?13.1S(W):13.1A(W)},3m:17(X){1c Y=X.5F(),W=1h;X=O[Y]||(O[Y]=U(Y));W=I(13,X);if("2w"===W){W=1h}if(1h!==W){if("2r"==X){1a M.3n(W)?2u(W):1}if(J.3d(X)){W=5t(W,10)?W:"5T"}}1a W},3C:17(X,W){1c Z=X.5F();3v{if("2r"==X){13.ed(W);1a 13}X=O[Z]||(O[Z]=U(Z));13.2m[X]=W+(("65"==M.1P(W)&&!Q[Z])?"2y":"")}3X(Y){}1a 13},1x:17(X){1T(1c W in X){13.3C(W,X[W])}1a 13},hf:17(){1c W={};M.$A(29).3b(17(X){W[X]=13.3m(X)},13);1a W},ed:17(Y,W){1c X;W=W||1n;13.2m.2r=Y;Y=5t(2u(Y)*2F);if(W){if(0===Y){if("3k"!=13.2m.5m){13.2m.5m="3k"}}1j{if("6m"!=13.2m.5m){13.2m.5m="6m"}}}if(M.1e.2q&&M.1e.2q<9){if(!9T(Y)){if(!~13.2m.2W.4h("b5")){13.2m.2W+=" ee:eN.f9.b5(8Y="+Y+")"}1j{13.2m.2W=13.2m.2W.4w(/8Y=\\d*/i,"8Y="+Y)}}1j{13.2m.2W=13.2m.2W.4w(/ee:eN.f9.b5\\(8Y=\\d*\\)/i,"").4Y();if(""===13.2m.2W){13.2m.5G("2W")}}}1a 13},b0:17(W){1T(1c X in W){if("3Q"===X){13.1A(""+W[X])}1j{13.3Y(X,""+W[X])}}1a 13},gA:17(){1c X=0,W=0;X=13.3m("1X-5c");W=13.3m("1X-bM");X=X.4h("6n")>-1?2u(X):X.4h("s")>-1?2u(X)*aH:0;W=W.4h("6n")>-1?2u(W):W.4h("s")>-1?2u(W)*aH:0;1a X+W},4m:17(){1a 13.1x({7q:"3q",5m:"3k"})},5A:17(){1a 13.1x({7q:"",5m:"6m"})},1F:17(){1a{1f:13.f7,1g:13.h1}},88:17(X){1c W=13.1F();W.1f-=(2u(13.3m("3E-1N-1f")||0)+2u(13.3m("3E-2S-1f")||0));W.1g-=(2u(13.3m("3E-1H-1f")||0)+2u(13.3m("3E-2U-1f")||0));if(!X){W.1f-=(2u(13.3m("73-1N")||0)+2u(13.3m("73-2S")||0));W.1g-=(2u(13.3m("73-1H")||0)+2u(13.3m("73-2U")||0))}1a W},6L:17(){1a{1H:13.8a,1N:13.8C}},gU:17(){1c W=13,X={1H:0,1N:0};do{X.1N+=W.8C||0;X.1H+=W.8a||0;W=W.4B}5J(W);1a X},8h:17(){1c aa=13,X=0,Z=0;if(M.3n(1m.6b.7Y)){1c W=13.7Y(),Y=M.$(1m).6L(),ab=M.1e.41();1a{1H:W.1H+Y.y-ab.gV,1N:W.1N+Y.x-ab.h0}}do{X+=aa.gX||0;Z+=aa.gZ||0;aa=aa.gW}5J(aa&&!(/^(?:3A|gQ)$/i).3d(aa.am));1a{1H:Z,1N:X}},7L:17(){1c X=13.8h();1c W=13.1F();1a{1H:X.1H,2U:X.1H+W.1g,1N:X.1N,2S:X.1N+W.1f}},5s:17(X){3v{13.gS=X}3X(W){13.ha=X}1a 13},2R:17(){1a(13.4B)?13.4B.at(13):13},57:17(){M.$A(13.h3).3b(17(W){if(3==W.5X||8==W.5X){1a}M.$(W).57()});13.2R();13.bE();if(13.$5P){M.80[13.$5P]=1h;4O M.80[13.$5P]}1a 1h},3s:17(Y,X){X=X||"2U";1c W=13.4l;("1H"==X&&W)?13.gP(Y,W):13.bB(Y);1a 13},1Z:17(Y,X){1c W=M.$(Y).3s(13,X);1a 13},fe:17(W){13.3s(W.4B.al(13,W));1a 13},a1:17(W){if("62"!==M.1P("1O"==M.1P(W)?W=1m.c9(W):W)){1a 1n}1a(13==W)?1n:(13.5p&&!(M.1e.cD))?(13.5p(W)):(13.cN)?!!(13.cN(W)&16):M.$A(13.8k(W.am)).5p(W)}};M.3S.gO=M.3S.3m;M.3S.gy=M.3S.1x;if(!1k.3S){1k.3S=M.$F;if(M.1e.7t.3V){1k.1m.8y("gu")}1k.3S.2A=(M.1e.7t.3V)?1k["[[gL.2A]]"]:{}}M.9L(1k.3S,{$4C:"62"});M.3u={1F:17(){if(M.1e.cq||M.1e.gI||M.1e.cD){1a{1f:1k.59,1g:1k.52}}1a{1f:M.1e.41().cF,1g:M.1e.41().hO}},6L:17(){1a{x:1k.hQ||M.1e.41().8C,y:1k.hM||M.1e.41().8a}},hL:17(){1c W=13.1F();1a{1f:1p.1W(M.1e.41().hG,W.1f),1g:1p.1W(M.1e.41().hJ,W.1g)}}};M.1Y(1m,{$4C:"1m"});M.1Y(1k,{$4C:"1k"});M.1Y([M.3S,M.3u],{2a:17(Z,X){1c W=M.9f(13.$5P),Y=W[Z];if(2G!==X&&2G===Y){Y=W[Z]=X}1a(M.3n(Y)?Y:1h)},38:17(Y,X){1c W=M.9f(13.$5P);W[Y]=X;1a 13},2Y:17(X){1c W=M.9f(13.$5P);4O W[X];1a 13}});if(!(1k.ba&&1k.ba.2A&&1k.ba.2A.bd)){M.1Y([M.3S,M.3u],{bd:17(W){1a M.$A(13.9x("*")).2W(17(Y){3v{1a(1==Y.5X&&Y.64.4F(W," "))}3X(X){}})}})}M.1Y([M.3S,M.3u],{8H:17(){1a 13.bd(29[0])},8k:17(){1a 13.9x(29[0])}});if(M.1e.4Z.9k&&!1m.cf){M.3S.cf=17(){M.1e.4Z.bw(13)}}M.1u={$4C:"1z",5Q:M.$1n,2c:17(){1a 13.5d().3J()},5d:17(){if(13.ch){13.ch()}1j{13.ci=1r}1a 13},3J:17(){if(13.cw){13.cw()}1j{13.hY=1n}1a 13},4R:17(){13.5Q=M.$1r;1a 13},7V:17(){1c X,W;X=((/3B/i).3d(13.1y))?13.2E[0]:13;1a(!M.3n(X))?{x:0,y:0}:{x:X.2O,y:X.2M}},5Z:17(){1c X,W;X=((/3B/i).3d(13.1y))?13.2E[0]:13;1a(!M.3n(X))?{x:0,y:0}:{x:X.5L||X.2O+M.1e.41().8C,y:X.5I||X.2M+M.1e.41().8a}},bf:17(){1c W=13.4b||13.hU;5J(W&&3==W.5X){W=W.4B}1a W},81:17(){1c X=1h;4y(13.1y){1B"7u":1B"hT":1B"hV":X=13.a3||13.hW;1G;1B"8n":1B"bC":1B"cG":X=13.a3||13.hX;1G;1R:1a X}3v{5J(X&&3==X.5X){X=X.4B}}3X(W){X=1h}1a X},6B:17(){if(!13.dz&&13.2p!==2G){1a(13.2p&1?1:(13.2p&2?3:(13.2p&4?2:0)))}1a 13.dz},hn:17(){1a(13.2i&&("3B"===13.2i||13.2i===13.5i))||(/3B/i).3d(13.1y)},ho:17(){1a 13.2i?(("3B"===13.2i||13.5i===13.2i)&&13.9R):1===13.2E.1I&&(13.6p.1I?13.6p[0].3K==13.2E[0].3K:1r)}};M.aU="dw";M.aB="hp";M.a5="";if(!1m.dw){M.aU="hm";M.aB="hl";M.a5="8r"}M.1u.1w={1y:"",x:1h,y:1h,2L:1h,2p:1h,4b:1h,a3:1h,$4C:"1z.4p",5Q:M.$1n,5E:M.$([]),43:17(W){1c X=W;13.5E.36(X)},2c:17(){1a 13.5d().3J()},5d:17(){13.5E.3b(17(X){3v{X.5d()}3X(W){}});1a 13},3J:17(){13.5E.3b(17(X){3v{X.3J()}3X(W){}});1a 13},4R:17(){13.5Q=M.$1r;1a 13},7V:17(){1a{x:13.2O,y:13.2M}},5Z:17(){1a{x:13.x,y:13.y}},bf:17(){1a 13.4b},81:17(){1a 13.a3},6B:17(){1a 13.2p},dD:17(){1a 13.5E.1I>0?13.5E[0].bf():2G}};M.1Y([M.3S,M.3u],{1D:17(Y,aa,ab,ae){1c ad,W,Z,ac,X;if("1O"==M.1P(Y)){X=Y.7Z(" ");if(X.1I>1){Y=X}}if(M.1P(Y)=="4g"){M.$(Y).3b(13.1D.2D(13,aa,ab,ae));1a 13}if(!Y||!aa||M.1P(Y)!="1O"||M.1P(aa)!="17"){1a 13}if(Y=="9q"&&M.1e.2l){aa.2b(13);1a 13}Y=T[Y]||Y;ab=5t(ab||50);if(!aa.$a4){aa.$a4=1p.6j(1p.6V()*M.6K())}ad=M.3u.2a.2b(13,"7K",{});W=ad[Y];if(!W){ad[Y]=W=M.$([]);Z=13;if(M.1u.1w[Y]){M.1u.1w[Y].1J.5y.2b(13,ae)}1j{W.3f=17(af){af=M.1Y(af||1k.e,{$4C:"1z"});M.3u.2X.2b(Z,Y,M.$(af))};13[M.aU](M.a5+Y,W.3f,1n)}}ac={1y:Y,fn:aa,aC:ab,cO:aa.$a4};W.36(ac);W.hj(17(ag,af){1a ag.aC-af.aC});1a 13},1M:17(ac){1c aa=M.3u.2a.2b(13,"7K",{}),Y,W,X,ad,ab,Z;ab=29.1I>1?29[1]:-2F;if("1O"==M.1P(ac)){Z=ac.7Z(" ");if(Z.1I>1){ac=Z}}if(M.1P(ac)=="4g"){M.$(ac).3b(13.1M.2D(13,ab));1a 13}ac=T[ac]||ac;if(!ac||M.1P(ac)!="1O"||!aa||!aa[ac]){1a 13}Y=aa[ac]||[];1T(X=0;X<Y.1I;X++){W=Y[X];if(-2F==ab||!!ab&&ab.$a4===W.cO){ad=Y.9S(X--,1)}}if(0===Y.1I){if(M.1u.1w[ac]){M.1u.1w[ac].1J.2R.2b(13)}1j{13[M.aB](M.a5+ac,Y.3f,1n)}4O aa[ac]}1a 13},2X:17(aa,ac){1c Z=M.3u.2a.2b(13,"7K",{}),Y,W,X;aa=T[aa]||aa;if(!aa||M.1P(aa)!="1O"||!Z||!Z[aa]){1a 13}3v{ac=M.1Y(ac||{},{1y:aa})}3X(ab){}if(2G===ac.2L){ac.2L=M.6K()}Y=Z[aa]||[];1T(X=0;X<Y.1I&&!(ac.5Q&&ac.5Q());X++){Y[X].fn.2b(13,ac)}},bx:17(X,W){1c aa=("9q"==X)?1n:1r,Z=13,Y;X=T[X]||X;if(!aa){M.3u.2X.2b(13,X);1a 13}if(Z===1m&&1m.9H&&!Z.ak){Z=1m.6b}if(1m.9H){Y=1m.9H(X);Y.5O(W,1r,1r)}1j{Y=1m.hB();Y.9z=X}if(1m.9H){Z.ak(Y)}1j{Z.hD("8r"+W,Y)}1a Y},bE:17(){1c X=M.3u.2a.2b(13,"7K");if(!X){1a 13}1T(1c W in X){M.3u.1M.2b(13,W)}M.3u.2Y.2b(13,"7K");1a 13}});(17(W){if("8f"===1m.8v){1a W.1e.75.2C(1)}if(W.1e.3V&&W.1e.4D<hy){(17(){(W.$(["2h","8f"]).5p(1m.8v))?W.1e.75():29.9p.2C(50)})()}1j{if(W.1e.4K&&W.1e.2q<9&&1k==1H){(17(){(W.$3v(17(){W.1e.41().hu("1N");1a 1r}))?W.1e.75():29.9p.2C(50)})()}1j{W.3u.1D.2b(W.$(1m),"hv",W.1e.75);W.3u.1D.2b(W.$(1k),"5M",W.1e.75)}}})(S);M.3G=17(){1c aa=1h,X=M.$A(29);if("3Q"==M.1P(X[0])){aa=X.6I()}1c W=17(){1T(1c ad in 13){13[ad]=M.49(13[ad])}if(13.5h.$3L){13.$3L={};1c af=13.5h.$3L;1T(1c ae in af){1c ac=af[ae];4y(M.1P(ac)){1B"17":13.$3L[ae]=M.3G.dr(13,ac);1G;1B"9w":13.$3L[ae]=M.49(ac);1G;1B"4g":13.$3L[ae]=M.49(ac);1G}}}1c ab=(13.3H)?13.3H.6c(13,29):13;4O 13.aE;1a ab};if(!W.2A.3H){W.2A.3H=M.$F}if(aa){1c Z=17(){};Z.2A=aa.2A;W.2A=1t Z;W.$3L={};1T(1c Y in aa.2A){W.$3L[Y]=aa.2A[Y]}}1j{W.$3L=1h}W.5h=M.3G;W.2A.5h=W;M.1Y(W.2A,X[0]);M.1Y(W,{$4C:"3Q"});1a W};S.3G.dr=17(W,X){1a 17(){1c Z=13.aE;1c Y=X.6c(W,29);1a Y}};(17(Z){1c Y=Z.$;1c W=5,X=b6;Z.1u.1w.1Q=1t Z.3G(Z.1Y(Z.1u.1w,{1y:"1Q",3H:17(ac,ab){1c aa=ab.5Z();13.x=aa.x;13.y=aa.y;13.2O=ab.2O;13.2M=ab.2M;13.2L=ab.2L;13.2p=ab.6B();13.4b=ac;13.43(ab)}}));Z.1u.1w.1Q.1J={1v:{7l:X,2p:1},5y:17(aa){13.38("1z:1Q:1v",Z.1Y(Z.49(Z.1u.1w.1Q.1J.1v),aa||{}));13.1D("6G",Z.1u.1w.1Q.1J.3f,1);13.1D("5R",Z.1u.1w.1Q.1J.3f,1);13.1D("2Q",Z.1u.1w.1Q.1J.aF,1);if(Z.1e.4K&&Z.1e.2q<9){13.1D("9I",Z.1u.1w.1Q.1J.3f,1)}},2R:17(){13.1M("6G",Z.1u.1w.1Q.1J.3f);13.1M("5R",Z.1u.1w.1Q.1J.3f);13.1M("2Q",Z.1u.1w.1Q.1J.aF);if(Z.1e.4K&&Z.1e.2q<9){13.1M("9I",Z.1u.1w.1Q.1J.3f)}},aF:17(aa){aa.3J()},3f:17(ad){1c ac,aa,ab;aa=13.2a("1z:1Q:1v");if(ad.1y!="9I"&&ad.6B()!=aa.2p){1a}if(13.2a("1z:1Q:au")){13.2Y("1z:1Q:au");1a}if("6G"==ad.1y){ac=1t Z.1u.1w.1Q(13,ad);13.38("1z:1Q:9m",ac)}1j{if("5R"==ad.1y){ac=13.2a("1z:1Q:9m");if(!ac){1a}ab=ad.5Z();13.2Y("1z:1Q:9m");ac.43(ad);if(ad.2L-ac.2L<=aa.7l&&1p.8l(1p.4E(ab.x-ac.x,2)+1p.4E(ab.y-ac.y,2))<=W){13.2X("1Q",ac)}1m.2X("5R",ad)}1j{if(ad.1y=="9I"){ac=1t Z.1u.1w.1Q(13,ad);13.2X("1Q",ac)}}}}}})(S);(17(X){1c W=X.$;X.1u.1w.2I=1t X.3G(X.1Y(X.1u.1w,{1y:"2I",2j:"3D",5U:1n,3H:17(ab,aa,Z){1c Y=aa.5Z();13.x=Y.x;13.y=Y.y;13.2O=aa.2O;13.2M=aa.2M;13.2L=aa.2L;13.2p=aa.6B();13.4b=ab;13.43(aa);13.2j=Z}}));X.1u.1w.2I.1J={5y:17(){1c Z=X.1u.1w.2I.1J.dE.2D(13),Y=X.1u.1w.2I.1J.9r.2D(13);13.1D("6G",X.1u.1w.2I.1J.aA,1);13.1D("5R",X.1u.1w.2I.1J.9r,1);1m.1D("7U",Z,1);1m.1D("5R",Y,1);13.38("1z:2I:4G:1m:5w",Z);13.38("1z:2I:4G:1m:7a",Y)},2R:17(){13.1M("6G",X.1u.1w.2I.1J.aA);13.1M("5R",X.1u.1w.2I.1J.9r);W(1m).1M("7U",13.2a("1z:2I:4G:1m:5w")||X.$F);W(1m).1M("5R",13.2a("1z:2I:4G:1m:7a")||X.$F);13.2Y("1z:2I:4G:1m:5w");13.2Y("1z:2I:4G:1m:7a")},aA:17(Z){1c Y;if(1!=Z.6B()){1a}Z.3J();Y=1t X.1u.1w.2I(13,Z,"3D");13.38("1z:2I:3D",Y)},9r:17(Z){1c Y;Y=13.2a("1z:2I:3D");if(!Y){1a}Z.3J();Y=1t X.1u.1w.2I(13,Z,"9t");13.2Y("1z:2I:3D");13.2X("2I",Y)},dE:17(Z){1c Y;Y=13.2a("1z:2I:3D");if(!Y){1a}Z.3J();if(!Y.5U){Y.5U=1r;13.2X("2I",Y)}Y=1t X.1u.1w.2I(13,Z,"cP");13.2X("2I",Y)}}})(S);(17(X){1c W=X.$;X.1u.1w.4d=1t X.3G(X.1Y(X.1u.1w,{1y:"4d",74:1n,7k:1h,3H:17(aa,Z){1c Y=Z.5Z();13.x=Y.x;13.y=Y.y;13.2O=Z.2O;13.2M=Z.2M;13.2L=Z.2L;13.2p=Z.6B();13.4b=aa;13.43(Z)}}));X.1u.1w.4d.1J={1v:{7l:7n},5y:17(Y){13.38("1z:4d:1v",X.1Y(X.49(X.1u.1w.4d.1J.1v),Y||{}));13.1D("1Q",X.1u.1w.4d.1J.3f,1)},2R:17(){13.1M("1Q",X.1u.1w.4d.1J.3f)},3f:17(aa){1c Z,Y;Z=13.2a("1z:4d:1z");Y=13.2a("1z:4d:1v");if(!Z){Z=1t X.1u.1w.4d(13,aa);Z.7k=4H(17(){Z.74=1r;aa.5Q=X.$1n;13.2X("1Q",aa);13.2Y("1z:4d:1z")}.1E(13),Y.7l+10);13.38("1z:4d:1z",Z);aa.4R()}1j{3M(Z.7k);13.2Y("1z:4d:1z");if(!Z.74){Z.43(aa);aa.4R().2c();13.2X("4d",Z)}1j{}}}}})(S);(17(ac){1c ab=ac.$;17 W(ad){1a ad.2i?(("3B"===ad.2i||ad.5i===ad.2i)&&ad.9R):1===ad.2E.1I&&(ad.6p.1I?ad.6p[0].3K==ad.2E[0].3K:1r)}17 Y(ad){if(ad.2i){1a("3B"===ad.2i||ad.5i===ad.2i)?ad.9h:1h}1j{1a ad.2E[0].3K}}17 Z(ad){if(ad.2i){1a("3B"===ad.2i||ad.5i===ad.2i)?ad:1h}1j{1a ad.2E[0]}}ac.1u.1w.21=1t ac.3G(ac.1Y(ac.1u.1w,{1y:"21",id:1h,3H:17(ae,ad){1c af=Z(ad);13.id=af.9h||af.3K;13.x=af.5L;13.y=af.5I;13.5L=af.5L;13.5I=af.5I;13.2O=af.2O;13.2M=af.2M;13.2L=ad.2L;13.2p=0;13.4b=ae;13.43(ad)}}));1c X=10,aa=7n;ac.1u.1w.21.1J={5y:17(ad){13.1D(["5e",1k.2J.3j?"87":"7W"],ac.1u.1w.21.1J.7j,1);13.1D(["6e",1k.2J.3j?"6E":"6N"],ac.1u.1w.21.1J.6v,1);13.1D("2Q",ac.1u.1w.21.1J.av,1)},2R:17(){13.1M(["5e",1k.2J.3j?"87":"7W"],ac.1u.1w.21.1J.7j);13.1M(["6e",1k.2J.3j?"6E":"6N"],ac.1u.1w.21.1J.6v);13.1M("2Q",ac.1u.1w.21.1J.av)},av:17(ad){ad.3J()},7j:17(ad){if(!W(ad)){13.2Y("1z:21:1z");1a}13.38("1z:21:1z",1t ac.1u.1w.21(13,ad));13.38("1z:1Q:au",1r)},6v:17(ag){1c ae=ac.6K(),af=13.2a("1z:21:1z"),ad=13.2a("1z:21:1v");if(!af||!W(ag)){1a}13.2Y("1z:21:1z");if(af.id==Y(ag)&&ag.2L-af.2L<=aa&&1p.8l(1p.4E(Z(ag).5L-af.x,2)+1p.4E(Z(ag).5I-af.y,2))<=X){13.2Y("1z:1Q:9m");ag.2c();af.43(ag);13.2X("21",af)}}}})(S);M.1u.1w.3w=1t M.3G(M.1Y(M.1u.1w,{1y:"3w",74:1n,7k:1h,3H:17(X,W){13.x=W.x;13.y=W.y;13.2O=W.2O;13.2M=W.2M;13.2L=W.2L;13.2p=0;13.4b=X;13.43(W)}}));M.1u.1w.3w.1J={1v:{7l:b6},5y:17(W){13.38("1z:3w:1v",M.1Y(M.49(M.1u.1w.3w.1J.1v),W||{}));13.1D("21",M.1u.1w.3w.1J.3f,1)},2R:17(){13.1M("21",M.1u.1w.3w.1J.3f)},3f:17(Y){1c X,W;X=13.2a("1z:3w:1z");W=13.2a("1z:3w:1v");if(!X){X=1t M.1u.1w.3w(13,Y);X.7k=4H(17(){X.74=1r;Y.5Q=M.$1n;13.2X("21",Y)}.1E(13),W.7l+10);13.38("1z:3w:1z",X);Y.4R()}1j{3M(X.7k);13.2Y("1z:3w:1z");if(!X.74){X.43(Y);Y.4R().2c();13.2X("3w",X)}1j{}}}};(17(ab){1c aa=ab.$;17 W(ac){1a ac.2i?(("3B"===ac.2i||ac.5i===ac.2i)&&ac.9R):1===ac.2E.1I&&(ac.6p.1I?ac.6p[0].3K==ac.2E[0].3K:1r)}17 Y(ac){if(ac.2i){1a("3B"===ac.2i||ac.5i===ac.2i)?ac.9h:1h}1j{1a ac.2E[0].3K}}17 Z(ac){if(ac.2i){1a("3B"===ac.2i||ac.5i===ac.2i)?ac:1h}1j{1a ac.2E[0]}}1c X=10;ab.1u.1w.2s=1t ab.3G(ab.1Y(ab.1u.1w,{1y:"2s",2j:"3D",id:1h,5U:1n,3H:17(ae,ad,ac){1c af=Z(ad);13.id=af.9h||af.3K;13.2O=af.2O;13.2M=af.2M;13.5L=af.5L;13.5I=af.5I;13.x=af.5L;13.y=af.5I;13.2L=ad.2L;13.2p=0;13.4b=ae;13.43(ad);13.2j=ac}}));ab.1u.1w.2s.1J={5y:17(){1c ad=ab.1u.1w.2s.1J.9u.1E(13),ac=ab.1u.1w.2s.1J.6v.1E(13);13.1D(["5e",1k.2J.3j?"87":"7W"],ab.1u.1w.2s.1J.7j,1);13.1D(["6e",1k.2J.3j?"6E":"6N"],ab.1u.1w.2s.1J.6v,1);13.1D(["7S",1k.2J.3j?"6M":"7v"],ab.1u.1w.2s.1J.9u,1);13.38("1z:2s:4G:1m:5w",ad);13.38("1z:2s:4G:1m:7a",ac);aa(1m).1D(1k.2J.3j?"6M":"7v",ad,1);aa(1m).1D(1k.2J.3j?"6E":"6N",ac,1)},2R:17(){13.1M(["5e",1k.2J.3j?"87":"7W"],ab.1u.1w.2s.1J.7j);13.1M(["6e",1k.2J.3j?"6E":"6N"],ab.1u.1w.2s.1J.6v);13.1M(["7S",1k.2J.3j?"6M":"7v"],ab.1u.1w.2s.1J.9u);aa(1m).1M(1k.2J.3j?"6M":"7v",13.2a("1z:2s:4G:1m:5w")||ab.$F,1);aa(1m).1M(1k.2J.3j?"6E":"6N",13.2a("1z:2s:4G:1m:7a")||ab.$F,1);13.2Y("1z:2s:4G:1m:5w");13.2Y("1z:2s:4G:1m:7a")},7j:17(ad){1c ac;if(!W(ad)){1a}ac=1t ab.1u.1w.2s(13,ad,"3D");13.38("1z:2s:3D",ac)},6v:17(ad){1c ac;ac=13.2a("1z:2s:3D");if(!ac||!ac.5U||ac.id!=Y(ad)){1a}ac=1t ab.1u.1w.2s(13,ad,"9t");13.2Y("1z:2s:3D");13.2X("2s",ac)},9u:17(ad){1c ac;ac=13.2a("1z:2s:3D");if(!ac||!W(ad)){1a}if(ac.id!=Y(ad)){13.2Y("1z:2s:3D");1a}if(!ac.5U&&1p.8l(1p.4E(Z(ad).5L-ac.x,2)+1p.4E(Z(ad).5I-ac.y,2))>X){ac.5U=1r;13.2X("2s",ac)}if(!ac.5U){1a}ac=1t ab.1u.1w.2s(13,ad,"cP");13.2X("2s",ac)}}})(S);M.1u.1w.3N=1t M.3G(M.1Y(M.1u.1w,{1y:"3N",4f:1,aO:1,d4:1,2j:"fY",3H:17(X,W){13.2L=W.2L;13.2p=0;13.4b=X;13.x=W.4q[0].2O+(W.4q[1].2O-W.4q[0].2O)/2;13.y=W.4q[0].2M+(W.4q[1].2M-W.4q[0].2M)/2;13.cV=1p.8l(1p.4E(W.4q[0].2O-W.4q[1].2O,2)+1p.4E(W.4q[0].2M-W.4q[1].2M,2));13.43(W)},3T:17(W){1c X;13.2j="fZ";if(W.2E[0].3K!=13.5E[0].4q[0].3K||W.2E[1].3K!=13.5E[0].4q[1].3K){1a}X=1p.8l(1p.4E(W.2E[0].2O-W.2E[1].2O,2)+1p.4E(W.2E[0].2M-W.2E[1].2M,2));13.aO=13.4f;13.4f=X/13.cV;13.d4=13.4f/13.aO;13.x=W.2E[0].2O+(W.2E[1].2O-W.2E[0].2O)/2;13.y=W.2E[0].2M+(W.2E[1].2M-W.2E[0].2M)/2;13.43(W)}}));M.1u.1w.3N.1J={5y:17(){13.1D("5e",M.1u.1w.3N.1J.aN,1);13.1D("6e",M.1u.1w.3N.1J.aI,1);13.1D("7S",M.1u.1w.3N.1J.aK,1)},2R:17(){13.1M("5e",M.1u.1w.3N.1J.aN);13.1M("6e",M.1u.1w.3N.1J.aI);13.1M("7S",M.1u.1w.3N.1J.aK)},aN:17(X){1c W;if(X.4q.1I!=2){1a}X.3J();W=1t M.1u.1w.3N(13,X);13.38("1z:3N:1z",W)},aI:17(X){1c W;W=13.2a("1z:3N:1z");if(!W){1a}X.3J();13.2Y("1z:3N:1z")},aK:17(X){1c W;W=13.2a("1z:3N:1z");if(!W){1a}X.3J();W.3T(X);13.2X("3N",W)}};(17(ab){1c Z=ab.$;ab.1u.1w.4v=1t ab.3G(ab.1Y(ab.1u.1w,{1y:"4v",3H:17(ah,ag,aj,ad,ac,ai,ae){1c af=ag.5Z();13.x=af.x;13.y=af.y;13.2L=ag.2L;13.4b=ah;13.fC=aj||0;13.aL=ad||0;13.7M=ac||0;13.fI=ai||0;13.fi=ae||0;13.aJ=ag.aJ||0;13.by=1n;13.43(ag)}}));1c aa,X;17 W(){aa=1h}17 Y(ac,ad){1a(ac>50)||(1===ad&&!("9v"==ab.1e.4M&&ac<1))||(0===ac%12)||(0==ac%4.ks)}ab.1u.1w.4v.1J={9z:"kt"in 1m||ab.1e.2q>8?"ku":"kv",5y:17(){13.1D(ab.1u.1w.4v.1J.9z,ab.1u.1w.4v.1J.3f,1)},2R:17(){13.1M(ab.1u.1w.4v.1J.9z,ab.1u.1w.4v.1J.3f,1)},3f:17(ah){1c ai=0,af=0,ad=0,ac=0,ag,ae;if(ah.d8){ad=ah.d8*-1}if(ah.d6!==2G){ad=ah.d6}if(ah.d7!==2G){ad=ah.d7}if(ah.dc!==2G){af=ah.dc*-1}if(ah.7M){ad=-1*ah.7M}if(ah.aL){af=ah.aL}if(0===ad&&0===af){1a}ai=0===ad?af:ad;ac=1p.1W(1p.3x(ad),1p.3x(af));if(!aa||ac<aa){aa=ac}ag=ai>0?"6j":"3U";ai=1p[ag](ai/aa);af=1p[ag](af/aa);ad=1p[ag](ad/aa);if(X){3M(X)}X=4H(W,7n);ae=1t ab.1u.1w.4v(13,ah,ai,af,ad,0,aa);ae.by=Y(aa,ah.aJ||0);13.2X("4v",ae)}}})(S);M.9v=M.$(1k);M.dj=M.$(1m);1a S})();(17(I){if(!I){5N"6D 6F 6A"}1c H=I.$;1c G=1k.kr||1k.kq||1h;w.a7=1t I.3G({24:1h,2l:1n,1v:{9A:I.$F,69:I.$F,aR:I.$F,5S:I.$F,7A:I.$F,cT:I.$F,9C:1n,dh:1r},1C:1h,8d:1h,aS:0,7s:{9A:17(J){if(J.4b&&(7n===J.4b.9E||cS===J.4b.9E)&&J.km){13.1v.9A.1E(1h,(J.2h-(13.1v.dh?13.aS:0))/J.kl).2C(1);13.aS=J.2h}},69:17(J){if(J){H(J).2c()}13.8c();if(13.2l){1a}13.2l=1r;13.8b();!13.1v.9C&&13.1v.9A.1E(1h,1).2C(1);13.1v.69.1E(1h,13).2C(1);13.1v.7A.1E(1h,13).2C(1)},aR:17(J){if(J){H(J).2c()}13.8c();13.2l=1n;13.8b();13.1v.aR.1E(1h,13).2C(1);13.1v.7A.1E(1h,13).2C(1)},5S:17(J){if(J){H(J).2c()}13.8c();13.2l=1n;13.8b();13.1v.5S.1E(1h,13).2C(1);13.1v.7A.1E(1h,13).2C(1)}},9D:17(){H(["5M","aQ","d5"]).3b(17(J){13.24.1D(J,13.7s["8r"+J].2D(13).df(1))},13)},8c:17(){if(13.8d){3v{3M(13.8d)}3X(J){}13.8d=1h}H(["5M","aQ","d5"]).3b(17(K){13.24.1M(K)},13)},8b:17(){13.1F();if(13.24.2a("1t")){1c J=13.24.4B;13.24.2R().2Y("1t").1x({2e:"kn",1H:"2w"});J.57()}},d2:17(K){1c L=1t 9G(),J;H(["aQ","ko"]).3b(17(M){L["8r"+M]=H(17(N){13.7s["8r"+M].2b(13,N)}).1E(13)},13);L.5S=H(17(){13.1v.cT.1E(1h,13).2C(1);13.1v.9C=1n;13.9D();13.24.1U=K}).1E(13);L.69=H(17(){if(7n!==L.9E&&cS!==L.9E){13.7s.5S.2b(13);1a}J=L.kp;13.9D();if(G&&!I.1e.4K&&!("9X"===I.1e.4M&&I.1e.4D<kw)){13.24.3Y("1U",G.kx(J))}1j{13.24.1U=K}}).1E(13);L.aZ("kE",K);L.kF="kG";L.kH()},3H:17(K,J){13.1v=I.1Y(13.1v,J);13.24=H(K)||I.$1t("24",{},{"1W-1f":"3q","1W-1g":"3q"}).1Z(I.$1t("2Z").1A("3z-aq-24").1x({2e:"5z",1H:-e8,1f:10,1g:10,5n:"3k"}).1Z(1m.3A)).38("1t",1r);if(I.1e.2K.cX&&13.1v.9C&&"1O"==I.1P(K)){13.d2(K);1a}1c L=17(){if(13.cY()){13.7s.69.2b(13)}1j{13.7s.5S.2b(13)}L=1h}.1E(13);13.9D();if("1O"==I.1P(K)){13.24.1U=K}1j{if(I.1e.4K&&5==I.1e.4D&&I.1e.2q<9){13.24.d0=17(){if(/2h|8f/.3d(13.24.8v)){13.24.d0=1h;L&&L()}}.1E(13)}13.24.1U=K.2n("1U")}13.24&&13.24.8f&&L&&(13.8d=L.2C(2F))},kD:17(){13.8c();13.8b();13.2l=1n;1a 13},cY:17(){1c J=13.24;1a(J.8U)?(J.8U>0):(J.8v)?("8f"==J.8v):J.1f>0},1F:17(){1a 13.1C||(13.1C={1f:13.24.8U||13.24.1f,1g:13.24.cm||13.24.1g})}})})(w);(17(H){if(!H){5N"6D 6F 6A"}if(H.5v){1a}1c G=H.$;H.5v=1t H.3G({3H:17(J,I){1c K;13.el=H.$(J);13.1v=H.1Y(13.1v,I);13.5u=1n;13.72=13.be;K=H.5v.7Q[13.1v.1X]||13.1v.1X;if("17"===H.1P(K)){13.72=K}1j{13.5K=13.8i(K)||13.8i("67")}if("1O"==H.1P(13.1v.78)){13.1v.78="kC"===13.1v.78?6r:5t(13.1v.78)||1}},1v:{dG:60,5c:8u,1X:"67",78:1,51:"er",dL:H.$F,7g:H.$F,bV:H.$F,dQ:H.$F,9i:1n,ky:1n},4i:1h,5K:1h,72:1h,kJ:17(I){13.1v.1X=I;I=H.5v.7Q[13.1v.1X]||13.1v.1X;if("17"===H.1P(I)){13.72=I}1j{13.72=13.be;13.5K=13.8i(I)||13.8i("67")}},4L:17(K){1c I=/\\%$/,J;13.4i=K;13.ax=0;13.2j=0;13.kA=0;13.9M={};13.7E="7E"===13.1v.51||"7E-4J"===13.1v.51;13.7D="7D"===13.1v.51||"7D-4J"===13.1v.51;1T(J in 13.4i){I.3d(13.4i[J][0])&&(13.9M[J]=1r);if("4J"===13.1v.51||"7E-4J"===13.1v.51||"7D-4J"===13.1v.51){13.4i[J].4J()}}13.aG=H.6K();13.dN=13.aG+13.1v.5c;13.1v.dL.2b();if(0===13.1v.5c){13.6H(1);13.1v.7g.2b()}1j{13.9g=13.dM.1E(13);if(!13.1v.9i&&H.1e.2K.4N){13.5u=H.1e.4N.2b(1k,13.9g)}1j{13.5u=13.9g.dJ(1p.5x(aH/13.1v.dG))}}1a 13},ay:17(){if(13.5u){if(!13.1v.9i&&H.1e.2K.4N&&H.1e.9l){H.1e.9l.2b(1k,13.5u)}1j{dk(13.5u)}13.5u=1n}},2c:17(I){I=H.3n(I)?I:1n;13.ay();if(I){13.6H(1);13.1v.7g.2C(10)}1a 13},aw:17(K,J,I){K=2u(K);J=2u(J);1a(J-K)*I+K},dM:17(){1c J=H.6K(),I=(J-13.aG)/13.1v.5c,K=1p.6j(I);if(J>=13.dN&&K>=13.1v.78){13.ay();13.6H(1);13.1v.7g.2C(10);1a 13}if(13.7E&&13.ax<K){1T(1c L in 13.4i){13.4i[L].4J()}}13.ax=K;if(!13.1v.9i&&H.1e.2K.4N){13.5u=H.1e.4N.2b(1k,13.9g)}13.6H((13.7D?K:0)+13.72(I%1))},6H:17(I){1c J={},L=I;1T(1c K in 13.4i){if("2r"===K){J[K]=1p.5x(13.aw(13.4i[K][0],13.4i[K][1],I)*2F)/2F}1j{J[K]=13.aw(13.4i[K][0],13.4i[K][1],I);13.9M[K]&&(J[K]+="%")}}13.1v.bV(J,13.el);13.7x(J);13.1v.dQ(J,13.el)},7x:17(I){1a 13.el.1x(I)},8i:17(I){1c J,K=1h;if("1O"!==H.1P(I)){1a 1h}4y(I){1B"8Z":K=G([0,0,1,1]);1G;1B"67":K=G([0.25,0.1,0.25,1]);1G;1B"67-in":K=G([0.42,0,1,1]);1G;1B"67-dP":K=G([0,0,0.58,1]);1G;1B"67-in-dP":K=G([0.42,0,0.58,1]);1G;1B"cl":K=G([0.47,0,0.kB,0.kk]);1G;1B"cb":K=G([0.39,0.kj,0.k1,1]);1G;1B"k2":K=G([0.k3,0.aT,0.55,0.95]);1G;1B"c5":K=G([0.55,0.k4,0.68,0.53]);1G;1B"cc":K=G([0.25,0.46,0.45,0.94]);1G;1B"k0":K=G([0.jZ,0.dp,0.jV,0.jU]);1G;1B"c7":K=G([0.55,0.jW,0.jX,0.19]);1G;1B"ca":K=G([0.jY,0.61,0.dn,1]);1G;1B"k6":K=G([0.k7,0.9n,0.dn,1]);1G;1B"kf":K=G([0.dH,0.dp,0.dR,0.22]);1G;1B"kg":K=G([0.dU,0.84,0.44,1]);1G;1B"kh":K=G([0.77,0,0.8t,1]);1G;1B"ki":K=G([0.ke,0.aT,0.kd,0.k9]);1G;1B"k8":K=G([0.23,1,0.32,1]);1G;1B"ka":K=G([0.86,0,0.kb,1]);1G;1B"c2":K=G([0.95,0.aT,0.kc,0.kI]);1G;1B"c3":K=G([0.19,1,0.22,1]);1G;1B"l7":K=G([1,0,0,1]);1G;1B"l5":K=G([0.6,0.l4,0.98,0.la]);1G;1B"ld":K=G([0.l6,0.82,0.dU,1]);1G;1B"kO":K=G([0.kN,0.l2,0.15,0.86]);1G;1B"c8":K=G([0.6,-0.28,0.bJ,0.9n]);1G;1B"cp":K=G([0.8t,0.8G,0.32,1.b2]);1G;1B"kT":K=G([0.68,-0.55,0.l0,1.55]);1G;1R:I=I.4w(/\\s/g,"");if(I.3t(/^4W-4T\\((?:-?[0-9\\.]{0,}[0-9]{1,},){3}(?:-?[0-9\\.]{0,}[0-9]{1,})\\)$/)){K=I.4w(/^4W-4T\\s*\\(|\\)$/g,"").7Z(",");1T(J=K.1I-1;J>=0;J--){K[J]=2u(K[J])}}}1a G(K)},be:17(U){1c I=0,T=0,Q=0,V=0,S=0,O=0,P=13.1v.5c;17 N(W){1a((I*W+T)*W+Q)*W}17 M(W){1a((V*W+S)*W+O)*W}17 K(W){1a(3*I*W+2*T)*W+Q}17 R(W){1a 1/(7n*W)}17 J(W,X){1a M(L(W,X))}17 L(ad,ae){1c ac,ab,aa,X,W,Z;17 Y(af){if(af>=0){1a af}1j{1a 0-af}}1T(aa=ad,Z=0;Z<8;Z++){X=N(aa)-ad;if(Y(X)<ae){1a aa}W=K(aa);if(Y(W)<0.bG){1G}aa=aa-X/W}ac=0;ab=1;aa=ad;if(aa<ac){1a ac}if(aa>ab){1a ab}5J(ac<ab){X=N(aa);if(Y(X-ad)<ae){1a aa}if(ad>X){ac=aa}1j{ab=aa}aa=(ab-ac)*0.5+ac}1a aa}Q=3*13.5K[0];T=3*(13.5K[2]-13.5K[0])-Q;I=1-Q-T;O=3*13.5K[1];S=3*(13.5K[3]-13.5K[1])-O;V=1-O-S;1a J(U,R(P))}});H.5v.7Q={8Z:"8Z",kY:"cl",kX:"cb",kU:"c2",kW:"c3",l9:"c5",l3:"cc",l8:"c7",lc:"ca",kP:"c8",kQ:"cp",cE:17(J,I){I=I||[];1a 1p.4E(2,10*--J)*1p.eV(20*J*1p.fa*(I[0]||1)/3)},kR:17(J,I){1a 1-H.5v.7Q.cE(1-J,I)},cH:17(K){1T(1c J=0,I=1;1;J+=I,I/=2){if(K>=(7-4*J)/11){1a I*I-1p.4E((11-6*J-11*K)/4,2)}}},kL:17(I){1a 1-H.5v.7Q.cH(1-I)},3q:17(I){1a 0}}})(w);(17(H){if(!H){5N"6D 6F 6A"}if(H.97){1a}1c G=H.$;H.97=1t H.3G(H.5v,{3H:17(I,J){13.bh=I;13.1v=H.1Y(13.1v,J);13.5u=1n;13.$3L.3H()},4L:17(M){1c I=/\\%$/,L,K,J=M.1I;13.bi=M;13.9K=1t 5Y(J);1T(K=0;K<J;K++){13.9K[K]={};1T(L in M[K]){I.3d(M[K][L][0])&&(13.9K[K][L]=1r);if("4J"===13.1v.51||"7E-4J"===13.1v.51||"7D-4J"===13.1v.51){13.bi[K][L].4J()}}}13.$3L.4L([]);1a 13},6H:17(I){1T(1c J=0;J<13.bh.1I;J++){13.el=H.$(13.bh[J]);13.4i=13.bi[J];13.9M=13.9K[J];13.$3L.6H(I)}}})})(w);(17(H){if(!H){5N"6D 6F 6A";1a}if(H.bm){1a}1c G=H.$;H.bm=17(J,K){1c I=13.7y=H.$1t("2Z",1h,{2e:"5z","z-8O":cz}).1A("kZ");H.$(J).1D("7u",17(){I.1Z(1m.3A)});H.$(J).1D("8n",17(){I.2R()});H.$(J).1D("7U",17(P){1c R=20,O=H.$(P).5Z(),N=I.1F(),M=H.$(1k).1F(),Q=H.$(1k).6L();17 L(U,S,T){1a(T<(U-S)/2)?T:((T>(U+S)/2)?(T-S):(U-S)/2)}I.1x({1N:Q.x+L(M.1f,N.1f+2*R,O.x-Q.x)+R,1H:Q.y+L(M.1g,N.1g+2*R,O.y-Q.y)+R})});13.9Y(K)};H.bm.2A.9Y=17(I){13.7y.4l&&13.7y.at(13.7y.4l);13.7y.3s(1m.bW(I))}})(w);(17(H){if(!H){5N"6D 6F 6A";1a}if(H.kV){1a}1c G=H.$;H.9W=17(L,K,J,I){13.9Q=1h;13.5g=H.$1t("bU",1h,{2e:"5z","z-8O":cz,5m:"3k",2r:0.8}).1A(I||"").1Z(J||1m.3A);13.dV(L);13.5A(K)};H.9W.2A.5A=17(I){13.5g.5A();13.9Q=13.4m.1E(13).2C(H.bl(I,kS))};H.9W.2A.4m=17(I){3M(13.9Q);13.9Q=1h;if(13.5g&&!13.bk){13.bk=1t w.5v(13.5g,{5c:H.bl(I,eR),7g:17(){13.5g.57();4O 13.5g;13.bk=1h}.1E(13)}).4L({2r:[13.5g.3m("2r"),0]})}};H.9W.2A.dV=17(I){13.5g.4l&&13.7y.at(13.5g.4l);13.5g.3s(1m.bW(I))}})(w);(17(H){if(!H){5N"6D 6F 6A"}if(H.7f){1a}1c K=H.$,G=1h,O={"3o":1,4g:2,65:3,"17":4,1O:2F},I={"3o":17(R,Q,P){if("3o"!=H.1P(Q)){if(P||"1O"!=H.1P(Q)){1a 1n}1j{if(!/^(1r|1n)$/.3d(Q)){1a 1n}1j{Q=Q.cx()}}}if(R.4c("2z")&&!K(R["2z"]).5p(Q)){1a 1n}G=Q;1a 1r},1O:17(R,Q,P){if("1O"!==H.1P(Q)){1a 1n}1j{if(R.4c("2z")&&!K(R["2z"]).5p(Q)){1a 1n}1j{G=""+Q;1a 1r}}},65:17(S,R,Q){1c P=1n,U=/%$/,T=(H.1P(R)=="1O"&&U.3d(R));if(Q&&!"65"==9N R){1a 1n}R=2u(R);if(9T(R)){1a 1n}if(9T(S.7B)){S.7B=cu.kM}if(9T(S.b9)){S.b9=cu.kK}if(S.4c("2z")&&!K(S["2z"]).5p(R)){1a 1n}if(S.7B>R||R>S.b9){1a 1n}G=T?(R+"%"):R;1a 1r},4g:17(S,Q,P){if("1O"===H.1P(Q)){3v{Q=1k.l1.kz(Q)}3X(R){1a 1n}}if(H.1P(Q)==="4g"){G=Q;1a 1r}1j{1a 1n}},"17":17(R,Q,P){if(H.1P(Q)==="17"){G=Q;1a 1r}1j{1a 1n}}},J=17(U,T,Q){1c S;S=U.4c("34")?U.34:[U];if("4g"!=H.1P(S)){1a 1n}1T(1c R=0,P=S.1I-1;R<=P;R++){if(I[S[R].1y](S[R],T,Q)){1a 1r}}1a 1n},M=17(U){1c S,R,T,P,Q;if(U.4c("34")){P=U.34.1I;1T(S=0;S<P;S++){1T(R=S+1;R<P;R++){if(O[U.34[S]["1y"]]>O[U.34[R].1y]){Q=U.34[S];U.34[S]=U.34[R];U.34[R]=Q}}}}1a U},N=17(S){1c R;R=S.4c("34")?S.34:[S];if("4g"!=H.1P(R)){1a 1n}1T(1c Q=R.1I-1;Q>=0;Q--){if(!R[Q].1y||!O.4c(R[Q].1y)){1a 1n}if(H.3n(R[Q]["2z"])){if("4g"!==H.1P(R[Q]["2z"])){1a 1n}1T(1c P=R[Q]["2z"].1I-1;P>=0;P--){if(!I[R[Q].1y]({1y:R[Q].1y},R[Q]["2z"][P],1r)){1a 1n}}}}if(S.4c("1R")&&!J(S,S["1R"],1r)){1a 1n}1a 1r},L=17(P){13.4I={};13.1v={};13.cC(P)};H.1Y(L.2A,{cC:17(R){1c Q,P,S;1T(Q in R){if(!R.4c(Q)){7N}P=(Q+"").4Y().5F();if(!13.4I.4c(P)){13.4I[P]=M(R[Q]);if(!N(13.4I[P])){5N"jS iK iJ iL \'"+Q+"\' iM in "+R}13.1v[P]=2G}}},7x:17(Q,P){Q=(Q+"").4Y().5F();if(H.1P(P)=="1O"){P=P.4Y()}if(13.4I.4c(Q)){G=P;if(J(13.4I[Q],P)){13.1v[Q]=G}G=1h}},eY:17(P){P=(P+"").4Y().5F();if(13.4I.4c(P)){1a H.3n(13.1v[P])?13.1v[P]:13.4I[P]["1R"]}},8j:17(Q){1T(1c P in Q){13.7x(P,Q[P])}},f3:17(){1c Q=H.1Y({},13.1v);1T(1c P in Q){if(2G===Q[P]&&2G!==13.4I[P]["1R"]){Q[P]=13.4I[P]["1R"]}}1a Q},9j:17(P){K(P.7Z(";")).3b(K(17(Q){Q=Q.7Z(":");13.7x(Q.6I().4Y(),Q.7d(":"))}).1E(13))},9e:17(P){P=(P+"").4Y().5F();1a 13.4I.4c(P)},iN:17(P){P=(P+"").4Y().5F();1a 13.9e(P)&&H.3n(13.1v[P])},2R:17(P){P=(P+"").4Y().5F();if(13.9e(P)){4O 13.1v[P];4O 13.4I[P]}}});H.7f=L}(w));(17(K){if(!K){5N"6D 6F 6A";1a}1c J=K.$;if(K.9s){1a}1c I="aY://aX.aV.aW/iI/7i",H="aY://aX.aV.aW/iH/iD";1c G=17(L){13.6w={};13.7o=J(L);13.7c=J(1m.8R(I,"7i"));13.7c.3Y("1f",13.7o.8U||13.7o.1f);13.7c.3Y("1g",13.7o.cm||13.7o.1g);13.1i=J(1m.8R(I,"1i"));13.1i.iC(H,"6W",13.7o.2n("1U"));13.1i.3Y("1f","2F%");13.1i.3Y("1g","2F%");13.1i.1Z(13.7c)};G.2A.6Y=17(){1a 13.7c};G.2A.5j=17(L){if(1p.5x(L)<1){1a}if(!13.6w.5j){13.6w.5j=J(1m.8R(I,"2W"));13.6w.5j.3Y("id","eu");13.6w.5j.bB(J(1m.8R(I,"iE")).b0({"in":"iF",eU:L}));13.6w.5j.1Z(13.7c);13.1i.3Y("2W","26(#eu)")}1j{13.6w.5j.4l.3Y("eU",L)}1a 13};K.9s=G}(w));1c r=(17(I){1c H=I.$;1c G=17(K,J){13.3h={8A:"3z",3y:"8q",2e:"2U",1C:{iG:"2y",1f:"2w",1g:"2w"},iO:["1g","1f"]};13.3L=K;13.4u=1h;13.6R=1h;13.2N=1h;13.2P={};13.f4=[];13.6q=1h;13.b1=1h;13.5C=1h;13.3h=I.1Y(13.3h,J);13.3g=13.3h.8A+"-bZ";13.8D=13.3h.8A+"-6Q";13.f1()};G.2A={f1:17(){13.4u=I.$1t("2Z").1A(13.3g).1A(13.3g+"-"+13.3h.3y).1x({5m:"3k"});13.6R=I.$1t("2Z").1A(13.3g+"-6R").1Z(13.4u);13.4u.1Z(13.3L);H(["4x","4z"]).3b(17(J){13.2P[J]=I.$1t("2p").1A(13.3g+"-2p").1A(13.3g+"-2p-"+J).1Z(13.4u).1D("1Q 21",(17(L,K){H(L).5E[0].2c().4R();H(L).5d();13.6d(K)}).2D(13,J))}.1E(13));13.2P.4x.1A(13.3g+"-2p-4P");13.2N=I.$1t("iP").1D("1Q 21",17(J){J.2c()})},da:17(K){1c J=I.$1t("iX").1A(13.8D).3s(K).1Z(13.2N);1t I.a7(K,{7A:13.91.1E(13)});13.f4.36(J);1a J},dv:17(K){1c J=13.6q||13.2N.8H(13.8D+"-6C")[0];if(J){H(J).1S(13.8D+"-6C")}13.6q=H(K);if(!13.6q){1a}13.6q.1A(13.8D+"-6C");13.6d(13.6q)},bz:17(){if(13.6R!==13.2N.4B){H(13.2N).1Z(13.6R);13.eT();H(1k).1D("6S",13.5C=13.91.1E(13));13.bz.1E(13).2C(1);1a}1c J=13.3L.1F();if(J.1g>0&&J.1g>J.1f){13.8s("4S")}1j{13.8s("8q")}13.91();13.4u.1x({5m:""})},2c:17(){if(13.5C){H(1k).1M("6S",13.5C)}13.4u.57()},6d:17(W,M){1c O={x:0,y:0},Z="4S"==13.3h.3y?"1H":"1N",R="4S"==13.3h.3y?"1g":"1f",N="4S"==13.3h.3y?"y":"x",V=13.2N.4B.1F()[R],S=13.2N.4B.8h(),L=13.2N.1F()[R],U,J,Y,P,K,T,Q,X=[];if(13.b1){13.b1.2c()}1j{13.2N.1x("1X",I.1e.7b+63.76(32)+"79")}if(2G===M){M=8u}U=13.2N.8h();if("1O"==I.1P(W)){O[N]=("4z"==W)?1p.1W(U[Z]-S[Z]-V,V-L):1p.2g(U[Z]-S[Z]+V,0)}1j{if("62"==I.1P(W)){J=W.1F();Y=W.8h();O[N]=1p.2g(0,1p.1W(V-L,U[Z]+V/2-Y[Z]-J[R]/2))}1j{1a}}if(I.1e.6f&&"6J"==I.1e.4M||I.1e.2q&&I.1e.2q<10){if("1O"==I.1P(W)&&O[N]==U[Z]-S[Z]){U[Z]+=0===U[Z]-S[Z]?30:-30}O["7R-"+Z]=[((L<=V)?0:(U[Z]-S[Z])),O[N]];4O O.x;4O O.y;if(!13.b7){13.b7=1t I.97([13.2N],{5c:eR})}X.36(O);13.b7.4L(X);Q=O["7R-"+Z][1]}1j{13.2N.1x({1X:I.1e.7b+63.76(32)+M+"6n 67",2f:"4o("+O.x+"2y, "+O.y+"2y, 0)"});Q=O[N]}if(Q>=0){13.2P.4x.1A(13.3g+"-2p-4P")}1j{13.2P.4x.1S(13.3g+"-2p-4P")}if(Q<=V-L){13.2P.4z.1A(13.3g+"-2p-4P")}1j{13.2P.4z.1S(13.3g+"-2p-4P")}Q=1h},eT:17(){1c L,K,M,T,S,V,N,R,Q,U,aa,X,Y,W={x:0,y:0},J,P,O=b6,Z=17(ad){1c ac,ab=0;1T(ac=1.5;ac<=90;ac+=1.5){ab+=(ad*1p.eV(ac/1p.fa/2))}(T<0)&&(ab*=(-1));1a ab};S=H(17(ab){W={x:0,y:0};J="4S"==13.3h.3y?"1H":"1N";P="4S"==13.3h.3y?"1g":"1f";L="4S"==13.3h.3y?"y":"x";X=13.2N.4B.1F()[P];aa=13.2N.1F()[P];M=X-aa;if(M>=0){1a}if(ab.2j=="3D"){if(2G===Y){Y=0}13.2N.3C("1X",I.1e.7b+63.76(32)+"cs");V=ab[L];Q=ab.y;R=ab.x;U=1n}1j{if("9t"==ab.2j){if(U){1a}N=Z(1p.3x(T));Y+=N;(Y<=M)&&(Y=M);(Y>=0)&&(Y=0);W[L]=Y;13.2N.3C("1X",I.1e.7b+63.76(32)+O+"6n  4W-4T(.0, .0, .0, 1)");13.2N.3C("2f","4o("+W.x+"2y, "+W.y+"2y, 5T)");T=0}1j{if(U){1a}if("8q"==13.3h.3y&&1p.3x(ab.x-R)>1p.3x(ab.y-Q)||"4S"==13.3h.3y&&1p.3x(ab.x-R)<1p.3x(ab.y-Q)){ab.2c();T=ab[L]-V;Y+=T;W[L]=Y;13.2N.3C("2f","4o("+W.x+"2y, "+W.y+"2y, 5T)");if(Y>=0){13.2P.4x.1A(13.3g+"-2p-4P")}1j{13.2P.4x.1S(13.3g+"-2p-4P")}if(Y<=M){13.2P.4z.1A(13.3g+"-2p-4P")}1j{13.2P.4z.1S(13.3g+"-2p-4P")}}1j{U=1r}}V=ab[L]}}).1E(13);13.2N.1D("2s",S)},91:17(){1c M,L,J,K=13.3L.1F();if(K.1g>0&&K.1g>K.1f){13.8s("4S")}1j{13.8s("8q")}M="4S"==13.3h.3y?"1g":"1f";L=13.2N.1F()[M];J=13.4u.1F()[M];if(L<=J){13.4u.1A("6O-2P");13.2N.3C("1X","").1F();13.2N.3C("2f","4o(0,0,0)");13.2P.4x.1A(13.3g+"-2p-4P");13.2P.4z.1S(13.3g+"-2p-4P")}1j{13.4u.1S("6O-2P")}if(13.6q){13.6d(13.6q,0)}},8s:17(J){if("4S"!==J&&"8q"!==J||J==13.3h.3y){1a}13.4u.1S(13.3g+"-"+13.3h.3y);13.3h.3y=J;13.4u.1A(13.3g+"-"+13.3h.3y);13.2N.3C("1X","3q").1F();13.2N.3C("2f","").3C("7R","")}};1a G})(w);1c h=y.$;if(!y.1e.8p){y.1e.8p=y.8M("2f").8Q()}1c o={4j:{1y:"1O","2z":["2Q","7r"],"1R":"7r"},48:{34:[{1y:"1O","2z":["1l","2H","4e","3P"],"1R":"1l"},{1y:"3o","2z":[1n]}],"1R":"1l"},e6:{34:[{1y:"1O","2z":["2w"]},{1y:"65",7B:1}],"1R":"2w"},e7:{34:[{1y:"1O","2z":["2w"]},{1y:"65",7B:1}],"1R":"2w"},br:{1y:"1O","1R":"2S"},iY:{1y:"65",7B:0,"1R":15},7I:{34:[{1y:"1O","2z":["2U","1H","3P"],"1R":"3P"},{1y:"3o","2z":[1n]}],"1R":"3P"},2t:{34:[{1y:"1O","2z":["1k","eC","3P"]},{1y:"3o","2z":[1n]}],"1R":"1k"},6k:{34:[{1y:"1O","2z":["1l","2H","3P"],"1R":"1l"},{1y:"3o","2z":[1n]}],"1R":"1l"},3O:{1y:"1O","2z":["2Q","3i"],"1R":"2Q"},3R:{1y:"3o","1R":1r},dC:{1y:"3o","1R":1r},3e:{34:[{1y:"1O","2z":["c1","3i","3P"]},{1y:"3o","2z":[1n]}],"1R":"c1"},ds:{1y:"3o","1R":1r},cL:{1y:"3o","1R":1r},c4:{1y:"3o","1R":1n},8V:{1y:"3o","1R":1n},b8:{1y:"3o","1R":1r},ec:{1y:"3o","1R":1n},eX:{1y:"3o","1R":1r},bN:{1y:"1O","2z":["2Q","7r"],"1R":"2Q"},5r:{1y:"1O"},bT:{1y:"1O","1R":"iZ 6u 1l"},9P:{1y:"1O","1R":"e2 6u 1l"},9c:{1y:"1O","1R":"e2 6u 2t"},j0:{1y:"1O","1R":"iW"},iV:{1y:"1O","1R":"iR"},iQ:{1y:"1O","1R":"iS"}};1c l={48:{34:[{1y:"1O","2z":["1l","2H","3P"],"1R":"1l"},{1y:"3o","2z":[1n]}],"1R":"1l"},3O:{1y:"1O","2z":["2Q"],"1R":"2Q"},9c:{1y:"1O","1R":"iT 6u 2t"},bT:{1y:"1O","1R":"iU 6u 1l"},9P:{1y:"1O","1R":"iB 21 6u 1l"}};1c n="8I",B="1q",b=20,z=["eg","ek","dA","du","cj","e9"];1c t,p={},D=h([]),F,e=1k.iA||1,E,x=1r,f=y.1e.2K.8X?"4o(":"9o(",A=y.1e.2K.8X?",0)":")",m=1h;1c q=(17(){1c H,K,J,I,G;K=1m;K=K.ih;K=K.ig;if(K.4h(v("ev 9b"))==-1&&K.4h(v("ii}ij`i 9b"))==-1){G=["2o.f|ik,ic~4!!ib ev 9b!i7~b{}!,.a`i6,i8} lb{|&\'5,.i5|i9,ia`e,.}il,im|4.g`fk|iw.jT#ix|iy`4.`a`k5,iz.iv.^b{}(z|iu.z|iq.io|}ga`2!ir","#is",11,"er","","it","2F%"]}1a G})();17 v(I){1c H,G;H="";1T(G=0;G<I.1I;G++){H+=63.76(14^I.eL(G))}1a H}17 i(I){1c H=[],G=1h;(I&&(G=h(I)))&&(H=D.2W(17(J){1a J.40===G}));1a H.1I?H[0]:1h}17 a(I){1c H=h(1k).1F(),G=h(1k).6L();I=I||0;1a{1N:I,2S:H.1f-I,1H:I,2U:H.1g-I,x:G.x,y:G.y}}17 c(G){1a(G.2i&&("3B"===G.2i||G.2i===G.5i))||(/3B/i).3d(G.1y)}17 g(G){1a G.2i?(("3B"===G.2i||G.5i===G.2i)&&G.9R):1===G.2E.1I&&(G.6p.1I?G.6p[0].3K==G.2E[0].3K:1r)}17 s(){1c I=y.$A(29),H=I.6I(),G=p[H];if(G){1T(1c J=0;J<G.1I;J++){G[J].6c(1h,I)}}}17 C(){1c K=29[0],G,J,H=[];3v{do{J=K.am;if(/^[A-ar-z]*$/.3d(J)){if(G=K.2n("id")){if(/^[A-ar-z][-A-ar-j1-j2]*/.3d(G)){J+="#"+G}}H.36(J)}K=K.4B}5J(K&&K!==1m.6b);H=H.4J();y.7p(H.7d(" ")+"> .1q-89 > 24",{1f:"2F% !2v;"},"1q-ei-6x",1r)}3X(I){}}17 u(){1c H=1h,I=1h,G=17(){1k.jB(1m.3A.8C,1m.3A.8a);1k.ak(1t 1u("6S"))};I=fc(17(){1c L=1k.3y==90||1k.3y==-90,K=1k.52,J=(L?f6.jC:f6.jD)*0.85;if((H==1h||H==1n)&&((L&&K<J)||(!L&&K<J))){H=1r;G()}1j{if((H==1h||H==1r)&&((L&&K>J)||(!L&&K>J))){H=1n;G()}}},jE);1a I}17 d(){y.7p(".3z-3k-6R, .3z-aq-24",{7q:"eQ !2v","2g-1g":"0 !2v","2g-1f":"0 !2v","1W-1g":"3q !2v","1W-1f":"3q !2v",1f:"eW !2v",1g:"eW !2v",2e:"5z !2v",1H:"-bu !2v",1N:"0 !2v",5n:"3k !2v","-3V-2f":"3q !2v",2f:"3q !2v","-3V-1X":"3q !2v",1X:"3q !2v"},"9F-9B-6x");y.7p(".3z-aq-24 24",{7q:"eH-eQ !2v",3E:"0 !2v",73:"0 !2v","2g-1g":"0 !2v","2g-1f":"0 !2v","1W-1g":"3q !2v","1W-1f":"3q !2v","-3V-2f":"3q !2v",2f:"3q !2v","-3V-1X":"3q !2v",1X:"3q !2v"},"9F-9B-6x");if(y.1e.6T){y.7p(".3a-3z .1q-2t .1q-2t-bg",{7q:"3q !2v"},"9F-9B-6x")}if(y.1e.6T&&("4r"!==y.1e.3F||44==y.1e.7z)){y.7p(".3a-3z .1q-1l-1k.1q-2H, .3a-3z .1q-1l-1k.1q-2H:jA",{"3E-jz":"0 !2v"},"9F-9B-6x")}}1c k=17(J,K,H,I,G){13.1K={1U:1h,26:1h,6a:1,1d:1h,2j:0,1C:{1f:0,1g:0},2h:1n};13.1l={1U:1h,26:1h,6a:1,1d:1h,2j:0,1C:{1f:0,1g:0},2h:1n};if("9w"==y.1P(J)){13.1K=J}1j{if("1O"==y.1P(J)){13.1K.26=y.6l(J)}}if("9w"==y.1P(K)){13.1l=K}1j{if("1O"==y.1P(K)){13.1l.26=y.6l(K)}}13.3p=H;13.1v=I;13.4n=G;13.7F=1h;13.4a=1h;13.1d=1h};k.2A={9y:17(I,H,G){1c J=I.8k("24")[0];if(G){13.1K.1d=J||y.$1t("24").1Z(I)}if(e>1){13.1K.26=I.2n("3Z-1i-2x");if(13.1K.26){13.1K.6a=2}13.1l.26=I.2n("3Z-1l-1i-2x");if(13.1l.26){13.1l.6a=2}}13.1K.1U=I.2n("3Z-1i")||I.2n("jv")||(J?J.2n("1U"):1h);if(13.1K.1U){13.1K.1U=y.6l(13.1K.1U)}13.1K.26=13.1K.26||13.1K.1U;if(13.1K.26){13.1K.26=y.6l(13.1K.26)}13.1l.1U=I.2n("3Z-1l-1i")||I.2n("6W");if(13.1l.1U){13.1l.1U=y.6l(13.1l.1U)}13.1l.26=13.1l.26||13.1l.1U;if(13.1l.26){13.1l.26=y.6l(13.1l.26)}13.3p=I.2n("3Z-3p")||I.2n("7J")||H;13.4a=I.2n("3Z-4a");13.4n=I;1a 13},bj:17(G){1c H=1h;if(29.1I>1&&"17"===y.1P(29[1])){H=29[1]}if(0!==13[G].2j){if(13[G].2h){13.69(H)}1a}if(13[G].26&&13[G].1d&&!13[G].1d.2n("1U")&&!13[G].1d.2n("ju")){13[G].1d.3Y("1U",13[G].26)}13[G].2j=1;1t y.a7(13[G].1d||13[G].26,{7A:h(17(I){13[G].2h=1r;13[G].2j=I.2l?2:-1;if(I.2l){13[G].1C=I.1F();if(!13[G].1d){13[G].1d=h(I.24);13[G].1d.2n("2m");13[G].1d.5G("2m");13[G].1C.1f/=13[G].6a;13[G].1C.1g/=13[G].6a}1j{13[G].1d.1x({"1W-1f":13[G].1C.1f,"1W-1g":13[G].1C.1g});if(13[G].1d.8P&&13[G].1d.8P!=13[G].1d.1U){13[G].26=13[G].1d.8P}1j{if(y.6l(13[G].1d.2n("1U")||"")!=13[G].26){13[G].1d.3Y("1U",13[G].26)}}}}13.69(H)}).1E(13)})},8S:17(){13.bj("1K",29[0])},bt:17(){13.bj("1l",29[0])},5M:17(){13.7F=1h;if(29.1I>0&&"17"===y.1P(29[0])){13.7F=29[0]}13.8S();13.bt()},69:17(G){if(G){G.2b(1h,13)}if(13.7F&&13.1K.2h&&13.1l.2h){13.7F.2b(1h,13);13.7F=1h;1a}},2h:17(){1a(13.1K.2h&&13.1l.2h)},2l:17(){1a(2===13.1K.2j&&2===13.1l.2j)},8e:17(H){1c G="1K"==H?"1l":"1K";if(!13[H].2h||(13[H].2h&&2===13[H].2j)){1a 13[H].26}1j{if(!13[G].2h||(13[G].2h&&2===13[G].2j)){1a 13[G].26}1j{1a 1h}}},6Y:17(H){1c G="1K"==H?"1l":"1K";if(!13[H].2h||(13[H].2h&&2===13[H].2j)){1a 13[H].1d}1j{if(!13[G].2h||(13[G].2h&&2===13[G].2j)){1a 13[G].1d}1j{1a 1h}}},1F:17(H){1c G="1K"==H?"1l":"1K";if(!13[H].2h||(13[H].2h&&2===13[H].2j)){1a 13[H].1C}1j{if(!13[G].2h||(13[G].2h&&2===13[G].2j)){1a 13[G].1C}1j{1a{1f:0,1g:0}}}},jw:17(H){1c G="1K"==H?"1l":"1K";if(!13[H].2h||(13[H].2h&&2===13[H].2j)){1a 13[H].6a}1j{if(!13[G].2h||(13[G].2h&&2===13[G].2j)){1a 13[G].6a}1j{1a 1}}},6Z:17(G){13.1d=13.6Y(G)}};1c j=17(H,G){13.1v=1t y.7f(o);13.1o=h(17(){if(29.1I>1){1a 13.7x(29[0],29[1])}1j{1a 13.eY(29[0])}}).1E(13.1v);13.f2=1t y.7f(l);13.3I=[];13.1i=1h;13.6X=1h;13.40=h(H).1D("3D jx 2Q",17(I){I.2c()});13.id=1h;13.1d=1h;13.6t=1h;13.8N=1h;13.6y=1h;13.7w={1f:0,1g:0};13.1C={1f:0,1g:0};13.2d={1f:0,1g:0};13.3l={1f:0,1g:0};13.2k={1H:0,1N:0,2U:0,2S:0};13.2l=1n;13.1L=1n;13.5q=1h;13.bS=1h;13.5C=h(17(){if(13.1L){13.1i.1d.1x({"1W-1g":1p.2g(13.1i.1F("1l").1g,13.6U())});13.1i.1d.1x({"1W-1f":1p.2g(13.1i.1F("1l").1f,13.7G())})}13.a0(29[0])}).1E(13);13.bD=h(17(I){3M(13.bS);13.bS=h(13.5C).2C(10,"6d"===I.1y)}).2D(13);13.1s=1h;13.1b=1h;13.3e=1h;13.bY=1h;13.71=0;13.bA=1r;13.6h=1h;13.5H=1h;13.6Q=1h;13.3c=1h;13.3W=1h;13.3R=1h;13.5l=1h;13.7O=1h;13.4V=1h;13.7P=1h;13.5f=1h;13.4k=1h;13.4Q=[];13.2P={};13.4L(G)};j.2A={eS:17(G){13.1v.8j(1k[B+"7f"]||{});13.1v.9j(13.40.2n("3Z-1v")||"");if(y.1e.3a){13.1v.8j(13.f2.f3());13.1v.8j(1k[B+"jy"]||{});13.1v.9j(13.40.2n("3Z-3a-1v")||"")}if("1O"==y.1P(G)){13.1v.9j(G||"")}1j{13.1v.8j(G||{})}if(13.1o("5r")){13.1o("5r",13.1o("5r").4w(","," "))}if(1n===13.1o("7I")){13.1o("7I","3P")}if(1n===13.1o("3e")){13.1o("3e","3P")}4y(13.1o("3e")){1B"3P":13.71=0;1G;1B"c1":13.71=2;1G;1B"3i":13.71=6r;1G}if("3P"===13.1o("48")){13.1o("48",1n)}if("3P"===13.1o("2t")){13.1o("2t",1n)}if("3P"===13.1o("6k")){13.1o("6k",1n)}if(y.1e.3a&&"1l"==13.1o("48")&&"2B"==13.1o("br")){if(13.1o("2t")){13.1o("48",1n)}1j{13.1o("4j","2Q")}}},4L:17(H){1c G;13.eS(H);if(x&&!13.1o("b8")){1a}13.id=13.40.2n("id")||"1q-"+1p.6j(1p.6V()*y.6K());13.40.3Y("id",13.id);13.1d=y.$1t("89").1A("1q-89");C(13.40);13.6t=13.40.f8("24");13.8N=13.6t?13.6t.2n("1U"):1h;13.6y=h(13.40).2n("7J");h(13.40).5G("7J");13.6X=1t k().9y(13.40,13.6y,1r);13.1i=13.6X;13.1d.fe(13.1i.1K.1d).1A(13.1o("5r"));if(1r!==13.1o("ec")){13.1d.1D("jF",17(I){I.2c();1a 1n})}13.1d.1A("1q-"+13.1o("4j")+"-1l");if(!13.1o("2t")){13.1d.1A("1q-6O-2t")}13.1s={1d:y.$1t("2Z",{"3Q":"1q-1s"},{1H:0}).1Z(13.1d),1i:y.$1t("24",{1U:"3Z:1i/dZ;e5,e3/em="},{2e:"5z",1H:0,1N:0}),1f:0,1g:0,33:{x:0,y:0},5o:{x:0,y:0},1C:{1f:0,1g:0},3E:{x:0,y:0},dx:0,dy:0,66:1n,4m:17(){if(y.1e.2K.2f){13.1d.1x({2f:"9o(-bu,-bu)"})}1j{13.1d.1x({1H:-e8})}}};13.1s.4m();13.1s.1d.3s(13.1s.1i);13.1b={1d:y.$1t("2Z",{"3Q":"1q-1l-1k"},{1H:-eG}).1A(13.1o("5r")).1Z(F),1i:y.$1t("24",{1U:"3Z:1i/dZ;e5,e3/em="},{2e:"5z"}),9V:0,1f:0,1g:0,59:0,52:0,1C:{1f:"2w",6z:"2y",1g:"2w",6P:"2y"},1V:13.1o("48"),2e:13.1o("br"),7C:13.1o("4j"),4p:1n,2T:1n,3r:1n,5b:1n,6g:h(17(){13.1b.5b=1n!==29[0];13.1d[13.1b.5b?"1S":"1A"]("1q-6O-1l")}).1E(13),4m:h(17(){1c I=h(13.1d).2a("cr");13.1b.1d.1M("2V");13.1b.1d.1x({1H:-eG}).1Z(F);13.1b.1d.1S("1q-a2 1q-p-"+("1l"==13.1b.1V?13.1b.2e:13.1b.1V));if(!13.1L&&I){I.2R()}13.1b.1i.2n("2m");13.1b.1i.5G("2m")}).1E(13),9d:h(17(I){13.1d[1n===I?"1A":"1S"]("1q-6O-1l");13.1d["2H"==I?"1A":"1S"]("1q-2H-1l");13.1b.1d["2H"==I?"1A":"1S"]("1q-2H");13.1b.1d["4e"==I?"1A":"1S"]("1q-4e");if("1l"!=I){13.1d.1S("1q-2B-1l");13.1b.1d.1S("1q-2B")}13.1b.1V=I;if(1n===I){13.1b.6g(1n)}1j{if("4e"===I){13.1b.6g(1r)}}}).1E(13)};13.1b.1d.3s(13.1b.1i);13.1b.9d(13.1o("48"));13.1b.1i.5G("1f");13.1b.1i.5G("1g");if("2G"!==9N(q)){h(13.1d).38("cr",y.$1t(((1p.6j(1p.6V()*bq)+1)%2)?"bU":"2Z").1x({7q:"eH",5n:"3k",5m:"6m",jG:q[1],jO:q[2],ew:q[3],jP:"jQ-jR",2e:"5z",1H:8,1N:8,7R:"2w",1f:"2w",jN:"2S","jM-1g":"jI",eF:jH}).5s(v(q[0])));if(h(h(13.1d).2a("cr")).8k("a")[0]){h(h(h(13.1d).2a("cr")).8k("a")[0]).1D("21 1Q",17(I){I.5d();1k.aZ(13.6W)})}}if((G=(""+13.1o("e6")).3t(/^([0-9]+)?(2y|%)?$/))){13.1b.1C.6z=G[2]||"2y";13.1b.1C.1f=(2u(G[1])||"2w")}if((G=(""+13.1o("e7")).3t(/^([0-9]+)?(2y|%)?$/))){13.1b.1C.6P=G[2]||"2y";13.1b.1C.1g=(2u(G[1])||"2w")}if("2H"==13.1b.1V){13.1d.1A("1q-2H-1l");13.1b.1d.1A("1q-2H");if("2w"===13.1b.1C.1f){13.1b.1C.6z="%";13.1b.1C.1f=70}if("2w"===13.1b.1C.1g){13.1b.1C.6P="%"}}1j{if(13.1o("1l-2e").3t(/^#/)){if(13.1b.4p=h(13.1o("1l-2e").4w(/^#/,""))){if(h(13.1b.4p).1F().1g>50){if("2w"===13.1b.1C.1f){13.1b.1C.6z="%";13.1b.1C.1f=2F}if("2w"===13.1b.1C.1g){13.1b.1C.6P="%";13.1b.1C.1g=2F}}}1j{13.1o("1l-2e","2S")}}if("4e"==13.1b.1V){if("2w"===13.1b.1C.1f){13.1b.1C.6z="2y"}if("2w"===13.1b.1C.1g){13.1b.1C.6P="2y"}}if("1l"==13.1b.1V){if("2w"===13.1b.1C.1f||"2B"==13.1o("1l-2e")){13.1b.1C.6z="%";13.1b.1C.1f=2F}if("2w"===13.1b.1C.1g||"2B"==13.1o("1l-2e")){13.1b.1C.6P="%";13.1b.1C.1g=2F}}if("2B"==13.1o("1l-2e")){13.1d.1A("1q-2B-1l")}}13.1b.2e=13.1b.4p?"4p":13.1o("1l-2e");13.1s.3E.x=2u(13.1s.1d.3m("3E-1N-1f")||"0");13.1s.3E.y=2u(13.1s.1d.3m("3E-1H-1f")||"0");13.1i.8S(17(){if(2!==13.1i.1K.2j){1a}13.1i.6Z("1K");13.1C=13.1i.1d.1F();13.cB();13.2l=1r;if(1r===13.1o("8V")){13.6i()}}.1E(13));if(1r!==13.1o("8V")||"3i"==13.1o("4j")){13.1i.5M(h(17(I){13.7m(I,1r)}).1E(13));13.5H=h(13.8x).1E(13).2C(8B)}13.eb()},2c:17(){13.cn();if(13.1b){13.1b.1d.57()}if(13.4k){13.4k.2c();13.4k=1h}if(13.3c){13.3c.57()}if(13.1L){h(y.1e.41()).1x({5n:""})}h(13.3I).3b(17(G){h(G.4n).1S("1q-6Q-6C").1S(13.1o("5r")||"1q-$jJ-6x-3Q-6u-2R$")},13);if(13.6t){13.40.3s(13.6t);if(13.8N){13.6t.3Y("1U",13.8N)}}if(13.6y){13.40.3Y("7J",13.6y)}if(13.1d){13.1d.57()}},7m:17(I,J){1c H=13.5O,G=13.1i;13.5O=1h;if(2!==I.1l.2j){13.1i=I;13.2l=1r;13.1b.6g(1n);1a}13.1i=I;13.1i.6Z(13.1L?"1l":"1K");13.1b.1i.1U=13.1i.8e("1l");13.1b.1d.1S("1q-4e");13.1b.1i.2n("2m");13.1b.1i.5G("2m");13.1b.1d.1F();4H(h(17(){1c L=13.1b.1i.1F(),K;13.3l=13.1i.1F("1l");if(L.1f*L.1g>1&&L.1f*L.1g<13.3l.1f*13.3l.1g){13.3l=L}13.2d=y.49(13.3l);if("4e"==13.1b.1V){13.1b.1d.1A("1q-4e")}13.cg();13.1s.1i.1U=13.1i.1d.8P||13.1i.1d.1U;13.1b.6g(13.1b.1V&&!(13.1L&&"4e"==13.1b.1V));13.2l=1r;13.5q=1h;13.5C();13.1d.1A("1q-2l");13.c0();if(G!==13.1i){s("ek",13.id,G.4n,13.1i.4n);if(13.8W){K=13.8W;13.8W=1h;13.3T(K.1i,K.fb)}}1j{s("eg",13.id)}if(H){13.1d.2X(H.1y,H)}1j{if(13.1L&&"3i"==13.1o("3O")){13.4A()}1j{if(!!J){13.6i()}}}}).1E(13),jK)},eb:17(){1c H=13.id,G,I;I=1t ea("1l\\\\-id(\\\\s+)?:(\\\\s+)?"+H+"($|;)");if(y.1e.2K.bQ){G=y.$A(1m.bP(\'[3Z-1l-id="\'+13.id+\'"]\'));G=h(G).5D(y.$A(1m.bP(\'[bL*="1l-id"]\')).2W(17(J){1a I.3d(J.2n("bL")||"")}))}1j{G=y.$A(1m.9x("A")).2W(17(J){1a H==J.2n("3Z-1l-id")||I.3d(J.2n("bL")||"")})}h(G).3b(17(K){1c J,L;h(K).1D("2Q",17(M){M.3J()});J=1t k().9y(K,13.6y);if(13.1i.1l.1U.4F(J.1l.1U)&&13.1i.1K.1U.4F(J.1K.1U)){h(J.4n).1A("1q-6Q-6C");J=13.1i;J.4n=K}if(!J.4a&&13.1i.4a){J.4a=13.1i.4a}L=h(17(){13.3T(J)}).1E(13);h(K).1D("6G",17(M){if("fd"in M){M.fd()}},5);h(K).1D("21 "+("7r"==13.1o("bN")?"7u 8n":"1Q"),h(17(N,M){if(13.5V){3M(13.5V)}13.5V=1n;if("7u"==N.1y){13.5V=h(L).2C(M)}1j{if("21"==N.1y||"1Q"==N.1y){L()}}}).2D(13,60)).1A(13.1o("5r")).1A("1q-6Q");J.8S();if(1r!==13.1o("8V")){J.bt()}13.3I.36(J)},13)},3T:17(G,H){if(!13.2l){13.8W={1i:G,fb:H};1a}if(!G||G===13.1i){1a 1n}13.4t(1h,1r);13.2l=1n;13.1d.1S("1q-2l");13.5H=h(13.8x).1E(13).2C(8B);G.5M(h(17(O){1c I,P,N,K,J,M,L=(y.1e.2q<10)?"1F":"7Y";13.c0();O.6Z("1K");if(!O.1d){13.2l=1r;13.1d.1A("1q-2l");1a}13.9J(O);I=13.1i.1d[L]();if(13.1L){O.6Z("1l");N=y.$1t("2Z").1A("1q-2t-bg");if(y.1e.2K.8g||y.1e.2q<10){N.3s(y.$1t("24",{1U:O.8e("1l")}).1x({2r:0}))}1j{N.3s(1t y.9s(O.1d).5j(b).6Y().1x({2r:0}))}h(N).1x({"z-8O":-99}).1Z(13.3c)}if(13.1L&&"1l"===13.1b.1V&&"3i"===13.1o("3O")){h(O.1d).1x({2r:0}).1Z(13.1d);P=I;J=[O.1d,13.1i.1d];M=[{2r:[0,1]},{2r:[1,0]}];h(O.1d).1x({"1W-1f":1p.2g(O.1F("1l").1f,13.7G()),"1W-1g":1p.2g(O.1F("1l").1g,13.6U())})}1j{13.1d.1x({1g:13.1d[L]().1g});13.1i.1d.1x({2e:"5z",1H:0,1N:0,2U:0,2S:0,1f:"2F%",1g:"2F%","1W-1f":"","1W-1g":""});h(O.1d).1x({"1W-1f":1p.2g(O.1F(13.1L?"1l":"1K").1f,13.1L?13.7G():6r),"1W-1g":1p.2g(O.1F(13.1L?"1l":"1K").1g,13.1L?13.6U():6r),2e:"jL",1H:0,1N:0,2r:0,2f:""}).1Z(13.1d);P=h(O.1d)[L]();if(!H){h(O.1d).1x({"2g-1f":I.1f,1g:I.1g,"1W-1f":I.1f,"1W-1g":""})}13.1d.1x({1g:"",5n:""}).1F();h(O.1d).1F();J=[O.1d,13.1i.1d];M=[y.1Y({2r:[0,1]},H?{4f:[0.6,1]}:{"2g-1f":[I.1f,P.1f],"1W-1f":[I.1f,P.1f],1g:[I.1g,P.1g]}),{2r:[1,0]}]}if(13.1L){if(13.3W.4l&&N.4l){K=h(13.3W.4l).3m("2r");if(y.1e.6f){J=J.5D([N.4l]);M=M.5D([{2r:[0.bK,K]}])}1j{J=J.5D([N.4l,13.3W.4l]);M=M.5D([{2r:[0.bK,K]},{2r:[K,0.bK]}])}}}1t y.97(J,{5c:(H||13.1o("eX"))?H?8B:jt:0,1X:H?"4W-4T(0.8t, 0.8G, 0.b4, 1.b2)":(I.1f==P.1f)?"8Z":"4W-4T(0.25, .1, .1, 1)",7g:h(17(){13.1i.1d.2R().2n("2m");13.1i.1d.5G("2m");h(O.1d).1x(13.1L?{1f:"2w",1g:"2w"}:{1f:"",1g:""}).1x({"2g-1f":"","2g-1g":"",2r:"","1W-1f":1p.2g(O.1F(13.1L?"1l":"1K").1f,13.1L?13.7G():6r),"1W-1g":1p.2g(O.1F(13.1L?"1l":"1K").1g,13.1L?13.6U():6r)});if(13.1L){13.3W.2R();13.3W=2G;13.3W=N.3C("z-8O",-2F);h(13.3W.4l).1x({2r:""});if(13.3R){if(O.3p){if(O.4a){13.3R.5s("").3s(y.$1t("a",{6W:O.4a}).1D("21 1Q",13.9a.1E(13)).5s(O.3p))}1j{13.3R.5s(O.3p).1A("1q-5A")}}1j{13.3R.1S("1q-5A")}}}13.7m(O)}).1E(13),bV:h(17(Q,R){if(2G!==Q.4f){R.3C("2f","4f("+Q.4f+")")}})}).4L(M)}).1E(13))},9J:17(H){1c G=1n;h(13.3I).3b(17(I){h(I.4n).1S("1q-6Q-6C");if(I===H){G=1r}});if(G&&H.4n){h(H.4n).1A("1q-6Q-6C")}if(13.4k){13.4k.dv(H.db)}},cg:17(G){if(13.1i.3p&&"3P"!==13.1o("7I")&&"2H"!==13.1b.1V){if(!13.1b.3p){13.1b.3p=y.$1t("2Z",{"3Q":"1q-3p"}).1Z(13.1b.1d.1A("3p-"+13.1o("7I")))}13.1b.3p.5s(13.1i.3p)}},6i:17(G,J,H){1c I;if(!13.1L){if(13.71<=0){1a}if(1r!==H){13.71--}}if(2G===J||1h===J){if(!13.1b.2T&&!13.1b.3r){if(13.1o("48")&&13.1b.5b){if("7r"==13.1b.7C){J=13.1o("bT")}1j{if("2Q"==13.1b.7C){J=13.1o("9P")}}}1j{J=13.1o("2t")?13.1o("9c"):""}}1j{J=13.1o("2t")?13.1o("9c"):""}}if(!J){13.bF();1a}I=13.1d;if(!13.3e){13.3e=y.$1t("2Z",{"3Q":"1q-3e"});13.bY=y.$1t("bU",{"3Q":"1q-3e-js"}).3s(1m.bW(J)).1Z(13.3e);h(13.3e).1Z(13.1d)}1j{h(13.bY).5s(J)}13.3e.1x({"1X-bM":""}).1S("1q-3e-3k");if(13.1L){I=13.4V}1j{if((13.1b.2T||13.1b.3r)&&"2H"!==13.1b.1V&&"2B"==13.1b.2e){I=13.1b.1d}}if(1r===G){4H(h(17(){13.3e.1A("1q-3e-3k")}).1E(13),16)}13.3e.1Z(I)},bF:17(){if(13.3e){13.3e.1x({"1X-bM":"cs"}).1A("1q-3e-3k")}},8x:17(){if(!13.6h){13.6h=y.$1t("2Z",{"3Q":"1q-jb"});13.1d.3s(13.6h);13.6h.1F()}13.6h.1A("c6")},c0:17(){3M(13.5H);13.5H=1h;if(13.6h){h(13.6h).1S("c6")}},7e:17(I,M){1c L=y.49(13.1b.1C),K=(!13.1L&&13.1b.4p)?h(13.1b.4p).1F():{1f:0,1g:0},H,G,J=13.1C,N={x:0,y:0};M=M||13.1b.2e;13.7w=13.1i.1d.1F();13.1C=13.1i.1d.1F();13.2k=13.1i.1d.7Y();if(!K.1g){K=13.1C}if(1n===13.1o("cL")||1n===13.1b.1V||"4e"===13.1b.1V){I=1n}if("4e"==13.1b.1V){if("2w"===L.1f){L.1f=13.3l.1f}if("2w"===L.1g){L.1g=13.3l.1g}}if(13.1L&&"2H"==13.1b.1V){L.1f=70;L.1g="2w"}if("2H"==13.1b.1V&&"2w"===L.1g){13.1b.1f=2u(L.1f/2F)*1p.2g(K.1f,K.1g);13.1b.1g=13.1b.1f}1j{if("1l"==13.1b.1V&&"2B"==M){13.1C=13.1d.1F();K=13.1C;13.2k=13.1d.7Y();13.1b.1f=K.1f;13.1b.1g=K.1g}1j{13.1b.1f=("%"===L.6z)?2u(L.1f/2F)*K.1f:5t(L.1f);13.1b.1g=("%"===L.6P)?2u(L.1g/2F)*K.1g:5t(L.1g)}}if("4e"==13.1b.1V){G=1p.2g(1p.2g(13.1b.1f/13.3l.1f,13.1b.1g/13.3l.1g),1);13.1b.1f=13.3l.1f*G;13.1b.1g=13.3l.1g*G}13.1b.1f=1p.3U(13.1b.1f);13.1b.1g=1p.3U(13.1b.1g);13.1b.9V=13.1b.1f/13.1b.1g;13.1b.1d.1x({1f:13.1b.1f,1g:13.1b.1g});if(I){K=13.1L?13.3c.1F():13.1b.1d.1F();if(!13.1L&&(13.7w.1f*13.7w.1g)/(13.3l.1f*13.3l.1g)>0.8){13.2d.1f=1.5*13.3l.1f;13.2d.1g=1.5*13.3l.1g}1j{13.2d=y.49(13.3l)}}if(1n!==13.1b.1V&&!13.1b.2T&&!(13.1L&&"3i"==13.1o("3O"))){if((13.7w.1f*13.7w.1g)/(13.2d.1f*13.2d.1g)>0.8){13.2d=y.49(13.3l);13.1b.6g(1n)}1j{13.1b.6g(1r)}}13.1b.1i.1x({1f:13.2d.1f,1g:13.2d.1g});H=13.1b.1d.88();13.1b.59=1p.3U(H.1f);13.1b.52=1p.3U(H.1g);13.1s.1f=1p.3U(13.1b.59/(13.2d.1f/13.1C.1f));13.1s.1g=1p.3U(13.1b.52/(13.2d.1g/13.1C.1g));13.1s.1d.1x({1f:13.1s.1f,1g:13.1s.1g});13.1s.1i.1x(13.1C);y.1Y(13.1s,13.1s.1d.1F());if(13.1b.2T){3M(13.4X);13.4X=1h;if(13.1s.66){13.1s.33.x*=(13.1C.1f/J.1f);13.1s.33.y*=(13.1C.1g/J.1g);N.x=13.1s.5o.x;N.y=13.1s.5o.y}1j{N.x=13.2k.1N+13.1s.1f/2+(13.1s.33.x*(13.1C.1f/J.1f));N.y=13.2k.1H+13.1s.1g/2+(13.1s.33.y*(13.1C.1g/J.1g))}13.7H(1h,N)}},a0:17(K){1c N,M,G,L,J,I,H=h(13.1d).2a("cr");G=a(5);J=13.1b.2e;L=13.1L?"2B":13.1b.4p?"4p":13.1o("1l-2e");I=13.1L&&"1l"==13.1b.1V?13.3c:1m.3A;if(13.1L){G.y=0;G.x=0}if(!K){13.7e(1r,L)}N=13.2k.1H;if("2H"!==13.1b.1V){if(K){13.7e(1n);1a}4y(L){1B"2B":1B"4p":N=0;M=0;1G;1B"1H":N=13.2k.1H-13.1b.1g-13.1o("1l-56");if(G.1H>N){N=13.2k.2U+13.1o("1l-56");L="2U"}M=13.2k.1N;1G;1B"2U":N=13.2k.2U+13.1o("1l-56");if(G.2U<N+13.1b.1g){N=13.2k.1H-13.1b.1g-13.1o("1l-56");L="1H"}M=13.2k.1N;1G;1B"1N":M=13.2k.1N-13.1b.1f-13.1o("1l-56");if(G.1N>M&&G.2S>=13.2k.2S+13.1o("1l-56")+13.1b.1f){M=13.2k.2S+13.1o("1l-56");L="2S"}1G;1B"2S":1R:M=13.2k.2S+13.1o("1l-56");if(G.2S<M+13.1b.1f&&G.1N<=13.2k.1N-13.1b.1f-13.1o("1l-56")){M=13.2k.1N-13.1b.1f-13.1o("1l-56");L="1N"}1G}4y(13.1o("1l-2e")){1B"1H":1B"2U":if(G.1H>N||G.2U<N+13.1b.1g){L="2B"}1G;1B"1N":1B"2S":if(G.1N>M||G.2S<M+13.1b.1f){L="2B"}1G}13.1b.2e=L;if(!13.1b.3r&&!13.1b.2T){if(y.1e.3a&&!13.1L&&"1l"==13.1b.1V){if(13.1o("2t")){13.1b.6g("2B"!==L)}1j{if("2Q"!==13.1o("4j")){13.1b.7C="2B"===L?"2Q":13.1o("4j");13.8K();13.8T();13.8F("2Q"===13.1b.7C);13.8z("2Q"===13.1b.7C&&!13.1o("2t"))}}13.6i(1n,1h,1r)}1a}13.7e(1n);if(K){1a}if("4p"==L){I=13.1b.4p;G.y=0;G.x=0}if("2B"==L){if("4e"!==13.1b.1V){13.1b.1d.1A("1q-2B");13.1d.1A("1q-2B-1l")}13.1s.4m();N=13.2k.1H+G.y;M=13.2k.1N+G.x;if(!13.1L&&y.1e.2q&&y.1e.2q<11){N=0;M=0;I=13.1d}}1j{N+=G.y;M+=G.x;13.1d.1S("1q-2B-1l");13.1b.1d.1S("1q-2B")}13.1b.1d.1x({1H:N,1N:M})}1j{13.7e(1n);if(y.1e.2q&&y.1e.2q<11){I=13.1d}}13.1b.1d[13.1L?"1A":"1S"]("1q-1L");if(!13.1L&&H){H.1Z("1l"==13.1b.1V&&"2B"==L?13.1b.1d:13.1d,((1p.6j(1p.6V()*bq)+1)%2)?"1H":"2U")}13.1b.1d.1Z(I)},cd:17(M){1c I,G,K,J,L=1n,H=M.by?5:3/54;h(M).2c();H=(2F+H*1p.3x(M.7M))/2F;if(M.7M<0){H=1/H}if("2H"==13.1b.1V){G=1p.1W(2F,1p.5x(13.1b.1f*H));G=1p.2g(G,13.1C.1f*0.9);K=G/13.1b.9V;13.1b.1f=1p.3U(G);13.1b.1g=1p.3U(K);13.1b.1d.1x({1f:13.1b.1f,1g:13.1b.1g});I=13.1b.1d.88();13.1b.59=1p.3U(I.1f);13.1b.52=1p.3U(I.1g);L=1r}1j{if(!13.1L&&"1l"==13.1b.1V){G=1p.1W(50,1p.5x(13.1s.1f*H));G=1p.2g(G,13.1C.1f*0.9);K=G/13.1b.9V;13.2d.1f=1p.3U((13.1b.59/G)*13.1C.1f);13.2d.1g=1p.3U((13.1b.52/K)*13.1C.1g);13.1b.1i.1x({1f:13.2d.1f,1g:13.2d.1g})}1j{1a}}J=h(1k).6L();13.1s.1f=1p.3U(13.1b.59/(13.2d.1f/13.1C.1f));13.1s.1g=1p.3U(13.1b.52/(13.2d.1g/13.1C.1g));13.1s.1d.1x({1f:13.1s.1f,1g:13.1s.1g});y.1Y(13.1s,13.1s.1d.1F());if(13.1b.2T){3M(13.4X);13.4X=1h;if(L){13.4X=1r}13.7H(1h,{x:M.x-J.x,y:M.y-J.y});if(L){13.4X=1h}}},8F:17(I){1c H,G=I?"3w 1Q":"5e"+(!y.1e.3a?(1k.2J.3j?" 6M":1k.2J.bH?" 7v":" 7U"):""),J=13.1d.2a("1q:5a:4A:fn",(!I)?h(17(K){H=(y.1e.2q<9)?y.1Y({},K):K;if(!13.5q){3M(13.5q);13.5q=4H(h(17(){13.4A(H)}).1E(13),ja)}}).2D(13):h(13.4A).2D(13));13.1d.38("1q:5a:4A:1z",G).1D(G,J,10)},8K:17(H){1c G=13.1d.2a("1q:5a:4A:1z"),I=13.1d.2a("1q:5a:4A:fn");13.1d.1M(G,I);13.1d.2Y("1q:5a:4A:fn")},8z:17(H){1c G=H?"3w 1Q":"6e"+(!y.1e.3a?(1k.2J.3j?" bC":1k.2J.bH?" cG":" 8n"):""),I=13.1d.2a("1q:5a:4t:fn",h(17(J){if(c(J)&&!g(J)){1a}if(13.1b.1d!==J.81()&&!(("2B"==13.1b.2e||"2H"==13.1b.1V)&&13.1b.1d.a1(J.81()))&&!13.1d.a1(J.81())){13.4t(J)}}).2D(13));13.1d.38("1q:5a:4t:1z",G).1D(G,I,20)},8T:17(){1c G=13.1d.2a("1q:5a:4t:1z"),H=13.1d.2a("1q:5a:4t:fn");13.1d.1M(G,H);13.1d.2Y("1q:5a:4t:fn")},cB:17(){13.dO=13.5w.1E(13);13.1d.1D(["5e",1k.2J.3j?"87":"7W"],h(17(G){if((y.1e.6T||"6J"===y.1e.4M&&y.1e.6f)&&13.1o("48")&&"2Q"!==13.1o("4j")&&"5e"===G.1y){G.3J();if(y.1e.6f){G.5d()}}if(!13.1b.2T){1a}if("2B"===13.1b.2e){13.1s.5o=G.7V()}}).2D(13),10);13.1d.1D(["6e",1k.2J.3j?"6E":"6N"],h(17(G){if(c(G)&&g(G)){13.1s.7h=1n}}).2D(13),10);13.1d.1D("7S "+("6J"===y.1e.4M?"":1k.2J.3j?"6M":1k.2J.bH?"7v":"7U"),h(13.7H).2D(13));if(13.1o("48")){13.8F("2Q"===13.1o("4j"));13.8z("2Q"===13.1o("4j")&&!13.1o("2t"))}13.1d.1D("6G",17(G){G.5d()},10).1D("1Q",h(17(G){13.1d.bx("cM","2Q");if(13.1L){13.3c.2X("1Q",G)}}).1E(13),15);if(13.1o("2t")){13.1d.1D("21 1Q",h(13.2t).2D(13),15)}1j{13.1d.1D("21 1Q",h(13.9a).2D(13),15)}if(13.3I.1I>1){13.bp()}if(!y.1e.3a&&13.1o("c4")){13.1d.1D("4v",13.cd.2D(13))}h(1k).1D(y.1e.3a?"6S":"6S 6d",13.bD)},cn:17(){if(13.1d){13.1d.1M("4v")}h(1k).1M("6S 6d",13.bD);h(13.3I).3b(17(G){h(G.4n).bE()})},4A:17(M){1c N,L,J,K,G,H=0,I=0;if(!13.2l||!13.1b.5b||13.1b.2T||13.1b.3r){if(!13.1i.2h()){if(M){13.5O=y.1Y({},M);M.4R()}13.1i.5M(13.7m.1E(13));if(!13.5H){13.5H=h(13.8x).1E(13).2C(8B)}}1a}if(M&&"6M"==M.1y&&"3B"==M.2i){1a}if(!13.1o("48")&&13.1o("2t")&&!13.1L){13.1b.2T=1r;1a}13.1b.3r=1r;if(13.1L&&"1l"==13.1b.1V){K=13.1i.1d.7L();13.5l.1A("1q-1l-in");G=13.4V.7L();I=((K.1N+K.2S)/2-(G.1N+G.2S)/2);H=((K.1H+K.2U)/2-(G.1H+G.2U)/2)}13.1b.1i.1M("2V");13.1b.1d.1S("1q-a2").1M("2V");13.1b.1d.1A("1q-3r");13.1d.1A("1q-3r");13.a0();L=("1l"==13.1b.1V)?13.1b.2e:13.1b.1V;if(y.1e.2K.1X&&!(13.1L&&"3i"==13.1o("3O"))){if("2B"==L){J=13.1i.1d.1F();13.1b.1i.1x({2f:"4o(0,"+H+"2y, 0) 4f("+J.1f/13.2d.1f+", "+J.1g/13.2d.1g+")"}).1F();13.1b.1i.1D("2V",h(17(){13.1b.1i.1M("2V");13.1b.1d.1S("1q-3r 1q-p-"+L);13.1b.3r=1n;13.1b.2T=1r}).1E(13));13.1b.1d.1A("1q-p-"+L).1F();if(!y.1e.3a&&y.1e.4r&&("4r"===y.1e.3F||"6o"===y.1e.3F)){13.1b.3r=1n;13.1b.2T=1r}}1j{13.1b.1d.1D("2V",h(17(){13.1b.1d.1M("2V");13.1b.1d.1S("1q-3r 1q-p-"+L)}).1E(13));13.1b.1d.1A("1q-p-"+L).1F();13.1b.1d.1S("1q-p-"+L);13.1b.3r=1n;13.1b.2T=1r}}1j{13.1b.1d.1S("1q-3r");13.1b.3r=1n;13.1b.2T=1r}if(!13.1L){13.6i(1r)}if(M){M.2c().4R();N=M.7V();if("2H"==13.1b.1V&&(/21/i).3d(M.1y)){N.y-=13.1b.1g/2+10}if("2B"==L&&((/21/i).3d(M.1y)||c(M))){13.1s.33={x:0,y:0};N.x=-(N.x-13.2k.1N-13.1C.1f/2)*(13.2d.1f/13.1C.1f);N.y=-(N.y-13.2k.1H-13.1C.1g/2)*(13.2d.1g/13.1C.1g)}}1j{N={x:13.2k.1N+(13.2k.2S-13.2k.1N)/2,y:13.2k.1H+(13.2k.2U-13.2k.1H)/2}}13.1d.1S("1q-3r").1A("1q-2T");N.x+=-I;N.y+=-H;13.1s.5o={x:0,y:0};13.1s.dx=0;13.1s.dy=0;13.7H(M,N,1r);s("dA",13.id)},4t:17(I,N){1c L,J,G,H,K=0,M=0,O=13.1b.2T;13.5O=1h;if(!13.2l){1a}if(I&&"bC"==I.1y&&"3B"==I.2i){1a}3M(13.4X);13.4X=1h;3M(13.5q);13.5q=1h;13.1b.3r=1n;13.1b.2T=1n;if(1r!==N&&!13.1L){if(O){if(y.1e.3a&&!13.1L&&"1l"==13.1b.1V){13.a0()}1j{13.6i()}}}if(!13.1b.5b){1a}if(I){I.2c()}13.1b.1i.1M("2V");13.1b.1d.1S("1q-3r").1M("2V");if(13.1L){H=13.4V.7L();if("3i"!==13.1o("3O")){13.5l.1S("1q-1l-in")}13.1i.1d.1x({"1W-1g":13.6U()});G=13.1i.1d.7L();M=((G.1N+G.2S)/2-(H.1N+H.2S)/2);K=((G.1H+G.2U)/2-(H.1H+H.2U)/2)}L=("1l"==13.1b.1V)?13.1b.2e:13.1b.1V;if(y.1e.2K.1X&&I&&!(13.1L&&"3i"==13.1o("3O"))){if("2B"==L){13.1b.1i.1D("2V",h(17(){13.1b.1i.1M("2V");13.1d.1S("1q-2T");4H(h(17(){13.1b.4m()}).1E(13),32)}).1E(13));J=13.1i.1d.1F();13.1b.1d.1A("1q-a2 1q-p-"+L).1F();13.1b.1i.1x({2f:"4o(0,"+K+"2y,0) 4f("+J.1f/13.2d.1f+", "+J.1g/13.2d.1g+")"})}1j{13.1b.1d.1D("2V",h(17(){13.1b.4m();13.1d.1S("1q-2T")}).1E(13));13.1b.1d.3m("2r");13.1b.1d.1A("1q-a2 1q-p-"+L);13.1d.1S("1q-2T")}}1j{13.1b.4m();13.1d.1S("1q-2T")}13.1s.dx=0;13.1s.dy=0;13.1s.5o={x:0,y:0};13.1s.4m();if(O){s("du",13.id)}},7H:17(Q,P,O){1c I=P,K,J,M=0,H,L=0,G,R,N=1n;if(13.5O&&!13.1i.2h()){13.5O=Q}if(!13.1b.2T&&!O){1a}if(Q){h(Q).3J().5d();if(c(Q)&&!g(Q)){1a}N=(/21/i).3d(Q.1y)||c(Q);if(N&&!13.1s.7h){13.1s.7h=N}if(!I){I=Q.7V()}}if("4e"==13.1b.1V){1a}if("1l"==13.1b.1V&&"2B"===13.1b.2e&&(Q&&N||!Q&&13.1s.66)){13.1s.66=1r;K=13.1s.33.x+(I.x-13.1s.5o.x);J=13.1s.33.y+(I.y-13.1s.5o.y);13.1s.5o=I;M=1p.2g(0,13.1b.59-13.2d.1f)/2;H=-M;L=1p.2g(0,13.1b.52-13.2d.1g)/2;G=-L}1j{13.1s.66=1n;K=I.x-13.2k.1N;J=I.y-13.2k.1H;H=13.1C.1f-13.1s.1f;G=13.1C.1g-13.1s.1g;K-=13.1s.1f/2;J-=13.1s.1g/2}if("2H"!==13.1b.1V){K=1p.1W(M,1p.2g(K,H));J=1p.1W(L,1p.2g(J,G))}13.1s.33.x=K=1p.5x(K);13.1s.33.y=J=1p.5x(J);if("1l"==13.1b.1V&&"2B"!=13.1b.2e){if(y.1e.2K.2f){13.1s.1d.1x({2f:"9o("+13.1s.33.x+"2y,"+13.1s.33.y+"2y)"});13.1s.1i.1x({2f:"9o("+-(13.1s.33.x+13.1s.3E.x)+"2y, "+-(13.1s.33.y+13.1s.3E.y)+"2y)"})}1j{13.1s.1d.1x({1H:13.1s.33.y,1N:13.1s.33.x});13.1s.1i.1x({1H:-(13.1s.33.y+13.1s.3E.y),1N:-(13.1s.33.x+13.1s.3E.x)})}}if("2H"==13.1b.1V){if(13.1s.7h&&!(Q&&"3w"==Q.1y)){I.y-=13.1b.1g/2+10}R=h(1k).6L();13.1b.1d.1x((y.1e.2q&&y.1e.2q<11)?{1H:I.y-13.2k.1H-13.1b.1g/2,1N:I.x-13.2k.1N-13.1b.1f/2}:{1H:I.y+R.y-13.1b.1g/2,1N:I.x+R.x-13.1b.1f/2})}if(!13.4X){13.1s.dx=0;13.1s.dy=0;13.5w(1)}},5w:17(I){1c H,G;if(!jc(I)){if(13.1s.66){I=13.1s.7h?0.4:0.16}1j{I=13.1o("ds")?0.2:13.1s.7h?0.4:0.8}}H=((13.1s.33.x-13.1s.dx)*I);G=((13.1s.33.y-13.1s.dy)*I);13.1s.dx+=H;13.1s.dy+=G;if(!13.4X||1p.3x(H)>0.bG||1p.3x(G)>0.bG){13.1b.1i.1x(y.1e.2K.2f?{2f:f+(13.1s.66?13.1s.dx:-(13.1s.dx*(13.2d.1f/13.1C.1f)-1p.1W(0,13.2d.1f-13.1b.59)/2))+"2y,"+(13.1s.66?13.1s.dy:-(13.1s.dy*(13.2d.1g/13.1C.1g)-1p.1W(0,13.2d.1g-13.1b.52)/2))+"2y"+A+" 4f(1)"}:{1N:-(13.1s.dx*(13.2d.1f/13.1C.1f)+1p.2g(0,13.2d.1f-13.1b.59)/2),1H:-(13.1s.dy*(13.2d.1g/13.1C.1g)+1p.2g(0,13.2d.1g-13.1b.52)/2)})}if("2H"==13.1b.1V){1a}13.4X=4H(13.dO,16)},bp:17(){1c S,I,N=30,K=jd,P,Q="",H={},G,M,R=0,T={1X:y.1e.8p+63.76(32)+"cU 4W-4T(.18,.35,.58,1)"},J,O,L=h(17(U){if(!13.2l||13.1b.2T){1a}if(U.2j=="3D"){3M(13.5q);13.5q=1h;R=0;H={x:U.x,y:U.y,cZ:U.2L};S=13.1C.1f;I=S/2;13.1i.1d.1M("2V");13.1i.1d.3C("1X","");13.1i.1d.3C("2f","4o(0, 0, 0)");O=1h}1j{G=(U.x-H.x);M={x:0,y:0,z:0};if(1h===O){O=(1p.3x(U.x-H.x)<1p.3x(U.y-H.y))}if(O){1a}U.2c();if("9t"==U.2j){R=0;J=1h;P=U.2L-H.cZ;if(1p.3x(G)>I||(P<K&&1p.3x(G)>N)){if((Q=(G>0)?"d3":(G<=0)?"je":"")){if(Q=="d3"){J=13.7X();R+=S*10}1j{J=13.83();R-=S*10}}}M.x=R;M.de=-90*(M.x/S);13.1i.1d.1D("2V",h(17(V){13.1i.1d.1M("2V");13.1i.1d.3C("1X","");if(J){13.1i.1d.1x({2f:"4o("+M.x+"2y, 5T, 5T)"});13.3T(J,1r)}}).1E(13));13.1i.1d.1x(T);13.1i.1d.1x({"1X-5c":M.x?"j9":"cU",2r:1-0.7*1p.3x(M.x/S),2f:"4o("+M.x+"2y, 5T, 5T)"});G=0;1a}M.x=G;M.z=-50*1p.3x(M.x/I);M.de=-60*(M.x/I);13.1i.1d.1x({2r:1-0.7*1p.3x(M.x/I),2f:"4o("+M.x+"2y, 5T, "+M.z+"2y)"})}}).1E(13);13.1d.1D("2s",L)},eM:17(){1c H,G;if(13.3I.1I){13.4Q=13.3I}1j{H=13.40.2n("3Z-bO");if(H){if(y.1e.2K.bQ){G=y.$A(1m.bP(\'.8I[3Z-bO="\'+H+\'"]\'))}1j{G=y.$A(1m.9x("A")).2W(17(I){1a H==I.2n("3Z-bO")})}h(G).3b(17(J){1c I,K;I=i(J);if(I&&I.3I.1I>0){1a}if(I){K=1t k(I.1i.1K.26,I.1i.1l.26,I.1i.3p,1h,I.1i.4n)}1j{K=1t k().9y(J,I?I.6y:1h)}if(13.1i.1l.1U.4F(K.1l.26)&&13.1i.1K.1U.4F(K.1K.26)){K=13.1i}13.4Q.36(K)},13);13.6X=13.1i}}if(13.4Q.1I>1){13.5l.1A("dg-bZ");13.5f=y.$1t("2Z",{"3Q":"1q-2t-j8"}).1Z(13.5l);13.4k=1t r(13.5f);h(13.4Q).3b(17(I){1c J=h(17(K){13.9J(I);13.3T(I)}).1E(13);I.db=13.4k.da(y.$1t("24",{1U:I.8e("1K")}).1D("21 1Q",17(K){K.2c()}).1D("21 "+("7r"==13.1o("bN")?"7u 8n":"1Q"),h(17(L,K){if(13.5V){3M(13.5V)}13.5V=1n;if("7u"==L.1y){13.5V=h(J).2C(K)}1j{if("21"==L.1y||"1Q"==L.1y){J()}}}).2D(13,60)))},13);13.2P.4z.5A();13.2P.4x.5A()}1j{13.5l.1S("dg-bZ");13.2P.4z.4m();13.2P.4x.4m()}},co:17(){1c G;if(13.4k){13.4k.2c();13.4k=1h}if(13.5f){13.5f.2R();13.5f=1h}if(13.4Q.1I>1&&!13.3I.1I){13.1d.1M("2s");13.1i.1d.2R().2n("2m");13.1i.1d.5G("2m");13.6X.1d.1Z(13.1d);13.7m(13.6X);5J(G=13.4Q.j4()){if(G!==13.6X){if(G.1K.1d){G.1K.1d.57();G.1K.1d=1h}if(G.1l.1d){G.1l.1d.57();G.1l.1d=1h}G=1h}}}13.4Q=[]},5W:17(){if(!13.2l||!13.1L){1a}if("9X"==y.1e.4M&&"9U"==y.1e.3F&&7==5t(y.1e.7z)){dk(m);m=1h}h(1m).1M("bv",13.8J);13.4t(1h,1r);13.2l=1n;if(w.1e.4Z.9k&&w.1e.4Z.5b()){w.1e.4Z.dI()}1j{if(y.1e.2K.1X){13.1d.1M("2V").1x({1X:""});13.1d.1D("2V",13.8m);if(y.1e.4r&&("4r"===y.1e.3F||"6o"===y.1e.3F)){4H(h(17(){13.8m()}).1E(13),8u)}13.3W.1M("2V").1x({1X:""});13.3W.1x({1X:"bI 0.6s 4W-4T(0.dH, 0.j3, 0.dR, 0.j5) 0.79"}).1F();if(y.1e.6T&&"4r"!==y.1e.3F){13.1d.1x({1X:"bI .4s 4W-4T(0.8u, 0, 0.bJ, 0.9n) 79"}).1F()}1j{13.1d.1x({1X:"bI .4s 4W-4T(0.8u, -0.j6, 0.bJ, 0.9n) 79"}).1F()}if("3i"==13.1o("3O")&&"2H"!==13.1o("6k")){13.1i.1d.1x({"1W-1g":13.1i.1F("1l").1g});13.1i.1d.1x({"1W-1f":13.1i.1F("1l").1f})}13.3W.1x({2r:0.4});13.1d.1x({2r:0.j7,2f:"4f(0.4)"})}1j{13.8m()}}},2t:17(I){if(!13.1i.2h()||!13.2l||13.1L){if(!13.1i.2h()){if(I){13.5O=y.1Y({},I);I.4R()}13.1i.5M(13.7m.1E(13));if(!13.5H){13.5H=h(13.8x).1E(13).2C(8B)}}1a}if(I){I.4R()}1c G=h(13.1d).2a("cr"),H=1m.jf();13.bF();13.71--;13.4t(1h,1r);13.8K();13.8T();13.2l=1n;if(!13.3c){13.3c=y.$1t("2Z").1A("1q-2t").1A(13.1o("5r")).1x({2r:0});13.5l=y.$1t("2Z").1A("1q-2t-dX").1Z(13.3c);13.7P=y.$1t("2Z").1A("1q-2t-jg").1Z(13.5l);h(["4x","4z","5W"]).3b(17(K){1c J="1q-2p";13.2P[K]=y.$1t("2p",{7J:13.1o("9Y-jo-"+K)}).1A(J).1A(J+"-"+K);H.bB(13.2P[K]);4y(K){1B"4x":13.2P[K].1D("21 1Q",17(L){L.2c();13.3T(13.7X())}.2D(13));1G;1B"4z":13.2P[K].1D("21 1Q",17(L){L.2c();13.3T(13.83())}.2D(13));1G;1B"5W":13.2P[K].1D("21 1Q",17(L){L.2c();13.5W()}.2D(13));1G}},13);13.7P.3s(H);13.3c.1D("4v 5e 3w",h(17(J){h(J).2c()}));if(13.1o("dC")){13.3c.1D("21 1Q",17(J){if("3i"!==13.1o("3O")&&13.1d.a1(J.dD())){1a}J.2c();13.5W()}.2D(13))}13.8J=h(17(K){1c J=1h;if(27!==K.7T&&37!==K.7T&&39!==K.7T){1a}h(K).2c();if(27===K.7T){13.5W()}1j{J=(37===K.7T)?13.7X():13.83();if(J){13.3T(J)}}}).2D(13);13.8w=h(17(){1c J;13.1d.1M("2V").1x({1X:"",2f:"4o(0,0,0)"});if(13.1L){1a}13.1L=1r;13.3c.1S("1q-2t-jp").1x({2r:1});13.1b.9d(13.1o("6k"));13.2d=y.49(13.3l);13.5C();if(13.3R&&13.1i.3p){if(13.1i.4a){13.3R.3s(y.$1t("a",{6W:13.1i.4a}).1D("21 1Q",13.9a.1E(13)).5s(13.1i.3p))}1j{13.3R.5s(13.1i.3p)}13.3R.1A("1q-5A")}if("3i"!==13.1o("3O")){13.8F(1r);13.8z(1r)}13.2l=1r;if("3i"===13.1o("3O")){13.4A()}if(y.1e.3a&&13.bA&&13.1b.5b){13.6i(1r,13.1o("9P"));13.bA=1n}13.7P.1S("1q-3k").1A("1q-9O 1q-6m");13.5f&&13.5f.1S("1q-3k").1A("1q-9O 1q-6m");if(13.4k){13.4k.bz();13.9J(13.1i)}if(G){G.1Z(13.3c,((1p.6j(1p.6V()*bq)+1)%2)?"1H":"2U")}if(13.4Q.1I&&!13.3I.1I){13.bp()}h(1m).1D("bv",13.8J);if("9X"==y.1e.4M&&"9U"==y.1e.3F&&7==5t(y.1e.7z)){m=u()}s("cj",13.id)}).1E(13);13.8m=h(17(){13.1d.1M("2V");if(!13.1L){1a}if(13.1L){h(1m).1M("bv",13.8J);13.4t(1h,1r)}13.co();13.1L=1n;13.1b.9d(13.1o("48"));13.1d.al(13.1i.6Y("1K"),13.1i.1d);13.1i.6Z("1K");h(13.1i.1d).1x({1f:"",1g:"","1W-1f":1p.2g(13.1i.1F("1K").1f),"1W-1g":1p.2g(13.1i.1F("1K").1g)});13.1d.1x({2r:"",1X:""});13.1d.1x({2f:"4o(0,0,0)"});13.1d.1Z(13.40);13.7e(1r);if(13.3R){13.3R.2R();13.3R=1h}13.8K();13.8T();if("3i"==13.1o("4j")){13.4A()}1j{if(1n!==13.1o("48")){13.8F("2Q"===13.1o("4j"));13.8z("2Q"===13.1o("4j")&&!13.1o("2t"))}}13.6i();13.3W.1M("2V");13.3c.2R();13.3W.2R();13.3W=1h;h(y.1e.41()).1x({5n:""});h(1m.3A).1x({5n:""});13.2l=1r;if(y.1e.2q<10){13.5C()}1j{h(1k).bx("ej","6S")}s("e9",13.id)}).1E(13);13.7O=y.$1t("2Z",{"3Q":"1q-1i-dX"}).1Z(13.5l);13.4V=y.$1t("89").1Z(13.7O)}13.eM();h(y.1e.41()).1x({5n:"3k"});h(1m.3A).1x({5n:"3k"}).1F();if("eC"==13.1o("2t")){13.ao();w.1e.4Z.bw(13.3c,{bX:h(17(){13.8w()}).1E(13),bR:13.8m,8o:h(17(){13.ap()}).1E(13)})}1j{4H(h(17(){13.ap()}).1E(13),96)}},ao:17(){1c G;G=y.$1t("24",{1U:13.1i.8e("1l")});13.3W=y.$1t("2Z").1A("1q-2t-bg").3s((y.1e.2K.8g||y.1e.2q<10)?G:1t y.9s(G).5j(b).6Y()).1Z(13.3c);if("3i"===13.1o("3O")){13.5l.1A("1q-3i-1l"+("1l"===13.1o("6k")?" 1q-1l-in":"")).1F()}13.1d.al(13.1i.6Y("1l"),13.1i.1d);13.1i.6Z("1l");13.3c.1Z(1m.3A);13.7G=17(){1c H=13.7O;if(h(13.4V).1F().1f>50){H=13.4V}1a 17(){1a"3i"==13.1o("3O")&&"2H"!==13.1o("6k")?6r:1p.5x(h(H).88().1f)}}.2b(13);13.6U=17(){1c H=13.7O;if(h(13.4V).1F().1g>50){H=13.4V}1a 17(){1a"3i"==13.1o("3O")&&"2H"!==13.1o("6k")?6r:1p.5x(h(H).88().1g)}}.2b(13);13.7P.1S("1q-9O 1q-6m").1A("1q-3k");13.5f&&13.5f.1S("1q-9O 1q-6m").1A("1q-3k");13.1i.1d.1x({"1W-1g":1p.2g(13.1i.1F("1l").1g,13.6U())});13.1i.1d.1x({"1W-1f":1p.2g(13.1i.1F("1l").1f,13.7G())});13.4V.3s(13.1d);if(13.1o("3R")){13.3R=y.$1t("eE",{"3Q":"1q-3p"}).1Z(13.4V)}},ap:17(){13.ao();13.1d.1x({1X:""});13.1d.1x({2f:"4f(0.6)"}).1F();if(y.1e.6T&&"4r"!==y.1e.3F){13.1d.1x({1X:y.1e.8p+" 0.6s 4W-4T(0.8t, 0.8G, 0.b4, 1) 79"})}1j{13.1d.1x({1X:y.1e.8p+" 0.6s 4W-4T(0.8t, 0.8G, 0.b4, 1.b2) 79"})}if(y.1e.2K.1X){13.1d.1D("2V",13.8w);if(y.1e.4r&&("4r"===y.1e.3F||"6o"===y.1e.3F)){4H(h(17(){13.8w()}).1E(13),jq)}}1j{13.8w.2C(16,13)}13.3c.1x({2r:1});13.1d.1x({2f:"4f(1)"})},9a:17(){if(13.1i.4a){1k.aZ(13.1i.4a,"jr")}},83:17(){1c G=(13.1L?13.4Q:13.3I).2W(17(J){1a(-1!==J.1K.2j||-1!==J.1l.2j)}),H=G.1I,I=h(G).4h(13.1i)+1;1a(1>=H)?1h:G[(I>=H)?0:I]},7X:17(){1c G=(13.1L?13.4Q:13.3I).2W(17(J){1a(-1!==J.1K.2j||-1!==J.1l.2j)}),H=G.1I,I=h(G).4h(13.1i)-1;1a(1>=H)?1h:G[(I<0)?H-1:I]},cJ:17(H,I){1c G=13.3I.2W(17(J){1a((J.1l.1U.4F(H)||J.1l.26.4F(H))&&(J.1K.1U.4F(I)||J.1K.26.4F(I)))})||[];1a G[0]||((I&&H&&"1O"===y.1P(I)&&"1O"===y.1P(H))?1t k(I,H):1h)},bc:17(H){1c G=13.3I.2W(17(I){1a(I.4n===H)})||[];1a G[0]},cI:17(G){1a 13.3I[G]}};t={4D:"jn.1.1",4L:17(J,H){1c I=1h,G=[];y.$A((J?[h(J)]:y.$A(1m.8H("8I")).5D(y.$A(1m.8H("aM"))))).3b((17(K){if(h(K)){if(!i(K)){I=1t j(K,H);if(x&&!I.1o("b8")){I.2c();I=1h}1j{D.36(I);G.36(I)}}}}).1E(13));1a J?G[0]:G},2c:17(J){1c H,I,G;if(J){(I=i(J))&&(I=D.9S(D.4h(I),1))&&I[0].2c()&&(4O I[0]);1a}5J(H=D.1I){I=D.9S(H-1,1);I[0].2c();4O I[0]}},jm:17(G){13.2c(G);1a 13.4L(G)},3T:17(L,K,J,H){1c I=i(L),G;if(I){G="62"===y.1P(K)?I.bc(K):I.cJ(K,J);if(G){I.3T(G)}}},ji:17(J,I){1c H=i(J),G;if(H){4y(y.1P(I)){1B"62":G=H.bc(I);1G;1B"65":G=H.cI(I);1G;1R:}if(G){H.3T(G)}}},4x:17(H){1c G;(G=i(H))&&G.3T(G.7X())},4z:17(H){1c G;(G=i(H))&&G.3T(G.83())},jh:17(H){1c G;(G=i(H))&&G.4A()},jj:17(H){1c G;(G=i(H))&&G.4t()},2t:17(H){1c G;(G=i(H))&&G.2t()},5W:17(H){1c G;(G=i(H))&&G.5W()},di:17(G,H){if(!p[G]){p[G]=[]}if("17"==y.1P(H)){p[G].36(H)}},jk:17(G){1a!!i(G)}};h(1m).1D("9q",17(){1c H=1k[B+"7f"]||{};d();F=y.$1t("2Z",{"3Q":"3z-3k-6R"}).1Z(1m.3A);E=(y.1e.3a&&1k.dK&&1k.dK("(1W-dl-1f: d1), (1W-dl-1g: d1)").jl);if(y.1e.3a){y.1Y(o,l)}1T(1c G=0;G<z.1I;G++){if(H[z[G]]&&y.$F!==H[z[G]]){t.di(z[G],H[z[G]])}}t.4L();x=1n});1k.aM=1k.aM||{};1a t})();', 62, 1316, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||||function|||return|zoomBox|var|node|jBrowser|width|height|null|image|else|window|zoom|document|false|option|Math|mz|true|lens|new|Event|options|Custom|jSetCss|type|event|jAddClass|case|size|jAddEvent|jBind|jGetSize|break|top|length|handler|small|expanded|jRemoveEvent|left|string|jTypeOf|btnclick|default|jRemoveClass|for|src|mode|max|transition|extend|jAppendTo||tap|||img||url|||arguments|jFetch|call|stop|zoomSize|position|transform|min|loaded|pointerType|state|boundaries|ready|style|getAttribute||button|ieMode|opacity|touchdrag|expand|parseFloat|important|auto||px|enum|prototype|inner|jDelay|jBindAsEvent|changedTouches|100|undefined|magnifier|mousedrag|navigator|features|timeStamp|clientY|context|clientX|buttons|click|jRemove|right|active|bottom|transitionend|filter|jCallEvent|jDel|div||||pos|oneOf||push||jStore||mobile|jEach|expandBox|test|hint|handle|rootCSS|settings|always|pointerEnabled|hidden|zoomSizeOrigin|jGetCss|defined|boolean|caption|none|activating|append|match|Doc|try|dbltap|abs|orientation|magic|body|touch|jSetCssProp|dragstart|border|uaName|Class|init|additionalImages|stopDefaults|identifier|parent|clearTimeout|touchpinch|expandZoomOn|off|class|expandCaption|Element|update|ceil|webkit|expandBg|catch|setAttribute|data|placeholder|getDoc||pushToEvents|||||zoomMode|detach|link|target|hasOwnProperty|dblbtnclick|preview|scale|array|indexOf|styles|zoomOn|expandThumbs|firstChild|hide|origin|translate3d|custom|touches|chrome||deactivate|root|mousescroll|replace|prev|switch|next|activate|parentNode|J_TYPE|version|pow|has|listeners|setTimeout|schema|reverse|trident|start|platform|requestAnimationFrame|delete|disabled|expandGallery|stopQueue|vertical|bezier|domPrefix|expandFigure|cubic|moveTimer|jTrim|fullScreen||direction|innerHeight||||distance|kill||innerWidth|handlers|enabled|duration|stopDistribution|touchstart|expandNav|messageBox|constructor|MSPOINTER_TYPE_TOUCH|blur|instanceof|expandStage|visibility|overflow|spos|contains|activateTimer|cssClass|changeContent|parseInt|timer|FX|move|round|add|absolute|show|toLowerCase|resizeCallback|concat|events|jCamelize|removeAttribute|loadTimer|pageY|while|cubicBezier|pageX|load|throw|initEvent|J_UUID|isQueueStopped|mouseup|onerror|0px|dragged|updateTimer|close|nodeType|Array|jGetPageXY|||element|String|className|number|innertouch|ease||onload|dppx|documentElement|apply|scroll|touchend|gecko|enable|loadingBox|showHint|floor|expandZoomMode|getAbsoluteURL|visible|ms|opera|targetTouches|selectedItem|Infinity||originalImg|to|onTouchEnd|filters|css|originalTitle|wunits|found|getButton|selected|MagicJS|pointerup|not|mousedown|render|shift|android|now|jGetScroll|pointermove|MSPointerUp|no|hunits|thumb|wrapper|resize|androidBrowser|expandMaxHeight|random|href|primaryImage|getNode|setCurNode||hintRuns|easeFn|padding|timedout|onready|fromCharCode||cycles|0s|end|cssTransformProp|canvas|join|setSize|Options|onComplete|touchmovement|svg|onTouchStart|tm|threshold|setupZoom|200|originalImage|addCSS|display|hover|_handlers|engine|mouseover|MSPointerMove|normalSize|set|tooltip|uaVersion|oncomplete|minimum|trigger|continuous|alternate|callback|expandMaxWidth|animate|zoomCaption|title|_EVENTS_|jGetRect|deltaY|continue|expandImageStage|expandControls|Transition|margin|touchmove|keyCode|mousemove|getClientXY|MSPointerDown|getPrev|getBoundingClientRect|split|storage|getRelated||getNext||||pointerdown|getInnerSize|figure|scrollTop|_cleanup|_unbind|_timer|getURL|complete|cssFilters|jGetPosition|parseCubicBezier|fromJSON|byTag|sqrt|onClose|mouseout|fallback|cssTransform|horizontal|on|setOrientation|175|600|readyState|onExpand|showLoading|createElement|registerDeactivateEvent|cssPrefix|400|scrollLeft|itemCSS|toString|registerActivateEvent|885|byClass|MagicZoom|keyboardCallback|unregisterActivateEvent|compatMode|normalizeCSS|originalImgSrc|index|currentSrc|dashize|createElementNS|loadSmall|unregisterDeactivateEvent|naturalWidth|lazyZoom|nextImage|perspective|Opacity|linear||reflow|exitFullscreen|charAt||||PFX|||openLink|mac|textExpandHint|setMode|exists|getStorage|loopBind|pointerId|forceAnimation|fromString|capable|cancelAnimationFrame|btnclickEvent|045|translate|callee|domready|handleMouseUp|SVGImage|dragend|onTouchMove|win|object|getElementsByTagName|parseNode|eventType|onprogress|reset|xhr|_bind|status|magiczoom|XMLHttpRequest|createEvent|dblclick|setActiveThumb|pStyles_arr|implement|pStyles|typeof|fade|textClickZoomHint|hideTimer|isPrimary|splice|isNaN|safari|aspectRatio|Message|ios|text|toUpperCase|reflowZoom|hasChild|deactivating|relatedTarget|J_EUID|_event_prefix_|https|ImageLoader|opr|changeEventName|||||||||||dispatchEvent|replaceChild|tagName|cssDomPrefix|prepareExpandedView|expandToWindow|temporary|Za|presto|removeChild|ignore|onClick|calc|cycle|stopAnimation|uuid|handleMouseDown|_event_del_|priority|J_EXT|caller|onclick|startTime|1000|handleTouchEnd|deltaMode|handleTouchMove|deltaX|MagicZoomPlus|handleTouchStart|previousScale|Date|abort|onabort|loadedBytes|05|_event_add_|w3|org|www|http|open|setProps|scrollFX|275||320|Alpha|300|selectorsMoveFX|autostart|maximum|HTMLElement||imageByOrigin|getElementsByClassName|cubicBezierAtTime|getTarget||el_arr|styles_arr|loadImg|hideFX|ifndef|Tooltip|slice|errorEventName|swipe|101|zoomPosition|Function|loadZoom|10000px|keydown|request|jRaiseEvent|isMouse|run|mobileZoomHint|appendChild|pointerout|onResize|jClearEvents|hideHint|000001|msPointerEnabled|all|735|0001|rel|delay|selectorTrigger|gallery|querySelectorAll|query|onExit|resizeTimer|textHoverZoomHint|span|onBeforeRender|createTextNode|onEnter|hintMessage|thumbs|hideLoading|once|easeInExpo|easeOutExpo|variableZoom|easeInQuad|shown|easeInCubic|easeInBack|getElementById|easeOutCubic|easeOutSine|easeOutQuad|changeZoomLevel||requestFullScreen|setCaption|stopPropagation|cancelBubble|onExpandOpen|insertRule|easeInSine|naturalHeight|unregisterEvents|destroyExpandGallery|easeOutBack|touchScreen||0ms|styleSheet|Number|deleteRule|preventDefault|jToBool|removeRule|999|phone|registerEvents|parseSchema|webkit419|elasticIn|clientWidth|MSPointerOut|bounceIn|imageByIndex|imageByURL|sheet|upscale|MouseEvent|compareDocumentPosition|euid|dragmove|Object|toArray|304|onxhrerror|300ms|_initialDistance|item|xhr2|isReady|ts|onreadystatechange|767px|loadBlob|backward|curScale|error|wheelDelta|wheelDeltaY|detail|UUID|addItem|selector|wheelDeltaX|DocumentTouch|deg|jDefer|with|progressiveLoad|registerCallback|doc|clearInterval|device|date|355||03|textnode|wrap|smoothing|animation|onZoomOut|selectItem|addEventListener|||which|onZoomIn|stylesId|closeOnClickOutside|getOriginalTarget|handleMouseMove|nativize|fps|895|cancel|interval|matchMedia|onStart|loop|finishTime|moveBind|out|onAfterRender|685|firefox|getTime|165|setMessage|moz|stage|Moz|gif|hone|jHasClass|Click|R0lGODlhAQABAAD|Webkit|base64|zoomWidth|zoomHeight|10000|onExpandClose|RegExp|setupSelectors|rightClick|jSetOpacity|progid|od|onZoomReady|forEach|runtime|UIEvent|onUpdate||ACwAAAAAAQABAAACADs|mjs|Top|backCompat||normal|documentMode|Bottom|filterBlur|coigmzaablav|fontWeight|cancelFullScreen|msExitFullscreen|onchange|Left|Right|fullscreen|getComputedStyle|figcaption|zIndex|100000|inline|styleFloat|mozCancelAnimationFrame|backcompat|charCodeAt|setupExpandGallery|DXImageTransform|magicJS|scrollbarsWidth|block|500|loadOptions|initDrag|stdDeviation|cos|10px|transitionEffect|get|background|multibackground|setupContent|touchOptions|getJSON|items|cssText|screen|offsetWidth|querySelector|Microsoft|PI|onswipe|setInterval|stopImmediatePropagation|enclose|crios|CancelFullScreen|ob|deltaFactor|netfront||536|mmp||g7dd0194|withCredentials|fullscreenElement|pocket|lt|ExitFullscreen|SVG11|requestFullscreen|FullScreen|midp|re|ixi|implementation|RequestFullscreen|delta|os|hasFeature|v3|webkitIsFullScreen|RequestFullScreen|deltaZ|plucker|palm|TR|FullscreenElement|webkitCancelRequestAnimationFrame|webkitTransitionEnd|msRequestAnimationFrame|compal|elaine|WebKitTransitionEvent|meego|TransitionEvent|blazer|avantgo|Image|pinchstart|pinchupdate|bada|msCancelAnimationFrame|map|oCancelAnimationFrame|fennec|hiptop|2px|blackberry|cssfilters|collection||9999|red|feature|jToInt|lge|regexp|iris|iemobile|KeyEvent|KeyboardEvent|kindle|ontouchstart|maemo|mozRequestAnimationFrame|unknown|xda|windows|wap|vodafone|iframe|generateUUID|evaluate|xpath|jSetStyle|air|jGetTransitionDuration|toFloat|up|webkitexitFullscreen|edge|removeCSS|addRule|userAgent|presto925|msFullscreenEnabled|fullscreenEnabled|DOMElement|treo|4294967296|jGetStyle|insertBefore|html|getBoxObjectFor|innerHTML|mozInnerScreenY|jGetFullScroll|clientTop|offsetParent|offsetLeft|xy|offsetTop|clientLeft|offsetHeight|ActiveXObject|childNodes|xiino|xxxxxxxx|taintEnabled|getHashCode|xxxx|4xxx|innerText|WebKitPoint|xxxxxxxxxxxx|yxxx|webkitCancelFullScreen|jGetStyles|webkitRequestAnimationFrame|oCancelFullScreen|prefix|sort|fullscreenerror|detachEvent|attachEvent|isTouchEvent|isPrimaryTouch|removeEventListener|activeElement|oRequestAnimationFrame|MSFullscreenError|psp|doScroll|DOMContentLoaded|fullscreenchange|MSFullscreenChange|420|ProgressEvent|msCancelFullScreen|createEventObject|series|fireEvent|Width|head|scrollWidth|webos|linux|scrollHeight|currentStyle|jGetFullSize|pageYOffset|cssRules|clientHeight|jToggleClass|pageXOffset|symbian|other|pointerover|srcElement|MSPointerOver|fromElement|toElement|returnValue|float|getPropertyValue|lineHeight|mozCancelFullScreen|cssFloat|FormData|zo|mbgme3|coigmtaac|zfg|ikz3|Qlbo|yyy|fzz||||host|location|coigmzk|zg|kh3|zwbk3|maba||xk||gob|o0|ff0000|center|ojk5|Taac|gz5|jkma|ozga|0Coigm|devicePixelRatio|Double|setAttributeNS|xlink|feGaussianBlur|SourceGraphic|units|1999|2000|of|definition|the|parameter|isset|sides|ul|textBtnPrev|Next|Previous|Tap|Touch|textBtnNext|Close|li|zoomDistance|Hover|textBtnClose|z0|9_|030|pop|220|280|01|thumbnails|100ms|120|loading|isFinite|201|forward|createDocumentFragment|controls|zoomIn|switchTo|zoomOut|running|matches|refresh|v5|btn|opening|800|_self|message|350|srcset|rev|getRatio|selectstart|MobileOptions|radius|before|scrollTo|availWidth|availHeight|250|contextmenu|color|2147483647|2em|dummy|256|relative|line|textAlign|fontSize|fontFamily|sans|serif|Incorrect|zkvz|955|515|055|675|215|455|easeInOutQuad|565|easeInOutSine|445|085||easeInOutCubic|645|easeOutQuint|06|easeInOutQuint|07|795|855|755|easeInQuart|easeOutQuart|easeInOutQuart|easeInQuint|575|715|total|lengthComputable|static|progress|response|webkitURL|URL|000244140625|onwheel|wheel|mousewheel|537|createObjectURL|roundCss|parse|curFrame|745|infinite|destroy|GET|responseType|blob|send|035|setTransition|POSITIVE_INFINITY|bounceOut|NEGATIVE_INFINITY|785|easeInOutCirc|backIn|backOut|elasticOut|5000|easeInOutBack|expoIn|MessageBox|expoOut|sineOut|sineIn|MagicToolboxTooltip|265|JSON|135|quadOut|04|easeInCirc|075|easeInOutExpo|cubicIn|quadIn|335||cubicOut|easeOutCirc'.split('|'), 0, {}))
	;//$(document).ready(function() {
var sync1 = $("#sync1");
$(window).load(function () {
	//	var sync1 = $("#sync1");
	var flag = false;
	var duration = 300;

	sync1.owlCarousel({

		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		autoHeight: true,
		items: 1,
		nav: false,
		navText: ["‹", "›"],
		autoplay: false,
		autoplayTimeout: 5000,
		loop: false

	}).on('changed.owl.carousel', function (e) {
		var syncedPosition = syncPosition(e.item.index);

		if (syncedPosition != "stayStill") {
			//            sync2.trigger('to.owl.carousel', [syncedPosition, duration, true]);
		}
	});


	var sync2 = $("#sync2");
	sync2.on('initialized.owl.carousel', function () { //must go before owl carousel initialization
		addClassCurrent(0);
	}).owlCarousel({
		items: 8,
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itefonesmart: [479, 1],
		pagination: false,
		navText: ["‹", "›"],
		loop: false,
		autoplay: false,
		responsive: {
			0: {
				items: 3,
			},
			400: {
				items: 4,
			},
			500: {
				items: 5,
			},
			600: {
				items: 3,
			},
			700: {
				items: 4,
			},
			800: {
				items: 5,
			},
			900: {
				items: 5,
			},
			1000: {
				items: 5,
			},
			1100: {
				items: 5,
			}
		}
		//		responsiveRefreshRate : 100,
		//		afterInit : function(el){
		//			el.find(".owl-item").eq(0).addClass("synced");
		//		}
	}).on("click", ".owl-item", function (e) {
		e.preventDefault();
		var number = $(this).index();
		addClassCurrent(number);
		//		sync1.trigger("to.owl.carousel", [number, 1, true]);

		var img_current = sync2.find(".owl-item").eq(number).find("img").attr('src');
		img_current = img_current.replace('/small/', '/large/');
		$("#Zoomer img").fadeTo(300, 0.30, function () {
			$("#Zoomer img").attr("src", img_current);


		}).fadeTo(300, 1);
		$("#Zoomer").attr("href", img_current);
		$("#Zoomer").attr("data-image", img_current);

		//		 MagicZoom.update('#Zoomer', img_current,img_current, 'show-title: false');
		MagicZoom.refresh();
	})
		;


	//syncs positions. argument 'index' represents absolute position of the element
	function syncPosition(index) {

		//PART 1 (adds 'current' class to thumbnail)
		addClassCurrent(index);

		//PART 2 (counts position)

		var itemsNo = sync2.find(".owl-item").length; //total items
		var visibleItemsNo = sync2.find(".owl-item.active").length; //visible items

		//if all items are visible
		if (itemsNo === visibleItemsNo) {
			return "stayStill";
		}

		//relative index (if 4 elements are visible and the 2nd of them has class 'current', returns index = 1)
		var visibleCurrentIndex = sync2.find(".owl-item.active").index(sync2.find(".owl-item.current"));

		//if it's first visible element and if there is hidden element before it
		if (visibleCurrentIndex == 0 && index != 0) {
			return index - 1;
		}

		//if it's last visible element and if there is hidden element after it
		if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
			return index - visibleItemsNo + 2;
		}

		return "stayStill";
	}
	// ./SYNCED OWL CAROUSEL




	//adds 'current' class to the thumbnail
	function addClassCurrent(index) {
		sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(index).addClass("current");
	}


	//    	$(".cb-image-inner-content").colorbox({maxHeight:"640px"});
	$(window).resize(function () {
		if (window.innerWidth <= 768) {
			sync1.trigger('next.owl.carousel');
			sync1.trigger('prev.owl.carousel');
		}
	});
});
;/**
*  Ajax Autocomplete for jQuery, version %version%
*  (c) 2015 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/

/*jslint  browser: true, white: true, plusplus: true, vars: true */
/*global define, window, document, jQuery, exports, require */

// Expose plugin as an AMD module if AMD loader is present:
(function (factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object' && typeof require === 'function') {
		// Browserify
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	'use strict';

	var
		utils = (function () {
			return {
				escapeRegExChars: function (value) {
					return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
				},
				createNode: function (containerClass) {
					var div = document.createElement('div');
					div.className = containerClass;
					div.style.position = 'absolute';
					div.style.display = 'none';
					return div;
				}
			};
		}()),

		keys = {
			ESC: 27,
			TAB: 9,
			RETURN: 13,
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40
		};

	function Autocomplete(el, options) {
		var noop = function () { },
			that = this,
			defaults = {
				ajaxSettings: {},
				autoSelectFirst: false,
				appendTo: document.body,
				serviceUrl: null,
				lookup: null,
				onSelect: null,
				width: 'auto',
				minChars: 1,
				maxHeight: 300,
				deferRequestBy: 0,
				params: {},
				formatResult: Autocomplete.formatResult,
				delimiter: null,
				zIndex: 9999,
				type: 'GET',
				noCache: false,
				onSearchStart: noop,
				onSearchComplete: noop,
				onSearchError: noop,
				preserveInput: false,
				containerClass: 'autocomplete-suggestions',
				tabDisabled: false,
				dataType: 'text',
				currentRequest: null,
				triggerSelectOnValidInput: true,
				preventBadQueries: true,
				lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
					return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
				},
				paramName: 'query',
				transformResult: function (response) {
					return typeof response === 'string' ? $.parseJSON(response) : response;
				},
				showNoSuggestionNotice: false,
				noSuggestionNotice: 'No results',
				orientation: 'bottom',
				forceFixPosition: false
			};

		// Shared variables:
		that.element = el;
		that.el = $(el);
		that.suggestions = [];
		that.badQueries = [];
		that.selectedIndex = -1;
		that.currentValue = that.element.value;
		that.intervalId = 0;
		that.cachedResponse = {};
		that.onChangeInterval = null;
		that.onChange = null;
		that.isLocal = false;
		that.suggestionsContainer = null;
		that.noSuggestionsContainer = null;
		that.options = $.extend({}, defaults, options);
		that.classes = {
			selected: 'autocomplete-selected',
			suggestion: 'autocomplete-suggestion'
		};
		that.hint = null;
		that.hintValue = '';
		that.selection = null;

		// Initialize and set options:
		that.initialize();
		that.setOptions(options);
	}

	Autocomplete.utils = utils;

	$.Autocomplete = Autocomplete;

	Autocomplete.formatResult = function (suggestion, currentValue) {
		var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';

		return suggestion.value
			.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/&lt;(\/?strong)&gt;/g, '<$1>');
	};

	Autocomplete.prototype = {

		killerFn: null,

		initialize: function () {
			var that = this,
				suggestionSelector = '.' + that.classes.suggestion,
				selected = that.classes.selected,
				options = that.options,
				container;

			// Remove autocomplete attribute to prevent native suggestions:
			that.element.setAttribute('autocomplete', 'off');

			that.killerFn = function (e) {
				if ($(e.target).closest('.' + that.options.containerClass).length === 0) {
					that.killSuggestions();
					that.disableKillerFn();
				}
			};

			// html() deals with many types: htmlString or Element or Array or jQuery
			that.noSuggestionsContainer = $('<div class="autocomplete-no-suggestion"></div>')
				.html(this.options.noSuggestionNotice).get(0);

			that.suggestionsContainer = Autocomplete.utils.createNode(options.containerClass);

			container = $(that.suggestionsContainer);

			container.appendTo(options.appendTo);

			// Only set width if it was provided:
			if (options.width !== 'auto') {
				container.width(options.width);
			}

			// Listen for mouse over event on suggestions list:
			container.on('mouseover.autocomplete', suggestionSelector, function () {
				that.activate($(this).data('index'));
			});

			// Deselect active element when mouse leaves suggestions container:
			container.on('mouseout.autocomplete', function () {
				that.selectedIndex = -1;
				container.children('.' + selected).removeClass(selected);
			});

			// Listen for click event on suggestions list:
			container.on('click.autocomplete', suggestionSelector, function () {
				// that.select($(this).data('index'));
			});

			that.fixPositionCapture = function () {
				if (that.visible) {
					that.fixPosition();
				}
			};

			$(window).on('resize.autocomplete', that.fixPositionCapture);

			that.el.on('keydown.autocomplete', function (e) { that.onKeyPress(e); });
			that.el.on('keyup.autocomplete', function (e) { that.onKeyUp(e); });
			that.el.on('blur.autocomplete', function () { that.onBlur(); });
			that.el.on('focus.autocomplete', function () { that.onFocus(); });
			that.el.on('change.autocomplete', function (e) { that.onKeyUp(e); });
			that.el.on('input.autocomplete', function (e) { that.onKeyUp(e); });
		},

		onFocus: function () {
			var that = this;
			that.fixPosition();
			if (that.options.minChars === 0 && that.el.val().length === 0) {
				that.onValueChange();
			}
		},

		onBlur: function () {
			this.enableKillerFn();
		},

		abortAjax: function () {
			var that = this;
			if (that.currentRequest) {
				that.currentRequest.abort();
				that.currentRequest = null;
			}
		},

		setOptions: function (suppliedOptions) {
			var that = this,
				options = that.options;

			$.extend(options, suppliedOptions);

			that.isLocal = $.isArray(options.lookup);

			if (that.isLocal) {
				options.lookup = that.verifySuggestionsFormat(options.lookup);
			}

			options.orientation = that.validateOrientation(options.orientation, 'bottom');

			// Adjust height, width and z-index:
			$(that.suggestionsContainer).css({
				'max-height': options.maxHeight + 'px',
				'width': options.width + 'px',
				'z-index': options.zIndex
			});
		},


		clearCache: function () {
			this.cachedResponse = {};
			this.badQueries = [];
		},

		clear: function () {
			this.clearCache();
			this.currentValue = '';
			this.suggestions = [];
		},

		disable: function () {
			var that = this;
			that.disabled = true;
			clearInterval(that.onChangeInterval);
			that.abortAjax();
		},

		enable: function () {
			this.disabled = false;
		},

		fixPosition: function () {
			// Use only when container has already its content

			var that = this,
				$container = $(that.suggestionsContainer),
				containerParent = $container.parent().get(0);
			// Fix position automatically when appended to body.
			// In other cases force parameter must be given.
			if (containerParent !== document.body && !that.options.forceFixPosition) {
				return;
			}

			// Choose orientation
			var orientation = that.options.orientation,
				containerHeight = $container.outerHeight(),
				height = that.el.outerHeight(),
				offset = that.el.offset(),
				styles = { 'top': offset.top, 'left': offset.left };

			if (orientation === 'auto') {
				var viewPortHeight = $(window).height(),
					scrollTop = $(window).scrollTop(),
					topOverflow = -scrollTop + offset.top - containerHeight,
					bottomOverflow = scrollTop + viewPortHeight - (offset.top + height + containerHeight);

				orientation = (Math.max(topOverflow, bottomOverflow) === topOverflow) ? 'top' : 'bottom';
			}

			if (orientation === 'top') {
				styles.top += -containerHeight;
			} else {
				styles.top += height;
			}

			// If container is not positioned to body,
			// correct its position using offset parent offset
			if (containerParent !== document.body) {
				var opacity = $container.css('opacity'),
					parentOffsetDiff;

				if (!that.visible) {
					$container.css('opacity', 0).show();
				}

				parentOffsetDiff = $container.offsetParent().offset();
				styles.top -= parentOffsetDiff.top;
				styles.left -= parentOffsetDiff.left;

				if (!that.visible) {
					$container.css('opacity', opacity).hide();
				}
			}

			// -2px to account for suggestions border.
			if (that.options.width === 'auto') {
				styles.width = (that.el.outerWidth() - 2) + 'px';
			}

			$container.css(styles);
		},

		enableKillerFn: function () {
			var that = this;
			$(document).on('click.autocomplete', that.killerFn);
		},

		disableKillerFn: function () {
			var that = this;
			$(document).off('click.autocomplete', that.killerFn);
		},

		killSuggestions: function () {
			var that = this;
			that.stopKillSuggestions();
			that.intervalId = window.setInterval(function () {
				if (that.visible) {
					that.el.val(that.currentValue);
					that.hide();
				}

				that.stopKillSuggestions();
			}, 50);
		},

		stopKillSuggestions: function () {
			window.clearInterval(this.intervalId);
		},

		isCursorAtEnd: function () {
			var that = this,
				valLength = that.el.val().length,
				selectionStart = that.element.selectionStart,
				range;

			if (typeof selectionStart === 'number') {
				return selectionStart === valLength;
			}
			if (document.selection) {
				range = document.selection.createRange();
				range.moveStart('character', -valLength);
				return valLength === range.text.length;
			}
			return true;
		},

		onKeyPress: function (e) {
			var that = this;

			// If suggestions are hidden and user presses arrow down, display suggestions:
			if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
				that.suggest();
				return;
			}

			if (that.disabled || !that.visible) {
				return;
			}

			switch (e.which) {
				case keys.ESC:
					that.el.val(that.currentValue);
					that.hide();
					break;
				case keys.RIGHT:
					if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
						that.selectHint();
						break;
					}
					return;
				case keys.TAB:
					if (that.hint && that.options.onHint) {
						that.selectHint();
						return;
					}
					if (that.selectedIndex === -1) {
						that.hide();
						return;
					}
					that.select(that.selectedIndex);
					if (that.options.tabDisabled === false) {
						return;
					}
					break;
				case keys.RETURN:
					if (that.selectedIndex === -1) {
						that.hide();
						return;
					}
					that.select(that.selectedIndex);
					break;
				case keys.UP:
					that.moveUp();
					break;
				case keys.DOWN:
					that.moveDown();
					break;
				default:
					return;
			}

			// Cancel event if function did not return:
			e.stopImmediatePropagation();
			e.preventDefault();
		},

		onKeyUp: function (e) {
			var that = this;

			if (that.disabled) {
				return;
			}

			switch (e.which) {
				case keys.UP:
				case keys.DOWN:
					return;
			}

			clearInterval(that.onChangeInterval);

			if (that.currentValue !== that.el.val()) {
				that.findBestHint();
				if (that.options.deferRequestBy > 0) {
					// Defer lookup in case when value changes very quickly:
					that.onChangeInterval = setInterval(function () {
						that.onValueChange();
					}, that.options.deferRequestBy);
				} else {
					that.onValueChange();
				}
			}
		},

		onValueChange: function () {
			var that = this,
				options = that.options,
				value = that.el.val(),
				query = that.getQuery(value);

			if (that.selection && that.currentValue !== query) {
				that.selection = null;
				(options.onInvalidateSelection || $.noop).call(that.element);
			}

			clearInterval(that.onChangeInterval);
			that.currentValue = value;
			that.selectedIndex = -1;

			// Check existing suggestion for the match before proceeding:
			if (options.triggerSelectOnValidInput && that.isExactMatch(query)) {
				that.select(0);
				return;
			}

			if (query.length < options.minChars) {
				that.hide();
			} else {
				that.getSuggestions(query);
			}
		},

		isExactMatch: function (query) {
			var suggestions = this.suggestions;

			return (suggestions.length === 1 && suggestions[0].value.toLowerCase() === query.toLowerCase());
		},

		getQuery: function (value) {
			var delimiter = this.options.delimiter,
				parts;

			if (!delimiter) {
				return value;
			}
			parts = value.split(delimiter);
			return $.trim(parts[parts.length - 1]);
		},

		getSuggestionsLocal: function (query) {
			var that = this,
				options = that.options,
				queryLowerCase = query.toLowerCase(),
				filter = options.lookupFilter,
				limit = parseInt(options.lookupLimit, 10),
				data;

			data = {
				suggestions: $.grep(options.lookup, function (suggestion) {
					return filter(suggestion, query, queryLowerCase);
				})
			};

			if (limit && data.suggestions.length > limit) {
				data.suggestions = data.suggestions.slice(0, limit);
			}

			return data;
		},

		getSuggestions: function (q) {
			var response,
				that = this,
				options = that.options,
				serviceUrl = options.serviceUrl,
				params,
				cacheKey,
				ajaxSettings;

			options.params[options.paramName] = q;
			params = options.ignoreParams ? null : options.params;

			if (options.onSearchStart.call(that.element, options.params) === false) {
				return;
			}

			if ($.isFunction(options.lookup)) {
				options.lookup(q, function (data) {
					that.suggestions = data.suggestions;
					that.suggest();
					options.onSearchComplete.call(that.element, q, data.suggestions);
				});
				return;
			}

			if (that.isLocal) {
				response = that.getSuggestionsLocal(q);
			} else {
				if ($.isFunction(serviceUrl)) {
					serviceUrl = serviceUrl.call(that.element, q);
				}
				cacheKey = serviceUrl + '?' + $.param(params || {});
				response = that.cachedResponse[cacheKey];
			}

			if (response && $.isArray(response.suggestions)) {
				that.suggestions = response.suggestions;
				that.suggest();
				options.onSearchComplete.call(that.element, q, response.suggestions);
			} else if (!that.isBadQuery(q)) {
				that.abortAjax();

				ajaxSettings = {
					url: serviceUrl,
					data: params,
					type: options.type,
					dataType: options.dataType
				};

				$.extend(ajaxSettings, options.ajaxSettings);

				that.currentRequest = $.ajax(ajaxSettings).done(function (data) {
					var result;
					that.currentRequest = null;
					result = options.transformResult(data, q);
					that.processResponse(result, q, cacheKey);
					options.onSearchComplete.call(that.element, q, result.suggestions);
				}).fail(function (jqXHR, textStatus, errorThrown) {
					options.onSearchError.call(that.element, q, jqXHR, textStatus, errorThrown);
				});
			} else {
				options.onSearchComplete.call(that.element, q, []);
			}
		},

		isBadQuery: function (q) {
			if (!this.options.preventBadQueries) {
				return false;
			}

			var badQueries = this.badQueries,
				i = badQueries.length;

			while (i--) {
				if (q.indexOf(badQueries[i]) === 0) {
					return true;
				}
			}

			return false;
		},

		hide: function () {
			var that = this,
				container = $(that.suggestionsContainer);

			if ($.isFunction(that.options.onHide) && that.visible) {
				that.options.onHide.call(that.element, container);
			}

			that.visible = false;
			that.selectedIndex = -1;
			clearInterval(that.onChangeInterval);
			$(that.suggestionsContainer).hide();
			that.signalHint(null);
		},

		suggest: function () {
			if (this.suggestions.length === 0) {
				if (this.options.showNoSuggestionNotice) {
					this.noSuggestions();
				} else {
					this.hide();
				}
				return;
			}

			var that = this,
				options = that.options,
				groupBy = options.groupBy,
				formatResult = options.formatResult,
				value = that.getQuery(that.currentValue),
				className = that.classes.suggestion,
				classSelected = that.classes.selected,
				container = $(that.suggestionsContainer),
				noSuggestionsContainer = $(that.noSuggestionsContainer),
				beforeRender = options.beforeRender,
				html = '',
				category,
				formatGroup = function (suggestion, index) {
					var currentCategory = suggestion.data[groupBy];

					if (category === currentCategory) {
						return '';
					}

					category = currentCategory;

					return '<div class="autocomplete-group"><strong>' + category + '</strong></div>';
				};

			if (options.triggerSelectOnValidInput && that.isExactMatch(value)) {
				that.select(0);
				return;
			}

			// Build suggestions inner HTML:
			$.each(that.suggestions, function (i, suggestion) {
				if (groupBy) {
					html += formatGroup(suggestion, value, i);
				}

				html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value) + '</div>';
			});

			this.adjustContainerWidth();

			noSuggestionsContainer.detach();
			container.html(html);

			if ($.isFunction(beforeRender)) {
				beforeRender.call(that.element, container);
			}

			that.fixPosition();
			container.show();

			// Select first value by default:
			if (options.autoSelectFirst) {
				that.selectedIndex = 0;
				container.scrollTop(0);
				container.children('.' + className).first().addClass(classSelected);
			}

			that.visible = true;
			that.findBestHint();
		},

		noSuggestions: function () {
			var that = this,
				container = $(that.suggestionsContainer),
				noSuggestionsContainer = $(that.noSuggestionsContainer);

			this.adjustContainerWidth();

			// Some explicit steps. Be careful here as it easy to get
			// noSuggestionsContainer removed from DOM if not detached properly.
			noSuggestionsContainer.detach();
			container.empty(); // clean suggestions if any
			container.append(noSuggestionsContainer);

			that.fixPosition();

			container.show();
			that.visible = true;
		},

		adjustContainerWidth: function () {
			var that = this,
				options = that.options,
				width,
				container = $(that.suggestionsContainer);

			// If width is auto, adjust width before displaying suggestions,
			// because if instance was created before input had width, it will be zero.
			// Also it adjusts if input width has changed.
			// -2px to account for suggestions border.
			if (options.width === 'auto') {
				width = that.el.outerWidth() - 2;
				container.width(width > 0 ? width : 300);
			}
		},

		findBestHint: function () {
			var that = this,
				value = that.el.val().toLowerCase(),
				bestMatch = null;

			if (!value) {
				return;
			}

			$.each(that.suggestions, function (i, suggestion) {
				var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
				if (foundMatch) {
					bestMatch = suggestion;
				}
				return !foundMatch;
			});

			that.signalHint(bestMatch);
		},

		signalHint: function (suggestion) {
			var hintValue = '',
				that = this;
			if (suggestion) {
				hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
			}
			if (that.hintValue !== hintValue) {
				that.hintValue = hintValue;
				that.hint = suggestion;
				(this.options.onHint || $.noop)(hintValue);
			}
		},

		verifySuggestionsFormat: function (suggestions) {
			// If suggestions is string array, convert them to supported format:
			if (suggestions.length && typeof suggestions[0] === 'string') {
				return $.map(suggestions, function (value) {
					return { value: value, data: null };
				});
			}

			return suggestions;
		},

		validateOrientation: function (orientation, fallback) {
			orientation = $.trim(orientation || '').toLowerCase();

			if ($.inArray(orientation, ['auto', 'bottom', 'top']) === -1) {
				orientation = fallback;
			}

			return orientation;
		},

		processResponse: function (result, originalQuery, cacheKey) {
			var that = this,
				options = that.options;

			result.suggestions = that.verifySuggestionsFormat(result.suggestions);

			// Cache results if cache is not disabled:
			if (!options.noCache) {
				that.cachedResponse[cacheKey] = result;
				if (options.preventBadQueries && result.suggestions.length === 0) {
					that.badQueries.push(originalQuery);
				}
			}

			// Return if originalQuery is not matching current query:
			if (originalQuery !== that.getQuery(that.currentValue)) {
				return;
			}

			that.suggestions = result.suggestions;
			that.suggest();
		},

		activate: function (index) {
			var that = this,
				activeItem,
				selected = that.classes.selected,
				container = $(that.suggestionsContainer),
				children = container.find('.' + that.classes.suggestion);

			container.find('.' + selected).removeClass(selected);

			that.selectedIndex = index;

			if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
				activeItem = children.get(that.selectedIndex);
				$(activeItem).addClass(selected);
				return activeItem;
			}

			return null;
		},

		selectHint: function () {
			var that = this,
				i = $.inArray(that.hint, that.suggestions);

			that.select(i);
		},

		select: function (i) {
			var that = this;
			that.hide();
			that.onSelect(i);
		},

		moveUp: function () {
			var that = this;

			if (that.selectedIndex === -1) {
				return;
			}

			if (that.selectedIndex === 0) {
				$(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
				that.selectedIndex = -1;
				that.el.val(that.currentValue);
				that.findBestHint();
				return;
			}

			that.adjustScroll(that.selectedIndex - 1);
		},

		moveDown: function () {
			var that = this;

			if (that.selectedIndex === (that.suggestions.length - 1)) {
				return;
			}

			that.adjustScroll(that.selectedIndex + 1);
		},

		adjustScroll: function (index) {
			var that = this,
				activeItem = that.activate(index);

			if (!activeItem) {
				return;
			}

			var offsetTop,
				upperBound,
				lowerBound,
				heightDelta = $(activeItem).outerHeight();

			offsetTop = activeItem.offsetTop;
			upperBound = $(that.suggestionsContainer).scrollTop();
			lowerBound = upperBound + that.options.maxHeight - heightDelta;

			if (offsetTop < upperBound) {
				$(that.suggestionsContainer).scrollTop(offsetTop);
			} else if (offsetTop > lowerBound) {
				$(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
			}

			if (!that.options.preserveInput) {
				that.el.val(that.getValue(that.suggestions[index].value));
			}
			that.signalHint(null);
		},

		onSelect: function (index) {
			var that = this,
				onSelectCallback = that.options.onSelect,
				suggestion = that.suggestions[index];

			that.currentValue = that.getValue(suggestion.value);

			if (that.currentValue !== that.el.val() && !that.options.preserveInput) {
				that.el.val(that.currentValue);
			}

			that.signalHint(null);
			that.suggestions = [];
			that.selection = suggestion;

			if ($.isFunction(onSelectCallback)) {
				onSelectCallback.call(that.element, suggestion);
			}
		},

		getValue: function (value) {
			var that = this,
				delimiter = that.options.delimiter,
				currentValue,
				parts;

			if (!delimiter) {
				return value;
			}

			currentValue = that.currentValue;
			parts = currentValue.split(delimiter);

			if (parts.length === 1) {
				return value;
			}

			return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
		},

		dispose: function () {
			var that = this;
			that.el.off('.autocomplete').removeData('autocomplete');
			that.disableKillerFn();
			$(window).off('resize.autocomplete', that.fixPositionCapture);
			$(that.suggestionsContainer).remove();
		}
	};

	// Create chainable jQuery plugin:
	$.fn.autocomplete = $.fn.devbridgeAutocomplete = function (options, args) {
		var dataKey = 'autocomplete';
		// If function invoked without argument return
		// instance of the first matched element:
		if (arguments.length === 0) {
			return this.first().data(dataKey);
		}

		return this.each(function () {
			var inputElement = $(this),
				instance = inputElement.data(dataKey);

			if (typeof options === 'string') {
				if (instance && typeof instance[options] === 'function') {
					instance[options](args);
				}
			} else {
				// If instance already exists, destroy it:
				if (instance && instance.dispose) {
					instance.dispose();
				}
				instance = new Autocomplete(this, options);
				inputElement.data(dataKey, instance);
			}
		});
	};
}));
;/*! jQuery & Zepto Lazy - iFrame Plugin v1.5 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function (t) { t.lazy(["frame", "iframe"], "iframe", function (r, e) { var a = this; if ("iframe" === r[0].tagName.toLowerCase()) { var i = "data-src", o = "data-error-detect", n = r.attr(o); "true" !== n && "1" !== n ? (r.attr("src", r.attr(i)), a.config("removeAttribute") && r.removeAttr(i + " " + o)) : t.ajax({ url: r.attr(i), dataType: "html", crossDomain: !0, xhrFields: { withCredentials: !0 }, success: function (t) { r.html(t).attr("src", r.attr(i)), a.config("removeAttribute") && r.removeAttr(i + " " + o) }, error: function () { e(!1) } }) } else e(!1) }) }(window.jQuery || window.Zepto);;
$(function () {
	$("iframe").Lazy();
	incrementer();
});
var smartTab = jQuery("#smartTab");
var fixedTop = 0;
var headerTabTop = fixedTop + 80;
var clickNum = -1;

$(document).ready(function () {

	$('.calendar_fixed').click(function (event) {
		$('.modal_calendar').toggleClass('block');
		$('.full_screen').toggleClass('block');
	});


	$('#progress_bar_plus').owlCarousel({
		items: 1,
		nav: true,
		dots: true,

	});

	$('.show_reply_form').click(function () {
		$('.form_comment_reply').css({ "display": "none" });
		$(this).parent().parent().parent().find('.form_comment_reply').first().css({ "display": "block" });
	});


	$('.rate_count').click(function () {
		$('html, body').animate({ scrollTop: $('#comment_add_form').offset().top }, 500);
	});
	// Add new comment 

	$('#commentbt').click(function () {
		var name = $("#comment_name").val().trim();
		var email = $("#comment_email").val().trim();
		var textcomment = $("#comment_text").val().trim();
		if (name == "" || email == "" || textcomment == "") {
			alert("Bạn cần nhập đầy đủ thông tin trước khi comment");
			return false;
		}

		var commentForm = $('#comment_add_form');
		$.ajax({
			method: "POST",
			url: "",
			data: commentForm.serialize(),
			success: function (result) {
				var resultObj = jQuery.parseJSON(result);
				if (resultObj.success == 1) {
					// hide form and clear data 
					$("#comment_name").val("");
					$("#comment_email").val("");
					$("#comment_text").val("");
					// Display new comment 
					var commentTempl = $("#commentTempl").clone();
					commentTempl.css({ "display": "block" });
					commentTempl.removeClass("item-reply");
					commentTempl.find("span.name > strong").html(resultObj.name);
					commentTempl.find("div.comment_content").html(resultObj.textContent);
					commentTempl.find("p.commemn_ff > span.date").html('<i class="fa fa-calendar" aria-hidden="true"></i>' + resultObj.save_time);
					$("#commem_lindo").prepend("<div class='clear'></div>");
					$("#commem_lindo").prepend(commentTempl);
				} else {
					alert(resultObj.msg);
				}
			}
		});
		return false;
	});

	// Reply comment 
	$('.btnSendComment').click(function () {
		var name = $(this).parent().parent().parent().find(".name_comment").val().trim();
		var email = $(this).parent().parent().parent().find(".email_comment").val().trim();
		var textcomment = $(this).parent().parent().parent().find(".text_comment").val().trim();
		if (name == "" || email == "" || textcomment == "") {
			alert("Bạn cần nhập đầy đủ thông tin trước khi comment");
			return false;
		}
		var record_id = $("#record_id").val();
		var parent_id = $(this).parent().find(".comment_parrent").val();
		var parentComment = $(this).parent().parent().parent().parent().parent();
		$.ajax({
			method: "POST",
			url: "",
			context: parentComment,
			data: { name: name, email: email, text: textcomment, ajax: 1, record_id: record_id, parent_id: parent_id, module: "repairs", view: "repair", task: "save_reply" },
			success: function (result) {
				var resultObj = jQuery.parseJSON(result);
				if (resultObj.success == 1) {
					// hide form and clear data 
					$(".form_comment_reply").css({ "display": "none" });
					parentComment.find(".name_comment").val("");
					parentComment.find(".email_comment").val("");
					parentComment.find(".text_comment").val("");

					// Display new comment 
					var commentTempl = $("#commentTempl").clone();
					commentTempl.css({ "display": "block" });
					commentTempl.addClass("item-reply");
					commentTempl.find("span.name > strong").html(resultObj.name);
					commentTempl.find("div.comment_content").html(resultObj.textContent);
					commentTempl.find("p.commemn_ff > span.date").html('<i class="fa fa-calendar" aria-hidden="true"></i>' + resultObj.save_time);
					parentComment.after("<div class='clear'></div>");
					parentComment.after(commentTempl);
				} else {
					alert(resultObj.msg);
				}
			}
		});
	});
	// owl_article();
	toogle_desc();
	open_popup_charactestic();
	open_popup_quick_order();
	close_modal();
	search_compare();
	toogle_desc2();

	click_tab();

	// slideshow_ordercart();
	// if ( smartTab ) {processScrollDetails();}
	// jQuery(window).scroll(function(){
	// 	processScrollDetails();
	// });
});

function click_tab() {
	jQuery("#smartTab li a").click(function () {
		var target = jQuery(jQuery(this).attr("href"));
		clickNum = parseInt(jQuery(this).attr("href").replace("#prodetails_tab", ""), 10);


		jQuery(smartTab).find("li:eq(" + (clickNum - 1) + ")").addClass("active");

		jQuery("html:not(:animated), body:not(:animated)").animate({ scrollTop: (jQuery(target).offset().top - (jQuery(this).attr("href") == "#prodetails_tab2" ? 45 : 45)) }, function () {
			clickNum = -1;
		});
		return false;
	});
}

// function processScrollDetails() {
// 	var no_tab =  $('.repair_tabs_ul li').length;
// 	var minTop = jQuery("#prodetails_tab1").offset().top-45;
// 	var last_element = jQuery('.repair_tab_content').find(".prodetails_tab:eq(" + (no_tab - 1) + ")");
// 	var maxTop = last_element.offset().top + last_element.height() - 45;
// 	var scrollTop = jQuery(window).scrollTop();
// 	if(scrollTop >= minTop && scrollTop <= maxTop){
// 		jQuery(smartTab).find("li").removeClass("active");
// 		jQuery(smartTab).css({'position' : 'fixed', 'top' : fixedTop + 'px', 'margin-top' : '0px'});
// 		for(var i = 1; i <= no_tab; i ++){
// 			element = $('#prodetails_tab'+i);
// 			if( scrollTop >= (element.offset().top - 45) && scrollTop <= ((element.offset().top + element.height()) -45)){
// 				jQuery(smartTab).find("li:eq(" + (i - 1) + ")").addClass("active");
// 				break;
// 			}
// 		}

// 	}else{
// 		jQuery(smartTab).css({'position' : '', 'top' : '', 'margin-top' : ''});
// 	}
// }

// $('._zoomimg').click(function(){
// 	$( "#_zoomimg" ).remove();
// 	var id = $('#repair_id').val();
// 	$.get('/index.php?module=repairs&view=repair&task=show_image&raw=1',{id:id}, function(data,this_element){
// 		$('<div class="modal  fade" id="_zoomimg">' + data + '</div>').modal();
// 	});

// });

function buy_add(id) {
	var buy_count = $('#buy_count').val();
	var boxwarranty = $('.boxwarranty').val();


	var link = '/index.php?module=repairs&view=cart&task=buy_multi&raw=1&id=' + id + '&buy_count=' + buy_count + '&boxwarranty=' + boxwarranty;
	window.location.href = link;

}

/* FORM CONTACT */
$('#submitbt').click(function () {

	if (checkFormsubmit())
		document.eshopcart_info.submit();
})
$('#resetbt').click(function () {
	document.eshopcart_info.reset();
})
function checkFormsubmit() {
	$('label.label_error').prev().prev().remove();
	$('label.label_error').prev().remove();
	if (!notEmpty("quantity_modal", "Bạn phải nhập số lượng")) {
		return false;
	}
	if (!isPhone("quantity_modal", "Bạn phải nhập số"))
		return false;
	if (!notEmpty("sender_name", "Bạn phải nhập họ tên")) {
		return false;
	}
	if (!notEmpty("sender_telephone", "Bạn phải nhập số phone")) {
		return false;
	}
	if (!isPhone("sender_telephone", "Bạn nhập số điện thoại không hợp lệ"))
		return false;
	if (!notEmpty("sender_address", "Bạn phải nhập địa chỉ gửi về"))
		return false;
	//	if(!notEmpty("sender_email","Hãy nhập email"))
	//		return false;
	//	if(!emailValidator("sender_email","Email nhập không hợp lệ")){
	//		return false;
	//	}	
	//	if(!notEmpty("received_time","Bạn phải nhập thời gian nhận hàng"))
	//		return false;
	return true;
}
function submit_form_buy_fast1() {
	$('label.label_error').prev().prev().remove();
	$('label.label_error').prev().remove();

	if (!notEmpty("checked_pemisstion", "Bạn phải nhập số điện thoại")) {
		return false;
	}
	if (!isPhone("checked_pemisstion", "Bạn nhập số điện thoại không hợp lệ"))
		return false;

	return true;
}

$(window).load(function () {

});


//function favourite(id){
//	$.ajax({
//	  url: root+"index.php?module=repairs&view=favourites&task=add&raw=1&data="+id,
//	  cache: false,
//	  
//	  success: function(json){
//	  		json = jQuery.trim(json);
//	    	if(json == '1')
//	    	{
//	    		alert("Bạn đã lưu thành công vào danh mục yêu thích");
//	    		return 0;
//	    	}
//	    	else if(json == '2')
//	    	{
//	    		alert("Sản phẩm này đã tồn tại trong danh mục yêu thích của bạn");
//	    		return true;
//	    	}
//	    	else 
//	    	{
//	    		alert("Không lưu vào danh mục yêu thích");
//				return true;
//	    	}
//	  },
//	  error: function()
//	  {
//		 console.log('error');
//		 return false;
//	  }
//	});
//}

function load_quick(element) {
	var basic_price = $('#basic_price').val();
	var memory_curent = $('#memory_curent').val();
	var usage_states_curent = $('#usage_states_curent').val();
	var color_curent = $('#color_curent').val();
	var basic_price_old = $('#basic_price_old').val();
	var warranty_curent = $('#warranty_curent').val();
	var origin_curent = $('#origin_curent').val();
	var species_curent = $('#species_curent').val();
	var region_curent = $('#region_curent').val();
	// var price =  $(element).find("option:selected").data("price");
	// var type  =  $(element).find("option:selected").data("type");

	var price = $(element).find("option:selected").data("price");
	basic_price_old = parseInt(basic_price_old);

	if (!price) {
		price = $(element).data('price');
		if (!price)
			price = 0;
	}
	var type = $(element).find("option:selected").data("type");
	if (!type)
		type = $(element).data('type');


	var price = $(element).find("option:selected").data("price");

	if (!price) {
		price = $(element).data('price');
		if (!price)
			price = 0;
	}

	var price_old = $(element).find("option:selected").data("price-old");
	if (!price_old) {
		price_old = $(element).data('price-old');
		if (!price_old)
			price_old = 0;
	}

	var type = $(element).find("option:selected").data("type");
	if (!type)
		type = $(element).data('type');

	var color_id_h = $(element).data('color');
	var f = $(".color_thump_" + color_id_h).first();
	var order = f.data('order');
	order = parseInt(order);
	$(".color_thump_" + color_id_h).first().trigger("click");

	var img_styling = $(".color_thump_" + color_id_h).attr('data-img-color');

	$('#img-root-styling').attr('src', img_styling);
	$('#products_slideshow .active img').attr('src', img_styling);


	// var price_styling = $(element).find('active').addClass('aaaaaaa');
	// alert(price_styling);
	// $('#img-root-styling').attr('src',img_styling);

	// sync1.trigger("to.owl.carousel", [order, 1, true]);

	if (type == 'warranty') {
		var number = parseInt(basic_price) + parseInt(price);
		var number_old = parseInt(basic_price_old) + parseInt(price);
		// alert(number)
		$('#warranty_curent').val(price);
		let w_id = $('.boxwarranty').val();
		let pr_id = $('#repair_id').val();

		$(".boxwarranty").val($(element).find("option:selected").val());
		$.ajax({
			type: "POST",
			url: "/index.php?module=repairs&view=repair&task=fetch_warranty&raw=1",
			data: { w_id: w_id, pr_id: pr_id },
			cache: false,
			success: function (html) {
				$('.boxwarranty2').val(w_id);
				$("#box_warranty").html(html);
			}
		});
	} else if (type == 'warranty2') {
		var number = parseInt(basic_price) + parseInt(price) + parseInt(memory_curent) + parseInt(color_curent) + parseInt(origin_curent) + parseInt(species_curent) + parseInt(usage_states_curent) + parseInt(region_curent);

		var number_old = parseInt(basic_price_old) + parseInt(price) + parseInt(memory_curent) + parseInt(color_curent) + parseInt(origin_curent) + parseInt(species_curent) + parseInt(usage_states_curent) + parseInt(region_curent);
		$('#warranty_curent').val(price);
		let w_id = $('.boxwarranty2').val();
		let pr_id = $('#repair_id').val();

		$(".boxwarranty2").val($(element).find("option:selected").val());
		$.ajax({
			type: "POST",
			url: "/index.php?module=repairs&view=repair&task=fetch_warranty&raw=1",
			data: { w_id: w_id, pr_id: pr_id },
			cache: false,
			success: function (html) {
				$('.boxwarranty').val(w_id);
				$("#box_warranty").html(html);
			}
		});
	}
	number_old = parseInt(number_old);

	// alert($(element).data('price'));   

	//Định dạng lại giá
	var number = number.toString();
	var format_money = "";
	while (parseInt(number) > 999) {
		format_money = "." + number.slice(-3) + format_money;
		number = number.slice(0, -3);
	}
	result = number + format_money;

	//Định dạng lại giá cũ
	var number_old = number_old.toString();
	var format_money2 = "";
	while (parseInt(number_old) > 999) {
		format_money2 = "." + number_old.slice(-3) + format_money2;
		number_old = number_old.slice(0, -3);
	}
	var result_old = number_old + format_money2;

	$('.price_modal').html(result + '₫</span>');
	if (result == 0) {
		$('#price').html('Liên hệ');
		$('#text_warranty').html('Giá:');
		$('#price_warranty').html(' +0₫');
	} else {
		$('#price').html(result + '₫</span>');
		$('#text_warranty').html('Giá:');
		$('#price_warranty').html('+' + result + '₫');
	}

	$('#price_2').html(result + '₫</span>');
	$('#price_old').html(result_old + '₫</span>');


}


//show_tooltip();
//function show_tooltip(){
//	 $('.color_item').tooltip({
//	        placement : 'top'
//	    });
//}

click_color();
function click_color() {
	$('.Selector').click(function () {
		$('.Selector').removeClass('active');
		$(this).addClass('active');

	})
}
//function owl_article(){
//
//	$('.relate_repairs').owlCarousel({
//	  items:4,
//	   margin:10,
//	  loop:false,
//	   nav:true,
//	    autoplay:false,
//	     responsive:{
//          0:{
//              items:1
//          },
//          480:{
//              items:2
//          },
//          720:{
//              items:3
//          },
//          900:{
//              items:4
//          }
//
//      }
//	});
//}
function toogle_desc() {
	var expandedHeight = $('.box_conten_linfo_inner').height();
	$('#readmore_desc span').click(function () {
		if ($(this).hasClass('closed')) {
			$(this).removeClass('closed').addClass('opened');
			$('#box_conten_linfo').css('max-height', 'none');
		} else {
			//			$('#box_conten_linfo').animate({max-height:'400px'},3000);
			$('#box_conten_linfo').css('max-height', '400px');
			$(this).removeClass('opened').addClass('closed');
		}

	})
}

function toogle_desc2() {
	var expandedHeight = $('.solution .text').height();
	$('#readmore_desc2 span').click(function () {
		if ($(this).hasClass('closed')) {
			$(this).removeClass('closed').addClass('opened');
			$('.solution').css('max-height', 'none');
			$(this).html('Thu gọn');
		} else {
			//			$('#box_conten_linfo').animate({max-height:'400px'},3000);
			$('.solution').css('max-height', '155px');
			$(this).removeClass('opened').addClass('closed');
			$(this).html('Xem thêm bảng giá dịch vụ');
		}

	})
}
function open_popup_charactestic() {
	$('#readmore_chareactestic').click(function () {
		$('#charactestic_detail').show();
	})
}
function open_popup_quick_order() {
	$('#buy-now').click(function () {
		$('#modal_buy_now').show();
	});
	$('#buy-now-2').click(function () {
		$('#modal_buy_now').show();
	})
}

function close_modal() {
	$('.modal-header button').click(function () {
		$('.modal').hide();
	});
	$('.modal-full-screen').click(function () {
		$('.modal').hide();
	});
}
// sticky_compare();
function sticky_compare() {
	var width = $(window).width();
	if (width < 1030)
		return;


	var element_height = $('#sticky_right').height();
	var top_max = $('#sticky_right').offset().top;

	$(window).scroll(function () {



		var scrolltop = $(window).scrollTop();
		var pos_bottom = $('#repair_page').offset().top + $('#repair_page').height();

		if (top_max <= scrolltop) {
			if ((pos_bottom - element_height) >= scrolltop) {
				$('#sticky_right').css({
					position: 'fixed',
					top: '50px',
					width: 'inherit'
				});
			} else {
				$('#sticky_right').css({
					position: 'absolute',
					bottom: '10px',
					top: ''
				});
			}

		} else {
			$('#sticky_right').css({
				position: 'relative',
				width: '',
				bottom: '',
				top: ''
			});
		}
	});

}

function search_compare() {
	var table_name = $('#table_name').val();
	var id = $('#record_id').val();
	var code = $('#record_alias').val();
	$('#compare_name').autocomplete({
		serviceUrl: "/index.php?module=repairs&view=search&raw=1&task=get_ajax_search_compare&table_name=" + table_name + "&codes=" + code + "&ids=" + id,
		groupBy: "",
		minChars: 2,
		containerClass: 'autocomplete-suggestions-compare',
		width: '300',
		formatResult: function (n, t) {
			t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			var i = n.data.text.split(" "), r = "";
			for (j = 0; j < i.length; j++)
				r += t.toLowerCase().indexOf(i[j].toLowerCase()) >= 0 ? "<strong>" + i[j] + "</strong> " : i[j] + " ";
			return ' <a href = "' + n.value + '" > <img src = "' + n.data.image + '" /> <label> <span> ' + r + ' </span> <span class = "price"> ' + n.data.price + "</span></label></a>"
		},
		onSelect: function (n) {
			$(".control input[name=kwd]").val(n.data.text)
		}
	});
}

function incrementer() {


	$(".numbers-row .button").on("click", function () {
		var $button = $(this);
		var oldValue = $('#buy_count').val();

		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}

		$('#buy_count').val(newVal);

	});
}


function slideshow_ordercart() {
	$('#repairs_orders').owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		nav: false,

		autoplayHoverPause: true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp'
	});

}
;/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2016
 * @version 1.3.4
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */var DateFormatter; !function () { "use strict"; var t, e, r, n, a, u, i; u = 864e5, i = 3600, t = function (t, e) { return "string" == typeof t && "string" == typeof e && t.toLowerCase() === e.toLowerCase() }, e = function (t, r, n) { var a = n || "0", u = t.toString(); return u.length < r ? e(a + u, r) : u }, r = function (t) { var e, n; for (t = t || {}, e = 1; e < arguments.length; e++)if (n = arguments[e]) for (var a in n) n.hasOwnProperty(a) && ("object" == typeof n[a] ? r(t[a], n[a]) : t[a] = n[a]); return t }, n = function (t, e) { for (var r = 0; r < e.length; r++)if (e[r].toLowerCase() === t.toLowerCase()) return r; return -1 }, a = { dateSettings: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], meridiem: ["AM", "PM"], ordinal: function (t) { var e = t % 10, r = { 1: "st", 2: "nd", 3: "rd" }; return 1 !== Math.floor(t % 100 / 10) && r[e] ? r[e] : "th" } }, separators: /[ \-+\/\.T:@]/g, validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g, intParts: /[djwNzmnyYhHgGis]/g, tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, tzClip: /[^-+\dA-Z]/g }, DateFormatter = function (t) { var e = this, n = r(a, t); e.dateSettings = n.dateSettings, e.separators = n.separators, e.validParts = n.validParts, e.intParts = n.intParts, e.tzParts = n.tzParts, e.tzClip = n.tzClip }, DateFormatter.prototype = { constructor: DateFormatter, getMonth: function (t) { var e, r = this; return e = n(t, r.dateSettings.monthsShort) + 1, 0 === e && (e = n(t, r.dateSettings.months) + 1), e }, parseDate: function (e, r) { var n, a, u, i, s, o, c, f, l, h, d = this, g = !1, m = !1, p = d.dateSettings, y = { date: null, year: null, month: null, day: null, hour: 0, min: 0, sec: 0 }; if (!e) return null; if (e instanceof Date) return e; if ("U" === r) return u = parseInt(e), u ? new Date(1e3 * u) : e; switch (typeof e) { case "number": return new Date(e); case "string": break; default: return null }if (n = r.match(d.validParts), !n || 0 === n.length) throw new Error("Invalid date format definition."); for (a = e.replace(d.separators, "\x00").split("\x00"), u = 0; u < a.length; u++)switch (i = a[u], s = parseInt(i), n[u]) { case "y": case "Y": if (!s) return null; l = i.length, y.year = 2 === l ? parseInt((70 > s ? "20" : "19") + i) : s, g = !0; break; case "m": case "n": case "M": case "F": if (isNaN(s)) { if (o = d.getMonth(i), !(o > 0)) return null; y.month = o } else { if (!(s >= 1 && 12 >= s)) return null; y.month = s } g = !0; break; case "d": case "j": if (!(s >= 1 && 31 >= s)) return null; y.day = s, g = !0; break; case "g": case "h": if (c = n.indexOf("a") > -1 ? n.indexOf("a") : n.indexOf("A") > -1 ? n.indexOf("A") : -1, h = a[c], c > -1) f = t(h, p.meridiem[0]) ? 0 : t(h, p.meridiem[1]) ? 12 : -1, s >= 1 && 12 >= s && f > -1 ? y.hour = s + f - 1 : s >= 0 && 23 >= s && (y.hour = s); else { if (!(s >= 0 && 23 >= s)) return null; y.hour = s } m = !0; break; case "G": case "H": if (!(s >= 0 && 23 >= s)) return null; y.hour = s, m = !0; break; case "i": if (!(s >= 0 && 59 >= s)) return null; y.min = s, m = !0; break; case "s": if (!(s >= 0 && 59 >= s)) return null; y.sec = s, m = !0 }if (g === !0 && y.year && y.month && y.day) y.date = new Date(y.year, y.month - 1, y.day, y.hour, y.min, y.sec, 0); else { if (m !== !0) return null; y.date = new Date(0, 0, 0, y.hour, y.min, y.sec, 0) } return y.date }, guessDate: function (t, e) { if ("string" != typeof t) return t; var r, n, a, u, i, s, o = this, c = t.replace(o.separators, "\x00").split("\x00"), f = /^[djmn]/g, l = e.match(o.validParts), h = new Date, d = 0; if (!f.test(l[0])) return t; for (a = 0; a < c.length; a++) { if (d = 2, i = c[a], s = parseInt(i.substr(0, 2)), isNaN(s)) return null; switch (a) { case 0: "m" === l[0] || "n" === l[0] ? h.setMonth(s - 1) : h.setDate(s); break; case 1: "m" === l[0] || "n" === l[0] ? h.setDate(s) : h.setMonth(s - 1); break; case 2: if (n = h.getFullYear(), r = i.length, d = 4 > r ? r : 4, n = parseInt(4 > r ? n.toString().substr(0, 4 - r) + i : i.substr(0, 4)), !n) return null; h.setFullYear(n); break; case 3: h.setHours(s); break; case 4: h.setMinutes(s); break; case 5: h.setSeconds(s) }u = i.substr(d), u.length > 0 && c.splice(a + 1, 0, u) } return h }, parseFormat: function (t, r) { var n, a = this, s = a.dateSettings, o = /\\?(.?)/gi, c = function (t, e) { return n[t] ? n[t]() : e }; return n = { d: function () { return e(n.j(), 2) }, D: function () { return s.daysShort[n.w()] }, j: function () { return r.getDate() }, l: function () { return s.days[n.w()] }, N: function () { return n.w() || 7 }, w: function () { return r.getDay() }, z: function () { var t = new Date(n.Y(), n.n() - 1, n.j()), e = new Date(n.Y(), 0, 1); return Math.round((t - e) / u) }, W: function () { var t = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3), r = new Date(t.getFullYear(), 0, 4); return e(1 + Math.round((t - r) / u / 7), 2) }, F: function () { return s.months[r.getMonth()] }, m: function () { return e(n.n(), 2) }, M: function () { return s.monthsShort[r.getMonth()] }, n: function () { return r.getMonth() + 1 }, t: function () { return new Date(n.Y(), n.n(), 0).getDate() }, L: function () { var t = n.Y(); return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 1 : 0 }, o: function () { var t = n.n(), e = n.W(), r = n.Y(); return r + (12 === t && 9 > e ? 1 : 1 === t && e > 9 ? -1 : 0) }, Y: function () { return r.getFullYear() }, y: function () { return n.Y().toString().slice(-2) }, a: function () { return n.A().toLowerCase() }, A: function () { var t = n.G() < 12 ? 0 : 1; return s.meridiem[t] }, B: function () { var t = r.getUTCHours() * i, n = 60 * r.getUTCMinutes(), a = r.getUTCSeconds(); return e(Math.floor((t + n + a + i) / 86.4) % 1e3, 3) }, g: function () { return n.G() % 12 || 12 }, G: function () { return r.getHours() }, h: function () { return e(n.g(), 2) }, H: function () { return e(n.G(), 2) }, i: function () { return e(r.getMinutes(), 2) }, s: function () { return e(r.getSeconds(), 2) }, u: function () { return e(1e3 * r.getMilliseconds(), 6) }, e: function () { var t = /\((.*)\)/.exec(String(r))[1]; return t || "Coordinated Universal Time" }, I: function () { var t = new Date(n.Y(), 0), e = Date.UTC(n.Y(), 0), r = new Date(n.Y(), 6), a = Date.UTC(n.Y(), 6); return t - e !== r - a ? 1 : 0 }, O: function () { var t = r.getTimezoneOffset(), n = Math.abs(t); return (t > 0 ? "-" : "+") + e(100 * Math.floor(n / 60) + n % 60, 4) }, P: function () { var t = n.O(); return t.substr(0, 3) + ":" + t.substr(3, 2) }, T: function () { var t = (String(r).match(a.tzParts) || [""]).pop().replace(a.tzClip, ""); return t || "UTC" }, Z: function () { return 60 * -r.getTimezoneOffset() }, c: function () { return "Y-m-d\\TH:i:sP".replace(o, c) }, r: function () { return "D, d M Y H:i:s O".replace(o, c) }, U: function () { return r.getTime() / 1e3 || 0 } }, c(t, t) }, formatDate: function (t, e) { var r, n, a, u, i, s = this, o = "", c = "\\"; if ("string" == typeof t && (t = s.parseDate(t, e), !t)) return null; if (t instanceof Date) { for (a = e.length, r = 0; a > r; r++)i = e.charAt(r), "S" !== i && i !== c && (r > 0 && e.charAt(r - 1) === c ? o += i : (u = s.parseFormat(i, t), r !== a - 1 && s.intParts.test(i) && "S" === e.charAt(r + 1) && (n = parseInt(u) || 0, u += s.dateSettings.ordinal(n)), o += u)); return o } return "" } } }();/**
 * @preserve jQuery DateTimePicker
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * @author Chupurnov Valeriy (<chupurnov@gmail.com>)
 */

/**
 * @param {jQuery} $
 */
var datetimepickerFactory = function ($) {
	'use strict';

	var default_options = {
		i18n: {
			ar: { // Arabic
				months: [
					"كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
				],
				dayOfWeekShort: [
					"ن", "ث", "ع", "خ", "ج", "س", "ح"
				],
				dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
			},
			ro: { // Romanian
				months: [
					"Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
				],
				dayOfWeekShort: [
					"Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"
				],
				dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
			},
			id: { // Indonesian
				months: [
					"Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
				],
				dayOfWeekShort: [
					"Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"
				],
				dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
			},
			is: { // Icelandic
				months: [
					"Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"
				],
				dayOfWeekShort: [
					"Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"
				],
				dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
			},
			bg: { // Bulgarian
				months: [
					"Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
				],
				dayOfWeekShort: [
					"Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
				],
				dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
			},
			fa: { // Persian/Farsi
				months: [
					'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
				],
				dayOfWeekShort: [
					'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
				],
				dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
			},
			ru: { // Russian
				months: [
					'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
				],
				dayOfWeekShort: [
					"Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
				],
				dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
			},
			uk: { // Ukrainian
				months: [
					'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
				],
				dayOfWeekShort: [
					"Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"
				],
				dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
			},
			en: { // English
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeekShort: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				],
				dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			},
			el: { // Ελληνικά
				months: [
					"Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
				],
				dayOfWeekShort: [
					"Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"
				],
				dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
			},
			de: { // German
				months: [
					'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
				],
				dayOfWeekShort: [
					"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
				],
				dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
			},
			nl: { // Dutch
				months: [
					"januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
				],
				dayOfWeekShort: [
					"zo", "ma", "di", "wo", "do", "vr", "za"
				],
				dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
			},
			tr: { // Turkish
				months: [
					"Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
				],
				dayOfWeekShort: [
					"Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
				],
				dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
			},
			fr: { //French
				months: [
					"Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
				],
				dayOfWeekShort: [
					"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
				],
				dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
			},
			es: { // Spanish
				months: [
					"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
				],
				dayOfWeekShort: [
					"Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
				],
				dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
			},
			th: { // Thai
				months: [
					'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
				],
				dayOfWeekShort: [
					'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
				],
				dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
			},
			pl: { // Polish
				months: [
					"styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
				],
				dayOfWeekShort: [
					"nd", "pn", "wt", "śr", "cz", "pt", "sb"
				],
				dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
			},
			pt: { // Portuguese
				months: [
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeekShort: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
				],
				dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
			},
			ch: { // Simplified Chinese
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeekShort: [
					"日", "一", "二", "三", "四", "五", "六"
				]
			},
			se: { // Swedish
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
				],
				dayOfWeekShort: [
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
				]
			},
			km: { // Khmer (ភាសាខ្មែរ)
				months: [
					"មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​"
				],
				dayOfWeekShort: ["អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
				dayOfWeek: ["អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"]
			},
			kr: { // Korean
				months: [
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
				],
				dayOfWeekShort: [
					"일", "월", "화", "수", "목", "금", "토"
				],
				dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
			},
			it: { // Italian
				months: [
					"Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
				],
				dayOfWeekShort: [
					"Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
				],
				dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
			},
			da: { // Dansk
				months: [
					"Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
				],
				dayOfWeekShort: [
					"Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
				],
				dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
			},
			no: { // Norwegian
				months: [
					"Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
				],
				dayOfWeekShort: [
					"Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
				],
				dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
			},
			ja: { // Japanese
				months: [
					"1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
				],
				dayOfWeekShort: [
					"日", "月", "火", "水", "木", "金", "土"
				],
				dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
			},
			vi: { // Vietnamese
				months: [
					"Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
				],
				dayOfWeekShort: [
					"CN", "T2", "T3", "T4", "T5", "T6", "T7"
				],
				dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
			},
			sl: { // Slovenščina
				months: [
					"Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
				],
				dayOfWeekShort: [
					"Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"
				],
				dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
			},
			cs: { // Čeština
				months: [
					"Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
				],
				dayOfWeekShort: [
					"Ne", "Po", "Út", "St", "Čt", "Pá", "So"
				]
			},
			hu: { // Hungarian
				months: [
					"Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
				],
				dayOfWeekShort: [
					"Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"
				],
				dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
			},
			az: { //Azerbaijanian (Azeri)
				months: [
					"Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
				],
				dayOfWeekShort: [
					"B", "Be", "Ça", "Ç", "Ca", "C", "Ş"
				],
				dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
			},
			bs: { //Bosanski
				months: [
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				dayOfWeekShort: [
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
				],
				dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
			},
			ca: { //Català
				months: [
					"Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
				],
				dayOfWeekShort: [
					"Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"
				],
				dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
			},
			'en-GB': { //English (British)
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeekShort: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				],
				dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			},
			et: { //"Eesti"
				months: [
					"Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
				],
				dayOfWeekShort: [
					"P", "E", "T", "K", "N", "R", "L"
				],
				dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
			},
			eu: { //Euskara
				months: [
					"Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
				],
				dayOfWeekShort: [
					"Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."
				],
				dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
			},
			fi: { //Finnish (Suomi)
				months: [
					"Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
				],
				dayOfWeekShort: [
					"Su", "Ma", "Ti", "Ke", "To", "Pe", "La"
				],
				dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
			},
			gl: { //Galego
				months: [
					"Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"
				],
				dayOfWeekShort: [
					"Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"
				],
				dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
			},
			hr: { //Hrvatski
				months: [
					"Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
				],
				dayOfWeekShort: [
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
				],
				dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
			},
			ko: { //Korean (한국어)
				months: [
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
				],
				dayOfWeekShort: [
					"일", "월", "화", "수", "목", "금", "토"
				],
				dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
			},
			lt: { //Lithuanian (lietuvių)
				months: [
					"Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"
				],
				dayOfWeekShort: [
					"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"
				],
				dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
			},
			lv: { //Latvian (Latviešu)
				months: [
					"Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
				],
				dayOfWeekShort: [
					"Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"
				],
				dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
			},
			mk: { //Macedonian (Македонски)
				months: [
					"јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"
				],
				dayOfWeekShort: [
					"нед", "пон", "вто", "сре", "чет", "пет", "саб"
				],
				dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
			},
			mn: { //Mongolian (Монгол)
				months: [
					"1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
				],
				dayOfWeekShort: [
					"Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"
				],
				dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
			},
			'pt-BR': { //Português(Brasil)
				months: [
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeekShort: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
				],
				dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
			},
			sk: { //Slovenčina
				months: [
					"Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
				],
				dayOfWeekShort: [
					"Ne", "Po", "Ut", "St", "Št", "Pi", "So"
				],
				dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
			},
			sq: { //Albanian (Shqip)
				months: [
					"Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"
				],
				dayOfWeekShort: [
					"Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"
				],
				dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
			},
			'sr-YU': { //Serbian (Srpski)
				months: [
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				dayOfWeekShort: [
					"Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"
				],
				dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
			},
			sr: { //Serbian Cyrillic (Српски)
				months: [
					"јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"
				],
				dayOfWeekShort: [
					"нед", "пон", "уто", "сре", "чет", "пет", "суб"
				],
				dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
			},
			sv: { //Svenska
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
				],
				dayOfWeekShort: [
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
				],
				dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
			},
			'zh-TW': { //Traditional Chinese (繁體中文)
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeekShort: [
					"日", "一", "二", "三", "四", "五", "六"
				],
				dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
			},
			zh: { //Simplified Chinese (简体中文)
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeekShort: [
					"日", "一", "二", "三", "四", "五", "六"
				],
				dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
			},
			ug: { // Uyghur(ئۇيغۇرچە)
				months: [
					"1-ئاي", "2-ئاي", "3-ئاي", "4-ئاي", "5-ئاي", "6-ئاي", "7-ئاي", "8-ئاي", "9-ئاي", "10-ئاي", "11-ئاي", "12-ئاي"
				],
				dayOfWeek: [
					"يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"
				]
			},
			he: { //Hebrew (עברית)
				months: [
					'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
				],
				dayOfWeekShort: [
					'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
				],
				dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
			},
			hy: { // Armenian
				months: [
					"Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
				],
				dayOfWeekShort: [
					"Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"
				],
				dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
			},
			kg: { // Kyrgyz
				months: [
					'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
				],
				dayOfWeekShort: [
					"Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"
				],
				dayOfWeek: [
					"Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"
				]
			},
			rm: { // Romansh
				months: [
					"Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"
				],
				dayOfWeekShort: [
					"Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"
				],
				dayOfWeek: [
					"Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"
				]
			},
			ka: { // Georgian
				months: [
					'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
				],
				dayOfWeekShort: [
					"კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"
				],
				dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
			}
		},

		ownerDocument: document,
		contentWindow: window,

		value: '',
		rtl: false,

		format: 'Y/m/d H:i',
		formatTime: 'H:i',
		formatDate: 'Y/m/d',

		startDate: false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
		step: 60,
		monthChangeSpinner: true,

		closeOnDateSelect: false,
		closeOnTimeSelect: true,
		closeOnWithoutClick: true,
		closeOnInputClick: true,
		openOnFocus: true,

		timepicker: true,
		datepicker: true,
		weeks: false,

		defaultTime: false,	// use formatTime format (ex. '10:00' for formatTime:	'H:i')
		defaultDate: false,	// use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

		minDate: false,
		maxDate: false,
		minTime: false,
		maxTime: false,
		minDateTime: false,
		maxDateTime: false,

		allowTimes: [],
		opened: false,
		initTime: true,
		inline: false,
		theme: '',
		touchMovedThreshold: 5,

		onSelectDate: function () { },
		onSelectTime: function () { },
		onChangeMonth: function () { },
		onGetWeekOfYear: function () { },
		onChangeYear: function () { },
		onChangeDateTime: function () { },
		onShow: function () { },
		onClose: function () { },
		onGenerate: function () { },

		withoutCopyright: true,
		inverseButton: false,
		hours12: false,
		next: 'xdsoft_next',
		prev: 'xdsoft_prev',
		dayOfWeekStart: 0,
		parentID: 'body',
		timeHeightInTimePicker: 25,
		timepickerScrollbar: true,
		todayButton: true,
		prevButton: true,
		nextButton: true,
		defaultSelect: true,

		scrollMonth: true,
		scrollTime: true,
		scrollInput: true,

		lazyInit: false,
		mask: false,
		validateOnBlur: true,
		allowBlank: true,
		yearStart: 1950,
		yearEnd: 2050,
		monthStart: 0,
		monthEnd: 11,
		style: '',
		id: '',
		fixed: false,
		roundTime: 'round', // ceil, floor
		className: '',
		weekends: [],
		highlightedDates: [],
		highlightedPeriods: [],
		allowDates: [],
		allowDateRe: null,
		disabledDates: [],
		disabledWeekDays: [],
		yearOffset: 0,
		beforeShowDay: null,

		enterLikeTab: true,
		showApplyButton: false
	};

	var dateHelper = null,
		defaultDateHelper = null,
		globalLocaleDefault = 'en',
		globalLocale = 'en';

	var dateFormatterOptionsDefault = {
		meridiem: ['AM', 'PM']
	};

	var initDateFormatter = function () {
		var locale = default_options.i18n[globalLocale],
			opts = {
				days: locale.dayOfWeek,
				daysShort: locale.dayOfWeekShort,
				months: locale.months,
				monthsShort: $.map(locale.months, function (n) { return n.substring(0, 3) })
			};

		if (typeof DateFormatter === 'function') {
			dateHelper = defaultDateHelper = new DateFormatter({
				dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
			});
		}
	};

	var dateFormatters = {
		moment: {
			default_options: {
				format: 'YYYY/MM/DD HH:mm',
				formatDate: 'YYYY/MM/DD',
				formatTime: 'HH:mm',
			},
			formatter: {
				parseDate: function (date, format) {
					if (isFormatStandard(format)) {
						return defaultDateHelper.parseDate(date, format);
					}
					var d = moment(date, format);
					return d.isValid() ? d.toDate() : false;
				},

				formatDate: function (date, format) {
					if (isFormatStandard(format)) {
						return defaultDateHelper.formatDate(date, format);
					}
					return moment(date).format(format);
				},

				formatMask: function (format) {
					return format
						.replace(/Y{4}/g, '9999')
						.replace(/Y{2}/g, '99')
						.replace(/M{2}/g, '19')
						.replace(/D{2}/g, '39')
						.replace(/H{2}/g, '29')
						.replace(/m{2}/g, '59')
						.replace(/s{2}/g, '59');
				},
			}
		}
	}

	// for locale settings
	$.datetimepicker = {
		setLocale: function (locale) {
			var newLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;
			if (globalLocale !== newLocale) {
				globalLocale = newLocale;
				// reinit date formatter
				initDateFormatter();
			}
		},

		setDateFormatter: function (dateFormatter) {
			if (typeof dateFormatter === 'string' && dateFormatters.hasOwnProperty(dateFormatter)) {
				var df = dateFormatters[dateFormatter];
				$.extend(default_options, df.default_options);
				dateHelper = df.formatter;
			}
			else {
				dateHelper = dateFormatter;
			}
		},
	};

	var standardFormats = {
		RFC_2822: 'D, d M Y H:i:s O',
		ATOM: 'Y-m-d\TH:i:sP',
		ISO_8601: 'Y-m-d\TH:i:sO',
		RFC_822: 'D, d M y H:i:s O',
		RFC_850: 'l, d-M-y H:i:s T',
		RFC_1036: 'D, d M y H:i:s O',
		RFC_1123: 'D, d M Y H:i:s O',
		RSS: 'D, d M Y H:i:s O',
		W3C: 'Y-m-d\TH:i:sP'
	}

	var isFormatStandard = function (format) {
		return Object.values(standardFormats).indexOf(format) === -1 ? false : true;
	}

	$.extend($.datetimepicker, standardFormats);

	// first init date formatter
	initDateFormatter();

	// fix for ie8
	if (!window.getComputedStyle) {
		window.getComputedStyle = function (el) {
			this.el = el;
			this.getPropertyValue = function (prop) {
				var re = /(-([a-z]))/g;
				if (prop === 'float') {
					prop = 'styleFloat';
				}
				if (re.test(prop)) {
					prop = prop.replace(re, function (a, b, c) {
						return c.toUpperCase();
					});
				}
				return el.currentStyle[prop] || null;
			};
			return this;
		};
	}
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (obj, start) {
			var i, j;
			for (i = (start || 0), j = this.length; i < j; i += 1) {
				if (this[i] === obj) { return i; }
			}
			return -1;
		};
	}

	Date.prototype.countDaysInMonth = function () {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
	};

	$.fn.xdsoftScroller = function (options, percent) {
		return this.each(function () {
			var timeboxparent = $(this),
				pointerEventToXY = function (e) {
					var out = { x: 0, y: 0 },
						touch;
					if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
						touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						out.x = touch.clientX;
						out.y = touch.clientY;
					} else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
						out.x = e.clientX;
						out.y = e.clientY;
					}
					return out;
				},
				timebox,
				parentHeight,
				height,
				scrollbar,
				scroller,
				maximumOffset = 100,
				start = false,
				startY = 0,
				startTop = 0,
				h1 = 0,
				touchStart = false,
				startTopScroll = 0,
				calcOffset = function () { };

			if (percent === 'hide') {
				timeboxparent.find('.xdsoft_scrollbar').hide();
				return;
			}

			if (!$(this).hasClass('xdsoft_scroller_box')) {
				timebox = timeboxparent.children().eq(0);
				parentHeight = timeboxparent[0].clientHeight;
				height = timebox[0].offsetHeight;
				scrollbar = $('<div class="xdsoft_scrollbar"></div>');
				scroller = $('<div class="xdsoft_scroller"></div>');
				scrollbar.append(scroller);

				timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
				calcOffset = function calcOffset(event) {
					var offset = pointerEventToXY(event).y - startY + startTopScroll;
					if (offset < 0) {
						offset = 0;
					}
					if (offset + scroller[0].offsetHeight > h1) {
						offset = h1 - scroller[0].offsetHeight;
					}
					timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
				};

				scroller
					.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
						}

						startY = pointerEventToXY(event).y;
						startTopScroll = parseInt(scroller.css('margin-top'), 10);
						h1 = scrollbar[0].offsetHeight;

						if (event.type === 'mousedown' || event.type === 'touchstart') {
							if (options.ownerDocument) {
								$(options.ownerDocument.body).addClass('xdsoft_noselect');
							}
							$([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
								$([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft_scroller', arguments_callee)
									.off('mousemove.xdsoft_scroller', calcOffset)
									.removeClass('xdsoft_noselect');
							});
							$(options.ownerDocument.body).on('mousemove.xdsoft_scroller', calcOffset);
						} else {
							touchStart = true;
							event.stopPropagation();
							event.preventDefault();
						}
					})
					.on('touchmove', function (event) {
						if (touchStart) {
							event.preventDefault();
							calcOffset(event);
						}
					})
					.on('touchend touchcancel', function () {
						touchStart = false;
						startTopScroll = 0;
					});

				timeboxparent
					.on('scroll_element.xdsoft_scroller', function (event, percentage) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
						}
						percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;

						scroller.css('margin-top', maximumOffset * percentage);

						setTimeout(function () {
							timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
						}, 10);
					})
					.on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
						var percent, sh;
						parentHeight = timeboxparent[0].clientHeight;
						height = timebox[0].offsetHeight;
						percent = parentHeight / height;
						sh = percent * scrollbar[0].offsetHeight;
						if (percent > 1) {
							scroller.hide();
						} else {
							scroller.show();
							scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
							maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
							if (noTriggerScroll !== true) {
								timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
							}
						}
					});

				timeboxparent.on('mousewheel', function (event) {
					var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

					top = top - (event.deltaY * 20);
					if (top < 0) {
						top = 0;
					}

					timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
					event.stopPropagation();
					return false;
				});

				timeboxparent.on('touchstart', function (event) {
					start = pointerEventToXY(event);
					startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
				});

				timeboxparent.on('touchmove', function (event) {
					if (start) {
						event.preventDefault();
						var coord = pointerEventToXY(event);
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
					}
				});

				timeboxparent.on('touchend touchcancel', function () {
					start = false;
					startTop = 0;
				});
			}
			timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
		});
	};

	$.fn.datetimepicker = function (opt, opt2) {
		var result = this,
			KEY0 = 48,
			KEY9 = 57,
			_KEY0 = 96,
			_KEY9 = 105,
			CTRLKEY = 17,
			DEL = 46,
			ENTER = 13,
			ESC = 27,
			BACKSPACE = 8,
			ARROWLEFT = 37,
			ARROWUP = 38,
			ARROWRIGHT = 39,
			ARROWDOWN = 40,
			TAB = 9,
			F5 = 116,
			AKEY = 65,
			CKEY = 67,
			VKEY = 86,
			ZKEY = 90,
			YKEY = 89,
			ctrlDown = false,
			options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),

			lazyInitTimer = 0,
			createDateTimePicker,
			destroyDateTimePicker,

			lazyInit = function (input) {
				input
					.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
						if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
							return;
						}
						clearTimeout(lazyInitTimer);
						lazyInitTimer = setTimeout(function () {

							if (!input.data('xdsoft_datetimepicker')) {
								createDateTimePicker(input);
							}
							input
								.off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback)
								.trigger('open.xdsoft');
						}, 100);
					});
			};

		createDateTimePicker = function (input) {
			var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
				xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
				datepicker = $('<div class="xdsoft_datepicker active"></div>'),
				month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' +
					'<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' +
					'<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' +
					'<button type="button" class="xdsoft_next"></button></div>'),
				calendar = $('<div class="xdsoft_calendar"></div>'),
				timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
				timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
				timebox = $('<div class="xdsoft_time_variant"></div>'),
				applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),

				monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
				yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
				triggerAfterOpen = false,
				XDSoft_datetime,

				xchangeTimer,
				timerclick,
				current_time_index,
				setPos,
				timer = 0,
				_xdsoft_datetime,
				forEachAncestorOf;

			if (options.id) {
				datetimepicker.attr('id', options.id);
			}
			if (options.style) {
				datetimepicker.attr('style', options.style);
			}
			if (options.weeks) {
				datetimepicker.addClass('xdsoft_showweeks');
			}
			if (options.rtl) {
				datetimepicker.addClass('xdsoft_rtl');
			}

			datetimepicker.addClass('xdsoft_' + options.theme);
			datetimepicker.addClass(options.className);

			month_picker
				.find('.xdsoft_month span')
				.after(monthselect);
			month_picker
				.find('.xdsoft_year span')
				.after(yearselect);

			month_picker
				.find('.xdsoft_month,.xdsoft_year')
				.on('touchstart mousedown.xdsoft', function (event) {
					var select = $(this).find('.xdsoft_select').eq(0),
						val = 0,
						top = 0,
						visible = select.is(':visible'),
						items,
						i;

					month_picker
						.find('.xdsoft_select')
						.hide();
					if (_xdsoft_datetime.currentTime) {
						val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
					}

					select[visible ? 'hide' : 'show']();
					for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
						if (items.eq(i).data('value') === val) {
							break;
						} else {
							top += items[0].offsetHeight;
						}
					}

					select.xdsoftScroller(options, top / (select.children()[0].offsetHeight - (select[0].clientHeight)));
					event.stopPropagation();
					return false;
				});

			var handleTouchMoved = function (event) {
				var evt = event.originalEvent;
				var touchPosition = evt.touches ? evt.touches[0] : evt;
				this.touchStartPosition = this.touchStartPosition || touchPosition;
				var xMovement = Math.abs(this.touchStartPosition.clientX - touchPosition.clientX);
				var yMovement = Math.abs(this.touchStartPosition.clientY - touchPosition.clientY);
				var distance = Math.sqrt(xMovement * xMovement + yMovement * yMovement);
				if (distance > options.touchMovedThreshold) {
					this.touchMoved = true;
				}
			}

			month_picker
				.find('.xdsoft_select')
				.xdsoftScroller(options)
				.on('touchstart mousedown.xdsoft', function (event) {
					var evt = event.originalEvent;
					this.touchMoved = false;
					this.touchStartPosition = evt.touches ? evt.touches[0] : evt;
					event.stopPropagation();
					event.preventDefault();
				})
				.on('touchmove', '.xdsoft_option', handleTouchMoved)
				.on('touchend mousedown.xdsoft', '.xdsoft_option', function () {
					if (!this.touchMoved) {
						if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						}

						var year = _xdsoft_datetime.currentTime.getFullYear();
						if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
							_xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
						}

						$(this).parent().parent().hide();

						datetimepicker.trigger('xchange.xdsoft');
						if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
							options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
						}

						if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
							options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
						}
					}
				});

			datetimepicker.getValue = function () {
				return _xdsoft_datetime.getCurrentTime();
			};

			datetimepicker.setOptions = function (_options) {
				var highlightedDates = {};

				options = $.extend(true, {}, options, _options);

				if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
					options.allowTimes = $.extend(true, [], _options.allowTimes);
				}

				if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
					options.weekends = $.extend(true, [], _options.weekends);
				}

				if (_options.allowDates && $.isArray(_options.allowDates) && _options.allowDates.length) {
					options.allowDates = $.extend(true, [], _options.allowDates);
				}

				if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe) === "[object String]") {
					options.allowDateRe = new RegExp(_options.allowDateRe);
				}

				if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
					$.each(_options.highlightedDates, function (index, value) {
						var splitData = $.map(value.split(','), $.trim),
							exDesc,
							hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]), // date, desc, style
							keyDate = dateHelper.formatDate(hDate.date, options.formatDate);
						if (highlightedDates[keyDate] !== undefined) {
							exDesc = highlightedDates[keyDate].desc;
							if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
								highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
							}
						} else {
							highlightedDates[keyDate] = hDate;
						}
					});

					options.highlightedDates = $.extend(true, [], highlightedDates);
				}

				if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
					highlightedDates = $.extend(true, [], options.highlightedDates);
					$.each(_options.highlightedPeriods, function (index, value) {
						var dateTest, // start date
							dateEnd,
							desc,
							hDate,
							keyDate,
							exDesc,
							style;
						if ($.isArray(value)) {
							dateTest = value[0];
							dateEnd = value[1];
							desc = value[2];
							style = value[3];
						}
						else {
							var splitData = $.map(value.split(','), $.trim);
							dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
							dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
							desc = splitData[2];
							style = splitData[3];
						}

						while (dateTest <= dateEnd) {
							hDate = new HighlightedDate(dateTest, desc, style);
							keyDate = dateHelper.formatDate(dateTest, options.formatDate);
							dateTest.setDate(dateTest.getDate() + 1);
							if (highlightedDates[keyDate] !== undefined) {
								exDesc = highlightedDates[keyDate].desc;
								if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
									highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
								}
							} else {
								highlightedDates[keyDate] = hDate;
							}
						}
					});

					options.highlightedDates = $.extend(true, [], highlightedDates);
				}

				if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
					options.disabledDates = $.extend(true, [], _options.disabledDates);
				}

				if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
					options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
				}

				if ((options.open || options.opened) && (!options.inline)) {
					input.trigger('open.xdsoft');
				}

				if (options.inline) {
					triggerAfterOpen = true;
					datetimepicker.addClass('xdsoft_inline');
					input.after(datetimepicker).hide();
				}

				if (options.inverseButton) {
					options.next = 'xdsoft_prev';
					options.prev = 'xdsoft_next';
				}

				if (options.datepicker) {
					datepicker.addClass('active');
				} else {
					datepicker.removeClass('active');
				}

				if (options.timepicker) {
					timepicker.addClass('active');
				} else {
					timepicker.removeClass('active');
				}

				if (options.value) {
					_xdsoft_datetime.setCurrentTime(options.value);
					if (input && input.val) {
						input.val(_xdsoft_datetime.str);
					}
				}

				if (isNaN(options.dayOfWeekStart)) {
					options.dayOfWeekStart = 0;
				} else {
					options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
				}

				if (!options.timepickerScrollbar) {
					timeboxparent.xdsoftScroller(options, 'hide');
				}

				if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
					options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
				}

				if (options.maxDate && /^[\+\-](.*)$/.test(options.maxDate)) {
					options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
				}

				if (options.minDateTime && /^\+(.*)$/.test(options.minDateTime)) {
					options.minDateTime = _xdsoft_datetime.strToDateTime(options.minDateTime).dateFormat(options.formatDate);
				}

				if (options.maxDateTime && /^\+(.*)$/.test(options.maxDateTime)) {
					options.maxDateTime = _xdsoft_datetime.strToDateTime(options.maxDateTime).dateFormat(options.formatDate);
				}

				applyButton.toggle(options.showApplyButton);

				month_picker
					.find('.xdsoft_today_button')
					.css('visibility', !options.todayButton ? 'hidden' : 'visible');

				month_picker
					.find('.' + options.prev)
					.css('visibility', !options.prevButton ? 'hidden' : 'visible');

				month_picker
					.find('.' + options.next)
					.css('visibility', !options.nextButton ? 'hidden' : 'visible');

				setMask(options);

				if (options.validateOnBlur) {
					input
						.off('blur.xdsoft')
						.on('blur.xdsoft', function () {
							if (options.allowBlank && (!$.trim($(this).val()).length ||
								(typeof options.mask === "string" && $.trim($(this).val()) === options.mask.replace(/[0-9]/g, '_')))) {
								$(this).val(null);
								datetimepicker.data('xdsoft_datetime').empty();
							} else {
								var d = dateHelper.parseDate($(this).val(), options.format);
								if (d) { // parseDate() may skip some invalid parts like date or time, so make it clear for user: show parsed date/time
									$(this).val(dateHelper.formatDate(d, options.format));
								} else {
									var splittedHours = +([$(this).val()[0], $(this).val()[1]].join('')),
										splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));

									// parse the numbers as 0312 => 03:12
									if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
										$(this).val([splittedHours, splittedMinutes].map(function (item) {
											return item > 9 ? item : '0' + item;
										}).join(':'));
									} else {
										$(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
									}
								}
								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
							}

							datetimepicker.trigger('changedatetime.xdsoft');
							datetimepicker.trigger('close.xdsoft');
						});
				}
				options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;

				datetimepicker
					.trigger('xchange.xdsoft')
					.trigger('afterOpen.xdsoft');
			};

			datetimepicker
				.data('options', options)
				.on('touchstart mousedown.xdsoft', function (event) {
					event.stopPropagation();
					event.preventDefault();
					yearselect.hide();
					monthselect.hide();
					return false;
				});

			//scroll_element = timepicker.find('.xdsoft_time_box');
			timeboxparent.append(timebox);
			timeboxparent.xdsoftScroller(options);

			datetimepicker.on('afterOpen.xdsoft', function () {
				timeboxparent.xdsoftScroller(options);
			});

			datetimepicker
				.append(datepicker)
				.append(timepicker);

			if (options.withoutCopyright !== true) {
				datetimepicker
					.append(xdsoft_copyright);
			}

			datepicker
				.append(month_picker)
				.append(calendar)
				.append(applyButton);

			$(options.parentID)
				.append(datetimepicker);

			XDSoft_datetime = function () {
				var _this = this;
				_this.now = function (norecursion) {
					var d = new Date(),
						date,
						time;

					if (!norecursion && options.defaultDate) {
						date = _this.strToDateTime(options.defaultDate);
						d.setFullYear(date.getFullYear());
						d.setMonth(date.getMonth());
						d.setDate(date.getDate());
					}

					d.setFullYear(d.getFullYear());

					if (!norecursion && options.defaultTime) {
						time = _this.strtotime(options.defaultTime);
						d.setHours(time.getHours());
						d.setMinutes(time.getMinutes());
						d.setSeconds(time.getSeconds());
						d.setMilliseconds(time.getMilliseconds());
					}
					return d;
				};

				_this.isValidDate = function (d) {
					if (Object.prototype.toString.call(d) !== "[object Date]") {
						return false;
					}
					return !isNaN(d.getTime());
				};

				_this.setCurrentTime = function (dTime, requireValidDate) {
					if (typeof dTime === 'string') {
						_this.currentTime = _this.strToDateTime(dTime);
					}
					else if (_this.isValidDate(dTime)) {
						_this.currentTime = dTime;
					}
					else if (!dTime && !requireValidDate && options.allowBlank && !options.inline) {
						_this.currentTime = null;
					}
					else {
						_this.currentTime = _this.now();
					}

					datetimepicker.trigger('xchange.xdsoft');
				};

				_this.empty = function () {
					_this.currentTime = null;
				};

				_this.getCurrentTime = function () {
					return _this.currentTime;
				};

				_this.nextMonth = function () {

					if (_this.currentTime === undefined || _this.currentTime === null) {
						_this.currentTime = _this.now();
					}

					var month = _this.currentTime.getMonth() + 1,
						year;
					if (month === 12) {
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
						month = 0;
					}

					year = _this.currentTime.getFullYear();

					_this.currentTime.setDate(
						Math.min(
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
							_this.currentTime.getDate()
						)
					);
					_this.currentTime.setMonth(month);

					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					datetimepicker.trigger('xchange.xdsoft');
					return month;
				};

				_this.prevMonth = function () {

					if (_this.currentTime === undefined || _this.currentTime === null) {
						_this.currentTime = _this.now();
					}

					var month = _this.currentTime.getMonth() - 1;
					if (month === -1) {
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
						month = 11;
					}
					_this.currentTime.setDate(
						Math.min(
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
							_this.currentTime.getDate()
						)
					);
					_this.currentTime.setMonth(month);
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					datetimepicker.trigger('xchange.xdsoft');
					return month;
				};

				_this.getWeekOfYear = function (datetime) {
					if (options.onGetWeekOfYear && $.isFunction(options.onGetWeekOfYear)) {
						var week = options.onGetWeekOfYear.call(datetimepicker, datetime);
						if (typeof week !== 'undefined') {
							return week;
						}
					}
					var onejan = new Date(datetime.getFullYear(), 0, 1);

					//First week of the year is th one with the first Thursday according to ISO8601
					if (onejan.getDay() !== 4) {
						onejan.setMonth(0, 1 + ((4 - onejan.getDay() + 7) % 7));
					}

					return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);
				};

				_this.strToDateTime = function (sDateTime) {
					var tmpDate = [], timeOffset, currentTime;

					if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
						return sDateTime;
					}

					tmpDate = /^([+-]{1})(.*)$/.exec(sDateTime);

					if (tmpDate) {
						tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
					}

					if (tmpDate && tmpDate[2]) {
						timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;
						currentTime = new Date((_this.now(true)).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
					} else {
						currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
					}

					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now();
					}

					return currentTime;
				};

				_this.strToDate = function (sDate) {
					if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
						return sDate;
					}

					var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);
					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now(true);
					}
					return currentTime;
				};

				_this.strtotime = function (sTime) {
					if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
						return sTime;
					}
					var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);
					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now(true);
					}
					return currentTime;
				};

				_this.str = function () {
					var format = options.format;
					if (options.yearOffset) {
						format = format.replace('Y', _this.currentTime.getFullYear() + options.yearOffset);
						format = format.replace('y', String(_this.currentTime.getFullYear() + options.yearOffset).substring(2, 4));
					}
					return dateHelper.formatDate(_this.currentTime, format);
				};
				_this.currentTime = this.now();
			};

			_xdsoft_datetime = new XDSoft_datetime();

			applyButton.on('touchend click', function (e) {//pathbrite
				e.preventDefault();
				datetimepicker.data('changed', true);
				_xdsoft_datetime.setCurrentTime(getCurrentValue());
				input.val(_xdsoft_datetime.str());
				datetimepicker.trigger('close.xdsoft');
			});
			month_picker
				.find('.xdsoft_today_button')
				.on('touchend mousedown.xdsoft', function () {
					datetimepicker.data('changed', true);
					_xdsoft_datetime.setCurrentTime(0, true);
					datetimepicker.trigger('afterOpen.xdsoft');
				}).on('dblclick.xdsoft', function () {
					var currentDate = _xdsoft_datetime.getCurrentTime(), minDate, maxDate;
					currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
					minDate = _xdsoft_datetime.strToDate(options.minDate);
					minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
					if (currentDate < minDate) {
						return;
					}
					maxDate = _xdsoft_datetime.strToDate(options.maxDate);
					maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
					if (currentDate > maxDate) {
						return;
					}
					input.val(_xdsoft_datetime.str());
					input.trigger('change');
					datetimepicker.trigger('close.xdsoft');
				});
			month_picker
				.find('.xdsoft_prev,.xdsoft_next')
				.on('touchend mousedown.xdsoft', function () {
					var $this = $(this),
						timer = 0,
						stop = false;

					(function arguments_callee1(v) {
						if ($this.hasClass(options.next)) {
							_xdsoft_datetime.nextMonth();
						} else if ($this.hasClass(options.prev)) {
							_xdsoft_datetime.prevMonth();
						}
						if (options.monthChangeSpinner) {
							if (!stop) {
								timer = setTimeout(arguments_callee1, v || 100);
							}
						}
					}(500));

					$([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee2() {
						clearTimeout(timer);
						stop = true;
						$([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee2);
					});
				});

			timepicker
				.find('.xdsoft_prev,.xdsoft_next')
				.on('touchend mousedown.xdsoft', function () {
					var $this = $(this),
						timer = 0,
						stop = false,
						period = 110;
					(function arguments_callee4(v) {
						var pheight = timeboxparent[0].clientHeight,
							height = timebox[0].offsetHeight,
							top = Math.abs(parseInt(timebox.css('marginTop'), 10));
						if ($this.hasClass(options.next) && (height - pheight) - options.timeHeightInTimePicker >= top) {
							timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
						} else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
							timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
						}
						/**
						 * Fixed bug:
						 * When using css3 transition, it will cause a bug that you cannot scroll the timepicker list.
						 * The reason is that the transition-duration time, if you set it to 0, all things fine, otherwise, this
						 * would cause a bug when you use jquery.css method.
						 * Let's say: * { transition: all .5s ease; }
						 * jquery timebox.css('marginTop') will return the original value which is before you clicking the next/prev button,
						 * meanwhile the timebox[0].style.marginTop will return the right value which is after you clicking the
						 * next/prev button.
						 *
						 * What we should do:
						 * Replace timebox.css('marginTop') with timebox[0].style.marginTop.
						 */
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
						period = (period > 10) ? 10 : period - 10;
						if (!stop) {
							timer = setTimeout(arguments_callee4, v || period);
						}
					}(500));
					$([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee5() {
						clearTimeout(timer);
						stop = true;
						$([options.ownerDocument.body, options.contentWindow])
							.off('touchend mouseup.xdsoft', arguments_callee5);
					});
				});

			xchangeTimer = 0;
			// base handler - generating a calendar and timepicker
			datetimepicker
				.on('xchange.xdsoft', function (event) {
					clearTimeout(xchangeTimer);
					xchangeTimer = setTimeout(function () {

						if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						}

						var table = '',
							start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
							i = 0,
							j,
							today = _xdsoft_datetime.now(),
							maxDate = false,
							minDate = false,
							minDateTime = false,
							maxDateTime = false,
							hDate,
							day,
							d,
							y,
							m,
							w,
							classes = [],
							customDateSettings,
							newRow = true,
							time = '',
							h,
							line_time,
							description;

						while (start.getDay() !== options.dayOfWeekStart) {
							start.setDate(start.getDate() - 1);
						}

						table += '<table><thead><tr>';

						if (options.weeks) {
							table += '<th></th>';
						}

						for (j = 0; j < 7; j += 1) {
							table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
						}

						table += '</tr></thead>';
						table += '<tbody>';

						if (options.maxDate !== false) {
							maxDate = _xdsoft_datetime.strToDate(options.maxDate);
							maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
						}

						if (options.minDate !== false) {
							minDate = _xdsoft_datetime.strToDate(options.minDate);
							minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
						}

						if (options.minDateTime !== false) {
							minDateTime = _xdsoft_datetime.strToDate(options.minDateTime);
							minDateTime = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), minDateTime.getHours(), minDateTime.getMinutes(), minDateTime.getSeconds());
						}

						if (options.maxDateTime !== false) {
							maxDateTime = _xdsoft_datetime.strToDate(options.maxDateTime);
							maxDateTime = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), maxDateTime.getHours(), maxDateTime.getMinutes(), maxDateTime.getSeconds());
						}

						var maxDateTimeDay;
						if (maxDateTime !== false) {
							maxDateTimeDay = ((maxDateTime.getFullYear() * 12) + maxDateTime.getMonth()) * 31 + maxDateTime.getDate();
						}

						while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
							classes = [];
							i += 1;

							day = start.getDay();
							d = start.getDate();
							y = start.getFullYear();
							m = start.getMonth();
							w = _xdsoft_datetime.getWeekOfYear(start);
							description = '';

							classes.push('xdsoft_date');

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
								customDateSettings = options.beforeShowDay.call(datetimepicker, start);
							} else {
								customDateSettings = null;
							}

							if (options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]") {
								if (!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))) {
									classes.push('xdsoft_disabled');
								}
							}

							if (options.allowDates && options.allowDates.length > 0) {
								if (options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1) {
									classes.push('xdsoft_disabled');
								}
							}

							var currentDay = ((start.getFullYear() * 12) + start.getMonth()) * 31 + start.getDate();
							if ((maxDate !== false && start > maxDate) || (minDateTime !== false && start < minDateTime) || (minDate !== false && start < minDate) || (maxDateTime !== false && currentDay > maxDateTimeDay) || (customDateSettings && customDateSettings[0] === false)) {
								classes.push('xdsoft_disabled');
							}

							if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
								classes.push('xdsoft_disabled');
							}

							if (options.disabledWeekDays.indexOf(day) !== -1) {
								classes.push('xdsoft_disabled');
							}

							if (input.is('[disabled]')) {
								classes.push('xdsoft_disabled');
							}

							if (customDateSettings && customDateSettings[1] !== "") {
								classes.push(customDateSettings[1]);
							}

							if (_xdsoft_datetime.currentTime.getMonth() !== m) {
								classes.push('xdsoft_other_month');
							}

							if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
								classes.push('xdsoft_current');
							}

							if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
								classes.push('xdsoft_today');
							}

							if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
								classes.push('xdsoft_weekend');
							}

							if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
								hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
								classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
								description = hDate.desc === undefined ? '' : hDate.desc;
							}

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
								classes.push(options.beforeShowDay(start));
							}

							if (newRow) {
								table += '<tr>';
								newRow = false;
								if (options.weeks) {
									table += '<th>' + w + '</th>';
								}
							}

							table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' +
								'<div>' + d + '</div>' +
								'</td>';

							if (start.getDay() === options.dayOfWeekStartPrev) {
								table += '</tr>';
								newRow = true;
							}

							start.setDate(d + 1);
						}
						table += '</tbody></table>';

						calendar.html(table);

						month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
						month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear() + options.yearOffset);

						// generate timebox
						time = '';
						h = '';
						m = '';

						var minTimeMinutesOfDay = 0;
						if (options.minTime !== false) {
							var t = _xdsoft_datetime.strtotime(options.minTime);
							minTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
						}
						var maxTimeMinutesOfDay = 24 * 60;
						if (options.maxTime !== false) {
							var t = _xdsoft_datetime.strtotime(options.maxTime);
							maxTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
						}

						if (options.minDateTime !== false) {
							var t = _xdsoft_datetime.strToDateTime(options.minDateTime);
							var currentDayIsMinDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);
							if (currentDayIsMinDateTimeDay) {
								var m = 60 * t.getHours() + t.getMinutes();
								if (m > minTimeMinutesOfDay) minTimeMinutesOfDay = m;
							}
						}

						if (options.maxDateTime !== false) {
							var t = _xdsoft_datetime.strToDateTime(options.maxDateTime);
							var currentDayIsMaxDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);
							if (currentDayIsMaxDateTimeDay) {
								var m = 60 * t.getHours() + t.getMinutes();
								if (m < maxTimeMinutesOfDay) maxTimeMinutesOfDay = m;
							}
						}

						line_time = function line_time(h, m) {
							var now = _xdsoft_datetime.now(), current_time,
								isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;
							now.setHours(h);
							h = parseInt(now.getHours(), 10);
							now.setMinutes(m);
							m = parseInt(now.getMinutes(), 10);
							classes = [];
							var currentMinutesOfDay = 60 * h + m;
							if (input.is('[disabled]') || (currentMinutesOfDay >= maxTimeMinutesOfDay) || (currentMinutesOfDay < minTimeMinutesOfDay)) {
								classes.push('xdsoft_disabled');
							}

							current_time = new Date(_xdsoft_datetime.currentTime);
							current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));

							if (!isALlowTimesInit) {
								current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
							}

							if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && ((!isALlowTimesInit && options.step > 59) || current_time.getMinutes() === parseInt(m, 10))) {
								if (options.defaultSelect || datetimepicker.data('changed')) {
									classes.push('xdsoft_current');
								} else if (options.initTime) {
									classes.push('xdsoft_init_time');
								}
							}
							if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
								classes.push('xdsoft_today');
							}
							time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
						};

						if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
							for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
								for (j = 0; j < 60; j += options.step) {
									var currentMinutesOfDay = i * 60 + j;
									if (currentMinutesOfDay < minTimeMinutesOfDay) continue;
									if (currentMinutesOfDay >= maxTimeMinutesOfDay) continue;
									h = (i < 10 ? '0' : '') + i;
									m = (j < 10 ? '0' : '') + j;
									line_time(h, m);
								}
							}
						} else {
							for (i = 0; i < options.allowTimes.length; i += 1) {
								h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
								m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
								line_time(h, m);
							}
						}

						timebox.html(time);

						opt = '';

						for (i = parseInt(options.yearStart, 10); i <= parseInt(options.yearEnd, 10); i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + (i + options.yearOffset) + '</div>';
						}
						yearselect.children().eq(0)
							.html(opt);

						for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
						}
						monthselect.children().eq(0).html(opt);
						$(datetimepicker)
							.trigger('generate.xdsoft');
					}, 10);
					event.stopPropagation();
				})
				.on('afterOpen.xdsoft', function () {
					if (options.timepicker) {
						var classType, pheight, height, top;
						if (timebox.find('.xdsoft_current').length) {
							classType = '.xdsoft_current';
						} else if (timebox.find('.xdsoft_init_time').length) {
							classType = '.xdsoft_init_time';
						}
						if (classType) {
							pheight = timeboxparent[0].clientHeight;
							height = timebox[0].offsetHeight;
							top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
							if ((height - pheight) < top) {
								top = height - pheight;
							}
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
						} else {
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
						}
					}
				});

			timerclick = 0;
			calendar
				.on('touchend click.xdsoft', 'td', function (xdevent) {
					xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
					timerclick += 1;
					var $this = $(this),
						currentTime = _xdsoft_datetime.currentTime;

					if (currentTime === undefined || currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						currentTime = _xdsoft_datetime.currentTime;
					}

					if ($this.hasClass('xdsoft_disabled')) {
						return false;
					}

					currentTime.setDate(1);
					currentTime.setFullYear($this.data('year'));
					currentTime.setMonth($this.data('month'));
					currentTime.setDate($this.data('date'));

					datetimepicker.trigger('select.xdsoft', [currentTime]);

					input.val(_xdsoft_datetime.str());

					if (options.onSelectDate && $.isFunction(options.onSelectDate)) {
						options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
					}

					datetimepicker.data('changed', true);
					datetimepicker.trigger('xchange.xdsoft');
					datetimepicker.trigger('changedatetime.xdsoft');
					if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === false && !options.timepicker))) && !options.inline) {
						datetimepicker.trigger('close.xdsoft');
					}
					setTimeout(function () {
						timerclick = 0;
					}, 200);
				});

			timebox
				.on('touchstart', 'div', function (xdevent) {
					this.touchMoved = false;
				})
				.on('touchmove', 'div', handleTouchMoved)
				.on('touchend click.xdsoft', 'div', function (xdevent) {
					if (!this.touchMoved) {
						xdevent.stopPropagation();
						var $this = $(this),
							currentTime = _xdsoft_datetime.currentTime;

						if (currentTime === undefined || currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
							currentTime = _xdsoft_datetime.currentTime;
						}

						if ($this.hasClass('xdsoft_disabled')) {
							return false;
						}
						currentTime.setHours($this.data('hour'));
						currentTime.setMinutes($this.data('minute'));
						datetimepicker.trigger('select.xdsoft', [currentTime]);

						datetimepicker.data('input').val(_xdsoft_datetime.str());

						if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
							options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
						}
						datetimepicker.data('changed', true);
						datetimepicker.trigger('xchange.xdsoft');
						datetimepicker.trigger('changedatetime.xdsoft');
						if (options.inline !== true && options.closeOnTimeSelect === true) {
							datetimepicker.trigger('close.xdsoft');
						}
					}
				});

			datepicker
				.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollMonth) {
						return true;
					}
					if (event.deltaY < 0) {
						_xdsoft_datetime.nextMonth();
					} else {
						_xdsoft_datetime.prevMonth();
					}
					return false;
				});

			input
				.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollInput) {
						return true;
					}
					if (!options.datepicker && options.timepicker) {
						current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
						if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
							current_time_index += event.deltaY;
						}
						if (timebox.children().eq(current_time_index).length) {
							timebox.children().eq(current_time_index).trigger('mousedown');
						}
						return false;
					}
					if (options.datepicker && !options.timepicker) {
						datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
						if (input.val) {
							input.val(_xdsoft_datetime.str());
						}
						datetimepicker.trigger('changedatetime.xdsoft');
						return false;
					}
				});

			datetimepicker
				.on('changedatetime.xdsoft', function (event) {
					if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
						var $input = datetimepicker.data('input');
						options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
						delete options.value;
						$input.trigger('change');
					}
				})
				.on('generate.xdsoft', function () {
					if (options.onGenerate && $.isFunction(options.onGenerate)) {
						options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					if (triggerAfterOpen) {
						datetimepicker.trigger('afterOpen.xdsoft');
						triggerAfterOpen = false;
					}
				})
				.on('click.xdsoft', function (xdevent) {
					xdevent.stopPropagation();
				});

			current_time_index = 0;

			/**
			 * Runs the callback for each of the specified node's ancestors.
			 *
			 * Return FALSE from the callback to stop ascending.
			 *
			 * @param {DOMNode} node
			 * @param {Function} callback
			 * @returns {undefined}
			 */
			forEachAncestorOf = function (node, callback) {
				do {
					node = node.parentNode;

					if (!node || callback(node) === false) {
						break;
					}
				} while (node.nodeName !== 'HTML');
			};

			/**
			 * Sets the position of the picker.
			 *
			 * @returns {undefined}
			 */
			setPos = function () {
				var dateInputOffset,
					dateInputElem,
					verticalPosition,
					left,
					position,
					datetimepickerElem,
					dateInputHasFixedAncestor,
					$dateInput,
					windowWidth,
					verticalAnchorEdge,
					datetimepickerCss,
					windowHeight,
					windowScrollTop;

				$dateInput = datetimepicker.data('input');
				dateInputOffset = $dateInput.offset();
				dateInputElem = $dateInput[0];

				verticalAnchorEdge = 'top';
				verticalPosition = (dateInputOffset.top + dateInputElem.offsetHeight) - 1;
				left = dateInputOffset.left;
				position = "absolute";

				windowWidth = $(options.contentWindow).width();
				windowHeight = $(options.contentWindow).height();
				windowScrollTop = $(options.contentWindow).scrollTop();

				if ((options.ownerDocument.documentElement.clientWidth - dateInputOffset.left) < datepicker.parent().outerWidth(true)) {
					var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
					left = left - diff;
				}

				if ($dateInput.parent().css('direction') === 'rtl') {
					left -= (datetimepicker.outerWidth() - $dateInput.outerWidth());
				}

				if (options.fixed) {
					verticalPosition -= windowScrollTop;
					left -= $(options.contentWindow).scrollLeft();
					position = "fixed";
				} else {
					dateInputHasFixedAncestor = false;

					forEachAncestorOf(dateInputElem, function (ancestorNode) {
						if (ancestorNode === null) {
							return false;
						}

						if (options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
							dateInputHasFixedAncestor = true;
							return false;
						}
					});

					if (dateInputHasFixedAncestor) {
						position = 'fixed';

						//If the picker won't fit entirely within the viewport then display it above the date input.
						if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
							verticalAnchorEdge = 'bottom';
							verticalPosition = (windowHeight + windowScrollTop) - dateInputOffset.top;
						} else {
							verticalPosition -= windowScrollTop;
						}
					} else {
						if (verticalPosition + datetimepicker[0].offsetHeight > windowHeight + windowScrollTop) {
							verticalPosition = dateInputOffset.top - datetimepicker[0].offsetHeight + 1;
						}
					}

					if (verticalPosition < 0) {
						verticalPosition = 0;
					}

					if (left + dateInputElem.offsetWidth > windowWidth) {
						left = windowWidth - dateInputElem.offsetWidth;
					}
				}

				datetimepickerElem = datetimepicker[0];

				forEachAncestorOf(datetimepickerElem, function (ancestorNode) {
					var ancestorNodePosition;

					ancestorNodePosition = options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position');

					if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
						left = left - ((windowWidth - ancestorNode.offsetWidth) / 2);
						return false;
					}
				});

				datetimepickerCss = {
					position: position,
					left: left,
					top: '',  //Initialize to prevent previous values interfering with new ones.
					bottom: ''  //Initialize to prevent previous values interfering with new ones.
				};

				datetimepickerCss[verticalAnchorEdge] = verticalPosition;

				datetimepicker.css(datetimepickerCss);
			};

			datetimepicker
				.on('open.xdsoft', function (event) {
					var onShow = true;
					if (options.onShow && $.isFunction(options.onShow)) {
						onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onShow !== false) {
						datetimepicker.show();
						setPos();
						$(options.contentWindow)
							.off('resize.xdsoft', setPos)
							.on('resize.xdsoft', setPos);

						if (options.closeOnWithoutClick) {
							$([options.ownerDocument.body, options.contentWindow]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
								datetimepicker.trigger('close.xdsoft');
								$([options.ownerDocument.body, options.contentWindow]).off('touchstart mousedown.xdsoft', arguments_callee6);
							});
						}
					}
				})
				.on('close.xdsoft', function (event) {
					var onClose = true;
					month_picker
						.find('.xdsoft_month,.xdsoft_year')
						.find('.xdsoft_select')
						.hide();
					if (options.onClose && $.isFunction(options.onClose)) {
						onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onClose !== false && !options.opened && !options.inline) {
						datetimepicker.hide();
					}
					event.stopPropagation();
				})
				.on('toggle.xdsoft', function () {
					if (datetimepicker.is(':visible')) {
						datetimepicker.trigger('close.xdsoft');
					} else {
						datetimepicker.trigger('open.xdsoft');
					}
				})
				.data('input', input);

			timer = 0;

			datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
			datetimepicker.setOptions(options);

			function getCurrentValue() {
				var ct = false, time;

				if (options.startDate) {
					ct = _xdsoft_datetime.strToDate(options.startDate);
				} else {
					ct = options.value || ((input && input.val && input.val()) ? input.val() : '');
					if (ct) {
						ct = _xdsoft_datetime.strToDateTime(ct);
						if (options.yearOffset) {
							ct = new Date(ct.getFullYear() - options.yearOffset, ct.getMonth(), ct.getDate(), ct.getHours(), ct.getMinutes(), ct.getSeconds(), ct.getMilliseconds());
						}
					} else if (options.defaultDate) {
						ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
						if (options.defaultTime) {
							time = _xdsoft_datetime.strtotime(options.defaultTime);
							ct.setHours(time.getHours());
							ct.setMinutes(time.getMinutes());
						}
					}
				}

				if (ct && _xdsoft_datetime.isValidDate(ct)) {
					datetimepicker.data('changed', true);
				} else {
					ct = '';
				}

				return ct || 0;
			}

			function setMask(options) {

				var isValidValue = function (mask, value) {
					var reg = mask
						.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1')
						.replace(/_/g, '{digit+}')
						.replace(/([0-9]{1})/g, '{digit$1}')
						.replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}')
						.replace(/\{digit[\+]\}/g, '[0-9_]{1}');
					return (new RegExp(reg)).test(value);
				},
					getCaretPos = function (input) {
						try {
							if (options.ownerDocument.selection && options.ownerDocument.selection.createRange) {
								var range = options.ownerDocument.selection.createRange();
								return range.getBookmark().charCodeAt(2) - 2;
							}
							if (input.setSelectionRange) {
								return input.selectionStart;
							}
						} catch (e) {
							return 0;
						}
					},
					setCaretPos = function (node, pos) {
						node = (typeof node === "string" || node instanceof String) ? options.ownerDocument.getElementById(node) : node;
						if (!node) {
							return false;
						}
						if (node.createTextRange) {
							var textRange = node.createTextRange();
							textRange.collapse(true);
							textRange.moveEnd('character', pos);
							textRange.moveStart('character', pos);
							textRange.select();
							return true;
						}
						if (node.setSelectionRange) {
							node.setSelectionRange(pos, pos);
							return true;
						}
						return false;
					};

				if (options.mask) {
					input.off('keydown.xdsoft');
				}

				if (options.mask === true) {
					if (dateHelper.formatMask) {
						options.mask = dateHelper.formatMask(options.format)
					} else {
						options.mask = options.format
							.replace(/Y/g, '9999')
							.replace(/F/g, '9999')
							.replace(/m/g, '19')
							.replace(/d/g, '39')
							.replace(/H/g, '29')
							.replace(/i/g, '59')
							.replace(/s/g, '59');
					}
				}

				if ($.type(options.mask) === 'string') {
					if (!isValidValue(options.mask, input.val())) {
						input.val(options.mask.replace(/[0-9]/g, '_'));
						setCaretPos(input[0], 0);
					}

					input.on('paste.xdsoft', function (event) {
						// couple options here
						// 1. return false - tell them they can't paste
						// 2. insert over current characters - minimal validation
						// 3. full fledged parsing and validation
						// let's go option 2 for now

						// fires multiple times for some reason

						// https://stackoverflow.com/a/30496488/1366033
						var clipboardData = event.clipboardData || event.originalEvent.clipboardData || window.clipboardData,
							pastedData = clipboardData.getData('text'),
							val = this.value,
							pos = this.selectionStart

						var valueBeforeCursor = val.substr(0, pos);
						var valueAfterPaste = val.substr(pos + pastedData.length);

						val = valueBeforeCursor + pastedData + valueAfterPaste;
						pos += pastedData.length;

						if (isValidValue(options.mask, val)) {
							this.value = val;
							setCaretPos(this, pos);
						} else if ($.trim(val) === '') {
							this.value = options.mask.replace(/[0-9]/g, '_');
						} else {
							input.trigger('error_input.xdsoft');
						}

						event.preventDefault();
						return false;
					});

					input.on('keydown.xdsoft', function (event) {
						var val = this.value,
							key = event.which,
							pos = this.selectionStart,
							selEnd = this.selectionEnd,
							hasSel = pos !== selEnd,
							digit;

						// only alow these characters
						if (((key >= KEY0 && key <= KEY9) ||
							(key >= _KEY0 && key <= _KEY9)) ||
							(key === BACKSPACE || key === DEL)) {

							// get char to insert which is new character or placeholder ('_')
							digit = (key === BACKSPACE || key === DEL) ? '_' :
								String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key);

							// we're deleting something, we're not at the start, and have normal cursor, move back one
							// if we have a selection length, cursor actually sits behind deletable char, not in front
							if (key === BACKSPACE && pos && !hasSel) {
								pos -= 1;
							}

							// don't stop on a separator, continue whatever direction you were going
							//   value char - keep incrementing position while on separator char and we still have room
							//   del char   - keep decrementing position while on separator char and we still have room
							while (true) {
								var maskValueAtCurPos = options.mask.substr(pos, 1);
								var posShorterThanMaskLength = pos < options.mask.length;
								var posGreaterThanZero = pos > 0;
								var notNumberOrPlaceholder = /[^0-9_]/;
								var curPosOnSep = notNumberOrPlaceholder.test(maskValueAtCurPos);
								var continueMovingPosition = curPosOnSep && posShorterThanMaskLength && posGreaterThanZero

								// if we hit a real char, stay where we are
								if (!continueMovingPosition) break;

								// hitting backspace in a selection, you can possibly go back any further - go forward
								pos += (key === BACKSPACE && !hasSel) ? -1 : 1;

							}


							if (hasSel) {
								// pos might have moved so re-calc length
								var selLength = selEnd - pos

								// if we have a selection length we will wipe out entire selection and replace with default template for that range
								var defaultBlank = options.mask.replace(/[0-9]/g, '_');
								var defaultBlankSelectionReplacement = defaultBlank.substr(pos, selLength);
								var selReplacementRemainder = defaultBlankSelectionReplacement.substr(1) // might be empty

								var valueBeforeSel = val.substr(0, pos);
								var insertChars = digit + selReplacementRemainder;
								var charsAfterSelection = val.substr(pos + selLength);

								val = valueBeforeSel + insertChars + charsAfterSelection

							} else {
								var valueBeforeCursor = val.substr(0, pos);
								var insertChar = digit;
								var valueAfterNextChar = val.substr(pos + 1);

								val = valueBeforeCursor + insertChar + valueAfterNextChar
							}

							if ($.trim(val) === '') {
								// if empty, set to default
								val = defaultBlank
							} else {
								// if at the last character don't need to do anything
								if (pos === options.mask.length) {
									event.preventDefault();
									return false;
								}
							}

							// resume cursor location
							pos += (key === BACKSPACE) ? 0 : 1;
							// don't stop on a separator, continue whatever direction you were going
							while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
								pos += (key === BACKSPACE) ? 0 : 1;
							}

							if (isValidValue(options.mask, val)) {
								this.value = val;
								setCaretPos(this, pos);
							} else if ($.trim(val) === '') {
								this.value = options.mask.replace(/[0-9]/g, '_');
							} else {
								input.trigger('error_input.xdsoft');
							}
						} else {
							if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
								return true;
							}
						}

						event.preventDefault();
						return false;
					});
				}
			}

			_xdsoft_datetime.setCurrentTime(getCurrentValue());

			input
				.data('xdsoft_datetimepicker', datetimepicker)
				.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function () {
					if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) {
						return;
					}
					if (!options.openOnFocus) {
						return;
					}
					clearTimeout(timer);
					timer = setTimeout(function () {
						if (input.is(':disabled')) {
							return;
						}

						triggerAfterOpen = true;
						_xdsoft_datetime.setCurrentTime(getCurrentValue(), true);
						if (options.mask) {
							setMask(options);
						}
						datetimepicker.trigger('open.xdsoft');
					}, 100);
				})
				.on('keydown.xdsoft', function (event) {
					var elementSelector,
						key = event.which;
					if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
						elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
						datetimepicker.trigger('close.xdsoft');
						elementSelector.eq(elementSelector.index(this) + 1).focus();
						return false;
					}
					if ([TAB].indexOf(key) !== -1) {
						datetimepicker.trigger('close.xdsoft');
						return true;
					}
				})
				.on('blur.xdsoft', function () {
					datetimepicker.trigger('close.xdsoft');
				});
		};
		destroyDateTimePicker = function (input) {
			var datetimepicker = input.data('xdsoft_datetimepicker');
			if (datetimepicker) {
				datetimepicker.data('xdsoft_datetime', null);
				datetimepicker.remove();
				input
					.data('xdsoft_datetimepicker', null)
					.off('.xdsoft');
				$(options.contentWindow).off('resize.xdsoft');
				$([options.contentWindow, options.ownerDocument.body]).off('mousedown.xdsoft touchstart');
				if (input.unmousewheel) {
					input.unmousewheel();
				}
			}
		};
		$(options.ownerDocument)
			.off('keydown.xdsoftctrl keyup.xdsoftctrl')
			.on('keydown.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = true;
				}
			})
			.on('keyup.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = false;
				}
			});

		this.each(function () {
			var datetimepicker = $(this).data('xdsoft_datetimepicker'), $input;
			if (datetimepicker) {
				if ($.type(opt) === 'string') {
					switch (opt) {
						case 'show':
							$(this).select().focus();
							datetimepicker.trigger('open.xdsoft');
							break;
						case 'hide':
							datetimepicker.trigger('close.xdsoft');
							break;
						case 'toggle':
							datetimepicker.trigger('toggle.xdsoft');
							break;
						case 'destroy':
							destroyDateTimePicker($(this));
							break;
						case 'reset':
							this.value = this.defaultValue;
							if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
								datetimepicker.data('changed', false);
							}
							datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
							break;
						case 'validate':
							$input = datetimepicker.data('input');
							$input.trigger('blur.xdsoft');
							break;
						default:
							if (datetimepicker[opt] && $.isFunction(datetimepicker[opt])) {
								result = datetimepicker[opt](opt2);
							}
					}
				} else {
					datetimepicker
						.setOptions(opt);
				}
				return 0;
			}
			if ($.type(opt) !== 'string') {
				if (!options.lazyInit || options.open || options.inline) {
					createDateTimePicker($(this));
				} else {
					lazyInit($(this));
				}
			}
		});

		return result;
	};

	$.fn.datetimepicker.defaults = default_options;

	function HighlightedDate(date, desc, style) {
		"use strict";
		this.date = date;
		this.desc = desc;
		this.style = style;
	}
};
; (function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery', 'jquery-mousewheel'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS style for Browserify
		module.exports = factory(require('jquery'));;
	} else {
		// Browser globals
		factory(jQuery);
	}
}(datetimepickerFactory));


/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS style for Browserify
		module.exports = factory;
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
		toBind = ('onwheel' in document || document.documentMode >= 9) ?
			['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
		slice = Array.prototype.slice,
		nullLowestDeltaTimeout, lowestDelta;

	if ($.event.fixHooks) {
		for (var i = toFix.length; i;) {
			$.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
		}
	}

	var special = $.event.special.mousewheel = {
		version: '3.1.12',

		setup: function () {
			if (this.addEventListener) {
				for (var i = toBind.length; i;) {
					this.addEventListener(toBind[--i], handler, false);
				}
			} else {
				this.onmousewheel = handler;
			}
			// Store the line height and page height for this particular element
			$.data(this, 'mousewheel-line-height', special.getLineHeight(this));
			$.data(this, 'mousewheel-page-height', special.getPageHeight(this));
		},

		teardown: function () {
			if (this.removeEventListener) {
				for (var i = toBind.length; i;) {
					this.removeEventListener(toBind[--i], handler, false);
				}
			} else {
				this.onmousewheel = null;
			}
			// Clean up the data we added to the element
			$.removeData(this, 'mousewheel-line-height');
			$.removeData(this, 'mousewheel-page-height');
		},

		getLineHeight: function (elem) {
			var $elem = $(elem),
				$parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
			if (!$parent.length) {
				$parent = $('body');
			}
			return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
		},

		getPageHeight: function (elem) {
			return $(elem).height();
		},

		settings: {
			adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
			normalizeOffset: true  // calls getBoundingClientRect for each event
		}
	};

	$.fn.extend({
		mousewheel: function (fn) {
			return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
		},

		unmousewheel: function (fn) {
			return this.unbind('mousewheel', fn);
		}
	});


	function handler(event) {
		var orgEvent = event || window.event,
			args = slice.call(arguments, 1),
			delta = 0,
			deltaX = 0,
			deltaY = 0,
			absDelta = 0,
			offsetX = 0,
			offsetY = 0;
		event = $.event.fix(orgEvent);
		event.type = 'mousewheel';

		// Old school scrollwheel delta
		if ('detail' in orgEvent) { deltaY = orgEvent.detail * -1; }
		if ('wheelDelta' in orgEvent) { deltaY = orgEvent.wheelDelta; }
		if ('wheelDeltaY' in orgEvent) { deltaY = orgEvent.wheelDeltaY; }
		if ('wheelDeltaX' in orgEvent) { deltaX = orgEvent.wheelDeltaX * -1; }

		// Firefox < 17 horizontal scrolling related to DOMMouseScroll event
		if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
			deltaX = deltaY * -1;
			deltaY = 0;
		}

		// Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
		delta = deltaY === 0 ? deltaX : deltaY;

		// New school wheel delta (wheel event)
		if ('deltaY' in orgEvent) {
			deltaY = orgEvent.deltaY * -1;
			delta = deltaY;
		}
		if ('deltaX' in orgEvent) {
			deltaX = orgEvent.deltaX;
			if (deltaY === 0) { delta = deltaX * -1; }
		}

		// No change actually happened, no reason to go any further
		if (deltaY === 0 && deltaX === 0) { return; }

		// Need to convert lines and pages to pixels if we aren't already in pixels
		// There are three delta modes:
		//   * deltaMode 0 is by pixels, nothing to do
		//   * deltaMode 1 is by lines
		//   * deltaMode 2 is by pages
		if (orgEvent.deltaMode === 1) {
			var lineHeight = $.data(this, 'mousewheel-line-height');
			delta *= lineHeight;
			deltaY *= lineHeight;
			deltaX *= lineHeight;
		} else if (orgEvent.deltaMode === 2) {
			var pageHeight = $.data(this, 'mousewheel-page-height');
			delta *= pageHeight;
			deltaY *= pageHeight;
			deltaX *= pageHeight;
		}

		// Store lowest absolute delta to normalize the delta values
		absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

		if (!lowestDelta || absDelta < lowestDelta) {
			lowestDelta = absDelta;

			// Adjust older deltas if necessary
			if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
				lowestDelta /= 40;
			}
		}

		// Adjust older deltas if necessary
		if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
			// Divide all the things by 40!
			delta /= 40;
			deltaX /= 40;
			deltaY /= 40;
		}

		// Get a whole, normalized value for the deltas
		delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
		deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
		deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

		// Normalise offsetX and offsetY properties
		if (special.settings.normalizeOffset && this.getBoundingClientRect) {
			var boundingRect = this.getBoundingClientRect();
			offsetX = event.clientX - boundingRect.left;
			offsetY = event.clientY - boundingRect.top;
		}

		// Add information to the event object
		event.deltaX = deltaX;
		event.deltaY = deltaY;
		event.deltaFactor = lowestDelta;
		event.offsetX = offsetX;
		event.offsetY = offsetY;
		// Go ahead and set deltaMode to 0 since we converted to pixels
		// Although this is a little odd since we overwrite the deltaX/Y
		// properties with normalized deltas.
		event.deltaMode = 0;

		// Add event and delta to the front of the arguments
		args.unshift(event, delta, deltaX, deltaY);

		// Clearout lowestDelta after sometime to better
		// handle multiple device types that give different
		// a different lowestDelta
		// Ex: trackpad = 3 and mouse wheel = 120
		if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
		nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

		return ($.event.dispatch || $.event.handle).apply(this, args);
	}

	function nullLowestDelta() {
		lowestDelta = null;
	}

	function shouldAdjustOldDeltas(orgEvent, absDelta) {
		// If this is an older event and the delta is divisable by 120,
		// then we are assuming that the browser is treating this as an
		// older mouse wheel event and that we should divide the deltas
		// by 40 to try and get a more usable deltaFactor.
		// Side note, this actually impacts the reported scroll distance
		// in older browsers and can cause scrolling to be slower than native.
		// Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
		return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
	}

}));
;


$(document).ready(function () {
	/* FORM CONTACT */
	$('#btn-sm').click(function () {

		if (submit_form_buy_fast())

			//document.buy_fast_form.submit();
			$('#buy_fast_form').submit();

	})


});
// function submitForm()
// {
// 	if(checkFormsubmit())
// 	{
// 		$('#buy_fast_form').submit();
// 	}

// }
$(function () {


	$("#datepicker2").datetimepicker();

	// $('#datepicker').datepicker({
	//   autoclose: true;
	// });

	// $('.timepicker').timepicker({
	//   showInputs: false;
	// });

});



function submit_form_buy_fast() {
	$('label.label_error').prev().remove();
	$('label.label_error').remove();

	if (!notEmpty("name_buy_fast", "Bạn phải nhập họ tên")) {
		return false;
	}
	if (!notEmpty("datepicker2", "Bạn phải nhập ngày đến")) {

		return false;
	}

	if (!notEmpty("telephone_buy_fast", "Bạn phải nhập số phone"))
		return false;


	if (!isPhone("telephone_buy_fast", "Bạn nhập số điện thoại không hợp lệ"))
		return false;

	// if(!notEmpty("message","Hãy nhập nội dung")){
	// 	return false;
	// }

	$("#btn-sm").attr("disabled", true);
	return true;




}
function submit_form_menu() {
	$('label.label_error').prev().remove();
	$('label.label_error').remove();

	if (!notEmpty("name_buy_fast1", "Bạn phải nhập họ tên")) {
		return false;
	}
	if (!notEmpty("datepicker1", "Bạn phải nhập ngày ăn")) {

		return false;
	}

	if (!notEmpty("telephone_buy_fast1", "Bạn phải nhập số phone"))
		return false;


	if (!isPhone("telephone_buy_fast1", "Bạn nhập số điện thoại không hợp lệ"))
		return false;

	// if(!notEmpty("message","Hãy nhập nội dung")){
	// 	return false;
	// }
	if (!notEmpty("member_buy_fast1", "Hãy nhập số lượng khách")) {
		return false;
	}
	$("#submit_btn1").attr("disabled", "disabled");
	if ($("#submit_btn1").hasAttribute('disabled')) {
		alert('Thông tin đang được gửi. Vui lòng không click thêm');
	}

	return true;

}

function close_f() {
	$('#form_fast').addClass('hide');
};

function open_f() {
	$('#form_fast').removeClass('hide');

};;// submit_comment();


$(document).ready(function () {
	/* FORM CONTACT */

	// var id = $('#record_id').val();
	var id = $('#record_id').val();
	var cmt_module = $('#_cmt_module').val();
	var cmt_view = $('#_cmt_view').val();
	var cmt_return = $('#_cmt_return').val();

	// $("#_info_comment").load("/index.php?module=comments&view=comments&raw=1&id="+id+"&cmt_module="+cmt_module+"&cmt_view="+cmt_view+"&cmt_return="+cmt_return, {'page':0}, function() {
	// $("#1-page").addClass('active');
	// });  //initial page number to load
	change_rating55();

	$('.btn-comment-mb-rep').click(function () {
		var id_cmt = $(this).parents().attr('id');
		id_cmt = id_cmt.replace('comment_reply_form', 'cmt_content')
		// console.log(id_cmt);

		if (!notEmpty(id_cmt, "Bạn phải nhập nội dung"))
			return false;

		// if(!notEmpty("cmt_content","Bạn phải nhập nội dung"))
		// return false;

		$(this).parent().find('.full-screen-mobile').toggleClass('display-open');
		$(this).parent().find('.wrap_r').toggleClass('display-open');


	});
	$('.button_reply').click(function () {
		$(this).parent().next().removeClass('hide');
		// $(this).addClass('hide');
	});
	$('.button_reply_close').click(function () {
		$(this).parent().parent().parent().addClass('hide');
		// $(this).parent().parent().parent().prev().removeClass('hide');
	});

	$('.btn-comment-mb').click(function () {
		if (!notEmpty("cmt_content", "Bạn phải nhập nội dung"))
			return false;
		$('.full-screen-mobile').toggleClass('display-open');
		$('.wrap_r').toggleClass('display-open');
	});

	$('.close-md-comment').click(function () {
		$('.full-screen-mobile').removeClass('display-open');
		$('.wrap_r').removeClass('display-open');
	});

	$('.full-screen-mobile').click(function () {
		$('.full-screen-mobile').removeClass('display-open');
		$('.wrap_r').removeClass('display-open');
	});

});

function search_comment() {

	var comment_keyword = $('#comment_keyword').val();
	if (!comment_keyword || comment_keyword == '')
		return false;
	var id = $('#record_id').val();
	var cmt_module = $('#_cmt_module').val();
	var cmt_view = $('#_cmt_view').val();
	var link = '/index.php?module=comments&view=comments&raw=1&cmt_module=' + cmt_module + '&cmt_view=' + cmt_view + '&id=' + id + '&keyword=' + comment_keyword;
	$.get(link, {}, function (html) {
		$('#_info_comment').html(html);
		$('html, body').animate({ scrollTop: $('#_info_comment').position().top }, 'slow');
	});
	return false;


}



var width = $(window).width();
$(window).resize(function () {
	width = $(window).width();

});
function submit_comment() {

	$('label.label_error').prev().remove();
	$('label.label_error').remove();

	//if(!notEmpty("cmt_content","Bạn phải nhập nội dung"))
	//return false;

	//var id_cmt = $(this).parents('.form_comment').attr('id')
	// alert('#' + id_cmt);
	//if(!notEmpty('#' + id_cmt + "cmt_content","Bạn phải nhập nội dung"))
	//return false;

	if (!notEmpty("cmt_name", "Bạn phải nhập họ tên")) {
		return false;
	}
	if (!notEmpty("cmt_email", "Bạn phải email"))
		return false;
	if (!emailValidator("cmt_email", "Email nhập không hợp lệ")) {
		return false;
	}
	//if(!notEmpty("txtCaptcha","Bạn phải nhập mã hiển thị"))
	//	return false;
	/* stop form from submitting normally */
	// event.preventDefault();

	/* get some values from elements on the page: */
	url = $('#link_reply_form').val();
	/* Send the data using post */
	var posting = $.post(url, {
		name: $('#cmt_name').val(),
		email: $('#cmt_email').val(),
		rate: $('#rating_value').val(),
		content: $('#cmt_content').val(),
		record_id: $('#_cmt_record_id').val(),
		parent_id: $('#parent_id').val(),
		linkurlall: $('#linkurlall').val(),
		// module: $('#_cmt_module').val(), 
		// view: $('#_cmt_view').val(), 
		"return": $('#_cmt_return').val()

	});
	var id = $('#record_id').val();
	var cmt_module = $('#_cmt_module').val();
	var cmt_view = $('#_cmt_view').val();
	var cmt_return = $('#_cmt_return').val();
	/* Alerts the results */

	// $.ajax({url: "/index.php?module=users&task=ajax_check_captcha&raw=1",
	// 	data: {
	// 		txtCaptcha: $('#txtCaptcha').val()
	// 		},
	// 	dataType: "text",
	// 	async: false,

	// 	success: function(result) {
	// 		$('label.username_check').prev().remove();
	// 		$('label.username_check').remove();
	// 		if(result == 0){
	// 			invalid('txtCaptcha','Bạn nhập sai mã hiển thị');
	// 			return false;
	// 		} else {
	// 			posting.done(function( data ) {
	// 				// alert('Cảm ơn bạn đã gửi comment');
	// 				$('#cmt_name').val('');
	// 				$('#cmt_email').val('');
	// 				$('#cmt_content').val('');
	// 				$("#_info_comment").load("/index.php?module=comments&view=comments&raw=1&id="+id+"&cmt_module="+cmt_module+"&cmt_view="+cmt_view+"&cmt_return="+cmt_return, {'page':0}, function() {
	// 					// $("#1-page").addClass('active');
	// 				});  //initial page number to load
	// 			});
	// 		}
	// 	}

	// });
	posting.done(function (data) {
		alert('Cảm ơn bạn đã gửi comment, chúng tôi sẽ phê duyệt comment của bạn nhanh nhất !');
		$('#cmt_name').val('');
		$('#cmt_email').val('');
		$('#cmt_content').val('');
		$("#_info_comment").load("/index.php?module=comments&view=comments&raw=1&id=" + id + "&cmt_module=" + cmt_module + "&cmt_view=" + cmt_view + "&cmt_return=" + cmt_return, { 'page': 0 }, function () {

			$('.full-screen-mobile').removeClass('display-open');
			$('.wrap_r').removeClass('display-open');


		});  //initial page number to load
	});




}



function submit_reply(comment_id) {
	if (!notEmpty2('cmt_content_' + comment_id, 'Nội dung', 'Bạn phải nhập nội dung')) {
		return false;
	}
	// if(!notEmpty2("cmt_name_"+comment_id,'Họ tên',"Bạn phải nhập họ tên")){
	// 	return false;
	// }
	// if(!notEmpty2('cmt_email_'+comment_id,'Email',"Bạn phải nhập số email"))
	// 	return false;
	// if(!emailValidator('cmt_email_'+comment_id,'Email nhập không hợp lệ')){
	// 	return false;
	// }

	// $('#comment_reply_form_'+comment_id).submit();
	/* stop form from submitting normally */
	// event.preventDefault();

	/* get some values from elements on the page: */
	url = $('#link_reply_form_' + comment_id).val();
	// /* Send the data using post */
	var posting = $.post(url, {
		name: $('#cmt_name_' + comment_id).val(),
		email: $('#cmt_email_' + comment_id).val(),
		content: $('#cmt_content_' + comment_id).val(),
		record_id: $('#_cmt_record_id_' + comment_id).val(),
		parent_id: $('#parent_id_' + comment_id).val(),
		cmt_module: $('#_cmt_module_' + comment_id).val(),
		cmt_view: $('#_cmt_view_'.comment_id).val(),
		linkurlall: $('#linkurlall').val(),
		"return": $('#_cmt_return_' + comment_id).val()

	});
	var id = $('#record_id').val();
	var cmt_module = $('#_cmt_module_' + comment_id).val();
	var cmt_view = $('#_cmt_view_' + comment_id).val();
	var cmt_type = $('#_cmt_type_' + comment_id).val();
	var cmt_return = $('#_cmt_return_' + comment_id).val();

	/* Alerts the results */
	posting.done(function (data) {

		$('#cmt_content_' + comment_id).val('');
		$("#_info_comment").load("/index.php?module=comments&view=comments&raw=1&id=" + id + "&type=" + cmt_type + "&cmt_module=" + cmt_module + "&cmt_view=" + cmt_view + "&cmt_return=" + cmt_return, { 'page': 0 }, function () {
			// $("#1-page").addClass('active');
			// alert('Cảm ơn bạn đã gửi comment');
		});  //initial page number to load


	});

	console.log(id);
	console.log(cmt_module);
	console.log(cmt_view);
	console.log(cmt_type);
	console.log(cmt_return);
}

function change_rating55() {
	var rating_disable = $('#rating_disable1').val();

	$('#ratings1 i').hover(function () {
		if (rating_disable == '0') {
			value = $(this).attr('value');
			for (var i = 1; i <= 5; i++) {
				if (i <= value) {
					$('#rate_' + i).removeClass('star_off').addClass('star_on');
				} else {
					$('#rate_' + i).removeClass('star_on').addClass('star_off');
				}
			}
		}
	});

	$('#ratings1 i').click(function () {
		if (rating_disable == '0') {
			value = $(this).attr('value');
			$('#rating_value').val(value);
			rating_disable = 1;

		}
	});
}; !function (e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery) }(function (e) { "use strict"; function t(n, o) { var s = this; s.element = n, s.el = e(n), s.suggestions = [], s.badQueries = [], s.selectedIndex = -1, s.currentValue = s.element.value, s.timeoutId = null, s.cachedResponse = {}, s.onChangeTimeout = null, s.onChange = null, s.isLocal = !1, s.suggestionsContainer = null, s.noSuggestionsContainer = null, s.options = e.extend({}, t.defaults, o), s.classes = { selected: "autocomplete-selected", suggestion: "autocomplete-suggestion" }, s.hint = null, s.hintValue = "", s.selection = null, s.initialize(), s.setOptions(o) } var n = { escapeRegExChars: function (e) { return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&") }, createNode: function (e) { var t = document.createElement("div"); return t.className = e, t.style.position = "absolute", t.style.display = "none", t } }, o = { ESC: 27, TAB: 9, RETURN: 13, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 }, s = e.noop; t.utils = n, e.Autocomplete = t, t.defaults = { ajaxSettings: {}, autoSelectFirst: !1, appendTo: "body", serviceUrl: null, lookup: null, onSelect: null, width: "auto", minChars: 1, maxHeight: 300, deferRequestBy: 0, params: {}, formatResult: function (e, t) { if (!t) return e.value; var o = "(" + n.escapeRegExChars(t) + ")"; return e.value.replace(new RegExp(o, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>") }, formatGroup: function (e, t) { return '<div class="autocomplete-group">' + t + "</div>" }, delimiter: null, zIndex: 9999, type: "GET", noCache: !1, onSearchStart: s, onSearchComplete: s, onSearchError: s, preserveInput: !1, containerClass: "autocomplete-suggestions", tabDisabled: !1, dataType: "text", currentRequest: null, triggerSelectOnValidInput: !0, preventBadQueries: !0, lookupFilter: function (e, t, n) { return -1 !== e.value.toLowerCase().indexOf(n) }, paramName: "query", transformResult: function (t) { return "string" == typeof t ? e.parseJSON(t) : t }, showNoSuggestionNotice: !1, noSuggestionNotice: "No results", orientation: "bottom", forceFixPosition: !1 }, t.prototype = { initialize: function () { var n, o = this, s = "." + o.classes.suggestion, i = o.classes.selected, a = o.options; o.element.setAttribute("autocomplete", "off"), o.noSuggestionsContainer = e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), o.suggestionsContainer = t.utils.createNode(a.containerClass), (n = e(o.suggestionsContainer)).appendTo(a.appendTo || "body"), "auto" !== a.width && n.css("width", a.width), n.on("mouseover.autocomplete", s, function () { o.activate(e(this).data("index")) }), n.on("mouseout.autocomplete", function () { o.selectedIndex = -1, n.children("." + i).removeClass(i) }), n.on("click.autocomplete", s, function () { o.select(e(this).data("index")) }), n.on("click.autocomplete", function () { clearTimeout(o.blurTimeoutId) }), o.fixPositionCapture = function () { o.visible && o.fixPosition() }, e(window).on("resize.autocomplete", o.fixPositionCapture), o.el.on("keydown.autocomplete", function (e) { o.onKeyPress(e) }), o.el.on("keyup.autocomplete", function (e) { o.onKeyUp(e) }), o.el.on("blur.autocomplete", function () { o.onBlur() }), o.el.on("focus.autocomplete", function () { o.onFocus() }), o.el.on("change.autocomplete", function (e) { o.onKeyUp(e) }), o.el.on("input.autocomplete", function (e) { o.onKeyUp(e) }) }, onFocus: function () { var e = this; e.fixPosition(), e.el.val().length >= e.options.minChars && e.onValueChange() }, onBlur: function () { var e = this; e.blurTimeoutId = setTimeout(function () { e.hide() }, 200) }, abortAjax: function () { var e = this; e.currentRequest && (e.currentRequest.abort(), e.currentRequest = null) }, setOptions: function (t) { var n = this, o = e.extend({}, n.options, t); n.isLocal = Array.isArray(o.lookup), n.isLocal && (o.lookup = n.verifySuggestionsFormat(o.lookup)), o.orientation = n.validateOrientation(o.orientation, "bottom"), e(n.suggestionsContainer).css({ "max-height": o.maxHeight + "px", width: o.width + "px", "z-index": o.zIndex }), this.options = o }, clearCache: function () { this.cachedResponse = {}, this.badQueries = [] }, clear: function () { this.clearCache(), this.currentValue = "", this.suggestions = [] }, disable: function () { var e = this; e.disabled = !0, clearTimeout(e.onChangeTimeout), e.abortAjax() }, enable: function () { this.disabled = !1 }, fixPosition: function () { var t = this, n = e(t.suggestionsContainer), o = n.parent().get(0); if (o === document.body || t.options.forceFixPosition) { var s = t.options.orientation, i = n.outerHeight(), a = t.el.outerHeight(), u = t.el.offset(), r = { top: u.top, left: u.left }; if ("auto" === s) { var l = e(window).height(), c = e(window).scrollTop(), g = -c + u.top - i, d = c + l - (u.top + a + i); s = Math.max(g, d) === g ? "top" : "bottom" } if (r.top += "top" === s ? -i : a, o !== document.body) { var p, h = n.css("opacity"); t.visible || n.css("opacity", 0).show(), p = n.offsetParent().offset(), r.top -= p.top, r.top += o.scrollTop, r.left -= p.left, t.visible || n.css("opacity", h).hide() } "auto" === t.options.width && (r.width = t.el.outerWidth() + "px"), n.css(r) } }, isCursorAtEnd: function () { var e, t = this, n = t.el.val().length, o = t.element.selectionStart; return "number" == typeof o ? o === n : !document.selection || ((e = document.selection.createRange()).moveStart("character", -n), n === e.text.length) }, onKeyPress: function (e) { var t = this; if (t.disabled || t.visible || e.which !== o.DOWN || !t.currentValue) { if (!t.disabled && t.visible) { switch (e.which) { case o.ESC: t.el.val(t.currentValue), t.hide(); break; case o.RIGHT: if (t.hint && t.options.onHint && t.isCursorAtEnd()) { t.selectHint(); break } return; case o.TAB: if (t.hint && t.options.onHint) return void t.selectHint(); if (-1 === t.selectedIndex) return void t.hide(); if (t.select(t.selectedIndex), !1 === t.options.tabDisabled) return; break; case o.RETURN: if (-1 === t.selectedIndex) return void t.hide(); t.select(t.selectedIndex); break; case o.UP: t.moveUp(); break; case o.DOWN: t.moveDown(); break; default: return }e.stopImmediatePropagation(), e.preventDefault() } } else t.suggest() }, onKeyUp: function (e) { var t = this; if (!t.disabled) { switch (e.which) { case o.UP: case o.DOWN: return }clearTimeout(t.onChangeTimeout), t.currentValue !== t.el.val() && (t.findBestHint(), t.options.deferRequestBy > 0 ? t.onChangeTimeout = setTimeout(function () { t.onValueChange() }, t.options.deferRequestBy) : t.onValueChange()) } }, onValueChange: function () { if (this.ignoreValueChange) this.ignoreValueChange = !1; else { var t = this, n = t.options, o = t.el.val(), s = t.getQuery(o); t.selection && t.currentValue !== s && (t.selection = null, (n.onInvalidateSelection || e.noop).call(t.element)), clearTimeout(t.onChangeTimeout), t.currentValue = o, t.selectedIndex = -1, n.triggerSelectOnValidInput && t.isExactMatch(s) ? t.select(0) : s.length < n.minChars ? t.hide() : t.getSuggestions(s) } }, isExactMatch: function (e) { var t = this.suggestions; return 1 === t.length && t[0].value.toLowerCase() === e.toLowerCase() }, getQuery: function (t) { var n, o = this.options.delimiter; return o ? (n = t.split(o), e.trim(n[n.length - 1])) : t }, getSuggestionsLocal: function (t) { var n, o = this.options, s = t.toLowerCase(), i = o.lookupFilter, a = parseInt(o.lookupLimit, 10); return n = { suggestions: e.grep(o.lookup, function (e) { return i(e, t, s) }) }, a && n.suggestions.length > a && (n.suggestions = n.suggestions.slice(0, a)), n }, getSuggestions: function (t) { var n, o, s, i, a = this, u = a.options, r = u.serviceUrl; u.params[u.paramName] = t, !1 !== u.onSearchStart.call(a.element, u.params) && (o = u.ignoreParams ? null : u.params, e.isFunction(u.lookup) ? u.lookup(t, function (e) { a.suggestions = e.suggestions, a.suggest(), u.onSearchComplete.call(a.element, t, e.suggestions) }) : (a.isLocal ? n = a.getSuggestionsLocal(t) : (e.isFunction(r) && (r = r.call(a.element, t)), s = r + "?" + e.param(o || {}), n = a.cachedResponse[s]), n && Array.isArray(n.suggestions) ? (a.suggestions = n.suggestions, a.suggest(), u.onSearchComplete.call(a.element, t, n.suggestions)) : a.isBadQuery(t) ? u.onSearchComplete.call(a.element, t, []) : (a.abortAjax(), i = { url: r, data: o, type: u.type, dataType: u.dataType }, e.extend(i, u.ajaxSettings), a.currentRequest = e.ajax(i).done(function (e) { var n; a.currentRequest = null, n = u.transformResult(e, t), a.processResponse(n, t, s), u.onSearchComplete.call(a.element, t, n.suggestions) }).fail(function (e, n, o) { u.onSearchError.call(a.element, t, e, n, o) })))) }, isBadQuery: function (e) { if (!this.options.preventBadQueries) return !1; for (var t = this.badQueries, n = t.length; n--;)if (0 === e.indexOf(t[n])) return !0; return !1 }, hide: function () { var t = this, n = e(t.suggestionsContainer); e.isFunction(t.options.onHide) && t.visible && t.options.onHide.call(t.element, n), t.visible = !1, t.selectedIndex = -1, clearTimeout(t.onChangeTimeout), e(t.suggestionsContainer).hide(), t.signalHint(null) }, suggest: function () { if (this.suggestions.length) { var t, n = this, o = n.options, s = o.groupBy, i = o.formatResult, a = n.getQuery(n.currentValue), u = n.classes.suggestion, r = n.classes.selected, l = e(n.suggestionsContainer), c = e(n.noSuggestionsContainer), g = o.beforeRender, d = "", p = function (e, n) { var i = e.data[s]; return t === i ? "" : (t = i, o.formatGroup(e, t)) }; o.triggerSelectOnValidInput && n.isExactMatch(a) ? n.select(0) : (e.each(n.suggestions, function (e, t) { s && (d += p(t, 0)), d += '<div class="' + u + '" data-index="' + e + '">' + i(t, a, e) + "</div>" }), this.adjustContainerWidth(), c.detach(), l.html(d), e.isFunction(g) && g.call(n.element, l, n.suggestions), n.fixPosition(), l.show(), o.autoSelectFirst && (n.selectedIndex = 0, l.scrollTop(0), l.children("." + u).first().addClass(r)), n.visible = !0, n.findBestHint()) } else this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide() }, noSuggestions: function () { var t = this, n = t.options.beforeRender, o = e(t.suggestionsContainer), s = e(t.noSuggestionsContainer); this.adjustContainerWidth(), s.detach(), o.empty(), o.append(s), e.isFunction(n) && n.call(t.element, o, t.suggestions), t.fixPosition(), o.show(), t.visible = !0 }, adjustContainerWidth: function () { var t, n = this, o = n.options, s = e(n.suggestionsContainer); "auto" === o.width ? (t = n.el.outerWidth(), s.css("width", t > 0 ? t : 300)) : "flex" === o.width && s.css("width", "") }, findBestHint: function () { var t = this, n = t.el.val().toLowerCase(), o = null; n && (e.each(t.suggestions, function (e, t) { var s = 0 === t.value.toLowerCase().indexOf(n); return s && (o = t), !s }), t.signalHint(o)) }, signalHint: function (t) { var n = "", o = this; t && (n = o.currentValue + t.value.substr(o.currentValue.length)), o.hintValue !== n && (o.hintValue = n, o.hint = t, (this.options.onHint || e.noop)(n)) }, verifySuggestionsFormat: function (t) { return t.length && "string" == typeof t[0] ? e.map(t, function (e) { return { value: e, data: null } }) : t }, validateOrientation: function (t, n) { return t = e.trim(t || "").toLowerCase(), -1 === e.inArray(t, ["auto", "bottom", "top"]) && (t = n), t }, processResponse: function (e, t, n) { var o = this, s = o.options; e.suggestions = o.verifySuggestionsFormat(e.suggestions), s.noCache || (o.cachedResponse[n] = e, s.preventBadQueries && !e.suggestions.length && o.badQueries.push(t)), t === o.getQuery(o.currentValue) && (o.suggestions = e.suggestions, o.suggest()) }, activate: function (t) { var n, o = this, s = o.classes.selected, i = e(o.suggestionsContainer), a = i.find("." + o.classes.suggestion); return i.find("." + s).removeClass(s), o.selectedIndex = t, -1 !== o.selectedIndex && a.length > o.selectedIndex ? (n = a.get(o.selectedIndex), e(n).addClass(s), n) : null }, selectHint: function () { var t = this, n = e.inArray(t.hint, t.suggestions); t.select(n) }, select: function (e) { var t = this; t.hide(), t.onSelect(e) }, moveUp: function () { var t = this; if (-1 !== t.selectedIndex) return 0 === t.selectedIndex ? (e(t.suggestionsContainer).children("." + t.classes.suggestion).first().removeClass(t.classes.selected), t.selectedIndex = -1, t.ignoreValueChange = !1, t.el.val(t.currentValue), void t.findBestHint()) : void t.adjustScroll(t.selectedIndex - 1) }, moveDown: function () { var e = this; e.selectedIndex !== e.suggestions.length - 1 && e.adjustScroll(e.selectedIndex + 1) }, adjustScroll: function (t) { var n = this, o = n.activate(t); if (o) { var s, i, a, u = e(o).outerHeight(); s = o.offsetTop, a = (i = e(n.suggestionsContainer).scrollTop()) + n.options.maxHeight - u, s < i ? e(n.suggestionsContainer).scrollTop(s) : s > a && e(n.suggestionsContainer).scrollTop(s - n.options.maxHeight + u), n.options.preserveInput || (n.ignoreValueChange = !0, n.el.val(n.getValue(n.suggestions[t].value))), n.signalHint(null) } }, onSelect: function (t) { var n = this, o = n.options.onSelect, s = n.suggestions[t]; n.currentValue = n.getValue(s.value), n.currentValue === n.el.val() || n.options.preserveInput || n.el.val(n.currentValue), n.signalHint(null), n.suggestions = [], n.selection = s, e.isFunction(o) && o.call(n.element, s) }, getValue: function (e) { var t, n, o = this, s = o.options.delimiter; return s ? (t = o.currentValue, n = t.split(s), 1 === n.length ? e : t.substr(0, t.length - n[n.length - 1].length) + e) : e }, dispose: function () { var t = this; t.el.off(".autocomplete").removeData("autocomplete"), e(window).off("resize.autocomplete", t.fixPositionCapture), e(t.suggestionsContainer).remove() } }, e.fn.devbridgeAutocomplete = function (n, o) { return arguments.length ? this.each(function () { var s = e(this), i = s.data("autocomplete"); "string" == typeof n ? i && "function" == typeof i[n] && i[n](o) : (i && i.dispose && i.dispose(), i = new t(this, n), s.data("autocomplete", i)) }) : this.first().data("autocomplete") }, e.fn.autocomplete || (e.fn.autocomplete = e.fn.devbridgeAutocomplete) });; function submit_form_search() { itemid = 10, url = ""; var e = $("#keyword").val(); e = e.replace(" ", "+"), e = encodeURIComponent(e); var a = $("#link_search").val(); if ("" != e) { url += "&keyword=" + e; r = 1 } else var r = 0; return 0 == r ? (alert("Bạn phải nhập tham số tìm kiếm"), !1) : (link = a.replace("keyword", e), window.location.href = link, !1) } $(document).ready(function () { $("#keyword").autocomplete({ serviceUrl: "/index.php?module=products&view=search&raw=1&task=get_ajax_search", groupBy: "brand", minChars: 2, formatResult: function (e, a) { a = a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); var r = e.data.text.split(" "), n = ""; for (j = 0; j < r.length; j++)n += a.toLowerCase().indexOf(r[j].toLowerCase()) >= 0 ? "<strong>" + r[j] + "</strong> " : r[j] + " "; return ' <a href = "' + e.value + '" > <img src = "' + e.data.image + '" /> <label> <span> ' + n + ' </span> <span class = "price"> ' + e.data.price + "</span></label></a>" }, onSelect: function (e) { $(".control input[name=kwd]").val(e.data.text) } }) });; $(document).ready(function () {
	// Slidebars Submenus
	$('.sb-toggle-left').on('click', function () {
		$submenu = $('.mainmenu_wrapper');
		console.log('vvv');
		if ($submenu.hasClass('sb-mymenu-active')) {
			$submenu.removeClass('sb-mymenu-active');
			$('.mainmenu_wrapper').slideUp(200);
			$('.modal-menu-full-screen').hide();
		} else {
			$submenu.addClass('sb-mymenu-active');
			$('.mainmenu_wrapper').slideDown(200);
			$('.modal-menu-full-screen').show();
		}
	});
	$('.modal-menu-full-screen').on('click', function () {
		$('.modal-menu-full-screen').hide();
		$('.mainmenu_wrapper').slideUp(200);
		$('.mainmenu_wrapper').removeClass('sb-mymenu-active');
	});
	mb_submenu();
});
function mb_submenu() {
	$('.mb_arrow').on('click', function () {
		if ($(this).hasClass('closed') == true) {
			$(this).removeClass('closed').addClass('opened');
			$(this).next('.wrapper_children_level_0').show();
		} else {
			$(this).removeClass('opened').addClass('closed');
			$(this).next('.wrapper_children_level_0').hide();
		}

		//		$(this).next('.wrapper_children_level_0').slideToggle();
	});
}
; expand_filter();
function expand_filter() {
	$('.click-mobile').click(function (e) {
		var id = $(this).attr('data-id');
		$(this).toggleClass("active");
		$('#' + id).toggle("slow");
	});
}
; function check_newletter_form() { if ("" == jQuery.trim($("#nl_email").val()) || "Enter your email" == jQuery.trim($("#nl_email").val())) return alert("Hãy nhập email của bạn"), $("#nl_email").focus(), !1; var a = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; return !!$("#nl_email").val().match(a) || (alert("Email chưa đúng định dạng"), $("#nl_email").focus(), !1) }