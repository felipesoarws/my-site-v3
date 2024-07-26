import "./slider.scss";

import gd1 from "../../assets/gd1.jpg";
import gd2 from "../../assets/gd2.jpg";
import gd3 from "../../assets/gd3.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Slider() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div className="sliderContainer">
      <div ref={container}>
        <Slide
          src={gd1}
          left={"-55%"}
          progress={scrollYProgress}
          direction="left"
        />
        <Slide
          src={gd2}
          left={"-120%"}
          progress={scrollYProgress}
          direction="right"
        />
        <Slide
          src={gd3}
          left={"-15%"}
          progress={scrollYProgress}
          direction="left"
        />
      </div>
    </div>
  );
}

const Slide = ({ src, left, progress, direction }) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div className="slideContainer" style={{ left, x }}>
      <Phrase2 src={src} />
      <Phrase src={src} />
      <Phrase2 src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className="phraseContainer">
      <strong className="phraseContainerText">front end developer</strong>
      <span className="phraseContainerSpan">
        <img style={{ objectFit: "cover" }} src={src} alt="image" />
      </span>
    </div>
  );
};

const Phrase2 = ({ src }) => {
  return (
    <div className="phraseContainer">
      <strong className="phraseContainerText">felipesoarws</strong>
      <span className="phraseContainerSpan">
        <img style={{ objectFit: "cover" }} src={src} alt="image" />
      </span>
    </div>
  );
};
