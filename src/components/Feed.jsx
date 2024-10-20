import React from "react";
import "../index.css";
import feedcat from "../assets/feedcat.png"
import { useState } from "react";

function Feed() {
    const [show,setShow]=useState(false)
return (
    <div className="custom-cursor h-[600px] bg-[#c86cbc] p-20">
        <p className="text-center text-5xl text-white underline">Feed Your Pet</p>
        <div 
            className="relative w-fit m-auto"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <img src={feedcat} alt="cat-img" className="h-96 m-auto" />
            <div className="m-auto w-48 h-5 bg-pink-500 rounded-3xl">

            </div>
            {show && (
                <p className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 font-bold text-black bg-white p-2 w-fit rounded-3xl">
                    I want fish!!!
                </p>
            )}
        </div>
    </div>
);
}

export default Feed;
