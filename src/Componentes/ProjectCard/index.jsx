export default function ProjectCard({ titulo, descricao, ano }) {
    return (
      <div className="border p-4 mb-4">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <small>{ano}</small>
      </div>
    );
  }
  