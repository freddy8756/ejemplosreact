import React,{useState} from "react";
import axios from 'axios';
import api from './servicios/api';
import './Registrarpro.css';
function Registrarpro(){
    const[title,setTitle]= useState('');
    const[price,setPrice]= useState('');
    const[description,setDescription]= useState('');
    const[category,setCategory] = useState('');
    const[image,setImage] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoproducto ={title,price,description,category,image}
    try{
        const respuesta = await api.post('/productos',nuevoproducto);
        console.log('Producto registrado: ',respuesta.data);
        alert('¡producto guardado con exito!');
    }catch(error){
        console.error('Error al registrar:', error);
    }
}
return(
    <div className="pagina">
        <h2>Registrar producto</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            type="number"
            placeholder="precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <input
            type="text"
            placeholder="texto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input
            type="text"
            placeholder="descripcion"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
            <input
            type="text"
            placeholder="descripcion"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <p></p>
            <button type="submit">enviar</button>
        </form>
    </div>
)
}
export default Registrarpro