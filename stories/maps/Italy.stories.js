import { VectorMap } from "@react-jvectormap/core";
  import { itMerc, itMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Italy",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: itMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: itMill,
  };

  