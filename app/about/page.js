export default function AboutPage() {
  const profile = {
    name: "Nency Ajudiya",
    title: "MERN Stack Developer",
    location: "Rajkot, India",
    email: "ajudiyanency@gmail.com",
    phone: "+91 8780666274",
    linkedin: "https://www.linkedin.com/in/nency-ajudiya",
    github: "https://github.com/nencydev",
    liveProject: "https://weather-app-dkn8.onrender.com/",
    bio: "Motivated and detail-oriented MERN Stack Developer with 8 months of internship experience at Yellow Panther IO. Skilled in building full-stack web applications with clean, responsive, and scalable design using MongoDB, Express, React, and Node.js.",
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Git & GitHub",
      "Postman",
      "Bootstrap",
    ],
    experience: [
      {
        role: "MERN Stack Developer Intern",
        company: "Yellow Panther IO, Ahmedabad",
        description:
          "Developed a full-stack weather app with geolocation and multi-language support using React, Node.js, and Express.js. Collaborated with team members to ensure responsive UI and clean code.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Engineering - Information Technology",
        college: "VVP Engineering College, Rajkot",
        cgpa: "9.13 CGPA",
      },
      {
        degree: "Higher Secondary Education - Science",
        college: "Tapovan Science School, Rajkot",
      },
    ],
    projects: [
      {
        title: "Weather Track",
        description:
          "A full-stack weather app built using React, Tailwind CSS, Node.js, and Express.js with geolocation, multi-language support, and real-time weather updates.",
        link: "https://weather-app-dkn8.onrender.com/",
      },
      {
        title: "E-commerce Platform",
        description:
          "Developed a responsive e-commerce web application with admin and user login, product catalog, cart management using localStorage, and integrated payment gateway. Built using React, Tailwind CSS, Node.js, and Express.js with an interactive UI powered by Sweet Alert.",
        link: "https://github.com/nencydev/E-commerce.git", 
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-indigo-600">{profile.name}</h1>
      <p className="text-gray-700">
        {profile.title} | {profile.location}
      </p>
      <p className="text-gray-600">{profile.bio}</p>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
          Experience
        </h2>
        <ul className="space-y-3">
          {profile.experience.map((exp, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-lg">{exp.role}</p>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Education</h2>
        <ul className="space-y-2">
          {profile.education.map((edu, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-gray-600">{edu.college}</p>
              {edu.cgpa && (
                <p className="text-gray-600 text-sm">CGPA: {edu.cgpa}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Projects</h2>
        <ul className="space-y-3">
          {profile.projects.map((project, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="font-semibold">{project.title}</p>
              <p className="text-gray-600 text-sm">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:underline mt-2 inline-block"
                >
                  {project.title === "Weather Track"
                    ? " Weather Track Link"
                    : " View Project"}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Contact</h2>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-indigo-600 hover:underline"
          >
            {profile.email}
          </a>
        </p>
        <p className="text-gray-700">Phone: {profile.phone}</p>
        <p className="text-gray-700">
          LinkedIn:{" "}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            View Profile
          </a>
        </p>
        <p className="text-gray-700">
          GitHub:{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            View Repos
          </a>
        </p>
      </div>
    </div>
  );
}
