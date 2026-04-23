import agrImg from "./assets/agr.PNG";
import eduImg from "./assets/eds.PNG";
import voteImg from "./assets/aybs.PNG";

export default function Portfolio() {
  const experience = [
    {
      title: "Frontend & Full-Stack Development",
      detail:
        "Building responsive web apps and dashboards using React, PHP, MySQL, and TailwindCSS.",
    },
    {
      title: "Real Project Experience",
      detail:
        "Created practical systems such as marketplaces, school systems, and online voting platforms.",
    },
    {
      title: "Continuous Learning",
      detail:
        "Always improving skills in modern web technologies, UI design, and scalable development.",
    },
  ];
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "TailwindCSS",
    "PHP",
    "MySQL",
    "Git & GitHub",
    "Responsive Design",
    "REST APIs",
    "UI/UX Design",
    "Problem Solving",
  ];

  const projects = [
    {
      link: "https://ayobovote.wuaze.com/",
      image: voteImg,
      title: "Online Voting System",
      description:
        "A secure voting platform with authentication, vote tracking, and an admin dashboard for election management.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
    },
    {
      link: "https://agrilink.zya.me/",
      image: agrImg,
      title: "Farmers & Buyers Marketplace",
      description:
        "A marketplace connecting farmers with buyers, featuring listings, categories, and a responsive shopping experience.",
      tech: ["React", "TailwindCSS", "PHP", "MySQL"],
    },
    {
      link: "https://eduflow.pxxl.click/",
      image: eduImg,
      title: "School Management System",
      description:
        "A system for managing teachers, students, attendance, and records with a clean dashboard interface.",
      tech: ["React", "PHP", "MySQL"],
    },
  ];

  const services = [
    "Responsive Website Development",
    "Frontend Development with React",
    "PHP & MySQL Backend Development",
    "Bug Fixing & Optimization",
    "Dashboard & Admin Panels",
    "Landing Pages & Business Websites",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden scroll-smooth">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-cyan-400 mb-4">
              Full-Stack Developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Samuel Adetunji
              <span className="block text-cyan-400">Oluwaferanmi</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I build responsive websites and web applications using React, PHP,
              MySQL, and TailwindCSS. With 2–3 years of experience, I focus on
              creating clean interfaces, functional systems, and scalable
              digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-semibold text-slate-950"
              >
                View Projects
              </a>
              <a
                href="https://github.com/codezSam7"
                target="_blank"
                rel="noreferrer"
                className="border border-slate-700 hover:border-cyan-400 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative max-w-md mx-auto w-full">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-[2rem] p-6 sm:p-8 border border-slate-800 shadow-2xl">
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-400 text-sm">
                    Developer Snapshot
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full">
                    Available for Work
                  </span>
                </div>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base">
                  <div className="flex justify-between border-b border-slate-800 pb-3">
                    <span>Experience</span>
                    <span>2–3 Years</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-3">
                    <span>Specialty</span>
                    <span>Full-Stack Web Apps</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-3">
                    <span>Stack</span>
                    <span>React + PHP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span>Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 sm:px-6 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
              I’m a passionate developer who enjoys building practical digital
              solutions. I have experience creating systems such as online
              voting platforms, marketplaces, and management dashboards. My goal
              is to help businesses and individuals bring ideas to life through
              functional, modern web applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <h3 className="text-2xl font-bold text-cyan-400">3+</h3>
                <p className="text-slate-400 text-sm">Major Projects Built</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <h3 className="text-2xl font-bold text-cyan-400">2–3</h3>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2 text-sm text-slate-300 hover:border-cyan-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Services I Offer</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I help businesses and individuals build strong digital
              experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-4 sm:px-6 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Experience Highlights</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A quick overview of what I bring as a developer with hands-on
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-4 sm:px-6 py-16 border-t border-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Here are some of the systems and applications I have built using
              modern frontend and backend technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-40 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 mb-6 flex items-center justify-center text-slate-400 text-sm text-center px-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-2xl"
                    />
                  </div>
                </a>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-5 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 rounded-full px-3 py-1 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">What Clients Can Expect</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I focus on communication, quality, and delivering polished work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6">
              <h3 className="text-lg font-semibold mb-3">Clean Code</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Projects are structured for maintainability and future
                scalability.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6">
              <h3 className="text-lg font-semibold mb-3">Responsive Design</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every interface is optimized for mobile, tablet, and desktop
                users.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6">
              <h3 className="text-lg font-semibold mb-3">
                Reliable Communication
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clear updates and collaboration throughout the development
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-20 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-[2rem] p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Build Something Great
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            I’m open to freelance work, collaborations, and web development
            projects. Let’s create something modern, responsive, and impactful.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:samueloluwaferanmi37@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-semibold text-slate-950"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/codezSam7"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-700 hover:border-cyan-400 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-semibold"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
