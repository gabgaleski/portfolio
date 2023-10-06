import { useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { MdEmail } from 'react-icons/md';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const teamplateParams = {
      from_name: name,
      email: email,
      message: comment,
    }

    await emailjs.send('service_c0yxlh8','template_bnuh8fo', teamplateParams, 'A5ZOaz1gbIvmgGQhy');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Email enviado com sucesso!',
      showConfirmButton: false,
      timer: 1500,
    })

    setName("");
    setEmail("");
    setComment("");
  }

  return (
    <section className="contact" id="contact">
      <h2> <MdEmail /> Contato</h2>
      <p>Se quiser pode entrar em contato comigo pelo <a className="gh-link" target="_blank" href="https://www.linkedin.com/in/gabriel-galeski/" rel="noreferrer">Linkedin</a>, ou pelo email preenchendo o formulario.</p>
      <form className="form-contact" onSubmit={sendEmail}>
        <div class="form-floating mb-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Nome"
            />
          <label for="floatingInput">Nome</label>
        </div>
        <div class="form-floating mb-3">
          <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email" class="form-control" id="floatingInput"
          placeholder="name@example.com"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          class="form-control text-form"
          maxLength={250} style={{ 'height': '130px' }}
          placeholder="Leave a comment here"
          id="floatingTextarea2"/>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;