function About() {
    return (
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">About Me</h2>
  
        <p className="text-gray-700 text-lg mb-6">
          I'm Chandrakala, a passionate software developer focused on building responsive, user-friendly web applications.
          I love solving real-world problems with code and am constantly learning new technologies to improve my skills.
        </p>
  
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
          <li className="bg-gray-100 p-2 rounded">React</li>
          <li className="bg-gray-100 p-2 rounded">JavaScript</li>
          <li className="bg-gray-100 p-2 rounded">HTML & CSS</li>
          <li className="bg-gray-100 p-2 rounded">Python</li>
          <li className="bg-gray-100 p-2 rounded">SQL</li>
          <li className="bg-gray-100 p-2 rounded">Tailwind CSS</li>
        </ul>
  
        <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  }
  
  export default About;
  