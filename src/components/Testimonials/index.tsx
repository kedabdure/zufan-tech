import React from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "../Common/SectionTitle";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Elena Martinez",
    username: "@elenamartinez",
    body: "Zufan Tech's innovative web platform transformed our online presence, delivering seamless performance and exceptional user engagement for our brand.",
    img: "/images/testimonials/men1.jpg",
  },
  {
    name: "James Okoye",
    username: "@jamesokoye",
    body: "Their mobile app development expertise created a robust, user-friendly solution that significantly boosted our customer retention and business growth.",
    img: "/images/testimonials/men2.jpg",
  },
  {
    name: "Priya Sharma",
    username: "@priyasharma",
    body: "Zufan Tech’s cloud solutions optimized our operations, providing scalable infrastructure that enhanced efficiency and reduced costs for our enterprise.",
    img: "/images/testimonials/men4.jpg",
  },
  {
    name: "Liam Chen",
    username: "@liamchen",
    body: "The AI-driven analytics platform from Zufan Tech empowered our decision-making with precise insights, driving strategic success for our company.",
    img: "/images/testimonials/author-01.png",
    },
  {
    name: "Aisha Khalid",
    username: "@aishakhalid",
    body: "Their UI/UX design services crafted an intuitive interface that elevated user satisfaction and engagement for our global digital product.",
    img: "/images/testimonials/author-02.png",
  },
  {
    name: "Mateo Alvarez",
    username: "@mateoalvarez",
    body: "Zufan Tech’s tech consulting streamlined our processes, delivering tailored strategies that accelerated our growth and strengthened our market position.",
    img: "/images/testimonials/author-03.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-5 transition-all duration-300",
        "border-[#DBE2EF]/30 bg-[#F9F7F7]/90 hover:bg-[#DBE2EF]/50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-[#112D4E] dark:text-[#F9F7F7]">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-[#112D4E]/60 dark:text-[#DBE2EF]/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-[#112D4E]/80 dark:text-[#DBE2EF]">
        {body}
      </blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative dark:bg-gray-900 z-10 py-16 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="Hear from businesses worldwide who have transformed their operations and achieved success with Zufan Tech’s innovative solutions."
          center
        />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] gap-6">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] gap-6">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#fdfdfd] to-transparent dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#fdfdfd] to-transparent dark:from-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;