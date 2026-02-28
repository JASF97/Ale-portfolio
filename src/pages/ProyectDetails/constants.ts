import project1 from "../../assets/Adelantto.png";
import project2 from "../../assets/Michiconf.png";
import project3 from "../../assets/Bimbo.png";
import project4 from "../../assets/Player-Props.png";
import adelantto1 from "../../assets/adelantto-1.png";
import adelantto2 from "../../assets/adelantto-2.png";
import adelantto3 from "../../assets/adelantto-3.png";
import adelanttoPro1 from "../../assets/adelantto-pro-1.png";
import adelanttoPro2 from "../../assets/adelantto-pro-2.png";
import adelanttoPro3 from "../../assets/adelantto-pro-3.png";
import adelanttoPro4 from "../../assets/adelantto-pro-4.png";
import adelanttoPro5 from "../../assets/adelantto-pro-5.png";
import adelanttoPro6 from "../../assets/adelantto-pro-6.png";
import adelanttoPro7 from "../../assets/adelantto-pro-7.png";
import adelanttoPro8 from "../../assets/adelantto-pro-8.png";
import adelanttoPro9 from "../../assets/adelantto-pro-9.png";
import michi1 from "../../assets/michi-1.png";
import michi2 from "../../assets/michi-2.png";
import michi3 from "../../assets/michi-3.png";
import michiPro1 from "../../assets/michi-pro-1.png";
import michiPro2 from "../../assets/michi-pro-2.png";
import player1 from "../../assets/player-1.png";
import player2 from "../../assets/player-2.png";
import player3 from "../../assets/player-3.png";
import playerPro1 from "../../assets/player-pro-1.png";
import playerPro2 from "../../assets/player-pro-2.png";
import playerPro3 from "../../assets/player-pro-3.png";
import playerPro4 from "../../assets/player-pro-4.png";
import playerPro5 from "../../assets/player-pro-5.png";
import playerPro6 from "../../assets/player-pro-6.png";
import bimbo1 from "../../assets/bimbo-1.png";
import bimbo2 from "../../assets/bimbo-2.png";
import bimbo3 from "../../assets/bimbo-3.png";
import bimboPro1 from "../../assets/bimbo-pro-1.png";
import bimboPro2 from "../../assets/bimbo-pro-2.png";
import bimboPro3 from "../../assets/bimbo-pro-3.png";
import bimboPro4 from "../../assets/bimbo-pro-4.png";
import bimboPro5 from "../../assets/bimbo-pro-5.png";
import bimboPro6 from "../../assets/bimbo-pro-6.png";
import bimboPro7 from "../../assets/bimbo-pro-7.png";
import bimboPro8 from "../../assets/bimbo-pro-8.png";

