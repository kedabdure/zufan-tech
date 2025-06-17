import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="services" className="bg-[#DBE2EF] dark:bg-[#112D4E]/50 py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="container">
        <SectionTitle
          width="700px"
          title="Our Core Services"
          paragraph="We deliver comprehensive, reliable, and forward-thinking technology solutions that empower businesses to grow, innovate, and stay ahead in an ever-evolving digital landscape."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;