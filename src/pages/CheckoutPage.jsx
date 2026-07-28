import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle2, ChevronDown, CheckCircle, Sparkles, Heart, MessageCircle, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sendOrderEmail } from '../services/emailService';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, formatPrice, updateQuantity } = useCart();

  // Filter items if navigating from CartPage with selected specific items
  const selectedCartIds = location.state?.selectedItems || [];
  const checkoutItems = selectedCartIds.length > 0
    ? cartItems.filter(item => selectedCartIds.includes(item.cartId))
    : cartItems;

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [localQuantities, setLocalQuantities] = useState({});

  // Form States
  const [deliveryMethod, setDeliveryMethod] = useState('delivery'); // 'delivery' or 'pickup'
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [expectedDate, setExpectedDate] = useState('');
  const [isExpress, setIsExpress] = useState(false);

  // Payment States
  const [paymentMethod, setPaymentMethod] = useState(''); // 'cod' or 'transfer'
  const [hasConfirmedTransfer, setHasConfirmedTransfer] = useState(false);

  // Address Dropdown States
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  // Discount
  const [discountCode, setDiscountCode] = useState('');

  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/?depth=3')
      .then(res => res.json())
      .then(data => setProvinces(data))
      .catch(err => console.error("Could not fetch provinces", err));
  }, []);

  const handleProvinceChange = (e) => {
    const code = e.target.value;
    setSelectedProvince(code);
    const p = provinces.find(p => p.code == code);
    setDistricts(p ? p.districts : []);
    setWards([]);
    setSelectedDistrict('');
    setSelectedWard('');
  };

  const handleDistrictChange = (e) => {
    const code = e.target.value;
    setSelectedDistrict(code);
    const d = districts.find(d => d.code == code);
    setWards(d ? d.wards : []);
    setSelectedWard('');
  };

  const checkIsCentralHanoi = () => {
    if (!selectedProvince || !selectedDistrict) return false;
    const p = provinces.find(p => p.code == selectedProvince);
    if (!p || !p.name.includes('Hà Nội')) return false;
    const d = districts.find(d => d.code == selectedDistrict);
    if (!d) return false;
    const centrals = ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Long Biên", "Cầu Giấy", "Đống Đa", "Hai Bà Trưng", "Hoàng Mai", "Thanh Xuân", "Hà Đông", "Bắc Từ Liêm", "Nam Từ Liêm"];
    return centrals.some(c => d.name.includes(c));
  };
  const isCentralHanoi = checkIsCentralHanoi();

  useEffect(() => {
    if (isExpress && !isCentralHanoi) {
      setIsExpress(false);
    }
  }, [selectedDistrict, selectedProvince, isCentralHanoi]);

  // Calculations
  const parsePrice = (priceVal) => {
    if (!priceVal) return 0;
    if (typeof priceVal === 'number') return priceVal;
    return parseInt(priceVal.toString().replace(/\D/g, ''));
  };

  const subtotal = checkoutItems.reduce((total, item) => total + (parsePrice(item.price) * item.quantity), 0);

  // Group items by name to calculate "Buy 10 Get 1 Free" discount per product
  const getBuy10Get1Discount = () => {
    const groups = {};
    checkoutItems.forEach(item => {
      const name = item.name;
      const priceVal = parsePrice(item.price);
      if (!groups[name]) {
        groups[name] = {
          totalQuantity: 0,
          minPrice: priceVal,
        };
      }
      groups[name].totalQuantity += item.quantity;
      if (priceVal < groups[name].minPrice) {
        groups[name].minPrice = priceVal;
      }
    });

    let totalDiscount = 0;
    const upsellNotes = [];
    const rewardNotes = [];

    Object.entries(groups).forEach(([name, data]) => {
      const freeCount = Math.floor(data.totalQuantity / 10);
      if (freeCount > 0) {
        totalDiscount += freeCount * data.minPrice;
        rewardNotes.push(`Đã áp dụng ưu đãi Mua ${freeCount * 10} Tặng ${freeCount} cho "${name}" (Tiết kiệm ${formatPrice(freeCount * data.minPrice)})`);
      } else {
        const remainder = data.totalQuantity % 10;
        if (remainder === 9) {
          upsellNotes.push(`Mua thêm 1 sản phẩm "${name}" nữa để nhận ngay ưu đãi Mua 10 Tặng 1!`);
        }
      }
    });

    return { totalDiscount, upsellNotes, rewardNotes };
  };

  const { totalDiscount: buy10Get1Discount, upsellNotes, rewardNotes } = getBuy10Get1Discount();
  const discountAmount = buy10Get1Discount;
  const shippingFee = deliveryMethod === 'pickup' ? 0 : ((subtotal - discountAmount) >= 399000 ? 0 : 20000);
  const finalTotal = subtotal + shippingFee - discountAmount;

  // Validate info
  const isDeliveryInfoValid = deliveryMethod === 'pickup'
    ? (customerName.trim() !== '' && /^0(3|5|7|8|9)[0-9]{8}$/.test(phone))
    : (customerName.trim() !== '' && address.trim() !== '' && selectedProvince && selectedDistrict && selectedWard && /^0(3|5|7|8|9)[0-9]{8}$/.test(phone));

  // Calculate deposit for COD (50% rounded to nearest 50k)
  const depositAmount = Math.round((finalTotal * 0.5) / 50000) * 50000;
  const remainingAmount = finalTotal - depositAmount;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isDeliveryInfoValid) return;

    setIsSending(true);

    // Construct full address string
    let fullAddress = address;
    if (deliveryMethod === 'delivery' && selectedProvince) {
      const pName = provinces.find(p => p.code == selectedProvince)?.name;
      const dName = districts.find(d => d.code == selectedDistrict)?.name;
      const wName = wards.find(w => w.code == selectedWard)?.name;
      fullAddress = `${address}, ${wName}, ${dName}, ${pName}`;
    } else {
      fullAddress = `Nhận tại cửa hàng (Ngõ 76 Kim Hoàng, Vân Canh)`;
    }

    // Generate human-readable details for Google Sheets
    const detailed_items = checkoutItems.map(item => {
      if (item.isCustomBox) {
        const boxName = item.box?.name || 'Hộp mặc định';
        const internalItems = item.items.map(i => `${i.name} (x${i.quantity || 1})`).join(', ');
        const cardInfo = item.card ? ` - Thiệp: ${item.card.name}` : '';
        const msgInfo = item.message ? ` - Lời nhắn: "${item.message}"` : '';
        return `[TỰ LÀM HỘP QUÀ] ${boxName}: {${internalItems}}${cardInfo}${msgInfo}`;
      }
      return `${item.name} (x${item.quantity}) ${item.driveLink ? `[Link: ${item.driveLink}]` : ''}`;
    }).join('\n');

    const orderData = {
      id: `ORD_${Date.now()}`,
      date: new Date().toLocaleString('vi-VN'),
      customer: {
        name: customerName,
        phone: phone,
        email: email,
        address: fullAddress,
        note: note,
        expectedDate: '',
        isExpress: false
      },
      items: checkoutItems,
      detailed_items: detailed_items, // Send detailed string for Sheets
      subtotal: subtotal,
      shipping_fee: shippingFee,
      discount: discountAmount,
      total: finalTotal,
      total_formatted: formatPrice(finalTotal),
      deposit: 0,
      remaining: finalTotal,
      payment_method: 'Zalo',
      delivery_method: deliveryMethod,
      status: 'pending'
    };

    try {
      // 1. Upload photos inline
      const updatedItems = await Promise.all(
        orderData.items.map(async (item) => {
          let updatedItem = { ...item };
          if (item.uploadedPhotos && Array.isArray(item.uploadedPhotos) && item.uploadedPhotos.length > 0) {
            try {
              const uploadedPaths = await Promise.all(
                item.uploadedPhotos.map(async (photo) => {
                  if (!photo.data) return photo;
                  const res = await fetch('/api/upload', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ filename: photo.name, data: photo.data })
                  });
                  const result = await res.json();
                  return result.success ? window.location.origin + result.path : null;
                })
              );
              updatedItem.uploadedPhotos = uploadedPaths.filter(p => p !== null);
            } catch (err) { console.error("Error upload:", err); }
          }
          return updatedItem;
        })
      );
      orderData.items = updatedItems;

      // 2. Save to local storage
      const existingOrders = JSON.parse(localStorage.getItem('teamo_orders') || '[]');
      localStorage.setItem('teamo_orders', JSON.stringify([orderData, ...existingOrders]));

      // 3. Send email notification
      await sendOrderEmail(orderData);

      // 4. Send to Google Sheets
      const itemsForSheets = orderData.items.map(item => {
        if (item.isCustomBox) {
          const boxName = item.box?.name || 'Hộp mặc định';
          const internalItems = item.items.map(i => `${i.name} (x${i.quantity || 1})`).join(', ');
          const cardInfo = item.card ? ` - Thiệp: ${item.card.name}` : '';
          const msgInfo = item.message ? ` - Lời nhắn: "${item.message}"` : '';
          return {
            ...item,
            name: `[TỰ LÀM HỘP QUÀ] ${boxName}: {${internalItems}}${cardInfo}${msgInfo}`
          };
        }
        return item;
      });

      await fetch('https://script.google.com/macros/s/AKfycbxVED513w1lxzHT-IqFTlUyAbkQZbTJ64bcUYn-UGEqu4qxJZGoeTeCC-Je6KZ37mka6A/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...orderData,
          items: itemsForSheets
        })
      });

      setIsSending(false);
      setIsSuccess(true);

      // Cleanup cart items that were checked out
      const remainingCart = cartItems.filter(ci => !checkoutItems.find(chi => chi.cartId === ci.cartId));
      localStorage.setItem('teamo_cart', JSON.stringify(remainingCart));
      // Tricky part context doesn't auto-update if we just update localStorage but navigating away handles it typically
    } catch (error) {
      console.error("Lỗi:", error);
      setIsSending(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-20 h-20 bg-[#fef2f2] rounded-full flex items-center justify-center mb-6 text-[#8b1a1a]">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-3xl lg:text-4xl font-black text-[#1e3a5f] mb-4 text-center">Đặt Hàng Thành Công!</h1>
        <p className="text-[#475569] mb-8 max-w-md text-center">
          Cảm ơn bạn đã tin tưởng Tiệm quà tặng 1998. Đơn hàng của bạn đang được xử lý và sẽ sớm được giao.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a href="https://m.me/tiemquatang1998.official" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-[#ff605c] to-[#a332fc] text-white px-8 py-3 rounded-full font-bold outline-none hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20 text-center flex items-center justify-center gap-2">
            <MessageCircle size={18} fill="currentColor" />
            Xác nhận đơn hàng qua Messenger
          </a>
          <button onClick={() => window.location.href = '/'} className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold outline-none hover:bg-gray-300 transition-colors shadow-lg">
            Trở về Trang Chủ
          </button>
        </div>
      </div>
    );
  }

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#1e3a5f]">Không có sản phẩm nào để thanh toán</h2>
        <button onClick={() => navigate('/bo-suu-tap')} className="bg-[#8b1a1a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#701414] transition-colors shadow-lg">Tiếp tục mua sắm</button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 md:py-16">
      <div className="container-custom max-w-6xl">
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-10">Thanh toán</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-10">
            {/* Delivery Info */}
            <div className="space-y-6">
              <h2 className="text-[20px] font-bold text-[#1e3a5f]">Thông tin giao hàng</h2>

              <div className="space-y-4">
                {/* Option 1: Giao hàng */}
                <div className={`border rounded-xl bg-white overflow-hidden transition-all ${deliveryMethod === 'delivery' ? 'border-[#8b1a1a] shadow-sm' : 'border-gray-200'}`}>
                  <label className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="delivery"
                      checked={deliveryMethod === 'delivery'}
                      onChange={() => setDeliveryMethod('delivery')}
                      className="text-[#8b1a1a] focus:ring-[#8b1a1a] w-5 h-5 cursor-pointer accent-[#8b1a1a]"
                    />
                    <span className="font-bold text-[15px] text-[#1e3a5f]">Đặt hàng vào giao tới tôi</span>
                  </label>

                  {deliveryMethod === 'delivery' && (
                    <div className="p-6 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-[#2c3e50] ml-1">Họ và tên: <span className="text-[#8b1a1a]">*</span></label>
                          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required placeholder="Họ và tên người nhận..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all placeholder:text-gray-400" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-[#2c3e50] ml-1">Số điện thoại: <span className="text-[#8b1a1a]">*</span></label>
                          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="^0(3|5|7|8|9)[0-9]{8}$" placeholder="Số điện thoại..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all placeholder:text-gray-400" />
                        </div>
                      </div>

                      {/* Expected Date & Express Shipping Removed */}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-[#2c3e50] ml-1">Địa chỉ giao hàng <span className="text-[#8b1a1a]">*</span></label>
                          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="Địa chỉ giao hàng..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all placeholder:text-gray-400" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-[#2c3e50] ml-1">Tỉnh/Thành phố: <span className="text-[#8b1a1a]">*</span></label>
                          <div className="relative">
                            <select value={selectedProvince} onChange={handleProvinceChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all text-gray-600 appearance-none bg-white pr-10">
                              <option value="">Chọn tỉnh/Thành phố</option>
                              {provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-[#2c3e50] ml-1">Quận/huyện: <span className="text-[#8b1a1a]">*</span></label>
                          <div className="relative">
                            <select value={selectedDistrict} onChange={handleDistrictChange} required disabled={!selectedProvince} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all text-gray-600 appearance-none bg-white pr-10 disabled:bg-gray-50">
                              <option value="">Chọn quận/huyện</option>
                              {districts.map(d => <option key={d.code} value={d.code}>{d.name}</option>)}
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-[#2c3e50] ml-1">Xã/phường: <span className="text-[#8b1a1a]">*</span></label>
                          <div className="relative">
                            <select value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} required disabled={!selectedDistrict} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all text-gray-600 appearance-none bg-white pr-10 disabled:bg-gray-50">
                              <option value="">Chọn xã/phường</option>
                              {wards.map(w => <option key={w.code} value={w.code}>{w.name}</option>)}
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Shipping fee display removed */}

                      <div className="space-y-1 pt-2">
                        <label className="text-xs font-bold text-[#2c3e50] ml-1">Ghi chú:</label>
                        <textarea rows="4" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ghi chú cho Tiệm..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all placeholder:text-gray-400 resize-none"></textarea>
                      </div>
                    </div>
                  )}
                </div>

                {/* Option 2: Nhận tại cửa hàng */}
                <div className={`border rounded-xl bg-white overflow-hidden transition-all ${deliveryMethod === 'pickup' ? 'border-[#8b1a1a] shadow-sm' : 'border-gray-200'}`}>
                  <label className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="pickup"
                      checked={deliveryMethod === 'pickup'}
                      onChange={() => setDeliveryMethod('pickup')}
                      className="text-[#8b1a1a] focus:ring-[#8b1a1a] w-5 h-5 cursor-pointer accent-[#8b1a1a]"
                    />
                    <span className="font-bold text-[15px] text-[#1e3a5f]">Nhận tại cửa hàng</span>
                  </label>

                  {deliveryMethod === 'pickup' && (
                    <div className="p-6 pt-0 space-y-5 border-t border-gray-100 mt-2">
                      <div className="bg-gray-50 p-4 rounded-xl mt-4 space-y-3">
                        <p className="text-[13px] text-[#475569] leading-relaxed">
                          Đơn hàng của bạn sẽ được chuẩn bị và sẵn sàng nhận tại kho của Tiệm 1998:
                        </p>
                        <p className="text-[13px] font-bold text-[#1e3a5f] flex items-center gap-2">📍 Số 16D ngõ 14 Hậu Ái, xã Sơn Đồng, thành phố Hà Nội.</p>
                        <p className="text-[13px] font-bold text-[#1e3a5f] flex items-center gap-2">📞 0339.267.766</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-[#2c3e50] ml-1">Họ và tên: <span className="text-[#8b1a1a]">*</span></label>
                          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required placeholder="Họ và tên người nhận..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all placeholder:text-gray-400" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-[#2c3e50] ml-1">Số điện thoại: <span className="text-[#8b1a1a]">*</span></label>
                          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="^0(3|5|7|8|9)[0-9]{8}$" placeholder="Số điện thoại..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#8b1a1a]/20 focus:border-[#8b1a1a] outline-none transition-all placeholder:text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Method Section Removed */}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm p-6 sm:p-8 lg:sticky lg:top-32">
              <h2 className="text-[20px] font-bold text-[#1e3a5f] border-b border-gray-100 pb-5 mb-5">Thông tin đơn hàng</h2>

              <div className="space-y-4 mb-6 pr-2 max-h-[350px] overflow-y-auto">
                {checkoutItems.map(item => {
                  const itemPrice = typeof item.price === 'string' ? parseInt(item.price.replace(/\D/g, '')) : item.price;

                  return (
                    <div key={item.cartId} className="flex gap-4 items-start">
                      <div className="w-14 h-14 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h4 className="text-[13px] font-bold text-[#475569] uppercase truncate">{item.name}</h4>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-[11px] font-medium text-gray-400">Số lượng:</span>
                          <div className="flex items-center border border-gray-200 rounded-md bg-white h-7 overflow-hidden">
                            <button
                              type="button"
                              onClick={() => {
                                if (item.quantity > 1) {
                                  const newQty = item.quantity - 1;
                                  updateQuantity(item.cartId, newQty);
                                  setLocalQuantities(prev => ({ ...prev, [item.cartId]: newQty }));
                                }
                              }}
                              className="w-6 flex justify-center items-center text-gray-400 hover:text-dark hover:bg-gray-50 h-full transition-colors border-r border-gray-150"
                            >
                              <Minus size={10} />
                            </button>
                            <input 
                              type="text" 
                              value={localQuantities[item.cartId] !== undefined ? localQuantities[item.cartId] : item.quantity}
                              onChange={(e) => {
                                const val = e.target.value.replace(/[^0-9]/g, '');
                                setLocalQuantities(prev => ({ ...prev, [item.cartId]: val }));
                                if (val !== '') {
                                  const num = parseInt(val, 10);
                                  if (num > 0 && num <= 100) {
                                    updateQuantity(item.cartId, num);
                                  }
                                }
                              }}
                              onBlur={() => {
                                const val = localQuantities[item.cartId];
                                if (val === '' || parseInt(val, 10) < 1) {
                                  updateQuantity(item.cartId, 1);
                                  setLocalQuantities(prev => ({ ...prev, [item.cartId]: 1 }));
                                }
                              }}
                              className="w-8 text-center text-xs font-bold text-[#1e3a5f] focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                if (item.quantity < 100) {
                                  const newQty = item.quantity + 1;
                                  updateQuantity(item.cartId, newQty);
                                  setLocalQuantities(prev => ({ ...prev, [item.cartId]: newQty }));
                                }
                              }}
                              className="w-6 flex justify-center items-center text-gray-400 hover:text-dark hover:bg-gray-50 h-full transition-colors border-l border-gray-150"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>

                        {item.isCustomBox && (
                          <div className="mt-3 border-l-[1.5px] border-gray-100 ml-1 pl-3 space-y-2.5">
                            <p className="text-[10px] font-bold text-[#1e3a5f] flex items-center gap-1 uppercase tracking-wider">
                              <Sparkles size={10} className="text-[#8b1a1a]" />
                              Hộp quà gồm:
                            </p>
                            {item.card && (
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-[#fff5f1] flex items-center justify-center shrink-0 border border-[#ee4d2d]/5">
                                  <Heart size={10} className="text-[#ee4d2d]" />
                                </div>
                                <p className="text-[10px] font-semibold text-[#475569] truncate">Thiệp: {item.card.name}</p>
                              </div>
                            )}
                            {item.items && item.items.map((sub, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                                  <img src={sub.image} alt={sub.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-[10px] font-medium text-gray-500 leading-none truncate">{sub.name}</p>
                                  <p className="text-[9px] font-bold text-[#8b1a1a] mt-0.5">SL: x{sub.quantity || 1}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {!item.isCustomBox && item.category === 'Set quà' && item.tabs?.includes && (
                          <div className="mt-3 border-l-[1.5px] border-gray-100 ml-1 pl-3 space-y-2.5">
                            <p className="text-[10px] font-bold text-[#1e3a5f] flex items-center gap-1 uppercase tracking-wider">
                              <Sparkles size={10} className="text-[#8b1a1a]" />
                              Set quà gồm:
                            </p>
                            {item.tabs.includes.map((sub, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                                  <img src={sub.image} alt={sub.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-[10px] font-medium text-gray-500 leading-none truncate">{sub.name}</p>
                                  <p className="text-[9px] font-bold text-[#8b1a1a] mt-0.5">SL: x{sub.quantity || 1}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span className="font-bold text-[#1e3a5f] text-sm">{formatPrice(itemPrice * item.quantity)}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Buy 10 Get 1 Free Promo Notices */}
              {(rewardNotes.length > 0 || upsellNotes.length > 0) && (
                <div className="py-4 border-t border-gray-100 space-y-2">
                  {rewardNotes.map((note, idx) => (
                    <div key={idx} className="bg-green-50 border border-green-200 text-green-700 text-xs rounded-xl p-3 flex items-start gap-2 font-semibold">
                      <span className="text-sm shrink-0">🎉</span>
                      <p className="leading-snug">{note}</p>
                    </div>
                  ))}
                  {upsellNotes.map((note, idx) => (
                    <div key={idx} className="bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-xl p-3 flex items-start gap-2 font-semibold">
                      <span className="text-sm shrink-0">💡</span>
                      <p className="leading-snug">{note}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Discount Input */}
              <div className="flex items-center gap-3 py-6 border-t border-gray-100">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Nhập mã giảm giá"
                  className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#2c3e50] focus:ring-1 focus:ring-[#2c3e50] text-gray-700 placeholder:text-gray-400"
                />
                <button type="button" className="bg-[#2c3e50] text-white px-6 py-3 rounded-full text-[13px] font-bold hover:bg-[#1e293b] transition-colors whitespace-nowrap shadow-md shadow-[#2c3e50]/20">Áp dụng</button>
              </div>

              {/* Summary Lines */}
              <div className="space-y-3 py-6 border-t border-gray-100">
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#475569]">Tổng tiền sản phẩm:</span>
                  <span className="font-medium text-[#1e3a5f]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#475569]">Phí giao hàng:</span>
                  {shippingFee === 0 ? (
                    <span className="font-semibold text-green-600">Miễn phí</span>
                  ) : (
                    <span className="font-semibold text-[#1e3a5f]">{formatPrice(shippingFee)}</span>
                  )}
                </div>
                {deliveryMethod === 'delivery' && (
                  <div className="space-y-1 pl-1 text-[11px] text-gray-400 italic leading-normal pb-1">
                    <p>* Đơn hàng hỏa tốc Tiệm sẽ báo lại phí vận chuyển sau</p>
                  </div>
                )}
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#475569]">Giảm giá:</span>
                  <span className={`font-semibold ${discountAmount > 0 ? 'text-green-600' : 'text-[#1e3a5f]'}`}>
                    {discountAmount > 0 ? `-${formatPrice(discountAmount)}` : '0 đ'}
                  </span>
                </div>
              </div>

              <div className="py-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[16px] text-[#475569]">Tổng tiền:</span>
                <span className="text-[22px] font-black text-[#8b1a1a] tabular-nums">{formatPrice(finalTotal)}</span>
              </div>

              <button
                type="submit"
                disabled={isSending || !isDeliveryInfoValid}
                className={`w-full bg-[#8b1a1a] text-white font-bold text-[15px] py-4 rounded-[14px] shadow-lg shadow-[#8b1a1a]/25 transition-all outline-none ${(isSending || !isDeliveryInfoValid) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#701414] hover:-translate-y-0.5'}`}
              >
                {isSending ? 'Đang xử lý...' : 'Hoàn thành đơn hàng'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
