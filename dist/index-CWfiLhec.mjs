import il, { jsx as Z, jsxs as Ye, Fragment as ol } from "react/jsx-runtime";
import * as K from "react";
import Ue, { forwardRef as up, useContext as al, isValidElement as zn, cloneElement as jn, Children as lp, useDebugValue as Qs, createElement as fp, useRef as Mi, lazy as dp, useState as dt, useEffect as vn, Suspense as pp } from "react";
const hp = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xlg: 1400,
    xl: 1536,
    xxl: 1920,
    xxxl: 2560
  }
}, _a = {
  // light: "#B8B8B8",
  main: "#141414",
  dark: "#0E0A0A"
}, vp = {
  light: "#808080",
  main: "#E50914",
  dark: "#C11119"
}, wa = {
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#B0B0B080",
  900: "#161C24",
  1e3: "#484c4f80",
  1100: "#b3b3b3",
  1200: "#d8d8d8",
  1300: "#bcbcbc",
  1400: "#e5e5e5",
  1500: "#a0b3b0",
  1600: "#dcdcdc",
  1700: "#0000007F",
  1800: "#dadde9",
  1900: "#3D3D3D",
  2e3: "#202020"
}, xp = {
  common: {
    black: "#000"
    //  white: "#fff"
  },
  primary: { ..._a, contrastText: "#fff" },
  secondary: { ...vp, contrastText: "#fff" },
  // white:{...WHITE, contrastText:"#DE2537"},
  grey: wa,
  action: {
    active: wa[500],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
}, gp = {
  ...xp,
  text: { primary: "#fff", secondary: "#d8d8d8", disabled: wa[600] },
  background: { default: _a.main, paper: _a.main },
  mode: "dark",
  breakpoints: hp,
  typography: {
    fontFamily: [
      "Manrope !important",
      "sans-serif"
    ].join(",")
  }
}, sn = {
  black: "#000",
  white: "#fff"
}, vr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, xr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, gr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, mr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, yr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Gr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, mp = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function ir(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), $i = "$$material";
function J() {
  return J = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, J.apply(null, arguments);
}
function Pe(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function bp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ep(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _p = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(i) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, o), n.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ep(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = bp(i);
      try {
        o.insertRule(n, o.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var i;
      return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), We = "-ms-", Li = "-moz-", de = "-webkit-", sl = "comm", Qa = "rule", Za = "decl", wp = "@import", cl = "@keyframes", Cp = "@layer", Sp = Math.abs, no = String.fromCharCode, Ap = Object.assign;
function Tp(e, t) {
  return ze(e, 0) ^ 45 ? (((t << 2 ^ ze(e, 0)) << 2 ^ ze(e, 1)) << 2 ^ ze(e, 2)) << 2 ^ ze(e, 3) : 0;
}
function ul(e) {
  return e.trim();
}
function Op(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function pe(e, t, r) {
  return e.replace(t, r);
}
function Ca(e, t) {
  return e.indexOf(t);
}
function ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function cn(e, t, r) {
  return e.slice(t, r);
}
function ut(e) {
  return e.length;
}
function es(e) {
  return e.length;
}
function Tn(e, t) {
  return t.push(e), e;
}
function Ip(e, t) {
  return e.map(t).join("");
}
var io = 1, Or = 1, ll = 0, Je = 0, Fe = 0, Mr = "";
function oo(e, t, r, n, i, o, a) {
  return { value: e, root: t, parent: r, type: n, props: i, children: o, line: io, column: Or, length: a, return: "" };
}
function Yr(e, t) {
  return Ap(oo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function kp() {
  return Fe;
}
function Dp() {
  return Fe = Je > 0 ? ze(Mr, --Je) : 0, Or--, Fe === 10 && (Or = 1, io--), Fe;
}
function tt() {
  return Fe = Je < ll ? ze(Mr, Je++) : 0, Or++, Fe === 10 && (Or = 1, io++), Fe;
}
function ht() {
  return ze(Mr, Je);
}
function Un() {
  return Je;
}
function xn(e, t) {
  return cn(Mr, e, t);
}
function un(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fl(e) {
  return io = Or = 1, ll = ut(Mr = e), Je = 0, [];
}
function dl(e) {
  return Mr = "", e;
}
function Hn(e) {
  return ul(xn(Je - 1, Sa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rp(e) {
  for (; (Fe = ht()) && Fe < 33; )
    tt();
  return un(e) > 2 || un(Fe) > 3 ? "" : " ";
}
function Pp(e, t) {
  for (; --t && tt() && !(Fe < 48 || Fe > 102 || Fe > 57 && Fe < 65 || Fe > 70 && Fe < 97); )
    ;
  return xn(e, Un() + (t < 6 && ht() == 32 && tt() == 32));
}
function Sa(e) {
  for (; tt(); )
    switch (Fe) {
      // ] ) " '
      case e:
        return Je;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sa(Fe);
        break;
      // (
      case 40:
        e === 41 && Sa(e);
        break;
      // \
      case 92:
        tt();
        break;
    }
  return Je;
}
function Bp(e, t) {
  for (; tt() && e + Fe !== 57; )
    if (e + Fe === 84 && ht() === 47)
      break;
  return "/*" + xn(t, Je - 1) + "*" + no(e === 47 ? e : tt());
}
function Fp(e) {
  for (; !un(ht()); )
    tt();
  return xn(e, Je);
}
function Np(e) {
  return dl(Wn("", null, null, null, [""], e = fl(e), 0, [0], e));
}
function Wn(e, t, r, n, i, o, a, s, u) {
  for (var c = 0, d = 0, y = a, v = 0, w = 0, _ = 0, l = 1, A = 1, k = 1, T = 0, C = "", E = i, f = o, S = n, p = C; A; )
    switch (_ = T, T = tt()) {
      // (
      case 40:
        if (_ != 108 && ze(p, y - 1) == 58) {
          Ca(p += pe(Hn(T), "&", "&\f"), "&\f") != -1 && (k = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        p += Hn(T);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        p += Rp(_);
        break;
      // \
      case 92:
        p += Pp(Un() - 1, 7);
        continue;
      // /
      case 47:
        switch (ht()) {
          case 42:
          case 47:
            Tn(Mp(Bp(tt(), Un()), t, r), u);
            break;
          default:
            p += "/";
        }
        break;
      // {
      case 123 * l:
        s[c++] = ut(p) * k;
      // } ; \0
      case 125 * l:
      case 59:
      case 0:
        switch (T) {
          // \0 }
          case 0:
          case 125:
            A = 0;
          // ;
          case 59 + d:
            k == -1 && (p = pe(p, /\f/g, "")), w > 0 && ut(p) - y && Tn(w > 32 ? ec(p + ";", n, r, y - 1) : ec(pe(p, " ", "") + ";", n, r, y - 2), u);
            break;
          // @ ;
          case 59:
            p += ";";
          // { rule/at-rule
          default:
            if (Tn(S = Zs(p, t, r, c, d, i, s, C, E = [], f = [], y), o), T === 123)
              if (d === 0)
                Wn(p, t, S, S, E, o, y, s, f);
              else
                switch (v === 99 && ze(p, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wn(e, S, S, n && Tn(Zs(e, S, S, 0, 0, i, s, C, i, E = [], y), f), i, f, y, s, n ? E : f);
                    break;
                  default:
                    Wn(p, S, S, S, [""], f, 0, s, f);
                }
        }
        c = d = w = 0, l = k = 1, C = p = "", y = a;
        break;
      // :
      case 58:
        y = 1 + ut(p), w = _;
      default:
        if (l < 1) {
          if (T == 123)
            --l;
          else if (T == 125 && l++ == 0 && Dp() == 125)
            continue;
        }
        switch (p += no(T), T * l) {
          // &
          case 38:
            k = d > 0 ? 1 : (p += "\f", -1);
            break;
          // ,
          case 44:
            s[c++] = (ut(p) - 1) * k, k = 1;
            break;
          // @
          case 64:
            ht() === 45 && (p += Hn(tt())), v = ht(), d = y = ut(C = p += Fp(Un())), T++;
            break;
          // -
          case 45:
            _ === 45 && ut(p) == 2 && (l = 0);
        }
    }
  return o;
}
function Zs(e, t, r, n, i, o, a, s, u, c, d) {
  for (var y = i - 1, v = i === 0 ? o : [""], w = es(v), _ = 0, l = 0, A = 0; _ < n; ++_)
    for (var k = 0, T = cn(e, y + 1, y = Sp(l = a[_])), C = e; k < w; ++k)
      (C = ul(l > 0 ? v[k] + " " + T : pe(T, /&\f/g, v[k]))) && (u[A++] = C);
  return oo(e, t, r, i === 0 ? Qa : s, u, c, d);
}
function Mp(e, t, r) {
  return oo(e, t, r, sl, no(kp()), cn(e, 2, -2), 0);
}
function ec(e, t, r, n) {
  return oo(e, t, r, Za, cn(e, 0, n), cn(e, n + 1, -1), n);
}
function wr(e, t) {
  for (var r = "", n = es(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function $p(e, t, r, n) {
  switch (e.type) {
    case Cp:
      if (e.children.length) break;
    case wp:
    case Za:
      return e.return = e.return || e.value;
    case sl:
      return "";
    case cl:
      return e.return = e.value + "{" + wr(e.children, n) + "}";
    case Qa:
      e.value = e.props.join(",");
  }
  return ut(r = wr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Lp(e) {
  var t = es(e);
  return function(r, n, i, o) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, i, o) || "";
    return a;
  };
}
function zp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function pl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var jp = function(t, r, n) {
  for (var i = 0, o = 0; i = o, o = ht(), i === 38 && o === 12 && (r[n] = 1), !un(o); )
    tt();
  return xn(t, Je);
}, Up = function(t, r) {
  var n = -1, i = 44;
  do
    switch (un(i)) {
      case 0:
        i === 38 && ht() === 12 && (r[n] = 1), t[n] += jp(Je - 1, r, n);
        break;
      case 2:
        t[n] += Hn(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = ht() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += no(i);
    }
  while (i = tt());
  return t;
}, Hp = function(t, r) {
  return dl(Up(fl(t), r));
}, tc = /* @__PURE__ */ new WeakMap(), Wp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !tc.get(n)) && !i) {
      tc.set(t, !0);
      for (var o = [], a = Hp(r, o), s = n.props, u = 0, c = 0; u < a.length; u++)
        for (var d = 0; d < s.length; d++, c++)
          t.props[c] = o[u] ? a[u].replace(/&\f/g, s[d]) : s[d] + " " + a[u];
    }
  }
}, qp = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function hl(e, t) {
  switch (Tp(e, t)) {
    // color-adjust
    case 5103:
      return de + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return de + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return de + e + Li + e + We + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return de + e + We + e + e;
    // order
    case 6165:
      return de + e + We + "flex-" + e + e;
    // align-items
    case 5187:
      return de + e + pe(e, /(\w+).+(:[^]+)/, de + "box-$1$2" + We + "flex-$1$2") + e;
    // align-self
    case 5443:
      return de + e + We + "flex-item-" + pe(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return de + e + We + "flex-line-pack" + pe(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return de + e + We + pe(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return de + e + We + pe(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return de + "box-" + pe(e, "-grow", "") + de + e + We + pe(e, "grow", "positive") + e;
    // transition
    case 4554:
      return de + pe(e, /([^-])(transform)/g, "$1" + de + "$2") + e;
    // cursor
    case 6187:
      return pe(pe(pe(e, /(zoom-|grab)/, de + "$1"), /(image-set)/, de + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return pe(e, /(image-set\([^]*)/, de + "$1$`$1");
    // justify-content
    case 4968:
      return pe(pe(e, /(.+:)(flex-)?(.*)/, de + "box-pack:$3" + We + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + de + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return pe(e, /(.+)-inline(.+)/, de + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ut(e) - 1 - t > 6) switch (ze(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ze(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return pe(e, /(.+:)(.+)-([^]+)/, "$1" + de + "$2-$3$1" + Li + (ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Ca(e, "stretch") ? hl(pe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ze(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ze(e, ut(e) - 3 - (~Ca(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return pe(e, ":", ":" + de) + e;
        // (inline-)?fl(e)x
        case 101:
          return pe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + de + (ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + de + "$2$3$1" + We + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ze(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return de + e + We + pe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return de + e + We + pe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return de + e + We + pe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return de + e + We + e + e;
  }
  return e;
}
var Vp = function(t, r, n, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Za:
      t.return = hl(t.value, t.length);
      break;
    case cl:
      return wr([Yr(t, {
        value: pe(t.value, "@", "@" + de)
      })], i);
    case Qa:
      if (t.length) return Ip(t.props, function(o) {
        switch (Op(o, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return wr([Yr(t, {
              props: [pe(o, /:(read-\w+)/, ":" + Li + "$1")]
            })], i);
          // :placeholder
          case "::placeholder":
            return wr([Yr(t, {
              props: [pe(o, /:(plac\w+)/, ":" + de + "input-$1")]
            }), Yr(t, {
              props: [pe(o, /:(plac\w+)/, ":" + Li + "$1")]
            }), Yr(t, {
              props: [pe(o, /:(plac\w+)/, We + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Gp = [Vp], vl = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var A = l.getAttribute("data-emotion");
      A.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Gp, o = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(l) {
      for (var A = l.getAttribute("data-emotion").split(" "), k = 1; k < A.length; k++)
        o[A[k]] = !0;
      s.push(l);
    }
  );
  var u, c = [Wp, qp];
  {
    var d, y = [$p, zp(function(l) {
      d.insert(l);
    })], v = Lp(c.concat(i, y)), w = function(A) {
      return wr(Np(A), v);
    };
    u = function(A, k, T, C) {
      d = T, w(A ? A + "{" + k.styles + "}" : k.styles), C && (_.inserted[k.name] = !0);
    };
  }
  var _ = {
    key: r,
    sheet: new _p({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: u
  };
  return _.sheet.hydrate(s), _;
}, Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $r(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ct(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var On = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function Yp() {
  if (rc) return he;
  rc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function C(f) {
    if (typeof f == "object" && f !== null) {
      var S = f.$$typeof;
      switch (S) {
        case t:
          switch (f = f.type, f) {
            case u:
            case c:
            case n:
            case o:
            case i:
            case y:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case d:
                case _:
                case w:
                case a:
                  return f;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function E(f) {
    return C(f) === c;
  }
  return he.AsyncMode = u, he.ConcurrentMode = c, he.ContextConsumer = s, he.ContextProvider = a, he.Element = t, he.ForwardRef = d, he.Fragment = n, he.Lazy = _, he.Memo = w, he.Portal = r, he.Profiler = o, he.StrictMode = i, he.Suspense = y, he.isAsyncMode = function(f) {
    return E(f) || C(f) === u;
  }, he.isConcurrentMode = E, he.isContextConsumer = function(f) {
    return C(f) === s;
  }, he.isContextProvider = function(f) {
    return C(f) === a;
  }, he.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, he.isForwardRef = function(f) {
    return C(f) === d;
  }, he.isFragment = function(f) {
    return C(f) === n;
  }, he.isLazy = function(f) {
    return C(f) === _;
  }, he.isMemo = function(f) {
    return C(f) === w;
  }, he.isPortal = function(f) {
    return C(f) === r;
  }, he.isProfiler = function(f) {
    return C(f) === o;
  }, he.isStrictMode = function(f) {
    return C(f) === i;
  }, he.isSuspense = function(f) {
    return C(f) === y;
  }, he.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === c || f === o || f === i || f === y || f === v || typeof f == "object" && f !== null && (f.$$typeof === _ || f.$$typeof === w || f.$$typeof === a || f.$$typeof === s || f.$$typeof === d || f.$$typeof === A || f.$$typeof === k || f.$$typeof === T || f.$$typeof === l);
  }, he.typeOf = C, he;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function Kp() {
  return nc || (nc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function C(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === n || H === c || H === o || H === i || H === y || H === v || typeof H == "object" && H !== null && (H.$$typeof === _ || H.$$typeof === w || H.$$typeof === a || H.$$typeof === s || H.$$typeof === d || H.$$typeof === A || H.$$typeof === k || H.$$typeof === T || H.$$typeof === l);
    }
    function E(H) {
      if (typeof H == "object" && H !== null) {
        var te = H.$$typeof;
        switch (te) {
          case t:
            var ee = H.type;
            switch (ee) {
              case u:
              case c:
              case n:
              case o:
              case i:
              case y:
                return ee;
              default:
                var ie = ee && ee.$$typeof;
                switch (ie) {
                  case s:
                  case d:
                  case _:
                  case w:
                  case a:
                    return ie;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = u, S = c, p = s, b = a, m = t, g = d, O = n, I = _, D = w, L = r, z = o, h = i, Y = y, U = !1;
    function W(H) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(H) || E(H) === u;
    }
    function N(H) {
      return E(H) === c;
    }
    function P(H) {
      return E(H) === s;
    }
    function M(H) {
      return E(H) === a;
    }
    function F(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function x(H) {
      return E(H) === d;
    }
    function B(H) {
      return E(H) === n;
    }
    function j(H) {
      return E(H) === _;
    }
    function q(H) {
      return E(H) === w;
    }
    function $(H) {
      return E(H) === r;
    }
    function V(H) {
      return E(H) === o;
    }
    function G(H) {
      return E(H) === i;
    }
    function X(H) {
      return E(H) === y;
    }
    ve.AsyncMode = f, ve.ConcurrentMode = S, ve.ContextConsumer = p, ve.ContextProvider = b, ve.Element = m, ve.ForwardRef = g, ve.Fragment = O, ve.Lazy = I, ve.Memo = D, ve.Portal = L, ve.Profiler = z, ve.StrictMode = h, ve.Suspense = Y, ve.isAsyncMode = W, ve.isConcurrentMode = N, ve.isContextConsumer = P, ve.isContextProvider = M, ve.isElement = F, ve.isForwardRef = x, ve.isFragment = B, ve.isLazy = j, ve.isMemo = q, ve.isPortal = $, ve.isProfiler = V, ve.isStrictMode = G, ve.isSuspense = X, ve.isValidElementType = C, ve.typeOf = E;
  }()), ve;
}
var ic;
function Xp() {
  return ic || (ic = 1, process.env.NODE_ENV === "production" ? On.exports = Yp() : On.exports = Kp()), On.exports;
}
var Ro, oc;
function Jp() {
  if (oc) return Ro;
  oc = 1;
  var e = Xp(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, i = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, o = {};
  o[e.ForwardRef] = n, o[e.Memo] = i;
  function a(_) {
    return e.isMemo(_) ? i : o[_.$$typeof] || t;
  }
  var s = Object.defineProperty, u = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, v = Object.prototype;
  function w(_, l, A) {
    if (typeof l != "string") {
      if (v) {
        var k = y(l);
        k && k !== v && w(_, k, A);
      }
      var T = u(l);
      c && (T = T.concat(c(l)));
      for (var C = a(_), E = a(l), f = 0; f < T.length; ++f) {
        var S = T[f];
        if (!r[S] && !(A && A[S]) && !(E && E[S]) && !(C && C[S])) {
          var p = d(l, S);
          try {
            s(_, S, p);
          } catch {
          }
        }
      }
    }
    return _;
  }
  return Ro = w, Ro;
}
Jp();
var Qp = !0;
function xl(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
  }), n;
}
var ts = function(t, r, n) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Qp === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, rs = function(t, r, n) {
  ts(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var o = r;
    do
      t.insert(r === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Zp(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var eh = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, th = /[A-Z]|^ms/g, rh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gl = function(t) {
  return t.charCodeAt(1) === 45;
}, ac = function(t) {
  return t != null && typeof t != "boolean";
}, Po = /* @__PURE__ */ pl(function(e) {
  return gl(e) ? e : e.replace(th, "-$&").toLowerCase();
}), sc = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(rh, function(n, i, o) {
          return lt = {
            name: i,
            styles: o,
            next: lt
          }, i;
        });
  }
  return eh[t] !== 1 && !gl(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function ln(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return lt = {
          name: i.name,
          styles: i.styles,
          next: lt
        }, i.name;
      var o = r;
      if (o.styles !== void 0) {
        var a = o.next;
        if (a !== void 0)
          for (; a !== void 0; )
            lt = {
              name: a.name,
              styles: a.styles,
              next: lt
            }, a = a.next;
        var s = o.styles + ";";
        return s;
      }
      return nh(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = lt, c = r(e);
        return lt = u, ln(e, t, c);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var y = t[d];
  return y !== void 0 ? y : d;
}
function nh(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += ln(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var a = r[o];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += o + "{" + t[s] + "}" : ac(s) && (n += Po(o) + ":" + sc(o, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var u = 0; u < a.length; u++)
          ac(a[u]) && (n += Po(o) + ":" + sc(o, a[u]) + ";");
      else {
        var c = ln(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Po(o) + ":" + c + ";";
            break;
          }
          default:
            n += o + "{" + c + "}";
        }
      }
    }
  return n;
}
var cc = /label:\s*([^\s;{]+)\s*(;|$)/g, lt;
function ao(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, i = "";
  lt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    n = !1, i += ln(r, t, o);
  else {
    var a = o;
    i += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (i += ln(r, t, e[s]), n) {
      var u = o;
      i += u[s];
    }
  cc.lastIndex = 0;
  for (var c = "", d; (d = cc.exec(i)) !== null; )
    c += "-" + d[1];
  var y = Zp(i) + c;
  return {
    name: y,
    styles: i,
    next: lt
  };
}
var ih = function(t) {
  return t();
}, ml = K.useInsertionEffect ? K.useInsertionEffect : !1, yl = ml || ih, uc = ml || K.useLayoutEffect, bl = /* @__PURE__ */ K.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ vl({
    key: "css"
  }) : null
), oh = bl.Provider, ns = function(t) {
  return /* @__PURE__ */ up(function(r, n) {
    var i = al(bl);
    return t(r, i, n);
  });
}, Lr = /* @__PURE__ */ K.createContext({}), is = {}.hasOwnProperty, Aa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ah = function(t, r) {
  var n = {};
  for (var i in r)
    is.call(r, i) && (n[i] = r[i]);
  return n[Aa] = t, n;
}, sh = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return ts(r, n, i), yl(function() {
    return rs(r, n, i);
  }), null;
}, ch = /* @__PURE__ */ ns(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var i = e[Aa], o = [n], a = "";
  typeof e.className == "string" ? a = xl(t.registered, o, e.className) : e.className != null && (a = e.className + " ");
  var s = ao(o, void 0, K.useContext(Lr));
  a += t.key + "-" + s.name;
  var u = {};
  for (var c in e)
    is.call(e, c) && c !== "css" && c !== Aa && (u[c] = e[c]);
  return u.className = a, r && (u.ref = r), /* @__PURE__ */ K.createElement(K.Fragment, null, /* @__PURE__ */ K.createElement(sh, {
    cache: t,
    serialized: s,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ K.createElement(i, u));
}), uh = ch, lc = function(t, r) {
  var n = arguments;
  if (r == null || !is.call(r, "css"))
    return K.createElement.apply(void 0, n);
  var i = n.length, o = new Array(i);
  o[0] = uh, o[1] = ah(t, r);
  for (var a = 2; a < i; a++)
    o[a] = n[a];
  return K.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(lc || (lc = {}));
var lh = /* @__PURE__ */ ns(function(e, t) {
  var r = e.styles, n = ao([r], void 0, K.useContext(Lr)), i = K.useRef();
  return uc(function() {
    var o = t.key + "-global", a = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, u = document.querySelector('style[data-emotion="' + o + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), u !== null && (s = !0, u.setAttribute("data-emotion", o), a.hydrate([u])), i.current = [a, s], function() {
      a.flush();
    };
  }, [t]), uc(function() {
    var o = i.current, a = o[0], s = o[1];
    if (s) {
      o[1] = !1;
      return;
    }
    if (n.next !== void 0 && rs(t, n.next, !0), a.tags.length) {
      var u = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = u, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function zi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ao(t);
}
function zr() {
  var e = zi.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var fh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, dh = /* @__PURE__ */ pl(
  function(e) {
    return fh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ph = dh, hh = function(t) {
  return t !== "theme";
}, fc = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ph : hh;
}, dc = function(t, r, n) {
  var i;
  if (r) {
    var o = r.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(a) {
      return t.__emotion_forwardProp(a) && o(a);
    } : o;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, vh = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return ts(r, n, i), yl(function() {
    return rs(r, n, i);
  }), null;
}, xh = function e(t, r) {
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, o, a;
  r !== void 0 && (o = r.label, a = r.target);
  var s = dc(t, r, n), u = s || fc(i), c = !u("as");
  return function() {
    var d = arguments, y = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && y.push("label:" + o + ";"), d[0] == null || d[0].raw === void 0)
      y.push.apply(y, d);
    else {
      var v = d[0];
      y.push(v[0]);
      for (var w = d.length, _ = 1; _ < w; _++)
        y.push(d[_], v[_]);
    }
    var l = ns(function(A, k, T) {
      var C = c && A.as || i, E = "", f = [], S = A;
      if (A.theme == null) {
        S = {};
        for (var p in A)
          S[p] = A[p];
        S.theme = K.useContext(Lr);
      }
      typeof A.className == "string" ? E = xl(k.registered, f, A.className) : A.className != null && (E = A.className + " ");
      var b = ao(y.concat(f), k.registered, S);
      E += k.key + "-" + b.name, a !== void 0 && (E += " " + a);
      var m = c && s === void 0 ? fc(C) : u, g = {};
      for (var O in A)
        c && O === "as" || m(O) && (g[O] = A[O]);
      return g.className = E, T && (g.ref = T), /* @__PURE__ */ K.createElement(K.Fragment, null, /* @__PURE__ */ K.createElement(vh, {
        cache: k,
        serialized: b,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ K.createElement(C, g));
    });
    return l.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", l.defaultProps = t.defaultProps, l.__emotion_real = l, l.__emotion_base = i, l.__emotion_styles = y, l.__emotion_forwardProp = s, Object.defineProperty(l, "toString", {
      value: function() {
        return "." + a;
      }
    }), l.withComponent = function(A, k) {
      var T = e(A, J({}, r, k, {
        shouldForwardProp: dc(l, k, !0)
      }));
      return T.apply(void 0, y);
    }, l;
  };
}, gh = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ta = xh.bind(null);
gh.forEach(function(e) {
  Ta[e] = Ta(e);
});
var In = { exports: {} }, kn = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function mh() {
  if (pc) return xe;
  pc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function C(f) {
    if (typeof f == "object" && f !== null) {
      var S = f.$$typeof;
      switch (S) {
        case t:
          switch (f = f.type, f) {
            case u:
            case c:
            case n:
            case o:
            case i:
            case y:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case d:
                case _:
                case w:
                case a:
                  return f;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function E(f) {
    return C(f) === c;
  }
  return xe.AsyncMode = u, xe.ConcurrentMode = c, xe.ContextConsumer = s, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = d, xe.Fragment = n, xe.Lazy = _, xe.Memo = w, xe.Portal = r, xe.Profiler = o, xe.StrictMode = i, xe.Suspense = y, xe.isAsyncMode = function(f) {
    return E(f) || C(f) === u;
  }, xe.isConcurrentMode = E, xe.isContextConsumer = function(f) {
    return C(f) === s;
  }, xe.isContextProvider = function(f) {
    return C(f) === a;
  }, xe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, xe.isForwardRef = function(f) {
    return C(f) === d;
  }, xe.isFragment = function(f) {
    return C(f) === n;
  }, xe.isLazy = function(f) {
    return C(f) === _;
  }, xe.isMemo = function(f) {
    return C(f) === w;
  }, xe.isPortal = function(f) {
    return C(f) === r;
  }, xe.isProfiler = function(f) {
    return C(f) === o;
  }, xe.isStrictMode = function(f) {
    return C(f) === i;
  }, xe.isSuspense = function(f) {
    return C(f) === y;
  }, xe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === c || f === o || f === i || f === y || f === v || typeof f == "object" && f !== null && (f.$$typeof === _ || f.$$typeof === w || f.$$typeof === a || f.$$typeof === s || f.$$typeof === d || f.$$typeof === A || f.$$typeof === k || f.$$typeof === T || f.$$typeof === l);
  }, xe.typeOf = C, xe;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hc;
function yh() {
  return hc || (hc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function C(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === n || H === c || H === o || H === i || H === y || H === v || typeof H == "object" && H !== null && (H.$$typeof === _ || H.$$typeof === w || H.$$typeof === a || H.$$typeof === s || H.$$typeof === d || H.$$typeof === A || H.$$typeof === k || H.$$typeof === T || H.$$typeof === l);
    }
    function E(H) {
      if (typeof H == "object" && H !== null) {
        var te = H.$$typeof;
        switch (te) {
          case t:
            var ee = H.type;
            switch (ee) {
              case u:
              case c:
              case n:
              case o:
              case i:
              case y:
                return ee;
              default:
                var ie = ee && ee.$$typeof;
                switch (ie) {
                  case s:
                  case d:
                  case _:
                  case w:
                  case a:
                    return ie;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = u, S = c, p = s, b = a, m = t, g = d, O = n, I = _, D = w, L = r, z = o, h = i, Y = y, U = !1;
    function W(H) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(H) || E(H) === u;
    }
    function N(H) {
      return E(H) === c;
    }
    function P(H) {
      return E(H) === s;
    }
    function M(H) {
      return E(H) === a;
    }
    function F(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function x(H) {
      return E(H) === d;
    }
    function B(H) {
      return E(H) === n;
    }
    function j(H) {
      return E(H) === _;
    }
    function q(H) {
      return E(H) === w;
    }
    function $(H) {
      return E(H) === r;
    }
    function V(H) {
      return E(H) === o;
    }
    function G(H) {
      return E(H) === i;
    }
    function X(H) {
      return E(H) === y;
    }
    ge.AsyncMode = f, ge.ConcurrentMode = S, ge.ContextConsumer = p, ge.ContextProvider = b, ge.Element = m, ge.ForwardRef = g, ge.Fragment = O, ge.Lazy = I, ge.Memo = D, ge.Portal = L, ge.Profiler = z, ge.StrictMode = h, ge.Suspense = Y, ge.isAsyncMode = W, ge.isConcurrentMode = N, ge.isContextConsumer = P, ge.isContextProvider = M, ge.isElement = F, ge.isForwardRef = x, ge.isFragment = B, ge.isLazy = j, ge.isMemo = q, ge.isPortal = $, ge.isProfiler = V, ge.isStrictMode = G, ge.isSuspense = X, ge.isValidElementType = C, ge.typeOf = E;
  }()), ge;
}
var vc;
function El() {
  return vc || (vc = 1, process.env.NODE_ENV === "production" ? kn.exports = mh() : kn.exports = yh()), kn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Bo, xc;
function bh() {
  if (xc) return Bo;
  xc = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        c[d] = d;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Bo = i() ? Object.assign : function(o, a) {
    for (var s, u = n(o), c, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var y in s)
        t.call(s, y) && (u[y] = s[y]);
      if (e) {
        c = e(s);
        for (var v = 0; v < c.length; v++)
          r.call(s, c[v]) && (u[c[v]] = s[c[v]]);
      }
    }
    return u;
  }, Bo;
}
var Fo, gc;
function os() {
  if (gc) return Fo;
  gc = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fo = e, Fo;
}
var No, mc;
function _l() {
  return mc || (mc = 1, No = Function.call.bind(Object.prototype.hasOwnProperty)), No;
}
var Mo, yc;
function Eh() {
  if (yc) return Mo;
  yc = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ os(), r = {}, n = /* @__PURE__ */ _l();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, s, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (n(o, d)) {
          var y;
          try {
            if (typeof o[d] != "function") {
              var v = Error(
                (u || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            y = o[d](a, d, u, s, null, t);
          } catch (_) {
            y = _;
          }
          if (y && !(y instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var w = c ? c() : "";
            e(
              "Failed " + s + " type: " + y.message + (w ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Mo = i, Mo;
}
var $o, bc;
function _h() {
  if (bc) return $o;
  bc = 1;
  var e = El(), t = bh(), r = /* @__PURE__ */ os(), n = /* @__PURE__ */ _l(), i = /* @__PURE__ */ Eh(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return $o = function(s, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function y(N) {
      var P = N && (c && N[c] || N[d]);
      if (typeof P == "function")
        return P;
    }
    var v = "<<anonymous>>", w = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: T(),
      arrayOf: C,
      element: E(),
      elementType: f(),
      instanceOf: S,
      node: g(),
      objectOf: b,
      oneOf: p,
      oneOfType: m,
      shape: I,
      exact: D
    };
    function _(N, P) {
      return N === P ? N !== 0 || 1 / N === 1 / P : N !== N && P !== P;
    }
    function l(N, P) {
      this.message = N, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function A(N) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, M = 0;
      function F(B, j, q, $, V, G, X) {
        if ($ = $ || v, G = G || q, X !== r) {
          if (u) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = $ + ":" + q;
            !P[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[te] = !0, M++);
          }
        }
        return j[q] == null ? B ? j[q] === null ? new l("The " + V + " `" + G + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new l("The " + V + " `" + G + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : N(j, q, $, V, G);
      }
      var x = F.bind(null, !1);
      return x.isRequired = F.bind(null, !0), x;
    }
    function k(N) {
      function P(M, F, x, B, j, q) {
        var $ = M[F], V = h($);
        if (V !== N) {
          var G = Y($);
          return new l(
            "Invalid " + B + " `" + j + "` of type " + ("`" + G + "` supplied to `" + x + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return A(P);
    }
    function T() {
      return A(a);
    }
    function C(N) {
      function P(M, F, x, B, j) {
        if (typeof N != "function")
          return new l("Property `" + j + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var q = M[F];
        if (!Array.isArray(q)) {
          var $ = h(q);
          return new l("Invalid " + B + " `" + j + "` of type " + ("`" + $ + "` supplied to `" + x + "`, expected an array."));
        }
        for (var V = 0; V < q.length; V++) {
          var G = N(q, V, x, B, j + "[" + V + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return A(P);
    }
    function E() {
      function N(P, M, F, x, B) {
        var j = P[M];
        if (!s(j)) {
          var q = h(j);
          return new l("Invalid " + x + " `" + B + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(N);
    }
    function f() {
      function N(P, M, F, x, B) {
        var j = P[M];
        if (!e.isValidElementType(j)) {
          var q = h(j);
          return new l("Invalid " + x + " `" + B + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(N);
    }
    function S(N) {
      function P(M, F, x, B, j) {
        if (!(M[F] instanceof N)) {
          var q = N.name || v, $ = W(M[F]);
          return new l("Invalid " + B + " `" + j + "` of type " + ("`" + $ + "` supplied to `" + x + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return A(P);
    }
    function p(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(M, F, x, B, j) {
        for (var q = M[F], $ = 0; $ < N.length; $++)
          if (_(q, N[$]))
            return null;
        var V = JSON.stringify(N, function(X, H) {
          var te = Y(H);
          return te === "symbol" ? String(H) : H;
        });
        return new l("Invalid " + B + " `" + j + "` of value `" + String(q) + "` " + ("supplied to `" + x + "`, expected one of " + V + "."));
      }
      return A(P);
    }
    function b(N) {
      function P(M, F, x, B, j) {
        if (typeof N != "function")
          return new l("Property `" + j + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var q = M[F], $ = h(q);
        if ($ !== "object")
          return new l("Invalid " + B + " `" + j + "` of type " + ("`" + $ + "` supplied to `" + x + "`, expected an object."));
        for (var V in q)
          if (n(q, V)) {
            var G = N(q, V, x, B, j + "." + V, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return A(P);
    }
    function m(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < N.length; P++) {
        var M = N[P];
        if (typeof M != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(M) + " at index " + P + "."
          ), a;
      }
      function F(x, B, j, q, $) {
        for (var V = [], G = 0; G < N.length; G++) {
          var X = N[G], H = X(x, B, j, q, $, r);
          if (H == null)
            return null;
          H.data && n(H.data, "expectedType") && V.push(H.data.expectedType);
        }
        var te = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new l("Invalid " + q + " `" + $ + "` supplied to " + ("`" + j + "`" + te + "."));
      }
      return A(F);
    }
    function g() {
      function N(P, M, F, x, B) {
        return L(P[M]) ? null : new l("Invalid " + x + " `" + B + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return A(N);
    }
    function O(N, P, M, F, x) {
      return new l(
        (N || "React class") + ": " + P + " type `" + M + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function I(N) {
      function P(M, F, x, B, j) {
        var q = M[F], $ = h(q);
        if ($ !== "object")
          return new l("Invalid " + B + " `" + j + "` of type `" + $ + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var V in N) {
          var G = N[V];
          if (typeof G != "function")
            return O(x, B, j, V, Y(G));
          var X = G(q, V, x, B, j + "." + V, r);
          if (X)
            return X;
        }
        return null;
      }
      return A(P);
    }
    function D(N) {
      function P(M, F, x, B, j) {
        var q = M[F], $ = h(q);
        if ($ !== "object")
          return new l("Invalid " + B + " `" + j + "` of type `" + $ + "` " + ("supplied to `" + x + "`, expected `object`."));
        var V = t({}, M[F], N);
        for (var G in V) {
          var X = N[G];
          if (n(N, G) && typeof X != "function")
            return O(x, B, j, G, Y(X));
          if (!X)
            return new l(
              "Invalid " + B + " `" + j + "` key `" + G + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(M[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var H = X(q, G, x, B, j + "." + G, r);
          if (H)
            return H;
        }
        return null;
      }
      return A(P);
    }
    function L(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(L);
          if (N === null || s(N))
            return !0;
          var P = y(N);
          if (P) {
            var M = P.call(N), F;
            if (P !== N.entries) {
              for (; !(F = M.next()).done; )
                if (!L(F.value))
                  return !1;
            } else
              for (; !(F = M.next()).done; ) {
                var x = F.value;
                if (x && !L(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(N, P) {
      return N === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function h(N) {
      var P = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : z(P, N) ? "symbol" : P;
    }
    function Y(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var P = h(N);
      if (P === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function U(N) {
      var P = Y(N);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function W(N) {
      return !N.constructor || !N.constructor.name ? v : N.constructor.name;
    }
    return w.checkPropTypes = i, w.resetWarningCache = i.resetWarningCache, w.PropTypes = w, w;
  }, $o;
}
var Lo, Ec;
function wh() {
  if (Ec) return Lo;
  Ec = 1;
  var e = /* @__PURE__ */ os();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Lo = function() {
    function n(a, s, u, c, d, y) {
      if (y !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Lo;
}
var _c;
function Ch() {
  if (_c) return In.exports;
  if (_c = 1, process.env.NODE_ENV !== "production") {
    var e = El(), t = !0;
    In.exports = /* @__PURE__ */ _h()(e.isElement, t);
  } else
    In.exports = /* @__PURE__ */ wh()();
  return In.exports;
}
var Sh = /* @__PURE__ */ Ch();
const R = /* @__PURE__ */ $r(Sh);
let Oa;
typeof document == "object" && (Oa = vl({
  key: "css",
  prepend: !0
}));
function wl(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && Oa ? /* @__PURE__ */ Z(oh, {
    value: Oa,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (wl.propTypes = {
  /**
   * Your component tree.
   */
  children: R.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: R.bool
});
function Ah(e) {
  return e == null || Object.keys(e).length === 0;
}
function Cl(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ Z(lh, {
    styles: typeof t == "function" ? (i) => t(Ah(i) ? r : i) : t
  });
}
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
  defaultTheme: R.object,
  styles: R.oneOfType([R.array, R.string, R.object, R.func])
});
/**
 * @mui/styled-engine v5.16.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function as(e, t) {
  const r = Ta(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Sl = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Cl,
  StyledEngineProvider: wl,
  ThemeContext: Lr,
  css: zi,
  default: as,
  internal_processStyles: Sl,
  keyframes: zr
}, Symbol.toStringTag, { value: "Module" }));
function _t(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Al(e) {
  if (/* @__PURE__ */ K.isValidElement(e) || !_t(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Al(e[r]);
  }), t;
}
function vt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? J({}, e) : e;
  return _t(e) && _t(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ K.isValidElement(t[i]) ? n[i] = t[i] : _t(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && _t(e[i]) ? n[i] = vt(e[i], t[i], r) : r.clone ? n[i] = _t(t[i]) ? Al(t[i]) : t[i] : n[i] = t[i];
  }), n;
}
const Oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vt,
  isPlainObject: _t
}, Symbol.toStringTag, { value: "Module" })), Ih = ["values", "unit", "step"], kh = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => J({}, r, {
    [n.key]: n.val
  }), {});
};
function Tl(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, i = Pe(e, Ih), o = kh(t), a = Object.keys(o);
  function s(v) {
    return `@media (min-width:${typeof t[v] == "number" ? t[v] : v}${r})`;
  }
  function u(v) {
    return `@media (max-width:${(typeof t[v] == "number" ? t[v] : v) - n / 100}${r})`;
  }
  function c(v, w) {
    const _ = a.indexOf(w);
    return `@media (min-width:${typeof t[v] == "number" ? t[v] : v}${r}) and (max-width:${(_ !== -1 && typeof t[a[_]] == "number" ? t[a[_]] : w) - n / 100}${r})`;
  }
  function d(v) {
    return a.indexOf(v) + 1 < a.length ? c(v, a[a.indexOf(v) + 1]) : s(v);
  }
  function y(v) {
    const w = a.indexOf(v);
    return w === 0 ? s(a[1]) : w === a.length - 1 ? u(a[w]) : c(v, a[a.indexOf(v) + 1]).replace("@media", "@media not all and");
  }
  return J({
    keys: a,
    values: o,
    up: s,
    down: u,
    between: c,
    only: d,
    not: y,
    unit: r
  }, i);
}
const Dh = {
  borderRadius: 4
}, Wt = process.env.NODE_ENV !== "production" ? R.oneOfType([R.number, R.string, R.object, R.array]) : {};
function rn(e, t) {
  return t ? vt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ss = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, wc = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ss[e]}px)`
};
function At(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints || wc;
    return t.reduce((a, s, u) => (a[o.up(o.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const o = n.breakpoints || wc;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(o.values || ss).indexOf(s) !== -1) {
        const u = o.up(s);
        a[u] = r(t[s], s);
      } else {
        const u = s;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Rh(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, i) => {
    const o = e.up(i);
    return n[o] = {}, n;
  }, {})) || {};
}
function Ph(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Te(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ir(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" }));
function so(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function ji(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = so(e, r) || n, t && (i = t(i, n, e)), i;
}
function Be(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, o = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], u = a.theme, c = so(u, n) || {};
    return At(a, s, (y) => {
      let v = ji(c, i, y);
      return y === v && typeof y == "string" && (v = ji(c, i, `${t}${y === "default" ? "" : Te(y)}`, y)), r === !1 ? v : {
        [r]: v
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Wt
  } : {}, o.filterProps = [t], o;
}
function Fh(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Nh = {
  m: "margin",
  p: "padding"
}, Mh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Cc = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, $h = Fh((e) => {
  if (e.length > 2)
    if (Cc[e])
      e = Cc[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Nh[t], i = Mh[r] || "";
  return Array.isArray(i) ? i.map((o) => n + o) : [n + i];
}), co = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], uo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Lh = [...co, ...uo];
function gn(e, t, r, n) {
  var i;
  const o = (i = so(e, t, !1)) != null ? i : r;
  return typeof o == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), o * a) : Array.isArray(o) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[a]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ol(e) {
  return gn(e, "spacing", 8, "spacing");
}
function mn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function zh(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = mn(t, r), n), {});
}
function jh(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const i = $h(r), o = zh(i, n), a = e[r];
  return At(e, a, o);
}
function Il(e, t) {
  const r = Ol(e.theme);
  return Object.keys(e).map((n) => jh(e, t, n, r)).reduce(rn, {});
}
function De(e) {
  return Il(e, co);
}
De.propTypes = process.env.NODE_ENV !== "production" ? co.reduce((e, t) => (e[t] = Wt, e), {}) : {};
De.filterProps = co;
function Re(e) {
  return Il(e, uo);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? uo.reduce((e, t) => (e[t] = Wt, e), {}) : {};
Re.filterProps = uo;
process.env.NODE_ENV !== "production" && Lh.reduce((e, t) => (e[t] = Wt, e), {});
function Uh(e = 8) {
  if (e.mui)
    return e;
  const t = Ol({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((o) => {
    const a = t(o);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function lo(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((o) => {
    n[o] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, o) => t[o] ? rn(i, t[o](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function it(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function at(e, t) {
  return Be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Hh = at("border", it), Wh = at("borderTop", it), qh = at("borderRight", it), Vh = at("borderBottom", it), Gh = at("borderLeft", it), Yh = at("borderColor"), Kh = at("borderTopColor"), Xh = at("borderRightColor"), Jh = at("borderBottomColor"), Qh = at("borderLeftColor"), Zh = at("outline", it), ev = at("outlineColor"), fo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = gn(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: mn(t, n)
    });
    return At(e, e.borderRadius, r);
  }
  return null;
};
fo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Wt
} : {};
fo.filterProps = ["borderRadius"];
lo(Hh, Wh, qh, Vh, Gh, Yh, Kh, Xh, Jh, Qh, fo, Zh, ev);
const po = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = gn(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: mn(t, n)
    });
    return At(e, e.gap, r);
  }
  return null;
};
po.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Wt
} : {};
po.filterProps = ["gap"];
const ho = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = gn(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: mn(t, n)
    });
    return At(e, e.columnGap, r);
  }
  return null;
};
ho.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Wt
} : {};
ho.filterProps = ["columnGap"];
const vo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = gn(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: mn(t, n)
    });
    return At(e, e.rowGap, r);
  }
  return null;
};
vo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Wt
} : {};
vo.filterProps = ["rowGap"];
const tv = Be({
  prop: "gridColumn"
}), rv = Be({
  prop: "gridRow"
}), nv = Be({
  prop: "gridAutoFlow"
}), iv = Be({
  prop: "gridAutoColumns"
}), ov = Be({
  prop: "gridAutoRows"
}), av = Be({
  prop: "gridTemplateColumns"
}), sv = Be({
  prop: "gridTemplateRows"
}), cv = Be({
  prop: "gridTemplateAreas"
}), uv = Be({
  prop: "gridArea"
});
lo(po, ho, vo, tv, rv, nv, iv, ov, av, sv, cv, uv);
function Cr(e, t) {
  return t === "grey" ? t : e;
}
const lv = Be({
  prop: "color",
  themeKey: "palette",
  transform: Cr
}), fv = Be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Cr
}), dv = Be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Cr
});
lo(lv, fv, dv);
function et(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const pv = Be({
  prop: "width",
  transform: et
}), cs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, i;
      const o = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || ss[r];
      return o ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: et(r)
      };
    };
    return At(e, e.maxWidth, t);
  }
  return null;
};
cs.filterProps = ["maxWidth"];
const hv = Be({
  prop: "minWidth",
  transform: et
}), vv = Be({
  prop: "height",
  transform: et
}), xv = Be({
  prop: "maxHeight",
  transform: et
}), gv = Be({
  prop: "minHeight",
  transform: et
});
Be({
  prop: "size",
  cssProperty: "width",
  transform: et
});
Be({
  prop: "size",
  cssProperty: "height",
  transform: et
});
const mv = Be({
  prop: "boxSizing"
});
lo(pv, cs, hv, vv, xv, gv, mv);
const yn = {
  // borders
  border: {
    themeKey: "borders",
    transform: it
  },
  borderTop: {
    themeKey: "borders",
    transform: it
  },
  borderRight: {
    themeKey: "borders",
    transform: it
  },
  borderBottom: {
    themeKey: "borders",
    transform: it
  },
  borderLeft: {
    themeKey: "borders",
    transform: it
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: it
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: fo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Cr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Cr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Cr
  },
  // spacing
  p: {
    style: Re
  },
  pt: {
    style: Re
  },
  pr: {
    style: Re
  },
  pb: {
    style: Re
  },
  pl: {
    style: Re
  },
  px: {
    style: Re
  },
  py: {
    style: Re
  },
  padding: {
    style: Re
  },
  paddingTop: {
    style: Re
  },
  paddingRight: {
    style: Re
  },
  paddingBottom: {
    style: Re
  },
  paddingLeft: {
    style: Re
  },
  paddingX: {
    style: Re
  },
  paddingY: {
    style: Re
  },
  paddingInline: {
    style: Re
  },
  paddingInlineStart: {
    style: Re
  },
  paddingInlineEnd: {
    style: Re
  },
  paddingBlock: {
    style: Re
  },
  paddingBlockStart: {
    style: Re
  },
  paddingBlockEnd: {
    style: Re
  },
  m: {
    style: De
  },
  mt: {
    style: De
  },
  mr: {
    style: De
  },
  mb: {
    style: De
  },
  ml: {
    style: De
  },
  mx: {
    style: De
  },
  my: {
    style: De
  },
  margin: {
    style: De
  },
  marginTop: {
    style: De
  },
  marginRight: {
    style: De
  },
  marginBottom: {
    style: De
  },
  marginLeft: {
    style: De
  },
  marginX: {
    style: De
  },
  marginY: {
    style: De
  },
  marginInline: {
    style: De
  },
  marginInlineStart: {
    style: De
  },
  marginInlineEnd: {
    style: De
  },
  marginBlock: {
    style: De
  },
  marginBlockStart: {
    style: De
  },
  marginBlockEnd: {
    style: De
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: po
  },
  rowGap: {
    style: vo
  },
  columnGap: {
    style: ho
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: et
  },
  maxWidth: {
    style: cs
  },
  minWidth: {
    transform: et
  },
  height: {
    transform: et
  },
  maxHeight: {
    transform: et
  },
  minHeight: {
    transform: et
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function yv(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function bv(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kl() {
  function e(r, n, i, o) {
    const a = {
      [r]: n,
      theme: i
    }, s = o[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: c,
      transform: d,
      style: y
    } = s;
    if (n == null)
      return null;
    if (c === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const v = so(i, c) || {};
    return y ? y(a) : At(a, n, (_) => {
      let l = ji(v, d, _);
      return _ === l && typeof _ == "string" && (l = ji(v, d, `${r}${_ === "default" ? "" : Te(_)}`, _)), u === !1 ? l : {
        [u]: l
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: i,
      theme: o = {}
    } = r || {};
    if (!i)
      return null;
    const a = (n = o.unstable_sxConfig) != null ? n : yn;
    function s(u) {
      let c = u;
      if (typeof u == "function")
        c = u(o);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const d = Rh(o.breakpoints), y = Object.keys(d);
      let v = d;
      return Object.keys(c).forEach((w) => {
        const _ = bv(c[w], o);
        if (_ != null)
          if (typeof _ == "object")
            if (a[w])
              v = rn(v, e(w, _, o, a));
            else {
              const l = At({
                theme: o
              }, _, (A) => ({
                [w]: A
              }));
              yv(l, _) ? v[w] = t({
                sx: _,
                theme: o
              }) : v = rn(v, l);
            }
          else
            v = rn(v, e(w, _, o, a));
      }), Ph(y, v);
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const jr = kl();
jr.filterProps = ["sx"];
function Dl(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const Ev = ["breakpoints", "palette", "spacing", "shape"];
function bn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: o = {}
  } = e, a = Pe(e, Ev), s = Tl(r), u = Uh(i);
  let c = vt({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: J({
      mode: "light"
    }, n),
    spacing: u,
    shape: J({}, Dh, o)
  }, a);
  return c.applyStyles = Dl, c = t.reduce((d, y) => vt(d, y), c), c.unstable_sxConfig = J({}, yn, a == null ? void 0 : a.unstable_sxConfig), c.unstable_sx = function(y) {
    return jr({
      sx: y,
      theme: this
    });
  }, c;
}
const _v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bn,
  private_createBreakpoints: Tl,
  unstable_applyStyles: Dl
}, Symbol.toStringTag, { value: "Module" }));
function wv(e) {
  return Object.keys(e).length === 0;
}
function us(e = null) {
  const t = K.useContext(Lr);
  return !t || wv(t) ? e : t;
}
const Cv = bn();
function Rl(e = Cv) {
  return us(e);
}
const Sv = ["sx"], Av = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : yn;
  return Object.keys(e).forEach((o) => {
    i[o] ? n.systemProps[o] = e[o] : n.otherProps[o] = e[o];
  }), n;
};
function ls(e) {
  const {
    sx: t
  } = e, r = Pe(e, Sv), {
    systemProps: n,
    otherProps: i
  } = Av(r);
  let o;
  return Array.isArray(t) ? o = [n, ...t] : typeof t == "function" ? o = (...a) => {
    const s = t(...a);
    return _t(s) ? J({}, n, s) : n;
  } : o = J({}, n, t), J({}, i, {
    sx: o
  });
}
const Tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jr,
  extendSxProp: ls,
  unstable_createStyleFunctionSx: kl,
  unstable_defaultSxConfig: yn
}, Symbol.toStringTag, { value: "Module" })), Sc = (e) => e, Ov = () => {
  let e = Sc;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Sc;
    }
  };
}, fs = Ov();
function Pl(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Pl(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function je() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Pl(e)) && (n && (n += " "), n += t);
  return n;
}
const Iv = ["className", "component"];
function kv(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: i
  } = e, o = as("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(jr);
  return /* @__PURE__ */ K.forwardRef(function(u, c) {
    const d = Rl(r), y = ls(u), {
      className: v,
      component: w = "div"
    } = y, _ = Pe(y, Iv);
    return /* @__PURE__ */ Z(o, J({
      as: w,
      ref: c,
      className: je(v, i ? i(n) : n),
      theme: t && d[t] || d
    }, _));
  });
}
const Dv = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function qt(e, t, r = "Mui") {
  const n = Dv[t];
  return n ? `${r}-${n}` : `${fs.generate(e)}-${t}`;
}
function ur(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = qt(e, i, r);
  }), n;
}
var Dn = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ac;
function Rv() {
  if (Ac) return be;
  Ac = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.for("react.client.reference");
  function _(l) {
    if (typeof l == "object" && l !== null) {
      var A = l.$$typeof;
      switch (A) {
        case e:
          switch (l = l.type, l) {
            case r:
            case i:
            case n:
            case u:
            case c:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case s:
                case y:
                case d:
                  return l;
                case o:
                  return l;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return be.ContextConsumer = o, be.ContextProvider = a, be.Element = e, be.ForwardRef = s, be.Fragment = r, be.Lazy = y, be.Memo = d, be.Portal = t, be.Profiler = i, be.StrictMode = n, be.Suspense = u, be.SuspenseList = c, be.isContextConsumer = function(l) {
    return _(l) === o;
  }, be.isContextProvider = function(l) {
    return _(l) === a;
  }, be.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, be.isForwardRef = function(l) {
    return _(l) === s;
  }, be.isFragment = function(l) {
    return _(l) === r;
  }, be.isLazy = function(l) {
    return _(l) === y;
  }, be.isMemo = function(l) {
    return _(l) === d;
  }, be.isPortal = function(l) {
    return _(l) === t;
  }, be.isProfiler = function(l) {
    return _(l) === i;
  }, be.isStrictMode = function(l) {
    return _(l) === n;
  }, be.isSuspense = function(l) {
    return _(l) === u;
  }, be.isSuspenseList = function(l) {
    return _(l) === c;
  }, be.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === i || l === n || l === u || l === c || l === v || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === d || l.$$typeof === a || l.$$typeof === o || l.$$typeof === s || l.$$typeof === w || l.getModuleId !== void 0);
  }, be.typeOf = _, be;
}
var Ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function Pv() {
  return Tc || (Tc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var A = l.$$typeof;
        switch (A) {
          case t:
            switch (l = l.type, l) {
              case n:
              case o:
              case i:
              case c:
              case d:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case s:
                  case u:
                  case v:
                  case y:
                    return l;
                  case a:
                    return l;
                  default:
                    return A;
                }
            }
          case r:
            return A;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), _ = Symbol.for("react.client.reference");
    Ee.ContextConsumer = a, Ee.ContextProvider = s, Ee.Element = t, Ee.ForwardRef = u, Ee.Fragment = n, Ee.Lazy = v, Ee.Memo = y, Ee.Portal = r, Ee.Profiler = o, Ee.StrictMode = i, Ee.Suspense = c, Ee.SuspenseList = d, Ee.isContextConsumer = function(l) {
      return e(l) === a;
    }, Ee.isContextProvider = function(l) {
      return e(l) === s;
    }, Ee.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, Ee.isForwardRef = function(l) {
      return e(l) === u;
    }, Ee.isFragment = function(l) {
      return e(l) === n;
    }, Ee.isLazy = function(l) {
      return e(l) === v;
    }, Ee.isMemo = function(l) {
      return e(l) === y;
    }, Ee.isPortal = function(l) {
      return e(l) === r;
    }, Ee.isProfiler = function(l) {
      return e(l) === o;
    }, Ee.isStrictMode = function(l) {
      return e(l) === i;
    }, Ee.isSuspense = function(l) {
      return e(l) === c;
    }, Ee.isSuspenseList = function(l) {
      return e(l) === d;
    }, Ee.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === o || l === i || l === c || l === d || l === w || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === y || l.$$typeof === s || l.$$typeof === a || l.$$typeof === u || l.$$typeof === _ || l.getModuleId !== void 0);
    }, Ee.typeOf = e;
  }()), Ee;
}
var Oc;
function Bv() {
  return Oc || (Oc = 1, process.env.NODE_ENV === "production" ? Dn.exports = /* @__PURE__ */ Rv() : Dn.exports = /* @__PURE__ */ Pv()), Dn.exports;
}
var Ic = /* @__PURE__ */ Bv();
const Fv = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Bl(e) {
  const t = `${e}`.match(Fv);
  return t && t[1] || "";
}
function Fl(e, t = "") {
  return e.displayName || e.name || Bl(e) || t;
}
function kc(e, t, r) {
  const n = Fl(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Nl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Fl(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ic.ForwardRef:
          return kc(e, e.render, "ForwardRef");
        case Ic.Memo:
          return kc(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Nv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nl,
  getFunctionName: Bl
}, Symbol.toStringTag, { value: "Module" })), Mv = ["ownerState"], $v = ["variants"], Lv = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function zv(e) {
  return Object.keys(e).length === 0;
}
function jv(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function zo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Uv = bn(), Dc = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Rn({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return zv(t) ? e : t[r] || t;
}
function Hv(e) {
  return e ? (t, r) => r[e] : null;
}
function qn(e, t) {
  let {
    ownerState: r
  } = t, n = Pe(t, Mv);
  const i = typeof e == "function" ? e(J({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(i))
    return i.flatMap((o) => qn(o, J({
      ownerState: r
    }, n)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: o = []
    } = i;
    let s = Pe(i, $v);
    return o.forEach((u) => {
      let c = !0;
      typeof u.props == "function" ? c = u.props(J({
        ownerState: r
      }, n, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && n[d] !== u.props[d] && (c = !1);
      }), c && (Array.isArray(s) || (s = [s]), s.push(typeof u.style == "function" ? u.style(J({
        ownerState: r
      }, n, r)) : u.style));
    }), s;
  }
  return i;
}
function Wv(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Uv,
    rootShouldForwardProp: n = zo,
    slotShouldForwardProp: i = zo
  } = e, o = (a) => jr(J({}, a, {
    theme: Rn(J({}, a, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return o.__mui_systemSx = !0, (a, s = {}) => {
    Sl(a, (f) => f.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: d,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Hv(Dc(c))
    } = s, w = Pe(s, Lv), _ = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), l = y || !1;
    let A;
    process.env.NODE_ENV !== "production" && u && (A = `${u}-${Dc(c || "Root")}`);
    let k = zo;
    c === "Root" || c === "root" ? k = n : c ? k = i : jv(a) && (k = void 0);
    const T = as(a, J({
      shouldForwardProp: k,
      label: A
    }, w)), C = (f) => typeof f == "function" && f.__emotion_real !== f || _t(f) ? (S) => qn(f, J({}, S, {
      theme: Rn({
        theme: S.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : f, E = (f, ...S) => {
      let p = C(f);
      const b = S ? S.map(C) : [];
      u && v && b.push((O) => {
        const I = Rn(J({}, O, {
          defaultTheme: r,
          themeId: t
        }));
        if (!I.components || !I.components[u] || !I.components[u].styleOverrides)
          return null;
        const D = I.components[u].styleOverrides, L = {};
        return Object.entries(D).forEach(([z, h]) => {
          L[z] = qn(h, J({}, O, {
            theme: I
          }));
        }), v(O, L);
      }), u && !_ && b.push((O) => {
        var I;
        const D = Rn(J({}, O, {
          defaultTheme: r,
          themeId: t
        })), L = D == null || (I = D.components) == null || (I = I[u]) == null ? void 0 : I.variants;
        return qn({
          variants: L
        }, J({}, O, {
          theme: D
        }));
      }), l || b.push(o);
      const m = b.length - S.length;
      if (Array.isArray(f) && m > 0) {
        const O = new Array(m).fill("");
        p = [...f, ...O], p.raw = [...f.raw, ...O];
      }
      const g = T(p, ...b);
      if (process.env.NODE_ENV !== "production") {
        let O;
        u && (O = `${u}${Te(c || "")}`), O === void 0 && (O = `Styled(${Nl(a)})`), g.displayName = O;
      }
      return a.muiName && (g.muiName = a.muiName), g;
    };
    return T.withConfig && (E.withConfig = T.withConfig), E;
  };
}
const qv = Wv();
function fn(e, t) {
  const r = J({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = J({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[n] || {}, o = t[n];
      r[n] = {}, !o || !Object.keys(o) ? r[n] = i : !i || !Object.keys(i) ? r[n] = o : (r[n] = J({}, o), Object.keys(i).forEach((a) => {
        r[n][a] = fn(i[a], o[a]);
      }));
    } else r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function Ml(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : fn(t.components[r].defaultProps, n);
}
function Vv({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let i = Rl(r);
  return n && (i = i[n] || i), Ml({
    theme: i,
    name: t,
    props: e
  });
}
const ds = typeof window < "u" ? K.useLayoutEffect : K.useEffect;
function Gv(e, t, r, n, i) {
  const [o, a] = K.useState(() => i && r ? r(e).matches : n ? n(e).matches : t);
  return ds(() => {
    let s = !0;
    if (!r)
      return;
    const u = r(e), c = () => {
      s && a(u.matches);
    };
    return c(), u.addListener(c), () => {
      s = !1, u.removeListener(c);
    };
  }, [e, r]), o;
}
const $l = K.useSyncExternalStore;
function Yv(e, t, r, n, i) {
  const o = K.useCallback(() => t, [t]), a = K.useMemo(() => {
    if (i && r)
      return () => r(e).matches;
    if (n !== null) {
      const {
        matches: d
      } = n(e);
      return () => d;
    }
    return o;
  }, [o, e, n, i, r]), [s, u] = K.useMemo(() => {
    if (r === null)
      return [o, () => () => {
      }];
    const d = r(e);
    return [() => d.matches, (y) => (d.addListener(y), () => {
      d.removeListener(y);
    })];
  }, [o, r, e]);
  return $l(u, s, a);
}
function jo(e, t = {}) {
  const r = us(), n = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: i = !1,
    matchMedia: o = n ? window.matchMedia : null,
    ssrMatchMedia: a = null,
    noSsr: s = !1
  } = Ml({
    name: "MuiUseMediaQuery",
    props: t,
    theme: r
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && r === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let u = typeof e == "function" ? e(r) : e;
  u = u.replace(/^@media( ?)/m, "");
  const d = ($l !== void 0 ? Yv : Gv)(u, i, o, a, s);
  return process.env.NODE_ENV !== "production" && K.useDebugValue({
    query: u,
    match: d
  }), d;
}
function Ll(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ll
}, Symbol.toStringTag, { value: "Module" }));
function Xv(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ll(e, t, r);
}
function Jv(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function zl(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return zl(Jv(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ir(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ir(10, i));
  } else
    n = n.split(",");
  return n = n.map((o) => parseFloat(o)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
function Qv(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Zv(e, t) {
  return e = zl(e), t = Xv(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qv(e);
}
function ex(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function tx(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function rx(e, t, r, n, i) {
  const o = e[t], a = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof o == "function" && !tx(o) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const nx = ex(R.elementType, rx), ix = "exact-prop: ​";
function jl(e) {
  return process.env.NODE_ENV === "production" ? e : J({}, e, {
    [ix]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
const ox = R.oneOfType([R.func, R.object]);
function ax(...e) {
  return e.reduce((t, r) => r == null ? t : function(...i) {
    t.apply(this, i), r.apply(this, i);
  }, () => {
  });
}
function sx(e, t = 166) {
  let r;
  function n(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(r), r = setTimeout(o, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function cx(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, i, o, a) => {
    const s = i || "<<anonymous>>", u = a || n;
    return typeof r[n] < "u" ? new Error(`The ${o} \`${u}\` of \`${s}\` is deprecated. ${t}`) : null;
  };
}
function ux(e, t) {
  var r, n;
  return /* @__PURE__ */ K.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function Ul(e) {
  return e && e.ownerDocument || document;
}
function lx(e) {
  return Ul(e).defaultView || window;
}
function fx(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? J({}, t.propTypes) : null;
  return (i) => (o, a, s, u, c, ...d) => {
    const y = c || a, v = r == null ? void 0 : r[y];
    if (v) {
      const w = v(o, a, s, u, c, ...d);
      if (w)
        return w;
    }
    return typeof o[a] < "u" && !o[i] ? new Error(`The prop \`${y}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function Hl(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Rc = 0;
function dx(e) {
  const [t, r] = K.useState(e), n = e || t;
  return K.useEffect(() => {
    t == null && (Rc += 1, r(`mui-${Rc}`));
  }, [t]), n;
}
const Pc = K.useId;
function px(e) {
  if (Pc !== void 0) {
    const t = Pc();
    return e ?? t;
  }
  return dx(e);
}
function hx(e, t, r, n, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const o = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${o}\` is not supported. Please remove it.`) : null;
}
function vx({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: i
  } = K.useRef(e !== void 0), [o, a] = K.useState(t), s = i ? e : o;
  if (process.env.NODE_ENV !== "production") {
    K.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${n} state of ${r} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: c
    } = K.useRef(t);
    K.useEffect(() => {
      !i && !Object.is(c, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const u = K.useCallback((c) => {
    i || a(c);
  }, []);
  return [s, u];
}
function en(e) {
  const t = K.useRef(e);
  return ds(() => {
    t.current = e;
  }), K.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Ia(...e) {
  return K.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Hl(r, t);
    });
  }, e);
}
const Bc = {};
function xx(e, t) {
  const r = K.useRef(Bc);
  return r.current === Bc && (r.current = e(t)), r;
}
const gx = [];
function mx(e) {
  K.useEffect(e, gx);
}
class xo {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new xo();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function yx() {
  const e = xx(xo.create).current;
  return mx(e.disposeEffect), e;
}
let go = !0, ka = !1;
const bx = new xo(), Ex = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function _x(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Ex[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function wx(e) {
  e.metaKey || e.altKey || e.ctrlKey || (go = !0);
}
function Uo() {
  go = !1;
}
function Cx() {
  this.visibilityState === "hidden" && ka && (go = !0);
}
function Sx(e) {
  e.addEventListener("keydown", wx, !0), e.addEventListener("mousedown", Uo, !0), e.addEventListener("pointerdown", Uo, !0), e.addEventListener("touchstart", Uo, !0), e.addEventListener("visibilitychange", Cx, !0);
}
function Ax(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return go || _x(t);
}
function Wl() {
  const e = K.useCallback((i) => {
    i != null && Sx(i.ownerDocument);
  }, []), t = K.useRef(!1);
  function r() {
    return t.current ? (ka = !0, bx.start(100, () => {
      ka = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(i) {
    return Ax(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function Ur(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      n[i] = e[i].reduce((o, a) => {
        if (a) {
          const s = t(a);
          s !== "" && o.push(s), r && r[a] && o.push(r[a]);
        }
        return o;
      }, []).join(" ");
    }
  ), n;
}
const ps = /* @__PURE__ */ K.createContext(null);
process.env.NODE_ENV !== "production" && (ps.displayName = "ThemeContext");
function ql() {
  const e = K.useContext(ps);
  return process.env.NODE_ENV !== "production" && K.useDebugValue(e), e;
}
const Tx = typeof Symbol == "function" && Symbol.for, Ox = Tx ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ix(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return J({}, e, t);
}
function Ui(e) {
  const {
    children: t,
    theme: r
  } = e, n = ql();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = K.useMemo(() => {
    const o = n === null ? r : Ix(n, r);
    return o != null && (o[Ox] = n !== null), o;
  }, [r, n]);
  return /* @__PURE__ */ Z(ps.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Ui.propTypes = {
  /**
   * Your component tree.
   */
  children: R.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: R.oneOfType([R.object, R.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Ui.propTypes = jl(Ui.propTypes));
const kx = ["value"], Dx = /* @__PURE__ */ K.createContext();
function Vl(e) {
  let {
    value: t
  } = e, r = Pe(e, kx);
  return /* @__PURE__ */ Z(Dx.Provider, J({
    value: t ?? !0
  }, r));
}
process.env.NODE_ENV !== "production" && (Vl.propTypes = {
  children: R.node,
  value: R.bool
});
const Gl = /* @__PURE__ */ K.createContext(void 0);
function Yl({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ Z(Gl.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: R.node,
  /**
   * @ignore
   */
  value: R.object
});
function Rx(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const i = t.components[r];
  return i.defaultProps ? fn(i.defaultProps, n) : !i.styleOverrides && !i.variants ? fn(i, n) : n;
}
function Px({
  props: e,
  name: t
}) {
  const r = K.useContext(Gl);
  return Rx({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Fc = {};
function Nc(e, t, r, n = !1) {
  return K.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof r == "function") {
      const o = r(i), a = e ? J({}, t, {
        [e]: o
      }) : o;
      return n ? () => a : a;
    }
    return e ? J({}, t, {
      [e]: r
    }) : J({}, t, r);
  }, [e, t, r, n]);
}
function Hi(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, i = us(Fc), o = ql() || Fc;
  process.env.NODE_ENV !== "production" && (i === null && typeof r == "function" || n && i && !i[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Nc(n, i, r), s = Nc(n, o, r, !0), u = a.direction === "rtl";
  return /* @__PURE__ */ Z(Ui, {
    theme: s,
    children: /* @__PURE__ */ Z(Lr.Provider, {
      value: a,
      children: /* @__PURE__ */ Z(Vl, {
        value: u,
        children: /* @__PURE__ */ Z(Yl, {
          value: a == null ? void 0 : a.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: R.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: R.oneOfType([R.func, R.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: R.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Hi.propTypes = jl(Hi.propTypes));
const Bx = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], Fx = bn(), Nx = qv("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`maxWidth${Te(String(r.maxWidth))}`], r.fixed && t.fixed, r.disableGutters && t.disableGutters];
  }
}), Mx = (e) => Vv({
  props: e,
  name: "MuiContainer",
  defaultTheme: Fx
}), $x = (e, t) => {
  const r = (u) => qt(t, u), {
    classes: n,
    fixed: i,
    disableGutters: o,
    maxWidth: a
  } = e, s = {
    root: ["root", a && `maxWidth${Te(String(a))}`, i && "fixed", o && "disableGutters"]
  };
  return Ur(s, r, n);
};
function Lx(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Nx,
    useThemeProps: r = Mx,
    componentName: n = "MuiContainer"
  } = e, i = t(({
    theme: a,
    ownerState: s
  }) => J({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !s.disableGutters && {
    paddingLeft: a.spacing(2),
    paddingRight: a.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("sm")]: {
      paddingLeft: a.spacing(3),
      paddingRight: a.spacing(3)
    }
  }), ({
    theme: a,
    ownerState: s
  }) => s.fixed && Object.keys(a.breakpoints.values).reduce((u, c) => {
    const d = c, y = a.breakpoints.values[d];
    return y !== 0 && (u[a.breakpoints.up(d)] = {
      maxWidth: `${y}${a.breakpoints.unit}`
    }), u;
  }, {}), ({
    theme: a,
    ownerState: s
  }) => J({}, s.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(a.breakpoints.values.xs, 444)
    }
  }, s.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  s.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up(s.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${a.breakpoints.values[s.maxWidth]}${a.breakpoints.unit}`
    }
  })), o = /* @__PURE__ */ K.forwardRef(function(s, u) {
    const c = r(s), {
      className: d,
      component: y = "div",
      disableGutters: v = !1,
      fixed: w = !1,
      maxWidth: _ = "lg"
    } = c, l = Pe(c, Bx), A = J({}, c, {
      component: y,
      disableGutters: v,
      fixed: w,
      maxWidth: _
    }), k = $x(A, n);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ Z(i, J({
        as: y,
        ownerState: A,
        className: je(k.root, d),
        ref: u
      }, l))
    );
  });
  return process.env.NODE_ENV !== "production" && (o.propTypes = {
    children: R.node,
    classes: R.object,
    className: R.string,
    component: R.elementType,
    disableGutters: R.bool,
    fixed: R.bool,
    maxWidth: R.oneOfType([R.oneOf(["xs", "sm", "md", "lg", "xl", !1]), R.string]),
    sx: R.oneOfType([R.arrayOf(R.oneOfType([R.func, R.object, R.bool])), R.func, R.object])
  }), o;
}
function zx(e, t) {
  return J({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var Ie = {}, Ho = { exports: {} }, Mc;
function mo() {
  return Mc || (Mc = 1, function(e) {
    function t(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ho)), Ho.exports;
}
const jx = /* @__PURE__ */ ct(yp), Ux = /* @__PURE__ */ ct(Kv);
var $c;
function Hx() {
  if ($c) return Ie;
  $c = 1;
  var e = mo();
  Object.defineProperty(Ie, "__esModule", {
    value: !0
  }), Ie.alpha = _, Ie.blend = S, Ie.colorChannel = void 0, Ie.darken = A, Ie.decomposeColor = a, Ie.emphasize = E, Ie.getContrastRatio = w, Ie.getLuminance = v, Ie.hexToRgb = i, Ie.hslToRgb = y, Ie.lighten = T, Ie.private_safeAlpha = l, Ie.private_safeColorChannel = void 0, Ie.private_safeDarken = k, Ie.private_safeEmphasize = f, Ie.private_safeLighten = C, Ie.recomposeColor = c, Ie.rgbToHex = d;
  var t = e(jx), r = e(Ux);
  function n(p, b = 0, m = 1) {
    return process.env.NODE_ENV !== "production" && (p < b || p > m) && console.error(`MUI: The value provided ${p} is out of range [${b}, ${m}].`), (0, r.default)(p, b, m);
  }
  function i(p) {
    p = p.slice(1);
    const b = new RegExp(`.{1,${p.length >= 6 ? 2 : 1}}`, "g");
    let m = p.match(b);
    return m && m[0].length === 1 && (m = m.map((g) => g + g)), m ? `rgb${m.length === 4 ? "a" : ""}(${m.map((g, O) => O < 3 ? parseInt(g, 16) : Math.round(parseInt(g, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function o(p) {
    const b = p.toString(16);
    return b.length === 1 ? `0${b}` : b;
  }
  function a(p) {
    if (p.type)
      return p;
    if (p.charAt(0) === "#")
      return a(i(p));
    const b = p.indexOf("("), m = p.substring(0, b);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(m) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${p}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, t.default)(9, p));
    let g = p.substring(b + 1, p.length - 1), O;
    if (m === "color") {
      if (g = g.split(" "), O = g.shift(), g.length === 4 && g[3].charAt(0) === "/" && (g[3] = g[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(O) === -1)
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${O}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, t.default)(10, O));
    } else
      g = g.split(",");
    return g = g.map((I) => parseFloat(I)), {
      type: m,
      values: g,
      colorSpace: O
    };
  }
  const s = (p) => {
    const b = a(p);
    return b.values.slice(0, 3).map((m, g) => b.type.indexOf("hsl") !== -1 && g !== 0 ? `${m}%` : m).join(" ");
  };
  Ie.colorChannel = s;
  const u = (p, b) => {
    try {
      return s(p);
    } catch {
      return b && process.env.NODE_ENV !== "production" && console.warn(b), p;
    }
  };
  Ie.private_safeColorChannel = u;
  function c(p) {
    const {
      type: b,
      colorSpace: m
    } = p;
    let {
      values: g
    } = p;
    return b.indexOf("rgb") !== -1 ? g = g.map((O, I) => I < 3 ? parseInt(O, 10) : O) : b.indexOf("hsl") !== -1 && (g[1] = `${g[1]}%`, g[2] = `${g[2]}%`), b.indexOf("color") !== -1 ? g = `${m} ${g.join(" ")}` : g = `${g.join(", ")}`, `${b}(${g})`;
  }
  function d(p) {
    if (p.indexOf("#") === 0)
      return p;
    const {
      values: b
    } = a(p);
    return `#${b.map((m, g) => o(g === 3 ? Math.round(255 * m) : m)).join("")}`;
  }
  function y(p) {
    p = a(p);
    const {
      values: b
    } = p, m = b[0], g = b[1] / 100, O = b[2] / 100, I = g * Math.min(O, 1 - O), D = (h, Y = (h + m / 30) % 12) => O - I * Math.max(Math.min(Y - 3, 9 - Y, 1), -1);
    let L = "rgb";
    const z = [Math.round(D(0) * 255), Math.round(D(8) * 255), Math.round(D(4) * 255)];
    return p.type === "hsla" && (L += "a", z.push(b[3])), c({
      type: L,
      values: z
    });
  }
  function v(p) {
    p = a(p);
    let b = p.type === "hsl" || p.type === "hsla" ? a(y(p)).values : p.values;
    return b = b.map((m) => (p.type !== "color" && (m /= 255), m <= 0.03928 ? m / 12.92 : ((m + 0.055) / 1.055) ** 2.4)), Number((0.2126 * b[0] + 0.7152 * b[1] + 0.0722 * b[2]).toFixed(3));
  }
  function w(p, b) {
    const m = v(p), g = v(b);
    return (Math.max(m, g) + 0.05) / (Math.min(m, g) + 0.05);
  }
  function _(p, b) {
    return p = a(p), b = n(b), (p.type === "rgb" || p.type === "hsl") && (p.type += "a"), p.type === "color" ? p.values[3] = `/${b}` : p.values[3] = b, c(p);
  }
  function l(p, b, m) {
    try {
      return _(p, b);
    } catch {
      return m && process.env.NODE_ENV !== "production" && console.warn(m), p;
    }
  }
  function A(p, b) {
    if (p = a(p), b = n(b), p.type.indexOf("hsl") !== -1)
      p.values[2] *= 1 - b;
    else if (p.type.indexOf("rgb") !== -1 || p.type.indexOf("color") !== -1)
      for (let m = 0; m < 3; m += 1)
        p.values[m] *= 1 - b;
    return c(p);
  }
  function k(p, b, m) {
    try {
      return A(p, b);
    } catch {
      return m && process.env.NODE_ENV !== "production" && console.warn(m), p;
    }
  }
  function T(p, b) {
    if (p = a(p), b = n(b), p.type.indexOf("hsl") !== -1)
      p.values[2] += (100 - p.values[2]) * b;
    else if (p.type.indexOf("rgb") !== -1)
      for (let m = 0; m < 3; m += 1)
        p.values[m] += (255 - p.values[m]) * b;
    else if (p.type.indexOf("color") !== -1)
      for (let m = 0; m < 3; m += 1)
        p.values[m] += (1 - p.values[m]) * b;
    return c(p);
  }
  function C(p, b, m) {
    try {
      return T(p, b);
    } catch {
      return m && process.env.NODE_ENV !== "production" && console.warn(m), p;
    }
  }
  function E(p, b = 0.15) {
    return v(p) > 0.5 ? A(p, b) : T(p, b);
  }
  function f(p, b, m) {
    try {
      return E(p, b);
    } catch {
      return m && process.env.NODE_ENV !== "production" && console.warn(m), p;
    }
  }
  function S(p, b, m, g = 1) {
    const O = (z, h) => Math.round((z ** (1 / g) * (1 - m) + h ** (1 / g) * m) ** g), I = a(p), D = a(b), L = [O(I.values[0], D.values[0]), O(I.values[1], D.values[1]), O(I.values[2], D.values[2])];
    return c({
      type: "rgb",
      values: L
    });
  }
  return Ie;
}
var $t = /* @__PURE__ */ Hx();
const Wx = ["mode", "contrastThreshold", "tonalOffset"], Lc = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: sn.white,
    default: sn.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Wo = {
  text: {
    primary: sn.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: sn.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function zc(e, t, r, n) {
  const i = n.light || n, o = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = $t.lighten(e.main, i) : t === "dark" && (e.dark = $t.darken(e.main, o)));
}
function qx(e = "light") {
  return e === "dark" ? {
    main: gr[200],
    light: gr[50],
    dark: gr[400]
  } : {
    main: gr[700],
    light: gr[400],
    dark: gr[800]
  };
}
function Vx(e = "light") {
  return e === "dark" ? {
    main: xr[200],
    light: xr[50],
    dark: xr[400]
  } : {
    main: xr[500],
    light: xr[300],
    dark: xr[700]
  };
}
function Gx(e = "light") {
  return e === "dark" ? {
    main: vr[500],
    light: vr[300],
    dark: vr[700]
  } : {
    main: vr[700],
    light: vr[400],
    dark: vr[800]
  };
}
function Yx(e = "light") {
  return e === "dark" ? {
    main: mr[400],
    light: mr[300],
    dark: mr[700]
  } : {
    main: mr[700],
    light: mr[500],
    dark: mr[900]
  };
}
function Kx(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: yr[800],
    light: yr[500],
    dark: yr[900]
  };
}
function Xx(e = "light") {
  return e === "dark" ? {
    main: Gr[400],
    light: Gr[300],
    dark: Gr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Gr[500],
    dark: Gr[900]
  };
}
function Jx(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, i = Pe(e, Wx), o = e.primary || qx(t), a = e.secondary || Vx(t), s = e.error || Gx(t), u = e.info || Yx(t), c = e.success || Kx(t), d = e.warning || Xx(t);
  function y(l) {
    const A = $t.getContrastRatio(l, Wo.text.primary) >= r ? Wo.text.primary : Lc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const k = $t.getContrastRatio(l, A);
      k < 3 && console.error([`MUI: The contrast ratio of ${k}:1 for ${A} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return A;
  }
  const v = ({
    color: l,
    name: A,
    mainShade: k = 500,
    lightShade: T = 300,
    darkShade: C = 700
  }) => {
    if (l = J({}, l), !l.main && l[k] && (l.main = l[k]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${A ? ` (${A})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${k}\` property.` : ir(11, A ? ` (${A})` : "", k));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${A ? ` (${A})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ir(12, A ? ` (${A})` : "", JSON.stringify(l.main)));
    return zc(l, "light", T, n), zc(l, "dark", C, n), l.contrastText || (l.contrastText = y(l.main)), l;
  }, w = {
    dark: Wo,
    light: Lc
  };
  return process.env.NODE_ENV !== "production" && (w[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), vt(J({
    // A collection of common colors.
    common: J({}, sn),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: v({
      color: o,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: v({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: v({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: v({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: v({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: v({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: mp,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: v,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, w[t]), i);
}
const Qx = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Zx(e) {
  return Math.round(e * 1e5) / 1e5;
}
const jc = {
  textTransform: "uppercase"
}, Uc = '"Roboto", "Helvetica", "Arial", sans-serif';
function eg(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Uc,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: y
  } = r, v = Pe(r, Qx);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const w = i / 14, _ = y || ((k) => `${k / c * w}rem`), l = (k, T, C, E, f) => J({
    fontFamily: n,
    fontWeight: k,
    fontSize: _(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, n === Uc ? {
    letterSpacing: `${Zx(E / T)}em`
  } : {}, f, d), A = {
    h1: l(o, 96, 1.167, -1.5),
    h2: l(o, 60, 1.2, -0.5),
    h3: l(a, 48, 1.167, 0),
    h4: l(a, 34, 1.235, 0.25),
    h5: l(a, 24, 1.334, 0),
    h6: l(s, 20, 1.6, 0.15),
    subtitle1: l(a, 16, 1.75, 0.15),
    subtitle2: l(s, 14, 1.57, 0.1),
    body1: l(a, 16, 1.5, 0.15),
    body2: l(a, 14, 1.43, 0.15),
    button: l(s, 14, 1.75, 0.4, jc),
    caption: l(a, 12, 1.66, 0.4),
    overline: l(a, 12, 2.66, 1, jc),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return vt(J({
    htmlFontSize: c,
    pxToRem: _,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: u
  }, A), v, {
    clone: !1
    // No need to clone deep
  });
}
const tg = 0.2, rg = 0.14, ng = 0.12;
function Oe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${tg})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${rg})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ng})`].join(",");
}
const ig = ["none", Oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], og = ["duration", "easing", "delay"], ag = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, sg = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Hc(e) {
  return `${Math.round(e)}ms`;
}
function cg(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function ug(e) {
  const t = J({}, ag, e.easing), r = J({}, sg, e.duration);
  return J({
    getAutoHeightDuration: cg,
    create: (i = ["all"], o = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: u = 0
      } = o, c = Pe(o, og);
      if (process.env.NODE_ENV !== "production") {
        const d = (v) => typeof v == "string", y = (v) => !isNaN(parseFloat(v));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !y(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(s) || console.error('MUI: Argument "easing" must be a string.'), !y(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof o != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Hc(a)} ${s} ${typeof u == "string" ? u : Hc(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const lg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, fg = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function hs(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: i = {},
    typography: o = {}
  } = e, a = Pe(e, fg);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ir(18));
  const s = Jx(n), u = bn(e);
  let c = vt(u, {
    mixins: zx(u.breakpoints, r),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ig.slice(),
    typography: eg(s, o),
    transitions: ug(i),
    zIndex: J({}, lg)
  });
  if (c = vt(c, a), c = t.reduce((d, y) => vt(d, y), c), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (v, w) => {
      let _;
      for (_ in v) {
        const l = v[_];
        if (d.indexOf(_) !== -1 && Object.keys(l).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const A = qt("", _);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${_}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${A}' syntax:`, JSON.stringify({
              root: {
                [`&.${A}`]: l
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[_] = {};
        }
      }
    };
    Object.keys(c.components).forEach((v) => {
      const w = c.components[v].styleOverrides;
      w && v.indexOf("Mui") === 0 && y(w, v);
    });
  }
  return c.unstable_sxConfig = J({}, yn, a == null ? void 0 : a.unstable_sxConfig), c.unstable_sx = function(y) {
    return jr({
      sx: y,
      theme: this
    });
  }, c;
}
function dg(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function pg(e) {
  return parseFloat(e);
}
const hg = hs();
var Yt = {}, qo = { exports: {} }, Wc;
function vg() {
  return Wc || (Wc = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          for (var o in i) ({}).hasOwnProperty.call(i, o) && (r[o] = i[o]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(qo)), qo.exports;
}
var Vo = { exports: {} }, qc;
function xg() {
  return qc || (qc = 1, function(e) {
    function t(r, n) {
      if (r == null) return {};
      var i = {};
      for (var o in r) if ({}.hasOwnProperty.call(r, o)) {
        if (n.indexOf(o) !== -1) continue;
        i[o] = r[o];
      }
      return i;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Vo)), Vo.exports;
}
const gg = /* @__PURE__ */ ct(Th), mg = /* @__PURE__ */ ct(Oh), yg = /* @__PURE__ */ ct(Bh), bg = /* @__PURE__ */ ct(Nv), Eg = /* @__PURE__ */ ct(_v), _g = /* @__PURE__ */ ct(Tv);
var Vc;
function wg() {
  if (Vc) return Yt;
  Vc = 1;
  var e = mo();
  Object.defineProperty(Yt, "__esModule", {
    value: !0
  }), Yt.default = S, Yt.shouldForwardProp = A, Yt.systemDefaultTheme = void 0;
  var t = e(vg()), r = e(xg()), n = w(gg), i = mg, o = e(yg), a = e(bg), s = e(Eg), u = e(_g);
  const c = ["ownerState"], d = ["variants"], y = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function v(p) {
    if (typeof WeakMap != "function") return null;
    var b = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (v = function(g) {
      return g ? m : b;
    })(p);
  }
  function w(p, b) {
    if (p && p.__esModule) return p;
    if (p === null || typeof p != "object" && typeof p != "function") return { default: p };
    var m = v(b);
    if (m && m.has(p)) return m.get(p);
    var g = { __proto__: null }, O = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var I in p) if (I !== "default" && Object.prototype.hasOwnProperty.call(p, I)) {
      var D = O ? Object.getOwnPropertyDescriptor(p, I) : null;
      D && (D.get || D.set) ? Object.defineProperty(g, I, D) : g[I] = p[I];
    }
    return g.default = p, m && m.set(p, g), g;
  }
  function _(p) {
    return Object.keys(p).length === 0;
  }
  function l(p) {
    return typeof p == "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    p.charCodeAt(0) > 96;
  }
  function A(p) {
    return p !== "ownerState" && p !== "theme" && p !== "sx" && p !== "as";
  }
  const k = Yt.systemDefaultTheme = (0, s.default)(), T = (p) => p && p.charAt(0).toLowerCase() + p.slice(1);
  function C({
    defaultTheme: p,
    theme: b,
    themeId: m
  }) {
    return _(b) ? p : b[m] || b;
  }
  function E(p) {
    return p ? (b, m) => m[p] : null;
  }
  function f(p, b) {
    let {
      ownerState: m
    } = b, g = (0, r.default)(b, c);
    const O = typeof p == "function" ? p((0, t.default)({
      ownerState: m
    }, g)) : p;
    if (Array.isArray(O))
      return O.flatMap((I) => f(I, (0, t.default)({
        ownerState: m
      }, g)));
    if (O && typeof O == "object" && Array.isArray(O.variants)) {
      const {
        variants: I = []
      } = O;
      let L = (0, r.default)(O, d);
      return I.forEach((z) => {
        let h = !0;
        typeof z.props == "function" ? h = z.props((0, t.default)({
          ownerState: m
        }, g, m)) : Object.keys(z.props).forEach((Y) => {
          (m == null ? void 0 : m[Y]) !== z.props[Y] && g[Y] !== z.props[Y] && (h = !1);
        }), h && (Array.isArray(L) || (L = [L]), L.push(typeof z.style == "function" ? z.style((0, t.default)({
          ownerState: m
        }, g, m)) : z.style));
      }), L;
    }
    return O;
  }
  function S(p = {}) {
    const {
      themeId: b,
      defaultTheme: m = k,
      rootShouldForwardProp: g = A,
      slotShouldForwardProp: O = A
    } = p, I = (D) => (0, u.default)((0, t.default)({}, D, {
      theme: C((0, t.default)({}, D, {
        defaultTheme: m,
        themeId: b
      }))
    }));
    return I.__mui_systemSx = !0, (D, L = {}) => {
      (0, n.internal_processStyles)(D, ($) => $.filter((V) => !(V != null && V.__mui_systemSx)));
      const {
        name: z,
        slot: h,
        skipVariantsResolver: Y,
        skipSx: U,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: W = E(T(h))
      } = L, N = (0, r.default)(L, y), P = Y !== void 0 ? Y : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        h && h !== "Root" && h !== "root" || !1
      ), M = U || !1;
      let F;
      process.env.NODE_ENV !== "production" && z && (F = `${z}-${T(h || "Root")}`);
      let x = A;
      h === "Root" || h === "root" ? x = g : h ? x = O : l(D) && (x = void 0);
      const B = (0, n.default)(D, (0, t.default)({
        shouldForwardProp: x,
        label: F
      }, N)), j = ($) => typeof $ == "function" && $.__emotion_real !== $ || (0, i.isPlainObject)($) ? (V) => f($, (0, t.default)({}, V, {
        theme: C({
          theme: V.theme,
          defaultTheme: m,
          themeId: b
        })
      })) : $, q = ($, ...V) => {
        let G = j($);
        const X = V ? V.map(j) : [];
        z && W && X.push((ee) => {
          const ie = C((0, t.default)({}, ee, {
            defaultTheme: m,
            themeId: b
          }));
          if (!ie.components || !ie.components[z] || !ie.components[z].styleOverrides)
            return null;
          const Ce = ie.components[z].styleOverrides, ue = {};
          return Object.entries(Ce).forEach(([ae, ce]) => {
            ue[ae] = f(ce, (0, t.default)({}, ee, {
              theme: ie
            }));
          }), W(ee, ue);
        }), z && !P && X.push((ee) => {
          var ie;
          const Ce = C((0, t.default)({}, ee, {
            defaultTheme: m,
            themeId: b
          })), ue = Ce == null || (ie = Ce.components) == null || (ie = ie[z]) == null ? void 0 : ie.variants;
          return f({
            variants: ue
          }, (0, t.default)({}, ee, {
            theme: Ce
          }));
        }), M || X.push(I);
        const H = X.length - V.length;
        if (Array.isArray($) && H > 0) {
          const ee = new Array(H).fill("");
          G = [...$, ...ee], G.raw = [...$.raw, ...ee];
        }
        const te = B(G, ...X);
        if (process.env.NODE_ENV !== "production") {
          let ee;
          z && (ee = `${z}${(0, o.default)(h || "")}`), ee === void 0 && (ee = `Styled(${(0, a.default)(D)})`), te.displayName = ee;
        }
        return D.muiName && (te.muiName = D.muiName), te;
      };
      return B.withConfig && (q.withConfig = B.withConfig), q;
    };
  }
  return Yt;
}
var Cg = /* @__PURE__ */ wg();
const Sg = /* @__PURE__ */ $r(Cg);
function Ag(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kl = (e) => Ag(e) && e !== "classes", yt = Sg({
  themeId: $i,
  defaultTheme: hg,
  rootShouldForwardProp: Kl
}), Tg = ["theme"];
function Xl(e) {
  let {
    theme: t
  } = e, r = Pe(e, Tg);
  const n = t[$i];
  return /* @__PURE__ */ Z(Hi, J({}, r, {
    themeId: n ? $i : void 0,
    theme: n || t
  }));
}
process.env.NODE_ENV !== "production" && (Xl.propTypes = {
  /**
   * Your component tree.
   */
  children: R.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: R.oneOfType([R.object, R.func]).isRequired
});
process.env.NODE_ENV !== "production" && (R.node, R.object.isRequired);
function lr(e) {
  return Px(e);
}
function Og(e) {
  return qt("MuiSvgIcon", e);
}
ur("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ig = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], kg = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${Te(t)}`, `fontSize${Te(r)}`]
  };
  return Ur(i, Og, n);
}, Dg = yt("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Te(r.color)}`], t[`fontSize${Te(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, i, o, a, s, u, c, d, y, v, w, _;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((o = e.typography) == null || (a = o.pxToRem) == null ? void 0 : a.call(o, 20)) || "1.25rem",
      medium: ((s = e.typography) == null || (u = s.pxToRem) == null ? void 0 : u.call(s, 24)) || "1.5rem",
      large: ((c = e.typography) == null || (d = c.pxToRem) == null ? void 0 : d.call(c, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (y = (v = (e.vars || e).palette) == null || (v = v[t.color]) == null ? void 0 : v.main) != null ? y : {
      action: (w = (e.vars || e).palette) == null || (w = w.action) == null ? void 0 : w.active,
      disabled: (_ = (e.vars || e).palette) == null || (_ = _.action) == null ? void 0 : _.disabled,
      inherit: void 0
    }[t.color]
  };
}), Wi = /* @__PURE__ */ K.forwardRef(function(t, r) {
  const n = lr({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: o,
    color: a = "inherit",
    component: s = "svg",
    fontSize: u = "medium",
    htmlColor: c,
    inheritViewBox: d = !1,
    titleAccess: y,
    viewBox: v = "0 0 24 24"
  } = n, w = Pe(n, Ig), _ = /* @__PURE__ */ K.isValidElement(i) && i.type === "svg", l = J({}, n, {
    color: a,
    component: s,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: v,
    hasSvgAsChild: _
  }), A = {};
  d || (A.viewBox = v);
  const k = kg(l);
  return /* @__PURE__ */ Ye(Dg, J({
    as: s,
    className: je(k.root, o),
    focusable: "false",
    color: c,
    "aria-hidden": y ? void 0 : !0,
    role: y ? "img" : void 0,
    ref: r
  }, A, w, _ && i.props, {
    ownerState: l,
    children: [_ ? i.props.children : i, y ? /* @__PURE__ */ Z("title", {
      children: y
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Wi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: R.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: R.object,
  /**
   * @ignore
   */
  className: R.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: R.oneOfType([R.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), R.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: R.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: R.oneOfType([R.oneOf(["inherit", "large", "medium", "small"]), R.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: R.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: R.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: R.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: R.oneOfType([R.arrayOf(R.oneOfType([R.func, R.object, R.bool])), R.func, R.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: R.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: R.string
});
Wi.muiName = "SvgIcon";
function Rg(e, t) {
  function r(n, i) {
    return /* @__PURE__ */ Z(Wi, J({
      "data-testid": `${t}Icon`,
      ref: i
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Wi.muiName, /* @__PURE__ */ K.memo(/* @__PURE__ */ K.forwardRef(r));
}
const Pg = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), fs.configure(e);
  }
}, Bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Te,
  createChainedFunction: ax,
  createSvgIcon: Rg,
  debounce: sx,
  deprecatedPropType: cx,
  isMuiElement: ux,
  ownerDocument: Ul,
  ownerWindow: lx,
  requirePropFactory: fx,
  setRef: Hl,
  unstable_ClassNameGenerator: Pg,
  unstable_useEnhancedEffect: ds,
  unstable_useId: px,
  unsupportedProp: hx,
  useControlled: vx,
  useEventCallback: en,
  useForkRef: Ia,
  useIsFocusVisible: Wl
}, Symbol.toStringTag, { value: "Module" }));
function Da(e, t) {
  return Da = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Da(e, t);
}
function Fg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Da(e, t);
}
const Gc = Ue.createContext(null);
function Ng(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vs(e, t) {
  var r = function(o) {
    return t && zn(o) ? t(o) : o;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && lp.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = r(i);
  }), n;
}
function Mg(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), i = [];
  for (var o in e)
    o in t ? i.length && (n[o] = i, i = []) : i.push(o);
  var a, s = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var c = n[u][a];
        s[n[u][a]] = r(c);
      }
    s[u] = r(u);
  }
  for (a = 0; a < i.length; a++)
    s[i[a]] = r(i[a]);
  return s;
}
function Zt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function $g(e, t) {
  return vs(e.children, function(r) {
    return jn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Zt(r, "appear", e),
      enter: Zt(r, "enter", e),
      exit: Zt(r, "exit", e)
    });
  });
}
function Lg(e, t, r) {
  var n = vs(e.children), i = Mg(t, n);
  return Object.keys(i).forEach(function(o) {
    var a = i[o];
    if (zn(a)) {
      var s = o in t, u = o in n, c = t[o], d = zn(c) && !c.props.in;
      u && (!s || d) ? i[o] = jn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Zt(a, "exit", e),
        enter: Zt(a, "enter", e)
      }) : !u && s && !d ? i[o] = jn(a, {
        in: !1
      }) : u && s && zn(c) && (i[o] = jn(a, {
        onExited: r.bind(null, a),
        in: c.props.in,
        exit: Zt(a, "exit", e),
        enter: Zt(a, "enter", e)
      }));
    }
  }), i;
}
var zg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, jg = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, xs = /* @__PURE__ */ function(e) {
  Fg(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var a = o.handleExited.bind(Ng(o));
    return o.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, o;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, o) {
    var a = o.children, s = o.handleExited, u = o.firstRender;
    return {
      children: u ? $g(i, s) : Lg(i, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(i, o) {
    var a = vs(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(o), this.mounted && this.setState(function(s) {
      var u = J({}, s.children);
      return delete u[i.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var i = this.props, o = i.component, a = i.childFactory, s = Pe(i, ["component", "childFactory"]), u = this.state.contextValue, c = zg(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, o === null ? /* @__PURE__ */ Ue.createElement(Gc.Provider, {
      value: u
    }, c) : /* @__PURE__ */ Ue.createElement(Gc.Provider, {
      value: u
    }, /* @__PURE__ */ Ue.createElement(o, s, c));
  }, t;
}(Ue.Component);
xs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: R.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: R.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: R.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: R.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: R.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: R.func
} : {};
xs.defaultProps = jg;
function Jl(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: i,
    rippleY: o,
    rippleSize: a,
    in: s,
    onExited: u,
    timeout: c
  } = e, [d, y] = K.useState(!1), v = je(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), w = {
    width: a,
    height: a,
    top: -(a / 2) + o,
    left: -(a / 2) + i
  }, _ = je(r.child, d && r.childLeaving, n && r.childPulsate);
  return !s && !d && y(!0), K.useEffect(() => {
    if (!s && u != null) {
      const l = setTimeout(u, c);
      return () => {
        clearTimeout(l);
      };
    }
  }, [u, s, c]), /* @__PURE__ */ Z("span", {
    className: v,
    style: w,
    children: /* @__PURE__ */ Z("span", {
      className: _
    })
  });
}
process.env.NODE_ENV !== "production" && (Jl.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: R.object.isRequired,
  className: R.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: R.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: R.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: R.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: R.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: R.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: R.number,
  /**
   * exit delay
   */
  timeout: R.number.isRequired
});
const nt = ur("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ug = ["center", "classes", "className"];
let yo = (e) => e, Yc, Kc, Xc, Jc;
const Ra = 550, Hg = 80, Wg = zr(Yc || (Yc = yo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), qg = zr(Kc || (Kc = yo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Vg = zr(Xc || (Xc = yo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Gg = yt("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Yg = yt(Jl, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Jc || (Jc = yo`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), nt.rippleVisible, Wg, Ra, ({
  theme: e
}) => e.transitions.easing.easeInOut, nt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, nt.child, nt.childLeaving, qg, Ra, ({
  theme: e
}) => e.transitions.easing.easeInOut, nt.childPulsate, Vg, ({
  theme: e
}) => e.transitions.easing.easeInOut), Ql = /* @__PURE__ */ K.forwardRef(function(t, r) {
  const n = lr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: o = {},
    className: a
  } = n, s = Pe(n, Ug), [u, c] = K.useState([]), d = K.useRef(0), y = K.useRef(null);
  K.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [u]);
  const v = K.useRef(!1), w = yx(), _ = K.useRef(null), l = K.useRef(null), A = K.useCallback((E) => {
    const {
      pulsate: f,
      rippleX: S,
      rippleY: p,
      rippleSize: b,
      cb: m
    } = E;
    c((g) => [...g, /* @__PURE__ */ Z(Yg, {
      classes: {
        ripple: je(o.ripple, nt.ripple),
        rippleVisible: je(o.rippleVisible, nt.rippleVisible),
        ripplePulsate: je(o.ripplePulsate, nt.ripplePulsate),
        child: je(o.child, nt.child),
        childLeaving: je(o.childLeaving, nt.childLeaving),
        childPulsate: je(o.childPulsate, nt.childPulsate)
      },
      timeout: Ra,
      pulsate: f,
      rippleX: S,
      rippleY: p,
      rippleSize: b
    }, d.current)]), d.current += 1, y.current = m;
  }, [o]), k = K.useCallback((E = {}, f = {}, S = () => {
  }) => {
    const {
      pulsate: p = !1,
      center: b = i || f.pulsate,
      fakeElement: m = !1
      // For test purposes
    } = f;
    if ((E == null ? void 0 : E.type) === "mousedown" && v.current) {
      v.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (v.current = !0);
    const g = m ? null : l.current, O = g ? g.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let I, D, L;
    if (b || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      I = Math.round(O.width / 2), D = Math.round(O.height / 2);
    else {
      const {
        clientX: z,
        clientY: h
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      I = Math.round(z - O.left), D = Math.round(h - O.top);
    }
    if (b)
      L = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const z = Math.max(Math.abs((g ? g.clientWidth : 0) - I), I) * 2 + 2, h = Math.max(Math.abs((g ? g.clientHeight : 0) - D), D) * 2 + 2;
      L = Math.sqrt(z ** 2 + h ** 2);
    }
    E != null && E.touches ? _.current === null && (_.current = () => {
      A({
        pulsate: p,
        rippleX: I,
        rippleY: D,
        rippleSize: L,
        cb: S
      });
    }, w.start(Hg, () => {
      _.current && (_.current(), _.current = null);
    })) : A({
      pulsate: p,
      rippleX: I,
      rippleY: D,
      rippleSize: L,
      cb: S
    });
  }, [i, A, w]), T = K.useCallback(() => {
    k({}, {
      pulsate: !0
    });
  }, [k]), C = K.useCallback((E, f) => {
    if (w.clear(), (E == null ? void 0 : E.type) === "touchend" && _.current) {
      _.current(), _.current = null, w.start(0, () => {
        C(E, f);
      });
      return;
    }
    _.current = null, c((S) => S.length > 0 ? S.slice(1) : S), y.current = f;
  }, [w]);
  return K.useImperativeHandle(r, () => ({
    pulsate: T,
    start: k,
    stop: C
  }), [T, k, C]), /* @__PURE__ */ Z(Gg, J({
    className: je(nt.root, o.root, a),
    ref: l
  }, s, {
    children: /* @__PURE__ */ Z(xs, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: R.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: R.object,
  /**
   * @ignore
   */
  className: R.string
});
function Kg(e) {
  return qt("MuiButtonBase", e);
}
const Xg = ur("MuiButtonBase", ["root", "disabled", "focusVisible"]), Jg = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Qg = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: i
  } = e, a = Ur({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Kg, i);
  return r && n && (a.root += ` ${n}`), a;
}, Zg = yt("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Xg.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Zl = /* @__PURE__ */ K.forwardRef(function(t, r) {
  const n = lr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: o = !1,
    children: a,
    className: s,
    component: u = "button",
    disabled: c = !1,
    disableRipple: d = !1,
    disableTouchRipple: y = !1,
    focusRipple: v = !1,
    LinkComponent: w = "a",
    onBlur: _,
    onClick: l,
    onContextMenu: A,
    onDragLeave: k,
    onFocus: T,
    onFocusVisible: C,
    onKeyDown: E,
    onKeyUp: f,
    onMouseDown: S,
    onMouseLeave: p,
    onMouseUp: b,
    onTouchEnd: m,
    onTouchMove: g,
    onTouchStart: O,
    tabIndex: I = 0,
    TouchRippleProps: D,
    touchRippleRef: L,
    type: z
  } = n, h = Pe(n, Jg), Y = K.useRef(null), U = K.useRef(null), W = Ia(U, L), {
    isFocusVisibleRef: N,
    onFocus: P,
    onBlur: M,
    ref: F
  } = Wl(), [x, B] = K.useState(!1);
  c && x && B(!1), K.useImperativeHandle(i, () => ({
    focusVisible: () => {
      B(!0), Y.current.focus();
    }
  }), []);
  const [j, q] = K.useState(!1);
  K.useEffect(() => {
    q(!0);
  }, []);
  const $ = j && !d && !c;
  K.useEffect(() => {
    x && v && !d && j && U.current.pulsate();
  }, [d, v, x, j]);
  function V(ne, Gt, Le = y) {
    return en((Ge) => (Gt && Gt(Ge), !Le && U.current && U.current[ne](Ge), !0));
  }
  const G = V("start", S), X = V("stop", A), H = V("stop", k), te = V("stop", b), ee = V("stop", (ne) => {
    x && ne.preventDefault(), p && p(ne);
  }), ie = V("start", O), Ce = V("stop", m), ue = V("stop", g), ae = V("stop", (ne) => {
    M(ne), N.current === !1 && B(!1), _ && _(ne);
  }, !1), ce = en((ne) => {
    Y.current || (Y.current = ne.currentTarget), P(ne), N.current === !0 && (B(!0), C && C(ne)), T && T(ne);
  }), Se = () => {
    const ne = Y.current;
    return u && u !== "button" && !(ne.tagName === "A" && ne.href);
  }, re = K.useRef(!1), le = en((ne) => {
    v && !re.current && x && U.current && ne.key === " " && (re.current = !0, U.current.stop(ne, () => {
      U.current.start(ne);
    })), ne.target === ne.currentTarget && Se() && ne.key === " " && ne.preventDefault(), E && E(ne), ne.target === ne.currentTarget && Se() && ne.key === "Enter" && !c && (ne.preventDefault(), l && l(ne));
  }), ye = en((ne) => {
    v && ne.key === " " && U.current && x && !ne.defaultPrevented && (re.current = !1, U.current.stop(ne, () => {
      U.current.pulsate(ne);
    })), f && f(ne), l && ne.target === ne.currentTarget && Se() && ne.key === " " && !ne.defaultPrevented && l(ne);
  });
  let _e = u;
  _e === "button" && (h.href || h.to) && (_e = w);
  const ke = {};
  _e === "button" ? (ke.type = z === void 0 ? "button" : z, ke.disabled = c) : (!h.href && !h.to && (ke.role = "button"), c && (ke["aria-disabled"] = c));
  const He = Ia(r, F, Y);
  process.env.NODE_ENV !== "production" && K.useEffect(() => {
    $ && !U.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [$]);
  const Qe = J({}, n, {
    centerRipple: o,
    component: u,
    disabled: c,
    disableRipple: d,
    disableTouchRipple: y,
    focusRipple: v,
    tabIndex: I,
    focusVisible: x
  }), hr = Qg(Qe);
  return /* @__PURE__ */ Ye(Zg, J({
    as: _e,
    className: je(hr.root, s),
    ownerState: Qe,
    onBlur: ae,
    onClick: l,
    onContextMenu: X,
    onFocus: ce,
    onKeyDown: le,
    onKeyUp: ye,
    onMouseDown: G,
    onMouseLeave: ee,
    onMouseUp: te,
    onDragLeave: H,
    onTouchEnd: Ce,
    onTouchMove: ue,
    onTouchStart: ie,
    ref: He,
    tabIndex: c ? -1 : I,
    type: z
  }, ke, h, {
    children: [a, $ ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ Z(Ql, J({
        ref: W,
        center: o
      }, D))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Zl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ox,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: R.bool,
  /**
   * The content of the component.
   */
  children: R.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: R.object,
  /**
   * @ignore
   */
  className: R.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: nx,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: R.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: R.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: R.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: R.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: R.string,
  /**
   * @ignore
   */
  href: R.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: R.elementType,
  /**
   * @ignore
   */
  onBlur: R.func,
  /**
   * @ignore
   */
  onClick: R.func,
  /**
   * @ignore
   */
  onContextMenu: R.func,
  /**
   * @ignore
   */
  onDragLeave: R.func,
  /**
   * @ignore
   */
  onFocus: R.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: R.func,
  /**
   * @ignore
   */
  onKeyDown: R.func,
  /**
   * @ignore
   */
  onKeyUp: R.func,
  /**
   * @ignore
   */
  onMouseDown: R.func,
  /**
   * @ignore
   */
  onMouseLeave: R.func,
  /**
   * @ignore
   */
  onMouseUp: R.func,
  /**
   * @ignore
   */
  onTouchEnd: R.func,
  /**
   * @ignore
   */
  onTouchMove: R.func,
  /**
   * @ignore
   */
  onTouchStart: R.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: R.oneOfType([R.arrayOf(R.oneOfType([R.func, R.object, R.bool])), R.func, R.object]),
  /**
   * @default 0
   */
  tabIndex: R.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: R.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: R.oneOfType([R.func, R.shape({
    current: R.shape({
      pulsate: R.func.isRequired,
      start: R.func.isRequired,
      stop: R.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: R.oneOfType([R.oneOf(["button", "reset", "submit"]), R.string])
});
function em(e) {
  return qt("MuiTypography", e);
}
ur("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const tm = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], rm = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: i,
    variant: o,
    classes: a
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${Te(t)}`, r && "gutterBottom", n && "noWrap", i && "paragraph"]
  };
  return Ur(s, em, a);
}, nm = yt("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${Te(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => J({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Qc = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, im = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, om = (e) => im[e] || e, Ir = /* @__PURE__ */ K.forwardRef(function(t, r) {
  const n = lr({
    props: t,
    name: "MuiTypography"
  }), i = om(n.color), o = ls(J({}, n, {
    color: i
  })), {
    align: a = "inherit",
    className: s,
    component: u,
    gutterBottom: c = !1,
    noWrap: d = !1,
    paragraph: y = !1,
    variant: v = "body1",
    variantMapping: w = Qc
  } = o, _ = Pe(o, tm), l = J({}, o, {
    align: a,
    color: i,
    className: s,
    component: u,
    gutterBottom: c,
    noWrap: d,
    paragraph: y,
    variant: v,
    variantMapping: w
  }), A = u || (y ? "p" : w[v] || Qc[v]) || "span", k = rm(l);
  return /* @__PURE__ */ Z(nm, J({
    as: A,
    ref: r,
    ownerState: l,
    className: je(k.root, s)
  }, _));
});
process.env.NODE_ENV !== "production" && (Ir.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: R.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: R.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: R.object,
  /**
   * @ignore
   */
  className: R.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: R.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: R.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: R.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: R.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: R.oneOfType([R.arrayOf(R.oneOfType([R.func, R.object, R.bool])), R.func, R.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: R.oneOfType([R.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), R.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: R.object
});
const am = ur("MuiBox", ["root"]), sm = hs(), qe = kv({
  themeId: $i,
  defaultTheme: sm,
  defaultClassName: am.root,
  generateClassName: fs.generate
});
process.env.NODE_ENV !== "production" && (qe.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: R.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: R.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: R.oneOfType([R.arrayOf(R.oneOfType([R.func, R.object, R.bool])), R.func, R.object])
});
function cm(e) {
  return qt("MuiButton", e);
}
const Pn = ur("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ef = /* @__PURE__ */ K.createContext({});
process.env.NODE_ENV !== "production" && (ef.displayName = "ButtonGroupContext");
const tf = /* @__PURE__ */ K.createContext(void 0);
process.env.NODE_ENV !== "production" && (tf.displayName = "ButtonGroupButtonContext");
const um = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], lm = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: i,
    variant: o,
    classes: a
  } = e, s = {
    root: ["root", o, `${o}${Te(t)}`, `size${Te(i)}`, `${o}Size${Te(i)}`, `color${Te(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Te(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${Te(i)}`]
  }, u = Ur(s, cm, a);
  return J({}, a, u);
}, rf = (e) => J({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), fm = yt(Zl, {
  shouldForwardProp: (e) => Kl(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Te(r.color)}`], t[`size${Te(r.size)}`], t[`${r.variant}Size${Te(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], o = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return J({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": J({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : $t.alpha(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : $t.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : $t.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : o,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": J({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Pn.focusVisible}`]: J({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Pn.disabled}`]: J({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${$t.alpha(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (r = (n = e.palette).getContrastText) == null ? void 0 : r.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Pn.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Pn.disabled}`]: {
    boxShadow: "none"
  }
}), dm = yt("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${Te(r.size)}`]];
  }
})(({
  ownerState: e
}) => J({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, rf(e))), pm = yt("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${Te(r.size)}`]];
  }
})(({
  ownerState: e
}) => J({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, rf(e))), gs = /* @__PURE__ */ K.forwardRef(function(t, r) {
  const n = K.useContext(ef), i = K.useContext(tf), o = fn(n, t), a = lr({
    props: o,
    name: "MuiButton"
  }), {
    children: s,
    color: u = "primary",
    component: c = "button",
    className: d,
    disabled: y = !1,
    disableElevation: v = !1,
    disableFocusRipple: w = !1,
    endIcon: _,
    focusVisibleClassName: l,
    fullWidth: A = !1,
    size: k = "medium",
    startIcon: T,
    type: C,
    variant: E = "text"
  } = a, f = Pe(a, um), S = J({}, a, {
    color: u,
    component: c,
    disabled: y,
    disableElevation: v,
    disableFocusRipple: w,
    fullWidth: A,
    size: k,
    type: C,
    variant: E
  }), p = lm(S), b = T && /* @__PURE__ */ Z(dm, {
    className: p.startIcon,
    ownerState: S,
    children: T
  }), m = _ && /* @__PURE__ */ Z(pm, {
    className: p.endIcon,
    ownerState: S,
    children: _
  }), g = i || "";
  return /* @__PURE__ */ Ye(fm, J({
    ownerState: S,
    className: je(n.className, p.root, d, g),
    component: c,
    disabled: y,
    focusRipple: !w,
    focusVisibleClassName: je(p.focusVisible, l),
    ref: r,
    type: C
  }, f, {
    classes: p,
    children: [b, s, m]
  }));
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: R.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: R.object,
  /**
   * @ignore
   */
  className: R.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: R.oneOfType([R.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), R.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: R.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: R.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: R.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: R.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: R.bool,
  /**
   * Element placed after the children.
   */
  endIcon: R.node,
  /**
   * @ignore
   */
  focusVisibleClassName: R.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: R.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: R.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: R.oneOfType([R.oneOf(["small", "medium", "large"]), R.string]),
  /**
   * Element placed before the children.
   */
  startIcon: R.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: R.oneOfType([R.arrayOf(R.oneOfType([R.func, R.object, R.bool])), R.func, R.object]),
  /**
   * @ignore
   */
  type: R.oneOfType([R.oneOf(["button", "reset", "submit"]), R.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: R.oneOfType([R.oneOf(["contained", "outlined", "text"]), R.string])
});
const nf = Lx({
  createStyledComponent: yt("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: r
      } = e;
      return [t.root, t[`maxWidth${Te(String(r.maxWidth))}`], r.fixed && t.fixed, r.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => lr({
    props: e,
    name: "MuiContainer"
  })
});
process.env.NODE_ENV !== "production" && (nf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: R.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: R.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: R.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: R.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: R.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: R.oneOfType([R.oneOf(["xs", "sm", "md", "lg", "xl", !1]), R.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: R.oneOfType([R.arrayOf(R.oneOfType([R.func, R.object, R.bool])), R.func, R.object])
});
function hm(e) {
  return qt("MuiSkeleton", e);
}
ur("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const vm = ["animation", "className", "component", "height", "style", "variant", "width"];
let qi = (e) => e, Zc, eu, tu, ru;
const xm = (e) => {
  const {
    classes: t,
    variant: r,
    animation: n,
    hasChildren: i,
    width: o,
    height: a
  } = e;
  return Ur({
    root: ["root", r, n, i && "withChildren", i && !o && "fitContent", i && !a && "heightAuto"]
  }, hm, t);
}, gm = zr(Zc || (Zc = qi`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)), mm = zr(eu || (eu = qi`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)), ym = yt("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.animation !== !1 && t[r.animation], r.hasChildren && t.withChildren, r.hasChildren && !r.width && t.fitContent, r.hasChildren && !r.height && t.heightAuto];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const r = dg(e.shape.borderRadius) || "px", n = pg(e.shape.borderRadius);
  return J({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : Zv(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em"
  }, t.variant === "text" && {
    marginTop: 0,
    marginBottom: 0,
    height: "auto",
    transformOrigin: "0 55%",
    transform: "scale(1, 0.60)",
    borderRadius: `${n}${r}/${Math.round(n / 0.6 * 10) / 10}${r}`,
    "&:empty:before": {
      content: '"\\00a0"'
    }
  }, t.variant === "circular" && {
    borderRadius: "50%"
  }, t.variant === "rounded" && {
    borderRadius: (e.vars || e).shape.borderRadius
  }, t.hasChildren && {
    "& > *": {
      visibility: "hidden"
    }
  }, t.hasChildren && !t.width && {
    maxWidth: "fit-content"
  }, t.hasChildren && !t.height && {
    height: "auto"
  });
}, ({
  ownerState: e
}) => e.animation === "pulse" && zi(tu || (tu = qi`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), gm), ({
  ownerState: e,
  theme: t
}) => e.animation === "wave" && zi(ru || (ru = qi`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), mm, (t.vars || t).palette.action.hover)), ms = /* @__PURE__ */ K.forwardRef(function(t, r) {
  const n = lr({
    props: t,
    name: "MuiSkeleton"
  }), {
    animation: i = "pulse",
    className: o,
    component: a = "span",
    height: s,
    style: u,
    variant: c = "text",
    width: d
  } = n, y = Pe(n, vm), v = J({}, n, {
    animation: i,
    component: a,
    variant: c,
    hasChildren: !!y.children
  }), w = xm(v);
  return /* @__PURE__ */ Z(ym, J({
    as: a,
    ref: r,
    className: je(w.root, o),
    ownerState: v
  }, y, {
    style: J({
      width: d,
      height: s
    }, u)
  }));
});
process.env.NODE_ENV !== "production" && (ms.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: R.oneOf(["pulse", "wave", !1]),
  /**
   * Optional children to infer width and height from.
   */
  children: R.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: R.object,
  /**
   * @ignore
   */
  className: R.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: R.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: R.oneOfType([R.number, R.string]),
  /**
   * @ignore
   */
  style: R.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: R.oneOfType([R.arrayOf(R.oneOfType([R.func, R.object, R.bool])), R.func, R.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: R.oneOfType([R.oneOf(["circular", "rectangular", "rounded", "text"]), R.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: R.oneOfType([R.number, R.string])
});
const of = () => /* @__PURE__ */ Z(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Z("g", { id: "play", children: /* @__PURE__ */ Z(
      "path",
      {
        id: "Icon",
        d: "M4.16675 4.1576C4.16675 3.3483 4.16675 2.94365 4.33549 2.72059C4.48249 2.52626 4.70718 2.40601 4.95041 2.39149C5.22961 2.37482 5.5663 2.59928 6.23968 3.0482L15.0026 8.89018C15.5591 9.26111 15.8373 9.44658 15.9342 9.68035C16.019 9.88473 16.019 10.1144 15.9342 10.3188C15.8373 10.5526 15.5591 10.738 15.0026 11.109L6.23968 16.951C5.5663 17.3999 5.22961 17.6243 4.95041 17.6077C4.70718 17.5931 4.48249 17.4729 4.33549 17.2786C4.16675 17.0555 4.16675 16.6509 4.16675 15.8416V4.1576Z",
        stroke: "white",
        strokeWidth: "1.66667",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) })
  }
), bm = "https://pre.binge.buzz/assets/svg/binge-logo.svg", Em = ({ isLoading: e, bannerImages: t }) => {
  const r = jo("(max-width:600px)"), n = jo("(min-width:1200px)"), i = jo("(min-width:1400px)"), o = r ? t.portrait : t.landscape;
  return e ? /* @__PURE__ */ Z(
    ms,
    {
      variant: "rectangular",
      width: "100%",
      animation: "wave",
      height: 300,
      sx: {
        bgcolor: "#f2eeeb",
        background: "linear-gradient(90deg, #f2eeeb 25%, #f2e8f2 50%, #f2eeeb 75%)",
        backgroundSize: "300% 100%",
        animation: "waveAnimation 1.6s ease-in-out infinite",
        "@keyframes waveAnimation": {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" }
        }
      }
    }
  ) : /* @__PURE__ */ Ye(qe, { sx: { position: "relative" }, children: [
    /* @__PURE__ */ Z(
      qe,
      {
        sx: {
          position: "relative",
          display: "flex",
          justifyContent: "end",
          width: "100%"
        },
        children: /* @__PURE__ */ Z(
          "img",
          {
            src: o,
            alt: "hero",
            style: { width: "70%", maxWidth: "1003px", height: "auto" }
          }
        )
      }
    ),
    /* @__PURE__ */ Z(
      qe,
      {
        sx: {
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "100%", md: "80%" },
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: {
            xs: "linear-gradient(to right, #464A54 0%, #464A54 35%, rgba(255, 255, 255, 0.00))",
            md: "linear-gradient(to right, #464A54 0%, #464A54 47%, rgba(255, 255, 255, 0.00))"
          }
        },
        children: /* @__PURE__ */ Ye(
          nf,
          {
            sx: {
              zIndex: 1,
              paddingX: "0px !important",
              marginLeft: i ? "150px" : n ? "80px" : { xs: "20px", sm: "50px", md: "100px" }
            },
            children: [
              /* @__PURE__ */ Ye(
                Ir,
                {
                  variant: "h3",
                  sx: {
                    fontWeight: { xs: "400", md: "700" },
                    fontSize: i ? "48px" : n ? "38px" : { xs: "20px", sm: "25px", md: "30px" },
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  },
                  children: [
                    /* @__PURE__ */ Z(
                      qe,
                      {
                        component: "img",
                        src: bm,
                        alt: "binge",
                        sx: {
                          width: i ? 165 : n ? 150 : { xs: 80, sm: 100, md: 135 }
                        }
                      }
                    ),
                    /* @__PURE__ */ Z("span", { className: "banner-text", children: "is an online video" })
                  ]
                }
              ),
              /* @__PURE__ */ Z(
                Ir,
                {
                  variant: "h3",
                  sx: {
                    fontWeight: 700,
                    fontSize: i ? "48px" : n ? "38px" : { xs: "20px", sm: "25px", md: "30px" },
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  },
                  children: /* @__PURE__ */ Z(
                    "span",
                    {
                      className: "banner-text",
                      style: {
                        color: "#EEEFFC",
                        marginTop: "0px",
                        marginBottom: "0px"
                      },
                      children: "streaming platform"
                    }
                  )
                }
              ),
              /* @__PURE__ */ Ye(
                gs,
                {
                  sx: {
                    background: "#FF4A50",
                    borderRadius: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    padding: { xs: "8px 14px", lg: "12px 18px" },
                    color: "#fff",
                    textTransform: "none",
                    fontSize: { xs: "15px", sm: "14px", lg: "16px" },
                    fontWeight: { xs: "400", lg: "600" },
                    marginTop: { xs: "15px", md: "30px" }
                  },
                  className: "watchnow-text",
                  children: [
                    "Watch Now",
                    /* @__PURE__ */ Z(of, {})
                  ]
                }
              )
            ]
          }
        )
      }
    )
  ] });
};
var Go = {}, Yo = {}, Kr = {}, Ko = {}, nu;
function _m() {
  return nu || (nu = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var t = {
      animating: !1,
      autoplaying: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: 0,
      direction: 1,
      dragging: !1,
      edgeDragged: !1,
      initialized: !1,
      lazyLoadedList: [],
      listHeight: null,
      listWidth: null,
      scrolling: !1,
      slideCount: null,
      slideHeight: null,
      slideWidth: null,
      swipeLeft: null,
      swiped: !1,
      // used by swipeEvent. differentites between touch and swipe.
      swiping: !1,
      touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
      },
      trackStyle: {},
      trackWidth: 0,
      targetSlide: 0
    }, r = t;
    e.default = r;
  }(Ko)), Ko;
}
var Xo, iu;
function wm() {
  if (iu) return Xo;
  iu = 1;
  var e = "Expected a function", t = NaN, r = "[object Symbol]", n = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, a = /^0o[0-7]+$/i, s = parseInt, u = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, c = typeof self == "object" && self && self.Object === Object && self, d = u || c || Function("return this")(), y = Object.prototype, v = y.toString, w = Math.max, _ = Math.min, l = function() {
    return d.Date.now();
  };
  function A(f, S, p) {
    var b, m, g, O, I, D, L = 0, z = !1, h = !1, Y = !0;
    if (typeof f != "function")
      throw new TypeError(e);
    S = E(S) || 0, k(p) && (z = !!p.leading, h = "maxWait" in p, g = h ? w(E(p.maxWait) || 0, S) : g, Y = "trailing" in p ? !!p.trailing : Y);
    function U(q) {
      var $ = b, V = m;
      return b = m = void 0, L = q, O = f.apply(V, $), O;
    }
    function W(q) {
      return L = q, I = setTimeout(M, S), z ? U(q) : O;
    }
    function N(q) {
      var $ = q - D, V = q - L, G = S - $;
      return h ? _(G, g - V) : G;
    }
    function P(q) {
      var $ = q - D, V = q - L;
      return D === void 0 || $ >= S || $ < 0 || h && V >= g;
    }
    function M() {
      var q = l();
      if (P(q))
        return F(q);
      I = setTimeout(M, N(q));
    }
    function F(q) {
      return I = void 0, Y && b ? U(q) : (b = m = void 0, O);
    }
    function x() {
      I !== void 0 && clearTimeout(I), L = 0, b = D = m = I = void 0;
    }
    function B() {
      return I === void 0 ? O : F(l());
    }
    function j() {
      var q = l(), $ = P(q);
      if (b = arguments, m = this, D = q, $) {
        if (I === void 0)
          return W(D);
        if (h)
          return I = setTimeout(M, S), U(D);
      }
      return I === void 0 && (I = setTimeout(M, S)), O;
    }
    return j.cancel = x, j.flush = B, j;
  }
  function k(f) {
    var S = typeof f;
    return !!f && (S == "object" || S == "function");
  }
  function T(f) {
    return !!f && typeof f == "object";
  }
  function C(f) {
    return typeof f == "symbol" || T(f) && v.call(f) == r;
  }
  function E(f) {
    if (typeof f == "number")
      return f;
    if (C(f))
      return t;
    if (k(f)) {
      var S = typeof f.valueOf == "function" ? f.valueOf() : f;
      f = k(S) ? S + "" : S;
    }
    if (typeof f != "string")
      return f === 0 ? f : +f;
    f = f.replace(n, "");
    var p = o.test(f);
    return p || a.test(f) ? s(f.slice(2), p ? 2 : 8) : i.test(f) ? t : +f;
  }
  return Xo = A, Xo;
}
var Jo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ou;
function bo() {
  return ou || (ou = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var o = "", a = 0; a < arguments.length; a++) {
          var s = arguments[a];
          s && (o = i(o, n(s)));
        }
        return o;
      }
      function n(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return r.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var a = "";
        for (var s in o)
          t.call(o, s) && o[s] && (a = i(a, s));
        return a;
      }
      function i(o, a) {
        return a ? o ? o + " " + a : o + a : o;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(Jo)), Jo.exports;
}
var Q = {}, au;
function En() {
  if (au) return Q;
  au = 1, Object.defineProperty(Q, "__esModule", {
    value: !0
  }), Q.checkSpecKeys = Q.checkNavigable = Q.changeSlide = Q.canUseDOM = Q.canGoNext = void 0, Q.clamp = o, Q.swipeStart = Q.swipeMove = Q.swipeEnd = Q.slidesOnRight = Q.slidesOnLeft = Q.slideHandler = Q.siblingDirection = Q.safePreventDefault = Q.lazyStartIndex = Q.lazySlidesOnRight = Q.lazySlidesOnLeft = Q.lazyEndIndex = Q.keyHandler = Q.initializedState = Q.getWidth = Q.getTrackLeft = Q.getTrackCSS = Q.getTrackAnimateCSS = Q.getTotalSlides = Q.getSwipeDirection = Q.getSlideCount = Q.getRequiredLazySlides = Q.getPreClones = Q.getPostClones = Q.getOnDemandLazySlides = Q.getNavigableIndexes = Q.getHeight = Q.extractObject = void 0;
  var e = t(Ue);
  function t(F) {
    return F && F.__esModule ? F : { default: F };
  }
  function r(F, x) {
    var B = Object.keys(F);
    if (Object.getOwnPropertySymbols) {
      var j = Object.getOwnPropertySymbols(F);
      x && (j = j.filter(function(q) {
        return Object.getOwnPropertyDescriptor(F, q).enumerable;
      })), B.push.apply(B, j);
    }
    return B;
  }
  function n(F) {
    for (var x = 1; x < arguments.length; x++) {
      var B = arguments[x] != null ? arguments[x] : {};
      x % 2 ? r(Object(B), !0).forEach(function(j) {
        i(F, j, B[j]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(B)) : r(Object(B)).forEach(function(j) {
        Object.defineProperty(F, j, Object.getOwnPropertyDescriptor(B, j));
      });
    }
    return F;
  }
  function i(F, x, B) {
    return x in F ? Object.defineProperty(F, x, { value: B, enumerable: !0, configurable: !0, writable: !0 }) : F[x] = B, F;
  }
  function o(F, x, B) {
    return Math.max(x, Math.min(F, B));
  }
  var a = function(x) {
    var B = ["onTouchStart", "onTouchMove", "onWheel"];
    B.includes(x._reactName) || x.preventDefault();
  };
  Q.safePreventDefault = a;
  var s = function(x) {
    for (var B = [], j = c(x), q = d(x), $ = j; $ < q; $++)
      x.lazyLoadedList.indexOf($) < 0 && B.push($);
    return B;
  };
  Q.getOnDemandLazySlides = s;
  var u = function(x) {
    for (var B = [], j = c(x), q = d(x), $ = j; $ < q; $++)
      B.push($);
    return B;
  };
  Q.getRequiredLazySlides = u;
  var c = function(x) {
    return x.currentSlide - y(x);
  };
  Q.lazyStartIndex = c;
  var d = function(x) {
    return x.currentSlide + v(x);
  };
  Q.lazyEndIndex = d;
  var y = function(x) {
    return x.centerMode ? Math.floor(x.slidesToShow / 2) + (parseInt(x.centerPadding) > 0 ? 1 : 0) : 0;
  };
  Q.lazySlidesOnLeft = y;
  var v = function(x) {
    return x.centerMode ? Math.floor((x.slidesToShow - 1) / 2) + 1 + (parseInt(x.centerPadding) > 0 ? 1 : 0) : x.slidesToShow;
  };
  Q.lazySlidesOnRight = v;
  var w = function(x) {
    return x && x.offsetWidth || 0;
  };
  Q.getWidth = w;
  var _ = function(x) {
    return x && x.offsetHeight || 0;
  };
  Q.getHeight = _;
  var l = function(x) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, j, q, $, V;
    return j = x.startX - x.curX, q = x.startY - x.curY, $ = Math.atan2(q, j), V = Math.round($ * 180 / Math.PI), V < 0 && (V = 360 - Math.abs(V)), V <= 45 && V >= 0 || V <= 360 && V >= 315 ? "left" : V >= 135 && V <= 225 ? "right" : B === !0 ? V >= 35 && V <= 135 ? "up" : "down" : "vertical";
  };
  Q.getSwipeDirection = l;
  var A = function(x) {
    var B = !0;
    return x.infinite || (x.centerMode && x.currentSlide >= x.slideCount - 1 || x.slideCount <= x.slidesToShow || x.currentSlide >= x.slideCount - x.slidesToShow) && (B = !1), B;
  };
  Q.canGoNext = A;
  var k = function(x, B) {
    var j = {};
    return B.forEach(function(q) {
      return j[q] = x[q];
    }), j;
  };
  Q.extractObject = k;
  var T = function(x) {
    var B = e.default.Children.count(x.children), j = x.listRef, q = Math.ceil(w(j)), $ = x.trackRef && x.trackRef.node, V = Math.ceil(w($)), G;
    if (x.vertical)
      G = q;
    else {
      var X = x.centerMode && parseInt(x.centerPadding) * 2;
      typeof x.centerPadding == "string" && x.centerPadding.slice(-1) === "%" && (X *= q / 100), G = Math.ceil((q - X) / x.slidesToShow);
    }
    var H = j && _(j.querySelector('[data-index="0"]')), te = H * x.slidesToShow, ee = x.currentSlide === void 0 ? x.initialSlide : x.currentSlide;
    x.rtl && x.currentSlide === void 0 && (ee = B - 1 - x.initialSlide);
    var ie = x.lazyLoadedList || [], Ce = s(n(n({}, x), {}, {
      currentSlide: ee,
      lazyLoadedList: ie
    }));
    ie = ie.concat(Ce);
    var ue = {
      slideCount: B,
      slideWidth: G,
      listWidth: q,
      trackWidth: V,
      currentSlide: ee,
      slideHeight: H,
      listHeight: te,
      lazyLoadedList: ie
    };
    return x.autoplaying === null && x.autoplay && (ue.autoplaying = "playing"), ue;
  };
  Q.initializedState = T;
  var C = function(x) {
    var B = x.waitForAnimate, j = x.animating, q = x.fade, $ = x.infinite, V = x.index, G = x.slideCount, X = x.lazyLoad, H = x.currentSlide, te = x.centerMode, ee = x.slidesToScroll, ie = x.slidesToShow, Ce = x.useCSS, ue = x.lazyLoadedList;
    if (B && j) return {};
    var ae = V, ce, Se, re, le = {}, ye = {}, _e = $ ? V : o(V, 0, G - 1);
    if (q) {
      if (!$ && (V < 0 || V >= G)) return {};
      V < 0 ? ae = V + G : V >= G && (ae = V - G), X && ue.indexOf(ae) < 0 && (ue = ue.concat(ae)), le = {
        animating: !0,
        currentSlide: ae,
        lazyLoadedList: ue,
        targetSlide: ae
      }, ye = {
        animating: !1,
        targetSlide: ae
      };
    } else
      ce = ae, ae < 0 ? (ce = ae + G, $ ? G % ee !== 0 && (ce = G - G % ee) : ce = 0) : !A(x) && ae > H ? ae = ce = H : te && ae >= G ? (ae = $ ? G : G - 1, ce = $ ? 0 : G - 1) : ae >= G && (ce = ae - G, $ ? G % ee !== 0 && (ce = 0) : ce = G - ie), !$ && ae + ie >= G && (ce = G - ie), Se = z(n(n({}, x), {}, {
        slideIndex: ae
      })), re = z(n(n({}, x), {}, {
        slideIndex: ce
      })), $ || (Se === re && (ae = ce), Se = re), X && (ue = ue.concat(s(n(n({}, x), {}, {
        currentSlide: ae
      })))), Ce ? (le = {
        animating: !0,
        currentSlide: ce,
        trackStyle: L(n(n({}, x), {}, {
          left: Se
        })),
        lazyLoadedList: ue,
        targetSlide: _e
      }, ye = {
        animating: !1,
        currentSlide: ce,
        trackStyle: D(n(n({}, x), {}, {
          left: re
        })),
        swipeLeft: null,
        targetSlide: _e
      }) : le = {
        currentSlide: ce,
        trackStyle: D(n(n({}, x), {}, {
          left: re
        })),
        lazyLoadedList: ue,
        targetSlide: _e
      };
    return {
      state: le,
      nextState: ye
    };
  };
  Q.slideHandler = C;
  var E = function(x, B) {
    var j, q, $, V, G, X = x.slidesToScroll, H = x.slidesToShow, te = x.slideCount, ee = x.currentSlide, ie = x.targetSlide, Ce = x.lazyLoad, ue = x.infinite;
    if (V = te % X !== 0, j = V ? 0 : (te - ee) % X, B.message === "previous")
      $ = j === 0 ? X : H - j, G = ee - $, Ce && !ue && (q = ee - $, G = q === -1 ? te - 1 : q), ue || (G = ie - X);
    else if (B.message === "next")
      $ = j === 0 ? X : j, G = ee + $, Ce && !ue && (G = (ee + X) % te + j), ue || (G = ie + X);
    else if (B.message === "dots")
      G = B.index * B.slidesToScroll;
    else if (B.message === "children") {
      if (G = B.index, ue) {
        var ae = W(n(n({}, x), {}, {
          targetSlide: G
        }));
        G > B.currentSlide && ae === "left" ? G = G - te : G < B.currentSlide && ae === "right" && (G = G + te);
      }
    } else B.message === "index" && (G = Number(B.index));
    return G;
  };
  Q.changeSlide = E;
  var f = function(x, B, j) {
    return x.target.tagName.match("TEXTAREA|INPUT|SELECT") || !B ? "" : x.keyCode === 37 ? j ? "next" : "previous" : x.keyCode === 39 ? j ? "previous" : "next" : "";
  };
  Q.keyHandler = f;
  var S = function(x, B, j) {
    return x.target.tagName === "IMG" && a(x), !B || !j && x.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: x.touches ? x.touches[0].pageX : x.clientX,
        startY: x.touches ? x.touches[0].pageY : x.clientY,
        curX: x.touches ? x.touches[0].pageX : x.clientX,
        curY: x.touches ? x.touches[0].pageY : x.clientY
      }
    };
  };
  Q.swipeStart = S;
  var p = function(x, B) {
    var j = B.scrolling, q = B.animating, $ = B.vertical, V = B.swipeToSlide, G = B.verticalSwiping, X = B.rtl, H = B.currentSlide, te = B.edgeFriction, ee = B.edgeDragged, ie = B.onEdge, Ce = B.swiped, ue = B.swiping, ae = B.slideCount, ce = B.slidesToScroll, Se = B.infinite, re = B.touchObject, le = B.swipeEvent, ye = B.listHeight, _e = B.listWidth;
    if (!j) {
      if (q) return a(x);
      $ && V && G && a(x);
      var ke, He = {}, Qe = z(B);
      re.curX = x.touches ? x.touches[0].pageX : x.clientX, re.curY = x.touches ? x.touches[0].pageY : x.clientY, re.swipeLength = Math.round(Math.sqrt(Math.pow(re.curX - re.startX, 2)));
      var hr = Math.round(Math.sqrt(Math.pow(re.curY - re.startY, 2)));
      if (!G && !ue && hr > 10)
        return {
          scrolling: !0
        };
      G && (re.swipeLength = hr);
      var ne = (X ? -1 : 1) * (re.curX > re.startX ? 1 : -1);
      G && (ne = re.curY > re.startY ? 1 : -1);
      var Gt = Math.ceil(ae / ce), Le = l(B.touchObject, G), Ge = re.swipeLength;
      return Se || (H === 0 && (Le === "right" || Le === "down") || H + 1 >= Gt && (Le === "left" || Le === "up") || !A(B) && (Le === "left" || Le === "up")) && (Ge = re.swipeLength * te, ee === !1 && ie && (ie(Le), He.edgeDragged = !0)), !Ce && le && (le(Le), He.swiped = !0), $ ? ke = Qe + Ge * (ye / _e) * ne : X ? ke = Qe - Ge * ne : ke = Qe + Ge * ne, G && (ke = Qe + Ge * ne), He = n(n({}, He), {}, {
        touchObject: re,
        swipeLeft: ke,
        trackStyle: D(n(n({}, B), {}, {
          left: ke
        }))
      }), Math.abs(re.curX - re.startX) < Math.abs(re.curY - re.startY) * 0.8 || re.swipeLength > 10 && (He.swiping = !0, a(x)), He;
    }
  };
  Q.swipeMove = p;
  var b = function(x, B) {
    var j = B.dragging, q = B.swipe, $ = B.touchObject, V = B.listWidth, G = B.touchThreshold, X = B.verticalSwiping, H = B.listHeight, te = B.swipeToSlide, ee = B.scrolling, ie = B.onSwipe, Ce = B.targetSlide, ue = B.currentSlide, ae = B.infinite;
    if (!j)
      return q && a(x), {};
    var ce = X ? H / G : V / G, Se = l($, X), re = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (ee || !$.swipeLength)
      return re;
    if ($.swipeLength > ce) {
      a(x), ie && ie(Se);
      var le, ye, _e = ae ? ue : Ce;
      switch (Se) {
        case "left":
        case "up":
          ye = _e + O(B), le = te ? g(B, ye) : ye, re.currentDirection = 0;
          break;
        case "right":
        case "down":
          ye = _e - O(B), le = te ? g(B, ye) : ye, re.currentDirection = 1;
          break;
        default:
          le = _e;
      }
      re.triggerSlideHandler = le;
    } else {
      var ke = z(B);
      re.trackStyle = L(n(n({}, B), {}, {
        left: ke
      }));
    }
    return re;
  };
  Q.swipeEnd = b;
  var m = function(x) {
    for (var B = x.infinite ? x.slideCount * 2 : x.slideCount, j = x.infinite ? x.slidesToShow * -1 : 0, q = x.infinite ? x.slidesToShow * -1 : 0, $ = []; j < B; )
      $.push(j), j = q + x.slidesToScroll, q += Math.min(x.slidesToScroll, x.slidesToShow);
    return $;
  };
  Q.getNavigableIndexes = m;
  var g = function(x, B) {
    var j = m(x), q = 0;
    if (B > j[j.length - 1])
      B = j[j.length - 1];
    else
      for (var $ in j) {
        if (B < j[$]) {
          B = q;
          break;
        }
        q = j[$];
      }
    return B;
  };
  Q.checkNavigable = g;
  var O = function(x) {
    var B = x.centerMode ? x.slideWidth * Math.floor(x.slidesToShow / 2) : 0;
    if (x.swipeToSlide) {
      var j, q = x.listRef, $ = q.querySelectorAll && q.querySelectorAll(".slick-slide") || [];
      if (Array.from($).every(function(X) {
        if (x.vertical) {
          if (X.offsetTop + _(X) / 2 > x.swipeLeft * -1)
            return j = X, !1;
        } else if (X.offsetLeft - B + w(X) / 2 > x.swipeLeft * -1)
          return j = X, !1;
        return !0;
      }), !j)
        return 0;
      var V = x.rtl === !0 ? x.slideCount - x.currentSlide : x.currentSlide, G = Math.abs(j.dataset.index - V) || 1;
      return G;
    } else
      return x.slidesToScroll;
  };
  Q.getSlideCount = O;
  var I = function(x, B) {
    return B.reduce(function(j, q) {
      return j && x.hasOwnProperty(q);
    }, !0) ? null : console.error("Keys Missing:", x);
  };
  Q.checkSpecKeys = I;
  var D = function(x) {
    I(x, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var B, j, q = x.slideCount + 2 * x.slidesToShow;
    x.vertical ? j = q * x.slideHeight : B = U(x) * x.slideWidth;
    var $ = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (x.useTransform) {
      var V = x.vertical ? "translate3d(0px, " + x.left + "px, 0px)" : "translate3d(" + x.left + "px, 0px, 0px)", G = x.vertical ? "translate3d(0px, " + x.left + "px, 0px)" : "translate3d(" + x.left + "px, 0px, 0px)", X = x.vertical ? "translateY(" + x.left + "px)" : "translateX(" + x.left + "px)";
      $ = n(n({}, $), {}, {
        WebkitTransform: V,
        transform: G,
        msTransform: X
      });
    } else
      x.vertical ? $.top = x.left : $.left = x.left;
    return x.fade && ($ = {
      opacity: 1
    }), B && ($.width = B), j && ($.height = j), window && !window.addEventListener && window.attachEvent && (x.vertical ? $.marginTop = x.left + "px" : $.marginLeft = x.left + "px"), $;
  };
  Q.getTrackCSS = D;
  var L = function(x) {
    I(x, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var B = D(x);
    return x.useTransform ? (B.WebkitTransition = "-webkit-transform " + x.speed + "ms " + x.cssEase, B.transition = "transform " + x.speed + "ms " + x.cssEase) : x.vertical ? B.transition = "top " + x.speed + "ms " + x.cssEase : B.transition = "left " + x.speed + "ms " + x.cssEase, B;
  };
  Q.getTrackAnimateCSS = L;
  var z = function(x) {
    if (x.unslick)
      return 0;
    I(x, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var B = x.slideIndex, j = x.trackRef, q = x.infinite, $ = x.centerMode, V = x.slideCount, G = x.slidesToShow, X = x.slidesToScroll, H = x.slideWidth, te = x.listWidth, ee = x.variableWidth, ie = x.slideHeight, Ce = x.fade, ue = x.vertical, ae = 0, ce, Se, re = 0;
    if (Ce || x.slideCount === 1)
      return 0;
    var le = 0;
    if (q ? (le = -h(x), V % X !== 0 && B + X > V && (le = -(B > V ? G - (B - V) : V % X)), $ && (le += parseInt(G / 2))) : (V % X !== 0 && B + X > V && (le = G - V % X), $ && (le = parseInt(G / 2))), ae = le * H, re = le * ie, ue ? ce = B * ie * -1 + re : ce = B * H * -1 + ae, ee === !0) {
      var ye, _e = j && j.node;
      if (ye = B + h(x), Se = _e && _e.childNodes[ye], ce = Se ? Se.offsetLeft * -1 : 0, $ === !0) {
        ye = q ? B + h(x) : B, Se = _e && _e.children[ye], ce = 0;
        for (var ke = 0; ke < ye; ke++)
          ce -= _e && _e.children[ke] && _e.children[ke].offsetWidth;
        ce -= parseInt(x.centerPadding), ce += Se && (te - Se.offsetWidth) / 2;
      }
    }
    return ce;
  };
  Q.getTrackLeft = z;
  var h = function(x) {
    return x.unslick || !x.infinite ? 0 : x.variableWidth ? x.slideCount : x.slidesToShow + (x.centerMode ? 1 : 0);
  };
  Q.getPreClones = h;
  var Y = function(x) {
    return x.unslick || !x.infinite ? 0 : x.slideCount;
  };
  Q.getPostClones = Y;
  var U = function(x) {
    return x.slideCount === 1 ? 1 : h(x) + x.slideCount + Y(x);
  };
  Q.getTotalSlides = U;
  var W = function(x) {
    return x.targetSlide > x.currentSlide ? x.targetSlide > x.currentSlide + N(x) ? "left" : "right" : x.targetSlide < x.currentSlide - P(x) ? "right" : "left";
  };
  Q.siblingDirection = W;
  var N = function(x) {
    var B = x.slidesToShow, j = x.centerMode, q = x.rtl, $ = x.centerPadding;
    if (j) {
      var V = (B - 1) / 2 + 1;
      return parseInt($) > 0 && (V += 1), q && B % 2 === 0 && (V += 1), V;
    }
    return q ? 0 : B - 1;
  };
  Q.slidesOnRight = N;
  var P = function(x) {
    var B = x.slidesToShow, j = x.centerMode, q = x.rtl, $ = x.centerPadding;
    if (j) {
      var V = (B - 1) / 2 + 1;
      return parseInt($) > 0 && (V += 1), !q && B % 2 === 0 && (V += 1), V;
    }
    return q ? B - 1 : 0;
  };
  Q.slidesOnLeft = P;
  var M = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  return Q.canUseDOM = M, Q;
}
var Xr = {}, su;
function Cm() {
  if (su) return Xr;
  su = 1;
  function e(b) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
      return typeof m;
    } : function(m) {
      return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
    }, e(b);
  }
  Object.defineProperty(Xr, "__esModule", {
    value: !0
  }), Xr.Track = void 0;
  var t = i(Ue), r = i(bo()), n = En();
  function i(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function o() {
    return o = Object.assign || function(b) {
      for (var m = 1; m < arguments.length; m++) {
        var g = arguments[m];
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (b[O] = g[O]);
      }
      return b;
    }, o.apply(this, arguments);
  }
  function a(b, m) {
    if (!(b instanceof m))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(b, m) {
    for (var g = 0; g < m.length; g++) {
      var O = m[g];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(b, O.key, O);
    }
  }
  function u(b, m, g) {
    return m && s(b.prototype, m), Object.defineProperty(b, "prototype", { writable: !1 }), b;
  }
  function c(b, m) {
    if (typeof m != "function" && m !== null)
      throw new TypeError("Super expression must either be null or a function");
    b.prototype = Object.create(m && m.prototype, { constructor: { value: b, writable: !0, configurable: !0 } }), Object.defineProperty(b, "prototype", { writable: !1 }), m && d(b, m);
  }
  function d(b, m) {
    return d = Object.setPrototypeOf || function(O, I) {
      return O.__proto__ = I, O;
    }, d(b, m);
  }
  function y(b) {
    var m = _();
    return function() {
      var O = l(b), I;
      if (m) {
        var D = l(this).constructor;
        I = Reflect.construct(O, arguments, D);
      } else
        I = O.apply(this, arguments);
      return v(this, I);
    };
  }
  function v(b, m) {
    if (m && (e(m) === "object" || typeof m == "function"))
      return m;
    if (m !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return w(b);
  }
  function w(b) {
    if (b === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b;
  }
  function _() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function l(b) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(g) {
      return g.__proto__ || Object.getPrototypeOf(g);
    }, l(b);
  }
  function A(b, m) {
    var g = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(b);
      m && (O = O.filter(function(I) {
        return Object.getOwnPropertyDescriptor(b, I).enumerable;
      })), g.push.apply(g, O);
    }
    return g;
  }
  function k(b) {
    for (var m = 1; m < arguments.length; m++) {
      var g = arguments[m] != null ? arguments[m] : {};
      m % 2 ? A(Object(g), !0).forEach(function(O) {
        T(b, O, g[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(g)) : A(Object(g)).forEach(function(O) {
        Object.defineProperty(b, O, Object.getOwnPropertyDescriptor(g, O));
      });
    }
    return b;
  }
  function T(b, m, g) {
    return m in b ? Object.defineProperty(b, m, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : b[m] = g, b;
  }
  var C = function(m) {
    var g, O, I, D, L;
    m.rtl ? L = m.slideCount - 1 - m.index : L = m.index, I = L < 0 || L >= m.slideCount, m.centerMode ? (D = Math.floor(m.slidesToShow / 2), O = (L - m.currentSlide) % m.slideCount === 0, L > m.currentSlide - D - 1 && L <= m.currentSlide + D && (g = !0)) : g = m.currentSlide <= L && L < m.currentSlide + m.slidesToShow;
    var z;
    m.targetSlide < 0 ? z = m.targetSlide + m.slideCount : m.targetSlide >= m.slideCount ? z = m.targetSlide - m.slideCount : z = m.targetSlide;
    var h = L === z;
    return {
      "slick-slide": !0,
      "slick-active": g,
      "slick-center": O,
      "slick-cloned": I,
      "slick-current": h
      // dubious in case of RTL
    };
  }, E = function(m) {
    var g = {};
    return (m.variableWidth === void 0 || m.variableWidth === !1) && (g.width = m.slideWidth), m.fade && (g.position = "relative", m.vertical ? g.top = -m.index * parseInt(m.slideHeight) : g.left = -m.index * parseInt(m.slideWidth), g.opacity = m.currentSlide === m.index ? 1 : 0, m.useCSS && (g.transition = "opacity " + m.speed + "ms " + m.cssEase + ", visibility " + m.speed + "ms " + m.cssEase)), g;
  }, f = function(m, g) {
    return m.key || g;
  }, S = function(m) {
    var g, O = [], I = [], D = [], L = t.default.Children.count(m.children), z = (0, n.lazyStartIndex)(m), h = (0, n.lazyEndIndex)(m);
    return t.default.Children.forEach(m.children, function(Y, U) {
      var W, N = {
        message: "children",
        index: U,
        slidesToScroll: m.slidesToScroll,
        currentSlide: m.currentSlide
      };
      !m.lazyLoad || m.lazyLoad && m.lazyLoadedList.indexOf(U) >= 0 ? W = Y : W = /* @__PURE__ */ t.default.createElement("div", null);
      var P = E(k(k({}, m), {}, {
        index: U
      })), M = W.props.className || "", F = C(k(k({}, m), {}, {
        index: U
      }));
      if (O.push(/* @__PURE__ */ t.default.cloneElement(W, {
        key: "original" + f(W, U),
        "data-index": U,
        className: (0, r.default)(F, M),
        tabIndex: "-1",
        "aria-hidden": !F["slick-active"],
        style: k(k({
          outline: "none"
        }, W.props.style || {}), P),
        onClick: function(j) {
          W.props && W.props.onClick && W.props.onClick(j), m.focusOnSelect && m.focusOnSelect(N);
        }
      })), m.infinite && m.fade === !1) {
        var x = L - U;
        x <= (0, n.getPreClones)(m) && L !== m.slidesToShow && (g = -x, g >= z && (W = Y), F = C(k(k({}, m), {}, {
          index: g
        })), I.push(/* @__PURE__ */ t.default.cloneElement(W, {
          key: "precloned" + f(W, g),
          "data-index": g,
          tabIndex: "-1",
          className: (0, r.default)(F, M),
          "aria-hidden": !F["slick-active"],
          style: k(k({}, W.props.style || {}), P),
          onClick: function(j) {
            W.props && W.props.onClick && W.props.onClick(j), m.focusOnSelect && m.focusOnSelect(N);
          }
        }))), L !== m.slidesToShow && (g = L + U, g < h && (W = Y), F = C(k(k({}, m), {}, {
          index: g
        })), D.push(/* @__PURE__ */ t.default.cloneElement(W, {
          key: "postcloned" + f(W, g),
          "data-index": g,
          tabIndex: "-1",
          className: (0, r.default)(F, M),
          "aria-hidden": !F["slick-active"],
          style: k(k({}, W.props.style || {}), P),
          onClick: function(j) {
            W.props && W.props.onClick && W.props.onClick(j), m.focusOnSelect && m.focusOnSelect(N);
          }
        })));
      }
    }), m.rtl ? I.concat(O, D).reverse() : I.concat(O, D);
  }, p = /* @__PURE__ */ function(b) {
    c(g, b);
    var m = y(g);
    function g() {
      var O;
      a(this, g);
      for (var I = arguments.length, D = new Array(I), L = 0; L < I; L++)
        D[L] = arguments[L];
      return O = m.call.apply(m, [this].concat(D)), T(w(O), "node", null), T(w(O), "handleRef", function(z) {
        O.node = z;
      }), O;
    }
    return u(g, [{
      key: "render",
      value: function() {
        var I = S(this.props), D = this.props, L = D.onMouseEnter, z = D.onMouseOver, h = D.onMouseLeave, Y = {
          onMouseEnter: L,
          onMouseOver: z,
          onMouseLeave: h
        };
        return /* @__PURE__ */ t.default.createElement("div", o({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, Y), I);
      }
    }]), g;
  }(t.default.PureComponent);
  return Xr.Track = p, Xr;
}
var Jr = {}, cu;
function Sm() {
  if (cu) return Jr;
  cu = 1;
  function e(E) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
      return typeof f;
    } : function(f) {
      return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
    }, e(E);
  }
  Object.defineProperty(Jr, "__esModule", {
    value: !0
  }), Jr.Dots = void 0;
  var t = i(Ue), r = i(bo()), n = En();
  function i(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function o(E, f) {
    var S = Object.keys(E);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(E);
      f && (p = p.filter(function(b) {
        return Object.getOwnPropertyDescriptor(E, b).enumerable;
      })), S.push.apply(S, p);
    }
    return S;
  }
  function a(E) {
    for (var f = 1; f < arguments.length; f++) {
      var S = arguments[f] != null ? arguments[f] : {};
      f % 2 ? o(Object(S), !0).forEach(function(p) {
        s(E, p, S[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(S)) : o(Object(S)).forEach(function(p) {
        Object.defineProperty(E, p, Object.getOwnPropertyDescriptor(S, p));
      });
    }
    return E;
  }
  function s(E, f, S) {
    return f in E ? Object.defineProperty(E, f, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : E[f] = S, E;
  }
  function u(E, f) {
    if (!(E instanceof f))
      throw new TypeError("Cannot call a class as a function");
  }
  function c(E, f) {
    for (var S = 0; S < f.length; S++) {
      var p = f[S];
      p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(E, p.key, p);
    }
  }
  function d(E, f, S) {
    return f && c(E.prototype, f), Object.defineProperty(E, "prototype", { writable: !1 }), E;
  }
  function y(E, f) {
    if (typeof f != "function" && f !== null)
      throw new TypeError("Super expression must either be null or a function");
    E.prototype = Object.create(f && f.prototype, { constructor: { value: E, writable: !0, configurable: !0 } }), Object.defineProperty(E, "prototype", { writable: !1 }), f && v(E, f);
  }
  function v(E, f) {
    return v = Object.setPrototypeOf || function(p, b) {
      return p.__proto__ = b, p;
    }, v(E, f);
  }
  function w(E) {
    var f = A();
    return function() {
      var p = k(E), b;
      if (f) {
        var m = k(this).constructor;
        b = Reflect.construct(p, arguments, m);
      } else
        b = p.apply(this, arguments);
      return _(this, b);
    };
  }
  function _(E, f) {
    if (f && (e(f) === "object" || typeof f == "function"))
      return f;
    if (f !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return l(E);
  }
  function l(E) {
    if (E === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return E;
  }
  function A() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function k(E) {
    return k = Object.setPrototypeOf ? Object.getPrototypeOf : function(S) {
      return S.__proto__ || Object.getPrototypeOf(S);
    }, k(E);
  }
  var T = function(f) {
    var S;
    return f.infinite ? S = Math.ceil(f.slideCount / f.slidesToScroll) : S = Math.ceil((f.slideCount - f.slidesToShow) / f.slidesToScroll) + 1, S;
  }, C = /* @__PURE__ */ function(E) {
    y(S, E);
    var f = w(S);
    function S() {
      return u(this, S), f.apply(this, arguments);
    }
    return d(S, [{
      key: "clickHandler",
      value: function(b, m) {
        m.preventDefault(), this.props.clickHandler(b);
      }
    }, {
      key: "render",
      value: function() {
        for (var b = this.props, m = b.onMouseEnter, g = b.onMouseOver, O = b.onMouseLeave, I = b.infinite, D = b.slidesToScroll, L = b.slidesToShow, z = b.slideCount, h = b.currentSlide, Y = T({
          slideCount: z,
          slidesToScroll: D,
          slidesToShow: L,
          infinite: I
        }), U = {
          onMouseEnter: m,
          onMouseOver: g,
          onMouseLeave: O
        }, W = [], N = 0; N < Y; N++) {
          var P = (N + 1) * D - 1, M = I ? P : (0, n.clamp)(P, 0, z - 1), F = M - (D - 1), x = I ? F : (0, n.clamp)(F, 0, z - 1), B = (0, r.default)({
            "slick-active": I ? h >= x && h <= M : h === x
          }), j = {
            message: "dots",
            index: N,
            slidesToScroll: D,
            currentSlide: h
          }, q = this.clickHandler.bind(this, j);
          W = W.concat(/* @__PURE__ */ t.default.createElement("li", {
            key: N,
            className: B
          }, /* @__PURE__ */ t.default.cloneElement(this.props.customPaging(N), {
            onClick: q
          })));
        }
        return /* @__PURE__ */ t.default.cloneElement(this.props.appendDots(W), a({
          className: this.props.dotsClass
        }, U));
      }
    }]), S;
  }(t.default.PureComponent);
  return Jr.Dots = C, Jr;
}
var Kt = {}, uu;
function Am() {
  if (uu) return Kt;
  uu = 1;
  function e(f) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
      return typeof S;
    } : function(S) {
      return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    }, e(f);
  }
  Object.defineProperty(Kt, "__esModule", {
    value: !0
  }), Kt.PrevArrow = Kt.NextArrow = void 0;
  var t = i(Ue), r = i(bo()), n = En();
  function i(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function o() {
    return o = Object.assign || function(f) {
      for (var S = 1; S < arguments.length; S++) {
        var p = arguments[S];
        for (var b in p)
          Object.prototype.hasOwnProperty.call(p, b) && (f[b] = p[b]);
      }
      return f;
    }, o.apply(this, arguments);
  }
  function a(f, S) {
    var p = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(f);
      S && (b = b.filter(function(m) {
        return Object.getOwnPropertyDescriptor(f, m).enumerable;
      })), p.push.apply(p, b);
    }
    return p;
  }
  function s(f) {
    for (var S = 1; S < arguments.length; S++) {
      var p = arguments[S] != null ? arguments[S] : {};
      S % 2 ? a(Object(p), !0).forEach(function(b) {
        u(f, b, p[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p)) : a(Object(p)).forEach(function(b) {
        Object.defineProperty(f, b, Object.getOwnPropertyDescriptor(p, b));
      });
    }
    return f;
  }
  function u(f, S, p) {
    return S in f ? Object.defineProperty(f, S, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : f[S] = p, f;
  }
  function c(f, S) {
    if (!(f instanceof S))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(f, S) {
    for (var p = 0; p < S.length; p++) {
      var b = S[p];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(f, b.key, b);
    }
  }
  function y(f, S, p) {
    return S && d(f.prototype, S), Object.defineProperty(f, "prototype", { writable: !1 }), f;
  }
  function v(f, S) {
    if (typeof S != "function" && S !== null)
      throw new TypeError("Super expression must either be null or a function");
    f.prototype = Object.create(S && S.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), S && w(f, S);
  }
  function w(f, S) {
    return w = Object.setPrototypeOf || function(b, m) {
      return b.__proto__ = m, b;
    }, w(f, S);
  }
  function _(f) {
    var S = k();
    return function() {
      var b = T(f), m;
      if (S) {
        var g = T(this).constructor;
        m = Reflect.construct(b, arguments, g);
      } else
        m = b.apply(this, arguments);
      return l(this, m);
    };
  }
  function l(f, S) {
    if (S && (e(S) === "object" || typeof S == "function"))
      return S;
    if (S !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return A(f);
  }
  function A(f) {
    if (f === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function k() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function T(f) {
    return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
      return p.__proto__ || Object.getPrototypeOf(p);
    }, T(f);
  }
  var C = /* @__PURE__ */ function(f) {
    v(p, f);
    var S = _(p);
    function p() {
      return c(this, p), S.apply(this, arguments);
    }
    return y(p, [{
      key: "clickHandler",
      value: function(m, g) {
        g && g.preventDefault(), this.props.clickHandler(m, g);
      }
    }, {
      key: "render",
      value: function() {
        var m = {
          "slick-arrow": !0,
          "slick-prev": !0
        }, g = this.clickHandler.bind(this, {
          message: "previous"
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (m["slick-disabled"] = !0, g = null);
        var O = {
          key: "0",
          "data-role": "none",
          className: (0, r.default)(m),
          style: {
            display: "block"
          },
          onClick: g
        }, I = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, D;
        return this.props.prevArrow ? D = /* @__PURE__ */ t.default.cloneElement(this.props.prevArrow, s(s({}, O), I)) : D = /* @__PURE__ */ t.default.createElement("button", o({
          key: "0",
          type: "button"
        }, O), " ", "Previous"), D;
      }
    }]), p;
  }(t.default.PureComponent);
  Kt.PrevArrow = C;
  var E = /* @__PURE__ */ function(f) {
    v(p, f);
    var S = _(p);
    function p() {
      return c(this, p), S.apply(this, arguments);
    }
    return y(p, [{
      key: "clickHandler",
      value: function(m, g) {
        g && g.preventDefault(), this.props.clickHandler(m, g);
      }
    }, {
      key: "render",
      value: function() {
        var m = {
          "slick-arrow": !0,
          "slick-next": !0
        }, g = this.clickHandler.bind(this, {
          message: "next"
        });
        (0, n.canGoNext)(this.props) || (m["slick-disabled"] = !0, g = null);
        var O = {
          key: "1",
          "data-role": "none",
          className: (0, r.default)(m),
          style: {
            display: "block"
          },
          onClick: g
        }, I = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, D;
        return this.props.nextArrow ? D = /* @__PURE__ */ t.default.cloneElement(this.props.nextArrow, s(s({}, O), I)) : D = /* @__PURE__ */ t.default.createElement("button", o({
          key: "1",
          type: "button"
        }, O), " ", "Next"), D;
      }
    }]), p;
  }(t.default.PureComponent);
  return Kt.NextArrow = E, Kt;
}
var af = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(i, o) {
      return i[0] === r ? (n = o, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), i = this.__entries__[n];
        return i && i[1];
      }, t.prototype.set = function(r, n) {
        var i = e(this.__entries__, r);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, i = e(n, r);
        ~i && n.splice(i, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var a = o[i];
          r.call(n, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Pa = typeof window < "u" && typeof document < "u" && window.document === document, Vi = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Tm = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Vi) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Om = 2;
function Im(e, t) {
  var r = !1, n = !1, i = 0;
  function o() {
    r && (r = !1, e()), n && s();
  }
  function a() {
    Tm(o);
  }
  function s() {
    var u = Date.now();
    if (r) {
      if (u - i < Om)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    i = u;
  }
  return s;
}
var km = 20, Dm = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Rm = typeof MutationObserver < "u", Pm = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Im(this.refresh.bind(this), km);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Pa || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Rm ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Pa || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, i = Dm.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), sf = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, kr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Vi;
}, cf = Eo(0, 0, 0, 0);
function Gi(e) {
  return parseFloat(e) || 0;
}
function lu(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + Gi(o);
  }, 0);
}
function Bm(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t; n < i.length; n++) {
    var o = i[n], a = e["padding-" + o];
    r[o] = Gi(a);
  }
  return r;
}
function Fm(e) {
  var t = e.getBBox();
  return Eo(0, 0, t.width, t.height);
}
function Nm(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return cf;
  var n = kr(e).getComputedStyle(e), i = Bm(n), o = i.left + i.right, a = i.top + i.bottom, s = Gi(n.width), u = Gi(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= lu(n, "left", "right") + o), Math.round(u + a) !== r && (u -= lu(n, "top", "bottom") + a)), !$m(e)) {
    var c = Math.round(s + o) - t, d = Math.round(u + a) - r;
    Math.abs(c) !== 1 && (s -= c), Math.abs(d) !== 1 && (u -= d);
  }
  return Eo(i.left, i.top, s, u);
}
var Mm = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof kr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof kr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function $m(e) {
  return e === kr(e).document.documentElement;
}
function Lm(e) {
  return Pa ? Mm(e) ? Fm(e) : Nm(e) : cf;
}
function zm(e) {
  var t = e.x, r = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return sf(a, {
    x: t,
    y: r,
    width: n,
    height: i,
    top: r,
    right: t + n,
    bottom: i + r,
    left: t
  }), a;
}
function Eo(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var jm = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Eo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Lm(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Um = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = zm(r);
      sf(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Hm = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new af(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof kr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new jm(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof kr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Um(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), uf = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new af(), lf = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Pm.getInstance(), n = new Hm(t, r, this);
      uf.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  lf.prototype[e] = function() {
    var t;
    return (t = uf.get(this))[e].apply(t, arguments);
  };
});
var Wm = function() {
  return typeof Vi.ResizeObserver < "u" ? Vi.ResizeObserver : lf;
}();
const qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wm
}, Symbol.toStringTag, { value: "Module" })), Vm = /* @__PURE__ */ ct(qm);
var fu;
function Gm() {
  if (fu) return Kr;
  fu = 1, Object.defineProperty(Kr, "__esModule", {
    value: !0
  }), Kr.InnerSlider = void 0;
  var e = c(Ue), t = c(_m()), r = c(wm()), n = c(bo()), i = En(), o = Cm(), a = Sm(), s = Am(), u = c(Vm);
  function c(I) {
    return I && I.__esModule ? I : { default: I };
  }
  function d(I) {
    "@babel/helpers - typeof";
    return d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(D) {
      return typeof D;
    } : function(D) {
      return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
    }, d(I);
  }
  function y() {
    return y = Object.assign || function(I) {
      for (var D = 1; D < arguments.length; D++) {
        var L = arguments[D];
        for (var z in L)
          Object.prototype.hasOwnProperty.call(L, z) && (I[z] = L[z]);
      }
      return I;
    }, y.apply(this, arguments);
  }
  function v(I, D) {
    if (I == null) return {};
    var L = w(I, D), z, h;
    if (Object.getOwnPropertySymbols) {
      var Y = Object.getOwnPropertySymbols(I);
      for (h = 0; h < Y.length; h++)
        z = Y[h], !(D.indexOf(z) >= 0) && Object.prototype.propertyIsEnumerable.call(I, z) && (L[z] = I[z]);
    }
    return L;
  }
  function w(I, D) {
    if (I == null) return {};
    var L = {}, z = Object.keys(I), h, Y;
    for (Y = 0; Y < z.length; Y++)
      h = z[Y], !(D.indexOf(h) >= 0) && (L[h] = I[h]);
    return L;
  }
  function _(I, D) {
    var L = Object.keys(I);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(I);
      D && (z = z.filter(function(h) {
        return Object.getOwnPropertyDescriptor(I, h).enumerable;
      })), L.push.apply(L, z);
    }
    return L;
  }
  function l(I) {
    for (var D = 1; D < arguments.length; D++) {
      var L = arguments[D] != null ? arguments[D] : {};
      D % 2 ? _(Object(L), !0).forEach(function(z) {
        g(I, z, L[z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(L)) : _(Object(L)).forEach(function(z) {
        Object.defineProperty(I, z, Object.getOwnPropertyDescriptor(L, z));
      });
    }
    return I;
  }
  function A(I, D) {
    if (!(I instanceof D))
      throw new TypeError("Cannot call a class as a function");
  }
  function k(I, D) {
    for (var L = 0; L < D.length; L++) {
      var z = D[L];
      z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(I, z.key, z);
    }
  }
  function T(I, D, L) {
    return D && k(I.prototype, D), Object.defineProperty(I, "prototype", { writable: !1 }), I;
  }
  function C(I, D) {
    if (typeof D != "function" && D !== null)
      throw new TypeError("Super expression must either be null or a function");
    I.prototype = Object.create(D && D.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), Object.defineProperty(I, "prototype", { writable: !1 }), D && E(I, D);
  }
  function E(I, D) {
    return E = Object.setPrototypeOf || function(z, h) {
      return z.__proto__ = h, z;
    }, E(I, D);
  }
  function f(I) {
    var D = b();
    return function() {
      var z = m(I), h;
      if (D) {
        var Y = m(this).constructor;
        h = Reflect.construct(z, arguments, Y);
      } else
        h = z.apply(this, arguments);
      return S(this, h);
    };
  }
  function S(I, D) {
    if (D && (d(D) === "object" || typeof D == "function"))
      return D;
    if (D !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return p(I);
  }
  function p(I) {
    if (I === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return I;
  }
  function b() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function m(I) {
    return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(L) {
      return L.__proto__ || Object.getPrototypeOf(L);
    }, m(I);
  }
  function g(I, D, L) {
    return D in I ? Object.defineProperty(I, D, { value: L, enumerable: !0, configurable: !0, writable: !0 }) : I[D] = L, I;
  }
  var O = /* @__PURE__ */ function(I) {
    C(L, I);
    var D = f(L);
    function L(z) {
      var h;
      A(this, L), h = D.call(this, z), g(p(h), "listRefHandler", function(U) {
        return h.list = U;
      }), g(p(h), "trackRefHandler", function(U) {
        return h.track = U;
      }), g(p(h), "adaptHeight", function() {
        if (h.props.adaptiveHeight && h.list) {
          var U = h.list.querySelector('[data-index="'.concat(h.state.currentSlide, '"]'));
          h.list.style.height = (0, i.getHeight)(U) + "px";
        }
      }), g(p(h), "componentDidMount", function() {
        if (h.props.onInit && h.props.onInit(), h.props.lazyLoad) {
          var U = (0, i.getOnDemandLazySlides)(l(l({}, h.props), h.state));
          U.length > 0 && (h.setState(function(N) {
            return {
              lazyLoadedList: N.lazyLoadedList.concat(U)
            };
          }), h.props.onLazyLoad && h.props.onLazyLoad(U));
        }
        var W = l({
          listRef: h.list,
          trackRef: h.track
        }, h.props);
        h.updateState(W, !0, function() {
          h.adaptHeight(), h.props.autoplay && h.autoPlay("update");
        }), h.props.lazyLoad === "progressive" && (h.lazyLoadTimer = setInterval(h.progressiveLazyLoad, 1e3)), h.ro = new u.default(function() {
          h.state.animating ? (h.onWindowResized(!1), h.callbackTimers.push(setTimeout(function() {
            return h.onWindowResized();
          }, h.props.speed))) : h.onWindowResized();
        }), h.ro.observe(h.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(N) {
          N.onfocus = h.props.pauseOnFocus ? h.onSlideFocus : null, N.onblur = h.props.pauseOnFocus ? h.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", h.onWindowResized) : window.attachEvent("onresize", h.onWindowResized);
      }), g(p(h), "componentWillUnmount", function() {
        h.animationEndCallback && clearTimeout(h.animationEndCallback), h.lazyLoadTimer && clearInterval(h.lazyLoadTimer), h.callbackTimers.length && (h.callbackTimers.forEach(function(U) {
          return clearTimeout(U);
        }), h.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", h.onWindowResized) : window.detachEvent("onresize", h.onWindowResized), h.autoplayTimer && clearInterval(h.autoplayTimer), h.ro.disconnect();
      }), g(p(h), "componentDidUpdate", function(U) {
        if (h.checkImagesLoad(), h.props.onReInit && h.props.onReInit(), h.props.lazyLoad) {
          var W = (0, i.getOnDemandLazySlides)(l(l({}, h.props), h.state));
          W.length > 0 && (h.setState(function(M) {
            return {
              lazyLoadedList: M.lazyLoadedList.concat(W)
            };
          }), h.props.onLazyLoad && h.props.onLazyLoad(W));
        }
        h.adaptHeight();
        var N = l(l({
          listRef: h.list,
          trackRef: h.track
        }, h.props), h.state), P = h.didPropsChange(U);
        P && h.updateState(N, P, function() {
          h.state.currentSlide >= e.default.Children.count(h.props.children) && h.changeSlide({
            message: "index",
            index: e.default.Children.count(h.props.children) - h.props.slidesToShow,
            currentSlide: h.state.currentSlide
          }), h.props.autoplay ? h.autoPlay("update") : h.pause("paused");
        });
      }), g(p(h), "onWindowResized", function(U) {
        h.debouncedResize && h.debouncedResize.cancel(), h.debouncedResize = (0, r.default)(function() {
          return h.resizeWindow(U);
        }, 50), h.debouncedResize();
      }), g(p(h), "resizeWindow", function() {
        var U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, W = !!(h.track && h.track.node);
        if (W) {
          var N = l(l({
            listRef: h.list,
            trackRef: h.track
          }, h.props), h.state);
          h.updateState(N, U, function() {
            h.props.autoplay ? h.autoPlay("update") : h.pause("paused");
          }), h.setState({
            animating: !1
          }), clearTimeout(h.animationEndCallback), delete h.animationEndCallback;
        }
      }), g(p(h), "updateState", function(U, W, N) {
        var P = (0, i.initializedState)(U);
        U = l(l(l({}, U), P), {}, {
          slideIndex: P.currentSlide
        });
        var M = (0, i.getTrackLeft)(U);
        U = l(l({}, U), {}, {
          left: M
        });
        var F = (0, i.getTrackCSS)(U);
        (W || e.default.Children.count(h.props.children) !== e.default.Children.count(U.children)) && (P.trackStyle = F), h.setState(P, N);
      }), g(p(h), "ssrInit", function() {
        if (h.props.variableWidth) {
          var U = 0, W = 0, N = [], P = (0, i.getPreClones)(l(l(l({}, h.props), h.state), {}, {
            slideCount: h.props.children.length
          })), M = (0, i.getPostClones)(l(l(l({}, h.props), h.state), {}, {
            slideCount: h.props.children.length
          }));
          h.props.children.forEach(function(ie) {
            N.push(ie.props.style.width), U += ie.props.style.width;
          });
          for (var F = 0; F < P; F++)
            W += N[N.length - 1 - F], U += N[N.length - 1 - F];
          for (var x = 0; x < M; x++)
            U += N[x];
          for (var B = 0; B < h.state.currentSlide; B++)
            W += N[B];
          var j = {
            width: U + "px",
            left: -W + "px"
          };
          if (h.props.centerMode) {
            var q = "".concat(N[h.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(q, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var $ = e.default.Children.count(h.props.children), V = l(l(l({}, h.props), h.state), {}, {
          slideCount: $
        }), G = (0, i.getPreClones)(V) + (0, i.getPostClones)(V) + $, X = 100 / h.props.slidesToShow * G, H = 100 / G, te = -H * ((0, i.getPreClones)(V) + h.state.currentSlide) * X / 100;
        h.props.centerMode && (te += (100 - H * X / 100) / 2);
        var ee = {
          width: X + "%",
          left: te + "%"
        };
        return {
          slideWidth: H + "%",
          trackStyle: ee
        };
      }), g(p(h), "checkImagesLoad", function() {
        var U = h.list && h.list.querySelectorAll && h.list.querySelectorAll(".slick-slide img") || [], W = U.length, N = 0;
        Array.prototype.forEach.call(U, function(P) {
          var M = function() {
            return ++N && N >= W && h.onWindowResized();
          };
          if (!P.onclick)
            P.onclick = function() {
              return P.parentNode.focus();
            };
          else {
            var F = P.onclick;
            P.onclick = function() {
              F(), P.parentNode.focus();
            };
          }
          P.onload || (h.props.lazyLoad ? P.onload = function() {
            h.adaptHeight(), h.callbackTimers.push(setTimeout(h.onWindowResized, h.props.speed));
          } : (P.onload = M, P.onerror = function() {
            M(), h.props.onLazyLoadError && h.props.onLazyLoadError();
          }));
        });
      }), g(p(h), "progressiveLazyLoad", function() {
        for (var U = [], W = l(l({}, h.props), h.state), N = h.state.currentSlide; N < h.state.slideCount + (0, i.getPostClones)(W); N++)
          if (h.state.lazyLoadedList.indexOf(N) < 0) {
            U.push(N);
            break;
          }
        for (var P = h.state.currentSlide - 1; P >= -(0, i.getPreClones)(W); P--)
          if (h.state.lazyLoadedList.indexOf(P) < 0) {
            U.push(P);
            break;
          }
        U.length > 0 ? (h.setState(function(M) {
          return {
            lazyLoadedList: M.lazyLoadedList.concat(U)
          };
        }), h.props.onLazyLoad && h.props.onLazyLoad(U)) : h.lazyLoadTimer && (clearInterval(h.lazyLoadTimer), delete h.lazyLoadTimer);
      }), g(p(h), "slideHandler", function(U) {
        var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, N = h.props, P = N.asNavFor, M = N.beforeChange, F = N.onLazyLoad, x = N.speed, B = N.afterChange, j = h.state.currentSlide, q = (0, i.slideHandler)(l(l(l({
          index: U
        }, h.props), h.state), {}, {
          trackRef: h.track,
          useCSS: h.props.useCSS && !W
        })), $ = q.state, V = q.nextState;
        if ($) {
          M && M(j, $.currentSlide);
          var G = $.lazyLoadedList.filter(function(X) {
            return h.state.lazyLoadedList.indexOf(X) < 0;
          });
          F && G.length > 0 && F(G), !h.props.waitForAnimate && h.animationEndCallback && (clearTimeout(h.animationEndCallback), B && B(j), delete h.animationEndCallback), h.setState($, function() {
            P && h.asNavForIndex !== U && (h.asNavForIndex = U, P.innerSlider.slideHandler(U)), V && (h.animationEndCallback = setTimeout(function() {
              var X = V.animating, H = v(V, ["animating"]);
              h.setState(H, function() {
                h.callbackTimers.push(setTimeout(function() {
                  return h.setState({
                    animating: X
                  });
                }, 10)), B && B($.currentSlide), delete h.animationEndCallback;
              });
            }, x));
          });
        }
      }), g(p(h), "changeSlide", function(U) {
        var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, N = l(l({}, h.props), h.state), P = (0, i.changeSlide)(N, U);
        if (!(P !== 0 && !P) && (W === !0 ? h.slideHandler(P, W) : h.slideHandler(P), h.props.autoplay && h.autoPlay("update"), h.props.focusOnSelect)) {
          var M = h.list.querySelectorAll(".slick-current");
          M[0] && M[0].focus();
        }
      }), g(p(h), "clickHandler", function(U) {
        h.clickable === !1 && (U.stopPropagation(), U.preventDefault()), h.clickable = !0;
      }), g(p(h), "keyHandler", function(U) {
        var W = (0, i.keyHandler)(U, h.props.accessibility, h.props.rtl);
        W !== "" && h.changeSlide({
          message: W
        });
      }), g(p(h), "selectHandler", function(U) {
        h.changeSlide(U);
      }), g(p(h), "disableBodyScroll", function() {
        var U = function(N) {
          N = N || window.event, N.preventDefault && N.preventDefault(), N.returnValue = !1;
        };
        window.ontouchmove = U;
      }), g(p(h), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), g(p(h), "swipeStart", function(U) {
        h.props.verticalSwiping && h.disableBodyScroll();
        var W = (0, i.swipeStart)(U, h.props.swipe, h.props.draggable);
        W !== "" && h.setState(W);
      }), g(p(h), "swipeMove", function(U) {
        var W = (0, i.swipeMove)(U, l(l(l({}, h.props), h.state), {}, {
          trackRef: h.track,
          listRef: h.list,
          slideIndex: h.state.currentSlide
        }));
        W && (W.swiping && (h.clickable = !1), h.setState(W));
      }), g(p(h), "swipeEnd", function(U) {
        var W = (0, i.swipeEnd)(U, l(l(l({}, h.props), h.state), {}, {
          trackRef: h.track,
          listRef: h.list,
          slideIndex: h.state.currentSlide
        }));
        if (W) {
          var N = W.triggerSlideHandler;
          delete W.triggerSlideHandler, h.setState(W), N !== void 0 && (h.slideHandler(N), h.props.verticalSwiping && h.enableBodyScroll());
        }
      }), g(p(h), "touchEnd", function(U) {
        h.swipeEnd(U), h.clickable = !0;
      }), g(p(h), "slickPrev", function() {
        h.callbackTimers.push(setTimeout(function() {
          return h.changeSlide({
            message: "previous"
          });
        }, 0));
      }), g(p(h), "slickNext", function() {
        h.callbackTimers.push(setTimeout(function() {
          return h.changeSlide({
            message: "next"
          });
        }, 0));
      }), g(p(h), "slickGoTo", function(U) {
        var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (U = Number(U), isNaN(U)) return "";
        h.callbackTimers.push(setTimeout(function() {
          return h.changeSlide({
            message: "index",
            index: U,
            currentSlide: h.state.currentSlide
          }, W);
        }, 0));
      }), g(p(h), "play", function() {
        var U;
        if (h.props.rtl)
          U = h.state.currentSlide - h.props.slidesToScroll;
        else if ((0, i.canGoNext)(l(l({}, h.props), h.state)))
          U = h.state.currentSlide + h.props.slidesToScroll;
        else
          return !1;
        h.slideHandler(U);
      }), g(p(h), "autoPlay", function(U) {
        h.autoplayTimer && clearInterval(h.autoplayTimer);
        var W = h.state.autoplaying;
        if (U === "update") {
          if (W === "hovered" || W === "focused" || W === "paused")
            return;
        } else if (U === "leave") {
          if (W === "paused" || W === "focused")
            return;
        } else if (U === "blur" && (W === "paused" || W === "hovered"))
          return;
        h.autoplayTimer = setInterval(h.play, h.props.autoplaySpeed + 50), h.setState({
          autoplaying: "playing"
        });
      }), g(p(h), "pause", function(U) {
        h.autoplayTimer && (clearInterval(h.autoplayTimer), h.autoplayTimer = null);
        var W = h.state.autoplaying;
        U === "paused" ? h.setState({
          autoplaying: "paused"
        }) : U === "focused" ? (W === "hovered" || W === "playing") && h.setState({
          autoplaying: "focused"
        }) : W === "playing" && h.setState({
          autoplaying: "hovered"
        });
      }), g(p(h), "onDotsOver", function() {
        return h.props.autoplay && h.pause("hovered");
      }), g(p(h), "onDotsLeave", function() {
        return h.props.autoplay && h.state.autoplaying === "hovered" && h.autoPlay("leave");
      }), g(p(h), "onTrackOver", function() {
        return h.props.autoplay && h.pause("hovered");
      }), g(p(h), "onTrackLeave", function() {
        return h.props.autoplay && h.state.autoplaying === "hovered" && h.autoPlay("leave");
      }), g(p(h), "onSlideFocus", function() {
        return h.props.autoplay && h.pause("focused");
      }), g(p(h), "onSlideBlur", function() {
        return h.props.autoplay && h.state.autoplaying === "focused" && h.autoPlay("blur");
      }), g(p(h), "render", function() {
        var U = (0, n.default)("slick-slider", h.props.className, {
          "slick-vertical": h.props.vertical,
          "slick-initialized": !0
        }), W = l(l({}, h.props), h.state), N = (0, i.extractObject)(W, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), P = h.props.pauseOnHover;
        N = l(l({}, N), {}, {
          onMouseEnter: P ? h.onTrackOver : null,
          onMouseLeave: P ? h.onTrackLeave : null,
          onMouseOver: P ? h.onTrackOver : null,
          focusOnSelect: h.props.focusOnSelect && h.clickable ? h.selectHandler : null
        });
        var M;
        if (h.props.dots === !0 && h.state.slideCount >= h.props.slidesToShow) {
          var F = (0, i.extractObject)(W, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), x = h.props.pauseOnDotsHover;
          F = l(l({}, F), {}, {
            clickHandler: h.changeSlide,
            onMouseEnter: x ? h.onDotsLeave : null,
            onMouseOver: x ? h.onDotsOver : null,
            onMouseLeave: x ? h.onDotsLeave : null
          }), M = /* @__PURE__ */ e.default.createElement(a.Dots, F);
        }
        var B, j, q = (0, i.extractObject)(W, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        q.clickHandler = h.changeSlide, h.props.arrows && (B = /* @__PURE__ */ e.default.createElement(s.PrevArrow, q), j = /* @__PURE__ */ e.default.createElement(s.NextArrow, q));
        var $ = null;
        h.props.vertical && ($ = {
          height: h.state.listHeight
        });
        var V = null;
        h.props.vertical === !1 ? h.props.centerMode === !0 && (V = {
          padding: "0px " + h.props.centerPadding
        }) : h.props.centerMode === !0 && (V = {
          padding: h.props.centerPadding + " 0px"
        });
        var G = l(l({}, $), V), X = h.props.touchMove, H = {
          className: "slick-list",
          style: G,
          onClick: h.clickHandler,
          onMouseDown: X ? h.swipeStart : null,
          onMouseMove: h.state.dragging && X ? h.swipeMove : null,
          onMouseUp: X ? h.swipeEnd : null,
          onMouseLeave: h.state.dragging && X ? h.swipeEnd : null,
          onTouchStart: X ? h.swipeStart : null,
          onTouchMove: h.state.dragging && X ? h.swipeMove : null,
          onTouchEnd: X ? h.touchEnd : null,
          onTouchCancel: h.state.dragging && X ? h.swipeEnd : null,
          onKeyDown: h.props.accessibility ? h.keyHandler : null
        }, te = {
          className: U,
          dir: "ltr",
          style: h.props.style
        };
        return h.props.unslick && (H = {
          className: "slick-list"
        }, te = {
          className: U
        }), /* @__PURE__ */ e.default.createElement("div", te, h.props.unslick ? "" : B, /* @__PURE__ */ e.default.createElement("div", y({
          ref: h.listRefHandler
        }, H), /* @__PURE__ */ e.default.createElement(o.Track, y({
          ref: h.trackRefHandler
        }, N), h.props.children)), h.props.unslick ? "" : j, h.props.unslick ? "" : M);
      }), h.list = null, h.track = null, h.state = l(l({}, t.default), {}, {
        currentSlide: h.props.initialSlide,
        slideCount: e.default.Children.count(h.props.children)
      }), h.callbackTimers = [], h.clickable = !0, h.debouncedResize = null;
      var Y = h.ssrInit();
      return h.state = l(l({}, h.state), Y), h;
    }
    return T(L, [{
      key: "didPropsChange",
      value: function(h) {
        for (var Y = !1, U = 0, W = Object.keys(this.props); U < W.length; U++) {
          var N = W[U];
          if (!h.hasOwnProperty(N)) {
            Y = !0;
            break;
          }
          if (!(d(h[N]) === "object" || typeof h[N] == "function") && h[N] !== this.props[N]) {
            Y = !0;
            break;
          }
        }
        return Y || e.default.Children.count(this.props.children) !== e.default.Children.count(h.children);
      }
    }]), L;
  }(e.default.Component);
  return Kr.InnerSlider = O, Kr;
}
var Qo, du;
function Ym() {
  if (du) return Qo;
  du = 1;
  var e = function(t) {
    return t.replace(/[A-Z]/g, function(r) {
      return "-" + r.toLowerCase();
    }).toLowerCase();
  };
  return Qo = e, Qo;
}
var Zo, pu;
function Km() {
  if (pu) return Zo;
  pu = 1;
  var e = Ym(), t = function(i) {
    var o = /[height|width]$/;
    return o.test(i);
  }, r = function(i) {
    var o = "", a = Object.keys(i);
    return a.forEach(function(s, u) {
      var c = i[s];
      s = e(s), t(s) && typeof c == "number" && (c = c + "px"), c === !0 ? o += s : c === !1 ? o += "not " + s : o += "(" + s + ": " + c + ")", u < a.length - 1 && (o += " and ");
    }), o;
  }, n = function(i) {
    var o = "";
    return typeof i == "string" ? i : i instanceof Array ? (i.forEach(function(a, s) {
      o += r(a), s < i.length - 1 && (o += ", ");
    }), o) : r(i);
  };
  return Zo = n, Zo;
}
var ea = {}, hu;
function Xm() {
  return hu || (hu = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var t = r(Ue);
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var n = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function(a) {
        return /* @__PURE__ */ t.default.createElement("ul", {
          style: {
            display: "block"
          }
        }, a);
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: "50px",
      className: "",
      cssEase: "ease",
      customPaging: function(a) {
        return /* @__PURE__ */ t.default.createElement("button", null, a + 1);
      },
      dots: !1,
      dotsClass: "slick-dots",
      draggable: !0,
      easing: "linear",
      edgeFriction: 0.35,
      fade: !1,
      focusOnSelect: !1,
      infinite: !0,
      initialSlide: 0,
      lazyLoad: null,
      nextArrow: null,
      onEdge: null,
      onInit: null,
      onLazyLoadError: null,
      onReInit: null,
      pauseOnDotsHover: !1,
      pauseOnFocus: !1,
      pauseOnHover: !0,
      prevArrow: null,
      responsive: null,
      rows: 1,
      rtl: !1,
      slide: "div",
      slidesPerRow: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      swipe: !0,
      swipeEvent: null,
      swipeToSlide: !1,
      touchMove: !0,
      touchThreshold: 5,
      useCSS: !0,
      useTransform: !0,
      variableWidth: !1,
      vertical: !1,
      waitForAnimate: !0
    }, i = n;
    e.default = i;
  }(ea)), ea;
}
var ta, vu;
function Jm() {
  if (vu) return ta;
  vu = 1;
  function e(t) {
    this.options = t, !t.deferSetup && this.setup();
  }
  return e.prototype = {
    constructor: e,
    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup: function() {
      this.options.setup && this.options.setup(), this.initialised = !0;
    },
    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on: function() {
      !this.initialised && this.setup(), this.options.match && this.options.match();
    },
    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off: function() {
      this.options.unmatch && this.options.unmatch();
    },
    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy: function() {
      this.options.destroy ? this.options.destroy() : this.off();
    },
    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals: function(t) {
      return this.options === t || this.options.match === t;
    }
  }, ta = e, ta;
}
var ra, xu;
function ff() {
  if (xu) return ra;
  xu = 1;
  function e(n, i) {
    var o = 0, a = n.length, s;
    for (o; o < a && (s = i(n[o], o), s !== !1); o++)
      ;
  }
  function t(n) {
    return Object.prototype.toString.apply(n) === "[object Array]";
  }
  function r(n) {
    return typeof n == "function";
  }
  return ra = {
    isFunction: r,
    isArray: t,
    each: e
  }, ra;
}
var na, gu;
function Qm() {
  if (gu) return na;
  gu = 1;
  var e = Jm(), t = ff().each;
  function r(n, i) {
    this.query = n, this.isUnconditional = i, this.handlers = [], this.mql = window.matchMedia(n);
    var o = this;
    this.listener = function(a) {
      o.mql = a.currentTarget || a, o.assess();
    }, this.mql.addListener(this.listener);
  }
  return r.prototype = {
    constuctor: r,
    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler: function(n) {
      var i = new e(n);
      this.handlers.push(i), this.matches() && i.on();
    },
    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler: function(n) {
      var i = this.handlers;
      t(i, function(o, a) {
        if (o.equals(n))
          return o.destroy(), !i.splice(a, 1);
      });
    },
    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches: function() {
      return this.mql.matches || this.isUnconditional;
    },
    /**
     * Clears all handlers and unbinds events
     */
    clear: function() {
      t(this.handlers, function(n) {
        n.destroy();
      }), this.mql.removeListener(this.listener), this.handlers.length = 0;
    },
    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess: function() {
      var n = this.matches() ? "on" : "off";
      t(this.handlers, function(i) {
        i[n]();
      });
    }
  }, na = r, na;
}
var ia, mu;
function Zm() {
  if (mu) return ia;
  mu = 1;
  var e = Qm(), t = ff(), r = t.each, n = t.isFunction, i = t.isArray;
  function o() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  return o.prototype = {
    constructor: o,
    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register: function(a, s, u) {
      var c = this.queries, d = u && this.browserIsIncapable;
      return c[a] || (c[a] = new e(a, d)), n(s) && (s = { match: s }), i(s) || (s = [s]), r(s, function(y) {
        n(y) && (y = { match: y }), c[a].addHandler(y);
      }), this;
    },
    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister: function(a, s) {
      var u = this.queries[a];
      return u && (s ? u.removeHandler(s) : (u.clear(), delete this.queries[a])), this;
    }
  }, ia = o, ia;
}
var oa, yu;
function e1() {
  if (yu) return oa;
  yu = 1;
  var e = Zm();
  return oa = new e(), oa;
}
var bu;
function t1() {
  return bu || (bu = 1, function(e) {
    function t(b) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
        return typeof m;
      } : function(m) {
        return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
      }, t(b);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = s(Ue), n = Gm(), i = s(Km()), o = s(Xm()), a = En();
    function s(b) {
      return b && b.__esModule ? b : { default: b };
    }
    function u() {
      return u = Object.assign || function(b) {
        for (var m = 1; m < arguments.length; m++) {
          var g = arguments[m];
          for (var O in g)
            Object.prototype.hasOwnProperty.call(g, O) && (b[O] = g[O]);
        }
        return b;
      }, u.apply(this, arguments);
    }
    function c(b, m) {
      var g = Object.keys(b);
      if (Object.getOwnPropertySymbols) {
        var O = Object.getOwnPropertySymbols(b);
        m && (O = O.filter(function(I) {
          return Object.getOwnPropertyDescriptor(b, I).enumerable;
        })), g.push.apply(g, O);
      }
      return g;
    }
    function d(b) {
      for (var m = 1; m < arguments.length; m++) {
        var g = arguments[m] != null ? arguments[m] : {};
        m % 2 ? c(Object(g), !0).forEach(function(O) {
          f(b, O, g[O]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(g)) : c(Object(g)).forEach(function(O) {
          Object.defineProperty(b, O, Object.getOwnPropertyDescriptor(g, O));
        });
      }
      return b;
    }
    function y(b, m) {
      if (!(b instanceof m))
        throw new TypeError("Cannot call a class as a function");
    }
    function v(b, m) {
      for (var g = 0; g < m.length; g++) {
        var O = m[g];
        O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(b, O.key, O);
      }
    }
    function w(b, m, g) {
      return m && v(b.prototype, m), Object.defineProperty(b, "prototype", { writable: !1 }), b;
    }
    function _(b, m) {
      if (typeof m != "function" && m !== null)
        throw new TypeError("Super expression must either be null or a function");
      b.prototype = Object.create(m && m.prototype, { constructor: { value: b, writable: !0, configurable: !0 } }), Object.defineProperty(b, "prototype", { writable: !1 }), m && l(b, m);
    }
    function l(b, m) {
      return l = Object.setPrototypeOf || function(O, I) {
        return O.__proto__ = I, O;
      }, l(b, m);
    }
    function A(b) {
      var m = C();
      return function() {
        var O = E(b), I;
        if (m) {
          var D = E(this).constructor;
          I = Reflect.construct(O, arguments, D);
        } else
          I = O.apply(this, arguments);
        return k(this, I);
      };
    }
    function k(b, m) {
      if (m && (t(m) === "object" || typeof m == "function"))
        return m;
      if (m !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return T(b);
    }
    function T(b) {
      if (b === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return b;
    }
    function C() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function E(b) {
      return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(g) {
        return g.__proto__ || Object.getPrototypeOf(g);
      }, E(b);
    }
    function f(b, m, g) {
      return m in b ? Object.defineProperty(b, m, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : b[m] = g, b;
    }
    var S = (0, a.canUseDOM)() && e1(), p = /* @__PURE__ */ function(b) {
      _(g, b);
      var m = A(g);
      function g(O) {
        var I;
        return y(this, g), I = m.call(this, O), f(T(I), "innerSliderRefHandler", function(D) {
          return I.innerSlider = D;
        }), f(T(I), "slickPrev", function() {
          return I.innerSlider.slickPrev();
        }), f(T(I), "slickNext", function() {
          return I.innerSlider.slickNext();
        }), f(T(I), "slickGoTo", function(D) {
          var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return I.innerSlider.slickGoTo(D, L);
        }), f(T(I), "slickPause", function() {
          return I.innerSlider.pause("paused");
        }), f(T(I), "slickPlay", function() {
          return I.innerSlider.autoPlay("play");
        }), I.state = {
          breakpoint: null
        }, I._responsiveMediaHandlers = [], I;
      }
      return w(g, [{
        key: "media",
        value: function(I, D) {
          S.register(I, D), this._responsiveMediaHandlers.push({
            query: I,
            handler: D
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var I = this;
          if (this.props.responsive) {
            var D = this.props.responsive.map(function(z) {
              return z.breakpoint;
            });
            D.sort(function(z, h) {
              return z - h;
            }), D.forEach(function(z, h) {
              var Y;
              h === 0 ? Y = (0, i.default)({
                minWidth: 0,
                maxWidth: z
              }) : Y = (0, i.default)({
                minWidth: D[h - 1] + 1,
                maxWidth: z
              }), (0, a.canUseDOM)() && I.media(Y, function() {
                I.setState({
                  breakpoint: z
                });
              });
            });
            var L = (0, i.default)({
              minWidth: D.slice(-1)[0]
            });
            (0, a.canUseDOM)() && this.media(L, function() {
              I.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._responsiveMediaHandlers.forEach(function(I) {
            S.unregister(I.query, I.handler);
          });
        }
      }, {
        key: "render",
        value: function() {
          var I = this, D, L;
          this.state.breakpoint ? (L = this.props.responsive.filter(function(x) {
            return x.breakpoint === I.state.breakpoint;
          }), D = L[0].settings === "unslick" ? "unslick" : d(d(d({}, o.default), this.props), L[0].settings)) : D = d(d({}, o.default), this.props), D.centerMode && (D.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(D.slidesToScroll)), D.slidesToScroll = 1), D.fade && (D.slidesToShow > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(D.slidesToShow)), D.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(D.slidesToScroll)), D.slidesToShow = 1, D.slidesToScroll = 1);
          var z = r.default.Children.toArray(this.props.children);
          z = z.filter(function(x) {
            return typeof x == "string" ? !!x.trim() : !!x;
          }), D.variableWidth && (D.rows > 1 || D.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), D.variableWidth = !1);
          for (var h = [], Y = null, U = 0; U < z.length; U += D.rows * D.slidesPerRow) {
            for (var W = [], N = U; N < U + D.rows * D.slidesPerRow; N += D.slidesPerRow) {
              for (var P = [], M = N; M < N + D.slidesPerRow && (D.variableWidth && z[M].props.style && (Y = z[M].props.style.width), !(M >= z.length)); M += 1)
                P.push(/* @__PURE__ */ r.default.cloneElement(z[M], {
                  key: 100 * U + 10 * N + M,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / D.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              W.push(/* @__PURE__ */ r.default.createElement("div", {
                key: 10 * U + N
              }, P));
            }
            D.variableWidth ? h.push(/* @__PURE__ */ r.default.createElement("div", {
              key: U,
              style: {
                width: Y
              }
            }, W)) : h.push(/* @__PURE__ */ r.default.createElement("div", {
              key: U
            }, W));
          }
          if (D === "unslick") {
            var F = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ r.default.createElement("div", {
              className: F
            }, z);
          } else h.length <= D.slidesToShow && (D.unslick = !0);
          return /* @__PURE__ */ r.default.createElement(n.InnerSlider, u({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, D), h);
        }
      }]), g;
    }(r.default.Component);
    e.default = p;
  }(Yo)), Yo;
}
var Eu;
function r1() {
  return Eu || (Eu = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var t = r(t1());
    function r(i) {
      return i && i.__esModule ? i : { default: i };
    }
    var n = t.default;
    e.default = n;
  }(Go)), Go;
}
var n1 = r1();
const i1 = /* @__PURE__ */ $r(n1);
var Qr = {}, aa = {};
const o1 = /* @__PURE__ */ ct(Bg);
var _u;
function df() {
  return _u || (_u = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = o1;
  }(aa)), aa;
}
var wu;
function a1() {
  if (wu) return Qr;
  wu = 1;
  var e = mo();
  Object.defineProperty(Qr, "__esModule", {
    value: !0
  }), Qr.default = void 0;
  var t = e(/* @__PURE__ */ df()), r = il;
  return Qr.default = (0, t.default)(/* @__PURE__ */ (0, r.jsx)("path", {
    d: "M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
  }), "ArrowBackIos"), Qr;
}
var s1 = /* @__PURE__ */ a1();
const c1 = /* @__PURE__ */ $r(s1);
var Zr = {}, Cu;
function u1() {
  if (Cu) return Zr;
  Cu = 1;
  var e = mo();
  Object.defineProperty(Zr, "__esModule", {
    value: !0
  }), Zr.default = void 0;
  var t = e(/* @__PURE__ */ df()), r = il;
  return Zr.default = (0, t.default)(/* @__PURE__ */ (0, r.jsx)("path", {
    d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
  }), "ArrowForwardIos"), Zr;
}
var l1 = /* @__PURE__ */ u1();
const f1 = /* @__PURE__ */ $r(l1);
var Ke = function() {
  return Ke = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, Ke.apply(this, arguments);
};
function Dr(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, o; n < i; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function d1(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var p1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, h1 = /* @__PURE__ */ d1(
  function(e) {
    return p1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ae = "-ms-", nn = "-moz-", me = "-webkit-", pf = "comm", _o = "rule", ys = "decl", v1 = "@import", hf = "@keyframes", x1 = "@layer", vf = Math.abs, bs = String.fromCharCode, Ba = Object.assign;
function g1(e, t) {
  return Me(e, 0) ^ 45 ? (((t << 2 ^ Me(e, 0)) << 2 ^ Me(e, 1)) << 2 ^ Me(e, 2)) << 2 ^ Me(e, 3) : 0;
}
function xf(e) {
  return e.trim();
}
function Et(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, r) {
  return e.replace(t, r);
}
function Vn(e, t, r) {
  return e.indexOf(t, r);
}
function Me(e, t) {
  return e.charCodeAt(t) | 0;
}
function Rr(e, t, r) {
  return e.slice(t, r);
}
function ft(e) {
  return e.length;
}
function gf(e) {
  return e.length;
}
function tn(e, t) {
  return t.push(e), e;
}
function m1(e, t) {
  return e.map(t).join("");
}
function Su(e, t) {
  return e.filter(function(r) {
    return !Et(r, t);
  });
}
var wo = 1, Pr = 1, mf = 0, ot = 0, Ne = 0, Hr = "";
function Co(e, t, r, n, i, o, a, s) {
  return { value: e, root: t, parent: r, type: n, props: i, children: o, line: wo, column: Pr, length: a, return: "", siblings: s };
}
function Pt(e, t) {
  return Ba(Co("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function br(e) {
  for (; e.root; )
    e = Pt(e.root, { children: [e] });
  tn(e, e.siblings);
}
function y1() {
  return Ne;
}
function b1() {
  return Ne = ot > 0 ? Me(Hr, --ot) : 0, Pr--, Ne === 10 && (Pr = 1, wo--), Ne;
}
function st() {
  return Ne = ot < mf ? Me(Hr, ot++) : 0, Pr++, Ne === 10 && (Pr = 1, wo++), Ne;
}
function rr() {
  return Me(Hr, ot);
}
function Gn() {
  return ot;
}
function So(e, t) {
  return Rr(Hr, e, t);
}
function Fa(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function E1(e) {
  return wo = Pr = 1, mf = ft(Hr = e), ot = 0, [];
}
function _1(e) {
  return Hr = "", e;
}
function sa(e) {
  return xf(So(ot - 1, Na(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function w1(e) {
  for (; (Ne = rr()) && Ne < 33; )
    st();
  return Fa(e) > 2 || Fa(Ne) > 3 ? "" : " ";
}
function C1(e, t) {
  for (; --t && st() && !(Ne < 48 || Ne > 102 || Ne > 57 && Ne < 65 || Ne > 70 && Ne < 97); )
    ;
  return So(e, Gn() + (t < 6 && rr() == 32 && st() == 32));
}
function Na(e) {
  for (; st(); )
    switch (Ne) {
      // ] ) " '
      case e:
        return ot;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Na(Ne);
        break;
      // (
      case 40:
        e === 41 && Na(e);
        break;
      // \
      case 92:
        st();
        break;
    }
  return ot;
}
function S1(e, t) {
  for (; st() && e + Ne !== 57; )
    if (e + Ne === 84 && rr() === 47)
      break;
  return "/*" + So(t, ot - 1) + "*" + bs(e === 47 ? e : st());
}
function A1(e) {
  for (; !Fa(rr()); )
    st();
  return So(e, ot);
}
function T1(e) {
  return _1(Yn("", null, null, null, [""], e = E1(e), 0, [0], e));
}
function Yn(e, t, r, n, i, o, a, s, u) {
  for (var c = 0, d = 0, y = a, v = 0, w = 0, _ = 0, l = 1, A = 1, k = 1, T = 0, C = "", E = i, f = o, S = n, p = C; A; )
    switch (_ = T, T = st()) {
      // (
      case 40:
        if (_ != 108 && Me(p, y - 1) == 58) {
          Vn(p += se(sa(T), "&", "&\f"), "&\f", vf(c ? s[c - 1] : 0)) != -1 && (k = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        p += sa(T);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        p += w1(_);
        break;
      // \
      case 92:
        p += C1(Gn() - 1, 7);
        continue;
      // /
      case 47:
        switch (rr()) {
          case 42:
          case 47:
            tn(O1(S1(st(), Gn()), t, r, u), u);
            break;
          default:
            p += "/";
        }
        break;
      // {
      case 123 * l:
        s[c++] = ft(p) * k;
      // } ; \0
      case 125 * l:
      case 59:
      case 0:
        switch (T) {
          // \0 }
          case 0:
          case 125:
            A = 0;
          // ;
          case 59 + d:
            k == -1 && (p = se(p, /\f/g, "")), w > 0 && ft(p) - y && tn(w > 32 ? Tu(p + ";", n, r, y - 1, u) : Tu(se(p, " ", "") + ";", n, r, y - 2, u), u);
            break;
          // @ ;
          case 59:
            p += ";";
          // { rule/at-rule
          default:
            if (tn(S = Au(p, t, r, c, d, i, s, C, E = [], f = [], y, o), o), T === 123)
              if (d === 0)
                Yn(p, t, S, S, E, o, y, s, f);
              else
                switch (v === 99 && Me(p, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Yn(e, S, S, n && tn(Au(e, S, S, 0, 0, i, s, C, i, E = [], y, f), f), i, f, y, s, n ? E : f);
                    break;
                  default:
                    Yn(p, S, S, S, [""], f, 0, s, f);
                }
        }
        c = d = w = 0, l = k = 1, C = p = "", y = a;
        break;
      // :
      case 58:
        y = 1 + ft(p), w = _;
      default:
        if (l < 1) {
          if (T == 123)
            --l;
          else if (T == 125 && l++ == 0 && b1() == 125)
            continue;
        }
        switch (p += bs(T), T * l) {
          // &
          case 38:
            k = d > 0 ? 1 : (p += "\f", -1);
            break;
          // ,
          case 44:
            s[c++] = (ft(p) - 1) * k, k = 1;
            break;
          // @
          case 64:
            rr() === 45 && (p += sa(st())), v = rr(), d = y = ft(C = p += A1(Gn())), T++;
            break;
          // -
          case 45:
            _ === 45 && ft(p) == 2 && (l = 0);
        }
    }
  return o;
}
function Au(e, t, r, n, i, o, a, s, u, c, d, y) {
  for (var v = i - 1, w = i === 0 ? o : [""], _ = gf(w), l = 0, A = 0, k = 0; l < n; ++l)
    for (var T = 0, C = Rr(e, v + 1, v = vf(A = a[l])), E = e; T < _; ++T)
      (E = xf(A > 0 ? w[T] + " " + C : se(C, /&\f/g, w[T]))) && (u[k++] = E);
  return Co(e, t, r, i === 0 ? _o : s, u, c, d, y);
}
function O1(e, t, r, n) {
  return Co(e, t, r, pf, bs(y1()), Rr(e, 2, -2), 0, n);
}
function Tu(e, t, r, n, i) {
  return Co(e, t, r, ys, Rr(e, 0, n), Rr(e, n + 1, -1), n, i);
}
function yf(e, t, r) {
  switch (g1(e, t)) {
    // color-adjust
    case 5103:
      return me + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return me + e + e;
    // tab-size
    case 4789:
      return nn + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return me + e + nn + e + Ae + e + e;
    // writing-mode
    case 5936:
      switch (Me(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return me + e + Ae + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return me + e + Ae + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return me + e + Ae + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return me + e + Ae + e + e;
    // order
    case 6165:
      return me + e + Ae + "flex-" + e + e;
    // align-items
    case 5187:
      return me + e + se(e, /(\w+).+(:[^]+)/, me + "box-$1$2" + Ae + "flex-$1$2") + e;
    // align-self
    case 5443:
      return me + e + Ae + "flex-item-" + se(e, /flex-|-self/g, "") + (Et(e, /flex-|baseline/) ? "" : Ae + "grid-row-" + se(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return me + e + Ae + "flex-line-pack" + se(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return me + e + Ae + se(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return me + e + Ae + se(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return me + "box-" + se(e, "-grow", "") + me + e + Ae + se(e, "grow", "positive") + e;
    // transition
    case 4554:
      return me + se(e, /([^-])(transform)/g, "$1" + me + "$2") + e;
    // cursor
    case 6187:
      return se(se(se(e, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, me + "$1$`$1");
    // justify-content
    case 4968:
      return se(se(e, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + Ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + e + e;
    // justify-self
    case 4200:
      if (!Et(e, /flex-|baseline/)) return Ae + "grid-column-align" + Rr(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ae + se(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, i) {
        return t = i, Et(n.props, /grid-\w+-end/);
      }) ? ~Vn(e + (r = r[t].value), "span", 0) ? e : Ae + se(e, "-start", "") + e + Ae + "grid-row-span:" + (~Vn(r, "span", 0) ? Et(r, /\d+/) : +Et(r, /\d+/) - +Et(e, /\d+/)) + ";" : Ae + se(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return Et(n.props, /grid-\w+-start/);
      }) ? e : Ae + se(se(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, me + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ft(e) - 1 - t > 6)
        switch (Me(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Me(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return se(e, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + nn + (Me(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Vn(e, "stretch", 0) ? yf(se(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return se(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, o, a, s, u, c) {
        return Ae + i + ":" + o + c + (a ? Ae + i + "-span:" + (s ? u : +u - +o) + c : "") + e;
      });
    // position: sticky
    case 4949:
      if (Me(e, t + 6) === 121)
        return se(e, ":", ":" + me) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Me(e, Me(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return se(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + me + (Me(e, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + Ae + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return se(e, ":", ":" + Ae) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return se(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Yi(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function I1(e, t, r, n) {
  switch (e.type) {
    case x1:
      if (e.children.length) break;
    case v1:
    case ys:
      return e.return = e.return || e.value;
    case pf:
      return "";
    case hf:
      return e.return = e.value + "{" + Yi(e.children, n) + "}";
    case _o:
      if (!ft(e.value = e.props.join(","))) return "";
  }
  return ft(r = Yi(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function k1(e) {
  var t = gf(e);
  return function(r, n, i, o) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, i, o) || "";
    return a;
  };
}
function D1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function R1(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ys:
        e.return = yf(e.value, e.length, r);
        return;
      case hf:
        return Yi([Pt(e, { value: se(e.value, "@", "@" + me) })], n);
      case _o:
        if (e.length)
          return m1(r = e.props, function(i) {
            switch (Et(i, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                br(Pt(e, { props: [se(i, /:(read-\w+)/, ":" + nn + "$1")] })), br(Pt(e, { props: [i] })), Ba(e, { props: Su(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                br(Pt(e, { props: [se(i, /:(plac\w+)/, ":" + me + "input-$1")] })), br(Pt(e, { props: [se(i, /:(plac\w+)/, ":" + nn + "$1")] })), br(Pt(e, { props: [se(i, /:(plac\w+)/, Ae + "input-$1")] })), br(Pt(e, { props: [i] })), Ba(e, { props: Su(r, n) });
                break;
            }
            return "";
          });
    }
}
var P1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, or = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", bf = "active", Ef = "data-styled-version", Ao = "6.1.15", Es = `/*!sc*/
`, Ki = typeof window < "u" && "HTMLElement" in window, B1 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ou = /invalid hook call/i, Bn = /* @__PURE__ */ new Set(), F1 = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var o = !0;
      console.error = function(a) {
        for (var s = [], u = 1; u < arguments.length; u++) s[u - 1] = arguments[u];
        Ou.test(a) ? (o = !1, Bn.delete(n)) : i.apply(void 0, Dr([a], s, !1));
      }, Mi(), o && !Bn.has(n) && (console.warn(n), Bn.add(n));
    } catch (a) {
      Ou.test(a.message) && Bn.delete(n);
    } finally {
      console.error = i;
    }
  }
}, To = Object.freeze([]), Br = Object.freeze({});
function N1(e, t, r) {
  return r === void 0 && (r = Br), e.theme !== r.theme && e.theme || t || r.theme;
}
var Ma = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), M1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $1 = /(^-|-$)/g;
function Iu(e) {
  return e.replace(M1, "-").replace($1, "");
}
var L1 = /(a)(d)/gi, Fn = 52, ku = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $a(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Fn; t = t / Fn | 0) r = ku(t % Fn) + r;
  return (ku(t % Fn) + r).replace(L1, "$1-$2");
}
var ca, _f = 5381, Jt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, wf = function(e) {
  return Jt(_f, e);
};
function z1(e) {
  return $a(wf(e) >>> 0);
}
function Cf(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ua(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Sf = typeof Symbol == "function" && Symbol.for, Af = Sf ? Symbol.for("react.memo") : 60115, j1 = Sf ? Symbol.for("react.forward_ref") : 60112, U1 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, H1 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Tf = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, W1 = ((ca = {})[j1] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ca[Af] = Tf, ca);
function Du(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Af ? Tf : "$$typeof" in e ? W1[e.$$typeof] : U1;
  var t;
}
var q1 = Object.defineProperty, V1 = Object.getOwnPropertyNames, Ru = Object.getOwnPropertySymbols, G1 = Object.getOwnPropertyDescriptor, Y1 = Object.getPrototypeOf, Pu = Object.prototype;
function Of(e, t, r) {
  if (typeof t != "string") {
    if (Pu) {
      var n = Y1(t);
      n && n !== Pu && Of(e, n, r);
    }
    var i = V1(t);
    Ru && (i = i.concat(Ru(t)));
    for (var o = Du(e), a = Du(t), s = 0; s < i.length; ++s) {
      var u = i[s];
      if (!(u in H1 || r && r[u] || a && u in a || o && u in o)) {
        var c = G1(t, u);
        try {
          q1(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
function Fr(e) {
  return typeof e == "function";
}
function _s(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function er(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Bu(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function Nr(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function La(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Nr(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = La(e[n], t[n]);
  else if (Nr(t)) for (var n in t) e[n] = La(e[n], t[n]);
  return e;
}
function ws(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var K1 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function X1() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], i = 1, o = e.length; i < o; i += 1) n.push(e[i]);
  return n.forEach(function(a) {
    r = r.replace(/%[a-z]/, a);
  }), r;
}
function Wr(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(X1.apply(void 0, Dr([K1[e]], t, !1)).trim());
}
var J1 = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, o = i; t >= o; ) if ((o <<= 1) < 0) throw Wr(16, "".concat(t));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
      for (var a = i; a < o; a++) this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(t + 1), u = (a = 0, r.length); a < u; a++) this.tag.insertRule(s, r[a]) && (this.groupSizes[t]++, s++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), i = n + r;
      this.groupSizes[t] = 0;
      for (var o = n; o < i; o++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], i = this.indexOfGroup(t), o = i + n, a = i; a < o; a++) r += "".concat(this.tag.getRule(a)).concat(Es);
    return r;
  }, e;
}(), Q1 = 1 << 30, Kn = /* @__PURE__ */ new Map(), Xi = /* @__PURE__ */ new Map(), Xn = 1, Nn = function(e) {
  if (Kn.has(e)) return Kn.get(e);
  for (; Xi.has(Xn); ) Xn++;
  var t = Xn++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Q1)) throw Wr(16, "".concat(t));
  return Kn.set(e, t), Xi.set(t, e), t;
}, Z1 = function(e, t) {
  Xn = t + 1, Kn.set(e, t), Xi.set(t, e);
}, ey = "style[".concat(or, "][").concat(Ef, '="').concat(Ao, '"]'), ty = new RegExp("^".concat(or, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ry = function(e, t, r) {
  for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++) (n = i[o]) && e.registerName(t, n);
}, ny = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Es), i = [], o = 0, a = n.length; o < a; o++) {
    var s = n[o].trim();
    if (s) {
      var u = s.match(ty);
      if (u) {
        var c = 0 | parseInt(u[1], 10), d = u[2];
        c !== 0 && (Z1(d, c), ry(e, d, u[3]), e.getTag().insertRules(c, i)), i.length = 0;
      } else i.push(s);
    }
  }
}, Fu = function(e) {
  for (var t = document.querySelectorAll(ey), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    i && i.getAttribute(or) !== bf && (ny(e, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
function iy() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var If = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(s) {
    var u = Array.from(s.querySelectorAll("style[".concat(or, "]")));
    return u[u.length - 1];
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(or, bf), n.setAttribute(Ef, Ao);
  var a = iy();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, oy = function() {
  function e(t) {
    this.element = If(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, i = 0, o = n.length; i < o; i++) {
        var a = n[i];
        if (a.ownerNode === r) return a;
      }
      throw Wr(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), ay = function() {
  function e(t) {
    this.element = If(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), sy = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Nu = Ki, cy = { isServer: !Ki, useCSSOMInjection: !B1 }, kf = function() {
  function e(t, r, n) {
    t === void 0 && (t = Br), r === void 0 && (r = {});
    var i = this;
    this.options = Ke(Ke({}, cy), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Ki && Nu && (Nu = !1, Fu(this)), ws(this, function() {
      return function(o) {
        for (var a = o.getTag(), s = a.length, u = "", c = function(y) {
          var v = function(k) {
            return Xi.get(k);
          }(y);
          if (v === void 0) return "continue";
          var w = o.names.get(v), _ = a.getGroup(y);
          if (w === void 0 || !w.size || _.length === 0) return "continue";
          var l = "".concat(or, ".g").concat(y, '[id="').concat(v, '"]'), A = "";
          w !== void 0 && w.forEach(function(k) {
            k.length > 0 && (A += "".concat(k, ","));
          }), u += "".concat(_).concat(l, '{content:"').concat(A, '"}').concat(Es);
        }, d = 0; d < s; d++) c(d);
        return u;
      }(i);
    });
  }
  return e.registerId = function(t) {
    return Nn(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Ki && Fu(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Ke(Ke({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, i = r.target;
      return r.isServer ? new sy(i) : n ? new oy(i) : new ay(i);
    }(this.options), new J1(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Nn(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Nn(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Nn(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), uy = /&/g, ly = /^\s*\/\/.*$/gm;
function Df(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Df(r.children, t)), r;
  });
}
function fy(e) {
  var t, r, n, i = Br, o = i.options, a = o === void 0 ? Br : o, s = i.plugins, u = s === void 0 ? To : s, c = function(v, w, _) {
    return _.startsWith(r) && _.endsWith(r) && _.replaceAll(r, "").length > 0 ? ".".concat(t) : v;
  }, d = u.slice();
  d.push(function(v) {
    v.type === _o && v.value.includes("&") && (v.props[0] = v.props[0].replace(uy, r).replace(n, c));
  }), a.prefix && d.push(R1), d.push(I1);
  var y = function(v, w, _, l) {
    w === void 0 && (w = ""), _ === void 0 && (_ = ""), l === void 0 && (l = "&"), t = l, r = w, n = new RegExp("\\".concat(r, "\\b"), "g");
    var A = v.replace(ly, ""), k = T1(_ || w ? "".concat(_, " ").concat(w, " { ").concat(A, " }") : A);
    a.namespace && (k = Df(k, a.namespace));
    var T = [];
    return Yi(k, k1(d.concat(D1(function(C) {
      return T.push(C);
    })))), T;
  };
  return y.hash = u.length ? u.reduce(function(v, w) {
    return w.name || Wr(15), Jt(v, w.name);
  }, _f).toString() : "", y;
}
var dy = new kf(), za = fy(), Rf = Ue.createContext({ shouldForwardProp: void 0, styleSheet: dy, stylis: za });
Rf.Consumer;
Ue.createContext(void 0);
function Mu() {
  return al(Rf);
}
var $u = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = za);
      var a = n.name + o.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, ws(this, function() {
      throw Wr(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = za), this.name + t.hash;
  }, e;
}(), py = function(e) {
  return e >= "A" && e <= "Z";
};
function Lu(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    py(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Pf = function(e) {
  return e == null || e === !1 || e === "";
}, Bf = function(e) {
  var t, r, n = [];
  for (var i in e) {
    var o = e[i];
    e.hasOwnProperty(i) && !Pf(o) && (Array.isArray(o) && o.isCss || Fr(o) ? n.push("".concat(Lu(i), ":"), o, ";") : Nr(o) ? n.push.apply(n, Dr(Dr(["".concat(i, " {")], Bf(o), !1), ["}"], !1)) : n.push("".concat(Lu(i), ": ").concat((t = i, (r = o) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in P1 || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function nr(e, t, r, n) {
  if (Pf(e)) return [];
  if (_s(e)) return [".".concat(e.styledComponentId)];
  if (Fr(e)) {
    if (!Fr(o = e) || o.prototype && o.prototype.isReactComponent || !t) return [e];
    var i = e(t);
    return process.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof $u || Nr(i) || i === null || console.error("".concat(Cf(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), nr(i, t, r, n);
  }
  var o;
  return e instanceof $u ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Nr(e) ? Bf(e) : Array.isArray(e) ? Array.prototype.concat.apply(To, e.map(function(a) {
    return nr(a, t, r, n);
  })) : [e.toString()];
}
function hy(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Fr(r) && !_s(r)) return !1;
  }
  return !0;
}
var vy = wf(Ao), xy = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && hy(t), this.componentId = r, this.baseHash = Jt(vy, r), this.baseStyle = n, kf.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) i = er(i, this.staticRulesId);
    else {
      var o = Bu(nr(this.rules, t, r, n)), a = $a(Jt(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(this.componentId, a)) {
        var s = n(o, ".".concat(a), void 0, this.componentId);
        r.insertRules(this.componentId, a, s);
      }
      i = er(i, a), this.staticRulesId = a;
    }
    else {
      for (var u = Jt(this.baseHash, n.hash), c = "", d = 0; d < this.rules.length; d++) {
        var y = this.rules[d];
        if (typeof y == "string") c += y, process.env.NODE_ENV !== "production" && (u = Jt(u, y));
        else if (y) {
          var v = Bu(nr(y, t, r, n));
          u = Jt(u, v + d), c += v;
        }
      }
      if (c) {
        var w = $a(u >>> 0);
        r.hasNameForId(this.componentId, w) || r.insertRules(this.componentId, w, n(c, ".".concat(w), void 0, this.componentId)), i = er(i, w);
      }
    }
    return i;
  }, e;
}(), Ff = Ue.createContext(void 0);
Ff.Consumer;
var la = {}, zu = /* @__PURE__ */ new Set();
function gy(e, t, r) {
  var n = _s(e), i = e, o = !ua(e), a = t.attrs, s = a === void 0 ? To : a, u = t.componentId, c = u === void 0 ? function(E, f) {
    var S = typeof E != "string" ? "sc" : Iu(E);
    la[S] = (la[S] || 0) + 1;
    var p = "".concat(S, "-").concat(z1(Ao + S + la[S]));
    return f ? "".concat(f, "-").concat(p) : p;
  }(t.displayName, t.parentComponentId) : u, d = t.displayName, y = d === void 0 ? function(E) {
    return ua(E) ? "styled.".concat(E) : "Styled(".concat(Cf(E), ")");
  }(e) : d, v = t.displayName && t.componentId ? "".concat(Iu(t.displayName), "-").concat(t.componentId) : t.componentId || c, w = n && i.attrs ? i.attrs.concat(s).filter(Boolean) : s, _ = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var l = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var A = t.shouldForwardProp;
      _ = function(E, f) {
        return l(E, f) && A(E, f);
      };
    } else _ = l;
  }
  var k = new xy(r, v, n ? i.componentStyle : void 0);
  function T(E, f) {
    return function(S, p, b) {
      var m = S.attrs, g = S.componentStyle, O = S.defaultProps, I = S.foldedComponentIds, D = S.styledComponentId, L = S.target, z = Ue.useContext(Ff), h = Mu(), Y = S.shouldForwardProp || h.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Qs(D);
      var U = N1(p, z, O) || Br, W = function(B, j, q) {
        for (var $, V = Ke(Ke({}, j), { className: void 0, theme: q }), G = 0; G < B.length; G += 1) {
          var X = Fr($ = B[G]) ? $(V) : $;
          for (var H in X) V[H] = H === "className" ? er(V[H], X[H]) : H === "style" ? Ke(Ke({}, V[H]), X[H]) : X[H];
        }
        return j.className && (V.className = er(V.className, j.className)), V;
      }(m, p, U), N = W.as || L, P = {};
      for (var M in W) W[M] === void 0 || M[0] === "$" || M === "as" || M === "theme" && W.theme === U || (M === "forwardedAs" ? P.as = W.forwardedAs : Y && !Y(M, N) || (P[M] = W[M], Y || process.env.NODE_ENV !== "development" || h1(M) || zu.has(M) || !Ma.has(N) || (zu.add(M), console.warn('styled-components: it looks like an unknown prop "'.concat(M, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var F = function(B, j) {
        var q = Mu(), $ = B.generateAndInjectStyles(j, q.styleSheet, q.stylis);
        return process.env.NODE_ENV !== "production" && Qs($), $;
      }(g, W);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(F);
      var x = er(I, D);
      return F && (x += " " + F), W.className && (x += " " + W.className), P[ua(N) && !Ma.has(N) ? "class" : "className"] = x, b && (P.ref = b), fp(N, P);
    }(C, E, f);
  }
  T.displayName = y;
  var C = Ue.forwardRef(T);
  return C.attrs = w, C.componentStyle = k, C.displayName = y, C.shouldForwardProp = _, C.foldedComponentIds = n ? er(i.foldedComponentIds, i.styledComponentId) : "", C.styledComponentId = v, C.target = n ? i.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? function(f) {
      for (var S = [], p = 1; p < arguments.length; p++) S[p - 1] = arguments[p];
      for (var b = 0, m = S; b < m.length; b++) La(f, m[b], !0);
      return f;
    }({}, i.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (F1(y, v), C.warnTooManyClasses = /* @__PURE__ */ function(E, f) {
    var S = {}, p = !1;
    return function(b) {
      if (!p && (S[b] = !0, Object.keys(S).length >= 200)) {
        var m = f ? ' with the id of "'.concat(f, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(m, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, S = {};
      }
    };
  }(y, v)), ws(C, function() {
    return ".".concat(C.styledComponentId);
  }), o && Of(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function ju(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var Uu = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function my(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Fr(e) || Nr(e)) return Uu(nr(ju(To, Dr([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? nr(n) : Uu(nr(ju(n, t)));
}
function ja(e, t, r) {
  if (r === void 0 && (r = Br), !t) throw Wr(1, t);
  var n = function(i) {
    for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
    return e(t, r, my.apply(void 0, Dr([i], o, !1)));
  };
  return n.attrs = function(i) {
    return ja(e, t, Ke(Ke({}, r), { attrs: Array.prototype.concat(r.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return ja(e, t, Ke(Ke({}, r), i));
  }, n;
}
var Nf = function(e) {
  return ja(gy, e);
}, Cs = Nf;
Ma.forEach(function(e) {
  Cs[e] = Nf(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Mn = "__sc-".concat(or, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Mn] || (window[Mn] = 0), window[Mn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Mn] += 1);
function yy({
  path: e,
  sx: t,
  onClick: r
}) {
  const n = (i) => {
    const { target: o } = i;
    o.src = "https://pre.binge.buzz/assets/svg/binge-logo.svg";
  };
  return /* @__PURE__ */ Z(
    qe,
    {
      sx: { ...t },
      component: "img",
      onClick: () => r == null ? void 0 : r(),
      src: e ? `${Ey}/${e}` : "https://pre.binge.buzz/assets/svg/binge-logo.svg",
      onError: n
    }
  );
}
const by = dp(() => import("./VideoJSPlayer-Cl4DHk6r.mjs")), Ey = "https://web-api-staging.binge.buzz", _y = Cs.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  padding: var(--border-size);

  --border-size: 0.1rem;
  --border-opacity: 0; /* Initially invisible */

  border: var(--border-size) solid transparent;
  background: rgb(255 255 255 / var(--opacity)) padding-box; /* Only inner content visible initially */
  background-clip: padding-box, border-box;

  &:hover {
    --border-opacity: 1; /* Show border on hover */

    background: conic-gradient(
          from var(--angle),
          transparent 25%,
          rgba(254, 32, 32) 50%,
          rgba(219, 0, 0) 75%,
          transparent 100%
        )
        border-box,
      rgb(255 255 255 / var(--opacity)) padding-box;

    animation: rotate 4s linear infinite, opacityChange 3s infinite alternate;
  }

  @property --opacity {
    syntax: "<number>";
    initial-value: 0.5;
    inherits: false;
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes opacityChange {
    to {
      --opacity: 1;
    }
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }
`, wy = Cs.div`
  width: 100%;
  height: 100%;
  border-radius: 12px; /* Ensures inner content is also rounded */
  overflow: hidden; /* Ensures content doesn't overflow the border */
`;
function Cy({ data: e, isLoading: t }) {
  const r = Mi(null), [n, i] = dt(!0), [o, a] = dt(0), [s, u] = dt(null), c = Mi(void 0), [d, y] = dt(
    {}
  ), [v, w] = dt(!1);
  vn(() => {
    w(!0);
  }, []);
  function _(C) {
    const { className: E, style: f, onClick: S } = C;
    return /* @__PURE__ */ Z(
      qe,
      {
        className: E,
        onClick: S,
        sx: {
          ...f,
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          display: "flex !important",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ Z(f1, { sx: { fontSize: 20, color: "black" } })
      }
    );
  }
  function l(C) {
    const { className: E, style: f, onClick: S } = C;
    return /* @__PURE__ */ Z(
      qe,
      {
        className: E,
        onClick: S,
        sx: {
          ...f,
          top: "50%",
          left: 0,
          display: "flex !important",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ Z(c1, { sx: { fontSize: 20, color: "black" } })
      }
    );
  }
  const A = {
    speed: 500,
    infinite: !1,
    arrows: !1,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (C, E) => a(E),
    nextArrow: /* @__PURE__ */ Z(_, {}),
    prevArrow: /* @__PURE__ */ Z(l, {}),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5
        }
      },
      {
        breakpoint: 1e3,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }, k = (C, E) => {
    y((f) => ({ ...f, [C]: E }));
  }, T = (C) => {
    typeof window < "u" && window.location.assign(`https://binge.buzz/playing-vod/${C.id}`);
  };
  return /* @__PURE__ */ Z(qe, { sx: { overflowX: "hidden", position: "relative" }, children: e.length > 0 && /* @__PURE__ */ Ye(ol, { children: [
    !t && /* @__PURE__ */ Z(l, { onClick: () => {
      var C;
      return (C = r == null ? void 0 : r.current) == null ? void 0 : C.slickPrev();
    } }),
    /* @__PURE__ */ Z(i1, { ref: r, ...A, children: e.map((C, E) => /* @__PURE__ */ Z(_y, { children: /* @__PURE__ */ Z(
      wy,
      {
        onMouseEnter: () => {
          o !== E && (c.current && clearTimeout(c.current), u(E), s !== E && a(E));
        },
        children: t ? /* @__PURE__ */ Z(
          ms,
          {
            variant: "rectangular",
            width: "100%",
            height: 250,
            sx: {
              bgcolor: "#F9F9FB",
              background: "linear-gradient(90deg, #F9F9FB 25%, #f2e8f2 50%, #F9F9FB 75%)",
              backgroundSize: "300% 100%",
              animation: "waveAnimation 2.8s ease-in-out infinite",
              "@keyframes waveAnimation": {
                "0%": { backgroundPosition: "100% 0" },
                "100%": { backgroundPosition: "-100% 0" }
              },
              borderRadius: 2
            }
          }
        ) : /* @__PURE__ */ Ye(
          qe,
          {
            sx: {
              position: "relative",
              width: "100%",
              aspectRatio: "16/9"
            },
            onClick: () => T(C),
            children: [
              /* @__PURE__ */ Z(
                qe,
                {
                  sx: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transition: "opacity 0.8s ease-in-out",
                    opacity: E === o ? 0 : 1,
                    zIndex: E === o ? 0 : 1
                  },
                  onClick: (f) => f.stopPropagation(),
                  children: /* @__PURE__ */ Z(
                    yy,
                    {
                      path: C.image_landscape || C.image_portrait || C.image_square || C.thumb_path,
                      sx: {
                        borderRadius: "16px",
                        width: "100%",
                        aspectRatio: "16/9",
                        objectFit: "contain",
                        cursor: "pointer"
                      },
                      onClick: () => {
                        typeof window < "u" && window.location.assign(
                          `https://binge.buzz/playing-vod/${C.id}`
                        );
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ Z(
                qe,
                {
                  sx: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transition: "opacity 0.8s ease-in-out",
                    opacity: E === o ? 1 : 0,
                    zIndex: E === o ? 1 : 0
                  },
                  children: /* @__PURE__ */ Z(pp, { fallback: /* @__PURE__ */ Z("div", { children: "Loading..." }), children: /* @__PURE__ */ Z(
                    by,
                    {
                      videoId: C.id,
                      _hlsStreamUrl: C.trailer_link,
                      isActive: E === o,
                      path: C.image_landscape || C.image_portrait || C.image_square || C.thumb_path,
                      redirectPath: `https://binge.buzz/playing-vod/${C.id}`,
                      initialTime: d[C.id] || 0,
                      onTimeUpdate: (f) => k(C.id, f)
                    }
                  ) })
                }
              )
            ]
          }
        )
      }
    ) }, E)) }),
    !t && /* @__PURE__ */ Z(_, { onClick: () => {
      var C;
      return (C = r == null ? void 0 : r.current) == null ? void 0 : C.slickNext();
    } })
  ] }) });
}
function Sy(e, t) {
  return function() {
    const { category: n, type: i, token: o, tile: a, isLoading: s } = t, [u, c] = dt([]);
    if (console.log(n, "catttt"), vn(() => {
      (async () => {
        if (!((n == null ? void 0 : n.category_type) === "ad_category" && (n == null ? void 0 : n.ad_type) == 1) && (n == null ? void 0 : n.category_type) !== "tvod") {
          const y = {
            category_id: n == null ? void 0 : n.category_id,
            category_type: n == null ? void 0 : n.category_type,
            page: -1,
            page_size: -1
          };
          let v = await fetch(
            "https://web-api-staging.binge.buzz/api/v3/page/category/products",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${o}`,
                "Device-Type": "websdk"
              },
              body: JSON.stringify(y)
            }
          ).then((w) => w.json());
          v.data && v.data.products && v.data.products.length && c(v.data.products);
        }
      })();
    }, [n, o]), u && u.length > 0)
      return /* @__PURE__ */ Z(e, { data: u, isLoading: s });
  };
}
function Ay(e) {
  const t = Sy(Cy, e);
  return /* @__PURE__ */ Z(t, {});
}
const Ty = async (e) => (await (await fetch(
  "https://web-api-staging.binge.buzz/api/v3/page/allCategories",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${e}`,
      "Device-Type": "websdk"
    },
    body: JSON.stringify({
      page: "corporate-sdk-home"
    })
  }
)).json()).categories, Oy = ({
  token: e,
  isLoading: t
}) => {
  const [r, n] = dt([]);
  return vn(() => {
    e && (async () => {
      if (e)
        try {
          const o = await Ty(e);
          n(o);
        } catch (o) {
          console.error("Error fetching categories:", o);
        }
    })();
  }, [e]), /* @__PURE__ */ Ye(qe, { sx: { mt: "100px !important" }, children: [
    r == null ? void 0 : r.map((i, o) => (console.log("item", i), /* @__PURE__ */ Ye(
      qe,
      {
        sx: { mb: r.length > 1 ? "80px" : 0 },
        children: [
          r.length > 1 && /* @__PURE__ */ Z(
            Ir,
            {
              className: "watchnow-text",
              sx: { fontSize: "18px", mb: 1, fontWeight: "bold" },
              children: i.name
            }
          ),
          /* @__PURE__ */ Z(
            Ay,
            {
              isLoading: t,
              category: i,
              type: "cardWithHover",
              visibleOverflow: !0,
              token: e ?? ""
            },
            i.category_id
          )
        ]
      },
      i.category_id
    ))),
    /* @__PURE__ */ Ye(
      gs,
      {
        className: "watchnow-text",
        sx: {
          background: "#FF4A50",
          borderRadius: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
          padding: "16px 22px",
          color: "#fff",
          textTransform: "none",
          fontSize: { xs: "15px", sm: "14px", lg: "16px" },
          fontWeight: { xs: "400", lg: "600" },
          mt: "121px",
          mb: "160px",
          mx: "auto",
          "&:hover": {
            background: "#FF4A50"
          }
        },
        onClick: () => {
          window.location.assign("https://www.binge.buzz");
        },
        children: [
          "Watch Now",
          /* @__PURE__ */ Z(of, {})
        ]
      }
    )
  ] });
}, Iy = async (e) => await (await fetch(
  "https://web-api-staging.binge.buzz/api/v3/banner/vod-home",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${e}`,
      "Device-Type": "websdk"
    }
  }
)).json(), ky = ({
  title: e,
  description: t
}) => {
  const r = Mi(null);
  return vn(() => {
    r.current && (r.current.stop(), r.current.deleteAll(), r.current.typeString(t || "").start());
  }, [t]), /* @__PURE__ */ Ye(
    qe,
    {
      sx: {
        width: {
          xs: "95%",
          sm: "80%",
          md: "65%",
          lg: "50%"
        },
        mx: "auto !important",
        display: "flex",
        flexDirection: "column",
        gap: "21px",
        mt: "43px !important"
      },
      children: [
        /* @__PURE__ */ Z(
          Ir,
          {
            className: "banner-text",
            sx: {
              color: "#202939",
              fontSize: {
                xs: "30px",
                sm: "36px"
              },
              fontWeight: "700",
              textAlign: "center"
            },
            children: e
          }
        ),
        /* @__PURE__ */ Z(
          qe,
          {
            className: "binge-text",
            sx: {
              color: "#697586",
              fontSize: {
                xs: "14px",
                sm: "16px"
              },
              fontWeight: "400",
              textAlign: "center"
            },
            children: /* @__PURE__ */ Z(Ir, { children: t || "" })
          }
        )
      ]
    }
  );
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mf = function(e) {
  const t = [];
  let r = 0;
  for (let n = 0; n < e.length; n++) {
    let i = e.charCodeAt(n);
    i < 128 ? t[r++] = i : i < 2048 ? (t[r++] = i >> 6 | 192, t[r++] = i & 63 | 128) : (i & 64512) === 55296 && n + 1 < e.length && (e.charCodeAt(n + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++n) & 1023), t[r++] = i >> 18 | 240, t[r++] = i >> 12 & 63 | 128, t[r++] = i >> 6 & 63 | 128, t[r++] = i & 63 | 128) : (t[r++] = i >> 12 | 224, t[r++] = i >> 6 & 63 | 128, t[r++] = i & 63 | 128);
  }
  return t;
}, Dy = function(e) {
  const t = [];
  let r = 0, n = 0;
  for (; r < e.length; ) {
    const i = e[r++];
    if (i < 128)
      t[n++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const o = e[r++];
      t[n++] = String.fromCharCode((i & 31) << 6 | o & 63);
    } else if (i > 239 && i < 365) {
      const o = e[r++], a = e[r++], s = e[r++], u = ((i & 7) << 18 | (o & 63) << 12 | (a & 63) << 6 | s & 63) - 65536;
      t[n++] = String.fromCharCode(55296 + (u >> 10)), t[n++] = String.fromCharCode(56320 + (u & 1023));
    } else {
      const o = e[r++], a = e[r++];
      t[n++] = String.fromCharCode((i & 15) << 12 | (o & 63) << 6 | a & 63);
    }
  }
  return t.join("");
}, $f = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(e, t) {
    if (!Array.isArray(e))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [];
    for (let i = 0; i < e.length; i += 3) {
      const o = e[i], a = i + 1 < e.length, s = a ? e[i + 1] : 0, u = i + 2 < e.length, c = u ? e[i + 2] : 0, d = o >> 2, y = (o & 3) << 4 | s >> 4;
      let v = (s & 15) << 2 | c >> 6, w = c & 63;
      u || (w = 64, a || (v = 64)), n.push(r[d], r[y], r[v], r[w]);
    }
    return n.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(e, t) {
    return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(Mf(e), t);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(e, t) {
    return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : Dy(this.decodeStringToByteArray(e, t));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(e, t) {
    this.init_();
    const r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [];
    for (let i = 0; i < e.length; ) {
      const o = r[e.charAt(i++)], s = i < e.length ? r[e.charAt(i)] : 0;
      ++i;
      const c = i < e.length ? r[e.charAt(i)] : 64;
      ++i;
      const y = i < e.length ? r[e.charAt(i)] : 64;
      if (++i, o == null || s == null || c == null || y == null)
        throw new Ry();
      const v = o << 2 | s >> 4;
      if (n.push(v), c !== 64) {
        const w = s << 4 & 240 | c >> 2;
        if (n.push(w), y !== 64) {
          const _ = c << 6 & 192 | y;
          n.push(_);
        }
      }
    }
    return n;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let e = 0; e < this.ENCODED_VALS.length; e++)
        this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e);
    }
  }
};
class Ry extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Py = function(e) {
  const t = Mf(e);
  return $f.encodeByteArray(t, !0);
}, Lf = function(e) {
  return Py(e).replace(/\./g, "");
}, zf = function(e) {
  try {
    return $f.decodeString(e, !0);
  } catch (t) {
    console.error("base64Decode failed: ", t);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function By() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fy = () => By().__FIREBASE_DEFAULTS__, Ny = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const e = process.env.__FIREBASE_DEFAULTS__;
  if (e)
    return JSON.parse(e);
}, My = () => {
  if (typeof document > "u")
    return;
  let e;
  try {
    e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const t = e && zf(e[1]);
  return t && JSON.parse(t);
}, jf = () => {
  try {
    return Fy() || Ny() || My();
  } catch (e) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
    return;
  }
}, Uf = () => {
  var e;
  return (e = jf()) === null || e === void 0 ? void 0 : e.config;
}, $y = (e) => {
  var t;
  return (t = jf()) === null || t === void 0 ? void 0 : t[`_${e}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ly {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((t, r) => {
      this.resolve = t, this.reject = r;
    });
  }
  /**
   * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(t) {
    return (r, n) => {
      r ? this.reject(r) : this.resolve(n), typeof t == "function" && (this.promise.catch(() => {
      }), t.length === 1 ? t(r) : t(r, n));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function zy() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve());
}
function jy() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function Hf() {
  const e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function Uy() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Hy() {
  const e = Ve();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function Wf() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function qf() {
  return new Promise((e, t) => {
    try {
      let r = !0;
      const n = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(n);
      i.onsuccess = () => {
        i.result.close(), r || self.indexedDB.deleteDatabase(n), e(!0);
      }, i.onupgradeneeded = () => {
        r = !1;
      }, i.onerror = () => {
        var o;
        t(((o = i.error) === null || o === void 0 ? void 0 : o.message) || "");
      };
    } catch (r) {
      t(r);
    }
  });
}
function Wy() {
  return !(typeof navigator > "u" || !navigator.cookieEnabled);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qy = "FirebaseError";
class bt extends Error {
  constructor(t, r, n) {
    super(r), this.code = t, this.customData = n, this.name = qy, Object.setPrototypeOf(this, bt.prototype), Error.captureStackTrace && Error.captureStackTrace(this, fr.prototype.create);
  }
}
class fr {
  constructor(t, r, n) {
    this.service = t, this.serviceName = r, this.errors = n;
  }
  create(t, ...r) {
    const n = r[0] || {}, i = `${this.service}/${t}`, o = this.errors[t], a = o ? Vy(o, n) : "Error", s = `${this.serviceName}: ${a} (${i}).`;
    return new bt(i, s, n);
  }
}
function Vy(e, t) {
  return e.replace(Gy, (r, n) => {
    const i = t[n];
    return i != null ? String(i) : `<${n}?>`;
  });
}
const Gy = /\{\$([^}]+)}/g;
function Yy(e) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t))
      return !1;
  return !0;
}
function dn(e, t) {
  if (e === t)
    return !0;
  const r = Object.keys(e), n = Object.keys(t);
  for (const i of r) {
    if (!n.includes(i))
      return !1;
    const o = e[i], a = t[i];
    if (Hu(o) && Hu(a)) {
      if (!dn(o, a))
        return !1;
    } else if (o !== a)
      return !1;
  }
  for (const i of n)
    if (!r.includes(i))
      return !1;
  return !0;
}
function Hu(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _n(e) {
  const t = [];
  for (const [r, n] of Object.entries(e))
    Array.isArray(n) ? n.forEach((i) => {
      t.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
    }) : t.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
  return t.length ? "&" + t.join("&") : "";
}
function Ky(e, t) {
  const r = new Xy(e, t);
  return r.subscribe.bind(r);
}
class Xy {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(t, r) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = r, this.task.then(() => {
      t(this);
    }).catch((n) => {
      this.error(n);
    });
  }
  next(t) {
    this.forEachObserver((r) => {
      r.next(t);
    });
  }
  error(t) {
    this.forEachObserver((r) => {
      r.error(t);
    }), this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber synchronously to their
   *   call to subscribe().
   */
  subscribe(t, r, n) {
    let i;
    if (t === void 0 && r === void 0 && n === void 0)
      throw new Error("Missing Observer.");
    Jy(t, [
      "next",
      "error",
      "complete"
    ]) ? i = t : i = {
      next: t,
      error: r,
      complete: n
    }, i.next === void 0 && (i.next = fa), i.error === void 0 && (i.error = fa), i.complete === void 0 && (i.complete = fa);
    const o = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? i.error(this.finalError) : i.complete();
      } catch {
      }
    }), this.observers.push(i), o;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(t) {
    this.observers === void 0 || this.observers[t] === void 0 || (delete this.observers[t], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let r = 0; r < this.observers.length; r++)
        this.sendOne(r, t);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(t, r) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          r(this.observers[t]);
        } catch (n) {
          typeof console < "u" && console.error && console.error(n);
        }
    });
  }
  close(t) {
    this.finalized || (this.finalized = !0, t !== void 0 && (this.finalError = t), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function Jy(e, t) {
  if (typeof e != "object" || e === null)
    return !1;
  for (const r of t)
    if (r in e && typeof e[r] == "function")
      return !0;
  return !1;
}
function fa() {
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qy = 1e3, Zy = 2, eb = 4 * 60 * 60 * 1e3, tb = 0.5;
function Wu(e, t = Qy, r = Zy) {
  const n = t * Math.pow(r, e), i = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    tb * n * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2
  );
  return Math.min(eb, n + i);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qr(e) {
  return e && e._delegate ? e._delegate : e;
}
class mt {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(t, r, n) {
    this.name = t, this.instanceFactory = r, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(t) {
    return this.instantiationMode = t, this;
  }
  setMultipleInstances(t) {
    return this.multipleInstances = t, this;
  }
  setServiceProps(t) {
    return this.serviceProps = t, this;
  }
  setInstanceCreatedCallback(t) {
    return this.onInstanceCreated = t, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rb {
  constructor(t, r) {
    this.name = t, this.container = r, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide multiple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(t) {
    const r = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(r)) {
      const n = new Ly();
      if (this.instancesDeferred.set(r, n), this.isInitialized(r) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: r
          });
          i && n.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(r).promise;
  }
  getImmediate(t) {
    var r;
    const n = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier), i = (r = t == null ? void 0 : t.optional) !== null && r !== void 0 ? r : !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: n
        });
      } catch (o) {
        if (i)
          return null;
        throw o;
      }
    else {
      if (i)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = t, !!this.shouldAutoInitialize()) {
      if (ib(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Xt });
        } catch {
        }
      for (const [r, n] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(r);
        try {
          const o = this.getOrInitializeService({
            instanceIdentifier: i
          });
          n.resolve(o);
        } catch {
        }
      }
    }
  }
  clearInstance(t = Xt) {
    this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((r) => "INTERNAL" in r).map((r) => r.INTERNAL.delete()),
      ...t.filter((r) => "_delete" in r).map((r) => r._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Xt) {
    return this.instances.has(t);
  }
  getOptions(t = Xt) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: r = {} } = t, n = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(n))
      throw Error(`${this.name}(${n}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: n,
      options: r
    });
    for (const [o, a] of this.instancesDeferred.entries()) {
      const s = this.normalizeInstanceIdentifier(o);
      n === s && a.resolve(i);
    }
    return i;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(t, r) {
    var n;
    const i = this.normalizeInstanceIdentifier(r), o = (n = this.onInitCallbacks.get(i)) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set();
    o.add(t), this.onInitCallbacks.set(i, o);
    const a = this.instances.get(i);
    return a && t(a, i), () => {
      o.delete(t);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(t, r) {
    const n = this.onInitCallbacks.get(r);
    if (n)
      for (const i of n)
        try {
          i(t, r);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: t, options: r = {} }) {
    let n = this.instances.get(t);
    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
      instanceIdentifier: nb(t),
      options: r
    }), this.instances.set(t, n), this.instancesOptions.set(t, r), this.invokeOnInitCallbacks(n, t), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, t, n);
      } catch {
      }
    return n || null;
  }
  normalizeInstanceIdentifier(t = Xt) {
    return this.component ? this.component.multipleInstances ? t : Xt : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function nb(e) {
  return e === Xt ? void 0 : e;
}
function ib(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ob {
  constructor(t) {
    this.name = t, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(t) {
    const r = this.getProvider(t.name);
    if (r.isComponentSet())
      throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
    r.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(t) {
    if (this.providers.has(t))
      return this.providers.get(t);
    const r = new rb(t, this);
    return this.providers.set(t, r), r;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var we;
(function(e) {
  e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";
})(we || (we = {}));
const ab = {
  debug: we.DEBUG,
  verbose: we.VERBOSE,
  info: we.INFO,
  warn: we.WARN,
  error: we.ERROR,
  silent: we.SILENT
}, sb = we.INFO, cb = {
  [we.DEBUG]: "log",
  [we.VERBOSE]: "log",
  [we.INFO]: "info",
  [we.WARN]: "warn",
  [we.ERROR]: "error"
}, ub = (e, t, ...r) => {
  if (t < e.logLevel)
    return;
  const n = (/* @__PURE__ */ new Date()).toISOString(), i = cb[t];
  if (i)
    console[i](`[${n}]  ${e.name}:`, ...r);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
};
class Ss {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(t) {
    this.name = t, this._logLevel = sb, this._logHandler = ub, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in we))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? ab[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, we.DEBUG, ...t), this._logHandler(this, we.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, we.VERBOSE, ...t), this._logHandler(this, we.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, we.INFO, ...t), this._logHandler(this, we.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, we.WARN, ...t), this._logHandler(this, we.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, we.ERROR, ...t), this._logHandler(this, we.ERROR, ...t);
  }
}
const lb = (e, t) => t.some((r) => e instanceof r);
let qu, Vu;
function fb() {
  return qu || (qu = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function db() {
  return Vu || (Vu = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Vf = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap();
function pb(e) {
  const t = new Promise((r, n) => {
    const i = () => {
      e.removeEventListener("success", o), e.removeEventListener("error", a);
    }, o = () => {
      r(Lt(e.result)), i();
    }, a = () => {
      n(e.error), i();
    };
    e.addEventListener("success", o), e.addEventListener("error", a);
  });
  return t.then((r) => {
    r instanceof IDBCursor && Vf.set(r, e);
  }).catch(() => {
  }), As.set(t, e), t;
}
function hb(e) {
  if (Ua.has(e))
    return;
  const t = new Promise((r, n) => {
    const i = () => {
      e.removeEventListener("complete", o), e.removeEventListener("error", a), e.removeEventListener("abort", a);
    }, o = () => {
      r(), i();
    }, a = () => {
      n(e.error || new DOMException("AbortError", "AbortError")), i();
    };
    e.addEventListener("complete", o), e.addEventListener("error", a), e.addEventListener("abort", a);
  });
  Ua.set(e, t);
}
let Ha = {
  get(e, t, r) {
    if (e instanceof IDBTransaction) {
      if (t === "done")
        return Ua.get(e);
      if (t === "objectStoreNames")
        return e.objectStoreNames || Gf.get(e);
      if (t === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return Lt(e[t]);
  },
  set(e, t, r) {
    return e[t] = r, !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
  }
};
function vb(e) {
  Ha = e(Ha);
}
function xb(e) {
  return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...r) {
    const n = e.call(pa(this), t, ...r);
    return Gf.set(n, t.sort ? t.sort() : [t]), Lt(n);
  } : db().includes(e) ? function(...t) {
    return e.apply(pa(this), t), Lt(Vf.get(this));
  } : function(...t) {
    return Lt(e.apply(pa(this), t));
  };
}
function gb(e) {
  return typeof e == "function" ? xb(e) : (e instanceof IDBTransaction && hb(e), lb(e, fb()) ? new Proxy(e, Ha) : e);
}
function Lt(e) {
  if (e instanceof IDBRequest)
    return pb(e);
  if (da.has(e))
    return da.get(e);
  const t = gb(e);
  return t !== e && (da.set(e, t), As.set(t, e)), t;
}
const pa = (e) => As.get(e);
function Yf(e, t, { blocked: r, upgrade: n, blocking: i, terminated: o } = {}) {
  const a = indexedDB.open(e, t), s = Lt(a);
  return n && a.addEventListener("upgradeneeded", (u) => {
    n(Lt(a.result), u.oldVersion, u.newVersion, Lt(a.transaction), u);
  }), r && a.addEventListener("blocked", (u) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    u.oldVersion,
    u.newVersion,
    u
  )), s.then((u) => {
    o && u.addEventListener("close", () => o()), i && u.addEventListener("versionchange", (c) => i(c.oldVersion, c.newVersion, c));
  }).catch(() => {
  }), s;
}
const mb = ["get", "getKey", "getAll", "getAllKeys", "count"], yb = ["put", "add", "delete", "clear"], ha = /* @__PURE__ */ new Map();
function Gu(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
    return;
  if (ha.get(t))
    return ha.get(t);
  const r = t.replace(/FromIndex$/, ""), n = t !== r, i = yb.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || mb.includes(r))
  )
    return;
  const o = async function(a, ...s) {
    const u = this.transaction(a, i ? "readwrite" : "readonly");
    let c = u.store;
    return n && (c = c.index(s.shift())), (await Promise.all([
      c[r](...s),
      i && u.done
    ]))[0];
  };
  return ha.set(t, o), o;
}
vb((e) => ({
  ...e,
  get: (t, r, n) => Gu(t, r) || e.get(t, r, n),
  has: (t, r) => !!Gu(t, r) || e.has(t, r)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bb {
  constructor(t) {
    this.container = t;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((r) => {
      if (Eb(r)) {
        const n = r.getImmediate();
        return `${n.library}/${n.version}`;
      } else
        return null;
    }).filter((r) => r).join(" ");
  }
}
function Eb(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Wa = "@firebase/app", Yu = "0.11.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt = new Ss("@firebase/app"), _b = "@firebase/app-compat", wb = "@firebase/analytics-compat", Cb = "@firebase/analytics", Sb = "@firebase/app-check-compat", Ab = "@firebase/app-check", Tb = "@firebase/auth", Ob = "@firebase/auth-compat", Ib = "@firebase/database", kb = "@firebase/data-connect", Db = "@firebase/database-compat", Rb = "@firebase/functions", Pb = "@firebase/functions-compat", Bb = "@firebase/installations", Fb = "@firebase/installations-compat", Nb = "@firebase/messaging", Mb = "@firebase/messaging-compat", $b = "@firebase/performance", Lb = "@firebase/performance-compat", zb = "@firebase/remote-config", jb = "@firebase/remote-config-compat", Ub = "@firebase/storage", Hb = "@firebase/storage-compat", Wb = "@firebase/firestore", qb = "@firebase/vertexai", Vb = "@firebase/firestore-compat", Gb = "firebase", Yb = "11.3.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qa = "[DEFAULT]", Kb = {
  [Wa]: "fire-core",
  [_b]: "fire-core-compat",
  [Cb]: "fire-analytics",
  [wb]: "fire-analytics-compat",
  [Ab]: "fire-app-check",
  [Sb]: "fire-app-check-compat",
  [Tb]: "fire-auth",
  [Ob]: "fire-auth-compat",
  [Ib]: "fire-rtdb",
  [kb]: "fire-data-connect",
  [Db]: "fire-rtdb-compat",
  [Rb]: "fire-fn",
  [Pb]: "fire-fn-compat",
  [Bb]: "fire-iid",
  [Fb]: "fire-iid-compat",
  [Nb]: "fire-fcm",
  [Mb]: "fire-fcm-compat",
  [$b]: "fire-perf",
  [Lb]: "fire-perf-compat",
  [zb]: "fire-rc",
  [jb]: "fire-rc-compat",
  [Ub]: "fire-gcs",
  [Hb]: "fire-gcs-compat",
  [Wb]: "fire-fst",
  [Vb]: "fire-fst-compat",
  [qb]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [Gb]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ji = /* @__PURE__ */ new Map(), Xb = /* @__PURE__ */ new Map(), Va = /* @__PURE__ */ new Map();
function Ku(e, t) {
  try {
    e.container.addComponent(t);
  } catch (r) {
    Tt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, r);
  }
}
function Ot(e) {
  const t = e.name;
  if (Va.has(t))
    return Tt.debug(`There were multiple attempts to register component ${t}.`), !1;
  Va.set(t, e);
  for (const r of Ji.values())
    Ku(r, e);
  for (const r of Xb.values())
    Ku(r, e);
  return !0;
}
function wn(e, t) {
  const r = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return r && r.triggerHeartbeat(), e.container.getProvider(t);
}
function pt(e) {
  return e == null ? !1 : e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jb = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}'",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "server-app-deleted": "Firebase Server App has been deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}, zt = new fr("app", "Firebase", Jb);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qb {
  constructor(t, r, n) {
    this._isDeleted = !1, this._options = Object.assign({}, t), this._config = Object.assign({}, r), this._name = r.name, this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new mt(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = t;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw zt.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn = Yb;
function Kf(e, t = {}) {
  let r = e;
  typeof t != "object" && (t = { name: t });
  const n = Object.assign({ name: qa, automaticDataCollectionEnabled: !1 }, t), i = n.name;
  if (typeof i != "string" || !i)
    throw zt.create("bad-app-name", {
      appName: String(i)
    });
  if (r || (r = Uf()), !r)
    throw zt.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const o = Ji.get(i);
  if (o) {
    if (dn(r, o.options) && dn(n, o.config))
      return o;
    throw zt.create("duplicate-app", { appName: i });
  }
  const a = new ob(i);
  for (const u of Va.values())
    a.addComponent(u);
  const s = new Qb(r, n, a);
  return Ji.set(i, s), s;
}
function Zb(e = qa) {
  const t = Ji.get(e);
  if (!t && e === qa && Uf())
    return Kf();
  if (!t)
    throw zt.create("no-app", { appName: e });
  return t;
}
function xt(e, t, r) {
  var n;
  let i = (n = Kb[e]) !== null && n !== void 0 ? n : e;
  r && (i += `-${r}`);
  const o = i.match(/\s|\//), a = t.match(/\s|\//);
  if (o || a) {
    const s = [
      `Unable to register library "${i}" with version "${t}":`
    ];
    o && s.push(`library name "${i}" contains illegal characters (whitespace or "/")`), o && a && s.push("and"), a && s.push(`version name "${t}" contains illegal characters (whitespace or "/")`), Tt.warn(s.join(" "));
    return;
  }
  Ot(new mt(
    `${i}-version`,
    () => ({ library: i, version: t }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const eE = "firebase-heartbeat-database", tE = 1, pn = "firebase-heartbeat-store";
let va = null;
function Xf() {
  return va || (va = Yf(eE, tE, {
    upgrade: (e, t) => {
      switch (t) {
        case 0:
          try {
            e.createObjectStore(pn);
          } catch (r) {
            console.warn(r);
          }
      }
    }
  }).catch((e) => {
    throw zt.create("idb-open", {
      originalErrorMessage: e.message
    });
  })), va;
}
async function rE(e) {
  try {
    const r = (await Xf()).transaction(pn), n = await r.objectStore(pn).get(Jf(e));
    return await r.done, n;
  } catch (t) {
    if (t instanceof bt)
      Tt.warn(t.message);
    else {
      const r = zt.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message
      });
      Tt.warn(r.message);
    }
  }
}
async function Xu(e, t) {
  try {
    const n = (await Xf()).transaction(pn, "readwrite");
    await n.objectStore(pn).put(t, Jf(e)), await n.done;
  } catch (r) {
    if (r instanceof bt)
      Tt.warn(r.message);
    else {
      const n = zt.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message
      });
      Tt.warn(n.message);
    }
  }
}
function Jf(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nE = 1024, iE = 30;
class oE {
  constructor(t) {
    this.container = t, this._heartbeatsCache = null;
    const r = this.container.getProvider("app").getImmediate();
    this._storage = new sE(r), this._heartbeatsCachePromise = this._storage.read().then((n) => (this._heartbeatsCache = n, n));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var t, r;
    try {
      const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), o = Ju();
      if (((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((r = this._heartbeatsCache) === null || r === void 0 ? void 0 : r.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === o || this._heartbeatsCache.heartbeats.some((a) => a.date === o))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: o, agent: i }), this._heartbeatsCache.heartbeats.length > iE) {
        const a = cE(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(a, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (n) {
      Tt.warn(n);
    }
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var t;
    try {
      if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
        return "";
      const r = Ju(), { heartbeatsToSend: n, unsentEntries: i } = aE(this._heartbeatsCache.heartbeats), o = Lf(JSON.stringify({ version: 2, heartbeats: n }));
      return this._heartbeatsCache.lastSentHeartbeatDate = r, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), o;
    } catch (r) {
      return Tt.warn(r), "";
    }
  }
}
function Ju() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function aE(e, t = nE) {
  const r = [];
  let n = e.slice();
  for (const i of e) {
    const o = r.find((a) => a.agent === i.agent);
    if (o) {
      if (o.dates.push(i.date), Qu(r) > t) {
        o.dates.pop();
        break;
      }
    } else if (r.push({
      agent: i.agent,
      dates: [i.date]
    }), Qu(r) > t) {
      r.pop();
      break;
    }
    n = n.slice(1);
  }
  return {
    heartbeatsToSend: r,
    unsentEntries: n
  };
}
class sE {
  constructor(t) {
    this.app = t, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Wf() ? qf().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const r = await rE(this.app);
      return r != null && r.heartbeats ? r : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(t) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Xu(this.app, {
        lastSentHeartbeatDate: (r = t.lastSentHeartbeatDate) !== null && r !== void 0 ? r : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(t) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Xu(this.app, {
        lastSentHeartbeatDate: (r = t.lastSentHeartbeatDate) !== null && r !== void 0 ? r : i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...t.heartbeats
        ]
      });
    } else
      return;
  }
}
function Qu(e) {
  return Lf(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: e })
  ).length;
}
function cE(e) {
  if (e.length === 0)
    return -1;
  let t = 0, r = e[0].date;
  for (let n = 1; n < e.length; n++)
    e[n].date < r && (r = e[n].date, t = n);
  return t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uE(e) {
  Ot(new mt(
    "platform-logger",
    (t) => new bb(t),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Ot(new mt(
    "heartbeat",
    (t) => new oE(t),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), xt(Wa, Yu, e), xt(Wa, Yu, "esm2017"), xt("fire-js", "");
}
uE("");
const Qf = "@firebase/installations", Ts = "0.6.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zf = 1e4, ed = `w:${Ts}`, td = "FIS_v2", lE = "https://firebaseinstallations.googleapis.com/v1", fE = 60 * 60 * 1e3, dE = "installations", pE = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hE = {
  "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
  "not-registered": "Firebase Installation is not registered.",
  "installation-not-found": "Firebase Installation not found.",
  "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  "app-offline": "Could not process request. Application offline.",
  "delete-pending-registration": "Can't delete installation while there is a pending registration request."
}, ar = new fr(dE, pE, hE);
function rd(e) {
  return e instanceof bt && e.code.includes(
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nd({ projectId: e }) {
  return `${lE}/projects/${e}/installations`;
}
function id(e) {
  return {
    token: e.token,
    requestStatus: 2,
    expiresIn: xE(e.expiresIn),
    creationTime: Date.now()
  };
}
async function od(e, t) {
  const n = (await t.json()).error;
  return ar.create("request-failed", {
    requestName: e,
    serverCode: n.code,
    serverMessage: n.message,
    serverStatus: n.status
  });
}
function ad({ apiKey: e }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": e
  });
}
function vE(e, { refreshToken: t }) {
  const r = ad(e);
  return r.append("Authorization", gE(t)), r;
}
async function sd(e) {
  const t = await e();
  return t.status >= 500 && t.status < 600 ? e() : t;
}
function xE(e) {
  return Number(e.replace("s", "000"));
}
function gE(e) {
  return `${td} ${e}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mE({ appConfig: e, heartbeatServiceProvider: t }, { fid: r }) {
  const n = nd(e), i = ad(e), o = t.getImmediate({
    optional: !0
  });
  if (o) {
    const c = await o.getHeartbeatsHeader();
    c && i.append("x-firebase-client", c);
  }
  const a = {
    fid: r,
    authVersion: td,
    appId: e.appId,
    sdkVersion: ed
  }, s = {
    method: "POST",
    headers: i,
    body: JSON.stringify(a)
  }, u = await sd(() => fetch(n, s));
  if (u.ok) {
    const c = await u.json();
    return {
      fid: c.fid || r,
      registrationStatus: 2,
      refreshToken: c.refreshToken,
      authToken: id(c.authToken)
    };
  } else
    throw await od("Create Installation", u);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cd(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yE(e) {
  return btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bE = /^[cdef][\w-]{21}$/, Ga = "";
function EE() {
  try {
    const e = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
    const r = _E(e);
    return bE.test(r) ? r : Ga;
  } catch {
    return Ga;
  }
}
function _E(e) {
  return yE(e).substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oo(e) {
  return `${e.appName}!${e.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ud = /* @__PURE__ */ new Map();
function ld(e, t) {
  const r = Oo(e);
  fd(r, t), wE(r, t);
}
function fd(e, t) {
  const r = ud.get(e);
  if (r)
    for (const n of r)
      n(t);
}
function wE(e, t) {
  const r = CE();
  r && r.postMessage({ key: e, fid: t }), SE();
}
let tr = null;
function CE() {
  return !tr && "BroadcastChannel" in self && (tr = new BroadcastChannel("[Firebase] FID Change"), tr.onmessage = (e) => {
    fd(e.data.key, e.data.fid);
  }), tr;
}
function SE() {
  ud.size === 0 && tr && (tr.close(), tr = null);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const AE = "firebase-installations-database", TE = 1, sr = "firebase-installations-store";
let xa = null;
function Os() {
  return xa || (xa = Yf(AE, TE, {
    upgrade: (e, t) => {
      switch (t) {
        case 0:
          e.createObjectStore(sr);
      }
    }
  })), xa;
}
async function Qi(e, t) {
  const r = Oo(e), i = (await Os()).transaction(sr, "readwrite"), o = i.objectStore(sr), a = await o.get(r);
  return await o.put(t, r), await i.done, (!a || a.fid !== t.fid) && ld(e, t.fid), t;
}
async function dd(e) {
  const t = Oo(e), n = (await Os()).transaction(sr, "readwrite");
  await n.objectStore(sr).delete(t), await n.done;
}
async function Io(e, t) {
  const r = Oo(e), i = (await Os()).transaction(sr, "readwrite"), o = i.objectStore(sr), a = await o.get(r), s = t(a);
  return s === void 0 ? await o.delete(r) : await o.put(s, r), await i.done, s && (!a || a.fid !== s.fid) && ld(e, s.fid), s;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Is(e) {
  let t;
  const r = await Io(e.appConfig, (n) => {
    const i = OE(n), o = IE(e, i);
    return t = o.registrationPromise, o.installationEntry;
  });
  return r.fid === Ga ? { installationEntry: await t } : {
    installationEntry: r,
    registrationPromise: t
  };
}
function OE(e) {
  const t = e || {
    fid: EE(),
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  };
  return pd(t);
}
function IE(e, t) {
  if (t.registrationStatus === 0) {
    if (!navigator.onLine) {
      const i = Promise.reject(ar.create(
        "app-offline"
        /* ErrorCode.APP_OFFLINE */
      ));
      return {
        installationEntry: t,
        registrationPromise: i
      };
    }
    const r = {
      fid: t.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    }, n = kE(e, r);
    return { installationEntry: r, registrationPromise: n };
  } else return t.registrationStatus === 1 ? {
    installationEntry: t,
    registrationPromise: DE(e)
  } : { installationEntry: t };
}
async function kE(e, t) {
  try {
    const r = await mE(e, t);
    return Qi(e.appConfig, r);
  } catch (r) {
    throw rd(r) && r.customData.serverCode === 409 ? await dd(e.appConfig) : await Qi(e.appConfig, {
      fid: t.fid,
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    }), r;
  }
}
async function DE(e) {
  let t = await Zu(e.appConfig);
  for (; t.registrationStatus === 1; )
    await cd(100), t = await Zu(e.appConfig);
  if (t.registrationStatus === 0) {
    const { installationEntry: r, registrationPromise: n } = await Is(e);
    return n || r;
  }
  return t;
}
function Zu(e) {
  return Io(e, (t) => {
    if (!t)
      throw ar.create(
        "installation-not-found"
        /* ErrorCode.INSTALLATION_NOT_FOUND */
      );
    return pd(t);
  });
}
function pd(e) {
  return RE(e) ? {
    fid: e.fid,
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  } : e;
}
function RE(e) {
  return e.registrationStatus === 1 && e.registrationTime + Zf < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function PE({ appConfig: e, heartbeatServiceProvider: t }, r) {
  const n = BE(e, r), i = vE(e, r), o = t.getImmediate({
    optional: !0
  });
  if (o) {
    const c = await o.getHeartbeatsHeader();
    c && i.append("x-firebase-client", c);
  }
  const a = {
    installation: {
      sdkVersion: ed,
      appId: e.appId
    }
  }, s = {
    method: "POST",
    headers: i,
    body: JSON.stringify(a)
  }, u = await sd(() => fetch(n, s));
  if (u.ok) {
    const c = await u.json();
    return id(c);
  } else
    throw await od("Generate Auth Token", u);
}
function BE(e, { fid: t }) {
  return `${nd(e)}/${t}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ks(e, t = !1) {
  let r;
  const n = await Io(e.appConfig, (o) => {
    if (!hd(o))
      throw ar.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const a = o.authToken;
    if (!t && ME(a))
      return o;
    if (a.requestStatus === 1)
      return r = FE(e, t), o;
    {
      if (!navigator.onLine)
        throw ar.create(
          "app-offline"
          /* ErrorCode.APP_OFFLINE */
        );
      const s = LE(o);
      return r = NE(e, s), s;
    }
  });
  return r ? await r : n.authToken;
}
async function FE(e, t) {
  let r = await e0(e.appConfig);
  for (; r.authToken.requestStatus === 1; )
    await cd(100), r = await e0(e.appConfig);
  const n = r.authToken;
  return n.requestStatus === 0 ? ks(e, t) : n;
}
function e0(e) {
  return Io(e, (t) => {
    if (!hd(t))
      throw ar.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const r = t.authToken;
    return zE(r) ? Object.assign(Object.assign({}, t), { authToken: {
      requestStatus: 0
      /* RequestStatus.NOT_STARTED */
    } }) : t;
  });
}
async function NE(e, t) {
  try {
    const r = await PE(e, t), n = Object.assign(Object.assign({}, t), { authToken: r });
    return await Qi(e.appConfig, n), r;
  } catch (r) {
    if (rd(r) && (r.customData.serverCode === 401 || r.customData.serverCode === 404))
      await dd(e.appConfig);
    else {
      const n = Object.assign(Object.assign({}, t), { authToken: {
        requestStatus: 0
        /* RequestStatus.NOT_STARTED */
      } });
      await Qi(e.appConfig, n);
    }
    throw r;
  }
}
function hd(e) {
  return e !== void 0 && e.registrationStatus === 2;
}
function ME(e) {
  return e.requestStatus === 2 && !$E(e);
}
function $E(e) {
  const t = Date.now();
  return t < e.creationTime || e.creationTime + e.expiresIn < t + fE;
}
function LE(e) {
  const t = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, e), { authToken: t });
}
function zE(e) {
  return e.requestStatus === 1 && e.requestTime + Zf < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jE(e) {
  const t = e, { installationEntry: r, registrationPromise: n } = await Is(t);
  return n ? n.catch(console.error) : ks(t).catch(console.error), r.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function UE(e, t = !1) {
  const r = e;
  return await HE(r), (await ks(r, t)).token;
}
async function HE(e) {
  const { registrationPromise: t } = await Is(e);
  t && await t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function WE(e) {
  if (!e || !e.options)
    throw ga("App Configuration");
  if (!e.name)
    throw ga("App Name");
  const t = [
    "projectId",
    "apiKey",
    "appId"
  ];
  for (const r of t)
    if (!e.options[r])
      throw ga(r);
  return {
    appName: e.name,
    projectId: e.options.projectId,
    apiKey: e.options.apiKey,
    appId: e.options.appId
  };
}
function ga(e) {
  return ar.create("missing-app-config-values", {
    valueName: e
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vd = "installations", qE = "installations-internal", VE = (e) => {
  const t = e.getProvider("app").getImmediate(), r = WE(t), n = wn(t, "heartbeat");
  return {
    app: t,
    appConfig: r,
    heartbeatServiceProvider: n,
    _delete: () => Promise.resolve()
  };
}, GE = (e) => {
  const t = e.getProvider("app").getImmediate(), r = wn(t, vd).getImmediate();
  return {
    getId: () => jE(r),
    getToken: (i) => UE(r, i)
  };
};
function YE() {
  Ot(new mt(
    vd,
    VE,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), Ot(new mt(
    qE,
    GE,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
}
YE();
xt(Qf, Ts);
xt(Qf, Ts, "esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zi = "analytics", KE = "firebase_id", XE = "origin", JE = 60 * 1e3, QE = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig", Ds = "https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xe = new Ss("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ZE = {
  "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
  "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
  "no-client-id": 'The "client_id" field is empty.',
  "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
}, rt = new fr("analytics", "Analytics", ZE);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e_(e) {
  if (!e.startsWith(Ds)) {
    const t = rt.create("invalid-gtag-resource", {
      gtagURL: e
    });
    return Xe.warn(t.message), "";
  }
  return e;
}
function xd(e) {
  return Promise.all(e.map((t) => t.catch((r) => r)));
}
function t_(e, t) {
  let r;
  return window.trustedTypes && (r = window.trustedTypes.createPolicy(e, t)), r;
}
function r_(e, t) {
  const r = t_("firebase-js-sdk-policy", {
    createScriptURL: e_
  }), n = document.createElement("script"), i = `${Ds}?l=${e}&id=${t}`;
  n.src = r ? r == null ? void 0 : r.createScriptURL(i) : i, n.async = !0, document.head.appendChild(n);
}
function n_(e) {
  let t = [];
  return Array.isArray(window[e]) ? t = window[e] : window[e] = t, t;
}
async function i_(e, t, r, n, i, o) {
  const a = n[i];
  try {
    if (a)
      await t[a];
    else {
      const u = (await xd(r)).find((c) => c.measurementId === i);
      u && await t[u.appId];
    }
  } catch (s) {
    Xe.error(s);
  }
  e("config", i, o);
}
async function o_(e, t, r, n, i) {
  try {
    let o = [];
    if (i && i.send_to) {
      let a = i.send_to;
      Array.isArray(a) || (a = [a]);
      const s = await xd(r);
      for (const u of a) {
        const c = s.find((y) => y.measurementId === u), d = c && t[c.appId];
        if (d)
          o.push(d);
        else {
          o = [];
          break;
        }
      }
    }
    o.length === 0 && (o = Object.values(t)), await Promise.all(o), e("event", n, i || {});
  } catch (o) {
    Xe.error(o);
  }
}
function a_(e, t, r, n) {
  async function i(o, ...a) {
    try {
      if (o === "event") {
        const [s, u] = a;
        await o_(e, t, r, s, u);
      } else if (o === "config") {
        const [s, u] = a;
        await i_(e, t, r, n, s, u);
      } else if (o === "consent") {
        const [s, u] = a;
        e("consent", s, u);
      } else if (o === "get") {
        const [s, u, c] = a;
        e("get", s, u, c);
      } else if (o === "set") {
        const [s] = a;
        e("set", s);
      } else
        e(o, ...a);
    } catch (s) {
      Xe.error(s);
    }
  }
  return i;
}
function s_(e, t, r, n, i) {
  let o = function(...a) {
    window[n].push(arguments);
  };
  return window[i] && typeof window[i] == "function" && (o = window[i]), window[i] = a_(o, e, t, r), {
    gtagCore: o,
    wrappedGtag: window[i]
  };
}
function c_(e) {
  const t = window.document.getElementsByTagName("script");
  for (const r of Object.values(t))
    if (r.src && r.src.includes(Ds) && r.src.includes(e))
      return r;
  return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u_ = 30, l_ = 1e3;
class f_ {
  constructor(t = {}, r = l_) {
    this.throttleMetadata = t, this.intervalMillis = r;
  }
  getThrottleMetadata(t) {
    return this.throttleMetadata[t];
  }
  setThrottleMetadata(t, r) {
    this.throttleMetadata[t] = r;
  }
  deleteThrottleMetadata(t) {
    delete this.throttleMetadata[t];
  }
}
const gd = new f_();
function d_(e) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": e
  });
}
async function p_(e) {
  var t;
  const { appId: r, apiKey: n } = e, i = {
    method: "GET",
    headers: d_(n)
  }, o = QE.replace("{app-id}", r), a = await fetch(o, i);
  if (a.status !== 200 && a.status !== 304) {
    let s = "";
    try {
      const u = await a.json();
      !((t = u.error) === null || t === void 0) && t.message && (s = u.error.message);
    } catch {
    }
    throw rt.create("config-fetch-failed", {
      httpStatus: a.status,
      responseMessage: s
    });
  }
  return a.json();
}
async function h_(e, t = gd, r) {
  const { appId: n, apiKey: i, measurementId: o } = e.options;
  if (!n)
    throw rt.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  if (!i) {
    if (o)
      return {
        measurementId: o,
        appId: n
      };
    throw rt.create(
      "no-api-key"
      /* AnalyticsError.NO_API_KEY */
    );
  }
  const a = t.getThrottleMetadata(n) || {
    backoffCount: 0,
    throttleEndTimeMillis: Date.now()
  }, s = new g_();
  return setTimeout(async () => {
    s.abort();
  }, JE), md({ appId: n, apiKey: i, measurementId: o }, a, s, t);
}
async function md(e, { throttleEndTimeMillis: t, backoffCount: r }, n, i = gd) {
  var o;
  const { appId: a, measurementId: s } = e;
  try {
    await v_(n, t);
  } catch (u) {
    if (s)
      return Xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${u == null ? void 0 : u.message}]`), { appId: a, measurementId: s };
    throw u;
  }
  try {
    const u = await p_(e);
    return i.deleteThrottleMetadata(a), u;
  } catch (u) {
    const c = u;
    if (!x_(c)) {
      if (i.deleteThrottleMetadata(a), s)
        return Xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c == null ? void 0 : c.message}]`), { appId: a, measurementId: s };
      throw u;
    }
    const d = Number((o = c == null ? void 0 : c.customData) === null || o === void 0 ? void 0 : o.httpStatus) === 503 ? Wu(r, i.intervalMillis, u_) : Wu(r, i.intervalMillis), y = {
      throttleEndTimeMillis: Date.now() + d,
      backoffCount: r + 1
    };
    return i.setThrottleMetadata(a, y), Xe.debug(`Calling attemptFetch again in ${d} millis`), md(e, y, n, i);
  }
}
function v_(e, t) {
  return new Promise((r, n) => {
    const i = Math.max(t - Date.now(), 0), o = setTimeout(r, i);
    e.addEventListener(() => {
      clearTimeout(o), n(rt.create("fetch-throttle", {
        throttleEndTimeMillis: t
      }));
    });
  });
}
function x_(e) {
  if (!(e instanceof bt) || !e.customData)
    return !1;
  const t = Number(e.customData.httpStatus);
  return t === 429 || t === 500 || t === 503 || t === 504;
}
class g_ {
  constructor() {
    this.listeners = [];
  }
  addEventListener(t) {
    this.listeners.push(t);
  }
  abort() {
    this.listeners.forEach((t) => t());
  }
}
async function m_(e, t, r, n, i) {
  if (i && i.global) {
    e("event", r, n);
    return;
  } else {
    const o = await t, a = Object.assign(Object.assign({}, n), { send_to: o });
    e("event", r, a);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function y_() {
  if (Wf())
    try {
      await qf();
    } catch (e) {
      return Xe.warn(rt.create("indexeddb-unavailable", {
        errorInfo: e == null ? void 0 : e.toString()
      }).message), !1;
    }
  else
    return Xe.warn(rt.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
    }).message), !1;
  return !0;
}
async function b_(e, t, r, n, i, o, a) {
  var s;
  const u = h_(e);
  u.then((w) => {
    r[w.measurementId] = w.appId, e.options.measurementId && w.measurementId !== e.options.measurementId && Xe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
  }).catch((w) => Xe.error(w)), t.push(u);
  const c = y_().then((w) => {
    if (w)
      return n.getId();
  }), [d, y] = await Promise.all([
    u,
    c
  ]);
  c_(o) || r_(o, d.measurementId), i("js", /* @__PURE__ */ new Date());
  const v = (s = a == null ? void 0 : a.config) !== null && s !== void 0 ? s : {};
  return v[XE] = "firebase", v.update = !0, y != null && (v[KE] = y), i("config", d.measurementId, v), d.measurementId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E_ {
  constructor(t) {
    this.app = t;
  }
  _delete() {
    return delete on[this.app.options.appId], Promise.resolve();
  }
}
let on = {}, t0 = [];
const r0 = {};
let ma = "dataLayer", __ = "gtag", n0, yd, i0 = !1;
function w_() {
  const e = [];
  if (Hf() && e.push("This is a browser extension environment."), Wy() || e.push("Cookies are not available."), e.length > 0) {
    const t = e.map((n, i) => `(${i + 1}) ${n}`).join(" "), r = rt.create("invalid-analytics-context", {
      errorInfo: t
    });
    Xe.warn(r.message);
  }
}
function C_(e, t, r) {
  w_();
  const n = e.options.appId;
  if (!n)
    throw rt.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  if (!e.options.apiKey)
    if (e.options.measurementId)
      Xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    else
      throw rt.create(
        "no-api-key"
        /* AnalyticsError.NO_API_KEY */
      );
  if (on[n] != null)
    throw rt.create("already-exists", {
      id: n
    });
  if (!i0) {
    n_(ma);
    const { wrappedGtag: o, gtagCore: a } = s_(on, t0, r0, ma, __);
    yd = o, n0 = a, i0 = !0;
  }
  return on[n] = b_(e, t0, r0, t, n0, ma, r), new E_(e);
}
function S_(e = Zb()) {
  e = qr(e);
  const t = wn(e, Zi);
  return t.isInitialized() ? t.getImmediate() : A_(e);
}
function A_(e, t = {}) {
  const r = wn(e, Zi);
  if (r.isInitialized()) {
    const i = r.getImmediate();
    if (dn(t, r.getOptions()))
      return i;
    throw rt.create(
      "already-initialized"
      /* AnalyticsError.ALREADY_INITIALIZED */
    );
  }
  return r.initialize({ options: t });
}
function T_(e, t, r, n) {
  e = qr(e), m_(yd, on[e.app.options.appId], t, r, n).catch((i) => Xe.error(i));
}
const o0 = "@firebase/analytics", a0 = "0.10.11";
function O_() {
  Ot(new mt(
    Zi,
    (t, { options: r }) => {
      const n = t.getProvider("app").getImmediate(), i = t.getProvider("installations-internal").getImmediate();
      return C_(n, i, r);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), Ot(new mt(
    "analytics-internal",
    e,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), xt(o0, a0), xt(o0, a0, "esm2017");
  function e(t) {
    try {
      const r = t.getProvider(Zi).getImmediate();
      return {
        logEvent: (n, i, o) => T_(r, n, i, o)
      };
    } catch (r) {
      throw rt.create("interop-component-reg-failed", {
        reason: r
      });
    }
  }
}
O_();
var I_ = "firebase", k_ = "11.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xt(I_, k_, "app");
function Rs(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function bd() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const D_ = bd, Ed = new fr("auth", "Firebase", bd());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const eo = new Ss("@firebase/auth");
function R_(e, ...t) {
  eo.logLevel <= we.WARN && eo.warn(`Auth (${Cn}): ${e}`, ...t);
}
function Jn(e, ...t) {
  eo.logLevel <= we.ERROR && eo.error(`Auth (${Cn}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(e, ...t) {
  throw Ps(e, ...t);
}
function gt(e, ...t) {
  return Ps(e, ...t);
}
function _d(e, t, r) {
  const n = Object.assign(Object.assign({}, D_()), { [t]: r });
  return new fr("auth", "Firebase", n).create(t, {
    appName: e.name
  });
}
function jt(e) {
  return _d(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function Ps(e, ...t) {
  if (typeof e != "string") {
    const r = t[0], n = [...t.slice(1)];
    return n[0] && (n[0].appName = e.name), e._errorFactory.create(r, ...n);
  }
  return Ed.create(e, ...t);
}
function oe(e, t, ...r) {
  if (!e)
    throw Ps(t, ...r);
}
function wt(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw Jn(t), new Error(t);
}
function kt(e, t) {
  e || wt(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ya() {
  var e;
  return typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.href) || "";
}
function P_() {
  return s0() === "http:" || s0() === "https:";
}
function s0() {
  var e;
  return typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B_() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (P_() || Hf() || "connection" in navigator) ? navigator.onLine : !0;
}
function F_() {
  if (typeof navigator > "u")
    return null;
  const e = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    e.languages && e.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    e.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn {
  constructor(t, r) {
    this.shortDelay = t, this.longDelay = r, kt(r > t, "Short delay should be less than long delay!"), this.isMobile = zy() || Uy();
  }
  get() {
    return B_() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bs(e, t) {
  kt(e.emulator, "Emulator should always be set here");
  const { url: r } = e.emulator;
  return t ? `${r}${t.startsWith("/") ? t.slice(1) : t}` : r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wd {
  static initialize(t, r, n) {
    this.fetchImpl = t, r && (this.headersImpl = r), n && (this.responseImpl = n);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch)
      return globalThis.fetch;
    if (typeof fetch < "u")
      return fetch;
    wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u")
      return Headers;
    wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u")
      return Response;
    wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N_ = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  // Recaptcha related errors.
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M_ = new Sn(3e4, 6e4);
function ko(e, t) {
  return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId }) : t;
}
async function Vr(e, t, r, n, i = {}) {
  return Cd(e, i, async () => {
    let o = {}, a = {};
    n && (t === "GET" ? a = n : o = {
      body: JSON.stringify(n)
    });
    const s = _n(Object.assign({ key: e.config.apiKey }, a)).slice(1), u = await e._getAdditionalHeaders();
    u[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", e.languageCode && (u[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = e.languageCode);
    const c = Object.assign({
      method: t,
      headers: u
    }, o);
    return jy() || (c.referrerPolicy = "no-referrer"), wd.fetch()(Ad(e, e.config.apiHost, r, s), c);
  });
}
async function Cd(e, t, r) {
  e._canInitEmulator = !1;
  const n = Object.assign(Object.assign({}, N_), t);
  try {
    const i = new $_(e), o = await Promise.race([
      r(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const a = await o.json();
    if ("needConfirmation" in a)
      throw $n(e, "account-exists-with-different-credential", a);
    if (o.ok && !("errorMessage" in a))
      return a;
    {
      const s = o.ok ? a.errorMessage : a.error.message, [u, c] = s.split(" : ");
      if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw $n(e, "credential-already-in-use", a);
      if (u === "EMAIL_EXISTS")
        throw $n(e, "email-already-in-use", a);
      if (u === "USER_DISABLED")
        throw $n(e, "user-disabled", a);
      const d = n[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw _d(e, d, c);
      It(e, d);
    }
  } catch (i) {
    if (i instanceof bt)
      throw i;
    It(e, "network-request-failed", { message: String(i) });
  }
}
async function Sd(e, t, r, n, i = {}) {
  const o = await Vr(e, t, r, n, i);
  return "mfaPendingCredential" in o && It(e, "multi-factor-auth-required", {
    _serverResponse: o
  }), o;
}
function Ad(e, t, r, n) {
  const i = `${t}${r}?${n}`;
  return e.config.emulator ? Bs(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class $_ {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(t) {
    this.auth = t, this.timer = null, this.promise = new Promise((r, n) => {
      this.timer = setTimeout(() => n(gt(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), M_.get());
    });
  }
}
function $n(e, t, r) {
  const n = {
    appName: e.name
  };
  r.email && (n.email = r.email), r.phoneNumber && (n.phoneNumber = r.phoneNumber);
  const i = gt(e, t, n);
  return i.customData._tokenResponse = r, i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function L_(e, t) {
  return Vr(e, "POST", "/v1/accounts:delete", t);
}
async function Td(e, t) {
  return Vr(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime()))
        return t.toUTCString();
    } catch {
    }
}
async function z_(e, t = !1) {
  const r = qr(e), n = await r.getIdToken(t), i = Fs(n);
  oe(
    i && i.exp && i.auth_time && i.iat,
    r.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const o = typeof i.firebase == "object" ? i.firebase : void 0, a = o == null ? void 0 : o.sign_in_provider;
  return {
    claims: i,
    token: n,
    authTime: an(ya(i.auth_time)),
    issuedAtTime: an(ya(i.iat)),
    expirationTime: an(ya(i.exp)),
    signInProvider: a || null,
    signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null
  };
}
function ya(e) {
  return Number(e) * 1e3;
}
function Fs(e) {
  const [t, r, n] = e.split(".");
  if (t === void 0 || r === void 0 || n === void 0)
    return Jn("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = zf(r);
    return i ? JSON.parse(i) : (Jn("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return Jn("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function c0(e) {
  const t = Fs(e);
  return oe(
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), oe(
    typeof t.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), oe(
    typeof t.iat < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Number(t.exp) - Number(t.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function hn(e, t, r = !1) {
  if (r)
    return t;
  try {
    return await t;
  } catch (n) {
    throw n instanceof bt && j_(n) && e.auth.currentUser === e && await e.auth.signOut(), n;
  }
}
function j_({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U_ {
  constructor(t) {
    this.user = t, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var r;
    if (t) {
      const n = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), n;
    } else {
      this.errorBackoff = 3e4;
      const i = ((r = this.user.stsTokenManager.expirationTime) !== null && r !== void 0 ? r : 0) - Date.now() - 3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning)
      return;
    const r = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, r);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka {
  constructor(t, r) {
    this.createdAt = t, this.lastLoginAt = r, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = an(this.lastLoginAt), this.creationTime = an(this.createdAt);
  }
  _copy(t) {
    this.createdAt = t.createdAt, this.lastLoginAt = t.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function to(e) {
  var t;
  const r = e.auth, n = await e.getIdToken(), i = await hn(e, Td(r, { idToken: n }));
  oe(
    i == null ? void 0 : i.users.length,
    r,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const o = i.users[0];
  e._notifyReloadListener(o);
  const a = !((t = o.providerUserInfo) === null || t === void 0) && t.length ? Od(o.providerUserInfo) : [], s = W_(e.providerData, a), u = e.isAnonymous, c = !(e.email && o.passwordHash) && !(s != null && s.length), d = u ? c : !1, y = {
    uid: o.localId,
    displayName: o.displayName || null,
    photoURL: o.photoUrl || null,
    email: o.email || null,
    emailVerified: o.emailVerified || !1,
    phoneNumber: o.phoneNumber || null,
    tenantId: o.tenantId || null,
    providerData: s,
    metadata: new Ka(o.createdAt, o.lastLoginAt),
    isAnonymous: d
  };
  Object.assign(e, y);
}
async function H_(e) {
  const t = qr(e);
  await to(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t);
}
function W_(e, t) {
  return [...e.filter((n) => !t.some((i) => i.providerId === n.providerId)), ...t];
}
function Od(e) {
  return e.map((t) => {
    var { providerId: r } = t, n = Rs(t, ["providerId"]);
    return {
      providerId: r,
      uid: n.rawId || "",
      displayName: n.displayName || null,
      email: n.email || null,
      phoneNumber: n.phoneNumber || null,
      photoURL: n.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function q_(e, t) {
  const r = await Cd(e, {}, async () => {
    const n = _n({
      grant_type: "refresh_token",
      refresh_token: t
    }).slice(1), { tokenApiHost: i, apiKey: o } = e.config, a = Ad(e, i, "/v1/token", `key=${o}`), s = await e._getAdditionalHeaders();
    return s[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", wd.fetch()(a, {
      method: "POST",
      headers: s,
      body: n
    });
  });
  return {
    accessToken: r.access_token,
    expiresIn: r.expires_in,
    refreshToken: r.refresh_token
  };
}
async function V_(e, t) {
  return Vr(e, "POST", "/v2/accounts:revokeToken", ko(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    oe(
      t.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), oe(
      typeof t.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), oe(
      typeof t.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const r = "expiresIn" in t && typeof t.expiresIn < "u" ? Number(t.expiresIn) : c0(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, r);
  }
  updateFromIdToken(t) {
    oe(
      t.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const r = c0(t);
    this.updateTokensAndExpiration(t, null, r);
  }
  async getToken(t, r = !1) {
    return !r && this.accessToken && !this.isExpired ? this.accessToken : (oe(
      this.refreshToken,
      t,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), this.refreshToken ? (await this.refresh(t, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, r) {
    const { accessToken: n, refreshToken: i, expiresIn: o } = await q_(t, r);
    this.updateTokensAndExpiration(n, i, Number(o));
  }
  updateTokensAndExpiration(t, r, n) {
    this.refreshToken = r || null, this.accessToken = t || null, this.expirationTime = Date.now() + n * 1e3;
  }
  static fromJSON(t, r) {
    const { refreshToken: n, accessToken: i, expirationTime: o } = r, a = new Sr();
    return n && (oe(typeof n == "string", "internal-error", {
      appName: t
    }), a.refreshToken = n), i && (oe(typeof i == "string", "internal-error", {
      appName: t
    }), a.accessToken = i), o && (oe(typeof o == "number", "internal-error", {
      appName: t
    }), a.expirationTime = o), a;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(t) {
    this.accessToken = t.accessToken, this.refreshToken = t.refreshToken, this.expirationTime = t.expirationTime;
  }
  _clone() {
    return Object.assign(new Sr(), this.toJSON());
  }
  _performRefresh() {
    return wt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(e, t) {
  oe(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Ct {
  constructor(t) {
    var { uid: r, auth: n, stsTokenManager: i } = t, o = Rs(t, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new U_(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = r, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = o.displayName || null, this.email = o.email || null, this.emailVerified = o.emailVerified || !1, this.phoneNumber = o.phoneNumber || null, this.photoURL = o.photoURL || null, this.isAnonymous = o.isAnonymous || !1, this.tenantId = o.tenantId || null, this.providerData = o.providerData ? [...o.providerData] : [], this.metadata = new Ka(o.createdAt || void 0, o.lastLoginAt || void 0);
  }
  async getIdToken(t) {
    const r = await hn(this, this.stsTokenManager.getToken(this.auth, t));
    return oe(
      r,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== r && (this.accessToken = r, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), r;
  }
  getIdTokenResult(t) {
    return z_(this, t);
  }
  reload() {
    return H_(this);
  }
  _assign(t) {
    this !== t && (oe(
      this.uid === t.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = t.displayName, this.photoURL = t.photoURL, this.email = t.email, this.emailVerified = t.emailVerified, this.phoneNumber = t.phoneNumber, this.isAnonymous = t.isAnonymous, this.tenantId = t.tenantId, this.providerData = t.providerData.map((r) => Object.assign({}, r)), this.metadata._copy(t.metadata), this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const r = new Ct(Object.assign(Object.assign({}, this), { auth: t, stsTokenManager: this.stsTokenManager._clone() }));
    return r.metadata._copy(this.metadata), r;
  }
  _onReload(t) {
    oe(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.reloadListener = t, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : this.reloadUserInfo = t;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, r = !1) {
    let n = !1;
    t.idToken && t.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(t), n = !0), r && await to(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (pt(this.auth.app))
      return Promise.reject(jt(this.auth));
    const t = await this.getIdToken();
    return await hn(this, L_(this.auth, { idToken: t })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((t) => Object.assign({}, t)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, r) {
    var n, i, o, a, s, u, c, d;
    const y = (n = r.displayName) !== null && n !== void 0 ? n : void 0, v = (i = r.email) !== null && i !== void 0 ? i : void 0, w = (o = r.phoneNumber) !== null && o !== void 0 ? o : void 0, _ = (a = r.photoURL) !== null && a !== void 0 ? a : void 0, l = (s = r.tenantId) !== null && s !== void 0 ? s : void 0, A = (u = r._redirectEventId) !== null && u !== void 0 ? u : void 0, k = (c = r.createdAt) !== null && c !== void 0 ? c : void 0, T = (d = r.lastLoginAt) !== null && d !== void 0 ? d : void 0, { uid: C, emailVerified: E, isAnonymous: f, providerData: S, stsTokenManager: p } = r;
    oe(
      C && p,
      t,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const b = Sr.fromJSON(this.name, p);
    oe(
      typeof C == "string",
      t,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Rt(y, t.name), Rt(v, t.name), oe(
      typeof E == "boolean",
      t,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), oe(
      typeof f == "boolean",
      t,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Rt(w, t.name), Rt(_, t.name), Rt(l, t.name), Rt(A, t.name), Rt(k, t.name), Rt(T, t.name);
    const m = new Ct({
      uid: C,
      auth: t,
      email: v,
      emailVerified: E,
      displayName: y,
      isAnonymous: f,
      photoURL: _,
      phoneNumber: w,
      tenantId: l,
      stsTokenManager: b,
      createdAt: k,
      lastLoginAt: T
    });
    return S && Array.isArray(S) && (m.providerData = S.map((g) => Object.assign({}, g))), A && (m._redirectEventId = A), m;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(t, r, n = !1) {
    const i = new Sr();
    i.updateFromServerResponse(r);
    const o = new Ct({
      uid: r.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: n
    });
    return await to(o), o;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(t, r, n) {
    const i = r.users[0];
    oe(
      i.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = i.providerUserInfo !== void 0 ? Od(i.providerUserInfo) : [], a = !(i.email && i.passwordHash) && !(o != null && o.length), s = new Sr();
    s.updateFromIdToken(n);
    const u = new Ct({
      uid: i.localId,
      auth: t,
      stsTokenManager: s,
      isAnonymous: a
    }), c = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: o,
      metadata: new Ka(i.createdAt, i.lastLoginAt),
      isAnonymous: !(i.email && i.passwordHash) && !(o != null && o.length)
    };
    return Object.assign(u, c), u;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u0 = /* @__PURE__ */ new Map();
function St(e) {
  kt(e instanceof Function, "Expected a class definition");
  let t = u0.get(e);
  return t ? (kt(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e(), u0.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Id {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, r) {
    this.storage[t] = r;
  }
  async _get(t) {
    const r = this.storage[t];
    return r === void 0 ? null : r;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, r) {
  }
  _removeListener(t, r) {
  }
}
Id.type = "NONE";
const l0 = Id;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(e, t, r) {
  return `firebase:${e}:${t}:${r}`;
}
class Ar {
  constructor(t, r, n) {
    this.persistence = t, this.auth = r, this.userKey = n;
    const { config: i, name: o } = this.auth;
    this.fullUserKey = Qn(this.userKey, i.apiKey, o), this.fullPersistenceKey = Qn("persistence", i.apiKey, o), this.boundEventHandler = r._onStorageEvent.bind(r), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Ct._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(t) {
    if (this.persistence === t)
      return;
    const r = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = t, r)
      return this.setCurrentUser(r);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, r, n = "authUser") {
    if (!r.length)
      return new Ar(St(l0), t, n);
    const i = (await Promise.all(r.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let o = i[0] || St(l0);
    const a = Qn(n, t.config.apiKey, t.name);
    let s = null;
    for (const c of r)
      try {
        const d = await c._get(a);
        if (d) {
          const y = Ct._fromJSON(t, d);
          c !== o && (s = y), o = c;
          break;
        }
      } catch {
      }
    const u = i.filter((c) => c._shouldAllowMigration);
    return !o._shouldAllowMigration || !u.length ? new Ar(o, t, n) : (o = u[0], s && await o._set(a, s.toJSON()), await Promise.all(r.map(async (c) => {
      if (c !== o)
        try {
          await c._remove(a);
        } catch {
        }
    })), new Ar(o, t, n));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f0(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (Pd(t))
    return "IEMobile";
  if (t.includes("msie") || t.includes("trident/"))
    return "IE";
  if (t.includes("edge/"))
    return "Edge";
  if (kd(t))
    return "Firefox";
  if (t.includes("silk/"))
    return "Silk";
  if (Fd(t))
    return "Blackberry";
  if (Nd(t))
    return "Webos";
  if (Dd(t))
    return "Safari";
  if ((t.includes("chrome/") || Rd(t)) && !t.includes("edge/"))
    return "Chrome";
  if (Bd(t))
    return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n = e.match(r);
    if ((n == null ? void 0 : n.length) === 2)
      return n[1];
  }
  return "Other";
}
function kd(e = Ve()) {
  return /firefox\//i.test(e);
}
function Dd(e = Ve()) {
  const t = e.toLowerCase();
  return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android");
}
function Rd(e = Ve()) {
  return /crios\//i.test(e);
}
function Pd(e = Ve()) {
  return /iemobile/i.test(e);
}
function Bd(e = Ve()) {
  return /android/i.test(e);
}
function Fd(e = Ve()) {
  return /blackberry/i.test(e);
}
function Nd(e = Ve()) {
  return /webos/i.test(e);
}
function Ns(e = Ve()) {
  return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e);
}
function G_(e = Ve()) {
  var t;
  return Ns(e) && !!(!((t = window.navigator) === null || t === void 0) && t.standalone);
}
function Y_() {
  return Hy() && document.documentMode === 10;
}
function Md(e = Ve()) {
  return Ns(e) || Bd(e) || Nd(e) || Fd(e) || /windows phone/i.test(e) || Pd(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $d(e, t = []) {
  let r;
  switch (e) {
    case "Browser":
      r = f0(Ve());
      break;
    case "Worker":
      r = `${f0(Ve())}-${e}`;
      break;
    default:
      r = e;
  }
  const n = t.length ? t.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${Cn}/${n}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K_ {
  constructor(t) {
    this.auth = t, this.queue = [];
  }
  pushCallback(t, r) {
    const n = (o) => new Promise((a, s) => {
      try {
        const u = t(o);
        a(u);
      } catch (u) {
        s(u);
      }
    });
    n.onAbort = r, this.queue.push(n);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t)
      return;
    const r = [];
    try {
      for (const n of this.queue)
        await n(t), n.onAbort && r.push(n.onAbort);
    } catch (n) {
      r.reverse();
      for (const i of r)
        try {
          i();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: n == null ? void 0 : n.message
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function X_(e, t = {}) {
  return Vr(e, "GET", "/v2/passwordPolicy", ko(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J_ = 6;
class Q_ {
  constructor(t) {
    var r, n, i, o;
    const a = t.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (r = a.minPasswordLength) !== null && r !== void 0 ? r : J_, a.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = a.maxPasswordLength), a.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = a.containsLowercaseCharacter), a.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = a.containsUppercaseCharacter), a.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = a.containsNumericCharacter), a.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = a.containsNonAlphanumericCharacter), this.enforcementState = t.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (n = t.allowedNonAlphanumericCharacters) === null || n === void 0 ? void 0 : n.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (o = t.forceUpgradeOnSignin) !== null && o !== void 0 ? o : !1, this.schemaVersion = t.schemaVersion;
  }
  validatePassword(t) {
    var r, n, i, o, a, s;
    const u = {
      isValid: !0,
      passwordPolicy: this
    };
    return this.validatePasswordLengthOptions(t, u), this.validatePasswordCharacterOptions(t, u), u.isValid && (u.isValid = (r = u.meetsMinPasswordLength) !== null && r !== void 0 ? r : !0), u.isValid && (u.isValid = (n = u.meetsMaxPasswordLength) !== null && n !== void 0 ? n : !0), u.isValid && (u.isValid = (i = u.containsLowercaseLetter) !== null && i !== void 0 ? i : !0), u.isValid && (u.isValid = (o = u.containsUppercaseLetter) !== null && o !== void 0 ? o : !0), u.isValid && (u.isValid = (a = u.containsNumericCharacter) !== null && a !== void 0 ? a : !0), u.isValid && (u.isValid = (s = u.containsNonAlphanumericCharacter) !== null && s !== void 0 ? s : !0), u;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(t, r) {
    const n = this.customStrengthOptions.minPasswordLength, i = this.customStrengthOptions.maxPasswordLength;
    n && (r.meetsMinPasswordLength = t.length >= n), i && (r.meetsMaxPasswordLength = t.length <= i);
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(t, r) {
    this.updatePasswordCharacterOptionsStatuses(
      r,
      /* containsLowercaseCharacter= */
      !1,
      /* containsUppercaseCharacter= */
      !1,
      /* containsNumericCharacter= */
      !1,
      /* containsNonAlphanumericCharacter= */
      !1
    );
    let n;
    for (let i = 0; i < t.length; i++)
      n = t.charAt(i), this.updatePasswordCharacterOptionsStatuses(
        r,
        /* containsLowercaseCharacter= */
        n >= "a" && n <= "z",
        /* containsUppercaseCharacter= */
        n >= "A" && n <= "Z",
        /* containsNumericCharacter= */
        n >= "0" && n <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(n)
      );
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(t, r, n, i, o) {
    this.customStrengthOptions.containsLowercaseLetter && (t.containsLowercaseLetter || (t.containsLowercaseLetter = r)), this.customStrengthOptions.containsUppercaseLetter && (t.containsUppercaseLetter || (t.containsUppercaseLetter = n)), this.customStrengthOptions.containsNumericCharacter && (t.containsNumericCharacter || (t.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = o));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z_ {
  constructor(t, r, n, i) {
    this.app = t, this.heartbeatServiceProvider = r, this.appCheckServiceProvider = n, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new d0(this), this.idTokenSubscription = new d0(this), this.beforeStateQueue = new K_(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Ed, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = t.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(t, r) {
    return r && (this._popupRedirectResolver = St(r)), this._initializationPromise = this.queue(async () => {
      var n, i;
      if (!this._deleted && (this.persistenceManager = await Ar.create(this, t), !this._deleted)) {
        if (!((n = this._popupRedirectResolver) === null || n === void 0) && n._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(r), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        t,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const r = await Td(this, { idToken: t }), n = await Ct._fromGetAccountInfoResponse(this, r, t);
      await this.directlySetCurrentUser(n);
    } catch (r) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", r), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var r;
    if (pt(this.app)) {
      const a = this.app.settings.authIdToken;
      return a ? new Promise((s) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(a).then(s, s));
      }) : this.directlySetCurrentUser(null);
    }
    const n = await this.assertedPersistence.getCurrentUser();
    let i = n, o = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const a = (r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId, s = i == null ? void 0 : i._redirectEventId, u = await this.tryRedirectSignIn(t);
      (!a || a === s) && (u != null && u.user) && (i = u.user, o = !0);
    }
    if (!i)
      return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (o)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (a) {
          i = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(a));
        }
      return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
    }
    return oe(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i);
  }
  async tryRedirectSignIn(t) {
    let r = null;
    try {
      r = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return r;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await to(t);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = F_();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (pt(this.app))
      return Promise.reject(jt(this));
    const r = t ? qr(t) : null;
    return r && oe(
      r.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(r && r._clone(this));
  }
  async _updateCurrentUser(t, r = !1) {
    if (!this._deleted)
      return t && oe(
        this.tenantId === t.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), r || await this.beforeStateQueue.runMiddleware(t), this.queue(async () => {
        await this.directlySetCurrentUser(t), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return pt(this.app) ? Promise.reject(jt(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(t) {
    return pt(this.app) ? Promise.reject(jt(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(St(t));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
    const r = this._getPasswordPolicyInternal();
    return r.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : r.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await X_(this), r = new Q_(t);
    this.tenantId === null ? this._projectPasswordPolicy = r : this._tenantPasswordPolicies[this.tenantId] = r;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new fr("auth", "Firebase", t());
  }
  onAuthStateChanged(t, r, n) {
    return this.registerStateListener(this.authStateSubscription, t, r, n);
  }
  beforeAuthStateChanged(t, r) {
    return this.beforeStateQueue.pushCallback(t, r);
  }
  onIdTokenChanged(t, r, n) {
    return this.registerStateListener(this.idTokenSubscription, t, r, n);
  }
  authStateReady() {
    return new Promise((t, r) => {
      if (this.currentUser)
        t();
      else {
        const n = this.onAuthStateChanged(() => {
          n(), t();
        }, r);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const r = await this.currentUser.getIdToken(), n = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: t,
        idToken: r
      };
      this.tenantId != null && (n.tenantId = this.tenantId), await V_(this, n);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON()
    };
  }
  async _setRedirectUser(t, r) {
    const n = await this.getOrInitRedirectPersistenceManager(r);
    return t === null ? n.removeCurrentUser() : n.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const r = t && St(t) || this._popupRedirectResolver;
      oe(
        r,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Ar.create(
        this,
        [St(r._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var r, n;
    return this._isInitialized && await this.queue(async () => {
    }), ((r = this._currentUser) === null || r === void 0 ? void 0 : r._redirectEventId) === t ? this._currentUser : ((n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId) === t ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, r;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const n = (r = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !== null && r !== void 0 ? r : null;
    this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, r, n, i) {
    if (this._deleted)
      return () => {
      };
    const o = typeof r == "function" ? r : r.next.bind(r);
    let a = !1;
    const s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (oe(
      s,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), s.then(() => {
      a || o(this.currentUser);
    }), typeof r == "function") {
      const u = t.addObserver(r, n, i);
      return () => {
        a = !0, u();
      };
    } else {
      const u = t.addObserver(r);
      return () => {
        a = !0, u();
      };
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(t) {
    this.currentUser && this.currentUser !== t && this._currentUser._stopProactiveRefresh(), t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(), this.currentUser = t, t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return this.operations = this.operations.then(t, t), this.operations;
  }
  get assertedPersistence() {
    return oe(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(t) {
    !t || this.frameworks.includes(t) || (this.frameworks.push(t), this.frameworks.sort(), this.clientVersion = $d(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const r = {
      "X-Client-Version": this.clientVersion
    };
    this.app.options.appId && (r[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const n = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || t === void 0 ? void 0 : t.getHeartbeatsHeader());
    n && (r[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = n);
    const i = await this._getAppCheckToken();
    return i && (r[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = i), r;
  }
  async _getAppCheckToken() {
    var t;
    if (pt(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const r = await ((t = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || t === void 0 ? void 0 : t.getToken());
    return r != null && r.error && R_(`Error while retrieving App Check token: ${r.error}`), r == null ? void 0 : r.token;
  }
}
function Ms(e) {
  return qr(e);
}
class d0 {
  constructor(t) {
    this.auth = t, this.observer = null, this.addObserver = Ky((r) => this.observer = r);
  }
  get next() {
    return oe(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $s = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function e2(e) {
  $s = e;
}
function t2(e) {
  return $s.loadJS(e);
}
function r2() {
  return $s.gapiScript;
}
function n2(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function i2(e, t) {
  const r = wn(e, "auth");
  if (r.isInitialized()) {
    const i = r.getImmediate(), o = r.getOptions();
    if (dn(o, t ?? {}))
      return i;
    It(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return r.initialize({ options: t });
}
function o2(e, t) {
  const r = (t == null ? void 0 : t.persistence) || [], n = (Array.isArray(r) ? r : [r]).map(St);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap), e._initializeWithPersistence(n, t == null ? void 0 : t.popupRedirectResolver);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ld {
  /** @internal */
  constructor(t, r) {
    this.providerId = t, this.signInMethod = r;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return wt("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(t) {
    return wt("not implemented");
  }
  /** @internal */
  _linkToIdToken(t, r) {
    return wt("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(t) {
    return wt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tr(e, t) {
  return Sd(e, "POST", "/v1/accounts:signInWithIdp", ko(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a2 = "http://localhost";
class cr extends Ld {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(t) {
    const r = new cr(t.providerId, t.signInMethod);
    return t.idToken || t.accessToken ? (t.idToken && (r.idToken = t.idToken), t.accessToken && (r.accessToken = t.accessToken), t.nonce && !t.pendingToken && (r.nonce = t.nonce), t.pendingToken && (r.pendingToken = t.pendingToken)) : t.oauthToken && t.oauthTokenSecret ? (r.accessToken = t.oauthToken, r.secret = t.oauthTokenSecret) : It(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), r;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(t) {
    const r = typeof t == "string" ? JSON.parse(t) : t, { providerId: n, signInMethod: i } = r, o = Rs(r, ["providerId", "signInMethod"]);
    if (!n || !i)
      return null;
    const a = new cr(n, i);
    return a.idToken = o.idToken || void 0, a.accessToken = o.accessToken || void 0, a.secret = o.secret, a.nonce = o.nonce, a.pendingToken = o.pendingToken || null, a;
  }
  /** @internal */
  _getIdTokenResponse(t) {
    const r = this.buildRequest();
    return Tr(t, r);
  }
  /** @internal */
  _linkToIdToken(t, r) {
    const n = this.buildRequest();
    return n.idToken = r, Tr(t, n);
  }
  /** @internal */
  _getReauthenticationResolver(t) {
    const r = this.buildRequest();
    return r.autoCreate = !1, Tr(t, r);
  }
  buildRequest() {
    const t = {
      requestUri: a2,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      t.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken), this.accessToken && (r.access_token = this.accessToken), this.secret && (r.oauth_token_secret = this.secret), r.providerId = this.providerId, this.nonce && !this.pendingToken && (r.nonce = this.nonce), t.postBody = _n(r);
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zd {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(t) {
    this.providerId = t, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(t) {
    return this.customParameters = t, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An extends zd {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt extends An {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(t) {
    return cr._fromParams({
      providerId: Bt.PROVIDER_ID,
      signInMethod: Bt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(t) {
    return Bt.credentialFromTaggedObject(t);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(t) {
    return Bt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
      return null;
    try {
      return Bt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Bt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Bt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft extends An {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(t, r) {
    return cr._fromParams({
      providerId: Ft.PROVIDER_ID,
      signInMethod: Ft.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: r
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(t) {
    return Ft.credentialFromTaggedObject(t);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(t) {
    return Ft.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n } = t;
    if (!r && !n)
      return null;
    try {
      return Ft.credential(r, n);
    } catch {
      return null;
    }
  }
}
Ft.GOOGLE_SIGN_IN_METHOD = "google.com";
Ft.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends An {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for GitHub.
   *
   * @param accessToken - GitHub access token.
   */
  static credential(t) {
    return cr._fromParams({
      providerId: Nt.PROVIDER_ID,
      signInMethod: Nt.GITHUB_SIGN_IN_METHOD,
      accessToken: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(t) {
    return Nt.credentialFromTaggedObject(t);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(t) {
    return Nt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
      return null;
    try {
      return Nt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Nt.GITHUB_SIGN_IN_METHOD = "github.com";
Nt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt extends An {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(t, r) {
    return cr._fromParams({
      providerId: Mt.PROVIDER_ID,
      signInMethod: Mt.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: r
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(t) {
    return Mt.credentialFromTaggedObject(t);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(t) {
    return Mt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t)
      return null;
    const { oauthAccessToken: r, oauthTokenSecret: n } = t;
    if (!r || !n)
      return null;
    try {
      return Mt.credential(r, n);
    } catch {
      return null;
    }
  }
}
Mt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Mt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function s2(e, t) {
  return Sd(e, "POST", "/v1/accounts:signUp", ko(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht {
  constructor(t) {
    this.user = t.user, this.providerId = t.providerId, this._tokenResponse = t._tokenResponse, this.operationType = t.operationType;
  }
  static async _fromIdTokenResponse(t, r, n, i = !1) {
    const o = await Ct._fromIdTokenResponse(t, n, i), a = p0(n);
    return new Ht({
      user: o,
      providerId: a,
      _tokenResponse: n,
      operationType: r
    });
  }
  static async _forOperation(t, r, n) {
    await t._updateTokensIfNecessary(
      n,
      /* reload */
      !0
    );
    const i = p0(n);
    return new Ht({
      user: t,
      providerId: i,
      _tokenResponse: n,
      operationType: r
    });
  }
}
function p0(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function c2(e) {
  var t;
  if (pt(e.app))
    return Promise.reject(jt(e));
  const r = Ms(e);
  if (await r._initializationPromise, !((t = r.currentUser) === null || t === void 0) && t.isAnonymous)
    return new Ht({
      user: r.currentUser,
      providerId: null,
      operationType: "signIn"
      /* OperationType.SIGN_IN */
    });
  const n = await s2(r, {
    returnSecureToken: !0
  }), i = await Ht._fromIdTokenResponse(r, "signIn", n, !0);
  return await r._updateCurrentUser(i.user), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro extends bt {
  constructor(t, r, n, i) {
    var o;
    super(r.code, r.message), this.operationType = n, this.user = i, Object.setPrototypeOf(this, ro.prototype), this.customData = {
      appName: t.name,
      tenantId: (o = t.tenantId) !== null && o !== void 0 ? o : void 0,
      _serverResponse: r.customData._serverResponse,
      operationType: n
    };
  }
  static _fromErrorAndOperation(t, r, n, i) {
    return new ro(t, r, n, i);
  }
}
function jd(e, t, r, n) {
  return (t === "reauthenticate" ? r._getReauthenticationResolver(e) : r._getIdTokenResponse(e)).catch((o) => {
    throw o.code === "auth/multi-factor-auth-required" ? ro._fromErrorAndOperation(e, o, t, n) : o;
  });
}
async function u2(e, t, r = !1) {
  const n = await hn(e, t._linkToIdToken(e.auth, await e.getIdToken()), r);
  return Ht._forOperation(e, "link", n);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function l2(e, t, r = !1) {
  const { auth: n } = e;
  if (pt(n.app))
    return Promise.reject(jt(n));
  const i = "reauthenticate";
  try {
    const o = await hn(e, jd(n, i, t, e), r);
    oe(
      o.idToken,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const a = Fs(o.idToken);
    oe(
      a,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: s } = a;
    return oe(
      e.uid === s,
      n,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), Ht._forOperation(e, i, o);
  } catch (o) {
    throw (o == null ? void 0 : o.code) === "auth/user-not-found" && It(
      n,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), o;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function f2(e, t, r = !1) {
  if (pt(e.app))
    return Promise.reject(jt(e));
  const n = "signIn", i = await jd(e, n, t), o = await Ht._fromIdTokenResponse(e, n, i);
  return r || await e._updateCurrentUser(o.user), o;
}
const h0 = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud {
  constructor(t, r) {
    this.storageRetriever = t, this.type = r;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(h0, "1"), this.storage.removeItem(h0), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, r) {
    return this.storage.setItem(t, JSON.stringify(r)), Promise.resolve();
  }
  _get(t) {
    const r = this.storage.getItem(t);
    return Promise.resolve(r ? JSON.parse(r) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const d2 = 1e3, p2 = 10;
class h2 extends Ud {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (t, r) => this.onStorageEvent(t, r), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = Md(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(t) {
    for (const r of Object.keys(this.listeners)) {
      const n = this.storage.getItem(r), i = this.localCache[r];
      n !== i && t(r, i, n);
    }
  }
  onStorageEvent(t, r = !1) {
    if (!t.key) {
      this.forAllChangedKeys((a, s, u) => {
        this.notifyListeners(a, u);
      });
      return;
    }
    const n = t.key;
    r ? this.detachListener() : this.stopPolling();
    const i = () => {
      const a = this.storage.getItem(n);
      !r && this.localCache[n] === a || this.notifyListeners(n, a);
    }, o = this.storage.getItem(n);
    Y_() && o !== t.newValue && t.newValue !== t.oldValue ? setTimeout(i, p2) : i();
  }
  notifyListeners(t, r) {
    this.localCache[t] = r;
    const n = this.listeners[t];
    if (n)
      for (const i of Array.from(n))
        i(r && JSON.parse(r));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((t, r, n) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: t,
            oldValue: r,
            newValue: n
          }),
          /* poll */
          !0
        );
      });
    }, d2);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, r) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set(), this.localCache[t] = this.storage.getItem(t)), this.listeners[t].add(r);
  }
  _removeListener(t, r) {
    this.listeners[t] && (this.listeners[t].delete(r), this.listeners[t].size === 0 && delete this.listeners[t]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(t, r) {
    await super._set(t, r), this.localCache[t] = JSON.stringify(r);
  }
  async _get(t) {
    const r = await super._get(t);
    return this.localCache[t] = JSON.stringify(r), r;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
h2.type = "LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hd extends Ud {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(t, r) {
  }
  _removeListener(t, r) {
  }
}
Hd.type = "SESSION";
const Wd = Hd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qd(e = "", t = 10) {
  let r = "";
  for (let n = 0; n < t; n++)
    r += Math.floor(Math.random() * 10);
  return e + r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ut() {
  return window;
}
function v2(e) {
  Ut().location.href = e;
}
new Sn(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x2(e, t) {
  return t ? St(t) : (oe(
    e._popupRedirectResolver,
    e,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls extends Ld {
  constructor(t) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = t;
  }
  _getIdTokenResponse(t) {
    return Tr(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, r) {
    return Tr(t, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(t) {
    return Tr(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const r = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return t && (r.idToken = t), r;
  }
}
function g2(e) {
  return f2(e.auth, new Ls(e), e.bypassAuthState);
}
function m2(e) {
  const { auth: t, user: r } = e;
  return oe(
    r,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), l2(r, new Ls(e), e.bypassAuthState);
}
async function y2(e) {
  const { auth: t, user: r } = e;
  return oe(
    r,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), u2(r, new Ls(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vd {
  constructor(t, r, n, i, o = !1) {
    this.auth = t, this.resolver = n, this.user = i, this.bypassAuthState = o, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(r) ? r : [r];
  }
  execute() {
    return new Promise(async (t, r) => {
      this.pendingPromise = { resolve: t, reject: r };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (n) {
        this.reject(n);
      }
    });
  }
  async onAuthEvent(t) {
    const { urlResponse: r, sessionId: n, postBody: i, tenantId: o, error: a, type: s } = t;
    if (a) {
      this.reject(a);
      return;
    }
    const u = {
      auth: this.auth,
      requestUri: r,
      sessionId: n,
      tenantId: o || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(s)(u));
    } catch (c) {
      this.reject(c);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return g2;
      case "linkViaPopup":
      case "linkViaRedirect":
        return y2;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return m2;
      default:
        It(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(t) {
    kt(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(t), this.unregisterAndCleanUp();
  }
  reject(t) {
    kt(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(t), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b2 = new Sn(2e3, 1e4);
class Er extends Vd {
  constructor(t, r, n, i, o) {
    super(t, r, i, o), this.provider = n, this.authWindow = null, this.pollId = null, Er.currentPopupAction && Er.currentPopupAction.cancel(), Er.currentPopupAction = this;
  }
  async executeNotNull() {
    const t = await this.execute();
    return oe(
      t,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), t;
  }
  async onExecution() {
    kt(this.filter.length === 1, "Popup operations only handle one event");
    const t = qd();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      t
    ), this.authWindow.associatedEvent = t, this.resolver._originValidation(this.auth).catch((r) => {
      this.reject(r);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
      r || this.reject(gt(
        this.auth,
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return ((t = this.authWindow) === null || t === void 0 ? void 0 : t.associatedEvent) || null;
  }
  cancel() {
    this.reject(gt(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Er.currentPopupAction = null;
  }
  pollUserCancellation() {
    const t = () => {
      var r, n;
      if (!((n = (r = this.authWindow) === null || r === void 0 ? void 0 : r.window) === null || n === void 0) && n.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(gt(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(t, b2.get());
    };
    t();
  }
}
Er.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E2 = "pendingRedirect", Zn = /* @__PURE__ */ new Map();
class _2 extends Vd {
  constructor(t, r, n = !1) {
    super(t, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], r, void 0, n), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let t = Zn.get(this.auth._key());
    if (!t) {
      try {
        const n = await w2(this.resolver, this.auth) ? await super.execute() : null;
        t = () => Promise.resolve(n);
      } catch (r) {
        t = () => Promise.reject(r);
      }
      Zn.set(this.auth._key(), t);
    }
    return this.bypassAuthState || Zn.set(this.auth._key(), () => Promise.resolve(null)), t();
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect")
      return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const r = await this.auth._redirectUserForId(t.eventId);
      if (r)
        return this.user = r, super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function w2(e, t) {
  const r = A2(t), n = S2(e);
  if (!await n._isAvailable())
    return !1;
  const i = await n._get(r) === "true";
  return await n._remove(r), i;
}
function C2(e, t) {
  Zn.set(e._key(), t);
}
function S2(e) {
  return St(e._redirectPersistence);
}
function A2(e) {
  return Qn(E2, e.config.apiKey, e.name);
}
async function T2(e, t, r = !1) {
  if (pt(e.app))
    return Promise.reject(jt(e));
  const n = Ms(e), i = x2(n, t), a = await new _2(n, i, r).execute();
  return a && !r && (delete a.user._redirectEventId, await n._persistUserIfCurrent(a.user), await n._setRedirectUser(null, t)), a;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O2 = 10 * 60 * 1e3;
class I2 {
  constructor(t) {
    this.auth = t, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(t) {
    this.consumers.add(t), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, t) && (this.sendToConsumer(this.queuedRedirectEvent, t), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t))
      return !1;
    let r = !1;
    return this.consumers.forEach((n) => {
      this.isEventForConsumer(t, n) && (r = !0, this.sendToConsumer(t, n), this.saveEventToCache(t));
    }), this.hasHandledPotentialRedirect || !k2(t) || (this.hasHandledPotentialRedirect = !0, r || (this.queuedRedirectEvent = t, r = !0)), r;
  }
  sendToConsumer(t, r) {
    var n;
    if (t.error && !Gd(t)) {
      const i = ((n = t.error.code) === null || n === void 0 ? void 0 : n.split("auth/")[1]) || "internal-error";
      r.onError(gt(this.auth, i));
    } else
      r.onAuthEvent(t);
  }
  isEventForConsumer(t, r) {
    const n = r.eventId === null || !!t.eventId && t.eventId === r.eventId;
    return r.filter.includes(t.type) && n;
  }
  hasEventBeenHandled(t) {
    return Date.now() - this.lastProcessedEventTime >= O2 && this.cachedEventUids.clear(), this.cachedEventUids.has(v0(t));
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(v0(t)), this.lastProcessedEventTime = Date.now();
  }
}
function v0(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter((t) => t).join("-");
}
function Gd({ type: e, error: t }) {
  return e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event";
}
function k2(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Gd(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function D2(e, t = {}) {
  return Vr(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R2 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, P2 = /^https?/;
async function B2(e) {
  if (e.config.emulator)
    return;
  const { authorizedDomains: t } = await D2(e);
  for (const r of t)
    try {
      if (F2(r))
        return;
    } catch {
    }
  It(
    e,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function F2(e) {
  const t = Ya(), { protocol: r, hostname: n } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const a = new URL(e);
    return a.hostname === "" && n === "" ? r === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : r === "chrome-extension:" && a.hostname === n;
  }
  if (!P2.test(r))
    return !1;
  if (R2.test(e))
    return n === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(n);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N2 = new Sn(3e4, 6e4);
function x0() {
  const e = Ut().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP)
        for (let r = 0; r < e.CP.length; r++)
          e.CP[r] = null;
  }
}
function M2(e) {
  return new Promise((t, r) => {
    var n, i, o;
    function a() {
      x0(), gapi.load("gapi.iframes", {
        callback: () => {
          t(gapi.iframes.getContext());
        },
        ontimeout: () => {
          x0(), r(gt(
            e,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: N2.get()
      });
    }
    if (!((i = (n = Ut().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || i === void 0) && i.Iframe)
      t(gapi.iframes.getContext());
    else if (!((o = Ut().gapi) === null || o === void 0) && o.load)
      a();
    else {
      const s = n2("iframefcb");
      return Ut()[s] = () => {
        gapi.load ? a() : r(gt(
          e,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, t2(`${r2()}?onload=${s}`).catch((u) => r(u));
    }
  }).catch((t) => {
    throw ei = null, t;
  });
}
let ei = null;
function $2(e) {
  return ei = ei || M2(e), ei;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L2 = new Sn(5e3, 15e3), z2 = "__/auth/iframe", j2 = "emulator/auth/iframe", U2 = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, H2 = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function W2(e) {
  const t = e.config;
  oe(
    t.authDomain,
    e,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const r = t.emulator ? Bs(t, j2) : `https://${e.config.authDomain}/${z2}`, n = {
    apiKey: t.apiKey,
    appName: e.name,
    v: Cn
  }, i = H2.get(e.config.apiHost);
  i && (n.eid = i);
  const o = e._getFrameworks();
  return o.length && (n.fw = o.join(",")), `${r}?${_n(n).slice(1)}`;
}
async function q2(e) {
  const t = await $2(e), r = Ut().gapi;
  return oe(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), t.open({
    where: document.body,
    url: W2(e),
    messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: U2,
    dontclear: !0
  }, (n) => new Promise(async (i, o) => {
    await n.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const a = gt(
      e,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), s = Ut().setTimeout(() => {
      o(a);
    }, L2.get());
    function u() {
      Ut().clearTimeout(s), i(n);
    }
    n.ping(u).then(u, () => {
      o(a);
    });
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V2 = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, G2 = 500, Y2 = 600, K2 = "_blank", X2 = "http://localhost";
class g0 {
  constructor(t) {
    this.window = t, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function J2(e, t, r, n = G2, i = Y2) {
  const o = Math.max((window.screen.availHeight - i) / 2, 0).toString(), a = Math.max((window.screen.availWidth - n) / 2, 0).toString();
  let s = "";
  const u = Object.assign(Object.assign({}, V2), {
    width: n.toString(),
    height: i.toString(),
    top: o,
    left: a
  }), c = Ve().toLowerCase();
  r && (s = Rd(c) ? K2 : r), kd(c) && (t = t || X2, u.scrollbars = "yes");
  const d = Object.entries(u).reduce((v, [w, _]) => `${v}${w}=${_},`, "");
  if (G_(c) && s !== "_self")
    return Q2(t || "", s), new g0(null);
  const y = window.open(t || "", s, d);
  oe(
    y,
    e,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    y.focus();
  } catch {
  }
  return new g0(y);
}
function Q2(e, t) {
  const r = document.createElement("a");
  r.href = e, r.target = t;
  const n = document.createEvent("MouseEvent");
  n.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), r.dispatchEvent(n);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z2 = "__/auth/handler", ew = "emulator/auth/handler", tw = encodeURIComponent("fac");
async function m0(e, t, r, n, i, o) {
  oe(
    e.config.authDomain,
    e,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), oe(
    e.config.apiKey,
    e,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const a = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: r,
    redirectUrl: n,
    v: Cn,
    eventId: i
  };
  if (t instanceof zd) {
    t.setDefaultLanguage(e.languageCode), a.providerId = t.providerId || "", Yy(t.getCustomParameters()) || (a.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [d, y] of Object.entries({}))
      a[d] = y;
  }
  if (t instanceof An) {
    const d = t.getScopes().filter((y) => y !== "");
    d.length > 0 && (a.scopes = d.join(","));
  }
  e.tenantId && (a.tid = e.tenantId);
  const s = a;
  for (const d of Object.keys(s))
    s[d] === void 0 && delete s[d];
  const u = await e._getAppCheckToken(), c = u ? `#${tw}=${encodeURIComponent(u)}` : "";
  return `${rw(e)}?${_n(s).slice(1)}${c}`;
}
function rw({ config: e }) {
  return e.emulator ? Bs(e, ew) : `https://${e.authDomain}/${Z2}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ba = "webStorageSupport";
class nw {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Wd, this._completeRedirectFn = T2, this._overrideRedirectResult = C2;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(t, r, n, i) {
    var o;
    kt((o = this.eventManagers[t._key()]) === null || o === void 0 ? void 0 : o.manager, "_initialize() not called before _openPopup()");
    const a = await m0(t, r, n, Ya(), i);
    return J2(t, a, qd());
  }
  async _openRedirect(t, r, n, i) {
    await this._originValidation(t);
    const o = await m0(t, r, n, Ya(), i);
    return v2(o), new Promise(() => {
    });
  }
  _initialize(t) {
    const r = t._key();
    if (this.eventManagers[r]) {
      const { manager: i, promise: o } = this.eventManagers[r];
      return i ? Promise.resolve(i) : (kt(o, "If manager is not set, promise should be"), o);
    }
    const n = this.initAndGetManager(t);
    return this.eventManagers[r] = { promise: n }, n.catch(() => {
      delete this.eventManagers[r];
    }), n;
  }
  async initAndGetManager(t) {
    const r = await q2(t), n = new I2(t);
    return r.register("authEvent", (i) => (oe(
      i == null ? void 0 : i.authEvent,
      t,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: n.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[t._key()] = { manager: n }, this.iframes[t._key()] = r, n;
  }
  _isIframeWebStorageSupported(t, r) {
    this.iframes[t._key()].send(ba, { type: ba }, (i) => {
      var o;
      const a = (o = i == null ? void 0 : i[0]) === null || o === void 0 ? void 0 : o[ba];
      a !== void 0 && r(!!a), It(
        t,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(t) {
    const r = t._key();
    return this.originValidationPromises[r] || (this.originValidationPromises[r] = B2(t)), this.originValidationPromises[r];
  }
  get _shouldInitProactively() {
    return Md() || Dd() || Ns();
  }
}
const iw = nw;
var y0 = "@firebase/auth", b0 = "1.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ow {
  constructor(t) {
    this.auth = t, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var t;
    return this.assertAuthConfigured(), ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) || null;
  }
  async getToken(t) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(t) } : null;
  }
  addAuthTokenListener(t) {
    if (this.assertAuthConfigured(), this.internalListeners.has(t))
      return;
    const r = this.auth.onIdTokenChanged((n) => {
      t((n == null ? void 0 : n.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, r), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const r = this.internalListeners.get(t);
    r && (this.internalListeners.delete(t), r(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    oe(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function aw(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function sw(e) {
  Ot(new mt(
    "auth",
    (t, { options: r }) => {
      const n = t.getProvider("app").getImmediate(), i = t.getProvider("heartbeat"), o = t.getProvider("app-check-internal"), { apiKey: a, authDomain: s } = n.options;
      oe(a && !a.includes(":"), "invalid-api-key", { appName: n.name });
      const u = {
        apiKey: a,
        authDomain: s,
        clientPlatform: e,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: $d(e)
      }, c = new Z_(n, i, o, u);
      return o2(c, r), c;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((t, r, n) => {
    t.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), Ot(new mt(
    "auth-internal",
    (t) => {
      const r = Ms(t.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((n) => new ow(n))(r);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), xt(y0, b0, aw(e)), xt(y0, b0, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cw = 5 * 60;
$y("authIdTokenMaxAge");
function uw() {
  var e, t;
  return (t = (e = document.getElementsByTagName("head")) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : document;
}
e2({
  loadJS(e) {
    return new Promise((t, r) => {
      const n = document.createElement("script");
      n.setAttribute("src", e), n.onload = t, n.onerror = (i) => {
        const o = gt(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        o.customData = i, r(o);
      }, n.type = "text/javascript", n.charset = "UTF-8", uw().appendChild(n);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
sw(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const lw = {
  apiKey: "AIzaSyDKtOJpkYEDnQVKNnyCeyoN1DjajMW7o9g",
  authDomain: "binge-mobile.firebaseapp.com",
  databaseURL: "https://binge-mobile.firebaseio.com",
  projectId: "binge-mobile",
  storageBucket: "binge-mobile.appspot.com",
  messagingSenderId: "84147851202",
  appId: "1:84147851202:web:839afbf7d74575a729505b",
  measurementId: "G-CNNSYHBDMN"
}, fw = lw, Yd = Kf(fw);
S_(Yd);
const E0 = i2(Yd, {
  persistence: Wd,
  popupRedirectResolver: iw
}), dw = async () => {
  try {
    const e = await E0.currentUser;
    return (await c2(E0)).user;
  } catch (e) {
    return e;
  }
};
/*! js-cookie v3.0.5 | MIT */
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
var pw = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function Xa(e, t) {
  function r(i, o, a) {
    if (!(typeof document > "u")) {
      a = Ln({}, t, a), typeof a.expires == "number" && (a.expires = new Date(Date.now() + a.expires * 864e5)), a.expires && (a.expires = a.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var s = "";
      for (var u in a)
        a[u] && (s += "; " + u, a[u] !== !0 && (s += "=" + a[u].split(";")[0]));
      return document.cookie = i + "=" + e.write(o, i) + s;
    }
  }
  function n(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], a = {}, s = 0; s < o.length; s++) {
        var u = o[s].split("="), c = u.slice(1).join("=");
        try {
          var d = decodeURIComponent(u[0]);
          if (a[d] = e.read(c, d), i === d)
            break;
        } catch {
        }
      }
      return i ? a[i] : a;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function(i, o) {
        r(
          i,
          "",
          Ln({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return Xa(this.converter, Ln({}, this.attributes, i));
      },
      withConverter: function(i) {
        return Xa(Ln({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var _r = Xa(pw, { path: "/" }), ti = { exports: {} };
function hw(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ri = { exports: {} };
const vw = {}, xw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vw
}, Symbol.toStringTag, { value: "Module" })), gw = /* @__PURE__ */ ct(xw);
var mw = ri.exports, _0;
function fe() {
  return _0 || (_0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(mw, function() {
      var r = r || function(n, i) {
        var o;
        if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof Qt < "u" && Qt.crypto && (o = Qt.crypto), !o && typeof hw == "function")
          try {
            o = gw;
          } catch {
          }
        var a = function() {
          if (o) {
            if (typeof o.getRandomValues == "function")
              try {
                return o.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof o.randomBytes == "function")
              try {
                return o.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, s = Object.create || /* @__PURE__ */ function() {
          function T() {
          }
          return function(C) {
            var E;
            return T.prototype = C, E = new T(), T.prototype = null, E;
          };
        }(), u = {}, c = u.lib = {}, d = c.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(T) {
              var C = s(this);
              return T && C.mixIn(T), (!C.hasOwnProperty("init") || this.init === C.init) && (C.init = function() {
                C.$super.init.apply(this, arguments);
              }), C.init.prototype = C, C.$super = this, C;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var T = this.extend();
              return T.init.apply(T, arguments), T;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(T) {
              for (var C in T)
                T.hasOwnProperty(C) && (this[C] = T[C]);
              T.hasOwnProperty("toString") && (this.toString = T.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), y = c.WordArray = d.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(T, C) {
            T = this.words = T || [], C != i ? this.sigBytes = C : this.sigBytes = T.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(T) {
            return (T || w).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(T) {
            var C = this.words, E = T.words, f = this.sigBytes, S = T.sigBytes;
            if (this.clamp(), f % 4)
              for (var p = 0; p < S; p++) {
                var b = E[p >>> 2] >>> 24 - p % 4 * 8 & 255;
                C[f + p >>> 2] |= b << 24 - (f + p) % 4 * 8;
              }
            else
              for (var m = 0; m < S; m += 4)
                C[f + m >>> 2] = E[m >>> 2];
            return this.sigBytes += S, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var T = this.words, C = this.sigBytes;
            T[C >>> 2] &= 4294967295 << 32 - C % 4 * 8, T.length = n.ceil(C / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var T = d.clone.call(this);
            return T.words = this.words.slice(0), T;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(T) {
            for (var C = [], E = 0; E < T; E += 4)
              C.push(a());
            return new y.init(C, T);
          }
        }), v = u.enc = {}, w = v.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(T) {
            for (var C = T.words, E = T.sigBytes, f = [], S = 0; S < E; S++) {
              var p = C[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              f.push((p >>> 4).toString(16)), f.push((p & 15).toString(16));
            }
            return f.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(T) {
            for (var C = T.length, E = [], f = 0; f < C; f += 2)
              E[f >>> 3] |= parseInt(T.substr(f, 2), 16) << 24 - f % 8 * 4;
            return new y.init(E, C / 2);
          }
        }, _ = v.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(T) {
            for (var C = T.words, E = T.sigBytes, f = [], S = 0; S < E; S++) {
              var p = C[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              f.push(String.fromCharCode(p));
            }
            return f.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(T) {
            for (var C = T.length, E = [], f = 0; f < C; f++)
              E[f >>> 2] |= (T.charCodeAt(f) & 255) << 24 - f % 4 * 8;
            return new y.init(E, C);
          }
        }, l = v.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(T) {
            try {
              return decodeURIComponent(escape(_.stringify(T)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(T) {
            return _.parse(unescape(encodeURIComponent(T)));
          }
        }, A = c.BufferedBlockAlgorithm = d.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new y.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(T) {
            typeof T == "string" && (T = l.parse(T)), this._data.concat(T), this._nDataBytes += T.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(T) {
            var C, E = this._data, f = E.words, S = E.sigBytes, p = this.blockSize, b = p * 4, m = S / b;
            T ? m = n.ceil(m) : m = n.max((m | 0) - this._minBufferSize, 0);
            var g = m * p, O = n.min(g * 4, S);
            if (g) {
              for (var I = 0; I < g; I += p)
                this._doProcessBlock(f, I);
              C = f.splice(0, g), E.sigBytes -= O;
            }
            return new y.init(C, O);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var T = d.clone.call(this);
            return T._data = this._data.clone(), T;
          },
          _minBufferSize: 0
        });
        c.Hasher = A.extend({
          /**
           * Configuration options.
           */
          cfg: d.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(T) {
            this.cfg = this.cfg.extend(T), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            A.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(T) {
            return this._append(T), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(T) {
            T && this._append(T);
            var C = this._doFinalize();
            return C;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(T) {
            return function(C, E) {
              return new T.init(E).finalize(C);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(T) {
            return function(C, E) {
              return new k.HMAC.init(T, E).finalize(C);
            };
          }
        });
        var k = u.algo = {};
        return u;
      }(Math);
      return r;
    });
  }(ri)), ri.exports;
}
var ni = { exports: {} }, yw = ni.exports, w0;
function Do() {
  return w0 || (w0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(yw, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.Base, s = o.WordArray, u = i.x64 = {};
        u.Word = a.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(c, d) {
            this.high = c, this.low = d;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), u.WordArray = a.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(c, d) {
            c = this.words = c || [], d != n ? this.sigBytes = d : this.sigBytes = c.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var c = this.words, d = c.length, y = [], v = 0; v < d; v++) {
              var w = c[v];
              y.push(w.high), y.push(w.low);
            }
            return s.create(y, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var c = a.clone.call(this), d = c.words = this.words.slice(0), y = d.length, v = 0; v < y; v++)
              d[v] = d[v].clone();
            return c;
          }
        });
      }(), r;
    });
  }(ni)), ni.exports;
}
var ii = { exports: {} }, bw = ii.exports, C0;
function Ew() {
  return C0 || (C0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(bw, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, i = n.lib, o = i.WordArray, a = o.init, s = o.init = function(u) {
            if (u instanceof ArrayBuffer && (u = new Uint8Array(u)), (u instanceof Int8Array || typeof Uint8ClampedArray < "u" && u instanceof Uint8ClampedArray || u instanceof Int16Array || u instanceof Uint16Array || u instanceof Int32Array || u instanceof Uint32Array || u instanceof Float32Array || u instanceof Float64Array) && (u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength)), u instanceof Uint8Array) {
              for (var c = u.byteLength, d = [], y = 0; y < c; y++)
                d[y >>> 2] |= u[y] << 24 - y % 4 * 8;
              a.call(this, d, c);
            } else
              a.apply(this, arguments);
          };
          s.prototype = o;
        }
      }(), r.lib.WordArray;
    });
  }(ii)), ii.exports;
}
var oi = { exports: {} }, _w = oi.exports, S0;
function ww() {
  return S0 || (S0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(_w, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
        a.Utf16 = a.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(u) {
            for (var c = u.words, d = u.sigBytes, y = [], v = 0; v < d; v += 2) {
              var w = c[v >>> 2] >>> 16 - v % 4 * 8 & 65535;
              y.push(String.fromCharCode(w));
            }
            return y.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(u) {
            for (var c = u.length, d = [], y = 0; y < c; y++)
              d[y >>> 1] |= u.charCodeAt(y) << 16 - y % 2 * 16;
            return o.create(d, c * 2);
          }
        }, a.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(u) {
            for (var c = u.words, d = u.sigBytes, y = [], v = 0; v < d; v += 2) {
              var w = s(c[v >>> 2] >>> 16 - v % 4 * 8 & 65535);
              y.push(String.fromCharCode(w));
            }
            return y.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(u) {
            for (var c = u.length, d = [], y = 0; y < c; y++)
              d[y >>> 1] |= s(u.charCodeAt(y) << 16 - y % 2 * 16);
            return o.create(d, c * 2);
          }
        };
        function s(u) {
          return u << 8 & 4278255360 | u >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(oi)), oi.exports;
}
var ai = { exports: {} }, Cw = ai.exports, A0;
function dr() {
  return A0 || (A0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(Cw, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
        a.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(u) {
            var c = u.words, d = u.sigBytes, y = this._map;
            u.clamp();
            for (var v = [], w = 0; w < d; w += 3)
              for (var _ = c[w >>> 2] >>> 24 - w % 4 * 8 & 255, l = c[w + 1 >>> 2] >>> 24 - (w + 1) % 4 * 8 & 255, A = c[w + 2 >>> 2] >>> 24 - (w + 2) % 4 * 8 & 255, k = _ << 16 | l << 8 | A, T = 0; T < 4 && w + T * 0.75 < d; T++)
                v.push(y.charAt(k >>> 6 * (3 - T) & 63));
            var C = y.charAt(64);
            if (C)
              for (; v.length % 4; )
                v.push(C);
            return v.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(u) {
            var c = u.length, d = this._map, y = this._reverseMap;
            if (!y) {
              y = this._reverseMap = [];
              for (var v = 0; v < d.length; v++)
                y[d.charCodeAt(v)] = v;
            }
            var w = d.charAt(64);
            if (w) {
              var _ = u.indexOf(w);
              _ !== -1 && (c = _);
            }
            return s(u, c, y);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function s(u, c, d) {
          for (var y = [], v = 0, w = 0; w < c; w++)
            if (w % 4) {
              var _ = d[u.charCodeAt(w - 1)] << w % 4 * 2, l = d[u.charCodeAt(w)] >>> 6 - w % 4 * 2, A = _ | l;
              y[v >>> 2] |= A << 24 - v % 4 * 8, v++;
            }
          return o.create(y, v);
        }
      }(), r.enc.Base64;
    });
  }(ai)), ai.exports;
}
var si = { exports: {} }, Sw = si.exports, T0;
function Aw() {
  return T0 || (T0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(Sw, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
        a.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(u, c) {
            c === void 0 && (c = !0);
            var d = u.words, y = u.sigBytes, v = c ? this._safe_map : this._map;
            u.clamp();
            for (var w = [], _ = 0; _ < y; _ += 3)
              for (var l = d[_ >>> 2] >>> 24 - _ % 4 * 8 & 255, A = d[_ + 1 >>> 2] >>> 24 - (_ + 1) % 4 * 8 & 255, k = d[_ + 2 >>> 2] >>> 24 - (_ + 2) % 4 * 8 & 255, T = l << 16 | A << 8 | k, C = 0; C < 4 && _ + C * 0.75 < y; C++)
                w.push(v.charAt(T >>> 6 * (3 - C) & 63));
            var E = v.charAt(64);
            if (E)
              for (; w.length % 4; )
                w.push(E);
            return w.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(u, c) {
            c === void 0 && (c = !0);
            var d = u.length, y = c ? this._safe_map : this._map, v = this._reverseMap;
            if (!v) {
              v = this._reverseMap = [];
              for (var w = 0; w < y.length; w++)
                v[y.charCodeAt(w)] = w;
            }
            var _ = y.charAt(64);
            if (_) {
              var l = u.indexOf(_);
              l !== -1 && (d = l);
            }
            return s(u, d, v);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function s(u, c, d) {
          for (var y = [], v = 0, w = 0; w < c; w++)
            if (w % 4) {
              var _ = d[u.charCodeAt(w - 1)] << w % 4 * 2, l = d[u.charCodeAt(w)] >>> 6 - w % 4 * 2, A = _ | l;
              y[v >>> 2] |= A << 24 - v % 4 * 8, v++;
            }
          return o.create(y, v);
        }
      }(), r.enc.Base64url;
    });
  }(si)), si.exports;
}
var ci = { exports: {} }, Tw = ci.exports, O0;
function pr() {
  return O0 || (O0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(Tw, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, s = o.Hasher, u = i.algo, c = [];
        (function() {
          for (var l = 0; l < 64; l++)
            c[l] = n.abs(n.sin(l + 1)) * 4294967296 | 0;
        })();
        var d = u.MD5 = s.extend({
          _doReset: function() {
            this._hash = new a.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(l, A) {
            for (var k = 0; k < 16; k++) {
              var T = A + k, C = l[T];
              l[T] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var E = this._hash.words, f = l[A + 0], S = l[A + 1], p = l[A + 2], b = l[A + 3], m = l[A + 4], g = l[A + 5], O = l[A + 6], I = l[A + 7], D = l[A + 8], L = l[A + 9], z = l[A + 10], h = l[A + 11], Y = l[A + 12], U = l[A + 13], W = l[A + 14], N = l[A + 15], P = E[0], M = E[1], F = E[2], x = E[3];
            P = y(P, M, F, x, f, 7, c[0]), x = y(x, P, M, F, S, 12, c[1]), F = y(F, x, P, M, p, 17, c[2]), M = y(M, F, x, P, b, 22, c[3]), P = y(P, M, F, x, m, 7, c[4]), x = y(x, P, M, F, g, 12, c[5]), F = y(F, x, P, M, O, 17, c[6]), M = y(M, F, x, P, I, 22, c[7]), P = y(P, M, F, x, D, 7, c[8]), x = y(x, P, M, F, L, 12, c[9]), F = y(F, x, P, M, z, 17, c[10]), M = y(M, F, x, P, h, 22, c[11]), P = y(P, M, F, x, Y, 7, c[12]), x = y(x, P, M, F, U, 12, c[13]), F = y(F, x, P, M, W, 17, c[14]), M = y(M, F, x, P, N, 22, c[15]), P = v(P, M, F, x, S, 5, c[16]), x = v(x, P, M, F, O, 9, c[17]), F = v(F, x, P, M, h, 14, c[18]), M = v(M, F, x, P, f, 20, c[19]), P = v(P, M, F, x, g, 5, c[20]), x = v(x, P, M, F, z, 9, c[21]), F = v(F, x, P, M, N, 14, c[22]), M = v(M, F, x, P, m, 20, c[23]), P = v(P, M, F, x, L, 5, c[24]), x = v(x, P, M, F, W, 9, c[25]), F = v(F, x, P, M, b, 14, c[26]), M = v(M, F, x, P, D, 20, c[27]), P = v(P, M, F, x, U, 5, c[28]), x = v(x, P, M, F, p, 9, c[29]), F = v(F, x, P, M, I, 14, c[30]), M = v(M, F, x, P, Y, 20, c[31]), P = w(P, M, F, x, g, 4, c[32]), x = w(x, P, M, F, D, 11, c[33]), F = w(F, x, P, M, h, 16, c[34]), M = w(M, F, x, P, W, 23, c[35]), P = w(P, M, F, x, S, 4, c[36]), x = w(x, P, M, F, m, 11, c[37]), F = w(F, x, P, M, I, 16, c[38]), M = w(M, F, x, P, z, 23, c[39]), P = w(P, M, F, x, U, 4, c[40]), x = w(x, P, M, F, f, 11, c[41]), F = w(F, x, P, M, b, 16, c[42]), M = w(M, F, x, P, O, 23, c[43]), P = w(P, M, F, x, L, 4, c[44]), x = w(x, P, M, F, Y, 11, c[45]), F = w(F, x, P, M, N, 16, c[46]), M = w(M, F, x, P, p, 23, c[47]), P = _(P, M, F, x, f, 6, c[48]), x = _(x, P, M, F, I, 10, c[49]), F = _(F, x, P, M, W, 15, c[50]), M = _(M, F, x, P, g, 21, c[51]), P = _(P, M, F, x, Y, 6, c[52]), x = _(x, P, M, F, b, 10, c[53]), F = _(F, x, P, M, z, 15, c[54]), M = _(M, F, x, P, S, 21, c[55]), P = _(P, M, F, x, D, 6, c[56]), x = _(x, P, M, F, N, 10, c[57]), F = _(F, x, P, M, O, 15, c[58]), M = _(M, F, x, P, U, 21, c[59]), P = _(P, M, F, x, m, 6, c[60]), x = _(x, P, M, F, h, 10, c[61]), F = _(F, x, P, M, p, 15, c[62]), M = _(M, F, x, P, L, 21, c[63]), E[0] = E[0] + P | 0, E[1] = E[1] + M | 0, E[2] = E[2] + F | 0, E[3] = E[3] + x | 0;
          },
          _doFinalize: function() {
            var l = this._data, A = l.words, k = this._nDataBytes * 8, T = l.sigBytes * 8;
            A[T >>> 5] |= 128 << 24 - T % 32;
            var C = n.floor(k / 4294967296), E = k;
            A[(T + 64 >>> 9 << 4) + 15] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, A[(T + 64 >>> 9 << 4) + 14] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, l.sigBytes = (A.length + 1) * 4, this._process();
            for (var f = this._hash, S = f.words, p = 0; p < 4; p++) {
              var b = S[p];
              S[p] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
            }
            return f;
          },
          clone: function() {
            var l = s.clone.call(this);
            return l._hash = this._hash.clone(), l;
          }
        });
        function y(l, A, k, T, C, E, f) {
          var S = l + (A & k | ~A & T) + C + f;
          return (S << E | S >>> 32 - E) + A;
        }
        function v(l, A, k, T, C, E, f) {
          var S = l + (A & T | k & ~T) + C + f;
          return (S << E | S >>> 32 - E) + A;
        }
        function w(l, A, k, T, C, E, f) {
          var S = l + (A ^ k ^ T) + C + f;
          return (S << E | S >>> 32 - E) + A;
        }
        function _(l, A, k, T, C, E, f) {
          var S = l + (k ^ (A | ~T)) + C + f;
          return (S << E | S >>> 32 - E) + A;
        }
        i.MD5 = s._createHelper(d), i.HmacMD5 = s._createHmacHelper(d);
      }(Math), r.MD5;
    });
  }(ci)), ci.exports;
}
var ui = { exports: {} }, Ow = ui.exports, I0;
function Kd() {
  return I0 || (I0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(Ow, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = i.Hasher, s = n.algo, u = [], c = s.SHA1 = a.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(d, y) {
            for (var v = this._hash.words, w = v[0], _ = v[1], l = v[2], A = v[3], k = v[4], T = 0; T < 80; T++) {
              if (T < 16)
                u[T] = d[y + T] | 0;
              else {
                var C = u[T - 3] ^ u[T - 8] ^ u[T - 14] ^ u[T - 16];
                u[T] = C << 1 | C >>> 31;
              }
              var E = (w << 5 | w >>> 27) + k + u[T];
              T < 20 ? E += (_ & l | ~_ & A) + 1518500249 : T < 40 ? E += (_ ^ l ^ A) + 1859775393 : T < 60 ? E += (_ & l | _ & A | l & A) - 1894007588 : E += (_ ^ l ^ A) - 899497514, k = A, A = l, l = _ << 30 | _ >>> 2, _ = w, w = E;
            }
            v[0] = v[0] + w | 0, v[1] = v[1] + _ | 0, v[2] = v[2] + l | 0, v[3] = v[3] + A | 0, v[4] = v[4] + k | 0;
          },
          _doFinalize: function() {
            var d = this._data, y = d.words, v = this._nDataBytes * 8, w = d.sigBytes * 8;
            return y[w >>> 5] |= 128 << 24 - w % 32, y[(w + 64 >>> 9 << 4) + 14] = Math.floor(v / 4294967296), y[(w + 64 >>> 9 << 4) + 15] = v, d.sigBytes = y.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var d = a.clone.call(this);
            return d._hash = this._hash.clone(), d;
          }
        });
        n.SHA1 = a._createHelper(c), n.HmacSHA1 = a._createHmacHelper(c);
      }(), r.SHA1;
    });
  }(ui)), ui.exports;
}
var li = { exports: {} }, Iw = li.exports, k0;
function zs() {
  return k0 || (k0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(Iw, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, s = o.Hasher, u = i.algo, c = [], d = [];
        (function() {
          function w(k) {
            for (var T = n.sqrt(k), C = 2; C <= T; C++)
              if (!(k % C))
                return !1;
            return !0;
          }
          function _(k) {
            return (k - (k | 0)) * 4294967296 | 0;
          }
          for (var l = 2, A = 0; A < 64; )
            w(l) && (A < 8 && (c[A] = _(n.pow(l, 1 / 2))), d[A] = _(n.pow(l, 1 / 3)), A++), l++;
        })();
        var y = [], v = u.SHA256 = s.extend({
          _doReset: function() {
            this._hash = new a.init(c.slice(0));
          },
          _doProcessBlock: function(w, _) {
            for (var l = this._hash.words, A = l[0], k = l[1], T = l[2], C = l[3], E = l[4], f = l[5], S = l[6], p = l[7], b = 0; b < 64; b++) {
              if (b < 16)
                y[b] = w[_ + b] | 0;
              else {
                var m = y[b - 15], g = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3, O = y[b - 2], I = (O << 15 | O >>> 17) ^ (O << 13 | O >>> 19) ^ O >>> 10;
                y[b] = g + y[b - 7] + I + y[b - 16];
              }
              var D = E & f ^ ~E & S, L = A & k ^ A & T ^ k & T, z = (A << 30 | A >>> 2) ^ (A << 19 | A >>> 13) ^ (A << 10 | A >>> 22), h = (E << 26 | E >>> 6) ^ (E << 21 | E >>> 11) ^ (E << 7 | E >>> 25), Y = p + h + D + d[b] + y[b], U = z + L;
              p = S, S = f, f = E, E = C + Y | 0, C = T, T = k, k = A, A = Y + U | 0;
            }
            l[0] = l[0] + A | 0, l[1] = l[1] + k | 0, l[2] = l[2] + T | 0, l[3] = l[3] + C | 0, l[4] = l[4] + E | 0, l[5] = l[5] + f | 0, l[6] = l[6] + S | 0, l[7] = l[7] + p | 0;
          },
          _doFinalize: function() {
            var w = this._data, _ = w.words, l = this._nDataBytes * 8, A = w.sigBytes * 8;
            return _[A >>> 5] |= 128 << 24 - A % 32, _[(A + 64 >>> 9 << 4) + 14] = n.floor(l / 4294967296), _[(A + 64 >>> 9 << 4) + 15] = l, w.sigBytes = _.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var w = s.clone.call(this);
            return w._hash = this._hash.clone(), w;
          }
        });
        i.SHA256 = s._createHelper(v), i.HmacSHA256 = s._createHmacHelper(v);
      }(Math), r.SHA256;
    });
  }(li)), li.exports;
}
var fi = { exports: {} }, kw = fi.exports, D0;
function Dw() {
  return D0 || (D0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), zs());
    })(kw, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.algo, s = a.SHA256, u = a.SHA224 = s.extend({
          _doReset: function() {
            this._hash = new o.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var c = s._doFinalize.call(this);
            return c.sigBytes -= 4, c;
          }
        });
        n.SHA224 = s._createHelper(u), n.HmacSHA224 = s._createHmacHelper(u);
      }(), r.SHA224;
    });
  }(fi)), fi.exports;
}
var di = { exports: {} }, Rw = di.exports, R0;
function Xd() {
  return R0 || (R0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), Do());
    })(Rw, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Hasher, a = n.x64, s = a.Word, u = a.WordArray, c = n.algo;
        function d() {
          return s.create.apply(s, arguments);
        }
        var y = [
          d(1116352408, 3609767458),
          d(1899447441, 602891725),
          d(3049323471, 3964484399),
          d(3921009573, 2173295548),
          d(961987163, 4081628472),
          d(1508970993, 3053834265),
          d(2453635748, 2937671579),
          d(2870763221, 3664609560),
          d(3624381080, 2734883394),
          d(310598401, 1164996542),
          d(607225278, 1323610764),
          d(1426881987, 3590304994),
          d(1925078388, 4068182383),
          d(2162078206, 991336113),
          d(2614888103, 633803317),
          d(3248222580, 3479774868),
          d(3835390401, 2666613458),
          d(4022224774, 944711139),
          d(264347078, 2341262773),
          d(604807628, 2007800933),
          d(770255983, 1495990901),
          d(1249150122, 1856431235),
          d(1555081692, 3175218132),
          d(1996064986, 2198950837),
          d(2554220882, 3999719339),
          d(2821834349, 766784016),
          d(2952996808, 2566594879),
          d(3210313671, 3203337956),
          d(3336571891, 1034457026),
          d(3584528711, 2466948901),
          d(113926993, 3758326383),
          d(338241895, 168717936),
          d(666307205, 1188179964),
          d(773529912, 1546045734),
          d(1294757372, 1522805485),
          d(1396182291, 2643833823),
          d(1695183700, 2343527390),
          d(1986661051, 1014477480),
          d(2177026350, 1206759142),
          d(2456956037, 344077627),
          d(2730485921, 1290863460),
          d(2820302411, 3158454273),
          d(3259730800, 3505952657),
          d(3345764771, 106217008),
          d(3516065817, 3606008344),
          d(3600352804, 1432725776),
          d(4094571909, 1467031594),
          d(275423344, 851169720),
          d(430227734, 3100823752),
          d(506948616, 1363258195),
          d(659060556, 3750685593),
          d(883997877, 3785050280),
          d(958139571, 3318307427),
          d(1322822218, 3812723403),
          d(1537002063, 2003034995),
          d(1747873779, 3602036899),
          d(1955562222, 1575990012),
          d(2024104815, 1125592928),
          d(2227730452, 2716904306),
          d(2361852424, 442776044),
          d(2428436474, 593698344),
          d(2756734187, 3733110249),
          d(3204031479, 2999351573),
          d(3329325298, 3815920427),
          d(3391569614, 3928383900),
          d(3515267271, 566280711),
          d(3940187606, 3454069534),
          d(4118630271, 4000239992),
          d(116418474, 1914138554),
          d(174292421, 2731055270),
          d(289380356, 3203993006),
          d(460393269, 320620315),
          d(685471733, 587496836),
          d(852142971, 1086792851),
          d(1017036298, 365543100),
          d(1126000580, 2618297676),
          d(1288033470, 3409855158),
          d(1501505948, 4234509866),
          d(1607167915, 987167468),
          d(1816402316, 1246189591)
        ], v = [];
        (function() {
          for (var _ = 0; _ < 80; _++)
            v[_] = d();
        })();
        var w = c.SHA512 = o.extend({
          _doReset: function() {
            this._hash = new u.init([
              new s.init(1779033703, 4089235720),
              new s.init(3144134277, 2227873595),
              new s.init(1013904242, 4271175723),
              new s.init(2773480762, 1595750129),
              new s.init(1359893119, 2917565137),
              new s.init(2600822924, 725511199),
              new s.init(528734635, 4215389547),
              new s.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(_, l) {
            for (var A = this._hash.words, k = A[0], T = A[1], C = A[2], E = A[3], f = A[4], S = A[5], p = A[6], b = A[7], m = k.high, g = k.low, O = T.high, I = T.low, D = C.high, L = C.low, z = E.high, h = E.low, Y = f.high, U = f.low, W = S.high, N = S.low, P = p.high, M = p.low, F = b.high, x = b.low, B = m, j = g, q = O, $ = I, V = D, G = L, X = z, H = h, te = Y, ee = U, ie = W, Ce = N, ue = P, ae = M, ce = F, Se = x, re = 0; re < 80; re++) {
              var le, ye, _e = v[re];
              if (re < 16)
                ye = _e.high = _[l + re * 2] | 0, le = _e.low = _[l + re * 2 + 1] | 0;
              else {
                var ke = v[re - 15], He = ke.high, Qe = ke.low, hr = (He >>> 1 | Qe << 31) ^ (He >>> 8 | Qe << 24) ^ He >>> 7, ne = (Qe >>> 1 | He << 31) ^ (Qe >>> 8 | He << 24) ^ (Qe >>> 7 | He << 25), Gt = v[re - 2], Le = Gt.high, Ge = Gt.low, Us = (Le >>> 19 | Ge << 13) ^ (Le << 3 | Ge >>> 29) ^ Le >>> 6, Hs = (Ge >>> 19 | Le << 13) ^ (Ge << 3 | Le >>> 29) ^ (Ge >>> 6 | Le << 26), Ws = v[re - 7], Qd = Ws.high, Zd = Ws.low, qs = v[re - 16], ep = qs.high, Vs = qs.low;
                le = ne + Zd, ye = hr + Qd + (le >>> 0 < ne >>> 0 ? 1 : 0), le = le + Hs, ye = ye + Us + (le >>> 0 < Hs >>> 0 ? 1 : 0), le = le + Vs, ye = ye + ep + (le >>> 0 < Vs >>> 0 ? 1 : 0), _e.high = ye, _e.low = le;
              }
              var tp = te & ie ^ ~te & ue, Gs = ee & Ce ^ ~ee & ae, rp = B & q ^ B & V ^ q & V, np = j & $ ^ j & G ^ $ & G, ip = (B >>> 28 | j << 4) ^ (B << 30 | j >>> 2) ^ (B << 25 | j >>> 7), Ys = (j >>> 28 | B << 4) ^ (j << 30 | B >>> 2) ^ (j << 25 | B >>> 7), op = (te >>> 14 | ee << 18) ^ (te >>> 18 | ee << 14) ^ (te << 23 | ee >>> 9), ap = (ee >>> 14 | te << 18) ^ (ee >>> 18 | te << 14) ^ (ee << 23 | te >>> 9), Ks = y[re], sp = Ks.high, Xs = Ks.low, Ze = Se + ap, Dt = ce + op + (Ze >>> 0 < Se >>> 0 ? 1 : 0), Ze = Ze + Gs, Dt = Dt + tp + (Ze >>> 0 < Gs >>> 0 ? 1 : 0), Ze = Ze + Xs, Dt = Dt + sp + (Ze >>> 0 < Xs >>> 0 ? 1 : 0), Ze = Ze + le, Dt = Dt + ye + (Ze >>> 0 < le >>> 0 ? 1 : 0), Js = Ys + np, cp = ip + rp + (Js >>> 0 < Ys >>> 0 ? 1 : 0);
              ce = ue, Se = ae, ue = ie, ae = Ce, ie = te, Ce = ee, ee = H + Ze | 0, te = X + Dt + (ee >>> 0 < H >>> 0 ? 1 : 0) | 0, X = V, H = G, V = q, G = $, q = B, $ = j, j = Ze + Js | 0, B = Dt + cp + (j >>> 0 < Ze >>> 0 ? 1 : 0) | 0;
            }
            g = k.low = g + j, k.high = m + B + (g >>> 0 < j >>> 0 ? 1 : 0), I = T.low = I + $, T.high = O + q + (I >>> 0 < $ >>> 0 ? 1 : 0), L = C.low = L + G, C.high = D + V + (L >>> 0 < G >>> 0 ? 1 : 0), h = E.low = h + H, E.high = z + X + (h >>> 0 < H >>> 0 ? 1 : 0), U = f.low = U + ee, f.high = Y + te + (U >>> 0 < ee >>> 0 ? 1 : 0), N = S.low = N + Ce, S.high = W + ie + (N >>> 0 < Ce >>> 0 ? 1 : 0), M = p.low = M + ae, p.high = P + ue + (M >>> 0 < ae >>> 0 ? 1 : 0), x = b.low = x + Se, b.high = F + ce + (x >>> 0 < Se >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var _ = this._data, l = _.words, A = this._nDataBytes * 8, k = _.sigBytes * 8;
            l[k >>> 5] |= 128 << 24 - k % 32, l[(k + 128 >>> 10 << 5) + 30] = Math.floor(A / 4294967296), l[(k + 128 >>> 10 << 5) + 31] = A, _.sigBytes = l.length * 4, this._process();
            var T = this._hash.toX32();
            return T;
          },
          clone: function() {
            var _ = o.clone.call(this);
            return _._hash = this._hash.clone(), _;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = o._createHelper(w), n.HmacSHA512 = o._createHmacHelper(w);
      }(), r.SHA512;
    });
  }(di)), di.exports;
}
var pi = { exports: {} }, Pw = pi.exports, P0;
function Bw() {
  return P0 || (P0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), Do(), Xd());
    })(Pw, function(r) {
      return function() {
        var n = r, i = n.x64, o = i.Word, a = i.WordArray, s = n.algo, u = s.SHA512, c = s.SHA384 = u.extend({
          _doReset: function() {
            this._hash = new a.init([
              new o.init(3418070365, 3238371032),
              new o.init(1654270250, 914150663),
              new o.init(2438529370, 812702999),
              new o.init(355462360, 4144912697),
              new o.init(1731405415, 4290775857),
              new o.init(2394180231, 1750603025),
              new o.init(3675008525, 1694076839),
              new o.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var d = u._doFinalize.call(this);
            return d.sigBytes -= 16, d;
          }
        });
        n.SHA384 = u._createHelper(c), n.HmacSHA384 = u._createHmacHelper(c);
      }(), r.SHA384;
    });
  }(pi)), pi.exports;
}
var hi = { exports: {} }, Fw = hi.exports, B0;
function Nw() {
  return B0 || (B0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), Do());
    })(Fw, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, s = o.Hasher, u = i.x64, c = u.Word, d = i.algo, y = [], v = [], w = [];
        (function() {
          for (var A = 1, k = 0, T = 0; T < 24; T++) {
            y[A + 5 * k] = (T + 1) * (T + 2) / 2 % 64;
            var C = k % 5, E = (2 * A + 3 * k) % 5;
            A = C, k = E;
          }
          for (var A = 0; A < 5; A++)
            for (var k = 0; k < 5; k++)
              v[A + 5 * k] = k + (2 * A + 3 * k) % 5 * 5;
          for (var f = 1, S = 0; S < 24; S++) {
            for (var p = 0, b = 0, m = 0; m < 7; m++) {
              if (f & 1) {
                var g = (1 << m) - 1;
                g < 32 ? b ^= 1 << g : p ^= 1 << g - 32;
              }
              f & 128 ? f = f << 1 ^ 113 : f <<= 1;
            }
            w[S] = c.create(p, b);
          }
        })();
        var _ = [];
        (function() {
          for (var A = 0; A < 25; A++)
            _[A] = c.create();
        })();
        var l = d.SHA3 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: s.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var A = this._state = [], k = 0; k < 25; k++)
              A[k] = new c.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(A, k) {
            for (var T = this._state, C = this.blockSize / 2, E = 0; E < C; E++) {
              var f = A[k + 2 * E], S = A[k + 2 * E + 1];
              f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
              var p = T[E];
              p.high ^= S, p.low ^= f;
            }
            for (var b = 0; b < 24; b++) {
              for (var m = 0; m < 5; m++) {
                for (var g = 0, O = 0, I = 0; I < 5; I++) {
                  var p = T[m + 5 * I];
                  g ^= p.high, O ^= p.low;
                }
                var D = _[m];
                D.high = g, D.low = O;
              }
              for (var m = 0; m < 5; m++)
                for (var L = _[(m + 4) % 5], z = _[(m + 1) % 5], h = z.high, Y = z.low, g = L.high ^ (h << 1 | Y >>> 31), O = L.low ^ (Y << 1 | h >>> 31), I = 0; I < 5; I++) {
                  var p = T[m + 5 * I];
                  p.high ^= g, p.low ^= O;
                }
              for (var U = 1; U < 25; U++) {
                var g, O, p = T[U], W = p.high, N = p.low, P = y[U];
                P < 32 ? (g = W << P | N >>> 32 - P, O = N << P | W >>> 32 - P) : (g = N << P - 32 | W >>> 64 - P, O = W << P - 32 | N >>> 64 - P);
                var M = _[v[U]];
                M.high = g, M.low = O;
              }
              var F = _[0], x = T[0];
              F.high = x.high, F.low = x.low;
              for (var m = 0; m < 5; m++)
                for (var I = 0; I < 5; I++) {
                  var U = m + 5 * I, p = T[U], B = _[U], j = _[(m + 1) % 5 + 5 * I], q = _[(m + 2) % 5 + 5 * I];
                  p.high = B.high ^ ~j.high & q.high, p.low = B.low ^ ~j.low & q.low;
                }
              var p = T[0], $ = w[b];
              p.high ^= $.high, p.low ^= $.low;
            }
          },
          _doFinalize: function() {
            var A = this._data, k = A.words;
            this._nDataBytes * 8;
            var T = A.sigBytes * 8, C = this.blockSize * 32;
            k[T >>> 5] |= 1 << 24 - T % 32, k[(n.ceil((T + 1) / C) * C >>> 5) - 1] |= 128, A.sigBytes = k.length * 4, this._process();
            for (var E = this._state, f = this.cfg.outputLength / 8, S = f / 8, p = [], b = 0; b < S; b++) {
              var m = E[b], g = m.high, O = m.low;
              g = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, O = (O << 8 | O >>> 24) & 16711935 | (O << 24 | O >>> 8) & 4278255360, p.push(O), p.push(g);
            }
            return new a.init(p, f);
          },
          clone: function() {
            for (var A = s.clone.call(this), k = A._state = this._state.slice(0), T = 0; T < 25; T++)
              k[T] = k[T].clone();
            return A;
          }
        });
        i.SHA3 = s._createHelper(l), i.HmacSHA3 = s._createHmacHelper(l);
      }(Math), r.SHA3;
    });
  }(hi)), hi.exports;
}
var vi = { exports: {} }, Mw = vi.exports, F0;
function $w() {
  return F0 || (F0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(Mw, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, s = o.Hasher, u = i.algo, c = a.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), d = a.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), y = a.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), v = a.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), w = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), _ = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), l = u.RIPEMD160 = s.extend({
          _doReset: function() {
            this._hash = a.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(S, p) {
            for (var b = 0; b < 16; b++) {
              var m = p + b, g = S[m];
              S[m] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            var O = this._hash.words, I = w.words, D = _.words, L = c.words, z = d.words, h = y.words, Y = v.words, U, W, N, P, M, F, x, B, j, q;
            F = U = O[0], x = W = O[1], B = N = O[2], j = P = O[3], q = M = O[4];
            for (var $, b = 0; b < 80; b += 1)
              $ = U + S[p + L[b]] | 0, b < 16 ? $ += A(W, N, P) + I[0] : b < 32 ? $ += k(W, N, P) + I[1] : b < 48 ? $ += T(W, N, P) + I[2] : b < 64 ? $ += C(W, N, P) + I[3] : $ += E(W, N, P) + I[4], $ = $ | 0, $ = f($, h[b]), $ = $ + M | 0, U = M, M = P, P = f(N, 10), N = W, W = $, $ = F + S[p + z[b]] | 0, b < 16 ? $ += E(x, B, j) + D[0] : b < 32 ? $ += C(x, B, j) + D[1] : b < 48 ? $ += T(x, B, j) + D[2] : b < 64 ? $ += k(x, B, j) + D[3] : $ += A(x, B, j) + D[4], $ = $ | 0, $ = f($, Y[b]), $ = $ + q | 0, F = q, q = j, j = f(B, 10), B = x, x = $;
            $ = O[1] + N + j | 0, O[1] = O[2] + P + q | 0, O[2] = O[3] + M + F | 0, O[3] = O[4] + U + x | 0, O[4] = O[0] + W + B | 0, O[0] = $;
          },
          _doFinalize: function() {
            var S = this._data, p = S.words, b = this._nDataBytes * 8, m = S.sigBytes * 8;
            p[m >>> 5] |= 128 << 24 - m % 32, p[(m + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, S.sigBytes = (p.length + 1) * 4, this._process();
            for (var g = this._hash, O = g.words, I = 0; I < 5; I++) {
              var D = O[I];
              O[I] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
            }
            return g;
          },
          clone: function() {
            var S = s.clone.call(this);
            return S._hash = this._hash.clone(), S;
          }
        });
        function A(S, p, b) {
          return S ^ p ^ b;
        }
        function k(S, p, b) {
          return S & p | ~S & b;
        }
        function T(S, p, b) {
          return (S | ~p) ^ b;
        }
        function C(S, p, b) {
          return S & b | p & ~b;
        }
        function E(S, p, b) {
          return S ^ (p | ~b);
        }
        function f(S, p) {
          return S << p | S >>> 32 - p;
        }
        i.RIPEMD160 = s._createHelper(l), i.HmacRIPEMD160 = s._createHmacHelper(l);
      }(), r.RIPEMD160;
    });
  }(vi)), vi.exports;
}
var xi = { exports: {} }, Lw = xi.exports, N0;
function js() {
  return N0 || (N0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(fe());
    })(Lw, function(r) {
      (function() {
        var n = r, i = n.lib, o = i.Base, a = n.enc, s = a.Utf8, u = n.algo;
        u.HMAC = o.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(c, d) {
            c = this._hasher = new c.init(), typeof d == "string" && (d = s.parse(d));
            var y = c.blockSize, v = y * 4;
            d.sigBytes > v && (d = c.finalize(d)), d.clamp();
            for (var w = this._oKey = d.clone(), _ = this._iKey = d.clone(), l = w.words, A = _.words, k = 0; k < y; k++)
              l[k] ^= 1549556828, A[k] ^= 909522486;
            w.sigBytes = _.sigBytes = v, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var c = this._hasher;
            c.reset(), c.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(c) {
            return this._hasher.update(c), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(c) {
            var d = this._hasher, y = d.finalize(c);
            d.reset();
            var v = d.finalize(this._oKey.clone().concat(y));
            return v;
          }
        });
      })();
    });
  }(xi)), xi.exports;
}
var gi = { exports: {} }, zw = gi.exports, M0;
function jw() {
  return M0 || (M0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), zs(), js());
    })(zw, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Base, a = i.WordArray, s = n.algo, u = s.SHA256, c = s.HMAC, d = s.PBKDF2 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: o.extend({
            keySize: 128 / 32,
            hasher: u,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(y) {
            this.cfg = this.cfg.extend(y);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(y, v) {
            for (var w = this.cfg, _ = c.create(w.hasher, y), l = a.create(), A = a.create([1]), k = l.words, T = A.words, C = w.keySize, E = w.iterations; k.length < C; ) {
              var f = _.update(v).finalize(A);
              _.reset();
              for (var S = f.words, p = S.length, b = f, m = 1; m < E; m++) {
                b = _.finalize(b), _.reset();
                for (var g = b.words, O = 0; O < p; O++)
                  S[O] ^= g[O];
              }
              l.concat(f), T[0]++;
            }
            return l.sigBytes = C * 4, l;
          }
        });
        n.PBKDF2 = function(y, v, w) {
          return d.create(w).compute(y, v);
        };
      }(), r.PBKDF2;
    });
  }(gi)), gi.exports;
}
var mi = { exports: {} }, Uw = mi.exports, $0;
function Vt() {
  return $0 || ($0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), Kd(), js());
    })(Uw, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Base, a = i.WordArray, s = n.algo, u = s.MD5, c = s.EvpKDF = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
            keySize: 128 / 32,
            hasher: u,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(d) {
            this.cfg = this.cfg.extend(d);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(d, y) {
            for (var v, w = this.cfg, _ = w.hasher.create(), l = a.create(), A = l.words, k = w.keySize, T = w.iterations; A.length < k; ) {
              v && _.update(v), v = _.update(d).finalize(y), _.reset();
              for (var C = 1; C < T; C++)
                v = _.finalize(v), _.reset();
              l.concat(v);
            }
            return l.sigBytes = k * 4, l;
          }
        });
        n.EvpKDF = function(d, y, v) {
          return c.create(v).compute(d, y);
        };
      }(), r.EvpKDF;
    });
  }(mi)), mi.exports;
}
var yi = { exports: {} }, Hw = yi.exports, L0;
function $e() {
  return L0 || (L0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), Vt());
    })(Hw, function(r) {
      r.lib.Cipher || function(n) {
        var i = r, o = i.lib, a = o.Base, s = o.WordArray, u = o.BufferedBlockAlgorithm, c = i.enc;
        c.Utf8;
        var d = c.Base64, y = i.algo, v = y.EvpKDF, w = o.Cipher = u.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: a.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(g, O) {
            return this.create(this._ENC_XFORM_MODE, g, O);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(g, O) {
            return this.create(this._DEC_XFORM_MODE, g, O);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(g, O, I) {
            this.cfg = this.cfg.extend(I), this._xformMode = g, this._key = O, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            u.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(g) {
            return this._append(g), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(g) {
            g && this._append(g);
            var O = this._doFinalize();
            return O;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function g(O) {
              return typeof O == "string" ? m : S;
            }
            return function(O) {
              return {
                encrypt: function(I, D, L) {
                  return g(D).encrypt(O, I, D, L);
                },
                decrypt: function(I, D, L) {
                  return g(D).decrypt(O, I, D, L);
                }
              };
            };
          }()
        });
        o.StreamCipher = w.extend({
          _doFinalize: function() {
            var g = this._process(!0);
            return g;
          },
          blockSize: 1
        });
        var _ = i.mode = {}, l = o.BlockCipherMode = a.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(g, O) {
            return this.Encryptor.create(g, O);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(g, O) {
            return this.Decryptor.create(g, O);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(g, O) {
            this._cipher = g, this._iv = O;
          }
        }), A = _.CBC = function() {
          var g = l.extend();
          g.Encryptor = g.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(I, D) {
              var L = this._cipher, z = L.blockSize;
              O.call(this, I, D, z), L.encryptBlock(I, D), this._prevBlock = I.slice(D, D + z);
            }
          }), g.Decryptor = g.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(I, D) {
              var L = this._cipher, z = L.blockSize, h = I.slice(D, D + z);
              L.decryptBlock(I, D), O.call(this, I, D, z), this._prevBlock = h;
            }
          });
          function O(I, D, L) {
            var z, h = this._iv;
            h ? (z = h, this._iv = n) : z = this._prevBlock;
            for (var Y = 0; Y < L; Y++)
              I[D + Y] ^= z[Y];
          }
          return g;
        }(), k = i.pad = {}, T = k.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(g, O) {
            for (var I = O * 4, D = I - g.sigBytes % I, L = D << 24 | D << 16 | D << 8 | D, z = [], h = 0; h < D; h += 4)
              z.push(L);
            var Y = s.create(z, D);
            g.concat(Y);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(g) {
            var O = g.words[g.sigBytes - 1 >>> 2] & 255;
            g.sigBytes -= O;
          }
        };
        o.BlockCipher = w.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: w.cfg.extend({
            mode: A,
            padding: T
          }),
          reset: function() {
            var g;
            w.reset.call(this);
            var O = this.cfg, I = O.iv, D = O.mode;
            this._xformMode == this._ENC_XFORM_MODE ? g = D.createEncryptor : (g = D.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == g ? this._mode.init(this, I && I.words) : (this._mode = g.call(D, this, I && I.words), this._mode.__creator = g);
          },
          _doProcessBlock: function(g, O) {
            this._mode.processBlock(g, O);
          },
          _doFinalize: function() {
            var g, O = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (O.pad(this._data, this.blockSize), g = this._process(!0)) : (g = this._process(!0), O.unpad(g)), g;
          },
          blockSize: 128 / 32
        });
        var C = o.CipherParams = a.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(g) {
            this.mixIn(g);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(g) {
            return (g || this.formatter).stringify(this);
          }
        }), E = i.format = {}, f = E.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(g) {
            var O, I = g.ciphertext, D = g.salt;
            return D ? O = s.create([1398893684, 1701076831]).concat(D).concat(I) : O = I, O.toString(d);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(g) {
            var O, I = d.parse(g), D = I.words;
            return D[0] == 1398893684 && D[1] == 1701076831 && (O = s.create(D.slice(2, 4)), D.splice(0, 4), I.sigBytes -= 16), C.create({ ciphertext: I, salt: O });
          }
        }, S = o.SerializableCipher = a.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: a.extend({
            format: f
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(g, O, I, D) {
            D = this.cfg.extend(D);
            var L = g.createEncryptor(I, D), z = L.finalize(O), h = L.cfg;
            return C.create({
              ciphertext: z,
              key: I,
              iv: h.iv,
              algorithm: g,
              mode: h.mode,
              padding: h.padding,
              blockSize: g.blockSize,
              formatter: D.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(g, O, I, D) {
            D = this.cfg.extend(D), O = this._parse(O, D.format);
            var L = g.createDecryptor(I, D).finalize(O.ciphertext);
            return L;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(g, O) {
            return typeof g == "string" ? O.parse(g, this) : g;
          }
        }), p = i.kdf = {}, b = p.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(g, O, I, D, L) {
            if (D || (D = s.random(64 / 8)), L)
              var z = v.create({ keySize: O + I, hasher: L }).compute(g, D);
            else
              var z = v.create({ keySize: O + I }).compute(g, D);
            var h = s.create(z.words.slice(O), I * 4);
            return z.sigBytes = O * 4, C.create({ key: z, iv: h, salt: D });
          }
        }, m = o.PasswordBasedCipher = S.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: S.cfg.extend({
            kdf: b
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(g, O, I, D) {
            D = this.cfg.extend(D);
            var L = D.kdf.execute(I, g.keySize, g.ivSize, D.salt, D.hasher);
            D.iv = L.iv;
            var z = S.encrypt.call(this, g, O, L.key, D);
            return z.mixIn(L), z;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(g, O, I, D) {
            D = this.cfg.extend(D), O = this._parse(O, D.format);
            var L = D.kdf.execute(I, g.keySize, g.ivSize, O.salt, D.hasher);
            D.iv = L.iv;
            var z = S.decrypt.call(this, g, O, L.key, D);
            return z;
          }
        });
      }();
    });
  }(yi)), yi.exports;
}
var bi = { exports: {} }, Ww = bi.exports, z0;
function qw() {
  return z0 || (z0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(Ww, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var s = this._cipher, u = s.blockSize;
            i.call(this, o, a, u, s), this._prevBlock = o.slice(a, a + u);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, a) {
            var s = this._cipher, u = s.blockSize, c = o.slice(a, a + u);
            i.call(this, o, a, u, s), this._prevBlock = c;
          }
        });
        function i(o, a, s, u) {
          var c, d = this._iv;
          d ? (c = d.slice(0), this._iv = void 0) : c = this._prevBlock, u.encryptBlock(c, 0);
          for (var y = 0; y < s; y++)
            o[a + y] ^= c[y];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(bi)), bi.exports;
}
var Ei = { exports: {} }, Vw = Ei.exports, j0;
function Gw() {
  return j0 || (j0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(Vw, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var s = this._cipher, u = s.blockSize, c = this._iv, d = this._counter;
            c && (d = this._counter = c.slice(0), this._iv = void 0);
            var y = d.slice(0);
            s.encryptBlock(y, 0), d[u - 1] = d[u - 1] + 1 | 0;
            for (var v = 0; v < u; v++)
              o[a + v] ^= y[v];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTR;
    });
  }(Ei)), Ei.exports;
}
var _i = { exports: {} }, Yw = _i.exports, U0;
function Kw() {
  return U0 || (U0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(Yw, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var n = r.lib.BlockCipherMode.extend();
        function i(s) {
          if ((s >> 24 & 255) === 255) {
            var u = s >> 16 & 255, c = s >> 8 & 255, d = s & 255;
            u === 255 ? (u = 0, c === 255 ? (c = 0, d === 255 ? d = 0 : ++d) : ++c) : ++u, s = 0, s += u << 16, s += c << 8, s += d;
          } else
            s += 1 << 24;
          return s;
        }
        function o(s) {
          return (s[0] = i(s[0])) === 0 && (s[1] = i(s[1])), s;
        }
        var a = n.Encryptor = n.extend({
          processBlock: function(s, u) {
            var c = this._cipher, d = c.blockSize, y = this._iv, v = this._counter;
            y && (v = this._counter = y.slice(0), this._iv = void 0), o(v);
            var w = v.slice(0);
            c.encryptBlock(w, 0);
            for (var _ = 0; _ < d; _++)
              s[u + _] ^= w[_];
          }
        });
        return n.Decryptor = a, n;
      }(), r.mode.CTRGladman;
    });
  }(_i)), _i.exports;
}
var wi = { exports: {} }, Xw = wi.exports, H0;
function Jw() {
  return H0 || (H0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(Xw, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var s = this._cipher, u = s.blockSize, c = this._iv, d = this._keystream;
            c && (d = this._keystream = c.slice(0), this._iv = void 0), s.encryptBlock(d, 0);
            for (var y = 0; y < u; y++)
              o[a + y] ^= d[y];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.OFB;
    });
  }(wi)), wi.exports;
}
var Ci = { exports: {} }, Qw = Ci.exports, W0;
function Zw() {
  return W0 || (W0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(Qw, function(r) {
      return r.mode.ECB = function() {
        var n = r.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(i, o) {
            this._cipher.encryptBlock(i, o);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(i, o) {
            this._cipher.decryptBlock(i, o);
          }
        }), n;
      }(), r.mode.ECB;
    });
  }(Ci)), Ci.exports;
}
var Si = { exports: {} }, eC = Si.exports, q0;
function tC() {
  return q0 || (q0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(eC, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, i) {
          var o = n.sigBytes, a = i * 4, s = a - o % a, u = o + s - 1;
          n.clamp(), n.words[u >>> 2] |= s << 24 - u % 4 * 8, n.sigBytes += s;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(Si)), Si.exports;
}
var Ai = { exports: {} }, rC = Ai.exports, V0;
function nC() {
  return V0 || (V0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(rC, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, i) {
          var o = i * 4, a = o - n.sigBytes % o;
          n.concat(r.lib.WordArray.random(a - 1)).concat(r.lib.WordArray.create([a << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(Ai)), Ai.exports;
}
var Ti = { exports: {} }, iC = Ti.exports, G0;
function oC() {
  return G0 || (G0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(iC, function(r) {
      return r.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(Ti)), Ti.exports;
}
var Oi = { exports: {} }, aC = Oi.exports, Y0;
function sC() {
  return Y0 || (Y0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(aC, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(n, i) {
          var o = i * 4;
          n.clamp(), n.sigBytes += o - (n.sigBytes % o || o);
        },
        unpad: function(n) {
          for (var i = n.words, o = n.sigBytes - 1, o = n.sigBytes - 1; o >= 0; o--)
            if (i[o >>> 2] >>> 24 - o % 4 * 8 & 255) {
              n.sigBytes = o + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(Oi)), Oi.exports;
}
var Ii = { exports: {} }, cC = Ii.exports, K0;
function uC() {
  return K0 || (K0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(cC, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(Ii)), Ii.exports;
}
var ki = { exports: {} }, lC = ki.exports, X0;
function fC() {
  return X0 || (X0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), $e());
    })(lC, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.CipherParams, s = i.enc, u = s.Hex, c = i.format;
        c.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(d) {
            return d.ciphertext.toString(u);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(d) {
            var y = u.parse(d);
            return a.create({ ciphertext: y });
          }
        };
      }(), r.format.Hex;
    });
  }(ki)), ki.exports;
}
var Di = { exports: {} }, dC = Di.exports, J0;
function pC() {
  return J0 || (J0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), dr(), pr(), Vt(), $e());
    })(dC, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.BlockCipher, a = n.algo, s = [], u = [], c = [], d = [], y = [], v = [], w = [], _ = [], l = [], A = [];
        (function() {
          for (var C = [], E = 0; E < 256; E++)
            E < 128 ? C[E] = E << 1 : C[E] = E << 1 ^ 283;
          for (var f = 0, S = 0, E = 0; E < 256; E++) {
            var p = S ^ S << 1 ^ S << 2 ^ S << 3 ^ S << 4;
            p = p >>> 8 ^ p & 255 ^ 99, s[f] = p, u[p] = f;
            var b = C[f], m = C[b], g = C[m], O = C[p] * 257 ^ p * 16843008;
            c[f] = O << 24 | O >>> 8, d[f] = O << 16 | O >>> 16, y[f] = O << 8 | O >>> 24, v[f] = O;
            var O = g * 16843009 ^ m * 65537 ^ b * 257 ^ f * 16843008;
            w[p] = O << 24 | O >>> 8, _[p] = O << 16 | O >>> 16, l[p] = O << 8 | O >>> 24, A[p] = O, f ? (f = b ^ C[C[C[g ^ b]]], S ^= C[C[S]]) : f = S = 1;
          }
        })();
        var k = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], T = a.AES = o.extend({
          _doReset: function() {
            var C;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var E = this._keyPriorReset = this._key, f = E.words, S = E.sigBytes / 4, p = this._nRounds = S + 6, b = (p + 1) * 4, m = this._keySchedule = [], g = 0; g < b; g++)
                g < S ? m[g] = f[g] : (C = m[g - 1], g % S ? S > 6 && g % S == 4 && (C = s[C >>> 24] << 24 | s[C >>> 16 & 255] << 16 | s[C >>> 8 & 255] << 8 | s[C & 255]) : (C = C << 8 | C >>> 24, C = s[C >>> 24] << 24 | s[C >>> 16 & 255] << 16 | s[C >>> 8 & 255] << 8 | s[C & 255], C ^= k[g / S | 0] << 24), m[g] = m[g - S] ^ C);
              for (var O = this._invKeySchedule = [], I = 0; I < b; I++) {
                var g = b - I;
                if (I % 4)
                  var C = m[g];
                else
                  var C = m[g - 4];
                I < 4 || g <= 4 ? O[I] = C : O[I] = w[s[C >>> 24]] ^ _[s[C >>> 16 & 255]] ^ l[s[C >>> 8 & 255]] ^ A[s[C & 255]];
              }
            }
          },
          encryptBlock: function(C, E) {
            this._doCryptBlock(C, E, this._keySchedule, c, d, y, v, s);
          },
          decryptBlock: function(C, E) {
            var f = C[E + 1];
            C[E + 1] = C[E + 3], C[E + 3] = f, this._doCryptBlock(C, E, this._invKeySchedule, w, _, l, A, u);
            var f = C[E + 1];
            C[E + 1] = C[E + 3], C[E + 3] = f;
          },
          _doCryptBlock: function(C, E, f, S, p, b, m, g) {
            for (var O = this._nRounds, I = C[E] ^ f[0], D = C[E + 1] ^ f[1], L = C[E + 2] ^ f[2], z = C[E + 3] ^ f[3], h = 4, Y = 1; Y < O; Y++) {
              var U = S[I >>> 24] ^ p[D >>> 16 & 255] ^ b[L >>> 8 & 255] ^ m[z & 255] ^ f[h++], W = S[D >>> 24] ^ p[L >>> 16 & 255] ^ b[z >>> 8 & 255] ^ m[I & 255] ^ f[h++], N = S[L >>> 24] ^ p[z >>> 16 & 255] ^ b[I >>> 8 & 255] ^ m[D & 255] ^ f[h++], P = S[z >>> 24] ^ p[I >>> 16 & 255] ^ b[D >>> 8 & 255] ^ m[L & 255] ^ f[h++];
              I = U, D = W, L = N, z = P;
            }
            var U = (g[I >>> 24] << 24 | g[D >>> 16 & 255] << 16 | g[L >>> 8 & 255] << 8 | g[z & 255]) ^ f[h++], W = (g[D >>> 24] << 24 | g[L >>> 16 & 255] << 16 | g[z >>> 8 & 255] << 8 | g[I & 255]) ^ f[h++], N = (g[L >>> 24] << 24 | g[z >>> 16 & 255] << 16 | g[I >>> 8 & 255] << 8 | g[D & 255]) ^ f[h++], P = (g[z >>> 24] << 24 | g[I >>> 16 & 255] << 16 | g[D >>> 8 & 255] << 8 | g[L & 255]) ^ f[h++];
            C[E] = U, C[E + 1] = W, C[E + 2] = N, C[E + 3] = P;
          },
          keySize: 256 / 32
        });
        n.AES = o._createHelper(T);
      }(), r.AES;
    });
  }(Di)), Di.exports;
}
var Ri = { exports: {} }, hC = Ri.exports, Q0;
function vC() {
  return Q0 || (Q0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), dr(), pr(), Vt(), $e());
    })(hC, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = i.BlockCipher, s = n.algo, u = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], c = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], d = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], y = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], v = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], w = s.DES = a.extend({
          _doReset: function() {
            for (var k = this._key, T = k.words, C = [], E = 0; E < 56; E++) {
              var f = u[E] - 1;
              C[E] = T[f >>> 5] >>> 31 - f % 32 & 1;
            }
            for (var S = this._subKeys = [], p = 0; p < 16; p++) {
              for (var b = S[p] = [], m = d[p], E = 0; E < 24; E++)
                b[E / 6 | 0] |= C[(c[E] - 1 + m) % 28] << 31 - E % 6, b[4 + (E / 6 | 0)] |= C[28 + (c[E + 24] - 1 + m) % 28] << 31 - E % 6;
              b[0] = b[0] << 1 | b[0] >>> 31;
              for (var E = 1; E < 7; E++)
                b[E] = b[E] >>> (E - 1) * 4 + 3;
              b[7] = b[7] << 5 | b[7] >>> 27;
            }
            for (var g = this._invSubKeys = [], E = 0; E < 16; E++)
              g[E] = S[15 - E];
          },
          encryptBlock: function(k, T) {
            this._doCryptBlock(k, T, this._subKeys);
          },
          decryptBlock: function(k, T) {
            this._doCryptBlock(k, T, this._invSubKeys);
          },
          _doCryptBlock: function(k, T, C) {
            this._lBlock = k[T], this._rBlock = k[T + 1], _.call(this, 4, 252645135), _.call(this, 16, 65535), l.call(this, 2, 858993459), l.call(this, 8, 16711935), _.call(this, 1, 1431655765);
            for (var E = 0; E < 16; E++) {
              for (var f = C[E], S = this._lBlock, p = this._rBlock, b = 0, m = 0; m < 8; m++)
                b |= y[m][((p ^ f[m]) & v[m]) >>> 0];
              this._lBlock = p, this._rBlock = S ^ b;
            }
            var g = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = g, _.call(this, 1, 1431655765), l.call(this, 8, 16711935), l.call(this, 2, 858993459), _.call(this, 16, 65535), _.call(this, 4, 252645135), k[T] = this._lBlock, k[T + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function _(k, T) {
          var C = (this._lBlock >>> k ^ this._rBlock) & T;
          this._rBlock ^= C, this._lBlock ^= C << k;
        }
        function l(k, T) {
          var C = (this._rBlock >>> k ^ this._lBlock) & T;
          this._lBlock ^= C, this._rBlock ^= C << k;
        }
        n.DES = a._createHelper(w);
        var A = s.TripleDES = a.extend({
          _doReset: function() {
            var k = this._key, T = k.words;
            if (T.length !== 2 && T.length !== 4 && T.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var C = T.slice(0, 2), E = T.length < 4 ? T.slice(0, 2) : T.slice(2, 4), f = T.length < 6 ? T.slice(0, 2) : T.slice(4, 6);
            this._des1 = w.createEncryptor(o.create(C)), this._des2 = w.createEncryptor(o.create(E)), this._des3 = w.createEncryptor(o.create(f));
          },
          encryptBlock: function(k, T) {
            this._des1.encryptBlock(k, T), this._des2.decryptBlock(k, T), this._des3.encryptBlock(k, T);
          },
          decryptBlock: function(k, T) {
            this._des3.decryptBlock(k, T), this._des2.encryptBlock(k, T), this._des1.decryptBlock(k, T);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = a._createHelper(A);
      }(), r.TripleDES;
    });
  }(Ri)), Ri.exports;
}
var Pi = { exports: {} }, xC = Pi.exports, Z0;
function gC() {
  return Z0 || (Z0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), dr(), pr(), Vt(), $e());
    })(xC, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, s = a.RC4 = o.extend({
          _doReset: function() {
            for (var d = this._key, y = d.words, v = d.sigBytes, w = this._S = [], _ = 0; _ < 256; _++)
              w[_] = _;
            for (var _ = 0, l = 0; _ < 256; _++) {
              var A = _ % v, k = y[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              l = (l + w[_] + k) % 256;
              var T = w[_];
              w[_] = w[l], w[l] = T;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(d, y) {
            d[y] ^= u.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function u() {
          for (var d = this._S, y = this._i, v = this._j, w = 0, _ = 0; _ < 4; _++) {
            y = (y + 1) % 256, v = (v + d[y]) % 256;
            var l = d[y];
            d[y] = d[v], d[v] = l, w |= d[(d[y] + d[v]) % 256] << 24 - _ * 8;
          }
          return this._i = y, this._j = v, w;
        }
        n.RC4 = o._createHelper(s);
        var c = a.RC4Drop = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: s.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            s._doReset.call(this);
            for (var d = this.cfg.drop; d > 0; d--)
              u.call(this);
          }
        });
        n.RC4Drop = o._createHelper(c);
      }(), r.RC4;
    });
  }(Pi)), Pi.exports;
}
var Bi = { exports: {} }, mC = Bi.exports, el;
function yC() {
  return el || (el = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), dr(), pr(), Vt(), $e());
    })(mC, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, s = [], u = [], c = [], d = a.Rabbit = o.extend({
          _doReset: function() {
            for (var v = this._key.words, w = this.cfg.iv, _ = 0; _ < 4; _++)
              v[_] = (v[_] << 8 | v[_] >>> 24) & 16711935 | (v[_] << 24 | v[_] >>> 8) & 4278255360;
            var l = this._X = [
              v[0],
              v[3] << 16 | v[2] >>> 16,
              v[1],
              v[0] << 16 | v[3] >>> 16,
              v[2],
              v[1] << 16 | v[0] >>> 16,
              v[3],
              v[2] << 16 | v[1] >>> 16
            ], A = this._C = [
              v[2] << 16 | v[2] >>> 16,
              v[0] & 4294901760 | v[1] & 65535,
              v[3] << 16 | v[3] >>> 16,
              v[1] & 4294901760 | v[2] & 65535,
              v[0] << 16 | v[0] >>> 16,
              v[2] & 4294901760 | v[3] & 65535,
              v[1] << 16 | v[1] >>> 16,
              v[3] & 4294901760 | v[0] & 65535
            ];
            this._b = 0;
            for (var _ = 0; _ < 4; _++)
              y.call(this);
            for (var _ = 0; _ < 8; _++)
              A[_] ^= l[_ + 4 & 7];
            if (w) {
              var k = w.words, T = k[0], C = k[1], E = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, f = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, S = E >>> 16 | f & 4294901760, p = f << 16 | E & 65535;
              A[0] ^= E, A[1] ^= S, A[2] ^= f, A[3] ^= p, A[4] ^= E, A[5] ^= S, A[6] ^= f, A[7] ^= p;
              for (var _ = 0; _ < 4; _++)
                y.call(this);
            }
          },
          _doProcessBlock: function(v, w) {
            var _ = this._X;
            y.call(this), s[0] = _[0] ^ _[5] >>> 16 ^ _[3] << 16, s[1] = _[2] ^ _[7] >>> 16 ^ _[5] << 16, s[2] = _[4] ^ _[1] >>> 16 ^ _[7] << 16, s[3] = _[6] ^ _[3] >>> 16 ^ _[1] << 16;
            for (var l = 0; l < 4; l++)
              s[l] = (s[l] << 8 | s[l] >>> 24) & 16711935 | (s[l] << 24 | s[l] >>> 8) & 4278255360, v[w + l] ^= s[l];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function y() {
          for (var v = this._X, w = this._C, _ = 0; _ < 8; _++)
            u[_] = w[_];
          w[0] = w[0] + 1295307597 + this._b | 0, w[1] = w[1] + 3545052371 + (w[0] >>> 0 < u[0] >>> 0 ? 1 : 0) | 0, w[2] = w[2] + 886263092 + (w[1] >>> 0 < u[1] >>> 0 ? 1 : 0) | 0, w[3] = w[3] + 1295307597 + (w[2] >>> 0 < u[2] >>> 0 ? 1 : 0) | 0, w[4] = w[4] + 3545052371 + (w[3] >>> 0 < u[3] >>> 0 ? 1 : 0) | 0, w[5] = w[5] + 886263092 + (w[4] >>> 0 < u[4] >>> 0 ? 1 : 0) | 0, w[6] = w[6] + 1295307597 + (w[5] >>> 0 < u[5] >>> 0 ? 1 : 0) | 0, w[7] = w[7] + 3545052371 + (w[6] >>> 0 < u[6] >>> 0 ? 1 : 0) | 0, this._b = w[7] >>> 0 < u[7] >>> 0 ? 1 : 0;
          for (var _ = 0; _ < 8; _++) {
            var l = v[_] + w[_], A = l & 65535, k = l >>> 16, T = ((A * A >>> 17) + A * k >>> 15) + k * k, C = ((l & 4294901760) * l | 0) + ((l & 65535) * l | 0);
            c[_] = T ^ C;
          }
          v[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, v[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, v[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, v[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, v[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, v[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, v[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, v[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        n.Rabbit = o._createHelper(d);
      }(), r.Rabbit;
    });
  }(Bi)), Bi.exports;
}
var Fi = { exports: {} }, bC = Fi.exports, tl;
function EC() {
  return tl || (tl = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), dr(), pr(), Vt(), $e());
    })(bC, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, s = [], u = [], c = [], d = a.RabbitLegacy = o.extend({
          _doReset: function() {
            var v = this._key.words, w = this.cfg.iv, _ = this._X = [
              v[0],
              v[3] << 16 | v[2] >>> 16,
              v[1],
              v[0] << 16 | v[3] >>> 16,
              v[2],
              v[1] << 16 | v[0] >>> 16,
              v[3],
              v[2] << 16 | v[1] >>> 16
            ], l = this._C = [
              v[2] << 16 | v[2] >>> 16,
              v[0] & 4294901760 | v[1] & 65535,
              v[3] << 16 | v[3] >>> 16,
              v[1] & 4294901760 | v[2] & 65535,
              v[0] << 16 | v[0] >>> 16,
              v[2] & 4294901760 | v[3] & 65535,
              v[1] << 16 | v[1] >>> 16,
              v[3] & 4294901760 | v[0] & 65535
            ];
            this._b = 0;
            for (var A = 0; A < 4; A++)
              y.call(this);
            for (var A = 0; A < 8; A++)
              l[A] ^= _[A + 4 & 7];
            if (w) {
              var k = w.words, T = k[0], C = k[1], E = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, f = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, S = E >>> 16 | f & 4294901760, p = f << 16 | E & 65535;
              l[0] ^= E, l[1] ^= S, l[2] ^= f, l[3] ^= p, l[4] ^= E, l[5] ^= S, l[6] ^= f, l[7] ^= p;
              for (var A = 0; A < 4; A++)
                y.call(this);
            }
          },
          _doProcessBlock: function(v, w) {
            var _ = this._X;
            y.call(this), s[0] = _[0] ^ _[5] >>> 16 ^ _[3] << 16, s[1] = _[2] ^ _[7] >>> 16 ^ _[5] << 16, s[2] = _[4] ^ _[1] >>> 16 ^ _[7] << 16, s[3] = _[6] ^ _[3] >>> 16 ^ _[1] << 16;
            for (var l = 0; l < 4; l++)
              s[l] = (s[l] << 8 | s[l] >>> 24) & 16711935 | (s[l] << 24 | s[l] >>> 8) & 4278255360, v[w + l] ^= s[l];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function y() {
          for (var v = this._X, w = this._C, _ = 0; _ < 8; _++)
            u[_] = w[_];
          w[0] = w[0] + 1295307597 + this._b | 0, w[1] = w[1] + 3545052371 + (w[0] >>> 0 < u[0] >>> 0 ? 1 : 0) | 0, w[2] = w[2] + 886263092 + (w[1] >>> 0 < u[1] >>> 0 ? 1 : 0) | 0, w[3] = w[3] + 1295307597 + (w[2] >>> 0 < u[2] >>> 0 ? 1 : 0) | 0, w[4] = w[4] + 3545052371 + (w[3] >>> 0 < u[3] >>> 0 ? 1 : 0) | 0, w[5] = w[5] + 886263092 + (w[4] >>> 0 < u[4] >>> 0 ? 1 : 0) | 0, w[6] = w[6] + 1295307597 + (w[5] >>> 0 < u[5] >>> 0 ? 1 : 0) | 0, w[7] = w[7] + 3545052371 + (w[6] >>> 0 < u[6] >>> 0 ? 1 : 0) | 0, this._b = w[7] >>> 0 < u[7] >>> 0 ? 1 : 0;
          for (var _ = 0; _ < 8; _++) {
            var l = v[_] + w[_], A = l & 65535, k = l >>> 16, T = ((A * A >>> 17) + A * k >>> 15) + k * k, C = ((l & 4294901760) * l | 0) + ((l & 65535) * l | 0);
            c[_] = T ^ C;
          }
          v[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, v[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, v[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, v[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, v[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, v[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, v[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, v[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        n.RabbitLegacy = o._createHelper(d);
      }(), r.RabbitLegacy;
    });
  }(Fi)), Fi.exports;
}
var Ni = { exports: {} }, _C = Ni.exports, rl;
function wC() {
  return rl || (rl = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), dr(), pr(), Vt(), $e());
    })(_C, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.BlockCipher, a = n.algo;
        const s = 16, u = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], c = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var d = {
          pbox: [],
          sbox: []
        };
        function y(A, k) {
          let T = k >> 24 & 255, C = k >> 16 & 255, E = k >> 8 & 255, f = k & 255, S = A.sbox[0][T] + A.sbox[1][C];
          return S = S ^ A.sbox[2][E], S = S + A.sbox[3][f], S;
        }
        function v(A, k, T) {
          let C = k, E = T, f;
          for (let S = 0; S < s; ++S)
            C = C ^ A.pbox[S], E = y(A, C) ^ E, f = C, C = E, E = f;
          return f = C, C = E, E = f, E = E ^ A.pbox[s], C = C ^ A.pbox[s + 1], { left: C, right: E };
        }
        function w(A, k, T) {
          let C = k, E = T, f;
          for (let S = s + 1; S > 1; --S)
            C = C ^ A.pbox[S], E = y(A, C) ^ E, f = C, C = E, E = f;
          return f = C, C = E, E = f, E = E ^ A.pbox[1], C = C ^ A.pbox[0], { left: C, right: E };
        }
        function _(A, k, T) {
          for (let p = 0; p < 4; p++) {
            A.sbox[p] = [];
            for (let b = 0; b < 256; b++)
              A.sbox[p][b] = c[p][b];
          }
          let C = 0;
          for (let p = 0; p < s + 2; p++)
            A.pbox[p] = u[p] ^ k[C], C++, C >= T && (C = 0);
          let E = 0, f = 0, S = 0;
          for (let p = 0; p < s + 2; p += 2)
            S = v(A, E, f), E = S.left, f = S.right, A.pbox[p] = E, A.pbox[p + 1] = f;
          for (let p = 0; p < 4; p++)
            for (let b = 0; b < 256; b += 2)
              S = v(A, E, f), E = S.left, f = S.right, A.sbox[p][b] = E, A.sbox[p][b + 1] = f;
          return !0;
        }
        var l = a.Blowfish = o.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var A = this._keyPriorReset = this._key, k = A.words, T = A.sigBytes / 4;
              _(d, k, T);
            }
          },
          encryptBlock: function(A, k) {
            var T = v(d, A[k], A[k + 1]);
            A[k] = T.left, A[k + 1] = T.right;
          },
          decryptBlock: function(A, k) {
            var T = w(d, A[k], A[k + 1]);
            A[k] = T.left, A[k + 1] = T.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        n.Blowfish = o._createHelper(l);
      }(), r.Blowfish;
    });
  }(Ni)), Ni.exports;
}
var CC = ti.exports, nl;
function SC() {
  return nl || (nl = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(fe(), Do(), Ew(), ww(), dr(), Aw(), pr(), Kd(), zs(), Dw(), Xd(), Bw(), Nw(), $w(), js(), jw(), Vt(), $e(), qw(), Gw(), Kw(), Jw(), Zw(), tC(), nC(), oC(), sC(), uC(), fC(), pC(), vC(), gC(), yC(), EC(), wC());
    })(CC, function(r) {
      return r;
    });
  }(ti)), ti.exports;
}
var AC = SC();
const Ja = /* @__PURE__ */ $r(AC), Jd = "XkhZG4fW2t2W";
function Ea(e, t = !1) {
  try {
    if (!t)
      return _r.get(e) ? _r.get(e) : void 0;
    const r = _r.get(e);
    if (r === void 0)
      return;
    const n = Ja.AES.decrypt(r, Jd);
    return JSON.parse(n.toString(Ja.enc.Utf8));
  } catch {
    _r.remove(e);
  }
}
function TC(e, t, r = 1, n = !1) {
  try {
    if (t === void 0)
      return;
    if (!n)
      return _r.set(e, t, { expires: r });
    const i = Ja.AES.encrypt(
      typeof t == "object" ? JSON.stringify(t) : t,
      Jd
    ).toString();
    return _r.set(e, i, { expires: r });
  } catch {
  }
}
const OC = async () => {
  if (console.log("token in cookie", Ea("annonJwtToken", !1)), Ea("annonJwtToken", !1))
    return Ea("annonJwtToken", !1);
  const e = new Promise(
    (r, n) => setTimeout(() => n("Timeout"), 5e3)
  ), t = dw();
  try {
    const r = await Promise.race([
      t,
      e
    ]);
    if (r === "Timeout")
      return console.error("API call timed out"), window.location.href = "/login", null;
    const i = await (await fetch(
      "https://web-api-staging.binge.buzz/api/v3/oauth/verify/login/anon",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Device-Type": "websdk"
        },
        body: JSON.stringify({
          access_token: r.accessToken,
          uid: r.uid
        })
      }
    )).json();
    return i != null && i.token ? (TC("annonJwtToken", i.token, 1, !1), sessionStorage.setItem("annonJwtToken", i.token), i.token) : null;
  } catch (r) {
    return console.error("Error during anonymous login:", r), null;
  }
}, IC = () => {
  const [e, t] = dt(!0), [r, n] = dt(null), [i, o] = dt(null);
  vn(() => {
    (async () => {
      try {
        const c = await OC();
        n(c);
        const d = await Iy(c);
        o(d);
      } catch (c) {
        console.error("Error fetching token or images:", c);
      } finally {
        t(!1);
      }
    })();
  }, []);
  const a = {
    landscape: i ? `https://web-api-staging.binge.buzz/${i.banners[0].banner_landscape_image_path}` : "",
    portrait: i ? `https://web-api-staging.binge.buzz/${i.banners[0].banner_portrait_image_path}` : ""
  }, s = {
    title: (i == null ? void 0 : i.banners[0]["section-title"]) || "",
    description: (i == null ? void 0 : i.banners[0]["section-description"]) || ""
  };
  return /* @__PURE__ */ Ye(ol, { children: [
    /* @__PURE__ */ Z(Em, { isLoading: e, bannerImages: a }),
    /* @__PURE__ */ Z(
      ky,
      {
        title: s.title,
        description: s.description
      }
    ),
    /* @__PURE__ */ Z(Oy, { token: r, isLoading: e })
  ] });
}, RC = () => /* @__PURE__ */ Z(Xl, { theme: hs({ palette: gp }), children: /* @__PURE__ */ Z(IC, {}) });
export {
  RC as B,
  Ea as G,
  yy as I,
  J as _,
  vg as a,
  mo as b,
  Qt as c,
  df as d,
  $r as g,
  gw as r
};
//# sourceMappingURL=index-CWfiLhec.mjs.map
