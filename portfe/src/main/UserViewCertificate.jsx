import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "./user.css"; // reuse same card styles

export default function UserViewCertificate() {
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallcertificates`);
      setCertificates(response.data);
    } catch (err) {
      setError("Failed to load certificates");
    }
  };

  return (
    <div className="user-view-container">
      <h2>Available Certificates</h2>

      {error && <p className="user-message error">{error}</p>}

      {certificates.length === 0 ? (
        <p style={{ textAlign: "center" }}>No certificates available</p>
      ) : (
        <div className="user-card-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="user-card">
              <h3>{cert.name}</h3>
              <p>
                <strong>Company:</strong> {cert.company}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-card-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
