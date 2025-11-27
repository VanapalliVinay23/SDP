import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "./user.css"; // shared style file for user cards

export default function UserViewSkills() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");

  const fetchSkills = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallskills`);
      setSkills(response.data);
    } catch (error) {
      setError("Failed to fetch skills");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="user-view-container">
      <h2>Skills</h2>
      {error && <p className="user-message error">{error}</p>}

      {skills.length === 0 ? (
        <p style={{ textAlign: "center" }}>No skills available</p>
      ) : (
        <div className="user-card-grid">
          {skills.map((skill) => (
            <div className="user-card" key={skill.id}>
              <h3>{skill.name}</h3>
              <p>
                <strong>Category:</strong> {skill.category}
              </p>
              {skill.link && (
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-link"
                >
                  View More
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
