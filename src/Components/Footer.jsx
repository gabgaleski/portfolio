import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
const githubImg = <BsGithub />
const linkedinImg = <FaLinkedinIn />

    return ( 
      <footer>
        <p>Redes Sociais</p>
        <section>
            <a target='_blank' href='https://github.com/gabgaleski' rel="noreferrer">{githubImg} gabgaleski</a>
            <a target='_blank' href='https://www.linkedin.com/in/gabgaleski/' rel="noreferrer">{linkedinImg} gabgaleski</a>
        </section>
      </footer>
     );
}

export default Footer;