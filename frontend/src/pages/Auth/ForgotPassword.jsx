import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const navigate = useNavigate()
  const [email, setEmail] = useState();
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const url = "https://lost-and-found-6qof.onrender.com";
    //   const url = "http://localhost:8000";

      await axios.post(`${url}/api/v1/auth/forgot-password`, { email });
      alert("Check your email for a password reset link.");
        navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </>
  );
}

export default ForgotPassword;
