import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myToys")
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myToys/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            // setMessage("An error occurred while deleting the item");
          });

          const remainingToys = myToys.filter((toy) => toy._id !== id)
          setMyToys(remainingToys)
        }
    });
  };
  return (
    <div className="mt-12 mb-16">
      <h3 className="text-2xl text-primary">My toys</h3>
      <div className="mt-8">
        {myToys.map((toy) => (
          <div className="card border rounded-lg p-3 mb-5" key={toy._id}>
            <div className="flex justify-between items-center gap-4">
              <div>
                <button
                  onClick={() => handleDeleteToy(toy._id)}
                  className="btn btn-circle btn-sm"
                >
                  X
                </button>
              </div>
              <div className="flex justify-left">
                <img
                  src={toy.picture}
                  className="w-24 h-24 rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{toy.name}</h3>
                <p className="">Seller: {toy.seller}</p>
                <p>Seller Email: {toy.sellerEmail}</p>
              </div>
              <div>
                <p>$ {toy.price}</p>
              </div>
              <div>
                <p>{toy.date}</p>
              </div>
              <div>
                <Link to={`/toyDetails/${toy._id}`}>
                  <button className="btn btn-primary btn-xs">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
