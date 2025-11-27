import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function AdminHome() {
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
      }}
    >
      <h2>Welcome to Admin Dashboard</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            padding: "25px",
            width: "200px",
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

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            padding: "25px",
            width: "200px",
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

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            padding: "25px",
            width: "200px",
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
  );
}
