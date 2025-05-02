import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    // Lấy token từ header Authorization
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    // Lấy token (bỏ phần "Bearer ")
    const token = authHeader.split(' ')[1];

    // Kiểm tra token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Kiểm tra vai trò admin
    if (decoded.role !== 'admin') {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    // Lưu thông tin admin vào req để sử dụng ở route
    req.admin = decoded;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

export default adminAuth;