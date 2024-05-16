import { useRouter } from 'next/navigation'
import React from 'react'

export const Footer = () => {
     const { push } = useRouter()
  return (
        <div className="flex w-full h-1/10 items-center justify-end py-2 px-10 bg-vert lg:py-4 shadow-md text-white ">
            <div className="flex flex-row w-full items-start justify-between py-20">
                <div className='flex w-1/3 '>
                    <button className="ms-2 text-gray-900 dark:text-gray-50" onClick={() => {
                        push('/home')}}>
                            <img className='h-100 w-100' src="/tokenlogo.png" alt="Logo de l'agence de voyage" />
                            </button>
                    <div className='ml-10'>
                        <p className='font-bold text-2xl mb-2'>L'Agence :</p>
                        <p className='mb-2'>Localisation : 3 rue Jean Jaure, 38100, Grenoble</p>
                        <p className='mb-2'>Email : agence.voyage@mail.com</p>
                        <p className='mb-2'>Téléphone : 01.02.03.04.05</p>
                    </div>
                    

                </div>
                <div> 
                     <p className='font-bold text-2xl mb-2'>Légale :</p>
                     <ul>
                        <li className='list-disc mb-2 '>
                            <button className="ms-2 " onClick={() => {
                        window.open('/mentionlegale')}}>
                            Mentions légales
                            </button>
                        </li>
                        <li className='list-disc mb-2'>
                            <button className="ms-2" onClick={() => {
                        window.open('/politiquedeconfidentialite')}}>
                            Politique de confidentialité
                            </button>
                        </li>
                        <li className='list-disc mb-2'>
                            <button className="ms-2" onClick={() => {
                        push('/contact')}}>
                            Nous contacter
                            </button>
                        </li>
                     </ul>
                     
                   
                </div >
                    
                    <div>
                        <p className='font-bold text-2xl mb-8'>Réseaux sociaux :</p>
                        <div className='flex flex-row justify-between'>
                        <button className="ms-2 text-gray-900 dark:text-gray-50" onClick={() => {
                        window.open('https://www.facebook.com')
                    }}>
                        <img src="" alt="logo facebook" />
                        </button>
                        <button className="ms-2 text-gray-900 dark:text-gray-50" onClick={() => {
                        window.open('www.instagram')
                    }}>
                        <img src="" alt="logo instagram" />
                        </button>
                        <button className="ms-2 text-gray-900 dark:text-gray-50" onClick={() => {
                        window.open('www.twitter')
                    }}>
                        <img src="" alt="logo twitter" />
                        </button>
                    </div>
                </div>
                
                
            </div>
        </div>  
  )
}

