


import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav 
        className="navbar sticky-navbar" 
        style={{
          background: '#fff',
          boxShadow: 'none',
          padding: '14px 38px 12px 12px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Monoton&family=Orbitron:wght@700&family=Sacramento&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Monoton&family=Orbitron:wght@700&family=Sacramento&family=Indie+Flower&family=Fredoka+One&family=Great+Vibes&family=Permanent+Marker&family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Lobster&family=Pacifico&family=Righteous&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Satisfy&family=Chewy&family=Rubik+Moonrocks&display=swap" rel="stylesheet" />
        <div className="navbar-logo" style={{fontFamily: 'Rubik Moonrocks, Chewy, Satisfy, Dancing Script, cursive', fontWeight: 700, fontSize: '2.2rem', letterSpacing: '2px', background: 'linear-gradient(90deg, #FFD600 0%, #FFB300 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', marginRight: '32px', userSelect: 'none'}}>
          Akshita Singh
        </div>
        <ul 
          className="navbar-list"
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontWeight: 700,
            fontSize: '1.08rem'
          }}
        >
          <li><Link to="/" className="navbar-link" style={{fontWeight: 700}}>About</Link></li>
          <li><Link to="/projects" className="navbar-link" style={{fontWeight: 700}}>Projects</Link></li>
          <li><Link to="/certificates" className="navbar-link" style={{fontWeight: 700}}>Certificates</Link></li>
          <li><Link to="/contactus" className="navbar-link" style={{fontWeight: 700}}>Contact me</Link></li>
        </ul>
        {/* Hamburger for mobile */}
        <button
          className="navbar-hamburger"
          aria-label="Open menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            marginLeft: '18px',
            zIndex: 100
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-icon" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px'}}>
            <span style={{width: '28px', height: '4px', background: '#FFD600', margin: '3px 0', borderRadius: '2px', display: 'block'}}></span>
            <span style={{width: '28px', height: '4px', background: '#FFD600', margin: '3px 0', borderRadius: '2px', display: 'block'}}></span>
            <span style={{width: '28px', height: '4px', background: '#FFD600', margin: '3px 0', borderRadius: '2px', display: 'block'}}></span>
          </span>
        </button>
      </nav>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="navbar-mobile-menu" style={{
          position: 'absolute',
          top: '54px',
          right: '18px',
          minWidth: '160px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
          zIndex: 999,
          padding: '12px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: '0'}}>
            <li><Link to="/" className="navbar-link" style={{fontSize: '1.08rem', color: '#FFD600', textDecoration: 'none', fontWeight: 700, padding: '12px 24px', textAlign: 'left', display: 'block'}} onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/projects" className="navbar-link" style={{fontSize: '1.08rem', color: '#FFD600', textDecoration: 'none', fontWeight: 700, padding: '12px 24px', textAlign: 'left', display: 'block'}} onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/certificates" className="navbar-link" style={{fontSize: '1.08rem', color: '#FFD600', textDecoration: 'none', fontWeight: 700, padding: '12px 24px', textAlign: 'left', display: 'block'}} onClick={() => setMenuOpen(false)}>Certificates</Link></li>
            <li><Link to="/contactus" className="navbar-link" style={{fontSize: '1.08rem', color: '#FFD600', textDecoration: 'none', fontWeight: 700, padding: '12px 24px', textAlign: 'left', display: 'block'}} onClick={() => setMenuOpen(false)}>Contact me</Link></li>
          </ul>
        </div>
      )}
      <style>{`
        .navbar-link {
          color: #FFD600 !important;
          text-decoration: none;
          transition: color 0.2s, text-decoration 0.2s;
          padding-bottom: 2px;
        }
        .navbar-link:hover {
          color: #222 !important;
          text-decoration: underline;
        }
        @media (max-width: 700px) {
          .navbar-list {
            display: none !important;
          }
          .navbar-hamburger {
            display: block !important;
            position: absolute;
            top: 15px;
            right: 13px;
            size: 30px;
          }
          .navbar-logo {
            font-size: 1.9rem !important;
            margin-right: 12px !important;
          }
        }
      `}</style>

      {/* Extra space below navbar */}
      <div style={{height: '20px'}}></div>
    </>
  );
};

export default Navbar;
