function detectIE() {
    var e = window.navigator.userAgent,
        t = e.indexOf("MSIE ");
    if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    var n = e.indexOf("Trident/");
    if (n > 0) {
        var o = e.indexOf("rv:");
        return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10)
    }
    var s = e.indexOf("Edge/");
    return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : !1
}
jQuery(function(e) {
    function t() {
        var t = detectIE();
        t === !1 ? e('#starter').click(function(){e('#starter').fadeOut();
        	(SoundDisplay.startAll(e), document.getElementById("wave-canvas").dispatchEvent(Globals.playEvent), $toShuffle = e("#main-menu > li a"), e("#menu-button").click(function() {
            $this = e(this), $this.is(".open") ? ($toShuffle.each(function(t, n) {
                $ele = e(n), $ele.shuffleLetters({
                    out: !0
                })
            }), e("#main-menu").fadeOut(500), e("#pre-menu-text").fadeIn(), $this.removeClass("open is-active")) : (e("#main-menu").show(), $toShuffle.each(function(t, n) {
                $ele = e(n), $ele.shuffleLetters()
            }), e("#pre-menu-text").fadeOut(), $this.addClass("open is-active"))
        }), e("a,.shuffle").each(function(t, n) {
            $ele = e(n), $ele.mouseenter(function(t) {
                t.stopPropagation(), e(this).shuffleLetters({
                    step: e(this).html().length,
                    out: !0
                })
            })
        }), $toShuffle.click(function() {
            e("#menu-button").trigger("click")
        }), n.scroll(function() {
            scrollTop = n.scrollTop(), pr = .4 * -scrollTop, e(".prlx").css({
                transform: "translateY(" + pr + "px)"
            })
        }), e("#volume-off").click(function() {
            ("" == Globals.isPlaying || Globals.isPlaying[0].paused) && (document.getElementById("wave-canvas").dispatchEvent(Globals.stopEvent), e("#volume-off").hide(), e("#volume-on").show(), Globals.stoppedByUser = !0)
        }), e("#volume-on").click(function() {
            ("" == Globals.isPlaying || Globals.isPlaying[0].paused) && (document.getElementById("wave-canvas").dispatchEvent(Globals.playEvent), e("#volume-on").hide(), e("#volume-off").show(), Globals.stoppedByUser = !1)
        }))}) : e("#info-ie").show()
    }
    var n = e(window);
    e("body").html();
    t()
});
var convert = function(e) {
    return $("<span />", {
        html: e
    }).text()
};