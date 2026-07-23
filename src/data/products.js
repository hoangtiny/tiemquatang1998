export const generateSlug = (text) => {
  return text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/đ/g, "d").replace(/Đ/g, "D") // Handle Vietnamese 'đ'
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

export const rawProducts = [
  {
    id: 1,
    name: 'YÊU THƯƠNG MINI BOX',
    price: '108.000đ',
    badge: '',
    image: '/anhdep/mini-box-1.webp',
    description: 'Set Quà Yêu Thương Ghim Cảm Xúc Trao Gửi Chân thành.\n\nDành tặng cho nửa kia, bạn bè thân thiết, hoặc tự thưởng cho chính mình vào các dịp sinh nhật, kỷ niệm ngày cần được thắp lửa.\n\nĐiểm nhấn của sản phẩm nằm ở sự tinh tế, một set quà mini nhưng đầy đủ trọn vẹn và vô cùng ý nghĩa, giúp bạn gửi những thông điệp yêu thương một cách chân thành nhất.',
    category: 'Set quà',
    freePhoto: true,
    capacity: 120,
    tags: ['Kỷ niệm sinh nhật', 'Kỷ niệm'],
    additionalImages: [
      '/anhdep/mini-box-2.webp',
      '/anhdep/mini-box-3.webp',
      '/anhdep/mini-box-4.webp',
      '/anhdep/mini-box-5.webp',
      '/anhdep/lo-yeu-thuong.webp'
    ],
    options: [
      {
        name: 'Màu sắc',
        values: [
          { name: 'Hồng' },
          { name: 'Nam' }
        ]
      },
      {
        name: 'Thiệp',
        values: [
          { name: 'Thiệp Love You So Much. 1' }
        ]
      }
    ],
    tabs: {
      description: `Set Quà Yêu Thương Ghim Cảm Xúc Trao Gửi Chân thành.

Dành tặng cho nửa kia, bạn bè thân thiết, hoặc tự thưởng cho chính mình vào các dịp sinh nhật, kỷ niệm ngày cần được thắp lửa.

Điểm nhấn của sản phẩm nằm ở sự tinh tế, một set quà mini nhưng đầy đủ trọn vẹn và vô cùng ý nghĩa, giúp bạn gửi những thông điệp yêu thương một cách chân thành nhất.

🎁 YÊU THƯƠNG MINI BOX bao gồm:
+ 1 lọ đựng note ghim cảm xúc
+ Bút viết
+ Thiệp chúc mừng For The Record
+ Hoa giấy mini hoặc hoa sáp
+ Hộp đựng quà`,
      video: '',
      includes: [
        { name: '1 lọ ghim cảm xúc', image: '/anhdep/lo-yeu-thuong.webp', quantity: 1 },
        { name: 'Bút viết', image: '/anhdep/mini-box-2.webp', quantity: 1 },
        { name: 'Thiệp chúc mừng For The Record', image: '/anhdep/mini-box-3.webp', quantity: 1 },
        { name: 'Hoa giấy mini hoặc hoa sáp', image: '/anhdep/mini-box-4.webp', quantity: 1 },
        { name: 'Hộp đựng quà', image: '/anhdep/hop-qua.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 2,
    name: 'CỬ NHÂN MINI BOX',
    price: '108.000đ',
    badge: '',
    image: '/anhdep/GRADUATE-BOX-2.webp',
    description: 'Set Quà Cử Nhân Mini Hành Trang Nhỏ Ý Nghĩa.\n\nDành tặng cho những người bạn thân, người thương yêu trong ngày lễ tốt nghiệp rực rỡ. Set quà Cử nhân Mini là lời chúc mừng tươi tắn nhất gửi đến các tân cử nhân.\n\nĐiểm nhấn của sản phẩm nằm ở sự tinh tế, một set quà mini nhưng đầy đủ trọn vẹn và vô cùng ý nghĩa. Một món quà nhỏ nhắn nhưng gói trọn sự chân thành, động lực cho chặng đường rực rỡ phía trước.',
    category: 'Set quà',
    freePhoto: true,
    capacity: 100,
    tags: ['Kỷ niệm Tốt nghiệp', 'Kỷ niệm'],
    additionalImages: [
      '/anhdep/GRADUATE-BOX-3.webp',
      '/anhdep/GRADUATE-BOX-4.webp'
    ],
    options: [
      {
        name: 'Màu sắc',
        values: [
          { name: 'Hoa tulip' },
          { name: 'Note màu' }
        ]
      },
      {
        name: 'Thiệp',
        values: [
          { name: 'Thiệp Love You So Much 1' }
        ]
      }
    ],
    tabs: {
      description: `Set Quà Cử Nhân Mini Hành Trang Nhỏ Ý Nghĩa.

Dành tặng cho những người bạn thân, người thương yêu trong ngày lễ tốt nghiệp rực rỡ. Set quà Cử nhân Mini là lời chúc mừng tươi tắn nhất gửi đến các tân cử nhân.

Điểm nhấn của sản phẩm nằm ở sự tinh tế, một set quà mini nhưng đầy đủ trọn vẹn và vô cùng ý nghĩa. Một món quà nhỏ nhắn nhưng gói trọn sự chân thành, động lực cho chặng đường rực rỡ phía trước.

🎁 CỬ NHÂN MINI BOX bao gồm:
+ Bút viết
+ Thiệp chúc mừng For The Record
+ Hoa giấy mini hoặc hoa tulip
+ Hộp đựng quà`,
      video: '',
      includes: [
        { name: 'Bút viết', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Thiệp chúc mừng For The Record', image: '/anhdep/GRADUATE-BOX-3.webp', quantity: 1 },
        { name: 'Hoa giấy mini hoặc hoa tulip', image: '/anhdep/GRADUATE-BOX-4.webp', quantity: 1 },
        { name: 'Hộp đựng quà', image: '/anhdep/hop-qua.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 3,
    name: 'GRADUATE BOX',
    price: '359.000đ',
    originalPrice: '399.000đ',
    badge: '',
    image: '/anhdep/GRADUATE-BOX-1.webp',
    description: 'Set quà Graduate Vạn Hành Trang Ngày Tốt Nghiệp.\n\nDành tặng bạn thân, người thương hay đồng nghiệp trong ngày lễ tốt nghiệp trọng đại, Graduate Box là lời chúc mừng vô cùng tươi sáng và thiết thực.\n\nSet quà ghi điểm bởi sự hữu dụng vượt trội với bộ sậu hoàn hảo đồng hành cùng ngày đi làm sắp tới: bình giữ nhiệt, bút, khung ảnh kỷ niệm, lọ cử nhân ý nghĩa và bó hoa mini ngọt ngào. Set quà có 02 phiên bản màu sắc tinh tế phù hợp cho cả nam và nữ.',
    category: 'Set quà',
    freePhoto: true,
    capacity: 130,
    tags: ['Kỷ niệm Tốt nghiệp', 'Kỷ niệm'],
    additionalImages: [
      '/anhdep/GRADUATE-BOX-2.webp',
      '/anhdep/GRADUATE-BOX-3.webp',
      '/anhdep/GRADUATE-BOX-4.webp',
      '/anhdep/GRADUATE-BOX-5.webp',
      '/anhdep/GRADUATE-BOX-6.webp',
      '/anhdep/GRADUATE-BOX-7.webp',
      '/anhdep/GRADUATE-BOX-8.webp'
    ],
    options: [
      {
        name: 'Màu sắc',
        values: [
          { name: 'Box Tháng Ba' },
          { name: 'Đen' }
        ]
      }
    ],
    tabs: {
      description: `Set quà Graduate Vạn Hành Trang Ngày Tốt Nghiệp.

Dành tặng bạn thân, người thương hay đồng nghiệp trong ngày lễ tốt nghiệp trọng đại, Graduate Box là lời chúc mừng vô cùng tươi sáng và thiết thực.

Set quà ghi điểm bởi sự hữu dụng vượt trội với bộ sậu hoàn hảo đồng hành cùng ngày đi làm sắp tới: bình giữ nhiệt, bút, khung ảnh kỷ niệm, lọ cử nhân ý nghĩa và bó hoa mini ngọt ngào. Set quà có 02 phiên bản màu sắc tinh tế phù hợp cho cả nam và nữ.

🎁 GRADUATE BOX bao gồm:
+ Bình giữ nhiệt Coffee
+ Lọ cử nhân
+ Khung ảnh cá nhân hóa
+ Thiệp chúc mừng kích thước 12x
+ Hộp giấy đựng quà`,
      video: '',
      includes: [
        { name: 'Bình giữ nhiệt Coffee', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Lọ cử nhân', image: '/anhdep/GRADUATE-BOX-3.webp', quantity: 1 },
        { name: 'Khung ảnh cá nhân hóa', image: '/anhdep/GRADUATE-BOX-4.webp', quantity: 1 },
        { name: 'Thiệp chúc mừng kích thước 12x', image: '/anhdep/GRADUATE-BOX-5.webp', quantity: 1 },
        { name: 'Hộp giấy đựng quà', image: '/anhdep/hop-qua.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 4,
    name: 'MÓC KHÓA IN THEO YÊU CẦU',
    price: '20.000đ',
    originalPrice: '22.000đ',
    badge: 'Mới',
    image: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=800&auto=format&fit=crop',
    description: 'Móc khóa in Theo Yêu Cầu - Dấu Ấn Cá Nhân Trọn Vẹn.\nDù mang thiết kế nhỏ gọn nhưng móc khóa in theo yêu cầu lại là nơi lưu giữ trọn vẹn những kỷ niệm vô giá. Bạn có thể thỏa sức sáng tạo, in hình ảnh, lời chúc hoặc tọa độ đặc biệt mang câu chuyện của riêng mình.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 200,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine 8/3', '20/10', '20/11'],
    additionalImages: [
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'in hình', price: '20.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Móc khóa in Theo Yêu Cầu - Dấu Ấn Cá Nhân Trọn Vẹn.
Dù mang thiết kế nhỏ gọn nhưng móc khóa in theo yêu cầu lại là nơi lưu giữ trọn vẹn những kỷ niệm vô giá. Bạn có thể thỏa sức sáng tạo, in hình ảnh, lời chúc hoặc tọa độ đặc biệt mang câu chuyện của riêng mình.`,
      video: '',
      includes: []
    }
  },
  {
    id: 5,
    name: 'MÓC KHÓA IN VÂN TAY (1 SET 02 MÓC)',
    price: '22.000đ',
    badge: 'Mới',
    image: '/anhdep/mini-box-2.webp',
    description: 'Móc Khóa In Vân Tay - Dấu Ấn Độc Bản, Gắn Kết Yêu Thương.\nMang thiết kế nhỏ gọn nhưng đong đầy ý nghĩa, móc khóa in vân tay theo yêu cầu là món quà tặng hoàn hảo giúp gắn kết tình cảm. Mỗi sản phẩm được Tiệm trao đi là một set quà vô cùng tinh tế...',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 200,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine'],
    additionalImages: [
      '/anhdep/mini-box-3.webp'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Spotify', price: '22.000đ', originalPrice: '27.000đ' },
          { name: 'Kỷ thêm', price: '22.000đ', originalPrice: '50.000đ' },
          { name: '2 mặt khác nhau', price: '27.000đ', originalPrice: '50.000đ' },
          { name: 'Tình yêu', price: '50.000đ' },
          { name: 'Kỷ niệm', price: '50.000đ' },
          { name: 'Tình bạn', price: '50.000đ' },
          { name: 'Tặng bạn nam', price: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Móc Khóa In Vân Tay - Dấu Ấn Độc Bản, Gắn Kết Yêu Thương.
Mang thiết kế nhỏ gọn nhưng đong đầy ý nghĩa, móc khóa in vân tay theo yêu cầu là món quà tặng hoàn hảo giúp gắn kết tình cảm. Mỗi sản phẩm được Tiệm trao đi là một set quà vô cùng tinh tế, bao gồm đầy đủ đồ để in vân tay chuyên dụng. Chỉ với vài bước đơn giản, bạn đã có thể lưu giữ dấu vân tay của mình và người thương yêu trên chiếc móc khóa độc bản.`,
      video: 'google.com/co',
      includes: []
    }
  },
  {
    id: 6,
    name: 'HUY CHƯƠNG IN THEO YÊU CẦU',
    price: '50.000đ',
    badge: 'Bán chạy',
    image: '/anhdep/hc1.webp',
    description: 'Huy Chương Theo Yêu Cầu - Vinh Danh Dấu Ấn Độc Bản.\nNếu bạn đang tìm kiếm một món quà tặng độc đáo để tạo sự bất ngờ, huy chương in theo yêu cầu chính là lựa chọn hoàn hảo. Sản phẩm vô cùng linh hoạt cực kỳ phù hợp với mọi dịp: từ quà tặng lễ tốt nghiệp rực rỡ, ngày kỷ niệm tình yêu, vinh danh "người yêu tốt nhất"...',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 150,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine 8/3', '20/10', '20/11'],
    additionalImages: [
      '/anhdep/hc2.webp',
      '/anhdep/hc3.webp',
      '/anhdep/hc4.webp'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Tặng bạn nữ', price: '50.000đ', originalPrice: '50.000đ' },
          { name: 'Tặng tốt nghiệp', price: '50.000đ' },
          { name: 'Dịp khác', price: '50.000đ', originalPrice: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Huy Chương Theo Yêu Cầu - Vinh Danh Dấu Ấn Độc Bản.
Nếu bạn đang tìm kiếm một món quà tặng độc đáo để tạo sự bất ngờ, huy chương in theo yêu cầu chính là lựa chọn hoàn hảo. Sản phẩm vô cùng linh hoạt cực kỳ phù hợp với mọi dịp: từ quà tặng lễ tốt nghiệp rực rỡ, ngày kỷ niệm tình yêu, vinh danh "người yêu tốt nhất"...`,
      video: '',
      includes: []
    }
  },
  {
    id: 7,
    name: 'CARD SPOTIFY IN THEO YÊU CẦU (1 SET 08 CARDS)',
    price: '50.000đ',
    badge: '',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop',
    description: 'Card Spotify in Theo Yêu Cầu - Giai Điệu Lưu Giữ Yêu Thương.\nCard Spotify in theo yêu cầu là món quà tặng độc đáo giúp bạn thay lời muốn nói qua những giai điệu. Đây là cách tinh tế nhất để bạn lưu giữ bài hát yêu thích làm kỷ niệm hoặc khéo léo gửi gắm yêu thương chân thành đến người thương. 1 set bao gồm 8 card có thể in giống nhau hoặc khác nhau.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 180,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine 8/3', '20/10', '20/11'],
    additionalImages: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Mẫu 1 - Trắng', price: '50.000đ', originalPrice: '50.000đ' },
          { name: 'Mẫu 1 - Đen', price: '50.000đ', originalPrice: '50.000đ' },
          { name: 'Mẫu 2 - Trắng', price: '50.000đ' },
          { name: 'Mẫu 2 - Đen', price: '50.000đ' },
          { name: 'Mẫu...', price: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Card Spotify in Theo Yêu Cầu - Giai Điệu Lưu Giữ Yêu Thương.
Card Spotify in theo yêu cầu là món quà tặng độc đáo giúp bạn thay lời muốn nói qua những giai điệu. Đây là cách tinh tế nhất để bạn lưu giữ bài hát yêu thích làm kỷ niệm hoặc khéo léo gửi gắm yêu thương chân thành đến người thương. 1 set bao gồm 8 card có thể in giống nhau hoặc khác nhau.`,
      video: 'nos drive.google.com/file',
      includes: []
    }
  },
  {
    id: 8,
    name: 'ẢNH PHOTOBOOTH / PHOTOSTRIP IN THEO YÊU CẦU',
    price: '40.000đ',
    badge: '',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?q=80&w=800&auto=format&fit=crop',
    description: 'Ảnh Photobooth & Photostrip in Theo Yêu Cầu - Cuộn Phim Lưu Giữ Thanh Xuân.\nNhững dải ảnh Photostrip hay Photobooth in theo yêu cầu không chỉ là món quà tặng nhỏ xinh mà còn là cách tuyệt vời nhất để bạn lưu giữ những khoảnh khắc thanh xuân rực rỡ. Sản phẩm mang thiết kế vintage, vô cùng lý tưởng để bạn thỏa sức sáng tạo: từ việc trang trí ốp lưng điện thoại, dán góc bàn học... 1 set bao gồm 6 ảnh có thể in giống nhau hoặc khác nhau.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 300,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine', '8/3', '20/10', '20/11'],
    additionalImages: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Ảnh PTB 5x15cm', price: '40.000đ' },
          { name: 'Ảnh PTB 10x15cm', price: '75.000đ' },
          { name: 'Khung trắng 03 ảnh', price: '50.000đ' },
          { name: 'Khung trắng 04 ảnh', price: '60.000đ' },
          { name: 'Khung đen 03 ảnh', price: '50.000đ' },
          { name: 'Khung đen 04 ảnh', price: '60.000đ' },
          { name: 'Khung film', price: '50.000đ' },
          { name: 'Chèn chữ A', price: '60.000đ' },
          { name: 'Chèn chữ B', price: '60.000đ' },
          { name: 'Chèn chữ C', price: '60.000đ' },
          { name: 'Tràn viền', price: '40.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Ảnh Photobooth & Photostrip in Theo Yêu Cầu - Cuộn Phim Lưu Giữ Thanh Xuân.
Những dải ảnh Photostrip hay Photobooth in theo yêu cầu không chỉ là món quà tặng nhỏ xinh mà còn là cách tuyệt vời nhất để bạn lưu giữ những khoảnh khắc thanh xuân rực rỡ. Sản phẩm mang thiết kế vintage, vô cùng lý tưởng để bạn thỏa sức sáng tạo. 1 set bao gồm 6 ảnh có thể in giống nhau hoặc khác nhau.`,
      video: '',
      includes: []
    }
  },
  {
    id: 9,
    name: 'ẢNH 6X9CM IN THEO YÊU CẦU (1 SET 10 ẢNH)',
    price: '40.000đ',
    badge: '',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop',
    description: 'Ảnh 6x9cm in Theo Yêu Cầu - Lưu Giữ Trọn Vẹn Ký Ức.\nẢnh 6x9cm in theo yêu cầu là lựa chọn hoàn hảo để bạn hiện thực hóa và lưu giữ trọn vẹn những kỷ niệm quý giá. Với kích thước 6x9cm nhỏ gọn, tinh tế rất lý tưởng để bạn thỏa sức sáng tạo: trang trí không gian sống, góc bàn làm việc, làm bookmark... 1 set bao gồm 10 ảnh có thể in giống nhau hoặc khác nhau.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 350,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine 8/3', '20/10', '20/11'],
    additionalImages: [
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Viền nhỏ', price: '40.000đ', originalPrice: '40.000đ' },
          { name: 'Viền trắng', price: '40.000đ', originalPrice: '40.000đ' },
          { name: 'Viền màu', price: '40.000đ' },
          { name: 'Chèn chữ', price: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Ảnh 6x9cm in Theo Yêu Cầu - Lưu Giữ Trọn Vẹn Ký Ức.
Ảnh 6x9cm in theo yêu cầu là lựa chọn hoàn hảo để bạn hiện thực hóa và lưu giữ trọn vẹn những kỷ niệm quý giá. Với kích thước 6x9cm nhỏ gọn, tinh tế rất lý tưởng để bạn thỏa sức sáng tạo: trang trí không gian sống, góc bàn làm việc, làm bookmark... 1 set bao gồm 10 ảnh có thể in giống nhau hoặc khác nhau.`,
      video: 'drvw.google.com/stati',
      includes: []
    }
  },
  {
    id: 10,
    name: 'CHỨNG NHẬN IN THEO YÊU CẦU',
    price: '20.000đ',
    badge: '',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f7ec?q=80&w=800&auto=format&fit=crop',
    description: 'Chứng Nhận In Theo Yêu Cầu - Món Quà Ý Nghĩa Độc Đáo.\nGiấy chứng nhận in theo yêu cầu của Tiệm 1998 là cách hoàn hảo để vinh danh tình cảm, tình bạn hoặc các sự kiện kỷ niệm đáng nhớ. Thiết kế tinh tế, sắc sảo tôn vinh mọi mối quan hệ.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 250,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine', '8/3', '20/10', '20/11'],
    additionalImages: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'GIẤY CHỨNG NHẬN A5', price: '20.000đ' },
          { name: 'GIẤY CHỨNG NHẬN KÈM KHUNG', price: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Chứng Nhận In Theo Yêu Cầu - Món Quà Ý Nghĩa Độc Đáo.
Giấy chứng nhận in theo yêu cầu của Tiệm 1998 là cách hoàn hảo để vinh danh tình cảm, tình bạn hoặc các sự kiện kỷ niệm đáng nhớ. Thiết kế tinh tế, sắc sảo tôn vinh mọi mối quan hệ.`,
      video: '',
      includes: []
    }
  }
];

export const products = rawProducts.map(p => ({
  ...p,
  slug: generateSlug(p.name)
}));

export const cardOptions = [
  { id: 'card1', name: "Happy Women's Day (H)", image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop' },
  { id: 'card2', name: 'Moments of love', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=400&auto=format&fit=crop' },
  { id: 'card3', name: 'Happy Birthday', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=400&auto=format&fit=crop' },
  { id: 'card4', name: 'Hold My Hand Forever', image: 'https://images.unsplash.com/photo-1544967082-b9d25d856510?q=80&w=400&auto=format&fit=crop' }
];

export const cardMessages = [
  { id: 'msg1', category: 'Sinh nhật', text: 'Chúc mừng sinh nhật! Chúc bạn tuổi mới luôn trẻ trung, yêu đời và gặt hái được nhiều thành công trong cuộc sống.' },
  { id: 'msg2', category: 'Kỷ niệm', text: 'Mừng ngày chúng mình về chung một nhà. Cảm ơn em đã luôn đồng hành và sẻ chia mọi vui buồn cùng anh.' },
  { id: 'msg3', category: 'Tình yêu', text: 'Gửi ngàn lời yêu thương đến người đặc biệt nhất của anh. Chúc em một ngày thật rạng rỡ và hạnh phúc.' },
  { id: 'msg4', category: 'Cảm ơn', text: 'Cảm ơn bạn vì tất cả những gì bạn đã giúp đỡ tôi trong suốt thời gian qua. Hy vọng món quà nhỏ này sẽ làm bạn vui.' },
  { id: 'msg5', category: '8/3', text: 'Chúc người phụ nữ tuyệt vời nhất của con luôn mạnh khỏe, tươi cười và tràn đầy hạnh phúc trong ngày của mình.' }
];

export const categories = [
  {
    id: 'set-qua',
    title: 'Set quà',
    count: '3',
    image: '/anhdep/hop-qua.webp',
    color: 'bg-rose-100',
  },
  {
    id: 'san-pham-le',
    title: 'Sản phẩm lẻ',
    count: '7',
    image: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=400&auto=format&fit=crop',
    color: 'bg-blue-100',
  }
];
