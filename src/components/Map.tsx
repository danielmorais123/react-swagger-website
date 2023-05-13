import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { memo, useCallback, useState, useEffect } from "react";

const Map = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: -1, lng: -1 });
  const [place, setPlace] = useState("");
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD8fBvFD7QG6pqkJ1LHLJD3aXRMDlt4Tqw",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return isLoaded ? (
    <>
      {/* <Autocomplete
        onPlaceChanged={() => {
          setPlace(" ");
        }}
      >
        <input type="text" value={place} />
      </Autocomplete> */}
      <GoogleMap
        mapContainerClassName="w-[95%] mx-auto h-[350px] "
        center={center}
        zoom={15}
        //   onLoad={onLoad}
        //   onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default memo(Map);
