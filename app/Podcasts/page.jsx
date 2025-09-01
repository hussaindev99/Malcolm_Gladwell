import React from 'react'
import Image from 'next/image'
import Navbar from '../(component)/navbar/Navbar'
import RevisionistHistory from "@/public/RevisionistHistory.webp"
import BrokenRecord from "@/public/BrokenRecord.webp"
import AgainsttheRules from "@/public/AgainsttheRules.webp"
import DeepBackground from "@/public/DeepBackground.webp"
import GladwellPodcastLogosSolvable from "@/public/GladwellPodcastLogosSolvable.webp"
import MakingAKilling from "@/public/MakingAKilling.webp"
import Footer from '../(component)/Footer/Footer'
import Link from 'next/link'

export default function page() {
    return (
        <>
            <Navbar />
            <section className="py-16 px-6 md:px-20 bg-white">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-serif text-center mb-6">Podcasts</h2>

                {/* Subtitle */}
                <p className="text-gray-700 text-base sm:text-lg text-center max-w-3xl mx-auto leading-relaxed mb-16 px-2">
                    Co-founded by Malcolm Gladwell and Jacob Weisberg, Pushkin Industries is spreading the joy of
                    podcasting, one episode at a time, by putting artists and creators first. Follow Pushkin on{" "}

                    <Link
                        href="https://x.com/PushkinPods"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                    >
                        Twitter
                    </Link>{" "}
                    and{" "}

                    <Link
                        href="https://www.instagram.com/PushkinPods/#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                    >
                        Instagram
                    </Link>{" "}
                    and learn more at{" "}

                    <Link
                        href="https://www.pushkin.fm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                    >
                        www.pushkin.fm
                    </Link>.
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-2 items-center gap-12">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image
                            src={RevisionistHistory}
                            alt="Revisionist History"
                            className="w-60 sm:w-70 h-60 sm:h-72 ml-0 md:ml-[-70px]"
                        />
                    </div>

                    {/* Right Text */}
                    <div className='ml-0 md:ml-[-150px] md:mr-44 text-center md:text-left'>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2">Revisionist History</h3>
                        <p className="italic text-gray-600 mb-4">
                            Because sometimes the past deserves a second chance.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                            Revisionist History is Malcolm Gladwell{"’"}s journey through the overlooked and the misunderstood.
                            Every episode re-examines something from the past—an event, a person, an idea, even a song—
                            and asks whether we got it right the first time.
                        </p>
                        <a
                            href="#"
                            className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* cart 2 */}
            <div className="grid md:grid-cols-2 items-center gap-12 mt-10 px-6 md:px-20">
                <div className="flex justify-center">
                    <Image
                        src={BrokenRecord}
                        alt="Broken Record"
                        className="w-60 sm:w-70 h-60 sm:h-72"
                    />
                </div>
                <div className='ml-0 md:ml-[-150px] md:mr-44 text-center md:text-left'>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2">Broken Record</h3>
                    <p className="italic text-gray-600 mb-4">
                        Sing songs. Talk music.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                        From Rick Rubin, Malcolm Gladwell, and Bruce Headlam. The musicians you love talk about their life, inspiration and craft. Oh, and they play, too.
                    </p>
                    <a
                        href="#"
                        className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Cart 3 */}
            <div className="grid md:grid-cols-2 items-center gap-12 mt-10 px-6 md:px-20">
                <div className="flex justify-center">
                    <Image
                        src={AgainsttheRules}
                        alt="Against the Rules"
                        className="w-60 sm:w-70 h-60 sm:h-72"
                    />
                </div>
                <div className='ml-0 md:ml-[-150px] md:mr-44 text-center md:text-left'>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2">Against the Rules</h3>
                    <p className="italic text-gray-600 mb-4">
                        Don{"’"}t pick sides. Unless it{"’"}s my side.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                        Journalist and bestselling author Michael Lewis takes a searing look at what{"’"}s happened to fairness—in financial markets, newsrooms, basketball games, courts of law, and much more. And he asks what{"’"}s happening to a world where everyone loves to hate the referee.
                    </p>
                    <a
                        href="#"
                        className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* cart 4 */}
            <div className="grid md:grid-cols-2 items-center gap-12 mt-10 px-6 md:px-20">
                <div className="flex justify-center">
                    <Image
                        src={DeepBackground}
                        alt="Deep Background"
                        className="w-60 sm:w-70 h-60 sm:h-72"
                    />
                </div>
                <div className='ml-0 md:ml-[-150px] md:mr-44 mb-14 text-center md:text-left'>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4">Deep Background</h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                        Deep Background is an interview show hosted by Harvard professor Noah Feldman. Every week, Noah and his guests explore the historical, scientific, legal and cultural context behind the biggest stories in the news to help us understand what{"’"}s really going on.
                    </p>
                    <a
                        href="#"
                        className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* cart 5 */}
            <div className="grid md:grid-cols-2 items-center gap-12 mt-10 px-6 md:px-20">
                <div className="flex justify-center">
                    <Image
                        src={GladwellPodcastLogosSolvable}
                        alt="Solvable"
                        className="w-60 sm:w-70 h-60 sm:h-72"
                    />
                </div>
                <div className='ml-0 md:ml-[-150px] md:mr-44 text-center md:text-left'>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4">Solvable</h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                        A partnership between The Rockefeller Foundation and Pushkin Industries, Solvable showcases the world{"’"}s most inspiring thinkers proposing solutions to the world{"’"}s most daunting problems. The interviews, conducted by journalists like Malcolm Gladwell and Jacob Weisberg, acknowledge complexity while inciting hope that these problems are, in fact, solvable.
                    </p>
                    <a
                        href="#"
                        className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* cart 6 */}
            <div className="grid md:grid-cols-2 items-center gap-12 mt-10 px-6 md:px-20">
                <div className="flex justify-center">
                    <Image
                        src={MakingAKilling}
                        alt="Making a Killing"
                        className="w-60 sm:w-70 h-60 sm:h-72"
                    />
                </div>
                <div className='ml-0 md:ml-[-150px] md:mr-44 text-center md:text-left'>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4">Making a Killing</h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                        Big Business is shaping the world in unprecedented ways. Through a series of conversations with today{"’"}s best business writers and thinkers, journalist Bethany McLean {"("}co-author of The Smartest Guys in the Room{")"} cuts through the hype and hand-wringing to reframe the stories you thought you understood and uncover the ones you didn{"’"}t know were important.
                    </p>
                    <a
                        href="#"
                        className="text-black font-medium underline decoration-[#D6DF24] underline-offset-8 hover:decoration-black"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            <Footer />
        </>
    )
}
