import React, { useState } from 'react';
import { Search, Package, Calendar, Tag, CreditCard, ArrowRight, Loader2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OrderLookupPage = () => {
    const [phone, setPhone] = useState('');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        const trimmedPhone = phone.trim();
        
        // Validation: Exact 10 digits (Standard Vietnamese Phone Format)
        const phoneRegex = /^(0|84)?[0-9]{9}$/;
        if (!phoneRegex.test(trimmedPhone)) {
            setError("Vui lòng nhập số điện thoại hợp lệ (ví dụ: 0912345678)");
            return;
        }

        setLoading(true);
        setError(null);
        setSearched(true);

        try {
            // Google Apps Script Web App URL
            const url = `https://script.google.com/macros/s/AKfycbxVED513w1lxzHT-IqFTlUyAbkQZbTJ64bcUYn-UGEqu4qxJZGoeTeCC-Je6KZ37mka6A/exec?phone=${phone.trim()}`;
            
            const response = await fetch(url);
            const data = await response.json();
            
            if (Array.isArray(data)) {
                setOrders(data);
            } else {
                setOrders([]);
            }
        } catch (err) {
            console.error("Lỗi tìm kiếm đơn hàng:", err);
            setError("Không thể kết nối đến máy chủ. Vui lòng thử lại sau.");
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        const s = String(status).toLowerCase();
        if (s.includes('hoàn thành') || s.includes('completed')) return 'text-green-600 bg-green-50 border-green-100';
        if (s.includes('đang') || s.includes('processing')) return 'text-blue-600 bg-blue-50 border-blue-100';
        return 'text-amber-600 bg-amber-50 border-amber-100';
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16 md:py-24">
            <div className="container-custom max-w-4xl">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-[2.5rem] mb-6 text-primary"
                    >
                        <Search size={40} />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-dark mb-4 tracking-tight"
                    >
                        KIỂM TRA <span className="text-primary">ĐƠN HÀNG</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed"
                    >
                        Nhập số điện thoại bạn đã dùng để đặt hàng để xem trạng thái và chi tiết đơn hàng mới nhất.
                    </motion.p>
                </div>

                {/* Search Box */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-4 sm:p-6 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 mb-12"
                >
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
                                <Phone size={20} />
                            </span>
                            <input 
                                type="tel" 
                                placeholder="Nhập số điện thoại của bạn..."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-gray-50 border-none rounded-2xl sm:rounded-full py-5 pl-14 pr-6 focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-dark placeholder:text-gray-400"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="bg-primary text-white px-10 py-5 rounded-2xl sm:rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary-dark transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Đang tìm...
                                </>
                            ) : (
                                <>
                                    Tìm kiếm <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>
                    {error && (
                        <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm font-bold mt-4 px-6"
                        >
                            ⚠️ {error}
                        </motion.p>
                    )}
                </motion.div>

                {/* Results Area */}
                <div className="space-y-6">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div 
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="py-20 text-center"
                            >
                                <div className="inline-block animate-bounce mb-4">
                                    <Logo className="w-16 h-16 opacity-20" />
                                </div>
                                <p className="text-gray-400 font-medium">Đang kết nối dữ liệu từ Google Sheets...</p>
                            </motion.div>
                        ) : searched ? (
                            orders.length > 0 ? (
                                <motion.div 
                                    key="results"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="grid grid-cols-1 gap-6"
                                >
                                    <div className="flex items-center justify-between px-4 mb-2">
                                        <h2 className="text-xl font-bold text-dark">Kết quả ({orders.length})</h2>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Cập nhật thời gian thực</span>
                                    </div>
                                    
                                    {orders.map((order, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-gray-50 pb-8">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-dark/30">
                                                        <Package size={28} />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Mã đơn hàng</p>
                                                        <h3 className="text-xl font-black text-dark tracking-tight">{order['Mã Đơn']}</h3>
                                                    </div>
                                                </div>
                                                <div className={`px-5 py-2 rounded-full border text-sm font-black uppercase tracking-wider text-center ${getStatusColor(order['Trạng Thái'] || 'Đã nhận đơn')}`}>
                                                    {order['Trạng Thái'] || 'Đã nhận đơn'}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-6">
                                                    <div>
                                                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                                                            <Calendar size={14} strokeWidth={3} />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Ngày đặt hàng</span>
                                                        </div>
                                                        <p className="text-dark font-bold">{order['Thời Gian']}</p>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                                                            <Tag size={14} strokeWidth={3} />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Chi tiết sản phẩm</span>
                                                        </div>
                                                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100/50">
                                                            <p className="text-dark text-sm leading-relaxed whitespace-pre-wrap">{order['Chi Tiết Đơn Hàng']}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <div>
                                                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                                                            <CreditCard size={14} strokeWidth={3} />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Tổng thanh toán</span>
                                                        </div>
                                                        <p className="text-2xl font-black text-primary tracking-tight">{order['Tổng Tiền']}</p>
                                                        <div className="flex gap-4 mt-1">
                                                            <p className="text-[11px] text-gray-500 font-medium italic">Đã cọc: {order['Đã Cọc']}</p>
                                                            <p className="text-[11px] text-primary font-bold italic">Còn lại: {order['Số Tiền Còn Lại']}</p>
                                                        </div>
                                                        {order['Hình Thức'] && (
                                                            <p className="text-[10px] text-white bg-dark/20 px-2 py-0.5 rounded mt-2 inline-block font-bold">
                                                                Thanh toán: {order['Hình Thức']}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="pt-2">
                                                        <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                                                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Ghi chú</p>
                                                            <p className="text-sm text-dark/70 italic leading-snug">
                                                                {order['Ghi Chú'] || 'Không có ghi chú nào cho đơn hàng này.'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-white rounded-[2rem] p-16 text-center border border-dashed border-gray-200"
                                >
                                    <Package size={64} className="mx-auto text-gray-200 mb-6" />
                                    <h3 className="text-2xl font-bold text-dark mb-2">Không tìm thấy đơn hàng</h3>
                                    <p className="text-gray-400 max-w-sm mx-auto leading-relaxed">
                                        Rất tiếc, chúng tôi không tìm thấy đơn hàng nào liên kết với số điện thoại <strong>{phone}</strong>.
                                    </p>
                                </motion.div>
                            )
                        ) : (
                            <motion.div 
                                key="initial"
                                className="bg-white/50 rounded-[2.5rem] p-12 text-center border border-gray-100"
                            >
                                <div className="text-gray-300 mb-4">
                                    <Phone size={48} strokeWidth={1} className="mx-auto" />
                                </div>
                                <p className="text-gray-400 font-medium">Kết quả tìm kiếm sẽ hiển thị tại đây.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* FAQ / Info */}
                <div className="mt-20 text-center">
                    <p className="text-sm text-gray-400">
                        Cần hỗ trợ gấp? Liên hệ Hotline <span className="text-dark font-bold">0339 267 766</span> để được giải đáp.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Internal minimal Logo component if main one can't be imported easily
const Logo = ({ className }) => (
    <div className={`${className} bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl italic`}>
        1998
    </div>
);

export default OrderLookupPage;
