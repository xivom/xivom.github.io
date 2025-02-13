/*
  File: scripts.js
  Description: JavaScript for interactivity in the True Love for Cheese website.
  Author: Your Name or Company
*/

/**
 * Example JavaScript: Smooth scrolling to anchor links.
 */
document.addEventListener('DOMContentLoaded', function () {
  // Select all links with hashes in the navigation
  const links = document.querySelectorAll('.site-nav a');

  // Add click event listener to each link
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // If section exists, scroll smoothly to it.
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust offset if header is fixed
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handling example (using AJAX simulation)
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // For a real-world scenario, you would add your AJAX request here.
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
});