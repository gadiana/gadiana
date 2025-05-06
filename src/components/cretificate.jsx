import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaAward, FaRegCheckCircle, FaExpand } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import '../styles/certificate.css';

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Introduction to C#',
      issuer: 'SimpliLearn',
      image: 'certificates/csharp.png'
    },
    {
      id: 2,
      title: 'Python for Beginers',
      issuer: 'SimpliLearn',
      image: 'certificates/python.png'
    },
    {
      id: 3,
      title: 'React JS for Beginers',
      issuer: 'SimpliLearn',
      image: "certificates/reactjs.png"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="certificate-section" id="certificates">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Certificates</h2>
      </motion.div>

      <motion.div 
        className="certificates-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certificates.map((cert) => (
          <motion.div 
            key={cert.id}
            className="certificate-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="certificate-header">
              <FaCertificate className="certificate-icon" />
              <div>
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
              </div>
            </div>
            
            <div className="certificate-image-container">
              <img 
                src={cert.image} 
                alt={`${cert.title} certificate`} 
                className="certificate-image"
              />
              <button 
                className="expand-button"
                onClick={() => setSelectedImage(cert.image)}
                aria-label="Expand certificate"
              >
                <FaExpand />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for expanded image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal-overlay-cert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="modal-content-cert"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Certificate" 
                className="expanded-image"
              />
              <button 
                className="close-button-cert"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;