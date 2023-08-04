import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Profile = () => {
    const {user, loading} = useContext(AuthContext);
    return (
        <div className='flex justify-center'>
            <div className='card bg-gray-200 rounded-none text-center py-10 mt-12 mb-16 w-1/4'>
            <h2 className='text-xl font-bold text-primary'>Your Profile</h2>
            <div className='my-6 flex justify-center'>
                {
                    loading ? "Loading..." : <img className='card  rounded-none w-32 h-32' src={user?.photoURL} alt="" /> 
                }
            </div>
            <h3 className='text-primary mb-1'>{loading ? "Loading..." : `Name: ${user?.displayName}`}</h3>
            <h3 className='text-primary'>{loading ? "Loading..." : `Email: ${user?.email}`}</h3>
        </div>
        </div>
    );
};

export default Profile;