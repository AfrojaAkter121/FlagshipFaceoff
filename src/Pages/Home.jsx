import React, { useState } from 'react';
import Hero from '../Component/Hero';
import PhoneContainer from '../Component/PhoneContainer';
import {  useLoaderData } from 'react-router';

const Home = () => {
    const phonesData = useLoaderData()
    const [phones, setPhones] = useState(phonesData)
    const handleSearch = (e, txt) => {
        e.preventDefault();
        if(txt === ''){
           return setPhones(phonesData)
        }
        const searchPhone = phonesData.filter(phone => 
            phone.name.toLowerCase().split('').includes(txt.toLowerCase()) ||
            phone.brand.toLowerCase().split('').includes(txt.toLowerCase())
        )
        setPhones(searchPhone)
    }
    
    return (
        <div>
            <Hero handleSearch={handleSearch}/>
            <PhoneContainer phonesData={phones}/>
        </div>
    );
};

export default Home;