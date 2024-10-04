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
      <h2>Veja o catálogo completo de projetos</h2>
      <input
        className="text-black"
        type="text"
        id="search"
        value={search}
        onChange={handleSearch}
        placeholder="Buscar projeto..."
      />
      <div>
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
