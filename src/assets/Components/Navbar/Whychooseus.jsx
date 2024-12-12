import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Whychooseus = () => {
  const percentage = 96;
  const percentage1 = 95;
  const percentage2 = 80;

  return (
    <div data-aos="zoom-out"  className="flex flex-col md:flex-row items-center p-4 mb-10 mt-10">
      <div className="mt-4 md:mt-20 md:ml-4 text-left md:text-left md:w-2/4">
        <h6 className="font-medium uppercase text-start mb-4 text-blue-600">Why choose us</h6>
        <h2 className="font-bold text-4xl text-left mb-4">
          Microithub: Empowering Your Business with Leading-Edge Software and Expertise in Digital Excellence
        </h2>
      </div>
      <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* Progress Bar 1 */}
        <div className="w-full flex flex-col items-center ">
          <div className="w-40 h-40 font-[500]">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textSize: "20   px",
                pathColor: "#3b82f6",
                textColor: "#000",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
          <div className="mt-4 text-lg font-medium text-center text-gray-800">Team Members</div>
        </div>
    
        {/* Progress Bar 2 */}
        <div className="w-full flex flex-col items-center">
          <div className="w-40 h-40 font-[500]">
            <CircularProgressbar
              value={percentage1}
              text={`${percentage1}%`}
              styles={buildStyles({
                textSize: "20px",
                pathColor: "#3b82f6",
                textColor: "#000",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
          <div className="mt-4 text-lg font-medium text-center text-gray-800">Completed Projects</div>
        </div>
    
        {/* Progress Bar 3 */}
        <div className="w-full flex flex-col items-center">
          <div className="w-40 h-40 font-[500]">
            <CircularProgressbar
              value={percentage2}
              text={`${percentage2}%`}
              styles={buildStyles({
                textSize: "20px",
                pathColor: "#3b82f6",
                textColor: "#000",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
          <div className="mt-4 text-lg font-medium text-center text-gray-800">Winning Awards</div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Whychooseus;
