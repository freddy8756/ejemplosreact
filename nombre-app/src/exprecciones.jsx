import "./Exprecciones.css"

function Expresiones(props){
    const nombre = 'angel eutiquio';
    const apellidos = 'cruz huerta';
    return (
        <div className="zona">
            {/* Aquí pasamos la prop name hacia Promociones */}
            <Promociones name={props.name}/>
            <h2>expresiones</h2>
            <h3>tu nombre es: {nombre} y tus apellidos son: {apellidos}</h3>
        </div>
    )
}

/*
function Lista(){
    const users = [
        {id: 1, name: 'Eutiquio', role: 'web desiner'},
        {id: 2, name: 'gadiel', role: 'lider de equipo'},
        {id: 3, name: 'mario', role: 'isom leader'}
    ]
    return(
        <div >
            <table className="expre">
                <tbody>
                    <tr>
                     <th className="table"> nombre </th>
                     <th className="table"> roll </th>
                    </tr>
                    {
                        users.map(function(user,index){
                            return(
                                <tr key={index}>
                                 <td className="name">{user.name}</td>
                                 <td className="name">{user.role}</td>
                                </tr>
                            )
                        })
                    }   
                </tbody>
            </table>
        </div>
    )
}*/
function Promociones({name}){
    console.info(name)
    if(name !== ""){
        return(
            <div className="promosDiv">
                <h3>Seccion de promos</h3>
                <p>Bienvenido {name}, aquí están tus actividades</p>
            </div>
        )
    }
    return(
        <div><h3>no hay datos</h3></div>
    )
}

export default Expresiones