import { useState, useContext, createContext, useEffect } from "react";

// 1️⃣ Create Context
const AuthContext = createContext();

// 2️⃣ Create Provider
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("auth");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAuth({
        user: parsedData.user,
        token: parsedData.token,
      });
    }
    setLoading(false);
  }, []);

  const login = (user, token) => {
    setAuth({ user, token });
    localStorage.setItem("auth", JSON.stringify({ user, token }));
  };

  const logout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Create custom hook for easy access
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
