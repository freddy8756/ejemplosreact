import React, { useState, useEffect } from "react";
import api from './servicios/api';
import './Registrarpro.css';

function Registrarpro({ productoEditado, onGuardado}) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  useEffect(() => {
    if (productoEditado) {
      setTitle(productoEditado.title || '');
      setPrice(productoEditado.price || '');
      setDescription(productoEditado.description || '');
      setCategory(productoEditado.category || '');
      setImage(productoEditado.image || '');
    } else {
      setTitle('');
      setPrice('');
      setDescription('');
      setCategory('');
      setImage('');
    }
  }, [productoEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datosProducto = { title, price, description, category, image };

    try {
      if (productoEditado) {
       
        await api.put(`/products/${productoEditado.id}`, datosProducto);
        alert("Producto actualizado correctamente");
      } else {
        await api.post('/products', datosProducto);
        alert("Producto registrado correctamente");
      }

      if (onGuardado) onGuardado(); 
    } catch (error) {
      console.error("Error al guardar producto:", error);
      alert("Error al guardar producto");
    }
  };

  return (
    <div className="pagina">
      <h2>{productoEditado ? "Editar producto" : "Registrar producto"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Imagen (URL)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <p></p>
        <button type="submit">
          {productoEditado ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </div>
  );
}

export default Registrarpro;
