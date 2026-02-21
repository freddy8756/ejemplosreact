import { useEffect, useState } from "react"
import coche from "./assets/coche.jpg"
import "./Producto.css"
import api from "./servicios/api"
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
  {vehiculos.map((pro) => (
    <article key={pro.id} className="producto-card">
      <p>{pro.nombre}</p>
      <p>{pro.descripcion}</p>
      <img src={pro.imagen} alt={pro.nombre} />
    </article>
  ))}
</main>

    </div>
  )

}
export default Productos