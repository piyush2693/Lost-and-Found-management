import React from "react";
import DashboardCard from "./DashboardCard";
import ItemCard from "./FoundItemCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Loader/Spinner.jsx";
import '../styles/FoundDashboard.css';
const FoundDashboard = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        setLoading(true);
        const url = "https://lost-and-found-6qof.onrender.com";
        // setLoading(true);
        const response = await axios.get(`${url}/api/v1/user/found-items`);
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        // setLoading(false);
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
        <DashboardCard />
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
