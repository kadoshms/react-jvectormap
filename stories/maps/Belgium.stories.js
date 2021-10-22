import { VectorMap } from "@react-jvectormap/core";
  import { beMerc, beMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Belgium",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: beMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: beMill,
  };

  