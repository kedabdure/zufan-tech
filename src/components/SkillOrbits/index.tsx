import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import SectionTitle from "../Common/SectionTitle";
import {
  NextJs,
  ReactJs,
  NodeJs,
  Typescript,
  Javascript,
  Jira,
  Git,
  Jest,
  MaterialUi,
  Notion,
  Python,
  Redux,
  Tailwind,
  Trello,
  Postgresql,
  Mysql,
  Mongodb,
  Firebase,
} from "@/icons";

export default function Skills() {
  return (
    <section
      className="relative z-10 bg-[#F9F7F7] py-16 dark:bg-[#112d4e4d] md:py-20 lg:py-22"
    >
      <div className="container">
        <SectionTitle
          width="650px"
          title="Our Technology Stack"
          paragraph="We leverage cutting-edge tools and frameworks like React, Python, and Tailwind to deliver scalable, high-performance solutions for your business."
          center
        />
        <div className="relative -mt-12 flex h-[300px] w-full flex-col items-center justify-center overflow-hidden md:h-[400px] lg:h-[550px]">
          {/* Inner Orbit: Tools */}
          <OrbitingCircles
            iconSize={40}
            radius={80}
            speed={1.5}
            className="sm:radius-[100px] lg:radius-[120px]"
          >
            <div className="flex h-12 w-12">
              <Jira width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Git width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Jest width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Notion width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Trello width={40} height={40} />
            </div>
          </OrbitingCircles>
          {/* Middle Orbit: Programming Languages */}
          <OrbitingCircles
            iconSize={40}
            radius={150}
            reverse
            speed={2}
            className="sm:radius-[140px] lg:radius-[160px]"
          >
            <div className="flex h-12 w-12">
              <Typescript width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Javascript width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Python width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <NodeJs width={40} height={40} />
            </div>
          </OrbitingCircles>
          {/* Outer Orbit: Frameworks & Databases */}
          <OrbitingCircles
            iconSize={40}
            radius={230}
            speed={0.8}
            className="sm:radius-[200px] lg:radius-[240px]"
          >
            <div className="flex h-12 w-12">
              <NextJs width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <ReactJs width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Redux width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Tailwind width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <MaterialUi width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Mongodb width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Mysql width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Postgresql width={40} height={40} />
            </div>
            <div className="flex h-12 w-12">
              <Firebase width={40} height={40} />
            </div>
          </OrbitingCircles>
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-[#112D4E] to-[#DBE2EF]/50 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-[#F9F7F7] dark:to-[#3F72AF]/50 sm:text-6xl lg:text-7xl">
            Expertise
          </span>
        </div>
      </div>
    </section>
  );
}