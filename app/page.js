export default function HomePage() {
  return (
    <div className="text-center space-y-6 p-8">
      <h1 className="text-4xl font-bold text-indigo-600">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Hi! I'm <span className="font-semibold text-indigo-600">Nency Ajudiya</span>, 
        a passionate <span className="font-semibold">MERN Stack Developer</span> India. 
        I love building clean, responsive, and modern web applications using 
        <span className="font-medium"> React.js, Node.js, Express.js,</span> and 
        <span className="font-medium"> MongoDB.</span> 
        Explore my portfolio to discover my projects, experience, and skills.
      </p>

      <a
        href="/about"
        className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-transform transform hover:scale-105 shadow-md"
      >
        Learn More About Me
      </a>

    </div>
  );
}
