

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Development Learning Journey",
    org: "Saylani Mass IT Training (SMIT)",
    time: "2025 – 2026",
    desc: [
      "Completed 1 year structured Web development",
      "Skilled in modern web technologies",
      "Worked on multiple real-world practice projects",
    ],
  },
  {
    title: "FullStack AI Hackathon Project",
    org: "SMIT AI Hackathon",
    time: "2026",
    desc: [
      "Developed a full-stack AI web application",
      "Built and integrated backend APIs for AI features",
      "Presented working solution & earned certificate",
    ],
  },
  {
    title: "Web Development Certification",
    org: "Cisco Networking Academy",
    time: "2024",
    desc: [
      "Completed HTML, CSS & JavaScript learning journey",
      "Earned official course completion certificate",
      "Strengthened core web fundamentals",
    ],
  },
  {
    title: "Web Development Internship",
    org: "Other Companies",
    time: "2025 – 2026",
    desc: [
      "Completed internship with certificate",
      "Received offer letter based on performance",
      "Worked on production-level UI",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-10 md:py-28 px-6 md:px-6  bg-[#0c0c0c] text-white">
      <div className="max-w-6xl mx-auto relative">

        <p className="text-[11px] md:text-sm text-center tracking-widest text-gray-400 mb-2 uppercase">
          WHAT I HAVE DONE SO FAR
        </p>

        <h3 className="text-[30px] md:text-[50px] font-bold text-center mb-14 md:mb-20 text-[#e9c46b]">
          Work Experience
        </h3>

        {/* CENTER LINE  */}
        <div className="absolute left-1/2 h-[80%] w-[2px] bg-[#e9c46b]/30" />

        <div className="space-y-16 md:space-y-24">

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex w-full justify-center md:justify-between"
              >

         
                <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-8 w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#e9c46b] z-20" />

                {/* LEFT CARD  */}
                <div
                  className={`
                    hidden md:block w-[46%]
                    ${isLeft ? "text-left" : "invisible"}
                  `}
                >
                  {isLeft && (
                    <div className="bg-gradient-to-br from-[#303030] to-[#131313] p-6 rounded-2xl border border-[#e9c46b]/20 shadow-lg">
                      <h3 className="text-[15px] md:text-[17px] lg:text-[25px] font-semibold text-[#e9c46b] mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[#e9c46b]/80">{exp.org}</p>
                      <span className="text-xs text-gray-400">{exp.time}</span>

                      <ul className="mt-4 space-y-2 text-gray-300 text-[10px] lg:text-[13px] list-disc list-inside">
                        {exp.desc.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="w-[85%] md:hidden bg-gradient-to-br from-[#303030] to-[#131313] p-4 rounded-xl border border-[#e9c46b]/20 shadow-lg ml-6">
                  <h3 className="text-[15px] md:text-[17px] md:text-[17px] font-semibold text-[#e9c46b] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xs  text-[#e9c46b]/80">{exp.org}</p>
                  <span className="text-[10px] text-gray-400">{exp.time}</span>

                  <ul className="mt-2 space-y-1 text-[10px] lg:text-[13px]  text-gray-300 list-disc list-inside">
                    {exp.desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT CARD  */}
                <div
                  className={`
                    hidden md:block w-[46%]
                    ${!isLeft ? "text-left" : "invisible"}
                  `}
                >
                  {!isLeft && (
                    <div className="bg-gradient-to-br from-[#303030] to-[#131313] p-6 rounded-2xl border border-[#e9c46b]/20 shadow-lg">
                      <h3 className="text-xl md:text-[17px] font-semibold text-[#e9c46b] mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[#e9c46b]/80">{exp.org}</p>
                    <span className="text-xs text-gray-400">{exp.time}</span>

                      <ul className="mt-4 space-y-2 text-gray-300 text-[10px] lg:text-[13px] list-disc list-inside">

                        {exp.desc.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;