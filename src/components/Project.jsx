import { PROJECTS } from '../constants';

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Section title */}
      <h2 className="my-20 text-center text-4xl text-white">Projects</h2>

      {/* Loop through each project in the PROJECTS array */}
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            {/* Project Image */}
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-4 rounded"
              />
            </div>

            {/* Project Details: Title, Description, Link, Technologies */}
            <div className="w-full max-w-xl lg:w-3/4">
              {/* Project Title */}
              <h6 className="mb-2 font-semibold text-white">{project.title}</h6>
              
              {/* Project Description */}
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Project Link */}
              <p className="text-neutral-100">
                Link: 
                <a
                  href={project.link}
                  className="text-blue-200 underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </p>

              {/* Technologies Used */}
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-xs text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
