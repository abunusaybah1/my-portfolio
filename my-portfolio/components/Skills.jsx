import React from "react";
import {
	DiHtml5,
	DiCss3,
	DiJavascript,
	DiReact,
	DiGit,
	DiGithub,
	DiWordpress,
} from "react-icons/di";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";

const Skills = () => {
	return (
		<div className="skills">
			<h4>Skills</h4>
			<div className="buttons">
				<button>
					<DiHtml5 className="icon" /> HTML
				</button>
				<button>
					<DiCss3 className="icon" /> CSS
				</button>
				<button>
					<DiJavascript className="icon" /> JavaScript
				</button>
				<button>
					<DiReact className="icon" /> ReactJS
				</button>
				<button>
					<SiTailwindcss className="icon" /> TailwindCSS
				</button>
				<button>
					<SiTypescript className="icon" /> TypeScript
				</button>
				<button>
					<DiGit className="icon" /> Git
				</button>
				<button>
					<DiGithub className="icon" /> Github
				</button>
				<button>
					<DiWordpress className="icon" /> Wordpress
				</button>
				<button>
					<GiTeacher className="icon" /> Tutoring
				</button>
			</div>
		</div>
	);
};

export default Skills;
