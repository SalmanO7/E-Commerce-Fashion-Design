import React from "react";
interface Propstype {
  img: string;
  title: string;
}

const BlogCard = ({ img, title }: Propstype) => {
  return (
    <div className="space-y-4">
      <img src={img} alt={title} />
      <p className="text-gray-500 font-semibold">Feb 2 2024</p>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-gray-500">
        Ever wondered how top designers, models, and makeup artists create those
        jaw-dropping looks on the runway? Our exclusive coverage of the Fashion
        Glam Show gives you a front-row seat to all the glitz and glamour.
      </p>
      <button className="border py-1 px-4 border-black font-semibold italic">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
