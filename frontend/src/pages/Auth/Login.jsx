import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/LoginForm.css";
import axios from "axios";
import { useAuth } from "../../context/auth";
import ButtonSpinner from "../../components/Loader/ButtonSpinner";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const url = "https://lost-and-found-6qof.onrender.com";
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axios.post(`${url}/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        const token = res.data.token;
        const user = res.data.user;

        login(user, token); 

      }
      toast.success("Login Successfully!!!");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  }; 
  useEffect(() => {
    const storedData = localStorage.getItem("auth");
  
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
  
        if (parsed.token) {
          const payload = JSON.parse(atob(parsed.token.split('.')[1]));
          const isExpired = payload.exp * 1000 < Date.now();
  
          if (!isExpired) {
            navigate('/home');
          } else {
            localStorage.removeItem("auth");
            navigate('/');
          }
        }
      } catch (e) {
        console.error("Invalid auth data", e);
        localStorage.removeItem("auth");
      }
    }
  }, []);

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2 className="login-title">Sign in to your account</h2>
            <p className="login-subtitle">Welcome back to Lost & Found</p>
          </div>

          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter your email"
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
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-options">
                <div className="forgot-password">
                  <Link to="/forgot-password" className="forgot-link">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="login-box">
                {loader ? (
                  <ButtonSpinner />
                ) : (
                  <button type="submit" className="submit-btn">
                    Sign in
                  </button>
                )}
              </div>

              <div className="signup-link">
                <span className="signup-text">Don't have an account? </span>
                <Link to="/register" className="signup-btn">
                  Sign up
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

export default Login;
