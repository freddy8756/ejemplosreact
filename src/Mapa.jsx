import { GoogleMap, useJsApiLoader, Marker, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px"
};

function Mapa({ sucursal, sucursales }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  if (loadError) return <div>Error cargando mapa</div>;
  if (!isLoaded) return <div>Cargando...</div>;

  const puntos = sucursales.map(s => ({ lat: s.lat, lng: s.lng }));

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: sucursal.lat, lng: sucursal.lng }}
      zoom={16}
    >  
      <Marker position={{ lat: sucursal.lat, lng: sucursal.lng }} label={sucursal.name} />    
      {sucursales.filter(s => s.id !== sucursal.id).map((s, i) => (
        <Marker key={i} position={{ lat: s.lat, lng: s.lng }} label={s.name} />
      ))}
      <Polyline
        path={puntos}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2
        }}
      />
    </GoogleMap>
  );
}

export default Mapa;
