"use client";
import Image from "next/image";
import malcolm from "@/public/MalcolmGladwell.webp"; 
import Footer from "@/app/(component)/Footer/Footer";
import Navbar from "@/app/(component)/Navbar/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="w-full px-6 md:px-16 lg:px-16 py-12">
        {/* Grid Layout */}
        <section className="">
          {/* Top Side Image */}
          <div className="flex justify-center mt-14 mb-8 md:mb-0">
            <Image
              src={malcolm}
              alt="Malcolm Gladwell"
              width={300}
              height={300}
              className="h-auto w-auto max-w-[80%] md:max-w-[300px]"
            />
          </div>

          {/* Content Section */}
          <div
            className="mt-10 md:mt-20 bg-cover bg-center bg-no-repeat h-auto md:h-[600px] mx-[5%] md:mx-[10%] px-[5%] md:px-[10%] pt-[5%] border-r-8 border-[#D6DF24]"
            style={{ backgroundImage: "url('/backroundimg.png')" }}
          >
            <h2 className="text-2xl md:text-4xl font-serif mb-4">
              About Malcolm
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed mb-6">
              Malcolm Gladwell is the author of five New York Times bestsellers —
              The Tipping Point, Blink, Outliers, What the Dog Saw, and David and
              Goliath. He is also the co-founder of Pushkin Industries, an audio
              content company that produces the podcasts Revisionist History,
              which reconsiders things both overlooked and misunderstood, and
              Broken Record, where he, Rick Rubin, and Bruce Headlam interview
              musicians across a wide range of genres. Gladwell has been included
              in the TIME 100 Most Influential People list and touted as one of
              Foreign Policy’s Top Global Thinkers.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#"
                className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition text-center"
              >
                TWITTER
              </a>
              <a
                href="#"
                className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition text-center"
              >
                INSTAGRAM
              </a>
              <a
                href="#"
                className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition text-center"
              >
                FACEBOOK
              </a>
            </div>

            {/* Events Section */}
            <h2 className="text-2xl md:text-4xl font-serif my-12 justify-center flex text-center items-center">
              Events
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed mb-20 md:mb-40">
              <span className="font-medium cursor-pointer hover:text-black hover:underline hover:decoration-black underline decoration-[#d6df24]">
                Click here
              </span>{" "}
              to find out when and where Malcolm Gladwell’s next tour will be.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