export interface Project {
  id: number;
  slug: string;
  title: string;
  client: string;
  collaborator: string;
  type: string;
  software: string;
  description: string;
  descriptionBold: string;
  meta: string;
  metaBold: string;
  headerGradient: string;
  heroImage: string;
  galleryImages: [string, string];
  /** Optional 5-image gallery: [col1, col2top, col2bottom, col3top, col3bottom] */
  galleryPro?: [string, string, string, string, string];
  /** Optional mobile gallery images */
  galleryMobile?: string[];
  /** Optional design gallery: images shown side by side with title */
  galleryDesign?: { title: string; gradient: string; images: string[] };
  /** Optional web gallery: 2-column grid with title */
  galleryWeb?: { title: string; gradient: string; images: string[] };
  layoutImage: string;
  layoutTitle: string;
  cardImage: string;
  cardDescription: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "adelantto-cash",
    title: "ADELANTTO CASH",
    client: "Adelantto Cash",
    collaborator: "BLUEPIXEL",
    type: "UX/UI Design",
    software: "Figma",
    description:
      "AdelanttoCash es una empresa mexicana de tecnología financiera que ofrece soluciones de adelanto de nómina y servicios financieros digitales para empleados y empresas.",
    descriptionBold: "Realicé el rediseño de su página web responsive",
    meta: "El objetivo fue hacer la información más clara y accesible para los usuarios, mejorando la arquitectura de información y la experiencia de navegación.",
    metaBold: "hacer la información más clara y accesible",
    headerGradient: "linear-gradient(135deg, #1a2332 0%, #2a3a4e 100%)",
    heroImage: adelantto1,
    galleryImages: [adelantto2, adelantto3],
    layoutImage: project4,
    layoutTitle: "LANDING PAGE",
    galleryPro: [
      adelanttoPro1,
      adelanttoPro2,
      adelanttoPro3,
      adelanttoPro4,
      adelanttoPro5,
    ],
    galleryMobile: [adelanttoPro9, adelanttoPro6, adelanttoPro7, adelanttoPro8],
    cardImage: project1,
    cardDescription: "Saas website for unique start-up brands.",
  },
  {
    id: 2,
    slug: "michiconf",
    title: "MICHICONF",
    client: "MichiCONF",
    collaborator: "JUAN PERALTA",
    type: "UX/UI Design",
    software: "Figma",
    description:
      "MichiCONF es una plataforma de conferencias virtuales enfocada en la comunidad tech, ofreciendo experiencias interactivas y networking digital.",
    descriptionBold: "Diseñé la plataforma web completa desde cero",
    meta: "Se buscó crear una experiencia inmersiva que facilitara la interacción entre ponentes y asistentes de forma intuitiva.",
    metaBold: "experiencia inmersiva que facilitara la interacción",
    headerGradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2d7a 100%)",
    heroImage: michi1,
    galleryImages: [michi2, michi3],
    layoutImage: project3,
    layoutTitle: "DISEÑO",
    galleryDesign: {
      title: "DISEÑO",
      gradient:
        "linear-gradient(182.14deg, rgba(85, 42, 149, 0.5) 1.9%, rgba(191, 168, 224, 0.5) 46.85%, rgba(255, 255, 255, 0.5) 95.05%)",
      images: [michiPro1, michiPro2],
    },
    cardImage: project2,
    cardDescription: "Saas website for unique start-up brands.",
  },
  {
    id: 3,
    slug: "playerprops",
    title: "PLAYERPROPS",
    client: "PlayerProps",
    collaborator: "BLUEPIXEL",
    type: "UX/UI Design",
    software: "Figma",
    description:
      "PlayerProps es una aplicación de análisis deportivo que permite a los usuarios seguir estadísticas de jugadores y realizar predicciones basadas en datos.",
    descriptionBold: "Diseñé la interfaz de la app móvil y dashboard web",
    meta: "El enfoque principal fue la visualización de datos complejos de forma simple y atractiva para el usuario final.",
    metaBold: "visualización de datos complejos de forma simple",
    headerGradient: "linear-gradient(135deg, #1a2e1a 0%, #2a4e2a 100%)",
    heroImage: player1,
    galleryImages: [player2, player3],
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
    layoutImage: project4,
    layoutTitle: "SITIO WEB",
    cardImage: project3,
    cardDescription: "Saas website for unique start-up brands.",
  },
  {
    id: 4,
    slug: "bimbo",
    title: "BIMBO",
    client: "Grupo Bimbo",
    collaborator: "BLUEPIXEL",
    type: "UX/UI Design",
    software: "Figma",
    description:
      "Grupo Bimbo es la empresa de panificación más grande del mundo. Se trabajó en la digitalización de procesos internos y herramientas para distribuidores.",
    descriptionBold: "Diseñé herramientas digitales para distribuidores",
    meta: "El proyecto se centró en optimizar los flujos de trabajo de los distribuidores, reduciendo tiempos operativos y mejorando la trazabilidad.",
    metaBold: "optimizar los flujos de trabajo de los distribuidores",
    headerGradient: "linear-gradient(135deg, #1a3a4e 0%, #2a5e7a 100%)",
    heroImage: bimbo1,
    galleryImages: [bimbo2, bimbo3],
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
    layoutImage: project1,
    layoutTitle: "CONSOLA",
    cardImage: project4,
    cardDescription: "Saas website for unique start-up brands.",
  },
];

export const getProjectById = (id: number): Project | undefined =>
  projects.find((p) => p.id === id);

export const getOtherProjects = (currentId: number): Project[] =>
  projects.filter((p) => p.id !== currentId);
