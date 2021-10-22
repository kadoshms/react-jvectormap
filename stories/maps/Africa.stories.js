import { VectorMap } from "@react-jvectormap/core";
  import { africaMerc, africaMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Africa",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: africaMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: africaMill,
  };

  