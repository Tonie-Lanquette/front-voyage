"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { NavBarre } from '../Components/navBarre'
import { Footer } from '../Components/footer'
import axios from 'axios'
import { Carrousel } from '../Components/carroussel'

const page = () => {
    const { push } = useRouter()
     const [imagesList, setImagesList] = useState([])
 



     useEffect(() => {
    const getImage = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/av/travels");
        setImagesList(res.data);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    getImage();})

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
 
  return (
    <div className='flex flex-col w-full min-h-screen bg-notWhite dark:bg-darkBG items-center'>

        <NavBarre />

       <Carrousel />


        <div className='bg-creme px-12 mt-20 mb-16 '>
          <h1 className="font-bold text-6xl dark:text-black ">Nos derniers voyage</h1>
        </div>

      <div className="flex flex-wrap text-black dark:text-white items-center  justify-evenly w-5/6">
        
          { travelsList && travelsList.slice(-3).map((travel: any) =>{
            return (
            <button  onClick={() => {
                        push('/contact')}}>
            <div className=' bg-white shadow-lg dark:bg-lightDark max-w-80 min-h-80 rounded-lg px-6 py-6 m-10' key={travel.id}>
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
                        <p className="text-right text-white text-sm bg-vert/75 py-1 px-2 my-2 rounded-2xl" key={category.id}>
                          {category.name}
                        </p>
                ))}
              </div>
              
               
              
            </div>
            </button>)
	    
   
    }
    )}
    
    </div>



        <div className='bg-creme px-12 mt-20 mb-24'>
          <h1 className="font-bold text-6xl dark:text-black ">Qui sommes-nous ?</h1> 
        </div>
        <div className='w-4/6 flex flex-row justify-between mb-80'>
            <div className='w-1/2 flex items-center'>
              <button className="ms-2 text-gray-900 dark:text-gray-50 w-full" onClick={() => {
                        push('/home')}}>
                            <img className='w-full' src="/tokenlogo.png" alt="Logo de l'agence de voyage" />
              </button>
            </div>
           
            <div className='ml-40 w-1/2'>
              <p className='font-bold text-5xl mb-6'>L'Agence</p>
              <p className='font-light mb-2'>
                Au cœur de notre passion pour l'aventure et la découverte, se trouve l'essence même de L'Agence.
                <br /><br />
                Chez L'Agence, nous comprenons que chaque voyage est une histoire à raconter, une aventure à vivre et une expérience à chérir. C'est pourquoi nous nous engageons à créer des voyages sur mesure, conçus spécialement pour vous, chaque détail soigneusement façonné pour répondre à vos désirs les plus exigeants.
                  <br /><br />
                Laissez-nous vous emmener loin de l'ordinaire, vers des horizons lointains et des expériences extraordinaires. Avec L'Agence, chaque voyage est une étoile brillante dans le ciel de vos souvenirs, illuminant votre vie de moments magiques et de découvertes inoubliables.
                  <br /><br />
                Embarquez avec nous pour une aventure sans limites, où chaque étape est un nouveau chapitre dans le livre de vos voyages. Laissez-nous vous guider vers l'Évasion Parfaite, où les frontières s'effacent et où les rêves prennent vie.
                 </p>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default page