// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const skillsList = [
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Machine Learning',
    'Data Science',
    'Computer Networks',
    'Object Oriented Programming (Python, Java, C/C++)',
    'SQL',
    'R',
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
