import React from 'react'

import { FaInstagram, FaAngleRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-white mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Grid Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <h1 className="font-logo text-4xl font-bold">Ponta</h1>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Ponta Ramen was founded in 2012 with a simple mission: to bring the authentic taste of Japan directly to Indonesia.
                        </p>
                    </div>

                    {/* Menu Page */}
                    <div className="flex flex-col gap-3">
                        <div>
                            <h2 className="font-semibold text-xl">Menu Page</h2>
                            <div className="w-10 h-[2px] bg-green-600 mt-1 rounded"></div>
                        </div>
                        <ul className="flex flex-col gap-2 text-gray-300 text-sm mt-1">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 hover:text-green-500 transition-colors"
                                >
                                    <FaAngleRight className="text-green-600" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 hover:text-green-500 transition-colors"
                                >
                                    <FaAngleRight className="text-green-600" />
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 hover:text-green-500 transition-colors"
                                >
                                    <FaAngleRight className="text-green-600" />
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Explore Menu */}
                    <div className="flex flex-col gap-3">
                        <div>
                            <h2 className="font-semibold text-xl">Explore Menu</h2>
                            <div className="w-10 h-[2px] bg-green-600 mt-1 rounded"></div>
                        </div>
                        <ul className="flex flex-col gap-2 text-gray-300 text-sm mt-1">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 hover:text-green-500 transition-colors"
                                >
                                    <FaAngleRight className="text-green-600" />
                                    Food
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 hover:text-green-500 transition-colors"
                                >
                                    <FaAngleRight className="text-green-600" />
                                    Drink
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col gap-3">
                        <div>
                            <h2 className="font-semibold text-xl">Contact Us</h2>
                            <div className="w-10 h-[2px] bg-green-600 mt-1 rounded"></div>
                        </div>
                        <ul className="flex flex-col gap-3 text-gray-300 text-sm mt-1">
                            <li>
                                <a
                                    href="mailto:info@ponta.com"
                                    className="flex items-center gap-2 hover:text-green-500 transition-colors"
                                >
                                    <MdEmail size={18} className="text-green-600" />
                                    <span>Email</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 hover:text-green-500 transition-colors"
                                >
                                    <FaInstagram size={18} className="text-green-600" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 py-4 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-green-500 font-semibold">Ibrahim Cahya Gumilar</span>. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer