"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryLoading from "@/components/loading/PrimaryLoading";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import Image from "next/image";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="relative">
      <div className="absolute z-0 top-96 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1365"
          height="1785"
          viewBox="0 0 1365 1785"
          fill="none"
        >
          <g filter="url(#filter0_f_58_1103)">
            <path
              d="M444.333 862.685C697.293 746.314 670.57 981.129 656.158 1084.56L-43.4536 1074C-57.4074 936.891 7.93945 689.233 90.0648 701.312C300.481 732.26 217.925 966.841 444.333 862.685Z"
              fill="#007397"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_58_1103"
              x="-745.34"
              y="0.88623"
              width="2110.12"
              height="1783.67"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="350"
                result="effect1_foregroundBlur_58_1103"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute z-0 bottom-16 right-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1428"
          height="1473"
          viewBox="0 0 1428 1473"
          fill="none"
        >
          <g filter="url(#filter0_f_58_1106)">
            <path
              d="M949.25 822.204C843.304 627.46 1125.7 715.165 1249.72 755.463L1137.6 1193.78C968.515 1161.23 675.945 1045.27 702.317 997.089C769.884 873.637 1044.08 996.506 949.25 822.204Z"
              fill="#007397"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_58_1106"
              x="0.648438"
              y="0.520996"
              width="1949.07"
              height="1893.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="350"
                result="effect1_foregroundBlur_58_1106"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <article className="container mx-auto">
        <PrimaryNavbar />
        <section className="flex flex-row items-center justify-between relative my-12">
          <div className="flex space-x-5 overflow-x-auto">
            <button
              className={`text-white font-bold rounded-lg py-3 px-5 ${"border-2 from-cyan-400 "}`}
            >
              All
            </button>
            <button
              className={`text-white font-bold rounded-lg py-3 px-5 ${"border-2 from-cyan-400 "}`}
            >
              Electronics
            </button>
            <button
              className={`text-white font-bold rounded-lg py-3 px-5 ${"border-2 from-cyan-400 "}`}
            >
              Jewelery
            </button>
            <button
              className={`text-white font-bold rounded-lg py-3 px-5 ${"border-2 from-cyan-400 "}`}
            >
              Men's Clothing
            </button>
            <button
              className={`text-white font-bold rounded-lg py-3 px-5 ${"border-2 from-cyan-400 "}`}
            >
              Women's Clothing
            </button>
          </div>
        </section>
        <section>
          {isLoading ? (
            <div className="mt-[10rem]">
              <PrimaryLoading />
            </div>
          ) : products.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {products.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="bg-zinc-900 rounded-lg p-5"
                >
                  <div className="relative h-[20rem] w-full">
                    <Image
                      className="rounded-lg object-cover h-80 w-full"
                      src={product.image}
                      alt={product.title}
                      height={80}
                      width={80}
                    />
                  </div>
                  <h3 className="text-white text-xl lg:text-2xl truncate mt-3 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-cyan-400 text-lg lg:text-2xl mt-6">
                    ${Number(product.price)}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-y-5">
              <img className="w-44" src="images/not-found.png" alt="" />
              <div className="flex flex-col items-center">
                <p className="font-bold text-[24px] text-[#F3F3F3]">
                  Result Not Found
                </p>
                <p className="font-bold text-[16px] text-[#6F6F73]">
                  Please try again with another keywords or maybe use generic
                  term
                </p>
              </div>
            </div>
          )}
        </section>
        <section>
          <hr className="border-gray-800" />
          <p className="text-gray-500 my-10">
            &copy; 2024 TerraX. All Right Reserved
          </p>
        </section>
      </article>
    </main>
  );
};

export default HomePage;
