import { useEffect, useRef } from "react";

const RevealText = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    function randomCharacter() {
      const chars =
        "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789";
      return chars[Math.floor(Math.random() * chars.length)];
    }

    function setInitialDataAtt(element) {
      const textContent = element.textContent.trim();

      if (!element.getAttribute("data-text") && textContent) {
        element.setAttribute("data-text", textContent);
        element.textContent = "";
      }
    }

    function revealNextLetter(element, index, revealedText) {
      const originalText = element.getAttribute("data-text");

      if (index < originalText.length) {
        revealedText += originalText[index];
        let tempText = revealedText;

        for (let i = index + 1; i < originalText.length; i++) {
          tempText += randomCharacter();
        }

        element.textContent = tempText;
        index++;

        setTimeout(() => revealNextLetter(element, index, revealedText), 50);
      } else {
        element.textContent = originalText;
      }
    }

    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          revealNextLetter(element, 0, "");
          observer.unobserve(element);
        }
      });
    }

    const element = elementRef.current;
    setInitialDataAtt(element);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default RevealText;
