import React, { useEffect, useState } from "react";
import "./ShopByCategory.css";
import ToyCard from "../../../components/ToyCard/ToyCard";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [displayToys, setDisplayToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys/")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/toyCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    const data = toys.slice(0, 8);
    setDisplayToys(data);
  }, [toys]);

  const handleDisplayToysByCategory = (category) => {
    console.log(category);
    const toyByCategory = toys.filter((toy) => toy.categories === category);
    console.log(toyByCategory);
    setDisplayToys(toyByCategory);
  };
  return (
    <div className="mb-16">
      <div>
        <h2 className="text-xl text-primary font-bold">Shop by category</h2>
        <div className="bg-gray-100 rounded-lg p-5">
            <h2 className="text-lg text-primary font-semibold">Categories</h2>
              <div className="flex gap-4 mt-2 mb-3s">
              {categories.map((category, index) => (
                <li key={index} className="flex">
                  <a className="btn btn-sm btn-primary" onClick={() => handleDisplayToysByCategory(category)}>{category}</a>
                </li>
              ))}
              </div>
            
          </div>
        <div className="mt-10 mb-16">
          <div className="rounded-lg">
            <div className="grid grid-cols-4 gap-8">
              {displayToys.map((toy) => (
                <ToyCard key={toy._id} toy={toy} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/allToys">
                <button className="btn btn-primary mt-8 px-8 border-0">
                  All Toys
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
