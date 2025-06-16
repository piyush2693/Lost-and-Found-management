// import React, { useState } from "react";
// import Navbar from '../../components/Navbar';
// import '../../styles/RegisterForm.css';
// import toast from "react-hot-toast";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     roll: "",
//     phone: "",
//   });

// const handleChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post(`/api/v1/auth/register`, formData);

//     if (res && res.data.success) {
//       toast.success(res.data.message);
//       navigate("/login");
//     } else {
//       toast.error(res.data.message);
//     }
//   } catch (error) {
//     console.log(error);
//     toast.error("Something went wrong");
//   }
// };

//   return (
//     <>
//       <Navbar />
//       <div className="register-container">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit} className="register-form">
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Roll No</label>
//             <input
//               type="text"
//               name="roll"
//               value={formData.roll}
//               onChange={handleChange}
//               placeholder="Enter your roll number"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Phone</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter your phone number"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button type="submit" className="submit-btn">
//             Register
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/RegisterForm.css";
import Navbar from "../../components/Navbar";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    roll: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log(formData.email);
    try {
      const res = await axios.post(`/api/v1/auth/register`,formData);

      if (res && res.data.success) {
        // console(res.data.message);
        navigate("/login");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something went wrong");
    }
  };

  return (
    <>
    {/* <Navbar /> */}
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2 className="register-title">Create your account</h2>
          <p className="register-subtitle">Join the Lost & Found community</p>
        </div>

        <div className="register-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
              
                required
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="roll" className="form-label">
                Roll Number
              </label>
              <input
                id="roll"
                name="roll"
                type="string"
                required
                value={formData.roll}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your roll number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"

                required
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Create a password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Confirm your password"
              />
            </div>

            {/* <div className="terms-group">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="checkbox"
              />
              <label htmlFor="terms" className="terms-label">
                I agree to the{" "}
                <a href="#" className="terms-link">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="terms-link">
                  Privacy Policy
                </a>
              </label>
            </div> */}

            <button type="submit" className="submit-btn">
              Create Account
            </button>

            <div className="login-link">
              <span className="login-text">Already have an account? </span>
              <Link to="/login" className="login-btn">
                Sign in
              </Link>
            </div>
          </form>
        </div>

        <div className="back-home">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
