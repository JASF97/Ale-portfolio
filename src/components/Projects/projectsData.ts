export interface Project {
  id: string | number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bimbo",
    description: "Dashboards",
    imageSrc: "/Bimbo.png",
    link: "#",
  },
  {
    id: 2,
    title: "PlayerProps",
    description: "Plataforma web responsive",
    imageSrc: "/Player-Props.png",
    link: "#",
  },
  {
    id: 3,
    title: "Adelantto Cash",
    description: "Sitio web responsive",
    imageSrc: "/Adelantto.png",
    link: "#",
  },
  {
    id: 4,
    title: "Michiconf",
    description: "Sitio web responsive",
    imageSrc: "/Michiconf.png",
    link: "#",
  },
];
