import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Software Development",
        path: "/services/software-development",
        newTab: false,
      },
      {
        id: 32,
        title: "Cloud Solutions",
        path: "/services/cloud-solutions",
        newTab: false,
      },
      {
        id: 33,
        title: "Mobile App Development",
        path: "/services/mobile-app-development",
        newTab: false,
      },
      {
        id: 34,
        title: "Tech Consulting",
        path: "/services/tech-consulting",
        newTab: false,
      },
      {
        id: 35,
        title: "AI & Machine Learning",
        path: "/services/ai-machine-learning",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 5,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 6,
    title: "Blog",
    path: "/blog",
    newTab: false,
  }
];

export default menuData;