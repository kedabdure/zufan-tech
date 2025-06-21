import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import {
  Zap,
  Code2,
  Cpu,
  ShieldCheck,
  Globe,
  Users,
  Rocket,
  CircuitBoard,
  LockKeyhole,
  Cloud,
  LayoutTemplate,
  Gauge
} from "lucide-react";

const AboutSectionOne = () => {
  const features = [
    {
      icon: <Zap className="h-5 w-5" strokeWidth={2} />,
      title: "Lightning Performance",
      description: "Ultra-fast systems for smooth user experiences."
    },
    {
      icon: <Code2 className="h-5 w-5" strokeWidth={2.5} />,
      title: "Clean Code Standards",
      description: "Structured, scalable, and maintainable code."
    },
    {
      icon: <Cpu className="h-5 w-5" strokeWidth={2.5} />,
      title: "Cutting-Edge Stack",
      description: "Built with the latest, reliable technologies."
    },
    {
      icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />,
      title: "Enterprise Security",
      description: "Advanced security to protect your data."
    },
    {
      icon: <Globe className="h-5 w-5" strokeWidth={2.5} />,
      title: "Global Scalability",
      description: "Solutions that grow with your business."
    },
    {
      icon: <Users className="h-5 w-5" strokeWidth={2.5} />,
      title: "User-Centric Design",
      description: "Intuitive designs focused on user needs."
    }
  ];

  return (
    <section id="our-expertise" className="relative overflow-hidden bg-gradient-to-b from-[#F9F7F7] to-[#DBE2EF]/20 py-20 dark:from-[#0a0a0a] dark:to-[#112D4E]/50 md:py-16 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#3F72AF]/10 blur-3xl dark:bg-[#3F72AF]/5"></div>
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#3F72AF]/10 blur-3xl dark:bg-[#3F72AF]/5"></div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch">
          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <SectionTitle
              title="Engineering Excellence"
              paragraph="We transform complex business challenges into elegant digital solutions through cutting-edge technology and strategic thinking."
              mb="40px"
              center={false}
            />

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:bg-[#112D4E]/50"
                >
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3F72AF]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3f71af] p-2 text-[#F9F7F7] shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#112D4E] dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#112D4E]/80 dark:text-[#DBE2EF]/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#3F72AF] to-[#112D4E] px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF] focus:ring-offset-2"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                <span className="relative">Discover Our Process</span>
                <Rocket className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              {/* <Link
                href="/technologies"
                className="inline-flex items-center rounded-lg border border-[#DBE2EF] bg-white px-6 py-3 text-sm font-medium text-[#112D4E] transition-all duration-300 hover:border-[#3F72AF] hover:text-[#3F72AF] dark:border-[#3F72AF]/20 dark:bg-[#112D4E] dark:text-[#DBE2EF] dark:hover:border-[#3F72AF] dark:hover:text-[#3F72AF]"
              >
                <CircuitBoard className="mr-2 h-4 w-4" />
                Our Technologies
              </Link> */}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative aspect-[3/4] max-h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about/zufan-office.png"
                alt="Zufan Tech engineering team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/70 via-transparent to-transparent"></div>

              {/* Floating tech badges */}
              <div className="absolute left-4 top-4 flex items-center rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium shadow-sm dark:bg-[#112D4E]/90 dark:text-white">
                <Cloud className="mr-1 h-3 w-3 text-[#3F72AF]" />
                Cloud Native
              </div>
              <div className="absolute right-4 top-4 flex items-center rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium shadow-sm dark:bg-[#112D4E]/90 dark:text-white">
                <LayoutTemplate className="mr-1 h-3 w-3 text-[#3F72AF]" />
                Modern UI
              </div>
              <div className="absolute bottom-4 left-4 flex items-center rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium shadow-sm dark:bg-[#112D4E]/90 dark:text-white">
                <Gauge className="mr-1 h-3 w-3 text-[#3F72AF]" />
                High Performance
              </div>
              <div className="absolute bottom-4 right-4 flex items-center rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium shadow-sm dark:bg-[#112D4E]/90 dark:text-white">
                <LockKeyhole className="mr-1 h-3 w-3 text-[#3F72AF]" />
                Secure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;