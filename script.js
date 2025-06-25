document.addEventListener('DOMContentLoaded', function() {

    // --- Homepage Hero Image Slider ---
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        showSlide(currentSlide); // Show first slide immediately
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // --- Cookie Consent Banner ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // For a real site, you'd check a cookie here.
    // if (!localStorage.getItem('cookiesAccepted')) {
    //     cookieBanner.style.display = 'flex';
    // }
    
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function() {
            if (cookieBanner) {
                cookieBanner.style.display = 'none';
                // To remember the choice, you would set a cookie or use localStorage
                // localStorage.setItem('cookiesAccepted', 'true');
            }
        });
    }
});