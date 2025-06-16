import React, { useState } from "react";
import "././styles/ReportForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Loader/Spinner";

const LostReportForm = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    category: "",
    description: "",
    dateLost: "",
    lostLocation: "pending",
    owner: "",
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
      !formData.dateLost ||
      !formData.owner ||
      !formData.image
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoader(true);
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("dateLost", formData.dateLost);
    formDataToSend.append("lostLocation", formData.lostLocation);
    formDataToSend.append("owner", formData.owner);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("roll", formData.roll);

    try {
      await axios.post(
        "http://localhost:8000/api/v1/user/lost-report",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
      alert("Error occurred!");
      console.error(err);
    }
    setLoader(false);
    navigate("/home");
  };

  return (
    <div className="container-form">
      {loader ? (
        <div className="spinner-box">
          <Spinner />
        </div>
      ) : (
        <div className="form-wrapper">
          <div className="close-icon" onClick={() => navigate("/home")}>
            &times;
          </div>
          <h1 className="header">Add Lost Item</h1>

          <form onSubmit={handleSubmit}>
            <div className="file-upload">
              <label>Upload Image</label>
              <div className="file-upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
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
                  <label>Date Lost:</label>
                  <input
                    type="date"
                    value={formData.dateLost}
                    onChange={(e) =>
                      handleInputChange("dateLost", e.target.value)
                    }
                  />
                </div>

                <div className="field">
                  <label>Lost Location:</label>
                  <select
                    value={formData.lostLocation}
                    onChange={(e) =>
                      handleInputChange("lostLocation", e.target.value)
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
                <h2>Owner's Information</h2>

                <div className="field">
                  <label>Owner:</label>
                  <input
                    type="text"
                    value={formData.owner}
                    onChange={(e) =>
                      handleInputChange("owner", e.target.value)
                    }
                    placeholder="Enter your name"
                  />
                </div>

                <div className="field">
                  <label>Contact:</label>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) =>
                      handleInputChange("contact", e.target.value)
                    }
                    placeholder="Enter your phone no."
                  />
                </div>

                <div className="field">
                  <label>Roll Number:</label>
                  <input
                    value={formData.roll}
                    onChange={(e) =>
                      handleInputChange("roll", e.target.value)
                    }
                    placeholder="Enter your roll no."
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LostReportForm;
