import { useState } from "react";


function Workprocess() {
  const [tabIndex, setTabIndex] = useState(1);
  return (

    <div className="mt-20">
      <h6 className="font-medium flex justify-center uppercase text-start  text-blue-600">process</h6>
      <h2 className="flex justify-center font-bold text-4xl text-left mb-4">Our Work Process</h2>
      <div className="flex mt-10 rounded-[40px] flex-wrap lg:flex-nowrap p-8  mx-auto max-w-[88%] text-center justify-center md:gap-1 bg-slate-100">
      <div className="flex md:w-2/4 mt-16">
      <div className="grid grid-cols-2 gap-4 lg:max-h-9">
        {/* Step 01 and Discovery */}
        <div>
          <button
            onClick={() => setTabIndex(1)}
            className={`uppercase font-medium py-4 px-5 border-[0.01px] rounded-[34px] transition duration-300 ${
              tabIndex === 1 ? 'bg-blue-600 text-white border-0' : 'border-gray-300'
            }`}
          >
            Step-01
          </button>
        </div>
        <div>
          <button
            onClick={() => setTabIndex(1)}
            className={`uppercase font-bold py-4 px-7 border-[0.01px] rounded-[34px] transition duration-300 ${
              tabIndex === 1 ? 'bg-blue-600 text-white border-0' : 'border-gray-300'
            }`}
          >
            Discovery
          </button>
        </div>
    
        {/* Step 02 and Planning */}
        <div>
          <button
            onClick={() => setTabIndex(2)}
            className={`uppercase font-medium py-4 px-5 border-[0.01px] rounded-[34px] transition duration-300 ${
              tabIndex === 2 ? 'bg-blue-600 text-white border-0' : 'border-gray-300'
            }`}
          >
            Step-02
          </button>
        </div>
        <div>
          <button
            onClick={() => setTabIndex(2)}
            className={`uppercase font-bold py-4 px-7 border-[0.01px] rounded-[34px] transition duration-300 ${
              tabIndex === 2 ? 'bg-blue-600 text-white border-0' : 'border-gray-300'
            }`}
          >
            Planning
          </button>
        </div>
    
        {/* Step 03 and Execute */}
        <div>
          <button
            onClick={() => setTabIndex(3)}
            className={`uppercase font-medium py-4 px-5 border-[0.01px] rounded-[34px] transition duration-300 ${
              tabIndex === 3 ? 'bg-blue-600 text-white border-0' : 'border-gray-300'
            }`}
          >
            Step-03
          </button>
        </div>
        <div>
          <button
            onClick={() => setTabIndex(3)}
            className={`uppercase font-bold py-4 px-7 border-[0.01px] rounded-[34px] transition duration-300 ${
              tabIndex === 3 ? 'bg-blue-600 text-white border-0' : 'border-gray-300'
            }`}
          >
            Execute
          </button>
        </div>
    
        {/* Step 04 and Finished */}
        <div>
          <button
            onClick={() => setTabIndex(4)}
            className={`uppercase font-medium py-4 px-5 border-[0.01px] rounded-[34px] transition duration-300 ${
              tabIndex === 4 ? 'bg-blue-600 text-white border-0' : 'border-gray-300'
            }`}
          >
            Step-04
          </button>
        </div>
        <div>
          <button
            onClick={() => setTabIndex(4)}
            className={`uppercase font-bold py-4 px-7 border-[0.01px] rounded-[34px] transition duration-300 ${
              tabIndex === 4 ? 'bg-blue-600 text-white border-0' : 'border-gray-300'
            }`}
          >
            Finished
          </button>
        </div>
      </div>
    </div>
    

        {
          tabIndex === 1 && (
            <div className="flex flex-col md:flex-row md:ml-24 text-left">
            {/* Left Content Section */}
            <div className="md:w-2/4">
              <h2 className="text-2xl font-bold text-black mb-3">
                Building the Right Solution from the Start
              </h2>
              <p className="mb-3 text-gray-500">
                At MicroITHub, our Discovery process is designed to fully understand your vision, business needs, and project goals, ensuring we build the most effective solution for you. Here’s how we approach it:
              </p>
              <ul className="list-disc space-y-4 ml-4">
                <li>Understanding Your Vision</li>
                <li>User and Market Research</li>
                <li>Requirements Gathering</li>
                <li>Feasibility Assessment</li>
                <li>Defining Project Scope</li>
              </ul>
            </div>
          
            {/* Right Image Section */}
            <div className="flex justify-center items-center md:w-2/4 mt-10 md:mt-0">
              <img
                className="h-[460px] rounded-3xl"
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Work Process"
              />
            </div>
          </div>

          ) 

        }

        {
          tabIndex===2 && (
            <div className="flex flex-col md:flex-row md:ml-24 text-left">
            {/* Left Content Section */}
            <div className="md:w-2/4">
              <h2 className="text-2xl font-bold text-black mb-3">
              Setting a Clear Path to Success
              </h2>
              <p className="mb-3 text-gray-500">
              After Discovery, our Planning phase lays out a detailed roadmap to turn your vision into a fully functional software solution. Here’s how we plan to ensure a smooth, successful project.
              </p>
              <ul className="list-disc space-y-4 ml-4">
                <li>Defining the Project Roadmap</li>
                <li>Resource Allocation</li>
                <li>Technology Stack Selection</li>
                <li>Risk Assessment and Mitigation</li>
                <li>Setting Communication and Review Points</li>
              </ul>
            </div>
          
            {/* Right Image Section */}
            <div className="flex justify-center items-center md:w-2/4 mt-10 md:mt-0">
              <img
                className="h-[460px] rounded-3xl"
                src="https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Work Process"
              />
            </div>
          </div>



          )
        }

        {
          tabIndex===3 && (
            <div className="flex flex-col md:flex-row md:ml-24 text-left">
            {/* Left Content Section */}
            <div className="md:w-2/4">
              <h2 className="text-2xl font-bold text-black mb-3">
              Bringing Your Vision to Life
              </h2>
              <p className="mb-3 text-gray-500">
              With a solid plan in place, our Execution phase is where your project starts to take shape. Our development team works diligently to build, keeping quality and functionality at the forefront.

              </p>
              <ul className="list-disc space-y-4 ml-4">
                <li>Development and Coding</li>
                <li>Regular Testing and Quality Assurance</li>
                <li>Continuous Feedback Loop</li>
                <li>Integration of Features</li>
                <li>Documentation</li>
              </ul>
            </div>
          
            {/* Right Image Section */}
            <div className="flex justify-center items-center md:w-2/4 mt-10 md:mt-0">
              <img
                className="h-[460px] rounded-3xl"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Work Process"
              />
            </div>
          </div>



          )
        }

        {
          tabIndex===4 && (
            <div className="flex flex-col md:flex-row md:ml-24 text-left">
            {/* Left Content Section */}
            <div className="md:w-2/4">
              <h2 className="text-2xl font-bold text-black mb-3">
              Delivering a Ready-to-Launch Solution
              </h2>
              <p className="mb-3 text-gray-500">
              In the Finish phase, we ensure your software is polished, fully functional, and ready for launch. This is the final step where we prepare your solution for seamless deployment and use.              </p>
              <ul className="list-disc space-y-4 ml-4">
                <li>Final Testing and Quality Checks</li>
                <li>User Acceptance Testing (UAT)</li>
                <li>Optimization and Fine-Tuning</li>
                <li>Deployment and Launch</li>
                <li>Post-Launch Support and Documentation</li>
              </ul>
            </div>
          
            {/* Right Image Section */}
            <div className="flex justify-center items-center md:w-2/4 mt-10 md:mt-0">
              <img
                className="h-[460px] rounded-3xl"
                src="https://images.pexels.com/photos/9869626/pexels-photo-9869626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Work Process"
              />
            </div>
          </div>



          )
        }




      
      </div>
    </div>
  );
}

export default Workprocess;
