import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2-1.74 2.89 2.89 0 0 1 2.89-2.89 2.88 2.88 0 0 1 2.31 1.12h3.45a6.32 6.32 0 0 0-5.76-4.57 6.34 6.34 0 1 0 6.34 6.34v-4.47a8.27 8.27 0 0 0 3.19.64V6.69z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 relative mt-16 pb-16 pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-[#800000] mb-2 font-serif">Tiệm 1998</h2>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
              <span>Ngõ 76 Đường Kim Hoàng, Xã Vân Canh, Huyện Hoài Đức, Hà Nội</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone className="w-5 h-5 text-gray-400 shrink-0" />
              <span>0339 267 766</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Mail className="w-5 h-5 text-gray-400 shrink-0" />
              <span>cskh.tiem1998@gmail.com</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-10">
            <h4 className="text-gray-900 font-semibold mb-6 uppercase text-sm tracking-widest">Liên kết nhanh</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-primary transition-colors text-sm">Trang chủ</Link></li>
              <li><Link to="/bo-suu-tap" className="text-gray-500 hover:text-primary transition-colors text-sm">Bộ sưu tập</Link></li>
              <li><Link to="/bo-suu-tap" className="text-gray-500 hover:text-primary transition-colors text-sm">Hộp quà có sẵn</Link></li>
              <li><Link to="/tu-lam-hop-qua" className="text-gray-500 hover:text-primary transition-colors text-sm">Tự làm hộp quà</Link></li>
              <li><Link to="/kiem-tra-don-hang" className="text-gray-500 hover:text-primary transition-colors text-sm">Kiểm tra đơn hàng</Link></li>
              <li><Link to="/gioi-thieu" className="text-gray-500 hover:text-primary transition-colors text-sm">Giới thiệu</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 uppercase text-sm tracking-widest">Liên hệ</h4>
            <div className="text-sm text-gray-500 space-y-2 mb-6">
              <p>Bạn có thắc mắc chưa được giải quyết ?</p>
              <p>Chúng tôi online 24/7 từ thứ 2 tới thứ 7</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/tiemquatang1998.official" className="w-10 h-10 rounded-full bg-[#35435B] flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Facebook className="w-[18px] h-[18px]" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://www.instagram.com/p/DN7EI3Kk0zD/" className="w-10 h-10 rounded-full bg-[#35435B] flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.tiktok.com/@tiemquatang1998" className="w-10 h-10 rounded-full bg-[#35435B] flex items-center justify-center text-white hover:bg-primary transition-colors">
                <TikTokIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 flex flex-col gap-3 z-40 pointer-events-none">
        <a href="https://zalo.me/0339267766" className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,136,255,0.3)] hover:-translate-y-1 transition-transform border-2 border-white pointer-events-auto">
          <span className="font-bold text-[8px] md:text-[10px] tracking-wider relative top-[1px]">Zalo</span>
        </a>
        <a href="https://m.me/tiemquatang1998.official" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-[#ff605c] to-[#a332fc] text-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(163,50,252,0.3)] hover:-translate-y-1 transition-transform border-2 border-white pointer-events-auto">
          <svg className="w-5 h-5 md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.14 2 11.25C2 14.122 3.428 16.666 5.629 18.258C5.789 18.375 5.86 18.583 5.8 18.777L5.3 20.354C5.176 20.743 5.565 21.085 5.926 20.913L7.751 20.046C7.904 19.973 8.082 19.96 8.243 20.007C9.421 20.347 10.686 20.5 12 20.5C17.523 20.5 22 16.36 22 11.25C22 6.14 17.523 2 12 2ZM13.805 13.565L11.523 11.137C11.365 10.969 11.096 10.966 10.935 11.131L8.358 13.771C8.04 14.097 7.505 13.882 7.749 13.486L9.846 10.089C10.057 9.746 10.51 9.613 10.871 9.789L13.111 10.884C13.256 10.955 13.428 10.941 13.56 10.849L16.208 8.995C16.541 8.761 16.946 9.176 16.702 9.501L13.805 13.565Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
