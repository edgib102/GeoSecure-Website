document.addEventListener('DOMContentLoaded', () => {

  console.log("test")
  var glide = new Glide('#carousel-1', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
  glide.mount()

  var glide = new Glide('#carousel-2', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
  glide.mount()
});



//     // Initialize all carousels
//     const carousels = document.querySelectorAll('.carousel-wrapper');
    
//     carousels.forEach(carousel => {
//       let currentIndex = 0;
//       const slides = carousel.querySelectorAll('.slide');
//       const dots = carousel.querySelectorAll('.dot');
//       const leftArrow = carousel.querySelector('.nav-arrow.left');
//       const rightArrow = carousel.querySelector('.nav-arrow.right');
    

//       function showSlide(index) {
//         slides.forEach((slide, i) => {
//           slide.classList.remove('active', 'exit-left', 'enter-right');
//           if (i === index) {
//               resizeCarousel(carousel, slide)
//               window.onresize = () => {
//                 console.log("ddd")
//                 resizeCarousel(carousel, slide)
//               }
//               slide.classList.add('active');

//               // window.onresize = resizeCarousel(carousel, slide)
//               // window.addEventListener('resize', resizeCarousel(carousel, slide))
//               // slide.classList.add('active');
            
//           }
//         });
//         dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
//       }

//       function prevSlide() {
//         slides[currentIndex].classList.add('exit-left');
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
//         setTimeout(() => showSlide(currentIndex), 500);
//       }

//       function nextSlide() {
//         slides[currentIndex].classList.add('exit-left');
//         currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
//         setTimeout(() => showSlide(currentIndex), 500);
//       }

//       // Event listeners for arrow clicks
//       leftArrow.addEventListener('click', prevSlide);
//       rightArrow.addEventListener('click', nextSlide);

//       // Dots navigation
//       dots.forEach((dot, i) => {
//         dot.addEventListener('click', () => {
//           slides[currentIndex].classList.add('exit-left');
//           currentIndex = i;
//           setTimeout(() => showSlide(currentIndex), 500);
//         });
//       });

//       // Initialize the first slide of the carousel
//       showSlide(0);
//     });

//   });

// function resizeCarousel(carousel, slide){
//   console.log(slide.offsetHeight)
//   current = carousel.offsetHeight
//   current = slide.offsetHeight + current

//   carousel.style.height = slide.offsetHeight + 170 + "px"
//   console.log(carousel.offsetHeight + "current")
//   console.log(slide.offsetHeight + current + "multi")
// }
//   // carousel.querySelector(".slide