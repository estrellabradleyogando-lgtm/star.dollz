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

});