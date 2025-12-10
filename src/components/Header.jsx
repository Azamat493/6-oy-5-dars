import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart, favorites } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const favoritesCount = favorites.length;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-999 bg-white ">
      <div className="max-w-[1211px] border-b-[0.30px] border-solid border-[rgba(70,163,88,0.5)] mx-auto w-full px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
  <img src={Logo} alt="GREENSHOP Logo" className="h-8" />
</Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="font-normal text-base text-[#3d3d3d] font-sans hover:font-bold"
            >
              Home
            </a>
            <a
              href="#"
              className="font-normal text-base text-[#3d3d3d] font-sans hover:font-bold"
            >
              Shop
            </a>
            <a
              href="#"
              className="font-normal text-base text-[#3d3d3d] font-sans hover:font-bold"
            >
              Plant Care
            </a>
            <a
              href="#"
              className="font-normal text-base text-[#3d3d3d] font-sans hover:font-bold"
            >
              Blogs
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/favorites"
              className="cursor-pointer hover:text-green-600 relative block"
            >
              <i className="fa-regular fa-heart"></i>
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="cursor-pointer hover:text-green-600 relative block"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="cursor-pointer p-4 flex items-center justify-center gap-1 bg-[#46a358] w-[100px] h-[35px] rounded-md font-medium text-base text-white font-sans hover:bg-green-700 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1592 10.1006H8.125"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7203 7.67053L18.1603 10.1005L15.7203 12.5305"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.6332 6.35823C13.3582 3.3749 12.2415 2.29156 7.79985 2.29156C1.88234 2.29156 1.88234 4.21656 1.88234 9.9999C1.88234 15.7832 1.88234 17.7082 7.79985 17.7082C12.2415 17.7082 13.3582 16.6249 13.6332 13.6416"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Login
            </button>
          </div>
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-full h-0.5 bg-[#3d3d3d]"></span>
            <span className="w-full h-0.5 bg-[#3d3d3d]"></span>
            <span className="w-full h-0.5 bg-[#3d3d3d]"></span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full z-10 bg-white border-b border-gray-100 px-4 pt-6 pb-6 shadow-lg">
            <nav className="flex flex-col gap-5 mb-6">
              <a
                href="/"
                className="font-normal text-base text-[#3d3d3d] font-sans hover:font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="font-normal text-base text-[#3d3d3d] font-sans hover:font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a
                href="#"
                className="font-normal text-base text-[#3d3d3d] font-sans hover:font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Plant Care
              </a>
              <a
                href="#"
                className="font-normal text-base text-[#3d3d3d] font-sans hover:font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </a>
            </nav>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link
                  to="/favorites"
                  className="cursor-pointer hover:text-green-600 relative block"
                >
                  <i className="fa-regular fa-heart"></i>
                  {favoritesCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                      {favoritesCount}
                    </span>
                  )}
                </Link>

                <Link
                  to="/cart"
                  className="cursor-pointer hover:text-green-600 relative block"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>

              <button className="cursor-pointer flex items-center justify-center gap-2 bg-[#46a358] px-4 py-2 rounded-md font-medium text-base text-white font-sans hover:bg-green-700 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1592 10.1006H8.125"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7203 7.67053L18.1603 10.1005L15.7203 12.5305"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.6332 6.35823C13.3582 3.3749 12.2415 2.29156 7.79985 2.29156C1.88234 2.29156 1.88234 4.21656 1.88234 9.9999C1.88234 15.7832 1.88234 17.7082 7.79985 17.7082C12.2415 17.7082 13.3582 16.6249 13.6332 13.6416"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
