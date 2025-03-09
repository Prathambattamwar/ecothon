import { useState } from "react";

const HelpSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const lightboxOpen = () => setIsOpen(true);
    const lightboxClose = () => setIsOpen(false);

    return (
        <section className="w-full float-left help-con py-16">
            <div className="container relative mx-auto px-4">
                {isOpen && (
                    <div id="light" className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
                        <div className="relative w-11/12 md:w-2/3 lg:w-1/2">
                            <button
                                className="absolute top-2 right-2 text-white text-2xl"
                                onClick={lightboxClose}
                            >
                                &times;
                            </button>
                            <iframe
                                className="w-full h-96"
                                src="https://www.youtube.com/embed/HmrvP-uN0Kg?si=80mTCmfMOk7pdNcS"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="block text-green-600 text-lg font-semibold">We are Professional & Experts</span>
                        <h2 className="text-3xl font-bold my-4">We Want to Help You to Grow Plant.</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="flex items-center mt-6">
                            <img className="w-12 h-12" src="assets/images/headephone-icon.png" alt="headphone-icon" />
                            <div className="ml-4">
                                <span className="block text-gray-700">Contact For Support</span>
                                <small className="block text-gray-900 font-semibold text-lg">+1 234 567 89</small>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative cursor-pointer" onClick={lightboxOpen}>
                            <img className="w-full max-w-sm rounded-lg shadow-lg" src="assets/images/vedio-img.jpg" alt="video-thumbnail" />
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                <img className="w-16 h-16" src="assets/images/play-icon.png" alt="play-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
