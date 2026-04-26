
// import React, { useState } from 'react'
// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from "framer-motion";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//     // ✅ SCROLL FUNCTION (FIX)
//     const scrollToSection = (id) => {
//       const el = document.getElementById(id);
  
//       if (el) {
//         const navHeight = 70; // safe fixed offset (no styling change)
//         const top =
//           el.getBoundingClientRect().top + window.pageYOffset - navHeight;
  
//         window.scrollTo({
//           top,
//           behavior: "smooth",
//         });
//       }
//     };

//   return (
//     <div className="sticky z-50 top-0 backdrop-blur-sm shadow-sm w-full shadow-[#e9c46b] bg-black/40">

//       {/* NAVBAR CONTAINER */}
//       <div className="h-27 px-5 md:px-10 flex items-center justify-between w-full">

//         {/* LOGO */}
//         <h1 className="text-4xl text-[#e9c46b] font-bold cursor-pointer">
//           MUSKAN
//         </h1>

//         {/* HAMBURGER */}
//         <div className="lg:hidden text-white cursor-pointer">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden lg:flex gap-6">
//         <Link
//             to="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               const el = document.getElementById("home");
//               if (el) el.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="text-[#e9c46b] text-[20px] font-bold"
//           > Home
//           </Link>
//           {/* <Link
//             to="#about"
//             onClick={(e) => {
//               e.preventDefault();
//               const el = document.getElementById("about");
//               if (el) el.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="text-[#e9c46b] text-[20px] font-bold"
//           > About
//           </Link> */}
//              <Link
//             to="#about"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("about");
//             }}
//             className="text-[#e9c46b] text-[20px] font-bold"
//           >
//             About
//           </Link>
//           <Link
//             to="#skills"
//             onClick={(e) => {
//               e.preventDefault();
//               const el = document.getElementById("skills");
//               if (el) el.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="text-[#e9c46b] text-[20px] font-bold"
//           > Skills
//           </Link>
//           <Link
//             to="#projects"
//             onClick={(e) => {
//               e.preventDefault();
//               const el = document.getElementById("projects");
//               if (el) el.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="text-[#e9c46b] text-[20px] font-bold"
//           > Projects
//           </Link>
//           <Link
//             to="#experience"
//             onClick={(e) => {
//               e.preventDefault();
//               const el = document.getElementById("experience");
//               if (el) el.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="text-[#e9c46b] text-[20px] font-bold"
//           > Experience
//           </Link>
//           <Link
//             to="#contact"
//             onClick={(e) => {
//               e.preventDefault();
//               const el = document.getElementById("contact");
//               if (el) el.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="text-[#e9c46b] text-[20px] font-bold"
//           > Contact
//           </Link>

//         </div>

//       </div>

//       {/* MOBILE MENU (FRAMER MOTION) */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}

//             className="flex flex-col lg:hidden bg-black absolute top-55 md:top-75 left-0 w-full justify-center items-center py-10 md:py-16 space-y-9 md:space-y-12 z-40" >
//             <Link to="#home" onClick={() => setIsOpen(false)} className="text-[#e9c46b] text-lg font-bold">
//               Home
//             </Link>

//             <Link to="#about" onClick={() => setIsOpen(false)} className="text-[#e9c46b] text-lg font-bold">
//               About
//             </Link>

//             <Link to="#skills" onClick={() => setIsOpen(false)} className="text-[#e9c46b] text-lg font-bold">
//               Skills
//             </Link>

//             <Link to="#projects" onClick={() => setIsOpen(false)} className="text-[#e9c46b] text-lg font-bold">
//               Projects
//             </Link>

//             <Link to="#experience" onClick={() => setIsOpen(false)} className="text-[#e9c46b] text-lg font-bold">
//               Experience
//             </Link>

//             <Link to="#contact" onClick={() => setIsOpen(false)} className="text-[#e9c46b] text-lg font-bold">
//               Contact
//             </Link>

//           </motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// }

// export default Navbar;


import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ SCROLL FUNCTION (FIX)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const navHeight = 70; // safe fixed offset (no styling change)
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky z-50 top-0 backdrop-blur-sm shadow-sm w-full shadow-[#e9c46b] bg-black/40">

      {/* NAVBAR CONTAINER */}
      <div className="h-27 px-5 md:px-10 flex items-center justify-between w-full">

        {/* LOGO */}
        <h1 className="text-4xl text-[#e9c46b] font-bold cursor-pointer">
          MUSKAN
        </h1>

        {/* HAMBURGER */}
        <div className="lg:hidden text-white cursor-pointer">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-6">

          <Link
            to="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-[#e9c46b] text-[20px] font-bold"
          >
            Home
          </Link>

          <Link
            to="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="text-[#e9c46b] text-[20px] font-bold"
          >
            About
          </Link>

          <Link
            to="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
            className="text-[#e9c46b] text-[20px] font-bold"
          >
            Skills
          </Link>

          <Link
            to="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="text-[#e9c46b] text-[20px] font-bold"
          >
            Projects
          </Link>

          <Link
            to="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
            className="text-[#e9c46b] text-[20px] font-bold"
          >
            Experience
          </Link>

          <Link
            to="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="text-[#e9c46b] text-[20px] font-bold"
          >
            Contact
          </Link>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col lg:hidden bg-black absolute top-55 md:top-75 left-0 w-full justify-center items-center py-10 md:py-16 space-y-9 md:space-y-12 z-40"
          >

            <Link
              to="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
                setIsOpen(false);
              }}
              className="text-[#e9c46b] text-lg font-bold"
            >
              Home
            </Link>

            <Link
              to="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
                setIsOpen(false);
              }}
              className="text-[#e9c46b] text-lg font-bold"
            >
              About
            </Link>

            <Link
              to="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
                setIsOpen(false);
              }}
              className="text-[#e9c46b] text-lg font-bold"
            >
              Skills
            </Link>

            <Link
              to="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
                setIsOpen(false);
              }}
              className="text-[#e9c46b] text-lg font-bold"
            >
              Projects
            </Link>

            <Link
              to="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
                setIsOpen(false);
              }}
              className="text-[#e9c46b] text-lg font-bold"
            >
              Experience
            </Link>

            <Link
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setIsOpen(false);
              }}
              className="text-[#e9c46b] text-lg font-bold"
            >
              Contact
            </Link>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Navbar;