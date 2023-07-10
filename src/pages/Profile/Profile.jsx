import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Profile = () => {
    const {user, loading} = useContext(AuthContext);
    return (
        <div className='card p-5 shadow-lg mt-8 mb-16'>
            <h2 className='text-2xl font-bold text-primary'>Your Profile</h2>
            <div>
                {
                    loading ? "Loading..." : <img className='card shadow-lg' src={user?.photoURL} alt="" /> 
                }
            </div>
            <h3 className='text-xl text-primary font-bold'>{loading ? "Loading..." : user?.displayName}</h3>
            <h3 className='text-xl text-primary font-bold'>{loading ? "Loading..." : user?.email}</h3>
        </div>
    );
};

export default Profile;