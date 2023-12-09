"use client";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Button from "./Button";
import InputField from "./Input/InputField";

export default function Footer() {
  const footerNavs = [
    {
      label: "About",
      items: [
        {
          name: "Our Mission",
        },
        {
          name: "Authenticity",
        },
        {
          name: "Journal",
        },
      ],
    },
    {
      label: "Support",
      items: [
        {
          name: "Track Your Order",
        },
        {
          name: "Delivery & Returns",
        },
        {
          name: "FAQs",
        },
        {
          name: "International Payments",
        },
      ],
    },
  ];

  return (
    <footer className="text-gray-500 bg-color-300 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1 mt-10 space-y-6 justify-between  items-start sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h2 className="text-gray-800 font-bold ">{item.label}</h2>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <p className="hover:underline hover:text-indigo-600">
                    {el.name}
                  </p>
                </li>
              ))}
            </ul>
          ))}
          <div>
            <h4 className="font-bold">Connect with Us</h4>
            <div className="flex">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <FaTwitter />
                </a>
              </li>
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <FaInstagram />
                </a>
              </li>
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <FaFacebook />
                </a>
              </li>
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <FaPinterest />
                </a>
              </li>{" "}
            </div>
          </div>
          <div className="flex flex-col items-start  max-w-lg ">
            <div className="">
              <h4 className="font-bold">Newsletter</h4>
            </div>
            <p className="block pt-4 pb-2">
              Subscribe to our newsletter to get your weekly dose of new
              releases, promotions and special offers.
            </p>{" "}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-3 items-center border rounded-md p-1">
                <InputField intent="text" placeholder="Email Address" />

                <Button intent="secondary" size="default">
                  Sign Up
                </Button>
              </div>
            </form>
            <div className="flex flex-wrap w-full">
              <p>
                Opt out at any time by clicking Unsubscribe at the bottom of any
                of our emails. By signing up you agree with our Terms and
                Conditions and Privacy Policy.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="mt-2 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">Privacy Policy Terms and conditions</div>
      </div>
    </footer>
  );
}
