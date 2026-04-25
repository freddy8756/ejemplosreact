import { useState } from "react";
import Encabezado from "./Encabezado.jsx";
import Expresiones from "./Exprecciones.jsx";
import Tarjeta from "./Tarjeta.jsx";
import Tarjet from "./Tarjet.jsx";
import { AuthProvider } from "./Authcontex.jsx";  // corregido

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div>
      <AuthProvider>
        <Encabezado cambiarvista={setVista} /> 
        <Tarjeta vista={vista} chVista={setVista}/>
      </AuthProvider>
      <Expresiones name="freddy"/>
      <Tarjet/>
    </div>
  );
}

export default App;
