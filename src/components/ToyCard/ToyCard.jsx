import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, name, picture, price, rating } = toy;
  const handleToyDetails = (id) => {
    console.log(id);
  };
  return (
    <div className="card card-glass p-4">
      <img src={picture} alt="" className="w-full h-64 rounded-lg" />
      <h3 className="my-2 text-xl text-primary font-bold">{name}</h3>
      <p className="text-gray-400">Price: $ {price}</p>
      <p className="text-gray-400">Rating: {rating}</p>
      <Link to={`/toyDetails/${_id}`}>
        <button
          onClick={() => handleToyDetails(_id)}
          className="btn btn-primary mt-4"
        >
          View Toys
        </button>
      </Link>
    </div>
  );
};

export default ToyCard;
