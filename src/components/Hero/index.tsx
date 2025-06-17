import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-[#fdfcfc] to-[#e7ebf3] pb-16 pt-[120px] dark:from-[#112D4E]/5 dark:to-[#3F72AF]/10 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-[#112D4E] dark:text-[#F9F7F7] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Empower Your Future with Zufan Tech’s Innovative Solutions
              </h1>
              <p className="mb-12 text-base leading-relaxed text-[#112D4E]/80 dark:text-[#DBE2EF] sm:text-lg md:text-xl">
                Zufan Tech delivers cutting-edge software development, cloud solutions, and AI-driven technology to transform businesses worldwide. Partner with us to build scalable, future-proof solutions tailored to your needs.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-[#3F72AF] px-6 py-3 text-base font-semibold text-[#F9F7F7] shadow-md transition-all duration-300 ease-in-out hover:bg-[#112D4E] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#3F72AF]/50 dark:bg-[#3F72AF] dark:hover:bg-[#DBE2EF] dark:hover:text-[#112D4E] dark:focus:ring-[#DBE2EF]/50 md:px-8 lg:px-6 xl:px-8",
                    "hover:cursor-pointer group"
                  )}
                  aria-label="Contact Zufan Tech for innovative software and technology solutions"
                  role="button"
                >
                  <span className="mr-2">Contact Us</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-[#112D4E] px-6 py-3 text-base font-semibold text-[#F9F7F7] shadow-md transition-all duration-300 ease-in-out hover:bg-[#3F72AF] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#3F72AF]/50 dark:bg-[#112D4E] dark:hover:bg-[#F9F7F7] dark:hover:text-[#112D4E] dark:focus:ring-[#DBE2EF]/50 md:px-8 lg:px-6 xl:px-8",
                    "hover:cursor-pointer group"
                  )}
                  aria-label="View Zufan Tech’s portfolio of projects"
                  role="button"
                >
                  <span className="mr-2">Explore Projects</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute right-0 top-0 z-[-1] opacity-20 lg:opacity-80">
        <svg
          width="480"
          height="580"
          viewBox="0 0 480 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 50C360 30 300 40 240 100C180 160 140 220 140 300C140 380 180 440 240 500"
            stroke="url(#paint0_linear_25:223)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="380"
            cy="80"
            r="40"
            fill="url(#paint1_radial_25:223)"
          />
          <rect
            x="100"
            y="250"
            width="80"
            height="80"
            rx="20"
            transform="rotate(45 100 250)"
            fill="url(#paint2_linear_25:223)"
          />
          <path
            d="M300 400C340 420 380 400 420 350C460 300 460 240 420 200"
            stroke="url(#paint3_linear_25:223)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:223"
              x1="240"
              y1="50"
              x2="240"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F72AF" />
              <stop offset="1" stopColor="#112D4E" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:223"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(380 80) rotate(90) scale(40)"
            >
              <stop offset="0.1" stopColor="#3F72AF" stopOpacity="0" />
              <stop offset="1" stopColor="#3F72AF" stopOpacity="0.15" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_25:223"
              x1="100"
              y1="250"
              x2="180"
              y2="330"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#112D4E" />
              <stop offset="1" stopColor="#DBE2EF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:223"
              x1="360"
              y1="200"
              x2="360"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F72AF" />
              <stop offset="1" stopColor="#112D4E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-20 lg:opacity-80">
        <svg
          width="420"
          height="260"
          viewBox="0 0 420 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="200"
            r="50"
            fill="url(#paint0_radial_25:224)"
          />
          <path
            d="M100 230C150 210 220 220 280 180C340 140 380 90 400 50"
            stroke="url(#paint1_linear_25:224)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect
            x="300"
            y="100"
            width="60"
            height="60"
            rx="15"
            transform="rotate(-30 300 100)"
            fill="url(#paint2_linear_25:224)"
          />
          <defs>
            <linearGradient
              id="paint1_linear_25:224"
              x1="250"
              y1="50"
              x2="250"
              y2="230"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F72AF" stopOpacity="0" />
              <stop offset="1" stopColor="#112D4E" />
            </linearGradient>
            <radialGradient
              id="paint0_radial_25:224"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(50 200) rotate(90) scale(50)"
            >
              <stop offset="0.1" stopColor="#112D4E" stopOpacity="0" />
              <stop offset="1" stopColor="#112D4E" stopOpacity="0.15" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_25:224"
              x1="300"
              y1="100"
              x2="360"
              y2="160"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F72AF" />
              <stop offset="1" stopColor="#DBE2EF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  );
}