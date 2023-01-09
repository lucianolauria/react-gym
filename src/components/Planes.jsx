import React from 'react'
import { Card } from './Card'
import precios from "./precios.json";

export const Planes = () => {
  return (
    <ul className='bg-[#141414] mt-10 md:mt-0 translate-x-20 md:transform-none w-full h-[1500px] md:h-[500px] md:flex items-center justify-center text-center gap-10'>
        {precios.map((precio) => (
            <Card key={precio.id} precio={precio} />
        ))}
    </ul>
  )
}
