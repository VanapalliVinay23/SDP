import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        
        {/* Heading */}
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          I'm always excited to connect. Whether it’s about projects, 
          collaborations, or just a friendly hello — feel free to reach out.
        </p>

        {/* Contact Options */}
        <div className="contact-options">
          <a
            href="mailto:2300033901@kluniversity.in?subject=Hello&body=Hi%20Chandan,"
            className="contact-btn email-btn"
          >
            <Mail className="icon" />
            2300033101@kluniversity.in
          </a>

          <a
            href="tel:+919876543210"
            className="contact-btn phone-btn"
          >
            <Phone className="icon" />
            +91 9988776655
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <Linkedin className="icon-lg" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <Github className="icon-lg" />
          </a>
        </div>

        {/* Footer Note */}
        <div className="contact-footer">
          <p>© {new Date().getFullYear()} Chandan. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
