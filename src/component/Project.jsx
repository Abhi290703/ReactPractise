import React from "react";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "A personal portfolio built using React and Tailwind CSS.",
      link: "#"
    },
    {
      id: 2,
      title: "Weather App",
      desc: "A real-time weather application using API integration.",
      link: "#"
    },
    {
      id: 3,
      title: "Todo Manager",
      desc: "A simple CRUD todo manager using React hooks.",
      link: "#"
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-xl p-5 hover:scale-105 duration-300 border"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{project.desc}</p>
            <a
              href={project.link}
              className="inline-block mt-4 text-blue-500 font-semibold hover:text-blue-700"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}