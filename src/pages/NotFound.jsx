import { Link } from "react-router-dom";
import { useEffect } from "react";

import Footer from "../components/Footer/Footer";

import "../styles/global.scss";
import "../styles/general.scss";

const NotFound = () => {
  useEffect(() => {
    window.document.title = "ops... not found!";
  }, []);

  return (
    <div className="container">
      <div>
        <div className="flex-col">
          <h1>Ops...</h1>
          <h2>Essa página não existe!</h2>

          <p>
            Clique <Link to={"/"}>aqui </Link>
            para voltar a página inicial :)
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
