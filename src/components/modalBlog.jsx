import React, { useState, useEffect } from "react";
import "../styles/modalBlog.css";

const ModalBlog = ({
  image,
  modalType,
  badge,
  date,
  title,
  description,
  imgCount,
  repoLink,
  siteLink,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    modalType === "tour-modal" ? 0 : null
  );

  let images = [];

  if (modalType === "tour-modal") {
    for (let i = 1; i <= imgCount; i++) {
      images.push(`${badge.toLowerCase()} (${i}).jpg`);
    }
  } else {
    images = [image]; // fallback
  }

  const nextImage =
    modalType === "tour-modal"
      ? () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      : null;

  const prevImage =
    modalType === "tour-modal"
      ? () =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
      : null;

  // Keyboard Navigation
  useEffect(() => {
    if (modalType !== "tour-modal") return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, modalType]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-modal">
          ×
        </button>
        <div className="image-container">
          <img
            src={modalType === "tour-modal" ? images[currentIndex] : images[0]}
            alt={`Image ${modalType === "tour-modal" ? currentIndex + 1 : 1}`}
            className="modal-image"
          />
          {/* Pagination dots */}
          {modalType === "tour-modal" && (
            <div className="pagination-dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="modal-details">
          <h3 className="modal-title">{title}</h3>
          {modalType === "tour-modal" ? (
            <p className="modal-date">{date}</p>
          ) : (
            <>
              {repoLink === "none" && siteLink === "none" ? (
                <p className="modal-date">No Repository or Website Available</p>
              ) : (
                <div className="linkButtons">
                  {repoLink !== "none" && (
                    <a
                      className="small-button"
                      href={repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </a>
                  )}
                  {siteLink !== "none" && (
                    <a
                      className="small-button"
                      href={siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Website
                    </a>
                  )}
                </div>
              )}
            </>
          )}
          <p className="modal-description">{description}</p>
        </div>

        {modalType === "tour-modal" && images.length > 1 && (
          <div className="image-navigation">
            <button onClick={prevImage} className="arrow left-arrow">
              &lt;
            </button>
            <button onClick={nextImage} className="arrow right-arrow">
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalBlog;
