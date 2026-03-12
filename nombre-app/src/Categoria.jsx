import { useEffect, useState } from "react";
import apis from "./servicios/apis";
import "./Categoria.css";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerCategorias = async () => {
    try {
      const response = await apis.get("/"); 
      setCategorias(response.data.categories); 
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      setError("No se pudieron cargar las categorías");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (  
    <div>
      <main className="categoria-container">
        {categorias.map((cat) => (
          <article key={cat.idCategory} className="categoria-card">
            <p className="categoria-titulo"><strong>{cat.strCategory}</strong></p>
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <p className="categoria-descripcion">
              {cat.strCategoryDescription?.slice(0, 100)}...
            </p>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Categorias;
