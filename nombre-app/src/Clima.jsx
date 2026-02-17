import { useEffect, useState } from "react";
import './Clima.css';
function Clima(){
    const [clima,setClima]= useState (null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const lat = 20.276324/*colocas esto en lat */
    const lng = -97.957975/* colocas esto en long*/ 

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
        .then((res)=>res.json())
        .then((data)=>{
            setClima(data)
        })
        .catch((error) => console.json("Error:",error));
    },[])

    return (
        <div className="climas">
            {
                clima ? (
                    <>
                    <p>{clima.name} -su 🌡 temperatura es igual a: {clima.main.temp} -💧humedad: {clima.main.humidity}</p>
                    <p>{clima.weather.description}</p>
                    </>
                ):(
                    <p>Cargar clima...</p>
                )
            }
        </div>
    )
}
export default Clima;