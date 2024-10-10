import React from "react";
import MeakupImg from "../../../public/assets/makeup.jpg";

const About = () => {
  return (
    <div className="container  pt-[160px]">
      <div className="flex flex-col justify-center items-center  md:flex-row md:justify-between  gap-10 w-full">
        <img
          className="h-[80%] w-[80%] md:h-[50%] md:w-[50%]"
          src={MeakupImg}
          alt="meakup img"
        />
        <div>
          <h2 className="uppercase text-4xl font-bold">Makeup</h2>
          <p className="px-8 py-1">
          Empowering beauty through premium, cruelty-free makeup that
            enhances your natural glow.
          </p>
          <div className="h-[2px] w-16 mt-2  bg-black"></div>
          <p className="pt-3 text-justify">
            "At Fashion Design, we believe that makeup is more than just a
            beauty routine—it's a form of self-expression and empowerment. Our
            carefully curated collection of high-quality, cruelty-free products
            is designed to bring out the best in every skin tone and style.
            Whether you're going for a bold, glamorous look or something soft
            and natural, we have the perfect products to help you feel confident
            and beautiful. Explore our range and find your new beauty staples
            today!"
          </p>
          <button className="border border-black py-1 hover:bg-black hover:text-white transition-transform  w-[130px] mt-9">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
