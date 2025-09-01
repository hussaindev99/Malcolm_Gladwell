"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, ChevronDown, X } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [cartItems, setCartItems] = useState([]);

  const dropdownRef = useRef(null);
  const pathname = usePathname(); // 👈 current route mil jaega

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(false);
      }
    }
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between text-center items-center px-5 md:px-10 ">
        <h1 className="text-left cursor-pointer md:text-center text-2xl md:text-5xl text-black font-serif font-medium py-6 md:py-9 md:pl-[500px]">
          Malcolm Gladwell
        </h1>

        {/* Cart + Dropdown */}
        <div className="flex items-center gap-2 relative">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="flex items-center gap-1 px-3 py-2 cursor-pointer"
          >
            <ChevronDown size={24} />
          </button>

          {/* Currency Dropdown + Cart */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenCart(true)}
              className="relative flex items-center gap-1 px-3 py-2 cursor-pointer"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </button>

            {/* Dropdown */}
            {openDropdown && (
              <div className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded-lg border p-3 z-50">
                <p className="font-medium text-lg mb-2 text-left">
                  Show price in
                </p>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="currency"
                    value="USD"
                    checked={currency === "USD"}
                    onChange={() => setCurrency("USD")}
                  />
                  USD
                </label>

                <label className="flex items-center gap-2 cursor-pointer mt-1">
                  <input
                    type="radio"
                    name="currency"
                    value="CAD"
                    checked={currency === "CAD"}
                    onChange={() => setCurrency("CAD")}
                  />
                  CAD
                </label>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navbar with Background Image */}
      <nav
        className="flex justify-center border-t-2 border-b-2 border-[#00BEF4] py-4 bg-cover bg-center"
        style={{ backgroundImage: 'url("/backroundimg.png")' }}
      >
        <ul className="flex flex-wrap gap-6 md:space-x-16 font-medium text-2xl text-black">
          <li>
            <Link
              href="/"
              className={`hover:underline hover:decoration-[#00BEF4] ${
                pathname === "/" ? "underline decoration-[#00BEF4]" : ""
              }`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/Books"
              className={`hover:underline hover:decoration-[#00BEF4] ${
                pathname === "/Books" ? "underline decoration-[#00BEF4]" : ""
              }`}
            >
              BOOKS
            </Link>
          </li>
          <li>
            <Link
              href="/AboutMalcolm"
              className={`hover:underline hover:decoration-[#00BEF4] ${
                pathname === "/AboutMalcolm"
                  ? "underline decoration-[#00BEF4]"
                  : ""
              }`}
            >
              ABOUT MALCOLM
            </Link>
          </li>
          <li>
            <Link
              href="/Events"
              className={`hover:underline hover:decoration-[#00BEF4] ${
                pathname === "/Events" ? "underline decoration-[#00BEF4]" : ""
              }`}
            >
              EVENTS
            </Link>
          </li>
          <li>
            <Link
              href="/Podcasts"
              className={`hover:underline hover:decoration-[#00BEF4] ${
                pathname === "/Podcasts" ? "underline decoration-[#00BEF4]" : ""
              }`}
            >
              PODCASTS
            </Link>
          </li>
        </ul>
      </nav>

      {/* Smooth Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 flex justify-end transition-all duration-500 ease-out ${
          openCart ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          onClick={() => setOpenCart(false)}
        ></div>

        {/* Drawer Box */}
        <div
          className={`relative bg-white h-full w-[80%] md:w-[20%] shadow-lg p-5 transform transition-transform duration-500 ease-out ${
            openCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3 mb-3">
            <h2 className="text-lg font-bold">Shopping Cart</h2>
            <button onClick={() => setOpenCart(false)}>
              <X size={22} />
            </button>
          </div>

          {/* Cart Content */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item, i) => (
                <li key={i} className="border-b py-2">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
