import React, { useContext, useState } from "react";
import { Sidebar } from "./Sidebar";
import { CartContext } from "../Context/CartContext";
import { RiShoppingBag2Line } from "@remixicon/react";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { itemAmount } = useContext(CartContext);
  return (
    <div className="container mx-auto h-full py-6 flex justify-between items-center ">
      <p>Header</p>

      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="cursor-pointer flex relative  w-fit"
      >
        <RiShoppingBag2Line className="scale-125" />
        <div className="bg-red-500 absolute -right-3 -bottom-3 w-fit h-fit flex justify-center items-center rounded-full px-2 text-white">
          {itemAmount}
        </div>
      </div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
}

export { Header };
