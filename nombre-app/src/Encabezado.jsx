import miimagen from "./assets/images.jpg";
function Encabezado(){
    return (
    <div>
       <Logotipo />
       <Menu />
       <Redes />
    </div>
    )
}


function Logotipo() {
  return( 
    <div>
        <img src={miimagen} alt="ytjj"></img>
    </div>
  )
}
function Menu(){
    return(
        <div>
            <ul>
                <li>inicio</li>
                <li>acerca de</li>
                <li>productos</li>
                <li>contacto</li>
                <li>sucursales</li>
            </ul>
        </div>
    )
}
function Redes(){
    return(
        <div>
            <ul>
                <li>facebook</li>
                <li>watsap</li>
                <li>instagram</li>
                <li>youtube</li>
            </ul>
        </div>
    )
}
export default Encabezado
