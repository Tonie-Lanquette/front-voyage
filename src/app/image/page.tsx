'use client'
import axios from 'axios'
import React from 'react'

const image = () => {
    async function getImage(){
        return axios
        .get('http://127.0.0.1:8000/api/av/travel/image')
        .then((res: any) => {
                console.log(res.data)
            })
    }
    getImage()
  return (
    <div>image</div>
  )
}

export default image