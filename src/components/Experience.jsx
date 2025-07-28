import { EXPERIENCES } from "../constants"


const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl text-white">Experience</h2>
        <div className="">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center text-white">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>

              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                  
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 mt-4 inline-block rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-purple-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Experience