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
    thumbnail: "https://helma.healthians.com/stationery/mailer-assets/61bb048fca7bb.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/Xvby-8yO4yg?si=-uzyRKUXY6Um--Ef",
  },
  {
    name: "Bahadur",
    location: "Mohali",
    thumbnail: "https://helma.healthians.com/stationery/mailer-assets/61bb03c3388d9.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/rTA7q5Q-pvs?si=AfvHmfqdk0Jr4zfd",
  },
  {
    name: "Mukesh",
    location: "Bhopal",
    thumbnail: "https://helma.healthians.com/stationery/mailer-assets/61bb05161a147.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/S9BrSXsHCGY?si=UHvtj8eg9k1vW2FH",
  },
  {
    name: "Mukesh",
    location: "Bhopal",
    thumbnail: "https://helma.healthians.com/stationery/mailer-assets/61bb05161a147.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/S9BrSXsHCGY?si=UHvtj8eg9k1vW2FH",
  },
  {
    name: "Mukesh",
    location: "Bhopal",
    thumbnail: "https://helma.healthians.com/stationery/mailer-assets/61bb05161a147.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/S9BrSXsHCGY?si=UHvtj8eg9k1vW2FH",
  },
  {
    name: "Mukesh",
    location: "Bhopal",
    thumbnail: "https://helma.healthians.com/stationery/mailer-assets/61bb05161a147.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/S9BrSXsHCGY?si=UHvtj8eg9k1vW2FH",
  },
];


export default function HealthiansReviews() {
  const [activeVideo, setActiveVideo] = useState<any>(null);
const siteOrigin =
  typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <section className="reviews-section bg-[#fafafa]" id="review-section">
        <h2 className="section-title">Healthians Reviews</h2>

        <div className="max-w-6xl m-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
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
                onClick={() => setActiveVideo(item)}
              >
                <img src={item.thumbnail} alt={item.name} />

                <div className="play-btn">
                  <FaPlay />
                </div>

                <div className="card-info w-4/5">
                  <h4 className="border-b border-white pb-2">{item.name}</h4>
                  <p className="pt-2">{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </section>

      {/* VIDEO POPUP */}
      {activeVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
              ✕
            </button>

            {activeVideo.videoType === "youtube" ? (
              <iframe
                src={activeVideo.video}
                title="Customer Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                />
            ) : (
              <video controls autoPlay>
                <source src={activeVideo.video} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
}
