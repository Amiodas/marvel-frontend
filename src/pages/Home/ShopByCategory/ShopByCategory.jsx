import React, { useEffect, useState } from "react";
import "./ShopByCategory.css";
import ToyCard from "../../../components/ToyCard/ToyCard";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [displayToys, setDisplayToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys/")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    const data = toys.slice(0, 6);
    setDisplayToys(data);
  }, [toys]);
  return (
    <div className="mb-16">
      <div>
        <h2 className="text-xl text-primary font-bold">Shop by category</h2>
        <div className="grid grid-cols-4 gap-6 mt-5">
          <div className="card-glass min-h-screen rounded-lg p-5">
            <h2 className="text-lg text-primary font-semibold">Categories</h2>
          </div>
          <div className="col-span-3 rounded-lg">
            <div className="grid grid-cols-3 gap-5">
              {displayToys.map((toy) => (
                <ToyCard key={toy._id} toy={toy} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className=""></div>
          <div className="text-center col-span-3">
              <Link to="/allToys">
                <button className="btn btn-primary mt-8 px-8 border-0">
                  All Toys
                </button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
