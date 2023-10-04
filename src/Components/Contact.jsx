function Contact() {
    return (
      <section className="contact" id="contact">
          <h2>Contato</h2>
          <p>Se quiser entrar em contato comigo pelo Linkedin, email ou preenchendo o formulario</p>
          <form className="form-contact">
            <div class="form-floating mb-3">
              <input required type="text" class="form-control" id="floatingInput" placeholder="Nome"/>
              <label for="floatingInput">Nome</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <textarea required class="form-control text-form" maxLength={250} style={{'height': '130px'}} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>
            <button type="buttom" class="btn btn-primary">Enviar</button>
          </form>
      </section>
    );
}

export default Contact;