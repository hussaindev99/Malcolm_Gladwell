"use client"
import Navbar from "@/app/(component)/Navbar/Navbar"
import Header from "@/app/(component)/Header/Header"
import AboutMalcom from "@/app/(component)/About_Malcom/AboutMalcom"
import AlsobyMalcolmGladwell from "@/app/(component)/AlsobyMalcolmGladwell/AlsobyMalcolmGladwell"
import YoullAlsoLove from "@/app/(component)/You’llAlsoLove/YoullAlsoLove"
import Footer from "@/app/(component)/Footer/Footer"
import React from "react"
import Image from "next/image"
import "@/app/globals.css"
export default function Home() {
  return (
    <div className="bg-white text-2xl font-bold">

      <div className="min-h-screen ">
        <Navbar />
        <Header />
        <AboutMalcom />
        <AlsobyMalcolmGladwell />
        <YoullAlsoLove />
        <Footer />
      </div>
    </div>
  );
}
