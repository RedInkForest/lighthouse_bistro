import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import './About.css'

function About() {
  const mapElement = useRef();
  const mapLongitude = 103.858528;
  const mapLatitude = 1.282302;
  const mapZoom = 16
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_KEY,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom
    });

    var marker = new tt.Marker().setLngLat([mapLongitude,mapLatitude]).addTo(map)

    setMap(map);
  }, []);
  
  return (
    <div className="container">
      <div className="text">
        <h1>HOURS</h1>
      </div>
      <div ref={mapElement} className="mapDiv"/>
    </div>
  );
}

export default About;

