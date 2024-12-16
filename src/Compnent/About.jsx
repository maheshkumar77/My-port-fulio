import { motion } from "framer-motion";
import abimg from './aboutimg.webp';

const About = () => {
  return (
    <div className="border-b border-x-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Left Side Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl h-[400px] w-[400px] mt-0"
              src={abimg}
              alt="aboutpic"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="flex justify-center lg:justify-start">
            <p>
              Hello, I am Mahesh Kumar Sahu, a dedicated B.Tech student passionate about technology and innovation. I am currently pursuing my Bachelors degree in Engineering and have developed a strong foundation in subjects related to computer science, programming, and software development.
              Throughout my academic journey, I have cultivated a deep interest in various technical fields such as web development, coding, and problem-solving. I am constantly exploring new tools and frameworks, and I'm enthusiastic about learning and applying my skills in real-world projects.
              Apart from my academic pursuits, I am an advocate of continuous learning and self-improvement. I strive to enhance my technical knowledge and skills through hands-on projects, online courses, and collaborating with peers. My goal is to contribute to meaningful technological advancements and grow as a proficient developer.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
