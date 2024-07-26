import "./stacks.scss";

// icons - frontend
import html from "../../assets/icons/html.png";
import javascript from "../../assets/icons/javascript.png";
import reactjs from "../../assets/icons/react.png";
import nextjs from "../../assets/icons/next.png";

// icons - styles
import css from "../../assets/icons/css.png";
import scss from "../../assets/icons/scss.png";
import tailwind from "../../assets/icons/tailwind.png";

// icons - mkt
import meta from "../../assets/icons/meta.png";
import tiktok from "../../assets/icons/tiktok.png";
import google from "../../assets/icons/google.png";
import analytics from "../../assets/icons/analytics.png";

// icons - backend
import nodejs from "../../assets/icons/node.png";

const stacks = [
  {
    title: "Front-End",
    items: [
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "ReactJS",
        icon: reactjs,
      },
      {
        name: "NextJS",
        icon: nextjs,
      },
    ],
  },
  {
    title: "Styles",
    items: [
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "sCSS",
        icon: scss,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ],
  },
  {
    title: "Marketing",
    items: [
      {
        name: "Meta ADS",
        icon: meta,
      },
      {
        name: "TikTok ADS",
        icon: tiktok,
      },
      {
        name: "Google ADS",
        icon: google,
      },
      {
        name: "Analytics & GTM",
        icon: analytics,
      },
    ],
  },
  {
    title: "Back-end",
    items: [
      {
        name: "NodeJS",
        icon: nodejs,
      },
    ],
  },
];

const Stacks = () => {
  return (
    <>
      {stacks.map((stack, id) => (
        <div className="stack" key={id}>
          <h3 className="stackTitle">{stack.title}</h3>
          <div className="stackItems">
            {stack.items.map((item, id) => (
              <div key={id} className="stackItemsFlex">
                <img src={item.icon} className="stackIcon" alt="backArrow" />
                <p className="stackDesc">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Stacks;
