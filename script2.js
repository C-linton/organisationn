document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll Effect for Navigation Links
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Button Action for Hero Section
    const exploreBtn = document.getElementById('exploreBtn');
    exploreBtn.addEventListener('click', function() {
        window.scrollTo({
            top: document.getElementById('about').offsetTop - 50,
            behavior: 'smooth'
        });
    });

    // Form Submission (Fake for demonstration purposes)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simulate form submission response
        const formResponse = document.getElementById('formResponse');
        formResponse.classList.remove('hidden');
        contactForm.reset();
        
        // Hide response after 3 seconds
        setTimeout(() => {
            formResponse.classList.add('hidden');
        }, 3000);
    });
});
