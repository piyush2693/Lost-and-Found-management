



import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import HomePage from './pages/HomePage';
import FoundPage from './pages/FoundPage';
import LostPage from './pages/LostPage';
import LostReport from './pages/LostReportPage';
import FoundReportPage from './pages/FoundReportPage';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/Auth/ForgotPassword';

function App() {
  return (
    <>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Private Routes */}
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/found" element={<PrivateRoute><FoundPage /></PrivateRoute>} />
        <Route path="/lost" element={<PrivateRoute><LostPage /></PrivateRoute>} />
        <Route path="/lost-report" element={<PrivateRoute><LostReport /></PrivateRoute>} />
        <Route path="/found-report" element={<PrivateRoute><FoundReportPage /></PrivateRoute>} />
        
      </Routes>  
    </>
  )
}

export default App;
