import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'critter-tails',
      description: 'MERN Stack',
      link: "https://crittertails.herokuapp.com/",
      repo: "https://github.com/jrjensen14/critter_tails.git"
    },
    {
      name: 'blog-site',
      description: 'MERN Stack',
      link: "https://thawing-refuge-08157.herokuapp.com",
      repo: "https://github.com/jrjensen14/blog_site.git"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://lernantino.github.io/run-buddy/",
      repo: "https://github.com/jrjensen14/run-buddy.git"
    },
    {
      name: 'SLP-Goalden',
      description: 'Node/IoT',
      link: "https://mighty-falls-97052.herokuapp.com/",
      repo: "https://github.com/jrjensen14/slp-goalden.git"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
