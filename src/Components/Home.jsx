import React from "react";

function Home() {

  const cvDownload = () => {
    window.location.href = "https://drive.google.com/u/0/uc?id=1pE4eQVYlyjaJPS8wZOeUf_UDI4CB9t2S&export=download"
  }

    return ( 
    <div>
       <section id="home" class="home-section">
            <section class="home-container">
              <h1>Olá, eu sou o Gabriel Galeski</h1>
              <h3>Desenvolvedor Web, Fullstack</h3>
              <hr></hr>
              <p className="home-text"><strong>Desenvolvedor Fullstack</strong>, apaixonado pela criação e mudança que a programação e toda a tecnologia traz na vida das pessoas.<p>Criar, mudar e melhorar é o que amo fazer, e por isso <strong>amo programar.</strong></p></p>
              <div className="btn-div">
              <button onClick={ cvDownload } className="btn-home">
                <span>Currículo</span>
              </button>
              </div>
            </section>
        </section>
    </div>
    );
}

export default Home;