import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";

export default function ProjectDetailPage({titulo, descricao,ano}) {
  const { id } = useParams(); // Captura o ID da URL
  const projeto = projects.find((projeto) => projeto.id === Number(id));

  return (
    <>
    <p className="texto-detalhes">Detalhes:</p>
      <h2 className="texto-descricao">{projeto.titulo}</h2>
      <p>{projeto.descricao}</p>
      <img  className="img-certificado" src={projeto.imagem} alt={projeto.titulo}></img>
      <p className="texto-detalhes">Ano de início: {projeto.ano}</p>
    </>
  );
}
