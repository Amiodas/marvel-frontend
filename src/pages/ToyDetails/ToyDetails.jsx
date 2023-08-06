import React, { useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    name,
    picture,
    price,
    description,
    category,
    subcategory,
    rating,
    seller,
    seller_email,
  } = toyDetails;

  const location = useLocation();
  useEffect(() => {
    document.title = "Marvel" + " | " + "Toy Details";
  }, [location]);
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
              <span className="font-bold">Categories:</span> {category}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Subcategories:</span> {subcategory}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Rating:</span> {rating}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Seller:</span> {seller}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Seller Email:</span> {seller_email}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Description:</span> {description}
            </p>
          </div>
          <div className="mt-8">
            <Link to="">
              <button
                className="btn btn-block btn-primary text-white"
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
