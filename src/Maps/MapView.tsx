import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type MapViewProps = {
  lat: number;
  lng: number;
  title: string;
};

const MapView: React.FC<MapViewProps> = ({ lat, lng, title }) => {
  return (
    <div className="h-64 w-full rounded-lg overflow-hidden shadow">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
