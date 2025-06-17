import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full group">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-[#F9F7F7] dark:bg-[#112D4E] text-[#3F72AF] dark:text-[#DBE2EF] mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-xl group-hover:bg-[#3F72AF] group-hover:text-[#F9F7F7] dark:group-hover:bg-[#3F72AF] dark:group-hover:text-[#F9F7F7] transition-all duration-300 shadow-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-[#112D4E] dark:text-[#F9F7F7] group-hover:text-[#3F72AF] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#112D4E]/80 dark:text-[#DBE2EF] pr-[10px] text-base !leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;