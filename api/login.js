// File: api/login.js
export default function handler(req, res) {
  // Chỉ cho phép phương thức POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  // Lấy tài khoản và mật khẩu thật từ Biến môi trường (Môi trường an toàn, không ai xem được code)
  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  // Kiểm tra thông tin đăng nhập
  if (username === validUsername && password === validPassword) {
    const token = 'mock-jwt-token-' + Math.random().toString(36).substring(7);
    const user = {
      id: 1,
      username: validUsername,
      name: 'Admin Tiệm 1998',
      role: 'administrator'
    };
    
    // Trả về thành công
    return res.status(200).json({ success: true, user, token });
  } else {
    // Trả về lỗi 401 (Unauthorized)
    return res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
  }
}