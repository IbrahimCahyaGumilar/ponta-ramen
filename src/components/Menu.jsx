import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

// === Assets ===
import Banner1 from "../assets/images/menu/banner-menu1.png";
import Banner2 from "../assets/images/menu/banner-menu2.png";

import ShoyuRamen from "../assets/images/menu/ramen1.png";
import ShioRamen from "../assets/images/menu/shio-ramen.png";
import MisoRamen from "../assets/images/menu/miso-ramen.png";
import TonkotsuRamen from "../assets/images/menu/tonkotsu-ramen.png";
import SpicyRamen from "../assets/images/menu/spicy-ramen.png";
import Matcha from "../assets/images/menu/matcha.png";
import Ocha from "../assets/images/menu/ocha.png";
import Coffee from "../assets/images/menu/coffee.png";

const Menu = () => {
    const [category, setCategory] = useState("all");

    // === Data Menu ===
    const menuItems = [
        { id: 1, name: "Shoyu Ramen", price: 10, desc: "Ramen with a savory soy sauce flavor.", img: ShoyuRamen, type: "food" },
        { id: 2, name: "Shio Ramen", price: 10, desc: "Lightly salted ramen with a clear broth.", img: ShioRamen, type: "food" },
        { id: 3, name: "Miso Ramen", price: 10, desc: "Rich broth made from fermented miso paste.", img: MisoRamen, type: "food" },
        { id: 4, name: "Tonkotsu Ramen", price: 10, desc: "Thick, creamy broth made from pork bones.", img: TonkotsuRamen, type: "food" },
        { id: 5, name: "Spicy Ramen", price: 10, desc: "Spicy ramen that ignites your appetite.", img: SpicyRamen, type: "food" },
        { id: 6, name: "Matcha Latte", price: 5, desc: "Smooth Japanese green tea latte.", img: Matcha, type: "drink" },
        { id: 7, name: "Ocha", price: 4, desc: "Traditional unsweetened Japanese green tea.", img: Ocha, type: "drink" },
        { id: 8, name: "Japanese Coffee", price: 6, desc: "Brewed coffee made in Japanese style.", img: Coffee, type: "drink" },
    ];


    const filteredMenu = category === "all"
        ? menuItems
        : menuItems.filter((item) => item.type === category);

    return (
        <>
            {/* === Navbar === */}
            <Navbar />

            {/* === Banner Slider === */}
            <section className="relative w-full h-[60vh] md:h-[90vh] mb-20 mt-16 md:mt-20">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full h-full"
                >
                    {[Banner1, Banner2].map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full bg-black flex justify-center items-center">
                                <img
                                    src={banner}
                                    alt={`Banner ${index + 1}`}
                                    className="w-full h-full object-contain md:object-cover transition-all duration-500"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* === Menu Section === */}
            <section className="container mx-auto px-6 md:px-12 pt-16 mb-20 md:mb-32">
                <div className="flex flex-col gap-16">

                    {/* === Judul Section === */}
                    <div className="relative flex justify-center items-center w-full">
                        <h2 className="bg-green-800 text-white font-bold text-3xl px-4 py-2 relative z-10 rounded-md">
                            Explore Menu
                        </h2>
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-green-800"></span>
                    </div>

                    {/* === Tombol Filter === */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {["all", "food", "drink"].map((cat) => {
                            const isActive = category === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-6 py-2 rounded-full border-2 text-lg font-medium transition-all duration-300 
                    ${isActive
                                            ? "bg-green-500 border-green-500 text-white shadow-md"
                                            : "border-green-500 text-green-600 hover:bg-green-100"
                                        }`}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            );
                        })}
                    </div>

                    {/* === Grid Menu dengan Animasi === */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
                        >
                            {filteredMenu.map(({ id, img, name, price, desc }) => (
                                <motion.div
                                    key={id}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden flex flex-col transition-transform"
                                >
                                    <img
                                        src={img}
                                        alt={name}
                                        className="w-full h-60 object-cover"
                                    />
                                    <div className="p-8 flex flex-col space-y-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-bold text-2xl text-gray-900">{name}</h3>
                                            <p className="font-bold text-lg text-gray-600">${price}</p>
                                        </div>
                                        <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Menu;
