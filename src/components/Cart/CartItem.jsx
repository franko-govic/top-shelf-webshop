import { RiAddLine, RiCloseLine, RiReactjsFill } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { id, title, thumbnail, price, amount } = item;

  const { removeFromCart, amountIncreased, amountDecreased } =
    useContext(CartContext);

  return (
    <div className="flex ">
      <div className="w-full py-6 flex items-center gap-x-4 border-b border-grey">
        <Link to={`/product/${id}`}>
          <img
            src={thumbnail}
            alt={title}
            className="aspect-square max-w-24 rounded  cursor-pointer object-cover"
          />
        </Link>
        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium  text-primary cursor-pointer"
            >
              {title}
            </Link>
            <div
              className="text-gray-500 font-light cursor-pointer hover:text-red-400 transition"
              onClick={() => removeFromCart(id)}
            >
              <RiCloseLine />
            </div>
          </div>
          <div className="flex gap-x-2 text-sm h-8 items-center">
            <div className="flex flex-1 max-w-24 items-center justify-between h-full border text-primary font-medium">
              <div
                className="h-full flex justify-center items-center px-2 cursor-pointer hover:bg-gray-200 hover:scale-105"
                onClick={() => amountDecreased(id)}
              >
                -
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                className="h-full flex justify-center items-center px-2 cursor-pointer  hover:bg-gray-200 hover:scale-105"
                onClick={() => amountIncreased(id)}
              >
                +
              </div>
            </div>
            <div className="flex-1 flex justify-around">${price}</div>
            <div className="flex-1 flex justify-end items-center">{`$ ${
              price * amount
            }`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
