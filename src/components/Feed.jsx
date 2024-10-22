import React from "react";
import "../index.css";
import feedcat from "../assets/feedcat.png";
import { useState } from "react";
import cookie2 from "../assets/cookie2.png";
import fish from "../assets/fish.png";
import chocolate from "../assets/chocolate.png";
import catmeow from "../assets/catmeow.mp3";

function Feed() {
  const [show, setShow] = useState(false);
  const [cursor, setCursor] = useState("custom-cursor");

  const setCursorItem = (item) => {
    setCursor(item);
  };
  return (
    <div className="bg-[#c86cbc]">
      <div className={` ${cursor}  p-20 pb-0`}>
        <p className="text-center text-5xl text-white max-sm:text-3xl">
          Feed Your Pet
        </p>
        <div
          className="relative w-fit m-auto"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <img src={feedcat} alt="cat-img" className="h-96 m-auto" />
          <div className="m-auto w-48 h-5 bg-pink-500 rounded-3xl"></div>
          {show && (
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 font-bold text-black bg-white p-2 px-4 w-fit rounded-3xl">
              {cursor === "fish-cursor" ? (
                <span>
                  Yummy
                  <audio autoPlay>
                    <source src={catmeow} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </span>
              ) : (
                <span> I want fish!!!</span>
              )}
            </p>
          )}
        </div>
      </div>
      <p className="text-white text-center mt-14 mb-3 text-xl">
        Select the food item :{" "}
      </p>
      <div className="flex space-x-2 pb-10 justify-center">
        <div
          className={`border border-white rounded-xl p-3 w-fit h-fit ${
            cursor === "custom-cursor" ? "bg-[rgba(255,255,255,0.34)]" : ""
          }`}
        >
          <button onClick={() => setCursorItem("custom-cursor")}>
            <img src={cookie2} alt="img" className="h-20" />
          </button>
        </div>
        <div
          className={`border border-white rounded-xl p-3 w-fit h-fit ${
            cursor === "fish-cursor" ? "bg-[rgba(255,255,255,0.34)]" : ""
          }`}
        >
          <button onClick={() => setCursorItem("fish-cursor")}>
            <img src={fish} alt="img" className="h-20" />
          </button>
        </div>
        <div
          className={`border border-white rounded-xl p-3 w-fit h-fit ${
            cursor === "chocolate-cursor" ? "bg-[rgba(255,255,255,0.34)]" : ""
          }`}
        >
          <button onClick={() => setCursorItem("chocolate-cursor")}>
            <img src={chocolate} alt="img" className="h-20" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
