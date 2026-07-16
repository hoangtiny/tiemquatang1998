import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const result = await login(username, password);
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-88px)] flex items-center justify-center px-4 py-12 bg-gray-50/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col items-center mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-6 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <Logo className="w-20 h-20" />
            </motion.div>
            <h1 className="text-3xl font-bold text-dark mb-2">Đăng Nhập</h1>
            <p className="text-gray-dark text-center">
              Chào mừng bạn trở lại với Tiệm 1998
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm"
              >
                <AlertCircle size={18} />
                <span>{error}</span>
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-semibold text-dark mb-2 ml-1">
                Tên đăng nhập
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark mb-2 ml-1">
                Mật khẩu
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20" />
                <span className="text-gray-dark group-hover:text-dark transition-colors">Ghi nhớ đăng nhập</span>
              </label>
              <button type="button" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4">
                Quên mật khẩu?
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Đang xử lý...</span>
                </>
              ) : (
                <>
                  <span>Đăng Nhập</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-dark text-sm">
              Chưa có tài khoản?{' '}
              <button className="text-primary font-bold hover:underline decoration-2 underline-offset-4">
                Đăng ký ngay
              </button>
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-4">
            Hoặc đăng nhập với
          </p>
          <div className="flex justify-center gap-4">
            {['Google', 'Facebook'].map((provider) => (
              <button 
                key={provider}
                className="px-6 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-semibold text-dark shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95"
              >
                {provider}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
