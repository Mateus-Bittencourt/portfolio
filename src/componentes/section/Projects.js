import ButtonB from "../elements/ButtonB";
import Card from "../elements/Card";
import styles from "./Projects.module.css";
import lpdnc from "../../Image/projects/lpdnc.svg";
import portfolio from "../../Image/projects/portfolio.svg";

function Projects(params) {
  return (
    <div className={styles.projects} id="Projects">
      <h1> Projetos </h1>
      <Card
        img={lpdnc}
        title="Projeto LadingPage"
        tech="HTML & CSS"
        description="Projeto desafio modulo 1 da DNC"
        repo="https://github.com/Mateus-Bittencourt/desafio-landing-page"
        site="https://desafio-landing-page-mateus.netlify.app/"
      ></Card>
      <Card
        img={portfolio}
        title="Portfolio DNC"
        tech="React"
        description="Projeto portfolio modulo 3 da DNC"
        repo="https://github.com/Mateus-Bittencourt/desafio-landing-page"
        site="https://desafio-landing-page-mateus.netlify.app/"
      ></Card>
      <div className={styles.container}>
        <ButtonB
          text="Acesse meus repositórios"
          link="https://github.com/Mateus-Bittencourt?tab=repositories"
          id="btn-main"
        ></ButtonB>
      </div>
    </div>
  );
}

export default Projects;
