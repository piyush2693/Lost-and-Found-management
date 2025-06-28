import ItemCard from "./FoundItemCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/FoundDashboard.css";
import { useSearch } from "../context/search";
const FoundDashboard = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState();
  const url = "https://lost-and-found-6qof.onrender.com";
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}/api/v1/user/search-found/${searchValue}`
      );

      setItems(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        setLoading(true);
        
        const response = await axios.get(`${url}/api/v1/user/found-items`);
        setItems(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoundItems();
  }, []);
  return (
    <>
      <div className="container">
        {/* Main Content */}
        <div className="main-content">
          <h2 className="title">Display Found Items</h2>
          <p className="subtitle">Browse and search through found items.</p>
        </div>
        {/* <DashboardCard /> */}

        <div className="search-section">
          <div className="search-bar">
            <form role="search" onSubmit={handleSubmit} className="search-form">
              <div className="search-input-container">
                <div className="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                  type="search"
                  value={searchValue}
                  placeholder="Search found items..."
                  className="search-input"
                  aria-label="Search found items"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>
          </div>
        </div>

        {loading ? (
          <div className="loading-box">
            <h3>Loading found items....</h3>
          </div>
        ) : (
          <div className="card-list">
            {items.map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FoundDashboard;
