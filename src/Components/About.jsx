import React from "react";
import profileImage from '../ProfileImage/gabriel.jpg';

function About() {
    return ( 
        <>
        <section class="about-section" id="about">
          <article class="about-container">
              <h2>Sobre Mim</h2>
                <section class="section-infos-about">
                  <img src={ profileImage } alt="Foto de Gabriel" />
                  <div>
                    <p>Eu sou o Gabriel Galeski, desenvolvedor <strong>Front-End</strong>, apaixonado por tecnologia, mais especificamente pela programação e tudo que ela proporciona.
                    </p>
                    <p>
                    Minha historia com a tecnologia começou com os jogos, quando ainda criança, e des de entao, sempre tive a curiosidade necessaria pra procurar aprender.
                    </p>
                    <p>
                    Apesar disso, so fui iniciar meus aprendizados de forma mais dedicada no ano de 2022 onde pausei minha faculdade de Ciencias Economicas para ingressar na <strong>Trybe</strong> me dedicando diariamente ao curso e ao aprendizado. Curso esse que me formarei desenvolvedor Full Stack com diversos projetos ja realizados e a realizar ja que a maravilha da tecnologia é a sua mutabilidade constante visando criar e melhorar.
                    </p>
                  </div>
                </section>
          </article>
        </section>
        </>
    );
}

export default About;