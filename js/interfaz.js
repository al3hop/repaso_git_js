/* =========================================================
   interfaz.js · PERSONA A (rama menu-y-tema)
   JavaScript nativo: menú móvil y modo claro/oscuro
   =========================================================

   Recuerda los 3 pasos de cualquier interacción:
     1. SELECCIONAR el elemento    -> document.querySelector('#id')
     2. ESCUCHAR un evento         -> elemento.addEventListener('click', ...)
     3. CAMBIAR algo               -> elemento.classList.toggle('clase')


   TAREA 1 · Menú móvil
   - Al pulsar #boton-menu, poner y quitar la clase "hidden" a #menu.
   - Actualizar aria-expanded del botón (true / false).
   - Cambiar el texto del botón: "Menú" / "Cerrar".
   - Extra: cerrar el menú al pulsar cualquiera de sus enlaces.


   TAREA 2 · Modo claro / oscuro
   - Al pulsar #boton-tema, poner y quitar la clase "dark" en <html>
     (document.documentElement). Los colores oscuros ya están en css/styles.css.
   - Cambiar el texto del botón: "Modo oscuro" / "Modo claro".
   - Actualizar aria-pressed del botón.
   - Guardar la elección en localStorage para que se recuerde al recargar.

*/

// Escribe aquí tu código

/* ---------- TAREA 1 · Menú móvil ---------- */

// 1. SELECCIONAR
const botonMenu = document.querySelector('#boton-menu');
const menu = document.querySelector('#menu');
const enlacesMenu = document.querySelectorAll('#menu a');

// Función que abre o cierra el menú
function alternarMenu() {
    // 3. CAMBIAR: quita "hidden" si está, la pone si no está
    menu.classList.toggle('hidden');

    // ¿Está abierto ahora? (abierto = NOoooo tiene la clase hidden)
    const abierto = !menu.classList.contains('hidden');

    botonMenu.setAttribute('aria-expanded', abierto);      // true / false
    botonMenu.textContent = abierto ? 'Cerrar' : 'Menú';   // cambia el texto
}

// 2. ESCUCHAR el clic del botón
botonMenu.addEventListener('click', alternarMenu);

// EXTRA: cerrar el menú al pulsar cualquier enlace
enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        menu.classList.add('hidden');
        botonMenu.setAttribute('aria-expanded', 'false');
        botonMenu.textContent = 'Menú';
    });
});

