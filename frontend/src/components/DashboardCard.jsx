
import "../styles/FoundDashboard.css";



const DashboardCard = () => {


  return (
    <>
      <div className="search-section">
        <div className="search-bar">
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="text"
            
            defaultValue="search-box"
            placeholder="Search"
            className="search-input"
            aria-label="Search found items"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
