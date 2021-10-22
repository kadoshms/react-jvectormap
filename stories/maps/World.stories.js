import { VectorMap } from "@react-jvectormap/core";
  import { worldMerc, worldMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/World",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: worldMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: worldMill,
  };

  