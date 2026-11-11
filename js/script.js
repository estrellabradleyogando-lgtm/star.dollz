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
    mousewheel: { forceToAxis: true, thresholdDelta: 30, releaseOnEdges: true },
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
  const menosMovimientoAOS = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  AOS.init({
    duration: 800,
    once: true,
    offset: 80,
    disable: menosMovimientoAOS
  });

  function revelarAOSEnVista() {
    if (!window.AOS || menosMovimientoAOS) return;
    document.querySelectorAll('[data-aos].aos-init:not(.aos-animate)').forEach(function (el) {
      const caja = el.getBoundingClientRect();
      const margen = 80;
      if (caja.top < window.innerHeight - margen && caja.bottom > margen) {
        el.classList.add('aos-animate');
      }
    });
  }

  function refrescarAOS() {
    if (!window.AOS || menosMovimientoAOS) return;
    AOS.refresh();
    revelarAOSEnVista();
  }

  $(window).on('load', function () {
    refrescarAOS();
    setTimeout(refrescarAOS, 100);
    setTimeout(refrescarAOS, 400);
  });

  $('.bloque-gif img').on('load', refrescarAOS);

  let aosScrollTick = false;
  function enScrollOResizeAOS() {
    if (aosScrollTick || menosMovimientoAOS) return;
    aosScrollTick = true;
    window.requestAnimationFrame(function () {
      aosScrollTick = false;
      revelarAOSEnVista();
    });
  }
  document.addEventListener('scroll', enScrollOResizeAOS, true);
  $(window).on('resize', enScrollOResizeAOS);

  $(window).on('hashchange', function () {
    setTimeout(refrescarAOS, 50);
  });
  if (window.location.hash) {
    setTimeout(refrescarAOS, 100);
  }

  // SLIDER WORN BY YOUR FAVOURITES
  const sliderLooks = new Swiper('.slider-looks', {
    loop: true,
    slidesPerView: 1.15,
    spaceBetween: 16,
    mousewheel: { forceToAxis: true, thresholdDelta: 30, releaseOnEdges: true },
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
      rewind: true,
      nested: true,
      navigation: {
        nextEl: caja.find('.look-siguiente')[0],
        prevEl: caja.find('.look-anterior')[0]
      }
    });
  });

  // FIGURA QUE SIGUE AL RATON
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

      if (menosMovimiento) {
        figura.css('transform', 'translate(' + (ratonX + 12) + 'px, ' + (ratonY + 12) + 'px)');
      }
    });

    $(document).on('mouseleave', function () {
      figura.css('display', 'none');
      visible = false;
    });

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
