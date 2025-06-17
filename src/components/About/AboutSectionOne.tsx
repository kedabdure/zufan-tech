import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { Cpu, ShieldCheck, Globe, Zap, Code, Users } from "lucide-react";

const AboutSectionOne = () => {
  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Blazing Speed",
      description: "High-performance solutions with fast response times."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Clean Code",
      description: "Well-structured and maintainable codebases."
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Modern Tech",
      description: "Built with the latest, future-ready tools."
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Robust Security",
      description: "Strong protection for your critical data."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Reach",
      description: "Optimized for worldwide scalability and speed."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "User Focused",
      description: "Simple, engaging, and intuitive designs."
    }
  ];


  return (
    <section id="our-expertise" className="bg-gradient-to-b from-[#F9F7F7] to-[#DBE2EF]/30 py-16 dark:from-[#112D4E] dark:to-[#3F72AF]/10 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Engineering Excellence"
              paragraph="At Zufan Tech, we transform complex challenges into elegant digital solutions. Our team of seasoned architects and developers combine technical mastery with business acumen to deliver systems that drive measurable results."
              mb="44px"
              center={false}
            />

            <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 rounded-xl p-4 transition-all duration-300 hover:bg-[#DBE2EF]/40 dark:hover:bg-[#3F72AF]/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3F72AF] p-2 text-[#F9F7F7] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#112D4E] dark:text-[#F9F7F7]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#112D4E]/80 dark:text-[#DBE2EF]/90">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center rounded-lg bg-[#3F72AF] px-6 py-3 text-sm font-medium text-[#F9F7F7] shadow-md transition-all duration-300 hover:bg-[#112D4E] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3F72AF] focus:ring-offset-2 dark:bg-[#3F72AF] dark:hover:bg-[#112D4E]"
            >
              Explore Our Methodology
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <div className="relative w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 overflow-hidden rounded-xl shadow-2xl aspect-25/24 max-w-[550px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about1.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:drop-shadow-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[#3F72AF] opacity-20 blur-xl dark:bg-[#DBE2EF] dark:opacity-30" />
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-[#3F72AF] opacity-20 blur-xl dark:bg-[#DBE2EF] dark:opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;