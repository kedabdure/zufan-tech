import { Feature } from "@/types/feature";
import Image from "next/image";


const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image src={'/icons/webpage.svg'} alt="Webpage Icon" width={40} height={40} />,
    title: "Website Design & Development",
    paragraph:
      "Build responsive, high-performance websites that elevate your brand and engage users with seamless functionality.",
  },
  {
    id: 2,
    icon: <Image src={'/icons/tech.svg'} alt="Tech Icon" width={40} height={40} />,
    title: "Mobile App Development",
    paragraph:
      "Create intuitive iOS and Android apps with robust features, designed for performance and user satisfaction.",
  },
  {
    id: 3,
    icon: <Image src={'/icons/figma.svg'} alt="Figma Icon" width={40} height={40} />,
    title: "UI/UX Design",
    paragraph:
      "Design user-friendly interfaces with stunning visuals to enhance engagement and deliver exceptional experiences.",
  },
  {
    id: 4,
    icon: <Image src={'/icons/tech.svg'} alt="Tech Icon" width={40} height={40} />,
    title: "Tech Consulting",
    paragraph:
      "Unlock your potential with strategic tech advice to optimize processes and drive innovation.",
  },
  {
    id: 5,
    icon: <Image src={'/icons/cloud.svg'} alt="Cloud Icon" width={40} height={40} />,
    title: "Cloud Solutions",
    paragraph:
      "Deploy secure, scalable cloud systems for enhanced performance and business agility.",
  },
  {
    id: 6,
    icon: <Image src={'/icons/cloud.svg'} alt="Cloud Icon" width={40} height={40} />,
    title: "AI & Machine Learning",
    paragraph:
      "Transform your business with AI-driven insights and automation for smarter solutions.",
  },
];

export default featuresData;