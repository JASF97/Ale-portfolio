import projectBimbo from "../../assets/Bimbo.png";
import projectPlayerProps from "../../assets/Player-Props.png";
import projectAdelantto from "../../assets/Adelantto.png";
import projectMichiconf from "../../assets/Michiconf.png";

import logoBimbo from "../../assets/bimbo-logo.svg";
import logoPlayerProps from "../../assets/player-props-logo.svg";
import logoAdelanttoCash from "../../assets/adelantto-cash-logo.svg";
import logoMichiConf from "../../assets/michi-conf-logo.svg";

import adelanttoPro1 from "../../assets/adelantto-pro-1.png";
import adelanttoPro2 from "../../assets/adelantto-pro-2.png";
import adelanttoPro3 from "../../assets/adelantto-pro-3.png";
import adelanttoPro4 from "../../assets/adelantto-pro-4.png";
import adelanttoPro5 from "../../assets/adelantto-pro-5.png";
import adelanttoPro6 from "../../assets/adelantto-pro-6.png";
import adelanttoPro7 from "../../assets/adelantto-pro-7.png";
import adelanttoPro8 from "../../assets/adelantto-pro-8.png";
import adelanttoPro9 from "../../assets/adelantto-pro-9.png";

import michiPro1 from "../../assets/michi-pro-1.png";
import michiPro2 from "../../assets/michi-pro-2.png";

import playerPro1 from "../../assets/player-pro-1.png";
import playerPro2 from "../../assets/player-pro-2.png";
import playerPro3 from "../../assets/player-pro-3.png";
import playerPro4 from "../../assets/player-pro-4.png";
import playerPro5 from "../../assets/player-pro-5.png";
import playerPro6 from "../../assets/player-pro-6.png";

import bimboPro1 from "../../assets/bimbo-pro-1.png";
import bimboPro2 from "../../assets/bimbo-pro-2.png";
import bimboPro3 from "../../assets/bimbo-pro-3.png";
import bimboPro4 from "../../assets/bimbo-pro-4.png";
import bimboPro5 from "../../assets/bimbo-pro-5.png";
import bimboPro6 from "../../assets/bimbo-pro-6.png";
import bimboPro7 from "../../assets/bimbo-pro-7.png";
import bimboPro8 from "../../assets/bimbo-pro-8.png";

export type ImageSectionLayout = "fullWidthAndTwoHalves" | "grid";

export interface ImageSectionItem {
  src: string;
  alt: string;
}

export interface ProjectImageSection {
  title: string;
  titleGradient?: string;
  layoutType: ImageSectionLayout;
  images: ImageSectionItem[];
  gridColumns?: number;
}

