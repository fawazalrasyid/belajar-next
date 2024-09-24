"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const PrimaryNavbar = ({}) => {
  const pathName = usePathname();

  return (
    <>
      <header className="flex flex-row items-center justify-between my-5 z-50">
        <Link href="/">
          <img
            src="/svg/terrax.svg"
            width={117}
            height={42}
            alt="TerraX Logo"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-row items-center justify-center space-x-16 text-white">
            <div className="flex mb-10 lg:mb-0 lg:mr-5">
              <input
                className="py-3 px-5 w-96 rounded-l-lg text-black border-0"
                type="text"
                placeholder="What are you looking for?"
              ></input>
              <button className="font-bold rounded-r-lg bg-white p-3 px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M11.552 22.25C5.9254 22.25 1.34448 17.65 1.34448 12C1.34448 6.35 5.9254 1.75 11.552 1.75C17.1785 1.75 21.7594 6.35 21.7594 12C21.7594 17.65 17.1785 22.25 11.552 22.25ZM11.552 3.25C6.74199 3.25 2.83826 7.18 2.83826 12C2.83826 16.82 6.74199 20.75 11.552 20.75C16.3619 20.75 20.2656 16.82 20.2656 12C20.2656 7.18 16.3619 3.25 11.552 3.25Z"
                    fill="#6F6F73"
                  />
                  <path
                    d="M22.0088 23.2499C21.8196 23.2499 21.6304 23.1799 21.481 23.0299L19.4893 21.0299C19.2005 20.7399 19.2005 20.2599 19.4893 19.9699C19.7781 19.6799 20.2561 19.6799 20.5449 19.9699L22.5366 21.9699C22.8254 22.2599 22.8254 22.7399 22.5366 23.0299C22.3872 23.1799 22.198 23.2499 22.0088 23.2499Z"
                    fill="#6F6F73"
                  />
                </svg>
              </button>
            </div>
          </ul>
        </nav>

        <div className="flex">
          <div className="flex justify-center items-center space-x-5">
            <Link href="/cart">
              <img
                className="rounded-full object-cover w-[54px] h-[54px]"
                src="/svg/cart.svg"
              />
            </Link>
            <button className="w-24 h-12 text-white d-flex items-center justify-between font-medium rounded-[11px] bg-gradient-to-r from-cyan-400 to-orange-400 p-[2.5px] hover:cursor-pointer">
              <div
                className="h-full rounded-lg py-2 hover:cursor-pointer"
                style={{ backgroundColor: "#000a14" }}
              >
                Sign In
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default PrimaryNavbar;
