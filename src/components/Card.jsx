import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";

export const Card = ({ precio }) => {
  return (
    <li className='border-2 border-[#F54C25] bg-transparent w-[20rem] h-[29rem] rounded-3xl flex items-center justify-center flex-col gap-10 text-white'>
       <span className='font-bold text-2xl'>{precio.plan}</span>
       <h3 className='text-[#F54C25] text-3xl font-bold'>{precio.precio}</h3>
       <ul className='h-[10rem]'>
        <li>{precio.beneficioUno}</li>
        <li>{precio.beneficioDos}</li> 
        <li>{precio.beneficioTres}</li> 
        <li>{precio.beneficioCuatro}</li> 
        <li>{precio.beneficioCinco}</li> 
        <li>{precio.beneficioSeis}</li> 
        <li>{precio.beneficioSiete}</li> 
       </ul>
       <button className='border-2 border-[#F54C25] bg-transparent text-white py-2 px-7 rounded-full font-bold cursor-pointer text-lg'>Comprar</button>
    </li>
  )
}
