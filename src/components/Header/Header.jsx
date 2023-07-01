import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-base-100 p-3 shadow-lg'>
            <div className='container mx-auto flex justify-between'>
                <h2>Toy</h2>
                <div className='space-x-6'>
                    <Link to="/">Home</Link>
                    <Link to="/">All toys</Link>
                    <Link to="/">My toys</Link>
                    <Link to="/">Add a toy</Link>
                    <Link to="/">Profile</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;