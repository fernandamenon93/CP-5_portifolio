import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="public/img/logo-preta.png" alt="logo-fernanda" width={120} height={120} />
      <nav>
      <ul>
		<li>
			<Link to='/'>Home</Link>
		</li>
    <li>
			<Link to='/projetos'>Projetos</Link>
		</li>
		
    <li>
			<Link to='/contato'>Contato</Link>
		</li>
	</ul>
        </nav>
    </header>
  );
}

export default Header;
