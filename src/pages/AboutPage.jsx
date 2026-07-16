import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Gift, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypewriterText from '../components/TypewriterText';

const AboutPage = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop" 
            alt="About Us Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Câu Chuyện Của Tiệm 1998
          </motion.h1>
          <div className="mt-4">
            <TypewriterText 
              text="Nơi những món quà mang đậm dấu ấn cá nhân và tình cảm chân thành được trao gửi."
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop" 
                alt="Our Story" 
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-dark">Khởi Nguồn Từ Tình Yêu</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Bắt đầu từ một cửa tiệm nhỏ nhắn năm 1998, chúng tôi luôn tin rằng giá trị thực sự của một món quà không nằm ở mức giá hiển thị trên nhãn mác, mà nằm ở sự thấu hiểu và tâm huyết của người tặng.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                <strong>Tiệm 1998</strong> không chỉ là nơi bạn mua một hộp quà. Chúng tôi cung cấp trải nghiệm để bạn tự tay thiết kế, tùy chỉnh và gửi gắm câu chuyện riêng vào đó. Cùng nhau, chúng ta biến những dịp bình thường thành những khoảnh khắc đáng nhớ nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 drop-shadow-sm">Giá Trị Cốt Lõi</h2>
            <TypewriterText 
              text="Những tiêu chí tôn chỉ giúp chúng tôi mang đến dịch vụ hoàn hảo nhất"
              className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Tận Tâm</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Mỗi sản phẩm đều được chăm chút tỉ mỉ từ những chi tiết nhỏ gọn nhất.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Cao Cấp</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Cam kết chỉ sử dụng các dòng nguyên liệu thành phần mang tiêu chuẩn cao cấp.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Cá Nhân Hoá</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Thiết kế hộp quà độc bản của riêng bạn qua tính năng Tự Làm Hộp Quà thông minh.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Uy Tín</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Luôn đảm bảo tiến độ và hỗ trợ giải đáp mọi trải nghiệm khách hàng sau mua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6 tracking-tight">
            Sẵn sàng khám phá thế giới quà tặng?
          </h2>
          <TypewriterText 
            text="Hàng trăm mẫu thiết kế đã sẵn sàng hoặc bạn có thể tự tay tạo nên hộp quà độc đáo ngay hôm nay!"
            className="text-gray-600 mb-10 max-w-xl mx-auto text-lg"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/bo-suu-tap"
              className="btn-primary h-14 px-8 text-lg font-bold shadow-lg shadow-primary/30 inline-flex items-center justify-center"
            >
              Xem Bộ Sưu Tập
            </Link>
            <Link 
              to="/tu-lam-hop-qua"
              className="btn-outline h-14 px-8 text-lg font-bold hover:bg-gray-50 inline-flex items-center justify-center"
            >
              Tự Làm Hộp Quà
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
