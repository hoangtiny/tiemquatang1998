import React from 'react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.18 8.18 0 004.78 1.52V7a4.85 4.85 0 01-1.01-.31z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-400">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500&auto=format&fit=crop',
    alt: 'Khách hàng chia sẻ 1',
    platform: 'tiktok',
    name: 'Ngọc Anh',
    handle: '@ngoc.anh.happy',
    tweet: '🎁 Hộp quà của Tiệm 1998 đẹp hơn mình tưởng rất nhiều! Bạn mình xúc động đến mức khóc luôn 😭❤️',
    likes: '1.2k',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=500&auto=format&fit=crop',
    alt: 'Khách hàng chia sẻ 2',
    platform: 'instagram',
    name: 'Minh Tuấn',
    handle: '@minhtuan.gifts',
    tweet: '✨ Lần đầu order quà online mà hài lòng đến vậy. Ship nhanh, đóng gói siêu cẩn thận nha mọi người!',
    likes: '874',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=500&auto=format&fit=crop',
    alt: 'Khách hàng chia sẻ 3',
    platform: 'tiktok',
    name: 'Thu Hà',
    handle: '@thuha.vn',
    tweet: '💌 Mua cho người yêu nhân kỷ niệm, anh ấy bảo đây là món quà ý nghĩa nhất từ trước đến giờ 🥹',
    likes: '3.4k',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=500&auto=format&fit=crop',
    alt: 'Khách hàng chia sẻ 4',
    platform: 'instagram',
    name: 'Bảo Châu',
    handle: '@baochau.ig',
    tweet: '🎀 Hộp quà tốt nghiệp cho hội bạn thân, ai nhận cũng mê tít! Năm sau lại order tiếp thôi 🎓',
    likes: '2.1k',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=500&auto=format&fit=crop',
    alt: 'Khách hàng chia sẻ 5',
    platform: 'tiktok',
    name: 'Hải Đăng',
    handle: '@haidang.store',
    tweet: '🔥 Shop tư vấn nhiệt tình, giúp mình chọn được quà phù hợp ngân sách. Cực kỳ recommend nha!',
    likes: '987',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=500&auto=format&fit=crop',
    alt: 'Khách hàng chia sẻ 6',
    platform: 'instagram',
    name: 'Lan Phương',
    handle: '@lanphuong.gifts',
    tweet: '💝 Unbox xong mà cứ ngỡ mình đang trong MV! Thiết kế hộp quà quá xinh, xứng đáng 5 sao ⭐⭐⭐⭐⭐',
    likes: '1.8k',
  },
];

const CustomerGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Cộng đồng yêu thích
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Khách Hàng Chia Sẻ
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Hàng ngàn khoảnh khắc unbox hạnh phúc được khách hàng chia sẻ trên mạng xã hội
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group aspect-square overflow-hidden rounded-2xl shadow-sm cursor-pointer"
            >
              {/* Photo */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-all duration-300" />

              {/* Logo top-left */}
              <div className="absolute top-3 left-3">
                <img
                  src="/anhdep/logo.png"
                  alt="Tiệm 1998 logo"
                  className="h-9 w-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Platform icon top-right */}
              <div
                className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-white shadow ${
                  item.platform === 'tiktok'
                    ? 'bg-black'
                    : 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400'
                }`}
              >
                {item.platform === 'tiktok' ? <TikTokIcon /> : <InstagramIcon />}
              </div>

              {/* Tweet-style card */}
              <div className="absolute inset-x-0 bottom-0 p-3 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg">
                  {/* User info row */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center overflow-hidden shrink-0">
                      <span className="text-primary font-bold text-xs">{item.name.charAt(0)}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-dark text-xs leading-tight truncate">{item.name}</p>
                      <p className="text-gray-400 text-[10px] leading-tight truncate">{item.handle}</p>
                    </div>
                    {/* Platform badge */}
                    <div className="ml-auto shrink-0">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${
                        item.platform === 'tiktok'
                          ? 'bg-black'
                          : 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400'
                      }`}>
                        {item.platform === 'tiktok' ? (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.18 8.18 0 004.78 1.52V7a4.85 4.85 0 01-1.01-.31z"/>
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tweet content */}
                  <p className="text-dark text-xs leading-relaxed line-clamp-3">{item.tweet}</p>

                  {/* Likes */}
                  <div className="flex items-center gap-1 mt-2">
                    <HeartIcon />
                    <span className="text-[11px] text-gray-500 font-medium">{item.likes} lượt thích</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <a
            href="https://www.tiktok.com/@tiemquatang1998"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-200 shadow-md"
          >
            <TikTokIcon />
            Theo dõi TikTok
          </a>
          <a
            href="https://www.instagram.com/p/DN7EI3Kk0zD/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity duration-200 shadow-md"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
          >
            <InstagramIcon />
            Theo dõi Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerGallery;
