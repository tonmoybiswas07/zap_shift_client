import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const warehousesData = useLoaderData();
  console.log(warehousesData);
  const position = [23.685, 90.3563];
  const mapref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const districtData = warehousesData.find((warehouse) =>
      warehouse.district.toLowerCase().includes(location.toLowerCase())
    );
    if (districtData) {
      const cordinate = [districtData.latitude, districtData.longitude];

      mapref.current.flyTo(cordinate, 10, {
        duration: 2,
      });
    }
  };
  return (
    <div className="bg-white p-10 my-10 rounded-2xl">
      <div>
        <h2 className="text-5xl font-extrabold">
          We are available in 64 districts
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-start items-start mt-5">
          <div>
            <input
              className="bg-gray-200 border-2 border-[#CAEB66] rounded-2xl h-10 w-70 pl-3"
              placeholder="search here"
              type="search"
              name="location"
              id=""
            />
          </div>
          <button className="btn rounded-2xl -ml-6 bg-[#CAEB66] border-2 border-[#CAEB66]">
            Search
          </button>
        </div>
      </form>
      <hr className="mt-10 text-gray-300" />
      <div>
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[500px] w-full my-10 rounded-2xl"
          ref={mapref}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {warehousesData.map((warehouse, index) => (
            <Marker
              key={index}
              position={[warehouse.latitude, warehouse.longitude]}
            >
              <Popup>
                <strong>{warehouse.district}</strong>. <br /> Service Area :
                {warehouse.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
