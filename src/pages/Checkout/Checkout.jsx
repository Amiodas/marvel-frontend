import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const selectedToy = useLoaderData();
  const {
    _id,
    name,
    picture,
    categories,
    subcategories,
    price,
    rating,
    description,
    manufacturer,
  } = selectedToy;

  console.log(_id);
  const { user } = useContext(AuthContext);
  const handleAddedToMyToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = form.seller.value;
    const sellerEmail = form.sellerEmail.value;
    const name = form.name.value;
    const picture = form.picture.value;
    const categories = form.categories.value;
    const subcategories = form.subcategories.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const manufacturer = form.manufacturer.value;
    const description = form.description.value;
    const date = form.date.value;

    const addedToy = {
      _id: _id,
      seller: seller,
      sellerEmail: sellerEmail,
      name: name,
      picture: picture,
      categories: categories,
      subcategories: subcategories,
      price: price,
      rating: rating,
      manufacturer: manufacturer,
      date: date,
      description: description,
    };

    console.log(addedToy);

    fetch("https://assignment-11-server-lake.vercel.app/myToys/", {
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
    <div className="mt-10 mb-16">
      <div className="card shadow-lg p-10">
      <h3 className="text-2xl text-primary">Checkout</h3>
        <form onSubmit={handleAddedToMyToys} className="mt-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label text-gray-500">Seller Name</label>
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
              <label className="label text-gray-500">Seller Email</label>
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
              <label className="label text-gray-500">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Type here"
                className="input border-2 border-gray-200 w-full bg-white"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-500">Picture</label>
              <input
                type="text"
                name="picture"
                defaultValue={picture}
                placeholder="Type here"
                className="input border-2 border-gray-200 w-full bg-white"
                readOnly
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="form-control">
              <label className="label text-gray-500">Categories</label>
              <input
                type="text"
                name="categories"
                defaultValue={categories}
                placeholder="Type here"
                className="input border-2 border-gray-200 w-full bg-white"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-500">Subcategories</label>
              <input
                type="text"
                name="subcategories"
                defaultValue={subcategories}
                placeholder="Type here"
                className="input border-2 border-gray-200 w-full bg-white"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-500">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Type here"
                className="input border-2 border-gray-200 w-full bg-white"
                readOnly
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="form-control">
              <label className="label text-gray-500">Rating</label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Type here"
                className="input border-2 border-gray-200 w-full bg-white"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-500">Manufacturer</label>
              <input
                type="text"
                name="manufacturer"
                defaultValue={manufacturer}
                placeholder="Type here"
                className="input border-2 border-gray-200 w-full bg-white"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-500">Date</label>
              <input
                type="date"
                name="date"
                placeholder="Type here"
                className="input w-full border border-gray-200 bg-white"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label text-gray-500">Description</label>
            <textarea
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Type here"
              className="textarea border-2 border-gray-200 w-full bg-white"
              readOnly
              required
            />
          </div>
          <div className="text-center mt-12">
            <button type="submit" className="btn btn-block btn-primary">
              Buy Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
