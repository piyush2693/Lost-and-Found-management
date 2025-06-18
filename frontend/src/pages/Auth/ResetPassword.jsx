import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../styles/ForgotPassword.css";
import ButtonSpinner from "../../components/Loader/ButtonSpinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [loader, setLoader] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const url = "https://lost-and-found-6qof.onrender.com";

      const res = await axios.post(
        `${url}/api/v1/auth/reset-password/${token}`,
        { newPassword }
      );
      toast.success(res.data.message);
      navigate("/login");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Unknown error";
      toast.error(errorMessage);
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="page-body">
      <div className="form-container">
        <h1>Reset Your Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          {loader ? (
            <div className="loader-box">
              <ButtonSpinner />
            </div>
          ) : (
            <button type="submit">Reset Password</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
