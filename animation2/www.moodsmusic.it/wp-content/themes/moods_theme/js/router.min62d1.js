jQuery(function(e){new e.LazyJaxDavis(function(t){var o=e("#website-content"),n=(e("#loader"),e("#website-content"),e("#loading"),e("#loading > div"),0);t.option({minwaittime:1e3,updatetitle:!0,firereadyonstart:!0,ignoregetvals:!1});t.bind("everyfetchstart",function(e){function t(){15>n?setTimeout(function(){o.is(".strazza-out")?o.removeClass("strazza-out"):o.addClass("strazza-out"),n++,window.requestAnimationFrame(t)},20):(o.hide(),setTimeout(function(){o.is(":visible")||o.show()},1e3))}n=0,t()}),t.bind("everyfetchsuccess",function(t){function i(){setTimeout(function(){15>n?i():window.requestAnimationFrame(a)},20)}function a(){30>n?setTimeout(function(){o.is(".strazza-out")?o.removeClass("strazza-out"):o.addClass("strazza-out"),n++,window.requestAnimationFrame(a)},20):(o.removeClass("strazza-out"),r())}function r(){o.show(),e(s[0]).show(),jQuery("#wailing-label").inview({viewFactor:1}),e("#square").inview({viewFactor:1}),e("a,.shuffle").each(function(t,o){$ele=e(o),$ele.mouseenter(function(t){t.stopPropagation(),e(this).shuffleLetters({step:e(this).html().length,out:!0})})});var t=e("#titlegetter").attr("data-title"),n=e("#pre-menu-text");n.html(t.replace(/i/g,"/")),n.is(":visible")||n.fadeIn(),e(".prlx").length>0&&e(window).scroll(function(){scrollTop=e(window).scrollTop(),pr=.4*-scrollTop,e(".prlx").css({transform:"translateY("+pr+"px)"})})}o.show(),Globals.audioPlaying||Globals.stoppedByUser||document.getElementById("wave-canvas").dispatchEvent(Globals.playEvent);var s=e(t.rip("content"));e(s[0]).hide(),o.empty().append(s),i()}),t.bind("everypageready",function(){e("body").niceScroll({zindex:1e3,cursorborder:"none",cursorcolor:"#ffffff",cursorwidth:"2px",cursorborderradius:"0px"})}),t.bind("everyfetchfail",function(){alert("ajax error!")})})});