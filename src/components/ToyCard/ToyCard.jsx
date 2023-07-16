import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ToyCard.css";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const ToyCard = ({ toy, loading }) => {
  const { _id, name, picture, price, rating, seller, subcategories } = toy;
  const handleToyDetails = (id) => {
    console.log(id);
  };
  return (
    <div className="card card-glass p-4">
      {loading ? (
        <div className="text-center my-5">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      ) : (
        <div>
          <img
            src={picture}
            alt=""
            className="w-full h-64 rounded-lg image-gray"
          />
          <h3 className="my-2 text-xl text-primary font-bold">{name}</h3>
          <p className="text-gray-600">Price: $ {price}</p>
          <p className="text-gray-600">Seller name: {seller}</p>
          <p className="text-gray-600">Sub category: {subcategories}</p>
          <p className="text-gray-600">Rating: {rating}</p>
          <Link to={`/toyDetails/${_id}`}>
            <button
              onClick={() => handleToyDetails(_id)}
              className="btn btn-block btn-primary text-white mt-4"
            >
              <FontAwesomeIcon icon={faEye} />
              View Toys
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ToyCard;
