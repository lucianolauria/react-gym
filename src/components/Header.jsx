import React from 'react'
import Navbar from './NavBar'

export const Header = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-[600px] bg-[url(https://img.freepik.com/foto-gratis/hombre-incognito-construyendo-biceps-barra_7502-5120.jpg?w=1800&t=st=1673199817~exp=1673200417~hmac=2c536f2716c7e91ce0aaff0f78b126a747597a1ed17fcf79f9fb6cb3f260b4fe)] bg-no-repeat bg-cover flex items-center justify-center flex-col gap-10'>
            <h1 className='text-white text-5xl text-center font-thin'>No eres lo que logras, <br/><span className='font-bold text-[#F54C25]'>eres lo que superas.</span></h1>
            <button className='border-2 border-[#F54C25] bg-transparent text-white py-2 px-7 rounded-full font-bold cursor-pointer text-lg'>Comenzar</button>
        </div>
    </div>
  )
}

/* <div className="h-[6vh] text-gray-400 py-4 px-40 flex items-center justify-between">
            <h1 className='font-bold text-[#000003]'><span>Lauria</span> GYM</h1>
            <ul className="text-[#000003] hidden lg:flex items-center gap-6">
                <li><a href="#" className="hover:text-[#bebed9] transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-[#bebed9] transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-[#bebed9] transition-colors">Planes</a></li>
                <li><a href="#" className="hover:text-[#bebed9] transition-colors">Precios</a></li>
                <li><button className='bg-[#0976ad] text-[#f1e6ef] py-2 px-4 rounded-full font-bold'>INGRESAR</button></li>
            </ul>
        </div> */
