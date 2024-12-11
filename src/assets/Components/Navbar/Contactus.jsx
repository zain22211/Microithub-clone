import { Link } from "react-router-dom"
import CustomCursor from "../../../CustomCursor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faEye, faLocation, faLocationDot, faSquareCheck } from "@fortawesome/free-solid-svg-icons"




function Contactus() {
    const phoneNumber = "(+13) - 07291 - 4613"; 
    const phoneNumber2 = "+92329-5331-837"; 
    const email = "info@microithub.com";
  return (

    <div>
    <CustomCursor />
    <div className="">
      <section className="h-28"></section>
      <div className="w-full h-96 items-center flex flex-col justify-center bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
        <div className="space-y-4">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>
          <h1 className="text-white text-center text-xl font-bold "><Link to='/'>Home</Link> &gt;&gt; Contact Us</h1>
        </div>
      </div>
      <section className="h-28"></section>
      <div className="flex max-w-[92%] mx-auto">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center py-9 mt-5 bg-gray-100 px-5 mx-auto">
        {/* Office Address Section */}
        <div className="p-6 pr-24 bg-white">
          <FontAwesomeIcon className="text-5xl border-2 border-blue-500 p-3 px-5 text-white bg-blue-500 rounded shadow-[6px_7px_6px_0px_rgba(59,_130,_246,_0.5)]" icon={faLocationDot} />
          <br />
          <h1 className="font-bold text-xl mb-2">Our Office Address</h1>
          <p>57D Commercial, Nawab <br></br> Town, Raiwind Road, Lahore, <br></br> Pakistan</p>
        </div>
    
        {/* Call Us Section */}
        <div className="p-8 pr-36 bg-white">
          <FontAwesomeIcon className="text-5xl border-2 border-blue-500 p-3 px-5 text-white bg-blue-500 rounded shadow-[6px_7px_6px_0px_rgba(59,_130,_246,_0.5)]" icon={faLocationDot} />
          <br />
          <h1 className="font-bold text-xl mb-2">Call Us Anytime</h1>
          <p>
            <a href={`tel:${phoneNumber}`} className="hover:text-blue-500">{phoneNumber}</a>
          </p>
          <p>
            <a href={`tel:${phoneNumber2}`} className="hover:text-blue-500">{phoneNumber2}</a>
          </p>
        </div>
    
        {/* Send Email Section */}
        <div className="p-8 pr-36 py-11 bg-white">
          <FontAwesomeIcon className="text-5xl border-2 border-blue-500 p-3 px-5 text-white bg-blue-500 rounded shadow-[6px_7px_6px_0px_rgba(59,_130,_246,_0.5)]" icon={faLocationDot} />
          <br />
          <h1 className="font-bold text-xl mb-2">Send An Email</h1>
          <p><a href={`mailto:${email}`} className="hover:text-blue-500">{email}</a></p>
        </div>
      </div>
    
    </div>
        <section className="h-16"></section>
    <div className="max-w-3xl  p-6   ">
  <p className="text-l font-bold text-left mb-4 uppercase text-blue-600">Contact with us!</p>
  <h2 className="text-3xl font-bold text-left mb-6 capitalize">Have any questions?</h2>
    <p className="text-left mb-6">Your success is our priority – let’s make it happen together!</p>
  <form className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-lg font-semibold text-gray-700"></label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Full Name" 
          className="w-full px-5 py-2 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-lg font-semibold text-gray-700"></label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Email Address" 
          className="w-full px-5 py-2 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="service" className="block text-lg font-semibold text-gray-700"></label>
        <select name="cars" id="cars" placeholder="Phone Number" 
        className="w-full px-4 py-2 border bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="volvo">Web Development</option>
        <option value="saab">Software Development</option>
        <option value="opel">Mobile App Development</option>
      </select>
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="phone" className="block text-lg font-semibold text-gray-700"></label>
        <input 
          type="text" 
          id="phone" 
          name="phone" 
          placeholder="Phone Number" 
          className="w-full px-4 py-2 border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>
    </div>

    {/* Message Field */}
    <div>
      <label htmlFor="message" className="block text-lg font-semibold text-gray-700"></label>
      <textarea 
        id="message" 
        name="message" 
        rows="4" 
        placeholder="Your Message"
        className="w-full px-4 py-2 border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="text-center">
      <button 
        type="submit" 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Send Message
      </button>
    </div>
  </form>
</div>

    
    </div>
    <section className="h-28"></section>
    <div className="overflow-hidden w-full h-full">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.4564309780752!2d74.2491115473579!3d31.452432184668144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff28ab125c99%3A0xf53d7b03684b230e!2sThe%20OCCESS%20GAMES%20STUDIO!5e0!3m2!1sen!2s!4v1733864465208!5m2!1sen!2s" className="w-full h-[600px]"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>


  </div>
  )
}

export default Contactus