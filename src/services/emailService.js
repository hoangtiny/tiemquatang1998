// Thay thế toàn bộ nội dung file chứa hàm sendOrderEmail của bạn

export const sendOrderEmail = async (orderData) => {
  try {
    // Đẩy dữ liệu đơn hàng lên cái API bạn vừa tạo ở Bước 2
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    if (data.success) {
      console.log('Order notification email sent successfully!');
      return { success: true };
    } else {
      console.error('EmailJS Error from Server:', data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.error('Failed to connect to sendEmail API:', error);
    return { success: false, error };
  }
};