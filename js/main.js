jQuery(document).ready(function($) {

    'use strict';


    $(".Modern-Slider").slick({
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        fade: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        // fade:true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
    });

    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });


    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })



    $(".box-video").click(function() {
        $('iframe', this)[0].src += "&amp;autoplay=1";
        $(this).addClass('open');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })



    var contentSection = $('.content-section, .main-banner');
    var navigation = $('nav');

    $("a").click(function() {
        $("a.active-section").removeClass("active-section");
        $(this).addClass("active-section");
    });

    $('.button a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 0 }, 500, 'linear');
    });

    function Loop(items, num, max) {
        var comp = items[num];
        console.log(num);
        console.log(comp);
        if (num !== max) {
            setTimeout(function() {
                $('#sub-li').append(comp);
                comp.addClass("shows");
                console.log(comp);
                num++;
                Loop(items, num, max);
            }, 200);
        }
    }

    $(document).on('click', '.card', function(event) {
        var doc = '';
        var img = '';
        var title = '';
        var item_count = 0;
        var arr = [];
        var food_arr = [
            ['vegan', 'Main Meal', 'demo'],
            ['vegan', 'Tapas', 'demo'],
            ['vegan', 'Dessert', 'demo']
        ];
        var drinks_arr = [
            ['vegan', 'Red Wine', 'demo'],
            ['vegan', 'White Wine', 'demo'],
            ['vegan', 'Champagne', 'demo'],
            ['vegan', 'Cocktail', 'demo'],
            ['vegan', 'Mocktail', 'demo']
        ];
        $(".card").each(function() {
            $(this).removeClass("selected-card");
        });
        $(this).addClass("selected-card");
        $('#sub-li').html('');

        if ($(this).hasClass("food")) {
            item_count = food_arr.length;
            arr = food_arr;
        } else if ($(this).hasClass("drinks")) {
            item_count = drinks_arr.length;
            arr = drinks_arr;
        }
        var comps = [];
        for (let index = 0; index < item_count; index++) {
            img = arr[index][0];
            title = arr[index][1];
            doc = arr[index][2];
            var template = `<li><a href="docs/` + doc + `.pdf" target="_blank"><img src="img/` + img + `.png" class="round-img" /><p>` + title + `</p></li>`;
            var comp = $(template).clone();
            comps.push(comp);
        }
        Loop(comps, 0, comps.length);
    });
});