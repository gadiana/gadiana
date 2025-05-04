import React, { useState, useEffect} from 'react';
import '../styles/projects.css';
import ModalBlog from './modalBlog';
import { FaReact, FaPhp } from 'react-icons/fa';
import { SiMysql, SiLaravel, SiTailwindcss } from 'react-icons/si';


const Projects = () => {
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
      if (modalData) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [modalData]);
    
  const projectData = [
    {
      badge: "React JS",
      title: "Pokémon Battle Simulator",
      image: "pokemon.png",
      repoLink:"https://github.com/gadiana/pokemonSimulator",
      siteLink:"https://simulatorpokemon.netlify.app"
    },
    {
      badge: "React JS",
      title: "To Do List",
      image: "todo.png",
      repoLink:"https://github.com/gadiana/toDoList",
      siteLink:"https://todolistgad-gin.netlify.app/",
    },
    {
      badge: "React JS",
      title: "Random Quote Generator",
      image: "quote.png",
      repoLink:"https://github.com/gadiana/randomquote",
      siteLink:"https://quotegenerator101.netlify.app/",
    },
    {
      badge: "PHP",
      title: "OJT Management Information System",
      image: "ojt.png",
      repoLink:"none",
      siteLink:"none",
    },
    {
      badge: "PHP",
      title: "Document Management System",
      image: "wesmaardec.png",
      repoLink:"none",
      siteLink:"none",
    },
    {
      badge: "PHP",
      title: "ShopEase",
      image: "shopease.png",
      repoLink:"none",
      siteLink:"none",
    },
  ];

  const getIconsForBadge = (badge) => {
    switch (badge) {
      case "React JS":
        return (
          <>
            <FaReact title="React" size={22} color="#61DBFB" />
            <SiTailwindcss title="Tailwind" size={22} color="#61DBFB" />
          </>
        )
      case "PHP":
        return (
          <>
            <FaPhp title="PHP" size={30} color="#777BB4" />
            <SiMysql title="MySQL" size={30} color="#00758F" />
          </>
        );
      default:
        return <span>{badge}</span>;
    }
  };
  

  return (
    <div className="projects">
      <div className="container">
        <div className="container-projects">
          <h2 className="section-title">My Projects</h2>
          <div className="cards-grid">
            {projectData.map((project, idx) => (
              <div className="card" onClick={() => setModalData(project)} key={idx}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="card-content">
                  <div className="tech-stack">
                    {getIconsForBadge(project.badge)}
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalData && (
        <ModalBlog
        modalType="project-modal"
        badge={modalData.badge}
        title={modalData.title}
        date={modalData.date}
        image={modalData.image}
        repoLink={modalData.repoLink}
        siteLink={modalData.siteLink}
        onClose={() => setModalData(null)}
      />
      )}
    </div>
  );
};

export default Projects;
