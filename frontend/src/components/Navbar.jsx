// import "../styles/Navbar.css";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/auth.jsx";
// import { useState } from "react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { auth, logout } = useAuth();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="navbar-header">
//       <nav className="navbar-container">
//         <div className="navbar-content">
//           {/* Logo Section */}
//           <div className="navbar-logo-section">
//             <div className="logo-container">
//               {/* Logo SVG */}
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="logo-svg"
//               >
//                 <circle cx="20" cy="20" r="20" fill="#14B8A6" />
//                 <circle cx="16" cy="16" r="6" stroke="#FFFFFF" strokeWidth="2" fill="none" />
//                 <path m="20.5 20.5l4 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
//                 <circle cx="27" cy="13" r="2" fill="#F97316" />
//                 <rect x="29" y="12" width="4" height="1" fill="#F97316" />
//                 <rect x="31" y="11" width="1" height="1" fill="#F97316" />
//                 <rect x="31" y="13" width="1" height="1" fill="#F97316" />
//                 <path m="M10 28h8v4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4z" fill="#F97316" />
//                 <path m="M11 28v-2c0-1 1-2 2-2h2c1 0 2 1 2 2v2" stroke="#F97316" strokeWidth="1" fill="none" />
//               </svg>
//             </div>
//             <div className="brand-container">
//               <div>
//                 <Link to="/home">
//                   <h1 className="brand-title">Lost & Found</h1>
//                 </Link>
//                 <span className="brand-subtitle">RECOVERY PLATFORM</span>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div className="navbar-links">
//             {auth?.token && (
//               <>
//                 <Link to="/home" className="nav-link">Home</Link>
//                 <Link to="/lost" className="nav-link">Lost_Items</Link>
//                 <Link to="/found" className="nav-link">Found_Items</Link>
//               </>
//             )}
//           </div>

//           {/* Login/Logout Button */}
//           <div className="navbar-actions">
//             {!auth?.token ? (
//               <button onClick={() => navigate("/login")} className="login-button">
//                 Login
//               </button>
//             ) : (
//               <button onClick={handleLogout} className="login-button">
//                 Logout
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="mobile-menu-button">
//             <button className="hamburger-button" onClick={toggleMobileMenu}>
//               <span className="hamburger-line"></span>
//               <span className="hamburger-line"></span>
//               <span className="hamburger-line"></span>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import "../styles/Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.jsx";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const handleLink = () => {
    setIsMobileMenuOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogoutLink = () => {
    setIsMobileMenuOpen(false);
    handleLogout();
  };
  // Auto-close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-content">
          {/* Logo Section */}
          <div className="navbar-logo-section">
            <div className="logo-container">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-svg"
              >
                <circle cx="20" cy="20" r="20" fill="#14B8A6" />
                <circle
                  cx="16"
                  cy="16"
                  r="6"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20.5 20.5l4 4"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="27" cy="13" r="2" fill="#F97316" />
                <rect x="29" y="12" width="4" height="1" fill="#F97316" />
                <rect x="31" y="11" width="1" height="1" fill="#F97316" />
                <rect x="31" y="13" width="1" height="1" fill="#F97316" />
                <path
                  d="M10 28h8v4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4z"
                  fill="#F97316"
                />
                <path
                  d="M11 28v-2c0-1 1-2 2-2h2c1 0 2 1 2 2v2"
                  stroke="#F97316"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            <div className="brand-container">
              <Link to="/home">
                <h1 className="brand-title">Lost & Found</h1>
              </Link>
              <span className="brand-subtitle">RECOVERY PLATFORM</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className={`navbar-links ${
              isMobileMenuOpen ? "show-mobile-menu" : ""
            }`}
          >
            {auth?.token && (
              <>
                <Link to="/home" className="nav-link" onClick={handleLink}>
                  Home
                </Link>
                <Link to="/lost" className="nav-link" onClick={handleLink}>
                  Lost_Items
                </Link>
                <Link to="/found" className="nav-link" onClick={handleLink}>
                  Found_Items
                </Link>
                <Link className="nav-link" id="logout-link" onClick={handleLogoutLink}>
                  Logout
                </Link>
              </>
            )}
          </div>

          {/* Login/Logout Button */}
          <div className="navbar-actions">
            {!auth?.token ? (
              <button
                onClick={() => navigate("/login")}
                className="login-button"
                id="logout-button"
              >
                Login
              </button>
            ) : (
              <button onClick={handleLogout} id="logout-button" className="login-button">
                Logout
              </button>
              
            )}
          </div>

          {/* Mobile Menu Button */}
            <div className="mobile-menu-button">
                <button
                  className="hamburger-button"
                  onClick={toggleMobileMenu}
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
              </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
