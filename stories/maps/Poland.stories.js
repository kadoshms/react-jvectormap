import { VectorMap } from "@react-jvectormap/core";
  import { plMerc, plMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Poland",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: plMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: plMill,
  };

  