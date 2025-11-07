import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
            <Navbar />

            {/* Container */}
            <div className="flex justify-center items-center w-full min-h-screen bg-gray-50 py-20 md:py-32">
                <form className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-10 space-y-8">
                    {/* Title */}
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-gray-800">Contact Form</h2>
                    </div>

                    {/* Row 1: Name & Phone */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Your Name */}
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold text-gray-700 mb-2">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold text-gray-700 mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Row 2: Email & Company */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold text-gray-700 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div className="flex flex-col flex-1">
                            <label className="font-semibold text-gray-700 mb-2">
                                Your Company <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Row 3: Subject */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-2">
                            Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Row 4: Message */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-2">
                            Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
