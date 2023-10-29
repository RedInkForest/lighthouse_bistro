import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

function App() {
  const mapElement = useRef();
  const mapLongitude = -121.91599;
  const mapLatitude = 37.36765;
  const mapZoom = 13
  const [map, setMap] = useState({});


  useEffect(() => {
    let map = tt.map({
      key: process.env.TOM_TOM_KEY,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom
    });
    setMap(map);
    return () => map.remove();
  }, []);

  return (
    <div className="App">
            <div ref={mapElement} className="mapDiv" />
        
    </div>
  );
}

export default App;
