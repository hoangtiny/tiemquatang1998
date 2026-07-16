import React from 'react';
import TypewriterText from './TypewriterText';

const reviews = [
  {
    id: 1,
    name: 'Tô Nguyễn',
    role: 'NV Văn phòng',
    content: 'Nhân viên tư vấn rất nhiệt tình, người yêu mình thích quà kiểu này cực.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Tiến Đạt',
    role: 'Sinh viên',
    content: 'Quà đóng gói siêu cần thận, ship xa cũng không sợ móp nát gì bên trong luôn ý.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Dũng Bùi',
    role: 'Freelancer',
    content: 'Mua ở shop lần thứ 4 rồi, quà đẹp mà rất tiện. Chắc chắn sẽ còn quay lại nhiều lần nữa.',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop'
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-primary-light/10">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Triệu Niềm Vui Đã Trao Gửi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hàng ngàn khách hàng đã tin tưởng và trao gửi niềm vui qua những món quà của Tiệm quà tặng 1998
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-serif">
                  "
                </div>
              </div>
              <p className="text-gray-600 italic mb-8 mt-4 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-light" 
                />
                <div>
                  <h4 className="font-bold text-dark">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Brands */}
        <div className="mt-20 border-t border-gray-200 pt-10">
          <p className="text-center text-gray-500 font-medium mb-8 text-sm uppercase tracking-wider">
            Thương hiệu đối tác
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="text-2xl font-bold text-gray-400 hover:text-dark transition">BRAND ONE</div>
             <div className="text-2xl font-bold text-gray-400 hover:text-dark transition">LOGO COMPANY</div>
             <div className="text-2xl font-bold text-gray-400 hover:text-dark transition">STUDIO.UX</div>
             <div className="text-2xl font-bold text-gray-400 hover:text-dark transition">CREATIVE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
