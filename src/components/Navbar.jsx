import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { FiPhone, FiUser } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logonav.png";

const MenuButton = ({ isOpen, toggleMenu, isScrolled }) => (
  <button
    className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 z-10
      ${isScrolled ? "bg-white border-white text-black" : "border-black text-black"} 
      hover:text-gray-800`}
    onClick={toggleMenu}
    aria-label="Toggle Menu"
  >
    {isOpen ? <HiX className="text-3xl text-black" /> : <HiMenu className="text-3xl text-black" />}
  </button>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
      if (location.pathname !== "/") return;

      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
        }
      }, 500);
    }
  }, [location]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
        }
      }
      setActiveSection(id);
    }
    setMenuOpen(false);
  };

  const links = [
    { id: "home", label: "Home", icon: <AiOutlineHome /> },
    { id: "about", label: "About", icon: <FiUser /> },
    { id: "team", label: "Team", icon: <AiOutlineTeam /> },
    { id: "contact", label: "Contact", icon: <FiPhone /> },
  ];

  return (
    <nav role="navigation" className={`fixed w-full z-50 transition-all duration-300 `}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-2">
        <Link to="/" className="flex items-center">
          {isScrolled && (
            <img
              src={logo}
              alt="Logo"
              className={`h-20 w-auto font-merriweather uppercase transition-all duration-300`}
            />
          )}
        </Link>

        <MenuButton isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} isScrolled={isScrolled} />
      </div>

      <div
        className={`fixed top-0 right-0 md:w-[350px] w-[300px] text-white pt-20 pl-8 pr-8 pb-10 rounded-lg shadow-lg transform transition-transform ease-in-out duration-500 ${
          menuOpen ? "right-0" : "right-[-100%]"
        }`}
        style={{
          maxHeight: "100vh",
          background: "linear-gradient(135deg, rgba(88, 28, 135, 0.9), rgba(107, 114, 128, 0.8))",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="flex space-y-6 flex-col text-xl font-bold">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                link.path ? navigate(link.path) : scrollToSection(link.id);
                setMenuOpen(false);
              }}
              className={`transition-all duration-300 ${
                activeSection === link.id ? "text-yellow-400 font-bold" : "text-white"
              } font-montserrat uppercase`}
              aria-label={`Go to ${link.label}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
