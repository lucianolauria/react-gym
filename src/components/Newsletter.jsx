import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white font-bold text-2xl md:text-3xl bg-[#141414] w-full h-[600px] md:h-[500px] flex items-center justify-center gap-10'>
        <div className='border-2 border-[#F54C25] bg-transparent w-[1100px] h-[300px]  rounded-3xl flex items-center justify-center flex-col gap-10'>
           <div className='text-center'>
             <h2>Suscribite a nuestro Newsletter</h2>
             <span className='font-light text-lg'>Obten todas las noticias</span>
           </div>
           <div className='flex'>
           <input type="email" className='mx-2'/> 
           <button className='bg-[#F54C25] text-lg text-white py-1 px-5 rounded-full font-bold cursor-pointer hover:-translate-y-1 transition-all duration-200'>Enviar</button>
           </div>
        </div>
    </div>
  )
}

export default Newsletter