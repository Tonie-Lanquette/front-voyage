"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBarre } from '../Components/navBarre'
import { Footer } from '../Components/footer'
import { useRouter } from 'next/navigation'


const travels = () => {

  
   const [travelsList, setTravelsList] = useState([])
  

     useEffect(() => {
    const getTravels = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/av/travels");
        setTravelsList(res.data);
      } catch (error) {
        console.error("Error fetching travels:", error);
      }
    };

    getTravels();
  }, []);
 const { push } = useRouter()

  return (
    <div className='flex flex-col w-full min-h-screen bg-zinc-100 dark:bg-zinc-800 items-center '>
      <NavBarre />
      <div className='bg-yellow-100 px-12 mt-20 mb-16'>
        <h1 className="font-bold text-5xl dark:text-black">Voyages</h1> 
      </div>
      <div className="flex flex-wrap items-center justify-evenly w-5/6">
        
          { travelsList && travelsList.map((travel: any) =>{
            return (
            <div className=' bg-white shadow-lg dark:bg-zinc-700 max-w-80 min-h-80 rounded-lg px-6 py-6 m-10' key={travel.id}>
              <img className='mb-8' src={travel.picture} alt="" />
              <p className='font-semibold text-xl mb-4'>{travel.name}</p>
              <div className='flex justify-between mb-4 font-medium text-lg'>
                {travel.avCountries.map((country: any) => (
                    <div className="flex " >
                        <p className="flex text-right text-sm" key={country.id}>
                          {country.name}
                        </p>
                    </div>
                ))}
              </div>
              <div className='flex justify-between mb-4'>
                <p >{travel.duration} jours</p>
                <p >{travel.price} euro</p>
              </div>
              <div className="flex flex-wrap justify-between ">
                {travel.AvCategories.map((category: any) => (
                        <p className="bg-green-200 text-right text-sm dark:bg-green-800 py-1 px-2 my-2 rounded-2xl" key={category.id}>
                          {category.name}
                        </p>
                ))}
              </div>
              <button className="ms-2 " onClick={() => {
                        push('/contact')}}>
                            Réserver
                            </button>
               
              
            </div>)
	    
   
    }
    )}
    </div>
      <Footer />
    </div>
 
  )
}

export default travels