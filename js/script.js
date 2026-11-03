$(function () {

  // MENU MOVIL
  // 1. SELECCIONAR
  const botonMenu = $('#boton-menu');
  const menu = $('#menu');

  // 2. ESCUCHAR
  botonMenu.on('click', function () {
    // 3. CAMBIAR
    menu.toggleClass('hidden');
    menu.toggleClass('flex');
  });

  // SLIDER TRENDING
  const sliderTrending = new Swiper('.slider-trending', {
    slidesPerView: 1.15,
    spaceBetween: 16,
    navigation: {
      nextEl: '.trending-siguiente',
      prevEl: '.trending-anterior'
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4, spaceBetween: 40 }
    }
  });

});