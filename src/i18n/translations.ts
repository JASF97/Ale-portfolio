export type Lang = "es" | "en";

/** Texto con una versión por idioma. */
export type Localized = Record<Lang, string>;

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
];

const es = {
  meta: {
    title: "Alejandra Avendaño | Diseñadora UX/UI",
    description:
      "Alejandra Avendaño, diseñadora UX/UI. Productos digitales para finanzas, tecnología, entretenimiento, inmobiliaria y e-commerce. Conoce mi portafolio y trabajemos juntos.",
  },
  nav: {
    about: "Sobre mí",
    work: "Mi trabajo",
    contact: "Contáctame",
    main: "Navegación principal",
    mobile: "Navegación",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  theme: {
    toDark: "Activar modo oscuro",
    toLight: "Activar modo claro",
    dark: "Modo oscuro",
    light: "Modo claro",
  },
  language: {
    label: "Idioma",
    change: "Cambiar idioma",
  },
  hero: {
    greeting: "Hola! 👋 soy diseñadora UX/UI.",
    cta: "Ver mi trabajo",
    customersAlt: "Clientes totales",
    planAlt: "Seleccionar plan",
    labelsAlt: "Etiquetas del proyecto",
    membersAlt: "Miembros del equipo",
  },
  marquee: "Trabajo seleccionado",
  projects: {
    title: "Mi Trabajo",
    view: "Ver proyecto",
    imageAlt: "Proyecto",
    others: "Otros proyectos",
  },
  about: {
    title: "Sobre mí",
    greeting: "Hola a todos 👋",
    part1Bold: "Con más de 4 años de experiencia en diseño UX/UI,",
    part2:
      "he trabajado en la creación de productos digitales en sectores como finanzas, tecnología, entretenimiento, inmobiliaria y e-commerce, siempre enfocada en",
    part3Bold: "crear experiencias centradas en las personas",
    part4:
      "y funcionales, buscando que sean intuitivas, simples y atractivas que le generen una emoción.",
  },
  contact: {
    title: "Contáctame",
    heading: "Trabajemos juntos",
    text: "Si tienes un proyecto en mente y quieres crear una experiencia digital que realmente impacte,",
    textBold: "no dudes en escribirme.",
    emailLabel: "Contáctame",
  },
  detail: {
    back: "Volver al inicio",
    description: "DESCRIPCIÓN",
    goal: "META",
    client: "CLIENTE",
    type: "TIPO",
    software: "SOFTWARE",
    responsive: "RESPONSIVE",
    mainView: "Vista principal",
    view: "Vista",
    page: "página",
    mobileView: "versión móvil",
    design: "diseño",
    screen: "pantalla",
    logo: "Logo",
  },
  notFound: {
    title: "Página no encontrada",
    description:
      "La página o el proyecto que buscas no existe o cambió de lugar.",
    home: "Volver al inicio",
    work: "Ver mi trabajo",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "Alejandra Avendaño | UX/UI Designer",
    description:
      "Alejandra Avendaño, UX/UI designer. Digital products for finance, technology, entertainment, real estate and e-commerce. Explore my portfolio and let's work together.",
  },
  nav: {
    about: "About me",
    work: "My work",
    contact: "Contact",
    main: "Main navigation",
    mobile: "Navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  theme: {
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    dark: "Dark mode",
    light: "Light mode",
  },
  language: {
    label: "Language",
    change: "Change language",
  },
  hero: {
    greeting: "Hi! 👋 I'm a UX/UI designer.",
    cta: "See my work",
    customersAlt: "Total customers",
    planAlt: "Select plan",
    labelsAlt: "Project labels",
    membersAlt: "Team members",
  },
  marquee: "Selected work",
  projects: {
    title: "My Work",
    view: "View project",
    imageAlt: "Project",
    others: "Other projects",
  },
  about: {
    title: "About me",
    greeting: "Hi everyone 👋",
    part1Bold: "With over 4 years of experience in UX/UI design,",
    part2:
      "I have worked on digital products in industries such as finance, technology, entertainment, real estate and e-commerce, always focused on",
    part3Bold: "creating people-centered experiences",
    part4:
      "that are functional, intuitive, simple and appealing, and that spark an emotion.",
  },
  contact: {
    title: "Contact",
    heading: "Let's work together",
    text: "If you have a project in mind and want to create a digital experience that truly makes an impact,",
    textBold: "don't hesitate to write to me.",
    emailLabel: "Contact me",
  },
  detail: {
    back: "Back to home",
    description: "DESCRIPTION",
    goal: "GOAL",
    client: "CLIENT",
    type: "TYPE",
    software: "SOFTWARE",
    responsive: "RESPONSIVE",
    mainView: "Main view",
    view: "View",
    page: "page",
    mobileView: "mobile version",
    design: "design",
    screen: "screen",
    logo: "Logo",
  },
  notFound: {
    title: "Page not found",
    description:
      "The page or project you are looking for doesn't exist or has moved.",
    home: "Back to home",
    work: "See my work",
  },
};

export const translations: Record<Lang, Dictionary> = { es, en };
