
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    <footer className="bg-[#080E1C] text-white py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Copyright Text */}
        <p className="text-sm md:text-base">
          © 2024 MicroItHub. All Rights Reserved.
        </p>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" rel="noopener noreferrer" className="hover:text-blue-500">
            <FontAwesomeIcon
              className="rounded-full bg-gray-700 p-3 text-white"
              icon={faFacebook}
            />
          </a>
          <a href="#" rel="noopener noreferrer" className="hover:text-blue-400">
            <FontAwesomeIcon
              className="rounded-full bg-gray-700 p-3 text-white"
              icon={faLinkedin}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
