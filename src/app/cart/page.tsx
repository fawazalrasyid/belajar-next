import React from "react";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import { notFound } from "next/navigation";
import Image from "next/image";

const fetchProductDetails = async (productId: number): Promise<Product> => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  const product = await response.json();
  return product;
};

const CartPage = async () => {
  let cart: Cart | null = null;
  let products: Product[] = [];

  try {
    const response = await fetch("https://fakestoreapi.com/carts/user/2");
    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }
    const cartData = await response.json();
    cart = cartData[0];
    products = await Promise.all(
      cart!.products.map(async (cartProduct) => {
        return await fetchProductDetails(cartProduct.productId);
      })
    );
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return notFound();
  }

  return (
    <main className="relative">
      <article className="container mx-auto">
        <PrimaryNavbar />
        {!cart ? (
          <div className="flex flex-col items-center justify-center gap-y-5 my-[10rem]">
            <img className="w-44" src="images/not-found.png" alt="" />
            <div className="flex flex-col items-center">
              <p className="font-bold text-[24px] text-[#F3F3F3]">
                Your cart is empty
              </p>
              <p className="font-bold text-[16px] text-[#6F6F73]">
                Add some products to your cart
              </p>
            </div>
          </div>
        ) : (
          <section className="md:flex flex-row justify-between relative my-12">
            <div className="basis-full">
              <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
              {cart.products.map((cartProduct) => {
                const product = products.find(
                  (p) => p.id === cartProduct.productId
                );
                if (!product) return null;
                return (
                  <div
                    key={product.id}
                    className="flex items-center justify-between bg-zinc-900 p-4 rounded-lg shadow-lg mb-4"
                  >
                    <div className="flex items-center">
                      <Image
                        className="w-20 h-20 object-cover rounded-lg mr-4"
                        src={product.image}
                        alt={product.title}
                        height={80}
                        width={80}
                      />
                      <div>
                        <h2 className="text-lg font-bold">{product.title}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <p className="text-gray-600">
                          Quantity: {cartProduct.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="text-lg font-bold">
                      ${product.price * cartProduct.quantity}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </main>
  );
};

export default CartPage;
