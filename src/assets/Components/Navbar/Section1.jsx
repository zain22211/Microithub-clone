
import dummyimg from './dummyimg.jpg';
function Section1() {

  
  return (
    <div>
    <section className='h-20'></section>
    <div className="w-full flex flex-col xl:flex-row items-center md:p-12 p-8 md:pl-28 bg-black shadow-md">
    {/* Text Section */}
    <div className="md:mb-[120px] mb-5 md:text-left">
      <h2 className="text-xl font-medium text-[#3E66F3] mb-10 md:mt-24">
        WE DREAM | WE DESIGN | WE DEVELOP | WE DELIVER
      </h2>
      <p className="text-white font-bold text-[60px] mb-4">
        Transforming <br></br> Ideas into <br></br> Software, Web and <br></br>Apps  
      </p>
      <button className="-z-7 py-6 font-medium relative flex h-[50px] w-52 items-center justify-center overflow-hidden bg-blue-600 rounded-[40px] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white hover:text-black before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
      <span className="relative ">Get Started Now</span>
      </button>
    
    </div>
    <section className='h-12'></section>

    {/* Image Section */}
    <div className="">
      <img
        src={dummyimg}
        alt="This is an image"
        className="rounded-[30px] w-full"
      />
    </div>
  </div>
    </div>
  )
}

export default Section1