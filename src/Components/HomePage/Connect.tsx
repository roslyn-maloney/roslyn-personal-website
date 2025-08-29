import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import DividerFour from "../../Assets/Divider4.svg";
import ConnectBackground from "../../Assets/Connect.svg";

const Connect = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <Image className="divider-four" src={DividerFour} alt="Divider-Four" />
      <div className="connect-section">
        <Image className="connect-background" src={ConnectBackground} alt="Connect-Background" />
        <div className="connect-content">
          <h3>Questions? Wanna Connect</h3>
          <p className="Email"><strong>Email:</strong> maloney.r@northeastern.edu</p>
          <p className="Number"><strong>Phone Number:</strong> (781)-686-6482</p>
          <a
            className="LinkedIn"
            href="https://www.linkedin.com/in/roslyn-maloney-nustudent/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>LinkedIn:</strong> Roslyn Maloney
          </a>
          <br />
          <p className="Instagram"><strong>Instagram:</strong> Roselily1604</p>
          <Link
            className="Github"
            to="https://github.com/roslyn-maloney"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Github:</strong> Roslyn-Maloney
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Connect;

