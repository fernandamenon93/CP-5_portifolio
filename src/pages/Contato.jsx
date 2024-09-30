function Contato() {
    return (
      <section id="contato">
        <h2 className= "h2" >Entre em Contato</h2>
        <img src="public/img/linha-branca.png" alt="linha" />
        <p>Se você deseja discutir um projeto, colaborar ou simplesmente tem alguma dúvida, <br /> não hesite em entrar em contato. Estou à disposição para ajudar!</p>
        <br />
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem" />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }
  
  export default Contato;