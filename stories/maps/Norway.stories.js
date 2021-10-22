import { VectorMap } from "@react-jvectormap/core";
  import { noMerc, noMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Norway",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: noMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: noMill,
  };

  