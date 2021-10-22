import { VectorMap } from "@react-jvectormap/core";
  import { arMerc, arMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Argentina",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: arMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: arMill,
  };

  