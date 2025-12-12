import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Home() {

   const images = [
    "/images/phocuon.png",
    "/images/nem.png",
    "/images/pho.png",
  ];

  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(true); // trigger slide-out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setSlide(false); // reset for next slide-in
      }, 500); // must match animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="mt-20">
      <div className="flex justify-evenly items-center px-10 py-6 gap-10">
        {/* Description */}
        <div className="w-1/2 p-8 rounded-xl">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-green-900 mb-4 tracking-wide drop-shadow-sm">
            Welcome to MenuMentor
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-800 leading-relaxed">
            Discover a world of flavor with 
            <span className="font-bold text-green-700"> MenuMentor</span> —  
            your personalized food companion. Whether you're craving something comforting,
            adventurous, or perfectly familiar, our intelligent AI helps you find dishes 
            you'll love based on your taste and preferences.
          </p>
            {/* Buttons */}
          <div className="flex justify-start mt-6 gap-4">
            <Link to="/Contact" className="px-6 py-3 bg-green-700 text-white font-semibold rounded-full 
                              shadow hover:bg-green-800 hover:scale-105 transition duration-300">
              Contact Us
            </Link>

            <Link to="/Menu" className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-full 
                              shadow hover:bg-yellow-500 hover:scale-105 transition duration-300">
              Explore the Food
            </Link>
          </div>
        </div>
          {/* Slideshow Image */}
          <div className="w-full max-w-xl aspect-video rounded-2xl overflow-hidden">
            <img
              src={images[index]}
              alt="Slideshow"
              className={`w-full h-full object-cover transition-transform duration-700
            ${slide ? "-translate-x-full" : "translate-x-0"}
          `}
            />
          </div>
      </div>
</div>

  );
}