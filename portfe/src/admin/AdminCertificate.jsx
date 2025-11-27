import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css'; // Ensure this path is correct

export default function AdminCertificate() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    link: ''
  });

  const [certificateList, setCertificateList] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Submit certificate
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/admin/addcertificate`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({ name: '', company: '', link: '' });
        fetchCertificates();
      }
    } catch (error) {
      setMessage('');
      setError("Failed to add certificate");
    }
  };

  // Fetch certificates
  const fetchCertificates = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallcertificates`);
      setCertificateList(response.data);
    } catch (error) {
      setError("Failed to fetch certificates");
    }
  };

  // Delete certificate
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this certificate?")) {
      try {
        const response = await axios.delete(`${config.url}/admin/deletecertificate/${id}`);
        setMessage(response.data);
        setError('');
        fetchCertificates();
      } catch (error) {
        setMessage('');
        setError("Failed to delete certificate");
      }
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div>
      <div className="certificate-form-container">
        <h3>Add Certificate</h3>
        {
          message ? <p className="certificate-message success">{message}</p> :
          error && <p className="certificate-message error">{error}</p>
        }

        <form onSubmit={handleSubmit}>
          <div>
            <label>Certificate Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Link</label>
            <input
              type="text"
              id="link"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Certificate</button>
        </form>
      </div>

      <div className="certificate-table-container">
        <h3 style={{ textAlign: "center", textDecoration: "underline" }}>All Certificates</h3>
        {
          certificateList.length === 0 ? (
            <p style={{ textAlign: "center" }}>No certificates found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Certificate Name</th>
                  <th>Company</th>
                  <th>Link</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {certificateList.map(cert => (
                  <tr key={cert.id}>
                    <td>{cert.id}</td>
                    <td>{cert.name}</td>
                    <td>{cert.company}</td>
                    <td>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View
                      </a>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(cert.id)}>Delete</button>
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
