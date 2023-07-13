import React, { useEffect, useState } from "react";
import ToyCard from "../../components/ToyCard/ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [displayToys, setDisplayToys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalToy, setTotalToy] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(totalToy / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  const options = [5, 10];

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/totalToy")
      .then((res) => res.json())
      .then((data) => setTotalToy(data.totalToy));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:5000/matchedToy?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayToys(data);
      });
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    fetch("http://localhost:5000/matchedToy")
      .then((res) => res.json())
      .then((data) => setDisplayToys(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/toyCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  const handleDisplayToysByCategory = (category) => {
    console.log(category);
    const toyByCategory = toys.filter((toy) => toy.categories === category);
    console.log(toyByCategory);
    setDisplayToys(toyByCategory);
  };

  const handleSearchByToyName = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;

    const toyByCategory = toys.filter(
      (toy) => toy.name.toUpperCase() === search.toUpperCase()
    );
    setDisplayToys(toyByCategory);
  };
  return (
    <div>
      <div className="mt-8 mb-16">
        <div>
          <h2 className="text-xl text-primary font-bold">All toys</h2>
          <div className="grid grid-cols-4 gap-6 mt-5">
            <div className="bg-gray-100 min-h-screen rounded-lg p-5">
              <h2 className="text-lg text-primary font-semibold">Categories</h2>
              <ul className="menu rounded-box mt-5">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a onClick={() => handleDisplayToysByCategory(category)}>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-3 rounded-lg">
              <div>
                <form onSubmit={handleSearchByToyName}>
                  <div className="mb-6 flex gap-4">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search toy by name"
                      className="input border-2 border-gray-200 w-full bg-white"
                    />
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {displayToys.length !== 0 ? (
                ""
              ) : (
                <div className="flex justify-center">
                  <div>
                    <img
                      src="/src/assets/images/search.jpg"
                      className="w-96 h-96"
                      alt=""
                    />
                    <h2 className="text-3xl text-center font bold">
                      No result found.
                    </h2>
                    <p className="text-xl text-center">Please Search again!</p>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-3 gap-5">
                {displayToys.map((toy) => (
                  <ToyCard key={toy._id} toy={toy} />
                ))}
              </div>
              <div className="pagination text-center space-x-2 mt-5">
                <p>Current Page: {currentPage + 1}</p>
                {pageNumbers.map((number, index) => (
                  <button
                    onClick={() => setCurrentPage(number)}
                    key={index}
                    className="btn btn-primary mt-5 border-0"
                  >
                    {number + 1}
                  </button>
                ))}
                <select
                  className="dropdown btn"
                  value={itemsPerPage}
                  onChange={handleSelectChange}
                >
                  {options.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
