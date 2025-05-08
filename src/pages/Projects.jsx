  const projects = [
    {
      title: "Diabetes Prediction App",
      description: "A machine learning app to predict diabetes using health metrics. Built with Python and Django.",
      tech: ["Python", "Django", "ML", "HTML/CSS"],
      github: "https://github.com/your-username/diabetes-prediction",
      demo: "https://your-demo-link.com",
    },
    {
      title: "Real Estate Website",
      description: "A real estate listing site with search and filtering features.",
      tech: ["HTML", "CSS", "JavaScript", "Django"],
      github: "https://github.com/your-username/real-estate",
      demo: "",
    },
    {
      title: "Fitness Data Analyzer",
      description: "Analyzed fitness tracker data using Pandas and Matplotlib.",
      tech: ["Python", "Pandas", "Matplotlib"],
      github: "https://github.com/your-username/fitness-analysis",
      demo: "",
    },
  ];
  
  function Projects() {
    return (
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5 border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="mt-3 text-sm text-gray-500">
                Tech: {project.tech.join(", ")}
              </div>
              <div className="mt-4 flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  