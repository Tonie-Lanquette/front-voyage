"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { NavBarre } from '../Components/navBarre'
import { Carrousel } from '../Components/carroussel'
import { Footer } from '../Components/footer'

const page = () => {
    const { push } = useRouter()
  return (
    <div className='flex flex-col w-full min-h-screen bg-zinc-100 dark:bg-zinc-800 items-center'>

        <NavBarre />

        <Carrousel />

        <div className='bg-yellow-100 px-12 mt-20 mb-16 '>
          <h1 className="font-bold text-6xl dark:text-black ">Nos derniers voyage</h1>
        </div>
        <Carrousel />




        <div className='bg-yellow-100 px-12 mt-20 mb-24'>
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
                Au cœur de notre passion pour l'aventure et la découverte, se trouve l'essence même de L'Agence. Nous sommes bien plus qu'une simple agence de voyage ; nous sommes les artisans de vos rêves d'évasion, les architectes de vos plus beaux souvenirs et les guides de vos aventures les plus inoubliables. 
                  <br /><br />
                Chez L'Agence, nous comprenons que chaque voyage est une histoire à raconter, une aventure à vivre et une expérience à chérir. C'est pourquoi nous nous engageons à créer des voyages sur mesure, conçus spécialement pour vous, chaque détail soigneusement façonné pour répondre à vos désirs les plus exigeants.
                  <br /><br />
                Que vous rêviez de vous perdre dans les ruelles pavées d'une ville historique, de vous émerveiller devant les majestueuses merveilles naturelles ou de plonger dans les eaux cristallines d'une île paradisiaque, notre équipe d'experts en voyages est là pour transformer vos rêves en réalité.
                  <br /><br />
                En collaboration avec nos partenaires locaux soigneusement sélectionnés dans le monde entier, nous vous offrons des expériences authentiques, immersives et enrichissantes. Que vous soyez un voyageur solitaire en quête de nouvelles rencontres, un couple à la recherche de romantisme ou une famille désireuse de partager des moments précieux, nous avons le voyage parfait pour vous.
                  <br /><br />
                Laissez-nous vous emmener loin de l'ordinaire, vers des horizons lointains et des expériences extraordinaires. Avec L'Agence, chaque voyage est une étoile brillante dans le ciel de vos souvenirs, illuminant votre vie de moments magiques et de découvertes inoubliables.
                  <br /><br />
                Embarquez avec nous pour une aventure sans limites, où chaque étape est un nouveau chapitre dans le livre de vos voyages. Laissez-nous vous guider vers l'Évasion Parfaite, où les frontières s'effacent et où les rêves prennent vie.
                  <br /><br />
                L'Agence - Explorez. Découvrez. Rêvez.</p>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default page