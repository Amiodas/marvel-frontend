import React, { useEffect, useState } from "react";
import "./ShopByCategory.css";
import ToyCard from "../../../components/ToyCard/ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [displayToys, setDisplayToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCategory, setLoadingCategory] = useState(true);

  useEffect(() => {
    fetch("https://assignment-11-server-lake.vercel.app/toys/")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://assignment-11-server-lake.vercel.app/toyCategory")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoadingCategory(false);
      });
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
  const handleDisplayAllToys = () => {
    setLoading(true);
    setDisplayToys(toys);
    setLoading(false);
  };
  return (
    <div className="mt-16 mb-16">
      <div>
        <div>
          <div data-aos="fade-down">
            <h3 className="text-4xl font-bold text-center text-primary">
              Shop by Category
            </h3>
            <div className="flex justify-center text-center mx-auto mt-5 mb-8">
              <p className="text-gray-600 w-3/4 lg:w-1/2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident sunt dicta illum? Qui illo est nulla laborum ipsa
                deleniti obcaecati in eligendi sed, at illum perferendis
                accusamus, sequi voluptate molestiae.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="flex justify-center">
            <div className="block text-center lg:flex gap-4">
              <h2 className="text-lg text-primary font-semibold">
                Categories:
              </h2>
              <div className="flex gap-4 justify-center lg:justify-start mt-5 lg:mt-0">
                {loadingCategory ? (
                  <span className="loading loading-spinner text-primary"></span>
                ) : (
                  categories.map((category, index) => (
                    <li key={index} className="flex">
                      <a
                        className="btn btn-sm btn-primary text-white"
                        onClick={() => handleDisplayToysByCategory(category)}
                      >
                        {category}
                      </a>
                    </li>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-16">
          <div className="rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mx-8">
              {displayToys.map((toy) => (
                <div key={toy._id} data-aos="fade-zoom-in">
                  <ToyCard loading={loading} toy={toy} />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={handleDisplayAllToys}
                className="btn btn-primary mt-8 px-8 border-0"
              >
                {loading ? "Loading..." : "Show More Toys"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
