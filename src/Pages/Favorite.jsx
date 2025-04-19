import React, { useEffect, useState } from 'react';
import PhoneCart from './PhoneCart';
import { getFavorites, removeFavorite } from '../Component/Utilitis/LocalStorage';
import EmptyState from './Button/EmptyState';

const Favorite = () => {
    const [displayPhone , setDisplayPhone] = useState([])
    useEffect(() => {
        const savePhones = getFavorites()
        setDisplayPhone(savePhones)
    } , [])

    const handleDelete = (id) => {
        removeFavorite(id)
        setDisplayPhone(getFavorites())
    }
    if(displayPhone.length < 1) return <EmptyState></EmptyState>
    return (
        <div className='py-12'> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhone.map(phone => <PhoneCart key={phone.id} phone={phone} deleted={true} handleDelete={handleDelete}></PhoneCart>)
                }
            </div>
        </div>
    );
};

export default Favorite;