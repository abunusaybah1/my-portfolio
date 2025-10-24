import React from "react";
import {
	FaTwitter,
	FaWhatsapp,
	FaFacebook,
	FaYoutube,
	FaGithub,
} from "react-icons/fa";

const Contact = () => {
	return (
		<div className="contact">
			<h4>Contact me</h4>
			<p>
				You've got a project/product idea and you're interested in hiring me, or
				you need a colaborator on a project?
			</p>
			<button id="hire">Hire Me</button>
			<h4> Or connect with me on socials:</h4>
			<div className="socials">
				<a href="" className="social">
					<FaTwitter />
				</a>
				<a href="" className="social">
					<FaGithub />
				</a>
				<a href="" className="social">
					<FaWhatsapp />
				</a>
				<a href="" className="social">
					<FaFacebook />
				</a>
				<a href="" className="social">
					<FaYoutube />
				</a>
			</div>
		</div>
	);
};

export default Contact;
