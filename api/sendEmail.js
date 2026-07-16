export default async function handler(req, res) {
  // Chỉ cho phép phương thức POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const orderData = req.body;

    // Lấy các key bảo mật từ biến môi trường (Node.js dùng process.env)
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    // Chuẩn bị dữ liệu để gửi vào Template
    const templateParams = {
      order_id: orderData.id,
      order_date: orderData.date,
      customer_name: orderData.customer.name,
      customer_phone: orderData.customer.phone,
      customer_address: orderData.customer.address,
      customer_note: orderData.customer.note || 'Không có',
      total_price: orderData.total_formatted,
      order_items: orderData.items
        .map(item => `${item.name} (x${item.quantity}) - ${item.price}`)
        .join('\n'),
      to_email: 'ntnh24091998@gmail.com'
    };

    // Gọi API của EmailJS từ phía Server
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey, // Bắt buộc khi gọi từ Server
        template_params: templateParams
      }),
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Email sent successfully!' });
    } else {
      const errorText = await response.text();
      console.error('EmailJS Error:', errorText);
      return res.status(400).json({ message: 'Failed to send email', error: errorText });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}