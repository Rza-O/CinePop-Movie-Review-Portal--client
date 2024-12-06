import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 lg:px-20">
                <div className=" shadow-2xl rounded-lg p-8 lg:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 lg:pr-8">
                            <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
                            <form>
                                <div className="flex space-x-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Your Subject"
                                    className="input input-bordered w-full mb-4"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="textarea textarea-bordered w-full mb-4 h-32"
                                ></textarea>
                                <button className="btn bg-secondary text-white w-full">Send Your Message</button>
                            </form>
                        </div>

                        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span className="icon w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                                        📍
                                    </span>
                                    <div>
                                        <p>5 Fuller Road, Dhaka</p>
                                        <p>Bangladesh 1265</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="icon w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                                        📞
                                    </span>
                                    <p>+801970853705</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="icon w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                                        ✉️
                                    </span>
                                    <p>contact@domain.com</p>
                                </div>
                                <p className="text-gray-600 mt-4">
                                    CinePop is a dynamic platform where movie enthusiasts can explore and share reviews on the latest blockbusters and timeless classics.
                                </p>
                                <div className="flex space-x-4 mt-4">
                                    <button className="btn bg-secondary text-white">Open Map</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;