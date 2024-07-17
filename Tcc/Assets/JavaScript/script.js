document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-slide img');
    const slideCount = slides.length;
    let index = 0;

    const updateSlidePosition = () => {
        slideContainer.style.transform = `translateX(${-index * 100}%)`;
    };

    nextButton.addEventListener('click', () => {
        index = (index + 1) % slideCount;
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + slideCount) % slideCount;
        updateSlidePosition();
    });

    // Opcional: Adicionar rotação automática
    setInterval(() => {
        nextButton.click();
    }, 3000);  // Trocar imagem a cada 3 segundos
});


document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.animated-section');

  function checkVisibility() {
      var windowHeight = window.innerHeight;
      var windowTopPosition = window.scrollY;
      var windowBottomPosition = windowTopPosition + windowHeight;

      sections.forEach(function (section) {
          var sectionHeight = section.offsetHeight;
          var sectionTopPosition = section.offsetTop;
          var sectionBottomPosition = sectionTopPosition + sectionHeight;

          if (sectionBottomPosition >= windowTopPosition &&
              sectionTopPosition <= windowBottomPosition) {
              section.classList.add('visible');
          } else {
              section.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

  

