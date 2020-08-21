import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
     
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/yuxigui"
        aria-label="My GitHub"
      >
      </a>{" "}
      using <i className="fab fa-react"></i>
      <p>
        <small className="text-muted">
          {" "}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
