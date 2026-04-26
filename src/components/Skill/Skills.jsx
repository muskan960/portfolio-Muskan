


import React from 'react'
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="py-20 md:mt-25 text-white">
      <div className="max-w-7xl mx-auto px-6">

      
        <h3 className="text-center md:mt-10 text-5xl font-medium text-[#e9c46b] mb-14">
          My Skills
        </h3>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:p-8 place-items-center">

          {[
            { name: "HTML", value: 95 },
            { name: "CSS", value: 95 },
            { name: "JavaScript", value: 80 },
            { name: "React", value: 88 },
            { name: "Bootstrap", value: 75 },
            { name: "Tailwind CSS", value: 90 },
            { name: "MongoDB", value: 80 },
            { name: "Express JS", value: 80 },
            { name: "Node JS", value: 80 },
            { name: "React Native", value: 85 },
          ].map((skill, i) => (
            <div key={i} className="relative w-32 h-32">

              
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#303030] to-[#131313] shadow-[inset_0_6px_12px_rgba(0,0,0,0.7)] opacity-90" />

        
              <svg className="w-full h-full -rotate-90 relative z-10">
                <circle
                  cx="64"
                  cy="64"
                  r="55"
                  stroke="#222"
                  strokeWidth="10"
                  fill="none"
                />

                <motion.circle
                  cx="64"
                  cy="64"
                  r="55"
                  stroke="#e9c46b"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="345"
                  initial={{ strokeDashoffset: 345 }}
                  whileInView={{
                    strokeDashoffset:
                      345 - (345 * skill.value) / 100,
                  }}
                  transition={{
                    duration: 1.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                />
              </svg>

    
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-semibold">
                  {skill.value}%
                </span>
                <span className="text-sm text-gray-400 mt-1">
                  {skill.name}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
