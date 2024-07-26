import "../../styles/global.scss";
import "./footer.scss";

import { useEffect } from "react";

// icons
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";
import instagram from "../../assets/icons/instagram.png";

export default function Footer() {
  return (
    <footer className="padding">
      <div className="rowItems">
        <div className="contactLogo">
          <div>
            <h3 className="logoTitle">Felipe</h3>
          </div>
          <div className="logoRow">
            <div className="gradientText bioTitle">
              <p>Front-end</p>
              <p>Developer</p>
            </div>
            <h3 className="logoTitle">Soares</h3>
          </div>
        </div>
        <div className="contact">
          <h3 className="sectionTitle">
            <strong>../contato</strong>
          </h3>
          <div className="contactContainer">
            <div className="contactContainerText">
              <p>Codificado por mim</p>
              <strong>:)</strong>
            </div>
            <div className="contactContainerText">
              <p>Feito em </p>
              <strong>2024</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="Links">
        <div className="rowLinks">
          <a
            href="https://github.com/felipesoarws"
            target="_blank"
            className="item"
          >
            <img src={github} className="itemImage" alt="github" />
            <h3 className="textItem">Github</h3>
          </a>

          <a
            href="https://www.linkedin.com/in/felipesoarws/"
            target="_blank"
            className="item"
          >
            <img src={linkedin} className="itemImage" alt="linkedin" />
            <h3 className="textItem">LinkedIn</h3>
          </a>

          <a
            href="mailto:felipesoarwz@gmail.com"
            target="_blank"
            className="item"
          >
            <img src={email} className="itemImage" alt="e-mail" />

            <h3 className="textItem">E-mail</h3>
          </a>

          <a
            href="https://www.instagram.com/felipesoarws/"
            target="_blank"
            className="item"
          >
            <img src={instagram} className="itemImage" alt="instagram" />

            <h3 className="textItem">Instagram</h3>
          </a>
        </div>
      </div>
    </footer>
  );
}
