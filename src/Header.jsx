import React from "react";
import { ShoppingBasket, User } from "lucide-react";
import { ReactSvg } from "./ReactSvg";
import { Button } from "./Button";

function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-gray-100">
      <div className="flex items-center space-x-6">
        <span>ReactJourney</span>
        <ReactSvg size={30} />
      </div>
      <div className="flex items-center ml-auto gap-2">
        <Button variant="ghost">
          <ShoppingBasket size={25} />
        </Button>
        <Button variant="ghost">
          <User size={25} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
