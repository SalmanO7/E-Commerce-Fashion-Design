import React from "react";

const Hero = () => {
  return (
    <div className="conatainer">
      <div className="relative w-full h-[100vh]">
        <img
          src="assets/hero.jpg"
          alt="name"
          className="w-full h-[100%] object-cover bg-cover bg-fixed sm:bg-top"
        />
        <div className="container text-white absolute top-[65%]  -translate-y-[70%]">
          <div className="flex flex-col h-full justify-center">
            <div>
              <p className="text-xl">Welcome</p>
              <h2 className="uppercase text-4xl font-bold"> We Love Fashion</h2>
              <p className="text-xl ml-16 pt-2">
                Create Something beautiful & timeless
              </p>
              <div className="h-[4px] w-16 my-4 bg-white"></div>
              <p>
                Discover bold colors, finishes, and long-lasting beauty
                <br />
                Shop now for trending makeup essentials that will elevate your
                look.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button className="border border-white px-12 py-2">
                  View More
                </button>
                <button className="border text-black bg-white px-12 py-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
