import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminSkills() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    link: ''
  });

  const [skills, setSkills] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Submit skill
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/admin/addskill`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({ name: '', category: '', link: '' });
        fetchSkills(); // Refresh skill list
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

  // Fetch all skills
  const fetchSkills = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallskills`);
      setSkills(response.data);
    } catch (error) {
      setError("Failed to fetch skills");
    }
  };

  // Delete a skill
  const handleDelete = async (sid) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      try {
        const response = await axios.delete(`${config.url}/admin/deleteskill/${sid}`);
        setMessage(response.data);
        setError('');
        fetchSkills(); // Refresh list
      } catch (error) {
        setMessage('');
        setError("Failed to delete skill");
      }
    }
  };

  // Load skills on mount
  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Add Skill</h3>
      {
        message ?
          <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p> :
          <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      }
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <div>
          <label>Skill Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Category</label>
          <input type="text" id="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Link</label>
          <input type="url" id="link" value={formData.link} onChange={handleChange} required />
        </div>
        <button type="submit">Add Skill</button>
      </form>

      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>All Skills</h3>
      {
        skills.length === 0 ? (
          <p style={{ textAlign: "center" }}>No skills available</p>
        ) : (
          <table border="1" align="center" cellPadding="10">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {skills.map(skill => (
                <tr key={skill.id}>
                  <td>{skill.id}</td>
                  <td>{skill.name}</td>
                  <td>{skill.category}</td>
                  <td><a href={skill.link} target="_blank" rel="noopener noreferrer">View</a></td>
                  <td>
                    <button onClick={() => handleDelete(skill.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  );
}
