// assets/js/main.js - simple interactivity for mobile menu and active link
document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('mobileToggle');
    var mobileMenu = document.getElementById('mobileMenu');
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', function() { mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block'; });
    }
    // mark active link based on body data-page attribute
    var page = document.body.getAttribute('data-page');
    if (page) {
        var el = document.querySelectorAll('.nav a');
        el.forEach(function(a) {
            if (a.dataset.page === page) a.classList.add('active');
        });
    }
});