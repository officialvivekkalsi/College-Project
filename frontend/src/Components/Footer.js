import React from "react";
function Footer() {
  const Degrees = [
    "Arts",
    "Business",
    "Administration",
    "Engineering",
    "Science",
    "Fine Arts",
    "Informational Technology",
    "Law",
    "Management Studies",
    "BCA",
    "Medical",
    "Bachelor of Science in Business (BSBA)",
    "Bachelor of Engineering Technology (BSET)",
    "Bachelor of Technology (B.Tech. or B.Tech.)",
    "International Business Economics (BIBE)",
    "Bachelor of Business Administration (BBA)",
    "Master of Chemistry (MChem)",
    "Bachelors of Surgery",
  ];
  // <i class="fa-light fa-book"></i>
  return (
    <footer className="footer">
      <h3 className="footer-title">
        <i className="fa-solid fa-stapler" />
        The University of Sixty Degree
      </h3>
      <hr />
      <h4 className="footer-title">College Degrees</h4>
      <div className="degree">
        {Degrees.map((degrees, i) => (
          <span key={i} className="degree-title">
            {degrees}
          </span>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
