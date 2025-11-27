import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css';

export default function AdminEducation() {
  const [formData, setFormData] = useState({
    category: '',
    startdate: '',
    enddate: '',
    name: '',
    place: ''
  });

  const [educationList, setEducationList] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/admin/addeducation`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({ category: '', startdate: '', enddate: '', name: '', place: '' });
        fetchEducation();
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

  const fetchEducation = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewalleducation`);
      setEducationList(response.data);
    } catch (error) {
      setError("Failed to fetch education records");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        const response = await axios.delete(`${config.url}/admin/deleteeducation/${id}`);
        setMessage(response.data);
        setError('');
        fetchEducation();
      } catch (error) {
        setMessage('');
        setError("Failed to delete record");
      }
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-form-section education-form-container">
        <h3>Add Education</h3>
        {message && <p className="education-message success">{message}</p>}
        {error && <p className="education-message error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Category</label>
            <input type="text" id="category" value={formData.category} onChange={handleChange} required />
          </div>
          <div>
            <label>Start Date</label>
            <input type="text" id="startdate" value={formData.startdate} onChange={handleChange} required />
          </div>
          <div>
            <label>End Date</label>
            <input type="text" id="enddate" value={formData.enddate} onChange={handleChange} required />
          </div>
          <div>
            <label>Education Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Place</label>
            <input type="text" id="place" value={formData.place} onChange={handleChange} required />
          </div>
          <button type="submit">Add Education</button>
        </form>
      </div>

      <div className="admin-table-section education-table-container">
        <h3>All Education Records</h3>
        {
          educationList.length === 0 ? (
            <p style={{ textAlign: "center" }}>No education records available</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Name</th>
                  <th>Place</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {educationList.map(edu => (
                  <tr key={edu.id}>
                    <td>{edu.id}</td>
                    <td>{edu.category}</td>
                    <td>{edu.startdate}</td>
                    <td>{edu.enddate}</td>
                    <td>{edu.name}</td>
                    <td>{edu.place}</td>
                    <td>
                      <button onClick={() => handleDelete(edu.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }
      </div>
    </div>
  );
}
