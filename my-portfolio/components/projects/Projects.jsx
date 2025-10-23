import React from "react";
import projects from "../../src/projects.json";

const Projects = () => {
	return (
		<div className="projects">
			<h4>My Projects</h4>
			<div className="project">
				{projects.map((project) => (
					<div className="each" key={project.id}>
						<img src={project.image} alt="portfolio" className="image" />
						<h4 className="title">{project.title}</h4>
						<p className="desc">{project.desc}</p>
						<div className="buttons">
							<a href={project.live_demo} className="live_demo">
								Live demo
							</a>
							<a href={project.source_code} className="source_code">
								Source code
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
