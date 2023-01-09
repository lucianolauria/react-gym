import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail, AiOutlineHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-[#F54C25] text-white w-full h-[300px] md:flex items-center md:justify-around gap-10 md:mt-10'>
        <div className='text-[0.8rem] md:text-[1rem] text-center py-5 md:py-0'>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Excepturi voluptatibus eius blanditiis! Quia voluptate, dolor deleniti illo,<br/> ducimus temporibus eveniet est earum veniam doloribus eum! <br/>Ea reprehenderit provident incidunt facilis.</h3>
        </div>
        <div className='flex text-[0.8rem] md:text-[1rem]'>
           <div className='flex flex-col m-5'>
            <h3 className='font-bold mb-2'>Nosotros</h3>
            <a href="">✔ Sobre nosotros</a>
            <a href="">✔ Features</a>
            <a href="">✔ Terminos y condiciones</a>
           </div>

           <div className='flex flex-col m-5'>
           <h3 className='font-bold mb-2'>Soporte</h3>
           <a href="">✔ Faq</a>
            <a href="">✔ Centro de soporte</a>
            <a href="">✔ Política de privacidad</a>
           </div>

           <div className='flex flex-col m-5'>
           <h3 className='font-bold mb-2'>Contacto</h3>
           <a href="" className='flex items-center gap-1'><AiOutlineMail/>gimnasio@gmail.com</a>
           <span className='flex items-center gap-1'><AiOutlineHome/> Rosario</span>
           </div>
        </div>
    </div>
  )
}

export default Footer