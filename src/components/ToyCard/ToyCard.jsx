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
      <h3 className="my-2 text-xl text-primary font-bold">{name}</h3>
      <p className="text-gray-400">Price: $ {price}</p>
      <p className="text-gray-400">Rating: {rating}</p>
      <button
        onClick={() => handleToyDetails(id)}
        className="btn btn-primary mt-4"
      >
        View Toys
      </button>
    </div>
  );
};

export default ToyCard;
