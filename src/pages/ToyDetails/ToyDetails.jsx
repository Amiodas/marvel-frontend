import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const {_id, name, picture, price, description, categories, subcategories, rating, seller } = toyDetails;
    console.log(toyDetails);
    const handleBookToy = (id) => {
        console.log(id);
    }
    return (
        <div>
            <h2 className='text-2xl'>Details</h2>
            <div>
                <div>
                    <img src={picture} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <h2>Price: ${price}</h2>
                    <h2>Description: {description}</h2>
                    <h2>Categories: {categories}</h2>
                    <h2>Subcategories: {subcategories}</h2>
                    <h2>Rating: {rating}</h2>
                    <h2>Seller: {seller}</h2>
                </div>
                <div>
                    <button onClick={()=>handleBookToy(_id)} className='btn btn-primary'>Checkout</button>
                </div> 
            </div>
        </div>
    );
};

export default ToyDetails;