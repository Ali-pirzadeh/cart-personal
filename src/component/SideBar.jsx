import React from 'react'
import image from "./../assets/man.jpg";


function SideBar() {
  return (
    <>
      <div className="w-full bg-white rounded-md pb-5 mt-4 md:sticky">
        <img src={image} className="w-full rounded" />
        <div className="text-center mt-1">
          <h2 className="text-2xl mb-2 ">Personal Advisor</h2>
          <p className="text-sm md:text-md ">
            We're here to assist you every step of the way. Chat with us now —
            we're ready to help!
          </p>
        </div>
        <div className="mx-2 pt-4">
          <button className="border-1 rounded-md px-3 py-2 hover:bg-black hover:text-white">Chat new</button>
        </div>
      </div> 
    </>
  );
}

export default SideBar