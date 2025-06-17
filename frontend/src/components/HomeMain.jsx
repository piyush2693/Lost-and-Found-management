
import {
  Key,
  AlertTriangle,
  ClipboardList,
  Search,
  Handshake,
}
 from "lucide-react";
import "../styles/HomeMain.css"
import { useNavigate } from "react-router-dom";

function HomeMain() {
      const navigate = useNavigate();
      const handleFoundButton = () => {
        navigate('/found-report')
      }
      const handleLostButton = () => {
        navigate('/lost-report')
      }
  return (
    <>
      <div className="lost-found-container">
        {/* Main Content */}
        <main className="main-content-home">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              {/* Small header text */}
              <div className="lost-found-badge">LOST & FOUND</div>

              {/* Main heading */}
              <h1 className="hero-title">
                Lost Something?
                <br />
                Found Something?
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle">
                Help the community by reporting found or lost items.
              </p>

              {/* Action Buttons */}
              <div className="action-buttons">
                {/* Submit Report for Found Item */}
                <button onClick={handleFoundButton} className="action-button found">
                  <div className="button-content">
                    <Key className="button-icon" style={{ color: "#fde047" }} />
                    <div className="button-text">
                      <div className="button-title">Submit Report</div>
                      <div className="button-subtitle">for Found Item</div>
                    </div>
                  </div>
                </button>

                {/* Submit Report for Lost Item */}
                <button onClick={handleLostButton} className="action-button lost">
                  <div className="button-content">
                    <div className="alert-icon">
                      <AlertTriangle
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "white",
                        }}
                      />
                    </div>
                    <div className="button-text">
                      <div className="button-title">Submit Report</div>
                      <div className="button-subtitle">for Lost Item</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="how-it-works-section">
            <h2 className="how-it-works-title">How It Works</h2>

            <div className="steps-grid">
              {/* Submit Report */}
              <div className="step">
                <div className="step-icon">
                  <ClipboardList />
                </div>
                <h3 className="step-title">Submit Report</h3>
                <p className="step-description">
                  Provide details about lost or found item.
                </p>
              </div>

              {/* We Match & Notify */}
              <div className="step">
                <div className="step-icon">
                  <Search />
                </div>
                <h3 className="step-title">We Match & Notify</h3>
                <p className="step-description">
                  We'll search for potential matches and notify you.
                </p>
              </div>

              {/* Reunite Item with Owner */}
              <div className="step">
                <div className="step-icon">
                  <Handshake />
                </div>
                <h3 className="step-title">Reunite Item with Owner</h3>
                <p className="step-description">
                  Arrange for the item be returned to its owner.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms
              </a>
              <a href="#" className="footer-link">
                Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomeMain;
