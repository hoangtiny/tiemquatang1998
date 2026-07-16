import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Package, User, Clock, CheckCircle } from 'lucide-react';

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const { formatPrice } = useCart();
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/admin' } } });
    }
  }, [isAuthenticated, loading, navigate]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('teamo_orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('teamo_orders', JSON.stringify(updatedOrders));
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending': return <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded-full">Chờ xử lý</span>;
      case 'processing': return <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">Đang giao</span>;
      case 'completed': return <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1"><CheckCircle size={12}/> Hoàn thành</span>;
      default: return <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">{status}</span>;
    }
  };

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container-custom max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-dark flex items-center gap-3">
            <Package className="text-primary" size={32} />
            Quản Lý Đơn Hàng (Mock Admin)
          </h1>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-semibold text-primary">
            Tổng cộng: {orders.length} đơn
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <p className="text-xl text-gray-500">Chưa có đơn hàng nào được đặt.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50/80 p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-lg text-dark">#{order.id}</span>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} /> Bấm đặt lúc: {order.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <select 
                      value={order.status}
                      onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="pending">Chờ xử lý</option>
                      <option value="processing">Đang giao</option>
                      <option value="completed">Đã hoàn thành</option>
                    </select>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Customer Info */}
                  <div className="md:col-span-1 space-y-4">
                    <h3 className="font-bold text-dark flex items-center gap-2 border-b pb-2">
                      <User size={18} /> Thông tin khách hàng
                    </h3>
                    <div className="text-sm space-y-2">
                      <p><span className="text-gray-500">Tên:</span> <span className="font-semibold">{order.customer.name}</span></p>
                      <p><span className="text-gray-500">SĐT:</span> <span className="font-semibold">{order.customer.phone}</span></p>
                      <p><span className="text-gray-500">Địa chỉ:</span> <span>{order.customer.address}</span></p>
                      {order.customer.note && (
                        <p><span className="text-gray-500">Ghi chú:</span> <span className="italic">"{order.customer.note}"</span></p>
                      )}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="font-bold text-dark flex items-center gap-2 border-b pb-2">
                      <Package size={18} /> Chi tiết sản phẩm ({order.items.length} món)
                    </h3>
                    <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex gap-4 p-3 bg-gray-50 rounded-xl relative">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg flex-shrink-0 border bg-white" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                            <div className="flex justify-between mt-1 items-center">
                              <span className="text-gray-500 text-xs">SL: {item.quantity}</span>
                              <span className="font-bold text-primary">{formatPrice(typeof item.price === 'number' ? item.price : parseInt(item.price.replace(/\D/g, '') || 0))}</span>
                            </div>
                            
                            {item.isCustomBox && (
                              <div className="mt-2 text-xs text-gray-500 space-y-1">
                                <p>[Hộp tự tạo]</p>
                                {item.box && <p>• Vỏ hộp: {item.box.name}</p>}
                                {item.items?.map(p => <p key={p.id}>• Đồ tặng: {p.name}</p>)}
                                {item.card && <p>• Thiệp: {item.card.name}</p>}
                                {item.message && <p>• Lời nhắn: "{item.message}"</p>}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="font-bold text-lg text-dark">Tổng phụ:</span>
                      <span className="font-extrabold text-2xl text-primary">{formatPrice(order.total)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrdersPage;
