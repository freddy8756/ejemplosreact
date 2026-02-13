import { useEffect,useState } from "react";
import { GoogleMap,LoadScript, Marker } from "@react-google-maps/api";
function Mapaubica(){
    const [ubicacion,setubicacion] = useState(null);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setubicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            },
            (error)=>console.error(error),
            {enableHighAccuracy:true}
        )
    },[])

    return(

        <LoadScript googleMapsApikey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            {ubicacion && (
                <GoogleMap
                mapContainerStyle={{width:"100%", height:"300px"}}
                center={ubicacion}
                zoom={15}
                >
                    <Marker position ={ubicacion}/>
                </GoogleMap>
            )}
        </LoadScript>
    )
}

export default Mapaubica