import React from "react";

const ToyCard = ({ toy }) => {
  const { id, name, picture, price, rating } = toy;
  console.log(toy);
  const handleToyDetails = (id) => {
    console.log(id);
  };
  return (
    <div className="card card-glass p-4">
      <img src={picture} alt="" className="w-full h-64 rounded-lg" />
      <h3 className="my-2 text-xl text-teal-600 font-bold">{name}</h3>
      <p className="text-gray-700">Price: $ {price}</p>
      <p className="text-gray-700">Rating: {rating}</p>
      <button
        onClick={() => handleToyDetails(id)}
        className="btn mt-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-0 text-white"
      >
        View Toys
      </button>
    </div>
  );
};

export default ToyCard;
