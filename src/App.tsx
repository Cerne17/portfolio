import { useState, useEffect } from "react";
import type { Project } from "./types/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Awesome Project Alpha",
    description:
      "A revolutionary web application that solves a complex problem using cutting-edge technologies. Features include X, Y, and Z.",
    imageUrl:
      "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Project+Alpha", // Placeholder image
    tags: ["React", "TypeScript", "Node.js", "API"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Machine Learning Insights",
    description:
      "Developed a predictive model for analyzing market trends. Leveraged Python, scikit-learn, and TensorFlow.",
    imageUrl:
      "https://via.placeholder.com/400x250/10B981/FFFFFF?text=ML+Insights", // Placeholder image
    tags: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Site V1",
    description:
      "The very first version of my personal portfolio, built to showcase my skills and projects. (This is a meta-project entry!)",
    imageUrl:
      "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Portfolio+V1", // Placeholder image
    tags: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "#",
  },
  // Add more projects as needed
];

function App() {
  const [isH1Visible, setIsH1Visible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsH1Visible(true);
    }, 300); // Delay for 1 second before showing the h1 element

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Navbar />
      <main className="flex-grow container mx-auto p-6 md:p-8">
        {/* Home Section - Can be more elaborate later */}
        <section id="home" className="my-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-600 mb-4">
            Hi, I'm Miguel Cerne!
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A passionate Full-Stack Developer specializing in building robust
            web applications and intelligent systems. Welcome to my personal
            space where I share my journey and projects.
          </p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="my-16 py-10 bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]"
        >
          <h2 className="text-3xl font-semibold text-slate-700 mb-6 text-center">
            About Me
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate-600">
            Hi, I’m Miguel — a passionate and curious developer currently
            studying Electronic and Computer Engineering at UFRJ. I have
            hands-on experience with back-end development using TypeScript,
            Node.js (especially NestJS), PostgreSQL, and Docker, as well as data
            science tools like Python, Pandas, and Scikit-Learn.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-600">
            I enjoy building robust APIs, solving real-world problems with code,
            and exploring how software and hardware intersect. I've worked on
            research projects involving machine learning at GTA-UFRJ and
            developed scalable systems as a back-end developer at Fluxo
            Consultoria.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-600">
            Right now, I'm focused on improving my skills in full-stack
            development, cloud infrastructure, and software architecture —
            always aiming to write clean, maintainable, and well-tested code.
            When I’m not coding, you’ll find me learning new tech, tackling
            engineering challenges, or working on side projects that push my
            limits.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-600">
            Let’s build something great together.
          </p>
          {/* ... more about content ... */}
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 mb-8 text-center">
            My Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* Grid layout for cards */}
            {sampleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="my-16 py-12 bg-white shadow-xl rounded-lg"
        >
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 mb-8 text-center">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Left Side: Contact Info & Socials */}
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of something amazing. Feel free to
                  reach out!
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">
                    Email Me
                  </h3>
                  <a
                    href="mailto:your.email@example.com" // REPLACE with your actual email
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-lg"
                  >
                    miguelcerne.dev@gmail.com{" "}
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-3">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/miguelcerne/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 transition-colors text-2xl"
                      title="LinkedIn"
                    >
                      {/* Placeholder for an icon - we'll add actual icons later if desired */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Cerne17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-gray-900 transition-colors text-2xl"
                      title="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/CerneDev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-sky-500 transition-colors text-2xl"
                      title="Follow me on X"
                    >
                      {" "}
                      {/* Changed hover color */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>{" "}
                  </div>
                </div>
              </div>

              {/* Right Side: Basic Contact Form (Visual Only) */}
              <div className="bg-slate-50 p-6 md:p-8 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold text-slate-700 mb-6">
                  Send Me a Message
                </h3>
                <form action="https://formspree.io/f/mqaqdkgw" method="POST">
                  {" "}
                  {/* Replace action with your form endpoint */}
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-slate-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-slate-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-slate-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Let's talk about..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
