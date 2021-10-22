import { VectorMap } from "@react-jvectormap/core";
  import { chMerc, chMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Switzerland",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: chMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: chMill,
  };

  