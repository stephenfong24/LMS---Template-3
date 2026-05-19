/**
 * Global Interactions & Premium Polish
 */

$(function() {
    // Smooth Scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = this.hash;
        const $target = $(target);
        
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - 100
            }, 800);
        }
    });

    // Form interaction polish
    $('.form-control').on('focus', function() {
        $(this).parent().find('.form-label').addClass('text-primary-color');
    }).on('blur', function() {
        $(this).parent().find('.form-label').removeClass('text-primary-color');
    });

    // Tooltip initialization (standard Bootstrap)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Popover initialization
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    console.log('Elevate Academy Interaction Engine Ready');

    // Highlight active link in mobile nav
    const currentPath = window.location.pathname;
    $('.mobile-nav-link').each(function() {
        if ($(this).attr('href') === currentPath) {
            $(this).addClass('active');
        } else if (currentPath === '/' && $(this).attr('href') === '/index.html') {
            $(this).addClass('active');
        }
    });

    // Mobile Navigation Toggle
    const $mobileNav = $('#mobileNav');
    const $navOverlay = $('#navOverlay');

    $('#mobileNavToggle').on('click', function() {
        $mobileNav.addClass('active');
        $navOverlay.addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('#mobileNavClose, #navOverlay').on('click', function() {
        $mobileNav.removeClass('active');
        $navOverlay.removeClass('active');
        $('body').css('overflow', '');
    });

    // Swiper Initializations
    if ($('.coursesSwiper').length) {
        new Swiper(".coursesSwiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }

    if ($('.testimonialsSwiper').length) {
        new Swiper(".testimonialsSwiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // Hero Carousel Custom logic
    const $heroCarousel = $('#heroCarousel');
    if ($heroCarousel.length) {
        const carousel = new bootstrap.Carousel($heroCarousel[0], {
            interval: 5000,
            touch: true,
            pause: 'hover'
        });

        // Optional: Add parallax or extra effects on slide
        $heroCarousel.on('slide.bs.carousel', function (e) {
            const $nextSlide = $(e.relatedTarget);
            $nextSlide.find('.hero-img').css('transform', 'scale(0.9) translateX(20px)');
        });

        $heroCarousel.on('slid.bs.carousel', function (e) {
            const $activeSlide = $(e.relatedTarget);
            $activeSlide.find('.hero-img').css('transform', '');
        });
    }
});
