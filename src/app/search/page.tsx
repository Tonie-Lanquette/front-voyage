"use client"
import React from 'react'
import { NavBarre } from '../Components/navBarre'
import { Footer } from '../Components/footer'

const page = () => {

    
  return (
    <div className='w-full min-h-screen bg-zinc-100 dark:bg-zinc-800'>
        <NavBarre />
        Search
        <Footer />
    </div>
  )
}

export default page