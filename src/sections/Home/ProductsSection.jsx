import React, { useState, useEffect } from "react";
import Super from "../../assets/images/Super.png";
import { useCart } from "../../context/CartContext";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cart, favorites, addToCart, toggleFavorite } = useCart();
  const [isMobileHover, setIsMobileHover] = React.useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );
        const data = await response.json();
        setProducts(data.slice(0, 9));
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-12 sm:py-16 text-center text-sm sm:text-base">
        Загрузка...
      </div>
    );
  }

  return (
    <section className="pb-12 sm:pb-16 bg-white">
      <div className="max-w-[1211px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="w-full lg:w-64 space-y-5 sm:space-y-6">
            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#3d3d3d] mb-3 sm:mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {[
                  ["House Plants", 33],
                  ["Potter Plants", 12],
                  ["Seeds", 65],
                  ["Small Plants", 39],
                  ["Big Plants", 23],
                  ["Succulents", 17],
                  ["Terrariums", 19],
                  ["Gardening", 13],
                  ["Accessories", 18],
                ].map(([name, count]) => (
                  <li key={name} className="flex justify-between">
                    <a href="#" className="text-[#3d3d3d] hover:text-green-600">
                      {name}
                    </a>
                    <span>({count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#3d3d3d] mb-3 sm:mb-4">
                Price Range
              </h3>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <input
                  type="range"
                  min="39"
                  max="1230"
                  value="1230"
                  className="w-full h-1.5 sm:h-2 bg-gray-200 rounded cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-[10px] sm:text-xs text-[#727272] mb-2 sm:mb-3">
                <span>Price: $39 – $1230</span>
              </div>
              <button className="w-full py-1.5 sm:py-2 bg-green-600 text-white text-xs sm:text-sm rounded-md hover:bg-green-700 transition-colors">
                Filter
              </button>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#3d3d3d] mb-3 sm:mb-4">
                Size
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                {[
                  ["Small", 119],
                  ["Medium", 86],
                  ["Large", 78],
                ].map(([name, count]) => (
                  <li key={name} className="flex justify-between">
                    <a href="#" className="text-[#3d3d3d] hover:text-green-600">
                      {name}
                    </a>
                    <span>({count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src={Super}
                alt="Super Sale"
                className="lg:w-full w-[300px] m-auto h-auto object-cover mt-2 sm:mt-3"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-5 sm:mb-6">
              <div className="flex flex-wrap gap-3">
                <span className="font-bold text-xs sm:text-sm text-[#3d3d3d]">
                  All Plants
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">
                  New Arrivals
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">Sale</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs text-[#3d3d3d]">
                  Sort by:
                </span>
                <select className="border border-gray-300 rounded px-2 py-1 text-[10px] sm:text-xs">
                  <option>Default sorting</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A-Z</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {products.map((product) => {
                const isFavorite = favorites.some(
                  (fav) => fav.id === product.id
                );
                const isInCart = cart.some((item) => item.id === product.id);

                return (
                  <div
                    key={product.id}
                    className="bg-white p-3 sm:p-4 rounded-lg shadow-sm"
                  >
                    <div
                      className="relative mb-3 sm:mb-4 group overflow-hidden"
                      onClick={() => {

                        if (window.innerWidth < 768) {
                          setIsMobileHover((prev) => !prev);
                        }
                      }}
                    >
                      <div className="transition-transform duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-3">
                        <img
                          src={product.image || "/path/to/default-product.jpg"}
                          alt={product.name}
                          className="w-full h-40 sm:h-48 object-cover rounded"
                        />
                      </div>

                      <div
                        className={`
          flex justify-center gap-1.5 sm:gap-2
          transition-all duration-300 mt-2

          ${isMobileHover ? "opacity-100 max-h-20" : "opacity-0 max-h-0"}

          group-hover:max-h-20 group-hover:opacity-100
        `}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (!isInCart) addToCart(product);
                          }}
                          className={`px-2 py-1 cursor-pointer rounded text-white text-xs sm:text-sm transition-colors ${
                            isInCart
                              ? "bg-green-600"
                              : "bg-gray-500 hover:bg-gray-600"
                          }`}
                        >
                          {isInCart ? (
                            "Added"
                          ) : (
                            <i className="fa-solid fa-cart-shopping"></i>
                          )}
                        </button>

                        <button
                          className="w-7 sm:w-8 h-7 sm:h-8 cursor-pointer bg-white rounded-[4px] flex items-center justify-center hover:bg-green-50 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(product);
                          }}
                        >
                          {isFavorite ? (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 sm:w-4 h-3.5 sm:h-4"
                            >
                              {" "}
                              <path
                                d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873Z"
                                fill="#46A358"
                              />{" "}
                            </svg>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 sm:w-4 h-3.5 sm:h-4"
                            >
                              {" "}
                              <path
                                d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873Z"
                                fill="#3D3D3D"
                              />{" "}
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    <h3 className="font-bold text-xs sm:text-sm text-[#3d3d3d] mb-1">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1.5">
                      {product.discount ? (
                        <>
                          <span className="font-bold text-xs sm:text-sm text-green-600">
                            ${product.price}
                          </span>
                          <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        </>
                      ) : (
                        <span className="font-bold text-xs sm:text-sm text-green-600">
                          ${product.price}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    className={`w-7 h-7 sm:w-8 sm:h-8 text-[10px] sm:text-xs rounded flex items-center justify-center font-medium ${
                      num === 1
                        ? "bg-green-600 text-white"
                        : "bg-white border border-gray-300"
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button className="w-7 h-7 sm:w-8 sm:h-8 bg-white border border-gray-300 text-[10px] sm:text-xs rounded flex items-center justify-center font-medium">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
