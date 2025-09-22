
import Navbar from "./Navbar";

const Projects = () => {
  // ...existing code...
  const projects = [
    {
      title: "Divueens – Beauty & Cosmetics Website",
      description:
        "Worked as a Frontend Intern, building a fully responsive e-commerce website. Collaborated with the team to enhance UI/UX and cross-device compatibility.",
      link: "https://github.com/Akshita055/Frontend-Internship"
    },
    {
      title: "Aiqube Health Org (Salesforce Project)",
      description:
        "Developed a Patient Acquisition System in Salesforce to streamline healthcare operations. Automated lead-to-patient conversion flows and built custom objects (Doctors, Hospitals, Appointments).",
      link: "https://github.com/Akshita055/Salesforce-AiQube-Org-"
    },
    {
      title: "Avrutti – Plastic Segregation Project (SIH)",
      description:
        "Contributed to a startup idea focused on AI/ML and IoT for plastic segregation. Built a responsive website showcasing real-time waste management solutions.",
      link: "https://github.com/Akshita055/finance-app"
    }
  ];

  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #FFD600 60%, #fff 100%)', padding: '0', margin: '0'}}>
      <Navbar />
      <div className="fade-in bounce-in scale-hover" style={{maxWidth: '1100px', margin: '48px auto', background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', padding: '48px 32px', position: 'relative', overflow: 'visible'}}>
        <div style={{width: '100%', marginBottom: '32px'}}>
          <h1 className="heading-animate" style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2.5rem', color: '#FFC300', textAlign: 'center', margin: 0, paddingTop: '24px', paddingBottom: '24px'}}>My Projects</h1>
        </div>
        <div style={{display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap'}}>
          {projects.map((project, idx) => (
            <div key={idx} className="scale-hover" style={{background: '#fff', borderRadius: '18px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '32px', maxWidth: '340px', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <h2 style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px', color: '#222'}}>{project.title}</h2>
              <p style={{color: '#444', fontSize: '1rem', marginBottom: '16px'}}>{project.description}</p>
              <a href={project.link} className="btn-view scale-hover" style={{background: '#FFD600', color: '#222', fontWeight: 700, borderRadius: '8px', padding: '8px 20px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', alignSelf: 'flex-start'}} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
      <footer style={{width: '100%', background: '#fff', color: '#FFD600', textAlign: 'center', fontWeight: 700, fontSize: '1.08rem', padding: '24px 0', marginTop: '32px', borderTopLeftRadius: '18px', borderTopRightRadius: '18px', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)'}}>
        © 2025 Akshita Singh &nbsp;|&nbsp; <a href="mailto:akshita.singh@email.com" style={{color: '#FFD600', textDecoration: 'underline'}}>Contact</a>
      </footer>
    </div>
  );
};

export default Projects;
