import React, { useState, useEffect } from "react";
import "./../styles/tour.css";
import ModalBlog from './modalBlog';

export default function Tour() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const days = [
    {
      id: 1,
      badge: "Day 1",
      title: "City Tour - Arrival in Manila",
      date: "April 7, 2025",
      imgs: [2, 4, 7, 3, 5],

      description: "This was our first day arriving in Manila. We visited iconic places like Rizal Park, SM Mall of Asia, and Fort Santiago.\nWe had a great time exploring, taking photos, and learning more about the city’s rich history. It was a great experience to immerse ourselves in the local culture and witness the vibrant atmosphere of Manila firsthand."
    },
    {
      id: 2,
      badge: "Day 2",
      title: "Subic Bay - Exploring A Special Economic Zone",
      date: "April 8, 2025",
      imgs: [1, 2, 5, 3, 4],
 
      description: "In Subic Bay, we witnessed how cargo is efficiently processed through their port system. We also learned about local security protocols by visiting their police office.\nIt was a great experience roaming around the area and seeing how this Special Economic Zone operates."
      },
    {
      id: 3,
      badge: "Day 3",
      title: "Museum – Dive into Rich History through Historical Icon",
      date: "April 9, 2025",
      imgs: [8, 2, 9, 5, 6],

      description: "On Day 3, we visited the National Museum of Natural History, the Quezon Shrine, and the Sasakyang Pampangulo Museum.\nIt was a fascinating day filled with cultural insights, historical exhibits, and a deeper appreciation for the country's rich heritage.\nOne of the highlights was seeing the presidential vehicles up close — it felt like stepping into a living piece of history.\nOverall, we had an inspiring and memorable experience."
      },
    {
      id: 4,
      badge: "Day 4",
      title: "BSP & Hytech - A preview on how things are done",
      date: "April 10, 2025",
      imgs: [2, 3, 5, 1, 4],

      description: "On this day, we visited Bangko Sentral ng Pilipinas. Although we weren't allowed to take pictures inside, we were still able to buy a commemorative coin, which made the visit extra special.\nIt was a great experience to learn about the country’s financial systems up close.\nWe also went to Hytech, where we witnessed how modern machinery, IoT, and virtual gadgets operate in real-time.\nIt was a fascinating look into how advanced technologies are integrated into industrial processes."
    },
    {
      id: 5,
      badge: "Day 5",
      title: "MMDA & LRT - Transportation and Traffic Engineering",
      date: "April 11, 2025",
      imgs: [8, 4, 1, 2, 3],

      description: "On Day 5, we explored the inner workings of Metro Manila’s transportation systems by visiting the MMDA (Metropolitan Manila Development Authority) and the LRT (Light Rail Transit).\nWe learned about traffic management strategies, real-time monitoring systems, and the coordination required to handle daily urban congestion.\nAt the LRT facility, we gained insights into how trains are operated, maintained, and scheduled to serve thousands of commuters efficiently.\nIt was an eye-opening experience that gave us a deeper appreciation for the complexities of urban transit and public safety."
    },
    {
      id: 6,
      badge: "Day 6",
      title: "Baguio Tour - Summer Capital Of the Philippines",
      date: "April 12, 2025",
      imgs: [5, 3, 12, 7, 4],

      description: "We arrived in Baguio, the Summer Capital of the Philippines, and were greeted by its cool breeze and beautiful pine-covered landscapes.\nOur visit included the Strawberry Farm where we picked fresh strawberries, the peaceful and ornate Bell Church, and The Mansion—an official retreat residence for the President.\nWe also toured the prestigious Philippine Military Academy, gaining a deeper appreciation for the discipline and training of future military leaders.\nIt was a fun and enriching day filled with history, culture, and unforgettable sights."
    },
    {
      id: 7,
      badge: "Day 7",
      title: "Last Day : Sunday Fun Day",
      date: "April 13, 2025",
      imgs: [5, 3, 4, 2, 1],

      description: "On our last day, we spent our remaining time at Burnham Park, one of Baguio’s most beloved destinations. We enjoyed a relaxing bike ride around the park, shopped for souvenirs, and tasted local street food from the nearby stalls. It was a simple yet memorable way to end our trip."
    }
  ];

  const cards = days.map(({ id, badge, title, date, imgs, description, imgCount }) => ({
    id,
    badge,
    title,
    date,
  
    images: imgs.map((n) => `${badge.toLowerCase()} (${n}).jpg`),
    description
  }));

  const openModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  return (
    <div className="tour">
      <div className="container">
        <div className="container-tour">
          <h2 className="section-title">Blogs</h2>
          <div className="cards-grid">
            {cards.map((card) => (
              <div
                key={card.id}
                className="card"
                onClick={() => openModal(card)}
              >
                <div className="card-gallery">
                  <div className="left-images">
                    <img src={card.images[0]} alt="" className="small-image" />
                    <img
                      src={card.images[1]}
                      alt=""
                      className="small-image bottom-image"
                    />
                  </div>
                  <div className="center-image">
                    <img src={card.images[2]} alt="" className="big-image" />
                  </div>
                  <div className="right-images">
                    <img src={card.images[3]} alt="" className="small-image" />
                    <img
                      src={card.images[4]}
                      alt=""
                      className="small-image bottom-image"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <span className="badge">{card.badge}</span>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-date">{card.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ModalBlog */}
      {showModal && selectedCard && (
        <ModalBlog
          modalType="tour-modal"
          images={selectedCard.images}
          title={selectedCard.title}
          badge={selectedCard.badge}
          date={selectedCard.date}
          description={selectedCard.description}
          imgCount={selectedCard.imgCount}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
