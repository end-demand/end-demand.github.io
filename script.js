document.addEventListener('DOMContentLoaded', function() {

    // Simple Hero Image Slider
    const slides = document.querySelectorAll('.hero-slider .slide');
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

    // Change slide every 5 seconds
    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 5000);
    }

});

// --- NOTES ON FORM HANDLING ---
// The HTML forms for Contact, Report Download, and Manifesto Endorsement
// need a BACKEND to process the data. You cannot do this with just HTML/JS.

// Your form HTML would look something like this:
/*
<form action="[YOUR_BACKEND_ENDPOINT]" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    
    <!-- For reCAPTCHA, you would add a div here and load Google's script -->
    <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>

    <button type="submit">Send</button>
</form>
*/

// To make this work, you have three main options:
// 1. **Easiest:** Use a third-party service like Formspree or Netlify Forms. You just point the form's `action` to their URL, and they handle the rest.
// 2. **CMS Plugin:** If you use WordPress, plugins like "Contact Form 7" or "WPForms" handle all of this for you with a simple drag-and-drop interface.
// 3. **Custom Backend:** Write server-side code (e.g., in PHP, Node.js, Python) that receives the form data, validates it, sends an email, and saves it to a database. This is the most complex option.