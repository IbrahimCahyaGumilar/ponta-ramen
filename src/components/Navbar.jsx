import React, { useState } from "react";

import { FaShop } from "react-icons/fa6";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-6 md:px-12 py-5">
                    <div className="flex items-center justify-between">
                        {/* === LEFT SIDE === */}
                        <div className="flex items-center gap-14">
                            <a href="/" className="font-logo text-4xl font-bold">
                                Ponta
                            </a>

                            {/* === DESKTOP MENU === */}
                            <ul className="hidden md:flex font-navbar gap-6 text-black text-xl">
                                <li>
                                    <a href="/" className="navbar-link">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/menu" className="navbar-link">
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="navbar-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* === RIGHT SIDE === */}
                        <div className="flex gap-4 items-center">
                            {/* Login hanya muncul di desktop */}
                            <a href="/" className="btn-primary hidden md:block">
                                Login
                            </a>

                            {/* Hamburger button */}
                            <button
                                onClick={toggleSidebar}
                                className="relative w-8 h-6 md:hidden block z-50"
                            >
                                <span
                                    className={`absolute left-0 w-full h-0.5 bg-black transition-all duration-300 transform-gpu ${showSidebar ? "rotate-45 top-2.5" : "top-0"
                                        } origin-center`}
                                ></span>
                                <span
                                    className={`absolute left-0 w-full h-0.5 bg-black transition-opacity duration-300 transform-gpu ${showSidebar ? "opacity-0 top-2.5" : "top-2.5"
                                        }`}
                                ></span>
                                <span
                                    className={`absolute left-0 w-full h-0.5 bg-black transition-all duration-300 transform-gpu ${showSidebar ? "-rotate-45 top-2.5" : "bottom-0"
                                        } origin-center`}
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Navbar */}
            <div
                className={`fixed top-0 left-0 h-screen w-full bg-slate-800 text-white z-40 transform ${showSidebar ? "translate-x-0" : "-translate-x-full"
                    } transition-all ease-in-out duration-500 md:hidden`}
            >
                <div className="px-10 pt-28 font-navbar text-xl flex flex-col gap-6">
                    <a href="/" className="navbar-link border-b border-white pb-3">
                        Home
                    </a>
                    <a href="/menu" className="navbar-link border-b border-white pb-3">
                        Menu
                    </a>
                    <a href="/contact" className="navbar-link border-b border-white pb-3">
                        Contact
                    </a>

                    {/* === LOGIN BUTTON langsung di bawah menu === */}
                    <a
                        href="/"
                        className="btn-primary block w-full text-center mt-8"
                    >
                        Login
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar