import { Link } from "react-router-dom"
import CustomCursor from "../../../CustomCursor"
import aboutimg from "./aboutimg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import certificateicon from './certificateicon.png';
import expertteam from './expertteam.png';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Aboutus() {
  return (
    <div>
    <CustomCursor />
    <div className="">
      <section className="h-28"></section>
      <div className="w-full h-96 items-center flex flex-col justify-center bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
        <div className="space-y-4">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
          <h1 className="text-white text-xl font-bold "><Link to='/'>Home</Link> &gt;&gt; About Us</h1>
        </div>
      </div>
      <section className="h-28"></section>
        <div className="flex max-w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

        <div
        className="h-[530px] w-[530px] relative"
        style={{ backgroundImage: `url(${aboutimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-blue-500 w-[160px] h-[160px] flex flex-col justify-center items-center text-white text-l text-center rounded-full border-[13px] border-white">
          <div className="text-5xl font-extrabold">4</div>
          <div>Years Experience</div>
        </div>
      </div>
      
          
          <div className="mt-4 md:mt-20 md:ml-4 text-left md:text-left">
          <h6 className="font-medium uppercase text-start mb-4  text-blue-600">About us</h6>
          <h2 className=" font-bold text-4xl text-left mb-4">
          Unlocking New Business Opportunities with{" "}
            <span className="text-[#3E66F3]">Smart IT Solutions</span>
          </h2>
        
          <div className="space-y-8 text-gray-600">
          <p>
          Microithub provides tailored software solutions that drive business success. We specialize in custom IT services designed to streamline processes, boost efficiency, and foster growth. Let’s make technology work smarter for you!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-6">
        <div className="flex items-center space-x-2">
        <img className="w-12" src={certificateicon} />
        <span className="font-bold">Certified Company <br></br>
         <p className="font-medium text-gray-500">Best Provide Skills Services</p>  
        </span>
        </div>
        <div className="flex items-center space-x-2">
        <img className="w-12" src={expertteam} />
        <span className="font-bold">Expert Team <br></br>
         <p className="font-medium text-gray-500">100% Expert Team</p>  
        </span>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-12 border-t-[1px] pt-8">
        <div className="flex items-center space-x-2">
      
        <FontAwesomeIcon className=' text-2xl rounded-full bg-[#3e66f3]  p-5 text-white'  icon={faPhone}/>
        <span className="font-bold">Call Us On: <br></br>
         <p className="font-medium text-gray-500"><a href={`tel:+130-7291-4613`} className="hover:text-blue-500">+130-7291-4613</a></p>  
        </span>
        </div>
        <div className="flex items-center space-x-2">
        <FontAwesomeIcon className=' text-2xl rounded-full bg-[#3e66f3]  p-5 text-white'  icon={faPhone}/>
        <span className="font-bold">Call Us On: <br></br>
         <p className="font-medium text-gray-500"><a href={`tel:+92329-5331-837`} className="hover:text-blue-500">+92329-5331-837</a></p>  
        </span>
        </div>
        </div>
        </div>


        </div>
        </div>
    </div>
    <section className="h-28"></section>

  </div>
  )
}

export default Aboutus