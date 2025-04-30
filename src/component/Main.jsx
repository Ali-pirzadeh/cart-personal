import React, { useState } from "react";
import image from "./../assets/shop-sabad.jpg";
import { FaInstagram, FaCircle } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { MdOutlineCheckCircle } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";



function Main() {
  const [options, setOptions] = useState([
    "100 instagram",
    "200 instagram",
    "300 instagram",
    "500 instagram",
  ]);
  const [selected, setSelected] = useState(options[0]);

  const [instagram, setInstagram] = useState("")
  
  const inputHandeler = (e) => {
    const value = (e.target.value)
    setInstagram(value)
    console.log(value);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === selected) return;

    const newOptions = options.filter((opt) => opt !== value);
    newOptions.unshift(value); 
    setOptions(newOptions);
    setSelected(value);
  };
  
  return (
    <div className="bg-white rounded-md mt-4 w-full mb-4">
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
      <div className="md:flex items-center pt-3 mx-4">
        <div className="flex items-center mr-2">
          <MdOutlineCheckCircle className="text-xl mr-1 text-gray-500" />
          <p> Premium Quality</p>
        </div>
        <div className="flex items-center mr-2">
          <MdOutlineCheckCircle className="text-xl mr-1 text-gray-500" />
          <p> Premium Quality</p>
        </div>
        <div className="flex items-center mr-2">
          <MdOutlineCheckCircle className="text-xl mr-1 text-gray-500" />
          <p> Premium Quality</p>
        </div>
        <div className="flex items-center mr-2">
          <MdOutlineCheckCircle className="text-xl mr-1 text-gray-500" />
          <p> Premium Quality</p>
        </div>
        <div className="flex items-center">
          <MdOutlineCheckCircle className="text-xl mr-1 text-gray-500" />
          <p> Premium Quality</p>
        </div>
      </div>
      <div className="flex items-center pt-3 mx-4">
        <TfiWrite className="text-xl mr-2" />
        <h3 className="text-md md:text-2xl font-bold">Select your Package:</h3>
      </div>
      <div className="flex items-center pt-3 mx-4">
        <select
          value={selected}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow text-gray-800"
        >
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center mt-3 mx-4 border-1 border-gray-400 rounded-md">
        <IoLogoInstagram className="mr-2 text-xl mx-2" />
        <input
          type="text"
          placeholder="instagram"
          value={instagram}
          onChange={inputHandeler}
          className="flex-1 py-3 bg-transparent border-none outline-none focus:ring-0 focus:border-none"
        />
      </div>
    </div>
  );
}

export default Main;
