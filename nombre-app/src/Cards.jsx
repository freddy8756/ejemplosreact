import './Cards.css';
import api from "./servicios/api";
import { useEffect, useState } from "react"
function Cards({id}){
  const [productos, setProductos] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    const obtenerProductos = async() =>{
      try{
        const response = await api.get('/carts/{id}');
        setProductos(response.data.products);
      }catch(error){
        console.error("Error al obtener productos: ", error);
      }finally{
        setLoading(false);
      }
    };
    obtenerProductos();
  },[id]);
  if(loading) return <p>Cargando....</p>
  return(
<main className="productos-container">
  {productos.map((pro,i) => (
    <article key={pro} className="producto-card">
      <p>{pro.title}</p>
      <p>{pro.price}USD</p>
    </article>
  ))}
 </main>
  );
}
export default Cards