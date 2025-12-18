"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import { FaPlay } from "react-icons/fa";

const reviews = [
  {
    name: "Avni",
    location: "Vadodara",
    thumbnail: "/images/reviews/avni.jpg",
    youtubeId: "VIDEO_ID_1",
  },
  
  {
    name: "Bahadur",
    location: "Mohali",
    thumbnail: "/images/reviews/bahadur.jpg",
    youtubeId: "VIDEO_ID_2",
  },
  {
    name: "Mukesh",
    location: "Bhopal",
    thumbnail: "/images/reviews/mukesh.jpg",
    youtubeId: "VIDEO_ID_3",
  },
  {
    name: "Anna",
    location: "Bengaluru",
    thumbnail: "/images/reviews/anna.jpg",
    youtubeId: "VIDEO_ID_4",
  },
];

export default function HealthiansReviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      {/* Section */}
      <section className="reviews-section">
        <h2 className="section-title">Healthians Reviews</h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="video-card"
                onClick={() => setActiveVideo(item.youtubeId)}
              >
                <img src={item.thumbnail} alt={item.name} />

                <div className="play-btn">
                  <FaPlay />
                </div>

                <div className="card-info">
                  <h4>{item.name}</h4>
                  <p>{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
