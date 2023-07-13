import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = form.seller.value;
    const sellerEmail = form.sellerEmail.value;
    const picture = form.picture.value;
    const name = form.name.value;
    const categories = form.categories.value;
    const subcategories = form.subcategories.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addedToy = {
      seller,
      sellerEmail,
      name,
      picture,
      price,
      categories,
      subcategories,
      rating,
      quantity,
      description,
    };
    console.log(
      seller,
      sellerEmail,
      name,
      picture,
      price,
      subcategories,
      rating,
      quantity,
      description
    );

    fetch("http://localhost:5000/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedToy),
    })
      .then((res) => res.json())
      .then(() => {});
  };
  return (
    <div className="my-16">
      <h3>Add a toy</h3>
      <form onSubmit={handleAddAToy}>
        <div className="grid grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label">Seller Name</label>
            <input
              type="text"
              name="seller"
              defaultValue={user?.displayName}
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Seller Email</label>
            <input
              type="text"
              name="sellerEmail"
              defaultValue={user?.email}
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              readOnly
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label">Picture</label>
            <input
              type="text"
              name="picture"
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="form-control">
            <label className="label">Category</label>
            <input
              type="text"
              name="categories"
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Sub-category</label>
            <input
              type="text"
              name="subcategories"
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Type here"
              className="input border-2 border-gray-200 w-full bg-white"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Type here"
            className="textarea border-2 border-gray-200 w-full bg-white"
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
