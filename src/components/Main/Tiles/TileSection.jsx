
import "./TileStyle.css"
const TileSection = () => {
  return (
    <div className="lg:pr-20 my-36">
      <div className="flex justify-between mb-20">
        <div className="text-center w-full md:text-left md:w-[50%]">
          <h1 className="text-4xl uppercase font-extralight w-full BG">Our creations</h1>
        </div>
        <div className="group hidden md:inline-block relative px-12 py-3 outline-none transition-all duration-500 ease-in-out border-[#222] border-2 bg-transparent cursor-pointer hover:bg-[#222]  z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:w-0 after:h-full after:z-[-1] after:bg-[#222] after:transition-all after:ease-in-out after:duration-500 after:hover:w-full after:hover:left-auto after:hover:right-0 active:top-[2px]">
            <a className="text-[#222] uppercase tracking-widest w-full group-hover:text-white">See all</a>
        </div>
      </div>
      
      <div className="grid gap-8 0.5xl:gap-16 2xl:gap-24 md:grid-cols-2 2lg:grid-cols-3  xl:grid-cols-4">
        <div className="group relative md:w-[15rem] isolate  hover:cursor-pointer">
            <div className="absolute uppercase text-white bottom-4 left-4 tracking-wider text-2xl font-extralight z-[9999] group-hover:text-[#222]">
                <h3>Deep<span className="block">earth</span></h3>
            </div>
            
            <div className="peer relative max-w-[654px] transition-opacity duration-300 group-hover:opacity-40">
              <div className="absolute w-auto inset-0 bg-gradient-to-b from-transparent to-[#222] opacity-70"></div>
              <img className="block max-w-full md:hidden object-cover" src="/mobile/image-deep-earth.jpg"
              alt="Earth"/>
              <img className="hidden max-w-full md:block object-cover" src="/desktop/image-deep-earth.jpg"
              alt="Earth"/>
            </div>
            
          </div>

          <div className="group relative md:w-[15rem]  isolate hover:cursor-pointer">
            <div className="absolute uppercase text-white bottom-4 left-4 tracking-wider text-2xl font-extralight z-[9999] group-hover:text-[#222]">
                <h3>Night<span className="block">arcade</span></h3>
            </div>
            
            <div className="peer relative w-full transition-opacity duration-300 group-hover:opacity-40">
              <div className="absolute max-w-[654px] inset-0 bg-gradient-to-b from-transparent to-[#222] opacity-70"></div>
              <img className="block max-w-full md:hidden object-cover" src="/mobile/image-night-arcade.jpg"
              alt="arcade"/>
              <img className="hidden max-w-full md:block object-cover" src="/desktop/image-night-arcade.jpg"
              alt="arcade"/>
            </div>
            
          </div>
        

          <div className="group relative md:w-[15rem] isolate hover:cursor-pointer">
            <div className="absolute uppercase text-white bottom-4 left-4 tracking-wider text-2xl font-extralight z-[9999] group-hover:text-[#222]">
                <h3>Soccer<span className="block">team VR</span></h3>
            </div>
            
            <div className="peer relative max-w-[654px] transition-opacity duration-300 group-hover:opacity-40">
              <div className="absolute w-full inset-0 bg-gradient-to-b from-transparent to-[#222] opacity-70"></div>
              <img className="block max-w-full md:hidden object-cover" src="/mobile/image-soccer-team.jpg"
              alt="Soccer player kicking a ball"/>
              <img className="hidden max-w-full md:block object-cover" src="/desktop/image-soccer-team.jpg"
              alt="Soccer player kicking a ball"/>
            </div>  
          </div>

          <div className="group relative md:w-[15rem]  isolate hover:cursor-pointer">
            <div className="absolute uppercase text-white bottom-4 left-4 tracking-wider text-2xl font-extralight z-[9999] group-hover:text-[#222]">
                <h3>The<span className="block">grid</span></h3>
            </div>
            
            <div className="peer relative w-full transition-opacity duration-300 group-hover:opacity-40">
              <div className="absolute max-w-[654px] inset-0 bg-gradient-to-b from-transparent to-[#222] opacity-70"></div>
              <img className="block max-w-full md:hidden object-cover" src="/mobile/image-grid.jpg"
              alt="Sports car"/>
              <img className="hidden max-w-full md:block object-cover" src="/desktop/image-grid.jpg"
              alt="Sports car"/>
            </div>
          </div>

          <div className="group relative md:w-[15rem] isolate hover:cursor-pointer">
            <div className="absolute uppercase text-white bottom-4 left-4 tracking-wider text-2xl font-extralight z-[9999] group-hover:text-[#222]">
                <h3>From up<span className="block">above VR</span></h3>
            </div>
            
            <div className="peer relative w-full transition-opacity duration-300 group-hover:opacity-40">
              <div className="absolute max-w-[654px] inset-0 bg-gradient-to-b from-transparent to-[#222] opacity-70"></div>
              <img className="block max-w-full md:hidden object-cover" src="/mobile/image-from-above.jpg"
              alt="Curved roads"/>
              <img className="hidden max-w-full md:block object-cover" src="/desktop/image-from-above.jpg"
              alt="Curved roads"/>
            </div>
          </div>

          <div className="group relative md:w-[15rem] isolate hover:cursor-pointer">
            <div className="absolute uppercase text-white bottom-4 left-4 tracking-wider text-2xl font-extralight z-[9999] group-hover:text-[#222]">
                <h3>Pocket<span className="block">borealis</span></h3>
            </div>
            
            <div className="peer relative w-full transition-opacity duration-300 group-hover:opacity-40">
              <div className="absolute max-w-[654px] inset-0 bg-gradient-to-b from-transparent to-[#222] opacity-70"></div>
              <img className="block max-w-full md:hidden object-cover" src="/mobile/image-pocket-borealis.jpg"
              alt="Night sky"/>
              <img className="hidden max-w-full md:block object-cover" src="/desktop/image-pocket-borealis.jpg"
              alt="Night sky"/>
            </div>
            
          </div>

          <div className="group relative md:w-[15rem] isolate hover:cursor-pointer">
            <div className="absolute uppercase text-white bottom-4 left-4 tracking-wider text-2xl font-extralight z-[9999] group-hover:text-[#222]">
                <h3>The<span className="block">curiosity</span></h3>
            </div>
            
            <div className="peer relative w-full transition-opacity duration-300 group-hover:opacity-40">
              <div className="absolute max-w-[654px] inset-0 bg-gradient-to-b from-transparent to-[#222] opacity-70"></div>
              <img className="block max-w-full md:hidden object-cover" src="/mobile/image-curiosity.jpg"
              alt="Rover"/>
              <img className="hidden max-w-full md:block object-cover" src="/desktop/image-curiosity.jpg"
              alt="Rover"/>
            </div>
          </div>

          <div className="group relative md:w-[15rem] isolate hover:cursor-pointer">
            <div className="absolute uppercase text-white bottom-4 left-4 tracking-wider text-2xl font-extralight z-[9999] group-hover:text-[#222]">
                <h3>Make it<span className="block">fisheye</span></h3>
            </div>
            <div className="peer relative w-full transition-opacity duration-300 group-hover:opacity-40">
              <div className="absolute max-w-[654px] inset-0 bg-gradient-to-b from-transparent to-[#222] opacity-70"></div>
              <img className="block max-w-full md:hidden object-cover" src="/mobile/image-fisheye.jpg"
              alt="fisheye"/>
              <img className="hidden max-w-full md:block object-cover" src="/desktop/image-fisheye.jpg"
              alt="fisheye"/>
            </div>
          </div>
      </div>
      <div className="grid w-full justify-center mt-10 ">
        <div className="group md:hidden relative px-12 py-2 text-center outline-none transition-all duration-500 ease-in border-[#222] border-2 bg-transparent cursor-pointer hover:bg-[#222]  z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:w-0 after:h-full after:z-[-1] after:bg-[#222] after:transition-all after:ease-in-out after:duration-500 after:hover:w-full after:hover:left-auto after:hover:right-0 active:top-[2px]" >
          <button className="text-[#222] uppercase tracking-widest w-full group-hover:text-white" >See all</button>
        </div>
      </div>
      
    </div>
  )
}

export default TileSection