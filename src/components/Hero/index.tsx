import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden min-h-screen bg-gradient-to-br pb-16 pt-[150px] bg-white dark:bg-gray-950 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
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
      </div> 
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}