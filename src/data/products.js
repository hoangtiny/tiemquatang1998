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
    originalPrice: '135.000đ',
    badge: '',
    image: '/anhdep/mini-box-1.webp',
    description: 'Ngày kỷ niệm đặc biệt.',
    category: 'Set quà',
    freePhoto: true,
    capacity: 120,
    tags: ['Đám cưới', 'Kỷ niệm'],
    additionalImages: [
      '/anhdep/mini-box-2.webp',
      '/anhdep/mini-box-3.webp',
      '/anhdep/mini-box-4.webp',
      '/anhdep/mini-box-5.webp',
      '/anhdep/hop-qua.webp',
      '/anhdep/lo-yeu-thuong.webp',
    ],
    boxOptions: [
      { id: 'box_wedding_1', name: 'Hộp Thường', image: '/anhdep/hop-qua.webp' },
      { id: 'box_wedding_2', name: 'Hộp đặc biệt', image: '/anhdep/mini-box-1.webp' }
    ],
    cardOptions: [
      { id: 'card_wedding_1', name: 'You Are The Best', icon: '🥂' },
      { id: 'card_wedding_1', name: 'I Love You So Much', icon: '🥂' }
    ],
    tabs: {
      description: `Set quà Tiệm 1998 YÊU THƯƠNG MINI BOX - Lọ Yêu Thương | Lọ Điều Ước | Kèm Hoa, Thiệp | Quà tặng cặp đôi, sinh nhật, ngày kỷ niệm đặc biệt

🎁 YÊU THƯƠNG MINI BOX bao gồm:

+ Lọ Yêu Thương bao gồm 50 tờ note do chính bạn tự viết lời nhắn
+ Bút viết
+ Thiệp chúc mừng For The Record
+ Hoa giấy mini hoặc hoa tulip
+ Hộp & Túi đựng quà

📌Tiệm 1998 cam kết:

- Đổi trả miễn phí và hoàn tiền 100% sản phẩm lỗi
- Sản phẩm phụ kiện đúng như ảnh
- Hỗ trợ tư vấn 24/7, ship hỏa tốc 4h trong nội thành Hà Nội.

#tiem1998 #tiemquatang #quatang #quasinhnhat #quatangbangai #quatangnguoiyeu #quatotnghiep #louoc #loyeuthuong #jaroflove #lovejar #healinglove`,
      video: 'https://down-tx-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw3-m8fnhgyi3s76de.16000081744339715.mp4',
      includes: [
        { name: 'Lọ Yêu Thương bao gồm 50 tờ note do chính bạn tự viết lời nhắn', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Bút viết', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Thiệp chúc mừng For The Record', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Hoa giấy mini hoặc hoa tulip', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: ' Hộp & Túi đựng quà', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 5,
    name: 'GRADUATE BOX',
    price: '359.000đ',
    originalPrice: '399.000đ',
    badge: '',
    image: '/anhdep/GRADUATE-BOX-1.webp',
    description: 'Quà tặng mừng tốt nghiệp, sinh nhật.',
    category: 'Set quà',

    capacity: 130,
    tags: ['Đám cưới', 'Kỷ niệm'],
    additionalImages: [
      '/anhdep/GRADUATE-BOX-2.webp',
      '/anhdep/GRADUATE-BOX-3.webp',
      '/anhdep/GRADUATE-BOX-4.webp',
      '/anhdep/GRADUATE-BOX-5.webp',
      '/anhdep/GRADUATE-BOX-6.webp',
      '/anhdep/GRADUATE-BOX-7.webp',
      '/anhdep/GRADUATE-BOX-8.webp'
    ],
    mauOptions: [
      { id: 'box_wedding_1', name: 'Hộp Trắng', image: '/anhdep/GRADUATE-BOX-2.webp' },
      { id: 'box_wedding_2', name: 'Hộp Đen', image: '/anhdep/GRADUATE-BOX-1.webp' }
    ],
    cardOptions: [
      { id: 'card_wedding_1', name: 'You Are The Best', icon: '' },
      { id: 'card_wedding_1', name: 'I Love You So Much', icon: '' }
    ],
    tabs: {
      description: `Set quà Tiệm 1998 GRADUATE BOX - Quà tặng mừng tốt nghiệp, sinh nhật dành cho bạn nam và bạn nữ

🎁 GRADUATE BOX bao gồm:

+ Sổ tay Crabit khổ A5
+ Bình giữ nhiệt Coffee dung tích 400ml
+ Lọ viết tiếp ước mơ ver Cử nhân bao gồm 50 tờ note do chính bạn tự viết lời nhắn
+ Bút viết
+ Khung Ảnh A5 cá nhân hóa
+ Hoa giấy mini 
+ Ảnh in theo yêu cầu kích thước 6x9cm
+ Thiệp chúc mừng kích thước 12x18cm
+ Hộp & Túi giấy đựng quà

Sau khi đặt hàng, nhắn mã vận đơn và gửi bức ảnh mà bạn muốn in qua Chat Shop

📌Tiệm 1998 cam kết:

- Đổi trả miễn phí và hoàn tiền 100% sản phẩm lỗi
- Sản phẩm phụ kiện đúng như ảnh
- Hỗ trợ tư vấn 24/7, ship hỏa tốc 4h trong nội thành Hà Nội.

#tiem1998 #tiemquatang #quatang #quasinhnhat #quatangbangai #quatangnguoiyeu #quatangkyniem #quavalentine #qua83 #qua2010 #qualuuniem #quaxinloi #quatotnghiep #quatangvanphong #graduatebox`,
      video: '',
      includes: [
        { name: 'Sổ tay Crabit khổ A5', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Bình giữ nhiệt Coffee dung tích 400ml', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Lọ viết tiếp ước mơ ver Cử nhân bao gồm 50 tờ note do chính bạn tự viết lời nhắn', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Bút viết', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Thiệp chúc mừng kích thước 12x18cm', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Khung Ảnh A5 cá nhân hóa', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Ảnh in theo yêu cầu kích thước 6x9cm', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Hoa giấy mini ', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: ' Hộp & Túi đựng quà', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 6,
    name: 'FALL IN LUV BOX',
    price: '179.000đ',
    originalPrice: '199.000đ',
    badge: '',
    image: '/anhdep/FALL-IN-LUV-BOX-1.webp',
    description: 'Quà tặng mừng tốt nghiệp, sinh nhật.',
    category: 'Set quà',
    capacity: 50,
    tags: ['Đám cưới', 'Kỷ niệm'],
    additionalImages: [
      '/anhdep/FALL-IN-LUV-BOX-2.webp',
      '/anhdep/FALL-IN-LUV-BOX-3.webp',
      '/anhdep/FALL-IN-LUV-BOX-4.webp',
      '/anhdep/FALL-IN-LUV-BOX-5.webp',
      '/anhdep/FALL-IN-LUV-BOX-6.webp',
      '/anhdep/FALL-IN-LUV-BOX-7.webp',
      '/anhdep/khan-gau.webp'
    ],
    mauOptions: [
      { id: 'box_wedding_1', name: 'FOR MEN', image: '/anhdep/FALL-IN-LUV-BOX-2.webp' },
      { id: 'box_wedding_2', name: 'FOR WOMAN', image: '/anhdep/FALL-IN-LUV-BOX-3.webp' }
    ],
    cardOptions: [
      { id: 'card_wedding_1', name: 'Happy Anniversary', icon: '' },
      { id: 'card_wedding_1', name: 'Happy Valentine', icon: '' },
      { id: 'card_wedding_1', name: 'Happy Birthday', icon: '' },
      { id: 'card_wedding_1', name: 'Xmas Red', icon: '' },
      { id: 'card_wedding_1', name: 'Xmas Green', icon: '' }
    ],
    tabs: {
      description: `Set quà Tiệm 1998 FALL IN LUV BOX là set quà tặng gồm nhiều món quà handmade ý nghĩa dành cho bạn trai, bạn gái nhân ngày kỷ niệm tình yêu, Valentine, 8/3, 20/10, Noel,...

*Set quà Tiệm 1998 FALL IN LUV BOX phiên bản FOR MEN bao gồm:
- Love Box | Hộp Quà Tặng Album Ảnh Handmade (01 ảnh bìa + 06 ảnh bên trong)
- Chứng Chỉ Tình Yêu dạng HUY CHƯƠNG | BEST BOYFRIEND EVER in ảnh 2 mặt
- Khăn Mặt Gấu Bông màu ngẫu nhiên
- Tất Ni. ke ĐEN 
- Tất Ni. ke TRẮNG
- Thiệp For The Record I Love You So Much
- Hộp quà 20x18x8cm + Túi PE đựng quà

*Set quà Tiệm 1998 FALL IN LUV BOX phiên bản FOR WOMEN bao gồm:
- Love Box | Hộp Quà Tặng Album Ảnh Handmade (01 ảnh bìa + 06 ảnh bên trong)
- Chứng Chỉ Tình Yêu dạng HUY CHƯƠNG | BEST GIRLFRIEND EVER in ảnh 2 mặt
- Khăn Mặt Gấu Bông màu ngẫu nhiên
- Túi Chườm Vải Nhung nóng/ lạnh dung tích 150ml màu ngẫu nhiên 
- Sáp Thơm Hoa Hồng treo tủ quần áo, xe hơi
- Thiệp For The Record I Love You So Much
- Hộp quà 20x18x8cm + Túi PE đựng quà

Sau khi đặt hàng, bạn vui lòng GỬI NGAY qua Chat Shop nhé!

Những thông tin cần gửi bao gồm:
1/ Ảnh in Love Box (01 ảnh bìa + 06 ảnh bên trong)
2/ Ảnh in Huy Chương (mặt trước + mặt sau)

Bạn vui lòng gửi ảnh trong vòng 1H sau khi đặt đơn để đảm bảo:
+ Đơn hàng đặt trước 14h được gửi cho đơn vị vận chuyển ngay trong ngày.
+ Đơn hàng đặt sau 14h sẽ gửi đơn vị vận chuyển vào ngày hôm sau.

📌Tiệm 1998 cam kết:
- Sản phẩm phụ kiện đúng như ảnh.
- Hỗ trợ tư vấn 24/7, ship hỏa tốc 4h trong nội thành Hà Nội.

#tiem1998 #tiemquatang #quatang #quasinhnhat #quatangbangai #quatangnguoiyeu #quatangkyniem #quavalentine #qua83 #qua2010 #qualuuniem #fallinluvbox"`,
      video: '',
      includes: [
        { name: 'Sổ tay Crabit khổ A5', image: '/anhdep/FALL-IN-LUV-BOX-2.webp', quantity: 1 },
        { name: 'Bình giữ nhiệt Coffee dung tích 400ml', image: '/anhdep/FALL-IN-LUV-BOX-2.webp', quantity: 1 },
        { name: 'Lọ viết tiếp ước mơ ver Cử nhân bao gồm 50 tờ note do chính bạn tự viết lời nhắn', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Bút viết', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Thiệp chúc mừng kích thước 12x18cm', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Khung Ảnh A5 cá nhân hóa', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Ảnh in theo yêu cầu kích thước 6x9cm', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: 'Hoa giấy mini ', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 },
        { name: ' Hộp & Túi đựng quà', image: '/anhdep/GRADUATE-BOX-2.webp', quantity: 1 }
      ]
    }
  },
  {
    id: 7,
    name: 'Hộp thông dụng',
    price: '100.000đ',
    badge: '',
    image: '/anhdep/hop-qua.webp',
    description: 'Trong suốt và lung linh, tôn vinh mọi món quà bên trong.',
    category: 'Set quà',
    isShell: true,
    capacity: 12,
    tags: ['Sinh nhật', 'Valentine']
  },
  {
    id: 8,
    name: 'Hộp Nhung Ruby Red',
    price: '100.000đ',
    badge: '',
    image: '/anhdep/hop-qua.webp',
    description: 'Lớp nhung đỏ quý phái cho những dịp đặc biệt.',
    category: 'Set quà',
    isShell: true,
    capacity: 15,
    tags: ['Đám cưới', 'Valentine']
  },
  {
    id: 2,
    name: 'Hộp quà basic',
    price: '99.000đ',
    badge: '',
    image: '/anhdep/hop-qua.webp',
    description: 'Lưu giữ những khoảnh khắc đáng nhớ nhất.',
    category: 'Set quà',
    isShell: true,
    size: 4,
    tags: ['Kỷ niệm', 'Valentine']
  },
  {
    id: 3,
    name: 'Nến Thơm Thư Giãn',
    price: '250.000đ',
    badge: '',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop',
    description: 'Hương thơm tự nhiên giúp giảm căng thẳng.',
    category: 'Sản phẩm lẻ',
    size: 2,
    tags: ['Sinh nhật', 'Kỷ niệm', 'Ngày của mẹ']
  },
  {
    id: 4,
    name: 'Sổ Tay Ghi Chép Cao Cấp',
    price: '150.000đ',
    image: 'https://images.unsplash.com/photo-1544967082-b9d25d856510?q=80&w=600&auto=format&fit=crop',
    description: 'Chất liệu giấy cao cấp, thiết kế tinh tế.',
    category: 'Sản phẩm lẻ',
    size: 2,
    tags: ['Sinh nhật', 'Cảm ơn']
  },
  {
    id: 9,
    name: 'Trà Hoa Cúc Chi',
    price: '120.000đ',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4586236b?q=80&w=600&auto=format&fit=crop',
    description: 'Trà thảo mộc thanh nhiệu, đẹp da.',
    category: 'Sản phẩm lẻ',
    size: 2,
    tags: ['Sức khỏe', 'Ngày của mẹ', 'Cảm ơn']
  },
  {
    id: 10,
    name: 'Cà Phê Arabica Cầu Đất',
    price: '180.000đ',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop',
    description: 'Hương vị đậm đà từ vùng cao nguyên.',
    category: 'Sản phẩm lẻ',
    size: 3,
    tags: ['Sinh nhật', 'Tân gia']
  },
  {
    id: 11,
    name: 'Socola Hand-made',
    price: '95.000đ',
    image: 'https://images.unsplash.com/photo-1548335132-95bb8fd45100?q=80&w=600&auto=format&fit=crop',
    description: 'Ngọt ngào và tan chảy ngay từ lần đầu.',
    category: 'Sản phẩm lẻ',
    size: 1,
    tags: ['Valentine', 'Sinh nhật', '8/3']
  },
  {
    id: 12,
    name: 'Bánh Quy Bơ Pháp',
    price: '150.000đ',
    image: 'https://images.unsplash.com/photo-1558961312-50346c0998d5?q=80&w=600&auto=format&fit=crop',
    description: 'Giòn tan, thơm nức mùi bơ.',
    category: 'Sản phẩm lẻ',
    size: 2,
    tags: ['Tân gia', 'Sinh nhật', 'Cảm ơn']
  },
  {
    id: 13,
    name: 'Khăn Quàng Lụa Tơ Tằm',
    price: '350.000đ',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop',
    description: 'Mềm mại, sang trọng và quý phái.',
    category: 'Sản phẩm lẻ',
    size: 1,
    tags: ['Ngày của mẹ', 'Valentine', '8/3']
  },
  {
    id: 14,
    name: 'Ly Sứ Minh Long',
    price: '130.000đ',
    image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?q=80&w=600&auto=format&fit=crop',
    description: 'Chất liệu men cao cấp, sắc sảo.',
    category: 'Sản phẩm lẻ',
    size: 3,
    tags: ['Tân gia', 'Cảm ơn']
  },
  {
    id: 15,
    name: 'Mật Ong Rừng U Minh',
    price: '220.000đ',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=600&auto=format&fit=crop',
    description: 'Mật ong nguyên chất tốt cho sức khỏe.',
    category: 'Sản phẩm lẻ',
    size: 2,
    tags: ['Sức khỏe', 'Cảm ơn']
  },
  {
    id: 16,
    name: 'Túi Thơm Thảo Mộc',
    price: '45.000đ',
    image: 'https://images.unsplash.com/photo-1616719113693-018cefc17e2e?q=80&w=600&auto=format&fit=crop',
    description: 'Hương thơm dễ chịu cho tủ đồ của bạn.',
    category: 'Sản phẩm lẻ',
    size: 1,
    tags: ['Sinh nhật', 'Ngày của mẹ']
  },
  {
    id: 17,
    name: 'Thìa Gỗ Dừa',
    price: '30.000đ',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=600&auto=format&fit=crop',
    description: 'Vật dụng thân thiện với môi trường.',
    category: 'Sản phẩm lẻ',
    size: 1,
    tags: ['Tân gia', 'Cảm ơn']
  },
  {
    id: 18,
    name: 'Bình Giữ Nhiệt Lốc Xoáy',
    price: '280.000đ',
    image: 'https://images.unsplash.com/photo-1544200175-ca6e80a7b323?q=80&w=600&auto=format&fit=crop',
    description: 'Giữ nhiệt cực tốt, thiết kế cá tính.',
    category: 'Sản phẩm lẻ',
    size: 4,
    tags: ['Sinh nhật', 'Tân gia']
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
    count: '5+',
    image: '/anhdep/hop-qua.webp',
    color: 'bg-rose-100',
  },
  {
    id: 'san-pham-le',
    title: 'Sản phẩm lẻ',
    count: '10+',
    image: '/anhdep/GRADUATE-BOX-4.webp',
    color: 'bg-blue-100',
  },
  {
    id: 'bo-s',
    title: 'Dịch Vụ',
    count: '',
    image: '/anhdep/GRADUATE-BOX-5.webp',
    color: 'bg-blue-100',
  }
];
