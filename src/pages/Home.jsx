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
  useEffect(() => {
    window.document.title = "@felipesoarws: your fav dev :)";
  }, []);

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
            project={Data[8]}
            id={Data[0].id}
            title={Data[8].projectName}
            desc={Data[8].projectDesc}
            builtWith={Data[8].builtWith}
            link={Data[8].projectLink}
            repository={Data[8].repository}
            desktopBackground={Data[8].desktopBackground}
            mobileBackground={Data[8].mobileBackground}
          />
          <ProjectItem
            project={Data[6]}
            id={Data[1].id}
            title={Data[6].projectName}
            desc={Data[6].projectDesc}
            builtWith={Data[6].builtWith}
            link={Data[6].projectLink}
            repository={Data[6].repository}
            desktopBackground={Data[6].desktopBackground}
            mobileBackground={Data[6].mobileBackground}
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
