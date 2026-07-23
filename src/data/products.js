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
    image: '/anhdep/mini-box-1.webp',
    description: 'Set Quà Yêu Thương Mini Box – Gói Ghém Cảm Xúc, Trao Gửi Chân Thành\n\nDành tặng cho nửa kia, bạn bè thân thiết, hoặc tự thưởng cho chính mình vào các dịp sinh nhật, kỷ niệm hay những ngày cần được "chữa lành".\n\nĐiểm nhấn của sản phẩm nằm ở sự tinh tế: một set quà mini nhưng đầy đủ, trọn vẹn và vô cùng ý nghĩa, giúp bạn trao gửi những thông điệp yêu thương một cách chân thành nhất.',
    category: 'Set quà',
    freePhoto: true,
    capacity: 120,
    tags: ['Kỷ niệm', 'Sinh nhật'],
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
      description: `Set Quà Yêu Thương Mini Box – Gói Ghém Cảm Xúc, Trao Gửi Chân Thành

Dành tặng cho nửa kia, bạn bè thân thiết, hoặc tự thưởng cho chính mình vào các dịp sinh nhật, kỷ niệm hay những ngày cần được "chữa lành".

Điểm nhấn của sản phẩm nằm ở sự tinh tế: một set quà mini nhưng đầy đủ, trọn vẹn và vô cùng ý nghĩa, giúp bạn trao gửi những thông điệp yêu thương một cách chân thành nhất.

🎁 YÊU THƯƠNG MINI BOX bao gồm:
+ 1 x Lọ Yêu Thương bao gồm 50 tờ note do chính bạn tự viết lời nhắn
+ 1 x Bút viết
+ 1 x Thiệp chúc mừng For The Record
+ 1 x Hoa giấy mini hoặc hoa tulip
+ 1 x Hộp & Túi đựng quà`,
      video: 'https://drive.google.com/file/d/1DeHN3DwYqAu_XyCbH5Nqcn_sGLmhpSGF/view?usp=sharing',
      includes: [
        { name: '1 x Lọ Yêu Thương bao gồm 50 tờ note', image: '/anhdep/lo-yeu-thuong.webp', quantity: 1 },
        { name: '1 x Bút viết', image: '/anhdep/mini-box-2.webp', quantity: 1 },
        { name: '1 x Thiệp chúc mừng For The Record', image: '/anhdep/mini-box-3.webp', quantity: 1 },
        { name: '1 x Hoa giấy mini hoặc hoa tulip', image: '/anhdep/mini-box-4.webp', quantity: 1 },
        { name: '1 x Hộp & Túi đựng quà', image: '/anhdep/hop-qua.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 2,
    name: 'CỬ NHÂN MINI BOX',
    price: '119.000đ',
    badge: '',
    image: '/anhdep/GRADUATE-BOX-2.webp',
    description: 'Set Quà Cử Nhân Mini Box – Hành Trang Nhỏ, Ý Nghĩa To\n\nDành tặng cho những người bạn thân, người thương yêu trong ngày lễ tốt nghiệp rực rỡ, Set quà Cử nhân Mini Box là lời chúc mừng tinh tế nhất gửi đến các tân cử nhân.\n\nĐiểm nhấn của sản phẩm nằm ở sự tinh tế: một set quà mini nhưng đầy đủ, trọn vẹn và vô cùng ý nghĩa. Một món quà nhỏ nhắn nhưng gói trọn sự chân thành, tiếp thêm động lực cho chặng đường rực rỡ phía trước!',
    category: 'Set quà',
    freePhoto: true,
    capacity: 100,
    tags: ['Kỷ niệm', 'Tốt nghiệp'],
    additionalImages: [
      '/anhdep/GRADUATE-BOX-3.webp',
      '/anhdep/GRADUATE-BOX-4.webp'
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
        { name: '1 x Lọ Cử Nhân bao gồm 50 tờ note', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: '1 x Bút viết', image: '/anhdep/GRADUATE-BOX-3.webp', quantity: 1 },
        { name: '1 x Thiệp chúc mừng For The Record', image: '/anhdep/GRADUATE-BOX-4.webp', quantity: 1 },
        { name: '1 x Hộp & Túi đựng quà', image: '/anhdep/hop-qua.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 3,
    name: 'GRADUATE BOX',
    price: '359.000đ',
    badge: '',
    image: '/anhdep/GRADUATE-BOX-1.webp',
    description: 'Set quà Graduate Box – Trọn Vẹn Hành Trang Ngày Tốt Nghiệp\n\nDành tặng bạn thân, người thương hay đồng nghiệp trong ngày lễ tốt nghiệp trọng đại, Graduate Box là lời chúc mừng vô cùng tinh tế và thiết thực.\n\nSet quà ghi điểm bởi sự hữu dụng vượt trội với bộ sáu món hoàn hảo đồng hành cùng ngày đi làm sắp tới: bình giữ nhiệt, sổ, bút, khung ảnh kỷ niệm, lọ cử nhân ý nghĩa và bó hoa mini ngọt ngào. Set quà có 02 phiên bản màu sắc tinh tế, phù hợp cho cả nam và nữ.',
    category: 'Set quà',
    freePhoto: true,
    capacity: 130,
    tags: ['Kỷ niệm', 'Tốt nghiệp'],
    additionalImages: [
      '/anhdep/GRADUATE-BOX-2.webp',
      '/anhdep/GRADUATE-BOX-3.webp',
      '/anhdep/GRADUATE-BOX-4.webp',
      '/anhdep/GRADUATE-BOX-5.webp',
      '/anhdep/GRADUATE-BOX-6.webp',
      '/anhdep/GRADUATE-BOX-7.webp',
      '/anhdep/GRADUATE-BOX-8.webp',
      '/anhdep/GRADUATE-BOX-9.webp'
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
      video: 'https://drive.google.com/file/d/1yJZTEhC_fOBls6vQ6xykWJSlo6tGjybx/view?usp=sharing',
      includes: [
        { name: '1 x Sổ tay Crabit khổ A5', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: '1 x Bình giữ nhiệt Coffee', image: '/anhdep/GRADUATE-BOX-3.webp', quantity: 1 },
        { name: '1 x Lọ Cử nhân bao gồm 50 tờ note', image: '/anhdep/GRADUATE-BOX-4.webp', quantity: 1 },
        { name: '1 x Bút viết', image: '/anhdep/GRADUATE-BOX-5.webp', quantity: 1 },
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
    image: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=800&auto=format&fit=crop',
    description: 'Móc Khóa In Theo Yêu Cầu – Dấu Ấn Cá Nhân, Trọn Vẹn Cảm Xúc\n\nDù mang thiết kế nhỏ gọn nhưng móc khóa in theo yêu cầu lại là nơi lưu giữ trọn vẹn những kỷ niệm vô giá. Sản phẩm cực kỳ đa năng, hoàn hảo và phù hợp với mọi dịp từ lễ tốt nghiệp, sinh nhật, kỷ niệm tình yêu cho đến món quà bất ngờ dành tặng hội bạn thân.\n\nBạn có thể thỏa sức sáng tạo, in hình ảnh, lời chúc hoặc tọa độ đặc biệt mang câu chuyện của riêng mình. Chỉ với một mức ngân sách vô cùng tiết kiệm, bạn đã sở hữu ngay một món quà độc bản, tinh tế và đầy chân thành, để người thương yêu luôn mang theo bên mình mỗi ngày!',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 200,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine', '8/3', '20/10', '20/11'],
    additionalImages: [
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop'
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
      video: 'https://drive.google.com/file/d/1cpaL8omvi7AbWlcRAIelfGSRtSw75jMq/view?usp=sharing',
      includes: []
    }
  },
  {
    id: 5,
    name: 'MÓC KHÓA IN VÂN TAY (1 SET 02 MÓC)',
    price: '50.000đ',
    badge: 'Mới',
    image: '/anhdep/mini-box-2.webp',
    description: 'Móc Khóa In Vân Tay – Dấu Ấn Độc Bản, Gắn Kết Yêu Thương\n\nMang thiết kế nhỏ gọn nhưng đong đầy ý nghĩa, móc khóa in vân tay theo yêu cầu là món quà tặng hoàn hảo giúp gắn kết tình cảm lứa đôi, gia đình hay những người bạn thân thiết.\n\nMỗi sản phẩm được Tiệm trao đi là một set quà vô cùng tinh tế, bao gồm đầy đủ đồ để in vân tay chuyên dụng. Chỉ với vài thao tác cực kỳ dễ dàng thực hiện tại nhà, bạn đã có thể tự tay tạo ra một kỷ vật mang đậm dấu ấn cá nhân không thể trộn lẫn. Một món quà nhỏ bé nhưng chứa đựng trọn vẹn sự chân thành, giúp bạn lưu giữ và mang theo hơi ấm của người thương yêu đi muôn nơi!',
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
      video: 'https://drive.google.com/file/d/1PcsYDGZPMoTTh8aXY3kDUhAu7Tr5Z3y3/view?usp=sharing',
      includes: []
    }
  },
  {
    id: 6,
    name: 'HUY CHƯƠNG IN THEO YÊU CẦU',
    price: '50.000đ',
    badge: 'Bán chạy',
    image: '/anhdep/hc1.webp',
    description: 'Huy Chương In Theo Yêu Cầu – Vinh Danh Dấu Ấn Độc Bản\n\nNếu bạn đang tìm kiếm một món quà tặng độc đáo để tạo sự bất ngờ, huy chương in theo yêu cầu chính là lựa chọn hoàn hảo. Bằng cách tự do sáng tạo nội dung, danh hiệu và hình ảnh, mỗi chiếc huy chương đều trở thành một tác phẩm độc bản, mang đậm câu chuyện riêng của người nhận.\n\nSản phẩm vô cùng linh hoạt, cực kỳ phù hợp với mọi dịp: từ quà tặng lễ tốt nghiệp rực rỡ, ngày kỷ niệm tình yêu, vinh danh đồng nghiệp xuất sắc, cho đến những phần thưởng "lầy lội" của hội bạn thân. Dù nhỏ nhắn, chiếc huy chương chắc chắn là kỷ vật vô giá gói trọn sự trân trọng và niềm vui bất ngờ!',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 150,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine', '8/3', '20/10', '20/11'],
    additionalImages: [
      '/anhdep/hc2.webp',
      '/anhdep/hc3.webp',
      '/anhdep/hc4.webp'
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
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop',
    description: 'Card Spotify In Theo Yêu Cầu – Giai Điệu Lưu Giữ Yêu Thương\n\nCard Spotify in theo yêu cầu là món quà tặng độc đáo, giúp bạn thay lời muốn nói qua những giai điệu. Sản phẩm cho phép cá nhân hóa hoàn toàn hình ảnh và bài nhạc yêu thích, biến mỗi chiếc thẻ thành một kỷ vật mang đậm dấu ấn cá nhân.\n\nĐây là cách tinh tế nhất để bạn lưu giữ bài hát yêu thích làm kỷ niệm hoặc khéo léo gửi gắm yêu thương chân thành đến người nhận. Với thiết kế nhỏ gọn, thẻ vô cùng đa năng và tiện dụng để trang trí ốp lưng điện thoại, kẹp vào sổ lưu bút, hay đặt trong ví cầm tay. Chỉ cần quét mã, âm nhạc vang lên sẽ đánh thức mọi cảm xúc trọn vẹn nhất!\n\n1 set bao gồm 8 card có thể in giống nhau hoặc khác nhau.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 180,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine', '8/3', '20/10', '20/11'],
    additionalImages: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Mẫu 1 - Trắng', price: '50.000đ' },
          { name: 'Mẫu 1 - Đen', price: '50.000đ' },
          { name: 'Mẫu 2 - Trắng', price: '50.000đ' },
          { name: 'Mẫu 2 - Đen', price: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Card Spotify In Theo Yêu Cầu – Giai Điệu Lưu Giữ Yêu Thương

Card Spotify in theo yêu cầu là món quà tặng độc đáo, giúp bạn thay lời muốn nói qua những giai điệu. Sản phẩm cho phép cá nhân hóa hoàn toàn hình ảnh và bài nhạc yêu thích, biến mỗi chiếc thẻ thành một kỷ vật mang đậm dấu ấn cá nhân.

Đây là cách tinh tế nhất để bạn lưu giữ bài hát yêu thích làm kỷ niệm hoặc khéo léo gửi gắm yêu thương chân thành đến người nhận. Với thiết kế nhỏ gọn, thẻ vô cùng đa năng và tiện dụng để trang trí ốp lưng điện thoại, kẹp vào sổ lưu bút, hay đặt trong ví cầm tay. Chỉ cần quét mã, âm nhạc vang lên sẽ đánh thức mọi cảm xúc trọn vẹn nhất!

1 set bao gồm 8 card có thể in giống nhau hoặc khác nhau.`,
      video: 'https://drive.google.com/file/d/1L5LJZYIsNitB353e62xhhtHXxmdHEYmj/view?usp=sharing',
      includes: []
    }
  },
  {
    id: 8,
    name: 'ẢNH PHOTOBOOTH, PHOTOSTRIP IN THEO YÊU CẦU (1 SET 06 ẢNH)',
    price: '40.000đ',
    badge: '',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?q=80&w=800&auto=format&fit=crop',
    description: 'Ảnh Photobooth & Photostrip In Theo Yêu Cầu – Cuộn Phim Lưu Giữ Thanh Xuân\n\nNhững dải ảnh Photostrip hay Photobooth in theo yêu cầu không chỉ là món quà tặng nhỏ xinh mà còn là cách tuyệt vời nhất để bạn lưu giữ trọn vẹn những khoảnh khắc kỷ niệm đáng giá. Bằng công nghệ in sắc nét trên nền giấy ảnh chất lượng cao, cán bóng 02 mặt, mỗi khung hình đều hiện lên thật sống động, chân thực và bền màu với thời gian.\n\nSản phẩm mang thiết kế vintage, vô cùng lý tưởng để bạn thỏa sức sáng tạo: từ việc trang trí ốp lưng điện thoại, dán góc bàn làm việc, cho đến kẹp vào sổ lưu bút hay tô điểm cho các set quà. Hãy biến những bức ảnh kỹ thuật số thành kỷ vật hiện hữu, gói ghém trọn vẹn cảm xúc để gửi trao!\n\n1 set bao gồm 6 ảnh có thể in giống nhau hoặc khác nhau.',
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
      description: `Ảnh Photobooth & Photostrip In Theo Yêu Cầu – Cuộn Phim Lưu Giữ Thanh Xuân

Những dải ảnh Photostrip hay Photobooth in theo yêu cầu không chỉ là món quà tặng nhỏ xinh mà còn là cách tuyệt vời nhất để bạn lưu giữ trọn vẹn những khoảnh khắc kỷ niệm đáng giá. Bằng công nghệ in sắc nét trên nền giấy ảnh chất lượng cao, cán bóng 02 mặt, mỗi khung hình đều hiện lên thật sống động, chân thực và bền màu với thời gian.

Sản phẩm mang thiết kế vintage, vô cùng lý tưởng để bạn thỏa sức sáng tạo: từ việc trang trí ốp lưng điện thoại, dán góc bàn làm việc, cho đến kẹp vào sổ lưu bút hay tô điểm cho các set quà. Hãy biến những bức ảnh kỹ thuật số thành kỷ vật hiện hữu, gói ghém trọn vẹn cảm xúc để gửi trao!

1 set bao gồm 6 ảnh có thể in giống nhau hoặc khác nhau.`,
      video: 'https://drive.google.com/file/d/1ra_9jaTzxdHzekv8FCz0HwAFd0zYs653/view?usp=sharing',
      includes: []
    }
  },
  {
    id: 9,
    name: 'ẢNH 6X9CM IN THEO YÊU CẦU (1 SET 10 ẢNH)',
    price: '40.000đ',
    badge: '',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop',
    description: 'Ảnh 6x9cm In Theo Yêu Cầu – Lưu Giữ Trọn Vẹn Ký Ức\n\nẢnh 6x9cm in theo yêu cầu là lựa chọn hoàn hảo để bạn hiện thực hóa và lưu giữ trọn vẹn những kỷ niệm quý giá. Với chất liệu giấy ảnh chất lượng cao kết hợp công nghệ in sắc nét, cán bóng 2 mặt, mỗi khung hình đều hiện lên vô cùng sống động, chân thực và bền màu theo năm tháng.\n\nKích thước 6x9cm nhỏ gọn, tinh tế, rất lý tưởng để bạn thỏa sức sáng tạo: trang trí không gian sống, góc bàn làm việc, đặt sau ốp lưng điện thoại, hay tỉ mỉ dán vào những cuốn sổ lưu bút thanh xuân. Hãy biến khoảnh khắc yêu thương kỹ thuật số thành kỷ vật hiện hữu đong đầy cảm xúc!\n\n1 set bao gồm 10 ảnh có thể in giống nhau hoặc khác nhau.',
    category: 'Sản phẩm lẻ',
    freePhoto: true,
    capacity: 350,
    tags: ['Kỷ niệm', 'Sinh nhật', 'Đám cưới', 'Valentine', '8/3', '20/10', '20/11'],
    additionalImages: [
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop'
    ],
    options: [
      {
        name: 'Phân loại',
        values: [
          { name: 'Tràn viền', price: '40.000đ' },
          { name: 'Viền nhỏ', price: '40.000đ' },
          { name: 'Viền trắng', price: '40.000đ' },
          { name: 'Viền màu', price: '40.000đ' },
          { name: 'Chèn chữ', price: '50.000đ' }
        ]
      }
    ],
    tabs: {
      description: `Ảnh 6x9cm In Theo Yêu Cầu – Lưu Giữ Trọn Vẹn Ký Ức

Ảnh 6x9cm in theo yêu cầu là lựa chọn hoàn hảo để bạn hiện thực hóa và lưu giữ trọn vẹn những kỷ niệm quý giá. Với chất liệu giấy ảnh chất lượng cao kết hợp công nghệ in sắc nét, cán bóng 2 mặt, mỗi khung hình đều hiện lên vô cùng sống động, chân thực và bền màu theo năm tháng.

Kích thước 6x9cm nhỏ gọn, tinh tế, rất lý tưởng để bạn thỏa sức sáng tạo: trang trí không gian sống, góc bàn làm việc, đặt sau ốp lưng điện thoại, hay tỉ mỉ dán vào những cuốn sổ lưu bút thanh xuân. Hãy biến khoảnh khắc yêu thương kỹ thuật số thành kỷ vật hiện hữu đong đầy cảm xúc!

1 set bao gồm 10 ảnh có thể in giống nhau hoặc khác nhau.`,
      video: 'https://drive.google.com/file/d/1qCXCFDgZ7HNuvT8ytqRlocbYzyyMk5mc/view?usp=sharing',
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
