import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaBars, FaTimes, FaHome } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../styles/blogpage.css";

const BlogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const dayParam = queryParams.get("day");

    if (dayParam) {
      const day = days.find((d) => d.id === parseInt(dayParam));
      if (day) {
        setSelectedDay(day);
        setShowAllBlogs(false);
      }
    } else {
      setSelectedDay(null);
      setShowAllBlogs(true); // if no specific day, show all
    }

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.search]);

  const handleBackClick = () => {
    setSelectedDay(null);
    navigate("/blog-page");
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewMore = () => setShowAllBlogs(true);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedDay.imgs.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedDay.imgs.length - 1 : prev - 1
    );
  };

  const handleBackToPortfolio = () => {
    navigate("/#tour");
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedDay]);

  const days = [
    {
      id: 1,
      badge: "Day 1",
      title: "City Tour - Arrival in Manila",
      date: "April 7, 2025",
      imgs: [2, 4, 7, 3, 5],

      description:
        "This was our first day arriving in Manila. We visited iconic places like Rizal Park, SM Mall of Asia, and Fort Santiago.\nWe had a great time exploring, taking photos, and learning more about the city’s rich history. It was a great experience to immerse ourselves in the local culture and witness the vibrant atmosphere of Manila firsthand.",
    },
    {
      id: 2,
      badge: "Day 2",
      title: "Subic Bay - Exploring A Special Economic Zone",
      date: "April 8, 2025",
      imgs: [1, 2, 5, 3, 4],

      description:
        "In Subic Bay, we witnessed how cargo is efficiently processed through their port system. We also learned about local security protocols by visiting their police office.\nIt was a great experience roaming around the area and seeing how this Special Economic Zone operates.",
    },
    {
      id: 3,
      badge: "Day 3",
      title: "Museum – Dive into Rich History through Historical Icon",
      date: "April 9, 2025",
      imgs: [8, 2, 9, 5, 6],

      description:
        "On Day 3, we visited the National Museum of Natural History, the Quezon Shrine, and the Sasakyang Pampangulo Museum.\nIt was a fascinating day filled with cultural insights, historical exhibits, and a deeper appreciation for the country's rich heritage.\nOne of the highlights was seeing the presidential vehicles up close — it felt like stepping into a living piece of history.\nOverall, we had an inspiring and memorable experience.",
    },
    {
      id: 4,
      badge: "Day 4",
      title: "BSP & Hytech - A preview on how things are done",
      date: "April 10, 2025",
      imgs: [2, 3, 5, 1, 4],

      description:
        "On this day, we visited Bangko Sentral ng Pilipinas. Although we weren't allowed to take pictures inside, we were still able to buy a commemorative coin, which made the visit extra special.\nIt was a great experience to learn about the country’s financial systems up close.\nWe also went to Hytech, where we witnessed how modern machinery, IoT, and virtual gadgets operate in real-time.\nIt was a fascinating look into how advanced technologies are integrated into industrial processes.",
    },
    {
      id: 5,
      badge: "Day 5",
      title: "MMDA & LRT - Transportation and Traffic Engineering",
      date: "April 11, 2025",
      imgs: [8, 4, 1, 2, 3],

      description:
        "On Day 5, we explored the inner workings of Metro Manila’s transportation systems by visiting the MMDA (Metropolitan Manila Development Authority) and the LRT (Light Rail Transit).\nWe learned about traffic management strategies, real-time monitoring systems, and the coordination required to handle daily urban congestion.\nAt the LRT facility, we gained insights into how trains are operated, maintained, and scheduled to serve thousands of commuters efficiently.\nIt was an eye-opening experience that gave us a deeper appreciation for the complexities of urban transit and public safety.",
    },
    {
      id: 6,
      badge: "Day 6",
      title: "Baguio Tour - Summer Capital Of the Philippines",
      date: "April 12, 2025",
      imgs: [5, 3, 12, 7, 4],

      description:
        "We arrived in Baguio, the Summer Capital of the Philippines, and were greeted by its cool breeze and beautiful pine-covered landscapes.\nOur visit included the Strawberry Farm where we picked fresh strawberries, the peaceful and ornate Bell Church, and The Mansion—an official retreat residence for the President.\nWe also toured the prestigious Philippine Military Academy, gaining a deeper appreciation for the discipline and training of future military leaders.\nIt was a fun and enriching day filled with history, culture, and unforgettable sights.",
    },
    {
      id: 7,
      badge: "Day 7",
      title: "Last Day : Sunday Fun Day",
      date: "April 13, 2025",
      imgs: [5, 3, 4, 2, 1],

      description:
        "On our last day, we spent our remaining time at Burnham Park, one of Baguio’s most beloved destinations. We enjoyed a relaxing bike ride around the park, shopped for souvenirs, and tasted local street food from the nearby stalls. It was a simple yet memorable way to end our trip.",
    },
  ];

  const cards = days.map(
    ({ id, badge, title, date, imgs, description, imgCount }) => ({
      id,
      badge,
      title,
      date,

      images: imgs.map((n) => `${badge.toLowerCase()} (${n}).jpg`),
      description,
    })
  );

  return (
    <div className="blog-page-container">
      <button
        className="hamburger-button"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? <FaTimes /> : <FaBars />}
      </button>

      {mobileNavOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <div
        className={`blog-page-side-nav ${
          mobileNavOpen ? "mobile-nav mobile-nav-open" : ""
        }`}
      >
        <button
          className="back-to-portfolio-button"
          onClick={handleBackToPortfolio}
        >
          <FaHome /> Back to Portfolio
        </button>
        <h3 className="blog-page-nav-title"></h3>
        <ul className="blog-page-day-list">
          {days.map((day) => (
            <motion.li
              key={day.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`blog-page-day-item ${
                selectedDay?.id === day.id ? "blog-page-active" : ""
              }`}
              onClick={() => handleDayClick(day)}
            >
              {day.badge}: {day.title.split(" - ")[0]}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="blog-page-main-content">
        <AnimatePresence>
          {selectedDay ? (
            <motion.div
              key="day-detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="blog-page-day-detail"
            >
              <button
                className="blog-page-back-button"
                onClick={handleBackClick}
              >
                <FaArrowLeft /> Back to all days
              </button>
              <div className="blog-page-day-header">
                <span className="blog-page-day-badge">{selectedDay.badge}</span>
                <h2>{selectedDay.title}</h2>
                <p className="blog-page-day-date">{selectedDay.date}</p>
              </div>
              <div className="single-image-gallery">
                <button
                  className="gallery-nav-button prev"
                  onClick={handlePrevImage}
                >
                  &lt;
                </button>

                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="gallery-main-image"
                >
                  <img
                    src={`./${selectedDay.badge.toLowerCase()} (${
                      selectedDay.imgs[currentImageIndex]
                    }).jpg`}
                    alt={`Day ${selectedDay.id} - Image ${
                      currentImageIndex + 1
                    }`}
                    onError={(e) => {
                      e.target.src = "./placeholder.jpg";
                      e.target.alt = "Image not available";
                      console.error(
                        "Failed to load image:",
                        `${selectedDay.badge.toLowerCase()} (${
                          selectedDay.imgs[currentImageIndex]
                        }).jpg`
                      );
                    }}
                  />
                </motion.div>

                <button
                  className="gallery-nav-button next"
                  onClick={handleNextImage}
                >
                  &gt;
                </button>

                <div className="gallery-pagination">
                  {selectedDay.imgs.map((_, index) => (
                    <span
                      key={index}
                      className={`gallery-dot ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
              <div className="blog-page-day-description">
                {selectedDay.description.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="day-navigation-buttons">
                {selectedDay.id > 1 && (
                  <button
                    className="day-nav-button prev-day"
                    onClick={() => {
                      const prevDay = days.find(
                        (day) => day.id === selectedDay.id - 1
                      );
                      setSelectedDay(prevDay);
                      setCurrentImageIndex(0);
                      // Scroll to top
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    ← Previous Day:{" "}
                    {days.find((day) => day.id === selectedDay.id - 1).badge}
                  </button>
                )}
                {selectedDay.id < days.length && (
                  <button
                    className="day-nav-button next-day"
                    onClick={() => {
                      const nextDay = days.find(
                        (day) => day.id === selectedDay.id + 1
                      );
                      setSelectedDay(nextDay);
                      setCurrentImageIndex(0);
                      // Scroll to top
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Next Day:{" "}
                    {days.find((day) => day.id === selectedDay.id + 1).badge} →
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="blog-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="blog-page-blog-list"
            >
              <h1 className="blog-page-main-title">Travel Blog</h1>
              <p className="blog-page-subtitle">
                My 7-day journey through the Philippines
              </p>

              <div className="blog-page-blog-grid">
                {(showAllBlogs ? cards : cards.slice(0, 3)).map((card) => (
                  <motion.div
                    key={card.id}
                    whileHover={{ y: -5 }}
                    className="blog-page-blog-card"
                    onClick={() =>
                      handleDayClick(days.find((d) => d.id === card.id))
                    }
                  >
                    <div className="blog-page-card-image">
                      <img
                        src={`./${card.images[0]}`}
                        alt={card.title}
                        onError={(e) => {
                          e.target.src = "./placeholder.jpg";
                          e.target.alt = "Image not available";
                          console.error(
                            "Failed to load card image:",
                            card.images[0]
                          );
                        }}
                      />
                      <div className="blog-page-card-badge">{card.badge}</div>
                    </div>
                    <div className="blog-page-card-content">
                      <h3>{card.title}</h3>
                      <p className="blog-page-card-date">{card.date}</p>
                      <p className="blog-page-card-excerpt">
                        {card.description.split(" ").slice(0, 20).join(" ")}...
                      </p>
                      <button className="blog-page-read-more">
                        Read More <FiExternalLink />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {!showAllBlogs && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="blog-page-view-more"
                  onClick={handleViewMore}
                >
                  View All Days
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;
