import React from "react";
import image14 from "../../assets/images/image14.png";
import image15 from "../../assets/images/image15.png";

const TrendSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1211px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center p-4 sm:p-6 bg-gray-50 rounded-lg">
            <div className="w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0">
              <img
                src={image14}
                alt="Summer Cactus & Succulents"
                className=""
              />
            </div>
            <div className="w-full sm:w-1/2 pl-0 sm:pl-6 flex flex-col items-center sm:items-end">
              <h3 className="font-black text-base sm:text-lg leading-[133%] uppercase text-center sm:text-right text-[#3d3d3d] font-family mb-2 sm:mb-3">
                SUMMER CACTUS & SUCCULENTS
              </h3>
              <p className="font-normal text-xs sm:text-sm leading-[171%] text-center sm:text-right text-[#727272] font-family mb-3 sm:mb-4">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-1 px-4 py-2 w-[120px] sm:w-[140px] h-9 sm:h-10 rounded-md bg-[#46a358] font-medium text-xs sm:text-sm leading-[143%] text-white font-family hover:bg-green-700 transition-colors"
              >
                Find More
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8126 8.79431H3.56258"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2748 4.27599C10.2748 4.27599 14.8123 6.72174 14.8123 8.79324C14.8123 10.8662 10.2748 13.3127 10.2748 13.3127"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center p-4 sm:p-6 bg-gray-50 rounded-lg">
            <div className="w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0">
              <img
                src={image15}
                alt="Styling Trends & Much More"
                className=""
              />
            </div>
            <div className="w-full sm:w-1/2 pl-0 sm:pl-6 flex flex-col items-center sm:items-end">
              <h3 className="font-black text-base sm:text-lg leading-[133%] uppercase text-center sm:text-right text-[#3d3d3d] font-family mb-2 sm:mb-3">
                STYLING TRENDS & MUCH MORE
              </h3>
              <p className="font-normal text-xs sm:text-sm leading-[171%] text-center sm:text-right text-[#727272] font-family mb-3 sm:mb-4">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
               <a
                href="#"
                className="inline-flex items-center justify-center gap-1 px-4 py-2 w-[120px] sm:w-[140px] h-9 sm:h-10 rounded-md bg-[#46a358] font-medium text-xs sm:text-sm leading-[143%] text-white font-family hover:bg-green-700 transition-colors"
              >
                Find More
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8126 8.79431H3.56258"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2748 4.27599C10.2748 4.27599 14.8123 6.72174 14.8123 8.79324C14.8123 10.8662 10.2748 13.3127 10.2748 13.3127"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendSection;
