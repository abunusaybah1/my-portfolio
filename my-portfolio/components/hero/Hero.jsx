import React from "react";
import Advert from "./Advert";
import Head from "./Head";
import TextEffect from "./TextEffect";
// import Image from "./Image";
import Avatar from "../../src/assets/avatar_abdul.png";

const Hero = () => {
	return (
		<div className="hero">
			<div className="left">
				<Head></Head>
				<TextEffect></TextEffect>
				<Advert></Advert>
			</div>
			<img id="image" src={Avatar} alt="Abdulmatin Avatar" />
		</div>
	);
};

export default Hero;
