import React from "react";
import { FcAbout } from "react-icons/fc";

function About() {
  return (
    <section class="about-section" id="about">
      <h2><FcAbout className="about-icon" size={50} />Sobre Mim</h2>
      <p className="subtitle">Conheça um pouco mais sobre quem eu sou e as principais tecnologias que domino.</p>
      <article class="about-container">
        <section class="section-infos-about">
          <h3>Quem sou eu?</h3>
          <p>Eu sou o Gabriel Galeski, desenvolvedor web <strong>Fullstack</strong>, apaixonado por tecnologia, que acredita na mudança e no impacto que ela pode causar. Resolver problemas e criar acessibilidade sao pilares que me motivam no desenvolvimento de software.
          </p>
          <p>
            Antes de me tornar desenvolvedor, fiz Bacharelado em Ciências Econômicas, o qual tranquei no fim do curso para me dedicar ao desenvolvimento de software na <strong>Trybe</strong>, porem carrego conhecimento nas areas de gestao e financeira que estao sempre presente no meu dia-a-dia como programador e atualmente estou estudando <strong>Analise e Desenvolvimento de Sistemas</strong> na <strong>Universidade Positivo</strong>.
          </p>
          <p>
            Amo criar e melhorar a experiência das pessoas, e, por isso, estou sempre em busca de aprendizado, participando ativamente de bootcamps e eventos da área. Estou aberto a novas oportunidades e parcerias para criar soluções inovadoras e impactantes.
          </p>
        </section>
        <section class="section-skills">
          <h3>Tecnologias</h3>
          <div className="stacks">
            <p>
              <span className="stack">Javascript</span>
              <span className="stack">React</span>
              <span className="stack">Redux</span>
              <span className="stack">HTML</span>
            </p>
            <p>
              <span className="stack">CSS</span>
              <span className="stack">Node</span>
              <span className="stack">Express</span>
              <span className="stack">MySQL</span>
            </p>
            <p>
              <span className="stack">Git</span>
              <span className="stack">Typescript</span>
              <span className="stack">Docker</span>
              <span className="stack">Sequelize</span>
            </p>
            <p>
              <span className="stack">Jest</span>
              <span className="stack">Mocha</span>
              <span className="stack">RTL</span>
              <span className="stack">Java</span>
            </p>
          </div>
        </section>
      </article>
    </section>
  );
}

export default About;