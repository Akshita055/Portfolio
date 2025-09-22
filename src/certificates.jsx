const certificateImages = [
  "../src/certificates/SIH2K25.jpg", // First certificate
  "../src/certificates/Techstars2K25.jpg", // Second certificate
  "../src/certificates/Environmental Engineering.png", // Third certificate (new)
  "../src/certificates/SoftwareEngineering.png", // Fourth certificate (new)
  "../src/certificates/certificate1.png",
  "../src/certificates/Postman-API-certificate.png",
  "../src/certificates/Zero-to-One Hackathon CU.jpg"
];

const certificateHeadings = [
  "SIH2K24",
  "Techstarts Startup Weekend",
  "Environmental Engineering",
  "Software Engineering",
  "Programming basics",
  "Postman API",
  "Zero to One hackathon"
];

import { useState } from "react";
import Navbar from "./Navbar";

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFD600 60%, #fff 100%)",
        padding: 0,
        margin: 0,
        display: "block"
      }}
    >
      <Navbar />
      <div
        className="fade-in bounce-in scale-hover"
        style={{
          maxWidth: "1100px",
          margin: "48px auto",
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          padding: "48px 32px",
          position: "relative",
          width: "100%"
        }}
      >
        {/* Heading */}
        <h1
          className="heading-animate"
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "2.6rem",
            color: "#FFC300",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          My Certificates
        </h1>

        {/* Certificates grid */}
        <div>
          {/* First and second certificates side by side */}
          <div style={{display: "flex", gap: "12px", justifyContent: "center", marginBottom: "16px"}}>
            {certificateImages.slice(0,2).map((src, index) => (
              <div
                key={index}
                style={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "300px"}}
              >
                <div
                  className="scale-hover"
                  style={{
                    maxWidth: "300px",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                    border: "2px solid #FFD600",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                  onClick={() => openModal(src)}
                >
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <div style={{marginTop: "8px", fontWeight: 600, color: "#000", fontSize: "1.08rem", textAlign: "center"}}>
                  {certificateHeadings[index]}
                </div>
              </div>
            ))}
          </div>
          {/* Third and fourth certificates side by side on second line */}
          <div style={{display: "flex", gap: "12px", justifyContent: "center", marginBottom: "16px"}}>
            {certificateImages.slice(2,4).map((src, index) => (
              <div
                key={index + 2}
                style={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "300px"}}
              >
                <div
                  className="scale-hover"
                  style={{
                    maxWidth: "300px",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                    border: "2px solid #FFD600",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                  onClick={() => openModal(src)}
                >
                  <img
                    src={src}
                    alt={`Certificate ${index + 3}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <div style={{marginTop: "8px", fontWeight: 600, color: "#000", fontSize: "1.08rem", textAlign: "center"}}>
                  {certificateHeadings[index + 2]}
                </div>
              </div>
            ))}
          </div>
          {/* Remaining certificates, two per row, then last one alone if odd */}
          <div style={{display: "flex", gap: "12px", justifyContent: "center", marginBottom: "16px"}}>
            {certificateImages.slice(4,6).map((src, index) => (
              <div
                key={index + 4}
                style={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "300px"}}
              >
                <div
                  className="scale-hover"
                  style={{
                    maxWidth: "300px",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                    border: "2px solid #FFD600",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                  onClick={() => openModal(src)}
                >
                  <img
                    src={src}
                    alt={`Certificate ${index + 5}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <div style={{marginTop: "8px", fontWeight: 600, color: "#000", fontSize: "1.08rem", textAlign: "center"}}>
                  {certificateHeadings[index + 4]}
                </div>
              </div>
            ))}
          </div>
          {/* Last certificate alone if odd count */}
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "300px"}}>
              <div
                className="scale-hover"
                style={{
                  maxWidth: "300px",
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                  border: "2px solid #FFD600",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
                onClick={() => openModal(certificateImages[6])}
              >
                <img
                  src={certificateImages[6]}
                  alt={`Certificate 7`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "6px",
                  }}
                />
              </div>
              <div style={{marginTop: "8px", fontWeight: 600, color: "#000", fontSize: "1.08rem", textAlign: "center"}}>
                {certificateHeadings[6]}
              </div>
            </div>
          </div>
          {/* Modal for fullscreen certificate */}
          {modalOpen && (
            <div style={{position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999}}>
              <button onClick={closeModal} style={{position: "absolute", top: 32, right: 48, background: "#fff", color: "#FFC300", border: "none", borderRadius: "50%", width: 40, height: 40, fontSize: "1.8rem", fontWeight: 700, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.10)", zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center"}} aria-label="Close certificate">&times;</button>
              <img src={modalImg} alt="Certificate Fullscreen" style={{maxWidth: "90vw", maxHeight: "90vh", borderRadius: "18px", boxShadow: "0 8px 32px rgba(0,0,0,0.20)", background: "#fff", margin: "auto"}} />
            </div>
          )}
        </div>
      </div>
      <footer style={{width: '100%', background: '#fff', color: '#FFD600', textAlign: 'center', fontWeight: 700, fontSize: '1.08rem', padding: '24px 0', marginTop: '32px', borderTopLeftRadius: '18px', borderTopRightRadius: '18px', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)'}}>
        © 2025 Akshita Singh &nbsp;|&nbsp; <a href="mailto:akshita.singh@email.com" style={{color: '#FFD600', textDecoration: 'underline'}}>Contact</a>
      </footer>
    </div>
  );
};

export default Certificates;
