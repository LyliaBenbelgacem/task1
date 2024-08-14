import React from 'react';

const Post = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="post">Post:</label>
      <select id="post" name="post" value={value} onChange={onChange}>
        <option value="project-manager">Project Manager</option>
        <option value="back-end-developer">Back-End Developer</option>
        <option value="front-end-developer">Front-End Developer</option>
        <option value="devops-engineer">DevOps Engineer</option>
        <option value="ai-engineer">AI Engineer</option>
        <option value="data-analyst">Data Analyst</option>
      </select>
    </div>
  );
};

export default Post;
