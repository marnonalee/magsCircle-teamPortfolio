import React, { useRef, useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaGithub , FaDesktop, FaMobileAlt, FaSearch, FaFacebook  } from "react-icons/fa";
import logo_mo from "../assets/logo1.png";
import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import { MdEmail } from "react-icons/md";
import img1 from "../assets/thea.jpg";
import img2 from "../assets/myles.jpg";
import img3 from "../assets/aethel.jpg";
import img4 from "../assets/ge.jpg";
import img5 from "../assets/mjay.jpg";



const Home = () => {
  const introRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: false, margin: "-100px" });
  const [isAboutUsInView, setIsAboutUsInView] = useState(false);

  const [overlayOpacity, setOverlayOpacity] = useState(0);

  
 useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = window.innerHeight;
    setOverlayOpacity(Math.min(scrollTop / maxScroll, 1));

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      setIsAboutUsInView(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const teamMembers = [
  { 
    id: 1, 
    name: "Althea Dela Cruz", 
    role: "UI/UX Designer", 
    img: img1,
    email: "althea.delacruz@gmail.com",
    skills: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Figma"],
    facebook: "https://www.facebook.com/share/1AecQsCRnw/",
    github: "https://github.com/jaywongay",  
    expertise: "Crafting visually appealing and accessible UI designs with a focus on usability and consistency"
  },
  { 
    id: 2, 
    name: "Myles Maralit", 
    role: "Project Manager, Frontend Developer", 
    img: img2,
    email: "mylsmrlt@gmail.com",
    skills: ["System Testing","HTML","CSS","Frontend Development (HTML/CSS)","Wireframing","Figma","Basic C++","Basic MySQL"],
    facebook: "https://www.facebook.com/myles.maralit",
    github: "https://github.com/marnonalee",  
    expertise: "Capable of testing systems, building frontend interfaces using HTML and CSS, and designing user flows through wireframing and Figma. Has foundational knowledge in C++ and MySQL, supporting a versatile development skillset."
  }
  ,
  { 
    id: 3, 
    name: "Aethel Mae Udtuhan", 
    role: "UI/UX Designer", 
    img: img3,
    email: "athelmingbadion@gmail.com",
    skills: ["UI/UX", "Prototyping", "Software Development", "HTML"],
    facebook: "https://www.facebook.com/thel.ming.461784",
    github: "https://github.com/Aethel-mae",  
    expertise: "Combines UI/UX design and prototyping with software development knowledge, ensuring seamless user experiences and efficient implementation."
  },
  { 
    id: 4, 
    name: "Geraldine Valdez", 
    role: "Project Assistant, QA Tester", 
    img: img4,
    email: "llenogeraldine7@gmail.com",
    skills: ["UI/UX Review Support", "System Design Support", "Test Cases", "HTML"],
    facebook: "https://www.facebook.com/profile.php?id=61559805254207",
    github: "https://github.com/Ahji00",  
    expertise: "Provides strong support in UI/UX reviews and system design, while specializing in thorough test case execution and quality assurance processes."
  },
  { 
    id: 5, 
    name: "Mjay Almuete", 
    role: "Documentation Specialist", 
    img: img5,
    email: "mjay.almuete@gmail.com",
    skills: ["Technical Writing", "API Docs","Editing"],
    facebook: "https://www.facebook.com/mjay.almuete",
    github: "https://github.com/Jay12-hub-boop",  
    expertise: "Creating clear, concise documentation for software and APIs."
  }
];


  return (
    <Box className="home-container relative">
      <div 
        className="overlay absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-500"
        style={{ background: `rgba(0, 0, 0, ${overlayOpacity})` }}>
      </div>

      <section id="home" className="relative z-10">
          <Box
            className="relative flex items-center justify-center text-center py-10 px-6 h-screen z-10">
            <motion.img
              src={logo_mo}
              alt="Mag's Circle Logo"
              className="w-48 md:w-72 lg:w-80 "
            />
          </Box>
        <Box
          ref={introRef}
          className="relative flex flex-col items-center justify-center text-center py-10 px-6 h-screen z-10">
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}>
            <motion.h1
              className="text-[10vw] font-extrabold text-white tracking-wider uppercase leading-none font-playfair">
              Meet the Team
            </motion.h1>
            <motion.h2
              className="text-[8vw] font-extrabold text-purple-600 tracking-wider uppercase leading-none drop-shadow-lg font-roboto mt-2"
              initial={{ textShadow: "0px 0px 10px rgba(138, 43, 226, 0.5)", opacity: 0, scale: 0.8 }}
              animate={isIntroInView ? { textShadow: "0px 0px 30px rgba(138, 43, 226, 1)", opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}>
              The Minds Behind Mag's Circle
            </motion.h2>
          </motion.div>
          
          <motion.p
            className="text-2xl md:text-3xl text-white mt-6 max-w-5xl font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}>
            We are a passionate group of innovators, creators, and problem-solvers dedicated to pushing boundaries and delivering exceptional results.
          </motion.p>
        </Box>
      <div className="relative w-full py-20 ">
        <div className="container mx-auto relative z-10 px-6 md:px-12">
            
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="relative w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <img 
                src={missionImg} 
                alt="Mission" 
                className="rounded-3xl shadow-lg w-full h-[500px] object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-transparent mix-blend-overlay"></div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 text-white text-left relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <h2 className="text-7xl font-extrabold uppercase tracking-wide relative before:content-['Mission'] before:absolute before:-top-5 before:left-0 before:text-[10vw] before:text-gray-900 before:opacity-20">
                Mission
              </h2>
              <p className="mt-6 text-lg leading-relaxed max-w-lg">
                We are dedicated to fostering innovation, breaking boundaries, and crafting solutions that redefine excellence.
              </p>
            </motion.div>
          </div>

          {/* Vision  */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-16">
            <motion.div 
              className="relative w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <img 
                src={visionImg} 
                alt="Vision" 
                className="rounded-3xl shadow-lg w-full h-[500px]  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-pipurplenk-500 to-transparent mix-blend-overlay"></div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 text-white text-left relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <h2 className="text-7xl font-extrabold uppercase tracking-wide relative before:content-['Vision'] before:absolute before:-top-5 before:left-0 before:text-[10vw] before:text-gray-900 before:opacity-20">
                Vision
              </h2>
              <p className="mt-6 text-lg leading-relaxed max-w-lg">
                We envision a world driven by innovation, sustainability, and a collective mission to build a brighter future for all.
              </p>
            </motion.div>
          </div>

        </div>
          <svg className="absolute bottom-[-1px] left-0 w-full" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#A158F4" />
                <stop offset="100%" stop-color="#E2A9F3" /> 
              </linearGradient>
            </defs>
            <path fill="url(#gradient-wave)" d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,117.3C672,139,768,213,864,240C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160V320H0Z"></path>
          </svg>
      </div>
      </section>

      <section id="about" className="relative z-10">
        <Box className="py-20 bg-gradient-to-r from-[#A158F4] to-[#E2A9F3] text-white relative min-h-screen">
          <Grid item xs={12} className="text-center mx-7">
            <div className="absolute top-20 right-10 w-[200px] h-[200px] bg-purple-700 rounded-full opacity-30 z-0 animate-moveShape"></div>
            <div className="absolute top-1/3 left-1/4 w-[100px] h-[100px] bg-blue-500 rounded-full opacity-40 z-0 animate-moveShape"></div>
            <div className="absolute top-1/4 right-1/4 w-[180px] h-[180px] bg-red-500 rounded-full opacity-60 z-0 animate-moveShape"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[120px] h-[120px] bg-yellow-400 rounded-full opacity-50 z-0 animate-moveShape"></div>

            <motion.h1
              className="text-[10vw] md:text-[15vw] font-extrabold text-black tracking-wider uppercase leading-tight mb-4 font-playfair"
              initial={{ opacity: 0, y: -50 }}
              animate={isAboutUsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}>
              About Us
            </motion.h1>

            <p className="text-lg md:text-2xl font-light max-w-4xl mx-auto mt-4 font-roboto text-gray-200 z-20">
              We are a dynamic and passionate team committed to creating innovative solutions that make a difference. Our mission is to push boundaries, collaborate with clients, and deliver exceptional results by harnessing our expertise in design and technology. With every project, we aim to craft unique, user-centered experiences that truly stand out.
            </p>
          </Grid>

          <div className="container mx-auto py-16 relative z-10">
            <h2 className="text-center text-black text-7xl font-extrabold mb-24 tracking-wide leading-tight font-playfair">
              Our Expertise
            </h2>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[ 
                { icon: <FaPaperPlane />, title: "UI/UX Design", desc: "Crafting visually striking and user-friendly interfaces that provide seamless user experiences." },
                { icon: <FaDesktop />, title: "Frontend Development", desc: "Building modern, responsive websites and web apps with React and Tailwind CSS to ensure high performance and accessibility." },
                { icon: <FaMobileAlt />, title: "Mobile Optimization", desc: "Optimizing websites for mobile, delivering smooth, responsive designs that provide exceptional mobile experiences." },
                { icon: <FaSearch />, title: "Quality Assurance", desc: "Ensuring error-free, reliable products by testing rigorously and refining performance throughout the development cycle." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group p-8 rounded-2xl shadow-2xl backdrop-blur-md transition-transform transform"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 10, y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-800/40 rounded-2xl group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col items-center text-center text-white">
                    <div className="text-7xl text-purple-800 mb-6">{item.icon}</div>
                    <h3 className="text-3xl font-bold mb-4 font-montserrat text-gray-900 hover:text-yellow-400 transition-all">{item.title}</h3>
                    <p className="text-md text-white font-roboto">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Explore Button */}
            <div className="flex justify-center mt-12 relative z-10">
              <Link
                to="/project"
                className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-2xl group hover:scale-110 transition-transform duration-300 overflow-hidden"
              >
                <span className="relative z-10 font-playfair">Explore Project</span>
                <span className="absolute top-0 left-0 w-full h-full bg-black/30 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></span>
              </Link>
            </div>
          </div>
        </Box> 
        <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 1440 320">
          <path fill="#000000" d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,117.3C672,139,768,213,864,240C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160V320H0Z"></path>
        </svg>
      </section>

      <section id="team" className="relative overflow-hidden pb-8 z-10">
        <div className="relative w-full z-10 text-center">
          <h1 className="text-7xl font-playfair font-bold text-white drop-shadow-lg tracking-wide">
            Our <span className="text-purple-500">Expertise</span>
          </h1>
          <p className="text-white text-lg mt-3 mb-12 font-roboto">
            The minds behind our innovations.
          </p>
        </div>

        <div className="relative flex flex-wrap justify-center gap-10 max-w-7xl mx-auto px-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ rotate: Math.random() * 6 - 3 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="relative group w-[300px] p-8 rounded-2xl bg-black/40 backdrop-blur-lg shadow-lg border border-gray-700">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-500 pointer-events-none"></div>

              <div className="flex justify-center items-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-full w-28 h-28 object-cover border-4 border-white shadow-md transition-all duration-300 group-hover:border-purple-500"/>
              </div>

              <h2 className="text-white text-xl font-montserrat font-bold mt-5 text-center">
                {member.name}
              </h2>
              <p className="text-purple-400 text-sm font-medium text-center font-montserrat">{member.role}</p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {member.skills.map((skill) => (
                  <span key={skill} className="bg-purple-500/40 px-3 py-1 rounded-full text-white text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-4 mt-5 relative z-10">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-200 hover:text-purple-500 transition-colors duration-200"
                  href={`mailto:${member.email}`}>
                  <MdEmail size={24} />
                </motion.a>

                {member.facebook && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    className="text-blue-600 hover:text-blue-400 transition-colors duration-200" 
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={24} />
                  </motion.a>
                )}

                {member.github && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-900 hover:text-gray-600 transition-colors duration-200" 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                )}
              </div>

              <div className="absolute inset-0 bg-purple-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl p-4">
                <p className="text-white text-lg font-medium text-center">{member.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-purple-600 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute top-10 left-10 w-44 h-44 bg-purple-500 opacity-30 blur-2xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-purple-400 opacity-25 blur-2xl rounded-full animate-bounce"></div>
      </section>

      <section id="contact" className=" py-20 home-container text-black relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center md:justify-between">
        
        <div className="text-left md:w-2/5 pr-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair 
                      text-black tracking-wide uppercase leading-tight font-extrabold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            LET'S CONNECT
          </motion.h1>

          <p className="mt-4 text-lg text-gray-100">
            If you are interested in my work or want to provide feedback about this website, 
            I am open to exchanging ideas.
          </p>
        </div>

        <div className="w-full md:w-3/5 flex justify-end">
          <motion.form 
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;
              const mailtoLink = `mailto:mmaagscircle@gmail.com?subject=Message from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
              window.location.href = mailtoLink;
            }}
            className="p-8 rounded-2xl shadow-xl w-full max-w-lg ml-auto bg-white/40 backdrop-blur-md border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>

            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full px-4 py-2 bg-transparent border rounded-lg text-black 
                          placeholder-black focus:ring-2 focus:ring-purple-500" 
                placeholder="Your Name" 
                required />
            </div>

            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full px-4 py-2 bg-transparent border rounded-lg text-black 
                          placeholder-black focus:ring-2 focus:ring-purple-500" 
                placeholder="Your Email" 
                required />
            </div>

            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                className="w-full px-4 py-2 bg-transparent border rounded-lg text-black 
                          placeholder-black focus:ring-2 focus:ring-purple-500" 
                rows="4" 
                placeholder="Your Message" 
                required
              ></textarea>
            </div>

            <motion.button 
              type="submit" 
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-yellow-500 
                        text-black rounded-lg shadow-lg transition-all duration-300 hover:brightness-100"
              whileHover={{ scale: 1.05 }}>
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
      </section>

    </Box>
  );
};

export default Home;
