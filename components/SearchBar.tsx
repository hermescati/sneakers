"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import InputField from "./InputField";

export default function SearchBar() {
  return (
    <div className="relative flex items-center w-full px-4">
      <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
        <CiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>
      <InputField
        intent="default"
        onChange={() => {}}
        placeholder="Search code"
      />
    </div>
  );
}
