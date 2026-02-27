import { useEffect, useState } from "react"
import coche from "./assets/coche.jpg"
import "./Producto.css"
import api from "./servicios/api"
import Registrarpro from "./Registrarpro"
function Productos() {
  const vehiculos = [
    { id: 1, nombre: "Coche",descripcion:"Vehiculo con buena velocidad y buena estabilidad", imagen: coche },
    { id: 2, nombre: "cochesito",descripcion:"Este coche tiene buena pintura", imagen: coche },
    { id: 3, nombre: "carrazo",descripcion:"buena movilidad en terrenos", imagen: coche },
  ];

  const [productos, setProductos] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    const obtenerProductos = async() =>{
      try{
        const response = await api.get("/products");
        setProductos(response.data);
      }catch(error){
        console.error("Error al obtener productos: ", error);
      }finally{
        setLoading(false);
      }
    };
    obtenerProductos();
  },[]);
  if(loading) return <p>Cargando....</p>
  return(
    <div>
      
      <main className="productos-container">
  {productos.map((pro) => (
    <article key={pro.id} className="producto-card">
      <p className="productos-titulo">{pro.title}</p>
      <p className="productos-precio">{pro.price}</p>
      <p className="productos-descripcion">{pro.description}</p>
      <p className="productos-categoria">{pro.category}</p>
      <img src={pro.image} />
      <p></p>
      <button className="dic">Agregar</button>
      <button className="doc" onClick={() => eliminarproducto(pro.id)}>Eliminar</button>
    </article>
  ))}
</main>
    <Registrarpro/>

    </div>
  )
}
const eliminarproducto = async (productoid) => {
  try {
    const response = await api.delete(
      `/products/${productoid}`
    );
    console.log(response.data);
    alert("Producto eliminado correctamente");
  }catch(error){
    console.error("Error al eliminar producto: ", error);
    alert("Error al eliminar producto");
  }
}
export default Productos