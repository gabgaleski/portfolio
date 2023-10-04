import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
const githubImg = <BsGithub />
const linkedinImg = <FaLinkedinIn />

    return ( 
      <footer className='footer-container'>
        <div>
          <p className='footer-social'>Redes Sociais</p>
          <nav className='footer-nav'>
              <a target='_blank' href='https://github.com/gabgaleski' rel="noreferrer">{githubImg} gabgaleski</a>
              <a target='_blank' href='https://www.linkedin.com/in/gabgaleski/' rel="noreferrer">{linkedinImg} gabgaleski</a>
          </nav>
        </div>
        <p className='copyright'>Criado por Gabriel Galeski | Direitos reservados</p>
      </footer>
     );
}

export default Footer;