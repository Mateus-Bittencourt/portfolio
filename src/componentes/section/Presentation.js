import ButtonA from "../elements/ButtonA";
import styles from "./Presentation.module.css";
import { useEffect, useState } from "react";

function Presentation() {
  const [text, setText] = useState("");
  const toRotate = ["Mateus Bittecourt! ", "Full-Stack Developer "];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(toType, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const toType = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }

    if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  };

  return (
    <div id="Presentation" className={styles.presentation}>
      <h4>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h4>
      <h1> Olá, eu sou {text} </h1>
      <p>
        Sou um apaixonado desenvolvedor web com expertise de dois anos,
        <br></br>
        focado no desenvolvimento de aplicações web e REST API.
        <br></br>
        Minhas principais habilidades residem em Ruby on Rails e Node.js,
        <br></br>
        com uma notável experiência no desenvolvimento de sistemas Core Banking,
        <br></br>
        integração de APIs e aplicativos móveis.
      </p>

      <ButtonA
        text="Conecte-se comigo!! "
        link="https://github.com/Mateus-Bittencourt"
      ></ButtonA>

      <br></br>
    </div>
  );
}

export default Presentation;
