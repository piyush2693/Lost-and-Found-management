import React, { useState } from "react";
import "././styles/ReportForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import DotLoader from "./Loader/DotLoader";

const FoundReportForm = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    category: "",
    description: "",
    dateFound: "",
    foundLocation: "pending",
    foundBy: "",
    contact: "",
    roll: "",
  });

  const [fileName, setFileName] = useState("No file chosen");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setFileName(file ? file.name : "No file chosen");
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.category ||
      !formData.description ||
      !formData.dateFound ||
      !formData.foundBy ||
      !formData.image
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("dateFound", formData.dateFound);
    formDataToSend.append("foundLocation", formData.foundLocation);
    formDataToSend.append("foundBy", formData.foundBy);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("roll", formData.roll);

    setLoader(true);
    try {
      const res = await axios.post(
        `https://lost-and-found-6qof.onrender.com/api/v1/user/found-report`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(res.data.message);
      navigate("/found");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Server error while reporting found item";
      toast.error(errorMessage);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="container-form">
      <div className="form-wrapper">
        <div className="close-icon" onClick={() => navigate("/home")}>
          &times;
        </div>
        <h1 className="header">Add Found Item</h1>

        <form onSubmit={handleSubmit}>
          <div className="file-upload">
            <label>Upload Image</label>
            <div className="file-upload-box">
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <span className="file-name">{fileName}</span>
            </div>
          </div>

          <div className="grid-container-form">
            <div className="section">
              <h2>Item Details</h2>

              <div className="field">
                <label>Category:</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  placeholder="Enter item category"
                />
              </div>

              <div className="field">
                <label>Description:</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe the found item"
                />
              </div>

              <div className="field">
                <label>Date Found:</label>
                <input
                  type="date"
                  value={formData.dateFound}
                  onChange={(e) =>
                    handleInputChange("dateFound", e.target.value)
                  }
                />
              </div>

              <div className="field">
                <label>Found Location:</label>
                <select
                  value={formData.foundLocation}
                  onChange={(e) =>
                    handleInputChange("foundLocation", e.target.value)
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="campus">Campus</option>
                  <option value="library">Library</option>
                  <option value="cafeteria">Cafeteria</option>
                  <option value="parking">Parking Lot</option>
                  <option value="classroom">Classroom</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="section">
              <h2>Founder Information</h2>

              <div className="field">
                <label>Found By:</label>
                <input
                  type="text"
                  value={formData.foundBy}
                  onChange={(e) => handleInputChange("foundBy", e.target.value)}
                  placeholder="Enter your name"
                />
              </div>

              <div className="field">
                <label>Contact:</label>
                <input
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                  placeholder="Enter your phone no."
                />
              </div>

              <div className="field">
                <label>Roll Number:</label>
                <input
                  value={formData.roll}
                  onChange={(e) => handleInputChange("roll", e.target.value)}
                  placeholder="Enter your roll no."
                />
              </div>
            </div>
          </div>
          {loader ? (
            <div className="loader-box">
              <DotLoader />
            </div>
          ) : (
            <button type="submit" className="submit-btn">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default FoundReportForm;
