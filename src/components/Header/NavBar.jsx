import { useState } from "react";
import HamburgerIcon from "../../assets/icon-hamburger.svg"
import CloseMenu from "../../assets/icon-close.svg"
import logo from '../../assets/logo.svg'

const NavBar = ({ toggleNav, handleToggleNav }) => {

  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isCareersHovered, setIsCareersHovered] = useState(false);
  const [isEventsHovered, setIsEventsHovered] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isSupportHovered, setIsSupportHovered] = useState(false);


  return (
    <nav className="text-white">
         {/* Menu */}
       <ul className="hidden  lg:flex gap-6 font-['Alata']">
       <li className="relative">
        <a
          href="#"
          className="hover:block"
          onMouseEnter={() => setIsAboutHovered(true)}
          onMouseLeave={() => setIsAboutHovered(false)}
        >
          About
        </a>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${isAboutHovered ? 'block' : 'hidden'}`}
        ></div>
      </li>
         <li className="relative">
        <a
          href="#"
          className="hover:block"
          onMouseEnter={() => setIsCareersHovered(true)}
          onMouseLeave={() => setIsCareersHovered(false)}
        >
          Careers
        </a>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${isCareersHovered ? 'block' : 'hidden'}`}
        ></div>
      </li>
      <li className='relative'>
        <a
          href="#"
          onMouseEnter={() => setIsEventsHovered(true)}
          onMouseLeave={() => setIsEventsHovered(false)}
        >
          Events
        </a>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${isEventsHovered ? 'block' : 'hidden'}`}
        ></div>
      </li>
      <li className='relative'>
        <a
          href="#"
          onMouseEnter={() => setIsProductsHovered(true)}
          onMouseLeave={() => setIsProductsHovered(false)}
        >
          Products
        </a>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${isProductsHovered ? 'block' : 'hidden'}`}
        ></div>
      </li>
      <li className='relative'>
        <a
          href="#"
          onMouseEnter={() => setIsSupportHovered(true)}
          onMouseLeave={() => setIsSupportHovered(false)}
        >
          Support
        </a>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${isSupportHovered ? 'block' : 'hidden'}`}
        ></div>
      </li>
          </ul>

    {/* Mobile Menu */}
    <div>
      <div onClick={() => {handleToggleNav()}} className="lg:hidden">
        <img src={HamburgerIcon} alt="Hamburger menu" />
      </div>
      <div className={toggleNav? "fixed bg-black h-screen w-full z-10 top-0 left-0 px-8 py-8 lg:hidden duration-300" : "fixed bg-black h-screen w-full z-10 top-0 left-[-100%] px-8 py-8 lg:hidden duration-300"}>
      <div className="w-[40%] mt-6 aspect-square h-[2.5rem]">
            <img className='block max-w-full' src={logo} alt='logo'/>
        </div>
        <div onClick={() => {handleToggleNav()}} className="lg:hidden z-10 absolute top-[3.5rem] right-[2rem]">
          <img src={CloseMenu} className="block max-w-full" alt="cross icon" />
        </div>
          <ul className='grid gap-4  mt-32 uppercase text-2xl font-extralight md:text-3xl md:justify-center md:tracking-wide md:gap-8'>
            <li>
              <a> About </a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a> Support</a>
            </li>
          </ul> 
      </div>
      
    </div>
    </nav>
     
     
  )
}

export default NavBar