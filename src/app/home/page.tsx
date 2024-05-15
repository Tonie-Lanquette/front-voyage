"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { NavBarre } from '../Components/navBarre'

const page = () => {
    const { push } = useRouter()
  return (
    <div className='w-full min-h-screen bg-green-50 dark:bg-neutral-800'>
        <NavBarre />
        


        Home
        
    </div>
  )
}

export default page