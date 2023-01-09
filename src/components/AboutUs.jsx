import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-[#141414] w-full h-[800px] mt-10 md:h-[700px] md:mt-0 md:flex items-center justify-center text-center gap-10'>
        <div>
            <img src="https://img.freepik.com/foto-gratis/hombre-fuerte-entrenando-gimnasio_1303-23876.jpg?w=1380&t=st=1673220414~exp=1673221014~hmac=b197e75d20bc5ccfe9b2021393b10898b0fdf57ec550c29e55ca7b595b05bfbc" className='w-[30rem] rounded-3xl' />
        </div>

        <div className='text-white'>
            <h2 className='font-bold pt-5 text-xl md:text-3xl md:pt-0 text-[#F54C25]'>Sobre nosotros</h2>
            <p className='py-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maxime cum nisi?<br/> Ratione impedit officiis harum a architecto labore nostrum commodi, debitis iusto<br/> reprehenderit, praesentium, illo totam! Maiores, necessitatibus molestiae.<br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maxime cum nisi?<br/> Ratione impedit officiis harum a architecto labore nostrum commodi, debitis iusto<br/> reprehenderit, praesentium, illo totam! Maiores, necessitatibus molestiae.</p>
            <button className='border-2 border-[#F54C25] bg-transparent text-white py-2 px-7 rounded-full font-bold cursor-pointer text-lg'>Leer más</button>
        </div>
    </div>
  )
}

export default AboutUs