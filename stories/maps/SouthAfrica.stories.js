import { VectorMap } from "@react-jvectormap/core";
  import { zaMerc, zaMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/SouthAfrica",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: zaMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: zaMill,
  };

  