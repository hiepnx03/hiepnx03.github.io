!function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) n.d(o, a, function (t) {
            return e[t]
        }.bind(null, a));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 21)
}({
    21: function (e, t) {
        !function (e) {
            "use strict";
            var t = function (e, t) {
                var n = e.find(".eael-one-page-nav").eq(0), o = "#" + n.data("section-id"), a = n.data("top-offset"),
                    r = n.data("scroll-speed"), i = n.data("scroll-wheel"), l = n.data("scroll-touch"),
                    c = n.data("scroll-keys"), d = o + " .eael-one-page-nav-item.active";

                function u() {
                    t(".elementor-section").each((function () {
                        var e = t(this);
                        e.offset().top - t(window).height() / 2 < t(window).scrollTop() && (e.offset().top >= t(window).scrollTop() || e.offset().top + e.height() - t(window).height() / 2 > t(window).scrollTop()) ? t(o + ' .eael-one-page-nav-item a[data-row-id="' + e.attr("id") + '"]').parent().addClass("active") : t(o + ' .eael-one-page-nav-item a[data-row-id="' + e.attr("id") + '"]').parent().removeClass("active")
                    }))
                }

                if (t(o + " .eael-one-page-nav-item a").on("click", (function (e) {
                    if (e.preventDefault(), e.stopPropagation(), 0 !== t("#" + t(this).data("row-id")).length && !t("html, body").is(":animated")) return t("html, body").animate({scrollTop: t("#" + t(this).data("row-id")).offset().top - a}, r), t(o + " .eael-one-page-nav-item").removeClass("active"), t(this).parent().addClass("active"), !1
                })), u(), t(window).on("scroll", (function () {
                    u()
                })), "on" == i) {
                    var f, s = 0;
                    t(document).on("mousewheel DOMMouseScroll", (function (e) {
                        var n = (new Date).getTime();
                        if (n - s < 1300) e.preventDefault(); else {
                            var o = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
                            t("html,body").is(":animated") || (o < 0 ? t(d).next().length > 0 && t(d).next().find("a").trigger("click") : t(d).prev().length > 0 && t(d).prev().find("a").trigger("click")), s = n
                        }
                    })), "on" == l && t(document).on("pointerdown touchstart", (function (e) {
                        var t = e.originalEvent.touches;
                        t && t.length && (f = t[0].screenY, e.originalEvent.timeStamp)
                    })).on("touchmove", (function (e) {
                        t("html,body").is(":animated") && e.preventDefault()
                    })).on("pointerup touchend", (function (e) {
                        var n = e.originalEvent;
                        if ("touch" === n.pointerType || "touchend" === e.type) {
                            var o = n.screenY || n.changedTouches[0].screenY, a = f - o;
                            n.timeStamp;
                            if (a < 0 && t(d).prev().length > 0 && t(d).prev().find("a").trigger("click"), a > 0 && t(d).next().length > 0 && t(d).next().find("a").trigger("click"), Math.abs(a) < 2) return
                        }
                    }))
                }
                "on" == c && t(document).keydown((function (e) {
                    var n = e.target.tagName.toLowerCase();
                    if ("input" !== n || "textarea" !== n) switch (e.which) {
                        case 38:
                            t(d).prev().find("a").trigger("click");
                            break;
                        case 40:
                            t(d).next().find("a").trigger("click");
                            break;
                        case 33:
                            t(d).prev().find("a").trigger("click");
                            break;
                        case 36:
                            t(d).next().find("a").trigger("click");
                            break;
                        default:
                            return
                    }
                }))
            };
            e(window).on("elementor/frontend/init", (function () {
                elementorFrontend.hooks.addAction("frontend/element_ready/eael-one-page-nav.default", t)
            }))
        }(jQuery)
    }
});