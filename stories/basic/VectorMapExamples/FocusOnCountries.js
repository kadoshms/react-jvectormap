import { worldMerc } from "@react-jvectormap/world";
import { VectorMapBuilder } from "@react-jvectormap/core";
import { MapContainer } from "../../components/MapContainer/MapContainer";
import React, { useRef } from "react";
import { VectorMap } from "@react-jvectormap/core";

export const FocusOnCountriesTemplate = (args) => {
  const ref = useRef(null);
  const focusOnRegion = (code) => {
    ref.current.setFocus({
      regions: [code],
      animate: true,
    });
  };

  return (
    <MapContainer>
      <button onClick={() => focusOnRegion("AU")}>Focus on Australia</button>
      <button onClick={() => focusOnRegion("BR")}>Focus on Brazil</button>
      <button onClick={() => focusOnRegion("MK")}>Focus on Macedonia</button>
      <button onClick={() => focusOnRegion("CD")}>Focus on Congo</button>
      <VectorMap mapRef={ref} {...args} />
    </MapContainer>
  );
};

const map = new VectorMapBuilder(worldMerc).build();
export default map;
