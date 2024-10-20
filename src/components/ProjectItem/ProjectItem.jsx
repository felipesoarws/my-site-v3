import "./projectitem.scss";

import Projects from "../../data/projects.json";

// components
import RevealText from "../RevealText/RevealText";

// icons
import github from "../../assets/icons/github.png";
import arrowLink from "../../assets/icons/arrowLink.png";

const ProjectItem = ({
  project,
  id,
  title,
  desc,
  builtWith,
  link,
  repository,
}) => {
  return (
    <div className="projectsList">
      <div className="projectItemMobile">
        <div className="projectDetails">
          <h2 className="gradientText projectIdTitle">
            {id}/{Projects.length}
          </h2>
          <h3 className="projectTitle">
            <RevealText>
              <strong>{title}</strong>
            </RevealText>
          </h3>
          <div className="projectPreviews">
            <div>
              <img
                src={project.desktopBackground}
                alt="bgDesktop"
                className="backgroundDesktop"
                width={100}
                height={100}
              />
            </div>
            <div>
              <img
                src={project.mobileBackground}
                alt="bgMobile"
                className="backgroundMobile"
              />
            </div>
          </div>
          <div className="projectDescription limitedBorder">
            <p>
              <RevealText>{desc}</RevealText>
            </p>
          </div>
          <div className="projectStacks">
            {builtWith.map((stacks, id) => (
              <div key={id}>
                <p className="projectStacksItem">
                  <RevealText>{stacks}</RevealText>
                </p>
              </div>
            ))}
          </div>
          <div className="projectLinks">
            {repository == "" ? (
              <div></div>
            ) : (
              <a href={repository} target="_blank">
                <div className="projectLinksIcons projectLinksGitHub">
                  <img
                    src={github}
                    alt="github"
                    className="projectLinksImage"
                  />
                </div>
              </a>
            )}

            {repository == "" ? (
              <>
                {link == "" ? (
                  <></>
                ) : (
                  <a href={link} target="_blank" className="transform">
                    <div className="projectLinksIcons projectLinksDeploy">
                      <img
                        src={arrowLink}
                        alt="arrowLink"
                        className="projectLinksImage"
                      />
                    </div>
                  </a>
                )}
              </>
            ) : (
              <>
                {link == "" ? (
                  <div></div>
                ) : (
                  <a href={link} target="_blank">
                    <div className="projectLinksIcons projectLinksDeploy transform">
                      <img
                        src={arrowLink}
                        alt="arrowLink"
                        className="projectLinksImage"
                      />
                    </div>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="projectItemDesktop">
        <div className="projectDetails">
          <h3 className="gradientText projectIdTitle">
            <RevealText>
              {id}/{Projects.length}
            </RevealText>
          </h3>
          <h3 className="projectTitle">
            <RevealText>{title}</RevealText>
          </h3>
          <div className="projectDescription limitedBorder">
            <p>
              <RevealText>{desc}</RevealText>
            </p>
          </div>
          <div className="projectStacks">
            {builtWith.map((stacks, id) => (
              <div key={id}>
                <p className="projectStacksItem">
                  <RevealText>{stacks}</RevealText>
                </p>
              </div>
            ))}
          </div>
          <div className="projectLinks">
            {repository == "" ? (
              <div></div>
            ) : (
              <a href={repository} target="_blank">
                <div className="projectLinksIcons projectLinksGitHub">
                  <img src={github} alt="github" />
                </div>
              </a>
            )}

            {repository == "" ? (
              <>
                {link == "" ? (
                  <></>
                ) : (
                  <a href={link} target="_blank" className="transform">
                    <div className="projectLinksIcons projectLinksDeploy">
                      <img
                        src={arrowLink}
                        alt="arrowLink"
                        className="projectLinksImage"
                      />
                    </div>
                  </a>
                )}
              </>
            ) : (
              <>
                {link == "" ? (
                  <div></div>
                ) : (
                  <a href={link} target="_blank">
                    <div className="projectLinksIcons projectLinksDeploy transform">
                      <img
                        src={arrowLink}
                        alt="arrowLink"
                        className="projectLinksImage"
                      />
                    </div>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
        <div className="projectPreviews">
          <div>
            <img
              src={project.desktopBackground}
              alt="bgDesktop"
              className="backgroundDesktop"
            />
          </div>
          <div>
            <img
              src={project.mobileBackground}
              alt="bgMobile"
              className="backgroundMobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
