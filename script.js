document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Hamburger Menu ---
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
    }


    // Function to run analytics script
    const runAnalytics = () => {
        // --- Counter.dev Analytics Script ---
        // This will only run if the user clicks "Accept"
        const analyticsScript = document.createElement('script');
        analyticsScript.async = true;
        analyticsScript.src = 'https://cdn.counter.dev/script.js';
        analyticsScript.setAttribute('data-id', 'YOUR_COUNTER_DEV_ID'); // <-- IMPORTANT: Replace with your actual ID
        analyticsScript.setAttribute('data-utcoffset', '1'); // Optional: Adjust for your timezone
        document.head.appendChild(analyticsScript);
        console.log("Analytics script loaded.");
    };

});
