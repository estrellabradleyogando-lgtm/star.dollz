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
    loop: true,
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

  // cuando cargan todas las fotos la pagina es mas alta, asi que AOS recalcula
  $(window).on('load', function () {
    AOS.refresh();
  });

  // SLIDER WORN BY YOUR FAVOURITES (igual que trending)
  const sliderLooks = new Swiper('.slider-looks', {
    loop: true,
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

  // ACORDEON PREGUNTAS FRECUENTES
  // 1. SELECCIONAR
  const preguntas = $('.faq-pregunta');

  // 2. ESCUCHAR
  preguntas.on('click', function () {
    // 3. CAMBIAR
    $(this).next('.faq-respuesta').slideToggle();
    $(this).find('.faq-mas').toggleClass('hidden');
    $(this).find('.faq-menos').toggleClass('hidden');

    const abierta = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', abierta ? 'false' : 'true');
  });

  // MINI SLIDERS SHOP THE LOOK
  $('.slider-look').each(function () {
    const caja = $(this).parent();

    new Swiper(this, {
      slidesPerView: 1,
      rewind: true, // con solo 2 prendas vuelve al principio
      nested: true,
      navigation: {
        nextEl: caja.find('.look-siguiente')[0],
        prevEl: caja.find('.look-anterior')[0]
      }
    });
  });

});
