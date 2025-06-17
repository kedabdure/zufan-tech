import Image from "next/image";
import { Server, Layers, Cpu } from "lucide-react";

const AboutSectionTwo = () => {
  const features = [
    {
      icon: <Server className="h-5 w-5" />,
      title: "Robust Infrastructure",
      description: "Enterprise-grade architecture designed for reliability and scalability"
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Full Stack Expertise",
      description: "End-to-end solutions from frontend interfaces to backend systems"
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Performance Optimized",
      description: "Systems fine-tuned for maximum efficiency and speed"
    }
  ];

  return (
    <section className="bg-[#DBE2EF] py-16 dark:bg-[#112D4E]/80 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="order-last w-full px-4 lg:order-first lg:w-1/2">
            <div className="relative mx-auto aspect-video max-w-[550px] lg:mr-0">
              <Image
                src="/images/about/about2.jpg"
                alt="Zufan Tech infrastructure"
                fill
                className="rounded-lg object-cover shadow-lg"
                priority
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px] space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3F72AF] p-2 text-[#F9F7F7]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#112D4E] dark:text-[#F9F7F7]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[#112D4E]/80 dark:text-[#DBE2EF]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;