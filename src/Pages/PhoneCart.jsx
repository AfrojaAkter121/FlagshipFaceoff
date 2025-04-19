import React from "react";
import { Link } from "react-router";
import { MdDeleteForever } from "react-icons/md";


const PhoneCart = ({ phone, deleted, handleDelete }) => {
  const { image, model, description, id } = phone;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {model} </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/phone-details/${id}`}>
              <button
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  View Details
                </span>
              </button>
            </Link>
          </div>
        </div>
        {deleted && (
          <div
            onClick={() => handleDelete(id)}
            className="bg-gray-900 ml-5 rounded-full p-2 hover:bg-gray-300 group cursor-pointer absolute top-0 -right-3"
          >
            <MdDeleteForever
              className="text-gray-100 group-hover:text-gray-900"
              size={20}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneCart;
