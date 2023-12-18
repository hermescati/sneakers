import React from "react";
import Link from "next/link";
import SearchBar from "./Input/SearchBar";
import Logo from "./Logo";
import ProfileMenu from "./Profile/ProfileMenu";
import ShoppingCart from "./Cart/ShoppingCart";
import Menu from "@/components/SVGs/icons/menu.svg";

export default function Navbar() {
  return (
    <nav className="flex px-8 lg:px-0 py-4 xs:py-8 sm:gap-14 lg:gap-36 lg:gap-44 justify-between items-center">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="hidden sm:flex sm:grow">
        <SearchBar placeholder="Search by name, brand or inspiration" />
      </div>
      <div className="hidden sm:flex flex gap-8">
        <ShoppingCart />
        <ProfileMenu />
      </div>
      <div className="block sm:hidden">
        <Menu className="text-gray-800" width={32} height={32} />
      </div>
    </nav>
  );
}
