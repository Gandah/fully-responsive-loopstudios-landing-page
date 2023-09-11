import NavBar from './NavBar'
import { useState } from 'react';
import logo from '../../assets/logo.svg'

const Header = () => {

  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () =>{
    setToggleNav(!toggleNav)
  }

  return (
    <div className='px-8 py-14 md:p-36 md:pt-14 min-w-[280px]'>
    <div className='flex justify-between h-[2.5rem]'>
        <div className={`w-[40%] lg:w-[20%]  aspect-square`}>
            <img className='block max-w-full' src={logo} alt='logo'/>
        </div>
        <NavBar toggleNav={toggleNav} handleToggleNav={handleToggleNav} />
    </div>
        <div className='grid items-center tracking-widest min-w-fit w-full min-[420px]:w-[80%] sm:w-[60%] lg:w-[50%] mt-28 mb-32 md:mt-36 h-auto border p-6 lg:px-8 uppercase  text-white font-extralight text-4xl lg:text-5xl xl:text-6xl'>
          <div className='block w-full leading-none'>
            <h1 className='w-full'>Immersive</h1>
            <h1 className='w-full'>experiences</h1>
            <h1 className='md:w-full'>that <span className='block md:inline'>deliver</span> </h1>
          </div>
     
        </div>
    </div> 
  )
}

export default Header