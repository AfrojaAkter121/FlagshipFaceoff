import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "./Button/Button";
import { MdBookmarkAdd, MdAddShoppingCart } from "react-icons/md";
import { addCart, addFavorite } from "../Component/Utilitis/LocalStorage";
import { CartContext } from "../Provider/Context";

const PhoneDetails = () => {
    const {cart, setCart,} = useContext(CartContext)
  const { id } = useParams();
  const data = useLoaderData();
  const singlePhones = data.find((phone) => phone.id === parseInt(id));
  const {
    image,
    storage,
    camera_info,
    brand,
    name,
    model,
    price,
    description,
  } = singlePhones;

  const handleFavorite = () => {
    addFavorite(singlePhones)
  }
  const handleCart = () => {
    addCart(singlePhones);
    setCart([...cart, singlePhones])
  }

  return (
    <div className="py-12 w-full">
      <img
        src={image}
        alt=""
        className="w-full mx-auto md:w-auto mb-8 rounded-2xl "
      />
      <div className="flex justify-between">
        <h1 className="font-thin text-7xl">{model}</h1>
        <div className="flex flex-col md:flex-row ml-5 md:ml-0 space-x-4">
          <Button onClick={handleCart} label={<MdAddShoppingCart size={20} />} />
          <Button onClick={handleFavorite} label={<MdBookmarkAdd size={20} />} />
        </div>
      </div>
      <div>{/* Details */}</div>
    </div>
  );
};

export default PhoneDetails;
