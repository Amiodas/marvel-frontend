import React, { useEffect, useState } from "react";
import ToyCard from "../../components/ToyCard/ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [totalToy, setTotalToy] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(totalToy / itemsPerPage);
  console.log(totalPages);
  const pageNumbers = [...Array(totalPages).keys()];
  console.log(pageNumbers);
  const options = [5, 10];

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
        setToys(data);
      });
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    fetch("http://localhost:5000/matchedToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };
  return (
    <div>
      <div className="mt-8 mb-16">
        <div>
          <h2 className="text-xl text-primary font-bold">All toys</h2>
          <div className="grid grid-cols-4 gap-6 mt-5">
            <div className="card-glass min-h-screen rounded-lg p-5">
              <h2 className="text-lg text-primary font-semibold">Categories</h2>
            </div>
            <div className="col-span-3 rounded-lg">
              <div className="grid grid-cols-3 gap-5">
                {toys.map((toy) => (
                  <ToyCard key={toy._id} toy={toy} />
                ))}
              </div>
              <div className="pagination text-center space-x-2">
                <p>Current Page: {currentPage}</p>
                {pageNumbers.map((number, index) => (
                  <button
                    onClick={() => setCurrentPage(number)}
                    key={index}
                    className="btn btn-primary mt-8 border-0"
                  >
                    {number}
                  </button>
                ))}
                <select value={itemsPerPage} onChange={handleSelectChange}>
                  {options.map((option) => (
                    <option key={option} value={option}>
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
