import React from 'react'
import Container from './Container'
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import image from "./../assets/logo.jpg"


function Header() {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={image} className="w-20 h-20 bg-none" />
            <h2 className="text-2xl">Brands</h2>
          </div>
          <div className="flex gap-5 items-center flex-row-reverse">
            <IoPersonSharp className="size-8" />
            <FaShoppingBag className="size-8" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header