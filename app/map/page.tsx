"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent: React.FC = () => {
  // Define the center of the map
  const center = { lat: 37.9838, lng: 23.7275 }; // Coordinates for Athens

  // Define the radius (in meters) for the circle overlay
  const radius: number = 1000; // 1km radius

  // Dummy data for markers, replace with actual data
  const markers = [
    { id: 1, position: { lat: 37.9758, lng: 23.7345 }, name: "Location 1" },
    { id: 2, position: { lat: 37.9808, lng: 23.7265 }, name: "Location 2" },
    // ...other markers
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black text-white">
        <div className="text-2xl">A</div>
        <div className="text-xl">map</div>
        <div className="p-2 rounded-full bg-yellow-400"></div>
      </div>

      {/* Map */}
      <div className="flex-grow relative">
        <MapContainer>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Circle to represent the radius */}
          <Circle
            center={center}
            pathOptions={{
              color: "yellow",
              fillColor: "yellow",
              fillOpacity: 0.5,
            }}
          />
          {/* Markers for locations */}
          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Footer */}
      <div className="p-4 bg-white">
        <div className="flex justify-between">
          <button className="border-2 border-black px-4 py-1 mr-2">MAP</button>
          <button className="border-2 border-black px-4 py-1">LIST</button>
        </div>
        <div className="flex justify-between mt-2">
          <button className="border-2 border-black px-4 py-1 mr-2">
            ADJUST RADIUS
          </button>
          <button className="border-2 border-black px-4 py-1">FILTERS</button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
