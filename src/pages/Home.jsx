function Home() {
    return (
        
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-8">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Hi, I'm Chandrakala</h1>
          <p className="mt-3 text-lg text-gray-700">
            I'm a passionate front-end developer learning React. I love building beautiful web apps and improving my coding skills.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-5 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  }
  
  export default Home;
  