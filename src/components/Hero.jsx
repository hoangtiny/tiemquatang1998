import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image - Using a placeholder pattern that looks premium */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/anhdep/banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container-custom relative h-full flex flex-col justify-center items-start text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            Bộ sưu tập mới
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight uppercase tracking-tighter">
            Trao Gửi Yêu Thương <br />
            <span className="text-primary-light">Trọn Vẹn Từng Phút Giây</span>
          </h1>
          <div className="mb-8">
            <TypewriterText 
              text="Khám phá những món quà độc đáo, ý nghĩa dành tặng cho những người thân yêu nhất của bạn."
              className="text-sm md:text-xl text-gray-100 max-w-lg font-medium opacity-90 leading-relaxed"
            />
          </div>
          <Link to="/bo-suu-tap" className="btn-primary flex items-center gap-2 group text-sm md:text-base w-fit">
            Khám phá ngay
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

