// Añadir clase al fondo del body y mostrar contenido cuando se haga scroll
window.addEventListener('scroll', function () {
  var navbar = document.getElementById("nav");
  var contentSections = document.querySelectorAll('.content-section');
  var scrollTopBtn = document.getElementById('scroll-top-btn');
  //var xboxIcon = document.getElementById('xbox-icon');
  var footer = document.querySelector('footer');

  if (window.scrollY > 100) { // Cambia 100 por el número de píxeles donde quieras cambiar el color del fondo
    document.body.classList.add("bg-change");
    navbar.classList.add("fade");
  } else {
    document.body.classList.remove("bg-change");
    navbar.classList.remove("fade");
  }

  // Mostrar secciones de contenido al hacer scroll
  contentSections.forEach(function(section) {
    if (window.scrollY + window.innerHeight > section.offsetTop + section.offsetHeight / 2) {
      section.classList.add('visible');
    }
  });

  // Mostrar el botón de scroll-to-top cuando se vea el footer
  if (window.scrollY + window.innerHeight >= footer.offsetTop) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }

  // // Animar el icono de Xbox
  // if (window.scrollY > 0) {
  //   xboxIcon.style.bottom = (20 + window.scrollY / 10) + 'px'; // Ajusta la velocidad del movimiento del icono
  // } else {
  //   xboxIcon.style.bottom = '20px';
  // }
});

// Carrusel manual
var currentSlide = 0;
var slides = document.getElementsByClassName("carousel-item");
var indicators = document.getElementsByClassName("carousel-indicators")[0].children;

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    indicators[i].classList.remove("active");
  }
  slides[index].classList.add("active");
  indicators[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

// Expandir texto
document.getElementById('expand-btn').addEventListener('click', function() {
  var expandedText = document.getElementById('expanded-text');
  if (expandedText.style.display === 'none' || expandedText.style.display === '') {
    expandedText.style.display = 'block';
    this.textContent = 'Ver menos';
  } else {
    expandedText.style.display = 'none';
    this.textContent = 'Ver más';
  }
});

// Scroll hacia abajo al hacer clic en el ícono
document.querySelector('.scroll-icon').addEventListener('click', function() {
  document.getElementById('scroll-content-1').scrollIntoView({ behavior: 'smooth' });
});

// Scroll hacia arriba al hacer clic en el botón
document.getElementById('scroll-top-btn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

