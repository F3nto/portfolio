import React from "react";

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-md pl-16 md:pl-0">
      <h2 className="text-4xl font-bold mb-6">Education</h2>

      {/* Computer Science */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Bachelor's in Computer Science</h3>
        <p className="text-lg mb-2">University Of Computer Studies (Thaton), 2023-2024</p>
        <p className="mb-4">
          Completed a comprehensive curriculum covering core concepts in Computer Science, including:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Data Structures and Algorithms</li>
          <li>Analysis of Algorithms (A.A)</li>
          <li>Software Engineering Principles (S.E)</li>
          <li>Software Project Management (S.P.M)</li>
          <li>Database Management Systems (D.B.M.S)</li>
        </ul>
        <p>Conducted individual and group projects, enhancing problem-solving and teamwork skills.</p>
      </div>

      {/* Computer Technology */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Computer Technology Specialization</h3>
        <p className="mb-4">
          Specialized in Computer Technology, with a focus on networking and protocols, covering:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>TCP/IP Protocol Suite</li>
          <li>Network Security</li>
          <li>Routing and Switching</li>
          {/* Add more Computer Technology topics as needed */}
        </ul>
        <p>
          Acquired hands-on experience through labs and projects, gaining proficiency in network design and administration.
        </p>
      </div>
    </div>
  );
};

export default Education;