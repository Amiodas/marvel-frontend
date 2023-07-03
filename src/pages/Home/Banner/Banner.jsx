import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mt-6 mb-8 z-0">
      <div className="carousel w-full rounded-lg z-0">
        <div
          id="slide1"
          className="carousel-item relative w-full h-96 rounded-lg"
        >
          <img
            src="/src/assets/images/carousel/carousel_01.jpg"
            className="w-full rounded-lg"
          />
          <div className="absolute transform -translate-y-1/2 left-24 right-5 top-1/2 w-1/4 space-y-6">
            <h3 className="text-4xl font-bold  text-teal-500">
              Our Toy factory
            </h3>
            <p className=" text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              accusantium quaerat delectus libero, aspernatur minima consectetur
              dignissimos iure excepturi dolores.{" "}
            </p>
            <button className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-0 text-white">
              Get More
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <div className="card-item p-5">
          <h3 className="text-xl font-semibold">First step</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card-item p-5">
          <h3 className="text-xl font-semibold">Second step</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card-item p-5">
          <h3 className="text-xl font-semibold">Third step</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card-item p-5">
          <h3 className="text-xl font-semibold">Fourth step</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <div className="card-item p-5">
          <h3 className="text-xl font-semibold">First step</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card-item p-5">
          <h3 className="text-xl font-semibold">Second step</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card-item p-5">
          <h3 className="text-xl font-semibold">Third step</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card-item p-5">
          <h3 className="text-xl font-semibold">Fourth step</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
