import "../styles/global.scss";
import "../components/ProjectItem/projectitem.scss";

import ProjectsData from "../data/projects.json";

// components

import Menu from "../components/Menu/Menu";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import Footer from "../components/Footer/Footer";
import RevealText from "../components/RevealText/RevealText";

export default function Projects() {
  console.log(ProjectsData);
  return (
    <div className="container">
      <header className="padding">
        <Menu local={"projects"} />
      </header>
      <main className="main padding">
        <div className="projects">
          <h3 className="sectionTitle">
            <RevealText>../projetos</RevealText>
          </h3>
          {ProjectsData.map((item, id) => (
            <ProjectItem
              project={item}
              key={id}
              id={item.id}
              title={item.projectName}
              desc={item.projectDesc}
              builtWith={item.builtWith}
              link={item.projectLink}
              repository={item.repository}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
