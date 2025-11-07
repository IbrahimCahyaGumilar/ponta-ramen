// SliderMenuHome.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Assets
import ShoyuRamen from "../../assets/images/menu/ramen1.png";
import ShioRamen from "../../assets/images/menu/shio-ramen.png";
import MisoRamen from "../../assets/images/menu/miso-ramen.png";
import TonkotsuRamen from "../../assets/images/menu/tonkotsu-ramen.png";
import SpicyRamen from "../../assets/images/menu/spicy-ramen.png";

const SliderMenuHome = () => {
  const menus = [
    { title: "Shoyu Ramen", price: "$10", img: ShoyuRamen, desc: "Ramen with a savory soy sauce flavor that defines its signature taste." },
    { title: "Shio Ramen", price: "$11", img: ShioRamen, desc: "A light and clear salt-based broth with a gentle, refreshing taste." },
    { title: "Miso Ramen", price: "$12", img: MisoRamen, desc: "A rich and savory broth made from fermented miso paste." },
    { title: "Tonkotsu Ramen", price: "$14", img: TonkotsuRamen, desc: "A thick and creamy broth made from simmered beef bones." },
    { title: "Spicy Ramen", price: "$13", img: SpicyRamen, desc: "A spicy ramen that excites your taste buds and warms the soul." },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={28}
        centeredSlides
        centeredSlidesBounds
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1200}
        navigation
        breakpoints={{
          0: { slidesPerView: 1.05 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper py-6"
      >
        {menus.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="card bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-3xl border border-gray-200 overflow-hidden flex flex-col">
              {/* Gambar menu */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover card-img"
              />

              {/* Konten menu */}
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg md:text-2xl text-gray-900">
                    {item.title}
                  </h3>
                  <p className="font-bold text-base md:text-lg text-amber-600">
                    {item.price}
                  </p>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== Custom Swiper Styling ===== */}
      <style>{`
        /* Wrapper */
        .mySwiper {
          overflow: hidden;
          padding-top: 44px;
          padding-bottom: 44px;
          box-sizing: border-box;
        }
        .mySwiper .swiper-wrapper {
          align-items: center;
        }

        /* Slide */
        .mySwiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.82);
          opacity: 0.9;
          pointer-events: auto;
          transition: 
            transform 450ms cubic-bezier(.2,.9,.2,1),
            box-shadow 450ms ease,
            opacity 450ms ease;
        }
        .mySwiper .swiper-slide-prev,
        .mySwiper .swiper-slide-next {
          transform: scale(0.92);
          opacity: 0.96;
        }
        .mySwiper .swiper-slide-active {
          transform: scale(1.14) translateY(-14px);
          z-index: 50;
          opacity: 1;
        }

        /* Card */
        .card {
          width: 100%;
          border-radius: 1rem;
          overflow: hidden;
          transform-origin: center center;
          background-clip: padding-box;
        }
        .card .card-img {
          height: 220px;
          width: 100%;
          object-fit: cover;
          display: block;
          transition: 
            height 450ms cubic-bezier(.2,.9,.2,1),
            box-shadow 450ms ease;
        }
        .mySwiper .swiper-slide-active .card .card-img {
          height: 300px;
        }

         /* --- Responsive: Tablet view --- */
        @media (min-width: 768px) and (max-width: 1299px) {
          .card .card-img {
            height: 180px; /* lebih kecil di tablet */
          }
          .mySwiper .swiper-slide-active .card .card-img {
            height: 220px;
          }
          .mySwiper .swiper-slide-active {
            transform: scale(1.08) translateY(-10px);
          }
        }

        /* Navigation buttons */
        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          color: #111827;
          background: rgba(255,255,255,0.92);
          border-radius: 9999px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px rgba(17,24,39,0.08);
        }
        .mySwiper .swiper-button-next::after,
        .mySwiper .swiper-button-prev::after {
          font-size: 16px;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .mySwiper {
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .mySwiper .swiper-slide {
            transform: scale(0.94);
          }
          .mySwiper .swiper-slide-active {
            transform: scale(1.02) translateY(-8px);
          }
          .card .card-img {
            height: 180px;
          }
          .mySwiper .swiper-slide-active .card .card-img {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
};

export default SliderMenuHome;
