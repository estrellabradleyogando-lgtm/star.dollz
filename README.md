# star.dollz

Web de **Star Dollz**, tienda de moda hecha a mano en Madrid. Práctica de la asignatura *Maquetación web con hojas de estilo*.

Web publicada: https://estrellabradleyogando-lgtm.github.io/star.dollz/

## Páginas

- `index.html`: portada, trending, categorías, sobre nosotras, lookbook, worn by your favourites y preguntas frecuentes.
- `shop-all.html`: todos los productos en una rejilla.
- `starnews.html`: noticias de la marca (#STARNEWS_).

## Tecnologías

- HTML5 semántico.
- Tailwind CSS v4 desde el Play CDN, con mis colores y fuentes en `@theme static`.
- `css/styles.css` propio, ordenado con `@layer` (barra promo con `@keyframes`).
- Modo claro y oscuro con `@custom-variant dark` y el prefijo `dark:`; se guarda con `localStorage`.
- JavaScript con jQuery en `js/script.js` (menú móvil, modo oscuro y acordeón de preguntas).
- Librerías: Swiper (sliders) y AOS (animaciones al hacer scroll).
- Imágenes alojadas en ImageKit.
- Diseño mobile first, hecho a partir del diseño en Figma.

## Estructura

```
star.dollz/
├── index.html
├── shop-all.html
├── starnews.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Cómo trabajamos con Git

- `main`: la versión que funciona y se publica.
- `maquetacion-tailwind`: estructura HTML, Tailwind y modo oscuro.
- `sliders-animaciones`: Swiper, AOS y animaciones.

Cada rama se sube a GitHub con GitHub Desktop y se une a `main` con un pull request.

## Cómo verla en local

1. Clonar el repositorio con GitHub Desktop.
2. Abrir la carpeta en Visual Studio Code.
3. Abrir `index.html` con Live Server.
