import coche from './assets/coche.jpg';
import cochea from './assets/descarga.jpg';
import coches from './assets/nd.jpg';
import "./Tarjeta.css"
function Tarjeta(){
    return (
        <div className="tacs">
            <Doc/>
            <Dic/>
            <Dooc/>
        </div>
    )
}
function Doc(){
    return(
        <div className="doc">
            <img src={coche} alt='coche' ></img>
            <h2>carroseria</h2>
        </div>
    )
}
function Dic(){
    return(
        <div className="dic">
                <img src={cochea} alt='coche' ></img>
                <h2>fabuloso hodson </h2>
        </div>
    )
}
function Dooc(){
    return(
        <div className="dooc">
                <img src={coches} alt='coche' ></img>
                <h2>auto clasico</h2>
        </div>
    )
}
export default Tarjeta