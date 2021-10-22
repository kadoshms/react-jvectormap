import { VectorMap } from "@react-jvectormap/core";
  import { usAea, usLcc, usMill, useMerc } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/UnitedStates",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: usAea,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: usLcc,
  };

export const Albers = VectorMapTemplate.bind({});
  Albers.args = {
    map: usMill,
  };

export const Lambert = VectorMapTemplate.bind({});
  Lambert.args = {
    map: useMerc,
  };

  