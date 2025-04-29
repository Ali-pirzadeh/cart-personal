import React from "react";
import image from "./../assets/shop-sabad.jpg";
import { FaInstagram, FaCircle } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiLike } from "react-icons/bi";

function Main() {
  return (
    <div className="bg-white rounded-md mt-4 w-full">
      <div className="w-full">
        <img
          src={image}
          className="rounded-md w-full h-80 object-fit"
          alt="shop"
        />
      </div>
      <div className="pt-3 flex items-center mx-4">
        <FaInstagram className="text-xl" />
        <h2 className="text-xl ml-2">Premium Views</h2>
      </div>
      <div className="flex items-center pt-3 mx-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-300 text-xl" />
        ))}
        <p className="px-2 text-sm">(33,943 Reviews)</p>
        <IoMdCheckmarkCircleOutline className="bg-black rounded-full text-white" />
      </div>
      <div className="flex items-center pt-3 mx-4">
        <BiLike className="text-xl" />
        <p className="text-sm pl-2">
          99% of buyers have recommended this product
        </p>
      </div>
      <div className="flex items-center pt-3 mx-4">
        <FaCircle className="text-xl text-gray-500" />
        <p className="text-sm pl-2">
          Service Active • Last checked on: April 29, 2025
        </p>
      </div>
    </div>
  );
}

export default Main;
