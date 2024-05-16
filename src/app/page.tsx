"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

    useEffect(()=>{
      router.push('/home');
    },[]);
  
  return (
    <main className="bg-notWhite dark:bg-darkBG ">
    
    </main>
  );
}
