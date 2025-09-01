"use client";
import React from 'react'
import Image from 'next/image';
import Talkingtostrangersmalcolmgladwell from "@/public/Talkingtostrangersmalcolmgladwell.webp"; // apni image yahan dalni hai public folder me
export default function YoullAlsoLove() {
  return (
    <>
      <div>
        <h2 className="font-medium font-serif text-4xl text-center mt-24 mb-12">You{"’"}ll Also Love</h2>
      </div>
      {/* You'll Also Love Section */}
      <section className="  text-center">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Book Info */}
          <div className="bg-[#ebebeb] mx-[16%] py-14 px-24 text-left w-[670px]">
            <h3 className="text-3xl font-medium mb-4 font-serif">Talking to Strangers</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-[18px] font-medium">
              Malcolm Gladwell, host of the podcast{" "}
              <em>Revisionist History</em> and author of the{" "}
              <strong>#1 New York Times</strong> bestseller{" "}
              <em>Outliers</em>, offers a powerful examination of our
              interactions with strangers—and why they often go wrong. A Best
              Book of the Year: <em>The Financial Times, Bloomberg, Chicago Tribune,</em> and{" "}
              <em>Detroit Free Press</em>
            </p>
            <a href="#" className="text-red-600 hover:text-black font-medium underline decoration-red-600 underline-offset-2 hover:decoration-black text-[18px]">
              Learn more →
            </a>
          </div>

          {/* Right - Book Image */}
          <div className="flex justify-center items-center">
            <div className="w-[280px] sm:w-[320px] md:w-[380px] aspect-square 
                  rounded-full bg-[#EBEBEB] shadow-lg ring-8 ring-white/60 
                  overflow-hidden flex items-center justify-center">
              <Image
                src={Talkingtostrangersmalcolmgladwell}
                alt="Talking to Strangers Book"
                className="max-w-[70%] h-auto object-contain drop-shadow"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-8 mt-20" >
        <div className="border-l-14 border-b-14 border-[#EBEBEB] pl-8 pb-8">
          {/* Top Row: Heading + Input */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h4 className="font-sans text-lg">
              Don{"’"}t miss news from Little, <br /> Brown
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

    </>
  )
}


