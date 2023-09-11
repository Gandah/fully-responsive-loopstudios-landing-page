import './MiddleStyle.css';

const MiddleSection = () => {
  return (
    <section className="bg-white mt-20 grid place-items-center gap-8 grid-group">
      <div className="h-auto md:w-full grid-image">
        <img
      className="block max-w-[100%] md:hidden"
          src="/mobile/image-interactive.jpg"
          alt="man in vr headset"
        />
        <img
      className="hidden max-w-[100%] md:block"
          src="/desktop/image-interactive.jpg"
          alt="man in vr headset"
        />
      </div>
      <div className="bg-white grid gap-4 place-items-center lg:place-items-start h-auto md:px-16 md:pt-10  md:z-[2] grid-text w-[85%] min-w-fit">
        <h1 className="text-center text-black uppercase text-2xl md:text-5xl tracking-wider md:font-extralight">
          The leader in <span className="md:block">interactive VR</span>
        </h1>
        <p className="text-center min-w-[280px] w-full  text-darkerGray leading-7 lg:text-left font-['Alata'] md:px-0 lg:leading-6 lg:pr-10">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default MiddleSection;
