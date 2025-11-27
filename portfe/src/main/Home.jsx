import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import img from "../images/image.png"; // ✅ Import your image

export default function Home() {
  const [skillCount, setSkillCount] = useState(0);
  const [certificateCount, setCertificateCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const skillRes = await axios.get(`${config.url}/admin/countskills`);
        const certRes = await axios.get(`${config.url}/admin/countcertificate`);
        const projRes = await axios.get(`${config.url}/admin/countprojects`);

        setSkillCount(skillRes.data);
        setCertificateCount(certRes.data);
        setProjectCount(projRes.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Main Content */}
      <div>
        {/* Profile Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <img
            src={img}
            alt="Profile"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "30%",
              objectFit: "cover",
              border: "5px solid #007bff",
              boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
            }}
          />
          <h2 style={{ marginTop: "15px", color: "#333" }}>Vinay</h2>
          <p style={{ color: "#555", fontSize: "16px" }}>
            B.Tech Student | Developer
          </p>
        </div>

        <h2 style={{ marginBottom: "20px", color: "#1976d2" }}>
          Welcome to Vinay Dashboard
        </h2>

        {/* Dashboard Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Skills Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "25px",
              width: "220px",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#333" }}>Skills</h3>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#007bff",
              }}
            >
              {skillCount}
            </p>
          </div>

          {/* Certificates Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "25px",
              width: "220px",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#333" }}>Certificates</h3>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#28a745",
              }}
            >
              {certificateCount}
            </p>
          </div>

          {/* Projects Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "25px",
              width: "220px",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#333" }}>Projects</h3>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ff5722",
              }}
            >
              {projectCount}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          padding: "15px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "10px",
          boxShadow: "0 -3px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Copy Rights Reserved By T.K.Chandan 🇮🇳
        </p>
      </footer>
    </div>
  );
}
