import { useEffect } from "react";

import { Link } from "react-router-dom";

import "../styles/global.scss";
import "../styles/general.scss";

// data
import Data from "../data/projects.json";

// components
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Stacks from "../components/Stacks/Stacks";
import Slider from "../components/Slider/Slider";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import RevealText from "../components/RevealText/RevealText";

// icons
import backArrow from "../assets/icons/backArrow.png";

// images
import mainBg from "../assets/mainHeader.gif";

const Home = () => {
  return (
    <div className="container">
      <header className="padding">
        <Menu local={"home"} />
        <div className="homeBg">
          <img src={mainBg} className="homeBgImg" alt="mainBg" />
        </div>
      </header>
      <main className="main">
        <div className="aboutUs padding">
          <div>
            <h3 className="sectionTitle">
              <RevealText>../sobre-mim</RevealText>
            </h3>
          </div>
          <div className="aboutUsRight">
            <div>
              <img src={backArrow} className="backArrowIcon" alt="backArrow" />
            </div>
            <div>
              <span className="line"></span>
            </div>
            <div className="limitedBorder">
              <p className="aboutUsText">
                <RevealText>
                  Meu nome é Felipe, tenho 22 anos, sou formado em Análise e
                  Desenvolvimento de Sistemas e atualmente curso Engenharia de
                  Software na Cruzeiro do Sul.
                </RevealText>
              </p>
              <p className="aboutUsText">
                <RevealText>
                  Estou constantemente estudando as novas tecnologias da área e
                  colocando em prática com projetos para me desafiar e sempre
                  expandir meus conhecimentos.
                </RevealText>
              </p>
            </div>
          </div>
        </div>
        <div className="stacks padding">
          <div>
            <h3 className="sectionTitle">
              <RevealText>../stacks</RevealText>
            </h3>
          </div>
          <div className="stacksLine">
            <Stacks />
          </div>
        </div>
        <div className="slider">
          <Slider />
        </div>
        <div className="projects padding">
          <div className="limitedBorder">
            <h3 className="sectionTitle">
              <RevealText>../projetos</RevealText>
            </h3>

            <div className="sectionDesc">
              <p>
                <RevealText>Ficou curioso(a) sobre meus projetos?</RevealText>
              </p>
              <p>
                <RevealText>
                  Dá uma olhadinha ai abaixo o que eu ando construindo!
                </RevealText>
              </p>
            </div>
          </div>
          <ProjectItem
            project={Data[0]}
            id={Data[0].id}
            title={Data[0].projectName}
            desc={Data[0].projectDesc}
            builtWith={Data[0].builtWith}
            link={Data[0].projectLink}
            repository={Data[0].repository}
            desktopBackground={Data[0].desktopBackground}
            mobileBackground={Data[0].mobileBackground}
          />
          <ProjectItem
            project={Data[1]}
            id={Data[1].id}
            title={Data[1].projectName}
            desc={Data[1].projectDesc}
            builtWith={Data[1].builtWith}
            link={Data[1].projectLink}
            repository={Data[1].repository}
            desktopBackground={Data[1].desktopBackground}
            mobileBackground={Data[1].mobileBackground}
          />
          <div className="linkToTheProjects limitedBorder">
            <h3 className="linkToTheProjectsItem limitedBorder">
              <RevealText>
                Para ver todos os projetos, clique no link!
              </RevealText>
            </h3>
            <Link to={"/projects"} className="limitedBorder">
              <h3 className="gradientText linkToTheProjectsItem">
                <RevealText>Todos os projetos</RevealText>
              </h3>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
