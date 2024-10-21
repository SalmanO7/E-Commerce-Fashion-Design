import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import image1 from "../../assets/pro_1.jpg";
import image2 from "../../assets/pro_2.jpg";
import image3 from "../../assets/pro_3.jpg";
import image4 from "../../assets/pro_4.jpg";

const productsImages = [image1, image2, image3, image4];

const collation = () => {
  return (
    <div className="container pt-[140px]">
      <SectionTitle
        topHeading="Our Products"
        mainHeading="FROM THE NEW COLLECTION"
        subHeading="Check out our new Designs"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsImages.map((img) => {
          return (
            <div
              key={img}
              className="flex flex-col justify-center items-center"
            >
              <img className="mix-blend-color-burn" src={img} alt="images" />
              <button
                className="mt-4 border border-black py-2 px-9 bg-black text-white rounded-md hover:bg-transparent
              hover:text-black
              "
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default collation;
