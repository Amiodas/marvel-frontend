import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Marvel' + " | " + "My Toys";
  }, [location]);

  useEffect(() => {
    fetch(`https://assignment-11-server-lake.vercel.app/myToys?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "toy-market-place-token"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

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
        fetch(`https://assignment-11-server-lake.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        const remainingToys = myToys.filter((toy) => toy._id !== id);
        setMyToys(remainingToys);
      }
    });
  };
  return (
    <div className="mt-12 mb-16">
      <h3 className="text-2xl text-primary">My toys</h3>
      <div className="mt-8">
        {myToys.length === 0 ? (
          <div className="">
            <div>
              <div className="flex justify-center">
                <img src="./images/empty.png" alt="" />
              </div>
              <div className="text-center">
                <h3 className="text-3xl text-primary">{`You didn't added any item to your marketplace`}</h3>
                <div className="flex justify-center my-5">
                  <p className="text-gray-400 w-1/2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed obcaecati id ut repellat minima dignissimos odio
                    quibusdam, optio aliquam aperiam explicabo dolore quo ad
                    saepe est fugit laudantium, sit adipisci.
                  </p>
                </div>
                <Link to="/addAToy">
                  <button className="btn btn-primary text-white">
                    Add toy From here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          myToys?.map((toy) => (
            <div className="card rounded-lg p-3 border-b-2" key={toy._id}>
              <div className="flex justify-between items-center gap-4">
                <div className="flex justify-left">
                  <img
                    src={toy.picture}
                    className="w-24 h-24 rounded-lg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{toy.name}</h3>
                  <p className="text-gray-500">Seller: {toy.seller}</p>
                  <p className="text-gray-500">
                    Seller Email: {toy.seller_email}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">$ {toy.price}</p>
                </div>
                {/* <div>
                <p className="text-gray-500">{toy.date}</p>
              </div> */}
                <div className="flex gap-5">
                  <Link to={`/toyDetails/${toy._id}`}>
                    <button className="btn btn-primary text-white btn-xs">
                      View Details
                    </button>
                  </Link>
                  <div>
                    <Link to={`/mytoys/edit/${toy._id}`}>
                      <button
                        className="btn btn-xs text-white"
                      >
                        <FontAwesomeIcon icon={faPencil} />
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => handleDeleteToy(toy._id)}
                      className="btn btn-xs text-white"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyToys;
