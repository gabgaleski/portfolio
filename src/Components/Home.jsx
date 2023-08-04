import React from "react";
import image from '../ProfileImage/home-image2.png';
import reactIcon from '../ProfileImage/react.svg';
import js from '../ProfileImage/js.svg';
import node from '../ProfileImage/node.svg';
import sql from '../ProfileImage/sql.png';
import express from '../ProfileImage/express.svg';

function Home() {
    return ( 
    <div>
       <section id="home" class="home-section">
            <section class="home-container">
              <h1>Gabriel Galeski</h1>
              <h3>Desenvolvedor Web, Fullstack</h3>
              <span className="core-skills">
                <img src={js} alt="js icon" />
                <img src={reactIcon} alt="react icon" />
                <img src={node} alt="node icon" />
                <img src={express} alt="express icon" />
                <img src={sql} alt="sql icon" />
              </span>
              <hr></hr>
              <p>Desenvolvedor Fullstack, estudante da <strong>Trybe</strong>, apaixonado pela criação e mudança que a programação e toda a tecnologia traz na vida das pessoas. Criar, mudar e melhorar é o que amo fazer, e por isso <strong>amo programar.</strong></p>
              <div className="btn-div">
              <button className="btn-home">
                <span>Currículo</span>
              </button>
              <button className="btn-home">
                <span>Contato</span>
              </button>
              </div>
            </section>
            <img class="img-home" src={ image } alt="Ilustração" />
        </section>
    </div>
    );
}

export default Home;