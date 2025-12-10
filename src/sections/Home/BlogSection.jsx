import React from "react";
import number01 from "../../assets/images/number01.png";
import number02 from "../../assets/images/number02.png";
import number03 from "../../assets/images/number03.png";
import number04 from "../../assets/images/number04.png";

const BlogSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1211px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-bold text-2xl sm:text-3xl leading-[53%] text-center text-[#3d3d3d] font-family">
            Our Blog Posts
          </h2>
          <p className="mt-2 font-normal text-xs sm:text-sm leading-[171%] text-center text-[#727272] font-family">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <img 
              src={number01} 
              alt="Cactus & Succulent Care Tips" 
              className="w-full h-auto object-cover mb-3 sm:mb-4"
            />
            <div className="flex items-center flex-wrap justify-center gap-x-1 gap-y-1 font-medium text-xs sm:text-sm leading-[114%] text-[#46a358] font-family mb-2">
              <span>September 12</span>
              <span>|</span>
              <span>Read in 6 minutes</span>
            </div>
            <h3 className="font-bold text-lg sm:text-xl leading-[130%] text-center sm:text-left text-[#3d3d3d] font-family mb-2">
              Cactus & Succulent <br className="hidden sm:block" /> Care Tips
            </h3>
            <p className="font-normal text-xs sm:text-sm leading-[157%] text-[#727272] font-family mb-3 sm:mb-4">
              Cacti are succulents are easy care plants for any home or patio.
            </p>
            <a href="#" className="font-medium text-xs sm:text-sm leading-[114%] text-[#3d3d3d] hover:text-[#46a358] transition-colors font-family flex items-center justify-center sm:justify-start gap-1">
              Read More →
            </a>
          </div>

          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <img 
              src={number02} 
              alt="Top 10 Succulents for Your Home" 
              className="w-full h-auto object-cover mb-3 sm:mb-4"
            />
            <div className="flex items-center flex-wrap justify-center gap-x-1 gap-y-1 font-medium text-xs sm:text-sm leading-[114%] text-[#46a358] font-family mb-2">
              <span>September 13</span>
              <span>|</span>
              <span>Read in 2 minutes</span>
            </div>
            <h3 className="font-bold text-lg sm:text-xl leading-[130%] text-center sm:text-left text-[#3d3d3d] font-family mb-2">
              Top 10 Succulents for Your Home
            </h3>
            <p className="font-normal text-xs sm:text-sm leading-[157%] text-[#727272] font-family mb-3 sm:mb-4">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <a href="#" className="font-medium text-xs sm:text-sm leading-[114%] text-[#3d3d3d] hover:text-[#46a358] transition-colors font-family flex items-center justify-center sm:justify-start gap-1">
              Read More →
            </a>
          </div>

          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <img 
              src={number03}
              alt="Cacti & Succulent Care Tips" 
              className="w-full h-auto object-cover mb-3 sm:mb-4"
            />
            <div className="flex items-center flex-wrap justify-center gap-x-1 gap-y-1 font-medium text-xs sm:text-sm leading-[114%] text-[#46a358] font-family mb-2">
              <span>September 15</span>
              <span>|</span>
              <span>Read in 3 minutes</span>
            </div>
            <h3 className="font-bold text-lg sm:text-xl leading-[130%] text-center sm:text-left text-[#3d3d3d] font-family mb-2">
              Cacti & Succulent <br className="hidden sm:block" /> Care Tips
            </h3>
            <p className="font-normal text-xs sm:text-sm leading-[157%] text-[#727272] font-family mb-3 sm:mb-4">
              Cacti and succulents thrive in containers and because most are..
            </p>
            <a href="#" className="font-medium text-xs sm:text-sm leading-[114%] text-[#3d3d3d] hover:text-[#46a358] transition-colors font-family flex items-center justify-center sm:justify-start gap-1">
              Read More →
            </a>
          </div>

          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <img 
              src={number04}
              alt="Best Houseplants Room By Room" 
              className="w-full h-auto object-cover mb-3 sm:mb-4"
            />
            <div className="flex items-center flex-wrap justify-center gap-x-1 gap-y-1 font-medium text-xs sm:text-sm leading-[114%] text-[#46a358] font-family mb-2">
              <span>September 15</span>
              <span>|</span>
              <span>Read in 2 minutes</span>
            </div>
            <h3 className="font-bold text-lg sm:text-xl leading-[130%] text-center sm:text-left text-[#3d3d3d] font-family mb-2">
              Best Houseplants Room By Room
            </h3>
            <p className="font-normal text-xs sm:text-sm leading-[157%] text-[#727272] font-family mb-3 sm:mb-4">
              The benefits of houseplants are endless. In addition to..
            </p>
            <a href="#" className="font-medium text-xs sm:text-sm leading-[114%] text-[#3d3d3d] hover:text-[#46a358] transition-colors font-family flex items-center justify-center sm:justify-start gap-1">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;