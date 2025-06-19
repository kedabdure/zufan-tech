import Image from "next/image";
import { Server, Layers, Cpu } from "lucide-react";

const AboutSectionTwo = () => {
  const features = [
    {
      icon: <Server className="h-5 w-5" strokeWidth={1.5} />,
      title: "Cloud Infrastructure",
      description: "Scalable architecture with 99.99% uptime SLA"
    },
    {
      icon: <Layers className="h-5 w-5" strokeWidth={1.5} />,
      title: "Full Stack Expertise",
      description: "Seamless integration from UI to database"
    },
    {
      icon: <Cpu className="h-5 w-5" strokeWidth={1.5} />,
      title: "Performance Optimized",
      description: "Applications with sub-100ms response times"
    }
  ];

  return (
    <section className="bg-white py-16 dark:bg-[#0a0a0a] md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="/images/about/zufan-cup.png"
                alt="Zufan Tech infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#3F72AF] text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#112D4E] dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[#112D4E]/80 dark:text-[#DBE2EF]/80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="rounded-md bg-[#3F72AF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#112D4E]">
                Explore Our Tech Stack
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;