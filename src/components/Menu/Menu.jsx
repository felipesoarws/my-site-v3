"use client";
import "../../styles/global.scss";
import "./menu.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import RevealText from "../RevealText/RevealText";

// icons
import backHome from "../../assets/icons/backHome.png";

const Menu = ({ local }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header ${scrolled ? "menuBarScrolled" : ""}`}>
      <div>
        <Link className="logo" to={"/"}>
          <strong className="titleLogo">
            <p>
              <RevealText>@felipesoarws</RevealText>
            </p>
          </strong>
          <div className="secondTitleLogo">
            <p className="spanLogo">
              <RevealText>web design</RevealText>
            </p>
            <strong>
              <RevealText>&</RevealText>
            </strong>
            <p className="spanLogo">
              <RevealText>development</RevealText>
            </p>
          </div>
        </Link>
      </div>
      <div>
        <Link className="logo" to={`${local == "home" ? "/projects" : "/"}`}>
          <strong className="projectsMenu">
            <p>
              <RevealText>
                {local == "home" ? (
                  "projetos"
                ) : (
                  <img src={backHome} alt="backHome" className="backHomeLogo" />
                )}
              </RevealText>
            </p>
          </strong>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
