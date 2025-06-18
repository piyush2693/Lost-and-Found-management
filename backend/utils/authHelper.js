import bcrypt from "bcrypt";
import {Resend} from 'resend';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.RESEND_API_KEY;
const resend = new Resend(key);


// Send Email Function using Resend
export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Lost & Found <onboarding@resend.dev>', 
      to,
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      throw new Error('Email could not be sent');
    }

    console.log('Email sent:', data.id);
  } catch (error) {
    console.error('Unexpected error sending email:', error);
    throw new Error('Email sending failed');
  }
};


// Hash the password
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Hashing failed");
  }
};

// Compare the plain and hashed password
export const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw new Error("Comparison failed");
  }
};