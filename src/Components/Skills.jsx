import React from "react";

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-8 pl-16 md:pl-0 max-w-screen-md">

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Frontend:</h3>
        <ul className="list-disc pl-4">
          <li className="mb-2">React.js</li>
          <li className="mb-2">JavaScript (ES6+)</li>
          <li className="mb-2">HTML/CSS</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Backend (Node.js, Express.js):</h3>
        <ul className="list-disc pl-4">
          <li className="mb-2">Node.js</li>
          <li className="mb-2">Express.js</li>
          <li className="mb-2">RESTful APIs</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Database (MongoDB):</h3>
        <ul className="list-disc pl-4">
          <li className="mb-2">MongoDB</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Collaborative Projects:</h3>
        <ul className="list-disc pl-4">
          <li className="mb-2">
            Actively collaborated with peers on coding exercises, contributing
            to a shared codebase and participating in code reviews.
          </li>
          <li className="mb-2">
            Developed teamwork and communication skills crucial for
            collaborative software development.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;