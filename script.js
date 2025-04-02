const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove('active');
      if (idx === i) slide.classList.add('active');
    });
  
    // Hide or show arrows based on position
    prev.style.display = i === 0 ? 'none' : 'block';
    next.style.display = i === slides.length - 1 ? 'none' : 'block';
  }
  

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Initial display
showSlide(index);
