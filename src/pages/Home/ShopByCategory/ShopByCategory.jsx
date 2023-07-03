import React, { useEffect, useState } from "react";
import "./ShopByCategory.css";
import ToyCard from "../../../components/ToyCard/ToyCard";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="mb-16">
      <div>
        <h2 className="text-xl font-bold">Shop by category</h2>
        <div className="grid grid-cols-4 gap-6 mt-5">
          <div className="card-glass rounded-lg p-5">
            <h2 className="text-lg font-semibold">Categories</h2>
          </div>
          <div className="col-span-3 card-glass rounded-lg p-5">
            product by category
            <div className="grid grid-cols-3 gap-5">
              {toys.map((toy) => (
                <ToyCard key={toy.id} toy={toy} />
              ))}
            </div>
            <Link to="/allToys">
              <button className="btn btn-block mt-8 card-glass border-0 hover:card-glass">All Toys</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
