/**
 * Reusable Components Loader
 * Handles dynamic insertion of navbar, footer, sidebar etc.
 */

$(function() {
    // Load Navbar
    if ($('#navbar-placeholder').length) {
        $('#navbar-placeholder').load('/components/navbar.html', function() {
            initNavbarLogic();
        });
    }

    // Load Footer
    if ($('#footer-placeholder').length) {
        $('#footer-placeholder').load('/components/footer.html');
    }

    // Load Sidebar
    if ($('#sidebar-placeholder').length) {
        $('#sidebar-placeholder').load('/components/sidebar.html');
    }

    function initNavbarLogic() {
        const $mobileNav = $('#mobileNav');
        const $navOverlay = $('#navOverlay');

        $('#mobileNavToggle').on('click', function() {
            $mobileNav.addClass('active');
            $navOverlay.fadeIn(300);
            $('body').css('overflow', 'hidden');
        });

        $('#mobileNavClose, #navOverlay').on('click', function() {
            $mobileNav.removeClass('active');
            $navOverlay.fadeOut(300);
            $('body').css('overflow', 'auto');
        });

        // Set active nav link based on current path
        const currentPath = window.location.pathname;
        
        // Helper to normalize paths for comparison
        const normalizePath = (p) => {
            if (!p) return '';
            let normalized = p.replace(/\/$/, ''); // remove trailing slash
            if (normalized === '') normalized = '/index.html'; // root is index
            return normalized;
        };

        const normalizedCurrent = normalizePath(currentPath);

        $('.navbar-nav .nav-link, .mobile-nav-link').each(function() {
            const href = $(this).attr('href');
            if (normalizePath(href) === normalizedCurrent) {
                $(this).addClass('active');
            }
        });
    }

    // Reveal animations on scroll
    $(window).on('scroll', function() {
        $('.reveal').each(function() {
            const windowHeight = $(window).height();
            const revealTop = $(this).get(0).getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                $(this).addClass('active');
            }
        });
    });

    // Run once on load
    $(window).trigger('scroll');
});
