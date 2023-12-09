"use client";

import React from "react";
import SearchBar from "./Input/SearchBar";
import Logo from "./Logo";
import Profile from "./Profile";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white flex mt-2 space-x-4">
      <Link href={"/"}>
        <Logo />
      </Link>
      <SearchBar placeholder="Search by name, brand or inspiration" />
      <Profile />
    </nav>
  );
}
