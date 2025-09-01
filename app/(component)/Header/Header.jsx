import React from "react";
import Image from "next/image";
import "@/app/globals.css";
import malcolm from "@/public/malcolm-book.webp";
import { Link } from "lucide-react";

export default function Header() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <div className="flex justify-center">
          <a href="/RevengeoftheTippingPoint">
          <Image
            src={malcolm}
            alt="Book Cover"
            className="w-64 md:w-96 lg:w-[350px] object-contain shadow"
          />
          </a>
        </div>

        {/* Right Side Text */}
        <div className="text-left">
          {/* Subtitle */}
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium font-serif text-gray-900 mb-3 leading-snug">
            Overstories, Superspreaders, and the Rise of Social Engineering
          </h3>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-black mb-5">
            Revenge of the Tipping Point
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-base font-light md:text-lg leading-relaxed mb-6 max-w-xl">
            Malcolm Gladwell visits the phenomenon of social epidemics and examines
            the ways in which we have learned to tinker with and shape the spread of
            ideas, viruses, and trends—sometimes with great success, sometimes with
            disastrous consequences.
          </p>

          {/* Button */}
          <a href="/RevengeoftheTippingPoint" className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition">
            LEARN MORE
          </a>
        </div>
      </div>

      {/* ---------------------- Buy Section ---------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-center">
        
        {/* Hardcover + Ebook */}
        <div>
          <h2 className=" md:text-3xl font-serif font-medium mb-6">
            Buy the Hardcover and eBook
          </h2>
          <div className="flex justify-center gap-4">
             <button className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition">
            HARDCOVER
          </button>
             <button className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition">
           EBOOK
          </button>
          </div>
        </div>

        {/* Audiobook */}
        <div>
          <h2 className="text-xl md:text-2xl font-serif mb-6">
            Buy the Audiobook
          </h2>
          <div className="flex justify-center">
            <button className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition">
            AUDIOABOOK
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
