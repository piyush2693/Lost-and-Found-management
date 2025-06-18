import { sendEmail } from "../utils/authHelper.js";
import users from '../models/userModel.js';
import JWT from "jsonwebtoken";
import { hashPassword } from "../utils/authHelper.js";

export const forgotPassword = async (req, res) => {
    const { email } = req.body;

  const user = await users.findOne({ email });
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  
  const resetToken = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
  console.log(resetToken);
  const url = "https://lost-and-found-frontend-zn9e.onrender.com";
  const resetURL = `${url}/reset-password/${resetToken}`;

  const html = `
    <h3>Password Reset Requested</h3>
    <p>Click the link below to reset your password. This link expires in 15 minutes.</p>
    <a href="${resetURL}">${resetURL}</a>
  `;

  try {
    await sendEmail(user.email, 'Reset Your Password', html);
    res.json({ success: true, message: 'Reset link sent to your email' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to send reset email' });
  }
};


export const resetPassword = async (req, res) => {
  try {
    const token = req.params.token;
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const user = await users.findById(decoded._id);

    if (!user) return res.status(404).send({ success: false, message: 'Invalid user' });

    user.password = await hashPassword(req.body.newPassword); 
    await user.save();

    res.send({ success: true, message: 'Password reset successful' });
  } catch (err) {
    res.status(400).send({ success: false, message: 'Invalid or expired token' });
  }
}