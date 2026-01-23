function Expresiones(){
    const nombre = 'angel eutiquio';
    const apellidos = 'cruz huerta';
    return (
        <div>
            <Lista/>
            <h2>expresiones</h2>
            <h3>tu nomobre es: {nombre} y tus apelldios es: {apellidos}</h3>
        </div>
    )
}
function Lista(){
    const users = [
        {id: 1, name: 'Eutiquio', role: 'web desiner'},
        {id: 2, name: 'gadiel', role: 'lider de equipo'},
        {id: 3, name: 'mario', role: 'isom leader'}
    ]
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                     <th> nombre </th>
                     <th> roll </th>
                    </tr>
                    {
                        users.map(function(user,index){
                            return(
                                <tr key={index}>
                                 <td>{user.name}</td>
                                 <td>{user.role}</td>
                                </tr>
                            )
                        })
                    }   
                </tbody>
            </table>
        </div>
    )
}
export default Expresiones