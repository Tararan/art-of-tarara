export default function scrollingFunction() {
    const navigation = $('.navigation');
    const sticky = 'navigation--is-sticky';
    const about = $('.about');
    const smooth = 'about--is-smooth';

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1080) {
            navigation.addClass(sticky);
            about.addClass(smooth);

        } else {
            navigation.removeClass(sticky);
            about.removeClass(smooth);
        }
    });
};
