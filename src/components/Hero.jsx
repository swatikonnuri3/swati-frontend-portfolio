import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KevinRushProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex flex-wrap items-center">
        
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 text-4xl font-thin tracking-tight lg:text-8xl text-white">
              Swati Konnuri
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent">
              Front-End Developer
            </span>
            <p className="mt-6 max-w-xl font-light tracking-tight text-white">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
          <img
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
