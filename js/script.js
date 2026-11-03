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

  // MODO OSCURO
  // 1. SELECCIONAR
  const raiz = $('html');
  const botonTema = $('#boton-tema');

  // al cargar: ¿eligió oscuro la última vez?
  if (localStorage.getItem('tema') === 'oscuro') {
    raiz.addClass('dark');
  }

  // 2. ESCUCHAR
  botonTema.on('click', function () {
    // 3. CAMBIAR
    raiz.toggleClass('dark');
    const oscuro = raiz.hasClass('dark');
    localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
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

  // ANIMACIONES AL HACER SCROLL (AOS)
  AOS.init({
    duration: 800,
    once: true
  });

  // SLIDER WORN BY YOUR FAVOURITES (igual que trending)
  const sliderLooks = new Swiper('.slider-looks', {
    slidesPerView: 1.15,
    spaceBetween: 16,
    navigation: {
      nextEl: '.looks-siguiente',
      prevEl: '.looks-anterior'
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4, spaceBetween: 40 }
    }
  });

  // MINI SLIDERS SHOP THE LOOK
  $('.slider-look').each(function () {
    const caja = $(this).parent();

    new Swiper(this, {
      slidesPerView: 1,
      loop: true,
      nested: true,
      navigation: {
        nextEl: caja.find('.look-siguiente')[0],
        prevEl: caja.find('.look-anterior')[0]
      }
    });
  });

});
