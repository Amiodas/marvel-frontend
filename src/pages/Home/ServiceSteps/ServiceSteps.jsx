import { faClock, faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceSteps = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center py-16 bg-primary text-white mb-16'>
            <div className='flex justify-center items-center gap-4 mx-6 lg:mx-0 pb-6 lg:pb-0 mb-6 lg-mb-0 lg:border-r-2'>
                <div><FontAwesomeIcon icon={faTruck} className='font-bold w-12 h-12' /></div>
                <div className='text-left'>
                    <h3 className='text-xl'>FAST SHIPPING</h3>
                    <p>Fast Shipping</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 mx-6 lg:mx-0 pb-6 lg:pb-0 mb-6 lg-mb-0 lg:border-r-2'>
                <div><FontAwesomeIcon icon={faCreditCard} className='font-bold w-12 h-12' /></div>
                <div className='text-left'>
                    <h3 className='text-xl'>ONLINE PAYMENT</h3>
                    <p>Payment methods</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 mx-6 lg:mx-0 pb-6 lg:pb-0 mb-6 lg-mb-0 lg:border-r-2'>
                <div><FontAwesomeIcon icon={faPhone} className='font-bold w-12 h-12' /></div>
                <div className='text-left'>
                    <h3 className='text-xl'>24/7 SUPPORT</h3>
                    <p>Unlimited help desk</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <div><FontAwesomeIcon icon={faClock} className='font-bold w-12 h-12' /></div>
                <div className='text-left'>
                    <h3 className='text-xl'>On time Delivery</h3>
                    <p>On time Delivery</p>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceSteps;