export default function hamburgerFunction() {
    const open = 'navigation__hamburger--is-open';
    const hamburger = $('.navigation__hamburger');

    hamburger.click(function () {
        $(this).toggleClass(open);
    });
};

//$(document).ready(function() {
//const open = 'navigation__hamburger--is-open';
//    const hamburger = $('.navigation__hamburger');
//
//    hamburger.click(function () {
//        $(this).toggleClass(open);
//    });
//});