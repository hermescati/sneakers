import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Profile from "./Profile";

export default function NavBar() {
  return (
    <div className="bg-white flex mt-2 space-x-4">
      <Logo />
      <SearchBar />
      <Profile />
    </div>
  );
}
