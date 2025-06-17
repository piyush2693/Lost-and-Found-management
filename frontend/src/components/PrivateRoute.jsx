import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import Spinner from "./Loader/Spinner";

const PrivateRoute = ({ children }) => {
  const { auth, loading } = useAuth(); // ⬅️ also get loading

  if (loading) {
    // Prevent redirect until auth is fully loaded from localStorage
    return <Spinner />; // You can replace this with a spinner or loader
  }

  if (!auth?.token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
