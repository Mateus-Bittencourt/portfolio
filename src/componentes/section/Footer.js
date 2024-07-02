import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(params) {
  return (
    <div className={styles.footer}>
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
      <p>mateusmbittencourt@gmail.com</p>
      <p>Mateus Bittencourt © 2024</p>
    </div>
  );
}

export default Footer;
