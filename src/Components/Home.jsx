import React from "react";
import image from '../ProfileImage/home-image2.png'

function Home() {
    return ( 
    <div>
       <section id="home" class="home-section home">
            <section class="home-container">
              <h1>Gabriel Galeski</h1>
              <h3>Desenvolvedor Web, Fullstack</h3>
              <p>Desenvolvedor Fullstack, estudante da <strong>Trybe</strong>, apaixonado pela criação e mudança que a programação e toda a tecnologia traz na vida das pessoas. Criar, mudar e melhorar é o que amo fazer, e por isso <strong>amo programar.</strong></p>
            </section>
            <img class="img-home" src={ image } alt="Ilustração" />
        </section>
        <hr></hr>
    </div>
    );
}

export default Home;