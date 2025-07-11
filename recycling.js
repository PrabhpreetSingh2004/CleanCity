document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("joinModal");
    const openBtn = document.getElementById("joinBtn");
    const closeBtn = document.querySelector(".modal .close");

    // Join Us modal open
    openBtn?.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // Close modal
    closeBtn?.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Close when clicked outside content
    modal?.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
        // Image slider logic (inside DOMContentLoaded)
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider .slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000);

    // Testimonials
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.remove('active');
            if (i === index) t.classList.add('active');
        });
    }

    showTestimonial(currentTestimonial);
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 4000);
});
});