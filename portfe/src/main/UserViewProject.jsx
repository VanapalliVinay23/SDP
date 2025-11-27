import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "./user.css"; // reuse same styles for card/grid layout

export default function UserViewProject() {
  const [projectList, setProjectList] = useState([]);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallproject`);
      setProjectList(response.data);
    } catch (error) {
      setError("Failed to fetch projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="user-view-container">
      <h2>Projects</h2>
      {error && <p className="user-message error">{error}</p>}

      {projectList.length === 0 ? (
        <p style={{ textAlign: "center" }}>No projects found</p>
      ) : (
        <div className="user-card-grid">
          {projectList.map((project) => (
            <div key={project.id} className="user-card">
              <h3>{project.topic}</h3>
              <p>{project.description}</p>
              {project.gitlink && (
                <a
                  href={project.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-link"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
