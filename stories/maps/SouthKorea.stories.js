import { VectorMap } from "@react-jvectormap/core";
  import { krMerc, krMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/SouthKorea",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: krMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: krMill,
  };

  