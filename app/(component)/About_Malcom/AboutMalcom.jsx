"use client";
import Image from "next/image";
import malcolm from "@/public/MalcolmGladwell.webp";
import { Link } from "lucide-react";

export default function Home() {
    return (
        <>
            <main className="w-full px-6 md:px-16 lg:px-16 py-12">

                <section
                    className="grid grid-cols-1 md:grid-cols-2 items-center px-10 h-[80vh] border-r-8 border-[#D6DF24] bg-cover bg-center"
                    style={{ backgroundImage: 'url("/backroundimg.png")' }}
                >

                    <div className="ml-[5%]">
                        <Image
                            src={malcolm}
                            alt="Malcolm Gladwell"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="mt-8 md:mt-0 ml-[-200px] p-6 ">
                        <h2 className="text-4xl font-serif mb-4">About Malcolm</h2>
                        <p className="text-gray-700 text-[20px] font-light leading-relaxed mb-6">
                            Malcolm Gladwell is the author of five New York Times bestsellers —
                            The Tipping Point, Blink, Outliers, What the Dog Saw, and David and
                            Goliath. He is also the co-founder of Pushkin Industries, an audio
                            content company that produces the podcasts Revisionist History, which
                            reconsiders things both overlooked and misunderstood, and Broken
                            Record, where he, Rick Rubin, and Bruce Headlam interview musicians
                            across a wide range of genres. Gladwell has been included in the TIME
                            100 Most Influential People list and touted as one of Foreign Policy{"’"}s
                            Top Global Thinkers.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://x.com/Gladwell"
                                className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition"
                            >
                                TWITTER
                            </a>
                            <a
                                href="https://www.instagram.com/malcolmgladwell/"
                                className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition"
                            >
                                INSTAGRAM
                            </a>
                            <a
                                href="https://www.facebook.com/malcolm.gladwell"
                                className="bg-[#00BEF4] cursor-pointer text-white hover:text-black font-semibold px-6 py-3 text-sm md:text-base hover:bg-[#d9d903] transition"
                            >
                                FACEBOOK
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
