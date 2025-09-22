import { Mail, Phone, Linkedin, Github } from "lucide-react";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <div style={{minHeight: "100vh", background: "linear-gradient(135deg, #FFD600 60%, #fff 100%)", padding: 0, margin: 0, display: "block"}}>
      <Navbar />
      <div
        className="fade-in bounce-in scale-hover"
        style={{
          background: "#fff",
          borderRadius: "1.8rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          padding: "2.5rem 2rem",
          maxWidth: "520px",
          width: "100%",
          color: "#222",
          position: "relative",
          fontFamily: "Segoe UI, Arial, sans-serif",
          margin: "48px auto"
        }}
      >
        <h2
          className="heading-animate"
          style={{
            color: "#FFC300",
            fontWeight: 900,
            fontSize: "2rem",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
            textAlign: "left",
            fontFamily: "Georgia, serif",
          }}
        >
          Let&apos;s talk
        </h2>
        <p
          style={{
            marginBottom: "1.2rem",
            color: "#444",
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: "1.5",
          }}
        >
          To request a session or contact me, fill out the form below and I&apos;ll get back to you soon.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for reaching out!");
            e.target.reset();
          }}
          style={{
            padding: "1.5rem",
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            marginBottom: "1.5rem",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "0.85rem",
              marginBottom: "1rem",
              borderRadius: "0.6rem",
              border: "1px solid #FFD600",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: "100%",
              padding: "0.85rem",
              marginBottom: "1rem",
              borderRadius: "0.6rem",
              border: "1px solid #FFD600",
              fontSize: "1rem",
            }}
          />
          <textarea
            placeholder="Your Message"
            style={{
              width: "100%",
              padding: "0.85rem",
              marginBottom: "1.2rem",
              borderRadius: "0.6rem",
              border: "1px solid #FFD600",
              minHeight: "90px",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            className="scale-hover"
            style={{
              background: "#FFC300",
              color: "#222",
              fontWeight: 700,
              border: "none",
              borderRadius: "0.6rem",
              padding: "0.85rem 2rem",
              cursor: "pointer",
              fontSize: "1.05rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              transition: "background 0.2s, transform 0.2s",
            }}
          >
            Send Message
          </button>
        </form>
        {/* Social icons centered + evenly spaced */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <a
            href="https://github.com/Akshita055"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={32} color="#FFC300" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshita-singh-33046b28a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={32} color="#FFC300" />
          </a>
          <a
            href="https://instagram.com/your_instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"
              style={{
                width: 32,
                height: 32,
                filter:
                  "invert(60%) sepia(100%) saturate(500%) hue-rotate(10deg)",
              }}
            />
          </a>
        </div>
        {/* Contact details */}
        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
            color: "#FFC300",
            fontSize: "1.05rem",
            fontWeight: 700,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", justifyContent: "center" }}>
              <Mail size={22} color="#FFC300" />
              <a
                href="mailto:akshita.singh@email.com"
                style={{ color: "#FFC300", textDecoration: "underline" }}
              >
                akshita.singh@email.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", justifyContent: "center" }}>
              <Phone size={22} color="#FFC300" />
              <a
                href="tel:+917458868344"
                style={{ color: "#FFC300", textDecoration: "underline" }}
              >
                +91 7458868344
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer style={{width: '100%', background: '#fff', color: '#FFD600', textAlign: 'center', fontWeight: 700, fontSize: '1.08rem', padding: '24px 0', marginTop: '32px', borderTopLeftRadius: '18px', borderTopRightRadius: '18px', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)'}}>
        © 2025 Akshita Singh &nbsp;|&nbsp; <a href="mailto:akshita.singh@email.com" style={{color: '#FFD600', textDecoration: 'underline'}}>Contact</a>
      </footer>
    </div>
  );
};

export default ContactUs;
