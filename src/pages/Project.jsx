import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import portfolioImg1 from '../assets/cafe.png'; 
import portfolioImg4 from '../assets/salon.png'; 

const Project = () => {
  const navigate = useNavigate();

  const projects = [
    { 
      img: portfolioImg1, 
      title: 'MAUC MANAGEMENT SYSTEM', 
      description: 'Built using Python, this system streamlines order management, inventory tracking, and customer interactions for cafes.',
      link: '/project_1',
      icon: (
        <div className="flex flex-row items-center gap-4 mt-4">
          <FaPython className="text-yellow-400 text-6xl" />
        </div>
      )
    }, 
    { 
      img: portfolioImg4, 
      title: 'SALON MANAGEMENT SYSTEM', 
      description: 'Developed using HTML, Tailwind CSS, and JavaScript, this system helps salons manage appointments, track services, and improve customer experience.',
      link: '/project_2',
      icon: (
        <div className="flex flex-row items-center gap-4 mt-4">
          <FaHtml5 className="text-red-500 text-5xl" />
          <FaCss3Alt className="text-blue-500 text-5xl" />
          <SiTailwindcss className="text-teal-400 text-5xl" />
        </div>
      )
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-300 text-white flex flex-col items-center py-20 px-10 relative bg-fixed">
      <motion.button 
      
      className="absolute top-4 left-4 md:top-6 md:left-6 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all shadow-lg"
     onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowLeft className="w-6 h-6 text-black" />
      </motion.button>

      <motion.h2 
        className="text-7xl md:text-8xl font-extrabold text-white mb-6 text-center tracking-wider mt-16 relative font-playfair"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        OUR PROJECTS
      </motion.h2>
      
      <div className="w-40 h-1 bg-yellow-400 mb-12"></div>
      
      <p className="text-lg text-gray-200 text-center max-w-3xl mb-12 z-10 font-roboto">
        Explore our innovative projects designed to streamline business operations and enhance user experience. Each project showcases our commitment to efficiency, usability, and modern design.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 z-10">
        {projects.map((project, index) => (
         <motion.div
         key={index}
         className="flex flex-col items-center p-8 rounded-lg shadow-xl transform transition-all font-merriweather bg-white/10 backdrop-blur-md hover:scale-110 hover:bg-white/20 cursor-pointer"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: index * 0.2 }}
         whileHover={{ scale: 1.1 }}
         onClick={() => navigate(project.link)}
       >
         <img 
           src={project.img} 
           alt={project.title} 
           className="w-full sm:w-80 md:w-96 h-auto object-cover rounded-lg shadow-lg"
         />
         <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-gray-100 text-center font-montserrat">{project.title}</p>
         <p className="mt-4 text-gray-700 dark:text-gray-700 text-center max-w-md font-roboto">{project.description}</p>
         {project.icon && project.icon}
         <p className="mt-4 text-black font-semibold underline underline-offset-4 hover:text-white transition-colors">
           See Project →
         </p>
       </motion.div>
       
        ))}
      </div>
    </section>
  );
};

export default Project;
