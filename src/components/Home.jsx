import React, { useState } from "react";

import SliderMenuHome from "./slider/SliderMenuHome";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./css/home.css";
import "./css/text.css";

import Banner2 from "../assets/images/home/banner2.jpg";

import ShoyuRamen from "../assets/images/menu/ramen1.png";
import ShioRamen from "../assets/images/menu/shio-ramen.png";
import MisoRamen from "../assets/images/menu/miso-ramen.png";
import TonkotsuRamen from "../assets/images/menu/tonkotsu-ramen.png";
import SpicyRamen from "../assets/images/menu/spicy-ramen.png";
import Coffee from "../assets/images/menu/coffee.png";

import Location1 from "../assets/images/location/location1.jpg";
import Location2 from "../assets/images/location/location2.jpg";
import Location3 from "../assets/images/location/location3.jpg";

import About from "../assets/images/home/about-us.jpg";

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const menus = [
        {
            name: "Shoyu Ramen",
            price: "$10",
            image: ShoyuRamen,
            description: "Ramen with a savory soy sauce flavor that defines its signature taste.",
        },
        {
            name: "Shio Ramen",
            price: "$11",
            image: ShioRamen,
            description: "A light and clear salt-based broth with a gentle, refreshing taste.",
        },
        {
            name: "Miso Ramen",
            price: "$12",
            image: MisoRamen,
            description: "A rich and savory broth made from fermented miso paste.",
        },
        {
            name: "Tonkotsu Ramen",
            price: "$13",
            image: TonkotsuRamen,
            description: "A thick and creamy broth made from simmered beef bones.",
        },
        {
            name: "Spicy Ramen",
            price: "$12",
            image: SpicyRamen,
            description: "A spicy ramen that excites your taste buds and warms the soul.",
        },
        {
            name: "Coffee Latte",
            price: "$6",
            image: Coffee,
            description: "Japanese-style brewed coffee with a smooth and aromatic flavor.",
        },
    ];


    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Section Banner */}
            <section className="relative w-full h-screen flex items-center justify-center mb-20 md:mb-32">
                <img
                    src={Banner2}
                    alt="Banner2"
                    className="w-full h-full object-cover filter"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text */}
                <div className="absolute z-10 text-center px-6 text-4xl md:text-6xl font-bold uppercase">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-600">
                        Experience Japan
                    </h1>
                    <p className="text-white">
                        in Every Bite
                    </p>
                </div>
            </section>

            {/* Section About Us */}
            <section className="container mx-auto px-6 md:px-12 flex items-center justify-center mb-20 md:mb-32">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Teks */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-800 relative inline-block mb-6
        after:content-[''] after:block after:w-12 after:h-1 after:bg-green-600 after:mt-2">
                            About Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            Ponta Ramen was founded in 2012 with a simple mission: to bring the authentic taste of Japan to Indonesia. Inspired by the warmth of ramen shops in Tokyo, we are committed to serving ramen made with traditional recipes, broth simmered for over 12 hours, and the finest fresh ingredients.
                        </p>
                    </div>

                    {/* Gambar */}
                    <div className="flex-1">
                        <img
                            src={About}
                            alt="About Us"
                            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Section Menu */}
            <section className="container mx-auto px-6 md:px-12 pt-16 mb-20 md:mb-32">
                <div className="flex flex-col gap-16">
                    {/* Judul dengan garis full */}
                    <div className="relative flex justify-center items-center w-full">
                        <h2 className="bg-green-800 text-white font-bold text-3xl px-4 py-2 relative z-10">
                            Explore Menu
                        </h2>
                        {/* Garis full */}
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-green-800"></span>
                    </div>

                    {/* Slider */}
                    <h2 className="text-2xl font-bold text-gray-800 relative inline-block
        after:content-[''] after:block after:w-12 after:h-1 after:bg-green-600 after:mt-2">
                        Favorite
                    </h2>
                    <SliderMenuHome />

                    {/* Grid Menu */}
                    <h2 className="text-2xl font-bold text-gray-800 relative inline-block
        after:content-[''] after:block after:w-12 after:h-1 after:bg-green-600 after:mt-2">
                        Explore Menu
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                        {menus.map((menu, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg border border-gray-100 
          overflow-hidden flex flex-col transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2"
                            >
                                {/* Gambar */}
                                <div className="overflow-hidden relative">
                                    <img
                                        src={menu.image}
                                        alt={menu.name}
                                        className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                {/* Konten */}
                                <div className="p-8 flex flex-col space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-2xl text-gray-900">{menu.name}</h3>
                                        <p className="font-bold text-lg text-amber-600">{menu.price}</p>
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        {menu.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <a href="/menu" className="btn-primary">See More</a>
                    </div>
                </div>
            </section>

            {/* Section Location */}
            <section className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
                <div className="flex flex-col gap-16">
                    {/* Judul */}
                    <div className="relative flex justify-center items-center w-full">
                        <h2 className="bg-green-800 text-white font-bold text-3xl px-6 py-2 relative z-10">
                            Location
                        </h2>
                        {/* Garis full */}
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-green-800"></span>
                    </div>

                    {/* Daftar Lokasi */}
                    <div className="flex flex-col gap-10 px-6 md:px-32">
                        {/* Location Item 1 */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-stretch rounded-2xl shadow-xl overflow-hidden bg-white">
                            {/* Gambar */}
                            <figure className="w-full lg:w-1/2">
                                <img
                                    src={Location1}
                                    alt="grand indonesia mall"
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                            </figure>

                            {/* Detail Lokasi */}
                            <div className="flex flex-col gap-3 p-6 md:p-8 text-gray-800 w-full lg:w-1/2">
                                <p className="text-sm text-gray-600">Open 10:00am - 10:00pm</p>
                                <p className="text-base leading-relaxed">
                                    Grand Indonesia West Mall, Lt. 3A No. 21, Jl. M.H. Thamrin No.1, Jakarta Pusat 10310
                                </p>
                                <p className="font-semibold">(021) 4589 3321</p>
                            </div>
                        </div>

                        {/* Location Item 2 */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-stretch rounded-2xl shadow-xl overflow-hidden bg-white">
                            {/* Gambar */}
                            <figure className="w-full lg:w-1/2">
                                <img
                                    src={Location2}
                                    alt="summarecon mall bekasi"
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                            </figure>

                            {/* Detail Lokasi */}
                            <div className="flex flex-col gap-3 p-6 md:p-8 text-gray-800 w-full lg:w-1/2">
                                <p className="text-sm text-gray-600">Open 10:00am - 10:00pm</p>
                                <p className="text-base leading-relaxed">
                                    Summarecon Mall Bekasi, Lt. 2 No. 15, Jl. Boulevard Ahmad Yani Blok M, Bekasi 17142
                                </p>
                                <p className="font-semibold">(021) 8896 4423</p>
                            </div>
                        </div>

                        {/* Location Item 3 */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-stretch rounded-2xl shadow-xl overflow-hidden bg-white">
                            {/* Gambar */}
                            <figure className="w-full lg:w-1/2">
                                <img
                                    src={Location3}
                                    alt="tunjungan plaza"
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                            </figure>

                            {/* Detail Lokasi */}
                            <div className="flex flex-col gap-3 p-6 md:p-8 text-gray-800 w-full lg:w-1/2">
                                <p className="text-sm text-gray-600">Open 10:00am - 10:00pm</p>
                                <p className="text-base leading-relaxed">
                                    Tunjungan Plaza 3, Lt. 4 No. 10, Jl. Basuki Rahmat No.8-12, Surabaya 60261
                                </p>
                                <p className="font-semibold">(031) 5342 891</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
