import "./projectitem.scss";

import Projects from "../../data/projects.json";

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
  bgDesktop,
  bgMobile,
}) => {
  console.log(project);
  return (
    <div className="projectsList">
      <div className="projectItemMobile">
        <div className="projectDetails">
          <h3 className="gradientText projectIdTitle">
            {id}/{Projects.length}
          </h3>
          <h3 className="projectTitle">
            <strong>{title}</strong>
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
            <p>{desc}</p>
          </div>
          <div className="projectStacks">
            {builtWith.map((stacks, id) => (
              <div key={id}>
                <p className="projectStacksItem">{stacks}</p>
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
            {id}/{Projects.length}
          </h3>
          <h3 className="projectTitle">
            <strong>{title}</strong>
          </h3>
          <div className="projectDescription limitedBorder">
            <p>{desc}</p>
          </div>
          <div className="projectStacks">
            {builtWith.map((stacks, id) => (
              <div key={id}>
                <p className="projectStacksItem">{stacks}</p>
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
