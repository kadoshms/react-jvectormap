import { usLCC } from "@react-jvectormap/maps";
import { MapContainer } from "../components/MapContainer/MapContainer";
import React, { useLayoutEffect, useRef, useMemo } from "react";
import { VectorMap } from "@react-jvectormap/core";
let markerIndex = 0;
const markersCoords = {};

export const ReverseProjectionTemplate = () => {
  const mapRef = useRef(null);

  const props = useMemo(
    () => ({
      map: usLCC,
      markerStyle: {
        initial: {
          fill: "red",
        },
      },
      onMarkerTipShow: function (e, label, code) {
        mapRef.current.tip.text(
          markersCoords[code].lat.toFixed(2) +
            ", " +
            markersCoords[code].lng.toFixed(2),
        );
      },
      onMarkerClick: function (e, code) {
        mapRef.current.removeMarkers([code]);
        mapRef.current.tip.hide();
      },
    }),
    [],
  );

  useLayoutEffect(() => {
    const map = mapRef.current;
    map.container.click((e) => {
      const latLng = map.pointToLatLng(
        e.pageX - map.container.offset().left,
        e.pageY - map.container.offset().top,
      );
      if (latLng) {
        markersCoords[++markerIndex] = latLng;
        map.addMarker(markerIndex, { latLng: [latLng.lat, latLng.lng] });
      }
    });
  }, []);

  return (
    <MapContainer
      description={
        "This example demonstrates the ability to convert pixel coordinates on map to the repsective latitude and longitude coordinates. Click on the map adds marker to the clicked point, click on the added marker removes it."
      }
    >
      <VectorMap mapRef={mapRef} {...props} />
    </MapContainer>
  );
};

const args = {};

export default args;
