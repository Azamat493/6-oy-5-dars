import React from "react";
import HeroSection from "../sections/Home/HeroSection";
import BlogSection from "../sections/Home/BlogSection";
import TrendSection from "../sections/Home/TrendSection";
import ProductsSection from "../sections/Home/ProductsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <TrendSection />
      <BlogSection />
    </div>
  );
};

export default Home;
