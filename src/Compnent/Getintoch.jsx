import { Contact } from "./ProjectData"
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
const Getintoch = () => {
  return (
    <div className=" border-b border-neutral-900 pb-20">
<motion.h1 
 whileInView={{opacity:1, y:0}}
 initial={{opacity:1, y:-50}}
 transition={{duration:0.5}}
 className=" my10 text-center text-4xl"> Get in Touch</motion.h1> 
     <div className=" text-center tracking-tighter ">
     <motion.p 
     whileInView={{opacity:1, y:0}}
 initial={{opacity:1, y:50}}
 transition={{duration:0.5}}
     className=" pt-8"> {Contact.address} </motion.p>
     <motion.p 
      whileInView={{opacity:1, y:0}}
 initial={{opacity:1, y:50}}
 transition={{duration:0.5}}
     className=" py-4 flex flex-row items-center justify-center"> {Contact.phno} <span className=" ml-3 text-blue-700"> <IoIosCall /></span></motion.p>
     <motion.p 
       whileInView={{opacity:1, y:0}}
 initial={{opacity:1, y:50}}
 transition={{duration:0.5}}
     className=" pt-2 flex flex-row items-center justify-center"> <a href="#">{Contact.email}</a> <span className=" ml-3 text-white-700"> <BiLogoGmail /></span></motion.p>
     </div> 
    </div>
  )
}

export default Getintoch
