document.addEventListener('DOMContentLoaded', function() {

    // --- Homepage Hero Image Slider code has been removed ---

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
