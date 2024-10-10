import React from "react";

interface propsType {
  topHeading: string;
  mainHeading: string;
  subHeading: string;
}

const SectionTitle: React.FC<propsType> = ({
  topHeading,
  mainHeading,
  subHeading,
}: propsType) => {
  return (
    <div className="text-center space-y-3">
      <p className="text-gray-400 text-xl italic">{topHeading}</p>
      <h2 className="font-extrabold text-3xl">{mainHeading}</h2>
      <p className="text-gray-500 text-xl italic">{subHeading}</p>
      <div className="bg-black h-[2px] w-[100px] mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
