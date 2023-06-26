import React from "react";
import {
  Bars3BottomLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function NavBar() {
  return (
    <nav className="flex w-full h-auto py-4 bg-white shadow-md">
      <div className="sm:hidden flex flex-row justify-between px-2 items-center w-full">
        <div className="p-2">
          <Bars3BottomLeftIcon width={24} height={24} color="#64748b" />
        </div>
        <div className="p-2">
          <Image
            alt="logo"
            src={"https://i.ibb.co/j5DVLGK/sewanagala-logo-with-text.png"}
            width={45}
            height={45}
            priority
          />
        </div>
        <div className="p-2">
          <ShoppingCartIcon width={24} height={24} color="#64748b" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
