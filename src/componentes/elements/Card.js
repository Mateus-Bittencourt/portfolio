import styles from "./Card.module.css";
import ButtonB from "./ButtonB";
import { useState } from "react";

const Card = ({ img, title, description, tech, repo, site }) => {
  const [info, setInfo] = useState(false);

  const InfoOn = () =>{
    setInfo(true);
  }

  const InfoOff = () =>{
    setInfo(false);
  }


  return (
    <div onMouseLeave={InfoOff} className={styles.card}>
      <a onMouseEnter={InfoOn}  href={site}>
        <img src={img}></img>
      </a>

      {info && (
        <section>
          <h3>{title}</h3>
          <p>
            <strong>Tecnologia:</strong> {tech}
          </p>
          <p>{description}</p>
          <ButtonB text="Acesse o repositório" link={repo}></ButtonB>
        </section>
      )}
    </div>
  );
};

export default Card;
