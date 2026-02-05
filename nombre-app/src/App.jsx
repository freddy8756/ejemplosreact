import { useState } from "react";
import Encabezado from "./Encabezado";
import Expresiones from "./Exprecciones";
import Tarjeta from "./Tarjeta";
import Tarjet from "./Tarjet";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div>
      <Encabezado cambiarvista={setVista} /> 
      <Tarjeta vista={vista}/>
      <Expresiones name="freddy"/>
      <Tarjet/>
    </div>
  );
}

export default App;
