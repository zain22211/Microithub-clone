import { Link } from "react-router-dom"
import CustomCursor from "../../../CustomCursor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faEye, faSquareCheck } from "@fortawesome/free-solid-svg-icons"




function Careers() {
  return (

    <div>
    <CustomCursor />
    <div className="">
      <section className="h-28"></section>
      <div className="w-full h-96 items-center flex flex-col justify-center bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
        <div className="space-y-4">
          <h1 className="text-white text-5xl font-bold">Careers</h1>
          <h1 className="text-white text-xl font-bold "><Link to='/'>Home</Link> >> Careers</h1>
        </div>
      </div>
      <section className="h-28"></section>
      <div className="fle max-w-[92%] mx-auto">
      <div className="flex justify-left items-center bg-blue-700 text-white py-4 px-5 max-w-[92%] mx-auto">
        <FontAwesomeIcon className="mr-4" icon={faSquareCheck}/>Latest Jobs
      </div> 
      <div className=" grid grid-cols-3 font-bold place-items-center py-9 mt-5 bg-gray-300 text-black px-5 max-w-[92%] mx-auto">
      <div>Job Title</div>
      <div>Last Date</div>
      <div>Advertisement</div>
    </div>
    <div className=" grid border-[1px] grid-cols-3 place-items-center py-7   text-slate-500 px-5 max-w-[92%] mx-auto">
    <div>Upwork & Fiverr Bidder Required</div>
    <div>12/02/2024</div>
    <div>
    <FontAwesomeIcon className="text-blue-500 font-bold" icon={faEye}/>
    </div>
  </div>
      </div>
    </div>
    <section className="h-28"></section>

  </div>
  
  )
}

export default Careers