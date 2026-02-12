import "./Sucursales.css"
import Mapa from "./mapa";
function Sucursales() {
  return(
    <div className="sucursaless">
    <>
     <TarjetComposi name="alameda auyante" descripcion="cale mina" cordenadas="20.276324,-97.957975"/>
     <TarjetComposise name="parque placentero" descripcion="calle alvarado" cordenadas="20.276471 ,-97.957765"/>
      <TarjetComposisew name="señorio de la sal"descripcion="calle florida"cordenadas="20.275731,-97.957807"/>
    </>
    </div>
  )
}
function TarjetComposisew(props) {
  return (
    <div className="sucursalesss">
      <h2>{props.name}</h2>
      <p>{props.descripcion}</p>
      <p>{props.cordenadas}</p>
      <Mapa 
         lat={20.276324 }
         ing={-97.957975}
        />
    </div>
  );
}
function TarjetComposi(props) {
  return (
    <div className="sucursal">
      <h2>{props.name}</h2>
      <p>{props.descripcion}</p>
      <p>{props.cordenadas}</p>
      <Mapa 
         lat={20.276471 }
         ing={-97.957765}
        />
    </div>
  );
}
function TarjetComposise(props) {
  return (
    <div className="sucursale">
      <h2>{props.name}</h2>
      <p>{props.descripcion}</p>
      <p>{props.cordenadas}</p>
      <Mapa 
         lat={20.275731}
         ing={-97.957807}
        />
    </div>
  );
}

export default Sucursales;