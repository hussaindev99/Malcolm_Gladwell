"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "@/app/globals.css";
import { FaFacebookF, FaTwitter, FaGlobe } from "react-icons/fa";
import { useState } from "react";

// Images
import tippingPoint from "@/public/Tipping-Point_Paperback.webp";
import talkingtostrangers from "@/public/Talkingtostrangersmalcolmgladwell.webp";
import outliers from "@/public/Outliers_Paperback.webp";
import blink from "@/public/Blink_Paperback.webp";
import davidandgoliath from "@/public/davidandgoliath.webp";
import malcolmgladwell from "@/public/MalcolmGladwell.webp";
import Whatthedogsawpaperback from "@/public/What-the-Dog-Saw_Paperback.webp";

export default function YouMayAlsoLike() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false, // loop off
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 924px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 840px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const books = [
    { title: "The Tipping Point", price: "$28.99 CAD", image: tippingPoint },
    { title: "Talking to Strangers", price: "$28.99 CAD", image: talkingtostrangers },
    { title: "Outliers", price: "$28.99 CAD", image: outliers },
    { title: "Blink", price: "$28.99 CAD", image: blink },
    { title: "David and Goliath", price: "$28.99 CAD", image: davidandgoliath },
    { title: "What the Dog Saw", price: "$28.99 CAD", image: Whatthedogsawpaperback },
  ];

  return (
    <>
      <div className="border-b-2 border-gray-300 pb-8">
        <section className="max-w-6xl mx-auto py-12 px-4 relative">
          {/* Heading */}
          <h2 className="text-3xl font-serif text-center mb-8">You May Also Like</h2>

          {/* Slider */}
          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {books.map((book, idx) => (
                <div
                  key={idx}
                  className="keen-slider__slide cursor-pointer flex flex-col items-center text-center"
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    className="h-52 w-auto object-contain shadow-md rounded-md"
                  />
                  <p className="mt-4 font-semibold">{book.title}</p>
                  <p className="text-gray-600">{book.price}</p>
                </div>
              ))}
            </div>

            {/* Prev Button */}
            {loaded && instanceRef.current && currentSlide > 0 && (
              <button
                onClick={() => instanceRef.current?.prev()}
                aria-label="Previous Slide"
                className="absolute cursor-pointer top-1/2 left-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <ChevronLeft className="w-6 h-6 text-[#00bef4]" />
              </button>
            )}

            {/* Next Button */}
            {loaded &&
              instanceRef.current &&
              currentSlide <
                instanceRef.current.track.details.slides.length -
                  instanceRef.current.options.slides.perView && (
                <button
                  onClick={() => instanceRef.current?.next()}
                  aria-label="Next Slide"
                  className="absolute cursor-pointer top-1/2 right-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <ChevronRight className="w-6 h-6 text-[#00bef4]" />
                </button>
              )}
          </div>
        </section>
      </div>

      {/* Newsletter Signup */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-8 mt-10">
        <div className="border-l-14 border-b-14 border-[#EBEBEB] pl-8 pb-8">
          {/* Top Row: Heading + Input */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h4 className="font-sans font-bold text-lg">
              Get recommended reads, deals, <br /> and more from Hachette
            </h4>

            <form className="flex items-center pt-5 border-b pb-3 border-[#EBEBEB] flex-1 md:ml-8">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 text-sm py-2 px-1 outline-none"
              />
              <button
                type="submit"
                className="bg-[#00BEF4] hover:bg-sky-500 text-white text-xs font-bold uppercase px-4 py-3"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Terms */}
          <p className="text-lg font-medium text-gray-700 leading-relaxed mt-10">
            By clicking {"‘"}Sign Up{",’"} I acknowledge that I have read and agree to <br />
            Hachette Book Group’s{" "}
            <a
              href="#"
              className="underline decoration-yellow-400 hover:decoration-black"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline decoration-yellow-400 hover:decoration-black"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </section>

      {/* ---------------------- about malcolm ---------------------- */}
      <section className="flex flex-col mt-6 md:flex-row items-center md:items-start max-w-4xl mx-auto py-10 px-5 gap-8">
        {/* Left Side - Image */}
        <div className="flex-shrink-0">
          <Image
            src={malcolmgladwell}
            alt="Malcolm Gladwell"
            width={250}
            className="shadow-md h-90"
          />
        </div>

        {/* Right Side - Content */}
        <div>
            <div className="border-b border-[#e9eff1] pr-6 mb-6">

          <h1 className="text-4xl font-serif mb-4">Malcolm Gladwell</h1>
          <p className="text-gray-700 leading-relaxed mb-4 font-medium">
            Malcolm Gladwell is also the author of the #1 bestselling{" "}
            <i>Blink: The Power of Thinking Without Thinking</i>. He was a reporter for the{" "}
            <i>Washington Post</i> from 1987 to 1996, working first as a science writer
            and then as New York City bureau chief. Since 1996, he has been a staff writer
            for <i>The New Yorker</i>.
          </p>

          <a
            href="#"
            className="text-blue-600 font-medium hover:underline inline-block mb-6 "
          >
            Learn more about this author →
          </a>

            </div>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b5998] text-white text-xl hover:opacity-80"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1da1f2] text-white text-xl hover:opacity-80"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#205c63] text-white text-xl hover:opacity-80"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
