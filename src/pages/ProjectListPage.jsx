import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../data/projects.json";
import ProjectDetailPage from "../pages/ProjectDetailPage";

export default function ProjectListPage() {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const projetosFiltrados = projects.filter((projeto) =>
    projeto.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2 className="titulo1">Veja o catálogo completo de projetos:</h2>
      <input
        className="text-search"
        type="text"
        id="search"
        value={search}
        onChange={handleSearch}
        placeholder="Buscar projeto..."
      />
      <div className="texto1">
        {projetosFiltrados.map((projeto) => (
            <>
          <Link key={projeto.id} to={`/projetos/${projeto.id}`}>
            {projeto.titulo}
          </Link> <br/>
          </>
        ))}
      </div>
    </>
  );
}
