import { VectorMap } from "@react-jvectormap/core";
  import { frMerc, frMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/France",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: frMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: frMill,
  };

  