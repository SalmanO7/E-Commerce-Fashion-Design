import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import image1 from '../../assets/post_1.jpg'
import image2 from '../../assets/post_2.jpg'
import image3 from '../../assets/post_3.jpg'
import BlogCard from "./card/BlogCard";

const blogs = [
  {
    img: image1,
    title: "FASHION GLAM SHOW",
  },
  {
    img: image2,
    title: "NEW YORK STYLE",
  },
  {
    img: image3,
    title: "L'AMOUR IN GLAMOUR",
  },
];

const Blog = () => {
  return (
    <div className="container pt-[240px]">
      <SectionTitle
        topHeading="Latest News"
        mainHeading="FROM THE BEAUTY OF WORLD"
        subHeading="Check out some of the stand outs trends"
      />

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-16">
        {blogs.map((cardData) => {
          return (
            <BlogCard
              key={cardData.title}
              img={cardData.img}
              title={cardData.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
