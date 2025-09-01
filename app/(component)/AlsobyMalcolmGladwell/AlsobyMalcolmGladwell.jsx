import React from 'react'
import Image from 'next/image'
import DavidandGoliathPaperback from "@/public/David-and-Goliath_Paperback.webp"
import WhattheDogSawPaperback from "@/public/What-the-Dog-Saw_Paperback.webp"
import OutliersPaperback from "@/public/Outliers_Paperback.webp"
import BlinkPaperback from "@/public/Blink_Paperback.webp"
import TippingPointPaperback from "@/public/Tipping-Point_Paperback.webp"
export default function AlsobyMalcolmGladwell() {
    return (
        <>
            <div>
                <h2 className="font-medium font-serif text-4xl text-center mt-8 mb-12">Also by Malcolm Gladwell</h2>
            </div>

            <div className='flex justify-around mx-[15%]'>
                <Image src={DavidandGoliathPaperback} alt="" height={50} width={130} />
                <Image src={WhattheDogSawPaperback} alt="" height={50} width={130} />
                <Image src={OutliersPaperback} alt="" height={50} width={130} />
                <Image src={BlinkPaperback} alt="" height={50} width={130} />
            </div>
            <div className='mt-20 flex w-full justify-center'>
                <Image src={TippingPointPaperback} alt="" height={50} width={140} />
            </div>

        </>
    )
}
