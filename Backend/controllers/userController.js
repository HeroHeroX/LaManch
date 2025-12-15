import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check if user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "ユーザーは存在しません" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "IDまたはパスワードが正しくありません" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//User register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check if user already exists
    const exsits = await userModel.findOne({ email });
    if (exsits) {
      return res.json({ success: false, message: "すでに登録されているユーザーです" });
    }

    //Validate email and password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "メールアドレスが正しくありません" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "パスワードは最低8文字必要です",
      });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Admin Login
const adminLogin = async (req, res) => {
  try {
    // Lấy email và password từ body
    const { email, password } = req.body;

    // Kiểm tra email và password có được gửi không
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'メールとパスワードを入力してください' });
    }

    // Thông tin admin từ biến môi trường
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Kiểm tra email và password
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'メールアドレスまたはパスワードが正しくありません' });
    }

    // Tạo JWT token
    const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Trả về token
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'サーバーでエラーが発生しました' });
  }
};

export { loginUser, registerUser, adminLogin };
