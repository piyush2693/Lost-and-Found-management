import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();

  if (!auth?.token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
