import Link from "next/link";
import Button from "./Button";
import InputField from "./Input/InputField";
import {
  FaInstagram,
  FaSquareXTwitter,
  FaFacebook,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa6";

export default function Footer() {
  const platformStyle = { color: "font-gray-700", fontSize: 20 };

  const footerLinks = [
    {
      header: "About",
      links: [
        {
          name: "Our Mission",
          href: "/",
        },
        {
          name: "Authenticity",
          href: "/",
        },
        {
          name: "Journal",
          href: "/",
        },
      ],
    },
    {
      header: "Support",
      links: [
        {
          name: "Track Your Order",
          href: "/",
        },
        {
          name: "Delivery & Returns",
          href: "/",
        },
        {
          name: "FAQs",
          href: "/",
        },
        {
          name: "International Payments",
          href: "/",
        },
      ],
    },
  ];

  const socialMedia = {
    header: "Connect with Us",
    links: [
      {
        platform: <FaInstagram style={platformStyle} />,
        href: "/",
      },
      {
        platform: <FaSquareXTwitter style={platformStyle} />,
        href: "/",
      },
      {
        platform: <FaFacebook style={platformStyle} />,
        href: "/",
      },
      {
        platform: <FaTiktok style={platformStyle} />,
        href: "/",
      },
      {
        platform: <FaPinterest style={platformStyle} />,
        href: "/",
      },
    ],
  };

  return (
    <footer className="bg-gray-300 p-8">
      <div className="flex flex-col gap-12 w-full md:mx-auto md:w-11/12 lg:w-10/12">
        {/* Footer Items */}
        <div className="flex flex-wrap gap-y-8 gap-x-12 justify-between">
          {/* Links */}
          {footerLinks.map((item) => (
            <ul className="flex flex-col gap-3">
              <h2 className="text-logo text-gray-900 font-bold">
                {item.header}
              </h2>
              {item.links.map((item) => (
                <li>
                  <Link href={item.href}>
                    <span className="text-span text-gray-700 font-semibold">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
          {/* Social Media */}
          <ul className="flex flex-col gap-3">
            <h2 className="text-logo text-gray-900 font-bold">
              {socialMedia.header}
            </h2>
            <div className="flex gap-4">
              {socialMedia.links.map((item) => (
                <li>
                  <Link href={item.href}>
                    <span className="text-span text-gray-700 font-semibold">
                      {item.platform}
                    </span>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
          {/* Newsletter */}
          <div className="flex flex-col gap-3 w-[400px]">
            <h4 className="text-logo text-gray-900 font-bold">Newsletter</h4>
            <span className="text-span text-gray-700 font-semibold">
              Subscribe to our newsletter to get your weekly dose of new
              releases, promotions and special offers.
            </span>
            <form>
              <div className="flex gap-3">
                <div className="w-1/2 xxs:w-2/3">
                  <InputField intent="text" placeholder="Email Address" />
                </div>
                <div className="w-1/2 xxs:w-1/3">
                  <Button intent="secondary" size="default">
                    Sign Up
                  </Button>
                </div>
              </div>
            </form>
            <span className="text-span text-gray-700 font-semibold">
              Opt out at any time by clicking&nbsp;
              <strong>&ldquo;Unsubscribe&rdquo;</strong>&nbsp;at the bottom of
              any of our emails. By signing up you agree with our&nbsp;
              <Link key={"Terms"} href={"/"} className="font-bold underline">
                Terms and Conditions
              </Link>
              &nbsp;and&nbsp;
              <Link key={"Privacy"} href={"/"} className="font-bold underline">
                Privacy Policy.
              </Link>
            </span>
          </div>
        </div>
        {/* Copyrights */}
        <span className="bg-gray-600 w-full h-px rounded-sm"></span>
        <div className="flex flex-wrap gap-6 justify-between text-gray-700 text-span font-semibold">
          <div className="flex items-center gap-2">
            <p>Privacy Policy</p>
            <span className="w-1 h-1 rounded-sm bg-gray-700" />
            <p>Terms and conditions</p>
          </div>
          <p>Copyrights ©2023 Sneakers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
