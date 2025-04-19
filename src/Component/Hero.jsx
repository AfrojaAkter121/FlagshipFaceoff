import React, { useState } from "react";
import bannerImg from "../assets/banner.png";
import Button from "../Pages/Button/Button";

const Hero = ({handleSearch}) => {
  const [searchTxt, setSearchTxt] = useState('')
  
  return (
    <div className="py-12">
      <img src={bannerImg} alt="" className="w-full mx-auto md:w-md " />
      <div>
        <h1 className="font-thin text-7xl text-gray-900 text-center py-4">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500 text-center">
          Best place to browse, search, view details and purchase of top
          flagship phones <br />
          of the current time - FlagshipFaceOff
        </p>

        <form onSubmit={(e) => {
          handleSearch( e , searchTxt)
          setSearchTxt('')
        }} className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24">
          <input
            defaultValue={searchTxt}
            onChange={e => setSearchTxt(e.target.value)}
            className="bg-white border border-gray-400 rounded shadow-md w-2/3 px-4 mt-3 h-12 focus:outline-none focus:shadow-outline mb-3 md:mb-0 md:mr-2"
            type="text"
            placeholder="Search Phone By Name"
          />

          <Button label='Search'></Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
