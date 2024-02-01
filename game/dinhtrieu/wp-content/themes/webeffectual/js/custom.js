jQuery(document).ready(function($) {

setInterval(function(){
     jQuery('.page .big-logo').addClass('delay');
   }, 2500);
   setInterval(function(){
     jQuery('.page section').addClass('loaded');
   }, 2300);
      setInterval(function(){
     jQuery('.page-template-contact-template #main').addClass('loaded');
   }, 1600);
      setInterval(function(){
     jQuery('.page-id-116 .project.echo360').addClass('slide');
   }, 1500);
   setInterval(function(){
     jQuery('.page-id-116 .project.bulldog').addClass('slide');
   }, 1800);
   setInterval(function(){
        jQuery('#loading').addClass('hide');
   }, 1600);
   
   
   jQuery('.mobile-menu-button').click(function() {
    jQuery('.mobile-button a').toggleClass('active');
    jQuery('#primary-menu').toggleClass('open');
    jQuery('body').toggleClass('menu-open');
	});
	
	jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 10) {
        jQuery(".site-header").addClass("scrolled");
    } else {
     jQuery(".site-header").removeClass("scrolled");

    }
}); 
	
	(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = jQuery(this),
          $w            = jQuery(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

jQuery(window).scroll(function(event) {
  
  jQuery(".home .project").each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("slide"); 
    } 
  });
    jQuery(".page-id-116 .project.go").each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("slide"); 
    } 
  });
  
    jQuery(".line").each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("faded"); 
    } 
  });
  
      jQuery(".kindafaded").each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("fade-in"); 
    } 
  });
    jQuery(".footer-wrapper").each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("loaded"); 
    } 
  });
      jQuery(".about-page .alt-width").each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("go"); 
    } 
  });
        jQuery("#services .service").each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("go"); 
    } 
  });
  
});

if (navigator.userAgent.match('MSIE 10.0;')) {
  jQuery('html').addClass('ie10');
}


// Select all links with hashes
jQuery('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});