"use client"; // Add this line at the top

import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
        // Optionally, display an error message to the user or provide a fallback image
      });
    }
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-3">
            <h1 className="h1  text-black-100" data-aos="fade-up">
              Welcome to Showtime Fitness Boxing!
            </h1>
          </div>
          

          <div className="mb-4">
            <video
              ref={videoRef}
              src="/videos/tankDavis.mov"
              width="100%" // Adjust as needed
              height="auto"
              autoPlay
              muted
              controls // Optionally, provide controls for the user
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p
              className="text-xl text-black-100 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              At Showtime Boxing Fitness, we pride ourselves on being more than
              just a gym — we are a community built on passion, discipline, and
              dedication to the art of boxing. Located in the heart of Los
              Angeles, our facility has a rich history of producing top-notch
              talent, with numerous renowned boxers having trained within our
              walls.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href="#0"
                >
                  See Available Classes
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="#0"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
