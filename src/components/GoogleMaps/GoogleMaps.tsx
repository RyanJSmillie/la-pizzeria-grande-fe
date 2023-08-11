import React from "react";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./GoogleMaps.css";

import pizza from "../../assets/pizza-small.png";

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const GoogleMaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
  });
  const center = useMemo(
    () => ({ lat: 48.1350344049515, lng: 11.573813936839583 }),
    []
  );

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker
            position={{ lat: 48.1350344049515, lng: 11.573813936839583 }}
            icon={pizza}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMaps;
