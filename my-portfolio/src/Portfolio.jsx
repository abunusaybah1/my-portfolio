import React from "react";
import Hero from "../components/hero/Hero";
import Header from "../components/header/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/projects/Projects";

const Portfolio = () => {
	return (
		<div className="portfolio">
			<div className="section_one">
				<Header />
				<Hero />
				<About />
			</div>
			<div className="section_two">
				<Skills />
			</div>
			<div className="section_three">
				<Projects />
			</div>
		</div>
	);
};

export default Portfolio;
