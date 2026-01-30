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
            <h2>Este es un ejemplo de pagina web con assets</h2>
        </div>
    )
}
function Dic(){
    return(
        <div className="ddic">
            <h2 className="dera">aqui tambien encontraras cosas grandiosas</h2>
        </div>
    )
}
export default Tarjet