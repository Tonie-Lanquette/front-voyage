import { useRouter } from 'next/navigation'
import React from 'react'

export const NavBarre = () => {
     const { push } = useRouter()
  return (
        <div className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 px-10 dark:bg-zinc-700 lg:py-4 shadow-md">
            <div className="flex flex-row w-full items-center justify-between px-3">
                <div>
                    <img className='h-10 w-10' src="/tokenlogo.png" alt="Logo de l'agence de voyage" />
                </div>
                <div className='flex flex-row justify-around w-full pl-20'>
                    <button className="ms-2 text-gray-900 dark:text-gray-50" onClick={() => {
                    push('/home')
                }}>
                    Acceuil
                    </button>
                    <button className="ms-2 text-gray-900 dark:text-gray-50" onClick={() => {
                    push('/travels')
                }}>
                    Tous les voyages
                    </button>
                    <button className="ms-2 text-gray-900 dark:text-gray-50" onClick={() => {
                    push('/search')
                }}>
                    Recherche voyage
                    </button>
                </div>
                
            </div>
        </div>  
  )
}

