import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ForgotPassword.css";
import ButtonSpinner from "../../components/Loader/ButtonSpinner";

function ForgotPassword() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const url = "https://lost-and-found-6qof.onrender.com";
      const res = await axios.post(
        `${url}/api/v1/auth/forgot-password`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/login");
    } catch (err) {
      console.error(
        "Forgot password error:",
        err?.response?.data || err.message
      );
      alert("Something went wrong. Please try again.");
    }
    setLoader(false);
  };
  return (
    <>
      <div className="page-body">
        <div className="form-container">
          <h4>Forgot Password</h4>
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {loader ? (
              <div className="loader-box">
                <ButtonSpinner />
              </div>
            ) : (
              <button type="submit">Send Reset Link</button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
