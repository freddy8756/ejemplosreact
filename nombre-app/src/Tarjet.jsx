import "./Tarjet.css"
function Tarjet(){
    return (
        <div className="tsacs">
            <Doc/>
            <Dic/>
        </div>
    )
}
function Doc(){
    return(
        <div className="deoc">
            izquierda
        </div>
    )
}
function Dic(){
    return(
        <div className="ddic">
            derecha
        </div>
    )
}
export default Tarjet