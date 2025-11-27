import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css'; // Make sure this is correctly linked

export default function AdminProject() {
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    gitlink: ''
  });

  const [projectList, setProjectList] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/admin/addproject`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({ topic: '', description: '', gitlink: '' });
        fetchProjects();
      }
    } catch (error) {
      setMessage('');
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallproject`);
      setProjectList(response.data);
    } catch (error) {
      setError("Failed to fetch projects");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await axios.delete(`${config.url}/admin/deleteproject/${id}`);
        setMessage(response.data);
        setError('');
        fetchProjects();
      } catch (error) {
        setMessage('');
        setError("Failed to delete project");
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-form-section">
        <h3>Add Project</h3>
        {message && <p className="admin-message success">{message}</p>}
        {error && <p className="admin-message error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Project Topic</label>
            <input type="text" id="topic" value={formData.topic} onChange={handleChange} required />
          </div>
          <div>
            <label>Description</label>
            <input type="text" id="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div>
            <label>GitHub Link</label>
            <input type="url" id="gitlink" value={formData.gitlink} onChange={handleChange} required />
          </div>
          <button type="submit">Add Project</button>
        </form>
      </div>

      <div className="admin-table-section">
        <h3>All Projects</h3>
        {projectList.length === 0 ? (
          <p style={{ textAlign: "center" }}>No projects found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Topic</th>
                <th>Description</th>
                <th>GitHub Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projectList.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.topic}</td>
                  <td>{project.description}</td>
                  <td>
                    <a href={project.gitlink} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(project.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
