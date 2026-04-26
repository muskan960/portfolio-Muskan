

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 }
};

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent ✅");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        alert(data.message);
      }
    } catch {
      alert("Server error ❌");
    }

    setLoading(false);

  };

  return (
    <motion.section id="contact"
      className="min-h-screen w-full bg-[#0c0c0c] px-6 py-20"
      variants={container}
      initial="hidden"
      // whileInView="show"
      animate="show"
    >


      {/* HEADING */}
      <motion.h3
        className="text-center text-[30px] md:text-5xl font-semibold md:mt-15 text-white md:mb-30 mb-20"
        variants={fadeRight}
      >
        Let’s <span className="text-[#e9c46b]">Get Together</span>
      </motion.h3>



      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">


        {/* LEFT - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="md:space-y-8 space-y-6 "
          variants={fadeLeft}
        >

          <div className="grid grid-cols-1 gap-6">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-500 focus:border-[#e9c46b] outline-none text-white py-2"
              required
            />

            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-500 focus:border-[#e9c46b] outline-none text-white py-2"
              required
            />
          </div>

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-500 focus:border-[#e9c46b] outline-none text-white py-2"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-500 focus:border-[#e9c46b] outline-none text-white py-2"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-transparent border-b border-gray-500 focus:border-[#e9c46b] outline-none text-white py-2"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="border border-[#e9c46b] text-[#e9c46b] px-6 py-2 rounded-full hover:bg-[#e9c46b] hover:text-black transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>


        {/* EMAIL */}

        <motion.div
          className="flex flex-col justify-center ml-5 space-y-6 text-white"
          variants={fadeRight}
        >

          {/* EMAIL */}
          <div className="flex items-center gap-4 ">

            <svg width="0" height="0">
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e9c46b" />
                <stop offset="100%" stopColor="#b8923a" />
              </linearGradient>
            </svg>

            <FaEnvelope style={{ fill: "url(#goldGradient)" }} className="w-8 h-8 hover:scale-110 transition" />
            <h5 className="md:text-[20px] lg:text-4xl text-[20px] bg-gradient-to-r from-[#645e5e] to-[#6c6565] bg-clip-text text-transparent">
              memonmuskan308@gmail.com
            </h5>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4  ">
            <svg width="0" height="0">
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e9c46b" />
                <stop offset="100%" stopColor="#b8923a" />
              </linearGradient>
            </svg>

            <FaMapMarkerAlt style={{ fill: "url(#goldGradient)" }} className="w-8 h-8 hover:scale-110 transition" />

            <h5 className="md:text-[20px] lg:text-4xl text-[20px] bg-gradient-to-r from-[#645e5e] to-[#6c6565] bg-clip-text text-transparent ">
              Affandi Town Hyderabad
            </h5>
          </div>

          {/* SOCIAL */}
          <div className=" flex flex-col items-baseline gap-4 md:mt-15 mt-8 md:ml-4 ml-5 ">
            <h5 className="bg-gradient-to-r from-[#645e5e] to-[#6c6565] bg-clip-text text-transparent  mb-3">Social Networks</h5>

            <div className="flex items-center gap-4">

            <a
  href="https://www.linkedin.com/in/muskan-memon-154ab735b"
  target="_blank"
  rel="noopener noreferrer"
> 
              <LuLinkedin
                size={18}
                className="
           text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1
          w-10 h-10
          px-2
          flex items-center justify-center
          rounded-full
          transition-all
          duration-300
          ease-in-out
          hover:scale-110
          hover:-translate-y-1
         hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
        "
              /></a>
         <a
  href="https://github.com/muskan960"
  target="_blank"
  rel="noopener noreferrer"
>
              <FaGithub
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
         hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
        "
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
          hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
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
        hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
        "
              /></a>

            </div>

          </div>

        </motion.div>




      </div>
    </motion.section>
  );
};

export default Contact;

