import styles from "./Skills.module.css";
import javascript from "../../Image/skills/javascript.svg";
import css from "../../Image/skills/css.svg";
import html from "../../Image/skills/html.svg";
import react from "../../Image/skills/react.svg";
import typescript from "../../Image/skills/typescript.svg";

function Skills(params) {
  return (
    <div className={styles.skill} id="Skills">
      <h1> Habilidades </h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
      <div>
        <img src={javascript} />
        <img src={html} />
        <img src={css} />
        <img src={typescript} />
        <img src={react} />
        <img src='https://cdn.iconscout.com/icon/free/png-256/free-ruby-3629029-3030386.png?f=webp' />
        <img src='https://ih1.redbubble.net/image.3962414283.0712/st,small,507x507-pad,600x600,f8f8f8.jpg' />
        <img src='https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png' />
      </div>
    </div>
  );
}

export default Skills;
