import { VectorMap } from "@react-jvectormap/core";
  import { coMerc, coMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Colombia",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: coMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: coMill,
  };

  