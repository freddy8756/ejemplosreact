import coche from './assets/coche.jpg';
import cochea from './assets/descarga.jpg';
import coches from './assets/nd.jpg';
import "./Tarjeta.css"
function Tarjeta(){
    return (
        <div className="tacs">
            <Doc name='carroseria' descripcion='Un buen coche '/>
            <Dic name='fabuloso' descripcion='El mas rapido de su tiempo'/>
            <Dooc name='auto clasico' descripcion='Viejo coche' saludarfun={Saludar}/>
        </div>
    )
}
function Doc(props){
    return(
        <div className="doc">
            <img src={coche} alt='coche' ></img>
            <h2>{props.name}</h2>
            <p>{props.descripcion}</p>
        </div>
    )
}
function Dic(props){
    return(
        <div className="dic">
                <img src={cochea} alt='coche' ></img>
                <h2>{props.name}</h2>
            <p>{props.descripcion}</p>
        </div>
    )
}
function Dooc(props){
    return(
        <div className="dooc">
                <img src={coches} alt='coche' ></img>
                <h2>{props.name}</h2>
            <p>{props.descripcion}</p>
            <p>{props.saludarfun()}</p>
        </div>
    )
}
function Saludar(){
 return(
    <div>
    
    </div>
 )
}
export default Tarjeta