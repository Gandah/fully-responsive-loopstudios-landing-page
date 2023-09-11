import { useState } from "react";
import logo from "../../assets/logo.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";

const footer = () => {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isCareersHovered, setIsCareersHovered] = useState(false);
  const [isEventsHovered, setIsEventsHovered] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isSupportHovered, setIsSupportHovered] = useState(false);

  return (
    <div className="flex flex-col  lg:flex-row md:justify-between bg-[#222] px-8 py-14 md:px-28 text-white mt-auto font-['Alata']">
      <div className="flex flex-col gap-0 justify-center items-center lg:gap-8">
        <div className="flex justify-center lg:justify-start w-full md:text-center max-h-[2.5rem]">
          <img className="block max-w-full h-auto" src={logo} alt="logo" />
        </div>
        <div className="py-14 lg:py-0">
          <ul className="flex flex-col md:flex-row gap-6 md:text-xl">
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
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${
                  isAboutHovered ? "block" : "hidden"
                }`}
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
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${
                  isCareersHovered ? "block" : "hidden"
                }`}
              ></div>
            </li>
            <li className="relative">
              <a
                href="#"
                onMouseEnter={() => setIsEventsHovered(true)}
                onMouseLeave={() => setIsEventsHovered(false)}
              >
                Events
              </a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${
                  isEventsHovered ? "block" : "hidden"
                }`}
              ></div>
            </li>
            <li className="relative">
              <a
                href="#"
                onMouseEnter={() => setIsProductsHovered(true)}
                onMouseLeave={() => setIsProductsHovered(false)}
              >
                Products
              </a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${
                  isProductsHovered ? "block" : "hidden"
                }`}
              ></div>
            </li>
            <li className="relative">
              <a
                href="#"
                onMouseEnter={() => setIsSupportHovered(true)}
                onMouseLeave={() => setIsSupportHovered(false)}
              >
                Support
              </a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-[20px] bg-white rounded transition-all ease-in-out duration-300 ${
                  isSupportHovered ? "block" : "hidden"
                }`}
              ></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center lg:gap-8">
        <div className="flex gap-4 justify-end lg:w-full">
          <div className="min-h-[40%] aspect-square will-change-transform  transition-transform ease-in-out duration-200 hover:scale-[1.3]  cursor-pointer">
            <img className="block max-w-full h-auto" src={facebookIcon} alt="facebook icon" />
          </div>
          <div className="min-h-[40%] will-change-transform  transition-transform ease-in-out duration-200 hover:scale-[1.3]  cursor-pointer">
            <img className="block max-w-full h-auto aspect-square" src={twitterIcon} alt="twitter icon" />
          </div>
          <div className="min-h-[40%] will-change-transform  transition-transform ease-in-out duration-200 hover:scale-[1.3]  cursor-pointer">
            <img className="block max-w-full h-auto aspect-square" src={pinterestIcon} alt="pinterest icon" />
          </div>
          <div className="min-h-[40%] will-change-transform  transition-transform ease-in-out duration-200 hover:scale-[1.3]  cursor-pointer ">
            <img className="block max-w-full h-auto aspect-square" src={instagramIcon} alt="Instagram icon" />
          </div> 
        </div>

        <div className="flex justify-end">
          <p>
            © 2023 <a href="https://www.linkedin.com/in/gandahkelvin">Loopstudios</a>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
