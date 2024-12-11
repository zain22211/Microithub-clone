import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import React from "react";
import Slider from "react-slick";

function Services() {
      // Get window width dynamically to adjust settings for different screen sizes
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define the settings for React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default for smaller screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet to desktop
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets to desktops
          slidesToScroll: 1,
          dots: false, // Hide dots on mobile
          arrows: false, // Hide arrows on mobile
        },
      },
      {
        breakpoint: 768, // Mobile and tablet
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile and small tablets
          slidesToScroll: 1,
          dots: false, // Hide dots on mobile
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };



  return (
    <div>
    <section className="h-20"></section>
    <div>
    <h6 className="font-medium uppercase flex text-center mb-4 justify-center text-blue-600">Our Services</h6>
    <h2 className="flex font-bold text-4xl text-center mb-4 justify-center">We provide All-In-One <br></br> Solution for Every IT Job</h2>
    </div>
    <div className="slider-container">
      {windowWidth <= 1024 ? (
        // Use slider for medium (tablet) and smaller screens
        <Slider {...settings}>
          <div>
          <div className="w-full p-4">
          <div className="group relative bg-white p-6 border-t-[6px] rounded-br-[48px] py-16 border-[#3E66F3] shadow-lg overflow-hidden">
          {/* Hover Background Animation */}
          <div className="absolute inset-0 bg-[#3E66F3] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
      
          {/* Content */}
          <h3 className="relative text-2xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
            Software Development
          </h3>
          <p className="relative text-gray-500 mb-4 group-hover:text-white transition-colors duration-300">
            Building next-generation software solutions to power your business and drive innovation.
          </p>
          <a
            className="relative text-[#3E66F3] py-2 px-4 rounded-md group-hover:text-white font-medium transition-colors duration-300"
          >
            Learn More <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
          </div>
          </div>
          <div>
              {/* Card 2 */}
  <div className="w-full p-4">
  <div className="group relative bg-white p-6 border-t-[6px] rounded-br-[48px] py-16 border-[#3E66F3] shadow-lg overflow-hidden">
    {/* Hover Background Animation */}
    <div className="absolute inset-0 bg-[#3E66F3] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>

    {/* Content */}
    <h3 className="relative text-2xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
      Web Development
    </h3>
    <p className="relative text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">
      Crafting dynamic web experiences to elevate your brand and accelerate growth.
    </p>
    <a
      className="relative text-[#3E66F3] py-2 px-4 rounded-md group-hover:text-white font-medium transition-colors duration-300"
    >
      Learn More <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </div>
</div>
          </div>
          <div>
              {/* Card 3 */}
  <div className="w-full p-4">
  <div className="group relative bg-white p-6 border-t-[6px] rounded-br-[48px] py-16 border-[#3E66F3] shadow-lg overflow-hidden">
    {/* Hover Background Animation */}
    <div className="absolute inset-0 bg-[#3E66F3] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>

    {/* Content */}
    <h3 className="relative text-2xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
      Mobile Application Development
    </h3>
    <p className="relative text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">
      Designing powerful mobile apps that engage users and drive business success.
    </p>
    <a
      className="relative text-[#3E66F3] py-2 px-4 rounded-md group-hover:text-white font-medium transition-colors duration-300"
    >
      Learn More <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </div>
</div>
          </div>
          <div>
          <div className="w-full p-4">
          <div className="group relative bg-white p-6 border-t-[6px] rounded-br-[48px] py-16 border-[#3E66F3] shadow-lg overflow-hidden">
            {/* Hover Background Animation */}
            <div className="absolute inset-0 bg-[#3E66F3] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
        
            {/* Content */}
            <h3 className="relative text-2xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
              Games Development
            </h3>
            <p className="relative text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">
              Creating immersive game experiences that captivate players and bring stories to life.
            </p>
            <a
              className="relative text-[#3E66F3] py-2 px-4 rounded-md group-hover:text-white font-medium transition-colors duration-300"
            >
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
          </div>
        </Slider>
      ) : (
        // On desktop (wider than 1024px), show all slides without slider
        <div className="flex">
        <div className="w-full p-4">
        {/* Card 1 */}
        <div className="group relative bg-white p-6 border-t-[6px] rounded-br-[48px] py-16 border-[#3E66F3] shadow-lg overflow-hidden">
          {/* Hover Background Animation */}
          <div className="absolute inset-0 bg-[#3E66F3] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
      
          {/* Content */}
          <h3 className="relative text-2xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
            Software Development
          </h3>
          <p className="relative text-gray-500 mb-4 group-hover:text-white transition-colors duration-300">
            Building next-generation software solutions to power your business and drive innovation.
          </p>
          <a
            className="relative text-[#3E66F3] py-2 px-4 rounded-md group-hover:text-white font-medium transition-colors duration-300"
          >
            Learn More <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
  {/* Card 2 */}
  <div className="w-full p-4">
  <div className="group relative bg-white p-6 border-t-[6px] rounded-br-[48px] py-16 border-[#3E66F3] shadow-lg overflow-hidden">
    {/* Hover Background Animation */}
    <div className="absolute inset-0 bg-[#3E66F3] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>

    {/* Content */}
    <h3 className="relative text-2xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
      Web Development
    </h3>
    <p className="relative text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">
      Crafting dynamic web experiences to elevate your brand and accelerate growth.
    </p>
    <a
      className="relative text-[#3E66F3] py-2 px-4 rounded-md group-hover:text-white font-medium transition-colors duration-300"
    >
      Learn More <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </div>
</div>
  {/* Card 3 */}
  <div className="w-full p-4">
  <div className="group relative bg-white p-6 border-t-[6px] rounded-br-[48px] py-16 border-[#3E66F3] shadow-lg overflow-hidden">
    {/* Hover Background Animation */}
    <div className="absolute inset-0 bg-[#3E66F3] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>

    {/* Content */}
    <h3 className="relative text-2xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
      Mobile Application Development
    </h3>
    <p className="relative text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">
      Designing powerful mobile apps that engage users and drive business success.
    </p>
    <a
      className="relative text-[#3E66F3] py-2 px-4 rounded-md group-hover:text-white font-medium transition-colors duration-300"
    >
      Learn More <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </div>
</div>
  {/* Card 4 */}
  <div className="w-full p-4">
  <div className="group relative bg-white p-6 border-t-[6px] rounded-br-[48px] py-16 border-[#3E66F3] shadow-lg overflow-hidden">
    {/* Hover Background Animation */}
    <div className="absolute inset-0 bg-[#3E66F3] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>

    {/* Content */}
    <h3 className="relative text-2xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
      Games Development
    </h3>
    <p className="relative text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">
      Creating immersive game experiences that captivate players and bring stories to life.
    </p>
    <a
      className="relative text-[#3E66F3] py-2 px-4 rounded-md group-hover:text-white font-medium transition-colors duration-300"
    >
      Learn More <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </div>
</div>
        </div>
      )}
    </div>

    </div>
  )
}

export default Services