
import { useEffect } from 'react';
import { useAuth } from '../context/auth';
import '../styles/LandingMain.css'
import { useNavigate } from 'react-router-dom';
const LandingMain = () => {
  const navigate = useNavigate();
  const {auth} = useAuth();

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
    
        <div className="app-container">
      
      <section className="hero-sections">
        <div className="container-landing">
          <div className="hero-grid">
            
            <div className="hero-contents">
              <h1 className="hero-titles">
                Easily Report &<br />
                Recover Lost Items
              </h1>
              <p className="hero-subtitles">
                Your trusted Lost & Found platform
                <br />
                to report and claim lost items.
              </p>
              <div className="button-group">
                <button onClick={ () => navigate("/login")} className="btn btn-primary">Login</button>
                <button onClick={ () => navigate("/register")} className="btn btn-secondary">Register</button>
              </div>
            </div>

            
            <div className="illustration-container">
              <div className="illustration-wrapper">
                
                <div className="bg-circle"></div>

                
                <div className="items-container">
                  
                  <div className="bag-item">
                    <div className="bag-handle"></div>
                    <div className="bag-lock"></div>
                  </div>

                  
                  <div className="wallet-item">
                    <div className="wallet-button"></div>
                  </div>

                 
                  <div className="key-item">
                    <div className="key-ring"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="features-section">
        <div className="container-features">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <h3 className="feature-title">Report Lost Items</h3>
              <p className="feature-description">
                Allow users to easily report lost belongings.
              </p>
            </div>

            
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16.5 9.4 7.55 4.24" />
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29,7 12,12 20.71,7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="feature-title">Submit Found Items</h3>
              <p className="feature-description">
                Submit found items with full details
              </p>
            </div>

            
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
              </div>
              <h3 className="feature-title">Track Claims</h3>
              <p className="feature-description">
                Real-time tracking of claim requests
              </p>
            </div>

            
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="feature-title">Secure & Verified</h3>
              <p className="feature-description">
                Verified system for secure matching
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="how-it-works-section-landing">
        <div className="container-landing">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid-landing">
            
            <div className="step-card-landing">
              <div className="step-icon">
                <div className="step-icon-inner">
                  <div className="report-bars">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                  </div>
                </div>
              </div>
              <h3 className="step-title">Submit Report</h3>
              <p className="step-description">
                Report the lost or found item details
              </p>
            </div>

            
            <div className="step-card-landing">
              <div className="step-icon">
                <div className="step-icon-inner">
                  <div className="match-symbol">
                    <div className="circle"></div>
                    <div className="arrows">
                      <div className="arrow arrow-1"></div>
                      <div className="arrow arrow-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="step-title">Match & Verify</h3>
              <p className="step-description">
                System matches items with reports
              </p>
            </div>

            
            <div className="step-card-landing">
              <div className="step-icon">
                <div className="step-icon-inner">
                  <div className="document">
                    <div className="doc-header"></div>
                    <div className="doc-line"></div>
                    <div className="doc-stamp"></div>
                  </div>
                </div>
              </div>
              <h3 className="step-title">Reclaim Item</h3>
              <p className="step-description">
                Verified users reclaim their items
              </p>
            </div>
          </div>
        </div>
      </section>
    </div> 

    </>
  );
};

export default LandingMain;

