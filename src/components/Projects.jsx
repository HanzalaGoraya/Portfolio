import React from "react";

const Projects = () => (
  <section id="projects" style={{ padding: "2rem 1rem" }}>
    <h2>Projects</h2>
    <ul>
      <li>
        <b>Pitstop Glasgow Website</b> – <a href="https://pitstopglasgow.com" target="_blank" rel="noopener noreferrer">pitstopglasgow.com</a><br />
        Developed and deployed a modern, user-friendly website for an automotive service center. Focused on responsive UI and seamless online booking.
      </li>
      <li style={{ marginTop: 16 }}>
        <b>Jury Selection System</b><br />
        Built a system for random jury selection from a qualified pool, with role-based actions (admin, juror) and secure JWT authentication/authorization with functional admin and user dashboards.
      </li>
      <li style={{ marginTop: 16 }}>
        <b>Eco Agriculture Mobile & Web Application</b><br />
        Designed and implemented a cross-platform application for farmers and agri-businesses, enabling digital marketplace and sustainability features.
      </li>
    </ul>
  </section>
);

export default Projects;