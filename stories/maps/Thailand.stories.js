import { VectorMap } from "@react-jvectormap/core";
  import { thMerc, thMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Thailand",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: thMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: thMill,
  };

  