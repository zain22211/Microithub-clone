import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Contactinfo() {
  return (
    <div>
    <div className="flex mt-14 rounded-[40px] flex-wrap lg:flex-nowrap p-8 md:p-10 mx-auto max-w-[88%]  text-center justify-center md:gap-1 bg-[#3e66f3]">
    <div className=" flex md:w-2/4 text-center">
    <div className='flex w-4/4 justify-center items-center '>
    <div className='  '>
    <FontAwesomeIcon className='text-2xl rounded-full bg-[#3e66f3] border-2 p-5 text-white'  icon={faPhone}/>
    </div>
    <div className='text-white' >
    <p>Call For More Info
    </p>
    <div className='text-2xl font-bold'>
    <h2>
    (+13)072914613
    </h2>
    <h2>
    (+92)3295331837
    </h2>
    </div>
    </div>
    </div>
    </div>
    <div className="flex md:w-2/4  p-4 text-left text-2xl font-bold text-white">
    <h2>Request your free consultation today and discover how our IT solutions can drive your business forward</h2>
    
    </div>
    <div className="flex justify-center items-center md:w-2/4  m:p-4 ">
    <button className="-z-7 py-6 font-medium relative flex h-[50px] w-52 items-center border-2 justify-center overflow-hidden bg-blue-600 rounded-[40px] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white hover:text-black before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
    <span className="relative ">Get Started Now</span>
    </button>
    </div>
    </div>
    
    
    </div>
  )
}

export default Contactinfo