import React from "react";

const Education = () => (
  <section id="education" style={{ padding: "2rem 1rem" }}>
    <h2>Education</h2>
    <ul>
      <li>
        <b>MSc Advanced Computer Science</b> | University of Strathclyde <br />
        2024 – 2025<br />
        Focus: Mobile App Development, Machine Learning, Distributed Systems, Project Management. Dissertation: Jury Selection System using the MERN Stack.
      </li>
      <li style={{ marginTop: 16 }}>
        <b>BS Software Engineering</b> | University of Management and Technology <br />
        2019 – 2023<br />
        CGPA: 3.77, Rector's Award. Final project: Agri E-Commerce App on Android.
      </li>
      <li style={{ marginTop: 16 }}>
        <b>A-Levels</b> | Beaconhouse School System<br />
        2016 – 2018<br />
        Physics, Mathematics, Computer Science.
      </li>
      <li style={{ marginTop: 16 }}>
        <b>O-Levels</b> | Beaconhouse School System<br />
        2013 – 2016<br />
        Pre-Engineering subjects.
      </li>
    </ul>
  </section>
);

export default Education;