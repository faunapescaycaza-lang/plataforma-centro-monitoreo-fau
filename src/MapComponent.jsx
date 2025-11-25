import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import Papa from "papaparse";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet library

// Fix for default Leaflet icons not appearing when served from a non-standard location
// This block ensures Leaflet looks for its default icons in the 'public/images' directory
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'images/marker-icon-2x.png',
  iconUrl: 'images/marker-icon.png',
  shadowUrl: 'images/marker-shadow.png',
});


const MapComponent = () => {
  const [points, setPoints] = useState([]);
  const [polygon, setPolygon] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const parsePoints = async () => {
      const response = await fetch('/Mapas/Camaras_Fauna_Seguridad- Cámaras Monitoreo FAUNA NQN_2025.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);

      Papa.parse(csv, {
        header: true,
        complete: (results) => {
          const parsedPoints = results.data
            .map(row => {
              const wkt = row.WKT || row.Wkt;
              if (wkt) {
                const match = wkt.match(/POINT \(([-.\d]+) ([-.\d]+)\)/);
                if (match) {
                  return {
                    lat: parseFloat(match[2]),
                    lng: parseFloat(match[1]),
                    name: row.nombre,
                    description: row.descripción,
                  };
                }
              }
              return null;
            })
            .filter(point => point !== null && !isNaN(point.lat) && !isNaN(point.lng));
          setPoints(parsedPoints);
        },
      });
    };

    const parsePolygon = async () => {
      const response = await fetch('/Mapas/Camaras_Fauna_Seguridad- NQN.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);

      Papa.parse(csv, {
        header: true,
        complete: (results) => {
          const wkt = results.data[0]?.WKT || results.data[0]?.Wkt;
          if (wkt) {
            const match = wkt.match(/POLYGON \(\((.*)\)\)/);
            if (match) {
              const coordPairs = match[1].split(', ');
              const parsedPolygon = coordPairs.map(pair => {
                const coords = pair.split(' ');
                return [parseFloat(coords[1]), parseFloat(coords[0])]; // Swap to [lat, lng]
              });
              setPolygon(parsedPolygon);
            }
          }
        },
      });
    };

    parsePoints();
    parsePolygon();
  }, []);

  useEffect(() => {
    if (map && (points.length > 0 || polygon.length > 0)) {
      const bounds = L.latLngBounds();
      if (points.length > 0) {
        points.forEach(point => bounds.extend([point.lat, point.lng]));
      }
      if (polygon.length > 0) {
        bounds.extend(polygon);
      }
      map.fitBounds(bounds, { padding: [50, 50] }); // Add padding
    }
  }, [map, points, polygon]);

  const center = [-38.9516, -68.0591];

  return (
    <MapContainer
      center={center}
      zoom={7}
      whenCreated={setMap}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map((point, idx) => (
        <Marker key={idx} position={[point.lat, point.lng]}>
          <Popup>
            <b>{point.name}</b><br />
            {point.description}
          </Popup>
        </Marker>
      ))}
      {polygon.length > 0 && (
        <Polygon positions={polygon} color="red" fillColor="transparent" />
      )}
    </MapContainer>
  );
};

export default MapComponent;