import React from 'react'
import Image from 'next/image';
import Talkingtostrangersmalcolmgladwell from "@/public/Talkingtostrangersmalcolmgladwell.webp"; // apni image yahan dalni hai public folder me
import OutliersPaperback from "@/public/Outliers_Paperback.webp"
import Malcolmbook from "@/public/malcolm-book.webp"
import BomberMafia from "@/public/bombermafia.webp"
import davidandgoliath from "@/public/davidandgoliath.webp"
import whatthedogsaw from "@/public/whatthedogsaw.webp"
import thetippingpoint from "@/public/thetippingpoint.webp"
import Navbar from "@/app/(component)/Navbar/Navbar";
import blink from "@/public/blink.webp"
import Footer from '@/(component)/Footer/Footer';
export default function Books() {
  return (
    <>
      <Navbar />
      {/* book 1 */}
      <main className="px-8 py-12 ">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Books</h2>
        {/* Content */}
        <div className=" items-start flex gap-20 max-w-5xl mx-auto justify-center ">

          {/* Left Image */}
          <div className="flex justify-center items-center mt-[2%]">
            <Image src={Malcolmbook} alt="Book Cover" width={140} height={250} />
          </div>

          {/* Right Content */}
          <div className='w-[45%]'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-4xl font-serif">Revenge of the <br /> Tipping Point</h3>
              <a
                href="#"
                className="hover-flash text-white px-6 py-2 text-lg font-light md:mr-[-35px]"
              >
                BUY THE BOOK
              </a>

            </div>

            <p className="text-gray-800 text-xl">
              AN INSTANT NEW YORK TIMES BESTSELLER
              Most Anticipated in: AARP | Associated Press | Time Magazine | Oprah
              Daily | Chicago Tribune | Literary Hub | Publishers Weekly | Publishers
              Lunch Twenty-five years after the publication his groundbreaking first
              book, Malcolm Gladwell...{" "}
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[#E2E3E4] flex justify-center mx-[24%] mt-10'></div>
      </main>
      {/* book 2 */}

      <main className="px-8 ">
        {/* Content */}
        <div className=" items-start flex gap-20 max-w-5xl mx-auto justify-center ">

          {/* Left Image */}
          <div className="flex justify-center items-center mt-[2%]">
            <Image src={BomberMafia} alt="Book Cover" width={140} height={250} />
          </div>

          {/* Right Content */}
          <div className='w-[45%]'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-4xl font-serif">The Bomber <br /> Mafia</h3>
              <a
                href="#"
                className="hover-flash text-white px-6 py-2 text-lg font-light md:mr-[-35px]"
              >
                BUY THE BOOK
              </a>

            </div>

            <p className="text-gray-800 text-xl">
              Dive into this “truly compelling” (Good Morning America) New York Times bestseller that explores how technology and best intentions collide in the heat of war—from the creator and host of the podcast Revisionist History. In The Bomber Mafia, Malcolm Gladwell…{" "}
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[#E2E3E4] flex justify-center mx-[24%] mt-10'></div>
      </main>


      {/* book 3 */}


      <main className="px-8 mt-12">
        {/* Content */}
        <div className=" items-start flex gap-20 max-w-5xl mx-auto justify-center ">

          {/* Left Image */}
          <div className="flex justify-center items-center mt-[2%]">
            <Image src={Talkingtostrangersmalcolmgladwell} alt="Book Cover" width={140} height={250} />
          </div>

          {/* Right Content */}
          <div className='w-[45%]'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-4xl font-serif">Talking to <br /> Strangers</h3>
              <a
                href="#"
                className="hover-flash text-white px-6 py-2 text-lg font-light md:mr-[-35px]"
              >
                BUY THE BOOK
              </a>

            </div>

            <p className="text-gray-800 text-xl">
              Malcolm Gladwell, host of the podcast Revisionist History and author of the #1 New York Times bestseller Outliers, offers a powerful examination of our interactions with strangers—and why they often go wrong. A Best Book of the Year: The Financial Times,…{" "}
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[#E2E3E4] flex justify-center mx-[24%] mt-10'></div>
      </main>



      {/* book 4 */}


      <main className="px-8 mt-12">
        {/* Content */}
        <div className=" items-start flex gap-20 max-w-5xl mx-auto justify-center ">

          {/* Left Image */}
          <div className="flex justify-center items-center mt-[2%]">
            <Image src={davidandgoliath} alt="Book Cover" width={140} height={250} />
          </div>

          {/* Right Content */}
          <div className='w-[45%]'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-4xl font-serif">David and <br /> Goliath</h3>
              <a
                href="#"
                className="hover-flash text-white px-6 py-2 text-lg font-light md:mr-[-35px]"
              >
                BUY THE BOOK
              </a>

            </div>

            <p className="text-gray-800 text-xl">
             Explore the power of the underdog in Malcolm Gladwell’s dazzling examination of success, motivation, and the role of adversity in shaping our lives, from the bestselling author of The Bomber Mafia.Three thousand years ago on a battlefield in ancient Palestine, a…{" "}
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[#E2E3E4] flex justify-center mx-[24%] mt-10'></div>
      </main>


      {/* book 5 */}


      <main className="px-8 mt-12">
        {/* Content */}
        <div className=" items-start flex gap-20 max-w-5xl mx-auto justify-center ">

          {/* Left Image */}
          <div className="flex justify-center items-center mt-[2%]">
            <Image src={whatthedogsaw} alt="Book Cover" width={140} height={250} />
          </div>

          {/* Right Content */}
          <div className='w-[45%]'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-4xl font-serif">What the Dog <br /> Saw</h3>
              <a
                href="#"
                className="hover-flash text-white px-6 py-2 text-lg font-light md:mr-[-35px]"
              >
                BUY THE BOOK
              </a>

            </div>

            <p className="text-gray-800 text-xl">
             Delve into this “delightful” (Bloomberg News) collection of Malcolm Gladwell’s writings from The New Yorker, in which the bestselling author of The Bomber Mafia focuses on “minor geniuses” and idiosyncratic behavior to illuminate the ways all of us organize experience. What is…{" "}
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[#E2E3E4] flex justify-center mx-[24%] mt-10'></div>
      </main>


      {/* book 6 */}


      <main className="px-8 mt-12">
        {/* Content */}
        <div className=" items-start flex gap-20 max-w-5xl mx-auto justify-center ">

          {/* Left Image */}
          <div className="flex justify-center items-center mt-[2%]">
            <Image src={OutliersPaperback} alt="Book Cover" width={140} height={250} />
          </div>

          {/* Right Content */}
          <div className='w-[45%]'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-4xl font-serif">Outliers</h3>
              <a
                href="#"
                className="hover-flash text-white px-6 py-2 text-lg font-light md:mr-[-35px]"
              >
                BUY THE BOOK
              </a>

            </div>

            <p className="text-gray-800 text-xl">
             Malcolm Gladwell, bestselling author of Blink and The Bomber Mafia and host of the podcast Revisionist History, explores what sets high achievers apart—from Bill Gates to the Beatles—in this seminal work from "a singular talent" (New York Times Book Review). In this stunning book, Malcolm…{" "}
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[#E2E3E4] flex justify-center mx-[24%] mt-10'></div>
      </main>


      {/* book 7 */}

      <main className="px-8 mt-12">
        {/* Content */}
        <div className=" items-start flex gap-20 max-w-5xl mx-auto justify-center ">

          {/* Left Image */}
          <div className="flex justify-center items-center mt-[2%]">
            <Image src={blink} alt="Book Cover" width={140} height={250} />
          </div>

          {/* Right Content */}
          <div className='w-[45%]'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-4xl font-serif">Blink</h3>
              <a
                href="#"
                className="hover-flash text-white px-6 py-2 text-lg font-light md:mr-[-35px]"
              >
                BUY THE BOOK
              </a>

            </div>

            <p className="text-gray-800 text-xl">
              From the #1 bestselling author of The Bomber Mafia, the landmark book that has revolutionized the way we understand leadership and decision making. In his breakthrough bestseller The Tipping Point, Malcolm Gladwell redefined how we understand the world around us. Now,…{" "}
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[#E2E3E4] flex justify-center mx-[24%] mt-10'></div>
      </main>


      {/* book 8 */}


      <main className="px-8 mt-12">
        {/* Content */}
        <div className=" items-start flex gap-20 max-w-5xl mx-auto justify-center ">

          {/* Left Image */}
          <div className="flex justify-center items-center mt-[2%]">
            <Image src={thetippingpoint} alt="Book Cover" width={140} height={250} />
          </div>

          {/* Right Content */}
          <div className='w-[45%]'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-4xl font-serif">The Tipping <br /> Point</h3>
              <a
                href="#"
                className="hover-flash text-white px-6 py-2 text-lg font-light md:mr-[-35px]"
              >
                BUY THE BOOK
              </a>

            </div>

            <p className="text-gray-800 text-xl">
              From the bestselling author of The Bomber Mafia: discover Malcolm Gladwell’s breakthrough debut and explore the science behind viral trends in business, marketing, and human behavior. The tipping point is that magic moment when an idea, trend, or social behavior crosses a…{" "}
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[#E2E3E4] flex justify-center mx-[24%] mt-10 mb-[5%]'></div>
      </main>
      <Footer />
    </>
  )
}
