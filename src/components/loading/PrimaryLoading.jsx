import React from "react";
import { HashLoader } from "react-spinners";

const PrimaryLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-[6rem]">
      <HashLoader size={100} color="white" />
      <p className="text-gray-500 text-lg mt-[3rem]">
        Give me a moment, I`m on it..
      </p>
    </div>
  );
};

export default PrimaryLoading;
