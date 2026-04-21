import { useEffect, useState } from "react";
import './Clima.css';

function Clima() {
  const [clima, setClima] = useState(null);
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const lat = 20.276324;
  const lng = -97.957975;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la petición: " + res.status);
        return res.json();
      })
      .then((data) => setClima(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="climas">
      {clima && clima.main ? (
        <>
          <p>
            📍 {clima.name}  
            🌡 {clima.main.temp} °C  
            💧 {clima.main.humidity} %
          </p>
          <p>☁️ {clima.weather[0].description}</p>
        </>
      ) : (
        <p>Cargando clima...</p>
      )}
    </div>
  );
}

export default Clima;
