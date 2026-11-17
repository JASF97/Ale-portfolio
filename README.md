# Portafolio de Alejandra Avendaño

Sitio personal de Alejandra Avendaño, diseñadora UX/UI. Presenta sus proyectos, una sección "Sobre mí" y sus datos de contacto.

## Tecnología

- React 19 + TypeScript
- Vite 7
- SCSS con convención BEM
- React Router 7

## Requisitos

- Node 22 (ver `.nvmrc`). Con nvm: `nvm use`.

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo
npm run build    # revisa tipos y genera dist/
npm run preview  # sirve dist/ para probar la versión final
npm run lint     # ESLint
```

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio: hero, proyectos, sobre mí y contacto |
| `/project/:slug` | Detalle de un proyecto |
| cualquier otra | Página 404 |

## Estructura

```
public/               favicon e imagen para compartir (Open Graph)
src/
  assets/             imágenes (WebP) e iconos (SVG)
  components/         un directorio por componente (.tsx + .scss)
    Projects/projectsData.ts   datos de todos los proyectos
  context/            tema claro/oscuro e idioma (providers + hooks)
  i18n/               textos de la interfaz en español e inglés
  hooks/              useIntersectionObserver (animaciones de entrada)
  pages/              Landing y NotFound
  styles/             variables, mixins y temas
    themes/           colores por tema como variables CSS
```

## Cómo agregar un proyecto

Todo sale de `src/components/Projects/projectsData.ts`. Agrega un objeto a `projects` con:

- Datos de la tarjeta: `slug`, `title`, `description`, `imageSrc`.
- Encabezado del detalle: `header.background` y, si aplica, `header.gradients` u `header.overlayImage`.
- Galerías: `galleryMain` (obligatoria, 3 imágenes) y `galleries`, una lista de secciones con título y columnas de imágenes. Los proyectos anteriores usan además `galleryPro`, `galleryMobile`, `galleryDesign` y `galleryWeb`. Cada una se muestra solo si tiene datos.

Las imágenes van en `src/assets/` en formato WebP.

## Idiomas (español e inglés)

- Los textos de la interfaz están en `src/i18n/translations.ts`, con un bloque `es` y otro `en` de la misma forma. TypeScript avisa si a uno le falta una clave.
- Los textos de cada proyecto (`description`, `descriptionLong`, `meta` y títulos de galería) llevan las dos versiones en `projectsData.ts`: `{ es: "...", en: "..." }`.
- El idioma elegido se guarda en `localStorage`; sin elección previa se usa inglés si el navegador está en inglés y español en cualquier otro caso.
- En un componente: `const { lang, t } = useLanguage();`.

## Tema claro y oscuro

- Los colores viven en `src/styles/themes/_light.scss` y `_dark.scss` como variables CSS (`--color-*`).
- El tema elegido se guarda en `localStorage`; sin elección previa se usa la preferencia del sistema.
- `index.html` aplica el tema antes de que cargue React para que no parpadee.

## Accesibilidad

- Con "reducir movimiento" activado en el sistema, la cinta se detiene y las animaciones de entrada y el scroll suave se desactivan.

## Diseño

El diseño de referencia está en Figma (archivo "Portafolio"): versiones clara y oscura de escritorio, móvil y detalle de proyecto.
