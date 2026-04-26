

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "Quiz App", desc: "An interactive quiz app featuring multiple-choice questions, instant feedback, and score calculation with a responsive UI.", tech: "HTML • Css • JavaScript", link: "https://muskan960.github.io/SyntecxHub-quiz-app/" },
  { title: "E-Commerce Website", desc: "E-commerce web application with product listing, cart functionality, and a smooth user-friendly shopping experience.", tech: "React • Tailwind Css", link: "https://muskan960.github.io/react-project/" },
  { title: "Travel Website", desc: "Travel website with smooth animations, modern layout, and an engaging user experience for exploring destinations.", tech: "HTML • CSS • JavaScript • JS App", link: "https://muskan960.github.io/trevel-assaiment-web/" },
  { title: "Calculator App", desc: "Interactive calculator app with basic arithmetic operations and a clean, user-friendly interface.", tech: "HTML • Css • JavaScript", link: "https://muskan960.github.io/calculator/" },
  { title: "Chat App", desc: "A real-time chat application where messages are instantly exchanged between two clients (browser tabs)", tech: "Node.js • Express • Socket.io", link: "https://chat-tau-tan.vercel.app"},
  { title: "Gallery App", desc: "Developed a responsive image gallery app as part of an internship task focusing on layout design and user-friendly interface", tech: "HTML • Css", link: "https://muskan960.github.io/SyntecxHub-image-gallery/"},
   
];

function Projects() {
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

 
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const itemsPerPage =
    width >= 1024 ? 3 :
    width >= 768 ? 2 : 1;

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000); 

    return () => clearInterval(interval);
  }, [totalPages]);

  const visibleProjects = projects.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section id="projects" className="py-28 text-white relative overflow-hidden">

       <div className="absolute w-[500px] h-[300px] bg-[#e9c46b] blur-[120px] opacity-20 top-10 left-10 rounded-full"></div>
    
     <div className="absolute w-[500px] h-[300px] bg-[#e9c46b] blur-[140px] opacity-10 bottom-10 right-10 rounded-full"></div>
      <h3 className="text-center text-5xl text-[#e9c46b] mb-25">
        My Projects
      </h3>

      <AnimatePresence mode="wait">
        <motion.div
             key={page}
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -50 }}
             transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto"
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05 }}
              className="bg-[#131313] p-6 rounded-2xl border border-[#333]"
            >
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                {project.desc}
              </p>
              <p className="text-[#e9c46b] text-sm mb-4">
                {project.tech}
              </p>

                   <a
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#e9c46b] text-black rounded-full font-semibold hover:scale-105 transition"
                 >
                   View Project →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
  );
}

export default Projects;