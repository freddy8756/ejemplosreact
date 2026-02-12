import {GoogleMap, useJsApiLoader,Marker}from "@react-google-maps/api"
const containerStyle ={
    width:'100%',
    height:'400px'
};
function Mapa({lat,ing,nombre}){
    const {isLoaded,loadError}=useJsApiLoader({
        googleMapsApiKey:import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })
    if(loadError) return <div> error cargando mapa</div>
    if(!isLoaded) return <div>cargando</div>

    const center = {lat, ing}
    return(
        <div>
            <h3>{nombre}</h3>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
            >
                <Marker position={center}/>
            </GoogleMap>
        </div>
    )
}
export default Mapa