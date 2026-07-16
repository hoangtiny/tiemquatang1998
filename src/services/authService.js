// src/services/authService.js

const authService = {
  login: async (username, password) => {
    try {
      // Gửi thông tin đăng nhập lên Vercel Serverless API thay vì kiểm tra trực tiếp
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Đăng nhập thành công, lưu token và thông tin user vào localStorage
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return { success: true, user: data.user, token: data.token };
      } else {
        // Trả về lỗi nếu sai tài khoản/mật khẩu
        throw new Error(data.message || 'Tên đăng nhập hoặc mật khẩu không đúng');
      }
    } catch (error) {
      throw new Error(error.message || 'Lỗi kết nối đến máy chủ API');
    }
  },

  logout: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('auth_token');
  }
};

export default authService;