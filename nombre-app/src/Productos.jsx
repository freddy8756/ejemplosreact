import { useEffect, useState } from "react"
import coche from './assets/coche.jpg';
import cochea from './assets/descarga.jpg';
import coches from './assets/nd.jpg';
import "./Producto.css"
import api from "./servicios/api"
function Productos() {

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
      <main className="producto">

        {productos.map((pro)=>(
          <article key={pro.id}>
            <p>{pro.title}</p>
          </article>
        ))}
      </main>
    </div>
  )

}
export default Productos