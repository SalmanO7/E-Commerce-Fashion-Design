import React from "react";

const CategoryData = [
  {
    img: "assets/cat_1.png",
    text1: "Flats",
    text2: "From the Spring",
  },
  {
    img: "assets/cat_2.png",
    text1: "Boots",
    text2: "From the Fall",
  },
  {
    img: "assets/cat_3.png",
    text1: "Sandals",
    text2: "From the Summer",
  },
];

const Category = () => {
  return (
    <div className="container pt-[110px]">
      <div className="grid grid-cols-1 gap-[70px] sm:gap-2 sm:grid-cols-3">
        {CategoryData.map((data) => {
          return (
            <div key={data.text2} className="flex flex-col  gap-4 items-center">
              <img className="w-[120px]" src={data.img} alt={data.text1} />
              <div>
                <h2 className="text-2xl font-bold uppercase">{data.text1}</h2>
                <p>{data.text2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
