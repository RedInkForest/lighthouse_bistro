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
    <div className="container" id="hours">
      <div className="text">
        <h1 className="InfoHeader">HOURS</h1>
        <p>Monday-Friday 11:00 AM - 9:00 PM</p>
        <p>Saturday- Sunday Noon - 9:00 PM</p>
        <h1 className="InfoHeader">LOCATION</h1>
        <p>10 Bayfront Ave, Singapore 018956</p>
        <p>Phone Number: 505-503-4455</p>
      </div>

      <div ref={mapElement} className="mapDiv"/>
    </div>
  );
}

export default About;

