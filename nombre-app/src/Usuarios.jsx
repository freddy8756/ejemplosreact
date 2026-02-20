import "./Usuarios.css";
import { useEffect, useState } from "react"
import api from "./servicios/api"
function Usuarios() {

  const [usuarios, setProductos] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    const obtenerUsuarios = async() =>{
      try{
        const response = await api.get("/users");
        setProductos(response.data);
      }catch(error){
        console.error("Error al obtener Usuarios: ", error);
      }finally{
        setLoading(false);
      }
    };
    obtenerUsuarios();
  },[]);
  if(loading) return <p>Cargando....</p>
  return(
    <div>
      <main className="usuarios">

        {usuarios.map((use)=>(
          <article key={use.id}>
            <p>{use.username}</p>
            <p>{use.email}</p>
            <p>{use.password}</p>
            <button>editar</button>
            <button>eliminar</button>
          </article>
        ))}
      </main>
    </div>
  )

}
export default Usuarios