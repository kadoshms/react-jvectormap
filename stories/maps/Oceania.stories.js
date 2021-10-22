import { VectorMap } from "@react-jvectormap/core";
  import { oceaniaMerc, oceaniaMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Oceania",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: oceaniaMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: oceaniaMill,
  };

  