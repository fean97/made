$(document).ready(function () {
    $(document).on('scroll', function () {
        if ($(document).scrollTop() > 120) {
            $('.menu').addClass('scroll');
            $('.menu .nav-link').addClass('scroll');
            $('.navbar-toggler i').addClass('scroll').removeClass('text-white');
        } else {
            $('.menu').removeClass('scroll');
            $('.menu .nav-link').removeClass('scroll');
            $('.navbar-toggler i').removeClass('scroll').addClass('text-white');
        }
    });
    $('.owl-one').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        navText: ["<i class='fa fa-chevron-left text-black'></i>", "<i class='fa fa-chevron-right text-black'></i>"],
        dots: false,
    });
    $('.owl-two').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayTimeout: 5000,
        navText: ["<i class='fa fa-chevron-left text-black'></i>", "<i class='fa fa-chevron-right text-black'></i>"],
        dots: false,
    })

    $('.sort-work').on('click', 'button', function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
            filter: filterValue
        })
    });
    var $grid = $('.keke').isotope({
        itemSelector: '.item-work',
        percentPosition: true,
        masonry: {
            columnWidth: '.item-work'
        }
    });

    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        infobar: false,
        buttons: [
            'close'
        ],
        slideShow: {
            autoStart: true,
            speed: 4000
        }
    })
});
