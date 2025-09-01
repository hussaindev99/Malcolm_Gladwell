"use client";
import React, { useState } from "react";
import Navbar from "@/app/(component)/Navbar/Navbar";
import Image from "next/image";
import YouMayAlsoLike from "@/app/(component)/YouMayAlsoLike/YouMayAlsoLike";
import MalcolmBook from "@/public/malcolm-book.webp";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Footer from "@/app/(component)/Footer/Footer";

export default function RevengeoftheTippingPoint() {
    const formats = [
        { name: "Hardcover", price: 41.0, currency: "CAD" },
        { name: "ebook", price: 20.99, currency: "CAD" },
        { name: "Trade Paperback", price: 28.99, currency: "CAD" },
        { name: "Audiobook Download (Unabridged)", price: 0, currency: "CAD" },
    ];

    // Hooks
    const [selectedFormat, setSelectedFormat] = useState(formats[0]);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isContinueReading, setIsContinueReading] = useState(false);
    const [isPraiseOpen, setIsPraiseOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Praises array
    const praises = [
        {
            quote:
                "In Revenge of the Tipping Point, splashy theories abound, as they do in Gladwell’s podcast, Revisionist History… He turns the conceit [of The Tipping Point] on its head, examining the forces that drive negative epidemics, which to him felt more attuned to our present moment.",
            author: "Emma Goldberg, New York Times",
        },
        {
            quote: "Rigorously researched—but always with a witty flair—it’s a must-read for longtime Gladwell fans or readers simply curious about the quiet, surprising origin stories of the crises and questions that define contemporary life.",
            author: "Francesca Billington, Oprah Daily"
        },
        {
            quote: "Brimming with fun and insightful anecdotes…Revenge of the Tipping Point will leave you pondering Gladwell’s theories and asking more questions…The book explores how individuals can use power and influence to shape…the collective narratives we tell ourselves as groups or as a society — and in so doing steward policies and perspectives.",
            author: " Alex Tapscott, New York Post"
        },
        {
            quote: "To his adept synthesis of academic research he adds journalistic curiosity, a crisp prose style and a mastery of counter-intuitive juxtapositions. Often beginning with a conundrum, he seeks out case studies and concepts that illuminate it, altering (slightly or radically) our understanding of the world.",
            author: "Julia M. Klein, Los Angeles Times"
        },
        {
            quote: "Gladwell gives us a sort of interactive nonfiction, not unlike a detective story…Revenge of the Tipping Point essentially asks why we were all so ready to think anything that spreads like a virus could be good for us. In the first book we had connectors, mavens and salesmen. Now we have overstories, superspreaders and social engineering…The match that so elegantly graced the cover of The Tipping Point is now on fire.",
            author: " Frank Rose, Wall Street Journal"
        },
        {
            quote: "The long-awaited follow-up to The Tipping Point, Malcolm Gladwell’s groundbreaking 2000 debut, explores the watershed moments that define this new age of societal upheaval…with curiosity and humor.",
            author: " Shannon Carlin, TIME Magazine"
        },
        {
            quote: "Gladwell is a great storyteller and writes with a contagious sense of curiosity, with each revelation seeming as exciting to him as it is to readers…Revenge of the Tipping Point provides an opportunity to assess his success and his critics’ arguments.",
            author: " Economist"
        },
        {
            quote: "An astute and bracing appraisal of how cultures succeed or fail...Gladwell deftly demonstrates how attention to statistics and data points can shape a business, school, or community.",
            author: " Booklist"
        },
        {
            quote: "Thoughtful, carefully written...Refining and deepening his and our understanding of the spread of customs, mores, and practices, Gladwell emphasizes those overstories, illustrating them with twisting and turning tales.",
            author: " Kirkus Reviews (starred)"
        },
    ];

    const visiblePraises = expanded ? praises : praises.slice(0, 3);

    return (
        <div>
            <Navbar />
            <main className="w-full px-6 md:px-20 py-12 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Section - Sticky Image */}
                    <div className="md:sticky md:top-8 md:h-screen flex justify-center items-start">
                        <Image
                            src={MalcolmBook}
                            alt="Revenge of the Tipping Point"
                            width={450}
                            height={600}
                            className="rounded-lg shadow-md object-contain"
                        />
                    </div>

                    {/* Right Section - Scrollable Content */}
                    <div className="w-[90%] md:w-[80%] mx-auto">
                        <h1 className="text-4xl md:text-5xl font-serif mb-3">
                            Revenge of the Tipping Point
                        </h1>
                        <p className="text-lg text-gray-700 mb-4">
                            Overstories, Superspreaders, and the Rise of Social Engineering
                        </p>
                        <p className="text-gray-900 text-lg font-medium mb-2">
                            By <span className="font-semibold">Malcolm Gladwell</span>
                        </p>

                        <div className=" font-medium text-gray-700 mb-2 text-[17px] gap-6 grid grid-cols-2">
                            <div>
                                <p>
                                    <span className="font-bold text-black">On Sale:</span> Oct 1, 2024
                                </p>
                                <p>
                                    <span className="font-bold mt-2 text-black">Publisher:</span> Little, Brown and Company
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-bold text-black">Page Count:</span> 368 pages
                                </p>
                                <p>
                                    <span className="font-bold text-black">ISBN-13:</span> 9780316575805
                                </p>
                            </div>

                        </div>

                        {/* Price */}
                        <p className="text-2xl font-bold text-black my-4 border-b-2 border-gray-300 pb-8">
                            {selectedFormat.price > 0
                                ? `$${selectedFormat.price.toFixed(2)} ${selectedFormat.currency}`
                                : "Free with Subscription"}
                        </p>

                        {/* Format Selection */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-7 pt-4">Format:</h3>
                            <div className="grid grid-cols-3 gap-3 border-b-2 border-gray-300 pb-7">
                                {formats.map((format, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedFormat(format)}
                                        className={`border text-sm font-medium py-10 transition flex flex-col items-center justify-center h-[50px] w-40
          ${selectedFormat.name === format.name
                                                ? "border-black bg-gray-100"
                                                : "border-gray-400 hover:border-black"
                                            }`}
                                    >
                                        <div>{format.name}</div>
                                        {format.price > 0 && (
                                            <div className="text-gray-600 text-xs">
                                                ${format.price} {format.currency}
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>


                        {/* Add to Cart Button */}
                        <button
                            class="relative inline-flex cursor-pointer items-center justify-center overflow-hidden tracking-tighter hover:text-white bg-[#d6df24] hover:bg-black group transition-colors duration-500 mt-6 w-full   px-7 py-3 rounded-4xl font-semibold text-lg "
                        >
                            <span
                                class="absolute w-0 h-0 transition-all duration-500 ease-out  group-hover:w-56 group-hover:h-56"
                            ></span>
                            <span class="absolute bottom-0 left-0 h-full -ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-auto h-full opacity-100 object-stretch"
                                    viewBox="0 0 487 487"
                                >
                                    <path
                                        fill-opacity=".1"
                                        fill-rule="nonzero"
                                        fill="#FFF"
                                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                    ></path>
                                </svg>
                            </span>
                            <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="object-cover w-full h-full"
                                    viewBox="0 0 487 487"
                                >
                                    <path
                                        fill-opacity=".1"
                                        fill-rule="nonzero"
                                        fill="#FFF"
                                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                    ></path>
                                </svg>
                            </span>
                            <span
                                class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                            ></span>
                            <span class="relative text-base font-semibold"> Add to Cart</span>
                        </button>
                        <div className="mt-12">
                            {/* Buy from Other Retailers */}
                            <h3 className="text-lg font-semibold mb-7">Buy from Other Retailers:</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {[
                                    "Amazon",
                                    "Barnes & Noble",
                                    "Books-A-Million",
                                    "Bookshop",
                                    "Target",
                                    "Walmart",
                                ].map((retailer, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        target="_blank"
                                        className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden tracking-tighter hover:text-white bg-[#00BEF4]  group transition"
                                    >
                                        {/* Hover expanding circle */}
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>

                                        {/* Left SVG effect */}
                                        <span className="absolute bottom-0 left-0 h-full -ml-2 opacity-20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-auto h-full object-stretch"
                                                viewBox="0 0 487 487"
                                            >
                                                <path
                                                    fillOpacity=".1"
                                                    fillRule="nonzero"
                                                    fill="#FFF"
                                                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                                ></path>
                                            </svg>
                                        </span>

                                        {/* Right SVG effect */}
                                        <span className="absolute top-0 right-0 w-12 h-full -mr-3 opacity-20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="object-cover w-full h-full"
                                                viewBox="0 0 487 487"
                                            >
                                                <path
                                                    fillOpacity=".1"
                                                    fillRule="nonzero"
                                                    fill="#FFF"
                                                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                                ></path>
                                            </svg>
                                        </span>

                                        {/* Gradient overlay */}
                                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>

                                        {/* Text */}
                                        <span className="relative text-sm font-semibold">
                                            {retailer.toUpperCase()}
                                        </span>
                                    </a>
                                ))}
                            </div>


                            {/* Description Section */}
                            <div className="border-b border-gray-300 py-4">
                                <button
                                    onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                                    className="flex justify-between w-full text-lg cursor-pointer font-serif"
                                >
                                    Description
                                    <span>{isDescriptionOpen ? <MdKeyboardArrowDown className="h-6 w-6" /> : <MdKeyboardArrowUp className="h-6 w-6" />}</span>
                                </button>

                                {isDescriptionOpen && (
                                    <div className="mt-4 text-gray-800">
                                        <p className="font-bold">AN INSTANT <em className="font-light">NEW YORK TIMES</em> BESTSELLER</p>
                                        <p className="font-bold mt-2">
                                            Most Anticipated in:
                                            <br />
                                            AARP | Associated Press | Time Magazine | Oprah Daily | Chicago Tribune | Literary Hub......
                                        </p>

                                        {!isContinueReading ? (
                                            <button
                                                onClick={() => setIsContinueReading(true)}
                                                className="mt-4 underline text-sm cursor-pointer text-gray-900 hover:text-black font-medium flex items-center"
                                            >
                                                Continue Reading <span className="flex items-center mt-1"><MdKeyboardArrowDown className="h-6 w-6" /></span>
                                            </button>
                                        ) : (
                                            <>
                                                <div className=" space-y-4 leading-relaxed">
                                                    <p className="font-bold">Publishers Weekly | Publishers Lunch …</p>
                                                    <p className="font-bold text-sm">Twenty-five years after the publication of his groundbreaking first book, Malcolm Gladwell returns with a brand-new volume that reframes the lessons of The Tipping Point in a startling and revealing light.</p>
                                                    <p>Why is Miami…Miami? What does the heartbreaking fate of the cheetah tell us about the way we raise our children? Why do Ivy League schools care so much about sports? What is the Magic Third, and what does it mean for racial harmony? In this provocative new work, Malcolm Gladwell returns for the first time in twenty-five years to the subject of social epidemics and tipping points, this time with the aim of explaining the dark side of contagious phenomena.</p>
                                                    <p>Through a series of riveting stories, Gladwell traces the rise of a new and troubling form of social engineering. He takes us to the streets of Los Angeles to meet the world{"’"}s most successful bank robbers, rediscovers a forgotten television show from the 1970s that changed the world, visits the site of a historic experiment on a tiny cul-de-sac in northern California, and offers an alternate history of two of the biggest epidemics of our day: COVID and the opioid crisis. Revenge of the Tipping Point is Gladwell{"’"}s most personal book yet. With his characteristic mix of storytelling and social science, he offers a guide to making sense of the contagions of modern world. It{'’'}s time we took tipping points seriously.</p>
                                                </div>

                                                <button
                                                    onClick={() => setIsContinueReading(false)}
                                                    className="mt-4 underline text-sm cursor-pointer text-gray-900 hover:text-black font-medium flex items-center"
                                                >
                                                    See Less <span className="mt-1 justify-center "><MdKeyboardArrowUp className="h-6 w-6" /></span>
                                                </button>
                                            </>
                                        )}

                                        <div className="mt-6">
                                            <button
                                                class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter hover:text-white bg-[#00BEF4] hover:bg-black group transition-colors duration-500"
                                            >
                                                <span
                                                    class="absolute w-0 h-0 transition-all duration-500 ease-out  group-hover:w-56 group-hover:h-56"
                                                ></span>
                                                <span class="absolute bottom-0 left-0 h-full -ml-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-auto h-full opacity-100 object-stretch"
                                                        viewBox="0 0 487 487"
                                                    >
                                                        <path
                                                            fill-opacity=".1"
                                                            fill-rule="nonzero"
                                                            fill="#FFF"
                                                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="object-cover w-full h-full"
                                                        viewBox="0 0 487 487"
                                                    >
                                                        <path
                                                            fill-opacity=".1"
                                                            fill-rule="nonzero"
                                                            fill="#FFF"
                                                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span
                                                    class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                                                ></span>
                                                <span class="relative text-base font-semibold"> Request Desk/Exam Copy</span>
                                            </button>


                                        </div>

                                        <div className="mt-6">
                                            <span className="font-semibold">Genre:</span>
                                            <div className="flex flex-wrap gap-4 mt-2">
                                                <span className="px-3 py-1 bg-gray-100 rounded-full">Nonfiction</span>
                                                <span className="px-3 py-1 bg-gray-100 rounded-full">Psychology</span>
                                                <span className="px-3 py-1 bg-gray-100 rounded-full">Social Psychology</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Praise Section */}
                            <div className="border-b border-gray-300 py-4">
                                <button
                                    onClick={() => setIsPraiseOpen(!isPraiseOpen)}
                                    className="flex justify-between w-full text-lg cursor-pointer font-serif"
                                >
                                    Praise
                                    <span>{isPraiseOpen ? <MdKeyboardArrowDown className="h-6 w-6" /> : <MdKeyboardArrowUp className="h-6 w-6" />}</span>
                                </button>

                                {isPraiseOpen && (
                                    <div className="mt-4 space-y-6">
                                        {visiblePraises.map((item, idx) => (
                                            <blockquote
                                                key={idx}
                                                className="bg-gray-50 border-l-4 border-blue-500 p-4 shadow-sm"
                                            >
                                                <p className="italic font-medium text-gray-800 p-6">“{item.quote}”</p>
                                                <footer className="mt-2 text-gray-600 text-sm text-right">— {item.author}</footer>
                                            </blockquote>
                                        ))}

                                        <div className="mt-4 text-center">
                                            <button
                                                onClick={() => setExpanded(!expanded)}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                                            >
                                                {expanded ? "See Less" : "Read All Praise"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <YouMayAlsoLike />

         <Footer />
        </div>
    );
}
