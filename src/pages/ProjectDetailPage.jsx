import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";

export default function ProjectDetailPage({titulo, descricao,ano}) {
  const { id } = useParams(); // Captura o ID da URL
  const projeto = projects.find((projeto) => projeto.id === Number(id));

  return (
    <>
    <p>Detalhes</p>
      <h2>{projeto.titulo}</h2>
      <p>{projeto.descricao}</p>
      <p>Ano de início: {projeto.ano}</p>
    </>
  );
}
