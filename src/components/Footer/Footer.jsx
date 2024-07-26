import "../../styles/global.scss";
import "./footer.scss";

// components
import RevealText from "../RevealText/RevealText";

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
            <h3 className="logoTitle">
              <RevealText>Felipe</RevealText>
            </h3>
          </div>
          <div className="logoRow">
            <div className="gradientText bioTitle">
              <p>
                <RevealText>Front-end</RevealText>
              </p>
              <p>
                <RevealText>Developer</RevealText>
              </p>
            </div>
            <h3 className="logoTitle">
              <RevealText>Soares</RevealText>
            </h3>
          </div>
        </div>
        <div className="contact">
          <h3 className="sectionTitle">
            <RevealText>../contato</RevealText>
          </h3>
          <div className="contactContainer">
            <div className="contactContainerText">
              <p>
                <RevealText>Codificado por mim</RevealText>
              </p>
              <strong>
                <RevealText>:)</RevealText>
              </strong>
            </div>
            <div className="contactContainerText">
              <p>
                <RevealText>Feito em </RevealText>
              </p>
              <strong>
                <RevealText>2024</RevealText>
              </strong>
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
            <h3 className="textItem">
              <RevealText>Github</RevealText>
            </h3>
          </a>

          <a
            href="https://www.linkedin.com/in/felipesoarws/"
            target="_blank"
            className="item"
          >
            <img src={linkedin} className="itemImage" alt="linkedin" />
            <h3 className="textItem">
              <RevealText>LinkedIn</RevealText>
            </h3>
          </a>

          <a
            href="mailto:felipesoarwz@gmail.com"
            target="_blank"
            className="item"
          >
            <img src={email} className="itemImage" alt="e-mail" />

            <h3 className="textItem">
              <RevealText>E-mail</RevealText>
            </h3>
          </a>

          <a
            href="https://www.instagram.com/felipesoarws/"
            target="_blank"
            className="item"
          >
            <img src={instagram} className="itemImage" alt="instagram" />

            <h3 className="textItem">
              <RevealText>Instagram</RevealText>
            </h3>
          </a>
        </div>
      </div>
    </footer>
  );
}
