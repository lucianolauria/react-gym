import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2 className='text-xl'>Gym <span>Lauria</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <ul className='flex items-center gap-6 font-bold '>
          <li className='hover:-translate-y-1 transition-all duration-200 '><a onClick={handleClick} href="#h" className=''>Inicio</a></li>
          <li className='hover:-translate-y-1 transition-all duration-200'><a onClick={handleClick} href="#h">Sobre nosotros</a></li>
          <li className='hover:-translate-y-1 transition-all duration-200'><a onClick={handleClick} href="#h">Planes</a></li>
          <li className='hover:-translate-y-1 transition-all duration-200'><a onClick={handleClick} href="#h">Training</a></li>
          <li><button className='bg-[#F54C25] text-white py-1 px-5 rounded-full font-bold cursor-pointer hover:-translate-y-1 transition-all duration-200'>Ingresar</button></li>
          </ul>        
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      color: #F54C25;
      font-weight: bold;
    }
  }
  padding: 10px;
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a{
    color: #ecd6bd;
    text-decoration: none;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    z-index: 6;
    width: 100%;
    display: block;
    position: absolute;
    margin-left: 10px;
    margin-right: 5px;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      text-align: center;
      font-size: 1rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    z-index: 6;
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #1e1a25;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`