import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "./user.css"; // reuse the same card/grid styles

export default function UserViewEducation() {
  const [educationList, setEducationList] = useState([]);
  const [error, setError] = useState("");

  const fetchEducation = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewalleducation`);
      setEducationList(response.data);
    } catch (error) {
      setError("Failed to fetch education records");
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <div className="user-view-container">
      <h2>Education Records</h2>
      {error && <p className="user-message error">{error}</p>}

      {educationList.length === 0 ? (
        <p style={{ textAlign: "center" }}>No education records available</p>
      ) : (
        <div className="user-card-grid">
          {educationList.map((edu) => (
            <div key={edu.id} className="user-card">
              <h3>{edu.name}</h3>
              <p>
                <strong>Category:</strong> {edu.category}
              </p>
              <p>
                <strong>Place:</strong> {edu.place}
              </p>
              <p>
                <strong>Start Date:</strong> {edu.startdate}
              </p>
              <p>
                <strong>End Date:</strong> {edu.enddate}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
