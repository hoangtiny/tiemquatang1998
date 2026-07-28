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
    price: '109.000đ',
    badge: '',
    image: '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-1.png',
    description: 'Set Quà Yêu Thương Mini Box – Gói Ghém Cảm Xúc, Trao Gửi Chân Thành\n\nDành tặng cho nửa kia, bạn bè thân thiết, hoặc tự thưởng cho chính mình vào các dịp sinh nhật, kỷ niệm hay những ngày cần được "chữa lành".\n\nĐiểm nhấn của sản phẩm nằm ở sự tinh tế: một set quà mini nhưng đầy đủ, trọn vẹn và vô cùng ý nghĩa, giúp bạn trao gửi những thông điệp yêu thương một cách chân thành nhất.',
    category: 'Set quà',
    freePhoto: true,
    capacity: 120,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật'],
    additionalImages: [
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-note-den-hoa-do.png',
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-note-mau-hoa-hong.png',
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-note-den-hoa-tulip.png',
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-note-hong-hoa-tulip.png',
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-5.png',
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-7.png',
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-8.png',
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-9.png',
      '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-10.png'
    ],
    options: [
      {
        name: 'Màu sắc',
        values: [
          { name: 'Note đen - Hoa đỏ', image: '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-note-den-hoa-do.png' },
          { name: 'Note màu - Hoa hồng', image: '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-note-mau-hoa-hong.png' },
          { name: 'Note đen - Hoa tulip', image: '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-note-den-hoa-tulip.png' },
          { name: 'Note màu - Hoa tulip', image: '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-note-hong-hoa-tulip.png' }
        ]
      },
      {
        name: 'Thiệp',
        values: [
          { name: 'Thiệp I Love You So Much' },
          { name: 'Thiệp You Are The Best' }
        ]
      }
    ],
    tabs: {
      description: `Set Quà Yêu Thương Mini Box – Gói Ghém Cảm Xúc, Trao Gửi Chân Thành

Dành tặng cho nửa kia, bạn bè thân thiết, hoặc tự thưởng cho chính mình vào các dịp sinh nhật, kỷ niệm hay những ngày cần được "chữa lành".

Điểm nhấn của sản phẩm nằm ở sự tinh tế: một set quà mini nhưng đầy đủ, trọn vẹn và vô cùng ý nghĩa, giúp bạn trao gửi những thông điệp yêu thương một cách chân thành nhất.

🎁 YÊU THƯƠNG MINI BOX bao gồm:
+ 1 x Lọ Yêu Thương bao gồm 50 tờ note do chính bạn tự viết lời nhắn
+ 1 x Bút viết
+ 1 x Thiệp chúc mừng For The Record
+ 1 x Hoa giấy mini hoặc hoa tulip
+ 1 x Hộp & Túi đựng quà`,
      video: '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-video.mp4',
      includes: [
        { name: '1 x Lọ Yêu Thương bao gồm 50 tờ note', image: '/anhdep/YÊU THƯƠNG MINI BOX/SET QUÀ BAO GỒM/yeu-thuong-mini-box-A.png', quantity: 1 },
        { name: '1 x Bút viết', image: '/anhdep/YÊU THƯƠNG MINI BOX/SET QUÀ BAO GỒM/yeu-thuong-mini-box-B.png', quantity: 1 },
        { name: '1 x Thiệp chúc mừng For The Record', image: '/anhdep/YÊU THƯƠNG MINI BOX/SET QUÀ BAO GỒM/yeu-thuong-mini-box-C.png', quantity: 1 },
        { name: '1 x Hoa giấy mini hoặc hoa tulip', image: '/anhdep/YÊU THƯƠNG MINI BOX/SET QUÀ BAO GỒM/yeu-thuong-mini-box-D.png', quantity: 1 },
        { name: '1 x Hộp & Túi đựng quà', image: '/anhdep/YÊU THƯƠNG MINI BOX/SET QUÀ BAO GỒM/yeu-thuong-mini-box-E.png', quantity: 1 }
      ]
    }
  },
  {
    id: 2,
    name: 'CỬ NHÂN MINI BOX',
    price: '119.000đ',
    badge: '',
    image: '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-1.png',
    description: 'Set Quà Cử Nhân Mini Box – Hành Trang Nhỏ, Ý Nghĩa To\n\nDành tặng cho những người bạn thân, người thương yêu trong ngày lễ tốt nghiệp rực rỡ, Set quà Cử nhân Mini Box là lời chúc mừng tinh tế nhất gửi đến các tân cử nhân.\n\nĐiểm nhấn của sản phẩm nằm ở sự tinh tế: một set quà mini nhưng đầy đủ, trọn vẹn và vô cùng ý nghĩa. Một món quà nhỏ nhắn nhưng gói trọn sự chân thành, tiếp thêm động lực cho chặng đường rực rỡ phía trước!',
    category: 'Set quà',
    freePhoto: true,
    capacity: 100,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dịp tốt nghiệp'],
    additionalImages: [
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-2.png',
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-3.png',
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-4.png',
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-5.png',
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-6.png',
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-7.png',
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-8.png',
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-9.png',
      '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-10.png'
    ],
    options: [
      {
        name: 'Màu sắc',
        values: [
          { name: 'Note đen - Hoa đỏ' },
          { name: 'Note màu - Hoa hồng' },
          { name: 'Note đen - Hoa tulip' },
          { name: 'Note màu - Hoa tulip' }
        ]
      },
      {
        name: 'Thiệp',
        values: [
          { name: 'Thiệp I Love You So Much' },
          { name: 'Thiệp You Are The Best' }
        ]
      }
    ],
    tabs: {
      description: `Set Quà Cử Nhân Mini Box – Hành Trang Nhỏ, Ý Nghĩa To

Dành tặng cho những người bạn thân, người thương yêu trong ngày lễ tốt nghiệp rực rỡ, Set quà Cử nhân Mini Box là lời chúc mừng tinh tế nhất gửi đến các tân cử nhân.

Điểm nhấn của sản phẩm nằm ở sự tinh tế: một set quà mini nhưng đầy đủ, trọn vẹn và vô cùng ý nghĩa. Một món quà nhỏ nhắn nhưng gói trọn sự chân thành, tiếp thêm động lực cho chặng đường rực rỡ phía trước!

🎁 CỬ NHÂN MINI BOX bao gồm:
+ 1 x Lọ Cử Nhân bao gồm 50 tờ note do chính bạn tự viết lời nhắn
+ 1 x Bút viết
+ 1 x Thiệp chúc mừng For The Record
+ 1 x Hoa giấy mini hoặc hoa tulip
+ 1 x Hộp & Túi đựng quà`,
      video: '',
      includes: [
        { name: '1 x Lọ Cử Nhân bao gồm 50 tờ note', image: '/anhdep/CỬ NHÂN MINI BOX/SET QUÀ BAO GỒM/cu-nhan-mini-box-A.png', quantity: 1 },
        { name: '1 x Bút viết', image: '/anhdep/CỬ NHÂN MINI BOX/SET QUÀ BAO GỒM/cu-nhan-mini-box-B.png', quantity: 1 },
        { name: '1 x Thiệp chúc mừng For The Record', image: '/anhdep/CỬ NHÂN MINI BOX/SET QUÀ BAO GỒM/cu-nhan-mini-box-C.png', quantity: 1 },
        { name: '1 x Hoa giấy mini hoặc hoa tulip', image: '/anhdep/CỬ NHÂN MINI BOX/SET QUÀ BAO GỒM/cu-nhan-mini-box-D.png', quantity: 1 },
        { name: '1 x Hộp & Túi đựng quà', image: '/anhdep/CỬ NHÂN MINI BOX/SET QUÀ BAO GỒM/cu-nhan-mini-box-E.png', quantity: 1 }
      ]
    }
  },
  {
    id: 3,
    name: 'GRADUATE BOX',
    price: '359.000đ',
    badge: '',
    image: '/anhdep/GRADUATE BOX/granduate-box-1.webp',
    description: 'Set quà Graduate Box – Trọn Vẹn Hành Trang Ngày Tốt Nghiệp\n\nDành tặng bạn thân, người thương hay đồng nghiệp trong ngày lễ tốt nghiệp trọng đại, Graduate Box là lời chúc mừng vô cùng tinh tế và thiết thực.\n\nSet quà ghi điểm bởi sự hữu dụng vượt trội với bộ sáu món hoàn hảo đồng hành cùng ngày đi làm sắp tới: bình giữ nhiệt, sổ, bút, khung ảnh kỷ niệm, lọ cử nhân ý nghĩa và bó hoa mini ngọt ngào. Set quà có 02 phiên bản màu sắc tinh tế, phù hợp cho cả nam và nữ.',
    category: 'Set quà',
    freePhoto: true,
    capacity: 130,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dịp tốt nghiệp'],
    additionalImages: [
      '/anhdep/GRADUATE BOX/granduate-box-2.webp',
      '/anhdep/GRADUATE BOX/granduate-box-3.webp',
      '/anhdep/GRADUATE BOX/granduate-box-4.webp',
      '/anhdep/GRADUATE BOX/granduate-box-5.webp',
      '/anhdep/GRADUATE BOX/granduate-box-6.webp',
      '/anhdep/GRADUATE BOX/granduate-box-7.webp',
      '/anhdep/GRADUATE BOX/granduate-box-8.webp',
      '/anhdep/GRADUATE BOX/granduate-box-9.webp'
    ],
    options: [
      {
        name: 'Màu sắc',
        values: [
          { name: 'Box Trắng' },
          { name: 'Box Đen' }
        ]
      }
    ],
    tabs: {
      description: `Set quà Graduate Box – Trọn Vẹn Hành Trang Ngày Tốt Nghiệp

Dành tặng bạn thân, người thương hay đồng nghiệp trong ngày lễ tốt nghiệp trọng đại, Graduate Box là lời chúc mừng vô cùng tinh tế và thiết thực.

Set quà ghi điểm bởi sự hữu dụng vượt trội với bộ sáu món hoàn hảo đồng hành cùng ngày đi làm sắp tới: bình giữ nhiệt, sổ, bút, khung ảnh kỷ niệm, lọ cử nhân ý nghĩa và bó hoa mini ngọt ngào. Set quà có 02 phiên bản màu sắc tinh tế, phù hợp cho cả nam và nữ.

🎁 GRADUATE BOX bao gồm:
+ 1 x Sổ tay Crabit khổ A5
+ 1 x Bình giữ nhiệt Coffee dung tích 400ml
+ 1 x Lọ Cử nhân bao gồm 50 tờ note do chính bạn tự viết lời nhắn
+ 1 x Bút viết
+ 1 x Hoa giấy mini
+ 1 x Khung Ảnh A5 cá nhân hóa
+ 1 x Ảnh in theo yêu cầu kích thước 6x9cm
+ 1 x Thiệp chúc mừng kích thước 12x18cm
+ 1 x Hộp & Túi giấy đựng quà`,
      video: '/anhdep/GRADUATE BOX/graduate-box-video.mp4',
      includes: [
        { name: '1 x Sổ tay Crabit khổ A5', image: '/anhdep/GRADUATE BOX/SET QUÀ BAO GỒM/graduate-box-a.png', quantity: 1 },
        { name: '1 x Bình giữ nhiệt Coffee', image: '/anhdep/GRADUATE BOX/SET QUÀ BAO GỒM/graduate-box-b.png', quantity: 1 },
        { name: '1 x Lọ Cử nhân bao gồm 50 tờ note', image: '/anhdep/GRADUATE BOX/SET QUÀ BAO GỒM/graduate-box-C.png', quantity: 1 },
        { name: '1 x Bút viết', image: '/anhdep/GRADUATE BOX/SET QUÀ BAO GỒM/graduate-box-D.png', quantity: 1 },
        { name: '1 x Hoa giấy mini', image: '/anhdep/GRADUATE BOX/SET QUÀ BAO GỒM/graduate-box-E.png', quantity: 1 },
        { name: '1 x Khung Ảnh A5 cá nhân hóa', image: '/anhdep/GRADUATE BOX/SET QUÀ BAO GỒM/graduate-box-F.png', quantity: 1 },
        { name: '1 x Hộp & Túi giấy đựng quà', image: '/anhdep/hop-qua.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 4,
    name: 'MÓC KHÓA IN THEO YÊU CẦU',
    price: '20.000đ',
    originalPrice: '22.000đ',
    badge: 'Mới',
    image: '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-1.png',
    description: 'Móc Khóa In Theo Yêu Cầu – Dấu Ấn Cá Nhân, Trọn Vẹn Cảm Xúc\n\nDù mang thiết kế nhỏ gọn nhưng móc khóa in theo yêu cầu lại là nơi lưu giữ trọn vẹn những kỷ niệm vô giá. Sản phẩm cực kỳ đa năng, hoàn hảo và phù hợp với mọi dịp từ lễ tốt nghiệp, sinh nhật, kỷ niệm tình yêu cho đến món quà bất ngờ dành tặng hội bạn thân.\n\nBạn có thể thỏa sức sáng tạo, in hình ảnh, lời chúc hoặc tọa độ đặc biệt mang câu chuyện của riêng mình. Chỉ với một mức ngân sách vô cùng tiết kiệm, bạn đã sở hữu ngay một món quà độc bản, tinh tế và đầy chân thành, để người thương yêu luôn mang theo bên mình mỗi ngày!',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 200,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật', 'Dịp tốt nghiệp'],
    additionalImages: [
      '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-2.png',
      '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-3.png',
      '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-4.png',
      '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-5.png',
      '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-6.png',
      '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-7.png',
      '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-8.png'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'In hình', price: '20.000đ' },
          { name: 'Spotify', price: '22.000đ' },
          { name: 'Kỷ niệm', price: '22.000đ' },
          { name: '2 mặt khác nhau', price: '27.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Móc Khóa In Theo Yêu Cầu – Dấu Ấn Cá Nhân, Trọn Vẹn Cảm Xúc

Dù mang thiết kế nhỏ gọn nhưng móc khóa in theo yêu cầu lại là nơi lưu giữ trọn vẹn những kỷ niệm vô giá. Sản phẩm cực kỳ đa năng, hoàn hảo và phù hợp với mọi dịp từ lễ tốt nghiệp, sinh nhật, kỷ niệm tình yêu cho đến món quà bất ngờ dành tặng hội bạn thân.

Bạn có thể thỏa sức sáng tạo, in hình ảnh, lời chúc hoặc tọa độ đặc biệt mang câu chuyện của riêng mình. Chỉ với một mức ngân sách vô cùng tiết kiệm, bạn đã sở hữu ngay một món quà độc bản, tinh tế và đầy chân thành, để người thương yêu luôn mang theo bên mình mỗi ngày!`,
      video: '/anhdep/MÓC KHÓA IN THEO YÊU CẦU/moc-khoa-in-theo-yeu-cau-video.mp4',
      includes: []
    }
  },
  {
    id: 5,
    name: 'MÓC KHÓA IN VÂN TAY (1 SET 02 MÓC)',
    price: '50.000đ',
    badge: 'Mới',
    image: '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-1.png',
    description: 'Móc Khóa In Vân Tay – Dấu Ấn Độc Bản, Gắn Kết Yêu Thương\n\nMang thiết kế nhỏ gọn nhưng đong đầy ý nghĩa, móc khóa in vân tay theo yêu cầu là món quà tặng hoàn hảo giúp gắn kết tình cảm lứa đôi, gia đình hay những người bạn thân thiết.\n\nMỗi sản phẩm được Tiệm trao đi là một set quà vô cùng tinh tế, bao gồm đầy đủ đồ để in vân tay chuyên dụng. Chỉ với vài thao tác cực kỳ dễ dàng thực hiện tại nhà, bạn đã có thể tự tay tạo ra một kỷ vật mang đậm dấu ấn cá nhân không thể trộn lẫn. Một món quà nhỏ bé nhưng chứa đựng trọn vẹn sự chân thành, giúp bạn lưu giữ và mang theo hơi ấm của người thương yêu đi muôn nơi!',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 200,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật'],
    additionalImages: [
      '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-2.jpg',
      '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-3.png',
      '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-4.png',
      '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-5.jpg',
      '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-6.jpg',
      '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-7.jpg'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Tình yêu', price: '50.000đ' },
          { name: 'Kỷ niệm', price: '50.000đ' },
          { name: 'Tình bạn', price: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Móc Khóa In Vân Tay – Dấu Ấn Độc Bản, Gắn Kết Yêu Thương

Mang thiết kế nhỏ gọn nhưng đong đầy ý nghĩa, móc khóa in vân tay theo yêu cầu là món quà tặng hoàn hảo giúp gắn kết tình cảm lứa đôi, gia đình hay những người bạn thân thiết.

Mỗi sản phẩm được Tiệm trao đi là một set quà vô cùng tinh tế, bao gồm đầy đủ đồ để in vân tay chuyên dụng. Chỉ với vài thao tác cực kỳ dễ dàng thực hiện tại nhà, bạn đã có thể tự tay tạo ra một kỷ vật mang đậm dấu ấn cá nhân không thể trộn lẫn. Một món quà nhỏ bé nhưng chứa đựng trọn vẹn sự chân thành, giúp bạn lưu giữ và mang theo hơi ấm của người thương yêu đi muôn nơi!`,
      video: '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-video.mp4',
      includes: []
    }
  },
  {
    id: 6,
    name: 'HUY CHƯƠNG IN THEO YÊU CẦU',
    price: '50.000đ',
    badge: 'Bán chạy',
    image: '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-1.png',
    description: 'Huy Chương In Theo Yêu Cầu – Vinh Danh Dấu Ấn Độc Bản\n\nNếu bạn đang tìm kiếm một món quà tặng độc đáo để tạo sự bất ngờ, huy chương in theo yêu cầu chính là lựa chọn hoàn hảo. Bằng cách tự do sáng tạo nội dung, danh hiệu và hình ảnh, mỗi chiếc huy chương đều trở thành một tác phẩm độc bản, mang đậm câu chuyện riêng của người nhận.\n\nSản phẩm vô cùng linh hoạt, cực kỳ phù hợp với mọi dịp: từ quà tặng lễ tốt nghiệp rực rỡ, ngày kỷ niệm tình yêu, vinh danh đồng nghiệp xuất sắc, cho đến những phần thưởng "lầy lội" của hội bạn thân. Dù nhỏ nhắn, chiếc huy chương chắc chắn là kỷ vật vô giá gói trọn sự trân trọng và niềm vui bất ngờ!',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 150,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dịp sinh nhật', 'Dịp tốt nghiệp'],
    additionalImages: [
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-2.png',
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-3.png',
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-4.jpg',
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-5.png',
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-6.png',
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-7.png',
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-8.png',
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-9.png',
      '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-10.png'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Tặng bạn nam', price: '50.000đ' },
          { name: 'Tặng bạn nữ', price: '50.000đ' },
          { name: 'Tặng tốt nghiệp', price: '50.000đ' },
          { name: 'Dịp khác', price: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Huy Chương In Theo Yêu Cầu – Vinh Danh Dấu Ấn Độc Bản

Nếu bạn đang tìm kiếm một món quà tặng độc đáo để tạo sự bất ngờ, huy chương in theo yêu cầu chính là lựa chọn hoàn hảo. Bằng cách tự do sáng tạo nội dung, danh hiệu và hình ảnh, mỗi chiếc huy chương đều trở thành một tác phẩm độc bản, mang đậm câu chuyện riêng của người nhận.

Sản phẩm vô cùng linh hoạt, cực kỳ phù hợp với mọi dịp: từ quà tặng lễ tốt nghiệp rực rỡ, ngày kỷ niệm tình yêu, vinh danh đồng nghiệp xuất sắc, cho đến những phần thưởng "lầy lội" của hội bạn thân. Dù nhỏ nhắn, chiếc huy chương chắc chắn là kỷ vật vô giá gói trọn sự trân trọng và niềm vui bất ngờ!`,
      video: '',
      includes: []
    }
  },
  {
    id: 7,
    name: 'CARD SPOTIFY IN THEO YÊU CẦU (1 SET 08 CARDS)',
    price: '50.000đ',
    badge: '',
    image: '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-1.png',
    description: 'Card Spotify In Theo Yêu Cầu – Giai Điệu Lưu Giữ Yêu Thương\n\nCard Spotify in theo yêu cầu là món quà tặng độc đáo, giúp bạn thay lời muốn nói qua những giai điệu. Sản phẩm cho phép cá nhân hóa hoàn toàn hình ảnh và bài nhạc yêu thích, biến mỗi chiếc thẻ thành một kỷ vật mang đậm dấu ấn cá nhân.\n\nĐây là cách tinh tế nhất để bạn lưu giữ bài hát yêu thích làm kỷ niệm hoặc khéo léo gửi gắm yêu thương chân thành đến người nhận. Với thiết kế nhỏ gọn, thẻ vô cùng đa năng và tiện dụng để trang trí ốp lưng điện thoại, kẹp vào sổ lưu bút, hay đặt trong ví cầm tay. Chỉ cần quét mã, âm nhạc vang lên sẽ đánh thức mọi cảm xúc trọn vẹn nhất!\n\n1 set bao gồm 8 card có thể in giống nhau hoặc khác nhau.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 180,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật'],
    additionalImages: [
      '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-2.png',
      '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-3.png',
      '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-4.png',
      '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-6.png',
      '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-7.png',
      '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-8.png',
      '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-9.png'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Mẫu 1 - Trắng', price: '50.000đ', image: '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/PHÂN LOẠI CARD SPOTIFY/card-spotify-mẫu-01---trắng.png' },
          { name: 'Mẫu 1 - Đen', price: '50.000đ', image: '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/PHÂN LOẠI CARD SPOTIFY/card-spotify-mẫu-01---đen.png' },
          { name: 'Mẫu 2 - Trắng', price: '50.000đ', image: '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/PHÂN LOẠI CARD SPOTIFY/card-spotify-mẫu-02---trắng.png' },
          { name: 'Mẫu 2 - Đen', price: '50.000đ', image: '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/PHÂN LOẠI CARD SPOTIFY/card-spotify-mẫu-02---đen.png' }
        ]
      }
    ],
    tabs: {
      description: `Card Spotify In Theo Yêu Cầu – Giai Điệu Lưu Giữ Yêu Thương

Card Spotify in theo yêu cầu là món quà tặng độc đáo, giúp bạn thay lời muốn nói qua những giai điệu. Sản phẩm cho phép cá nhân hóa hoàn toàn hình ảnh và bài nhạc yêu thích, biến mỗi chiếc thẻ thành một kỷ vật mang đậm dấu ấn cá nhân.

Đây is cách tinh tế nhất để bạn lưu giữ bài hát yêu thích làm kỷ niệm hoặc khéo léo gửi gắm yêu thương chân thành đến người nhận. Với thiết kế nhỏ gọn, thẻ vô cùng đa năng và tiện dụng để trang trí ốp lưng điện thoại, kẹp vào sổ lưu bút, hay đặt trong ví cầm tay. Chỉ cần quét mã, âm nhạc vang lên sẽ đánh thức mọi cảm xúc trọn vẹn nhất!

1 set bao gồm 8 card có thể in giống nhau hoặc khác nhau.`,
      video: '/anhdep/CARD SPOTIFY IN THEO YÊU CẦU/card-spotify-in-theo-yeu-cau-video.mp4',
      includes: []
    }
  },
  {
    id: 8,
    name: 'ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU (1 SET 06 ẢNH)',
    price: '40.000đ',
    badge: '',
    image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/anh-photobooth-photostrip-in-theo-yeu-cau-1.png',
    description: 'Ảnh Photobooth & Photostrip In Theo Yêu Cầu – Cuộn Phim Lưu Giữ Thanh Xuân\n\nNhững dải ảnh Photostrip hay Photobooth in theo yêu cầu không chỉ là món quà tặng nhỏ xinh mà còn là cách tuyệt vời nhất để bạn lưu giữ trọn vẹn những khoảnh khắc kỷ niệm đáng giá. Bằng công nghệ in sắc nét trên nền giấy ảnh chất lượng cao, cán bóng 02 mặt, mỗi khung hình đều hiện lên thật sống động, chân thực và bền màu với thời gian.\n\nSản phẩm mang thiết kế vintage, vô cùng lý tưởng để bạn thỏa sức sáng tạo: từ việc trang trí ốp lưng điện thoại, dán góc bàn làm việc, cho đến kẹp vào sổ lưu bút hay tô điểm cho các set quà. Hãy biến những bức ảnh kỹ thuật số thành kỷ vật hiện hữu, gói ghém trọn vẹn cảm xúc để gửi trao!\n\n1 set bao gồm 6 ảnh có thể in giống nhau hoặc khác nhau.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 300,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật'],
    additionalImages: [
      '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/anh-photobooth-photostrip-in-theo-yeu-cau-2.png',
      '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/anh-photobooth-photostrip-in-theo-yeu-cau-3.png',
      '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/anh-photobooth-photostrip-in-theo-yeu-cau-4.png',
      '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/anh-photobooth-photostrip-in-theo-yeu-cau-5.png',
      '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/anh-photobooth-photostrip-in-theo-yeu-cau-6.png'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Ảnh PTB 5x15cm', price: '40.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photobooth-5x15cm.png' },
          { name: 'Ảnh PTB 10x15cm', price: '75.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photobooth-10x15cm.png' },
          { name: 'Khung trắng 03 ảnh', price: '50.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photostrip-khung-trắng-03-ảnh.png' },
          { name: 'Khung trắng 04 ảnh', price: '60.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photostrip-khung-trắng-04-ảnh.png' },
          { name: 'Khung đen 03 ảnh', price: '50.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photostrip-khung-đen-03-ảnh.png' },
          { name: 'Khung đen 04 ảnh', price: '60.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photostrip-khung-đen-04-ảnh.png' },
          { name: 'Khung film', price: '50.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photostrip-khung-film.png' },
          { name: 'Chèn chữ A', price: '60.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photostrip-khung-chèn-chữ-A.png' },
          { name: 'Chèn chữ B', price: '60.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photostrip-khung-chèn-chữ-B.png' },
          { name: 'Chèn chữ C', price: '60.000đ', image: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-photostrip-khung-chèn-chữ-C.png' }
        ]
      }
    ],
    tabs: {
      description: `Ảnh Photobooth & Photostrip In Theo Yêu Cầu – Cuộn Phim Lưu Giữ Thanh Xuân

Những dải ảnh Photostrip hay Photobooth in theo yêu cầu không chỉ là món quà tặng nhỏ xinh mà còn là cách tuyệt vời nhất để bạn lưu giữ trọn vẹn những khoảnh khắc kỷ niệm đáng giá. Bằng công nghệ in sắc nét trên nền giấy ảnh chất lượng cao, cán bóng 02 mặt, mỗi khung hình đều hiện lên thật sống động, chân thực và bền màu với thời gian.

Sản phẩm mang thiết kế vintage, vô cùng lý tưởng để bạn thỏa sức sáng tạo: từ việc trang trí ốp lưng điện thoại, dán góc bàn làm việc, cho đến kẹp vào sổ lưu bút hay tô điểm cho các set quà. Hãy biến những bức ảnh kỹ thuật số thành kỷ vật hiện hữu, gói ghém trọn vẹn cảm xúc để gửi trao!

1 set bao gồm 6 ảnh có thể in giống nhau hoặc khác nhau.`,
      video: '/anhdep/ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU/anh-photobooth-photostrip-in-theo-yeu-cau-video.mp4',
      includes: []
    }
  },
  {
    id: 9,
    name: 'ẢNH 6X9CM IN THEO YÊU CẦU (1 SET 10 ẢNH)',
    price: '40.000đ',
    badge: '',
    image: '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/anh-6x9cm-in-theo-yeu-cau-1.png',
    description: 'Ảnh 6x9cm In Theo Yêu Cầu – Lưu Giữ Trọn Vẹn Ký Ức\n\nẢnh 6x9cm in theo yêu cầu là lựa chọn hoàn hảo để bạn hiện thực hóa và lưu giữ trọn vẹn những kỷ niệm quý giá. Với chất liệu giấy ảnh chất lượng cao kết hợp công nghệ in sắc nét, cán bóng 2 mặt, mỗi khung hình đều hiện lên vô cùng sống động, chân thực và bền màu theo năm tháng.\n\nKích thước 6x9cm nhỏ gọn, tinh tế, rất lý tưởng để bạn thỏa sức sáng tạo: trang trí không gian sống, góc bàn làm việc, đặt sau ốp lưng điện thoại, hay tỉ mỉ dán vào những cuốn sổ lưu bút thanh xuân. Hãy biến khoảnh khắc yêu thương kỹ thuật số thành kỷ vật hiện hữu đong đầy cảm xúc!\n\n1 set bao gồm 10 ảnh có thể in giống nhau hoặc khác nhau.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 350,
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật'],
    additionalImages: [
      '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/anh-6x9cm-in-theo-yeu-cau-2.png',
      '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/anh-6x9cm-in-theo-yeu-cau-3.png',
      '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/anh-6x9cm-in-theo-yeu-cau-4.png',
      '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/anh-6x9cm-in-theo-yeu-cau-5.png'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Tràn viền', price: '40.000đ', image: '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-6x9cm-tràn-viền.png' },
          { name: 'Viền nhỏ', price: '40.000đ', image: '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-6x9cm-viền-nhỏ.png' },
          { name: 'Viền trắng', price: '40.000đ', image: '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-6x9cm-viền-trắng.png' },
          { name: 'Viền màu', price: '40.000đ', image: '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-6x9cm-viền-màu.png' },
          { name: 'Chèn chữ', price: '50.000đ', image: '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/PHÂN LOẠI/ảnh-6x9cm-chèn-chữ.png' }
        ]
      }
    ],
    tabs: {
      description: `Ảnh 6x9cm In Theo Yêu Cầu – Lưu Giữ Trọn Vẹn Ký Ức

Ảnh 6x9cm in theo yêu cầu là lựa chọn hoàn hảo để bạn hiện thực hóa và lưu giữ trọn vẹn những kỷ niệm quý giá. Với chất liệu giấy ảnh chất lượng cao kết hợp công nghệ in sắc nét, cán bóng 2 mặt, mỗi khung hình đều hiện lên vô cùng sống động, chân thực và bền màu theo năm tháng.

Kích thước 6x9cm nhỏ gọn, tinh tế, rất lý tưởng để bạn thỏa sức sáng tạo: trang trí không gian sống, góc bàn làm việc, đặt sau ốp lưng điện thoại, hay tỉ mỉ dán vào những cuốn sổ lưu bút thanh xuân. Hãy biến khoảnh khắc yêu thương kỹ thuật số thành kỷ vật hiện hữu đong đầy cảm xúc!

1 set bao gồm 10 ảnh có thể in giống nhau hoặc khác nhau.`,
      video: '/anhdep/ẢNH 6X9CM IN THEO YÊU CẦU/anh-6x9cm-in-theo-yeu-cau-video.mp4',
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
    tags: ['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật'],
    additionalImages: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'GIẤY CHỨNG NHẬN A5', price: '20.000đ' },
          { name: 'GIẤY CHỨNG NHẬN KÈM KHUNG A5', price: '50.000đ' }
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
    id: 'danh-cho-nam',
    title: 'Dành cho nam',
    count: '10',
    image: '/anhdep/HUY CHƯƠNG IN THEO YÊU CẦU/huy-chuong-in-theo-yeu-cau-1.png',
    color: 'bg-blue-100',
  },
  {
    id: 'danh-cho-nu',
    title: 'Dành cho nữ',
    count: '10',
    image: '/anhdep/YÊU THƯƠNG MINI BOX/yeu-thuong-mini-box-1.png',
    color: 'bg-rose-100',
  },
  {
    id: 'danh-cho-cap-doi',
    title: 'Dành cho cặp đôi',
    count: '7',
    image: '/anhdep/MÓC KHÓA IN VÂN TAY/moc-khoa-in-van-tay-1.png',
    color: 'bg-purple-100',
  },
  {
    id: 'dip-sinh-nhat',
    title: 'Dịp sinh nhật',
    count: '8',
    image: '/anhdep/hop-qua.webp',
    color: 'bg-amber-100',
  },
  {
    id: 'dip-tot-nghiep',
    title: 'Dịp tốt nghiệp',
    count: '4',
    image: '/anhdep/CỬ NHÂN MINI BOX/cu-nhan-mini-box-1.png',
    color: 'bg-emerald-100',
  }
];
