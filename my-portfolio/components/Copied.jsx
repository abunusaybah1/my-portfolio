import React, { useEffect, useState } from "react";

// Single-file React component for a dark-themed frontend dev portfolio
// - Plain CSS injected into the document head (no frameworks)
// - Flexbox layout
// - Dark green (#0b3d2e) and white accents
// - Sections: Hero, About, Skills, Projects, Experience, Contact
// - Faceless SVG placeholders for images

export default function Portfolio() {
	// simple typing effect words
	const words = [
		"Frontend Developer",
		"React.js Enthusiast",
		"UI/UX Lover",
		"Open to Collaborations",
	];
	const [wordIndex, setWordIndex] = useState(0);
	const [display, setDisplay] = useState("");

	useEffect(() => {
		// inject CSS once
		const css = `
      :root{ --bg:#070709; --card:#0f1112; --muted:#9aa3a6; --accent:#0b3d2e; --accent-2:#19664f; }
      *{box-sizing:border-box}
      html,body,#root{height:100%}
      body{
        margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        background: radial-gradient(1200px 600px at 10% 10%, rgba(11,61,46,0.16), transparent), var(--bg);
        color:#e6eef0; -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale; line-height:1.5;
      }
      .container{max-width:1100px;margin:48px auto;padding:24px}
      header{display:flex;align-items:center;justify-content:space-between;gap:16px}
      .brand{display:flex;align-items:center;gap:12px}
      .logo{width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,var(--accent) 0%, var(--accent-2) 100%);display:flex;align-items:center;justify-content:center;font-weight:700}
      .brand h1{margin:0;font-size:1.05rem}
      nav{display:flex;gap:12px}
      nav a{color:var(--muted);text-decoration:none;padding:8px;border-radius:8px}
      nav a:hover{color:white;background:rgba(255,255,255,0.02)}

      .hero{display:flex;gap:32px;align-items:center;margin-top:28px}
      .hero-left{flex:1}
      .hero-right{width:320px;flex-shrink:0}
      .eyebrow{display:inline-block;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.03);color:var(--muted);font-size:0.85rem}
      .title{font-size:2.1rem;margin:12px 0 8px}
      .lead{color:var(--muted);max-width:56ch}
      .cta{margin-top:18px;display:flex;gap:12px}
      .btn{padding:10px 14px;border-radius:10px;border:0;cursor:pointer;font-weight:600}
      .btn-primary{background:linear-gradient(90deg,var(--accent),var(--accent-2));color:white}
      .btn-ghost{background:transparent;color:var(--muted);border:1px solid rgba(255,255,255,0.04)}

      .card{background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent);border:1px solid rgba(255,255,255,0.03);padding:18px;border-radius:12px}
      .faceless{width:100%;height:320px;border-radius:10px;background:linear-gradient(180deg, rgba(11,61,46,0.12), rgba(0,0,0,0.12));display:flex;align-items:center;justify-content:center}

      section{margin-top:28px}
      .grid{display:flex;gap:18px}

      /* Skills */
      .skills{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
      .skill{padding:8px 12px;border-radius:999px;background:rgba(255,255,255,0.03);font-weight:600}

      /* Projects */
      .projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;margin-top:12px}
      .project-card{display:flex;flex-direction:column;gap:12px;padding:14px;border-radius:10px;background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent);border:1px solid rgba(255,255,255,0.03)}
      .tags{display:flex;gap:8px;flex-wrap:wrap}
      .tag{font-size:0.8rem;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.02)}

      /* Experience */
      .exp-item{display:flex;gap:14px;align-items:flex-start}
      .exp-item .dot{width:56px;height:56px;border-radius:10px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:700}

      /* Contact */
      form{display:flex;flex-direction:column;gap:12px}
      input,textarea{background:transparent;border:1px solid rgba(255,255,255,0.04);padding:12px;border-radius:8px;color:inherit}

      footer{margin-top:36px;color:var(--muted);font-size:0.9rem;display:flex;justify-content:space-between;align-items:center}

      /* responsiveness */
      @media (max-width:880px){
        .hero{flex-direction:column}
        .hero-right{width:100%}
      }

      /* subtle fade-in */
      .reveal{opacity:0;transform:translateY(8px);animation:reveal 700ms forwards}
      @keyframes reveal{to{opacity:1;transform:translateY(0)}}

      /* typing cursor */
      .typing{border-right:2px solid rgba(255,255,255,0.12);padding-right:6px}
    `;

		const style = document.createElement("style");
		style.id = "portfolio-styles";
		style.innerHTML = css;
		document.head.appendChild(style);

		return () => {
			// cleanup
			const s = document.getElementById("portfolio-styles");
			if (s) s.remove();
		};
	}, []);

	// typing effect logic
	useEffect(() => {
		let mounted = true;
		const current = words[wordIndex];
		let pos = 0;
		let forward = true;

		function tick() {
			if (!mounted) return;
			if (forward) {
				pos++;
				setDisplay(current.slice(0, pos));
				if (pos === current.length) {
					forward = false;
					setTimeout(tick, 1200);
					return;
				}
			} else {
				pos--;
				setDisplay(current.slice(0, pos));
				if (pos === 0) {
					forward = true;
					setWordIndex((i) => (i + 1) % words.length);
					return;
				}
			}
			setTimeout(tick, forward ? 80 : 40);
		}

		const t = setTimeout(tick, 300);
		return () => {
			mounted = false;
			clearTimeout(t);
		};
	}, [wordIndex]);

	return (
		<div className="container">
			<header className="reveal">
				<div className="brand">
					<div className="logo">IA</div>
					<div>
						<h1>Ismail Abdulmatiin</h1>
						<div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
							Frontend Developer • React.js
						</div>
					</div>
				</div>
				<nav>
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#experience">Experience</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>

			<main>
				<section className="hero reveal" style={{ alignItems: "center" }}>
					<div className="hero-left">
						<div className="eyebrow">Hi, I build UI</div>
						<h2 className="title">
							I’m Ismail — a{" "}
							<span style={{ color: "var(--accent)" }}>
								Front-end Developer
							</span>
						</h2>
						<p className="lead">
							I build accessible, responsive web interfaces with React.js and
							modern CSS. I focus on clean code, delightful UX, and
							pixel-perfect UIs.
						</p>

						<div style={{ marginTop: 12 }}>
							<span
								className="typing"
								style={{ fontWeight: 700, fontSize: "1rem" }}>
								{display}
							</span>
						</div>

						<div className="cta">
							<button className="btn btn-primary">View Resume</button>
							<a className="btn btn-ghost" href="#contact">
								Hire Me
							</a>
						</div>

						<div style={{ marginTop: 20 }} className="card">
							<strong>Quick stats</strong>
							<div style={{ display: "flex", gap: 12, marginTop: 10 }}>
								<div style={{ flex: 1 }}>
									<div style={{ fontSize: "1.3rem", fontWeight: 700 }}>6+</div>
									<div style={{ color: "var(--muted)" }}>Projects</div>
								</div>
								<div style={{ flex: 1 }}>
									<div style={{ fontSize: "1.3rem", fontWeight: 700 }}>
										2 yrs
									</div>
									<div style={{ color: "var(--muted)" }}>Experience</div>
								</div>
							</div>
						</div>
					</div>

					<aside className="hero-right">
						<div className="card">
							<div className="faceless">
								{/* faceless svg placeholder */}
								<svg
									width="140"
									height="140"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<rect
										x="2"
										y="3"
										width="20"
										height="18"
										rx="3"
										fill="#05231D"
									/>
									<circle cx="12" cy="10" r="3" fill="#0b3d2e" />
									<rect
										x="7"
										y="14"
										width="10"
										height="2"
										rx="1"
										fill="#123E2C"
									/>
								</svg>
							</div>
						</div>

						<div style={{ height: 18 }} />

						<div className="card">
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<div>
									<div style={{ fontSize: "1.05rem", fontWeight: 700 }}>
										Contact
									</div>
									<div style={{ color: "var(--muted)", marginTop: 6 }}>
										Lagos, Nigeria
									</div>
								</div>
								<div style={{ textAlign: "right", color: "var(--muted)" }}>
									<div>WhatsApp</div>
									<div style={{ fontWeight: 700 }}>08164758649</div>
								</div>
							</div>
						</div>
					</aside>
				</section>

				<section id="about" className="reveal">
					<div style={{ display: "flex", gap: 18, alignItems: "center" }}>
						<div style={{ flex: 1 }}>
							<h3>About Me</h3>
							<p style={{ color: "var(--muted)" }}>
								I’m a frontend-focused developer who loves turning design into
								interactive, accessible user interfaces. I specialize in
								React.js, component-driven architecture, and modern CSS with
								strong emphasis on performance and maintainability.
							</p>

							<div style={{ marginTop: 12 }} className="card">
								<strong>Tools I use</strong>
								<div
									style={{
										marginTop: 8,
										display: "flex",
										gap: 8,
										flexWrap: "wrap",
									}}>
									<div className="tag">React.js</div>
									<div className="tag">TypeScript (optional)</div>
									<div className="tag">HTML & CSS</div>
									<div className="tag">Vite / Create React App</div>
									<div className="tag">Git</div>
								</div>
							</div>
						</div>

						<div style={{ width: 260 }} className="card">
							<h4 style={{ marginTop: 0 }}>Quick facts</h4>
							<ul style={{ paddingLeft: 18, color: "var(--muted)" }}>
								<li>Open to remote work</li>
								<li>Prefers CSS + Flexbox</li>
								<li>Faceless design assets</li>
							</ul>
						</div>
					</div>
				</section>

				<section id="skills" className="reveal">
					<h3>Skills</h3>
					<div className="skills">
						{[
							"HTML",
							"CSS (Flexbox)",
							"Responsive Design",
							"React.js",
							"JavaScript (ES6+)",
							"Accessibility",
							"Git",
							"Testing (Jest)",
						].map((s) => (
							<div key={s} className="skill">
								{s}
							</div>
						))}
					</div>
				</section>

				<section id="projects" className="reveal">
					<h3>Selected Projects</h3>
					<div className="projects-grid">
						{[1, 2, 3, 4].map((i) => (
							<article key={i} className="project-card">
								<div
									style={{
										height: 120,
										borderRadius: 8,
										background:
											"linear-gradient(180deg, rgba(11,61,46,0.14), rgba(0,0,0,0.12))",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}>
									<svg width="200" height="80" viewBox="0 0 200 80">
										<rect width="200" height="80" rx="8" fill="#051B17" />
									</svg>
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<h4 style={{ margin: 0 }}>Project {i}</h4>
									<div style={{ color: "var(--muted)" }}>React • CSS</div>
								</div>
								<p style={{ color: "var(--muted)", margin: 0 }}>
									Short description about the project — the problem it solves
									and the tech used.
								</p>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<div className="tags">
										<span className="tag">UI</span>
										<span className="tag">Responsive</span>
									</div>
									<div style={{ display: "flex", gap: 8 }}>
										<a className="btn btn-ghost" href="#">
											Live
										</a>
										<a className="btn btn-ghost" href="#">
											Code
										</a>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section id="experience" className="reveal">
					<h3>Experience</h3>
					<div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
						<div className="card exp-item">
							<div className="dot">AL</div>
							<div>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										gap: 12,
									}}>
									<div>
										<strong>Frontend Developer — Almattech Academy</strong>
										<div style={{ color: "var(--muted)" }}>
											Jun 2024 — Present
										</div>
									</div>
									<div style={{ color: "var(--muted)" }}>Lagos, NG</div>
								</div>
								<p style={{ color: "var(--muted)", marginTop: 8 }}>
									Built and maintained course landing pages and interactive code
									examples used in live training.
								</p>
							</div>
						</div>

						<div className="card exp-item">
							<div className="dot">PR</div>
							<div>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										gap: 12,
									}}>
									<div>
										<strong>Project — Personal</strong>
										<div style={{ color: "var(--muted)" }}>2023 — 2024</div>
									</div>
									<div style={{ color: "var(--muted)" }}>Remote</div>
								</div>
								<p style={{ color: "var(--muted)", marginTop: 8 }}>
									Built prototypes and small apps to practice advanced CSS and
									React patterns.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="contact" className="reveal">
					<h3>Contact</h3>
					<div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
						<div style={{ flex: 1, minWidth: 280 }} className="card">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									alert("Thanks — this form is demo-only.");
								}}>
								<label style={{ fontSize: 12, color: "var(--muted)" }}>
									Name
								</label>
								<input placeholder="Your name" />
								<label style={{ fontSize: 12, color: "var(--muted)" }}>
									Email
								</label>
								<input placeholder="you@example.com" />
								<label style={{ fontSize: 12, color: "var(--muted)" }}>
									Message
								</label>
								<textarea rows={5} placeholder="How can I help?" />
								<div style={{ display: "flex", gap: 8, marginTop: 8 }}>
									<button type="submit" className="btn btn-primary">
										Send Message
									</button>
									<a
										className="btn btn-ghost"
										href="mailto:support@almattech.com.ng">
										Email
									</a>
								</div>
							</form>
						</div>

						<div style={{ width: 320 }} className="card">
							<h4 style={{ marginTop: 0 }}>Get in touch</h4>
							<p style={{ color: "var(--muted)" }}>
								Prefer WhatsApp? <br /> 08164758649
							</p>
							<div style={{ height: 12 }} />
							<div style={{ display: "flex", gap: 8 }}>
								<a className="btn btn-ghost" href="#">
									LinkedIn
								</a>
								<a className="btn btn-ghost" href="#">
									GitHub
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="reveal">
				<div>© {new Date().getFullYear()} Ismail Abdulmatiin</div>
				<div style={{ color: "var(--muted)" }}>
					Built with React • Dark green theme
				</div>
			</footer>
		</div>
	);
}
