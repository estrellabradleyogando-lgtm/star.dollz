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

  // FIGURA CHROME QUE SIGUE AL RATÓN (no en táctil / puntero grueso)
  const esTactil = window.matchMedia('(pointer: coarse)').matches;
  const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!esTactil) {
    const figura = $('<img>', {
      class: 'cursor-dollz',
      src: 'img/cursor-dollz.png',
      alt: '',
      'aria-hidden': 'true'
    });
    $('body').append(figura);

    let ratonX = 0;
    let ratonY = 0;
    let figuraX = 0;
    let figuraY = 0;
    let visible = false;

    $(document).on('mousemove', function (evento) {
      ratonX = evento.clientX;
      ratonY = evento.clientY;

      if (!visible) {
        figura.css('display', 'block');
        figuraX = ratonX;
        figuraY = ratonY;
        visible = true;
      }

      // con menos movimiento: sigue al ratón sin retraso
      if (menosMovimiento) {
        figura.css('transform', 'translate(' + (ratonX + 12) + 'px, ' + (ratonY + 12) + 'px)');
      }
    });

    $(document).on('mouseleave', function () {
      figura.css('display', 'none');
      visible = false;
    });

    // seguimiento suave (como un offset cerca del puntero normal)
    if (!menosMovimiento) {
      function animarFigura() {
        figuraX += (ratonX - figuraX) * 0.2;
        figuraY += (ratonY - figuraY) * 0.2;
        if (visible) {
          figura.css('transform', 'translate(' + (figuraX + 12) + 'px, ' + (figuraY + 12) + 'px)');
        }
        window.requestAnimationFrame(animarFigura);
      }
      animarFigura();
    }
  }

});
