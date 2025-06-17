
import DashboardCard from "./DashboardCard";
import LostItemCard from "./LostItemCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const LostDashboard = () => {
      const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const url = "https://lost-and-found-6qof.onrender.com";
        setLoading(true);
        const response = await axios.get(
          `${url}/api/v1/user/lost-items`
        );
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLostItems();
  }, []);
  return (
    <>

      <div className="container">
        {/* Main Content */}
        <div className="main-content">
          <h2 className="title">Display Lost Items</h2>
          <p className="subtitle">Browse and search through lost items.</p>
        </div>
        <DashboardCard />
      {loading ? (
          <div className="loading-box">
            <h3>Loading found items....</h3>
          </div>
        ) : (
          <div className="card-list">
            {items.map((item, index) => (
              <LostItemCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LostDashboard;
