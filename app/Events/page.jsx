import React from 'react'
import Navbar from '@/(component)/Navbar/Navbar'
import Footer from '@/(component)/Footer/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <h2 className='text-4xl font-serif mt-12 text-center'>Events</h2>
      <Footer />
    </div>
  )
}
