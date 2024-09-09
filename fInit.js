(function () {
    function a(b, d, c) {
        if (null == b) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (d instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return b + ""
    }
    var f = "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, d, c) {
        if (b == Array.prototype || b == Object.prototype) return b;
        b[d] = c.value;
        return b
    };

    function h(b) {
        b = ["object" == typeof globalThis && globalThis, b, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var d = 0; d < b.length; ++d) {
            var c = b[d];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var l = h(this);

    function m(b, d) {
        if (d) a: {
            var c = l;b = b.split(".");
            for (var e = 0; e < b.length - 1; e++) {
                var g = b[e];
                if (!(g in c)) break a;
                c = c[g]
            }
            b = b[b.length - 1];e = c[b];d = d(e);d != e && null != d && f(c, b, {
                configurable: !0,
                writable: !0,
                value: d
            })
        }
    }
    m("String.prototype.startsWith", function (b) {
        return b ? b : function (d, c) {
            var e = a(this, d, "startsWith"),
                g = e.length,
                k = d.length;
            c = Math.max(0, Math.min(c | 0, e.length));
            for (var n = 0; n < k && c < g;)
                if (e[c++] != d[n++]) return !1;
            return n >= k
        }
    });
    m("Object.is", function (b) {
        return b ? b : function (d, c) {
            return d === c ? 0 !== d || 1 / d === 1 / c : d !== d && c !== c
        }
    });
    m("Array.prototype.includes", function (b) {
        return b ? b : function (d, c) {
            var e = this;
            e instanceof String && (e = String(e));
            var g = e.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + g, 0)); c < g; c++) {
                var k = e[c];
                if (k === d || Object.is(k, d)) return !0
            }
            return !1
        }
    });
    m("String.prototype.includes", function (b) {
        return b ? b : function (d, c) {
            return -1 !== a(this, d, "includes").indexOf(d, c || 0)
        }
    });
    var p = "function" == typeof Object.assign ? Object.assign : function (b, d) {
        for (var c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e)
                for (var g in e) Object.prototype.hasOwnProperty.call(e, g) && (b[g] = e[g])
        }
        return b
    };
    m("Object.assign", function (b) {
        return b || p
    });
    m("String.prototype.endsWith", function (b) {
        return b ? b : function (d, c) {
            var e = a(this, d, "endsWith");
            void 0 === c && (c = e.length);
            c = Math.max(0, Math.min(c | 0, e.length));
            for (var g = d.length; 0 < g && 0 < c;)
                if (e[--c] != d[--g]) return !1;
            return 0 >= g
        }
    });
    var q = "deledao.com";
    try {
        importScripts("/util/vendor.js")
    } catch (b) {}
    var r = {
        C: "2019.3.1.1",
        j: 12,
        i: "/default",
        Eb: "",
        B: "",
        platform: 12,
        os: "",
        I: !1,
        m: !1,
        K: !1,
        J: !0,
        F: q,
        A: !1,
        L: !1,
        features: {},
        ib: function (b) {
            var d = !b;
            r.L && (b = {
                a: 33,
                f: "2023.1.14.1",
                d: 12,
                g: 12,
                k: ""
            });
            if (b) {
                r.C = b.f;
                "" !== b.k && (r.i = "/" + b.k);
                12 == b.a ? q.startsWith("dev.") || (q = "dev." + q) : r.A = !0;
                [12, 99].includes(b.d) && (r.j = b.d);
                b.g && (r.platform = b.g);
                77 == r.platform && (r.platform = 99, r.os = "android");
                switch (r.platform) {
                    case 33:
                        r.m = !0;
                        break;
                    case 99:
                    case 88:
                        r.m = !0, r.K = !0, r.J = !1
                }
                d || (r.I = !0)
            } else q.startsWith("dev.") || (q = "dev." +
                q);
            r.m && (r.Mb = !0);
            r.H();
            r.G();
            r.Lb = r.u[0].toUpperCase() + r.u.slice(1)
        },
        Bb: "dld://",
        bb: "/homeblock.html",
        Da: "/downtime.html",
        Jb: "/teacher/#/student-signin",
        Fb: "/#/register",
        ta: "/GetCategory",
        ua: "/GetCategoryNames",
        Ra: "/GetQuickStartList",
        Db: "/SendViolationLogs",
        Kb: "/UploadData",
        lb: "/IsImageSafe",
        Pa: "/GetImageContent",
        ob: "/GetTextCategory",
        La: "/GetAuthToken",
        Ma: "/GetAuthTokenHome",
        Ka: "/GetAnonymousToken",
        ha: "/IsTextCyberBully",
        Na: "/Config/GetConfig",
        Oa: "/Config/GetHomeConfig",
        Qa: "/IsOffCampus",
        Sa: "/AnalyzeVideo",
        Za: "/HomeUnblockRequest",
        sa: "/BonusFunTimeRequest",
        Hb: "/SubmitAppleReceipt",
        N: 90,
        xa: 0,
        pa: 2,
        Ja: 118,
        Ea: 121,
        cb: 5E3,
        za: 60,
        ya: 86400,
        R: "1",
        P: "2",
        S: "3",
        eb: "http://",
        fb: "https://",
        Nb: "violation_logs",
        Ha: "flagged_events",
        Ab: "debug_logs",
        oa: "blackList",
        Pb: "whiteList",
        T: "BlockAds",
        $: "BlockTracking",
        ja: "YoutubeFiltering",
        ba: "ClickToZoom",
        fa: "GoogleSafeSearch",
        W: "BlockGGTracking",
        Y: "BlockLocalStorage",
        aa: "blockingPage",
        ea: "gsuitegroup",
        ia: "auth.oumap",
        o: "/default",
        X: !1,
        da: !1,
        ga: !1,
        U: !1,
        V: !1,
        ka: !1,
        Z: !1,
        O: "Anonymous",
        la: "anonymous",
        Ga: "facebook.com",
        H: function () {
            Object.assign(r, {
                u: "deledao",
                yb: "com.deledao",
                Gb: "https://static." + q,
                h: "https://static." + q + r.i,
                D: "https://static." + q + r.o,
                s: "https://cc." + q,
                l: "https://auth." + q,
                sb: "https://up." + q,
                M: "https://portals." + q + r.B,
                ra: "/blockCom.html",
                qa: "/blockClass.html",
                hb: "https://im." + q,
                Ib: "https://tx." + q,
                tb: "https://tx." + q,
                vb: "https://static." + q + "/mobile",
                wb: "https://static." + r.F + "/mobile",
                Ua: "https://static." + q + r.i + "/homeagent.html",
                ab: "https://static." + q + r.i + "/homewelcome.html",
                Ob: "https://static." + q + r.i + "/waitForSignIn2.html",
                gb: "https://static." + q + r.i + "/iap.html",
                rb: "/lockdown.html"
            });
            88 == r.platform && (r.A ? (r.l = "http://auth.in.deledao.com", r.s = "http://cc.in.deledao.com") : (r.l = "http://auth.dev-in.deledao.com", r.s = "http://cc.dev-in.deledao.com"))
        },
        G: function () {
            r.features.wa = {
                enabled: 12 == r.j && (12 == r.platform || 99 == r.platform && "android" != r.os)
            };
            r.features.proxy = {
                na: 99 == r.platform,
                qb: 99 == r.j && 99 == r.platform && "android" != r.os
            };
            r.features.Ca = {
                Cb: 88 == r.platform || 99 == r.platform &&
                    "android" == r.os
            };
            r.features.Ba = {
                enabled: 99 != r.platform || "android" != r.os
            }
        },
        kb: function () {
            return 99 === r.j
        },
        jb: function () {
            return 99 === r.j ? !0 : !1
        },
        nb: function () {
            return 12 === r.j ? !0 : !1
        },
        mb: function () {
            return !{
                Ia: 1
            }.hasOwnProperty("foobar")
        },
        pb: function (b) {
            return b.endsWith(q) || "localhost" === b ? !0 : !1
        },
        Fa: function (b, d) {
            "function" == typeof importScripts ? WorkerGlobalScope[b] = d : "undefined" != typeof module && module.exports ? global[b] = d : window[b] = d
        },
        v: function (b) {
            if ("function" == typeof importScripts) {
                var d = WorkerGlobalScope[b];
                WorkerGlobalScope[b] = void 0
            } else "undefined" != typeof module && module.exports ? (d = global[b], global[b] = void 0) : (d = window[b], window[b] = void 0);
            return d
        },
        Wa: function () {
            return r.h + "/homesetup.html"
        },
        Ya: function () {
            return r.h + "/homeCustSignIn.html"
        },
        Xa: function () {
            return r.h + "/signup.html"
        },
        ma: function () {
            return r.l + "/GetAuthWhiteList"
        },
        Va: function () {
            return r.h + "/homeCustSignIn.html"
        },
        $a: function () {
            return r.h + "/homeSignIn.html"
        },
        ub: function () {
            return r.h + "/mindex.html"
        },
        xb: function () {
            return r.h + "/mhomeplan.html"
        },
        zb: function () {
            return r.h + "/qr.html"
        },
        Aa: function () {
            return r.D + "/qr.html"
        },
        va: function () {
            return r.h + "/chat.html"
        },
        Ta: function (b) {
            return b !== r.o ? "https://" + r.i + "." + q + r.B : r.M
        }
    };
    var t = {
        a: 33,
        f: "rel_2024.7.17.1",
        d: 12,
        g: 12,
        k: ""
    };
    var u = "object" == typeof t ? t : void 0,
        v = r.v("__dld_fi");
    v ? v(u) : (console.error("frontInit is undefined."), setTimeout(function () {
        (v = r.v("__dld_fi")) ? v(u): console.error("frontInit is still undefined.")
    }, 100));
}).call(this);