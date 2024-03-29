import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Marvel" + " | " + "Add a toy";
  }, [location]);

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = form.seller.value;
    const seller_email = form.sellerEmail.value;
    const picture = form.picture.value;
    const name = form.name.value;
    const category = form.category.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addedToy = {
      seller,
      seller_email,
      name,
      picture,
      price,
      category,
      subcategory,
      rating,
      quantity,
      description,
    };

    fetch("https://assignment-11-server-lake.vercel.app/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedToy),
    })
      .then((res) => {
        res.json();
        form.reset();
        toast("New toy added successfully.");
        navigate("/AllToys");
      })
      .then((error) => {
        toast(error.code, error.message);
      });
  };
  return (
    <div className="mt-5 sm:mt-8 mb-8 sm:mb-16 px-6 sm:px-0">
      <ToastContainer />
      <form onSubmit={handleAddAToy} className="card p-6 sm:p-10 shadow-lg">
        <h3 className="text-2xl text-primary mb-5 border-b-4 border-primary pb-3">
          Add a toy
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
          <div className="form-control">
            <label className="label text-gray-600">Seller Name</label>
            <input
              type="text"
              name="seller"
              defaultValue={user?.displayName}
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-600">Seller Email</label>
            <input
              type="text"
              name="sellerEmail"
              defaultValue={user?.email}
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              readOnly
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
          <div className="form-control">
            <label className="label text-gray-600">Picture</label>
            <input
              type="text"
              name="picture"
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8">
          <div className="form-control">
            <label className="label text-gray-600">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-600">Sub-category</label>
            <input
              type="text"
              name="subcategory"
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-600">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label text-gray-600">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-600">Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Type here"
              className="input border border-gray-300 w-full bg-white"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label text-gray-600">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Type here"
            className="textarea border border-gray-300 w-full bg-white"
            required
          />
        </div>
        <div className="mt-8">
          <button type="submit" className="btn btn-block btn-primary">
            Add a toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
