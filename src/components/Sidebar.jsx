import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartItem } from "./Cart/CartItem";
import { RiCloseCircleLine, RiDeleteBinLine } from "@remixicon/react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarClose = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div
      className={`${
        sidebarOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 bottom-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px] border-b border-grey flex flex-col justify-between`}
    >
      <div className="flex justify-between items-center border-b border-grey py-6">
        <h2 className="font-semibold">CART ({cart.length})</h2>
        <button onClick={sidebarClose}>
          <RiCloseCircleLine />
        </button>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="py-6 border-t flex flex-col gap-3">
        <div>
          <form action="" className="flex justify-between gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter coupon"
              className="flex-1 py-2 border border-gray-300 hover:border-black text-center"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-gray-200 text-black font-medium hover:text-white hover:bg-black"
            >
              CONFIRM COUPON
            </button>
          </form>
        </div>
        <div className="w-full  flex justify-between items-center font-medium">
          <div>
            <span>Total: </span>${total}
          </div>
          <div
            className=" 	                          cursor-pointer bg-red-500 text-white w-12 h-12 flex justify-center items-center"
            onClick={clearCart}
          >
            <RiDeleteBinLine />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full uppercase">
          <span className="w-full py-3 text-center font-medium text-white bg-black cursor-pointer">
            VIEW CART
          </span>
          <span className="w-full py-3 text-center font-medium text-black bg-gray-300 cursor-pointer">
            go to CHECKOUT
          </span>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
