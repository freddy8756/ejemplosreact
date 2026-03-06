import { useState } from "react";
import Encabezado from "./Encabezado";
import Expresiones from "./Exprecciones";
import Tarjeta from "./Tarjeta";
import Tarjet from "./Tarjet";
import { AuthProvider } from "./Authcontex";
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
