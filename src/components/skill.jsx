import { motion } from "framer-motion";
import { Code, Cpu, Database, Layout, GitBranch } from "lucide-react";
import "../styles/skill.css";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="icon" />,
    items: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: <Cpu className="icon" />,
    items: [
      { name: "Node.js", level: 70 },
      { name: "MySql", level: 90 },
      { name: "PHP", level: 90 },
    ],
  },
  {
    category: "Tools",
    icon: <GitBranch className="icon" />,
    items: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Canva", level: 75 },
      { name: "NPM", level: 70 },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="skills-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <div className="card-header">
                {skillCategory.icon}
                <h3 className="category-title">{skillCategory.category}</h3>
              </div>
              <div className="skills-list">
                {skillCategory.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
