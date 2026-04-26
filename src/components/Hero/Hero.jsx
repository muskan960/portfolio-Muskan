


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import mypic from "../../assets/mypic.png";

function Hero() {

  const roles = ["Frontend Developer", "Web Developer", "Full Stack Developer", "Mern Stack Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToContact = () => {
    setTimeout(() => {
      const el = document.getElementById("contact");
  
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100); 
  };

  useEffect(() => {
    const currentRole = roles[index % roles.length];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 250);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length - 1)), 200);
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex(prev => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (

    <motion.section id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col xl:flex-row items-center justify-center mx-auto mt-10 xl:mt-0 h-auto xl:h-screen px-5 sm:px-10 md:px-10 py-10 xl:ml-30"
    >

      {/* background glow (NO CHANGE) */}
      <div className="absolute w-[500px] h-[300px] bg-[#e9c46b] blur-[120px] opacity-20 top-10 left-10 rounded-full"></div>
      <div className="absolute w-[500px] h-[300px] bg-[#e9c46b] blur-[140px] opacity-10 bottom-10 right-10 rounded-full"></div>

      {/* LEFT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >

        <div className='items-center justify-center max-w-xl ml-0 xl:ml-10 space-y-5 text-center xl:text-left'>

          <p className="text-[#e9c46b] tracking-widest text-sm md:text-base">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl max-w-7xl font-semibold bt-5 text-white">
            Hi It's me <span className="text-white text-center">Muskan Memon</span>
          </h1>

          <div className="relative inline-block ">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white flex">
              And I’m a&nbsp;
              <motion.span
                key={text}
                className="text-[#e9c46b] font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {text}
              </motion.span>

              <motion.span
                className="text-white ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                |
              </motion.span>
            </h2>

            <span className="block h-1 w-1/2 bg-[#e9c46b] rounded-full mt-5"></span>
          </div>

          <p className="text-white">
            Crafting responsive and visually engaging web experiences using modern technologies.
            Focused on performance, accessibility, and clean UI design.
          </p>

        </div>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center xl:justify-start gap-4 ml-0 xl:ml-10"
        >
          <a
  href="https://www.linkedin.com/in/muskan-memon-154ab735b"
  target="_blank"
  rel="noopener noreferrer"
>
          <LuLinkedin
            size={18}
            className="
       text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1
      w-10 h-10 px-2 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out 
      hover:scale-110 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)] active:scale-95 active:translate-y-1 active:shadow-inner" /></a>

          <a
  href="https://github.com/muskan960"
  target="_blank"
  rel="noopener noreferrer"
>
          <FaGithub
            size={18}
            className="
     text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1 w-10 h-10 px-1 flex 
     items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-110
      hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)] active:scale-95 active:translate-y-1 active:shadow-inner"
          /></a>
                    <a
  href="https://www.instagram.com/muskanmemon603/"
  target="_blank"
  rel="noopener noreferrer"
>
          <AiFillInstagram
            size={18}
            className="
       text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1
      w-10 h-10
      px-1
      flex items-center justify-center
      rounded-full
      transition-all
      duration-300
      ease-in-out
      hover:scale-110
      hover:-translate-y-1
      hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)] active:scale-95 active:translate-y-1 active:shadow-inner
    "
          /></a>
                    <a
  href="https://www.facebook.com/share/1b4fj8auTY/?mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
>

          <FaFacebook
            size={18}
            className="
      text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1
      w-10 h-10
      px-1
      flex items-center justify-center
      rounded-full
      transition-all
      duration-300
      ease-in-out
      hover:scale-110
      hover:-translate-y-1
    hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)] active:scale-95 active:translate-y-1 active:shadow-inner
    "
          /></a>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='flex items-center justify-center xl:justify-start gap-4 sm:gap-6 mt-8 ml-0 xl:ml-10'
        >
          {/* <a href="#contact">
          <button className=' text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1 px-2 rounded-2xl py-1 transition-all
       duration-300
       ease-in-out
       hover:scale-110
      hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)] active:scale-95 active:translate-y-1 active:shadow-inner'>Contact me</button> 
      </a> */}
  
  <button
  onClick={scrollToContact}
  className=' text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1 px-2 rounded-2xl py-1 transition-all
  duration-300
  ease-in-out
  hover:scale-110
 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)] active:scale-95 active:translate-y-1 active:shadow-inner'
>
  Contact Me
</button>

      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
  <button className="text-[#e9c46b] bg-[#0c0c0c] border border-brown-200 px-2 py-1 rounded-2xl text-lg duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 transition-all hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)] active:scale-95 active:translate-y-1 active:shadow-inner">
    My Resume
  </button>
</a>
        </motion.div>

      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 flex justify-center items-center relative mt-10 xl:mt-0 px-4 sm:px-0"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-72 md:w-96 h-auto rounded-full border-4 border-[#d6b980] shadow-[0_8px_20px_rgba(105,71,44,0.8)] overflow-hidden"
        >
          <img src={mypic} alt="Muskan" className="object-cover w-full h-full" />
        </motion.div>
      </motion.div>

    </motion.section>
  );
}

export default Hero;