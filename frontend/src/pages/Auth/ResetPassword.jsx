import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = "https://lost-and-found-6qof.onrender.com";
        
      const res = await axios.post(
        `${url}/api/v1/auth/reset-password/${token}`,
        { newPassword }
      );
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Reset failed: " + (err.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div>
      <h1>Reset Your Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
