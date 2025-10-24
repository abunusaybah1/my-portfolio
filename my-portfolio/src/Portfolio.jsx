import React from "react";
import Hero from "../components/hero/Hero";
import Header from "../components/header/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Header />
			<div className="section_one">
				<Hero />
			</div>
			<div className="section_two">
				<About />
				<Skills />
			</div>
			<div className="section_three">
				<Projects />
			</div>
			<div className="section_four">
				<Contact />
			</div>
		</div>
	);
};

export default Portfolio;
