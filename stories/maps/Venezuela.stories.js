import { VectorMap } from "@react-jvectormap/core";
  import { veMerc, veMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Venezuela",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: veMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: veMill,
  };

  