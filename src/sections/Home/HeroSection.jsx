import React from "react";
import Screenshot8 from "../../assets/images/Screenshot8.png";

const HeroSection = () => {
  return (
    <section className="py-8 sm:pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1211px] pb-4 pt-4 bg-[linear-gradient(135deg,rgba(245,245,245,0.5)_0%,rgba(245,245,245,0.5)_100%)] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">

          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <h2 className="font-medium text-xs sm:text-sm md:text-base leading-[114%] tracking-widest uppercase text-[#3d3d3d] font-family mb-2">
              WELCOME TO GREENSHOP
            </h2>
            <h1 className="font-black text-[30px] sm:text-[36px] md:text-[50px] lg:text-[70px] leading-[100%] uppercase text-[#3d3d3d] font-family mb-3 sm:mb-4">
              LET'S MAKE A BETTER
              <span className="text-green-600"> PLANET</span>
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base leading-[171%] text-[#727272] font-family mb-4 sm:mb-6">
              We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
            </p>
            <button className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center gap-1 bg-[#46a358] w-[120px] sm:w-[140px] md:w-[160px] h-9 sm:h-10 md:h-12 rounded-md font-medium text-xs sm:text-sm md:text-base text-white font-sans hover:bg-green-700 transition-colors">
              SHOP NOW
            </button>
          </div>

          <div className="w-full sm:w-1/2 flex justify-center">
            <img
              src={Screenshot8}
              alt="Green plant in modern pot"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-2 ">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#46A358" fillOpacity="0.3" />
          </svg>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#46A358" />
          </svg>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#46A358" fillOpacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;