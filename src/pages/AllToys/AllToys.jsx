import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

  const location = useLocation();
  useEffect(() => {
    document.title = "Marvel" + " | " + "All Toys";
  }, [location]);

  useEffect(() => {
    fetch("https://assignment-11-server-lake.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    fetch("https://assignment-11-server-lake.vercel.app/totalToy")
      .then((res) => res.json())
      .then((data) => setTotalToy(data.totalToy));
  }, []);

  useEffect(() => {
    fetch(
      `https://assignment-11-server-lake.vercel.app/matchedToy?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayToys(data);
      });
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    fetch("https://assignment-11-server-lake.vercel.app/matchedToy")
      .then((res) => res.json())
      .then((data) => setDisplayToys(data));
  }, []);

  useEffect(() => {
    fetch("https://assignment-11-server-lake.vercel.app/toyCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  const handleDisplayToysByCategory = (category) => {
    console.log(category);
    const toyByCategory = toys.filter((toy) => toy.category === category);
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

  const handleSelectedFilter = (event) => {
    const selectedOrder = event.target.value;
    fetch(`https://assignment-11-server-lake.vercel.app/toys/${selectedOrder}`)
      .then((res) => res.json())
      .then((data) => setDisplayToys(data));
  };
  return (
    <div>
      <div className="mt-8 mb-16">
        <div>
          <h2 className="text-2xl text-primary">All toys</h2>
          <div className="grid grid-cols-4 gap-6 mt-5">
            <div className="bg-gray-100 rounded-lg p-5">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-primary">
                    Filter by price
                  </span>
                </label>
                <select
                  className="select select-bordered bg-primary mt-2"
                  onChange={handleSelectedFilter}
                >
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
              <h2 className="text-lg text-primary font-semibold mt-5">Categories</h2>
              <ul className="menu rounded-box mt-2">
                {categories.map((category, index) => (
                  <li className="text-gray-600" key={index}>
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
                      src="./images/search.jpg"
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
              <div className="grid gap-5">
                {/* {displayToys.map((toy) => (
                  <ToyCard key={toy._id} toy={toy} />
                ))} */}
                <div className="">
                  {displayToys.length === 0 ? (
                    ""
                  ) : (
                    <div className="grid grid-cols-6 bg-primary p-1 font-bold text-white mb-2">
                      <p className="pl-1">Image</p>
                      <p className="pl-1">Name</p>
                      <p className="pl-1">Seller</p>
                      <p className="pl-1 text-center">Quantities</p>
                      <p className="pl-1 text-center">Price</p>
                      <p className="pl-1">Action</p>
                    </div>
                  )}
                  {displayToys.map((toy) => (
                    <div
                      className="card rounded-none p-3 border-b-2"
                      key={toy._id}
                    >
                      <div className="grid grid-cols-6 items-center gap-4">
                        <div className="flex justify-left">
                          <img
                            src={toy.picture}
                            className="w-24 h-24 rounded-lg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary">
                            {toy.name}
                          </h3>
                        </div>
                        <div>
                          <p className="text-gray-500">Seller: {toy.seller}</p>
                          <p className="text-gray-500">
                            Seller Email: {toy.seller_email}
                          </p>
                        </div>
                        <div>
                          <p className="text-lg text-primary font-bold text-center">
                            <span>{toy.quantity}</span>
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-center">
                            $ {toy.price}
                          </p>
                        </div>
                        <div className="flex gap-5">
                          <Link to={`/toyDetails/${toy._id}`}>
                            <button className="btn btn-primary text-white btn-xs">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
