import { VectorMap } from "@react-jvectormap/core";
  import { esMerc, esMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Spain",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: esMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: esMill,
  };

  