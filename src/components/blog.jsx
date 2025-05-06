import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/blog.css";
import { FaReact, FaPhp, FaGithub } from "react-icons/fa";
import { SiMysql, SiLaravel, SiTailwindcss } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Blog = () => {
  const navigate = useNavigate();
  const handleReadMore = (id) => {
    navigate(`/blog-page?day=${id}`);
  };

  const handleViewMore = () => {
    navigate('/blog-page');
  };
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
    <div className="travel-blog">
      <div className="container">
        <div className="travel-blog-container">
          <h2 className="travel-section-title">Travel Blog</h2>
          <div className="travel-blog-cards-grid">
            {cards.slice(0, 3).map(({ id, title, description, images, badge }) => (
              <div key={id} className="modern-travel-card">
                <div className="modern-card-content">
                  <div className="modern-card-img-container">
                    <img
                      src={`${images[2]}`}
                      alt={title}
                      className="modern-card-img"
                      loading="lazy"
                    />
                    <div className="modern-card-overlay"></div>
                  </div>
                  <div className="modern-card-info">
                    <div className="modern-card-badge">{badge}</div>
                    <h3 className="modern-card-title">{title}</h3>
                    <p className="modern-card-description">
                      {description.split(" ").slice(0, 15).join(" ")}
                      {description.split(" ").length > 15 ? "..." : ""}
                    </p>
                    <button 
                      className="modern-card-button"
                      onClick={() => handleReadMore(id)}
                    >
                      Read More
                      <svg
                        className="modern-card-arrow"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="view-more-button"
            onClick={handleViewMore}
          >
            View More
            <svg
              className="view-more-arrow"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;