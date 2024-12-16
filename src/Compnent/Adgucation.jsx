
import educationData from './Corce'; // import the data from the correct file
import { motion } from "framer-motion";
const Adgucation = () => {
  return (
    <div className="border-b border-x-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:40}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Education</motion.h1>
      <div>
        {educationData.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:1, x:-100}}
            transition={{duration:1}}
             className="w-full lg:w-1/4">
              <p className=" mb-2 text-sm text-neutral-400 ">{item.year}</p>
              
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
             className=" w-full max-w-xl lg:w-3/4">
            <h6 className=" mb-2 font-semibold">
            {item.course}- <span className=" text-sm text-purple-100">{item.college}</span>
            </h6>
            <p  className=" mb-4 text-neutral-400">{item.aboutCourse}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adgucation;