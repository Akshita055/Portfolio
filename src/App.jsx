

import "./App.css";
import Navbar from "./Navbar";
import characterImage from "./assets/Profile.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="portfolio-ref-theme" style={{minHeight: '100vh', background: 'linear-gradient(135deg, #FFD600 60%, #fff 100%)', padding: '0', margin: '0'}}>
      <Navbar />
      <div className="main-content fade-in bounce-in" style={{display: 'flex', flexDirection: 'row', background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', margin: '48px auto', maxWidth: '1100px', minHeight: '480px', overflow: 'hidden'}}>
        <div style={{flex: 1, padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h1 className="heading-animate" style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '3rem', marginBottom: '18px', color: '#222', lineHeight: 1.1}}>Hello, my name<br />is <span style={{fontFamily: 'Georgia, serif', color: '#222'}}>Akshita Singh</span></h1>
          <p style={{color: '#444', fontSize: '1.15rem', marginBottom: '18px'}}>I am a passionate Computer Science student aiming to grow as a front-end and Salesforce developer. I enjoy learning new technologies, solving real-world problems, and improving my coding skills through hands-on projects and challenges.</p>
          <div className="social-btns-row">
            {/* Social icons removed as requested */}
          </div>
          <div className="action-btns-row">
            <a href="https://github.com/Akshita055" target="_blank" rel="noopener noreferrer" className="btn-yellow">GitHub</a>
            <a href="https://www.linkedin.com/in/akshita-singh-33046b28a" target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
          </div>
        </div>
        <div style={{flex: 1, position: 'relative', background: '#FFD600', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <svg viewBox="0 0 400 400" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
            <path d="M0,0 Q200,80 400,0 L400,400 Q200,320 0,400 Z" fill="#fff" />
          </svg>
          <img src={characterImage} alt="Profile" style={{width: '260px', height: '260px', objectFit: 'cover', borderRadius: '50%', border: '6px solid #FFD600', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', position: 'relative', zIndex: 2}} />
        </div>
      </div>
      <div className="fade-in bounce-in" style={{maxWidth: '1100px', margin: '32px auto 0 auto', padding: '0 24px'}}>
        {/* Contact & Social Links Section */}
        <section className="scale-hover" style={{background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: '32px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: '18px'}}>Contact & Social Links</h2>
          <div style={{display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '18px'}}>
            <a href="mailto:akshita.singh@email.com" className="social-btn" style={{background: '#FFD600', borderRadius: '50px', padding: '8px 22px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', border: 'none', fontSize: '1.3rem'}} title="Email"><Mail size={28} /></a>
            <a href="https://github.com/Akshita055" target="_blank" rel="noopener noreferrer" className="social-btn" style={{background: '#FFD600', borderRadius: '50px', padding: '8px 22px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', border: 'none', fontSize: '1.3rem'}} title="GitHub"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/akshita-singh-33046b28a" target="_blank" rel="noopener noreferrer" className="social-btn" style={{background: '#FFD600', borderRadius: '50px', padding: '8px 22px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', border: 'none', fontSize: '1.3rem'}} title="LinkedIn"><Linkedin size={28} /></a>
            <a href="https://x.com/AkshitaSin19914?t=VIXGUfR6kPLv77xi-ERctg&s=08" target="_blank" rel="noopener noreferrer" className="social-btn" style={{background: '#FFD600', borderRadius: '50px', padding: '8px 22px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', border: 'none', fontSize: '1.3rem'}} title="X (Twitter)">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M22 5.924c-.793.352-1.646.59-2.54.697a4.48 4.48 0 0 0 1.965-2.47c-.87.516-1.835.89-2.863 1.093A4.48 4.48 0 0 0 12.07 9.5c0 .352.04.695.116 1.022-3.724-.187-7.027-1.97-9.24-4.68a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.927 2.003 3.733a4.48 4.48 0 0 1-2.03-.561v.057c0 2.172 1.545 3.984 3.594 4.397a4.48 4.48 0 0 1-2.025.077c.572 1.785 2.234 3.086 4.205 3.12A8.98 8.98 0 0 1 2 19.07a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.13 9.13 0 0 0 24 4.59a8.98 8.98 0 0 1-2.6.715z" fill="#222"/></svg>
            </a>
            <a href="https://www.instagram.com/akshitachauhan.05?igsh=MTEzcTZranc3aDFvZw==" target="_blank" rel="noopener noreferrer" className="social-btn" style={{background: '#FFD600', borderRadius: '50px', padding: '8px 22px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', border: 'none', fontSize: '1.3rem'}} title="Instagram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#222"/></svg>
            </a>
          </div>
          <a href="/Akshita_Resume.pdf" download className="btn-yellow" style={{marginTop: '8px', fontWeight: 700, fontSize: '1.08rem', borderRadius: '8px', padding: '12px 32px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', textDecoration: 'none', color: '#222', background: '#FFD600', border: 'none', display: 'inline-block', transition: 'background 0.2s, transform 0.2s'}}>Download Resume</a>
        </section>
        {/* Technical Skills Section */}
        <section className="scale-hover" style={{background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: '32px', padding: '32px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px'}}>
          <div style={{flex: 1, minWidth: '340px', maxWidth: '520px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h2 style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: '18px'}}>Technical Skills</h2>
            <ul style={{color: '#444', fontSize: '1.08rem', marginLeft: '18px', listStyle: 'none', padding: 0}}>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '14px'}}>
                <span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px'}}>•</span>
                <span><strong>Computer Language:</strong> Python, SQL, Java, JavaScript, HTML & CSS</span>
              </li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '14px'}}>
                <span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px'}}>•</span>
                <span><strong>Frameworks / Libraries:</strong> ReactJS, Tailwind CSS</span>
              </li>
              <li style={{display: 'flex', alignItems: 'center'}}>
                <span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px'}}>•</span>
                <span><strong>Tools & Technologies:</strong> Salesforce, GIT & GitHub, VS Code</span>
              </li>
            </ul>
          </div>
          <div style={{flex: 1, minWidth: '340px', maxWidth: '520px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div className="tech-skills-grid" style={{background: 'rgba(255,230,0,0.07)', borderRadius: '20px', padding: '32px 18px', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', width: '100%', maxWidth: '480px'}}>
              {/* All icons scattered, no headings */}
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #ffe600)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>Python</div>
              </a>
              <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" title="SQL" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #ffe600)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>SQL</div>
              </a>
              <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" title="Java" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #ffe600)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>Java</div>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" title="JavaScript" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #ffe600)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>JS</div>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" title="HTML5" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #ffe600)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>HTML5</div>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" title="CSS3" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #ffe600)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>CSS3</div>
              </a>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" title="ReactJS" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #00b4ff)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>ReactJS</div>
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailwind CSS" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #00b4ff)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>Tailwind</div>
              </a>
              <a href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer" title="Salesforce" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" alt="Salesforce" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #e0e0e0)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>Salesforce</div>
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" title="Git" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #e0e0e0)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>Git</div>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #e0e0e0)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>GitHub</div>
              </a>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" title="VS Code" style={{textAlign: 'center', textDecoration: 'none'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" style={{width: '38px', height: '38px', transition: 'transform 0.2s', filter: 'drop-shadow(0 2px 4px #e0e0e0)'}} />
                <div style={{fontSize: '0.85rem', color: '#222'}}>VS Code</div>
              </a>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section className="scale-hover" style={{background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: '32px', padding: '32px'}}>
          <h2 style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: '18px'}}>Education</h2>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            <li style={{marginBottom: '18px', display: 'flex', alignItems: 'flex-start'}}>
              <span style={{color: '#FFD600', fontSize: '1.5em', marginRight: '12px', marginTop: '2px'}}>•</span>
              <span><strong>Bachelor of Technology in Computer Science</strong><br />
              <span style={{color: '#888'}}>GLA University, Mathura — 8.12 CGPA (Expected June 2027)</span></span>
            </li>
            <li style={{marginBottom: '18px', display: 'flex', alignItems: 'flex-start'}}>
              <span style={{color: '#FFD600', fontSize: '1.5em', marginRight: '12px', marginTop: '2px'}}>•</span>
              <span><strong>Intermediate</strong><br />
              <span style={{color: '#888'}}>Lucknow Public School, Raebareli — 82.2% (May 2023)</span></span>
            </li>
            <li style={{display: 'flex', alignItems: 'flex-start'}}>
              <span style={{color: '#FFD600', fontSize: '1.5em', marginRight: '12px', marginTop: '2px'}}>•</span>
              <span><strong>High School</strong><br />
              <span style={{color: '#888'}}>Lucknow Public School, Raebareli — 90.2% (May 2021)</span></span>
            </li>
          </ul>
        </section>
        {/* Experience Section */}
        <section className="scale-hover" style={{background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: '32px', padding: '32px'}}>
          <h2 style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: '18px'}}>Training & Experiences</h2>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            <li style={{marginBottom: '18px', display: 'flex', alignItems: 'flex-start'}}>
              <span style={{color: '#FFD600', fontSize: '1.5em', marginRight: '12px', marginTop: '2px'}}>•</span>
              <span><strong>Salesforce Developer Intern</strong><br />
              <span style={{color: '#888'}}>Aiqube Technologies | May 2025 – July 2025</span>
                <ul style={{marginLeft: '18px', color: '#444', listStyle: 'none'}}>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}><span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px', marginTop: '2px'}}>•</span>Worked as a Salesforce Developer Intern at Aiqube Technologies for two months.</li>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}><span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px', marginTop: '2px'}}>•</span>Collaborated with the team on building multiple projects in Salesforce, gaining hands-on experience with custom objects, flows, and Lightning components.</li>
                </ul>
              </span>
            </li>
            <li style={{marginBottom: '18px', display: 'flex', alignItems: 'flex-start'}}>
              <span style={{color: '#FFD600', fontSize: '1.5em', marginRight: '12px', marginTop: '2px'}}>•</span>
              <span><strong>Frontend Developer Intern</strong><br />
              <span style={{color: '#888'}}>Baoiam Innovations | June 2024 – August 2024</span>
                <ul style={{marginLeft: '18px', color: '#444', listStyle: 'none'}}>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}><span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px', marginTop: '2px'}}>•</span>Worked as a Frontend Intern at Baoiam Innovations for two months.</li>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}><span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px', marginTop: '2px'}}>•</span>Developed and maintained a responsive website for a beauty and cosmetics brand using React.js and Tailwind CSS.</li>
                </ul>
              </span>
            </li>
            <li style={{display: 'flex', alignItems: 'flex-start'}}>
              <span style={{color: '#FFD600', fontSize: '1.5em', marginRight: '12px', marginTop: '2px'}}>•</span>
              <span><strong>DevOps – Cloud Computing</strong><br />
              <span style={{color: '#888'}}>Job Oriented Value-Added Course | June 2025 – July 2025</span>
                <ul style={{marginLeft: '18px', color: '#444', listStyle: 'none'}}>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}><span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px', marginTop: '2px'}}>•</span>Completed a certified value-added course conducted by GLA University & Coding Blocks, focusing on CI/CD, automation, containerization, and cloud deployment.</li>
                </ul>
              </span>
            </li>
          </ul>
        </section>
        {/* Activities Section */}
  <section className="scale-hover" style={{background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: '32px', padding: '32px'}}>
          <h2 style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: '18px'}}>Co-curricular Activities</h2>
          <ul style={{color: '#444', fontSize: '1.08rem', marginLeft: '18px', listStyle: 'none', padding: 0}}>
            <li style={{display: 'flex', alignItems: 'flex-start'}}><span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px', marginTop: '2px'}}>•</span>Participated in a 24-hour Hackathon at Chandigarh University focused on startup ideas and innovation, collaborated with a team to ideate and develop a prototype addressing real-world problems.</li>
            <li style={{display: 'flex', alignItems: 'flex-start'}}><span style={{color: '#FFD600', fontSize: '1.2em', marginRight: '8px', marginTop: '2px'}}>•</span>Attended the Techstars Startup Weekend at GLA University, presented a startup idea, and was selected among the top 10 teams for innovative business solutions.</li>
          </ul>
        </section>
      </div>
      
      <footer style={{width: '100%', background: '#fff', color: '#FFD600', textAlign: 'center', fontWeight: 700, fontSize: '1.08rem', padding: '24px 0', marginTop: '32px', borderTopLeftRadius: '18px', borderTopRightRadius: '18px', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)'}}>
        © 2025 Akshita Singh &nbsp;|&nbsp; <a href="mailto:akshita.singh@email.com" style={{color: '#FFD600', textDecoration: 'underline'}}>Contact</a>
      </footer>
    </div>
  );
};

export default Portfolio;
