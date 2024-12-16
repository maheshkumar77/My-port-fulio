
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import logo from './logo.png'
const Navbar = () => {
  return (
    <div className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
       <img className=" mx-5 w-10 h-9" src={logo} alt=''/>
             </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href='https://www.linkedin.com/in/mahesh-kumar-sahu-8ba8b6229/'> <FaLinkedin/></a>
       <a href='#'> <FaInstagram/></a>
      <a href='https://github.com/maheshkumar77'> <FaGithub/></a>
        <a href='#'><FaTwitter/></a>
      </div>
    </div>
  );
};

export default Navbar;
