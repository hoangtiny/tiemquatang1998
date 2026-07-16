import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

const images = [
  "/anhdep/FALL-IN-LUV-BOX-5.webp",
  "/anhdep/FALL-IN-LUV-BOX-2.webp",
  "/anhdep/hc1.webp",
  "/anhdep/GRADUATE-BOX-2.webp",
  "/anhdep/hop-qua.webp",
  "/anhdep/hc2.webp",
  "/anhdep/GRADUATE-BOX-5.webp"
];

// Duplicate the array to create a seamless loop
const duplicatedImages = [...images, ...images];

const FeaturedImages = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4 uppercase tracking-wide">
            Hình Ảnh Nổi Bật
          </h2>
          <TypewriterText 
            text='"The meaning, purpose and stories behind the each item are lovely"' 
            className="text-lg text-gray-500 max-w-2xl mx-auto italic font-medium" 
          />
        </div>
      </div>

      {/* Infinite Marquee Container - Full Width */}
      <div className="relative w-full overflow-hidden">
        <style>
          {`
            @keyframes marquee-ltr {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-marquee-ltr {
              animation: marquee-ltr 25s linear infinite;
            }
          `}
        </style>
        <div className="flex w-[300%] md:w-[200%] animate-marquee-ltr gap-4 px-2 hover:pause">
          {duplicatedImages.map((img, index) => {
            // Alternate heights for more visual interest
            const isShort = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm group cursor-pointer flex-shrink-0 w-[70vw] md:w-[25vw] ${
                  isShort ? 'aspect-square mt-6' : 'aspect-square'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Featured Image ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedImages;
