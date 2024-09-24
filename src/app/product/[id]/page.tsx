"use client";

import React, { useEffect, useState } from "react";
import PrimaryLoading from "@/components/loading/PrimaryLoading";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import { notFound } from "next/navigation";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

const addProductToCart = async (
  userId: number,
  productId: number,
  quantity: number
) => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        date: new Date().toISOString().split("T")[0],
        products: [{ productId: productId, quantity: quantity }],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add product to cart");
    }

    const data = await response.json();
    console.log("New cart object:", data);
    return data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};

const ProductPage: React.FC<{ params: Params }> = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (isLoading) {
    return (
      <div className="mt-[20rem]">
        <PrimaryLoading />
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  const handleAddToCart = async () => {
    const newCart = await addProductToCart(5, product.id, 1);
    console.log("New cart created:", newCart);
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <main className="relative">
      <article className="container mx-auto">
        <PrimaryNavbar />
        <section className="md:flex flex-row justify-between relative my-12">
          <div className="basis-full">
            <div className="relative h-96 w-full">
              <Image
                className="rounded-lg w-full h-full object-cover"
                src={product.image}
                alt={product.title}
                height={256}
                width={256}
              />
            </div>

            <div className="bg-zinc-900 rounded-lg p-5 w-full mt-10">
              <h3 className="text-white text-xl lg:text-2xl">
                {product.title}
              </h3>
              <div className="md:flex items-center"></div>
              <h4 className="text-white text-lg md:text-xl my-10 mb-2">
                Product Description
              </h4>
              <p className="text-gray-500">{product.description}</p>
            </div>

            {/* hide on lg */}
            <div className="md:hidden bg-zinc-900 rounded-lg p-5 w-full mt-10">
              <h4 className="text-white text-lg md:text-xl mb-5">Price</h4>
              <p className="text-cyan-400 text-2xl mb-5">
                ${product.price}
              </p>{" "}
              <button
                onClick={handleAddToCart}
                className="text-center bg-cyan-400 px-5 py-3 rounded-lg mr-10 inline-block w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="basis-1/3 md:pl-5 md:mt-0">
            <div className="hidden md:block bg-zinc-900 rounded-lg p-5 w-full">
              <h4 className="text-white text-xl mb-5">Price</h4>
              <p className="text-cyan-400 text-2xl mb-5">
                ${product.price}
              </p>{" "}
              <div className=" mt-5">
                <button
                  onClick={handleAddToCart}
                  className="text-center bg-cyan-400 px-5 py-3 rounded-lg mr-10 inline-block w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
      {showDialog && (
        <div
          className={
            "absolute z-20 top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center"
          }
        >
          <div
            className="bg-zinc-900 rounded-lg w-96 p-10 space-y-5 text-center absolute"
            style={{ marginTop: "10rem" }}
          >
            <h2 className="text-xl font-semibold mb-4">Success</h2>
            <p className="mb-4">Product has been added to your cart!</p>
            <button
              onClick={handleCloseDialog}
              className="bg-cyan-400 px-5 py-3 rounded-lg text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductPage;
