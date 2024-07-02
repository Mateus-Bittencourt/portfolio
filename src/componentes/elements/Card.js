import styles from "./Card.module.css";
import lpdnc from "../../Image/projects/lpdnc.svg";
import ButtonB from "./ButtonB";

const Card = ({ img, title, description, tech, repo, site }) => {
  return (
    <div className={styles.card}>
      <a href={site}>
        <img src={img}></img>
      </a>
      <section>
        <h3>{title}</h3>
        <p>
          <strong>Tecnologia:</strong> {tech}
        </p>
        <p>{description}</p>
        <ButtonB text="Acesse o repositório" link={repo}></ButtonB>
      </section>
    </div>
  );
};

export default Card;
