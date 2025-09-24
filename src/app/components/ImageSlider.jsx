"use client"

import Image from "next/image";
import React, { useState } from "react";


const ImageSlider = () => {
  // Array of images
  const images = [
    { src: "/images/mans-face.jpg", alt: "man-face" },
    { src: "/images/car-landscape.jpg", alt: "car-landscape" },
    { src: "/images/naruto.jpg", alt: "naruto" },
    { src: "/images/stack.jpg", alt: "stack" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard navigation handler
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (e.key === "ArrowRight") {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 p-4 overflow-x-hidden"
      role="region"
      aria-label="Image slider"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative w-[500px] h-[400px] overflow-visible rounded-2xl">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{
            transform: `translateX(calc(250px - ${activeIndex} * 350px))`,
          }}
        >
          {images.map((img, idx) => (
            <div
              key={img.alt}
              className={`relative w-[350px] h-[400px] mx-2 flex-shrink-0 rounded-xl shadow-lg border-2 transition-all duration-300 ${
                idx === activeIndex
                  ? "z-20 scale-105 border-blue-500"
                  : "z-10 scale-95 opacity-80 border-transparent"
              }`}
              style={{
                boxShadow:
                  idx === activeIndex
                    ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                    : undefined,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover w-full h-full rounded-xl"
                sizes="350px"
              />
            </div>
          ))}
        </div>
        {/* Slider dots */}
        <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-3 z-10">
          {images.map((img, idx) => (
            <button
              key={img.alt}
              className={`w-3 h-3 rounded-full border-2 border-white bg-gray-400 transition-all duration-200 ${
                activeIndex === idx ? "bg-blue-500 scale-125" : "opacity-60"
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
