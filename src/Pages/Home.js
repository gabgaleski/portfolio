import React from "react";
import Header from "../Components/Header";
import image from '../ProfileImage/home-image2.png'

function Home() {
    return ( 
    <div>
       <Header />
       <section id="home" class="home-section">
            <section class="home-container">
              <h1>Gabriel Galeski</h1>
              <h3>Desenvolvedor Web, Front-end</h3>
              <p>Desenvolvedor Front-end, estudante da <strong>Trybe</strong>, apaixonado pela criação e mudança que a programação e toda a tecnologia traz na vida das pessoas. Criar, mudar e melhorar é o que amo fazer, e por isso <strong>amo programar.</strong></p>
            </section>
            <img class="img-home" src={ image } alt="Ilustração" />
        </section>
    </div>
    );
}

export default Home;