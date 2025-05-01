import React, { useState } from "react";
import image from "./../assets/shop-sabad.jpg";
import { FaInstagram, FaCircle } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { MdOutlineCheckCircle } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { GoAlertFill } from "react-icons/go";

function Main() {
  const [options, setOptions] = useState([
    "100 instagram",
    "200 instagram",
    "300 instagram",
    "500 instagram",
  ]);
  const [selected, setSelected] = useState(options[0]);

  const [instagram, setInstagram] = useState("");

  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const inputHandeler = (e) => {
    const value = e.target.value;
    setInstagram(value);
    console.log(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === selected) return;

    const newOptions = options.filter((opt) => opt !== value);
    newOptions.unshift(value);
    setOptions(newOptions);
    setSelected(value);
  };

  const handleSelect = (e) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
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
      <div className="flex items-center pt-3 mx-4">
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="item1"
              checked={checkedItems.item1}
              onChange={handleSelect}
              className="accent-blue-500"
            />
            <span> select origin country</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="item2"
              checked={checkedItems.item2}
              onChange={handleSelect}
              className="accent-blue-500"
            />
            <span> choose the Gender of Followers</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="item3"
              checked={checkedItems.item3}
              onChange={handleSelect}
              className="accent-blue-500"
            />
            <span> Organic Delivery</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-4 gap-3 gap-y-3 mt-3 pb-5">
        <div className="flex-[5] border-1 border-gray-200  items-center rounded-md my-auto bg-gray-300 px-2 py-6 ">
          <p className="ml-2 text-xl">your order will start within the next few minutes</p>
        </div>
        <div className="flex-[2] border-2 border-orange-500 rounded-md px-2 py-2 bg-yellow-50">
          <div className="flex items-center">
            <GoAlertFill className="mr-2 text-orange-400 text-xl" />
            <h3 className="text-orange-300 text-2xl">Attention</h3>
          </div>
          <div>
            <p className="text-orange-300 font-bold">Important note before ordering!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
