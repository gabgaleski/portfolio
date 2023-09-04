import React from "react";
import profileImage from '../ProfileImage/gabriel.jpg';

function About() {
    return (
        <section class="about-section" id="about">
          <article class="about-container">
              <h2>Sobre Mim</h2>
                <section class="section-infos-about">
                  <div className="text-about">
                    <p>Eu sou o Gabriel Galeski, desenvolvedor web <strong>Fullstack</strong>, apaixonado por tecnologia, que acredita na mudança e no impacto que ela pode causar. Resolver problemas e criar acessibilidade sao pilares que me motivam no desenvolvimento de software.
                    </p>
                    <p>
                    Antes de me tornar desenvolvedor, fiz Bacharelado em Ciências Econômicas, o qual tranquei no fim do curso para me dedicar ao desenvolvimento de software na <strong>Trybe</strong>, porem carrego conhecimento nas areas de gestao e financeira que estao sempre presente no meu dia-a-dia como programador.
                    </p>
                    <p>
                    Amo criar e melhorar a experiência das pessoas, e, por isso, estou sempre em busca de aprendizado, participando ativamente de bootcamps e eventos da área. Estou aberto a novas oportunidades e parcerias para criar soluções inovadoras e impactantes.
                    </p>
                  </div>
                  <img src={ profileImage } alt="Foto de Gabriel" />
                </section>
          </article>
        </section>
    );
}

export default About;