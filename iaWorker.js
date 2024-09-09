(function () {
    function b(a, d, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (d instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    var f = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, d, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[d] = c.value;
        return a
    };

    function h(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var d = 0; d < a.length; ++d) {
            var c = a[d];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var l = h(this);

    function n(a, d) {
        if (d) a: {
            var c = l;a = a.split(".");
            for (var e = 0; e < a.length - 1; e++) {
                var g = a[e];
                if (!(g in c)) break a;
                c = c[g]
            }
            a = a[a.length - 1];e = c[a];d = d(e);d != e && null != d && f(c, a, {
                configurable: !0,
                writable: !0,
                value: d
            })
        }
    }
    n("String.prototype.startsWith", function (a) {
        return a ? a : function (d, c) {
            var e = b(this, d, "startsWith"),
                g = e.length,
                k = d.length;
            c = Math.max(0, Math.min(c | 0, e.length));
            for (var m = 0; m < k && c < g;)
                if (e[c++] != d[m++]) return !1;
            return m >= k
        }
    });
    n("Object.is", function (a) {
        return a ? a : function (d, c) {
            return d === c ? 0 !== d || 1 / d === 1 / c : d !== d && c !== c
        }
    });
    n("Array.prototype.includes", function (a) {
        return a ? a : function (d, c) {
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
    n("String.prototype.includes", function (a) {
        return a ? a : function (d, c) {
            return -1 !== b(this, d, "includes").indexOf(d, c || 0)
        }
    });
    var p = "function" == typeof Object.assign ? Object.assign : function (a, d) {
        for (var c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e)
                for (var g in e) Object.prototype.hasOwnProperty.call(e, g) && (a[g] = e[g])
        }
        return a
    };
    n("Object.assign", function (a) {
        return a || p
    });
    n("String.prototype.endsWith", function (a) {
        return a ? a : function (d, c) {
            var e = b(this, d, "endsWith");
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
    } catch (a) {}
    var r = {
        B: "2019.3.1.1",
        j: 12,
        i: "/default",
        Eb: "",
        A: "",
        platform: 12,
        os: "",
        I: !1,
        m: !1,
        L: !1,
        J: !0,
        D: q,
        v: !1,
        M: !1,
        features: {},
        jb: function (a) {
            var d = !a;
            r.M && (a = {
                a: 33,
                f: "2023.1.14.1",
                d: 12,
                g: 12,
                k: ""
            });
            if (a) {
                r.B = a.f;
                "" !== a.k && (r.i = "/" + a.k);
                12 == a.a ? q.startsWith("dev.") || (q = "dev." + q) : r.v = !0;
                [12, 99].includes(a.d) && (r.j = a.d);
                a.g && (r.platform = a.g);
                77 == r.platform && (r.platform = 99, r.os = "android");
                switch (r.platform) {
                    case 33:
                        r.m = !0;
                        break;
                    case 99:
                    case 88:
                        r.m = !0, r.L = !0, r.J = !1
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
        cb: "/homeblock.html",
        Ea: "/downtime.html",
        Jb: "/teacher/#/student-signin",
        Fb: "/#/register",
        ua: "/GetCategory",
        va: "/GetCategoryNames",
        Sa: "/GetQuickStartList",
        Db: "/SendViolationLogs",
        Kb: "/UploadData",
        mb: "/IsImageSafe",
        Qa: "/GetImageContent",
        ob: "/GetTextCategory",
        Ma: "/GetAuthToken",
        Na: "/GetAuthTokenHome",
        La: "/GetAnonymousToken",
        ia: "/IsTextCyberBully",
        Oa: "/Config/GetConfig",
        Pa: "/Config/GetHomeConfig",
        Ra: "/IsOffCampus",
        Ta: "/AnalyzeVideo",
        $a: "/HomeUnblockRequest",
        ta: "/BonusFunTimeRequest",
        Hb: "/SubmitAppleReceipt",
        O: 90,
        ya: 0,
        qa: 2,
        Ka: 118,
        Fa: 121,
        eb: 5E3,
        Aa: 60,
        za: 86400,
        S: "1",
        R: "2",
        T: "3",
        fb: "http://",
        gb: "https://",
        Nb: "violation_logs",
        Ia: "flagged_events",
        Ab: "debug_logs",
        pa: "blackList",
        Pb: "whiteList",
        U: "BlockAds",
        aa: "BlockTracking",
        ka: "YoutubeFiltering",
        da: "ClickToZoom",
        ga: "GoogleSafeSearch",
        X: "BlockGGTracking",
        Z: "BlockLocalStorage",
        ba: "blockingPage",
        fa: "gsuitegroup",
        ja: "auth.oumap",
        o: "/default",
        Y: !1,
        ea: !1,
        ha: !1,
        V: !1,
        W: !1,
        la: !1,
        $: !1,
        P: "Anonymous",
        ma: "anonymous",
        Ha: "facebook.com",
        H: function () {
            Object.assign(r, {
                u: "deledao",
                yb: "com.deledao",
                Gb: "https://static." + q,
                h: "https://static." + q + r.i,
                C: "https://static." + q + r.o,
                s: "https://cc." + q,
                l: "https://auth." + q,
                sb: "https://up." + q,
                N: "https://portals." + q + r.A,
                sa: "/blockCom.html",
                ra: "/blockClass.html",
                ib: "https://im." + q,
                Ib: "https://tx." + q,
                tb: "https://tx." + q,
                vb: "https://static." + q + "/mobile",
                wb: "https://static." + r.D + "/mobile",
                Va: "https://static." + q + r.i + "/homeagent.html",
                bb: "https://static." + q + r.i + "/homewelcome.html",
                Ob: "https://static." + q + r.i + "/waitForSignIn2.html",
                hb: "https://static." + q + r.i + "/iap.html",
                rb: "/lockdown.html"
            });
            88 == r.platform && (r.v ? (r.l = "http://auth.in.deledao.com", r.s = "http://cc.in.deledao.com") : (r.l = "http://auth.dev-in.deledao.com", r.s = "http://cc.dev-in.deledao.com"))
        },
        G: function () {
            r.features.xa = {
                enabled: 12 == r.j && (12 == r.platform || 99 == r.platform && "android" != r.os)
            };
            r.features.proxy = {
                oa: 99 == r.platform,
                qb: 99 == r.j && 99 == r.platform && "android" != r.os
            };
            r.features.Da = {
                Cb: 88 == r.platform || 99 == r.platform &&
                    "android" == r.os
            };
            r.features.Ca = {
                enabled: 99 != r.platform || "android" != r.os
            }
        },
        lb: function () {
            return 99 === r.j
        },
        kb: function () {
            return 99 === r.j ? !0 : !1
        },
        nb: function () {
            return 12 === r.j ? !0 : !1
        },
        K: function () {
            return !{
                Ja: 1
            }.hasOwnProperty("foobar")
        },
        pb: function (a) {
            return a.endsWith(q) || "localhost" === a ? !0 : !1
        },
        Ga: function (a, d) {
            "function" == typeof importScripts ? WorkerGlobalScope[a] = d : "undefined" != typeof module && module.exports ? global[a] = d : window[a] = d
        },
        F: function (a) {
            if ("function" == typeof importScripts) {
                var d = WorkerGlobalScope[a];
                WorkerGlobalScope[a] = void 0
            } else "undefined" != typeof module && module.exports ? (d = global[a], global[a] = void 0) : (d = window[a], window[a] = void 0);
            return d
        },
        Xa: function () {
            return r.h + "/homesetup.html"
        },
        Za: function () {
            return r.h + "/homeCustSignIn.html"
        },
        Ya: function () {
            return r.h + "/signup.html"
        },
        na: function () {
            return r.l + "/GetAuthWhiteList"
        },
        Wa: function () {
            return r.h + "/homeCustSignIn.html"
        },
        ab: function () {
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
        Ba: function () {
            return r.C + "/qr.html"
        },
        wa: function () {
            return r.h + "/chat.html"
        },
        Ua: function (a) {
            return a !== r.o ? "https://" + r.i + "." + q + r.A : r.N
        }
    };
    var t = {
        a: 33,
        f: "rel_2024.7.17.1",
        d: 12,
        g: 12,
        k: ""
    };
    try {
        importScripts("/util/constants.js")
    } catch (a) {}
    try {
        r.K() ? importScripts("/core.min.js") : importScripts("/workers/dynIAWorker/dynIAWorker.js")
    } catch (a) {
        throw console.error("Cannot load IA worker libraries. Abort!"), a;
    }
    var u = "object" == typeof t ? t : void 0;
    r.F("__dld_iaw")(u);
}).call(this);