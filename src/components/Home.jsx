import React from "react";
import profileimage from "../images/profile.jpg";

const Home = () => (
  <section id="home" className="home-hero">
    <div className="home-bg" />
    <div className="home-hero-content">
      {/* <img
        src={profileimage}
        alt="Profile"
        className="profile-img"
      /> */}
      <h1>Chaudhry Hanzala Ashraf</h1>
      <h3>Software Development Engineer (SDE)</h3>
      <p>
        United Kingdom &middot; +44 7427 065183 &middot;{" "}
        <a
          href="mailto:chaudhryhanzalaashraf@gmail.com"
          style={{
            color: "#38f9ff",
            textDecoration: "underline",
            fontWeight: 500,
            background: "none",
            fontFamily: "Roboto, Arial, sans-serif",
            padding: 0,
            boxShadow: "none",
          }}
        >
          chaudhryhanzalaashraf@gmail.com
        </a>
      </p>
      <a
        href="https://www.linkedin.com/in/chaudhry-hanzala-ashraf-94b6b3209/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </section>
);

export default Home;