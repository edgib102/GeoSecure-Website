document.addEventListener('DOMContentLoaded', () => {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel-wrapper');
    
    carousels.forEach(carousel => {
      let currentIndex = 0;
      const slides = carousel.querySelectorAll('.slide');
      const dots = carousel.querySelectorAll('.dot');
      const leftArrow = carousel.querySelector('.nav-arrow.left');
      const rightArrow = carousel.querySelector('.nav-arrow.right');
      
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.remove('active', 'exit-left', 'enter-right');
          if (i === index) {

              slide.classList.add('active');
              // slide.classList.add('active');
            
          }
        });
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
      }

      function prevSlide() {
        slides[currentIndex].classList.add('exit-left');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        setTimeout(() => showSlide(currentIndex), 500);
      }

      function nextSlide() {
        slides[currentIndex].classList.add('exit-left');
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        setTimeout(() => showSlide(currentIndex), 500);
      }

      // Event listeners for arrow clicks
      leftArrow.addEventListener('click', prevSlide);
      rightArrow.addEventListener('click', nextSlide);

      // Dots navigation
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          slides[currentIndex].classList.add('exit-left');
          currentIndex = i;
          setTimeout(() => showSlide(currentIndex), 500);
        });
      });

      // Initialize the first slide of the carousel
      showSlide(0);
    });
  });