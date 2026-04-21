import React, { useState, useEffect } from "react";
import api from './servicios/api';
import './Registrarpro.css';

function Registrarpro({ productoEditado, onGuardado}) {
const [nombre, setNombre] = useState('');
const [precio, setPrecio] = useState('');
const [descripcion, setDescripcion] = useState('');
const [stock, setStock] = useState('');
const [idCategoria, setIdCategoria] = useState('');

 useEffect(() => {
  if (productoEditado) {
    setNombre(productoEditado.nombre || '');
    setPrecio(productoEditado.precio || '');
    setDescripcion(productoEditado.descripcion || '');
    setStock(productoEditado.stock || '');
    setIdCategoria(productoEditado.id_categoria || '');
  } else {
    setNombre('');
    setPrecio('');
    setDescripcion('');
    setStock('');
    setIdCategoria('');
  }
}, [productoEditado]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const datosProducto = { 
  nombre, 
  precio, 
  descripcion, 
  stock, 
  id_categoria: idCategoria 
};


    try {
      if (productoEditado) {
  await api.put(`/productos/${productoEditado.id}`, datosProducto);
  alert("Producto actualizado correctamente");
} else {
  await api.post('/productos', datosProducto);
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
    placeholder="Nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    required
  />
  <input
    type="number"
    placeholder="Precio"
    value={precio}
    onChange={(e) => setPrecio(e.target.value)}
    required
  />
  <input
    type="text"
    placeholder="Descripción"
    value={descripcion}
    onChange={(e) => setDescripcion(e.target.value)}
    required
  />
  <input
    type="number"
    placeholder="Stock"
    value={stock}
    onChange={(e) => setStock(e.target.value)}
    required
  />
  <input
    type="number"
    placeholder="ID Categoría"
    value={idCategoria}
    onChange={(e) => setIdCategoria(e.target.value)}
    required
  />
  <button type="submit">
    {productoEditado ? "Actualizar" : "Registrar"}
  </button>
</form>

    </div>
  );
}

export default Registrarpro;
