import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KevinRushProfile.png";
import { motion } from "framer-motion";
const container=(delay) => ({
  hidden: { x:-100,opacity: 0 },
  visible:{ x: 0, opacity: 1,transition: { duration: 0.5, delay: delay } }
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex flex-wrap items-center"> {/* FLEX CONTAINER */}
        
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            
            className="pb-4 text-4xl font-thin tracking-tight lg:text-8xl text-white">
            Swati Konnuri
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent">
              Front-End Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl font-light tracking-tight text-white">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
          <motion.img
            initial={{x: 100,opacity: 0}}
            animate={{x: 0,opacity: 1}}
            transition={{ duration: 1,delay:1.2}}
            
            src={profilePic}
            alt="Swati Konnuri"
            className="rounded-xl max-w-xs w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
