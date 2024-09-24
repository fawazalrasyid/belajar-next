import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <section className="md:flex flex-row justify-between relative my-12">
      <div className="basis-full">
        <div className="relative h-96 w-full">
          <div className="rounded-lg w-full h-full object-cover bg-gray-300"></div>
        </div>

        <div className="bg-zinc-900 rounded-lg p-5 w-full mt-10">
          <h3 className="text-white text-xl lg:text-2xl">
            {/* Product Title Placeholder */}
          </h3>
          <div className="md:flex items-center"></div>
          <h4 className="text-white text-lg md:text-xl my-10 mb-2">
            Product Description
          </h4>
          <p className="text-gray-500">
            {/* Product Description Placeholder */}
          </p>
        </div>

        {/* hide on lg */}
        <div className="md:hidden bg-zinc-900 rounded-lg p-5 w-full mt-10">
          <h4 className="text-white text-lg md:text-xl mb-5">Price</h4>
          <p className="text-cyan-400 text-2xl mb-5">
            {/* Product Price Placeholder */}
          </p>
          <button className="text-center bg-cyan-400 px-5 py-3 rounded-lg mr-10 inline-block w-full">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="basis-1/3 md:pl-5 md:mt-0">
        <div className="hidden md:block bg-zinc-900 rounded-lg p-5 w-full">
          <h4 className="text-white text-xl mb-5">Price</h4>
          <p className="text-cyan-400 text-2xl mb-5">
            {/* Product Price Placeholder */}
          </p>
          <div className="mt-5">
            <button className="text-center bg-cyan-400 px-5 py-3 rounded-lg mr-10 inline-block w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;
