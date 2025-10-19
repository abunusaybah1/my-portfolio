import React from "react";
import { ReactTyped } from "react-typed";

const TextEffect = () => {
	return (
		<p id="texteffect">
			&ndash; {""}
			<ReactTyped
				strings={[
					"Frontend Developer",
					"Software Engineer",
					"Backend Enthusiast",
				]}
				typeSpeed={70}
				backSpeed={40}
				backDelay={100}
				 loop
			/>
		</p>
	);
};

export default TextEffect;
