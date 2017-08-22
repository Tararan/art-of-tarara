$(document).ready(function() {
//SLIDER SPEED
    $('.carousel').carousel({
      interval: 1000 * 2
    });
//ANIMATING THE HAMBURGER    
    const open = 'navigation__hamburger--is-open';
    const hamburger = $('.navigation__hamburger');

    hamburger.click(function () {
        $(this).toggleClass(open);
    });
//      FIXING NAVIGATION TO THE TOP    
    const navigation = $('.navigation__main');
    const sticky = 'navigation--is-sticky';
    const mql = window.matchMedia("(min-width: 768px)");

    if(mql.matches) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1000) {
                navigation.addClass(sticky);
            } 
            else {
                navigation.removeClass(sticky);
            }
        });
    }
    else{
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                navigation.addClass(sticky);
            } 
            else {
                navigation.removeClass(sticky);
            }
    });
    }
//    FIXING SOCIAL LINKS TO THE NAVIGATION
    const social = $('.social');
    const stickySocial = 'social--is-sticky';
    const mqlSocial = window.matchMedia("(max-width: 768px)");

    if(mqlSocial.matches) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                social.addClass(stickySocial);
            } 
            else {
                social.removeClass(stickySocial);
            }
        });
    } else {};
    
//    FIXING BUTTON TO THE NAVIGATION
    const btn = $('.btn--in-nav');
    const stickyBtn = 'btn--is-sticky';
    const mqlBtn = window.matchMedia("(max-width: 768px)");

    if(mqlBtn.matches) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                btn.addClass(stickyBtn);
            } 
            else {
                btn.removeClass(stickyBtn);
            }
        });
    } else {};
    
//SMOOTH SCROLLING FROM HEADER LNKS TO NAVIGATION
    $(".smooth").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // animate
        $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 400, function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = this.hash;
         });
     });
//INITILIAZING MASONRY
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 10,
        gutter: 10,
        isFitWidth: true    
    });
});

//require('import-export');
//import hamburgerFunction from 'hamburgerAnimation.js';
//import scrollingFunction from 'scrolling.js';
//
//    $(function() {
//        hamburgerFunction();
//        scrollingFunction();
//    });