export interface Project {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  link?: string;
  tags?: string[];
  // Detalle del proyecto (header)
  creatorTags?: string[];
  descriptionLong?: string;
  meta?: string;
  client?: string;
  type?: string;
  software?: string;
  logoSrc?: string;
  headerBackground?: string;
  // Secciones de imágenes (título + gradiente + layout)
  imageSections?: ProjectImageSection[];
  layoutTitle: string;
  galleryWeb?: { title: string; gradient: string; images: string[] };
  galleryPro?: [string, string, string, string, string];
  galleryDesign?: { title: string; gradient: string; images: string[] };
  galleryMobile?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "bimbo",
    title: "Bimbo",
    description: "Dashboards",
    imageSrc: projectBimbo,
    link: "#",
    creatorTags: ["ALEJANDRA AVENDAÑO", "BLUEPIXEL"],
    descriptionLong:
      "Se realizó el análisis UX y la optimización de la plataforma de Business Intelligence de Bimbo, junto con la creación de su UI Design System.",
    meta: "El objetivo fue mejorar la experiencia y eficiencia en la toma de decisiones de los usuarios internos, trabajando en conjunto con el equipo de Bimbo como una extensión de su operación.",
    client: "Bimbo",
    type: "UX/UI Design",
    software: "Power BI",
    logoSrc: logoBimbo,
    headerBackground:
      "linear-gradient(0deg, #0090D6, #0090D6), radial-gradient(48.93% 62.36% at 16.28% 10.88%, rgba(127, 184, 226, 0.5) 0%, rgba(127, 226, 167, 0) 100%), radial-gradient(42.61% 49.21% at 92.61% 75.4%, rgba(45, 62, 216, 0.3) 0%, rgba(79, 45, 216, 0) 100%)",
    imageSections: [
      {
        title: "CONSULA",
        titleGradient:
          "linear-gradient(90deg, #0090D6 0%, #2575fc 50%, #6a11cb 100%)",
        layoutType: "grid",
        gridColumns: 3,
        images: [
          { src: bimboPro1, alt: "Bimbo Analytics - Vista 1" },
          { src: bimboPro2, alt: "Bimbo Analytics - Vista 2" },
          { src: bimboPro3, alt: "Bimbo Analytics - Vista 3" },
          { src: bimboPro4, alt: "Bimbo Analytics - Vista 4" },
          { src: bimboPro5, alt: "Bimbo Analytics - Vista 5" },
          { src: bimboPro6, alt: "Bimbo Analytics - Vista 6" },
          { src: bimboPro7, alt: "Bimbo Analytics - Vista 7" },
          { src: bimboPro8, alt: "Bimbo Analytics - Vista 8" },
        ],
      },
    ],
    galleryWeb: {
      title: "CONSOLA",
      gradient:
        "linear-gradient(182.14deg, rgba(9, 162, 226, 0.5) 1.9%, rgba(139, 197, 221, 0.5) 59.36%, rgba(255, 255, 255, 0.5) 98.29%)",
      images: [
        bimboPro1,
        bimboPro2,
        bimboPro3,
        bimboPro4,
        bimboPro5,
        bimboPro6,
        bimboPro7,
        bimboPro8,
      ],
    },
    layoutTitle: "CONSOLA",
  },
  {
    id: 2,
    slug: "playerprops",
    title: "PlayerProps",
    description: "Plataforma web responsive",
    imageSrc: projectPlayerProps,
    link: "#",
    creatorTags: ["ALEJANDRA AVENDAÑO", "BLUEPIXEL"],
    descriptionLong:
      "Se desarrolló una plataforma web responsive para PlayerProps, enfocada en el rastreo de información deportiva y en la visualización de métricas y gráficas de usabilidad para las apuestas deportivas.",
    meta: "El objetivo fue facilitar el acceso y análisis de datos deportivos, optimizando la experiencia del usuario con una interfaz clara, moderna y adaptable a distintos dispositivos.",
    client: "PlayerProps",
    type: "UX/UI Design",
    software: "Web",
    logoSrc: logoPlayerProps,
    headerBackground: "#07181E",
    galleryWeb: {
      title: "SITIO WEB",
      gradient:
        "linear-gradient(182.14deg, rgba(110, 241, 185, 0.5) 1.9%, rgba(110, 241, 185, 0.5) 59.36%, rgba(255, 255, 255, 0.5) 98.29%)",
      images: [
        playerPro1,
        playerPro2,
        playerPro3,
        playerPro4,
        playerPro5,
        playerPro6,
      ],
    },
    layoutTitle: "SITIO WEB",
  },
  {
    id: 3,
    slug: "adelantto-cash",
    title: "Adelantto Cash",
    description: "Sitio web responsive",
    imageSrc: projectAdelantto,
    link: "#",
    creatorTags: ["ALEJANDRA AVENDAÑO", "BLUEPIXEL"],
    descriptionLong:
      "AdelanttoCash es una empresa mexicana que ofrece adelantos de renta. Se rediseñó su sitio web responsive para mejorar la experiencia de usuario y generar confianza.",
    meta: "El objetivo fue hacer la información más clara y accesible, generar confianza y facilitar la conversión mediante una navegación moderna e intuitiva.",
    client: "Adelantto Cash",
    type: "UX/UI Design",
    software: "Figma",
    logoSrc: logoAdelanttoCash,
    headerBackground: "#0D1B3B",
    layoutTitle: "LANDING PAGE",
    galleryPro: [
      adelanttoPro1,
      adelanttoPro2,
      adelanttoPro3,
      adelanttoPro4,
      adelanttoPro5,
    ],
    galleryMobile: [adelanttoPro9, adelanttoPro6, adelanttoPro7, adelanttoPro8],
  },
  {
    id: 4,
    slug: "michiconf",
    title: "Michiconf",
    description: "Sitio web responsive",
    imageSrc: projectMichiconf,
    link: "#",
    creatorTags: ["ALEJANDRA AVENDAÑO", "JUAN PERALTA"],
    descriptionLong:
      "La MichiCONF es una conferencia anual pensada por y para gatos, donde los humanos y perros no están invitados. En colaboración con Juan Felipe Peralta, desarrollamos el concepto creativo del evento, y me encargué de diseñar toda la experiencia visual en Figma.",
    meta: "El objetivo fue crear una identidad divertida y coherente, que transmitiera el espíritu curioso y profesional de los gatos, combinando humor, diseño y una experiencia digital atractiva.",
    client: "Juan Peralta",
    type: "UX/UI Design",
    software: "Figma",
    logoSrc: logoMichiConf,
    headerBackground:
      "linear-gradient(0deg, #5C62D6, #5C62D6), radial-gradient(47.6% 85.11% at 52.4% 50.15%, rgba(86, 0, 115, 0.6) 0%, rgba(3, 4, 6, 0.6) 100%)",
    layoutTitle: "DISEÑO",
    galleryDesign: {
      title: "DISEÑO",
      gradient:
        "linear-gradient(182.14deg, rgba(85, 42, 149, 0.5) 1.9%, rgba(191, 168, 224, 0.5) 46.85%, rgba(255, 255, 255, 0.5) 95.05%)",
      images: [michiPro1, michiPro2],
    },
  },
];
