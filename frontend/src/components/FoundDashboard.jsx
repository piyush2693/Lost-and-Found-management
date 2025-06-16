import React from "react";
import DashboardCard from "./DashboardCard";
import ItemCard from "./FoundItemCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const FoundDashboard = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        setLoading(false);
        const response = await axios.get(
          "/api/v1/user/found-items"
        );
        setItems(response.data);
      } catch (err) {
        console.error(err);
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
        <DashboardCard />

        <div className="card-list">
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoundDashboard;









const dummyData = [
  {
    image: "https://via.placeholder.com/300x200.png?text=Watch",
    name: "Watch",
    description: "A black leather strap analog watch found near the cafeteria.",
    foundBy: "Rahul Sharma",
    dateFound: "2025-06-10",
    location: "Cafeteria",
    phone: "9876543210",
    rollNo: "2023IMT-101",
    reportDate: "11/06/2025",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Backpack",
    name: "Backpack",
    description: "A blue backpack containing notebooks and a water bottle.",
    foundBy: "Sneha Verma",
    dateFound: "2025-05-25",
    location: "Library",
    phone: "8765432109",
    rollNo: "2023IMT-102",
    reportDate: "12/06/2025",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Glasses",
    name: "Spectacles",
    description: "Brown framed prescription glasses found in classroom B-204.",
    foundBy: "Amit Kulkarni",
    dateFound: "2025-06-01",
    location: "Classroom B-204",
    phone: "7654321098",
    rollNo: "2023IMT-103",
    reportDate: "13/06/2025",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Earphones",
    name: "Earphones",
    description: "White wireless earphones found in the parking lot.",
    foundBy: "Pooja Singh",
    dateFound: "2025-06-05",
    location: "Parking Lot",
    phone: "6543210987",
    rollNo: "2023IMT-104",
    reportDate: "14/06/2025",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Earphones",
    name: "Earphones",
    description: "White wireless earphones found in the parking lot.",
    foundBy: "Pooja Singh",
    dateFound: "2025-06-05",
    location: "Parking Lot",
    phone: "6543210987",
    rollNo: "2023IMT-104",
    reportDate: "14/06/2025",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Earphones",
    name: "Earphones",
    description: "White wireless earphones found in the parking lot.",
    foundBy: "Pooja Singh",
    dateFound: "2025-06-05",
    location: "Parking Lot",
    phone: "6543210987",
    rollNo: "2023IMT-104",
    reportDate: "14/06/2025",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Earphones",
    name: "Earphones",
    description: "White wireless earphones found in the parking lot.",
    foundBy: "Pooja Singh",
    dateFound: "2025-06-05",
    location: "Parking Lot",
    phone: "6543210987",
    rollNo: "2023IMT-104",
    reportDate: "14/06/2025",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Earphones",
    name: "Earphones",
    description: "White wireless earphones found in the parking lot.",
    foundBy: "Pooja Singh",
    dateFound: "2025-06-05",
    location: "Parking Lot",
    phone: "6543210987",
    rollNo: "2023IMT-104",
    reportDate: "14/06/2025",
  },
];