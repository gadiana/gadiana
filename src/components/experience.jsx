import React from "react";
import "../styles/experience.css";

const experienceData = [
  {
    role: "Main Developer",
    company: "Tech-A-Lang Corp",
    year: "2024",
    title: "WESMAARDEC DMS",
    tasks: [
      "Developed a full Document Management System",
      "Used HTML, CSS, JavaScript, PHP",
      "Managed core backend logic and UI components",
    ],
  },
  {
    role: "Main Developer",
    company: "Dave Team",
    year: "2025",
    title: "OJT Management Information System (MIS)",
    tasks: [
      "Built MIS for student and OJT record tracking",
      "Used HTML, CSS, JavaScript, PHP",
      "Handled both front-end and backend modules",
    ],
  },
];

export default function Experience() {
  return (
    <div className="experience">
      <div className="container">
        <div className="container-experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-cards">
            {experienceData.map((item, index) => (
              <div key={index} className="experience-card">
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-duration">{item.year}</p>
                <p className="experience-title">{item.title}</p>
                <ul className="experience-tasks">
                  {item.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
