import styles from "./Navbar.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

function Navbar(params) {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Nav.Link href="#Presentation">Apresentação</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Skills">Habilidades</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Projects">Projetos</Nav.Link>
        </li>
      </ul>

      <ul>
        <li>
          <a href="https://www.instagram.com/bittencourtonrails/">
            <FaInstagram size={30}></FaInstagram>
          </a>
        </li>
        <li>
          <a href="https://github.com/Mateus-Bittencourt">
            <FaGithub size={30}></FaGithub>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mateusmbittencourt/">
            <FaLinkedin size={30}></FaLinkedin>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
