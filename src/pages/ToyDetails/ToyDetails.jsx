import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    _id,
    name,
    picture,
    price,
    description,
    categories,
    subcategories,
    rating,
    seller,
  } = toyDetails;
  console.log(toyDetails);
  const handleBookToy = (id) => {
    console.log(id);
  };
  return (
    <div className="mt-16 mb-16">
      <div className="grid grid-cols-2 gap-10">
        <div className="p-16">
          <div className="flex justify-center">
            <img src={picture} alt="" className="w-1/2" />
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-bold text-primary">{name}</h2>
            <p className="text-xl text-primary mt-6 mb-2 font-bold">
              Price: ${price}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Categories:</span> {categories}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Subcategories:</span> {subcategories}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Rating:</span> {rating}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Seller:</span> {seller}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Description:</span> {description}
            </p>
          </div>
          <div className="mt-8">
            <Link to={`/checkout/${_id}`}>
              <button
                onClick={() => handleBookToy(_id)}
                className="btn btn-block btn-primary"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
